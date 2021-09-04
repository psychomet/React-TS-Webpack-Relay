import React, {lazy, ReactElement, Suspense, useEffect, useState,} from "react";

import "./App.css";
import "core/axios/global.interceptor";
import * as Relay from "core/relay";
import {useAppDispatch, useAppSelector} from "core/hooks";
import {fetchQuery, graphql, RelayEnvironmentProvider,} from "react-relay/hooks";
import {selectRelay, setToken} from "store/authSlice";
import ErrorBoundary from "./ErrorBoundary";
import RootProvider from "core/providers";
import {Environment} from "relay-runtime";
import {ConfigProvider, Layout} from "antd";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import enUS from "antd/lib/locale-provider/en_US";

const Auth = lazy(() => import("modules/auth"));

// const Auth = lazy(() =>
//   import("./app/modules/auth/index").then(({ Auth }) => ({ default: Auth }))
// );

const MainLayout = lazy(() =>
    import("modules/Layout").then(({MainLayout}) => ({
        default: MainLayout,
    }))
);

// function App() {
//   return (
//     <ConfigProvider locale={enUS}>
//       <Layout>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Router>
//             <Switch>
//               <Route path="/auth" component={Auth} />
//               <Route exact path="/" component={MainLayout} />
//             </Switch>
//           </Router>
//         </Suspense>
//       </Layout>
//     </ConfigProvider>
//   );
// }
//
// export default App;

function App(): ReactElement {
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchQuery<any>(
            Relay.Environment,
            graphql`
                query AppWhoAmIQuery {
                    whoAmI {
                        id
                        name
                        lastname
                    }
                }
            `,
            {}
        ).subscribe({
            next: (data) => {
                if (data.me) dispatch(setToken(data.me));
            },
        });
    }, [dispatch]);

    return (
        <ConfigProvider locale={enUS}>
            <Layout>
                <Router>
                    <Switch>
                        <Route path="/auth" component={Auth}/>
                        <Route exact path="/" component={MainLayout}/>
                    </Switch>
                </Router>
            </Layout>
        </ConfigProvider>
    );
}

function RelayEnvironmentWrapper({children}): ReactElement {
    const relay: Environment = useAppSelector(selectRelay);

    return (
        <RelayEnvironmentProvider environment={relay}>
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
                <App/>
            </RelayEnvironmentWrapper>
        </RootProvider>
    );
}

