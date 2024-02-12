//import { useState,useEffect } from 'react';
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios';


export const Catfacts = (props) => {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
         return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        }
      });
      
      if(isError) {
        return <h1>Error</h1>
      }

      //console.log(data);
      if(isLoading) {
        return <h1>Page Loading!!!..</h1>
      }

    return (
        <div>
            <h1 className="mt-4">Cat Fact Page</h1>
            <h4>{data.fact}</h4>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}