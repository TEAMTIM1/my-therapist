import React from 'react'; 
import { useNavigate } from 'react-router-dom'; // Importation de la fonction useNavigate de React Router
import Navbar from "../../components/NavBar/Navbar"; // Importation du composant de la barre de navigation
import image from "../../assets/image/image1.png"; // Importation de l'image à afficher
import SecondPage from "./SecondPage"; // Importation du composant de la deuxième page
import { ThirdPage } from "./ThirdPage"; // Importation du composant de la troisième page
import Footer from "../../components/Footer/Footer"; // Importation du composant du pied de page


const Home = () => { // Définition du composant Home

  const navigate = useNavigate(); // Déclaration de la fonction navigate

  const isLogged = localStorage.getItem('token')

  React.useEffect(() => {
    if (isLogged) {
      navigate('/myprofil'); // Redirige vers la page de profil si l'utilisateur est connecté
    }
  }, [isLogged, navigate]);

  return ( // Retourne les éléments JSX pour afficher la page d'accueil
    <>
      <Navbar /> {/* Affiche la barre de navigation */}
      
      <div id="Home"  className='h-screen  flex flex-col justify-center flex-wrap bg-[#DBCAF4]'>
        {/* Div principale pour organiser le contenu de la page */}
        <div id="Home-items" className="px-4 grid md:grid-cols-2 md:justify-items-start md:content-between md:justify-start mt-36">
          {/* Deuxième div pour organiser le contenu en deux colonnes sur les écrans moyens et plus grands */}
          <div id="Home--image-container" className="pb-4 md:pl-12">
            {/* Div pour afficher l'image */}
            <img id="Home--image" className="rounded-lg md:w-[90%]" src={image }  alt="" />
            {/* L'image elle-même */}
          </div>
          <div id="Home--text-container" className="grid justify-items-center">
            {/* Div pour afficher le texte */}
            <h1 id="Home--title" className="pb-4 text-3xl font-bold text-center">Trouvez le psychologue idéal avec nous</h1>
            {/* Titre de la page */}
            <h1 id="Home--description" className="md:text-2xl text-center leading-relaxed">Trouvez facilement un psychologue adapté à vos besoins grâce à notre quiz. Consultez un professionnel qualifié en ligne pour seulement 39 euros. Une solution pratique, rapide et abordable pour obtenir une aide psychologique personnalisée</h1>
            {/* Description de la page */}
            <button id="Home-btn" className="btn mt-6 bg-[#580abd]"><a href='/quizz'>Commencer</a></button>
            {/* Bouton pour rediriger vers une autre page */}
          </div>
        </div>
      </div>
      <SecondPage /> {/* Affiche le composant de la deuxième page */}
      <ThirdPage /> {/* Affiche le composant de la troisième page */}
      <Footer /> {/* Affiche le pied de page */}
    </>
  );
}

export default Home; // Exporte le composant
