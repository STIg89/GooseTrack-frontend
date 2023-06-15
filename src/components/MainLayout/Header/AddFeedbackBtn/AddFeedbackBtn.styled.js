import styled from 'styled-components';

const media = {
  mobile: '@media screen and (max-width: 374px)',
  tablet: '@media screen and (min-width: 768px)',
  laptop: '@media screen and (min-width: 1200px)',
};

export const StyledBtn = styled.button`
  width: 97px;
  height: 32px;
  border-radius: 10px;
  border: none;
  margin-left: 0;
  background-color: var(--accent-background-color);

  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: var(--btn-text-color);

  transition: background-color var(--animation);

  &:hover,
  :focus {
    cursor: pointer;
    background-color: var(--hover-btn-background-color);
  }

  ${media.mobile} {
    width: 131px;
    height: 46px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    position: absolute;

    left: 20px;
    bottom: 84px;

    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    background-color: var(--color-button-period-type);
    border-radius: 16px;

    &:hover,
    :focus {
      cursor: pointer;
      background-color: var(--hover-btn-background-color);
    }
  }

  ${media.tablet} {
    width: 130px;
    height: 42px;
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    font-size: 14px;
    line-height: 18px;
  }
`;
