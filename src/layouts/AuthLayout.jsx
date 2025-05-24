import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md flex flex-col justify-between h-fit">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-6 justify-center">
          <div className="text-2xl font-bold text-[#FFA800]">🍽️</div>
          <h1 className="text-xl font-bold">
            <span className="text-gray-900">SEDA</span>
            <span className="text-[#FFA800]">P.</span>
          </h1>
        </div>

        {/* Isi Halaman */}
        <Outlet />

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          © 2025 Sedap Restaurant Admin Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
}
