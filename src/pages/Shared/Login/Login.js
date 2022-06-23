import React, { useRef } from "react";
import HomeHeader from "../../Home/HomeHeader/HomeHeader";
import signupImg from "../../../imgs/contactImg.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  const resetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    toast("Reset email send!");
  };

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-primary text-xs mt-2 px-3">
          User or password are not valid!
          <span
            onClick={resetPassword}
            className="text-orange-400 ml-1 cursor-pointer underline"
          >
            Forget password?
          </span>
        </p>
      </div>
    );
  }
  if (user || googleUser || facebookUser) {
    navigate("/");
  }

  return (
    <div>
      <HomeHeader></HomeHeader>
      <div>
        <div className="grid grid-cols-1 md:flex justify-evenly items-center px-5 md:px-20 h-screen">
          <div className="flex justify-center items-center mt-16 md:mt-0">
            <img className="rounded-2xl shadow-xl" src={signupImg} alt="" />
          </div>

          <div className="shadow-xl rounded-2xl md:w-96  mt-16 md:mt-0">
            <div className="text-center py-5 uppercase">
              <h1 className="font-bold text-xl">Login</h1>
              <hr className="w-36  mx-auto" />
              <hr className="w-36  mx-auto" />
            </div>
            <form action="" className="p-5" onSubmit={handleLogin}>
              <div className="text-center">
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Email"
                  name="email"
                  class="input   bg-gray-100 w-full rounded-full max-w-xs"
                />
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                  name="password"
                  class="input mt-5 bg-gray-100 rounded-full w-full max-w-xs"
                />
              </div>
              {errorElement}
              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm text-white  "
                >
                  Login
                </button>
              </div>
            </form>
            <div className="divider">OR</div>

            <div className="grid grid-cols-1 gap-2 items-center text-center mx-auto">
              <div className="mx-auto">
                <button
                  onClick={() => signInWithGoogle()}
                  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
                >
                  <svg
                    class="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Continue with Google
                </button>
              </div>
              <div className="mt-3 md:mt-0">
                <button
                  onClick={() => signInWithFacebook()}
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55"
                >
                  <svg
                    class="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                    ></path>
                  </svg>
                  Continue with Facebook
                </button>
              </div>
            </div>
            <div className="text-center py-4">
              <p>
                New in Kamao ? Please{" "}
                <Link className="text-secondary" to="/signup">
                  Sign up{" "}
                </Link>
                here
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
