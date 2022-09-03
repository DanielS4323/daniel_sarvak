import { gql } from "@apollo/client";

export const GET_CATEGORIESDYNAMIC = gql`
  query GetCat($name: String!) {
    category(input: { title: $name }) {
      name
      products {
        name
      }
    }
  }
`;

export const GET_SPEC = gql`
  {
    category(input: { title: "" }) {
      products {
        id
        name
        brand
        gallery
        inStock
        attributes {
          type
          name
          items {
            value
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;
export const GET_ONE_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const LOAD_DATA = gql`
  query {
    category {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }

    currencies {
      label
      symbol
    }
  }
`;
