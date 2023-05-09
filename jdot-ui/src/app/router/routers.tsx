import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import HeaderComponent from "../layout/header/header-component";
import {Routes, Route} from "react-router";
import LefMenuComponent from "../layout/body/left-menu/lef-menu-component";
import ContainerComponent from "../layout/body/container/container-component";

const Routers = () => {

    const renderRoute = () => {
        return(
            <>
                {/*<Routes>*/}
                {/*    <ContainerComponent>*/}
                        {/*<React.Suspense fallback={null}>*/}
                            {/*<Routes>*/}
                                <Route path="/" element={<LefMenuComponent />} />
                                <Route path={"/header"} element={<HeaderComponent/>}/>
                            {/*</Routes>*/}
                        {/*</React.Suspense>*/}
                    {/*</ContainerComponent>*/}

                {/*</Routes>*/}
            </>
        )
    }

    const renderLayout = () => {
        return(
            <>
                {/*<LefMenuComponent/>*/}
                <ContainerComponent>
                    <Routes>
                        {/*<Route path={"/"} element={ renderRoute()} />*/}
                        {renderRoute()}
                    </Routes>
                </ContainerComponent>
            </>
        )
    }

    return(
        <div>
            {renderLayout()}
        </div>
    )
}

export default Routers;