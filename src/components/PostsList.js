import React from "react";
import { connect } from "react-redux";

const PostsList = (props) => {
  console.log(props);
  return <div>PostsList</div>;
};
const mapStateToProps = (state) => {
  console.log("state", state);
  const { posts } = state;
  return {
    posts: posts
  };
};

export default connect(mapStateToProps)(PostsList);
