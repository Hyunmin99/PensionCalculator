import style from "../styles/Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        <div className={style.container}>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
