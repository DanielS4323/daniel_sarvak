import React, { useEffect, useState } from "react";
import { useQuery, gql,} from "@apollo/client";
import { GET_CATEGORIES, LOAD_DATA } from "../GraphQL/Queries";

const GetGraph = () => {
  const { error, loading, data } = useQuery(GET_CATEGORIES);
  const [dataLoaded, setDataLoaded] = useState([]);

//   useEffect(() => {
//     if(data) {
//         setDataLoaded(data.category.products);
        
//     }
//   }, [data]);

//   console.log(dataLoaded);

useEffect(() => {
if(data) {
    setDataLoaded(data)
}
},[data])
console.log(dataLoaded)
  return <div>GetGraph</div>;
};

export default GetGraph;
