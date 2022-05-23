var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// empty-module:~/services/supabase.client
var require_supabase = __commonJS({
  "empty-module:~/services/supabase.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// empty-module:~/api/supabase-auth.client
var require_supabase_auth = __commonJS({
  "empty-module:~/api/supabase-auth.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:c:\dev\budget-management-remix\app\root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();

// app/api/supabase-auth.server.ts
init_react();

// app/services/supabase.server.ts
init_react();
var import_node = require("@remix-run/node");
var import_supabase_js = require("@supabase/supabase-js");

// package.json
var name = "remix-template-vercel";

// app/services/supabase.server.ts
if (!process.env.SUPABASE_URL) {
  throw new Error("SUPABASE_URL is required");
}
if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error("SUPABASE_ANON_KEY is required");
}
var supabaseOptions = {
  schema: "public",
  persistSession: true,
  autoRefreshToken: true,
  detectSessionInUrl: true,
  headers: { "x-application-name": name }
};
var supabaseUrl = process.env.SUPABASE_URL;
var supabaseKey = process.env.SUPABASE_ANON_KEY;
var supabaseAdmin = (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey, supabaseOptions);
var authCookie = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "sb:token",
    expires: new Date(Date.now() + 3600),
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
    secrets: ["aStrongSecret"],
    secure: false
  }
});

// app/api/supabase-auth.server.ts
function setAuthSession(session, accessToken, refreshToken) {
  session.set("access_token", accessToken);
  session.set("refresh_token", refreshToken);
  return session;
}
function hasAuthSession(session) {
  try {
    return session.has("access_token");
  } catch {
    return false;
  }
}
async function hasActiveAuthSession(session) {
  try {
    if (!hasAuthSession(session))
      return false;
    const { user, error } = await getUserByAccessToken(session.get("access_token"));
    if (error || !user)
      return false;
    return true;
  } catch {
    return false;
  }
}
async function refreshUserToken(session) {
  try {
    const { data, error } = await supabaseAdmin.auth.api.refreshAccessToken(session.get("refresh_token"));
    if (error || !data || !data.access_token || !data.refresh_token) {
      return { error: (error == null ? void 0 : error.message) || "Something went wrong" };
    }
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token
    };
  } catch {
    return { error: "Something went wrong" };
  }
}
async function loginUser({
  email,
  password
}) {
  try {
    const { data: sessionData, error: loginError } = await supabaseAdmin.auth.api.signInWithEmail(email, password);
    if (loginError || !sessionData || !sessionData.access_token || !sessionData.refresh_token) {
      return { error: (loginError == null ? void 0 : loginError.message) || "Something went wrong" };
    }
    return {
      accessToken: sessionData.access_token,
      refreshToken: sessionData.refresh_token
    };
  } catch {
    return { error: "Something went wrong" };
  }
}
async function registerUser({
  email,
  password
}) {
  try {
    const { user, error: signUpError } = await supabaseAdmin.auth.signUp({
      email,
      password
    });
    if (signUpError || !user) {
      return { error: (signUpError == null ? void 0 : signUpError.message) || "Something went wrong" };
    }
    return { user };
  } catch {
    return {
      error: "Something went wrong"
    };
  }
}
async function signOutUser(session) {
  try {
    const { error } = await supabaseAdmin.auth.api.signOut(session.get("access_token"));
    if (error) {
      return { done: false, error: (error == null ? void 0 : error.message) || "Something went wrong" };
    }
    return { done: true };
  } catch {
    return {
      done: false,
      error: "Something went wrong"
    };
  }
}
async function getUserByAccessToken(accessToken) {
  try {
    const { user, error } = await supabaseAdmin.auth.api.getUser(accessToken);
    if (error || !user) {
      return { error: (error == null ? void 0 : error.message) || "Something went wrong" };
    }
    return { user };
  } catch {
    return {
      error: "Something went wrong"
    };
  }
}

// route:c:\dev\budget-management-remix\app\root.jsx
var import_node2 = require("@remix-run/node");
var import_react3 = require("@remix-run/react");

// app/components/NavBar.tsx
init_react();
var import_react2 = require("@remix-run/react");
function NavBar({ user }) {
  return /* @__PURE__ */ React.createElement("header", {
    className: "flex place-content-center bg-blue-700 text-white w-full gap-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/"
  }, "Home")), user ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/profile"
  }, "Profile")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
  }, "Budget Management")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.Form, {
    method: "post",
    action: "/api/logout"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("form", {
    action: "https://www.paypal.com/donate",
    method: "post",
    target: "_top"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "hosted_button_id",
    value: "34WKXMAKEYBX4"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "image",
    src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",
    name: "submit",
    title: "PayPal - The safer, easier way to pay online!",
    alt: "Donate with PayPal button"
  }), /* @__PURE__ */ React.createElement("img", {
    alt: "",
    src: "https://www.paypal.com/en_US/i/scr/pixel.gif",
    width: "1",
    height: "1"
  })))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/login"
  }, "Login")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/register"
  }, "Register"))));
}

// app/styles/app.css
var app_default = "/build/_assets/app-V2MIUNBG.css";

