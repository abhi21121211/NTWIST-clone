import React from 'react';
import HomeAdd from '../Components/HomeAdd';
import CompOne from '../Components/CompOne';
import data from '../db.json';

function Home() {
  return (
    <div>
      <HomeAdd />
      {data.home.map((item) => (
        
        <CompOne
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
         
        />
      
      ))}
    </div>
  );
}

export default Home;
