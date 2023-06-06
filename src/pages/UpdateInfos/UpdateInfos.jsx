import React, { useState } from "react";
import axios from 'axios';
import DashboardPatient from "../../components/DashboardPatient/DashboardPatient";
import { useNavigate } from "react-router-dom";


const UpdateInfos = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [streetname, setStreetName] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const idPatient = localStorage.getItem(`idPatient`);
  const quizz_id = localStorage.getItem('quizId')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Vérifiez si les mots de passe correspondent
    // if (newpassword !== confirmpassword) {
    //   alert("Les mots de passe ne correspondent pas");
    //   return;
    // }

    // Préparez les données du formulaire
    const data = {
      email,
      firstname,
      lastname,
      password,
      phonenumber,
      streetname,
      zipcode,
      city,
      quizz_id

    };
    console.log(data);
    try {
      // Remplacez 'URL_DE_VOTRE_API' par l'URL de votre API Swagger
      const response = await axios.put(`https://my-therapist-api.up.railway.app/patients/${idPatient}`, data);

      // Vérifie si la réponse est un succès
      if (response.status === 200) {
        alert("Vos informations ont été mises à jour avec succès.");
        navigate('/myprofil')
      } else {
        alert("Une erreur s'est produite lors de la mise à jour de vos informations.");
      }
    } catch (error) {
      alert("Une erreur s'est produite lors de la mise à jour de vos informations.");
      console.error(error);
    }



    setFirstname("");
    setLastname("");
    setPhonenumber("");
    setEmail("");
    setPassword("");

  };

  return (
    <div className="bg-[#B983FF] flex items-center justify-center">
      <DashboardPatient />
      <form onSubmit={handleSubmit} className="bg-[#DBCAF4] w-full max-w-md mx-auto p-6 mt-10 rounded-lg shadow-md">

        <div className="mb-4">
          <label htmlFor="prenom" className="block text-gray-700 font-bold mb-2">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <div className="mb-4">
            <label htmlFor="motDePasseActuel" className="block text-gray-700 font-bold mb-2">
              Mot de passe actuel
            </label>
            <input
              type="password"
              id="motDePasseActuel"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="telephone" className="block text-gray-700 font-bold      mb-2">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="streetname" className="block text-gray-700 font-bold mb-2">
            Adresse
          </label>
          <input
            type="streetname"
            id="streetname"
            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={streetname}
            onChange={(e) => setStreetName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="zipcode" className="block text-gray-700 font-bold mb-2">
            Code postale
          </label>
          <input
            type="zipcode"
            id="zipcode"
            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={zipcode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>


        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            Ville
          </label>
          <input
            type="city"
            id="city"
            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>




        <button
          type="submit"
          className="btn w-full bg-purple-700 text-white font-bold py-2 px-4 rounded hover:bg-purple-800">
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default UpdateInfos;