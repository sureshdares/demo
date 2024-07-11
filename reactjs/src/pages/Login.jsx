import { Box, Button, Card, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useStyle = makeStyles({
  inputFields: {
    marginTop: "20px !important",
  },
  inputsWrapper: {
    borderRadius: "8px",
    border: "1px solid black",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    padding: "20px",
  },
  cardWrapper: {
    padding: "10px",
    width: "60%",
    margin: "auto",
  },
});
function Login() {
  const classes = useStyle();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginResponse, setLoginResponse] = useState("");

  const navigate = useNavigate();
  const setState = {
    userName: setUserName,
    password: setPassword,
  };

  const handleInputChange = (id, value) => {
    setState[id](value);
  };
  const handleLoginSubmit = async () => {
    const jsonData = {
      userName,
      password,
    };
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    const data = await response.json();
    if (data.flag === "success") {
      navigate("/users");
    } else if (data.flag === "failure") {
      alert(" check the Login Credentials");
    }
    // .then((res) => res.json())
    // .then((data) => {
    //   if (data.flag === "success") {
    //     navigate("/users");
    //   }
    // })
    // .catch((err) => {
    //   alert("check the Login Credentials");
    // });
  };
  return (
    <Paper>
      <Card className={classes.cardWrapper}>
        <Box className={classes.inputsWrapper}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Login
            </Typography>
            <TextField
              className={classes.inputFields}
              label="User Name"
              variant="outlined"
              onChange={(e) => handleInputChange("userName", e.target.value)}
            />
            <TextField
              className={classes.inputFields}
              label="Password"
              variant="outlined"
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
            <Button
              className={classes.inputFields}
              variant="contained"
              onClick={handleLoginSubmit}>
              Login
            </Button>
          </Box>
        </Box>
      </Card>
    </Paper>
  );
}

export default Login;
