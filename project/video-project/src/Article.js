import React from "react";

const Article = ({ video, onClick }) => {//실행(2)번
  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector("video").
    play();
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector("video").pause();
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(video)} //실행(3)번
    >
      <div className="inner">
        <div className="txt">
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <figure>
          <video src={video} muted loop></video>
        </figure>
      </div>
    </article>
  );
};

export default Article;