import React from "react";

import URLRoutes from "./routes/index";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <URLRoutes />
    </AuthProvider>
  );
}

export default App;
