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
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links2,
  loader: () => loader
});
init_react();
var React9 = __toESM(require("react"));
var import_remix11 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-ARK6YNSH.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-QBNXEREU.css";

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
    className: "container w-full max-w-5xl px-4 mx-auto md:px-6"
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
  }, [ref]);
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
var React6 = __toESM(require("react"));
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
function Todo(props) {
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
  return /* @__PURE__ */ React6.createElement("div", {
    className: "flex flex-col items-start w-full py-2 rounded-md gap-y-1"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-center justify-between w-full"
  }, /* @__PURE__ */ React6.createElement("p", {
    className: "text-lg"
  }, props.title), /* @__PURE__ */ React6.createElement(import_react6.HStack, {
    spacing: 2
  }, /* @__PURE__ */ React6.createElement(fetcher.Form, {
    method: "post",
    action: `/todo/${props.id}/toggle`
  }, /* @__PURE__ */ React6.createElement(import_react6.IconButton, {
    variant: "ghost",
    type: "submit",
    "aria-label": "Toogle task completion",
    isLoading: isSubmitting,
    colorScheme: props.completed ? "green" : "gray",
    icon: props.completed ? /* @__PURE__ */ React6.createElement(import_hi.HiCheckCircle, {
      size: 24
    }) : /* @__PURE__ */ React6.createElement(import_ri.RiCheckboxBlankCircleLine, {
      size: 24
    }),
    size: "sm"
  })), isOverDue && /* @__PURE__ */ React6.createElement(import_react6.Menu, null, /* @__PURE__ */ React6.createElement(import_react6.MenuButton, {
    as: import_react6.Button,
    size: "xs",
    disabled: isRescheduling,
    colorScheme: "purple"
  }, isRescheduling ? "Rescheduling..." : "Reschedule"), /* @__PURE__ */ React6.createElement(import_react6.MenuList, null, /* @__PURE__ */ React6.createElement(import_react6.MenuGroup, null, /* @__PURE__ */ React6.createElement(import_react6.MenuItem, {
    onClick: () => reschule(getToday())
  }, "Today"), /* @__PURE__ */ React6.createElement(import_react6.MenuItem, {
    onClick: () => reschule(getTomorrow())
  }, "Tomorrow")), /* @__PURE__ */ React6.createElement(import_react6.MenuDivider, null), /* @__PURE__ */ React6.createElement(import_react6.MenuItem, {
    closeOnSelect: false
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React6.createElement(import_react_calendar.default, {
    onChange: (value) => {
      const newDueDate = new Date(value);
      reschule((0, import_moment3.default)(newDueDate).format("YYYY-MM-DD"));
    },
    minDate: new Date(getToday())
  }))))), /* @__PURE__ */ React6.createElement(import_react6.Menu, null, /* @__PURE__ */ React6.createElement(import_react6.MenuButton, null, /* @__PURE__ */ React6.createElement(import_bs.BsThreeDotsVertical, null)), /* @__PURE__ */ React6.createElement(import_react6.MenuList, null, /* @__PURE__ */ React6.createElement(import_react6.MenuItem, {
    onClick: () => navigation(`/todo/${props.id}/edit`)
  }, "Edit"), /* @__PURE__ */ React6.createElement(import_react6.MenuItem, {
    onClick: () => navigation(`/todo/${props.id}/delete`)
  }, "Delete"))))), /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-center justify-between w-full mt-2"
  }, /* @__PURE__ */ React6.createElement(import_react6.HStack, null, /* @__PURE__ */ React6.createElement(import_react6.Tag, {
    fontSize: "xx-small",
    colorScheme: getPriorityColor(props.priority)
  }, (0, import_change_case.capitalCase)(`${props.priority} PRIORITY`)), (isOverDue || isUpcoming) && !props.completed && /* @__PURE__ */ React6.createElement(import_react6.Tag, {
    fontSize: "xx-small",
    colorScheme: isUpcoming ? "green" : "red"
  }, isOverDue ? `Overdue ${dueString}` : `Due ${dueString}`), hasLabels ? labels.map((label) => {
    return /* @__PURE__ */ React6.createElement(import_react6.Tag, {
      fontSize: "xx-small",
      colorScheme: "whatsapp",
      key: label.id
    }, label.label);
  }) : null), /* @__PURE__ */ React6.createElement(import_react6.HStack, {
    pl: "2",
    spacing: 2
  }, props.updatedAt ? /* @__PURE__ */ React6.createElement(import_react6.Tag, {
    ml: "auto",
    fontSize: "xx-small",
    colorScheme: "linkedin"
  }, (0, import_moment3.default)(props.updatedAt).calendar()) : null)));
}

// app/components/card.tsx
init_react();
var import_react7 = require("@chakra-ui/react");
var React7 = __toESM(require("react"));
function Card(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const bg = (0, import_react7.useColorModeValue)("white", "black");
  return /* @__PURE__ */ React7.createElement(import_react7.Flex, __spreadValues({
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
function Vote(props) {
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
var React8 = __toESM(require("react"));
var import_react9 = require("@chakra-ui/react");
function Dialog(props) {
  return /* @__PURE__ */ React8.createElement(import_react9.Modal, {
    isOpen: props.isOpen,
    onClose: props.onClose,
    isCentered: true,
    size: "xl"
  }, /* @__PURE__ */ React8.createElement(import_react9.ModalOverlay, null), /* @__PURE__ */ React8.createElement(import_react9.ModalContent, null, props.children));
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

// route:/workspace/app/root.tsx
var import_react15 = require("@chakra-ui/react");

// app/utils/auth.server.ts
init_react();
var import_remix_auth_google = require("remix-auth-google");
var import_remix_auth = require("remix-auth");
var import_remix_auth_github = require("remix-auth-github");

// app/utils/session.server.ts
init_react();
var import_remix10 = __toESM(require_remix());
var cookieSecret = process.env.COOKIE_SECRET;
if (!cookieSecret) {
  throw new Error("Please add cookie secret env variable");
}
var sessionStorage = (0, import_remix10.createCookieSessionStorage)({
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

// route:/workspace/app/root.tsx
var import_clsx3 = __toESM(require("clsx"));

// app/others/theme.ts
init_react();
var import_react14 = require("@chakra-ui/react");
var import_theme_tools = require("@chakra-ui/theme-tools");
var theme = (0, import_react14.extendTheme)({
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
  return /* @__PURE__ */ React9.createElement(Document, null, /* @__PURE__ */ React9.createElement(import_react15.ChakraProvider, {
    theme
  }, /* @__PURE__ */ React9.createElement(Layout, null, /* @__PURE__ */ React9.createElement(import_remix11.Outlet, null))));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React9.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React9.createElement(import_react15.ChakraProvider, {
    theme
  }, /* @__PURE__ */ React9.createElement(import_react15.Box, null, /* @__PURE__ */ React9.createElement(import_react15.Heading, {
    as: "h1"
  }, "There was an error"))));
}
function CatchBoundary() {
  const caught = (0, import_remix11.useCatch)();
  return /* @__PURE__ */ React9.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React9.createElement(import_react15.ChakraProvider, {
    theme
  }, /* @__PURE__ */ React9.createElement(import_react15.Box, null, /* @__PURE__ */ React9.createElement(import_react15.Heading, {
    as: "h1"
  }, caught.status, " ", caught.statusText))));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React9.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React9.createElement("head", null, /* @__PURE__ */ React9.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React9.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React9.createElement("title", null, title) : null, /* @__PURE__ */ React9.createElement(import_remix11.Meta, null), /* @__PURE__ */ React9.createElement(import_remix11.Links, null)), /* @__PURE__ */ React9.createElement("body", null, children, /* @__PURE__ */ React9.createElement(import_remix11.ScrollRestoration, null), /* @__PURE__ */ React9.createElement(import_remix11.Scripts, null), /* @__PURE__ */ React9.createElement(import_remix11.LiveReload, null)));
}
function Layout({ children }) {
  const user = (0, import_remix11.useLoaderData)();
  const location = (0, import_remix11.useLocation)();
  const isLogin = location.pathname === "/login";
  const bgColor = (0, import_react15.useColorModeValue)("bg-[color:var(--chakra-colors-brand-lightWhite)]", "bg-[color:var(--chakra-colors-brand-100)]");
  return /* @__PURE__ */ React9.createElement("div", {
    className: "min-h-screen relative max-h-[100vh]"
  }, /* @__PURE__ */ React9.createElement(TransitionModal, null), !isLogin && /* @__PURE__ */ React9.createElement(Navbar, {
    user
  }), /* @__PURE__ */ React9.createElement("main", {
    className: (0, import_clsx3.default)("h-full w-full pb-24", bgColor)
  }, children));
}

// route:/workspace/app/routes/todo.$id/toggle.tsx
var toggle_exports = {};
__export(toggle_exports, {
  action: () => action,
  default: () => Toggle
});
init_react();
var import_remix12 = __toESM(require_remix());
var action = async ({ request, params }) => {
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
    return (0, import_remix12.redirect)(`/todo`);
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
    return (0, import_remix12.json)({ ok: true });
  } catch (err) {
    throw (0, import_remix12.redirect)("/");
  }
};
function Toggle() {
  return null;
}

// route:/workspace/app/routes/clipboard.$id.tsx
var clipboard_id_exports = {};
__export(clipboard_id_exports, {
  default: () => Copy,
  loader: () => loader2,
  meta: () => meta
});
init_react();
var React10 = __toESM(require("react"));
var import_react16 = require("@chakra-ui/react");
var import_remix13 = __toESM(require_remix());
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
var meta = () => {
  return {
    title: "Clipboard"
  };
};
var loader2 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const clipboardContents = await prisma.clipboardContent.findUnique({
    where: {
      id: Number(params.id)
    }
  });
  if (!clipboardContents) {
    throw (0, import_remix13.json)({ message: `The Clipboard content you're looking for doesn't exists` }, { status: 404 });
  }
  if (clipboardContents.userEmail !== user.email) {
    throw (0, import_remix13.json)({ message: `Unauthorized access. You're not allowed to see this content` }, { status: 401 });
  }
  return (0, import_remix13.json)(clipboardContents);
};
function Copy() {
  var _a;
  const [url, setUrl] = React10.useState("");
  const clipboardContents = (0, import_remix13.useLoaderData)();
  const { id } = (0, import_remix13.useParams)();
  const transition = (0, import_remix13.useTransition)();
  const navigation = (0, import_remix13.useNavigate)();
  const toast = (0, import_react16.useToast)();
  React10.useEffect(() => {
    const url2 = new URL(`${window.location.href}/c/${id}`);
    setUrl(composeUrl(url2));
  }, []);
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
  return /* @__PURE__ */ React10.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React10.createElement(PageTitle, null, /* @__PURE__ */ React10.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React10.createElement("h2", {
    className: "text-3xl font-bold"
  }, clipboardContents.title), /* @__PURE__ */ React10.createElement(import_react16.Box, {
    ml: "auto"
  }, /* @__PURE__ */ React10.createElement(import_react16.Menu, null, /* @__PURE__ */ React10.createElement(import_react16.MenuButton, {
    as: import_react16.Button,
    rightIcon: /* @__PURE__ */ React10.createElement(import_icons.ChevronDownIcon, null)
  }, "Options"), /* @__PURE__ */ React10.createElement(import_react16.MenuList, null, /* @__PURE__ */ React10.createElement(import_react16.MenuItem, {
    onClick: () => share()
  }, "Share"), /* @__PURE__ */ React10.createElement(import_react16.MenuItem, {
    onClick: () => copy()
  }, "Copy"), /* @__PURE__ */ React10.createElement(import_react16.MenuItem, {
    onClick: () => navigation(`/clipboard/${id}/edit`)
  }, "Edit"), /* @__PURE__ */ React10.createElement(import_react16.MenuItem, {
    onClick: () => navigation(`/clipboard/${id}/delete`)
  }, "Delete")))))), /* @__PURE__ */ React10.createElement(Wrapper, null, /* @__PURE__ */ React10.createElement(import_remix13.Form, {
    key: (_a = transition.location) == null ? void 0 : _a.key,
    className: "mt-8"
  }, /* @__PURE__ */ React10.createElement(import_react16.FormControl, null, /* @__PURE__ */ React10.createElement(import_react16.FormLabel, null, "Title"), /* @__PURE__ */ React10.createElement(import_react16.Input, {
    disabled: true,
    placeholder: "Title",
    type: "text",
    name: "title",
    defaultValue: clipboardContents.title
  })), /* @__PURE__ */ React10.createElement(import_react16.FormControl, {
    mt: 4
  }, /* @__PURE__ */ React10.createElement(import_react16.FormLabel, null, "Content"), /* @__PURE__ */ React10.createElement(import_react16.Textarea, {
    name: "content",
    disabled: true,
    placeholder: "Content to copy",
    defaultValue: clipboardContents.content
  })), /* @__PURE__ */ React10.createElement(import_react16.FormControl, {
    mt: 4
  }, /* @__PURE__ */ React10.createElement(import_react16.FormLabel, null, "Is Private"), /* @__PURE__ */ React10.createElement(import_react16.Select, {
    name: "private",
    placeholder: "Select option",
    defaultValue: `${clipboardContents.private}` ?? "true",
    disabled: true
  }, /* @__PURE__ */ React10.createElement("option", {
    value: "false"
  }, "Public"), /* @__PURE__ */ React10.createElement("option", {
    value: "true"
  }, "Private")))), /* @__PURE__ */ React10.createElement(import_react16.Tabs, {
    mt: "4"
  }, /* @__PURE__ */ React10.createElement(import_react16.TabList, null, /* @__PURE__ */ React10.createElement(import_react16.Tab, null, "Content QR code"), /* @__PURE__ */ React10.createElement(import_react16.Tab, null, "Shareable link QR code")), /* @__PURE__ */ React10.createElement(import_react16.TabPanels, null, /* @__PURE__ */ React10.createElement(import_react16.TabPanel, null, /* @__PURE__ */ React10.createElement(QRCode, {
    value: clipboardContents.content
  })), /* @__PURE__ */ React10.createElement(import_react16.TabPanel, null, /* @__PURE__ */ React10.createElement(QRCode, {
    value: url
  })))), /* @__PURE__ */ React10.createElement(import_remix13.Outlet, null)));
}

// route:/workspace/app/routes/clipboard.$id/delete.tsx
var delete_exports = {};
__export(delete_exports, {
  action: () => action2,
  default: () => Delete,
  meta: () => meta2
});
init_react();
var import_remix14 = __toESM(require_remix());
var meta2 = () => {
  return {
    title: "Clipboard | Delete"
  };
};
var action2 = async ({ request, params }) => {
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
  return (0, import_remix14.redirect)("/clipboard");
};
function Delete() {
  return /* @__PURE__ */ React.createElement(DeleteDialog, {
    title: "Delete Content",
    message: "Are you sure to delete this Content?"
  });
}

// route:/workspace/app/routes/clipboard.$id/edit.tsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action3,
  default: () => ClipboardContentNew,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_react17 = require("@chakra-ui/react");

// app/types/clipboard.ts
init_react();
var import_zod = require("zod");
var ClipboardContentSchema = import_zod.z.object({
  title: import_zod.z.string().min(5).max(200),
  content: import_zod.z.string().min(5).max(2e3),
  private: import_zod.z.boolean()
});

// route:/workspace/app/routes/clipboard.$id/edit.tsx
var meta3 = () => {
  return {
    title: "Clipboard | Edit"
  };
};
var action3 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = composeNumberId(params);
  const content = await prisma.clipboardContent.findUnique({ where: { id } });
  if (!content || content.userEmail !== user.email) {
    throw (0, import_remix15.redirect)("/clipboard");
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
    return (0, import_remix15.redirect)(`/clipboard/${clipboardContent.id}`);
  } catch (err) {
    throw (0, import_remix15.redirect)("/");
  }
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
    throw (0, import_remix15.json)({ message: `The Clipboard content you're looking for doesn't exists` }, { status: 404 });
  }
  if (clipboardContents.userEmail !== user.email) {
    throw (0, import_remix15.json)({ message: `Unauthorized access. You're not allowed to see this content` }, { status: 401 });
  }
  return (0, import_remix15.json)(clipboardContents);
};
function ClipboardContentNew() {
  const navigation = (0, import_remix15.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix15.useActionData)();
  const content = (0, import_remix15.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(import_react17.ModalHeader, null, "Edit Clipboard content"), /* @__PURE__ */ React.createElement(import_react17.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react17.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(ClipboardForm, __spreadValues({}, clipboardFormProps))));
}

// route:/workspace/app/routes/auth/github.tsx
var github_exports = {};
__export(github_exports, {
  action: () => action4,
  loader: () => loader4
});
init_react();
var import_remix16 = __toESM(require_remix());
var loader4 = () => (0, import_remix16.redirect)("/login");
var action4 = ({ request }) => {
  return authenticator.authenticate("github", request);
};

// route:/workspace/app/routes/auth/github/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  loader: () => loader5
});
init_react();
var loader5 = ({ request }) => {
  return authenticator.authenticate("github", request, {
    successRedirect: "/",
    failureRedirect: "/login"
  });
};

// route:/workspace/app/routes/auth/google.tsx
var google_exports = {};
__export(google_exports, {
  action: () => action5,
  loader: () => loader6
});
init_react();
var import_remix17 = __toESM(require_remix());
var loader6 = () => (0, import_remix17.redirect)("/login");
var action5 = ({ request }) => {
  return authenticator.authenticate("google", request);
};

// route:/workspace/app/routes/auth/google/callback.tsx
var callback_exports2 = {};
__export(callback_exports2, {
  loader: () => loader7
});
init_react();
var loader7 = ({ request }) => {
  return authenticator.authenticate("google", request, {
    successRedirect: "/",
    failureRedirect: "/login"
  });
};

// route:/workspace/app/routes/habits-rank.tsx
var habits_rank_exports = {};
__export(habits_rank_exports, {
  action: () => action6,
  default: () => ClipbaordContent,
  loader: () => loader8,
  meta: () => meta4
});
init_react();

// app/types/vote.ts
init_react();
var import_zod2 = require("zod");
var VoteSchema = import_zod2.z.object({
  title: import_zod2.z.string().min(5).max(100)
});

// route:/workspace/app/routes/habits-rank.tsx
var import_react18 = require("@chakra-ui/react");
var import_io = require("react-icons/io");
var import_ri2 = require("react-icons/ri");
var import_remix18 = __toESM(require_remix());
var meta4 = () => {
  return {
    title: "Vote"
  };
};
var action6 = async ({ request }) => {
  var _a;
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  const voteData = getFormData(formData, [{ key: "title", defaultValue: "" }]);
  const voteValidationResult = VoteSchema.safeParse(voteData);
  if (!voteValidationResult.success) {
    const result = getFinalFormData(voteData, voteValidationResult.error.formErrors.fieldErrors);
    return {
      success: false,
      data: result,
      errorMessage: (_a = result.title) == null ? void 0 : _a.errorMessage
    };
  }
  try {
    await prisma.vote.create({
      data: {
        title: voteValidationResult.data.title,
        userEmail: user.email
      }
    });
    return (0, import_remix18.json)({ success: true, data: null, errorMessage: "" });
  } catch (err) {
    return (0, import_remix18.json)({ success: false, data: null, errorMessage: "Something went wrong." });
  }
};
var loader8 = async ({ request }) => {
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
    return (0, import_remix18.json)(searchMatchResult);
  }
  const votes = await prisma.vote.findMany({
    where: {
      userEmail: user.email
    },
    orderBy: {
      upvotes: "desc"
    }
  });
  return (0, import_remix18.json)(votes);
};
function ClipbaordContent() {
  var _a, _b, _c, _d, _e, _f, _g;
  const votes = (0, import_remix18.useLoaderData)();
  const submit = (0, import_remix18.useSubmit)();
  const transition = (0, import_remix18.useTransition)();
  const borderColor = (0, import_react18.useColorModeValue)("gray.200", "gray.700");
  const addVoteFetcher = (0, import_remix18.useFetcher)();
  const actionData = addVoteFetcher.data;
  const isAdding = addVoteFetcher.state === "submitting";
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full py-8"
  }, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_remix18.Form, {
    className: "flex items-center justify-between w-full",
    method: "get",
    onChange: (target) => submit(target.currentTarget)
  }, /* @__PURE__ */ React.createElement(import_react18.InputGroup, {
    size: "md"
  }, /* @__PURE__ */ React.createElement(import_react18.InputLeftElement, {
    pointerEvents: "none",
    children: /* @__PURE__ */ React.createElement(import_ri2.RiSearchLine, {
      color: "gray.300"
    })
  }), /* @__PURE__ */ React.createElement(import_react18.Input, {
    pr: "4.5rem",
    type: "text",
    name: "q",
    placeholder: "Search..."
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 mt-4 border rounded-md"
  }, /* @__PURE__ */ React.createElement(addVoteFetcher.Form, {
    className: "flex items-center justify-between w-full mb-6",
    method: "post",
    action: "/habits-rank",
    key: (_a = transition.location) == null ? void 0 : _a.key
  }, /* @__PURE__ */ React.createElement(import_react18.FormControl, {
    isInvalid: (_c = (_b = actionData == null ? void 0 : actionData.data) == null ? void 0 : _b.title) == null ? void 0 : _c.invalid
  }, /* @__PURE__ */ React.createElement(import_react18.Input, {
    type: "text",
    name: "title",
    placeholder: "Enter your Habit...",
    isInvalid: (_e = (_d = actionData == null ? void 0 : actionData.data) == null ? void 0 : _d.title) == null ? void 0 : _e.invalid
  }), /* @__PURE__ */ React.createElement(import_react18.FormErrorMessage, null, (_g = (_f = actionData == null ? void 0 : actionData.data) == null ? void 0 : _f.title) == null ? void 0 : _g.errorMessage)), /* @__PURE__ */ React.createElement(import_react18.Button, {
    leftIcon: /* @__PURE__ */ React.createElement(import_io.IoMdAdd, null),
    ml: "2",
    variant: "solid",
    w: "17%",
    size: "md",
    type: "submit",
    isLoading: isAdding,
    loadingText: "Adding"
  }, "Add")), /* @__PURE__ */ React.createElement(import_react18.VStack, {
    alignItems: "flex-start",
    divider: /* @__PURE__ */ React.createElement(import_react18.StackDivider, {
      borderColor
    })
  }, votes.map((vote) => {
    return /* @__PURE__ */ React.createElement(Vote, __spreadProps(__spreadValues({}, vote), {
      key: vote.id
    }));
  }), votes.length === 0 && /* @__PURE__ */ React.createElement(NoItems, {
    title: "No Votees found. Please add some!!!"
  })))), /* @__PURE__ */ React.createElement(import_remix18.Outlet, null));
}

// route:/workspace/app/routes/habits-rank/vote/$id/downvote.tsx
var downvote_exports = {};
__export(downvote_exports, {
  action: () => action7
});
init_react();
var import_remix19 = __toESM(require_remix());
var action7 = async ({ params, request }) => {
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
    return (0, import_remix19.redirect)("/habits-rank");
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
    return (0, import_remix19.json)({ ok: true });
  } catch (err) {
    throw (0, import_remix19.redirect)("/");
  }
};

// route:/workspace/app/routes/habits-rank/vote/$id/delete.tsx
var delete_exports2 = {};
__export(delete_exports2, {
  action: () => action8,
  default: () => Delete2,
  meta: () => meta5
});
init_react();
var import_remix20 = __toESM(require_remix());
var meta5 = () => {
  return {
    title: "Todo | Delete"
  };
};
var action8 = async ({ request, params }) => {
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
  return (0, import_remix20.redirect)("/habits-rank");
};
function Delete2() {
  return /* @__PURE__ */ React.createElement(DeleteDialog, {
    title: "Delete Habit",
    message: "Are you sure to delete this Habit?"
  });
}

// route:/workspace/app/routes/habits-rank/vote/$id/upvote.tsx
var upvote_exports = {};
__export(upvote_exports, {
  action: () => action9
});
init_react();
var import_remix21 = __toESM(require_remix());
var action9 = async ({ params, request }) => {
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
    return (0, import_remix21.redirect)("/habits-rank");
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
    return (0, import_remix21.json)({ ok: true });
  } catch (err) {
    throw (0, import_remix21.redirect)("/");
  }
};

// route:/workspace/app/routes/habits-rank/vote/$id/edit.tsx
var edit_exports2 = {};
__export(edit_exports2, {
  action: () => action10,
  default: () => VoteEdit,
  loader: () => loader9
});
init_react();
var import_remix22 = __toESM(require_remix());
var import_react19 = require("@chakra-ui/react");
var action10 = async ({ params, request }) => {
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
    return (0, import_remix22.redirect)(`/habits-rank`);
  } catch (err) {
    return (0, import_remix22.redirect)("/");
  }
};
var loader9 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const vote = await prisma.vote.findUnique({
    where: {
      id: params.id ? +params.id : void 0
    }
  });
  if (!vote) {
    throw (0, import_remix22.json)({ message: `The vote you're looking for doesn't exists` }, { status: 404 });
  }
  if (vote.userEmail !== user.email) {
    throw (0, import_remix22.json)({ message: `Unauthorized access. You're not allowed to see this vote` }, { status: 401 });
  }
  return (0, import_remix22.json)(vote);
};
function VoteEdit() {
  const navigation = (0, import_remix22.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix22.useActionData)();
  const vote = (0, import_remix22.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(import_react19.ModalHeader, null, "Edit Habit"), /* @__PURE__ */ React.createElement(import_react19.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react19.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(HabitForm, __spreadValues({}, habitFormProps))));
}

// route:/workspace/app/routes/clipboard.tsx
var clipboard_exports = {};
__export(clipboard_exports, {
  default: () => ClipboardContent2,
  loader: () => loader10,
  meta: () => meta6
});
init_react();
var import_react20 = require("@chakra-ui/react");
var import_io2 = require("react-icons/io");
var import_remix23 = __toESM(require_remix());
var import_ri3 = require("react-icons/ri");
var meta6 = () => {
  return {
    title: "Clipboard"
  };
};
var loader10 = async ({ request }) => {
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
    return (0, import_remix23.json)(searchMatchResult);
  }
  const clipboardContents = await prisma.clipboardContent.findMany({
    where: {
      userEmail: user.email
    }
  });
  return (0, import_remix23.json)(clipboardContents);
};
function ClipboardContent2() {
  const contents = (0, import_remix23.useLoaderData)();
  const navigation = (0, import_remix23.useNavigate)();
  const submit = (0, import_remix23.useSubmit)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full py-8"
  }, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_remix23.Form, {
    className: "flex items-center justify-between w-full",
    method: "get",
    onChange: (target) => submit(target.currentTarget)
  }, /* @__PURE__ */ React.createElement(import_react20.InputGroup, {
    size: "md",
    width: "81%"
  }, /* @__PURE__ */ React.createElement(import_react20.InputLeftElement, {
    pointerEvents: "none",
    children: /* @__PURE__ */ React.createElement(import_ri3.RiSearchLine, {
      color: "gray.300"
    })
  }), /* @__PURE__ */ React.createElement(import_react20.Input, {
    pr: "4.5rem",
    type: "text",
    name: "q",
    placeholder: "Search..."
  })), /* @__PURE__ */ React.createElement(import_react20.Button, {
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
    return /* @__PURE__ */ React.createElement(import_remix23.Link, {
      to: `/clipboard/${content.id}`,
      key: content.id,
      className: "w-full transition-all border rounded-md hover:border-white"
    }, /* @__PURE__ */ React.createElement(ClipboardContent, __spreadProps(__spreadValues({}, content), {
      key: content.id
    })));
  })), contents.length === 0 && /* @__PURE__ */ React.createElement(NoItems, {
    title: "No copied items found!!!"
  }))), /* @__PURE__ */ React.createElement(import_remix23.Outlet, null));
}

// route:/workspace/app/routes/clipboard/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action11,
  default: () => ClipboardContentNew2,
  loader: () => loader11,
  meta: () => meta7
});
init_react();
var import_remix24 = __toESM(require_remix());
var import_react21 = require("@chakra-ui/react");
var meta7 = () => {
  return {
    title: "Clipboard | New"
  };
};
var action11 = async ({ request }) => {
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
    return (0, import_remix24.redirect)(`/clipboard/${clipboardContent.id}`);
  } catch (err) {
    throw (0, import_remix24.redirect)("/");
  }
};
var loader11 = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
};
function ClipboardContentNew2() {
  const navigation = (0, import_remix24.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix24.useActionData)();
  const clipboardFormProps = __spreadProps(__spreadValues({}, actionData), {
    submittingText: "Creating",
    okButtonText: "Create"
  });
  return /* @__PURE__ */ React.createElement(Dialog, {
    isOpen: true,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react21.ModalHeader, null, "Create new Clipboard content"), /* @__PURE__ */ React.createElement(import_react21.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react21.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(ClipboardForm, __spreadValues({}, clipboardFormProps))));
}

// route:/workspace/app/routes/label.new.tsx
var label_new_exports = {};
__export(label_new_exports, {
  action: () => action12,
  default: () => TodoNew,
  loader: () => loader12,
  meta: () => meta8
});
init_react();
var React11 = __toESM(require("react"));
var import_remix25 = __toESM(require_remix());
var import_react22 = require("@chakra-ui/react");
var import_zod3 = require("zod");
var LabelSchema = import_zod3.z.object({
  label: import_zod3.z.string().min(5).max(20)
});
var meta8 = () => {
  return {
    title: "Label | New"
  };
};
var action12 = async ({ request }) => {
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
    return (0, import_remix25.redirect)(`/`);
  } catch {
    throw (0, import_remix25.redirect)("/");
  }
};
var loader12 = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
};
function TodoNew() {
  const navigation = (0, import_remix25.useNavigate)();
  const onClose = () => navigation(-1);
  const initialRef = React11.useRef();
  const transition = (0, import_remix25.useTransition)();
  const submitting = transition.state === "submitting";
  const actionData = (0, import_remix25.useActionData)();
  return /* @__PURE__ */ React11.createElement(React11.Fragment, null, /* @__PURE__ */ React11.createElement(import_react22.Modal, {
    initialFocusRef: initialRef,
    isOpen: true,
    onClose,
    isCentered: true,
    size: "xl"
  }, /* @__PURE__ */ React11.createElement(import_react22.ModalOverlay, {
    bg: "none",
    backdropFilter: "auto",
    backdropInvert: "80%",
    backdropBlur: "2px"
  }), /* @__PURE__ */ React11.createElement(import_react22.ModalContent, null, /* @__PURE__ */ React11.createElement(import_react22.ModalHeader, null, "Create new Label"), /* @__PURE__ */ React11.createElement(import_react22.ModalCloseButton, null), /* @__PURE__ */ React11.createElement(import_remix25.Form, {
    method: "post"
  }, /* @__PURE__ */ React11.createElement(import_react22.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React11.createElement(import_react22.FormControl, {
    isInvalid: actionData == null ? void 0 : actionData.errors.label.isInvalid
  }, /* @__PURE__ */ React11.createElement(import_react22.FormLabel, null, "Label"), /* @__PURE__ */ React11.createElement(import_react22.Input, {
    ref: initialRef,
    placeholder: "Label",
    type: "text",
    name: "label",
    isInvalid: actionData == null ? void 0 : actionData.errors.label.isInvalid
  }), /* @__PURE__ */ React11.createElement(import_react22.FormErrorMessage, null, actionData == null ? void 0 : actionData.errors.label.message))), /* @__PURE__ */ React11.createElement(import_react22.ModalFooter, null, /* @__PURE__ */ React11.createElement(import_react22.Button, {
    colorScheme: "blue",
    mr: 3,
    isLoading: submitting,
    loadingText: "Creating",
    type: "submit"
  }, "Create"), /* @__PURE__ */ React11.createElement(import_react22.Button, {
    onClick: onClose
  }, "Cancel"))))));
}

// route:/workspace/app/routes/redirect.tsx
var redirect_exports = {};
__export(redirect_exports, {
  action: () => action13,
  default: () => QuickCopy,
  loader: () => loader13,
  meta: () => meta9
});
init_react();
var React12 = __toESM(require("react"));
var import_react23 = require("@chakra-ui/react");
var import_remix26 = __toESM(require_remix());
var import_validator2 = __toESM(require("validator"));
var meta9 = () => {
  return {
    title: "Quick Redirect"
  };
};
var action13 = async ({ request }) => {
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
  return (0, import_remix26.redirect)("/redirect");
};
var loader13 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const quickRedirect = await prisma.user.findUnique({
    where: { email: user.email },
    select: { quickRedirect: true }
  });
  return (quickRedirect == null ? void 0 : quickRedirect.quickRedirect) ?? "";
};
function QuickCopy() {
  const [quickUrl, setQuickUrl] = React12.useState("");
  React12.useEffect(() => {
    const url2 = new URL(`${window.location.href}`);
    setQuickUrl(composeUrl(url2, {
      includePathname: false
    }) + "/r");
  }, []);
  const transition = (0, import_remix26.useTransition)();
  const saving = transition.state === "submitting";
  const actionData = (0, import_remix26.useActionData)();
  const url = (0, import_remix26.useLoaderData)();
  const toast = (0, import_react23.useToast)();
  const copy = () => {
    copyToClipboard(quickUrl, () => {
      toast({
        title: "URL successfully copied to clipboard",
        status: "success"
      });
    });
  };
  return /* @__PURE__ */ React12.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React12.createElement(PageTitle, null, /* @__PURE__ */ React12.createElement("h2", {
    className: "text-3xl font-bold"
  }, "Quick Redirect")), /* @__PURE__ */ React12.createElement(Wrapper, null, /* @__PURE__ */ React12.createElement(import_react23.VStack, {
    alignItems: "flex-start",
    w: "full",
    spacing: 8,
    mt: "8"
  }, /* @__PURE__ */ React12.createElement(import_remix26.Form, {
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ React12.createElement(import_react23.FormControl, {
    isInvalid: actionData == null ? void 0 : actionData.url.invalid
  }, /* @__PURE__ */ React12.createElement(import_react23.FormLabel, null, "URL"), /* @__PURE__ */ React12.createElement(import_react23.Input, {
    placeholder: "Url",
    name: "url",
    w: "full",
    defaultValue: url,
    isInvalid: actionData == null ? void 0 : actionData.url.invalid
  }), /* @__PURE__ */ React12.createElement(import_react23.FormErrorMessage, null, actionData == null ? void 0 : actionData.url.errorMessage)), /* @__PURE__ */ React12.createElement(import_react23.HStack, {
    mt: "2"
  }, /* @__PURE__ */ React12.createElement(import_react23.Button, {
    type: "submit",
    isLoading: saving,
    loadingText: "Saving"
  }, "Save"), /* @__PURE__ */ React12.createElement(import_react23.Button, {
    onClick: copy
  }, "Copy URL"), /* @__PURE__ */ React12.createElement(import_react23.Button, null, /* @__PURE__ */ React12.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, "Visit")))), /* @__PURE__ */ React12.createElement(import_react23.VStack, {
    w: "full",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React12.createElement("h2", null, "Shareable URL"), /* @__PURE__ */ React12.createElement("p", {
    className: "w-full p-4 border rounded-md"
  }, quickUrl), /* @__PURE__ */ React12.createElement(import_react23.HStack, null, /* @__PURE__ */ React12.createElement(import_react23.Button, {
    onClick: copy
  }, "Copy URL"), /* @__PURE__ */ React12.createElement(import_react23.Button, null, /* @__PURE__ */ React12.createElement("a", {
    href: quickUrl,
    target: "_blank",
    rel: "noreferrer"
  }, "Visit")))), /* @__PURE__ */ React12.createElement(import_react23.VStack, {
    alignItems: "flex-start",
    w: "full"
  }, /* @__PURE__ */ React12.createElement("h2", {
    className: "font-semibold"
  }, "URL QR code"), /* @__PURE__ */ React12.createElement(QRCode, {
    value: url
  })))));
}

