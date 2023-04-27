import Loading from "@/app/loading";
import Image from "next/image";
import { Suspense } from "react";

export default async function Movie({ params }) {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  // console.log(data);

  return (
    <div className="px-20 py-8 flex items-center h-screen">
      <Image
        src={main_data.backgroundImage.url}
        alt=""
        width={480}
        height={270}
      />

      <div className="ml-8">
        <div className="m-1">
          <h3 className="text-xl font-bold mb-4">{main_data.title}</h3>
          <p>{main_data.synopsis}</p>
        </div>

        <div className="flex flex-wrap mt-6">
          {main_data.cast.map((c) => {
            return (
              <div key={c.id} className="px-4 py-1 m-1 bg-slate-300">
                <h5>{c.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
