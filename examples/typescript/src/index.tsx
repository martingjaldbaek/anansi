import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import loadPolyfills from '@anansi/polyfill';
import { RouteChildrenProps } from 'react-router';
import { CacheProvider } from 'rest-hooks';
import 'style/main.scss';

import ErrorBoundary from 'components/ErrorBoundary';
import ErrorLoggerContext from 'lib/ErrorLoggerContext';

import App from './App';

setConfig({ pureSFC: true, pureRender: true, ignoreSFC: false });

function shouldUpdateScroll(
  prevRouterProps: RouteChildrenProps,
  { history: { action } }: RouteChildrenProps,
) {
  return action !== 'REPLACE';
}
const history = createBrowserHistory();

async function init() {
  await loadPolyfills();
  ReactDOM.render(
    <ErrorLoggerContext.Provider value={() => console.error('what what')}>
      <ErrorBoundary>
        <CacheProvider>
          <Router history={history}>
            <ScrollContext shouldUpdateScroll={shouldUpdateScroll}>
              <App />
            </ScrollContext>
          </Router>
        </CacheProvider>
      </ErrorBoundary>
    </ErrorLoggerContext.Provider>,
    document.body,
  );
}
init();
