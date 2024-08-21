import imgArticle1 from "../../../assets/images/image-retro-pcs.jpg";
import imgArticle2 from "../../../assets/images/image-top-laptops.jpg";
import imgArticle3 from "../../../assets/images/image-gaming-growth.jpg";

// type Props = {

// }

const TopArticle = () => {
  return (
    <section className="flex flex-col mt-[2em]">
      <article className="flex my-4">
        <img src={imgArticle1} alt="" className="w-1/3 h-[130px]" />
        <div className="px-5 flex flex-col justify-between">
          <h2 className="text-3xl text-red-500 font-bold">01</h2>
          <h3 className="text-[1.15em] whitespace-nowrap font-extrabold">
            Reviving Retro PCs
          </h3>
          <p className="pt-3 text-[15px] font-light leading-6">
            What happens when old PCs are give modern upgrades?
          </p>
        </div>
      </article>
      <article className="flex my-4">
        <img src={imgArticle2} alt="" className="w-1/3 h-[130px]" />
        <div className="px-5 flex flex-col justify-between">
          <h2 className="text-3xl text-red-500 font-bold">02</h2>
          <h3 className="text-[1.15em] whitespace-nowrap font-extrabold">
            Top 10 Laptops of 2022
          </h3>
          <p className="pt-3 text-[15px] font-light leading-6">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </article>
      <article className="flex my-4 ">
        <img src={imgArticle3} alt="" className="w-1/3 h-[130px]" />
        <div className="px-5 flex flex-col justify-between">
          <h2 className="text-3xl text-red-500 font-bold">03</h2>
          <h3 className="text-[1.15em] whitespace-nowrap font-extrabold">
            The Growth of Gaming
          </h3>
          <p className="pt-3 text-[15px] font-light leading-6">
            How the pandemic has sparked fresh opportunities.{" "}
          </p>
        </div>
      </article>
    </section>
  );
};

export default TopArticle;
