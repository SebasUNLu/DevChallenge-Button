import Image from "next/image";
import StyledButton from "./components/StyledButton";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const StyledDiv = ({ title, children }) => {
  return (
    <div className="flex items-start flex-wrap gap-x-4 py-2 px-4">
      {title && <h3 className="w-full">{title}</h3>}
      {children}
    </div>
  );
};

const StyledTitle = ({ title }) => {
  return <h2 className="mt-4 mb-2 shadow-md">{title}</h2>;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black">
      <Header />
      <div className="px-4 w-11/12">
        <StyledTitle title={"Colours"} />
        <StyledDiv>
          <StyledDiv title={"Default"}>
            <StyledButton />
          </StyledDiv>
          <StyledDiv title={"Primary"}>
            <StyledButton color="primary" />
          </StyledDiv>
          <StyledDiv title={"Secondary"}>
            <StyledButton color="secondary" />
          </StyledDiv>
          <StyledDiv title={"Danger"}>
            <StyledButton color="danger" />
          </StyledDiv>
        </StyledDiv>

        <StyledTitle title={"Style Variants"} />
        <StyledDiv>
          <StyledDiv title={"Solid (default)"}>
            <StyledButton />
          </StyledDiv>

          <StyledDiv title={"Outline"}>
            <StyledButton variant="outline" />
          </StyledDiv>

          <StyledDiv title={"Text"}>
            <StyledButton variant="text" />
          </StyledDiv>
        </StyledDiv>

        <StyledTitle title={"Shadows"} />
        <StyledDiv>
          <StyledButton text="Shadow" />
          <StyledButton text="No shadow" disableShadow />
        </StyledDiv>

        <StyledTitle title={"Disabled"} />
        <StyledDiv>
          <StyledButton color="secondary" text="Enabled" />
          <StyledButton color="secondary" text="Disabled" disable />
        </StyledDiv>

        <StyledTitle title={"Tamaños"} />
        <StyledDiv>
          <StyledButton color="primary" text="Small (sm)" size="sm" />
          <StyledButton color="primary" text="Medium (md)" size="md" />
          <StyledButton color="primary" text="Large (lg)" size="lg" />
        </StyledDiv>

        <StyledTitle title={"Icons"} />
        <StyledDiv>
          <StyledButton text="No Icon" />
          <StyledButton text="Home" color="primary" startIcon="home" />
          <StyledButton text="Star" color="secondary" endIcon="star" />
          <StyledButton text="Delete" color="danger" endIcon="delete" />
          <StyledButton
            text="Close"
            color="primary"
            startIcon="close"
            endIcon="close"
            variant="outline"
          />
          <StyledButton text="Stop!" disable startIcon="stop" endIcon="stop" />
        </StyledDiv>
      </div>
      <Footer />
    </main>
  );
}