// route:/workspace/app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile,
  meta: () => meta10
});
init_react();
var import_react24 = require("@chakra-ui/react");
var import_remix27 = __toESM(require_remix());
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
var meta10 = () => {
  return {
    title: "Profile"
  };
};
function Profile() {
  const location = (0, import_remix27.useLocation)();
  const textColor = (0, import_react24.useColorModeValue)("text-black", "text-white");
  const lightTextColor = (0, import_react24.useColorModeValue)("text-gray-400", "text-gray-600");
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(PageTitle, null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-bold"
  }, "Personal Account Settings")), /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_react24.Stack, {
    direction: ["column", "column", "row", "row"],
    alignItems: "flex-start",
    py: "10"
  }, /* @__PURE__ */ React.createElement(import_react24.VStack, {
    spacing: "4",
    w: "25%",
    alignItems: "flex-start",
    mb: [8, 8, 0, 0]
  }, links3.map((link) => /* @__PURE__ */ React.createElement(import_remix27.Link, {
    to: link.to,
    key: link.to,
    className: (0, import_clsx4.default)(textColor, {
      [lightTextColor]: !location.pathname.includes(link.to),
      "font-bold": location.pathname.includes(link.to)
    })
  }, link.title))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full lg:w-3/4"
  }, /* @__PURE__ */ React.createElement(import_remix27.Outlet, null)))));
}

// route:/workspace/app/routes/profile/general.tsx
var general_exports = {};
__export(general_exports, {
  default: () => General,
  loader: () => loader14,
  meta: () => meta11
});
init_react();
var import_react25 = require("@chakra-ui/react");
var import_remix28 = __toESM(require_remix());
var meta11 = () => {
  return {
    title: "Profile | General"
  };
};
var loader14 = async ({ request }) => {
  return authenticator.isAuthenticated(request, { failureRedirect: "/login" });
};
function General() {
  const user = (0, import_remix28.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react25.VStack, {
    spacing: 8
  }, user.profileUrl && /* @__PURE__ */ React.createElement(import_react25.Avatar, {
    name: user.name ?? user.email[0],
    src: user.profileUrl,
    size: "2xl"
  }), /* @__PURE__ */ React.createElement(import_react25.InputGroup, null, /* @__PURE__ */ React.createElement(import_react25.InputLeftAddon, {
    children: "Email"
  }), /* @__PURE__ */ React.createElement(import_react25.Input, {
    type: "text",
    placeholder: "Your email",
    defaultValue: user.email
  }))));
}

// route:/workspace/app/routes/profile/export.tsx
var export_exports = {};
__export(export_exports, {
  Item: () => Item,
  default: () => General2,
  loader: () => loader15,
  meta: () => meta12
});
init_react();
var import_icons2 = require("@chakra-ui/icons");
var import_react26 = require("@chakra-ui/react");
var import_remix29 = __toESM(require_remix());
var meta12 = () => {
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
var loader15 = async ({ request }) => {
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
  return (0, import_remix29.json)(data);
};
var ExportItem = ({ title, content, pathname }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-full p-4 border rounded-md gap-y-2"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-2 text-xl font-bold"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "p-4 break-words border rounded-md"
  }, content), /* @__PURE__ */ React.createElement(import_react26.Link, {
    href: `/export?name=${pathname}`,
    isExternal: true,
    download: pathname
  }, "Export ", /* @__PURE__ */ React.createElement(import_icons2.ExternalLinkIcon, {
    mx: "2px"
  })));
};
function General2() {
  const data = (0, import_remix29.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(import_react26.VStack, {
    alignItems: "flex-start",
    w: "full"
  }, /* @__PURE__ */ React.createElement(import_react26.VStack, {
    w: "full",
    spacing: 6
  }, exportItems.map((exportItem) => /* @__PURE__ */ React.createElement(ExportItem, __spreadProps(__spreadValues({}, exportItem), {
    key: exportItem.title
  }))), /* @__PURE__ */ React.createElement(import_react26.Link, {
    href: `/export?name=${"all" /* All */}`,
    isExternal: true,
    download: "all" /* All */
  }, "Export all ", /* @__PURE__ */ React.createElement(import_icons2.ExternalLinkIcon, {
    mx: "2px"
  })))));
}

// route:/workspace/app/routes/export.tsx
var export_exports2 = {};
__export(export_exports2, {
  loader: () => loader16,
  meta: () => meta13
});
init_react();
var import_remix30 = __toESM(require_remix());
var meta13 = () => {
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
var loader16 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, { failureRedirect: "/login" });
  const userData = await prisma.user.findUnique({ where: { id: user.id } });
  if (!userData) {
    return (0, import_remix30.redirect)("/login");
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
  action: () => action14,
  default: () => Logout,
  loader: () => loader17
});
init_react();
var import_remix31 = __toESM(require_remix());
var action14 = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/login" });
  const session = await getSession(request.headers.get("Cookie"));
  throw (0, import_remix31.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
var loader17 = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: "/login" });
  const session = await getSession(request.headers.get("Cookie"));
  throw (0, import_remix31.redirect)("/login", {
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
  default: () => CopyId,
  loader: () => loader18,
  meta: () => meta14
});
init_react();
var React13 = __toESM(require("react"));
var import_react27 = require("@chakra-ui/react");
var import_remix32 = __toESM(require_remix());
var meta14 = () => {
  return {
    title: "Quick Copy"
  };
};
var loader18 = async ({ request, params }) => {
  const clipboardContentId = params.id;
  if (!clipboardContentId) {
    throw (0, import_remix32.json)({ message: `Clipboard Content you're looking for does not exist` }, {
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
      throw (0, import_remix32.json)({ message: `Clipboard Content you're looking for does not exist` }, {
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
      throw (0, import_remix32.json)({ message: `Clipboard Content you're looking for does not exist` }, {
        status: 404
      });
    }
    return { content: currentUser.quickContent, title: "Quick Copy" };
  }
  const clipboardContent = await prisma.clipboardContent.findUnique({
    where: { id: Number(clipboardContentId) }
  });
  if (!clipboardContent) {
    throw (0, import_remix32.json)({ message: `Clipboard Content you're looking for does not exist` }, {
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
  const content = (0, import_remix32.useLoaderData)();
  const toast = (0, import_react27.useToast)();
  React13.useEffect(() => {
    copy();
  }, []);
  const copy = () => {
    copyToClipboard(content.content, () => {
      toast({
        title: "Successfully copied to clipboard",
        status: "success"
      });
    });
  };
  return /* @__PURE__ */ React13.createElement("div", null, /* @__PURE__ */ React13.createElement(PageTitle, null, /* @__PURE__ */ React13.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React13.createElement("h2", {
    className: "text-3xl font-bold"
  }, content.title), /* @__PURE__ */ React13.createElement(import_react27.Button, {
    onClick: () => copy(),
    ml: "auto"
  }, "Copy"))), /* @__PURE__ */ React13.createElement(Wrapper, null, /* @__PURE__ */ React13.createElement(import_react27.VStack, {
    alignItems: "flex-start",
    py: "6",
    spacing: 6
  }, /* @__PURE__ */ React13.createElement("p", {
    className: "mt-4"
  }, "The content below is automatically copied."), /* @__PURE__ */ React13.createElement("p", {
    className: "w-full p-4 border rounded-md"
  }, content.content))));
}

// route:/workspace/app/routes/index.ts
var routes_exports = {};
__export(routes_exports, {
  default: () => Copy2,
  loader: () => loader19
});
init_react();
var import_remix33 = __toESM(require_remix());
var loader19 = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return (0, import_remix33.redirect)("/home");
};
function Copy2() {
  return null;
}

// route:/workspace/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => SimpleCard,
  loader: () => loader20,
  meta: () => meta15
});
init_react();
var import_react28 = require("@chakra-ui/react");
var import_remix34 = __toESM(require_remix());
var import_bs3 = require("react-icons/bs");
var meta15 = () => {
  return {
    title: "Clipi | Sign up (or in)"
  };
};
var loader20 = async ({ request }) => {
  await authenticator.isAuthenticated(request, { successRedirect: "/" });
  return null;
};
function SimpleCard() {
  const githubAuthFetcher = (0, import_remix34.useFetcher)();
  const googleAuthFetcher = (0, import_remix34.useFetcher)();
  const isGithubAuthenticating = githubAuthFetcher.state === "submitting";
  const isGoogleAuthenticating = googleAuthFetcher.state === "submitting";
  return /* @__PURE__ */ React.createElement(import_react28.Stack, {
    minH: "100vh",
    direction: { base: "column", md: "row" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center flex-1 p-8"
  }, /* @__PURE__ */ React.createElement(import_react28.Stack, {
    spacing: 4,
    w: "full",
    maxW: "md"
  }, /* @__PURE__ */ React.createElement(import_react28.Heading, {
    fontSize: "2xl",
    mb: "4"
  }, "Sign in to your account"), /* @__PURE__ */ React.createElement(import_react28.Stack, {
    spacing: 4
  }, /* @__PURE__ */ React.createElement(githubAuthFetcher.Form, {
    action: "/auth/github",
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_react28.Button, {
    isLoading: isGithubAuthenticating,
    loadingText: "Authenticating",
    colorScheme: "telegram",
    variant: "solid",
    w: "full",
    leftIcon: /* @__PURE__ */ React.createElement(import_bs3.BsGithub, null),
    type: "submit"
  }, "Sign In (or up) with Github")), /* @__PURE__ */ React.createElement(import_react28.Text, {
    textAlign: "center",
    color: "gray.300"
  }, "Or"), /* @__PURE__ */ React.createElement(googleAuthFetcher.Form, {
    action: "/auth/google",
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_react28.Button, {
    isLoading: isGoogleAuthenticating,
    loadingText: "Authenticating",
    colorScheme: "telegram",
    variant: "solid",
    w: "full",
    leftIcon: /* @__PURE__ */ React.createElement(import_bs3.BsGoogle, null),
    type: "submit"
  }, "Sign In (or up) with Google"))))), /* @__PURE__ */ React.createElement(import_react28.Flex, {
    flex: 1
  }, /* @__PURE__ */ React.createElement(import_react28.Image, {
    alt: "Login Image",
    objectFit: "cover",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
  })));
}

// route:/workspace/app/routes/copy.tsx
var copy_exports = {};
__export(copy_exports, {
  action: () => action15,
  default: () => QuickCopy2,
  loader: () => loader21,
  meta: () => meta16
});
init_react();
var React14 = __toESM(require("react"));
var import_react29 = require("@chakra-ui/react");
var import_remix35 = __toESM(require_remix());
var meta16 = () => {
  return {
    title: "Quick Copy"
  };
};
var action15 = async ({ request }) => {
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
  return (0, import_remix35.redirect)("/copy");
};
var loader21 = async ({ request }) => {
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
  const [url, setUrl] = React14.useState("");
  const transition = (0, import_remix35.useTransition)();
  const saving = transition.state === "submitting";
  React14.useEffect(() => {
    const url2 = new URL(`${window.location.href}/c/q`);
    setUrl(composeUrl(url2));
  }, []);
  const content = (0, import_remix35.useLoaderData)();
  const toast = (0, import_react29.useToast)();
  const copy = () => {
    copyToClipboard(url, () => {
      toast({
        title: "URL successfully copied to clipboard",
        status: "success"
      });
    });
  };
  return /* @__PURE__ */ React14.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React14.createElement(PageTitle, null, /* @__PURE__ */ React14.createElement("h2", {
    className: "text-3xl font-bold"
  }, "Quick Copy")), /* @__PURE__ */ React14.createElement(Wrapper, null, /* @__PURE__ */ React14.createElement(import_react29.VStack, {
    alignItems: "flex-start",
    w: "full",
    mt: "8",
    spacing: 8
  }, /* @__PURE__ */ React14.createElement(import_remix35.Form, {
    method: "post",
    className: "w-full"
  }, /* @__PURE__ */ React14.createElement(import_react29.FormControl, null, /* @__PURE__ */ React14.createElement(import_react29.FormLabel, null, "Content"), /* @__PURE__ */ React14.createElement(import_react29.Textarea, {
    placeholder: "Title",
    name: "content",
    defaultValue: content
  })), /* @__PURE__ */ React14.createElement(import_react29.Button, {
    type: "submit",
    isLoading: saving,
    loadingText: "Saving",
    mt: "2"
  }, "Save")), /* @__PURE__ */ React14.createElement(import_react29.VStack, {
    w: "full",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React14.createElement("h2", null, "Shareable URL"), /* @__PURE__ */ React14.createElement("p", {
    className: "w-full p-4 border rounded-md"
  }, url), /* @__PURE__ */ React14.createElement(import_react29.HStack, null, /* @__PURE__ */ React14.createElement(import_react29.Button, {
    onClick: copy
  }, "Copy URL"), /* @__PURE__ */ React14.createElement(import_react29.Button, null, /* @__PURE__ */ React14.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, "Visit")))), /* @__PURE__ */ React14.createElement(import_react29.Tabs, {
    w: "full"
  }, /* @__PURE__ */ React14.createElement(import_react29.TabList, null, /* @__PURE__ */ React14.createElement(import_react29.Tab, null, "Content QR code"), /* @__PURE__ */ React14.createElement(import_react29.Tab, null, "Shareable link QR code")), /* @__PURE__ */ React14.createElement(import_react29.TabPanels, null, /* @__PURE__ */ React14.createElement(import_react29.TabPanel, null, /* @__PURE__ */ React14.createElement(QRCode, {
    value: content
  })), /* @__PURE__ */ React14.createElement(import_react29.TabPanel, null, /* @__PURE__ */ React14.createElement(QRCode, {
    value: url
  })))))));
}

// route:/workspace/app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Index,
  loader: () => loader22,
  meta: () => meta17
});
init_react();
var import_react30 = require("@chakra-ui/react");
var import_remix36 = __toESM(require_remix());
var meta17 = () => {
  return {
    title: "Home"
  };
};
var loader22 = async ({ request }) => {
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
  return (0, import_remix36.json)({ todos: todos ?? [], votes: votes ?? [] });
};
function Index() {
  const data = (0, import_remix36.useLoaderData)();
  const borderColor = (0, import_react30.useColorModeValue)("gray.200", "gray.800");
  const incompleteTask = data.todos.reduce((acc, current) => {
    if (current.completed) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full py-8"
  }, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_react30.VStack, {
    alignItems: "flex-start",
    w: "full",
    spacing: 6
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between pb-2 mb-4 border-b"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-bold"
  }, "Todos"), /* @__PURE__ */ React.createElement(import_react30.HStack, null, /* @__PURE__ */ React.createElement(import_react30.Tag, null, incompleteTask), /* @__PURE__ */ React.createElement("span", null, "/"), /* @__PURE__ */ React.createElement(import_react30.Tag, {
    colorScheme: "cyan"
  }, data.todos.length, " completed"))), /* @__PURE__ */ React.createElement(import_react30.VStack, {
    alignItems: "flex-start",
    divider: /* @__PURE__ */ React.createElement(import_react30.StackDivider, {
      borderColor
    })
  }, data.todos.map((todo) => /* @__PURE__ */ React.createElement(Todo, __spreadProps(__spreadValues({}, todo), {
    key: todo.id
  })))), data.todos.length === 0 && /* @__PURE__ */ React.createElement(NoItems, {
    title: "No todos for today!!!"
  })), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between pb-2 mb-4 border-b"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-bold"
  }, "Habits Rank")), /* @__PURE__ */ React.createElement(import_react30.VStack, {
    alignItems: "flex-start",
    divider: /* @__PURE__ */ React.createElement(import_react30.StackDivider, {
      borderColor
    })
  }, data.votes.map((vote) => /* @__PURE__ */ React.createElement(Vote, __spreadProps(__spreadValues({}, vote), {
    key: vote.id
  })))), data.votes.length === 0 && /* @__PURE__ */ React.createElement(NoItems, {
    title: "No habit rank votes found for today!!!"
  })))));
}

// route:/workspace/app/routes/todo.tsx
var todo_exports = {};
__export(todo_exports, {
  default: () => Todo2,
  loader: () => loader23,
  meta: () => meta18
});
init_react();
var import_react31 = require("@chakra-ui/react");
var import_moment6 = __toESM(require("moment"));
var import_io3 = require("react-icons/io");
var import_ri4 = require("react-icons/ri");
var import_io4 = require("react-icons/io");
var import_ri5 = require("react-icons/ri");
var import_remix37 = __toESM(require_remix());
var meta18 = () => {
  return {
    title: "Todo"
  };
};
var loader23 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const filterBy = url.searchParams.get("filterBy") ?? "showall" /* SHOW_ALL */;
  const sortBy = url.searchParams.get("sortBy") ?? "latest" /* LATEST */;
  const show = url.searchParams.get("show") ?? "pending";
  const dueDate = (0, import_moment6.default)().format("YYYY-MM-DD");
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
  if (show === "completed") {
    addiontalQuery = __spreadValues({}, addiontalQuery);
  } else {
    addiontalQuery = __spreadProps(__spreadValues({}, addiontalQuery), {
      completed: false
    });
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
    return (0, import_remix37.json)({ todo: searchMatchResult, filterBy, sortBy });
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
  return (0, import_remix37.json)({ todo, filterBy, sortBy, show });
};
function Todo2() {
  const navigation = (0, import_remix37.useNavigate)();
  const { todo, filterBy, sortBy, show } = (0, import_remix37.useLoaderData)();
  const submit = (0, import_remix37.useSubmit)();
  const borderColor = (0, import_react31.useColorModeValue)("gray.200", "gray.800");
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full py-8"
  }, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(import_remix37.Form, {
    className: "flex items-center justify-between w-full",
    method: "get",
    onChange: (target) => submit(target.currentTarget),
    onReset: (target) => submit(target.currentTarget)
  }, /* @__PURE__ */ React.createElement(import_react31.VStack, {
    w: "full"
  }, /* @__PURE__ */ React.createElement(import_react31.Stack, {
    direction: ["column", "column", "row", "row"],
    justifyContent: ["flex-start"],
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_react31.InputGroup, {
    size: "md"
  }, /* @__PURE__ */ React.createElement(import_react31.InputLeftElement, {
    pointerEvents: "none",
    children: /* @__PURE__ */ React.createElement(import_ri4.RiSearchLine, {
      color: "gray.300"
    })
  }), /* @__PURE__ */ React.createElement(import_react31.Input, {
    pr: "4.5rem",
    type: "text",
    name: "q",
    placeholder: "Search..."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_react31.HStack, {
    flex: "2",
    justifyContent: "flex-start",
    w: "100%"
  }, /* @__PURE__ */ React.createElement(import_react31.Select, {
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
  }, "Overdue")), /* @__PURE__ */ React.createElement(import_react31.Select, {
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
  }, "Last updated")), /* @__PURE__ */ React.createElement(import_react31.Menu, null, /* @__PURE__ */ React.createElement(import_react31.MenuButton, {
    as: import_react31.IconButton,
    "aria-label": "Options",
    icon: /* @__PURE__ */ React.createElement(import_io4.IoIosOptions, null),
    variant: "outline"
  }), /* @__PURE__ */ React.createElement(import_react31.MenuList, null, /* @__PURE__ */ React.createElement(import_react31.MenuItem, null, /* @__PURE__ */ React.createElement(import_react31.FormControl, {
    display: "flex",
    alignItems: "center",
    width: "initial"
  }, /* @__PURE__ */ React.createElement(import_react31.FormLabel, {
    htmlFor: "show-completed",
    mb: "0"
  }, "Show completed"), /* @__PURE__ */ React.createElement(import_react31.Switch, {
    id: "show-completed",
    defaultChecked: show === "completed" ? true : false,
    name: "show",
    value: "completed"
  })))))))), /* @__PURE__ */ React.createElement(import_react31.HStack, {
    w: "full",
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_react31.Button, {
    leftIcon: /* @__PURE__ */ React.createElement(import_io3.IoMdAdd, null),
    variant: "outline",
    colorScheme: "twitter",
    w: ["full", "full", "initial", "initial"],
    size: "md",
    onClick: () => navigation("/todo/new")
  }, "Add"), /* @__PURE__ */ React.createElement(import_react31.Button, {
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
  })), /* @__PURE__ */ React.createElement(import_react31.VStack, {
    alignItems: "flex-start",
    mt: "8",
    divider: /* @__PURE__ */ React.createElement(import_react31.StackDivider, {
      borderColor
    })
  }, todo.length > 0 && todo.map((todo2) => {
    return /* @__PURE__ */ React.createElement(Todo, __spreadProps(__spreadValues({}, todo2), {
      key: todo2.id
    }));
  }))), /* @__PURE__ */ React.createElement(import_remix37.Outlet, null));
}

// route:/workspace/app/routes/todo/$id/reschedule.tsx
var reschedule_exports = {};
__export(reschedule_exports, {
  action: () => action16,
  default: () => Delete3,
  loader: () => loader24
});
init_react();
var import_remix38 = __toESM(require_remix());
var import_zod4 = require("zod");
var import_moment7 = __toESM(require("moment"));
var DueDateSchema = import_zod4.z.date();
var action16 = async ({ request, params }) => {
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
    throw (0, import_remix38.redirect)("/todo");
  }
  if (todo.userEmail !== user.email) {
    throw (0, import_remix38.json)({ message: "You are not authorized to edit this content" }, { status: 401 });
  }
  const formData = await request.formData();
  const dueDate = formData.get("dueDate") ? new Date(String(formData.get("dueDate"))) : void 0;
  const dueDateValidationResult = DueDateSchema.safeParse(dueDate);
  if (!dueDateValidationResult.success) {
    return (0, import_remix38.json)({ success: false, message: "Invalid due date passed. Please pass valid due date." });
  }
  try {
    await prisma.todo.update({
      where: {
        id: String(params.id)
      },
      data: {
        dueDate: (0, import_moment7.default)(dueDateValidationResult.data).format("YYYY-MM-DD")
      }
    });
    return (0, import_remix38.json)({ success: true });
  } catch (err) {
    return (0, import_remix38.json)({ success: false, message: "Updating due date failed" });
  }
};
var loader24 = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
};
function Delete3() {
  return null;
}

// route:/workspace/app/routes/todo/$id/edit.temp.tsx
var edit_temp_exports = {};
__export(edit_temp_exports, {
  action: () => action17,
  default: () => TodoEdit,
  loader: () => loader25,
  meta: () => meta19
});
init_react();
var React15 = __toESM(require("react"));
var import_remix39 = __toESM(require_remix());
var import_react32 = require("@chakra-ui/react");
var import_zod5 = require("zod");
var import_moment8 = __toESM(require("moment"));
var import_react_select = __toESM(require("react-select"));
var TodoSchema = import_zod5.z.object({
  title: import_zod5.z.string().min(5).max(500),
  description: import_zod5.z.string().max(150).optional(),
  completed: import_zod5.z.boolean().optional(),
  dueDate: import_zod5.z.date().optional(),
  labels: import_zod5.z.array(import_zod5.z.number()).optional()
});
var meta19 = () => {
  return {
    title: "Todo | Edit"
  };
};
var composeLabels = (labels) => {
  if (!Array.isArray(labels)) {
    return [];
  }
  return labels.filter((label) => label).map((label) => +label);
};
var action17 = async ({ request, params }) => {
  var _a;
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const formData = await request.formData();
  const actionData = {
    values: {},
    errors: {
      title: { isInvalid: true, message: "" },
      description: { isInvalid: true, message: "" },
      completed: { isInvalid: true, message: "" },
      dueDate: { isInvalid: true, message: "" },
      labels: { isInvalid: true, message: "" }
    }
  };
  const todoData = {
    title: String(formData.get("title")),
    description: String(formData.get("description")),
    completed: formData.get("completed") === "true" ? true : false,
    dueDate: formData.get("dueDate") ? new Date(String(formData.get("dueDate"))) : void 0,
    labels: composeLabels(formData.getAll("labels"))
  };
  const todoValidationResult = TodoSchema.safeParse(todoData);
  if (!todoValidationResult.success) {
    actionData.values = __spreadValues({}, todoData);
    actionData.errors = __spreadValues({}, formatFieldErrorsNew(todoData, todoValidationResult.error.formErrors.fieldErrors));
    return actionData;
  }
  const payload = {
    description: todoValidationResult.data.description,
    title: todoValidationResult.data.title,
    completed: todoValidationResult.data.completed,
    dueDate: todoValidationResult.data.dueDate ? (0, import_moment8.default)(todoValidationResult.data.dueDate.toLocaleDateString()).format("YYYY-MM-DD") : (0, import_moment8.default)().format("YYYY-MM-DD")
  };
  try {
    await prisma.todo.update({
      where: {
        id: String(params.id)
      },
      data: __spreadProps(__spreadValues({}, payload), {
        userEmail: user.email,
        labels: {
          createMany: {
            data: ((_a = todoValidationResult.data.labels) == null ? void 0 : _a.map((label) => ({ labelId: label }))) ?? []
          }
        }
      })
    });
    return (0, import_remix39.redirect)(`/todo`);
  } catch {
    throw (0, import_remix39.redirect)("/");
  }
};
var loader25 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const todo = await prisma.todo.findUnique({
    where: {
      id: String(params.id)
    }
  });
  const labels = await prisma.label.findMany({
    where: {
      userEmail: user.email
    }
  });
  if (!todo) {
    throw (0, import_remix39.json)({ message: `The todo you're looking for doesn't exists` }, { status: 404 });
  }
  if (todo.userEmail !== user.email) {
    throw (0, import_remix39.json)({ message: `Unauthorized access. You're not allowed to see this todo` }, { status: 401 });
  }
  return (0, import_remix39.json)({ todo, labels });
};
function TodoEdit() {
  const navigation = (0, import_remix39.useNavigate)();
  const onClose = () => navigation(-1);
  const initialRef = React15.useRef();
  const transition = (0, import_remix39.useTransition)();
  const submitting = transition.state === "submitting";
  const actionData = (0, import_remix39.useActionData)();
  const data = (0, import_remix39.useLoaderData)();
  return /* @__PURE__ */ React15.createElement(React15.Fragment, null, /* @__PURE__ */ React15.createElement(import_react32.Modal, {
    initialFocusRef: initialRef,
    isOpen: true,
    onClose,
    isCentered: true,
    size: "3xl"
  }, /* @__PURE__ */ React15.createElement(import_react32.ModalOverlay, {
    bg: "none",
    backdropFilter: "auto",
    backdropInvert: "80%",
    backdropBlur: "2px"
  }), /* @__PURE__ */ React15.createElement(import_react32.ModalContent, null, /* @__PURE__ */ React15.createElement(import_react32.ModalHeader, null, "Create new Todo"), /* @__PURE__ */ React15.createElement(import_react32.ModalCloseButton, null), /* @__PURE__ */ React15.createElement(import_remix39.Form, {
    method: "post"
  }, /* @__PURE__ */ React15.createElement(import_react32.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React15.createElement(import_react32.FormControl, {
    isInvalid: actionData == null ? void 0 : actionData.errors.title.isInvalid
  }, /* @__PURE__ */ React15.createElement(import_react32.FormLabel, null, "Title"), /* @__PURE__ */ React15.createElement(import_react32.Input, {
    ref: initialRef,
    placeholder: "Title",
    type: "text",
    name: "title",
    defaultValue: data.todo.title,
    isInvalid: actionData == null ? void 0 : actionData.errors.title.isInvalid
  }), /* @__PURE__ */ React15.createElement(import_react32.FormErrorMessage, null, actionData == null ? void 0 : actionData.errors.title.message)), /* @__PURE__ */ React15.createElement(import_react32.FormControl, {
    mt: 4,
    isInvalid: actionData == null ? void 0 : actionData.errors.description.isInvalid
  }, /* @__PURE__ */ React15.createElement(import_react32.FormLabel, null, "Description"), /* @__PURE__ */ React15.createElement(import_react32.Textarea, {
    isRequired: false,
    defaultValue: String(data.todo.description) ?? "",
    name: "description",
    placeholder: "Description...",
    isInvalid: actionData == null ? void 0 : actionData.errors.description.isInvalid
  }), /* @__PURE__ */ React15.createElement(import_react32.FormErrorMessage, null, actionData == null ? void 0 : actionData.errors.description.message)), /* @__PURE__ */ React15.createElement(import_react32.FormControl, {
    mt: 4,
    isInvalid: actionData == null ? void 0 : actionData.errors.labels.isInvalid
  }, /* @__PURE__ */ React15.createElement(import_react32.FormLabel, {
    htmlFor: "labels"
  }, "Labels"), /* @__PURE__ */ React15.createElement(import_react_select.default, {
    isMulti: true,
    name: "labels",
    options: data.labels.map((label) => {
      return {
        label: label.label,
        value: label.id
      };
    })
  })), /* @__PURE__ */ React15.createElement(import_react32.FormControl, {
    mt: 4,
    isInvalid: actionData == null ? void 0 : actionData.errors.completed.isInvalid
  }, /* @__PURE__ */ React15.createElement(import_react32.FormLabel, null, "Completed"), /* @__PURE__ */ React15.createElement(import_react32.Select, {
    name: "completed",
    placeholder: "Select option",
    defaultValue: String(data.todo.completed) ?? "false",
    isInvalid: actionData == null ? void 0 : actionData.errors.completed.isInvalid
  }, /* @__PURE__ */ React15.createElement("option", {
    value: "true"
  }, "True"), /* @__PURE__ */ React15.createElement("option", {
    value: "false"
  }, "False")), /* @__PURE__ */ React15.createElement(import_react32.FormErrorMessage, null, actionData == null ? void 0 : actionData.errors.completed.message)), /* @__PURE__ */ React15.createElement(import_react32.FormControl, {
    mt: 4,
    isInvalid: actionData == null ? void 0 : actionData.errors.dueDate.isInvalid
  }, /* @__PURE__ */ React15.createElement(import_react32.FormLabel, {
    htmlFor: "isChecked"
  }, "Due date"), /* @__PURE__ */ React15.createElement(import_react32.Input, {
    name: "dueDate",
    isRequired: false,
    type: "date",
    defaultValue: (0, import_moment8.default)(data.todo.dueDate).format("YYYY-MM-DD"),
    isInvalid: actionData == null ? void 0 : actionData.errors.dueDate.isInvalid
  }), /* @__PURE__ */ React15.createElement(import_react32.FormErrorMessage, null, actionData == null ? void 0 : actionData.errors.dueDate.message))), /* @__PURE__ */ React15.createElement(import_react32.ModalFooter, null, /* @__PURE__ */ React15.createElement(import_react32.Button, {
    colorScheme: "blue",
    mr: 3,
    isLoading: submitting,
    loadingText: "Saving",
    type: "submit"
  }, "Save"), /* @__PURE__ */ React15.createElement(import_react32.Button, {
    onClick: onClose
  }, "Cancel"))))));
}

// route:/workspace/app/routes/todo/$id/delete.tsx
var delete_exports3 = {};
__export(delete_exports3, {
  action: () => action18,
  default: () => Delete4,
  meta: () => meta20
});
init_react();
var import_remix40 = __toESM(require_remix());
var meta20 = () => {
  return {
    title: "Todo | Delete"
  };
};
var action18 = async ({ request, params }) => {
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
  return (0, import_remix40.redirect)("/todo");
};
function Delete4() {
  return /* @__PURE__ */ React.createElement(DeleteDialog, {
    title: "Delete Todo",
    message: "Are you sure to delete this Todo?"
  });
}

// route:/workspace/app/routes/todo/$id/edit.tsx
var edit_exports3 = {};
__export(edit_exports3, {
  action: () => action19,
  default: () => TodoEdit2,
  loader: () => loader26,
  meta: () => meta21
});
init_react();

// app/types/todo.ts
init_react();
var import_client5 = require("@prisma/client");
var import_zod6 = require("zod");
var TodoSchema2 = import_zod6.z.object({
  title: import_zod6.z.string().min(5).max(200),
  description: import_zod6.z.string().max(500).optional(),
  completed: import_zod6.z.boolean().optional(),
  dueDate: import_zod6.z.date().optional(),
  priority: import_zod6.z.nativeEnum(import_client5.Priority).optional()
});

// route:/workspace/app/routes/todo/$id/edit.tsx
var import_remix41 = __toESM(require_remix());
var import_react33 = require("@chakra-ui/react");
var import_moment9 = __toESM(require("moment"));
var meta21 = () => {
  return {
    title: "Todo | Edit"
  };
};
var action19 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const id = params.id;
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) {
    throw (0, import_remix41.redirect)("/todo");
  }
  if (todo.userEmail !== user.email) {
    throw (0, import_remix41.json)({ message: "You are not authorized to edit this content" }, { status: 401 });
  }
  const formData = await request.formData();
  const todoData = getFormData(formData, [
    { key: "title" },
    { key: "description" },
    { key: "completed", defaultValue: false },
    { key: "dueDate", compose: (value) => value ? new Date(String(value)) : void 0 },
    { key: "priority", compose: (value) => composePriority(String(value)) }
  ]);
  const todoValidationResult = TodoSchema2.safeParse(todoData);
  if (!todoValidationResult.success) {
    return getFinalFormData(todoData, todoValidationResult.error.formErrors.fieldErrors);
  }
  const payload = {
    description: todoValidationResult.data.description,
    title: todoValidationResult.data.title,
    completed: todoValidationResult.data.completed,
    dueDate: todoValidationResult.data.dueDate ? (0, import_moment9.default)(todoValidationResult.data.dueDate.toLocaleDateString()).format("YYYY-MM-DD") : (0, import_moment9.default)().format("YYYY-MM-DD"),
    priority: todoValidationResult.data.priority
  };
  try {
    await prisma.todo.update({
      where: {
        id: String(params.id)
      },
      data: __spreadProps(__spreadValues({}, payload), { userEmail: user.email })
    });
    return (0, import_remix41.redirect)(`/todo`);
  } catch {
    throw (0, import_remix41.redirect)("/");
  }
};
var loader26 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const todo = await prisma.todo.findUnique({
    where: {
      id: String(params.id)
    }
  });
  if (!todo) {
    throw (0, import_remix41.json)({ message: `The todo you're looking for doesn't exists` }, { status: 404 });
  }
  if (todo.userEmail !== user.email) {
    throw (0, import_remix41.json)({ message: `Unauthorized access. You're not allowed to see this todo` }, { status: 401 });
  }
  return (0, import_remix41.json)(todo);
};
function TodoEdit2() {
  const navigation = (0, import_remix41.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix41.useActionData)();
  const todo = (0, import_remix41.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(import_react33.ModalHeader, null, "Edit Todo"), /* @__PURE__ */ React.createElement(import_react33.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react33.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(TodoForm, __spreadValues({}, todoFormProps))));
}

