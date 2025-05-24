import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";



import ErrorA from "./pages/Error-400";
import ErrorB from "./pages/Error-401";
import ErrorC from "./pages/Error-403";
import ErrorPage from "./pages/ErrorPage";
import AddCustomers from "./pages/AddCustomers";
import AddOrders from "./pages/AddOrders";
import Users from "./pages/Users";
import AddUsers from "./pages/AddUsers";
import AboutUs from "./pages/guest/AboutUs";
import Contact from "./pages/guest/Contact";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const SedapGuestPage = React.lazy(() => import("./pages/guest/SedapGuestPage"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout")); 



import Loading from "./components/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Routes utama dengan layout utama */}
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomers />} />
          <Route path="/orders/add" element={<AddOrders />} />
          <Route path="/users" element={<Users />} /> 
          <Route path="/users/add" element={<AddUsers />} /> 
          <Route path="/Error-400" element={<ErrorA />} />
          <Route path="/Error-401" element={<ErrorB />} />
          <Route path="/Error-403" element={<ErrorC />} />
          <Route path="*" element={<ErrorPage />} />    
       
        </Route>
      
      {/* Layout untuk halaman tamu */}
      <Route element={<GuestLayout />}>
        <Route path="/guest" element={<SedapGuestPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
       
       
      </Route>

        {/* Auth Layout untuk halaman login/register/forgot */}
        <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
