import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
