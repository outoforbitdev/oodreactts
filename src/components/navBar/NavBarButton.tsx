import * as React from "react";
import { getClassName, IComponentProps } from "../IComponentProps";
import "../../styles/NavBar.css";
import { Button } from "../core/Button";

interface INavBarButtonProps extends IComponentProps {
    text: string;
    onClick?: () => void;
}

export default function NavBarButton(props: INavBarButtonProps): JSX.Element {
    let classNames = getClassName("OODCoreComponentsNavBar", props.classNames);
    return (
        <Button classNames={classNames} onClick={props.onClick}>
            {props.children}
        </Button>
    );
}
