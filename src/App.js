import { Route, Routes, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
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
