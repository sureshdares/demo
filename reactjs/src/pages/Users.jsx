import { Avatar, Box, Card, Grid, Paper, Typography } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  profileWrapper: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "20px",
    flexWrap: "wrap",
  },
});
function Users() {
  const ClassNames = useStyle();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(users, ">>>");
  return (
    <Paper className={ClassNames.profileWrapper}>
      {users.map(({ username, email, age, createdAt }) => (
        <ProfileCard
          profile={{
            username: username,
            email: email,
            age: age,
            createdAt: createdAt,
          }}
        />
      ))}
    </Paper>
  );
}

export default Users;
