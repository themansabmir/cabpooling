import React, { useEffect, useState } from "react";
import FormInput from "../Common/Form/FormInput";
import Button from "../Common/Form/Button";
import FormError from "../Common/Form/Formerror";
import ConfirmationPopup from "../Common/Popup/ConfirmationPopup";

const Dashboard = ({ setComponentName }) => {
  const [name, setName] = useState("");
  const [error, setErr] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);

  const handleClick = () => {
    if (!name) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  const handledelClick = () => {
    setDeletePopup(true);
  };

  useEffect(() => {
    setComponentName("Dashboard");
  }, [])

  return (
    <React.Fragment>
      {/* <h1 className='font-serif text-6xl bg-red'>Nefa Dashboard Starts</h1> */}
      <FormInput
        label={"Enter Name"}
        value={name}
        placeholder={"Enter your Name"}
        handleOnChange={setName}
      />
      <FormError
        show={error}
        error={"Please enter name."}
      />
      <Button btnName={"Test"} handleOnClick={handleClick} />
      <Button btnName={"Delete"} btnColor={"bg-red"} handleOnClick={handledelClick} />

      {deletePopup && (
        <ConfirmationPopup handleCancel={() => setDeletePopup(false)} />
      )}

    </React.Fragment>
  );
};
export default Dashboard;
