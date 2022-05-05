import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { commentPost, deletePost, editPost, submitPost } from "../redux";

const PostContainer = (props) => {
  const [postInput, setPostInput] = useState("");
  const [editPost, setEditPost] = useState({
    active: false,
    content: "",
    id: "",
  });

  return (
    <React.Fragment>
      <label>Post ur comment:</label>
      <input
        type="text"
        value={postInput}
        onChange={(e) => setPostInput(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          if (postInput) {
            props.submitPost(postInput);
            setPostInput("");
          }
        }}
      >
        Submit Post
      </button>
      <ul>
        {props.posts.map((post, index) => {
          return (
            <li key={index}>
              {editPost.id === post.postData && editPost.active ? (
                <input
                  type={"text"}
                  value={editPost.content}
                  onChange={(e) =>
                    setEditPost({ ...editPost, content: e.target.value })
                  }
                />
              ) : (
                <>{post?.postData}</>
              )}
              {!editPost.active ? (
                <button
                  onClick={(e) => {
                    setEditPost({
                      ...editPost,
                      active: true,
                      content: post.postData,
                      id: post.postData,
                    });
                  }}
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    props.editPost(post.postData, editPost.content);
                    setEditPost({
                      ...editPost,
                      active: false,
                    });
                  }}
                >
                  Save edited data
                </button>
              )}
              <button
                onClick={(e) => setEditPost({ ...editPost, active: false })}
              >
                Cancel Edit
              </button>
              <button
                onClick={(e) => {
                  props.deletePost(post);
                }}
              >
                Delete Post
              </button>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitPost: (postInput) => dispatch(submitPost(postInput)),
    deletePost: (post) => dispatch(deletePost(post)),
    editPost: (post, updatedPost) => dispatch(editPost(post, updatedPost)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
