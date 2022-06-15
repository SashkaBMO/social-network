import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // let posts = [
  //   { id: 1, message: "Hi, яhow are you?", likesCount: 12 },
  //   { id: 3, message: "It's my first post", likesCount: 22 },
  // ];

  let postsElements = props.posts.map((p) => (
    <Post messege={p.message} like={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
