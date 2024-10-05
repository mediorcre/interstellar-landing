import type { PropsWithChildren } from 'react';
import React from 'react';

const Modal: React.FC<
  PropsWithChildren<{ title: string; onClose?: () => void }>
> = ({ children, onClose }) => (
  <div
    className="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    onClick={onClose}
  >
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-45 transition-opacity"
      aria-hidden="true"
    ></div>

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">{children}</div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
