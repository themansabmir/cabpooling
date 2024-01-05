import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebaseconfig";
import { useDispatch } from "react-redux";
import { login } from "../../store/Reducers/authentication";
import useAuth from "../../CustomHooks/useAuth";
import LoginPage from "../../assets/images/Login.png";
import Logo from "../../assets/images/Nefa_Logo.png";

const Login = () => {

  const dispatch = useDispatch();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth); // firebase function to login & handle error

  const [showPassword, setPassword] = useState(false);

  const { user, loading, error } = useAuth();

  // user credential states
  const [loginData, setLogin] = useState({
    email: "",
    password: "",
  });
  const loginHandler = (signinFunction, loginData, user) => {
    console.log("login btyn")
    signinFunction(loginData.email, loginData.password).then(() => {
      if (user) {
        dispatch(login(user));
      }
    });
  };

  return (
    <section className="grid grid-cols-2 w-full min-h-full bg-white rounded-3xl">
      <div className="relative bg-[#94F2EA29] rounded-xl m-4 p-10">
        <div className="">
          <img src={Logo} className="w-[96.6px] h-[65px]" />
        </div>
        <div className="flex flex-col gap-5 justify-center h-full -mt-10 mx-10">
          <p className="text-2xl font-primary font-semibold">Log In</p>
          <div className="relative flex items-center focus:border focus:border-[#49C1B7]">
            <span className="absolute p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="#49C1B7" stroke-width="1.5" />
                <path d="M19.998 18C20 17.836 20 17.669 20 17.5C20 15.015 16.418 13 12 13C7.582 13 4 15.015 4 17.5C4 19.985 4 22 12 22C14.231 22 15.84 21.843 17 21.563" stroke="#49C1B7" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </span>
            <input
              type="text"
              value={loginData.email}
              onChange={(e) => handleChange(e, loginData, setLogin)}
              className="w-full p-3 pl-12 rounded focus:outline-none focus:ring-1 focus:ring-[#49C1B7] focus:shadow-md focus:shadow-[#49C1B780] text-sm font-primary"
              name="email"
              placeholder="Enter Email"
              id=""
            />
          </div>
          <div className="relative flex items-center">
            <span className="absolute p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.5 16C8.5 16.1326 8.44732 16.2598 8.35355 16.3536C8.25979 16.4473 8.13261 16.5 8 16.5C7.86739 16.5 7.74021 16.4473 7.64645 16.3536C7.55268 16.2598 7.5 16.1326 7.5 16C7.5 15.8674 7.55268 15.7402 7.64645 15.6464C7.74022 15.5527 7.86739 15.5 8 15.5C8.13261 15.5 8.25978 15.5527 8.35355 15.6464C8.44732 15.7402 8.5 15.8674 8.5 16ZM12.5 16C12.5 16.1326 12.4473 16.2598 12.3536 16.3536C12.2598 16.4473 12.1326 16.5 12 16.5C11.8674 16.5 11.7402 16.4473 11.6464 16.3536C11.5527 16.2598 11.5 16.1326 11.5 16C11.5 15.8674 11.5527 15.7402 11.6464 15.6464C11.7402 15.5527 11.8674 15.5 12 15.5C12.1326 15.5 12.2598 15.5527 12.3536 15.6464C12.4473 15.7402 12.5 15.8674 12.5 16ZM16.5 16C16.5 16.1326 16.4473 16.2598 16.3536 16.3536C16.2598 16.4473 16.1326 16.5 16 16.5C15.8674 16.5 15.7402 16.4473 15.6464 16.3536C15.5527 16.2598 15.5 16.1326 15.5 16C15.5 15.8674 15.5527 15.7402 15.6464 15.6464C15.7402 15.5527 15.8674 15.5 16 15.5C16.1326 15.5 16.2598 15.5527 16.3536 15.6464C16.4473 15.7402 16.5 15.8674 16.5 16Z" fill="black" stroke="#49C1B7" />
                <path d="M6 10V8.00001C6 7.66001 6.028 7.32501 6.083 7.00001M18 10V8.00001C18.0001 6.78125 17.629 5.59136 16.9361 4.5887C16.2433 3.58604 15.2615 2.81815 14.1215 2.38721C12.9815 1.95628 11.7372 1.88275 10.5544 2.17639C9.37152 2.47004 8.30613 3.11694 7.5 4.03101M11 22H8C5.172 22 3.757 22 2.879 21.121C2 20.243 2 18.828 2 16C2 13.172 2 11.757 2.879 10.879C3.757 10 5.172 10 8 10H16C18.828 10 20.243 10 21.121 10.879C22 11.757 22 13.172 22 16C22 18.828 22 20.243 21.121 21.121C20.243 22 18.828 22 16 22H15" stroke="#49C1B7" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={loginData.password}
              onChange={(e) => handleChange(e, loginData, setLogin)}
              name="password"
              placeholder="Enter Password"
              className="w-full p-3 pl-12 rounded focus:outline-none focus:ring-1 focus:ring-[#49C1B7] focus:shadow-md focus:shadow-[#49C1B780] text-sm font-primary"
            />
            {showPassword ?
              <span className="absolute right-0 p-3" onClick={() => setPassword(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1.5 9C1.5 9 3.75 3.75 9 3.75C14.25 3.75 16.5 9 16.5 9C16.5 9 14.25 14.25 9 14.25C3.75 14.25 1.5 9 1.5 9Z" stroke="#6E6E73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke="#6E6E73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              :
              <span className="absolute right-0 p-3" onClick={() => setPassword(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M5.24914 4.7715C6.38348 4.09746 7.67967 3.74438 8.99914 3.75C13.7294 3.75 16.0244 8.01225 16.4316 8.856C16.4766 8.94825 16.4766 9.05175 16.4316 9.14475C16.1676 9.69075 15.1146 11.6662 13.1241 12.993M10.4991 14.1C10.0055 14.2006 9.50293 14.2509 8.99914 14.25C4.26889 14.25 1.97389 9.98775 1.56664 9.144C1.54464 9.09892 1.5332 9.04941 1.5332 8.99925C1.5332 8.94909 1.54464 8.89958 1.56664 8.8545C1.73089 8.5155 2.19664 7.6305 2.99914 6.69075M7.49914 7.323C7.9278 6.93982 8.48688 6.73528 9.06161 6.75136C9.63633 6.76745 10.1831 7.00294 10.5897 7.40949C10.9962 7.81604 11.2317 8.36281 11.2478 8.93754C11.2639 9.51227 11.0593 10.0713 10.6761 10.5M2.24914 2.25L15.7491 15.75" stroke="#6E6E73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            }
          </div>

          <button
            onClick={() =>
              loginHandler(signInWithEmailAndPassword, loginData, user)
            }
            className="w-full p-3 text-center bg-[#49C1B7] text-white font-medium text-base font-primary rounded"
          >
            Login
          </button>
        </div>
      </div>
      <div className="h-full flex flex-col justify-center pr-4">
        <img src={LoginPage} />
      </div>
    </section>

  );
};

export default Login;

const handleChange = (e, loginData, setLogin) => {
  const { name, value } = e.target;
  const data = { ...loginData };
  data[name] = value;
  setLogin(data);
};
