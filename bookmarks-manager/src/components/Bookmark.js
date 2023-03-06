import React from "react";

const Bookmark = ({ bookmark }) => {
  return (
    <li className="bookmark">
      <p>
        <a
          className="source"
          href={bookmark.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: bookmark.color,
        }}
      >
        {bookmark.text}
      </span>
    </li>
  );
};

export default Bookmark;
