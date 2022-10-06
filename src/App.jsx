import { initializeFirebase } from "./components/firebase/config/firebase";
import { AuthProvider } from "./components/context/AuthContext";
import env from "./components/firebase/config/env.json";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";

function App() {
  initializeFirebase(env);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
