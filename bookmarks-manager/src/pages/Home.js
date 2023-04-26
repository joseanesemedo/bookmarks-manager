import React, { useEffect, useState } from "react";
import "./Home.scss";
import TagsFilter from "../components/TagsFilter";
import supabase from "../supabase";
import BookmarksList from "../components/BookmarksList";
import NewBookmarkForm from "../components/NewBookmarkForm";
import Loading from "../components/Loading";

const Home = ({ session }) => {
  const [tags, setTags] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

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

  return (
    <>
      <main className="main">
        <TagsFilter
          session={session}
          tags={tags}
          setTags={setTags}
          setCurrentCategory={setCurrentCategory}
        />
        <div>
          <div>
            <button
              className="btn btn-large btn-open"
              onClick={() => setShowForm((show) => !show)}
            >
              {showForm ? "Close" : "Add new bookmark"}
            </button>
            {showForm ? (
              <NewBookmarkForm
                setBookmarks={setBookmarks}
                setShowForm={setShowForm}
              />
            ) : null}
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <BookmarksList bookmarks={bookmarks} tags={tags} />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
