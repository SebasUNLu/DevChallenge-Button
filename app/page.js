import Image from "next/image";
import StyledButton from "./components/StyledButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <div className="w-9/12 ">
        <h1>Colores y estilos</h1>
        <br />
        <h2>Solid (default)</h2>
        <div className="flex flex-wrap gap-4 w-full">
          <StyledButton />
          <StyledButton color="primary" />
          <StyledButton color="secondary" />
          <StyledButton color="danger" />
        </div>
        <h2>Outline</h2>
        <div className="flex flex-wrap gap-4 w-full">
          <StyledButton variant="outline" />
          <StyledButton variant="outline" color="primary" />
          <StyledButton variant="outline" color="secondary" />
          <StyledButton variant="outline" color="danger" />
        </div>
        <h2>Text</h2>
        <div className="flex flex-wrap gap-4 w-full">
          <StyledButton variant="text" />
          <StyledButton variant="text" color="primary" />
          <StyledButton variant="text" color="secondary" />
          <StyledButton variant="text" color="danger" />
        </div>
        <br />
        <h1>Sombras</h1>
        <div className="flex flex-wrap gap-4 w-full">
          <StyledButton text="Shadow" />
          <StyledButton text="No shadow" disableShadow />
        </div>
        <br />
        <h1>Deshabilitado</h1>
        <div className="flex flex-wrap gap-4 w-full">
          <StyledButton color="secondary" text="Habilitado" />
          <StyledButton color="secondary" text="Deshabilitado" disable />
        </div>
        <br />
        <h1>Tamaños</h1>
        <div className="flex flex-wrap gap-4 w-full">
          <StyledButton color="primary" text="Pequeño" size="sm" />
          <StyledButton color="primary" text="Mediano" size="md" />
          <StyledButton color="primary" text="Grande" size="lg" />
        </div>
      </div>
    </main>
  );
}
