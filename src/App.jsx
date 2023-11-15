import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register";
import News from "./pages/News";
import Events from "./pages/Events";
import Membership from "./pages/Membership";
function App() {
  return (
    <html>
      <body>
        <Header />
        <Home />
        <About />
        <News/>
        <Register />
        <Events/>
        <Membership />
        <Footer />
      </body>
    </html>
  );
}

export default App;
