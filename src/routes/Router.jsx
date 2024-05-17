/*
import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import MyCardsPage from "../cards/components/card/MyCardsPage";
import FavoriteCardsPage from "../cards/components/card/FavoriteCardsPage";

import ErrorPage from "../pages/ErrorPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandBox from "../sandbox/SandBox";
import Counter from "../sandbox/Counter";


import Counter1 from "../sandbox/Counter1";
import ChangeSize from "../sandbox/ChangeSize";
import ShapeTransformer from "../sandbox/ShapeTransformer";
import LifeCycle from "../sandbox/LifeCycle";
import Countries from "../sandbox/Countries";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Window from "../sandbox/Window";
import FormExample from "../sandbox/FormExample";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import ParentComponent from "../sandbox/optimization/ParentComponent";
import ParentComponentPage from "../sandbox/context/ParentComponentPage";
import AddCardPage from "../cards/pages/AddCardPage";
import EditCardPage from "../cards/pages/EditCardPage";




export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavoriteCardsPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />

      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="counter1" element={<Counter1 />} />
        <Route path="changesize" element={<ChangeSize />} />
        <Route path="shapetransformer" element={<ShapeTransformer />} />
        <Route path="lifecycle" element={<LifeCycle />} />
        <Route path="spinner" element={<Spinner />} />
        <Route path="countries" element={<Countries />} />
        <Route path="error" element={<Error />} />
        <Route path="window" element={<Window />} />
        <Route path="formexample" element={<FormExample />} />
        <Route path="optimization" element={<ParentComponent />} />
        <Route path="context" element={<ParentComponentPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />means
    </Routes>
  );
}
*/
import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandBox from "../sandbox/SandBox";
import Counter from "../sandbox/Counter";
import LifeCycle from "../sandbox/LifeCycle";
import Countries from "../sandbox/Countries";
import Counter1 from "../sandbox/Counter1";
import FormExample from "../sandbox/FormExample";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import ParentComponent from "../sandbox/optimization/ParentComponent";
import ParentComponentPage from "../sandbox/context/ParentComponentPage";
import AddCardPage from "../cards/pages/AddCardPage";
import EditCardPage from "../cards/pages/EditCardPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />

      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="counter1" element={<Counter1 />} />

        <Route path="lifecycle" element={<LifeCycle />} />
        <Route path="countries" element={<Countries />} />
        <Route path="form" element={<FormExample />} />
        <Route path="optimization" element={<ParentComponent />} />
        <Route path="context" element={<ParentComponentPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

