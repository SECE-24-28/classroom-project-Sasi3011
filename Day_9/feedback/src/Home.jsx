import React from "react";
import "./App.css";

const Home = ({ post, search }) => {
  if (!search.trim()) return <></>;

  const filtered = post.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="cardContainer">
      {filtered.length > 0 ? (
        filtered.map((item) => (
          <div className="card" key={item.id}>
            <h3 className="cardTitle">{item.title}</h3>
            <small>{item.datatime}</small>
            <p className="cardBody">{item.body}</p>
          </div>
        ))
      ) : (
        <p className="noResult">No results found.</p>
      )}
    </div>
  );
};

export default Home;
