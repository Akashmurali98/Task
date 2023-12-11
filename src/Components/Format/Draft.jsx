import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";

import "../../assets/Css/draft.css";

const FormattingTemplate = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  const handleShow = (status) => {
    setShow(!status);
  };

  console.log(convertedContent);
  return (
    <div className="formatting-template">
      <header className="header">Rich Text Editor </header>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      {show && <p>{convertedContent}</p>}
      <div className="buttonstatus">
        <button onClick={() => handleShow(show)} className="status">
          {show ? "Click here to hide HTML" : "Click here to convert HTML"}{" "}
        </button>
      </div>
    </div>
  );
};

export default FormattingTemplate;
