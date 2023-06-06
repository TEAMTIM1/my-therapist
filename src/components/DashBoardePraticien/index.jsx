import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const DashboardPatient = () => {
  const [nav, setNav] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [myProfil, setMyProfil] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(myProfil);

  const navigate = useNavigate()

  const idPatient = localStorage.getItem('idPatient')
/* 
  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post(`http://etiamsani-server.eddi.cloud:8080/patients/${idPatient}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

 */
  const handleNav = () => {
    setNav(!nav);
    setHidden(!hidden);
  };

  const handleClick = () => {
    setHidden(true);
    setNav(!nav);
  };

  const handleDeconnect = () => {
    localStorage.clear('token')
    navigate("/")
  }

  const elementClassName = hidden ? "hidden" : "";

  useEffect(() => {
    axios
      .get(`https://my-therapist-api.up.railway.app/patients/${idPatient}`)
      .then((response) => {
        setMyProfil(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  console.log(myProfil.profilpicture);
  return (
    <>
      <AiOutlineMenu
        onClick={handleNav}
        size={30}
        className='absolute top-4 right-4 z-[99] md:hidden'
      />
      {nav ? (
        <div className={`fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 ${elementClassName} md:hidden`}>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase hidden">
              <a className href="/login">Mon profil</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/login">Mes rendez-vous</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/login">Messages</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/login">Notifications</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/login">Réglages</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/register">Se déconnecter</a>
            </li>
            <li>
              <button onClick={handleClick} className='dark'><MdDarkMode size={25} /></button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      {/* SideBarPatient desktop version */}

      <div className="w-1/6 hidden md:block bg-[#B983FF] ">

        <img
          className="mx-auto my-8 object-cover w-32 h-32 rounded-full"
          src={
            selectedImage
              ? URL.createObjectURL(selectedImage)
              : axios.put(`http://etiamsani-server.eddi.cloud:8080/patients/${idPatient}`, 
                selectedImage
              )
          }
          alt=""
        />
       {/*  <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p className=' text-white text-center'>Faites glisser une image ici pour l'enregistrer</p>
        </div> */}

        <h1 className='mx-auto mt-4 text-center'>{myProfil.firstname} {myProfil.lastname}</h1>

        <div className="h-screen hidden md:collapse">
          <aside className=" left-0 top-0 flex flex-col items-center">
            <div className="flex flex-col justify-between w-full p-3">
              <div className=' pt-10'>
                {/* <img className=' rounded-full' src={profilImage} alt="profilImage" /> */}
              </div>
              <div className=' grid grid-flow-row'>
                <a href="/myprofil" className="text-white  bg-violet-900 rounded-full focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2 my-40 text-center mr-2 mb-2">Mon profil</a>
                <a href="/rendezvous" className="text-white bg-violet-900  rounded-full focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2 my-8 text-center mr-2 mb-2">Mes rendez-vous</a>
                <a href="/messages" className="text-white bg-violet-900  rounded-full focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2 my-8 text-center mr-2 mb-2">Messages</a>
                <a href="/notifications" className="text-white bg-violet-900  rounded-full focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2 my-8 text-center mr-2 mb-2">Notifications</a>
                <a href="/reglages" className="text-white bg-violet-900  rounded-full focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2 my-8 text-center mr-2 mb-2">Réglages</a>
                <button onClick={handleDeconnect} className="text-white bg-violet-900  rounded-full font-medium text-sm px-4 py-2 my-8 text-center mr-2 mb-2">Se déconnecter</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default DashboardPatient;
