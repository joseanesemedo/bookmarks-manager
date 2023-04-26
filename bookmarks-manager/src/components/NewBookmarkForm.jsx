import React, { useState } from "react";
import supabase from "../supabase";
import "./NewBookmarkForm.scss";

const NewBookmarkForm = ({ session, tags, setBookmarks, setShowForm }) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [tag, setTag] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const textLength = text.length;

  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "https:" || url.protocol === "http:";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // 1. Check if data is valid
    if (text && isValidHttpUrl(source) && tag) {
      // 2. Upload fact to Supabase and receive the new fact object
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("bookmarks")
        .insert([{ text, source, tag, uid: session.user.id }])
        .select();

      setIsUploading(false);

      // 3. Add the new fact to the UI
      if (!error) {
        setBookmarks((bookmark) => [newFact[0], ...bookmark]);
      }

      // 4. Reset input fields
      setText("");
      setSource("");
      setBookmarks("");

      // 5. Close the form
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <textarea
        type="text"
        placeholder="Add new bookmark"
        minLength="10"
        maxLength="200"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose tag</option>
        {tags.map((tag) => (
          <option value={tag.name} key={tag.name}>
            {tag.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large btn-post" disabled={isUploading}>
        Post
      </button>
    </form>
  );
};

export default NewBookmarkForm;
