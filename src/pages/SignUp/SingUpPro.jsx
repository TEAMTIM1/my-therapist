import { useState } from "react";
import axios from "axios";
import Input from "../../components/Form/Input";
import { useNavigate } from "react-router-dom";

const SingUpTherapist = () => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [adelinumber, setAdelineNumber] = useState("");
  const [streetname, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [zipcode, setPostalCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoyer les données du formulaire à l'API
    axios
      .post("http://etiamsani-server.eddi.cloud:8080/auth/register-therapist", {
        firstname,
        lastname,
        phonenumber,
        email,
        streetname,
        city,
        gender,
        zipcode,
        adelinumber,
        password,
        confirmPassword,

      })
      .then((response) => {
        console.log(response.data);
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
          <Input additionalClasses="sm:col-span-3" label="Prénom" type="text" name="firstName" required onChange={(e) => setFirstName(e.target.value)} />

          <Input additionalClasses="sm:col-span-3" label="Nom" type="text" name="lastname" required onChange={(e) => setLastName(e.target.value)} />

          <Input additionalClasses="sm:col-span-3" label="Mot de passe" type="password" name="password" required onChange={(e) => setPassword(e.target.value)} />

          <Input additionalClasses="sm:col-span-3" label="Confirmer le Mot de passe" type="password" name="confirmPassword" required onChange={(e) => setConfirmPassword(e.target.value)} />

          <Input additionalClasses="sm:col-span-3" label="Ville" type="text" name="city" required onChange={(e) => setCity(e.target.value)} />

          <Input additionalClasses="sm:col-span-3" label="Email" type="text" name="email" required onChange={(e) => setEmail(e.target.value)} />

          <Input additionalClasses="sm:col-span-3" label="Code Postal" type="text" name="CodePostal" required onChange={(e) => setPostalCode(e.target.value)} />

          <Input additionalClasses="sm:col-span-3" label="Adresse" type="text" name="Adresse" required onChange={(e) => setStreetAddress(e.target.value)} />

          <Input additionalClasses="sm:col-span-2 sm:col-start-1" label="Numéro Adeli" type="text" name=" Numéro Adeli" required onChange={(e) => setAdelineNumber(e.target.value)} />

          <div className="sm:col-span-2">
            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
              Genre
            </label>
            <div className="mt-2">
              <select required onChange={(e) => setGender(e.target.value)} id="gender" name="gender" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4">
                <option></option>
                <option>Femme</option>
                <option>Homme</option>

              </select>
            </div>
          </div>

          <Input additionalClasses="sm:col-span-2" label="Numéro de telephone" type="text" name="phonenumber" required onChange={(e) => setPhoneNumber(e.target.value)} />

        </div>
        <button type="submit" className="btn btn-sm my-3 w-full bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 hover:bg-[#DBCAF4]">Confirmer</button>
      </div>


    </form>
  );
};
export default SingUpTherapist;