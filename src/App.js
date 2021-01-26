import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading . . .</div>}>
      <Route exact path="/" component={lazy(() => import('./views/Home'))} />
      <Route
        exact
        path="/investmentPlan"
        component={lazy(() => import('./views/InvestmentPlan'))}
      />
    </Suspense>
  </Router>
);

export default App;
