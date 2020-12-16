import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';
import {Browse, Home, SignIn, SignUp} from './pages';
import {useAuthListener} from './hooks';

/**
 * The reason wy we pass user down here to IsUserRedirect is eventually user will be preopulated before it comes here
 */
export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
