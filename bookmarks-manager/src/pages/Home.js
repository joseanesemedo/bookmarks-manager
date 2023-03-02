import React, { useState } from "react";
import "./Home.scss";
import supabase from "../supabase";
import TagsFilter from "../components/TagsFilter";

const Home = ({ session }) => {
  return (
    <main className="main">
      <TagsFilter session={session} />
      <div>ddd</div>
    </main>
  );
};

export default Home;
