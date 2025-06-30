const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white border-2 border-white w-full max-w-md rounded-lg pt-8 px-10 relative mx-4">    
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-red-500  "
          >
            &times;
          </button>
        <h2 className="text-lg font-bold  text-gray-800 ">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
