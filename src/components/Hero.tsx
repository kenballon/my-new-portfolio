import PageTransition from "./PageTransition";

const Hero = () => {
  return (
    <PageTransition>
      <section className="hero_section min-h-dvh relative">
        <div className="w-full min-h-full mx-auto z-10 flex items-center relative p-[2rem]">
          <h1 className="headline text-white capitalize">
            <span className="block">Creating digital experiences</span>{" "}
            <span>that users love.</span>
          </h1>
          <h2 className="subheadline text-3xl text-white absolute bottom-0 right-0 max-w-full sm:max-w-[600px] p-[2rem] sm:pb-[4rem] sm:pr-[2rem]">
            Creating intuitive digital experiences that solve real business
            challenges through UI UX design, optimizing workflows, improving
            efficiency and enhancing user engagement.
          </h2>
        </div>
      </section>
      <section className="recent_work min-h-dvh relative">
        <div className="w-full max-w-[80%] min-h-full mx-autorelative p-[2rem]">
          <h2 className="text-[48px] text-pretty font-bold mb-4">
            Transforming ideas into interactive realities. Frontend precision
            meets design thinking to create experiences users actually want to
            use.
          </h2>
          <p className="text-[18px] uppercase font-light max-w-3xl text-pretty mt-[4rem]">
            I simply make UI for Websites. If opportunity present, I code them.
            I work with different talented people to get lots of ideas and try
            new things to make the design fun and easy for everyone to use.
          </p>
        </div>
      </section>
    </PageTransition>
  );
};

export default Hero;
