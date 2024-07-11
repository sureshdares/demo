import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { capitalize, startCase } from "lodash";

const useStyle = makeStyles({
  avatarWrapper: {},
  keys: {
    fontWeight: "bold !important",
    marginTop: "4px !important",
  },
  fieldValues: {
    fontWeight: "initial",
  },
});
function ProfileCard({ profile }) {
  const classes = useStyle();
  const { username, email, age, createdAt } = profile;
  return (
    <Card
      sx={{
        padding: "20px",
        width: "360px",
        border: "1px solid black",
        borderRadius: "8px",
      }}>
      <Box>
        <Avatar>{capitalize(username?.charAt(0))}</Avatar>
      </Box>

      <Typography className={classes.keys}>
        User Name:
        <Typography variant="span" className={classes.fieldValues}>
          {username}
        </Typography>
      </Typography>

      <Typography className={classes.keys}>
        Email:
        <Typography variant="span" className={classes.fieldValues}>
          {email}
        </Typography>
      </Typography>

      <Typography className={classes.keys}>
        Age:
        <Typography variant="span" className={classes.fieldValues}>
          {age}
        </Typography>
      </Typography>

      <Typography className={classes.keys}>
        Created At:
        <Typography variant="span" className={classes.fieldValues}>
          {createdAt}
        </Typography>
      </Typography>
    </Card>
  );
}

export default ProfileCard;
