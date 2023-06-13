import React, { useState } from 'react';
import cookies from 'js-cookie';

import i18next from 'i18next';
import {
  Btn,
  LangSwitchWrapper,
  Input,
  Label,
} from './LangSwitcherSidebar.styled';

export default function LangSwitcher() {
  const languages = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'English',
    },
    {
      code: 'ua',
      country_code: 'ua',
      name: 'Українська',
    },
  ];

  const currentLanguageCode = cookies.get('i18next') || 'en';
  const [selectedLang, setSelectedLang] = useState(currentLanguageCode);

  const handleLangChange = event => {
    let lang = event.target.value;

    i18next.changeLanguage(lang);
    setSelectedLang(lang);
  };

  return (
    <LangSwitchWrapper>
      <Btn checked={selectedLang === languages[1].code}>
        <Input
          type="radio"
          name="switcher"
          id="lang-1"
          onChange={handleLangChange}
          checked={selectedLang === languages[1].code}
          value={languages[1].code}
        />
        <Label htmlFor="lang-1">UKR</Label>
      </Btn>

      <Btn checked={selectedLang === languages[0].code}>
        <Input
          type="radio"
          name="switcher"
          id="lang-2"
          onChange={handleLangChange}
          value={languages[0].code}
          checked={selectedLang === languages[0].code}
        />
        <Label htmlFor="lang-2">ENG</Label>
      </Btn>
    </LangSwitchWrapper>
  );
}
