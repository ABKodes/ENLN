import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import News from "./pages/News";
import Events from "./pages/Events";
import AnnualForum from "./pages/AnnualForum";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Membership from "./pages/Membership";
import NewsDetail from "./pages/NewsDetail";
import BlogDetail from "./pages/BlogDetail";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Programs />} />
        <Route
          path="/news-and-events/*"
          element={
            <Routes>
              <Route path="news" element={<News />} />
              <Route path="events" element={<Events />} />
              <Route path="annual-forum" element={<AnnualForum />} />
            </Routes>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/resources/*"
          element={
            <Routes>
              <Route path="publication" element={<Resources />} />
              <Route path="training-material" element={<Resources />} />
              <Route path="leadership-material" element={<Resources />} />
            </Routes>
          }
        />
        <Route path = "/membership" element = {<Membership />} />
        <Route path = "/resources" element = {<Resources />} />
        <Route path = "/blog-detail" element = {<BlogDetail/>} />
        <Route path = "/news-detail" element = {<NewsDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
