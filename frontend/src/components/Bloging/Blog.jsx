import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";

function Blog() {
    const [totalBlog, setTotalblog] = useState([]);

    async function loadingAllblogs() {
        try {
            const response = await axios.get('http://localhost:8000/');
            const blogs = response.data.blogs;
            setTotalblog(blogs);
            console.log(blogs);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadingAllblogs();
    },[]);
    
    return (
        <>
            <div className="p-5 grid grid-cols-4">
            {
                totalBlog.map((blog) => {
                    return <Card key={blog._id} id={blog._id} title={blog.title} />
                })     
            }
            </div>
        </>
    );
}

export default Blog;
