import React from "react";

const ProductInformation = (props) => {
  // const flat = props.attributes.map((el) => el.items).flat(1);
  // const sizeSelect = flat.map((el) => (
  //   <option key={el.id} value={el.value}>
  //     {el.displayValue}
  //   </option>
  // ));

  const sizeValue = props.attributes.map((el) => el.items);
  const sizeValue1 = props.attributes.map((el, i) => {
    const sizes = el.items;
    const name = el.name;
    return {
      name,
      sizes,
    };
  });

  let show = [];

  sizeValue1.forEach((el) => {
    show.push(<p>{el.name}: </p>);
    return el.sizes.forEach((size) => {
      if(el.length === 1) {
        show.push(
          
            <li>
              <input type="radio" name='opt' value={size.id} />
              <label htmlFor='opt'>{size.displayValue}</label>
            </li>
  
        );
      } else {
        show.push(
          
          <li>
            <input type="radio" name='opt' value={size.id} />
            <label htmlFor='opt'>{size.displayValue}</label>
          </li>

      );
      } 
    });
  });

  // const attributes = props.attributes.map((attribute) => {
  //  return sizeValue.forEach((el) => {
  //     return<p key={attribute.name}>{attribute.name}: {el.displayValue}</p>

  //   })
  // })

  //  for (let i = 0; i < props.attributes.length; i++) {
  //  for(let j = 0; j < props.sizeValue.length; j++) {
  //     // return `${props.attributes[i]}: ${props.sizeValue[j]} `
  //      console.log(props.attributes[i])
  //  }

  // }

  // for (let i = 0; i < sizeValue1.length; i++) {
  //   console.log(sizeValue1[i].name)
  //   attribute = <p>{sizeValue1[i].name}: <select></select></p>
  //   for (let j = 0; j < sizeValue.length; j++) {
  //   }
  // }

  // // console.log(sizeValue1.map((el) => el.sizes.map((el) => el.id)));
  // // const options = sizeValue1.map((el) =>
  // //   el.sizes.map((el) => (
  // //     <option key={el.id} value={el.value}>
  // //       {el.displayValue}
  // //     </option>
  //   ))
  // );

  // console.log(show);

  // console.log(sizeValue1)
  return (
    <div>
      <h3>{props.brand}</h3>
      <h4>{props.name}</h4>
      <div>
        <span>{show}</span>
      </div>
    </div>
  );
};

export default ProductInformation;
