import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #aa7d56;
  border-radius: 2rem;
  padding: 1rem 3rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all .2s;

  &:hover {
    background-color: #6d5036;
  }
`;

const RadioLink = (props) => {
  const { label, url } = props;
  return <StyledLink href={url}>{label}</StyledLink>
};

export default RadioLink;
