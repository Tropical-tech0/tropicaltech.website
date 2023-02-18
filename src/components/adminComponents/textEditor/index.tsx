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
    ];

    useEffect(() => {
        setEditorState(text)
    }, [text])

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            [{ font: [] }],
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ header: 1 }, { header: 2 }, 'blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link'],
            ['clean'],
        ],
    };

    return (

        <ReactQuill
            value={text}
            onChange={setText}
            modules={modules}
            formats={formats}
            placeholder="Digite aqui..."
            style={{ height: "100%", maxHeight: "500px" }}
        />

    );
};

export default TextEditor;