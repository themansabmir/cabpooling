import { Link } from "react-router-dom";

const AccountDropdown = ({ setOpen }) => {
    return (
        <div className="absolute -top-6 right-0 bg-white rounded-lg shadow shadow-[#00000040] font-primary px-4 pb-2 z-50">
            <div className=" justify-between items-center p-2 border-b border-[#c9dad8]">
                <h3 className="text-[#333] font-semibold font-primary xl:text-lg text-base">
                    Prerna
                </h3>
                <h3 className="text-[#555F65] font-normal font-secondary text-sm pt-2 -mt-2 ">
                    +91 8130556934
                </h3>
            </div>
            <div className="flex items-center gap-3 hover:bg-sky-100 py-2 px-2 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                        stroke="#09a99c"
                        stroke-width="1.5"
                    />
                    <path
                        d="M19.997 18C20 17.836 20 17.669 20 17.5C20 15.015 16.418 13 12 13C7.582 13 4 15.015 4 17.5C4 19.985 4 22 12 22C14.231 22 15.84 21.843 17 21.563"
                        stroke="#09a99c"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                </svg>
                <Link to={"/settings"} onClick={() => setOpen(false)}>
                    <p
                        className="text-[#333] text-base font-primary font-medium"
                        onClick={() => setOpen(false)}
                    >
                        Profile
                    </p>
                </Link>
            </div>
            <div className="p-2 hover:bg-sky-100 w-full">
                <div className="flex items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
                            fill="#09a99c"
                        />
                    </svg>
                    <p className="text-[#333] text-base font-primary font-medium">Logout</p>
                </div>
            </div>
        </div>
    );

}
export default AccountDropdown;