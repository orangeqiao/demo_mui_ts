import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from '@material-ui/core';
import { memo } from "react";
import styles from './index.module.less'

 const Login = memo(() => {
  const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    width: "400px",
    variant: "outlined",
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={20}
			className={styles.login}
    >
      <Card style={cardStyle}>
        <CardHeader title="登录" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
            />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
            />
          </div>
        </CardContent>
        <CardActions className={styles.footer}>
          <Button variant="contained" size="large" color="secondary">
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
});
export default Login
