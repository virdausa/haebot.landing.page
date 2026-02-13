function xv(n, r) {
    for (var s = 0; s < r.length; s++) {
        const i = r[s];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const l in i)
                if (l !== "default" && !(l in n)) {
                    const u = Object.getOwnPropertyDescriptor(i, l);
                    u && Object.defineProperty(n, l, u.get ? u : { enumerable: !0, get: () => i[l] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
    new MutationObserver((l) => {
        for (const u of l)
            if (u.type === "childList")
                for (const f of u.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(l) {
        const u = {};
        return (
            l.integrity && (u.integrity = l.integrity),
            l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (u.credentials = "include")
                : l.crossOrigin === "anonymous"
                  ? (u.credentials = "omit")
                  : (u.credentials = "same-origin"),
            u
        );
    }
    function i(l) {
        if (l.ep) return;
        l.ep = !0;
        const u = s(l);
        fetch(l.href, u);
    }
})();
function ym(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Mu = { exports: {} },
    yo = {},
    Du = { exports: {} },
    Ae = {};
var xp;
function wv() {
    if (xp) return Ae;
    xp = 1;
    var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
        f = Symbol.for("react.context"),
        p = Symbol.for("react.forward_ref"),
        g = Symbol.for("react.suspense"),
        h = Symbol.for("react.memo"),
        v = Symbol.for("react.lazy"),
        w = Symbol.iterator;
    function E(b) {
        return b === null || typeof b != "object"
            ? null
            : ((b = (w && b[w]) || b["@@iterator"]), typeof b == "function" ? b : null);
    }
    var A = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        M = Object.assign,
        N = {};
    function T(b, z, xe) {
        (this.props = b), (this.context = z), (this.refs = N), (this.updater = xe || A);
    }
    (T.prototype.isReactComponent = {}),
        (T.prototype.setState = function (b, z) {
            if (typeof b != "object" && typeof b != "function" && b != null)
                throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
            this.updater.enqueueSetState(this, b, z, "setState");
        }),
        (T.prototype.forceUpdate = function (b) {
            this.updater.enqueueForceUpdate(this, b, "forceUpdate");
        });
    function F() {}
    F.prototype = T.prototype;
    function L(b, z, xe) {
        (this.props = b), (this.context = z), (this.refs = N), (this.updater = xe || A);
    }
    var $ = (L.prototype = new F());
    ($.constructor = L), M($, T.prototype), ($.isPureReactComponent = !0);
    var V = Array.isArray,
        H = Object.prototype.hasOwnProperty,
        se = { current: null },
        ee = { key: !0, ref: !0, __self: !0, __source: !0 };
    function Se(b, z, xe) {
        var Te,
            Oe = {},
            Le = null,
            Me = null;
        if (z != null)
            for (Te in (z.ref !== void 0 && (Me = z.ref), z.key !== void 0 && (Le = "" + z.key), z))
                H.call(z, Te) && !ee.hasOwnProperty(Te) && (Oe[Te] = z[Te]);
        var Ie = arguments.length - 2;
        if (Ie === 1) Oe.children = xe;
        else if (1 < Ie) {
            for (var Ue = Array(Ie), dt = 0; dt < Ie; dt++) Ue[dt] = arguments[dt + 2];
            Oe.children = Ue;
        }
        if (b && b.defaultProps) for (Te in ((Ie = b.defaultProps), Ie)) Oe[Te] === void 0 && (Oe[Te] = Ie[Te]);
        return { $$typeof: n, type: b, key: Le, ref: Me, props: Oe, _owner: se.current };
    }
    function Ee(b, z) {
        return { $$typeof: n, type: b.type, key: z, ref: b.ref, props: b.props, _owner: b._owner };
    }
    function _e(b) {
        return typeof b == "object" && b !== null && b.$$typeof === n;
    }
    function be(b) {
        var z = { "=": "=0", ":": "=2" };
        return (
            "$" +
            b.replace(/[=:]/g, function (xe) {
                return z[xe];
            })
        );
    }
    var G = /\/+/g;
    function re(b, z) {
        return typeof b == "object" && b !== null && b.key != null ? be("" + b.key) : z.toString(36);
    }
    function K(b, z, xe, Te, Oe) {
        var Le = typeof b;
        (Le === "undefined" || Le === "boolean") && (b = null);
        var Me = !1;
        if (b === null) Me = !0;
        else
            switch (Le) {
                case "string":
                case "number":
                    Me = !0;
                    break;
                case "object":
                    switch (b.$$typeof) {
                        case n:
                        case r:
                            Me = !0;
                    }
            }
        if (Me)
            return (
                (Me = b),
                (Oe = Oe(Me)),
                (b = Te === "" ? "." + re(Me, 0) : Te),
                V(Oe)
                    ? ((xe = ""),
                      b != null && (xe = b.replace(G, "$&/") + "/"),
                      K(Oe, z, xe, "", function (dt) {
                          return dt;
                      }))
                    : Oe != null &&
                      (_e(Oe) &&
                          (Oe = Ee(
                              Oe,
                              xe +
                                  (!Oe.key || (Me && Me.key === Oe.key) ? "" : ("" + Oe.key).replace(G, "$&/") + "/") +
                                  b
                          )),
                      z.push(Oe)),
                1
            );
        if (((Me = 0), (Te = Te === "" ? "." : Te + ":"), V(b)))
            for (var Ie = 0; Ie < b.length; Ie++) {
                Le = b[Ie];
                var Ue = Te + re(Le, Ie);
                Me += K(Le, z, xe, Ue, Oe);
            }
        else if (((Ue = E(b)), typeof Ue == "function"))
            for (b = Ue.call(b), Ie = 0; !(Le = b.next()).done; )
                (Le = Le.value), (Ue = Te + re(Le, Ie++)), (Me += K(Le, z, xe, Ue, Oe));
        else if (Le === "object")
            throw (
                ((z = String(b)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (z === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : z) +
                        "). If you meant to render a collection of children, use an array instead."
                ))
            );
        return Me;
    }
    function ve(b, z, xe) {
        if (b == null) return b;
        var Te = [],
            Oe = 0;
        return (
            K(b, Te, "", "", function (Le) {
                return z.call(xe, Le, Oe++);
            }),
            Te
        );
    }
    function fe(b) {
        if (b._status === -1) {
            var z = b._result;
            (z = z()),
                z.then(
                    function (xe) {
                        (b._status === 0 || b._status === -1) && ((b._status = 1), (b._result = xe));
                    },
                    function (xe) {
                        (b._status === 0 || b._status === -1) && ((b._status = 2), (b._result = xe));
                    }
                ),
                b._status === -1 && ((b._status = 0), (b._result = z));
        }
        if (b._status === 1) return b._result.default;
        throw b._result;
    }
    var pe = { current: null },
        D = { transition: null },
        X = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: D, ReactCurrentOwner: se };
    function q() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    return (
        (Ae.Children = {
            map: ve,
            forEach: function (b, z, xe) {
                ve(
                    b,
                    function () {
                        z.apply(this, arguments);
                    },
                    xe
                );
            },
            count: function (b) {
                var z = 0;
                return (
                    ve(b, function () {
                        z++;
                    }),
                    z
                );
            },
            toArray: function (b) {
                return (
                    ve(b, function (z) {
                        return z;
                    }) || []
                );
            },
            only: function (b) {
                if (!_e(b)) throw Error("React.Children.only expected to receive a single React element child.");
                return b;
            },
        }),
        (Ae.Component = T),
        (Ae.Fragment = s),
        (Ae.Profiler = l),
        (Ae.PureComponent = L),
        (Ae.StrictMode = i),
        (Ae.Suspense = g),
        (Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
        (Ae.act = q),
        (Ae.cloneElement = function (b, z, xe) {
            if (b == null)
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
            var Te = M({}, b.props),
                Oe = b.key,
                Le = b.ref,
                Me = b._owner;
            if (z != null) {
                if (
                    (z.ref !== void 0 && ((Le = z.ref), (Me = se.current)),
                    z.key !== void 0 && (Oe = "" + z.key),
                    b.type && b.type.defaultProps)
                )
                    var Ie = b.type.defaultProps;
                for (Ue in z)
                    H.call(z, Ue) &&
                        !ee.hasOwnProperty(Ue) &&
                        (Te[Ue] = z[Ue] === void 0 && Ie !== void 0 ? Ie[Ue] : z[Ue]);
            }
            var Ue = arguments.length - 2;
            if (Ue === 1) Te.children = xe;
            else if (1 < Ue) {
                Ie = Array(Ue);
                for (var dt = 0; dt < Ue; dt++) Ie[dt] = arguments[dt + 2];
                Te.children = Ie;
            }
            return { $$typeof: n, type: b.type, key: Oe, ref: Le, props: Te, _owner: Me };
        }),
        (Ae.createContext = function (b) {
            return (
                (b = {
                    $$typeof: f,
                    _currentValue: b,
                    _currentValue2: b,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (b.Provider = { $$typeof: u, _context: b }),
                (b.Consumer = b)
            );
        }),
        (Ae.createElement = Se),
        (Ae.createFactory = function (b) {
            var z = Se.bind(null, b);
            return (z.type = b), z;
        }),
        (Ae.createRef = function () {
            return { current: null };
        }),
        (Ae.forwardRef = function (b) {
            return { $$typeof: p, render: b };
        }),
        (Ae.isValidElement = _e),
        (Ae.lazy = function (b) {
            return { $$typeof: v, _payload: { _status: -1, _result: b }, _init: fe };
        }),
        (Ae.memo = function (b, z) {
            return { $$typeof: h, type: b, compare: z === void 0 ? null : z };
        }),
        (Ae.startTransition = function (b) {
            var z = D.transition;
            D.transition = {};
            try {
                b();
            } finally {
                D.transition = z;
            }
        }),
        (Ae.unstable_act = q),
        (Ae.useCallback = function (b, z) {
            return pe.current.useCallback(b, z);
        }),
        (Ae.useContext = function (b) {
            return pe.current.useContext(b);
        }),
        (Ae.useDebugValue = function () {}),
        (Ae.useDeferredValue = function (b) {
            return pe.current.useDeferredValue(b);
        }),
        (Ae.useEffect = function (b, z) {
            return pe.current.useEffect(b, z);
        }),
        (Ae.useId = function () {
            return pe.current.useId();
        }),
        (Ae.useImperativeHandle = function (b, z, xe) {
            return pe.current.useImperativeHandle(b, z, xe);
        }),
        (Ae.useInsertionEffect = function (b, z) {
            return pe.current.useInsertionEffect(b, z);
        }),
        (Ae.useLayoutEffect = function (b, z) {
            return pe.current.useLayoutEffect(b, z);
        }),
        (Ae.useMemo = function (b, z) {
            return pe.current.useMemo(b, z);
        }),
        (Ae.useReducer = function (b, z, xe) {
            return pe.current.useReducer(b, z, xe);
        }),
        (Ae.useRef = function (b) {
            return pe.current.useRef(b);
        }),
        (Ae.useState = function (b) {
            return pe.current.useState(b);
        }),
        (Ae.useSyncExternalStore = function (b, z, xe) {
            return pe.current.useSyncExternalStore(b, z, xe);
        }),
        (Ae.useTransition = function () {
            return pe.current.useTransition();
        }),
        (Ae.version = "18.3.1"),
        Ae
    );
}
var wp;
function Aa() {
    return wp || ((wp = 1), (Du.exports = wv())), Du.exports;
}
var _p;
function _v() {
    if (_p) return yo;
    _p = 1;
    var n = Aa(),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
    function f(p, g, h) {
        var v,
            w = {},
            E = null,
            A = null;
        h !== void 0 && (E = "" + h), g.key !== void 0 && (E = "" + g.key), g.ref !== void 0 && (A = g.ref);
        for (v in g) i.call(g, v) && !u.hasOwnProperty(v) && (w[v] = g[v]);
        if (p && p.defaultProps) for (v in ((g = p.defaultProps), g)) w[v] === void 0 && (w[v] = g[v]);
        return { $$typeof: r, type: p, key: E, ref: A, props: w, _owner: l.current };
    }
    return (yo.Fragment = s), (yo.jsx = f), (yo.jsxs = f), yo;
}
var kp;
function kv() {
    return kp || ((kp = 1), (Mu.exports = _v())), Mu.exports;
}
var y = kv(),
    ta = {},
    Iu = { exports: {} },
    Mt = {},
    Fu = { exports: {} },
    zu = {};
var Sp;
function Sv() {
    return (
        Sp ||
            ((Sp = 1),
            (function (n) {
                function r(D, X) {
                    var q = D.length;
                    D.push(X);
                    e: for (; 0 < q; ) {
                        var b = (q - 1) >>> 1,
                            z = D[b];
                        if (0 < l(z, X)) (D[b] = X), (D[q] = z), (q = b);
                        else break e;
                    }
                }
                function s(D) {
                    return D.length === 0 ? null : D[0];
                }
                function i(D) {
                    if (D.length === 0) return null;
                    var X = D[0],
                        q = D.pop();
                    if (q !== X) {
                        D[0] = q;
                        e: for (var b = 0, z = D.length, xe = z >>> 1; b < xe; ) {
                            var Te = 2 * (b + 1) - 1,
                                Oe = D[Te],
                                Le = Te + 1,
                                Me = D[Le];
                            if (0 > l(Oe, q))
                                Le < z && 0 > l(Me, Oe)
                                    ? ((D[b] = Me), (D[Le] = q), (b = Le))
                                    : ((D[b] = Oe), (D[Te] = q), (b = Te));
                            else if (Le < z && 0 > l(Me, q)) (D[b] = Me), (D[Le] = q), (b = Le);
                            else break e;
                        }
                    }
                    return X;
                }
                function l(D, X) {
                    var q = D.sortIndex - X.sortIndex;
                    return q !== 0 ? q : D.id - X.id;
                }
                if (typeof performance == "object" && typeof performance.now == "function") {
                    var u = performance;
                    n.unstable_now = function () {
                        return u.now();
                    };
                } else {
                    var f = Date,
                        p = f.now();
                    n.unstable_now = function () {
                        return f.now() - p;
                    };
                }
                var g = [],
                    h = [],
                    v = 1,
                    w = null,
                    E = 3,
                    A = !1,
                    M = !1,
                    N = !1,
                    T = typeof setTimeout == "function" ? setTimeout : null,
                    F = typeof clearTimeout == "function" ? clearTimeout : null,
                    L = typeof setImmediate < "u" ? setImmediate : null;
                typeof navigator < "u" &&
                    navigator.scheduling !== void 0 &&
                    navigator.scheduling.isInputPending !== void 0 &&
                    navigator.scheduling.isInputPending.bind(navigator.scheduling);
                function $(D) {
                    for (var X = s(h); X !== null; ) {
                        if (X.callback === null) i(h);
                        else if (X.startTime <= D) i(h), (X.sortIndex = X.expirationTime), r(g, X);
                        else break;
                        X = s(h);
                    }
                }
                function V(D) {
                    if (((N = !1), $(D), !M))
                        if (s(g) !== null) (M = !0), fe(H);
                        else {
                            var X = s(h);
                            X !== null && pe(V, X.startTime - D);
                        }
                }
                function H(D, X) {
                    (M = !1), N && ((N = !1), F(Se), (Se = -1)), (A = !0);
                    var q = E;
                    try {
                        for ($(X), w = s(g); w !== null && (!(w.expirationTime > X) || (D && !be())); ) {
                            var b = w.callback;
                            if (typeof b == "function") {
                                (w.callback = null), (E = w.priorityLevel);
                                var z = b(w.expirationTime <= X);
                                (X = n.unstable_now()),
                                    typeof z == "function" ? (w.callback = z) : w === s(g) && i(g),
                                    $(X);
                            } else i(g);
                            w = s(g);
                        }
                        if (w !== null) var xe = !0;
                        else {
                            var Te = s(h);
                            Te !== null && pe(V, Te.startTime - X), (xe = !1);
                        }
                        return xe;
                    } finally {
                        (w = null), (E = q), (A = !1);
                    }
                }
                var se = !1,
                    ee = null,
                    Se = -1,
                    Ee = 5,
                    _e = -1;
                function be() {
                    return !(n.unstable_now() - _e < Ee);
                }
                function G() {
                    if (ee !== null) {
                        var D = n.unstable_now();
                        _e = D;
                        var X = !0;
                        try {
                            X = ee(!0, D);
                        } finally {
                            X ? re() : ((se = !1), (ee = null));
                        }
                    } else se = !1;
                }
                var re;
                if (typeof L == "function")
                    re = function () {
                        L(G);
                    };
                else if (typeof MessageChannel < "u") {
                    var K = new MessageChannel(),
                        ve = K.port2;
                    (K.port1.onmessage = G),
                        (re = function () {
                            ve.postMessage(null);
                        });
                } else
                    re = function () {
                        T(G, 0);
                    };
                function fe(D) {
                    (ee = D), se || ((se = !0), re());
                }
                function pe(D, X) {
                    Se = T(function () {
                        D(n.unstable_now());
                    }, X);
                }
                (n.unstable_IdlePriority = 5),
                    (n.unstable_ImmediatePriority = 1),
                    (n.unstable_LowPriority = 4),
                    (n.unstable_NormalPriority = 3),
                    (n.unstable_Profiling = null),
                    (n.unstable_UserBlockingPriority = 2),
                    (n.unstable_cancelCallback = function (D) {
                        D.callback = null;
                    }),
                    (n.unstable_continueExecution = function () {
                        M || A || ((M = !0), fe(H));
                    }),
                    (n.unstable_forceFrameRate = function (D) {
                        0 > D || 125 < D
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                              )
                            : (Ee = 0 < D ? Math.floor(1e3 / D) : 5);
                    }),
                    (n.unstable_getCurrentPriorityLevel = function () {
                        return E;
                    }),
                    (n.unstable_getFirstCallbackNode = function () {
                        return s(g);
                    }),
                    (n.unstable_next = function (D) {
                        switch (E) {
                            case 1:
                            case 2:
                            case 3:
                                var X = 3;
                                break;
                            default:
                                X = E;
                        }
                        var q = E;
                        E = X;
                        try {
                            return D();
                        } finally {
                            E = q;
                        }
                    }),
                    (n.unstable_pauseExecution = function () {}),
                    (n.unstable_requestPaint = function () {}),
                    (n.unstable_runWithPriority = function (D, X) {
                        switch (D) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                D = 3;
                        }
                        var q = E;
                        E = D;
                        try {
                            return X();
                        } finally {
                            E = q;
                        }
                    }),
                    (n.unstable_scheduleCallback = function (D, X, q) {
                        var b = n.unstable_now();
                        switch (
                            (typeof q == "object" && q !== null
                                ? ((q = q.delay), (q = typeof q == "number" && 0 < q ? b + q : b))
                                : (q = b),
                            D)
                        ) {
                            case 1:
                                var z = -1;
                                break;
                            case 2:
                                z = 250;
                                break;
                            case 5:
                                z = 1073741823;
                                break;
                            case 4:
                                z = 1e4;
                                break;
                            default:
                                z = 5e3;
                        }
                        return (
                            (z = q + z),
                            (D = {
                                id: v++,
                                callback: X,
                                priorityLevel: D,
                                startTime: q,
                                expirationTime: z,
                                sortIndex: -1,
                            }),
                            q > b
                                ? ((D.sortIndex = q),
                                  r(h, D),
                                  s(g) === null && D === s(h) && (N ? (F(Se), (Se = -1)) : (N = !0), pe(V, q - b)))
                                : ((D.sortIndex = z), r(g, D), M || A || ((M = !0), fe(H))),
                            D
                        );
                    }),
                    (n.unstable_shouldYield = be),
                    (n.unstable_wrapCallback = function (D) {
                        var X = E;
                        return function () {
                            var q = E;
                            E = X;
                            try {
                                return D.apply(this, arguments);
                            } finally {
                                E = q;
                            }
                        };
                    });
            })(zu)),
        zu
    );
}
var Ep;
function Ev() {
    return Ep || ((Ep = 1), (Fu.exports = Sv())), Fu.exports;
}
var Cp;
function Cv() {
    if (Cp) return Mt;
    Cp = 1;
    var n = Aa(),
        r = Ev();
    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++)
            t += "&args[]=" + encodeURIComponent(arguments[o]);
        return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    var i = new Set(),
        l = {};
    function u(e, t) {
        f(e, t), f(e + "Capture", t);
    }
    function f(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        g = Object.prototype.hasOwnProperty,
        h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        v = {},
        w = {};
    function E(e) {
        return g.call(w, e) ? !0 : g.call(v, e) ? !1 : h.test(e) ? (w[e] = !0) : ((v[e] = !0), !1);
    }
    function A(e, t, o, a) {
        if (o !== null && o.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return a
                    ? !1
                    : o !== null
                      ? !o.acceptsBooleans
                      : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function M(e, t, o, a) {
        if (t === null || typeof t > "u" || A(e, t, o, a)) return !0;
        if (a) return !1;
        if (o !== null)
            switch (o.type) {
                case 3:
                    return !t;
                case 4:
                    return t === !1;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t;
            }
        return !1;
    }
    function N(e, t, o, a, c, d, m) {
        (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
            (this.attributeName = a),
            (this.attributeNamespace = c),
            (this.mustUseProperty = o),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = d),
            (this.removeEmptyString = m);
    }
    var T = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
            T[e] = new N(e, 0, !1, e, null, !1, !1);
        }),
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
            var t = e[0];
            T[t] = new N(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            T[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }),
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
            T[e] = new N(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
                T[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            T[e] = new N(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
            T[e] = new N(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
            T[e] = new N(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
            T[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
    var F = /[\-:]([a-z])/g;
    function L(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
            var t = e.replace(F, L);
            T[t] = new N(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
            var t = e.replace(F, L);
            T[t] = new N(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(F, L);
            T[t] = new N(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            T[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (T.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
        ["src", "href", "action", "formAction"].forEach(function (e) {
            T[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
    function $(e, t, o, a) {
        var c = T.hasOwnProperty(t) ? T[t] : null;
        (c !== null
            ? c.type !== 0
            : a || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
            (M(t, o, c, a) && (o = null),
            a || c === null
                ? E(t) && (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o))
                : c.mustUseProperty
                  ? (e[c.propertyName] = o === null ? (c.type === 3 ? !1 : "") : o)
                  : ((t = c.attributeName),
                    (a = c.attributeNamespace),
                    o === null
                        ? e.removeAttribute(t)
                        : ((c = c.type),
                          (o = c === 3 || (c === 4 && o === !0) ? "" : "" + o),
                          a ? e.setAttributeNS(a, t, o) : e.setAttribute(t, o))));
    }
    var V = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        H = Symbol.for("react.element"),
        se = Symbol.for("react.portal"),
        ee = Symbol.for("react.fragment"),
        Se = Symbol.for("react.strict_mode"),
        Ee = Symbol.for("react.profiler"),
        _e = Symbol.for("react.provider"),
        be = Symbol.for("react.context"),
        G = Symbol.for("react.forward_ref"),
        re = Symbol.for("react.suspense"),
        K = Symbol.for("react.suspense_list"),
        ve = Symbol.for("react.memo"),
        fe = Symbol.for("react.lazy"),
        pe = Symbol.for("react.offscreen"),
        D = Symbol.iterator;
    function X(e) {
        return e === null || typeof e != "object"
            ? null
            : ((e = (D && e[D]) || e["@@iterator"]), typeof e == "function" ? e : null);
    }
    var q = Object.assign,
        b;
    function z(e) {
        if (b === void 0)
            try {
                throw Error();
            } catch (o) {
                var t = o.stack.trim().match(/\n( *(at )?)/);
                b = (t && t[1]) || "";
            }
        return (
            `
` +
            b +
            e
        );
    }
    var xe = !1;
    function Te(e, t) {
        if (!e || xe) return "";
        xe = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (
                    ((t = function () {
                        throw Error();
                    }),
                    Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                ) {
                    try {
                        Reflect.construct(t, []);
                    } catch (O) {
                        var a = O;
                    }
                    Reflect.construct(e, [], t);
                } else {
                    try {
                        t.call();
                    } catch (O) {
                        a = O;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                } catch (O) {
                    a = O;
                }
                e();
            }
        } catch (O) {
            if (O && a && typeof O.stack == "string") {
                for (
                    var c = O.stack.split(`
`),
                        d = a.stack.split(`
`),
                        m = c.length - 1,
                        x = d.length - 1;
                    1 <= m && 0 <= x && c[m] !== d[x];

                )
                    x--;
                for (; 1 <= m && 0 <= x; m--, x--)
                    if (c[m] !== d[x]) {
                        if (m !== 1 || x !== 1)
                            do
                                if ((m--, x--, 0 > x || c[m] !== d[x])) {
                                    var S =
                                        `
` + c[m].replace(" at new ", " at ");
                                    return (
                                        e.displayName &&
                                            S.includes("<anonymous>") &&
                                            (S = S.replace("<anonymous>", e.displayName)),
                                        S
                                    );
                                }
                            while (1 <= m && 0 <= x);
                        break;
                    }
            }
        } finally {
            (xe = !1), (Error.prepareStackTrace = o);
        }
        return (e = e ? e.displayName || e.name : "") ? z(e) : "";
    }
    function Oe(e) {
        switch (e.tag) {
            case 5:
                return z(e.type);
            case 16:
                return z("Lazy");
            case 13:
                return z("Suspense");
            case 19:
                return z("SuspenseList");
            case 0:
            case 2:
            case 15:
                return (e = Te(e.type, !1)), e;
            case 11:
                return (e = Te(e.type.render, !1)), e;
            case 1:
                return (e = Te(e.type, !0)), e;
            default:
                return "";
        }
    }
    function Le(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case ee:
                return "Fragment";
            case se:
                return "Portal";
            case Ee:
                return "Profiler";
            case Se:
                return "StrictMode";
            case re:
                return "Suspense";
            case K:
                return "SuspenseList";
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case be:
                    return (e.displayName || "Context") + ".Consumer";
                case _e:
                    return (e._context.displayName || "Context") + ".Provider";
                case G:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = t.displayName || t.name || ""),
                            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                        e
                    );
                case ve:
                    return (t = e.displayName || null), t !== null ? t : Le(e.type) || "Memo";
                case fe:
                    (t = e._payload), (e = e._init);
                    try {
                        return Le(e(t));
                    } catch {}
            }
        return null;
    }
    function Me(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return (
                    (e = t.render),
                    (e = e.displayName || e.name || ""),
                    t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
                );
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return Le(t);
            case 8:
                return t === Se ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t;
        }
        return null;
    }
    function Ie(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function Ue(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function dt(e) {
        var t = Ue(e) ? "checked" : "value",
            o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            a = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var c = o.get,
                d = o.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return c.call(this);
                    },
                    set: function (m) {
                        (a = "" + m), d.call(this, m);
                    },
                }),
                Object.defineProperty(e, t, { enumerable: o.enumerable }),
                {
                    getValue: function () {
                        return a;
                    },
                    setValue: function (m) {
                        a = "" + m;
                    },
                    stopTracking: function () {
                        (e._valueTracker = null), delete e[t];
                    },
                }
            );
        }
    }
    function pn(e) {
        e._valueTracker || (e._valueTracker = dt(e));
    }
    function xr(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var o = t.getValue(),
            a = "";
        return e && (a = Ue(e) ? (e.checked ? "true" : "false") : e.value), (e = a), e !== o ? (t.setValue(e), !0) : !1;
    }
    function Gt(e) {
        if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    function Vr(e, t) {
        var o = t.checked;
        return q({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? e._wrapperState.initialChecked,
        });
    }
    function Ho(e, t) {
        var o = t.defaultValue == null ? "" : t.defaultValue,
            a = t.checked != null ? t.checked : t.defaultChecked;
        (o = Ie(t.value != null ? t.value : o)),
            (e._wrapperState = {
                initialChecked: a,
                initialValue: o,
                controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
            });
    }
    function js(e, t) {
        (t = t.checked), t != null && $(e, "checked", t, !1);
    }
    function Ur(e, t) {
        js(e, t);
        var o = Ie(t.value),
            a = t.type;
        if (o != null)
            a === "number"
                ? ((o === 0 && e.value === "") || e.value != o) && (e.value = "" + o)
                : e.value !== "" + o && (e.value = "" + o);
        else if (a === "submit" || a === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value")
            ? As(e, t.type, o)
            : t.hasOwnProperty("defaultValue") && As(e, t.type, Ie(t.defaultValue)),
            t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Ko(e, t, o) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var a = t.type;
            if (!((a !== "submit" && a !== "reset") || (t.value !== void 0 && t.value !== null))) return;
            (t = "" + e._wrapperState.initialValue), o || t === e.value || (e.value = t), (e.defaultValue = t);
        }
        (o = e.name),
            o !== "" && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            o !== "" && (e.name = o);
    }
    function As(e, t, o) {
        (t !== "number" || Gt(e.ownerDocument) !== e) &&
            (o == null
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
    }
    var $r = Array.isArray;
    function Nn(e, t, o, a) {
        if (((e = e.options), t)) {
            t = {};
            for (var c = 0; c < o.length; c++) t["$" + o[c]] = !0;
            for (o = 0; o < e.length; o++)
                (c = t.hasOwnProperty("$" + e[o].value)),
                    e[o].selected !== c && (e[o].selected = c),
                    c && a && (e[o].defaultSelected = !0);
        } else {
            for (o = "" + Ie(o), t = null, c = 0; c < e.length; c++) {
                if (e[c].value === o) {
                    (e[c].selected = !0), a && (e[c].defaultSelected = !0);
                    return;
                }
                t !== null || e[c].disabled || (t = e[c]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function _(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
    }
    function j(e, t) {
        var o = t.value;
        if (o == null) {
            if (((o = t.children), (t = t.defaultValue), o != null)) {
                if (t != null) throw Error(s(92));
                if ($r(o)) {
                    if (1 < o.length) throw Error(s(93));
                    o = o[0];
                }
                t = o;
            }
            t == null && (t = ""), (o = t);
        }
        e._wrapperState = { initialValue: Ie(o) };
    }
    function I(e, t) {
        var o = Ie(t.value),
            a = Ie(t.defaultValue);
        o != null &&
            ((o = "" + o),
            o !== e.value && (e.value = o),
            t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)),
            a != null && (e.defaultValue = "" + a);
    }
    function oe(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function J(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Q(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
            ? J(t)
            : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
              ? "http://www.w3.org/1999/xhtml"
              : e;
    }
    var le,
        De = (function (e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (t, o, a, c) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(t, o, a, c);
                      });
                  }
                : e;
        })(function (e, t) {
            if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
            else {
                for (
                    le = le || document.createElement("div"),
                        le.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                        t = le.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        });
    function We(e, t) {
        if (t) {
            var o = e.firstChild;
            if (o && o === e.lastChild && o.nodeType === 3) {
                o.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var et = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
        },
        Qa = ["Webkit", "ms", "Moz", "O"];
    Object.keys(et).forEach(function (e) {
        Qa.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (et[t] = et[e]);
        });
    });
    function Br(e, t, o) {
        return t == null || typeof t == "boolean" || t === ""
            ? ""
            : o || typeof t != "number" || t === 0 || (et.hasOwnProperty(e) && et[e])
              ? ("" + t).trim()
              : t + "px";
    }
    function Wr(e, t) {
        e = e.style;
        for (var o in t)
            if (t.hasOwnProperty(o)) {
                var a = o.indexOf("--") === 0,
                    c = Br(o, t[o], a);
                o === "float" && (o = "cssFloat"), a ? e.setProperty(o, c) : (e[o] = c);
            }
    }
    var Ya = q(
        { menuitem: !0 },
        {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
        }
    );
    function Zr(e, t) {
        if (t) {
            if (Ya[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(s(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(s(62));
        }
    }
    function Os(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var Hr = null;
    function Ga(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var qa = null,
        Kr = null,
        Qr = null;
    function Mc(e) {
        if ((e = to(e))) {
            if (typeof qa != "function") throw Error(s(280));
            var t = e.stateNode;
            t && ((t = gi(t)), qa(e.stateNode, e.type, t));
        }
    }
    function Dc(e) {
        Kr ? (Qr ? Qr.push(e) : (Qr = [e])) : (Kr = e);
    }
    function Ic() {
        if (Kr) {
            var e = Kr,
                t = Qr;
            if (((Qr = Kr = null), Mc(e), t)) for (e = 0; e < t.length; e++) Mc(t[e]);
        }
    }
    function Fc(e, t) {
        return e(t);
    }
    function zc() {}
    var Xa = !1;
    function Vc(e, t, o) {
        if (Xa) return e(t, o);
        Xa = !0;
        try {
            return Fc(e, t, o);
        } finally {
            (Xa = !1), (Kr !== null || Qr !== null) && (zc(), Ic());
        }
    }
    function Ls(e, t) {
        var o = e.stateNode;
        if (o === null) return null;
        var a = gi(o);
        if (a === null) return null;
        o = a[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (a = !a.disabled) ||
                    ((e = e.type), (a = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
                    (e = !a);
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (o && typeof o != "function") throw Error(s(231, t, typeof o));
        return o;
    }
    var Ja = !1;
    if (p)
        try {
            var Ms = {};
            Object.defineProperty(Ms, "passive", {
                get: function () {
                    Ja = !0;
                },
            }),
                window.addEventListener("test", Ms, Ms),
                window.removeEventListener("test", Ms, Ms);
        } catch {
            Ja = !1;
        }
    function Cg(e, t, o, a, c, d, m, x, S) {
        var O = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(o, O);
        } catch (B) {
            this.onError(B);
        }
    }
    var Ds = !1,
        Qo = null,
        Yo = !1,
        el = null,
        bg = {
            onError: function (e) {
                (Ds = !0), (Qo = e);
            },
        };
    function Tg(e, t, o, a, c, d, m, x, S) {
        (Ds = !1), (Qo = null), Cg.apply(bg, arguments);
    }
    function Ng(e, t, o, a, c, d, m, x, S) {
        if ((Tg.apply(this, arguments), Ds)) {
            if (Ds) {
                var O = Qo;
                (Ds = !1), (Qo = null);
            } else throw Error(s(198));
            Yo || ((Yo = !0), (el = O));
        }
    }
    function wr(e) {
        var t = e,
            o = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do (t = e), (t.flags & 4098) !== 0 && (o = t.return), (e = t.return);
            while (e);
        }
        return t.tag === 3 ? o : null;
    }
    function Uc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
                return t.dehydrated;
        }
        return null;
    }
    function $c(e) {
        if (wr(e) !== e) throw Error(s(188));
    }
    function Pg(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = wr(e)), t === null)) throw Error(s(188));
            return t !== e ? null : e;
        }
        for (var o = e, a = t; ; ) {
            var c = o.return;
            if (c === null) break;
            var d = c.alternate;
            if (d === null) {
                if (((a = c.return), a !== null)) {
                    o = a;
                    continue;
                }
                break;
            }
            if (c.child === d.child) {
                for (d = c.child; d; ) {
                    if (d === o) return $c(c), e;
                    if (d === a) return $c(c), t;
                    d = d.sibling;
                }
                throw Error(s(188));
            }
            if (o.return !== a.return) (o = c), (a = d);
            else {
                for (var m = !1, x = c.child; x; ) {
                    if (x === o) {
                        (m = !0), (o = c), (a = d);
                        break;
                    }
                    if (x === a) {
                        (m = !0), (a = c), (o = d);
                        break;
                    }
                    x = x.sibling;
                }
                if (!m) {
                    for (x = d.child; x; ) {
                        if (x === o) {
                            (m = !0), (o = d), (a = c);
                            break;
                        }
                        if (x === a) {
                            (m = !0), (a = d), (o = c);
                            break;
                        }
                        x = x.sibling;
                    }
                    if (!m) throw Error(s(189));
                }
            }
            if (o.alternate !== a) throw Error(s(190));
        }
        if (o.tag !== 3) throw Error(s(188));
        return o.stateNode.current === o ? e : t;
    }
    function Bc(e) {
        return (e = Pg(e)), e !== null ? Wc(e) : null;
    }
    function Wc(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
            var t = Wc(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Zc = r.unstable_scheduleCallback,
        Hc = r.unstable_cancelCallback,
        Rg = r.unstable_shouldYield,
        jg = r.unstable_requestPaint,
        nt = r.unstable_now,
        Ag = r.unstable_getCurrentPriorityLevel,
        tl = r.unstable_ImmediatePriority,
        Kc = r.unstable_UserBlockingPriority,
        Go = r.unstable_NormalPriority,
        Og = r.unstable_LowPriority,
        Qc = r.unstable_IdlePriority,
        qo = null,
        mn = null;
    function Lg(e) {
        if (mn && typeof mn.onCommitFiberRoot == "function")
            try {
                mn.onCommitFiberRoot(qo, e, void 0, (e.current.flags & 128) === 128);
            } catch {}
    }
    var qt = Math.clz32 ? Math.clz32 : Ig,
        Mg = Math.log,
        Dg = Math.LN2;
    function Ig(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((Mg(e) / Dg) | 0)) | 0;
    }
    var Xo = 64,
        Jo = 4194304;
    function Is(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e;
        }
    }
    function ei(e, t) {
        var o = e.pendingLanes;
        if (o === 0) return 0;
        var a = 0,
            c = e.suspendedLanes,
            d = e.pingedLanes,
            m = o & 268435455;
        if (m !== 0) {
            var x = m & ~c;
            x !== 0 ? (a = Is(x)) : ((d &= m), d !== 0 && (a = Is(d)));
        } else (m = o & ~c), m !== 0 ? (a = Is(m)) : d !== 0 && (a = Is(d));
        if (a === 0) return 0;
        if (
            t !== 0 &&
            t !== a &&
            (t & c) === 0 &&
            ((c = a & -a), (d = t & -t), c >= d || (c === 16 && (d & 4194240) !== 0))
        )
            return t;
        if (((a & 4) !== 0 && (a |= o & 16), (t = e.entangledLanes), t !== 0))
            for (e = e.entanglements, t &= a; 0 < t; ) (o = 31 - qt(t)), (c = 1 << o), (a |= e[o]), (t &= ~c);
        return a;
    }
    function Fg(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function zg(e, t) {
        for (var o = e.suspendedLanes, a = e.pingedLanes, c = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
            var m = 31 - qt(d),
                x = 1 << m,
                S = c[m];
            S === -1 ? ((x & o) === 0 || (x & a) !== 0) && (c[m] = Fg(x, t)) : S <= t && (e.expiredLanes |= x),
                (d &= ~x);
        }
    }
    function nl(e) {
        return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Yc() {
        var e = Xo;
        return (Xo <<= 1), (Xo & 4194240) === 0 && (Xo = 64), e;
    }
    function rl(e) {
        for (var t = [], o = 0; 31 > o; o++) t.push(e);
        return t;
    }
    function Fs(e, t, o) {
        (e.pendingLanes |= t),
            t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            (e = e.eventTimes),
            (t = 31 - qt(t)),
            (e[t] = o);
    }
    function Vg(e, t) {
        var o = e.pendingLanes & ~t;
        (e.pendingLanes = t),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= t),
            (e.mutableReadLanes &= t),
            (e.entangledLanes &= t),
            (t = e.entanglements);
        var a = e.eventTimes;
        for (e = e.expirationTimes; 0 < o; ) {
            var c = 31 - qt(o),
                d = 1 << c;
            (t[c] = 0), (a[c] = -1), (e[c] = -1), (o &= ~d);
        }
    }
    function sl(e, t) {
        var o = (e.entangledLanes |= t);
        for (e = e.entanglements; o; ) {
            var a = 31 - qt(o),
                c = 1 << a;
            (c & t) | (e[a] & t) && (e[a] |= t), (o &= ~c);
        }
    }
    var Be = 0;
    function Gc(e) {
        return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
    }
    var qc,
        ol,
        Xc,
        Jc,
        ed,
        il = !1,
        ti = [],
        Wn = null,
        Zn = null,
        Hn = null,
        zs = new Map(),
        Vs = new Map(),
        Kn = [],
        Ug =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " "
            );
    function td(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Wn = null;
                break;
            case "dragenter":
            case "dragleave":
                Zn = null;
                break;
            case "mouseover":
            case "mouseout":
                Hn = null;
                break;
            case "pointerover":
            case "pointerout":
                zs.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Vs.delete(t.pointerId);
        }
    }
    function Us(e, t, o, a, c, d) {
        return e === null || e.nativeEvent !== d
            ? ((e = { blockedOn: t, domEventName: o, eventSystemFlags: a, nativeEvent: d, targetContainers: [c] }),
              t !== null && ((t = to(t)), t !== null && ol(t)),
              e)
            : ((e.eventSystemFlags |= a), (t = e.targetContainers), c !== null && t.indexOf(c) === -1 && t.push(c), e);
    }
    function $g(e, t, o, a, c) {
        switch (t) {
            case "focusin":
                return (Wn = Us(Wn, e, t, o, a, c)), !0;
            case "dragenter":
                return (Zn = Us(Zn, e, t, o, a, c)), !0;
            case "mouseover":
                return (Hn = Us(Hn, e, t, o, a, c)), !0;
            case "pointerover":
                var d = c.pointerId;
                return zs.set(d, Us(zs.get(d) || null, e, t, o, a, c)), !0;
            case "gotpointercapture":
                return (d = c.pointerId), Vs.set(d, Us(Vs.get(d) || null, e, t, o, a, c)), !0;
        }
        return !1;
    }
    function nd(e) {
        var t = _r(e.target);
        if (t !== null) {
            var o = wr(t);
            if (o !== null) {
                if (((t = o.tag), t === 13)) {
                    if (((t = Uc(o)), t !== null)) {
                        (e.blockedOn = t),
                            ed(e.priority, function () {
                                Xc(o);
                            });
                        return;
                    }
                } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function ni(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var o = ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (o === null) {
                o = e.nativeEvent;
                var a = new o.constructor(o.type, o);
                (Hr = a), o.target.dispatchEvent(a), (Hr = null);
            } else return (t = to(o)), t !== null && ol(t), (e.blockedOn = o), !1;
            t.shift();
        }
        return !0;
    }
    function rd(e, t, o) {
        ni(e) && o.delete(t);
    }
    function Bg() {
        (il = !1),
            Wn !== null && ni(Wn) && (Wn = null),
            Zn !== null && ni(Zn) && (Zn = null),
            Hn !== null && ni(Hn) && (Hn = null),
            zs.forEach(rd),
            Vs.forEach(rd);
    }
    function $s(e, t) {
        e.blockedOn === t &&
            ((e.blockedOn = null), il || ((il = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Bg)));
    }
    function Bs(e) {
        function t(c) {
            return $s(c, e);
        }
        if (0 < ti.length) {
            $s(ti[0], e);
            for (var o = 1; o < ti.length; o++) {
                var a = ti[o];
                a.blockedOn === e && (a.blockedOn = null);
            }
        }
        for (
            Wn !== null && $s(Wn, e),
                Zn !== null && $s(Zn, e),
                Hn !== null && $s(Hn, e),
                zs.forEach(t),
                Vs.forEach(t),
                o = 0;
            o < Kn.length;
            o++
        )
            (a = Kn[o]), a.blockedOn === e && (a.blockedOn = null);
        for (; 0 < Kn.length && ((o = Kn[0]), o.blockedOn === null); ) nd(o), o.blockedOn === null && Kn.shift();
    }
    var Yr = V.ReactCurrentBatchConfig,
        ri = !0;
    function Wg(e, t, o, a) {
        var c = Be,
            d = Yr.transition;
        Yr.transition = null;
        try {
            (Be = 1), al(e, t, o, a);
        } finally {
            (Be = c), (Yr.transition = d);
        }
    }
    function Zg(e, t, o, a) {
        var c = Be,
            d = Yr.transition;
        Yr.transition = null;
        try {
            (Be = 4), al(e, t, o, a);
        } finally {
            (Be = c), (Yr.transition = d);
        }
    }
    function al(e, t, o, a) {
        if (ri) {
            var c = ll(e, t, o, a);
            if (c === null) Cl(e, t, a, si, o), td(e, a);
            else if ($g(c, e, t, o, a)) a.stopPropagation();
            else if ((td(e, a), t & 4 && -1 < Ug.indexOf(e))) {
                for (; c !== null; ) {
                    var d = to(c);
                    if ((d !== null && qc(d), (d = ll(e, t, o, a)), d === null && Cl(e, t, a, si, o), d === c)) break;
                    c = d;
                }
                c !== null && a.stopPropagation();
            } else Cl(e, t, a, null, o);
        }
    }
    var si = null;
    function ll(e, t, o, a) {
        if (((si = null), (e = Ga(a)), (e = _r(e)), e !== null))
            if (((t = wr(e)), t === null)) e = null;
            else if (((o = t.tag), o === 13)) {
                if (((e = Uc(t)), e !== null)) return e;
                e = null;
            } else if (o === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        return (si = e), null;
    }
    function sd(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (Ag()) {
                    case tl:
                        return 1;
                    case Kc:
                        return 4;
                    case Go:
                    case Og:
                        return 16;
                    case Qc:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Qn = null,
        ul = null,
        oi = null;
    function od() {
        if (oi) return oi;
        var e,
            t = ul,
            o = t.length,
            a,
            c = "value" in Qn ? Qn.value : Qn.textContent,
            d = c.length;
        for (e = 0; e < o && t[e] === c[e]; e++);
        var m = o - e;
        for (a = 1; a <= m && t[o - a] === c[d - a]; a++);
        return (oi = c.slice(e, 1 < a ? 1 - a : void 0));
    }
    function ii(e) {
        var t = e.keyCode;
        return (
            "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function ai() {
        return !0;
    }
    function id() {
        return !1;
    }
    function Dt(e) {
        function t(o, a, c, d, m) {
            (this._reactName = o),
                (this._targetInst = c),
                (this.type = a),
                (this.nativeEvent = d),
                (this.target = m),
                (this.currentTarget = null);
            for (var x in e) e.hasOwnProperty(x) && ((o = e[x]), (this[x] = o ? o(d) : d[x]));
            return (
                (this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1)
                    ? ai
                    : id),
                (this.isPropagationStopped = id),
                this
            );
        }
        return (
            q(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var o = this.nativeEvent;
                    o &&
                        (o.preventDefault
                            ? o.preventDefault()
                            : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                        (this.isDefaultPrevented = ai));
                },
                stopPropagation: function () {
                    var o = this.nativeEvent;
                    o &&
                        (o.stopPropagation
                            ? o.stopPropagation()
                            : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                        (this.isPropagationStopped = ai));
                },
                persist: function () {},
                isPersistent: ai,
            }),
            t
        );
    }
    var Gr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        cl = Dt(Gr),
        Ws = q({}, Gr, { view: 0, detail: 0 }),
        Hg = Dt(Ws),
        dl,
        fl,
        Zs,
        li = q({}, Ws, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: ml,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget;
            },
            movementX: function (e) {
                return "movementX" in e
                    ? e.movementX
                    : (e !== Zs &&
                          (Zs && e.type === "mousemove"
                              ? ((dl = e.screenX - Zs.screenX), (fl = e.screenY - Zs.screenY))
                              : (fl = dl = 0),
                          (Zs = e)),
                      dl);
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : fl;
            },
        }),
        ad = Dt(li),
        Kg = q({}, li, { dataTransfer: 0 }),
        Qg = Dt(Kg),
        Yg = q({}, Ws, { relatedTarget: 0 }),
        pl = Dt(Yg),
        Gg = q({}, Gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        qg = Dt(Gg),
        Xg = q({}, Gr, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
        }),
        Jg = Dt(Xg),
        ey = q({}, Gr, { data: 0 }),
        ld = Dt(ey),
        ty = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
        },
        ny = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
        },
        ry = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function sy(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = ry[e]) ? !!t[e] : !1;
    }
    function ml() {
        return sy;
    }
    var oy = q({}, Ws, {
            key: function (e) {
                if (e.key) {
                    var t = ty[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress"
                    ? ((e = ii(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                    : e.type === "keydown" || e.type === "keyup"
                      ? ny[e.keyCode] || "Unidentified"
                      : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ml,
            charCode: function (e) {
                return e.type === "keypress" ? ii(e) : 0;
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function (e) {
                return e.type === "keypress" ? ii(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
        }),
        iy = Dt(oy),
        ay = q({}, li, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        ud = Dt(ay),
        ly = q({}, Ws, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ml,
        }),
        uy = Dt(ly),
        cy = q({}, Gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        dy = Dt(cy),
        fy = q({}, li, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                      ? -e.wheelDeltaY
                      : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        py = Dt(fy),
        my = [9, 13, 27, 32],
        hl = p && "CompositionEvent" in window,
        Hs = null;
    p && "documentMode" in document && (Hs = document.documentMode);
    var hy = p && "TextEvent" in window && !Hs,
        cd = p && (!hl || (Hs && 8 < Hs && 11 >= Hs)),
        dd = " ",
        fd = !1;
    function pd(e, t) {
        switch (e) {
            case "keyup":
                return my.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function md(e) {
        return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
    }
    var qr = !1;
    function gy(e, t) {
        switch (e) {
            case "compositionend":
                return md(t);
            case "keypress":
                return t.which !== 32 ? null : ((fd = !0), dd);
            case "textInput":
                return (e = t.data), e === dd && fd ? null : e;
            default:
                return null;
        }
    }
    function yy(e, t) {
        if (qr)
            return e === "compositionend" || (!hl && pd(e, t))
                ? ((e = od()), (oi = ul = Qn = null), (qr = !1), e)
                : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return cd && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var vy = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    };
    function hd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!vy[e.type] : t === "textarea";
    }
    function gd(e, t, o, a) {
        Dc(a),
            (t = pi(t, "onChange")),
            0 < t.length && ((o = new cl("onChange", "change", null, o, a)), e.push({ event: o, listeners: t }));
    }
    var Ks = null,
        Qs = null;
    function xy(e) {
        Ld(e, 0);
    }
    function ui(e) {
        var t = ns(e);
        if (xr(t)) return e;
    }
    function wy(e, t) {
        if (e === "change") return t;
    }
    var yd = !1;
    if (p) {
        var gl;
        if (p) {
            var yl = "oninput" in document;
            if (!yl) {
                var vd = document.createElement("div");
                vd.setAttribute("oninput", "return;"), (yl = typeof vd.oninput == "function");
            }
            gl = yl;
        } else gl = !1;
        yd = gl && (!document.documentMode || 9 < document.documentMode);
    }
    function xd() {
        Ks && (Ks.detachEvent("onpropertychange", wd), (Qs = Ks = null));
    }
    function wd(e) {
        if (e.propertyName === "value" && ui(Qs)) {
            var t = [];
            gd(t, Qs, e, Ga(e)), Vc(xy, t);
        }
    }
    function _y(e, t, o) {
        e === "focusin" ? (xd(), (Ks = t), (Qs = o), Ks.attachEvent("onpropertychange", wd)) : e === "focusout" && xd();
    }
    function ky(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ui(Qs);
    }
    function Sy(e, t) {
        if (e === "click") return ui(t);
    }
    function Ey(e, t) {
        if (e === "input" || e === "change") return ui(t);
    }
    function Cy(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var Xt = typeof Object.is == "function" ? Object.is : Cy;
    function Ys(e, t) {
        if (Xt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var o = Object.keys(e),
            a = Object.keys(t);
        if (o.length !== a.length) return !1;
        for (a = 0; a < o.length; a++) {
            var c = o[a];
            if (!g.call(t, c) || !Xt(e[c], t[c])) return !1;
        }
        return !0;
    }
    function _d(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function kd(e, t) {
        var o = _d(e);
        e = 0;
        for (var a; o; ) {
            if (o.nodeType === 3) {
                if (((a = e + o.textContent.length), e <= t && a >= t)) return { node: o, offset: t - e };
                e = a;
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e;
                    }
                    o = o.parentNode;
                }
                o = void 0;
            }
            o = _d(o);
        }
    }
    function Sd(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? Sd(e, t.parentNode)
                    : "contains" in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1
            : !1;
    }
    function Ed() {
        for (var e = window, t = Gt(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var o = typeof t.contentWindow.location.href == "string";
            } catch {
                o = !1;
            }
            if (o) e = t.contentWindow;
            else break;
            t = Gt(e.document);
        }
        return t;
    }
    function vl(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === "input" &&
                (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
                t === "textarea" ||
                e.contentEditable === "true")
        );
    }
    function by(e) {
        var t = Ed(),
            o = e.focusedElem,
            a = e.selectionRange;
        if (t !== o && o && o.ownerDocument && Sd(o.ownerDocument.documentElement, o)) {
            if (a !== null && vl(o)) {
                if (((t = a.start), (e = a.end), e === void 0 && (e = t), "selectionStart" in o))
                    (o.selectionStart = t), (o.selectionEnd = Math.min(e, o.value.length));
                else if (((e = ((t = o.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                    e = e.getSelection();
                    var c = o.textContent.length,
                        d = Math.min(a.start, c);
                    (a = a.end === void 0 ? d : Math.min(a.end, c)),
                        !e.extend && d > a && ((c = a), (a = d), (d = c)),
                        (c = kd(o, d));
                    var m = kd(o, a);
                    c &&
                        m &&
                        (e.rangeCount !== 1 ||
                            e.anchorNode !== c.node ||
                            e.anchorOffset !== c.offset ||
                            e.focusNode !== m.node ||
                            e.focusOffset !== m.offset) &&
                        ((t = t.createRange()),
                        t.setStart(c.node, c.offset),
                        e.removeAllRanges(),
                        d > a
                            ? (e.addRange(t), e.extend(m.node, m.offset))
                            : (t.setEnd(m.node, m.offset), e.addRange(t)));
                }
            }
            for (t = [], e = o; (e = e.parentNode); )
                e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < t.length; o++)
                (e = t[o]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
        }
    }
    var Ty = p && "documentMode" in document && 11 >= document.documentMode,
        Xr = null,
        xl = null,
        Gs = null,
        wl = !1;
    function Cd(e, t, o) {
        var a = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        wl ||
            Xr == null ||
            Xr !== Gt(a) ||
            ((a = Xr),
            "selectionStart" in a && vl(a)
                ? (a = { start: a.selectionStart, end: a.selectionEnd })
                : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
                  (a = {
                      anchorNode: a.anchorNode,
                      anchorOffset: a.anchorOffset,
                      focusNode: a.focusNode,
                      focusOffset: a.focusOffset,
                  })),
            (Gs && Ys(Gs, a)) ||
                ((Gs = a),
                (a = pi(xl, "onSelect")),
                0 < a.length &&
                    ((t = new cl("onSelect", "select", null, t, o)),
                    e.push({ event: t, listeners: a }),
                    (t.target = Xr))));
    }
    function ci(e, t) {
        var o = {};
        return (o[e.toLowerCase()] = t.toLowerCase()), (o["Webkit" + e] = "webkit" + t), (o["Moz" + e] = "moz" + t), o;
    }
    var Jr = {
            animationend: ci("Animation", "AnimationEnd"),
            animationiteration: ci("Animation", "AnimationIteration"),
            animationstart: ci("Animation", "AnimationStart"),
            transitionend: ci("Transition", "TransitionEnd"),
        },
        _l = {},
        bd = {};
    p &&
        ((bd = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete Jr.animationend.animation,
            delete Jr.animationiteration.animation,
            delete Jr.animationstart.animation),
        "TransitionEvent" in window || delete Jr.transitionend.transition);
    function di(e) {
        if (_l[e]) return _l[e];
        if (!Jr[e]) return e;
        var t = Jr[e],
            o;
        for (o in t) if (t.hasOwnProperty(o) && o in bd) return (_l[e] = t[o]);
        return e;
    }
    var Td = di("animationend"),
        Nd = di("animationiteration"),
        Pd = di("animationstart"),
        Rd = di("transitionend"),
        jd = new Map(),
        Ad =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " "
            );
    function Yn(e, t) {
        jd.set(e, t), u(t, [e]);
    }
    for (var kl = 0; kl < Ad.length; kl++) {
        var Sl = Ad[kl],
            Ny = Sl.toLowerCase(),
            Py = Sl[0].toUpperCase() + Sl.slice(1);
        Yn(Ny, "on" + Py);
    }
    Yn(Td, "onAnimationEnd"),
        Yn(Nd, "onAnimationIteration"),
        Yn(Pd, "onAnimationStart"),
        Yn("dblclick", "onDoubleClick"),
        Yn("focusin", "onFocus"),
        Yn("focusout", "onBlur"),
        Yn(Rd, "onTransitionEnd"),
        f("onMouseEnter", ["mouseout", "mouseover"]),
        f("onMouseLeave", ["mouseout", "mouseover"]),
        f("onPointerEnter", ["pointerout", "pointerover"]),
        f("onPointerLeave", ["pointerout", "pointerover"]),
        u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
        u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
        ),
        u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
        u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
        u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var qs =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
        Ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));
    function Od(e, t, o) {
        var a = e.type || "unknown-event";
        (e.currentTarget = o), Ng(a, t, void 0, e), (e.currentTarget = null);
    }
    function Ld(e, t) {
        t = (t & 4) !== 0;
        for (var o = 0; o < e.length; o++) {
            var a = e[o],
                c = a.event;
            a = a.listeners;
            e: {
                var d = void 0;
                if (t)
                    for (var m = a.length - 1; 0 <= m; m--) {
                        var x = a[m],
                            S = x.instance,
                            O = x.currentTarget;
                        if (((x = x.listener), S !== d && c.isPropagationStopped())) break e;
                        Od(c, x, O), (d = S);
                    }
                else
                    for (m = 0; m < a.length; m++) {
                        if (
                            ((x = a[m]),
                            (S = x.instance),
                            (O = x.currentTarget),
                            (x = x.listener),
                            S !== d && c.isPropagationStopped())
                        )
                            break e;
                        Od(c, x, O), (d = S);
                    }
            }
        }
        if (Yo) throw ((e = el), (Yo = !1), (el = null), e);
    }
    function He(e, t) {
        var o = t[jl];
        o === void 0 && (o = t[jl] = new Set());
        var a = e + "__bubble";
        o.has(a) || (Md(t, e, 2, !1), o.add(a));
    }
    function El(e, t, o) {
        var a = 0;
        t && (a |= 4), Md(o, e, a, t);
    }
    var fi = "_reactListening" + Math.random().toString(36).slice(2);
    function Xs(e) {
        if (!e[fi]) {
            (e[fi] = !0),
                i.forEach(function (o) {
                    o !== "selectionchange" && (Ry.has(o) || El(o, !1, e), El(o, !0, e));
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[fi] || ((t[fi] = !0), El("selectionchange", !1, t));
        }
    }
    function Md(e, t, o, a) {
        switch (sd(t)) {
            case 1:
                var c = Wg;
                break;
            case 4:
                c = Zg;
                break;
            default:
                c = al;
        }
        (o = c.bind(null, t, o, e)),
            (c = void 0),
            !Ja || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (c = !0),
            a
                ? c !== void 0
                    ? e.addEventListener(t, o, { capture: !0, passive: c })
                    : e.addEventListener(t, o, !0)
                : c !== void 0
                  ? e.addEventListener(t, o, { passive: c })
                  : e.addEventListener(t, o, !1);
    }
    function Cl(e, t, o, a, c) {
        var d = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (;;) {
                if (a === null) return;
                var m = a.tag;
                if (m === 3 || m === 4) {
                    var x = a.stateNode.containerInfo;
                    if (x === c || (x.nodeType === 8 && x.parentNode === c)) break;
                    if (m === 4)
                        for (m = a.return; m !== null; ) {
                            var S = m.tag;
                            if (
                                (S === 3 || S === 4) &&
                                ((S = m.stateNode.containerInfo), S === c || (S.nodeType === 8 && S.parentNode === c))
                            )
                                return;
                            m = m.return;
                        }
                    for (; x !== null; ) {
                        if (((m = _r(x)), m === null)) return;
                        if (((S = m.tag), S === 5 || S === 6)) {
                            a = d = m;
                            continue e;
                        }
                        x = x.parentNode;
                    }
                }
                a = a.return;
            }
        Vc(function () {
            var O = d,
                B = Ga(o),
                W = [];
            e: {
                var U = jd.get(e);
                if (U !== void 0) {
                    var ie = cl,
                        ce = e;
                    switch (e) {
                        case "keypress":
                            if (ii(o) === 0) break e;
                        case "keydown":
                        case "keyup":
                            ie = iy;
                            break;
                        case "focusin":
                            (ce = "focus"), (ie = pl);
                            break;
                        case "focusout":
                            (ce = "blur"), (ie = pl);
                            break;
                        case "beforeblur":
                        case "afterblur":
                            ie = pl;
                            break;
                        case "click":
                            if (o.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            ie = ad;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            ie = Qg;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            ie = uy;
                            break;
                        case Td:
                        case Nd:
                        case Pd:
                            ie = qg;
                            break;
                        case Rd:
                            ie = dy;
                            break;
                        case "scroll":
                            ie = Hg;
                            break;
                        case "wheel":
                            ie = py;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            ie = Jg;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            ie = ud;
                    }
                    var de = (t & 4) !== 0,
                        rt = !de && e === "scroll",
                        P = de ? (U !== null ? U + "Capture" : null) : U;
                    de = [];
                    for (var C = O, R; C !== null; ) {
                        R = C;
                        var Y = R.stateNode;
                        if (
                            (R.tag === 5 &&
                                Y !== null &&
                                ((R = Y), P !== null && ((Y = Ls(C, P)), Y != null && de.push(Js(C, Y, R)))),
                            rt)
                        )
                            break;
                        C = C.return;
                    }
                    0 < de.length && ((U = new ie(U, ce, null, o, B)), W.push({ event: U, listeners: de }));
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (
                        ((U = e === "mouseover" || e === "pointerover"),
                        (ie = e === "mouseout" || e === "pointerout"),
                        U && o !== Hr && (ce = o.relatedTarget || o.fromElement) && (_r(ce) || ce[Pn]))
                    )
                        break e;
                    if (
                        (ie || U) &&
                        ((U = B.window === B ? B : (U = B.ownerDocument) ? U.defaultView || U.parentWindow : window),
                        ie
                            ? ((ce = o.relatedTarget || o.toElement),
                              (ie = O),
                              (ce = ce ? _r(ce) : null),
                              ce !== null &&
                                  ((rt = wr(ce)), ce !== rt || (ce.tag !== 5 && ce.tag !== 6)) &&
                                  (ce = null))
                            : ((ie = null), (ce = O)),
                        ie !== ce)
                    ) {
                        if (
                            ((de = ad),
                            (Y = "onMouseLeave"),
                            (P = "onMouseEnter"),
                            (C = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                                ((de = ud), (Y = "onPointerLeave"), (P = "onPointerEnter"), (C = "pointer")),
                            (rt = ie == null ? U : ns(ie)),
                            (R = ce == null ? U : ns(ce)),
                            (U = new de(Y, C + "leave", ie, o, B)),
                            (U.target = rt),
                            (U.relatedTarget = R),
                            (Y = null),
                            _r(B) === O &&
                                ((de = new de(P, C + "enter", ce, o, B)),
                                (de.target = R),
                                (de.relatedTarget = rt),
                                (Y = de)),
                            (rt = Y),
                            ie && ce)
                        )
                            t: {
                                for (de = ie, P = ce, C = 0, R = de; R; R = es(R)) C++;
                                for (R = 0, Y = P; Y; Y = es(Y)) R++;
                                for (; 0 < C - R; ) (de = es(de)), C--;
                                for (; 0 < R - C; ) (P = es(P)), R--;
                                for (; C--; ) {
                                    if (de === P || (P !== null && de === P.alternate)) break t;
                                    (de = es(de)), (P = es(P));
                                }
                                de = null;
                            }
                        else de = null;
                        ie !== null && Dd(W, U, ie, de, !1), ce !== null && rt !== null && Dd(W, rt, ce, de, !0);
                    }
                }
                e: {
                    if (
                        ((U = O ? ns(O) : window),
                        (ie = U.nodeName && U.nodeName.toLowerCase()),
                        ie === "select" || (ie === "input" && U.type === "file"))
                    )
                        var me = wy;
                    else if (hd(U))
                        if (yd) me = Ey;
                        else {
                            me = ky;
                            var ge = _y;
                        }
                    else
                        (ie = U.nodeName) &&
                            ie.toLowerCase() === "input" &&
                            (U.type === "checkbox" || U.type === "radio") &&
                            (me = Sy);
                    if (me && (me = me(e, O))) {
                        gd(W, me, o, B);
                        break e;
                    }
                    ge && ge(e, U, O),
                        e === "focusout" &&
                            (ge = U._wrapperState) &&
                            ge.controlled &&
                            U.type === "number" &&
                            As(U, "number", U.value);
                }
                switch (((ge = O ? ns(O) : window), e)) {
                    case "focusin":
                        (hd(ge) || ge.contentEditable === "true") && ((Xr = ge), (xl = O), (Gs = null));
                        break;
                    case "focusout":
                        Gs = xl = Xr = null;
                        break;
                    case "mousedown":
                        wl = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        (wl = !1), Cd(W, o, B);
                        break;
                    case "selectionchange":
                        if (Ty) break;
                    case "keydown":
                    case "keyup":
                        Cd(W, o, B);
                }
                var ye;
                if (hl)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var Ce = "onCompositionStart";
                                break e;
                            case "compositionend":
                                Ce = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                Ce = "onCompositionUpdate";
                                break e;
                        }
                        Ce = void 0;
                    }
                else
                    qr
                        ? pd(e, o) && (Ce = "onCompositionEnd")
                        : e === "keydown" && o.keyCode === 229 && (Ce = "onCompositionStart");
                Ce &&
                    (cd &&
                        o.locale !== "ko" &&
                        (qr || Ce !== "onCompositionStart"
                            ? Ce === "onCompositionEnd" && qr && (ye = od())
                            : ((Qn = B), (ul = "value" in Qn ? Qn.value : Qn.textContent), (qr = !0))),
                    (ge = pi(O, Ce)),
                    0 < ge.length &&
                        ((Ce = new ld(Ce, e, null, o, B)),
                        W.push({ event: Ce, listeners: ge }),
                        ye ? (Ce.data = ye) : ((ye = md(o)), ye !== null && (Ce.data = ye)))),
                    (ye = hy ? gy(e, o) : yy(e, o)) &&
                        ((O = pi(O, "onBeforeInput")),
                        0 < O.length &&
                            ((B = new ld("onBeforeInput", "beforeinput", null, o, B)),
                            W.push({ event: B, listeners: O }),
                            (B.data = ye)));
            }
            Ld(W, t);
        });
    }
    function Js(e, t, o) {
        return { instance: e, listener: t, currentTarget: o };
    }
    function pi(e, t) {
        for (var o = t + "Capture", a = []; e !== null; ) {
            var c = e,
                d = c.stateNode;
            c.tag === 5 &&
                d !== null &&
                ((c = d),
                (d = Ls(e, o)),
                d != null && a.unshift(Js(e, d, c)),
                (d = Ls(e, t)),
                d != null && a.push(Js(e, d, c))),
                (e = e.return);
        }
        return a;
    }
    function es(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function Dd(e, t, o, a, c) {
        for (var d = t._reactName, m = []; o !== null && o !== a; ) {
            var x = o,
                S = x.alternate,
                O = x.stateNode;
            if (S !== null && S === a) break;
            x.tag === 5 &&
                O !== null &&
                ((x = O),
                c
                    ? ((S = Ls(o, d)), S != null && m.unshift(Js(o, S, x)))
                    : c || ((S = Ls(o, d)), S != null && m.push(Js(o, S, x)))),
                (o = o.return);
        }
        m.length !== 0 && e.push({ event: t, listeners: m });
    }
    var jy = /\r\n?/g,
        Ay = /\u0000|\uFFFD/g;
    function Id(e) {
        return (typeof e == "string" ? e : "" + e)
            .replace(
                jy,
                `
`
            )
            .replace(Ay, "");
    }
    function mi(e, t, o) {
        if (((t = Id(t)), Id(e) !== t && o)) throw Error(s(425));
    }
    function hi() {}
    var bl = null,
        Tl = null;
    function Nl(e, t) {
        return (
            e === "textarea" ||
            e === "noscript" ||
            typeof t.children == "string" ||
            typeof t.children == "number" ||
            (typeof t.dangerouslySetInnerHTML == "object" &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Pl = typeof setTimeout == "function" ? setTimeout : void 0,
        Oy = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Fd = typeof Promise == "function" ? Promise : void 0,
        Ly =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Fd < "u"
                  ? function (e) {
                        return Fd.resolve(null).then(e).catch(My);
                    }
                  : Pl;
    function My(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function Rl(e, t) {
        var o = t,
            a = 0;
        do {
            var c = o.nextSibling;
            if ((e.removeChild(o), c && c.nodeType === 8))
                if (((o = c.data), o === "/$")) {
                    if (a === 0) {
                        e.removeChild(c), Bs(t);
                        return;
                    }
                    a--;
                } else (o !== "$" && o !== "$?" && o !== "$!") || a++;
            o = c;
        } while (o);
        Bs(t);
    }
    function Gn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
                if (t === "/$") return null;
            }
        }
        return e;
    }
    function zd(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var o = e.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (t === 0) return e;
                    t--;
                } else o === "/$" && t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var ts = Math.random().toString(36).slice(2),
        hn = "__reactFiber$" + ts,
        eo = "__reactProps$" + ts,
        Pn = "__reactContainer$" + ts,
        jl = "__reactEvents$" + ts,
        Dy = "__reactListeners$" + ts,
        Iy = "__reactHandles$" + ts;
    function _r(e) {
        var t = e[hn];
        if (t) return t;
        for (var o = e.parentNode; o; ) {
            if ((t = o[Pn] || o[hn])) {
                if (((o = t.alternate), t.child !== null || (o !== null && o.child !== null)))
                    for (e = zd(e); e !== null; ) {
                        if ((o = e[hn])) return o;
                        e = zd(e);
                    }
                return t;
            }
            (e = o), (o = e.parentNode);
        }
        return null;
    }
    function to(e) {
        return (e = e[hn] || e[Pn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
    }
    function ns(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33));
    }
    function gi(e) {
        return e[eo] || null;
    }
    var Al = [],
        rs = -1;
    function qn(e) {
        return { current: e };
    }
    function Ke(e) {
        0 > rs || ((e.current = Al[rs]), (Al[rs] = null), rs--);
    }
    function Ze(e, t) {
        rs++, (Al[rs] = e.current), (e.current = t);
    }
    var Xn = {},
        vt = qn(Xn),
        Rt = qn(!1),
        kr = Xn;
    function ss(e, t) {
        var o = e.type.contextTypes;
        if (!o) return Xn;
        var a = e.stateNode;
        if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
            return a.__reactInternalMemoizedMaskedChildContext;
        var c = {},
            d;
        for (d in o) c[d] = t[d];
        return (
            a &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = t),
                (e.__reactInternalMemoizedMaskedChildContext = c)),
            c
        );
    }
    function jt(e) {
        return (e = e.childContextTypes), e != null;
    }
    function yi() {
        Ke(Rt), Ke(vt);
    }
    function Vd(e, t, o) {
        if (vt.current !== Xn) throw Error(s(168));
        Ze(vt, t), Ze(Rt, o);
    }
    function Ud(e, t, o) {
        var a = e.stateNode;
        if (((t = t.childContextTypes), typeof a.getChildContext != "function")) return o;
        a = a.getChildContext();
        for (var c in a) if (!(c in t)) throw Error(s(108, Me(e) || "Unknown", c));
        return q({}, o, a);
    }
    function vi(e) {
        return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xn),
            (kr = vt.current),
            Ze(vt, e),
            Ze(Rt, Rt.current),
            !0
        );
    }
    function $d(e, t, o) {
        var a = e.stateNode;
        if (!a) throw Error(s(169));
        o ? ((e = Ud(e, t, kr)), (a.__reactInternalMemoizedMergedChildContext = e), Ke(Rt), Ke(vt), Ze(vt, e)) : Ke(Rt),
            Ze(Rt, o);
    }
    var Rn = null,
        xi = !1,
        Ol = !1;
    function Bd(e) {
        Rn === null ? (Rn = [e]) : Rn.push(e);
    }
    function Fy(e) {
        (xi = !0), Bd(e);
    }
    function Jn() {
        if (!Ol && Rn !== null) {
            Ol = !0;
            var e = 0,
                t = Be;
            try {
                var o = Rn;
                for (Be = 1; e < o.length; e++) {
                    var a = o[e];
                    do a = a(!0);
                    while (a !== null);
                }
                (Rn = null), (xi = !1);
            } catch (c) {
                throw (Rn !== null && (Rn = Rn.slice(e + 1)), Zc(tl, Jn), c);
            } finally {
                (Be = t), (Ol = !1);
            }
        }
        return null;
    }
    var os = [],
        is = 0,
        wi = null,
        _i = 0,
        Wt = [],
        Zt = 0,
        Sr = null,
        jn = 1,
        An = "";
    function Er(e, t) {
        (os[is++] = _i), (os[is++] = wi), (wi = e), (_i = t);
    }
    function Wd(e, t, o) {
        (Wt[Zt++] = jn), (Wt[Zt++] = An), (Wt[Zt++] = Sr), (Sr = e);
        var a = jn;
        e = An;
        var c = 32 - qt(a) - 1;
        (a &= ~(1 << c)), (o += 1);
        var d = 32 - qt(t) + c;
        if (30 < d) {
            var m = c - (c % 5);
            (d = (a & ((1 << m) - 1)).toString(32)),
                (a >>= m),
                (c -= m),
                (jn = (1 << (32 - qt(t) + c)) | (o << c) | a),
                (An = d + e);
        } else (jn = (1 << d) | (o << c) | a), (An = e);
    }
    function Ll(e) {
        e.return !== null && (Er(e, 1), Wd(e, 1, 0));
    }
    function Ml(e) {
        for (; e === wi; ) (wi = os[--is]), (os[is] = null), (_i = os[--is]), (os[is] = null);
        for (; e === Sr; )
            (Sr = Wt[--Zt]), (Wt[Zt] = null), (An = Wt[--Zt]), (Wt[Zt] = null), (jn = Wt[--Zt]), (Wt[Zt] = null);
    }
    var It = null,
        Ft = null,
        Ye = !1,
        Jt = null;
    function Zd(e, t) {
        var o = Yt(5, null, null, 0);
        (o.elementType = "DELETED"),
            (o.stateNode = t),
            (o.return = e),
            (t = e.deletions),
            t === null ? ((e.deletions = [o]), (e.flags |= 16)) : t.push(o);
    }
    function Hd(e, t) {
        switch (e.tag) {
            case 5:
                var o = e.type;
                return (
                    (t = t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                    t !== null ? ((e.stateNode = t), (It = e), (Ft = Gn(t.firstChild)), !0) : !1
                );
            case 6:
                return (
                    (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                    t !== null ? ((e.stateNode = t), (It = e), (Ft = null), !0) : !1
                );
            case 13:
                return (
                    (t = t.nodeType !== 8 ? null : t),
                    t !== null
                        ? ((o = Sr !== null ? { id: jn, overflow: An } : null),
                          (e.memoizedState = { dehydrated: t, treeContext: o, retryLane: 1073741824 }),
                          (o = Yt(18, null, null, 0)),
                          (o.stateNode = t),
                          (o.return = e),
                          (e.child = o),
                          (It = e),
                          (Ft = null),
                          !0)
                        : !1
                );
            default:
                return !1;
        }
    }
    function Dl(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Il(e) {
        if (Ye) {
            var t = Ft;
            if (t) {
                var o = t;
                if (!Hd(e, t)) {
                    if (Dl(e)) throw Error(s(418));
                    t = Gn(o.nextSibling);
                    var a = It;
                    t && Hd(e, t) ? Zd(a, o) : ((e.flags = (e.flags & -4097) | 2), (Ye = !1), (It = e));
                }
            } else {
                if (Dl(e)) throw Error(s(418));
                (e.flags = (e.flags & -4097) | 2), (Ye = !1), (It = e);
            }
        }
    }
    function Kd(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
        It = e;
    }
    function ki(e) {
        if (e !== It) return !1;
        if (!Ye) return Kd(e), (Ye = !0), !1;
        var t;
        if (
            ((t = e.tag !== 3) &&
                !(t = e.tag !== 5) &&
                ((t = e.type), (t = t !== "head" && t !== "body" && !Nl(e.type, e.memoizedProps))),
            t && (t = Ft))
        ) {
            if (Dl(e)) throw (Qd(), Error(s(418)));
            for (; t; ) Zd(e, t), (t = Gn(t.nextSibling));
        }
        if ((Kd(e), e.tag === 13)) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var o = e.data;
                        if (o === "/$") {
                            if (t === 0) {
                                Ft = Gn(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else (o !== "$" && o !== "$!" && o !== "$?") || t++;
                    }
                    e = e.nextSibling;
                }
                Ft = null;
            }
        } else Ft = It ? Gn(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Qd() {
        for (var e = Ft; e; ) e = Gn(e.nextSibling);
    }
    function as() {
        (Ft = It = null), (Ye = !1);
    }
    function Fl(e) {
        Jt === null ? (Jt = [e]) : Jt.push(e);
    }
    var zy = V.ReactCurrentBatchConfig;
    function no(e, t, o) {
        if (((e = o.ref), e !== null && typeof e != "function" && typeof e != "object")) {
            if (o._owner) {
                if (((o = o._owner), o)) {
                    if (o.tag !== 1) throw Error(s(309));
                    var a = o.stateNode;
                }
                if (!a) throw Error(s(147, e));
                var c = a,
                    d = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d
                    ? t.ref
                    : ((t = function (m) {
                          var x = c.refs;
                          m === null ? delete x[d] : (x[d] = m);
                      }),
                      (t._stringRef = d),
                      t);
            }
            if (typeof e != "string") throw Error(s(284));
            if (!o._owner) throw Error(s(290, e));
        }
        return e;
    }
    function Si(e, t) {
        throw (
            ((e = Object.prototype.toString.call(t)),
            Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
        );
    }
    function Yd(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Gd(e) {
        function t(P, C) {
            if (e) {
                var R = P.deletions;
                R === null ? ((P.deletions = [C]), (P.flags |= 16)) : R.push(C);
            }
        }
        function o(P, C) {
            if (!e) return null;
            for (; C !== null; ) t(P, C), (C = C.sibling);
            return null;
        }
        function a(P, C) {
            for (P = new Map(); C !== null; ) C.key !== null ? P.set(C.key, C) : P.set(C.index, C), (C = C.sibling);
            return P;
        }
        function c(P, C) {
            return (P = ar(P, C)), (P.index = 0), (P.sibling = null), P;
        }
        function d(P, C, R) {
            return (
                (P.index = R),
                e
                    ? ((R = P.alternate),
                      R !== null ? ((R = R.index), R < C ? ((P.flags |= 2), C) : R) : ((P.flags |= 2), C))
                    : ((P.flags |= 1048576), C)
            );
        }
        function m(P) {
            return e && P.alternate === null && (P.flags |= 2), P;
        }
        function x(P, C, R, Y) {
            return C === null || C.tag !== 6
                ? ((C = Pu(R, P.mode, Y)), (C.return = P), C)
                : ((C = c(C, R)), (C.return = P), C);
        }
        function S(P, C, R, Y) {
            var me = R.type;
            return me === ee
                ? B(P, C, R.props.children, Y, R.key)
                : C !== null &&
                    (C.elementType === me ||
                        (typeof me == "object" && me !== null && me.$$typeof === fe && Yd(me) === C.type))
                  ? ((Y = c(C, R.props)), (Y.ref = no(P, C, R)), (Y.return = P), Y)
                  : ((Y = Ki(R.type, R.key, R.props, null, P.mode, Y)), (Y.ref = no(P, C, R)), (Y.return = P), Y);
        }
        function O(P, C, R, Y) {
            return C === null ||
                C.tag !== 4 ||
                C.stateNode.containerInfo !== R.containerInfo ||
                C.stateNode.implementation !== R.implementation
                ? ((C = Ru(R, P.mode, Y)), (C.return = P), C)
                : ((C = c(C, R.children || [])), (C.return = P), C);
        }
        function B(P, C, R, Y, me) {
            return C === null || C.tag !== 7
                ? ((C = Ar(R, P.mode, Y, me)), (C.return = P), C)
                : ((C = c(C, R)), (C.return = P), C);
        }
        function W(P, C, R) {
            if ((typeof C == "string" && C !== "") || typeof C == "number")
                return (C = Pu("" + C, P.mode, R)), (C.return = P), C;
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case H:
                        return (
                            (R = Ki(C.type, C.key, C.props, null, P.mode, R)),
                            (R.ref = no(P, null, C)),
                            (R.return = P),
                            R
                        );
                    case se:
                        return (C = Ru(C, P.mode, R)), (C.return = P), C;
                    case fe:
                        var Y = C._init;
                        return W(P, Y(C._payload), R);
                }
                if ($r(C) || X(C)) return (C = Ar(C, P.mode, R, null)), (C.return = P), C;
                Si(P, C);
            }
            return null;
        }
        function U(P, C, R, Y) {
            var me = C !== null ? C.key : null;
            if ((typeof R == "string" && R !== "") || typeof R == "number")
                return me !== null ? null : x(P, C, "" + R, Y);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case H:
                        return R.key === me ? S(P, C, R, Y) : null;
                    case se:
                        return R.key === me ? O(P, C, R, Y) : null;
                    case fe:
                        return (me = R._init), U(P, C, me(R._payload), Y);
                }
                if ($r(R) || X(R)) return me !== null ? null : B(P, C, R, Y, null);
                Si(P, R);
            }
            return null;
        }
        function ie(P, C, R, Y, me) {
            if ((typeof Y == "string" && Y !== "") || typeof Y == "number")
                return (P = P.get(R) || null), x(C, P, "" + Y, me);
            if (typeof Y == "object" && Y !== null) {
                switch (Y.$$typeof) {
                    case H:
                        return (P = P.get(Y.key === null ? R : Y.key) || null), S(C, P, Y, me);
                    case se:
                        return (P = P.get(Y.key === null ? R : Y.key) || null), O(C, P, Y, me);
                    case fe:
                        var ge = Y._init;
                        return ie(P, C, R, ge(Y._payload), me);
                }
                if ($r(Y) || X(Y)) return (P = P.get(R) || null), B(C, P, Y, me, null);
                Si(C, Y);
            }
            return null;
        }
        function ce(P, C, R, Y) {
            for (var me = null, ge = null, ye = C, Ce = (C = 0), mt = null; ye !== null && Ce < R.length; Ce++) {
                ye.index > Ce ? ((mt = ye), (ye = null)) : (mt = ye.sibling);
                var Ve = U(P, ye, R[Ce], Y);
                if (Ve === null) {
                    ye === null && (ye = mt);
                    break;
                }
                e && ye && Ve.alternate === null && t(P, ye),
                    (C = d(Ve, C, Ce)),
                    ge === null ? (me = Ve) : (ge.sibling = Ve),
                    (ge = Ve),
                    (ye = mt);
            }
            if (Ce === R.length) return o(P, ye), Ye && Er(P, Ce), me;
            if (ye === null) {
                for (; Ce < R.length; Ce++)
                    (ye = W(P, R[Ce], Y)),
                        ye !== null && ((C = d(ye, C, Ce)), ge === null ? (me = ye) : (ge.sibling = ye), (ge = ye));
                return Ye && Er(P, Ce), me;
            }
            for (ye = a(P, ye); Ce < R.length; Ce++)
                (mt = ie(ye, P, Ce, R[Ce], Y)),
                    mt !== null &&
                        (e && mt.alternate !== null && ye.delete(mt.key === null ? Ce : mt.key),
                        (C = d(mt, C, Ce)),
                        ge === null ? (me = mt) : (ge.sibling = mt),
                        (ge = mt));
            return (
                e &&
                    ye.forEach(function (lr) {
                        return t(P, lr);
                    }),
                Ye && Er(P, Ce),
                me
            );
        }
        function de(P, C, R, Y) {
            var me = X(R);
            if (typeof me != "function") throw Error(s(150));
            if (((R = me.call(R)), R == null)) throw Error(s(151));
            for (
                var ge = (me = null), ye = C, Ce = (C = 0), mt = null, Ve = R.next();
                ye !== null && !Ve.done;
                Ce++, Ve = R.next()
            ) {
                ye.index > Ce ? ((mt = ye), (ye = null)) : (mt = ye.sibling);
                var lr = U(P, ye, Ve.value, Y);
                if (lr === null) {
                    ye === null && (ye = mt);
                    break;
                }
                e && ye && lr.alternate === null && t(P, ye),
                    (C = d(lr, C, Ce)),
                    ge === null ? (me = lr) : (ge.sibling = lr),
                    (ge = lr),
                    (ye = mt);
            }
            if (Ve.done) return o(P, ye), Ye && Er(P, Ce), me;
            if (ye === null) {
                for (; !Ve.done; Ce++, Ve = R.next())
                    (Ve = W(P, Ve.value, Y)),
                        Ve !== null && ((C = d(Ve, C, Ce)), ge === null ? (me = Ve) : (ge.sibling = Ve), (ge = Ve));
                return Ye && Er(P, Ce), me;
            }
            for (ye = a(P, ye); !Ve.done; Ce++, Ve = R.next())
                (Ve = ie(ye, P, Ce, Ve.value, Y)),
                    Ve !== null &&
                        (e && Ve.alternate !== null && ye.delete(Ve.key === null ? Ce : Ve.key),
                        (C = d(Ve, C, Ce)),
                        ge === null ? (me = Ve) : (ge.sibling = Ve),
                        (ge = Ve));
            return (
                e &&
                    ye.forEach(function (vv) {
                        return t(P, vv);
                    }),
                Ye && Er(P, Ce),
                me
            );
        }
        function rt(P, C, R, Y) {
            if (
                (typeof R == "object" && R !== null && R.type === ee && R.key === null && (R = R.props.children),
                typeof R == "object" && R !== null)
            ) {
                switch (R.$$typeof) {
                    case H:
                        e: {
                            for (var me = R.key, ge = C; ge !== null; ) {
                                if (ge.key === me) {
                                    if (((me = R.type), me === ee)) {
                                        if (ge.tag === 7) {
                                            o(P, ge.sibling), (C = c(ge, R.props.children)), (C.return = P), (P = C);
                                            break e;
                                        }
                                    } else if (
                                        ge.elementType === me ||
                                        (typeof me == "object" &&
                                            me !== null &&
                                            me.$$typeof === fe &&
                                            Yd(me) === ge.type)
                                    ) {
                                        o(P, ge.sibling),
                                            (C = c(ge, R.props)),
                                            (C.ref = no(P, ge, R)),
                                            (C.return = P),
                                            (P = C);
                                        break e;
                                    }
                                    o(P, ge);
                                    break;
                                } else t(P, ge);
                                ge = ge.sibling;
                            }
                            R.type === ee
                                ? ((C = Ar(R.props.children, P.mode, Y, R.key)), (C.return = P), (P = C))
                                : ((Y = Ki(R.type, R.key, R.props, null, P.mode, Y)),
                                  (Y.ref = no(P, C, R)),
                                  (Y.return = P),
                                  (P = Y));
                        }
                        return m(P);
                    case se:
                        e: {
                            for (ge = R.key; C !== null; ) {
                                if (C.key === ge)
                                    if (
                                        C.tag === 4 &&
                                        C.stateNode.containerInfo === R.containerInfo &&
                                        C.stateNode.implementation === R.implementation
                                    ) {
                                        o(P, C.sibling), (C = c(C, R.children || [])), (C.return = P), (P = C);
                                        break e;
                                    } else {
                                        o(P, C);
                                        break;
                                    }
                                else t(P, C);
                                C = C.sibling;
                            }
                            (C = Ru(R, P.mode, Y)), (C.return = P), (P = C);
                        }
                        return m(P);
                    case fe:
                        return (ge = R._init), rt(P, C, ge(R._payload), Y);
                }
                if ($r(R)) return ce(P, C, R, Y);
                if (X(R)) return de(P, C, R, Y);
                Si(P, R);
            }
            return (typeof R == "string" && R !== "") || typeof R == "number"
                ? ((R = "" + R),
                  C !== null && C.tag === 6
                      ? (o(P, C.sibling), (C = c(C, R)), (C.return = P), (P = C))
                      : (o(P, C), (C = Pu(R, P.mode, Y)), (C.return = P), (P = C)),
                  m(P))
                : o(P, C);
        }
        return rt;
    }
    var ls = Gd(!0),
        qd = Gd(!1),
        Ei = qn(null),
        Ci = null,
        us = null,
        zl = null;
    function Vl() {
        zl = us = Ci = null;
    }
    function Ul(e) {
        var t = Ei.current;
        Ke(Ei), (e._currentValue = t);
    }
    function $l(e, t, o) {
        for (; e !== null; ) {
            var a = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
                    : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
                e === o)
            )
                break;
            e = e.return;
        }
    }
    function cs(e, t) {
        (Ci = e),
            (zl = us = null),
            (e = e.dependencies),
            e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (At = !0), (e.firstContext = null));
    }
    function Ht(e) {
        var t = e._currentValue;
        if (zl !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), us === null)) {
                if (Ci === null) throw Error(s(308));
                (us = e), (Ci.dependencies = { lanes: 0, firstContext: e });
            } else us = us.next = e;
        return t;
    }
    var Cr = null;
    function Bl(e) {
        Cr === null ? (Cr = [e]) : Cr.push(e);
    }
    function Xd(e, t, o, a) {
        var c = t.interleaved;
        return c === null ? ((o.next = o), Bl(t)) : ((o.next = c.next), (c.next = o)), (t.interleaved = o), On(e, a);
    }
    function On(e, t) {
        e.lanes |= t;
        var o = e.alternate;
        for (o !== null && (o.lanes |= t), o = e, e = e.return; e !== null; )
            (e.childLanes |= t), (o = e.alternate), o !== null && (o.childLanes |= t), (o = e), (e = e.return);
        return o.tag === 3 ? o.stateNode : null;
    }
    var er = !1;
    function Wl(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
        };
    }
    function Jd(e, t) {
        (e = e.updateQueue),
            t.updateQueue === e &&
                (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects,
                });
    }
    function Ln(e, t) {
        return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function tr(e, t, o) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (((a = a.shared), (ze & 2) !== 0)) {
            var c = a.pending;
            return c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)), (a.pending = t), On(e, o);
        }
        return (
            (c = a.interleaved),
            c === null ? ((t.next = t), Bl(a)) : ((t.next = c.next), (c.next = t)),
            (a.interleaved = t),
            On(e, o)
        );
    }
    function bi(e, t, o) {
        if (((t = t.updateQueue), t !== null && ((t = t.shared), (o & 4194240) !== 0))) {
            var a = t.lanes;
            (a &= e.pendingLanes), (o |= a), (t.lanes = o), sl(e, o);
        }
    }
    function ef(e, t) {
        var o = e.updateQueue,
            a = e.alternate;
        if (a !== null && ((a = a.updateQueue), o === a)) {
            var c = null,
                d = null;
            if (((o = o.firstBaseUpdate), o !== null)) {
                do {
                    var m = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null,
                    };
                    d === null ? (c = d = m) : (d = d.next = m), (o = o.next);
                } while (o !== null);
                d === null ? (c = d = t) : (d = d.next = t);
            } else c = d = t;
            (o = {
                baseState: a.baseState,
                firstBaseUpdate: c,
                lastBaseUpdate: d,
                shared: a.shared,
                effects: a.effects,
            }),
                (e.updateQueue = o);
            return;
        }
        (e = o.lastBaseUpdate), e === null ? (o.firstBaseUpdate = t) : (e.next = t), (o.lastBaseUpdate = t);
    }
    function Ti(e, t, o, a) {
        var c = e.updateQueue;
        er = !1;
        var d = c.firstBaseUpdate,
            m = c.lastBaseUpdate,
            x = c.shared.pending;
        if (x !== null) {
            c.shared.pending = null;
            var S = x,
                O = S.next;
            (S.next = null), m === null ? (d = O) : (m.next = O), (m = S);
            var B = e.alternate;
            B !== null &&
                ((B = B.updateQueue),
                (x = B.lastBaseUpdate),
                x !== m && (x === null ? (B.firstBaseUpdate = O) : (x.next = O), (B.lastBaseUpdate = S)));
        }
        if (d !== null) {
            var W = c.baseState;
            (m = 0), (B = O = S = null), (x = d);
            do {
                var U = x.lane,
                    ie = x.eventTime;
                if ((a & U) === U) {
                    B !== null &&
                        (B = B.next =
                            {
                                eventTime: ie,
                                lane: 0,
                                tag: x.tag,
                                payload: x.payload,
                                callback: x.callback,
                                next: null,
                            });
                    e: {
                        var ce = e,
                            de = x;
                        switch (((U = t), (ie = o), de.tag)) {
                            case 1:
                                if (((ce = de.payload), typeof ce == "function")) {
                                    W = ce.call(ie, W, U);
                                    break e;
                                }
                                W = ce;
                                break e;
                            case 3:
                                ce.flags = (ce.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((ce = de.payload),
                                    (U = typeof ce == "function" ? ce.call(ie, W, U) : ce),
                                    U == null)
                                )
                                    break e;
                                W = q({}, W, U);
                                break e;
                            case 2:
                                er = !0;
                        }
                    }
                    x.callback !== null &&
                        x.lane !== 0 &&
                        ((e.flags |= 64), (U = c.effects), U === null ? (c.effects = [x]) : U.push(x));
                } else
                    (ie = { eventTime: ie, lane: U, tag: x.tag, payload: x.payload, callback: x.callback, next: null }),
                        B === null ? ((O = B = ie), (S = W)) : (B = B.next = ie),
                        (m |= U);
                if (((x = x.next), x === null)) {
                    if (((x = c.shared.pending), x === null)) break;
                    (U = x), (x = U.next), (U.next = null), (c.lastBaseUpdate = U), (c.shared.pending = null);
                }
            } while (!0);
            if (
                (B === null && (S = W),
                (c.baseState = S),
                (c.firstBaseUpdate = O),
                (c.lastBaseUpdate = B),
                (t = c.shared.interleaved),
                t !== null)
            ) {
                c = t;
                do (m |= c.lane), (c = c.next);
                while (c !== t);
            } else d === null && (c.shared.lanes = 0);
            (Nr |= m), (e.lanes = m), (e.memoizedState = W);
        }
    }
    function tf(e, t, o) {
        if (((e = t.effects), (t.effects = null), e !== null))
            for (t = 0; t < e.length; t++) {
                var a = e[t],
                    c = a.callback;
                if (c !== null) {
                    if (((a.callback = null), (a = o), typeof c != "function")) throw Error(s(191, c));
                    c.call(a);
                }
            }
    }
    var ro = {},
        gn = qn(ro),
        so = qn(ro),
        oo = qn(ro);
    function br(e) {
        if (e === ro) throw Error(s(174));
        return e;
    }
    function Zl(e, t) {
        switch ((Ze(oo, t), Ze(so, e), Ze(gn, ro), (e = t.nodeType), e)) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Q(null, "");
                break;
            default:
                (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Q(t, e));
        }
        Ke(gn), Ze(gn, t);
    }
    function ds() {
        Ke(gn), Ke(so), Ke(oo);
    }
    function nf(e) {
        br(oo.current);
        var t = br(gn.current),
            o = Q(t, e.type);
        t !== o && (Ze(so, e), Ze(gn, o));
    }
    function Hl(e) {
        so.current === e && (Ke(gn), Ke(so));
    }
    var qe = qn(0);
    function Ni(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var o = t.memoizedState;
                if (o !== null && ((o = o.dehydrated), o === null || o.data === "$?" || o.data === "$!")) return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
                (t.child.return = t), (t = t.child);
                continue;
            }
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
    }
    var Kl = [];
    function Ql() {
        for (var e = 0; e < Kl.length; e++) Kl[e]._workInProgressVersionPrimary = null;
        Kl.length = 0;
    }
    var Pi = V.ReactCurrentDispatcher,
        Yl = V.ReactCurrentBatchConfig,
        Tr = 0,
        Xe = null,
        at = null,
        ft = null,
        Ri = !1,
        io = !1,
        ao = 0,
        Vy = 0;
    function xt() {
        throw Error(s(321));
    }
    function Gl(e, t) {
        if (t === null) return !1;
        for (var o = 0; o < t.length && o < e.length; o++) if (!Xt(e[o], t[o])) return !1;
        return !0;
    }
    function ql(e, t, o, a, c, d) {
        if (
            ((Tr = d),
            (Xe = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Pi.current = e === null || e.memoizedState === null ? Wy : Zy),
            (e = o(a, c)),
            io)
        ) {
            d = 0;
            do {
                if (((io = !1), (ao = 0), 25 <= d)) throw Error(s(301));
                (d += 1), (ft = at = null), (t.updateQueue = null), (Pi.current = Hy), (e = o(a, c));
            } while (io);
        }
        if (((Pi.current = Oi), (t = at !== null && at.next !== null), (Tr = 0), (ft = at = Xe = null), (Ri = !1), t))
            throw Error(s(300));
        return e;
    }
    function Xl() {
        var e = ao !== 0;
        return (ao = 0), e;
    }
    function yn() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return ft === null ? (Xe.memoizedState = ft = e) : (ft = ft.next = e), ft;
    }
    function Kt() {
        if (at === null) {
            var e = Xe.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = at.next;
        var t = ft === null ? Xe.memoizedState : ft.next;
        if (t !== null) (ft = t), (at = e);
        else {
            if (e === null) throw Error(s(310));
            (at = e),
                (e = {
                    memoizedState: at.memoizedState,
                    baseState: at.baseState,
                    baseQueue: at.baseQueue,
                    queue: at.queue,
                    next: null,
                }),
                ft === null ? (Xe.memoizedState = ft = e) : (ft = ft.next = e);
        }
        return ft;
    }
    function lo(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Jl(e) {
        var t = Kt(),
            o = t.queue;
        if (o === null) throw Error(s(311));
        o.lastRenderedReducer = e;
        var a = at,
            c = a.baseQueue,
            d = o.pending;
        if (d !== null) {
            if (c !== null) {
                var m = c.next;
                (c.next = d.next), (d.next = m);
            }
            (a.baseQueue = c = d), (o.pending = null);
        }
        if (c !== null) {
            (d = c.next), (a = a.baseState);
            var x = (m = null),
                S = null,
                O = d;
            do {
                var B = O.lane;
                if ((Tr & B) === B)
                    S !== null &&
                        (S = S.next =
                            {
                                lane: 0,
                                action: O.action,
                                hasEagerState: O.hasEagerState,
                                eagerState: O.eagerState,
                                next: null,
                            }),
                        (a = O.hasEagerState ? O.eagerState : e(a, O.action));
                else {
                    var W = {
                        lane: B,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null,
                    };
                    S === null ? ((x = S = W), (m = a)) : (S = S.next = W), (Xe.lanes |= B), (Nr |= B);
                }
                O = O.next;
            } while (O !== null && O !== d);
            S === null ? (m = a) : (S.next = x),
                Xt(a, t.memoizedState) || (At = !0),
                (t.memoizedState = a),
                (t.baseState = m),
                (t.baseQueue = S),
                (o.lastRenderedState = a);
        }
        if (((e = o.interleaved), e !== null)) {
            c = e;
            do (d = c.lane), (Xe.lanes |= d), (Nr |= d), (c = c.next);
            while (c !== e);
        } else c === null && (o.lanes = 0);
        return [t.memoizedState, o.dispatch];
    }
    function eu(e) {
        var t = Kt(),
            o = t.queue;
        if (o === null) throw Error(s(311));
        o.lastRenderedReducer = e;
        var a = o.dispatch,
            c = o.pending,
            d = t.memoizedState;
        if (c !== null) {
            o.pending = null;
            var m = (c = c.next);
            do (d = e(d, m.action)), (m = m.next);
            while (m !== c);
            Xt(d, t.memoizedState) || (At = !0),
                (t.memoizedState = d),
                t.baseQueue === null && (t.baseState = d),
                (o.lastRenderedState = d);
        }
        return [d, a];
    }
    function rf() {}
    function sf(e, t) {
        var o = Xe,
            a = Kt(),
            c = t(),
            d = !Xt(a.memoizedState, c);
        if (
            (d && ((a.memoizedState = c), (At = !0)),
            (a = a.queue),
            tu(lf.bind(null, o, a, e), [e]),
            a.getSnapshot !== t || d || (ft !== null && ft.memoizedState.tag & 1))
        ) {
            if (((o.flags |= 2048), uo(9, af.bind(null, o, a, c, t), void 0, null), pt === null)) throw Error(s(349));
            (Tr & 30) !== 0 || of(o, t, c);
        }
        return c;
    }
    function of(e, t, o) {
        (e.flags |= 16384),
            (e = { getSnapshot: t, value: o }),
            (t = Xe.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }), (Xe.updateQueue = t), (t.stores = [e]))
                : ((o = t.stores), o === null ? (t.stores = [e]) : o.push(e));
    }
    function af(e, t, o, a) {
        (t.value = o), (t.getSnapshot = a), uf(t) && cf(e);
    }
    function lf(e, t, o) {
        return o(function () {
            uf(t) && cf(e);
        });
    }
    function uf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var o = t();
            return !Xt(e, o);
        } catch {
            return !0;
        }
    }
    function cf(e) {
        var t = On(e, 1);
        t !== null && rn(t, e, 1, -1);
    }
    function df(e) {
        var t = yn();
        return (
            typeof e == "function" && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: lo,
                lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = By.bind(null, Xe, e)),
            [t.memoizedState, e]
        );
    }
    function uo(e, t, o, a) {
        return (
            (e = { tag: e, create: t, destroy: o, deps: a, next: null }),
            (t = Xe.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }), (Xe.updateQueue = t), (t.lastEffect = e.next = e))
                : ((o = t.lastEffect),
                  o === null
                      ? (t.lastEffect = e.next = e)
                      : ((a = o.next), (o.next = e), (e.next = a), (t.lastEffect = e))),
            e
        );
    }
    function ff() {
        return Kt().memoizedState;
    }
    function ji(e, t, o, a) {
        var c = yn();
        (Xe.flags |= e), (c.memoizedState = uo(1 | t, o, void 0, a === void 0 ? null : a));
    }
    function Ai(e, t, o, a) {
        var c = Kt();
        a = a === void 0 ? null : a;
        var d = void 0;
        if (at !== null) {
            var m = at.memoizedState;
            if (((d = m.destroy), a !== null && Gl(a, m.deps))) {
                c.memoizedState = uo(t, o, d, a);
                return;
            }
        }
        (Xe.flags |= e), (c.memoizedState = uo(1 | t, o, d, a));
    }
    function pf(e, t) {
        return ji(8390656, 8, e, t);
    }
    function tu(e, t) {
        return Ai(2048, 8, e, t);
    }
    function mf(e, t) {
        return Ai(4, 2, e, t);
    }
    function hf(e, t) {
        return Ai(4, 4, e, t);
    }
    function gf(e, t) {
        if (typeof t == "function")
            return (
                (e = e()),
                t(e),
                function () {
                    t(null);
                }
            );
        if (t != null)
            return (
                (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
            );
    }
    function yf(e, t, o) {
        return (o = o != null ? o.concat([e]) : null), Ai(4, 4, gf.bind(null, t, e), o);
    }
    function nu() {}
    function vf(e, t) {
        var o = Kt();
        t = t === void 0 ? null : t;
        var a = o.memoizedState;
        return a !== null && t !== null && Gl(t, a[1]) ? a[0] : ((o.memoizedState = [e, t]), e);
    }
    function xf(e, t) {
        var o = Kt();
        t = t === void 0 ? null : t;
        var a = o.memoizedState;
        return a !== null && t !== null && Gl(t, a[1]) ? a[0] : ((e = e()), (o.memoizedState = [e, t]), e);
    }
    function wf(e, t, o) {
        return (Tr & 21) === 0
            ? (e.baseState && ((e.baseState = !1), (At = !0)), (e.memoizedState = o))
            : (Xt(o, t) || ((o = Yc()), (Xe.lanes |= o), (Nr |= o), (e.baseState = !0)), t);
    }
    function Uy(e, t) {
        var o = Be;
        (Be = o !== 0 && 4 > o ? o : 4), e(!0);
        var a = Yl.transition;
        Yl.transition = {};
        try {
            e(!1), t();
        } finally {
            (Be = o), (Yl.transition = a);
        }
    }
    function _f() {
        return Kt().memoizedState;
    }
    function $y(e, t, o) {
        var a = or(e);
        if (((o = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null }), kf(e))) Sf(t, o);
        else if (((o = Xd(e, t, o, a)), o !== null)) {
            var c = Ct();
            rn(o, e, a, c), Ef(o, t, a);
        }
    }
    function By(e, t, o) {
        var a = or(e),
            c = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null };
        if (kf(e)) Sf(t, c);
        else {
            var d = e.alternate;
            if (e.lanes === 0 && (d === null || d.lanes === 0) && ((d = t.lastRenderedReducer), d !== null))
                try {
                    var m = t.lastRenderedState,
                        x = d(m, o);
                    if (((c.hasEagerState = !0), (c.eagerState = x), Xt(x, m))) {
                        var S = t.interleaved;
                        S === null ? ((c.next = c), Bl(t)) : ((c.next = S.next), (S.next = c)), (t.interleaved = c);
                        return;
                    }
                } catch {}
            (o = Xd(e, t, c, a)), o !== null && ((c = Ct()), rn(o, e, a, c), Ef(o, t, a));
        }
    }
    function kf(e) {
        var t = e.alternate;
        return e === Xe || (t !== null && t === Xe);
    }
    function Sf(e, t) {
        io = Ri = !0;
        var o = e.pending;
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (e.pending = t);
    }
    function Ef(e, t, o) {
        if ((o & 4194240) !== 0) {
            var a = t.lanes;
            (a &= e.pendingLanes), (o |= a), (t.lanes = o), sl(e, o);
        }
    }
    var Oi = {
            readContext: Ht,
            useCallback: xt,
            useContext: xt,
            useEffect: xt,
            useImperativeHandle: xt,
            useInsertionEffect: xt,
            useLayoutEffect: xt,
            useMemo: xt,
            useReducer: xt,
            useRef: xt,
            useState: xt,
            useDebugValue: xt,
            useDeferredValue: xt,
            useTransition: xt,
            useMutableSource: xt,
            useSyncExternalStore: xt,
            useId: xt,
            unstable_isNewReconciler: !1,
        },
        Wy = {
            readContext: Ht,
            useCallback: function (e, t) {
                return (yn().memoizedState = [e, t === void 0 ? null : t]), e;
            },
            useContext: Ht,
            useEffect: pf,
            useImperativeHandle: function (e, t, o) {
                return (o = o != null ? o.concat([e]) : null), ji(4194308, 4, gf.bind(null, t, e), o);
            },
            useLayoutEffect: function (e, t) {
                return ji(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                return ji(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var o = yn();
                return (t = t === void 0 ? null : t), (e = e()), (o.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, o) {
                var a = yn();
                return (
                    (t = o !== void 0 ? o(t) : t),
                    (a.memoizedState = a.baseState = t),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }),
                    (a.queue = e),
                    (e = e.dispatch = $y.bind(null, Xe, e)),
                    [a.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = yn();
                return (e = { current: e }), (t.memoizedState = e);
            },
            useState: df,
            useDebugValue: nu,
            useDeferredValue: function (e) {
                return (yn().memoizedState = e);
            },
            useTransition: function () {
                var e = df(!1),
                    t = e[0];
                return (e = Uy.bind(null, e[1])), (yn().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, o) {
                var a = Xe,
                    c = yn();
                if (Ye) {
                    if (o === void 0) throw Error(s(407));
                    o = o();
                } else {
                    if (((o = t()), pt === null)) throw Error(s(349));
                    (Tr & 30) !== 0 || of(a, t, o);
                }
                c.memoizedState = o;
                var d = { value: o, getSnapshot: t };
                return (
                    (c.queue = d),
                    pf(lf.bind(null, a, d, e), [e]),
                    (a.flags |= 2048),
                    uo(9, af.bind(null, a, d, o, t), void 0, null),
                    o
                );
            },
            useId: function () {
                var e = yn(),
                    t = pt.identifierPrefix;
                if (Ye) {
                    var o = An,
                        a = jn;
                    (o = (a & ~(1 << (32 - qt(a) - 1))).toString(32) + o),
                        (t = ":" + t + "R" + o),
                        (o = ao++),
                        0 < o && (t += "H" + o.toString(32)),
                        (t += ":");
                } else (o = Vy++), (t = ":" + t + "r" + o.toString(32) + ":");
                return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
        },
        Zy = {
            readContext: Ht,
            useCallback: vf,
            useContext: Ht,
            useEffect: tu,
            useImperativeHandle: yf,
            useInsertionEffect: mf,
            useLayoutEffect: hf,
            useMemo: xf,
            useReducer: Jl,
            useRef: ff,
            useState: function () {
                return Jl(lo);
            },
            useDebugValue: nu,
            useDeferredValue: function (e) {
                var t = Kt();
                return wf(t, at.memoizedState, e);
            },
            useTransition: function () {
                var e = Jl(lo)[0],
                    t = Kt().memoizedState;
                return [e, t];
            },
            useMutableSource: rf,
            useSyncExternalStore: sf,
            useId: _f,
            unstable_isNewReconciler: !1,
        },
        Hy = {
            readContext: Ht,
            useCallback: vf,
            useContext: Ht,
            useEffect: tu,
            useImperativeHandle: yf,
            useInsertionEffect: mf,
            useLayoutEffect: hf,
            useMemo: xf,
            useReducer: eu,
            useRef: ff,
            useState: function () {
                return eu(lo);
            },
            useDebugValue: nu,
            useDeferredValue: function (e) {
                var t = Kt();
                return at === null ? (t.memoizedState = e) : wf(t, at.memoizedState, e);
            },
            useTransition: function () {
                var e = eu(lo)[0],
                    t = Kt().memoizedState;
                return [e, t];
            },
            useMutableSource: rf,
            useSyncExternalStore: sf,
            useId: _f,
            unstable_isNewReconciler: !1,
        };
    function en(e, t) {
        if (e && e.defaultProps) {
            (t = q({}, t)), (e = e.defaultProps);
            for (var o in e) t[o] === void 0 && (t[o] = e[o]);
            return t;
        }
        return t;
    }
    function ru(e, t, o, a) {
        (t = e.memoizedState),
            (o = o(a, t)),
            (o = o == null ? t : q({}, t, o)),
            (e.memoizedState = o),
            e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    var Li = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? wr(e) === e : !1;
        },
        enqueueSetState: function (e, t, o) {
            e = e._reactInternals;
            var a = Ct(),
                c = or(e),
                d = Ln(a, c);
            (d.payload = t),
                o != null && (d.callback = o),
                (t = tr(e, d, c)),
                t !== null && (rn(t, e, c, a), bi(t, e, c));
        },
        enqueueReplaceState: function (e, t, o) {
            e = e._reactInternals;
            var a = Ct(),
                c = or(e),
                d = Ln(a, c);
            (d.tag = 1),
                (d.payload = t),
                o != null && (d.callback = o),
                (t = tr(e, d, c)),
                t !== null && (rn(t, e, c, a), bi(t, e, c));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var o = Ct(),
                a = or(e),
                c = Ln(o, a);
            (c.tag = 2), t != null && (c.callback = t), (t = tr(e, c, a)), t !== null && (rn(t, e, a, o), bi(t, e, a));
        },
    };
    function Cf(e, t, o, a, c, d, m) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(a, d, m)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !Ys(o, a) || !Ys(c, d)
                  : !0
        );
    }
    function bf(e, t, o) {
        var a = !1,
            c = Xn,
            d = t.contextType;
        return (
            typeof d == "object" && d !== null
                ? (d = Ht(d))
                : ((c = jt(t) ? kr : vt.current), (a = t.contextTypes), (d = (a = a != null) ? ss(e, c) : Xn)),
            (t = new t(o, d)),
            (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
            (t.updater = Li),
            (e.stateNode = t),
            (t._reactInternals = e),
            a &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = c),
                (e.__reactInternalMemoizedMaskedChildContext = d)),
            t
        );
    }
    function Tf(e, t, o, a) {
        (e = t.state),
            typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, a),
            typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(o, a),
            t.state !== e && Li.enqueueReplaceState(t, t.state, null);
    }
    function su(e, t, o, a) {
        var c = e.stateNode;
        (c.props = o), (c.state = e.memoizedState), (c.refs = {}), Wl(e);
        var d = t.contextType;
        typeof d == "object" && d !== null
            ? (c.context = Ht(d))
            : ((d = jt(t) ? kr : vt.current), (c.context = ss(e, d))),
            (c.state = e.memoizedState),
            (d = t.getDerivedStateFromProps),
            typeof d == "function" && (ru(e, t, d, o), (c.state = e.memoizedState)),
            typeof t.getDerivedStateFromProps == "function" ||
                typeof c.getSnapshotBeforeUpdate == "function" ||
                (typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function") ||
                ((t = c.state),
                typeof c.componentWillMount == "function" && c.componentWillMount(),
                typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
                t !== c.state && Li.enqueueReplaceState(c, c.state, null),
                Ti(e, o, c, a),
                (c.state = e.memoizedState)),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function fs(e, t) {
        try {
            var o = "",
                a = t;
            do (o += Oe(a)), (a = a.return);
            while (a);
            var c = o;
        } catch (d) {
            c =
                `
Error generating stack: ` +
                d.message +
                `
` +
                d.stack;
        }
        return { value: e, source: t, stack: c, digest: null };
    }
    function ou(e, t, o) {
        return { value: e, source: null, stack: o ?? null, digest: t ?? null };
    }
    function iu(e, t) {
        try {
            console.error(t.value);
        } catch (o) {
            setTimeout(function () {
                throw o;
            });
        }
    }
    var Ky = typeof WeakMap == "function" ? WeakMap : Map;
    function Nf(e, t, o) {
        (o = Ln(-1, o)), (o.tag = 3), (o.payload = { element: null });
        var a = t.value;
        return (
            (o.callback = function () {
                Ui || ((Ui = !0), (_u = a)), iu(e, t);
            }),
            o
        );
    }
    function Pf(e, t, o) {
        (o = Ln(-1, o)), (o.tag = 3);
        var a = e.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var c = t.value;
            (o.payload = function () {
                return a(c);
            }),
                (o.callback = function () {
                    iu(e, t);
                });
        }
        var d = e.stateNode;
        return (
            d !== null &&
                typeof d.componentDidCatch == "function" &&
                (o.callback = function () {
                    iu(e, t), typeof a != "function" && (rr === null ? (rr = new Set([this])) : rr.add(this));
                    var m = t.stack;
                    this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
                }),
            o
        );
    }
    function Rf(e, t, o) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new Ky();
            var c = new Set();
            a.set(t, c);
        } else (c = a.get(t)), c === void 0 && ((c = new Set()), a.set(t, c));
        c.has(o) || (c.add(o), (e = av.bind(null, e, t, o)), t.then(e, e));
    }
    function jf(e) {
        do {
            var t;
            if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t))
                return e;
            e = e.return;
        } while (e !== null);
        return null;
    }
    function Af(e, t, o, a, c) {
        return (e.mode & 1) === 0
            ? (e === t
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (o.flags |= 131072),
                    (o.flags &= -52805),
                    o.tag === 1 && (o.alternate === null ? (o.tag = 17) : ((t = Ln(-1, 1)), (t.tag = 2), tr(o, t, 1))),
                    (o.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = c), e);
    }
    var Qy = V.ReactCurrentOwner,
        At = !1;
    function Et(e, t, o, a) {
        t.child = e === null ? qd(t, null, o, a) : ls(t, e.child, o, a);
    }
    function Of(e, t, o, a, c) {
        o = o.render;
        var d = t.ref;
        return (
            cs(t, c),
            (a = ql(e, t, o, a, d, c)),
            (o = Xl()),
            e !== null && !At
                ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~c), Mn(e, t, c))
                : (Ye && o && Ll(t), (t.flags |= 1), Et(e, t, a, c), t.child)
        );
    }
    function Lf(e, t, o, a, c) {
        if (e === null) {
            var d = o.type;
            return typeof d == "function" &&
                !Nu(d) &&
                d.defaultProps === void 0 &&
                o.compare === null &&
                o.defaultProps === void 0
                ? ((t.tag = 15), (t.type = d), Mf(e, t, d, a, c))
                : ((e = Ki(o.type, null, a, t, t.mode, c)), (e.ref = t.ref), (e.return = t), (t.child = e));
        }
        if (((d = e.child), (e.lanes & c) === 0)) {
            var m = d.memoizedProps;
            if (((o = o.compare), (o = o !== null ? o : Ys), o(m, a) && e.ref === t.ref)) return Mn(e, t, c);
        }
        return (t.flags |= 1), (e = ar(d, a)), (e.ref = t.ref), (e.return = t), (t.child = e);
    }
    function Mf(e, t, o, a, c) {
        if (e !== null) {
            var d = e.memoizedProps;
            if (Ys(d, a) && e.ref === t.ref)
                if (((At = !1), (t.pendingProps = a = d), (e.lanes & c) !== 0)) (e.flags & 131072) !== 0 && (At = !0);
                else return (t.lanes = e.lanes), Mn(e, t, c);
        }
        return au(e, t, o, a, c);
    }
    function Df(e, t, o) {
        var a = t.pendingProps,
            c = a.children,
            d = e !== null ? e.memoizedState : null;
        if (a.mode === "hidden")
            if ((t.mode & 1) === 0)
                (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Ze(ms, zt), (zt |= o);
            else {
                if ((o & 1073741824) === 0)
                    return (
                        (e = d !== null ? d.baseLanes | o : o),
                        (t.lanes = t.childLanes = 1073741824),
                        (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                        (t.updateQueue = null),
                        Ze(ms, zt),
                        (zt |= e),
                        null
                    );
                (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                    (a = d !== null ? d.baseLanes : o),
                    Ze(ms, zt),
                    (zt |= a);
            }
        else d !== null ? ((a = d.baseLanes | o), (t.memoizedState = null)) : (a = o), Ze(ms, zt), (zt |= a);
        return Et(e, t, c, o), t.child;
    }
    function If(e, t) {
        var o = t.ref;
        ((e === null && o !== null) || (e !== null && e.ref !== o)) && ((t.flags |= 512), (t.flags |= 2097152));
    }
    function au(e, t, o, a, c) {
        var d = jt(o) ? kr : vt.current;
        return (
            (d = ss(t, d)),
            cs(t, c),
            (o = ql(e, t, o, a, d, c)),
            (a = Xl()),
            e !== null && !At
                ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~c), Mn(e, t, c))
                : (Ye && a && Ll(t), (t.flags |= 1), Et(e, t, o, c), t.child)
        );
    }
    function Ff(e, t, o, a, c) {
        if (jt(o)) {
            var d = !0;
            vi(t);
        } else d = !1;
        if ((cs(t, c), t.stateNode === null)) Di(e, t), bf(t, o, a), su(t, o, a, c), (a = !0);
        else if (e === null) {
            var m = t.stateNode,
                x = t.memoizedProps;
            m.props = x;
            var S = m.context,
                O = o.contextType;
            typeof O == "object" && O !== null ? (O = Ht(O)) : ((O = jt(o) ? kr : vt.current), (O = ss(t, O)));
            var B = o.getDerivedStateFromProps,
                W = typeof B == "function" || typeof m.getSnapshotBeforeUpdate == "function";
            W ||
                (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof m.componentWillReceiveProps != "function") ||
                ((x !== a || S !== O) && Tf(t, m, a, O)),
                (er = !1);
            var U = t.memoizedState;
            (m.state = U),
                Ti(t, a, m, c),
                (S = t.memoizedState),
                x !== a || U !== S || Rt.current || er
                    ? (typeof B == "function" && (ru(t, o, B, a), (S = t.memoizedState)),
                      (x = er || Cf(t, o, x, a, U, S, O))
                          ? (W ||
                                (typeof m.UNSAFE_componentWillMount != "function" &&
                                    typeof m.componentWillMount != "function") ||
                                (typeof m.componentWillMount == "function" && m.componentWillMount(),
                                typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()),
                            typeof m.componentDidMount == "function" && (t.flags |= 4194308))
                          : (typeof m.componentDidMount == "function" && (t.flags |= 4194308),
                            (t.memoizedProps = a),
                            (t.memoizedState = S)),
                      (m.props = a),
                      (m.state = S),
                      (m.context = O),
                      (a = x))
                    : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), (a = !1));
        } else {
            (m = t.stateNode),
                Jd(e, t),
                (x = t.memoizedProps),
                (O = t.type === t.elementType ? x : en(t.type, x)),
                (m.props = O),
                (W = t.pendingProps),
                (U = m.context),
                (S = o.contextType),
                typeof S == "object" && S !== null ? (S = Ht(S)) : ((S = jt(o) ? kr : vt.current), (S = ss(t, S)));
            var ie = o.getDerivedStateFromProps;
            (B = typeof ie == "function" || typeof m.getSnapshotBeforeUpdate == "function") ||
                (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof m.componentWillReceiveProps != "function") ||
                ((x !== W || U !== S) && Tf(t, m, a, S)),
                (er = !1),
                (U = t.memoizedState),
                (m.state = U),
                Ti(t, a, m, c);
            var ce = t.memoizedState;
            x !== W || U !== ce || Rt.current || er
                ? (typeof ie == "function" && (ru(t, o, ie, a), (ce = t.memoizedState)),
                  (O = er || Cf(t, o, O, a, U, ce, S) || !1)
                      ? (B ||
                            (typeof m.UNSAFE_componentWillUpdate != "function" &&
                                typeof m.componentWillUpdate != "function") ||
                            (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(a, ce, S),
                            typeof m.UNSAFE_componentWillUpdate == "function" &&
                                m.UNSAFE_componentWillUpdate(a, ce, S)),
                        typeof m.componentDidUpdate == "function" && (t.flags |= 4),
                        typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                      : (typeof m.componentDidUpdate != "function" ||
                            (x === e.memoizedProps && U === e.memoizedState) ||
                            (t.flags |= 4),
                        typeof m.getSnapshotBeforeUpdate != "function" ||
                            (x === e.memoizedProps && U === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = a),
                        (t.memoizedState = ce)),
                  (m.props = a),
                  (m.state = ce),
                  (m.context = S),
                  (a = O))
                : (typeof m.componentDidUpdate != "function" ||
                      (x === e.memoizedProps && U === e.memoizedState) ||
                      (t.flags |= 4),
                  typeof m.getSnapshotBeforeUpdate != "function" ||
                      (x === e.memoizedProps && U === e.memoizedState) ||
                      (t.flags |= 1024),
                  (a = !1));
        }
        return lu(e, t, o, a, d, c);
    }
    function lu(e, t, o, a, c, d) {
        If(e, t);
        var m = (t.flags & 128) !== 0;
        if (!a && !m) return c && $d(t, o, !1), Mn(e, t, d);
        (a = t.stateNode), (Qy.current = t);
        var x = m && typeof o.getDerivedStateFromError != "function" ? null : a.render();
        return (
            (t.flags |= 1),
            e !== null && m ? ((t.child = ls(t, e.child, null, d)), (t.child = ls(t, null, x, d))) : Et(e, t, x, d),
            (t.memoizedState = a.state),
            c && $d(t, o, !0),
            t.child
        );
    }
    function zf(e) {
        var t = e.stateNode;
        t.pendingContext ? Vd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vd(e, t.context, !1),
            Zl(e, t.containerInfo);
    }
    function Vf(e, t, o, a, c) {
        return as(), Fl(c), (t.flags |= 256), Et(e, t, o, a), t.child;
    }
    var uu = { dehydrated: null, treeContext: null, retryLane: 0 };
    function cu(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Uf(e, t, o) {
        var a = t.pendingProps,
            c = qe.current,
            d = !1,
            m = (t.flags & 128) !== 0,
            x;
        if (
            ((x = m) || (x = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0),
            x ? ((d = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (c |= 1),
            Ze(qe, c & 1),
            e === null)
        )
            return (
                Il(t),
                (e = t.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? ((t.mode & 1) === 0 ? (t.lanes = 1) : e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824),
                      null)
                    : ((m = a.children),
                      (e = a.fallback),
                      d
                          ? ((a = t.mode),
                            (d = t.child),
                            (m = { mode: "hidden", children: m }),
                            (a & 1) === 0 && d !== null
                                ? ((d.childLanes = 0), (d.pendingProps = m))
                                : (d = Qi(m, a, 0, null)),
                            (e = Ar(e, a, o, null)),
                            (d.return = t),
                            (e.return = t),
                            (d.sibling = e),
                            (t.child = d),
                            (t.child.memoizedState = cu(o)),
                            (t.memoizedState = uu),
                            e)
                          : du(t, m))
            );
        if (((c = e.memoizedState), c !== null && ((x = c.dehydrated), x !== null))) return Yy(e, t, m, a, x, c, o);
        if (d) {
            (d = a.fallback), (m = t.mode), (c = e.child), (x = c.sibling);
            var S = { mode: "hidden", children: a.children };
            return (
                (m & 1) === 0 && t.child !== c
                    ? ((a = t.child), (a.childLanes = 0), (a.pendingProps = S), (t.deletions = null))
                    : ((a = ar(c, S)), (a.subtreeFlags = c.subtreeFlags & 14680064)),
                x !== null ? (d = ar(x, d)) : ((d = Ar(d, m, o, null)), (d.flags |= 2)),
                (d.return = t),
                (a.return = t),
                (a.sibling = d),
                (t.child = a),
                (a = d),
                (d = t.child),
                (m = e.child.memoizedState),
                (m = m === null ? cu(o) : { baseLanes: m.baseLanes | o, cachePool: null, transitions: m.transitions }),
                (d.memoizedState = m),
                (d.childLanes = e.childLanes & ~o),
                (t.memoizedState = uu),
                a
            );
        }
        return (
            (d = e.child),
            (e = d.sibling),
            (a = ar(d, { mode: "visible", children: a.children })),
            (t.mode & 1) === 0 && (a.lanes = o),
            (a.return = t),
            (a.sibling = null),
            e !== null && ((o = t.deletions), o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
        );
    }
    function du(e, t) {
        return (t = Qi({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
    }
    function Mi(e, t, o, a) {
        return (
            a !== null && Fl(a),
            ls(t, e.child, null, o),
            (e = du(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
        );
    }
    function Yy(e, t, o, a, c, d, m) {
        if (o)
            return t.flags & 256
                ? ((t.flags &= -257), (a = ou(Error(s(422)))), Mi(e, t, m, a))
                : t.memoizedState !== null
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((d = a.fallback),
                    (c = t.mode),
                    (a = Qi({ mode: "visible", children: a.children }, c, 0, null)),
                    (d = Ar(d, c, m, null)),
                    (d.flags |= 2),
                    (a.return = t),
                    (d.return = t),
                    (a.sibling = d),
                    (t.child = a),
                    (t.mode & 1) !== 0 && ls(t, e.child, null, m),
                    (t.child.memoizedState = cu(m)),
                    (t.memoizedState = uu),
                    d);
        if ((t.mode & 1) === 0) return Mi(e, t, m, null);
        if (c.data === "$!") {
            if (((a = c.nextSibling && c.nextSibling.dataset), a)) var x = a.dgst;
            return (a = x), (d = Error(s(419))), (a = ou(d, a, void 0)), Mi(e, t, m, a);
        }
        if (((x = (m & e.childLanes) !== 0), At || x)) {
            if (((a = pt), a !== null)) {
                switch (m & -m) {
                    case 4:
                        c = 2;
                        break;
                    case 16:
                        c = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        c = 32;
                        break;
                    case 536870912:
                        c = 268435456;
                        break;
                    default:
                        c = 0;
                }
                (c = (c & (a.suspendedLanes | m)) !== 0 ? 0 : c),
                    c !== 0 && c !== d.retryLane && ((d.retryLane = c), On(e, c), rn(a, e, c, -1));
            }
            return Tu(), (a = ou(Error(s(421)))), Mi(e, t, m, a);
        }
        return c.data === "$?"
            ? ((t.flags |= 128), (t.child = e.child), (t = lv.bind(null, e)), (c._reactRetry = t), null)
            : ((e = d.treeContext),
              (Ft = Gn(c.nextSibling)),
              (It = t),
              (Ye = !0),
              (Jt = null),
              e !== null &&
                  ((Wt[Zt++] = jn), (Wt[Zt++] = An), (Wt[Zt++] = Sr), (jn = e.id), (An = e.overflow), (Sr = t)),
              (t = du(t, a.children)),
              (t.flags |= 4096),
              t);
    }
    function $f(e, t, o) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t), $l(e.return, t, o);
    }
    function fu(e, t, o, a, c) {
        var d = e.memoizedState;
        d === null
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: a,
                  tail: o,
                  tailMode: c,
              })
            : ((d.isBackwards = t),
              (d.rendering = null),
              (d.renderingStartTime = 0),
              (d.last = a),
              (d.tail = o),
              (d.tailMode = c));
    }
    function Bf(e, t, o) {
        var a = t.pendingProps,
            c = a.revealOrder,
            d = a.tail;
        if ((Et(e, t, a.children, o), (a = qe.current), (a & 2) !== 0)) (a = (a & 1) | 2), (t.flags |= 128);
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && $f(e, o, t);
                    else if (e.tag === 19) $f(e, o, t);
                    else if (e.child !== null) {
                        (e.child.return = e), (e = e.child);
                        continue;
                    }
                    if (e === t) break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t) break e;
                        e = e.return;
                    }
                    (e.sibling.return = e.return), (e = e.sibling);
                }
            a &= 1;
        }
        if ((Ze(qe, a), (t.mode & 1) === 0)) t.memoizedState = null;
        else
            switch (c) {
                case "forwards":
                    for (o = t.child, c = null; o !== null; )
                        (e = o.alternate), e !== null && Ni(e) === null && (c = o), (o = o.sibling);
                    (o = c),
                        o === null ? ((c = t.child), (t.child = null)) : ((c = o.sibling), (o.sibling = null)),
                        fu(t, !1, c, o, d);
                    break;
                case "backwards":
                    for (o = null, c = t.child, t.child = null; c !== null; ) {
                        if (((e = c.alternate), e !== null && Ni(e) === null)) {
                            t.child = c;
                            break;
                        }
                        (e = c.sibling), (c.sibling = o), (o = c), (c = e);
                    }
                    fu(t, !0, o, null, d);
                    break;
                case "together":
                    fu(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
        return t.child;
    }
    function Di(e, t) {
        (t.mode & 1) === 0 && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Mn(e, t, o) {
        if ((e !== null && (t.dependencies = e.dependencies), (Nr |= t.lanes), (o & t.childLanes) === 0)) return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, o = ar(e, e.pendingProps), t.child = o, o.return = t; e.sibling !== null; )
                (e = e.sibling), (o = o.sibling = ar(e, e.pendingProps)), (o.return = t);
            o.sibling = null;
        }
        return t.child;
    }
    function Gy(e, t, o) {
        switch (t.tag) {
            case 3:
                zf(t), as();
                break;
            case 5:
                nf(t);
                break;
            case 1:
                jt(t.type) && vi(t);
                break;
            case 4:
                Zl(t, t.stateNode.containerInfo);
                break;
            case 10:
                var a = t.type._context,
                    c = t.memoizedProps.value;
                Ze(Ei, a._currentValue), (a._currentValue = c);
                break;
            case 13:
                if (((a = t.memoizedState), a !== null))
                    return a.dehydrated !== null
                        ? (Ze(qe, qe.current & 1), (t.flags |= 128), null)
                        : (o & t.child.childLanes) !== 0
                          ? Uf(e, t, o)
                          : (Ze(qe, qe.current & 1), (e = Mn(e, t, o)), e !== null ? e.sibling : null);
                Ze(qe, qe.current & 1);
                break;
            case 19:
                if (((a = (o & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
                    if (a) return Bf(e, t, o);
                    t.flags |= 128;
                }
                if (
                    ((c = t.memoizedState),
                    c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
                    Ze(qe, qe.current),
                    a)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (t.lanes = 0), Df(e, t, o);
        }
        return Mn(e, t, o);
    }
    var Wf, pu, Zf, Hf;
    (Wf = function (e, t) {
        for (var o = t.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                (o.child.return = o), (o = o.child);
                continue;
            }
            if (o === t) break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === t) return;
                o = o.return;
            }
            (o.sibling.return = o.return), (o = o.sibling);
        }
    }),
        (pu = function () {}),
        (Zf = function (e, t, o, a) {
            var c = e.memoizedProps;
            if (c !== a) {
                (e = t.stateNode), br(gn.current);
                var d = null;
                switch (o) {
                    case "input":
                        (c = Vr(e, c)), (a = Vr(e, a)), (d = []);
                        break;
                    case "select":
                        (c = q({}, c, { value: void 0 })), (a = q({}, a, { value: void 0 })), (d = []);
                        break;
                    case "textarea":
                        (c = _(e, c)), (a = _(e, a)), (d = []);
                        break;
                    default:
                        typeof c.onClick != "function" && typeof a.onClick == "function" && (e.onclick = hi);
                }
                Zr(o, a);
                var m;
                o = null;
                for (O in c)
                    if (!a.hasOwnProperty(O) && c.hasOwnProperty(O) && c[O] != null)
                        if (O === "style") {
                            var x = c[O];
                            for (m in x) x.hasOwnProperty(m) && (o || (o = {}), (o[m] = ""));
                        } else
                            O !== "dangerouslySetInnerHTML" &&
                                O !== "children" &&
                                O !== "suppressContentEditableWarning" &&
                                O !== "suppressHydrationWarning" &&
                                O !== "autoFocus" &&
                                (l.hasOwnProperty(O) ? d || (d = []) : (d = d || []).push(O, null));
                for (O in a) {
                    var S = a[O];
                    if (((x = c?.[O]), a.hasOwnProperty(O) && S !== x && (S != null || x != null)))
                        if (O === "style")
                            if (x) {
                                for (m in x)
                                    !x.hasOwnProperty(m) || (S && S.hasOwnProperty(m)) || (o || (o = {}), (o[m] = ""));
                                for (m in S) S.hasOwnProperty(m) && x[m] !== S[m] && (o || (o = {}), (o[m] = S[m]));
                            } else o || (d || (d = []), d.push(O, o)), (o = S);
                        else
                            O === "dangerouslySetInnerHTML"
                                ? ((S = S ? S.__html : void 0),
                                  (x = x ? x.__html : void 0),
                                  S != null && x !== S && (d = d || []).push(O, S))
                                : O === "children"
                                  ? (typeof S != "string" && typeof S != "number") || (d = d || []).push(O, "" + S)
                                  : O !== "suppressContentEditableWarning" &&
                                    O !== "suppressHydrationWarning" &&
                                    (l.hasOwnProperty(O)
                                        ? (S != null && O === "onScroll" && He("scroll", e), d || x === S || (d = []))
                                        : (d = d || []).push(O, S));
                }
                o && (d = d || []).push("style", o);
                var O = d;
                (t.updateQueue = O) && (t.flags |= 4);
            }
        }),
        (Hf = function (e, t, o, a) {
            o !== a && (t.flags |= 4);
        });
    function co(e, t) {
        if (!Ye)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var o = null; t !== null; ) t.alternate !== null && (o = t), (t = t.sibling);
                    o === null ? (e.tail = null) : (o.sibling = null);
                    break;
                case "collapsed":
                    o = e.tail;
                    for (var a = null; o !== null; ) o.alternate !== null && (a = o), (o = o.sibling);
                    a === null
                        ? t || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (a.sibling = null);
            }
    }
    function wt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            o = 0,
            a = 0;
        if (t)
            for (var c = e.child; c !== null; )
                (o |= c.lanes | c.childLanes),
                    (a |= c.subtreeFlags & 14680064),
                    (a |= c.flags & 14680064),
                    (c.return = e),
                    (c = c.sibling);
        else
            for (c = e.child; c !== null; )
                (o |= c.lanes | c.childLanes), (a |= c.subtreeFlags), (a |= c.flags), (c.return = e), (c = c.sibling);
        return (e.subtreeFlags |= a), (e.childLanes = o), t;
    }
    function qy(e, t, o) {
        var a = t.pendingProps;
        switch ((Ml(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return wt(t), null;
            case 1:
                return jt(t.type) && yi(), wt(t), null;
            case 3:
                return (
                    (a = t.stateNode),
                    ds(),
                    Ke(Rt),
                    Ke(vt),
                    Ql(),
                    a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (ki(t)
                            ? (t.flags |= 4)
                            : e === null ||
                              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                              ((t.flags |= 1024), Jt !== null && (Eu(Jt), (Jt = null)))),
                    pu(e, t),
                    wt(t),
                    null
                );
            case 5:
                Hl(t);
                var c = br(oo.current);
                if (((o = t.type), e !== null && t.stateNode != null))
                    Zf(e, t, o, a, c), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(s(166));
                        return wt(t), null;
                    }
                    if (((e = br(gn.current)), ki(t))) {
                        (a = t.stateNode), (o = t.type);
                        var d = t.memoizedProps;
                        switch (((a[hn] = t), (a[eo] = d), (e = (t.mode & 1) !== 0), o)) {
                            case "dialog":
                                He("cancel", a), He("close", a);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                He("load", a);
                                break;
                            case "video":
                            case "audio":
                                for (c = 0; c < qs.length; c++) He(qs[c], a);
                                break;
                            case "source":
                                He("error", a);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                He("error", a), He("load", a);
                                break;
                            case "details":
                                He("toggle", a);
                                break;
                            case "input":
                                Ho(a, d), He("invalid", a);
                                break;
                            case "select":
                                (a._wrapperState = { wasMultiple: !!d.multiple }), He("invalid", a);
                                break;
                            case "textarea":
                                j(a, d), He("invalid", a);
                        }
                        Zr(o, d), (c = null);
                        for (var m in d)
                            if (d.hasOwnProperty(m)) {
                                var x = d[m];
                                m === "children"
                                    ? typeof x == "string"
                                        ? a.textContent !== x &&
                                          (d.suppressHydrationWarning !== !0 && mi(a.textContent, x, e),
                                          (c = ["children", x]))
                                        : typeof x == "number" &&
                                          a.textContent !== "" + x &&
                                          (d.suppressHydrationWarning !== !0 && mi(a.textContent, x, e),
                                          (c = ["children", "" + x]))
                                    : l.hasOwnProperty(m) && x != null && m === "onScroll" && He("scroll", a);
                            }
                        switch (o) {
                            case "input":
                                pn(a), Ko(a, d, !0);
                                break;
                            case "textarea":
                                pn(a), oe(a);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof d.onClick == "function" && (a.onclick = hi);
                        }
                        (a = c), (t.updateQueue = a), a !== null && (t.flags |= 4);
                    } else {
                        (m = c.nodeType === 9 ? c : c.ownerDocument),
                            e === "http://www.w3.org/1999/xhtml" && (e = J(o)),
                            e === "http://www.w3.org/1999/xhtml"
                                ? o === "script"
                                    ? ((e = m.createElement("div")),
                                      (e.innerHTML = "<script></script>"),
                                      (e = e.removeChild(e.firstChild)))
                                    : typeof a.is == "string"
                                      ? (e = m.createElement(o, { is: a.is }))
                                      : ((e = m.createElement(o)),
                                        o === "select" &&
                                            ((m = e), a.multiple ? (m.multiple = !0) : a.size && (m.size = a.size)))
                                : (e = m.createElementNS(e, o)),
                            (e[hn] = t),
                            (e[eo] = a),
                            Wf(e, t, !1, !1),
                            (t.stateNode = e);
                        e: {
                            switch (((m = Os(o, a)), o)) {
                                case "dialog":
                                    He("cancel", e), He("close", e), (c = a);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    He("load", e), (c = a);
                                    break;
                                case "video":
                                case "audio":
                                    for (c = 0; c < qs.length; c++) He(qs[c], e);
                                    c = a;
                                    break;
                                case "source":
                                    He("error", e), (c = a);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    He("error", e), He("load", e), (c = a);
                                    break;
                                case "details":
                                    He("toggle", e), (c = a);
                                    break;
                                case "input":
                                    Ho(e, a), (c = Vr(e, a)), He("invalid", e);
                                    break;
                                case "option":
                                    c = a;
                                    break;
                                case "select":
                                    (e._wrapperState = { wasMultiple: !!a.multiple }),
                                        (c = q({}, a, { value: void 0 })),
                                        He("invalid", e);
                                    break;
                                case "textarea":
                                    j(e, a), (c = _(e, a)), He("invalid", e);
                                    break;
                                default:
                                    c = a;
                            }
                            Zr(o, c), (x = c);
                            for (d in x)
                                if (x.hasOwnProperty(d)) {
                                    var S = x[d];
                                    d === "style"
                                        ? Wr(e, S)
                                        : d === "dangerouslySetInnerHTML"
                                          ? ((S = S ? S.__html : void 0), S != null && De(e, S))
                                          : d === "children"
                                            ? typeof S == "string"
                                                ? (o !== "textarea" || S !== "") && We(e, S)
                                                : typeof S == "number" && We(e, "" + S)
                                            : d !== "suppressContentEditableWarning" &&
                                              d !== "suppressHydrationWarning" &&
                                              d !== "autoFocus" &&
                                              (l.hasOwnProperty(d)
                                                  ? S != null && d === "onScroll" && He("scroll", e)
                                                  : S != null && $(e, d, S, m));
                                }
                            switch (o) {
                                case "input":
                                    pn(e), Ko(e, a, !1);
                                    break;
                                case "textarea":
                                    pn(e), oe(e);
                                    break;
                                case "option":
                                    a.value != null && e.setAttribute("value", "" + Ie(a.value));
                                    break;
                                case "select":
                                    (e.multiple = !!a.multiple),
                                        (d = a.value),
                                        d != null
                                            ? Nn(e, !!a.multiple, d, !1)
                                            : a.defaultValue != null && Nn(e, !!a.multiple, a.defaultValue, !0);
                                    break;
                                default:
                                    typeof c.onClick == "function" && (e.onclick = hi);
                            }
                            switch (o) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a = !!a.autoFocus;
                                    break e;
                                case "img":
                                    a = !0;
                                    break e;
                                default:
                                    a = !1;
                            }
                        }
                        a && (t.flags |= 4);
                    }
                    t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
                }
                return wt(t), null;
            case 6:
                if (e && t.stateNode != null) Hf(e, t, e.memoizedProps, a);
                else {
                    if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
                    if (((o = br(oo.current)), br(gn.current), ki(t))) {
                        if (
                            ((a = t.stateNode),
                            (o = t.memoizedProps),
                            (a[hn] = t),
                            (d = a.nodeValue !== o) && ((e = It), e !== null))
                        )
                            switch (e.tag) {
                                case 3:
                                    mi(a.nodeValue, o, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                                        mi(a.nodeValue, o, (e.mode & 1) !== 0);
                            }
                        d && (t.flags |= 4);
                    } else
                        (a = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(a)),
                            (a[hn] = t),
                            (t.stateNode = a);
                }
                return wt(t), null;
            case 13:
                if (
                    (Ke(qe),
                    (a = t.memoizedState),
                    e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
                ) {
                    if (Ye && Ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                        Qd(), as(), (t.flags |= 98560), (d = !1);
                    else if (((d = ki(t)), a !== null && a.dehydrated !== null)) {
                        if (e === null) {
                            if (!d) throw Error(s(318));
                            if (((d = t.memoizedState), (d = d !== null ? d.dehydrated : null), !d))
                                throw Error(s(317));
                            d[hn] = t;
                        } else as(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
                        wt(t), (d = !1);
                    } else Jt !== null && (Eu(Jt), (Jt = null)), (d = !0);
                    if (!d) return t.flags & 65536 ? t : null;
                }
                return (t.flags & 128) !== 0
                    ? ((t.lanes = o), t)
                    : ((a = a !== null),
                      a !== (e !== null && e.memoizedState !== null) &&
                          a &&
                          ((t.child.flags |= 8192),
                          (t.mode & 1) !== 0 && (e === null || (qe.current & 1) !== 0 ? lt === 0 && (lt = 3) : Tu())),
                      t.updateQueue !== null && (t.flags |= 4),
                      wt(t),
                      null);
            case 4:
                return ds(), pu(e, t), e === null && Xs(t.stateNode.containerInfo), wt(t), null;
            case 10:
                return Ul(t.type._context), wt(t), null;
            case 17:
                return jt(t.type) && yi(), wt(t), null;
            case 19:
                if ((Ke(qe), (d = t.memoizedState), d === null)) return wt(t), null;
                if (((a = (t.flags & 128) !== 0), (m = d.rendering), m === null))
                    if (a) co(d, !1);
                    else {
                        if (lt !== 0 || (e !== null && (e.flags & 128) !== 0))
                            for (e = t.child; e !== null; ) {
                                if (((m = Ni(e)), m !== null)) {
                                    for (
                                        t.flags |= 128,
                                            co(d, !1),
                                            a = m.updateQueue,
                                            a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                                            t.subtreeFlags = 0,
                                            a = o,
                                            o = t.child;
                                        o !== null;

                                    )
                                        (d = o),
                                            (e = a),
                                            (d.flags &= 14680066),
                                            (m = d.alternate),
                                            m === null
                                                ? ((d.childLanes = 0),
                                                  (d.lanes = e),
                                                  (d.child = null),
                                                  (d.subtreeFlags = 0),
                                                  (d.memoizedProps = null),
                                                  (d.memoizedState = null),
                                                  (d.updateQueue = null),
                                                  (d.dependencies = null),
                                                  (d.stateNode = null))
                                                : ((d.childLanes = m.childLanes),
                                                  (d.lanes = m.lanes),
                                                  (d.child = m.child),
                                                  (d.subtreeFlags = 0),
                                                  (d.deletions = null),
                                                  (d.memoizedProps = m.memoizedProps),
                                                  (d.memoizedState = m.memoizedState),
                                                  (d.updateQueue = m.updateQueue),
                                                  (d.type = m.type),
                                                  (e = m.dependencies),
                                                  (d.dependencies =
                                                      e === null
                                                          ? null
                                                          : { lanes: e.lanes, firstContext: e.firstContext })),
                                            (o = o.sibling);
                                    return Ze(qe, (qe.current & 1) | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        d.tail !== null && nt() > hs && ((t.flags |= 128), (a = !0), co(d, !1), (t.lanes = 4194304));
                    }
                else {
                    if (!a)
                        if (((e = Ni(m)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (a = !0),
                                (o = e.updateQueue),
                                o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                                co(d, !0),
                                d.tail === null && d.tailMode === "hidden" && !m.alternate && !Ye)
                            )
                                return wt(t), null;
                        } else
                            2 * nt() - d.renderingStartTime > hs &&
                                o !== 1073741824 &&
                                ((t.flags |= 128), (a = !0), co(d, !1), (t.lanes = 4194304));
                    d.isBackwards
                        ? ((m.sibling = t.child), (t.child = m))
                        : ((o = d.last), o !== null ? (o.sibling = m) : (t.child = m), (d.last = m));
                }
                return d.tail !== null
                    ? ((t = d.tail),
                      (d.rendering = t),
                      (d.tail = t.sibling),
                      (d.renderingStartTime = nt()),
                      (t.sibling = null),
                      (o = qe.current),
                      Ze(qe, a ? (o & 1) | 2 : o & 1),
                      t)
                    : (wt(t), null);
            case 22:
            case 23:
                return (
                    bu(),
                    (a = t.memoizedState !== null),
                    e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
                    a && (t.mode & 1) !== 0
                        ? (zt & 1073741824) !== 0 && (wt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : wt(t),
                    null
                );
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(s(156, t.tag));
    }
    function Xy(e, t) {
        switch ((Ml(t), t.tag)) {
            case 1:
                return jt(t.type) && yi(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
            case 3:
                return (
                    ds(),
                    Ke(Rt),
                    Ke(vt),
                    Ql(),
                    (e = t.flags),
                    (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 5:
                return Hl(t), null;
            case 13:
                if ((Ke(qe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                    if (t.alternate === null) throw Error(s(340));
                    as();
                }
                return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
            case 19:
                return Ke(qe), null;
            case 4:
                return ds(), null;
            case 10:
                return Ul(t.type._context), null;
            case 22:
            case 23:
                return bu(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Ii = !1,
        _t = !1,
        Jy = typeof WeakSet == "function" ? WeakSet : Set,
        ue = null;
    function ps(e, t) {
        var o = e.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null);
                } catch (a) {
                    tt(e, t, a);
                }
            else o.current = null;
    }
    function mu(e, t, o) {
        try {
            o();
        } catch (a) {
            tt(e, t, a);
        }
    }
    var Kf = !1;
    function ev(e, t) {
        if (((bl = ri), (e = Ed()), vl(e))) {
            if ("selectionStart" in e) var o = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    o = ((o = e.ownerDocument) && o.defaultView) || window;
                    var a = o.getSelection && o.getSelection();
                    if (a && a.rangeCount !== 0) {
                        o = a.anchorNode;
                        var c = a.anchorOffset,
                            d = a.focusNode;
                        a = a.focusOffset;
                        try {
                            o.nodeType, d.nodeType;
                        } catch {
                            o = null;
                            break e;
                        }
                        var m = 0,
                            x = -1,
                            S = -1,
                            O = 0,
                            B = 0,
                            W = e,
                            U = null;
                        t: for (;;) {
                            for (
                                var ie;
                                W !== o || (c !== 0 && W.nodeType !== 3) || (x = m + c),
                                    W !== d || (a !== 0 && W.nodeType !== 3) || (S = m + a),
                                    W.nodeType === 3 && (m += W.nodeValue.length),
                                    (ie = W.firstChild) !== null;

                            )
                                (U = W), (W = ie);
                            for (;;) {
                                if (W === e) break t;
                                if (
                                    (U === o && ++O === c && (x = m),
                                    U === d && ++B === a && (S = m),
                                    (ie = W.nextSibling) !== null)
                                )
                                    break;
                                (W = U), (U = W.parentNode);
                            }
                            W = ie;
                        }
                        o = x === -1 || S === -1 ? null : { start: x, end: S };
                    } else o = null;
                }
            o = o || { start: 0, end: 0 };
        } else o = null;
        for (Tl = { focusedElem: e, selectionRange: o }, ri = !1, ue = t; ue !== null; )
            if (((t = ue), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (ue = e);
            else
                for (; ue !== null; ) {
                    t = ue;
                    try {
                        var ce = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (ce !== null) {
                                        var de = ce.memoizedProps,
                                            rt = ce.memoizedState,
                                            P = t.stateNode,
                                            C = P.getSnapshotBeforeUpdate(
                                                t.elementType === t.type ? de : en(t.type, de),
                                                rt
                                            );
                                        P.__reactInternalSnapshotBeforeUpdate = C;
                                    }
                                    break;
                                case 3:
                                    var R = t.stateNode.containerInfo;
                                    R.nodeType === 1
                                        ? (R.textContent = "")
                                        : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(s(163));
                            }
                    } catch (Y) {
                        tt(t, t.return, Y);
                    }
                    if (((e = t.sibling), e !== null)) {
                        (e.return = t.return), (ue = e);
                        break;
                    }
                    ue = t.return;
                }
        return (ce = Kf), (Kf = !1), ce;
    }
    function fo(e, t, o) {
        var a = t.updateQueue;
        if (((a = a !== null ? a.lastEffect : null), a !== null)) {
            var c = (a = a.next);
            do {
                if ((c.tag & e) === e) {
                    var d = c.destroy;
                    (c.destroy = void 0), d !== void 0 && mu(t, o, d);
                }
                c = c.next;
            } while (c !== a);
        }
    }
    function Fi(e, t) {
        if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
            var o = (t = t.next);
            do {
                if ((o.tag & e) === e) {
                    var a = o.create;
                    o.destroy = a();
                }
                o = o.next;
            } while (o !== t);
        }
    }
    function hu(e) {
        var t = e.ref;
        if (t !== null) {
            var o = e.stateNode;
            e.tag, (e = o), typeof t == "function" ? t(e) : (t.current = e);
        }
    }
    function Qf(e) {
        var t = e.alternate;
        t !== null && ((e.alternate = null), Qf(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 &&
                ((t = e.stateNode),
                t !== null && (delete t[hn], delete t[eo], delete t[jl], delete t[Dy], delete t[Iy])),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
    }
    function Yf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Gf(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || Yf(e.return)) return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                (e.child.return = e), (e = e.child);
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function gu(e, t, o) {
        var a = e.tag;
        if (a === 5 || a === 6)
            (e = e.stateNode),
                t
                    ? o.nodeType === 8
                        ? o.parentNode.insertBefore(e, t)
                        : o.insertBefore(e, t)
                    : (o.nodeType === 8 ? ((t = o.parentNode), t.insertBefore(e, o)) : ((t = o), t.appendChild(e)),
                      (o = o._reactRootContainer),
                      o != null || t.onclick !== null || (t.onclick = hi));
        else if (a !== 4 && ((e = e.child), e !== null))
            for (gu(e, t, o), e = e.sibling; e !== null; ) gu(e, t, o), (e = e.sibling);
    }
    function yu(e, t, o) {
        var a = e.tag;
        if (a === 5 || a === 6) (e = e.stateNode), t ? o.insertBefore(e, t) : o.appendChild(e);
        else if (a !== 4 && ((e = e.child), e !== null))
            for (yu(e, t, o), e = e.sibling; e !== null; ) yu(e, t, o), (e = e.sibling);
    }
    var ht = null,
        tn = !1;
    function nr(e, t, o) {
        for (o = o.child; o !== null; ) qf(e, t, o), (o = o.sibling);
    }
    function qf(e, t, o) {
        if (mn && typeof mn.onCommitFiberUnmount == "function")
            try {
                mn.onCommitFiberUnmount(qo, o);
            } catch {}
        switch (o.tag) {
            case 5:
                _t || ps(o, t);
            case 6:
                var a = ht,
                    c = tn;
                (ht = null),
                    nr(e, t, o),
                    (ht = a),
                    (tn = c),
                    ht !== null &&
                        (tn
                            ? ((e = ht),
                              (o = o.stateNode),
                              e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o))
                            : ht.removeChild(o.stateNode));
                break;
            case 18:
                ht !== null &&
                    (tn
                        ? ((e = ht),
                          (o = o.stateNode),
                          e.nodeType === 8 ? Rl(e.parentNode, o) : e.nodeType === 1 && Rl(e, o),
                          Bs(e))
                        : Rl(ht, o.stateNode));
                break;
            case 4:
                (a = ht), (c = tn), (ht = o.stateNode.containerInfo), (tn = !0), nr(e, t, o), (ht = a), (tn = c);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!_t && ((a = o.updateQueue), a !== null && ((a = a.lastEffect), a !== null))) {
                    c = a = a.next;
                    do {
                        var d = c,
                            m = d.destroy;
                        (d = d.tag), m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && mu(o, t, m), (c = c.next);
                    } while (c !== a);
                }
                nr(e, t, o);
                break;
            case 1:
                if (!_t && (ps(o, t), (a = o.stateNode), typeof a.componentWillUnmount == "function"))
                    try {
                        (a.props = o.memoizedProps), (a.state = o.memoizedState), a.componentWillUnmount();
                    } catch (x) {
                        tt(o, t, x);
                    }
                nr(e, t, o);
                break;
            case 21:
                nr(e, t, o);
                break;
            case 22:
                o.mode & 1 ? ((_t = (a = _t) || o.memoizedState !== null), nr(e, t, o), (_t = a)) : nr(e, t, o);
                break;
            default:
                nr(e, t, o);
        }
    }
    function Xf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var o = e.stateNode;
            o === null && (o = e.stateNode = new Jy()),
                t.forEach(function (a) {
                    var c = uv.bind(null, e, a);
                    o.has(a) || (o.add(a), a.then(c, c));
                });
        }
    }
    function nn(e, t) {
        var o = t.deletions;
        if (o !== null)
            for (var a = 0; a < o.length; a++) {
                var c = o[a];
                try {
                    var d = e,
                        m = t,
                        x = m;
                    e: for (; x !== null; ) {
                        switch (x.tag) {
                            case 5:
                                (ht = x.stateNode), (tn = !1);
                                break e;
                            case 3:
                                (ht = x.stateNode.containerInfo), (tn = !0);
                                break e;
                            case 4:
                                (ht = x.stateNode.containerInfo), (tn = !0);
                                break e;
                        }
                        x = x.return;
                    }
                    if (ht === null) throw Error(s(160));
                    qf(d, m, c), (ht = null), (tn = !1);
                    var S = c.alternate;
                    S !== null && (S.return = null), (c.return = null);
                } catch (O) {
                    tt(c, t, O);
                }
            }
        if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Jf(t, e), (t = t.sibling);
    }
    function Jf(e, t) {
        var o = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if ((nn(t, e), vn(e), a & 4)) {
                    try {
                        fo(3, e, e.return), Fi(3, e);
                    } catch (de) {
                        tt(e, e.return, de);
                    }
                    try {
                        fo(5, e, e.return);
                    } catch (de) {
                        tt(e, e.return, de);
                    }
                }
                break;
            case 1:
                nn(t, e), vn(e), a & 512 && o !== null && ps(o, o.return);
                break;
            case 5:
                if ((nn(t, e), vn(e), a & 512 && o !== null && ps(o, o.return), e.flags & 32)) {
                    var c = e.stateNode;
                    try {
                        We(c, "");
                    } catch (de) {
                        tt(e, e.return, de);
                    }
                }
                if (a & 4 && ((c = e.stateNode), c != null)) {
                    var d = e.memoizedProps,
                        m = o !== null ? o.memoizedProps : d,
                        x = e.type,
                        S = e.updateQueue;
                    if (((e.updateQueue = null), S !== null))
                        try {
                            x === "input" && d.type === "radio" && d.name != null && js(c, d), Os(x, m);
                            var O = Os(x, d);
                            for (m = 0; m < S.length; m += 2) {
                                var B = S[m],
                                    W = S[m + 1];
                                B === "style"
                                    ? Wr(c, W)
                                    : B === "dangerouslySetInnerHTML"
                                      ? De(c, W)
                                      : B === "children"
                                        ? We(c, W)
                                        : $(c, B, W, O);
                            }
                            switch (x) {
                                case "input":
                                    Ur(c, d);
                                    break;
                                case "textarea":
                                    I(c, d);
                                    break;
                                case "select":
                                    var U = c._wrapperState.wasMultiple;
                                    c._wrapperState.wasMultiple = !!d.multiple;
                                    var ie = d.value;
                                    ie != null
                                        ? Nn(c, !!d.multiple, ie, !1)
                                        : U !== !!d.multiple &&
                                          (d.defaultValue != null
                                              ? Nn(c, !!d.multiple, d.defaultValue, !0)
                                              : Nn(c, !!d.multiple, d.multiple ? [] : "", !1));
                            }
                            c[eo] = d;
                        } catch (de) {
                            tt(e, e.return, de);
                        }
                }
                break;
            case 6:
                if ((nn(t, e), vn(e), a & 4)) {
                    if (e.stateNode === null) throw Error(s(162));
                    (c = e.stateNode), (d = e.memoizedProps);
                    try {
                        c.nodeValue = d;
                    } catch (de) {
                        tt(e, e.return, de);
                    }
                }
                break;
            case 3:
                if ((nn(t, e), vn(e), a & 4 && o !== null && o.memoizedState.isDehydrated))
                    try {
                        Bs(t.containerInfo);
                    } catch (de) {
                        tt(e, e.return, de);
                    }
                break;
            case 4:
                nn(t, e), vn(e);
                break;
            case 13:
                nn(t, e),
                    vn(e),
                    (c = e.child),
                    c.flags & 8192 &&
                        ((d = c.memoizedState !== null),
                        (c.stateNode.isHidden = d),
                        !d || (c.alternate !== null && c.alternate.memoizedState !== null) || (wu = nt())),
                    a & 4 && Xf(e);
                break;
            case 22:
                if (
                    ((B = o !== null && o.memoizedState !== null),
                    e.mode & 1 ? ((_t = (O = _t) || B), nn(t, e), (_t = O)) : nn(t, e),
                    vn(e),
                    a & 8192)
                ) {
                    if (((O = e.memoizedState !== null), (e.stateNode.isHidden = O) && !B && (e.mode & 1) !== 0))
                        for (ue = e, B = e.child; B !== null; ) {
                            for (W = ue = B; ue !== null; ) {
                                switch (((U = ue), (ie = U.child), U.tag)) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        fo(4, U, U.return);
                                        break;
                                    case 1:
                                        ps(U, U.return);
                                        var ce = U.stateNode;
                                        if (typeof ce.componentWillUnmount == "function") {
                                            (a = U), (o = U.return);
                                            try {
                                                (t = a),
                                                    (ce.props = t.memoizedProps),
                                                    (ce.state = t.memoizedState),
                                                    ce.componentWillUnmount();
                                            } catch (de) {
                                                tt(a, o, de);
                                            }
                                        }
                                        break;
                                    case 5:
                                        ps(U, U.return);
                                        break;
                                    case 22:
                                        if (U.memoizedState !== null) {
                                            np(W);
                                            continue;
                                        }
                                }
                                ie !== null ? ((ie.return = U), (ue = ie)) : np(W);
                            }
                            B = B.sibling;
                        }
                    e: for (B = null, W = e; ; ) {
                        if (W.tag === 5) {
                            if (B === null) {
                                B = W;
                                try {
                                    (c = W.stateNode),
                                        O
                                            ? ((d = c.style),
                                              typeof d.setProperty == "function"
                                                  ? d.setProperty("display", "none", "important")
                                                  : (d.display = "none"))
                                            : ((x = W.stateNode),
                                              (S = W.memoizedProps.style),
                                              (m = S != null && S.hasOwnProperty("display") ? S.display : null),
                                              (x.style.display = Br("display", m)));
                                } catch (de) {
                                    tt(e, e.return, de);
                                }
                            }
                        } else if (W.tag === 6) {
                            if (B === null)
                                try {
                                    W.stateNode.nodeValue = O ? "" : W.memoizedProps;
                                } catch (de) {
                                    tt(e, e.return, de);
                                }
                        } else if (
                            ((W.tag !== 22 && W.tag !== 23) || W.memoizedState === null || W === e) &&
                            W.child !== null
                        ) {
                            (W.child.return = W), (W = W.child);
                            continue;
                        }
                        if (W === e) break e;
                        for (; W.sibling === null; ) {
                            if (W.return === null || W.return === e) break e;
                            B === W && (B = null), (W = W.return);
                        }
                        B === W && (B = null), (W.sibling.return = W.return), (W = W.sibling);
                    }
                }
                break;
            case 19:
                nn(t, e), vn(e), a & 4 && Xf(e);
                break;
            case 21:
                break;
            default:
                nn(t, e), vn(e);
        }
    }
    function vn(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var o = e.return; o !== null; ) {
                        if (Yf(o)) {
                            var a = o;
                            break e;
                        }
                        o = o.return;
                    }
                    throw Error(s(160));
                }
                switch (a.tag) {
                    case 5:
                        var c = a.stateNode;
                        a.flags & 32 && (We(c, ""), (a.flags &= -33));
                        var d = Gf(e);
                        yu(e, d, c);
                        break;
                    case 3:
                    case 4:
                        var m = a.stateNode.containerInfo,
                            x = Gf(e);
                        gu(e, x, m);
                        break;
                    default:
                        throw Error(s(161));
                }
            } catch (S) {
                tt(e, e.return, S);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function tv(e, t, o) {
        (ue = e), ep(e);
    }
    function ep(e, t, o) {
        for (var a = (e.mode & 1) !== 0; ue !== null; ) {
            var c = ue,
                d = c.child;
            if (c.tag === 22 && a) {
                var m = c.memoizedState !== null || Ii;
                if (!m) {
                    var x = c.alternate,
                        S = (x !== null && x.memoizedState !== null) || _t;
                    x = Ii;
                    var O = _t;
                    if (((Ii = m), (_t = S) && !O))
                        for (ue = c; ue !== null; )
                            (m = ue),
                                (S = m.child),
                                m.tag === 22 && m.memoizedState !== null
                                    ? rp(c)
                                    : S !== null
                                      ? ((S.return = m), (ue = S))
                                      : rp(c);
                    for (; d !== null; ) (ue = d), ep(d), (d = d.sibling);
                    (ue = c), (Ii = x), (_t = O);
                }
                tp(e);
            } else (c.subtreeFlags & 8772) !== 0 && d !== null ? ((d.return = c), (ue = d)) : tp(e);
        }
    }
    function tp(e) {
        for (; ue !== null; ) {
            var t = ue;
            if ((t.flags & 8772) !== 0) {
                var o = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                _t || Fi(5, t);
                                break;
                            case 1:
                                var a = t.stateNode;
                                if (t.flags & 4 && !_t)
                                    if (o === null) a.componentDidMount();
                                    else {
                                        var c =
                                            t.elementType === t.type ? o.memoizedProps : en(t.type, o.memoizedProps);
                                        a.componentDidUpdate(c, o.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var d = t.updateQueue;
                                d !== null && tf(t, d, a);
                                break;
                            case 3:
                                var m = t.updateQueue;
                                if (m !== null) {
                                    if (((o = null), t.child !== null))
                                        switch (t.child.tag) {
                                            case 5:
                                                o = t.child.stateNode;
                                                break;
                                            case 1:
                                                o = t.child.stateNode;
                                        }
                                    tf(t, m, o);
                                }
                                break;
                            case 5:
                                var x = t.stateNode;
                                if (o === null && t.flags & 4) {
                                    o = x;
                                    var S = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            S.autoFocus && o.focus();
                                            break;
                                        case "img":
                                            S.src && (o.src = S.src);
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (t.memoizedState === null) {
                                    var O = t.alternate;
                                    if (O !== null) {
                                        var B = O.memoizedState;
                                        if (B !== null) {
                                            var W = B.dehydrated;
                                            W !== null && Bs(W);
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(s(163));
                        }
                    _t || (t.flags & 512 && hu(t));
                } catch (U) {
                    tt(t, t.return, U);
                }
            }
            if (t === e) {
                ue = null;
                break;
            }
            if (((o = t.sibling), o !== null)) {
                (o.return = t.return), (ue = o);
                break;
            }
            ue = t.return;
        }
    }
    function np(e) {
        for (; ue !== null; ) {
            var t = ue;
            if (t === e) {
                ue = null;
                break;
            }
            var o = t.sibling;
            if (o !== null) {
                (o.return = t.return), (ue = o);
                break;
            }
            ue = t.return;
        }
    }
    function rp(e) {
        for (; ue !== null; ) {
            var t = ue;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var o = t.return;
                        try {
                            Fi(4, t);
                        } catch (S) {
                            tt(t, o, S);
                        }
                        break;
                    case 1:
                        var a = t.stateNode;
                        if (typeof a.componentDidMount == "function") {
                            var c = t.return;
                            try {
                                a.componentDidMount();
                            } catch (S) {
                                tt(t, c, S);
                            }
                        }
                        var d = t.return;
                        try {
                            hu(t);
                        } catch (S) {
                            tt(t, d, S);
                        }
                        break;
                    case 5:
                        var m = t.return;
                        try {
                            hu(t);
                        } catch (S) {
                            tt(t, m, S);
                        }
                }
            } catch (S) {
                tt(t, t.return, S);
            }
            if (t === e) {
                ue = null;
                break;
            }
            var x = t.sibling;
            if (x !== null) {
                (x.return = t.return), (ue = x);
                break;
            }
            ue = t.return;
        }
    }
    var nv = Math.ceil,
        zi = V.ReactCurrentDispatcher,
        vu = V.ReactCurrentOwner,
        Qt = V.ReactCurrentBatchConfig,
        ze = 0,
        pt = null,
        it = null,
        gt = 0,
        zt = 0,
        ms = qn(0),
        lt = 0,
        po = null,
        Nr = 0,
        Vi = 0,
        xu = 0,
        mo = null,
        Ot = null,
        wu = 0,
        hs = 1 / 0,
        Dn = null,
        Ui = !1,
        _u = null,
        rr = null,
        $i = !1,
        sr = null,
        Bi = 0,
        ho = 0,
        ku = null,
        Wi = -1,
        Zi = 0;
    function Ct() {
        return (ze & 6) !== 0 ? nt() : Wi !== -1 ? Wi : (Wi = nt());
    }
    function or(e) {
        return (e.mode & 1) === 0
            ? 1
            : (ze & 2) !== 0 && gt !== 0
              ? gt & -gt
              : zy.transition !== null
                ? (Zi === 0 && (Zi = Yc()), Zi)
                : ((e = Be), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sd(e.type))), e);
    }
    function rn(e, t, o, a) {
        if (50 < ho) throw ((ho = 0), (ku = null), Error(s(185)));
        Fs(e, o, a),
            ((ze & 2) === 0 || e !== pt) &&
                (e === pt && ((ze & 2) === 0 && (Vi |= o), lt === 4 && ir(e, gt)),
                Lt(e, a),
                o === 1 && ze === 0 && (t.mode & 1) === 0 && ((hs = nt() + 500), xi && Jn()));
    }
    function Lt(e, t) {
        var o = e.callbackNode;
        zg(e, t);
        var a = ei(e, e === pt ? gt : 0);
        if (a === 0) o !== null && Hc(o), (e.callbackNode = null), (e.callbackPriority = 0);
        else if (((t = a & -a), e.callbackPriority !== t)) {
            if ((o != null && Hc(o), t === 1))
                e.tag === 0 ? Fy(op.bind(null, e)) : Bd(op.bind(null, e)),
                    Ly(function () {
                        (ze & 6) === 0 && Jn();
                    }),
                    (o = null);
            else {
                switch (Gc(a)) {
                    case 1:
                        o = tl;
                        break;
                    case 4:
                        o = Kc;
                        break;
                    case 16:
                        o = Go;
                        break;
                    case 536870912:
                        o = Qc;
                        break;
                    default:
                        o = Go;
                }
                o = pp(o, sp.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = o);
        }
    }
    function sp(e, t) {
        if (((Wi = -1), (Zi = 0), (ze & 6) !== 0)) throw Error(s(327));
        var o = e.callbackNode;
        if (gs() && e.callbackNode !== o) return null;
        var a = ei(e, e === pt ? gt : 0);
        if (a === 0) return null;
        if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = Hi(e, a);
        else {
            t = a;
            var c = ze;
            ze |= 2;
            var d = ap();
            (pt !== e || gt !== t) && ((Dn = null), (hs = nt() + 500), Rr(e, t));
            do
                try {
                    ov();
                    break;
                } catch (x) {
                    ip(e, x);
                }
            while (!0);
            Vl(), (zi.current = d), (ze = c), it !== null ? (t = 0) : ((pt = null), (gt = 0), (t = lt));
        }
        if (t !== 0) {
            if ((t === 2 && ((c = nl(e)), c !== 0 && ((a = c), (t = Su(e, c)))), t === 1))
                throw ((o = po), Rr(e, 0), ir(e, a), Lt(e, nt()), o);
            if (t === 6) ir(e, a);
            else {
                if (
                    ((c = e.current.alternate),
                    (a & 30) === 0 &&
                        !rv(c) &&
                        ((t = Hi(e, a)), t === 2 && ((d = nl(e)), d !== 0 && ((a = d), (t = Su(e, d)))), t === 1))
                )
                    throw ((o = po), Rr(e, 0), ir(e, a), Lt(e, nt()), o);
                switch (((e.finishedWork = c), (e.finishedLanes = a), t)) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        jr(e, Ot, Dn);
                        break;
                    case 3:
                        if ((ir(e, a), (a & 130023424) === a && ((t = wu + 500 - nt()), 10 < t))) {
                            if (ei(e, 0) !== 0) break;
                            if (((c = e.suspendedLanes), (c & a) !== a)) {
                                Ct(), (e.pingedLanes |= e.suspendedLanes & c);
                                break;
                            }
                            e.timeoutHandle = Pl(jr.bind(null, e, Ot, Dn), t);
                            break;
                        }
                        jr(e, Ot, Dn);
                        break;
                    case 4:
                        if ((ir(e, a), (a & 4194240) === a)) break;
                        for (t = e.eventTimes, c = -1; 0 < a; ) {
                            var m = 31 - qt(a);
                            (d = 1 << m), (m = t[m]), m > c && (c = m), (a &= ~d);
                        }
                        if (
                            ((a = c),
                            (a = nt() - a),
                            (a =
                                (120 > a
                                    ? 120
                                    : 480 > a
                                      ? 480
                                      : 1080 > a
                                        ? 1080
                                        : 1920 > a
                                          ? 1920
                                          : 3e3 > a
                                            ? 3e3
                                            : 4320 > a
                                              ? 4320
                                              : 1960 * nv(a / 1960)) - a),
                            10 < a)
                        ) {
                            e.timeoutHandle = Pl(jr.bind(null, e, Ot, Dn), a);
                            break;
                        }
                        jr(e, Ot, Dn);
                        break;
                    case 5:
                        jr(e, Ot, Dn);
                        break;
                    default:
                        throw Error(s(329));
                }
            }
        }
        return Lt(e, nt()), e.callbackNode === o ? sp.bind(null, e) : null;
    }
    function Su(e, t) {
        var o = mo;
        return (
            e.current.memoizedState.isDehydrated && (Rr(e, t).flags |= 256),
            (e = Hi(e, t)),
            e !== 2 && ((t = Ot), (Ot = o), t !== null && Eu(t)),
            e
        );
    }
    function Eu(e) {
        Ot === null ? (Ot = e) : Ot.push.apply(Ot, e);
    }
    function rv(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var o = t.updateQueue;
                if (o !== null && ((o = o.stores), o !== null))
                    for (var a = 0; a < o.length; a++) {
                        var c = o[a],
                            d = c.getSnapshot;
                        c = c.value;
                        try {
                            if (!Xt(d(), c)) return !1;
                        } catch {
                            return !1;
                        }
                    }
            }
            if (((o = t.child), t.subtreeFlags & 16384 && o !== null)) (o.return = t), (t = o);
            else {
                if (t === e) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        }
        return !0;
    }
    function ir(e, t) {
        for (t &= ~xu, t &= ~Vi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
            var o = 31 - qt(t),
                a = 1 << o;
            (e[o] = -1), (t &= ~a);
        }
    }
    function op(e) {
        if ((ze & 6) !== 0) throw Error(s(327));
        gs();
        var t = ei(e, 0);
        if ((t & 1) === 0) return Lt(e, nt()), null;
        var o = Hi(e, t);
        if (e.tag !== 0 && o === 2) {
            var a = nl(e);
            a !== 0 && ((t = a), (o = Su(e, a)));
        }
        if (o === 1) throw ((o = po), Rr(e, 0), ir(e, t), Lt(e, nt()), o);
        if (o === 6) throw Error(s(345));
        return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), jr(e, Ot, Dn), Lt(e, nt()), null;
    }
    function Cu(e, t) {
        var o = ze;
        ze |= 1;
        try {
            return e(t);
        } finally {
            (ze = o), ze === 0 && ((hs = nt() + 500), xi && Jn());
        }
    }
    function Pr(e) {
        sr !== null && sr.tag === 0 && (ze & 6) === 0 && gs();
        var t = ze;
        ze |= 1;
        var o = Qt.transition,
            a = Be;
        try {
            if (((Qt.transition = null), (Be = 1), e)) return e();
        } finally {
            (Be = a), (Qt.transition = o), (ze = t), (ze & 6) === 0 && Jn();
        }
    }
    function bu() {
        (zt = ms.current), Ke(ms);
    }
    function Rr(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var o = e.timeoutHandle;
        if ((o !== -1 && ((e.timeoutHandle = -1), Oy(o)), it !== null))
            for (o = it.return; o !== null; ) {
                var a = o;
                switch ((Ml(a), a.tag)) {
                    case 1:
                        (a = a.type.childContextTypes), a != null && yi();
                        break;
                    case 3:
                        ds(), Ke(Rt), Ke(vt), Ql();
                        break;
                    case 5:
                        Hl(a);
                        break;
                    case 4:
                        ds();
                        break;
                    case 13:
                        Ke(qe);
                        break;
                    case 19:
                        Ke(qe);
                        break;
                    case 10:
                        Ul(a.type._context);
                        break;
                    case 22:
                    case 23:
                        bu();
                }
                o = o.return;
            }
        if (
            ((pt = e),
            (it = e = ar(e.current, null)),
            (gt = zt = t),
            (lt = 0),
            (po = null),
            (xu = Vi = Nr = 0),
            (Ot = mo = null),
            Cr !== null)
        ) {
            for (t = 0; t < Cr.length; t++)
                if (((o = Cr[t]), (a = o.interleaved), a !== null)) {
                    o.interleaved = null;
                    var c = a.next,
                        d = o.pending;
                    if (d !== null) {
                        var m = d.next;
                        (d.next = c), (a.next = m);
                    }
                    o.pending = a;
                }
            Cr = null;
        }
        return e;
    }
    function ip(e, t) {
        do {
            var o = it;
            try {
                if ((Vl(), (Pi.current = Oi), Ri)) {
                    for (var a = Xe.memoizedState; a !== null; ) {
                        var c = a.queue;
                        c !== null && (c.pending = null), (a = a.next);
                    }
                    Ri = !1;
                }
                if (
                    ((Tr = 0),
                    (ft = at = Xe = null),
                    (io = !1),
                    (ao = 0),
                    (vu.current = null),
                    o === null || o.return === null)
                ) {
                    (lt = 1), (po = t), (it = null);
                    break;
                }
                e: {
                    var d = e,
                        m = o.return,
                        x = o,
                        S = t;
                    if (
                        ((t = gt),
                        (x.flags |= 32768),
                        S !== null && typeof S == "object" && typeof S.then == "function")
                    ) {
                        var O = S,
                            B = x,
                            W = B.tag;
                        if ((B.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
                            var U = B.alternate;
                            U
                                ? ((B.updateQueue = U.updateQueue),
                                  (B.memoizedState = U.memoizedState),
                                  (B.lanes = U.lanes))
                                : ((B.updateQueue = null), (B.memoizedState = null));
                        }
                        var ie = jf(m);
                        if (ie !== null) {
                            (ie.flags &= -257), Af(ie, m, x, d, t), ie.mode & 1 && Rf(d, O, t), (t = ie), (S = O);
                            var ce = t.updateQueue;
                            if (ce === null) {
                                var de = new Set();
                                de.add(S), (t.updateQueue = de);
                            } else ce.add(S);
                            break e;
                        } else {
                            if ((t & 1) === 0) {
                                Rf(d, O, t), Tu();
                                break e;
                            }
                            S = Error(s(426));
                        }
                    } else if (Ye && x.mode & 1) {
                        var rt = jf(m);
                        if (rt !== null) {
                            (rt.flags & 65536) === 0 && (rt.flags |= 256), Af(rt, m, x, d, t), Fl(fs(S, x));
                            break e;
                        }
                    }
                    (d = S = fs(S, x)), lt !== 4 && (lt = 2), mo === null ? (mo = [d]) : mo.push(d), (d = m);
                    do {
                        switch (d.tag) {
                            case 3:
                                (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                                var P = Nf(d, S, t);
                                ef(d, P);
                                break e;
                            case 1:
                                x = S;
                                var C = d.type,
                                    R = d.stateNode;
                                if (
                                    (d.flags & 128) === 0 &&
                                    (typeof C.getDerivedStateFromError == "function" ||
                                        (R !== null &&
                                            typeof R.componentDidCatch == "function" &&
                                            (rr === null || !rr.has(R))))
                                ) {
                                    (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                                    var Y = Pf(d, x, t);
                                    ef(d, Y);
                                    break e;
                                }
                        }
                        d = d.return;
                    } while (d !== null);
                }
                up(o);
            } catch (me) {
                (t = me), it === o && o !== null && (it = o = o.return);
                continue;
            }
            break;
        } while (!0);
    }
    function ap() {
        var e = zi.current;
        return (zi.current = Oi), e === null ? Oi : e;
    }
    function Tu() {
        (lt === 0 || lt === 3 || lt === 2) && (lt = 4),
            pt === null || ((Nr & 268435455) === 0 && (Vi & 268435455) === 0) || ir(pt, gt);
    }
    function Hi(e, t) {
        var o = ze;
        ze |= 2;
        var a = ap();
        (pt !== e || gt !== t) && ((Dn = null), Rr(e, t));
        do
            try {
                sv();
                break;
            } catch (c) {
                ip(e, c);
            }
        while (!0);
        if ((Vl(), (ze = o), (zi.current = a), it !== null)) throw Error(s(261));
        return (pt = null), (gt = 0), lt;
    }
    function sv() {
        for (; it !== null; ) lp(it);
    }
    function ov() {
        for (; it !== null && !Rg(); ) lp(it);
    }
    function lp(e) {
        var t = fp(e.alternate, e, zt);
        (e.memoizedProps = e.pendingProps), t === null ? up(e) : (it = t), (vu.current = null);
    }
    function up(e) {
        var t = e;
        do {
            var o = t.alternate;
            if (((e = t.return), (t.flags & 32768) === 0)) {
                if (((o = qy(o, t, zt)), o !== null)) {
                    it = o;
                    return;
                }
            } else {
                if (((o = Xy(o, t)), o !== null)) {
                    (o.flags &= 32767), (it = o);
                    return;
                }
                if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
                else {
                    (lt = 6), (it = null);
                    return;
                }
            }
            if (((t = t.sibling), t !== null)) {
                it = t;
                return;
            }
            it = t = e;
        } while (t !== null);
        lt === 0 && (lt = 5);
    }
    function jr(e, t, o) {
        var a = Be,
            c = Qt.transition;
        try {
            (Qt.transition = null), (Be = 1), iv(e, t, o, a);
        } finally {
            (Qt.transition = c), (Be = a);
        }
        return null;
    }
    function iv(e, t, o, a) {
        do gs();
        while (sr !== null);
        if ((ze & 6) !== 0) throw Error(s(327));
        o = e.finishedWork;
        var c = e.finishedLanes;
        if (o === null) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), o === e.current)) throw Error(s(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var d = o.lanes | o.childLanes;
        if (
            (Vg(e, d),
            e === pt && ((it = pt = null), (gt = 0)),
            ((o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0) ||
                $i ||
                (($i = !0),
                pp(Go, function () {
                    return gs(), null;
                })),
            (d = (o.flags & 15990) !== 0),
            (o.subtreeFlags & 15990) !== 0 || d)
        ) {
            (d = Qt.transition), (Qt.transition = null);
            var m = Be;
            Be = 1;
            var x = ze;
            (ze |= 4),
                (vu.current = null),
                ev(e, o),
                Jf(o, e),
                by(Tl),
                (ri = !!bl),
                (Tl = bl = null),
                (e.current = o),
                tv(o),
                jg(),
                (ze = x),
                (Be = m),
                (Qt.transition = d);
        } else e.current = o;
        if (
            ($i && (($i = !1), (sr = e), (Bi = c)),
            (d = e.pendingLanes),
            d === 0 && (rr = null),
            Lg(o.stateNode),
            Lt(e, nt()),
            t !== null)
        )
            for (a = e.onRecoverableError, o = 0; o < t.length; o++)
                (c = t[o]), a(c.value, { componentStack: c.stack, digest: c.digest });
        if (Ui) throw ((Ui = !1), (e = _u), (_u = null), e);
        return (
            (Bi & 1) !== 0 && e.tag !== 0 && gs(),
            (d = e.pendingLanes),
            (d & 1) !== 0 ? (e === ku ? ho++ : ((ho = 0), (ku = e))) : (ho = 0),
            Jn(),
            null
        );
    }
    function gs() {
        if (sr !== null) {
            var e = Gc(Bi),
                t = Qt.transition,
                o = Be;
            try {
                if (((Qt.transition = null), (Be = 16 > e ? 16 : e), sr === null)) var a = !1;
                else {
                    if (((e = sr), (sr = null), (Bi = 0), (ze & 6) !== 0)) throw Error(s(331));
                    var c = ze;
                    for (ze |= 4, ue = e.current; ue !== null; ) {
                        var d = ue,
                            m = d.child;
                        if ((ue.flags & 16) !== 0) {
                            var x = d.deletions;
                            if (x !== null) {
                                for (var S = 0; S < x.length; S++) {
                                    var O = x[S];
                                    for (ue = O; ue !== null; ) {
                                        var B = ue;
                                        switch (B.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                fo(8, B, d);
                                        }
                                        var W = B.child;
                                        if (W !== null) (W.return = B), (ue = W);
                                        else
                                            for (; ue !== null; ) {
                                                B = ue;
                                                var U = B.sibling,
                                                    ie = B.return;
                                                if ((Qf(B), B === O)) {
                                                    ue = null;
                                                    break;
                                                }
                                                if (U !== null) {
                                                    (U.return = ie), (ue = U);
                                                    break;
                                                }
                                                ue = ie;
                                            }
                                    }
                                }
                                var ce = d.alternate;
                                if (ce !== null) {
                                    var de = ce.child;
                                    if (de !== null) {
                                        ce.child = null;
                                        do {
                                            var rt = de.sibling;
                                            (de.sibling = null), (de = rt);
                                        } while (de !== null);
                                    }
                                }
                                ue = d;
                            }
                        }
                        if ((d.subtreeFlags & 2064) !== 0 && m !== null) (m.return = d), (ue = m);
                        else
                            e: for (; ue !== null; ) {
                                if (((d = ue), (d.flags & 2048) !== 0))
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            fo(9, d, d.return);
                                    }
                                var P = d.sibling;
                                if (P !== null) {
                                    (P.return = d.return), (ue = P);
                                    break e;
                                }
                                ue = d.return;
                            }
                    }
                    var C = e.current;
                    for (ue = C; ue !== null; ) {
                        m = ue;
                        var R = m.child;
                        if ((m.subtreeFlags & 2064) !== 0 && R !== null) (R.return = m), (ue = R);
                        else
                            e: for (m = C; ue !== null; ) {
                                if (((x = ue), (x.flags & 2048) !== 0))
                                    try {
                                        switch (x.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Fi(9, x);
                                        }
                                    } catch (me) {
                                        tt(x, x.return, me);
                                    }
                                if (x === m) {
                                    ue = null;
                                    break e;
                                }
                                var Y = x.sibling;
                                if (Y !== null) {
                                    (Y.return = x.return), (ue = Y);
                                    break e;
                                }
                                ue = x.return;
                            }
                    }
                    if (((ze = c), Jn(), mn && typeof mn.onPostCommitFiberRoot == "function"))
                        try {
                            mn.onPostCommitFiberRoot(qo, e);
                        } catch {}
                    a = !0;
                }
                return a;
            } finally {
                (Be = o), (Qt.transition = t);
            }
        }
        return !1;
    }
    function cp(e, t, o) {
        (t = fs(o, t)), (t = Nf(e, t, 1)), (e = tr(e, t, 1)), (t = Ct()), e !== null && (Fs(e, 1, t), Lt(e, t));
    }
    function tt(e, t, o) {
        if (e.tag === 3) cp(e, e, o);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    cp(t, e, o);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == "function" ||
                        (typeof a.componentDidCatch == "function" && (rr === null || !rr.has(a)))
                    ) {
                        (e = fs(o, e)),
                            (e = Pf(t, e, 1)),
                            (t = tr(t, e, 1)),
                            (e = Ct()),
                            t !== null && (Fs(t, 1, e), Lt(t, e));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function av(e, t, o) {
        var a = e.pingCache;
        a !== null && a.delete(t),
            (t = Ct()),
            (e.pingedLanes |= e.suspendedLanes & o),
            pt === e &&
                (gt & o) === o &&
                (lt === 4 || (lt === 3 && (gt & 130023424) === gt && 500 > nt() - wu) ? Rr(e, 0) : (xu |= o)),
            Lt(e, t);
    }
    function dp(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? (t = 1) : ((t = Jo), (Jo <<= 1), (Jo & 130023424) === 0 && (Jo = 4194304)));
        var o = Ct();
        (e = On(e, t)), e !== null && (Fs(e, t, o), Lt(e, o));
    }
    function lv(e) {
        var t = e.memoizedState,
            o = 0;
        t !== null && (o = t.retryLane), dp(e, o);
    }
    function uv(e, t) {
        var o = 0;
        switch (e.tag) {
            case 13:
                var a = e.stateNode,
                    c = e.memoizedState;
                c !== null && (o = c.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            default:
                throw Error(s(314));
        }
        a !== null && a.delete(t), dp(e, o);
    }
    var fp;
    fp = function (e, t, o) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Rt.current) At = !0;
            else {
                if ((e.lanes & o) === 0 && (t.flags & 128) === 0) return (At = !1), Gy(e, t, o);
                At = (e.flags & 131072) !== 0;
            }
        else (At = !1), Ye && (t.flags & 1048576) !== 0 && Wd(t, _i, t.index);
        switch (((t.lanes = 0), t.tag)) {
            case 2:
                var a = t.type;
                Di(e, t), (e = t.pendingProps);
                var c = ss(t, vt.current);
                cs(t, o), (c = ql(null, t, a, e, c, o));
                var d = Xl();
                return (
                    (t.flags |= 1),
                    typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0
                        ? ((t.tag = 1),
                          (t.memoizedState = null),
                          (t.updateQueue = null),
                          jt(a) ? ((d = !0), vi(t)) : (d = !1),
                          (t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null),
                          Wl(t),
                          (c.updater = Li),
                          (t.stateNode = c),
                          (c._reactInternals = t),
                          su(t, a, e, o),
                          (t = lu(null, t, a, !0, d, o)))
                        : ((t.tag = 0), Ye && d && Ll(t), Et(null, t, c, o), (t = t.child)),
                    t
                );
            case 16:
                a = t.elementType;
                e: {
                    switch (
                        (Di(e, t),
                        (e = t.pendingProps),
                        (c = a._init),
                        (a = c(a._payload)),
                        (t.type = a),
                        (c = t.tag = dv(a)),
                        (e = en(a, e)),
                        c)
                    ) {
                        case 0:
                            t = au(null, t, a, e, o);
                            break e;
                        case 1:
                            t = Ff(null, t, a, e, o);
                            break e;
                        case 11:
                            t = Of(null, t, a, e, o);
                            break e;
                        case 14:
                            t = Lf(null, t, a, en(a.type, e), o);
                            break e;
                    }
                    throw Error(s(306, a, ""));
                }
                return t;
            case 0:
                return (a = t.type), (c = t.pendingProps), (c = t.elementType === a ? c : en(a, c)), au(e, t, a, c, o);
            case 1:
                return (a = t.type), (c = t.pendingProps), (c = t.elementType === a ? c : en(a, c)), Ff(e, t, a, c, o);
            case 3:
                e: {
                    if ((zf(t), e === null)) throw Error(s(387));
                    (a = t.pendingProps), (d = t.memoizedState), (c = d.element), Jd(e, t), Ti(t, a, null, o);
                    var m = t.memoizedState;
                    if (((a = m.element), d.isDehydrated))
                        if (
                            ((d = {
                                element: a,
                                isDehydrated: !1,
                                cache: m.cache,
                                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                                transitions: m.transitions,
                            }),
                            (t.updateQueue.baseState = d),
                            (t.memoizedState = d),
                            t.flags & 256)
                        ) {
                            (c = fs(Error(s(423)), t)), (t = Vf(e, t, a, o, c));
                            break e;
                        } else if (a !== c) {
                            (c = fs(Error(s(424)), t)), (t = Vf(e, t, a, o, c));
                            break e;
                        } else
                            for (
                                Ft = Gn(t.stateNode.containerInfo.firstChild),
                                    It = t,
                                    Ye = !0,
                                    Jt = null,
                                    o = qd(t, null, a, o),
                                    t.child = o;
                                o;

                            )
                                (o.flags = (o.flags & -3) | 4096), (o = o.sibling);
                    else {
                        if ((as(), a === c)) {
                            t = Mn(e, t, o);
                            break e;
                        }
                        Et(e, t, a, o);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return (
                    nf(t),
                    e === null && Il(t),
                    (a = t.type),
                    (c = t.pendingProps),
                    (d = e !== null ? e.memoizedProps : null),
                    (m = c.children),
                    Nl(a, c) ? (m = null) : d !== null && Nl(a, d) && (t.flags |= 32),
                    If(e, t),
                    Et(e, t, m, o),
                    t.child
                );
            case 6:
                return e === null && Il(t), null;
            case 13:
                return Uf(e, t, o);
            case 4:
                return (
                    Zl(t, t.stateNode.containerInfo),
                    (a = t.pendingProps),
                    e === null ? (t.child = ls(t, null, a, o)) : Et(e, t, a, o),
                    t.child
                );
            case 11:
                return (a = t.type), (c = t.pendingProps), (c = t.elementType === a ? c : en(a, c)), Of(e, t, a, c, o);
            case 7:
                return Et(e, t, t.pendingProps, o), t.child;
            case 8:
                return Et(e, t, t.pendingProps.children, o), t.child;
            case 12:
                return Et(e, t, t.pendingProps.children, o), t.child;
            case 10:
                e: {
                    if (
                        ((a = t.type._context),
                        (c = t.pendingProps),
                        (d = t.memoizedProps),
                        (m = c.value),
                        Ze(Ei, a._currentValue),
                        (a._currentValue = m),
                        d !== null)
                    )
                        if (Xt(d.value, m)) {
                            if (d.children === c.children && !Rt.current) {
                                t = Mn(e, t, o);
                                break e;
                            }
                        } else
                            for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                                var x = d.dependencies;
                                if (x !== null) {
                                    m = d.child;
                                    for (var S = x.firstContext; S !== null; ) {
                                        if (S.context === a) {
                                            if (d.tag === 1) {
                                                (S = Ln(-1, o & -o)), (S.tag = 2);
                                                var O = d.updateQueue;
                                                if (O !== null) {
                                                    O = O.shared;
                                                    var B = O.pending;
                                                    B === null ? (S.next = S) : ((S.next = B.next), (B.next = S)),
                                                        (O.pending = S);
                                                }
                                            }
                                            (d.lanes |= o),
                                                (S = d.alternate),
                                                S !== null && (S.lanes |= o),
                                                $l(d.return, o, t),
                                                (x.lanes |= o);
                                            break;
                                        }
                                        S = S.next;
                                    }
                                } else if (d.tag === 10) m = d.type === t.type ? null : d.child;
                                else if (d.tag === 18) {
                                    if (((m = d.return), m === null)) throw Error(s(341));
                                    (m.lanes |= o),
                                        (x = m.alternate),
                                        x !== null && (x.lanes |= o),
                                        $l(m, o, t),
                                        (m = d.sibling);
                                } else m = d.child;
                                if (m !== null) m.return = d;
                                else
                                    for (m = d; m !== null; ) {
                                        if (m === t) {
                                            m = null;
                                            break;
                                        }
                                        if (((d = m.sibling), d !== null)) {
                                            (d.return = m.return), (m = d);
                                            break;
                                        }
                                        m = m.return;
                                    }
                                d = m;
                            }
                    Et(e, t, c.children, o), (t = t.child);
                }
                return t;
            case 9:
                return (
                    (c = t.type),
                    (a = t.pendingProps.children),
                    cs(t, o),
                    (c = Ht(c)),
                    (a = a(c)),
                    (t.flags |= 1),
                    Et(e, t, a, o),
                    t.child
                );
            case 14:
                return (a = t.type), (c = en(a, t.pendingProps)), (c = en(a.type, c)), Lf(e, t, a, c, o);
            case 15:
                return Mf(e, t, t.type, t.pendingProps, o);
            case 17:
                return (
                    (a = t.type),
                    (c = t.pendingProps),
                    (c = t.elementType === a ? c : en(a, c)),
                    Di(e, t),
                    (t.tag = 1),
                    jt(a) ? ((e = !0), vi(t)) : (e = !1),
                    cs(t, o),
                    bf(t, a, c),
                    su(t, a, c, o),
                    lu(null, t, a, !0, e, o)
                );
            case 19:
                return Bf(e, t, o);
            case 22:
                return Df(e, t, o);
        }
        throw Error(s(156, t.tag));
    };
    function pp(e, t) {
        return Zc(e, t);
    }
    function cv(e, t, o, a) {
        (this.tag = e),
            (this.key = o),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function Yt(e, t, o, a) {
        return new cv(e, t, o, a);
    }
    function Nu(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function dv(e) {
        if (typeof e == "function") return Nu(e) ? 1 : 0;
        if (e != null) {
            if (((e = e.$$typeof), e === G)) return 11;
            if (e === ve) return 14;
        }
        return 2;
    }
    function ar(e, t) {
        var o = e.alternate;
        return (
            o === null
                ? ((o = Yt(e.tag, t, e.key, e.mode)),
                  (o.elementType = e.elementType),
                  (o.type = e.type),
                  (o.stateNode = e.stateNode),
                  (o.alternate = e),
                  (e.alternate = o))
                : ((o.pendingProps = t), (o.type = e.type), (o.flags = 0), (o.subtreeFlags = 0), (o.deletions = null)),
            (o.flags = e.flags & 14680064),
            (o.childLanes = e.childLanes),
            (o.lanes = e.lanes),
            (o.child = e.child),
            (o.memoizedProps = e.memoizedProps),
            (o.memoizedState = e.memoizedState),
            (o.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (o.sibling = e.sibling),
            (o.index = e.index),
            (o.ref = e.ref),
            o
        );
    }
    function Ki(e, t, o, a, c, d) {
        var m = 2;
        if (((a = e), typeof e == "function")) Nu(e) && (m = 1);
        else if (typeof e == "string") m = 5;
        else
            e: switch (e) {
                case ee:
                    return Ar(o.children, c, d, t);
                case Se:
                    (m = 8), (c |= 8);
                    break;
                case Ee:
                    return (e = Yt(12, o, t, c | 2)), (e.elementType = Ee), (e.lanes = d), e;
                case re:
                    return (e = Yt(13, o, t, c)), (e.elementType = re), (e.lanes = d), e;
                case K:
                    return (e = Yt(19, o, t, c)), (e.elementType = K), (e.lanes = d), e;
                case pe:
                    return Qi(o, c, d, t);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case _e:
                                m = 10;
                                break e;
                            case be:
                                m = 9;
                                break e;
                            case G:
                                m = 11;
                                break e;
                            case ve:
                                m = 14;
                                break e;
                            case fe:
                                (m = 16), (a = null);
                                break e;
                        }
                    throw Error(s(130, e == null ? e : typeof e, ""));
            }
        return (t = Yt(m, o, t, c)), (t.elementType = e), (t.type = a), (t.lanes = d), t;
    }
    function Ar(e, t, o, a) {
        return (e = Yt(7, e, a, t)), (e.lanes = o), e;
    }
    function Qi(e, t, o, a) {
        return (e = Yt(22, e, a, t)), (e.elementType = pe), (e.lanes = o), (e.stateNode = { isHidden: !1 }), e;
    }
    function Pu(e, t, o) {
        return (e = Yt(6, e, null, t)), (e.lanes = o), e;
    }
    function Ru(e, t, o) {
        return (
            (t = Yt(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = o),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
        );
    }
    function fv(e, t, o, a, c) {
        (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = rl(0)),
            (this.expirationTimes = rl(-1)),
            (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = rl(0)),
            (this.identifierPrefix = a),
            (this.onRecoverableError = c),
            (this.mutableSourceEagerHydrationData = null);
    }
    function ju(e, t, o, a, c, d, m, x, S) {
        return (
            (e = new fv(e, t, o, x, S)),
            t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
            (d = Yt(3, null, null, t)),
            (e.current = d),
            (d.stateNode = e),
            (d.memoizedState = {
                element: a,
                isDehydrated: o,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            Wl(d),
            e
        );
    }
    function pv(e, t, o) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: se, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: o };
    }
    function mp(e) {
        if (!e) return Xn;
        e = e._reactInternals;
        e: {
            if (wr(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (jt(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            } while (t !== null);
            throw Error(s(171));
        }
        if (e.tag === 1) {
            var o = e.type;
            if (jt(o)) return Ud(e, o, t);
        }
        return t;
    }
    function hp(e, t, o, a, c, d, m, x, S) {
        return (
            (e = ju(o, a, !0, e, c, d, m, x, S)),
            (e.context = mp(null)),
            (o = e.current),
            (a = Ct()),
            (c = or(o)),
            (d = Ln(a, c)),
            (d.callback = t ?? null),
            tr(o, d, c),
            (e.current.lanes = c),
            Fs(e, c, a),
            Lt(e, a),
            e
        );
    }
    function Yi(e, t, o, a) {
        var c = t.current,
            d = Ct(),
            m = or(c);
        return (
            (o = mp(o)),
            t.context === null ? (t.context = o) : (t.pendingContext = o),
            (t = Ln(d, m)),
            (t.payload = { element: e }),
            (a = a === void 0 ? null : a),
            a !== null && (t.callback = a),
            (e = tr(c, t, m)),
            e !== null && (rn(e, c, m, d), bi(e, c, m)),
            m
        );
    }
    function Gi(e) {
        return (e = e.current), e.child ? (e.child.tag === 5, e.child.stateNode) : null;
    }
    function gp(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var o = e.retryLane;
            e.retryLane = o !== 0 && o < t ? o : t;
        }
    }
    function Au(e, t) {
        gp(e, t), (e = e.alternate) && gp(e, t);
    }
    function mv() {
        return null;
    }
    var yp =
        typeof reportError == "function"
            ? reportError
            : function (e) {
                  console.error(e);
              };
    function Ou(e) {
        this._internalRoot = e;
    }
    (qi.prototype.render = Ou.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(s(409));
            Yi(e, t, null, null);
        }),
        (qi.prototype.unmount = Ou.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    Pr(function () {
                        Yi(null, e, null, null);
                    }),
                        (t[Pn] = null);
                }
            });
    function qi(e) {
        this._internalRoot = e;
    }
    qi.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Jc();
            e = { blockedOn: null, target: e, priority: t };
            for (var o = 0; o < Kn.length && t !== 0 && t < Kn[o].priority; o++);
            Kn.splice(o, 0, e), o === 0 && nd(e);
        }
    };
    function Lu(e) {
        return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function Xi(e) {
        return !(
            !e ||
            (e.nodeType !== 1 &&
                e.nodeType !== 9 &&
                e.nodeType !== 11 &&
                (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
        );
    }
    function vp() {}
    function hv(e, t, o, a, c) {
        if (c) {
            if (typeof a == "function") {
                var d = a;
                a = function () {
                    var O = Gi(m);
                    d.call(O);
                };
            }
            var m = hp(t, a, e, 0, null, !1, !1, "", vp);
            return (e._reactRootContainer = m), (e[Pn] = m.current), Xs(e.nodeType === 8 ? e.parentNode : e), Pr(), m;
        }
        for (; (c = e.lastChild); ) e.removeChild(c);
        if (typeof a == "function") {
            var x = a;
            a = function () {
                var O = Gi(S);
                x.call(O);
            };
        }
        var S = ju(e, 0, !1, null, null, !1, !1, "", vp);
        return (
            (e._reactRootContainer = S),
            (e[Pn] = S.current),
            Xs(e.nodeType === 8 ? e.parentNode : e),
            Pr(function () {
                Yi(t, S, o, a);
            }),
            S
        );
    }
    function Ji(e, t, o, a, c) {
        var d = o._reactRootContainer;
        if (d) {
            var m = d;
            if (typeof c == "function") {
                var x = c;
                c = function () {
                    var S = Gi(m);
                    x.call(S);
                };
            }
            Yi(t, m, e, c);
        } else m = hv(o, t, e, c, a);
        return Gi(m);
    }
    (qc = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var o = Is(t.pendingLanes);
                    o !== 0 && (sl(t, o | 1), Lt(t, nt()), (ze & 6) === 0 && ((hs = nt() + 500), Jn()));
                }
                break;
            case 13:
                Pr(function () {
                    var a = On(e, 1);
                    if (a !== null) {
                        var c = Ct();
                        rn(a, e, 1, c);
                    }
                }),
                    Au(e, 1);
        }
    }),
        (ol = function (e) {
            if (e.tag === 13) {
                var t = On(e, 134217728);
                if (t !== null) {
                    var o = Ct();
                    rn(t, e, 134217728, o);
                }
                Au(e, 134217728);
            }
        }),
        (Xc = function (e) {
            if (e.tag === 13) {
                var t = or(e),
                    o = On(e, t);
                if (o !== null) {
                    var a = Ct();
                    rn(o, e, t, a);
                }
                Au(e, t);
            }
        }),
        (Jc = function () {
            return Be;
        }),
        (ed = function (e, t) {
            var o = Be;
            try {
                return (Be = e), t();
            } finally {
                Be = o;
            }
        }),
        (qa = function (e, t, o) {
            switch (t) {
                case "input":
                    if ((Ur(e, o), (t = o.name), o.type === "radio" && t != null)) {
                        for (o = e; o.parentNode; ) o = o.parentNode;
                        for (
                            o = o.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                            t < o.length;
                            t++
                        ) {
                            var a = o[t];
                            if (a !== e && a.form === e.form) {
                                var c = gi(a);
                                if (!c) throw Error(s(90));
                                xr(a), Ur(a, c);
                            }
                        }
                    }
                    break;
                case "textarea":
                    I(e, o);
                    break;
                case "select":
                    (t = o.value), t != null && Nn(e, !!o.multiple, t, !1);
            }
        }),
        (Fc = Cu),
        (zc = Pr);
    var gv = { usingClientEntryPoint: !1, Events: [to, ns, gi, Dc, Ic, Cu] },
        go = { findFiberByHostInstance: _r, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
        yv = {
            bundleType: go.bundleType,
            version: go.version,
            rendererPackageName: go.rendererPackageName,
            rendererConfig: go.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: V.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return (e = Bc(e)), e === null ? null : e.stateNode;
            },
            findFiberByHostInstance: go.findFiberByHostInstance || mv,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ea = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ea.isDisabled && ea.supportsFiber)
            try {
                (qo = ea.inject(yv)), (mn = ea);
            } catch {}
    }
    return (
        (Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gv),
        (Mt.createPortal = function (e, t) {
            var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!Lu(t)) throw Error(s(200));
            return pv(e, t, null, o);
        }),
        (Mt.createRoot = function (e, t) {
            if (!Lu(e)) throw Error(s(299));
            var o = !1,
                a = "",
                c = yp;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (o = !0),
                    t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
                    t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
                (t = ju(e, 1, !1, null, null, o, !1, a, c)),
                (e[Pn] = t.current),
                Xs(e.nodeType === 8 ? e.parentNode : e),
                new Ou(t)
            );
        }),
        (Mt.findDOMNode = function (e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == "function"
                    ? Error(s(188))
                    : ((e = Object.keys(e).join(",")), Error(s(268, e)));
            return (e = Bc(t)), (e = e === null ? null : e.stateNode), e;
        }),
        (Mt.flushSync = function (e) {
            return Pr(e);
        }),
        (Mt.hydrate = function (e, t, o) {
            if (!Xi(t)) throw Error(s(200));
            return Ji(null, e, t, !0, o);
        }),
        (Mt.hydrateRoot = function (e, t, o) {
            if (!Lu(e)) throw Error(s(405));
            var a = (o != null && o.hydratedSources) || null,
                c = !1,
                d = "",
                m = yp;
            if (
                (o != null &&
                    (o.unstable_strictMode === !0 && (c = !0),
                    o.identifierPrefix !== void 0 && (d = o.identifierPrefix),
                    o.onRecoverableError !== void 0 && (m = o.onRecoverableError)),
                (t = hp(t, null, e, 1, o ?? null, c, !1, d, m)),
                (e[Pn] = t.current),
                Xs(e),
                a)
            )
                for (e = 0; e < a.length; e++)
                    (o = a[e]),
                        (c = o._getVersion),
                        (c = c(o._source)),
                        t.mutableSourceEagerHydrationData == null
                            ? (t.mutableSourceEagerHydrationData = [o, c])
                            : t.mutableSourceEagerHydrationData.push(o, c);
            return new qi(t);
        }),
        (Mt.render = function (e, t, o) {
            if (!Xi(t)) throw Error(s(200));
            return Ji(null, e, t, !1, o);
        }),
        (Mt.unmountComponentAtNode = function (e) {
            if (!Xi(e)) throw Error(s(40));
            return e._reactRootContainer
                ? (Pr(function () {
                      Ji(null, null, e, !1, function () {
                          (e._reactRootContainer = null), (e[Pn] = null);
                      });
                  }),
                  !0)
                : !1;
        }),
        (Mt.unstable_batchedUpdates = Cu),
        (Mt.unstable_renderSubtreeIntoContainer = function (e, t, o, a) {
            if (!Xi(o)) throw Error(s(200));
            if (e == null || e._reactInternals === void 0) throw Error(s(38));
            return Ji(e, t, o, !1, a);
        }),
        (Mt.version = "18.3.1-next-f1338f8080-20240426"),
        Mt
    );
}
var bp;
function vm() {
    if (bp) return Iu.exports;
    bp = 1;
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (r) {
                console.error(r);
            }
    }
    return n(), (Iu.exports = Cv()), Iu.exports;
}
var Tp;
function bv() {
    if (Tp) return ta;
    Tp = 1;
    var n = vm();
    return (ta.createRoot = n.createRoot), (ta.hydrateRoot = n.hydrateRoot), ta;
}
var Tv = bv();
function Nv(n, r) {
    if (n instanceof RegExp) return { keys: !1, pattern: n };
    var s,
        i,
        l,
        u,
        f = [],
        p = "",
        g = n.split("/");
    for (g[0] || g.shift(); (l = g.shift()); )
        (s = l[0]),
            s === "*"
                ? (f.push(s), (p += l[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
                : s === ":"
                  ? ((i = l.indexOf("?", 1)),
                    (u = l.indexOf(".", 1)),
                    f.push(l.substring(1, ~i ? i : ~u ? u : l.length)),
                    (p += ~i && !~u ? "(?:/([^/]+?))?" : "/([^/]+?)"),
                    ~u && (p += (~i ? "?" : "") + "\\" + l.substring(u)))
                  : (p += "/" + l);
    return { keys: f, pattern: new RegExp("^" + p + (r ? "(?=$|/)" : "/?$"), "i") };
}
var k = Aa();
const Ne = ym(k),
    Pv = xv({ __proto__: null, default: Ne }, [k]);
var Vu = { exports: {} },
    Uu = {};
var Np;
function Rv() {
    if (Np) return Uu;
    Np = 1;
    var n = Aa();
    function r(w, E) {
        return (w === E && (w !== 0 || 1 / w === 1 / E)) || (w !== w && E !== E);
    }
    var s = typeof Object.is == "function" ? Object.is : r,
        i = n.useState,
        l = n.useEffect,
        u = n.useLayoutEffect,
        f = n.useDebugValue;
    function p(w, E) {
        var A = E(),
            M = i({ inst: { value: A, getSnapshot: E } }),
            N = M[0].inst,
            T = M[1];
        return (
            u(
                function () {
                    (N.value = A), (N.getSnapshot = E), g(N) && T({ inst: N });
                },
                [w, A, E]
            ),
            l(
                function () {
                    return (
                        g(N) && T({ inst: N }),
                        w(function () {
                            g(N) && T({ inst: N });
                        })
                    );
                },
                [w]
            ),
            f(A),
            A
        );
    }
    function g(w) {
        var E = w.getSnapshot;
        w = w.value;
        try {
            var A = E();
            return !s(w, A);
        } catch {
            return !0;
        }
    }
    function h(w, E) {
        return E();
    }
    var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : p;
    return (Uu.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : v), Uu;
}
var Pp;
function jv() {
    return Pp || ((Pp = 1), (Vu.exports = Rv())), Vu.exports;
}
var Av = jv();
const Ov = Pv.useInsertionEffect,
    Lv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Mv = Lv ? k.useLayoutEffect : k.useEffect,
    Dv = Ov || Mv,
    xm = (n) => {
        const r = k.useRef([n, (...s) => r[0](...s)]).current;
        return (
            Dv(() => {
                r[0] = n;
            }),
            r[1]
        );
    },
    Iv = "popstate",
    fc = "pushState",
    pc = "replaceState",
    Fv = "hashchange",
    Rp = [Iv, fc, pc, Fv],
    zv = (n) => {
        for (const r of Rp) addEventListener(r, n);
        return () => {
            for (const r of Rp) removeEventListener(r, n);
        };
    },
    wm = (n, r) => Av.useSyncExternalStore(zv, n, r),
    Vv = () => location.search,
    Uv = ({ ssrSearch: n = "" } = {}) => wm(Vv, () => n),
    jp = () => location.pathname,
    $v = ({ ssrPath: n } = {}) => wm(jp, n ? () => n : jp),
    Bv = (n, { replace: r = !1, state: s = null } = {}) => history[r ? pc : fc](s, "", n),
    Wv = (n = {}) => [$v(n), Bv],
    Ap = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Ap] > "u") {
    for (const n of [fc, pc]) {
        const r = history[n];
        history[n] = function () {
            const s = r.apply(this, arguments),
                i = new Event(n);
            return (i.arguments = arguments), dispatchEvent(i), s;
        };
    }
    Object.defineProperty(window, Ap, { value: !0 });
}
const Zv = (n, r) => (r.toLowerCase().indexOf(n.toLowerCase()) ? "~" + r : r.slice(n.length) || "/"),
    _m = (n = "") => (n === "/" ? "" : n),
    Hv = (n, r) => (n[0] === "~" ? n.slice(1) : _m(r) + n),
    Kv = (n = "", r) => Zv(Op(_m(n)), Op(r)),
    Op = (n) => {
        try {
            return decodeURI(n);
        } catch {
            return n;
        }
    },
    km = { hook: Wv, searchHook: Uv, parser: Nv, base: "", ssrPath: void 0, ssrSearch: void 0, hrefs: (n) => n },
    Sm = k.createContext(km),
    $o = () => k.useContext(Sm),
    Em = {},
    Cm = k.createContext(Em),
    Qv = () => k.useContext(Cm),
    Oa = (n) => {
        const [r, s] = n.hook(n);
        return [Kv(n.base, r), xm((i, l) => s(Hv(i, n.base), l))];
    },
    Yv = () => Oa($o()),
    bm = (n, r, s, i) => {
        const { pattern: l, keys: u } = r instanceof RegExp ? { keys: !1, pattern: r } : n(r || "*", i),
            f = l.exec(s) || [],
            [p, ...g] = f;
        return p !== void 0
            ? [
                  !0,
                  (() => {
                      const h = u !== !1 ? Object.fromEntries(u.map((w, E) => [w, g[E]])) : f.groups;
                      let v = { ...g };
                      return h && Object.assign(v, h), v;
                  })(),
                  ...(i ? [p] : []),
              ]
            : [!1, null];
    },
    Gv = ({ children: n, ...r }) => {
        const s = $o(),
            i = r.hook ? km : s;
        let l = i;
        const [u, f] = r.ssrPath?.split("?") ?? [];
        f && ((r.ssrSearch = f), (r.ssrPath = u)), (r.hrefs = r.hrefs ?? r.hook?.hrefs);
        let p = k.useRef({}),
            g = p.current,
            h = g;
        for (let v in i) {
            const w = v === "base" ? i[v] + (r[v] || "") : r[v] || i[v];
            g === h && w !== h[v] && (p.current = h = { ...h }), (h[v] = w), w !== i[v] && (l = h);
        }
        return k.createElement(Sm.Provider, { value: l, children: n });
    },
    Lp = ({ children: n, component: r }, s) =>
        r ? k.createElement(r, { params: s }) : typeof n == "function" ? n(s) : n,
    qv = (n) => {
        let r = k.useRef(Em),
            s = r.current;
        for (const i in n) n[i] !== s[i] && (s = n);
        return Object.keys(n).length === 0 && (s = n), (r.current = s);
    },
    Mp = ({ path: n, nest: r, match: s, ...i }) => {
        const l = $o(),
            [u] = Oa(l),
            [f, p, g] = s ?? bm(l.parser, n, u, r),
            h = qv({ ...Qv(), ...p });
        if (!f) return null;
        const v = g ? k.createElement(Gv, { base: g }, Lp(i, h)) : Lp(i, h);
        return k.createElement(Cm.Provider, { value: h, children: v });
    },
    Dp = k.forwardRef((n, r) => {
        const s = $o(),
            [i, l] = Oa(s),
            {
                to: u = "",
                href: f = u,
                onClick: p,
                asChild: g,
                children: h,
                className: v,
                replace: w,
                state: E,
                ...A
            } = n,
            M = xm((T) => {
                T.ctrlKey ||
                    T.metaKey ||
                    T.altKey ||
                    T.shiftKey ||
                    T.button !== 0 ||
                    (p?.(T), T.defaultPrevented || (T.preventDefault(), l(f, n)));
            }),
            N = s.hrefs(f[0] === "~" ? f.slice(1) : s.base + f, s);
        return g && k.isValidElement(h)
            ? k.cloneElement(h, { onClick: M, href: N })
            : k.createElement("a", {
                  ...A,
                  onClick: M,
                  href: N,
                  className: v?.call ? v(i === f) : v,
                  children: h,
                  ref: r,
              });
    }),
    Tm = (n) => (Array.isArray(n) ? n.flatMap((r) => Tm(r && r.type === k.Fragment ? r.props.children : r)) : [n]),
    Xv = ({ children: n, location: r }) => {
        const s = $o(),
            [i] = Oa(s);
        for (const l of Tm(n)) {
            let u = 0;
            if (k.isValidElement(l) && (u = bm(s.parser, l.props.path, r || i, l.props.nest))[0])
                return k.cloneElement(l, { match: u });
        }
        return null;
    },
    Jv = 1,
    ex = 1e6;
let $u = 0;
function tx() {
    return ($u = ($u + 1) % Number.MAX_SAFE_INTEGER), $u.toString();
}
const Bu = new Map(),
    Ip = (n) => {
        if (Bu.has(n)) return;
        const r = setTimeout(() => {
            Bu.delete(n), Eo({ type: "REMOVE_TOAST", toastId: n });
        }, ex);
        Bu.set(n, r);
    },
    nx = (n, r) => {
        switch (r.type) {
            case "ADD_TOAST":
                return { ...n, toasts: [r.toast, ...n.toasts].slice(0, Jv) };
            case "UPDATE_TOAST":
                return { ...n, toasts: n.toasts.map((s) => (s.id === r.toast.id ? { ...s, ...r.toast } : s)) };
            case "DISMISS_TOAST": {
                const { toastId: s } = r;
                return (
                    s
                        ? Ip(s)
                        : n.toasts.forEach((i) => {
                              Ip(i.id);
                          }),
                    { ...n, toasts: n.toasts.map((i) => (i.id === s || s === void 0 ? { ...i, open: !1 } : i)) }
                );
            }
            case "REMOVE_TOAST":
                return r.toastId === void 0
                    ? { ...n, toasts: [] }
                    : { ...n, toasts: n.toasts.filter((s) => s.id !== r.toastId) };
        }
    },
    la = [];
let ua = { toasts: [] };
function Eo(n) {
    (ua = nx(ua, n)),
        la.forEach((r) => {
            r(ua);
        });
}
function rx({ ...n }) {
    const r = tx(),
        s = (l) => Eo({ type: "UPDATE_TOAST", toast: { ...l, id: r } }),
        i = () => Eo({ type: "DISMISS_TOAST", toastId: r });
    return (
        Eo({
            type: "ADD_TOAST",
            toast: {
                ...n,
                id: r,
                open: !0,
                onOpenChange: (l) => {
                    l || i();
                },
            },
        }),
        { id: r, dismiss: i, update: s }
    );
}
function Nm() {
    const [n, r] = k.useState(ua);
    return (
        k.useEffect(
            () => (
                la.push(r),
                () => {
                    const s = la.indexOf(r);
                    s > -1 && la.splice(s, 1);
                }
            ),
            [n]
        ),
        { ...n, toast: rx, dismiss: (s) => Eo({ type: "DISMISS_TOAST", toastId: s }) }
    );
}
var La = vm();
const sx = ym(La);
function ct(n, r, { checkForDefaultPrevented: s = !0 } = {}) {
    return function (l) {
        if ((n?.(l), s === !1 || !l.defaultPrevented)) return r?.(l);
    };
}
function Fp(n, r) {
    if (typeof n == "function") return n(r);
    n != null && (n.current = r);
}
function Pm(...n) {
    return (r) => {
        let s = !1;
        const i = n.map((l) => {
            const u = Fp(l, r);
            return !s && typeof u == "function" && (s = !0), u;
        });
        if (s)
            return () => {
                for (let l = 0; l < i.length; l++) {
                    const u = i[l];
                    typeof u == "function" ? u() : Fp(n[l], null);
                }
            };
    };
}
function un(...n) {
    return k.useCallback(Pm(...n), n);
}
function Ma(n, r = []) {
    let s = [];
    function i(u, f) {
        const p = k.createContext(f),
            g = s.length;
        s = [...s, f];
        const h = (w) => {
            const { scope: E, children: A, ...M } = w,
                N = E?.[n]?.[g] || p,
                T = k.useMemo(() => M, Object.values(M));
            return y.jsx(N.Provider, { value: T, children: A });
        };
        h.displayName = u + "Provider";
        function v(w, E) {
            const A = E?.[n]?.[g] || p,
                M = k.useContext(A);
            if (M) return M;
            if (f !== void 0) return f;
            throw new Error(`\`${w}\` must be used within \`${u}\``);
        }
        return [h, v];
    }
    const l = () => {
        const u = s.map((f) => k.createContext(f));
        return function (p) {
            const g = p?.[n] || u;
            return k.useMemo(() => ({ [`__scope${n}`]: { ...p, [n]: g } }), [p, g]);
        };
    };
    return (l.scopeName = n), [i, ox(l, ...r)];
}
function ox(...n) {
    const r = n[0];
    if (n.length === 1) return r;
    const s = () => {
        const i = n.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
        return function (u) {
            const f = i.reduce((p, { useScope: g, scopeName: h }) => {
                const w = g(u)[`__scope${h}`];
                return { ...p, ...w };
            }, {});
            return k.useMemo(() => ({ [`__scope${r.scopeName}`]: f }), [f]);
        };
    };
    return (s.scopeName = r.scopeName), s;
}
function ga(n) {
    const r = ix(n),
        s = k.forwardRef((i, l) => {
            const { children: u, ...f } = i,
                p = k.Children.toArray(u),
                g = p.find(lx);
            if (g) {
                const h = g.props.children,
                    v = p.map((w) =>
                        w === g
                            ? k.Children.count(h) > 1
                                ? k.Children.only(null)
                                : k.isValidElement(h)
                                  ? h.props.children
                                  : null
                            : w
                    );
                return y.jsx(r, { ...f, ref: l, children: k.isValidElement(h) ? k.cloneElement(h, void 0, v) : null });
            }
            return y.jsx(r, { ...f, ref: l, children: u });
        });
    return (s.displayName = `${n}.Slot`), s;
}
var Rm = ga("Slot");
function ix(n) {
    const r = k.forwardRef((s, i) => {
        const { children: l, ...u } = s;
        if (k.isValidElement(l)) {
            const f = cx(l),
                p = ux(u, l.props);
            return l.type !== k.Fragment && (p.ref = i ? Pm(i, f) : f), k.cloneElement(l, p);
        }
        return k.Children.count(l) > 1 ? k.Children.only(null) : null;
    });
    return (r.displayName = `${n}.SlotClone`), r;
}
var jm = Symbol("radix.slottable");
function ax(n) {
    const r = ({ children: s }) => y.jsx(y.Fragment, { children: s });
    return (r.displayName = `${n}.Slottable`), (r.__radixId = jm), r;
}
function lx(n) {
    return k.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === jm;
}
function ux(n, r) {
    const s = { ...r };
    for (const i in r) {
        const l = n[i],
            u = r[i];
        /^on[A-Z]/.test(i)
            ? l && u
                ? (s[i] = (...p) => {
                      u(...p), l(...p);
                  })
                : l && (s[i] = l)
            : i === "style"
              ? (s[i] = { ...l, ...u })
              : i === "className" && (s[i] = [l, u].filter(Boolean).join(" "));
    }
    return { ...n, ...s };
}
function cx(n) {
    let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
        s = r && "isReactWarning" in r && r.isReactWarning;
    return s
        ? n.ref
        : ((r = Object.getOwnPropertyDescriptor(n, "ref")?.get),
          (s = r && "isReactWarning" in r && r.isReactWarning),
          s ? n.props.ref : n.props.ref || n.ref);
}
function dx(n) {
    const r = n + "CollectionProvider",
        [s, i] = Ma(r),
        [l, u] = s(r, { collectionRef: { current: null }, itemMap: new Map() }),
        f = (N) => {
            const { scope: T, children: F } = N,
                L = Ne.useRef(null),
                $ = Ne.useRef(new Map()).current;
            return y.jsx(l, { scope: T, itemMap: $, collectionRef: L, children: F });
        };
    f.displayName = r;
    const p = n + "CollectionSlot",
        g = ga(p),
        h = Ne.forwardRef((N, T) => {
            const { scope: F, children: L } = N,
                $ = u(p, F),
                V = un(T, $.collectionRef);
            return y.jsx(g, { ref: V, children: L });
        });
    h.displayName = p;
    const v = n + "CollectionItemSlot",
        w = "data-radix-collection-item",
        E = ga(v),
        A = Ne.forwardRef((N, T) => {
            const { scope: F, children: L, ...$ } = N,
                V = Ne.useRef(null),
                H = un(T, V),
                se = u(v, F);
            return (
                Ne.useEffect(
                    () => (
                        se.itemMap.set(V, { ref: V, ...$ }),
                        () => {
                            se.itemMap.delete(V);
                        }
                    )
                ),
                y.jsx(E, { [w]: "", ref: H, children: L })
            );
        });
    A.displayName = v;
    function M(N) {
        const T = u(n + "CollectionConsumer", N);
        return Ne.useCallback(() => {
            const L = T.collectionRef.current;
            if (!L) return [];
            const $ = Array.from(L.querySelectorAll(`[${w}]`));
            return Array.from(T.itemMap.values()).sort(
                (se, ee) => $.indexOf(se.ref.current) - $.indexOf(ee.ref.current)
            );
        }, [T.collectionRef, T.itemMap]);
    }
    return [{ Provider: f, Slot: h, ItemSlot: A }, M, i];
}
var fx = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
    ],
    Pt = fx.reduce((n, r) => {
        const s = ga(`Primitive.${r}`),
            i = k.forwardRef((l, u) => {
                const { asChild: f, ...p } = l,
                    g = f ? s : r;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(g, { ...p, ref: u });
            });
        return (i.displayName = `Primitive.${r}`), { ...n, [r]: i };
    }, {});
function Am(n, r) {
    n && La.flushSync(() => n.dispatchEvent(r));
}
function Sn(n) {
    const r = k.useRef(n);
    return (
        k.useEffect(() => {
            r.current = n;
        }),
        k.useMemo(
            () =>
                (...s) =>
                    r.current?.(...s),
            []
        )
    );
}
function px(n, r = globalThis?.document) {
    const s = Sn(n);
    k.useEffect(() => {
        const i = (l) => {
            l.key === "Escape" && s(l);
        };
        return (
            r.addEventListener("keydown", i, { capture: !0 }),
            () => r.removeEventListener("keydown", i, { capture: !0 })
        );
    }, [s, r]);
}
var mx = "DismissableLayer",
    qu = "dismissableLayer.update",
    hx = "dismissableLayer.pointerDownOutside",
    gx = "dismissableLayer.focusOutside",
    zp,
    Om = k.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    mc = k.forwardRef((n, r) => {
        const {
                disableOutsidePointerEvents: s = !1,
                onEscapeKeyDown: i,
                onPointerDownOutside: l,
                onFocusOutside: u,
                onInteractOutside: f,
                onDismiss: p,
                ...g
            } = n,
            h = k.useContext(Om),
            [v, w] = k.useState(null),
            E = v?.ownerDocument ?? globalThis?.document,
            [, A] = k.useState({}),
            M = un(r, (ee) => w(ee)),
            N = Array.from(h.layers),
            [T] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
            F = N.indexOf(T),
            L = v ? N.indexOf(v) : -1,
            $ = h.layersWithOutsidePointerEventsDisabled.size > 0,
            V = L >= F,
            H = vx((ee) => {
                const Se = ee.target,
                    Ee = [...h.branches].some((_e) => _e.contains(Se));
                !V || Ee || (l?.(ee), f?.(ee), ee.defaultPrevented || p?.());
            }, E),
            se = xx((ee) => {
                const Se = ee.target;
                [...h.branches].some((_e) => _e.contains(Se)) || (u?.(ee), f?.(ee), ee.defaultPrevented || p?.());
            }, E);
        return (
            px((ee) => {
                L === h.layers.size - 1 && (i?.(ee), !ee.defaultPrevented && p && (ee.preventDefault(), p()));
            }, E),
            k.useEffect(() => {
                if (v)
                    return (
                        s &&
                            (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((zp = E.body.style.pointerEvents), (E.body.style.pointerEvents = "none")),
                            h.layersWithOutsidePointerEventsDisabled.add(v)),
                        h.layers.add(v),
                        Vp(),
                        () => {
                            s &&
                                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                (E.body.style.pointerEvents = zp);
                        }
                    );
            }, [v, E, s, h]),
            k.useEffect(
                () => () => {
                    v && (h.layers.delete(v), h.layersWithOutsidePointerEventsDisabled.delete(v), Vp());
                },
                [v, h]
            ),
            k.useEffect(() => {
                const ee = () => A({});
                return document.addEventListener(qu, ee), () => document.removeEventListener(qu, ee);
            }, []),
            y.jsx(Pt.div, {
                ...g,
                ref: M,
                style: { pointerEvents: $ ? (V ? "auto" : "none") : void 0, ...n.style },
                onFocusCapture: ct(n.onFocusCapture, se.onFocusCapture),
                onBlurCapture: ct(n.onBlurCapture, se.onBlurCapture),
                onPointerDownCapture: ct(n.onPointerDownCapture, H.onPointerDownCapture),
            })
        );
    });
mc.displayName = mx;
var yx = "DismissableLayerBranch",
    Lm = k.forwardRef((n, r) => {
        const s = k.useContext(Om),
            i = k.useRef(null),
            l = un(r, i);
        return (
            k.useEffect(() => {
                const u = i.current;
                if (u)
                    return (
                        s.branches.add(u),
                        () => {
                            s.branches.delete(u);
                        }
                    );
            }, [s.branches]),
            y.jsx(Pt.div, { ...n, ref: l })
        );
    });
Lm.displayName = yx;
function vx(n, r = globalThis?.document) {
    const s = Sn(n),
        i = k.useRef(!1),
        l = k.useRef(() => {});
    return (
        k.useEffect(() => {
            const u = (p) => {
                    if (p.target && !i.current) {
                        let g = function () {
                            Mm(hx, s, h, { discrete: !0 });
                        };
                        const h = { originalEvent: p };
                        p.pointerType === "touch"
                            ? (r.removeEventListener("click", l.current),
                              (l.current = g),
                              r.addEventListener("click", l.current, { once: !0 }))
                            : g();
                    } else r.removeEventListener("click", l.current);
                    i.current = !1;
                },
                f = window.setTimeout(() => {
                    r.addEventListener("pointerdown", u);
                }, 0);
            return () => {
                window.clearTimeout(f),
                    r.removeEventListener("pointerdown", u),
                    r.removeEventListener("click", l.current);
            };
        }, [r, s]),
        { onPointerDownCapture: () => (i.current = !0) }
    );
}
function xx(n, r = globalThis?.document) {
    const s = Sn(n),
        i = k.useRef(!1);
    return (
        k.useEffect(() => {
            const l = (u) => {
                u.target && !i.current && Mm(gx, s, { originalEvent: u }, { discrete: !1 });
            };
            return r.addEventListener("focusin", l), () => r.removeEventListener("focusin", l);
        }, [r, s]),
        { onFocusCapture: () => (i.current = !0), onBlurCapture: () => (i.current = !1) }
    );
}
function Vp() {
    const n = new CustomEvent(qu);
    document.dispatchEvent(n);
}
function Mm(n, r, s, { discrete: i }) {
    const l = s.originalEvent.target,
        u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: s });
    r && l.addEventListener(n, r, { once: !0 }), i ? Am(l, u) : l.dispatchEvent(u);
}
var wx = mc,
    _x = Lm,
    Mr = globalThis?.document ? k.useLayoutEffect : () => {},
    kx = "Portal",
    Dm = k.forwardRef((n, r) => {
        const { container: s, ...i } = n,
            [l, u] = k.useState(!1);
        Mr(() => u(!0), []);
        const f = s || (l && globalThis?.document?.body);
        return f ? sx.createPortal(y.jsx(Pt.div, { ...i, ref: r }), f) : null;
    });
Dm.displayName = kx;
function Sx(n, r) {
    return k.useReducer((s, i) => r[s][i] ?? s, n);
}
var hc = (n) => {
    const { present: r, children: s } = n,
        i = Ex(r),
        l = typeof s == "function" ? s({ present: i.isPresent }) : k.Children.only(s),
        u = un(i.ref, Cx(l));
    return typeof s == "function" || i.isPresent ? k.cloneElement(l, { ref: u }) : null;
};
hc.displayName = "Presence";
function Ex(n) {
    const [r, s] = k.useState(),
        i = k.useRef({}),
        l = k.useRef(n),
        u = k.useRef("none"),
        f = n ? "mounted" : "unmounted",
        [p, g] = Sx(f, {
            mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
        });
    return (
        k.useEffect(() => {
            const h = na(i.current);
            u.current = p === "mounted" ? h : "none";
        }, [p]),
        Mr(() => {
            const h = i.current,
                v = l.current;
            if (v !== n) {
                const E = u.current,
                    A = na(h);
                n
                    ? g("MOUNT")
                    : A === "none" || h?.display === "none"
                      ? g("UNMOUNT")
                      : g(v && E !== A ? "ANIMATION_OUT" : "UNMOUNT"),
                    (l.current = n);
            }
        }, [n, g]),
        Mr(() => {
            if (r) {
                let h;
                const v = r.ownerDocument.defaultView ?? window,
                    w = (A) => {
                        const N = na(i.current).includes(A.animationName);
                        if (A.target === r && N && (g("ANIMATION_END"), !l.current)) {
                            const T = r.style.animationFillMode;
                            (r.style.animationFillMode = "forwards"),
                                (h = v.setTimeout(() => {
                                    r.style.animationFillMode === "forwards" && (r.style.animationFillMode = T);
                                }));
                        }
                    },
                    E = (A) => {
                        A.target === r && (u.current = na(i.current));
                    };
                return (
                    r.addEventListener("animationstart", E),
                    r.addEventListener("animationcancel", w),
                    r.addEventListener("animationend", w),
                    () => {
                        v.clearTimeout(h),
                            r.removeEventListener("animationstart", E),
                            r.removeEventListener("animationcancel", w),
                            r.removeEventListener("animationend", w);
                    }
                );
            } else g("ANIMATION_END");
        }, [r, g]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(p),
            ref: k.useCallback((h) => {
                h && (i.current = getComputedStyle(h)), s(h);
            }, []),
        }
    );
}
function na(n) {
    return n?.animationName || "none";
}
function Cx(n) {
    let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
        s = r && "isReactWarning" in r && r.isReactWarning;
    return s
        ? n.ref
        : ((r = Object.getOwnPropertyDescriptor(n, "ref")?.get),
          (s = r && "isReactWarning" in r && r.isReactWarning),
          s ? n.props.ref : n.props.ref || n.ref);
}
function bx({ prop: n, defaultProp: r, onChange: s = () => {} }) {
    const [i, l] = Tx({ defaultProp: r, onChange: s }),
        u = n !== void 0,
        f = u ? n : i,
        p = Sn(s),
        g = k.useCallback(
            (h) => {
                if (u) {
                    const w = typeof h == "function" ? h(n) : h;
                    w !== n && p(w);
                } else l(h);
            },
            [u, n, l, p]
        );
    return [f, g];
}
function Tx({ defaultProp: n, onChange: r }) {
    const s = k.useState(n),
        [i] = s,
        l = k.useRef(i),
        u = Sn(r);
    return (
        k.useEffect(() => {
            l.current !== i && (u(i), (l.current = i));
        }, [i, l, u]),
        s
    );
}
var Nx = "VisuallyHidden",
    Da = k.forwardRef((n, r) =>
        y.jsx(Pt.span, {
            ...n,
            ref: r,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...n.style,
            },
        })
    );
Da.displayName = Nx;
var Px = Da,
    gc = "ToastProvider",
    [yc, Rx, jx] = dx("Toast"),
    [Im] = Ma("Toast", [jx]),
    [Ax, Ia] = Im(gc),
    Fm = (n) => {
        const {
                __scopeToast: r,
                label: s = "Notification",
                duration: i = 5e3,
                swipeDirection: l = "right",
                swipeThreshold: u = 50,
                children: f,
            } = n,
            [p, g] = k.useState(null),
            [h, v] = k.useState(0),
            w = k.useRef(!1),
            E = k.useRef(!1);
        return (
            s.trim() || console.error(`Invalid prop \`label\` supplied to \`${gc}\`. Expected non-empty \`string\`.`),
            y.jsx(yc.Provider, {
                scope: r,
                children: y.jsx(Ax, {
                    scope: r,
                    label: s,
                    duration: i,
                    swipeDirection: l,
                    swipeThreshold: u,
                    toastCount: h,
                    viewport: p,
                    onViewportChange: g,
                    onToastAdd: k.useCallback(() => v((A) => A + 1), []),
                    onToastRemove: k.useCallback(() => v((A) => A - 1), []),
                    isFocusedToastEscapeKeyDownRef: w,
                    isClosePausedRef: E,
                    children: f,
                }),
            })
        );
    };
Fm.displayName = gc;
var zm = "ToastViewport",
    Ox = ["F8"],
    Xu = "toast.viewportPause",
    Ju = "toast.viewportResume",
    Vm = k.forwardRef((n, r) => {
        const { __scopeToast: s, hotkey: i = Ox, label: l = "Notifications ({hotkey})", ...u } = n,
            f = Ia(zm, s),
            p = Rx(s),
            g = k.useRef(null),
            h = k.useRef(null),
            v = k.useRef(null),
            w = k.useRef(null),
            E = un(r, w, f.onViewportChange),
            A = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            M = f.toastCount > 0;
        k.useEffect(() => {
            const T = (F) => {
                i.length !== 0 && i.every(($) => F[$] || F.code === $) && w.current?.focus();
            };
            return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
        }, [i]),
            k.useEffect(() => {
                const T = g.current,
                    F = w.current;
                if (M && T && F) {
                    const L = () => {
                            if (!f.isClosePausedRef.current) {
                                const se = new CustomEvent(Xu);
                                F.dispatchEvent(se), (f.isClosePausedRef.current = !0);
                            }
                        },
                        $ = () => {
                            if (f.isClosePausedRef.current) {
                                const se = new CustomEvent(Ju);
                                F.dispatchEvent(se), (f.isClosePausedRef.current = !1);
                            }
                        },
                        V = (se) => {
                            !T.contains(se.relatedTarget) && $();
                        },
                        H = () => {
                            T.contains(document.activeElement) || $();
                        };
                    return (
                        T.addEventListener("focusin", L),
                        T.addEventListener("focusout", V),
                        T.addEventListener("pointermove", L),
                        T.addEventListener("pointerleave", H),
                        window.addEventListener("blur", L),
                        window.addEventListener("focus", $),
                        () => {
                            T.removeEventListener("focusin", L),
                                T.removeEventListener("focusout", V),
                                T.removeEventListener("pointermove", L),
                                T.removeEventListener("pointerleave", H),
                                window.removeEventListener("blur", L),
                                window.removeEventListener("focus", $);
                        }
                    );
                }
            }, [M, f.isClosePausedRef]);
        const N = k.useCallback(
            ({ tabbingDirection: T }) => {
                const L = p().map(($) => {
                    const V = $.ref.current,
                        H = [V, ...Hx(V)];
                    return T === "forwards" ? H : H.reverse();
                });
                return (T === "forwards" ? L.reverse() : L).flat();
            },
            [p]
        );
        return (
            k.useEffect(() => {
                const T = w.current;
                if (T) {
                    const F = (L) => {
                        const $ = L.altKey || L.ctrlKey || L.metaKey;
                        if (L.key === "Tab" && !$) {
                            const H = document.activeElement,
                                se = L.shiftKey;
                            if (L.target === T && se) {
                                h.current?.focus();
                                return;
                            }
                            const Ee = N({ tabbingDirection: se ? "backwards" : "forwards" }),
                                _e = Ee.findIndex((be) => be === H);
                            Wu(Ee.slice(_e + 1)) ? L.preventDefault() : se ? h.current?.focus() : v.current?.focus();
                        }
                    };
                    return T.addEventListener("keydown", F), () => T.removeEventListener("keydown", F);
                }
            }, [p, N]),
            y.jsxs(_x, {
                ref: g,
                role: "region",
                "aria-label": l.replace("{hotkey}", A),
                tabIndex: -1,
                style: { pointerEvents: M ? void 0 : "none" },
                children: [
                    M &&
                        y.jsx(ec, {
                            ref: h,
                            onFocusFromOutsideViewport: () => {
                                const T = N({ tabbingDirection: "forwards" });
                                Wu(T);
                            },
                        }),
                    y.jsx(yc.Slot, { scope: s, children: y.jsx(Pt.ol, { tabIndex: -1, ...u, ref: E }) }),
                    M &&
                        y.jsx(ec, {
                            ref: v,
                            onFocusFromOutsideViewport: () => {
                                const T = N({ tabbingDirection: "backwards" });
                                Wu(T);
                            },
                        }),
                ],
            })
        );
    });
Vm.displayName = zm;
var Um = "ToastFocusProxy",
    ec = k.forwardRef((n, r) => {
        const { __scopeToast: s, onFocusFromOutsideViewport: i, ...l } = n,
            u = Ia(Um, s);
        return y.jsx(Da, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...l,
            ref: r,
            style: { position: "fixed" },
            onFocus: (f) => {
                const p = f.relatedTarget;
                !u.viewport?.contains(p) && i();
            },
        });
    });
ec.displayName = Um;
var Fa = "Toast",
    Lx = "toast.swipeStart",
    Mx = "toast.swipeMove",
    Dx = "toast.swipeCancel",
    Ix = "toast.swipeEnd",
    $m = k.forwardRef((n, r) => {
        const { forceMount: s, open: i, defaultOpen: l, onOpenChange: u, ...f } = n,
            [p = !0, g] = bx({ prop: i, defaultProp: l, onChange: u });
        return y.jsx(hc, {
            present: s || p,
            children: y.jsx(Vx, {
                open: p,
                ...f,
                ref: r,
                onClose: () => g(!1),
                onPause: Sn(n.onPause),
                onResume: Sn(n.onResume),
                onSwipeStart: ct(n.onSwipeStart, (h) => {
                    h.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: ct(n.onSwipeMove, (h) => {
                    const { x: v, y: w } = h.detail.delta;
                    h.currentTarget.setAttribute("data-swipe", "move"),
                        h.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${v}px`),
                        h.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${w}px`);
                }),
                onSwipeCancel: ct(n.onSwipeCancel, (h) => {
                    h.currentTarget.setAttribute("data-swipe", "cancel"),
                        h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
                }),
                onSwipeEnd: ct(n.onSwipeEnd, (h) => {
                    const { x: v, y: w } = h.detail.delta;
                    h.currentTarget.setAttribute("data-swipe", "end"),
                        h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        h.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${v}px`),
                        h.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${w}px`),
                        g(!1);
                }),
            }),
        });
    });
$m.displayName = Fa;
var [Fx, zx] = Im(Fa, { onClose() {} }),
    Vx = k.forwardRef((n, r) => {
        const {
                __scopeToast: s,
                type: i = "foreground",
                duration: l,
                open: u,
                onClose: f,
                onEscapeKeyDown: p,
                onPause: g,
                onResume: h,
                onSwipeStart: v,
                onSwipeMove: w,
                onSwipeCancel: E,
                onSwipeEnd: A,
                ...M
            } = n,
            N = Ia(Fa, s),
            [T, F] = k.useState(null),
            L = un(r, (K) => F(K)),
            $ = k.useRef(null),
            V = k.useRef(null),
            H = l || N.duration,
            se = k.useRef(0),
            ee = k.useRef(H),
            Se = k.useRef(0),
            { onToastAdd: Ee, onToastRemove: _e } = N,
            be = Sn(() => {
                T?.contains(document.activeElement) && N.viewport?.focus(), f();
            }),
            G = k.useCallback(
                (K) => {
                    !K ||
                        K === 1 / 0 ||
                        (window.clearTimeout(Se.current),
                        (se.current = new Date().getTime()),
                        (Se.current = window.setTimeout(be, K)));
                },
                [be]
            );
        k.useEffect(() => {
            const K = N.viewport;
            if (K) {
                const ve = () => {
                        G(ee.current), h?.();
                    },
                    fe = () => {
                        const pe = new Date().getTime() - se.current;
                        (ee.current = ee.current - pe), window.clearTimeout(Se.current), g?.();
                    };
                return (
                    K.addEventListener(Xu, fe),
                    K.addEventListener(Ju, ve),
                    () => {
                        K.removeEventListener(Xu, fe), K.removeEventListener(Ju, ve);
                    }
                );
            }
        }, [N.viewport, H, g, h, G]),
            k.useEffect(() => {
                u && !N.isClosePausedRef.current && G(H);
            }, [u, H, N.isClosePausedRef, G]),
            k.useEffect(() => (Ee(), () => _e()), [Ee, _e]);
        const re = k.useMemo(() => (T ? Ym(T) : null), [T]);
        return N.viewport
            ? y.jsxs(y.Fragment, {
                  children: [
                      re &&
                          y.jsx(Ux, {
                              __scopeToast: s,
                              role: "status",
                              "aria-live": i === "foreground" ? "assertive" : "polite",
                              "aria-atomic": !0,
                              children: re,
                          }),
                      y.jsx(Fx, {
                          scope: s,
                          onClose: be,
                          children: La.createPortal(
                              y.jsx(yc.ItemSlot, {
                                  scope: s,
                                  children: y.jsx(wx, {
                                      asChild: !0,
                                      onEscapeKeyDown: ct(p, () => {
                                          N.isFocusedToastEscapeKeyDownRef.current || be(),
                                              (N.isFocusedToastEscapeKeyDownRef.current = !1);
                                      }),
                                      children: y.jsx(Pt.li, {
                                          role: "status",
                                          "aria-live": "off",
                                          "aria-atomic": !0,
                                          tabIndex: 0,
                                          "data-state": u ? "open" : "closed",
                                          "data-swipe-direction": N.swipeDirection,
                                          ...M,
                                          ref: L,
                                          style: { userSelect: "none", touchAction: "none", ...n.style },
                                          onKeyDown: ct(n.onKeyDown, (K) => {
                                              K.key === "Escape" &&
                                                  (p?.(K.nativeEvent),
                                                  K.nativeEvent.defaultPrevented ||
                                                      ((N.isFocusedToastEscapeKeyDownRef.current = !0), be()));
                                          }),
                                          onPointerDown: ct(n.onPointerDown, (K) => {
                                              K.button === 0 && ($.current = { x: K.clientX, y: K.clientY });
                                          }),
                                          onPointerMove: ct(n.onPointerMove, (K) => {
                                              if (!$.current) return;
                                              const ve = K.clientX - $.current.x,
                                                  fe = K.clientY - $.current.y,
                                                  pe = !!V.current,
                                                  D = ["left", "right"].includes(N.swipeDirection),
                                                  X = ["left", "up"].includes(N.swipeDirection) ? Math.min : Math.max,
                                                  q = D ? X(0, ve) : 0,
                                                  b = D ? 0 : X(0, fe),
                                                  z = K.pointerType === "touch" ? 10 : 2,
                                                  xe = { x: q, y: b },
                                                  Te = { originalEvent: K, delta: xe };
                                              pe
                                                  ? ((V.current = xe), ra(Mx, w, Te, { discrete: !1 }))
                                                  : Up(xe, N.swipeDirection, z)
                                                    ? ((V.current = xe),
                                                      ra(Lx, v, Te, { discrete: !1 }),
                                                      K.target.setPointerCapture(K.pointerId))
                                                    : (Math.abs(ve) > z || Math.abs(fe) > z) && ($.current = null);
                                          }),
                                          onPointerUp: ct(n.onPointerUp, (K) => {
                                              const ve = V.current,
                                                  fe = K.target;
                                              if (
                                                  (fe.hasPointerCapture(K.pointerId) &&
                                                      fe.releasePointerCapture(K.pointerId),
                                                  (V.current = null),
                                                  ($.current = null),
                                                  ve)
                                              ) {
                                                  const pe = K.currentTarget,
                                                      D = { originalEvent: K, delta: ve };
                                                  Up(ve, N.swipeDirection, N.swipeThreshold)
                                                      ? ra(Ix, A, D, { discrete: !0 })
                                                      : ra(Dx, E, D, { discrete: !0 }),
                                                      pe.addEventListener("click", (X) => X.preventDefault(), {
                                                          once: !0,
                                                      });
                                              }
                                          }),
                                      }),
                                  }),
                              }),
                              N.viewport
                          ),
                      }),
                  ],
              })
            : null;
    }),
    Ux = (n) => {
        const { __scopeToast: r, children: s, ...i } = n,
            l = Ia(Fa, r),
            [u, f] = k.useState(!1),
            [p, g] = k.useState(!1);
        return (
            Wx(() => f(!0)),
            k.useEffect(() => {
                const h = window.setTimeout(() => g(!0), 1e3);
                return () => window.clearTimeout(h);
            }, []),
            p
                ? null
                : y.jsx(Dm, {
                      asChild: !0,
                      children: y.jsx(Da, { ...i, children: u && y.jsxs(y.Fragment, { children: [l.label, " ", s] }) }),
                  })
        );
    },
    $x = "ToastTitle",
    Bm = k.forwardRef((n, r) => {
        const { __scopeToast: s, ...i } = n;
        return y.jsx(Pt.div, { ...i, ref: r });
    });
Bm.displayName = $x;
var Bx = "ToastDescription",
    Wm = k.forwardRef((n, r) => {
        const { __scopeToast: s, ...i } = n;
        return y.jsx(Pt.div, { ...i, ref: r });
    });
Wm.displayName = Bx;
var Zm = "ToastAction",
    Hm = k.forwardRef((n, r) => {
        const { altText: s, ...i } = n;
        return s.trim()
            ? y.jsx(Qm, { altText: s, asChild: !0, children: y.jsx(vc, { ...i, ref: r }) })
            : (console.error(`Invalid prop \`altText\` supplied to \`${Zm}\`. Expected non-empty \`string\`.`), null);
    });
Hm.displayName = Zm;
var Km = "ToastClose",
    vc = k.forwardRef((n, r) => {
        const { __scopeToast: s, ...i } = n,
            l = zx(Km, s);
        return y.jsx(Qm, {
            asChild: !0,
            children: y.jsx(Pt.button, { type: "button", ...i, ref: r, onClick: ct(n.onClick, l.onClose) }),
        });
    });
vc.displayName = Km;
var Qm = k.forwardRef((n, r) => {
    const { __scopeToast: s, altText: i, ...l } = n;
    return y.jsx(Pt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": i || void 0,
        ...l,
        ref: r,
    });
});
function Ym(n) {
    const r = [];
    return (
        Array.from(n.childNodes).forEach((i) => {
            if ((i.nodeType === i.TEXT_NODE && i.textContent && r.push(i.textContent), Zx(i))) {
                const l = i.ariaHidden || i.hidden || i.style.display === "none",
                    u = i.dataset.radixToastAnnounceExclude === "";
                if (!l)
                    if (u) {
                        const f = i.dataset.radixToastAnnounceAlt;
                        f && r.push(f);
                    } else r.push(...Ym(i));
            }
        }),
        r
    );
}
function ra(n, r, s, { discrete: i }) {
    const l = s.originalEvent.currentTarget,
        u = new CustomEvent(n, { bubbles: !0, cancelable: !0, detail: s });
    r && l.addEventListener(n, r, { once: !0 }), i ? Am(l, u) : l.dispatchEvent(u);
}
var Up = (n, r, s = 0) => {
    const i = Math.abs(n.x),
        l = Math.abs(n.y),
        u = i > l;
    return r === "left" || r === "right" ? u && i > s : !u && l > s;
};
function Wx(n = () => {}) {
    const r = Sn(n);
    Mr(() => {
        let s = 0,
            i = 0;
        return (
            (s = window.requestAnimationFrame(() => (i = window.requestAnimationFrame(r)))),
            () => {
                window.cancelAnimationFrame(s), window.cancelAnimationFrame(i);
            }
        );
    }, [r]);
}
function Zx(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function Hx(n) {
    const r = [],
        s = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (i) => {
                const l = i.tagName === "INPUT" && i.type === "hidden";
                return i.disabled || i.hidden || l
                    ? NodeFilter.FILTER_SKIP
                    : i.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    for (; s.nextNode(); ) r.push(s.currentNode);
    return r;
}
function Wu(n) {
    const r = document.activeElement;
    return n.some((s) => (s === r ? !0 : (s.focus(), document.activeElement !== r)));
}
var Kx = Fm,
    Gm = Vm,
    qm = $m,
    Xm = Bm,
    Jm = Wm,
    eh = Hm,
    th = vc;
function nh(n) {
    var r,
        s,
        i = "";
    if (typeof n == "string" || typeof n == "number") i += n;
    else if (typeof n == "object")
        if (Array.isArray(n)) {
            var l = n.length;
            for (r = 0; r < l; r++) n[r] && (s = nh(n[r])) && (i && (i += " "), (i += s));
        } else for (s in n) n[s] && (i && (i += " "), (i += s));
    return i;
}
function rh() {
    for (var n, r, s = 0, i = "", l = arguments.length; s < l; s++)
        (n = arguments[s]) && (r = nh(n)) && (i && (i += " "), (i += r));
    return i;
}
const $p = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
    Bp = rh,
    xc = (n, r) => (s) => {
        var i;
        if (r?.variants == null) return Bp(n, s?.class, s?.className);
        const { variants: l, defaultVariants: u } = r,
            f = Object.keys(l).map((h) => {
                const v = s?.[h],
                    w = u?.[h];
                if (v === null) return null;
                const E = $p(v) || $p(w);
                return l[h][E];
            }),
            p =
                s &&
                Object.entries(s).reduce((h, v) => {
                    let [w, E] = v;
                    return E === void 0 || (h[w] = E), h;
                }, {}),
            g =
                r == null || (i = r.compoundVariants) === null || i === void 0
                    ? void 0
                    : i.reduce((h, v) => {
                          let { class: w, className: E, ...A } = v;
                          return Object.entries(A).every((M) => {
                              let [N, T] = M;
                              return Array.isArray(T) ? T.includes({ ...u, ...p }[N]) : { ...u, ...p }[N] === T;
                          })
                              ? [...h, w, E]
                              : h;
                      }, []);
        return Bp(n, f, g, s?.class, s?.className);
    };
const Qx = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    sh = (...n) => n.filter((r, s, i) => !!r && i.indexOf(r) === s).join(" ");
var Yx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
const Gx = k.forwardRef(
    (
        {
            color: n = "currentColor",
            size: r = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: i,
            className: l = "",
            children: u,
            iconNode: f,
            ...p
        },
        g
    ) =>
        k.createElement(
            "svg",
            {
                ref: g,
                ...Yx,
                width: r,
                height: r,
                stroke: n,
                strokeWidth: i ? (Number(s) * 24) / Number(r) : s,
                className: sh("lucide", l),
                ...p,
            },
            [...f.map(([h, v]) => k.createElement(h, v)), ...(Array.isArray(u) ? u : [u])]
        )
);
const St = (n, r) => {
    const s = k.forwardRef(({ className: i, ...l }, u) =>
        k.createElement(Gx, { ref: u, iconNode: r, className: sh(`lucide-${Qx(n)}`, i), ...l })
    );
    return (s.displayName = `${n}`), s;
};
const oh = St("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
const qx = St("CircleAlert", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
const Xx = St("CircleCheck", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
const Jx = St("Cog", [
    ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
    ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 22v-2", key: "1osdcq" }],
    ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
    ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
    ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
    ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
    ["path", { d: "M14 12h8", key: "4f43i9" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
    ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
    ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
    ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }],
]);
const e0 = St("Cpu", [
    ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
    ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
    ["path", { d: "M15 2v2", key: "13l42r" }],
    ["path", { d: "M15 20v2", key: "15mkzm" }],
    ["path", { d: "M2 15h2", key: "1gxd5l" }],
    ["path", { d: "M2 9h2", key: "1bbxkp" }],
    ["path", { d: "M20 15h2", key: "19e6y8" }],
    ["path", { d: "M20 9h2", key: "19tzq7" }],
    ["path", { d: "M9 2v2", key: "165o2o" }],
    ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
const Wp = St("ExternalLink", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
]);
const t0 = St("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
        },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
const n0 = St("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
const r0 = St("MessageSquare", [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
]);
const s0 = St("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5",
        },
    ],
]);
const o0 = St("Send", [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3",
        },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
const i0 = St("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f",
        },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
const a0 = St("ShoppingCart", [
    ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
    ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
    ["path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12", key: "9zh506" }],
]);
const l0 = St("Wrench", [
    [
        "path",
        {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            key: "cbrjhi",
        },
    ],
]);
const ih = St("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
const u0 = St("Zap", [
        [
            "path",
            {
                d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                key: "1xq2db",
            },
        ],
    ]),
    wc = "-",
    c0 = (n) => {
        const r = f0(n),
            { conflictingClassGroups: s, conflictingClassGroupModifiers: i } = n;
        return {
            getClassGroupId: (f) => {
                const p = f.split(wc);
                return p[0] === "" && p.length !== 1 && p.shift(), ah(p, r) || d0(f);
            },
            getConflictingClassGroupIds: (f, p) => {
                const g = s[f] || [];
                return p && i[f] ? [...g, ...i[f]] : g;
            },
        };
    },
    ah = (n, r) => {
        if (n.length === 0) return r.classGroupId;
        const s = n[0],
            i = r.nextPart.get(s),
            l = i ? ah(n.slice(1), i) : void 0;
        if (l) return l;
        if (r.validators.length === 0) return;
        const u = n.join(wc);
        return r.validators.find(({ validator: f }) => f(u))?.classGroupId;
    },
    Zp = /^\[(.+)\]$/,
    d0 = (n) => {
        if (Zp.test(n)) {
            const r = Zp.exec(n)[1],
                s = r?.substring(0, r.indexOf(":"));
            if (s) return "arbitrary.." + s;
        }
    },
    f0 = (n) => {
        const { theme: r, prefix: s } = n,
            i = { nextPart: new Map(), validators: [] };
        return (
            m0(Object.entries(n.classGroups), s).forEach(([u, f]) => {
                tc(f, i, u, r);
            }),
            i
        );
    },
    tc = (n, r, s, i) => {
        n.forEach((l) => {
            if (typeof l == "string") {
                const u = l === "" ? r : Hp(r, l);
                u.classGroupId = s;
                return;
            }
            if (typeof l == "function") {
                if (p0(l)) {
                    tc(l(i), r, s, i);
                    return;
                }
                r.validators.push({ validator: l, classGroupId: s });
                return;
            }
            Object.entries(l).forEach(([u, f]) => {
                tc(f, Hp(r, u), s, i);
            });
        });
    },
    Hp = (n, r) => {
        let s = n;
        return (
            r.split(wc).forEach((i) => {
                s.nextPart.has(i) || s.nextPart.set(i, { nextPart: new Map(), validators: [] }),
                    (s = s.nextPart.get(i));
            }),
            s
        );
    },
    p0 = (n) => n.isThemeGetter,
    m0 = (n, r) =>
        r
            ? n.map(([s, i]) => {
                  const l = i.map((u) =>
                      typeof u == "string"
                          ? r + u
                          : typeof u == "object"
                            ? Object.fromEntries(Object.entries(u).map(([f, p]) => [r + f, p]))
                            : u
                  );
                  return [s, l];
              })
            : n,
    h0 = (n) => {
        if (n < 1) return { get: () => {}, set: () => {} };
        let r = 0,
            s = new Map(),
            i = new Map();
        const l = (u, f) => {
            s.set(u, f), r++, r > n && ((r = 0), (i = s), (s = new Map()));
        };
        return {
            get(u) {
                let f = s.get(u);
                if (f !== void 0) return f;
                if ((f = i.get(u)) !== void 0) return l(u, f), f;
            },
            set(u, f) {
                s.has(u) ? s.set(u, f) : l(u, f);
            },
        };
    },
    lh = "!",
    g0 = (n) => {
        const { separator: r, experimentalParseClassName: s } = n,
            i = r.length === 1,
            l = r[0],
            u = r.length,
            f = (p) => {
                const g = [];
                let h = 0,
                    v = 0,
                    w;
                for (let T = 0; T < p.length; T++) {
                    let F = p[T];
                    if (h === 0) {
                        if (F === l && (i || p.slice(T, T + u) === r)) {
                            g.push(p.slice(v, T)), (v = T + u);
                            continue;
                        }
                        if (F === "/") {
                            w = T;
                            continue;
                        }
                    }
                    F === "[" ? h++ : F === "]" && h--;
                }
                const E = g.length === 0 ? p : p.substring(v),
                    A = E.startsWith(lh),
                    M = A ? E.substring(1) : E,
                    N = w && w > v ? w - v : void 0;
                return { modifiers: g, hasImportantModifier: A, baseClassName: M, maybePostfixModifierPosition: N };
            };
        return s ? (p) => s({ className: p, parseClassName: f }) : f;
    },
    y0 = (n) => {
        if (n.length <= 1) return n;
        const r = [];
        let s = [];
        return (
            n.forEach((i) => {
                i[0] === "[" ? (r.push(...s.sort(), i), (s = [])) : s.push(i);
            }),
            r.push(...s.sort()),
            r
        );
    },
    v0 = (n) => ({ cache: h0(n.cacheSize), parseClassName: g0(n), ...c0(n) }),
    x0 = /\s+/,
    w0 = (n, r) => {
        const { parseClassName: s, getClassGroupId: i, getConflictingClassGroupIds: l } = r,
            u = [],
            f = n.trim().split(x0);
        let p = "";
        for (let g = f.length - 1; g >= 0; g -= 1) {
            const h = f[g],
                { modifiers: v, hasImportantModifier: w, baseClassName: E, maybePostfixModifierPosition: A } = s(h);
            let M = !!A,
                N = i(M ? E.substring(0, A) : E);
            if (!N) {
                if (!M) {
                    p = h + (p.length > 0 ? " " + p : p);
                    continue;
                }
                if (((N = i(E)), !N)) {
                    p = h + (p.length > 0 ? " " + p : p);
                    continue;
                }
                M = !1;
            }
            const T = y0(v).join(":"),
                F = w ? T + lh : T,
                L = F + N;
            if (u.includes(L)) continue;
            u.push(L);
            const $ = l(N, M);
            for (let V = 0; V < $.length; ++V) {
                const H = $[V];
                u.push(F + H);
            }
            p = h + (p.length > 0 ? " " + p : p);
        }
        return p;
    };
function _0() {
    let n = 0,
        r,
        s,
        i = "";
    for (; n < arguments.length; ) (r = arguments[n++]) && (s = uh(r)) && (i && (i += " "), (i += s));
    return i;
}
const uh = (n) => {
    if (typeof n == "string") return n;
    let r,
        s = "";
    for (let i = 0; i < n.length; i++) n[i] && (r = uh(n[i])) && (s && (s += " "), (s += r));
    return s;
};
function k0(n, ...r) {
    let s,
        i,
        l,
        u = f;
    function f(g) {
        const h = r.reduce((v, w) => w(v), n());
        return (s = v0(h)), (i = s.cache.get), (l = s.cache.set), (u = p), p(g);
    }
    function p(g) {
        const h = i(g);
        if (h) return h;
        const v = w0(g, s);
        return l(g, v), v;
    }
    return function () {
        return u(_0.apply(null, arguments));
    };
}
const Qe = (n) => {
        const r = (s) => s[n] || [];
        return (r.isThemeGetter = !0), r;
    },
    ch = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    S0 = /^\d+\/\d+$/,
    E0 = new Set(["px", "full", "screen"]),
    C0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    b0 =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    T0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    N0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    P0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    In = (n) => ws(n) || E0.has(n) || S0.test(n),
    ur = (n) => Ns(n, "length", I0),
    ws = (n) => !!n && !Number.isNaN(Number(n)),
    Zu = (n) => Ns(n, "number", ws),
    vo = (n) => !!n && Number.isInteger(Number(n)),
    R0 = (n) => n.endsWith("%") && ws(n.slice(0, -1)),
    Re = (n) => ch.test(n),
    cr = (n) => C0.test(n),
    j0 = new Set(["length", "size", "percentage"]),
    A0 = (n) => Ns(n, j0, dh),
    O0 = (n) => Ns(n, "position", dh),
    L0 = new Set(["image", "url"]),
    M0 = (n) => Ns(n, L0, z0),
    D0 = (n) => Ns(n, "", F0),
    xo = () => !0,
    Ns = (n, r, s) => {
        const i = ch.exec(n);
        return i ? (i[1] ? (typeof r == "string" ? i[1] === r : r.has(i[1])) : s(i[2])) : !1;
    },
    I0 = (n) => b0.test(n) && !T0.test(n),
    dh = () => !1,
    F0 = (n) => N0.test(n),
    z0 = (n) => P0.test(n),
    V0 = () => {
        const n = Qe("colors"),
            r = Qe("spacing"),
            s = Qe("blur"),
            i = Qe("brightness"),
            l = Qe("borderColor"),
            u = Qe("borderRadius"),
            f = Qe("borderSpacing"),
            p = Qe("borderWidth"),
            g = Qe("contrast"),
            h = Qe("grayscale"),
            v = Qe("hueRotate"),
            w = Qe("invert"),
            E = Qe("gap"),
            A = Qe("gradientColorStops"),
            M = Qe("gradientColorStopPositions"),
            N = Qe("inset"),
            T = Qe("margin"),
            F = Qe("opacity"),
            L = Qe("padding"),
            $ = Qe("saturate"),
            V = Qe("scale"),
            H = Qe("sepia"),
            se = Qe("skew"),
            ee = Qe("space"),
            Se = Qe("translate"),
            Ee = () => ["auto", "contain", "none"],
            _e = () => ["auto", "hidden", "clip", "visible", "scroll"],
            be = () => ["auto", Re, r],
            G = () => [Re, r],
            re = () => ["", In, ur],
            K = () => ["auto", ws, Re],
            ve = () => [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
            ],
            fe = () => ["solid", "dashed", "dotted", "double", "none"],
            pe = () => [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
            ],
            D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            X = () => ["", "0", Re],
            q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            b = () => [ws, Re];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [xo],
                spacing: [In, ur],
                blur: ["none", "", cr, Re],
                brightness: b(),
                borderColor: [n],
                borderRadius: ["none", "", "full", cr, Re],
                borderSpacing: G(),
                borderWidth: re(),
                contrast: b(),
                grayscale: X(),
                hueRotate: b(),
                invert: X(),
                gap: G(),
                gradientColorStops: [n],
                gradientColorStopPositions: [R0, ur],
                inset: be(),
                margin: be(),
                opacity: b(),
                padding: G(),
                saturate: b(),
                scale: b(),
                sepia: X(),
                skew: b(),
                space: G(),
                translate: G(),
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", Re] }],
                container: ["container"],
                columns: [{ columns: [cr] }],
                "break-after": [{ "break-after": q() }],
                "break-before": [{ "break-before": q() }],
                "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                box: [{ box: ["border", "content"] }],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden",
                ],
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                "object-position": [{ object: [...ve(), Re] }],
                overflow: [{ overflow: _e() }],
                "overflow-x": [{ "overflow-x": _e() }],
                "overflow-y": [{ "overflow-y": _e() }],
                overscroll: [{ overscroll: Ee() }],
                "overscroll-x": [{ "overscroll-x": Ee() }],
                "overscroll-y": [{ "overscroll-y": Ee() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [N] }],
                "inset-x": [{ "inset-x": [N] }],
                "inset-y": [{ "inset-y": [N] }],
                start: [{ start: [N] }],
                end: [{ end: [N] }],
                top: [{ top: [N] }],
                right: [{ right: [N] }],
                bottom: [{ bottom: [N] }],
                left: [{ left: [N] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", vo, Re] }],
                basis: [{ basis: be() }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", Re] }],
                grow: [{ grow: X() }],
                shrink: [{ shrink: X() }],
                order: [{ order: ["first", "last", "none", vo, Re] }],
                "grid-cols": [{ "grid-cols": [xo] }],
                "col-start-end": [{ col: ["auto", { span: ["full", vo, Re] }, Re] }],
                "col-start": [{ "col-start": K() }],
                "col-end": [{ "col-end": K() }],
                "grid-rows": [{ "grid-rows": [xo] }],
                "row-start-end": [{ row: ["auto", { span: [vo, Re] }, Re] }],
                "row-start": [{ "row-start": K() }],
                "row-end": [{ "row-end": K() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Re] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Re] }],
                gap: [{ gap: [E] }],
                "gap-x": [{ "gap-x": [E] }],
                "gap-y": [{ "gap-y": [E] }],
                "justify-content": [{ justify: ["normal", ...D()] }],
                "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                "align-content": [{ content: ["normal", ...D(), "baseline"] }],
                "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                "place-content": [{ "place-content": [...D(), "baseline"] }],
                "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                p: [{ p: [L] }],
                px: [{ px: [L] }],
                py: [{ py: [L] }],
                ps: [{ ps: [L] }],
                pe: [{ pe: [L] }],
                pt: [{ pt: [L] }],
                pr: [{ pr: [L] }],
                pb: [{ pb: [L] }],
                pl: [{ pl: [L] }],
                m: [{ m: [T] }],
                mx: [{ mx: [T] }],
                my: [{ my: [T] }],
                ms: [{ ms: [T] }],
                me: [{ me: [T] }],
                mt: [{ mt: [T] }],
                mr: [{ mr: [T] }],
                mb: [{ mb: [T] }],
                ml: [{ ml: [T] }],
                "space-x": [{ "space-x": [ee] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [ee] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Re, r] }],
                "min-w": [{ "min-w": [Re, r, "min", "max", "fit"] }],
                "max-w": [{ "max-w": [Re, r, "none", "full", "min", "max", "fit", "prose", { screen: [cr] }, cr] }],
                h: [{ h: [Re, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "min-h": [{ "min-h": [Re, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "max-h": [{ "max-h": [Re, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                size: [{ size: [Re, r, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", cr, ur] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [
                    {
                        font: [
                            "thin",
                            "extralight",
                            "light",
                            "normal",
                            "medium",
                            "semibold",
                            "bold",
                            "extrabold",
                            "black",
                            Zu,
                        ],
                    },
                ],
                "font-family": [{ font: [xo] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Re] }],
                "line-clamp": [{ "line-clamp": ["none", ws, Zu] }],
                leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", In, Re] }],
                "list-image": [{ "list-image": ["none", Re] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", Re] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [n] }],
                "placeholder-opacity": [{ "placeholder-opacity": [F] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "text-color": [{ text: [n] }],
                "text-opacity": [{ "text-opacity": [F] }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [...fe(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: ["auto", "from-font", In, ur] }],
                "underline-offset": [{ "underline-offset": ["auto", In, Re] }],
                "text-decoration-color": [{ decoration: [n] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: G() }],
                "vertical-align": [
                    { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Re] },
                ],
                whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", Re] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                "bg-opacity": [{ "bg-opacity": [F] }],
                "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                "bg-position": [{ bg: [...ve(), O0] }],
                "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                "bg-size": [{ bg: ["auto", "cover", "contain", A0] }],
                "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, M0] }],
                "bg-color": [{ bg: [n] }],
                "gradient-from-pos": [{ from: [M] }],
                "gradient-via-pos": [{ via: [M] }],
                "gradient-to-pos": [{ to: [M] }],
                "gradient-from": [{ from: [A] }],
                "gradient-via": [{ via: [A] }],
                "gradient-to": [{ to: [A] }],
                rounded: [{ rounded: [u] }],
                "rounded-s": [{ "rounded-s": [u] }],
                "rounded-e": [{ "rounded-e": [u] }],
                "rounded-t": [{ "rounded-t": [u] }],
                "rounded-r": [{ "rounded-r": [u] }],
                "rounded-b": [{ "rounded-b": [u] }],
                "rounded-l": [{ "rounded-l": [u] }],
                "rounded-ss": [{ "rounded-ss": [u] }],
                "rounded-se": [{ "rounded-se": [u] }],
                "rounded-ee": [{ "rounded-ee": [u] }],
                "rounded-es": [{ "rounded-es": [u] }],
                "rounded-tl": [{ "rounded-tl": [u] }],
                "rounded-tr": [{ "rounded-tr": [u] }],
                "rounded-br": [{ "rounded-br": [u] }],
                "rounded-bl": [{ "rounded-bl": [u] }],
                "border-w": [{ border: [p] }],
                "border-w-x": [{ "border-x": [p] }],
                "border-w-y": [{ "border-y": [p] }],
                "border-w-s": [{ "border-s": [p] }],
                "border-w-e": [{ "border-e": [p] }],
                "border-w-t": [{ "border-t": [p] }],
                "border-w-r": [{ "border-r": [p] }],
                "border-w-b": [{ "border-b": [p] }],
                "border-w-l": [{ "border-l": [p] }],
                "border-opacity": [{ "border-opacity": [F] }],
                "border-style": [{ border: [...fe(), "hidden"] }],
                "divide-x": [{ "divide-x": [p] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [p] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [F] }],
                "divide-style": [{ divide: fe() }],
                "border-color": [{ border: [l] }],
                "border-color-x": [{ "border-x": [l] }],
                "border-color-y": [{ "border-y": [l] }],
                "border-color-s": [{ "border-s": [l] }],
                "border-color-e": [{ "border-e": [l] }],
                "border-color-t": [{ "border-t": [l] }],
                "border-color-r": [{ "border-r": [l] }],
                "border-color-b": [{ "border-b": [l] }],
                "border-color-l": [{ "border-l": [l] }],
                "divide-color": [{ divide: [l] }],
                "outline-style": [{ outline: ["", ...fe()] }],
                "outline-offset": [{ "outline-offset": [In, Re] }],
                "outline-w": [{ outline: [In, ur] }],
                "outline-color": [{ outline: [n] }],
                "ring-w": [{ ring: re() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [n] }],
                "ring-opacity": [{ "ring-opacity": [F] }],
                "ring-offset-w": [{ "ring-offset": [In, ur] }],
                "ring-offset-color": [{ "ring-offset": [n] }],
                shadow: [{ shadow: ["", "inner", "none", cr, D0] }],
                "shadow-color": [{ shadow: [xo] }],
                opacity: [{ opacity: [F] }],
                "mix-blend": [{ "mix-blend": [...pe(), "plus-lighter", "plus-darker"] }],
                "bg-blend": [{ "bg-blend": pe() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [s] }],
                brightness: [{ brightness: [i] }],
                contrast: [{ contrast: [g] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", cr, Re] }],
                grayscale: [{ grayscale: [h] }],
                "hue-rotate": [{ "hue-rotate": [v] }],
                invert: [{ invert: [w] }],
                saturate: [{ saturate: [$] }],
                sepia: [{ sepia: [H] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [s] }],
                "backdrop-brightness": [{ "backdrop-brightness": [i] }],
                "backdrop-contrast": [{ "backdrop-contrast": [g] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [h] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [v] }],
                "backdrop-invert": [{ "backdrop-invert": [w] }],
                "backdrop-opacity": [{ "backdrop-opacity": [F] }],
                "backdrop-saturate": [{ "backdrop-saturate": [$] }],
                "backdrop-sepia": [{ "backdrop-sepia": [H] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [f] }],
                "border-spacing-x": [{ "border-spacing-x": [f] }],
                "border-spacing-y": [{ "border-spacing-y": [f] }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Re] }],
                duration: [{ duration: b() }],
                ease: [{ ease: ["linear", "in", "out", "in-out", Re] }],
                delay: [{ delay: b() }],
                animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Re] }],
                transform: [{ transform: ["", "gpu", "none"] }],
                scale: [{ scale: [V] }],
                "scale-x": [{ "scale-x": [V] }],
                "scale-y": [{ "scale-y": [V] }],
                rotate: [{ rotate: [vo, Re] }],
                "translate-x": [{ "translate-x": [Se] }],
                "translate-y": [{ "translate-y": [Se] }],
                "skew-x": [{ "skew-x": [se] }],
                "skew-y": [{ "skew-y": [se] }],
                "transform-origin": [
                    {
                        origin: [
                            "center",
                            "top",
                            "top-right",
                            "right",
                            "bottom-right",
                            "bottom",
                            "bottom-left",
                            "left",
                            "top-left",
                            Re,
                        ],
                    },
                ],
                accent: [{ accent: ["auto", n] }],
                appearance: [{ appearance: ["none", "auto"] }],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            Re,
                        ],
                    },
                ],
                "caret-color": [{ caret: [n] }],
                "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                resize: [{ resize: ["none", "y", "x", ""] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": G() }],
                "scroll-mx": [{ "scroll-mx": G() }],
                "scroll-my": [{ "scroll-my": G() }],
                "scroll-ms": [{ "scroll-ms": G() }],
                "scroll-me": [{ "scroll-me": G() }],
                "scroll-mt": [{ "scroll-mt": G() }],
                "scroll-mr": [{ "scroll-mr": G() }],
                "scroll-mb": [{ "scroll-mb": G() }],
                "scroll-ml": [{ "scroll-ml": G() }],
                "scroll-p": [{ "scroll-p": G() }],
                "scroll-px": [{ "scroll-px": G() }],
                "scroll-py": [{ "scroll-py": G() }],
                "scroll-ps": [{ "scroll-ps": G() }],
                "scroll-pe": [{ "scroll-pe": G() }],
                "scroll-pt": [{ "scroll-pt": G() }],
                "scroll-pr": [{ "scroll-pr": G() }],
                "scroll-pb": [{ "scroll-pb": G() }],
                "scroll-pl": [{ "scroll-pl": G() }],
                "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", Re] }],
                fill: [{ fill: [n, "none"] }],
                "stroke-w": [{ stroke: [In, ur, Zu] }],
                stroke: [{ stroke: [n, "none"] }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl",
                ],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": [
                    "border-color-s",
                    "border-color-e",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l",
                ],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
                    "scroll-mt",
                    "scroll-mr",
                    "scroll-mb",
                    "scroll-ml",
                ],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": [
                    "scroll-px",
                    "scroll-py",
                    "scroll-ps",
                    "scroll-pe",
                    "scroll-pt",
                    "scroll-pr",
                    "scroll-pb",
                    "scroll-pl",
                ],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
    },
    U0 = k0(V0);
function Ge(...n) {
    return U0(rh(n));
}
const $0 = Kx,
    fh = k.forwardRef(({ className: n, ...r }, s) =>
        y.jsx(Gm, {
            ref: s,
            className: Ge(
                "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
                n
            ),
            ...r,
        })
    );
fh.displayName = Gm.displayName;
const B0 = xc(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
            variants: {
                variant: {
                    default: "border bg-background text-foreground",
                    destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
                },
            },
            defaultVariants: { variant: "default" },
        }
    ),
    ph = k.forwardRef(({ className: n, variant: r, ...s }, i) =>
        y.jsx(qm, { ref: i, className: Ge(B0({ variant: r }), n), ...s })
    );
ph.displayName = qm.displayName;
const W0 = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx(eh, {
        ref: s,
        className: Ge(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
            n
        ),
        ...r,
    })
);
W0.displayName = eh.displayName;
const mh = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx(th, {
        ref: s,
        className: Ge(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            n
        ),
        "toast-close": "",
        ...r,
        children: y.jsx(ih, { className: "h-4 w-4" }),
    })
);
mh.displayName = th.displayName;
const hh = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx(Xm, { ref: s, className: Ge("text-sm font-semibold", n), ...r })
);
hh.displayName = Xm.displayName;
const gh = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx(Jm, { ref: s, className: Ge("text-sm opacity-90", n), ...r })
);
gh.displayName = Jm.displayName;
function Z0() {
    const { toasts: n } = Nm();
    return y.jsxs($0, {
        children: [
            n.map(function ({ id: r, title: s, description: i, action: l, ...u }) {
                return y.jsxs(
                    ph,
                    {
                        ...u,
                        children: [
                            y.jsxs("div", {
                                className: "grid gap-1",
                                children: [s && y.jsx(hh, { children: s }), i && y.jsx(gh, { children: i })],
                            }),
                            l,
                            y.jsx(mh, {}),
                        ],
                    },
                    r
                );
            }),
            y.jsx(fh, {}),
        ],
    });
}
const H0 = ["top", "right", "bottom", "left"],
    fr = Math.min,
    Ut = Math.max,
    ya = Math.round,
    sa = Math.floor,
    _n = (n) => ({ x: n, y: n }),
    K0 = { left: "right", right: "left", bottom: "top", top: "bottom" },
    Q0 = { start: "end", end: "start" };
function nc(n, r, s) {
    return Ut(n, fr(r, s));
}
function Un(n, r) {
    return typeof n == "function" ? n(r) : n;
}
function $n(n) {
    return n.split("-")[0];
}
function Ps(n) {
    return n.split("-")[1];
}
function _c(n) {
    return n === "x" ? "y" : "x";
}
function kc(n) {
    return n === "y" ? "height" : "width";
}
function pr(n) {
    return ["top", "bottom"].includes($n(n)) ? "y" : "x";
}
function Sc(n) {
    return _c(pr(n));
}
function Y0(n, r, s) {
    s === void 0 && (s = !1);
    const i = Ps(n),
        l = Sc(n),
        u = kc(l);
    let f = l === "x" ? (i === (s ? "end" : "start") ? "right" : "left") : i === "start" ? "bottom" : "top";
    return r.reference[u] > r.floating[u] && (f = va(f)), [f, va(f)];
}
function G0(n) {
    const r = va(n);
    return [rc(n), r, rc(r)];
}
function rc(n) {
    return n.replace(/start|end/g, (r) => Q0[r]);
}
function q0(n, r, s) {
    const i = ["left", "right"],
        l = ["right", "left"],
        u = ["top", "bottom"],
        f = ["bottom", "top"];
    switch (n) {
        case "top":
        case "bottom":
            return s ? (r ? l : i) : r ? i : l;
        case "left":
        case "right":
            return r ? u : f;
        default:
            return [];
    }
}
function X0(n, r, s, i) {
    const l = Ps(n);
    let u = q0($n(n), s === "start", i);
    return l && ((u = u.map((f) => f + "-" + l)), r && (u = u.concat(u.map(rc)))), u;
}
function va(n) {
    return n.replace(/left|right|bottom|top/g, (r) => K0[r]);
}
function J0(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function yh(n) {
    return typeof n != "number" ? J0(n) : { top: n, right: n, bottom: n, left: n };
}
function xa(n) {
    const { x: r, y: s, width: i, height: l } = n;
    return { width: i, height: l, top: s, left: r, right: r + i, bottom: s + l, x: r, y: s };
}
function Kp(n, r, s) {
    let { reference: i, floating: l } = n;
    const u = pr(r),
        f = Sc(r),
        p = kc(f),
        g = $n(r),
        h = u === "y",
        v = i.x + i.width / 2 - l.width / 2,
        w = i.y + i.height / 2 - l.height / 2,
        E = i[p] / 2 - l[p] / 2;
    let A;
    switch (g) {
        case "top":
            A = { x: v, y: i.y - l.height };
            break;
        case "bottom":
            A = { x: v, y: i.y + i.height };
            break;
        case "right":
            A = { x: i.x + i.width, y: w };
            break;
        case "left":
            A = { x: i.x - l.width, y: w };
            break;
        default:
            A = { x: i.x, y: i.y };
    }
    switch (Ps(r)) {
        case "start":
            A[f] -= E * (s && h ? -1 : 1);
            break;
        case "end":
            A[f] += E * (s && h ? -1 : 1);
            break;
    }
    return A;
}
const ew = async (n, r, s) => {
    const { placement: i = "bottom", strategy: l = "absolute", middleware: u = [], platform: f } = s,
        p = u.filter(Boolean),
        g = await (f.isRTL == null ? void 0 : f.isRTL(r));
    let h = await f.getElementRects({ reference: n, floating: r, strategy: l }),
        { x: v, y: w } = Kp(h, i, g),
        E = i,
        A = {},
        M = 0;
    for (let N = 0; N < p.length; N++) {
        const { name: T, fn: F } = p[N],
            {
                x: L,
                y: $,
                data: V,
                reset: H,
            } = await F({
                x: v,
                y: w,
                initialPlacement: i,
                placement: E,
                strategy: l,
                middlewareData: A,
                rects: h,
                platform: f,
                elements: { reference: n, floating: r },
            });
        (v = L ?? v),
            (w = $ ?? w),
            (A = { ...A, [T]: { ...A[T], ...V } }),
            H &&
                M <= 50 &&
                (M++,
                typeof H == "object" &&
                    (H.placement && (E = H.placement),
                    H.rects &&
                        (h =
                            H.rects === !0
                                ? await f.getElementRects({ reference: n, floating: r, strategy: l })
                                : H.rects),
                    ({ x: v, y: w } = Kp(h, E, g))),
                (N = -1));
    }
    return { x: v, y: w, placement: E, strategy: l, middlewareData: A };
};
async function To(n, r) {
    var s;
    r === void 0 && (r = {});
    const { x: i, y: l, platform: u, rects: f, elements: p, strategy: g } = n,
        {
            boundary: h = "clippingAncestors",
            rootBoundary: v = "viewport",
            elementContext: w = "floating",
            altBoundary: E = !1,
            padding: A = 0,
        } = Un(r, n),
        M = yh(A),
        T = p[E ? (w === "floating" ? "reference" : "floating") : w],
        F = xa(
            await u.getClippingRect({
                element:
                    (s = await (u.isElement == null ? void 0 : u.isElement(T))) == null || s
                        ? T
                        : T.contextElement ||
                          (await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(p.floating))),
                boundary: h,
                rootBoundary: v,
                strategy: g,
            })
        ),
        L = w === "floating" ? { x: i, y: l, width: f.floating.width, height: f.floating.height } : f.reference,
        $ = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(p.floating)),
        V = (await (u.isElement == null ? void 0 : u.isElement($)))
            ? (await (u.getScale == null ? void 0 : u.getScale($))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        H = xa(
            u.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: p,
                      rect: L,
                      offsetParent: $,
                      strategy: g,
                  })
                : L
        );
    return {
        top: (F.top - H.top + M.top) / V.y,
        bottom: (H.bottom - F.bottom + M.bottom) / V.y,
        left: (F.left - H.left + M.left) / V.x,
        right: (H.right - F.right + M.right) / V.x,
    };
}
const tw = (n) => ({
        name: "arrow",
        options: n,
        async fn(r) {
            const { x: s, y: i, placement: l, rects: u, platform: f, elements: p, middlewareData: g } = r,
                { element: h, padding: v = 0 } = Un(n, r) || {};
            if (h == null) return {};
            const w = yh(v),
                E = { x: s, y: i },
                A = Sc(l),
                M = kc(A),
                N = await f.getDimensions(h),
                T = A === "y",
                F = T ? "top" : "left",
                L = T ? "bottom" : "right",
                $ = T ? "clientHeight" : "clientWidth",
                V = u.reference[M] + u.reference[A] - E[A] - u.floating[M],
                H = E[A] - u.reference[A],
                se = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(h));
            let ee = se ? se[$] : 0;
            (!ee || !(await (f.isElement == null ? void 0 : f.isElement(se)))) && (ee = p.floating[$] || u.floating[M]);
            const Se = V / 2 - H / 2,
                Ee = ee / 2 - N[M] / 2 - 1,
                _e = fr(w[F], Ee),
                be = fr(w[L], Ee),
                G = _e,
                re = ee - N[M] - be,
                K = ee / 2 - N[M] / 2 + Se,
                ve = nc(G, K, re),
                fe = !g.arrow && Ps(l) != null && K !== ve && u.reference[M] / 2 - (K < G ? _e : be) - N[M] / 2 < 0,
                pe = fe ? (K < G ? K - G : K - re) : 0;
            return {
                [A]: E[A] + pe,
                data: { [A]: ve, centerOffset: K - ve - pe, ...(fe && { alignmentOffset: pe }) },
                reset: fe,
            };
        },
    }),
    nw = function (n) {
        return (
            n === void 0 && (n = {}),
            {
                name: "flip",
                options: n,
                async fn(r) {
                    var s, i;
                    const {
                            placement: l,
                            middlewareData: u,
                            rects: f,
                            initialPlacement: p,
                            platform: g,
                            elements: h,
                        } = r,
                        {
                            mainAxis: v = !0,
                            crossAxis: w = !0,
                            fallbackPlacements: E,
                            fallbackStrategy: A = "bestFit",
                            fallbackAxisSideDirection: M = "none",
                            flipAlignment: N = !0,
                            ...T
                        } = Un(n, r);
                    if ((s = u.arrow) != null && s.alignmentOffset) return {};
                    const F = $n(l),
                        L = pr(p),
                        $ = $n(p) === p,
                        V = await (g.isRTL == null ? void 0 : g.isRTL(h.floating)),
                        H = E || ($ || !N ? [va(p)] : G0(p)),
                        se = M !== "none";
                    !E && se && H.push(...X0(p, N, M, V));
                    const ee = [p, ...H],
                        Se = await To(r, T),
                        Ee = [];
                    let _e = ((i = u.flip) == null ? void 0 : i.overflows) || [];
                    if ((v && Ee.push(Se[F]), w)) {
                        const K = Y0(l, f, V);
                        Ee.push(Se[K[0]], Se[K[1]]);
                    }
                    if (((_e = [..._e, { placement: l, overflows: Ee }]), !Ee.every((K) => K <= 0))) {
                        var be, G;
                        const K = (((be = u.flip) == null ? void 0 : be.index) || 0) + 1,
                            ve = ee[K];
                        if (ve) return { data: { index: K, overflows: _e }, reset: { placement: ve } };
                        let fe =
                            (G = _e
                                .filter((pe) => pe.overflows[0] <= 0)
                                .sort((pe, D) => pe.overflows[1] - D.overflows[1])[0]) == null
                                ? void 0
                                : G.placement;
                        if (!fe)
                            switch (A) {
                                case "bestFit": {
                                    var re;
                                    const pe =
                                        (re = _e
                                            .filter((D) => {
                                                if (se) {
                                                    const X = pr(D.placement);
                                                    return X === L || X === "y";
                                                }
                                                return !0;
                                            })
                                            .map((D) => [
                                                D.placement,
                                                D.overflows.filter((X) => X > 0).reduce((X, q) => X + q, 0),
                                            ])
                                            .sort((D, X) => D[1] - X[1])[0]) == null
                                            ? void 0
                                            : re[0];
                                    pe && (fe = pe);
                                    break;
                                }
                                case "initialPlacement":
                                    fe = p;
                                    break;
                            }
                        if (l !== fe) return { reset: { placement: fe } };
                    }
                    return {};
                },
            }
        );
    };
function Qp(n, r) {
    return { top: n.top - r.height, right: n.right - r.width, bottom: n.bottom - r.height, left: n.left - r.width };
}
function Yp(n) {
    return H0.some((r) => n[r] >= 0);
}
const rw = function (n) {
    return (
        n === void 0 && (n = {}),
        {
            name: "hide",
            options: n,
            async fn(r) {
                const { rects: s } = r,
                    { strategy: i = "referenceHidden", ...l } = Un(n, r);
                switch (i) {
                    case "referenceHidden": {
                        const u = await To(r, { ...l, elementContext: "reference" }),
                            f = Qp(u, s.reference);
                        return { data: { referenceHiddenOffsets: f, referenceHidden: Yp(f) } };
                    }
                    case "escaped": {
                        const u = await To(r, { ...l, altBoundary: !0 }),
                            f = Qp(u, s.floating);
                        return { data: { escapedOffsets: f, escaped: Yp(f) } };
                    }
                    default:
                        return {};
                }
            },
        }
    );
};
async function sw(n, r) {
    const { placement: s, platform: i, elements: l } = n,
        u = await (i.isRTL == null ? void 0 : i.isRTL(l.floating)),
        f = $n(s),
        p = Ps(s),
        g = pr(s) === "y",
        h = ["left", "top"].includes(f) ? -1 : 1,
        v = u && g ? -1 : 1,
        w = Un(r, n);
    let {
        mainAxis: E,
        crossAxis: A,
        alignmentAxis: M,
    } = typeof w == "number"
        ? { mainAxis: w, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: w.mainAxis || 0, crossAxis: w.crossAxis || 0, alignmentAxis: w.alignmentAxis };
    return (
        p && typeof M == "number" && (A = p === "end" ? M * -1 : M), g ? { x: A * v, y: E * h } : { x: E * h, y: A * v }
    );
}
const ow = function (n) {
        return (
            n === void 0 && (n = 0),
            {
                name: "offset",
                options: n,
                async fn(r) {
                    var s, i;
                    const { x: l, y: u, placement: f, middlewareData: p } = r,
                        g = await sw(r, n);
                    return f === ((s = p.offset) == null ? void 0 : s.placement) &&
                        (i = p.arrow) != null &&
                        i.alignmentOffset
                        ? {}
                        : { x: l + g.x, y: u + g.y, data: { ...g, placement: f } };
                },
            }
        );
    },
    iw = function (n) {
        return (
            n === void 0 && (n = {}),
            {
                name: "shift",
                options: n,
                async fn(r) {
                    const { x: s, y: i, placement: l } = r,
                        {
                            mainAxis: u = !0,
                            crossAxis: f = !1,
                            limiter: p = {
                                fn: (T) => {
                                    let { x: F, y: L } = T;
                                    return { x: F, y: L };
                                },
                            },
                            ...g
                        } = Un(n, r),
                        h = { x: s, y: i },
                        v = await To(r, g),
                        w = pr($n(l)),
                        E = _c(w);
                    let A = h[E],
                        M = h[w];
                    if (u) {
                        const T = E === "y" ? "top" : "left",
                            F = E === "y" ? "bottom" : "right",
                            L = A + v[T],
                            $ = A - v[F];
                        A = nc(L, A, $);
                    }
                    if (f) {
                        const T = w === "y" ? "top" : "left",
                            F = w === "y" ? "bottom" : "right",
                            L = M + v[T],
                            $ = M - v[F];
                        M = nc(L, M, $);
                    }
                    const N = p.fn({ ...r, [E]: A, [w]: M });
                    return { ...N, data: { x: N.x - s, y: N.y - i, enabled: { [E]: u, [w]: f } } };
                },
            }
        );
    },
    aw = function (n) {
        return (
            n === void 0 && (n = {}),
            {
                options: n,
                fn(r) {
                    const { x: s, y: i, placement: l, rects: u, middlewareData: f } = r,
                        { offset: p = 0, mainAxis: g = !0, crossAxis: h = !0 } = Un(n, r),
                        v = { x: s, y: i },
                        w = pr(l),
                        E = _c(w);
                    let A = v[E],
                        M = v[w];
                    const N = Un(p, r),
                        T = typeof N == "number" ? { mainAxis: N, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...N };
                    if (g) {
                        const $ = E === "y" ? "height" : "width",
                            V = u.reference[E] - u.floating[$] + T.mainAxis,
                            H = u.reference[E] + u.reference[$] - T.mainAxis;
                        A < V ? (A = V) : A > H && (A = H);
                    }
                    if (h) {
                        var F, L;
                        const $ = E === "y" ? "width" : "height",
                            V = ["top", "left"].includes($n(l)),
                            H =
                                u.reference[w] -
                                u.floating[$] +
                                ((V && ((F = f.offset) == null ? void 0 : F[w])) || 0) +
                                (V ? 0 : T.crossAxis),
                            se =
                                u.reference[w] +
                                u.reference[$] +
                                (V ? 0 : ((L = f.offset) == null ? void 0 : L[w]) || 0) -
                                (V ? T.crossAxis : 0);
                        M < H ? (M = H) : M > se && (M = se);
                    }
                    return { [E]: A, [w]: M };
                },
            }
        );
    },
    lw = function (n) {
        return (
            n === void 0 && (n = {}),
            {
                name: "size",
                options: n,
                async fn(r) {
                    var s, i;
                    const { placement: l, rects: u, platform: f, elements: p } = r,
                        { apply: g = () => {}, ...h } = Un(n, r),
                        v = await To(r, h),
                        w = $n(l),
                        E = Ps(l),
                        A = pr(l) === "y",
                        { width: M, height: N } = u.floating;
                    let T, F;
                    w === "top" || w === "bottom"
                        ? ((T = w),
                          (F =
                              E === ((await (f.isRTL == null ? void 0 : f.isRTL(p.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((F = w), (T = E === "end" ? "top" : "bottom"));
                    const L = N - v.top - v.bottom,
                        $ = M - v.left - v.right,
                        V = fr(N - v[T], L),
                        H = fr(M - v[F], $),
                        se = !r.middlewareData.shift;
                    let ee = V,
                        Se = H;
                    if (
                        ((s = r.middlewareData.shift) != null && s.enabled.x && (Se = $),
                        (i = r.middlewareData.shift) != null && i.enabled.y && (ee = L),
                        se && !E)
                    ) {
                        const _e = Ut(v.left, 0),
                            be = Ut(v.right, 0),
                            G = Ut(v.top, 0),
                            re = Ut(v.bottom, 0);
                        A
                            ? (Se = M - 2 * (_e !== 0 || be !== 0 ? _e + be : Ut(v.left, v.right)))
                            : (ee = N - 2 * (G !== 0 || re !== 0 ? G + re : Ut(v.top, v.bottom)));
                    }
                    await g({ ...r, availableWidth: Se, availableHeight: ee });
                    const Ee = await f.getDimensions(p.floating);
                    return M !== Ee.width || N !== Ee.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function za() {
    return typeof window < "u";
}
function Rs(n) {
    return vh(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function $t(n) {
    var r;
    return (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function Tn(n) {
    var r;
    return (r = (vh(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : r.documentElement;
}
function vh(n) {
    return za() ? n instanceof Node || n instanceof $t(n).Node : !1;
}
function cn(n) {
    return za() ? n instanceof Element || n instanceof $t(n).Element : !1;
}
function En(n) {
    return za() ? n instanceof HTMLElement || n instanceof $t(n).HTMLElement : !1;
}
function Gp(n) {
    return !za() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof $t(n).ShadowRoot;
}
function Bo(n) {
    const { overflow: r, overflowX: s, overflowY: i, display: l } = dn(n);
    return /auto|scroll|overlay|hidden|clip/.test(r + i + s) && !["inline", "contents"].includes(l);
}
function uw(n) {
    return ["table", "td", "th"].includes(Rs(n));
}
function Va(n) {
    return [":popover-open", ":modal"].some((r) => {
        try {
            return n.matches(r);
        } catch {
            return !1;
        }
    });
}
function Ec(n) {
    const r = Cc(),
        s = cn(n) ? dn(n) : n;
    return (
        ["transform", "translate", "scale", "rotate", "perspective"].some((i) => (s[i] ? s[i] !== "none" : !1)) ||
        (s.containerType ? s.containerType !== "normal" : !1) ||
        (!r && (s.backdropFilter ? s.backdropFilter !== "none" : !1)) ||
        (!r && (s.filter ? s.filter !== "none" : !1)) ||
        ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((i) =>
            (s.willChange || "").includes(i)
        ) ||
        ["paint", "layout", "strict", "content"].some((i) => (s.contain || "").includes(i))
    );
}
function cw(n) {
    let r = mr(n);
    for (; En(r) && !Ss(r); ) {
        if (Ec(r)) return r;
        if (Va(r)) return null;
        r = mr(r);
    }
    return null;
}
function Cc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ss(n) {
    return ["html", "body", "#document"].includes(Rs(n));
}
function dn(n) {
    return $t(n).getComputedStyle(n);
}
function Ua(n) {
    return cn(n)
        ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
        : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function mr(n) {
    if (Rs(n) === "html") return n;
    const r = n.assignedSlot || n.parentNode || (Gp(n) && n.host) || Tn(n);
    return Gp(r) ? r.host : r;
}
function xh(n) {
    const r = mr(n);
    return Ss(r) ? (n.ownerDocument ? n.ownerDocument.body : n.body) : En(r) && Bo(r) ? r : xh(r);
}
function No(n, r, s) {
    var i;
    r === void 0 && (r = []), s === void 0 && (s = !0);
    const l = xh(n),
        u = l === ((i = n.ownerDocument) == null ? void 0 : i.body),
        f = $t(l);
    if (u) {
        const p = sc(f);
        return r.concat(f, f.visualViewport || [], Bo(l) ? l : [], p && s ? No(p) : []);
    }
    return r.concat(l, No(l, [], s));
}
function sc(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function wh(n) {
    const r = dn(n);
    let s = parseFloat(r.width) || 0,
        i = parseFloat(r.height) || 0;
    const l = En(n),
        u = l ? n.offsetWidth : s,
        f = l ? n.offsetHeight : i,
        p = ya(s) !== u || ya(i) !== f;
    return p && ((s = u), (i = f)), { width: s, height: i, $: p };
}
function bc(n) {
    return cn(n) ? n : n.contextElement;
}
function _s(n) {
    const r = bc(n);
    if (!En(r)) return _n(1);
    const s = r.getBoundingClientRect(),
        { width: i, height: l, $: u } = wh(r);
    let f = (u ? ya(s.width) : s.width) / i,
        p = (u ? ya(s.height) : s.height) / l;
    return (!f || !Number.isFinite(f)) && (f = 1), (!p || !Number.isFinite(p)) && (p = 1), { x: f, y: p };
}
const dw = _n(0);
function _h(n) {
    const r = $t(n);
    return !Cc() || !r.visualViewport ? dw : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function fw(n, r, s) {
    return r === void 0 && (r = !1), !s || (r && s !== $t(n)) ? !1 : r;
}
function Dr(n, r, s, i) {
    r === void 0 && (r = !1), s === void 0 && (s = !1);
    const l = n.getBoundingClientRect(),
        u = bc(n);
    let f = _n(1);
    r && (i ? cn(i) && (f = _s(i)) : (f = _s(n)));
    const p = fw(u, s, i) ? _h(u) : _n(0);
    let g = (l.left + p.x) / f.x,
        h = (l.top + p.y) / f.y,
        v = l.width / f.x,
        w = l.height / f.y;
    if (u) {
        const E = $t(u),
            A = i && cn(i) ? $t(i) : i;
        let M = E,
            N = sc(M);
        for (; N && i && A !== M; ) {
            const T = _s(N),
                F = N.getBoundingClientRect(),
                L = dn(N),
                $ = F.left + (N.clientLeft + parseFloat(L.paddingLeft)) * T.x,
                V = F.top + (N.clientTop + parseFloat(L.paddingTop)) * T.y;
            (g *= T.x), (h *= T.y), (v *= T.x), (w *= T.y), (g += $), (h += V), (M = $t(N)), (N = sc(M));
        }
    }
    return xa({ width: v, height: w, x: g, y: h });
}
function Tc(n, r) {
    const s = Ua(n).scrollLeft;
    return r ? r.left + s : Dr(Tn(n)).left + s;
}
function kh(n, r, s) {
    s === void 0 && (s = !1);
    const i = n.getBoundingClientRect(),
        l = i.left + r.scrollLeft - (s ? 0 : Tc(n, i)),
        u = i.top + r.scrollTop;
    return { x: l, y: u };
}
function pw(n) {
    let { elements: r, rect: s, offsetParent: i, strategy: l } = n;
    const u = l === "fixed",
        f = Tn(i),
        p = r ? Va(r.floating) : !1;
    if (i === f || (p && u)) return s;
    let g = { scrollLeft: 0, scrollTop: 0 },
        h = _n(1);
    const v = _n(0),
        w = En(i);
    if ((w || (!w && !u)) && ((Rs(i) !== "body" || Bo(f)) && (g = Ua(i)), En(i))) {
        const A = Dr(i);
        (h = _s(i)), (v.x = A.x + i.clientLeft), (v.y = A.y + i.clientTop);
    }
    const E = f && !w && !u ? kh(f, g, !0) : _n(0);
    return {
        width: s.width * h.x,
        height: s.height * h.y,
        x: s.x * h.x - g.scrollLeft * h.x + v.x + E.x,
        y: s.y * h.y - g.scrollTop * h.y + v.y + E.y,
    };
}
function mw(n) {
    return Array.from(n.getClientRects());
}
function hw(n) {
    const r = Tn(n),
        s = Ua(n),
        i = n.ownerDocument.body,
        l = Ut(r.scrollWidth, r.clientWidth, i.scrollWidth, i.clientWidth),
        u = Ut(r.scrollHeight, r.clientHeight, i.scrollHeight, i.clientHeight);
    let f = -s.scrollLeft + Tc(n);
    const p = -s.scrollTop;
    return (
        dn(i).direction === "rtl" && (f += Ut(r.clientWidth, i.clientWidth) - l), { width: l, height: u, x: f, y: p }
    );
}
function gw(n, r) {
    const s = $t(n),
        i = Tn(n),
        l = s.visualViewport;
    let u = i.clientWidth,
        f = i.clientHeight,
        p = 0,
        g = 0;
    if (l) {
        (u = l.width), (f = l.height);
        const h = Cc();
        (!h || (h && r === "fixed")) && ((p = l.offsetLeft), (g = l.offsetTop));
    }
    return { width: u, height: f, x: p, y: g };
}
function yw(n, r) {
    const s = Dr(n, !0, r === "fixed"),
        i = s.top + n.clientTop,
        l = s.left + n.clientLeft,
        u = En(n) ? _s(n) : _n(1),
        f = n.clientWidth * u.x,
        p = n.clientHeight * u.y,
        g = l * u.x,
        h = i * u.y;
    return { width: f, height: p, x: g, y: h };
}
function qp(n, r, s) {
    let i;
    if (r === "viewport") i = gw(n, s);
    else if (r === "document") i = hw(Tn(n));
    else if (cn(r)) i = yw(r, s);
    else {
        const l = _h(n);
        i = { x: r.x - l.x, y: r.y - l.y, width: r.width, height: r.height };
    }
    return xa(i);
}
function Sh(n, r) {
    const s = mr(n);
    return s === r || !cn(s) || Ss(s) ? !1 : dn(s).position === "fixed" || Sh(s, r);
}
function vw(n, r) {
    const s = r.get(n);
    if (s) return s;
    let i = No(n, [], !1).filter((p) => cn(p) && Rs(p) !== "body"),
        l = null;
    const u = dn(n).position === "fixed";
    let f = u ? mr(n) : n;
    for (; cn(f) && !Ss(f); ) {
        const p = dn(f),
            g = Ec(f);
        !g && p.position === "fixed" && (l = null),
            (
                u
                    ? !g && !l
                    : (!g && p.position === "static" && !!l && ["absolute", "fixed"].includes(l.position)) ||
                      (Bo(f) && !g && Sh(n, f))
            )
                ? (i = i.filter((v) => v !== f))
                : (l = p),
            (f = mr(f));
    }
    return r.set(n, i), i;
}
function xw(n) {
    let { element: r, boundary: s, rootBoundary: i, strategy: l } = n;
    const f = [...(s === "clippingAncestors" ? (Va(r) ? [] : vw(r, this._c)) : [].concat(s)), i],
        p = f[0],
        g = f.reduce(
            (h, v) => {
                const w = qp(r, v, l);
                return (
                    (h.top = Ut(w.top, h.top)),
                    (h.right = fr(w.right, h.right)),
                    (h.bottom = fr(w.bottom, h.bottom)),
                    (h.left = Ut(w.left, h.left)),
                    h
                );
            },
            qp(r, p, l)
        );
    return { width: g.right - g.left, height: g.bottom - g.top, x: g.left, y: g.top };
}
function ww(n) {
    const { width: r, height: s } = wh(n);
    return { width: r, height: s };
}
function _w(n, r, s) {
    const i = En(r),
        l = Tn(r),
        u = s === "fixed",
        f = Dr(n, !0, u, r);
    let p = { scrollLeft: 0, scrollTop: 0 };
    const g = _n(0);
    if (i || (!i && !u))
        if (((Rs(r) !== "body" || Bo(l)) && (p = Ua(r)), i)) {
            const E = Dr(r, !0, u, r);
            (g.x = E.x + r.clientLeft), (g.y = E.y + r.clientTop);
        } else l && (g.x = Tc(l));
    const h = l && !i && !u ? kh(l, p) : _n(0),
        v = f.left + p.scrollLeft - g.x - h.x,
        w = f.top + p.scrollTop - g.y - h.y;
    return { x: v, y: w, width: f.width, height: f.height };
}
function Hu(n) {
    return dn(n).position === "static";
}
function Xp(n, r) {
    if (!En(n) || dn(n).position === "fixed") return null;
    if (r) return r(n);
    let s = n.offsetParent;
    return Tn(n) === s && (s = s.ownerDocument.body), s;
}
function Eh(n, r) {
    const s = $t(n);
    if (Va(n)) return s;
    if (!En(n)) {
        let l = mr(n);
        for (; l && !Ss(l); ) {
            if (cn(l) && !Hu(l)) return l;
            l = mr(l);
        }
        return s;
    }
    let i = Xp(n, r);
    for (; i && uw(i) && Hu(i); ) i = Xp(i, r);
    return i && Ss(i) && Hu(i) && !Ec(i) ? s : i || cw(n) || s;
}
const kw = async function (n) {
    const r = this.getOffsetParent || Eh,
        s = this.getDimensions,
        i = await s(n.floating);
    return {
        reference: _w(n.reference, await r(n.floating), n.strategy),
        floating: { x: 0, y: 0, width: i.width, height: i.height },
    };
};
function Sw(n) {
    return dn(n).direction === "rtl";
}
const Ew = {
    convertOffsetParentRelativeRectToViewportRelativeRect: pw,
    getDocumentElement: Tn,
    getClippingRect: xw,
    getOffsetParent: Eh,
    getElementRects: kw,
    getClientRects: mw,
    getDimensions: ww,
    getScale: _s,
    isElement: cn,
    isRTL: Sw,
};
function Ch(n, r) {
    return n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height;
}
function Cw(n, r) {
    let s = null,
        i;
    const l = Tn(n);
    function u() {
        var p;
        clearTimeout(i), (p = s) == null || p.disconnect(), (s = null);
    }
    function f(p, g) {
        p === void 0 && (p = !1), g === void 0 && (g = 1), u();
        const h = n.getBoundingClientRect(),
            { left: v, top: w, width: E, height: A } = h;
        if ((p || r(), !E || !A)) return;
        const M = sa(w),
            N = sa(l.clientWidth - (v + E)),
            T = sa(l.clientHeight - (w + A)),
            F = sa(v),
            $ = { rootMargin: -M + "px " + -N + "px " + -T + "px " + -F + "px", threshold: Ut(0, fr(1, g)) || 1 };
        let V = !0;
        function H(se) {
            const ee = se[0].intersectionRatio;
            if (ee !== g) {
                if (!V) return f();
                ee
                    ? f(!1, ee)
                    : (i = setTimeout(() => {
                          f(!1, 1e-7);
                      }, 1e3));
            }
            ee === 1 && !Ch(h, n.getBoundingClientRect()) && f(), (V = !1);
        }
        try {
            s = new IntersectionObserver(H, { ...$, root: l.ownerDocument });
        } catch {
            s = new IntersectionObserver(H, $);
        }
        s.observe(n);
    }
    return f(!0), u;
}
function bw(n, r, s, i) {
    i === void 0 && (i = {});
    const {
            ancestorScroll: l = !0,
            ancestorResize: u = !0,
            elementResize: f = typeof ResizeObserver == "function",
            layoutShift: p = typeof IntersectionObserver == "function",
            animationFrame: g = !1,
        } = i,
        h = bc(n),
        v = l || u ? [...(h ? No(h) : []), ...No(r)] : [];
    v.forEach((F) => {
        l && F.addEventListener("scroll", s, { passive: !0 }), u && F.addEventListener("resize", s);
    });
    const w = h && p ? Cw(h, s) : null;
    let E = -1,
        A = null;
    f &&
        ((A = new ResizeObserver((F) => {
            let [L] = F;
            L &&
                L.target === h &&
                A &&
                (A.unobserve(r),
                cancelAnimationFrame(E),
                (E = requestAnimationFrame(() => {
                    var $;
                    ($ = A) == null || $.observe(r);
                }))),
                s();
        })),
        h && !g && A.observe(h),
        A.observe(r));
    let M,
        N = g ? Dr(n) : null;
    g && T();
    function T() {
        const F = Dr(n);
        N && !Ch(N, F) && s(), (N = F), (M = requestAnimationFrame(T));
    }
    return (
        s(),
        () => {
            var F;
            v.forEach((L) => {
                l && L.removeEventListener("scroll", s), u && L.removeEventListener("resize", s);
            }),
                w?.(),
                (F = A) == null || F.disconnect(),
                (A = null),
                g && cancelAnimationFrame(M);
        }
    );
}
const Tw = ow,
    Nw = iw,
    Pw = nw,
    Rw = lw,
    jw = rw,
    Jp = tw,
    Aw = aw,
    Ow = (n, r, s) => {
        const i = new Map(),
            l = { platform: Ew, ...s },
            u = { ...l.platform, _c: i };
        return ew(n, r, { ...l, platform: u });
    };
var ca = typeof document < "u" ? k.useLayoutEffect : k.useEffect;
function wa(n, r) {
    if (n === r) return !0;
    if (typeof n != typeof r) return !1;
    if (typeof n == "function" && n.toString() === r.toString()) return !0;
    let s, i, l;
    if (n && r && typeof n == "object") {
        if (Array.isArray(n)) {
            if (((s = n.length), s !== r.length)) return !1;
            for (i = s; i-- !== 0; ) if (!wa(n[i], r[i])) return !1;
            return !0;
        }
        if (((l = Object.keys(n)), (s = l.length), s !== Object.keys(r).length)) return !1;
        for (i = s; i-- !== 0; ) if (!{}.hasOwnProperty.call(r, l[i])) return !1;
        for (i = s; i-- !== 0; ) {
            const u = l[i];
            if (!(u === "_owner" && n.$$typeof) && !wa(n[u], r[u])) return !1;
        }
        return !0;
    }
    return n !== n && r !== r;
}
function bh(n) {
    return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function em(n, r) {
    const s = bh(n);
    return Math.round(r * s) / s;
}
function Ku(n) {
    const r = k.useRef(n);
    return (
        ca(() => {
            r.current = n;
        }),
        r
    );
}
function Lw(n) {
    n === void 0 && (n = {});
    const {
            placement: r = "bottom",
            strategy: s = "absolute",
            middleware: i = [],
            platform: l,
            elements: { reference: u, floating: f } = {},
            transform: p = !0,
            whileElementsMounted: g,
            open: h,
        } = n,
        [v, w] = k.useState({ x: 0, y: 0, strategy: s, placement: r, middlewareData: {}, isPositioned: !1 }),
        [E, A] = k.useState(i);
    wa(E, i) || A(i);
    const [M, N] = k.useState(null),
        [T, F] = k.useState(null),
        L = k.useCallback((D) => {
            D !== se.current && ((se.current = D), N(D));
        }, []),
        $ = k.useCallback((D) => {
            D !== ee.current && ((ee.current = D), F(D));
        }, []),
        V = u || M,
        H = f || T,
        se = k.useRef(null),
        ee = k.useRef(null),
        Se = k.useRef(v),
        Ee = g != null,
        _e = Ku(g),
        be = Ku(l),
        G = Ku(h),
        re = k.useCallback(() => {
            if (!se.current || !ee.current) return;
            const D = { placement: r, strategy: s, middleware: E };
            be.current && (D.platform = be.current),
                Ow(se.current, ee.current, D).then((X) => {
                    const q = { ...X, isPositioned: G.current !== !1 };
                    K.current &&
                        !wa(Se.current, q) &&
                        ((Se.current = q),
                        La.flushSync(() => {
                            w(q);
                        }));
                });
        }, [E, r, s, be, G]);
    ca(() => {
        h === !1 && Se.current.isPositioned && ((Se.current.isPositioned = !1), w((D) => ({ ...D, isPositioned: !1 })));
    }, [h]);
    const K = k.useRef(!1);
    ca(
        () => (
            (K.current = !0),
            () => {
                K.current = !1;
            }
        ),
        []
    ),
        ca(() => {
            if ((V && (se.current = V), H && (ee.current = H), V && H)) {
                if (_e.current) return _e.current(V, H, re);
                re();
            }
        }, [V, H, re, _e, Ee]);
    const ve = k.useMemo(() => ({ reference: se, floating: ee, setReference: L, setFloating: $ }), [L, $]),
        fe = k.useMemo(() => ({ reference: V, floating: H }), [V, H]),
        pe = k.useMemo(() => {
            const D = { position: s, left: 0, top: 0 };
            if (!fe.floating) return D;
            const X = em(fe.floating, v.x),
                q = em(fe.floating, v.y);
            return p
                ? {
                      ...D,
                      transform: "translate(" + X + "px, " + q + "px)",
                      ...(bh(fe.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: s, left: X, top: q };
        }, [s, p, fe.floating, v.x, v.y]);
    return k.useMemo(() => ({ ...v, update: re, refs: ve, elements: fe, floatingStyles: pe }), [v, re, ve, fe, pe]);
}
const Mw = (n) => {
        function r(s) {
            return {}.hasOwnProperty.call(s, "current");
        }
        return {
            name: "arrow",
            options: n,
            fn(s) {
                const { element: i, padding: l } = typeof n == "function" ? n(s) : n;
                return i && r(i)
                    ? i.current != null
                        ? Jp({ element: i.current, padding: l }).fn(s)
                        : {}
                    : i
                      ? Jp({ element: i, padding: l }).fn(s)
                      : {};
            },
        };
    },
    Dw = (n, r) => ({ ...Tw(n), options: [n, r] }),
    Iw = (n, r) => ({ ...Nw(n), options: [n, r] }),
    Fw = (n, r) => ({ ...Aw(n), options: [n, r] }),
    zw = (n, r) => ({ ...Pw(n), options: [n, r] }),
    Vw = (n, r) => ({ ...Rw(n), options: [n, r] }),
    Uw = (n, r) => ({ ...jw(n), options: [n, r] }),
    $w = (n, r) => ({ ...Mw(n), options: [n, r] });
var Bw = "Arrow",
    Th = k.forwardRef((n, r) => {
        const { children: s, width: i = 10, height: l = 5, ...u } = n;
        return y.jsx(Pt.svg, {
            ...u,
            ref: r,
            width: i,
            height: l,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: n.asChild ? s : y.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
    });
Th.displayName = Bw;
var Ww = Th;
function Zw(n) {
    const [r, s] = k.useState(void 0);
    return (
        Mr(() => {
            if (n) {
                s({ width: n.offsetWidth, height: n.offsetHeight });
                const i = new ResizeObserver((l) => {
                    if (!Array.isArray(l) || !l.length) return;
                    const u = l[0];
                    let f, p;
                    if ("borderBoxSize" in u) {
                        const g = u.borderBoxSize,
                            h = Array.isArray(g) ? g[0] : g;
                        (f = h.inlineSize), (p = h.blockSize);
                    } else (f = n.offsetWidth), (p = n.offsetHeight);
                    s({ width: f, height: p });
                });
                return i.observe(n, { box: "border-box" }), () => i.unobserve(n);
            } else s(void 0);
        }, [n]),
        r
    );
}
var Nh = "Popper",
    [Ph, Rh] = Ma(Nh),
    [mk, jh] = Ph(Nh),
    Ah = "PopperAnchor",
    Oh = k.forwardRef((n, r) => {
        const { __scopePopper: s, virtualRef: i, ...l } = n,
            u = jh(Ah, s),
            f = k.useRef(null),
            p = un(r, f);
        return (
            k.useEffect(() => {
                u.onAnchorChange(i?.current || f.current);
            }),
            i ? null : y.jsx(Pt.div, { ...l, ref: p })
        );
    });
Oh.displayName = Ah;
var Nc = "PopperContent",
    [Hw, Kw] = Ph(Nc),
    Lh = k.forwardRef((n, r) => {
        const {
                __scopePopper: s,
                side: i = "bottom",
                sideOffset: l = 0,
                align: u = "center",
                alignOffset: f = 0,
                arrowPadding: p = 0,
                avoidCollisions: g = !0,
                collisionBoundary: h = [],
                collisionPadding: v = 0,
                sticky: w = "partial",
                hideWhenDetached: E = !1,
                updatePositionStrategy: A = "optimized",
                onPlaced: M,
                ...N
            } = n,
            T = jh(Nc, s),
            [F, L] = k.useState(null),
            $ = un(r, (Me) => L(Me)),
            [V, H] = k.useState(null),
            se = Zw(V),
            ee = se?.width ?? 0,
            Se = se?.height ?? 0,
            Ee = i + (u !== "center" ? "-" + u : ""),
            _e = typeof v == "number" ? v : { top: 0, right: 0, bottom: 0, left: 0, ...v },
            be = Array.isArray(h) ? h : [h],
            G = be.length > 0,
            re = { padding: _e, boundary: be.filter(Yw), altBoundary: G },
            {
                refs: K,
                floatingStyles: ve,
                placement: fe,
                isPositioned: pe,
                middlewareData: D,
            } = Lw({
                strategy: "fixed",
                placement: Ee,
                whileElementsMounted: (...Me) => bw(...Me, { animationFrame: A === "always" }),
                elements: { reference: T.anchor },
                middleware: [
                    Dw({ mainAxis: l + Se, alignmentAxis: f }),
                    g && Iw({ mainAxis: !0, crossAxis: !1, limiter: w === "partial" ? Fw() : void 0, ...re }),
                    g && zw({ ...re }),
                    Vw({
                        ...re,
                        apply: ({ elements: Me, rects: Ie, availableWidth: Ue, availableHeight: dt }) => {
                            const { width: pn, height: xr } = Ie.reference,
                                Gt = Me.floating.style;
                            Gt.setProperty("--radix-popper-available-width", `${Ue}px`),
                                Gt.setProperty("--radix-popper-available-height", `${dt}px`),
                                Gt.setProperty("--radix-popper-anchor-width", `${pn}px`),
                                Gt.setProperty("--radix-popper-anchor-height", `${xr}px`);
                        },
                    }),
                    V && $w({ element: V, padding: p }),
                    Gw({ arrowWidth: ee, arrowHeight: Se }),
                    E && Uw({ strategy: "referenceHidden", ...re }),
                ],
            }),
            [X, q] = Ih(fe),
            b = Sn(M);
        Mr(() => {
            pe && b?.();
        }, [pe, b]);
        const z = D.arrow?.x,
            xe = D.arrow?.y,
            Te = D.arrow?.centerOffset !== 0,
            [Oe, Le] = k.useState();
        return (
            Mr(() => {
                F && Le(window.getComputedStyle(F).zIndex);
            }, [F]),
            y.jsx("div", {
                ref: K.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...ve,
                    transform: pe ? ve.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: Oe,
                    "--radix-popper-transform-origin": [D.transformOrigin?.x, D.transformOrigin?.y].join(" "),
                    ...(D.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
                },
                dir: n.dir,
                children: y.jsx(Hw, {
                    scope: s,
                    placedSide: X,
                    onArrowChange: H,
                    arrowX: z,
                    arrowY: xe,
                    shouldHideArrow: Te,
                    children: y.jsx(Pt.div, {
                        "data-side": X,
                        "data-align": q,
                        ...N,
                        ref: $,
                        style: { ...N.style, animation: pe ? void 0 : "none" },
                    }),
                }),
            })
        );
    });
Lh.displayName = Nc;
var Mh = "PopperArrow",
    Qw = { top: "bottom", right: "left", bottom: "top", left: "right" },
    Dh = k.forwardRef(function (r, s) {
        const { __scopePopper: i, ...l } = r,
            u = Kw(Mh, i),
            f = Qw[u.placedSide];
        return y.jsx("span", {
            ref: u.onArrowChange,
            style: {
                position: "absolute",
                left: u.arrowX,
                top: u.arrowY,
                [f]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[u.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[u.placedSide],
                visibility: u.shouldHideArrow ? "hidden" : void 0,
            },
            children: y.jsx(Ww, { ...l, ref: s, style: { ...l.style, display: "block" } }),
        });
    });
Dh.displayName = Mh;
function Yw(n) {
    return n !== null;
}
var Gw = (n) => ({
    name: "transformOrigin",
    options: n,
    fn(r) {
        const { placement: s, rects: i, middlewareData: l } = r,
            f = l.arrow?.centerOffset !== 0,
            p = f ? 0 : n.arrowWidth,
            g = f ? 0 : n.arrowHeight,
            [h, v] = Ih(s),
            w = { start: "0%", center: "50%", end: "100%" }[v],
            E = (l.arrow?.x ?? 0) + p / 2,
            A = (l.arrow?.y ?? 0) + g / 2;
        let M = "",
            N = "";
        return (
            h === "bottom"
                ? ((M = f ? w : `${E}px`), (N = `${-g}px`))
                : h === "top"
                  ? ((M = f ? w : `${E}px`), (N = `${i.floating.height + g}px`))
                  : h === "right"
                    ? ((M = `${-g}px`), (N = f ? w : `${A}px`))
                    : h === "left" && ((M = `${i.floating.width + g}px`), (N = f ? w : `${A}px`)),
            { data: { x: M, y: N } }
        );
    },
});
function Ih(n) {
    const [r, s = "center"] = n.split("-");
    return [r, s];
}
var qw = Oh,
    Xw = Lh,
    Jw = Dh,
    [$a] = Ma("Tooltip", [Rh]),
    Pc = Rh(),
    Fh = "TooltipProvider",
    e1 = 700,
    tm = "tooltip.open",
    [t1, zh] = $a(Fh),
    Vh = (n) => {
        const {
                __scopeTooltip: r,
                delayDuration: s = e1,
                skipDelayDuration: i = 300,
                disableHoverableContent: l = !1,
                children: u,
            } = n,
            f = k.useRef(!0),
            p = k.useRef(!1),
            g = k.useRef(0);
        return (
            k.useEffect(() => {
                const h = g.current;
                return () => window.clearTimeout(h);
            }, []),
            y.jsx(t1, {
                scope: r,
                isOpenDelayedRef: f,
                delayDuration: s,
                onOpen: k.useCallback(() => {
                    window.clearTimeout(g.current), (f.current = !1);
                }, []),
                onClose: k.useCallback(() => {
                    window.clearTimeout(g.current), (g.current = window.setTimeout(() => (f.current = !0), i));
                }, [i]),
                isPointerInTransitRef: p,
                onPointerInTransitChange: k.useCallback((h) => {
                    p.current = h;
                }, []),
                disableHoverableContent: l,
                children: u,
            })
        );
    };
Vh.displayName = Fh;
var Uh = "Tooltip",
    [hk, Ba] = $a(Uh),
    oc = "TooltipTrigger",
    n1 = k.forwardRef((n, r) => {
        const { __scopeTooltip: s, ...i } = n,
            l = Ba(oc, s),
            u = zh(oc, s),
            f = Pc(s),
            p = k.useRef(null),
            g = un(r, p, l.onTriggerChange),
            h = k.useRef(!1),
            v = k.useRef(!1),
            w = k.useCallback(() => (h.current = !1), []);
        return (
            k.useEffect(() => () => document.removeEventListener("pointerup", w), [w]),
            y.jsx(qw, {
                asChild: !0,
                ...f,
                children: y.jsx(Pt.button, {
                    "aria-describedby": l.open ? l.contentId : void 0,
                    "data-state": l.stateAttribute,
                    ...i,
                    ref: g,
                    onPointerMove: ct(n.onPointerMove, (E) => {
                        E.pointerType !== "touch" &&
                            !v.current &&
                            !u.isPointerInTransitRef.current &&
                            (l.onTriggerEnter(), (v.current = !0));
                    }),
                    onPointerLeave: ct(n.onPointerLeave, () => {
                        l.onTriggerLeave(), (v.current = !1);
                    }),
                    onPointerDown: ct(n.onPointerDown, () => {
                        l.open && l.onClose(),
                            (h.current = !0),
                            document.addEventListener("pointerup", w, { once: !0 });
                    }),
                    onFocus: ct(n.onFocus, () => {
                        h.current || l.onOpen();
                    }),
                    onBlur: ct(n.onBlur, l.onClose),
                    onClick: ct(n.onClick, l.onClose),
                }),
            })
        );
    });
n1.displayName = oc;
var r1 = "TooltipPortal",
    [gk, s1] = $a(r1, { forceMount: void 0 }),
    Es = "TooltipContent",
    $h = k.forwardRef((n, r) => {
        const s = s1(Es, n.__scopeTooltip),
            { forceMount: i = s.forceMount, side: l = "top", ...u } = n,
            f = Ba(Es, n.__scopeTooltip);
        return y.jsx(hc, {
            present: i || f.open,
            children: f.disableHoverableContent
                ? y.jsx(Bh, { side: l, ...u, ref: r })
                : y.jsx(o1, { side: l, ...u, ref: r }),
        });
    }),
    o1 = k.forwardRef((n, r) => {
        const s = Ba(Es, n.__scopeTooltip),
            i = zh(Es, n.__scopeTooltip),
            l = k.useRef(null),
            u = un(r, l),
            [f, p] = k.useState(null),
            { trigger: g, onClose: h } = s,
            v = l.current,
            { onPointerInTransitChange: w } = i,
            E = k.useCallback(() => {
                p(null), w(!1);
            }, [w]),
            A = k.useCallback(
                (M, N) => {
                    const T = M.currentTarget,
                        F = { x: M.clientX, y: M.clientY },
                        L = c1(F, T.getBoundingClientRect()),
                        $ = d1(F, L),
                        V = f1(N.getBoundingClientRect()),
                        H = m1([...$, ...V]);
                    p(H), w(!0);
                },
                [w]
            );
        return (
            k.useEffect(() => () => E(), [E]),
            k.useEffect(() => {
                if (g && v) {
                    const M = (T) => A(T, v),
                        N = (T) => A(T, g);
                    return (
                        g.addEventListener("pointerleave", M),
                        v.addEventListener("pointerleave", N),
                        () => {
                            g.removeEventListener("pointerleave", M), v.removeEventListener("pointerleave", N);
                        }
                    );
                }
            }, [g, v, A, E]),
            k.useEffect(() => {
                if (f) {
                    const M = (N) => {
                        const T = N.target,
                            F = { x: N.clientX, y: N.clientY },
                            L = g?.contains(T) || v?.contains(T),
                            $ = !p1(F, f);
                        L ? E() : $ && (E(), h());
                    };
                    return (
                        document.addEventListener("pointermove", M),
                        () => document.removeEventListener("pointermove", M)
                    );
                }
            }, [g, v, f, h, E]),
            y.jsx(Bh, { ...n, ref: u })
        );
    }),
    [i1, a1] = $a(Uh, { isInside: !1 }),
    l1 = ax("TooltipContent"),
    Bh = k.forwardRef((n, r) => {
        const {
                __scopeTooltip: s,
                children: i,
                "aria-label": l,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                ...p
            } = n,
            g = Ba(Es, s),
            h = Pc(s),
            { onClose: v } = g;
        return (
            k.useEffect(() => (document.addEventListener(tm, v), () => document.removeEventListener(tm, v)), [v]),
            k.useEffect(() => {
                if (g.trigger) {
                    const w = (E) => {
                        E.target?.contains(g.trigger) && v();
                    };
                    return (
                        window.addEventListener("scroll", w, { capture: !0 }),
                        () => window.removeEventListener("scroll", w, { capture: !0 })
                    );
                }
            }, [g.trigger, v]),
            y.jsx(mc, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: (w) => w.preventDefault(),
                onDismiss: v,
                children: y.jsxs(Xw, {
                    "data-state": g.stateAttribute,
                    ...h,
                    ...p,
                    ref: r,
                    style: {
                        ...p.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                    },
                    children: [
                        y.jsx(l1, { children: i }),
                        y.jsx(i1, {
                            scope: s,
                            isInside: !0,
                            children: y.jsx(Px, { id: g.contentId, role: "tooltip", children: l || i }),
                        }),
                    ],
                }),
            })
        );
    });
$h.displayName = Es;
var Wh = "TooltipArrow",
    u1 = k.forwardRef((n, r) => {
        const { __scopeTooltip: s, ...i } = n,
            l = Pc(s);
        return a1(Wh, s).isInside ? null : y.jsx(Jw, { ...l, ...i, ref: r });
    });
u1.displayName = Wh;
function c1(n, r) {
    const s = Math.abs(r.top - n.y),
        i = Math.abs(r.bottom - n.y),
        l = Math.abs(r.right - n.x),
        u = Math.abs(r.left - n.x);
    switch (Math.min(s, i, l, u)) {
        case u:
            return "left";
        case l:
            return "right";
        case s:
            return "top";
        case i:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function d1(n, r, s = 5) {
    const i = [];
    switch (r) {
        case "top":
            i.push({ x: n.x - s, y: n.y + s }, { x: n.x + s, y: n.y + s });
            break;
        case "bottom":
            i.push({ x: n.x - s, y: n.y - s }, { x: n.x + s, y: n.y - s });
            break;
        case "left":
            i.push({ x: n.x + s, y: n.y - s }, { x: n.x + s, y: n.y + s });
            break;
        case "right":
            i.push({ x: n.x - s, y: n.y - s }, { x: n.x - s, y: n.y + s });
            break;
    }
    return i;
}
function f1(n) {
    const { top: r, right: s, bottom: i, left: l } = n;
    return [
        { x: l, y: r },
        { x: s, y: r },
        { x: s, y: i },
        { x: l, y: i },
    ];
}
function p1(n, r) {
    const { x: s, y: i } = n;
    let l = !1;
    for (let u = 0, f = r.length - 1; u < r.length; f = u++) {
        const p = r[u].x,
            g = r[u].y,
            h = r[f].x,
            v = r[f].y;
        g > i != v > i && s < ((h - p) * (i - g)) / (v - g) + p && (l = !l);
    }
    return l;
}
function m1(n) {
    const r = n.slice();
    return r.sort((s, i) => (s.x < i.x ? -1 : s.x > i.x ? 1 : s.y < i.y ? -1 : s.y > i.y ? 1 : 0)), h1(r);
}
function h1(n) {
    if (n.length <= 1) return n.slice();
    const r = [];
    for (let i = 0; i < n.length; i++) {
        const l = n[i];
        for (; r.length >= 2; ) {
            const u = r[r.length - 1],
                f = r[r.length - 2];
            if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x)) r.pop();
            else break;
        }
        r.push(l);
    }
    r.pop();
    const s = [];
    for (let i = n.length - 1; i >= 0; i--) {
        const l = n[i];
        for (; s.length >= 2; ) {
            const u = s[s.length - 1],
                f = s[s.length - 2];
            if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x)) s.pop();
            else break;
        }
        s.push(l);
    }
    return s.pop(), r.length === 1 && s.length === 1 && r[0].x === s[0].x && r[0].y === s[0].y ? r : r.concat(s);
}
var g1 = Vh,
    Zh = $h;
const y1 = g1,
    v1 = k.forwardRef(({ className: n, sideOffset: r = 4, ...s }, i) =>
        y.jsx(Zh, {
            ref: i,
            sideOffset: r,
            className: Ge(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
                n
            ),
            ...s,
        })
    );
v1.displayName = Zh.displayName;
const Hh = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx("div", {
        ref: s,
        className: Ge("shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm", n),
        ...r,
    })
);
Hh.displayName = "Card";
const x1 = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx("div", { ref: s, className: Ge("flex flex-col space-y-1.5 p-6", n), ...r })
);
x1.displayName = "CardHeader";
const w1 = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx("div", { ref: s, className: Ge("text-2xl font-semibold leading-none tracking-tight", n), ...r })
);
w1.displayName = "CardTitle";
const _1 = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx("div", { ref: s, className: Ge("text-sm text-muted-foreground", n), ...r })
);
_1.displayName = "CardDescription";
const Kh = k.forwardRef(({ className: n, ...r }, s) => y.jsx("div", { ref: s, className: Ge("p-6 pt-0", n), ...r }));
Kh.displayName = "CardContent";
const k1 = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx("div", { ref: s, className: Ge("flex items-center p-6 pt-0", n), ...r })
);
k1.displayName = "CardFooter";
function S1() {
    return y.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: y.jsx(Hh, {
            className: "w-full max-w-md mx-4",
            children: y.jsxs(Kh, {
                className: "pt-6",
                children: [
                    y.jsxs("div", {
                        className: "flex mb-4 gap-2",
                        children: [
                            y.jsx(qx, { className: "h-8 w-8 text-red-500" }),
                            y.jsx("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "404 Page Not Found",
                            }),
                        ],
                    }),
                    y.jsx("p", {
                        className: "mt-4 text-sm text-gray-600",
                        children: "Did you forget to add the page to the router?",
                    }),
                ],
            }),
        }),
    });
}
const E1 = xc(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
        {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground border border-primary-border",
                    destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
                    outline: " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
                    secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
                    ghost: "border border-transparent",
                },
                size: {
                    default: "min-h-9 px-4 py-2",
                    sm: "min-h-8 rounded-md px-3 text-xs",
                    lg: "min-h-10 rounded-md px-8",
                    icon: "h-9 w-9",
                },
            },
            defaultVariants: { variant: "default", size: "default" },
        }
    ),
    xn = k.forwardRef(({ className: n, variant: r, size: s, asChild: i = !1, ...l }, u) => {
        const f = i ? Rm : "button";
        return y.jsx(f, { className: Ge(E1({ variant: r, size: s, className: n })), ref: u, ...l });
    });
xn.displayName = "Button";
function C1() {
    const [n, r] = k.useState(!1),
        [s, i] = k.useState(!1),
        [l] = Yv();
    k.useEffect(() => {
        const f = () => {
            i(window.scrollY > 20);
        };
        return window.addEventListener("scroll", f), () => window.removeEventListener("scroll", f);
    }, []);
    const u = [
        { name: "Beranda", href: "/", type: "internal" },
        { name: "Tentang Kami", href: "#about", type: "anchor" },
        { name: "Katalog", href: "https://store.haebot.com/katalog", type: "external" },
        { name: "Project", href: "https://project.haebot.com", type: "external" },
        { name: "Network ERP & AI", href: "https://nerpai.app", type: "external" },
    ];
    return y.jsx("nav", {
        className: Ge(
            "fixed top-0 w-full z-50 transition-all duration-300",
            s ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-border/50 py-3" : "bg-transparent py-6"
        ),
        children: y.jsxs("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                y.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                        y.jsxs(Dp, {
                            href: "/",
                            className: "flex items-center space-x-2 group",
                            children: [
                                y.jsx("div", {
                                    className: "p-1 bg-white rounded-lg transition-colors overflow-hidden",
                                    children: y.jsx("img", {
                                        src: "/logo.webp",
                                        alt: "Haebot Teknologi",
                                        className: "w-10 h-10 object-contain",
                                    }),
                                }),
                                y.jsxs("span", {
                                    className: "font-display font-bold text-2xl text-foreground tracking-tight",
                                    children: [
                                        "Haebot Teknologi",
                                        y.jsx("span", { className: "text-primary", children: "." }),
                                    ],
                                }),
                            ],
                        }),
                        y.jsxs("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: [
                                u.map((f) =>
                                    f.type === "external"
                                        ? y.jsxs(
                                              "a",
                                              {
                                                  href: f.href,
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  className:
                                                      "text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group",
                                                  children: [
                                                      f.name,
                                                      y.jsx(Wp, {
                                                          className:
                                                              "w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity",
                                                      }),
                                                  ],
                                              },
                                              f.name
                                          )
                                        : f.type === "anchor"
                                          ? y.jsx(
                                                "a",
                                                {
                                                    href: f.href,
                                                    className:
                                                        "text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
                                                    children: f.name,
                                                },
                                                f.name
                                            )
                                          : y.jsx(
                                                Dp,
                                                {
                                                    href: f.href,
                                                    className: Ge(
                                                        "text-sm font-medium transition-colors",
                                                        l === f.href
                                                            ? "text-primary font-semibold"
                                                            : "text-muted-foreground hover:text-primary"
                                                    ),
                                                    children: f.name,
                                                },
                                                f.name
                                            )
                                ),
                                y.jsx("a", {
                                    href: "#contact",
                                    children: y.jsx(xn, {
                                        className: "shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all",
                                        children: "Hubungi Kami",
                                    }),
                                }),
                            ],
                        }),
                        y.jsx("button", {
                            onClick: () => r(!n),
                            className: "md:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors",
                            children: n ? y.jsx(ih, { className: "w-6 h-6" }) : y.jsx(n0, { className: "w-6 h-6" }),
                        }),
                    ],
                }),
                n &&
                    y.jsx("div", {
                        className:
                            "md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl animate-in slide-in-from-top-5",
                        children: y.jsxs("div", {
                            className: "px-4 py-6 space-y-4 flex flex-col",
                            children: [
                                u.map((f) =>
                                    f.type === "external"
                                        ? y.jsxs(
                                              "a",
                                              {
                                                  href: f.href,
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  className:
                                                      "text-lg font-medium text-muted-foreground hover:text-primary flex items-center justify-between",
                                                  onClick: () => r(!1),
                                                  children: [f.name, y.jsx(Wp, { className: "w-4 h-4" })],
                                              },
                                              f.name
                                          )
                                        : y.jsx(
                                              "a",
                                              {
                                                  href: f.type === "anchor" ? f.href : "/",
                                                  className: "text-lg font-medium text-foreground hover:text-primary",
                                                  onClick: () => r(!1),
                                                  children: f.name,
                                              },
                                              f.name
                                          )
                                ),
                                y.jsx("div", {
                                    className: "pt-4 border-t border-border",
                                    children: y.jsx("a", {
                                        href: "#contact",
                                        onClick: () => r(!1),
                                        children: y.jsx(xn, {
                                            className: "w-full text-lg py-6 shadow-md",
                                            children: "Hubungi Kami",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    }),
            ],
        }),
    });
}
function oa({ icon: n, title: r, description: s, className: i }) {
    return y.jsxs("div", {
        className: Ge(
            "group relative p-8 bg-card rounded-2xl border border-border/50",
            "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
            "transition-all duration-300 ease-out",
            i
        ),
        children: [
            y.jsx("div", {
                className:
                    "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl",
            }),
            y.jsxs("div", {
                className: "relative z-10",
                children: [
                    y.jsx("div", {
                        className:
                            "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300",
                        children: n,
                    }),
                    y.jsx("h3", {
                        className:
                            "text-xl font-bold mb-3 text-foreground font-display group-hover:text-primary transition-colors",
                        children: r,
                    }),
                    y.jsx("p", { className: "text-muted-foreground leading-relaxed", children: s }),
                ],
            }),
        ],
    });
}
function ia({ title: n, description: r, image: s, link: i }) {
    return y.jsxs("a", {
        href: i,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group block relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted isolate",
        children: [
            y.jsx("img", {
                src: s,
                alt: n,
                className:
                    "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
            }),
            y.jsx("div", {
                className:
                    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300",
            }),
            y.jsxs("div", {
                className: "absolute inset-0 p-6 flex flex-col justify-end text-white",
                children: [
                    y.jsx("h3", {
                        className:
                            "text-2xl font-bold font-display mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300",
                        children: n,
                    }),
                    y.jsx("p", {
                        className:
                            "text-white/80 text-sm mb-4 line-clamp-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75",
                        children: r,
                    }),
                    y.jsxs("div", {
                        className:
                            "flex items-center gap-2 text-primary-foreground font-medium text-sm translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100",
                        children: [
                            "Lihat Produk ",
                            y.jsx(oh, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var Wo = (n) => n.type === "checkbox",
    Or = (n) => n instanceof Date,
    Tt = (n) => n == null;
const Qh = (n) => typeof n == "object";
var ot = (n) => !Tt(n) && !Array.isArray(n) && Qh(n) && !Or(n),
    Yh = (n) => (ot(n) && n.target ? (Wo(n.target) ? n.target.checked : n.target.value) : n),
    b1 = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
    Gh = (n, r) => n.has(b1(r)),
    T1 = (n) => {
        const r = n.constructor && n.constructor.prototype;
        return ot(r) && r.hasOwnProperty("isPrototypeOf");
    },
    Rc = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function yt(n) {
    let r;
    const s = Array.isArray(n),
        i = typeof FileList < "u" ? n instanceof FileList : !1;
    if (n instanceof Date) r = new Date(n);
    else if (n instanceof Set) r = new Set(n);
    else if (!(Rc && (n instanceof Blob || i)) && (s || ot(n)))
        if (((r = s ? [] : {}), !s && !T1(n))) r = n;
        else for (const l in n) n.hasOwnProperty(l) && (r[l] = yt(n[l]));
    else return n;
    return r;
}
var Wa = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
    st = (n) => n === void 0,
    te = (n, r, s) => {
        if (!r || !ot(n)) return s;
        const i = Wa(r.split(/[,[\].]+?/)).reduce((l, u) => (Tt(l) ? l : l[u]), n);
        return st(i) || i === n ? (st(n[r]) ? s : n[r]) : i;
    },
    Vt = (n) => typeof n == "boolean",
    jc = (n) => /^\w*$/.test(n),
    qh = (n) => Wa(n.replace(/["|']|\]/g, "").split(/\.|\[/)),
    $e = (n, r, s) => {
        let i = -1;
        const l = jc(r) ? [r] : qh(r),
            u = l.length,
            f = u - 1;
        for (; ++i < u; ) {
            const p = l[i];
            let g = s;
            if (i !== f) {
                const h = n[p];
                g = ot(h) || Array.isArray(h) ? h : isNaN(+l[i + 1]) ? {} : [];
            }
            if (p === "__proto__" || p === "constructor" || p === "prototype") return;
            (n[p] = g), (n = n[p]);
        }
    };
const _a = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
    sn = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" },
    Fn = {
        max: "max",
        min: "min",
        maxLength: "maxLength",
        minLength: "minLength",
        pattern: "pattern",
        required: "required",
        validate: "validate",
    },
    Xh = Ne.createContext(null),
    Za = () => Ne.useContext(Xh),
    N1 = (n) => {
        const { children: r, ...s } = n;
        return Ne.createElement(Xh.Provider, { value: s }, r);
    };
var Jh = (n, r, s, i = !0) => {
    const l = { defaultValues: r._defaultValues };
    for (const u in n)
        Object.defineProperty(l, u, {
            get: () => {
                const f = u;
                return r._proxyFormState[f] !== sn.all && (r._proxyFormState[f] = !i || sn.all), s && (s[f] = !0), n[f];
            },
        });
    return l;
};
function P1(n) {
    const r = Za(),
        { control: s = r.control, disabled: i, name: l, exact: u } = n || {},
        [f, p] = Ne.useState(s._formState),
        g = Ne.useRef({
            isDirty: !1,
            isLoading: !1,
            dirtyFields: !1,
            touchedFields: !1,
            validatingFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1,
        }),
        h = Ne.useRef(l);
    return (
        (h.current = l),
        Ne.useEffect(
            () =>
                s._subscribe({
                    name: h.current,
                    formState: g.current,
                    exact: u,
                    callback: (v) => {
                        !i && p({ ...s._formState, ...v });
                    },
                }),
            [s, i, u]
        ),
        Ne.useEffect(() => {
            g.current.isValid && s._setValid(!0);
        }, [s]),
        Ne.useMemo(() => Jh(f, s, g.current, !1), [f, s])
    );
}
var wn = (n) => typeof n == "string",
    eg = (n, r, s, i, l) =>
        wn(n)
            ? (i && r.watch.add(n), te(s, n, l))
            : Array.isArray(n)
              ? n.map((u) => (i && r.watch.add(u), te(s, u)))
              : (i && (r.watchAll = !0), s);
function R1(n) {
    const r = Za(),
        { control: s = r.control, name: i, defaultValue: l, disabled: u, exact: f } = n || {},
        p = Ne.useRef(i),
        g = Ne.useRef(l);
    (p.current = i),
        Ne.useEffect(
            () =>
                s._subscribe({
                    name: p.current,
                    formState: { values: !0 },
                    exact: f,
                    callback: (w) => !u && v(eg(p.current, s._names, w.values || s._formValues, !1, g.current)),
                }),
            [s, u, f]
        );
    const [h, v] = Ne.useState(s._getWatch(i, l));
    return Ne.useEffect(() => s._removeUnmounted()), h;
}
function j1(n) {
    const r = Za(),
        { name: s, disabled: i, control: l = r.control, shouldUnregister: u } = n,
        f = Gh(l._names.array, s),
        p = R1({
            control: l,
            name: s,
            defaultValue: te(l._formValues, s, te(l._defaultValues, s, n.defaultValue)),
            exact: !0,
        }),
        g = P1({ control: l, name: s, exact: !0 }),
        h = Ne.useRef(n),
        v = Ne.useRef(l.register(s, { ...n.rules, value: p, ...(Vt(n.disabled) ? { disabled: n.disabled } : {}) })),
        w = Ne.useMemo(
            () =>
                Object.defineProperties(
                    {},
                    {
                        invalid: { enumerable: !0, get: () => !!te(g.errors, s) },
                        isDirty: { enumerable: !0, get: () => !!te(g.dirtyFields, s) },
                        isTouched: { enumerable: !0, get: () => !!te(g.touchedFields, s) },
                        isValidating: { enumerable: !0, get: () => !!te(g.validatingFields, s) },
                        error: { enumerable: !0, get: () => te(g.errors, s) },
                    }
                ),
            [g, s]
        ),
        E = Ne.useCallback((T) => v.current.onChange({ target: { value: Yh(T), name: s }, type: _a.CHANGE }), [s]),
        A = Ne.useCallback(
            () => v.current.onBlur({ target: { value: te(l._formValues, s), name: s }, type: _a.BLUR }),
            [s, l._formValues]
        ),
        M = Ne.useCallback(
            (T) => {
                const F = te(l._fields, s);
                F &&
                    T &&
                    (F._f.ref = {
                        focus: () => T.focus(),
                        select: () => T.select(),
                        setCustomValidity: (L) => T.setCustomValidity(L),
                        reportValidity: () => T.reportValidity(),
                    });
            },
            [l._fields, s]
        ),
        N = Ne.useMemo(
            () => ({
                name: s,
                value: p,
                ...(Vt(i) || g.disabled ? { disabled: g.disabled || i } : {}),
                onChange: E,
                onBlur: A,
                ref: M,
            }),
            [s, i, g.disabled, E, A, M, p]
        );
    return (
        Ne.useEffect(() => {
            const T = l._options.shouldUnregister || u;
            l.register(s, { ...h.current.rules, ...(Vt(h.current.disabled) ? { disabled: h.current.disabled } : {}) });
            const F = (L, $) => {
                const V = te(l._fields, L);
                V && V._f && (V._f.mount = $);
            };
            if ((F(s, !0), T)) {
                const L = yt(te(l._options.defaultValues, s));
                $e(l._defaultValues, s, L), st(te(l._formValues, s)) && $e(l._formValues, s, L);
            }
            return (
                !f && l.register(s),
                () => {
                    (f ? T && !l._state.action : T) ? l.unregister(s) : F(s, !1);
                }
            );
        }, [s, l, f, u]),
        Ne.useEffect(() => {
            l._setDisabledField({ disabled: i, name: s });
        }, [i, s, l]),
        Ne.useMemo(() => ({ field: N, formState: g, fieldState: w }), [N, g, w])
    );
}
const A1 = (n) => n.render(j1(n));
var tg = (n, r, s, i, l) => (r ? { ...s[n], types: { ...(s[n] && s[n].types ? s[n].types : {}), [i]: l || !0 } } : {}),
    Co = (n) => (Array.isArray(n) ? n : [n]),
    nm = () => {
        let n = [];
        return {
            get observers() {
                return n;
            },
            next: (l) => {
                for (const u of n) u.next && u.next(l);
            },
            subscribe: (l) => (
                n.push(l),
                {
                    unsubscribe: () => {
                        n = n.filter((u) => u !== l);
                    },
                }
            ),
            unsubscribe: () => {
                n = [];
            },
        };
    },
    ic = (n) => Tt(n) || !Qh(n);
function dr(n, r) {
    if (ic(n) || ic(r)) return n === r;
    if (Or(n) && Or(r)) return n.getTime() === r.getTime();
    const s = Object.keys(n),
        i = Object.keys(r);
    if (s.length !== i.length) return !1;
    for (const l of s) {
        const u = n[l];
        if (!i.includes(l)) return !1;
        if (l !== "ref") {
            const f = r[l];
            if ((Or(u) && Or(f)) || (ot(u) && ot(f)) || (Array.isArray(u) && Array.isArray(f)) ? !dr(u, f) : u !== f)
                return !1;
        }
    }
    return !0;
}
var bt = (n) => ot(n) && !Object.keys(n).length,
    Ac = (n) => n.type === "file",
    on = (n) => typeof n == "function",
    ka = (n) => {
        if (!Rc) return !1;
        const r = n ? n.ownerDocument : 0;
        return n instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
    },
    ng = (n) => n.type === "select-multiple",
    Oc = (n) => n.type === "radio",
    O1 = (n) => Oc(n) || Wo(n),
    Qu = (n) => ka(n) && n.isConnected;
function L1(n, r) {
    const s = r.slice(0, -1).length;
    let i = 0;
    for (; i < s; ) n = st(n) ? i++ : n[r[i++]];
    return n;
}
function M1(n) {
    for (const r in n) if (n.hasOwnProperty(r) && !st(n[r])) return !1;
    return !0;
}
function ut(n, r) {
    const s = Array.isArray(r) ? r : jc(r) ? [r] : qh(r),
        i = s.length === 1 ? n : L1(n, s),
        l = s.length - 1,
        u = s[l];
    return i && delete i[u], l !== 0 && ((ot(i) && bt(i)) || (Array.isArray(i) && M1(i))) && ut(n, s.slice(0, -1)), n;
}
var rg = (n) => {
    for (const r in n) if (on(n[r])) return !0;
    return !1;
};
function Sa(n, r = {}) {
    const s = Array.isArray(n);
    if (ot(n) || s)
        for (const i in n)
            Array.isArray(n[i]) || (ot(n[i]) && !rg(n[i]))
                ? ((r[i] = Array.isArray(n[i]) ? [] : {}), Sa(n[i], r[i]))
                : Tt(n[i]) || (r[i] = !0);
    return r;
}
function sg(n, r, s) {
    const i = Array.isArray(n);
    if (ot(n) || i)
        for (const l in n)
            Array.isArray(n[l]) || (ot(n[l]) && !rg(n[l]))
                ? st(r) || ic(s[l])
                    ? (s[l] = Array.isArray(n[l]) ? Sa(n[l], []) : { ...Sa(n[l]) })
                    : sg(n[l], Tt(r) ? {} : r[l], s[l])
                : (s[l] = !dr(n[l], r[l]));
    return s;
}
var wo = (n, r) => sg(n, r, Sa(r));
const rm = { value: !1, isValid: !1 },
    sm = { value: !0, isValid: !0 };
var og = (n) => {
        if (Array.isArray(n)) {
            if (n.length > 1) {
                const r = n.filter((s) => s && s.checked && !s.disabled).map((s) => s.value);
                return { value: r, isValid: !!r.length };
            }
            return n[0].checked && !n[0].disabled
                ? n[0].attributes && !st(n[0].attributes.value)
                    ? st(n[0].value) || n[0].value === ""
                        ? sm
                        : { value: n[0].value, isValid: !0 }
                    : sm
                : rm;
        }
        return rm;
    },
    ig = (n, { valueAsNumber: r, valueAsDate: s, setValueAs: i }) =>
        st(n) ? n : r ? (n === "" ? NaN : n && +n) : s && wn(n) ? new Date(n) : i ? i(n) : n;
const om = { isValid: !1, value: null };
var ag = (n) =>
    Array.isArray(n)
        ? n.reduce((r, s) => (s && s.checked && !s.disabled ? { isValid: !0, value: s.value } : r), om)
        : om;
function im(n) {
    const r = n.ref;
    return Ac(r)
        ? r.files
        : Oc(r)
          ? ag(n.refs).value
          : ng(r)
            ? [...r.selectedOptions].map(({ value: s }) => s)
            : Wo(r)
              ? og(n.refs).value
              : ig(st(r.value) ? n.ref.value : r.value, n);
}
var D1 = (n, r, s, i) => {
        const l = {};
        for (const u of n) {
            const f = te(r, u);
            f && $e(l, u, f._f);
        }
        return { criteriaMode: s, names: [...n], fields: l, shouldUseNativeValidation: i };
    },
    Ea = (n) => n instanceof RegExp,
    _o = (n) => (st(n) ? n : Ea(n) ? n.source : ot(n) ? (Ea(n.value) ? n.value.source : n.value) : n),
    am = (n) => ({
        isOnSubmit: !n || n === sn.onSubmit,
        isOnBlur: n === sn.onBlur,
        isOnChange: n === sn.onChange,
        isOnAll: n === sn.all,
        isOnTouch: n === sn.onTouched,
    });
const lm = "AsyncFunction";
var I1 = (n) =>
        !!n &&
        !!n.validate &&
        !!(
            (on(n.validate) && n.validate.constructor.name === lm) ||
            (ot(n.validate) && Object.values(n.validate).find((r) => r.constructor.name === lm))
        ),
    F1 = (n) => n.mount && (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate),
    um = (n, r, s) =>
        !s &&
        (r.watchAll || r.watch.has(n) || [...r.watch].some((i) => n.startsWith(i) && /^\.\w+/.test(n.slice(i.length))));
const bo = (n, r, s, i) => {
    for (const l of s || Object.keys(n)) {
        const u = te(n, l);
        if (u) {
            const { _f: f, ...p } = u;
            if (f) {
                if (f.refs && f.refs[0] && r(f.refs[0], l) && !i) return !0;
                if (f.ref && r(f.ref, f.name) && !i) return !0;
                if (bo(p, r)) break;
            } else if (ot(p) && bo(p, r)) break;
        }
    }
};
function cm(n, r, s) {
    const i = te(n, s);
    if (i || jc(s)) return { error: i, name: s };
    const l = s.split(".");
    for (; l.length; ) {
        const u = l.join("."),
            f = te(r, u),
            p = te(n, u);
        if (f && !Array.isArray(f) && s !== u) return { name: s };
        if (p && p.type) return { name: u, error: p };
        l.pop();
    }
    return { name: s };
}
var z1 = (n, r, s, i) => {
        s(n);
        const { name: l, ...u } = n;
        return (
            bt(u) ||
            Object.keys(u).length >= Object.keys(r).length ||
            Object.keys(u).find((f) => r[f] === (!i || sn.all))
        );
    },
    V1 = (n, r, s) => !n || !r || n === r || Co(n).some((i) => i && (s ? i === r : i.startsWith(r) || r.startsWith(i))),
    U1 = (n, r, s, i, l) =>
        l.isOnAll
            ? !1
            : !s && l.isOnTouch
              ? !(r || n)
              : (s ? i.isOnBlur : l.isOnBlur)
                ? !n
                : (s ? i.isOnChange : l.isOnChange)
                  ? n
                  : !0,
    $1 = (n, r) => !Wa(te(n, r)).length && ut(n, r),
    B1 = (n, r, s) => {
        const i = Co(te(n, s));
        return $e(i, "root", r[s]), $e(n, s, i), n;
    },
    da = (n) => wn(n);
function dm(n, r, s = "validate") {
    if (da(n) || (Array.isArray(n) && n.every(da)) || (Vt(n) && !n))
        return { type: s, message: da(n) ? n : "", ref: r };
}
var ys = (n) => (ot(n) && !Ea(n) ? n : { value: n, message: "" }),
    fm = async (n, r, s, i, l, u) => {
        const {
                ref: f,
                refs: p,
                required: g,
                maxLength: h,
                minLength: v,
                min: w,
                max: E,
                pattern: A,
                validate: M,
                name: N,
                valueAsNumber: T,
                mount: F,
            } = n._f,
            L = te(s, N);
        if (!F || r.has(N)) return {};
        const $ = p ? p[0] : f,
            V = (G) => {
                l && $.reportValidity && ($.setCustomValidity(Vt(G) ? "" : G || ""), $.reportValidity());
            },
            H = {},
            se = Oc(f),
            ee = Wo(f),
            Se = se || ee,
            Ee =
                ((T || Ac(f)) && st(f.value) && st(L)) ||
                (ka(f) && f.value === "") ||
                L === "" ||
                (Array.isArray(L) && !L.length),
            _e = tg.bind(null, N, i, H),
            be = (G, re, K, ve = Fn.maxLength, fe = Fn.minLength) => {
                const pe = G ? re : K;
                H[N] = { type: G ? ve : fe, message: pe, ref: f, ..._e(G ? ve : fe, pe) };
            };
        if (
            u
                ? !Array.isArray(L) || !L.length
                : g && ((!Se && (Ee || Tt(L))) || (Vt(L) && !L) || (ee && !og(p).isValid) || (se && !ag(p).isValid))
        ) {
            const { value: G, message: re } = da(g) ? { value: !!g, message: g } : ys(g);
            if (G && ((H[N] = { type: Fn.required, message: re, ref: $, ..._e(Fn.required, re) }), !i)) return V(re), H;
        }
        if (!Ee && (!Tt(w) || !Tt(E))) {
            let G, re;
            const K = ys(E),
                ve = ys(w);
            if (!Tt(L) && !isNaN(L)) {
                const fe = f.valueAsNumber || (L && +L);
                Tt(K.value) || (G = fe > K.value), Tt(ve.value) || (re = fe < ve.value);
            } else {
                const fe = f.valueAsDate || new Date(L),
                    pe = (q) => new Date(new Date().toDateString() + " " + q),
                    D = f.type == "time",
                    X = f.type == "week";
                wn(K.value) && L && (G = D ? pe(L) > pe(K.value) : X ? L > K.value : fe > new Date(K.value)),
                    wn(ve.value) && L && (re = D ? pe(L) < pe(ve.value) : X ? L < ve.value : fe < new Date(ve.value));
            }
            if ((G || re) && (be(!!G, K.message, ve.message, Fn.max, Fn.min), !i)) return V(H[N].message), H;
        }
        if ((h || v) && !Ee && (wn(L) || (u && Array.isArray(L)))) {
            const G = ys(h),
                re = ys(v),
                K = !Tt(G.value) && L.length > +G.value,
                ve = !Tt(re.value) && L.length < +re.value;
            if ((K || ve) && (be(K, G.message, re.message), !i)) return V(H[N].message), H;
        }
        if (A && !Ee && wn(L)) {
            const { value: G, message: re } = ys(A);
            if (Ea(G) && !L.match(G) && ((H[N] = { type: Fn.pattern, message: re, ref: f, ..._e(Fn.pattern, re) }), !i))
                return V(re), H;
        }
        if (M) {
            if (on(M)) {
                const G = await M(L, s),
                    re = dm(G, $);
                if (re && ((H[N] = { ...re, ..._e(Fn.validate, re.message) }), !i)) return V(re.message), H;
            } else if (ot(M)) {
                let G = {};
                for (const re in M) {
                    if (!bt(G) && !i) break;
                    const K = dm(await M[re](L, s), $, re);
                    K && ((G = { ...K, ..._e(re, K.message) }), V(K.message), i && (H[N] = G));
                }
                if (!bt(G) && ((H[N] = { ref: $, ...G }), !i)) return H;
            }
        }
        return V(!0), H;
    };
const W1 = { mode: sn.onSubmit, reValidateMode: sn.onChange, shouldFocusError: !0 };
function Z1(n = {}) {
    let r = { ...W1, ...n },
        s = {
            submitCount: 0,
            isDirty: !1,
            isLoading: on(r.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            validatingFields: {},
            errors: r.errors || {},
            disabled: r.disabled || !1,
        };
    const i = {};
    let l = ot(r.defaultValues) || ot(r.values) ? yt(r.values || r.defaultValues) || {} : {},
        u = r.shouldUnregister ? {} : yt(l),
        f = { action: !1, mount: !1, watch: !1 },
        p = { mount: new Set(), disabled: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
        g,
        h = 0;
    const v = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1,
    };
    let w = { ...v };
    const E = { array: nm(), state: nm() },
        A = am(r.mode),
        M = am(r.reValidateMode),
        N = r.criteriaMode === sn.all,
        T = (_) => (j) => {
            clearTimeout(h), (h = setTimeout(_, j));
        },
        F = async (_) => {
            if (!r.disabled && (v.isValid || w.isValid || _)) {
                const j = r.resolver ? bt((await Ee()).errors) : await be(i, !0);
                j !== s.isValid && E.state.next({ isValid: j });
            }
        },
        L = (_, j) => {
            !r.disabled &&
                (v.isValidating || v.validatingFields || w.isValidating || w.validatingFields) &&
                ((_ || Array.from(p.mount)).forEach((I) => {
                    I && (j ? $e(s.validatingFields, I, j) : ut(s.validatingFields, I));
                }),
                E.state.next({ validatingFields: s.validatingFields, isValidating: !bt(s.validatingFields) }));
        },
        $ = (_, j = [], I, oe, J = !0, Q = !0) => {
            if (oe && I && !r.disabled) {
                if (((f.action = !0), Q && Array.isArray(te(i, _)))) {
                    const le = I(te(i, _), oe.argA, oe.argB);
                    J && $e(i, _, le);
                }
                if (Q && Array.isArray(te(s.errors, _))) {
                    const le = I(te(s.errors, _), oe.argA, oe.argB);
                    J && $e(s.errors, _, le), $1(s.errors, _);
                }
                if ((v.touchedFields || w.touchedFields) && Q && Array.isArray(te(s.touchedFields, _))) {
                    const le = I(te(s.touchedFields, _), oe.argA, oe.argB);
                    J && $e(s.touchedFields, _, le);
                }
                (v.dirtyFields || w.dirtyFields) && (s.dirtyFields = wo(l, u)),
                    E.state.next({
                        name: _,
                        isDirty: re(_, j),
                        dirtyFields: s.dirtyFields,
                        errors: s.errors,
                        isValid: s.isValid,
                    });
            } else $e(u, _, j);
        },
        V = (_, j) => {
            $e(s.errors, _, j), E.state.next({ errors: s.errors });
        },
        H = (_) => {
            (s.errors = _), E.state.next({ errors: s.errors, isValid: !1 });
        },
        se = (_, j, I, oe) => {
            const J = te(i, _);
            if (J) {
                const Q = te(u, _, st(I) ? te(l, _) : I);
                st(Q) || (oe && oe.defaultChecked) || j ? $e(u, _, j ? Q : im(J._f)) : fe(_, Q), f.mount && F();
            }
        },
        ee = (_, j, I, oe, J) => {
            let Q = !1,
                le = !1;
            const De = { name: _ };
            if (!r.disabled) {
                if (!I || oe) {
                    (v.isDirty || w.isDirty) &&
                        ((le = s.isDirty), (s.isDirty = De.isDirty = re()), (Q = le !== De.isDirty));
                    const We = dr(te(l, _), j);
                    (le = !!te(s.dirtyFields, _)),
                        We ? ut(s.dirtyFields, _) : $e(s.dirtyFields, _, !0),
                        (De.dirtyFields = s.dirtyFields),
                        (Q = Q || ((v.dirtyFields || w.dirtyFields) && le !== !We));
                }
                if (I) {
                    const We = te(s.touchedFields, _);
                    We ||
                        ($e(s.touchedFields, _, I),
                        (De.touchedFields = s.touchedFields),
                        (Q = Q || ((v.touchedFields || w.touchedFields) && We !== I)));
                }
                Q && J && E.state.next(De);
            }
            return Q ? De : {};
        },
        Se = (_, j, I, oe) => {
            const J = te(s.errors, _),
                Q = (v.isValid || w.isValid) && Vt(j) && s.isValid !== j;
            if (
                (r.delayError && I
                    ? ((g = T(() => V(_, I))), g(r.delayError))
                    : (clearTimeout(h), (g = null), I ? $e(s.errors, _, I) : ut(s.errors, _)),
                (I ? !dr(J, I) : J) || !bt(oe) || Q)
            ) {
                const le = { ...oe, ...(Q && Vt(j) ? { isValid: j } : {}), errors: s.errors, name: _ };
                (s = { ...s, ...le }), E.state.next(le);
            }
        },
        Ee = async (_) => {
            L(_, !0);
            const j = await r.resolver(u, r.context, D1(_ || p.mount, i, r.criteriaMode, r.shouldUseNativeValidation));
            return L(_), j;
        },
        _e = async (_) => {
            const { errors: j } = await Ee(_);
            if (_)
                for (const I of _) {
                    const oe = te(j, I);
                    oe ? $e(s.errors, I, oe) : ut(s.errors, I);
                }
            else s.errors = j;
            return j;
        },
        be = async (_, j, I = { valid: !0 }) => {
            for (const oe in _) {
                const J = _[oe];
                if (J) {
                    const { _f: Q, ...le } = J;
                    if (Q) {
                        const De = p.array.has(Q.name),
                            We = J._f && I1(J._f);
                        We && v.validatingFields && L([oe], !0);
                        const et = await fm(J, p.disabled, u, N, r.shouldUseNativeValidation && !j, De);
                        if ((We && v.validatingFields && L([oe]), et[Q.name] && ((I.valid = !1), j))) break;
                        !j &&
                            (te(et, Q.name)
                                ? De
                                    ? B1(s.errors, et, Q.name)
                                    : $e(s.errors, Q.name, et[Q.name])
                                : ut(s.errors, Q.name));
                    }
                    !bt(le) && (await be(le, j, I));
                }
            }
            return I.valid;
        },
        G = () => {
            for (const _ of p.unMount) {
                const j = te(i, _);
                j && (j._f.refs ? j._f.refs.every((I) => !Qu(I)) : !Qu(j._f.ref)) && Ue(_);
            }
            p.unMount = new Set();
        },
        re = (_, j) => !r.disabled && (_ && j && $e(u, _, j), !dr(z(), l)),
        K = (_, j, I) => eg(_, p, { ...(f.mount ? u : st(j) ? l : wn(_) ? { [_]: j } : j) }, I, j),
        ve = (_) => Wa(te(f.mount ? u : l, _, r.shouldUnregister ? te(l, _, []) : [])),
        fe = (_, j, I = {}) => {
            const oe = te(i, _);
            let J = j;
            if (oe) {
                const Q = oe._f;
                Q &&
                    (!Q.disabled && $e(u, _, ig(j, Q)),
                    (J = ka(Q.ref) && Tt(j) ? "" : j),
                    ng(Q.ref)
                        ? [...Q.ref.options].forEach((le) => (le.selected = J.includes(le.value)))
                        : Q.refs
                          ? Wo(Q.ref)
                              ? Q.refs.length > 1
                                  ? Q.refs.forEach(
                                        (le) =>
                                            (!le.defaultChecked || !le.disabled) &&
                                            (le.checked = Array.isArray(J)
                                                ? !!J.find((De) => De === le.value)
                                                : J === le.value)
                                    )
                                  : Q.refs[0] && (Q.refs[0].checked = !!J)
                              : Q.refs.forEach((le) => (le.checked = le.value === J))
                          : Ac(Q.ref)
                            ? (Q.ref.value = "")
                            : ((Q.ref.value = J), Q.ref.type || E.state.next({ name: _, values: yt(u) })));
            }
            (I.shouldDirty || I.shouldTouch) && ee(_, J, I.shouldTouch, I.shouldDirty, !0), I.shouldValidate && b(_);
        },
        pe = (_, j, I) => {
            for (const oe in j) {
                const J = j[oe],
                    Q = `${_}.${oe}`,
                    le = te(i, Q);
                (p.array.has(_) || ot(J) || (le && !le._f)) && !Or(J) ? pe(Q, J, I) : fe(Q, J, I);
            }
        },
        D = (_, j, I = {}) => {
            const oe = te(i, _),
                J = p.array.has(_),
                Q = yt(j);
            $e(u, _, Q),
                J
                    ? (E.array.next({ name: _, values: yt(u) }),
                      (v.isDirty || v.dirtyFields || w.isDirty || w.dirtyFields) &&
                          I.shouldDirty &&
                          E.state.next({ name: _, dirtyFields: wo(l, u), isDirty: re(_, Q) }))
                    : oe && !oe._f && !Tt(Q)
                      ? pe(_, Q, I)
                      : fe(_, Q, I),
                um(_, p) && E.state.next({ ...s }),
                E.state.next({ name: f.mount ? _ : void 0, values: yt(u) });
        },
        X = async (_) => {
            f.mount = !0;
            const j = _.target;
            let I = j.name,
                oe = !0;
            const J = te(i, I),
                Q = (le) => {
                    oe = Number.isNaN(le) || (Or(le) && isNaN(le.getTime())) || dr(le, te(u, I, le));
                };
            if (J) {
                let le, De;
                const We = j.type ? im(J._f) : Yh(_),
                    et = _.type === _a.BLUR || _.type === _a.FOCUS_OUT,
                    Qa =
                        (!F1(J._f) && !r.resolver && !te(s.errors, I) && !J._f.deps) ||
                        U1(et, te(s.touchedFields, I), s.isSubmitted, M, A),
                    Br = um(I, p, et);
                $e(u, I, We), et ? (J._f.onBlur && J._f.onBlur(_), g && g(0)) : J._f.onChange && J._f.onChange(_);
                const Wr = ee(I, We, et),
                    Ya = !bt(Wr) || Br;
                if ((!et && E.state.next({ name: I, type: _.type, values: yt(u) }), Qa))
                    return (
                        (v.isValid || w.isValid) && (r.mode === "onBlur" ? et && F() : et || F()),
                        Ya && E.state.next({ name: I, ...(Br ? {} : Wr) })
                    );
                if ((!et && Br && E.state.next({ ...s }), r.resolver)) {
                    const { errors: Zr } = await Ee([I]);
                    if ((Q(We), oe)) {
                        const Os = cm(s.errors, i, I),
                            Hr = cm(Zr, i, Os.name || I);
                        (le = Hr.error), (I = Hr.name), (De = bt(Zr));
                    }
                } else
                    L([I], !0),
                        (le = (await fm(J, p.disabled, u, N, r.shouldUseNativeValidation))[I]),
                        L([I]),
                        Q(We),
                        oe && (le ? (De = !1) : (v.isValid || w.isValid) && (De = await be(i, !0)));
                oe && (J._f.deps && b(J._f.deps), Se(I, De, le, Wr));
            }
        },
        q = (_, j) => {
            if (te(s.errors, j) && _.focus) return _.focus(), 1;
        },
        b = async (_, j = {}) => {
            let I, oe;
            const J = Co(_);
            if (r.resolver) {
                const Q = await _e(st(_) ? _ : J);
                (I = bt(Q)), (oe = _ ? !J.some((le) => te(Q, le)) : I);
            } else
                _
                    ? ((oe = (
                          await Promise.all(
                              J.map(async (Q) => {
                                  const le = te(i, Q);
                                  return await be(le && le._f ? { [Q]: le } : le);
                              })
                          )
                      ).every(Boolean)),
                      !(!oe && !s.isValid) && F())
                    : (oe = I = await be(i));
            return (
                E.state.next({
                    ...(!wn(_) || ((v.isValid || w.isValid) && I !== s.isValid) ? {} : { name: _ }),
                    ...(r.resolver || !_ ? { isValid: I } : {}),
                    errors: s.errors,
                }),
                j.shouldFocus && !oe && bo(i, q, _ ? J : p.mount),
                oe
            );
        },
        z = (_) => {
            const j = { ...(f.mount ? u : l) };
            return st(_) ? j : wn(_) ? te(j, _) : _.map((I) => te(j, I));
        },
        xe = (_, j) => ({
            invalid: !!te((j || s).errors, _),
            isDirty: !!te((j || s).dirtyFields, _),
            error: te((j || s).errors, _),
            isValidating: !!te(s.validatingFields, _),
            isTouched: !!te((j || s).touchedFields, _),
        }),
        Te = (_) => {
            _ && Co(_).forEach((j) => ut(s.errors, j)), E.state.next({ errors: _ ? s.errors : {} });
        },
        Oe = (_, j, I) => {
            const oe = (te(i, _, { _f: {} })._f || {}).ref,
                J = te(s.errors, _) || {},
                { ref: Q, message: le, type: De, ...We } = J;
            $e(s.errors, _, { ...We, ...j, ref: oe }),
                E.state.next({ name: _, errors: s.errors, isValid: !1 }),
                I && I.shouldFocus && oe && oe.focus && oe.focus();
        },
        Le = (_, j) => (on(_) ? E.state.subscribe({ next: (I) => _(K(void 0, j), I) }) : K(_, j, !0)),
        Me = (_) =>
            E.state.subscribe({
                next: (j) => {
                    V1(_.name, j.name, _.exact) &&
                        z1(j, _.formState || v, As, _.reRenderRoot) &&
                        _.callback({ values: { ...u }, ...s, ...j });
                },
            }).unsubscribe,
        Ie = (_) => ((f.mount = !0), (w = { ...w, ..._.formState }), Me({ ..._, formState: w })),
        Ue = (_, j = {}) => {
            for (const I of _ ? Co(_) : p.mount)
                p.mount.delete(I),
                    p.array.delete(I),
                    j.keepValue || (ut(i, I), ut(u, I)),
                    !j.keepError && ut(s.errors, I),
                    !j.keepDirty && ut(s.dirtyFields, I),
                    !j.keepTouched && ut(s.touchedFields, I),
                    !j.keepIsValidating && ut(s.validatingFields, I),
                    !r.shouldUnregister && !j.keepDefaultValue && ut(l, I);
            E.state.next({ values: yt(u) }),
                E.state.next({ ...s, ...(j.keepDirty ? { isDirty: re() } : {}) }),
                !j.keepIsValid && F();
        },
        dt = ({ disabled: _, name: j }) => {
            ((Vt(_) && f.mount) || _ || p.disabled.has(j)) && (_ ? p.disabled.add(j) : p.disabled.delete(j));
        },
        pn = (_, j = {}) => {
            let I = te(i, _);
            const oe = Vt(j.disabled) || Vt(r.disabled);
            return (
                $e(i, _, {
                    ...(I || {}),
                    _f: { ...(I && I._f ? I._f : { ref: { name: _ } }), name: _, mount: !0, ...j },
                }),
                p.mount.add(_),
                I ? dt({ disabled: Vt(j.disabled) ? j.disabled : r.disabled, name: _ }) : se(_, !0, j.value),
                {
                    ...(oe ? { disabled: j.disabled || r.disabled } : {}),
                    ...(r.progressive
                        ? {
                              required: !!j.required,
                              min: _o(j.min),
                              max: _o(j.max),
                              minLength: _o(j.minLength),
                              maxLength: _o(j.maxLength),
                              pattern: _o(j.pattern),
                          }
                        : {}),
                    name: _,
                    onChange: X,
                    onBlur: X,
                    ref: (J) => {
                        if (J) {
                            pn(_, j), (I = te(i, _));
                            const Q =
                                    (st(J.value) &&
                                        J.querySelectorAll &&
                                        J.querySelectorAll("input,select,textarea")[0]) ||
                                    J,
                                le = O1(Q),
                                De = I._f.refs || [];
                            if (le ? De.find((We) => We === Q) : Q === I._f.ref) return;
                            $e(i, _, {
                                _f: {
                                    ...I._f,
                                    ...(le
                                        ? {
                                              refs: [...De.filter(Qu), Q, ...(Array.isArray(te(l, _)) ? [{}] : [])],
                                              ref: { type: Q.type, name: _ },
                                          }
                                        : { ref: Q }),
                                },
                            }),
                                se(_, !1, void 0, Q);
                        } else
                            (I = te(i, _, {})),
                                I._f && (I._f.mount = !1),
                                (r.shouldUnregister || j.shouldUnregister) &&
                                    !(Gh(p.array, _) && f.action) &&
                                    p.unMount.add(_);
                    },
                }
            );
        },
        xr = () => r.shouldFocusError && bo(i, q, p.mount),
        Gt = (_) => {
            Vt(_) &&
                (E.state.next({ disabled: _ }),
                bo(
                    i,
                    (j, I) => {
                        const oe = te(i, I);
                        oe &&
                            ((j.disabled = oe._f.disabled || _),
                            Array.isArray(oe._f.refs) &&
                                oe._f.refs.forEach((J) => {
                                    J.disabled = oe._f.disabled || _;
                                }));
                    },
                    0,
                    !1
                ));
        },
        Vr = (_, j) => async (I) => {
            let oe;
            I && (I.preventDefault && I.preventDefault(), I.persist && I.persist());
            let J = yt(u);
            if ((E.state.next({ isSubmitting: !0 }), r.resolver)) {
                const { errors: Q, values: le } = await Ee();
                (s.errors = Q), (J = le);
            } else await be(i);
            if (p.disabled.size) for (const Q of p.disabled) $e(J, Q, void 0);
            if ((ut(s.errors, "root"), bt(s.errors))) {
                E.state.next({ errors: {} });
                try {
                    await _(J, I);
                } catch (Q) {
                    oe = Q;
                }
            } else j && (await j({ ...s.errors }, I)), xr(), setTimeout(xr);
            if (
                (E.state.next({
                    isSubmitted: !0,
                    isSubmitting: !1,
                    isSubmitSuccessful: bt(s.errors) && !oe,
                    submitCount: s.submitCount + 1,
                    errors: s.errors,
                }),
                oe)
            )
                throw oe;
        },
        Ho = (_, j = {}) => {
            te(i, _) &&
                (st(j.defaultValue) ? D(_, yt(te(l, _))) : (D(_, j.defaultValue), $e(l, _, yt(j.defaultValue))),
                j.keepTouched || ut(s.touchedFields, _),
                j.keepDirty || (ut(s.dirtyFields, _), (s.isDirty = j.defaultValue ? re(_, yt(te(l, _))) : re())),
                j.keepError || (ut(s.errors, _), v.isValid && F()),
                E.state.next({ ...s }));
        },
        js = (_, j = {}) => {
            const I = _ ? yt(_) : l,
                oe = yt(I),
                J = bt(_),
                Q = J ? l : oe;
            if ((j.keepDefaultValues || (l = I), !j.keepValues)) {
                if (j.keepDirtyValues) {
                    const le = new Set([...p.mount, ...Object.keys(wo(l, u))]);
                    for (const De of Array.from(le)) te(s.dirtyFields, De) ? $e(Q, De, te(u, De)) : D(De, te(Q, De));
                } else {
                    if (Rc && st(_))
                        for (const le of p.mount) {
                            const De = te(i, le);
                            if (De && De._f) {
                                const We = Array.isArray(De._f.refs) ? De._f.refs[0] : De._f.ref;
                                if (ka(We)) {
                                    const et = We.closest("form");
                                    if (et) {
                                        et.reset();
                                        break;
                                    }
                                }
                            }
                        }
                    for (const le of p.mount) D(le, te(Q, le));
                }
                (u = yt(Q)), E.array.next({ values: { ...Q } }), E.state.next({ values: { ...Q } });
            }
            (p = {
                mount: j.keepDirtyValues ? p.mount : new Set(),
                unMount: new Set(),
                array: new Set(),
                disabled: new Set(),
                watch: new Set(),
                watchAll: !1,
                focus: "",
            }),
                (f.mount = !v.isValid || !!j.keepIsValid || !!j.keepDirtyValues),
                (f.watch = !!r.shouldUnregister),
                E.state.next({
                    submitCount: j.keepSubmitCount ? s.submitCount : 0,
                    isDirty: J ? !1 : j.keepDirty ? s.isDirty : !!(j.keepDefaultValues && !dr(_, l)),
                    isSubmitted: j.keepIsSubmitted ? s.isSubmitted : !1,
                    dirtyFields: J
                        ? {}
                        : j.keepDirtyValues
                          ? j.keepDefaultValues && u
                              ? wo(l, u)
                              : s.dirtyFields
                          : j.keepDefaultValues && _
                            ? wo(l, _)
                            : j.keepDirty
                              ? s.dirtyFields
                              : {},
                    touchedFields: j.keepTouched ? s.touchedFields : {},
                    errors: j.keepErrors ? s.errors : {},
                    isSubmitSuccessful: j.keepIsSubmitSuccessful ? s.isSubmitSuccessful : !1,
                    isSubmitting: !1,
                });
        },
        Ur = (_, j) => js(on(_) ? _(u) : _, j),
        Ko = (_, j = {}) => {
            const I = te(i, _),
                oe = I && I._f;
            if (oe) {
                const J = oe.refs ? oe.refs[0] : oe.ref;
                J.focus && (J.focus(), j.shouldSelect && on(J.select) && J.select());
            }
        },
        As = (_) => {
            s = { ...s, ..._ };
        },
        Nn = {
            control: {
                register: pn,
                unregister: Ue,
                getFieldState: xe,
                handleSubmit: Vr,
                setError: Oe,
                _subscribe: Me,
                _runSchema: Ee,
                _getWatch: K,
                _getDirty: re,
                _setValid: F,
                _setFieldArray: $,
                _setDisabledField: dt,
                _setErrors: H,
                _getFieldArray: ve,
                _reset: js,
                _resetDefaultValues: () =>
                    on(r.defaultValues) &&
                    r.defaultValues().then((_) => {
                        Ur(_, r.resetOptions), E.state.next({ isLoading: !1 });
                    }),
                _removeUnmounted: G,
                _disableForm: Gt,
                _subjects: E,
                _proxyFormState: v,
                get _fields() {
                    return i;
                },
                get _formValues() {
                    return u;
                },
                get _state() {
                    return f;
                },
                set _state(_) {
                    f = _;
                },
                get _defaultValues() {
                    return l;
                },
                get _names() {
                    return p;
                },
                set _names(_) {
                    p = _;
                },
                get _formState() {
                    return s;
                },
                get _options() {
                    return r;
                },
                set _options(_) {
                    r = { ...r, ..._ };
                },
            },
            subscribe: Ie,
            trigger: b,
            register: pn,
            handleSubmit: Vr,
            watch: Le,
            setValue: D,
            getValues: z,
            reset: Ur,
            resetField: Ho,
            clearErrors: Te,
            unregister: Ue,
            setError: Oe,
            setFocus: Ko,
            getFieldState: xe,
        };
    return { ...Nn, formControl: Nn };
}
function H1(n = {}) {
    const r = Ne.useRef(void 0),
        s = Ne.useRef(void 0),
        [i, l] = Ne.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: on(n.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: n.errors || {},
            disabled: n.disabled || !1,
            defaultValues: on(n.defaultValues) ? void 0 : n.defaultValues,
        });
    r.current ||
        ((r.current = { ...(n.formControl ? n.formControl : Z1(n)), formState: i }),
        n.formControl &&
            n.defaultValues &&
            !on(n.defaultValues) &&
            n.formControl.reset(n.defaultValues, n.resetOptions));
    const u = r.current.control;
    return (
        (u._options = n),
        Ne.useLayoutEffect(
            () =>
                u._subscribe({
                    formState: u._proxyFormState,
                    callback: () => l({ ...u._formState }),
                    reRenderRoot: !0,
                }),
            [u]
        ),
        Ne.useEffect(() => u._disableForm(n.disabled), [u, n.disabled]),
        Ne.useEffect(() => {
            if (u._proxyFormState.isDirty) {
                const f = u._getDirty();
                f !== i.isDirty && u._subjects.state.next({ isDirty: f });
            }
        }, [u, i.isDirty]),
        Ne.useEffect(() => {
            n.values && !dr(n.values, s.current)
                ? (u._reset(n.values, u._options.resetOptions), (s.current = n.values), l((f) => ({ ...f })))
                : u._resetDefaultValues();
        }, [n.values, u]),
        Ne.useEffect(() => {
            n.errors && !bt(n.errors) && u._setErrors(n.errors);
        }, [n.errors, u]),
        Ne.useEffect(() => {
            u._state.mount || (u._setValid(), (u._state.mount = !0)),
                u._state.watch && ((u._state.watch = !1), u._subjects.state.next({ ...u._formState })),
                u._removeUnmounted();
        }),
        Ne.useEffect(() => {
            n.shouldUnregister && u._subjects.state.next({ values: u._getWatch() });
        }, [n.shouldUnregister, u]),
        (r.current.formState = Jh(i, u)),
        r.current
    );
}
const pm = (n, r, s) => {
        if (n && "reportValidity" in n) {
            const i = te(s, r);
            n.setCustomValidity((i && i.message) || ""), n.reportValidity();
        }
    },
    lg = (n, r) => {
        for (const s in r.fields) {
            const i = r.fields[s];
            i && i.ref && "reportValidity" in i.ref ? pm(i.ref, s, n) : i.refs && i.refs.forEach((l) => pm(l, s, n));
        }
    },
    K1 = (n, r) => {
        r.shouldUseNativeValidation && lg(n, r);
        const s = {};
        for (const i in n) {
            const l = te(r.fields, i),
                u = Object.assign(n[i] || {}, { ref: l && l.ref });
            if (Q1(r.names || Object.keys(n), i)) {
                const f = Object.assign({}, te(s, i));
                $e(f, "root", u), $e(s, i, f);
            } else $e(s, i, u);
        }
        return s;
    },
    Q1 = (n, r) => n.some((s) => s.startsWith(r + "."));
var Y1 = function (n, r) {
        for (var s = {}; n.length; ) {
            var i = n[0],
                l = i.code,
                u = i.message,
                f = i.path.join(".");
            if (!s[f])
                if ("unionErrors" in i) {
                    var p = i.unionErrors[0].errors[0];
                    s[f] = { message: p.message, type: p.code };
                } else s[f] = { message: u, type: l };
            if (
                ("unionErrors" in i &&
                    i.unionErrors.forEach(function (v) {
                        return v.errors.forEach(function (w) {
                            return n.push(w);
                        });
                    }),
                r)
            ) {
                var g = s[f].types,
                    h = g && g[i.code];
                s[f] = tg(f, r, s, l, h ? [].concat(h, i.message) : i.message);
            }
            n.shift();
        }
        return s;
    },
    G1 = function (n, r, s) {
        return (
            s === void 0 && (s = {}),
            function (i, l, u) {
                try {
                    return Promise.resolve(
                        (function (f, p) {
                            try {
                                var g = Promise.resolve(n[s.mode === "sync" ? "parse" : "parseAsync"](i, r)).then(
                                    function (h) {
                                        return (
                                            u.shouldUseNativeValidation && lg({}, u),
                                            { errors: {}, values: s.raw ? i : h }
                                        );
                                    }
                                );
                            } catch (h) {
                                return p(h);
                            }
                            return g && g.then ? g.then(void 0, p) : g;
                        })(0, function (f) {
                            if (
                                (function (p) {
                                    return Array.isArray(p?.errors);
                                })(f)
                            )
                                return {
                                    values: {},
                                    errors: K1(
                                        Y1(f.errors, !u.shouldUseNativeValidation && u.criteriaMode === "all"),
                                        u
                                    ),
                                };
                            throw f;
                        })
                    );
                } catch (f) {
                    return Promise.reject(f);
                }
            }
        );
    },
    Fe;
(function (n) {
    n.assertEqual = (l) => l;
    function r(l) {}
    n.assertIs = r;
    function s(l) {
        throw new Error();
    }
    (n.assertNever = s),
        (n.arrayToEnum = (l) => {
            const u = {};
            for (const f of l) u[f] = f;
            return u;
        }),
        (n.getValidEnumValues = (l) => {
            const u = n.objectKeys(l).filter((p) => typeof l[l[p]] != "number"),
                f = {};
            for (const p of u) f[p] = l[p];
            return n.objectValues(f);
        }),
        (n.objectValues = (l) =>
            n.objectKeys(l).map(function (u) {
                return l[u];
            })),
        (n.objectKeys =
            typeof Object.keys == "function"
                ? (l) => Object.keys(l)
                : (l) => {
                      const u = [];
                      for (const f in l) Object.prototype.hasOwnProperty.call(l, f) && u.push(f);
                      return u;
                  }),
        (n.find = (l, u) => {
            for (const f of l) if (u(f)) return f;
        }),
        (n.isInteger =
            typeof Number.isInteger == "function"
                ? (l) => Number.isInteger(l)
                : (l) => typeof l == "number" && isFinite(l) && Math.floor(l) === l);
    function i(l, u = " | ") {
        return l.map((f) => (typeof f == "string" ? `'${f}'` : f)).join(u);
    }
    (n.joinValues = i), (n.jsonStringifyReplacer = (l, u) => (typeof u == "bigint" ? u.toString() : u));
})(Fe || (Fe = {}));
var ac;
(function (n) {
    n.mergeShapes = (r, s) => ({ ...r, ...s });
})(ac || (ac = {}));
const ae = Fe.arrayToEnum([
        "string",
        "nan",
        "number",
        "integer",
        "float",
        "boolean",
        "date",
        "bigint",
        "symbol",
        "function",
        "undefined",
        "null",
        "array",
        "object",
        "unknown",
        "promise",
        "void",
        "never",
        "map",
        "set",
    ]),
    Vn = (n) => {
        switch (typeof n) {
            case "undefined":
                return ae.undefined;
            case "string":
                return ae.string;
            case "number":
                return isNaN(n) ? ae.nan : ae.number;
            case "boolean":
                return ae.boolean;
            case "function":
                return ae.function;
            case "bigint":
                return ae.bigint;
            case "symbol":
                return ae.symbol;
            case "object":
                return Array.isArray(n)
                    ? ae.array
                    : n === null
                      ? ae.null
                      : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function"
                        ? ae.promise
                        : typeof Map < "u" && n instanceof Map
                          ? ae.map
                          : typeof Set < "u" && n instanceof Set
                            ? ae.set
                            : typeof Date < "u" && n instanceof Date
                              ? ae.date
                              : ae.object;
            default:
                return ae.unknown;
        }
    },
    Z = Fe.arrayToEnum([
        "invalid_type",
        "invalid_literal",
        "custom",
        "invalid_union",
        "invalid_union_discriminator",
        "invalid_enum_value",
        "unrecognized_keys",
        "invalid_arguments",
        "invalid_return_type",
        "invalid_date",
        "invalid_string",
        "too_small",
        "too_big",
        "invalid_intersection_types",
        "not_multiple_of",
        "not_finite",
    ]),
    q1 = (n) => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, "$1:");
class Bt extends Error {
    get errors() {
        return this.issues;
    }
    constructor(r) {
        super(),
            (this.issues = []),
            (this.addIssue = (i) => {
                this.issues = [...this.issues, i];
            }),
            (this.addIssues = (i = []) => {
                this.issues = [...this.issues, ...i];
            });
        const s = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, s) : (this.__proto__ = s),
            (this.name = "ZodError"),
            (this.issues = r);
    }
    format(r) {
        const s =
                r ||
                function (u) {
                    return u.message;
                },
            i = { _errors: [] },
            l = (u) => {
                for (const f of u.issues)
                    if (f.code === "invalid_union") f.unionErrors.map(l);
                    else if (f.code === "invalid_return_type") l(f.returnTypeError);
                    else if (f.code === "invalid_arguments") l(f.argumentsError);
                    else if (f.path.length === 0) i._errors.push(s(f));
                    else {
                        let p = i,
                            g = 0;
                        for (; g < f.path.length; ) {
                            const h = f.path[g];
                            g === f.path.length - 1
                                ? ((p[h] = p[h] || { _errors: [] }), p[h]._errors.push(s(f)))
                                : (p[h] = p[h] || { _errors: [] }),
                                (p = p[h]),
                                g++;
                        }
                    }
            };
        return l(this), i;
    }
    static assert(r) {
        if (!(r instanceof Bt)) throw new Error(`Not a ZodError: ${r}`);
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, Fe.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(r = (s) => s.message) {
        const s = {},
            i = [];
        for (const l of this.issues)
            l.path.length > 0 ? ((s[l.path[0]] = s[l.path[0]] || []), s[l.path[0]].push(r(l))) : i.push(r(l));
        return { formErrors: i, fieldErrors: s };
    }
    get formErrors() {
        return this.flatten();
    }
}
Bt.create = (n) => new Bt(n);
const Cs = (n, r) => {
    let s;
    switch (n.code) {
        case Z.invalid_type:
            n.received === ae.undefined ? (s = "Required") : (s = `Expected ${n.expected}, received ${n.received}`);
            break;
        case Z.invalid_literal:
            s = `Invalid literal value, expected ${JSON.stringify(n.expected, Fe.jsonStringifyReplacer)}`;
            break;
        case Z.unrecognized_keys:
            s = `Unrecognized key(s) in object: ${Fe.joinValues(n.keys, ", ")}`;
            break;
        case Z.invalid_union:
            s = "Invalid input";
            break;
        case Z.invalid_union_discriminator:
            s = `Invalid discriminator value. Expected ${Fe.joinValues(n.options)}`;
            break;
        case Z.invalid_enum_value:
            s = `Invalid enum value. Expected ${Fe.joinValues(n.options)}, received '${n.received}'`;
            break;
        case Z.invalid_arguments:
            s = "Invalid function arguments";
            break;
        case Z.invalid_return_type:
            s = "Invalid function return type";
            break;
        case Z.invalid_date:
            s = "Invalid date";
            break;
        case Z.invalid_string:
            typeof n.validation == "object"
                ? "includes" in n.validation
                    ? ((s = `Invalid input: must include "${n.validation.includes}"`),
                      typeof n.validation.position == "number" &&
                          (s = `${s} at one or more positions greater than or equal to ${n.validation.position}`))
                    : "startsWith" in n.validation
                      ? (s = `Invalid input: must start with "${n.validation.startsWith}"`)
                      : "endsWith" in n.validation
                        ? (s = `Invalid input: must end with "${n.validation.endsWith}"`)
                        : Fe.assertNever(n.validation)
                : n.validation !== "regex"
                  ? (s = `Invalid ${n.validation}`)
                  : (s = "Invalid");
            break;
        case Z.too_small:
            n.type === "array"
                ? (s = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)`)
                : n.type === "string"
                  ? (s = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)`)
                  : n.type === "number"
                    ? (s = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}`)
                    : n.type === "date"
                      ? (s = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}`)
                      : (s = "Invalid input");
            break;
        case Z.too_big:
            n.type === "array"
                ? (s = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)`)
                : n.type === "string"
                  ? (s = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)`)
                  : n.type === "number"
                    ? (s = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}`)
                    : n.type === "bigint"
                      ? (s = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}`)
                      : n.type === "date"
                        ? (s = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}`)
                        : (s = "Invalid input");
            break;
        case Z.custom:
            s = "Invalid input";
            break;
        case Z.invalid_intersection_types:
            s = "Intersection results could not be merged";
            break;
        case Z.not_multiple_of:
            s = `Number must be a multiple of ${n.multipleOf}`;
            break;
        case Z.not_finite:
            s = "Number must be finite";
            break;
        default:
            (s = r.defaultError), Fe.assertNever(n);
    }
    return { message: s };
};
let ug = Cs;
function X1(n) {
    ug = n;
}
function Ca() {
    return ug;
}
const ba = (n) => {
        const { data: r, path: s, errorMaps: i, issueData: l } = n,
            u = [...s, ...(l.path || [])],
            f = { ...l, path: u };
        if (l.message !== void 0) return { ...l, path: u, message: l.message };
        let p = "";
        const g = i
            .filter((h) => !!h)
            .slice()
            .reverse();
        for (const h of g) p = h(f, { data: r, defaultError: p }).message;
        return { ...l, path: u, message: p };
    },
    J1 = [];
function ne(n, r) {
    const s = Ca(),
        i = ba({
            issueData: r,
            data: n.data,
            path: n.path,
            errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, s, s === Cs ? void 0 : Cs].filter((l) => !!l),
        });
    n.common.issues.push(i);
}
class kt {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty");
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(r, s) {
        const i = [];
        for (const l of s) {
            if (l.status === "aborted") return ke;
            l.status === "dirty" && r.dirty(), i.push(l.value);
        }
        return { status: r.value, value: i };
    }
    static async mergeObjectAsync(r, s) {
        const i = [];
        for (const l of s) {
            const u = await l.key,
                f = await l.value;
            i.push({ key: u, value: f });
        }
        return kt.mergeObjectSync(r, i);
    }
    static mergeObjectSync(r, s) {
        const i = {};
        for (const l of s) {
            const { key: u, value: f } = l;
            if (u.status === "aborted" || f.status === "aborted") return ke;
            u.status === "dirty" && r.dirty(),
                f.status === "dirty" && r.dirty(),
                u.value !== "__proto__" && (typeof f.value < "u" || l.alwaysSet) && (i[u.value] = f.value);
        }
        return { status: r.value, value: i };
    }
}
const ke = Object.freeze({ status: "aborted" }),
    xs = (n) => ({ status: "dirty", value: n }),
    Nt = (n) => ({ status: "valid", value: n }),
    lc = (n) => n.status === "aborted",
    uc = (n) => n.status === "dirty",
    Ir = (n) => n.status === "valid",
    Po = (n) => typeof Promise < "u" && n instanceof Promise;
function Ta(n, r, s, i) {
    if (typeof r == "function" ? n !== r || !0 : !r.has(n))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r.get(n);
}
function cg(n, r, s, i, l) {
    if (typeof r == "function" ? n !== r || !0 : !r.has(n))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return r.set(n, s), s;
}
var he;
(function (n) {
    (n.errToObj = (r) => (typeof r == "string" ? { message: r } : r || {})),
        (n.toString = (r) => (typeof r == "string" ? r : r?.message));
})(he || (he = {}));
var ko, So;
class Cn {
    constructor(r, s, i, l) {
        (this._cachedPath = []), (this.parent = r), (this.data = s), (this._path = i), (this._key = l);
    }
    get path() {
        return (
            this._cachedPath.length ||
                (this._key instanceof Array
                    ? this._cachedPath.push(...this._path, ...this._key)
                    : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
        );
    }
}
const mm = (n, r) => {
    if (Ir(r)) return { success: !0, data: r.value };
    if (!n.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error) return this._error;
            const s = new Bt(n.common.issues);
            return (this._error = s), this._error;
        },
    };
};
function Pe(n) {
    if (!n) return {};
    const { errorMap: r, invalid_type_error: s, required_error: i, description: l } = n;
    if (r && (s || i))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return r
        ? { errorMap: r, description: l }
        : {
              errorMap: (f, p) => {
                  var g, h;
                  const { message: v } = n;
                  return f.code === "invalid_enum_value"
                      ? { message: v ?? p.defaultError }
                      : typeof p.data > "u"
                        ? { message: (g = v ?? i) !== null && g !== void 0 ? g : p.defaultError }
                        : f.code !== "invalid_type"
                          ? { message: p.defaultError }
                          : { message: (h = v ?? s) !== null && h !== void 0 ? h : p.defaultError };
              },
              description: l,
          };
}
class je {
    get description() {
        return this._def.description;
    }
    _getType(r) {
        return Vn(r.data);
    }
    _getOrReturnCtx(r, s) {
        return (
            s || {
                common: r.parent.common,
                data: r.data,
                parsedType: Vn(r.data),
                schemaErrorMap: this._def.errorMap,
                path: r.path,
                parent: r.parent,
            }
        );
    }
    _processInputParams(r) {
        return {
            status: new kt(),
            ctx: {
                common: r.parent.common,
                data: r.data,
                parsedType: Vn(r.data),
                schemaErrorMap: this._def.errorMap,
                path: r.path,
                parent: r.parent,
            },
        };
    }
    _parseSync(r) {
        const s = this._parse(r);
        if (Po(s)) throw new Error("Synchronous parse encountered promise.");
        return s;
    }
    _parseAsync(r) {
        const s = this._parse(r);
        return Promise.resolve(s);
    }
    parse(r, s) {
        const i = this.safeParse(r, s);
        if (i.success) return i.data;
        throw i.error;
    }
    safeParse(r, s) {
        var i;
        const l = {
                common: {
                    issues: [],
                    async: (i = s?.async) !== null && i !== void 0 ? i : !1,
                    contextualErrorMap: s?.errorMap,
                },
                path: s?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: r,
                parsedType: Vn(r),
            },
            u = this._parseSync({ data: r, path: l.path, parent: l });
        return mm(l, u);
    }
    "~validate"(r) {
        var s, i;
        const l = {
            common: { issues: [], async: !!this["~standard"].async },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: r,
            parsedType: Vn(r),
        };
        if (!this["~standard"].async)
            try {
                const u = this._parseSync({ data: r, path: [], parent: l });
                return Ir(u) ? { value: u.value } : { issues: l.common.issues };
            } catch (u) {
                !(
                    (i = (s = u?.message) === null || s === void 0 ? void 0 : s.toLowerCase()) === null || i === void 0
                ) &&
                    i.includes("encountered") &&
                    (this["~standard"].async = !0),
                    (l.common = { issues: [], async: !0 });
            }
        return this._parseAsync({ data: r, path: [], parent: l }).then((u) =>
            Ir(u) ? { value: u.value } : { issues: l.common.issues }
        );
    }
    async parseAsync(r, s) {
        const i = await this.safeParseAsync(r, s);
        if (i.success) return i.data;
        throw i.error;
    }
    async safeParseAsync(r, s) {
        const i = {
                common: { issues: [], contextualErrorMap: s?.errorMap, async: !0 },
                path: s?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: r,
                parsedType: Vn(r),
            },
            l = this._parse({ data: r, path: i.path, parent: i }),
            u = await (Po(l) ? l : Promise.resolve(l));
        return mm(i, u);
    }
    refine(r, s) {
        const i = (l) => (typeof s == "string" || typeof s > "u" ? { message: s } : typeof s == "function" ? s(l) : s);
        return this._refinement((l, u) => {
            const f = r(l),
                p = () => u.addIssue({ code: Z.custom, ...i(l) });
            return typeof Promise < "u" && f instanceof Promise
                ? f.then((g) => (g ? !0 : (p(), !1)))
                : f
                  ? !0
                  : (p(), !1);
        });
    }
    refinement(r, s) {
        return this._refinement((i, l) => (r(i) ? !0 : (l.addIssue(typeof s == "function" ? s(i, l) : s), !1)));
    }
    _refinement(r) {
        return new fn({ schema: this, typeName: we.ZodEffects, effect: { type: "refinement", refinement: r } });
    }
    superRefine(r) {
        return this._refinement(r);
    }
    constructor(r) {
        (this.spa = this.safeParseAsync),
            (this._def = r),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this)),
            (this["~standard"] = { version: 1, vendor: "zod", validate: (s) => this["~validate"](s) });
    }
    optional() {
        return kn.create(this, this._def);
    }
    nullable() {
        return vr.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ln.create(this);
    }
    promise() {
        return Ts.create(this, this._def);
    }
    or(r) {
        return Oo.create([this, r], this._def);
    }
    and(r) {
        return Lo.create(this, r, this._def);
    }
    transform(r) {
        return new fn({
            ...Pe(this._def),
            schema: this,
            typeName: we.ZodEffects,
            effect: { type: "transform", transform: r },
        });
    }
    default(r) {
        const s = typeof r == "function" ? r : () => r;
        return new zo({ ...Pe(this._def), innerType: this, defaultValue: s, typeName: we.ZodDefault });
    }
    brand() {
        return new Lc({ typeName: we.ZodBranded, type: this, ...Pe(this._def) });
    }
    catch(r) {
        const s = typeof r == "function" ? r : () => r;
        return new Vo({ ...Pe(this._def), innerType: this, catchValue: s, typeName: we.ZodCatch });
    }
    describe(r) {
        const s = this.constructor;
        return new s({ ...this._def, description: r });
    }
    pipe(r) {
        return Zo.create(this, r);
    }
    readonly() {
        return Uo.create(this);
    }
    isOptional() {
        return this.safeParse(void 0).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const e_ = /^c[^\s-]{8,}$/i,
    t_ = /^[0-9a-z]+$/,
    n_ = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
    r_ = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    s_ = /^[a-z0-9_-]{21}$/i,
    o_ = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
    i_ =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    a_ = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    l_ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Yu;
const u_ =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    c_ =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    d_ =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
    f_ =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    p_ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    m_ = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    dg =
        "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    h_ = new RegExp(`^${dg}$`);
function fg(n) {
    let r = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return n.precision ? (r = `${r}\\.\\d{${n.precision}}`) : n.precision == null && (r = `${r}(\\.\\d+)?`), r;
}
function g_(n) {
    return new RegExp(`^${fg(n)}$`);
}
function pg(n) {
    let r = `${dg}T${fg(n)}`;
    const s = [];
    return (
        s.push(n.local ? "Z?" : "Z"),
        n.offset && s.push("([+-]\\d{2}:?\\d{2})"),
        (r = `${r}(${s.join("|")})`),
        new RegExp(`^${r}$`)
    );
}
function y_(n, r) {
    return !!(((r === "v4" || !r) && u_.test(n)) || ((r === "v6" || !r) && d_.test(n)));
}
function v_(n, r) {
    if (!o_.test(n)) return !1;
    try {
        const [s] = n.split("."),
            i = s
                .replace(/-/g, "+")
                .replace(/_/g, "/")
                .padEnd(s.length + ((4 - (s.length % 4)) % 4), "="),
            l = JSON.parse(atob(i));
        return !(typeof l != "object" || l === null || !l.typ || !l.alg || (r && l.alg !== r));
    } catch {
        return !1;
    }
}
function x_(n, r) {
    return !!(((r === "v4" || !r) && c_.test(n)) || ((r === "v6" || !r) && f_.test(n)));
}
class an extends je {
    _parse(r) {
        if ((this._def.coerce && (r.data = String(r.data)), this._getType(r) !== ae.string)) {
            const u = this._getOrReturnCtx(r);
            return ne(u, { code: Z.invalid_type, expected: ae.string, received: u.parsedType }), ke;
        }
        const i = new kt();
        let l;
        for (const u of this._def.checks)
            if (u.kind === "min")
                r.data.length < u.value &&
                    ((l = this._getOrReturnCtx(r, l)),
                    ne(l, {
                        code: Z.too_small,
                        minimum: u.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: u.message,
                    }),
                    i.dirty());
            else if (u.kind === "max")
                r.data.length > u.value &&
                    ((l = this._getOrReturnCtx(r, l)),
                    ne(l, {
                        code: Z.too_big,
                        maximum: u.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: u.message,
                    }),
                    i.dirty());
            else if (u.kind === "length") {
                const f = r.data.length > u.value,
                    p = r.data.length < u.value;
                (f || p) &&
                    ((l = this._getOrReturnCtx(r, l)),
                    f
                        ? ne(l, {
                              code: Z.too_big,
                              maximum: u.value,
                              type: "string",
                              inclusive: !0,
                              exact: !0,
                              message: u.message,
                          })
                        : p &&
                          ne(l, {
                              code: Z.too_small,
                              minimum: u.value,
                              type: "string",
                              inclusive: !0,
                              exact: !0,
                              message: u.message,
                          }),
                    i.dirty());
            } else if (u.kind === "email")
                a_.test(r.data) ||
                    ((l = this._getOrReturnCtx(r, l)),
                    ne(l, { validation: "email", code: Z.invalid_string, message: u.message }),
                    i.dirty());
            else if (u.kind === "emoji")
                Yu || (Yu = new RegExp(l_, "u")),
                    Yu.test(r.data) ||
                        ((l = this._getOrReturnCtx(r, l)),
                        ne(l, { validation: "emoji", code: Z.invalid_string, message: u.message }),
                        i.dirty());
            else if (u.kind === "uuid")
                r_.test(r.data) ||
                    ((l = this._getOrReturnCtx(r, l)),
                    ne(l, { validation: "uuid", code: Z.invalid_string, message: u.message }),
                    i.dirty());
            else if (u.kind === "nanoid")
                s_.test(r.data) ||
                    ((l = this._getOrReturnCtx(r, l)),
                    ne(l, { validation: "nanoid", code: Z.invalid_string, message: u.message }),
                    i.dirty());
            else if (u.kind === "cuid")
                e_.test(r.data) ||
                    ((l = this._getOrReturnCtx(r, l)),
                    ne(l, { validation: "cuid", code: Z.invalid_string, message: u.message }),
                    i.dirty());
            else if (u.kind === "cuid2")
                t_.test(r.data) ||
                    ((l = this._getOrReturnCtx(r, l)),
                    ne(l, { validation: "cuid2", code: Z.invalid_string, message: u.message }),
                    i.dirty());
            else if (u.kind === "ulid")
                n_.test(r.data) ||
                    ((l = this._getOrReturnCtx(r, l)),
                    ne(l, { validation: "ulid", code: Z.invalid_string, message: u.message }),
                    i.dirty());
            else if (u.kind === "url")
                try {
                    new URL(r.data);
                } catch {
                    (l = this._getOrReturnCtx(r, l)),
                        ne(l, { validation: "url", code: Z.invalid_string, message: u.message }),
                        i.dirty();
                }
            else
                u.kind === "regex"
                    ? ((u.regex.lastIndex = 0),
                      u.regex.test(r.data) ||
                          ((l = this._getOrReturnCtx(r, l)),
                          ne(l, { validation: "regex", code: Z.invalid_string, message: u.message }),
                          i.dirty()))
                    : u.kind === "trim"
                      ? (r.data = r.data.trim())
                      : u.kind === "includes"
                        ? r.data.includes(u.value, u.position) ||
                          ((l = this._getOrReturnCtx(r, l)),
                          ne(l, {
                              code: Z.invalid_string,
                              validation: { includes: u.value, position: u.position },
                              message: u.message,
                          }),
                          i.dirty())
                        : u.kind === "toLowerCase"
                          ? (r.data = r.data.toLowerCase())
                          : u.kind === "toUpperCase"
                            ? (r.data = r.data.toUpperCase())
                            : u.kind === "startsWith"
                              ? r.data.startsWith(u.value) ||
                                ((l = this._getOrReturnCtx(r, l)),
                                ne(l, {
                                    code: Z.invalid_string,
                                    validation: { startsWith: u.value },
                                    message: u.message,
                                }),
                                i.dirty())
                              : u.kind === "endsWith"
                                ? r.data.endsWith(u.value) ||
                                  ((l = this._getOrReturnCtx(r, l)),
                                  ne(l, {
                                      code: Z.invalid_string,
                                      validation: { endsWith: u.value },
                                      message: u.message,
                                  }),
                                  i.dirty())
                                : u.kind === "datetime"
                                  ? pg(u).test(r.data) ||
                                    ((l = this._getOrReturnCtx(r, l)),
                                    ne(l, { code: Z.invalid_string, validation: "datetime", message: u.message }),
                                    i.dirty())
                                  : u.kind === "date"
                                    ? h_.test(r.data) ||
                                      ((l = this._getOrReturnCtx(r, l)),
                                      ne(l, { code: Z.invalid_string, validation: "date", message: u.message }),
                                      i.dirty())
                                    : u.kind === "time"
                                      ? g_(u).test(r.data) ||
                                        ((l = this._getOrReturnCtx(r, l)),
                                        ne(l, { code: Z.invalid_string, validation: "time", message: u.message }),
                                        i.dirty())
                                      : u.kind === "duration"
                                        ? i_.test(r.data) ||
                                          ((l = this._getOrReturnCtx(r, l)),
                                          ne(l, { validation: "duration", code: Z.invalid_string, message: u.message }),
                                          i.dirty())
                                        : u.kind === "ip"
                                          ? y_(r.data, u.version) ||
                                            ((l = this._getOrReturnCtx(r, l)),
                                            ne(l, { validation: "ip", code: Z.invalid_string, message: u.message }),
                                            i.dirty())
                                          : u.kind === "jwt"
                                            ? v_(r.data, u.alg) ||
                                              ((l = this._getOrReturnCtx(r, l)),
                                              ne(l, { validation: "jwt", code: Z.invalid_string, message: u.message }),
                                              i.dirty())
                                            : u.kind === "cidr"
                                              ? x_(r.data, u.version) ||
                                                ((l = this._getOrReturnCtx(r, l)),
                                                ne(l, {
                                                    validation: "cidr",
                                                    code: Z.invalid_string,
                                                    message: u.message,
                                                }),
                                                i.dirty())
                                              : u.kind === "base64"
                                                ? p_.test(r.data) ||
                                                  ((l = this._getOrReturnCtx(r, l)),
                                                  ne(l, {
                                                      validation: "base64",
                                                      code: Z.invalid_string,
                                                      message: u.message,
                                                  }),
                                                  i.dirty())
                                                : u.kind === "base64url"
                                                  ? m_.test(r.data) ||
                                                    ((l = this._getOrReturnCtx(r, l)),
                                                    ne(l, {
                                                        validation: "base64url",
                                                        code: Z.invalid_string,
                                                        message: u.message,
                                                    }),
                                                    i.dirty())
                                                  : Fe.assertNever(u);
        return { status: i.value, value: r.data };
    }
    _regex(r, s, i) {
        return this.refinement((l) => r.test(l), { validation: s, code: Z.invalid_string, ...he.errToObj(i) });
    }
    _addCheck(r) {
        return new an({ ...this._def, checks: [...this._def.checks, r] });
    }
    email(r) {
        return this._addCheck({ kind: "email", ...he.errToObj(r) });
    }
    url(r) {
        return this._addCheck({ kind: "url", ...he.errToObj(r) });
    }
    emoji(r) {
        return this._addCheck({ kind: "emoji", ...he.errToObj(r) });
    }
    uuid(r) {
        return this._addCheck({ kind: "uuid", ...he.errToObj(r) });
    }
    nanoid(r) {
        return this._addCheck({ kind: "nanoid", ...he.errToObj(r) });
    }
    cuid(r) {
        return this._addCheck({ kind: "cuid", ...he.errToObj(r) });
    }
    cuid2(r) {
        return this._addCheck({ kind: "cuid2", ...he.errToObj(r) });
    }
    ulid(r) {
        return this._addCheck({ kind: "ulid", ...he.errToObj(r) });
    }
    base64(r) {
        return this._addCheck({ kind: "base64", ...he.errToObj(r) });
    }
    base64url(r) {
        return this._addCheck({ kind: "base64url", ...he.errToObj(r) });
    }
    jwt(r) {
        return this._addCheck({ kind: "jwt", ...he.errToObj(r) });
    }
    ip(r) {
        return this._addCheck({ kind: "ip", ...he.errToObj(r) });
    }
    cidr(r) {
        return this._addCheck({ kind: "cidr", ...he.errToObj(r) });
    }
    datetime(r) {
        var s, i;
        return typeof r == "string"
            ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: r })
            : this._addCheck({
                  kind: "datetime",
                  precision: typeof r?.precision > "u" ? null : r?.precision,
                  offset: (s = r?.offset) !== null && s !== void 0 ? s : !1,
                  local: (i = r?.local) !== null && i !== void 0 ? i : !1,
                  ...he.errToObj(r?.message),
              });
    }
    date(r) {
        return this._addCheck({ kind: "date", message: r });
    }
    time(r) {
        return typeof r == "string"
            ? this._addCheck({ kind: "time", precision: null, message: r })
            : this._addCheck({
                  kind: "time",
                  precision: typeof r?.precision > "u" ? null : r?.precision,
                  ...he.errToObj(r?.message),
              });
    }
    duration(r) {
        return this._addCheck({ kind: "duration", ...he.errToObj(r) });
    }
    regex(r, s) {
        return this._addCheck({ kind: "regex", regex: r, ...he.errToObj(s) });
    }
    includes(r, s) {
        return this._addCheck({ kind: "includes", value: r, position: s?.position, ...he.errToObj(s?.message) });
    }
    startsWith(r, s) {
        return this._addCheck({ kind: "startsWith", value: r, ...he.errToObj(s) });
    }
    endsWith(r, s) {
        return this._addCheck({ kind: "endsWith", value: r, ...he.errToObj(s) });
    }
    min(r, s) {
        return this._addCheck({ kind: "min", value: r, ...he.errToObj(s) });
    }
    max(r, s) {
        return this._addCheck({ kind: "max", value: r, ...he.errToObj(s) });
    }
    length(r, s) {
        return this._addCheck({ kind: "length", value: r, ...he.errToObj(s) });
    }
    nonempty(r) {
        return this.min(1, he.errToObj(r));
    }
    trim() {
        return new an({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
    }
    toLowerCase() {
        return new an({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
    }
    toUpperCase() {
        return new an({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
    }
    get isDatetime() {
        return !!this._def.checks.find((r) => r.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((r) => r.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((r) => r.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((r) => r.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((r) => r.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((r) => r.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((r) => r.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((r) => r.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((r) => r.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((r) => r.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((r) => r.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((r) => r.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((r) => r.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((r) => r.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((r) => r.kind === "base64");
    }
    get isBase64url() {
        return !!this._def.checks.find((r) => r.kind === "base64url");
    }
    get minLength() {
        let r = null;
        for (const s of this._def.checks) s.kind === "min" && (r === null || s.value > r) && (r = s.value);
        return r;
    }
    get maxLength() {
        let r = null;
        for (const s of this._def.checks) s.kind === "max" && (r === null || s.value < r) && (r = s.value);
        return r;
    }
}
an.create = (n) => {
    var r;
    return new an({
        checks: [],
        typeName: we.ZodString,
        coerce: (r = n?.coerce) !== null && r !== void 0 ? r : !1,
        ...Pe(n),
    });
};
function w_(n, r) {
    const s = (n.toString().split(".")[1] || "").length,
        i = (r.toString().split(".")[1] || "").length,
        l = s > i ? s : i,
        u = parseInt(n.toFixed(l).replace(".", "")),
        f = parseInt(r.toFixed(l).replace(".", ""));
    return (u % f) / Math.pow(10, l);
}
class hr extends je {
    constructor() {
        super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf);
    }
    _parse(r) {
        if ((this._def.coerce && (r.data = Number(r.data)), this._getType(r) !== ae.number)) {
            const u = this._getOrReturnCtx(r);
            return ne(u, { code: Z.invalid_type, expected: ae.number, received: u.parsedType }), ke;
        }
        let i;
        const l = new kt();
        for (const u of this._def.checks)
            u.kind === "int"
                ? Fe.isInteger(r.data) ||
                  ((i = this._getOrReturnCtx(r, i)),
                  ne(i, { code: Z.invalid_type, expected: "integer", received: "float", message: u.message }),
                  l.dirty())
                : u.kind === "min"
                  ? (u.inclusive ? r.data < u.value : r.data <= u.value) &&
                    ((i = this._getOrReturnCtx(r, i)),
                    ne(i, {
                        code: Z.too_small,
                        minimum: u.value,
                        type: "number",
                        inclusive: u.inclusive,
                        exact: !1,
                        message: u.message,
                    }),
                    l.dirty())
                  : u.kind === "max"
                    ? (u.inclusive ? r.data > u.value : r.data >= u.value) &&
                      ((i = this._getOrReturnCtx(r, i)),
                      ne(i, {
                          code: Z.too_big,
                          maximum: u.value,
                          type: "number",
                          inclusive: u.inclusive,
                          exact: !1,
                          message: u.message,
                      }),
                      l.dirty())
                    : u.kind === "multipleOf"
                      ? w_(r.data, u.value) !== 0 &&
                        ((i = this._getOrReturnCtx(r, i)),
                        ne(i, { code: Z.not_multiple_of, multipleOf: u.value, message: u.message }),
                        l.dirty())
                      : u.kind === "finite"
                        ? Number.isFinite(r.data) ||
                          ((i = this._getOrReturnCtx(r, i)),
                          ne(i, { code: Z.not_finite, message: u.message }),
                          l.dirty())
                        : Fe.assertNever(u);
        return { status: l.value, value: r.data };
    }
    gte(r, s) {
        return this.setLimit("min", r, !0, he.toString(s));
    }
    gt(r, s) {
        return this.setLimit("min", r, !1, he.toString(s));
    }
    lte(r, s) {
        return this.setLimit("max", r, !0, he.toString(s));
    }
    lt(r, s) {
        return this.setLimit("max", r, !1, he.toString(s));
    }
    setLimit(r, s, i, l) {
        return new hr({
            ...this._def,
            checks: [...this._def.checks, { kind: r, value: s, inclusive: i, message: he.toString(l) }],
        });
    }
    _addCheck(r) {
        return new hr({ ...this._def, checks: [...this._def.checks, r] });
    }
    int(r) {
        return this._addCheck({ kind: "int", message: he.toString(r) });
    }
    positive(r) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: he.toString(r) });
    }
    negative(r) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: he.toString(r) });
    }
    nonpositive(r) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: he.toString(r) });
    }
    nonnegative(r) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: he.toString(r) });
    }
    multipleOf(r, s) {
        return this._addCheck({ kind: "multipleOf", value: r, message: he.toString(s) });
    }
    finite(r) {
        return this._addCheck({ kind: "finite", message: he.toString(r) });
    }
    safe(r) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: he.toString(r),
        })._addCheck({ kind: "max", inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: he.toString(r) });
    }
    get minValue() {
        let r = null;
        for (const s of this._def.checks) s.kind === "min" && (r === null || s.value > r) && (r = s.value);
        return r;
    }
    get maxValue() {
        let r = null;
        for (const s of this._def.checks) s.kind === "max" && (r === null || s.value < r) && (r = s.value);
        return r;
    }
    get isInt() {
        return !!this._def.checks.find((r) => r.kind === "int" || (r.kind === "multipleOf" && Fe.isInteger(r.value)));
    }
    get isFinite() {
        let r = null,
            s = null;
        for (const i of this._def.checks) {
            if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf") return !0;
            i.kind === "min"
                ? (s === null || i.value > s) && (s = i.value)
                : i.kind === "max" && (r === null || i.value < r) && (r = i.value);
        }
        return Number.isFinite(s) && Number.isFinite(r);
    }
}
hr.create = (n) => new hr({ checks: [], typeName: we.ZodNumber, coerce: n?.coerce || !1, ...Pe(n) });
class gr extends je {
    constructor() {
        super(...arguments), (this.min = this.gte), (this.max = this.lte);
    }
    _parse(r) {
        if (this._def.coerce)
            try {
                r.data = BigInt(r.data);
            } catch {
                return this._getInvalidInput(r);
            }
        if (this._getType(r) !== ae.bigint) return this._getInvalidInput(r);
        let i;
        const l = new kt();
        for (const u of this._def.checks)
            u.kind === "min"
                ? (u.inclusive ? r.data < u.value : r.data <= u.value) &&
                  ((i = this._getOrReturnCtx(r, i)),
                  ne(i, {
                      code: Z.too_small,
                      type: "bigint",
                      minimum: u.value,
                      inclusive: u.inclusive,
                      message: u.message,
                  }),
                  l.dirty())
                : u.kind === "max"
                  ? (u.inclusive ? r.data > u.value : r.data >= u.value) &&
                    ((i = this._getOrReturnCtx(r, i)),
                    ne(i, {
                        code: Z.too_big,
                        type: "bigint",
                        maximum: u.value,
                        inclusive: u.inclusive,
                        message: u.message,
                    }),
                    l.dirty())
                  : u.kind === "multipleOf"
                    ? r.data % u.value !== BigInt(0) &&
                      ((i = this._getOrReturnCtx(r, i)),
                      ne(i, { code: Z.not_multiple_of, multipleOf: u.value, message: u.message }),
                      l.dirty())
                    : Fe.assertNever(u);
        return { status: l.value, value: r.data };
    }
    _getInvalidInput(r) {
        const s = this._getOrReturnCtx(r);
        return ne(s, { code: Z.invalid_type, expected: ae.bigint, received: s.parsedType }), ke;
    }
    gte(r, s) {
        return this.setLimit("min", r, !0, he.toString(s));
    }
    gt(r, s) {
        return this.setLimit("min", r, !1, he.toString(s));
    }
    lte(r, s) {
        return this.setLimit("max", r, !0, he.toString(s));
    }
    lt(r, s) {
        return this.setLimit("max", r, !1, he.toString(s));
    }
    setLimit(r, s, i, l) {
        return new gr({
            ...this._def,
            checks: [...this._def.checks, { kind: r, value: s, inclusive: i, message: he.toString(l) }],
        });
    }
    _addCheck(r) {
        return new gr({ ...this._def, checks: [...this._def.checks, r] });
    }
    positive(r) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: he.toString(r) });
    }
    negative(r) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: he.toString(r) });
    }
    nonpositive(r) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: he.toString(r) });
    }
    nonnegative(r) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: he.toString(r) });
    }
    multipleOf(r, s) {
        return this._addCheck({ kind: "multipleOf", value: r, message: he.toString(s) });
    }
    get minValue() {
        let r = null;
        for (const s of this._def.checks) s.kind === "min" && (r === null || s.value > r) && (r = s.value);
        return r;
    }
    get maxValue() {
        let r = null;
        for (const s of this._def.checks) s.kind === "max" && (r === null || s.value < r) && (r = s.value);
        return r;
    }
}
gr.create = (n) => {
    var r;
    return new gr({
        checks: [],
        typeName: we.ZodBigInt,
        coerce: (r = n?.coerce) !== null && r !== void 0 ? r : !1,
        ...Pe(n),
    });
};
class Ro extends je {
    _parse(r) {
        if ((this._def.coerce && (r.data = !!r.data), this._getType(r) !== ae.boolean)) {
            const i = this._getOrReturnCtx(r);
            return ne(i, { code: Z.invalid_type, expected: ae.boolean, received: i.parsedType }), ke;
        }
        return Nt(r.data);
    }
}
Ro.create = (n) => new Ro({ typeName: we.ZodBoolean, coerce: n?.coerce || !1, ...Pe(n) });
class Fr extends je {
    _parse(r) {
        if ((this._def.coerce && (r.data = new Date(r.data)), this._getType(r) !== ae.date)) {
            const u = this._getOrReturnCtx(r);
            return ne(u, { code: Z.invalid_type, expected: ae.date, received: u.parsedType }), ke;
        }
        if (isNaN(r.data.getTime())) {
            const u = this._getOrReturnCtx(r);
            return ne(u, { code: Z.invalid_date }), ke;
        }
        const i = new kt();
        let l;
        for (const u of this._def.checks)
            u.kind === "min"
                ? r.data.getTime() < u.value &&
                  ((l = this._getOrReturnCtx(r, l)),
                  ne(l, {
                      code: Z.too_small,
                      message: u.message,
                      inclusive: !0,
                      exact: !1,
                      minimum: u.value,
                      type: "date",
                  }),
                  i.dirty())
                : u.kind === "max"
                  ? r.data.getTime() > u.value &&
                    ((l = this._getOrReturnCtx(r, l)),
                    ne(l, {
                        code: Z.too_big,
                        message: u.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: u.value,
                        type: "date",
                    }),
                    i.dirty())
                  : Fe.assertNever(u);
        return { status: i.value, value: new Date(r.data.getTime()) };
    }
    _addCheck(r) {
        return new Fr({ ...this._def, checks: [...this._def.checks, r] });
    }
    min(r, s) {
        return this._addCheck({ kind: "min", value: r.getTime(), message: he.toString(s) });
    }
    max(r, s) {
        return this._addCheck({ kind: "max", value: r.getTime(), message: he.toString(s) });
    }
    get minDate() {
        let r = null;
        for (const s of this._def.checks) s.kind === "min" && (r === null || s.value > r) && (r = s.value);
        return r != null ? new Date(r) : null;
    }
    get maxDate() {
        let r = null;
        for (const s of this._def.checks) s.kind === "max" && (r === null || s.value < r) && (r = s.value);
        return r != null ? new Date(r) : null;
    }
}
Fr.create = (n) => new Fr({ checks: [], coerce: n?.coerce || !1, typeName: we.ZodDate, ...Pe(n) });
class Na extends je {
    _parse(r) {
        if (this._getType(r) !== ae.symbol) {
            const i = this._getOrReturnCtx(r);
            return ne(i, { code: Z.invalid_type, expected: ae.symbol, received: i.parsedType }), ke;
        }
        return Nt(r.data);
    }
}
Na.create = (n) => new Na({ typeName: we.ZodSymbol, ...Pe(n) });
class jo extends je {
    _parse(r) {
        if (this._getType(r) !== ae.undefined) {
            const i = this._getOrReturnCtx(r);
            return ne(i, { code: Z.invalid_type, expected: ae.undefined, received: i.parsedType }), ke;
        }
        return Nt(r.data);
    }
}
jo.create = (n) => new jo({ typeName: we.ZodUndefined, ...Pe(n) });
class Ao extends je {
    _parse(r) {
        if (this._getType(r) !== ae.null) {
            const i = this._getOrReturnCtx(r);
            return ne(i, { code: Z.invalid_type, expected: ae.null, received: i.parsedType }), ke;
        }
        return Nt(r.data);
    }
}
Ao.create = (n) => new Ao({ typeName: we.ZodNull, ...Pe(n) });
class bs extends je {
    constructor() {
        super(...arguments), (this._any = !0);
    }
    _parse(r) {
        return Nt(r.data);
    }
}
bs.create = (n) => new bs({ typeName: we.ZodAny, ...Pe(n) });
class Lr extends je {
    constructor() {
        super(...arguments), (this._unknown = !0);
    }
    _parse(r) {
        return Nt(r.data);
    }
}
Lr.create = (n) => new Lr({ typeName: we.ZodUnknown, ...Pe(n) });
class Bn extends je {
    _parse(r) {
        const s = this._getOrReturnCtx(r);
        return ne(s, { code: Z.invalid_type, expected: ae.never, received: s.parsedType }), ke;
    }
}
Bn.create = (n) => new Bn({ typeName: we.ZodNever, ...Pe(n) });
class Pa extends je {
    _parse(r) {
        if (this._getType(r) !== ae.undefined) {
            const i = this._getOrReturnCtx(r);
            return ne(i, { code: Z.invalid_type, expected: ae.void, received: i.parsedType }), ke;
        }
        return Nt(r.data);
    }
}
Pa.create = (n) => new Pa({ typeName: we.ZodVoid, ...Pe(n) });
class ln extends je {
    _parse(r) {
        const { ctx: s, status: i } = this._processInputParams(r),
            l = this._def;
        if (s.parsedType !== ae.array)
            return ne(s, { code: Z.invalid_type, expected: ae.array, received: s.parsedType }), ke;
        if (l.exactLength !== null) {
            const f = s.data.length > l.exactLength.value,
                p = s.data.length < l.exactLength.value;
            (f || p) &&
                (ne(s, {
                    code: f ? Z.too_big : Z.too_small,
                    minimum: p ? l.exactLength.value : void 0,
                    maximum: f ? l.exactLength.value : void 0,
                    type: "array",
                    inclusive: !0,
                    exact: !0,
                    message: l.exactLength.message,
                }),
                i.dirty());
        }
        if (
            (l.minLength !== null &&
                s.data.length < l.minLength.value &&
                (ne(s, {
                    code: Z.too_small,
                    minimum: l.minLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: l.minLength.message,
                }),
                i.dirty()),
            l.maxLength !== null &&
                s.data.length > l.maxLength.value &&
                (ne(s, {
                    code: Z.too_big,
                    maximum: l.maxLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: l.maxLength.message,
                }),
                i.dirty()),
            s.common.async)
        )
            return Promise.all([...s.data].map((f, p) => l.type._parseAsync(new Cn(s, f, s.path, p)))).then((f) =>
                kt.mergeArray(i, f)
            );
        const u = [...s.data].map((f, p) => l.type._parseSync(new Cn(s, f, s.path, p)));
        return kt.mergeArray(i, u);
    }
    get element() {
        return this._def.type;
    }
    min(r, s) {
        return new ln({ ...this._def, minLength: { value: r, message: he.toString(s) } });
    }
    max(r, s) {
        return new ln({ ...this._def, maxLength: { value: r, message: he.toString(s) } });
    }
    length(r, s) {
        return new ln({ ...this._def, exactLength: { value: r, message: he.toString(s) } });
    }
    nonempty(r) {
        return this.min(1, r);
    }
}
ln.create = (n, r) =>
    new ln({ type: n, minLength: null, maxLength: null, exactLength: null, typeName: we.ZodArray, ...Pe(r) });
function vs(n) {
    if (n instanceof Je) {
        const r = {};
        for (const s in n.shape) {
            const i = n.shape[s];
            r[s] = kn.create(vs(i));
        }
        return new Je({ ...n._def, shape: () => r });
    } else
        return n instanceof ln
            ? new ln({ ...n._def, type: vs(n.element) })
            : n instanceof kn
              ? kn.create(vs(n.unwrap()))
              : n instanceof vr
                ? vr.create(vs(n.unwrap()))
                : n instanceof bn
                  ? bn.create(n.items.map((r) => vs(r)))
                  : n;
}
class Je extends je {
    constructor() {
        super(...arguments), (this._cached = null), (this.nonstrict = this.passthrough), (this.augment = this.extend);
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const r = this._def.shape(),
            s = Fe.objectKeys(r);
        return (this._cached = { shape: r, keys: s });
    }
    _parse(r) {
        if (this._getType(r) !== ae.object) {
            const h = this._getOrReturnCtx(r);
            return ne(h, { code: Z.invalid_type, expected: ae.object, received: h.parsedType }), ke;
        }
        const { status: i, ctx: l } = this._processInputParams(r),
            { shape: u, keys: f } = this._getCached(),
            p = [];
        if (!(this._def.catchall instanceof Bn && this._def.unknownKeys === "strip"))
            for (const h in l.data) f.includes(h) || p.push(h);
        const g = [];
        for (const h of f) {
            const v = u[h],
                w = l.data[h];
            g.push({
                key: { status: "valid", value: h },
                value: v._parse(new Cn(l, w, l.path, h)),
                alwaysSet: h in l.data,
            });
        }
        if (this._def.catchall instanceof Bn) {
            const h = this._def.unknownKeys;
            if (h === "passthrough")
                for (const v of p)
                    g.push({ key: { status: "valid", value: v }, value: { status: "valid", value: l.data[v] } });
            else if (h === "strict") p.length > 0 && (ne(l, { code: Z.unrecognized_keys, keys: p }), i.dirty());
            else if (h !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
            const h = this._def.catchall;
            for (const v of p) {
                const w = l.data[v];
                g.push({
                    key: { status: "valid", value: v },
                    value: h._parse(new Cn(l, w, l.path, v)),
                    alwaysSet: v in l.data,
                });
            }
        }
        return l.common.async
            ? Promise.resolve()
                  .then(async () => {
                      const h = [];
                      for (const v of g) {
                          const w = await v.key,
                              E = await v.value;
                          h.push({ key: w, value: E, alwaysSet: v.alwaysSet });
                      }
                      return h;
                  })
                  .then((h) => kt.mergeObjectSync(i, h))
            : kt.mergeObjectSync(i, g);
    }
    get shape() {
        return this._def.shape();
    }
    strict(r) {
        return (
            he.errToObj,
            new Je({
                ...this._def,
                unknownKeys: "strict",
                ...(r !== void 0
                    ? {
                          errorMap: (s, i) => {
                              var l, u, f, p;
                              const g =
                                  (f =
                                      (u = (l = this._def).errorMap) === null || u === void 0
                                          ? void 0
                                          : u.call(l, s, i).message) !== null && f !== void 0
                                      ? f
                                      : i.defaultError;
                              return s.code === "unrecognized_keys"
                                  ? { message: (p = he.errToObj(r).message) !== null && p !== void 0 ? p : g }
                                  : { message: g };
                          },
                      }
                    : {}),
            })
        );
    }
    strip() {
        return new Je({ ...this._def, unknownKeys: "strip" });
    }
    passthrough() {
        return new Je({ ...this._def, unknownKeys: "passthrough" });
    }
    extend(r) {
        return new Je({ ...this._def, shape: () => ({ ...this._def.shape(), ...r }) });
    }
    merge(r) {
        return new Je({
            unknownKeys: r._def.unknownKeys,
            catchall: r._def.catchall,
            shape: () => ({ ...this._def.shape(), ...r._def.shape() }),
            typeName: we.ZodObject,
        });
    }
    setKey(r, s) {
        return this.augment({ [r]: s });
    }
    catchall(r) {
        return new Je({ ...this._def, catchall: r });
    }
    pick(r) {
        const s = {};
        return (
            Fe.objectKeys(r).forEach((i) => {
                r[i] && this.shape[i] && (s[i] = this.shape[i]);
            }),
            new Je({ ...this._def, shape: () => s })
        );
    }
    omit(r) {
        const s = {};
        return (
            Fe.objectKeys(this.shape).forEach((i) => {
                r[i] || (s[i] = this.shape[i]);
            }),
            new Je({ ...this._def, shape: () => s })
        );
    }
    deepPartial() {
        return vs(this);
    }
    partial(r) {
        const s = {};
        return (
            Fe.objectKeys(this.shape).forEach((i) => {
                const l = this.shape[i];
                r && !r[i] ? (s[i] = l) : (s[i] = l.optional());
            }),
            new Je({ ...this._def, shape: () => s })
        );
    }
    required(r) {
        const s = {};
        return (
            Fe.objectKeys(this.shape).forEach((i) => {
                if (r && !r[i]) s[i] = this.shape[i];
                else {
                    let u = this.shape[i];
                    for (; u instanceof kn; ) u = u._def.innerType;
                    s[i] = u;
                }
            }),
            new Je({ ...this._def, shape: () => s })
        );
    }
    keyof() {
        return mg(Fe.objectKeys(this.shape));
    }
}
Je.create = (n, r) =>
    new Je({ shape: () => n, unknownKeys: "strip", catchall: Bn.create(), typeName: we.ZodObject, ...Pe(r) });
Je.strictCreate = (n, r) =>
    new Je({ shape: () => n, unknownKeys: "strict", catchall: Bn.create(), typeName: we.ZodObject, ...Pe(r) });
Je.lazycreate = (n, r) =>
    new Je({ shape: n, unknownKeys: "strip", catchall: Bn.create(), typeName: we.ZodObject, ...Pe(r) });
class Oo extends je {
    _parse(r) {
        const { ctx: s } = this._processInputParams(r),
            i = this._def.options;
        function l(u) {
            for (const p of u) if (p.result.status === "valid") return p.result;
            for (const p of u)
                if (p.result.status === "dirty") return s.common.issues.push(...p.ctx.common.issues), p.result;
            const f = u.map((p) => new Bt(p.ctx.common.issues));
            return ne(s, { code: Z.invalid_union, unionErrors: f }), ke;
        }
        if (s.common.async)
            return Promise.all(
                i.map(async (u) => {
                    const f = { ...s, common: { ...s.common, issues: [] }, parent: null };
                    return { result: await u._parseAsync({ data: s.data, path: s.path, parent: f }), ctx: f };
                })
            ).then(l);
        {
            let u;
            const f = [];
            for (const g of i) {
                const h = { ...s, common: { ...s.common, issues: [] }, parent: null },
                    v = g._parseSync({ data: s.data, path: s.path, parent: h });
                if (v.status === "valid") return v;
                v.status === "dirty" && !u && (u = { result: v, ctx: h }),
                    h.common.issues.length && f.push(h.common.issues);
            }
            if (u) return s.common.issues.push(...u.ctx.common.issues), u.result;
            const p = f.map((g) => new Bt(g));
            return ne(s, { code: Z.invalid_union, unionErrors: p }), ke;
        }
    }
    get options() {
        return this._def.options;
    }
}
Oo.create = (n, r) => new Oo({ options: n, typeName: we.ZodUnion, ...Pe(r) });
const zn = (n) =>
    n instanceof Do
        ? zn(n.schema)
        : n instanceof fn
          ? zn(n.innerType())
          : n instanceof Io
            ? [n.value]
            : n instanceof yr
              ? n.options
              : n instanceof Fo
                ? Fe.objectValues(n.enum)
                : n instanceof zo
                  ? zn(n._def.innerType)
                  : n instanceof jo
                    ? [void 0]
                    : n instanceof Ao
                      ? [null]
                      : n instanceof kn
                        ? [void 0, ...zn(n.unwrap())]
                        : n instanceof vr
                          ? [null, ...zn(n.unwrap())]
                          : n instanceof Lc || n instanceof Uo
                            ? zn(n.unwrap())
                            : n instanceof Vo
                              ? zn(n._def.innerType)
                              : [];
class Ha extends je {
    _parse(r) {
        const { ctx: s } = this._processInputParams(r);
        if (s.parsedType !== ae.object)
            return ne(s, { code: Z.invalid_type, expected: ae.object, received: s.parsedType }), ke;
        const i = this.discriminator,
            l = s.data[i],
            u = this.optionsMap.get(l);
        return u
            ? s.common.async
                ? u._parseAsync({ data: s.data, path: s.path, parent: s })
                : u._parseSync({ data: s.data, path: s.path, parent: s })
            : (ne(s, { code: Z.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [i] }),
              ke);
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    static create(r, s, i) {
        const l = new Map();
        for (const u of s) {
            const f = zn(u.shape[r]);
            if (!f.length)
                throw new Error(
                    `A discriminator value for key \`${r}\` could not be extracted from all schema options`
                );
            for (const p of f) {
                if (l.has(p)) throw new Error(`Discriminator property ${String(r)} has duplicate value ${String(p)}`);
                l.set(p, u);
            }
        }
        return new Ha({ typeName: we.ZodDiscriminatedUnion, discriminator: r, options: s, optionsMap: l, ...Pe(i) });
    }
}
function cc(n, r) {
    const s = Vn(n),
        i = Vn(r);
    if (n === r) return { valid: !0, data: n };
    if (s === ae.object && i === ae.object) {
        const l = Fe.objectKeys(r),
            u = Fe.objectKeys(n).filter((p) => l.indexOf(p) !== -1),
            f = { ...n, ...r };
        for (const p of u) {
            const g = cc(n[p], r[p]);
            if (!g.valid) return { valid: !1 };
            f[p] = g.data;
        }
        return { valid: !0, data: f };
    } else if (s === ae.array && i === ae.array) {
        if (n.length !== r.length) return { valid: !1 };
        const l = [];
        for (let u = 0; u < n.length; u++) {
            const f = n[u],
                p = r[u],
                g = cc(f, p);
            if (!g.valid) return { valid: !1 };
            l.push(g.data);
        }
        return { valid: !0, data: l };
    } else return s === ae.date && i === ae.date && +n == +r ? { valid: !0, data: n } : { valid: !1 };
}
class Lo extends je {
    _parse(r) {
        const { status: s, ctx: i } = this._processInputParams(r),
            l = (u, f) => {
                if (lc(u) || lc(f)) return ke;
                const p = cc(u.value, f.value);
                return p.valid
                    ? ((uc(u) || uc(f)) && s.dirty(), { status: s.value, value: p.data })
                    : (ne(i, { code: Z.invalid_intersection_types }), ke);
            };
        return i.common.async
            ? Promise.all([
                  this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
                  this._def.right._parseAsync({ data: i.data, path: i.path, parent: i }),
              ]).then(([u, f]) => l(u, f))
            : l(
                  this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
                  this._def.right._parseSync({ data: i.data, path: i.path, parent: i })
              );
    }
}
Lo.create = (n, r, s) => new Lo({ left: n, right: r, typeName: we.ZodIntersection, ...Pe(s) });
class bn extends je {
    _parse(r) {
        const { status: s, ctx: i } = this._processInputParams(r);
        if (i.parsedType !== ae.array)
            return ne(i, { code: Z.invalid_type, expected: ae.array, received: i.parsedType }), ke;
        if (i.data.length < this._def.items.length)
            return (
                ne(i, { code: Z.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }),
                ke
            );
        !this._def.rest &&
            i.data.length > this._def.items.length &&
            (ne(i, { code: Z.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }),
            s.dirty());
        const u = [...i.data]
            .map((f, p) => {
                const g = this._def.items[p] || this._def.rest;
                return g ? g._parse(new Cn(i, f, i.path, p)) : null;
            })
            .filter((f) => !!f);
        return i.common.async ? Promise.all(u).then((f) => kt.mergeArray(s, f)) : kt.mergeArray(s, u);
    }
    get items() {
        return this._def.items;
    }
    rest(r) {
        return new bn({ ...this._def, rest: r });
    }
}
bn.create = (n, r) => {
    if (!Array.isArray(n)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new bn({ items: n, typeName: we.ZodTuple, rest: null, ...Pe(r) });
};
class Mo extends je {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(r) {
        const { status: s, ctx: i } = this._processInputParams(r);
        if (i.parsedType !== ae.object)
            return ne(i, { code: Z.invalid_type, expected: ae.object, received: i.parsedType }), ke;
        const l = [],
            u = this._def.keyType,
            f = this._def.valueType;
        for (const p in i.data)
            l.push({
                key: u._parse(new Cn(i, p, i.path, p)),
                value: f._parse(new Cn(i, i.data[p], i.path, p)),
                alwaysSet: p in i.data,
            });
        return i.common.async ? kt.mergeObjectAsync(s, l) : kt.mergeObjectSync(s, l);
    }
    get element() {
        return this._def.valueType;
    }
    static create(r, s, i) {
        return s instanceof je
            ? new Mo({ keyType: r, valueType: s, typeName: we.ZodRecord, ...Pe(i) })
            : new Mo({ keyType: an.create(), valueType: r, typeName: we.ZodRecord, ...Pe(s) });
    }
}
class Ra extends je {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(r) {
        const { status: s, ctx: i } = this._processInputParams(r);
        if (i.parsedType !== ae.map)
            return ne(i, { code: Z.invalid_type, expected: ae.map, received: i.parsedType }), ke;
        const l = this._def.keyType,
            u = this._def.valueType,
            f = [...i.data.entries()].map(([p, g], h) => ({
                key: l._parse(new Cn(i, p, i.path, [h, "key"])),
                value: u._parse(new Cn(i, g, i.path, [h, "value"])),
            }));
        if (i.common.async) {
            const p = new Map();
            return Promise.resolve().then(async () => {
                for (const g of f) {
                    const h = await g.key,
                        v = await g.value;
                    if (h.status === "aborted" || v.status === "aborted") return ke;
                    (h.status === "dirty" || v.status === "dirty") && s.dirty(), p.set(h.value, v.value);
                }
                return { status: s.value, value: p };
            });
        } else {
            const p = new Map();
            for (const g of f) {
                const h = g.key,
                    v = g.value;
                if (h.status === "aborted" || v.status === "aborted") return ke;
                (h.status === "dirty" || v.status === "dirty") && s.dirty(), p.set(h.value, v.value);
            }
            return { status: s.value, value: p };
        }
    }
}
Ra.create = (n, r, s) => new Ra({ valueType: r, keyType: n, typeName: we.ZodMap, ...Pe(s) });
class zr extends je {
    _parse(r) {
        const { status: s, ctx: i } = this._processInputParams(r);
        if (i.parsedType !== ae.set)
            return ne(i, { code: Z.invalid_type, expected: ae.set, received: i.parsedType }), ke;
        const l = this._def;
        l.minSize !== null &&
            i.data.size < l.minSize.value &&
            (ne(i, {
                code: Z.too_small,
                minimum: l.minSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: l.minSize.message,
            }),
            s.dirty()),
            l.maxSize !== null &&
                i.data.size > l.maxSize.value &&
                (ne(i, {
                    code: Z.too_big,
                    maximum: l.maxSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: l.maxSize.message,
                }),
                s.dirty());
        const u = this._def.valueType;
        function f(g) {
            const h = new Set();
            for (const v of g) {
                if (v.status === "aborted") return ke;
                v.status === "dirty" && s.dirty(), h.add(v.value);
            }
            return { status: s.value, value: h };
        }
        const p = [...i.data.values()].map((g, h) => u._parse(new Cn(i, g, i.path, h)));
        return i.common.async ? Promise.all(p).then((g) => f(g)) : f(p);
    }
    min(r, s) {
        return new zr({ ...this._def, minSize: { value: r, message: he.toString(s) } });
    }
    max(r, s) {
        return new zr({ ...this._def, maxSize: { value: r, message: he.toString(s) } });
    }
    size(r, s) {
        return this.min(r, s).max(r, s);
    }
    nonempty(r) {
        return this.min(1, r);
    }
}
zr.create = (n, r) => new zr({ valueType: n, minSize: null, maxSize: null, typeName: we.ZodSet, ...Pe(r) });
class ks extends je {
    constructor() {
        super(...arguments), (this.validate = this.implement);
    }
    _parse(r) {
        const { ctx: s } = this._processInputParams(r);
        if (s.parsedType !== ae.function)
            return ne(s, { code: Z.invalid_type, expected: ae.function, received: s.parsedType }), ke;
        function i(p, g) {
            return ba({
                data: p,
                path: s.path,
                errorMaps: [s.common.contextualErrorMap, s.schemaErrorMap, Ca(), Cs].filter((h) => !!h),
                issueData: { code: Z.invalid_arguments, argumentsError: g },
            });
        }
        function l(p, g) {
            return ba({
                data: p,
                path: s.path,
                errorMaps: [s.common.contextualErrorMap, s.schemaErrorMap, Ca(), Cs].filter((h) => !!h),
                issueData: { code: Z.invalid_return_type, returnTypeError: g },
            });
        }
        const u = { errorMap: s.common.contextualErrorMap },
            f = s.data;
        if (this._def.returns instanceof Ts) {
            const p = this;
            return Nt(async function (...g) {
                const h = new Bt([]),
                    v = await p._def.args.parseAsync(g, u).catch((A) => {
                        throw (h.addIssue(i(g, A)), h);
                    }),
                    w = await Reflect.apply(f, this, v);
                return await p._def.returns._def.type.parseAsync(w, u).catch((A) => {
                    throw (h.addIssue(l(w, A)), h);
                });
            });
        } else {
            const p = this;
            return Nt(function (...g) {
                const h = p._def.args.safeParse(g, u);
                if (!h.success) throw new Bt([i(g, h.error)]);
                const v = Reflect.apply(f, this, h.data),
                    w = p._def.returns.safeParse(v, u);
                if (!w.success) throw new Bt([l(v, w.error)]);
                return w.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...r) {
        return new ks({ ...this._def, args: bn.create(r).rest(Lr.create()) });
    }
    returns(r) {
        return new ks({ ...this._def, returns: r });
    }
    implement(r) {
        return this.parse(r);
    }
    strictImplement(r) {
        return this.parse(r);
    }
    static create(r, s, i) {
        return new ks({
            args: r || bn.create([]).rest(Lr.create()),
            returns: s || Lr.create(),
            typeName: we.ZodFunction,
            ...Pe(i),
        });
    }
}
class Do extends je {
    get schema() {
        return this._def.getter();
    }
    _parse(r) {
        const { ctx: s } = this._processInputParams(r);
        return this._def.getter()._parse({ data: s.data, path: s.path, parent: s });
    }
}
Do.create = (n, r) => new Do({ getter: n, typeName: we.ZodLazy, ...Pe(r) });
class Io extends je {
    _parse(r) {
        if (r.data !== this._def.value) {
            const s = this._getOrReturnCtx(r);
            return ne(s, { received: s.data, code: Z.invalid_literal, expected: this._def.value }), ke;
        }
        return { status: "valid", value: r.data };
    }
    get value() {
        return this._def.value;
    }
}
Io.create = (n, r) => new Io({ value: n, typeName: we.ZodLiteral, ...Pe(r) });
function mg(n, r) {
    return new yr({ values: n, typeName: we.ZodEnum, ...Pe(r) });
}
class yr extends je {
    constructor() {
        super(...arguments), ko.set(this, void 0);
    }
    _parse(r) {
        if (typeof r.data != "string") {
            const s = this._getOrReturnCtx(r),
                i = this._def.values;
            return ne(s, { expected: Fe.joinValues(i), received: s.parsedType, code: Z.invalid_type }), ke;
        }
        if ((Ta(this, ko) || cg(this, ko, new Set(this._def.values)), !Ta(this, ko).has(r.data))) {
            const s = this._getOrReturnCtx(r),
                i = this._def.values;
            return ne(s, { received: s.data, code: Z.invalid_enum_value, options: i }), ke;
        }
        return Nt(r.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const r = {};
        for (const s of this._def.values) r[s] = s;
        return r;
    }
    get Values() {
        const r = {};
        for (const s of this._def.values) r[s] = s;
        return r;
    }
    get Enum() {
        const r = {};
        for (const s of this._def.values) r[s] = s;
        return r;
    }
    extract(r, s = this._def) {
        return yr.create(r, { ...this._def, ...s });
    }
    exclude(r, s = this._def) {
        return yr.create(
            this.options.filter((i) => !r.includes(i)),
            { ...this._def, ...s }
        );
    }
}
ko = new WeakMap();
yr.create = mg;
class Fo extends je {
    constructor() {
        super(...arguments), So.set(this, void 0);
    }
    _parse(r) {
        const s = Fe.getValidEnumValues(this._def.values),
            i = this._getOrReturnCtx(r);
        if (i.parsedType !== ae.string && i.parsedType !== ae.number) {
            const l = Fe.objectValues(s);
            return ne(i, { expected: Fe.joinValues(l), received: i.parsedType, code: Z.invalid_type }), ke;
        }
        if (
            (Ta(this, So) || cg(this, So, new Set(Fe.getValidEnumValues(this._def.values))), !Ta(this, So).has(r.data))
        ) {
            const l = Fe.objectValues(s);
            return ne(i, { received: i.data, code: Z.invalid_enum_value, options: l }), ke;
        }
        return Nt(r.data);
    }
    get enum() {
        return this._def.values;
    }
}
So = new WeakMap();
Fo.create = (n, r) => new Fo({ values: n, typeName: we.ZodNativeEnum, ...Pe(r) });
class Ts extends je {
    unwrap() {
        return this._def.type;
    }
    _parse(r) {
        const { ctx: s } = this._processInputParams(r);
        if (s.parsedType !== ae.promise && s.common.async === !1)
            return ne(s, { code: Z.invalid_type, expected: ae.promise, received: s.parsedType }), ke;
        const i = s.parsedType === ae.promise ? s.data : Promise.resolve(s.data);
        return Nt(i.then((l) => this._def.type.parseAsync(l, { path: s.path, errorMap: s.common.contextualErrorMap })));
    }
}
Ts.create = (n, r) => new Ts({ type: n, typeName: we.ZodPromise, ...Pe(r) });
class fn extends je {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === we.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(r) {
        const { status: s, ctx: i } = this._processInputParams(r),
            l = this._def.effect || null,
            u = {
                addIssue: (f) => {
                    ne(i, f), f.fatal ? s.abort() : s.dirty();
                },
                get path() {
                    return i.path;
                },
            };
        if (((u.addIssue = u.addIssue.bind(u)), l.type === "preprocess")) {
            const f = l.transform(i.data, u);
            if (i.common.async)
                return Promise.resolve(f).then(async (p) => {
                    if (s.value === "aborted") return ke;
                    const g = await this._def.schema._parseAsync({ data: p, path: i.path, parent: i });
                    return g.status === "aborted" ? ke : g.status === "dirty" || s.value === "dirty" ? xs(g.value) : g;
                });
            {
                if (s.value === "aborted") return ke;
                const p = this._def.schema._parseSync({ data: f, path: i.path, parent: i });
                return p.status === "aborted" ? ke : p.status === "dirty" || s.value === "dirty" ? xs(p.value) : p;
            }
        }
        if (l.type === "refinement") {
            const f = (p) => {
                const g = l.refinement(p, u);
                if (i.common.async) return Promise.resolve(g);
                if (g instanceof Promise)
                    throw new Error(
                        "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
                    );
                return p;
            };
            if (i.common.async === !1) {
                const p = this._def.schema._parseSync({ data: i.data, path: i.path, parent: i });
                return p.status === "aborted"
                    ? ke
                    : (p.status === "dirty" && s.dirty(), f(p.value), { status: s.value, value: p.value });
            } else
                return this._def.schema
                    ._parseAsync({ data: i.data, path: i.path, parent: i })
                    .then((p) =>
                        p.status === "aborted"
                            ? ke
                            : (p.status === "dirty" && s.dirty(),
                              f(p.value).then(() => ({ status: s.value, value: p.value })))
                    );
        }
        if (l.type === "transform")
            if (i.common.async === !1) {
                const f = this._def.schema._parseSync({ data: i.data, path: i.path, parent: i });
                if (!Ir(f)) return f;
                const p = l.transform(f.value, u);
                if (p instanceof Promise)
                    throw new Error(
                        "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
                    );
                return { status: s.value, value: p };
            } else
                return this._def.schema
                    ._parseAsync({ data: i.data, path: i.path, parent: i })
                    .then((f) =>
                        Ir(f)
                            ? Promise.resolve(l.transform(f.value, u)).then((p) => ({ status: s.value, value: p }))
                            : f
                    );
        Fe.assertNever(l);
    }
}
fn.create = (n, r, s) => new fn({ schema: n, typeName: we.ZodEffects, effect: r, ...Pe(s) });
fn.createWithPreprocess = (n, r, s) =>
    new fn({ schema: r, effect: { type: "preprocess", transform: n }, typeName: we.ZodEffects, ...Pe(s) });
class kn extends je {
    _parse(r) {
        return this._getType(r) === ae.undefined ? Nt(void 0) : this._def.innerType._parse(r);
    }
    unwrap() {
        return this._def.innerType;
    }
}
kn.create = (n, r) => new kn({ innerType: n, typeName: we.ZodOptional, ...Pe(r) });
class vr extends je {
    _parse(r) {
        return this._getType(r) === ae.null ? Nt(null) : this._def.innerType._parse(r);
    }
    unwrap() {
        return this._def.innerType;
    }
}
vr.create = (n, r) => new vr({ innerType: n, typeName: we.ZodNullable, ...Pe(r) });
class zo extends je {
    _parse(r) {
        const { ctx: s } = this._processInputParams(r);
        let i = s.data;
        return (
            s.parsedType === ae.undefined && (i = this._def.defaultValue()),
            this._def.innerType._parse({ data: i, path: s.path, parent: s })
        );
    }
    removeDefault() {
        return this._def.innerType;
    }
}
zo.create = (n, r) =>
    new zo({
        innerType: n,
        typeName: we.ZodDefault,
        defaultValue: typeof r.default == "function" ? r.default : () => r.default,
        ...Pe(r),
    });
class Vo extends je {
    _parse(r) {
        const { ctx: s } = this._processInputParams(r),
            i = { ...s, common: { ...s.common, issues: [] } },
            l = this._def.innerType._parse({ data: i.data, path: i.path, parent: { ...i } });
        return Po(l)
            ? l.then((u) => ({
                  status: "valid",
                  value:
                      u.status === "valid"
                          ? u.value
                          : this._def.catchValue({
                                get error() {
                                    return new Bt(i.common.issues);
                                },
                                input: i.data,
                            }),
              }))
            : {
                  status: "valid",
                  value:
                      l.status === "valid"
                          ? l.value
                          : this._def.catchValue({
                                get error() {
                                    return new Bt(i.common.issues);
                                },
                                input: i.data,
                            }),
              };
    }
    removeCatch() {
        return this._def.innerType;
    }
}
Vo.create = (n, r) =>
    new Vo({
        innerType: n,
        typeName: we.ZodCatch,
        catchValue: typeof r.catch == "function" ? r.catch : () => r.catch,
        ...Pe(r),
    });
class ja extends je {
    _parse(r) {
        if (this._getType(r) !== ae.nan) {
            const i = this._getOrReturnCtx(r);
            return ne(i, { code: Z.invalid_type, expected: ae.nan, received: i.parsedType }), ke;
        }
        return { status: "valid", value: r.data };
    }
}
ja.create = (n) => new ja({ typeName: we.ZodNaN, ...Pe(n) });
const __ = Symbol("zod_brand");
class Lc extends je {
    _parse(r) {
        const { ctx: s } = this._processInputParams(r),
            i = s.data;
        return this._def.type._parse({ data: i, path: s.path, parent: s });
    }
    unwrap() {
        return this._def.type;
    }
}
class Zo extends je {
    _parse(r) {
        const { status: s, ctx: i } = this._processInputParams(r);
        if (i.common.async)
            return (async () => {
                const u = await this._def.in._parseAsync({ data: i.data, path: i.path, parent: i });
                return u.status === "aborted"
                    ? ke
                    : u.status === "dirty"
                      ? (s.dirty(), xs(u.value))
                      : this._def.out._parseAsync({ data: u.value, path: i.path, parent: i });
            })();
        {
            const l = this._def.in._parseSync({ data: i.data, path: i.path, parent: i });
            return l.status === "aborted"
                ? ke
                : l.status === "dirty"
                  ? (s.dirty(), { status: "dirty", value: l.value })
                  : this._def.out._parseSync({ data: l.value, path: i.path, parent: i });
        }
    }
    static create(r, s) {
        return new Zo({ in: r, out: s, typeName: we.ZodPipeline });
    }
}
class Uo extends je {
    _parse(r) {
        const s = this._def.innerType._parse(r),
            i = (l) => (Ir(l) && (l.value = Object.freeze(l.value)), l);
        return Po(s) ? s.then((l) => i(l)) : i(s);
    }
    unwrap() {
        return this._def.innerType;
    }
}
Uo.create = (n, r) => new Uo({ innerType: n, typeName: we.ZodReadonly, ...Pe(r) });
function hm(n, r) {
    const s = typeof n == "function" ? n(r) : typeof n == "string" ? { message: n } : n;
    return typeof s == "string" ? { message: s } : s;
}
function hg(n, r = {}, s) {
    return n
        ? bs.create().superRefine((i, l) => {
              var u, f;
              const p = n(i);
              if (p instanceof Promise)
                  return p.then((g) => {
                      var h, v;
                      if (!g) {
                          const w = hm(r, i),
                              E =
                                  (v = (h = w.fatal) !== null && h !== void 0 ? h : s) !== null && v !== void 0
                                      ? v
                                      : !0;
                          l.addIssue({ code: "custom", ...w, fatal: E });
                      }
                  });
              if (!p) {
                  const g = hm(r, i),
                      h = (f = (u = g.fatal) !== null && u !== void 0 ? u : s) !== null && f !== void 0 ? f : !0;
                  l.addIssue({ code: "custom", ...g, fatal: h });
              }
          })
        : bs.create();
}
const k_ = { object: Je.lazycreate };
var we;
(function (n) {
    (n.ZodString = "ZodString"),
        (n.ZodNumber = "ZodNumber"),
        (n.ZodNaN = "ZodNaN"),
        (n.ZodBigInt = "ZodBigInt"),
        (n.ZodBoolean = "ZodBoolean"),
        (n.ZodDate = "ZodDate"),
        (n.ZodSymbol = "ZodSymbol"),
        (n.ZodUndefined = "ZodUndefined"),
        (n.ZodNull = "ZodNull"),
        (n.ZodAny = "ZodAny"),
        (n.ZodUnknown = "ZodUnknown"),
        (n.ZodNever = "ZodNever"),
        (n.ZodVoid = "ZodVoid"),
        (n.ZodArray = "ZodArray"),
        (n.ZodObject = "ZodObject"),
        (n.ZodUnion = "ZodUnion"),
        (n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
        (n.ZodIntersection = "ZodIntersection"),
        (n.ZodTuple = "ZodTuple"),
        (n.ZodRecord = "ZodRecord"),
        (n.ZodMap = "ZodMap"),
        (n.ZodSet = "ZodSet"),
        (n.ZodFunction = "ZodFunction"),
        (n.ZodLazy = "ZodLazy"),
        (n.ZodLiteral = "ZodLiteral"),
        (n.ZodEnum = "ZodEnum"),
        (n.ZodEffects = "ZodEffects"),
        (n.ZodNativeEnum = "ZodNativeEnum"),
        (n.ZodOptional = "ZodOptional"),
        (n.ZodNullable = "ZodNullable"),
        (n.ZodDefault = "ZodDefault"),
        (n.ZodCatch = "ZodCatch"),
        (n.ZodPromise = "ZodPromise"),
        (n.ZodBranded = "ZodBranded"),
        (n.ZodPipeline = "ZodPipeline"),
        (n.ZodReadonly = "ZodReadonly");
})(we || (we = {}));
const S_ = (n, r = { message: `Input not instance of ${n.name}` }) => hg((s) => s instanceof n, r),
    gg = an.create,
    yg = hr.create,
    E_ = ja.create,
    C_ = gr.create,
    vg = Ro.create,
    b_ = Fr.create,
    T_ = Na.create,
    N_ = jo.create,
    P_ = Ao.create,
    R_ = bs.create,
    j_ = Lr.create,
    A_ = Bn.create,
    O_ = Pa.create,
    L_ = ln.create,
    M_ = Je.create,
    D_ = Je.strictCreate,
    I_ = Oo.create,
    F_ = Ha.create,
    z_ = Lo.create,
    V_ = bn.create,
    U_ = Mo.create,
    $_ = Ra.create,
    B_ = zr.create,
    W_ = ks.create,
    Z_ = Do.create,
    H_ = Io.create,
    K_ = yr.create,
    Q_ = Fo.create,
    Y_ = Ts.create,
    gm = fn.create,
    G_ = kn.create,
    q_ = vr.create,
    X_ = fn.createWithPreprocess,
    J_ = Zo.create,
    ek = () => gg().optional(),
    tk = () => yg().optional(),
    nk = () => vg().optional(),
    rk = {
        string: (n) => an.create({ ...n, coerce: !0 }),
        number: (n) => hr.create({ ...n, coerce: !0 }),
        boolean: (n) => Ro.create({ ...n, coerce: !0 }),
        bigint: (n) => gr.create({ ...n, coerce: !0 }),
        date: (n) => Fr.create({ ...n, coerce: !0 }),
    },
    sk = ke;
var aa = Object.freeze({
        __proto__: null,
        defaultErrorMap: Cs,
        setErrorMap: X1,
        getErrorMap: Ca,
        makeIssue: ba,
        EMPTY_PATH: J1,
        addIssueToContext: ne,
        ParseStatus: kt,
        INVALID: ke,
        DIRTY: xs,
        OK: Nt,
        isAborted: lc,
        isDirty: uc,
        isValid: Ir,
        isAsync: Po,
        get util() {
            return Fe;
        },
        get objectUtil() {
            return ac;
        },
        ZodParsedType: ae,
        getParsedType: Vn,
        ZodType: je,
        datetimeRegex: pg,
        ZodString: an,
        ZodNumber: hr,
        ZodBigInt: gr,
        ZodBoolean: Ro,
        ZodDate: Fr,
        ZodSymbol: Na,
        ZodUndefined: jo,
        ZodNull: Ao,
        ZodAny: bs,
        ZodUnknown: Lr,
        ZodNever: Bn,
        ZodVoid: Pa,
        ZodArray: ln,
        ZodObject: Je,
        ZodUnion: Oo,
        ZodDiscriminatedUnion: Ha,
        ZodIntersection: Lo,
        ZodTuple: bn,
        ZodRecord: Mo,
        ZodMap: Ra,
        ZodSet: zr,
        ZodFunction: ks,
        ZodLazy: Do,
        ZodLiteral: Io,
        ZodEnum: yr,
        ZodNativeEnum: Fo,
        ZodPromise: Ts,
        ZodEffects: fn,
        ZodTransformer: fn,
        ZodOptional: kn,
        ZodNullable: vr,
        ZodDefault: zo,
        ZodCatch: Vo,
        ZodNaN: ja,
        BRAND: __,
        ZodBranded: Lc,
        ZodPipeline: Zo,
        ZodReadonly: Uo,
        custom: hg,
        Schema: je,
        ZodSchema: je,
        late: k_,
        get ZodFirstPartyTypeKind() {
            return we;
        },
        coerce: rk,
        any: R_,
        array: L_,
        bigint: C_,
        boolean: vg,
        date: b_,
        discriminatedUnion: F_,
        effect: gm,
        enum: K_,
        function: W_,
        instanceof: S_,
        intersection: z_,
        lazy: Z_,
        literal: H_,
        map: $_,
        nan: E_,
        nativeEnum: Q_,
        never: A_,
        null: P_,
        nullable: q_,
        number: yg,
        object: M_,
        oboolean: nk,
        onumber: tk,
        optional: G_,
        ostring: ek,
        pipeline: J_,
        preprocess: X_,
        promise: Y_,
        record: U_,
        set: B_,
        strictObject: D_,
        string: gg,
        symbol: T_,
        transformer: gm,
        tuple: V_,
        undefined: N_,
        union: I_,
        unknown: j_,
        void: O_,
        NEVER: sk,
        ZodIssueCode: Z,
        quotelessJson: q1,
        ZodError: Bt,
    }),
    ok = "Label",
    xg = k.forwardRef((n, r) =>
        y.jsx(Pt.label, {
            ...n,
            ref: r,
            onMouseDown: (s) => {
                s.target.closest("button, input, select, textarea") ||
                    (n.onMouseDown?.(s), !s.defaultPrevented && s.detail > 1 && s.preventDefault());
            },
        })
    );
xg.displayName = ok;
var wg = xg;
const ik = xc("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
    _g = k.forwardRef(({ className: n, ...r }, s) => y.jsx(wg, { ref: s, className: Ge(ik(), n), ...r }));
_g.displayName = wg.displayName;
const ak = N1,
    kg = k.createContext({}),
    Gu = ({ ...n }) => y.jsx(kg.Provider, { value: { name: n.name }, children: y.jsx(A1, { ...n }) }),
    Ka = () => {
        const n = k.useContext(kg),
            r = k.useContext(Sg),
            { getFieldState: s, formState: i } = Za(),
            l = s(n.name, i);
        if (!n) throw new Error("useFormField should be used within <FormField>");
        const { id: u } = r;
        return {
            id: u,
            name: n.name,
            formItemId: `${u}-form-item`,
            formDescriptionId: `${u}-form-item-description`,
            formMessageId: `${u}-form-item-message`,
            ...l,
        };
    },
    Sg = k.createContext({}),
    fa = k.forwardRef(({ className: n, ...r }, s) => {
        const i = k.useId();
        return y.jsx(Sg.Provider, {
            value: { id: i },
            children: y.jsx("div", { ref: s, className: Ge("space-y-2", n), ...r }),
        });
    });
fa.displayName = "FormItem";
const pa = k.forwardRef(({ className: n, ...r }, s) => {
    const { error: i, formItemId: l } = Ka();
    return y.jsx(_g, { ref: s, className: Ge(i && "text-destructive", n), htmlFor: l, ...r });
});
pa.displayName = "FormLabel";
const ma = k.forwardRef(({ ...n }, r) => {
    const { error: s, formItemId: i, formDescriptionId: l, formMessageId: u } = Ka();
    return y.jsx(Rm, { ref: r, id: i, "aria-describedby": s ? `${l} ${u}` : `${l}`, "aria-invalid": !!s, ...n });
});
ma.displayName = "FormControl";
const lk = k.forwardRef(({ className: n, ...r }, s) => {
    const { formDescriptionId: i } = Ka();
    return y.jsx("p", { ref: s, id: i, className: Ge("text-sm text-muted-foreground", n), ...r });
});
lk.displayName = "FormDescription";
const ha = k.forwardRef(({ className: n, children: r, ...s }, i) => {
    const { error: l, formMessageId: u } = Ka(),
        f = l ? String(l?.message ?? "") : r;
    return f
        ? y.jsx("p", { ref: i, id: u, className: Ge("text-sm font-medium text-destructive", n), ...s, children: f })
        : null;
});
ha.displayName = "FormMessage";
const dc = k.forwardRef(({ className: n, type: r, ...s }, i) =>
    y.jsx("input", {
        type: r,
        className: Ge(
            "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            n
        ),
        ref: i,
        ...s,
    })
);
dc.displayName = "Input";
const Eg = k.forwardRef(({ className: n, ...r }, s) =>
    y.jsx("textarea", {
        className: Ge(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            n
        ),
        ref: s,
        ...r,
    })
);
Eg.displayName = "Textarea";
const uk = aa.object({
    name: aa.string().min(2, "Nama minimal 2 karakter"),
    email: aa.string().email("Email tidak valid"),
    message: aa.string().min(10, "Pesan minimal 10 karakter"),
});
function ck() {
    const { toast: n } = Nm(),
        r = H1({ resolver: G1(uk), defaultValues: { name: "", email: "", message: "" } });
    function s(i) {
        console.log("Form data:", i),
            n({ title: "Pesan Terkirim", description: "Terima kasih! Kami akan segera menghubungi Anda." }),
            r.reset();
    }
    return y.jsx(ak, {
        ...r,
        children: y.jsxs("form", {
            onSubmit: r.handleSubmit(s),
            className: "space-y-6",
            children: [
                y.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        y.jsx(Gu, {
                            control: r.control,
                            name: "name",
                            render: ({ field: i }) =>
                                y.jsxs(fa, {
                                    children: [
                                        y.jsx(pa, { children: "Nama Lengkap" }),
                                        y.jsx(ma, {
                                            children: y.jsx(dc, {
                                                placeholder: "Masukkan nama anda...",
                                                className: "bg-background border-border focus:ring-primary/20 h-12",
                                                ...i,
                                            }),
                                        }),
                                        y.jsx(ha, {}),
                                    ],
                                }),
                        }),
                        y.jsx(Gu, {
                            control: r.control,
                            name: "email",
                            render: ({ field: i }) =>
                                y.jsxs(fa, {
                                    children: [
                                        y.jsx(pa, { children: "Email" }),
                                        y.jsx(ma, {
                                            children: y.jsx(dc, {
                                                type: "email",
                                                placeholder: "contoh@email.com",
                                                className: "bg-background border-border focus:ring-primary/20 h-12",
                                                ...i,
                                            }),
                                        }),
                                        y.jsx(ha, {}),
                                    ],
                                }),
                        }),
                    ],
                }),
                y.jsx(Gu, {
                    control: r.control,
                    name: "message",
                    render: ({ field: i }) =>
                        y.jsxs(fa, {
                            children: [
                                y.jsx(pa, { children: "Pesan Anda" }),
                                y.jsx(ma, {
                                    children: y.jsx(Eg, {
                                        placeholder: "Ceritakan kebutuhan sparepart atau konsultasi CNC anda...",
                                        className:
                                            "min-h-[150px] bg-background border-border focus:ring-primary/20 resize-none p-4",
                                        ...i,
                                    }),
                                }),
                                y.jsx(ha, {}),
                            ],
                        }),
                }),
                y.jsxs(xn, {
                    type: "submit",
                    className:
                        "w-full md:w-auto px-8 py-6 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all",
                    children: ["Kirim Pesan ", y.jsx(o0, { className: "ml-2 h-5 w-5" })],
                }),
            ],
        }),
    });
}
function dk() {
    return y.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [
            y.jsx(C1, {}),
            y.jsxs("section", {
                className: "relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden",
                children: [
                    y.jsx("div", {
                        className: "absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4",
                    }),
                    y.jsx("div", {
                        className:
                            "absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2",
                    }),
                    y.jsx("div", {
                        className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: y.jsxs("div", {
                            className: "max-w-3xl",
                            children: [
                                y.jsxs("div", {
                                    className:
                                        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700",
                                    children: [
                                        y.jsxs("span", {
                                            className: "relative flex h-2 w-2",
                                            children: [
                                                y.jsx("span", {
                                                    className:
                                                        "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75",
                                                }),
                                                y.jsx("span", {
                                                    className: "relative inline-flex rounded-full h-2 w-2 bg-primary",
                                                }),
                                            ],
                                        }),
                                        "Solusi CNC Terpercaya di Indonesia",
                                    ],
                                }),
                                y.jsxs("h1", {
                                    className:
                                        "text-5xl lg:text-7xl font-bold font-display text-foreground leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100",
                                    children: [
                                        "Pusat Sparepart CNC ",
                                        y.jsx("br", {}),
                                        y.jsx("span", {
                                            className:
                                                "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent",
                                            children: "Berkualitas & Terpercaya",
                                        }),
                                    ],
                                }),
                                y.jsx("p", {
                                    className:
                                        "text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200",
                                    children:
                                        "Kami menyediakan solusi lengkap untuk kebutuhan mesin CNC Anda. Mulai dari sparepart berkualitas, konsultasi teknis, hingga perbaikan dan pengadaan mesin.",
                                }),
                                y.jsxs("div", {
                                    className:
                                        "flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300",
                                    children: [
                                        y.jsx("a", {
                                            href: "https://store.haebot.com/katalog",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: y.jsxs(xn, {
                                                size: "lg",
                                                className:
                                                    "w-full sm:w-auto text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1",
                                                children: ["Lihat Katalog ", y.jsx(a0, { className: "ml-2 h-5 w-5" })],
                                            }),
                                        }),
                                        y.jsx("a", {
                                            href: "#contact",
                                            children: y.jsx(xn, {
                                                variant: "outline",
                                                size: "lg",
                                                className:
                                                    "w-full sm:w-auto text-lg h-14 px-8 border-2 hover:bg-muted transition-all",
                                                children: "Konsultasi Gratis",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            y.jsx("section", {
                id: "about",
                className: "py-24 bg-white relative",
                children: y.jsxs("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        y.jsxs("div", {
                            className: "text-center max-w-2xl mx-auto mb-16",
                            children: [
                                y.jsx("h2", {
                                    className: "text-3xl lg:text-4xl font-bold font-display mb-4",
                                    children: "Layanan Unggulan Kami",
                                }),
                                y.jsx("p", {
                                    className: "text-muted-foreground text-lg",
                                    children:
                                        "Kami tidak hanya menjual sparepart, tetapi memberikan solusi komprehensif untuk mendukung produktivitas bisnis Anda.",
                                }),
                            ],
                        }),
                        y.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: [
                                y.jsx(oa, {
                                    icon: y.jsx(i0, { className: "w-8 h-8" }),
                                    title: "Sparepart CNC",
                                    description:
                                        "Penyedia komponen CNC terlengkap dan original dengan kualitas terjamin untuk berbagai jenis mesin.",
                                }),
                                y.jsx(oa, {
                                    icon: y.jsx(r0, { className: "w-8 h-8" }),
                                    title: "Konsultasi Ahli",
                                    description:
                                        "Diskusi teknis dengan tim berpengalaman untuk menemukan solusi terbaik bagi kebutuhan mesin Anda.",
                                }),
                                y.jsx(oa, {
                                    icon: y.jsx(l0, { className: "w-8 h-8" }),
                                    title: "Perbaikan & Optimasi",
                                    description:
                                        "Layanan servis dan upgrade performa mesin CNC untuk mengembalikan kinerja maksimal.",
                                }),
                                y.jsx(oa, {
                                    icon: y.jsx(e0, { className: "w-8 h-8" }),
                                    title: "Pengadaan Mesin",
                                    description:
                                        "Jasa pengadaan mesin CNC custom sesuai spesifikasi dan kebutuhan produksi Anda.",
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            y.jsx("section", {
                className: "py-24 bg-muted/30 border-y border-border/50",
                children: y.jsxs("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        y.jsxs("div", {
                            className: "flex flex-col md:flex-row justify-between items-end mb-12 gap-6",
                            children: [
                                y.jsxs("div", {
                                    className: "max-w-2xl",
                                    children: [
                                        y.jsx("h2", {
                                            className: "text-3xl lg:text-4xl font-bold font-display mb-4",
                                            children: "Kategori Produk & Jasa",
                                        }),
                                        y.jsx("p", {
                                            className: "text-muted-foreground text-lg",
                                            children:
                                                "Temukan berbagai solusi kebutuhan Bisnis anda",
                                        }),
                                    ],
                                }),
                                y.jsx("a", {
                                    href: "https://store.haebot.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: y.jsxs(xn, {
                                        variant: "ghost",
                                        className: "text-primary hover:text-primary/80 group",
                                        children: [
                                            "Lihat Semua Produk ",
                                            y.jsx(oh, {
                                                className:
                                                    "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        y.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: [
                                y.jsx(ia, {
                                    title: "Spareparts CNC & Otomasi",
                                    description: "Bearings, Rails, Mekanik, Kontrol",
                                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
                                    link: "https://store.haebot.com",
                                }),
                                y.jsx(ia, {
                                    title: "Machine CNC",
                                    description: "Mesin CNC, Dukungan Ahli, Garansi, dan After Sales",
                                    image: "https://bodo.nerpai.app/storage/uploads/items/2031/1tDkMLBVSjSMIaE5NmYrIUGGXJlkP4HSFP9GGZyo.jpg",
                                    link: "https://store.haebot.com",
                                }),
                                y.jsx(ia, {
                                    title: "ERP & AI Integrasi",
                                    description: "Integrasi ERP dan AI di bisnis anda, custom, maupun siap pakai berbasis cloud",
                                    image: "https://www.nerpai.app/images/hero-mockup.webp",
                                    link: "https://nerpai.app",
                                }),
                                y.jsx(ia, {
                                    title: "E-Commerce & CRM",
                                    description: "Integrasi Bisnis Online dan Offline dan kontrol pelanggan dalam platform",
                                    image: "https://i0.wp.com/gits.id/wp-content/uploads/2021/02/Contoh-Aplikasi-E-commerce-dan-Website.jpg?fit=547%2C547&ssl=1",
                                    link: "https://store.haebot.com",
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            y.jsxs("section", {
                className: "py-20 bg-primary text-primary-foreground relative overflow-hidden",
                children: [
                    y.jsx("div", {
                        className:
                            "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10",
                    }),
                    y.jsx("div", {
                        className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: y.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center",
                            children: [
                                y.jsxs("div", {
                                    className: "p-6",
                                    children: [
                                        y.jsx("div", {
                                            className: "mb-4 inline-flex p-4 bg-white/10 rounded-full text-white",
                                            children: y.jsx(Xx, { className: "w-8 h-8" }),
                                        }),
                                        y.jsx("h3", {
                                            className: "text-2xl font-bold mb-2",
                                            children: "100% Original",
                                        }),
                                        y.jsx("p", {
                                            className: "text-primary-foreground/80",
                                            children: "Semua sparepart terjamin keaslian dan kualitasnya.",
                                        }),
                                    ],
                                }),
                                y.jsxs("div", {
                                    className: "p-6",
                                    children: [
                                        y.jsx("div", {
                                            className: "mb-4 inline-flex p-4 bg-white/10 rounded-full text-white",
                                            children: y.jsx(u0, { className: "w-8 h-8" }),
                                        }),
                                        y.jsx("h3", {
                                            className: "text-2xl font-bold mb-2",
                                            children: "Pengiriman Cepat",
                                        }),
                                        y.jsx("p", {
                                            className: "text-primary-foreground/80",
                                            children: "Proses pesanan cepat dan pengiriman aman ke seluruh Indonesia.",
                                        }),
                                    ],
                                }),
                                y.jsxs("div", {
                                    className: "p-6",
                                    children: [
                                        y.jsx("div", {
                                            className: "mb-4 inline-flex p-4 bg-white/10 rounded-full text-white",
                                            children: y.jsx(Jx, { className: "w-8 h-8" }),
                                        }),
                                        y.jsx("h3", {
                                            className: "text-2xl font-bold mb-2",
                                            children: "Technical Support",
                                        }),
                                        y.jsx("p", {
                                            className: "text-primary-foreground/80",
                                            children: "Dukungan teknis penuh untuk pemasangan dan troubleshooting.",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            y.jsx("section", {
                id: "projects",
                className: "py-24 bg-background relative overflow-hidden",
                children: y.jsx("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                    children: y.jsxs("div", {
                        className: "glass-card p-12 rounded-3xl border border-border/50 max-w-5xl mx-auto text-center",
                        children: [
                            y.jsx("h2", {
                                className: "text-3xl lg:text-5xl font-bold font-display mb-8",
                                children: "Haebot Project Platform",
                            }),
                            y.jsx("p", {
                                className: "text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed",
                                children:
                                    "Platform yang menghubungkan pemilik ide proyek robot, IoT, dan otomasi dengan eksekutor berbakat. Temukan proyek yang sesuai skill kamu dan mulai berkarya!",
                            }),
                            y.jsxs("div", {
                                className: "flex flex-col sm:flex-row gap-6 justify-center",
                                children: [
                                    y.jsx("a", {
                                        href: "https://project.haebot.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: y.jsx(xn, {
                                            size: "lg",
                                            className:
                                                "w-full sm:w-auto text-lg h-14 px-10 shadow-xl transition-all hover:-translate-y-1",
                                            children: "Lihat Proyek Tersedia",
                                        }),
                                    }),
                                    y.jsx("a", {
                                        href: "https://project.haebot.com/teknisi",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: y.jsx(xn, {
                                            variant: "outline",
                                            size: "lg",
                                            className:
                                                "w-full sm:w-auto text-lg h-14 px-10 border-2 hover:bg-muted transition-all",
                                            children: "Cari Teknisi",
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            y.jsx("section", {
                id: "contact",
                className: "py-24 bg-background relative",
                children: y.jsx("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8",
                    children: y.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
                        children: [
                            y.jsx("div", {
                                children: y.jsxs("div", {
                                    className: "sticky top-24",
                                    children: [
                                        y.jsx("h2", {
                                            className: "text-3xl lg:text-4xl font-bold font-display mb-6",
                                            children: "Hubungi Kami",
                                        }),
                                        y.jsx("p", {
                                            className: "text-muted-foreground text-lg mb-8",
                                            children:
                                                "Punya pertanyaan tentang spesifikasi produk atau butuh konsultasi untuk mesin CNC Anda? Tim kami siap membantu.",
                                        }),
                                        y.jsxs("div", {
                                            className: "space-y-6",
                                            children: [
                                                y.jsxs("div", {
                                                    className:
                                                        "flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm",
                                                    children: [
                                                        y.jsx(t0, { className: "w-6 h-6 text-primary shrink-0 mt-1" }),
                                                        y.jsxs("div", {
                                                            children: [
                                                                y.jsx("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Alamat Workshop",
                                                                }),
                                                                y.jsxs("p", {
                                                                    className: "text-muted-foreground",
                                                                    children: [
                                                                        "Jl. Kolonel Sugiono No.22, Gedog,",
                                                                        y.jsx("br", {}),
                                                                        "Kec. Sananwetan, Kota Blitar,",
                                                                        y.jsx("br", {}),
                                                                        "Jawa Timur 66137",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                y.jsxs("div", {
                                                    className:
                                                        "flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm",
                                                    children: [
                                                        y.jsx(s0, { className: "w-6 h-6 text-primary shrink-0 mt-1" }),
                                                        y.jsxs("div", {
                                                            children: [
                                                                y.jsx("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Telepon / WhatsApp",
                                                                }),
                                                                y.jsx("p", {
                                                                    className: "text-muted-foreground font-mono mb-4",
                                                                    children: "+62 852-4642-8746",
                                                                }),
                                                                y.jsx("a", {
                                                                    href: "https://wa.me/6285246428746",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: y.jsx(xn, {
                                                                        size: "sm",
                                                                        className:
                                                                            "bg-[#25D366] hover:bg-[#128C7E] text-white border-0",
                                                                        children: "Chat di WhatsApp",
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            y.jsxs("div", {
                                className: "bg-card p-8 rounded-3xl border border-border shadow-xl",
                                children: [
                                    y.jsx("h3", {
                                        className: "text-2xl font-bold font-display mb-6",
                                        children: "Kirim Pesan",
                                    }),
                                    y.jsx(ck, {}),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            y.jsx("footer", {
                className: "bg-secondary text-secondary-foreground py-12 border-t border-white/10",
                children: y.jsxs("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        y.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",
                            children: [
                                y.jsxs("div", {
                                    className: "col-span-1 md:col-span-2",
                                    children: [
                                        y.jsxs("div", {
                                            className: "flex items-center space-x-2 mb-4",
                                            children: [
                                                y.jsx("div", {
                                                    className: "p-1 bg-white rounded-lg overflow-hidden",
                                                    children: y.jsx("img", {
                                                        src: "/logo.webp",
                                                        alt: "Haebot Teknologi",
                                                        className: "w-8 h-8 object-contain",
                                                    }),
                                                }),
                                                y.jsxs("span", {
                                                    className:
                                                        "font-display font-bold text-xl tracking-tight text-white",
                                                    children: [
                                                        "Haebot Teknologi",
                                                        y.jsx("span", { className: "text-primary", children: "." }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        y.jsx("p", {
                                            className: "text-secondary-foreground/70 max-w-sm",
                                            children:
                                                "Mitra terpercaya untuk kebutuhan industri CNC Anda. Menyediakan sparepart berkualitas dan layanan profesional sejak 2020.",
                                        }),
                                    ],
                                }),
                                y.jsxs("div", {
                                    children: [
                                        y.jsx("h4", {
                                            className: "font-bold mb-4 text-white",
                                            children: "Tautan Cepat",
                                        }),
                                        y.jsxs("ul", {
                                            className: "space-y-2 text-secondary-foreground/70",
                                            children: [
                                                y.jsx("li", {
                                                    children: y.jsx("a", {
                                                        href: "#",
                                                        className: "hover:text-primary transition-colors",
                                                        children: "Beranda",
                                                    }),
                                                }),
                                                y.jsx("li", {
                                                    children: y.jsx("a", {
                                                        href: "#about",
                                                        className: "hover:text-primary transition-colors",
                                                        children: "Tentang Kami",
                                                    }),
                                                }),
                                                y.jsx("li", {
                                                    children: y.jsx("a", {
                                                        href: "https://store.haebot.com",
                                                        className: "hover:text-primary transition-colors",
                                                        children: "Katalog",
                                                    }),
                                                }),
                                                y.jsx("li", {
                                                    children: y.jsx("a", {
                                                        href: "https://project.haebot.com",
                                                        className: "hover:text-primary transition-colors",
                                                        children: "Project",
                                                    }),
                                                }),
                                                y.jsx("li", {
                                                    children: y.jsx("a", {
                                                        href: "https://nerpai.app",
                                                        className: "hover:text-primary transition-colors",
                                                        children: "Network ERP & AI",
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                y.jsxs("div", {
                                    children: [
                                        y.jsx("h4", { className: "font-bold mb-4 text-white", children: "Legal" }),
                                        y.jsxs("ul", {
                                            className: "space-y-2 text-secondary-foreground/70",
                                            children: [
                                                y.jsx("li", {
                                                    children: y.jsx("a", {
                                                        href: "#",
                                                        className: "hover:text-primary transition-colors",
                                                        children: "Kebijakan Privasi",
                                                    }),
                                                }),
                                                y.jsx("li", {
                                                    children: y.jsx("a", {
                                                        href: "#",
                                                        className: "hover:text-primary transition-colors",
                                                        children: "Syarat & Ketentuan",
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        y.jsxs("div", {
                            className: "pt-8 border-t border-white/10 text-center text-secondary-foreground/50 text-sm",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Haebot Teknologi Indonesia. All rights reserved.",
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
function fk() {
    return y.jsxs(Xv, { children: [y.jsx(Mp, { path: "/", component: dk }), y.jsx(Mp, { component: S1 })] });
}
function pk() {
    return y.jsxs(y1, { children: [y.jsx(fk, {}), y.jsx(Z0, {})] });
}
Tv.createRoot(document.getElementById("root")).render(y.jsx(pk, {}));
