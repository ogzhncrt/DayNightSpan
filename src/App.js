//import { useState, useEffect } from 'react';
import './App.css';
//import Axios from 'axios';
//import { PaginationButton } from './PaginationButton.js';
import { Catbreed } from './pages/Catbreed';
import { Catfacts } from './pages/Catfacts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const client = new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus: false
    }
  }}); //will be configuration here.
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Catbreed />} />
            <Route path="/catfacts" element={<Catfacts />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App;
