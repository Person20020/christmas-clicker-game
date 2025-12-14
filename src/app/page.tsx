"use client";
import ChristmasCatClick from "@/components/ChristmasCatClick";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <main className="">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className={"text-6xl self-center my-10"}>Cat Clicker</h1>
          <div className="self-center">
            <p className="{text-3xl font-bold self-center}">Count: {count}</p>
          </div>
          <div className="self-center">
            <ChristmasCatClick
              onClick={() => {
                setCount(count + 1);
                localStorage.setItem("count", count.toString());
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
