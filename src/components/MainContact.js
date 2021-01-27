import React from "react";
import ContactForm from "../components/ContactForm";
import MainFooter from "./MainFooter";

export default function MainContact() {
  return (
    <div className="main">
      <section className="section parallax contact">
        <div className="parallax bean1">
          <div className="parallax bean2"></div>
        </div>

        <ContactForm />
      </section>
      <MainFooter />
    </div>
  );
}
