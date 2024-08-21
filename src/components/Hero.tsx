import web3Mobile from "../../../assets/images/image-web-3-mobile.jpg";
import web3Desktop from "../../../assets/images/image-web-3-desktop.jpg";

// type Props = {

// }

const Hero = () => {
  return (
    <section className="flex flex-col ">
      <img src={web3Mobile} alt="" className="" />
      <div className="flex flex-row">
        <h1 className="py-5 font-extrabold text-[40px] basis-5/6 leading-10">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <p className="font-light text-base text-gray-600 leading-6 ">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button
        type="button"
        className="bg-red-500 w-1/2 my-7 py-4 font-semibold tracking-[.25em] text-[15px]"
      >
        READ MORE
      </button>
    </section>
  );
};

export default Hero;
