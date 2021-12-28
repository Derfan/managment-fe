import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Header, AuthProvider } from "./modules";
import { Loader } from "./components";

const HomeRoute = lazy(() => import('./routes/Home'));
const SignInRoute = lazy(() => import('./routes/SignIn'));
const SignUpRoute = lazy(() => import('./routes/SignUp'));
const ResetRoute = lazy(() => import('./routes/Reset'));
const CustomersRoute = lazy(() => import('./routes/Customers'));

export function App() {
  return (
    <AuthProvider>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/sign-in" element={<SignInRoute />} />
          <Route path="/sign-up" element={<SignUpRoute />} />
          <Route path="/reset" element={<ResetRoute />} />
          <Route path="/customers" element={<CustomersRoute />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}
