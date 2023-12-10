import "./App.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FiledsLinker from "./Components/FieldsLinker/FiledsLinker";
import FormattingTemplate from "./Components/Format/draft";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Shared/Header";
import PdfViewer from "./Components/Pdf/pdf";

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<FiledsLinker />}></Route>
          <Route path="/pdf" element={<PdfViewer />}></Route>
          <Route path="/draft" element={<FormattingTemplate />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

