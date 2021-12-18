import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./modules";
import { Loader } from "./components";

const HomeRoute = lazy(() => import('./routes/Home'));
const SignInRoute = lazy(() => import('./routes/SignIn'));
const SignUpRoute = lazy(() => import('./routes/SignUp'));
const ResetRoute = lazy(() => import('./routes/Reset'));

enum Themes {
  Light = 'light-theme',
  Dark = 'dark-theme',
}

export function App() {
  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    const body = document.body;
    let className = theme;

    if (!theme) {
      className = Themes.Light;
      window.localStorage.setItem('theme', className);
    }

    body.classList.add(className);
  }, []);

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
