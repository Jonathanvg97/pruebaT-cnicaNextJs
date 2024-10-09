// src/components/Modal.tsx
import React from "react";
import { ModalProps } from "../interfaces/modalInterface";

/**
 * ${1:Description placeholder}
 *
 * @param {{ isOpen: any; onClose: any; message: any; }} param0
 * @param {${2:*}} param0.isOpen
 * @param {${3:*}} param0.onClose
 * @param {${4:*}} param0.message
 * @returns {${5:*}\}
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-sky-300 p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Success</h2>
        <p className="font-semibold">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-sky-700 font-bold text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
