import React from 'react';
import Routers from "./router/routers";
import LayoutComponent from "./layout/layout-component";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div id="jdot-app" className="app">

        <BrowserRouter>
            <LayoutComponent/>
        </BrowserRouter>
    </div>
  );
}

export default App;
