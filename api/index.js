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

// empty-module:../api/supabase-auth.client
var require_supabase_auth = __commonJS({
  "empty-module:../api/supabase-auth.client"(exports, module2) {
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
var import_node = require("@remix-run/node");
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-3D23U3HB.css";

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
function loader() {
  return (0, import_node.json)({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
    }
  });
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-screen flex flex-col justify-between items-center"
  }, children, /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("ul", {
    className: "flex list-none p-0 gap-1"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/westbrookc16/budget-management-remix"
  }, "Github")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/chriswestbrook"
  }, "Twitter"))))));
}
function App() {
  const loaderData = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: { margin: 0 }
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null)), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.ENV = ${JSON.stringify(loaderData.ENV)}`
    }
  }), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}
function CatchBoundary() {
  const caught = (0, import_react2.useCatch)();
  switch (caught.status) {
    case 404: {
      return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
        style: { textAlign: "center" }
      }, /* @__PURE__ */ React.createElement("h1", null, "Not Found"), /* @__PURE__ */ React.createElement("h2", null, "Looks like the page you are looking for doesn't exist!"), /* @__PURE__ */ React.createElement(import_react2.Link, {
        to: "/"
      }, "Home page")));
    }
    case 401: {
      return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "You are not logged in"), /* @__PURE__ */ React.createElement("p", null, "Please ", /* @__PURE__ */ React.createElement(import_react2.Link, {
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
var import_react3 = require("react");
var import_node3 = require("@remix-run/node");
var import_react4 = require("@remix-run/react");

// app/api/supabase-auth.server.js
init_react();

// app/services/supabase.server.js
init_react();
var import_node2 = require("@remix-run/node");
var import_supabase_js = require("@supabase/supabase-js");

// package.json
var name = "remix-template-vercel";

// app/services/supabase.server.js
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
var authCookie = (0, import_node2.createCookieSessionStorage)({
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

// app/api/supabase-auth.server.js
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
async function loginUser({ email, password }) {
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
async function registerUser({ email, password }) {
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

// route:c:\dev\budget-management-remix\app\routes\api\auth.callback.jsx
var import_supabase2 = __toESM(require_supabase());
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
  const fetcher = (0, import_react4.useFetcher)();
  const [searchParams] = (0, import_react4.useSearchParams)();
  (0, import_react3.useEffect)(() => {
    const { data: authListener } = import_supabase2.supabaseClient.auth.onAuthStateChange((event, session) => {
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

// app/policies/authenticated.server.js
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
    const { data } = await supabaseAdmin.from("user_data").select().match({ user_id: user.id }).limit(1).single();
    return await successFunction(__spreadValues({ email: user.email }, data));
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
var import_react5 = require("@remix-run/react");
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("ul", {
    style: { display: "flex", listStyleType: "none", padding: 0 }
  }, /* @__PURE__ */ React.createElement("li", {
    style: { margin: 4 }
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    style: { margin: 4 }
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
  }, "Budget Management")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post",
    action: "/api/logout"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout"))))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react6.Outlet, null)));
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

// route:c:\dev\budget-management-remix\app\routes\__authenticated\categories\delete\$categoryID\$budgetID.jsx
var budgetID_exports = {};
__export(budgetID_exports, {
  action: () => action2,
  default: () => DeleteCategory,
  loader: () => loader3
});
init_react();
var import_node6 = require("@remix-run/node");
var import_react7 = require("@remix-run/react");
async function loader3({ request, params }) {
  const { data: category } = await supabaseAdmin.from("categories").select().match({ id: params.categoryID }).limit(1).single();
  return { category };
}
function action2({ request, params }) {
  return authenticated(request, async () => {
    const data = await request.formData();
    const _action = data.get("_action");
    if (_action === "delete") {
      const { error } = await supabaseAdmin.from("categories").delete().match({ id: params.categoryID });
      return (0, import_node6.redirect)(`/categories/${params.budgetID}`);
    } else {
      return (0, import_node6.redirect)(`/categories/${params.budgetID}`);
    }
  }, () => {
    throw new Response("unauthorized", { status: 401 });
  });
}
function DeleteCategory() {
  const { category } = (0, import_react7.useLoaderData)();
  const { name: name2 } = category;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, "Are you sure you want to delete ", name2, '"')), /* @__PURE__ */ React.createElement(import_react7.Form, {
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

// route:c:\dev\budget-management-remix\app\routes\__authenticated\categories\$budgetID.jsx
var budgetID_exports2 = {};
__export(budgetID_exports2, {
  action: () => action3,
  default: () => Categories,
  loader: () => loader4,
  meta: () => meta2
});
init_react();
var import_react8 = require("@remix-run/react");

// app/utils/currency.js
init_react();
function formatCurrency(num) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return formatter.format(num);
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\categories\$budgetID.jsx
var import_react9 = require("@remix-run/react");
var import_node7 = require("@remix-run/node");
function meta2() {
  return { title: "Budget Management|Categories" };
}
async function action3({ request, params }) {
  return authenticated(request, async (user) => {
    const { budgetID } = params;
    const data = await request.formData();
    const name2 = data.get("name");
    const id = data.get("id");
    const amount = data.get("amount");
    const _action = data.get("_action");
    supabaseAdmin.auth.setAuth(await getAccessToken(request));
    if (_action === "delete") {
      return (0, import_node7.redirect)(`/categories/delete/${id}/${params.budgetID}`);
    }
    if (_action === "insert") {
      await supabaseAdmin.from("categories").insert({ budget_id: budgetID, name: name2, amount });
    } else if (_action === "update") {
      await supabaseAdmin.from("categories").update({ amount }).match({ id });
    }
    return null;
  }, () => {
    throw new Response("unauthorized", { status: 401 });
  });
}
async function loader4({ request, params }) {
  supabaseAdmin.auth.setAuth(await getAccessToken(request));
  const { budgetID } = params;
  let { data: categories } = await supabaseAdmin.from("categories").select().match({ budget_id: budgetID });
  const totalBudgeted = categories.reduce((p, c) => {
    return parseFloat(p) + parseFloat(c.amount.replace("$", "").replace(",", ""));
  }, 0);
  let { data: budget, error } = await supabaseAdmin.from("budgets").select().match({ id: budgetID }).limit(1).single();
  return (0, import_node7.json)({ budget, categories, totalBudgeted });
}
function Categories() {
  const { budget, categories, totalBudgeted } = (0, import_react8.useLoaderData)();
  const { month, year, income } = budget;
  const transition = (0, import_react8.useTransition)();
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
      name: "amount"
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      form: `myForm-${id}`,
      type: "submit",
      name: "_action",
      value: "update"
    }, "Update")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      form: `myForm-${id}`,
      name: "_action",
      value: "delete"
    }, "Delete")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      id: "id",
      name: "id",
      value: id,
      form: `myForm-${id}`
    })));
  });
  const forms = categories.map((cat) => {
    const { id } = cat;
    return /* @__PURE__ */ React.createElement(import_react9.Form, {
      key: id,
      id: `myForm-${id}`,
      name: `myForm-${id}`,
      method: "post"
    });
  });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, `Categories for ${month}/${year}`), (categories == null ? void 0 : categories.length) > 0 && /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Name"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Amount"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Update"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Delete"))), /* @__PURE__ */ React.createElement("tbody", null, trs)), forms, /* @__PURE__ */ React.createElement("h2", null, "add New Category"), /* @__PURE__ */ React.createElement(import_react9.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    id: "name"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "amount"
  }, "Amount"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "amount",
    id: "amount"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "insert",
    "aria-live": "polite",
    disabled: transition.type !== "idle"
  }, "Add")), "Total income: ", income, /* @__PURE__ */ React.createElement("br", null), "Total Budgeted: ", formatCurrency(totalBudgeted), /* @__PURE__ */ React.createElement("div", {
    "aria-live": "polite",
    role: "alert"
  }, "There is", formatCurrency(parseFloat(income.replace("$", "").replace(",", "")) - totalBudgeted), " ", "left to budget."), /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: `/budget/${budget.month}/${budget.year}`
  }, "Back To Budget Management"));
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\budget\$month\$year.jsx
var year_exports = {};
__export(year_exports, {
  action: () => action4,
  default: () => Budget,
  loader: () => loader5,
  meta: () => meta3
});
init_react();
var import_node8 = require("@remix-run/node");
var import_react10 = require("@remix-run/react");
var import_react11 = require("react");
var import_react12 = require("react");
function meta3() {
  return { title: "Budget Management|Main Console" };
}
async function action4({ request }) {
  return authenticated(request, async (user) => {
    const data = await request.formData();
    const id = data.get("id");
    const income = data.get("income");
    const { user_id } = user;
    const _action = data.get("_action");
    const month = data.get("month");
    const year = data.get("year");
    if (_action === "Select") {
      return (0, import_node8.redirect)(`/budget/${month}/${year}`);
    }
    const errors = {};
    if (isNaN(income.replace("$", "").replace(",", ""))) {
      errors.income = "Your income must be a number";
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    supabaseAdmin.auth.setAuth(await getAccessToken(request));
    if (id === "-1") {
      console.log("insert");
      const { error } = await supabaseAdmin.from("budgets").insert({
        month,
        year,
        user_id,
        income
      });
      if (error) {
        return (0, import_node8.json)({ error: error.message });
      }
      return (0, import_node8.json)({ success: "Row Inserted Successfully." });
    } else {
      supabaseAdmin.auth.setAuth(await getAccessToken(request));
      const { error } = await supabaseAdmin.from("budgets").update({ income }).match({ id });
      if (error) {
        return (0, import_node8.json)({ error: error.message });
      }
      return (0, import_node8.json)({ success: "Row Inserted Successfully." });
    }
  }, () => {
    throw new Response("unauthorized", { status: 401 });
  });
}
async function loader5({ request, params }) {
  let { month, year } = params;
  if (month === null) {
    console.log("bad error.");
    return null;
  }
  const accessToken = await getAccessToken(request);
  supabaseAdmin.auth.setAuth(accessToken);
  const { data } = await supabaseAdmin.from("budgets").select().match({ month, year });
  if (!data || (data == null ? void 0 : data.length) === 0) {
    return (0, import_node8.json)({ id: -1, month, year, income: 0, user_id: "" });
  } else {
    return (0, import_node8.json)(data[0]);
  }
}
function Budget() {
  const transition = (0, import_react10.useTransition)();
  const { income, id, user_id, month, year } = (0, import_react10.useLoaderData)();
  const actionData = (0, import_react10.useActionData)();
  const { errors } = (0, import_react10.useActionData)() || {};
  const [incomeTxt, setIncomeTxt] = (0, import_react12.useState)("");
  (0, import_react12.useEffect)(() => {
    setIncomeTxt(income);
  }, [income]);
  const submit = (0, import_react10.useSubmit)();
  const handleSelection = (e) => {
    submit({
      _action: "Select",
      month: document.getElementById("month").value,
      year: document.getElementById("year").value
    }, { method: "post" });
  };
  const incomeRef = (0, import_react11.useRef)();
  (0, import_react12.useEffect)(() => {
    if (errors == null ? void 0 : errors.income) {
      incomeRef.current.focus();
    }
  }, [errors]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react10.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "month"
  }, "Month"), /* @__PURE__ */ React.createElement("select", {
    defaultValue: month,
    id: "month",
    name: "month",
    onChange: handleSelection
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
  }, "Dec")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "year"
  }, "Year"), /* @__PURE__ */ React.createElement("select", {
    id: "year",
    name: "year",
    defaultValue: year,
    onChange: handleSelection
  }, /* @__PURE__ */ React.createElement("option", null, "2022"), /* @__PURE__ */ React.createElement("option", null, "2023")), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: id
  }), /* @__PURE__ */ React.createElement("label", {
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
    "aria-describedby": "incomeError"
  }), /* @__PURE__ */ React.createElement("span", {
    id: "incomeError"
  }, errors == null ? void 0 : errors.income), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    _action: "update",
    disabled: transition.state !== "idle",
    "aria-live": "polite"
  }, "Update"), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "user_id",
    value: user_id
  })), id > 0 && /* @__PURE__ */ React.createElement("a", {
    href: `/categories/${id}`
  }, "View/Edit Categories"), (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, "Budget Updated Successfully."), (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, "An error occurred: ", actionData == null ? void 0 : actionData.error));
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\profile.jsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile,
  meta: () => meta4
});
init_react();

// app/hooks/useUser.js
init_react();
var import_react13 = require("@remix-run/react");
function useRouteData(routeId) {
  var _a;
  return (_a = (0, import_react13.useMatches)().find((match) => match.id === routeId)) == null ? void 0 : _a.data;
}
function useUser() {
  const loaderData = useRouteData("routes/__authenticated");
  if (!(loaderData == null ? void 0 : loaderData.user)) {
    throw new Error("User not found");
  }
  return loaderData.user;
}

// route:c:\dev\budget-management-remix\app\routes\__authenticated\profile.jsx
var import_react14 = require("@remix-run/react");
function meta4() {
  return { title: "Supabase x Remix | Profile" };
}
function Profile() {
  const user = useUser();
  return /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Hello ", user.email, "!"), /* @__PURE__ */ React.createElement("pre", {
    style: { textAlign: "left" }
  }, /* @__PURE__ */ React.createElement("code", null, JSON.stringify(user, null, 2))), /* @__PURE__ */ React.createElement(import_react14.Form, {
    method: "post",
    action: "/api/logout"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout")));
}

// route:c:\dev\budget-management-remix\app\routes\api\logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action5,
  default: () => Logout,
  loader: () => loader6
});
init_react();
var import_node9 = require("@remix-run/node");
function loader6() {
  return (0, import_node9.redirect)("/");
}
async function action5({ request }) {
  let session = await authCookie.getSession(request.headers.get("Cookie"));
  if (!session) {
    return (0, import_node9.redirect)("/login");
  }
  const { done, error } = await signOutUser(session);
  if (error || !done) {
    console.log("Error signing out user in supabase", error);
  }
  return (0, import_node9.redirect)("/login", {
    headers: { "Set-Cookie": await authCookie.destroySession(session) }
  });
}
function Logout() {
  return null;
}

// route:c:\dev\budget-management-remix\app\routes\__index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexLayout,
  loader: () => loader7
});
init_react();
var import_node10 = require("@remix-run/node");
var import_react15 = require("@remix-run/react");
var loader7 = async ({ request }) => {
  const authSession = await authCookie.getSession(request.headers.get("Cookie"));
  const { user, error: getUserError } = await getUserByAccessToken(authSession.get("access_token"));
  return (0, import_node10.json)({ user });
};
function IndexLayout() {
  const { user } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("ul", {
    style: { display: "flex", listStyleType: "none", padding: 0 }
  }, /* @__PURE__ */ React.createElement("li", {
    style: { margin: 4 }
  }, /* @__PURE__ */ React.createElement(import_react15.Link, {
    to: "/"
  }, "Home")), user ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    style: { margin: 4 }
  }, /* @__PURE__ */ React.createElement(import_react15.Link, {
    to: "/profile"
  }, "Profile")), /* @__PURE__ */ React.createElement("li", {
    style: { margin: 4 }
  }, /* @__PURE__ */ React.createElement(import_react15.Link, {
    to: `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
  }, "Budget Management"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    style: { margin: 4 }
  }, /* @__PURE__ */ React.createElement(import_react15.Link, {
    to: "/login"
  }, "Login")), /* @__PURE__ */ React.createElement("li", {
    style: { margin: 4 }
  }, /* @__PURE__ */ React.createElement(import_react15.Link, {
    to: "/register"
  }, "Register"))))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react15.Outlet, null)));
}

