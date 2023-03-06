import React, { useEffect, useState } from "react";
import "./Home.scss";
import TagsFilter from "../components/TagsFilter";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";
import BookmarksList from "../components/BookmarksList";
import Loading from "../components/Loading";

const Home = ({ session }) => {
  let navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);

      let query = supabase
        .from("bookmarks")
        .select("*")
        .eq("uid", session.user.id);

      if (currentCategory !== "all") query = query.eq("tag", currentCategory);

      const { data, error } = await query;

      if (!error) {
        setBookmarks(data);
      } else {
        alert("There was a problem getting data");
      }

      setIsLoading(false);
    }

    getTags();
    getBookmarks();
  }, [session, currentCategory]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <main className="main">
      <TagsFilter
        session={session}
        tags={tags}
        setTags={setTags}
        setCurrentCategory={setCurrentCategory}
      />
      <div>
        <h2>Welcome back, {session.user.user_metadata.username}</h2>
        <button onClick={handleLogout}>Logout</button>
        {isLoading ? (
          <Loading />
        ) : (
          <BookmarksList bookmarks={bookmarks} tags={tags} />
        )}
      </div>
    </main>
  );
};

export default Home;
