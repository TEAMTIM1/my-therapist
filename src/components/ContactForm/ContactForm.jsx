import { useState } from "react";
import logo from "../../assets/image/BRAIN.png"

const ContactForm = () => {

    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        name: "",
        email: "",
        message: "",
    });

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(contactInfo);
        setContactInfo({
            firstName: "",
            name: "",
            email: "",
            message: ""
        })
    }

    const handelChange = (event) => {
        const { name, value } = event.target;
        setContactInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div id="contact-form" className=' grid justify-center h-screen shadow-2xl bg-[#DBCAF4]'>

            <div className='rounded-lg h-auto w-full px-4 m-auto shadow-2xl bg-slate-200 p-4'>

                <div id="contact-form__title " className=' text-center font-bold p-6'>
                    <img className=" max-w-full h-36 " src={logo} alt="/" />
                    <h1>Contactez nous</h1>
                </div>
                <div id="contact-form__content" className=' grid grid-flow-row gap-4'>
                    <form onSubmit={handelSubmit} action="" method='get' className=' grid grid-flow-row-dense  gap-4 '>
                        <div id="contact-form__group-name" className=''>
                            <label className='hidden' htmlFor="firstName">Votre prénom</label>
                            <input className=' w-full h-full rounded-2xl text-center ' onChange={handelChange} type="text" name='firstName' id='firstName' value={contactInfo.firstName} placeholder='Prénom' required />
                        </div>
                        <div id="contact-form__group-last-name">
                            <label className='hidden' htmlFor="name">Votre nom</label>
                            <input className=' w-full h-full rounded-2xl text-center ' onChange={handelChange} type="text" name="name" id="name" value={contactInfo.name} placeholder='Nom' required />
                        </div>
                        <div id="contact-form__group-email">
                            <label className='hidden' htmlFor="email">Email</label>
                            <input className=' w-full h-full rounded-2xl text-center' onChange={handelChange} type="text" name="email" id="email" placeholder='Email' value={contactInfo.email} required />
                        </div>
                        <label className='hidden' htmlFor="message">Votre prénom</label>
                        <textarea maxLength={100} id="message" onChange={handelChange} name="message" className='  w-full h-full text-center  rounded-lg' value={contactInfo.message} placeholder='Votre message'></textarea>


                        <div className='bg-gradient-to-r from-[#A16EE7] to-red-700 rounded-lg text-white p-2 btn'>
                            <button>Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
