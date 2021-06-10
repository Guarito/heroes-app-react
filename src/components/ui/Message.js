import React from "react";

export const Message = ({ clase, message }) => {
    const classes = `alert ${clase}`;
    return <div className={classes}>{message}</div>;
};
