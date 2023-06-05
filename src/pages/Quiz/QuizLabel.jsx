import { useState } from 'react';

const QuizLabel = ({quiz, answer, setAnswer}) => {

    return (
        <label htmlFor={`question_${quiz.id}`}>
            <input
                type="radio"
                className='radio mr-4'
                id={`question_${quiz.id}`}
                name="question_working"
                value={quiz.id}
                //value={quiz.answer}
            />
            {quiz.quizz}
        </label>
    )
}

export default QuizLabel;