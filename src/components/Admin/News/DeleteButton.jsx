'use client';

import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteAlert from '../common/DeleteAlert';

function DeleteButton({ name }) {
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
            {showAlert && <DeleteAlert name={name} onConfirm={handleConfirm} onCancel={handleCancel} />}
        </>
    );
}

export default DeleteButton;