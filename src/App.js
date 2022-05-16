import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { boostrapReducers } from "./bootstraps/boostrapReducers";
import "./assets/tailwind.css";

import {
  AboutComponent,
  ContactComponent,
  FooterComponent,
  FormComponent,
  HeroComponent,
  NavbarComponent,
  ReasonComponent,
  ServiceComponent,
} from "./components";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const store = createStore(boostrapReducers);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />
        <HeroComponent />
        <ReasonComponent />
        <AboutComponent />
        <ServiceComponent />
        <FormComponent />
        <ContactComponent />
        <FooterComponent />
      </BrowserRouter>
    </Provider>
  );
}
