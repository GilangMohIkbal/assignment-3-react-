import React, { createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const NavigateContext = createContext();

export const useNavigateContext = () => {
  const context = useContext(NavigateContext);
  if (!context) {
    throw new Error(
      "useNavigateContext must be used within a NavigateProvider"
    );
  }
  return context;
};

const App = () => {
  const navigate = useNavigate();

  return (
    <NavigateContext.Provider value={navigate}>
      <Router>
        <Routes>
          <Route path="/" element={<Experience />} />
          {/* Rute lainnya */}
        </Routes>
      </Router>
    </NavigateContext.Provider>
  );
};

export default App;
