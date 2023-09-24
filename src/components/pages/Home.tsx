import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from '../sections/Header/Header';
import Banner from '../sections/Banner/Banner';
import Comingsoon from "../sections/Comingsoon/Comingsoon";
function Home() {
  const headerLinks = [
    {
      text: "HOME",
      to: "/home",
    },
    {
      text: "MOVIES",
      to: "/about",
    },
    {
      text: "FEATURED MOVIES",
      to: "/about",
    },
  ];
  const logoSource = "logo.png";
    // Define a state variable to store the API response data
    const [responseData, setResponseData] = useState<any>(null);
    const [randomIndex, setRandomIndex] = useState<number>(0);
  
  
    useEffect(() => {
      const apiKey = '7e020de62b2b1e62ba1d4716ea5862b0';
      const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
  
      axios.get(apiUrl)
        .then(response => {
          // Handle the response data here
          const data = response.data;
          console.log(data);
          // Set the response data in the state
          setResponseData(data);
        })
        .catch(error => {
          // Handle errors here
          console.error('Error fetching data:', error);
        });
    }, []); // The empty dependency array ensures this effect runs once when the component mounts
     // Use setInterval to change the random index every 5 seconds
     useEffect(() => {
      const interval = setInterval(() => {
        const newIndex = Math.floor(Math.random() * 5);
        setRandomIndex(newIndex);
      }, 5000); // 5000 milliseconds = 5 seconds
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
    
    const randomMovie = responseData?.results[randomIndex];
  
  return (
    <div>
      <Header links={headerLinks} logoSrc={logoSource} />
      <Banner movie={randomMovie}/>
      {responseData && responseData.results && responseData.results.length > 0 && (
        <Comingsoon title="Coming Soon" movies={responseData.results} />
      )}
    </div>
  );
}

export default Home;