// route:c:\dev\budget-management-remix\app\routes\__index\register.jsx
var register_exports = {};
__export(register_exports, {
  action: () => action6,
  default: () => Register,
  loader: () => loader8,
  meta: () => meta5
});
init_react();
var import_react17 = require("@remix-run/react");
var import_node11 = require("@remix-run/node");

// app/components/AuthProviderBtn.jsx
init_react();
var import_react16 = require("react");
var import_supabase_auth5 = __toESM(require_supabase_auth());
function AuthProviderBtn(_a) {
  var _b = _a, { provider, redirectTo } = _b, props = __objRest(_b, ["provider", "redirectTo"]);
  const handleOnClick = (0, import_react16.useCallback)(async () => {
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

// route:c:\dev\budget-management-remix\app\routes\__index\register.jsx
function meta5() {
  return { title: "Budget Management| Register" };
}
async function loader8({ request }) {
  return authenticated(request, () => {
    return (0, import_node11.redirect)(`/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
  }, () => {
    return (0, import_node11.json)({});
  });
}
async function action6({ request }) {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  if (!email || !password || typeof email !== "string" || typeof password !== "string" || password.length < 8) {
    return (0, import_node11.json)({
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
    return (0, import_node11.json)({ formError: error || "Something went wrong", fields: { email } }, 401);
  }
  return (0, import_node11.json)({ result: "success" }, { status: 201 });
}
function Register() {
  var _a;
  const actionData = (0, import_react17.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Register"), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement(AuthProviderBtn, {
    provider: "google",
    redirectTo: `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
  })), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement(AuthProviderBtn, {
    provider: "facebook"
  })), /* @__PURE__ */ React.createElement("p", null, "Or continue with email/password"), /* @__PURE__ */ React.createElement(import_react17.Form, {
    replace: true,
    method: "post"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Register"), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement("label", null, "Email", " ", /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "email",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email
  }))), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement("label", null, "Password ", /* @__PURE__ */ React.createElement("input", {
    type: "password",
    name: "password"
  }))), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Register")))), /* @__PURE__ */ React.createElement("p", null, "Have an account? ", /* @__PURE__ */ React.createElement(import_react17.Link, {
    to: "/login"
  }, "Login"), " instead"), (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, actionData.formError) : null, (actionData == null ? void 0 : actionData.result) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "green" }
  }, "We have sent you an email.", /* @__PURE__ */ React.createElement("br", null), "Please confirm your email to complete registration.") : null);
}

