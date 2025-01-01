import "./App.scss";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Main } from "./Components/Main/Main";
import { Grid } from "./Components/Grid/Grid";
import { Navbar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <Grid>
        <Header />
        <Navbar />
        <Main>
          <h1>My Main Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, tortor nec convallis luctus,
          </p>
        </Main>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
