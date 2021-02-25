import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const Login = ({ openForm, toggle, handleSubmit, isValidate }) => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const onLogin = (e) => {
    //submit form
    e.preventDefault();
    handleSubmit(inputValues); // chuyền value form lên component cha là LoginPage
  };
  return (
    <div className="row">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <Modal isOpen={openForm}>
          {/* <ModalHeader>Member Login</ModalHeader> */}
          <div class="d-flex justify-content-center mt-3">
            <h2>Member Login</h2>
          </div>
          <ModalBody>
            <form onSubmit={onLogin}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={inputValues.username}
                  onChange={onChange}
                  placeholder="User Name....."
                  required={true}
                />
                {/* {isValidate? '': 'Tài khoản không hợp lệ'} */}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={inputValues.password}
                  onChange={onChange}
                  placeholder="Password....."
                  required={true}
                />
                {/* {isValidate ? '': "Mật khẩu không hợp lệ"} */}
              </div>

              <button type="submit" className="btn btn-success w-100 p-3">
                Login
              </button>
              <div class="d-flex justify-content-center mt-3">
                <a style={{ cursor: "pointer" }}>Forgot Password</a>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
