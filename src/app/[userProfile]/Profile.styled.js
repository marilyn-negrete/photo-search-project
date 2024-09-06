import styled from "styled-components";

export const ProfileWrapper = styled.div`
    min-height: 9.3rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.secondary.main};
    justify-content: space-between;

    .profile {
        width: 25rem;
        display: flex;
        margin: 0 auto;
        @media only screen and (max-width: 425px) {
            max-width: 20rem;
        }   

        .profile-picture {
            display: flex;
            flex: 1;
            img {
                border-radius: 50px;
            }
        }

        .profile-details {
            flex: 3;

            .profile-name {
                display:flex;
                flex-direction: column;
                margin-bottom: 1rem;
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