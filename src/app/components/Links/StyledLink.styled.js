import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #aa7d56;
  border-radius: ${ ({isRadius}) => isRadius ? '2rem' : 'none'};
  padding: 1rem 5rem;
  color: white;
  font-size: 1.75rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all .2s;
  @media(max-width: 425px){
    padding: .5rem 2.25rem;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #6d5036;
  }
`;