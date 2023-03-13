import React, { ReactNode } from 'react';
import IsNullOrEmpty from '../utils/string/IsNullOrEmpty'

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
    if (!IsNullOrEmpty(firstNames)) {
        if (!IsNullOrEmpty(secondNames)) {
            return firstNames + " " + secondNames;
        }
        return firstNames!;
    }
    else if (!IsNullOrEmpty(secondNames)) {
        return secondNames!;
    }
    return "";
}