"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import './NewsArea.css'


const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <input className="py-3" placeholder="Loading editor..." disabled />,
});

const TextEditor = ({value, setValue}) => {
    // const [value, setValue] = useState('');

    const handleChange = (content) => {
        if (content.replace(/<[^>]*>/g, '').length <= 300) {
            setValue(content);
        }
    };

    const getTextLength = (content) => {
        return content.replace(/<[^>]*>/g, '').length;
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            ['clean'],
        ],
    };

    return (
        <div className="text-editor w-7/12 max-md:w-full rounded-xl">
            <ReactQuill
                value={value}
                onChange={handleChange}
                theme="snow"
                modules={modules}
                placeholder="Text here..."
            />
            <div className="char-count text-gray-600 font-light mt-2 text-sm">
                {300 - getTextLength(value)} Characters left
            </div>
        </div>
    );
};

export default TextEditor;
