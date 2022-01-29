import React from "react";
import { useSelector } from "react-redux";

function test() {
  const test = useSelector((state) => state.test);
  console.log(test);
}

export default test;
