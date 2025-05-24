import { useNavigate } from "react-router-dom";
import NotFoundImage from "../assets/notfound.png";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-6 text-center">
      <img
        src={NotFoundImage}
        alt="404 Illustration"
        className="w-full max-w-md mb-10"
      />
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
}
