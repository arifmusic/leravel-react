import { lazy } from "react";

//client
import SignInClient from  "~/pages/ClientPage/auth/signIn";
const DashboardClient = lazy(() => import("~/pages/ClientPage/dashboard"));
const OpenTiket = lazy(() => import("~/pages/ClientPage/OpenTiket"));

//support
import SignInSupport from "~/pages/SupportPage/auth/signIn";
const DashboardSupport = lazy(() => import("~/pages/SupportPage/dashboard"));
const SignatureSupport = lazy(() => import("~/pages/SupportPage/signature"));

import NoMatch from "~/pages/NoMatch";

export default [
  {
    type: "client",
    path: "/client-home",
    exact: true,
    auth: true,
    component: DashboardClient,
    fallback: SignInClient
  },
  {
    type: "client",
    path: "/client-open-tiket",
    exact: true,
    auth: true,
    component: OpenTiket
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
