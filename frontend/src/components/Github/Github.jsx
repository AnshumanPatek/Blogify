import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import singImg from "../../Image/sign-up-form.png";

function Github() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://api.github.com/users/AnshumanPatek"
      );
      const result = await response.json();
      setData(result);
      // console.log(result)
    })();
  }, []);
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-3/5 mx-auto my-9 p-5 flex justify-center shadow-2xl rounded-lg">
          <div className="w-1/2 h-3/2 rounded-lg">
            <img
              className="bg-center object-fill w-full rounded-lg"
              src={data?.avatar_url}
              alt=""
            ></img>
          </div>
          <div className="p-2 mx-3">
            <h1 className=" font-semibold text-2xl mt-4">
              <h2 className=" text-red-500">{data?.name}</h2>
              <h4>{data?.bio}</h4>
              <h4>Reposetry : {data?.public_repos}</h4>
              <h4>Followers : 1K</h4>
              <h4>Location : {data?.location}</h4>
              <h4>
                Linkedin :{" "}
                <a href={data?.blog} target="_blank">
                  <span className="text-red-300">Click Here</span>
                </a>
              </h4>
              <h4>
                Github :{" "}
                <a href="https://github.com/Aryashanish" target="_blank">
                  <span className="text-red-300">Click Here</span>
                </a>
              </h4>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;
