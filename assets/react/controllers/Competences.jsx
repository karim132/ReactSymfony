import React from 'react';
//  import competences from '../data/competences';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";




export default function Competences(){

    const competences = [
        {
          id: '1',
          module: 'HTML/CSS',
        },
    
        {
          id: '2',
          module: 'JavaScript'
        },
        {
          id: '3',
          module: 'React JS'   
        },
        {
            id: '4',
            module: 'MySQL'   
          },
          {
            id: '5',
            module: 'PHP'   
          },
          {
            id: '6',
            module: 'Symfony'   
          },
    
          {
          id: '7',
          module: 'Adobe XD'   
        },
    
        {
          id: '8',
          module: 'Visual StudioCode'   
        },
    
        {
          id: '9',
          module: 'SublimeText'   
        },
    
    
    
    
    
    
      ];
    return(
        <main>
            <h1>Les compétences acquises</h1>
            <ul id='liste'>
                {competences.map((langage)=>(
                  <li key= {langage.id}>{langage.module}</li>  
                ))}
            </ul>
            <hr/>
            <h1>Mes expériences</h1>
            <ul id='liste'>
                <li>Stage de 6 mois chez Total Energies</li>
                <li>Création de plusieurs sites front-end pour une start-up </li>
            </ul>
            <hr/>
            <h1>Les compétences hors informatique</h1>
            <ul id='liste'>
                <li>Technicien en électromécanique</li>
                <li>Mainteneur d'installations automatisées</li>
                <li>Entretien et remplacement de pièces défectueuses</li>
            </ul>
            <hr/>
            <h1>Les hobbies</h1>
            <ul id='liste'>
            <li>Running</li>
            <li>Voyages</li>
            <li>Cinéma</li>
            </ul>
        </main>
    )
}