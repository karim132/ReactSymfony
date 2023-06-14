import React from 'react';
import { useState } from "react"




export default function Contact(){
    
    const [send, setSend] = useState()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    



    const handleSubmit= (e)=>{
      e.preventDefault()
    
    }

const handleClick = (e)=>{
  
  if (!email.includes('@')){
    alert("L'adresse mail ne respecte pas le format attendu")
   
    }else if (username.length===0){
      alert('Veuillez renseigner votre nom')

    }else if (firstname.length===0){
      alert('Veuillez renseigner votre prénom')

    } else if (isNaN(number)) {
      alert("Votre numéro comporte des carctères invalides.Veuillez rentrer uniquement des chiffres");

    }else if (number.length < 10){
      alert("Votre numéro est invalide.Veuillez vérifier le nombre de chiffres entrés.")

  }else if (message.length<=20){
    alert('Votre message est trop court')

  }else{
    setSend(e.target.value)
    alert('Votre message a été envoyé')
    setUsername('')
    setEmail('')
    setFirstname('')
    setNumber('')
    setMessage('')
  }
}


function handleUsername(evt) {
    setUsername(evt.target.value)
 
  }
  function handleEmail(evt) {
    
    setEmail(evt.target.value)
  
  }

  function handleFirstname(evt) {
    setFirstname(evt.target.value)
  }

  function handleNumber(evt) {
    setNumber(evt.target.value)
  }


  function handleMessage(evt) {
    setMessage(evt.target.value)
  }


    return (
        <main>
        <form onSubmit= {handleSubmit} value={send}>
          <label>Email</label><br/>
          <input type="text" placeholder="Votre email" value = {email} onChange={handleEmail} name = 'Votre email' id ='Votre email'/><br/>
          <label>Votre nom</label><br/>
          <input type="text"  placeholder="Votre nom"value ={username} onChange={handleUsername} /><br/>
          <label>Votre prénom</label><br/>
          <input type="text"  placeholder="Votre prénom" value = {firstname} onChange={handleFirstname} /><br/>
          <label>Veuillez laisser votre numéro</label><br/>
          <input type="text"  placeholder="Votre numéro" value = {number} onChange={handleNumber} /><br/>
          <label>Veuillez laisser votre message</label><br/>
          <textarea value = {message} placeholder="Merci de laisser plus de 20 caractères" onChange={handleMessage} /><br/>
          <input type="submit"  onClick={handleClick}  />
        </form>
        </main>
      )
}



// onClick={(e)=>e.target.value}