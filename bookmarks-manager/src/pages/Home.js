import React, { useEffect, useState } from "react";
import "./Home.scss";
import TagsFilter from "../components/TagsFilter";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";
import BookmarksList from "../components/BookmarksList";

const Home = ({ session }) => {
  let navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  // const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    async function getTags() {
      let query = supabase.from("tags").select("*").eq("uid", session.user.id);

      const { data: tags, error } = await query;

      if (!error) {
        setTags(tags);
      } else {
        alert("There was a problem getting data");
      }
    }

    async function getBookmarks() {
      let query2 = supabase
        .from("bookmarks")
        .select("*")
        .eq("uid", session.user.id);

      const { data, error } = await query2;

      if (!error) {
        setBookmarks(data);
      } else {
        alert("There was a problem getting data");
      }
    }

    getTags();
    getBookmarks();
  }, [session]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <main className="main">
      <TagsFilter session={session} tags={tags} setTags={setTags} />
      <div>
        <h2>Welcome back, {session.user.user_metadata.username}</h2>
        <button onClick={handleLogout}>Logout</button>
        <BookmarksList bookmarks={bookmarks} tags={tags} />
      </div>
    </main>
  );
};

export default Home;
