/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default async function Movies() {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";

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
  const main_data = data.titles;

  // console.log(main_data);

  return (
    <div className="flex flex-wrap justify-center py-8">
      {main_data.map((m) => {
        const { id, type, title, synopsis } = m.jawSummary;
        const imgSrc = m.jawSummary.backgroundImage.url;

        // const myLoader = () => {
        //   return imgSrc;
        // };

        return (
          <div key={id} className="w-80 m-4">
            <Image
              src={imgSrc}
              alt={title}
              className="rounded-t-lg"
              width={320}
              height={180}
            />

            <div className="bg-white px-2 rounded-b-lg">
              <h3 className="text-center font-bold text-xl py-2">
                {title.slice(0, 25)}...
              </h3>
              <p>{synopsis.slice(0, 90)}...</p>
              <button className="bg-slate-800 text-white rounded-lg my-3">
                <Link href={`/movies/${id}`} className="px-4 py-1">
                  More
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
