import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://images.squarespace-cdn.com/content/v1/56d1c90b37013be34dbcc75c/1597344646999-9RA4Q2XK2GONAZUDINY0/books.png?format=1000w" />
      {props.messege}
      <div>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
