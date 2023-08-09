import Image from "next/image";
import Movies from "./movies";

export default async function Home() {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
  );
  const data = await result.json();
  return (
    <div>
      <div className="grid gap-4 grid-cols-fluid">
        {data.results?.map((item) => (
          <Movies key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
}
