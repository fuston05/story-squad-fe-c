import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import RenderParentDash from '../components/pages/ParentDash/RenderParentDash';
import {
  DashHome,
  LinkButton,
  ParentNav,
  ChildSignup,
  Help,
} from '../components/pages/ParentDash/components';
import { BrowserRouter as Router } from 'react-router-dom';

test('ParentDash renders without errors', () => {
  window.localStorage.setItem(
    'okta-token-storage',
    JSON.stringify({
      idToken: {
        claims: {
          sub: '00ulthapbErVUwVJy4x6',
        },
      },
    })
  );
  render(
    <RecoilRoot>
      <Router>
        <RenderParentDash setHeaderTitle={() => null} title={null} />
      </Router>
    </RecoilRoot>
  );
});

test('Nav renders without errors', () => {
  render(
    <Router>
      <ParentNav />
    </Router>
  );
});

test('DashHome renders without errors', () => {
  render(
    <Router>
      <DashHome />
    </Router>
  );
});

test('LinkButton renders without errors', () => {
  render(
    <Router>
      <LinkButton to="/login/add">Here's a Button</LinkButton>
    </Router>
  );
});

test('Child signup form renders without errors', () => {
  render(
    <Router>
      <ChildSignup />
    </Router>
  );
});

test('Help page renders without errors', () => {
  render(<Help />);
});
