import React from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import {Download} from "lucide-react";
import {Document, Page, pdfjs} from 'react-pdf';
import {useState} from "react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();

const Resume = () => {

    // Error handling
    const [loadError, setLoadError] = useState(null);

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a
                    href="files/christendeo-resume-2026.pdf"
                    download
                    className="cursor-pointer"
                    title="Download Resume"
                >
                    <Download className="icon"/>
                </a>
            </div>

            {/*To display Resume pdf*/}
            <Document
                file="files/christendeo-resume-2026.pdf"
                onLoadError={(error) => setLoadError(error)}
                loading={<div>Loading Resume...</div>}
                error={<div>Oh no! Something went wrong. Please try downloading instead.</div>}
            >
                <Page
                    pageNumber={1}
                    renderTextLayer
                    renderAnnotationLayer
                />
            </Document>
        </>
    )
};

const ResumeWindow = WindowWrapper(Resume, "resume")
export default ResumeWindow;