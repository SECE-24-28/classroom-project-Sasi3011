import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllFeedback from "./pages/AllFeedback";
import AddFeedbackModal from "./components/AddFeedbackModal";
import Header from "./components/Header";
import { DataProvider } from "./context/DataContext";
import { useContext } from "react";
import DataContext from "./context/DataContext";

function AppContent() {
  const { modalOpen } = useContext(DataContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-feedback" element={<AllFeedback />} />
      </Routes>

      {modalOpen && <AddFeedbackModal />}
    </>
  );
}

function App() {
  return (
    <DataProvider>
      <Router>
        <AppContent />
      </Router>
    </DataProvider>
  );
}

export default App;
