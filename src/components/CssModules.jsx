import React from "react";
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.titleStyle}>- CssModules -</p>
      <button className={classes.buttonStyle}>FIGHT</button>
    </div>
  );
};
