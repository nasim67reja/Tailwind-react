import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
};

export default App;
