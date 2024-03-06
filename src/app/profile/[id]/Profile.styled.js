import styled from "styled-components";

export const ProfileWrapper = styled.div`
    height: 9.3rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.secondary.main};
    justify-content: space-between;

    .profile {
        display: flex;

        .profile-picture {
            display: flex;
            flex: 1;
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

    h3 {
        margin: 0;
    }
`;