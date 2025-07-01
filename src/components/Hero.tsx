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
      <section className="recent_work_pre min-h-[65dvh] relative flex items-center">
        <div className="second_section_div ml-auto h-full">
          <h2 className="text-pretty font-semibold mb-4">
            Bridging beautiful design and seamless development to create
            experiences that captivate and inspire.
          </h2>
          <p className="blurbs_section_text text-pretty pt-4">
            Transforming ideas into interactive realities. Frontend precision
            meets design thinking to create experiences users actually want to
            use.
          </p>
        </div>
      </section>

      <section className="latest_work  relative flex items-center">
        <div className="latest_work_div w-full p-[2rem] h-full">
          <div className="latest_work_headline_details">
            <h2 className="text-pretty font-semibold uppercase mb-4">
              Latest Work
            </h2>
            <p className="filtered_text text-pretty">
              <span id="all" className="filter_text_btn active">
                All
              </span>
              <span id="design" className="filter_text_btn">
                Design
              </span>
              <span id="development" className="filter_text_btn">
                Development
              </span>
              <span id="print" className="filter_text_btn">
                Print
              </span>
            </p>
          </div>

          <ul className="list_of_works">
            <li className="list_of_works_item p-4">
              <a
                href="https://www.charltonslaw.com/"
                target="_blank"
                className="list_of_works_link flex justify-between"
              >
                <div className="listofworks_number">1</div>
                <div>
                  <div className="work_item_label uppercase">Project</div>
                  <div className="project_name">Charltons Law Firm</div>
                </div>
                <div>
                  <div className="work_item_label uppercase">Location</div>
                  <div className="loc_name">Hong Kong</div>
                </div>
                <div>
                  <div className="work_item_label uppercase">Services</div>
                  <div className="services_names">Design, Development</div>
                </div>
                <div className="image_container">
                  <img
                    src="https://images.unsplash.com/photo-1518599807935-37015b9cefcb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Project Image"
                    className="max-w-3xs rounded-md"
                  />
                </div>
              </a>
            </li>
            <li className="list_of_works_item p-4">
              <a
                href="https://riaactivate.com/"
                target="_blank"
                className="list_of_works_link flex justify-between"
              >
                <div className="listofworks_number">2</div>
                <div>
                  <div className="work_item_label uppercase">Project</div>
                  <div className="project_name">RIA Activate New York</div>
                </div>
                <div>
                  <div className="work_item_label uppercase">Location</div>
                  <div className="loc_name">US</div>
                </div>
                <div>
                  <div className="work_item_label uppercase">Services</div>
                  <div className="services_names">Design, Development</div>
                </div>
                <div className="image_container">
                  <img
                    src="https://images.unsplash.com/photo-1749812041360-c922df0e67a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Project Image"
                    className="max-w-3xs rounded-md"
                  />
                </div>
              </a>
            </li>
            <li className="list_of_works_item p-4">
              <a
                href="https://www.insurancebusinessmag.com/us/"
                target="_blank"
                className="list_of_works_link flex justify-between"
              >
                <div className="listofworks_number">3</div>
                <div>
                  <div className="work_item_label uppercase">Project</div>
                  <div className="project_name">
                    Insurance Business Magazine
                  </div>
                </div>
                <div>
                  <div className="work_item_label uppercase">Location</div>
                  <div className="loc_name">Global</div>
                </div>
                <div>
                  <div className="work_item_label uppercase">Services</div>
                  <div className="services_names">Design</div>
                </div>
                <div className="image_container">
                  <img
                    src="https://images.unsplash.com/photo-1747167843105-1da5888af928?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Project Image"
                    className="max-w-3xs rounded-md"
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </PageTransition>
  );
};

export default Hero;
