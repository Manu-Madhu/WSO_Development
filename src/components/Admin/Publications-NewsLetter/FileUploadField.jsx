"use client";
import React, { useState } from 'react';
import { FiUploadCloud, FiX } from 'react-icons/fi';
import { CiCircleRemove } from "react-icons/ci";

const FileUploadField = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [dragging, setDragging] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        handleFile(droppedFile);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        handleFile(selectedFile);
    };

    const handleFile = (file) => {
        if (file) {
            // Check file size (max 20MB)
            if (file.size > 20 * 1024 * 1024) {
                alert('File size exceeds 20MB limit. Please choose a smaller file.');
                return;
            }

            setFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreview(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFile(null);
            setPreview(null);
        }
    };

    const handleRemoveImage = () => {
        setFile(null);
        setPreview(null);
    };

    const handleUploadClick = () => {
        document.getElementById('dropzone-file').click();
    };

    return (
        <div
            className={`flex flex-col items-center justify-center w-full p-0 border-2 border-gray-300 rounded-lg cursor-pointer 
        ${dragging ? 'border-blue-500' : ''}
      `}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleUploadClick}
        >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {file ? (
                    <>
                        {file.type.startsWith('image/') ? (
                            <img src={preview} alt="File preview" className="max-h-64 rounded-lg" />
                        ) : (
                            <p>{file.name}</p>
                        )}
                        <button
                            className="mt-2 text-xs text-black-500 hover:text-black-600 focus:outline-none"
                            onClick={handleRemoveImage}
                        >
                            <CiCircleRemove size={23} className="inline-block mr-1" />
                        </button>
                    </>
                ) : (
                    <>
                        <div className='p-[8px] bg-[#f9f9f9] rounded-full mb-3'>
                            <div className='p-[10px] rounded-full bg-[#f2f5f6]'>
                                <FiUploadCloud size={24} strokeWidth={1} className="text-black" />
                            </div>
                        </div>
                        <p className="mb-2 text-sm text-gray-800font-light">
                            <span className="font-semibold text-blue-500">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Files (any type, max 20MB)
                        </p>
                    </>
                )}
            </div>
            <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default FileUploadField;
