import { DELETE_POST, EDIT_POST, SUBMIT_POST } from "./postTypes";

export const submitPost = (postData = "") => {
  return {
    type: SUBMIT_POST,
    payload: postData,
  };
};

export const editPost = (postData = "", updatedPost = "") => {
  return {
    type: EDIT_POST,
    payload: { previousPost: postData, updatedPost },
  };
};

export const deletePost = (post) => {
  return {
    type: DELETE_POST,
    payload: post,
  };
};
