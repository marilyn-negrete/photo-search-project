import styled from "styled-components";

export const ProfileWrapper = styled.div`
    min-height: 9.3rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.secondary.main};
    justify-content: space-between;

    .profile {
        display: flex;

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

    h3 {
        margin: 0;
    }
`;

export const StyledItem = styled.div`
    width: 33%;
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