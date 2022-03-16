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
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/workspace/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => App,
  links: () => links2,
  loader: () => loader
});
init_react();
var React8 = __toESM(require("react"));
var import_remix13 = __toESM(require_remix());
var import_clsx3 = __toESM(require("clsx"));

// app/styles/global.css
var global_default = "/build/_assets/global-ARK6YNSH.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SWS5NUDR.css";

// app/styles/vendors.css
var vendors_default = "/build/_assets/vendors-Y6SCJVWZ.css";

// app/components/index.ts
init_react();

// app/components/navbar.tsx
init_react();
var import_react = require("@chakra-ui/react");
var import_clsx = __toESM(require("clsx"));
var import_framer_motion = require("framer-motion");
var import_react2 = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());
var import_fa = require("react-icons/fa");
var import_ai = require("react-icons/ai");

// app/utils/index.ts
init_react();
var import_client = require("@prisma/client");
var import_moment = __toESM(require("moment"));
function formatFieldErrorsNew(fields, fieldErrors) {
  const result = {};
  Object.keys(fields).forEach((key) => {
    if (fieldErrors[key]) {
      result[key] = {
        message: fieldErrors[key][0],
        isInvalid: true
      };
    } else {
      result[key] = {
        message: "",
        isInvalid: false
      };
    }
  });
  return result;
}
var getTransitionTypes = (transition) => {
  if (transition.state === "submitting" && transition.submission.method === "GET") {
    return "Searching";
  }
  if (transition.state === "submitting" && transition.type === "actionSubmission") {
    return "Submitting";
  }
  if (transition.state === "loading" && transition.type === "normalLoad") {
    return "Navigating";
  }
  if (transition.state === "loading" && transition.type === "actionRedirect") {
    return "Redirecting";
  }
  if (transition.state === "loading" && transition.type === "normalRedirect") {
    return "NormalRedirecting";
  }
  if (transition.state === "loading" && transition.type === "actionReload") {
    return "Reloading";
  }
  if (transition.state === "idle") {
    return "Idle";
  }
  return "Unknown";
};
var getToday = () => {
  return (0, import_moment.default)().format("YYYY-MM-DD");
};
var getTomorrow = () => {
  return (0, import_moment.default)().add(1, "days").format("YYYY-MM-DD");
};
var composeUrl = (url, options) => {
  var _a;
  const protocol = ((_a = url.protocol) == null ? void 0 : _a.includes("http")) ? "http" : "https";
  if (!(options == null ? void 0 : options.includePathname)) {
    return `${protocol}://${url.host}`;
  }
  return `${protocol}://${url.host}${url.pathname}`;
};
var composeNumberId = (params) => {
  return params.id ? +params.id : void 0;
};
var composePriority = (priority) => {
  const priorities = {
    [import_client.Priority.HIGH]: import_client.Priority.HIGH,
    [import_client.Priority.LOW]: import_client.Priority.LOW,
    [import_client.Priority.MEDIUM]: import_client.Priority.MEDIUM,
    [import_client.Priority.NORMAL]: import_client.Priority.NORMAL
  };
  if (!priorities[priority]) {
    return import_client.Priority.NORMAL;
  }
  return priorities[priority];
};

// app/components/navbar.tsx
var links = [
  {
    title: "Home",
    to: "/home"
  },
  {
    title: "Clipboard",
    to: "/clipboard"
  },
  {
    title: "Copy",
    to: "/copy"
  },
  {
    title: "Redirect",
    to: "/redirect"
  },
  {
    title: "Todo",
    to: "/todo"
  },
  {
    title: "HabitsRank",
    to: "/habits-rank"
  }
];
function Navbar({ user }) {
  const { toggleColorMode: toggleMode } = (0, import_react.useColorMode)();
  const text = (0, import_react.useColorModeValue)("dark", "light");
  const SwitchIcon = (0, import_react.useColorModeValue)(import_fa.FaMoon, import_fa.FaSun);
  const bgColor = (0, import_react.useColorModeValue)("bg-white", "bg-[color:var(--chakra-colors-brand-900)]");
  const transition = (0, import_remix2.useTransition)();
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: (0, import_clsx.default)("border-b", bgColor)
  }, /* @__PURE__ */ import_react2.default.createElement(Wrapper, null, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex items-center justify-between py-4"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react2.default.createElement(import_ai.AiOutlineAliwangwang, {
    size: 30
  }), /* @__PURE__ */ import_react2.default.createElement("h2", {
    className: "ml-2 font-bold"
  }, "Clipi")), /* @__PURE__ */ import_react2.default.createElement(import_react.HStack, {
    spacing: 4
  }, /* @__PURE__ */ import_react2.default.createElement(import_react.Tag, {
    size: "sm"
  }, getTransitionTypes(transition)), /* @__PURE__ */ import_react2.default.createElement(import_react.IconButton, {
    size: "md",
    fontSize: "lg",
    "aria-label": `Switch to ${text} mode`,
    variant: "ghost",
    color: "current",
    ml: { base: "0", md: "3" },
    onClick: toggleMode,
    icon: /* @__PURE__ */ import_react2.default.createElement(SwitchIcon, null)
  }), /* @__PURE__ */ import_react2.default.createElement(import_react.Menu, null, /* @__PURE__ */ import_react2.default.createElement(import_react.MenuButton, {
    as: import_react.Button,
    rounded: "full",
    variant: "link",
    cursor: "pointer",
    minW: 0
  }, /* @__PURE__ */ import_react2.default.createElement(import_react.Avatar, {
    src: (user == null ? void 0 : user.profileUrl) ?? "",
    size: "sm"
  })), /* @__PURE__ */ import_react2.default.createElement(import_react.MenuList, {
    alignItems: "center",
    p: 0
  }, /* @__PURE__ */ import_react2.default.createElement(import_react.MenuItem, null, /* @__PURE__ */ import_react2.default.createElement(import_remix2.Link, {
    to: "/profile/general"
  }, "Account settings")), /* @__PURE__ */ import_react2.default.createElement(import_react.MenuItem, null, /* @__PURE__ */ import_react2.default.createElement(import_remix2.Link, {
    to: "/logout"
  }, "Logout"))))))), /* @__PURE__ */ import_react2.default.createElement(StickyHeader, null));
}
function StickyHeader() {
  var _a;
  const shadow = (0, import_react.useColorModeValue)("#0000001a", "#333");
  const ref = import_react2.default.useRef(null);
  const [y, setY] = import_react2.default.useState(0);
  const { height = 49 } = ((_a = ref.current) == null ? void 0 : _a.getBoundingClientRect()) ?? {};
  const textColor = (0, import_react.useColorModeValue)("text-black", "text-white");
  const borderColor = (0, import_react.useColorModeValue)("border-black", "border-white");
  const bgColor = (0, import_react.useColorModeValue)("white", "brand.900");
  const location = (0, import_remix2.useLocation)();
  const { scrollY } = (0, import_framer_motion.useViewportScroll)();
  import_react2.default.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const scrolledToTop = y >= 59;
  const transition = (0, import_remix2.useTransition)();
  return /* @__PURE__ */ import_react2.default.createElement(import_react.chakra.header, {
    h: `${height}px`,
    w: "full"
  }, /* @__PURE__ */ import_react2.default.createElement(import_react.Box, {
    position: scrolledToTop ? "fixed" : "static",
    transform: scrolledToTop ? "translateZ(100px)" : void 0,
    boxShadow: scrolledToTop ? `0 0 0 1px ${shadow}` : void 0,
    ref,
    transition: "box-shadow .2s ease",
    top: "0",
    bg: bgColor,
    zIndex: "3000",
    h: `${height}px`,
    left: "0",
    right: "0",
    width: "full",
    pt: "3"
  }, /* @__PURE__ */ import_react2.default.createElement(Wrapper, null, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex items-center justify-start"
  }, /* @__PURE__ */ import_react2.default.createElement(import_react.Stack, {
    direction: "row",
    spacing: "8",
    overflowY: "scroll",
    alignItems: "center"
  }, scrolledToTop ? /* @__PURE__ */ import_react2.default.createElement(import_react.HStack, {
    className: "pb-3"
  }, /* @__PURE__ */ import_react2.default.createElement(import_ai.AiOutlineAliwangwang, {
    size: 20
  }), /* @__PURE__ */ import_react2.default.createElement(import_react.Tag, {
    size: "sm"
  }, /* @__PURE__ */ import_react2.default.createElement("p", {
    className: "w-16 text-center truncate"
  }, getTransitionTypes(transition)))) : null, links.map((link) => /* @__PURE__ */ import_react2.default.createElement(import_remix2.Link, {
    to: link.to,
    key: link.to,
    className: (0, import_clsx.default)("pb-3 border-b-2", {
      [borderColor]: location.pathname.includes(link.to),
      "border-transparent": !location.pathname.includes(link.to) || location.pathname === "/",
      [textColor]: location.pathname.includes(link.to)
    })
  }, link.title)))))));
}

// app/components/clipboard.tsx
init_react();
var import_moment2 = __toESM(require("moment"));
function ClipboardContent(props) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-bold truncate"
  }, props.title), /* @__PURE__ */ React.createElement("p", {
    className: "truncate"
  }, props.content), /* @__PURE__ */ React.createElement("time", {
    className: "text-sm text-gray-500"
  }, (0, import_moment2.default)(props.createdAt).calendar())));
}

// app/components/transition-modal.tsx
init_react();
var import_react3 = require("@chakra-ui/react");
var import_remix3 = __toESM(require_remix());
function TransitionModal() {
  const transition = (0, import_remix3.useTransition)();
  if (transition.state === "loading" && transition.type === "normalLoad") {
    return /* @__PURE__ */ React.createElement(import_react3.Modal, {
      isOpen: true,
      onClose: () => null
    }, /* @__PURE__ */ React.createElement(import_react3.ModalOverlay, null), /* @__PURE__ */ React.createElement(import_react3.ModalContent, {
      bg: "transparent",
      shadow: "none",
      m: 0
    }, /* @__PURE__ */ React.createElement(Spinner, null)));
  }
  return null;
}

// app/components/wrapper.tsx
init_react();
var React3 = __toESM(require("react"));
function Wrapper({ children }) {
  return /* @__PURE__ */ React3.createElement("div", {
    className: "container w-full h-full max-w-5xl px-4 mx-auto md:px-6"
  }, children);
}

// app/components/page-title.tsx
init_react();
var import_react4 = require("@chakra-ui/react");
var import_clsx2 = __toESM(require("clsx"));
var React4 = __toESM(require("react"));
function PageTitle({ children }) {
  const bgColor = (0, import_react4.useColorModeValue)("bg-white", "bg-[color:var(--chakra-colors-brand-900)]");
  return /* @__PURE__ */ React4.createElement("div", {
    className: (0, import_clsx2.default)("py-10 border-b", bgColor)
  }, /* @__PURE__ */ React4.createElement(Wrapper, null, children));
}

// app/components/spinner.tsx
init_react();
function Spinner() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "fixed z-10 loader bottom-12 right-12"
  }, /* @__PURE__ */ React.createElement("span", {
    style: { opacity: 1, color: "white", background: "white" }
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "6"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "22"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "7.76",
    y2: "7.76"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "16.24",
    y1: "16.24",
    x2: "19.07",
    y2: "19.07"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "6",
    y2: "12"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "18",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "7.76",
    y2: "16.24"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "16.24",
    y1: "7.76",
    x2: "19.07",
    y2: "4.93"
  }))));
}

// app/components/no-items.tsx
init_react();
function NoItems({ title = "No items found!." }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full p-8 border rounded-md"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-bold text-center"
  }, title));
}

// app/components/qrcode.tsx
init_react();
var React5 = __toESM(require("react"));
var import_qrcode = __toESM(require("qrcode.react"));
var import_html_to_image = require("html-to-image");
var import_react5 = require("@chakra-ui/react");
function QRCode({ value }) {
  const ref = React5.useRef(null);
  const toast = (0, import_react5.useToast)();
  const downloadQRcode = React5.useCallback(() => {
    if (ref.current === null) {
      return;
    }
    (0, import_html_to_image.toPng)(ref.current, { cacheBust: true }).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = dataUrl;
      link.click();
    }).catch(() => {
      toast({
        title: "Unable to download QR code",
        status: "error"
      });
    });
  }, [ref, toast]);
  return /* @__PURE__ */ React5.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "flex items-center justify-center w-full p-4 border rounded-md"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "min-w-[200px] min-h-[200px] mx-auto fit-content"
  }, /* @__PURE__ */ React5.createElement("div", {
    ref,
    className: "p-4 bg-white rounded-md"
  }, /* @__PURE__ */ React5.createElement(import_qrcode.default, {
    value,
    size: 200,
    renderAs: "svg"
  })))), /* @__PURE__ */ React5.createElement(import_react5.Button, {
    mt: 4,
    w: ["full", "initial", "initial", "initial"],
    onClick: () => downloadQRcode()
  }, "Download QR code"));
}

// app/components/todo.tsx
init_react();
var import_react6 = require("@chakra-ui/react");
var import_client2 = require("@prisma/client");
var import_moment3 = __toESM(require("moment"));
var import_remix4 = __toESM(require_remix());
var import_bs = require("react-icons/bs");
var import_ri = require("react-icons/ri");
var import_hi = require("react-icons/hi");
var import_change_case = require("change-case");
var import_react_calendar = __toESM(require("react-calendar"));
function getPriorityColor(priority) {
  const priorityColor = {
    [import_client2.Priority.HIGH]: "red",
    [import_client2.Priority.MEDIUM]: "yellow",
    [import_client2.Priority.NORMAL]: "green",
    [import_client2.Priority.LOW]: "blue"
  };
  if (!priorityColor[priority]) {
    return priorityColor["LOW"];
  }
  return priorityColor[priority];
}
function TodoItem(props) {
  const navigation = (0, import_remix4.useNavigate)();
  const today = (0, import_moment3.default)().format("YYYY-MM-DD");
  const dueDate = (0, import_moment3.default)(props.dueDate).format("YYYY-MM-DD");
  const isOverDue = (0, import_moment3.default)(today).isAfter(dueDate);
  const isUpcoming = (0, import_moment3.default)(today).isBefore(dueDate);
  const fetcher = (0, import_remix4.useFetcher)();
  const rescheduleFether = (0, import_remix4.useFetcher)();
  const isSubmitting = fetcher.state === "submitting" || fetcher.state === "loading" && fetcher.type === "actionReload";
  const isRescheduling = rescheduleFether.state === "submitting" || rescheduleFether.state === "loading" && rescheduleFether.type === "actionReload";
  const labels = props.labels.map((label) => {
    var _a;
    return { label: (_a = label.Label) == null ? void 0 : _a.label, id: label.labelId };
  });
  const hasLabels = labels.length > 0;
  const dueString = isOverDue ? (0, import_moment3.default)(props.dueDate).startOf("day").fromNow() : (0, import_moment3.default)(props.dueDate).endOf("day").fromNow();
  const reschule = (dueDate2) => {
    rescheduleFether.submit({ dueDate: dueDate2 }, {
      method: "post",
      action: `/todo/${props.id}/reschedule`
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-start w-full py-2 rounded-md gap-y-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between w-full"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-lg"
  }, props.title), /* @__PURE__ */ React.createElement(import_react6.HStack, {
    spacing: 2
  }, /* @__PURE__ */ React.createElement(fetcher.Form, {
    method: "post",
    action: `/todo/${props.id}/toggle`
  }, /* @__PURE__ */ React.createElement(import_react6.IconButton, {
    variant: "ghost",
    type: "submit",
    "aria-label": "Toogle task completion",
    isLoading: isSubmitting,
    colorScheme: props.completed ? "green" : "gray",
    icon: props.completed ? /* @__PURE__ */ React.createElement(import_hi.HiCheckCircle, {
      size: 24
    }) : /* @__PURE__ */ React.createElement(import_ri.RiCheckboxBlankCircleLine, {
      size: 24
    }),
    size: "sm"
  })), isOverDue && !props.completed && /* @__PURE__ */ React.createElement(import_react6.Menu, null, /* @__PURE__ */ React.createElement(import_react6.MenuButton, {
    as: import_react6.Button,
    size: "xs",
    disabled: isRescheduling,
    colorScheme: "purple"
  }, isRescheduling ? "Rescheduling..." : "Reschedule"), /* @__PURE__ */ React.createElement(import_react6.MenuList, null, /* @__PURE__ */ React.createElement(import_react6.MenuGroup, null, /* @__PURE__ */ React.createElement(import_react6.MenuItem, {
    onClick: () => reschule(getToday())
  }, "Today"), /* @__PURE__ */ React.createElement(import_react6.MenuItem, {
    onClick: () => reschule(getTomorrow())
  }, "Tomorrow")), /* @__PURE__ */ React.createElement(import_react6.MenuDivider, null), /* @__PURE__ */ React.createElement(import_react6.MenuItem, {
    closeOnSelect: false
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement(import_react_calendar.default, {
    onChange: (value) => {
      const newDueDate = new Date(value);
      reschule((0, import_moment3.default)(newDueDate).format("YYYY-MM-DD"));
    },
    minDate: new Date(getToday())
  }))))), /* @__PURE__ */ React.createElement(import_react6.Menu, null, /* @__PURE__ */ React.createElement(import_react6.MenuButton, null, /* @__PURE__ */ React.createElement(import_bs.BsThreeDotsVertical, null)), /* @__PURE__ */ React.createElement(import_react6.MenuList, null, /* @__PURE__ */ React.createElement(import_react6.MenuItem, {
    onClick: () => navigation(`/todo/${props.id}/edit`)
  }, "Edit"), /* @__PURE__ */ React.createElement(import_react6.MenuItem, {
    onClick: () => navigation(`/todo/${props.id}/delete`)
  }, "Delete"))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between w-full mt-2"
  }, /* @__PURE__ */ React.createElement(import_react6.HStack, null, /* @__PURE__ */ React.createElement(import_react6.Tag, {
    fontSize: "xx-small",
    colorScheme: getPriorityColor(props.priority)
  }, (0, import_change_case.capitalCase)(`${props.priority} PRIORITY`)), (isOverDue || isUpcoming) && !props.completed && /* @__PURE__ */ React.createElement(import_react6.Tag, {
    fontSize: "xx-small",
    colorScheme: isUpcoming ? "green" : "red"
  }, isOverDue ? `Overdue ${dueString}` : `Due ${dueString}`), hasLabels ? labels.map((label) => {
    return /* @__PURE__ */ React.createElement(import_react6.Tag, {
      fontSize: "xx-small",
      colorScheme: "whatsapp",
      key: label.id
    }, label.label);
  }) : null), /* @__PURE__ */ React.createElement(import_react6.HStack, {
    pl: "2",
    spacing: 2
  }, props.updatedAt ? /* @__PURE__ */ React.createElement(import_react6.Tag, {
    ml: "auto",
    fontSize: "xx-small",
    colorScheme: "linkedin"
  }, (0, import_moment3.default)(props.updatedAt).calendar()) : null)));
}

// app/components/card.tsx
init_react();
var import_react7 = require("@chakra-ui/react");
var React6 = __toESM(require("react"));
function Card(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const bg = (0, import_react7.useColorModeValue)("white", "black");
  return /* @__PURE__ */ React6.createElement(import_react7.Flex, __spreadValues({
    flexDir: "column",
    w: "full",
    bg,
    rounded: "md",
    shadow: "md",
    borderColor: "whiteAlpha",
    borderWidth: "0.5px",
    overflow: "hidden",
    p: "4"
  }, props), children);
}

// app/components/vote.tsx
init_react();
var import_react8 = require("@chakra-ui/react");
var import_moment4 = __toESM(require("moment"));
var import_bs2 = require("react-icons/bs");
var import_remix5 = __toESM(require_remix());
function VoteItem(props) {
  const navigation = (0, import_remix5.useNavigate)();
  const upvotesFetcher = (0, import_remix5.useFetcher)();
  const downvoteFetcher = (0, import_remix5.useFetcher)();
  const isUpvoting = upvotesFetcher.state === "submitting" || upvotesFetcher.state === "loading" && upvotesFetcher.type === "actionReload";
  const isDownvoting = downvoteFetcher.state === "submitting" || downvoteFetcher.state === "loading" && downvoteFetcher.type === "actionReload";
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-start w-full py-2 rounded-md gap-y-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between w-full"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-lg"
  }, props.title), /* @__PURE__ */ React.createElement(import_react8.HStack, null, /* @__PURE__ */ React.createElement(upvotesFetcher.Form, {
    method: "post",
    action: `/habits-rank/vote/${props.id}/upvote`
  }, /* @__PURE__ */ React.createElement(import_react8.IconButton, {
    isLoading: isUpvoting,
    variant: "outline",
    "aria-label": "Upvote",
    type: "submit",
    icon: /* @__PURE__ */ React.createElement(import_bs2.BsArrowUp, null),
    size: "sm"
  })), /* @__PURE__ */ React.createElement(downvoteFetcher.Form, {
    method: "post",
    action: `/habits-rank/vote/${props.id}/downvote`
  }, /* @__PURE__ */ React.createElement(import_react8.IconButton, {
    variant: "outline",
    isLoading: isDownvoting,
    type: "submit",
    "aria-label": "Down vote",
    icon: /* @__PURE__ */ React.createElement(import_bs2.BsArrowDown, null),
    size: "sm"
  })), /* @__PURE__ */ React.createElement(import_react8.Menu, null, /* @__PURE__ */ React.createElement(import_react8.MenuButton, null, /* @__PURE__ */ React.createElement(import_bs2.BsThreeDotsVertical, null)), /* @__PURE__ */ React.createElement(import_react8.MenuList, null, /* @__PURE__ */ React.createElement(import_react8.MenuItem, {
    onClick: () => navigation(`/habits-rank/vote/${props.id}/edit`)
  }, "Edit"), /* @__PURE__ */ React.createElement(import_react8.MenuItem, {
    onClick: () => navigation(`/habits-rank/vote/${props.id}/delete`)
  }, "Delete"))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between w-full mt-2"
  }, /* @__PURE__ */ React.createElement(import_react8.HStack, null, /* @__PURE__ */ React.createElement(import_react8.Tag, {
    fontSize: "x-small",
    colorScheme: "purple"
  }, props.upvotes + -props.downvotes, " votes"), /* @__PURE__ */ React.createElement(import_react8.Tag, {
    fontSize: "x-small",
    colorScheme: "twitter"
  }, props.upvotes, " upvotes"), /* @__PURE__ */ React.createElement(import_react8.Tag, {
    fontSize: "x-small",
    colorScheme: "red"
  }, props.downvotes > 0 ? -props.downvotes : props.downvotes, " downvotes"), props.label ? /* @__PURE__ */ React.createElement(import_react8.Tag, {
    fontSize: "x-small",
    colorScheme: "whatsapp"
  }, props.label) : null), /* @__PURE__ */ React.createElement(import_react8.HStack, {
    pl: "2",
    spacing: 2
  }, props.updatedAt ? /* @__PURE__ */ React.createElement(import_react8.Tag, {
    ml: "auto",
    fontSize: "x-small",
    colorScheme: "linkedin"
  }, (0, import_moment4.default)(props.updatedAt).calendar()) : null)));
}

// app/components/dialog.tsx
init_react();
var React7 = __toESM(require("react"));
var import_react9 = require("@chakra-ui/react");
function Dialog(props) {
  const bgColor = (0, import_react9.useColorModeValue)("brand.lightWhite", "brand.100");
  return /* @__PURE__ */ React7.createElement(import_react9.Modal, {
    isOpen: props.isOpen,
    onClose: props.onClose,
    isCentered: true,
    size: "xl"
  }, /* @__PURE__ */ React7.createElement(import_react9.ModalOverlay, {
    backdropFilter: "blur(10px) hue-rotate(90deg)"
  }), /* @__PURE__ */ React7.createElement(import_react9.ModalContent, {
    bg: bgColor
  }, props.children));
}

// app/components/delete-dialog.tsx
init_react();
var import_react10 = require("@chakra-ui/react");
var import_remix6 = __toESM(require_remix());
function DeleteDialog(props) {
  const navigation = (0, import_remix6.useNavigate)();
  const onClose = () => navigation(-1);
  const transition = (0, import_remix6.useTransition)();
  const deleting = transition.state === "submitting";
  return /* @__PURE__ */ React.createElement(Dialog, {
    isOpen: true,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react10.ModalHeader, null, props.title), /* @__PURE__ */ React.createElement(import_react10.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react10.ModalBody, null, props.message), /* @__PURE__ */ React.createElement(import_react10.ModalFooter, null, /* @__PURE__ */ React.createElement(import_react10.Button, {
    onClick: onClose,
    mr: 3
  }, "Cancel"), /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "delete"
  }, /* @__PURE__ */ React.createElement(import_react10.Button, {
    colorScheme: "red",
    isLoading: deleting,
    loadingText: "Deleting",
    type: "submit"
  }, "Delete"))));
}

// app/components/forms/clipboard.tsx
init_react();
var import_react11 = require("@chakra-ui/react");
var import_remix7 = __toESM(require_remix());

// app/utils/form.ts
init_react();
var import_validator = __toESM(require("validator"));
function getFormData(formData, fields) {
  const result = {};
  fields.forEach((field) => {
    const useGetAllMethod = field.useGetAllMethod ?? false;
    const value = useGetAllMethod ? formData.getAll(field.key) : String(formData.get(field.key));
    const isArray = Array.isArray(value);
    if (value === "null" || value === "undefined") {
      result[field.key] = field.defaultValue ?? null;
      return;
    }
    if (!isArray && import_validator.default.isBoolean(value)) {
      result[field.key] = composeToBoolean(value);
      return;
    }
    result[field.key] = typeof field.compose === "function" ? field.compose(value) : value;
  });
  return result;
}
function getFinalFormData(values, fields) {
  const result = {};
  const keys = Object.keys(values);
  keys.forEach((field) => {
    const isInvalidField = fields[field];
    const errorMessage = Array.isArray(isInvalidField) ? isInvalidField[0] ?? "" : "";
    result[field] = {
      value: values[field],
      invalid: Boolean(errorMessage),
      errorMessage
    };
  });
  return result;
}
var composeToBoolean = (value, defaultValue) => {
  const isBoolean = value === "true" || value === "false";
  if (!isBoolean && (defaultValue === true || defaultValue === false)) {
    return defaultValue;
  }
  return value === "true" ? true : false;
};

// app/components/forms/clipboard.tsx
function ClipboardForm(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const navigation = (0, import_remix7.useNavigate)();
  const onClose = () => navigation("/clipboard");
  const transition = (0, import_remix7.useTransition)();
  const submitting = transition.state === "submitting";
  return /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_react11.FormControl, {
    isInvalid: (_a = props == null ? void 0 : props.title) == null ? void 0 : _a.invalid
  }, /* @__PURE__ */ React.createElement(import_react11.FormLabel, null, "Title"), /* @__PURE__ */ React.createElement(import_react11.Input, {
    placeholder: "Title",
    type: "text",
    name: "title",
    isInvalid: (_b = props == null ? void 0 : props.title) == null ? void 0 : _b.invalid,
    defaultValue: ((_c = props == null ? void 0 : props.title) == null ? void 0 : _c.value) ?? ""
  }), /* @__PURE__ */ React.createElement(import_react11.FormErrorMessage, null, (_d = props == null ? void 0 : props.title) == null ? void 0 : _d.errorMessage)), /* @__PURE__ */ React.createElement(import_react11.FormControl, {
    mt: 4,
    isInvalid: (_e = props == null ? void 0 : props.content) == null ? void 0 : _e.invalid
  }, /* @__PURE__ */ React.createElement(import_react11.FormLabel, null, "Content"), /* @__PURE__ */ React.createElement(import_react11.Textarea, {
    name: "content",
    placeholder: "Content to copy",
    isInvalid: (_f = props == null ? void 0 : props.content) == null ? void 0 : _f.invalid,
    defaultValue: ((_g = props == null ? void 0 : props.content) == null ? void 0 : _g.value) ?? ""
  }), /* @__PURE__ */ React.createElement(import_react11.FormErrorMessage, null, (_h = props == null ? void 0 : props.content) == null ? void 0 : _h.errorMessage)), /* @__PURE__ */ React.createElement(import_react11.FormControl, {
    mt: 4,
    isInvalid: (_i = props == null ? void 0 : props.private) == null ? void 0 : _i.invalid
  }, /* @__PURE__ */ React.createElement(import_react11.FormLabel, null, "Is Private"), /* @__PURE__ */ React.createElement(import_react11.Select, {
    name: "private",
    placeholder: "Select option",
    defaultValue: String(composeToBoolean(String((_j = props == null ? void 0 : props.private) == null ? void 0 : _j.value), true)),
    isInvalid: (_k = props == null ? void 0 : props.private) == null ? void 0 : _k.invalid
  }, /* @__PURE__ */ React.createElement("option", {
    value: "false"
  }, "Public"), /* @__PURE__ */ React.createElement("option", {
    value: "true"
  }, "Private")), /* @__PURE__ */ React.createElement(import_react11.FormErrorMessage, null, (_l = props == null ? void 0 : props.private) == null ? void 0 : _l.errorMessage)), /* @__PURE__ */ React.createElement(import_react11.HStack, {
    justifyContent: "flex-end",
    mt: "8"
  }, /* @__PURE__ */ React.createElement(import_react11.Button, {
    onClick: onClose
  }, "Cancel"), /* @__PURE__ */ React.createElement(import_react11.Button, {
    colorScheme: "blue",
    isLoading: submitting,
    loadingText: (props == null ? void 0 : props.submittingText) ?? "Submitting",
    type: "submit"
  }, props.okButtonText ?? "Create")));
}

// app/components/forms/todo.tsx
init_react();
var import_client3 = require("@prisma/client");
var import_react12 = require("@chakra-ui/react");
var import_remix8 = __toESM(require_remix());
var import_moment5 = __toESM(require("moment"));
function TodoForm(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
  const navigation = (0, import_remix8.useNavigate)();
  const onClose = () => navigation("/clipboard");
  const transition = (0, import_remix8.useTransition)();
  const submitting = transition.state === "submitting";
  return /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_react12.FormControl, {
    isInvalid: (_a = props == null ? void 0 : props.title) == null ? void 0 : _a.invalid
  }, /* @__PURE__ */ React.createElement(import_react12.FormLabel, null, "Title"), /* @__PURE__ */ React.createElement(import_react12.Input, {
    placeholder: "Title",
    type: "text",
    name: "title",
    isInvalid: (_b = props == null ? void 0 : props.title) == null ? void 0 : _b.invalid,
    defaultValue: ((_c = props == null ? void 0 : props.title) == null ? void 0 : _c.value) ?? ""
  }), /* @__PURE__ */ React.createElement(import_react12.FormErrorMessage, null, (_d = props == null ? void 0 : props.title) == null ? void 0 : _d.errorMessage)), /* @__PURE__ */ React.createElement(import_react12.FormControl, {
    mt: 4,
    isInvalid: (_e = props == null ? void 0 : props.description) == null ? void 0 : _e.invalid
  }, /* @__PURE__ */ React.createElement(import_react12.FormLabel, null, "Description"), /* @__PURE__ */ React.createElement(import_react12.Textarea, {
    isRequired: false,
    name: "description",
    placeholder: "Description...",
    isInvalid: (_f = props == null ? void 0 : props.description) == null ? void 0 : _f.invalid,
    defaultValue: ((_g = props == null ? void 0 : props.description) == null ? void 0 : _g.value) ?? ""
  }), /* @__PURE__ */ React.createElement(import_react12.FormErrorMessage, null, (_h = props == null ? void 0 : props.description) == null ? void 0 : _h.errorMessage)), /* @__PURE__ */ React.createElement(import_react12.FormControl, {
    mt: 4,
    isInvalid: (_i = props == null ? void 0 : props.completed) == null ? void 0 : _i.invalid
  }, /* @__PURE__ */ React.createElement(import_react12.FormLabel, null, "Completed"), /* @__PURE__ */ React.createElement(import_react12.Select, {
    name: "completed",
    placeholder: "Select option",
    defaultValue: String(composeToBoolean(String((_j = props == null ? void 0 : props.completed) == null ? void 0 : _j.value), false)),
    isInvalid: (_k = props == null ? void 0 : props.completed) == null ? void 0 : _k.invalid
  }, /* @__PURE__ */ React.createElement("option", {
    value: "true"
  }, "True"), /* @__PURE__ */ React.createElement("option", {
    value: "false"
  }, "False")), /* @__PURE__ */ React.createElement(import_react12.FormErrorMessage, null, (_l = props == null ? void 0 : props.completed) == null ? void 0 : _l.errorMessage)), /* @__PURE__ */ React.createElement(import_react12.FormControl, {
    mt: 4,
    isInvalid: (_m = props == null ? void 0 : props.priority) == null ? void 0 : _m.invalid
  }, /* @__PURE__ */ React.createElement(import_react12.FormLabel, null, "Priority"), /* @__PURE__ */ React.createElement(import_react12.Select, {
    name: "priority",
    placeholder: "Select priority",
    defaultValue: ((_n = props == null ? void 0 : props.priority) == null ? void 0 : _n.value) ?? import_client3.Priority.NORMAL,
    isInvalid: (_o = props == null ? void 0 : props.priority) == null ? void 0 : _o.invalid
  }, /* @__PURE__ */ React.createElement("option", {
    value: import_client3.Priority.LOW
  }, "Low"), /* @__PURE__ */ React.createElement("option", {
    value: import_client3.Priority.NORMAL
  }, "Normal"), /* @__PURE__ */ React.createElement("option", {
    value: import_client3.Priority.MEDIUM
  }, "Medium"), /* @__PURE__ */ React.createElement("option", {
    value: import_client3.Priority.HIGH
  }, "High")), /* @__PURE__ */ React.createElement(import_react12.FormErrorMessage, null, (_p = props == null ? void 0 : props.priority) == null ? void 0 : _p.errorMessage)), /* @__PURE__ */ React.createElement(import_react12.FormControl, {
    mt: 4,
    isInvalid: (_q = props == null ? void 0 : props.dueDate) == null ? void 0 : _q.invalid
  }, /* @__PURE__ */ React.createElement(import_react12.FormLabel, {
    htmlFor: "isChecked"
  }, "Due date"), /* @__PURE__ */ React.createElement(import_react12.Input, {
    name: "dueDate",
    isRequired: false,
    type: "date",
    isInvalid: (_r = props == null ? void 0 : props.dueDate) == null ? void 0 : _r.invalid,
    defaultValue: ((_s = props == null ? void 0 : props.dueDate) == null ? void 0 : _s.value) ? (0, import_moment5.default)((_t = props == null ? void 0 : props.dueDate) == null ? void 0 : _t.value).format("YYYY-MM-DD") : ""
  }), /* @__PURE__ */ React.createElement(import_react12.FormErrorMessage, null, (_u = props == null ? void 0 : props.dueDate) == null ? void 0 : _u.errorMessage)), /* @__PURE__ */ React.createElement(import_react12.HStack, {
    justifyContent: "flex-end",
    mt: "8"
  }, /* @__PURE__ */ React.createElement(import_react12.Button, {
    onClick: onClose
  }, "Cancel"), /* @__PURE__ */ React.createElement(import_react12.Button, {
    colorScheme: "blue",
    isLoading: submitting,
    loadingText: props.submittingText ?? "Submitting",
    type: "submit"
  }, props.okButtonText ?? "Create")));
}

// app/components/forms/vote.tsx
init_react();
var import_react13 = require("@chakra-ui/react");
var import_remix9 = __toESM(require_remix());
function HabitForm(props) {
  var _a, _b, _c, _d;
  const navigation = (0, import_remix9.useNavigate)();
  const onClose = () => navigation("/clipboard");
  const transition = (0, import_remix9.useTransition)();
  const submitting = transition.state === "submitting";
  return /* @__PURE__ */ React.createElement(import_remix9.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_react13.FormControl, {
    isInvalid: (_a = props == null ? void 0 : props.title) == null ? void 0 : _a.invalid
  }, /* @__PURE__ */ React.createElement(import_react13.FormLabel, null, "Title"), /* @__PURE__ */ React.createElement(import_react13.Input, {
    placeholder: "Title",
    type: "text",
    name: "title",
    defaultValue: (_b = props == null ? void 0 : props.title) == null ? void 0 : _b.value,
    isInvalid: (_c = props == null ? void 0 : props.title) == null ? void 0 : _c.invalid
  }), /* @__PURE__ */ React.createElement(import_react13.FormErrorMessage, null, (_d = props == null ? void 0 : props.title) == null ? void 0 : _d.errorMessage)), /* @__PURE__ */ React.createElement(import_react13.HStack, {
    justifyContent: "flex-end",
    mt: "8"
  }, /* @__PURE__ */ React.createElement(import_react13.Button, {
    onClick: onClose
  }, "Cancel"), /* @__PURE__ */ React.createElement(import_react13.Button, {
    colorScheme: "blue",
    isLoading: submitting,
    loadingText: props.submittingText ?? "Submitting",
    type: "submit"
  }, props.okButtonText ?? "Create")));
}

// app/components/400.tsx
init_react();
var import_react14 = require("@chakra-ui/react");
function Page400({
  children = null,
  statusCode = 400,
  message = "Not found.",
  description = `The thing you're looking for doesn't exsit.`
}) {
  const bg = (0, import_react14.useColorModeValue)("gray.100", "gray.900");
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_react14.Box, {
    bg,
    my: 8,
    p: 8
  }, /* @__PURE__ */ React.createElement(import_react14.VStack, {
    alignItems: "flex-start",
    spacing: 4
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold text-7xl"
  }, statusCode), /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "lg",
    fontWeight: "bold"
  }, "Ooops!"), /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "lg",
    fontWeight: "bold"
  }, message), /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "lg",
    colorScheme: "blackAlpha"
  }, description), children)));
}

// app/components/500.tsx
init_react();
var import_react16 = require("@chakra-ui/react");

// app/components/go-to-home.tsx
init_react();
var import_react15 = require("@chakra-ui/react");
var import_remix10 = __toESM(require_remix());
function GoToHome() {
  const navigation = (0, import_remix10.useNavigate)();
  return /* @__PURE__ */ React.createElement(import_react15.Button, {
    onClick: () => navigation("/"),
    rounded: "md",
    colorScheme: "purple"
  }, "Go to Home");
}

// app/components/500.tsx
function Page500() {
  const bg = (0, import_react16.useColorModeValue)("gray.100", "gray.900");
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_react16.Box, {
    p: "8",
    my: "8",
    borderRadius: "md",
    bg
  }, /* @__PURE__ */ React.createElement(import_react16.VStack, {
    spacing: 4
  }, /* @__PURE__ */ React.createElement(import_react16.Heading, {
    fontWeight: "bold",
    fontSize: "8xl",
    color: "purple.300"
  }, "500"), /* @__PURE__ */ React.createElement(import_react16.Text, {
    fontSize: "3xl",
    fontWeight: "bold",
    color: "purple.600"
  }, "Sorry, unexpected error occurred"), /* @__PURE__ */ React.createElement(import_react16.Text, {
    color: "gray.600"
  }, "We are working on fixing the problem. Be back soon."), /* @__PURE__ */ React.createElement(GoToHome, null))));
}

// app/components/error-boundary.tsx
init_react();
var ErrorBoundary = () => {
  return /* @__PURE__ */ React.createElement(Page500, null);
};
var error_boundary_default = ErrorBoundary;

// app/components/catch-boundary.tsx
init_react();
var import_remix11 = __toESM(require_remix());
var CatchBoundary = () => {
  var _a;
  const caught = (0, import_remix11.useCatch)();
  let page = /* @__PURE__ */ React.createElement(Page500, null);
  if (caught.status === 404) {
    page = /* @__PURE__ */ React.createElement(Page400, {
      statusCode: caught.status,
      message: (_a = caught.data) == null ? void 0 : _a.message
    });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, page);
};
var catch_boundary_default = CatchBoundary;

// route:/workspace/app/root.tsx
var import_react18 = require("@chakra-ui/react");

// app/utils/auth.server.ts
init_react();
var import_remix_auth_google = require("remix-auth-google");
var import_remix_auth = require("remix-auth");
var import_remix_auth_github = require("remix-auth-github");

// app/utils/session.server.ts
init_react();
var import_remix12 = __toESM(require_remix());
var cookieSecret = process.env.COOKIE_SECRET;
if (!cookieSecret) {
  throw new Error("Please add cookie secret env variable");
}
var sessionStorage = (0, import_remix12.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [cookieSecret],
    secure: false
  }
});
var { getSession, commitSession, destroySession } = sessionStorage;

// app/utils/user.server.ts
init_react();

// app/utils/prisma.server.ts
init_react();
var import_client4 = require("@prisma/client");
var prisma;
if (false) {
  prisma = new import_client4.PrismaClient();
  prisma.$connect();
} else {
  if (!global.__prisma) {
    global.__prisma = new import_client4.PrismaClient();
    global.__prisma.$connect();
  }
  prisma = global.__prisma;
}

// app/utils/user.server.ts
var User = {
  async findOrCreate({ email, profileUrl }) {
    try {
      let user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        user = await prisma.user.create({ data: { email, profileUrl } });
      }
      return user;
    } catch (err) {
      return null;
    }
  }
};

// app/utils/auth.server.ts
var clientID = process.env.CLIENT_ID;
var clientSecret = process.env.CLIENT_SECRET;
var callbackURL = process.env.CALL_BACK_URL;
var googleclientID = process.env.GOOGLE_CLIENT_ID;
var googleclientSecret = process.env.GOOGLE_CLIENT_SECRET;
var googlecallbackURL = process.env.GOOGLE_CALL_BACK_URL;
if (!googleclientID) {
  throw new Error("Google Client id is not added");
}
if (!googleclientSecret) {
  throw new Error("Google Client secret is not added");
}
if (!googlecallbackURL) {
  throw new Error("Google Callback url is not provided");
}
if (!clientID) {
  throw new Error("Client id is not added");
}
if (!clientSecret) {
  throw new Error("Client secret is not added");
}
if (!callbackURL) {
  throw new Error("Callback url is not provided");
}
var googleStrategy = new import_remix_auth_google.GoogleStrategy({
  clientID: googleclientID,
  clientSecret: googleclientSecret,
  callbackURL: googlecallbackURL
}, async ({ profile }) => {
  const email = profile.emails[0].value;
  if (!email) {
    return null;
  }
  return User.findOrCreate({ email: profile.emails[0].value, profileUrl: profile._json.picture });
});
var authenticator = new import_remix_auth.Authenticator(sessionStorage);
var gitHubStrategy = new import_remix_auth_github.GitHubStrategy({
  clientID,
  clientSecret,
  callbackURL
}, async ({ profile }) => {
  return User.findOrCreate({
    email: profile.emails[0].value,
    profileUrl: profile._json.avatar_url
  });
});
authenticator.use(gitHubStrategy);
authenticator.use(googleStrategy);

// app/others/theme.ts
init_react();
var import_react17 = require("@chakra-ui/react");
var import_theme_tools = require("@chakra-ui/theme-tools");
var theme = (0, import_react17.extendTheme)({
  config: {
    initialColorMode: "dark"
  },
  colors: {
    brand: {
      lightWhite: "#fafafa",
      100: "#111",
      900: "#000"
    }
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: (0, import_theme_tools.mode)("gray.800", "whiteAlpha.900")(props),
        bg: (0, import_theme_tools.mode)("brand.lightWhite", "brand.100")(props)
      }
    })
  }
});

// route:/workspace/app/root.tsx
var links2 = () => {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: vendors_default },
    { rel: "icon", href: "/assets/images/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", href: "/assets/images/favicon.png", type: "image/png" }
  ];
};
var loader = async ({ request }) => {
  return authenticator.isAuthenticated(request);
};
function App() {
  return /* @__PURE__ */ React8.createElement(Document, null, /* @__PURE__ */ React8.createElement(import_react18.ChakraProvider, {
    theme
  }, /* @__PURE__ */ React8.createElement(Layout, null, /* @__PURE__ */ React8.createElement(import_remix13.Outlet, null))));
}
var ErrorBoundary2 = () => {
  return /* @__PURE__ */ React8.createElement(Page500, null);
};
function CatchBoundary2() {
  const caught = (0, import_remix13.useCatch)();
  return /* @__PURE__ */ React8.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React8.createElement(import_react18.ChakraProvider, {
    theme
  }, /* @__PURE__ */ React8.createElement(import_react18.Box, null, /* @__PURE__ */ React8.createElement(import_react18.Heading, {
    as: "h1"
  }, caught.status, " ", caught.statusText))));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React8.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React8.createElement("head", null, /* @__PURE__ */ React8.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React8.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React8.createElement("title", null, title) : null, /* @__PURE__ */ React8.createElement(import_remix13.Meta, null), /* @__PURE__ */ React8.createElement(import_remix13.Links, null)), /* @__PURE__ */ React8.createElement("body", null, children, /* @__PURE__ */ React8.createElement(import_remix13.ScrollRestoration, null), /* @__PURE__ */ React8.createElement(import_remix13.Scripts, null), /* @__PURE__ */ React8.createElement(import_remix13.LiveReload, null)));
}
function Layout({ children }) {
  const user = (0, import_remix13.useLoaderData)();
  const location = (0, import_remix13.useLocation)();
  const isLogin = location.pathname === "/login";
  const bgColor = (0, import_react18.useColorModeValue)("bg-[color:var(--chakra-colors-brand-lightWhite)]", "bg-[color:var(--chakra-colors-brand-100)]");
  return /* @__PURE__ */ React8.createElement("div", {
    className: "min-h-screen relative max-h-[100vh]"
  }, /* @__PURE__ */ React8.createElement(TransitionModal, null), !isLogin && /* @__PURE__ */ React8.createElement(Navbar, {
    user
  }), /* @__PURE__ */ React8.createElement("main", {
    className: (0, import_clsx3.default)("h-full w-full pb-24", bgColor)
  }, children));
}

// route:/workspace/app/routes/todo.$id/reschedule.tsx
var reschedule_exports = {};
__export(reschedule_exports, {
  action: () => action,
  default: () => Delete,
  loader: () => loader2
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_zod = require("zod");
var import_moment6 = __toESM(require("moment"));
var DueDateSchema = import_zod.z.date();
var action = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = String(params.id);
  const todo = await prisma.todo.findUnique({
    where: {
      id
    }
  });
  if (!todo) {
    throw (0, import_remix14.redirect)("/todo");
  }
  if (todo.userEmail !== user.email) {
    throw (0, import_remix14.json)({ message: "You are not authorized to edit this content" }, { status: 401 });
  }
  const formData = await request.formData();
  const dueDate = formData.get("dueDate") ? new Date(String(formData.get("dueDate"))) : void 0;
  const dueDateValidationResult = DueDateSchema.safeParse(dueDate);
  if (!dueDateValidationResult.success) {
    return (0, import_remix14.json)({ success: false, message: "Invalid due date passed. Please pass valid due date." });
  }
  try {
    await prisma.todo.update({
      where: {
        id: String(params.id)
      },
      data: {
        dueDate: (0, import_moment6.default)(dueDateValidationResult.data).format("YYYY-MM-DD")
      }
    });
    return (0, import_remix14.json)({ success: true });
  } catch (err) {
    return (0, import_remix14.json)({ success: false, message: "Updating due date failed" });
  }
};
var loader2 = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
};
function Delete() {
  return null;
}

// route:/workspace/app/routes/todo.$id/delete.tsx
var delete_exports = {};
__export(delete_exports, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action2,
  default: () => Delete2,
  meta: () => meta
});
init_react();
var import_remix15 = __toESM(require_remix());
var meta = () => {
  return {
    title: "Todo | Delete"
  };
};
var action2 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = params.id;
  const isCurrentUsers = await prisma.todo.findUnique({
    where: {
      id
    }
  });
  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.todo.delete({
      where: {
        id
      }
    });
  }
  return (0, import_remix15.redirect)("/todo");
};
function Delete2() {
  return /* @__PURE__ */ React.createElement(DeleteDialog, {
    title: "Delete Todo",
    message: "Are you sure to delete this Todo?"
  });
}
var CatchBoundary3 = catch_boundary_default;
var ErrorBoundary3 = error_boundary_default;

// route:/workspace/app/routes/todo.$id/toggle.tsx
var toggle_exports = {};
__export(toggle_exports, {
  action: () => action3,
  default: () => Toggle
});
init_react();
var import_remix16 = __toESM(require_remix());
var action3 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = params.id;
  const todo = await prisma.todo.findUnique({
    where: {
      id: String(id)
    }
  });
  if (!todo || user.email !== (todo == null ? void 0 : todo.userEmail)) {
    return (0, import_remix16.redirect)(`/todo`);
  }
  try {
    await prisma.todo.update({
      data: {
        completed: !todo.completed
      },
      where: {
        id
      }
    });
    return (0, import_remix16.json)({ ok: true });
  } catch (err) {
    throw (0, import_remix16.redirect)("/");
  }
};
function Toggle() {
  return null;
}

// route:/workspace/app/routes/clipboard.$id.tsx
var clipboard_id_exports = {};
__export(clipboard_id_exports, {
  CatchBoundary: () => CatchBoundary4,
  ErrorBoundary: () => ErrorBoundary4,
  default: () => Copy,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var React9 = __toESM(require("react"));
var import_react19 = require("@chakra-ui/react");
var import_remix17 = __toESM(require_remix());
var import_icons = require("@chakra-ui/icons");

// app/utils/browser.ts
init_react();
var copyToClipboard = (data, successCallback) => {
  if (typeof window === "undefined") {
    throw new Error("`copyToClipboard` should be used in the browser environment");
  }
  try {
    navigator.clipboard.writeText(data);
    if (successCallback)
      successCallback(data);
  } catch {
    return;
  }
};

// route:/workspace/app/routes/clipboard.$id.tsx
var meta2 = () => {
  return {
    title: "Clipboard"
  };
};
var loader3 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const clipboardContents = await prisma.clipboardContent.findUnique({
    where: {
      id: Number(params.id)
    }
  });
  if (!clipboardContents) {
    throw (0, import_remix17.json)({ message: `The Clipboard content you're looking for doesn't exists` }, { status: 404 });
  }
  if (clipboardContents.userEmail !== user.email) {
    throw (0, import_remix17.json)({ message: `Unauthorized access. You're not allowed to see this content` }, { status: 401 });
  }
  return (0, import_remix17.json)(clipboardContents);
};
function Copy() {
  var _a;
  const [url, setUrl] = React9.useState("");
  const clipboardContents = (0, import_remix17.useLoaderData)();
  const { id } = (0, import_remix17.useParams)();
  const transition = (0, import_remix17.useTransition)();
  const navigation = (0, import_remix17.useNavigate)();
  const toast = (0, import_react19.useToast)();
  React9.useEffect(() => {
    const url2 = new URL(`${window.location.href}`);
    setUrl(`${composeUrl(url2)}/c/${id}`);
  }, [id]);
  const copy = () => {
    copyToClipboard(clipboardContents.content, () => {
      toast({
        title: "Successfully copied to clipboard",
        status: "success"
      });
    });
  };
  const share = () => {
    copyToClipboard(url, () => {
      toast({
        title: "URL copied to clipboard",
        status: "success"
      });
      toast({
        title: "If you want to share this content to other please make sure to update the content private field to public.",
        status: "info"
      });
    });
  };
  return /* @__PURE__ */ React9.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React9.createElement(PageTitle, null, /* @__PURE__ */ React9.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React9.createElement("h2", {
    className: "text-3xl font-bold"
  }, clipboardContents.title), /* @__PURE__ */ React9.createElement(import_react19.Box, {
    ml: "auto"
  }, /* @__PURE__ */ React9.createElement(import_react19.Menu, null, /* @__PURE__ */ React9.createElement(import_react19.MenuButton, {
    as: import_react19.Button,
    rightIcon: /* @__PURE__ */ React9.createElement(import_icons.ChevronDownIcon, null)
  }, "Options"), /* @__PURE__ */ React9.createElement(import_react19.MenuList, null, /* @__PURE__ */ React9.createElement(import_react19.MenuItem, {
    onClick: () => share()
  }, "Share"), /* @__PURE__ */ React9.createElement(import_react19.MenuItem, {
    onClick: () => copy()
  }, "Copy"), /* @__PURE__ */ React9.createElement(import_react19.MenuItem, {
    onClick: () => navigation(`/clipboard/${id}/edit`)
  }, "Edit"), /* @__PURE__ */ React9.createElement(import_react19.MenuItem, {
    onClick: () => navigation(`/clipboard/${id}/delete`)
  }, "Delete")))))), /* @__PURE__ */ React9.createElement(Wrapper, null, /* @__PURE__ */ React9.createElement(import_remix17.Form, {
    key: (_a = transition.location) == null ? void 0 : _a.key,
    className: "mt-8"
  }, /* @__PURE__ */ React9.createElement(import_react19.FormControl, null, /* @__PURE__ */ React9.createElement(import_react19.FormLabel, null, "Title"), /* @__PURE__ */ React9.createElement(import_react19.Input, {
    disabled: true,
    placeholder: "Title",
    type: "text",
    name: "title",
    defaultValue: clipboardContents.title
  })), /* @__PURE__ */ React9.createElement(import_react19.FormControl, {
    mt: 4
  }, /* @__PURE__ */ React9.createElement(import_react19.FormLabel, null, "Content"), /* @__PURE__ */ React9.createElement(import_react19.Textarea, {
    name: "content",
    disabled: true,
    placeholder: "Content to copy",
    defaultValue: clipboardContents.content
  })), /* @__PURE__ */ React9.createElement(import_react19.FormControl, {
    mt: 4
  }, /* @__PURE__ */ React9.createElement(import_react19.FormLabel, null, "Is Private"), /* @__PURE__ */ React9.createElement(import_react19.Select, {
    name: "private",
    placeholder: "Select option",
    defaultValue: `${clipboardContents.private}` ?? "true",
    disabled: true
  }, /* @__PURE__ */ React9.createElement("option", {
    value: "false"
  }, "Public"), /* @__PURE__ */ React9.createElement("option", {
    value: "true"
  }, "Private")))), /* @__PURE__ */ React9.createElement(import_react19.Tabs, {
    mt: "4"
  }, /* @__PURE__ */ React9.createElement(import_react19.TabList, null, /* @__PURE__ */ React9.createElement(import_react19.Tab, null, "Content QR code"), /* @__PURE__ */ React9.createElement(import_react19.Tab, null, "Shareable link QR code")), /* @__PURE__ */ React9.createElement(import_react19.TabPanels, null, /* @__PURE__ */ React9.createElement(import_react19.TabPanel, null, /* @__PURE__ */ React9.createElement(QRCode, {
    value: clipboardContents.content
  })), /* @__PURE__ */ React9.createElement(import_react19.TabPanel, null, /* @__PURE__ */ React9.createElement(QRCode, {
    value: url
  })))), /* @__PURE__ */ React9.createElement(import_remix17.Outlet, null)));
}
var CatchBoundary4 = catch_boundary_default;
var ErrorBoundary4 = error_boundary_default;

// route:/workspace/app/routes/clipboard.$id/delete.tsx
var delete_exports2 = {};
__export(delete_exports2, {
  CatchBoundary: () => CatchBoundary5,
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action4,
  default: () => Delete3,
  meta: () => meta3
});
init_react();
var import_remix18 = __toESM(require_remix());
var meta3 = () => {
  return {
    title: "Clipboard | Delete"
  };
};
var action4 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = composeNumberId(params);
  const isCurrentUsers = await prisma.clipboardContent.findUnique({
    where: {
      id
    }
  });
  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.clipboardContent.delete({
      where: {
        id
      }
    });
  }
  return (0, import_remix18.redirect)("/clipboard");
};
function Delete3() {
  return /* @__PURE__ */ React.createElement(DeleteDialog, {
    title: "Delete Content",
    message: "Are you sure to delete this Content?"
  });
}
var CatchBoundary5 = catch_boundary_default;
var ErrorBoundary5 = error_boundary_default;

// route:/workspace/app/routes/clipboard.$id/edit.tsx
var edit_exports = {};
__export(edit_exports, {
  CatchBoundary: () => CatchBoundary6,
  ErrorBoundary: () => ErrorBoundary6,
  action: () => action5,
  default: () => ClipboardContentNew,
  loader: () => loader4,
  meta: () => meta4
});
init_react();
var import_remix19 = __toESM(require_remix());
var import_react20 = require("@chakra-ui/react");

// app/types/clipboard.ts
init_react();
var import_zod2 = require("zod");
var ClipboardContentSchema = import_zod2.z.object({
  title: import_zod2.z.string().min(5).max(200),
  content: import_zod2.z.string().min(5).max(2e3),
  private: import_zod2.z.boolean()
});

// route:/workspace/app/routes/clipboard.$id/edit.tsx
var meta4 = () => {
  return {
    title: "Clipboard | Edit"
  };
};
var action5 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = composeNumberId(params);
  const content = await prisma.clipboardContent.findUnique({ where: { id } });
  if (!content || content.userEmail !== user.email) {
    throw (0, import_remix19.redirect)("/clipboard");
  }
  const formData = await request.formData();
  const clipboardContentData = getFormData(formData, [
    { key: "title" },
    { key: "content" },
    { key: "private", defaultValue: false }
  ]);
  const clipboardContentValidationResult = ClipboardContentSchema.safeParse(clipboardContentData);
  if (!clipboardContentValidationResult.success) {
    return getFinalFormData(clipboardContentData, clipboardContentValidationResult.error.formErrors.fieldErrors);
  }
  try {
    const clipboardContent = await prisma.clipboardContent.update({
      where: { id },
      data: {
        content: clipboardContentValidationResult.data.content,
        title: clipboardContentValidationResult.data.title,
        private: clipboardContentValidationResult.data.private
      }
    });
    return (0, import_remix19.redirect)(`/clipboard/${clipboardContent.id}`);
  } catch (err) {
    throw (0, import_remix19.redirect)("/");
  }
};
var loader4 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const clipboardContents = await prisma.clipboardContent.findUnique({
    where: {
      id: Number(params.id)
    }
  });
  if (!clipboardContents) {
    throw (0, import_remix19.json)({ message: `The Clipboard content you're looking for doesn't exists` }, { status: 404 });
  }
  if (clipboardContents.userEmail !== user.email) {
    throw (0, import_remix19.json)({ message: `Unauthorized access. You're not allowed to see this content` }, { status: 401 });
  }
  return (0, import_remix19.json)(clipboardContents);
};
function ClipboardContentNew() {
  const navigation = (0, import_remix19.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix19.useActionData)();
  const content = (0, import_remix19.useLoaderData)();
  const clipboardFormProps = {
    title: __spreadValues({
      value: content.title
    }, actionData == null ? void 0 : actionData.title),
    content: __spreadValues({
      value: content.content
    }, actionData == null ? void 0 : actionData.content),
    private: __spreadValues({
      value: content.private
    }, actionData == null ? void 0 : actionData.private),
    submittingText: "Saving",
    okButtonText: "Save"
  };
  return /* @__PURE__ */ React.createElement(Dialog, {
    isOpen: true,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react20.ModalHeader, null, "Edit Clipboard content"), /* @__PURE__ */ React.createElement(import_react20.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react20.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(ClipboardForm, __spreadValues({}, clipboardFormProps))));
}
var CatchBoundary6 = catch_boundary_default;
var ErrorBoundary6 = error_boundary_default;

// route:/workspace/app/routes/todo.$id/edit.tsx
var edit_exports2 = {};
__export(edit_exports2, {
  CatchBoundary: () => CatchBoundary7,
  ErrorBoundary: () => ErrorBoundary7,
  action: () => action6,
  default: () => TodoEdit,
  loader: () => loader5,
  meta: () => meta5
});
init_react();

// app/types/todo.ts
init_react();
var import_client5 = require("@prisma/client");
var import_zod3 = require("zod");
var TodoSchema = import_zod3.z.object({
  title: import_zod3.z.string().min(5).max(200),
  description: import_zod3.z.string().max(500).optional(),
  completed: import_zod3.z.boolean().optional(),
  dueDate: import_zod3.z.date().optional(),
  priority: import_zod3.z.nativeEnum(import_client5.Priority).optional()
});

// route:/workspace/app/routes/todo.$id/edit.tsx
var import_remix20 = __toESM(require_remix());
var import_react21 = require("@chakra-ui/react");
var import_moment7 = __toESM(require("moment"));
var meta5 = () => {
  return {
    title: "Todo | Edit"
  };
};
var action6 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = params.id;
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) {
    throw (0, import_remix20.redirect)("/todo");
  }
  if (todo.userEmail !== user.email) {
    throw (0, import_remix20.json)({ message: "You are not authorized to edit this content" }, { status: 401 });
  }
  const formData = await request.formData();
  const todoData = getFormData(formData, [
    { key: "title" },
    { key: "description" },
    { key: "completed", defaultValue: false },
    { key: "dueDate", compose: (value) => value ? new Date(String(value)) : void 0 },
    { key: "priority", compose: (value) => composePriority(String(value)) }
  ]);
  const todoValidationResult = TodoSchema.safeParse(todoData);
  if (!todoValidationResult.success) {
    return getFinalFormData(todoData, todoValidationResult.error.formErrors.fieldErrors);
  }
  const payload = {
    description: todoValidationResult.data.description,
    title: todoValidationResult.data.title,
    completed: todoValidationResult.data.completed,
    dueDate: todoValidationResult.data.dueDate ? (0, import_moment7.default)(todoValidationResult.data.dueDate.toLocaleDateString()).format("YYYY-MM-DD") : (0, import_moment7.default)().format("YYYY-MM-DD"),
    priority: todoValidationResult.data.priority
  };
  try {
    await prisma.todo.update({
      where: {
        id: String(params.id)
      },
      data: __spreadProps(__spreadValues({}, payload), { userEmail: user.email })
    });
    return (0, import_remix20.redirect)(`/todo`);
  } catch {
    throw (0, import_remix20.redirect)("/");
  }
};
var loader5 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const todo = await prisma.todo.findUnique({
    where: {
      id: String(params.id)
    }
  });
  if (!todo) {
    throw (0, import_remix20.json)({ message: `The todo you're looking for doesn't exists` }, { status: 404 });
  }
  if (todo.userEmail !== user.email) {
    throw (0, import_remix20.json)({ message: `Unauthorized access. You're not allowed to see this todo` }, { status: 401 });
  }
  return (0, import_remix20.json)(todo);
};
function TodoEdit() {
  const navigation = (0, import_remix20.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix20.useActionData)();
  const todo = (0, import_remix20.useLoaderData)();
  const todoFormProps = {
    title: __spreadValues({
      value: todo.title
    }, actionData == null ? void 0 : actionData.title),
    description: __spreadValues({
      value: todo.description
    }, actionData == null ? void 0 : actionData.description),
    completed: __spreadValues({
      value: todo.completed
    }, actionData == null ? void 0 : actionData.completed),
    dueDate: __spreadValues({
      value: todo.dueDate
    }, actionData == null ? void 0 : actionData.dueDate),
    priority: __spreadValues({
      value: todo.priority
    }, actionData == null ? void 0 : actionData.priority),
    submittingText: "Saving",
    okButtonText: "Save"
  };
  return /* @__PURE__ */ React.createElement(Dialog, {
    isOpen: true,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react21.ModalHeader, null, "Edit Todo"), /* @__PURE__ */ React.createElement(import_react21.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react21.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(TodoForm, __spreadValues({}, todoFormProps))));
}
var CatchBoundary7 = catch_boundary_default;
var ErrorBoundary7 = error_boundary_default;

// route:/workspace/app/routes/auth/github.tsx
var github_exports = {};
__export(github_exports, {
  action: () => action7,
  loader: () => loader6
});
init_react();
var import_remix21 = __toESM(require_remix());
var loader6 = () => (0, import_remix21.redirect)("/login");
var action7 = ({ request }) => {
  return authenticator.authenticate("github", request);
};

// route:/workspace/app/routes/auth/github/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  loader: () => loader7
});
init_react();
var loader7 = ({ request }) => {
  return authenticator.authenticate("github", request, {
    successRedirect: "/",
    failureRedirect: "/login"
  });
};

// route:/workspace/app/routes/auth/google.tsx
var google_exports = {};
__export(google_exports, {
  action: () => action8,
  loader: () => loader8
});
init_react();
var import_remix22 = __toESM(require_remix());
var loader8 = () => (0, import_remix22.redirect)("/login");
var action8 = ({ request }) => {
  return authenticator.authenticate("google", request);
};

// route:/workspace/app/routes/auth/google/callback.tsx
var callback_exports2 = {};
__export(callback_exports2, {
  loader: () => loader9
});
init_react();
var loader9 = ({ request }) => {
  return authenticator.authenticate("google", request, {
    successRedirect: "/",
    failureRedirect: "/login"
  });
};

// route:/workspace/app/routes/habits-rank.tsx
var habits_rank_exports = {};
__export(habits_rank_exports, {
  CatchBoundary: () => CatchBoundary8,
  ErrorBoundary: () => ErrorBoundary8,
  default: () => ClipbaordContent,
  loader: () => loader10,
  meta: () => meta6
});
init_react();
var import_react22 = require("@chakra-ui/react");
var import_io = require("react-icons/io");
var import_ri2 = require("react-icons/ri");
var import_remix23 = __toESM(require_remix());
var meta6 = () => {
  return {
    title: "Vote"
  };
};
var loader10 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  if (query) {
    const searchMatchResult = await prisma.vote.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: "insensitive"
        }
      },
      orderBy: {
        upvotes: "desc"
      }
    });
    return (0, import_remix23.json)(searchMatchResult);
  }
  const votes = await prisma.vote.findMany({
    where: {
      userEmail: user.email
    },
    orderBy: {
      upvotes: "desc"
    }
  });
  return (0, import_remix23.json)(votes);
};
function ClipbaordContent() {
  const votes = (0, import_remix23.useLoaderData)();
  const submit = (0, import_remix23.useSubmit)();
  const borderColor = (0, import_react22.useColorModeValue)("gray.200", "gray.700");
  const navigation = (0, import_remix23.useNavigate)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full py-8"
  }, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_remix23.Form, {
    className: "flex items-center justify-between w-full",
    method: "get",
    onChange: (target) => submit(target.currentTarget)
  }, /* @__PURE__ */ React.createElement(import_react22.InputGroup, {
    size: "md",
    width: "81%"
  }, /* @__PURE__ */ React.createElement(import_react22.InputLeftElement, {
    pointerEvents: "none",
    children: /* @__PURE__ */ React.createElement(import_ri2.RiSearchLine, {
      color: "gray.300"
    })
  }), /* @__PURE__ */ React.createElement(import_react22.Input, {
    pr: "4.5rem",
    type: "text",
    name: "q",
    placeholder: "Search..."
  })), /* @__PURE__ */ React.createElement(import_react22.Button, {
    leftIcon: /* @__PURE__ */ React.createElement(import_io.IoMdAdd, null),
    variant: "solid",
    w: "17%",
    size: "md",
    onClick: () => navigation("/habits-rank/new")
  }, "Add")), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 mt-4 border rounded-md"
  }, /* @__PURE__ */ React.createElement(import_react22.VStack, {
    alignItems: "flex-start",
    divider: /* @__PURE__ */ React.createElement(import_react22.StackDivider, {
      borderColor
    })
  }, votes.map((vote) => {
    return /* @__PURE__ */ React.createElement(VoteItem, __spreadProps(__spreadValues({}, vote), {
      key: vote.id
    }));
  }), votes.length === 0 && /* @__PURE__ */ React.createElement(NoItems, {
    title: "No Votees found. Please add some!!!"
  })))), /* @__PURE__ */ React.createElement(import_remix23.Outlet, null));
}
var CatchBoundary8 = catch_boundary_default;
var ErrorBoundary8 = error_boundary_default;

// route:/workspace/app/routes/habits-rank/vote/$id/downvote.tsx
var downvote_exports = {};
__export(downvote_exports, {
  action: () => action9
});
init_react();
var import_remix24 = __toESM(require_remix());
var action9 = async ({ params, request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = composeNumberId(params);
  const isCurrentUsers = await prisma.vote.findUnique({
    where: {
      id
    }
  });
  if (!isCurrentUsers || isCurrentUsers.userEmail !== user.email) {
    return (0, import_remix24.redirect)("/habits-rank");
  }
  try {
    await prisma.vote.update({
      where: {
        id
      },
      data: {
        downvotes: {
          increment: 1
        }
      }
    });
    return (0, import_remix24.json)({ ok: true });
  } catch (err) {
    throw (0, import_remix24.redirect)("/");
  }
};

// route:/workspace/app/routes/habits-rank/vote/$id/delete.tsx
var delete_exports3 = {};
__export(delete_exports3, {
  CatchBoundary: () => CatchBoundary9,
  ErrorBoundary: () => ErrorBoundary9,
  action: () => action10,
  default: () => Delete4,
  meta: () => meta7
});
init_react();
var import_remix25 = __toESM(require_remix());
var meta7 = () => {
  return {
    title: "Todo | Delete"
  };
};
var action10 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = params.id ? +params.id : void 0;
  const isCurrentUsers = await prisma.vote.findUnique({
    where: {
      id
    }
  });
  if (isCurrentUsers && isCurrentUsers.userEmail === user.email) {
    await prisma.vote.delete({
      where: {
        id
      }
    });
  }
  return (0, import_remix25.redirect)("/habits-rank");
};
function Delete4() {
  return /* @__PURE__ */ React.createElement(DeleteDialog, {
    title: "Delete Habit",
    message: "Are you sure to delete this Habit?"
  });
}
var CatchBoundary9 = catch_boundary_default;
var ErrorBoundary9 = error_boundary_default;

// route:/workspace/app/routes/habits-rank/vote/$id/upvote.tsx
var upvote_exports = {};
__export(upvote_exports, {
  action: () => action11
});
init_react();
var import_remix26 = __toESM(require_remix());
var action11 = async ({ params, request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = params.id ? +params.id : void 0;
  const isCurrentUsers = await prisma.vote.findUnique({
    where: {
      id
    }
  });
  if (!isCurrentUsers || isCurrentUsers.userEmail !== user.email) {
    return (0, import_remix26.redirect)("/habits-rank");
  }
  try {
    await prisma.vote.update({
      where: {
        id
      },
      data: {
        upvotes: {
          increment: 1
        }
      }
    });
    return (0, import_remix26.json)({ ok: true });
  } catch (err) {
    throw (0, import_remix26.redirect)("/");
  }
};

// route:/workspace/app/routes/habits-rank/vote/$id/edit.tsx
var edit_exports3 = {};
__export(edit_exports3, {
  CatchBoundary: () => CatchBoundary10,
  ErrorBoundary: () => ErrorBoundary10,
  action: () => action12,
  default: () => VoteEdit,
  loader: () => loader11
});
init_react();
var import_remix27 = __toESM(require_remix());
var import_react23 = require("@chakra-ui/react");

// app/types/vote.ts
init_react();
var import_zod4 = require("zod");
var VoteSchema = import_zod4.z.object({
  title: import_zod4.z.string().min(5).max(100)
});

// route:/workspace/app/routes/habits-rank/vote/$id/edit.tsx
var action12 = async ({ params, request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = composeNumberId(params);
  const formData = await request.formData();
  const todoData = getFormData(formData, [{ key: "title" }]);
  const VoteValidationResult = VoteSchema.safeParse(todoData);
  if (!VoteValidationResult.success) {
    return getFinalFormData(todoData, VoteValidationResult.error.formErrors.fieldErrors);
  }
  try {
    await prisma.vote.update({
      where: {
        id
      },
      data: {
        title: VoteValidationResult.data.title,
        userEmail: user.email
      }
    });
    return (0, import_remix27.redirect)(`/habits-rank`);
  } catch (err) {
    return (0, import_remix27.redirect)("/");
  }
};
var loader11 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const vote = await prisma.vote.findUnique({
    where: {
      id: params.id ? +params.id : void 0
    }
  });
  if (!vote) {
    throw (0, import_remix27.json)({ message: `The vote you're looking for doesn't exists` }, { status: 404 });
  }
  if (vote.userEmail !== user.email) {
    throw (0, import_remix27.json)({ message: `Unauthorized access. You're not allowed to see this vote` }, { status: 401 });
  }
  return (0, import_remix27.json)(vote);
};
function VoteEdit() {
  const navigation = (0, import_remix27.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix27.useActionData)();
  const vote = (0, import_remix27.useLoaderData)();
  const habitFormProps = {
    title: __spreadValues({
      value: vote.title
    }, actionData == null ? void 0 : actionData.title),
    submittingText: "Saving",
    okButtonText: "Save"
  };
  return /* @__PURE__ */ React.createElement(Dialog, {
    isOpen: true,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react23.ModalHeader, null, "Edit Habit"), /* @__PURE__ */ React.createElement(import_react23.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react23.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(HabitForm, __spreadValues({}, habitFormProps))));
}
var CatchBoundary10 = catch_boundary_default;
var ErrorBoundary10 = error_boundary_default;

// route:/workspace/app/routes/habits-rank/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action13,
  default: () => VoteEdit2,
  loader: () => loader12
});
init_react();
var import_remix28 = __toESM(require_remix());
var import_react24 = require("@chakra-ui/react");
var action13 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  const voteData = getFormData(formData, [{ key: "title", defaultValue: "" }]);
  const voteValidationResult = VoteSchema.safeParse(voteData);
  if (!voteValidationResult.success) {
    return getFinalFormData(voteData, voteValidationResult.error.formErrors.fieldErrors);
  }
  try {
    await prisma.vote.create({
      data: {
        title: voteValidationResult.data.title,
        userEmail: user.email
      }
    });
    return (0, import_remix28.redirect)("/habits-rank");
  } catch (err) {
    return (0, import_remix28.redirect)("/");
  }
};
var loader12 = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
};
function VoteEdit2() {
  const navigation = (0, import_remix28.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix28.useActionData)();
  const habitFormProps = __spreadProps(__spreadValues({}, actionData), {
    submittingText: "Creating",
    okButtonText: "Create"
  });
  return /* @__PURE__ */ React.createElement(Dialog, {
    isOpen: true,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react24.ModalHeader, null, "Create new Habit"), /* @__PURE__ */ React.createElement(import_react24.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react24.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(HabitForm, __spreadValues({}, habitFormProps))));
}

// route:/workspace/app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader13
});
init_react();
var loader13 = async ({ request }) => {
  return new Response("OK");
};

// route:/workspace/app/routes/clipboard.tsx
var clipboard_exports = {};
__export(clipboard_exports, {
  CatchBoundary: () => CatchBoundary11,
  ErrorBoundary: () => ErrorBoundary11,
  default: () => ClipboardContent2,
  loader: () => loader14,
  meta: () => meta8
});
init_react();
var import_react25 = require("@chakra-ui/react");
var import_io2 = require("react-icons/io");
var import_remix29 = __toESM(require_remix());
var import_ri3 = require("react-icons/ri");
var meta8 = () => {
  return {
    title: "Clipboard"
  };
};
var loader14 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  if (query) {
    const searchMatchResult = await prisma.clipboardContent.findMany({
      where: {
        userEmail: user.email,
        title: {
          contains: query,
          mode: "insensitive"
        }
      }
    });
    return (0, import_remix29.json)(searchMatchResult);
  }
  const clipboardContents = await prisma.clipboardContent.findMany({
    where: {
      userEmail: user.email
    }
  });
  return (0, import_remix29.json)(clipboardContents);
};
function ClipboardContent2() {
  const contents = (0, import_remix29.useLoaderData)();
  const navigation = (0, import_remix29.useNavigate)();
  const submit = (0, import_remix29.useSubmit)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full py-8"
  }, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_remix29.Form, {
    className: "flex items-center justify-between w-full",
    method: "get",
    onChange: (target) => submit(target.currentTarget)
  }, /* @__PURE__ */ React.createElement(import_react25.InputGroup, {
    size: "md",
    width: "81%"
  }, /* @__PURE__ */ React.createElement(import_react25.InputLeftElement, {
    pointerEvents: "none",
    children: /* @__PURE__ */ React.createElement(import_ri3.RiSearchLine, {
      color: "gray.300"
    })
  }), /* @__PURE__ */ React.createElement(import_react25.Input, {
    pr: "4.5rem",
    type: "text",
    name: "q",
    placeholder: "Search..."
  })), /* @__PURE__ */ React.createElement(import_react25.Button, {
    leftIcon: /* @__PURE__ */ React.createElement(import_io2.IoMdAdd, null),
    variant: "solid",
    w: "17%",
    size: "md",
    onClick: () => navigation("/clipboard/new")
  }, "Add")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col mt-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
  }, contents.map((content) => {
    return /* @__PURE__ */ React.createElement(import_remix29.Link, {
      to: `/clipboard/${content.id}`,
      key: content.id,
      className: "w-full transition-all border rounded-md hover:border-white"
    }, /* @__PURE__ */ React.createElement(ClipboardContent, __spreadProps(__spreadValues({}, content), {
      key: content.id
    })));
  })), contents.length === 0 && /* @__PURE__ */ React.createElement(NoItems, {
    title: "No copied items found!!!"
  }))), /* @__PURE__ */ React.createElement(import_remix29.Outlet, null));
}
var CatchBoundary11 = catch_boundary_default;
var ErrorBoundary11 = error_boundary_default;

// route:/workspace/app/routes/clipboard/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  CatchBoundary: () => CatchBoundary12,
  ErrorBoundary: () => ErrorBoundary12,
  action: () => action14,
  default: () => ClipboardContentNew2,
  loader: () => loader15,
  meta: () => meta9
});
init_react();
var import_remix30 = __toESM(require_remix());
var import_react26 = require("@chakra-ui/react");
var meta9 = () => {
  return {
    title: "Clipboard | New"
  };
};
var action14 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  const clipboardContentData = getFormData(formData, [
    { key: "title" },
    { key: "content" },
    { key: "private", defaultValue: false }
  ]);
  const clipboardContentValidationResult = ClipboardContentSchema.safeParse(clipboardContentData);
  if (!clipboardContentValidationResult.success) {
    return getFinalFormData(clipboardContentData, clipboardContentValidationResult.error.formErrors.fieldErrors);
  }
  try {
    const clipboardContent = await prisma.clipboardContent.create({
      data: {
        content: clipboardContentValidationResult.data.content,
        title: clipboardContentValidationResult.data.title,
        private: clipboardContentValidationResult.data.private,
        userEmail: user.email
      }
    });
    return (0, import_remix30.redirect)(`/clipboard/${clipboardContent.id}`);
  } catch (err) {
    throw (0, import_remix30.redirect)("/");
  }
};
var loader15 = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
};
function ClipboardContentNew2() {
  const navigation = (0, import_remix30.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix30.useActionData)();
  const clipboardFormProps = __spreadProps(__spreadValues({}, actionData), {
    submittingText: "Creating",
    okButtonText: "Create"
  });
  return /* @__PURE__ */ React.createElement(Dialog, {
    isOpen: true,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react26.ModalHeader, null, "Create new Clipboard content"), /* @__PURE__ */ React.createElement(import_react26.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react26.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(ClipboardForm, __spreadValues({}, clipboardFormProps))));
}
var CatchBoundary12 = catch_boundary_default;
var ErrorBoundary12 = error_boundary_default;

// route:/workspace/app/routes/label.new.tsx
var label_new_exports = {};
__export(label_new_exports, {
  CatchBoundary: () => CatchBoundary13,
  ErrorBoundary: () => ErrorBoundary13,
  action: () => action15,
  default: () => TodoNew,
  loader: () => loader16,
  meta: () => meta10
});
init_react();
var React10 = __toESM(require("react"));
var import_remix31 = __toESM(require_remix());
var import_react27 = require("@chakra-ui/react");
var import_zod5 = require("zod");
var LabelSchema = import_zod5.z.object({
  label: import_zod5.z.string().min(5).max(20)
});
var meta10 = () => {
  return {
    title: "Label | New"
  };
};
var action15 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  const actionData = {
    values: {},
    errors: {
      label: { isInvalid: true, message: "" }
    }
  };
  const labelData = {
    label: String(formData.get("label"))
  };
  const labelValidationResult = LabelSchema.safeParse(labelData);
  if (!labelValidationResult.success) {
    actionData.values = __spreadValues({}, labelData);
    actionData.errors = __spreadValues({}, formatFieldErrorsNew(labelData, labelValidationResult.error.formErrors.fieldErrors));
    return actionData;
  }
  try {
    await prisma.label.create({
      data: { label: labelValidationResult.data.label, userEmail: user.email }
    });
    return (0, import_remix31.redirect)(`/`);
  } catch {
    throw (0, import_remix31.redirect)("/");
  }
};
var loader16 = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
};
function TodoNew() {
  const navigation = (0, import_remix31.useNavigate)();
  const onClose = () => navigation(-1);
  const initialRef = React10.useRef();
  const transition = (0, import_remix31.useTransition)();
  const submitting = transition.state === "submitting";
  const actionData = (0, import_remix31.useActionData)();
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement(import_react27.Modal, {
    initialFocusRef: initialRef,
    isOpen: true,
    onClose,
    isCentered: true,
    size: "xl"
  }, /* @__PURE__ */ React10.createElement(import_react27.ModalOverlay, {
    bg: "none",
    backdropFilter: "auto",
    backdropInvert: "80%",
    backdropBlur: "2px"
  }), /* @__PURE__ */ React10.createElement(import_react27.ModalContent, null, /* @__PURE__ */ React10.createElement(import_react27.ModalHeader, null, "Create new Label"), /* @__PURE__ */ React10.createElement(import_react27.ModalCloseButton, null), /* @__PURE__ */ React10.createElement(import_remix31.Form, {
    method: "post"
  }, /* @__PURE__ */ React10.createElement(import_react27.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React10.createElement(import_react27.FormControl, {
    isInvalid: actionData == null ? void 0 : actionData.errors.label.isInvalid
  }, /* @__PURE__ */ React10.createElement(import_react27.FormLabel, null, "Label"), /* @__PURE__ */ React10.createElement(import_react27.Input, {
    ref: initialRef,
    placeholder: "Label",
    type: "text",
    name: "label",
    isInvalid: actionData == null ? void 0 : actionData.errors.label.isInvalid
  }), /* @__PURE__ */ React10.createElement(import_react27.FormErrorMessage, null, actionData == null ? void 0 : actionData.errors.label.message))), /* @__PURE__ */ React10.createElement(import_react27.ModalFooter, null, /* @__PURE__ */ React10.createElement(import_react27.Button, {
    colorScheme: "blue",
    mr: 3,
    isLoading: submitting,
    loadingText: "Creating",
    type: "submit"
  }, "Create"), /* @__PURE__ */ React10.createElement(import_react27.Button, {
    onClick: onClose
  }, "Cancel"))))));
}
var CatchBoundary13 = catch_boundary_default;
var ErrorBoundary13 = error_boundary_default;

// route:/workspace/app/routes/redirect.tsx
var redirect_exports = {};
__export(redirect_exports, {
  CatchBoundary: () => CatchBoundary14,
  ErrorBoundary: () => ErrorBoundary14,
  action: () => action16,
  default: () => QuickCopy,
  loader: () => loader17,
  meta: () => meta11
});
init_react();
var React11 = __toESM(require("react"));
var import_react28 = require("@chakra-ui/react");
var import_remix32 = __toESM(require_remix());
var import_validator2 = __toESM(require("validator"));
var import_icons2 = require("@chakra-ui/icons");
var meta11 = () => {
  return {
    title: "Quick Redirect"
  };
};
var action16 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  const urlData = getFormData(formData, [{ key: "url", defaultValue: "" }]);
  const urlValidationResult = import_validator2.default.isURL(urlData.url);
  if (!urlValidationResult) {
    return getFinalFormData(urlData, { url: ["Please enter valid URL"] });
  }
  await prisma.user.update({
    where: {
      email: user.email
    },
    data: {
      quickRedirect: urlData.url
    }
  });
  return (0, import_remix32.redirect)("/redirect");
};
var loader17 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const quickRedirect = await prisma.user.findUnique({
    where: { email: user.email },
    select: { quickRedirect: true }
  });
  if (!quickRedirect) {
    throw (0, import_remix32.json)({ message: `Quick redirect you're looking for doesn't exists.` }, { status: 404 });
  }
  return (quickRedirect == null ? void 0 : quickRedirect.quickRedirect) ?? "";
};
function QuickCopy() {
  var _a, _b, _c;
  const [quickUrl, setQuickUrl] = React11.useState("");
  React11.useEffect(() => {
    const url2 = new URL(`${window.location.href}`);
    setQuickUrl(composeUrl(url2, {
      includePathname: false
    }) + "/r");
  }, []);
  const transition = (0, import_remix32.useTransition)();
  const saving = transition.state === "submitting";
  const actionData = (0, import_remix32.useActionData)();
  const url = (0, import_remix32.useLoaderData)();
  const toast = (0, import_react28.useToast)();
  const copy = (url2) => {
    copyToClipboard(url2, () => {
      toast({
        title: "URL successfully copied to clipboard",
        status: "success"
      });
    });
  };
  return /* @__PURE__ */ React11.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React11.createElement(PageTitle, null, /* @__PURE__ */ React11.createElement("h2", {
    className: "text-3xl font-bold"
  }, "Quick Redirect")), /* @__PURE__ */ React11.createElement(Wrapper, null, /* @__PURE__ */ React11.createElement(import_react28.VStack, {
    alignItems: "flex-start",
    w: "full",
    spacing: 8,
    mt: "8"
  }, /* @__PURE__ */ React11.createElement(import_remix32.Form, {
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ React11.createElement(import_react28.FormControl, {
    isInvalid: (_a = actionData == null ? void 0 : actionData.url) == null ? void 0 : _a.invalid
  }, /* @__PURE__ */ React11.createElement(import_react28.FormLabel, null, "URL"), /* @__PURE__ */ React11.createElement(import_react28.Input, {
    placeholder: "Url",
    name: "url",
    w: "full",
    defaultValue: url,
    isInvalid: (_b = actionData == null ? void 0 : actionData.url) == null ? void 0 : _b.invalid
  }), /* @__PURE__ */ React11.createElement(import_react28.FormErrorMessage, null, (_c = actionData == null ? void 0 : actionData.url) == null ? void 0 : _c.errorMessage)), /* @__PURE__ */ React11.createElement(import_react28.HStack, {
    mt: "2"
  }, /* @__PURE__ */ React11.createElement(import_react28.Button, {
    type: "submit",
    isLoading: saving,
    loadingText: "Saving"
  }, "Save"), /* @__PURE__ */ React11.createElement(import_react28.Button, {
    onClick: () => copy(url)
  }, "Copy URL"), /* @__PURE__ */ React11.createElement(import_react28.Link, {
    href: url,
    isExternal: true
  }, "Visit ", /* @__PURE__ */ React11.createElement(import_icons2.ExternalLinkIcon, {
    mx: "2px"
  })))), /* @__PURE__ */ React11.createElement(import_react28.VStack, {
    w: "full",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React11.createElement("h2", null, "Shareable URL"), /* @__PURE__ */ React11.createElement("p", {
    className: "w-full p-4 border rounded-md"
  }, quickUrl), /* @__PURE__ */ React11.createElement(import_react28.HStack, null, /* @__PURE__ */ React11.createElement(import_react28.Button, {
    onClick: () => copy(quickUrl)
  }, "Copy URL"), /* @__PURE__ */ React11.createElement(import_react28.Link, {
    href: quickUrl,
    isExternal: true
  }, "Visit ", /* @__PURE__ */ React11.createElement(import_icons2.ExternalLinkIcon, {
    mx: "2px"
  })))), /* @__PURE__ */ React11.createElement(import_react28.VStack, {
    alignItems: "flex-start",
    w: "full"
  }, /* @__PURE__ */ React11.createElement("h2", {
    className: "font-semibold"
  }, "URL QR code"), /* @__PURE__ */ React11.createElement(QRCode, {
    value: url
  })))));
}
var CatchBoundary14 = catch_boundary_default;
var ErrorBoundary14 = error_boundary_default;

// route:/workspace/app/routes/todo.new.tsx
var todo_new_exports = {};
__export(todo_new_exports, {
  CatchBoundary: () => CatchBoundary15,
  ErrorBoundary: () => ErrorBoundary15,
  action: () => action17,
  default: () => TodoNew2,
  loader: () => loader18,
  meta: () => meta12
});
init_react();
var import_remix33 = __toESM(require_remix());
var import_react29 = require("@chakra-ui/react");
var import_moment8 = __toESM(require("moment"));
var meta12 = () => {
  return {
    title: "Todo | New"
  };
};
var action17 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  const todoData = getFormData(formData, [
    { key: "title" },
    { key: "description" },
    { key: "completed", defaultValue: false },
    { key: "dueDate", compose: (value) => value ? new Date(String(value)) : void 0 },
    { key: "priority", compose: (value) => composePriority(String(value)) }
  ]);
  const todoValidationResult = TodoSchema.safeParse(todoData);
  if (!todoValidationResult.success) {
    return getFinalFormData(todoData, todoValidationResult.error.formErrors.fieldErrors);
  }
  const payload = {
    description: todoValidationResult.data.description,
    title: todoValidationResult.data.title,
    completed: todoValidationResult.data.completed,
    dueDate: todoValidationResult.data.dueDate ? (0, import_moment8.default)(todoValidationResult.data.dueDate.toLocaleDateString()).format("YYYY-MM-DD") : (0, import_moment8.default)().format("YYYY-MM-DD"),
    priority: todoValidationResult.data.priority
  };
  try {
    await prisma.todo.create({
      data: __spreadProps(__spreadValues({}, payload), {
        userEmail: user.email
      })
    });
    return (0, import_remix33.redirect)(`/todo`);
  } catch {
    throw (0, import_remix33.json)({
      message: "Something went wrong.",
      description: "Unable to create new Todo please try again later."
    }, { status: 500 });
  }
};
var loader18 = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
};
function TodoNew2() {
  const navigation = (0, import_remix33.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix33.useActionData)();
  const todoFormProps = __spreadProps(__spreadValues({}, actionData), {
    submittingText: "Creating",
    okButtonText: "Create"
  });
  return /* @__PURE__ */ React.createElement(Dialog, {
    isOpen: true,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react29.ModalHeader, null, "Create new Todo"), /* @__PURE__ */ React.createElement(import_react29.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react29.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(TodoForm, __spreadValues({}, todoFormProps))));
}
var CatchBoundary15 = catch_boundary_default;
var ErrorBoundary15 = error_boundary_default;

// route:/workspace/app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  CatchBoundary: () => CatchBoundary16,
  ErrorBoundary: () => ErrorBoundary16,
  default: () => Profile,
  meta: () => meta13
});
init_react();
var import_react30 = require("@chakra-ui/react");
var import_remix34 = __toESM(require_remix());
var import_clsx4 = __toESM(require("clsx"));
var links3 = [
  {
    title: "General",
    to: "/profile/general"
  },
  {
    title: "Export",
    to: "/profile/export"
  }
];
var meta13 = () => {
  return {
    title: "Profile"
  };
};
function Profile() {
  const location = (0, import_remix34.useLocation)();
  const textColor = (0, import_react30.useColorModeValue)("text-black", "text-white");
  const lightTextColor = (0, import_react30.useColorModeValue)("text-gray-400", "text-gray-600");
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(PageTitle, null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-bold"
  }, "Personal Account Settings")), /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_react30.Stack, {
    direction: ["column", "column", "row", "row"],
    alignItems: "flex-start",
    py: "10"
  }, /* @__PURE__ */ React.createElement(import_react30.VStack, {
    spacing: "4",
    w: "25%",
    alignItems: "flex-start",
    mb: [8, 8, 0, 0]
  }, links3.map((link) => /* @__PURE__ */ React.createElement(import_remix34.Link, {
    to: link.to,
    key: link.to,
    className: (0, import_clsx4.default)(textColor, {
      [lightTextColor]: !location.pathname.includes(link.to),
      "font-bold": location.pathname.includes(link.to)
    })
  }, link.title))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full lg:w-3/4"
  }, /* @__PURE__ */ React.createElement(import_remix34.Outlet, null)))));
}
var CatchBoundary16 = catch_boundary_default;
var ErrorBoundary16 = error_boundary_default;

// route:/workspace/app/routes/profile/general.tsx
var general_exports = {};
__export(general_exports, {
  CatchBoundary: () => CatchBoundary17,
  ErrorBoundary: () => ErrorBoundary17,
  default: () => General,
  loader: () => loader19,
  meta: () => meta14
});
init_react();
var import_react31 = require("@chakra-ui/react");
var import_remix35 = __toESM(require_remix());
var meta14 = () => {
  return {
    title: "Profile | General"
  };
};
var loader19 = async ({ request }) => {
  return authenticator.isAuthenticated(request, { failureRedirect: "/login" });
};
function General() {
  const user = (0, import_remix35.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react31.VStack, {
    spacing: 8
  }, user.profileUrl && /* @__PURE__ */ React.createElement(import_react31.Avatar, {
    name: user.name ?? user.email[0],
    src: user.profileUrl,
    size: "2xl"
  }), /* @__PURE__ */ React.createElement(import_react31.InputGroup, null, /* @__PURE__ */ React.createElement(import_react31.InputLeftAddon, {
    children: "Email"
  }), /* @__PURE__ */ React.createElement(import_react31.Input, {
    type: "text",
    placeholder: "Your email",
    defaultValue: user.email
  }))));
}
var CatchBoundary17 = catch_boundary_default;
var ErrorBoundary17 = error_boundary_default;

// route:/workspace/app/routes/profile/export.tsx
var export_exports = {};
__export(export_exports, {
  CatchBoundary: () => CatchBoundary18,
  ErrorBoundary: () => ErrorBoundary18,
  Item: () => Item,
  default: () => General2,
  loader: () => loader20,
  meta: () => meta15
});
init_react();
var import_icons3 = require("@chakra-ui/icons");
var import_react32 = require("@chakra-ui/react");
var import_remix36 = __toESM(require_remix());
var meta15 = () => {
  return {
    title: "Profile | Export"
  };
};
var Item = /* @__PURE__ */ ((Item2) => {
  Item2["Clipboards"] = "clipboards";
  Item2["Votes"] = "votes";
  Item2["Todos"] = "todos";
  Item2["User"] = "todos";
  Item2["QuickRedirect"] = "quickRedirect";
  Item2["QuickContent"] = "quickContent";
  Item2["All"] = "all";
  return Item2;
})(Item || {});
var loader20 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, { failureRedirect: "/login" });
  const clipboards = await prisma.clipboardContent.count({
    where: { userEmail: user.email }
  });
  const votes = await prisma.vote.count({
    where: { userEmail: user.email }
  });
  const todos = await prisma.todo.count({
    where: { userEmail: user.email }
  });
  const userData = await prisma.user.findUnique({ where: { id: user.id } });
  const data = {
    user: userData,
    clipboards,
    todos,
    votes
  };
  return (0, import_remix36.json)(data);
};
var ExportItem = ({ title, content, pathname }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-full p-4 border rounded-md gap-y-2"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-2 text-xl font-bold"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "p-4 break-words border rounded-md"
  }, content), /* @__PURE__ */ React.createElement(import_react32.Link, {
    href: `/export?name=${pathname}`,
    isExternal: true,
    download: pathname
  }, "Export ", /* @__PURE__ */ React.createElement(import_icons3.ExternalLinkIcon, {
    mx: "2px"
  })));
};
function General2() {
  const data = (0, import_remix36.useLoaderData)();
  const exportItems = [
    {
      title: "Copy",
      content: data.user.quickContent,
      pathname: "quickContent" /* QuickContent */
    },
    {
      title: "Redirect",
      content: data.user.quickRedirect,
      pathname: "quickRedirect" /* QuickRedirect */
    },
    {
      title: "Clipboard",
      content: `${data.clipboards} clipboard items`,
      pathname: "clipboards" /* Clipboards */
    },
    {
      title: "Todos",
      content: `${data.todos} todo items`,
      pathname: "todos" /* Todos */
    },
    {
      title: "Votes",
      content: `${data.votes} votes items`,
      pathname: "votes" /* Votes */
    }
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_react32.VStack, {
    alignItems: "flex-start",
    w: "full"
  }, /* @__PURE__ */ React.createElement(import_react32.VStack, {
    w: "full",
    spacing: 6
  }, exportItems.map((exportItem) => /* @__PURE__ */ React.createElement(ExportItem, __spreadProps(__spreadValues({}, exportItem), {
    key: exportItem.title
  }))), /* @__PURE__ */ React.createElement(import_react32.Link, {
    href: `/export?name=${"all" /* All */}`,
    isExternal: true,
    download: "all" /* All */
  }, "Export all ", /* @__PURE__ */ React.createElement(import_icons3.ExternalLinkIcon, {
    mx: "2px"
  })))));
}
var CatchBoundary18 = catch_boundary_default;
var ErrorBoundary18 = error_boundary_default;

// route:/workspace/app/routes/export.tsx
var export_exports2 = {};
__export(export_exports2, {
  loader: () => loader21,
  meta: () => meta16
});
init_react();
var import_remix37 = __toESM(require_remix());
var meta16 = () => {
  return {
    title: "Export"
  };
};
var getData = async (name, user) => {
  if (!name) {
    return {};
  }
  const config = {
    ["clipboards" /* Clipboards */]: await prisma.clipboardContent.findMany({ where: { userEmail: user.email } }),
    ["quickContent" /* QuickContent */]: user.quickContent,
    ["quickRedirect" /* QuickRedirect */]: user.quickRedirect,
    ["todos" /* Todos */]: await prisma.todo.findMany({ where: { userEmail: user.email } }),
    ["votes" /* Votes */]: await prisma.vote.findMany({ where: { userEmail: user.email } })
  };
  if (name === "all" /* All */) {
    return config;
  }
  if (!config[name]) {
    return {};
  }
  return config[name];
};
var loader21 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, { failureRedirect: "/login" });
  const userData = await prisma.user.findUnique({ where: { id: user.id } });
  if (!userData) {
    return (0, import_remix37.redirect)("/login");
  }
  const url = new URL(request.url);
  const name = String(url.searchParams.get("name")) ?? "";
  const data = await getData(name, userData);
  return new Response(JSON.stringify({ [name]: data }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
};

// route:/workspace/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action18,
  default: () => Logout,
  loader: () => loader22
});
init_react();
var import_remix38 = __toESM(require_remix());
var action18 = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/login" });
  const session = await getSession(request.headers.get("Cookie"));
  throw (0, import_remix38.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
var loader22 = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/login" });
  const session = await getSession(request.headers.get("Cookie"));
  throw (0, import_remix38.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
function Logout() {
  return null;
}

// route:/workspace/app/routes/c.$id.tsx
var c_id_exports = {};
__export(c_id_exports, {
  CatchBoundary: () => CatchBoundary19,
  ErrorBoundary: () => ErrorBoundary19,
  default: () => CopyId,
  loader: () => loader23,
  meta: () => meta17
});
init_react();
var React12 = __toESM(require("react"));
var import_react33 = require("@chakra-ui/react");
var import_remix39 = __toESM(require_remix());
var meta17 = () => {
  return {
    title: "Quick Copy"
  };
};
var loader23 = async ({ request, params }) => {
  const clipboardContentId = params.id;
  if (!clipboardContentId) {
    throw (0, import_remix39.json)({ message: `Clipboard Content you're looking for does not exist` }, {
      status: 404
    });
  }
  if (clipboardContentId === "latest") {
    const user = await authenticator.isAuthenticated(request, {
      failureRedirect: "/login"
    });
    const clipboardContent2 = await prisma.clipboardContent.findFirst({
      where: { userEmail: user.email },
      orderBy: {
        createdAt: "desc"
      }
    });
    if (!clipboardContent2) {
      throw (0, import_remix39.json)({ message: `Clipboard Content you're looking for does not exist` }, {
        status: 404
      });
    }
    return { content: clipboardContent2.content, title: clipboardContent2.title };
  }
  if (clipboardContentId === "q") {
    const user = await authenticator.isAuthenticated(request, {
      failureRedirect: "/login"
    });
    const currentUser = await prisma.user.findUnique({
      where: { email: user.email }
    });
    if (!currentUser) {
      throw (0, import_remix39.json)({ message: `Clipboard Content you're looking for does not exist` }, {
        status: 404
      });
    }
    return { content: currentUser.quickContent, title: "Quick Copy" };
  }
  const clipboardContent = await prisma.clipboardContent.findUnique({
    where: { id: Number(clipboardContentId) }
  });
  if (!clipboardContent) {
    throw (0, import_remix39.json)({ message: `Clipboard Content you're looking for does not exist` }, {
      status: 404
    });
  }
  if (!(clipboardContent == null ? void 0 : clipboardContent.private)) {
    return { content: clipboardContent.content, title: clipboardContent.title };
  }
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return { content: clipboardContent.content, title: clipboardContent.title };
};
function CopyId() {
  const content = (0, import_remix39.useLoaderData)();
  const toast = (0, import_react33.useToast)();
  const copy = React12.useCallback(() => {
    copyToClipboard(content.content, () => {
      toast({
        title: "Successfully copied to clipboard",
        status: "success"
      });
    });
  }, [content.content, toast]);
  React12.useEffect(() => {
    copy();
  }, [copy]);
  return /* @__PURE__ */ React12.createElement("div", null, /* @__PURE__ */ React12.createElement(PageTitle, null, /* @__PURE__ */ React12.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React12.createElement("h2", {
    className: "text-3xl font-bold"
  }, content.title), /* @__PURE__ */ React12.createElement(import_react33.Button, {
    onClick: () => copy(),
    ml: "auto"
  }, "Copy"))), /* @__PURE__ */ React12.createElement(Wrapper, null, /* @__PURE__ */ React12.createElement(import_react33.VStack, {
    alignItems: "flex-start",
    py: "6",
    spacing: 6
  }, /* @__PURE__ */ React12.createElement("p", {
    className: "mt-4"
  }, "The content below is automatically copied."), /* @__PURE__ */ React12.createElement("p", {
    className: "w-full p-4 border rounded-md"
  }, content.content))));
}
var CatchBoundary19 = catch_boundary_default;
var ErrorBoundary19 = error_boundary_default;

// route:/workspace/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Copy2,
  loader: () => loader24
});
init_react();
var import_remix40 = __toESM(require_remix());
var loader24 = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return (0, import_remix40.redirect)("/home");
};
function Copy2() {
  return null;
}

// route:/workspace/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  CatchBoundary: () => CatchBoundary20,
  ErrorBoundary: () => ErrorBoundary20,
  default: () => SimpleCard,
  loader: () => loader25,
  meta: () => meta18
});
init_react();
var import_react34 = require("@chakra-ui/react");
var import_remix41 = __toESM(require_remix());
var import_bs3 = require("react-icons/bs");
var meta18 = () => {
  return {
    title: "Clipi | Sign up (or in)"
  };
};
var loader25 = async ({ request }) => {
  await authenticator.isAuthenticated(request, { successRedirect: "/" });
  return null;
};
function SimpleCard() {
  const githubAuthFetcher = (0, import_remix41.useFetcher)();
  const googleAuthFetcher = (0, import_remix41.useFetcher)();
  const isGithubAuthenticating = githubAuthFetcher.state === "submitting";
  const isGoogleAuthenticating = googleAuthFetcher.state === "submitting";
  return /* @__PURE__ */ React.createElement(import_react34.Stack, {
    minH: "100vh",
    direction: { base: "column", md: "row" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center flex-1 p-8"
  }, /* @__PURE__ */ React.createElement(import_react34.Stack, {
    spacing: 4,
    w: "full",
    maxW: "md"
  }, /* @__PURE__ */ React.createElement(import_react34.Heading, {
    fontSize: "2xl",
    mb: "4"
  }, "Sign in to your account"), /* @__PURE__ */ React.createElement(import_react34.Stack, {
    spacing: 4
  }, /* @__PURE__ */ React.createElement(githubAuthFetcher.Form, {
    action: "/auth/github",
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_react34.Button, {
    isLoading: isGithubAuthenticating,
    loadingText: "Authenticating",
    colorScheme: "telegram",
    variant: "solid",
    w: "full",
    leftIcon: /* @__PURE__ */ React.createElement(import_bs3.BsGithub, null),
    type: "submit"
  }, "Sign In (or up) with Github")), /* @__PURE__ */ React.createElement(import_react34.Text, {
    textAlign: "center",
    color: "gray.300"
  }, "Or"), /* @__PURE__ */ React.createElement(googleAuthFetcher.Form, {
    action: "/auth/google",
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_react34.Button, {
    isLoading: isGoogleAuthenticating,
    loadingText: "Authenticating",
    colorScheme: "telegram",
    variant: "solid",
    w: "full",
    leftIcon: /* @__PURE__ */ React.createElement(import_bs3.BsGoogle, null),
    type: "submit"
  }, "Sign In (or up) with Google"))))), /* @__PURE__ */ React.createElement(import_react34.Flex, {
    flex: 1
  }, /* @__PURE__ */ React.createElement(import_react34.Image, {
    alt: "Login Image",
    objectFit: "cover",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
  })));
}
var CatchBoundary20 = catch_boundary_default;
var ErrorBoundary20 = error_boundary_default;

// route:/workspace/app/routes/copy.tsx
var copy_exports = {};
__export(copy_exports, {
  CatchBoundary: () => CatchBoundary21,
  ErrorBoundary: () => ErrorBoundary21,
  action: () => action19,
  default: () => QuickCopy2,
  loader: () => loader26,
  meta: () => meta19
});
init_react();
var React13 = __toESM(require("react"));
var import_react35 = require("@chakra-ui/react");
var import_remix42 = __toESM(require_remix());
var meta19 = () => {
  return {
    title: "Quick Copy"
  };
};
var action19 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  const contentData = getFormData(formData, [{ key: "content", defaultValue: "" }]);
  await prisma.user.update({
    where: {
      email: user.email
    },
    data: {
      quickContent: contentData.content
    }
  });
  return (0, import_remix42.redirect)("/copy");
};
var loader26 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const quickContent = await prisma.user.findUnique({
    where: { email: user.email },
    select: { quickContent: true }
  });
  return (quickContent == null ? void 0 : quickContent.quickContent) ?? "";
};
function QuickCopy2() {
  const [url, setUrl] = React13.useState("");
  const transition = (0, import_remix42.useTransition)();
  const saving = transition.state === "submitting";
  React13.useEffect(() => {
    const url2 = new URL(`${window.location.href}/c/q`);
    setUrl(composeUrl(url2));
  }, []);
  const content = (0, import_remix42.useLoaderData)();
  const toast = (0, import_react35.useToast)();
  const copy = () => {
    copyToClipboard(url, () => {
      toast({
        title: "URL successfully copied to clipboard",
        status: "success"
      });
    });
  };
  return /* @__PURE__ */ React13.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React13.createElement(PageTitle, null, /* @__PURE__ */ React13.createElement("h2", {
    className: "text-3xl font-bold"
  }, "Quick Copy")), /* @__PURE__ */ React13.createElement(Wrapper, null, /* @__PURE__ */ React13.createElement(import_react35.VStack, {
    alignItems: "flex-start",
    w: "full",
    mt: "8",
    spacing: 8
  }, /* @__PURE__ */ React13.createElement(import_remix42.Form, {
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ React13.createElement(import_react35.FormControl, null, /* @__PURE__ */ React13.createElement(import_react35.FormLabel, null, "Content"), /* @__PURE__ */ React13.createElement(import_react35.Textarea, {
    placeholder: "Title",
    name: "content",
    defaultValue: content
  })), /* @__PURE__ */ React13.createElement(import_react35.Button, {
    type: "submit",
    isLoading: saving,
    loadingText: "Saving",
    mt: "2"
  }, "Save")), /* @__PURE__ */ React13.createElement(import_react35.VStack, {
    w: "full",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React13.createElement("h2", null, "Shareable URL"), /* @__PURE__ */ React13.createElement("p", {
    className: "w-full p-4 border rounded-md"
  }, url), /* @__PURE__ */ React13.createElement(import_react35.HStack, null, /* @__PURE__ */ React13.createElement(import_react35.Button, {
    onClick: copy
  }, "Copy URL"), /* @__PURE__ */ React13.createElement(import_react35.Button, null, /* @__PURE__ */ React13.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, "Visit")))), /* @__PURE__ */ React13.createElement(import_react35.Tabs, {
    w: "full"
  }, /* @__PURE__ */ React13.createElement(import_react35.TabList, null, /* @__PURE__ */ React13.createElement(import_react35.Tab, null, "Content QR code"), /* @__PURE__ */ React13.createElement(import_react35.Tab, null, "Shareable link QR code")), /* @__PURE__ */ React13.createElement(import_react35.TabPanels, null, /* @__PURE__ */ React13.createElement(import_react35.TabPanel, null, /* @__PURE__ */ React13.createElement(QRCode, {
    value: content
  })), /* @__PURE__ */ React13.createElement(import_react35.TabPanel, null, /* @__PURE__ */ React13.createElement(QRCode, {
    value: url
  })))))));
}
var CatchBoundary21 = catch_boundary_default;
var ErrorBoundary21 = error_boundary_default;

// route:/workspace/app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  CatchBoundary: () => CatchBoundary22,
  ErrorBoundary: () => ErrorBoundary22,
  default: () => Index,
  loader: () => loader27,
  meta: () => meta20
});
init_react();
var import_react36 = require("@chakra-ui/react");
var import_remix43 = __toESM(require_remix());
var meta20 = () => {
  return {
    title: "Home"
  };
};
var loader27 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const todos = await prisma.todo.findMany({
    where: {
      userEmail: user.email,
      dueDate: {
        equals: getToday()
      }
    },
    include: {
      labels: {
        include: {
          Label: true
        }
      }
    },
    orderBy: {
      completed: "asc"
    }
  });
  const votes = await prisma.vote.findMany({
    where: {
      userEmail: user.email
    },
    orderBy: {
      updatedAt: "desc"
    },
    take: 5
  });
  return (0, import_remix43.json)({ todos: todos ?? [], votes: votes ?? [] });
};
function Index() {
  const data = (0, import_remix43.useLoaderData)();
  const borderColor = (0, import_react36.useColorModeValue)("gray.200", "gray.800");
  const incompleteTask = data.todos.reduce((acc, current) => {
    if (current.completed) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full py-8"
  }, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_react36.VStack, {
    alignItems: "flex-start",
    w: "full",
    spacing: 6
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between pb-2 mb-4 border-b"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-bold"
  }, "Todos"), /* @__PURE__ */ React.createElement(import_react36.HStack, null, /* @__PURE__ */ React.createElement(import_react36.Tag, null, incompleteTask), /* @__PURE__ */ React.createElement("span", null, "/"), /* @__PURE__ */ React.createElement(import_react36.Tag, {
    colorScheme: "cyan"
  }, data.todos.length, " completed"))), /* @__PURE__ */ React.createElement(import_react36.VStack, {
    alignItems: "flex-start",
    divider: /* @__PURE__ */ React.createElement(import_react36.StackDivider, {
      borderColor
    })
  }, data.todos.map((todo) => /* @__PURE__ */ React.createElement(TodoItem, __spreadProps(__spreadValues({}, todo), {
    key: todo.id
  })))), data.todos.length === 0 && /* @__PURE__ */ React.createElement(NoItems, {
    title: "No todos for today!!!"
  })), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between pb-2 mb-4 border-b"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-bold"
  }, "Habits Rank")), /* @__PURE__ */ React.createElement(import_react36.VStack, {
    alignItems: "flex-start",
    divider: /* @__PURE__ */ React.createElement(import_react36.StackDivider, {
      borderColor
    })
  }, data.votes.map((vote) => /* @__PURE__ */ React.createElement(VoteItem, __spreadProps(__spreadValues({}, vote), {
    key: vote.id
  })))), data.votes.length === 0 && /* @__PURE__ */ React.createElement(NoItems, {
    title: "No habit rank votes found for today!!!"
  })))));
}
var CatchBoundary22 = catch_boundary_default;
var ErrorBoundary22 = error_boundary_default;

// route:/workspace/app/routes/todo.tsx
var todo_exports = {};
__export(todo_exports, {
  CatchBoundary: () => CatchBoundary23,
  ErrorBoundary: () => ErrorBoundary23,
  default: () => TodoIndex,
  loader: () => loader28,
  meta: () => meta21
});
init_react();
var import_react37 = require("@chakra-ui/react");
var import_moment9 = __toESM(require("moment"));
var import_io3 = require("react-icons/io");
var import_ri4 = require("react-icons/ri");
var import_ri5 = require("react-icons/ri");
var import_remix44 = __toESM(require_remix());
var meta21 = () => {
  return {
    title: "Todo"
  };
};
var loader28 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const filterBy = url.searchParams.get("filterBy") ?? "showall" /* SHOW_ALL */;
  const sortBy = url.searchParams.get("sortBy") ?? "latest" /* LATEST */;
  const show = url.searchParams.get("show") ?? "pending";
  const dueDate = (0, import_moment9.default)().format("YYYY-MM-DD");
  let addiontalQuery = {};
  let orderBy = {};
  if (sortBy === "latest" /* LATEST */) {
    orderBy = {
      createdAt: "desc"
    };
  } else if (sortBy === "title" /* TITLE */) {
    orderBy = {
      title: "asc"
    };
  } else if (sortBy === "priority" /* PRIORITY */) {
    orderBy = {
      priority: "asc"
    };
  } else if (sortBy === "lastupdated" /* LAST_UPDATED */) {
    orderBy = {
      updatedAt: "desc"
    };
  }
  if (filterBy === "upcoming" /* UPCOMING */) {
    addiontalQuery = {
      dueDate: {
        gt: dueDate
      }
    };
  } else if (filterBy === "overdue" /* OVERDUE */) {
    addiontalQuery = {
      dueDate: {
        lt: dueDate
      }
    };
  } else if (filterBy === "today" /* TODAY */) {
    addiontalQuery = {
      dueDate: {
        equals: dueDate
      }
    };
  } else if (filterBy === "showall" /* SHOW_ALL */) {
    addiontalQuery = {};
  }
  if (query) {
    const searchMatchResult = await prisma.todo.findMany({
      where: __spreadValues({
        userEmail: user.email,
        title: {
          contains: query,
          mode: "insensitive"
        }
      }, addiontalQuery),
      include: {
        labels: {
          include: {
            Label: true
          }
        }
      },
      orderBy: __spreadValues({}, orderBy)
    });
    return (0, import_remix44.json)({ todo: searchMatchResult, filterBy, sortBy, show });
  }
  const todo = await prisma.todo.findMany({
    where: __spreadValues({
      userEmail: user.email
    }, addiontalQuery),
    include: {
      labels: {
        include: {
          Label: true
        }
      }
    },
    orderBy: __spreadValues({}, orderBy)
  });
  if (todo.length === 0) {
    throw (0, import_remix44.json)({
      message: "No todos found",
      description: `It seems like you've not added any todos yet. Please press the below button to add some todos.`
    }, { status: 404 });
  }
  return (0, import_remix44.json)({ todo, filterBy, sortBy, show });
};
function TodoIndex() {
  const navigation = (0, import_remix44.useNavigate)();
  const { todo, filterBy, sortBy } = (0, import_remix44.useLoaderData)();
  const submit = (0, import_remix44.useSubmit)();
  const borderColor = (0, import_react37.useColorModeValue)("gray.200", "gray.800");
  const completedTodos = todo.filter((todo2) => todo2.completed);
  const hasCompletedSomeTodos = completedTodos.length > 0;
  const hasPendingTodos = todo.length > completedTodos.length;
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full py-8"
  }, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_remix44.Form, {
    className: "flex items-center justify-between w-full",
    method: "get",
    onChange: (target) => submit(target.currentTarget),
    onReset: (target) => submit(target.currentTarget)
  }, /* @__PURE__ */ React.createElement(import_react37.VStack, {
    w: "full"
  }, /* @__PURE__ */ React.createElement(import_react37.Stack, {
    direction: ["column", "column", "row", "row"],
    justifyContent: ["flex-start"],
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_react37.InputGroup, {
    size: "md"
  }, /* @__PURE__ */ React.createElement(import_react37.InputLeftElement, {
    pointerEvents: "none",
    children: /* @__PURE__ */ React.createElement(import_ri4.RiSearchLine, {
      color: "gray.300"
    })
  }), /* @__PURE__ */ React.createElement(import_react37.Input, {
    pr: "4.5rem",
    type: "text",
    name: "q",
    placeholder: "Search..."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_react37.HStack, {
    flex: "2",
    justifyContent: "flex-start",
    w: "100%"
  }, /* @__PURE__ */ React.createElement(import_react37.Select, {
    name: "filterBy",
    defaultValue: filterBy ?? "showall" /* SHOW_ALL */
  }, /* @__PURE__ */ React.createElement("option", {
    disabled: true,
    value: "showall" /* SHOW_ALL */
  }, "Filter by"), /* @__PURE__ */ React.createElement("option", {
    value: "showall" /* SHOW_ALL */
  }, "Show All"), /* @__PURE__ */ React.createElement("option", {
    value: "today" /* TODAY */
  }, "Today"), /* @__PURE__ */ React.createElement("option", {
    value: "upcoming" /* UPCOMING */
  }, "Upcoming"), /* @__PURE__ */ React.createElement("option", {
    value: "overdue" /* OVERDUE */
  }, "Overdue")), /* @__PURE__ */ React.createElement(import_react37.Select, {
    name: "sortBy",
    defaultValue: sortBy ?? "latest" /* LATEST */
  }, /* @__PURE__ */ React.createElement("option", {
    disabled: true,
    value: "latest" /* LATEST */
  }, "Sort by"), /* @__PURE__ */ React.createElement("option", {
    value: "latest" /* LATEST */
  }, "Latest"), /* @__PURE__ */ React.createElement("option", {
    value: "title" /* TITLE */
  }, "Title"), /* @__PURE__ */ React.createElement("option", {
    value: "priority" /* PRIORITY */
  }, "Priority"), /* @__PURE__ */ React.createElement("option", {
    value: "lastupdated" /* LAST_UPDATED */
  }, "Last updated"))))), /* @__PURE__ */ React.createElement(import_react37.HStack, {
    w: "full",
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_react37.Button, {
    leftIcon: /* @__PURE__ */ React.createElement(import_io3.IoMdAdd, null),
    variant: "outline",
    colorScheme: "twitter",
    w: ["full", "full", "initial", "initial"],
    size: "md",
    onClick: () => navigation("/todo/new")
  }, "Add"), /* @__PURE__ */ React.createElement(import_react37.Button, {
    leftIcon: /* @__PURE__ */ React.createElement(import_ri5.RiDeleteBack2Line, null),
    variant: "outline",
    w: ["full", "full", "initial", "initial"],
    colorScheme: "red",
    size: "md",
    type: "reset"
  }, "Clear")))), todo.length === 0 && /* @__PURE__ */ React.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ React.createElement(NoItems, {
    title: "No todo list items found!!!"
  })), hasPendingTodos && /* @__PURE__ */ React.createElement("h2", {
    className: "pb-4 mt-10 text-xl font-bold border-b"
  }, "Pending"), /* @__PURE__ */ React.createElement(import_react37.VStack, {
    alignItems: "flex-start",
    mt: "6",
    divider: /* @__PURE__ */ React.createElement(import_react37.StackDivider, {
      borderColor
    })
  }, hasPendingTodos && todo.map((todo2) => {
    if (!todo2.completed) {
      return /* @__PURE__ */ React.createElement(TodoItem, __spreadProps(__spreadValues({}, todo2), {
        key: todo2.id
      }));
    }
    return null;
  })), hasCompletedSomeTodos && /* @__PURE__ */ React.createElement("h2", {
    className: "pb-4 mt-10 text-xl font-bold border-b"
  }, "Completed"), /* @__PURE__ */ React.createElement(import_react37.VStack, {
    alignItems: "flex-start",
    mt: "6",
    divider: /* @__PURE__ */ React.createElement(import_react37.StackDivider, {
      borderColor
    })
  }, todo.length > 0 && todo.map((todo2) => {
    if (todo2.completed) {
      return /* @__PURE__ */ React.createElement(TodoItem, __spreadProps(__spreadValues({}, todo2), {
        key: todo2.id
      }));
    }
    return null;
  }))));
}
var CatchBoundary23 = () => {
  const caught = (0, import_remix44.useCatch)();
  const navigation = (0, import_remix44.useNavigate)();
  let page = /* @__PURE__ */ React.createElement(Page500, null);
  if (caught.status === 404) {
    page = /* @__PURE__ */ React.createElement(Page400, {
      statusCode: 404,
      message: caught.data.message,
      description: caught.data.description
    }, /* @__PURE__ */ React.createElement(import_react37.HStack, null, /* @__PURE__ */ React.createElement(import_react37.Button, {
      leftIcon: /* @__PURE__ */ React.createElement(import_io3.IoMdAdd, null),
      onClick: () => navigation("/todo/new"),
      colorScheme: "twitter"
    }, "Add Todo"), /* @__PURE__ */ React.createElement(GoToHome, null)));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, page);
};
var ErrorBoundary23 = () => {
  return /* @__PURE__ */ React.createElement(Page500, null);
};

// route:/workspace/app/routes/r.tsx
var r_exports = {};
__export(r_exports, {
  default: () => Redirect,
  loader: () => loader29
});
init_react();
var import_remix45 = __toESM(require_remix());
var loader29 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const quickRedirect = await prisma.user.findUnique({
    where: { email: user.email },
    select: { quickRedirect: true }
  });
  if (quickRedirect == null ? void 0 : quickRedirect.quickRedirect) {
    return (0, import_remix45.redirect)(quickRedirect == null ? void 0 : quickRedirect.quickRedirect);
  }
  return (0, import_remix45.redirect)("/");
};
function Redirect() {
  return null;
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "901b9de4", "entry": { "module": "/build/entry.client-ZHQ7MIQD.js", "imports": ["/build/_shared/chunk-HSOWRK2U.js", "/build/_shared/chunk-VF3ZZLCR.js", "/build/_shared/chunk-VQYBAUSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-XBC6ADUA.js", "imports": ["/build/_shared/chunk-UALKYSJS.js", "/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/auth/github": { "id": "routes/auth/github", "parentId": "root", "path": "auth/github", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/github-CWDKG55F.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/github/callback": { "id": "routes/auth/github/callback", "parentId": "routes/auth/github", "path": "callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/github/callback-AKQ2FMDI.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/google": { "id": "routes/auth/google", "parentId": "root", "path": "auth/google", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/google-VU4QZGJZ.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/google/callback": { "id": "routes/auth/google/callback", "parentId": "routes/auth/google", "path": "callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/google/callback-4X3UQPQR.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/c.$id": { "id": "routes/c.$id", "parentId": "root", "path": "c/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/c.$id-KMEYCLUQ.js", "imports": ["/build/_shared/chunk-QGNHCIHD.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/clipboard": { "id": "routes/clipboard", "parentId": "root", "path": "clipboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard-WQ4YMDW7.js", "imports": ["/build/_shared/chunk-NIP4GEHQ.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/clipboard.$id": { "id": "routes/clipboard.$id", "parentId": "root", "path": "clipboard/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard.$id-EAWF23EB.js", "imports": ["/build/_shared/chunk-G6EVR3XU.js", "/build/_shared/chunk-QGNHCIHD.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/clipboard.$id/delete": { "id": "routes/clipboard.$id/delete", "parentId": "routes/clipboard.$id", "path": "delete", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard.$id/delete-URQ7CZQ4.js", "imports": ["/build/_shared/chunk-UALKYSJS.js", "/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/clipboard.$id/edit": { "id": "routes/clipboard.$id/edit", "parentId": "routes/clipboard.$id", "path": "edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard.$id/edit-SWBUKXZ2.js", "imports": ["/build/_shared/chunk-UALKYSJS.js", "/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/clipboard/new": { "id": "routes/clipboard/new", "parentId": "routes/clipboard", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard/new-X46HREUA.js", "imports": ["/build/_shared/chunk-UALKYSJS.js", "/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/copy": { "id": "routes/copy", "parentId": "root", "path": "copy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/copy-3VO6B4MQ.js", "imports": ["/build/_shared/chunk-QGNHCIHD.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/export": { "id": "routes/export", "parentId": "root", "path": "export", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/export-KLUTHL4H.js", "imports": ["/build/_shared/chunk-BZMO6D4F.js", "/build/_shared/chunk-G6EVR3XU.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/habits-rank": { "id": "routes/habits-rank", "parentId": "root", "path": "habits-rank", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank-W2U5LKD3.js", "imports": ["/build/_shared/chunk-NIP4GEHQ.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/habits-rank/new": { "id": "routes/habits-rank/new", "parentId": "routes/habits-rank", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank/new-2DMLPWVU.js", "imports": ["/build/_shared/chunk-UALKYSJS.js", "/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/habits-rank/vote/$id/delete": { "id": "routes/habits-rank/vote/$id/delete", "parentId": "routes/habits-rank", "path": "vote/:id/delete", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank/vote/$id/delete-GGVEEY34.js", "imports": ["/build/_shared/chunk-UALKYSJS.js", "/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/habits-rank/vote/$id/downvote": { "id": "routes/habits-rank/vote/$id/downvote", "parentId": "routes/habits-rank", "path": "vote/:id/downvote", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank/vote/$id/downvote-OLLFC5DX.js", "imports": ["/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/habits-rank/vote/$id/edit": { "id": "routes/habits-rank/vote/$id/edit", "parentId": "routes/habits-rank", "path": "vote/:id/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank/vote/$id/edit-W6MZ5AID.js", "imports": ["/build/_shared/chunk-UALKYSJS.js", "/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/habits-rank/vote/$id/upvote": { "id": "routes/habits-rank/vote/$id/upvote", "parentId": "routes/habits-rank", "path": "vote/:id/upvote", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank/vote/$id/upvote-MQX45ALW.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/healthcheck": { "id": "routes/healthcheck", "parentId": "root", "path": "healthcheck", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/healthcheck-KJGAZNWT.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-CNYZ5IIK.js", "imports": ["/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-FJG7NZ5Q.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/label.new": { "id": "routes/label.new", "parentId": "root", "path": "label/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/label.new-HCS4ONND.js", "imports": ["/build/_shared/chunk-WIVCPSQY.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-462EQMT7.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-IN5YUGZ6.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-ZX554FNH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/profile/export": { "id": "routes/profile/export", "parentId": "routes/profile", "path": "export", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile/export-K7PFFBJB.js", "imports": ["/build/_shared/chunk-BZMO6D4F.js", "/build/_shared/chunk-G6EVR3XU.js", "/build/_shared/chunk-UALKYSJS.js", "/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/profile/general": { "id": "routes/profile/general", "parentId": "routes/profile", "path": "general", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile/general-BWSYQ5DN.js", "imports": ["/build/_shared/chunk-UALKYSJS.js", "/build/_shared/chunk-BB3ECQEG.js", "/build/_shared/chunk-DEEIFPJA.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/r": { "id": "routes/r", "parentId": "root", "path": "r", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/r-2YBAUZBE.js", "imports": ["/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/redirect": { "id": "routes/redirect", "parentId": "root", "path": "redirect", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/redirect-D4PXORMD.js", "imports": ["/build/_shared/chunk-G6EVR3XU.js", "/build/_shared/chunk-QGNHCIHD.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/todo": { "id": "routes/todo", "parentId": "root", "path": "todo", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo-5CPLTH7G.js", "imports": ["/build/_shared/chunk-NIP4GEHQ.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/todo.$id/delete": { "id": "routes/todo.$id/delete", "parentId": "root", "path": "todo/:id/delete", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo.$id/delete-YYFZ4OKF.js", "imports": ["/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/todo.$id/edit": { "id": "routes/todo.$id/edit", "parentId": "root", "path": "todo/:id/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo.$id/edit-UGSWC2YI.js", "imports": ["/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/todo.$id/reschedule": { "id": "routes/todo.$id/reschedule", "parentId": "root", "path": "todo/:id/reschedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo.$id/reschedule-H5EXHZUE.js", "imports": ["/build/_shared/chunk-WIVCPSQY.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo.$id/toggle": { "id": "routes/todo.$id/toggle", "parentId": "root", "path": "todo/:id/toggle", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo.$id/toggle-UREEOPDD.js", "imports": ["/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo.new": { "id": "routes/todo.new", "parentId": "root", "path": "todo/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo.new-NTN2FBH7.js", "imports": ["/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true } }, "url": "/build/manifest-901B9DE4.js" };

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
  "routes/todo.$id/reschedule": {
    id: "routes/todo.$id/reschedule",
    parentId: "root",
    path: "todo/:id/reschedule",
    index: void 0,
    caseSensitive: void 0,
    module: reschedule_exports
  },
  "routes/todo.$id/delete": {
    id: "routes/todo.$id/delete",
    parentId: "root",
    path: "todo/:id/delete",
    index: void 0,
    caseSensitive: void 0,
    module: delete_exports
  },
  "routes/todo.$id/toggle": {
    id: "routes/todo.$id/toggle",
    parentId: "root",
    path: "todo/:id/toggle",
    index: void 0,
    caseSensitive: void 0,
    module: toggle_exports
  },
  "routes/clipboard.$id": {
    id: "routes/clipboard.$id",
    parentId: "root",
    path: "clipboard/:id",
    index: void 0,
    caseSensitive: void 0,
    module: clipboard_id_exports
  },
  "routes/clipboard.$id/delete": {
    id: "routes/clipboard.$id/delete",
    parentId: "routes/clipboard.$id",
    path: "delete",
    index: void 0,
    caseSensitive: void 0,
    module: delete_exports2
  },
  "routes/clipboard.$id/edit": {
    id: "routes/clipboard.$id/edit",
    parentId: "routes/clipboard.$id",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/todo.$id/edit": {
    id: "routes/todo.$id/edit",
    parentId: "root",
    path: "todo/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports2
  },
  "routes/auth/github": {
    id: "routes/auth/github",
    parentId: "root",
    path: "auth/github",
    index: void 0,
    caseSensitive: void 0,
    module: github_exports
  },
  "routes/auth/github/callback": {
    id: "routes/auth/github/callback",
    parentId: "routes/auth/github",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports
  },
  "routes/auth/google": {
    id: "routes/auth/google",
    parentId: "root",
    path: "auth/google",
    index: void 0,
    caseSensitive: void 0,
    module: google_exports
  },
  "routes/auth/google/callback": {
    id: "routes/auth/google/callback",
    parentId: "routes/auth/google",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports2
  },
  "routes/habits-rank": {
    id: "routes/habits-rank",
    parentId: "root",
    path: "habits-rank",
    index: void 0,
    caseSensitive: void 0,
    module: habits_rank_exports
  },
  "routes/habits-rank/vote/$id/downvote": {
    id: "routes/habits-rank/vote/$id/downvote",
    parentId: "routes/habits-rank",
    path: "vote/:id/downvote",
    index: void 0,
    caseSensitive: void 0,
    module: downvote_exports
  },
  "routes/habits-rank/vote/$id/delete": {
    id: "routes/habits-rank/vote/$id/delete",
    parentId: "routes/habits-rank",
    path: "vote/:id/delete",
    index: void 0,
    caseSensitive: void 0,
    module: delete_exports3
  },
  "routes/habits-rank/vote/$id/upvote": {
    id: "routes/habits-rank/vote/$id/upvote",
    parentId: "routes/habits-rank",
    path: "vote/:id/upvote",
    index: void 0,
    caseSensitive: void 0,
    module: upvote_exports
  },
  "routes/habits-rank/vote/$id/edit": {
    id: "routes/habits-rank/vote/$id/edit",
    parentId: "routes/habits-rank",
    path: "vote/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports3
  },
  "routes/habits-rank/new": {
    id: "routes/habits-rank/new",
    parentId: "routes/habits-rank",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/clipboard": {
    id: "routes/clipboard",
    parentId: "root",
    path: "clipboard",
    index: void 0,
    caseSensitive: void 0,
    module: clipboard_exports
  },
  "routes/clipboard/new": {
    id: "routes/clipboard/new",
    parentId: "routes/clipboard",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/label.new": {
    id: "routes/label.new",
    parentId: "root",
    path: "label/new",
    index: void 0,
    caseSensitive: void 0,
    module: label_new_exports
  },
  "routes/redirect": {
    id: "routes/redirect",
    parentId: "root",
    path: "redirect",
    index: void 0,
    caseSensitive: void 0,
    module: redirect_exports
  },
  "routes/todo.new": {
    id: "routes/todo.new",
    parentId: "root",
    path: "todo/new",
    index: void 0,
    caseSensitive: void 0,
    module: todo_new_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/profile/general": {
    id: "routes/profile/general",
    parentId: "routes/profile",
    path: "general",
    index: void 0,
    caseSensitive: void 0,
    module: general_exports
  },
  "routes/profile/export": {
    id: "routes/profile/export",
    parentId: "routes/profile",
    path: "export",
    index: void 0,
    caseSensitive: void 0,
    module: export_exports
  },
  "routes/export": {
    id: "routes/export",
    parentId: "root",
    path: "export",
    index: void 0,
    caseSensitive: void 0,
    module: export_exports2
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/c.$id": {
    id: "routes/c.$id",
    parentId: "root",
    path: "c/:id",
    index: void 0,
    caseSensitive: void 0,
    module: c_id_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/copy": {
    id: "routes/copy",
    parentId: "root",
    path: "copy",
    index: void 0,
    caseSensitive: void 0,
    module: copy_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/todo": {
    id: "routes/todo",
    parentId: "root",
    path: "todo",
    index: void 0,
    caseSensitive: void 0,
    module: todo_exports
  },
  "routes/r": {
    id: "routes/r",
    parentId: "root",
    path: "r",
    index: void 0,
    caseSensitive: void 0,
    module: r_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaW5kZXgudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsICIuLi9hcHAvdXRpbHMvaW5kZXgudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvY2xpcGJvYXJkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy90cmFuc2l0aW9uLW1vZGFsLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy93cmFwcGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wYWdlLXRpdGxlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zcGlubmVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9uby1pdGVtcy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvcXJjb2RlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy90b2RvLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jYXJkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy92b3RlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9kaWFsb2cudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1kaWFsb2cudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1zL2NsaXBib2FyZC50c3giLCAiLi4vYXBwL3V0aWxzL2Zvcm0udHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvZm9ybXMvdG9kby50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvZm9ybXMvdm90ZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvNDAwLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy81MDAudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2dvLXRvLWhvbWUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Vycm9yLWJvdW5kYXJ5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jYXRjaC1ib3VuZGFyeS50c3giLCAiLi4vYXBwL3V0aWxzL2F1dGguc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvdXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL3ByaXNtYS5zZXJ2ZXIudHMiLCAiLi4vYXBwL290aGVycy90aGVtZS50cyIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby4kaWQvcmVzY2hlZHVsZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3RvZG8uJGlkL2RlbGV0ZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3RvZG8uJGlkL3RvZ2dsZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2NsaXBib2FyZC4kaWQudHN4IiwgIi4uL2FwcC91dGlscy9icm93c2VyLnRzIiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9jbGlwYm9hcmQuJGlkL2RlbGV0ZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2NsaXBib2FyZC4kaWQvZWRpdC50c3giLCAiLi4vYXBwL3R5cGVzL2NsaXBib2FyZC50cyIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby4kaWQvZWRpdC50c3giLCAiLi4vYXBwL3R5cGVzL3RvZG8udHMiLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2F1dGgvZ2l0aHViLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvYXV0aC9naXRodWIvY2FsbGJhY2sudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9hdXRoL2dvb2dsZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2F1dGgvZ29vZ2xlL2NhbGxiYWNrLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvaGFiaXRzLXJhbmsudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kb3dudm90ZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2RlbGV0ZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL3Vwdm90ZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2VkaXQudHN4IiwgIi4uL2FwcC90eXBlcy92b3RlLnRzIiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oYWJpdHMtcmFuay9uZXcudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oZWFsdGhjaGVjay50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2NsaXBib2FyZC50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2NsaXBib2FyZC9uZXcudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9sYWJlbC5uZXcudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9yZWRpcmVjdC50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3RvZG8ubmV3LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvcHJvZmlsZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3Byb2ZpbGUvZ2VuZXJhbC50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3Byb2ZpbGUvZXhwb3J0LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvZXhwb3J0LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvYy4kaWQudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvY29weS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2hvbWUudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy90b2RvLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvci50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbidcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJ1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdAcmVtaXgtcnVuL2V4cHJlc3MnXG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCdcblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSlcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKVxuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoJy9idWlsZCcsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMvYnVpbGQnLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiAnMXknIH0pKVxuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMvYnVpbGQnLCB7IG1heEFnZTogJzFoJyB9KSlcblxuYXBwLnVzZShtb3JnYW4oJ3RpbnknKSlcblxuYXBwLmFsbChcbiAgJyonLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KSxcbilcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMFxuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKVxufSlcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvd29ya3NwYWNlL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy90b2RvLiRpZC9yZXNjaGVkdWxlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby4kaWQvZGVsZXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby4kaWQvdG9nZ2xlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkLiRpZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2NsaXBib2FyZC4kaWQvZGVsZXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkLiRpZC9lZGl0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby4kaWQvZWRpdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2F1dGgvZ2l0aHViLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvYXV0aC9naXRodWIvY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvYXV0aC9nb29nbGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvYXV0aC9nb29nbGUvY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvaGFiaXRzLXJhbmsudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZG93bnZvdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZGVsZXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL3Vwdm90ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9lZGl0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2hhYml0cy1yYW5rL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oZWFsdGhjaGVjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTkgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9jbGlwYm9hcmQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIwIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjEgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9sYWJlbC5uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIyIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvcmVkaXJlY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIzIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby5uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI0IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvcHJvZmlsZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjUgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9wcm9maWxlL2dlbmVyYWwudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI2IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvcHJvZmlsZS9leHBvcnQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI3IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvZXhwb3J0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyOCBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjkgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9jLiRpZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzAgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzEgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzIgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9jb3B5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzMyBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2hvbWUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTM0IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzUgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9yLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvdG9kby4kaWQvcmVzY2hlZHVsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdG9kby4kaWQvcmVzY2hlZHVsZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0b2RvLzppZC9yZXNjaGVkdWxlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy90b2RvLiRpZC9kZWxldGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3RvZG8uJGlkL2RlbGV0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0b2RvLzppZC9kZWxldGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3RvZG8uJGlkL3RvZ2dsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdG9kby4kaWQvdG9nZ2xlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRvZG8vOmlkL3RvZ2dsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xpcGJvYXJkLiRpZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xpcGJvYXJkLiRpZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjbGlwYm9hcmQvOmlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9jbGlwYm9hcmQuJGlkL2RlbGV0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xpcGJvYXJkLiRpZC9kZWxldGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jbGlwYm9hcmQuJGlkXCIsXG4gICAgICBwYXRoOiBcImRlbGV0ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xpcGJvYXJkLiRpZC9lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jbGlwYm9hcmQuJGlkL2VkaXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jbGlwYm9hcmQuJGlkXCIsXG4gICAgICBwYXRoOiBcImVkaXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3RvZG8uJGlkL2VkaXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3RvZG8uJGlkL2VkaXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidG9kby86aWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9naXRodWJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvZ2l0aHViXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvZ2l0aHViXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2dpdGh1Yi9jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9naXRodWIvY2FsbGJhY2tcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hdXRoL2dpdGh1YlwiLFxuICAgICAgcGF0aDogXCJjYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9nb29nbGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvZ29vZ2xlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvZ29vZ2xlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9nb29nbGUvY2FsbGJhY2tcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvZ29vZ2xlL2NhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYXV0aC9nb29nbGVcIixcbiAgICAgIHBhdGg6IFwiY2FsbGJhY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9oYWJpdHMtcmFua1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmtcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaGFiaXRzLXJhbmtcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kb3dudm90ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZG93bnZvdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9oYWJpdHMtcmFua1wiLFxuICAgICAgcGF0aDogXCJ2b3RlLzppZC9kb3dudm90ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2RlbGV0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZGVsZXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmtcIixcbiAgICAgIHBhdGg6IFwidm90ZS86aWQvZGVsZXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvdXB2b3RlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC91cHZvdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9oYWJpdHMtcmFua1wiLFxuICAgICAgcGF0aDogXCJ2b3RlLzppZC91cHZvdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTVcbiAgICB9LFxuICBcInJvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmtcIixcbiAgICAgIHBhdGg6IFwidm90ZS86aWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL2hhYml0cy1yYW5rL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmsvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmtcIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvaGVhbHRoY2hlY2tcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hlYWx0aGNoZWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImhlYWx0aGNoZWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE4XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xpcGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jbGlwYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2xpcGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE5XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xpcGJvYXJkL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xpcGJvYXJkL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NsaXBib2FyZFwiLFxuICAgICAgcGF0aDogXCJuZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjBcbiAgICB9LFxuICBcInJvdXRlcy9sYWJlbC5uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xhYmVsLm5ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsYWJlbC9uZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjFcbiAgICB9LFxuICBcInJvdXRlcy9yZWRpcmVjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVkaXJlY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVkaXJlY3RcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjJcbiAgICB9LFxuICBcInJvdXRlcy90b2RvLm5ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdG9kby5uZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidG9kby9uZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjNcbiAgICB9LFxuICBcInJvdXRlcy9wcm9maWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9maWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2ZpbGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjRcbiAgICB9LFxuICBcInJvdXRlcy9wcm9maWxlL2dlbmVyYWxcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2ZpbGUvZ2VuZXJhbFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3Byb2ZpbGVcIixcbiAgICAgIHBhdGg6IFwiZ2VuZXJhbFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyNVxuICAgIH0sXG4gIFwicm91dGVzL3Byb2ZpbGUvZXhwb3J0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9maWxlL2V4cG9ydFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3Byb2ZpbGVcIixcbiAgICAgIHBhdGg6IFwiZXhwb3J0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI2XG4gICAgfSxcbiAgXCJyb3V0ZXMvZXhwb3J0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leHBvcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZXhwb3J0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYy4kaWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2MuJGlkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImMvOmlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI5XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzMFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzMVxuICAgIH0sXG4gIFwicm91dGVzL2NvcHlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NvcHlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29weVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzMlxuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzM1xuICAgIH0sXG4gIFwicm91dGVzL3RvZG9cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3RvZG9cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidG9kb1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzNFxuICAgIH0sXG4gIFwicm91dGVzL3JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzNVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0LFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+KVxuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VDYXRjaCxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlTG9jYXRpb24sXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IHRhaWx3aW5kU3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL3RhaWx3aW5kLmNzcydcbmltcG9ydCB2ZW5kb3JzU3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL3ZlbmRvcnMuY3NzJ1xuXG5pbXBvcnQgeyBOYXZiYXIsIFBhZ2U1MDAsIFRyYW5zaXRpb25Nb2RhbCB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IEJveCwgQ2hha3JhUHJvdmlkZXIsIEhlYWRpbmcsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICcuL3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL290aGVycy90aGVtZSdcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGdsb2JhbFN0eWxlc1VybCB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHRhaWx3aW5kU3R5bGVzVXJsIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogdmVuZG9yc1N0eWxlc1VybCB9LFxuICAgIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvYXNzZXRzL2ltYWdlcy9mYXZpY29uLnN2ZycsIHR5cGU6ICdpbWFnZS9zdmcreG1sJyB9LFxuICAgIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZycsIHR5cGU6ICdpbWFnZS9wbmcnIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L0RvY3VtZW50PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gKCkgPT4ge1xuICByZXR1cm4gPFBhZ2U1MDAgLz5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIj5cbiAgICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfSB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuLCB0aXRsZSB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7IHRpdGxlPzogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YTxVc2VyPigpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIGNvbnN0IGlzTG9naW4gPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9sb2dpbidcblxuICBjb25zdCBiZ0NvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoXG4gICAgJ2JnLVtjb2xvcjp2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLWxpZ2h0V2hpdGUpXScsXG4gICAgJ2JnLVtjb2xvcjp2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTEwMCldJyxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcmVsYXRpdmUgbWF4LWgtWzEwMHZoXVwiPlxuICAgICAgPFRyYW5zaXRpb25Nb2RhbCAvPlxuICAgICAgeyFpc0xvZ2luICYmIDxOYXZiYXIgdXNlcj17dXNlcn0gLz59XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Nsc3goJ2gtZnVsbCB3LWZ1bGwgcGItMjQnLCBiZ0NvbG9yKX0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZGViYXIgfSBmcm9tICcuL3NpZGViYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsaXBib2FyZENvbnRlbnQgfSBmcm9tICcuL2NsaXBib2FyZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9lcnJvci1tZXNzYWdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmFuc2l0aW9uTW9kYWwgfSBmcm9tICcuL3RyYW5zaXRpb24tbW9kYWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdyYXBwZXIgfSBmcm9tICcuL3dyYXBwZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VUaXRsZSB9IGZyb20gJy4vcGFnZS10aXRsZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3Bpbm5lciB9IGZyb20gJy4vc3Bpbm5lcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm9JdGVtcyB9IGZyb20gJy4vbm8taXRlbXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFFSQ29kZSB9IGZyb20gJy4vcXJjb2RlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2RvSXRlbSB9IGZyb20gJy4vdG9kbydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZCB9IGZyb20gJy4vY2FyZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVm90ZUl0ZW0gfSBmcm9tICcuL3ZvdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIERpYWxvZyB9IGZyb20gJy4vZGlhbG9nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWxldGVEaWFsb2cgfSBmcm9tICcuL2RlbGV0ZS1kaWFsb2cnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsaXBib2FyZEZvcm0gfSBmcm9tICcuL2Zvcm1zL2NsaXBib2FyZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9kb0Zvcm0gfSBmcm9tICcuL2Zvcm1zL3RvZG8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhYml0Rm9ybSB9IGZyb20gJy4vZm9ybXMvdm90ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZTQwMCB9IGZyb20gJy4vNDAwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlNTAwIH0gZnJvbSAnLi81MDAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdvVG9Ib21lIH0gZnJvbSAnLi9nby10by1ob21lJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWZhdWx0RXJyb3JCb3VuZGFyeSB9IGZyb20gJy4vZXJyb3ItYm91bmRhcnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlZmF1bHRDYXRjaEJvdW5kYXJ5IH0gZnJvbSAnLi9jYXRjaC1ib3VuZGFyeSdcbiIsICJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBjaGFrcmEsXG4gIEhTdGFjayxcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgTWVudUJ1dHRvbixcbiAgTWVudUl0ZW0sXG4gIE1lbnVMaXN0LFxuICBTdGFjayxcbiAgVGFnLFxuICB1c2VDb2xvck1vZGUsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB7IHVzZVZpZXdwb3J0U2Nyb2xsIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgYXMgUkxpbmssIHVzZUxvY2F0aW9uLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSAnLidcbmltcG9ydCB7IEZhTW9vbiwgRmFTdW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCB7IEFpT3V0bGluZUFsaXdhbmd3YW5nIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgeyBnZXRUcmFuc2l0aW9uVHlwZXMgfSBmcm9tICd+L3V0aWxzJ1xuXG5jb25zdCBsaW5rczogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyB0bzogc3RyaW5nIH0+ID0gW1xuICB7XG4gICAgdGl0bGU6ICdIb21lJyxcbiAgICB0bzogJy9ob21lJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ2xpcGJvYXJkJyxcbiAgICB0bzogJy9jbGlwYm9hcmQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDb3B5JyxcbiAgICB0bzogJy9jb3B5JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUmVkaXJlY3QnLFxuICAgIHRvOiAnL3JlZGlyZWN0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVG9kbycsXG4gICAgdG86ICcvdG9kbycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hhYml0c1JhbmsnLFxuICAgIHRvOiAnL2hhYml0cy1yYW5rJyxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgdXNlciB9OiB7IHVzZXI6IFVzZXIgfSkge1xuICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZTogdG9nZ2xlTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgY29uc3QgdGV4dCA9IHVzZUNvbG9yTW9kZVZhbHVlKCdkYXJrJywgJ2xpZ2h0JylcbiAgY29uc3QgU3dpdGNoSWNvbiA9IHVzZUNvbG9yTW9kZVZhbHVlKEZhTW9vbiwgRmFTdW4pXG5cbiAgY29uc3QgYmdDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdiZy13aGl0ZScsICdiZy1bY29sb3I6dmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC05MDApXScpXG5cbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2JvcmRlci1iJywgYmdDb2xvcil9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8QWlPdXRsaW5lQWxpd2FuZ3dhbmcgc2l6ZT17MzB9IC8+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWwtMiBmb250LWJvbGRcIj5DbGlwaTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIDxUYWcgc2l6ZT17J3NtJ30+e2dldFRyYW5zaXRpb25UeXBlcyh0cmFuc2l0aW9uKX08L1RhZz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwibGdcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgU3dpdGNoIHRvICR7dGV4dH0gbW9kZWB9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiY3VycmVudFwiXG4gICAgICAgICAgICAgIG1sPXt7IGJhc2U6ICcwJywgbWQ6ICczJyB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb2RlfVxuICAgICAgICAgICAgICBpY29uPXs8U3dpdGNoSWNvbiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgPE1lbnVCdXR0b24gYXM9e0J1dHRvbn0gcm91bmRlZD17J2Z1bGwnfSB2YXJpYW50PXsnbGluayd9IGN1cnNvcj17J3BvaW50ZXInfSBtaW5XPXswfT5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17dXNlcj8ucHJvZmlsZVVybCA/PyAnJ30gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgICAgICAgICA8TWVudUxpc3QgYWxpZ25JdGVtcz17J2NlbnRlcid9IHA9ezB9PlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxSTGluayB0bz1cIi9wcm9maWxlL2dlbmVyYWxcIj5BY2NvdW50IHNldHRpbmdzPC9STGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxSTGluayB0bz1cIi9sb2dvdXRcIj5Mb2dvdXQ8L1JMaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgICAgPFN0aWNreUhlYWRlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFN0aWNreUhlYWRlcigpIHtcbiAgY29uc3Qgc2hhZG93ID0gdXNlQ29sb3JNb2RlVmFsdWUoJyMwMDAwMDAxYScsICcjMzMzJylcblxuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTEhlYWRpbmdFbGVtZW50PihudWxsKVxuICBjb25zdCBbeSwgc2V0WV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuICBjb25zdCB7IGhlaWdodCA9IDQ5IH0gPSByZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgPz8ge31cblxuICBjb25zdCB0ZXh0Q29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgndGV4dC1ibGFjaycsICd0ZXh0LXdoaXRlJylcbiAgY29uc3QgYm9yZGVyQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnYm9yZGVyLWJsYWNrJywgJ2JvcmRlci13aGl0ZScpXG4gIGNvbnN0IGJnQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGUnLCAnYnJhbmQuOTAwJylcblxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcblxuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiBzY3JvbGxZLm9uQ2hhbmdlKCgpID0+IHNldFkoc2Nyb2xsWS5nZXQoKSkpXG4gIH0sIFtzY3JvbGxZXSlcblxuICBjb25zdCBzY3JvbGxlZFRvVG9wID0geSA+PSA1OVxuXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxjaGFrcmEuaGVhZGVyIGg9e2Ake2hlaWdodH1weGB9IHc9XCJmdWxsXCI+XG4gICAgICA8Qm94XG4gICAgICAgIHBvc2l0aW9uPXtzY3JvbGxlZFRvVG9wID8gJ2ZpeGVkJyA6ICdzdGF0aWMnfVxuICAgICAgICB0cmFuc2Zvcm09e3Njcm9sbGVkVG9Ub3AgPyAndHJhbnNsYXRlWigxMDBweCknIDogdW5kZWZpbmVkfVxuICAgICAgICBib3hTaGFkb3c9e3Njcm9sbGVkVG9Ub3AgPyBgMCAwIDAgMXB4ICR7c2hhZG93fWAgOiB1bmRlZmluZWR9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB0cmFuc2l0aW9uPVwiYm94LXNoYWRvdyAuMnMgZWFzZVwiXG4gICAgICAgIHRvcD1cIjBcIlxuICAgICAgICBiZz17YmdDb2xvcn1cbiAgICAgICAgekluZGV4PVwiMzAwMFwiXG4gICAgICAgIGg9e2Ake2hlaWdodH1weGB9XG4gICAgICAgIGxlZnQ9XCIwXCJcbiAgICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgICAgd2lkdGg9XCJmdWxsXCJcbiAgICAgICAgcHQ9XCIzXCJcbiAgICAgID5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz1cIjhcIiBvdmVyZmxvd1k9XCJzY3JvbGxcIiBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XG4gICAgICAgICAgICAgIHtzY3JvbGxlZFRvVG9wID8gKFxuICAgICAgICAgICAgICAgIDxIU3RhY2sgY2xhc3NOYW1lPVwicGItM1wiPlxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUFsaXdhbmd3YW5nIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPFRhZyBzaXplPXsnc20nfT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy0xNiB0ZXh0LWNlbnRlciB0cnVuY2F0ZVwiPntnZXRUcmFuc2l0aW9uVHlwZXModHJhbnNpdGlvbil9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPFJMaW5rXG4gICAgICAgICAgICAgICAgICB0bz17bGluay50b31cbiAgICAgICAgICAgICAgICAgIGtleT17bGluay50b31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgncGItMyBib3JkZXItYi0yJywge1xuICAgICAgICAgICAgICAgICAgICBbYm9yZGVyQ29sb3JdOiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhsaW5rLnRvKSxcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci10cmFuc3BhcmVudCc6XG4gICAgICAgICAgICAgICAgICAgICAgIWxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGxpbmsudG8pIHx8IGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycsXG4gICAgICAgICAgICAgICAgICAgIFt0ZXh0Q29sb3JdOiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhsaW5rLnRvKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvUkxpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC9jaGFrcmEuaGVhZGVyPlxuICApXG59XG4iLCAiaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3RyYW5zaXRpb24nXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuLy8gVE9ETyAtIEFmdGVyIHJlZmFjdG9yaW5nIGNoZWNrIHdoZXRoZXIgd2UgYXJlIHVzaW5nIHRoaXMgc29tZSB3aGVyZSBpZiBub3QgdGhlbiBqdXN0IHJlbW92ZSBpdC5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGaWVsZEVycm9ycyhmaWVsZEVycm9yczogUmVjb3JkPHN0cmluZywgQXJyYXk8c3RyaW5nPj4pIHtcbiAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8a2V5b2YgdHlwZW9mIGZpZWxkRXJyb3JzLCBzdHJpbmc+ID0ge31cblxuICBPYmplY3Qua2V5cyhmaWVsZEVycm9ycykuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICByZXN1bHRbZmllbGRdID0gZmllbGRFcnJvcnNbZmllbGRdWzBdXG4gIH0pXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBUT0RPIC0gQWZ0ZXIgcmVmYWN0b3JpbmcgY2hlY2sgd2hldGhlciB3ZSBhcmUgdXNpbmcgdGhpcyBzb21lIHdoZXJlIGlmIG5vdCB0aGVuIGp1c3QgcmVtb3ZlIGl0LlxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEZpZWxkRXJyb3JzTmV3PEZvcm1GaWVsZFR5cGU+KFxuICBmaWVsZHM6IHsgW2tleSBpbiBrZXlvZiBGb3JtRmllbGRUeXBlXTogdW5rbm93biB9LFxuICBmaWVsZEVycm9yczogUmVjb3JkPHN0cmluZywgQXJyYXk8c3RyaW5nPj4sXG4pIHtcbiAgY29uc3QgcmVzdWx0OiBQYXJ0aWFsPHsgW2tleTogc3RyaW5nXTogeyBtZXNzYWdlOiBzdHJpbmc7IGlzSW52YWxpZDogYm9vbGVhbiB9IH0+ID0ge31cblxuICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChmaWVsZEVycm9yc1trZXldKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHtcbiAgICAgICAgbWVzc2FnZTogZmllbGRFcnJvcnNba2V5XVswXSxcbiAgICAgICAgaXNJbnZhbGlkOiB0cnVlLFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHtcbiAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgIGlzSW52YWxpZDogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFRyYW5zaXRpb25UeXBlcyA9ICh0cmFuc2l0aW9uOiBUcmFuc2l0aW9uKSA9PiB7XG4gIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZycgJiYgdHJhbnNpdGlvbi5zdWJtaXNzaW9uLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICByZXR1cm4gJ1NlYXJjaGluZydcbiAgfVxuXG4gIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZycgJiYgdHJhbnNpdGlvbi50eXBlID09PSAnYWN0aW9uU3VibWlzc2lvbicpIHtcbiAgICByZXR1cm4gJ1N1Ym1pdHRpbmcnXG4gIH1cblxuICBpZiAodHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIHRyYW5zaXRpb24udHlwZSA9PT0gJ25vcm1hbExvYWQnKSB7XG4gICAgcmV0dXJuICdOYXZpZ2F0aW5nJ1xuICB9XG5cbiAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT09ICdsb2FkaW5nJyAmJiB0cmFuc2l0aW9uLnR5cGUgPT09ICdhY3Rpb25SZWRpcmVjdCcpIHtcbiAgICByZXR1cm4gJ1JlZGlyZWN0aW5nJ1xuICB9XG5cbiAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT09ICdsb2FkaW5nJyAmJiB0cmFuc2l0aW9uLnR5cGUgPT09ICdub3JtYWxSZWRpcmVjdCcpIHtcbiAgICByZXR1cm4gJ05vcm1hbFJlZGlyZWN0aW5nJ1xuICB9XG5cbiAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT09ICdsb2FkaW5nJyAmJiB0cmFuc2l0aW9uLnR5cGUgPT09ICdhY3Rpb25SZWxvYWQnKSB7XG4gICAgcmV0dXJuICdSZWxvYWRpbmcnXG4gIH1cblxuICBpZiAodHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ2lkbGUnKSB7XG4gICAgcmV0dXJuICdJZGxlJ1xuICB9XG5cbiAgcmV0dXJuICdVbmtub3duJ1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9kYXkgPSAoKSA9PiB7XG4gIHJldHVybiBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9tb3Jyb3cgPSAoKSA9PiB7XG4gIHJldHVybiBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxufVxuXG5leHBvcnQgY29uc3QgY29tcG9zZVVybCA9ICh1cmw6IFVSTCwgb3B0aW9ucz86IHsgaW5jbHVkZVBhdGhuYW1lPzogYm9vbGVhbiB9KSA9PiB7XG4gIGNvbnN0IHByb3RvY29sID0gdXJsLnByb3RvY29sPy5pbmNsdWRlcygnaHR0cCcpID8gJ2h0dHAnIDogJ2h0dHBzJ1xuXG4gIGlmICghb3B0aW9ucz8uaW5jbHVkZVBhdGhuYW1lKSB7XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7dXJsLmhvc3R9YFxuICB9XG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7dXJsLmhvc3R9JHt1cmwucGF0aG5hbWV9YFxufVxuXG5leHBvcnQgY29uc3QgY29tcG9zZU51bWJlcklkID0gKHBhcmFtczogUGFyYW1zPHN0cmluZz4pID0+IHtcbiAgcmV0dXJuIHBhcmFtcy5pZCA/ICtwYXJhbXMuaWQgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBvc2VMYWJlbHMgPSAobGFiZWxzOiB1bmtub3duKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsYWJlbHMpKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZXR1cm4gbGFiZWxzLmZpbHRlcigobGFiZWwpID0+IGxhYmVsKS5tYXAoKGxhYmVsKSA9PiArbGFiZWwpXG59XG5cbmV4cG9ydCBjb25zdCBjb21wb3NlUHJpb3JpdHkgPSAocHJpb3JpdHk6IFByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSB7XG4gICAgW1ByaW9yaXR5LkhJR0hdOiBQcmlvcml0eS5ISUdILFxuICAgIFtQcmlvcml0eS5MT1ddOiBQcmlvcml0eS5MT1csXG4gICAgW1ByaW9yaXR5Lk1FRElVTV06IFByaW9yaXR5Lk1FRElVTSxcbiAgICBbUHJpb3JpdHkuTk9STUFMXTogUHJpb3JpdHkuTk9STUFMLFxuICB9XG5cbiAgaWYgKCFwcmlvcml0aWVzW3ByaW9yaXR5XSkge1xuICAgIHJldHVybiBQcmlvcml0eS5OT1JNQUxcbiAgfVxuXG4gIHJldHVybiBwcmlvcml0aWVzW3ByaW9yaXR5XVxufVxuXG5leHBvcnQgY29uc3QgaW50ZW50aW9uYWxUaHJvdyA9ICgpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVudGlvbmFsbHkgdGhyb3dpbmcgZXJyb3InKVxuICB9XG59XG4iLCAiaW1wb3J0IHsgQ2xpcGJvYXJkQ29udGVudCBhcyBDbGlwYm9hcmRDb250ZW50VHlwZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaXBib2FyZENvbnRlbnQocHJvcHM6IENsaXBib2FyZENvbnRlbnRUeXBlKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdHJ1bmNhdGVcIj57cHJvcHMudGl0bGV9PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57cHJvcHMuY29udGVudH08L3A+XG4gICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPnttb21lbnQocHJvcHMuY3JlYXRlZEF0KS5jYWxlbmRhcigpfTwvdGltZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTW9kYWwsIE1vZGFsT3ZlcmxheSwgTW9kYWxDb250ZW50IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2l0aW9uTW9kYWwoKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICBpZiAodHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIHRyYW5zaXRpb24udHlwZSA9PT0gJ25vcm1hbExvYWQnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBpc09wZW49e3RydWV9IG9uQ2xvc2U9eygpID0+IG51bGx9PlxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgIDxNb2RhbENvbnRlbnQgYmc9XCJ0cmFuc3BhcmVudFwiIHNoYWRvdz1cIm5vbmVcIiBtPXswfT5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB3LWZ1bGwgaC1mdWxsIG1heC13LTV4bCBweC00IG14LWF1dG8gbWQ6cHgtNlwiPntjaGlsZHJlbn08L2Rpdj5cbn1cbiIsICJpbXBvcnQgeyB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSAnLidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVRpdGxlKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgYmdDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdiZy13aGl0ZScsICdiZy1bY29sb3I6dmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC05MDApXScpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ3B5LTEwIGJvcmRlci1iJywgYmdDb2xvcil9PlxuICAgICAgPFdyYXBwZXI+e2NoaWxkcmVufTwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB6LTEwIGxvYWRlciBib3R0b20tMTIgcmlnaHQtMTJcIj5cbiAgICAgIDxzcGFuIHN0eWxlPXt7IG9wYWNpdHk6IDEsIGNvbG9yOiAnd2hpdGUnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19PlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxsaW5lIHgxPVwiMTJcIiB5MT1cIjJcIiB4Mj1cIjEyXCIgeTI9XCI2XCI+PC9saW5lPlxuICAgICAgICAgIDxsaW5lIHgxPVwiMTJcIiB5MT1cIjE4XCIgeDI9XCIxMlwiIHkyPVwiMjJcIj48L2xpbmU+XG4gICAgICAgICAgPGxpbmUgeDE9XCI0LjkzXCIgeTE9XCI0LjkzXCIgeDI9XCI3Ljc2XCIgeTI9XCI3Ljc2XCI+PC9saW5lPlxuICAgICAgICAgIDxsaW5lIHgxPVwiMTYuMjRcIiB5MT1cIjE2LjI0XCIgeDI9XCIxOS4wN1wiIHkyPVwiMTkuMDdcIj48L2xpbmU+XG4gICAgICAgICAgPGxpbmUgeDE9XCIyXCIgeTE9XCIxMlwiIHgyPVwiNlwiIHkyPVwiMTJcIj48L2xpbmU+XG4gICAgICAgICAgPGxpbmUgeDE9XCIxOFwiIHkxPVwiMTJcIiB4Mj1cIjIyXCIgeTI9XCIxMlwiPjwvbGluZT5cbiAgICAgICAgICA8bGluZSB4MT1cIjQuOTNcIiB5MT1cIjE5LjA3XCIgeDI9XCI3Ljc2XCIgeTI9XCIxNi4yNFwiPjwvbGluZT5cbiAgICAgICAgICA8bGluZSB4MT1cIjE2LjI0XCIgeTE9XCI3Ljc2XCIgeDI9XCIxOS4wN1wiIHkyPVwiNC45M1wiPjwvbGluZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb0l0ZW1zKHsgdGl0bGUgPSAnTm8gaXRlbXMgZm91bmQhLicgfTogeyB0aXRsZTogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTggYm9yZGVyIHJvdW5kZWQtbWRcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnXG5pbXBvcnQgeyB0b1BuZyB9IGZyb20gJ2h0bWwtdG8taW1hZ2UnXG5pbXBvcnQgeyBCdXR0b24sIHVzZVRvYXN0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUVJDb2RlKHsgdmFsdWUgfTogeyB2YWx1ZTogc3RyaW5nIH0pIHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKVxuXG4gIGNvbnN0IGRvd25sb2FkUVJjb2RlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChyZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdG9QbmcocmVmLmN1cnJlbnQsIHsgY2FjaGVCdXN0OiB0cnVlIH0pXG4gICAgICAudGhlbigoZGF0YVVybCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSAncXItY29kZS5wbmcnXG4gICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVcmxcbiAgICAgICAgbGluay5jbGljaygpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAnVW5hYmxlIHRvIGRvd25sb2FkIFFSIGNvZGUnLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH0sIFtyZWYsIHRvYXN0XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBwLTQgYm9yZGVyIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMjAwcHhdIG1pbi1oLVsyMDBweF0gbXgtYXV0byBmaXQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInAtNCBiZy13aGl0ZSByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICA8UmVhY3RRUkNvZGUgdmFsdWU9e3ZhbHVlfSBzaXplPXsyMDB9IHJlbmRlckFzPVwic3ZnXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b24gbXQ9ezR9IHc9e1snZnVsbCcsICdpbml0aWFsJywgJ2luaXRpYWwnLCAnaW5pdGlhbCddfSBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZFFSY29kZSgpfT5cbiAgICAgICAgRG93bmxvYWQgUVIgY29kZVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQge1xuICBCdXR0b24sXG4gIEhTdGFjayxcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgTWVudUJ1dHRvbixcbiAgTWVudURpdmlkZXIsXG4gIE1lbnVHcm91cCxcbiAgTWVudUl0ZW0sXG4gIE1lbnVMaXN0LFxuICBUYWcsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBMYWJlbCwgTGFiZWxzT25Ub2RvLCBQcmlvcml0eSwgVG9kbyB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyB1c2VGZXRjaGVyLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQnNUaHJlZURvdHNWZXJ0aWNhbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHsgUmlDaGVja2JveEJsYW5rQ2lyY2xlTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xuaW1wb3J0IHsgSGlDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2hpJ1xuaW1wb3J0IHsgY2FwaXRhbENhc2UgfSBmcm9tICdjaGFuZ2UtY2FzZSdcbmltcG9ydCB7IGdldFRvZGF5LCBnZXRUb21vcnJvdyB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmVhY3QtY2FsZW5kYXInXG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5Q29sb3IocHJpb3JpdHk6IFByaW9yaXR5KSB7XG4gIGNvbnN0IHByaW9yaXR5Q29sb3IgPSB7XG4gICAgW1ByaW9yaXR5LkhJR0hdOiAncmVkJyxcbiAgICBbUHJpb3JpdHkuTUVESVVNXTogJ3llbGxvdycsXG4gICAgW1ByaW9yaXR5Lk5PUk1BTF06ICdncmVlbicsXG4gICAgW1ByaW9yaXR5LkxPV106ICdibHVlJyxcbiAgfVxuXG4gIGlmICghcHJpb3JpdHlDb2xvcltwcmlvcml0eV0pIHtcbiAgICByZXR1cm4gcHJpb3JpdHlDb2xvclsnTE9XJ11cbiAgfVxuXG4gIHJldHVybiBwcmlvcml0eUNvbG9yW3ByaW9yaXR5XVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvSXRlbShcbiAgcHJvcHM6IFRvZG8gJiB7XG4gICAgbGFiZWxzOiAoTGFiZWxzT25Ub2RvICYge1xuICAgICAgTGFiZWw6IExhYmVsIHwgbnVsbFxuICAgIH0pW11cbiAgfSxcbikge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCB0b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gIGNvbnN0IGR1ZURhdGUgPSBtb21lbnQocHJvcHMuZHVlRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJylcblxuICBjb25zdCBpc092ZXJEdWUgPSBtb21lbnQodG9kYXkpLmlzQWZ0ZXIoZHVlRGF0ZSlcbiAgY29uc3QgaXNVcGNvbWluZyA9IG1vbWVudCh0b2RheSkuaXNCZWZvcmUoZHVlRGF0ZSlcblxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpXG5cbiAgY29uc3QgcmVzY2hlZHVsZUZldGhlciA9IHVzZUZldGNoZXIoKVxuXG4gIGNvbnN0IGlzU3VibWl0dGluZyA9XG4gICAgZmV0Y2hlci5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnIHx8XG4gICAgKGZldGNoZXIuc3RhdGUgPT09ICdsb2FkaW5nJyAmJiBmZXRjaGVyLnR5cGUgPT09ICdhY3Rpb25SZWxvYWQnKVxuXG4gIGNvbnN0IGlzUmVzY2hlZHVsaW5nID1cbiAgICByZXNjaGVkdWxlRmV0aGVyLnN0YXRlID09PSAnc3VibWl0dGluZycgfHxcbiAgICAocmVzY2hlZHVsZUZldGhlci5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIHJlc2NoZWR1bGVGZXRoZXIudHlwZSA9PT0gJ2FjdGlvblJlbG9hZCcpXG5cbiAgY29uc3QgbGFiZWxzID0gcHJvcHMubGFiZWxzLm1hcCgobGFiZWwpID0+ICh7IGxhYmVsOiBsYWJlbC5MYWJlbD8ubGFiZWwsIGlkOiBsYWJlbC5sYWJlbElkIH0pKVxuXG4gIGNvbnN0IGhhc0xhYmVscyA9IGxhYmVscy5sZW5ndGggPiAwXG5cbiAgY29uc3QgZHVlU3RyaW5nID0gaXNPdmVyRHVlXG4gICAgPyBtb21lbnQocHJvcHMuZHVlRGF0ZSkuc3RhcnRPZignZGF5JykuZnJvbU5vdygpXG4gICAgOiBtb21lbnQocHJvcHMuZHVlRGF0ZSkuZW5kT2YoJ2RheScpLmZyb21Ob3coKVxuXG4gIGNvbnN0IHJlc2NodWxlID0gKGR1ZURhdGU6IHN0cmluZykgPT4ge1xuICAgIHJlc2NoZWR1bGVGZXRoZXIuc3VibWl0KFxuICAgICAgeyBkdWVEYXRlIH0sXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBhY3Rpb246IGAvdG9kby8ke3Byb3BzLmlkfS9yZXNjaGVkdWxlYCxcbiAgICAgIH0sXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgdy1mdWxsIHB5LTIgcm91bmRlZC1tZCBnYXAteS0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntwcm9wcy50aXRsZX08L3A+XG4gICAgICAgIDxIU3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgPGZldGNoZXIuRm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXtgL3RvZG8vJHtwcm9wcy5pZH0vdG9nZ2xlYH0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PXsnZ2hvc3QnfVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvb2dsZSB0YXNrIGNvbXBsZXRpb25cIlxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9e3Byb3BzLmNvbXBsZXRlZCA/ICdncmVlbicgOiAnZ3JheSd9XG4gICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgIHByb3BzLmNvbXBsZXRlZCA/IChcbiAgICAgICAgICAgICAgICAgIDxIaUNoZWNrQ2lyY2xlIHNpemU9ezI0fSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8UmlDaGVja2JveEJsYW5rQ2lyY2xlTGluZSBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mZXRjaGVyLkZvcm0+XG5cbiAgICAgICAgICB7aXNPdmVyRHVlICYmICFwcm9wcy5jb21wbGV0ZWQgJiYgKFxuICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFzPXtCdXR0b259IHNpemU9XCJ4c1wiIGRpc2FibGVkPXtpc1Jlc2NoZWR1bGluZ30gY29sb3JTY2hlbWU9XCJwdXJwbGVcIj5cbiAgICAgICAgICAgICAgICB7aXNSZXNjaGVkdWxpbmcgPyAnUmVzY2hlZHVsaW5nLi4uJyA6ICdSZXNjaGVkdWxlJ31cbiAgICAgICAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgICAgICAgICA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgPE1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiByZXNjaHVsZShnZXRUb2RheSgpKX0+VG9kYXk8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gcmVzY2h1bGUoZ2V0VG9tb3Jyb3coKSl9PlRvbW9ycm93PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnVHcm91cD5cbiAgICAgICAgICAgICAgICA8TWVudURpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gY2xvc2VPblNlbGVjdD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdEdWVEYXRlID0gbmV3IERhdGUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNjaHVsZShtb21lbnQobmV3RHVlRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykpXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZShnZXRUb2RheSgpKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgPE1lbnVCdXR0b24+XG4gICAgICAgICAgICAgIDxCc1RocmVlRG90c1ZlcnRpY2FsIC8+XG4gICAgICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgICAgICA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0aW9uKGAvdG9kby8ke3Byb3BzLmlkfS9lZGl0YCl9PkVkaXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gbmF2aWdhdGlvbihgL3RvZG8vJHtwcm9wcy5pZH0vZGVsZXRlYCl9PkRlbGV0ZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtdC0yXCI+XG4gICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgPFRhZyBmb250U2l6ZT17J3h4LXNtYWxsJ30gY29sb3JTY2hlbWU9e2dldFByaW9yaXR5Q29sb3IocHJvcHMucHJpb3JpdHkpfT5cbiAgICAgICAgICAgIHtjYXBpdGFsQ2FzZShgJHtwcm9wcy5wcmlvcml0eX0gUFJJT1JJVFlgKX1cbiAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICB7KGlzT3ZlckR1ZSB8fCBpc1VwY29taW5nKSAmJiAhcHJvcHMuY29tcGxldGVkICYmIChcbiAgICAgICAgICAgIDxUYWcgZm9udFNpemU9eyd4eC1zbWFsbCd9IGNvbG9yU2NoZW1lPXtpc1VwY29taW5nID8gJ2dyZWVuJyA6ICdyZWQnfT5cbiAgICAgICAgICAgICAge2lzT3ZlckR1ZSA/IGBPdmVyZHVlICR7ZHVlU3RyaW5nfWAgOiBgRHVlICR7ZHVlU3RyaW5nfWB9XG4gICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtoYXNMYWJlbHNcbiAgICAgICAgICAgID8gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFRhZyBmb250U2l6ZT17J3h4LXNtYWxsJ30gY29sb3JTY2hlbWU9XCJ3aGF0c2FwcFwiIGtleT17bGFiZWwuaWR9PlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgICA8SFN0YWNrIHBsPVwiMlwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtwcm9wcy51cGRhdGVkQXQgPyAoXG4gICAgICAgICAgICA8VGFnIG1sPVwiYXV0b1wiIGZvbnRTaXplPXsneHgtc21hbGwnfSBjb2xvclNjaGVtZT17J2xpbmtlZGluJ30+XG4gICAgICAgICAgICAgIHttb21lbnQocHJvcHMudXBkYXRlZEF0KS5jYWxlbmRhcigpfVxuICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBGbGV4LCBGbGV4Ym94UHJvcHMsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9ICYgRmxleGJveFByb3BzKSB7XG4gIGNvbnN0IGJnID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlJywgJ2JsYWNrJylcbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICB3PVwiZnVsbFwiXG4gICAgICBiZz17Ymd9XG4gICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgc2hhZG93PVwibWRcIlxuICAgICAgYm9yZGVyQ29sb3I9XCJ3aGl0ZUFscGhhXCJcbiAgICAgIGJvcmRlcldpZHRoPVwiMC41cHhcIlxuICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgcD1cIjRcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0ZsZXg+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBIU3RhY2ssIFRhZywgSWNvbkJ1dHRvbiwgTWVudSwgTWVudUJ1dHRvbiwgTWVudUxpc3QsIE1lbnVJdGVtIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFZvdGUgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgQnNBcnJvd1VwLCBCc0Fycm93RG93biwgQnNUaHJlZURvdHNWZXJ0aWNhbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHsgdXNlRmV0Y2hlciwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm90ZUl0ZW0ocHJvcHM6IFZvdGUpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgdXB2b3Rlc0ZldGNoZXIgPSB1c2VGZXRjaGVyKClcbiAgY29uc3QgZG93bnZvdGVGZXRjaGVyID0gdXNlRmV0Y2hlcigpXG5cbiAgY29uc3QgaXNVcHZvdGluZyA9XG4gICAgdXB2b3Rlc0ZldGNoZXIuc3RhdGUgPT09ICdzdWJtaXR0aW5nJyB8fFxuICAgICh1cHZvdGVzRmV0Y2hlci5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIHVwdm90ZXNGZXRjaGVyLnR5cGUgPT09ICdhY3Rpb25SZWxvYWQnKVxuICBjb25zdCBpc0Rvd252b3RpbmcgPVxuICAgIGRvd252b3RlRmV0Y2hlci5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnIHx8XG4gICAgKGRvd252b3RlRmV0Y2hlci5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIGRvd252b3RlRmV0Y2hlci50eXBlID09PSAnYWN0aW9uUmVsb2FkJylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCB3LWZ1bGwgcHktMiByb3VuZGVkLW1kIGdhcC15LTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e3Byb3BzLnRpdGxlfTwvcD5cbiAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgICA8dXB2b3Rlc0ZldGNoZXIuRm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXtgL2hhYml0cy1yYW5rL3ZvdGUvJHtwcm9wcy5pZH0vdXB2b3RlYH0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzVXB2b3Rpbmd9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9eydvdXRsaW5lJ31cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlVwdm90ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBpY29uPXs8QnNBcnJvd1VwIC8+fVxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3Vwdm90ZXNGZXRjaGVyLkZvcm0+XG4gICAgICAgICAgPGRvd252b3RlRmV0Y2hlci5Gb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e2AvaGFiaXRzLXJhbmsvdm90ZS8ke3Byb3BzLmlkfS9kb3dudm90ZWB9PlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD17J291dGxpbmUnfVxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzRG93bnZvdGluZ31cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEb3duIHZvdGVcIlxuICAgICAgICAgICAgICBpY29uPXs8QnNBcnJvd0Rvd24gLz59XG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZG93bnZvdGVGZXRjaGVyLkZvcm0+XG5cbiAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgIDxNZW51QnV0dG9uPlxuICAgICAgICAgICAgICA8QnNUaHJlZURvdHNWZXJ0aWNhbCAvPlxuICAgICAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgICAgICAgPE1lbnVMaXN0PlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gbmF2aWdhdGlvbihgL2hhYml0cy1yYW5rL3ZvdGUvJHtwcm9wcy5pZH0vZWRpdGApfT5cbiAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0aW9uKGAvaGFiaXRzLXJhbmsvdm90ZS8ke3Byb3BzLmlkfS9kZWxldGVgKX0+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtdC0yXCI+XG4gICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgPFRhZyBmb250U2l6ZT17J3gtc21hbGwnfSBjb2xvclNjaGVtZT17J3B1cnBsZSd9PlxuICAgICAgICAgICAge3Byb3BzLnVwdm90ZXMgKyAtcHJvcHMuZG93bnZvdGVzfSB2b3Rlc1xuICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgIDxUYWcgZm9udFNpemU9eyd4LXNtYWxsJ30gY29sb3JTY2hlbWU9eyd0d2l0dGVyJ30+XG4gICAgICAgICAgICB7cHJvcHMudXB2b3Rlc30gdXB2b3Rlc1xuICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgIDxUYWcgZm9udFNpemU9eyd4LXNtYWxsJ30gY29sb3JTY2hlbWU9eydyZWQnfT5cbiAgICAgICAgICAgIHtwcm9wcy5kb3dudm90ZXMgPiAwID8gLXByb3BzLmRvd252b3RlcyA6IHByb3BzLmRvd252b3Rlc30gZG93bnZvdGVzXG4gICAgICAgICAgPC9UYWc+XG4gICAgICAgICAge3Byb3BzLmxhYmVsID8gKFxuICAgICAgICAgICAgPFRhZyBmb250U2l6ZT17J3gtc21hbGwnfSBjb2xvclNjaGVtZT1cIndoYXRzYXBwXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgPEhTdGFjayBwbD1cIjJcIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICB7cHJvcHMudXBkYXRlZEF0ID8gKFxuICAgICAgICAgICAgPFRhZyBtbD1cImF1dG9cIiBmb250U2l6ZT17J3gtc21hbGwnfSBjb2xvclNjaGVtZT17J2xpbmtlZGluJ30+XG4gICAgICAgICAgICAgIHttb21lbnQocHJvcHMudXBkYXRlZEF0KS5jYWxlbmRhcigpfVxuICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsLCBNb2RhbE92ZXJsYXksIE1vZGFsQ29udGVudCwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG50eXBlIERpYWxvZ1Byb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGlzT3BlbjogYm9vbGVhblxuICBvbkNsb3NlOiAoKSA9PiBhbnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlhbG9nKHByb3BzOiBEaWFsb2dQcm9wcykge1xuICBjb25zdCBiZ0NvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2JyYW5kLmxpZ2h0V2hpdGUnLCAnYnJhbmQuMTAwJylcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCBpc09wZW49e3Byb3BzLmlzT3Blbn0gb25DbG9zZT17cHJvcHMub25DbG9zZX0gaXNDZW50ZXJlZCBzaXplPVwieGxcIj5cbiAgICAgIDxNb2RhbE92ZXJsYXkgYmFja2Ryb3BGaWx0ZXI9XCJibHVyKDEwcHgpIGh1ZS1yb3RhdGUoOTBkZWcpXCIgLz5cbiAgICAgIDxNb2RhbENvbnRlbnQgYmc9e2JnQ29sb3J9Pntwcm9wcy5jaGlsZHJlbn08L01vZGFsQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApXG59XG4iLCAiaW1wb3J0IHsgTW9kYWxIZWFkZXIsIE1vZGFsQ2xvc2VCdXR0b24sIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCB1c2VOYXZpZ2F0ZSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL2RpYWxvZydcblxudHlwZSBEZWxldGVEaWFsb2dQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlRGlhbG9nKHByb3BzOiBEZWxldGVEaWFsb2dQcm9wcykge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbigtMSlcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3QgZGVsZXRpbmcgPSB0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZydcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgaXNPcGVuPXt0cnVlfSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgIDxNb2RhbEhlYWRlcj57cHJvcHMudGl0bGV9PC9Nb2RhbEhlYWRlcj5cbiAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICA8TW9kYWxCb2R5Pntwcm9wcy5tZXNzYWdlfTwvTW9kYWxCb2R5PlxuXG4gICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0gbXI9ezN9PlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEZvcm0gbWV0aG9kPVwiZGVsZXRlXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiIGlzTG9hZGluZz17ZGVsZXRpbmd9IGxvYWRpbmdUZXh0PVwiRGVsZXRpbmdcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIElucHV0LFxuICBGb3JtRXJyb3JNZXNzYWdlLFxuICBUZXh0YXJlYSxcbiAgU2VsZWN0LFxuICBIU3RhY2ssXG4gIEJ1dHRvbixcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIHVzZU5hdmlnYXRlLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBDbGlwYm9hcmRDb250ZW50VHlwZSB9IGZyb20gJ34vdHlwZXMvY2xpcGJvYXJkJ1xuaW1wb3J0IHsgRm9ybVByb3BzVHlwZSB9IGZyb20gJ34vdHlwZXMvY29tbW9uJ1xuaW1wb3J0IHsgY29tcG9zZVRvQm9vbGVhbiB9IGZyb20gJ34vdXRpbHMvZm9ybSdcblxuZXhwb3J0IGludGVyZmFjZSBDbGlwYm9hcmRGb3JtUHJvcHMgZXh0ZW5kcyBGb3JtUHJvcHNUeXBlPENsaXBib2FyZENvbnRlbnRUeXBlPiB7XG4gIHN1Ym1pdHRpbmdUZXh0OiBzdHJpbmdcbiAgb2tCdXR0b25UZXh0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpcGJvYXJkRm9ybShwcm9wczogQ2xpcGJvYXJkRm9ybVByb3BzKSB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKCcvY2xpcGJvYXJkJylcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3Qgc3VibWl0dGluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17cHJvcHM/LnRpdGxlPy5pbnZhbGlkfT5cbiAgICAgICAgPEZvcm1MYWJlbD5UaXRsZTwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy50aXRsZT8uaW52YWxpZH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzPy50aXRsZT8udmFsdWUgPz8gJyd9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntwcm9wcz8udGl0bGU/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17cHJvcHM/LmNvbnRlbnQ/LmludmFsaWR9PlxuICAgICAgICA8Rm9ybUxhYmVsPkNvbnRlbnQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudCB0byBjb3B5XCJcbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy5jb250ZW50Py5pbnZhbGlkfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHM/LmNvbnRlbnQ/LnZhbHVlID8/ICcnfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57cHJvcHM/LmNvbnRlbnQ/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZvcm1Db250cm9sIG10PXs0fSBpc0ludmFsaWQ9e3Byb3BzPy5wcml2YXRlPy5pbnZhbGlkfT5cbiAgICAgICAgPEZvcm1MYWJlbD5JcyBQcml2YXRlPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwicHJpdmF0ZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3Qgb3B0aW9uXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e1N0cmluZyhjb21wb3NlVG9Cb29sZWFuKFN0cmluZyhwcm9wcz8ucHJpdmF0ZT8udmFsdWUpLCB0cnVlKSl9XG4gICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcz8ucHJpdmF0ZT8uaW52YWxpZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYWxzZVwiPlB1YmxpYzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cnVlXCI+UHJpdmF0ZTwvb3B0aW9uPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e3Byb3BzPy5wcml2YXRlPy5lcnJvck1lc3NhZ2V9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9eydmbGV4LWVuZCd9IG10PVwiOFwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcbiAgICAgICAgICBpc0xvYWRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgbG9hZGluZ1RleHQ9e3Byb3BzPy5zdWJtaXR0aW5nVGV4dCA/PyAnU3VibWl0dGluZyd9XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMub2tCdXR0b25UZXh0ID8/ICdDcmVhdGUnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSFN0YWNrPlxuICAgIDwvRm9ybT5cbiAgKVxufVxuIiwgImltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJ1xuXG50eXBlIEZpZWxkVHlwZSA9IHtcbiAga2V5OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQgfCBib29sZWFuXG4gIHVzZUdldEFsbE1ldGhvZD86IGJvb2xlYW5cbiAgY29tcG9zZT86ICh2YWx1ZTogdW5rbm93bikgPT4gdW5rbm93blxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybURhdGE8Rm9ybURhdGFUeXBlPihmb3JtRGF0YTogRm9ybURhdGEsIGZpZWxkczogQXJyYXk8RmllbGRUeXBlPikge1xuICBjb25zdCByZXN1bHQ6IFBhcnRpYWw8eyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0ge31cblxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCB1c2VHZXRBbGxNZXRob2QgPSBmaWVsZC51c2VHZXRBbGxNZXRob2QgPz8gZmFsc2VcblxuICAgIGNvbnN0IHZhbHVlID0gdXNlR2V0QWxsTWV0aG9kID8gZm9ybURhdGEuZ2V0QWxsKGZpZWxkLmtleSkgOiBTdHJpbmcoZm9ybURhdGEuZ2V0KGZpZWxkLmtleSkpXG5cbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcblxuICAgIGlmICh2YWx1ZSA9PT0gJ251bGwnIHx8IHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0W2ZpZWxkLmtleV0gPSBmaWVsZC5kZWZhdWx0VmFsdWUgPz8gbnVsbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FycmF5ICYmIHZhbGlkYXRvci5pc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICByZXN1bHRbZmllbGQua2V5XSA9IGNvbXBvc2VUb0Jvb2xlYW4odmFsdWUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXN1bHRbZmllbGQua2V5XSA9IHR5cGVvZiBmaWVsZC5jb21wb3NlID09PSAnZnVuY3Rpb24nID8gZmllbGQuY29tcG9zZSh2YWx1ZSkgOiB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiByZXN1bHQgYXMgRm9ybURhdGFUeXBlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaW5hbEZvcm1EYXRhPEZvcm1EYXRhVHlwZT4oXG4gIHZhbHVlczogRm9ybURhdGFUeXBlLFxuICBmaWVsZHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdbXVxuICB9LFxuKSB7XG4gIGNvbnN0IHJlc3VsdDogUGFydGlhbDx7XG4gICAgW2tleSBpbiBrZXlvZiBGb3JtRGF0YVR5cGVdOiB7IGludmFsaWQ6IGJvb2xlYW47IGVycm9yTWVzc2FnZTogc3RyaW5nOyB2YWx1ZTogdW5rbm93biB9XG4gIH0+ID0ge31cblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWVzKSBhcyBBcnJheTxrZXlvZiB0eXBlb2YgdmFsdWVzPlxuXG4gIGtleXMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBpc0ludmFsaWRGaWVsZCA9IChcbiAgICAgIGZpZWxkcyBhcyB7XG4gICAgICAgIFtrZXkgaW4ga2V5b2YgRm9ybURhdGFUeXBlXTogc3RyaW5nW11cbiAgICAgIH1cbiAgICApW2ZpZWxkXSBhcyBBcnJheTxzdHJpbmc+IHwgbnVsbCB8IHVuZGVmaW5lZFxuXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gQXJyYXkuaXNBcnJheShpc0ludmFsaWRGaWVsZCkgPyBpc0ludmFsaWRGaWVsZFswXSA/PyAnJyA6ICcnXG5cbiAgICByZXN1bHRbZmllbGRdID0ge1xuICAgICAgdmFsdWU6IHZhbHVlc1tmaWVsZF0sXG4gICAgICBpbnZhbGlkOiBCb29sZWFuKGVycm9yTWVzc2FnZSksXG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBvc2VUb0Jvb2xlYW4gPSAodmFsdWU6IHVua25vd24sIGRlZmF1bHRWYWx1ZT86IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgaXNCb29sZWFuID0gdmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJ1xuXG4gIGlmICghaXNCb29sZWFuICYmIChkZWZhdWx0VmFsdWUgPT09IHRydWUgfHwgZGVmYXVsdFZhbHVlID09PSBmYWxzZSkpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIH1cblxuICByZXR1cm4gdmFsdWUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZVxufVxuIiwgImltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnfi90eXBlcy90b2RvJ1xuaW1wb3J0IHsgRm9ybVByb3BzVHlwZSB9IGZyb20gJ34vdHlwZXMvY29tbW9uJ1xuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG4gIEZvcm1FcnJvck1lc3NhZ2UsXG4gIFRleHRhcmVhLFxuICBTZWxlY3QsXG4gIEJ1dHRvbixcbiAgSFN0YWNrLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgdXNlTmF2aWdhdGUsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGNvbXBvc2VUb0Jvb2xlYW4gfSBmcm9tICd+L3V0aWxzL2Zvcm0nXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGludGVyZmFjZSBUb2RvRm9ybVByb3BzIGV4dGVuZHMgRm9ybVByb3BzVHlwZTxUb2RvVHlwZT4ge1xuICBzdWJtaXR0aW5nVGV4dDogc3RyaW5nXG4gIG9rQnV0dG9uVGV4dDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9Gb3JtKHByb3BzOiBUb2RvRm9ybVByb3BzKSB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKCcvY2xpcGJvYXJkJylcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3Qgc3VibWl0dGluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17cHJvcHM/LnRpdGxlPy5pbnZhbGlkfT5cbiAgICAgICAgPEZvcm1MYWJlbD5UaXRsZTwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICAvLyBpc1JlcXVpcmVkXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcz8udGl0bGU/LmludmFsaWR9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcz8udGl0bGU/LnZhbHVlID8/ICcnfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57cHJvcHM/LnRpdGxlPy5lcnJvck1lc3NhZ2V9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIG10PXs0fSBpc0ludmFsaWQ9e3Byb3BzPy5kZXNjcmlwdGlvbj8uaW52YWxpZH0+XG4gICAgICAgIDxGb3JtTGFiZWw+RGVzY3JpcHRpb248L0Zvcm1MYWJlbD5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCJcbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy5kZXNjcmlwdGlvbj8uaW52YWxpZH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzPy5kZXNjcmlwdGlvbj8udmFsdWUgPz8gJyd9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntwcm9wcz8uZGVzY3JpcHRpb24/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICB7LyogPEZvcm1Db250cm9sIG10PXs0fSBpc0ludmFsaWQ9e3Byb3BzPy5sYWJlbHM/LmludmFsaWR9PlxuICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImxhYmVsc1wiPkxhYmVsczwvRm9ybUxhYmVsPlxuXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgICAgbmFtZT1cImxhYmVsc1wiXG4gICAgICAgICAgICBvcHRpb25zPXtsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbC5sYWJlbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbGFiZWwuaWQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+ICovfVxuXG4gICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17cHJvcHM/LmNvbXBsZXRlZD8uaW52YWxpZH0+XG4gICAgICAgIDxGb3JtTGFiZWw+Q29tcGxldGVkPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwiY29tcGxldGVkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBvcHRpb25cIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17U3RyaW5nKGNvbXBvc2VUb0Jvb2xlYW4oU3RyaW5nKHByb3BzPy5jb21wbGV0ZWQ/LnZhbHVlKSwgZmFsc2UpKX1cbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy5jb21wbGV0ZWQ/LmludmFsaWR9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHJ1ZVwiPlRydWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFsc2VcIj5GYWxzZTwvb3B0aW9uPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e3Byb3BzPy5jb21wbGV0ZWQ/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17cHJvcHM/LnByaW9yaXR5Py5pbnZhbGlkfT5cbiAgICAgICAgPEZvcm1MYWJlbD5Qcmlvcml0eTwvRm9ybUxhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbmFtZT1cInByaW9yaXR5XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBwcmlvcml0eVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcz8ucHJpb3JpdHk/LnZhbHVlID8/IFByaW9yaXR5Lk5PUk1BTH1cbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy5wcmlvcml0eT8uaW52YWxpZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1ByaW9yaXR5LkxPV30+TG93PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17UHJpb3JpdHkuTk9STUFMfT5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtQcmlvcml0eS5NRURJVU19Pk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1ByaW9yaXR5LkhJR0h9PkhpZ2g8L29wdGlvbj5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntwcm9wcz8ucHJpb3JpdHk/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17cHJvcHM/LmR1ZURhdGU/LmludmFsaWR9PlxuICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJpc0NoZWNrZWRcIj5EdWUgZGF0ZTwvRm9ybUxhYmVsPlxuXG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJkdWVEYXRlXCJcbiAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcz8uZHVlRGF0ZT8uaW52YWxpZH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgcHJvcHM/LmR1ZURhdGU/LnZhbHVlID8gbW9tZW50KHByb3BzPy5kdWVEYXRlPy52YWx1ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e3Byb3BzPy5kdWVEYXRlPy5lcnJvck1lc3NhZ2V9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9eydmbGV4LWVuZCd9IG10PVwiOFwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcbiAgICAgICAgICBpc0xvYWRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgbG9hZGluZ1RleHQ9e3Byb3BzLnN1Ym1pdHRpbmdUZXh0ID8/ICdTdWJtaXR0aW5nJ31cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5va0J1dHRvblRleHQgPz8gJ0NyZWF0ZSd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9IU3RhY2s+XG4gICAgPC9Gb3JtPlxuICApXG59XG4iLCAiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQsIEZvcm1FcnJvck1lc3NhZ2UsIEhTdGFjaywgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIHVzZU5hdmlnYXRlLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBGb3JtUHJvcHNUeXBlIH0gZnJvbSAnfi90eXBlcy9jb21tb24nXG5pbXBvcnQgeyBWb3RlVHlwZSB9IGZyb20gJ34vdHlwZXMvdm90ZSdcblxuZXhwb3J0IGludGVyZmFjZSBWb3RlRm9ybVByb3BzIGV4dGVuZHMgRm9ybVByb3BzVHlwZTxWb3RlVHlwZT4ge1xuICBzdWJtaXR0aW5nVGV4dDogc3RyaW5nXG4gIG9rQnV0dG9uVGV4dDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhYml0Rm9ybShwcm9wczogVm90ZUZvcm1Qcm9wcykge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbignL2NsaXBib2FyZCcpXG5cbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIGNvbnN0IHN1Ym1pdHRpbmcgPSB0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZydcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtwcm9wcz8udGl0bGU/LmludmFsaWR9PlxuICAgICAgICA8Rm9ybUxhYmVsPlRpdGxlPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHM/LnRpdGxlPy52YWx1ZX1cbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy50aXRsZT8uaW52YWxpZH1cbiAgICAgICAgLz5cbiAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e3Byb3BzPy50aXRsZT8uZXJyb3JNZXNzYWdlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICB7LyogPEZvcm1Db250cm9sIGlzSW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzLmxhYmVsLmlzSW52YWxpZH0gbXQ9XCIyXCI+XG4gICAgICAgICAgPEZvcm1MYWJlbD5MYWJlbDwvRm9ybUxhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgLy8gaXNSZXF1aXJlZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibGFiZWxcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt2b3RlLmxhYmVsID8/ICcnfVxuICAgICAgICAgICAgaXNJbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnMubGFiZWwuaXNJbnZhbGlkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS5tZXNzYWdlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgPC9Gb3JtQ29udHJvbD4gKi99XG5cbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9eydmbGV4LWVuZCd9IG10PVwiOFwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcbiAgICAgICAgICBpc0xvYWRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgbG9hZGluZ1RleHQ9e3Byb3BzLnN1Ym1pdHRpbmdUZXh0ID8/ICdTdWJtaXR0aW5nJ31cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5va0J1dHRvblRleHQgPz8gJ0NyZWF0ZSd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9IU3RhY2s+XG4gICAgPC9Gb3JtPlxuICApXG59XG4iLCAiaW1wb3J0IHsgQm94LCBUZXh0LCB1c2VDb2xvck1vZGVWYWx1ZSwgVlN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4vd3JhcHBlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZTQwMCh7XG4gIGNoaWxkcmVuID0gbnVsbCxcbiAgc3RhdHVzQ29kZSA9IDQwMCxcbiAgbWVzc2FnZSA9ICdOb3QgZm91bmQuJyxcbiAgZGVzY3JpcHRpb24gPSBgVGhlIHRoaW5nIHlvdSdyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4c2l0LmAsXG59OiB7XG4gIHN0YXR1c0NvZGU/OiBudW1iZXJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgbWVzc2FnZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufSkge1xuICBjb25zdCBiZyA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjEwMCcsICdncmF5LjkwMCcpXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8Qm94IGJnPXtiZ30gbXk9ezh9IHA9ezh9PlxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gc3BhY2luZz17NH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTd4bFwiPntzdGF0dXNDb2RlfTwvaDI+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9eydsZyd9IGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICBPb29wcyFcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9eydsZyd9IGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9eydsZyd9IGNvbG9yU2NoZW1lPVwiYmxhY2tBbHBoYVwiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9Cb3g+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG4iLCAiaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBUZXh0LCB1c2VDb2xvck1vZGVWYWx1ZSwgVlN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBHb1RvSG9tZSBmcm9tICcuL2dvLXRvLWhvbWUnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3dyYXBwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2U1MDAoKSB7XG4gIGNvbnN0IGJnID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuMTAwJywgJ2dyYXkuOTAwJylcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxCb3ggcD1cIjhcIiBteT1cIjhcIiBib3JkZXJSYWRpdXM9eydtZCd9IGJnPXtiZ30+XG4gICAgICAgIDxWU3RhY2sgc3BhY2luZz17NH0+XG4gICAgICAgICAgPEhlYWRpbmcgZm9udFdlaWdodD17J2JvbGQnfSBmb250U2l6ZT17Jzh4bCd9IGNvbG9yPVwicHVycGxlLjMwMFwiPlxuICAgICAgICAgICAgNTAwXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsnM3hsJ30gZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj17J3B1cnBsZS42MDAnfT5cbiAgICAgICAgICAgIFNvcnJ5LCB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JheS42MDBcIj5XZSBhcmUgd29ya2luZyBvbiBmaXhpbmcgdGhlIHByb2JsZW0uIEJlIGJhY2sgc29vbi48L1RleHQ+XG4gICAgICAgICAgPEdvVG9Ib21lIC8+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9Cb3g+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG4iLCAiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdvVG9Ib21lKCkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGlvbignLycpfSByb3VuZGVkPXsnbWQnfSBjb2xvclNjaGVtZT1cInB1cnBsZVwiPlxuICAgICAgR28gdG8gSG9tZVxuICAgIDwvQnV0dG9uPlxuICApXG59XG4iLCAiaW1wb3J0IHsgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgUGFnZTUwMCBmcm9tICcuLzUwMCdcblxuY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9ICgpID0+IHtcbiAgcmV0dXJuIDxQYWdlNTAwIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnlcbiIsICJpbXBvcnQgeyBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXMnXG5pbXBvcnQgeyB1c2VDYXRjaCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgUGFnZTQwMCBmcm9tICcuLzQwMCdcbmltcG9ydCBQYWdlNTAwIGZyb20gJy4vNTAwJ1xuXG5jb25zdCBDYXRjaEJvdW5kYXJ5OiBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG4gIGxldCBwYWdlID0gPFBhZ2U1MDAgLz5cblxuICBpZiAoY2F1Z2h0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgcGFnZSA9IDxQYWdlNDAwIHN0YXR1c0NvZGU9e2NhdWdodC5zdGF0dXN9IG1lc3NhZ2U9e2NhdWdodC5kYXRhPy5tZXNzYWdlfSAvPlxuICB9XG5cbiAgcmV0dXJuIDw+e3BhZ2V9PC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGNoQm91bmRhcnlcbiIsICJpbXBvcnQgeyBHb29nbGVTdHJhdGVneSB9IGZyb20gJ3JlbWl4LWF1dGgtZ29vZ2xlJ1xuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gJ3JlbWl4LWF1dGgnXG5pbXBvcnQgeyBHaXRIdWJTdHJhdGVneSB9IGZyb20gJ3JlbWl4LWF1dGgtZ2l0aHViJ1xuXG5pbXBvcnQgeyBzZXNzaW9uU3RvcmFnZSB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLnNlcnZlcidcblxuY29uc3QgY2xpZW50SUQgPSBwcm9jZXNzLmVudi5DTElFTlRfSURcbmNvbnN0IGNsaWVudFNlY3JldCA9IHByb2Nlc3MuZW52LkNMSUVOVF9TRUNSRVRcbmNvbnN0IGNhbGxiYWNrVVJMID0gcHJvY2Vzcy5lbnYuQ0FMTF9CQUNLX1VSTFxuXG5jb25zdCBnb29nbGVjbGllbnRJRCA9IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSURcbmNvbnN0IGdvb2dsZWNsaWVudFNlY3JldCA9IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUXG5jb25zdCBnb29nbGVjYWxsYmFja1VSTCA9IHByb2Nlc3MuZW52LkdPT0dMRV9DQUxMX0JBQ0tfVVJMXG5cbmlmICghZ29vZ2xlY2xpZW50SUQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdHb29nbGUgQ2xpZW50IGlkIGlzIG5vdCBhZGRlZCcpXG59XG5cbmlmICghZ29vZ2xlY2xpZW50U2VjcmV0KSB7XG4gIHRocm93IG5ldyBFcnJvcignR29vZ2xlIENsaWVudCBzZWNyZXQgaXMgbm90IGFkZGVkJylcbn1cblxuaWYgKCFnb29nbGVjYWxsYmFja1VSTCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZSBDYWxsYmFjayB1cmwgaXMgbm90IHByb3ZpZGVkJylcbn1cblxuaWYgKCFjbGllbnRJRCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0NsaWVudCBpZCBpcyBub3QgYWRkZWQnKVxufVxuXG5pZiAoIWNsaWVudFNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0NsaWVudCBzZWNyZXQgaXMgbm90IGFkZGVkJylcbn1cblxuaWYgKCFjYWxsYmFja1VSTCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIHVybCBpcyBub3QgcHJvdmlkZWQnKVxufVxuXG5jb25zdCBnb29nbGVTdHJhdGVneSA9IG5ldyBHb29nbGVTdHJhdGVneShcbiAge1xuICAgIGNsaWVudElEOiBnb29nbGVjbGllbnRJRCxcbiAgICBjbGllbnRTZWNyZXQ6IGdvb2dsZWNsaWVudFNlY3JldCxcbiAgICBjYWxsYmFja1VSTDogZ29vZ2xlY2FsbGJhY2tVUkwsXG4gIH0sXG4gIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgIGNvbnN0IGVtYWlsID0gcHJvZmlsZS5lbWFpbHNbMF0udmFsdWVcblxuICAgIGlmICghZW1haWwpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBVc2VyLmZpbmRPckNyZWF0ZSh7IGVtYWlsOiBwcm9maWxlLmVtYWlsc1swXS52YWx1ZSwgcHJvZmlsZVVybDogcHJvZmlsZS5fanNvbi5waWN0dXJlIH0pXG4gIH0sXG4pXG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdG9yID0gbmV3IEF1dGhlbnRpY2F0b3Ioc2Vzc2lvblN0b3JhZ2UpXG5cbmV4cG9ydCBjb25zdCBnaXRIdWJTdHJhdGVneSA9IG5ldyBHaXRIdWJTdHJhdGVneShcbiAge1xuICAgIGNsaWVudElELFxuICAgIGNsaWVudFNlY3JldCxcbiAgICBjYWxsYmFja1VSTCxcbiAgfSxcbiAgYXN5bmMgKHsgcHJvZmlsZSB9KSA9PiB7XG4gICAgcmV0dXJuIFVzZXIuZmluZE9yQ3JlYXRlKHtcbiAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsc1swXS52YWx1ZSxcbiAgICAgIHByb2ZpbGVVcmw6IHByb2ZpbGUuX2pzb24uYXZhdGFyX3VybCxcbiAgICB9KVxuICB9LFxuKVxuXG5hdXRoZW50aWNhdG9yLnVzZShnaXRIdWJTdHJhdGVneSlcbmF1dGhlbnRpY2F0b3IudXNlKGdvb2dsZVN0cmF0ZWd5KVxuIiwgIi8vIGFwcC9zZXNzaW9uLnNlcnZlci50c1xuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdyZW1peCdcblxuY29uc3QgY29va2llU2VjcmV0ID0gcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVFxuXG5pZiAoIWNvb2tpZVNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgY29va2llIHNlY3JldCBlbnYgdmFyaWFibGUnKVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvblN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6ICdfc2Vzc2lvbicsXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgIHBhdGg6ICcvJyxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbY29va2llU2VjcmV0XSxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gIH0sXG59KVxuXG5leHBvcnQgY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID0gc2Vzc2lvblN0b3JhZ2VcbiIsICJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuL3ByaXNtYS5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBVc2VyID0ge1xuICBhc3luYyBmaW5kT3JDcmVhdGUoeyBlbWFpbCwgcHJvZmlsZVVybCB9OiB7IGVtYWlsOiBzdHJpbmc7IHByb2ZpbGVVcmw6IHN0cmluZyB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSlcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoeyBkYXRhOiB7IGVtYWlsLCBwcm9maWxlVXJsIH0gfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnRcblxuZGVjbGFyZSBnbG9iYWwge1xuICBsZXQgX19wcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGRldmVsb3BtZW50IHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydFxuLy8gdGhlIHNlcnZlciB3aXRoIGV2ZXJ5IGNoYW5nZSwgYnV0IHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgZGIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4gIHByaXNtYS4kY29ubmVjdCgpXG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX3ByaXNtYSkge1xuICAgIGdsb2JhbC5fX3ByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICAgIGdsb2JhbC5fX3ByaXNtYS4kY29ubmVjdCgpXG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLl9fcHJpc21hXG59XG5cbmV4cG9ydCB7IHByaXNtYSB9XG4iLCAiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29uZmlnOiB7XG4gICAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxuICB9LFxuICBjb2xvcnM6IHtcbiAgICBicmFuZDoge1xuICAgICAgbGlnaHRXaGl0ZTogJyNmYWZhZmEnLFxuICAgICAgMTAwOiAnIzExMScsXG4gICAgICA5MDA6ICcjMDAwJyxcbiAgICB9LFxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6IChwcm9wcykgPT4gKHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgICBjb2xvcjogbW9kZSgnZ3JheS44MDAnLCAnd2hpdGVBbHBoYS45MDAnKShwcm9wcyksXG4gICAgICAgIGJnOiBtb2RlKCdicmFuZC5saWdodFdoaXRlJywgJ2JyYW5kLjEwMCcpKHByb3BzKSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG59KVxuIiwgIi8vIFRPRE8gLSBJZiBmcmVlIGNoZWNrIHRoaXMgYWdhaW4uXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcblxuY29uc3QgRHVlRGF0ZVNjaGVtYSA9IHouZGF0ZSgpXG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBpZCA9IFN0cmluZyhwYXJhbXMuaWQpXG5cbiAgY29uc3QgdG9kbyA9IGF3YWl0IHByaXNtYS50b2RvLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KVxuXG4gIGlmICghdG9kbykge1xuICAgIHRocm93IHJlZGlyZWN0KCcvdG9kbycpXG4gIH1cblxuICBpZiAodG9kby51c2VyRW1haWwgIT09IHVzZXIuZW1haWwpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cganNvbih7IG1lc3NhZ2U6ICdZb3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIGVkaXQgdGhpcyBjb250ZW50JyB9LCB7IHN0YXR1czogNDAxIH0pXG4gIH1cblxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuXG4gIGNvbnN0IGR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoJ2R1ZURhdGUnKSA/IG5ldyBEYXRlKFN0cmluZyhmb3JtRGF0YS5nZXQoJ2R1ZURhdGUnKSkpIDogdW5kZWZpbmVkXG5cbiAgY29uc3QgZHVlRGF0ZVZhbGlkYXRpb25SZXN1bHQgPSBEdWVEYXRlU2NoZW1hLnNhZmVQYXJzZShkdWVEYXRlKVxuXG4gIGlmICghZHVlRGF0ZVZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICByZXR1cm4ganNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnSW52YWxpZCBkdWUgZGF0ZSBwYXNzZWQuIFBsZWFzZSBwYXNzIHZhbGlkIGR1ZSBkYXRlLicgfSlcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnRvZG8udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBTdHJpbmcocGFyYW1zLmlkKSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGR1ZURhdGU6IG1vbWVudChkdWVEYXRlVmFsaWRhdGlvblJlc3VsdC5kYXRhKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBqc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgcmV0dXJuIGpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VwZGF0aW5nIGR1ZSBkYXRlIGZhaWxlZCcgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlKCkge1xuICByZXR1cm4gbnVsbFxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEVycm9yQm91bmRhcnlDb21wb25lbnQsIE1ldGFGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgRGVmYXVsdENhdGNoQm91bmRhcnksIERlZmF1bHRFcnJvckJvdW5kYXJ5LCBEZWxldGVEaWFsb2cgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1RvZG8gfCBEZWxldGUnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBpZCA9IHBhcmFtcy5pZFxuXG4gIGNvbnN0IGlzQ3VycmVudFVzZXJzID0gYXdhaXQgcHJpc21hLnRvZG8uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKGlzQ3VycmVudFVzZXJzICYmIGlzQ3VycmVudFVzZXJzLnVzZXJFbWFpbCA9PT0gdXNlci5lbWFpbCkge1xuICAgIGF3YWl0IHByaXNtYS50b2RvLmRlbGV0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZCxcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiByZWRpcmVjdCgnL3RvZG8nKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGUoKSB7XG4gIHJldHVybiA8RGVsZXRlRGlhbG9nIHRpdGxlPVwiRGVsZXRlIFRvZG9cIiBtZXNzYWdlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIFRvZG8/XCIgLz5cbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0Q2F0Y2hCb3VuZGFyeVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRFcnJvckJvdW5kYXJ5XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBpZCA9IHBhcmFtcy5pZFxuXG4gIGNvbnN0IHRvZG8gPSBhd2FpdCBwcmlzbWEudG9kby5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IFN0cmluZyhpZCksXG4gICAgfSxcbiAgfSlcblxuICBpZiAoIXRvZG8gfHwgdXNlci5lbWFpbCAhPT0gdG9kbz8udXNlckVtYWlsKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KGAvdG9kb2ApXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS50b2RvLnVwZGF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbXBsZXRlZDogIXRvZG8uY29tcGxldGVkLFxuICAgICAgfSxcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4ganNvbih7IG9rOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIGNhdGNoIGJvdW5kYXJ5IGFuZCBlcnJvciBib3VuZGFyeVxuICAgIHRocm93IHJlZGlyZWN0KCcvJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2dnbGUoKSB7XG4gIHJldHVybiBudWxsXG59XG4iLCAiLy8gVE9ETyAtIE1pZ2h0IHdhbnQgdG8gcmVmYWN0b3IgdGhpcy4uLiBFc3BlY2lhbGx5IHRoZSBmb3JtXG5cbmltcG9ydCB7IENsaXBib2FyZENvbnRlbnQgYXMgQ2xpcGJvYXJkQ29udGVudFR5cGUsIFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJbnB1dCxcbiAgU2VsZWN0LFxuICBUZXh0YXJlYSxcbiAgQnV0dG9uLFxuICB1c2VUb2FzdCxcbiAgTWVudSxcbiAgTWVudUJ1dHRvbixcbiAgTWVudUl0ZW0sXG4gIE1lbnVMaXN0LFxuICBCb3gsXG4gIFRhYixcbiAgVGFiTGlzdCxcbiAgVGFiUGFuZWwsXG4gIFRhYlBhbmVscyxcbiAgVGFicyxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7XG4gIGpzb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VQYXJhbXMsXG4gIE91dGxldCxcbiAgdXNlVHJhbnNpdGlvbixcbiAgRm9ybSxcbiAgdXNlTmF2aWdhdGUsXG4gIE1ldGFGdW5jdGlvbixcbiAgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCxcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7XG4gIERlZmF1bHRDYXRjaEJvdW5kYXJ5LFxuICBEZWZhdWx0RXJyb3JCb3VuZGFyeSxcbiAgUGFnZVRpdGxlLFxuICBRUkNvZGUsXG4gIFdyYXBwZXIsXG59IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGNvcHlUb0NsaXBib2FyZCB9IGZyb20gJ34vdXRpbHMvYnJvd3NlcidcbmltcG9ydCB7IGNvbXBvc2VVcmwgfSBmcm9tICd+L3V0aWxzJ1xuaW1wb3J0IHsgQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQ2xpcGJvYXJkJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgY2xpcGJvYXJkQ29udGVudHMgPSBhd2FpdCBwcmlzbWEuY2xpcGJvYXJkQ29udGVudC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IE51bWJlcihwYXJhbXMuaWQpLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKCFjbGlwYm9hcmRDb250ZW50cykge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICB0aHJvdyBqc29uKFxuICAgICAgeyBtZXNzYWdlOiBgVGhlIENsaXBib2FyZCBjb250ZW50IHlvdSdyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0c2AgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDQgfSxcbiAgICApXG4gIH1cblxuICBpZiAoY2xpcGJvYXJkQ29udGVudHMudXNlckVtYWlsICE9PSB1c2VyLmVtYWlsKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oXG4gICAgICB7IG1lc3NhZ2U6IGBVbmF1dGhvcml6ZWQgYWNjZXNzLiBZb3UncmUgbm90IGFsbG93ZWQgdG8gc2VlIHRoaXMgY29udGVudGAgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDEgfSxcbiAgICApXG4gIH1cblxuICByZXR1cm4ganNvbihjbGlwYm9hcmRDb250ZW50cylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29weSgpIHtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXG4gIGNvbnN0IGNsaXBib2FyZENvbnRlbnRzID0gdXNlTG9hZGVyRGF0YTxDbGlwYm9hcmRDb250ZW50VHlwZT4oKVxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKVxuXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5kb3cubG9jYXRpb24uaHJlZn1gKVxuICAgIHNldFVybChgJHtjb21wb3NlVXJsKHVybCl9L2MvJHtpZH1gKVxuICB9LCBbaWRdKVxuXG4gIGNvbnN0IGNvcHkgPSAoKSA9PiB7XG4gICAgY29weVRvQ2xpcGJvYXJkKGNsaXBib2FyZENvbnRlbnRzLmNvbnRlbnQsICgpID0+IHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsbHkgY29waWVkIHRvIGNsaXBib2FyZCcsXG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2hhcmUgPSAoKSA9PiB7XG4gICAgY29weVRvQ2xpcGJvYXJkKHVybCwgKCkgPT4ge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ1VSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJyxcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICB9KVxuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAnSWYgeW91IHdhbnQgdG8gc2hhcmUgdGhpcyBjb250ZW50IHRvIG90aGVyIHBsZWFzZSBtYWtlIHN1cmUgdG8gdXBkYXRlIHRoZSBjb250ZW50IHByaXZhdGUgZmllbGQgdG8gcHVibGljLicsXG4gICAgICAgIHN0YXR1czogJ2luZm8nLFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFBhZ2VUaXRsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj57Y2xpcGJvYXJkQ29udGVudHMudGl0bGV9PC9oMj5cbiAgICAgICAgICA8Qm94IG1sPXsnYXV0byd9PlxuICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFzPXtCdXR0b259IHJpZ2h0SWNvbj17PENoZXZyb25Eb3duSWNvbiAvPn0+XG4gICAgICAgICAgICAgICAgT3B0aW9uc1xuICAgICAgICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgICAgICAgIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gc2hhcmUoKX0+U2hhcmU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBjb3B5KCl9PkNvcHk8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0aW9uKGAvY2xpcGJvYXJkLyR7aWR9L2VkaXRgKX0+RWRpdDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRpb24oYC9jbGlwYm9hcmQvJHtpZH0vZGVsZXRlYCl9PkRlbGV0ZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QYWdlVGl0bGU+XG5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8Rm9ybSBrZXk9e3RyYW5zaXRpb24ubG9jYXRpb24/LmtleX0gY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDxGb3JtTGFiZWw+VGl0bGU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NsaXBib2FyZENvbnRlbnRzLnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgIDxGb3JtTGFiZWw+Q29udGVudDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW50IHRvIGNvcHlcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NsaXBib2FyZENvbnRlbnRzLmNvbnRlbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgIDxGb3JtTGFiZWw+SXMgUHJpdmF0ZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPVwicHJpdmF0ZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IG9wdGlvblwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YCR7Y2xpcGJvYXJkQ29udGVudHMucHJpdmF0ZX1gID8/ICd0cnVlJ31cbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+UHVibGljPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cnVlXCI+UHJpdmF0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8VGFicyBtdD17JzQnfT5cbiAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgIDxUYWI+Q29udGVudCBRUiBjb2RlPC9UYWI+XG4gICAgICAgICAgICA8VGFiPlNoYXJlYWJsZSBsaW5rIFFSIGNvZGU8L1RhYj5cbiAgICAgICAgICA8L1RhYkxpc3Q+XG5cbiAgICAgICAgICA8VGFiUGFuZWxzPlxuICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXtjbGlwYm9hcmRDb250ZW50cy5jb250ZW50fSAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17dXJsfSAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICA8L1RhYlBhbmVscz5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0Q2F0Y2hCb3VuZGFyeVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRFcnJvckJvdW5kYXJ5XG4iLCAiZXhwb3J0IGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IChkYXRhOiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IChzdHJpbmc6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bjb3B5VG9DbGlwYm9hcmRgIHNob3VsZCBiZSB1c2VkIGluIHRoZSBicm93c2VyIGVudmlyb25tZW50JylcbiAgfVxuXG4gIHRyeSB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZGF0YSlcbiAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBzdWNjZXNzQ2FsbGJhY2soZGF0YSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXMnXG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCwgTWV0YUZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBEZWZhdWx0Q2F0Y2hCb3VuZGFyeSwgRGVmYXVsdEVycm9yQm91bmRhcnksIERlbGV0ZURpYWxvZyB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGNvbXBvc2VOdW1iZXJJZCB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0NsaXBib2FyZCB8IERlbGV0ZScsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGlkID0gY29tcG9zZU51bWJlcklkKHBhcmFtcylcblxuICBjb25zdCBpc0N1cnJlbnRVc2VycyA9IGF3YWl0IHByaXNtYS5jbGlwYm9hcmRDb250ZW50LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KVxuXG4gIGlmIChpc0N1cnJlbnRVc2VycyAmJiBpc0N1cnJlbnRVc2Vycy51c2VyRW1haWwgPT09IHVzZXIuZW1haWwpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvY2xpcGJvYXJkJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlKCkge1xuICByZXR1cm4gPERlbGV0ZURpYWxvZyB0aXRsZT1cIkRlbGV0ZSBDb250ZW50XCIgbWVzc2FnZT1cIkFyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBDb250ZW50P1wiIC8+XG59XG5cbmV4cG9ydCBjb25zdCBDYXRjaEJvdW5kYXJ5OiBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdENhdGNoQm91bmRhcnlcblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0RXJyb3JCb3VuZGFyeVxuIiwgImltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICd+L3R5cGVzL2NvbW1vbidcbmltcG9ydCB7IENsaXBib2FyZENvbnRlbnQsIFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTmF2aWdhdGUsXG4gIGpzb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIE1ldGFGdW5jdGlvbixcbiAgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCxcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBNb2RhbEhlYWRlciwgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxCb2R5IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IHsgY29tcG9zZU51bWJlcklkIH0gZnJvbSAnfi91dGlscydcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuaW1wb3J0IHsgRGVmYXVsdENhdGNoQm91bmRhcnksIERlZmF1bHRFcnJvckJvdW5kYXJ5LCBEaWFsb2cgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBDbGlwYm9hcmRDb250ZW50VHlwZSwgQ2xpcGJvYXJkQ29udGVudFNjaGVtYSB9IGZyb20gJ34vdHlwZXMvY2xpcGJvYXJkJ1xuaW1wb3J0IHsgZ2V0Rm9ybURhdGEsIGdldEZpbmFsRm9ybURhdGEgfSBmcm9tICd+L3V0aWxzL2Zvcm0nXG5pbXBvcnQgQ2xpcGJvYXJkRm9ybSwgeyBDbGlwYm9hcmRGb3JtUHJvcHMgfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybXMvY2xpcGJvYXJkJ1xuaW1wb3J0IHsgQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJ1xuXG50eXBlIENsaXBib2FyZEFjdGlvblR5cGUgPSBBY3Rpb25UeXBlPENsaXBib2FyZENvbnRlbnRUeXBlPlxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQ2xpcGJvYXJkIHwgRWRpdCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGlkID0gY29tcG9zZU51bWJlcklkKHBhcmFtcylcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSlcblxuICBpZiAoIWNvbnRlbnQgfHwgY29udGVudC51c2VyRW1haWwgIT09IHVzZXIuZW1haWwpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgRXJyb3J5IGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IHJlZGlyZWN0KCcvY2xpcGJvYXJkJylcbiAgfVxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgY2xpcGJvYXJkQ29udGVudERhdGEgPSBnZXRGb3JtRGF0YTxDbGlwYm9hcmRDb250ZW50VHlwZT4oZm9ybURhdGEsIFtcbiAgICB7IGtleTogJ3RpdGxlJyB9LFxuICAgIHsga2V5OiAnY29udGVudCcgfSxcbiAgICB7IGtleTogJ3ByaXZhdGUnLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0sXG4gIF0pXG5cbiAgY29uc3QgY2xpcGJvYXJkQ29udGVudFZhbGlkYXRpb25SZXN1bHQgPSBDbGlwYm9hcmRDb250ZW50U2NoZW1hLnNhZmVQYXJzZShjbGlwYm9hcmRDb250ZW50RGF0YSlcblxuICBpZiAoIWNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZ2V0RmluYWxGb3JtRGF0YTxDbGlwYm9hcmRDb250ZW50VHlwZT4oXG4gICAgICBjbGlwYm9hcmRDb250ZW50RGF0YSxcbiAgICAgIGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmVycm9yLmZvcm1FcnJvcnMuZmllbGRFcnJvcnMsXG4gICAgKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjbGlwYm9hcmRDb250ZW50ID0gYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRlbnQ6IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmRhdGEuY29udGVudCxcbiAgICAgICAgdGl0bGU6IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICAgIHByaXZhdGU6IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmRhdGEucHJpdmF0ZSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4gcmVkaXJlY3QoYC9jbGlwYm9hcmQvJHtjbGlwYm9hcmRDb250ZW50LmlkfWApXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBFcnJvcnkgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBjbGlwYm9hcmRDb250ZW50cyA9IGF3YWl0IHByaXNtYS5jbGlwYm9hcmRDb250ZW50LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogTnVtYmVyKHBhcmFtcy5pZCksXG4gICAgfSxcbiAgfSlcblxuICBpZiAoIWNsaXBib2FyZENvbnRlbnRzKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oXG4gICAgICB7IG1lc3NhZ2U6IGBUaGUgQ2xpcGJvYXJkIGNvbnRlbnQgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3RzYCB9LFxuICAgICAgeyBzdGF0dXM6IDQwNCB9LFxuICAgIClcbiAgfVxuXG4gIGlmIChjbGlwYm9hcmRDb250ZW50cy51c2VyRW1haWwgIT09IHVzZXIuZW1haWwpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cganNvbihcbiAgICAgIHsgbWVzc2FnZTogYFVuYXV0aG9yaXplZCBhY2Nlc3MuIFlvdSdyZSBub3QgYWxsb3dlZCB0byBzZWUgdGhpcyBjb250ZW50YCB9LFxuICAgICAgeyBzdGF0dXM6IDQwMSB9LFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBqc29uKGNsaXBib2FyZENvbnRlbnRzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGlwYm9hcmRDb250ZW50TmV3KCkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKC0xKVxuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPENsaXBib2FyZEFjdGlvblR5cGU+KClcblxuICBjb25zdCBjb250ZW50ID0gdXNlTG9hZGVyRGF0YTxDbGlwYm9hcmRDb250ZW50PigpXG5cbiAgY29uc3QgY2xpcGJvYXJkRm9ybVByb3BzOiBDbGlwYm9hcmRGb3JtUHJvcHMgPSB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHZhbHVlOiBjb250ZW50LnRpdGxlLFxuICAgICAgLi4uYWN0aW9uRGF0YT8udGl0bGUsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICB2YWx1ZTogY29udGVudC5jb250ZW50LFxuICAgICAgLi4uYWN0aW9uRGF0YT8uY29udGVudCxcbiAgICB9LFxuICAgIHByaXZhdGU6IHtcbiAgICAgIHZhbHVlOiBjb250ZW50LnByaXZhdGUsXG4gICAgICAuLi5hY3Rpb25EYXRhPy5wcml2YXRlLFxuICAgIH0sXG4gICAgc3VibWl0dGluZ1RleHQ6ICdTYXZpbmcnLFxuICAgIG9rQnV0dG9uVGV4dDogJ1NhdmUnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIGlzT3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICA8TW9kYWxIZWFkZXI+RWRpdCBDbGlwYm9hcmQgY29udGVudDwvTW9kYWxIZWFkZXI+XG4gICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgIDxDbGlwYm9hcmRGb3JtIHsuLi5jbGlwYm9hcmRGb3JtUHJvcHN9IC8+XG4gICAgICA8L01vZGFsQm9keT5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgQ2F0Y2hCb3VuZGFyeTogQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRDYXRjaEJvdW5kYXJ5XG5cbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdEVycm9yQm91bmRhcnlcbiIsICJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5jb25zdCBDbGlwYm9hcmRDb250ZW50U2NoZW1hID0gei5vYmplY3Qoe1xuICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSkubWF4KDIwMCksXG4gIGNvbnRlbnQ6IHouc3RyaW5nKCkubWluKDUpLm1heCgyMDAwKSxcbiAgcHJpdmF0ZTogei5ib29sZWFuKCksXG59KVxuXG50eXBlIENsaXBib2FyZENvbnRlbnRUeXBlID0gei5pbmZlcjx0eXBlb2YgQ2xpcGJvYXJkQ29udGVudFNjaGVtYT5cblxuZXhwb3J0IHsgQ2xpcGJvYXJkQ29udGVudFNjaGVtYSwgQ2xpcGJvYXJkQ29udGVudFR5cGUgfVxuIiwgImltcG9ydCB7IFByaW9yaXR5LCBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnfi90eXBlcy9jb21tb24nXG5pbXBvcnQgeyBUb2RvU2NoZW1hLCBUb2RvVHlwZSB9IGZyb20gJ34vdHlwZXMvdG9kbydcblxuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTmF2aWdhdGUsXG4gIGpzb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIE1ldGFGdW5jdGlvbixcbiAgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCxcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBNb2RhbEhlYWRlciwgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxCb2R5IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgeyBjb21wb3NlUHJpb3JpdHkgfSBmcm9tICd+L3V0aWxzJ1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5pbXBvcnQgeyBnZXRGaW5hbEZvcm1EYXRhLCBnZXRGb3JtRGF0YSB9IGZyb20gJ34vdXRpbHMvZm9ybSdcbmltcG9ydCB7IERlZmF1bHRDYXRjaEJvdW5kYXJ5LCBEZWZhdWx0RXJyb3JCb3VuZGFyeSwgRGlhbG9nIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IFRvZG9Gb3JtLCB7IFRvZG9Gb3JtUHJvcHMgfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybXMvdG9kbydcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxudHlwZSBUb2RvQWN0aW9uVHlwZSA9IEFjdGlvblR5cGU8VG9kb1R5cGU+XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdUb2RvIHwgRWRpdCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkXG5cbiAgY29uc3QgdG9kbyA9IGF3YWl0IHByaXNtYS50b2RvLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pXG5cbiAgaWYgKCF0b2RvKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggZXJyb3IgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cgcmVkaXJlY3QoJy90b2RvJylcbiAgfVxuXG4gIGlmICh0b2RvLnVzZXJFbWFpbCAhPT0gdXNlci5lbWFpbCkge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIGVycm9yIGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oeyBtZXNzYWdlOiAnWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBlZGl0IHRoaXMgY29udGVudCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICB9XG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCB0b2RvRGF0YSA9IGdldEZvcm1EYXRhPFRvZG9UeXBlPihmb3JtRGF0YSwgW1xuICAgIHsga2V5OiAndGl0bGUnIH0sXG4gICAgeyBrZXk6ICdkZXNjcmlwdGlvbicgfSxcbiAgICB7IGtleTogJ2NvbXBsZXRlZCcsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSxcbiAgICB7IGtleTogJ2R1ZURhdGUnLCBjb21wb3NlOiAodmFsdWUpID0+ICh2YWx1ZSA/IG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpIDogdW5kZWZpbmVkKSB9LFxuICAgIHsga2V5OiAncHJpb3JpdHknLCBjb21wb3NlOiAodmFsdWUpID0+IGNvbXBvc2VQcmlvcml0eShTdHJpbmcodmFsdWUpIGFzIFByaW9yaXR5KSB9LFxuICBdKVxuXG4gIGNvbnN0IHRvZG9WYWxpZGF0aW9uUmVzdWx0ID0gVG9kb1NjaGVtYS5zYWZlUGFyc2UodG9kb0RhdGEpXG5cbiAgaWYgKCF0b2RvVmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIGdldEZpbmFsRm9ybURhdGE8VG9kb1R5cGU+KHRvZG9EYXRhLCB0b2RvVmFsaWRhdGlvblJlc3VsdC5lcnJvci5mb3JtRXJyb3JzLmZpZWxkRXJyb3JzKVxuICB9XG5cbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBkZXNjcmlwdGlvbjogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS5kZXNjcmlwdGlvbixcbiAgICB0aXRsZTogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS50aXRsZSxcbiAgICBjb21wbGV0ZWQ6IHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEuY29tcGxldGVkLFxuICAgIGR1ZURhdGU6IHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEuZHVlRGF0ZVxuICAgICAgPyBtb21lbnQodG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgOiBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICBwcmlvcml0eTogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS5wcmlvcml0eSxcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnRvZG8udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBTdHJpbmcocGFyYW1zLmlkKSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7IC4uLnBheWxvYWQsIHVzZXJFbWFpbDogdXNlci5lbWFpbCB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVkaXJlY3QoYC90b2RvYClcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCB0b2RvID0gYXdhaXQgcHJpc21hLnRvZG8uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBTdHJpbmcocGFyYW1zLmlkKSxcbiAgICB9LFxuICB9KVxuXG4gIGlmICghdG9kbykge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICB0aHJvdyBqc29uKHsgbWVzc2FnZTogYFRoZSB0b2RvIHlvdSdyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0c2AgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICB9XG5cbiAgaWYgKHRvZG8udXNlckVtYWlsICE9PSB1c2VyLmVtYWlsKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oXG4gICAgICB7IG1lc3NhZ2U6IGBVbmF1dGhvcml6ZWQgYWNjZXNzLiBZb3UncmUgbm90IGFsbG93ZWQgdG8gc2VlIHRoaXMgdG9kb2AgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDEgfSxcbiAgICApXG4gIH1cblxuICByZXR1cm4ganNvbih0b2RvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvRWRpdCgpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbigtMSlcblxuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxUb2RvQWN0aW9uVHlwZT4oKVxuXG4gIGNvbnN0IHRvZG8gPSB1c2VMb2FkZXJEYXRhPFRvZG9UeXBlPigpXG5cbiAgY29uc3QgdG9kb0Zvcm1Qcm9wczogVG9kb0Zvcm1Qcm9wcyA9IHtcbiAgICB0aXRsZToge1xuICAgICAgdmFsdWU6IHRvZG8udGl0bGUsXG4gICAgICAuLi5hY3Rpb25EYXRhPy50aXRsZSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICB2YWx1ZTogdG9kby5kZXNjcmlwdGlvbixcbiAgICAgIC4uLmFjdGlvbkRhdGE/LmRlc2NyaXB0aW9uLFxuICAgIH0sXG4gICAgY29tcGxldGVkOiB7XG4gICAgICB2YWx1ZTogdG9kby5jb21wbGV0ZWQsXG4gICAgICAuLi5hY3Rpb25EYXRhPy5jb21wbGV0ZWQsXG4gICAgfSxcbiAgICBkdWVEYXRlOiB7XG4gICAgICB2YWx1ZTogdG9kby5kdWVEYXRlLFxuICAgICAgLi4uYWN0aW9uRGF0YT8uZHVlRGF0ZSxcbiAgICB9LFxuICAgIHByaW9yaXR5OiB7XG4gICAgICB2YWx1ZTogdG9kby5wcmlvcml0eSxcbiAgICAgIC4uLmFjdGlvbkRhdGE/LnByaW9yaXR5LFxuICAgIH0sXG4gICAgc3VibWl0dGluZ1RleHQ6ICdTYXZpbmcnLFxuICAgIG9rQnV0dG9uVGV4dDogJ1NhdmUnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIGlzT3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICA8TW9kYWxIZWFkZXI+RWRpdCBUb2RvPC9Nb2RhbEhlYWRlcj5cbiAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgPFRvZG9Gb3JtIHsuLi50b2RvRm9ybVByb3BzfSAvPlxuICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0Q2F0Y2hCb3VuZGFyeVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRFcnJvckJvdW5kYXJ5XG4iLCAiaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcblxuZXhwb3J0IGNvbnN0IFRvZG9TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRpdGxlOiB6LnN0cmluZygpLm1pbig1KS5tYXgoMjAwKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkubWF4KDUwMCkub3B0aW9uYWwoKSxcbiAgY29tcGxldGVkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBkdWVEYXRlOiB6LmRhdGUoKS5vcHRpb25hbCgpLFxuICAvLyBsYWJlbHM6IHouYXJyYXkoei5udW1iZXIoKSkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHoubmF0aXZlRW51bShQcmlvcml0eSkub3B0aW9uYWwoKSxcbn0pXG5cbmV4cG9ydCB0eXBlIFRvZG9UeXBlID0gei5pbmZlcjx0eXBlb2YgVG9kb1NjaGVtYT5cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KCcvbG9naW4nKVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUoJ2dpdGh1YicsIHJlcXVlc3QpXG59XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBhdXRoZW50aWNhdG9yLmF1dGhlbnRpY2F0ZSgnZ2l0aHViJywgcmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogJy8nLFxuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdCgnL2xvZ2luJylcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKCdnb29nbGUnLCByZXF1ZXN0KVxufVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUoJ2dvb2dsZScsIHJlcXVlc3QsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6ICcvJyxcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxufVxuIiwgImltcG9ydCB7IFVzZXIsIFZvdGUgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHtcbiAgSW5wdXRHcm91cCxcbiAgSW5wdXRMZWZ0RWxlbWVudCxcbiAgSW5wdXQsXG4gIEJ1dHRvbixcbiAgVlN0YWNrLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgU3RhY2tEaXZpZGVyLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSW9NZEFkZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJ1xuaW1wb3J0IHsgUmlTZWFyY2hMaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknXG5pbXBvcnQge1xuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VTdWJtaXQsXG4gIEZvcm0sXG4gIGpzb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIE91dGxldCxcbiAgdXNlTmF2aWdhdGUsXG4gIEVycm9yQm91bmRhcnlDb21wb25lbnQsXG59IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQge1xuICBWb3RlSXRlbSxcbiAgTm9JdGVtcyxcbiAgV3JhcHBlcixcbiAgRGVmYXVsdENhdGNoQm91bmRhcnksXG4gIERlZmF1bHRFcnJvckJvdW5kYXJ5LFxufSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1ZvdGUnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblxuICBjb25zdCBxdWVyeSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcblxuICBpZiAocXVlcnkpIHtcbiAgICBjb25zdCBzZWFyY2hNYXRjaFJlc3VsdCA9IGF3YWl0IHByaXNtYS52b3RlLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBjb250YWluczogcXVlcnksXG4gICAgICAgICAgbW9kZTogJ2luc2Vuc2l0aXZlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIHVwdm90ZXM6ICdkZXNjJyxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBqc29uKHNlYXJjaE1hdGNoUmVzdWx0KVxuICB9XG5cbiAgY29uc3Qgdm90ZXMgPSBhd2FpdCBwcmlzbWEudm90ZS5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIHVwdm90ZXM6ICdkZXNjJyxcbiAgICB9LFxuICB9KVxuXG4gIHJldHVybiBqc29uKHZvdGVzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGlwYmFvcmRDb250ZW50KCkge1xuICBjb25zdCB2b3RlcyA9IHVzZUxvYWRlckRhdGE8QXJyYXk8Vm90ZT4+KClcblxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKVxuXG4gIGNvbnN0IGJvcmRlckNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuMjAwJywgJ2dyYXkuNzAwJylcblxuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBweS04XCI+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCJcbiAgICAgICAgICBtZXRob2Q9XCJnZXRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsodGFyZ2V0KSA9PiBzdWJtaXQodGFyZ2V0LmN1cnJlbnRUYXJnZXQpfVxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0R3JvdXAgc2l6ZT1cIm1kXCIgd2lkdGg9XCI4MSVcIj5cbiAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tY2hpbGRyZW4tcHJvcCovfVxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnQgcG9pbnRlckV2ZW50cz1cIm5vbmVcIiBjaGlsZHJlbj17PFJpU2VhcmNoTGluZSBjb2xvcj1cImdyYXkuMzAwXCIgLz59IC8+XG4gICAgICAgICAgICA8SW5wdXQgcHI9XCI0LjVyZW1cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJxXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBsZWZ0SWNvbj17PElvTWRBZGQgLz59XG4gICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxuICAgICAgICAgICAgdz1cIjE3JVwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGlvbignL2hhYml0cy1yYW5rL25ldycpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbXQtNCBib3JkZXIgcm91bmRlZC1tZFwiPlxuICAgICAgICAgIDxWU3RhY2sgYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfSBkaXZpZGVyPXs8U3RhY2tEaXZpZGVyIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcn0gLz59PlxuICAgICAgICAgICAge3ZvdGVzLm1hcCgodm90ZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPFZvdGVJdGVtIHsuLi52b3RlfSBrZXk9e3ZvdGUuaWR9IC8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHt2b3Rlcy5sZW5ndGggPT09IDAgJiYgPE5vSXRlbXMgdGl0bGU9XCJObyBWb3RlZXMgZm91bmQuIFBsZWFzZSBhZGQgc29tZSEhIVwiIC8+fVxuICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgQ2F0Y2hCb3VuZGFyeTogQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRDYXRjaEJvdW5kYXJ5XG5cbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdEVycm9yQm91bmRhcnlcbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgY29tcG9zZU51bWJlcklkIH0gZnJvbSAnfi91dGlscydcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBpZCA9IGNvbXBvc2VOdW1iZXJJZChwYXJhbXMpXG5cbiAgY29uc3QgaXNDdXJyZW50VXNlcnMgPSBhd2FpdCBwcmlzbWEudm90ZS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoIWlzQ3VycmVudFVzZXJzIHx8IGlzQ3VycmVudFVzZXJzLnVzZXJFbWFpbCAhPT0gdXNlci5lbWFpbCkge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICByZXR1cm4gcmVkaXJlY3QoJy9oYWJpdHMtcmFuaycpXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS52b3RlLnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRvd252b3Rlczoge1xuICAgICAgICAgIGluY3JlbWVudDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4ganNvbih7IG9rOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IHJlZGlyZWN0KCcvJylcbiAgfVxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEVycm9yQm91bmRhcnlDb21wb25lbnQsIE1ldGFGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgRGVmYXVsdENhdGNoQm91bmRhcnksIERlZmF1bHRFcnJvckJvdW5kYXJ5LCBEZWxldGVEaWFsb2cgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1RvZG8gfCBEZWxldGUnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBpZCA9IHBhcmFtcy5pZCA/ICtwYXJhbXMuaWQgOiB1bmRlZmluZWRcblxuICBjb25zdCBpc0N1cnJlbnRVc2VycyA9IGF3YWl0IHByaXNtYS52b3RlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KVxuXG4gIGlmIChpc0N1cnJlbnRVc2VycyAmJiBpc0N1cnJlbnRVc2Vycy51c2VyRW1haWwgPT09IHVzZXIuZW1haWwpIHtcbiAgICBhd2FpdCBwcmlzbWEudm90ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQsXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcmVkaXJlY3QoJy9oYWJpdHMtcmFuaycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZSgpIHtcbiAgcmV0dXJuIDxEZWxldGVEaWFsb2cgdGl0bGU9XCJEZWxldGUgSGFiaXRcIiBtZXNzYWdlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIEhhYml0P1wiIC8+XG59XG5cbmV4cG9ydCBjb25zdCBDYXRjaEJvdW5kYXJ5OiBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdENhdGNoQm91bmRhcnlcblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0RXJyb3JCb3VuZGFyeVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgaWQgPSBwYXJhbXMuaWQgPyArcGFyYW1zLmlkIDogdW5kZWZpbmVkXG5cbiAgY29uc3QgaXNDdXJyZW50VXNlcnMgPSBhd2FpdCBwcmlzbWEudm90ZS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoIWlzQ3VycmVudFVzZXJzIHx8IGlzQ3VycmVudFVzZXJzLnVzZXJFbWFpbCAhPT0gdXNlci5lbWFpbCkge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICByZXR1cm4gcmVkaXJlY3QoJy9oYWJpdHMtcmFuaycpXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS52b3RlLnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVwdm90ZXM6IHtcbiAgICAgICAgICBpbmNyZW1lbnQ6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGpzb24oeyBvazogdHJ1ZSB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG4iLCAiaW1wb3J0IHsgVm90ZSwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ34vdHlwZXMvY29tbW9uJ1xuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tICd+L3R5cGVzL3RvZG8nXG5cbmltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZU5hdmlnYXRlLFxuICBqc29uLFxuICB1c2VMb2FkZXJEYXRhLFxuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE1vZGFsSGVhZGVyLCBNb2RhbENsb3NlQnV0dG9uLCBNb2RhbEJvZHkgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgeyBjb21wb3NlTnVtYmVySWQgfSBmcm9tICd+L3V0aWxzJ1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5pbXBvcnQgeyBEZWZhdWx0Q2F0Y2hCb3VuZGFyeSwgRGVmYXVsdEVycm9yQm91bmRhcnksIERpYWxvZywgSGFiaXRGb3JtIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgVm90ZUZvcm1Qcm9wcyB9IGZyb20gJ34vY29tcG9uZW50cy9mb3Jtcy92b3RlJ1xuaW1wb3J0IHsgZ2V0RmluYWxGb3JtRGF0YSwgZ2V0Rm9ybURhdGEgfSBmcm9tICd+L3V0aWxzL2Zvcm0nXG5pbXBvcnQgeyBWb3RlU2NoZW1hLCBWb3RlVHlwZSB9IGZyb20gJ34vdHlwZXMvdm90ZSdcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxuZXhwb3J0IHR5cGUgVm90ZUFjdGlvblR5cGUgPSBBY3Rpb25UeXBlPFRvZG9UeXBlPlxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgaWQgPSBjb21wb3NlTnVtYmVySWQocGFyYW1zKVxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgdG9kb0RhdGEgPSBnZXRGb3JtRGF0YTxUb2RvVHlwZT4oZm9ybURhdGEsIFt7IGtleTogJ3RpdGxlJyB9XSlcblxuICBjb25zdCBWb3RlVmFsaWRhdGlvblJlc3VsdCA9IFZvdGVTY2hlbWEuc2FmZVBhcnNlKHRvZG9EYXRhKVxuXG4gIGlmICghVm90ZVZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiBnZXRGaW5hbEZvcm1EYXRhPFZvdGVUeXBlPih0b2RvRGF0YSwgVm90ZVZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZm9ybUVycm9ycy5maWVsZEVycm9ycylcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnZvdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6IFZvdGVWYWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4gcmVkaXJlY3QoYC9oYWJpdHMtcmFua2ApXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICByZXR1cm4gcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCB2b3RlID0gYXdhaXQgcHJpc21hLnZvdGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBwYXJhbXMuaWQgPyArcGFyYW1zLmlkIDogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKCF2b3RlKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oeyBtZXNzYWdlOiBgVGhlIHZvdGUgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3RzYCB9LCB7IHN0YXR1czogNDA0IH0pXG4gIH1cblxuICBpZiAodm90ZS51c2VyRW1haWwgIT09IHVzZXIuZW1haWwpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cganNvbihcbiAgICAgIHsgbWVzc2FnZTogYFVuYXV0aG9yaXplZCBhY2Nlc3MuIFlvdSdyZSBub3QgYWxsb3dlZCB0byBzZWUgdGhpcyB2b3RlYCB9LFxuICAgICAgeyBzdGF0dXM6IDQwMSB9LFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBqc29uKHZvdGUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZvdGVFZGl0KCkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKC0xKVxuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPFZvdGVBY3Rpb25UeXBlPigpXG5cbiAgY29uc3Qgdm90ZSA9IHVzZUxvYWRlckRhdGE8Vm90ZT4oKVxuXG4gIGNvbnN0IGhhYml0Rm9ybVByb3BzOiBWb3RlRm9ybVByb3BzID0ge1xuICAgIHRpdGxlOiB7XG4gICAgICB2YWx1ZTogdm90ZS50aXRsZSxcbiAgICAgIC4uLmFjdGlvbkRhdGE/LnRpdGxlLFxuICAgIH0sXG4gICAgc3VibWl0dGluZ1RleHQ6ICdTYXZpbmcnLFxuICAgIG9rQnV0dG9uVGV4dDogJ1NhdmUnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIGlzT3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICA8TW9kYWxIZWFkZXI+RWRpdCBIYWJpdDwvTW9kYWxIZWFkZXI+XG4gICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgIDxIYWJpdEZvcm0gey4uLmhhYml0Rm9ybVByb3BzfSAvPlxuICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0Q2F0Y2hCb3VuZGFyeVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRFcnJvckJvdW5kYXJ5XG4iLCAiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcblxuZXhwb3J0IGNvbnN0IFZvdGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRpdGxlOiB6LnN0cmluZygpLm1pbig1KS5tYXgoMTAwKSxcbn0pXG5cbmV4cG9ydCB0eXBlIFZvdGVUeXBlID0gei5pbmZlcjx0eXBlb2YgVm90ZVNjaGVtYT5cbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnfi90eXBlcy9jb21tb24nXG5cbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QsIHVzZUFjdGlvbkRhdGEsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBNb2RhbEhlYWRlciwgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxCb2R5IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5pbXBvcnQgeyBEaWFsb2csIEhhYml0Rm9ybSB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IFZvdGVGb3JtUHJvcHMgfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybXMvdm90ZSdcbmltcG9ydCB7IGdldEZpbmFsRm9ybURhdGEsIGdldEZvcm1EYXRhIH0gZnJvbSAnfi91dGlscy9mb3JtJ1xuaW1wb3J0IHsgVm90ZVNjaGVtYSwgVm90ZVR5cGUgfSBmcm9tICd+L3R5cGVzL3ZvdGUnXG5cbmludGVyZmFjZSBWb3RlQWN0aW9uVHlwZSBleHRlbmRzIEFjdGlvblR5cGU8Vm90ZVR5cGU+IHt9XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCB2b3RlRGF0YSA9IGdldEZvcm1EYXRhPFZvdGVUeXBlPihmb3JtRGF0YSwgW3sga2V5OiAndGl0bGUnLCBkZWZhdWx0VmFsdWU6ICcnIH1dKVxuXG4gIGNvbnN0IHZvdGVWYWxpZGF0aW9uUmVzdWx0ID0gVm90ZVNjaGVtYS5zYWZlUGFyc2Uodm90ZURhdGEpXG5cbiAgaWYgKCF2b3RlVmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIGdldEZpbmFsRm9ybURhdGE8Vm90ZVR5cGU+KHZvdGVEYXRhLCB2b3RlVmFsaWRhdGlvblJlc3VsdC5lcnJvci5mb3JtRXJyb3JzLmZpZWxkRXJyb3JzKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEudm90ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogdm90ZVZhbGlkYXRpb25SZXN1bHQuZGF0YS50aXRsZSxcbiAgICAgICAgdXNlckVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC8vIHJldHVybiBqc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCwgZXJyb3JNZXNzYWdlOiAnJyB9KVxuICAgIHJldHVybiByZWRpcmVjdCgnL2hhYml0cy1yYW5rJylcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggY2F0Y2ggYW5kIGVycm9yIGJvdW5kYXJ5XG4gICAgLy8gcmV0dXJuIGpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3JNZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyB9KVxuICAgIHJldHVybiByZWRpcmVjdCgnLycpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWb3RlRWRpdCgpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbigtMSlcblxuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxWb3RlQWN0aW9uVHlwZT4oKVxuXG4gIGNvbnN0IGhhYml0Rm9ybVByb3BzOiBWb3RlRm9ybVByb3BzID0ge1xuICAgIC4uLmFjdGlvbkRhdGEsXG4gICAgc3VibWl0dGluZ1RleHQ6ICdDcmVhdGluZycsXG4gICAgb2tCdXR0b25UZXh0OiAnQ3JlYXRlJyxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBpc09wZW49e3RydWV9IG9uQ2xvc2U9e29uQ2xvc2V9PlxuICAgICAgPE1vZGFsSGVhZGVyPkNyZWF0ZSBuZXcgSGFiaXQ8L01vZGFsSGVhZGVyPlxuICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgIDxNb2RhbEJvZHkgcGI9ezZ9PlxuICAgICAgICA8SGFiaXRGb3JtIHsuLi5oYWJpdEZvcm1Qcm9wc30gLz5cbiAgICAgIDwvTW9kYWxCb2R5PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKCdPSycpXG59XG4iLCAiaW1wb3J0IHsgQ2xpcGJvYXJkQ29udGVudCBhcyBDbGlwYm9hcmRDb250ZW50VHlwZSwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBJbnB1dEdyb3VwLCBJbnB1dExlZnRFbGVtZW50IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IElvTWRBZGQgfSBmcm9tICdyZWFjdC1pY29ucy9pbydcbmltcG9ydCB7XG4gIExvYWRlckZ1bmN0aW9uLFxuICBqc29uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VOYXZpZ2F0ZSxcbiAgTGluayxcbiAgT3V0bGV0LFxuICBGb3JtLFxuICB1c2VTdWJtaXQsXG4gIE1ldGFGdW5jdGlvbixcbiAgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCxcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBSaVNlYXJjaExpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5pbXBvcnQge1xuICBDbGlwYm9hcmRDb250ZW50IGFzIENsaXBib2FyZENvbnRlbnRDb21wLFxuICBEZWZhdWx0Q2F0Y2hCb3VuZGFyeSxcbiAgRGVmYXVsdEVycm9yQm91bmRhcnksXG4gIE5vSXRlbXMsXG4gIFdyYXBwZXIsXG59IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0NsaXBib2FyZCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKVxuXG4gIGNvbnN0IHF1ZXJ5ID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSA/PyAnJ1xuXG4gIGlmIChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaE1hdGNoUmVzdWx0ID0gYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlckVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGNvbnRhaW5zOiBxdWVyeSxcbiAgICAgICAgICBtb2RlOiAnaW5zZW5zaXRpdmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIGpzb24oc2VhcmNoTWF0Y2hSZXN1bHQpXG4gIH1cblxuICBjb25zdCBjbGlwYm9hcmRDb250ZW50cyA9IGF3YWl0IHByaXNtYS5jbGlwYm9hcmRDb250ZW50LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlckVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIH0sXG4gIH0pXG5cbiAgcmV0dXJuIGpzb24oY2xpcGJvYXJkQ29udGVudHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaXBib2FyZENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gdXNlTG9hZGVyRGF0YTxBcnJheTxDbGlwYm9hcmRDb250ZW50VHlwZT4+KClcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBweS04XCI+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCJcbiAgICAgICAgICBtZXRob2Q9XCJnZXRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsodGFyZ2V0KSA9PiBzdWJtaXQodGFyZ2V0LmN1cnJlbnRUYXJnZXQpfVxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0R3JvdXAgc2l6ZT1cIm1kXCIgd2lkdGg9XCI4MSVcIj5cbiAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tY2hpbGRyZW4tcHJvcCovfVxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnQgcG9pbnRlckV2ZW50cz1cIm5vbmVcIiBjaGlsZHJlbj17PFJpU2VhcmNoTGluZSBjb2xvcj1cImdyYXkuMzAwXCIgLz59IC8+XG4gICAgICAgICAgICA8SW5wdXQgcHI9XCI0LjVyZW1cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJxXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBsZWZ0SWNvbj17PElvTWRBZGQgLz59XG4gICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxuICAgICAgICAgICAgdz1cIjE3JVwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGlvbignL2NsaXBib2FyZC9uZXcnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAge2NvbnRlbnRzLm1hcCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz17YC9jbGlwYm9hcmQvJHtjb250ZW50LmlkfWB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2NvbnRlbnQuaWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdHJhbnNpdGlvbi1hbGwgYm9yZGVyIHJvdW5kZWQtbWQgaG92ZXI6Ym9yZGVyLXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2xpcGJvYXJkQ29udGVudENvbXAgey4uLmNvbnRlbnR9IGtleT17Y29udGVudC5pZH0gLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjb250ZW50cy5sZW5ndGggPT09IDAgJiYgPE5vSXRlbXMgdGl0bGU9XCJObyBjb3BpZWQgaXRlbXMgZm91bmQhISFcIiAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0Q2F0Y2hCb3VuZGFyeVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRFcnJvckJvdW5kYXJ5XG4iLCAiaW1wb3J0IHsgQ2xpcGJvYXJkQ29udGVudFNjaGVtYSwgQ2xpcGJvYXJkQ29udGVudFR5cGUgfSBmcm9tICd+L3R5cGVzL2NsaXBib2FyZCdcbmltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICd+L3R5cGVzL2NvbW1vbidcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTmF2aWdhdGUsXG4gIE1ldGFGdW5jdGlvbixcbiAgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCxcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBNb2RhbEhlYWRlciwgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxCb2R5IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IHsgQ2xpcGJvYXJkRm9ybVByb3BzIH0gZnJvbSAnfi9jb21wb25lbnRzL2Zvcm1zL2NsaXBib2FyZCdcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuaW1wb3J0IHsgQ2xpcGJvYXJkRm9ybSwgRGVmYXVsdENhdGNoQm91bmRhcnksIERlZmF1bHRFcnJvckJvdW5kYXJ5LCBEaWFsb2cgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXRGaW5hbEZvcm1EYXRhLCBnZXRGb3JtRGF0YSB9IGZyb20gJ34vdXRpbHMvZm9ybSdcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxudHlwZSBDbGlwYm9hcmRBY3Rpb25UeXBlID0gQWN0aW9uVHlwZTxDbGlwYm9hcmRDb250ZW50VHlwZT5cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0NsaXBib2FyZCB8IE5ldycsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuXG4gIGNvbnN0IGNsaXBib2FyZENvbnRlbnREYXRhID0gZ2V0Rm9ybURhdGE8Q2xpcGJvYXJkQ29udGVudFR5cGU+KGZvcm1EYXRhLCBbXG4gICAgeyBrZXk6ICd0aXRsZScgfSxcbiAgICB7IGtleTogJ2NvbnRlbnQnIH0sXG4gICAgeyBrZXk6ICdwcml2YXRlJywgZGVmYXVsdFZhbHVlOiBmYWxzZSB9LFxuICBdKVxuXG4gIGNvbnN0IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0ID0gQ2xpcGJvYXJkQ29udGVudFNjaGVtYS5zYWZlUGFyc2UoY2xpcGJvYXJkQ29udGVudERhdGEpXG5cbiAgaWYgKCFjbGlwYm9hcmRDb250ZW50VmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIGdldEZpbmFsRm9ybURhdGE8Q2xpcGJvYXJkQ29udGVudFR5cGU+KFxuICAgICAgY2xpcGJvYXJkQ29udGVudERhdGEsXG4gICAgICBjbGlwYm9hcmRDb250ZW50VmFsaWRhdGlvblJlc3VsdC5lcnJvci5mb3JtRXJyb3JzLmZpZWxkRXJyb3JzLFxuICAgIClcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgY2xpcGJvYXJkQ29udGVudCA9IGF3YWl0IHByaXNtYS5jbGlwYm9hcmRDb250ZW50LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRlbnQ6IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmRhdGEuY29udGVudCxcbiAgICAgICAgdGl0bGU6IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICAgIHByaXZhdGU6IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmRhdGEucHJpdmF0ZSxcbiAgICAgICAgdXNlckVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiByZWRpcmVjdChgL2NsaXBib2FyZC8ke2NsaXBib2FyZENvbnRlbnQuaWR9YClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIEVycm9yeSBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICB0aHJvdyByZWRpcmVjdCgnLycpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGlwYm9hcmRDb250ZW50TmV3KCkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKC0xKVxuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPENsaXBib2FyZEFjdGlvblR5cGU+KClcblxuICBjb25zdCBjbGlwYm9hcmRGb3JtUHJvcHM6IENsaXBib2FyZEZvcm1Qcm9wcyA9IHtcbiAgICAuLi5hY3Rpb25EYXRhLFxuICAgIHN1Ym1pdHRpbmdUZXh0OiAnQ3JlYXRpbmcnLFxuICAgIG9rQnV0dG9uVGV4dDogJ0NyZWF0ZScsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgaXNPcGVuPXt0cnVlfSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgIDxNb2RhbEhlYWRlcj5DcmVhdGUgbmV3IENsaXBib2FyZCBjb250ZW50PC9Nb2RhbEhlYWRlcj5cbiAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgPENsaXBib2FyZEZvcm0gey4uLmNsaXBib2FyZEZvcm1Qcm9wc30gLz5cbiAgICAgIDwvTW9kYWxCb2R5PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBDYXRjaEJvdW5kYXJ5OiBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdENhdGNoQm91bmRhcnlcblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0RXJyb3JCb3VuZGFyeVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VOYXZpZ2F0ZSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgRm9ybSxcbiAgTWV0YUZ1bmN0aW9uLFxuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgTW9kYWwsXG4gIE1vZGFsT3ZlcmxheSxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgTW9kYWxCb2R5LFxuICBNb2RhbEZvb3RlcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG4gIEZvcm1FcnJvck1lc3NhZ2UsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5pbXBvcnQgeyBmb3JtYXRGaWVsZEVycm9yc05ldyB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcbmltcG9ydCB7IERlZmF1bHRDYXRjaEJvdW5kYXJ5LCBEZWZhdWx0RXJyb3JCb3VuZGFyeSB9IGZyb20gJ34vY29tcG9uZW50cydcblxuY29uc3QgTGFiZWxTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGxhYmVsOiB6LnN0cmluZygpLm1pbig1KS5tYXgoMjApLFxufSlcblxudHlwZSBBY3Rpb25EYXRhVHlwZSA9IHtcbiAgdmFsdWVzOiB6LmluZmVyPHR5cGVvZiBMYWJlbFNjaGVtYT4gfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBlcnJvcnM6IFJlY29yZDxcbiAgICBrZXlvZiB6LmluZmVyPHR5cGVvZiBMYWJlbFNjaGVtYT4sXG4gICAge1xuICAgICAgbWVzc2FnZTogc3RyaW5nXG4gICAgICBpc0ludmFsaWQ6IGJvb2xlYW5cbiAgICB9XG4gID5cbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0xhYmVsIHwgTmV3JyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgYWN0aW9uRGF0YTogQWN0aW9uRGF0YVR5cGUgPSB7XG4gICAgdmFsdWVzOiB7fSxcbiAgICBlcnJvcnM6IHtcbiAgICAgIGxhYmVsOiB7IGlzSW52YWxpZDogdHJ1ZSwgbWVzc2FnZTogJycgfSxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgbGFiZWxEYXRhOiBQYXJ0aWFsPHouaW5mZXI8dHlwZW9mIExhYmVsU2NoZW1hPj4gPSB7XG4gICAgbGFiZWw6IFN0cmluZyhmb3JtRGF0YS5nZXQoJ2xhYmVsJykpLFxuICB9XG5cbiAgY29uc3QgbGFiZWxWYWxpZGF0aW9uUmVzdWx0ID0gTGFiZWxTY2hlbWEuc2FmZVBhcnNlKGxhYmVsRGF0YSlcblxuICBpZiAoIWxhYmVsVmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgYWN0aW9uRGF0YS52YWx1ZXMgPSB7IC4uLmxhYmVsRGF0YSB9XG4gICAgYWN0aW9uRGF0YS5lcnJvcnMgPSB7XG4gICAgICAuLi5mb3JtYXRGaWVsZEVycm9yc05ldyhsYWJlbERhdGEsIGxhYmVsVmFsaWRhdGlvblJlc3VsdC5lcnJvci5mb3JtRXJyb3JzLmZpZWxkRXJyb3JzKSxcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uRGF0YVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEubGFiZWwuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHsgbGFiZWw6IGxhYmVsVmFsaWRhdGlvblJlc3VsdC5kYXRhLmxhYmVsLCB1c2VyRW1haWw6IHVzZXIuZW1haWwgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlZGlyZWN0KGAvYClcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb05ldygpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbigtMSlcblxuICBjb25zdCBpbml0aWFsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KClcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3Qgc3VibWl0dGluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGFUeXBlPigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIGluaXRpYWxGb2N1c1JlZj17aW5pdGlhbFJlZn0gaXNPcGVuPXt0cnVlfSBvbkNsb3NlPXtvbkNsb3NlfSBpc0NlbnRlcmVkIHNpemU9XCJ4bFwiPlxuICAgICAgICA8TW9kYWxPdmVybGF5IGJnPVwibm9uZVwiIGJhY2tkcm9wRmlsdGVyPVwiYXV0b1wiIGJhY2tkcm9wSW52ZXJ0PVwiODAlXCIgYmFja2Ryb3BCbHVyPVwiMnB4XCIgLz5cbiAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8TW9kYWxIZWFkZXI+Q3JlYXRlIG5ldyBMYWJlbDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzLmxhYmVsLmlzSW52YWxpZH0+XG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5MYWJlbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgcmVmPXtpbml0aWFsUmVmfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnMubGFiZWwuaXNJbnZhbGlkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2FjdGlvbkRhdGE/LmVycm9ycy5sYWJlbC5tZXNzYWdlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuXG4gICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICBsb2FkaW5nVGV4dD17J0NyZWF0aW5nJ31cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0Q2F0Y2hCb3VuZGFyeVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRFcnJvckJvdW5kYXJ5XG4iLCAiLy8gVE9ETyAtIEhhbmRsZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcblxuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ34vdHlwZXMvY29tbW9uJ1xuaW1wb3J0IHsgUmVkaXJlY3RUeXBlIH0gZnJvbSAnfi90eXBlcy9yZWRpcmVjdCdcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBCdXR0b24sXG4gIElucHV0LFxuICBGb3JtRXJyb3JNZXNzYWdlLFxuICBWU3RhY2ssXG4gIEhTdGFjayxcbiAgdXNlVG9hc3QsXG4gIExpbmssXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCxcbiAgRm9ybSxcbiAganNvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InXG5cbmltcG9ydCB7XG4gIERlZmF1bHRDYXRjaEJvdW5kYXJ5LFxuICBEZWZhdWx0RXJyb3JCb3VuZGFyeSxcbiAgUGFnZVRpdGxlLFxuICBRUkNvZGUsXG4gIFdyYXBwZXIsXG59IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuaW1wb3J0IHsgY29weVRvQ2xpcGJvYXJkIH0gZnJvbSAnfi91dGlscy9icm93c2VyJ1xuaW1wb3J0IHsgY29tcG9zZVVybCB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgeyBnZXRGaW5hbEZvcm1EYXRhLCBnZXRGb3JtRGF0YSB9IGZyb20gJ34vdXRpbHMvZm9ybSdcbmltcG9ydCB7IEV4dGVybmFsTGlua0ljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuaW1wb3J0IHsgQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJ1xuXG50eXBlIFJlZGlyZWN0QWN0aW9uVHlwZSA9IEFjdGlvblR5cGU8UmVkaXJlY3RUeXBlPlxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUXVpY2sgUmVkaXJlY3QnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCB1cmxEYXRhID0gZ2V0Rm9ybURhdGE8UmVkaXJlY3RUeXBlPihmb3JtRGF0YSwgW3sga2V5OiAndXJsJywgZGVmYXVsdFZhbHVlOiAnJyB9XSlcblxuICBjb25zdCB1cmxWYWxpZGF0aW9uUmVzdWx0ID0gVmFsaWRhdG9yLmlzVVJMKHVybERhdGEudXJsKVxuXG4gIGlmICghdXJsVmFsaWRhdGlvblJlc3VsdCkge1xuICAgIHJldHVybiBnZXRGaW5hbEZvcm1EYXRhKHVybERhdGEsIHsgdXJsOiBbJ1BsZWFzZSBlbnRlciB2YWxpZCBVUkwnXSB9KVxuICB9XG5cbiAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBxdWlja1JlZGlyZWN0OiB1cmxEYXRhLnVybCxcbiAgICB9LFxuICB9KVxuXG4gIHJldHVybiByZWRpcmVjdCgnL3JlZGlyZWN0Jylcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBxdWlja1JlZGlyZWN0ID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgZW1haWw6IHVzZXIuZW1haWwgfSxcbiAgICBzZWxlY3Q6IHsgcXVpY2tSZWRpcmVjdDogdHJ1ZSB9LFxuICB9KVxuXG4gIGlmICghcXVpY2tSZWRpcmVjdCkge1xuICAgIHRocm93IGpzb24oeyBtZXNzYWdlOiBgUXVpY2sgcmVkaXJlY3QgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3RzLmAgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICB9XG5cbiAgcmV0dXJuIHF1aWNrUmVkaXJlY3Q/LnF1aWNrUmVkaXJlY3QgPz8gJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpY2tDb3B5KCkge1xuICBjb25zdCBbcXVpY2tVcmwsIHNldFF1aWNrVXJsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWApXG4gICAgc2V0UXVpY2tVcmwoXG4gICAgICBjb21wb3NlVXJsKHVybCwge1xuICAgICAgICBpbmNsdWRlUGF0aG5hbWU6IGZhbHNlLFxuICAgICAgfSkgKyAnL3InLFxuICAgIClcbiAgfSwgW10pXG5cbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIGNvbnN0IHNhdmluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPFJlZGlyZWN0QWN0aW9uVHlwZT4oKVxuXG4gIGNvbnN0IHVybCA9IHVzZUxvYWRlckRhdGE8c3RyaW5nPigpXG5cbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpXG5cbiAgY29uc3QgY29weSA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIGNvcHlUb0NsaXBib2FyZCh1cmwsICgpID0+IHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdVUkwgc3VjY2Vzc2Z1bGx5IGNvcGllZCB0byBjbGlwYm9hcmQnLFxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxQYWdlVGl0bGU+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5RdWljayBSZWRpcmVjdDwvaDI+XG4gICAgICA8L1BhZ2VUaXRsZT5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gdz1cImZ1bGxcIiBzcGFjaW5nPXs4fSBtdD1cIjhcIj5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXthY3Rpb25EYXRhPy51cmw/LmludmFsaWR9PlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlVSTDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVybFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dXJsfVxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17YWN0aW9uRGF0YT8udXJsPy5pbnZhbGlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57YWN0aW9uRGF0YT8udXJsPy5lcnJvck1lc3NhZ2V9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgPEhTdGFjayBtdD1cIjJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaXNMb2FkaW5nPXtzYXZpbmd9IGxvYWRpbmdUZXh0PVwiU2F2aW5nXCI+XG4gICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb3B5KHVybCl9PkNvcHkgVVJMPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VybH0gaXNFeHRlcm5hbD5cbiAgICAgICAgICAgICAgICBWaXNpdCA8RXh0ZXJuYWxMaW5rSWNvbiBteD1cIjJweFwiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgIDxWU3RhY2sgdz1cImZ1bGxcIiBhbGlnbkl0ZW1zPXsnZmxleC1zdGFydCd9PlxuICAgICAgICAgICAgPGgyPlNoYXJlYWJsZSBVUkw8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBib3JkZXIgcm91bmRlZC1tZFwiPntxdWlja1VybH08L3A+XG4gICAgICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvcHkocXVpY2tVcmwpfT5Db3B5IFVSTDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtxdWlja1VybH0gaXNFeHRlcm5hbD5cbiAgICAgICAgICAgICAgICBWaXNpdCA8RXh0ZXJuYWxMaW5rSWNvbiBteD1cIjJweFwiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDwvVlN0YWNrPlxuXG4gICAgICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPXsnZmxleC1zdGFydCd9IHc9XCJmdWxsXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlVSTCBRUiBjb2RlPC9oMj5cbiAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e3VybH0gLz5cbiAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0Q2F0Y2hCb3VuZGFyeVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRFcnJvckJvdW5kYXJ5XG4iLCAiLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIEVycm9yeSBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcblxuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ34vdHlwZXMvY29tbW9uJ1xuaW1wb3J0IHsgVG9kb1NjaGVtYSwgVG9kb1R5cGUgfSBmcm9tICd+L3R5cGVzL3RvZG8nXG5pbXBvcnQgeyBQcmlvcml0eSwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgVG9kb0Zvcm1Qcm9wcyB9IGZyb20gJ34vY29tcG9uZW50cy9mb3Jtcy90b2RvJ1xuXG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VOYXZpZ2F0ZSxcbiAgTWV0YUZ1bmN0aW9uLFxuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxuICBqc29uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE1vZGFsSGVhZGVyLCBNb2RhbENsb3NlQnV0dG9uLCBNb2RhbEJvZHkgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCB7IGNvbXBvc2VQcmlvcml0eSB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IFRvZG9Gb3JtLCBEaWFsb2csIERlZmF1bHRDYXRjaEJvdW5kYXJ5LCBEZWZhdWx0RXJyb3JCb3VuZGFyeSB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGdldEZpbmFsRm9ybURhdGEsIGdldEZvcm1EYXRhIH0gZnJvbSAnfi91dGlscy9mb3JtJ1xuaW1wb3J0IHsgQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJ1xuXG50eXBlIFRvZG9BY3Rpb25UeXBlID0gQWN0aW9uVHlwZTxUb2RvVHlwZT5cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1RvZG8gfCBOZXcnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCB0b2RvRGF0YSA9IGdldEZvcm1EYXRhPFRvZG9UeXBlPihmb3JtRGF0YSwgW1xuICAgIHsga2V5OiAndGl0bGUnIH0sXG4gICAgeyBrZXk6ICdkZXNjcmlwdGlvbicgfSxcbiAgICB7IGtleTogJ2NvbXBsZXRlZCcsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSxcbiAgICB7IGtleTogJ2R1ZURhdGUnLCBjb21wb3NlOiAodmFsdWUpID0+ICh2YWx1ZSA/IG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpIDogdW5kZWZpbmVkKSB9LFxuICAgIHsga2V5OiAncHJpb3JpdHknLCBjb21wb3NlOiAodmFsdWUpID0+IGNvbXBvc2VQcmlvcml0eShTdHJpbmcodmFsdWUpIGFzIFByaW9yaXR5KSB9LFxuICBdKVxuXG4gIGNvbnN0IHRvZG9WYWxpZGF0aW9uUmVzdWx0ID0gVG9kb1NjaGVtYS5zYWZlUGFyc2UodG9kb0RhdGEpXG5cbiAgaWYgKCF0b2RvVmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIGdldEZpbmFsRm9ybURhdGE8VG9kb1R5cGU+KHRvZG9EYXRhLCB0b2RvVmFsaWRhdGlvblJlc3VsdC5lcnJvci5mb3JtRXJyb3JzLmZpZWxkRXJyb3JzKVxuICB9XG5cbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBkZXNjcmlwdGlvbjogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS5kZXNjcmlwdGlvbixcbiAgICB0aXRsZTogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS50aXRsZSxcbiAgICBjb21wbGV0ZWQ6IHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEuY29tcGxldGVkLFxuICAgIC8vIFRPRE8gLSBGaW5kIGEgd2F5IHRvIGZpeCB0aGlzIDooXG4gICAgZHVlRGF0ZTogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS5kdWVEYXRlXG4gICAgICA/IG1vbWVudCh0b2RvVmFsaWRhdGlvblJlc3VsdC5kYXRhLmR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgICA6IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgIHByaW9yaXR5OiB0b2RvVmFsaWRhdGlvblJlc3VsdC5kYXRhLnByaW9yaXR5LFxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEudG9kby5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB1c2VyRW1haWw6IHVzZXIuZW1haWwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHJlZGlyZWN0KGAvdG9kb2ApXG4gIH0gY2F0Y2gge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBFcnJvcnkgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cganNvbihcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nLicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVW5hYmxlIHRvIGNyZWF0ZSBuZXcgVG9kbyBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgICB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9LFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9OZXcoKSB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0ZSgpXG5cbiAgY29uc3Qgb25DbG9zZSA9ICgpID0+IG5hdmlnYXRpb24oLTEpXG5cbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGE8VG9kb0FjdGlvblR5cGU+KClcblxuICBjb25zdCB0b2RvRm9ybVByb3BzOiBUb2RvRm9ybVByb3BzID0ge1xuICAgIC4uLmFjdGlvbkRhdGEsXG4gICAgc3VibWl0dGluZ1RleHQ6ICdDcmVhdGluZycsXG4gICAgb2tCdXR0b25UZXh0OiAnQ3JlYXRlJyxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBpc09wZW49e3RydWV9IG9uQ2xvc2U9e29uQ2xvc2V9PlxuICAgICAgPE1vZGFsSGVhZGVyPkNyZWF0ZSBuZXcgVG9kbzwvTW9kYWxIZWFkZXI+XG4gICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgIDxUb2RvRm9ybSB7Li4udG9kb0Zvcm1Qcm9wc30gLz5cbiAgICAgIDwvTW9kYWxCb2R5PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBDYXRjaEJvdW5kYXJ5OiBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdENhdGNoQm91bmRhcnlcblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0RXJyb3JCb3VuZGFyeVxuIiwgImltcG9ydCB7IFN0YWNrLCB1c2VDb2xvck1vZGVWYWx1ZSwgVlN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEVycm9yQm91bmRhcnlDb21wb25lbnQsIExpbmssIE1ldGFGdW5jdGlvbiwgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW1wb3J0IHsgRGVmYXVsdENhdGNoQm91bmRhcnksIERlZmF1bHRFcnJvckJvdW5kYXJ5LCBQYWdlVGl0bGUsIFdyYXBwZXIgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXMnXG5cbmNvbnN0IGxpbmtzOiBBcnJheTx7IHRpdGxlOiBzdHJpbmc7IHRvOiBzdHJpbmcgfT4gPSBbXG4gIHtcbiAgICB0aXRsZTogJ0dlbmVyYWwnLFxuICAgIHRvOiAnL3Byb2ZpbGUvZ2VuZXJhbCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0V4cG9ydCcsXG4gICAgdG86ICcvcHJvZmlsZS9leHBvcnQnLFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUHJvZmlsZScsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgY29uc3QgdGV4dENvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3RleHQtYmxhY2snLCAndGV4dC13aGl0ZScpXG4gIGNvbnN0IGxpZ2h0VGV4dENvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3RleHQtZ3JheS00MDAnLCAndGV4dC1ncmF5LTYwMCcpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFBhZ2VUaXRsZT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPlBlcnNvbmFsIEFjY291bnQgU2V0dGluZ3M8L2gyPlxuICAgICAgPC9QYWdlVGl0bGU+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17Wydjb2x1bW4nLCAnY29sdW1uJywgJ3JvdycsICdyb3cnXX0gYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfSBweT17JzEwJ30+XG4gICAgICAgICAgPFZTdGFjayBzcGFjaW5nPVwiNFwiIHc9eycyNSUnfSBhbGlnbkl0ZW1zPXsnZmxleC1zdGFydCd9IG1iPXtbOCwgOCwgMCwgMF19PlxuICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPXtsaW5rLnRvfVxuICAgICAgICAgICAgICAgIGtleT17bGluay50b31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3godGV4dENvbG9yLCB7XG4gICAgICAgICAgICAgICAgICBbbGlnaHRUZXh0Q29sb3JdOiAhbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMobGluay50byksXG4gICAgICAgICAgICAgICAgICAnZm9udC1ib2xkJzogbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMobGluay50byksXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0zLzRcIj5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgQ2F0Y2hCb3VuZGFyeTogQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRDYXRjaEJvdW5kYXJ5XG5cbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdEVycm9yQm91bmRhcnlcbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0TGVmdEFkZG9uLCBJbnB1dCwgVlN0YWNrLCBBdmF0YXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcbmltcG9ydCB7IERlZmF1bHRDYXRjaEJvdW5kYXJ5LCBEZWZhdWx0RXJyb3JCb3VuZGFyeSB9IGZyb20gJ34vY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1Byb2ZpbGUgfCBHZW5lcmFsJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwgeyBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYWwoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VMb2FkZXJEYXRhPFVzZXI+KClcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFZTdGFjayBzcGFjaW5nPXs4fT5cbiAgICAgICAge3VzZXIucHJvZmlsZVVybCAmJiAoXG4gICAgICAgICAgPEF2YXRhciBuYW1lPXt1c2VyLm5hbWUgPz8gdXNlci5lbWFpbFswXX0gc3JjPXt1c2VyLnByb2ZpbGVVcmx9IHNpemU9XCIyeGxcIiAvPlxuICAgICAgICApfVxuICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICB7LyogIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1jaGlsZHJlbi1wcm9wICovfVxuICAgICAgICAgIDxJbnB1dExlZnRBZGRvbiBjaGlsZHJlbj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIiBkZWZhdWx0VmFsdWU9e3VzZXIuZW1haWx9IC8+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBDYXRjaEJvdW5kYXJ5OiBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdENhdGNoQm91bmRhcnlcblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0RXJyb3JCb3VuZGFyeVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IEV4dGVybmFsTGlua0ljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuaW1wb3J0IHsgTGluaywgVlN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCwganNvbiwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcbmltcG9ydCB7IERlZmF1bHRDYXRjaEJvdW5kYXJ5LCBEZWZhdWx0RXJyb3JCb3VuZGFyeSB9IGZyb20gJ34vY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1Byb2ZpbGUgfCBFeHBvcnQnLFxuICB9XG59XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgY2xpcGJvYXJkczogbnVtYmVyXG4gIHZvdGVzOiBudW1iZXJcbiAgdG9kb3M6IG51bWJlclxuICB1c2VyOiBVc2VyXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIEl0ZW0ge1xuICBDbGlwYm9hcmRzID0gJ2NsaXBib2FyZHMnLFxuICBWb3RlcyA9ICd2b3RlcycsXG4gIFRvZG9zID0gJ3RvZG9zJyxcbiAgVXNlciA9ICd0b2RvcycsXG4gIFF1aWNrUmVkaXJlY3QgPSAncXVpY2tSZWRpcmVjdCcsXG4gIFF1aWNrQ29udGVudCA9ICdxdWlja0NvbnRlbnQnLFxuICBBbGwgPSAnYWxsJyxcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7IGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicgfSkpIGFzIFVzZXJcblxuICBjb25zdCBjbGlwYm9hcmRzID0gYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQuY291bnQoe1xuICAgIHdoZXJlOiB7IHVzZXJFbWFpbDogdXNlci5lbWFpbCB9LFxuICB9KVxuXG4gIGNvbnN0IHZvdGVzID0gYXdhaXQgcHJpc21hLnZvdGUuY291bnQoe1xuICAgIHdoZXJlOiB7IHVzZXJFbWFpbDogdXNlci5lbWFpbCB9LFxuICB9KVxuXG4gIGNvbnN0IHRvZG9zID0gYXdhaXQgcHJpc21hLnRvZG8uY291bnQoe1xuICAgIHdoZXJlOiB7IHVzZXJFbWFpbDogdXNlci5lbWFpbCB9LFxuICB9KVxuXG4gIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiB1c2VyLmlkIH0gfSlcblxuICBjb25zdCBkYXRhID0ge1xuICAgIHVzZXI6IHVzZXJEYXRhLFxuICAgIGNsaXBib2FyZHMsXG4gICAgdG9kb3MsXG4gICAgdm90ZXMsXG4gIH1cblxuICByZXR1cm4ganNvbihkYXRhKVxufVxuXG50eXBlIEV4cG9ydFR5cGUgPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nIHwgbnVsbFxuICBwYXRobmFtZTogSXRlbVxufVxuXG5jb25zdCBFeHBvcnRJdGVtID0gKHsgdGl0bGUsIGNvbnRlbnQsIHBhdGhuYW1lIH06IEV4cG9ydFR5cGUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHAtNCBib3JkZXIgcm91bmRlZC1tZCBnYXAteS0yXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhsIGZvbnQtYm9sZFwiPnt0aXRsZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicC00IGJyZWFrLXdvcmRzIGJvcmRlciByb3VuZGVkLW1kXCI+e2NvbnRlbnR9PC9wPlxuICAgICAgPExpbmsgaHJlZj17YC9leHBvcnQ/bmFtZT0ke3BhdGhuYW1lfWB9IGlzRXh0ZXJuYWwgZG93bmxvYWQ9e3BhdGhuYW1lfT5cbiAgICAgICAgRXhwb3J0IDxFeHRlcm5hbExpbmtJY29uIG14PVwiMnB4XCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmFsKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG5cbiAgY29uc3QgZXhwb3J0SXRlbXM6IEFycmF5PEV4cG9ydFR5cGU+ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnQ29weScsXG4gICAgICBjb250ZW50OiBkYXRhLnVzZXIucXVpY2tDb250ZW50LFxuICAgICAgcGF0aG5hbWU6IEl0ZW0uUXVpY2tDb250ZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdSZWRpcmVjdCcsXG4gICAgICBjb250ZW50OiBkYXRhLnVzZXIucXVpY2tSZWRpcmVjdCxcbiAgICAgIHBhdGhuYW1lOiBJdGVtLlF1aWNrUmVkaXJlY3QsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0NsaXBib2FyZCcsXG4gICAgICBjb250ZW50OiBgJHtkYXRhLmNsaXBib2FyZHN9IGNsaXBib2FyZCBpdGVtc2AsXG4gICAgICBwYXRobmFtZTogSXRlbS5DbGlwYm9hcmRzLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdUb2RvcycsXG4gICAgICBjb250ZW50OiBgJHtkYXRhLnRvZG9zfSB0b2RvIGl0ZW1zYCxcbiAgICAgIHBhdGhuYW1lOiBJdGVtLlRvZG9zLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdWb3RlcycsXG4gICAgICBjb250ZW50OiBgJHtkYXRhLnZvdGVzfSB2b3RlcyBpdGVtc2AsXG4gICAgICBwYXRobmFtZTogSXRlbS5Wb3RlcyxcbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPXsnZmxleC1zdGFydCd9IHc9XCJmdWxsXCI+XG4gICAgICAgIDxWU3RhY2sgdz1cImZ1bGxcIiBzcGFjaW5nPXs2fT5cbiAgICAgICAgICB7ZXhwb3J0SXRlbXMubWFwKChleHBvcnRJdGVtKSA9PiAoXG4gICAgICAgICAgICA8RXhwb3J0SXRlbSB7Li4uZXhwb3J0SXRlbX0ga2V5PXtleHBvcnRJdGVtLnRpdGxlfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXhwb3J0P25hbWU9JHtJdGVtLkFsbH1gfSBpc0V4dGVybmFsIGRvd25sb2FkPXtJdGVtLkFsbH0+XG4gICAgICAgICAgICBFeHBvcnQgYWxsIDxFeHRlcm5hbExpbmtJY29uIG14PVwiMnB4XCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0Q2F0Y2hCb3VuZGFyeVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRFcnJvckJvdW5kYXJ5XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL3Byb2ZpbGUvZXhwb3J0J1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnRXhwb3J0JyxcbiAgfVxufVxuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKG5hbWU6IEl0ZW0gfCAnJywgdXNlcjogVXNlcikgPT4ge1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBbSXRlbS5DbGlwYm9hcmRzXTogYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQuZmluZE1hbnkoeyB3aGVyZTogeyB1c2VyRW1haWw6IHVzZXIuZW1haWwgfSB9KSxcbiAgICBbSXRlbS5RdWlja0NvbnRlbnRdOiB1c2VyLnF1aWNrQ29udGVudCxcbiAgICBbSXRlbS5RdWlja1JlZGlyZWN0XTogdXNlci5xdWlja1JlZGlyZWN0LFxuICAgIFtJdGVtLlRvZG9zXTogYXdhaXQgcHJpc21hLnRvZG8uZmluZE1hbnkoeyB3aGVyZTogeyB1c2VyRW1haWw6IHVzZXIuZW1haWwgfSB9KSxcbiAgICBbSXRlbS5Wb3Rlc106IGF3YWl0IHByaXNtYS52b3RlLmZpbmRNYW55KHsgd2hlcmU6IHsgdXNlckVtYWlsOiB1c2VyLmVtYWlsIH0gfSksXG4gIH1cblxuICBpZiAobmFtZSA9PT0gSXRlbS5BbGwpIHtcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBpZiAoIWNvbmZpZ1tuYW1lXSkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ1tuYW1lXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHsgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyB9KSkgYXMgVXNlclxuICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogdXNlci5pZCB9IH0pXG5cbiAgaWYgKCF1c2VyRGF0YSkge1xuICAgIHJldHVybiByZWRpcmVjdCgnL2xvZ2luJylcbiAgfVxuXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG5cbiAgY29uc3QgbmFtZSA9IChTdHJpbmcodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ25hbWUnKSkgYXMgSXRlbSkgPz8gJydcblxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YShuYW1lLCB1c2VyRGF0YSlcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgW25hbWVdOiBkYXRhIH0pLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBkZXN0cm95U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHsgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyB9KVxuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKVxuXG4gIHRocm93IHJlZGlyZWN0KCcvbG9naW4nLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7IGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicgfSlcblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICB0aHJvdyByZWRpcmVjdCgnL2xvZ2luJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nb3V0KCkge1xuICByZXR1cm4gbnVsbFxufVxuIiwgIi8vIFRPRE8gLSBNaWdodCB3YW50IHRvIHJlZmFjdG9yIHRoaXMgZmlsZVxuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLnByaXNtYS9jbGllbnQnXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VUb2FzdCwgVlN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEVycm9yQm91bmRhcnlDb21wb25lbnQsIGpzb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgRGVmYXVsdENhdGNoQm91bmRhcnksIERlZmF1bHRFcnJvckJvdW5kYXJ5LCBQYWdlVGl0bGUsIFdyYXBwZXIgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IGNvcHlUb0NsaXBib2FyZCB9IGZyb20gJ34vdXRpbHMvYnJvd3NlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxudHlwZSBMb2FkZXJUeXBlID0geyBjb250ZW50OiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUXVpY2sgQ29weScsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBjbGlwYm9hcmRDb250ZW50SWQgPSBwYXJhbXMuaWRcblxuICBpZiAoIWNsaXBib2FyZENvbnRlbnRJZCkge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICB0aHJvdyBqc29uKFxuICAgICAgeyBtZXNzYWdlOiBgQ2xpcGJvYXJkIENvbnRlbnQgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0YCB9LFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDQwNCxcbiAgICAgIH0sXG4gICAgKVxuICB9XG5cbiAgaWYgKGNsaXBib2FyZENvbnRlbnRJZCA9PT0gJ2xhdGVzdCcpIHtcbiAgICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gICAgfSkpIGFzIFVzZXJcblxuICAgIGNvbnN0IGNsaXBib2FyZENvbnRlbnQgPSBhd2FpdCBwcmlzbWEuY2xpcGJvYXJkQ29udGVudC5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgdXNlckVtYWlsOiB1c2VyLmVtYWlsIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgaWYgKCFjbGlwYm9hcmRDb250ZW50KSB7XG4gICAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgICB0aHJvdyBqc29uKFxuICAgICAgICB7IG1lc3NhZ2U6IGBDbGlwYm9hcmQgQ29udGVudCB5b3UncmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3RgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0dXM6IDQwNCxcbiAgICAgICAgfSxcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb250ZW50OiBjbGlwYm9hcmRDb250ZW50LmNvbnRlbnQsIHRpdGxlOiBjbGlwYm9hcmRDb250ZW50LnRpdGxlIH1cbiAgfVxuXG4gIGlmIChjbGlwYm9hcmRDb250ZW50SWQgPT09ICdxJykge1xuICAgIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgICB9KSkgYXMgVXNlclxuXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiB1c2VyLmVtYWlsIH0sXG4gICAgfSlcblxuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICAgIHRocm93IGpzb24oXG4gICAgICAgIHsgbWVzc2FnZTogYENsaXBib2FyZCBDb250ZW50IHlvdSdyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdGAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICB9LFxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRlbnQ6IGN1cnJlbnRVc2VyLnF1aWNrQ29udGVudCwgdGl0bGU6ICdRdWljayBDb3B5JyB9XG4gIH1cblxuICBjb25zdCBjbGlwYm9hcmRDb250ZW50ID0gYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IE51bWJlcihjbGlwYm9hcmRDb250ZW50SWQpIH0sXG4gIH0pXG5cbiAgaWYgKCFjbGlwYm9hcmRDb250ZW50KSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oXG4gICAgICB7IG1lc3NhZ2U6IGBDbGlwYm9hcmQgQ29udGVudCB5b3UncmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3RgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgfSxcbiAgICApXG4gIH1cblxuICBpZiAoIWNsaXBib2FyZENvbnRlbnQ/LnByaXZhdGUpIHtcbiAgICByZXR1cm4geyBjb250ZW50OiBjbGlwYm9hcmRDb250ZW50LmNvbnRlbnQsIHRpdGxlOiBjbGlwYm9hcmRDb250ZW50LnRpdGxlIH1cbiAgfVxuXG4gIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxuXG4gIHJldHVybiB7IGNvbnRlbnQ6IGNsaXBib2FyZENvbnRlbnQuY29udGVudCwgdGl0bGU6IGNsaXBib2FyZENvbnRlbnQudGl0bGUgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3B5SWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSB1c2VMb2FkZXJEYXRhPExvYWRlclR5cGU+KClcblxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KClcblxuICBjb25zdCBjb3B5ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvcHlUb0NsaXBib2FyZChjb250ZW50LmNvbnRlbnQsICgpID0+IHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsbHkgY29waWVkIHRvIGNsaXBib2FyZCcsXG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgfSlcbiAgICB9KVxuICB9LCBbY29udGVudC5jb250ZW50LCB0b2FzdF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb3B5KClcbiAgfSwgW2NvcHldKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQYWdlVGl0bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+e2NvbnRlbnQudGl0bGV9PC9oMj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvcHkoKX0gbWw9eydhdXRvJ30+XG4gICAgICAgICAgICBDb3B5XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QYWdlVGl0bGU+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPXsnZmxleC1zdGFydCd9IHB5PXsnNid9IHNwYWNpbmc9ezZ9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTRcIj5UaGUgY29udGVudCBiZWxvdyBpcyBhdXRvbWF0aWNhbGx5IGNvcGllZC48L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBib3JkZXIgcm91bmRlZC1tZFwiPntjb250ZW50LmNvbnRlbnR9PC9wPlxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgQ2F0Y2hCb3VuZGFyeTogQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRDYXRjaEJvdW5kYXJ5XG5cbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdEVycm9yQm91bmRhcnlcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxuICByZXR1cm4gcmVkaXJlY3QoJy9ob21lJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29weSgpIHtcbiAgcmV0dXJuIG51bGxcbn1cbiIsICJpbXBvcnQgeyBCdXR0b24sIEZsZXgsIEhlYWRpbmcsIFN0YWNrLCBJbWFnZSwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VGZXRjaGVyIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBCc0dvb2dsZSwgQnNHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9icydcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50IH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXMnXG5pbXBvcnQgeyBEZWZhdWx0Q2F0Y2hCb3VuZGFyeSwgRGVmYXVsdEVycm9yQm91bmRhcnkgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdDbGlwaSB8IFNpZ24gdXAgKG9yIGluKScsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwgeyBzdWNjZXNzUmVkaXJlY3Q6ICcvJyB9KVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVDYXJkKCkge1xuICBjb25zdCBnaXRodWJBdXRoRmV0Y2hlciA9IHVzZUZldGNoZXIoKVxuICBjb25zdCBnb29nbGVBdXRoRmV0Y2hlciA9IHVzZUZldGNoZXIoKVxuXG4gIGNvbnN0IGlzR2l0aHViQXV0aGVudGljYXRpbmcgPSBnaXRodWJBdXRoRmV0Y2hlci5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnXG4gIGNvbnN0IGlzR29vZ2xlQXV0aGVudGljYXRpbmcgPSBnb29nbGVBdXRoRmV0Y2hlci5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnXG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgbWluSD17JzEwMHZoJ30gZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBtZDogJ3JvdycgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtMSBwLThcIj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9IHc9eydmdWxsJ30gbWF4Vz17J21kJ30+XG4gICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9eycyeGwnfSBtYj1cIjRcIj5cbiAgICAgICAgICAgIFNpZ24gaW4gdG8geW91ciBhY2NvdW50XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIDxnaXRodWJBdXRoRmV0Y2hlci5Gb3JtIGFjdGlvbj1cIi9hdXRoL2dpdGh1YlwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNHaXRodWJBdXRoZW50aWNhdGluZ31cbiAgICAgICAgICAgICAgICBsb2FkaW5nVGV4dD1cIkF1dGhlbnRpY2F0aW5nXCJcbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT17J3RlbGVncmFtJ31cbiAgICAgICAgICAgICAgICB2YXJpYW50PXsnc29saWQnfVxuICAgICAgICAgICAgICAgIHc9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICBsZWZ0SWNvbj17PEJzR2l0aHViIC8+fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiBJbiAob3IgdXApIHdpdGggR2l0aHViXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9naXRodWJBdXRoRmV0Y2hlci5Gb3JtPlxuICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJncmF5LjMwMFwiPlxuICAgICAgICAgICAgICBPclxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPGdvb2dsZUF1dGhGZXRjaGVyLkZvcm0gYWN0aW9uPVwiL2F1dGgvZ29vZ2xlXCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0dvb2dsZUF1dGhlbnRpY2F0aW5nfVxuICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PVwiQXV0aGVudGljYXRpbmdcIlxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPXsndGVsZWdyYW0nfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9eydzb2xpZCd9XG4gICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIGxlZnRJY29uPXs8QnNHb29nbGUgLz59XG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIEluIChvciB1cCkgd2l0aCBHb29nbGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2dvb2dsZUF1dGhGZXRjaGVyLkZvcm0+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZsZXggZmxleD17MX0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGFsdD17J0xvZ2luIEltYWdlJ31cbiAgICAgICAgICBvYmplY3RGaXQ9eydjb3Zlcid9XG4gICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NjMxMjMzODIxOS1jZTY4ZDJjNmY0NGQ/aXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MiZxPTgwJ1xuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvRmxleD5cbiAgICA8L1N0YWNrPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBDYXRjaEJvdW5kYXJ5OiBDYXRjaEJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdENhdGNoQm91bmRhcnlcblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0RXJyb3JCb3VuZGFyeVxuIiwgIi8vIFRPRE8gLSBIYW5kbGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IENvcHlUeXBlIH0gZnJvbSAnfi90eXBlcy9jb3B5J1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBCdXR0b24sXG4gIFRleHRhcmVhLFxuICBGb3JtTGFiZWwsXG4gIFRhYixcbiAgVGFiTGlzdCxcbiAgVGFiUGFuZWwsXG4gIFRhYlBhbmVscyxcbiAgVGFicyxcbiAgVlN0YWNrLFxuICB1c2VUb2FzdCxcbiAgSFN0YWNrLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEVycm9yQm91bmRhcnlDb21wb25lbnQsXG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VUcmFuc2l0aW9uLFxufSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHtcbiAgRGVmYXVsdENhdGNoQm91bmRhcnksXG4gIERlZmF1bHRFcnJvckJvdW5kYXJ5LFxuICBQYWdlVGl0bGUsXG4gIFFSQ29kZSxcbiAgV3JhcHBlcixcbn0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5pbXBvcnQgeyBjb3B5VG9DbGlwYm9hcmQgfSBmcm9tICd+L3V0aWxzL2Jyb3dzZXInXG5pbXBvcnQgeyBjb21wb3NlVXJsIH0gZnJvbSAnfi91dGlscydcbmltcG9ydCB7IGdldEZvcm1EYXRhIH0gZnJvbSAnfi91dGlscy9mb3JtJ1xuaW1wb3J0IHsgQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUXVpY2sgQ29weScsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuXG4gIGNvbnN0IGNvbnRlbnREYXRhID0gZ2V0Rm9ybURhdGE8Q29weVR5cGU+KGZvcm1EYXRhLCBbeyBrZXk6ICdjb250ZW50JywgZGVmYXVsdFZhbHVlOiAnJyB9XSlcblxuICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHF1aWNrQ29udGVudDogY29udGVudERhdGEuY29udGVudCxcbiAgICB9LFxuICB9KVxuXG4gIHJldHVybiByZWRpcmVjdCgnL2NvcHknKVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IHF1aWNrQ29udGVudCA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGVtYWlsOiB1c2VyLmVtYWlsIH0sXG4gICAgc2VsZWN0OiB7IHF1aWNrQ29udGVudDogdHJ1ZSB9LFxuICB9KVxuXG4gIHJldHVybiBxdWlja0NvbnRlbnQ/LnF1aWNrQ29udGVudCA/PyAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWlja0NvcHkoKSB7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG4gIGNvbnN0IHNhdmluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5kb3cubG9jYXRpb24uaHJlZn0vYy9xYClcbiAgICBzZXRVcmwoY29tcG9zZVVybCh1cmwpKVxuICB9LCBbXSlcblxuICBjb25zdCBjb250ZW50ID0gdXNlTG9hZGVyRGF0YTxzdHJpbmc+KClcblxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KClcblxuICBjb25zdCBjb3B5ID0gKCkgPT4ge1xuICAgIGNvcHlUb0NsaXBib2FyZCh1cmwsICgpID0+IHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdVUkwgc3VjY2Vzc2Z1bGx5IGNvcGllZCB0byBjbGlwYm9hcmQnLFxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxQYWdlVGl0bGU+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5RdWljayBDb3B5PC9oMj5cbiAgICAgIDwvUGFnZVRpdGxlPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxWU3RhY2sgYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfSB3PVwiZnVsbFwiIG10PVwiOFwiIHNwYWNpbmc9ezh9PlxuICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Db250ZW50PC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgbmFtZT1cImNvbnRlbnRcIiBkZWZhdWx0VmFsdWU9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaXNMb2FkaW5nPXtzYXZpbmd9IGxvYWRpbmdUZXh0PVwiU2F2aW5nXCIgbXQ9XCIyXCI+XG4gICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgIDxWU3RhY2sgdz1cImZ1bGxcIiBhbGlnbkl0ZW1zPXsnZmxleC1zdGFydCd9PlxuICAgICAgICAgICAgPGgyPlNoYXJlYWJsZSBVUkw8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBib3JkZXIgcm91bmRlZC1tZFwiPnt1cmx9PC9wPlxuICAgICAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjb3B5fT5Db3B5IFVSTDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PXsnX2JsYW5rJ30gcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgVmlzaXRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPC9WU3RhY2s+XG5cbiAgICAgICAgICA8VGFicyB3PVwiZnVsbFwiPlxuICAgICAgICAgICAgPFRhYkxpc3Q+XG4gICAgICAgICAgICAgIDxUYWI+Q29udGVudCBRUiBjb2RlPC9UYWI+XG4gICAgICAgICAgICAgIDxUYWI+U2hhcmVhYmxlIGxpbmsgUVIgY29kZTwvVGFiPlxuICAgICAgICAgICAgPC9UYWJMaXN0PlxuXG4gICAgICAgICAgICA8VGFiUGFuZWxzPlxuICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e3VybH0gLz5cbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgIDwvVGFiUGFuZWxzPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSBEZWZhdWx0Q2F0Y2hCb3VuZGFyeVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRFcnJvckJvdW5kYXJ5XG4iLCAiLy8gVE9ETyAtIEhhbmRsZSA0MDQgYW5kIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuXG5pbXBvcnQgeyBMYWJlbCwgTGFiZWxzT25Ub2RvLCBUb2RvLCBVc2VyLCBWb3RlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmltcG9ydCB7IEhTdGFjaywgU3RhY2tEaXZpZGVyLCBUYWcsIHVzZUNvbG9yTW9kZVZhbHVlLCBWU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCwganNvbiwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQge1xuICBDYXJkLFxuICBEZWZhdWx0Q2F0Y2hCb3VuZGFyeSxcbiAgRGVmYXVsdEVycm9yQm91bmRhcnksXG4gIE5vSXRlbXMsXG4gIFRvZG9JdGVtLFxuICBWb3RlSXRlbSxcbiAgV3JhcHBlcixcbn0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0VG9kYXkgfSBmcm9tICd+L3V0aWxzJ1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxudHlwZSBMb2FkZXJUeXBlID0ge1xuICB0b2RvczogQXJyYXk8XG4gICAgVG9kbyAmIHtcbiAgICAgIGxhYmVsczogKExhYmVsc09uVG9kbyAmIHtcbiAgICAgICAgTGFiZWw6IExhYmVsIHwgbnVsbFxuICAgICAgfSlbXVxuICAgIH1cbiAgPlxuICB2b3RlczogQXJyYXk8Vm90ZT5cbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0hvbWUnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgdG9kb3MgPSBhd2FpdCBwcmlzbWEudG9kby5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGR1ZURhdGU6IHtcbiAgICAgICAgZXF1YWxzOiBnZXRUb2RheSgpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgTGFiZWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3JkZXJCeToge1xuICAgICAgY29tcGxldGVkOiAnYXNjJyxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IHZvdGVzID0gYXdhaXQgcHJpc21hLnZvdGUuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1c2VyRW1haWw6IHVzZXIuZW1haWwsXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICB1cGRhdGVkQXQ6ICdkZXNjJyxcbiAgICB9LFxuICAgIHRha2U6IDUsXG4gIH0pXG5cbiAgcmV0dXJuIGpzb24oeyB0b2RvczogdG9kb3MgPz8gW10sIHZvdGVzOiB2b3RlcyA/PyBbXSB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyVHlwZT4oKVxuXG4gIGNvbnN0IGJvcmRlckNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuMjAwJywgJ2dyYXkuODAwJylcblxuICBjb25zdCBpbmNvbXBsZXRlVGFzayA9IGRhdGEudG9kb3MucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICBpZiAoY3VycmVudC5jb21wbGV0ZWQpIHtcbiAgICAgIHJldHVybiBhY2MgKyAxXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSwgMClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LThcIj5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gdz1cImZ1bGxcIiBzcGFjaW5nPXs2fT5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBiLTIgbWItNCBib3JkZXItYlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+VG9kb3M8L2gyPlxuICAgICAgICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgICAgICAgIDxUYWc+e2luY29tcGxldGVUYXNrfTwvVGFnPlxuICAgICAgICAgICAgICAgIDxzcGFuPi88L3NwYW4+XG4gICAgICAgICAgICAgICAgPFRhZyBjb2xvclNjaGVtZT17J2N5YW4nfT57ZGF0YS50b2Rvcy5sZW5ndGh9IGNvbXBsZXRlZDwvVGFnPlxuICAgICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPXsnZmxleC1zdGFydCd9IGRpdmlkZXI9ezxTdGFja0RpdmlkZXIgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yfSAvPn0+XG4gICAgICAgICAgICAgIHtkYXRhLnRvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgICAgICAgIDxUb2RvSXRlbSB7Li4udG9kb30ga2V5PXt0b2RvLmlkfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAge2RhdGEudG9kb3MubGVuZ3RoID09PSAwICYmIDxOb0l0ZW1zIHRpdGxlPVwiTm8gdG9kb3MgZm9yIHRvZGF5ISEhXCIgLz59XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcGItMiBtYi00IGJvcmRlci1iXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5IYWJpdHMgUmFuazwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxWU3RhY2sgYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfSBkaXZpZGVyPXs8U3RhY2tEaXZpZGVyIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcn0gLz59PlxuICAgICAgICAgICAgICB7ZGF0YS52b3Rlcy5tYXAoKHZvdGUpID0+IChcbiAgICAgICAgICAgICAgICA8Vm90ZUl0ZW0gey4uLnZvdGV9IGtleT17dm90ZS5pZH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgIHtkYXRhLnZvdGVzLmxlbmd0aCA9PT0gMCAmJiA8Tm9JdGVtcyB0aXRsZT1cIk5vIGhhYml0IHJhbmsgdm90ZXMgZm91bmQgZm9yIHRvZGF5ISEhXCIgLz59XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgQ2F0Y2hCb3VuZGFyeTogQ2F0Y2hCb3VuZGFyeUNvbXBvbmVudCA9IERlZmF1bHRDYXRjaEJvdW5kYXJ5XG5cbmV4cG9ydCBjb25zdCBFcnJvckJvdW5kYXJ5OiBFcnJvckJvdW5kYXJ5Q29tcG9uZW50ID0gRGVmYXVsdEVycm9yQm91bmRhcnlcbiIsICIvLyBUT0RPIC0gTWlnaHQgd2FudCB0byByZWZhY3RvciBzdHVmZiBpbiB0aGlzIGZpbGVcblxuaW1wb3J0IHsgTGFiZWwsIExhYmVsc09uVG9kbywgVG9kbyBhcyBUb2RvVHlwZSwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQge1xuICBJbnB1dEdyb3VwLFxuICBJbnB1dExlZnRFbGVtZW50LFxuICBJbnB1dCxcbiAgQnV0dG9uLFxuICBWU3RhY2ssXG4gIFN0YWNrRGl2aWRlcixcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIEhTdGFjayxcbiAgU2VsZWN0LFxuICBTdGFjayxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgSW9NZEFkZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJ1xuaW1wb3J0IHsgUmlTZWFyY2hMaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknXG5pbXBvcnQgeyBSaURlbGV0ZUJhY2syTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xuaW1wb3J0IHtcbiAgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCxcbiAgRm9ybSxcbiAganNvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgdXNlQ2F0Y2gsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZU5hdmlnYXRlLFxuICB1c2VTdWJtaXQsXG59IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBXcmFwcGVyLCBOb0l0ZW1zLCBUb2RvSXRlbSwgUGFnZTQwMCwgUGFnZTUwMCwgR29Ub0hvbWUgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IENhdGNoQm91bmRhcnlDb21wb25lbnQgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcydcblxuY29uc3QgZW51bSBGaWx0ZXJCeU9wdGlvbnMge1xuICBTSE9XX0FMTCA9ICdzaG93YWxsJyxcbiAgVE9EQVkgPSAndG9kYXknLFxuICBVUENPTUlORyA9ICd1cGNvbWluZycsXG4gIE9WRVJEVUUgPSAnb3ZlcmR1ZScsXG59XG5cbmNvbnN0IGVudW0gU29ydEJ5T3B0aW9ucyB7XG4gIFBSSU9SSVRZID0gJ3ByaW9yaXR5JyxcbiAgTEFTVF9VUERBVEVEID0gJ2xhc3R1cGRhdGVkJyxcbiAgVElUTEUgPSAndGl0bGUnLFxuICBMQVRFU1QgPSAnbGF0ZXN0Jyxcbn1cblxudHlwZSBMb2FkZXJUeXBlID0ge1xuICB0b2RvOiAoVG9kb1R5cGUgJiB7XG4gICAgbGFiZWxzOiAoTGFiZWxzT25Ub2RvICYge1xuICAgICAgTGFiZWw6IExhYmVsIHwgbnVsbFxuICAgIH0pW11cbiAgfSlbXVxuICBzb3J0Qnk6IFNvcnRCeU9wdGlvbnNcbiAgZmlsdGVyQnk6IEZpbHRlckJ5T3B0aW9uc1xuICBzaG93OiAnY29tcGxldGVkJyB8ICdwZW5kaW5nJ1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnVG9kbycsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKVxuXG4gIGNvbnN0IHF1ZXJ5ID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSA/PyAnJ1xuICBjb25zdCBmaWx0ZXJCeSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdmaWx0ZXJCeScpID8/IEZpbHRlckJ5T3B0aW9ucy5TSE9XX0FMTFxuICBjb25zdCBzb3J0QnkgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnc29ydEJ5JykgPz8gU29ydEJ5T3B0aW9ucy5MQVRFU1RcbiAgY29uc3Qgc2hvdyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdzaG93JykgPz8gJ3BlbmRpbmcnXG5cbiAgY29uc3QgZHVlRGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgbGV0IGFkZGlvbnRhbFF1ZXJ5ID0ge31cbiAgbGV0IG9yZGVyQnkgPSB7fVxuXG4gIGlmIChzb3J0QnkgPT09IFNvcnRCeU9wdGlvbnMuTEFURVNUKSB7XG4gICAgb3JkZXJCeSA9IHtcbiAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnLFxuICAgIH1cbiAgfSBlbHNlIGlmIChzb3J0QnkgPT09IFNvcnRCeU9wdGlvbnMuVElUTEUpIHtcbiAgICBvcmRlckJ5ID0ge1xuICAgICAgdGl0bGU6ICdhc2MnLFxuICAgIH1cbiAgfSBlbHNlIGlmIChzb3J0QnkgPT09IFNvcnRCeU9wdGlvbnMuUFJJT1JJVFkpIHtcbiAgICBvcmRlckJ5ID0ge1xuICAgICAgcHJpb3JpdHk6ICdhc2MnLFxuICAgIH1cbiAgfSBlbHNlIGlmIChzb3J0QnkgPT09IFNvcnRCeU9wdGlvbnMuTEFTVF9VUERBVEVEKSB7XG4gICAgb3JkZXJCeSA9IHtcbiAgICAgIHVwZGF0ZWRBdDogJ2Rlc2MnLFxuICAgIH1cbiAgfVxuXG4gIGlmIChmaWx0ZXJCeSA9PT0gRmlsdGVyQnlPcHRpb25zLlVQQ09NSU5HKSB7XG4gICAgYWRkaW9udGFsUXVlcnkgPSB7XG4gICAgICBkdWVEYXRlOiB7XG4gICAgICAgIGd0OiBkdWVEYXRlLFxuICAgICAgfSxcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmlsdGVyQnkgPT09IEZpbHRlckJ5T3B0aW9ucy5PVkVSRFVFKSB7XG4gICAgYWRkaW9udGFsUXVlcnkgPSB7XG4gICAgICBkdWVEYXRlOiB7XG4gICAgICAgIGx0OiBkdWVEYXRlLFxuICAgICAgfSxcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmlsdGVyQnkgPT09IEZpbHRlckJ5T3B0aW9ucy5UT0RBWSkge1xuICAgIGFkZGlvbnRhbFF1ZXJ5ID0ge1xuICAgICAgZHVlRGF0ZToge1xuICAgICAgICBlcXVhbHM6IGR1ZURhdGUsXG4gICAgICB9LFxuICAgIH1cbiAgfSBlbHNlIGlmIChmaWx0ZXJCeSA9PT0gRmlsdGVyQnlPcHRpb25zLlNIT1dfQUxMKSB7XG4gICAgYWRkaW9udGFsUXVlcnkgPSB7fVxuICB9XG5cbiAgaWYgKHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoTWF0Y2hSZXN1bHQgPSBhd2FpdCBwcmlzbWEudG9kby5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1c2VyRW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgY29udGFpbnM6IHF1ZXJ5LFxuICAgICAgICAgIG1vZGU6ICdpbnNlbnNpdGl2ZScsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLi4uYWRkaW9udGFsUXVlcnksXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBMYWJlbDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgLi4ub3JkZXJCeSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBqc29uKHsgdG9kbzogc2VhcmNoTWF0Y2hSZXN1bHQsIGZpbHRlckJ5LCBzb3J0QnksIHNob3cgfSlcbiAgfVxuXG4gIGNvbnN0IHRvZG8gPSBhd2FpdCBwcmlzbWEudG9kby5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIC4uLmFkZGlvbnRhbFF1ZXJ5LFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBMYWJlbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICAuLi5vcmRlckJ5LFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKHRvZG8ubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cganNvbihcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogJ05vIHRvZG9zIGZvdW5kJyxcbiAgICAgICAgZGVzY3JpcHRpb246IGBJdCBzZWVtcyBsaWtlIHlvdSd2ZSBub3QgYWRkZWQgYW55IHRvZG9zIHlldC4gUGxlYXNlIHByZXNzIHRoZSBiZWxvdyBidXR0b24gdG8gYWRkIHNvbWUgdG9kb3MuYCxcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNDA0IH0sXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGpzb24oeyB0b2RvLCBmaWx0ZXJCeSwgc29ydEJ5LCBzaG93IH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9JbmRleCgpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCB7IHRvZG8sIGZpbHRlckJ5LCBzb3J0QnkgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyVHlwZT4oKVxuXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpXG5cbiAgY29uc3QgYm9yZGVyQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS4yMDAnLCAnZ3JheS44MDAnKVxuXG4gIGNvbnN0IGNvbXBsZXRlZFRvZG9zID0gdG9kby5maWx0ZXIoKHRvZG8pID0+IHRvZG8uY29tcGxldGVkKVxuXG4gIGNvbnN0IGhhc0NvbXBsZXRlZFNvbWVUb2RvcyA9IGNvbXBsZXRlZFRvZG9zLmxlbmd0aCA+IDBcblxuICBjb25zdCBoYXNQZW5kaW5nVG9kb3MgPSB0b2RvLmxlbmd0aCA+IGNvbXBsZXRlZFRvZG9zLmxlbmd0aFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktOFwiPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiXG4gICAgICAgICAgbWV0aG9kPVwiZ2V0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KHRhcmdldCkgPT4gc3VibWl0KHRhcmdldC5jdXJyZW50VGFyZ2V0KX1cbiAgICAgICAgICBvblJlc2V0PXsodGFyZ2V0KSA9PiBzdWJtaXQodGFyZ2V0LmN1cnJlbnRUYXJnZXQpfVxuICAgICAgICA+XG4gICAgICAgICAgPFZTdGFjayB3PVwiZnVsbFwiPlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj17Wydjb2x1bW4nLCAnY29sdW1uJywgJ3JvdycsICdyb3cnXX1cbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRHcm91cCBzaXplPVwibWRcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxuICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgLy8gIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1jaGlsZHJlbi1wcm9wXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbj17PFJpU2VhcmNoTGluZSBjb2xvcj1cImdyYXkuMzAwXCIgLz59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcHI9XCI0LjVyZW1cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJxXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8SFN0YWNrIGZsZXg9eycyJ30ganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCIgdz1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgbmFtZT1cImZpbHRlckJ5XCIgZGVmYXVsdFZhbHVlPXtmaWx0ZXJCeSA/PyBGaWx0ZXJCeU9wdGlvbnMuU0hPV19BTEx9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHZhbHVlPXtGaWx0ZXJCeU9wdGlvbnMuU0hPV19BTEx9PlxuICAgICAgICAgICAgICAgICAgICAgIEZpbHRlciBieVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17RmlsdGVyQnlPcHRpb25zLlNIT1dfQUxMfT5TaG93IEFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtGaWx0ZXJCeU9wdGlvbnMuVE9EQVl9PlRvZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0ZpbHRlckJ5T3B0aW9ucy5VUENPTUlOR30+VXBjb21pbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17RmlsdGVyQnlPcHRpb25zLk9WRVJEVUV9Pk92ZXJkdWU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdCBuYW1lPVwic29ydEJ5XCIgZGVmYXVsdFZhbHVlPXtzb3J0QnkgPz8gU29ydEJ5T3B0aW9ucy5MQVRFU1R9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHZhbHVlPXtTb3J0QnlPcHRpb25zLkxBVEVTVH0+XG4gICAgICAgICAgICAgICAgICAgICAgU29ydCBieVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17U29ydEJ5T3B0aW9ucy5MQVRFU1R9PkxhdGVzdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtTb3J0QnlPcHRpb25zLlRJVExFfT5UaXRsZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtTb3J0QnlPcHRpb25zLlBSSU9SSVRZfT5Qcmlvcml0eTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtTb3J0QnlPcHRpb25zLkxBU1RfVVBEQVRFRH0+TGFzdCB1cGRhdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIHsvKiA8TWVudT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcz17SWNvbkJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PElvSW9zT3B0aW9ucyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgd2lkdGg9eydpbml0aWFsJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cInNob3ctY29tcGxldGVkXCIgbWI9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBjb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob3ctY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17c2hvdyA9PT0gJ2NvbXBsZXRlZCcgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgIDwvTWVudT4gKi99XG4gICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDxIU3RhY2sgdz1cImZ1bGxcIiBqdXN0aWZ5Q29udGVudD17J2ZsZXgtZW5kJ30+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBsZWZ0SWNvbj17PElvTWRBZGQgLz59XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPXsndHdpdHRlcid9XG4gICAgICAgICAgICAgICAgdz17WydmdWxsJywgJ2Z1bGwnLCAnaW5pdGlhbCcsICdpbml0aWFsJ119XG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0aW9uKCcvdG9kby9uZXcnKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGxlZnRJY29uPXs8UmlEZWxldGVCYWNrMkxpbmUgLz59XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgIHc9e1snZnVsbCcsICdmdWxsJywgJ2luaXRpYWwnLCAnaW5pdGlhbCddfVxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwicmVkXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAge3RvZG8ubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgIDxOb0l0ZW1zIHRpdGxlPVwiTm8gdG9kbyBsaXN0IGl0ZW1zIGZvdW5kISEhXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2hhc1BlbmRpbmdUb2RvcyAmJiA8aDIgY2xhc3NOYW1lPVwicGItNCBtdC0xMCB0ZXh0LXhsIGZvbnQtYm9sZCBib3JkZXItYlwiPlBlbmRpbmc8L2gyPn1cbiAgICAgICAgPFZTdGFja1xuICAgICAgICAgIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J31cbiAgICAgICAgICBtdD1cIjZcIlxuICAgICAgICAgIGRpdmlkZXI9ezxTdGFja0RpdmlkZXIgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yfSAvPn1cbiAgICAgICAgPlxuICAgICAgICAgIHtoYXNQZW5kaW5nVG9kb3MgJiZcbiAgICAgICAgICAgIHRvZG8ubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdG9kby5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFRvZG9JdGVtIHsuLi50b2RvfSBrZXk9e3RvZG8uaWR9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAge2hhc0NvbXBsZXRlZFNvbWVUb2RvcyAmJiAoXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTQgbXQtMTAgdGV4dC14bCBmb250LWJvbGQgYm9yZGVyLWJcIj5Db21wbGV0ZWQ8L2gyPlxuICAgICAgICApfVxuICAgICAgICA8VlN0YWNrXG4gICAgICAgICAgYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfVxuICAgICAgICAgIG10PVwiNlwiXG4gICAgICAgICAgZGl2aWRlcj17PFN0YWNrRGl2aWRlciBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3J9IC8+fVxuICAgICAgICA+XG4gICAgICAgICAge3RvZG8ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgdG9kby5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRvZG8uY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUb2RvSXRlbSB7Li4udG9kb30ga2V5PXt0b2RvLmlkfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENhdGNoQm91bmRhcnk6IENhdGNoQm91bmRhcnlDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBsZXQgcGFnZSA9IDxQYWdlNTAwIC8+XG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHBhZ2UgPSAoXG4gICAgICA8UGFnZTQwMCBzdGF0dXNDb2RlPXs0MDR9IG1lc3NhZ2U9e2NhdWdodC5kYXRhLm1lc3NhZ2V9IGRlc2NyaXB0aW9uPXtjYXVnaHQuZGF0YS5kZXNjcmlwdGlvbn0+XG4gICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbGVmdEljb249ezxJb01kQWRkIC8+fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGlvbignL3RvZG8vbmV3Jyl9XG4gICAgICAgICAgICBjb2xvclNjaGVtZT1cInR3aXR0ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBUb2RvXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEdvVG9Ib21lIC8+XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgPC9QYWdlNDAwPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiA8PntwYWdlfTwvPlxufVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9ICgpID0+IHtcbiAgcmV0dXJuIDxQYWdlNTAwIC8+XG59XG4iLCAiLy8gVE9ETyAtIEhhbmRsZSBFcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnVcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgcXVpY2tSZWRpcmVjdCA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGVtYWlsOiB1c2VyLmVtYWlsIH0sXG4gICAgc2VsZWN0OiB7IHF1aWNrUmVkaXJlY3Q6IHRydWUgfSxcbiAgfSlcblxuICBpZiAocXVpY2tSZWRpcmVjdD8ucXVpY2tSZWRpcmVjdCkge1xuICAgIHJldHVybiByZWRpcmVjdChxdWlja1JlZGlyZWN0Py5xdWlja1JlZGlyZWN0KVxuICB9XG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVkaXJlY3QoKSB7XG4gIHJldHVybiBudWxsXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonOTAxYjlkZTQnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVpIUTdNSVFELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1IU09XUksyVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZGM1paTENSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlFZQkFVU1EuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVhCQzZBRFVBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VQUxLWVNKUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJCM0VDUUVHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREVFSUZQSkEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2F1dGgvZ2l0aHViJzp7J2lkJzoncm91dGVzL2F1dGgvZ2l0aHViJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvZ2l0aHViJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvZ2l0aHViLUNXREtHNTVGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvZ2l0aHViL2NhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvZ2l0aHViL2NhbGxiYWNrJywncGFyZW50SWQnOidyb3V0ZXMvYXV0aC9naXRodWInLCdwYXRoJzonY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9naXRodWIvY2FsbGJhY2stQUtRMkZNREkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvZ29vZ2xlJzp7J2lkJzoncm91dGVzL2F1dGgvZ29vZ2xlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvZ29vZ2xlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvZ29vZ2xlLVZVNFFaR0paLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvZ29vZ2xlL2NhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvZ29vZ2xlL2NhbGxiYWNrJywncGFyZW50SWQnOidyb3V0ZXMvYXV0aC9nb29nbGUnLCdwYXRoJzonY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9nb29nbGUvY2FsbGJhY2stNFgzVVFQUVIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2MuJGlkJzp7J2lkJzoncm91dGVzL2MuJGlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2MvOmlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2MuJGlkLUtNRVlDTFVRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RR05IQ0lIRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVJRlhTN1NMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2NsaXBib2FyZCc6eydpZCc6J3JvdXRlcy9jbGlwYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2xpcGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NsaXBib2FyZC1XUTRZTURXNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTklQNEdFSFEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9jbGlwYm9hcmQuJGlkJzp7J2lkJzoncm91dGVzL2NsaXBib2FyZC4kaWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2xpcGJvYXJkLzppZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGlwYm9hcmQuJGlkLUVBV0YyM0VCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HNkVWUjNYVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFHTkhDSUhELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvY2xpcGJvYXJkLiRpZC9kZWxldGUnOnsnaWQnOidyb3V0ZXMvY2xpcGJvYXJkLiRpZC9kZWxldGUnLCdwYXJlbnRJZCc6J3JvdXRlcy9jbGlwYm9hcmQuJGlkJywncGF0aCc6J2RlbGV0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGlwYm9hcmQuJGlkL2RlbGV0ZS1VUlE3Q1pRNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVUFMS1lTSlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CQjNFQ1FFRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9jbGlwYm9hcmQuJGlkL2VkaXQnOnsnaWQnOidyb3V0ZXMvY2xpcGJvYXJkLiRpZC9lZGl0JywncGFyZW50SWQnOidyb3V0ZXMvY2xpcGJvYXJkLiRpZCcsJ3BhdGgnOidlZGl0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NsaXBib2FyZC4kaWQvZWRpdC1TV0JVS1haMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVUFMS1lTSlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CQjNFQ1FFRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2NsaXBib2FyZC9uZXcnOnsnaWQnOidyb3V0ZXMvY2xpcGJvYXJkL25ldycsJ3BhcmVudElkJzoncm91dGVzL2NsaXBib2FyZCcsJ3BhdGgnOiduZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2xpcGJvYXJkL25ldy1YNDZIUkVVQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVUFMS1lTSlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CQjNFQ1FFRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2NvcHknOnsnaWQnOidyb3V0ZXMvY29weScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb3B5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvcHktM1ZPNkI0TVEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFHTkhDSUhELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9leHBvcnQnOnsnaWQnOidyb3V0ZXMvZXhwb3J0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2V4cG9ydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9leHBvcnQtS0xVVEhMNEguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJaTU82RDRGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRzZFVlIzWFUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hhYml0cy1yYW5rJzp7J2lkJzoncm91dGVzL2hhYml0cy1yYW5rJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2hhYml0cy1yYW5rJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hhYml0cy1yYW5rLVcyVTVMS0QzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1OSVA0R0VIUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVJRlhTN1NMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2hhYml0cy1yYW5rL25ldyc6eydpZCc6J3JvdXRlcy9oYWJpdHMtcmFuay9uZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy9oYWJpdHMtcmFuaycsJ3BhdGgnOiduZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaGFiaXRzLXJhbmsvbmV3LTJETUxQV1ZVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VQUxLWVNKUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJCM0VDUUVHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREVFSUZQSkEuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kZWxldGUnOnsnaWQnOidyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZGVsZXRlJywncGFyZW50SWQnOidyb3V0ZXMvaGFiaXRzLXJhbmsnLCdwYXRoJzondm90ZS86aWQvZGVsZXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2RlbGV0ZS1HR1ZFRVkzNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVUFMS1lTSlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CQjNFQ1FFRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kb3dudm90ZSc6eydpZCc6J3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kb3dudm90ZScsJ3BhcmVudElkJzoncm91dGVzL2hhYml0cy1yYW5rJywncGF0aCc6J3ZvdGUvOmlkL2Rvd252b3RlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2Rvd252b3RlLU9MTEZDNURYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CQjNFQ1FFRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2VkaXQnOnsnaWQnOidyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZWRpdCcsJ3BhcmVudElkJzoncm91dGVzL2hhYml0cy1yYW5rJywncGF0aCc6J3ZvdGUvOmlkL2VkaXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZWRpdC1XNk1aNUFJRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVUFMS1lTSlMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1CQjNFQ1FFRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL3Vwdm90ZSc6eydpZCc6J3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC91cHZvdGUnLCdwYXJlbnRJZCc6J3JvdXRlcy9oYWJpdHMtcmFuaycsJ3BhdGgnOid2b3RlLzppZC91cHZvdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvdXB2b3RlLU1RWDQ1QUxXLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9oZWFsdGhjaGVjayc6eydpZCc6J3JvdXRlcy9oZWFsdGhjaGVjaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidoZWFsdGhjaGVjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9oZWFsdGhjaGVjay1LSkdBWk5XVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaG9tZSc6eydpZCc6J3JvdXRlcy9ob21lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2hvbWUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaG9tZS1DTllaNUlJSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtRkpHN05aNVEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xhYmVsLm5ldyc6eydpZCc6J3JvdXRlcy9sYWJlbC5uZXcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbGFiZWwvbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xhYmVsLm5ldy1IQ1M0T05ORC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV0lWQ1BTUVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLTQ2MkVRTVQ3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LUlONVlVR1o2LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2ZpbGUnOnsnaWQnOidyb3V0ZXMvcHJvZmlsZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9maWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Byb2ZpbGUtWlg1NTRGTkguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvcHJvZmlsZS9leHBvcnQnOnsnaWQnOidyb3V0ZXMvcHJvZmlsZS9leHBvcnQnLCdwYXJlbnRJZCc6J3JvdXRlcy9wcm9maWxlJywncGF0aCc6J2V4cG9ydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wcm9maWxlL2V4cG9ydC1LN1BGRkJKQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQlpNTzZENEYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HNkVWUjNYVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVBTEtZU0pTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQkIzRUNRRUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ERUVJRlBKQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVJRlhTN1NMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL3Byb2ZpbGUvZ2VuZXJhbCc6eydpZCc6J3JvdXRlcy9wcm9maWxlL2dlbmVyYWwnLCdwYXJlbnRJZCc6J3JvdXRlcy9wcm9maWxlJywncGF0aCc6J2dlbmVyYWwnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZmlsZS9nZW5lcmFsLUJXU1lRNUROLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VQUxLWVNKUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJCM0VDUUVHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREVFSUZQSkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvcic6eydpZCc6J3JvdXRlcy9yJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvci0yWUJBVVpCRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWRpcmVjdCc6eydpZCc6J3JvdXRlcy9yZWRpcmVjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZWRpcmVjdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWRpcmVjdC1ENFBYT1JNRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRzZFVlIzWFUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RR05IQ0lIRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVJRlhTN1NMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvdG9kbyc6eydpZCc6J3JvdXRlcy90b2RvJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RvZG8nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdG9kby01Q1BMVEg3Ry5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTklQNEdFSFEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy90b2RvLiRpZC9kZWxldGUnOnsnaWQnOidyb3V0ZXMvdG9kby4kaWQvZGVsZXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RvZG8vOmlkL2RlbGV0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b2RvLiRpZC9kZWxldGUtWVlGWjRPS0YuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVJRlhTN1NMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL3RvZG8uJGlkL2VkaXQnOnsnaWQnOidyb3V0ZXMvdG9kby4kaWQvZWRpdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0b2RvLzppZC9lZGl0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3RvZG8uJGlkL2VkaXQtVUdTV0MyWUkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVJRlhTN1NMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvdG9kby4kaWQvcmVzY2hlZHVsZSc6eydpZCc6J3JvdXRlcy90b2RvLiRpZC9yZXNjaGVkdWxlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RvZG8vOmlkL3Jlc2NoZWR1bGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdG9kby4kaWQvcmVzY2hlZHVsZS1INUVYSFpVRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV0lWQ1BTUVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdG9kby4kaWQvdG9nZ2xlJzp7J2lkJzoncm91dGVzL3RvZG8uJGlkL3RvZ2dsZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0b2RvLzppZC90b2dnbGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdG9kby4kaWQvdG9nZ2xlLVVSRUVPUERELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RvZG8ubmV3Jzp7J2lkJzoncm91dGVzL3RvZG8ubmV3JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RvZG8vbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3RvZG8ubmV3LU5UTjJGQkg3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC05MDFCOURFNC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1os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
