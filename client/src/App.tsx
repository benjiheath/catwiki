import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HomePage, CatProfilePage, TopVisitsPage } from "./pages";
import { AppContainer, Logo } from "./components/styledComponents";
import logo from "./img/CatwikiLogo.svg";
import CatProfileProvider from "./contexts/CatProfile/CatProfileContext";
import HomePageProvider from "./contexts/HomePage/HomePageContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <Switch>
            <HomePageProvider>
              <CatProfileProvider>
                <Route exact path="/" component={HomePage} />
                <Route path="/breeds/:id" exact component={CatProfilePage} />
                <Route path="/top" exact component={TopVisitsPage} />
              </CatProfileProvider>
            </HomePageProvider>
          </Switch>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
