import React from "react";
import Bookmark from "./Bookmark";

const BookmarksList = ({ bookmarks }) => {
  return (
    <section>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} key={bookmark.id} />
      ))}
    </section>
  );
};

export default BookmarksList;
