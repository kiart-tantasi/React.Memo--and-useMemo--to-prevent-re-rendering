import "./styles.css";
import ReactMemo from "./components/ReactMemo";
import UseMemo from "./components/UseMemo";

export default function App() {
  return (
    <div className="App">
      <h1>Test React.memo()</h1>
      <ReactMemo />
      <h1>Test useMemo()</h1>
      <UseMemo />
    </div>
  );
}
