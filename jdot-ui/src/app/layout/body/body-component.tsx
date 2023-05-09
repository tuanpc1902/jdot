import React from "react";
import {BodyComponentProps} from "./body-component.props";
import {withTranslation} from "react-i18next";
import "./skin/common-body-component.scss";
import Routers from "../../router/routers";
import LefMenuComponent from "./left-menu/lef-menu-component";
import {BrowserRouter} from "react-router-dom";

const BodyComponent = (props: BodyComponentProps) => {
  return(
      <body id="body">
        <LefMenuComponent/>
        <Routers />
      </body>
  )
}

export default withTranslation()(BodyComponent);