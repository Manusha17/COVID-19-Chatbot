import React from "react";

import { ReactComponent as UrlIcon } from "../icons/call.svg";
// import Link from "./Link";

const ContactLink = () => {
  return (
    <a href="tel:1999" className="tel-link">
      <UrlIcon className="url-icon" />
      <h1 className="tel-header"> Call 1999 </h1>
    </a>
  );
};

export default ContactLink;
