import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { GET_CATEGORIES } from "../../GraphQL/Queries";
import { Query } from "@apollo/client/react/components";

export default class NavBar extends Component {
  // const { error, loading, data } = useQuery(GET_CATEGORIES);
  //   const [dataLoaded, setDataLoaded] = useState([]);

  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Query query={GET_CATEGORIES}>
        {({ loading, data }) => {
          if (loading) return "Loading...";

          return (
            <Fragment>
              {data.categories.map((el, index) => (
                <nav>
                  <ul>
                    <li key={index}>{el.name}</li>
                  </ul>
                </nav>
              ))}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}
