import styled from "styled-components";

export const SocialMediaRound = styled.div`
  padding: 14.5px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 4.75rem;
  max-width: 4.75rem;
  border: 2px solid #F3D8FD;
  border-radius: 100%;
  @media only screen and (max-width: 576px)
  {
    height: 4rem;
    width: 4rem;
  }
  @media only screen and (max-width: 348px)
  {
    height: 2.8rem;
    width: 2.8rem;
  }
`;

export const SocialMediaIcon = styled.img`
  max-height: 2.68rem;
  max-width: 2.68rem;
  @media only screen and (max-width: 348px)
  {
    height: 1.6rem;
    width: 1.6rem;
  }
`;