/*!  v0.0.0 | (c) 2015 tjohnson4.github.io | build date : 2015-01-28 */

window.WebComponents = window.WebComponents || {}, function(e) {
    var t = e.flags || {}, n = "webcomponents.js", r = document.querySelector('script[src*="' + n + '"]');
    if (!t.noOpts) {
        if (location.search.slice(1).split("&").forEach(function(e) {
            e = e.split("="), e[0] && (t[e[0]] = e[1] || !0);
        }), r) for (var o, i = 0; o = r.attributes[i]; i++) "src" !== o.name && (t[o.name] = o.value || !0);
        if (t.log) {
            var a = t.log.split(",");
            t.log = {}, a.forEach(function(e) {
                t.log[e] = !0;
            });
        } else t.log = {};
    }
    t.shadow = t.shadow || t.shadowdom || t.polyfill, t.shadow = "native" === t.shadow ? !1 : t.shadow || !HTMLElement.prototype.createShadowRoot, 
    t.register && (window.CustomElements = window.CustomElements || {
        flags: {}
    }, window.CustomElements.flags.register = t.register), e.flags = t;
}(WebComponents), WebComponents.flags.shadow && ("undefined" == typeof WeakMap && !function() {
    var e = Object.defineProperty, t = Date.now() % 1e9, n = function() {
        this.name = "__st" + (1e9 * Math.random() >>> 0) + (t++ + "__");
    };
    n.prototype = {
        set: function(t, n) {
            var r = t[this.name];
            return r && r[0] === t ? r[1] = n : e(t, this.name, {
                value: [ t, n ],
                writable: !0
            }), this;
        },
        get: function(e) {
            var t;
            return (t = e[this.name]) && t[0] === e ? t[1] : void 0;
        },
        "delete": function(e) {
            var t = e[this.name];
            return t && t[0] === e ? (t[0] = t[1] = void 0, !0) : !1;
        },
        has: function(e) {
            var t = e[this.name];
            return t ? t[0] === e : !1;
        }
    }, window.WeakMap = n;
}(), window.ShadowDOMPolyfill = {}, function(e) {
    "use strict";
    function t() {
        if ("undefined" != typeof chrome && chrome.app && chrome.app.runtime) return !1;
        if (navigator.getDeviceStorage) return !1;
        try {
            var e = new Function("return true;");
            return e();
        } catch (t) {
            return !1;
        }
    }
    function n(e) {
        if (!e) throw new Error("Assertion failed");
    }
    function r(e, t) {
        for (var n = W(t), r = 0; r < n.length; r++) {
            var o = n[r];
            k(e, o, F(t, o));
        }
        return e;
    }
    function o(e, t) {
        for (var n = W(t), r = 0; r < n.length; r++) {
            var o = n[r];
            switch (o) {
              case "arguments":
              case "caller":
              case "length":
              case "name":
              case "prototype":
              case "toString":
                continue;
            }
            k(e, o, F(t, o));
        }
        return e;
    }
    function i(e, t) {
        for (var n = 0; n < t.length; n++) if (t[n] in e) return t[n];
    }
    function a(e, t, n) {
        B.value = n, k(e, t, B);
    }
    function s(e) {
        var t = e.__proto__ || Object.getPrototypeOf(e), n = R.get(t);
        if (n) return n;
        var r = s(t), o = E(r);
        return g(t, o, e), o;
    }
    function c(e, t) {
        w(e, t, !0);
    }
    function l(e, t) {
        w(t, e, !1);
    }
    function u(e) {
        return /^on[a-z]+$/.test(e);
    }
    function d(e) {
        return /^\w[a-zA-Z_0-9]*$/.test(e);
    }
    function p(e) {
        return A && d(e) ? new Function("return this.__impl4cf1e782hg__." + e) : function() {
            return this.__impl4cf1e782hg__[e];
        };
    }
    function f(e) {
        return A && d(e) ? new Function("v", "this.__impl4cf1e782hg__." + e + " = v") : function(t) {
            this.__impl4cf1e782hg__[e] = t;
        };
    }
    function h(e) {
        return A && d(e) ? new Function("return this.__impl4cf1e782hg__." + e + ".apply(this.__impl4cf1e782hg__, arguments)") : function() {
            return this.__impl4cf1e782hg__[e].apply(this.__impl4cf1e782hg__, arguments);
        };
    }
    function m(e, t) {
        try {
            return Object.getOwnPropertyDescriptor(e, t);
        } catch (n) {
            return q;
        }
    }
    function w(t, n, r) {
        for (var o = W(t), i = 0; i < o.length; i++) {
            var a = o[i];
            if ("polymerBlackList_" !== a && !(a in n || t.polymerBlackList_ && t.polymerBlackList_[a])) {
                U && t.__lookupGetter__(a);
                var s, c, l = m(t, a);
                if (r && "function" == typeof l.value) n[a] = h(a); else {
                    var d = u(a);
                    s = d ? e.getEventHandlerGetter(a) : p(a), (l.writable || l.set || V) && (c = d ? e.getEventHandlerSetter(a) : f(a)), 
                    k(n, a, {
                        get: s,
                        set: c,
                        configurable: l.configurable,
                        enumerable: l.enumerable
                    });
                }
            }
        }
    }
    function v(e, t, n) {
        var r = e.prototype;
        g(r, t, n), o(t, e);
    }
    function g(e, t, r) {
        var o = t.prototype;
        n(void 0 === R.get(e)), R.set(e, t), P.set(o, e), c(e, o), r && l(o, r), a(o, "constructor", t), 
        t.prototype = o;
    }
    function b(e, t) {
        return R.get(t.prototype) === e;
    }
    function y(e) {
        var t = Object.getPrototypeOf(e), n = s(t), r = E(n);
        return g(t, r, e), r;
    }
    function E(e) {
        function t(t) {
            e.call(this, t);
        }
        var n = Object.create(e.prototype);
        return n.constructor = t, t.prototype = n, t;
    }
    function S(e) {
        return e && e.__impl4cf1e782hg__;
    }
    function T(e) {
        return !S(e);
    }
    function M(e) {
        return null === e ? null : (n(T(e)), e.__wrapper8e3dd93a60__ || (e.__wrapper8e3dd93a60__ = new (s(e))(e)));
    }
    function L(e) {
        return null === e ? null : (n(S(e)), e.__impl4cf1e782hg__);
    }
    function O(e) {
        return e.__impl4cf1e782hg__;
    }
    function _(e, t) {
        t.__impl4cf1e782hg__ = e, e.__wrapper8e3dd93a60__ = t;
    }
    function N(e) {
        return e && S(e) ? L(e) : e;
    }
    function C(e) {
        return e && !S(e) ? M(e) : e;
    }
    function D(e, t) {
        null !== t && (n(T(e)), n(void 0 === t || S(t)), e.__wrapper8e3dd93a60__ = t);
    }
    function j(e, t, n) {
        G.get = n, k(e.prototype, t, G);
    }
    function H(e, t) {
        j(e, t, function() {
            return M(this.__impl4cf1e782hg__[t]);
        });
    }
    function x(e, t) {
        e.forEach(function(e) {
            t.forEach(function(t) {
                e.prototype[t] = function() {
                    var e = C(this);
                    return e[t].apply(e, arguments);
                };
            });
        });
    }
    var R = new WeakMap(), P = new WeakMap(), I = Object.create(null), A = t(), k = Object.defineProperty, W = Object.getOwnPropertyNames, F = Object.getOwnPropertyDescriptor, B = {
        value: void 0,
        configurable: !0,
        enumerable: !1,
        writable: !0
    };
    W(window);
    var U = /Firefox/.test(navigator.userAgent), q = {
        get: function() {},
        set: function() {},
        configurable: !0,
        enumerable: !0
    }, V = function() {
        var e = Object.getOwnPropertyDescriptor(Node.prototype, "nodeType");
        return e && !e.get && !e.set;
    }(), G = {
        get: void 0,
        configurable: !0,
        enumerable: !0
    };
    e.assert = n, e.constructorTable = R, e.defineGetter = j, e.defineWrapGetter = H, 
    e.forwardMethodsToWrapper = x, e.isWrapper = S, e.isWrapperFor = b, e.mixin = r, 
    e.nativePrototypeTable = P, e.oneOf = i, e.registerObject = y, e.registerWrapper = v, 
    e.rewrap = D, e.setWrapper = _, e.unsafeUnwrap = O, e.unwrap = L, e.unwrapIfNeeded = N, 
    e.wrap = M, e.wrapIfNeeded = C, e.wrappers = I;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e, t, n) {
        return {
            index: e,
            removed: t,
            addedCount: n
        };
    }
    function n() {}
    var r = 0, o = 1, i = 2, a = 3;
    n.prototype = {
        calcEditDistances: function(e, t, n, r, o, i) {
            for (var a = i - o + 1, s = n - t + 1, c = new Array(a), l = 0; a > l; l++) c[l] = new Array(s), 
            c[l][0] = l;
            for (var u = 0; s > u; u++) c[0][u] = u;
            for (var l = 1; a > l; l++) for (var u = 1; s > u; u++) if (this.equals(e[t + u - 1], r[o + l - 1])) c[l][u] = c[l - 1][u - 1]; else {
                var d = c[l - 1][u] + 1, p = c[l][u - 1] + 1;
                c[l][u] = p > d ? d : p;
            }
            return c;
        },
        spliceOperationsFromEditDistances: function(e) {
            for (var t = e.length - 1, n = e[0].length - 1, s = e[t][n], c = []; t > 0 || n > 0; ) if (0 != t) if (0 != n) {
                var l, u = e[t - 1][n - 1], d = e[t - 1][n], p = e[t][n - 1];
                l = p > d ? u > d ? d : u : u > p ? p : u, l == u ? (u == s ? c.push(r) : (c.push(o), 
                s = u), t--, n--) : l == d ? (c.push(a), t--, s = d) : (c.push(i), n--, s = p);
            } else c.push(a), t--; else c.push(i), n--;
            return c.reverse(), c;
        },
        calcSplices: function(e, n, s, c, l, u) {
            var d = 0, p = 0, f = Math.min(s - n, u - l);
            if (0 == n && 0 == l && (d = this.sharedPrefix(e, c, f)), s == e.length && u == c.length && (p = this.sharedSuffix(e, c, f - d)), 
            n += d, l += d, s -= p, u -= p, s - n == 0 && u - l == 0) return [];
            if (n == s) {
                for (var h = t(n, [], 0); u > l; ) h.removed.push(c[l++]);
                return [ h ];
            }
            if (l == u) return [ t(n, [], s - n) ];
            for (var m = this.spliceOperationsFromEditDistances(this.calcEditDistances(e, n, s, c, l, u)), h = void 0, w = [], v = n, g = l, b = 0; b < m.length; b++) switch (m[b]) {
              case r:
                h && (w.push(h), h = void 0), v++, g++;
                break;

              case o:
                h || (h = t(v, [], 0)), h.addedCount++, v++, h.removed.push(c[g]), g++;
                break;

              case i:
                h || (h = t(v, [], 0)), h.addedCount++, v++;
                break;

              case a:
                h || (h = t(v, [], 0)), h.removed.push(c[g]), g++;
            }
            return h && w.push(h), w;
        },
        sharedPrefix: function(e, t, n) {
            for (var r = 0; n > r; r++) if (!this.equals(e[r], t[r])) return r;
            return n;
        },
        sharedSuffix: function(e, t, n) {
            for (var r = e.length, o = t.length, i = 0; n > i && this.equals(e[--r], t[--o]); ) i++;
            return i;
        },
        calculateSplices: function(e, t) {
            return this.calcSplices(e, 0, e.length, t, 0, t.length);
        },
        equals: function(e, t) {
            return e === t;
        }
    }, e.ArraySplice = n;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t() {
        a = !1;
        var e = i.slice(0);
        i = [];
        for (var t = 0; t < e.length; t++) e[t]();
    }
    function n(e) {
        i.push(e), a || (a = !0, r(t, 0));
    }
    var r, o = window.MutationObserver, i = [], a = !1;
    if (o) {
        var s = 1, c = new o(t), l = document.createTextNode(s);
        c.observe(l, {
            characterData: !0
        }), r = function() {
            s = (s + 1) % 2, l.data = s;
        };
    } else r = window.setTimeout;
    e.setEndOfMicrotask = n;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        e.scheduled_ || (e.scheduled_ = !0, h.push(e), m || (u(n), m = !0));
    }
    function n() {
        for (m = !1; h.length; ) {
            var e = h;
            h = [], e.sort(function(e, t) {
                return e.uid_ - t.uid_;
            });
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n.scheduled_ = !1;
                var r = n.takeRecords();
                i(n), r.length && n.callback_(r, n);
            }
        }
    }
    function r(e, t) {
        this.type = e, this.target = t, this.addedNodes = new p.NodeList(), this.removedNodes = new p.NodeList(), 
        this.previousSibling = null, this.nextSibling = null, this.attributeName = null, 
        this.attributeNamespace = null, this.oldValue = null;
    }
    function o(e, t) {
        for (;e; e = e.parentNode) {
            var n = f.get(e);
            if (n) for (var r = 0; r < n.length; r++) {
                var o = n[r];
                o.options.subtree && o.addTransientObserver(t);
            }
        }
    }
    function i(e) {
        for (var t = 0; t < e.nodes_.length; t++) {
            var n = e.nodes_[t], r = f.get(n);
            if (!r) return;
            for (var o = 0; o < r.length; o++) {
                var i = r[o];
                i.observer === e && i.removeTransientObservers();
            }
        }
    }
    function a(e, n, o) {
        for (var i = Object.create(null), a = Object.create(null), s = e; s; s = s.parentNode) {
            var c = f.get(s);
            if (c) for (var l = 0; l < c.length; l++) {
                var u = c[l], d = u.options;
                if ((s === e || d.subtree) && !("attributes" === n && !d.attributes || "attributes" === n && d.attributeFilter && (null !== o.namespace || -1 === d.attributeFilter.indexOf(o.name)) || "characterData" === n && !d.characterData || "childList" === n && !d.childList)) {
                    var p = u.observer;
                    i[p.uid_] = p, ("attributes" === n && d.attributeOldValue || "characterData" === n && d.characterDataOldValue) && (a[p.uid_] = o.oldValue);
                }
            }
        }
        for (var h in i) {
            var p = i[h], m = new r(n, e);
            "name" in o && "namespace" in o && (m.attributeName = o.name, m.attributeNamespace = o.namespace), 
            o.addedNodes && (m.addedNodes = o.addedNodes), o.removedNodes && (m.removedNodes = o.removedNodes), 
            o.previousSibling && (m.previousSibling = o.previousSibling), o.nextSibling && (m.nextSibling = o.nextSibling), 
            void 0 !== a[h] && (m.oldValue = a[h]), t(p), p.records_.push(m);
        }
    }
    function s(e) {
        if (this.childList = !!e.childList, this.subtree = !!e.subtree, this.attributes = "attributes" in e || !("attributeOldValue" in e || "attributeFilter" in e) ? !!e.attributes : !0, 
        this.characterData = "characterDataOldValue" in e && !("characterData" in e) ? !0 : !!e.characterData, 
        !this.attributes && (e.attributeOldValue || "attributeFilter" in e) || !this.characterData && e.characterDataOldValue) throw new TypeError();
        if (this.characterData = !!e.characterData, this.attributeOldValue = !!e.attributeOldValue, 
        this.characterDataOldValue = !!e.characterDataOldValue, "attributeFilter" in e) {
            if (null == e.attributeFilter || "object" != typeof e.attributeFilter) throw new TypeError();
            this.attributeFilter = w.call(e.attributeFilter);
        } else this.attributeFilter = null;
    }
    function c(e) {
        this.callback_ = e, this.nodes_ = [], this.records_ = [], this.uid_ = ++v, this.scheduled_ = !1;
    }
    function l(e, t, n) {
        this.observer = e, this.target = t, this.options = n, this.transientObservedNodes = [];
    }
    var u = e.setEndOfMicrotask, d = e.wrapIfNeeded, p = e.wrappers, f = new WeakMap(), h = [], m = !1, w = Array.prototype.slice, v = 0;
    c.prototype = {
        constructor: c,
        observe: function(e, t) {
            e = d(e);
            var n, r = new s(t), o = f.get(e);
            o || f.set(e, o = []);
            for (var i = 0; i < o.length; i++) o[i].observer === this && (n = o[i], n.removeTransientObservers(), 
            n.options = r);
            n || (n = new l(this, e, r), o.push(n), this.nodes_.push(e));
        },
        disconnect: function() {
            this.nodes_.forEach(function(e) {
                for (var t = f.get(e), n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (r.observer === this) {
                        t.splice(n, 1);
                        break;
                    }
                }
            }, this), this.records_ = [];
        },
        takeRecords: function() {
            var e = this.records_;
            return this.records_ = [], e;
        }
    }, l.prototype = {
        addTransientObserver: function(e) {
            if (e !== this.target) {
                t(this.observer), this.transientObservedNodes.push(e);
                var n = f.get(e);
                n || f.set(e, n = []), n.push(this);
            }
        },
        removeTransientObservers: function() {
            var e = this.transientObservedNodes;
            this.transientObservedNodes = [];
            for (var t = 0; t < e.length; t++) for (var n = e[t], r = f.get(n), o = 0; o < r.length; o++) if (r[o] === this) {
                r.splice(o, 1);
                break;
            }
        }
    }, e.enqueueMutation = a, e.registerTransientObservers = o, e.wrappers.MutationObserver = c, 
    e.wrappers.MutationRecord = r;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e, t) {
        this.root = e, this.parent = t;
    }
    function n(e, t) {
        if (e.treeScope_ !== t) {
            e.treeScope_ = t;
            for (var r = e.shadowRoot; r; r = r.olderShadowRoot) r.treeScope_.parent = t;
            for (var o = e.firstChild; o; o = o.nextSibling) n(o, t);
        }
    }
    function r(n) {
        if (n instanceof e.wrappers.Window, n.treeScope_) return n.treeScope_;
        var o, i = n.parentNode;
        return o = i ? r(i) : new t(n, null), n.treeScope_ = o;
    }
    t.prototype = {
        get renderer() {
            return this.root instanceof e.wrappers.ShadowRoot ? e.getRendererForHost(this.root.host) : null;
        },
        contains: function(e) {
            for (;e; e = e.parent) if (e === this) return !0;
            return !1;
        }
    }, e.TreeScope = t, e.getTreeScope = r, e.setTreeScope = n;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        return e instanceof G.ShadowRoot;
    }
    function n(e) {
        return k(e).root;
    }
    function r(e, r) {
        var s = [], c = e;
        for (s.push(c); c; ) {
            var l = a(c);
            if (l && l.length > 0) {
                for (var u = 0; u < l.length; u++) {
                    var p = l[u];
                    if (i(p)) {
                        var f = n(p), h = f.olderShadowRoot;
                        h && s.push(h);
                    }
                    s.push(p);
                }
                c = l[l.length - 1];
            } else if (t(c)) {
                if (d(e, c) && o(r)) break;
                c = c.host, s.push(c);
            } else c = c.parentNode, c && s.push(c);
        }
        return s;
    }
    function o(e) {
        if (!e) return !1;
        switch (e.type) {
          case "abort":
          case "error":
          case "select":
          case "change":
          case "load":
          case "reset":
          case "resize":
          case "scroll":
          case "selectstart":
            return !0;
        }
        return !1;
    }
    function i(e) {
        return e instanceof HTMLShadowElement;
    }
    function a(t) {
        return e.getDestinationInsertionPoints(t);
    }
    function s(e, t) {
        if (0 === e.length) return t;
        t instanceof G.Window && (t = t.document);
        for (var n = k(t), r = e[0], o = k(r), i = l(n, o), a = 0; a < e.length; a++) {
            var s = e[a];
            if (k(s) === i) return s;
        }
        return e[e.length - 1];
    }
    function c(e) {
        for (var t = []; e; e = e.parent) t.push(e);
        return t;
    }
    function l(e, t) {
        for (var n = c(e), r = c(t), o = null; n.length > 0 && r.length > 0; ) {
            var i = n.pop(), a = r.pop();
            if (i !== a) break;
            o = i;
        }
        return o;
    }
    function u(e, t, n) {
        t instanceof G.Window && (t = t.document);
        var o, i = k(t), a = k(n), s = r(n, e), o = l(i, a);
        o || (o = a.root);
        for (var c = o; c; c = c.parent) for (var u = 0; u < s.length; u++) {
            var d = s[u];
            if (k(d) === c) return d;
        }
        return null;
    }
    function d(e, t) {
        return k(e) === k(t);
    }
    function p(e) {
        if (!K.get(e) && (K.set(e, !0), h(V(e), V(e.target)), I)) {
            var t = I;
            throw I = null, t;
        }
    }
    function f(e) {
        switch (e.type) {
          case "load":
          case "beforeunload":
          case "unload":
            return !0;
        }
        return !1;
    }
    function h(t, n) {
        if (Y.get(t)) throw new Error("InvalidStateError");
        Y.set(t, !0), e.renderAllPending();
        var o, i, a;
        if (f(t) && !t.bubbles) {
            var s = n;
            s instanceof G.Document && (a = s.defaultView) && (i = s, o = []);
        }
        if (!o) if (n instanceof G.Window) a = n, o = []; else if (o = r(n, t), !f(t)) {
            var s = o[o.length - 1];
            s instanceof G.Document && (a = s.defaultView);
        }
        return nt.set(t, o), m(t, o, a, i) && w(t, o, a, i) && v(t, o, a, i), Z.set(t, rt), 
        $["delete"](t, null), Y["delete"](t), t.defaultPrevented;
    }
    function m(e, t, n, r) {
        var o = ot;
        if (n && !g(n, e, o, t, r)) return !1;
        for (var i = t.length - 1; i > 0; i--) if (!g(t[i], e, o, t, r)) return !1;
        return !0;
    }
    function w(e, t, n, r) {
        var o = it, i = t[0] || n;
        return g(i, e, o, t, r);
    }
    function v(e, t, n, r) {
        for (var o = at, i = 1; i < t.length; i++) if (!g(t[i], e, o, t, r)) return;
        n && t.length > 0 && g(n, e, o, t, r);
    }
    function g(e, t, n, r, o) {
        var i = z.get(e);
        if (!i) return !0;
        var a = o || s(r, e);
        if (a === e) {
            if (n === ot) return !0;
            n === at && (n = it);
        } else if (n === at && !t.bubbles) return !0;
        if ("relatedTarget" in t) {
            var c = q(t), l = c.relatedTarget;
            if (l) {
                if (l instanceof Object && l.addEventListener) {
                    var d = V(l), p = u(t, e, d);
                    if (p === a) return !0;
                } else p = null;
                J.set(t, p);
            }
        }
        Z.set(t, n);
        var f = t.type, h = !1;
        X.set(t, a), $.set(t, e), i.depth++;
        for (var m = 0, w = i.length; w > m; m++) {
            var v = i[m];
            if (v.removed) h = !0; else if (!(v.type !== f || !v.capture && n === ot || v.capture && n === at)) try {
                if ("function" == typeof v.handler ? v.handler.call(e, t) : v.handler.handleEvent(t), 
                et.get(t)) return !1;
            } catch (g) {
                I || (I = g);
            }
        }
        if (i.depth--, h && 0 === i.depth) {
            var b = i.slice();
            i.length = 0;
            for (var m = 0; m < b.length; m++) b[m].removed || i.push(b[m]);
        }
        return !Q.get(t);
    }
    function b(e, t, n) {
        this.type = e, this.handler = t, this.capture = Boolean(n);
    }
    function y(e, t) {
        if (!(e instanceof st)) return V(M(st, "Event", e, t));
        var n = e;
        return gt || "beforeunload" !== n.type || this instanceof L ? void B(n, this) : new L(n);
    }
    function E(e) {
        return e && e.relatedTarget ? Object.create(e, {
            relatedTarget: {
                value: q(e.relatedTarget)
            }
        }) : e;
    }
    function S(e, t, n) {
        var r = window[e], o = function(t, n) {
            return t instanceof r ? void B(t, this) : V(M(r, e, t, n));
        };
        if (o.prototype = Object.create(t.prototype), n && W(o.prototype, n), r) try {
            F(r, o, new r("temp"));
        } catch (i) {
            F(r, o, document.createEvent(e));
        }
        return o;
    }
    function T(e, t) {
        return function() {
            arguments[t] = q(arguments[t]);
            var n = q(this);
            n[e].apply(n, arguments);
        };
    }
    function M(e, t, n, r) {
        if (wt) return new e(n, E(r));
        var o = q(document.createEvent(t)), i = mt[t], a = [ n ];
        return Object.keys(i).forEach(function(e) {
            var t = null != r && e in r ? r[e] : i[e];
            "relatedTarget" === e && (t = q(t)), a.push(t);
        }), o["init" + t].apply(o, a), o;
    }
    function L(e) {
        y.call(this, e);
    }
    function O(e) {
        return "function" == typeof e ? !0 : e && e.handleEvent;
    }
    function _(e) {
        switch (e) {
          case "DOMAttrModified":
          case "DOMAttributeNameChanged":
          case "DOMCharacterDataModified":
          case "DOMElementNameChanged":
          case "DOMNodeInserted":
          case "DOMNodeInsertedIntoDocument":
          case "DOMNodeRemoved":
          case "DOMNodeRemovedFromDocument":
          case "DOMSubtreeModified":
            return !0;
        }
        return !1;
    }
    function N(e) {
        B(e, this);
    }
    function C(e) {
        return e instanceof G.ShadowRoot && (e = e.host), q(e);
    }
    function D(e, t) {
        var n = z.get(e);
        if (n) for (var r = 0; r < n.length; r++) if (!n[r].removed && n[r].type === t) return !0;
        return !1;
    }
    function j(e, t) {
        for (var n = q(e); n; n = n.parentNode) if (D(V(n), t)) return !0;
        return !1;
    }
    function H(e) {
        A(e, yt);
    }
    function x(t, n, o, i) {
        e.renderAllPending();
        var a = V(Et.call(U(n), o, i));
        if (!a) return null;
        var c = r(a, null), l = c.lastIndexOf(t);
        return -1 == l ? null : (c = c.slice(0, l), s(c, t));
    }
    function R(e) {
        return function() {
            var t = tt.get(this);
            return t && t[e] && t[e].value || null;
        };
    }
    function P(e) {
        var t = e.slice(2);
        return function(n) {
            var r = tt.get(this);
            r || (r = Object.create(null), tt.set(this, r));
            var o = r[e];
            if (o && this.removeEventListener(t, o.wrapped, !1), "function" == typeof n) {
                var i = function(t) {
                    var r = n.call(this, t);
                    r === !1 ? t.preventDefault() : "onbeforeunload" === e && "string" == typeof r && (t.returnValue = r);
                };
                this.addEventListener(t, i, !1), r[e] = {
                    value: n,
                    wrapped: i
                };
            }
        };
    }
    var I, A = e.forwardMethodsToWrapper, k = e.getTreeScope, W = e.mixin, F = e.registerWrapper, B = e.setWrapper, U = e.unsafeUnwrap, q = e.unwrap, V = e.wrap, G = e.wrappers, z = (new WeakMap(), 
    new WeakMap()), K = new WeakMap(), Y = new WeakMap(), X = new WeakMap(), $ = new WeakMap(), J = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), et = new WeakMap(), tt = new WeakMap(), nt = new WeakMap(), rt = 0, ot = 1, it = 2, at = 3;
    b.prototype = {
        equals: function(e) {
            return this.handler === e.handler && this.type === e.type && this.capture === e.capture;
        },
        get removed() {
            return null === this.handler;
        },
        remove: function() {
            this.handler = null;
        }
    };
    var st = window.Event;
    st.prototype.polymerBlackList_ = {
        returnValue: !0,
        keyLocation: !0
    }, y.prototype = {
        get target() {
            return X.get(this);
        },
        get currentTarget() {
            return $.get(this);
        },
        get eventPhase() {
            return Z.get(this);
        },
        get path() {
            var e = nt.get(this);
            return e ? e.slice() : [];
        },
        stopPropagation: function() {
            Q.set(this, !0);
        },
        stopImmediatePropagation: function() {
            Q.set(this, !0), et.set(this, !0);
        }
    }, F(st, y, document.createEvent("Event"));
    var ct = S("UIEvent", y), lt = S("CustomEvent", y), ut = {
        get relatedTarget() {
            var e = J.get(this);
            return void 0 !== e ? e : V(q(this).relatedTarget);
        }
    }, dt = W({
        initMouseEvent: T("initMouseEvent", 14)
    }, ut), pt = W({
        initFocusEvent: T("initFocusEvent", 5)
    }, ut), ft = S("MouseEvent", ct, dt), ht = S("FocusEvent", ct, pt), mt = Object.create(null), wt = function() {
        try {
            new window.FocusEvent("focus");
        } catch (e) {
            return !1;
        }
        return !0;
    }();
    if (!wt) {
        var vt = function(e, t, n) {
            if (n) {
                var r = mt[n];
                t = W(W({}, r), t);
            }
            mt[e] = t;
        };
        vt("Event", {
            bubbles: !1,
            cancelable: !1
        }), vt("CustomEvent", {
            detail: null
        }, "Event"), vt("UIEvent", {
            view: null,
            detail: 0
        }, "Event"), vt("MouseEvent", {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: !1,
            altKey: !1,
            shiftKey: !1,
            metaKey: !1,
            button: 0,
            relatedTarget: null
        }, "UIEvent"), vt("FocusEvent", {
            relatedTarget: null
        }, "UIEvent");
    }
    var gt = window.BeforeUnloadEvent;
    L.prototype = Object.create(y.prototype), W(L.prototype, {
        get returnValue() {
            return U(this).returnValue;
        },
        set returnValue(e) {
            U(this).returnValue = e;
        }
    }), gt && F(gt, L);
    var bt = window.EventTarget, yt = [ "addEventListener", "removeEventListener", "dispatchEvent" ];
    [ Node, Window ].forEach(function(e) {
        var t = e.prototype;
        yt.forEach(function(e) {
            Object.defineProperty(t, e + "_", {
                value: t[e]
            });
        });
    }), N.prototype = {
        addEventListener: function(e, t, n) {
            if (O(t) && !_(e)) {
                var r = new b(e, t, n), o = z.get(this);
                if (o) {
                    for (var i = 0; i < o.length; i++) if (r.equals(o[i])) return;
                } else o = [], o.depth = 0, z.set(this, o);
                o.push(r);
                var a = C(this);
                a.addEventListener_(e, p, !0);
            }
        },
        removeEventListener: function(e, t, n) {
            n = Boolean(n);
            var r = z.get(this);
            if (r) {
                for (var o = 0, i = !1, a = 0; a < r.length; a++) r[a].type === e && r[a].capture === n && (o++, 
                r[a].handler === t && (i = !0, r[a].remove()));
                if (i && 1 === o) {
                    var s = C(this);
                    s.removeEventListener_(e, p, !0);
                }
            }
        },
        dispatchEvent: function(t) {
            var n = q(t), r = n.type;
            K.set(n, !1), e.renderAllPending();
            var o;
            j(this, r) || (o = function() {}, this.addEventListener(r, o, !0));
            try {
                return q(this).dispatchEvent_(n);
            } finally {
                o && this.removeEventListener(r, o, !0);
            }
        }
    }, bt && F(bt, N);
    var Et = document.elementFromPoint;
    e.elementFromPoint = x, e.getEventHandlerGetter = R, e.getEventHandlerSetter = P, 
    e.wrapEventTargetMethods = H, e.wrappers.BeforeUnloadEvent = L, e.wrappers.CustomEvent = lt, 
    e.wrappers.Event = y, e.wrappers.EventTarget = N, e.wrappers.FocusEvent = ht, e.wrappers.MouseEvent = ft, 
    e.wrappers.UIEvent = ct;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e, t) {
        Object.defineProperty(e, t, m);
    }
    function n(e) {
        l(e, this);
    }
    function r() {
        this.length = 0, t(this, "length");
    }
    function o(e) {
        for (var t = new r(), o = 0; o < e.length; o++) t[o] = new n(e[o]);
        return t.length = o, t;
    }
    function i(e) {
        a.call(this, e);
    }
    var a = e.wrappers.UIEvent, s = e.mixin, c = e.registerWrapper, l = e.setWrapper, u = e.unsafeUnwrap, d = e.wrap, p = window.TouchEvent;
    if (p) {
        var f;
        try {
            f = document.createEvent("TouchEvent");
        } catch (h) {
            return;
        }
        var m = {
            enumerable: !1
        };
        n.prototype = {
            get target() {
                return d(u(this).target);
            }
        };
        var w = {
            configurable: !0,
            enumerable: !0,
            get: null
        };
        [ "clientX", "clientY", "screenX", "screenY", "pageX", "pageY", "identifier", "webkitRadiusX", "webkitRadiusY", "webkitRotationAngle", "webkitForce" ].forEach(function(e) {
            w.get = function() {
                return u(this)[e];
            }, Object.defineProperty(n.prototype, e, w);
        }), r.prototype = {
            item: function(e) {
                return this[e];
            }
        }, i.prototype = Object.create(a.prototype), s(i.prototype, {
            get touches() {
                return o(u(this).touches);
            },
            get targetTouches() {
                return o(u(this).targetTouches);
            },
            get changedTouches() {
                return o(u(this).changedTouches);
            },
            initTouchEvent: function() {
                throw new Error("Not implemented");
            }
        }), c(p, i, f), e.wrappers.Touch = n, e.wrappers.TouchEvent = i, e.wrappers.TouchList = r;
    }
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e, t) {
        Object.defineProperty(e, t, s);
    }
    function n() {
        this.length = 0, t(this, "length");
    }
    function r(e) {
        if (null == e) return e;
        for (var t = new n(), r = 0, o = e.length; o > r; r++) t[r] = a(e[r]);
        return t.length = o, t;
    }
    function o(e, t) {
        e.prototype[t] = function() {
            return r(i(this)[t].apply(i(this), arguments));
        };
    }
    var i = e.unsafeUnwrap, a = e.wrap, s = {
        enumerable: !1
    };
    n.prototype = {
        item: function(e) {
            return this[e];
        }
    }, t(n.prototype, "item"), e.wrappers.NodeList = n, e.addWrapNodeListMethod = o, 
    e.wrapNodeList = r;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    e.wrapHTMLCollection = e.wrapNodeList, e.wrappers.HTMLCollection = e.wrappers.NodeList;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        O(e instanceof S);
    }
    function n(e) {
        var t = new M();
        return t[0] = e, t.length = 1, t;
    }
    function r(e, t, n) {
        N(t, "childList", {
            removedNodes: n,
            previousSibling: e.previousSibling,
            nextSibling: e.nextSibling
        });
    }
    function o(e, t) {
        N(e, "childList", {
            removedNodes: t
        });
    }
    function i(e, t, r, o) {
        if (e instanceof DocumentFragment) {
            var i = s(e);
            B = !0;
            for (var a = i.length - 1; a >= 0; a--) e.removeChild(i[a]), i[a].parentNode_ = t;
            B = !1;
            for (var a = 0; a < i.length; a++) i[a].previousSibling_ = i[a - 1] || r, i[a].nextSibling_ = i[a + 1] || o;
            return r && (r.nextSibling_ = i[0]), o && (o.previousSibling_ = i[i.length - 1]), 
            i;
        }
        var i = n(e), c = e.parentNode;
        return c && c.removeChild(e), e.parentNode_ = t, e.previousSibling_ = r, e.nextSibling_ = o, 
        r && (r.nextSibling_ = e), o && (o.previousSibling_ = e), i;
    }
    function a(e) {
        if (e instanceof DocumentFragment) return s(e);
        var t = n(e), o = e.parentNode;
        return o && r(e, o, t), t;
    }
    function s(e) {
        for (var t = new M(), n = 0, r = e.firstChild; r; r = r.nextSibling) t[n++] = r;
        return t.length = n, o(e, t), t;
    }
    function c(e) {
        return e;
    }
    function l(e, t) {
        R(e, t), e.nodeIsInserted_();
    }
    function u(e, t) {
        for (var n = C(t), r = 0; r < e.length; r++) l(e[r], n);
    }
    function d(e) {
        R(e, new L(e, null));
    }
    function p(e) {
        for (var t = 0; t < e.length; t++) d(e[t]);
    }
    function f(e, t) {
        var n = e.nodeType === S.DOCUMENT_NODE ? e : e.ownerDocument;
        n !== t.ownerDocument && n.adoptNode(t);
    }
    function h(t, n) {
        if (n.length) {
            var r = t.ownerDocument;
            if (r !== n[0].ownerDocument) for (var o = 0; o < n.length; o++) e.adoptNodeNoRemove(n[o], r);
        }
    }
    function m(e, t) {
        h(e, t);
        var n = t.length;
        if (1 === n) return I(t[0]);
        for (var r = I(e.ownerDocument.createDocumentFragment()), o = 0; n > o; o++) r.appendChild(I(t[o]));
        return r;
    }
    function w(e) {
        if (void 0 !== e.firstChild_) for (var t = e.firstChild_; t; ) {
            var n = t;
            t = t.nextSibling_, n.parentNode_ = n.previousSibling_ = n.nextSibling_ = void 0;
        }
        e.firstChild_ = e.lastChild_ = void 0;
    }
    function v(e) {
        if (e.invalidateShadowRenderer()) {
            for (var t = e.firstChild; t; ) {
                O(t.parentNode === e);
                var n = t.nextSibling, r = I(t), o = r.parentNode;
                o && Y.call(o, r), t.previousSibling_ = t.nextSibling_ = t.parentNode_ = null, t = n;
            }
            e.firstChild_ = e.lastChild_ = null;
        } else for (var n, i = I(e), a = i.firstChild; a; ) n = a.nextSibling, Y.call(i, a), 
        a = n;
    }
    function g(e) {
        var t = e.parentNode;
        return t && t.invalidateShadowRenderer();
    }
    function b(e) {
        for (var t, n = 0; n < e.length; n++) t = e[n], t.parentNode.removeChild(t);
    }
    function y(e, t, n) {
        var r;
        if (r = k(n ? U.call(n, P(e), !1) : q.call(P(e), !1)), t) {
            for (var o = e.firstChild; o; o = o.nextSibling) r.appendChild(y(o, !0, n));
            if (e instanceof F.HTMLTemplateElement) for (var i = r.content, o = e.content.firstChild; o; o = o.nextSibling) i.appendChild(y(o, !0, n));
        }
        return r;
    }
    function E(e, t) {
        if (!t || C(e) !== C(t)) return !1;
        for (var n = t; n; n = n.parentNode) if (n === e) return !0;
        return !1;
    }
    function S(e) {
        O(e instanceof V), T.call(this, e), this.parentNode_ = void 0, this.firstChild_ = void 0, 
        this.lastChild_ = void 0, this.nextSibling_ = void 0, this.previousSibling_ = void 0, 
        this.treeScope_ = void 0;
    }
    var T = e.wrappers.EventTarget, M = e.wrappers.NodeList, L = e.TreeScope, O = e.assert, _ = e.defineWrapGetter, N = e.enqueueMutation, C = e.getTreeScope, D = e.isWrapper, j = e.mixin, H = e.registerTransientObservers, x = e.registerWrapper, R = e.setTreeScope, P = e.unsafeUnwrap, I = e.unwrap, A = e.unwrapIfNeeded, k = e.wrap, W = e.wrapIfNeeded, F = e.wrappers, B = !1, U = document.importNode, q = window.Node.prototype.cloneNode, V = window.Node, G = window.DocumentFragment, z = (V.prototype.appendChild, 
    V.prototype.compareDocumentPosition), K = V.prototype.insertBefore, Y = V.prototype.removeChild, X = V.prototype.replaceChild, $ = /Trident|Edge/.test(navigator.userAgent), J = $ ? function(e, t) {
        try {
            Y.call(e, t);
        } catch (n) {
            if (!(e instanceof G)) throw n;
        }
    } : function(e, t) {
        Y.call(e, t);
    };
    S.prototype = Object.create(T.prototype), j(S.prototype, {
        appendChild: function(e) {
            return this.insertBefore(e, null);
        },
        insertBefore: function(e, n) {
            t(e);
            var r;
            n ? D(n) ? r = I(n) : (r = n, n = k(r)) : (n = null, r = null), n && O(n.parentNode === this);
            var o, s = n ? n.previousSibling : this.lastChild, c = !this.invalidateShadowRenderer() && !g(e);
            if (o = c ? a(e) : i(e, this, s, n), c) f(this, e), w(this), K.call(P(this), I(e), r); else {
                s || (this.firstChild_ = o[0]), n || (this.lastChild_ = o[o.length - 1], void 0 === this.firstChild_ && (this.firstChild_ = this.firstChild));
                var l = r ? r.parentNode : P(this);
                l ? K.call(l, m(this, o), r) : h(this, o);
            }
            return N(this, "childList", {
                addedNodes: o,
                nextSibling: n,
                previousSibling: s
            }), u(o, this), e;
        },
        removeChild: function(e) {
            if (t(e), e.parentNode !== this) {
                for (var r = !1, o = (this.childNodes, this.firstChild); o; o = o.nextSibling) if (o === e) {
                    r = !0;
                    break;
                }
                if (!r) throw new Error("NotFoundError");
            }
            var i = I(e), a = e.nextSibling, s = e.previousSibling;
            if (this.invalidateShadowRenderer()) {
                var c = this.firstChild, l = this.lastChild, u = i.parentNode;
                u && J(u, i), c === e && (this.firstChild_ = a), l === e && (this.lastChild_ = s), 
                s && (s.nextSibling_ = a), a && (a.previousSibling_ = s), e.previousSibling_ = e.nextSibling_ = e.parentNode_ = void 0;
            } else w(this), J(P(this), i);
            return B || N(this, "childList", {
                removedNodes: n(e),
                nextSibling: a,
                previousSibling: s
            }), H(this, e), e;
        },
        replaceChild: function(e, r) {
            t(e);
            var o;
            if (D(r) ? o = I(r) : (o = r, r = k(o)), r.parentNode !== this) throw new Error("NotFoundError");
            var s, c = r.nextSibling, l = r.previousSibling, p = !this.invalidateShadowRenderer() && !g(e);
            return p ? s = a(e) : (c === e && (c = e.nextSibling), s = i(e, this, l, c)), p ? (f(this, e), 
            w(this), X.call(P(this), I(e), o)) : (this.firstChild === r && (this.firstChild_ = s[0]), 
            this.lastChild === r && (this.lastChild_ = s[s.length - 1]), r.previousSibling_ = r.nextSibling_ = r.parentNode_ = void 0, 
            o.parentNode && X.call(o.parentNode, m(this, s), o)), N(this, "childList", {
                addedNodes: s,
                removedNodes: n(r),
                nextSibling: c,
                previousSibling: l
            }), d(r), u(s, this), r;
        },
        nodeIsInserted_: function() {
            for (var e = this.firstChild; e; e = e.nextSibling) e.nodeIsInserted_();
        },
        hasChildNodes: function() {
            return null !== this.firstChild;
        },
        get parentNode() {
            return void 0 !== this.parentNode_ ? this.parentNode_ : k(P(this).parentNode);
        },
        get firstChild() {
            return void 0 !== this.firstChild_ ? this.firstChild_ : k(P(this).firstChild);
        },
        get lastChild() {
            return void 0 !== this.lastChild_ ? this.lastChild_ : k(P(this).lastChild);
        },
        get nextSibling() {
            return void 0 !== this.nextSibling_ ? this.nextSibling_ : k(P(this).nextSibling);
        },
        get previousSibling() {
            return void 0 !== this.previousSibling_ ? this.previousSibling_ : k(P(this).previousSibling);
        },
        get parentElement() {
            for (var e = this.parentNode; e && e.nodeType !== S.ELEMENT_NODE; ) e = e.parentNode;
            return e;
        },
        get textContent() {
            for (var e = "", t = this.firstChild; t; t = t.nextSibling) t.nodeType != S.COMMENT_NODE && (e += t.textContent);
            return e;
        },
        set textContent(e) {
            null == e && (e = "");
            var t = c(this.childNodes);
            if (this.invalidateShadowRenderer()) {
                if (v(this), "" !== e) {
                    var n = P(this).ownerDocument.createTextNode(e);
                    this.appendChild(n);
                }
            } else w(this), P(this).textContent = e;
            var r = c(this.childNodes);
            N(this, "childList", {
                addedNodes: r,
                removedNodes: t
            }), p(t), u(r, this);
        },
        get childNodes() {
            for (var e = new M(), t = 0, n = this.firstChild; n; n = n.nextSibling) e[t++] = n;
            return e.length = t, e;
        },
        cloneNode: function(e) {
            return y(this, e);
        },
        contains: function(e) {
            return E(this, W(e));
        },
        compareDocumentPosition: function(e) {
            return z.call(P(this), A(e));
        },
        normalize: function() {
            for (var e, t, n = c(this.childNodes), r = [], o = "", i = 0; i < n.length; i++) t = n[i], 
            t.nodeType === S.TEXT_NODE ? e || t.data.length ? e ? (o += t.data, r.push(t)) : e = t : this.removeChild(t) : (e && r.length && (e.data += o, 
            b(r)), r = [], o = "", e = null, t.childNodes.length && t.normalize());
            e && r.length && (e.data += o, b(r));
        }
    }), _(S, "ownerDocument"), x(V, S, document.createDocumentFragment()), delete S.prototype.querySelector, 
    delete S.prototype.querySelectorAll, S.prototype = j(Object.create(T.prototype), S.prototype), 
    e.cloneNode = y, e.nodeWasAdded = l, e.nodeWasRemoved = d, e.nodesWereAdded = u, 
    e.nodesWereRemoved = p, e.originalInsertBefore = K, e.originalRemoveChild = Y, e.snapshotNodeList = c, 
    e.wrappers.Node = S;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(t, n, r, o) {
        for (var i = null, a = null, s = 0, c = t.length; c > s; s++) i = g(t[s]), !o && (a = w(i).root) && a instanceof e.wrappers.ShadowRoot || (r[n++] = i);
        return n;
    }
    function n(e) {
        return String(e).replace(/\/deep\//g, " ");
    }
    function r(e, t) {
        for (var n, o = e.firstElementChild; o; ) {
            if (o.matches(t)) return o;
            if (n = r(o, t)) return n;
            o = o.nextElementSibling;
        }
        return null;
    }
    function o(e, t) {
        return e.matches(t);
    }
    function i(e, t, n) {
        var r = e.localName;
        return r === t || r === n && e.namespaceURI === C;
    }
    function a() {
        return !0;
    }
    function s(e, t, n) {
        return e.localName === n;
    }
    function c(e, t) {
        return e.namespaceURI === t;
    }
    function l(e, t, n) {
        return e.namespaceURI === t && e.localName === n;
    }
    function u(e, t, n, r, o, i) {
        for (var a = e.firstElementChild; a; ) r(a, o, i) && (n[t++] = a), t = u(a, t, n, r, o, i), 
        a = a.nextElementSibling;
        return t;
    }
    function d(n, r, o, i, a) {
        var s, c = v(this), l = w(this).root;
        if (l instanceof e.wrappers.ShadowRoot) return u(this, r, o, n, i, null);
        if (c instanceof _) s = S.call(c, i); else {
            if (!(c instanceof N)) return u(this, r, o, n, i, null);
            s = E.call(c, i);
        }
        return t(s, r, o, a);
    }
    function p(n, r, o, i, a) {
        var s, c = v(this), l = w(this).root;
        if (l instanceof e.wrappers.ShadowRoot) return u(this, r, o, n, i, a);
        if (c instanceof _) s = M.call(c, i, a); else {
            if (!(c instanceof N)) return u(this, r, o, n, i, a);
            s = T.call(c, i, a);
        }
        return t(s, r, o, !1);
    }
    function f(n, r, o, i, a) {
        var s, c = v(this), l = w(this).root;
        if (l instanceof e.wrappers.ShadowRoot) return u(this, r, o, n, i, a);
        if (c instanceof _) s = O.call(c, i, a); else {
            if (!(c instanceof N)) return u(this, r, o, n, i, a);
            s = L.call(c, i, a);
        }
        return t(s, r, o, !1);
    }
    var h = e.wrappers.HTMLCollection, m = e.wrappers.NodeList, w = e.getTreeScope, v = e.unsafeUnwrap, g = e.wrap, b = document.querySelector, y = document.documentElement.querySelector, E = document.querySelectorAll, S = document.documentElement.querySelectorAll, T = document.getElementsByTagName, M = document.documentElement.getElementsByTagName, L = document.getElementsByTagNameNS, O = document.documentElement.getElementsByTagNameNS, _ = window.Element, N = window.HTMLDocument || window.Document, C = "http://www.w3.org/1999/xhtml", D = {
        querySelector: function(t) {
            var o = n(t), i = o !== t;
            t = o;
            var a, s = v(this), c = w(this).root;
            if (c instanceof e.wrappers.ShadowRoot) return r(this, t);
            if (s instanceof _) a = g(y.call(s, t)); else {
                if (!(s instanceof N)) return r(this, t);
                a = g(b.call(s, t));
            }
            return a && !i && (c = w(a).root) && c instanceof e.wrappers.ShadowRoot ? r(this, t) : a;
        },
        querySelectorAll: function(e) {
            var t = n(e), r = t !== e;
            e = t;
            var i = new m();
            return i.length = d.call(this, o, 0, i, e, r), i;
        }
    }, j = {
        getElementsByTagName: function(e) {
            var t = new h(), n = "*" === e ? a : i;
            return t.length = p.call(this, n, 0, t, e, e.toLowerCase()), t;
        },
        getElementsByClassName: function(e) {
            return this.querySelectorAll("." + e);
        },
        getElementsByTagNameNS: function(e, t) {
            var n = new h(), r = null;
            return r = "*" === e ? "*" === t ? a : s : "*" === t ? c : l, n.length = f.call(this, r, 0, n, e || null, t), 
            n;
        }
    };
    e.GetElementsByInterface = j, e.SelectorsInterface = D;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        for (;e && e.nodeType !== Node.ELEMENT_NODE; ) e = e.nextSibling;
        return e;
    }
    function n(e) {
        for (;e && e.nodeType !== Node.ELEMENT_NODE; ) e = e.previousSibling;
        return e;
    }
    var r = e.wrappers.NodeList, o = {
        get firstElementChild() {
            return t(this.firstChild);
        },
        get lastElementChild() {
            return n(this.lastChild);
        },
        get childElementCount() {
            for (var e = 0, t = this.firstElementChild; t; t = t.nextElementSibling) e++;
            return e;
        },
        get children() {
            for (var e = new r(), t = 0, n = this.firstElementChild; n; n = n.nextElementSibling) e[t++] = n;
            return e.length = t, e;
        },
        remove: function() {
            var e = this.parentNode;
            e && e.removeChild(this);
        }
    }, i = {
        get nextElementSibling() {
            return t(this.nextSibling);
        },
        get previousElementSibling() {
            return n(this.previousSibling);
        }
    };
    e.ChildNodeInterface = i, e.ParentNodeInterface = o;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        r.call(this, e);
    }
    var n = e.ChildNodeInterface, r = e.wrappers.Node, o = e.enqueueMutation, i = e.mixin, a = e.registerWrapper, s = e.unsafeUnwrap, c = window.CharacterData;
    t.prototype = Object.create(r.prototype), i(t.prototype, {
        get textContent() {
            return this.data;
        },
        set textContent(e) {
            this.data = e;
        },
        get data() {
            return s(this).data;
        },
        set data(e) {
            var t = s(this).data;
            o(this, "characterData", {
                oldValue: t
            }), s(this).data = e;
        }
    }), i(t.prototype, n), a(c, t, document.createTextNode("")), e.wrappers.CharacterData = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        return e >>> 0;
    }
    function n(e) {
        r.call(this, e);
    }
    var r = e.wrappers.CharacterData, o = (e.enqueueMutation, e.mixin), i = e.registerWrapper, a = window.Text;
    n.prototype = Object.create(r.prototype), o(n.prototype, {
        splitText: function(e) {
            e = t(e);
            var n = this.data;
            if (e > n.length) throw new Error("IndexSizeError");
            var r = n.slice(0, e), o = n.slice(e);
            this.data = r;
            var i = this.ownerDocument.createTextNode(o);
            return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling), i;
        }
    }), i(a, n, document.createTextNode("")), e.wrappers.Text = n;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        return i(e).getAttribute("class");
    }
    function n(e, t) {
        a(e, "attributes", {
            name: "class",
            namespace: null,
            oldValue: t
        });
    }
    function r(t) {
        e.invalidateRendererBasedOnAttribute(t, "class");
    }
    function o(e, o, i) {
        var a = e.ownerElement_;
        if (null == a) return o.apply(e, i);
        var s = t(a), c = o.apply(e, i);
        return t(a) !== s && (n(a, s), r(a)), c;
    }
    var i = e.unsafeUnwrap, a = e.enqueueMutation, s = DOMTokenList.prototype.add;
    DOMTokenList.prototype.add = function() {
        o(this, s, arguments);
    };
    var c = DOMTokenList.prototype.remove;
    DOMTokenList.prototype.remove = function() {
        o(this, c, arguments);
    };
    var l = DOMTokenList.prototype.toggle;
    DOMTokenList.prototype.toggle = function() {
        return o(this, l, arguments);
    };
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(t, n) {
        var r = t.parentNode;
        if (r && r.shadowRoot) {
            var o = e.getRendererForHost(r);
            o.dependsOnAttribute(n) && o.invalidate();
        }
    }
    function n(e, t, n) {
        l(e, "attributes", {
            name: t,
            namespace: null,
            oldValue: n
        });
    }
    function r(e) {
        a.call(this, e);
    }
    var o = e.ChildNodeInterface, i = e.GetElementsByInterface, a = e.wrappers.Node, s = e.ParentNodeInterface, c = e.SelectorsInterface, l = (e.addWrapNodeListMethod, 
    e.enqueueMutation), u = e.mixin, d = (e.oneOf, e.registerWrapper), p = e.unsafeUnwrap, f = e.wrappers, h = window.Element, m = [ "matches", "mozMatchesSelector", "msMatchesSelector", "webkitMatchesSelector" ].filter(function(e) {
        return h.prototype[e];
    }), w = m[0], v = h.prototype[w], g = new WeakMap();
    r.prototype = Object.create(a.prototype), u(r.prototype, {
        createShadowRoot: function() {
            var t = new f.ShadowRoot(this);
            p(this).polymerShadowRoot_ = t;
            var n = e.getRendererForHost(this);
            return n.invalidate(), t;
        },
        get shadowRoot() {
            return p(this).polymerShadowRoot_ || null;
        },
        setAttribute: function(e, r) {
            var o = p(this).getAttribute(e);
            p(this).setAttribute(e, r), n(this, e, o), t(this, e);
        },
        removeAttribute: function(e) {
            var r = p(this).getAttribute(e);
            p(this).removeAttribute(e), n(this, e, r), t(this, e);
        },
        matches: function(e) {
            return v.call(p(this), e);
        },
        get classList() {
            var e = g.get(this);
            return e || (e = p(this).classList, e.ownerElement_ = this, g.set(this, e)), e;
        },
        get className() {
            return p(this).className;
        },
        set className(e) {
            this.setAttribute("class", e);
        },
        get id() {
            return p(this).id;
        },
        set id(e) {
            this.setAttribute("id", e);
        }
    }), m.forEach(function(e) {
        "matches" !== e && (r.prototype[e] = function(e) {
            return this.matches(e);
        });
    }), h.prototype.webkitCreateShadowRoot && (r.prototype.webkitCreateShadowRoot = r.prototype.createShadowRoot), 
    u(r.prototype, o), u(r.prototype, i), u(r.prototype, s), u(r.prototype, c), d(h, r, document.createElementNS(null, "x")), 
    e.invalidateRendererBasedOnAttribute = t, e.matchesNames = m, e.wrappers.Element = r;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        switch (e) {
          case "&":
            return "&amp;";

          case "<":
            return "&lt;";

          case ">":
            return "&gt;";

          case '"':
            return "&quot;";

          case " ":
            return "&nbsp;";
        }
    }
    function n(e) {
        return e.replace(O, t);
    }
    function r(e) {
        return e.replace(_, t);
    }
    function o(e) {
        for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
        return t;
    }
    function i(e, t) {
        switch (e.nodeType) {
          case Node.ELEMENT_NODE:
            for (var o, i = e.tagName.toLowerCase(), s = "<" + i, c = e.attributes, l = 0; o = c[l]; l++) s += " " + o.name + '="' + n(o.value) + '"';
            return s += ">", N[i] ? s : s + a(e) + "</" + i + ">";

          case Node.TEXT_NODE:
            var u = e.data;
            return t && C[t.localName] ? u : r(u);

          case Node.COMMENT_NODE:
            return "<!--" + e.data + "-->";

          default:
            throw console.error(e), new Error("not implemented");
        }
    }
    function a(e) {
        e instanceof L.HTMLTemplateElement && (e = e.content);
        for (var t = "", n = e.firstChild; n; n = n.nextSibling) t += i(n, e);
        return t;
    }
    function s(e, t, n) {
        var r = n || "div";
        e.textContent = "";
        var o = T(e.ownerDocument.createElement(r));
        o.innerHTML = t;
        for (var i; i = o.firstChild; ) e.appendChild(M(i));
    }
    function c(e) {
        h.call(this, e);
    }
    function l(e, t) {
        var n = T(e.cloneNode(!1));
        n.innerHTML = t;
        for (var r, o = T(document.createDocumentFragment()); r = n.firstChild; ) o.appendChild(r);
        return M(o);
    }
    function u(t) {
        return function() {
            return e.renderAllPending(), S(this)[t];
        };
    }
    function d(e) {
        m(c, e, u(e));
    }
    function p(t) {
        Object.defineProperty(c.prototype, t, {
            get: u(t),
            set: function(n) {
                e.renderAllPending(), S(this)[t] = n;
            },
            configurable: !0,
            enumerable: !0
        });
    }
    function f(t) {
        Object.defineProperty(c.prototype, t, {
            value: function() {
                return e.renderAllPending(), S(this)[t].apply(S(this), arguments);
            },
            configurable: !0,
            enumerable: !0
        });
    }
    var h = e.wrappers.Element, m = e.defineGetter, w = e.enqueueMutation, v = e.mixin, g = e.nodesWereAdded, b = e.nodesWereRemoved, y = e.registerWrapper, E = e.snapshotNodeList, S = e.unsafeUnwrap, T = e.unwrap, M = e.wrap, L = e.wrappers, O = /[&\u00A0"]/g, _ = /[&\u00A0<>]/g, N = o([ "area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), C = o([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]), D = /MSIE/.test(navigator.userAgent), j = window.HTMLElement, H = window.HTMLTemplateElement;
    c.prototype = Object.create(h.prototype), v(c.prototype, {
        get innerHTML() {
            return a(this);
        },
        set innerHTML(e) {
            if (D && C[this.localName]) return void (this.textContent = e);
            var t = E(this.childNodes);
            this.invalidateShadowRenderer() ? this instanceof L.HTMLTemplateElement ? s(this.content, e) : s(this, e, this.tagName) : !H && this instanceof L.HTMLTemplateElement ? s(this.content, e) : S(this).innerHTML = e;
            var n = E(this.childNodes);
            w(this, "childList", {
                addedNodes: n,
                removedNodes: t
            }), b(t), g(n, this);
        },
        get outerHTML() {
            return i(this, this.parentNode);
        },
        set outerHTML(e) {
            var t = this.parentNode;
            if (t) {
                t.invalidateShadowRenderer();
                var n = l(t, e);
                t.replaceChild(n, this);
            }
        },
        insertAdjacentHTML: function(e, t) {
            var n, r;
            switch (String(e).toLowerCase()) {
              case "beforebegin":
                n = this.parentNode, r = this;
                break;

              case "afterend":
                n = this.parentNode, r = this.nextSibling;
                break;

              case "afterbegin":
                n = this, r = this.firstChild;
                break;

              case "beforeend":
                n = this, r = null;
                break;

              default:
                return;
            }
            var o = l(n, t);
            n.insertBefore(o, r);
        },
        get hidden() {
            return this.hasAttribute("hidden");
        },
        set hidden(e) {
            e ? this.setAttribute("hidden", "") : this.removeAttribute("hidden");
        }
    }), [ "clientHeight", "clientLeft", "clientTop", "clientWidth", "offsetHeight", "offsetLeft", "offsetTop", "offsetWidth", "scrollHeight", "scrollWidth" ].forEach(d), 
    [ "scrollLeft", "scrollTop" ].forEach(p), [ "getBoundingClientRect", "getClientRects", "scrollIntoView" ].forEach(f), 
    y(j, c, document.createElement("b")), e.wrappers.HTMLElement = c, e.getInnerHTML = a, 
    e.setInnerHTML = s;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.HTMLElement, r = e.mixin, o = e.registerWrapper, i = e.unsafeUnwrap, a = e.wrap, s = window.HTMLCanvasElement;
    t.prototype = Object.create(n.prototype), r(t.prototype, {
        getContext: function() {
            var e = i(this).getContext.apply(i(this), arguments);
            return e && a(e);
        }
    }), o(s, t, document.createElement("canvas")), e.wrappers.HTMLCanvasElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.HTMLElement, r = e.mixin, o = e.registerWrapper, i = window.HTMLContentElement;
    t.prototype = Object.create(n.prototype), r(t.prototype, {
        constructor: t,
        get select() {
            return this.getAttribute("select");
        },
        set select(e) {
            this.setAttribute("select", e);
        },
        setAttribute: function(e, t) {
            n.prototype.setAttribute.call(this, e, t), "select" === String(e).toLowerCase() && this.invalidateShadowRenderer(!0);
        }
    }), i && o(i, t), e.wrappers.HTMLContentElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.HTMLElement, r = e.mixin, o = e.registerWrapper, i = e.wrapHTMLCollection, a = e.unwrap, s = window.HTMLFormElement;
    t.prototype = Object.create(n.prototype), r(t.prototype, {
        get elements() {
            return i(a(this).elements);
        }
    }), o(s, t, document.createElement("form")), e.wrappers.HTMLFormElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        r.call(this, e);
    }
    function n(e, t) {
        if (!(this instanceof n)) throw new TypeError("DOM object constructor cannot be called as a function.");
        var o = i(document.createElement("img"));
        r.call(this, o), a(o, this), void 0 !== e && (o.width = e), void 0 !== t && (o.height = t);
    }
    var r = e.wrappers.HTMLElement, o = e.registerWrapper, i = e.unwrap, a = e.rewrap, s = window.HTMLImageElement;
    t.prototype = Object.create(r.prototype), o(s, t, document.createElement("img")), 
    n.prototype = t.prototype, e.wrappers.HTMLImageElement = t, e.wrappers.Image = n;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.HTMLElement, r = (e.mixin, e.wrappers.NodeList, e.registerWrapper), o = window.HTMLShadowElement;
    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, o && r(o, t), 
    e.wrappers.HTMLShadowElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        if (!e.defaultView) return e;
        var t = d.get(e);
        if (!t) {
            for (t = e.implementation.createHTMLDocument(""); t.lastChild; ) t.removeChild(t.lastChild);
            d.set(e, t);
        }
        return t;
    }
    function n(e) {
        for (var n, r = t(e.ownerDocument), o = c(r.createDocumentFragment()); n = e.firstChild; ) o.appendChild(n);
        return o;
    }
    function r(e) {
        if (o.call(this, e), !p) {
            var t = n(e);
            u.set(this, l(t));
        }
    }
    var o = e.wrappers.HTMLElement, i = e.mixin, a = e.registerWrapper, s = e.unsafeUnwrap, c = e.unwrap, l = e.wrap, u = new WeakMap(), d = new WeakMap(), p = window.HTMLTemplateElement;
    r.prototype = Object.create(o.prototype), i(r.prototype, {
        constructor: r,
        get content() {
            return p ? l(s(this).content) : u.get(this);
        }
    }), p && a(p, r), e.wrappers.HTMLTemplateElement = r;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.HTMLElement, r = e.registerWrapper, o = window.HTMLMediaElement;
    o && (t.prototype = Object.create(n.prototype), r(o, t, document.createElement("audio")), 
    e.wrappers.HTMLMediaElement = t);
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        r.call(this, e);
    }
    function n(e) {
        if (!(this instanceof n)) throw new TypeError("DOM object constructor cannot be called as a function.");
        var t = i(document.createElement("audio"));
        r.call(this, t), a(t, this), t.setAttribute("preload", "auto"), void 0 !== e && t.setAttribute("src", e);
    }
    var r = e.wrappers.HTMLMediaElement, o = e.registerWrapper, i = e.unwrap, a = e.rewrap, s = window.HTMLAudioElement;
    s && (t.prototype = Object.create(r.prototype), o(s, t, document.createElement("audio")), 
    n.prototype = t.prototype, e.wrappers.HTMLAudioElement = t, e.wrappers.Audio = n);
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        return e.replace(/\s+/g, " ").trim();
    }
    function n(e) {
        o.call(this, e);
    }
    function r(e, t, n, i) {
        if (!(this instanceof r)) throw new TypeError("DOM object constructor cannot be called as a function.");
        var a = c(document.createElement("option"));
        o.call(this, a), s(a, this), void 0 !== e && (a.text = e), void 0 !== t && a.setAttribute("value", t), 
        n === !0 && a.setAttribute("selected", ""), a.selected = i === !0;
    }
    var o = e.wrappers.HTMLElement, i = e.mixin, a = e.registerWrapper, s = e.rewrap, c = e.unwrap, l = e.wrap, u = window.HTMLOptionElement;
    n.prototype = Object.create(o.prototype), i(n.prototype, {
        get text() {
            return t(this.textContent);
        },
        set text(e) {
            this.textContent = t(String(e));
        },
        get form() {
            return l(c(this).form);
        }
    }), a(u, n, document.createElement("option")), r.prototype = n.prototype, e.wrappers.HTMLOptionElement = n, 
    e.wrappers.Option = r;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.HTMLElement, r = e.mixin, o = e.registerWrapper, i = e.unwrap, a = e.wrap, s = window.HTMLSelectElement;
    t.prototype = Object.create(n.prototype), r(t.prototype, {
        add: function(e, t) {
            "object" == typeof t && (t = i(t)), i(this).add(i(e), t);
        },
        remove: function(e) {
            return void 0 === e ? void n.prototype.remove.call(this) : ("object" == typeof e && (e = i(e)), 
            void i(this).remove(e));
        },
        get form() {
            return a(i(this).form);
        }
    }), o(s, t, document.createElement("select")), e.wrappers.HTMLSelectElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.HTMLElement, r = e.mixin, o = e.registerWrapper, i = e.unwrap, a = e.wrap, s = e.wrapHTMLCollection, c = window.HTMLTableElement;
    t.prototype = Object.create(n.prototype), r(t.prototype, {
        get caption() {
            return a(i(this).caption);
        },
        createCaption: function() {
            return a(i(this).createCaption());
        },
        get tHead() {
            return a(i(this).tHead);
        },
        createTHead: function() {
            return a(i(this).createTHead());
        },
        createTFoot: function() {
            return a(i(this).createTFoot());
        },
        get tFoot() {
            return a(i(this).tFoot);
        },
        get tBodies() {
            return s(i(this).tBodies);
        },
        createTBody: function() {
            return a(i(this).createTBody());
        },
        get rows() {
            return s(i(this).rows);
        },
        insertRow: function(e) {
            return a(i(this).insertRow(e));
        }
    }), o(c, t, document.createElement("table")), e.wrappers.HTMLTableElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.HTMLElement, r = e.mixin, o = e.registerWrapper, i = e.wrapHTMLCollection, a = e.unwrap, s = e.wrap, c = window.HTMLTableSectionElement;
    t.prototype = Object.create(n.prototype), r(t.prototype, {
        constructor: t,
        get rows() {
            return i(a(this).rows);
        },
        insertRow: function(e) {
            return s(a(this).insertRow(e));
        }
    }), o(c, t, document.createElement("thead")), e.wrappers.HTMLTableSectionElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.HTMLElement, r = e.mixin, o = e.registerWrapper, i = e.wrapHTMLCollection, a = e.unwrap, s = e.wrap, c = window.HTMLTableRowElement;
    t.prototype = Object.create(n.prototype), r(t.prototype, {
        get cells() {
            return i(a(this).cells);
        },
        insertCell: function(e) {
            return s(a(this).insertCell(e));
        }
    }), o(c, t, document.createElement("tr")), e.wrappers.HTMLTableRowElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        switch (e.localName) {
          case "content":
            return new n(e);

          case "shadow":
            return new o(e);

          case "template":
            return new i(e);
        }
        r.call(this, e);
    }
    var n = e.wrappers.HTMLContentElement, r = e.wrappers.HTMLElement, o = e.wrappers.HTMLShadowElement, i = e.wrappers.HTMLTemplateElement, a = (e.mixin, 
    e.registerWrapper), s = window.HTMLUnknownElement;
    t.prototype = Object.create(r.prototype), a(s, t), e.wrappers.HTMLUnknownElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    var t = e.wrappers.Element, n = e.wrappers.HTMLElement, r = e.registerObject, o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "title"), a = r(i), s = Object.getPrototypeOf(a.prototype).constructor;
    if (!("classList" in i)) {
        var c = Object.getOwnPropertyDescriptor(t.prototype, "classList");
        Object.defineProperty(n.prototype, "classList", c), delete t.prototype.classList;
    }
    e.wrappers.SVGElement = s;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        p.call(this, e);
    }
    var n = e.mixin, r = e.registerWrapper, o = e.unwrap, i = e.wrap, a = window.SVGUseElement, s = "http://www.w3.org/2000/svg", c = i(document.createElementNS(s, "g")), l = document.createElementNS(s, "use"), u = c.constructor, d = Object.getPrototypeOf(u.prototype), p = d.constructor;
    t.prototype = Object.create(d), "instanceRoot" in l && n(t.prototype, {
        get instanceRoot() {
            return i(o(this).instanceRoot);
        },
        get animatedInstanceRoot() {
            return i(o(this).animatedInstanceRoot);
        }
    }), r(a, t, l), e.wrappers.SVGUseElement = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.EventTarget, r = e.mixin, o = e.registerWrapper, i = e.unsafeUnwrap, a = e.wrap, s = window.SVGElementInstance;
    s && (t.prototype = Object.create(n.prototype), r(t.prototype, {
        get correspondingElement() {
            return a(i(this).correspondingElement);
        },
        get correspondingUseElement() {
            return a(i(this).correspondingUseElement);
        },
        get parentNode() {
            return a(i(this).parentNode);
        },
        get childNodes() {
            throw new Error("Not implemented");
        },
        get firstChild() {
            return a(i(this).firstChild);
        },
        get lastChild() {
            return a(i(this).lastChild);
        },
        get previousSibling() {
            return a(i(this).previousSibling);
        },
        get nextSibling() {
            return a(i(this).nextSibling);
        }
    }), o(s, t), e.wrappers.SVGElementInstance = t);
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        o(e, this);
    }
    var n = e.mixin, r = e.registerWrapper, o = e.setWrapper, i = e.unsafeUnwrap, a = e.unwrap, s = e.unwrapIfNeeded, c = e.wrap, l = window.CanvasRenderingContext2D;
    n(t.prototype, {
        get canvas() {
            return c(i(this).canvas);
        },
        drawImage: function() {
            arguments[0] = s(arguments[0]), i(this).drawImage.apply(i(this), arguments);
        },
        createPattern: function() {
            return arguments[0] = a(arguments[0]), i(this).createPattern.apply(i(this), arguments);
        }
    }), r(l, t, document.createElement("canvas").getContext("2d")), e.wrappers.CanvasRenderingContext2D = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        o(e, this);
    }
    var n = e.mixin, r = e.registerWrapper, o = e.setWrapper, i = e.unsafeUnwrap, a = e.unwrapIfNeeded, s = e.wrap, c = window.WebGLRenderingContext;
    if (c) {
        n(t.prototype, {
            get canvas() {
                return s(i(this).canvas);
            },
            texImage2D: function() {
                arguments[5] = a(arguments[5]), i(this).texImage2D.apply(i(this), arguments);
            },
            texSubImage2D: function() {
                arguments[6] = a(arguments[6]), i(this).texSubImage2D.apply(i(this), arguments);
            }
        });
        var l = /WebKit/.test(navigator.userAgent) ? {
            drawingBufferHeight: null,
            drawingBufferWidth: null
        } : {};
        r(c, t, l), e.wrappers.WebGLRenderingContext = t;
    }
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        r(e, this);
    }
    var n = e.registerWrapper, r = e.setWrapper, o = e.unsafeUnwrap, i = e.unwrap, a = e.unwrapIfNeeded, s = e.wrap, c = window.Range;
    t.prototype = {
        get startContainer() {
            return s(o(this).startContainer);
        },
        get endContainer() {
            return s(o(this).endContainer);
        },
        get commonAncestorContainer() {
            return s(o(this).commonAncestorContainer);
        },
        setStart: function(e, t) {
            o(this).setStart(a(e), t);
        },
        setEnd: function(e, t) {
            o(this).setEnd(a(e), t);
        },
        setStartBefore: function(e) {
            o(this).setStartBefore(a(e));
        },
        setStartAfter: function(e) {
            o(this).setStartAfter(a(e));
        },
        setEndBefore: function(e) {
            o(this).setEndBefore(a(e));
        },
        setEndAfter: function(e) {
            o(this).setEndAfter(a(e));
        },
        selectNode: function(e) {
            o(this).selectNode(a(e));
        },
        selectNodeContents: function(e) {
            o(this).selectNodeContents(a(e));
        },
        compareBoundaryPoints: function(e, t) {
            return o(this).compareBoundaryPoints(e, i(t));
        },
        extractContents: function() {
            return s(o(this).extractContents());
        },
        cloneContents: function() {
            return s(o(this).cloneContents());
        },
        insertNode: function(e) {
            o(this).insertNode(a(e));
        },
        surroundContents: function(e) {
            o(this).surroundContents(a(e));
        },
        cloneRange: function() {
            return s(o(this).cloneRange());
        },
        isPointInRange: function(e, t) {
            return o(this).isPointInRange(a(e), t);
        },
        comparePoint: function(e, t) {
            return o(this).comparePoint(a(e), t);
        },
        intersectsNode: function(e) {
            return o(this).intersectsNode(a(e));
        },
        toString: function() {
            return o(this).toString();
        }
    }, c.prototype.createContextualFragment && (t.prototype.createContextualFragment = function(e) {
        return s(o(this).createContextualFragment(e));
    }), n(window.Range, t, document.createRange()), e.wrappers.Range = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    var t = e.GetElementsByInterface, n = e.ParentNodeInterface, r = e.SelectorsInterface, o = e.mixin, i = e.registerObject, a = i(document.createDocumentFragment());
    o(a.prototype, n), o(a.prototype, r), o(a.prototype, t);
    var s = i(document.createComment(""));
    e.wrappers.Comment = s, e.wrappers.DocumentFragment = a;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        var t = d(u(e).ownerDocument.createDocumentFragment());
        n.call(this, t), c(t, this);
        var o = e.shadowRoot;
        f.set(this, o), this.treeScope_ = new r(this, a(o || e)), p.set(this, e);
    }
    var n = e.wrappers.DocumentFragment, r = e.TreeScope, o = e.elementFromPoint, i = e.getInnerHTML, a = e.getTreeScope, s = e.mixin, c = e.rewrap, l = e.setInnerHTML, u = e.unsafeUnwrap, d = e.unwrap, p = new WeakMap(), f = new WeakMap(), h = /[ \t\n\r\f]/;
    t.prototype = Object.create(n.prototype), s(t.prototype, {
        constructor: t,
        get innerHTML() {
            return i(this);
        },
        set innerHTML(e) {
            l(this, e), this.invalidateShadowRenderer();
        },
        get olderShadowRoot() {
            return f.get(this) || null;
        },
        get host() {
            return p.get(this) || null;
        },
        invalidateShadowRenderer: function() {
            return p.get(this).invalidateShadowRenderer();
        },
        elementFromPoint: function(e, t) {
            return o(this, this.ownerDocument, e, t);
        },
        getElementById: function(e) {
            return h.test(e) ? null : this.querySelector('[id="' + e + '"]');
        }
    }), e.wrappers.ShadowRoot = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        e.previousSibling_ = e.previousSibling, e.nextSibling_ = e.nextSibling, e.parentNode_ = e.parentNode;
    }
    function n(n, o, i) {
        var a = x(n), s = x(o), c = i ? x(i) : null;
        if (r(o), t(o), i) n.firstChild === i && (n.firstChild_ = i), i.previousSibling_ = i.previousSibling; else {
            n.lastChild_ = n.lastChild, n.lastChild === n.firstChild && (n.firstChild_ = n.firstChild);
            var l = R(a.lastChild);
            l && (l.nextSibling_ = l.nextSibling);
        }
        e.originalInsertBefore.call(a, s, c);
    }
    function r(n) {
        var r = x(n), o = r.parentNode;
        if (o) {
            var i = R(o);
            t(n), n.previousSibling && (n.previousSibling.nextSibling_ = n), n.nextSibling && (n.nextSibling.previousSibling_ = n), 
            i.lastChild === n && (i.lastChild_ = n), i.firstChild === n && (i.firstChild_ = n), 
            e.originalRemoveChild.call(o, r);
        }
    }
    function o(e) {
        I.set(e, []);
    }
    function i(e) {
        var t = I.get(e);
        return t || I.set(e, t = []), t;
    }
    function a(e) {
        for (var t = [], n = 0, r = e.firstChild; r; r = r.nextSibling) t[n++] = r;
        return t;
    }
    function s() {
        for (var e = 0; e < F.length; e++) {
            var t = F[e], n = t.parentRenderer;
            n && n.dirty || t.render();
        }
        F = [];
    }
    function c() {
        M = null, s();
    }
    function l(e) {
        var t = k.get(e);
        return t || (t = new f(e), k.set(e, t)), t;
    }
    function u(e) {
        var t = D(e).root;
        return t instanceof C ? t : null;
    }
    function d(e) {
        return l(e.host);
    }
    function p(e) {
        this.skip = !1, this.node = e, this.childNodes = [];
    }
    function f(e) {
        this.host = e, this.dirty = !1, this.invalidateAttributes(), this.associateNode(e);
    }
    function h(e) {
        for (var t = [], n = e.firstChild; n; n = n.nextSibling) E(n) ? t.push.apply(t, i(n)) : t.push(n);
        return t;
    }
    function m(e) {
        if (e instanceof _) return e;
        if (e instanceof O) return null;
        for (var t = e.firstChild; t; t = t.nextSibling) {
            var n = m(t);
            if (n) return n;
        }
        return null;
    }
    function w(e, t) {
        i(t).push(e);
        var n = A.get(e);
        n ? n.push(t) : A.set(e, [ t ]);
    }
    function v(e) {
        return A.get(e);
    }
    function g(e) {
        A.set(e, void 0);
    }
    function b(e, t) {
        var n = t.getAttribute("select");
        if (!n) return !0;
        if (n = n.trim(), !n) return !0;
        if (!(e instanceof L)) return !1;
        if (!U.test(n)) return !1;
        try {
            return e.matches(n);
        } catch (r) {
            return !1;
        }
    }
    function y(e, t) {
        var n = v(t);
        return n && n[n.length - 1] === e;
    }
    function E(e) {
        return e instanceof O || e instanceof _;
    }
    function S(e) {
        return e.shadowRoot;
    }
    function T(e) {
        for (var t = [], n = e.shadowRoot; n; n = n.olderShadowRoot) t.push(n);
        return t;
    }
    var M, L = e.wrappers.Element, O = e.wrappers.HTMLContentElement, _ = e.wrappers.HTMLShadowElement, N = e.wrappers.Node, C = e.wrappers.ShadowRoot, D = (e.assert, 
    e.getTreeScope), j = (e.mixin, e.oneOf), H = e.unsafeUnwrap, x = e.unwrap, R = e.wrap, P = e.ArraySplice, I = new WeakMap(), A = new WeakMap(), k = new WeakMap(), W = j(window, [ "requestAnimationFrame", "mozRequestAnimationFrame", "webkitRequestAnimationFrame", "setTimeout" ]), F = [], B = new P();
    B.equals = function(e, t) {
        return x(e.node) === t;
    }, p.prototype = {
        append: function(e) {
            var t = new p(e);
            return this.childNodes.push(t), t;
        },
        sync: function(e) {
            if (!this.skip) {
                for (var t = this.node, o = this.childNodes, i = a(x(t)), s = e || new WeakMap(), c = B.calculateSplices(o, i), l = 0, u = 0, d = 0, p = 0; p < c.length; p++) {
                    for (var f = c[p]; d < f.index; d++) u++, o[l++].sync(s);
                    for (var h = f.removed.length, m = 0; h > m; m++) {
                        var w = R(i[u++]);
                        s.get(w) || r(w);
                    }
                    for (var v = f.addedCount, g = i[u] && R(i[u]), m = 0; v > m; m++) {
                        var b = o[l++], y = b.node;
                        n(t, y, g), s.set(y, !0), b.sync(s);
                    }
                    d += v;
                }
                for (var p = d; p < o.length; p++) o[p].sync(s);
            }
        }
    }, f.prototype = {
        render: function(e) {
            if (this.dirty) {
                this.invalidateAttributes();
                var t = this.host;
                this.distribution(t);
                var n = e || new p(t);
                this.buildRenderTree(n, t);
                var r = !e;
                r && n.sync(), this.dirty = !1;
            }
        },
        get parentRenderer() {
            return D(this.host).renderer;
        },
        invalidate: function() {
            if (!this.dirty) {
                this.dirty = !0;
                var e = this.parentRenderer;
                if (e && e.invalidate(), F.push(this), M) return;
                M = window[W](c, 0);
            }
        },
        distribution: function(e) {
            this.resetAllSubtrees(e), this.distributionResolution(e);
        },
        resetAll: function(e) {
            E(e) ? o(e) : g(e), this.resetAllSubtrees(e);
        },
        resetAllSubtrees: function(e) {
            for (var t = e.firstChild; t; t = t.nextSibling) this.resetAll(t);
            e.shadowRoot && this.resetAll(e.shadowRoot), e.olderShadowRoot && this.resetAll(e.olderShadowRoot);
        },
        distributionResolution: function(e) {
            if (S(e)) {
                for (var t = e, n = h(t), r = T(t), o = 0; o < r.length; o++) this.poolDistribution(r[o], n);
                for (var o = r.length - 1; o >= 0; o--) {
                    var i = r[o], a = m(i);
                    if (a) {
                        var s = i.olderShadowRoot;
                        s && (n = h(s));
                        for (var c = 0; c < n.length; c++) w(n[c], a);
                    }
                    this.distributionResolution(i);
                }
            }
            for (var l = e.firstChild; l; l = l.nextSibling) this.distributionResolution(l);
        },
        poolDistribution: function(e, t) {
            if (!(e instanceof _)) if (e instanceof O) {
                var n = e;
                this.updateDependentAttributes(n.getAttribute("select"));
                for (var r = !1, o = 0; o < t.length; o++) {
                    var e = t[o];
                    e && b(e, n) && (w(e, n), t[o] = void 0, r = !0);
                }
                if (!r) for (var i = n.firstChild; i; i = i.nextSibling) w(i, n);
            } else for (var i = e.firstChild; i; i = i.nextSibling) this.poolDistribution(i, t);
        },
        buildRenderTree: function(e, t) {
            for (var n = this.compose(t), r = 0; r < n.length; r++) {
                var o = n[r], i = e.append(o);
                this.buildRenderTree(i, o);
            }
            if (S(t)) {
                var a = l(t);
                a.dirty = !1;
            }
        },
        compose: function(e) {
            for (var t = [], n = e.shadowRoot || e, r = n.firstChild; r; r = r.nextSibling) if (E(r)) {
                this.associateNode(n);
                for (var o = i(r), a = 0; a < o.length; a++) {
                    var s = o[a];
                    y(r, s) && t.push(s);
                }
            } else t.push(r);
            return t;
        },
        invalidateAttributes: function() {
            this.attributes = Object.create(null);
        },
        updateDependentAttributes: function(e) {
            if (e) {
                var t = this.attributes;
                /\.\w+/.test(e) && (t["class"] = !0), /#\w+/.test(e) && (t.id = !0), e.replace(/\[\s*([^\s=\|~\]]+)/g, function(e, n) {
                    t[n] = !0;
                });
            }
        },
        dependsOnAttribute: function(e) {
            return this.attributes[e];
        },
        associateNode: function(e) {
            H(e).polymerShadowRenderer_ = this;
        }
    };
    var U = /^(:not\()?[*.#[a-zA-Z_|]/;
    N.prototype.invalidateShadowRenderer = function() {
        var e = H(this).polymerShadowRenderer_;
        return e ? (e.invalidate(), !0) : !1;
    }, O.prototype.getDistributedNodes = _.prototype.getDistributedNodes = function() {
        return s(), i(this);
    }, L.prototype.getDestinationInsertionPoints = function() {
        return s(), v(this) || [];
    }, O.prototype.nodeIsInserted_ = _.prototype.nodeIsInserted_ = function() {
        this.invalidateShadowRenderer();
        var e, t = u(this);
        t && (e = d(t)), H(this).polymerShadowRenderer_ = e, e && e.invalidate();
    }, e.getRendererForHost = l, e.getShadowTrees = T, e.renderAllPending = s, e.getDestinationInsertionPoints = v, 
    e.visual = {
        insertBefore: n,
        remove: r
    };
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(t) {
        if (window[t]) {
            r(!e.wrappers[t]);
            var c = function(e) {
                n.call(this, e);
            };
            c.prototype = Object.create(n.prototype), o(c.prototype, {
                get form() {
                    return s(a(this).form);
                }
            }), i(window[t], c, document.createElement(t.slice(4, -7))), e.wrappers[t] = c;
        }
    }
    var n = e.wrappers.HTMLElement, r = e.assert, o = e.mixin, i = e.registerWrapper, a = e.unwrap, s = e.wrap, c = [ "HTMLButtonElement", "HTMLFieldSetElement", "HTMLInputElement", "HTMLKeygenElement", "HTMLLabelElement", "HTMLLegendElement", "HTMLObjectElement", "HTMLOutputElement", "HTMLTextAreaElement" ];
    c.forEach(t);
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        r(e, this);
    }
    {
        var n = e.registerWrapper, r = e.setWrapper, o = e.unsafeUnwrap, i = e.unwrap, a = e.unwrapIfNeeded, s = e.wrap;
        window.Selection;
    }
    t.prototype = {
        get anchorNode() {
            return s(o(this).anchorNode);
        },
        get focusNode() {
            return s(o(this).focusNode);
        },
        addRange: function(e) {
            o(this).addRange(i(e));
        },
        collapse: function(e, t) {
            o(this).collapse(a(e), t);
        },
        containsNode: function(e, t) {
            return o(this).containsNode(a(e), t);
        },
        extend: function(e, t) {
            o(this).extend(a(e), t);
        },
        getRangeAt: function(e) {
            return s(o(this).getRangeAt(e));
        },
        removeRange: function(e) {
            o(this).removeRange(i(e));
        },
        selectAllChildren: function(e) {
            o(this).selectAllChildren(a(e));
        },
        toString: function() {
            return o(this).toString();
        }
    }, n(window.Selection, t, window.getSelection()), e.wrappers.Selection = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        u.call(this, e), this.treeScope_ = new m(this, null);
    }
    function n(e) {
        var n = document[e];
        t.prototype[e] = function() {
            return N(n.apply(O(this), arguments));
        };
    }
    function r(e, t) {
        j.call(O(t), _(e)), o(e, t);
    }
    function o(e, t) {
        e.shadowRoot && t.adoptNode(e.shadowRoot), e instanceof h && i(e, t);
        for (var n = e.firstChild; n; n = n.nextSibling) o(n, t);
    }
    function i(e, t) {
        var n = e.olderShadowRoot;
        n && t.adoptNode(n);
    }
    function a(e) {
        L(e, this);
    }
    function s(e, t) {
        var n = document.implementation[t];
        e.prototype[t] = function() {
            return N(n.apply(O(this), arguments));
        };
    }
    function c(e, t) {
        var n = document.implementation[t];
        e.prototype[t] = function() {
            return n.apply(O(this), arguments);
        };
    }
    var l = e.GetElementsByInterface, u = e.wrappers.Node, d = e.ParentNodeInterface, p = e.wrappers.Selection, f = e.SelectorsInterface, h = e.wrappers.ShadowRoot, m = e.TreeScope, w = e.cloneNode, v = e.defineWrapGetter, g = e.elementFromPoint, b = e.forwardMethodsToWrapper, y = e.matchesNames, E = e.mixin, S = e.registerWrapper, T = e.renderAllPending, M = e.rewrap, L = e.setWrapper, O = e.unsafeUnwrap, _ = e.unwrap, N = e.wrap, C = e.wrapEventTargetMethods, D = (e.wrapNodeList, 
    new WeakMap());
    t.prototype = Object.create(u.prototype), v(t, "documentElement"), v(t, "body"), 
    v(t, "head"), [ "createComment", "createDocumentFragment", "createElement", "createElementNS", "createEvent", "createEventNS", "createRange", "createTextNode", "getElementById" ].forEach(n);
    var j = document.adoptNode, H = document.getSelection;
    if (E(t.prototype, {
        adoptNode: function(e) {
            return e.parentNode && e.parentNode.removeChild(e), r(e, this), e;
        },
        elementFromPoint: function(e, t) {
            return g(this, this, e, t);
        },
        importNode: function(e, t) {
            return w(e, t, O(this));
        },
        getSelection: function() {
            return T(), new p(H.call(_(this)));
        },
        getElementsByName: function(e) {
            return f.querySelectorAll.call(this, "[name=" + JSON.stringify(String(e)) + "]");
        }
    }), document.registerElement) {
        var x = document.registerElement;
        t.prototype.registerElement = function(t, n) {
            function r(e) {
                return e ? void L(e, this) : i ? document.createElement(i, t) : document.createElement(t);
            }
            var o, i;
            if (void 0 !== n && (o = n.prototype, i = n["extends"]), o || (o = Object.create(HTMLElement.prototype)), 
            e.nativePrototypeTable.get(o)) throw new Error("NotSupportedError");
            for (var a, s = Object.getPrototypeOf(o), c = []; s && !(a = e.nativePrototypeTable.get(s)); ) c.push(s), 
            s = Object.getPrototypeOf(s);
            if (!a) throw new Error("NotSupportedError");
            for (var l = Object.create(a), u = c.length - 1; u >= 0; u--) l = Object.create(l);
            [ "createdCallback", "attachedCallback", "detachedCallback", "attributeChangedCallback" ].forEach(function(e) {
                var t = o[e];
                t && (l[e] = function() {
                    N(this) instanceof r || M(this), t.apply(N(this), arguments);
                });
            });
            var d = {
                prototype: l
            };
            i && (d["extends"] = i), r.prototype = o, r.prototype.constructor = r, e.constructorTable.set(l, r), 
            e.nativePrototypeTable.set(o, l);
            x.call(_(this), t, d);
            return r;
        }, b([ window.HTMLDocument || window.Document ], [ "registerElement" ]);
    }
    b([ window.HTMLBodyElement, window.HTMLDocument || window.Document, window.HTMLHeadElement, window.HTMLHtmlElement ], [ "appendChild", "compareDocumentPosition", "contains", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "insertBefore", "querySelector", "querySelectorAll", "removeChild", "replaceChild" ]), 
    b([ window.HTMLBodyElement, window.HTMLHeadElement, window.HTMLHtmlElement ], y), 
    b([ window.HTMLDocument || window.Document ], [ "adoptNode", "importNode", "contains", "createComment", "createDocumentFragment", "createElement", "createElementNS", "createEvent", "createEventNS", "createRange", "createTextNode", "elementFromPoint", "getElementById", "getElementsByName", "getSelection" ]), 
    E(t.prototype, l), E(t.prototype, d), E(t.prototype, f), E(t.prototype, {
        get implementation() {
            var e = D.get(this);
            return e ? e : (e = new a(_(this).implementation), D.set(this, e), e);
        },
        get defaultView() {
            return N(_(this).defaultView);
        }
    }), S(window.Document, t, document.implementation.createHTMLDocument("")), window.HTMLDocument && S(window.HTMLDocument, t), 
    C([ window.HTMLBodyElement, window.HTMLDocument || window.Document, window.HTMLHeadElement ]), 
    s(a, "createDocumentType"), s(a, "createDocument"), s(a, "createHTMLDocument"), 
    c(a, "hasFeature"), S(window.DOMImplementation, a), b([ window.DOMImplementation ], [ "createDocumentType", "createDocument", "createHTMLDocument", "hasFeature" ]), 
    e.adoptNodeNoRemove = r, e.wrappers.DOMImplementation = a, e.wrappers.Document = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        n.call(this, e);
    }
    var n = e.wrappers.EventTarget, r = e.wrappers.Selection, o = e.mixin, i = e.registerWrapper, a = e.renderAllPending, s = e.unwrap, c = e.unwrapIfNeeded, l = e.wrap, u = window.Window, d = window.getComputedStyle, p = window.getDefaultComputedStyle, f = window.getSelection;
    t.prototype = Object.create(n.prototype), u.prototype.getComputedStyle = function(e, t) {
        return l(this || window).getComputedStyle(c(e), t);
    }, p && (u.prototype.getDefaultComputedStyle = function(e, t) {
        return l(this || window).getDefaultComputedStyle(c(e), t);
    }), u.prototype.getSelection = function() {
        return l(this || window).getSelection();
    }, delete window.getComputedStyle, delete window.getDefaultComputedStyle, delete window.getSelection, 
    [ "addEventListener", "removeEventListener", "dispatchEvent" ].forEach(function(e) {
        u.prototype[e] = function() {
            var t = l(this || window);
            return t[e].apply(t, arguments);
        }, delete window[e];
    }), o(t.prototype, {
        getComputedStyle: function(e, t) {
            return a(), d.call(s(this), c(e), t);
        },
        getSelection: function() {
            return a(), new r(f.call(s(this)));
        },
        get document() {
            return l(s(this).document);
        }
    }), p && (t.prototype.getDefaultComputedStyle = function(e, t) {
        return a(), p.call(s(this), c(e), t);
    }), i(u, t, window), e.wrappers.Window = t;
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    var t = e.unwrap, n = window.DataTransfer || window.Clipboard, r = n.prototype.setDragImage;
    r && (n.prototype.setDragImage = function(e, n, o) {
        r.call(this, t(e), n, o);
    });
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        var t;
        t = e instanceof i ? e : new i(e && o(e)), r(t, this);
    }
    var n = e.registerWrapper, r = e.setWrapper, o = e.unwrap, i = window.FormData;
    i && (n(i, t, new i()), e.wrappers.FormData = t);
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    var t = e.unwrapIfNeeded, n = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(e) {
        return n.call(this, t(e));
    };
}(window.ShadowDOMPolyfill), function(e) {
    "use strict";
    function t(e) {
        var t = n[e], r = window[t];
        if (r) {
            var o = document.createElement(e), i = o.constructor;
            window[t] = i;
        }
    }
    var n = (e.isWrapperFor, {
        a: "HTMLAnchorElement",
        area: "HTMLAreaElement",
        audio: "HTMLAudioElement",
        base: "HTMLBaseElement",
        body: "HTMLBodyElement",
        br: "HTMLBRElement",
        button: "HTMLButtonElement",
        canvas: "HTMLCanvasElement",
        caption: "HTMLTableCaptionElement",
        col: "HTMLTableColElement",
        content: "HTMLContentElement",
        data: "HTMLDataElement",
        datalist: "HTMLDataListElement",
        del: "HTMLModElement",
        dir: "HTMLDirectoryElement",
        div: "HTMLDivElement",
        dl: "HTMLDListElement",
        embed: "HTMLEmbedElement",
        fieldset: "HTMLFieldSetElement",
        font: "HTMLFontElement",
        form: "HTMLFormElement",
        frame: "HTMLFrameElement",
        frameset: "HTMLFrameSetElement",
        h1: "HTMLHeadingElement",
        head: "HTMLHeadElement",
        hr: "HTMLHRElement",
        html: "HTMLHtmlElement",
        iframe: "HTMLIFrameElement",
        img: "HTMLImageElement",
        input: "HTMLInputElement",
        keygen: "HTMLKeygenElement",
        label: "HTMLLabelElement",
        legend: "HTMLLegendElement",
        li: "HTMLLIElement",
        link: "HTMLLinkElement",
        map: "HTMLMapElement",
        marquee: "HTMLMarqueeElement",
        menu: "HTMLMenuElement",
        menuitem: "HTMLMenuItemElement",
        meta: "HTMLMetaElement",
        meter: "HTMLMeterElement",
        object: "HTMLObjectElement",
        ol: "HTMLOListElement",
        optgroup: "HTMLOptGroupElement",
        option: "HTMLOptionElement",
        output: "HTMLOutputElement",
        p: "HTMLParagraphElement",
        param: "HTMLParamElement",
        pre: "HTMLPreElement",
        progress: "HTMLProgressElement",
        q: "HTMLQuoteElement",
        script: "HTMLScriptElement",
        select: "HTMLSelectElement",
        shadow: "HTMLShadowElement",
        source: "HTMLSourceElement",
        span: "HTMLSpanElement",
        style: "HTMLStyleElement",
        table: "HTMLTableElement",
        tbody: "HTMLTableSectionElement",
        template: "HTMLTemplateElement",
        textarea: "HTMLTextAreaElement",
        thead: "HTMLTableSectionElement",
        time: "HTMLTimeElement",
        title: "HTMLTitleElement",
        tr: "HTMLTableRowElement",
        track: "HTMLTrackElement",
        ul: "HTMLUListElement",
        video: "HTMLVideoElement"
    });
    Object.keys(n).forEach(t), Object.getOwnPropertyNames(e.wrappers).forEach(function(t) {
        window[t] = e.wrappers[t];
    });
}(window.ShadowDOMPolyfill), function(e) {
    function t(e, t) {
        var n = "";
        return Array.prototype.forEach.call(e, function(e) {
            n += e.textContent + "\n\n";
        }), t || (n = n.replace(d, "")), n;
    }
    function n(e) {
        var t = document.createElement("style");
        return t.textContent = e, t;
    }
    function r(e) {
        var t = n(e);
        document.head.appendChild(t);
        var r = [];
        if (t.sheet) try {
            r = t.sheet.cssRules;
        } catch (o) {} else console.warn("sheet not found", t);
        return t.parentNode.removeChild(t), r;
    }
    function o() {
        C.initialized = !0, document.body.appendChild(C);
        var e = C.contentDocument, t = e.createElement("base");
        t.href = document.baseURI, e.head.appendChild(t);
    }
    function i(e) {
        C.initialized || o(), document.body.appendChild(C), e(C.contentDocument), document.body.removeChild(C);
    }
    function a(e, t) {
        if (t) {
            var o;
            if (e.match("@import") && j) {
                var a = n(e);
                i(function(e) {
                    e.head.appendChild(a.impl), o = Array.prototype.slice.call(a.sheet.cssRules, 0), 
                    t(o);
                });
            } else o = r(e), t(o);
        }
    }
    function s(e) {
        e && l().appendChild(document.createTextNode(e));
    }
    function c(e, t) {
        var r = n(e);
        r.setAttribute(t, ""), r.setAttribute(x, ""), document.head.appendChild(r);
    }
    function l() {
        return D || (D = document.createElement("style"), D.setAttribute(x, ""), D[x] = !0), 
        D;
    }
    var u = {
        strictStyling: !1,
        registry: {},
        shimStyling: function(e, n, r) {
            var o = this.prepareRoot(e, n, r), i = this.isTypeExtension(r), a = this.makeScopeSelector(n, i), s = t(o, !0);
            s = this.scopeCssText(s, a), e && (e.shimmedStyle = s), this.addCssToDocument(s, n);
        },
        shimStyle: function(e, t) {
            return this.shimCssText(e.textContent, t);
        },
        shimCssText: function(e, t) {
            return e = this.insertDirectives(e), this.scopeCssText(e, t);
        },
        makeScopeSelector: function(e, t) {
            return e ? t ? "[is=" + e + "]" : e : "";
        },
        isTypeExtension: function(e) {
            return e && e.indexOf("-") < 0;
        },
        prepareRoot: function(e, t, n) {
            var r = this.registerRoot(e, t, n);
            return this.replaceTextInStyles(r.rootStyles, this.insertDirectives), this.removeStyles(e, r.rootStyles), 
            this.strictStyling && this.applyScopeToContent(e, t), r.scopeStyles;
        },
        removeStyles: function(e, t) {
            for (var n, r = 0, o = t.length; o > r && (n = t[r]); r++) n.parentNode.removeChild(n);
        },
        registerRoot: function(e, t, n) {
            var r = this.registry[t] = {
                root: e,
                name: t,
                extendsName: n
            }, o = this.findStyles(e);
            r.rootStyles = o, r.scopeStyles = r.rootStyles;
            var i = this.registry[r.extendsName];
            return i && (r.scopeStyles = i.scopeStyles.concat(r.scopeStyles)), r;
        },
        findStyles: function(e) {
            if (!e) return [];
            var t = e.querySelectorAll("style");
            return Array.prototype.filter.call(t, function(e) {
                return !e.hasAttribute(R);
            });
        },
        applyScopeToContent: function(e, t) {
            e && (Array.prototype.forEach.call(e.querySelectorAll("*"), function(e) {
                e.setAttribute(t, "");
            }), Array.prototype.forEach.call(e.querySelectorAll("template"), function(e) {
                this.applyScopeToContent(e.content, t);
            }, this));
        },
        insertDirectives: function(e) {
            return e = this.insertPolyfillDirectivesInCssText(e), this.insertPolyfillRulesInCssText(e);
        },
        insertPolyfillDirectivesInCssText: function(e) {
            return e = e.replace(p, function(e, t) {
                return t.slice(0, -2) + "{";
            }), e.replace(f, function(e, t) {
                return t + " {";
            });
        },
        insertPolyfillRulesInCssText: function(e) {
            return e = e.replace(h, function(e, t) {
                return t.slice(0, -1);
            }), e.replace(m, function(e, t, n, r) {
                var o = e.replace(t, "").replace(n, "");
                return r + o;
            });
        },
        scopeCssText: function(e, t) {
            var n = this.extractUnscopedRulesFromCssText(e);
            if (e = this.insertPolyfillHostInCssText(e), e = this.convertColonHost(e), e = this.convertColonHostContext(e), 
            e = this.convertShadowDOMSelectors(e), t) {
                var e, r = this;
                a(e, function(n) {
                    e = r.scopeRules(n, t);
                });
            }
            return e = e + "\n" + n, e.trim();
        },
        extractUnscopedRulesFromCssText: function(e) {
            for (var t, n = ""; t = w.exec(e); ) n += t[1].slice(0, -1) + "\n\n";
            for (;t = v.exec(e); ) n += t[0].replace(t[2], "").replace(t[1], t[3]) + "\n\n";
            return n;
        },
        convertColonHost: function(e) {
            return this.convertColonRule(e, E, this.colonHostPartReplacer);
        },
        convertColonHostContext: function(e) {
            return this.convertColonRule(e, S, this.colonHostContextPartReplacer);
        },
        convertColonRule: function(e, t, n) {
            return e.replace(t, function(e, t, r, o) {
                if (t = O, r) {
                    for (var i, a = r.split(","), s = [], c = 0, l = a.length; l > c && (i = a[c]); c++) i = i.trim(), 
                    s.push(n(t, i, o));
                    return s.join(",");
                }
                return t + o;
            });
        },
        colonHostContextPartReplacer: function(e, t, n) {
            return t.match(g) ? this.colonHostPartReplacer(e, t, n) : e + t + n + ", " + t + " " + e + n;
        },
        colonHostPartReplacer: function(e, t, n) {
            return e + t.replace(g, "") + n;
        },
        convertShadowDOMSelectors: function(e) {
            for (var t = 0; t < N.length; t++) e = e.replace(N[t], " ");
            return e;
        },
        scopeRules: function(e, t) {
            var n = "";
            return e && Array.prototype.forEach.call(e, function(e) {
                if (e.selectorText && e.style && void 0 !== e.style.cssText) n += this.scopeSelector(e.selectorText, t, this.strictStyling) + " {\n	", 
                n += this.propertiesFromRule(e) + "\n}\n\n"; else if (e.type === CSSRule.MEDIA_RULE) n += "@media " + e.media.mediaText + " {\n", 
                n += this.scopeRules(e.cssRules, t), n += "\n}\n\n"; else try {
                    e.cssText && (n += e.cssText + "\n\n");
                } catch (r) {
                    e.type === CSSRule.KEYFRAMES_RULE && e.cssRules && (n += this.ieSafeCssTextFromKeyFrameRule(e));
                }
            }, this), n;
        },
        ieSafeCssTextFromKeyFrameRule: function(e) {
            var t = "@keyframes " + e.name + " {";
            return Array.prototype.forEach.call(e.cssRules, function(e) {
                t += " " + e.keyText + " {" + e.style.cssText + "}";
            }), t += " }";
        },
        scopeSelector: function(e, t, n) {
            var r = [], o = e.split(",");
            return o.forEach(function(e) {
                e = e.trim(), this.selectorNeedsScoping(e, t) && (e = n && !e.match(O) ? this.applyStrictSelectorScope(e, t) : this.applySelectorScope(e, t)), 
                r.push(e);
            }, this), r.join(", ");
        },
        selectorNeedsScoping: function(e, t) {
            if (Array.isArray(t)) return !0;
            var n = this.makeScopeMatcher(t);
            return !e.match(n);
        },
        makeScopeMatcher: function(e) {
            return e = e.replace(/\[/g, "\\[").replace(/\[/g, "\\]"), new RegExp("^(" + e + ")" + T, "m");
        },
        applySelectorScope: function(e, t) {
            return Array.isArray(t) ? this.applySelectorScopeList(e, t) : this.applySimpleSelectorScope(e, t);
        },
        applySelectorScopeList: function(e, t) {
            for (var n, r = [], o = 0; n = t[o]; o++) r.push(this.applySimpleSelectorScope(e, n));
            return r.join(", ");
        },
        applySimpleSelectorScope: function(e, t) {
            return e.match(_) ? (e = e.replace(O, t), e.replace(_, t + " ")) : t + " " + e;
        },
        applyStrictSelectorScope: function(e, t) {
            t = t.replace(/\[is=([^\]]*)\]/g, "$1");
            var n = [ " ", ">", "+", "~" ], r = e, o = "[" + t + "]";
            return n.forEach(function(e) {
                var t = r.split(e);
                r = t.map(function(e) {
                    var t = e.trim().replace(_, "");
                    return t && n.indexOf(t) < 0 && t.indexOf(o) < 0 && (e = t.replace(/([^:]*)(:*)(.*)/, "$1" + o + "$2$3")), 
                    e;
                }).join(e);
            }), r;
        },
        insertPolyfillHostInCssText: function(e) {
            return e.replace(L, b).replace(M, g);
        },
        propertiesFromRule: function(e) {
            var t = e.style.cssText;
            e.style.content && !e.style.content.match(/['"]+|attr/) && (t = t.replace(/content:[^;]*;/g, "content: '" + e.style.content + "';"));
            var n = e.style;
            for (var r in n) "initial" === n[r] && (t += r + ": initial; ");
            return t;
        },
        replaceTextInStyles: function(e, t) {
            e && t && (e instanceof Array || (e = [ e ]), Array.prototype.forEach.call(e, function(e) {
                e.textContent = t.call(this, e.textContent);
            }, this));
        },
        addCssToDocument: function(e, t) {
            e.match("@import") ? c(e, t) : s(e);
        }
    }, d = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, p = /\/\*\s*@polyfill ([^*]*\*+([^/*][^*]*\*+)*\/)([^{]*?){/gim, f = /polyfill-next-selector[^}]*content\:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim, h = /\/\*\s@polyfill-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim, m = /(polyfill-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim, w = /\/\*\s@polyfill-unscoped-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim, v = /(polyfill-unscoped-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim, g = "-shadowcsshost", b = "-shadowcsscontext", y = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)", E = new RegExp("(" + g + y, "gim"), S = new RegExp("(" + b + y, "gim"), T = "([>\\s~+[.,{:][\\s\\S]*)?$", M = /\:host/gim, L = /\:host-context/gim, O = g + "-no-combinator", _ = new RegExp(g, "gim"), N = (new RegExp(b, "gim"), 
    [ /\^\^/g, /\^/g, /\/shadow\//g, /\/shadow-deep\//g, /::shadow/g, /\/deep\//g, /::content/g ]), C = document.createElement("iframe");
    C.style.display = "none";
    var D, j = navigator.userAgent.match("Chrome"), H = "shim-shadowdom", x = "shim-shadowdom-css", R = "no-shim";
    if (window.ShadowDOMPolyfill) {
        s("style { display: none !important; }\n");
        var P = ShadowDOMPolyfill.wrap(document), I = P.querySelector("head");
        I.insertBefore(l(), I.childNodes[0]), document.addEventListener("DOMContentLoaded", function() {
            e.urlResolver;
            if (window.HTMLImports && !HTMLImports.useNative) {
                var t = "link[rel=stylesheet][" + H + "]", n = "style[" + H + "]";
                HTMLImports.importer.documentPreloadSelectors += "," + t, HTMLImports.importer.importsPreloadSelectors += "," + t, 
                HTMLImports.parser.documentSelectors = [ HTMLImports.parser.documentSelectors, t, n ].join(",");
                var r = HTMLImports.parser.parseGeneric;
                HTMLImports.parser.parseGeneric = function(e) {
                    if (!e[x]) {
                        var t = e.__importElement || e;
                        if (!t.hasAttribute(H)) return void r.call(this, e);
                        e.__resource && (t = e.ownerDocument.createElement("style"), t.textContent = e.__resource), 
                        HTMLImports.path.resolveUrlsInStyle(t), t.textContent = u.shimStyle(t), t.removeAttribute(H, ""), 
                        t.setAttribute(x, ""), t[x] = !0, t.parentNode !== I && (e.parentNode === I ? I.replaceChild(t, e) : this.addElementToDocument(t)), 
                        t.__importParsed = !0, this.markParsingComplete(e), this.parseNext();
                    }
                };
                var o = HTMLImports.parser.hasResource;
                HTMLImports.parser.hasResource = function(e) {
                    return "link" === e.localName && "stylesheet" === e.rel && e.hasAttribute(H) ? e.__resource : o.call(this, e);
                };
            }
        });
    }
    e.ShadowCSS = u;
}(window.WebComponents)), function() {
    window.ShadowDOMPolyfill ? (window.wrap = ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function(e) {
        return e;
    };
}(window.WebComponents), function(e) {
    function t(e) {
        y.push(e), b || (b = !0, m(r));
    }
    function n(e) {
        return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(e) || e;
    }
    function r() {
        b = !1;
        var e = y;
        y = [], e.sort(function(e, t) {
            return e.uid_ - t.uid_;
        });
        var t = !1;
        e.forEach(function(e) {
            var n = e.takeRecords();
            o(e), n.length && (e.callback_(n, e), t = !0);
        }), t && r();
    }
    function o(e) {
        e.nodes_.forEach(function(t) {
            var n = w.get(t);
            n && n.forEach(function(t) {
                t.observer === e && t.removeTransientObservers();
            });
        });
    }
    function i(e, t) {
        for (var n = e; n; n = n.parentNode) {
            var r = w.get(n);
            if (r) for (var o = 0; o < r.length; o++) {
                var i = r[o], a = i.options;
                if (n === e || a.subtree) {
                    var s = t(a);
                    s && i.enqueue(s);
                }
            }
        }
    }
    function a(e) {
        this.callback_ = e, this.nodes_ = [], this.records_ = [], this.uid_ = ++E;
    }
    function s(e, t) {
        this.type = e, this.target = t, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, 
        this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, 
        this.oldValue = null;
    }
    function c(e) {
        var t = new s(e.type, e.target);
        return t.addedNodes = e.addedNodes.slice(), t.removedNodes = e.removedNodes.slice(), 
        t.previousSibling = e.previousSibling, t.nextSibling = e.nextSibling, t.attributeName = e.attributeName, 
        t.attributeNamespace = e.attributeNamespace, t.oldValue = e.oldValue, t;
    }
    function l(e, t) {
        return S = new s(e, t);
    }
    function u(e) {
        return T ? T : (T = c(S), T.oldValue = e, T);
    }
    function d() {
        S = T = void 0;
    }
    function p(e) {
        return e === T || e === S;
    }
    function f(e, t) {
        return e === t ? e : T && p(e) ? T : null;
    }
    function h(e, t, n) {
        this.observer = e, this.target = t, this.options = n, this.transientObservedNodes = [];
    }
    var m, w = new WeakMap();
    if (/Trident|Edge/.test(navigator.userAgent)) m = setTimeout; else if (window.setImmediate) m = window.setImmediate; else {
        var v = [], g = String(Math.random());
        window.addEventListener("message", function(e) {
            if (e.data === g) {
                var t = v;
                v = [], t.forEach(function(e) {
                    e();
                });
            }
        }), m = function(e) {
            v.push(e), window.postMessage(g, "*");
        };
    }
    var b = !1, y = [], E = 0;
    a.prototype = {
        observe: function(e, t) {
            if (e = n(e), !t.childList && !t.attributes && !t.characterData || t.attributeOldValue && !t.attributes || t.attributeFilter && t.attributeFilter.length && !t.attributes || t.characterDataOldValue && !t.characterData) throw new SyntaxError();
            var r = w.get(e);
            r || w.set(e, r = []);
            for (var o, i = 0; i < r.length; i++) if (r[i].observer === this) {
                o = r[i], o.removeListeners(), o.options = t;
                break;
            }
            o || (o = new h(this, e, t), r.push(o), this.nodes_.push(e)), o.addListeners();
        },
        disconnect: function() {
            this.nodes_.forEach(function(e) {
                for (var t = w.get(e), n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (r.observer === this) {
                        r.removeListeners(), t.splice(n, 1);
                        break;
                    }
                }
            }, this), this.records_ = [];
        },
        takeRecords: function() {
            var e = this.records_;
            return this.records_ = [], e;
        }
    };
    var S, T;
    h.prototype = {
        enqueue: function(e) {
            var n = this.observer.records_, r = n.length;
            if (n.length > 0) {
                var o = n[r - 1], i = f(o, e);
                if (i) return void (n[r - 1] = i);
            } else t(this.observer);
            n[r] = e;
        },
        addListeners: function() {
            this.addListeners_(this.target);
        },
        addListeners_: function(e) {
            var t = this.options;
            t.attributes && e.addEventListener("DOMAttrModified", this, !0), t.characterData && e.addEventListener("DOMCharacterDataModified", this, !0), 
            t.childList && e.addEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.addEventListener("DOMNodeRemoved", this, !0);
        },
        removeListeners: function() {
            this.removeListeners_(this.target);
        },
        removeListeners_: function(e) {
            var t = this.options;
            t.attributes && e.removeEventListener("DOMAttrModified", this, !0), t.characterData && e.removeEventListener("DOMCharacterDataModified", this, !0), 
            t.childList && e.removeEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.removeEventListener("DOMNodeRemoved", this, !0);
        },
        addTransientObserver: function(e) {
            if (e !== this.target) {
                this.addListeners_(e), this.transientObservedNodes.push(e);
                var t = w.get(e);
                t || w.set(e, t = []), t.push(this);
            }
        },
        removeTransientObservers: function() {
            var e = this.transientObservedNodes;
            this.transientObservedNodes = [], e.forEach(function(e) {
                this.removeListeners_(e);
                for (var t = w.get(e), n = 0; n < t.length; n++) if (t[n] === this) {
                    t.splice(n, 1);
                    break;
                }
            }, this);
        },
        handleEvent: function(e) {
            switch (e.stopImmediatePropagation(), e.type) {
              case "DOMAttrModified":
                var t = e.attrName, n = e.relatedNode.namespaceURI, r = e.target, o = new l("attributes", r);
                o.attributeName = t, o.attributeNamespace = n;
                var a = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
                i(r, function(e) {
                    return !e.attributes || e.attributeFilter && e.attributeFilter.length && -1 === e.attributeFilter.indexOf(t) && -1 === e.attributeFilter.indexOf(n) ? void 0 : e.attributeOldValue ? u(a) : o;
                });
                break;

              case "DOMCharacterDataModified":
                var r = e.target, o = l("characterData", r), a = e.prevValue;
                i(r, function(e) {
                    return e.characterData ? e.characterDataOldValue ? u(a) : o : void 0;
                });
                break;

              case "DOMNodeRemoved":
                this.addTransientObserver(e.target);

              case "DOMNodeInserted":
                var s, c, r = e.relatedNode, p = e.target;
                "DOMNodeInserted" === e.type ? (s = [ p ], c = []) : (s = [], c = [ p ]);
                var f = p.previousSibling, h = p.nextSibling, o = l("childList", r);
                o.addedNodes = s, o.removedNodes = c, o.previousSibling = f, o.nextSibling = h, 
                i(r, function(e) {
                    return e.childList ? o : void 0;
                });
            }
            d();
        }
    }, e.JsMutationObserver = a, e.MutationObserver || (e.MutationObserver = a);
}(this), window.HTMLImports = window.HTMLImports || {
    flags: {}
}, function(e) {
    function t(e, t) {
        t = t || h, r(function() {
            i(e, t);
        }, t);
    }
    function n(e) {
        return "complete" === e.readyState || e.readyState === v;
    }
    function r(e, t) {
        if (n(t)) e && e(); else {
            var o = function() {
                ("complete" === t.readyState || t.readyState === v) && (t.removeEventListener(g, o), 
                r(e, t));
            };
            t.addEventListener(g, o);
        }
    }
    function o(e) {
        e.target.__loaded = !0;
    }
    function i(e, t) {
        function n() {
            s == c && e && e();
        }
        function r(e) {
            o(e), s++, n();
        }
        var i = t.querySelectorAll("link[rel=import]"), s = 0, c = i.length;
        if (c) for (var l, u = 0; c > u && (l = i[u]); u++) a(l) ? r.call(l, {
            target: l
        }) : (l.addEventListener("load", r), l.addEventListener("error", r)); else n();
    }
    function a(e) {
        return d ? e.__loaded || e["import"] && "loading" !== e["import"].readyState : e.__importParsed;
    }
    function s(e) {
        for (var t, n = 0, r = e.length; r > n && (t = e[n]); n++) c(t) && l(t);
    }
    function c(e) {
        return "link" === e.localName && "import" === e.rel;
    }
    function l(e) {
        var t = e["import"];
        t ? o({
            target: e
        }) : (e.addEventListener("load", o), e.addEventListener("error", o));
    }
    var u = "import", d = Boolean(u in document.createElement("link")), p = Boolean(window.ShadowDOMPolyfill), f = function(e) {
        return p ? ShadowDOMPolyfill.wrapIfNeeded(e) : e;
    }, h = f(document), m = {
        get: function() {
            var e = HTMLImports.currentScript || document.currentScript || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
            return f(e);
        },
        configurable: !0
    };
    Object.defineProperty(document, "_currentScript", m), Object.defineProperty(h, "_currentScript", m);
    var w = /Trident|Edge/.test(navigator.userAgent), v = w ? "complete" : "interactive", g = "readystatechange";
    d && (new MutationObserver(function(e) {
        for (var t, n = 0, r = e.length; r > n && (t = e[n]); n++) t.addedNodes && s(t.addedNodes);
    }).observe(document.head, {
        childList: !0
    }), function() {
        if ("loading" === document.readyState) for (var e, t = document.querySelectorAll("link[rel=import]"), n = 0, r = t.length; r > n && (e = t[n]); n++) l(e);
    }()), t(function() {
        HTMLImports.ready = !0, HTMLImports.readyTime = new Date().getTime();
        var e = h.createEvent("CustomEvent");
        e.initCustomEvent("HTMLImportsLoaded", !0, !0, {}), h.dispatchEvent(e);
    }), e.IMPORT_LINK_TYPE = u, e.useNative = d, e.rootDocument = h, e.whenReady = t, 
    e.isIE = w;
}(HTMLImports), function(e) {
    var t = [], n = function(e) {
        t.push(e);
    }, r = function() {
        t.forEach(function(t) {
            t(e);
        });
    };
    e.addModule = n, e.initializeModules = r;
}(HTMLImports), HTMLImports.addModule(function(e) {
    var t = /(url\()([^)]*)(\))/g, n = /(@import[\s]+(?!url\())([^;]*)(;)/g, r = {
        resolveUrlsInStyle: function(e) {
            var t = e.ownerDocument, n = t.createElement("a");
            return e.textContent = this.resolveUrlsInCssText(e.textContent, n), e;
        },
        resolveUrlsInCssText: function(e, r) {
            var o = this.replaceUrls(e, r, t);
            return o = this.replaceUrls(o, r, n);
        },
        replaceUrls: function(e, t, n) {
            return e.replace(n, function(e, n, r, o) {
                var i = r.replace(/["']/g, "");
                return t.href = i, i = t.href, n + "'" + i + "'" + o;
            });
        }
    };
    e.path = r;
}), HTMLImports.addModule(function(e) {
    var t = {
        async: !0,
        ok: function(e) {
            return e.status >= 200 && e.status < 300 || 304 === e.status || 0 === e.status;
        },
        load: function(n, r, o) {
            var i = new XMLHttpRequest();
            return (e.flags.debug || e.flags.bust) && (n += "?" + Math.random()), i.open("GET", n, t.async), 
            i.addEventListener("readystatechange", function() {
                if (4 === i.readyState) {
                    var e = i.getResponseHeader("Location"), n = null;
                    if (e) var n = "/" === e.substr(0, 1) ? location.origin + e : e;
                    r.call(o, !t.ok(i) && i, i.response || i.responseText, n);
                }
            }), i.send(), i;
        },
        loadDocument: function(e, t, n) {
            this.load(e, t, n).responseType = "document";
        }
    };
    e.xhr = t;
}), HTMLImports.addModule(function(e) {
    var t = e.xhr, n = e.flags, r = function(e, t) {
        this.cache = {}, this.onload = e, this.oncomplete = t, this.inflight = 0, this.pending = {};
    };
    r.prototype = {
        addNodes: function(e) {
            this.inflight += e.length;
            for (var t, n = 0, r = e.length; r > n && (t = e[n]); n++) this.require(t);
            this.checkDone();
        },
        addNode: function(e) {
            this.inflight++, this.require(e), this.checkDone();
        },
        require: function(e) {
            var t = e.src || e.href;
            e.__nodeUrl = t, this.dedupe(t, e) || this.fetch(t, e);
        },
        dedupe: function(e, t) {
            if (this.pending[e]) return this.pending[e].push(t), !0;
            return this.cache[e] ? (this.onload(e, t, this.cache[e]), this.tail(), !0) : (this.pending[e] = [ t ], 
            !1);
        },
        fetch: function(e, r) {
            if (n.load && console.log("fetch", e, r), e) if (e.match(/^data:/)) {
                var o = e.split(","), i = o[0], a = o[1];
                a = i.indexOf(";base64") > -1 ? atob(a) : decodeURIComponent(a), setTimeout(function() {
                    this.receive(e, r, null, a);
                }.bind(this), 0);
            } else {
                var s = function(t, n, o) {
                    this.receive(e, r, t, n, o);
                }.bind(this);
                t.load(e, s);
            } else setTimeout(function() {
                this.receive(e, r, {
                    error: "href must be specified"
                }, null);
            }.bind(this), 0);
        },
        receive: function(e, t, n, r, o) {
            this.cache[e] = r;
            for (var i, a = this.pending[e], s = 0, c = a.length; c > s && (i = a[s]); s++) this.onload(e, i, r, n, o), 
            this.tail();
            this.pending[e] = null;
        },
        tail: function() {
            --this.inflight, this.checkDone();
        },
        checkDone: function() {
            this.inflight || this.oncomplete();
        }
    }, e.Loader = r;
}), HTMLImports.addModule(function(e) {
    var t = function(e) {
        this.addCallback = e, this.mo = new MutationObserver(this.handler.bind(this));
    };
    t.prototype = {
        handler: function(e) {
            for (var t, n = 0, r = e.length; r > n && (t = e[n]); n++) "childList" === t.type && t.addedNodes.length && this.addedNodes(t.addedNodes);
        },
        addedNodes: function(e) {
            this.addCallback && this.addCallback(e);
            for (var t, n = 0, r = e.length; r > n && (t = e[n]); n++) t.children && t.children.length && this.addedNodes(t.children);
        },
        observe: function(e) {
            this.mo.observe(e, {
                childList: !0,
                subtree: !0
            });
        }
    }, e.Observer = t;
}), HTMLImports.addModule(function(e) {
    function t(e) {
        return "link" === e.localName && e.rel === u;
    }
    function n(e) {
        var t = r(e);
        return "data:text/javascript;charset=utf-8," + encodeURIComponent(t);
    }
    function r(e) {
        return e.textContent + o(e);
    }
    function o(e) {
        var t = e.ownerDocument;
        t.__importedScripts = t.__importedScripts || 0;
        var n = e.ownerDocument.baseURI, r = t.__importedScripts ? "-" + t.__importedScripts : "";
        return t.__importedScripts++, "\n//# sourceURL=" + n + r + ".js\n";
    }
    function i(e) {
        var t = e.ownerDocument.createElement("style");
        return t.textContent = e.textContent, a.resolveUrlsInStyle(t), t;
    }
    var a = e.path, s = e.rootDocument, c = e.flags, l = e.isIE, u = e.IMPORT_LINK_TYPE, d = "link[rel=" + u + "]", p = {
        documentSelectors: d,
        importsSelectors: [ d, "link[rel=stylesheet]", "style", "script:not([type])", 'script[type="text/javascript"]' ].join(","),
        map: {
            link: "parseLink",
            script: "parseScript",
            style: "parseStyle"
        },
        dynamicElements: [],
        parseNext: function() {
            var e = this.nextToParse();
            e && this.parse(e);
        },
        parse: function(e) {
            if (this.isParsed(e)) return void (c.parse && console.log("[%s] is already parsed", e.localName));
            var t = this[this.map[e.localName]];
            t && (this.markParsing(e), t.call(this, e));
        },
        parseDynamic: function(e, t) {
            this.dynamicElements.push(e), t || this.parseNext();
        },
        markParsing: function(e) {
            c.parse && console.log("parsing", e), this.parsingElement = e;
        },
        markParsingComplete: function(e) {
            e.__importParsed = !0, this.markDynamicParsingComplete(e), e.__importElement && (e.__importElement.__importParsed = !0, 
            this.markDynamicParsingComplete(e.__importElement)), this.parsingElement = null, 
            c.parse && console.log("completed", e);
        },
        markDynamicParsingComplete: function(e) {
            var t = this.dynamicElements.indexOf(e);
            t >= 0 && this.dynamicElements.splice(t, 1);
        },
        parseImport: function(e) {
            if (HTMLImports.__importsParsingHook && HTMLImports.__importsParsingHook(e), e["import"] && (e["import"].__importParsed = !0), 
            this.markParsingComplete(e), e.dispatchEvent(e.__resource && !e.__error ? new CustomEvent("load", {
                bubbles: !1
            }) : new CustomEvent("error", {
                bubbles: !1
            })), e.__pending) for (var t; e.__pending.length; ) t = e.__pending.shift(), t && t({
                target: e
            });
            this.parseNext();
        },
        parseLink: function(e) {
            t(e) ? this.parseImport(e) : (e.href = e.href, this.parseGeneric(e));
        },
        parseStyle: function(e) {
            var t = e;
            e = i(e), e.__importElement = t, this.parseGeneric(e);
        },
        parseGeneric: function(e) {
            this.trackElement(e), this.addElementToDocument(e);
        },
        rootImportForElement: function(e) {
            for (var t = e; t.ownerDocument.__importLink; ) t = t.ownerDocument.__importLink;
            return t;
        },
        addElementToDocument: function(e) {
            var t = this.rootImportForElement(e.__importElement || e);
            t.parentNode.insertBefore(e, t);
        },
        trackElement: function(e, t) {
            var n = this, r = function(r) {
                t && t(r), n.markParsingComplete(e), n.parseNext();
            };
            if (e.addEventListener("load", r), e.addEventListener("error", r), l && "style" === e.localName) {
                var o = !1;
                if (-1 == e.textContent.indexOf("@import")) o = !0; else if (e.sheet) {
                    o = !0;
                    for (var i, a = e.sheet.cssRules, s = a ? a.length : 0, c = 0; s > c && (i = a[c]); c++) i.type === CSSRule.IMPORT_RULE && (o = o && Boolean(i.styleSheet));
                }
                o && e.dispatchEvent(new CustomEvent("load", {
                    bubbles: !1
                }));
            }
        },
        parseScript: function(t) {
            var r = document.createElement("script");
            r.__importElement = t, r.src = t.src ? t.src : n(t), e.currentScript = t, this.trackElement(r, function() {
                r.parentNode.removeChild(r), e.currentScript = null;
            }), this.addElementToDocument(r);
        },
        nextToParse: function() {
            return this._mayParse = [], !this.parsingElement && (this.nextToParseInDoc(s) || this.nextToParseDynamic());
        },
        nextToParseInDoc: function(e, n) {
            if (e && this._mayParse.indexOf(e) < 0) {
                this._mayParse.push(e);
                for (var r, o = e.querySelectorAll(this.parseSelectorsForNode(e)), i = 0, a = o.length; a > i && (r = o[i]); i++) if (!this.isParsed(r)) return this.hasResource(r) ? t(r) ? this.nextToParseInDoc(r["import"], r) : r : void 0;
            }
            return n;
        },
        nextToParseDynamic: function() {
            return this.dynamicElements[0];
        },
        parseSelectorsForNode: function(e) {
            var t = e.ownerDocument || e;
            return t === s ? this.documentSelectors : this.importsSelectors;
        },
        isParsed: function(e) {
            return e.__importParsed;
        },
        needsDynamicParsing: function(e) {
            return this.dynamicElements.indexOf(e) >= 0;
        },
        hasResource: function(e) {
            return t(e) && void 0 === e["import"] ? !1 : !0;
        }
    };
    e.parser = p, e.IMPORT_SELECTOR = d;
}), HTMLImports.addModule(function(e) {
    function t(e) {
        return n(e, i);
    }
    function n(e, t) {
        return "link" === e.localName && e.getAttribute("rel") === t;
    }
    function r(e, t) {
        var n = document.implementation.createHTMLDocument(i);
        n._URL = t;
        var r = n.createElement("base");
        r.setAttribute("href", t), n.baseURI || Object.defineProperty(n, "baseURI", {
            value: t
        });
        var o = n.createElement("meta");
        return o.setAttribute("charset", "utf-8"), n.head.appendChild(o), n.head.appendChild(r), 
        n.body.innerHTML = e, window.HTMLTemplateElement && HTMLTemplateElement.bootstrap && HTMLTemplateElement.bootstrap(n), 
        n;
    }
    var o = e.flags, i = e.IMPORT_LINK_TYPE, a = e.IMPORT_SELECTOR, s = e.rootDocument, c = e.Loader, l = e.Observer, u = e.parser, d = {
        documents: {},
        documentPreloadSelectors: a,
        importsPreloadSelectors: [ a ].join(","),
        loadNode: function(e) {
            p.addNode(e);
        },
        loadSubtree: function(e) {
            var t = this.marshalNodes(e);
            p.addNodes(t);
        },
        marshalNodes: function(e) {
            return e.querySelectorAll(this.loadSelectorsForNode(e));
        },
        loadSelectorsForNode: function(e) {
            var t = e.ownerDocument || e;
            return t === s ? this.documentPreloadSelectors : this.importsPreloadSelectors;
        },
        loaded: function(e, n, i, a, s) {
            if (o.load && console.log("loaded", e, n), n.__resource = i, n.__error = a, t(n)) {
                var c = this.documents[e];
                void 0 === c && (c = a ? null : r(i, s || e), c && (c.__importLink = n, this.bootDocument(c)), 
                this.documents[e] = c), n["import"] = c;
            }
            u.parseNext();
        },
        bootDocument: function(e) {
            this.loadSubtree(e), this.observer.observe(e), u.parseNext();
        },
        loadedAll: function() {
            u.parseNext();
        }
    }, p = new c(d.loaded.bind(d), d.loadedAll.bind(d));
    if (d.observer = new l(), !document.baseURI) {
        var f = {
            get: function() {
                var e = document.querySelector("base");
                return e ? e.href : window.location.href;
            },
            configurable: !0
        };
        Object.defineProperty(document, "baseURI", f), Object.defineProperty(s, "baseURI", f);
    }
    e.importer = d, e.importLoader = p;
}), HTMLImports.addModule(function(e) {
    var t = e.parser, n = e.importer, r = {
        added: function(e) {
            for (var r, o, i, a, s = 0, c = e.length; c > s && (a = e[s]); s++) r || (r = a.ownerDocument, 
            o = t.isParsed(r)), i = this.shouldLoadNode(a), i && n.loadNode(a), this.shouldParseNode(a) && o && t.parseDynamic(a, i);
        },
        shouldLoadNode: function(e) {
            return 1 === e.nodeType && o.call(e, n.loadSelectorsForNode(e));
        },
        shouldParseNode: function(e) {
            return 1 === e.nodeType && o.call(e, t.parseSelectorsForNode(e));
        }
    };
    n.observer.addCallback = r.added.bind(r);
    var o = HTMLElement.prototype.matches || HTMLElement.prototype.matchesSelector || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
}), function(e) {
    function t() {
        HTMLImports.importer.bootDocument(o);
    }
    var n = e.initializeModules, r = e.isIE;
    if (!e.useNative) {
        r && "function" != typeof window.CustomEvent && (window.CustomEvent = function(e, t) {
            t = t || {};
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, Boolean(t.bubbles), Boolean(t.cancelable), t.detail), 
            n;
        }, window.CustomEvent.prototype = window.Event.prototype), n();
        var o = e.rootDocument;
        "complete" === document.readyState || "interactive" === document.readyState && !window.attachEvent ? t() : document.addEventListener("DOMContentLoaded", t);
    }
}(HTMLImports), window.CustomElements = window.CustomElements || {
    flags: {}
}, function(e) {
    var t = e.flags, n = [], r = function(e) {
        n.push(e);
    }, o = function() {
        n.forEach(function(t) {
            t(e);
        });
    };
    e.addModule = r, e.initializeModules = o, e.hasNative = Boolean(document.registerElement), 
    e.useNative = !t.register && e.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || HTMLImports.useNative);
}(CustomElements), CustomElements.addModule(function(e) {
    function t(e, t) {
        n(e, function(e) {
            return t(e) ? !0 : void r(e, t);
        }), r(e, t);
    }
    function n(e, t, r) {
        var o = e.firstElementChild;
        if (!o) for (o = e.firstChild; o && o.nodeType !== Node.ELEMENT_NODE; ) o = o.nextSibling;
        for (;o; ) t(o, r) !== !0 && n(o, t, r), o = o.nextElementSibling;
        return null;
    }
    function r(e, n) {
        for (var r = e.shadowRoot; r; ) t(r, n), r = r.olderShadowRoot;
    }
    function o(e, t) {
        a = [], i(e, t), a = null;
    }
    function i(e, t) {
        if (e = wrap(e), !(a.indexOf(e) >= 0)) {
            a.push(e);
            for (var n, r = e.querySelectorAll("link[rel=" + s + "]"), o = 0, c = r.length; c > o && (n = r[o]); o++) n["import"] && i(n["import"], t);
            t(e);
        }
    }
    var a, s = window.HTMLImports ? HTMLImports.IMPORT_LINK_TYPE : "none";
    e.forDocumentTree = o, e.forSubtree = t;
}), CustomElements.addModule(function(e) {
    function t(e) {
        return n(e) || r(e);
    }
    function n(t) {
        return e.upgrade(t) ? !0 : void s(t);
    }
    function r(e) {
        y(e, function(e) {
            return n(e) ? !0 : void 0;
        });
    }
    function o(e) {
        s(e), p(e) && y(e, function(e) {
            s(e);
        });
    }
    function i(e) {
        M.push(e), T || (T = !0, setTimeout(a));
    }
    function a() {
        T = !1;
        for (var e, t = M, n = 0, r = t.length; r > n && (e = t[n]); n++) e();
        M = [];
    }
    function s(e) {
        S ? i(function() {
            c(e);
        }) : c(e);
    }
    function c(e) {
        e.__upgraded__ && (e.attachedCallback || e.detachedCallback) && !e.__attached && p(e) && (e.__attached = !0, 
        e.attachedCallback && e.attachedCallback());
    }
    function l(e) {
        u(e), y(e, function(e) {
            u(e);
        });
    }
    function u(e) {
        S ? i(function() {
            d(e);
        }) : d(e);
    }
    function d(e) {
        e.__upgraded__ && (e.attachedCallback || e.detachedCallback) && e.__attached && !p(e) && (e.__attached = !1, 
        e.detachedCallback && e.detachedCallback());
    }
    function p(e) {
        for (var t = e, n = wrap(document); t; ) {
            if (t == n) return !0;
            t = t.parentNode || t.host;
        }
    }
    function f(e) {
        if (e.shadowRoot && !e.shadowRoot.__watched) {
            b.dom && console.log("watching shadow-root for: ", e.localName);
            for (var t = e.shadowRoot; t; ) w(t), t = t.olderShadowRoot;
        }
    }
    function h(e) {
        if (b.dom) {
            var n = e[0];
            if (n && "childList" === n.type && n.addedNodes && n.addedNodes) {
                for (var r = n.addedNodes[0]; r && r !== document && !r.host; ) r = r.parentNode;
                var o = r && (r.URL || r._URL || r.host && r.host.localName) || "";
                o = o.split("/?").shift().split("/").pop();
            }
            console.group("mutations (%d) [%s]", e.length, o || "");
        }
        e.forEach(function(e) {
            "childList" === e.type && (L(e.addedNodes, function(e) {
                e.localName && t(e);
            }), L(e.removedNodes, function(e) {
                e.localName && l(e);
            }));
        }), b.dom && console.groupEnd();
    }
    function m(e) {
        for (e = wrap(e), e || (e = wrap(document)); e.parentNode; ) e = e.parentNode;
        var t = e.__observer;
        t && (h(t.takeRecords()), a());
    }
    function w(e) {
        if (!e.__observer) {
            var t = new MutationObserver(h);
            t.observe(e, {
                childList: !0,
                subtree: !0
            }), e.__observer = t;
        }
    }
    function v(e) {
        e = wrap(e), b.dom && console.group("upgradeDocument: ", e.baseURI.split("/").pop()), 
        t(e), w(e), b.dom && console.groupEnd();
    }
    function g(e) {
        E(e, v);
    }
    var b = e.flags, y = e.forSubtree, E = e.forDocumentTree, S = !window.MutationObserver || window.MutationObserver === window.JsMutationObserver;
    e.hasPolyfillMutations = S;
    var T = !1, M = [], L = Array.prototype.forEach.call.bind(Array.prototype.forEach), O = Element.prototype.createShadowRoot;
    Element.prototype.createShadowRoot = function() {
        var e = O.call(this);
        return CustomElements.watchShadow(this), e;
    }, e.watchShadow = f, e.upgradeDocumentTree = g, e.upgradeSubtree = r, e.upgradeAll = t, 
    e.attachedNode = o, e.takeRecords = m;
}), CustomElements.addModule(function(e) {
    function t(t) {
        if (!t.__upgraded__ && t.nodeType === Node.ELEMENT_NODE) {
            var r = t.getAttribute("is"), o = e.getRegisteredDefinition(r || t.localName);
            if (o) {
                if (r && o.tag == t.localName) return n(t, o);
                if (!r && !o["extends"]) return n(t, o);
            }
        }
    }
    function n(t, n) {
        return a.upgrade && console.group("upgrade:", t.localName), n.is && t.setAttribute("is", n.is), 
        r(t, n), t.__upgraded__ = !0, i(t), e.attachedNode(t), e.upgradeSubtree(t), a.upgrade && console.groupEnd(), 
        t;
    }
    function r(e, t) {
        Object.__proto__ ? e.__proto__ = t.prototype : (o(e, t.prototype, t["native"]), 
        e.__proto__ = t.prototype);
    }
    function o(e, t, n) {
        for (var r = {}, o = t; o !== n && o !== HTMLElement.prototype; ) {
            for (var i, a = Object.getOwnPropertyNames(o), s = 0; i = a[s]; s++) r[i] || (Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(o, i)), 
            r[i] = 1);
            o = Object.getPrototypeOf(o);
        }
    }
    function i(e) {
        e.createdCallback && e.createdCallback();
    }
    var a = e.flags;
    e.upgrade = t, e.upgradeWithDefinition = n, e.implementPrototype = r;
}), CustomElements.addModule(function(e) {
    function t(t, r) {
        var c = r || {};
        if (!t) throw new Error("document.registerElement: first argument `name` must not be empty");
        if (t.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(t) + "'.");
        if (o(t)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(t) + "'. The type name is invalid.");
        if (l(t)) throw new Error("DuplicateDefinitionError: a type with name '" + String(t) + "' is already registered");
        return c.prototype || (c.prototype = Object.create(HTMLElement.prototype)), c.__name = t.toLowerCase(), 
        c.lifecycle = c.lifecycle || {}, c.ancestry = i(c["extends"]), a(c), s(c), n(c.prototype), 
        u(c.__name, c), c.ctor = d(c), c.ctor.prototype = c.prototype, c.prototype.constructor = c.ctor, 
        e.ready && w(document), c.ctor;
    }
    function n(e) {
        if (!e.setAttribute._polyfilled) {
            var t = e.setAttribute;
            e.setAttribute = function(e, n) {
                r.call(this, e, n, t);
            };
            var n = e.removeAttribute;
            e.removeAttribute = function(e) {
                r.call(this, e, null, n);
            }, e.setAttribute._polyfilled = !0;
        }
    }
    function r(e, t, n) {
        e = e.toLowerCase();
        var r = this.getAttribute(e);
        n.apply(this, arguments);
        var o = this.getAttribute(e);
        this.attributeChangedCallback && o !== r && this.attributeChangedCallback(e, r, o);
    }
    function o(e) {
        for (var t = 0; t < E.length; t++) if (e === E[t]) return !0;
    }
    function i(e) {
        var t = l(e);
        return t ? i(t["extends"]).concat([ t ]) : [];
    }
    function a(e) {
        for (var t, n = e["extends"], r = 0; t = e.ancestry[r]; r++) n = t.is && t.tag;
        e.tag = n || e.__name, n && (e.is = e.__name);
    }
    function s(e) {
        if (!Object.__proto__) {
            var t = HTMLElement.prototype;
            if (e.is) {
                var n = document.createElement(e.tag), r = Object.getPrototypeOf(n);
                r === e.prototype && (t = r);
            }
            for (var o, i = e.prototype; i && i !== t; ) o = Object.getPrototypeOf(i), i.__proto__ = o, 
            i = o;
            e["native"] = t;
        }
    }
    function c(e) {
        return g(M(e.tag), e);
    }
    function l(e) {
        return e ? S[e.toLowerCase()] : void 0;
    }
    function u(e, t) {
        S[e] = t;
    }
    function d(e) {
        return function() {
            return c(e);
        };
    }
    function p(e, t, n) {
        return e === T ? f(t, n) : L(e, t);
    }
    function f(e, t) {
        var n = l(t || e);
        if (n) {
            if (e == n.tag && t == n.is) return new n.ctor();
            if (!t && !n.is) return new n.ctor();
        }
        var r;
        return t ? (r = f(e), r.setAttribute("is", t), r) : (r = M(e), e.indexOf("-") >= 0 && b(r, HTMLElement), 
        r);
    }
    function h(e) {
        var t = O.call(this, e);
        return v(t), t;
    }
    var m, w = e.upgradeDocumentTree, v = e.upgrade, g = e.upgradeWithDefinition, b = e.implementPrototype, y = e.useNative, E = [ "annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph" ], S = {}, T = "http://www.w3.org/1999/xhtml", M = document.createElement.bind(document), L = document.createElementNS.bind(document), O = Node.prototype.cloneNode;
    m = Object.__proto__ || y ? function(e, t) {
        return e instanceof t;
    } : function(e, t) {
        for (var n = e; n; ) {
            if (n === t.prototype) return !0;
            n = n.__proto__;
        }
        return !1;
    }, document.registerElement = t, document.createElement = f, document.createElementNS = p, 
    Node.prototype.cloneNode = h, e.registry = S, e["instanceof"] = m, e.reservedTagList = E, 
    e.getRegisteredDefinition = l, document.register = document.registerElement;
}), function(e) {
    function t() {
        a(wrap(document)), window.HTMLImports && (HTMLImports.__importsParsingHook = function(e) {
            a(wrap(e["import"]));
        }), CustomElements.ready = !0, setTimeout(function() {
            CustomElements.readyTime = Date.now(), window.HTMLImports && (CustomElements.elapsed = CustomElements.readyTime - HTMLImports.readyTime), 
            document.dispatchEvent(new CustomEvent("WebComponentsReady", {
                bubbles: !0
            }));
        });
    }
    var n = e.useNative, r = e.initializeModules, o = /Trident/.test(navigator.userAgent);
    if (n) {
        var i = function() {};
        e.watchShadow = i, e.upgrade = i, e.upgradeAll = i, e.upgradeDocumentTree = i, e.upgradeSubtree = i, 
        e.takeRecords = i, e["instanceof"] = function(e, t) {
            return e instanceof t;
        };
    } else r();
    var a = e.upgradeDocumentTree;
    if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = ShadowDOMPolyfill.wrapIfNeeded, 
    window.unwrap = ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function(e) {
        return e;
    }), o && "function" != typeof window.CustomEvent && (window.CustomEvent = function(e, t) {
        t = t || {};
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, Boolean(t.bubbles), Boolean(t.cancelable), t.detail), 
        n;
    }, window.CustomEvent.prototype = window.Event.prototype), "complete" === document.readyState || e.flags.eager) t(); else if ("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
        var s = window.HTMLImports && !HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
        window.addEventListener(s, t);
    } else t();
}(window.CustomElements), function() {
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this, n = Array.prototype.slice.call(arguments, 1);
        return function() {
            var r = n.slice();
            return r.push.apply(r, arguments), t.apply(e, r);
        };
    });
}(window.WebComponents), function(e) {
    "use strict";
    function t() {
        window.Polymer === o && (window.Polymer = function() {
            throw new Error('You tried to use polymer without loading it first. To load polymer, <link rel="import" href="components/polymer/polymer.html">');
        });
    }
    if (!window.performance) {
        var n = Date.now();
        window.performance = {
            now: function() {
                return Date.now() - n;
            }
        };
    }
    window.requestAnimationFrame || (window.requestAnimationFrame = function() {
        var e = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
        return e ? function(t) {
            return e(function() {
                t(performance.now());
            });
        } : function(e) {
            return window.setTimeout(e, 1e3 / 60);
        };
    }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function() {
        return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(e) {
            clearTimeout(e);
        };
    }());
    var r = [], o = function(e) {
        "string" != typeof e && 1 === arguments.length && Array.prototype.push.call(arguments, document._currentScript), 
        r.push(arguments);
    };
    window.Polymer = o, e.consumeDeclarations = function(t) {
        e.consumeDeclarations = function() {
            throw "Possible attempt to load Polymer twice";
        }, t && t(r), r = null;
    }, HTMLImports.useNative ? t() : addEventListener("DOMContentLoaded", t);
}(window.WebComponents), function() {
    var e = document.createElement("style");
    e.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var t = document.querySelector("head");
    t.insertBefore(e, t.firstChild);
}(window.WebComponents), function(e) {
    window.Platform = e;
}(window.WebComponents);

(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    }
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var arr = [];
    var slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var support = {};
    var document = window.document, version = "2.1.3", jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        get: function(num) {
            return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this);
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (i === length) {
            target = this;
            i--;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray,
        isWindow: function(obj) {
            return obj != null && obj === obj.window;
        },
        isNumeric: function(obj) {
            return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
        },
        isPlainObject: function(obj) {
            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
            return true;
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        type: function(obj) {
            if (obj == null) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        },
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code);
            if (code) {
                if (code.indexOf("use strict") === 1) {
                    script = document.createElement("script");
                    script.text = code;
                    document.head.appendChild(script).parentNode.removeChild(script);
                } else {
                    indirect(code);
                }
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        },
        trim: function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                } else {
                    push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (;j < len; j++) {
                first[i++] = second[j];
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (;i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }
            return matches;
        },
        map: function(elems, callback, arg) {
            var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
            if (isArray) {
                for (;i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            }
            return concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        now: Date.now,
        support: support
    });
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArraylike(obj) {
        var length = obj.length, type = jQuery.type(obj);
        if (type === "function" || jQuery.isWindow(obj)) {
            return false;
        }
        if (obj.nodeType === 1 && length) {
            return true;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle = function(window) {
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
                hasDuplicate = true;
            }
            return 0;
        }, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
            var i = 0, len = list.length;
            for (;i < len; i++) {
                if (list[i] === elem) {
                    return i;
                }
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
            setDocument();
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    var j = target.length, i = 0;
                    while (target[j++] = els[i++]) {}
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context);
            }
            context = context || document;
            results = results || [];
            nodeType = context.nodeType;
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                return results;
            }
            if (!seed && documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                    if (m = match[1]) {
                        if (nodeType === 9) {
                            elem = context.getElementById(m);
                            if (elem && elem.parentNode) {
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        }
                    } else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results;
                    } else if ((m = match[3]) && support.getElementsByClassName) {
                        push.apply(results, context.getElementsByClassName(m));
                        return results;
                    }
                }
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    nid = old = expando;
                    newContext = context;
                    newSelector = nodeType !== 1 && selector;
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        groups = tokenize(selector);
                        if (old = context.getAttribute("id")) {
                            nid = old.replace(rescape, "\\$&");
                        } else {
                            context.setAttribute("id", nid);
                        }
                        nid = "[id='" + nid + "'] ";
                        i = groups.length;
                        while (i--) {
                            groups[i] = nid + toSelector(groups[i]);
                        }
                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                        newSelector = groups.join(",");
                    }
                    if (newSelector) {
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {} finally {
                            if (!old) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
            var keys = [];
            function cache(key, value) {
                if (keys.push(key + " ") > Expr.cacheLength) {
                    delete cache[keys.shift()];
                }
                return cache[key + " "] = value;
            }
            return cache;
        }
        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return false;
            } finally {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
                div = null;
            }
        }
        function addHandle(attrs, handler) {
            var arr = attrs.split("|"), i = attrs.length;
            while (i--) {
                Expr.attrHandle[arr[i]] = handler;
            }
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
                return diff;
            }
            if (cur) {
                while (cur = cur.nextSibling) {
                    if (cur === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        support = Sizzle.support = {};
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document;
            }
            document = doc;
            docElem = doc.documentElement;
            parent = doc.defaultView;
            if (parent && parent !== parent.top) {
                if (parent.addEventListener) {
                    parent.addEventListener("unload", unloadHandler, false);
                } else if (parent.attachEvent) {
                    parent.attachEvent("onunload", unloadHandler);
                }
            }
            documentIsHTML = !isXML(doc);
            support.attributes = assert(function(div) {
                div.className = "i";
                return !div.getAttribute("className");
            });
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(doc.createComment(""));
                return !div.getElementsByTagName("*").length;
            });
            support.getElementsByClassName = rnative.test(doc.getElementsByClassName);
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !doc.getElementsByName || !doc.getElementsByName(expando).length;
            });
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m && m.parentNode ? [ m ] : [];
                    }
                };
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else {
                delete Expr.find["ID"];
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
            }
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                    return context.getElementsByTagName(tag);
                } else if (support.qsa) {
                    return context.querySelectorAll(tag);
                }
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                    while (elem = results[i++]) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem);
                        }
                    }
                    return tmp;
                }
                return results;
            };
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support.qsa = rnative.test(doc.querySelectorAll)) {
                assert(function(div) {
                    docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (div.querySelectorAll("[msallowcapture^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }
                    if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                        rbuggyQSA.push("~=");
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }
                    if (!div.querySelectorAll("a#" + expando + "+*").length) {
                        rbuggyQSA.push(".#.+[+~]");
                    }
                });
                assert(function(div) {
                    var input = doc.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("name", "D");
                    if (div.querySelectorAll("[name=d]").length) {
                        rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    }
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    support.disconnectedMatch = matches.call(div, "div");
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos);
                });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            sortOrder = hasCompare ? function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                    return compare;
                }
                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                        return -1;
                    }
                    if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                        return 1;
                    }
                    return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            } : function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (!aup || !bup) {
                    return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }
                cur = a;
                while (cur = cur.parentNode) {
                    ap.unshift(cur);
                }
                cur = b;
                while (cur = cur.parentNode) {
                    bp.unshift(cur);
                }
                while (ap[i] === bp[i]) {
                    i++;
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };
            return doc;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                        return ret;
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document) {
                setDocument(context);
            }
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while (elem = results[i++]) {
                    if (elem === results[i]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }
            sortInput = null;
            return results;
        };
        getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
                while (node = elem[i++]) {
                    ret += getText(node);
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                    return elem.textContent;
                } else {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem);
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
            }
            return ret;
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        if (!match[3]) {
                            Sizzle.error(match[0]);
                        }
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    } else if (match[3]) {
                        Sizzle.error(match[0]);
                    }
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }
                    if (match[3]) {
                        match[2] = match[4] || match[5] || "";
                    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!=";
                        }
                        if (!operator) {
                            return true;
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            if (forward && useCache) {
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = cache[0] === dirruns && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        outerCache[type] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                diff = cache[1];
                            } else {
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        if (useCache) {
                                            (node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ];
                                        }
                                        if (node === elem) {
                                            break;
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument);
                    }
                    if (fn.length > 1) {
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === false;
                },
                disabled: function(elem) {
                    return elem.disabled === true;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }
                    return elem.selected === true;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;--i >= 0; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;++i < length; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }
                if (!matched) {
                    break;
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for (;i < len; i++) {
                selector += tokens[i].value;
            }
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml);
                    }
                }
            } : function(elem, context, xml) {
                var oldCache, outerCache, newCache = [ dirruns, doneName ];
                if (xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                return newCache[2] = oldCache[2];
                            } else {
                                outerCache[dir] = newCache;
                                if (newCache[2] = matcher(elem, context, xml)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for (;i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (;i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i);
                        }
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                checkContext = null;
                return ret;
            } ];
            for (;i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (;j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break;
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                }
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                if (outermost) {
                    outermostContext = context !== document && context;
                }
                for (;i !== len && (elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        j = 0;
                        while (matcher = elementMatchers[j++]) {
                            if (matcher(elem, context, xml)) {
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                        }
                    }
                    if (bySet) {
                        if (elem = !matcher && elem) {
                            matchedCount--;
                        }
                        if (seed) {
                            unmatched.push(elem);
                        }
                    }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while (matcher = setMatchers[j++]) {
                        matcher(unmatched, setMatched, context, xml);
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched);
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        Sizzle.uniqueSort(results);
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, match) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                if (!match) {
                    match = tokenize(selector);
                }
                i = match.length;
                while (i--) {
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.push(cached);
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                cached.selector = selector;
            }
            return cached;
        };
        select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) {
                        return results;
                    } else if (compiled) {
                        context = context.parentNode;
                    }
                    selector = selector.slice(tokens.shift().value.length);
                }
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while (i--) {
                    token = tokens[i];
                    if (Expr.relative[type = token.type]) {
                        break;
                    }
                    if (find = Expr.find[type]) {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        };
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support.detectDuplicates = !!hasDuplicate;
        setDocument();
        support.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document.createElement("div")) & 1;
        });
        if (!assert(function(div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild.getAttribute("href") === "#";
        })) {
            addHandle("type|href|height|width", function(elem, name, isXML) {
                if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!support.attributes || !assert(function(div) {
            div.innerHTML = "<input/>";
            div.firstChild.setAttribute("value", "");
            return div.firstChild.getAttribute("value") === "";
        })) {
            addHandle("value", function(elem, name, isXML) {
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    return elem.defaultValue;
                }
            });
        }
        if (!assert(function(div) {
            return div.getAttribute("disabled") == null;
        })) {
            addHandle(booleans, function(elem, name, isXML) {
                var val;
                if (!isXML) {
                    return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                }
            });
        }
        return Sizzle;
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var risSimple = /^.[^:#\[\.,]*$/;
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not;
            });
        }
        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) >= 0 !== not;
        });
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
            expr = ":not(" + expr + ")";
        }
        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, len = this.length, ret = [], self = this;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context) {
        var match, elem;
        if (!selector) {
            return this;
        }
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                match = [ null, selector, null ];
            } else {
                match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for (match in context) {
                            if (jQuery.isFunction(this[match])) {
                                this[match](context[match]);
                            } else {
                                this.attr(match, context[match]);
                            }
                        }
                    }
                    return this;
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem && elem.parentNode) {
                        this.length = 1;
                        this[0] = elem;
                    }
                    this.context = document;
                    this.selector = selector;
                    return this;
                }
            } else if (!context || context.jquery) {
                return (context || rootjQuery).find(selector);
            } else {
                return this.constructor(context).find(selector);
            }
        } else if (selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
        } else if (jQuery.isFunction(selector)) {
            return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
        }
        if (selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
    };
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.extend({
        dir: function(elem, dir, until) {
            var matched = [], truncate = until !== undefined;
            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) {
                        break;
                    }
                    matched.push(elem);
                }
            }
            return matched;
        },
        sibling: function(n, elem) {
            var matched = [];
            for (;n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n);
                }
            }
            return matched;
        }
    });
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for (;i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (;i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        matched.push(cur);
                        break;
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    jQuery.unique(matched);
                }
                if (rparentsprev.test(name)) {
                    matched.reverse();
                }
            }
            return this.pushStack(matched);
        };
    });
    var rnotwhite = /\S+/g;
    var optionsCache = {};
    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var memory, fired, firing, firingStart, firingLength, firingIndex, list = [], stack = !options.once && [], fire = function(data) {
            memory = options.memory && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for (;list && firingIndex < firingLength; firingIndex++) {
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    memory = false;
                    break;
                }
            }
            firing = false;
            if (list) {
                if (stack) {
                    if (stack.length) {
                        fire(stack.shift());
                    }
                } else if (memory) {
                    list = [];
                } else {
                    self.disable();
                }
            }
        }, self = {
            add: function() {
                if (list) {
                    var start = list.length;
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            if (type === "function") {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && type !== "string") {
                                add(arg);
                            }
                        });
                    })(arguments);
                    if (firing) {
                        firingLength = list.length;
                    } else if (memory) {
                        firingStart = start;
                        fire(memory);
                    }
                }
                return this;
            },
            remove: function() {
                if (list) {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (firing) {
                                if (index <= firingLength) {
                                    firingLength--;
                                }
                                if (index <= firingIndex) {
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
            },
            empty: function() {
                list = [];
                firingLength = 0;
                return this;
            },
            disable: function() {
                list = stack = memory = undefined;
                return this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                stack = undefined;
                if (!memory) {
                    self.disable();
                }
                return this;
            },
            locked: function() {
                return !stack;
            },
            fireWith: function(context, args) {
                if (list && (!fired || stack)) {
                    args = args || [];
                    args = [ context, args.slice ? args.slice() : args ];
                    if (firing) {
                        stack.push(args);
                    } else {
                        fire(args);
                    }
                }
                return this;
            },
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                } else {
                                    newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                }
                            });
                        });
                        fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },
        when: function(subordinate) {
            var i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values);
                    } else if (!--remaining) {
                        deferred.resolveWith(contexts, values);
                    }
                };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (;i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                    } else {
                        --remaining;
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    var readyList;
    jQuery.fn.ready = function(fn) {
        jQuery.ready.promise().done(fn);
        return this;
    };
    jQuery.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }
            readyList.resolveWith(document, [ jQuery ]);
            if (jQuery.fn.triggerHandler) {
                jQuery(document).triggerHandler("ready");
                jQuery(document).off("ready");
            }
        }
    });
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, false);
        window.removeEventListener("load", completed, false);
        jQuery.ready();
    }
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete") {
                setTimeout(jQuery.ready);
            } else {
                document.addEventListener("DOMContentLoaded", completed, false);
                window.addEventListener("load", completed, false);
            }
        }
        return readyList.promise(obj);
    };
    jQuery.ready.promise();
    var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (jQuery.type(key) === "object") {
            chainable = true;
            for (i in key) {
                jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
            }
        } else if (value !== undefined) {
            chainable = true;
            if (!jQuery.isFunction(value)) {
                raw = true;
            }
            if (bulk) {
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                } else {
                    bulk = fn;
                    fn = function(elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) {
                for (;i < len; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    };
    jQuery.acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        });
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.accepts = jQuery.acceptData;
    Data.prototype = {
        key: function(owner) {
            if (!Data.accepts(owner)) {
                return 0;
            }
            var descriptor = {}, unlock = owner[this.expando];
            if (!unlock) {
                unlock = Data.uid++;
                try {
                    descriptor[this.expando] = {
                        value: unlock
                    };
                    Object.defineProperties(owner, descriptor);
                } catch (e) {
                    descriptor[this.expando] = unlock;
                    jQuery.extend(owner, descriptor);
                }
            }
            if (!this.cache[unlock]) {
                this.cache[unlock] = {};
            }
            return unlock;
        },
        set: function(owner, data, value) {
            var prop, unlock = this.key(owner), cache = this.cache[unlock];
            if (typeof data === "string") {
                cache[data] = value;
            } else {
                if (jQuery.isEmptyObject(cache)) {
                    jQuery.extend(this.cache[unlock], data);
                } else {
                    for (prop in data) {
                        cache[prop] = data[prop];
                    }
                }
            }
            return cache;
        },
        get: function(owner, key) {
            var cache = this.cache[this.key(owner)];
            return key === undefined ? cache : cache[key];
        },
        access: function(owner, key, value) {
            var stored;
            if (key === undefined || key && typeof key === "string" && value === undefined) {
                stored = this.get(owner, key);
                return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
            }
            this.set(owner, key, value);
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, name, camel, unlock = this.key(owner), cache = this.cache[unlock];
            if (key === undefined) {
                this.cache[unlock] = {};
            } else {
                if (jQuery.isArray(key)) {
                    name = key.concat(key.map(jQuery.camelCase));
                } else {
                    camel = jQuery.camelCase(key);
                    if (key in cache) {
                        name = [ key, camel ];
                    } else {
                        name = camel;
                        name = name in cache ? [ name ] : name.match(rnotwhite) || [];
                    }
                }
                i = name.length;
                while (i--) {
                    delete cache[name[i]];
                }
            }
        },
        hasData: function(owner) {
            return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
        },
        discard: function(owner) {
            if (owner[this.expando]) {
                delete this.cache[owner[this.expando]];
            }
        }
    };
    var data_priv = new Data();
    var data_user = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
    function dataAttr(elem, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                data_user.set(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return data_user.hasData(elem) || data_priv.hasData(elem);
        },
        data: function(elem, name, data) {
            return data_user.access(elem, name, data);
        },
        removeData: function(elem, name) {
            data_user.remove(elem, name);
        },
        _data: function(elem, name, data) {
            return data_priv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            data_priv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === undefined) {
                if (this.length) {
                    data = data_user.get(elem);
                    if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        data_priv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            if (typeof key === "object") {
                return this.each(function() {
                    data_user.set(this, key);
                });
            }
            return access(this, function(value) {
                var data, camelKey = jQuery.camelCase(key);
                if (elem && value === undefined) {
                    data = data_user.get(elem, key);
                    if (data !== undefined) {
                        return data;
                    }
                    data = data_user.get(elem, camelKey);
                    if (data !== undefined) {
                        return data;
                    }
                    data = dataAttr(elem, camelKey, undefined);
                    if (data !== undefined) {
                        return data;
                    }
                    return;
                }
                this.each(function() {
                    var data = data_user.get(this, camelKey);
                    data_user.set(this, camelKey, value);
                    if (key.indexOf("-") !== -1 && data !== undefined) {
                        data_user.set(this, key, value);
                    }
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                data_user.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = data_priv.get(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = data_priv.access(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return data_priv.get(elem, key) || data_priv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    data_priv.remove(elem, [ type + "queue", key ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) {
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = data_priv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
    var isHidden = function(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    };
    var rcheckableType = /^(?:checkbox|radio)$/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    })();
    var strundefined = typeof undefined;
    support.focusinBubbles = "onfocusin" in window;
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.get(elem);
            if (!elemData) {
                return;
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                };
            }
            types = (types || "").match(rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
            }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.hasData(elem) && data_priv.get(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            types = (types || "").match(rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                data_priv.remove(elem, "events");
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") >= 0) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (;cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && handle.apply && jQuery.acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
                    if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        }
                        jQuery.event.triggered = type;
                        elem[type]();
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (data_priv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                for (;cur !== this; cur = cur.parentNode || this) {
                    if (cur.disabled !== true || event.type !== "click") {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) {
                event.target = document;
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                jQuery.event.trigger(e, null, elem);
            } else {
                jQuery.event.dispatch.call(elem, e);
            }
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };
    jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle, false);
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        if (props) {
            jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && e.preventDefault) {
                e.preventDefault();
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && e.stopPropagation) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && e.stopImmediatePropagation) {
                e.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    if (!support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix);
                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    data_priv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function() {
                    var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix) - 1;
                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        data_priv.remove(doc, fix);
                    } else {
                        data_priv.access(doc, fix, attaches);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    this.on(type, selector, data, types[type], one);
                }
                return this;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return this;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return this.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (;i < l; i++) {
            data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
        }
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
            return;
        }
        if (data_priv.hasData(src)) {
            pdataOld = data_priv.access(src);
            pdataCur = data_priv.set(dest, pdataOld);
            events = pdataOld.events;
            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};
                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
        }
        if (data_user.hasData(src)) {
            udataOld = data_user.access(src);
            udataCur = jQuery.extend({}, udataOld);
            data_user.set(dest, udataCur);
        }
    }
    function getAll(context, tag) {
        var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], ret) : ret;
    }
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }
    jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
        },
        buildFragment: function(elems, context, scripts, selection) {
            var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
            for (;i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));
                    } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = "";
                    }
                }
            }
            fragment.textContent = "";
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(fragment.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp);
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }
            return fragment;
        },
        cleanData: function(elems) {
            var data, elem, type, key, special = jQuery.event.special, i = 0;
            for (;(elem = elems[i]) !== undefined; i++) {
                if (jQuery.acceptData(elem)) {
                    key = elem[data_priv.expando];
                    if (key && (data = data_priv.cache[key])) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        if (data_priv.cache[key]) {
                            delete data_priv.cache[key];
                        }
                    }
                }
                delete data_user.cache[elem[data_user.expando]];
            }
        }
    });
    jQuery.fn.extend({
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value;
                    }
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        remove: function(selector, keepData) {
            var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
            for (;(elem = elems[i]) != null; i++) {
                if (!keepData && elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem));
                }
                if (elem.parentNode) {
                    if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                        setGlobalEval(getAll(elem, "script"));
                    }
                    elem.parentNode.removeChild(elem);
                }
            }
            return this;
        },
        empty: function() {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.textContent = "";
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (;i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var arg = arguments[0];
            this.domManip(arguments, function(elem) {
                arg = this.parentNode;
                jQuery.cleanData(getAll(this));
                if (arg) {
                    arg.replaceChild(elem, this);
                }
            });
            return arg && (arg.length || arg.nodeType) ? this : this.remove();
        },
        detach: function(selector) {
            return this.remove(selector, true);
        },
        domManip: function(args, callback) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
                return this.each(function(index) {
                    var self = set.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html());
                    }
                    self.domManip(args, callback);
                });
            }
            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (;i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(this[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    if (jQuery._evalUrl) {
                                        jQuery._evalUrl(node.src);
                                    }
                                } else {
                                    jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                                }
                            }
                        }
                    }
                }
            }
            return this;
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (;i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var iframe, elemdisplay = {};
    function actualDisplay(name, doc) {
        var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
        elem.detach();
        return display;
    }
    function defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                doc = iframe[0].contentDocument;
                doc.write();
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    var rmargin = /^margin/;
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function(elem) {
        if (elem.ownerDocument.defaultView.opener) {
            return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
        }
        return window.getComputedStyle(elem, null);
    };
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
        }
        if (computed) {
            if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name);
            }
            if (rnumnonpx.test(ret) && rmargin.test(name)) {
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                if (conditionFn()) {
                    delete this.get;
                    return;
                }
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    (function() {
        var pixelPositionVal, boxSizingReliableVal, docElem = document.documentElement, container = document.createElement("div"), div = document.createElement("div");
        if (!div.style) {
            return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
        container.appendChild(div);
        function computePixelPositionAndBoxSizingReliable() {
            div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
            div.innerHTML = "";
            docElem.appendChild(container);
            var divStyle = window.getComputedStyle(div, null);
            pixelPositionVal = divStyle.top !== "1%";
            boxSizingReliableVal = divStyle.width === "4px";
            docElem.removeChild(container);
        }
        if (window.getComputedStyle) {
            jQuery.extend(support, {
                pixelPosition: function() {
                    computePixelPositionAndBoxSizingReliable();
                    return pixelPositionVal;
                },
                boxSizingReliable: function() {
                    if (boxSizingReliableVal == null) {
                        computePixelPositionAndBoxSizingReliable();
                    }
                    return boxSizingReliableVal;
                },
                reliableMarginRight: function() {
                    var ret, marginDiv = div.appendChild(document.createElement("div"));
                    marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                    marginDiv.style.marginRight = marginDiv.style.width = "0";
                    div.style.width = "1px";
                    docElem.appendChild(container);
                    ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);
                    docElem.removeChild(container);
                    div.removeChild(marginDiv);
                    return ret;
                }
            });
        }
    })();
    jQuery.swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
            elem.style[name] = old[name];
        }
        return ret;
    };
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"), cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    }, cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    function vendorPropName(style, name) {
        if (name in style) {
            return name;
        }
        var capName = name[0].toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) {
                return name;
            }
        }
        return origName;
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
        for (;i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function showHide(elements, show) {
        var display, elem, hidden, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = data_priv.get(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
                }
            } else {
                hidden = isHidden(elem);
                if (display !== "none" || !hidden) {
                    data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    type = "number";
                }
                if (value == null || value !== value) {
                    return;
                }
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    style[name] = value;
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
        };
    });
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
        if (computed) {
            return jQuery.swap(elem, {
                display: "inline-block"
            }, curCSS, [ elem, "marginRight" ]);
        }
    });
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                for (;i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (;i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }
            return this.each(function() {
                if (isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
            if (start && start[3] !== unit) {
                unit = unit || start[3];
                parts = parts || [];
                start = +target || 1;
                do {
                    scale = scale || ".5";
                    start = start / scale;
                    jQuery.style(tween.elem, prop, start + unit);
                } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
            }
            if (parts) {
                start = tween.start = +start || +target || 0;
                tween.unit = unit;
                tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
            }
            return tween;
        } ]
    };
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = jQuery.now();
    }
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
        for (;index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
                return tween;
            }
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = data_priv.get(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            display = jQuery.css(elem, "display");
            checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                style.display = "inline-block";
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            } else {
                display = undefined;
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = data_priv.access(elem, "fxshow", {});
            }
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                data_priv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for (;index < length; index++) {
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            if (percent < 1 && length) {
                return remaining;
            } else {
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (;index < length; index++) {
                    animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else {
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }
            var prop, index = 0, length = props.length;
            for (;index < length; index++) {
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback);
            }
        },
        prefilter: function(callback, prepend) {
            if (prepend) {
                animationPrefilters.unshift(callback);
            } else {
                animationPrefilters.push(callback);
            }
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || data_priv.get(this, "finish")) {
                    anim.stop(true);
                }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = data_priv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = data_priv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }
                delete data.finish;
            });
        }
    });
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = jQuery.now();
        for (;i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        if (timer()) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = setTimeout(next, time);
            hooks.stop = function() {
                clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var hooks, ret, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (typeof elem.getAttribute === strundefined) {
                return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                } else {
                    elem.setAttribute(name, value + "");
                    return value;
                }
            } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            } else {
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret;
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        elem[propName] = false;
                    }
                    elem.removeAttribute(name);
                }
            }
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        }
    });
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name);
            } else {
                elem.setAttribute(name, name);
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle;
            if (!isXML) {
                handle = attrHandle[name];
                attrHandle[name] = ret;
                ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                attrHandle[name] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
            } else {
                return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
            }
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
                }
            }
        }
    });
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            }
        };
    }
    jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = typeof value === "string" && value, i = 0, len = this.length;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }
                        finalValue = jQuery.trim(cur);
                        if (elem.className !== finalValue) {
                            elem.className = finalValue;
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = arguments.length === 0 || typeof value === "string" && value, i = 0, len = this.length;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        finalValue = value ? jQuery.trim(cur) : "";
                        if (elem.className !== finalValue) {
                            elem.className = finalValue;
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }
            return this.each(function() {
                if (type === "string") {
                    var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || [];
                    while (className = classNames[i++]) {
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }
                } else if (type === strundefined || type === "boolean") {
                    if (this.className) {
                        data_priv.set(this, "__className__", this.className);
                    }
                    this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
                }
            });
        },
        hasClass: function(selector) {
            var className = " " + selector + " ", i = 0, l = this.length;
            for (;i < l; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    return true;
                }
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : jQuery.trim(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    for (;i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value;
                            }
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(option.value, values) >= 0) {
                            optionSet = true;
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    });
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    var nonce = jQuery.now();
    var rquery = /\?/;
    jQuery.parseJSON = function(data) {
        return JSON.parse(data + "");
    };
    jQuery.parseXML = function(data) {
        var xml, tmp;
        if (!data || typeof data !== "string") {
            return null;
        }
        try {
            tmp = new DOMParser();
            xml = tmp.parseFromString(data, "text/xml");
        } catch (e) {
            xml = undefined;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };
    var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), ajaxLocation = window.location.href, ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while (dataType = dataTypes[i++]) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev;
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s["throws"]) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, parts, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    if (!state) {
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                overrideMimeType: function(type) {
                    if (!state) {
                        s.mimeType = type;
                    }
                    return this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (state < 2) {
                            for (code in map) {
                                statusCode[code] = [ statusCode[code], map[code] ];
                            }
                        } else {
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [ "" ];
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data;
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort();
            }
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (state < 2) {
                        done(-1, e);
                    } else {
                        throw e;
                    }
                }
            }
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return;
                }
                state = 2;
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";
                    } else if (status === 304) {
                        statusText = "notmodified";
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else {
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                }
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
    jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    jQuery.expr.filters.hidden = function(elem) {
        return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
    };
    jQuery.expr.filters.visible = function(elem) {
        return !jQuery.expr.filters.hidden(elem);
    };
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            add(prefix, obj);
        }
    }
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return s.join("&").replace(r20, "+");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };
    var xhrId = 0, xhrCallbacks = {}, xhrSuccessStatus = {
        0: 200,
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    if (window.attachEvent) {
        window.attachEvent("onunload", function() {
            for (var key in xhrCallbacks) {
                xhrCallbacks[key]();
            }
        });
    }
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback;
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function(headers, complete) {
                    var i, xhr = options.xhr(), id = ++xhrId;
                    xhr.open(options.type, options.url, options.async, options.username, options.password);
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    }
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    }
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    }
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    }
                    callback = function(type) {
                        return function() {
                            if (callback) {
                                delete xhrCallbacks[id];
                                callback = xhr.onload = xhr.onerror = null;
                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") {
                                    complete(xhr.status, xhr.statusText);
                                } else {
                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, typeof xhr.responseText === "string" ? {
                                        text: xhr.responseText
                                    } : undefined, xhr.getAllResponseHeaders());
                                }
                            }
                        };
                    };
                    xhr.onload = callback();
                    xhr.onerror = callback("error");
                    callback = xhrCallbacks[id] = callback("abort");
                    try {
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) {
                        if (callback) {
                            throw e;
                        }
                    }
                },
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        async: true,
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type);
                        }
                    });
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            jqXHR.always(function() {
                window[callbackName] = overwritten;
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName);
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            return "script";
        }
    });
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || typeof data !== "string") {
            return null;
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        context = context || document;
        var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
        if (parsed) {
            return [ context.createElement(parsed[1]) ];
        }
        parsed = jQuery.buildFragment([ data ], context, scripts);
        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off >= 0) {
            selector = jQuery.trim(url.slice(off));
            url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).complete(callback && function(jqXHR, status) {
                self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }
        return this;
    };
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    var docElem = window.document.documentElement;
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
                elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        offset: function(options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }
            var docElem, win, elem = this[0], box = {
                top: 0,
                left: 0
            }, doc = elem && elem.ownerDocument;
            if (!doc) {
                return;
            }
            docElem = doc.documentElement;
            if (!jQuery.contains(docElem, elem)) {
                return box;
            }
            if (typeof elem.getBoundingClientRect !== strundefined) {
                box = elem.getBoundingClientRect();
            }
            win = getWindow(doc);
            return {
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            };
        },
        position: function() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || docElem;
                while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || docElem;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? win[prop] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });
    jQuery.each([ "top", "left" ], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name];
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    jQuery.fn.size = function() {
        return this.length;
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return jQuery;
        });
    }
    var _jQuery = window.jQuery, _$ = window.$;
    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }
        return jQuery;
    };
    if (typeof noGlobal === strundefined) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
});

(function() {
    var root = this;
    var previousUnderscore = root._;
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
    var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
    var nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
    var _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }
    _.VERSION = "1.7.0";
    var createCallback = function(func, context, argCount) {
        if (context === void 0) return func;
        switch (argCount == null ? 3 : argCount) {
          case 1:
            return function(value) {
                return func.call(context, value);
            };

          case 2:
            return function(value, other) {
                return func.call(context, value, other);
            };

          case 3:
            return function(value, index, collection) {
                return func.call(context, value, index, collection);
            };

          case 4:
            return function(accumulator, value, index, collection) {
                return func.call(context, accumulator, value, index, collection);
            };
        }
        return function() {
            return func.apply(context, arguments);
        };
    };
    _.iteratee = function(value, context, argCount) {
        if (value == null) return _.identity;
        if (_.isFunction(value)) return createCallback(value, context, argCount);
        if (_.isObject(value)) return _.matches(value);
        return _.property(value);
    };
    _.each = _.forEach = function(obj, iteratee, context) {
        if (obj == null) return obj;
        iteratee = createCallback(iteratee, context);
        var i, length = obj.length;
        if (length === +length) {
            for (i = 0; i < length; i++) {
                iteratee(obj[i], i, obj);
            }
        } else {
            var keys = _.keys(obj);
            for (i = 0, length = keys.length; i < length; i++) {
                iteratee(obj[keys[i]], keys[i], obj);
            }
        }
        return obj;
    };
    _.map = _.collect = function(obj, iteratee, context) {
        if (obj == null) return [];
        iteratee = _.iteratee(iteratee, context);
        var keys = obj.length !== +obj.length && _.keys(obj), length = (keys || obj).length, results = Array(length), currentKey;
        for (var index = 0; index < length; index++) {
            currentKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
    };
    var reduceError = "Reduce of empty array with no initial value";
    _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
        if (obj == null) obj = [];
        iteratee = createCallback(iteratee, context, 4);
        var keys = obj.length !== +obj.length && _.keys(obj), length = (keys || obj).length, index = 0, currentKey;
        if (arguments.length < 3) {
            if (!length) throw new TypeError(reduceError);
            memo = obj[keys ? keys[index++] : index++];
        }
        for (;index < length; index++) {
            currentKey = keys ? keys[index] : index;
            memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }
        return memo;
    };
    _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
        if (obj == null) obj = [];
        iteratee = createCallback(iteratee, context, 4);
        var keys = obj.length !== +obj.length && _.keys(obj), index = (keys || obj).length, currentKey;
        if (arguments.length < 3) {
            if (!index) throw new TypeError(reduceError);
            memo = obj[keys ? keys[--index] : --index];
        }
        while (index--) {
            currentKey = keys ? keys[index] : index;
            memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }
        return memo;
    };
    _.find = _.detect = function(obj, predicate, context) {
        var result;
        predicate = _.iteratee(predicate, context);
        _.some(obj, function(value, index, list) {
            if (predicate(value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };
    _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        if (obj == null) return results;
        predicate = _.iteratee(predicate, context);
        _.each(obj, function(value, index, list) {
            if (predicate(value, index, list)) results.push(value);
        });
        return results;
    };
    _.reject = function(obj, predicate, context) {
        return _.filter(obj, _.negate(_.iteratee(predicate)), context);
    };
    _.every = _.all = function(obj, predicate, context) {
        if (obj == null) return true;
        predicate = _.iteratee(predicate, context);
        var keys = obj.length !== +obj.length && _.keys(obj), length = (keys || obj).length, index, currentKey;
        for (index = 0; index < length; index++) {
            currentKey = keys ? keys[index] : index;
            if (!predicate(obj[currentKey], currentKey, obj)) return false;
        }
        return true;
    };
    _.some = _.any = function(obj, predicate, context) {
        if (obj == null) return false;
        predicate = _.iteratee(predicate, context);
        var keys = obj.length !== +obj.length && _.keys(obj), length = (keys || obj).length, index, currentKey;
        for (index = 0; index < length; index++) {
            currentKey = keys ? keys[index] : index;
            if (predicate(obj[currentKey], currentKey, obj)) return true;
        }
        return false;
    };
    _.contains = _.include = function(obj, target) {
        if (obj == null) return false;
        if (obj.length !== +obj.length) obj = _.values(obj);
        return _.indexOf(obj, target) >= 0;
    };
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
            return (isFunc ? method : value[method]).apply(value, args);
        });
    };
    _.pluck = function(obj, key) {
        return _.map(obj, _.property(key));
    };
    _.where = function(obj, attrs) {
        return _.filter(obj, _.matches(attrs));
    };
    _.findWhere = function(obj, attrs) {
        return _.find(obj, _.matches(attrs));
    };
    _.max = function(obj, iteratee, context) {
        var result = -Infinity, lastComputed = -Infinity, value, computed;
        if (iteratee == null && obj != null) {
            obj = obj.length === +obj.length ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value > result) {
                    result = value;
                }
            }
        } else {
            iteratee = _.iteratee(iteratee, context);
            _.each(obj, function(value, index, list) {
                computed = iteratee(value, index, list);
                if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    };
    _.min = function(obj, iteratee, context) {
        var result = Infinity, lastComputed = Infinity, value, computed;
        if (iteratee == null && obj != null) {
            obj = obj.length === +obj.length ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value < result) {
                    result = value;
                }
            }
        } else {
            iteratee = _.iteratee(iteratee, context);
            _.each(obj, function(value, index, list) {
                computed = iteratee(value, index, list);
                if (computed < lastComputed || computed === Infinity && result === Infinity) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    };
    _.shuffle = function(obj) {
        var set = obj && obj.length === +obj.length ? obj : _.values(obj);
        var length = set.length;
        var shuffled = Array(length);
        for (var index = 0, rand; index < length; index++) {
            rand = _.random(0, index);
            if (rand !== index) shuffled[index] = shuffled[rand];
            shuffled[rand] = set[index];
        }
        return shuffled;
    };
    _.sample = function(obj, n, guard) {
        if (n == null || guard) {
            if (obj.length !== +obj.length) obj = _.values(obj);
            return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
    };
    _.sortBy = function(obj, iteratee, context) {
        iteratee = _.iteratee(iteratee, context);
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iteratee(value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < b || b === void 0) return -1;
            }
            return left.index - right.index;
        }), "value");
    };
    var group = function(behavior) {
        return function(obj, iteratee, context) {
            var result = {};
            iteratee = _.iteratee(iteratee, context);
            _.each(obj, function(value, index) {
                var key = iteratee(value, index, obj);
                behavior(result, value, key);
            });
            return result;
        };
    };
    _.groupBy = group(function(result, value, key) {
        if (_.has(result, key)) result[key].push(value); else result[key] = [ value ];
    });
    _.indexBy = group(function(result, value, key) {
        result[key] = value;
    });
    _.countBy = group(function(result, value, key) {
        if (_.has(result, key)) result[key]++; else result[key] = 1;
    });
    _.sortedIndex = function(array, obj, iteratee, context) {
        iteratee = _.iteratee(iteratee, context, 1);
        var value = iteratee(obj);
        var low = 0, high = array.length;
        while (low < high) {
            var mid = low + high >>> 1;
            if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
        }
        return low;
    };
    _.toArray = function(obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (obj.length === +obj.length) return _.map(obj, _.identity);
        return _.values(obj);
    };
    _.size = function(obj) {
        if (obj == null) return 0;
        return obj.length === +obj.length ? obj.length : _.keys(obj).length;
    };
    _.partition = function(obj, predicate, context) {
        predicate = _.iteratee(predicate, context);
        var pass = [], fail = [];
        _.each(obj, function(value, key, obj) {
            (predicate(value, key, obj) ? pass : fail).push(value);
        });
        return [ pass, fail ];
    };
    _.first = _.head = _.take = function(array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[0];
        if (n < 0) return [];
        return slice.call(array, 0, n);
    };
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
    };
    _.last = function(array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[array.length - 1];
        return slice.call(array, Math.max(array.length - n, 0));
    };
    _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
    };
    _.compact = function(array) {
        return _.filter(array, _.identity);
    };
    var flatten = function(input, shallow, strict, output) {
        if (shallow && _.every(input, _.isArray)) {
            return concat.apply(output, input);
        }
        for (var i = 0, length = input.length; i < length; i++) {
            var value = input[i];
            if (!_.isArray(value) && !_.isArguments(value)) {
                if (!strict) output.push(value);
            } else if (shallow) {
                push.apply(output, value);
            } else {
                flatten(value, shallow, strict, output);
            }
        }
        return output;
    };
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, false, []);
    };
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    };
    _.uniq = _.unique = function(array, isSorted, iteratee, context) {
        if (array == null) return [];
        if (!_.isBoolean(isSorted)) {
            context = iteratee;
            iteratee = isSorted;
            isSorted = false;
        }
        if (iteratee != null) iteratee = _.iteratee(iteratee, context);
        var result = [];
        var seen = [];
        for (var i = 0, length = array.length; i < length; i++) {
            var value = array[i];
            if (isSorted) {
                if (!i || seen !== value) result.push(value);
                seen = value;
            } else if (iteratee) {
                var computed = iteratee(value, i, array);
                if (_.indexOf(seen, computed) < 0) {
                    seen.push(computed);
                    result.push(value);
                }
            } else if (_.indexOf(result, value) < 0) {
                result.push(value);
            }
        }
        return result;
    };
    _.union = function() {
        return _.uniq(flatten(arguments, true, true, []));
    };
    _.intersection = function(array) {
        if (array == null) return [];
        var result = [];
        var argsLength = arguments.length;
        for (var i = 0, length = array.length; i < length; i++) {
            var item = array[i];
            if (_.contains(result, item)) continue;
            for (var j = 1; j < argsLength; j++) {
                if (!_.contains(arguments[j], item)) break;
            }
            if (j === argsLength) result.push(item);
        }
        return result;
    };
    _.difference = function(array) {
        var rest = flatten(slice.call(arguments, 1), true, true, []);
        return _.filter(array, function(value) {
            return !_.contains(rest, value);
        });
    };
    _.zip = function(array) {
        if (array == null) return [];
        var length = _.max(arguments, "length").length;
        var results = Array(length);
        for (var i = 0; i < length; i++) {
            results[i] = _.pluck(arguments, i);
        }
        return results;
    };
    _.object = function(list, values) {
        if (list == null) return {};
        var result = {};
        for (var i = 0, length = list.length; i < length; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };
    _.indexOf = function(array, item, isSorted) {
        if (array == null) return -1;
        var i = 0, length = array.length;
        if (isSorted) {
            if (typeof isSorted == "number") {
                i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
            } else {
                i = _.sortedIndex(array, item);
                return array[i] === item ? i : -1;
            }
        }
        for (;i < length; i++) if (array[i] === item) return i;
        return -1;
    };
    _.lastIndexOf = function(array, item, from) {
        if (array == null) return -1;
        var idx = array.length;
        if (typeof from == "number") {
            idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
        }
        while (--idx >= 0) if (array[idx] === item) return idx;
        return -1;
    };
    _.range = function(start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = step || 1;
        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);
        for (var idx = 0; idx < length; idx++, start += step) {
            range[idx] = start;
        }
        return range;
    };
    var Ctor = function() {};
    _.bind = function(func, context) {
        var args, bound;
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError("Bind must be called on a function");
        args = slice.call(arguments, 2);
        bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            Ctor.prototype = func.prototype;
            var self = new Ctor();
            Ctor.prototype = null;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (_.isObject(result)) return result;
            return self;
        };
        return bound;
    };
    _.partial = function(func) {
        var boundArgs = slice.call(arguments, 1);
        return function() {
            var position = 0;
            var args = boundArgs.slice();
            for (var i = 0, length = args.length; i < length; i++) {
                if (args[i] === _) args[i] = arguments[position++];
            }
            while (position < arguments.length) args.push(arguments[position++]);
            return func.apply(this, args);
        };
    };
    _.bindAll = function(obj) {
        var i, length = arguments.length, key;
        if (length <= 1) throw new Error("bindAll must be passed function names");
        for (i = 1; i < length; i++) {
            key = arguments[i];
            obj[key] = _.bind(obj[key], obj);
        }
        return obj;
    };
    _.memoize = function(func, hasher) {
        var memoize = function(key) {
            var cache = memoize.cache;
            var address = hasher ? hasher.apply(this, arguments) : key;
            if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
            return cache[address];
        };
        memoize.cache = {};
        return memoize;
    };
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args);
        }, wait);
    };
    _.defer = function(func) {
        return _.delay.apply(_, [ func, 1 ].concat(slice.call(arguments, 1)));
    };
    _.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function() {
            previous = options.leading === false ? 0 : _.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = _.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };
    _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        var later = function() {
            var last = _.now() - timestamp;
            if (last < wait && last > 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                }
            }
        };
        return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
    _.wrap = function(func, wrapper) {
        return _.partial(wrapper, func);
    };
    _.negate = function(predicate) {
        return function() {
            return !predicate.apply(this, arguments);
        };
    };
    _.compose = function() {
        var args = arguments;
        var start = args.length - 1;
        return function() {
            var i = start;
            var result = args[start].apply(this, arguments);
            while (i--) result = args[i].call(this, result);
            return result;
        };
    };
    _.after = function(times, func) {
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };
    _.before = function(times, func) {
        var memo;
        return function() {
            if (--times > 0) {
                memo = func.apply(this, arguments);
            } else {
                func = null;
            }
            return memo;
        };
    };
    _.once = _.partial(_.before, 2);
    _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        return keys;
    };
    _.values = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };
    _.pairs = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [ keys[i], obj[keys[i]] ];
        }
        return pairs;
    };
    _.invert = function(obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };
    _.extend = function(obj) {
        if (!_.isObject(obj)) return obj;
        var source, prop;
        for (var i = 1, length = arguments.length; i < length; i++) {
            source = arguments[i];
            for (prop in source) {
                if (hasOwnProperty.call(source, prop)) {
                    obj[prop] = source[prop];
                }
            }
        }
        return obj;
    };
    _.pick = function(obj, iteratee, context) {
        var result = {}, key;
        if (obj == null) return result;
        if (_.isFunction(iteratee)) {
            iteratee = createCallback(iteratee, context);
            for (key in obj) {
                var value = obj[key];
                if (iteratee(value, key, obj)) result[key] = value;
            }
        } else {
            var keys = concat.apply([], slice.call(arguments, 1));
            obj = new Object(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
                key = keys[i];
                if (key in obj) result[key] = obj[key];
            }
        }
        return result;
    };
    _.omit = function(obj, iteratee, context) {
        if (_.isFunction(iteratee)) {
            iteratee = _.negate(iteratee);
        } else {
            var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
            iteratee = function(value, key) {
                return !_.contains(keys, key);
            };
        }
        return _.pick(obj, iteratee, context);
    };
    _.defaults = function(obj) {
        if (!_.isObject(obj)) return obj;
        for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
                if (obj[prop] === void 0) obj[prop] = source[prop];
            }
        }
        return obj;
    };
    _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
    };
    var eq = function(a, b, aStack, bStack) {
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        if (a == null || b == null) return a === b;
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
          case "[object RegExp]":
          case "[object String]":
            return "" + a === "" + b;

          case "[object Number]":
            if (+a !== +a) return +b !== +b;
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a === +b;
        }
        if (typeof a != "object" || typeof b != "object") return false;
        var length = aStack.length;
        while (length--) {
            if (aStack[length] === a) return bStack[length] === b;
        }
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && "constructor" in a && "constructor" in b && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor)) {
            return false;
        }
        aStack.push(a);
        bStack.push(b);
        var size, result;
        if (className === "[object Array]") {
            size = a.length;
            result = size === b.length;
            if (result) {
                while (size--) {
                    if (!(result = eq(a[size], b[size], aStack, bStack))) break;
                }
            }
        } else {
            var keys = _.keys(a), key;
            size = keys.length;
            result = _.keys(b).length === size;
            if (result) {
                while (size--) {
                    key = keys[size];
                    if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
                }
            }
        }
        aStack.pop();
        bStack.pop();
        return result;
    };
    _.isEqual = function(a, b) {
        return eq(a, b, [], []);
    };
    _.isEmpty = function(obj) {
        if (obj == null) return true;
        if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
        for (var key in obj) if (_.has(obj, key)) return false;
        return true;
    };
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1);
    };
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    };
    _.isObject = function(obj) {
        var type = typeof obj;
        return type === "function" || type === "object" && !!obj;
    };
    _.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(name) {
        _["is" + name] = function(obj) {
            return toString.call(obj) === "[object " + name + "]";
        };
    });
    if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
            return _.has(obj, "callee");
        };
    }
    if (typeof /./ !== "function") {
        _.isFunction = function(obj) {
            return typeof obj == "function" || false;
        };
    }
    _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };
    _.isNaN = function(obj) {
        return _.isNumber(obj) && obj !== +obj;
    };
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
    };
    _.isNull = function(obj) {
        return obj === null;
    };
    _.isUndefined = function(obj) {
        return obj === void 0;
    };
    _.has = function(obj, key) {
        return obj != null && hasOwnProperty.call(obj, key);
    };
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };
    _.identity = function(value) {
        return value;
    };
    _.constant = function(value) {
        return function() {
            return value;
        };
    };
    _.noop = function() {};
    _.property = function(key) {
        return function(obj) {
            return obj[key];
        };
    };
    _.matches = function(attrs) {
        var pairs = _.pairs(attrs), length = pairs.length;
        return function(obj) {
            if (obj == null) return !length;
            obj = new Object(obj);
            for (var i = 0; i < length; i++) {
                var pair = pairs[i], key = pair[0];
                if (pair[1] !== obj[key] || !(key in obj)) return false;
            }
            return true;
        };
    };
    _.times = function(n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = createCallback(iteratee, context, 1);
        for (var i = 0; i < n; i++) accum[i] = iteratee(i);
        return accum;
    };
    _.random = function(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };
    _.now = Date.now || function() {
        return new Date().getTime();
    };
    var escapeMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };
    var unescapeMap = _.invert(escapeMap);
    var createEscaper = function(map) {
        var escaper = function(match) {
            return map[match];
        };
        var source = "(?:" + _.keys(map).join("|") + ")";
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, "g");
        return function(string) {
            string = string == null ? "" : "" + string;
            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
    };
    _.escape = createEscaper(escapeMap);
    _.unescape = createEscaper(unescapeMap);
    _.result = function(object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return _.isFunction(value) ? object[property]() : value;
    };
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + "";
        return prefix ? prefix + id : id;
    };
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var noMatch = /(.)^/;
    var escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
    var escapeChar = function(match) {
        return "\\" + escapes[match];
    };
    _.template = function(text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);
        var matcher = RegExp([ (settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source ].join("|") + "|$", "g");
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, escapeChar);
            index = offset + match.length;
            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
        });
        source += "';\n";
        if (!settings.variable) source = "with(obj||{}){\n" + source + "}\n";
        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        try {
            var render = new Function(settings.variable || "obj", "_", source);
        } catch (e) {
            e.source = source;
            throw e;
        }
        var template = function(data) {
            return render.call(this, data, _);
        };
        var argument = settings.variable || "obj";
        template.source = "function(" + argument + "){\n" + source + "}";
        return template;
    };
    _.chain = function(obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance;
    };
    var result = function(obj) {
        return this._chain ? _(obj).chain() : obj;
    };
    _.mixin = function(obj) {
        _.each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [ this._wrapped ];
                push.apply(args, arguments);
                return result.call(this, func.apply(_, args));
            };
        });
    };
    _.mixin(_);
    _.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name === "shift" || name === "splice") && obj.length === 0) delete obj[0];
            return result.call(this, obj);
        };
    });
    _.each([ "concat", "join", "slice" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    });
    _.prototype.value = function() {
        return this._wrapped;
    };
    if (typeof define === "function" && define.amd) {
        define("underscore", [], function() {
            return _;
        });
    }
}).call(this);

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "underscore", "jquery", "exports" ], function(_, $, exports) {
            root.Backbone = factory(root, exports, _, $);
        });
    } else if (typeof exports !== "undefined") {
        var _ = require("underscore");
        factory(root, exports, _);
    } else {
        root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$);
    }
})(this, function(root, Backbone, _, $) {
    var previousBackbone = root.Backbone;
    var array = [];
    var push = array.push;
    var slice = array.slice;
    var splice = array.splice;
    Backbone.VERSION = "1.1.2";
    Backbone.$ = $;
    Backbone.noConflict = function() {
        root.Backbone = previousBackbone;
        return this;
    };
    Backbone.emulateHTTP = false;
    Backbone.emulateJSON = false;
    var Events = Backbone.Events = {
        on: function(name, callback, context) {
            if (!eventsApi(this, "on", name, [ callback, context ]) || !callback) return this;
            this._events || (this._events = {});
            var events = this._events[name] || (this._events[name] = []);
            events.push({
                callback: callback,
                context: context,
                ctx: context || this
            });
            return this;
        },
        once: function(name, callback, context) {
            if (!eventsApi(this, "once", name, [ callback, context ]) || !callback) return this;
            var self = this;
            var once = _.once(function() {
                self.off(name, once);
                callback.apply(this, arguments);
            });
            once._callback = callback;
            return this.on(name, once, context);
        },
        off: function(name, callback, context) {
            var retain, ev, events, names, i, l, j, k;
            if (!this._events || !eventsApi(this, "off", name, [ callback, context ])) return this;
            if (!name && !callback && !context) {
                this._events = void 0;
                return this;
            }
            names = name ? [ name ] : _.keys(this._events);
            for (i = 0, l = names.length; i < l; i++) {
                name = names[i];
                if (events = this._events[name]) {
                    this._events[name] = retain = [];
                    if (callback || context) {
                        for (j = 0, k = events.length; j < k; j++) {
                            ev = events[j];
                            if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) {
                                retain.push(ev);
                            }
                        }
                    }
                    if (!retain.length) delete this._events[name];
                }
            }
            return this;
        },
        trigger: function(name) {
            if (!this._events) return this;
            var args = slice.call(arguments, 1);
            if (!eventsApi(this, "trigger", name, args)) return this;
            var events = this._events[name];
            var allEvents = this._events.all;
            if (events) triggerEvents(events, args);
            if (allEvents) triggerEvents(allEvents, arguments);
            return this;
        },
        stopListening: function(obj, name, callback) {
            var listeningTo = this._listeningTo;
            if (!listeningTo) return this;
            var remove = !name && !callback;
            if (!callback && typeof name === "object") callback = this;
            if (obj) (listeningTo = {})[obj._listenId] = obj;
            for (var id in listeningTo) {
                obj = listeningTo[id];
                obj.off(name, callback, this);
                if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
            }
            return this;
        }
    };
    var eventSplitter = /\s+/;
    var eventsApi = function(obj, action, name, rest) {
        if (!name) return true;
        if (typeof name === "object") {
            for (var key in name) {
                obj[action].apply(obj, [ key, name[key] ].concat(rest));
            }
            return false;
        }
        if (eventSplitter.test(name)) {
            var names = name.split(eventSplitter);
            for (var i = 0, l = names.length; i < l; i++) {
                obj[action].apply(obj, [ names[i] ].concat(rest));
            }
            return false;
        }
        return true;
    };
    var triggerEvents = function(events, args) {
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch (args.length) {
          case 0:
            while (++i < l) (ev = events[i]).callback.call(ev.ctx);
            return;

          case 1:
            while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1);
            return;

          case 2:
            while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2);
            return;

          case 3:
            while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
            return;

          default:
            while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
            return;
        }
    };
    var listenMethods = {
        listenTo: "on",
        listenToOnce: "once"
    };
    _.each(listenMethods, function(implementation, method) {
        Events[method] = function(obj, name, callback) {
            var listeningTo = this._listeningTo || (this._listeningTo = {});
            var id = obj._listenId || (obj._listenId = _.uniqueId("l"));
            listeningTo[id] = obj;
            if (!callback && typeof name === "object") callback = this;
            obj[implementation](name, callback, this);
            return this;
        };
    });
    Events.bind = Events.on;
    Events.unbind = Events.off;
    _.extend(Backbone, Events);
    var Model = Backbone.Model = function(attributes, options) {
        var attrs = attributes || {};
        options || (options = {});
        this.cid = _.uniqueId("c");
        this.attributes = {};
        if (options.collection) this.collection = options.collection;
        if (options.parse) attrs = this.parse(attrs, options) || {};
        attrs = _.defaults({}, attrs, _.result(this, "defaults"));
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments);
    };
    _.extend(Model.prototype, Events, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(options) {
            return _.clone(this.attributes);
        },
        sync: function() {
            return Backbone.sync.apply(this, arguments);
        },
        get: function(attr) {
            return this.attributes[attr];
        },
        escape: function(attr) {
            return _.escape(this.get(attr));
        },
        has: function(attr) {
            return this.get(attr) != null;
        },
        set: function(key, val, options) {
            var attr, attrs, unset, changes, silent, changing, prev, current;
            if (key == null) return this;
            if (typeof key === "object") {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }
            options || (options = {});
            if (!this._validate(attrs, options)) return false;
            unset = options.unset;
            silent = options.silent;
            changes = [];
            changing = this._changing;
            this._changing = true;
            if (!changing) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {};
            }
            current = this.attributes, prev = this._previousAttributes;
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];
            for (attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(current[attr], val)) changes.push(attr);
                if (!_.isEqual(prev[attr], val)) {
                    this.changed[attr] = val;
                } else {
                    delete this.changed[attr];
                }
                unset ? delete current[attr] : current[attr] = val;
            }
            if (!silent) {
                if (changes.length) this._pending = options;
                for (var i = 0, l = changes.length; i < l; i++) {
                    this.trigger("change:" + changes[i], this, current[changes[i]], options);
                }
            }
            if (changing) return this;
            if (!silent) {
                while (this._pending) {
                    options = this._pending;
                    this._pending = false;
                    this.trigger("change", this, options);
                }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },
        unset: function(attr, options) {
            return this.set(attr, void 0, _.extend({}, options, {
                unset: true
            }));
        },
        clear: function(options) {
            var attrs = {};
            for (var key in this.attributes) attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, {
                unset: true
            }));
        },
        hasChanged: function(attr) {
            if (attr == null) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },
        changedAttributes: function(diff) {
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
            var val, changed = false;
            var old = this._changing ? this._previousAttributes : this.attributes;
            for (var attr in diff) {
                if (_.isEqual(old[attr], val = diff[attr])) continue;
                (changed || (changed = {}))[attr] = val;
            }
            return changed;
        },
        previous: function(attr) {
            if (attr == null || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },
        previousAttributes: function() {
            return _.clone(this._previousAttributes);
        },
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            if (options.parse === void 0) options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function(resp) {
                if (!model.set(model.parse(resp, options), options)) return false;
                if (success) success(model, resp, options);
                model.trigger("sync", model, resp, options);
            };
            wrapError(this, options);
            return this.sync("read", this, options);
        },
        save: function(key, val, options) {
            var attrs, method, xhr, attributes = this.attributes;
            if (key == null || typeof key === "object") {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }
            options = _.extend({
                validate: true
            }, options);
            if (attrs && !options.wait) {
                if (!this.set(attrs, options)) return false;
            } else {
                if (!this._validate(attrs, options)) return false;
            }
            if (attrs && options.wait) {
                this.attributes = _.extend({}, attributes, attrs);
            }
            if (options.parse === void 0) options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function(resp) {
                model.attributes = attributes;
                var serverAttrs = model.parse(resp, options);
                if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
                if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
                    return false;
                }
                if (success) success(model, resp, options);
                model.trigger("sync", model, resp, options);
            };
            wrapError(this, options);
            method = this.isNew() ? "create" : options.patch ? "patch" : "update";
            if (method === "patch") options.attrs = attrs;
            xhr = this.sync(method, this, options);
            if (attrs && options.wait) this.attributes = attributes;
            return xhr;
        },
        destroy: function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            var destroy = function() {
                model.trigger("destroy", model, model.collection, options);
            };
            options.success = function(resp) {
                if (options.wait || model.isNew()) destroy();
                if (success) success(model, resp, options);
                if (!model.isNew()) model.trigger("sync", model, resp, options);
            };
            if (this.isNew()) {
                options.success();
                return false;
            }
            wrapError(this, options);
            var xhr = this.sync("delete", this, options);
            if (!options.wait) destroy();
            return xhr;
        },
        url: function() {
            var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
            if (this.isNew()) return base;
            return base.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id);
        },
        parse: function(resp, options) {
            return resp;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return !this.has(this.idAttribute);
        },
        isValid: function(options) {
            return this._validate({}, _.extend(options || {}, {
                validate: true
            }));
        },
        _validate: function(attrs, options) {
            if (!options.validate || !this.validate) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if (!error) return true;
            this.trigger("invalid", this, error, _.extend(options, {
                validationError: error
            }));
            return false;
        }
    });
    var modelMethods = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
    _.each(modelMethods, function(method) {
        Model.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.attributes);
            return _[method].apply(_, args);
        };
    });
    var Collection = Backbone.Collection = function(models, options) {
        options || (options = {});
        if (options.model) this.model = options.model;
        if (options.comparator !== void 0) this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (models) this.reset(models, _.extend({
            silent: true
        }, options));
    };
    var setOptions = {
        add: true,
        remove: true,
        merge: true
    };
    var addOptions = {
        add: true,
        remove: false
    };
    _.extend(Collection.prototype, Events, {
        model: Model,
        initialize: function() {},
        toJSON: function(options) {
            return this.map(function(model) {
                return model.toJSON(options);
            });
        },
        sync: function() {
            return Backbone.sync.apply(this, arguments);
        },
        add: function(models, options) {
            return this.set(models, _.extend({
                merge: false
            }, options, addOptions));
        },
        remove: function(models, options) {
            var singular = !_.isArray(models);
            models = singular ? [ models ] : _.clone(models);
            options || (options = {});
            var i, l, index, model;
            for (i = 0, l = models.length; i < l; i++) {
                model = models[i] = this.get(models[i]);
                if (!model) continue;
                delete this._byId[model.id];
                delete this._byId[model.cid];
                index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                if (!options.silent) {
                    options.index = index;
                    model.trigger("remove", model, this, options);
                }
                this._removeReference(model, options);
            }
            return singular ? models[0] : models;
        },
        set: function(models, options) {
            options = _.defaults({}, options, setOptions);
            if (options.parse) models = this.parse(models, options);
            var singular = !_.isArray(models);
            models = singular ? models ? [ models ] : [] : _.clone(models);
            var i, l, id, model, attrs, existing, sort;
            var at = options.at;
            var targetModel = this.model;
            var sortable = this.comparator && at == null && options.sort !== false;
            var sortAttr = _.isString(this.comparator) ? this.comparator : null;
            var toAdd = [], toRemove = [], modelMap = {};
            var add = options.add, merge = options.merge, remove = options.remove;
            var order = !sortable && add && remove ? [] : false;
            for (i = 0, l = models.length; i < l; i++) {
                attrs = models[i] || {};
                if (attrs instanceof Model) {
                    id = model = attrs;
                } else {
                    id = attrs[targetModel.prototype.idAttribute || "id"];
                }
                if (existing = this.get(id)) {
                    if (remove) modelMap[existing.cid] = true;
                    if (merge) {
                        attrs = attrs === model ? model.attributes : attrs;
                        if (options.parse) attrs = existing.parse(attrs, options);
                        existing.set(attrs, options);
                        if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
                    }
                    models[i] = existing;
                } else if (add) {
                    model = models[i] = this._prepareModel(attrs, options);
                    if (!model) continue;
                    toAdd.push(model);
                    this._addReference(model, options);
                }
                model = existing || model;
                if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
                modelMap[model.id] = true;
            }
            if (remove) {
                for (i = 0, l = this.length; i < l; ++i) {
                    if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
                }
                if (toRemove.length) this.remove(toRemove, options);
            }
            if (toAdd.length || order && order.length) {
                if (sortable) sort = true;
                this.length += toAdd.length;
                if (at != null) {
                    for (i = 0, l = toAdd.length; i < l; i++) {
                        this.models.splice(at + i, 0, toAdd[i]);
                    }
                } else {
                    if (order) this.models.length = 0;
                    var orderedModels = order || toAdd;
                    for (i = 0, l = orderedModels.length; i < l; i++) {
                        this.models.push(orderedModels[i]);
                    }
                }
            }
            if (sort) this.sort({
                silent: true
            });
            if (!options.silent) {
                for (i = 0, l = toAdd.length; i < l; i++) {
                    (model = toAdd[i]).trigger("add", model, this, options);
                }
                if (sort || order && order.length) this.trigger("sort", this, options);
            }
            return singular ? models[0] : models;
        },
        reset: function(models, options) {
            options || (options = {});
            for (var i = 0, l = this.models.length; i < l; i++) {
                this._removeReference(this.models[i], options);
            }
            options.previousModels = this.models;
            this._reset();
            models = this.add(models, _.extend({
                silent: true
            }, options));
            if (!options.silent) this.trigger("reset", this, options);
            return models;
        },
        push: function(model, options) {
            return this.add(model, _.extend({
                at: this.length
            }, options));
        },
        pop: function(options) {
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model;
        },
        unshift: function(model, options) {
            return this.add(model, _.extend({
                at: 0
            }, options));
        },
        shift: function(options) {
            var model = this.at(0);
            this.remove(model, options);
            return model;
        },
        slice: function() {
            return slice.apply(this.models, arguments);
        },
        get: function(obj) {
            if (obj == null) return void 0;
            return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
        },
        at: function(index) {
            return this.models[index];
        },
        where: function(attrs, first) {
            if (_.isEmpty(attrs)) return first ? void 0 : [];
            return this[first ? "find" : "filter"](function(model) {
                for (var key in attrs) {
                    if (attrs[key] !== model.get(key)) return false;
                }
                return true;
            });
        },
        findWhere: function(attrs) {
            return this.where(attrs, true);
        },
        sort: function(options) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            options || (options = {});
            if (_.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this);
            } else {
                this.models.sort(_.bind(this.comparator, this));
            }
            if (!options.silent) this.trigger("sort", this, options);
            return this;
        },
        pluck: function(attr) {
            return _.invoke(this.models, "get", attr);
        },
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            if (options.parse === void 0) options.parse = true;
            var success = options.success;
            var collection = this;
            options.success = function(resp) {
                var method = options.reset ? "reset" : "set";
                collection[method](resp, options);
                if (success) success(collection, resp, options);
                collection.trigger("sync", collection, resp, options);
            };
            wrapError(this, options);
            return this.sync("read", this, options);
        },
        create: function(model, options) {
            options = options ? _.clone(options) : {};
            if (!(model = this._prepareModel(model, options))) return false;
            if (!options.wait) this.add(model, options);
            var collection = this;
            var success = options.success;
            options.success = function(model, resp) {
                if (options.wait) collection.add(model, options);
                if (success) success(model, resp, options);
            };
            model.save(null, options);
            return model;
        },
        parse: function(resp, options) {
            return resp;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {};
        },
        _prepareModel: function(attrs, options) {
            if (attrs instanceof Model) return attrs;
            options = options ? _.clone(options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model.validationError) return model;
            this.trigger("invalid", this, model.validationError, options);
            return false;
        },
        _addReference: function(model, options) {
            this._byId[model.cid] = model;
            if (model.id != null) this._byId[model.id] = model;
            if (!model.collection) model.collection = this;
            model.on("all", this._onModelEvent, this);
        },
        _removeReference: function(model, options) {
            if (this === model.collection) delete model.collection;
            model.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(event, model, collection, options) {
            if ((event === "add" || event === "remove") && collection !== this) return;
            if (event === "destroy") this.remove(model, options);
            if (model && event === "change:" + model.idAttribute) {
                delete this._byId[model.previous(model.idAttribute)];
                if (model.id != null) this._byId[model.id] = model;
            }
            this.trigger.apply(this, arguments);
        }
    });
    var methods = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample" ];
    _.each(methods, function(method) {
        Collection.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.models);
            return _[method].apply(_, args);
        };
    });
    var attributeMethods = [ "groupBy", "countBy", "sortBy", "indexBy" ];
    _.each(attributeMethods, function(method) {
        Collection.prototype[method] = function(value, context) {
            var iterator = _.isFunction(value) ? value : function(model) {
                return model.get(value);
            };
            return _[method](this.models, iterator, context);
        };
    });
    var View = Backbone.View = function(options) {
        this.cid = _.uniqueId("view");
        options || (options = {});
        _.extend(this, _.pick(options, viewOptions));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
    var viewOptions = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    _.extend(View.prototype, Events, {
        tagName: "div",
        $: function(selector) {
            return this.$el.find(selector);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            this.$el.remove();
            this.stopListening();
            return this;
        },
        setElement: function(element, delegate) {
            if (this.$el) this.undelegateEvents();
            this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
            this.el = this.$el[0];
            if (delegate !== false) this.delegateEvents();
            return this;
        },
        delegateEvents: function(events) {
            if (!(events || (events = _.result(this, "events")))) return this;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[events[key]];
                if (!method) continue;
                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];
                method = _.bind(method, this);
                eventName += ".delegateEvents" + this.cid;
                if (selector === "") {
                    this.$el.on(eventName, method);
                } else {
                    this.$el.on(eventName, selector, method);
                }
            }
            return this;
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
            return this;
        },
        _ensureElement: function() {
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, "attributes"));
                if (this.id) attrs.id = _.result(this, "id");
                if (this.className) attrs["class"] = _.result(this, "className");
                var $el = Backbone.$("<" + _.result(this, "tagName") + ">").attr(attrs);
                this.setElement($el, false);
            } else {
                this.setElement(_.result(this, "el"), false);
            }
        }
    });
    Backbone.sync = function(method, model, options) {
        var type = methodMap[method];
        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });
        var params = {
            type: type,
            dataType: "json"
        };
        if (!options.url) {
            params.url = _.result(model, "url") || urlError();
        }
        if (options.data == null && model && (method === "create" || method === "update" || method === "patch")) {
            params.contentType = "application/json";
            params.data = JSON.stringify(options.attrs || model.toJSON(options));
        }
        if (options.emulateJSON) {
            params.contentType = "application/x-www-form-urlencoded";
            params.data = params.data ? {
                model: params.data
            } : {};
        }
        if (options.emulateHTTP && (type === "PUT" || type === "DELETE" || type === "PATCH")) {
            params.type = "POST";
            if (options.emulateJSON) params.data._method = type;
            var beforeSend = options.beforeSend;
            options.beforeSend = function(xhr) {
                xhr.setRequestHeader("X-HTTP-Method-Override", type);
                if (beforeSend) return beforeSend.apply(this, arguments);
            };
        }
        if (params.type !== "GET" && !options.emulateJSON) {
            params.processData = false;
        }
        if (params.type === "PATCH" && noXhrPatch) {
            params.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP");
            };
        }
        var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger("request", model, xhr, options);
        return xhr;
    };
    var noXhrPatch = typeof window !== "undefined" && !!window.ActiveXObject && !(window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent);
    var methodMap = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    Backbone.ajax = function() {
        return Backbone.$.ajax.apply(Backbone.$, arguments);
    };
    var Router = Backbone.Router = function(options) {
        options || (options = {});
        if (options.routes) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    _.extend(Router.prototype, Events, {
        initialize: function() {},
        route: function(route, name, callback) {
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            if (_.isFunction(name)) {
                callback = name;
                name = "";
            }
            if (!callback) callback = this[name];
            var router = this;
            Backbone.history.route(route, function(fragment) {
                var args = router._extractParameters(route, fragment);
                router.execute(callback, args);
                router.trigger.apply(router, [ "route:" + name ].concat(args));
                router.trigger("route", name, args);
                Backbone.history.trigger("route", router, name, args);
            });
            return this;
        },
        execute: function(callback, args) {
            if (callback) callback.apply(this, args);
        },
        navigate: function(fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this;
        },
        _bindRoutes: function() {
            if (!this.routes) return;
            this.routes = _.result(this, "routes");
            var route, routes = _.keys(this.routes);
            while ((route = routes.pop()) != null) {
                this.route(route, this.routes[route]);
            }
        },
        _routeToRegExp: function(route) {
            route = route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function(match, optional) {
                return optional ? match : "([^/?]+)";
            }).replace(splatParam, "([^?]*?)");
            return new RegExp("^" + route + "(?:\\?([\\s\\S]*))?$");
        },
        _extractParameters: function(route, fragment) {
            var params = route.exec(fragment).slice(1);
            return _.map(params, function(param, i) {
                if (i === params.length - 1) return param || null;
                return param ? decodeURIComponent(param) : null;
            });
        }
    });
    var History = Backbone.History = function() {
        this.handlers = [];
        _.bindAll(this, "checkUrl");
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history;
        }
    };
    var routeStripper = /^[#\/]|\s+$/g;
    var rootStripper = /^\/+|\/+$/g;
    var isExplorer = /msie [\w.]+/;
    var trailingSlash = /\/$/;
    var pathStripper = /#.*$/;
    History.started = false;
    _.extend(History.prototype, Events, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root;
        },
        getHash: function(window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : "";
        },
        getFragment: function(fragment, forcePushState) {
            if (fragment == null) {
                if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                    fragment = decodeURI(this.location.pathname + this.location.search);
                    var root = this.root.replace(trailingSlash, "");
                    if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
                } else {
                    fragment = this.getHash();
                }
            }
            return fragment.replace(routeStripper, "");
        },
        start: function(options) {
            if (History.started) throw new Error("Backbone.history has already been started");
            History.started = true;
            this.options = _.extend({
                root: "/"
            }, this.options, options);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var fragment = this.getFragment();
            var docMode = document.documentMode;
            var oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);
            this.root = ("/" + this.root + "/").replace(rootStripper, "/");
            if (oldIE && this._wantsHashChange) {
                var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = frame.hide().appendTo("body")[0].contentWindow;
                this.navigate(fragment);
            }
            if (this._hasPushState) {
                Backbone.$(window).on("popstate", this.checkUrl);
            } else if (this._wantsHashChange && "onhashchange" in window && !oldIE) {
                Backbone.$(window).on("hashchange", this.checkUrl);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }
            this.fragment = fragment;
            var loc = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    this.fragment = this.getFragment(null, true);
                    this.location.replace(this.root + "#" + this.fragment);
                    return true;
                } else if (this._hasPushState && this.atRoot() && loc.hash) {
                    this.fragment = this.getHash().replace(routeStripper, "");
                    this.history.replaceState({}, document.title, this.root + this.fragment);
                }
            }
            if (!this.options.silent) return this.loadUrl();
        },
        stop: function() {
            Backbone.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
            History.started = false;
        },
        route: function(route, callback) {
            this.handlers.unshift({
                route: route,
                callback: callback
            });
        },
        checkUrl: function(e) {
            var current = this.getFragment();
            if (current === this.fragment && this.iframe) {
                current = this.getFragment(this.getHash(this.iframe));
            }
            if (current === this.fragment) return false;
            if (this.iframe) this.navigate(current);
            this.loadUrl();
        },
        loadUrl: function(fragment) {
            fragment = this.fragment = this.getFragment(fragment);
            return _.any(this.handlers, function(handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
        },
        navigate: function(fragment, options) {
            if (!History.started) return false;
            if (!options || options === true) options = {
                trigger: !!options
            };
            var url = this.root + (fragment = this.getFragment(fragment || ""));
            fragment = fragment.replace(pathStripper, "");
            if (this.fragment === fragment) return;
            this.fragment = fragment;
            if (fragment === "" && url !== "/") url = url.slice(0, -1);
            if (this._hasPushState) {
                this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, fragment, options.replace);
                if (this.iframe && fragment !== this.getFragment(this.getHash(this.iframe))) {
                    if (!options.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, fragment, options.replace);
                }
            } else {
                return this.location.assign(url);
            }
            if (options.trigger) return this.loadUrl(fragment);
        },
        _updateHash: function(location, fragment, replace) {
            if (replace) {
                var href = location.href.replace(/(javascript:|#).*$/, "");
                location.replace(href + "#" + fragment);
            } else {
                location.hash = "#" + fragment;
            }
        }
    });
    Backbone.history = new History();
    var extend = function(protoProps, staticProps) {
        var parent = this;
        var child;
        if (protoProps && _.has(protoProps, "constructor")) {
            child = protoProps.constructor;
        } else {
            child = function() {
                return parent.apply(this, arguments);
            };
        }
        _.extend(child, parent, staticProps);
        var Surrogate = function() {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();
        if (protoProps) _.extend(child.prototype, protoProps);
        child.__super__ = parent.prototype;
        return child;
    };
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
    var urlError = function() {
        throw new Error('A "url" property or function must be specified');
    };
    var wrapError = function(model, options) {
        var error = options.error;
        options.error = function(resp) {
            if (error) error(model, resp, options);
            model.trigger("error", model, resp, options);
        };
    };
    return Backbone;
});

window.App = {
    init: function() {
        App.TemplateLoader = document.querySelector("tsj4-bb-template-loader");
        App.TemplateLoader.PATH = "templates";
        var hash = window.location.hash;
        App.main = new App.Main({
            startRoute: hash
        });
    }
};

App.MenuItem = Backbone.Model.extend({
    defaults: {
        icon: undefined,
        label: undefined,
        hash: undefined
    }
});

App.MenuList = Backbone.Collection.extend({
    model: App.MenuItem,
    url: "/api/v1/menu",
    parse: function(res) {
        var items = [];
        if (res.hasOwnProperty("items") && res.items) items.push(res.items);
        return items;
    }
});

App.MenuView = Backbone.View.extend({
    el: "core-menu",
    template: "menu-view",
    render: function() {
        console.log("MenuView.render");
        var data = {
            items: this.collection.toJSON()
        };
        $(this.el).html(App.TemplateLoader.render(this.template, data));
    }
});

App.Router = Backbone.Router.extend({
    routes: {
        start: "start",
        help: "help",
        discover: "discover",
        account: "account"
    },
    start: function() {
        console.log("start");
        App.menuView.collection.fetch({
            success: function() {
                App.menuView.render();
            },
            error: function() {
                console.log("error");
            }
        });
    },
    account: function() {
        console.log("account");
    },
    discover: function() {
        console.log("discover");
    },
    help: function() {
        console.log("help");
    }
});

App.Main = Backbone.Model.extend({
    defaults: {
        startRoute: undefined
    },
    initialize: function() {
        console.log("Main.initialize");
        this.createCollections();
        this.createViews();
        this.createRouter();
    },
    createCollections: function() {
        console.log("Main.createCollections");
        App.menu = new App.MenuList();
    },
    createViews: function() {
        console.log("Main.createViews");
        App.menuView = new App.MenuView({
            collection: App.menu
        });
    },
    createRouter: function() {
        var startRoute = this.get("startRoute");
        console.log("Main.createRouter, start route : " + startRoute);
        App.router = new App.Router();
        Backbone.history.start();
        if (!startRoute) {
            App.router.navigate("start", {
                trigger: true
            });
        } else {
            App.router.navigate(startRoute, {
                trigger: true
            });
        }
    }
});

window.onload = function() {
    App.init();
};
//# sourceMappingURL=min.js.map