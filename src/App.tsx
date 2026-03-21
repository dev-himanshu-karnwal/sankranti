import AppRoutes from "./navigation/Routes";
import { ThemeProvider } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
