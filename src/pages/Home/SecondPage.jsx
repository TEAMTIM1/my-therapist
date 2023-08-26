import logo from '../../assets/image/falling.png';
import logo2 from '../../assets/image/familly.png';
import logo3 from '../../assets/image/ghost.png';
const SecondPage = () => {
  return (
    <div
      id=" SecondPage-Container"
      className="relative z-10  max-w-full md:h-screen bg-[#DBCAF4] flex">
      <div id="SecondPage-Item" className="flex md:justify-center flex-col">
        <div id="SecondPage-container-title">
          <h1 id="Secondpage-Title" className="text-center font-bold md:text-3xl mt-4">
            Prenez soin de votre bien-être mental avec facilité
          </h1>
        </div>
        <div
          id="SecondPage-Container-Images"
          className="grid gap-4 px-4 mt-4 md:grid-cols-3 text-center text-XL">
          <div id="SecondPage-image" className="relative z-1 scale-75 md:scale-70 text-center">
            <img src={logo} alt="" />
            <h3 className='text-xl font-bold mb-5'>Sortez de la dépression et retrouvez votre bien-être émotionnel</h3>
            <p>
            Que vous traversiez des moments difficiles, des perturbations émotionnelles, ou que vous cherchiez simplement à mieux comprendre et gérer vos émotions, notre équipe de psychologues est prête à vous aider
            </p>
          </div>
          <div id="SecondPage-image" className="relative z-1 scale-75 md:scale-70">
            <img src={logo2} alt="" />
            <h3 className='text-xl font-bold mb-5'>Vous n'êtes pas seul(e) face à vos difficultés</h3>
            <p>Notre approche est basée sur des méthodes éprouvées scientifiquement, afin de vous offrir un soutien professionnel de qualité et des stratégies pratiques pour surmonter les défis que vous rencontrez.</p>
          </div>
          <div id="SecondPage-image" className="relative z-1 scale-75 md:scale-70">
            <img src={logo3} alt="" />
            <h3 className=" pt-4 text-xl font-bold mb-5">
              Pensée positive et soutien d'un professionnel de santé mentale pour vaincre les doutes
              et renforcer la confiance en soi
            </h3>
            <p>Êtes-vous prêt à surmonter vos doutes et à cultiver une confiance en vous inébranlable ? Notre équipe de professionnels de santé mentale est là pour vous aider à développer une pensée positive et à construire une estime de soi solide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
