import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from './base64.json';

type PDFReaderProps = {
  file?: String;
}

export default function PDFReader({ file }: PDFReaderProps) {
  console.log(pdf.dados)
  return (
    <div>
      <h1>Leitor de PDF</h1>
      <Document
        file={`data:application/pdf;base64,${pdf.dados}`}
        // onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}
