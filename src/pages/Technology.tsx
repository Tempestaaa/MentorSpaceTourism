import { useState } from "react";
import Header from "../components/Header";
// import api from "../api/api";
import { technology } from "../../data/data.json";

// type technologyType = {
//   name: string;
//   description: string;
//   images: {
//     landscape: string;
//     portrait: string;
//   };
// };

const Technology = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<any>(null);
  // const [technology, setTechnology] = useState<technologyType[]>([]);
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const res = await api.get("/technology");
  //       setTechnology(res.data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchApi();
  // }, []);

  return (
    <div
      id="technology"
      className="min-h-svh text-white py-20 lg:pb-4 md:pt-44 flex flex-col gap-8 lg:gap-0"
    >
      <Header id="03" text="space lauch 101" />

      {/* {isLoading && <div className="text-center text-xl">Loading...</div>}
      {error && (
        <div className="text-center text-red-500 text-xl">
          Error: {error.message}
        </div>
      )} */}

      <section className="flex flex-col lg:flex-row-reverse gap-8">
        <picture className="lg:w-1/2 mx-auto lg:grid lg:place-items-center">
          {technology[current] && (
            <>
              <source
                media="(min-width: 768px)"
                srcSet={technology[current].images.portrait}
              />
              <img
                src={technology[current].images.landscape}
                alt={technology[current].name}
                className="lg:w-3/4 "
              />
            </>
          )}
        </picture>

        <div className="lg:w-1/2 flex flex-col lg:flex-row lg:items-center gap-6 lg:pl-20">
          <ul className="w-1/2 mx-auto flex lg:flex-col items-center justify-around lg:justify-center lg:gap-4 xl:gap-10">
            {technology &&
              technology.map((_, i) => (
                <li
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-10 lg:w-16 xl:w-20 lg:text-2xl aspect-square border-[1px] border-white/20 rounded-full grid place-items-center cursor-pointer ${
                    current === i
                      ? "bg-white text-primary"
                      : "bg-primary text-white"
                  }`}
                >
                  {i + 1}
                </li>
              ))}
          </ul>

          <div className="text-center lg:text-start">
            {technology[current] && (
              <>
                <p className="uppercase text-white/70 font-barlow tracking-subHeading2 xl:text-3xl">
                  The thermology...
                </p>
                <h1 className="uppercase text-3xl xl:text-6xl md:text-4xl mt-2">
                  {technology[current].name}
                </h1>
                <p className="md:w-3/4 lg:w-full xl:w-3/4 md:mx-auto lg:mx-0 mt-6 px-4 lg:px-0 text-sub xl:text-xl">
                  {technology[current].description}
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
