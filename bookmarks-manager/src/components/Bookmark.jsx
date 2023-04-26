import React from "react";
import "./Bookmark.scss";

const Bookmark = ({ bookmark, tags }) => {
  return (
    <li className="bookmark">
      <p>
        {bookmark.text}
        <a
          className="source"
          href={bookmark.source}
          target="_blank"
          rel="noreferrer"
        >
          (Link)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: tags.find((tag) => tag.name === bookmark.tag)?.color,
        }}
      >
        {bookmark.tag}
      </span>
    </li>
  );
};

export default Bookmark;
