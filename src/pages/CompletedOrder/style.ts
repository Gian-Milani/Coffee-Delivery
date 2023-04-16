import styled from 'styled-components'

export const CompletedContainer = styled.div`
  h1 {
    margin-top: 5rem;
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  main {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 6.375rem;

    .orderInfo {
      padding: 2.5rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      border-radius: 6px 36px 6px 36px;
      border-left: 1px solid ${(props) => props.theme.yellow};
      border-top: 1px solid ${(props) => props.theme.yellow};
      border-right: 1px solid ${(props) => props.theme.purple};
      border-bottom: 1px solid ${(props) => props.theme.purple};
    }

    .location,
    .time,
    .payment {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem;
      border-radius: 100%;

      color: ${(props) => props.theme.white};
    }

    .info {
      line-height: 1.5rem;
      display: flex;
      flex-direction: column;
    }

    .location {
      .icon {
        background-color: ${(props) => props.theme.purple};
      }
    }

    .time {
      .icon {
        background-color: ${(props) => props.theme.yellow};
      }
    }

    .payment {
      .icon {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
