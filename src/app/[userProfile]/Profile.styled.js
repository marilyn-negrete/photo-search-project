import styled from "styled-components";

export const ProfileHero = styled.div`
    min-height: 9.3rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.secondary.main};
    display: flex;
    align-items: center;

    .insights {
        width: 25rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        @media only screen and (max-width: 425px) {
            max-width: 20rem;
        }   
    }
`;

export const ProfileContent = styled.div`
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin: 1rem 0;
    }

    .collections-list {
        margin: 1rem 0;
    }
`;

export const StyledSharing = styled.div`
    border-radius: 5px;
    background-color: #ddffdd;
    padding: 1rem;
`;

export const StyledFormActions = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledAbout = styled.div `
    display: flex;

    .profile-picture {
        margin-right: 1rem;
        img {
            border-radius: 50px;
        }
    }

    .profile-bio {
        width: 100%;
        .profile-name {
            display: flex;
            flex-direction: column;
        }
    }
`

export const StyledStats = styled.div`
    display: flex;
    justify-content: space-between;
    
    .item {
        display: flex;
        align-items: center;
        flex-direction: column;

        img {
            margin-right: .25rem;
            object-fit: contain;
        }

        span {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
`;