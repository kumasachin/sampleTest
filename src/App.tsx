import { Route, Switch} from "react-router";
import HomePage from './components/pages/homePage/homePage';
import ErrorPage from './components/pages/errorPage/errorPage';
import NotFound from './components/pages/notFound/notFound';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

export const App = () => {
  const history = useHistory();
  const journeyState:any = useSelector((state: any) => state.journeyState);
  if(!journeyState.errorMessage) {
    history.push({
      pathname: '/',
    });
  }
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/error" component={ErrorPage} />
      <Route component={NotFound}/>
    </Switch>
  );
}

export default App;
 