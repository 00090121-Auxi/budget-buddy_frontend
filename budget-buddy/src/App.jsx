import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/dashboard/home.jsx";
import AppLayout from "./layout/AppLayout.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
      {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
        {/*<Route path="/" element={<Home />} />*/}
        {/* Puedes agregar más rutas aquí si agregas más páginas */}
        </Route>
      </Routes>
    </Router>
  );
}
