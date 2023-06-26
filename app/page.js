import Image from "next/image";
import StyledButton from "./components/StyledButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-9/12 flex flex-wrap gap-4">
        <StyledButton />
        <StyledButton disableShadow/>
      </div>
    </main>
  );
}
