import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import UserProfile from "./UserProfile";

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyapi.io/data/v1/user/${userId}`,
        {
          headers: { "app-id": import.meta.env.VITE_APP_ID },
        }
      );
      setLoading(false);
      setUser({ ...response?.data });
    } catch (error) {}
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return <>{!loading ? <UserProfile user={user} /> : <Loader />}</>;
};

export default UserDetails;
