import { BrowserRouter, Link } from "react-router-dom";
import Router from "./Router";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Link to={"/cart"}>Cart</Link> */}
        <Header/>
        <div className="container mx-auto py-[100px]">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
