"use client";
import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";

const ErrorPage = ({ error }) => {
  return (
    <div
      role="alert"
      aria-labelledby="error-title"
      aria-describedby="error-message"
    >
      <section className="bg-blue-50 min-h-screen flex-grow flex items-center justify-center">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <div className="flex justify-center">
              <FaExclamationCircle className="text-yellow-400 text-8xl" />
            </div>
            <div className="text-center">
              <h1 id="error-title" className="text-3xl font-bold mt-4 mb-2">
                Something Went Wrong
              </h1>
              <p id="error-message" className="text-gray-500 text-xl mb-10">
                {error ? error.toString() : "An unexpected error occurred."}
              </p>
              <Link
                href="/"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded transition duration-200"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
