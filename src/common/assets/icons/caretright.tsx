import { Icon } from "@chakra-ui/react";
import React from "react";

const CaretRightIcon = ({ ...props }) => {
  const fillColor = props.fillColor;
  return (
    <Icon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.17999 6.08001V12.31V17.92C8.17999 18.88 9.33999 19.36 10.02 18.68L15.2 13.5C16.03 12.67 16.03 11.32 15.2 10.49L13.23 8.52001L10.02 5.31001C9.33999 4.64001 8.17999 5.12001 8.17999 6.08001Z"
          fill={fillColor || "white"}
        />
      </svg>
    </Icon>
  );
};

export { CaretRightIcon };
