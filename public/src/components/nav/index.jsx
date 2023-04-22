import { useAuth } from "@hooks/auth";

import { Button, Navbar } from "flowbite-react";
import React from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid"
import { Link } from "react-router-dom";

export default React.memo(function Header() {
  const { user } = useAuth();

  return (
    <Navbar fluid className="mb-5">
      <Link to={"/home"} className="flex items-center">
        <img src="/logo.png" className="w-10 h-10 mr-2"/>
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Poke
        </span>
      </Link>
      <div className="flex items-center">
        <span className="mx-5">Bonjour, {user.firstName}</span>
        <Link to={"/logout"}>
          <Button color="failure">
            <ArrowLeftOnRectangleIcon className="w-6 h-6 mr-2" />
            <span>Déconnexion</span>
          </Button>
        </Link>
      </div>
    </Navbar>
  )
})
