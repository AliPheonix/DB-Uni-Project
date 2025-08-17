import { Container } from "@mui/material";
import "./App.css";
import "./components/login";
import Login from "./components/login";
import Menu from "./components/menu";
import Personal from "./components/personal";
function App() {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="main-container"
    >
      {/* <Login /> */}
      {/* <Menu /> */}
      <Personal />
    </Container>
  );
}

export default App;
