import React from "react";
import "../Styles/XRow.css";
import { Button } from "./core/Button";

export function XRow() {
    return (
        <div className={"OODCoreXRow"}>
            <div className={"OODCoreXRowMargin"}></div>
            <div className={"OODCoreXRowButton"}>
                <Button>{"X"}</Button>
            </div>
        </div>
    );
}
