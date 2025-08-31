import { PrismaClient } from "@repo/prisma/client"


newClient = new PrismaClient()

export default function Home() {
  return (
    <div className="bg-amber-300 text-9xl">
      hi there
    </div>
  );
}
