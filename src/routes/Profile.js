import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import { authService, dbService } from "../fBase";

const Profile = ({ userObj, refreshUser }) => {
  const [myPosts, setMyPosts] = useState([]);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyPosts = async () => {
    const posts = await dbService
      .collection("Post")
      .where("creatorId", "==", userObj.uid)
      .get()
      .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setMyPosts(Object.assign([], posts));
    // console.log(myPosts);
  };
  useEffect(() => {
    getMyPosts();
  }, []);
  // console.log(myPosts);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
    }
    refreshUser();
    // setNewDisplayName("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="닉네임" onChange={onChange} />
        <input type="submit" value="프로필 업데이트" />
      </form>
      <button onClick={onLogOutClick}>로그아웃</button>
      {myPosts.map((post) => (
        <Post key={post.id} postObj={post} isOwner={userObj.uid === post.creatorId} />
      ))}
    </>
  );
};

export default Profile;
