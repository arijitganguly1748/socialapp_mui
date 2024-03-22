import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchUserProfile = () => {
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

  return [user, loading];
};

export default useFetchUserProfile;
