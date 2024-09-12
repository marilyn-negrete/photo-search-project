import styled from "styled-components";

export const ProfileWrapper = styled.div`
    min-height: 9.3rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.secondary.main};
    display: flex;
    align-items: center;

    .profile {
        width: 25rem;
        display: flex;
        margin: 0 auto;
        @media only screen and (max-width: 425px) {
            max-width: 20rem;
        }   

        .profile-picture {
            margin-right: 1rem;
            img {
                border-radius: 50px;
            }
        }

        .profile-details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 3;

            .profile-name {
                display:flex;
                flex-direction: column;
                margin-bottom: 1rem;
            }

            .profile-bio p {
                margin-top: 0;
            }

            .profile-stats {
                display:flex;
                justify-content: space-between;

                span {
                    display: block;
                }
            }
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

export const StyledItem = styled.div`
    margin-right: .25rem;
    div {
        display: flex;
        align-items: center;

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

export const StyledSharing = styled.div`
    border-radius: 5px;
    background-color: #ddffdd;
    padding: 1rem;
`;

export const StyledFormActions = styled.div`
    display: flex;
    justify-content: flex-end;
`;
