import React from "react";
import Bookmark from "./Bookmark";

const BookmarksList = ({ bookmarks, tags }) => {
  if (bookmarks.length === 0) {
    return (
      <p className="message">There are no bookmarks in this category yet.</p>
    );
  }

  return (
    <section>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} key={bookmark.id} tags={tags} />
      ))}
    </section>
  );
};

export default BookmarksList;
