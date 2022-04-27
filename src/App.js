import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCounter from "./pages/basic/Counter/classComponent";
import BasicReact from "./pages/basic/React";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import SignIn from "./pages/signin/";
import "./App.css";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import MovieDetail from "./pages/moviedetail";
import OrderPage from "./pages/orderpage";
import Payment from "./pages/payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="basic/login" element={<BasicLogin />} />
        <Route path="basic/home" element={<BasicHome />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="moviedetail" element={<MovieDetail />} /> */}
        <Route path="moviedetail/:id" element={<MovieDetail />} />
        <Route path="orderpage" element={<OrderPage />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
