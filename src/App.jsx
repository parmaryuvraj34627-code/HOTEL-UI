import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/* Header visible on all pages */}
      <Header />

      {/* Main Routes */}
      <main>
        <AppRoutes />
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
