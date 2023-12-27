import styled from "styled-components";
import Link from "next/link";

export const StyledRadioLink = styled(Link)`
  text-decoration: none;
  background-color: #aa7d56;
  border-radius: 2rem;
  padding: 1rem 5rem;
  color: white;
  font-size: 1.75rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all .2s;

  &:hover {
    background-color: #6d5036;
  }
`;