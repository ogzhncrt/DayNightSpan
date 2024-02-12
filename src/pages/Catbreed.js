import { useState, useEffect } from 'react';
import '../App.css';
import Axios from 'axios';
import { PaginationButton } from '../PaginationButton.js';
import { CatBreed } from '../CatBreed.js';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const API_ENDPOINT = "https://catfact.ninja/breeds?";

export const Catbreed = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageUrl, setCurrentPageUrl] = useState(API_ENDPOINT+"page=1");
  const [requestData, setRequestData] = useState([]);

  const newPageRequested = (event) => {
    console.log(event.target.innerHTML);
    setCurrentPage(event.target.innerHTML);
    setCurrentPageUrl(event.target.getAttribute('data-page'));
  }

  const fetchData = async () => {
    try {
      const response = await Axios.get(currentPageUrl);
      setRequestData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('COMPONENT MOUNTED');

    fetchData();

    return () => {
        console.log('COMPONENT UNMOUNTED');
    };
  }, [currentPageUrl]);

  return (
    <div className="App">
      {
        requestData.links?.map((value, index) => {
          return <PaginationButton key={index} pageUrl={value.url} pageLabel={value.label} newPageRequested={newPageRequested} />
        })
      }
      <h3>Current Page; {currentPage}</h3>
      
      <Container>
            <Row className="justify-content-md-center">
            {
                requestData.data?.map((value, index) => {
                return <CatBreed key={index} breedData={value} />
                })
            }
      
        </Row>
      </Container>
      
    </div>
  );
}

//export default App;
//