import { useAuth } from "@hooks/auth";
import Nav from "@components/nav";

export default function ProtectedRoutes({ el: Element }) {
  const { token } = useAuth();

  if (!token) return <Navigate to="/login" />;

  return (
    <>
      <Nav />
      <main>
        <Element />
      </main>
    </>
  )
}