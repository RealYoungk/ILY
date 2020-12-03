import React, { useState } from "react";
import { dbService } from "../fBase";

const PostsFactory = ({ userObj }) => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [bestComment, setBestCommet] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("Post").add({
      youtubeUrl,
      thumbnail: `http://img.youtube.com/vi/${youtubeUrl.substr(32, 11)}/0.jpg`,
      caption,
      bestComment,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setYoutubeUrl("");
    setCaption("");
    setBestCommet("");
  };
  const onChangeCaption = (event) => {
    const {
      target: { value },
    } = event;
    setCaption(value);
  };
  const onChangeYoutubeUrl = (event) => {
    const {
      target: { value },
    } = event;
    setYoutubeUrl(value);
  };
  const onChangeBestComment = (event) => {
    const {
      target: { value },
    } = event;
    setBestCommet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={youtubeUrl}
          onChange={onChangeYoutubeUrl}
          type="text"
          placeholder="Youtube URL을 입력해주세요"
          maxLength={43}
          required
        />
        <input
          value={caption}
          onChange={onChangeCaption}
          type="text"
          placeholder="하고싶은 말은?"
          maxLength={120}
        />
        <input
          value={bestComment}
          onChange={onChangeBestComment}
          type="text"
          placeholder="베스트 댓글"
          maxLength={60}
        />
        {youtubeUrl ? (
          <img
            src={`http://img.youtube.com/vi/${youtubeUrl.substr(32, 11)}/0.jpg`}
            width={320}
            height={180}
            alt="preview"
          />
        ) : null}
        <input type="submit" value="올리기" />
      </form>
    </div>
  );
};

export default PostsFactory;
