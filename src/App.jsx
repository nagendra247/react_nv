import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Home from './pages/Home/Home';
import Practice from './pages/Practice/Practice';
import TopicTasks from './pages/TopicTasks/TopicTasks';
import TaskDetails from './pages/TaskDetails/TaskDetails';
import Learn from './pages/Learn/Learn';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

// Wrapper component to handle footer visibility
const AppContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname.includes('/practice/topic/') || 
                    location.pathname.includes('/login') || 
                    location.pathname.includes('/signup');

  return (
    <div className="app">
      <Navbar />
      <main className={`main-content ${hideFooter ? 'no-footer' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/topic/:topicId" element={<TopicTasks />} />
          <Route path="/practice/topic/:topicId/task/:taskId" element={<TaskDetails />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;