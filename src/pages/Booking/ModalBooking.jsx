import React from 'react'
import Button from '../../components/Button/Button'

const ModalBooking = ({ beginninghour, selectedOption, handelToSendDateData, setIsModal }) => {
  console.log(selectedOption);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg p-8 text-center">
        <h2 className="text-xl font-bold mb-4 ">Veuillez confirmer votre choix</h2>
        <p className="mb-4">
          Votre rendez-vous aura lieu le :
          <span className=' m-4 text-green-500 font-semibold'>
            {beginninghour}<span className=' text-black font-light'> en </span> {selectedOption}
          </span>
        </p>
        <div className=' grid gap-4'>
          <Button onClick={handelToSendDateData} title={'Confirmer'} className={`bg-gray-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded`} />
          <Button onClick={() => setIsModal(false)} title={'Annuler'} className={`bg-gray-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded`} />
        </div>
      </div>
    </div>
  )
}

export default ModalBooking