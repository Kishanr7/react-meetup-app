import { Route, Routes, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";


function App() {
  return (
    <div>
      <MainNavigation />
      <switch>
        <Routes>
          <Route path="/" exact Component={AllMeetupsPage} />
          <Route path="/new-meetup" Component={NewMeetupPage} />
          <Route path="/favorites" Component={FavoritesPage} />
        </Routes>
      </switch>
      
    </div>
  );
}

export default App;
