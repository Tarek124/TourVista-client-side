import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer, Bounce, toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AppContext } from "../../context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);

  let errorMsg = "";
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget),
      photoURL = form.get("photoURL"),
      name = form.get("name"),
      password = form.get("password"),
      email = form.get("email");

    if (/[A-Z]/.test(password)) {
      if (/[a-z]/.test(password)) {
        if (password.length >= 6) {
          createUser(email, password)
            .then((res) => {
              toast
                .success("Registration Successful", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  transition: Bounce,
                  onClose: () => {
                    navigate(location?.state ? location.state : "/");
                  },
                })
                .catch((err) => console.log(err));
              console.log(res);
            })
            .catch((err) => console.log(err));
        } else {
          alert("Password Length must be at least 6 character");
        }
      } else {
        alert("Password must contain at least one lowercase letter");
      }
    } else {
      alert("Password must contain at least one uppercase letter");
    }
  };
  return (
    <div className="flex justify-center md:my-20 my-4 ">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <form
        onSubmit={handleRegister}
        className="w-[450px] flex flex-col justify-center shadow-xl rounded p-8 "
      >
        <h1 className="text-3xl text-center font-semibold">
          Register your account
        </h1>
        <div className="border-b border-[#c5c5c5] my-6" />
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Your Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
            name="name"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </div>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            required
            name="photoURL"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
            required
            name="email"
          />
        </label>
        <div className="form-control">
          <label className="label">
            <span className="label-text  font-semibold">Password</span>
          </label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="password"
              className="input input-bordered w-full"
              required
              name="password"
            />
            <div className="cursor-pointer">
              {showPass ? (
                <FaEye
                  onClick={() => setShowPass(false)}
                  className="text-2xl absolute top-3 right-2"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPass(true)}
                  className="text-2xl absolute top-3 right-2"
                />
              )}
            </div>
          </div>
        </div>
        <div>{errorMsg}</div>
        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" required className="checkbox" />
          <p className="font-semibold text-sm">Accept Term & Conditions</p>
        </div>
        <button className="btn btn-success text-white mt-4">Register</button>
        <p className="text-center mt-4 text-sm">
          Have An Account ?
          <Link className="text-blue-500 font-semibold mx-1" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
