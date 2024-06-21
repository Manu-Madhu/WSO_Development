'use client';
import { MdFormatBold } from "react-icons/md";
import { MdOutlineFormatItalic } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { useState } from "react";

function NewsArea() {
    const [data, setData] = useState({})
    const [selectedOption, setSelectedOption] = useState('Normal Text')
    const [text, setText] = useState('')

    const changeHandler = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleBoldClick = () => {
        setText(text + ' <b></b>');
    }

    const handleItalicClick = () => {
        setText(text + ' <i></i>');
    }

    return (
        <div className='gap-2 w-1/2 flex flex-col'>

            <div className='w-full flex flex-col gap-4'>

                <div className='w-full flex gap-6'>
                    <select
                        type='text'
                        className='w-full flex items-center rounded-lg bg-white 
                                    shadow outline-none p-3' >
                        <option value="Normal Text">Normal Text</option>

                    </select>

                    <div className='w-full flex items-center gap-2'>
                        <button onClick={handleBoldClick}>
                            <MdFormatBold size={24} color='#98A2B3' />
                        </button>
                        <button onClick={handleItalicClick}>
                            <MdOutlineFormatItalic size={24} color='#98A2B3' />
                        </button>
                        <button><IoLinkSharp size={24} color='#98A2B3' /></button>
                        <button><MdFormatListBulleted size={24} color='#98A2B3' /></button>
                        <button><MdFormatListNumbered size={24} color='#98A2B3' /></button>
                    </div>

                </div>

                <textarea
                    rows={5}
                    name='description'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='w-full rounded-lg
                            bg-white shadow outline-none p-5' />

                <p className='text-[#475467] text-sm'>275 characters left</p>
            </div>

        </div>
    )
}

export default NewsArea
