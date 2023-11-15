import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Programs from "./pages/Programs";
import Contacts from "./pages/Contacts";
import Resources from "./pages/Resources";

function App() {
  return (
    <html>
      <body>
        <Header />
        <Home />
        <About />
        <Blog />
        <Programs/>
        <Resources/>
        <Contacts/>
        <Footer/>
      </body>
    </html>
  );
}

export default App;
