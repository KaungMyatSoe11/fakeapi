import { BrowserRouter, Link } from "react-router-dom";
import Router from "./Router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to={"/cart"}>Cart</Link>
        <div className="container mx-auto">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
