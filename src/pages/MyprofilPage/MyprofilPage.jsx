import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardPatient from "../../components/DashboardPatient/DashboardPatient";

const InputField = ({ label, id, type, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);
const MyProfil = () => {
  const [getInfo, setGetInfo] = useState("");
  const idPatientfromLocalStorage = localStorage.getItem('idPatient');

  const navigate = useNavigate();

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://etiamsani-server.eddi.cloud:8080/patients/${idPatientfromLocalStorage}`);
        setGetInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [idPatientfromLocalStorage]);

                                  // FETCH POUR RENDEZ-VOUS
                                  
  const [appointments, setAppointments] = useState([]);
  
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://etiamsani-server.eddi.cloud:8080/patients/${idPatientfromLocalStorage}/appointments`);
        setAppointments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchAppointments();
  }, []); 

  return (
<div className="flex flex-col md:flex-row">
      <DashboardPatient />

      <div className="flex flex-col justify-center items-center p-4 w-full min-h-screen bg-[#B983FF]">

        <div id="Bienvenue">
          <h1 className="text-center text-white text-4xl md:text-6xl">Bienvenue {getInfo.firstname}</h1>
          <p className="text-center text-white text-xl md:text-2xl">Que voulez-vous faire aujourd'hui?</p>
        </div>

        
        

    <div className="mt-8">
      <div id="MonPraticien" className="bg-[#DBCAF4] shadow-lg rounded p-4">
<div className=" grid grid-cols-2 justify-center gap-4">

          <button id="Home-btn" className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded">
              <a href="/listpraticiens">Voir votre liste de Psy</a>
          </button>
        

        
        <button id="Home-btn" className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded">
          <a href='updateprofil'>Modifier mes informations</a>
        </button>
      
<button className="btn mb-2 bg-purple-700 text-white font-bold py-2 px-4 rounded">
Prendre rendez-vous
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
export default MyProfil;
