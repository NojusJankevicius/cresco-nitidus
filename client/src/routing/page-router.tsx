import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signedInSelector } from '../store/auth';
import routeStructure, { RouteData, RouteLayoutData, RoutePageData } from './route-structure';
import protectPageEnum from './auth-protectors/protect-page-enum';
import pageRouteMap from './page-route-map';

type RouteElement = ReturnType<typeof Route>;

const mapRoutesRecursive = (routeData: RouteData): RouteElement => {
  const Page = pageRouteMap[routeData.pageName];
  if ((routeData as RouteLayoutData).childRoutes) {
    const { pageName, path, childRoutes } = routeData as RouteLayoutData;

    return (
      <Route key={pageName} path={path} element={<Page />}>
        {childRoutes.map(mapRoutesRecursive)}
      </Route>
    );
  }
  // Route Protection
  const { auth, index, path } = routeData as RoutePageData;
  let authenticatedPage: React.ReactNode;

  if (auth) {
    authenticatedPage = protectPageEnum[auth](Page);
  } else {
    authenticatedPage = <Page />;
  }

  return (
    <Route
      key={routeData.pageName}
      path={path}
      index={index}
      element={authenticatedPage}
    />
  );
};

const routes = routeStructure.map(mapRoutesRecursive);

const EmptyComponent = () => <div />;

const PageRouter = () => {
  const signedIn = useSelector(signedInSelector);

  return (
    <BrowserRouter>
      <Routes>
        {
          signedIn !== null
            ? routes
            : <Route path="*" element={<EmptyComponent />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
