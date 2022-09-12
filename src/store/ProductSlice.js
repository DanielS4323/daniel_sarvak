import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@apollo/client";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
  },
  reducers: {
    getCategories(state, action) {
      const { data, loading, error } = useQuery(GET_CATEGORIESDYNAMIC, {
        variables: { name: id },
      });
      return 
    },
  },
});

// const booksSlice = createSlice({
//     name: "books",
//     initialState: {
//       books: [],
//       searchKeyword: "",
//       mySavedBooks: [],
//       myListOptions: [{value: 'moja lista', label: 'moja lista'}],
//     },
//     reducers: {
//       addSearchedBooks(state, action) {
//         state.books = action.payload.books;
//       },
//       addToMyList(state, action) {
//         const newBook = action.payload;
//         const existingBook = state.mySavedBooks.find(
//           (book) => book.key === newBook.key
//         );
//         if (!existingBook) {
//           state.mySavedBooks.push(newBook);
//         }
//       },
//      addANewList(state, action) {
//         const newList = action.payload
//         state.myListOptions.push(newList)
//         state.myListOptions =[...new Set(state.myListOptions)]
//      },
//       removeFromMyList(state, action) {
//         // const key = action.payload
//         // state.mySavedBooks = state.mySavedBooks.filter((book) => book.key !== key)
//         const list = action.payload
//         state.mySavedBooks = state.mySavedBooks.filter((book) => {
//           return book.list.forEach((el) => {
//             if(el.value === list) {
//             return book.list.splice(el,1)
//             }
//           })
//         })
//       },
//       searchQuery(state, action) {
//         state.searchKeyword = action.payload;
//       },
//     },
//   });
//   export const booksActions = booksSlice.actions;

//   export default booksSlice;
