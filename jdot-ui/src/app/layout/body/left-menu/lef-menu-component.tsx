import React from "react";
import {LefMenuComponentProps} from "./lef-menu-component.props";
import {withTranslation} from "react-i18next";
import "./skin/common-left-menu-component.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons/faCircleUser";
import {faImage} from "@fortawesome/free-solid-svg-icons/faImage";
import {faAnglesRight, faCircleDollarToSlot, faGear} from "@fortawesome/free-solid-svg-icons";
import {TRANSLATION_NAMESPACE} from "../../../constants/common-contant";
import {faFolderOpen} from "@fortawesome/free-solid-svg-icons/faFolderOpen";
import {Link} from "react-router-dom";

const LefMenuComponent = (props: LefMenuComponentProps) => {
    const {t} = props;

    return(
        <>
            <div className="left__menu">
                <ul className="left__menu-item">
                    <Link to={"/header"}><li title="User Info"><FontAwesomeIcon icon={faCircleUser} /></li></Link>
                    <li title="Images"><FontAwesomeIcon icon={faImage} /></li>
                    <li title="Projects"><FontAwesomeIcon icon={faFolderOpen} /></li>
                    <li title="Donations"><FontAwesomeIcon icon={faCircleDollarToSlot} /></li>
                    <li title="Setting"><FontAwesomeIcon icon={faGear} /></li>
                </ul>
                {/*<div className="expand__menu" title={t("expandMenu") || ""}>*/}
                {/*    <FontAwesomeIcon icon={faAnglesRight} />*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default withTranslation(TRANSLATION_NAMESPACE.LEFT_MENU)(LefMenuComponent)