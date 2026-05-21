import { ManualView } from "./components/ManualView";
import { STATIC_EFFECTS, STATIC_SECTIONS } from "./data/manualContent";

export default function App() {
  return (
    <ManualView sections={STATIC_SECTIONS} effects={STATIC_EFFECTS} />
  );
}
