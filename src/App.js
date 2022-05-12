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
import ViewAll from "./pages/viewall";
import ManageMovie from "./pages/managemovie";

import PrivateRoute from "./helpers/route/privateRoute";
import PublicRoute from "./helpers/route/publicRoute";

// import "dotenv/config";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="basic/counter" element={<BasicCounter />} />
        <Route path="basic/react" element={<BasicReact />} />
        <Route path="basic/login" element={<BasicLogin />} />
        <Route path="basic/home" element={<BasicHome />} />
        <Route element={<PublicRoute restricted={true} />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="home" element={<Home />} />
        <Route element={<PrivateRoute isAdmin={false} />}>
          <Route path="viewall" element={<ViewAll />} />
          {/* <Route path="moviedetail" element={<MovieDetail />} /> */}

          <Route path="moviedetail/:id" element={<MovieDetail />} />
          <Route path="orderpage" element={<OrderPage />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="managemovie" element={<ManageMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
