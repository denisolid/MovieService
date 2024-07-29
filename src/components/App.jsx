import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
// import Users from "../pages/Users/Users";
// import UserDetails from "./UserDetails/UserDetails";
// import UserPosts from "./UserPosts/UserPosts";
import UserAddress from "./UserAddress/UserAddress";
import { lazy, Suspense } from "react";

const Users = lazy(() => import("../pages/Users/Users"));
const UserDetails = lazy(() => import("./UserDetails/UserDetails"));
const UserPosts = lazy(() => import("./UserPosts/UserPosts"));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h2>Loading your page</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetails />}>
            <Route path="address" element={<UserAddress />} />
            <Route path="posts" element={<UserPosts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
