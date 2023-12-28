'use client'
import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

function CodeEditorArea({placeholder,name,onChange,value}) {
    
      return (
        <CodeEditor
          value={value}
          name={name}
          language="js"
          placeholder={placeholder}
          padding={15}
          onChange={onChange}
          style={{
            backgroundColor: "#000943",
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        />
      );
}

export default CodeEditorArea