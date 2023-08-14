import { FormattedMessage, useIntl } from 'react-intl';

import en_US from './en-US';
import vi_VN from './vi-VN';

export const localeConfig = {
  vi_VN: vi_VN,
  en_US: en_US,
};

export const LocaleFormatter = ({ ...props }) => {
  const notChildProps = { ...props, children: undefined };

  return <FormattedMessage {...notChildProps} id={props.id} />;
};

export const useLocale = () => {
  const { formatMessage: _formatMessage, ...rest } = useIntl();
  const formatMessage = _formatMessage;

  return {
    ...rest,
    formatMessage,
  };
};
