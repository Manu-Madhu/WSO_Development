'use client';

import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteNews from './DeleteNews';

function DeleteButton() {
    const [showAlert, setShowAlert] = useState(false);
    const handleConfirm = () => {
        console.log("Item deleted");
        setShowAlert(false);
    };

    const handleCancel = () => {
        setShowAlert(false);
    };

    return (
        <>
            <button className='' onClick={() => setShowAlert(true)}>
                <RiDeleteBin6Line size={20} />
            </button>
            {showAlert && <DeleteNews onConfirm={handleConfirm} onCancel={handleCancel} />}
        </>
    );
}

export default DeleteButton;