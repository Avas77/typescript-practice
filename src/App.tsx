import React from "react";
import { Routes, Route } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./components/Layout/Layout";
import ContactData from "./components/ContactData/ContactData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <BurgerBuilder />
            </Layout>
          }
        />
        <Route path="/checkout" element={<ContactData />} />
      </Routes>
    </div>
  );
}

export default App;
