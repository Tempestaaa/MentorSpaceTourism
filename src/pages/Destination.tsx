import { useState } from "react";
// import api from "../api/api";
import Header from "../components/Header";
import { destinations } from "../../data/data.json";

// type destinationType = {
//   name: string;
//   images: {
//     png: string;
//     webp: string;
//   };
//   description: string;
//   distance: string;
//   travel: string;
// };

const Destination = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<any>(null);
  // const [destinations, setDestinations] = useState<destinationType[]>([]);
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const res = await api.get("/destinations");
  //       setDestinations(res.data);
  //     } catch (err: any) {
  //       setError(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchApi();
  // }, []);

  return (
    <main
      id="destination"
      className="min-h-svh text-white py-20 md:pt-44 flex flex-col gap-8 lg:gap-12"
    >
      <Header id="01" text="choose your destination" />

      {/* {isLoading && <div className="text-center text-xl">Loading...</div>} */}
      {/* {error && (
        <div className="text-center text-red-500 text-xl">
          Error: {error.message}
        </div>
      )} */}

      <section className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          {destinations[current] && (
            <img
              src={destinations[current].images.webp}
              alt={destinations[current].name}
              className="px-8 w-[90%] lg:w-3/4 mx-auto lg:animate-[spin_300s_linear_infinite]"
            />
          )}
        </div>

        <div className="lg:w-1/2 flex flex-col items-center lg:items-start md:w-3/4 md:mx-auto">
          <menu className="flex items-center justify-center gap-6 py-2 uppercase font-barlow text-xl">
            {destinations.map((item, i) => (
              <li
                key={i}
                onClick={() => setCurrent(i)}
                className={`${
                  current === i
                    ? "border-white hover:border-white"
                    : "border-transparent"
                } border-b-4 py-3 hover:border-sub cursor-pointer md:text-xl`}
              >
                {item.name}
              </li>
            ))}
          </menu>

          <div className="w-[80%] lg:w-[90%] mx-auto lg:mx-0 mt-6 text-center lg:text-start space-y-4">
            {destinations[current] && (
              <>
                <h1 className="text-6xl md:text-8xl uppercase">
                  {destinations[current].name}
                </h1>
                <p className="min-h-36 text-sub md:text-xl">
                  {destinations[current].description}
                </p>
                <div className="flex items-center justify-around pt-8 border-t-2 border-white/20">
                  <div className="space-y-2 uppercase">
                    <p className="text-sub text-sm md:text-lg">avg. distance</p>
                    <p className="text-lg md:text-2xl">
                      {destinations[current].distance}
                    </p>
                  </div>
                  <div className="space-y-2 uppercase">
                    <p className="text-sub text-sm md:text-lg">est. travel</p>
                    <p className="text-lg md:text-2xl">
                      {destinations[current].travel}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;
