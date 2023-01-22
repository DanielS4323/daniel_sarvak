import React, { Fragment } from "react";
import SwatchBar from "./SwatchBar";
import TextBar from "./TextBar";

const AttributesBar = ({
  attributes,
  setSelectedSwatchBar,
  setSelectedTextBar,
}) => {
  const getAttributes = attributes?.map((attr) => {
    if (attr.type === "text") {
      return (
        <TextBar
          key={attr.id}
          attr={attr}
          setSelectedTextBar={setSelectedTextBar}
        />
      );
    } else {
      return (
        <SwatchBar
          key={attr.id}
          attr={attr}
          setSelectedSwatchBar={setSelectedSwatchBar}
        />
      );
    }
  });

  return <Fragment>{getAttributes}</Fragment>;
};

export default AttributesBar;
