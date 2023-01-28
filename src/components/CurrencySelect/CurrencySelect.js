import { useQuery } from "@apollo/client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CURRENCY } from "../../GraphQL/Queries";
import { cartActions } from "../../store/CartSlice";

const CurrencySelect = () => {
  const { data, loading, error } = useQuery(GET_CURRENCY);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.cart.currency)
  const currencyOptions = data?.currencies?.map((element) => (
    <option key={element.symbol} value={element.label}>
      {element.symbol}
    </option>
  ));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Loading</p>;

  const selectCurrencyHandler = (e) => {
    // console.log(e.target.value);
    dispatch(cartActions.selectCurrency(e.target.value));
  };

  return <select value={selectedCurrency} onChange={selectCurrencyHandler}>{currencyOptions}</select>;
};

export default CurrencySelect;
