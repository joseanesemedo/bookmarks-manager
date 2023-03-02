import React, { useState } from "react";
import "./TagsFilter.scss";
import supabase from "../supabase";

const TagsFilter = ({ session, tags, setTags }) => {
  const [tagName, setTagName] = useState("");
  const [showForm, setShowForm] = useState(false);

  async function handleAddTag(e) {
    e.preventDefault();
    console.log(tagName);

    const { data: newTag, error } = await supabase
      .from("tags")
      .insert([{ name: tagName, uid: session.user.id }])
      .select();

    if (!error) {
      setTags((tags) => [newTag[0], ...tags]);
    }
  }

  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn__tags">All</button>
        </li>
        <li className="category">
          <button
            className="btn btn__add__tag"
            onClick={() => setShowForm((show) => !show)}
          >
            Add tag +
          </button>
        </li>

        {showForm && (
          <div className="tag__form__container">
            <form className="tag__form">
              <input
                type="text"
                value={tagName}
                onChange={(e) => {
                  setTagName(e.target.value);
                }}
              />
              <button onClick={handleAddTag}>add</button>
            </form>
          </div>
        )}

        {tags.map((tag) => (
          <li className="category" key={tag.id}>
            <button className="btn btn__tag">{tag.name}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TagsFilter;
