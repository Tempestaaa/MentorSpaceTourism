import { useState } from "react";
import Header from "../components/Header";
import { crew } from "../../data/data.json";
// import api from "../api/api";

// type crewType = {
//   name: string;
//   images: {
//     png: string;
//     webp: string;
//   };
//   role: string;
//   bio: string;
// };

const Crew = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<any>(null);
  // const [crews, setCrews] = useState<crewType[]>([]);
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const res = await api.get("/crew");
  //       setCrew(res.data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchApi();
  // }, []);

  return (
    <main
      id="crew"
      className="min-h-svh text-white py-20 lg:pb-0 md:pt-44 flex flex-col gap-8"
    >
      <Header id="02" text="meet your crew" />

      {/* {isLoading && <div className="text-center text-xl">Loading...</div>} */}
      {/* {error && (
        <div className="text-center text-red-500 text-xl">
          Error: {error.message}
        </div>
      )} */}

      <section className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8">
        <div className="lg:w-1/2 lg:h-[648px] lg:grid lg:place-items-end px-2 md:px-0 mx-auto border-b-2 lg:border-b-0 border-white/20">
          {crew[current] && (
            <img
              src={crew[current].images.webp}
              alt={crew[current].name}
              className="mx-auto"
            />
          )}
        </div>

        <div className="lg:w-1/2 flex flex-col items-center lg:items-start mt-6 lg:mt-0 lg:pl-20">
          <div className="flex flex-col text-center lg:gap-4 lg:text-start lg:flex-grow lg:h-[580px]">
            {crew[current] && (
              <>
                <h2 className="uppercase text-xl md:text-2xl text-white/40">
                  {crew[current].role}
                </h2>
                <h1 className="uppercase text-3xl md:text-5xl max-h-[72px] lg:max-h-max">
                  {crew[current].name}
                </h1>
                <p className="w-3/4 px-4 lg:px-0 text-sub md:text-xl min-h-36 md:min-h-20 grid place-items-center md:place-items-start mx-auto lg:mx-0 flex-grow">
                  {crew[current].bio}
                </p>
              </>
            )}
          </div>

          <ul className="flex items-center gap-4 cursor-pointer mt-8">
            {crew.map((_, i) => (
              <li
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-4 aspect-square ${
                  current === i ? "bg-white" : "bg-white/20"
                } rounded-full`}
              ></li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Crew;
