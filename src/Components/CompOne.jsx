import React from 'react';
import "../Style/CompOne.css";

function CompOne(props) {
    return (
        <div className='homeCon-1'>
            <div key={props.id}>
                <div className='compOne'>
                    {console.log(props.id)}
                    {props.id % 2 === 0 ? (
                        // First card layout: image on the right, info on the left
                        <>
                            <div style={{ width: "43%" }}>
                                <img src={props.img} alt={props.title} />
                            </div>
                            <div style={{ paddingLeft: "40px", width: "48%" }}>
                                <h2 style={{ color: "#ff3a2d", fontSize: "40px", marginBottom:"-4px" }}>{props.title}</h2>
                                <p style={{ fontWeight: "500" ,padding:"10px 0px"}}>{props.description}</p>
                                <button style={{
                                    background: "#ff3a2d",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    padding: "8px",
                                    fontWeight: "600",
                                    fontSize: "large",
                                    width: "120px",
                                    cursor: "pointer"
                                }}>Read More</button>
                            </div>
                        </>
                    ) : (
                        // Second card layout: image on the left, info on the right
                        <>
                            <div style={{ paddingRight: "40px", width: "48%" }}>
                                <h2 style={{ color: "#ff3a2d", fontSize: "40px", marginBottom:"-4px" }}>{props.title}</h2>
                                <p style={{ fontWeight: "500" ,padding:"10px 0px"}}>{props.description}</p>
                                <button style={{
                                    background: "#ff3a2d",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    padding: "8px",
                                    fontWeight: "600",
                                    fontSize: "large",
                                    width: "120px",
                                    cursor: "pointer"
                                }}>Read More</button>
                            </div>
                            <div style={{ width: "43%" }}>
                                <img src={props.img} alt={props.title} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CompOne;
