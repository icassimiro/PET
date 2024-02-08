import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Caes from "./Routesmenu/Caes";

import App from "../App";

import Gatos from "./Routesmenu/Gatos";
import Initial from "../Initial";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />

        <Route path="/Home" element={<App />} />
        <Route path="/Caes" element={<Caes />} />
        <Route path="/Gatos" element={<Gatos />} />
      </Routes>
    </Router>
  );
};
export default Routering;
