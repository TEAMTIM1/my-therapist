const quizArray = [
  {
    label: 'Qui êtes-vous ?',
    type: 'radio',
    name: 'profile',
    onChange: 'reset',
    answers: [
      {
        label: 'Je suis un·e particulièr·e ',
        value: 'personal'
      },
      {
        label: 'Je souhaite faire intervenir un·e praticien·ne dans mon entreprise.',
        value: 'professional'
      }
    ]
  },
  {
    condition: {
      question: 'profile',
      value: ['personal']
    },
    label: 'Pour qui est le rendez-vous ?',
    type: 'radio',
    name: 'target',
    answers: [
      {
        label: 'Pour moi même',
        value: 'me'
      },
      {
        label: 'Pour un proche',
        value: 'relation'
      },
      {
        label: 'Pour mon enfant',
        value: 'child'
      }
    ]
  },
  {
    condition: {
      question: 'target',
      value: ['me', 'relation']
    },
    label: 'Sur quoi souhaitez-vous travailler ?',
    type: 'radio',
    name: 'subject',
    answers: [
      {
        label: 'Mon couple',
        value: 'couple'
      },
      {
        label: 'Un accident',
        value: 'accident'
      },
      {
        label: 'Une agression',
        value: 'agression'
      },
      {
        label: 'Un Deuil',
        value: 'death'
      },
      {
        label: 'Une Phobie',
        value: 'phobia'
      },
      {
        label: "De l'anxiété",
        value: 'anxiety'
      },
      {
        label: 'Une dépression',
        value: 'depression'
      },
      {
        label: 'de la solitude',
        value: 'loneliness'
      },
      {
        label: 'Manque de confiance en soi/estime de soi',
        value: 'confidence'
      },
      {
        label: 'Une addiction',
        value: 'addiction'
      },
      {
        label: 'Une evalution/Un bilan psychologique',
        value: 'evaluation'
      },
      {
        label: 'Ma vie professionnelle',
        value: 'professionnal'
      }
    ]
  },
  {
    condition: {
      question: 'target',
      value: 'any'
    },
    label: 'Quel est le sexe du praticien que vous souhaitez ?',
    type: 'radio',
    name: 'gender',
    answers: [
      {
        label: 'Je souhaite que le praticien soit une femme',
        value: 'Femme'
      },
      {
        label: 'Je souhaite que le praticien soit un homme',
        value: 'Homme'
      }
    ]
  }
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
];

// const quizArray = [

//   ];

export default quizArray;
