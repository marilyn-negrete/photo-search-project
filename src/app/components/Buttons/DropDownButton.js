import React from "react";
import { StyledDropDrownButton } from "./Button.styled";
import Image from "next/image";
import clsx from "clsx";

const DropDownButton = (props) => {
  const { options } = props;

  return (
    <StyledDropDrownButton className={`bottom`} >
      <button className="dropbtn">
        <Image width={25} height={25} alt="Create" src="/plus.svg" />
      </button>
      <div className="dropdown-content">
        {options.map((option) => (
          <a
            key={option.id}
            onClick={() => option.action(option.label)}
          >
            {option.label}
          </a>
        ))}
      </div>
    </StyledDropDrownButton>
  );
};
export default DropDownButton;
