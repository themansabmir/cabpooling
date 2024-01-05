import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../App/dashboard";
import Login from "../App/Login/Login";
import { useSignOut } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import useAuth from "../CustomHooks/useAuth";
import { auth } from "../Firebase/firebaseconfig";
import Header from "../App/Header";
import Trips from "../App/Trips/trips";
import Sidebar from "../App/Sidebar/index";
import { useSelector } from "react-redux";
import { logingState } from "../store/Reducers/authentication";

import Drivers from "../App/Drivers/driverList";
import Vehicles from "../App/Vehicles/VehiclesList";

import { AddCategory } from "../App/Category/AddCategory";
import { AddSubcategory } from "../App/Category/AddSubcategory";
import { PendingDrivers } from "../App/Drivers/PendingDrivers";
import { ViewDriver } from "../App/Drivers/ViewDriver";

const AppRouting = () => {
  const [componentName, setComponentName] = useState("");
  const isLoggedin = useSelector(logingState);

  return (
    <div className="bg-page min-h-screen flex relative">
      <div className=" min-h-screen w-full border-fontBg rounded-md grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4">
        <BrowserRouter>
          <div className="flex top-0 left-0 h-full col-span-1">
            {isLoggedin ? <Sidebar /> : ""}
          </div>
          <div
            className=" xl:col-span-7 lg:col-span-5 ml-5 md:col-span-3 py-10 px-5"
            // style={{
            //   "box-shadow":
            //     "-13.200000762939453px 12px 12px -2.4000000953674316px #0000000A",
            // }}
          >
            {isLoggedin ? <Header componentName={componentName} /> : ""}
            <Routes>
              <Route
                path="/"
                element={
                  isLoggedin ? (
                    <Dashboard setComponentName={setComponentName} />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route path="/login" element={<Login />} />

              <Route
                path="/trips"
                element={<Trips setComponentName={setComponentName} />}
              />
              <Route
                path="/drivers"
                element={<Drivers setComponentName={setComponentName} />}
              />
              <Route
                path="/vehicles"
                element={<Vehicles setComponentName={setComponentName} />}
              />

              <Route path="/addcategory" element={<AddCategory />} />
              <Route path="/addsubcategory" element={<AddSubcategory />} />
              <Route path="/pending" element={<PendingDrivers />} />
              <Route path="/viewdriver/:driverId" element={<ViewDriver />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default AppRouting;
