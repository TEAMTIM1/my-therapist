import { Route, Routes } from 'react-router-dom';
import './App.css';
import './pages/Booking/Booking.css'
// Components imports
import ContactForm from './components/ContactForm/ContactForm';
import Home from './pages/Home/Home';
import SingUpPro from './pages/SignUp/SingUpPro';
import Login from './pages/Login/Login';
import DashboardPatient from './components/DashboardPatient/DashboardPatient';
import ListPraticiens from './components/ListPraticens/ListPraticiens';
import MyProfil from './pages/MyprofilPage/MyprofilPage';
import NotFoundPage from './pages/NotFound/NoteFound';
import Quiz from './pages/Quiz/Quiz';
import SingUpPatient from './pages/SignUp/SignUpPatient';
import Booking from './pages/Booking/Booking';
import UpdateInfos from './pages/UpdateInfos/UpdateInfos';



function App() {

  return (
    // Routes components from react-router-dom
    <Routes>
      {/* Home page */}
      <Route path='/' element={<Home />} />

      {/* Inscription page */}
      <Route path='/singup/pro' element={<SingUpPro />} />

      <Route path='/singup/patient' element={<SingUpPatient />} />

      {/* Connexion page */}
      <Route path='/login' element={<Login />} />

      {/* Quiz Page */}
      <Route path='/quizz' element={<Quiz />} />

      {/* Contact page */}
      <Route path='/contact' element={<ContactForm />} />

      {/* ListPraticien Page */}
      <Route path='/listpraticiens' element={<ListPraticiens />} />

      <Route path='/myprofil' element={<MyProfil />} />

      <Route path='/booking' element={<Booking />} />

      <Route path='/Dashboardpatient' element={<DashboardPatient />} />

      <Route path='/Updateprofil' element={<UpdateInfos />} />

      {/* Not found page */}
      <Route path='*' element={<NotFoundPage />} />d
    </Routes>
  );
}

export default App;
