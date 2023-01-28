import { gql } from "@apollo/client";

export const GET_CURRENCY = gql`
  query Currencies {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_CATEGORIESDYNAMIC = gql`
  query GetCat($name: String!) {
    category(input: { title: $name }) {
      name
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

export const GET_PRODUCT_BY_ID = gql`
  query GetProduct($id: String!) {
    product(id: $id) {
      name
      id
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
export const GET_ALL_PRODUCTS = gql`
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
  }
`;
