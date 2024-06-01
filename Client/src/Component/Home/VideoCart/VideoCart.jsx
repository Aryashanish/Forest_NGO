/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const VideoCart = () => {
  return (
    <div className="featured-video-container cursor-pointer h-screen border-check">
      <div>
        <iframe
          width="100%"
        //   height="100vh"
          src="https://www.youtube-nocookie.com/embed/fjksRvyh8eM?si=SzCSNgWKI81oI0WB"
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCart;