import styled from "styled-components";

export const ContentThumb = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  /* align-items: flex-start; */
  align-items: center;
  gap: 60px;
`;

export const Image = styled.img`
  max-width: 600px;
`;

export const TextThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 28px;
  color: var(--txt-color-blue);
`;

export const Instructions = styled.p`
  color: var(--txt-color-white);
  font-weight: 500;
  font-size: 18px;
`;

export const GlassInfo = styled.p`
  color: var(--txt-color-white);
  font-weight: 500;
  font-size: 18px;
`;
