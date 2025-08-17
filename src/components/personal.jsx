import { Container, Typography, Box, Button } from "@mui/material";
import React from "react";

const Personal = () => {
  return (
    <Container
      sx={{
        width: "1000px",
        height: "600px",
        border: "2px solid #0c2461",
        backgroundColor: "#3c6382",
        color: "#ffffff",
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", fontFamily: "IRANSANS" }}>
        اطلاعات حساب کاربری
      </h1>
      <Box
        className="personal-information"
        sx={{
          width: "80%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          className="top-details"
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontFamily={"IRANSANS"} fontSize={22}>
            نام :
          </Typography>
          <Typography fontFamily={"IRANSANS"} fontSize={22}>
            نام خانوادگی :
          </Typography>
          <Typography fontFamily={"IRANSANS"} fontSize={22}>
            شماره تماس :
          </Typography>
        </Box>
        <Box
          className="bott-details"
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontFamily={"IRANSANS"} fontSize={22}>
            کد ملی :
          </Typography>
          <Typography fontFamily={"IRANSANS"} fontSize={22}>
            تاریخ تولد :
          </Typography>
          <Typography fontFamily={"IRANSANS"} fontSize={22}>
            ایمیل :
          </Typography>
        </Box>
        <Button
          sx={{
            fontFamily: "IRANSANS",
            color: "#0c2461",
            backgroundColor: "#ced6e0",
            textAlign: "center",
          }}
        >
          ویرایش اطلاعات
        </Button>
      </Box>
    </Container>
  );
};

export default Personal;
