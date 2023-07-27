import {GiSmartphone} from 'react-icons/gi'
import {MdAttachEmail, MdFacebook} from 'react-icons/md'
import {AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className=' px-4  divide-y bg-[#A16EE7]' >
        <div className=' grid p-4  pb-4 sm:grid-flow-col'>
          <div className=' grid grid-flow-row gap-4 pt-4 md:justify-center'>
            <div className=' md:text-xl font-bold text-white'>
              <h3>Vous etes</h3>
            </div>
            <div className=' grid grid-flow-row gap-4 text-white'>
              <a href="/patient" >Patient</a>
              <a href="/psycologue" >Psycologue</a>
              <a href="/patient" >Etudiant</a>
            </div>
          </div>

          <div className='grid grid-flow-row gap-4 pt-4 md:justify-center'>
            <div className=' md:text-xl font-bold text-white'>
              <h3>Devenir notre partenaire</h3>
            </div>
            <div className=' grid grid-flow-row gap-4 text-white'>
              <a href="/patient" >Entreprise</a>
              <a href="/psycologue" >Association</a>
              <a href="/patient" >Ecole</a>
            </div>
          </div>
          <div className=' grid grid-flow-row gap-4 pt-4 md:justify-center'>
            <div className=' md:text-xl font-bold text-white'>
              <h3>À propos</h3>
            </div>
            <div className=' grid grid-flow-row gap-4 text-white '>
              <a href="/patient" >Comment ca marche ?</a>
              <a href="/psycologue" >Blog</a>
              <a href="/contact">Contactez-nous</a>
            </div>
          </div>
        </div>

        <div className=' grid p-4  pb-4 sm:grid-flow-col '>
          <div className=' grid grid-flow-row gap-4 pt-4 md:justify-center'>
            <div className=' md:text-xl font-bold text-white'>
              <h3>Les Pathologies </h3>
            </div>
            <div className=' grid grid-flow-row sm:grid-rows-3 sm:grid-flow-col gap-4 text-white'>
              <a href="/patient" >Couple</a>
              <a href="/psycologue" >Dépression</a>
              <a href="/patient" >Addiction</a>

            </div>
          </div>

          <div className='grid grid-flow-row gap-4 pt-4 md:justify-center text-white'>
            <div className=' md:text-xl font-bold'>
              <h3>Contacter My therapist</h3>
            </div>
            <div className=' grid grid-flow-row gap-4 text-xs md:text-lg text-white'>
              <a href="/patient" className=' flex items-center gap-2' ><GiSmartphone/>01454545465</a>
              <a href="/psycologue" className=' flex items-center gap-2'> <MdAttachEmail/> contact@mytherapist.com</a>
              <a href="/patient" className=' grid-flow-col grid' >
                <MdFacebook/>
                <AiFillTwitterCircle/>
                < AiOutlineInstagram/>
                <AiFillLinkedin/>
                </a>
            </div>
          </div>

          <div className=' grid grid-flow-row gap-4 pt-4 md:justify-center'>
            <div className=' md:text-xl font-bold text-white'>
              <h3>Les Thérapies</h3>
            </div>
            <div className=' text-xs md:text-lg grid grid-flow-row sm:grid-rows-3 sm:grid-flow-col gap-4 text-white'>
              <a href="/patient" >Cognitivo-comportomentale</a>
              <a href="/psycologue" >Psychanalyse</a>
              <a href="/patient" >Psychologie clinique</a>
       
            </div>
          </div>
        </div>
        <div className=' grid text-xs md:text-lg md:justify-center gap-2 pt-2 text-white'>
          <div className=' grid md:grid-flow-col md:gap-2'>
            <a href="Condition">Condition Génerale d'utilisation</a>
            -
            <a href="/">Politique de confidentialité</a>
            -
            <a href="/">Politique des cookies</a>
            </div>
            <div>
              <p className=' text-center'>Copyright © 2023 - 2023 My therapist SAS - Tous droits réservés
              </p>
            </div>
        </div>
        
      </div>
  )
}

export default Footer