import React from 'react';
import './posts.css';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Posts = () => {
  return (
    <div className='post'>

        <div className="post__header">
           <div className="post__headerAuthor">
               <Avatar>R </Avatar>
                SE Factory • <span>12h</span> 
            </div>
            <MoreHorizIcon />
        </div>

        <div className="post__image">
            <img
            src='https://uploads-ssl.webflow.com/63e3828f575098222357ad70/64ad72a3008c1bf15de71268_Frame-92.png'
            alt='jjjj' 
            />
        </div>

        <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by 21 people.
        </div>
    </div>
  )
}

export default Posts