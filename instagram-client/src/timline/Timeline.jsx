import React, { useState } from 'react';
import './Timeline.css';
import Suggestions from './Suggestions';
import Posts from '../posts/Posts';

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      user: "SE Factory",
      postImage:
        "https://uploads-ssl.webflow.com/63e3828f575098222357ad70/64ad72a3008c1bf15de71268_Frame-92.png",
      likes: 54,
      timestamp: "3d",
    },
    {
      user: "Mohamed_Youssef",
      postImage:
        "https://media.gettyimages.com/id/107528000/photo/youssef-mohamad-of-1-fc-koeln-and-theofanis-gekas-of-eintracht-frankfurt-battles-for-the-ball.jpg?s=612x612&w=gi&k=20&c=xkpYd3vCzf6cnepqv0KnZBLGIbeD70gR9yJNDJ_UKfw=",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "Samir98",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "2h",
    },
    {
      user: "Nabiha23",
      postImage:
        "https://cakewithname.net/thumbnail/Nabiha/130/candles-decorated-happy-birthday-cake-for-Nabiha.jpg",
      likes: 14,
      timestamp: "4d",
    },
  ]);
  return (
    <div className="timeline">
    <div className="timeline__left">
      <div className="timeline__posts">
        {posts.map((post) => (
          <Posts
            user={post.user}
            postImage={post.postImage}
            likes={post.likes}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
    <div className="timeline__right">
      <Suggestions />
    </div>
  </div>
  );
}

export default Timeline