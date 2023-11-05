import React from 'react'
import BlogAdd from '../Components/BlogAdd'
import CompOne from '../Components/CompOne'
import data from '../db.json';
function Blog() {
  return (
    <div>
      <BlogAdd/>
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
  )
}

export default Blog
