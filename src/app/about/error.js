"use client"; // client rendering
import React from "react";

function Error({ error }) {
  return (
    <div>
      Error Page.
      <p>Error Message : {error.message}</p>
    </div>
  );
}

export default Error;
