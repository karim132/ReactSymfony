// import { useState } from "react";
// import projets from "../data/projets"


export default function Portfolio(){

     const[filterChallenges, setfilterChallenges]= useState('')

     const handleFilter = (e) => {
      setfilterChallenges(e.target.value)
       console.log(filterChallenges)
     }
      
    return(
          
        <main>
        <h1>Les projets effectués en formation</h1>
        <input type="text"  placeholder="Entrez votre challenge"  onChange ={handleFilter} className='inputfilter'/><br/>
        <ul id='liste'>
        {projets
        .filter(projet=>projet.technology.toLowerCase().includes(filterChallenges))
        .map((projet)=>(
          <li key= {projet.id}>
            <h1 className='nomprojet'>{projet.name}</h1>
          <h2>{projet.technology}</h2>
          <p>{projet.description}</p>
          <p>{projet.lien}</p>
          <img src={projet.img} alt=''/>
          </li> 
        ))}
    </ul>
   </main>
    )
 }
