import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importation de la fonction useNavigate de React Router
import Navbar from '../../components/NavBar/Navbar'; // Importation du composant de la barre de navigation
import image from '../../assets/image/image1.png'; // Importation de l'image à afficher

const Home = () => {
  // Définition du composant Home

  const navigate = useNavigate(); // Déclaration de la fonction navigate

  const isLogged = localStorage.getItem('token');

  if (isLogged) {
    navigate('/myprofil'); // Redirige vers la page de profil si l'utilisateur est connecté
  }

  return (
    // Retourne les éléments JSX pour afficher la page d'accueil
    <>
      <Navbar /> {/* Affiche la barre de navigation */}
      <div id="Home" className=" w-screen flex flex-col justify-center flex-wrap bg-[#DBCAF4] h-screen">
        {/* Div principale pour organiser le contenu de la page */}
        <div
          id="Home-items"
          className="px-4 grid md:grid-cols-2 md:justify-items-start md:content-between md:justify-start md:mt-36">
          {/* Deuxième div pour organiser le contenu en deux colonnes sur les écrans moyens et plus grands */}
          <div id="Home--image-container" className="pb-4 md:pl-12">
            {/* Div pour afficher l'image */}
            <img
              id="Home--image"
              className="rounded-lg md:w-[90%] lg:w-[70%] lg:ml-10"
              src={image}
              alt=""
            />
            {/* L'image elle-même */}
          </div>
          <div id="Home--text-container" className="grid justify-items-center lg:mr-28">
            {/* Div pour afficher le texte */}
            <h1
              id="Home--title"
              className="pb-4 md:text-3xl font-bold text-center lg:text-4xl lg:mt-28">
              Trouvez le psychologue idéal avec nous
            </h1>
            {/* Titre de la page */}
            <h1 id="Home--description" className="md:text-2xl text-center leading-relaxed ">
            Grâce à notre puissant algorithme de redirection des clients ! Chez My Therapy, nous comprenons à quel point il est essentiel de trouver un psychologue qui vous convient parfaitement. Notre approche innovante utilise une combinaison unique de technologie de pointe et d'expertise en psychologie pour vous aider à identifier le professionnel le mieux adapté à vos besoins.
            </h1>
            {/* Description de la page */}
            <button id="Home-btn" className="btn mt-6 bg-[#580abd]">
              <a href="/quizz">Commencer</a>
            </button>
            {/* Bouton pour rediriger vers une autre page */}
          </div>
        </div>
      </div>
      {/* <SecondPage />  */}
      {/* <ThirdPage />  */}
      {/* <FaqPage/> */}
      {/* <Footer />  */}
    </>
  );
};

export default Home; // Exporte le composant
