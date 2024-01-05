const ConfirmationPopup = ({ message, handleCancel, handleOnClick }) => {
    return (
        <div className="fixed flex z-40 justify-center items-center w-full min-h-screen ">
            <div className="bg-black bg-opacity-75 w-full fixed left-0 top-0 items-center justify-center min-h-screen flex pb-12">
                <div className="bg-white flex-col flex items-center justify-center rounded font-primary p-8">
                    <h1 className="text-2xl uppercase font-semibold">
                        {"Are you sure?"}
                    </h1>
                    <p className="mt-1 font-medium text-lg">
                        {message || "Do you really want to delete this."}
                    </p>
                    <div className="flex gap-4 mt-4  justify-around">
                        <button
                            className="bg-gray-300 px-4 py-2 rounded text-white uppercase font-semibold hover:bg-opacity-80 "
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-[#49c1b7] px-4 py-2 rounded text-white uppercase font-semibold hover:bg-opacity-80"
                            onClick={handleOnClick}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ConfirmationPopup;