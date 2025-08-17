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
      }}
    >
      <h1 style={{ textAlign: "center", fontFamily: "IRANSANS" }}>
        اطلاعات حساب کاربری
      </h1>
      <Box className="personal-information">
        <Box className="top-details" display={"flex"}>
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
        <Box className="bott-details" display={"flex"}>
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
          }}
        >
          ویرایش اطلاعات
        </Button>
      </Box>
    </Container>
  );
};

export default Personal;
