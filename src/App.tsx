import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./modules";
import { Loader } from "./components";

const HomeRoute = lazy(() => import('./routes/Home'));
const SignInRoute = lazy(() => import('./routes/SignIn'));
const SignUpRoute = lazy(() => import('./routes/SignUp'));
const ResetRoute = lazy(() => import('./routes/Reset'));

export function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/sign-in" element={<SignInRoute />} />
          <Route path="/sign-up" element={<SignUpRoute />} />
          <Route path="/reset" element={<ResetRoute />} />
        </Routes>
      </Suspense>
    </>
  );
}
