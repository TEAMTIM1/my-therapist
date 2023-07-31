// import des bibliothéques
import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import { add, format } from 'date-fns';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ModalBooking from './ModalBooking';
import RadioButton from '../../components/RadioButton/RadioButton';
import options from '../../utils/optionsForBooking';
import imagecalendar from "../../assets/image/app.png";

// fonction qui gere la reservation en affichant le calandrien avec react-calendar
const Booking = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [option, setOptions] = useState(options.map((option) => ({ ...option, value: false })));
  const [isModal, setIsModal] = useState(false);
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
    isSelected: null
  });

  const atLeastOneResponseClicked = option.some((opt) => opt.value);
  const atLeastOneTimeSlotSelected = date.isSelected !== null;

  const navigate = useNavigate();

  const idPatient = localStorage.getItem('idPatient');
  const idTherapist = localStorage.getItem('idTherapist');
  // Définir une constante pour le format de date communément utilisé
  const DATE_FORMAT = 'DD-MM-YYYY HH:mm';

  // Utiliser la constante pour formater la date de début et la date de fin
  const beginninghour = dayjs(date.dateTime).format(DATE_FORMAT);
  const endtime = dayjs(date.dateTime).add(1, 'hour').format(DATE_FORMAT);
  console.log(beginninghour);
  console.log(endtime);

  // fonction qui gere la value des radios boutons

  const handleOptionChange = (id) => {
    const updatedOptions = options.map((option) => {
      if (option.id === id) {
        return { ...option, value: true, isSelected: true };
      } else {
        return { ...option, value: false, isSelected: false };
      }
    });
    setSelectedOption(id);
    setOptions(updatedOptions);
  };

  // fonction qui fetch les donnees saisies par l'utilisateur a la BDD

  const handleSessionTypeChange = async () => {
    const data = {
      beginninghour,
      endtime,
      videosession: option[1].value,
      audiosession: option[0].value,
      chatsession: option[2].value,
      sessionatoffice: option[3].value
    };
    console.log(data);

    try {
      const response = await axios.post(
        `https://my-therapist-api.up.railway.app/therapists/${idTherapist}/appointments/patients/${idPatient}`,
        data
      );
      console.log('Data has been sent:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
    navigate('/myprofil');
  };

  // définition des horraires et de l'affichage de react-calendar
  const getTimes = () => {
    if (!date.justDate) return;
    const { justDate } = date;
    const beginning = add(justDate, { hours: 9 });
    const end = add(justDate, { hours: 17 });
    const interval = 60;
    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <div className="min-h-screen grid grid-cols-1 justify-items-center items-center  bg-center bg-[#dbcaf4]">
      {date.justDate ? (
        <div className=" flex flex-col items-center p-6 gap-6 bg-purple-600/50 rounded-md bg-clip-padding backdrop-filter bg-no-repeat backdrop-blur-sm bg-opacity-30 border border-gray-100 bg-center" style={{ backgroundImage: `url(${imagecalendar})` }}>
          <div>
            <h1 className="text-2xl text-center font-semibold text-white">Veuillez choisir un créneau</h1>
          </div>
          <div className=" grid grid-cols-3 gap-4 md:grid-flow-col ">
            {times?.map((time, i) => (
              <div
                key={`time-${i}`}
                className={`rounded-full p-2 text-center hover:bg-green-500 ${date.isSelected === i ? 'bg-green-500' : 'bg-slate-100'
                  }`}>
                <button
                  type="button"
                  onClick={() => {
                    setDate((prev) => ({ ...prev, dateTime: time, isSelected: i }));
                  }}>
                  {format(time, 'kk:mm')}
                </button>
              </div>
            ))}
          </div>
          <div>
            <h3 className=" text-lg font-semibold text-center text-wh">
              Veuillez choisir un mode de communication
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 font-extralight">
            {options.map((option) => (
              <div className=" flex flex-col gap-4 items-center justify-center" key={option.id}>
                <RadioButton
                  type="radio"
                  id={option.id}
                  name="communication"
                  value={option.value}
                  checked={selectedOption === option.id}
                  onChange={() => handleOptionChange(option.id)}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </div>
            ))}
          </div>
          <button
        className="btn w-40 hover:animate-pulse btn-success"
        onClick={() => setIsModal(!isModal)}
        disabled={!atLeastOneResponseClicked || !atLeastOneTimeSlotSelected}>
        envoyer
      </button>
        </div>
      ) : (
        <>
          <div className=' grid grid-rows-1 gap-12'>
            <div className="font-thin text-2xl text-center">
              <h1>Veuillez selectionner une date</h1>
            </div>
            <div className=''>
              <ReactCalendar
                minDate={new Date()}
                className="p-4"
                view="month"
                onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
              />
            </div>
          </div>

        </>
      )}
      {isModal && (
        <ModalBooking
          setIsModal={setIsModal}
          selectedOption={selectedOption}
          handelToSendDateData={handleSessionTypeChange}
          beginninghour={beginninghour}
        />
      )}
    </div>
  );
};

export default Booking;
