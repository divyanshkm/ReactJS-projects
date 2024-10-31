import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const NASA_KEY = import.meta.env.VITE_NASA_API;
  }, []);

  return (
    <>
      <Main></Main>
      <SideBar></SideBar>
      <Footer></Footer>
    </>
  );
}

export default App;
