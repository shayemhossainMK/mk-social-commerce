import React from "react";
import HomeHeader from "../../Home/HomeHeader/HomeHeader";
import signupImg from "../../../imgs/contactImg.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const SignupBangla = () => {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const cpassword = e.target.cpassword.value;

    if (password === cpassword) {
      createUserWithEmailAndPassword(email, password);
      toast("Email verification send!");
    } else {
      toast.error("Password not matched!");
    }
  };
  if (user || googleUser || facebookUser) {
    navigate("/dashboard");
  }
  return (
    <div>
      <HomeHeader></HomeHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center px-5 md:px-20 h-screen">
        <div className="flex justify-center items-center">
          <img className="rounded-2xl shadow-xl" src={signupImg} alt="" />
        </div>
        <div className="">
          <div className="shadow-xl rounded-2xl ">
            <div className="text-center py-5 uppercase">
              <h1 className="font-bold text-xl">Sign up</h1>
              <hr className="w-36  mx-auto" />
              <hr className="w-36  mx-auto" />
            </div>
            <form action="" className="p-5" onSubmit={handleSignup}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="নাম…"
                  name="name"
                  class="input input-sm bg-gray-100 w-full rounded-full max-w-xs"
                />
                <input
                  type="email"
                  placeholder="ইমেল…"
                  name="email"
                  class="input input-sm bg-gray-100 rounded-full w-full max-w-xs"
                />
                <input
                  type="password"
                  placeholder="পাসওয়ার্ড…"
                  name="password"
                  class="input input-sm bg-gray-100 w-full rounded-full max-w-xs"
                />
                <input
                  type="password"
                  placeholder="কনফার্ম পাসওয়ার্ড…"
                  name="cpassword"
                  class="input input-sm bg-gray-100 w-full  rounded-full max-w-xs"
                />
              </div>
              <div className="my-5 flex items-center justify-between border-2 rounded-full bg-gray-100 pr-5">
                <p className="px-2 md:px-3 text-gray-400 text-xs md:text-sm">
                  পেমেন্ট পদ্ধতি নির্বাচন করুন
                </p>
                <div className="flex item-center">
                  <div className="flex items-center  bg-secondary  m-1 rounded-full px-2">
                    <label class="label">
                      <span class="label-text text-white font-bold">
                        মোবাইল ব্যাংকিং
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="radio-3"
                      class="radio radio-sm radio-primary"
                      checked
                    />
                  </div>
                  <div className="flex items-center bg-secondary m-1 rounded-full px-2">
                    <label class="label">
                      <span class="label-text text-white font-bold">
                        ব্যাংক
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="radio-3"
                      class="radio radio-sm radio-primary"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="বিকাশ/নগদ/রকেট নাম্বার"
                  class="input input-sm bg-gray-100 w-full rounded-full max-w-xs"
                />
                <input
                  type="button"
                  value="পুনরায় ওটিপি পাঠান (১২০)"
                  class="btn btn-sm btn-primary text-white rounded-full w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="রেফারেল কোড লিখুন"
                  class="input input-sm bg-gray-100 w-full rounded-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="ওটিপি"
                  class="input  input-sm bg-gray-100 w-full  rounded-full max-w-xs"
                />
              </div>
              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm text-white  "
                >
                  জমা দিন
                </button>
              </div>
            </form>
            <div className="divider">OR</div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center mx-auto">
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
                Already have an account ? Please{" "}
                <Link className="text-secondary" to="/loginbangla">
                  login here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignupBangla;
