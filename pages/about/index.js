import Footer from "../../components/footer";
import Navbar, { PAGE_ABOUT } from "../../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar location={PAGE_ABOUT} />
      <h2>Work in progress</h2>
      <Footer />
    </div>
  );
};

export default Home;
