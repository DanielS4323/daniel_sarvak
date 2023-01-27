const formatAttributes = (attributes, args=false) => {
  const formatedAtributes = attributes?.map((attribute) => {
    const formatAttribute = {
      ...attribute,
      chosenAttribute: args ? args : attribute.items[0],
    };
    delete formatAttribute.items;
    return formatAttribute;
  });
  return formatedAtributes;
};

export default formatAttributes;
