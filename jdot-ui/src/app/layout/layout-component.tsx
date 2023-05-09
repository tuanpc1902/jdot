import React from "react";
import {withTranslation} from "react-i18next";
import {LayoutComponentProps} from "./layout-component.props";
import HeaderComponent from "./header/header-component";
import BodyComponent from "./body/body-component";
import {Route} from "react-router";
import Routers from "../router/routers";


const LayoutComponent = (props: LayoutComponentProps) => {
    return(
        <div id="layout-component">
            <HeaderComponent/>
            <BodyComponent />
        </div>
    )
}

export default withTranslation()(LayoutComponent);
