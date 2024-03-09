import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import singImg from "../../Image/sign-up-form.png";

function Contact() {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-3/5 mx-auto my-16 p-5 flex flex-col justify-center shadow-2xl rounded-lg">
            <h1 className="text-center font-semibold text-2xl mt-2">
                <h2 className=" text-red-500">Contact Us</h2>
            </h1>
            <form className="mt-3">
              <label className="font-semibold">Username </label>
              <Input type="text" placeholder="Enter Your Username" /> <br></br>
              <label className="font-semibold">Email </label>
              <Input type="email" placeholder="Enter Your Email" /> <br></br>
              <label className="font-semibold">Query </label>
              <Input type="text" placeholder="Enter Your Query" />
              <br></br>
              <Button value="Submit" />
            </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
