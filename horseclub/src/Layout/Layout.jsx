import Footer from "../components/Footer";
import Header from "../components/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <div className="w-full mx-auto py-8 bg-black h-screen">{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;
