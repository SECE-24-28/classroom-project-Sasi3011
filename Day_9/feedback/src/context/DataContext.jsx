import { createContext, useState, useEffect } from "react";
import { format } from "date-fns";
import api from "../api/Feedback";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // Format date using date-fns
  const formatDate = () => {
    return format(new Date(), "MMM dd, yyyy h:mm:ss a");
  };

  // Fetch initial feedback
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/feedback");
      setPost(res.data);
    };
    fetchData();
  }, []);

  // Add new feedback
  const addNewFeedback = async (title, body) => {
    const newItem = {
      id: String(post.length + 1),
      title,
      datatime: formatDate(),
      body,
    };

    const res = await api.post("/feedback", newItem);
    setPost([...post, res.data]);
  };

  // Update existing feedback
  const updateFeedback = async (id, title, body) => {
    const updatedItem = {
      id,
      title,
      datatime: formatDate(),
      body,
    };

    const res = await api.put(`/feedback/${id}`, updatedItem);
    setPost(post.map((item) => (item.id === id ? res.data : item)));
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    await api.delete(`/feedback/${id}`);
    setPost(post.filter((item) => item.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        post,
        setPost,
        search,
        setSearch,
        modalOpen,
        setModalOpen,
        addNewFeedback,
        editItem,
        setEditItem,
        updateFeedback,
        deleteFeedback
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
