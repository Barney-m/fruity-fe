import { ReactNode, useEffect, useState } from 'react';

// third-party
import { IntlProvider, MessageFormatElement } from 'react-intl';

// project import
import useConfig from '@fruity/hooks/useConfig';
import { I18n } from '@fruity/types/config';

// load locales files
const loadLocaleData = (locale: I18n) => {
  switch (locale) {
    case 'fr':
      return import('@fruity/configs/locales/fr.json');
    case 'ro':
      return import('@fruity/configs/locales/ro.json');
    case 'zh':
      return import('@fruity/configs/locales/zh.json');
    case 'en':
    default:
      return import('@fruity/configs/locales/en.json');
  }
};

// ==============================|| LOCALIZATION ||============================== //

interface Props {
  children: ReactNode;
}

const Locales = ({ children }: Props) => {
  const { i18n } = useConfig();

  const [messages, setMessages] = useState<Record<string, string> | Record<string, MessageFormatElement[]> | undefined>();

  useEffect(() => {
    loadLocaleData(i18n).then((d: { default: Record<string, string> | Record<string, MessageFormatElement[]> | undefined }) => {
      setMessages(d.default);
    });
  }, [i18n]);

  return (
    <>
      {messages && (
        <IntlProvider locale={i18n} defaultLocale="en" messages={messages}>
          {children}
        </IntlProvider>
      )}
    </>
  );
};

export default Locales;
