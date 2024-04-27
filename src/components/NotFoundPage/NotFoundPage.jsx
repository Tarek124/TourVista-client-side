import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className=" bg-cover bg-center h-screen w-screen">
      <div className="glass">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center min-h-screen justify-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 not found</h1>
          <p className="mx-auto mb-2 max-w-lg text-sm  sm:text-base">
            is this page exist?{" "}
          </p>
          <NavLink to="/" className="glass rounded-full btn my-2 ">
            Back Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
