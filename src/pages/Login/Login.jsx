import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import ReCAPTCHA from "react-google-recaptcha";
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';

// local import
import logo1 from '../../assets/image/welcome.png';

const LoginForm = () => {
  const [verify, setVerify] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const onChange =() => {
    setVerify(true);
  }
  // Déclarer les variables d'état pour stocker les valeurs du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password);
  const navigate = useNavigate();
  // Définir la fonction de gestionnaire d'événements pour la soumission du formulaire
  const handleSubmit = async (event) => {
    // Empêcher la soumission du formulaire par défaut
    event.preventDefault();

    try {
      // Envoyer une requête POST avec les données d'authentification à l'API
      const response = await axios.post('https://my-therapist-api.up.railway.app/auth/login', {
        email,
        password
      });
      if (response.data) {
        // Extraire le token d'authentification de la réponse et le stocker dans le stockage local
        const { token } = await response.data;
        const decodedToken = jwtDecode(token);
        const idPatient = decodedToken.data.id;
        localStorage.setItem('idPatient', idPatient);
        localStorage.setItem('token', token);
        console.log(response.data);
        navigate('/myprofil');
      }
    } catch (error) {
      // Afficher une erreur si la requête échoue
      console.error('Error:', error);
    }

    // Réinitialiser les valeurs du formulaire après la soumission
    setEmail('');
    setPassword('');
  };
  // Afficher l'interface utilisateur du formulaire

  return (
    // retourner l'interface utilisateur du formulaire
    <div id="connexion-form" className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className=" bg-[#DBCAF4]">
        <img src={logo1} alt="" className=" w-full h-full object-contain" />
        {/* afficher l'image avec la source logo1 importée précédemment */}
      </div>
      <div className="flex flex-col justify-center p-4 bg-[#DBCAF4]">
        <div className="text-4xl font-extrabold text-center p-12">
          <h1> Te revoila</h1> {/* afficher un titre */}
        </div>
        <form
          onSubmit={handleSubmit}
          id="connexion-form__form"
          className="max-w-[600px] w-full mx-auto bg-slate-200/50 p-8 px-8 rounded-lg shadow-blue-600/50 shadow-2xl">
          {/* définir le formulaire avec un gestionnaire d'événements pour la soumission */}
          <h2 className="text-2xl font-bold text-center">Connexion</h2>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Adresse mail</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg mt-2 p-2 focus:border-red-500 focus:bg-[#DBCAF4]"
            />
            {/* définir le champ de saisie pour l'identifiant avec le nom, la valeur et le gestionnaire d'événements */}
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="password">Mot de passe</label>
            <div className='flex'>
            <input
              type={hidePassword ? 'password' : 'text'}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg mt p-2 focus:border-blue-300 focus:bg-[#DBCAF4] w-full"
            />
            <a onClick={() => setHidePassword(!hidePassword)} href className="-ml-10 mt-3.5">
                  {hidePassword ? <IoEyeSharp /> : <FaEyeSlash />}
                </a>
                </div>
          </div>
          <div className="flex justify-between py-2">
            <p className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Se souvenir de moi ?
            </p>
            <p>Mot de passe oublié ?</p>
          </div>
          <div style={{ width: '300px' }}>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_APIKEY}
            onChange={onChange}
            size="normal"
            />
            </div>
                    {verify ? (
          <button
            type="submit"
            className="btn w-full my-5 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 hover:bg-[#DBCAF4]">
            Se connecter
          </button>
        ) : (
          <button
            type="submit"
            className="btn w-full my-5 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 hover:bg-[#DBCAF4] btn-disable"
            disabled>
            Se connecter
          </button>
        )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
