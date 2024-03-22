import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
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
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {users.length == 0
        ? "Loading..."
        : users.map((user) => {
            const labelId = `checkbox-list-secondary-label-${user?.id}`;
            return (
              <ListItem key={user?.id} disablePadding>
                <Link to={"/user/123"}>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${user?.firstName}`}
                        src={user?.picture}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={user?.firstName + " " + user?.lastName}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
    </List>
  );
}
