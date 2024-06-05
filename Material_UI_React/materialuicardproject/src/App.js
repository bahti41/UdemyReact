import { AppBar, Container, Grid, Toolbar } from "@mui/material";
import "./App.css";
import Course from "./components/Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CcSharp from "./images/ccsharp.png";
import Web from "./images/kompleweb.jpg";

function App() {
  return (
    <>
      <div>
        <AppBar>
          <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ marginTop: 10 }}>
            <Grid item xs={12} md={6} lg={3}>
              <Course
                image={Angular}
                title="Angular"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Course
                image={Angular}
                title="Angular"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Course
                image={Angular}
                title="Angular"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Course
                image={Angular}
                title="Angular"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default App;