// route:/workspace/app/routes/todo/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  action: () => action20,
  default: () => TodoNew2,
  loader: () => loader27,
  meta: () => meta22
});
init_react();
var import_remix42 = __toESM(require_remix());
var import_react34 = require("@chakra-ui/react");
var import_moment10 = __toESM(require("moment"));
var meta22 = () => {
  return {
    title: "Todo | New"
  };
};
var action20 = async ({ request }) => {
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
  const todoValidationResult = TodoSchema2.safeParse(todoData);
  if (!todoValidationResult.success) {
    return getFinalFormData(todoData, todoValidationResult.error.formErrors.fieldErrors);
  }
  const payload = {
    description: todoValidationResult.data.description,
    title: todoValidationResult.data.title,
    completed: todoValidationResult.data.completed,
    dueDate: todoValidationResult.data.dueDate ? (0, import_moment10.default)(todoValidationResult.data.dueDate.toLocaleDateString()).format("YYYY-MM-DD") : (0, import_moment10.default)().format("YYYY-MM-DD"),
    priority: todoValidationResult.data.priority
  };
  try {
    await prisma.todo.create({
      data: __spreadProps(__spreadValues({}, payload), {
        userEmail: user.email
      })
    });
    return (0, import_remix42.redirect)(`/todo`);
  } catch {
    throw (0, import_remix42.redirect)("/");
  }
};
var loader27 = async ({ request }) => {
  return authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
};
function TodoNew2() {
  const navigation = (0, import_remix42.useNavigate)();
  const onClose = () => navigation(-1);
  const actionData = (0, import_remix42.useActionData)();
  const todoFormProps = __spreadProps(__spreadValues({}, actionData), {
    submittingText: "Creating",
    okButtonText: "Create"
  });
  return /* @__PURE__ */ React.createElement(Dialog, {
    isOpen: true,
    onClose
  }, /* @__PURE__ */ React.createElement(import_react34.ModalHeader, null, "Create new Todo"), /* @__PURE__ */ React.createElement(import_react34.ModalCloseButton, null), /* @__PURE__ */ React.createElement(import_react34.ModalBody, {
    pb: 6
  }, /* @__PURE__ */ React.createElement(TodoForm, __spreadValues({}, todoFormProps))));
}

