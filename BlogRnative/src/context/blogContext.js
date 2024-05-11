import createDataContext from "./createDataContext";

const initState = [];

const blogReducer = (state, { type, payload }) => {
    switch (type) {
        case "add_blog":
            return [...state, { title: `Blog post #${state.length}` }];

        default:
            return state;
    }
}

const updateBlogPost = () => {
    dispatch({ type: "add_blog" })
}

export const { Context, Provider } = createDataContext(blogReducer, { updateBlogPost }, initState)