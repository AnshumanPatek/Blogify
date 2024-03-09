import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Text(){
    return (
        <>
            <Input type="text" placeholder="Enter Your Username" />
            <Button value="Submit" />
        </>
    )
}

export default Text;