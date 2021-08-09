import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HomePage, CatProfilePage, TopVisitsPage, NotFoundPage } from './pages';
import { AppContainer, Logo } from './components/styledComponents';
import logo from './img/CatwikiLogo.svg';
import CatProfileProvider from './contexts/CatProfile/CatProfileContext';
import HomePageProvider from './contexts/HomePage/HomePageContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Link to='/'>
            <Logo src={logo} />
          </Link>
          <HomePageProvider>
            <CatProfileProvider>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/breeds/:id' component={CatProfilePage} />
                <Route exact path='/top' component={TopVisitsPage} />
                <Route exact path='/404' component={NotFoundPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </CatProfileProvider>
          </HomePageProvider>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
