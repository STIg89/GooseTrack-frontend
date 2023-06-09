import styled from 'styled-components';
import LanguageIcon from '@mui/icons-material/Language';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const Div = styled.div`
margin-right: 12px;

${media.tablet} {
  margin-right: 20px;
}

${media.desktop} {
  margin-right: 27px;
}
`

export const LangIcon = styled(LanguageIcon)`
width: 26px !important;
height: 26px !important;
color: var(--accent-text-color);

${media.tablet} {
  width: 32px !important;
height: 32px !important;
}
`