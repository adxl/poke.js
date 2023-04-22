import { useAuth } from "@hooks/auth";
import { useEffect } from "react";

export default function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return (
    <div className="container">
      <p>Déconnexion réussie !</p>
    </div>
  )
}