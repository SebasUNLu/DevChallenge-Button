import Image from "next/image";
import StyledButton from "./components/StyledButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-9/12 flex flex-wrap gap-4">
        <div>
          <p className="text-black">default</p>
          <StyledButton />
        </div>
        <div>
          <p className="text-black">Disabled Shadow</p>
          <StyledButton disableShadow />
        </div>
        <div>
          <p className="text-black">Outline</p>
          <StyledButton variant="outline"/>
        </div>
        <div>
          <p className="text-black">Text</p>
          <StyledButton variant="text" />
        </div>
      </div>
    </main>
  );
}
