import React from "react";
import { Button } from "reactstrap";

const ButtonLogin = ({ title, toggle, isSuccess }) => {
  return (
    <div>
      <Button
        color={isSuccess ? "success" : "primary"}
        onClick={isSuccess ? null : toggle}
      >
        {title}
      </Button>
    </div>
  );
};

export default ButtonLogin;
