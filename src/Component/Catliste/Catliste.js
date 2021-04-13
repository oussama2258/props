import React from 'react'
import Cat from './Cat/Cat'

const Catliste = () => {
  let  Cats= [{ 
      image :"https://images-na.ssl-images-amazon.com/images/I/61CzZ1b1NhL.jpg" , 
  nom :"baby" ,
   prix :"50dt",


},
{image :"https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg" , 
nom :"kitty" ,
 prix :"100dt",
},

];
const handelData =(nom,prix)=>{ alert (`this cat is ${nom} and has price ${prix}`)}
    return (
        <div>
            <h1>welcome cats</h1>
            {Cats.map((Ca,i)=>(
                < Cat key ={i}
                Cat = {Ca}/>)
            )

            }

            
        </div>
    )
}

export default Catliste
