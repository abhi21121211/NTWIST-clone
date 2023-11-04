import React from 'react';
import data from '../db.json';
import "../Style/CompOne.css";

function CompOne() {
    return (
        <div className='homeCon-1'>
            {data.home.map((item) => (
                <div key={item.id} >
                    {item.id % 2 === 0 ? (
                         <div className='compOne'>
                         <div style={{ width: "43%" }}>
                             <img src={item.img} alt={item.title} />
                         </div>
                         <div style={{ paddingLeft: "40px", width: "48%" }}>
                         <h2 style={{ color: "#ff3a2d", fontSize: "40px", marginBottom:"-4px" }}>{item.title}</h2>
                             <p style={{ fontWeight: "500" ,padding:"10px 0px"}} >{item.description}</p>
                             <button style={{
                                 background: "#ff3a2d",
                                 color: "white",
                                 border: "none",
                                 borderRadius: "5px",
                                 padding: "8px",
                                 fontWeight: "600",
                                 fontSize: "large",
                                 width: "120px"
                             }}>Read More</button>
                         </div>
                     </div>
                       
                    ) : (
                        <div className='compOne'>
                        <div style={{ paddingRight: "40px", width: "48%" }}>
                            <h2 style={{ color: "#ff3a2d", fontSize: "40px",marginBottom:"-4px"  }}>{item.title}</h2>
                            <p style={{ fontWeight: "500" ,padding:"10px 0px"}} >{item.description}</p>
                            <button style={{
                                background: "#ff3a2d",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                padding: "8px",
                                fontWeight: "600",
                                fontSize: "large",
                                width: "120px"
                            }}>Read More</button>
                        </div>
                        <div style={{ width: "43%" }}>
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>


                       
                    )}
                </div>
            ))}
        </div>
    );
}

export default CompOne;
