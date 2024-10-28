import React from 'react'
import Script from 'next/script';

const contact = () => {
  return (
    <div>
        <Script>alert("Welcome to contact")</Script>
        Contact
        </div>
  )
};

export default contact

export const metadata = {
    title: "Contact Facebook - Connect to the world",
    description: "This is contact facebook and we can connect with the world using facebook",
  };