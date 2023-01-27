import React from "react";


const DisplayAttributes = ({ chosenAttributes }) => {
  console.log(chosenAttributes);

  const getAttributes = chosenAttributes?.map((attribute) => {
    if (attribute.type === "text") {
      return (
        <div key={attribute.name}>
          {/* <p>
            {attribute.name}: {attribute.chosenAttribute.value}
          </p> */}
        </div>
      );
    } else {
      return (
        <div key={attribute.name}>
          {/* <p>
            {attribute.name}: {attribute.chosenAttribute.value}
          </p> */}
        </div>
      );
    }
  });

  return <div>{getAttributes}</div>;
};

export default DisplayAttributes;
