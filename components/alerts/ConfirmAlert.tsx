// AlertComponent.tsx

'use client'

import React, { useCallback } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface AlertComponentProps {
    message: string;
    onConfirm: () => void;
    onCancel?: () => void;
}

const AlertComponent: React.FC<AlertComponentProps> = ({ message, onConfirm, onCancel }) => {
    // Memoriza la función showAlert para que no cambie entre renders
    const showAlert = useCallback(async () => {
        const result = await MySwal.fire({
            title: "Are you sure?",
            text: message,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        });

        if (result.isConfirmed) {
            onConfirm();
            MySwal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                confirmButtonText: "OK"
            });
        } else if (onCancel) {
            onCancel();
        }
    }, [message, onConfirm, onCancel]);

    React.useEffect(() => {
        showAlert();
    }, [showAlert]);

    return null;
};

export default AlertComponent;
