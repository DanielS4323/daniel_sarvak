import React from "react";
import styles from "./AttributesBar.module.css";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";


const TextBar = ({ attr, setSelectedTextBar }) => {
  const onClickHandle = (e) => {
    
    setSelectedTextBar({val: e.target.value});
  };


  return (
    <div key={attr.name}>
      <h4>{attr.name}: </h4>
      <div className={styles.colorsDiv}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={onClickHandle}
        >
          {attr.items.map((el) => (
            <FormControlLabel
              key={el.id}
              value={el.value}
              control={<Radio />}
              label={el.value}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default TextBar;
