import React, { useContext, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import singImg from "../../Image/sign-up-form.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from "../../Context/userContext";

function Login() {
  const [userinfo, setUserinfo] = useState([]);
  const navigate = useNavigate();
  const currentUserinfo = useContext(UserContext);

  function clickHandler(e) {
    setUserinfo((lastvalue) => {
      return {
        ...lastvalue,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function loginUser(e) {
    e.preventDefault();

    axios.post("http://localhost:8000/user/signin" , userinfo)
      .then((res) => {
        console.log("Succesfull login ", res.data.msg);
        currentUserinfo.setUser(currentUserinfo.user = res.data.msg);
        console.log(currentUserinfo.user);
        navigate('/blog');
      })
      .catch((err) => {
        console.log("error : ", err);
      })
  }

  return (
    <>
      <div className="w-full h-auto">
        <div className="w-3/5 mx-auto my-9 p-5 flex justify-center shadow-2xl rounded-lg">
          <div className="w-1/2 h-3/2 rounded-lg">
            <img
              className="bg-center object-fill w-full"
              src={singImg}
              alt=""
            ></img>
          </div>
          <div className="p-2">
            <h1 className="text-center font-semibold text-2xl mt-4">
                <h2 className=" text-red-500">Hello Again!</h2>
                <h4>Welcome to Blogify! </h4>
            </h1>
            <form className="mt-5" onSubmit={loginUser} method="post">
              <label className="font-semibold">Email </label>
              <Input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={clickHandler}
              />{" "}
              <br></br>
              <label className="font-semibold">Password </label>
              <Input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                onChange={clickHandler}
              />
              <br></br>
              <Button value="Login" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
