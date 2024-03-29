import { useState } from "react";
import { useAuth } from "@hooks/auth";
import { Navigate } from "react-router-dom";
import { Button, Card } from "flowbite-react";

export default function Login() {
  const { login, token } = useAuth();

  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const [_error, setError] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();
    if (!(_email && _password)) return;

    login(_email, _password).catch((error) => {
      setError(error.message);
    });
  }

  if (token) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex min-h-full justify-center items-center p-20">
      <Card className="max-w-md w-1/2 py-4">
        <div className="flex flex-col w-full items-center">
          <img
            src="/logo.png"
            className="w-32 h-32 mb-5 p-2 rounded-full"
            style={{ boxShadow: "inset 0px 0px 30px rgba(0, 0, 0, 0.06)" }}
          />
          <p className="text-red-600 font-bold mb-10">{_error}</p>
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-full items-center"
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-left"
              >
                E-mail :
              </label>
              <input
                type="email"
                id="email"
                value={_email}
                onChange={handleEmailChange}
                className="bg-gray-50 border border-gray-30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="pwd"
                className="block mb-2 text-sm font-medium text-left"
              >
                Mot de passe :
              </label>
              <input
                type="password"
                id="password"
                value={_password}
                onChange={handlePasswordChange}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="●●●●●●●●●●"
              />
            </div>
            <Button type="submit" className="bg-pink-600 hover:bg-pink-800">
              Se connecter
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}

