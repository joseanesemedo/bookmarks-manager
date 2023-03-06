import React, { useState } from "react";
import "./TagsFilter.scss";

import NewTagForm from "./NewTagForm";

const TagsFilter = ({ session, tags, setTags }) => {
  const [showForm, setShowForm] = useState(false);

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
          <NewTagForm
            session={session}
            setTags={setTags}
            setShowForm={setShowForm}
          />
        )}

        {tags.map((tag) => (
          <li className="category" key={tag.id}>
            <button
              className="btn btn__tag"
              style={{ backgroundColor: tag.color }}
            >
              {tag.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TagsFilter;
