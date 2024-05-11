// import React, { createContext, useState, useReducer } from "react";

// const BlogContext = createContext();

// const initState = [];

// const blogReducer = (state, { type, payload }) => {
//     switch (type) {
//         case "add_blog":
//             return [...state, { title: `Blog post #${state.length}` }];

//         default:
//             return state;
//     }
// }

// export const BlogProvider = ({ children }) => {

// //1.code of context with state 
// // const blogPost = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }]
// // const [blogPost, setBlogPost] = useState([])

// //2.code of context with reducer 
// const [blogPost, dispatch] = useReducer(blogReducer, initState)

// const updateBlogPost = () => {
//     // 1.code of context with state 
//     // setBlogPost((pre) => [...pre, { title: `Blog post #${blogPost.length + 1}` }])

//     //2.code of context with reducer 
//     dispatch({ type: "add_blog" })
// }
// return <BlogContext.Provider value={{ data: blogPost, updateBlogPost: updateBlogPost }}>{children}</BlogContext.Provider>
// }

// export default BlogContext
