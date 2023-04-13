import React, { ReactNode } from 'react';
import { isNullOrEmpty } from 'oodts'

export enum StyleThemes {
    Light = "OODCoreStyleThemeLight",
    Dark = "OODCoreStyleThemeDark",
}

export interface IComponentProps {
    classNames?: string;
    children?: ReactNode;
}

export function getClassName(
    standardClassNames?: string,
    additionalClassNames?: string): string {

    return combineClassNames(standardClassNames, additionalClassNames);
}

function combineClassNames(firstNames?: string, secondNames?: string): string {
    if (!isNullOrEmpty(firstNames)) {
        if (!isNullOrEmpty(secondNames)) {
            return firstNames + " " + secondNames;
        }
        return firstNames!;
    }
    else if (!isNullOrEmpty(secondNames)) {
        return secondNames!;
    }
    return "";
}