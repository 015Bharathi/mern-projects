import Button from "./components/Button";
import WithHoverEffectButton from "./components/hoc/WithHoverEffectButton";
const HoverButton = WithHoverEffectButton(Button);
function App() {
  return (
    <>
      <h1 className="bg-blue-900 text-blue-900">
        Component Design And Patterns
      </h1>
      <Button text="Button" />
      <HoverButton text="Hover-Button" />
    </>
  );
}

export default App;
