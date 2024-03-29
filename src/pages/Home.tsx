import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main
      id="home"
      className="min-h-svh text-white pt-20 md:pt-32 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1"
    >
      <section className="text-center md:text-start text-sub flex flex-col justify-center px-6 md:px-8 lg:px-20 xl:px-0 gap-8 md:gap-6 xl:w-3/4 xl:mx-auto">
        <h4 className="uppercase text-2xl md:text-sm xl:text-[28px] tracking-heading5">
          So, you want to travel to{" "}
          <span className="block text-white text-7xl xl:text-[150px] mt-4 md:mt-2 xl:mt-6">
            Space
          </span>
        </h4>
        <p className="xl:text-2xl">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className="grid place-items-center">
        <Link
          to="/destination"
          className="p-6 lg:p-10 xl:p-14 bg-white text-primary rounded-full aspect-square uppercase text-2xl grid place-items-center relative hover:before:absolute hover:before:scale-150 hover:before:bg-white/15 hover:before:rounded-full hover:before:p-28"
        >
          explore
        </Link>
      </section>
    </main>
  );
};

export default Home;
