import React, { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { UserContext } from "../../Context/userContext";
import Commentcomp from "../Comment/Commentcomp";
import axios from "axios";

function FullBlogView() {
  const blogcontext = useContext(UserContext);
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState(null);
  const [commenttmsg, setCommentmsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:8000/blog/" + blogcontext.bloginfo
      );
      console.log(result);
      setBlog(result.data.blog);
      setComment(result.data.comments);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [comment]);

  //Comment function

  function onchangeHandler(e) {
    setCommentmsg(([e.target.name] = e.target.value));
  }

  async function clickHandler(e) {
    e.preventDefault();
    console.log(commenttmsg);
    const userinfo = {
      content: commenttmsg,
      user_id: blogcontext.user._id,
    };
    console.log(userinfo);
    axios
      .post("http://localhost:8000/blog/comment/" + blog._id, userinfo)
      .then((res) => {
        console.log(res);
        setComment("hello");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="px-10 py-5">
        <div>
          <p className="text-3xl font-semibold">
            {blog ? blog.title : "title"}
          </p>
        </div>
        <div className="mt-5">
          <img
            src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
            className="w-2/5 rounded-lg"
          ></img>
        </div>
        <div className="mt-5">
          <pre className=" font-medium overflow-hidden">
            {blog ? blog.body : "body"}
          </pre>
        </div>

        {/* Author Detail */}
        <div className="mt-5">
          <div className="max-w-sm flex items-center rounded-md space-x-3">
            <div>
              <img
                className="w-14 h-14 rounded-lg"
                src="https://imgs.search.brave.com/RSH2MPgnMPPQdCsrXCAsD8-7SLJmwYriB7gIttwKSLg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTIvQXZh/dGFyLVByb2ZpbGUt/UE5HLVBob3Rvcy5w/bmc"
                alt="not found"
              ></img>
            </div>
            <div>
              <div className="text-medium font-medium text-black">
                Author
                <p className=" text-slate-500"></p>
              </div>
            </div>
          </div>
        </div>
        {/* Comment Section */}
        <div className="mt-5">
          <div>
            <form onSubmit={clickHandler} method="post">
              <Input type="text" onChange={onchangeHandler} name="content" />
              <div className="w-24">
                <Button value="Comment" />
              </div>
            </form>
          </div>
          <div className="mt-5">
            {comment
              ? comment.map((info) => {
                  return (
                    <Commentcomp
                      key={info.blogId}
                      user={info.createdBy.username}
                      msg={info.content}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default FullBlogView;
