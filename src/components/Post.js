import React from "react";
import { FaThumbsUp, FaRegCommentDots } from "react-icons/fa";

const Post = ({ post }) => {
  return (
    <div className="mx-4 my-4 w-3/12 h-44 rounded-md px-6 py-2 bg-gradient-to-br from-green-400 to-green-200 shadow-lg">
      <div className="header">
        <div className="text-left font-semibold text-xl text-gray-700">
          {post.post_title}
        </div>
        <div className="flex justify-start items-center">
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src={post.user_image}
              alt="pic1"
            />
          </div>
          <div className="font-medium italic text-lg ml-2 text-gray-600">
            {post.user_name}
          </div>
        </div>
      </div>

      <div>
        {" "}
        <img src={post.post_image} alt="post_img" />{" "}
      </div>

      <div className="footer mt-4 flex justify-around items-center">
        <div className="mx-2 flex items-center">
          <FaThumbsUp />
          <div className="ml-1">{post.like_count}</div>
        </div>
        <div className="mx-2 flex items-center">
          <FaRegCommentDots />
          <div className="ml-1">{post.comment_count}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
