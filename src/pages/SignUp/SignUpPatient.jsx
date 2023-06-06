import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SingUpPatient = () => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [streetname, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setPostalCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const quizz_id = localStorage.getItem('quizId')


  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoyer les données du formulaire à l'API

    axios
      .post("https://my-therapist-api.up.railway.app/auth/register-patient", {
        email,
        lastname,
        firstname,
        password,
        confirmPassword,
        phonenumber,
        streetname,
        zipcode,
        city,
        quizz_id

      })
      .then((response) => {
        console.log(response.data);
        const idPatient = response.data.id
        localStorage.setItem('idPatient', idPatient)
        console.log(idPatient);
        navigate('/login')
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <form onSubmit={handleSubmit} className="h-screen">
      <div className=" w-full h-full grid grid-flow-row bg-[#DBCAF4] text-xs sm:text-lg justify-center">
        <h2 className=" font-semibold leading-7 text-gray-900 text-xs sm:text-lg p-4">Informations Personelles</h2>

        <div className="grid grid-cols-1 gap-x-6 sm:gap-y-2 sm:grid-cols-6 sm:p-4">
          <div className="sm:col-span-3">
            <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
              Prénom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                id="firstname"
                required
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
              Nom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastname"
                id="lastname"
                required
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Mot de passe
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Confirmer le Mot de passe
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Ville
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                required
                onChange={(e) => setCity(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="zipcode" className="block text-sm font-medium leading-6 text-gray-900">
              Code Postal
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                required
                onChange={(e) => setPostalCode(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="streetname" className="block text-sm font-medium leading-6 text-gray-900">
              Numéro de rue
            </label>
            <div className="mt-2">
              <input
                type="text"
                onChange={(e) => setStreetAddress(e.target.value)}
                name="streetname"
                id="streetname"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phonenumber" className="block text-sm font-medium leading-6 text-gray-900">
              Numéro téléphone
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-sm my-3 w-full bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 hover:bg-[#DBCAF4]">Confirmer</button>
      </div>


    </form>
  );
};
export default SingUpPatient;