import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from './base64.json';
import ScrollContainer from 'react-indiana-drag-scroll'
import './pdf.css';

type PDFReaderProps = {
  file?: String;
}

export default function PDFReader({ file }: PDFReaderProps) {
  console.log(pdf.dados)
  const [scale, setScale] = React.useState(1);
  
  const zoomOut = () => {
    setScale( state => state - 0.25)
  }

  return (
    <div>
      <button style={{padding: 15}} onClick={ zoomOut}>-</button>
        <button style={{padding: 15}} onClick={ () => setScale( state => state + 0.25)}>+</button>
        <p>{scale}</p>
      <h1>Leitor de PDF</h1>
      <ScrollContainer className="scroll-container">
        <Document
          file={`data:application/pdf;base64,${pdf.dados}`}
          // onLoadSuccess={onDocumentLoadSuccess}
          >
          <Page pageNumber={1} scale={scale} />
        </Document>
        </ScrollContainer>
    </div>
  )
}
