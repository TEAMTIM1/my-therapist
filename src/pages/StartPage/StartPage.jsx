
import logo1 from '../../assets/image/welcome.jpg'

const StartPage = () => {
    return (

        <div className=" grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">

            <div className="">
                <img src={logo1} alt="" className=" w-full h-full object-contain" />
            </div>

            <div className=' flex flex-col justify-center p-4 bg-[#DBCAF4] '>
                <form action="" className="max-w[400px] w-full mx-auto bg-slate-200/50 p-8 px-8 rounded-lg shadow-2xl">
                    <h2 className=" text-2xl font-bold text-center">Inscription</h2>
                    <div className=" flex flex-col py-2">
                        <label htmlFor="nom">Nom</label>
                        <input type="text" className=" rounded-lg mt-2 p-2 focus:border-red-500 focus:bg-[#DBCAF4] " />
                    </div>

                    <div className=" flex flex-col py-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className=" rounded-lg mt-2 p-2 focus:border-blue-300 focus:bg-[#DBCAF4] " />
                    </div>
                    <div className=" flex justify-between py-2">

                        <p className="flex items-center"><input type="checkbox" className=" mr-2 " />Se souvenir de moi ?</p>
                        <p>Mot de passe oublié ?</p>
                    </div>
                    <button className=" btn w-full my-5 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 hover:bg-[#DBCAF4]">S'inscrire</button>
                </form>
            </div>
        </div>




    );
};

export default StartPage;