import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuComponent from "./components/Menu";
import AllCatsComponent from "./components/AllCats";
import FavoriteCatsComponent from "./components/FavoriteCats";

function App() {
  return (
    <>
      <Router>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<AllCatsComponent />} />
          <Route path="/favorite" element={<FavoriteCatsComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
