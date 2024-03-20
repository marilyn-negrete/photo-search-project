import styled from "styled-components";

export const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary.main};
  padding: 1rem;

  h4 {
    margin: 0;
  }

  .content {
    height: 11.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledCreateCollectionForm = styled.form`
  font-family: Arial, sans-serif;

  .form-actions {
    display: flex;
    justify-content: flex-end;
  }

  .field {
    margin: 1rem 0;

    label {
      display: block;

      .is-optional {
        margin-left: 0.25rem;
        color: #767676;
      }
    }

    input,
    textarea {
      font-family: Arial, sans-serif;
      width: 100%;
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid;
      margin: 0.5rem 0;
    }

    .is-required {
      color: red;
      font-size: 0.85rem;
    }
  }

  .field.private {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      width: unset;
      margin-right: 0.25rem;
    }
  }
`;

export const StyledCreatePostForm = styled.form`
  .post-area {
    margin-bottom: 1rem;

    .field {
      margin-bottom: 1rem;

      &.message {
        display: flex;

        img {
          margin-right: 0.5rem;
          border-radius: 50%;
        }

        textarea {
          width: 100%;
          border: none;
          padding: 0.5rem;
        }
      }

      &.search {
        display: flex;
        flex-direction: column;

        input {
          padding: 0.75rem;
          border: 1px solid transparent;
          border-radius: 2rem;
          background: #eeeeee;
        }
      }
    }

    .thumbnail {
      height: 12.5rem;
      background: white;
      border-style: dashed;
      border-color: #9393f0;
    }
  }

  .form-actions {
    text-align: end;
  }
`;

export const StyledPostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledPostItem = styled.div`
  width: calc(97% / 3);
  @media only screen and (max-width: 767px) {
    width: calc(97% / 2);
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  .post-header {
    display: flex;
    padding: 1rem;
    align-items: center;

    img {
      border-radius: 50%;
      margin-right: 1rem;
    }

    div {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      p {
        margin-top: 0;
        margin-bottom: 0.25rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  .post-body {
    p {
      margin: 0;
      padding: 0 1rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 15rem;
      @media only screen and (max-width: 480px) {
        height: 100%;
      }
    }
  }
`;
