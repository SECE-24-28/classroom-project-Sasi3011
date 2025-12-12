import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import "../App.css";

const AddFeedbackModal = () => {
  const { addNewFeedback, setModalOpen } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;

    addNewFeedback(title, body);
    setModalOpen(false);
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h2>Add Feedback</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="inputBox"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="inputBox"
            placeholder="Enter feedback..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <div className="modalActions">
            <button className="btn" type="submit">Add</button>
            <button className="btnCancel" onClick={() => setModalOpen(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeedbackModal;
