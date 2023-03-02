import React, { useState } from "react";
import supabase from "../supabase";

const NewTagForm = ({ session, setTags }) => {
  const [tagName, setTagName] = useState("");
  const [errors, setErrors] = useState({});

  async function handleAddTag(e) {
    e.preventDefault();

    validateForm();
    if (tagName) {
      const { data: newTag, error } = await supabase
        .from("tags")
        .insert([{ name: tagName, uid: session.user.id }])
        .select();

      if (!error) {
        setTags((tags) => [newTag[0], ...tags]);
      }
    }
  }

  const validateForm = () => {
    let validation = {};
    validation.tagName = tagName ? "" : "This field is required";

    setErrors({
      ...validation,
    });
  };

  return (
    <div className="tag__form__container">
      <form className="tag__form">
        <input
          type="text"
          value={tagName}
          onChange={(e) => {
            setTagName(e.target.value);
          }}
        />
        <h3 className="input__error">{errors.tagName && errors.tagName}</h3>
        <button onClick={handleAddTag} className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTagForm;
