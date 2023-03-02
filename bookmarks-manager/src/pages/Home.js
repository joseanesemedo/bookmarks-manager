import React from "react";
import "./Home.scss";

const Home = ({ session }) => {
  return (
    <main className="main">
      <aside>
        <ul>
          <li className="category">
            <button className="btn btn__tags">All</button>
          </li>
          <li className="category">
            <button className="btn btn__add__tag">Add tag +</button>
          </li>
          <li className="category">
            <button className="btn btn__tag">All</button>
          </li>
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
