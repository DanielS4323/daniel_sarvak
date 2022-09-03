import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../GraphQL/Queries";

const NavBar = (props) => {
  const { error, loading, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  

  return (
    <nav className={styles}>
      <ul>
        {data.categories.map((el) => (
          <li key={el.name}>
            <NavLink to={el.name}>{el.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
