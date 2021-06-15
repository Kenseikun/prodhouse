import Copyrights from "./components/Copyrights";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Offer from "./components/Offer";
import Portfolio from "./components/Portfolio";
import "./style/App.scss";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Offer />
      <Portfolio />
      <Footer />
      <Copyrights />
    </>
  );
}

export default App;
