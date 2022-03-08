import Footer from "../../components/footer";
import Navbar, { PAGE_PROJECTS } from "../../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar location={PAGE_PROJECTS} />
      <h2>Work in progress</h2>
      <Footer />
    </div>
  );
};

export default Home;
