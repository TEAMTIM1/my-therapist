import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import DashboardPatient from '../../components/DashboardPatient/DashboardPatient';

const MyProfil = () => {
  const [getInfo, setGetInfo] = useState('');
  const idPatientfromLocalStorage = localStorage.getItem('idPatient');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://my-therapist-api.up.railway.app/patients/${idPatientfromLocalStorage}`
        );
        setGetInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [idPatientfromLocalStorage]);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `https://my-therapist-api.up.railway.app/patients/${idPatientfromLocalStorage}/appointments`
        );
        setAppointments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, [idPatientfromLocalStorage]);

  return (
    <div className="flex flex-col md:flex-row">
      <DashboardPatient />

      <div className="flex flex-col justify-center items-center p-4 w-full min-h-screen bg-purple-100 ">
        <div id="Bienvenue">
          <h1 className="text-center text-purple-700 text-4xl md:text-6xl capitalize p-4">
            Bienvenue {getInfo.firstname}
          </h1>
          <p className="text-center text-purple-700 text-xl md:text-2xl">
            Que voulez-vous faire aujourd'hui?
          </p>
        </div>

        <div className="mt-8">
          <div id="MonPraticien" className="bg-[#DBCAF4] shadow-lg rounded p-4">
            <div className="grid grid-cols-2 justify-center gap-4">
              <button
                id="Home-btn"
                className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded-xl border-none">
                <a href="/listpraticiens">Voir ma liste de Psy</a>
              </button>

              <button
                id="Home-btn"
                className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded-xl border-none">
                <a href="updateprofil">Modifier mes informations</a>
              </button>

              <button className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded-xl border-none">
                <a href="/booking">Prendre rendez-vous</a>
              </button>
              <button className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded-xl border-none">
                Envoyer un message
              </button>
              <button className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded-xl border-none">
                Rédiger un avis
              </button>
            </div>
          </div>

          <div id="MesRendezVous" className="bg-[#DBCAF4] shadow-lg rounded p-4 mt-6">
            <h3 className="font-bold text-xl mb-4 text-purple-700">Mes rendez-vous</h3>
            {appointments.length > 0 ? (
              <ul>
                {appointments.map((appointment, index) => (
                  <li
                    className="bg-[#DBCAF4] p-2 mb-2 rounded text-purple-900 flex items-center"
                    key={index}>
                    <img
                      src={
                        'https://my-therapist-api.up.railway.app/' +
                        appointment.therapistprofilpicture
                      }
                      className="w-8 h-8 rounded-full m-2"
                      alt=""
                    />
                    <div>
                      <span className="font-bold">{appointment.therapistfirstname}</span>
                      <span className="font-bold ml-1">{appointment.therapistname}</span>
                      <span className="ml-2">
                        le{' '}
                        {dayjs(appointment.appointmentbegin)
                          .subtract(1, 'hour')
                          .format('DD-MM-YYYY [à] HH:mm')}
                        {/* Ici j'ai rajouté une logique qui permet d'afficher le type de RDV */}
                        {appointment.audiosession
                          ? ' via téléphone'
                          : appointment.videosession
                          ? ' via vidéo'
                          : appointment.chatsession
                          ? ' via chat'
                          : appointment.sessionatoffice
                          ? ' en personne'
                          : null}
                      </span>
                    </div>
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

export default MyProfil;
