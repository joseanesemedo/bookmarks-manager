import React, { useState } from "react";
import supabase from "../supabase";

const NewBookmarkForm = ({ setBookmarks, setShowForm }) => {
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
        .from("facts")
        .insert([{ text, source, tag }])
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

  return <div>NewBookmarkForm</div>;
};

export default NewBookmarkForm;
