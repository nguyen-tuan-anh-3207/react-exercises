import React, { useState } from "react";
import ButtonLogin from "../../components/ButtonLogin";
import Login from "../../components/Login";

const LoginPage = () => {
  //manage state
  const [buttonTitle, setButtonTitle] = useState("Đăng nhập hệ thống");
  const [isSuccess, setIsSuccess] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [isValidate, setIsValidate] = useState(true);
  const toggle = () => {
    setOpenForm(!openForm);
  };
  const handleSubmit = (values) => {
    console.log(values);
    if (values.username === "admin" && values.password === "admin") {
      toggle();
      setButtonTitle("Đăng nhập thành công");
      setIsSuccess(true);
      setIsValidate(true);
    }
    if (values.username === "" || values.password === "") {
      setIsValidate(false);
    }
  };
  return (
    <div>
      <ButtonLogin title={buttonTitle} toggle={toggle} isSuccess={isSuccess} />
      {openForm && (
        <Login
          openForm={openForm}
          toggle={toggle}
          handleSubmit={handleSubmit}
          isSuccess={isSuccess}
          isValidate={isValidate}
        />
      )}
    </div>
  );
};

export default LoginPage;
