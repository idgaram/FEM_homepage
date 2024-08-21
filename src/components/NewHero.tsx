// type Props = {

// }

const NewHero = () => {
  return (
    <section className="my-8 bg-slate-950 px-5  ">
      <h2 className="text-amber-400 pt-6 text-3xl font-bold tracking-wider">
        New
      </h2>
      <article className="py-6">
        <h3 className="text-slate-100 py-2 text-xl tracking-wide font-extrabold">
          Hydrogen VS Electric Cars
        </h3>
        <p className="text-slate-100 py-2 leading-7 font-extralight">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </article>
      <hr className="border-sky-950" />
      <article className="py-6">
        <h3 className="text-slate-100 py-2 text-xl tracking-wide font-extrabold">
          The Downsides of AI Artistry
        </h3>
        <p className="text-slate-100 py-2 leading-7 font-extralight">
          What are the possible adverse effects of on-demand AI image
          generation?{" "}
        </p>
      </article>
      <hr className="border-sky-950" />
      <article className="py-6">
        <h3 className="text-slate-100 py-2 text-xl tracking-wide font-extrabold">
          Is VC Funding Drying Up?{" "}
        </h3>
        <p className="text-slate-100 py-2 leading-7 font-extralight">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.{" "}
        </p>
      </article>
    </section>
  );
};

export default NewHero;
