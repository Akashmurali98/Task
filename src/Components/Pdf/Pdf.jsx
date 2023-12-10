// import React from "react";
import pdf from "../../assets/Resume.pdf"


const PdfViewer = () => {
  const pdfUrl = "https://www.orimi.com/pdf-test.pdf";

  return (
    <>
      <iframe
        title="PDF Viewer"
        src={pdf + "#toolbar=0"}
        width="100%"
        height="770px"
      >
        Akash
      </iframe>
    </>
  );
};

export default PdfViewer;
