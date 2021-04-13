import React from 'react'
import './Cat.css'
const Cat = (props) => {
    return (
        <div className="page" >
         <img src={props.Cat.image} />
         <h2>{props.Cat.nom} </h2>
         <h2>{props.Cat.prix}</h2>
         <button onClick={()=>props.handelData(props.Cat.nom,props.Cat.prix)}>detail</button>
        </div>
    );
}
Cat.defaultProps={
    Cat:{
nom : "inconue",
img :"nthg",
prix : "0",
    

    }
}
export default Cat
