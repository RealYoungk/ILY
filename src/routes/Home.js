import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PostsFactory from "../components/PostFactory";
import { dbService } from "../fBase";

const Home = ({ userObj }) => {
  // console.log(userObj);
  const [posts, setPosts] = useState([]);
  // const [thumbnail, setThumbnail] = useState("");
  useEffect(() => {
    dbService.collection("Post").onSnapshot((snapshot) => {
      const postArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postArray);
    });
  }, []);
  return (
    <div>
      <PostsFactory userObj={userObj} />
      <div>
        {posts.map((post) => (
          <Post key={post.id} postObj={post} isOwner={userObj.uid === post.creatorId} />
        ))}
      </div>
    </div>
  );
};

export default Home;
