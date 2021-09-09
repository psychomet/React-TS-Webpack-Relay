import React, {
  lazy,
  ReactElement,
  Suspense,
  useEffect,
  useState,
} from "react";

import "./App.less";
import "core/axios/global.interceptor";
import Relay from "core/relay";
import { useAppDispatch, useAppSelector } from "core/hooks";
import {
  fetchQuery,
  graphql,
  RelayEnvironmentProvider,
} from "react-relay/hooks";
import { setUser } from "store/authSlice";
import ErrorBoundary from "./ErrorBoundary";
import RootProvider from "core/providers";
import { ConfigProvider, Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import enUS from "antd/lib/locale-provider/en_US";
import { AppWhoAmIQuery } from "generated/AppWhoAmIQuery.graphql";
import ProtectedRoute from "shared/components/protected-route/ProtectedRoute";

const Auth = lazy(() => import("modules/auth"));

const MainLayout = lazy(() =>
  import("modules/Layout").then(({ MainLayout }) => ({
    default: MainLayout,
  }))
);

function App(): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchQuery<AppWhoAmIQuery>(
      Relay.environment,
      graphql`
        query AppWhoAmIQuery {
          whoAmI {
            id
            name
            lastname
            email
          }
        }
      `,
      {}
    ).subscribe({
      next: (data) => {
        const { whoAmI } = data;
        if (whoAmI) dispatch(setUser(whoAmI));
      },
    });
  }, [dispatch]);

  return (
    <ConfigProvider locale={enUS}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/auth" component={Auth} />
            <ProtectedRoute>
              <Route path="/" component={MainLayout} />
            </ProtectedRoute>
          </Switch>
        </Router>
      </Layout>
    </ConfigProvider>
  );
}

function RelayEnvironmentWrapper({ children }): ReactElement {
  return (
    <RelayEnvironmentProvider environment={Relay.environment}>
      <ErrorBoundary fallback={<>Error</>}>
        <Suspense fallback={<>Suspense</>}>{children}</Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
}

export default function ProviderWrapper(): ReactElement {
  const [loading, setLoading] = useState<boolean>(false);

  if (loading) {
    return <>Loading</>;
  }
  return (
    <RootProvider>
      <RelayEnvironmentWrapper>
        <App />
      </RelayEnvironmentWrapper>
    </RootProvider>
  );
}
