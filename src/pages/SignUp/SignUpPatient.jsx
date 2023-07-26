import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';

const SingUpPatient = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [streetname, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setPostalCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState('');
  const navigate = useNavigate();

  const initialChecks = {
    length: 0,
    hasUpperCase: false,
    hasLowerCase: false,
    hasDigit: false,
    hasSpecialChar: false
  };

  const [strengthChecks, setStrengthChecks] = useState(initialChecks);

  const checkPasswordStrength = (passwordValue) => {
    const checks = {
      length: passwordValue.length >= 8,
      hasUpperCase: /[A-Z]+/.test(passwordValue),
      hasLowerCase: /[a-z]+/.test(passwordValue),
      hasDigit: /[0-9]+/.test(passwordValue),
      hasSpecialChar: /[^A-Za-z0-9]+/.test(passwordValue)
    };

    setStrengthChecks(checks);
  };

  const handlePassword = (passwordValue) => {
    checkPasswordStrength(passwordValue);

    const checks = {
      length: passwordValue.length >= 8,
      hasUpperCase: /[A-Z]+/.test(passwordValue),
      hasLowerCase: /[a-z]+/.test(passwordValue),
      hasDigit: /[0-9]+/.test(passwordValue),
      hasSpecialChar: /[^A-Za-z0-9]+/.test(passwordValue)
    };

    setStrengthChecks(checks);

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length === 5 ? 'Fort' : verifiedList.length >= 2 ? 'Moyen' : 'Faible';

    setPassword(passwordValue);
    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);
  };

  const getActiveColor = (type) => {
    if (type === 'Fort') return 'text-green-500 text-xs';
    if (type === 'Moyen') return 'text-yellow-500 text-xs';
    return 'text-red-500 text-xs';
  };

  const getActiveColorBar = (type) => {
    if (type === 'Fort') return 'bg-green-500';
    if (type === 'Moyen') return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const quizz_id = localStorage.getItem('quizId');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoyer les données du formulaire à l'API

    axios
      .post('https://my-therapist-api.up.railway.app/auth/register-patient', {
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
        const idPatient = response.data.id;
        localStorage.setItem('idPatient', idPatient);
        console.log(idPatient);
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="h-screen">
      <div className=" w-full h-full grid grid-flow-row bg-[#DBCAF4] text-xs sm:text-lg justify-center">
        <h2 className=" font-semibold leading-7 text-gray-900 text-xs sm:text-lg p-4">
          Informations Personnelles
        </h2>

        <div className="grid grid-cols-1 gap-x-6 sm:gap-y-2 sm:grid-cols-6 sm:p-4">
          <div className="sm:col-span-3">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900">
              Prénom *
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
              Nom *
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
              Mot de passe *
            </label>
            <div className="mt-2">
              <div className="flex">
                <input
                  id="password"
                  name="password"
                  type={hidePassword ? 'password' : 'text'}
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handlePassword(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                />
                <a onClick={() => setHidePassword(!hidePassword)} href className="-ml-8 mt-2">
                  {hidePassword ? <IoEyeSharp /> : <FaEyeSlash />}
                </a>
              </div>
              <div
                className={`progress ${getActiveColorBar(message)}`}
                style={{
                  width: progress
                }}></div>
            </div>

            <div>
              {password.length !== 0 ? (
                <p className={`message ${getActiveColor(message)}`}>
                  Votre mot de passe est {message}
                </p>
              ) : null}
              {strengthChecks.length &&
              strengthChecks.hasUpperCase &&
              strengthChecks.hasLowerCase &&
              strengthChecks.hasDigit &&
              strengthChecks.hasSpecialChar ? null : (
                <>
                  <div className="card-compact shadow-xl bg-white rounded-xl p-2">
                    <p className="font-bold mb-2">Le mot de passe doit comporter au moins</p>
                    {!strengthChecks.length && (
                      <p className="text-red-400 text-xs">8 caractères.</p>
                    )}
                    {!strengthChecks.hasUpperCase && (
                      <p className="text-red-400 text-xs">Une lettre majuscule.</p>
                    )}
                    {!strengthChecks.hasLowerCase && (
                      <p className="text-red-400 text-xs">Une lettre minuscule.</p>
                    )}
                    {!strengthChecks.hasDigit && (
                      <p className="text-red-400 text-xs">Au moins un chiffre.</p>
                    )}
                    {!strengthChecks.hasSpecialChar && (
                      <p className="text-red-400 text-xs">Au moins un caractère spécial.</p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900">
              Confirmer le Mot de passe *
            </label>
            <div className="mt-2 flex">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={hidePassword ? 'password' : 'text'}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
              />
              <a onClick={() => setHidePassword(!hidePassword)} href className="-ml-8 mt-2">
                {hidePassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </a>
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Ville *
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
              Email *
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
              Code Postal *
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
            <label
              htmlFor="streetname"
              className="block text-sm font-medium leading-6 text-gray-900">
              Adresse postale *
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
            <label
              htmlFor="phonenumber"
              className="block text-sm font-medium leading-6 text-gray-900">
              Numéro téléphone *
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
        <button
          type="submit"
          className="btn btn-sm my-3 w-full bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 hover:bg-[#DBCAF4]">
          Confirmer
        </button>
      </div>
    </form>
  );
};
export default SingUpPatient;
