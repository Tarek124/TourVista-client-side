import { useEffect, useState } from "react";
import MyAnimation from "./Animation - 1714470341784.json";
import Lottie from "lottie-react";

export default function FQA() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/fqa")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data)
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mb-6 text-center md:mb-8 lg:mb-10">
          <div className="max-w-lg mx-auto">
            <Lottie animationData={MyAnimation} loop={true} autoplay={true} />
          </div>
        </div>
        <div className="mb-12 flex flex-wrap justify-center gap-4 lg:grid-cols-2">
          {data.map((item) => (
            <div
              key={item._id}
              className="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
            >
              <div className="flex cursor-pointer justify-between">
                <p className="text-xl font-bold">{item?.question} </p>
                <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                  <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                  <div className="h-0.5 w-5 bg-[#276ef1]"></div>
                </div>
              </div>
              <p className="mb-4 mt-4">{item?.answer}</p>
            </div>
          ))}
        </div>

        <p className="text-center">
          Can’t find the answer you’re looking for? Reach out to our
          <span className="btn-link cursor-pointer">customer support team</span>
          .
        </p>
      </div>
    </section>
  );
}
