import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: ${({theme}) => theme.colors.primary.main || 'unset' };
  border-radius: ${({isRadius}) => isRadius ? '2rem' : 'unset'};
  padding: 1rem 5rem;
  color: white;
  font-size: 1.75rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all .2s;

  @media(max-width: ${({theme}) => theme.breakpoints.lgMobile}){
    padding: .5rem 2.25rem;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.primary.dark};
  }
`;