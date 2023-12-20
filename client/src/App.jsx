import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from './helpers/routesHelper'
import HomePage from "./components/HomePage/HomePage";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import FormActivityPage from "./components/FormActivityPage/FormActivityPage";
import CardCountryDetailPage from "./components/CardCountryDetailPage/CardCountryDetailPage";
import Error404 from "./components/Error404/Error404";
import "./App.css";


function App() {
  return (
    <>
      <div>
      <div>
        <Routes>
          <Route path={ROUTES.WELCOME_PAGE} element={<WelcomePage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ACTIVITIES_POST} element={<FormActivityPage />} />
          <Route path={ROUTES.COUNTRY_DETAIL} element={<CardCountryDetailPage />} />
          <Route path={ROUTES.ERROR404} element={<Error404 />} />
        </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
