import React, { useState } from "react";
import "./Home.scss";
import supabase from "../supabase";

const Home = ({ session }) => {
  const [showForm, setShowForm] = useState(false);
  const [tagName, setTagName] = useState("");

  async function handleAddTag(e) {
    e.preventDefault();
    console.log(tagName);

    const { data: newTag, error } = await supabase
      .from("tags")
      .insert([{ name: tagName, uid: session.user.id }])
      .select();
  }

  return (
    <main className="main">
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

          <li className="category">
            <button className="btn btn__tag">All</button>
          </li>
        </ul>
      </aside>
      <div>ddd</div>
    </main>
  );
};

export default Home;
