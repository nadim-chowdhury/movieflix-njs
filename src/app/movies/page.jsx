/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Movies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log(data);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://netflix54.p.rapidapi.com/search/",
      params: {
        query: "stranger",
        offset: "0",
        limit_titles: "20",
        limit_suggestions: "20",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": "1bbd68772amshecc83264a846602p124495jsn1647b855b36c",
        "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
      },
    };

    try {
      axios.request(options).then((response) => {
        setData(response.data);
        setLoading(false);
        setError(null);
      });
    } catch (error) {
      console.error(error);
      setData([]);
      setLoading(false);
      setError("Error fetching data.");
    }
  }, []);

  if (loading) {
    return (
      <section className="h-[80vh] flex justify-center items-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-[80vh] flex justify-center items-center">
        <div className="p-20">{error}</div>
      </section>
    );
  }

  return (
    <div className="flex flex-wrap justify-center py-8">
      {data.titles.map((m) => {
        const { id, type, title, synopsis, backgroundImage } = m.jawSummary;

        return (
          <div key={id} className="w-80 m-4">
            <Image
              src={backgroundImage.url}
              alt={title}
              className="rounded-t-lg"
              width={320}
              height={180}
            />

            <div className="bg-red-600 text-white px-2 rounded-b-lg">
              <h3 className="text-center font-bold text-xl py-2">
                {title.slice(0, 25)}...
              </h3>
              <p>{synopsis.slice(0, 90)}...</p>
              <button className="bg-white text-red-600 rounded-lg my-3 pb-[2px] px-4 hover:bg-red-100 transition duration-500">
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
