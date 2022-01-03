import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Header, AuthProvider } from "./modules";
import { Loader } from "./components";
import { useTheme } from "./hooks";

const HomeRoute = lazy(() => import('./routes/Home'));
const SignInRoute = lazy(() => import('./routes/SignIn'));
const SignUpRoute = lazy(() => import('./routes/SignUp'));
const ResetRoute = lazy(() => import('./routes/Reset'));
const NotFoundRoute = lazy(() => import('./routes/NotFoundRoute'));

import { DashboardRoute, CustomersRoute, SettingsRoute } from "./routes";

export function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
      setTheme(theme);
  }, []);

  return (
    <AuthProvider>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />

          <Route path="/sign-in" element={<SignInRoute />} />
          <Route path="/sign-up" element={<SignUpRoute />} />
          <Route path="/reset" element={<ResetRoute />} />

          <Route path="/dashboard" element={<DashboardRoute />} />
          <Route path="/customers" element={<CustomersRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />

          <Route path="/*" element={<NotFoundRoute />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}