// route:c:\dev\budget-management-remix\app\root.jsx
function meta() {
  return {
    title: "Budget Management",
    description: "Bare minimum and un-opinionated example using Remix to implement Supabase's email/password and social auth"
  };
}
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
async function loader({ request }) {
  const authSession = await authCookie.getSession(request.headers.get("Cookie"));
  const { user, error: getUserError } = await getUserByAccessToken(authSession.get("access_token"));
  console.log(getUserError);
  return (0, import_node2.json)({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
    },
    user
  });
}
function Layout({ children }) {
  const { user } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-screen flex flex-col justify-between items-center"
  }, /* @__PURE__ */ React.createElement(NavBar, {
    user
  }), /* @__PURE__ */ React.createElement("div", {
    className: "px-5"
  }, children), /* @__PURE__ */ React.createElement("footer", {
    className: "w-full flex place-content-center bg-rose-700 text-white py-6 gap-6"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/westbrookc16/budget-management-remix"
  }, "Github"), /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/chriswestbrook"
  }, "Twitter")));
}
function App() {
  const loaderData = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: { margin: 0 }
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react3.Outlet, null)), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.ENV = ${JSON.stringify(loaderData.ENV)}`
    }
  }), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}
function CatchBoundary() {
  const caught = (0, import_react3.useCatch)();
  switch (caught.status) {
    case 404: {
      return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
        style: { textAlign: "center" }
      }, /* @__PURE__ */ React.createElement("h1", null, "Not Found"), /* @__PURE__ */ React.createElement("h2", null, "Looks like the page you are looking for doesn't exist!"), /* @__PURE__ */ React.createElement(import_react3.Link, {
        to: "/"
      }, "Home page")));
    }
    case 401: {
      return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "You are not logged in"), /* @__PURE__ */ React.createElement("p", null, "Please ", /* @__PURE__ */ React.createElement(import_react3.Link, {
        to: "/login"
      }, "Login"))));
    }
  }
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Caught"), /* @__PURE__ */ React.createElement("p", null, "Status: ", caught.status), /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(caught.data, null, 2)))));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "The stack trace is:"), /* @__PURE__ */ React.createElement("pre", null, error.stack)));
}

// route:c:\dev\budget-management-remix\app\routes\api\auth.callback.jsx
var auth_callback_exports = {};
__export(auth_callback_exports, {
  action: () => action,
  default: () => authCallback
});
init_react();
var import_react4 = require("react");
var import_node3 = require("@remix-run/node");
var import_react5 = require("@remix-run/react");
var import_supabase3 = __toESM(require_supabase());
async function action({ request }) {
  const formData = await request.formData();
  const formDataSession = formData.get("session");
  const event = formData.get("event");
  const redirectTo = String(formData.get("redirectTo")) || "/profile";
  if (!formDataSession || !event) {
    return (0, import_node3.redirect)("/login");
  }
  const SupabaseSession = JSON.parse(formDataSession);
  let session = await authCookie.getSession(request.headers.get("Cookie"));
  const { access_token: accessToken, refresh_token: refreshToken } = SupabaseSession;
  session = setAuthSession(session, accessToken, refreshToken || "");
  if (event === "SIGNED_IN") {
    return (0, import_node3.redirect)(redirectTo, {
      headers: {
        "Set-Cookie": await authCookie.commitSession(session)
      }
    });
  }
  (0, import_node3.redirect)("/login");
}
function authCallback() {
  const fetcher = (0, import_react5.useFetcher)();
  const [searchParams] = (0, import_react5.useSearchParams)();
  (0, import_react4.useEffect)(() => {
    const { data: authListener } = import_supabase3.supabaseClient.auth.onAuthStateChange((event, session) => {
      const formData = new FormData();
      formData.append("session", JSON.stringify(session));
      formData.append("event", event);
      formData.append("redirectTo", searchParams.get("redirectTo") || "/profile");
      fetcher.submit(formData, { method: "post" });
    });
    return () => {
      authListener == null ? void 0 : authListener.unsubscribe();
    };
  }, [fetcher, searchParams]);
  return null;
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated.jsx
var authenticated_exports = {};
__export(authenticated_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => BudgetManagementLayout,
  loader: () => loader2
});
init_react();

// app/policies/authenticated.server.ts
init_react();
var import_node4 = require("@remix-run/node");
async function authenticated(request, successFunction, failureFunction, redirectTo) {
  try {
    let session = await authCookie.getSession(request.headers.get("Cookie"));
    const url = new URL(request.url);
    const redirectUrl = redirectTo || `${url.origin}${url.pathname}${url.search}`;
    const isActiveAuthSession = await hasActiveAuthSession(session);
    if (!isActiveAuthSession) {
      const { accessToken, refreshToken, error } = await refreshUserToken(session);
      if (error || !accessToken || !refreshToken) {
        throw new Error("refreshUserToken " + error);
      }
      session = setAuthSession(session, accessToken, refreshToken);
      return (0, import_node4.redirect)(redirectUrl, {
        headers: {
          "Set-Cookie": await authCookie.commitSession(session)
        }
      });
    }
    const { user, error: accessTokenError } = await getUserByAccessToken(session.get("access_token"));
    if (accessTokenError || !user || !user.email || !user.id) {
      throw new Error("getUserByAccessToken " + accessTokenError);
    }
    return await successFunction(user);
  } catch (error) {
    console.log(error);
    return failureFunction();
  }
}
async function getAccessToken(request) {
  let session = await authCookie.getSession(request.headers.get("Cookie"));
  const userAccessToken = session.get("access_token");
  return userAccessToken;
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated.jsx
var import_node5 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");
async function loader2({ request }) {
  return authenticated(request, (user) => {
    return (0, import_node5.json)({ user });
  }, () => {
    throw new Response("Unauthorized", { status: 401 });
  });
}
function BudgetManagementLayout() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react6.Outlet, null)));
}
function CatchBoundary2() {
  const caught = (0, import_react6.useCatch)();
  if (caught.status === 401) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "You are not logged in"), /* @__PURE__ */ React.createElement("p", null, "Please ", /* @__PURE__ */ React.createElement(import_react6.Link, {
      to: "/login?redirectTo=profile"
    }, "Login")));
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\transactions.delete.$transactionID.$categoryID.tsx
var transactions_delete_transactionID_categoryID_exports = {};
__export(transactions_delete_transactionID_categoryID_exports, {
  action: () => action2,
  default: () => DeleteTransaction,
  loader: () => loader3
});
init_react();
var import_node6 = require("@remix-run/node");
var import_node7 = require("@remix-run/node");
var import_react7 = require("@remix-run/react");
var loader3 = async ({ request, params }) => {
  const { data } = await supabaseAdmin.from("transactions").select().match({ id: params.transactionID }).limit(1).single();
  return data;
};
var action2 = ({ request, params }) => {
  return authenticated(request, async () => {
    const returnData = { formError: "" };
    const data = await request.formData();
    const _action = data.get("_action");
    if (_action === "Yes") {
      const { error } = await supabaseAdmin.from("transactions").delete().match({ id: params.transactionID });
      if (error) {
        returnData.formError = error.message;
        return (0, import_node7.json)(returnData, 400);
      } else {
        return (0, import_node6.redirect)(`/transactions/${params.categoryID}`);
      }
    } else {
      return (0, import_node6.redirect)(`/transactions/${params.categoryID}`);
    }
  }, () => {
    throw new Response("unauthorized", { status: 401 });
  });
};
function DeleteTransaction() {
  const actionData = (0, import_react7.useActionData)();
  const { name: name2 } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, "Are you sure you want to delete ", name2, "?")), /* @__PURE__ */ React.createElement(import_react7.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "Yes"
  }, "Yes"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "No"
  }, "No")), (actionData == null ? void 0 : actionData.formError) && /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, actionData == null ? void 0 : actionData.formError));
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\categories\delete\$categoryID\$budgetID.tsx
var budgetID_exports = {};
__export(budgetID_exports, {
  action: () => action3,
  default: () => DeleteCategory,
  loader: () => loader4
});
init_react();
var import_node8 = require("@remix-run/node");
var import_node9 = require("@remix-run/node");
var import_react8 = require("@remix-run/react");
var loader4 = async ({ request, params }) => {
  const { data: category } = await supabaseAdmin.from("categories").select().match({ id: params.categoryID }).limit(1).single();
  return (0, import_node8.json)({ category });
};
var action3 = async ({ request, params }) => {
  return authenticated(request, async () => {
    const data = await request.formData();
    const _action = data.get("_action");
    if (_action === "delete") {
      await supabaseAdmin.from("categories").delete().match({ id: params.categoryID });
      return (0, import_node9.redirect)(`/categories/${params.budgetID}`);
    } else {
      return (0, import_node9.redirect)(`/categories/${params.budgetID}`);
    }
  }, () => {
    throw new Response("unauthorized", { status: 401 });
  });
};
function DeleteCategory() {
  const { category } = (0, import_react8.useLoaderData)();
  const { name: name2 } = category;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, "Are you sure you want to delete ", name2, '"')), /* @__PURE__ */ React.createElement(import_react8.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "delete"
  }, "Delete"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "no"
  }, "Cancel")));
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\transactions.$categoryID.tsx
var transactions_categoryID_exports = {};
__export(transactions_categoryID_exports, {
  action: () => action4,
  default: () => Transactions,
  loader: () => loader5,
  meta: () => meta2
});
init_react();
var import_node10 = require("@remix-run/node");
var import_react9 = require("@remix-run/react");

// app/utils/date.js
init_react();
function isValidDate(dateString) {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
    return false;
  var parts = dateString.split("/");
  var day = parseInt(parts[1], 10);
  var month = parseInt(parts[0], 10);
  var year = parseInt(parts[2], 10);
  if (year < 1e3 || year > 3e3 || month == 0 || month > 12)
    return false;
  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0)
    monthLength[1] = 29;
  return day > 0 && day <= monthLength[month - 1];
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\transactions.$categoryID.tsx
var import_react10 = require("@remix-run/react");
var import_node11 = require("@remix-run/node");
function meta2() {
  return { title: "Budget Management|Transactions" };
}
var validateAmount = (amount) => {
  if (amount !== null && Number.isNaN(Number(amount.toString().replace("$", "").replace(",", ""))))
    return "You must enter a number.";
};
var validateTransaction_date = (transaction_date) => {
  if (!isValidDate(transaction_date))
    return "You must enter a valid date.";
};
var action4 = async ({ request, params }) => {
  return authenticated(request, async () => {
    supabaseAdmin.auth.setAuth(await getAccessToken(request));
    const transaction = await request.formData();
    const name2 = transaction.get("name");
    const id = transaction.get("id");
    const amount = transaction.get("amount");
    const transaction_date = transaction.get("transaction_date");
    const _action = transaction.get("_action");
    const errors = {
      formMessage: "Your form was submitted successfully."
    };
    const fieldErrors = {
      amount: validateAmount(amount),
      transaction_date: validateTransaction_date(transaction_date == null ? void 0 : transaction_date.toString())
    };
    if (Object.values(fieldErrors).some(Boolean)) {
      errors.fieldErrors = fieldErrors;
      errors.formMessage = "Your form was not submitted successfully.";
      return (0, import_node11.json)(errors, { status: 400 });
    } else if (_action === "insert") {
      await supabaseAdmin.from("transactions").insert({
        name: name2,
        amount,
        transaction_date,
        category_id: params.categoryID
      });
      errors.formMessage = "Your transaction was added successfully.";
    } else if (_action === "Update") {
      await supabaseAdmin.from("transactions").update({
        transaction_date,
        amount
      }).match({ id });
      errors.formMessage = "Your transaction was updated successfully.";
    } else if (_action === "Delete") {
      return (0, import_node10.redirect)(`/transactions/delete/${id}/${params.categoryID}`);
    }
    return (0, import_node11.json)(errors);
  }, () => {
    throw new Response("unauthorized", { status: 401 });
  });
};
var loader5 = async ({ request, params }) => {
  const { data: category } = await supabaseAdmin.from("categories").select().match({ id: params.categoryID }).limit(1).single();
  const { data: transactions } = await supabaseAdmin.from("vw_transactions").select().match({ category_id: params.categoryID });
  return (0, import_node11.json)({ category, transactions });
};
function Transactions() {
  var _a, _b, _c;
  const { transactions, category } = (0, import_react9.useLoaderData)();
  const trs = transactions.map((t) => {
    const { id, name: name2, transaction_date, amount } = t;
    return /* @__PURE__ */ React.createElement("tr", {
      key: id
    }, /* @__PURE__ */ React.createElement("td", null, name2), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      name: "transaction_date",
      form: `transactions-${id}`,
      "aria-label": `${name2} Date`,
      defaultValue: transaction_date
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      name: "amount",
      form: `transactions-${id}`,
      "aria-label": `${name2} Amount`,
      defaultValue: amount
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "submit",
      name: "_action",
      form: `transactions-${id}`,
      value: "Update"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      form: `transactions-${id}`,
      value: id,
      name: "id"
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "submit",
      name: "_action",
      form: `transactions-${id}`,
      value: "Delete"
    })));
  });
  const forms = transactions.map((t) => {
    const { id } = t;
    return /* @__PURE__ */ React.createElement(import_react10.Form, {
      id: `transactions-${id}`,
      method: "post",
      key: id
    });
  });
  const transition = (0, import_react9.useTransition)();
  const data = (0, import_react9.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Transactions for ", category.name), /* @__PURE__ */ React.createElement(import_react10.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    required: true
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "transaction_date"
  }, "Date"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "transaction_date",
    id: "transaction_date",
    "aria-describedby": "errorTransaction_date"
  }), ((_a = data == null ? void 0 : data.fieldErrors) == null ? void 0 : _a.transaction_date) && /* @__PURE__ */ React.createElement("span", {
    id: "errorTransaction_date"
  }, (_b = data == null ? void 0 : data.fieldErrors) == null ? void 0 : _b.transaction_date), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "amount"
  }, "Amount"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "amount",
    id: "amount",
    "aria-describedby": "errorAmount"
  }), ((_c = data == null ? void 0 : data.fieldErrors) == null ? void 0 : _c.amount) && /* @__PURE__ */ React.createElement("span", {
    id: "errorAmount"
  }, data.fieldErrors.amount), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "insert",
    disabled: transition.state !== "idle",
    "aria-live": "polite"
  }, "Add")), (data == null ? void 0 : data.formMessage) && transition.state === "idle" && /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, data.formMessage), /* @__PURE__ */ React.createElement("h2", null, "Current Transactions"), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Name"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Date"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Amount"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Update"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Delete"))), /* @__PURE__ */ React.createElement("tbody", null, trs)), forms);
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\categories\$budgetID.tsx
var budgetID_exports2 = {};
__export(budgetID_exports2, {
  action: () => action5,
  default: () => Categories,
  loader: () => loader6,
  meta: () => meta3
});
init_react();
var import_react11 = require("@remix-run/react");

// app/utils/currency.js
init_react();
function formatCurrency(num) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return formatter.format(num);
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\categories\$budgetID.tsx
var import_react12 = require("@remix-run/react");
var import_node12 = require("@remix-run/node");
var meta3 = () => {
  return { title: "Budget Management|Categories" };
};
var action5 = async ({ request, params }) => {
  return authenticated(request, async (user) => {
    const { budgetID } = params;
    const data = await request.formData();
    const name2 = data.get("name");
    const id = data.get("id");
    const amount = data.get("amount");
    const _action = data.get("_action");
    supabaseAdmin.auth.setAuth(await getAccessToken(request));
    if (_action === "delete") {
      return (0, import_node12.redirect)(`/categories/delete/${id}/${params.budgetID}`);
    }
    const returnData = {
      formMessage: "Your form was submitted successfully."
    };
    if (Number.isNaN(Number(amount == null ? void 0 : amount.toString().replace("$", "").replace(",", "")))) {
      returnData.formMessage = "Your form was not submitted successfully. Make sure your amount is a number.";
      return (0, import_node12.json)(returnData);
    }
    if (_action === "insert") {
      await supabaseAdmin.from("categories").insert({ budget_id: budgetID, name: name2, amount });
    } else if (_action === "update") {
      await supabaseAdmin.from("categories").update({ amount }).match({ id });
    }
    return (0, import_node12.json)(returnData);
  }, () => {
    throw new Response("unauthorized", { status: 401 });
  });
};
var loader6 = async ({ request, params }) => {
  supabaseAdmin.auth.setAuth(await getAccessToken(request));
  const { budgetID } = params;
  let { data: categories } = await supabaseAdmin.from("categories").select().match({ budget_id: budgetID });
  const totalBudgeted = categories == null ? void 0 : categories.reduce((p, c) => {
    if (p === void 0 || c === void 0)
      return 0;
    if (c.amount === void 0)
      return 0;
    return p + parseFloat(c.amount.replace("$", "").replace(",", ""));
  }, 0);
  let { data: budget } = await supabaseAdmin.from("budgets").select().match({ id: budgetID }).limit(1).single();
  return (0, import_node12.json)({ budget, categories, totalBudgeted });
};
function Categories() {
  const { budget, categories, totalBudgeted } = (0, import_react11.useLoaderData)();
  const { month, year, income } = budget;
  const transition = (0, import_react11.useTransition)();
  const trs = categories.map((cat) => {
    const { name: name2, amount, id } = cat;
    return /* @__PURE__ */ React.createElement("tr", {
      key: id
    }, /* @__PURE__ */ React.createElement("td", {
      scope: "row"
    }, name2), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      form: `myForm-${id}`,
      "aria-label": name2,
      defaultValue: amount,
      name: "amount",
      className: "max-w-[120px] text-center"
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      form: `myForm-${id}`,
      type: "submit",
      name: "_action",
      value: "update",
      className: "btn-blue-700"
    }, "Update")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      className: "btn-rose-700",
      form: `myForm-${id}`,
      name: "_action",
      value: "delete"
    }, "Delete")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_react11.Link, {
      className: "btn-emerald-700",
      to: `/transactions/${id}`
    }, "View Transactions"), /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      id: "id",
      name: "id",
      value: id,
      form: `myForm-${id}`
    })));
  });
  const forms = categories.map((cat) => {
    const { id } = cat;
    return /* @__PURE__ */ React.createElement(import_react12.Form, {
      key: id,
      id: `myForm-${id}`,
      name: `myForm-${id}`,
      method: "post"
    });
  });
  const actionData = (0, import_react11.useActionData)();
  const { formMessage } = actionData || {};
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col place-items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-6"
  }, `Categories for ${month}/${year}`), (categories == null ? void 0 : categories.length) > 0 && /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Name"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Amount"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Update"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Delete"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "View Transactions"))), /* @__PURE__ */ React.createElement("tbody", null, trs)), forms, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col my-4 text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-lg font-medium text-blue-700"
  }, "Total income: ", income), /* @__PURE__ */ React.createElement("div", {
    className: "text-lg font-medium text-rose-700"
  }, "Total Budgeted: ", formatCurrency(totalBudgeted)), /* @__PURE__ */ React.createElement("div", {
    className: "text-lg font-medium text-emerald-700",
    "aria-live": "polite",
    role: "alert"
  }, `There is ${formatCurrency(parseFloat(income.replace("$", "").replace(",", "")) - totalBudgeted)} left to budget.`)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col place-items-center border-2 p-6 rounded-md border-emerald-700"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-4 text-emerald-700"
  }, "Add New Category"), /* @__PURE__ */ React.createElement(import_react12.Form, {
    className: "flex flex-col place-items-center",
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center gap-x-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-1/2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "mb-1",
    htmlFor: "name"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-1/2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "mb-1",
    htmlFor: "amount"
  }, "Amount"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "amount",
    id: "amount",
    required: true
  }))), /* @__PURE__ */ React.createElement("button", {
    className: "btn-emerald-700 mt-6",
    type: "submit",
    name: "_action",
    value: "insert",
    "aria-live": "polite",
    disabled: transition.type !== "idle"
  }, "Add"))), formMessage && transition.state === "idle" && /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, formMessage), /* @__PURE__ */ React.createElement(import_react11.Link, {
    className: "btn-blue-700 mt-6",
    to: `/budget/${budget.month}/${budget.year}`
  }, "Back To Budget Management"));
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\budget\$month\$year.tsx
var year_exports = {};
__export(year_exports, {
  action: () => action6,
  default: () => Budget,
  loader: () => loader7,
  meta: () => meta4
});
init_react();
var import_node13 = require("@remix-run/node");
var import_react13 = require("@remix-run/react");
var import_react14 = require("react");
var import_react15 = require("react");
function meta4() {
  return { title: "Budget Management|Main Console" };
}
var validateIncome = (income) => {
  console.log(income, income && Number.isNaN(income.toString().replace("$", "").replace(",", "")));
  if (income !== null && Number.isNaN(Number(income.toString().replace("$", "").replace(",", "")))) {
    console.log(income == null ? void 0 : income.toString().replace("$", "").replace(",", ""));
    return "Your income must be a number";
  }
};
var action6 = async ({ request }) => {
  return authenticated(request, async (user) => {
    const data = await request.formData();
    const id = data.get("id");
    const income = data.get("income");
    const { id: user_id } = user;
    const _action = data.get("_action");
    const month = data.get("month");
    const year = data.get("year");
    if (_action === "Select") {
      return (0, import_node13.redirect)(`/budget/${month}/${year}`);
    }
    const errors = {
      formMessage: "Your form was not submitted successfully."
    };
    console.log("here");
    const fieldErrors = { income: validateIncome(income) };
    console.log(fieldErrors);
    if (Object.values(fieldErrors).some(Boolean)) {
      errors.fieldErrors = fieldErrors;
      return (0, import_node13.json)({ errors }, { status: 400 });
    }
    supabaseAdmin.auth.setAuth(await getAccessToken(request));
    if (id === "-1") {
      const { error } = await supabaseAdmin.from("budgets").insert({
        month,
        year,
        user_id,
        income
      });
      if (error) {
        errors.formMessage = error.message;
      } else
        errors.formMessage = "Your budget was changed successfully.";
    } else {
      supabaseAdmin.auth.setAuth(await getAccessToken(request));
      const { error } = await supabaseAdmin.from("budgets").update({ income }).match({ id });
      if (error) {
        errors.formMessage = error.message;
      } else {
        errors.formMessage = "Yur budget was changed successfully.";
      }
    }
    return (0, import_node13.json)({ errors });
  }, () => {
    throw new Response("unauthorized", { status: 401 });
  });
};
var loader7 = async ({ request, params }) => {
  let { month, year } = params;
  if (month === null) {
    console.log("bad error.");
    return null;
  }
  const accessToken = await getAccessToken(request);
  supabaseAdmin.auth.setAuth(accessToken);
  const { data } = await supabaseAdmin.from("budgets").select().match({ month, year });
  if (!data || (data == null ? void 0 : data.length) === 0) {
    return (0, import_node13.json)({ id: -1, month, year, income: 0, user_id: "" });
  } else {
    return (0, import_node13.json)(data[0]);
  }
};
function Budget() {
  var _a, _b, _c, _d, _e, _f;
  const transition = (0, import_react13.useTransition)();
  const { income, id, user_id, month, year } = (0, import_react13.useLoaderData)();
  const actionData = (0, import_react13.useActionData)();
  const [incomeTxt, setIncomeTxt] = (0, import_react15.useState)("");
  (0, import_react15.useEffect)(() => {
    setIncomeTxt(income);
  }, [income]);
  const submit = (0, import_react13.useSubmit)();
  const handleSelection = () => {
    const ddlMonth = document.getElementById("month");
    const ddlYear = document.getElementById("year");
    if (ddlMonth && ddlYear) {
      submit({
        _action: "Select",
        month: ddlMonth.value,
        year: ddlYear.value
      }, { method: "post" });
    }
  };
  const incomeRef = (0, import_react14.useRef)(null);
  (0, import_react15.useEffect)(() => {
    var _a2, _b2;
    if (((_b2 = (_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.fieldErrors) == null ? void 0 : _b2.income) !== void 0 && transition.state === "idle") {
      if (incomeRef.current !== null) {
        const i = incomeRef.current;
        i.focus();
      }
    }
  }, [(_b = (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.fieldErrors) == null ? void 0 : _b.income, transition.state]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-6"
  }, "Budget Managment"), /* @__PURE__ */ React.createElement("div", {
    className: "border-2 border-blue-700 rounded-lg p-8 flex flex-col place-items-center"
  }, /* @__PURE__ */ React.createElement(import_react13.Form, {
    className: "w-full flex flex-col place-items-center gap-y-4",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: id
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "user_id",
    value: user_id
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full gap-x-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "mb-1",
    htmlFor: "month"
  }, "Month"), /* @__PURE__ */ React.createElement("select", {
    defaultValue: month,
    id: "month",
    name: "month",
    onChange: handleSelection,
    className: ""
  }, /* @__PURE__ */ React.createElement("option", {
    value: "1"
  }, "Jan"), /* @__PURE__ */ React.createElement("option", {
    value: "2"
  }, "Feb"), /* @__PURE__ */ React.createElement("option", {
    value: "3"
  }, "Mar"), /* @__PURE__ */ React.createElement("option", {
    value: "4"
  }, "Apr"), /* @__PURE__ */ React.createElement("option", {
    value: "5"
  }, "May"), /* @__PURE__ */ React.createElement("option", {
    value: "6"
  }, "Jun"), /* @__PURE__ */ React.createElement("option", {
    value: "7"
  }, "Jul"), /* @__PURE__ */ React.createElement("option", {
    value: "8"
  }, "Aug"), /* @__PURE__ */ React.createElement("option", {
    value: "9"
  }, "Sep"), /* @__PURE__ */ React.createElement("option", {
    value: "10"
  }, "Oct"), /* @__PURE__ */ React.createElement("option", {
    value: "11"
  }, "Nov"), /* @__PURE__ */ React.createElement("option", {
    value: "12"
  }, "Dec"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "mb-1",
    htmlFor: "year"
  }, "Year"), /* @__PURE__ */ React.createElement("select", {
    id: "year",
    name: "year",
    defaultValue: year,
    onChange: handleSelection,
    className: ""
  }, /* @__PURE__ */ React.createElement("option", null, "2022"), /* @__PURE__ */ React.createElement("option", null, "2023")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-full"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "mb-1",
    htmlFor: "income"
  }, "Income"), /* @__PURE__ */ React.createElement("input", {
    ref: incomeRef,
    id: "income",
    type: "text",
    name: "income",
    readOnly: transition.state !== "idle",
    value: incomeTxt,
    onChange: (e) => {
      e.preventDefault();
      setIncomeTxt(e.target.value);
    },
    "aria-describedby": "incomeError",
    className: ""
  })), /* @__PURE__ */ React.createElement("span", {
    id: "incomeError"
  }, (_d = (_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.fieldErrors) == null ? void 0 : _d.income), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    disabled: transition.state !== "idle",
    "aria-live": "polite",
    className: "btn-emerald-700"
  }, "Update")), id > 0 && /* @__PURE__ */ React.createElement("a", {
    className: "mt-4 btn-blue-700",
    href: `/categories/${id}`
  }, "View/Edit Categories"), ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.formMessage) && transition.state === "idle" && /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, (_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.formMessage), (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, "An error occurred: ", actionData == null ? void 0 : actionData.error)));
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\profile.jsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile,
  meta: () => meta5
});
init_react();

// app/hooks/useUser.js
init_react();
var import_react16 = require("@remix-run/react");
function useRouteData(routeId) {
  var _a;
  return (_a = (0, import_react16.useMatches)().find((match) => match.id === routeId)) == null ? void 0 : _a.data;
}
function useUser() {
  const loaderData = useRouteData("routes/__authenticated");
  if (!(loaderData == null ? void 0 : loaderData.user)) {
    throw new Error("User not found");
  }
  return loaderData.user;
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\profile.jsx
var import_react17 = require("@remix-run/react");
function meta5() {
  return { title: "Supabase x Remix | Profile" };
}
function Profile() {
  const user = useUser();
  return /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Hello ", user.email, "!"), /* @__PURE__ */ React.createElement("pre", {
    style: { textAlign: "left" }
  }, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(user, null, 2))), /* @__PURE__ */ React.createElement(import_react17.Form, {
    method: "post",
    action: "/api/logout"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout")));
}

// route:c:\dev\budget-management-remix\app\routes\api\logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action7,
  default: () => Logout,
  loader: () => loader8
});
init_react();
var import_node14 = require("@remix-run/node");
function loader8() {
  return (0, import_node14.redirect)("/");
}
async function action7({ request }) {
  let session = await authCookie.getSession(request.headers.get("Cookie"));
  if (!session) {
    return (0, import_node14.redirect)("/login");
  }
  const { done, error } = await signOutUser(session);
  if (error || !done) {
    console.log("Error signing out user in supabase", error);
  }
  return (0, import_node14.redirect)("/login", {
    headers: { "Set-Cookie": await authCookie.destroySession(session) }
  });
}
function Logout() {
  return null;
}

// route:c:\dev\budget-management-remix\app\routes\__index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexLayout
});
init_react();
var import_react18 = require("@remix-run/react");
function IndexLayout() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react18.Outlet, null)));
}

// route:c:\dev\budget-management-remix\app\routes\__index\register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action8,
  default: () => Register,
  loader: () => loader9,
  meta: () => meta6
});
init_react();
var import_react20 = require("@remix-run/react");
var import_node15 = require("@remix-run/node");

// app/components/AuthProviderBtn.tsx
init_react();
var import_react19 = require("react");
var import_supabase_auth5 = __toESM(require_supabase_auth());
function AuthProviderBtn(_a) {
  var _b = _a, {
    provider,
    redirectTo
  } = _b, props = __objRest(_b, [
    "provider",
    "redirectTo"
  ]);
  const handleOnClick = (0, import_react19.useCallback)(async () => {
    try {
      await (0, import_supabase_auth5.continueWithProvider)({ provider, redirectTo });
    } catch (error) {
      console.log(`error in continue with ${provider}`, error);
      return;
    }
  }, [provider, redirectTo]);
  return /* @__PURE__ */ React.createElement("button", __spreadProps(__spreadValues({}, props), {
    onClick: handleOnClick
  }), "Continue with ", provider);
}

// route:c:\dev\budget-management-remix\app\routes\__index\register.tsx
function meta6() {
  return { title: "Budget Management| Register" };
}
var loader9 = async ({ request }) => {
  return authenticated(request, () => {
    return (0, import_node15.redirect)(`/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
  }, () => {
    return (0, import_node15.json)({});
  });
};
var action8 = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const password2 = form.get("password2");
  if (!email || !password || !password2 || typeof email !== "string" || typeof password !== "string" || typeof password2 !== "string" || password.length < 8 || password !== password2) {
    return (0, import_node15.json)({
      formError: `Form not submitted correctly.`,
      fields: {
        email: String(email) ?? ""
      }
    }, 403);
  }
  const { user, error } = await registerUser({
    email,
    password
  });
  if (error || !user) {
    return (0, import_node15.json)({ formError: error || "Something went wrong", fields: { email } }, 401);
  }
  return (0, import_node15.json)({ result: "success" }, { status: 201 });
};
function Register() {
  var _a;
  const actionData = (0, import_react20.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Register"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(AuthProviderBtn, {
    provider: "google",
    redirectTo: `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
  })), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }), /* @__PURE__ */ React.createElement("p", null, "Or continue with email/password"), /* @__PURE__ */ React.createElement(import_react20.Form, {
    replace: true,
    method: "post"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Register"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    name: "password",
    id: "password"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password2"
  }, "Retype Password"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    name: "password2",
    id: "password2"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Register")))), /* @__PURE__ */ React.createElement("p", null, "Have an account? ", /* @__PURE__ */ React.createElement(import_react20.Link, {
    to: "/login"
  }, "Login"), " instead"), (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("div", {
    role: "alert",
    style: { color: "red" }
  }, actionData.formError) : null, (actionData == null ? void 0 : actionData.result) ? /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, "We have sent you an email.", /* @__PURE__ */ React.createElement("br", null), "Please confirm your email to complete registration.") : null);
}

// route:c:\dev\budget-management-remix\app\routes\__index\index.tsx
var index_exports2 = {};
__export(index_exports2, {
  default: () => Index,
  meta: () => meta7
});
init_react();
function meta7() {
  return { title: "Budget Management| Home" };
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Budget Management"), "Welcome to Budget Management.");
}

// route:c:\dev\budget-management-remix\app\routes\__index\login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action9,
  default: () => Login,
  loader: () => loader10,
  meta: () => meta8
});
init_react();
var import_react21 = require("react");
var import_node16 = require("@remix-run/node");
var import_react22 = require("@remix-run/react");
function meta8() {
  return { title: "Budget Management| Login" };
}
var loader10 = async ({ request }) => {
  return authenticated(request, () => {
    return (0, import_node16.redirect)(`/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
  }, () => {
    return (0, import_node16.json)({});
  });
};
var action9 = async ({ request }) => {
  let session = await authCookie.getSession(request.headers.get("Cookie"));
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/budget";
  if (!email || !password || typeof redirectTo !== "string" || typeof email !== "string" || typeof password !== "string") {
    return (0, import_node16.json)({
      formError: `Form not submitted correctly.`,
      fields: {
        email: String(email) ?? ""
      }
    }, 403);
  }
  const { accessToken, refreshToken, error } = await loginUser({
    email,
    password
  });
  if (error || !accessToken || !refreshToken) {
    return (0, import_node16.json)({ formError: error || "Something went wrong", fields: { email } }, 403);
  }
  session = setAuthSession(session, accessToken, refreshToken);
  return (0, import_node16.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await authCookie.commitSession(session)
    }
  });
};
function Login() {
  var _a;
  const actionData = (0, import_react22.useActionData)();
  const [searchParams] = (0, import_react22.useSearchParams)();
  const redirectTo = (0, import_react21.useMemo)(() => searchParams.get("redirectTo") ?? `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`, [searchParams]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement(AuthProviderBtn, {
    provider: "google",
    redirectTo
  })), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }), /* @__PURE__ */ React.createElement("p", null, "Or continue with email/password"), /* @__PURE__ */ React.createElement(import_react22.Form, {
    replace: true,
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Login"), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement("label", null, "Email", " ", /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "email",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email
  }))), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement("label", null, "Password ", /* @__PURE__ */ React.createElement("input", {
    type: "password",
    min: 8,
    name: "password"
  }))), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Login")))), /* @__PURE__ */ React.createElement("p", null, "Don't have an account yet? ", /* @__PURE__ */ React.createElement(import_react22.Link, {
    to: "/register"
  }, "Register"), " instead"), (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, actionData.formError) : null);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "fb8203e2", "entry": { "module": "/build/entry.client-KV7QPZPT.js", "imports": ["/build/_shared/chunk-M2L2XS6X.js", "/build/_shared/chunk-FN7GJDOI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QWTBXPQ3.js", "imports": ["/build/_shared/chunk-J2TD3V3X.js", "/build/_shared/chunk-FO2FZAZ4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/__authenticated": { "id": "routes/__authenticated", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated-JQRH5S22.js", "imports": ["/build/_shared/chunk-EWMPTY72.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/__authenticated/budget/$month/$year": { "id": "routes/__authenticated/budget/$month/$year", "parentId": "routes/__authenticated", "path": "budget/:month/:year", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/budget/$month/$year-F45BAS6A.js", "imports": ["/build/_shared/chunk-FO2FZAZ4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__authenticated/categories/$budgetID": { "id": "routes/__authenticated/categories/$budgetID", "parentId": "routes/__authenticated", "path": "categories/:budgetID", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/categories/$budgetID-GORUPZ7O.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__authenticated/categories/delete/$categoryID/$budgetID": { "id": "routes/__authenticated/categories/delete/$categoryID/$budgetID", "parentId": "routes/__authenticated", "path": "categories/delete/:categoryID/:budgetID", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/categories/delete/$categoryID/$budgetID-R4UCWUZU.js", "imports": ["/build/_shared/chunk-FO2FZAZ4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__authenticated/profile": { "id": "routes/__authenticated/profile", "parentId": "routes/__authenticated", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/profile-YQ2RTTAU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__authenticated/transactions.$categoryID": { "id": "routes/__authenticated/transactions.$categoryID", "parentId": "routes/__authenticated", "path": "transactions/:categoryID", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/transactions.$categoryID-LC3S2O5Y.js", "imports": ["/build/_shared/chunk-FO2FZAZ4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__authenticated/transactions.delete.$transactionID.$categoryID": { "id": "routes/__authenticated/transactions.delete.$transactionID.$categoryID", "parentId": "routes/__authenticated", "path": "transactions/delete/:transactionID/:categoryID", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/transactions.delete.$transactionID.$categoryID-QCVPLZ5B.js", "imports": ["/build/_shared/chunk-FO2FZAZ4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__index": { "id": "routes/__index", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__index-BWF6QPNE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__index/index": { "id": "routes/__index/index", "parentId": "routes/__index", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/__index/index-YUFRMI6P.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__index/login": { "id": "routes/__index/login", "parentId": "routes/__index", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__index/login-FUFF27FT.js", "imports": ["/build/_shared/chunk-OA2GPW3N.js", "/build/_shared/chunk-7Q2WEMEZ.js", "/build/_shared/chunk-J2TD3V3X.js", "/build/_shared/chunk-FO2FZAZ4.js", "/build/_shared/chunk-EWMPTY72.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__index/register": { "id": "routes/__index/register", "parentId": "routes/__index", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__index/register-5PZHSO3N.js", "imports": ["/build/_shared/chunk-OA2GPW3N.js", "/build/_shared/chunk-7Q2WEMEZ.js", "/build/_shared/chunk-J2TD3V3X.js", "/build/_shared/chunk-EWMPTY72.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/auth.callback": { "id": "routes/api/auth.callback", "parentId": "root", "path": "api/auth/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/auth.callback-RC7BWNS3.js", "imports": ["/build/_shared/chunk-7Q2WEMEZ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/logout": { "id": "routes/api/logout", "parentId": "root", "path": "api/logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/logout-M6GZIMZO.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-FB8203E2.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/auth.callback": {
    id: "routes/api/auth.callback",
    parentId: "root",
    path: "api/auth/callback",
    index: void 0,
    caseSensitive: void 0,
    module: auth_callback_exports
  },
  "routes/__authenticated": {
    id: "routes/__authenticated",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: authenticated_exports
  },
  "routes/__authenticated/transactions.delete.$transactionID.$categoryID": {
    id: "routes/__authenticated/transactions.delete.$transactionID.$categoryID",
    parentId: "routes/__authenticated",
    path: "transactions/delete/:transactionID/:categoryID",
    index: void 0,
    caseSensitive: void 0,
    module: transactions_delete_transactionID_categoryID_exports
  },
  "routes/__authenticated/categories/delete/$categoryID/$budgetID": {
    id: "routes/__authenticated/categories/delete/$categoryID/$budgetID",
    parentId: "routes/__authenticated",
    path: "categories/delete/:categoryID/:budgetID",
    index: void 0,
    caseSensitive: void 0,
    module: budgetID_exports
  },
  "routes/__authenticated/transactions.$categoryID": {
    id: "routes/__authenticated/transactions.$categoryID",
    parentId: "routes/__authenticated",
    path: "transactions/:categoryID",
    index: void 0,
    caseSensitive: void 0,
    module: transactions_categoryID_exports
  },
  "routes/__authenticated/categories/$budgetID": {
    id: "routes/__authenticated/categories/$budgetID",
    parentId: "routes/__authenticated",
    path: "categories/:budgetID",
    index: void 0,
    caseSensitive: void 0,
    module: budgetID_exports2
  },
  "routes/__authenticated/budget/$month/$year": {
    id: "routes/__authenticated/budget/$month/$year",
    parentId: "routes/__authenticated",
    path: "budget/:month/:year",
    index: void 0,
    caseSensitive: void 0,
    module: year_exports
  },
  "routes/__authenticated/profile": {
    id: "routes/__authenticated/profile",
    parentId: "routes/__authenticated",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/api/logout": {
    id: "routes/api/logout",
    parentId: "root",
    path: "api/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__index": {
    id: "routes/__index",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/__index/register": {
    id: "routes/__index/register",
    parentId: "routes/__index",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/__index/index": {
    id: "routes/__index/index",
    parentId: "routes/__index",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: index_exports2
  },
  "routes/__index/login": {
    id: "routes/__index/login",
    parentId: "routes/__index",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