// route:/workspace/app/routes/r.tsx
var r_exports = {};
__export(r_exports, {
  default: () => Redirect,
  loader: () => loader28
});
init_react();
var import_remix43 = __toESM(require_remix());
var loader28 = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  const quickRedirect = await prisma.user.findUnique({
    where: { email: user.email },
    select: { quickRedirect: true }
  });
  if (quickRedirect == null ? void 0 : quickRedirect.quickRedirect) {
    return (0, import_remix43.redirect)(quickRedirect == null ? void 0 : quickRedirect.quickRedirect);
  }
  return (0, import_remix43.redirect)("/");
};
function Redirect() {
  return null;
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "11c465c0", "entry": { "module": "/build/entry.client-ZHQ7MIQD.js", "imports": ["/build/_shared/chunk-HSOWRK2U.js", "/build/_shared/chunk-VF3ZZLCR.js", "/build/_shared/chunk-VQYBAUSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-XGXCCD5W.js", "imports": ["/build/_shared/chunk-FDK6JIQN.js", "/build/_shared/chunk-YXYVSVEQ.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/auth/github": { "id": "routes/auth/github", "parentId": "root", "path": "auth/github", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/github-QF4ZDZXO.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/github/callback": { "id": "routes/auth/github/callback", "parentId": "routes/auth/github", "path": "callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/github/callback-AKQ2FMDI.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/google": { "id": "routes/auth/google", "parentId": "root", "path": "auth/google", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/google-4JDIQLK3.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/google/callback": { "id": "routes/auth/google/callback", "parentId": "routes/auth/google", "path": "callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/google/callback-4X3UQPQR.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/c.$id": { "id": "routes/c.$id", "parentId": "root", "path": "c/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/c.$id-UQZOSTZ2.js", "imports": ["/build/_shared/chunk-QGNHCIHD.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clipboard": { "id": "routes/clipboard", "parentId": "root", "path": "clipboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard-WU673W5N.js", "imports": ["/build/_shared/chunk-EE64EVJW.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clipboard.$id": { "id": "routes/clipboard.$id", "parentId": "root", "path": "clipboard/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard.$id-BAZGYH7N.js", "imports": ["/build/_shared/chunk-QGNHCIHD.js", "/build/_shared/chunk-JI4VZW65.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clipboard.$id/delete": { "id": "routes/clipboard.$id/delete", "parentId": "routes/clipboard.$id", "path": "delete", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard.$id/delete-7NHS6YIS.js", "imports": ["/build/_shared/chunk-FDK6JIQN.js", "/build/_shared/chunk-YXYVSVEQ.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clipboard.$id/edit": { "id": "routes/clipboard.$id/edit", "parentId": "routes/clipboard.$id", "path": "edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard.$id/edit-WDV6EYID.js", "imports": ["/build/_shared/chunk-FDK6JIQN.js", "/build/_shared/chunk-YXYVSVEQ.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clipboard/new": { "id": "routes/clipboard/new", "parentId": "routes/clipboard", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clipboard/new-SATF3TN7.js", "imports": ["/build/_shared/chunk-FDK6JIQN.js", "/build/_shared/chunk-YXYVSVEQ.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/copy": { "id": "routes/copy", "parentId": "root", "path": "copy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/copy-EELKG4UD.js", "imports": ["/build/_shared/chunk-QGNHCIHD.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/export": { "id": "routes/export", "parentId": "root", "path": "export", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/export-ZTCCXAGK.js", "imports": ["/build/_shared/chunk-LEIAFRPR.js", "/build/_shared/chunk-JI4VZW65.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/habits-rank": { "id": "routes/habits-rank", "parentId": "root", "path": "habits-rank", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank-EP6K46YN.js", "imports": ["/build/_shared/chunk-EE64EVJW.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/habits-rank/vote/$id/delete": { "id": "routes/habits-rank/vote/$id/delete", "parentId": "routes/habits-rank", "path": "vote/:id/delete", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank/vote/$id/delete-ZRCJGR42.js", "imports": ["/build/_shared/chunk-FDK6JIQN.js", "/build/_shared/chunk-YXYVSVEQ.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/habits-rank/vote/$id/downvote": { "id": "routes/habits-rank/vote/$id/downvote", "parentId": "routes/habits-rank", "path": "vote/:id/downvote", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank/vote/$id/downvote-P67ZUEM7.js", "imports": ["/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/habits-rank/vote/$id/edit": { "id": "routes/habits-rank/vote/$id/edit", "parentId": "routes/habits-rank", "path": "vote/:id/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank/vote/$id/edit-YXTB6BOK.js", "imports": ["/build/_shared/chunk-FDK6JIQN.js", "/build/_shared/chunk-YXYVSVEQ.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/habits-rank/vote/$id/upvote": { "id": "routes/habits-rank/vote/$id/upvote", "parentId": "routes/habits-rank", "path": "vote/:id/upvote", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/habits-rank/vote/$id/upvote-X6I2YQEX.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-SUSUNM4S.js", "imports": ["/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-K2NCGWXH.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/label.new": { "id": "routes/label.new", "parentId": "root", "path": "label/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/label.new-QEO32NHC.js", "imports": ["/build/_shared/chunk-WIVCPSQY.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-WBV73VAI.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-WJDZIO6D.js", "imports": ["/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-PX4NMBI3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile/export": { "id": "routes/profile/export", "parentId": "routes/profile", "path": "export", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile/export-EXNB4L6K.js", "imports": ["/build/_shared/chunk-LEIAFRPR.js", "/build/_shared/chunk-JI4VZW65.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile/general": { "id": "routes/profile/general", "parentId": "routes/profile", "path": "general", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile/general-DSLBDSG5.js", "imports": ["/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/r": { "id": "routes/r", "parentId": "root", "path": "r", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/r-4ZKBV4OG.js", "imports": ["/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/redirect": { "id": "routes/redirect", "parentId": "root", "path": "redirect", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/redirect-PC5C25YC.js", "imports": ["/build/_shared/chunk-QGNHCIHD.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo": { "id": "routes/todo", "parentId": "root", "path": "todo", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo-N6GZQCMF.js", "imports": ["/build/_shared/chunk-EE64EVJW.js", "/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo.$id/toggle": { "id": "routes/todo.$id/toggle", "parentId": "root", "path": "todo/:id/toggle", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo.$id/toggle-7WFRITBJ.js", "imports": ["/build/_shared/chunk-5IFXS7SL.js", "/build/_shared/chunk-4IVONCVR.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/$id/delete": { "id": "routes/todo/$id/delete", "parentId": "routes/todo", "path": ":id/delete", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/$id/delete-Q5XBM3ZM.js", "imports": ["/build/_shared/chunk-FDK6JIQN.js", "/build/_shared/chunk-YXYVSVEQ.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/$id/edit": { "id": "routes/todo/$id/edit", "parentId": "routes/todo", "path": ":id/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/$id/edit-EN5IQSJG.js", "imports": ["/build/_shared/chunk-FDK6JIQN.js", "/build/_shared/chunk-YXYVSVEQ.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/$id/edit.temp": { "id": "routes/todo/$id/edit.temp", "parentId": "routes/todo", "path": ":id/edit/temp", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/$id/edit.temp-BAIXQUER.js", "imports": ["/build/_shared/chunk-WIVCPSQY.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/$id/reschedule": { "id": "routes/todo/$id/reschedule", "parentId": "routes/todo", "path": ":id/reschedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/$id/reschedule-SXFUWIUG.js", "imports": ["/build/_shared/chunk-WIVCPSQY.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/new": { "id": "routes/todo/new", "parentId": "routes/todo", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/new-Z4XB7CSM.js", "imports": ["/build/_shared/chunk-FDK6JIQN.js", "/build/_shared/chunk-YXYVSVEQ.js", "/build/_shared/chunk-KSY6755F.js", "/build/_shared/chunk-PV3BF375.js", "/build/_shared/chunk-DEEIFPJA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-11C465C0.js" };

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
    module: delete_exports
  },
  "routes/clipboard.$id/edit": {
    id: "routes/clipboard.$id/edit",
    parentId: "routes/clipboard.$id",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
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
    module: delete_exports2
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
    module: edit_exports2
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
    module: new_exports
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
  "routes/todo/$id/reschedule": {
    id: "routes/todo/$id/reschedule",
    parentId: "routes/todo",
    path: ":id/reschedule",
    index: void 0,
    caseSensitive: void 0,
    module: reschedule_exports
  },
  "routes/todo/$id/edit.temp": {
    id: "routes/todo/$id/edit.temp",
    parentId: "routes/todo",
    path: ":id/edit/temp",
    index: void 0,
    caseSensitive: void 0,
    module: edit_temp_exports
  },
  "routes/todo/$id/delete": {
    id: "routes/todo/$id/delete",
    parentId: "routes/todo",
    path: ":id/delete",
    index: void 0,
    caseSensitive: void 0,
    module: delete_exports3
  },
  "routes/todo/$id/edit": {
    id: "routes/todo/$id/edit",
    parentId: "routes/todo",
    path: ":id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports3
  },
  "routes/todo/new": {
    id: "routes/todo/new",
    parentId: "routes/todo",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaW5kZXgudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsICIuLi9hcHAvdXRpbHMvaW5kZXgudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvY2xpcGJvYXJkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy90cmFuc2l0aW9uLW1vZGFsLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy93cmFwcGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9wYWdlLXRpdGxlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zcGlubmVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9uby1pdGVtcy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvcXJjb2RlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy90b2RvLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jYXJkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy92b3RlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9kaWFsb2cudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1kaWFsb2cudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1zL2NsaXBib2FyZC50c3giLCAiLi4vYXBwL3V0aWxzL2Zvcm0udHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvZm9ybXMvdG9kby50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvZm9ybXMvdm90ZS50c3giLCAiLi4vYXBwL3V0aWxzL2F1dGguc2VydmVyLnRzIiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvdXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL3ByaXNtYS5zZXJ2ZXIudHMiLCAiLi4vYXBwL290aGVycy90aGVtZS50cyIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby4kaWQvdG9nZ2xlLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkLiRpZC50c3giLCAiLi4vYXBwL3V0aWxzL2Jyb3dzZXIudHMiLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2NsaXBib2FyZC4kaWQvZGVsZXRlLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkLiRpZC9lZGl0LnRzeCIsICIuLi9hcHAvdHlwZXMvY2xpcGJvYXJkLnRzIiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9hdXRoL2dpdGh1Yi50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2F1dGgvZ2l0aHViL2NhbGxiYWNrLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvYXV0aC9nb29nbGUudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9hdXRoL2dvb2dsZS9jYWxsYmFjay50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2hhYml0cy1yYW5rLnRzeCIsICIuLi9hcHAvdHlwZXMvdm90ZS50cyIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZG93bnZvdGUudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kZWxldGUudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC91cHZvdGUudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9lZGl0LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkL25ldy50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL2xhYmVsLm5ldy50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3JlZGlyZWN0LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvcHJvZmlsZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3Byb2ZpbGUvZ2VuZXJhbC50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3Byb2ZpbGUvZXhwb3J0LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvZXhwb3J0LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvYy4kaWQudHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9pbmRleC50cyIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9jb3B5LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvaG9tZS50c3giLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3RvZG8udHN4IiwgInJvdXRlOi93b3Jrc3BhY2UvYXBwL3JvdXRlcy90b2RvLyRpZC9yZXNjaGVkdWxlLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby8kaWQvZWRpdC50ZW1wLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby8kaWQvZGVsZXRlLnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby8kaWQvZWRpdC50c3giLCAiLi4vYXBwL3R5cGVzL3RvZG8udHMiLCAicm91dGU6L3dvcmtzcGFjZS9hcHAvcm91dGVzL3RvZG8vbmV3LnRzeCIsICJyb3V0ZTovd29ya3NwYWNlL2FwcC9yb3V0ZXMvci50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby4kaWQvdG9nZ2xlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkLiRpZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2NsaXBib2FyZC4kaWQvZGVsZXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkLiRpZC9lZGl0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvYXV0aC9naXRodWIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9hdXRoL2dpdGh1Yi9jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2F1dGgvZ29vZ2xlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvYXV0aC9nb29nbGUvY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oYWJpdHMtcmFuay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kb3dudm90ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kZWxldGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvdXB2b3RlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2VkaXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvY2xpcGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2NsaXBib2FyZC9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvbGFiZWwubmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL3JlZGlyZWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOCBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL3Byb2ZpbGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE5IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvcHJvZmlsZS9nZW5lcmFsLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMCBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL3Byb2ZpbGUvZXhwb3J0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMSBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2V4cG9ydC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjIgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIzIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvYy4kaWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI0IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvaW5kZXgudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjUgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjYgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9jb3B5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyNyBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL2hvbWUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI4IGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjkgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy90b2RvLyRpZC9yZXNjaGVkdWxlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzMCBmcm9tIFwiL3dvcmtzcGFjZS9hcHAvcm91dGVzL3RvZG8vJGlkL2VkaXQudGVtcC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzEgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy90b2RvLyRpZC9kZWxldGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMyIGZyb20gXCIvd29ya3NwYWNlL2FwcC9yb3V0ZXMvdG9kby8kaWQvZWRpdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzMgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy90b2RvL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzQgZnJvbSBcIi93b3Jrc3BhY2UvYXBwL3JvdXRlcy9yLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvdG9kby4kaWQvdG9nZ2xlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvLiRpZC90b2dnbGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidG9kby86aWQvdG9nZ2xlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9jbGlwYm9hcmQuJGlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jbGlwYm9hcmQuJGlkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNsaXBib2FyZC86aWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2NsaXBib2FyZC4kaWQvZGVsZXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jbGlwYm9hcmQuJGlkL2RlbGV0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NsaXBib2FyZC4kaWRcIixcbiAgICAgIHBhdGg6IFwiZGVsZXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9jbGlwYm9hcmQuJGlkL2VkaXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsaXBib2FyZC4kaWQvZWRpdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NsaXBib2FyZC4kaWRcIixcbiAgICAgIHBhdGg6IFwiZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9naXRodWJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvZ2l0aHViXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvZ2l0aHViXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2dpdGh1Yi9jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9naXRodWIvY2FsbGJhY2tcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hdXRoL2dpdGh1YlwiLFxuICAgICAgcGF0aDogXCJjYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9nb29nbGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvZ29vZ2xlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvZ29vZ2xlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2dvb2dsZS9jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9nb29nbGUvY2FsbGJhY2tcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hdXRoL2dvb2dsZVwiLFxuICAgICAgcGF0aDogXCJjYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvaGFiaXRzLXJhbmtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hhYml0cy1yYW5rXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImhhYml0cy1yYW5rXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kb3dudm90ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZG93bnZvdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9oYWJpdHMtcmFua1wiLFxuICAgICAgcGF0aDogXCJ2b3RlLzppZC9kb3dudm90ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2RlbGV0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZGVsZXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmtcIixcbiAgICAgIHBhdGg6IFwidm90ZS86aWQvZGVsZXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvdXB2b3RlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC91cHZvdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9oYWJpdHMtcmFua1wiLFxuICAgICAgcGF0aDogXCJ2b3RlLzppZC91cHZvdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvaGFiaXRzLXJhbmtcIixcbiAgICAgIHBhdGg6IFwidm90ZS86aWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL2NsaXBib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xpcGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNsaXBib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL2NsaXBib2FyZC9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsaXBib2FyZC9uZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jbGlwYm9hcmRcIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGFiZWwubmV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sYWJlbC5uZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibGFiZWwvbmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE2XG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVkaXJlY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JlZGlyZWN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlZGlyZWN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvZmlsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvZmlsZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9maWxlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE4XG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvZmlsZS9nZW5lcmFsXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9maWxlL2dlbmVyYWxcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wcm9maWxlXCIsXG4gICAgICBwYXRoOiBcImdlbmVyYWxcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTlcbiAgICB9LFxuICBcInJvdXRlcy9wcm9maWxlL2V4cG9ydFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvZmlsZS9leHBvcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wcm9maWxlXCIsXG4gICAgICBwYXRoOiBcImV4cG9ydFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMFxuICAgIH0sXG4gIFwicm91dGVzL2V4cG9ydFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXhwb3J0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImV4cG9ydFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMlxuICAgIH0sXG4gIFwicm91dGVzL2MuJGlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jLiRpZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjLzppZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjRcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjVcbiAgICB9LFxuICBcInJvdXRlcy9jb3B5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb3B5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvcHlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjZcbiAgICB9LFxuICBcInJvdXRlcy9ob21lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ob21lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjdcbiAgICB9LFxuICBcInJvdXRlcy90b2RvXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRvZG9cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjhcbiAgICB9LFxuICBcInJvdXRlcy90b2RvLyRpZC9yZXNjaGVkdWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvLyRpZC9yZXNjaGVkdWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvdG9kb1wiLFxuICAgICAgcGF0aDogXCI6aWQvcmVzY2hlZHVsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyOVxuICAgIH0sXG4gIFwicm91dGVzL3RvZG8vJGlkL2VkaXQudGVtcFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdG9kby8kaWQvZWRpdC50ZW1wXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvdG9kb1wiLFxuICAgICAgcGF0aDogXCI6aWQvZWRpdC90ZW1wXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMwXG4gICAgfSxcbiAgXCJyb3V0ZXMvdG9kby8kaWQvZGVsZXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvLyRpZC9kZWxldGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy90b2RvXCIsXG4gICAgICBwYXRoOiBcIjppZC9kZWxldGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMzFcbiAgICB9LFxuICBcInJvdXRlcy90b2RvLyRpZC9lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvLyRpZC9lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvdG9kb1wiLFxuICAgICAgcGF0aDogXCI6aWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzMlxuICAgIH0sXG4gIFwicm91dGVzL3RvZG8vbmV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b2RvL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3RvZG9cIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMzXG4gICAgfSxcbiAgXCJyb3V0ZXMvclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvclwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTM0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHQsXG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz4pXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZUxvY2F0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2dsb2JhbC5jc3MnXG5pbXBvcnQgdGFpbHdpbmRTdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IHZlbmRvcnNTdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvdmVuZG9ycy5jc3MnXG5cbmltcG9ydCB7IE5hdmJhciwgVHJhbnNpdGlvbk1vZGFsIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgQm94LCBDaGFrcmFQcm92aWRlciwgSGVhZGluZywgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJy4vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL290aGVycy90aGVtZSdcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGdsb2JhbFN0eWxlc1VybCB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHRhaWx3aW5kU3R5bGVzVXJsIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogdmVuZG9yc1N0eWxlc1VybCB9LFxuICAgIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvYXNzZXRzL2ltYWdlcy9mYXZpY29uLnN2ZycsIHR5cGU6ICdpbWFnZS9zdmcreG1sJyB9LFxuICAgIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZycsIHR5cGU6ICdpbWFnZS9wbmcnIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L0RvY3VtZW50PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKVxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT1cIkVycm9yIVwiPlxuICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiPlRoZXJlIHdhcyBhbiBlcnJvcjwvSGVhZGluZz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvRG9jdW1lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIj5cbiAgICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfSB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuLCB0aXRsZSB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7IHRpdGxlPzogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YTxVc2VyPigpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIGNvbnN0IGlzTG9naW4gPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9sb2dpbidcblxuICBjb25zdCBiZ0NvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoXG4gICAgJ2JnLVtjb2xvcjp2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLWxpZ2h0V2hpdGUpXScsXG4gICAgJ2JnLVtjb2xvcjp2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTEwMCldJyxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcmVsYXRpdmUgbWF4LWgtWzEwMHZoXVwiPlxuICAgICAgPFRyYW5zaXRpb25Nb2RhbCAvPlxuICAgICAgeyFpc0xvZ2luICYmIDxOYXZiYXIgdXNlcj17dXNlcn0gLz59XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Nsc3goJ2gtZnVsbCB3LWZ1bGwgcGItMjQnLCBiZ0NvbG9yKX0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZGViYXIgfSBmcm9tICcuL3NpZGViYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsaXBib2FyZENvbnRlbnQgfSBmcm9tICcuL2NsaXBib2FyZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9lcnJvci1tZXNzYWdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmFuc2l0aW9uTW9kYWwgfSBmcm9tICcuL3RyYW5zaXRpb24tbW9kYWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdyYXBwZXIgfSBmcm9tICcuL3dyYXBwZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VUaXRsZSB9IGZyb20gJy4vcGFnZS10aXRsZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3Bpbm5lciB9IGZyb20gJy4vc3Bpbm5lcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm9JdGVtcyB9IGZyb20gJy4vbm8taXRlbXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFFSQ29kZSB9IGZyb20gJy4vcXJjb2RlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2RvSXRlbSB9IGZyb20gJy4vdG9kbydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZCB9IGZyb20gJy4vY2FyZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVm90ZUl0ZW0gfSBmcm9tICcuL3ZvdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIERpYWxvZyB9IGZyb20gJy4vZGlhbG9nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWxldGVEaWFsb2cgfSBmcm9tICcuL2RlbGV0ZS1kaWFsb2cnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsaXBib2FyZEZvcm0gfSBmcm9tICcuL2Zvcm1zL2NsaXBib2FyZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9kb0Zvcm0gfSBmcm9tICcuL2Zvcm1zL3RvZG8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhYml0Rm9ybSB9IGZyb20gJy4vZm9ybXMvdm90ZSdcbiIsICJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBjaGFrcmEsXG4gIEhTdGFjayxcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgTWVudUJ1dHRvbixcbiAgTWVudUl0ZW0sXG4gIE1lbnVMaXN0LFxuICBTdGFjayxcbiAgVGFnLFxuICB1c2VDb2xvck1vZGUsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB7IHVzZVZpZXdwb3J0U2Nyb2xsIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgYXMgUkxpbmssIHVzZUxvY2F0aW9uLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSAnLidcbmltcG9ydCB7IEZhTW9vbiwgRmFTdW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCB7IEFpT3V0bGluZUFsaXdhbmd3YW5nIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgeyBnZXRUcmFuc2l0aW9uVHlwZXMgfSBmcm9tICd+L3V0aWxzJ1xuXG5jb25zdCBsaW5rczogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyB0bzogc3RyaW5nIH0+ID0gW1xuICB7XG4gICAgdGl0bGU6ICdIb21lJyxcbiAgICB0bzogJy9ob21lJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ2xpcGJvYXJkJyxcbiAgICB0bzogJy9jbGlwYm9hcmQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDb3B5JyxcbiAgICB0bzogJy9jb3B5JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUmVkaXJlY3QnLFxuICAgIHRvOiAnL3JlZGlyZWN0JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVG9kbycsXG4gICAgdG86ICcvdG9kbycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hhYml0c1JhbmsnLFxuICAgIHRvOiAnL2hhYml0cy1yYW5rJyxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgdXNlciB9OiB7IHVzZXI6IFVzZXIgfSkge1xuICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZTogdG9nZ2xlTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgY29uc3QgdGV4dCA9IHVzZUNvbG9yTW9kZVZhbHVlKCdkYXJrJywgJ2xpZ2h0JylcbiAgY29uc3QgU3dpdGNoSWNvbiA9IHVzZUNvbG9yTW9kZVZhbHVlKEZhTW9vbiwgRmFTdW4pXG5cbiAgY29uc3QgYmdDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdiZy13aGl0ZScsICdiZy1bY29sb3I6dmFyKC0tY2hha3JhLWNvbG9ycy1icmFuZC05MDApXScpXG5cbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2JvcmRlci1iJywgYmdDb2xvcil9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8QWlPdXRsaW5lQWxpd2FuZ3dhbmcgc2l6ZT17MzB9IC8+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWwtMiBmb250LWJvbGRcIj5DbGlwaTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIDxUYWcgc2l6ZT17J3NtJ30+e2dldFRyYW5zaXRpb25UeXBlcyh0cmFuc2l0aW9uKX08L1RhZz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwibGdcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgU3dpdGNoIHRvICR7dGV4dH0gbW9kZWB9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiY3VycmVudFwiXG4gICAgICAgICAgICAgIG1sPXt7IGJhc2U6ICcwJywgbWQ6ICczJyB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb2RlfVxuICAgICAgICAgICAgICBpY29uPXs8U3dpdGNoSWNvbiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgPE1lbnVCdXR0b24gYXM9e0J1dHRvbn0gcm91bmRlZD17J2Z1bGwnfSB2YXJpYW50PXsnbGluayd9IGN1cnNvcj17J3BvaW50ZXInfSBtaW5XPXswfT5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17dXNlcj8ucHJvZmlsZVVybCA/PyAnJ30gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgICAgICAgICA8TWVudUxpc3QgYWxpZ25JdGVtcz17J2NlbnRlcid9IHA9ezB9PlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxSTGluayB0bz1cIi9wcm9maWxlL2dlbmVyYWxcIj5BY2NvdW50IHNldHRpbmdzPC9STGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxSTGluayB0bz1cIi9sb2dvdXRcIj5Mb2dvdXQ8L1JMaW5rPlxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgICAgPFN0aWNreUhlYWRlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFN0aWNreUhlYWRlcigpIHtcbiAgY29uc3Qgc2hhZG93ID0gdXNlQ29sb3JNb2RlVmFsdWUoJyMwMDAwMDAxYScsICcjMzMzJylcblxuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTEhlYWRpbmdFbGVtZW50PihudWxsKVxuICBjb25zdCBbeSwgc2V0WV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuICBjb25zdCB7IGhlaWdodCA9IDQ5IH0gPSByZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgPz8ge31cblxuICBjb25zdCB0ZXh0Q29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgndGV4dC1ibGFjaycsICd0ZXh0LXdoaXRlJylcbiAgY29uc3QgYm9yZGVyQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnYm9yZGVyLWJsYWNrJywgJ2JvcmRlci13aGl0ZScpXG4gIGNvbnN0IGJnQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGUnLCAnYnJhbmQuOTAwJylcblxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcblxuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiBzY3JvbGxZLm9uQ2hhbmdlKCgpID0+IHNldFkoc2Nyb2xsWS5nZXQoKSkpXG4gIH0sIFtzY3JvbGxZXSlcblxuICBjb25zdCBzY3JvbGxlZFRvVG9wID0geSA+PSA1OVxuXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxjaGFrcmEuaGVhZGVyIGg9e2Ake2hlaWdodH1weGB9IHc9XCJmdWxsXCI+XG4gICAgICA8Qm94XG4gICAgICAgIHBvc2l0aW9uPXtzY3JvbGxlZFRvVG9wID8gJ2ZpeGVkJyA6ICdzdGF0aWMnfVxuICAgICAgICB0cmFuc2Zvcm09e3Njcm9sbGVkVG9Ub3AgPyAndHJhbnNsYXRlWigxMDBweCknIDogdW5kZWZpbmVkfVxuICAgICAgICBib3hTaGFkb3c9e3Njcm9sbGVkVG9Ub3AgPyBgMCAwIDAgMXB4ICR7c2hhZG93fWAgOiB1bmRlZmluZWR9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB0cmFuc2l0aW9uPVwiYm94LXNoYWRvdyAuMnMgZWFzZVwiXG4gICAgICAgIHRvcD1cIjBcIlxuICAgICAgICBiZz17YmdDb2xvcn1cbiAgICAgICAgekluZGV4PVwiMzAwMFwiXG4gICAgICAgIGg9e2Ake2hlaWdodH1weGB9XG4gICAgICAgIGxlZnQ9XCIwXCJcbiAgICAgICAgcmlnaHQ9XCIwXCJcbiAgICAgICAgd2lkdGg9XCJmdWxsXCJcbiAgICAgICAgcHQ9XCIzXCJcbiAgICAgID5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz1cIjhcIiBvdmVyZmxvd1k9XCJzY3JvbGxcIiBhbGlnbkl0ZW1zPXsnY2VudGVyJ30+XG4gICAgICAgICAgICAgIHtzY3JvbGxlZFRvVG9wID8gKFxuICAgICAgICAgICAgICAgIDxIU3RhY2sgY2xhc3NOYW1lPVwicGItM1wiPlxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUFsaXdhbmd3YW5nIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPFRhZyBzaXplPXsnc20nfT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy0xNiB0ZXh0LWNlbnRlciB0cnVuY2F0ZVwiPntnZXRUcmFuc2l0aW9uVHlwZXModHJhbnNpdGlvbil9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPFJMaW5rXG4gICAgICAgICAgICAgICAgICB0bz17bGluay50b31cbiAgICAgICAgICAgICAgICAgIGtleT17bGluay50b31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgncGItMyBib3JkZXItYi0yJywge1xuICAgICAgICAgICAgICAgICAgICBbYm9yZGVyQ29sb3JdOiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhsaW5rLnRvKSxcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci10cmFuc3BhcmVudCc6XG4gICAgICAgICAgICAgICAgICAgICAgIWxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGxpbmsudG8pIHx8IGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycsXG4gICAgICAgICAgICAgICAgICAgIFt0ZXh0Q29sb3JdOiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhsaW5rLnRvKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvUkxpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC9jaGFrcmEuaGVhZGVyPlxuICApXG59XG4iLCAiaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3RyYW5zaXRpb24nXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuLy8gVE9ETyAtIEFmdGVyIHJlZmFjdG9yaW5nIGNoZWNrIHdoZXRoZXIgd2UgYXJlIHVzaW5nIHRoaXMgc29tZSB3aGVyZSBpZiBub3QgdGhlbiBqdXN0IHJlbW92ZSBpdC5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGaWVsZEVycm9ycyhmaWVsZEVycm9yczogUmVjb3JkPHN0cmluZywgQXJyYXk8c3RyaW5nPj4pIHtcbiAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8a2V5b2YgdHlwZW9mIGZpZWxkRXJyb3JzLCBzdHJpbmc+ID0ge31cblxuICBPYmplY3Qua2V5cyhmaWVsZEVycm9ycykuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICByZXN1bHRbZmllbGRdID0gZmllbGRFcnJvcnNbZmllbGRdWzBdXG4gIH0pXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBUT0RPIC0gQWZ0ZXIgcmVmYWN0b3JpbmcgY2hlY2sgd2hldGhlciB3ZSBhcmUgdXNpbmcgdGhpcyBzb21lIHdoZXJlIGlmIG5vdCB0aGVuIGp1c3QgcmVtb3ZlIGl0LlxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEZpZWxkRXJyb3JzTmV3PEZvcm1GaWVsZFR5cGU+KFxuICBmaWVsZHM6IHsgW2tleSBpbiBrZXlvZiBGb3JtRmllbGRUeXBlXTogdW5rbm93biB9LFxuICBmaWVsZEVycm9yczogUmVjb3JkPHN0cmluZywgQXJyYXk8c3RyaW5nPj4sXG4pIHtcbiAgY29uc3QgcmVzdWx0OiBQYXJ0aWFsPHsgW2tleTogc3RyaW5nXTogeyBtZXNzYWdlOiBzdHJpbmc7IGlzSW52YWxpZDogYm9vbGVhbiB9IH0+ID0ge31cblxuICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChmaWVsZEVycm9yc1trZXldKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHtcbiAgICAgICAgbWVzc2FnZTogZmllbGRFcnJvcnNba2V5XVswXSxcbiAgICAgICAgaXNJbnZhbGlkOiB0cnVlLFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHtcbiAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgIGlzSW52YWxpZDogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFRyYW5zaXRpb25UeXBlcyA9ICh0cmFuc2l0aW9uOiBUcmFuc2l0aW9uKSA9PiB7XG4gIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZycgJiYgdHJhbnNpdGlvbi5zdWJtaXNzaW9uLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICByZXR1cm4gJ1NlYXJjaGluZydcbiAgfVxuXG4gIGlmICh0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZycgJiYgdHJhbnNpdGlvbi50eXBlID09PSAnYWN0aW9uU3VibWlzc2lvbicpIHtcbiAgICByZXR1cm4gJ1N1Ym1pdHRpbmcnXG4gIH1cblxuICBpZiAodHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIHRyYW5zaXRpb24udHlwZSA9PT0gJ25vcm1hbExvYWQnKSB7XG4gICAgcmV0dXJuICdOYXZpZ2F0aW5nJ1xuICB9XG5cbiAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT09ICdsb2FkaW5nJyAmJiB0cmFuc2l0aW9uLnR5cGUgPT09ICdhY3Rpb25SZWRpcmVjdCcpIHtcbiAgICByZXR1cm4gJ1JlZGlyZWN0aW5nJ1xuICB9XG5cbiAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT09ICdsb2FkaW5nJyAmJiB0cmFuc2l0aW9uLnR5cGUgPT09ICdub3JtYWxSZWRpcmVjdCcpIHtcbiAgICByZXR1cm4gJ05vcm1hbFJlZGlyZWN0aW5nJ1xuICB9XG5cbiAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT09ICdsb2FkaW5nJyAmJiB0cmFuc2l0aW9uLnR5cGUgPT09ICdhY3Rpb25SZWxvYWQnKSB7XG4gICAgcmV0dXJuICdSZWxvYWRpbmcnXG4gIH1cblxuICBpZiAodHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ2lkbGUnKSB7XG4gICAgcmV0dXJuICdJZGxlJ1xuICB9XG5cbiAgcmV0dXJuICdVbmtub3duJ1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9kYXkgPSAoKSA9PiB7XG4gIHJldHVybiBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9tb3Jyb3cgPSAoKSA9PiB7XG4gIHJldHVybiBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxufVxuXG5leHBvcnQgY29uc3QgY29tcG9zZVVybCA9ICh1cmw6IFVSTCwgb3B0aW9ucz86IHsgaW5jbHVkZVBhdGhuYW1lPzogYm9vbGVhbiB9KSA9PiB7XG4gIGNvbnN0IHByb3RvY29sID0gdXJsLnByb3RvY29sPy5pbmNsdWRlcygnaHR0cCcpID8gJ2h0dHAnIDogJ2h0dHBzJ1xuXG4gIGlmICghb3B0aW9ucz8uaW5jbHVkZVBhdGhuYW1lKSB7XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7dXJsLmhvc3R9YFxuICB9XG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7dXJsLmhvc3R9JHt1cmwucGF0aG5hbWV9YFxufVxuXG5leHBvcnQgY29uc3QgY29tcG9zZU51bWJlcklkID0gKHBhcmFtczogUGFyYW1zPHN0cmluZz4pID0+IHtcbiAgcmV0dXJuIHBhcmFtcy5pZCA/ICtwYXJhbXMuaWQgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBvc2VMYWJlbHMgPSAobGFiZWxzOiB1bmtub3duKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsYWJlbHMpKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZXR1cm4gbGFiZWxzLmZpbHRlcigobGFiZWwpID0+IGxhYmVsKS5tYXAoKGxhYmVsKSA9PiArbGFiZWwpXG59XG5cbmV4cG9ydCBjb25zdCBjb21wb3NlUHJpb3JpdHkgPSAocHJpb3JpdHk6IFByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSB7XG4gICAgW1ByaW9yaXR5LkhJR0hdOiBQcmlvcml0eS5ISUdILFxuICAgIFtQcmlvcml0eS5MT1ddOiBQcmlvcml0eS5MT1csXG4gICAgW1ByaW9yaXR5Lk1FRElVTV06IFByaW9yaXR5Lk1FRElVTSxcbiAgICBbUHJpb3JpdHkuTk9STUFMXTogUHJpb3JpdHkuTk9STUFMLFxuICB9XG5cbiAgaWYgKCFwcmlvcml0aWVzW3ByaW9yaXR5XSkge1xuICAgIHJldHVybiBQcmlvcml0eS5OT1JNQUxcbiAgfVxuXG4gIHJldHVybiBwcmlvcml0aWVzW3ByaW9yaXR5XVxufVxuIiwgImltcG9ydCB7IENsaXBib2FyZENvbnRlbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGlwYm9hcmRDb250ZW50KHByb3BzOiBDbGlwYm9hcmRDb250ZW50KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdHJ1bmNhdGVcIj57cHJvcHMudGl0bGV9PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57cHJvcHMuY29udGVudH08L3A+XG4gICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPnttb21lbnQocHJvcHMuY3JlYXRlZEF0KS5jYWxlbmRhcigpfTwvdGltZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTW9kYWwsIE1vZGFsT3ZlcmxheSwgTW9kYWxDb250ZW50IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2l0aW9uTW9kYWwoKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICBpZiAodHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIHRyYW5zaXRpb24udHlwZSA9PT0gJ25vcm1hbExvYWQnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBpc09wZW49e3RydWV9IG9uQ2xvc2U9eygpID0+IG51bGx9PlxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgIDxNb2RhbENvbnRlbnQgYmc9XCJ0cmFuc3BhcmVudFwiIHNoYWRvdz1cIm5vbmVcIiBtPXswfT5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB3LWZ1bGwgbWF4LXctNXhsIHB4LTQgbXgtYXV0byBtZDpweC02XCI+e2NoaWxkcmVufTwvZGl2PlxufVxuIiwgImltcG9ydCB7IHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICcuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlVGl0bGUoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBiZ0NvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2JnLXdoaXRlJywgJ2JnLVtjb2xvcjp2YXIoLS1jaGFrcmEtY29sb3JzLWJyYW5kLTkwMCldJylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgncHktMTAgYm9yZGVyLWInLCBiZ0NvbG9yKX0+XG4gICAgICA8V3JhcHBlcj57Y2hpbGRyZW59PC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Bpbm5lcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHotMTAgbG9hZGVyIGJvdHRvbS0xMiByaWdodC0xMlwiPlxuICAgICAgPHNwYW4gc3R5bGU9e3sgb3BhY2l0eTogMSwgY29sb3I6ICd3aGl0ZScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGxpbmUgeDE9XCIxMlwiIHkxPVwiMlwiIHgyPVwiMTJcIiB5Mj1cIjZcIj48L2xpbmU+XG4gICAgICAgICAgPGxpbmUgeDE9XCIxMlwiIHkxPVwiMThcIiB4Mj1cIjEyXCIgeTI9XCIyMlwiPjwvbGluZT5cbiAgICAgICAgICA8bGluZSB4MT1cIjQuOTNcIiB5MT1cIjQuOTNcIiB4Mj1cIjcuNzZcIiB5Mj1cIjcuNzZcIj48L2xpbmU+XG4gICAgICAgICAgPGxpbmUgeDE9XCIxNi4yNFwiIHkxPVwiMTYuMjRcIiB4Mj1cIjE5LjA3XCIgeTI9XCIxOS4wN1wiPjwvbGluZT5cbiAgICAgICAgICA8bGluZSB4MT1cIjJcIiB5MT1cIjEyXCIgeDI9XCI2XCIgeTI9XCIxMlwiPjwvbGluZT5cbiAgICAgICAgICA8bGluZSB4MT1cIjE4XCIgeTE9XCIxMlwiIHgyPVwiMjJcIiB5Mj1cIjEyXCI+PC9saW5lPlxuICAgICAgICAgIDxsaW5lIHgxPVwiNC45M1wiIHkxPVwiMTkuMDdcIiB4Mj1cIjcuNzZcIiB5Mj1cIjE2LjI0XCI+PC9saW5lPlxuICAgICAgICAgIDxsaW5lIHgxPVwiMTYuMjRcIiB5MT1cIjcuNzZcIiB4Mj1cIjE5LjA3XCIgeTI9XCI0LjkzXCI+PC9saW5lPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vSXRlbXMoeyB0aXRsZSA9ICdObyBpdGVtcyBmb3VuZCEuJyB9OiB7IHRpdGxlOiBzdHJpbmcgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtOCBib3JkZXIgcm91bmRlZC1tZFwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtY2VudGVyXCI+e3RpdGxlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0UVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCdcbmltcG9ydCB7IHRvUG5nIH0gZnJvbSAnaHRtbC10by1pbWFnZSdcbmltcG9ydCB7IEJ1dHRvbiwgdXNlVG9hc3QgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRUkNvZGUoeyB2YWx1ZSB9OiB7IHZhbHVlOiBzdHJpbmcgfSkge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpXG5cbiAgY29uc3QgZG93bmxvYWRRUmNvZGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0b1BuZyhyZWYuY3VycmVudCwgeyBjYWNoZUJ1c3Q6IHRydWUgfSlcbiAgICAgIC50aGVuKChkYXRhVXJsKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgbGluay5kb3dubG9hZCA9ICdxci1jb2RlLnBuZydcbiAgICAgICAgbGluay5ocmVmID0gZGF0YVVybFxuICAgICAgICBsaW5rLmNsaWNrKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICdVbmFibGUgdG8gZG93bmxvYWQgUVIgY29kZScsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfSwgW3JlZl0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcC00IGJvcmRlciByb3VuZGVkLW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctWzIwMHB4XSBtaW4taC1bMjAwcHhdIG14LWF1dG8gZml0LWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJwLTQgYmctd2hpdGUgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPFJlYWN0UVJDb2RlIHZhbHVlPXt2YWx1ZX0gc2l6ZT17MjAwfSByZW5kZXJBcz1cInN2Z1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uIG10PXs0fSB3PXtbJ2Z1bGwnLCAnaW5pdGlhbCcsICdpbml0aWFsJywgJ2luaXRpYWwnXX0gb25DbGljaz17KCkgPT4gZG93bmxvYWRRUmNvZGUoKX0+XG4gICAgICAgIERvd25sb2FkIFFSIGNvZGVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEhTdGFjayxcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgTWVudUJ1dHRvbixcbiAgTWVudURpdmlkZXIsXG4gIE1lbnVHcm91cCxcbiAgTWVudUl0ZW0sXG4gIE1lbnVMaXN0LFxuICBUYWcsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBMYWJlbCwgTGFiZWxzT25Ub2RvLCBQcmlvcml0eSwgVG9kbyB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyB1c2VGZXRjaGVyLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgQnNUaHJlZURvdHNWZXJ0aWNhbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHsgUmlDaGVja2JveEJsYW5rQ2lyY2xlTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xuaW1wb3J0IHsgSGlDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2hpJ1xuaW1wb3J0IHsgY2FwaXRhbENhc2UgfSBmcm9tICdjaGFuZ2UtY2FzZSdcbmltcG9ydCB7IGdldFRvZGF5LCBnZXRUb21vcnJvdyB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmVhY3QtY2FsZW5kYXInXG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5Q29sb3IocHJpb3JpdHk6IFByaW9yaXR5KSB7XG4gIGNvbnN0IHByaW9yaXR5Q29sb3IgPSB7XG4gICAgW1ByaW9yaXR5LkhJR0hdOiAncmVkJyxcbiAgICBbUHJpb3JpdHkuTUVESVVNXTogJ3llbGxvdycsXG4gICAgW1ByaW9yaXR5Lk5PUk1BTF06ICdncmVlbicsXG4gICAgW1ByaW9yaXR5LkxPV106ICdibHVlJyxcbiAgfVxuXG4gIGlmICghcHJpb3JpdHlDb2xvcltwcmlvcml0eV0pIHtcbiAgICByZXR1cm4gcHJpb3JpdHlDb2xvclsnTE9XJ11cbiAgfVxuXG4gIHJldHVybiBwcmlvcml0eUNvbG9yW3ByaW9yaXR5XVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKFxuICBwcm9wczogVG9kbyAmIHtcbiAgICBsYWJlbHM6IChMYWJlbHNPblRvZG8gJiB7XG4gICAgICBMYWJlbDogTGFiZWwgfCBudWxsXG4gICAgfSlbXVxuICB9LFxuKSB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgY29uc3QgZHVlRGF0ZSA9IG1vbWVudChwcm9wcy5kdWVEYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuXG4gIGNvbnN0IGlzT3ZlckR1ZSA9IG1vbWVudCh0b2RheSkuaXNBZnRlcihkdWVEYXRlKVxuICBjb25zdCBpc1VwY29taW5nID0gbW9tZW50KHRvZGF5KS5pc0JlZm9yZShkdWVEYXRlKVxuXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKClcblxuICBjb25zdCByZXNjaGVkdWxlRmV0aGVyID0gdXNlRmV0Y2hlcigpXG5cbiAgY29uc3QgaXNTdWJtaXR0aW5nID1cbiAgICBmZXRjaGVyLnN0YXRlID09PSAnc3VibWl0dGluZycgfHxcbiAgICAoZmV0Y2hlci5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIGZldGNoZXIudHlwZSA9PT0gJ2FjdGlvblJlbG9hZCcpXG5cbiAgY29uc3QgaXNSZXNjaGVkdWxpbmcgPVxuICAgIHJlc2NoZWR1bGVGZXRoZXIuc3RhdGUgPT09ICdzdWJtaXR0aW5nJyB8fFxuICAgIChyZXNjaGVkdWxlRmV0aGVyLnN0YXRlID09PSAnbG9hZGluZycgJiYgcmVzY2hlZHVsZUZldGhlci50eXBlID09PSAnYWN0aW9uUmVsb2FkJylcblxuICBjb25zdCBsYWJlbHMgPSBwcm9wcy5sYWJlbHMubWFwKChsYWJlbCkgPT4gKHsgbGFiZWw6IGxhYmVsLkxhYmVsPy5sYWJlbCwgaWQ6IGxhYmVsLmxhYmVsSWQgfSkpXG5cbiAgY29uc3QgaGFzTGFiZWxzID0gbGFiZWxzLmxlbmd0aCA+IDBcblxuICBjb25zdCBkdWVTdHJpbmcgPSBpc092ZXJEdWVcbiAgICA/IG1vbWVudChwcm9wcy5kdWVEYXRlKS5zdGFydE9mKCdkYXknKS5mcm9tTm93KClcbiAgICA6IG1vbWVudChwcm9wcy5kdWVEYXRlKS5lbmRPZignZGF5JykuZnJvbU5vdygpXG5cbiAgY29uc3QgcmVzY2h1bGUgPSAoZHVlRGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgcmVzY2hlZHVsZUZldGhlci5zdWJtaXQoXG4gICAgICB7IGR1ZURhdGUgfSxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGFjdGlvbjogYC90b2RvLyR7cHJvcHMuaWR9L3Jlc2NoZWR1bGVgLFxuICAgICAgfSxcbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCB3LWZ1bGwgcHktMiByb3VuZGVkLW1kIGdhcC15LTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e3Byb3BzLnRpdGxlfTwvcD5cbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8ZmV0Y2hlci5Gb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e2AvdG9kby8ke3Byb3BzLmlkfS90b2dnbGVgfT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9eydnaG9zdCd9XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9vZ2xlIHRhc2sgY29tcGxldGlvblwiXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT17cHJvcHMuY29tcGxldGVkID8gJ2dyZWVuJyA6ICdncmF5J31cbiAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgcHJvcHMuY29tcGxldGVkID8gKFxuICAgICAgICAgICAgICAgICAgPEhpQ2hlY2tDaXJjbGUgc2l6ZT17MjR9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxSaUNoZWNrYm94QmxhbmtDaXJjbGVMaW5lIHNpemU9ezI0fSAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2ZldGNoZXIuRm9ybT5cblxuICAgICAgICAgIHtpc092ZXJEdWUgJiYgKFxuICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFzPXtCdXR0b259IHNpemU9XCJ4c1wiIGRpc2FibGVkPXtpc1Jlc2NoZWR1bGluZ30gY29sb3JTY2hlbWU9XCJwdXJwbGVcIj5cbiAgICAgICAgICAgICAgICB7aXNSZXNjaGVkdWxpbmcgPyAnUmVzY2hlZHVsaW5nLi4uJyA6ICdSZXNjaGVkdWxlJ31cbiAgICAgICAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgICAgICAgICA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgPE1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiByZXNjaHVsZShnZXRUb2RheSgpKX0+VG9kYXk8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gcmVzY2h1bGUoZ2V0VG9tb3Jyb3coKSl9PlRvbW9ycm93PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnVHcm91cD5cbiAgICAgICAgICAgICAgICA8TWVudURpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gY2xvc2VPblNlbGVjdD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdEdWVEYXRlID0gbmV3IERhdGUodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNjaHVsZShtb21lbnQobmV3RHVlRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykpXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZShnZXRUb2RheSgpKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgPE1lbnVCdXR0b24+XG4gICAgICAgICAgICAgIDxCc1RocmVlRG90c1ZlcnRpY2FsIC8+XG4gICAgICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgICAgICA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0aW9uKGAvdG9kby8ke3Byb3BzLmlkfS9lZGl0YCl9PkVkaXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gbmF2aWdhdGlvbihgL3RvZG8vJHtwcm9wcy5pZH0vZGVsZXRlYCl9PkRlbGV0ZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtdC0yXCI+XG4gICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgPFRhZyBmb250U2l6ZT17J3h4LXNtYWxsJ30gY29sb3JTY2hlbWU9e2dldFByaW9yaXR5Q29sb3IocHJvcHMucHJpb3JpdHkpfT5cbiAgICAgICAgICAgIHtjYXBpdGFsQ2FzZShgJHtwcm9wcy5wcmlvcml0eX0gUFJJT1JJVFlgKX1cbiAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICB7KGlzT3ZlckR1ZSB8fCBpc1VwY29taW5nKSAmJiAhcHJvcHMuY29tcGxldGVkICYmIChcbiAgICAgICAgICAgIDxUYWcgZm9udFNpemU9eyd4eC1zbWFsbCd9IGNvbG9yU2NoZW1lPXtpc1VwY29taW5nID8gJ2dyZWVuJyA6ICdyZWQnfT5cbiAgICAgICAgICAgICAge2lzT3ZlckR1ZSA/IGBPdmVyZHVlICR7ZHVlU3RyaW5nfWAgOiBgRHVlICR7ZHVlU3RyaW5nfWB9XG4gICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtoYXNMYWJlbHNcbiAgICAgICAgICAgID8gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFRhZyBmb250U2l6ZT17J3h4LXNtYWxsJ30gY29sb3JTY2hlbWU9XCJ3aGF0c2FwcFwiIGtleT17bGFiZWwuaWR9PlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgICA8SFN0YWNrIHBsPVwiMlwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtwcm9wcy51cGRhdGVkQXQgPyAoXG4gICAgICAgICAgICA8VGFnIG1sPVwiYXV0b1wiIGZvbnRTaXplPXsneHgtc21hbGwnfSBjb2xvclNjaGVtZT17J2xpbmtlZGluJ30+XG4gICAgICAgICAgICAgIHttb21lbnQocHJvcHMudXBkYXRlZEF0KS5jYWxlbmRhcigpfVxuICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBGbGV4LCBGbGV4Ym94UHJvcHMsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9ICYgRmxleGJveFByb3BzKSB7XG4gIGNvbnN0IGJnID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlJywgJ2JsYWNrJylcbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICB3PVwiZnVsbFwiXG4gICAgICBiZz17Ymd9XG4gICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgc2hhZG93PVwibWRcIlxuICAgICAgYm9yZGVyQ29sb3I9XCJ3aGl0ZUFscGhhXCJcbiAgICAgIGJvcmRlcldpZHRoPVwiMC41cHhcIlxuICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgcD1cIjRcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0ZsZXg+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBIU3RhY2ssIFRhZywgSWNvbkJ1dHRvbiwgTWVudSwgTWVudUJ1dHRvbiwgTWVudUxpc3QsIE1lbnVJdGVtIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFZvdGUgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgQnNBcnJvd1VwLCBCc0Fycm93RG93biwgQnNUaHJlZURvdHNWZXJ0aWNhbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHsgdXNlRmV0Y2hlciwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm90ZShwcm9wczogVm90ZSkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCB1cHZvdGVzRmV0Y2hlciA9IHVzZUZldGNoZXIoKVxuICBjb25zdCBkb3dudm90ZUZldGNoZXIgPSB1c2VGZXRjaGVyKClcblxuICBjb25zdCBpc1Vwdm90aW5nID1cbiAgICB1cHZvdGVzRmV0Y2hlci5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnIHx8XG4gICAgKHVwdm90ZXNGZXRjaGVyLnN0YXRlID09PSAnbG9hZGluZycgJiYgdXB2b3Rlc0ZldGNoZXIudHlwZSA9PT0gJ2FjdGlvblJlbG9hZCcpXG4gIGNvbnN0IGlzRG93bnZvdGluZyA9XG4gICAgZG93bnZvdGVGZXRjaGVyLnN0YXRlID09PSAnc3VibWl0dGluZycgfHxcbiAgICAoZG93bnZvdGVGZXRjaGVyLnN0YXRlID09PSAnbG9hZGluZycgJiYgZG93bnZvdGVGZXRjaGVyLnR5cGUgPT09ICdhY3Rpb25SZWxvYWQnKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHctZnVsbCBweS0yIHJvdW5kZWQtbWQgZ2FwLXktMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj57cHJvcHMudGl0bGV9PC9wPlxuICAgICAgICA8SFN0YWNrPlxuICAgICAgICAgIDx1cHZvdGVzRmV0Y2hlci5Gb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e2AvaGFiaXRzLXJhbmsvdm90ZS8ke3Byb3BzLmlkfS91cHZvdGVgfT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNVcHZvdGluZ31cbiAgICAgICAgICAgICAgdmFyaWFudD17J291dGxpbmUnfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVXB2b3RlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGljb249ezxCc0Fycm93VXAgLz59XG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdXB2b3Rlc0ZldGNoZXIuRm9ybT5cbiAgICAgICAgICA8ZG93bnZvdGVGZXRjaGVyLkZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj17YC9oYWJpdHMtcmFuay92b3RlLyR7cHJvcHMuaWR9L2Rvd252b3RlYH0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PXsnb3V0bGluZSd9XG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNEb3dudm90aW5nfVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRvd24gdm90ZVwiXG4gICAgICAgICAgICAgIGljb249ezxCc0Fycm93RG93biAvPn1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kb3dudm90ZUZldGNoZXIuRm9ybT5cblxuICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgPE1lbnVCdXR0b24+XG4gICAgICAgICAgICAgIDxCc1RocmVlRG90c1ZlcnRpY2FsIC8+XG4gICAgICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgICAgICA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0aW9uKGAvaGFiaXRzLXJhbmsvdm90ZS8ke3Byb3BzLmlkfS9lZGl0YCl9PlxuICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRpb24oYC9oYWJpdHMtcmFuay92b3RlLyR7cHJvcHMuaWR9L2RlbGV0ZWApfT5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG10LTJcIj5cbiAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgICA8VGFnIGZvbnRTaXplPXsneC1zbWFsbCd9IGNvbG9yU2NoZW1lPXsncHVycGxlJ30+XG4gICAgICAgICAgICB7cHJvcHMudXB2b3RlcyArIC1wcm9wcy5kb3dudm90ZXN9IHZvdGVzXG4gICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgPFRhZyBmb250U2l6ZT17J3gtc21hbGwnfSBjb2xvclNjaGVtZT17J3R3aXR0ZXInfT5cbiAgICAgICAgICAgIHtwcm9wcy51cHZvdGVzfSB1cHZvdGVzXG4gICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgPFRhZyBmb250U2l6ZT17J3gtc21hbGwnfSBjb2xvclNjaGVtZT17J3JlZCd9PlxuICAgICAgICAgICAge3Byb3BzLmRvd252b3RlcyA+IDAgPyAtcHJvcHMuZG93bnZvdGVzIDogcHJvcHMuZG93bnZvdGVzfSBkb3dudm90ZXNcbiAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICB7cHJvcHMubGFiZWwgPyAoXG4gICAgICAgICAgICA8VGFnIGZvbnRTaXplPXsneC1zbWFsbCd9IGNvbG9yU2NoZW1lPVwid2hhdHNhcHBcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvSFN0YWNrPlxuICAgICAgICA8SFN0YWNrIHBsPVwiMlwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtwcm9wcy51cGRhdGVkQXQgPyAoXG4gICAgICAgICAgICA8VGFnIG1sPVwiYXV0b1wiIGZvbnRTaXplPXsneC1zbWFsbCd9IGNvbG9yU2NoZW1lPXsnbGlua2VkaW4nfT5cbiAgICAgICAgICAgICAge21vbWVudChwcm9wcy51cGRhdGVkQXQpLmNhbGVuZGFyKCl9XG4gICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsT3ZlcmxheSwgTW9kYWxDb250ZW50IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxudHlwZSBEaWFsb2dQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBpc09wZW46IGJvb2xlYW5cbiAgb25DbG9zZTogKCkgPT4gYW55XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpYWxvZyhwcm9wczogRGlhbG9nUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXtwcm9wcy5pc09wZW59IG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9IGlzQ2VudGVyZWQgc2l6ZT1cInhsXCI+XG4gICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICA8TW9kYWxDb250ZW50Pntwcm9wcy5jaGlsZHJlbn08L01vZGFsQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApXG59XG4iLCAiaW1wb3J0IHsgTW9kYWxIZWFkZXIsIE1vZGFsQ2xvc2VCdXR0b24sIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCB1c2VOYXZpZ2F0ZSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL2RpYWxvZydcblxudHlwZSBEZWxldGVEaWFsb2dQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlRGlhbG9nKHByb3BzOiBEZWxldGVEaWFsb2dQcm9wcykge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbigtMSlcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3QgZGVsZXRpbmcgPSB0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZydcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgaXNPcGVuPXt0cnVlfSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgIDxNb2RhbEhlYWRlcj57cHJvcHMudGl0bGV9PC9Nb2RhbEhlYWRlcj5cbiAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICA8TW9kYWxCb2R5Pntwcm9wcy5tZXNzYWdlfTwvTW9kYWxCb2R5PlxuXG4gICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0gbXI9ezN9PlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEZvcm0gbWV0aG9kPVwiZGVsZXRlXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiIGlzTG9hZGluZz17ZGVsZXRpbmd9IGxvYWRpbmdUZXh0PVwiRGVsZXRpbmdcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIElucHV0LFxuICBGb3JtRXJyb3JNZXNzYWdlLFxuICBUZXh0YXJlYSxcbiAgU2VsZWN0LFxuICBIU3RhY2ssXG4gIEJ1dHRvbixcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIHVzZU5hdmlnYXRlLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBDbGlwYm9hcmRDb250ZW50VHlwZSB9IGZyb20gJ34vdHlwZXMvY2xpcGJvYXJkJ1xuaW1wb3J0IHsgRm9ybVByb3BzVHlwZSB9IGZyb20gJ34vdHlwZXMvY29tbW9uJ1xuaW1wb3J0IHsgY29tcG9zZVRvQm9vbGVhbiB9IGZyb20gJ34vdXRpbHMvZm9ybSdcblxuZXhwb3J0IGludGVyZmFjZSBDbGlwYm9hcmRGb3JtUHJvcHMgZXh0ZW5kcyBGb3JtUHJvcHNUeXBlPENsaXBib2FyZENvbnRlbnRUeXBlPiB7XG4gIHN1Ym1pdHRpbmdUZXh0OiBzdHJpbmdcbiAgb2tCdXR0b25UZXh0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpcGJvYXJkRm9ybShwcm9wczogQ2xpcGJvYXJkRm9ybVByb3BzKSB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKCcvY2xpcGJvYXJkJylcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3Qgc3VibWl0dGluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17cHJvcHM/LnRpdGxlPy5pbnZhbGlkfT5cbiAgICAgICAgPEZvcm1MYWJlbD5UaXRsZTwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy50aXRsZT8uaW52YWxpZH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzPy50aXRsZT8udmFsdWUgPz8gJyd9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntwcm9wcz8udGl0bGU/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17cHJvcHM/LmNvbnRlbnQ/LmludmFsaWR9PlxuICAgICAgICA8Rm9ybUxhYmVsPkNvbnRlbnQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudCB0byBjb3B5XCJcbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy5jb250ZW50Py5pbnZhbGlkfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHM/LmNvbnRlbnQ/LnZhbHVlID8/ICcnfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57cHJvcHM/LmNvbnRlbnQ/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZvcm1Db250cm9sIG10PXs0fSBpc0ludmFsaWQ9e3Byb3BzPy5wcml2YXRlPy5pbnZhbGlkfT5cbiAgICAgICAgPEZvcm1MYWJlbD5JcyBQcml2YXRlPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwicHJpdmF0ZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3Qgb3B0aW9uXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e1N0cmluZyhjb21wb3NlVG9Cb29sZWFuKFN0cmluZyhwcm9wcz8ucHJpdmF0ZT8udmFsdWUpLCB0cnVlKSl9XG4gICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcz8ucHJpdmF0ZT8uaW52YWxpZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYWxzZVwiPlB1YmxpYzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cnVlXCI+UHJpdmF0ZTwvb3B0aW9uPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e3Byb3BzPy5wcml2YXRlPy5lcnJvck1lc3NhZ2V9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9eydmbGV4LWVuZCd9IG10PVwiOFwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcbiAgICAgICAgICBpc0xvYWRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgbG9hZGluZ1RleHQ9e3Byb3BzPy5zdWJtaXR0aW5nVGV4dCA/PyAnU3VibWl0dGluZyd9XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMub2tCdXR0b25UZXh0ID8/ICdDcmVhdGUnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSFN0YWNrPlxuICAgIDwvRm9ybT5cbiAgKVxufVxuIiwgImltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJ1xuXG50eXBlIEZpZWxkVHlwZSA9IHtcbiAga2V5OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQgfCBib29sZWFuXG4gIHVzZUdldEFsbE1ldGhvZD86IGJvb2xlYW5cbiAgY29tcG9zZT86ICh2YWx1ZTogdW5rbm93bikgPT4gdW5rbm93blxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybURhdGE8Rm9ybURhdGFUeXBlPihmb3JtRGF0YTogRm9ybURhdGEsIGZpZWxkczogQXJyYXk8RmllbGRUeXBlPikge1xuICBjb25zdCByZXN1bHQ6IFBhcnRpYWw8eyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0ge31cblxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCB1c2VHZXRBbGxNZXRob2QgPSBmaWVsZC51c2VHZXRBbGxNZXRob2QgPz8gZmFsc2VcblxuICAgIGNvbnN0IHZhbHVlID0gdXNlR2V0QWxsTWV0aG9kID8gZm9ybURhdGEuZ2V0QWxsKGZpZWxkLmtleSkgOiBTdHJpbmcoZm9ybURhdGEuZ2V0KGZpZWxkLmtleSkpXG5cbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcblxuICAgIGlmICh2YWx1ZSA9PT0gJ251bGwnIHx8IHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0W2ZpZWxkLmtleV0gPSBmaWVsZC5kZWZhdWx0VmFsdWUgPz8gbnVsbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FycmF5ICYmIHZhbGlkYXRvci5pc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICByZXN1bHRbZmllbGQua2V5XSA9IGNvbXBvc2VUb0Jvb2xlYW4odmFsdWUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXN1bHRbZmllbGQua2V5XSA9IHR5cGVvZiBmaWVsZC5jb21wb3NlID09PSAnZnVuY3Rpb24nID8gZmllbGQuY29tcG9zZSh2YWx1ZSkgOiB2YWx1ZVxuICB9KVxuXG4gIHJldHVybiByZXN1bHQgYXMgRm9ybURhdGFUeXBlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaW5hbEZvcm1EYXRhPEZvcm1EYXRhVHlwZT4oXG4gIHZhbHVlczogRm9ybURhdGFUeXBlLFxuICBmaWVsZHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdbXVxuICB9LFxuKSB7XG4gIGNvbnN0IHJlc3VsdDogUGFydGlhbDx7XG4gICAgW2tleSBpbiBrZXlvZiBGb3JtRGF0YVR5cGVdOiB7IGludmFsaWQ6IGJvb2xlYW47IGVycm9yTWVzc2FnZTogc3RyaW5nOyB2YWx1ZTogdW5rbm93biB9XG4gIH0+ID0ge31cblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWVzKSBhcyBBcnJheTxrZXlvZiB0eXBlb2YgdmFsdWVzPlxuXG4gIGtleXMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBpc0ludmFsaWRGaWVsZCA9IChcbiAgICAgIGZpZWxkcyBhcyB7XG4gICAgICAgIFtrZXkgaW4ga2V5b2YgRm9ybURhdGFUeXBlXTogc3RyaW5nW11cbiAgICAgIH1cbiAgICApW2ZpZWxkXSBhcyBBcnJheTxzdHJpbmc+IHwgbnVsbCB8IHVuZGVmaW5lZFxuXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gQXJyYXkuaXNBcnJheShpc0ludmFsaWRGaWVsZCkgPyBpc0ludmFsaWRGaWVsZFswXSA/PyAnJyA6ICcnXG5cbiAgICByZXN1bHRbZmllbGRdID0ge1xuICAgICAgdmFsdWU6IHZhbHVlc1tmaWVsZF0sXG4gICAgICBpbnZhbGlkOiBCb29sZWFuKGVycm9yTWVzc2FnZSksXG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBvc2VUb0Jvb2xlYW4gPSAodmFsdWU6IHVua25vd24sIGRlZmF1bHRWYWx1ZT86IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgaXNCb29sZWFuID0gdmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJ1xuXG4gIGlmICghaXNCb29sZWFuICYmIChkZWZhdWx0VmFsdWUgPT09IHRydWUgfHwgZGVmYXVsdFZhbHVlID09PSBmYWxzZSkpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIH1cblxuICByZXR1cm4gdmFsdWUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZVxufVxuIiwgImltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnfi90eXBlcy90b2RvJ1xuaW1wb3J0IHsgRm9ybVByb3BzVHlwZSB9IGZyb20gJ34vdHlwZXMvY29tbW9uJ1xuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG4gIEZvcm1FcnJvck1lc3NhZ2UsXG4gIFRleHRhcmVhLFxuICBTZWxlY3QsXG4gIEJ1dHRvbixcbiAgSFN0YWNrLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgdXNlTmF2aWdhdGUsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGNvbXBvc2VUb0Jvb2xlYW4gfSBmcm9tICd+L3V0aWxzL2Zvcm0nXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGludGVyZmFjZSBUb2RvRm9ybVByb3BzIGV4dGVuZHMgRm9ybVByb3BzVHlwZTxUb2RvVHlwZT4ge1xuICBzdWJtaXR0aW5nVGV4dDogc3RyaW5nXG4gIG9rQnV0dG9uVGV4dDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9Gb3JtKHByb3BzOiBUb2RvRm9ybVByb3BzKSB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKCcvY2xpcGJvYXJkJylcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3Qgc3VibWl0dGluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17cHJvcHM/LnRpdGxlPy5pbnZhbGlkfT5cbiAgICAgICAgPEZvcm1MYWJlbD5UaXRsZTwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICAvLyBpc1JlcXVpcmVkXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcz8udGl0bGU/LmludmFsaWR9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcz8udGl0bGU/LnZhbHVlID8/ICcnfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57cHJvcHM/LnRpdGxlPy5lcnJvck1lc3NhZ2V9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIG10PXs0fSBpc0ludmFsaWQ9e3Byb3BzPy5kZXNjcmlwdGlvbj8uaW52YWxpZH0+XG4gICAgICAgIDxGb3JtTGFiZWw+RGVzY3JpcHRpb248L0Zvcm1MYWJlbD5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCJcbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy5kZXNjcmlwdGlvbj8uaW52YWxpZH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzPy5kZXNjcmlwdGlvbj8udmFsdWUgPz8gJyd9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntwcm9wcz8uZGVzY3JpcHRpb24/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICB7LyogPEZvcm1Db250cm9sIG10PXs0fSBpc0ludmFsaWQ9e3Byb3BzPy5sYWJlbHM/LmludmFsaWR9PlxuICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImxhYmVsc1wiPkxhYmVsczwvRm9ybUxhYmVsPlxuXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgICAgbmFtZT1cImxhYmVsc1wiXG4gICAgICAgICAgICBvcHRpb25zPXtsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbC5sYWJlbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbGFiZWwuaWQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+ICovfVxuXG4gICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17cHJvcHM/LmNvbXBsZXRlZD8uaW52YWxpZH0+XG4gICAgICAgIDxGb3JtTGFiZWw+Q29tcGxldGVkPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPVwiY29tcGxldGVkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBvcHRpb25cIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17U3RyaW5nKGNvbXBvc2VUb0Jvb2xlYW4oU3RyaW5nKHByb3BzPy5jb21wbGV0ZWQ/LnZhbHVlKSwgZmFsc2UpKX1cbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy5jb21wbGV0ZWQ/LmludmFsaWR9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHJ1ZVwiPlRydWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFsc2VcIj5GYWxzZTwvb3B0aW9uPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e3Byb3BzPy5jb21wbGV0ZWQ/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17cHJvcHM/LnByaW9yaXR5Py5pbnZhbGlkfT5cbiAgICAgICAgPEZvcm1MYWJlbD5Qcmlvcml0eTwvRm9ybUxhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbmFtZT1cInByaW9yaXR5XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBwcmlvcml0eVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcz8ucHJpb3JpdHk/LnZhbHVlID8/IFByaW9yaXR5Lk5PUk1BTH1cbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy5wcmlvcml0eT8uaW52YWxpZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1ByaW9yaXR5LkxPV30+TG93PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17UHJpb3JpdHkuTk9STUFMfT5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtQcmlvcml0eS5NRURJVU19Pk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1ByaW9yaXR5LkhJR0h9PkhpZ2g8L29wdGlvbj5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntwcm9wcz8ucHJpb3JpdHk/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17cHJvcHM/LmR1ZURhdGU/LmludmFsaWR9PlxuICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJpc0NoZWNrZWRcIj5EdWUgZGF0ZTwvRm9ybUxhYmVsPlxuXG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJkdWVEYXRlXCJcbiAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgaXNJbnZhbGlkPXtwcm9wcz8uZHVlRGF0ZT8uaW52YWxpZH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgcHJvcHM/LmR1ZURhdGU/LnZhbHVlID8gbW9tZW50KHByb3BzPy5kdWVEYXRlPy52YWx1ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e3Byb3BzPy5kdWVEYXRlPy5lcnJvck1lc3NhZ2V9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9eydmbGV4LWVuZCd9IG10PVwiOFwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcbiAgICAgICAgICBpc0xvYWRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgbG9hZGluZ1RleHQ9e3Byb3BzLnN1Ym1pdHRpbmdUZXh0ID8/ICdTdWJtaXR0aW5nJ31cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5va0J1dHRvblRleHQgPz8gJ0NyZWF0ZSd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9IU3RhY2s+XG4gICAgPC9Gb3JtPlxuICApXG59XG4iLCAiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQsIEZvcm1FcnJvck1lc3NhZ2UsIEhTdGFjaywgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIHVzZU5hdmlnYXRlLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBGb3JtUHJvcHNUeXBlIH0gZnJvbSAnfi90eXBlcy9jb21tb24nXG5pbXBvcnQgeyBWb3RlVHlwZSB9IGZyb20gJ34vdHlwZXMvdm90ZSdcblxuZXhwb3J0IGludGVyZmFjZSBWb3RlRm9ybVByb3BzIGV4dGVuZHMgRm9ybVByb3BzVHlwZTxWb3RlVHlwZT4ge1xuICBzdWJtaXR0aW5nVGV4dDogc3RyaW5nXG4gIG9rQnV0dG9uVGV4dDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhYml0Rm9ybShwcm9wczogVm90ZUZvcm1Qcm9wcykge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbignL2NsaXBib2FyZCcpXG5cbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIGNvbnN0IHN1Ym1pdHRpbmcgPSB0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZydcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtwcm9wcz8udGl0bGU/LmludmFsaWR9PlxuICAgICAgICA8Rm9ybUxhYmVsPlRpdGxlPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHM/LnRpdGxlPy52YWx1ZX1cbiAgICAgICAgICBpc0ludmFsaWQ9e3Byb3BzPy50aXRsZT8uaW52YWxpZH1cbiAgICAgICAgLz5cbiAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e3Byb3BzPy50aXRsZT8uZXJyb3JNZXNzYWdlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICB7LyogPEZvcm1Db250cm9sIGlzSW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzLmxhYmVsLmlzSW52YWxpZH0gbXQ9XCIyXCI+XG4gICAgICAgICAgPEZvcm1MYWJlbD5MYWJlbDwvRm9ybUxhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgLy8gaXNSZXF1aXJlZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibGFiZWxcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt2b3RlLmxhYmVsID8/ICcnfVxuICAgICAgICAgICAgaXNJbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnMubGFiZWwuaXNJbnZhbGlkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS5tZXNzYWdlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgPC9Gb3JtQ29udHJvbD4gKi99XG5cbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9eydmbGV4LWVuZCd9IG10PVwiOFwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcbiAgICAgICAgICBpc0xvYWRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgbG9hZGluZ1RleHQ9e3Byb3BzLnN1Ym1pdHRpbmdUZXh0ID8/ICdTdWJtaXR0aW5nJ31cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5va0J1dHRvblRleHQgPz8gJ0NyZWF0ZSd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9IU3RhY2s+XG4gICAgPC9Gb3JtPlxuICApXG59XG4iLCAiaW1wb3J0IHsgR29vZ2xlU3RyYXRlZ3kgfSBmcm9tICdyZW1peC1hdXRoLWdvb2dsZSdcbmltcG9ydCB7IEF1dGhlbnRpY2F0b3IgfSBmcm9tICdyZW1peC1hdXRoJ1xuaW1wb3J0IHsgR2l0SHViU3RyYXRlZ3kgfSBmcm9tICdyZW1peC1hdXRoLWdpdGh1YidcblxuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5zZXJ2ZXInXG5cbmNvbnN0IGNsaWVudElEID0gcHJvY2Vzcy5lbnYuQ0xJRU5UX0lEXG5jb25zdCBjbGllbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5DTElFTlRfU0VDUkVUXG5jb25zdCBjYWxsYmFja1VSTCA9IHByb2Nlc3MuZW52LkNBTExfQkFDS19VUkxcblxuY29uc3QgZ29vZ2xlY2xpZW50SUQgPSBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEXG5jb25zdCBnb29nbGVjbGllbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxuY29uc3QgZ29vZ2xlY2FsbGJhY2tVUkwgPSBwcm9jZXNzLmVudi5HT09HTEVfQ0FMTF9CQUNLX1VSTFxuXG5pZiAoIWdvb2dsZWNsaWVudElEKSB7XG4gIHRocm93IG5ldyBFcnJvcignR29vZ2xlIENsaWVudCBpZCBpcyBub3QgYWRkZWQnKVxufVxuXG5pZiAoIWdvb2dsZWNsaWVudFNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZSBDbGllbnQgc2VjcmV0IGlzIG5vdCBhZGRlZCcpXG59XG5cbmlmICghZ29vZ2xlY2FsbGJhY2tVUkwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdHb29nbGUgQ2FsbGJhY2sgdXJsIGlzIG5vdCBwcm92aWRlZCcpXG59XG5cbmlmICghY2xpZW50SUQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDbGllbnQgaWQgaXMgbm90IGFkZGVkJylcbn1cblxuaWYgKCFjbGllbnRTZWNyZXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDbGllbnQgc2VjcmV0IGlzIG5vdCBhZGRlZCcpXG59XG5cbmlmICghY2FsbGJhY2tVUkwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayB1cmwgaXMgbm90IHByb3ZpZGVkJylcbn1cblxuY29uc3QgZ29vZ2xlU3RyYXRlZ3kgPSBuZXcgR29vZ2xlU3RyYXRlZ3koXG4gIHtcbiAgICBjbGllbnRJRDogZ29vZ2xlY2xpZW50SUQsXG4gICAgY2xpZW50U2VjcmV0OiBnb29nbGVjbGllbnRTZWNyZXQsXG4gICAgY2FsbGJhY2tVUkw6IGdvb2dsZWNhbGxiYWNrVVJMLFxuICB9LFxuICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICBjb25zdCBlbWFpbCA9IHByb2ZpbGUuZW1haWxzWzBdLnZhbHVlXG5cbiAgICBpZiAoIWVtYWlsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gVXNlci5maW5kT3JDcmVhdGUoeyBlbWFpbDogcHJvZmlsZS5lbWFpbHNbMF0udmFsdWUsIHByb2ZpbGVVcmw6IHByb2ZpbGUuX2pzb24ucGljdHVyZSB9KVxuICB9LFxuKVxuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRvciA9IG5ldyBBdXRoZW50aWNhdG9yKHNlc3Npb25TdG9yYWdlKVxuXG5leHBvcnQgY29uc3QgZ2l0SHViU3RyYXRlZ3kgPSBuZXcgR2l0SHViU3RyYXRlZ3koXG4gIHtcbiAgICBjbGllbnRJRCxcbiAgICBjbGllbnRTZWNyZXQsXG4gICAgY2FsbGJhY2tVUkwsXG4gIH0sXG4gIGFzeW5jICh7IHByb2ZpbGUgfSkgPT4ge1xuICAgIHJldHVybiBVc2VyLmZpbmRPckNyZWF0ZSh7XG4gICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbHNbMF0udmFsdWUsXG4gICAgICBwcm9maWxlVXJsOiBwcm9maWxlLl9qc29uLmF2YXRhcl91cmwsXG4gICAgfSlcbiAgfSxcbilcblxuYXV0aGVudGljYXRvci51c2UoZ2l0SHViU3RyYXRlZ3kpXG5hdXRoZW50aWNhdG9yLnVzZShnb29nbGVTdHJhdGVneSlcbiIsICIvLyBhcHAvc2Vzc2lvbi5zZXJ2ZXIudHNcbmltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSAncmVtaXgnXG5cbmNvbnN0IGNvb2tpZVNlY3JldCA9IHByb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVRcblxuaWYgKCFjb29raWVTZWNyZXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIGNvb2tpZSBzZWNyZXQgZW52IHZhcmlhYmxlJylcbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX3Nlc3Npb24nLFxuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICBwYXRoOiAnLycsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjcmV0czogW2Nvb2tpZVNlY3JldF0sXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9IHNlc3Npb25TdG9yYWdlXG4iLCAiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi9wcmlzbWEuc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgVXNlciA9IHtcbiAgYXN5bmMgZmluZE9yQ3JlYXRlKHsgZW1haWwsIHByb2ZpbGVVcmwgfTogeyBlbWFpbDogc3RyaW5nOyBwcm9maWxlVXJsOiBzdHJpbmcgfSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pXG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHsgZGF0YTogeyBlbWFpbCwgcHJvZmlsZVVybCB9IH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1c2VyXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSxcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgbGV0IF9fcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIGRiIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICBwcmlzbWEuJGNvbm5lY3QoKVxufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19wcmlzbWEpIHtcbiAgICBnbG9iYWwuX19wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgICBnbG9iYWwuX19wcmlzbWEuJGNvbm5lY3QoKVxuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5fX3ByaXNtYVxufVxuXG5leHBvcnQgeyBwcmlzbWEgfVxuIiwgImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IG1vZGUgfSBmcm9tICdAY2hha3JhLXVpL3RoZW1lLXRvb2xzJ1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbmZpZzoge1xuICAgIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgYnJhbmQ6IHtcbiAgICAgIGxpZ2h0V2hpdGU6ICcjZmFmYWZhJyxcbiAgICAgIDEwMDogJyMxMTEnLFxuICAgICAgOTAwOiAnIzAwMCcsXG4gICAgfSxcbiAgfSxcbiAgc3R5bGVzOiB7XG4gICAgZ2xvYmFsOiAocHJvcHMpID0+ICh7XG4gICAgICBib2R5OiB7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgICAgY29sb3I6IG1vZGUoJ2dyYXkuODAwJywgJ3doaXRlQWxwaGEuOTAwJykocHJvcHMpLFxuICAgICAgICBiZzogbW9kZSgnYnJhbmQubGlnaHRXaGl0ZScsICdicmFuZC4xMDAnKShwcm9wcyksXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufSlcbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkXG5cbiAgY29uc3QgdG9kbyA9IGF3YWl0IHByaXNtYS50b2RvLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogU3RyaW5nKGlkKSxcbiAgICB9LFxuICB9KVxuXG4gIGlmICghdG9kbyB8fCB1c2VyLmVtYWlsICE9PSB0b2RvPy51c2VyRW1haWwpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoYC90b2RvYClcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnRvZG8udXBkYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQsXG4gICAgICB9LFxuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiBqc29uKHsgb2s6IHRydWUgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggY2F0Y2ggYm91bmRhcnkgYW5kIGVycm9yIGJvdW5kYXJ5XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZ2dsZSgpIHtcbiAgcmV0dXJuIG51bGxcbn1cbiIsICIvLyBUT0RPIC0gTWlnaHQgd2FudCB0byByZWZhY3RvciB0aGlzLi4uIEVzcGVjaWFsbHkgdGhlIGZvcm1cblxuaW1wb3J0IHsgQ2xpcGJvYXJkQ29udGVudCBhcyBDbGlwYm9hcmRDb250ZW50VHlwZSwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIElucHV0LFxuICBTZWxlY3QsXG4gIFRleHRhcmVhLFxuICBCdXR0b24sXG4gIHVzZVRvYXN0LFxuICBNZW51LFxuICBNZW51QnV0dG9uLFxuICBNZW51SXRlbSxcbiAgTWVudUxpc3QsXG4gIEJveCxcbiAgVGFiLFxuICBUYWJMaXN0LFxuICBUYWJQYW5lbCxcbiAgVGFiUGFuZWxzLFxuICBUYWJzLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHtcbiAganNvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVBhcmFtcyxcbiAgT3V0bGV0LFxuICB1c2VUcmFuc2l0aW9uLFxuICBGb3JtLFxuICB1c2VOYXZpZ2F0ZSxcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IENoZXZyb25Eb3duSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuaW1wb3J0IHsgUGFnZVRpdGxlLCBRUkNvZGUsIFdyYXBwZXIgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBjb3B5VG9DbGlwYm9hcmQgfSBmcm9tICd+L3V0aWxzL2Jyb3dzZXInXG5pbXBvcnQgeyBjb21wb3NlVXJsIH0gZnJvbSAnfi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0NsaXBib2FyZCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGNsaXBib2FyZENvbnRlbnRzID0gYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBOdW1iZXIocGFyYW1zLmlkKSxcbiAgICB9LFxuICB9KVxuXG4gIGlmICghY2xpcGJvYXJkQ29udGVudHMpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cganNvbihcbiAgICAgIHsgbWVzc2FnZTogYFRoZSBDbGlwYm9hcmQgY29udGVudCB5b3UncmUgbG9va2luZyBmb3IgZG9lc24ndCBleGlzdHNgIH0sXG4gICAgICB7IHN0YXR1czogNDA0IH0sXG4gICAgKVxuICB9XG5cbiAgaWYgKGNsaXBib2FyZENvbnRlbnRzLnVzZXJFbWFpbCAhPT0gdXNlci5lbWFpbCkge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICB0aHJvdyBqc29uKFxuICAgICAgeyBtZXNzYWdlOiBgVW5hdXRob3JpemVkIGFjY2Vzcy4gWW91J3JlIG5vdCBhbGxvd2VkIHRvIHNlZSB0aGlzIGNvbnRlbnRgIH0sXG4gICAgICB7IHN0YXR1czogNDAxIH0sXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGpzb24oY2xpcGJvYXJkQ29udGVudHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHkoKSB7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICBjb25zdCBjbGlwYm9hcmRDb250ZW50cyA9IHVzZUxvYWRlckRhdGE8Q2xpcGJvYXJkQ29udGVudFR5cGU+KClcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKClcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7d2luZG93LmxvY2F0aW9uLmhyZWZ9L2MvJHtpZH1gKVxuICAgIHNldFVybChjb21wb3NlVXJsKHVybCkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGNvcHkgPSAoKSA9PiB7XG4gICAgY29weVRvQ2xpcGJvYXJkKGNsaXBib2FyZENvbnRlbnRzLmNvbnRlbnQsICgpID0+IHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsbHkgY29waWVkIHRvIGNsaXBib2FyZCcsXG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2hhcmUgPSAoKSA9PiB7XG4gICAgY29weVRvQ2xpcGJvYXJkKHVybCwgKCkgPT4ge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ1VSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJyxcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICB9KVxuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAnSWYgeW91IHdhbnQgdG8gc2hhcmUgdGhpcyBjb250ZW50IHRvIG90aGVyIHBsZWFzZSBtYWtlIHN1cmUgdG8gdXBkYXRlIHRoZSBjb250ZW50IHByaXZhdGUgZmllbGQgdG8gcHVibGljLicsXG4gICAgICAgIHN0YXR1czogJ2luZm8nLFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFBhZ2VUaXRsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj57Y2xpcGJvYXJkQ29udGVudHMudGl0bGV9PC9oMj5cbiAgICAgICAgICA8Qm94IG1sPXsnYXV0byd9PlxuICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFzPXtCdXR0b259IHJpZ2h0SWNvbj17PENoZXZyb25Eb3duSWNvbiAvPn0+XG4gICAgICAgICAgICAgICAgT3B0aW9uc1xuICAgICAgICAgICAgICA8L01lbnVCdXR0b24+XG4gICAgICAgICAgICAgIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gc2hhcmUoKX0+U2hhcmU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBjb3B5KCl9PkNvcHk8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0aW9uKGAvY2xpcGJvYXJkLyR7aWR9L2VkaXRgKX0+RWRpdDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRpb24oYC9jbGlwYm9hcmQvJHtpZH0vZGVsZXRlYCl9PkRlbGV0ZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QYWdlVGl0bGU+XG5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8Rm9ybSBrZXk9e3RyYW5zaXRpb24ubG9jYXRpb24/LmtleX0gY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDxGb3JtTGFiZWw+VGl0bGU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NsaXBib2FyZENvbnRlbnRzLnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgIDxGb3JtTGFiZWw+Q29udGVudDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW50IHRvIGNvcHlcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NsaXBib2FyZENvbnRlbnRzLmNvbnRlbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgIDxGb3JtTGFiZWw+SXMgUHJpdmF0ZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPVwicHJpdmF0ZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IG9wdGlvblwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YCR7Y2xpcGJvYXJkQ29udGVudHMucHJpdmF0ZX1gID8/ICd0cnVlJ31cbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+UHVibGljPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cnVlXCI+UHJpdmF0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8VGFicyBtdD17JzQnfT5cbiAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgIDxUYWI+Q29udGVudCBRUiBjb2RlPC9UYWI+XG4gICAgICAgICAgICA8VGFiPlNoYXJlYWJsZSBsaW5rIFFSIGNvZGU8L1RhYj5cbiAgICAgICAgICA8L1RhYkxpc3Q+XG5cbiAgICAgICAgICA8VGFiUGFuZWxzPlxuICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXtjbGlwYm9hcmRDb250ZW50cy5jb250ZW50fSAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17dXJsfSAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICA8L1RhYlBhbmVscz5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJleHBvcnQgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKGRhdGE6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogKHN0cmluZzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignYGNvcHlUb0NsaXBib2FyZGAgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGJyb3dzZXIgZW52aXJvbm1lbnQnKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChkYXRhKVxuICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHN1Y2Nlc3NDYWxsYmFjayhkYXRhKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm5cbiAgfVxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IERlbGV0ZURpYWxvZyB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGNvbXBvc2VOdW1iZXJJZCB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0NsaXBib2FyZCB8IERlbGV0ZScsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGlkID0gY29tcG9zZU51bWJlcklkKHBhcmFtcylcblxuICBjb25zdCBpc0N1cnJlbnRVc2VycyA9IGF3YWl0IHByaXNtYS5jbGlwYm9hcmRDb250ZW50LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KVxuXG4gIGlmIChpc0N1cnJlbnRVc2VycyAmJiBpc0N1cnJlbnRVc2Vycy51c2VyRW1haWwgPT09IHVzZXIuZW1haWwpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvY2xpcGJvYXJkJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlKCkge1xuICByZXR1cm4gPERlbGV0ZURpYWxvZyB0aXRsZT1cIkRlbGV0ZSBDb250ZW50XCIgbWVzc2FnZT1cIkFyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBDb250ZW50P1wiIC8+XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ34vdHlwZXMvY29tbW9uJ1xuaW1wb3J0IHsgQ2xpcGJvYXJkQ29udGVudCwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VOYXZpZ2F0ZSxcbiAganNvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE1vZGFsSGVhZGVyLCBNb2RhbENsb3NlQnV0dG9uLCBNb2RhbEJvZHkgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgeyBjb21wb3NlTnVtYmVySWQgfSBmcm9tICd+L3V0aWxzJ1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBDbGlwYm9hcmRDb250ZW50VHlwZSwgQ2xpcGJvYXJkQ29udGVudFNjaGVtYSB9IGZyb20gJ34vdHlwZXMvY2xpcGJvYXJkJ1xuaW1wb3J0IHsgZ2V0Rm9ybURhdGEsIGdldEZpbmFsRm9ybURhdGEgfSBmcm9tICd+L3V0aWxzL2Zvcm0nXG5pbXBvcnQgQ2xpcGJvYXJkRm9ybSwgeyBDbGlwYm9hcmRGb3JtUHJvcHMgfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybXMvY2xpcGJvYXJkJ1xuXG50eXBlIENsaXBib2FyZEFjdGlvblR5cGUgPSBBY3Rpb25UeXBlPENsaXBib2FyZENvbnRlbnRUeXBlPlxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQ2xpcGJvYXJkIHwgRWRpdCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGlkID0gY29tcG9zZU51bWJlcklkKHBhcmFtcylcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSlcblxuICBpZiAoIWNvbnRlbnQgfHwgY29udGVudC51c2VyRW1haWwgIT09IHVzZXIuZW1haWwpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgRXJyb3J5IGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IHJlZGlyZWN0KCcvY2xpcGJvYXJkJylcbiAgfVxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgY2xpcGJvYXJkQ29udGVudERhdGEgPSBnZXRGb3JtRGF0YTxDbGlwYm9hcmRDb250ZW50VHlwZT4oZm9ybURhdGEsIFtcbiAgICB7IGtleTogJ3RpdGxlJyB9LFxuICAgIHsga2V5OiAnY29udGVudCcgfSxcbiAgICB7IGtleTogJ3ByaXZhdGUnLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0sXG4gIF0pXG5cbiAgY29uc3QgY2xpcGJvYXJkQ29udGVudFZhbGlkYXRpb25SZXN1bHQgPSBDbGlwYm9hcmRDb250ZW50U2NoZW1hLnNhZmVQYXJzZShjbGlwYm9hcmRDb250ZW50RGF0YSlcblxuICBpZiAoIWNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZ2V0RmluYWxGb3JtRGF0YTxDbGlwYm9hcmRDb250ZW50VHlwZT4oXG4gICAgICBjbGlwYm9hcmRDb250ZW50RGF0YSxcbiAgICAgIGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmVycm9yLmZvcm1FcnJvcnMuZmllbGRFcnJvcnMsXG4gICAgKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjbGlwYm9hcmRDb250ZW50ID0gYXdhaXQgcHJpc21hLmNsaXBib2FyZENvbnRlbnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRlbnQ6IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmRhdGEuY29udGVudCxcbiAgICAgICAgdGl0bGU6IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICAgIHByaXZhdGU6IGNsaXBib2FyZENvbnRlbnRWYWxpZGF0aW9uUmVzdWx0LmRhdGEucHJpdmF0ZSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4gcmVkaXJlY3QoYC9jbGlwYm9hcmQvJHtjbGlwYm9hcmRDb250ZW50LmlkfWApXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBFcnJvcnkgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBjbGlwYm9hcmRDb250ZW50cyA9IGF3YWl0IHByaXNtYS5jbGlwYm9hcmRDb250ZW50LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogTnVtYmVyKHBhcmFtcy5pZCksXG4gICAgfSxcbiAgfSlcblxuICBpZiAoIWNsaXBib2FyZENvbnRlbnRzKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oXG4gICAgICB7IG1lc3NhZ2U6IGBUaGUgQ2xpcGJvYXJkIGNvbnRlbnQgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3RzYCB9LFxuICAgICAgeyBzdGF0dXM6IDQwNCB9LFxuICAgIClcbiAgfVxuXG4gIGlmIChjbGlwYm9hcmRDb250ZW50cy51c2VyRW1haWwgIT09IHVzZXIuZW1haWwpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cganNvbihcbiAgICAgIHsgbWVzc2FnZTogYFVuYXV0aG9yaXplZCBhY2Nlc3MuIFlvdSdyZSBub3QgYWxsb3dlZCB0byBzZWUgdGhpcyBjb250ZW50YCB9LFxuICAgICAgeyBzdGF0dXM6IDQwMSB9LFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBqc29uKGNsaXBib2FyZENvbnRlbnRzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGlwYm9hcmRDb250ZW50TmV3KCkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKC0xKVxuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPENsaXBib2FyZEFjdGlvblR5cGU+KClcblxuICBjb25zdCBjb250ZW50ID0gdXNlTG9hZGVyRGF0YTxDbGlwYm9hcmRDb250ZW50PigpXG5cbiAgY29uc3QgY2xpcGJvYXJkRm9ybVByb3BzOiBDbGlwYm9hcmRGb3JtUHJvcHMgPSB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHZhbHVlOiBjb250ZW50LnRpdGxlLFxuICAgICAgLi4uYWN0aW9uRGF0YT8udGl0bGUsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICB2YWx1ZTogY29udGVudC5jb250ZW50LFxuICAgICAgLi4uYWN0aW9uRGF0YT8uY29udGVudCxcbiAgICB9LFxuICAgIHByaXZhdGU6IHtcbiAgICAgIHZhbHVlOiBjb250ZW50LnByaXZhdGUsXG4gICAgICAuLi5hY3Rpb25EYXRhPy5wcml2YXRlLFxuICAgIH0sXG4gICAgc3VibWl0dGluZ1RleHQ6ICdTYXZpbmcnLFxuICAgIG9rQnV0dG9uVGV4dDogJ1NhdmUnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIGlzT3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICA8TW9kYWxIZWFkZXI+RWRpdCBDbGlwYm9hcmQgY29udGVudDwvTW9kYWxIZWFkZXI+XG4gICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgIDxDbGlwYm9hcmRGb3JtIHsuLi5jbGlwYm9hcmRGb3JtUHJvcHN9IC8+XG4gICAgICA8L01vZGFsQm9keT5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5cbmNvbnN0IENsaXBib2FyZENvbnRlbnRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRpdGxlOiB6LnN0cmluZygpLm1pbig1KS5tYXgoMjAwKSxcbiAgY29udGVudDogei5zdHJpbmcoKS5taW4oNSkubWF4KDIwMDApLFxuICBwcml2YXRlOiB6LmJvb2xlYW4oKSxcbn0pXG5cbnR5cGUgQ2xpcGJvYXJkQ29udGVudFR5cGUgPSB6LmluZmVyPHR5cGVvZiBDbGlwYm9hcmRDb250ZW50U2NoZW1hPlxuXG5leHBvcnQgeyBDbGlwYm9hcmRDb250ZW50U2NoZW1hLCBDbGlwYm9hcmRDb250ZW50VHlwZSB9XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdCgnL2xvZ2luJylcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKCdnaXRodWInLCByZXF1ZXN0KVxufVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5hdXRoZW50aWNhdGUoJ2dpdGh1YicsIHJlcXVlc3QsIHtcbiAgICBzdWNjZXNzUmVkaXJlY3Q6ICcvJyxcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4gcmVkaXJlY3QoJy9sb2dpbicpXG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBhdXRoZW50aWNhdG9yLmF1dGhlbnRpY2F0ZSgnZ29vZ2xlJywgcmVxdWVzdClcbn1cbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuYXV0aGVudGljYXRlKCdnb29nbGUnLCByZXF1ZXN0LCB7XG4gICAgc3VjY2Vzc1JlZGlyZWN0OiAnLycsXG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnfi90eXBlcy9jb21tb24nXG5pbXBvcnQgeyBVc2VyLCBWb3RlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBWb3RlU2NoZW1hLCBWb3RlVHlwZSB9IGZyb20gJ34vdHlwZXMvdm90ZSdcblxuaW1wb3J0IHtcbiAgSW5wdXRHcm91cCxcbiAgSW5wdXRMZWZ0RWxlbWVudCxcbiAgSW5wdXQsXG4gIEJ1dHRvbixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1FcnJvck1lc3NhZ2UsXG4gIFZTdGFjayxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIFN0YWNrRGl2aWRlcixcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IElvTWRBZGQgfSBmcm9tICdyZWFjdC1pY29ucy9pbydcbmltcG9ydCB7IFJpU2VhcmNoTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xuaW1wb3J0IHtcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlU3VibWl0LFxuICBGb3JtLFxuICBqc29uLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICB1c2VUcmFuc2l0aW9uLFxuICBPdXRsZXQsXG4gIEFjdGlvbkZ1bmN0aW9uLFxuICB1c2VGZXRjaGVyLFxufSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgVm90ZUl0ZW0sIE5vSXRlbXMsIFdyYXBwZXIgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IGdldEZvcm1EYXRhLCBnZXRGaW5hbEZvcm1EYXRhIH0gZnJvbSAnfi91dGlscy9mb3JtJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnVm90ZScsXG4gIH1cbn1cblxuaW50ZXJmYWNlIFZvdGVBY3Rpb25UeXBlIHtcbiAgZGF0YTogQWN0aW9uVHlwZTxWb3RlVHlwZT4gfCB1bmRlZmluZWQgfCBudWxsXG4gIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgfCAnJ1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3Qgdm90ZURhdGEgPSBnZXRGb3JtRGF0YTxWb3RlVHlwZT4oZm9ybURhdGEsIFt7IGtleTogJ3RpdGxlJywgZGVmYXVsdFZhbHVlOiAnJyB9XSlcblxuICBjb25zdCB2b3RlVmFsaWRhdGlvblJlc3VsdCA9IFZvdGVTY2hlbWEuc2FmZVBhcnNlKHZvdGVEYXRhKVxuXG4gIGlmICghdm90ZVZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGdldEZpbmFsRm9ybURhdGE8Vm90ZVR5cGU+KFxuICAgICAgdm90ZURhdGEsXG4gICAgICB2b3RlVmFsaWRhdGlvblJlc3VsdC5lcnJvci5mb3JtRXJyb3JzLmZpZWxkRXJyb3JzLFxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBkYXRhOiByZXN1bHQsXG4gICAgICBlcnJvck1lc3NhZ2U6IHJlc3VsdC50aXRsZT8uZXJyb3JNZXNzYWdlLFxuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnZvdGUuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6IHZvdGVWYWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4ganNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG51bGwsIGVycm9yTWVzc2FnZTogJycgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggY2F0Y2ggYW5kIGVycm9yIGJvdW5kYXJ5XG4gICAgcmV0dXJuIGpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3JNZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyB9KVxuICAgIC8vIHJldHVybiByZWRpcmVjdCgnLycpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKVxuXG4gIGNvbnN0IHF1ZXJ5ID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3EnKSA/PyAnJ1xuXG4gIGlmIChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaE1hdGNoUmVzdWx0ID0gYXdhaXQgcHJpc21hLnZvdGUuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlckVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGNvbnRhaW5zOiBxdWVyeSxcbiAgICAgICAgICBtb2RlOiAnaW5zZW5zaXRpdmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgdXB2b3RlczogJ2Rlc2MnLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIGpzb24oc2VhcmNoTWF0Y2hSZXN1bHQpXG4gIH1cblxuICBjb25zdCB2b3RlcyA9IGF3YWl0IHByaXNtYS52b3RlLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlckVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIH0sXG4gICAgb3JkZXJCeToge1xuICAgICAgdXB2b3RlczogJ2Rlc2MnLFxuICAgIH0sXG4gIH0pXG5cbiAgcmV0dXJuIGpzb24odm90ZXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaXBiYW9yZENvbnRlbnQoKSB7XG4gIGNvbnN0IHZvdGVzID0gdXNlTG9hZGVyRGF0YTxBcnJheTxWb3RlPj4oKVxuXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpXG5cbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIGNvbnN0IGJvcmRlckNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuMjAwJywgJ2dyYXkuNzAwJylcblxuICBjb25zdCBhZGRWb3RlRmV0Y2hlciA9IHVzZUZldGNoZXIoKVxuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSBhZGRWb3RlRmV0Y2hlci5kYXRhIGFzIFZvdGVBY3Rpb25UeXBlXG5cbiAgY29uc3QgaXNBZGRpbmcgPSBhZGRWb3RlRmV0Y2hlci5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHB5LThcIj5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIlxuICAgICAgICAgIG1ldGhvZD1cImdldFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyh0YXJnZXQpID0+IHN1Ym1pdCh0YXJnZXQuY3VycmVudFRhcmdldCl9XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRHcm91cCBzaXplPVwibWRcIj5cbiAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tY2hpbGRyZW4tcHJvcCovfVxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnQgcG9pbnRlckV2ZW50cz1cIm5vbmVcIiBjaGlsZHJlbj17PFJpU2VhcmNoTGluZSBjb2xvcj1cImdyYXkuMzAwXCIgLz59IC8+XG4gICAgICAgICAgICA8SW5wdXQgcHI9XCI0LjVyZW1cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJxXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG10LTQgYm9yZGVyIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICA8YWRkVm90ZUZldGNoZXIuRm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtYi02XCJcbiAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgYWN0aW9uPVwiL2hhYml0cy1yYW5rXCJcbiAgICAgICAgICAgIGtleT17dHJhbnNpdGlvbi5sb2NhdGlvbj8ua2V5fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9e2FjdGlvbkRhdGE/LmRhdGE/LnRpdGxlPy5pbnZhbGlkfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEhhYml0Li4uXCJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2FjdGlvbkRhdGE/LmRhdGE/LnRpdGxlPy5pbnZhbGlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57YWN0aW9uRGF0YT8uZGF0YT8udGl0bGU/LmVycm9yTWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsZWZ0SWNvbj17PElvTWRBZGQgLz59XG4gICAgICAgICAgICAgIG1sPVwiMlwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzb2xpZFwiXG4gICAgICAgICAgICAgIHc9XCIxNyVcIlxuICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0FkZGluZ31cbiAgICAgICAgICAgICAgbG9hZGluZ1RleHQ9XCJBZGRpbmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvYWRkVm90ZUZldGNoZXIuRm9ybT5cbiAgICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gZGl2aWRlcj17PFN0YWNrRGl2aWRlciBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3J9IC8+fT5cbiAgICAgICAgICAgIHt2b3Rlcy5tYXAoKHZvdGUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxWb3RlSXRlbSB7Li4udm90ZX0ga2V5PXt2b3RlLmlkfSAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICB7dm90ZXMubGVuZ3RoID09PSAwICYmIDxOb0l0ZW1zIHRpdGxlPVwiTm8gVm90ZWVzIGZvdW5kLiBQbGVhc2UgYWRkIHNvbWUhISFcIiAvPn1cbiAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5leHBvcnQgY29uc3QgVm90ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdGl0bGU6IHouc3RyaW5nKCkubWluKDUpLm1heCgxMDApLFxufSlcblxuZXhwb3J0IHR5cGUgVm90ZVR5cGUgPSB6LmluZmVyPHR5cGVvZiBWb3RlU2NoZW1hPlxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBjb21wb3NlTnVtYmVySWQgfSBmcm9tICd+L3V0aWxzJ1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMsIHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGlkID0gY29tcG9zZU51bWJlcklkKHBhcmFtcylcblxuICBjb25zdCBpc0N1cnJlbnRVc2VycyA9IGF3YWl0IHByaXNtYS52b3RlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KVxuXG4gIGlmICghaXNDdXJyZW50VXNlcnMgfHwgaXNDdXJyZW50VXNlcnMudXNlckVtYWlsICE9PSB1c2VyLmVtYWlsKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHJldHVybiByZWRpcmVjdCgnL2hhYml0cy1yYW5rJylcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnZvdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZG93bnZvdGVzOiB7XG4gICAgICAgICAgaW5jcmVtZW50OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiBqc29uKHsgb2s6IHRydWUgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBEZWxldGVEaWFsb2cgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1RvZG8gfCBEZWxldGUnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBpZCA9IHBhcmFtcy5pZCA/ICtwYXJhbXMuaWQgOiB1bmRlZmluZWRcblxuICBjb25zdCBpc0N1cnJlbnRVc2VycyA9IGF3YWl0IHByaXNtYS52b3RlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KVxuXG4gIGlmIChpc0N1cnJlbnRVc2VycyAmJiBpc0N1cnJlbnRVc2Vycy51c2VyRW1haWwgPT09IHVzZXIuZW1haWwpIHtcbiAgICBhd2FpdCBwcmlzbWEudm90ZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQsXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcmVkaXJlY3QoJy9oYWJpdHMtcmFuaycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZSgpIHtcbiAgcmV0dXJuIDxEZWxldGVEaWFsb2cgdGl0bGU9XCJEZWxldGUgSGFiaXRcIiBtZXNzYWdlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIEhhYml0P1wiIC8+XG59XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBpZCA9IHBhcmFtcy5pZCA/ICtwYXJhbXMuaWQgOiB1bmRlZmluZWRcblxuICBjb25zdCBpc0N1cnJlbnRVc2VycyA9IGF3YWl0IHByaXNtYS52b3RlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KVxuXG4gIGlmICghaXNDdXJyZW50VXNlcnMgfHwgaXNDdXJyZW50VXNlcnMudXNlckVtYWlsICE9PSB1c2VyLmVtYWlsKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHJldHVybiByZWRpcmVjdCgnL2hhYml0cy1yYW5rJylcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnZvdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXB2b3Rlczoge1xuICAgICAgICAgIGluY3JlbWVudDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4ganNvbih7IG9rOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICB0aHJvdyByZWRpcmVjdCgnLycpXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBWb3RlLCBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnfi90eXBlcy9jb21tb24nXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJ34vdHlwZXMvdG9kbydcblxuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTmF2aWdhdGUsXG4gIGpzb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgTW9kYWxIZWFkZXIsIE1vZGFsQ2xvc2VCdXR0b24sIE1vZGFsQm9keSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCB7IGNvbXBvc2VOdW1iZXJJZCB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IERpYWxvZywgSGFiaXRGb3JtIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgVm90ZUZvcm1Qcm9wcyB9IGZyb20gJ34vY29tcG9uZW50cy9mb3Jtcy92b3RlJ1xuaW1wb3J0IHsgZ2V0RmluYWxGb3JtRGF0YSwgZ2V0Rm9ybURhdGEgfSBmcm9tICd+L3V0aWxzL2Zvcm0nXG5pbXBvcnQgeyBWb3RlU2NoZW1hLCBWb3RlVHlwZSB9IGZyb20gJ34vdHlwZXMvdm90ZSdcblxuZXhwb3J0IHR5cGUgVm90ZUFjdGlvblR5cGUgPSBBY3Rpb25UeXBlPFRvZG9UeXBlPlxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgaWQgPSBjb21wb3NlTnVtYmVySWQocGFyYW1zKVxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgdG9kb0RhdGEgPSBnZXRGb3JtRGF0YTxUb2RvVHlwZT4oZm9ybURhdGEsIFt7IGtleTogJ3RpdGxlJyB9XSlcblxuICBjb25zdCBWb3RlVmFsaWRhdGlvblJlc3VsdCA9IFZvdGVTY2hlbWEuc2FmZVBhcnNlKHRvZG9EYXRhKVxuXG4gIGlmICghVm90ZVZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiBnZXRGaW5hbEZvcm1EYXRhPFZvdGVUeXBlPih0b2RvRGF0YSwgVm90ZVZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZm9ybUVycm9ycy5maWVsZEVycm9ycylcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnZvdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6IFZvdGVWYWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4gcmVkaXJlY3QoYC9oYWJpdHMtcmFua2ApXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICByZXR1cm4gcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCB2b3RlID0gYXdhaXQgcHJpc21hLnZvdGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBwYXJhbXMuaWQgPyArcGFyYW1zLmlkIDogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKCF2b3RlKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oeyBtZXNzYWdlOiBgVGhlIHZvdGUgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3RzYCB9LCB7IHN0YXR1czogNDA0IH0pXG4gIH1cblxuICBpZiAodm90ZS51c2VyRW1haWwgIT09IHVzZXIuZW1haWwpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cganNvbihcbiAgICAgIHsgbWVzc2FnZTogYFVuYXV0aG9yaXplZCBhY2Nlc3MuIFlvdSdyZSBub3QgYWxsb3dlZCB0byBzZWUgdGhpcyB2b3RlYCB9LFxuICAgICAgeyBzdGF0dXM6IDQwMSB9LFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBqc29uKHZvdGUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZvdGVFZGl0KCkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKC0xKVxuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPFZvdGVBY3Rpb25UeXBlPigpXG5cbiAgY29uc3Qgdm90ZSA9IHVzZUxvYWRlckRhdGE8Vm90ZT4oKVxuXG4gIGNvbnN0IGhhYml0Rm9ybVByb3BzOiBWb3RlRm9ybVByb3BzID0ge1xuICAgIHRpdGxlOiB7XG4gICAgICB2YWx1ZTogdm90ZS50aXRsZSxcbiAgICAgIC4uLmFjdGlvbkRhdGE/LnRpdGxlLFxuICAgIH0sXG4gICAgc3VibWl0dGluZ1RleHQ6ICdTYXZpbmcnLFxuICAgIG9rQnV0dG9uVGV4dDogJ1NhdmUnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIGlzT3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICA8TW9kYWxIZWFkZXI+RWRpdCBIYWJpdDwvTW9kYWxIZWFkZXI+XG4gICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgIDxIYWJpdEZvcm0gey4uLmhhYml0Rm9ybVByb3BzfSAvPlxuICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBDbGlwYm9hcmRDb250ZW50IGFzIENsaXBib2FyZENvbnRlbnRUeXBlLCBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIElucHV0R3JvdXAsIElucHV0TGVmdEVsZW1lbnQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSW9NZEFkZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJ1xuaW1wb3J0IHtcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIGpzb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZU5hdmlnYXRlLFxuICBMaW5rLFxuICBPdXRsZXQsXG4gIEZvcm0sXG4gIHVzZVN1Ym1pdCxcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFJpU2VhcmNoTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IENsaXBib2FyZENvbnRlbnQgYXMgQ2xpcGJvYXJkQ29udGVudENvbXAsIE5vSXRlbXMsIFdyYXBwZXIgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdDbGlwYm9hcmQnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblxuICBjb25zdCBxdWVyeSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcblxuICBpZiAocXVlcnkpIHtcbiAgICBjb25zdCBzZWFyY2hNYXRjaFJlc3VsdCA9IGF3YWl0IHByaXNtYS5jbGlwYm9hcmRDb250ZW50LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBjb250YWluczogcXVlcnksXG4gICAgICAgICAgbW9kZTogJ2luc2Vuc2l0aXZlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBqc29uKHNlYXJjaE1hdGNoUmVzdWx0KVxuICB9XG5cbiAgY29uc3QgY2xpcGJvYXJkQ29udGVudHMgPSBhd2FpdCBwcmlzbWEuY2xpcGJvYXJkQ29udGVudC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICB9LFxuICB9KVxuXG4gIHJldHVybiBqc29uKGNsaXBib2FyZENvbnRlbnRzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGlwYm9hcmRDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50cyA9IHVzZUxvYWRlckRhdGE8QXJyYXk8Q2xpcGJvYXJkQ29udGVudFR5cGU+PigpXG4gIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0ZSgpXG5cbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcHktOFwiPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiXG4gICAgICAgICAgbWV0aG9kPVwiZ2V0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KHRhcmdldCkgPT4gc3VibWl0KHRhcmdldC5jdXJyZW50VGFyZ2V0KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dEdyb3VwIHNpemU9XCJtZFwiIHdpZHRoPVwiODElXCI+XG4gICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWNoaWxkcmVuLXByb3AqL31cbiAgICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50IHBvaW50ZXJFdmVudHM9XCJub25lXCIgY2hpbGRyZW49ezxSaVNlYXJjaExpbmUgY29sb3I9XCJncmF5LjMwMFwiIC8+fSAvPlxuICAgICAgICAgICAgPElucHV0IHByPVwiNC41cmVtXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicVwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cbiAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbGVmdEljb249ezxJb01kQWRkIC8+fVxuICAgICAgICAgICAgdmFyaWFudD1cInNvbGlkXCJcbiAgICAgICAgICAgIHc9XCIxNyVcIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRpb24oJy9jbGlwYm9hcmQvbmV3Jyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIHtjb250ZW50cy5tYXAoKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89e2AvY2xpcGJvYXJkLyR7Y29udGVudC5pZH1gfVxuICAgICAgICAgICAgICAgICAga2V5PXtjb250ZW50LmlkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRyYW5zaXRpb24tYWxsIGJvcmRlciByb3VuZGVkLW1kIGhvdmVyOmJvcmRlci13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENsaXBib2FyZENvbnRlbnRDb21wIHsuLi5jb250ZW50fSBrZXk9e2NvbnRlbnQuaWR9IC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y29udGVudHMubGVuZ3RoID09PSAwICYmIDxOb0l0ZW1zIHRpdGxlPVwiTm8gY29waWVkIGl0ZW1zIGZvdW5kISEhXCIgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgQ2xpcGJvYXJkQ29udGVudFNjaGVtYSwgQ2xpcGJvYXJkQ29udGVudFR5cGUgfSBmcm9tICd+L3R5cGVzL2NsaXBib2FyZCdcbmltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICd+L3R5cGVzL2NvbW1vbidcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTmF2aWdhdGUsXG4gIE1ldGFGdW5jdGlvbixcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBNb2RhbEhlYWRlciwgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxCb2R5IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IHsgQ2xpcGJvYXJkRm9ybVByb3BzIH0gZnJvbSAnfi9jb21wb25lbnRzL2Zvcm1zL2NsaXBib2FyZCdcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuaW1wb3J0IHsgQ2xpcGJvYXJkRm9ybSwgRGlhbG9nIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0RmluYWxGb3JtRGF0YSwgZ2V0Rm9ybURhdGEgfSBmcm9tICd+L3V0aWxzL2Zvcm0nXG5cbnR5cGUgQ2xpcGJvYXJkQWN0aW9uVHlwZSA9IEFjdGlvblR5cGU8Q2xpcGJvYXJkQ29udGVudFR5cGU+XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdDbGlwYm9hcmQgfCBOZXcnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCBjbGlwYm9hcmRDb250ZW50RGF0YSA9IGdldEZvcm1EYXRhPENsaXBib2FyZENvbnRlbnRUeXBlPihmb3JtRGF0YSwgW1xuICAgIHsga2V5OiAndGl0bGUnIH0sXG4gICAgeyBrZXk6ICdjb250ZW50JyB9LFxuICAgIHsga2V5OiAncHJpdmF0ZScsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSxcbiAgXSlcblxuICBjb25zdCBjbGlwYm9hcmRDb250ZW50VmFsaWRhdGlvblJlc3VsdCA9IENsaXBib2FyZENvbnRlbnRTY2hlbWEuc2FmZVBhcnNlKGNsaXBib2FyZENvbnRlbnREYXRhKVxuXG4gIGlmICghY2xpcGJvYXJkQ29udGVudFZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgIHJldHVybiBnZXRGaW5hbEZvcm1EYXRhPENsaXBib2FyZENvbnRlbnRUeXBlPihcbiAgICAgIGNsaXBib2FyZENvbnRlbnREYXRhLFxuICAgICAgY2xpcGJvYXJkQ29udGVudFZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZm9ybUVycm9ycy5maWVsZEVycm9ycyxcbiAgICApXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGNsaXBib2FyZENvbnRlbnQgPSBhd2FpdCBwcmlzbWEuY2xpcGJvYXJkQ29udGVudC5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBjb250ZW50OiBjbGlwYm9hcmRDb250ZW50VmFsaWRhdGlvblJlc3VsdC5kYXRhLmNvbnRlbnQsXG4gICAgICAgIHRpdGxlOiBjbGlwYm9hcmRDb250ZW50VmFsaWRhdGlvblJlc3VsdC5kYXRhLnRpdGxlLFxuICAgICAgICBwcml2YXRlOiBjbGlwYm9hcmRDb250ZW50VmFsaWRhdGlvblJlc3VsdC5kYXRhLnByaXZhdGUsXG4gICAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4gcmVkaXJlY3QoYC9jbGlwYm9hcmQvJHtjbGlwYm9hcmRDb250ZW50LmlkfWApXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBFcnJvcnkgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpcGJvYXJkQ29udGVudE5ldygpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbigtMSlcblxuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxDbGlwYm9hcmRBY3Rpb25UeXBlPigpXG5cbiAgY29uc3QgY2xpcGJvYXJkRm9ybVByb3BzOiBDbGlwYm9hcmRGb3JtUHJvcHMgPSB7XG4gICAgLi4uYWN0aW9uRGF0YSxcbiAgICBzdWJtaXR0aW5nVGV4dDogJ0NyZWF0aW5nJyxcbiAgICBva0J1dHRvblRleHQ6ICdDcmVhdGUnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIGlzT3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICA8TW9kYWxIZWFkZXI+Q3JlYXRlIG5ldyBDbGlwYm9hcmQgY29udGVudDwvTW9kYWxIZWFkZXI+XG4gICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgIDxDbGlwYm9hcmRGb3JtIHsuLi5jbGlwYm9hcmRGb3JtUHJvcHN9IC8+XG4gICAgICA8L01vZGFsQm9keT5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VOYXZpZ2F0ZSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgRm9ybSxcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgTW9kYWwsXG4gIE1vZGFsT3ZlcmxheSxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgTW9kYWxCb2R5LFxuICBNb2RhbEZvb3RlcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG4gIEZvcm1FcnJvck1lc3NhZ2UsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5pbXBvcnQgeyBmb3JtYXRGaWVsZEVycm9yc05ldyB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcblxuY29uc3QgTGFiZWxTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGxhYmVsOiB6LnN0cmluZygpLm1pbig1KS5tYXgoMjApLFxufSlcblxudHlwZSBBY3Rpb25EYXRhVHlwZSA9IHtcbiAgdmFsdWVzOiB6LmluZmVyPHR5cGVvZiBMYWJlbFNjaGVtYT4gfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBlcnJvcnM6IFJlY29yZDxcbiAgICBrZXlvZiB6LmluZmVyPHR5cGVvZiBMYWJlbFNjaGVtYT4sXG4gICAge1xuICAgICAgbWVzc2FnZTogc3RyaW5nXG4gICAgICBpc0ludmFsaWQ6IGJvb2xlYW5cbiAgICB9XG4gID5cbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0xhYmVsIHwgTmV3JyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgYWN0aW9uRGF0YTogQWN0aW9uRGF0YVR5cGUgPSB7XG4gICAgdmFsdWVzOiB7fSxcbiAgICBlcnJvcnM6IHtcbiAgICAgIGxhYmVsOiB7IGlzSW52YWxpZDogdHJ1ZSwgbWVzc2FnZTogJycgfSxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgbGFiZWxEYXRhOiBQYXJ0aWFsPHouaW5mZXI8dHlwZW9mIExhYmVsU2NoZW1hPj4gPSB7XG4gICAgbGFiZWw6IFN0cmluZyhmb3JtRGF0YS5nZXQoJ2xhYmVsJykpLFxuICB9XG5cbiAgY29uc3QgbGFiZWxWYWxpZGF0aW9uUmVzdWx0ID0gTGFiZWxTY2hlbWEuc2FmZVBhcnNlKGxhYmVsRGF0YSlcblxuICBpZiAoIWxhYmVsVmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgYWN0aW9uRGF0YS52YWx1ZXMgPSB7IC4uLmxhYmVsRGF0YSB9XG4gICAgYWN0aW9uRGF0YS5lcnJvcnMgPSB7XG4gICAgICAuLi5mb3JtYXRGaWVsZEVycm9yc05ldyhsYWJlbERhdGEsIGxhYmVsVmFsaWRhdGlvblJlc3VsdC5lcnJvci5mb3JtRXJyb3JzLmZpZWxkRXJyb3JzKSxcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uRGF0YVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEubGFiZWwuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHsgbGFiZWw6IGxhYmVsVmFsaWRhdGlvblJlc3VsdC5kYXRhLmxhYmVsLCB1c2VyRW1haWw6IHVzZXIuZW1haWwgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlZGlyZWN0KGAvYClcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb05ldygpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbigtMSlcblxuICBjb25zdCBpbml0aWFsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KClcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3Qgc3VibWl0dGluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGFUeXBlPigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIGluaXRpYWxGb2N1c1JlZj17aW5pdGlhbFJlZn0gaXNPcGVuPXt0cnVlfSBvbkNsb3NlPXtvbkNsb3NlfSBpc0NlbnRlcmVkIHNpemU9XCJ4bFwiPlxuICAgICAgICA8TW9kYWxPdmVybGF5IGJnPVwibm9uZVwiIGJhY2tkcm9wRmlsdGVyPVwiYXV0b1wiIGJhY2tkcm9wSW52ZXJ0PVwiODAlXCIgYmFja2Ryb3BCbHVyPVwiMnB4XCIgLz5cbiAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8TW9kYWxIZWFkZXI+Q3JlYXRlIG5ldyBMYWJlbDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzLmxhYmVsLmlzSW52YWxpZH0+XG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5MYWJlbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgcmVmPXtpbml0aWFsUmVmfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnMubGFiZWwuaXNJbnZhbGlkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2FjdGlvbkRhdGE/LmVycm9ycy5sYWJlbC5tZXNzYWdlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuXG4gICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICBsb2FkaW5nVGV4dD17J0NyZWF0aW5nJ31cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gIClcbn1cbiIsICIvLyBUT0RPIC0gSGFuZGxlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuXG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnfi90eXBlcy9jb21tb24nXG5pbXBvcnQgeyBSZWRpcmVjdFR5cGUgfSBmcm9tICd+L3R5cGVzL3JlZGlyZWN0J1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIEJ1dHRvbixcbiAgSW5wdXQsXG4gIEZvcm1FcnJvck1lc3NhZ2UsXG4gIFZTdGFjayxcbiAgSFN0YWNrLFxuICB1c2VUb2FzdCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBGb3JtLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlVHJhbnNpdGlvbixcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJ3ZhbGlkYXRvcidcblxuaW1wb3J0IHsgUGFnZVRpdGxlLCBRUkNvZGUsIFdyYXBwZXIgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IGNvcHlUb0NsaXBib2FyZCB9IGZyb20gJ34vdXRpbHMvYnJvd3NlcidcbmltcG9ydCB7IGNvbXBvc2VVcmwgfSBmcm9tICd+L3V0aWxzJ1xuaW1wb3J0IHsgZ2V0RmluYWxGb3JtRGF0YSwgZ2V0Rm9ybURhdGEgfSBmcm9tICd+L3V0aWxzL2Zvcm0nXG5cbnR5cGUgUmVkaXJlY3RBY3Rpb25UeXBlID0gQWN0aW9uVHlwZTxSZWRpcmVjdFR5cGU+XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdRdWljayBSZWRpcmVjdCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuXG4gIGNvbnN0IHVybERhdGEgPSBnZXRGb3JtRGF0YTxSZWRpcmVjdFR5cGU+KGZvcm1EYXRhLCBbeyBrZXk6ICd1cmwnLCBkZWZhdWx0VmFsdWU6ICcnIH1dKVxuXG4gIGNvbnN0IHVybFZhbGlkYXRpb25SZXN1bHQgPSBWYWxpZGF0b3IuaXNVUkwodXJsRGF0YS51cmwpXG5cbiAgaWYgKCF1cmxWYWxpZGF0aW9uUmVzdWx0KSB7XG4gICAgcmV0dXJuIGdldEZpbmFsRm9ybURhdGEodXJsRGF0YSwgeyB1cmw6IFsnUGxlYXNlIGVudGVyIHZhbGlkIFVSTCddIH0pXG4gIH1cblxuICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHF1aWNrUmVkaXJlY3Q6IHVybERhdGEudXJsLFxuICAgIH0sXG4gIH0pXG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvcmVkaXJlY3QnKVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IHF1aWNrUmVkaXJlY3QgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBlbWFpbDogdXNlci5lbWFpbCB9LFxuICAgIHNlbGVjdDogeyBxdWlja1JlZGlyZWN0OiB0cnVlIH0sXG4gIH0pXG5cbiAgcmV0dXJuIHF1aWNrUmVkaXJlY3Q/LnF1aWNrUmVkaXJlY3QgPz8gJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpY2tDb3B5KCkge1xuICBjb25zdCBbcXVpY2tVcmwsIHNldFF1aWNrVXJsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWApXG4gICAgc2V0UXVpY2tVcmwoXG4gICAgICBjb21wb3NlVXJsKHVybCwge1xuICAgICAgICBpbmNsdWRlUGF0aG5hbWU6IGZhbHNlLFxuICAgICAgfSkgKyAnL3InLFxuICAgIClcbiAgfSwgW10pXG5cbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIGNvbnN0IHNhdmluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPFJlZGlyZWN0QWN0aW9uVHlwZT4oKVxuXG4gIGNvbnN0IHVybCA9IHVzZUxvYWRlckRhdGE8c3RyaW5nPigpXG5cbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpXG5cbiAgY29uc3QgY29weSA9ICgpID0+IHtcbiAgICBjb3B5VG9DbGlwYm9hcmQocXVpY2tVcmwsICgpID0+IHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdVUkwgc3VjY2Vzc2Z1bGx5IGNvcGllZCB0byBjbGlwYm9hcmQnLFxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxQYWdlVGl0bGU+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5RdWljayBSZWRpcmVjdDwvaDI+XG4gICAgICA8L1BhZ2VUaXRsZT5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gdz1cImZ1bGxcIiBzcGFjaW5nPXs4fSBtdD1cIjhcIj5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXthY3Rpb25EYXRhPy51cmwuaW52YWxpZH0+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+VVJMPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXJsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgICAgICB3PVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1cmx9XG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXthY3Rpb25EYXRhPy51cmwuaW52YWxpZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2FjdGlvbkRhdGE/LnVybC5lcnJvck1lc3NhZ2V9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgPEhTdGFjayBtdD1cIjJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaXNMb2FkaW5nPXtzYXZpbmd9IGxvYWRpbmdUZXh0PVwiU2F2aW5nXCI+XG4gICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjb3B5fT5Db3B5IFVSTDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PXsnX2JsYW5rJ30gcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgVmlzaXRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgPFZTdGFjayB3PVwiZnVsbFwiIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30+XG4gICAgICAgICAgICA8aDI+U2hhcmVhYmxlIFVSTDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00IGJvcmRlciByb3VuZGVkLW1kXCI+e3F1aWNrVXJsfTwvcD5cbiAgICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y29weX0+Q29weSBVUkw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtxdWlja1VybH0gdGFyZ2V0PXsnX2JsYW5rJ30gcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgVmlzaXRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPC9WU3RhY2s+XG5cbiAgICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gdz1cImZ1bGxcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VVJMIFFSIGNvZGU8L2gyPlxuICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17dXJsfSAvPlxuICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IFN0YWNrLCB1c2VDb2xvck1vZGVWYWx1ZSwgVlN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IExpbmssIE1ldGFGdW5jdGlvbiwgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuaW1wb3J0IHsgUGFnZVRpdGxlLCBXcmFwcGVyIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuXG5jb25zdCBsaW5rczogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyB0bzogc3RyaW5nIH0+ID0gW1xuICB7XG4gICAgdGl0bGU6ICdHZW5lcmFsJyxcbiAgICB0bzogJy9wcm9maWxlL2dlbmVyYWwnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFeHBvcnQnLFxuICAgIHRvOiAnL3Byb2ZpbGUvZXhwb3J0JyxcbiAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1Byb2ZpbGUnLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIGNvbnN0IHRleHRDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCd0ZXh0LWJsYWNrJywgJ3RleHQtd2hpdGUnKVxuICBjb25zdCBsaWdodFRleHRDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCd0ZXh0LWdyYXktNDAwJywgJ3RleHQtZ3JheS02MDAnKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxQYWdlVGl0bGU+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5QZXJzb25hbCBBY2NvdW50IFNldHRpbmdzPC9oMj5cbiAgICAgIDwvUGFnZVRpdGxlPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1snY29sdW1uJywgJ2NvbHVtbicsICdyb3cnLCAncm93J119IGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gcHk9eycxMCd9PlxuICAgICAgICAgIDxWU3RhY2sgc3BhY2luZz1cIjRcIiB3PXsnMjUlJ30gYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfSBtYj17WzgsIDgsIDAsIDBdfT5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB0bz17bGluay50b31cbiAgICAgICAgICAgICAgICBrZXk9e2xpbmsudG99XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHRleHRDb2xvciwge1xuICAgICAgICAgICAgICAgICAgW2xpZ2h0VGV4dENvbG9yXTogIWxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGxpbmsudG8pLFxuICAgICAgICAgICAgICAgICAgJ2ZvbnQtYm9sZCc6IGxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGxpbmsudG8pLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xpbmsudGl0bGV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMy80XCI+XG4gICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0TGVmdEFkZG9uLCBJbnB1dCwgVlN0YWNrLCBBdmF0YXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1Byb2ZpbGUgfCBHZW5lcmFsJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwgeyBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYWwoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VMb2FkZXJEYXRhPFVzZXI+KClcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFZTdGFjayBzcGFjaW5nPXs4fT5cbiAgICAgICAge3VzZXIucHJvZmlsZVVybCAmJiAoXG4gICAgICAgICAgPEF2YXRhciBuYW1lPXt1c2VyLm5hbWUgPz8gdXNlci5lbWFpbFswXX0gc3JjPXt1c2VyLnByb2ZpbGVVcmx9IHNpemU9XCIyeGxcIiAvPlxuICAgICAgICApfVxuICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICB7LyogIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1jaGlsZHJlbi1wcm9wICovfVxuICAgICAgICAgIDxJbnB1dExlZnRBZGRvbiBjaGlsZHJlbj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIiBkZWZhdWx0VmFsdWU9e3VzZXIuZW1haWx9IC8+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5pbXBvcnQgeyBMaW5rLCBWU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUHJvZmlsZSB8IEV4cG9ydCcsXG4gIH1cbn1cblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBjbGlwYm9hcmRzOiBudW1iZXJcbiAgdm90ZXM6IG51bWJlclxuICB0b2RvczogbnVtYmVyXG4gIHVzZXI6IFVzZXJcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gSXRlbSB7XG4gIENsaXBib2FyZHMgPSAnY2xpcGJvYXJkcycsXG4gIFZvdGVzID0gJ3ZvdGVzJyxcbiAgVG9kb3MgPSAndG9kb3MnLFxuICBVc2VyID0gJ3RvZG9zJyxcbiAgUXVpY2tSZWRpcmVjdCA9ICdxdWlja1JlZGlyZWN0JyxcbiAgUXVpY2tDb250ZW50ID0gJ3F1aWNrQ29udGVudCcsXG4gIEFsbCA9ICdhbGwnLFxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHsgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGNsaXBib2FyZHMgPSBhd2FpdCBwcmlzbWEuY2xpcGJvYXJkQ29udGVudC5jb3VudCh7XG4gICAgd2hlcmU6IHsgdXNlckVtYWlsOiB1c2VyLmVtYWlsIH0sXG4gIH0pXG5cbiAgY29uc3Qgdm90ZXMgPSBhd2FpdCBwcmlzbWEudm90ZS5jb3VudCh7XG4gICAgd2hlcmU6IHsgdXNlckVtYWlsOiB1c2VyLmVtYWlsIH0sXG4gIH0pXG5cbiAgY29uc3QgdG9kb3MgPSBhd2FpdCBwcmlzbWEudG9kby5jb3VudCh7XG4gICAgd2hlcmU6IHsgdXNlckVtYWlsOiB1c2VyLmVtYWlsIH0sXG4gIH0pXG5cbiAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSB9KVxuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdXNlcjogdXNlckRhdGEsXG4gICAgY2xpcGJvYXJkcyxcbiAgICB0b2RvcyxcbiAgICB2b3RlcyxcbiAgfVxuXG4gIHJldHVybiBqc29uKGRhdGEpXG59XG5cbnR5cGUgRXhwb3J0VHlwZSA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmcgfCBudWxsXG4gIHBhdGhuYW1lOiBJdGVtXG59XG5cbmNvbnN0IEV4cG9ydEl0ZW0gPSAoeyB0aXRsZSwgY29udGVudCwgcGF0aG5hbWUgfTogRXhwb3J0VHlwZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgcC00IGJvcmRlciByb3VuZGVkLW1kIGdhcC15LTJcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0yIHRleHQteGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwLTQgYnJlYWstd29yZHMgYm9yZGVyIHJvdW5kZWQtbWRcIj57Y29udGVudH08L3A+XG4gICAgICA8TGluayBocmVmPXtgL2V4cG9ydD9uYW1lPSR7cGF0aG5hbWV9YH0gaXNFeHRlcm5hbCBkb3dubG9hZD17cGF0aG5hbWV9PlxuICAgICAgICBFeHBvcnQgPEV4dGVybmFsTGlua0ljb24gbXg9XCIycHhcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYWwoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KClcblxuICBjb25zdCBleHBvcnRJdGVtczogQXJyYXk8RXhwb3J0VHlwZT4gPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdDb3B5JyxcbiAgICAgIGNvbnRlbnQ6IGRhdGEudXNlci5xdWlja0NvbnRlbnQsXG4gICAgICBwYXRobmFtZTogSXRlbS5RdWlja0NvbnRlbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1JlZGlyZWN0JyxcbiAgICAgIGNvbnRlbnQ6IGRhdGEudXNlci5xdWlja1JlZGlyZWN0LFxuICAgICAgcGF0aG5hbWU6IEl0ZW0uUXVpY2tSZWRpcmVjdCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ2xpcGJvYXJkJyxcbiAgICAgIGNvbnRlbnQ6IGAke2RhdGEuY2xpcGJvYXJkc30gY2xpcGJvYXJkIGl0ZW1zYCxcbiAgICAgIHBhdGhuYW1lOiBJdGVtLkNsaXBib2FyZHMsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1RvZG9zJyxcbiAgICAgIGNvbnRlbnQ6IGAke2RhdGEudG9kb3N9IHRvZG8gaXRlbXNgLFxuICAgICAgcGF0aG5hbWU6IEl0ZW0uVG9kb3MsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1ZvdGVzJyxcbiAgICAgIGNvbnRlbnQ6IGAke2RhdGEudm90ZXN9IHZvdGVzIGl0ZW1zYCxcbiAgICAgIHBhdGhuYW1lOiBJdGVtLlZvdGVzLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8VlN0YWNrIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gdz1cImZ1bGxcIj5cbiAgICAgICAgPFZTdGFjayB3PVwiZnVsbFwiIHNwYWNpbmc9ezZ9PlxuICAgICAgICAgIHtleHBvcnRJdGVtcy5tYXAoKGV4cG9ydEl0ZW0pID0+IChcbiAgICAgICAgICAgIDxFeHBvcnRJdGVtIHsuLi5leHBvcnRJdGVtfSBrZXk9e2V4cG9ydEl0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9leHBvcnQ/bmFtZT0ke0l0ZW0uQWxsfWB9IGlzRXh0ZXJuYWwgZG93bmxvYWQ9e0l0ZW0uQWxsfT5cbiAgICAgICAgICAgIEV4cG9ydCBhbGwgPEV4dGVybmFsTGlua0ljb24gbXg9XCIycHhcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9wcm9maWxlL2V4cG9ydCdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0V4cG9ydCcsXG4gIH1cbn1cblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChuYW1lOiBJdGVtIHwgJycsIHVzZXI6IFVzZXIpID0+IHtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgW0l0ZW0uQ2xpcGJvYXJkc106IGF3YWl0IHByaXNtYS5jbGlwYm9hcmRDb250ZW50LmZpbmRNYW55KHsgd2hlcmU6IHsgdXNlckVtYWlsOiB1c2VyLmVtYWlsIH0gfSksXG4gICAgW0l0ZW0uUXVpY2tDb250ZW50XTogdXNlci5xdWlja0NvbnRlbnQsXG4gICAgW0l0ZW0uUXVpY2tSZWRpcmVjdF06IHVzZXIucXVpY2tSZWRpcmVjdCxcbiAgICBbSXRlbS5Ub2Rvc106IGF3YWl0IHByaXNtYS50b2RvLmZpbmRNYW55KHsgd2hlcmU6IHsgdXNlckVtYWlsOiB1c2VyLmVtYWlsIH0gfSksXG4gICAgW0l0ZW0uVm90ZXNdOiBhd2FpdCBwcmlzbWEudm90ZS5maW5kTWFueSh7IHdoZXJlOiB7IHVzZXJFbWFpbDogdXNlci5lbWFpbCB9IH0pLFxuICB9XG5cbiAgaWYgKG5hbWUgPT09IEl0ZW0uQWxsKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgaWYgKCFjb25maWdbbmFtZV0pIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHJldHVybiBjb25maWdbbmFtZV1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7IGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicgfSkpIGFzIFVzZXJcbiAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSB9KVxuXG4gIGlmICghdXNlckRhdGEpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoJy9sb2dpbicpXG4gIH1cblxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKVxuXG4gIGNvbnN0IG5hbWUgPSAoU3RyaW5nKHVybC5zZWFyY2hQYXJhbXMuZ2V0KCduYW1lJykpIGFzIEl0ZW0pID8/ICcnXG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEobmFtZSwgdXNlckRhdGEpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IFtuYW1lXTogZGF0YSB9KSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgZGVzdHJveVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7IGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicgfSlcblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSlcblxuICB0aHJvdyByZWRpcmVjdCgnL2xvZ2luJywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwgeyBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nIH0pXG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpXG5cbiAgdGhyb3cgcmVkaXJlY3QoJy9sb2dpbicsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IGRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ291dCgpIHtcbiAgcmV0dXJuIG51bGxcbn1cbiIsICIvLyBUT0RPIC0gTWlnaHQgd2FudCB0byByZWZhY3RvciB0aGlzIGZpbGVcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy5wcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgdXNlVG9hc3QsIFZTdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IFBhZ2VUaXRsZSwgV3JhcHBlciB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgY29weVRvQ2xpcGJvYXJkIH0gZnJvbSAnfi91dGlscy9icm93c2VyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuXG50eXBlIExvYWRlclR5cGUgPSB7IGNvbnRlbnQ6IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdRdWljayBDb3B5JyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGNsaXBib2FyZENvbnRlbnRJZCA9IHBhcmFtcy5pZFxuXG4gIGlmICghY2xpcGJvYXJkQ29udGVudElkKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oXG4gICAgICB7IG1lc3NhZ2U6IGBDbGlwYm9hcmQgQ29udGVudCB5b3UncmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3RgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgfSxcbiAgICApXG4gIH1cblxuICBpZiAoY2xpcGJvYXJkQ29udGVudElkID09PSAnbGF0ZXN0Jykge1xuICAgIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgICB9KSkgYXMgVXNlclxuXG4gICAgY29uc3QgY2xpcGJvYXJkQ29udGVudCA9IGF3YWl0IHByaXNtYS5jbGlwYm9hcmRDb250ZW50LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyB1c2VyRW1haWw6IHVzZXIuZW1haWwgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYycsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBpZiAoIWNsaXBib2FyZENvbnRlbnQpIHtcbiAgICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICAgIHRocm93IGpzb24oXG4gICAgICAgIHsgbWVzc2FnZTogYENsaXBib2FyZCBDb250ZW50IHlvdSdyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdGAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICB9LFxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRlbnQ6IGNsaXBib2FyZENvbnRlbnQuY29udGVudCwgdGl0bGU6IGNsaXBib2FyZENvbnRlbnQudGl0bGUgfVxuICB9XG5cbiAgaWYgKGNsaXBib2FyZENvbnRlbnRJZCA9PT0gJ3EnKSB7XG4gICAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICAgIH0pKSBhcyBVc2VyXG5cbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWw6IHVzZXIuZW1haWwgfSxcbiAgICB9KVxuXG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgICAgdGhyb3cganNvbihcbiAgICAgICAgeyBtZXNzYWdlOiBgQ2xpcGJvYXJkIENvbnRlbnQgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0YCB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdHVzOiA0MDQsXG4gICAgICAgIH0sXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGVudDogY3VycmVudFVzZXIucXVpY2tDb250ZW50LCB0aXRsZTogJ1F1aWNrIENvcHknIH1cbiAgfVxuXG4gIGNvbnN0IGNsaXBib2FyZENvbnRlbnQgPSBhd2FpdCBwcmlzbWEuY2xpcGJvYXJkQ29udGVudC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogTnVtYmVyKGNsaXBib2FyZENvbnRlbnRJZCkgfSxcbiAgfSlcblxuICBpZiAoIWNsaXBib2FyZENvbnRlbnQpIHtcbiAgICAvLyBUT0RPIC0gSGFuZGxlIHRoaXMgd2l0aCB0aGUgZXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cganNvbihcbiAgICAgIHsgbWVzc2FnZTogYENsaXBib2FyZCBDb250ZW50IHlvdSdyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdGAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiA0MDQsXG4gICAgICB9LFxuICAgIClcbiAgfVxuXG4gIGlmICghY2xpcGJvYXJkQ29udGVudD8ucHJpdmF0ZSkge1xuICAgIHJldHVybiB7IGNvbnRlbnQ6IGNsaXBib2FyZENvbnRlbnQuY29udGVudCwgdGl0bGU6IGNsaXBib2FyZENvbnRlbnQudGl0bGUgfVxuICB9XG5cbiAgYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pXG5cbiAgcmV0dXJuIHsgY29udGVudDogY2xpcGJvYXJkQ29udGVudC5jb250ZW50LCB0aXRsZTogY2xpcGJvYXJkQ29udGVudC50aXRsZSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHlJZCgpIHtcbiAgY29uc3QgY29udGVudCA9IHVzZUxvYWRlckRhdGE8TG9hZGVyVHlwZT4oKVxuXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29weSgpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGNvcHkgPSAoKSA9PiB7XG4gICAgY29weVRvQ2xpcGJvYXJkKGNvbnRlbnQuY29udGVudCwgKCkgPT4ge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ1N1Y2Nlc3NmdWxseSBjb3BpZWQgdG8gY2xpcGJvYXJkJyxcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UGFnZVRpdGxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPntjb250ZW50LnRpdGxlfTwvaDI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb3B5KCl9IG1sPXsnYXV0byd9PlxuICAgICAgICAgICAgQ29weVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZVRpdGxlPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxWU3RhY2sgYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfSBweT17JzYnfSBzcGFjaW5nPXs2fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+VGhlIGNvbnRlbnQgYmVsb3cgaXMgYXV0b21hdGljYWxseSBjb3BpZWQuPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCBwLTQgYm9yZGVyIHJvdW5kZWQtbWRcIj57Y29udGVudC5jb250ZW50fTwvcD5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxuICByZXR1cm4gcmVkaXJlY3QoJy9ob21lJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29weSgpIHtcbiAgcmV0dXJuIG51bGxcbn1cbiIsICJpbXBvcnQgeyBCdXR0b24sIEZsZXgsIEhlYWRpbmcsIFN0YWNrLCBJbWFnZSwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VGZXRjaGVyIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBCc0dvb2dsZSwgQnNHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9icydcblxuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdDbGlwaSB8IFNpZ24gdXAgKG9yIGluKScsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwgeyBzdWNjZXNzUmVkaXJlY3Q6ICcvJyB9KVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVDYXJkKCkge1xuICBjb25zdCBnaXRodWJBdXRoRmV0Y2hlciA9IHVzZUZldGNoZXIoKVxuICBjb25zdCBnb29nbGVBdXRoRmV0Y2hlciA9IHVzZUZldGNoZXIoKVxuXG4gIGNvbnN0IGlzR2l0aHViQXV0aGVudGljYXRpbmcgPSBnaXRodWJBdXRoRmV0Y2hlci5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnXG4gIGNvbnN0IGlzR29vZ2xlQXV0aGVudGljYXRpbmcgPSBnb29nbGVBdXRoRmV0Y2hlci5zdGF0ZSA9PT0gJ3N1Ym1pdHRpbmcnXG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgbWluSD17JzEwMHZoJ30gZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBtZDogJ3JvdycgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtMSBwLThcIj5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9IHc9eydmdWxsJ30gbWF4Vz17J21kJ30+XG4gICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9eycyeGwnfSBtYj1cIjRcIj5cbiAgICAgICAgICAgIFNpZ24gaW4gdG8geW91ciBhY2NvdW50XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIDxnaXRodWJBdXRoRmV0Y2hlci5Gb3JtIGFjdGlvbj1cIi9hdXRoL2dpdGh1YlwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNHaXRodWJBdXRoZW50aWNhdGluZ31cbiAgICAgICAgICAgICAgICBsb2FkaW5nVGV4dD1cIkF1dGhlbnRpY2F0aW5nXCJcbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT17J3RlbGVncmFtJ31cbiAgICAgICAgICAgICAgICB2YXJpYW50PXsnc29saWQnfVxuICAgICAgICAgICAgICAgIHc9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICBsZWZ0SWNvbj17PEJzR2l0aHViIC8+fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiBJbiAob3IgdXApIHdpdGggR2l0aHViXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9naXRodWJBdXRoRmV0Y2hlci5Gb3JtPlxuICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJncmF5LjMwMFwiPlxuICAgICAgICAgICAgICBPclxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPGdvb2dsZUF1dGhGZXRjaGVyLkZvcm0gYWN0aW9uPVwiL2F1dGgvZ29vZ2xlXCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0dvb2dsZUF1dGhlbnRpY2F0aW5nfVxuICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PVwiQXV0aGVudGljYXRpbmdcIlxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPXsndGVsZWdyYW0nfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9eydzb2xpZCd9XG4gICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIGxlZnRJY29uPXs8QnNHb29nbGUgLz59XG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIEluIChvciB1cCkgd2l0aCBHb29nbGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2dvb2dsZUF1dGhGZXRjaGVyLkZvcm0+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZsZXggZmxleD17MX0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGFsdD17J0xvZ2luIEltYWdlJ31cbiAgICAgICAgICBvYmplY3RGaXQ9eydjb3Zlcid9XG4gICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NjMxMjMzODIxOS1jZTY4ZDJjNmY0NGQ/aXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MiZxPTgwJ1xuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvRmxleD5cbiAgICA8L1N0YWNrPlxuICApXG59XG4iLCAiLy8gVE9ETyAtIEhhbmRsZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgQ29weVR5cGUgfSBmcm9tICd+L3R5cGVzL2NvcHknXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEJ1dHRvbixcbiAgVGV4dGFyZWEsXG4gIEZvcm1MYWJlbCxcbiAgVGFiLFxuICBUYWJMaXN0LFxuICBUYWJQYW5lbCxcbiAgVGFiUGFuZWxzLFxuICBUYWJzLFxuICBWU3RhY2ssXG4gIHVzZVRvYXN0LFxuICBIU3RhY2ssXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgRm9ybSxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgcmVkaXJlY3QsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBQYWdlVGl0bGUsIFFSQ29kZSwgV3JhcHBlciB9IGZyb20gJ34vY29tcG9uZW50cydcbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuaW1wb3J0IHsgY29weVRvQ2xpcGJvYXJkIH0gZnJvbSAnfi91dGlscy9icm93c2VyJ1xuaW1wb3J0IHsgY29tcG9zZVVybCB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgeyBnZXRGb3JtRGF0YSB9IGZyb20gJ34vdXRpbHMvZm9ybSdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1F1aWNrIENvcHknLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCBjb250ZW50RGF0YSA9IGdldEZvcm1EYXRhPENvcHlUeXBlPihmb3JtRGF0YSwgW3sga2V5OiAnY29udGVudCcsIGRlZmF1bHRWYWx1ZTogJycgfV0pXG5cbiAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBxdWlja0NvbnRlbnQ6IGNvbnRlbnREYXRhLmNvbnRlbnQsXG4gICAgfSxcbiAgfSlcblxuICByZXR1cm4gcmVkaXJlY3QoJy9jb3B5Jylcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBxdWlja0NvbnRlbnQgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBlbWFpbDogdXNlci5lbWFpbCB9LFxuICAgIHNlbGVjdDogeyBxdWlja0NvbnRlbnQ6IHRydWUgfSxcbiAgfSlcblxuICByZXR1cm4gcXVpY2tDb250ZW50Py5xdWlja0NvbnRlbnQgPz8gJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpY2tDb3B5KCkge1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuICBjb25zdCBzYXZpbmcgPSB0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZydcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7d2luZG93LmxvY2F0aW9uLmhyZWZ9L2MvcWApXG4gICAgc2V0VXJsKGNvbXBvc2VVcmwodXJsKSlcbiAgfSwgW10pXG5cbiAgY29uc3QgY29udGVudCA9IHVzZUxvYWRlckRhdGE8c3RyaW5nPigpXG5cbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpXG5cbiAgY29uc3QgY29weSA9ICgpID0+IHtcbiAgICBjb3B5VG9DbGlwYm9hcmQodXJsLCAoKSA9PiB7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiAnVVJMIHN1Y2Nlc3NmdWxseSBjb3BpZWQgdG8gY2xpcGJvYXJkJyxcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8UGFnZVRpdGxlPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+UXVpY2sgQ29weTwvaDI+XG4gICAgICA8L1BhZ2VUaXRsZT5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gdz1cImZ1bGxcIiBtdD1cIjhcIiBzcGFjaW5nPXs4fT5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+Q29udGVudDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8VGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG5hbWU9XCJjb250ZW50XCIgZGVmYXVsdFZhbHVlPXtjb250ZW50fSAvPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGlzTG9hZGluZz17c2F2aW5nfSBsb2FkaW5nVGV4dD1cIlNhdmluZ1wiIG10PVwiMlwiPlxuICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICA8VlN0YWNrIHc9XCJmdWxsXCIgYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfT5cbiAgICAgICAgICAgIDxoMj5TaGFyZWFibGUgVVJMPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCBwLTQgYm9yZGVyIHJvdW5kZWQtbWRcIj57dXJsfTwvcD5cbiAgICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y29weX0+Q29weSBVUkw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD17J19ibGFuayd9IHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgIFZpc2l0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDwvVlN0YWNrPlxuXG4gICAgICAgICAgPFRhYnMgdz1cImZ1bGxcIj5cbiAgICAgICAgICAgIDxUYWJMaXN0PlxuICAgICAgICAgICAgICA8VGFiPkNvbnRlbnQgUVIgY29kZTwvVGFiPlxuICAgICAgICAgICAgICA8VGFiPlNoYXJlYWJsZSBsaW5rIFFSIGNvZGU8L1RhYj5cbiAgICAgICAgICAgIDwvVGFiTGlzdD5cblxuICAgICAgICAgICAgPFRhYlBhbmVscz5cbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXt1cmx9IC8+XG4gICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8L1RhYlBhbmVscz5cbiAgICAgICAgICA8L1RhYnM+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiLy8gVE9ETyAtIEhhbmRsZSA0MDQgYW5kIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuXG5pbXBvcnQgeyBMYWJlbCwgTGFiZWxzT25Ub2RvLCBUb2RvLCBVc2VyLCBWb3RlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmltcG9ydCB7IEhTdGFjaywgU3RhY2tEaXZpZGVyLCBUYWcsIHVzZUNvbG9yTW9kZVZhbHVlLCBWU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyBDYXJkLCBOb0l0ZW1zLCBUb2RvSXRlbSwgVm90ZUl0ZW0sIFdyYXBwZXIgfSBmcm9tICd+L2NvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXRUb2RheSB9IGZyb20gJ34vdXRpbHMnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuXG50eXBlIExvYWRlclR5cGUgPSB7XG4gIHRvZG9zOiBBcnJheTxcbiAgICBUb2RvICYge1xuICAgICAgbGFiZWxzOiAoTGFiZWxzT25Ub2RvICYge1xuICAgICAgICBMYWJlbDogTGFiZWwgfCBudWxsXG4gICAgICB9KVtdXG4gICAgfVxuICA+XG4gIHZvdGVzOiBBcnJheTxWb3RlPlxufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnSG9tZScsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCB0b2RvcyA9IGF3YWl0IHByaXNtYS50b2RvLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlckVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgZHVlRGF0ZToge1xuICAgICAgICBlcXVhbHM6IGdldFRvZGF5KCksXG4gICAgICB9LFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBMYWJlbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICBjb21wbGV0ZWQ6ICdhc2MnLFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3Qgdm90ZXMgPSBhd2FpdCBwcmlzbWEudm90ZS5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIHVwZGF0ZWRBdDogJ2Rlc2MnLFxuICAgIH0sXG4gICAgdGFrZTogNSxcbiAgfSlcblxuICByZXR1cm4ganNvbih7IHRvZG9zOiB0b2RvcyA/PyBbXSwgdm90ZXM6IHZvdGVzID8/IFtdIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJUeXBlPigpXG5cbiAgY29uc3QgYm9yZGVyQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS4yMDAnLCAnZ3JheS44MDAnKVxuXG4gIGNvbnN0IGluY29tcGxldGVUYXNrID0gZGF0YS50b2Rvcy5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgIGlmIChjdXJyZW50LmNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuIGFjYyArIDFcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9LCAwKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktOFwiPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxWU3RhY2sgYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfSB3PVwiZnVsbFwiIHNwYWNpbmc9ezZ9PlxuICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcGItMiBtYi00IGJvcmRlci1iXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5Ub2RvczwvaDI+XG4gICAgICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICAgICAgPFRhZz57aW5jb21wbGV0ZVRhc2t9PC9UYWc+XG4gICAgICAgICAgICAgICAgPHNwYW4+Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8VGFnIGNvbG9yU2NoZW1lPXsnY3lhbid9PntkYXRhLnRvZG9zLmxlbmd0aH0gY29tcGxldGVkPC9UYWc+XG4gICAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VlN0YWNrIGFsaWduSXRlbXM9eydmbGV4LXN0YXJ0J30gZGl2aWRlcj17PFN0YWNrRGl2aWRlciBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3J9IC8+fT5cbiAgICAgICAgICAgICAge2RhdGEudG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICAgICAgPFRvZG9JdGVtIHsuLi50b2RvfSBrZXk9e3RvZG8uaWR9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgICB7ZGF0YS50b2Rvcy5sZW5ndGggPT09IDAgJiYgPE5vSXRlbXMgdGl0bGU9XCJObyB0b2RvcyBmb3IgdG9kYXkhISFcIiAvPn1cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0yIG1iLTQgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPkhhYml0cyBSYW5rPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFZTdGFjayBhbGlnbkl0ZW1zPXsnZmxleC1zdGFydCd9IGRpdmlkZXI9ezxTdGFja0RpdmlkZXIgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yfSAvPn0+XG4gICAgICAgICAgICAgIHtkYXRhLnZvdGVzLm1hcCgodm90ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxWb3RlSXRlbSB7Li4udm90ZX0ga2V5PXt2b3RlLmlkfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAge2RhdGEudm90ZXMubGVuZ3RoID09PSAwICYmIDxOb0l0ZW1zIHRpdGxlPVwiTm8gaGFiaXQgcmFuayB2b3RlcyBmb3VuZCBmb3IgdG9kYXkhISFcIiAvPn1cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiLy8gVE9ETyAtIE1pZ2h0IHdhbnQgdG8gcmVmYWN0b3Igc3R1ZmYgaW4gdGhpcyBmaWxlXG5cbmltcG9ydCB7IExhYmVsLCBMYWJlbHNPblRvZG8sIFRvZG8gYXMgVG9kb1R5cGUsIFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHtcbiAgSW5wdXRHcm91cCxcbiAgSW5wdXRMZWZ0RWxlbWVudCxcbiAgSW5wdXQsXG4gIEJ1dHRvbixcbiAgVlN0YWNrLFxuICBTdGFja0RpdmlkZXIsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBIU3RhY2ssXG4gIFNlbGVjdCxcbiAgU3RhY2ssXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIFN3aXRjaCxcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgTWVudUJ1dHRvbixcbiAgTWVudUl0ZW0sXG4gIE1lbnVMaXN0LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBJb01kQWRkIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXG5pbXBvcnQgeyBSaVNlYXJjaExpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7IElvSW9zT3B0aW9ucyB9IGZyb20gJ3JlYWN0LWljb25zL2lvJ1xuaW1wb3J0IHsgUmlEZWxldGVCYWNrMkxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7XG4gIEZvcm0sXG4gIGpzb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIE91dGxldCxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlTmF2aWdhdGUsXG4gIHVzZVN1Ym1pdCxcbn0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IFdyYXBwZXIsIE5vSXRlbXMsIFRvZG9JdGVtIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5cbmNvbnN0IGVudW0gRmlsdGVyQnlPcHRpb25zIHtcbiAgU0hPV19BTEwgPSAnc2hvd2FsbCcsXG4gIFRPREFZID0gJ3RvZGF5JyxcbiAgVVBDT01JTkcgPSAndXBjb21pbmcnLFxuICBPVkVSRFVFID0gJ292ZXJkdWUnLFxufVxuXG5jb25zdCBlbnVtIFNvcnRCeU9wdGlvbnMge1xuICBQUklPUklUWSA9ICdwcmlvcml0eScsXG4gIExBU1RfVVBEQVRFRCA9ICdsYXN0dXBkYXRlZCcsXG4gIFRJVExFID0gJ3RpdGxlJyxcbiAgTEFURVNUID0gJ2xhdGVzdCcsXG59XG5cbnR5cGUgTG9hZGVyVHlwZSA9IHtcbiAgdG9kbzogKFRvZG9UeXBlICYge1xuICAgIGxhYmVsczogKExhYmVsc09uVG9kbyAmIHtcbiAgICAgIExhYmVsOiBMYWJlbCB8IG51bGxcbiAgICB9KVtdXG4gIH0pW11cbiAgc29ydEJ5OiBTb3J0QnlPcHRpb25zXG4gIGZpbHRlckJ5OiBGaWx0ZXJCeU9wdGlvbnNcbiAgc2hvdzogJ2NvbXBsZXRlZCcgfCAncGVuZGluZydcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1RvZG8nLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcblxuICBjb25zdCBxdWVyeSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdxJykgPz8gJydcbiAgY29uc3QgZmlsdGVyQnkgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnZmlsdGVyQnknKSA/PyBGaWx0ZXJCeU9wdGlvbnMuU0hPV19BTExcbiAgY29uc3Qgc29ydEJ5ID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3NvcnRCeScpID8/IFNvcnRCeU9wdGlvbnMuTEFURVNUXG4gIGNvbnN0IHNob3cgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnc2hvdycpID8/ICdwZW5kaW5nJ1xuXG4gIC8vIGNvbnN0IHRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgY29uc3QgZHVlRGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgbGV0IGFkZGlvbnRhbFF1ZXJ5ID0ge31cbiAgbGV0IG9yZGVyQnkgPSB7fVxuXG4gIGlmIChzb3J0QnkgPT09IFNvcnRCeU9wdGlvbnMuTEFURVNUKSB7XG4gICAgb3JkZXJCeSA9IHtcbiAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnLFxuICAgIH1cbiAgfSBlbHNlIGlmIChzb3J0QnkgPT09IFNvcnRCeU9wdGlvbnMuVElUTEUpIHtcbiAgICBvcmRlckJ5ID0ge1xuICAgICAgdGl0bGU6ICdhc2MnLFxuICAgIH1cbiAgfSBlbHNlIGlmIChzb3J0QnkgPT09IFNvcnRCeU9wdGlvbnMuUFJJT1JJVFkpIHtcbiAgICBvcmRlckJ5ID0ge1xuICAgICAgcHJpb3JpdHk6ICdhc2MnLFxuICAgIH1cbiAgfSBlbHNlIGlmIChzb3J0QnkgPT09IFNvcnRCeU9wdGlvbnMuTEFTVF9VUERBVEVEKSB7XG4gICAgb3JkZXJCeSA9IHtcbiAgICAgIHVwZGF0ZWRBdDogJ2Rlc2MnLFxuICAgIH1cbiAgfVxuXG4gIGlmIChmaWx0ZXJCeSA9PT0gRmlsdGVyQnlPcHRpb25zLlVQQ09NSU5HKSB7XG4gICAgYWRkaW9udGFsUXVlcnkgPSB7XG4gICAgICBkdWVEYXRlOiB7XG4gICAgICAgIGd0OiBkdWVEYXRlLFxuICAgICAgfSxcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmlsdGVyQnkgPT09IEZpbHRlckJ5T3B0aW9ucy5PVkVSRFVFKSB7XG4gICAgYWRkaW9udGFsUXVlcnkgPSB7XG4gICAgICBkdWVEYXRlOiB7XG4gICAgICAgIGx0OiBkdWVEYXRlLFxuICAgICAgfSxcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmlsdGVyQnkgPT09IEZpbHRlckJ5T3B0aW9ucy5UT0RBWSkge1xuICAgIGFkZGlvbnRhbFF1ZXJ5ID0ge1xuICAgICAgZHVlRGF0ZToge1xuICAgICAgICBlcXVhbHM6IGR1ZURhdGUsXG4gICAgICB9LFxuICAgIH1cbiAgfSBlbHNlIGlmIChmaWx0ZXJCeSA9PT0gRmlsdGVyQnlPcHRpb25zLlNIT1dfQUxMKSB7XG4gICAgYWRkaW9udGFsUXVlcnkgPSB7fVxuICB9XG5cbiAgaWYgKHNob3cgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgYWRkaW9udGFsUXVlcnkgPSB7XG4gICAgICAuLi5hZGRpb250YWxRdWVyeSxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYWRkaW9udGFsUXVlcnkgPSB7XG4gICAgICAuLi5hZGRpb250YWxRdWVyeSxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoTWF0Y2hSZXN1bHQgPSBhd2FpdCBwcmlzbWEudG9kby5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1c2VyRW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgY29udGFpbnM6IHF1ZXJ5LFxuICAgICAgICAgIG1vZGU6ICdpbnNlbnNpdGl2ZScsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLi4uYWRkaW9udGFsUXVlcnksXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBMYWJlbDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgLi4ub3JkZXJCeSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiBqc29uKHsgdG9kbzogc2VhcmNoTWF0Y2hSZXN1bHQsIGZpbHRlckJ5LCBzb3J0QnkgfSlcbiAgfVxuXG4gIGNvbnN0IHRvZG8gPSBhd2FpdCBwcmlzbWEudG9kby5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIC4uLmFkZGlvbnRhbFF1ZXJ5LFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBMYWJlbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICAuLi5vcmRlckJ5LFxuICAgIH0sXG4gIH0pXG5cbiAgcmV0dXJuIGpzb24oeyB0b2RvLCBmaWx0ZXJCeSwgc29ydEJ5LCBzaG93IH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8oKSB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0ZSgpXG5cbiAgY29uc3QgeyB0b2RvLCBmaWx0ZXJCeSwgc29ydEJ5LCBzaG93IH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlclR5cGU+KClcblxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKVxuXG4gIGNvbnN0IGJvcmRlckNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuMjAwJywgJ2dyYXkuODAwJylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LThcIj5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIlxuICAgICAgICAgIG1ldGhvZD1cImdldFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyh0YXJnZXQpID0+IHN1Ym1pdCh0YXJnZXQuY3VycmVudFRhcmdldCl9XG4gICAgICAgICAgb25SZXNldD17KHRhcmdldCkgPT4gc3VibWl0KHRhcmdldC5jdXJyZW50VGFyZ2V0KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxWU3RhY2sgdz1cImZ1bGxcIj5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBkaXJlY3Rpb249e1snY29sdW1uJywgJ2NvbHVtbicsICdyb3cnLCAncm93J119XG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0R3JvdXAgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIC8vICBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tY2hpbGRyZW4tcHJvcFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW49ezxSaVNlYXJjaExpbmUgY29sb3I9XCJncmF5LjMwMFwiIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPElucHV0IHByPVwiNC41cmVtXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicVwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cbiAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPEhTdGFjayBmbGV4PXsnMid9IGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiIHc9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IG5hbWU9XCJmaWx0ZXJCeVwiIGRlZmF1bHRWYWx1ZT17ZmlsdGVyQnkgPz8gRmlsdGVyQnlPcHRpb25zLlNIT1dfQUxMfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCB2YWx1ZT17RmlsdGVyQnlPcHRpb25zLlNIT1dfQUxMfT5cbiAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIgYnlcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0ZpbHRlckJ5T3B0aW9ucy5TSE9XX0FMTH0+U2hvdyBBbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17RmlsdGVyQnlPcHRpb25zLlRPREFZfT5Ub2RheTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtGaWx0ZXJCeU9wdGlvbnMuVVBDT01JTkd9PlVwY29taW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0ZpbHRlckJ5T3B0aW9ucy5PVkVSRFVFfT5PdmVyZHVlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgbmFtZT1cInNvcnRCeVwiIGRlZmF1bHRWYWx1ZT17c29ydEJ5ID8/IFNvcnRCeU9wdGlvbnMuTEFURVNUfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCB2YWx1ZT17U29ydEJ5T3B0aW9ucy5MQVRFU1R9PlxuICAgICAgICAgICAgICAgICAgICAgIFNvcnQgYnlcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1NvcnRCeU9wdGlvbnMuTEFURVNUfT5MYXRlc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17U29ydEJ5T3B0aW9ucy5USVRMRX0+VGl0bGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17U29ydEJ5T3B0aW9ucy5QUklPUklUWX0+UHJpb3JpdHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17U29ydEJ5T3B0aW9ucy5MQVNUX1VQREFURUR9Pkxhc3QgdXBkYXRlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcz17SWNvbkJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PElvSW9zT3B0aW9ucyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgd2lkdGg9eydpbml0aWFsJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cInNob3ctY29tcGxldGVkXCIgbWI9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBjb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob3ctY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17c2hvdyA9PT0gJ2NvbXBsZXRlZCcgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPEhTdGFjayB3PVwiZnVsbFwiIGp1c3RpZnlDb250ZW50PXsnZmxleC1lbmQnfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGxlZnRJY29uPXs8SW9NZEFkZCAvPn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9eyd0d2l0dGVyJ31cbiAgICAgICAgICAgICAgICB3PXtbJ2Z1bGwnLCAnZnVsbCcsICdpbml0aWFsJywgJ2luaXRpYWwnXX1cbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRpb24oJy90b2RvL25ldycpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgbGVmdEljb249ezxSaURlbGV0ZUJhY2syTGluZSAvPn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgdz17WydmdWxsJywgJ2Z1bGwnLCAnaW5pdGlhbCcsICdpbml0aWFsJ119XG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJyZWRcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInJlc2V0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDwvRm9ybT5cblxuICAgICAgICB7dG9kby5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgPE5vSXRlbXMgdGl0bGU9XCJObyB0b2RvIGxpc3QgaXRlbXMgZm91bmQhISFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8VlN0YWNrXG4gICAgICAgICAgYWxpZ25JdGVtcz17J2ZsZXgtc3RhcnQnfVxuICAgICAgICAgIG10PVwiOFwiXG4gICAgICAgICAgZGl2aWRlcj17PFN0YWNrRGl2aWRlciBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3J9IC8+fVxuICAgICAgICA+XG4gICAgICAgICAge3RvZG8ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgdG9kby5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxUb2RvSXRlbSB7Li4udG9kb30ga2V5PXt0b2RvLmlkfSAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiLy8gVE9ETyAtIElmIGZyZWUgY2hlY2sgdGhpcyBhZ2Fpbi5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuXG5jb25zdCBEdWVEYXRlU2NoZW1hID0gei5kYXRlKClcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGlkID0gU3RyaW5nKHBhcmFtcy5pZClcblxuICBjb25zdCB0b2RvID0gYXdhaXQgcHJpc21hLnRvZG8uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKCF0b2RvKSB7XG4gICAgdGhyb3cgcmVkaXJlY3QoJy90b2RvJylcbiAgfVxuXG4gIGlmICh0b2RvLnVzZXJFbWFpbCAhPT0gdXNlci5lbWFpbCkge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICB0aHJvdyBqc29uKHsgbWVzc2FnZTogJ1lvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gZWRpdCB0aGlzIGNvbnRlbnQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcbiAgfVxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgZHVlRGF0ZSA9IGZvcm1EYXRhLmdldCgnZHVlRGF0ZScpID8gbmV3IERhdGUoU3RyaW5nKGZvcm1EYXRhLmdldCgnZHVlRGF0ZScpKSkgOiB1bmRlZmluZWRcblxuICBjb25zdCBkdWVEYXRlVmFsaWRhdGlvblJlc3VsdCA9IER1ZURhdGVTY2hlbWEuc2FmZVBhcnNlKGR1ZURhdGUpXG5cbiAgaWYgKCFkdWVEYXRlVmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHJldHVybiBqc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdJbnZhbGlkIGR1ZSBkYXRlIHBhc3NlZC4gUGxlYXNlIHBhc3MgdmFsaWQgZHVlIGRhdGUuJyB9KVxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEudG9kby51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IFN0cmluZyhwYXJhbXMuaWQpLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZHVlRGF0ZTogbW9tZW50KGR1ZURhdGVWYWxpZGF0aW9uUmVzdWx0LmRhdGEpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIGpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICByZXR1cm4ganNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVXBkYXRpbmcgZHVlIGRhdGUgZmFpbGVkJyB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGUoKSB7XG4gIHJldHVybiBudWxsXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VOYXZpZ2F0ZSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgRm9ybSxcbiAganNvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgVGV4dGFyZWEsXG4gIE1vZGFsLFxuICBNb2RhbE92ZXJsYXksXG4gIE1vZGFsQ29udGVudCxcbiAgTW9kYWxIZWFkZXIsXG4gIE1vZGFsQ2xvc2VCdXR0b24sXG4gIE1vZGFsQm9keSxcbiAgTW9kYWxGb290ZXIsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIElucHV0LFxuICBGb3JtRXJyb3JNZXNzYWdlLFxuICBTZWxlY3QgYXMgQ1NlbGVjdCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5pbXBvcnQgeyBMYWJlbCwgVG9kbywgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgZm9ybWF0RmllbGRFcnJvcnNOZXcgfSBmcm9tICd+L3V0aWxzJ1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xuXG5jb25zdCBUb2RvU2NoZW1hID0gei5vYmplY3Qoe1xuICB0aXRsZTogei5zdHJpbmcoKS5taW4oNSkubWF4KDUwMCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm1heCgxNTApLm9wdGlvbmFsKCksXG4gIGNvbXBsZXRlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZHVlRGF0ZTogei5kYXRlKCkub3B0aW9uYWwoKSxcbiAgbGFiZWxzOiB6LmFycmF5KHoubnVtYmVyKCkpLm9wdGlvbmFsKCksXG59KVxuXG50eXBlIEFjdGlvbkRhdGFUeXBlID0ge1xuICB2YWx1ZXM6IHouaW5mZXI8dHlwZW9mIFRvZG9TY2hlbWE+IHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZXJyb3JzOiBSZWNvcmQ8XG4gICAga2V5b2Ygei5pbmZlcjx0eXBlb2YgVG9kb1NjaGVtYT4sXG4gICAge1xuICAgICAgbWVzc2FnZTogc3RyaW5nXG4gICAgICBpc0ludmFsaWQ6IGJvb2xlYW5cbiAgICB9XG4gID5cbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1RvZG8gfCBFZGl0JyxcbiAgfVxufVxuXG5jb25zdCBjb21wb3NlTGFiZWxzID0gKGxhYmVsczogdW5rbm93bikgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGFiZWxzKSkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmV0dXJuIGxhYmVscy5maWx0ZXIoKGxhYmVsKSA9PiBsYWJlbCkubWFwKChsYWJlbCkgPT4gK2xhYmVsKVxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCBhY3Rpb25EYXRhOiBBY3Rpb25EYXRhVHlwZSA9IHtcbiAgICB2YWx1ZXM6IHt9LFxuICAgIGVycm9yczoge1xuICAgICAgdGl0bGU6IHsgaXNJbnZhbGlkOiB0cnVlLCBtZXNzYWdlOiAnJyB9LFxuICAgICAgZGVzY3JpcHRpb246IHsgaXNJbnZhbGlkOiB0cnVlLCBtZXNzYWdlOiAnJyB9LFxuICAgICAgY29tcGxldGVkOiB7IGlzSW52YWxpZDogdHJ1ZSwgbWVzc2FnZTogJycgfSxcbiAgICAgIGR1ZURhdGU6IHsgaXNJbnZhbGlkOiB0cnVlLCBtZXNzYWdlOiAnJyB9LFxuICAgICAgbGFiZWxzOiB7IGlzSW52YWxpZDogdHJ1ZSwgbWVzc2FnZTogJycgfSxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgdG9kb0RhdGE6IFBhcnRpYWw8ei5pbmZlcjx0eXBlb2YgVG9kb1NjaGVtYT4+ID0ge1xuICAgIHRpdGxlOiBTdHJpbmcoZm9ybURhdGEuZ2V0KCd0aXRsZScpKSxcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nKGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSksXG4gICAgY29tcGxldGVkOiBmb3JtRGF0YS5nZXQoJ2NvbXBsZXRlZCcpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UsXG4gICAgZHVlRGF0ZTogZm9ybURhdGEuZ2V0KCdkdWVEYXRlJykgPyBuZXcgRGF0ZShTdHJpbmcoZm9ybURhdGEuZ2V0KCdkdWVEYXRlJykpKSA6IHVuZGVmaW5lZCxcbiAgICBsYWJlbHM6IGNvbXBvc2VMYWJlbHMoZm9ybURhdGEuZ2V0QWxsKCdsYWJlbHMnKSksXG4gIH1cblxuICBjb25zdCB0b2RvVmFsaWRhdGlvblJlc3VsdCA9IFRvZG9TY2hlbWEuc2FmZVBhcnNlKHRvZG9EYXRhKVxuXG4gIGlmICghdG9kb1ZhbGlkYXRpb25SZXN1bHQuc3VjY2Vzcykge1xuICAgIGFjdGlvbkRhdGEudmFsdWVzID0geyAuLi50b2RvRGF0YSB9XG4gICAgYWN0aW9uRGF0YS5lcnJvcnMgPSB7XG4gICAgICAuLi5mb3JtYXRGaWVsZEVycm9yc05ldyh0b2RvRGF0YSwgdG9kb1ZhbGlkYXRpb25SZXN1bHQuZXJyb3IuZm9ybUVycm9ycy5maWVsZEVycm9ycyksXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbkRhdGFcbiAgfVxuXG4gIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgZGVzY3JpcHRpb246IHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEuZGVzY3JpcHRpb24sXG4gICAgdGl0bGU6IHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEudGl0bGUsXG4gICAgY29tcGxldGVkOiB0b2RvVmFsaWRhdGlvblJlc3VsdC5kYXRhLmNvbXBsZXRlZCxcbiAgICBkdWVEYXRlOiB0b2RvVmFsaWRhdGlvblJlc3VsdC5kYXRhLmR1ZURhdGVcbiAgICAgID8gbW9tZW50KHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEuZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgIDogbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS50b2RvLnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogU3RyaW5nKHBhcmFtcy5pZCksXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB1c2VyRW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIGNyZWF0ZU1hbnk6IHtcbiAgICAgICAgICAgIGRhdGE6IHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEubGFiZWxzPy5tYXAoKGxhYmVsKSA9PiAoeyBsYWJlbElkOiBsYWJlbCB9KSkgPz8gW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiByZWRpcmVjdChgL3RvZG9gKVxuICB9IGNhdGNoIHtcbiAgICB0aHJvdyByZWRpcmVjdCgnLycpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IHRvZG8gPSBhd2FpdCBwcmlzbWEudG9kby5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IFN0cmluZyhwYXJhbXMuaWQpLFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgbGFiZWxzID0gYXdhaXQgcHJpc21hLmxhYmVsLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlckVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKCF0b2RvKSB7XG4gICAgdGhyb3cganNvbih7IG1lc3NhZ2U6IGBUaGUgdG9kbyB5b3UncmUgbG9va2luZyBmb3IgZG9lc24ndCBleGlzdHNgIH0sIHsgc3RhdHVzOiA0MDQgfSlcbiAgfVxuXG4gIGlmICh0b2RvLnVzZXJFbWFpbCAhPT0gdXNlci5lbWFpbCkge1xuICAgIHRocm93IGpzb24oXG4gICAgICB7IG1lc3NhZ2U6IGBVbmF1dGhvcml6ZWQgYWNjZXNzLiBZb3UncmUgbm90IGFsbG93ZWQgdG8gc2VlIHRoaXMgdG9kb2AgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDEgfSxcbiAgICApXG4gIH1cblxuICByZXR1cm4ganNvbih7IHRvZG8sIGxhYmVscyB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvRWRpdCgpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbigtMSlcblxuICBjb25zdCBpbml0aWFsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KClcblxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgY29uc3Qgc3VibWl0dGluZyA9IHRyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGFUeXBlPigpXG5cbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8eyB0b2RvOiBUb2RvOyBsYWJlbHM6IExhYmVsW10gfT4oKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCBpbml0aWFsRm9jdXNSZWY9e2luaXRpYWxSZWZ9IGlzT3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0gaXNDZW50ZXJlZCBzaXplPVwiM3hsXCI+XG4gICAgICAgIDxNb2RhbE92ZXJsYXkgYmc9XCJub25lXCIgYmFja2Ryb3BGaWx0ZXI9XCJhdXRvXCIgYmFja2Ryb3BJbnZlcnQ9XCI4MCVcIiBiYWNrZHJvcEJsdXI9XCIycHhcIiAvPlxuICAgICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5DcmVhdGUgbmV3IFRvZG88L01vZGFsSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9e2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS5pc0ludmFsaWR9PlxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+VGl0bGU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlZj17aW5pdGlhbFJlZn1cbiAgICAgICAgICAgICAgICAgIC8vIGlzUmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS50b2RvLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnMudGl0bGUuaXNJbnZhbGlkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS5tZXNzYWdlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uLmlzSW52YWxpZH0+XG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5EZXNjcmlwdGlvbjwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1N0cmluZyhkYXRhLnRvZG8uZGVzY3JpcHRpb24pID8/ICcnfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIlxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24uaXNJbnZhbGlkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi5tZXNzYWdlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzLmxhYmVscy5pc0ludmFsaWR9PlxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImxhYmVsc1wiPkxhYmVsczwvRm9ybUxhYmVsPlxuXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxhYmVsc1wiXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkYXRhLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBsYWJlbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9IGlzSW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzLmNvbXBsZXRlZC5pc0ludmFsaWR9PlxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+Q29tcGxldGVkPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgPENTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3Qgb3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17U3RyaW5nKGRhdGEudG9kby5jb21wbGV0ZWQpID8/ICdmYWxzZSd9XG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2FjdGlvbkRhdGE/LmVycm9ycy5jb21wbGV0ZWQuaXNJbnZhbGlkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0cnVlXCI+VHJ1ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+RmFsc2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L0NTZWxlY3Q+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2FjdGlvbkRhdGE/LmVycm9ycy5jb21wbGV0ZWQubWVzc2FnZX08L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fSBpc0ludmFsaWQ9e2FjdGlvbkRhdGE/LmVycm9ycy5kdWVEYXRlLmlzSW52YWxpZH0+XG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiaXNDaGVja2VkXCI+RHVlIGRhdGU8L0Zvcm1MYWJlbD5cblxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImR1ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21vbWVudChkYXRhLnRvZG8uZHVlRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyl9XG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2FjdGlvbkRhdGE/LmVycm9ycy5kdWVEYXRlLmlzSW52YWxpZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPnthY3Rpb25EYXRhPy5lcnJvcnMuZHVlRGF0ZS5tZXNzYWdlfTwvRm9ybUVycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuXG4gICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICBsb2FkaW5nVGV4dD17J1NhdmluZyd9XG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgRGVsZXRlRGlhbG9nIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdUb2RvIHwgRGVsZXRlJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXdhaXQgYXV0aGVudGljYXRvci5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCwge1xuICAgIGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicsXG4gIH0pKSBhcyBVc2VyXG5cbiAgY29uc3QgaWQgPSBwYXJhbXMuaWRcblxuICBjb25zdCBpc0N1cnJlbnRVc2VycyA9IGF3YWl0IHByaXNtYS50b2RvLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KVxuXG4gIGlmIChpc0N1cnJlbnRVc2VycyAmJiBpc0N1cnJlbnRVc2Vycy51c2VyRW1haWwgPT09IHVzZXIuZW1haWwpIHtcbiAgICBhd2FpdCBwcmlzbWEudG9kby5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQsXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcmVkaXJlY3QoJy90b2RvJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlKCkge1xuICByZXR1cm4gPERlbGV0ZURpYWxvZyB0aXRsZT1cIkRlbGV0ZSBUb2RvXCIgbWVzc2FnZT1cIkFyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBUb2RvP1wiIC8+XG59XG4iLCAiaW1wb3J0IHsgUHJpb3JpdHksIFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICd+L3R5cGVzL2NvbW1vbidcbmltcG9ydCB7IFRvZG9TY2hlbWEsIFRvZG9UeXBlIH0gZnJvbSAnfi90eXBlcy90b2RvJ1xuXG5pbXBvcnQge1xuICBBY3Rpb25GdW5jdGlvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VOYXZpZ2F0ZSxcbiAganNvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB7IE1vZGFsSGVhZGVyLCBNb2RhbENsb3NlQnV0dG9uLCBNb2RhbEJvZHkgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCB7IGNvbXBvc2VQcmlvcml0eSB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgeyBhdXRoZW50aWNhdG9yIH0gZnJvbSAnfi91dGlscy9hdXRoLnNlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ34vdXRpbHMvcHJpc21hLnNlcnZlcidcbmltcG9ydCB7IGdldEZpbmFsRm9ybURhdGEsIGdldEZvcm1EYXRhIH0gZnJvbSAnfi91dGlscy9mb3JtJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IFRvZG9Gb3JtLCB7IFRvZG9Gb3JtUHJvcHMgfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybXMvdG9kbydcblxudHlwZSBUb2RvQWN0aW9uVHlwZSA9IEFjdGlvblR5cGU8VG9kb1R5cGU+XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdUb2RvIHwgRWRpdCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkXG5cbiAgY29uc3QgdG9kbyA9IGF3YWl0IHByaXNtYS50b2RvLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pXG5cbiAgaWYgKCF0b2RvKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggZXJyb3IgYW5kIGNhdGNoIGJvdW5kYXJ5XG4gICAgdGhyb3cgcmVkaXJlY3QoJy90b2RvJylcbiAgfVxuXG4gIGlmICh0b2RvLnVzZXJFbWFpbCAhPT0gdXNlci5lbWFpbCkge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIGVycm9yIGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oeyBtZXNzYWdlOiAnWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBlZGl0IHRoaXMgY29udGVudCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICB9XG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCB0b2RvRGF0YSA9IGdldEZvcm1EYXRhPFRvZG9UeXBlPihmb3JtRGF0YSwgW1xuICAgIHsga2V5OiAndGl0bGUnIH0sXG4gICAgeyBrZXk6ICdkZXNjcmlwdGlvbicgfSxcbiAgICB7IGtleTogJ2NvbXBsZXRlZCcsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSxcbiAgICB7IGtleTogJ2R1ZURhdGUnLCBjb21wb3NlOiAodmFsdWUpID0+ICh2YWx1ZSA/IG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpIDogdW5kZWZpbmVkKSB9LFxuICAgIHsga2V5OiAncHJpb3JpdHknLCBjb21wb3NlOiAodmFsdWUpID0+IGNvbXBvc2VQcmlvcml0eShTdHJpbmcodmFsdWUpIGFzIFByaW9yaXR5KSB9LFxuICBdKVxuXG4gIGNvbnN0IHRvZG9WYWxpZGF0aW9uUmVzdWx0ID0gVG9kb1NjaGVtYS5zYWZlUGFyc2UodG9kb0RhdGEpXG5cbiAgaWYgKCF0b2RvVmFsaWRhdGlvblJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIGdldEZpbmFsRm9ybURhdGE8VG9kb1R5cGU+KHRvZG9EYXRhLCB0b2RvVmFsaWRhdGlvblJlc3VsdC5lcnJvci5mb3JtRXJyb3JzLmZpZWxkRXJyb3JzKVxuICB9XG5cbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBkZXNjcmlwdGlvbjogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS5kZXNjcmlwdGlvbixcbiAgICB0aXRsZTogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS50aXRsZSxcbiAgICBjb21wbGV0ZWQ6IHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEuY29tcGxldGVkLFxuICAgIGR1ZURhdGU6IHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEuZHVlRGF0ZVxuICAgICAgPyBtb21lbnQodG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgOiBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICBwcmlvcml0eTogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS5wcmlvcml0eSxcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnRvZG8udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBTdHJpbmcocGFyYW1zLmlkKSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7IC4uLnBheWxvYWQsIHVzZXJFbWFpbDogdXNlci5lbWFpbCB9LFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVkaXJlY3QoYC90b2RvYClcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgcmVkaXJlY3QoJy8nKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCB0b2RvID0gYXdhaXQgcHJpc21hLnRvZG8uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBTdHJpbmcocGFyYW1zLmlkKSxcbiAgICB9LFxuICB9KVxuXG4gIGlmICghdG9kbykge1xuICAgIC8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBlcnJvciBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICB0aHJvdyBqc29uKHsgbWVzc2FnZTogYFRoZSB0b2RvIHlvdSdyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0c2AgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICB9XG5cbiAgaWYgKHRvZG8udXNlckVtYWlsICE9PSB1c2VyLmVtYWlsKSB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIGVycm9yIGJvdW5kYXJ5IGFuZCBjYXRjaCBib3VuZGFyeVxuICAgIHRocm93IGpzb24oXG4gICAgICB7IG1lc3NhZ2U6IGBVbmF1dGhvcml6ZWQgYWNjZXNzLiBZb3UncmUgbm90IGFsbG93ZWQgdG8gc2VlIHRoaXMgdG9kb2AgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDEgfSxcbiAgICApXG4gIH1cblxuICByZXR1cm4ganNvbih0b2RvKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvRWRpdCgpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcblxuICBjb25zdCBvbkNsb3NlID0gKCkgPT4gbmF2aWdhdGlvbigtMSlcblxuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxUb2RvQWN0aW9uVHlwZT4oKVxuXG4gIGNvbnN0IHRvZG8gPSB1c2VMb2FkZXJEYXRhPFRvZG9UeXBlPigpXG5cbiAgY29uc3QgdG9kb0Zvcm1Qcm9wczogVG9kb0Zvcm1Qcm9wcyA9IHtcbiAgICB0aXRsZToge1xuICAgICAgdmFsdWU6IHRvZG8udGl0bGUsXG4gICAgICAuLi5hY3Rpb25EYXRhPy50aXRsZSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICB2YWx1ZTogdG9kby5kZXNjcmlwdGlvbixcbiAgICAgIC4uLmFjdGlvbkRhdGE/LmRlc2NyaXB0aW9uLFxuICAgIH0sXG4gICAgY29tcGxldGVkOiB7XG4gICAgICB2YWx1ZTogdG9kby5jb21wbGV0ZWQsXG4gICAgICAuLi5hY3Rpb25EYXRhPy5jb21wbGV0ZWQsXG4gICAgfSxcbiAgICBkdWVEYXRlOiB7XG4gICAgICB2YWx1ZTogdG9kby5kdWVEYXRlLFxuICAgICAgLi4uYWN0aW9uRGF0YT8uZHVlRGF0ZSxcbiAgICB9LFxuICAgIHByaW9yaXR5OiB7XG4gICAgICB2YWx1ZTogdG9kby5wcmlvcml0eSxcbiAgICAgIC4uLmFjdGlvbkRhdGE/LnByaW9yaXR5LFxuICAgIH0sXG4gICAgc3VibWl0dGluZ1RleHQ6ICdTYXZpbmcnLFxuICAgIG9rQnV0dG9uVGV4dDogJ1NhdmUnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIGlzT3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICA8TW9kYWxIZWFkZXI+RWRpdCBUb2RvPC9Nb2RhbEhlYWRlcj5cbiAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgPFRvZG9Gb3JtIHsuLi50b2RvRm9ybVByb3BzfSAvPlxuICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5leHBvcnQgY29uc3QgVG9kb1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgdGl0bGU6IHouc3RyaW5nKCkubWluKDUpLm1heCgyMDApLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5tYXgoNTAwKS5vcHRpb25hbCgpLFxuICBjb21wbGV0ZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGR1ZURhdGU6IHouZGF0ZSgpLm9wdGlvbmFsKCksXG4gIC8vIGxhYmVsczogei5hcnJheSh6Lm51bWJlcigpKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei5uYXRpdmVFbnVtKFByaW9yaXR5KS5vcHRpb25hbCgpLFxufSlcblxuZXhwb3J0IHR5cGUgVG9kb1R5cGUgPSB6LmluZmVyPHR5cGVvZiBUb2RvU2NoZW1hPlxuIiwgIi8vIFRPRE8gLSBIYW5kbGUgdGhpcyB3aXRoIHRoZSBFcnJvcnkgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ5XG5cbmltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICd+L3R5cGVzL2NvbW1vbidcbmltcG9ydCB7IFRvZG9TY2hlbWEsIFRvZG9UeXBlIH0gZnJvbSAnfi90eXBlcy90b2RvJ1xuaW1wb3J0IHsgUHJpb3JpdHksIFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IFRvZG9Gb3JtUHJvcHMgfSBmcm9tICd+L2NvbXBvbmVudHMvZm9ybXMvdG9kbydcblxuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTmF2aWdhdGUsXG4gIE1ldGFGdW5jdGlvbixcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBNb2RhbEhlYWRlciwgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxCb2R5IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgeyBjb21wb3NlUHJpb3JpdHkgfSBmcm9tICd+L3V0aWxzJ1xuaW1wb3J0IHsgYXV0aGVudGljYXRvciB9IGZyb20gJ34vdXRpbHMvYXV0aC5zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L3V0aWxzL3ByaXNtYS5zZXJ2ZXInXG5pbXBvcnQgeyBUb2RvRm9ybSwgRGlhbG9nIH0gZnJvbSAnfi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0RmluYWxGb3JtRGF0YSwgZ2V0Rm9ybURhdGEgfSBmcm9tICd+L3V0aWxzL2Zvcm0nXG5cbnR5cGUgVG9kb0FjdGlvblR5cGUgPSBBY3Rpb25UeXBlPFRvZG9UeXBlPlxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnVG9kbyB8IE5ldycsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IChhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0LCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgfSkpIGFzIFVzZXJcblxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuXG4gIGNvbnN0IHRvZG9EYXRhID0gZ2V0Rm9ybURhdGE8VG9kb1R5cGU+KGZvcm1EYXRhLCBbXG4gICAgeyBrZXk6ICd0aXRsZScgfSxcbiAgICB7IGtleTogJ2Rlc2NyaXB0aW9uJyB9LFxuICAgIHsga2V5OiAnY29tcGxldGVkJywgZGVmYXVsdFZhbHVlOiBmYWxzZSB9LFxuICAgIHsga2V5OiAnZHVlRGF0ZScsIGNvbXBvc2U6ICh2YWx1ZSkgPT4gKHZhbHVlID8gbmV3IERhdGUoU3RyaW5nKHZhbHVlKSkgOiB1bmRlZmluZWQpIH0sXG4gICAgeyBrZXk6ICdwcmlvcml0eScsIGNvbXBvc2U6ICh2YWx1ZSkgPT4gY29tcG9zZVByaW9yaXR5KFN0cmluZyh2YWx1ZSkgYXMgUHJpb3JpdHkpIH0sXG4gIF0pXG5cbiAgY29uc3QgdG9kb1ZhbGlkYXRpb25SZXN1bHQgPSBUb2RvU2NoZW1hLnNhZmVQYXJzZSh0b2RvRGF0YSlcblxuICBpZiAoIXRvZG9WYWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZ2V0RmluYWxGb3JtRGF0YTxUb2RvVHlwZT4odG9kb0RhdGEsIHRvZG9WYWxpZGF0aW9uUmVzdWx0LmVycm9yLmZvcm1FcnJvcnMuZmllbGRFcnJvcnMpXG4gIH1cblxuICBjb25zdCBwYXlsb2FkID0ge1xuICAgIGRlc2NyaXB0aW9uOiB0b2RvVmFsaWRhdGlvblJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uLFxuICAgIHRpdGxlOiB0b2RvVmFsaWRhdGlvblJlc3VsdC5kYXRhLnRpdGxlLFxuICAgIGNvbXBsZXRlZDogdG9kb1ZhbGlkYXRpb25SZXN1bHQuZGF0YS5jb21wbGV0ZWQsXG4gICAgLy8gVE9ETyAtIEZpbmQgYSB3YXkgdG8gZml4IHRoaXMgOihcbiAgICBkdWVEYXRlOiB0b2RvVmFsaWRhdGlvblJlc3VsdC5kYXRhLmR1ZURhdGVcbiAgICAgID8gbW9tZW50KHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEuZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgIDogbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgcHJpb3JpdHk6IHRvZG9WYWxpZGF0aW9uUmVzdWx0LmRhdGEucHJpb3JpdHksXG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS50b2RvLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHVzZXJFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4gcmVkaXJlY3QoYC90b2RvYClcbiAgfSBjYXRjaCB7XG4gICAgLy8gVE9ETyAtIEhhbmRsZSB0aGlzIHdpdGggdGhlIEVycm9yeSBib3VuZGFyeSBhbmQgY2F0Y2ggYm91bmRhcnlcbiAgICB0aHJvdyByZWRpcmVjdCgnLycpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvTmV3KCkge1xuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxuXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiBuYXZpZ2F0aW9uKC0xKVxuXG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPFRvZG9BY3Rpb25UeXBlPigpXG5cbiAgY29uc3QgdG9kb0Zvcm1Qcm9wczogVG9kb0Zvcm1Qcm9wcyA9IHtcbiAgICAuLi5hY3Rpb25EYXRhLFxuICAgIHN1Ym1pdHRpbmdUZXh0OiAnQ3JlYXRpbmcnLFxuICAgIG9rQnV0dG9uVGV4dDogJ0NyZWF0ZScsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgaXNPcGVuPXt0cnVlfSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgIDxNb2RhbEhlYWRlcj5DcmVhdGUgbmV3IFRvZG88L01vZGFsSGVhZGVyPlxuICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgIDxNb2RhbEJvZHkgcGI9ezZ9PlxuICAgICAgICA8VG9kb0Zvcm0gey4uLnRvZG9Gb3JtUHJvcHN9IC8+XG4gICAgICA8L01vZGFsQm9keT5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgIi8vIFRPRE8gLSBIYW5kbGUgRXJyb3IgYm91bmRhcnkgYW5kIGNhdGNoIGJvdW5kYXJ1XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0b3IgfSBmcm9tICd+L3V0aWxzL2F1dGguc2VydmVyJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnfi91dGlscy9wcmlzbWEuc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF3YWl0IGF1dGhlbnRpY2F0b3IuaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QsIHtcbiAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvbG9naW4nLFxuICB9KSkgYXMgVXNlclxuXG4gIGNvbnN0IHF1aWNrUmVkaXJlY3QgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBlbWFpbDogdXNlci5lbWFpbCB9LFxuICAgIHNlbGVjdDogeyBxdWlja1JlZGlyZWN0OiB0cnVlIH0sXG4gIH0pXG5cbiAgaWYgKHF1aWNrUmVkaXJlY3Q/LnF1aWNrUmVkaXJlY3QpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QocXVpY2tSZWRpcmVjdD8ucXVpY2tSZWRpcmVjdClcbiAgfVxuXG4gIHJldHVybiByZWRpcmVjdCgnLycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZGlyZWN0KCkge1xuICByZXR1cm4gbnVsbFxufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzExYzQ2NWMwJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1aSFE3TUlRRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSFNPV1JLMlUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WRjNaWkxDUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZRWUJBVVNRLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1YR1hDQ0Q1Vy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRkRLNkpJUU4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZWFlWU1ZFUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtTWTY3NTVGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFYzQkYzNzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ERUVJRlBKQS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYXV0aC9naXRodWInOnsnaWQnOidyb3V0ZXMvYXV0aC9naXRodWInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9naXRodWInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9naXRodWItUUY0WkRaWE8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9naXRodWIvY2FsbGJhY2snOnsnaWQnOidyb3V0ZXMvYXV0aC9naXRodWIvY2FsbGJhY2snLCdwYXJlbnRJZCc6J3JvdXRlcy9hdXRoL2dpdGh1YicsJ3BhdGgnOidjYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2dpdGh1Yi9jYWxsYmFjay1BS1EyRk1ESS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9nb29nbGUnOnsnaWQnOidyb3V0ZXMvYXV0aC9nb29nbGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9nb29nbGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9nb29nbGUtNEpESVFMSzMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9nb29nbGUvY2FsbGJhY2snOnsnaWQnOidyb3V0ZXMvYXV0aC9nb29nbGUvY2FsbGJhY2snLCdwYXJlbnRJZCc6J3JvdXRlcy9hdXRoL2dvb2dsZScsJ3BhdGgnOidjYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2dvb2dsZS9jYWxsYmFjay00WDNVUVBRUi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYy4kaWQnOnsnaWQnOidyb3V0ZXMvYy4kaWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYy86aWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYy4kaWQtVVFaT1NUWjIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFHTkhDSUhELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jbGlwYm9hcmQnOnsnaWQnOidyb3V0ZXMvY2xpcGJvYXJkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NsaXBib2FyZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGlwYm9hcmQtV1U2NzNXNU4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVFNjRFVkpXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jbGlwYm9hcmQuJGlkJzp7J2lkJzoncm91dGVzL2NsaXBib2FyZC4kaWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2xpcGJvYXJkLzppZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGlwYm9hcmQuJGlkLUJBWkdZSDdOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RR05IQ0lIRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpJNFZaVzY1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jbGlwYm9hcmQuJGlkL2RlbGV0ZSc6eydpZCc6J3JvdXRlcy9jbGlwYm9hcmQuJGlkL2RlbGV0ZScsJ3BhcmVudElkJzoncm91dGVzL2NsaXBib2FyZC4kaWQnLCdwYXRoJzonZGVsZXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NsaXBib2FyZC4kaWQvZGVsZXRlLTdOSFM2WUlTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GREs2SklRTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlYWVZTVkVRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1NZNjc1NUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QVjNCRjM3NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NsaXBib2FyZC4kaWQvZWRpdCc6eydpZCc6J3JvdXRlcy9jbGlwYm9hcmQuJGlkL2VkaXQnLCdwYXJlbnRJZCc6J3JvdXRlcy9jbGlwYm9hcmQuJGlkJywncGF0aCc6J2VkaXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2xpcGJvYXJkLiRpZC9lZGl0LVdEVjZFWUlELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GREs2SklRTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlYWVZTVkVRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1NZNjc1NUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QVjNCRjM3NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2xpcGJvYXJkL25ldyc6eydpZCc6J3JvdXRlcy9jbGlwYm9hcmQvbmV3JywncGFyZW50SWQnOidyb3V0ZXMvY2xpcGJvYXJkJywncGF0aCc6J25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGlwYm9hcmQvbmV3LVNBVEYzVE43LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GREs2SklRTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlYWVZTVkVRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1NZNjc1NUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QVjNCRjM3NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29weSc6eydpZCc6J3JvdXRlcy9jb3B5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvcHknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY29weS1FRUxLRzRVRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUdOSENJSEQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhwb3J0Jzp7J2lkJzoncm91dGVzL2V4cG9ydCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidleHBvcnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZXhwb3J0LVpUQ0NYQUdLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MRUlBRlJQUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpJNFZaVzY1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9oYWJpdHMtcmFuayc6eydpZCc6J3JvdXRlcy9oYWJpdHMtcmFuaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidoYWJpdHMtcmFuaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9oYWJpdHMtcmFuay1FUDZLNDZZTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUU2NEVWSlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZGVsZXRlJzp7J2lkJzoncm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2RlbGV0ZScsJ3BhcmVudElkJzoncm91dGVzL2hhYml0cy1yYW5rJywncGF0aCc6J3ZvdGUvOmlkL2RlbGV0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kZWxldGUtWlJDSkdSNDIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZESzZKSVFOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVhZVlNWRVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LU1k2NzU1Ri5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBWM0JGMzc1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREVFSUZQSkEuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZG93bnZvdGUnOnsnaWQnOidyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvZG93bnZvdGUnLCdwYXJlbnRJZCc6J3JvdXRlcy9oYWJpdHMtcmFuaycsJ3BhdGgnOid2b3RlLzppZC9kb3dudm90ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9kb3dudm90ZS1QNjdaVUVNNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUFYzQkYzNzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ERUVJRlBKQS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC9lZGl0Jzp7J2lkJzoncm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2VkaXQnLCdwYXJlbnRJZCc6J3JvdXRlcy9oYWJpdHMtcmFuaycsJ3BhdGgnOid2b3RlLzppZC9lZGl0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL2VkaXQtWVhUQjZCT0suanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZESzZKSVFOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVhZVlNWRVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LU1k2NzU1Ri5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBWM0JGMzc1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREVFSUZQSkEuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9oYWJpdHMtcmFuay92b3RlLyRpZC91cHZvdGUnOnsnaWQnOidyb3V0ZXMvaGFiaXRzLXJhbmsvdm90ZS8kaWQvdXB2b3RlJywncGFyZW50SWQnOidyb3V0ZXMvaGFiaXRzLXJhbmsnLCdwYXRoJzondm90ZS86aWQvdXB2b3RlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hhYml0cy1yYW5rL3ZvdGUvJGlkL3Vwdm90ZS1YNkkyWVFFWC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaG9tZSc6eydpZCc6J3JvdXRlcy9ob21lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2hvbWUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaG9tZS1TVVNVTk00Uy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1LMk5DR1dYSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbGFiZWwubmV3Jzp7J2lkJzoncm91dGVzL2xhYmVsLm5ldycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsYWJlbC9uZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbGFiZWwubmV3LVFFTzMyTkhDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XSVZDUFNRWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVJRlhTN1NMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi1XQlY3M1ZBSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LVdKRFpJTzZELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2ZpbGUnOnsnaWQnOidyb3V0ZXMvcHJvZmlsZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9maWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Byb2ZpbGUtUFg0Tk1CSTMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9maWxlL2V4cG9ydCc6eydpZCc6J3JvdXRlcy9wcm9maWxlL2V4cG9ydCcsJ3BhcmVudElkJzoncm91dGVzL3Byb2ZpbGUnLCdwYXRoJzonZXhwb3J0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Byb2ZpbGUvZXhwb3J0LUVYTkI0TDZLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MRUlBRlJQUi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpJNFZaVzY1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1NZNjc1NUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SUZYUzdTTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2ZpbGUvZ2VuZXJhbCc6eydpZCc6J3JvdXRlcy9wcm9maWxlL2dlbmVyYWwnLCdwYXJlbnRJZCc6J3JvdXRlcy9wcm9maWxlJywncGF0aCc6J2dlbmVyYWwnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcHJvZmlsZS9nZW5lcmFsLURTTEJEU0c1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LU1k2NzU1Ri5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRJVk9OQ1ZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3InOnsnaWQnOidyb3V0ZXMvcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3ItNFpLQlY0T0cuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVJRlhTN1NMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVkaXJlY3QnOnsnaWQnOidyb3V0ZXMvcmVkaXJlY3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVkaXJlY3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVkaXJlY3QtUEM1QzI1WUMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFHTkhDSUhELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RvZG8nOnsnaWQnOidyb3V0ZXMvdG9kbycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0b2RvJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3RvZG8tTjZHWlFDTUYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVFNjRFVkpXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUlGWFM3U0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00SVZPTkNWUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90b2RvLiRpZC90b2dnbGUnOnsnaWQnOidyb3V0ZXMvdG9kby4kaWQvdG9nZ2xlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RvZG8vOmlkL3RvZ2dsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b2RvLiRpZC90b2dnbGUtN1dGUklUQkouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVJRlhTN1NMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNElWT05DVlIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdG9kby8kaWQvZGVsZXRlJzp7J2lkJzoncm91dGVzL3RvZG8vJGlkL2RlbGV0ZScsJ3BhcmVudElkJzoncm91dGVzL3RvZG8nLCdwYXRoJzonOmlkL2RlbGV0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b2RvLyRpZC9kZWxldGUtUTVYQk0zWk0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZESzZKSVFOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVhZVlNWRVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LU1k2NzU1Ri5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBWM0JGMzc1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREVFSUZQSkEuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdG9kby8kaWQvZWRpdCc6eydpZCc6J3JvdXRlcy90b2RvLyRpZC9lZGl0JywncGFyZW50SWQnOidyb3V0ZXMvdG9kbycsJ3BhdGgnOic6aWQvZWRpdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b2RvLyRpZC9lZGl0LUVONUlRU0pHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GREs2SklRTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlYWVZTVkVRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1NZNjc1NUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QVjNCRjM3NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdG9kby8kaWQvZWRpdC50ZW1wJzp7J2lkJzoncm91dGVzL3RvZG8vJGlkL2VkaXQudGVtcCcsJ3BhcmVudElkJzoncm91dGVzL3RvZG8nLCdwYXRoJzonOmlkL2VkaXQvdGVtcCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b2RvLyRpZC9lZGl0LnRlbXAtQkFJWFFVRVIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdJVkNQU1FZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1NZNjc1NUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QVjNCRjM3NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdG9kby8kaWQvcmVzY2hlZHVsZSc6eydpZCc6J3JvdXRlcy90b2RvLyRpZC9yZXNjaGVkdWxlJywncGFyZW50SWQnOidyb3V0ZXMvdG9kbycsJ3BhdGgnOic6aWQvcmVzY2hlZHVsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b2RvLyRpZC9yZXNjaGVkdWxlLVNYRlVXSVVHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XSVZDUFNRWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURFRUlGUEpBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdG9kby9uZXcnOnsnaWQnOidyb3V0ZXMvdG9kby9uZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy90b2RvJywncGF0aCc6J25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b2RvL25ldy1aNFhCN0NTTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRkRLNkpJUU4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZWFlWU1ZFUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtTWTY3NTVGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFYzQkYzNzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ERUVJRlBKQS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0xMUM0NjVDMC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8s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
