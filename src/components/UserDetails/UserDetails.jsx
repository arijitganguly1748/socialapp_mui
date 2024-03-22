import React from "react";
import Loader from "../Loader/Loader";
import UserProfile from "./UserProfile";
import useFetchUserProfile from "../../hooks/useFetchUserProfile";

const UserDetails = () => {
  const [user, loading] = useFetchUserProfile();
  return <>{!loading ? <UserProfile user={user} /> : <Loader />}</>;
};

export default UserDetails;
