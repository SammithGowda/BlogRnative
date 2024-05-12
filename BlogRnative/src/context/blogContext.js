import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';

const blogReducer = (state, { type, payload }) => {
  switch (type) {
    case 'get_blogpost':
      return payload;
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

const getBlogPost = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogpost');
    dispatch({ type: "get_blogpost", payload: response.data })
  }
}

const addBlogPost = dispatch => {
  return async (title, content, callBack) => {
    await jsonServer.post('/blogpost', { title: title, content: content });

    // dispatch({ type: 'add_blogpost', payload: { title, content } });

    if (callBack) {
      callBack();
    }
  };
};



const deleteBlogPost = (dispatch) => {
  return async (id) => {

    await jsonServer.delete(`/blogpost/${id}`);

    dispatch({ type: "delete_post", payload: id });
  }
}


const editBlogPost = (dispatch) => {
  return async (id, title, content, callBack) => {
    await jsonServer.put(`/blogpost/${id}`, { title, content });
    dispatch({ type: "edit_post", payload: { id, title, content } });
    if (callBack) {
      callBack();
    }
  }
}


export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
