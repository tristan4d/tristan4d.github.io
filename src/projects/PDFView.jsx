import { useEffect, useState, memo } from "react";
import throttle from "lodash/throttle";
import { Document, Page, pdfjs } from "react-pdf";
import { Button, Typography } from "@mui/material";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PDFView({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  let width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  let height = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const viewport = [1000, 1000];
  const [scale, setScale] = useState(
    Math.min(width / viewport[0], height / viewport[1])
  );

  const setPdfSize = () => {
    width = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    height = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    setScale(Math.min(width / viewport[0], height / viewport[1]));
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(setPdfSize, 2000));
    setPdfSize();
    return () => {
      window.removeEventListener("resize", throttle(setPdfSize, 2000));
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function previousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  function nextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>
      <Typography variant="overline">
        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </Button>
        <Button disabled={pageNumber >= numPages} onClick={nextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default memo(PDFView);
