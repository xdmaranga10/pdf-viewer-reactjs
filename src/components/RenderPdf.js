import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

import Alert from './Alert'
import Modal from 'react-modal'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
let pdf = null

const RenderPdf = ({
    document,
    withCredentials,
    password,
    pageNum,
    scale,
    rotation,
    pageCount,
    changePage,
    showThumbnail,
    protectContent,
    watermark,
    alert,
    canvasCss,
}) => {
    const [error, setError] = useState({ status: false, message: '' })
    const canvasRef = useRef(null)
    const thumbnailRef = useRef(null)
    const selectedRef = useRef(null)
    const isInitialMount = useRef(true)

    const [thumbnails, setThumbnails] = useState([])
    const [images, setImages] = useState([])

    const [modalThumbnails, setModalThumbnails] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const AlertComponent = alert ? alert : Alert

    const fetchPDF = async () => {
        // Get PDF file
        try {
            let objDocInit = { withCredentials, password }
            if (document.url == undefined) {
                objDocInit.data = atob(document.base64)
            } else {
                objDocInit.url = document.url
            }
            pdf = await pdfjs.getDocument(objDocInit).promise

            await displayPage()
            await createImages()
            displayThumbnails()

            // call pageCountfunction
            pageCount(pdf.numPages)
        } catch (error) {
            console.warn('Error while opening the document !\n', error)
            setError({
                status: true,
                message: 'Error while opening the document !',
            })
        }
    }

    const displayPage = async () => {
        // display pdf page
        try {
            const page = await pdf.getPage(pageNum)
            const viewport = page.getViewport({ scale, rotation })
            // Prepare canvas using PDF page dimensions
            const canvas = canvasRef.current
            canvas.height = viewport.height
            canvas.width = viewport.width

            // Render PDF page into canvas context
            let canvasContext = canvas.getContext('2d')
            const renderContext = {
                canvasContext,
                viewport,
            }
            const renderTask = page.render(renderContext)
            try {
                await renderTask.promise
                if (Object.entries(watermark).length !== 0) {
                    //watermark config
                    const {
                        text,
                        diagonal,
                        opacity,
                        font,
                        size,
                        color,
                    } = watermark
                    // setup watermark text for filling
                    canvasContext.globalAlpha = opacity
                    canvasContext.font = `${size * scale}px ${
                        font !== '' ? font : 'Comic Sans MS'
                    }`
                    canvasContext.fillStyle = color

                    // get the metrics with font settings
                    var metrics = canvasContext.measureText(text)
                    var width = metrics.width
                    var height = size * scale // height is font size
                    canvasContext.translate(
                        viewport.width / 2,
                        viewport.height / 2
                    )

                    // rotate the context and center the text
                    if (diagonal) {
                        canvasContext.rotate(-0.785)
                    }
                    canvasContext.fillText(text, -width / 2, height / 2)
                }
            } catch (error) {
                console.warn('Error occured while rendering !\n', error)
                setError({
                    status: true,
                    message: 'Error occured while rendering !',
                })
            }
        } catch (error) {
            console.warn('Error while reading the pages !\n', error)
            setError({
                status: true,
                message: 'Error while reading the pages !',
            })
        }
    }

    const createImages = async () => {
        if (Object.entries(showThumbnail).length !== 0) {
            // create images for all pages
            const imgList = []

            let scale = 0.1
            let rotation = 0
            if (1 <= showThumbnail.scale && showThumbnail.scale <= 5) {
                scale = showThumbnail.scale / 10
            }
            if (
                showThumbnail.rotationAngle === -90 ||
                showThumbnail.rotationAngle === 90
            ) {
                rotation = showThumbnail.rotationAngle
            }

            for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
                const page = await pdf.getPage(pageNo)
                const viewport = page.getViewport({ scale, rotation })

                // Prepare canvas using PDF page dimensions
                const canvas = thumbnailRef.current
                canvas.height = viewport.height
                canvas.width = viewport.width

                // Render PDF page into canvas context
                let canvasContext = canvas.getContext('2d')
                const renderContext = {
                    canvasContext,
                    viewport,
                }
                const renderTask = page.render(renderContext)
                await renderTask.promise
                if (Object.entries(watermark).length !== 0) {
                    //watermark config
                    const {
                        text,
                        diagonal,
                        opacity,
                        font,
                        size,
                        color,
                    } = watermark
                    // setup watermark text for filling
                    canvasContext.globalAlpha = opacity
                    canvasContext.font = `${size * scale}px ${
                        font !== '' ? font : 'Comic Sans MS'
                    }`
                    canvasContext.fillStyle = color

                    // get the metrics with font settings
                    var metrics = canvasContext.measureText(text)
                    var width = metrics.width
                    var height = size * scale // height is font size
                    canvasContext.translate(
                        viewport.width / 2,
                        viewport.height / 2
                    )

                    // rotate the context and center the text
                    if (diagonal) {
                        canvasContext.rotate(-0.785)
                    }
                    canvasContext.fillText(text, -width / 2, height / 2)
                }

                // create image from canvas and push into array
                imgList.push({
                    image: canvas.toDataURL('image/png'),
                    height: viewport.height,
                    width: viewport.width,
                })
            }
            setImages(imgList)
        }
    }

    const displayThumbnails = () => {
        if (Object.entries(showThumbnail).length !== 0) {
            // display thumbnails for all pages
            const thumbnailList = []
            const modalThumbnails = []

            for (let pageNo = 1; pageNo <= images.length; pageNo++) {
                let image = images[pageNo - 1].image
                let height = images[pageNo - 1].height
                let width = images[pageNo - 1].width
                thumbnailList.push(
                    <img
                        style={
                            pageNum === pageNo
                                ? {
                                      height,
                                      width,
                                      display: 'flex',
                                      cursor: 'pointer',
                                      margin: '10px 15px',
                                      border: '5px solid red',
                                  }
                                : {
                                      height,
                                      width,
                                      display: 'flex',
                                      cursor: 'pointer',
                                      margin: '10px 15px',
                                      boxShadow:
                                          'rgba(0, 0, 0, 0.6) 0px 2px 2px 0px',
                                  }
                        }
                        onClick={() => changePage(pageNo)}
                        ref={pageNum === pageNo ? selectedRef : null}
                        key={pageNo}
                        alt={`thumbnail of page ${pageNo}`}
                        src={image}
                    />
                )

                modalThumbnails.push({
                    image,
                    isSelected: pageNum === pageNo,
                    onClick: () => changePage(pageNo),
                })
            }
            // insert space at the end of all pages
            thumbnailList.push(
                <div key={0} style={{ padding: '0px 10px' }}></div>
            )

            setThumbnails(thumbnailList)
            setModalThumbnails(modalThumbnails)
        }
    }

    const scrollThumbnail = () => {
        // scroll selected thumbnail into view
        if (
            selectedRef.current !== null &&
            Object.entries(showThumbnail).length !== 0
        ) {
            selectedRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            })
        }
    }

    useEffect(() => {
        fetchPDF()
    }, [document, password])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
        } else {
            displayPage()
            displayThumbnails()
        }
    }, [pageNum, scale, rotation, pageCount])

    useEffect(() => {
        scrollThumbnail()
    })

    const modal = (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}>
            <div style={{ textAlign: 'right', width: '100%' }}>
                <button
                    type='button'
                    onClick={() => setModalIsOpen(false)}
                    style={{
                        background: 'gray',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        outline: 'none',
                        padding: '8px 8px 5px',
                    }}>
                    <i className='material-icons' style={{ fontSize: '16px' }}>
                        close
                    </i>
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                {modalThumbnails.map(
                    ({ image, onClick, isSelected }, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'inline-block',
                                margin: '10px',
                                width: 'calc(20% - 20px)',
                            }}>
                            <img
                                src={image}
                                onClick={() => {
                                    setModalIsOpen(false)
                                    onClick()
                                }}
                                style={
                                    isSelected
                                        ? {
                                              border: '5px solid red',
                                              cursor: 'pointer',
                                              display: 'block',
                                              width: '100%',
                                          }
                                        : {
                                              border: '1px solid black',
                                              cursor: 'pointer',
                                              display: 'block',
                                              width: '100%',
                                          }
                                }
                            />
                            <span
                                style={{
                                    display: 'block',
                                    fontWeight: '700',
                                    marginTop: '5px',
                                }}>
                                {index + 1}
                            </span>
                        </div>
                    )
                )}
            </div>
        </Modal>
    )

    const viewModalButton = (
        <button
            type='button'
            onClick={() => setModalIsOpen(true)}
            style={{
                background: 'none',
                backgroundColor: 'white',
                border: '1px solid white',
                bottom: '18px',
                color: 'black',
                cursor: 'pointer',
                fontSize: '14px',
                left: '10px',
                lineHeight: '0',
                margin: '0 auto',
                outline: 'none',
                padding: '5px 10px',
                position: 'absolute',
            }}>
            <i className='material-icons'>grid_on</i>
        </button>
    )

    if (error.status) {
        pageCount(-1)
        return (
            <div
                className={canvasCss ? canvasCss : ''}
                style={
                    canvasCss
                        ? {}
                        : {
                              height: '1000px',
                              overflow: 'auto',
                          }
                }>
                <AlertComponent message={error.message} />
            </div>
        )
    } else {
        if (Object.entries(showThumbnail).length !== 0) {
            return (
                <>
                    {modal}
                    {viewModalButton}
                    <div
                        className={canvasCss ? canvasCss : ''}
                        style={
                            canvasCss
                                ? {}
                                : {
                                      height: '1000px',
                                      overflow: 'auto',
                                  }
                        }>
                        <canvas
                            onContextMenu={e =>
                                protectContent ? e.preventDefault() : null
                            }
                            ref={canvasRef}
                            width={
                                typeof window !== 'undefined' &&
                                window.innerWidth
                            }
                            height={
                                typeof window !== 'undefined' &&
                                window.innerHeight
                            }
                        />
                    </div>
                    <div
                        style={{
                            backgroundColor: '#EAE6DA',
                            display: 'flex',
                            flexDirection: 'row',
                            overflowX: 'auto',
                        }}>
                        {thumbnails}
                    </div>
                    <canvas ref={thumbnailRef} style={{ display: 'none' }} />
                </>
            )
        } else {
            return (
                <>
                    {modal}
                    {viewModalButton}
                    <div
                        className={canvasCss ? canvasCss : ''}
                        style={
                            canvasCss
                                ? {}
                                : {
                                      height: '1000px',
                                      overflow: 'auto',
                                  }
                        }>
                        <canvas
                            onContextMenu={e =>
                                protectContent ? e.preventDefault() : null
                            }
                            ref={canvasRef}
                            width={
                                typeof window !== 'undefined' &&
                                window.innerWidth
                            }
                            height={
                                typeof window !== 'undefined' &&
                                window.innerHeight
                            }
                        />
                    </div>
                </>
            )
        }
    }
}

RenderPdf.propTypes = {
    document: PropTypes.any.isRequired,
    withCredentials: PropTypes.bool,
    password: PropTypes.string,
    pageNum: PropTypes.number.isRequired,
    scale: PropTypes.number.isRequired,
    rotation: PropTypes.number.isRequired,
    changePage: PropTypes.func,
    pageCount: PropTypes.func,
    showThumbnail: PropTypes.shape({
        scale: PropTypes.number,
        rotationAngle: PropTypes.number,
    }),
    protectContent: PropTypes.bool,
    watermark: PropTypes.shape({
        text: PropTypes.string,
        diagonal: PropTypes.bool,
        opacity: PropTypes.string,
        size: PropTypes.string,
        color: PropTypes.string,
    }),
    canvasCss: PropTypes.string,
}

RenderPdf.defaultProps = {
    changePage() {},
    pageCount() {},
    showThumbnail: {},
    protectContent: false,
    watermark: {},
    canvasCss: '',
}

export default RenderPdf
