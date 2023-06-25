import { useState, useEffect } from 'react';
import axios from 'axios';

//import Post from './Post';
import Footer from '../Footer/Footer';
import Modal from './Modal';
import DashboardPatient from '../../components/DashboardPatient/DashboardPatient';

const ListPraticiens = () => {
  //Initialisation des états pour stocker la liste des praticiens
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  //On récupère depuis le localStorage l'id du patient & le token de connexion
  const idPatient = localStorage.getItem('idPatient');
  const token = localStorage.getItem('token');
  console.log(idPatient);

  //Fonction qui ferme la modale au click
  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  //Fonction qui au click, filtre et stocke de la data depuis "posts" vers "data" et l'envoie en props à <Modal/>
  const getDataOnClick = (
    lastname,
    firstname,
    id,
    profilpresentation,
    chatsession,
    videosession,
    audiosession
  ) => {
    let getData = [
      lastname,
      firstname,
      id,
      profilpresentation,
      chatsession,
      videosession,
      audiosession
    ];
    setData(getData);
    setIsModalOpen(!isModalOpen);
  };

  // Récupération lors du montage du composant, de la "liste" de praticiens filtrée par l'algo
  useEffect(() => {
    axios
      .get(`https://my-therapist-api.up.railway.app/algorithm/me/get-therapists`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setPosts(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [token]);

  return (
    <>
      <div id="homeconnected" className={`flex flex-row w-full`}>
        <DashboardPatient />

        {/* Div pour afficher la liste des praticiens */}
        <div
          id="list"
          className="flex flex-col justify-center items-center w-full p-4 min-h-screen bg-purple-100
                      md:px-10">
          {/* Le titre */}
          <div id="list-title" className="text-center mb-4 p-10">
            <h1
              className=" text-center text-purple-700  font-bold font-serif
                          md:text-6xl text-3xl mt-2">
              {posts && posts.length > 0 && (
                <p>Spécialité des psychologues adaptée à vous : {posts[0].label}</p>
              )}
            </h1>
          </div>

          {/* Les items */}
          <div
            id="list-items"
            className=" grid grid-cols-1 gap-6
                        md:grid-cols-3">
            {posts.map((post, key) => {
              return (
                <div key={key} className="card w-full glass">
                  <img
                    src={'https://my-therapist-api.up.railway.app/' + post.profilpicture}
                    alt="profilpicture"
                    className=" w-[450px] h-auto mx-auto rounded-t-lg object-fill 
                                md:h-[500px] "
                  />
                  <div className="absolute bottom-0 bg-white/60 card-body p-4 w-full h-24">
                    <h2
                      className="card-title m-auto top-0 left-0 rigth-0 absolute font-bold text-base  text-purple-700  rounded p-2
                                md:text-xl lg:ml-8">
                      {post.lastname} {post.firstname}
                    </h2>

                    <button
                      className=" 
                          bg-[#B983FF] flex flex-row items-center btn-xs text-white text-xs m-auto right-0 left-0
                          rounded hover:bg-[#580abd] transition duration-150 ease-in-out
                          md:mx-8 md:btn-md md:text-base md:flex-row md:items-center md:absolute md:bottom-2 md:right-2"
                      onClick={() =>
                        getDataOnClick(
                          post.lastname,
                          post.firstname,
                          post.id,
                          post.profilpresentation,
                          post.chatsession,
                          post.videosession,
                          post.audiosession
                        )
                      }>
                      <p className="text-center">En savoir plus</p>
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Component Modal conditionné par une ternaire */}
            {isModalOpen ? (
              <Modal
                isOpen={isModalOpen}
                onClose={handleButtonClick}
                name={data[0]}
                firstname={data[1]}
                id={data[2]}
                presentation={data[3]}
                chat={data[4]}
                visio={data[5]}
                phone={data[6]}
              />
            ) : (
              ''
            )}
          </div>

          {/* Possibilité de refaire le quizz */}
          <button
            id="tochange"
            className="justify-center border rounded-md w-[20%] my-8 py-4 text-xs text-center text-white  
                      bg-[#580abd] hover:bg-[#B983FF] transition duration-150 ease-in-out
                       md:text-base">
            <a href="/besoins">Changer mes besoins</a>
          </button>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ListPraticiens;
