import { COMMENT_POST, DELETE_POST, EDIT_POST, SUBMIT_POST } from "./postTypes";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  let temp = { ...state };
  switch (action.type) {
    case SUBMIT_POST:
      temp["posts"].push({ postData: action.payload });
      return temp;
    case DELETE_POST:
      temp["posts"] = state["posts"].filter(
        (post) => action.payload.postData !== post.postData
      );
      return temp;
    case EDIT_POST:
      temp["posts"] = state["posts"].map((post) => {
        if (action.payload.previousPost === post.postData) {
          return { postData: action.payload.updatedPost };
        } else {
          return post;
        }
      });
      return temp;
    default:
      return state;
  }
};

export default postReducer;
