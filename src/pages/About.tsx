import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-dvh w-full mx-auto p-[2rem] pt-[8rem]">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        {/* Add your about content here */}
      </div>
    </PageTransition>
  );
};

export default About;
