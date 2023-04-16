import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 8.9375rem;
      height: 2.375rem;

      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      border-radius: 8px;

      padding: 0.5rem;

      font-size: 0.875rem;

      .map {
        color: ${(props) => props.theme.purple};
      }
    }

    button {
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 2.375rem;
      height: 2.375rem;

      border-radius: 8px;

      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      margin-left: 0.75rem;

      cursor: pointer;

      opacity: 0.8;
      transition: opacity 400ms;

      &:hover {
        opacity: 1;
      }
      z-index: 0;
    }

    .notification {
      background-color: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};

      border-radius: 50%;

      width: 1.25rem;

      padding: 0.2rem;
      margin-left: -0.7rem;
      margin-top: -2.1rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.75rem;
      font-weight: 700;

      z-index: 1;
    }
  }
`
