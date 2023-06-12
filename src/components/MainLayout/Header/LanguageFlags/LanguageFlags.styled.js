import styled from 'styled-components';
import LanguageIcon from '@mui/icons-material/Language';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  laptop: '@media screen and (min-width: 1200px)',
};

export const Div = styled.div`
  margin-right: 12px;

  ${media.tablet} {
    margin-right: 20px;
  }

  ${media.laptop} {
    margin-right: 27px;
  }
`;

export const LangIcon = styled(LanguageIcon)`
  width: 26px !important;
  height: 26px !important;
  color: var(--accent-background-color);

  ${media.tablet} {
    width: 32px !important;
    height: 32px !important;
  }
`;
