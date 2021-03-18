import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Heading } from "@chakra-ui/react";

const DynamicText = ({}, ref: any) => {
  const textRef = useRef<any>();
  const [value, setValue] = useState("Random Text");
  useImperativeHandle(ref, () => ({
    updateText: (text: string) => {
      changeValue(text);
    },
  }));
  const changeValue = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Heading as="h1" size="sm" fontWeight="normal" ref={textRef} isTruncated maxWidth="container.sm">
      {value}
    </Heading>
  );
};

export default forwardRef(DynamicText);
