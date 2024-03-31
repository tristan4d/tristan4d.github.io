import { useEffect, useState, memo } from 'react';
import throttle from 'lodash/throttle';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

import resume from '../../public/assets/2403-tristan-ford.pdf'

function CV() {
    const [pageNumber, setPageNumber] = useState(1);
    let width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const viewport = [650, 1000];
    const [scale, setScale] = useState(Math.min(width / viewport[0], height / viewport[1]));

    const setPdfSize = () => {
        width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        setScale(Math.min(width / viewport[0], height / viewport[1]))
    }

    useEffect(() => {
        window.addEventListener('resize', throttle(setPdfSize, 2000));
        setPdfSize();
        return () => {
            window.removeEventListener('resize', throttle(setPdfSize, 2000));
        };
    }, [])

    return (
        <Document
            file={resume}
        >
            <Page pageNumber={pageNumber} scale={scale} />
        </Document>

    );
}

export default memo(CV);