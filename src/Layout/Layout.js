import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="m-auto my-8 p-3">{children}</div>
    </>
  );
};

export default Layout;
