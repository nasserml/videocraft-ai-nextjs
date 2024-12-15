import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h2>Hello world</h2>
      <Button>Heloo</Button>
      <UserButton />
    </div>
  );
}
