import css from "styled-jsx/css";
import styled from "styled-components";

export const HeroHeading = styled.h1`
    font-size: 2rem;
`;

export const SecondaryHeading = styled.h3`
    flex: 1;
    font-size: 1.5rem;
    padding-left: 1rem;
    margin: 0;
    color: ${({theme}) => theme.colors.primary.main};
`;

export const SubHeading = styled.h4`
    flex: 1;
    font-size: 1rem;
    margin: 0;

    ${({bottomSpacing}) => 'bottomSpacing' && css`
        margin-bottom: ${bottomSpacing + 'rem'};
    `}
`;
