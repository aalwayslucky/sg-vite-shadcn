import "./App.css";
import YourApp from "./components/Comp";
import { ThemeProvider } from "./components/theme-provider";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-1/3">
        <YourApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
