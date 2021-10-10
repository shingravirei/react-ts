import Router from '../Router';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { useLocale } from '../../hooks';
import { translations } from '../../i18n';

const App = (): JSX.Element => {
    const [locale, changeLocale] = useLocale();

    return (
        <>
            <IntlProvider
                messages={translations[locale]}
                locale={locale}
                defaultLocale="en"
            >
                <button onClick={changeLocale}>
                    <FormattedMessage id="changeLocale" />
                </button>
                <Router />
            </IntlProvider>
        </>
    );
};

export default App;
