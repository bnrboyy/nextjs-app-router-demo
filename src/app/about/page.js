import React from "react";

export default async function About() {
  const result = await fetch(
    "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs"
  );
  const data = await result.json();
  await delay(1000);
  return (
    <div>
      About
      <ul>
        {data.youtubes.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );

  // delay function 
  function delay(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout)
    })
  }
}
