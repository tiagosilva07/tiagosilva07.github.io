import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I´m <br />
                <span className="text-accent">Tiago Silva</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Full-stack engineer with a passion for code, blending
                development expertise with a strong background in technical
                support and problem-solving.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variants="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Downlaod CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
};

export default Home;
