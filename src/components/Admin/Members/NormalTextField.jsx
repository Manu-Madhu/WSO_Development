import React from 'react';

function NormalTextField({ type, label, placeholder }) {
    return (
        <div className='flex max-md:flex-col border-t w-10/12 max-md:w-full border-gray-3 00 py-5 justify-between'>
            <div className='w-[35%] max-md:w-full font-medium'>
                <h2>{label}</h2>
            </div>
            <div className='w-[64%] max-md:w-full'>
                {type === 'textarea' ? (
                    <textarea
                        className="w-full border border-gray-400 mt-1 px-4 py-3 rounded-lg placeholder:text-gray-400 placeholder:font-light"
                        placeholder={placeholder}
                        rows="4"
                    />
                ) : (
                    <input
                        type={type}
                        className="w-full border border-gray-400 mt-1 px-4 py-3 rounded-lg placeholder:text-gray-400 placeholder:font-light"
                        placeholder={placeholder}
                    />
                )}
            </div>
        </div>
    );
}

NormalTextField.defaultProps = {
    type: 'text',
    label: 'Label',
    placeholder: ''
};

export default NormalTextField;
