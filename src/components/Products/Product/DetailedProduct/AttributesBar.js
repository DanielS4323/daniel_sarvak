import React, { Fragment } from "react";
import SwatchBar from "./SwatchBar";
import TextBar from "./TextBar";

const AttributesBar = (props) => {
  const getAttributes = props.attributes?.map((attr) => {
    if (attr.type === "text") {
      return <TextBar key={attr.id} attr={attr} />;
    } else {
      return <SwatchBar key={attr.id} attr={attr} />;
    }
  });

  return <Fragment>{getAttributes}</Fragment>;
};

export default AttributesBar;
