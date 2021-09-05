import { Route, Switch } from "react-router";
import AllMeetUp from "./pages/AllMeetUp";
import NewMeetUp from "./pages/NewMeetUp";
import Favorites from "./pages/Favorites";
import Layout from "./commponents/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUp />
        </Route>
        <Route path="/newmeetup">
          <NewMeetUp />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
