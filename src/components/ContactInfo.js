import React from "react";

export default function ContactInfo() {
  function isOpen() {
    const d = new Date();
    const h = d.getHours();

    if (h >= 8 && h < 17) {
      return "open";
    } else return "close";
  }
  const openOrclsed = isOpen();

  return (
    <div>
      <p>We are: {openOrclsed}</p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
    </div>
  );
}
