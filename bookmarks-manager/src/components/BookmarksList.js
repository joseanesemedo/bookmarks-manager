import React from "react";
import Bookmark from "./Bookmark";

const BookmarksList = ({ bookmarks, tags }) => {
  return (
    <section>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} key={bookmark.id} tags={tags} />
      ))}
    </section>
  );
};

export default BookmarksList;
