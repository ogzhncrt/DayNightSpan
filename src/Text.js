import { useState,useEffect } from 'react';
import Axios from 'axios';

export const Text = (props) => {

    const [inputText, setInputText] = useState("");

    useEffect(() => {
        console.log('COMPONENT MOUNTED');
        
        const options = {
            method: 'GET',
            url: 'https://catfact.ninja/breeds?page=1'
          };
          
          try {
              const response = Axios.request(options);
              response.then((res) => {
                console.log(res.data);
              });
          } catch (error) {
              console.error(error);
          }


        return () => {
            console.log('COMPONENET UNMOUNTED');
        };
    },[]);

    const changeHandler = (event) => {
        setInputText(event.target.value);
    }

    return (
        <div>
            {/*<input type='text' onChange={changeHandler}/>*/}
            <h4>My Text JS imported</h4>
            { inputText != "" ? inputText : ''}
        </div>
    )
}