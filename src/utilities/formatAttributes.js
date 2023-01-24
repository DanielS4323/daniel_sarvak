const formatAttributes = (attributes) => {
  const formatedAtributes = attributes?.map((attribute) => {
    const formatAttribute = {
      ...attribute,
      chosenAttribute: attribute.items[0],
    };
    delete formatAttribute.items;
    return formatAttribute;
  });
  return formatedAtributes;
};

export default formatAttributes;
