

const CustomAlert = ({ message, type, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className={`bg-white rounded-lg p-4 shadow-lg max-w-sm w-full ${type === "success" ? "border-green-500" : "border-red-500"} border-2`}>
        <h2 className={`text-lg font-bold ${type === "success" ? "text-green-500" : "text-red-500"}`}>
          {type === "success" ? "Success" : "Error"}
        </h2>
        <p className="mt-2">{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-focus"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
