"use client";

import React, { FunctionComponent } from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ message }) => {
  return (
    <span className="text-[0.65rem] leading-3 text-red-500 absolute bottom-[-0.25rem] left-0 translate-y-[100%]">
      {message}
    </span>
  );
};

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
