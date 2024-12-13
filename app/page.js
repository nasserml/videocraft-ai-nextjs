import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Hello world</h2>
      <Button>Heloo</Button>
      <UserButton />
    </div>
  );
}
