import Image from "next/image";
import React from "react";

export default async function MovieDetails({ params }) {
  const { id } = params;
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`,
    { next: { revalidate: 10 } }
  );
  const res = await data.json();
  return (
    <div>
      <p className="text-4xl">{res.title}</p>
      <p className="text-4xl">Runtime: {res.runtime}</p>
      <Image
        className="my-12 w-full"
        width={800}
        height={800}
        src={imagePath + res.backdrop_path}
        alt={res.title}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}
