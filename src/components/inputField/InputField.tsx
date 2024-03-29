import * as React from "react";
import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import "../../styles/Input.css";
import "../../styles/Themes.css";
import { getClassName, IComponentProps } from "../IComponentProps";

type FieldValidator<T> = (val: T) => boolean;
type FieldChange<T> = (val: T) => void;

export interface IInputProps<T> extends IComponentProps {
    defaultValue?: T;
    onValueChange?: FieldChange<T>;
    onQuickValidate?: FieldValidator<T>;
    onFullValidate?: FieldValidator<T>;
    size?: number;
}

export function InputSpan(props: IComponentProps): JSX.Element {
    return <span className={getClassName("OODCoreComponentInputField", props.classNames)}>{props.children}</span>;
}

export function defaultValidator<T>(_val: T) {
    return true;
}

export function onBlur<T>(onQuickValidate: FieldValidator<T>, onFullValidate: FieldValidator<T>) {
    return (event: FocusEvent<HTMLInputElement>) => {
        const val = event.target.value as unknown as T;

        if (val) {
            if (!onQuickValidate(val) || !onFullValidate(val)) {
                event.currentTarget.focus();
            }
        }
    };
}

export function onValueChange<T>(
    onQuickValidate: FieldValidator<T>,
    onValueChange: FieldChange<T>,
    setValue: FieldChange<T>,
) {
    return (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value as unknown as T;

        if (val) {
            setValue(val);

            if (onQuickValidate(val)) {
                onValueChange(val);
            }
        }
    };
}

export function onKeyDown<T>(setValue: (val: T) => void, defaultValue: T) {
    return (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 28) {
            setValue(defaultValue);
        }
    };
}
