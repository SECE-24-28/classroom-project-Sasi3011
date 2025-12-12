import { useContext } from "react";
import DataContext from "../context/DataContext";
import FeedbackList from "../components/FeedbackList";

const AllFeedback = () => {
  const { post, setModalOpen } = useContext(DataContext);

  return (
    <div className="container">
      <h1 className="title">All Feedback</h1>

      <div className="topBar">
        <div className="feedbackCount">
          Total Feedback: <strong>{post.length}</strong>
        </div>

        <button className="btnAdd" onClick={() => setModalOpen(true)}>
          + Add Feedback
        </button>
      </div>

      <FeedbackList post={post} />
    </div>
  );
};

export default AllFeedback;
