import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Utilities
import LinearProgress from '@material-ui/core/LinearProgress';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LinearProgress />}>
        <Route exact path="/" component={lazy(() => import('./views/Home'))} />
        <Route
          exact
          path="/AboutUs"
          component={lazy(() => import('./views/AboutUs'))}
        />
        <Route
          exact
          path="/MutualFunds"
          component={lazy(() => import('./views/MutualFunds'))}
        />
        <Route
          exact
          path="/LongtermInvestment"
          component={lazy(() => import('./views/LongtermInvestment'))}
        />
        <Route
          exact
          path="/AmbitionGrowthInvestment"
          component={lazy(() => import('./views/AmbitionGrowthInvestment'))}
        />

        <Route
          exact
          path="/KYC"
          component={lazy(() => import('./views/Kyc'))}
        />
        <Route
          exact
          path="/OurMission"
          component={lazy(() => import('./views/Mission'))}
        />
        <Route
          exact
          path="/PrivacyPolicy"
          component={lazy(() => import('./views/PrivacyPolicy'))}
        />
      </Suspense>
    </Router>
  );
};

export default App;
