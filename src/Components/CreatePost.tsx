"use client";

import React, { useState } from "react";
import { FaImages } from "react-icons/fa";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const [openPostArea, setOpenPostArea] = useState(false);

  return (
    <div className="relative mt-4">
      {/* Page content */}
      <div className={`${openPostArea ? "opacity-40 pointer-events-none" : ""}`}>
        <div className="flex space-x-2 items-center border border-gray-300 rounded-lg p-2">
          <textarea
            className="w-full resize-none outline-none"
            rows={1}
            placeholder="What's on your mind?"
            onClick={() => setOpenPostArea(true)}
          />
        </div>
      </div>

      {/* Modal */}
      {openPostArea && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-4">
            <div className="flex justify-between items-center border-b pb-2 mb-3">
              <h2 className="text-lg font-semibold">Create Post</h2>
              <button
                className="text-gray-500 hover:text-black cursor-pointer"
                onClick={() => setOpenPostArea(false)}
              >
                ✕
              </button>
            </div>

            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 mb-3 resize-none"
              rows={4}
              placeholder="What's on your mind?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <div className="flex items-center mb-3">
              <button className="flex items-center space-x-1 cursor-pointer text-blue-500 hover:text-blue-700">
                <FaImages />
                <span>Add Photo/Video</span>
              </button>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-6 py-2 cursor-pointer rounded-lg hover:bg-blue-600"
                onClick={() => {
                  console.log(postContent);
                  setOpenPostArea(false);
                  setPostContent("");
                }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
