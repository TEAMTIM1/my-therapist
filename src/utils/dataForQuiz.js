const quizArray = [
  {
    label: "Vous etes ?",
    type: "radio",
    name: "profile",
    onChange: "reset",
    answers: [
      {
        label: "Vous êtes un particulier ?",
        value: "personal"
      },
      {
        label: "Souhaitez-vous faire intervenir un praticien dans votre entreprise ?",
        value: "professional"
      }
    ],
  },
  {
    condition: {
      question: "profile",
      value: ["personal"]
    },
    label: "Le rendez-vous est-il pour ?",
    type: "radio",
    name: "target",
    answers: [
      {
        label: "Pour moi même",
        value: "me"
      },
      {
        label: "Pour un proche",
        value: "relation"
      },
      {
        label: "Pour mon enfant",
        value: "child"
      }
    ]
  },
  {
    condition: {
      question: "target",
      value: ["me", "relation"]
    },
    label: "Sur quoi vous souhaitez travailler",
    type: "radio",
    name: "subject",
    answers: [
      { 
        label: "Votre couple ?", 
        value: "couple"
      },
      { 
        label: "Un Accident ?",
        value: "accident"
      },
      { 
        label: "Une Agression ?",
        value: "agression"
      },
      { 
        label: "Un Deuil ?", 
        value: "death"
      },
      { 
        label: "Une Phobie ?", 
        value: "phobia"
      },
      { 
        label: "Une Anxiété ?", 
        value: "anxiety"
      },
      { 
        label: "Une Depression ?", 
        value: "depression"
      },
      { 
        label: "Une Solitude ?", 
        value: "loneliness"
      },
      { 
        label: "Une Confiance/Estime de soi ?", 
        value: "confidence"
      },
      { 
        label: "Une Addictions ?", 
        value: "addiction"
      },
      { 
        label: "Une Evalution, un Bilan psychologique ?", 
        value: "evaluation"
      },
      { 
        label: "Votre Vie profesionnel ?", 
        value: "professionnal"
      }
    ]
  },
  {
    condition: {
      question: "target",
      value: "any"
    },
    label: "Quelle est genre de praticien vous souhaitez ?",
    type: "radio",
    name: "gender",
    answers: [
      {
        label: "Souhaitez-vous prendre rendez-vous pour un praticien femme ?",
        value:  "Femme"
      },
      {
        label: "Souhaitez-vous prendre rendez-vous pour un praticien homme ?",
        value:  "Homme"
      }
    ]
  },
  // {
  //   label: "Vous avez autre chose à nous dire ?",
  //   type: "text",
  //   name: "example-text"
  // },
  // {
  //   label: "Email",
  //   type: "email",
  //   name: "email"
  // },
  // {
  //   label: "MDP",
  //   type: "password",
  //   name: "password"
  // },
  // {
  //   label: 'Vous avez autre chose à dire ?',
  //   type: 'textarea',
  //   name: 'message'
  // }
]





// const quizArray = [
  
//   ];
  
  
 export default quizArray;