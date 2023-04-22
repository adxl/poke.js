import { Card } from "flowbite-react";
import { useAuth } from "@hooks/auth";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="container flex justify-center">
      <Card className="max-w-sm w-full py-4">
        <p>Bonjour, {user.firstName} !</p>
      </Card>
    </div>
  )
}