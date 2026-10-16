import { useCallback, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import PlacementTest from "./components/placement/PlacementTest";
export default function App() {
  const [test, setTest] = useState(false);
  const open = useCallback(() => setTest(true), []);
  const close = useCallback(() => setTest(false), []);
  return (
    <>
      <Header onTest={open} />
      <HomePage onTest={open} />
      <Footer />
      {test && <PlacementTest onClose={close} />}
    </>
  );
}
