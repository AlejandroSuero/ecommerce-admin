import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <header className="mt-10">
        <nav className="flex flex-row justify-center items-center gap-4">
          <h1>Admin Dashboard</h1>
          <Button>Home</Button>
        </nav>
      </header>
    </>
  )
}