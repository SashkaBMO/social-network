import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img} src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_04/3446109/210129-think-comics-childrens-books-main-cs.png" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;


{/* <img className={s.img} src="https://media.vanityfair.com/photos/6230ded17814368f5b709dd6/master/w_2560%2Cc_limit/best-books-by-irish-authors-ecomm-2022-lede.png" /> */}

{/* <img className={s.img} src="https://assets.website-files.com/615c0fadc8e1d78fcc34e6f0/6171ac86baed2a8b53d74a1f_row-book-mockup-02.png" /> */}

