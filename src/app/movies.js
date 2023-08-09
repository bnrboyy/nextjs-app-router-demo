import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Movies({props}) {
  const { title, id, poster_path, release_date } = props;
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <b className="text-ellipsis overflow-hidden line-clamp-1">{title}</b>
      <h2>{release_date}</h2>
      <Link href={`/movie/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
