import React from "react";

const Home = ({ session }) => {
  return (
    <div>
      <h2>Welcome back, {session.user.user_metadata.username}</h2>
      Home
    </div>
  );
};

export default Home;
