import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Utilities
import LinearProgress from '@material-ui/core/LinearProgress'

const App = () => (
  <Router>
    <Suspense fallback={<LinearProgress />}>
      <Route
        exact
        path="/AboutUs"
        component={lazy(() => import('./views/AboutUs'))}
      />
      <Route exact path="/" component={lazy(() => import('./views/Home'))} />
      <Route
        exact
        path="/InvestmentPlan"
        component={lazy(() => import('./views/InvestmentPlan'))}
      />

      <Route exact path="/KYC" component={lazy(() => import('./views/Kyc'))} />
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
)

export default App
