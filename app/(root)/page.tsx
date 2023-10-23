import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <>
      <header className="h-20 w-full">
        <nav className="flex items-center justify-between h-full mx-10">
          <h1 className="uppercase font-bold text-2xl tracking-tighter antialiased">Admin Dashboard</h1>
          <UserButton afterSignOutUrl="/" />
        </nav>
      </header>
    </>
  );
}