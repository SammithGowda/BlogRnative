import createDataContext from './createDataContext';

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case 'add_blogpost':
      return [...state, { id: Math.floor(Math.random() * 9999), title: payload.title,content:payload.content }];

    case "delete_post":
      return state.filter((blogList) => blogList.id !== payload)
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title,content,callBack) => {
    dispatch({ type: 'add_blogpost',payload:{title,content} });
    callBack();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_post", payload: id })
  }
}
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
