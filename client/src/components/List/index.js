import React from "react";
// import "./style.css";

export const List = ({children }) => (
    <ul className="list-group">
        {children}
    </ul>
);

export function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>
}