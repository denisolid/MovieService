import { useNavigate } from "react-router-dom";

const HandleGoBack = () => {
  const navigate = useNavigate();
  if (location.state && location.state.from) {
    navigate(location.state.from, { state: location.state.state });
  } else {
    navigate("/movies");
  }
};
export default HandleGoBack;
