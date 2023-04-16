import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 6rem 0;

  .informations-container {
    width: 50%;

    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-title']};
    }

    p {
      font-size: 1.25rem;
      margin-top: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .items-container {
    margin-top: 5.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    span {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['base-text']};

      .emoji {
        width: 2rem;
        height: 2rem;

        margin: 0.4rem 0;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 0.75rem;
        color: ${(props) => props.theme.white};
      }

      .yellow-dark {
        background-color: ${(props) => props.theme['yellow-dark']};
      }

      .black {
        background-color: ${(props) => props.theme['base-text']};
      }

      .yellow {
        background-color: ${(props) => props.theme.yellow};
      }

      .purple {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`
