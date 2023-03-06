import React, { useState } from "react";
import supabase from "../supabase";
import "./NewTagForm.scss";

const NewTagForm = ({ session, setTags }) => {
  const [tagName, setTagName] = useState("");
  const [tagColor, setTagColor] = useState("#e66465");
  const [errors, setErrors] = useState({});

  async function handleAddTag(e) {
    e.preventDefault();

    validateForm();
    if (tagName) {
      const { data: newTag, error } = await supabase
        .from("tags")
        .insert([{ name: tagName, color: tagColor, uid: session.user.id }])
        .select();

      if (!error) {
        setTags((tags) => [newTag[0], ...tags]);
        setTagColor("#e66465");
        setTagName("");
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
        <h2 className="input__label">Tag name</h2>
        <input
          type="text"
          value={tagName}
          onChange={(e) => {
            setTagName(e.target.value);
          }}
        />
        <h3 className="input__error">{errors.tagName && errors.tagName}</h3>
        <h2 className="input__label">Tag color</h2>
        <input
          type="color"
          value={tagColor}
          onChange={(e) => {
            setTagColor(e.target.value);
          }}
          className="color_input"
        />
        <button onClick={handleAddTag} className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTagForm;