// route:c:\dev\budget-management-remix\app\routes\__index\index.jsx
var index_exports2 = {};
__export(index_exports2, {
  default: () => Index,
  meta: () => meta6
});
init_react();
function meta6() {
  return { title: "Budget Management| Home" };
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Budget Management"), "Welcome to Budget Management.");
}

// route:c:\dev\budget-management-remix\app\routes\__index\login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => Login,
  loader: () => loader9,
  meta: () => meta7
});
init_react();
var import_react18 = require("react");
var import_node12 = require("@remix-run/node");
var import_react19 = require("@remix-run/react");
function meta7() {
  return { title: "Budget Management| Login" };
}
async function loader9({ request }) {
  return authenticated(request, () => {
    return (0, import_node12.redirect)(`/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
  }, () => {
    return (0, import_node12.json)({});
  });
}
async function action7({ request }) {
  let session = await authCookie.getSession(request.headers.get("Cookie"));
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/budget";
  if (!email || !password || typeof redirectTo !== "string" || typeof email !== "string" || typeof password !== "string") {
    return (0, import_node12.json)({
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
    return (0, import_node12.json)({ formError: error || "Something went wrong", fields: { email } }, 403);
  }
  session = setAuthSession(session, accessToken, refreshToken);
  return (0, import_node12.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await authCookie.commitSession(session)
    }
  });
}
function Login() {
  var _a;
  const actionData = (0, import_react19.useActionData)();
  const [searchParams] = (0, import_react19.useSearchParams)();
  const redirectTo = (0, import_react18.useMemo)(() => searchParams.get("redirectTo") ?? `/budget/${new Date().getMonth() + 1}/${new Date().getFullYear()}`, [searchParams]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }, /* @__PURE__ */ React.createElement(AuthProviderBtn, {
    provider: "google",
    redirectTo
  })), /* @__PURE__ */ React.createElement("div", {
    style: { margin: 5 }
  }), /* @__PURE__ */ React.createElement("p", null, "Or continue with email/password"), /* @__PURE__ */ React.createElement(import_react19.Form, {
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
  }, "Login")))), /* @__PURE__ */ React.createElement("p", null, "Don't have an account yet? ", /* @__PURE__ */ React.createElement(import_react19.Link, {
    to: "/register"
  }, "Register"), " instead"), (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, actionData.formError) : null);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "cb42023b", "entry": { "module": "/build/entry.client-BYM6EFLT.js", "imports": ["/build/_shared/chunk-3KBVUVEV.js", "/build/_shared/chunk-FN7GJDOI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-PVGJWQEK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/__authenticated": { "id": "routes/__authenticated", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated-42KQWPWI.js", "imports": ["/build/_shared/chunk-EWMPTY72.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/__authenticated/budget/$month/$year": { "id": "routes/__authenticated/budget/$month/$year", "parentId": "routes/__authenticated", "path": "budget/:month/:year", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/budget/$month/$year-IP7UKO4D.js", "imports": ["/build/_shared/chunk-FO2FZAZ4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__authenticated/categories/$budgetID": { "id": "routes/__authenticated/categories/$budgetID", "parentId": "routes/__authenticated", "path": "categories/:budgetID", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/categories/$budgetID-2VSW5NCB.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__authenticated/categories/delete/$categoryID/$budgetID": { "id": "routes/__authenticated/categories/delete/$categoryID/$budgetID", "parentId": "routes/__authenticated", "path": "categories/delete/:categoryID/:budgetID", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/categories/delete/$categoryID/$budgetID-PMI5TRE6.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__authenticated/profile": { "id": "routes/__authenticated/profile", "parentId": "routes/__authenticated", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__authenticated/profile-Y7R2MRSE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__index": { "id": "routes/__index", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__index-S4WCJDOM.js", "imports": ["/build/_shared/chunk-J2TD3V3X.js", "/build/_shared/chunk-FO2FZAZ4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__index/index": { "id": "routes/__index/index", "parentId": "routes/__index", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/__index/index-EVBKKG2Q.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__index/login": { "id": "routes/__index/login", "parentId": "routes/__index", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__index/login-7FA557VV.js", "imports": ["/build/_shared/chunk-PGVZMUP7.js", "/build/_shared/chunk-Y5AGIVAF.js", "/build/_shared/chunk-EWMPTY72.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__index/register": { "id": "routes/__index/register", "parentId": "routes/__index", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__index/register-QHRQPOMI.js", "imports": ["/build/_shared/chunk-PGVZMUP7.js", "/build/_shared/chunk-Y5AGIVAF.js", "/build/_shared/chunk-EWMPTY72.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/auth.callback": { "id": "routes/api/auth.callback", "parentId": "root", "path": "api/auth/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/auth.callback-3KKF7YE5.js", "imports": ["/build/_shared/chunk-Y5AGIVAF.js", "/build/_shared/chunk-J2TD3V3X.js", "/build/_shared/chunk-FO2FZAZ4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/logout": { "id": "routes/api/logout", "parentId": "root", "path": "api/logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/logout-M6GZIMZO.js", "imports": ["/build/_shared/chunk-J2TD3V3X.js", "/build/_shared/chunk-FO2FZAZ4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-CB42023B.js" };

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
  "routes/__authenticated/categories/delete/$categoryID/$budgetID": {
    id: "routes/__authenticated/categories/delete/$categoryID/$budgetID",
    parentId: "routes/__authenticated",
    path: "categories/delete/:categoryID/:budgetID",
    index: void 0,
    caseSensitive: void 0,
    module: budgetID_exports
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
