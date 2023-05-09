"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Movie({ params }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = params.id;

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`,
      params: {
        query: "stranger",
        offset: "0",
        limit_titles: "50",
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
  }, [id]);

  if (loading) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="p-20">{error}</div>
      </section>
    );
  }

  const details = data[0].details;

  return (
    <div className="px-20 py-8 flex items-center">
      <Image
        src={details.backgroundImage.url}
        alt=""
        width={480}
        height={270}
      />

      <div className="ml-8">
        <div className="m-1">
          <h3 className="text-2xl font-bold mb-4">{details.title}</h3>
          <p>{details.synopsis}</p>
        </div>

        <div className="flex flex-wrap mt-6">
          {details.cast.map((c) => {
            return (
              <div key={c.id} className="px-4 py-1 m-1 bg-red-100">
                <h5>{c.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
