import {
  Box,
  Container,
  Typography,
  Link,
  TextField,
  Button,
} from "@mui/material";

const Login = () => {
  return (
    <Container
      sx={{
        width: "300px",
        height: "400px",
        border: "2px solid #0984e3",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 0,
        margin: 0,
      }}
    >
      <Typography
        color="#1e3799"
        fontSize={28}
        fontFamily={"IRANSANS"}
        textAlign={"center"}
      >
        وارد شوید
      </Typography>
      <Box
        className="sign-inputs"
        sx={{
          height: "50%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <TextField label="نام کاربری" variant="outlined"></TextField>
        <TextField
          label="رمز عبور"
          variant="outlined"
          sx={{ fontFamily: "IRANSANS" }}
        ></TextField>
        <Button
          sx={{
            backgroundColor: "#1e3799",
            color: "#ffffff",
            fontFamily: "IRANSANS",
            fontSize: "20px",
          }}
        >
          ورود
        </Button>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-around" }}
        className="create-account"
      >
        <Typography
          color="#1e3799"
          fontSize={14}
          fontFamily={"IRANSANS"}
          textAlign={"start"}
          fontWeight={"bold"}
        >
          حساب ندارید؟
        </Typography>
        <Link
          href="https://pornhub.com"
          underline="hover"
          color="#1e3799"
          fontSize={14}
          fontFamily={"IRANSANS"}
          target="_blank"
          fontWeight={"bold"}
        >
          اینجا کلیک کن
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
