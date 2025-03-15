import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello everyone</h1>
      <Button variant="outline">Submit</Button>
      <UserButton/>
    </div>

  );
}
