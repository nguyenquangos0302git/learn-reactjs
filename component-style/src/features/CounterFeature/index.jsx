import React from "react";
import style from "./style.module.css";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const Title = styled.h1`
  text-align: center;
  font-weight: bold;

  color: ${(props) => props.color || "green"};
`;

function CounterFeature() {
  const classes = useStyles();
  return (
    <div class={style.counter}>
      <Title>Heading</Title>
      Counter
      <Button className={classes.root}>Increase</Button>
    </div>
  );
}

export default CounterFeature;
