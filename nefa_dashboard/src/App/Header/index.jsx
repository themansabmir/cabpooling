import { useState } from "react";
import UserProfile from "../../assets/images/user_profile.png"
import AccountDropdown from "../AccountDropdown";

const Header = ({ componentName }) => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <section className="flex items-center justify-between font-primary mb-7">
                <div>
                    <p className="font-bold text-2xl leading-[24px]">{componentName}</p>
                </div>
                <div className="flex items-center gap-3">
                    <p className="font-medium text-lg">Hello, Prerna</p>
                    <img
                        onClick={() => setOpen(!open)}
                        src={UserProfile}
                        className="pt-1 rounded-full h-[45px] w-[45px] object-contain cursor-pointer" />
                </div>

            </section>
            {open &&
                <div className="relative w-full">
                    <AccountDropdown setOpen={setOpen} />
                </div>
            }
        </div>
    );
}
export default Header;