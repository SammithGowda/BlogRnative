import createDataContext from './createDataContext';

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case 'edit_post':
      return state.map((item) => {
        return item.id === payload.id ? payload : item
      })
    case 'add_blogpost':
      return [...state, { id: Math.floor(Math.random() * 9999), title: payload.title, content: payload.content }];

    case "delete_post":
      return state.filter((blogList) => blogList.id !== payload)
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callBack) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (callBack) {
      callBack();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_post", payload: id })
  }
}
const editBlogPost = (dispatch) => {
  return (id, title, content, callBack) => {
    dispatch({ type: "edit_post", payload: { id, title, content } });
    if (callBack) {
      callBack();
    }
  }
}
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Test Post", content: "Test post content", id: 1 }]
);
