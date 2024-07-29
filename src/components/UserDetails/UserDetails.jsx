import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchUsersById } from "../../services/api";
import s from "./UserDetails.module.css";

const UserDetails = () => {
  const params = useParams();
  console.log(params);
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/users");

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/users");
  //   }, 15000);
  // }, [navigate]);

  useEffect(() => {
    fetchUsersById(params.userId).then((data) => setUser(data));
  }, [params.userId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Link to={goBackRef.current}>Go back to users</Link>
      <p>User details #{params.userId}</p>
      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <div className={s.flex}>
        <NavLink to="address">Address</NavLink>
        <NavLink to="posts">Posts</NavLink>
      </div>
      <Suspense fallback={<h2>Loading your data</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default UserDetails;
