import "normalize.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/global/globalStyles";
import BaseLayout from "./Components/layout/BaseLayout";
import DashboardScreen from "./Screens/Dashboard/DashboardScreen";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="/" element={<DashboardScreen />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

