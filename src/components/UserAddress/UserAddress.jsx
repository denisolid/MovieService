import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUsersById } from "../../services/api";

const UserAddress = () => {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsersById(params.userId).then((data) => setUser(data));
  }, [params.userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  if (!user.address) {
    return <p>No address available</p>;
  }

  return (
    <div>
      <p>Address: {user.address.address}</p>
      <p>City: {user.address.city}</p>
      <p>State: {user.address.state}</p>
      <p>State Code: {user.address.stateCode}</p>
      <p>Postal Code: {user.address.postalCode}</p>
      <p>
        Coordinates: Lat {user.address.coordinates.lat}, Lng{" "}
        {user.address.coordinates.lng}
      </p>
      <p>Country: {user.address.country}</p>
    </div>
  );
};

export default UserAddress;
