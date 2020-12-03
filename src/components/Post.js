import React, { useState } from "react";
import { dbService } from "../fBase";

const Post = ({ postObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newCaption, setNewCaption] = useState(postObj.caption);
  const [newBestComment, setNewBestComment] = useState(postObj.bestComment);
  const onDeleteClick = async () => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    // console.log(ok);
    if (ok) {
      await dbService.doc(`Post/${postObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`Post/${postObj.id}`).update({
      caption: newCaption,
      bestComment: newBestComment,
    });
    setEditing(false);
  };
  const onCaptionChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewCaption(value);
  };
  const onBestCommentChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewBestComment(value);
  };
  return (
    <div>
      {editing ? (
        <>
          {/* <h4>{postObj.youtubeUrl}</h4> */}
          <img src={postObj.thumbnail} width="320" height="180" alt="thumbnail" />
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="내용 수정"
              value={newCaption}
              required
              onChange={onCaptionChange}
            />
            <input
              type="text"
              placeholder="배댓 수정"
              value={newBestComment}
              onChange={onBestCommentChange}
            />
            <input type="submit" value="업데이트" />
          </form>
          <button onClick={toggleEditing}>취소</button>
          {/* <h6>{postObj.bestComment}</h6> */}
        </>
      ) : (
        <>
          {/* <h4>{postObj.youtubeUrl}</h4> */}
          <img src={postObj.thumbnail} width="320" height="180" alt="thumbnail" />
          <h4>{newCaption}</h4>
          <h6>{newBestComment}</h6>
          {/* <input type="file" accept="image/*" /> */}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>게시글 삭제</button>
              <button onClick={toggleEditing}>게시글 수정</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Post;
