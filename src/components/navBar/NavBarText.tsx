import * as React from "react";
import { getClassName, IComponentProps } from "../IComponentProps";
import "../../styles/NavBar.css";

interface INavBarTextProps extends IComponentProps {
    text: string;
}

export default function NavBarText(props: INavBarTextProps): JSX.Element {
    let classNames = getClassName("OODCoreComponentsNavBar", props.classNames);
    return <p className={classNames}>{props.text}</p>;
}
