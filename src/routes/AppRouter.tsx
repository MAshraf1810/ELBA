import MainLayout from "@/components/layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
]);

// children: [
//     {
//       element: <ProtectedRoute />,
//       children: [
//         { path: "/", element: <Home /> },
//         { path: "payment", element: <Paymentpage /> },
//         { path: "bank-payment-success", element: <BankPaymentSucess /> },
//         { path: "reward-payment-success", element: <RewardPaymentSucess /> },
//       ],
//     },

//     { index: true, path: "course/:uid", element: <CourseIntro /> },

//     {
//       element: <GuestRoute />,
//       children: [
//         { path: "login", element: <Login /> },
//         { path: "register", element: <Register /> },
//         { path: "otp", element: <OTP /> },
//       ],
//     },
//   ],
