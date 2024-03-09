import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import axios from "axios";

function Card(props) {
  const blogcontext = useContext(UserContext);

  //setBlogid
  const handleViewClick = () => {
    blogcontext.setBloginfo(blogcontext.bloginfo = props.id);
    // axios
    //   .get("http://localhost:8000/blog/" + props.id)
    //     .then((result) => {
    //       console.log(result);
    //       blogcontext.setBloginfo(blogcontext.bloginfo = result.data.blog);
    //       blogcontext.setComment(blogcontext.comment = result.data.comments);

    //       console.log(blogcontext.bloginfo);
    //       console.log(blogcontext.comment);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  };

  return (
    <>
      <div className="bg-white p-2 rounded-xl border-2 w-3/3 h-auto m-3">
        <div className="m-1">
          <img
            className="w-3/3 rounded-md"
            src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
            alt="not found"
          ></img>
        </div>
        <div className="text-xl font-medium text-black mt-2 border-lime-300">
          <p>{props.title}</p>
        </div>
        <div className="mt-1">
          <Link
            to="/fullblogview"
            className="text-white bg-orange-700 hover:bg-orange-800 cursor-pointer focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 lg:px-3 py-1 lg:py-1.5 mr-2 focus:outline-none"
            onClick={handleViewClick}
          >
            View
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
