import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cookies from 'js-cookie';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import classNames from 'classnames';
import { LangIcon, Div } from './LanguageFlags.styled'

export default function LanguageFlags() {
  const languages = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'English',
    },
    {
      code: 'ua',
      country_code: 'ua',
      name: 'Ukrainian',
    },
  ];

  const { t } = useTranslation();

  const currentLanguageCode = cookies.get('i18next') || 'en';

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Div>
      <Tooltip title={t('language')} arrow>
        <IconButton onClick={handleClick} size="small">
          <LangIcon/>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            bgcolor: '#F8F8F8',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              width: 10,
              height: 10,
              bgcolor: '#F8F8F8',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        {/* title={name} key={code} arrow placement="left" */}
        {languages.map(({ code, name, country_code }) => (
          <Tooltip key={code}>
            <MenuItem
              style={{
                backgroundColor:
                  currentLanguageCode === code ? '#D8D8D8' : '#F8F8F8',
                border:
                  currentLanguageCode === code
                    ? '1px solid #989898'
                    : '#F8F8F8',
              }}
            >
              {/* <FlagsImg srcSet={`${gbFlag}`} src={gbFlag} alt="gbFlag" /> */}
              <IconButton
                className={classNames('dropdown-item')}
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
              >
                {name}
                {/* <div
                  className={`flag-icons flag-icons-${country_code}`}
                  style={{
                    opacity: currentLanguageCode === code ? 1 : 0.3,
                    width: '3rem',
                    height: '2rem',
                  }}
                ></div> */}
              </IconButton>
            </MenuItem>
          </Tooltip>
        ))}
      </Menu>
    </Div>
  );
}
