import { createContext, useState, useEffect } from "react";
import api from "../api/Feedback";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Format date
  const formatDate = () => {
    const d = new Date();
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    return `${month} ${day}, ${year} ${h}:${m}:${s} ${ampm}`;
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

  return (
    <DataContext.Provider
      value={{
        post,
        setPost,
        search,
        setSearch,
        modalOpen,
        setModalOpen,
        addNewFeedback
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
