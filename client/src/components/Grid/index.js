import React from "react";

export function Container ({ fluid, children }) {
    return <div className={ `container${fluid ? "-fluid" : ""}`}>{children}</div>
}

export function Row ({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
}

export function Col ({size, childten }) {
    return (
        <div className={size
        .slipt(" ")
        .map( size=> "col-" +size )
        .join(" ")}
        >
            {childten}
        </div>
    );
}
