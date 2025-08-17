import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Container
      sx={{
        width: "600px",
        height: "500px",
        border: "2px solid #0984e3",
        borderRadius: "20px",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "32px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "20%",
          borderBottom: "1px solid #000000",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            width: "33%",
            height: "80%",
            textAlign: "center",
          }}
          color="#ffffff"
        >
          <img
            src="https://icongr.am/material/train.svg?size=64&color=currentColor"
            alt=""
          />
        </Button>
        <Button
          sx={{ width: "33%", height: "80%", textAlign: "center" }}
          color="#ffffff"
        >
          <img
            src="https://icongr.am/material/airplane.svg?size=64&color=currentColor"
            alt=""
          />
        </Button>
        <Button
          sx={{ width: "33%", height: "80%", textAlign: "center" }}
          color="#ffffff"
        >
          <img
            src="https://icongr.am/material/bus-side.svg?size=64&color=currentColor"
            alt=""
          />
        </Button>
      </Box>
      <Box
        sx={{
          width: "80%",
          height: "20%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField dir="rtl" placeholder="مقصد"></TextField>
        <img
          src="https://icongr.am/material/arrow-left.svg?size=32&color=currentColor"
          alt=""
        />
        <TextField dir="rtl" placeholder="مبدا"></TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          height: "20%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <Typography fontSize={"18px"} fontFamily={"IRANSANS"} color="#000000">
          : روز{" "}
        </Typography>
        <TextField
          type="number"
          sx={{ width: "85px", height: "45px" }}
        ></TextField>
        <Typography fontSize={"18px"} fontFamily={"IRANSANS"} color="#000000">
          : ماه{" "}
        </Typography>
        <TextField
          type="number"
          sx={{ width: "85px", height: "45px" }}
        ></TextField>
        <Typography
          fontSize={"18px"}
          fontFamily={"IRANSANS"}
          color="#000000"
          textAlign={"center"}
        >
          : سال{" "}
        </Typography>
        <TextField
          value={1404}
          type="number"
          sx={{ width: "85px", height: "45px" }}
        ></TextField>
      </Box>
      <Button
        sx={{
          backgroundColor: "#0c2461",
          width: "80%",
          height: "12%",
          fontSize: "28px",
          fontFamily: "IRANSANS",
          color: "#ffffff",
          borderRadius: "10px",
        }}
      >
        جستجو
      </Button>
    </Container>
  );
};

export default Menu;
