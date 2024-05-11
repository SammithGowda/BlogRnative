import React, { createContext, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    // const blogPost = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }]
    const [blogPost, setBlogPost] = useState([])

    const updateBlogPost = () => {
        setBlogPost((pre) => [...pre, { title: `Blog post #${blogPost.length + 1}` }])
    }
    return <BlogContext.Provider value={{data:blogPost,updateBlogPost:updateBlogPost}}>{children}</BlogContext.Provider>
}

export default BlogContext