import * as React from "react";
import { getClassName, IComponentProps } from "../IComponentProps";
import "../../styles/NavBar.css";
import "../../styles/Themes.css";

interface INavBarProps extends IComponentProps {}

export default function NavBar(props: INavBarProps): JSX.Element {
    let classNames = getClassName("OODCoreComponentsNavBar", props.classNames);
    return <div className={classNames}>{props.children}</div>;
}
