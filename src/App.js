import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Panel/adminComp/adminLogin/Login";
import Language from "./Panel/adminComp/adminLogin/Language";
import Dashboard from "./Panel/adminComp/Dashboard/Dashboard";
import Restaurant from "./Panel/adminComp/Restaurants/Restaurant";
import ViewRestaurant from "./Panel/adminComp/Restaurants/ViewRestaurant";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/language-select" element={<Language />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard/restaurants-manage" element={<Restaurant />} />
          <Route path="/admin/dashboard/restaurants-view/:id" element={<ViewRestaurant />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
