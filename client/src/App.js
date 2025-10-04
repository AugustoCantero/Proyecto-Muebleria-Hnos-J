import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [page, setPage] = useState("inicio");
  console.log(page);
  return (
    <>
      <Header setPage={setPage} />
      <main className="mainContent">
        {}</main>;
      <Footer />
    </>
  );
}
