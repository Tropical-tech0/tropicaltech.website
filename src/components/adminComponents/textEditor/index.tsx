import React, { SetStateAction, useEffect, useState, Dispatch } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

//dynamic import
const ReactQuill = dynamic(import("react-quill"), { ssr: false })

type Props = {
    setEditorState: SetStateAction<Dispatch<any>>,
    editorState?: any
}

//text editor component
const TextEditor: React.FC<Props> = ({ setEditorState, editorState }) => {

    const [text, setText] = useState(editorState || "");

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'style',
        'clean'
    ];

    useEffect(() => {
        setEditorState(text)
    }, [text])

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            [{ font: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ header: 1 }, { header: 2 }, 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link'],
            ['clean']
        ]
    } ;

    return (

        <ReactQuill
            value={text}
            onChange={setText}
            modules={modules}
            formats={formats}
            placeholder="Type here..."
            style={{ width: "100%" }}
        />

    );
};

export default TextEditor;