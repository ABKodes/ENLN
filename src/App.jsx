import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register";
import News from "./pages/News";
import AnnalForum from "./pages/AnnualForum"
function App() {
  return (
    <html>
      <body>
        <Header />
        <Home />
        <About />
        <News/>
        <Register />
        <AnnalForum />
        <Footer />
      </body>
    </html>
  );
}

export default App;
