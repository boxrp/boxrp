interface ActionButton {
    id: string;
    type?: "flat" | "icon" | "outlined" | "text";
    label?: string;
    icon?: string;
    flip?: boolean;
    disabled?: boolean;
    primary?: boolean;
    tooltip?: string;
}

export { type ActionButton };
