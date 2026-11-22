import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { InternationalizationProvider } from '@astryxdesign/core/i18n';
import { Theme } from '@astryxdesign/core/theme';
import { siteTheme } from './theme.js';
import './site.css';

const koreanLabels = { ko: { '@astryx.appShell.skipToContent': '본문으로 건너뛰기' } };

export function mount(Page) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <InternationalizationProvider locale="ko" overrides={koreanLabels}>
        <Theme theme={siteTheme} mode="dark">
          <Page />
        </Theme>
      </InternationalizationProvider>
    </StrictMode>,
  );
}
