// Importation de l'image
import logo1 from '../../assets/image/nfrb.png'

// Définition de la composante pour la page 404
const NoteFoundPage = () => {
    return (
        // Contenu de la page 404
        <div className='text-blue-900/50 flex flex-col items-center justify-around p-4 bg-[#DBCAF4] h-screen'>
            {/* Titre de la page 404 */}
            <h2 className="text-2xl font-bold text-center py-4">OPPS ! PAGE NON TROUVÉ</h2>

            {/* Numéro de l'erreur 404 */}
            <h1 className='text-8xl py-2'>404</h1>

            {/*  Image pour la page 404 */}
            <img className='max-h-[400px]'  src={logo1} alt="" />

             Message pour indiquer que la page n'a pas été trouvée
            <p className='text-2xl font-extrabold text-center'>Désolé, la page que vous cherchez n'existe pas.</p>

            {/*  Bouton pour retourner à la page d'accueil */}
            <button className="btn my-5 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 hover:bg-teal-600">
                <a href='/'>Aller à la page d'accueil</a>
            </button>
        </div>
    );
}

export default NoteFoundPage;



