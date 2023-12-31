import React from 'react';
import ReactDOM from 'react-dom';
import { BaseApp } from './BaseApp';
import { mergeStyles } from 'office-ui-fabric-react';

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      height: '100vh',
    },
  },
});

ReactDOM.render(<BaseApp />, document.getElementById('app'));
