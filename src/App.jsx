import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About"

import Register from "./pages/Register";
import Blog from "./pages/Blog"
import News from "./pages/News";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import Contacts from "./pages/Contacts";
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import AnnalForum from "./pages/AnnualForum"
function App() {
  return (
    <html>
      <body>
        <Header />
        <Home />
        <About />
        <News/>
        <Blog />
        <Programs/>
        <Resources/>
        <Contacts/>
        <Register />
        <Events/>
        <Membership />
        <AnnalForum />
        <Footer />
      </body>
    </html>
  );
}

export default App;
