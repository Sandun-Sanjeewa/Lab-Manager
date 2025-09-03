const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 ">
      <div className="bg-black border-2 border-white w-full max-w-md md:max-w-2xl rounded-lg pt-8 px-10 relative mx-4 shadow-lg">    
          <button
            onClick={onClose}
            className="hidden absolute top-3 right-3 text-xl text-white hover:text-red-500  "
          >
            &times;
          </button>
        <h2 className="text-lg font-bold  text-white ">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
