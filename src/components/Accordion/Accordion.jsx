import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(2);

  return (
      <div className='flex flex-col justify-center items-center'>
          <AccordionLayout 
            title="Combien coûtent les services proposés par les psychologues sur my therapist ? "
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
             <p className='text-center w-3/6 m-auto'>Sur My Therapist, les services proposés par les psychologues sont évalués en fonction de la complexité et de la profondeur des sessions thérapeutiques. Le système utilise un algorithme avancé qui tient compte de divers facteurs tels que la durée de la séance, le niveau d'expertise du psychologue, les outils technologiques utilisés et la spécificité des problèmes traités.</p>  
          </AccordionLayout>

          <AccordionLayout 
            title="Je peux être suivi par combien de psychologues à la fois ?"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <p className='text-center w-3/6 m-auto'>Un suivi individuel avec un psychologue permet d'établir une relation thérapeutique solide, de comprendre en profondeur les problèmes de la personne, et de travailler de manière ciblée sur ses besoins spécifiques. Le psychologue s'engage à garder la confidentialité des informations partagées et à offrir un espace sécurisé pour explorer les émotions et les pensées de son client.

Cependant, il peut y avoir certaines situations exceptionnelles où une personne pourrait être prise en charge par plus d'un psychologue simultanément. Par exemple :

    1/ Cothérapie : Dans certaines thérapies de groupe, deux psychologues peuvent travailler ensemble pour diriger la séance. Cela permet un apport diversifié d'expertise et une gestion optimale des interactions au sein du groupe.

    2/ Collaboration multidisciplinaire : Dans le cadre de troubles mentaux complexes ou de problèmes de santé mentale graves, il peut être nécessaire que plusieurs professionnels de la santé mentale (psychiatres, psychologues, thérapeutes, etc.) collaborent pour fournir des soins complets et adaptés.

    Transition entre psychologues : Dans certains cas, une personne peut passer d'un psychologue à un autre pour des raisons telles que la relocalisation géographique, le changement de spécialisation, ou encore une meilleure adéquation avec un autre professionnel.

Cependant, ces situations restent des cas spécifiques et ne représentent pas la norme. En règle générale, il est conseillé de travailler avec un seul psychologue à la fois pour garantir une approche cohérente et personnalisée de la thérapie. </p>   
          </AccordionLayout>
      </div>
  );
};

export default Accordion;