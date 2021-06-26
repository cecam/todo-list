import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthProvider from './context/AuthContext'

import PrivateRoute from "./components/layout/PrivateRoute";
import Layout from './components/layout/Layout'
import HomePage from "./pages/Home";
import TasksPage from "./pages/Tasks";


function App() {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <PrivateRoute path="/todo-list" component={TasksPage} />
            </Switch>
          </Router>
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;
