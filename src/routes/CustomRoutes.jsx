import { Routes, Route } from "react-router-dom";
import UserDetails from "../components/UserDetails/UserDetails";
import SocialApp from "../components/SocialApp";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SocialApp />} />
      <Route path="/user/:userId" element={<UserDetails />} />
    </Routes>
  );
};

export default CustomRoutes;
