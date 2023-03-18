import React from "react";

import { useDispatch } from "react-redux";
import { login } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: "Nir", age: 49, email: "nir@gmail" }))
        }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
