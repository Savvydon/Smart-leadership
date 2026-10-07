import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="page">
      <section
        className="image-container"
        aria-label="Smart Leadership and Staff Management Training"
      >
        <img
          src="/smart-leadership-training.jpg"
          alt="Smart Leadership and Staff Management Training"
        />
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
