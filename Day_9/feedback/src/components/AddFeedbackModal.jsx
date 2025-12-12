import { useState, useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import "../App.css";

const AddFeedbackModal = () => {
  const { addNewFeedback, updateFeedback, setModalOpen, editItem, setEditItem } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setBody(editItem.body);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;

    if (editItem) {
      updateFeedback(editItem.id, title, body);
      setEditItem(null);
    } else {
      addNewFeedback(title, body);
    }
    setModalOpen(false);
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h2>{editItem ? "Edit Feedback" : "Add Feedback"}</h2>

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
            <button className="btn" type="submit">{editItem ? "Update" : "Add"}</button>
            <button className="btnCancel" onClick={() => {
              setModalOpen(false);
              setEditItem(null);
            }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeedbackModal;
