import { React, createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [bloginfo, setBloginfo] = useState(null);
    const [comment, setComment] = useState(null);

    return (
        <UserContext.Provider value={{
            user, setUser,
            bloginfo, setBloginfo,
            comment, setComment
        }}>
            {props.children}
        </UserContext.Provider>
    )
};
