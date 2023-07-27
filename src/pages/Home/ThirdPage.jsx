import logo from '../../assets/image/therapist-woman.jpg';
import logo2 from '../../assets/image/therapist-men.jpg';

export const ThirdPage = () => {
  return (
    <div
      id="carousel-section"
      className="carousel-section flex items-center flex-col px-6 h-screen bg-[#DBCAF4]">
      <div>
        <h1 className=" mb-4 text-2xl font-semibold">Ceci est un Titre</h1>
      </div>
      <div className="carousel  w-auto h-auto md:w-[60%] pb-4">
        <div id="slide1" className="carousel-item  relative w-full max-md:flex-wrap">
          <div className="">
            <img src={logo} alt="/" className=" w-50 h-1/2 rounded-xl " />
          </div>
          <div className=" text-center m-auto">
            <h3 className="">Un Titre</h3>
            <span className="text-sm">
              Ici une belle description de l'image ou d'autres infos sur cette photo Ici une belle
              description de l'image ou d'autres infos sur cette photo
            </span>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-ghost animate-bounce">
              ❮
            </a>
            <a href="#slide2" className="btn btn-ghost animate-bounce">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item  relative w-full max-md:flex-wrap">
          <div className="">
            <img src={logo2} alt="/" className="w-50 h-1/2  rounded-xl" />
          </div>
          <div className=" text-center m-auto">
            <h3 className="">Un Titre</h3>
            <span className="text-sm ">
              Ici une belle description de l'image ou d'autres infos sur cette photo Ici une belle
              description de l'image ou d'autres infos sur cette photo
            </span>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-ghost animate-bounce">
              ❮
            </a>
            <a href="#slide1" className="btn btn-ghost animate-bounce">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
