import React, { useState, useEffect } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [Doc, setDoc] = useState('')

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDoc (
      `<html>
        <body> ${html} </body>
        <style> ${css}  </style>
        <script> ${js} </script>
      <html/>`)
    },250)
    return ()=> clearTimeout(timeout)
  },[html, css, js])


  return (
    <>
      <div className="editor-space">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
        <Editor language="javascript" displayName="JavaScript" value={js} onChange={setJs}/>
      </div>
      <div className="result">
        {/* <button className="expand">O/C</button> */}
        <iframe 
        srcDoc={Doc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        />
      </div>
    </>
  );
}

export default App;
