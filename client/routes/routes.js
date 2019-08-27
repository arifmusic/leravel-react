import { lazy } from "react";

//client
const SignInClient = lazy(() => import("~/pages/ClientPage/auth/signIn"));
const DashboardClient = lazy(() => import("~/pages/ClientPage/dashboard"));
const SignatureClient = lazy(() => import("~/pages/ClientPage/signature"));

//support
const SignInSupport = lazy(() => import("~/pages/SupportPage/auth/signIn"));
const DashboardSupport = lazy(() => import("~/pages/SupportPage/dashboard"));
const SignatureSupport = lazy(() => import("~/pages/SupportPage/signature"));

const NoMatch = lazy(() => import("~/pages/NoMatch"));

export default [
  {
    type: "client",
    path: "/",
    exact: true,
    auth: true,
    component: DashboardClient,
    fallback: SignInClient
  },
  {
    type: "client",
    path: "/signature",
    exact: true,
    auth: true,
    component: SignatureClient
  },
  {
    type: "support",
    path: "/support",
    exact: true,
    auth: true,
    component: DashboardSupport,
    fallback: SignInSupport
  },
  {
    type: "support",
    path: "/support/signature",
    exact: true,
    auth: true,
    component: SignatureSupport
  },
  {
    path: "",
    exact: false,
    auth: false,
    component: NoMatch
  }
];
