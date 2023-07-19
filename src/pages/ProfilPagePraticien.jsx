import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

import DashboardPraticien from "../components/DashBoardePraticien/index";

const MyProfilPraticien = () => {
  const [getInfo, setGetInfo] = useState("");
  const idPraticienfromLocalStorage = localStorage.getItem('idPatient');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://my-therapist-api.up.railway.app/praticien/${idPraticienfromLocalStorage}`);
        setGetInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [idPraticienfromLocalStorage]);
  console.log(getInfo);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`https://my-therapist-api.up.railway.app/praticien/${idPraticienfromLocalStorage}/appointments`);
        setAppointments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, [idPraticienfromLocalStorage]);

  return (
    <div className="flex flex-col md:flex-row">
      <DashboardPraticien/>

      <div className="flex flex-col justify-center items-center p-4 w-full min-h-screen bg-[#B983FF]">
        <div id="Bienvenue">
          <h1 className="text-center text-white text-4xl md:text-6xl capitalize p-4">Bonjour {getInfo.firstname}</h1>
          <p className="text-center text-white text-xl md:text-2xl">Voici vos prochains rendez-vous</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div id="MonPraticien" className="bg-[#DBCAF4] shadow-lg rounded p-4">
            <div className="grid grid-cols-2 justify-center gap-4">
              <button id="Home-btn" className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded">
                <a href="/listpraticiens">Voir votre liste de Psy</a>
              </button>

              <button id="Home-btn" className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded">
                <a href='updateprofil'>Modifier mes informations</a>
              </button>

              <button className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded">
              <a href='/booking'>Prendre rendez-vous</a>
                
              </button>
              <button className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Envoyer un message
              </button>
              <button className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Rédiger un avis
              </button>
            </div>
          </div>

          <div id="MesRendezVous" className="bg-[#DBCAF4] shadow-lg rounded p-4 mt-6">
            <h3 className="font-bold text-xl mb-4">Mes rendez-vous</h3>
            {appointments.length > 0 ? (
              <ul>
                {appointments.map((appointment, index) => (
                  <li className="bg-[#DBCAF4] p-2 mb-2 rounded shadow" key={index}>
                    Votre prochain rendez-vous avec {appointment.therapistfirstname} {appointment.therapistname} sera le : {dayjs(appointment.appointmentbegin).subtract(1, 'hour').format('DD-MM-YYYY [à] HH:mm')}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">Il n'y a aucun rendez-vous à venir.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilPraticien;
