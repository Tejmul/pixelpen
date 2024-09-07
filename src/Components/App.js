import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [html, setHtml] = useState('<h1>Welcome Hacker</h1>')
  const [css, setCss] = useState('body{background-color: black; color: white;}')
  const [js, setJs] = useState('')
  const [Doc, setDoc] = useState('')

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDoc (
      `<html>
        <body> ${html} </body>
        <style> ${css}  </style>
        <script> ${js} </script>
      </html>`)
    },250)
    return ()=> clearTimeout(timeout)
  },[html, css, js])

  const [expand, setExpand] = useState(true);

  return (
    <>
      <div className="editor-space">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
        <Editor language="javascript" displayName="JavaScript" value={js} onChange={setJs}/>
      </div>
      <div className={`result ${expand ? '' : 'collapsed'}`}>
        <button className="expand" onClick={()=> setExpand(prevExpand => !prevExpand)}><FontAwesomeIcon icon={expand ? faAngleUp : faAngleDown} /></button>
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
