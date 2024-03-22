import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetchUsers = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyapi.io/data/v1/user", {
          headers: { "app-id": import.meta.env.VITE_APP_ID },
        });
        const responseObj = response?.data;
        setUsers([...responseObj?.data]);
      } catch (error) {}
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);

    return [users];
}

export default useFetchUsers