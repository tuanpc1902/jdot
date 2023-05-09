import React from "react";
import {HeaderComponentProps} from "./header-component.props";
import {withTranslation} from "react-i18next";
import './skin/common-header-component.scss'
import {Link} from "react-router-dom";

const HeaderComponent = (props: HeaderComponentProps) => {

    const LeftHeader = (): JSX.Element => {
        return (
            <div className="header__left-header">
                <div className="header__left-header-logo">
                    <a href="#">
                        <img src="/assets/images/logo.png" alt="" />
                    </a>
                </div>
            </div>
        )
    }

    const RightHeader = (): JSX.Element => {
        return (
            <div className="header__right-header">
                <div className="header__right-header--language">
                    <input type="checkbox" id="toggle_checkbox"/>
                        <label htmlFor="toggle_checkbox">
                            <div id="star">
                                <div className="star" id="star-1">★</div>
                                <div className="star" id="star-2">★</div>
                            </div>
                            <div id="moon"></div>
                        </label>
                </div>

                <div className="header__right-header-user-avatar">
                    <a href="#">
                        <img src="/assets/images/user.png" alt="" />
                    </a>
                </div>
            </div>
        )
    }

    return(
        <header className="header">
            <LeftHeader/>
            <RightHeader/>
        </header>
    )
}

export default withTranslation()(HeaderComponent);