import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" exact Component={AllMeetupsPage} />
          <Route path="/new-meetup" Component={NewMeetupPage} />
          <Route path="/favorites" Component={FavoritesPage} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
