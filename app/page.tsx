import Image from "next/image"
export default function Home() {
  return (
    <div>
      <div className="flex h-64 items-center justify-between w-[90%] p-4 bg-pink-200 shadow-lg">
        <h1 className=" text-white">Valentnes Day</h1>
      </div>
      <div className="bg-pink-200 flex justify-between gap-4 w-[90%]">
        <img src="/heart.svg" />
      </div>
      <div className=" flex justify-between gap-4 w-[90%]">
        <div className="bg-pink-200 h-64 w-full"></div>
        <div className="bg-pink-200 h-64 w-full"></div>
        <div className="bg-pink-200 h-64 w-full"></div>
        <div className="bg-pink-200 h-64 w-full"></div>
        <div className="bg-pink-200 h-64 w-full"></div>
        <div className="bg-pink-200 h-64 w-full"></div>
        <div className="bg-pink-200 h-64 w-full"></div>
        <div className="bg-pink-200 h-64 w-full"></div>

      </div>

    </div>
  )
}
