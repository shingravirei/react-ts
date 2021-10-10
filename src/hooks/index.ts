import { useState } from 'react';

const useLocale = (): [string | string, () => void] => {
    type Locales = 'en' | 'pt-BR';
    const [locale, setLocale] = useState<Locales>('en');

    const changeLocale = () => {
        setLocale(locale === 'en' ? 'pt-BR' : 'en');
    };

    return [locale, changeLocale];
};

export { useLocale };
