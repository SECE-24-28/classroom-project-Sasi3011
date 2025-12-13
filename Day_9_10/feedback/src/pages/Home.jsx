import { useContext } from "react";
import DataContext from "../context/DataContext";
import FeedbackList from "../components/FeedbackList";

const Home = () => {
  const { post, search, setSearch, setModalOpen } = useContext(DataContext);

  const filtered = search.trim()
    ? post.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="container">
      <h1 className="title">Search Feedback</h1>

      <div className="topBar">
        <input
          type="text"
          className="searchBox"
          placeholder="Search feedback..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="btnAdd" onClick={() => setModalOpen(true)}>
          + Add Feedback
        </button>
      </div>

      {search.trim() && <FeedbackList post={filtered} />}
    </div>
  );
};

export default Home;
