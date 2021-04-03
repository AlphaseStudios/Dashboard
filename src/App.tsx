import React from "react";
import "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./AppRouter";

export default function App() {
  return (
    <section>
      <Navbar
        items={[
          {
            title: "Home",
            path: "/",
            tooltip: "Home",
          },
          {
            title: "Features",
            path: "/#features",
            tooltip: "What can it do?",
          },
          {
            title: "Why",
            path: "/#why",
            tooltip: "Why use Alphabot dashboard?",
          },
          {
            title: "Privacy",
            path: "/privacy",
            tooltip: "Privacy and Terms of Conditions",
          },
          {
            title: "Developer",
            path: "/developer",
            tooltip: "Our API for you",
          },
          {
            title: "Dashboard",
            path: "/dashboard",
            tooltip: "Your bot-dashboard",
          },
        ]}
      ></Navbar>
      <Router>
        <div className="mt-4">
          <AppRouter />
        </div>
      </Router>
    </section>
  );
}
