import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";

export default function UserList() {
  const [users] = useFetchUsers();
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
                <Link to={`/user/${user?.id}`}>
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
