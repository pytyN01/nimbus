import { Helmet } from "react-helmet";
import React from "react";

export default function HelmetHelper({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
