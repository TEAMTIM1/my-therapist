// Importation des dépendances nécessaires
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdSmartphone } from 'react-icons/md';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { BsPersonVideo } from 'react-icons/bs';
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, name, id, firstname, presentation, chat, visio, phone }) => {
  // Initialisation des états pour les avis et les spécialités
  const [getReviews, setGetReviews] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [totalBadScore, setTotalBadScore] = useState(0);
  const [totalGoodScore, setTotalGoodScore] = useState(0);

  const idTherapist = id;
  // Fonction de redirection vers la page de rdv + récuperation du id praticien
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem(`idTherapist`, idTherapist);
    console.log(idTherapist);
    navigate('/booking');
  };

  // Récupération des avis lors du montage du composant
  useEffect(() => {
    axios
      .get(`https://my-therapist-api.up.railway.app/therapists/${idTherapist}/reviews`)
      .then((response) => {
        setGetReviews(response.data);

        //Récupération des scores dans les useStates dédiés à cela
        const badScoreTotal = response.data.reduce((total, review) => total + review.badscore, 0);
        setTotalBadScore(badScoreTotal);
        const goodScoreTotal = response.data.reduce((total, review) => total + review.goodscore, 0);
        setTotalGoodScore(goodScoreTotal);
      })

      .catch((error) => {
        console.error('Erreur lors de la récupération des avis:', error);
      });
  }, [idTherapist]);

  // Récupération des spécialités lors du montage du composant
  useEffect(() => {
    axios
      .get(`https://my-therapist-api.up.railway.app/therapists/${id}/specialties`)
      .then((response) => {
        setSpecialties(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des spécialités:', error);
      });
  }, [id]);

  // Gestion de la classe CSS pour afficher ou masquer la modale
  const elementClassName = isOpen ? 'block' : 'hidden';

  // Retour du JSX pour afficher la modale
  return (
    <div id="modal" className={`fixed top-0 right-0 w-full h-screen z-20 flex ${elementClassName}`}>
      <div id="modal-background" className="bg-white/80 w-full h-full"></div>
      <div
        id="modal-content"
        className="bg-white p-8 rounded shadow-lg lg:w-1/2 xl:w-1/3 flex flex-col justify-start items-center gap-4 h-full">
        <h1
          id="modal-title"
          className="text-purple-600 text-2xl font-bold lg:mb-4 text-center mt-5">
          {name} {firstname}
        </h1>

        <div className="w-full">
          <h2 className="lg:text-xl  text-xs font-semibold -mt-2">Médias</h2>
          <div className="grid grid-cols-2 gap-4">
            {chat && <BiMessageRoundedDetail size={30} className="text-gray-700" />}
            {phone && <MdSmartphone size={30} className="text-gray-700" />}
            {visio && <BsPersonVideo size={30} className="text-gray-700" />}
          </div>
        </div>

        <div className="w-full">
          <h2 className="lg:text-xl text-xs font-semibold">Domaines de compétences</h2>
          {specialties.map((specialty) => (
            <div key={specialty.id} className="bg-[#DBCAF4]/50 p-0 mt-2 rounded text-center">
              {specialty.label}
            </div>
          ))}
        </div>

        <div className="w-full">
          <h2 className="lg:text-xl text-xs font-semibold">A propos</h2>
          <p className="text-gray-800 mt-1 overflow-y-auto max-h-10">{presentation}</p>
        </div>

        <div className="w-full">
          <h2 className="lg:text-xl font-semibold text-xs">Avis</h2>
          <div className="bg-[#DBCAF4]/50 items-center lg:p-4 p-0 mt-1 rounded w-full flex gap-3">
            {totalGoodScore} <FiThumbsUp size={20} /> {totalBadScore} <FiThumbsDown size={20} />
          </div>
        </div>

        <h2 className="lg:text-xl text-xs font-semibold">Commentaires</h2>
        <div className="w-full overflow-y-scroll">
          {getReviews.map((review) => (
            <div key={review.id} className="bg-[#DBCAF4]/50 p-0 mt-0 rounded">
              <h3 className="font-semibold">
                {review.id} {review.patient_firstname}
              </h3>
              <p className="text-gray-700">{review.patient_messages}</p>
            </div>
          ))}
        </div>

        <button
          className="bg-[#B983FF] text-white px-4 py-2 rounded hover:bg-[#580abd] transition duration-150 ease-in-out"
          onClick={handleClick}>
          Prendre rendez-vous
        </button>

        <button
          className="bg-[#B983FF] text-white px-4 lg:py-2 py-1 rounded absolute top-4 right-4 hover:bg-[#580abd] transition duration-150 ease-in-out"
          onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
