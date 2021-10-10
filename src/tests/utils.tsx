/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    render as rtlRender,
    RenderOptions,
    RenderResult,
} from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { translations } from '../i18n';

const render = (
    ui: ReactElement<any>,
    renderOptions?: RenderOptions,
): RenderResult => {
    const Wrapper = ({ children }: { children: ReactNode }) => {
        return (
            <IntlProvider
                messages={translations['en']}
                locale={'en'}
                defaultLocale="en"
            >
                {children}
            </IntlProvider>
        );
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
