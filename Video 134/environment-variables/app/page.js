"use client"

export default function Home() {
  // console.log(process.env.SECRET);
  return (
    <div className="home">Hey this is home The id is {process.env.NEXT_PUBLIC_ID}</div>
  );
}
