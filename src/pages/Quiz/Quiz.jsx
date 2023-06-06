import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import quizArray from '../../utils/dataForQuiz'
import axios from 'axios';

import quizImage from '../../assets/image/quizimage.svg'
import quizImage2 from '../../assets/image/quiz2.png'
const Quiz = () => {
    const [quizData, setQuizData] = useState({});
    const navigate = useNavigate()
    console.log(quizData);
    const handleChange = (event, onChange = false) => {
        const name = event.target.name;
        const value = event.target.value;

        if (onChange === 'reset') {
            setQuizData({
                [name]: value
            })
        } else {
            setQuizData({
                ...quizData,
                [name]: value
            })
        }
    }

    const formSubmit = async (event) => {
        event.preventDefault();

        const dataToSend = {
            answer_1: quizData.profile === 'personal',
            answer_2: quizData.profile === 'professional' ? 'none' : quizData.target,
            answer_3: quizData.profile === 'professional' || quizData.target === 'child' ? 'none' : quizData.subject,
            answer_4: quizData.gender === 'Femme' ? false : true,
        };


        console.log(dataToSend);
        try {
            // Envoyer une requête POST avec les données d'authentification à l'API
            const response = await axios.post("https://my-therapist-api.up.railway.app/patients/quizz", dataToSend);
            // Extraire le token d'authentification de la réponse et le stocker dans le stockage local
            const quizId = response.data[0].id
            localStorage.setItem('quizId', quizId)

        } catch (error) {
            // Afficher une erreur si la requête échoue
            console.error('Error:', error);
        }

        switch (quizData.profile) {
            case "personal":
                navigate('/singup/patient');
                break;
            case "professional":
                navigate('/singup/pro');
                break;
            default:
                alert('Merci de completer les question avant la soumission')
                break;
        }

    }
    return (

        <div className='items-center bg-white'>
            <div className=''>
                <img className=' h-full w-full' src={quizImage} alt="" />
            </div>

            <div className=' text-center p-6 text-4xl' >
                <h1>Trouvez le psychologue idéal avec nous</h1>
            </div>

            <div className=' grid grid-flow-row md:grid-flow-col  '>
                <div>
                    <img className=' object-cover w-full' src={quizImage2} alt="" />
                </div>
                <div className=' text-base grid item-center'>
                    <form
                        onSubmit={formSubmit}
                        className=' max-h-full w-full grid justify-center '>

                        {
                            quizArray.map((item, index) => {

                                // Handle conditions
                                if (item.condition) {
                                    const { question: questionCondition, value: valueCondition } = item.condition;

                                    if (valueCondition === 'any') {
                                        if (!quizData[questionCondition]) {
                                            return false;
                                        }
                                    } else {
                                        let isOk = false;
                                        // eslint-disable-next-line 
                                        valueCondition.map((valueCond) => {
                                            if (quizData[questionCondition] === valueCond) {
                                                isOk = true;
                                            }
                                        })

                                        if (!isOk) {
                                            return false;
                                        }
                                    }
                                }

                                // Display questions
                                return (
                                    <div className=' form-control gap-4 p-4' key={`question-wrapper-${index}`}>
                                        <h3>{item.label}</h3>

                                        {item.type === 'radio' &&

                                            item.answers.map((answer, answerIndex) => {

                                                return (
                                                    <div key={`question-${index}-${answerIndex}`}>
                                                        <label>
                                                            <input
                                                                onChange={(event) => { handleChange(event, item.onChange) }}
                                                                name={item.name}
                                                                className='radio mr-4'
                                                                type="radio"
                                                                value={answer.value}
                                                            />
                                                            {answer.label}
                                                        </label>
                                                    </div>
                                                )
                                            })
                                        }

                                        {['password', 'text', 'email'].includes(item.type) &&
                                            <div key={`question-${index}`}>
                                                <label>
                                                    {/* <div>{item.label}</div> */}
                                                    <input
                                                        onChange={(event) => { handleChange(event, item.onChange) }}
                                                        name={item.name}
                                                        className='input bg-gray-50'
                                                        type={item.type}
                                                        value={quizData[item.name]}

                                                    />
                                                </label>
                                            </div>
                                        }

                                        {item.type === 'textarea' &&
                                            <div key={`question-${index}`}>
                                                {/* <div>{item.label}</div> */}
                                                <textarea
                                                    onChange={(event) => { handleChange(event, item.onChange) }}
                                                    name={item.name}
                                                    className='input bg-gray-50 w-full h-52 p-4'
                                                    value={quizData[item.name]}
                                                ></textarea>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }

                        {quizData.profile === 'professional' || quizData.gender ? (
                            <button className='bg-gradient-to-r from-[#A16EE7] to-red-700 rounded-lg text-white p-2 btn' type="submit">envoyer</button>
                        ) : null}


                    </form>
                </div>
            </div>

        </div>


    )
}

export default Quiz;