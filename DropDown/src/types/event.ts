import React from "react";

interface ChangeEventTarget extends HTMLInputElement {
    value: string;
}

export interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: ChangeEventTarget
}