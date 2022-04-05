var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Do = Object.create;
var br = Object.defineProperty;
var Fo = Object.getOwnPropertyDescriptor;
var zo = Object.getOwnPropertyNames;
var No = Object.getPrototypeOf, Bo = Object.prototype.hasOwnProperty;
var Uo = (r15, t, e) => t in r15 ? br(r15, t, { enumerable: true, configurable: true, writable: true, value: e }) : r15[t] = e;
var ln = (r15, t) => () => (t || r15((t = { exports: {} }).exports, t), t.exports), Wo = (r15, t) => {
  for (var e in t)
    br(r15, e, { get: t[e], enumerable: true });
}, Ho = (r15, t, e, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of zo(t))
      !Bo.call(r15, n) && n !== e && br(r15, n, { get: () => t[n], enumerable: !(i = Fo(t, n)) || i.enumerable });
  return r15;
};
var qe = (r15, t, e) => (e = r15 != null ? Do(No(r15)) : {}, Ho(t || !r15 || !r15.__esModule ? br(e, "default", { value: r15, enumerable: true }) : e, r15));
var yr = (r15, t, e) => (Uo(r15, typeof t != "symbol" ? t + "" : t, e), e);
var An = ln((Tf, xr) => {
  var fn, cn, hn, pn, mn, dn, _n, bn, yn, vr, Qr, vn, xn, xe, gn, wn, Sn, Tn, En, Mn, On, Pn, Cn;
  (function(r15) {
    var t = typeof global == "object" ? global : typeof self == "object" ? self : typeof this == "object" ? this : {};
    typeof define == "function" && define.amd ? define("tslib", ["exports"], function(i) {
      r15(e(t, e(i)));
    }) : typeof xr == "object" && typeof xr.exports == "object" ? r15(e(t, e(xr.exports))) : r15(e(t));
    function e(i, n) {
      return i !== t && (typeof Object.create == "function" ? Object.defineProperty(i, "__esModule", { value: true }) : i.__esModule = true), function(s, o) {
        return i[s] = n ? n(s, o) : o;
      };
    }
  })(function(r15) {
    var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
      e.__proto__ = i;
    } || function(e, i) {
      for (var n in i)
        i.hasOwnProperty(n) && (e[n] = i[n]);
    };
    fn = function(e, i) {
      t(e, i);
      function n() {
        this.constructor = e;
      }
      e.prototype = i === null ? Object.create(i) : (n.prototype = i.prototype, new n());
    }, cn = Object.assign || function(e) {
      for (var i, n = 1, s = arguments.length; n < s; n++) {
        i = arguments[n];
        for (var o in i)
          Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
      }
      return e;
    }, hn = function(e, i) {
      var n = {};
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && i.indexOf(s) < 0 && (n[s] = e[s]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, s = Object.getOwnPropertySymbols(e); o < s.length; o++)
          i.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]]);
      return n;
    }, pn = function(e, i, n, s) {
      var o = arguments.length, a = o < 3 ? i : s === null ? s = Object.getOwnPropertyDescriptor(i, n) : s, u;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        a = Reflect.decorate(e, i, n, s);
      else
        for (var l = e.length - 1; l >= 0; l--)
          (u = e[l]) && (a = (o < 3 ? u(a) : o > 3 ? u(i, n, a) : u(i, n)) || a);
      return o > 3 && a && Object.defineProperty(i, n, a), a;
    }, mn = function(e, i) {
      return function(n, s) {
        i(n, s, e);
      };
    }, dn = function(e, i) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(e, i);
    }, _n = function(e, i, n, s) {
      function o(a) {
        return a instanceof n ? a : new n(function(u) {
          u(a);
        });
      }
      return new (n || (n = Promise))(function(a, u) {
        function l(p) {
          try {
            c(s.next(p));
          } catch (h) {
            u(h);
          }
        }
        function f(p) {
          try {
            c(s.throw(p));
          } catch (h) {
            u(h);
          }
        }
        function c(p) {
          p.done ? a(p.value) : o(p.value).then(l, f);
        }
        c((s = s.apply(e, i || [])).next());
      });
    }, bn = function(e, i) {
      var n = { label: 0, sent: function() {
        if (a[0] & 1)
          throw a[1];
        return a[1];
      }, trys: [], ops: [] }, s, o, a, u;
      return u = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
        return this;
      }), u;
      function l(c) {
        return function(p) {
          return f([c, p]);
        };
      }
      function f(c) {
        if (s)
          throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (s = 1, o && (a = c[0] & 2 ? o.return : c[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, c[1])).done)
              return a;
            switch (o = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
              case 0:
              case 1:
                a = c;
                break;
              case 4:
                return n.label++, { value: c[1], done: false };
              case 5:
                n.label++, o = c[1], c = [0];
                continue;
              case 7:
                c = n.ops.pop(), n.trys.pop();
                continue;
              default:
                if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                  n = 0;
                  continue;
                }
                if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
                  n.label = c[1];
                  break;
                }
                if (c[0] === 6 && n.label < a[1]) {
                  n.label = a[1], a = c;
                  break;
                }
                if (a && n.label < a[2]) {
                  n.label = a[2], n.ops.push(c);
                  break;
                }
                a[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            c = i.call(e, n);
          } catch (p) {
            c = [6, p], o = 0;
          } finally {
            s = a = 0;
          }
        if (c[0] & 5)
          throw c[1];
        return { value: c[0] ? c[1] : void 0, done: true };
      }
    }, Cn = function(e, i, n, s) {
      s === void 0 && (s = n), e[s] = i[n];
    }, yn = function(e, i) {
      for (var n in e)
        n !== "default" && !i.hasOwnProperty(n) && (i[n] = e[n]);
    }, vr = function(e) {
      var i = typeof Symbol == "function" && Symbol.iterator, n = i && e[i], s = 0;
      if (n)
        return n.call(e);
      if (e && typeof e.length == "number")
        return { next: function() {
          return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e };
        } };
      throw new TypeError(i ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, Qr = function(e, i) {
      var n = typeof Symbol == "function" && e[Symbol.iterator];
      if (!n)
        return e;
      var s = n.call(e), o, a = [], u;
      try {
        for (; (i === void 0 || i-- > 0) && !(o = s.next()).done; )
          a.push(o.value);
      } catch (l) {
        u = { error: l };
      } finally {
        try {
          o && !o.done && (n = s.return) && n.call(s);
        } finally {
          if (u)
            throw u.error;
        }
      }
      return a;
    }, vn = function() {
      for (var e = [], i = 0; i < arguments.length; i++)
        e = e.concat(Qr(arguments[i]));
      return e;
    }, xn = function() {
      for (var e = 0, i = 0, n = arguments.length; i < n; i++)
        e += arguments[i].length;
      for (var s = Array(e), o = 0, i = 0; i < n; i++)
        for (var a = arguments[i], u = 0, l = a.length; u < l; u++, o++)
          s[o] = a[u];
      return s;
    }, xe = function(e) {
      return this instanceof xe ? (this.v = e, this) : new xe(e);
    }, gn = function(e, i, n) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var s = n.apply(e, i || []), o, a = [];
      return o = {}, u("next"), u("throw"), u("return"), o[Symbol.asyncIterator] = function() {
        return this;
      }, o;
      function u(_) {
        s[_] && (o[_] = function(m) {
          return new Promise(function(d, b) {
            a.push([_, m, d, b]) > 1 || l(_, m);
          });
        });
      }
      function l(_, m) {
        try {
          f(s[_](m));
        } catch (d) {
          h(a[0][3], d);
        }
      }
      function f(_) {
        _.value instanceof xe ? Promise.resolve(_.value.v).then(c, p) : h(a[0][2], _);
      }
      function c(_) {
        l("next", _);
      }
      function p(_) {
        l("throw", _);
      }
      function h(_, m) {
        _(m), a.shift(), a.length && l(a[0][0], a[0][1]);
      }
    }, wn = function(e) {
      var i, n;
      return i = {}, s("next"), s("throw", function(o) {
        throw o;
      }), s("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function s(o, a) {
        i[o] = e[o] ? function(u) {
          return (n = !n) ? { value: xe(e[o](u)), done: o === "return" } : a ? a(u) : u;
        } : a;
      }
    }, Sn = function(e) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var i = e[Symbol.asyncIterator], n;
      return i ? i.call(e) : (e = typeof vr == "function" ? vr(e) : e[Symbol.iterator](), n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function() {
        return this;
      }, n);
      function s(a) {
        n[a] = e[a] && function(u) {
          return new Promise(function(l, f) {
            u = e[a](u), o(l, f, u.done, u.value);
          });
        };
      }
      function o(a, u, l, f) {
        Promise.resolve(f).then(function(c) {
          a({ value: c, done: l });
        }, u);
      }
    }, Tn = function(e, i) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", { value: i }) : e.raw = i, e;
    }, En = function(e) {
      if (e && e.__esModule)
        return e;
      var i = {};
      if (e != null)
        for (var n in e)
          Object.hasOwnProperty.call(e, n) && (i[n] = e[n]);
      return i.default = e, i;
    }, Mn = function(e) {
      return e && e.__esModule ? e : { default: e };
    }, On = function(e, i) {
      if (!i.has(e))
        throw new TypeError("attempted to get private field on non-instance");
      return i.get(e);
    }, Pn = function(e, i, n) {
      if (!i.has(e))
        throw new TypeError("attempted to set private field on non-instance");
      return i.set(e, n), n;
    }, r15("__extends", fn), r15("__assign", cn), r15("__rest", hn), r15("__decorate", pn), r15("__param", mn), r15("__metadata", dn), r15("__awaiter", _n), r15("__generator", bn), r15("__exportStar", yn), r15("__createBinding", Cn), r15("__values", vr), r15("__read", Qr), r15("__spread", vn), r15("__spreadArrays", xn), r15("__await", xe), r15("__asyncGenerator", gn), r15("__asyncDelegator", wn), r15("__asyncValues", Sn), r15("__makeTemplateObject", Tn), r15("__importStar", En), r15("__importDefault", Mn), r15("__classPrivateFieldGet", On), r15("__classPrivateFieldSet", Pn);
  });
});
var cr = ln((Td, qi) => {
  var Ul = Object.prototype.hasOwnProperty, st = "~";
  function fr() {
  }
  Object.create && (fr.prototype = /* @__PURE__ */ Object.create(null), new fr().__proto__ || (st = false));
  function Wl(r15, t, e) {
    this.fn = r15, this.context = t, this.once = e || false;
  }
  function So(r15, t, e, i, n) {
    if (typeof e != "function")
      throw new TypeError("The listener must be a function");
    var s = new Wl(e, i || r15, n), o = st ? st + t : t;
    return r15._events[o] ? r15._events[o].fn ? r15._events[o] = [r15._events[o], s] : r15._events[o].push(s) : (r15._events[o] = s, r15._eventsCount++), r15;
  }
  function jr(r15, t) {
    --r15._eventsCount === 0 ? r15._events = new fr() : delete r15._events[t];
  }
  function et() {
    this._events = new fr(), this._eventsCount = 0;
  }
  et.prototype.eventNames = function() {
    var t = [], e, i;
    if (this._eventsCount === 0)
      return t;
    for (i in e = this._events)
      Ul.call(e, i) && t.push(st ? i.slice(1) : i);
    return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
  };
  et.prototype.listeners = function(t) {
    var e = st ? st + t : t, i = this._events[e];
    if (!i)
      return [];
    if (i.fn)
      return [i.fn];
    for (var n = 0, s = i.length, o = new Array(s); n < s; n++)
      o[n] = i[n].fn;
    return o;
  };
  et.prototype.listenerCount = function(t) {
    var e = st ? st + t : t, i = this._events[e];
    return i ? i.fn ? 1 : i.length : 0;
  };
  et.prototype.emit = function(t, e, i, n, s, o) {
    var a = st ? st + t : t;
    if (!this._events[a])
      return false;
    var u = this._events[a], l = arguments.length, f, c;
    if (u.fn) {
      switch (u.once && this.removeListener(t, u.fn, void 0, true), l) {
        case 1:
          return u.fn.call(u.context), true;
        case 2:
          return u.fn.call(u.context, e), true;
        case 3:
          return u.fn.call(u.context, e, i), true;
        case 4:
          return u.fn.call(u.context, e, i, n), true;
        case 5:
          return u.fn.call(u.context, e, i, n, s), true;
        case 6:
          return u.fn.call(u.context, e, i, n, s, o), true;
      }
      for (c = 1, f = new Array(l - 1); c < l; c++)
        f[c - 1] = arguments[c];
      u.fn.apply(u.context, f);
    } else {
      var p = u.length, h;
      for (c = 0; c < p; c++)
        switch (u[c].once && this.removeListener(t, u[c].fn, void 0, true), l) {
          case 1:
            u[c].fn.call(u[c].context);
            break;
          case 2:
            u[c].fn.call(u[c].context, e);
            break;
          case 3:
            u[c].fn.call(u[c].context, e, i);
            break;
          case 4:
            u[c].fn.call(u[c].context, e, i, n);
            break;
          default:
            if (!f)
              for (h = 1, f = new Array(l - 1); h < l; h++)
                f[h - 1] = arguments[h];
            u[c].fn.apply(u[c].context, f);
        }
    }
    return true;
  };
  et.prototype.on = function(t, e, i) {
    return So(this, t, e, i, false);
  };
  et.prototype.once = function(t, e, i) {
    return So(this, t, e, i, true);
  };
  et.prototype.removeListener = function(t, e, i, n) {
    var s = st ? st + t : t;
    if (!this._events[s])
      return this;
    if (!e)
      return jr(this, s), this;
    var o = this._events[s];
    if (o.fn)
      o.fn === e && (!n || o.once) && (!i || o.context === i) && jr(this, s);
    else {
      for (var a = 0, u = [], l = o.length; a < l; a++)
        (o[a].fn !== e || n && !o[a].once || i && o[a].context !== i) && u.push(o[a]);
      u.length ? this._events[s] = u.length === 1 ? u[0] : u : jr(this, s);
    }
    return this;
  };
  et.prototype.removeAllListeners = function(t) {
    var e;
    return t ? (e = st ? st + t : t, this._events[e] && jr(this, e)) : (this._events = new fr(), this._eventsCount = 0), this;
  };
  et.prototype.off = et.prototype.removeListener;
  et.prototype.addListener = et.prototype.on;
  et.prefixed = st;
  et.EventEmitter = et;
  typeof qi < "u" && (qi.exports = et);
});
var kn = qe(An(), 1), { __extends: M, __assign: Ef, __rest: Mf, __decorate: Of, __param: Pf, __metadata: Cf, __awaiter: Af, __generator: kf, __exportStar: Lf, __createBinding: Rf, __values: If, __read: Df, __spread: Ff, __spreadArrays: zf, __await: Nf, __asyncGenerator: Bf, __asyncDelegator: Uf, __asyncValues: Wf, __makeTemplateObject: Hf, __importStar: Vf, __importDefault: Yf, __classPrivateFieldGet: Gf, __classPrivateFieldSet: $f } = kn.default;
function Lt(r15) {
  return typeof r15 == "function";
}
var Kr = false, ot = { Promise: void 0, set useDeprecatedSynchronousErrorHandling(r15) {
  if (r15) {
    var t = new Error();
    "" + t.stack;
  }
  Kr = r15;
}, get useDeprecatedSynchronousErrorHandling() {
  return Kr;
} };
function Rt(r15) {
  setTimeout(function() {
    throw r15;
  }, 0);
}
var ge = { closed: true, next: function(r15) {
}, error: function(r15) {
  if (ot.useDeprecatedSynchronousErrorHandling)
    throw r15;
  Rt(r15);
}, complete: function() {
} };
var we = function() {
  return Array.isArray || function(r15) {
    return r15 && typeof r15.length == "number";
  };
}();
function gr(r15) {
  return r15 !== null && typeof r15 == "object";
}
var Vo = function() {
  function r15(t) {
    return Error.call(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(e, i) {
      return i + 1 + ") " + e.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t, this;
  }
  return r15.prototype = Object.create(Error.prototype), r15;
}(), Xe = Vo;
var B = function() {
  function r15(t) {
    this.closed = false, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = true, this._unsubscribe = t);
  }
  return r15.prototype.unsubscribe = function() {
    var t;
    if (!this.closed) {
      var e = this, i = e._parentOrParents, n = e._ctorUnsubscribe, s = e._unsubscribe, o = e._subscriptions;
      if (this.closed = true, this._parentOrParents = null, this._subscriptions = null, i instanceof r15)
        i.remove(this);
      else if (i !== null)
        for (var a = 0; a < i.length; ++a) {
          var u = i[a];
          u.remove(this);
        }
      if (Lt(s)) {
        n && (this._unsubscribe = void 0);
        try {
          s.call(this);
        } catch (c) {
          t = c instanceof Xe ? Ln(c.errors) : [c];
        }
      }
      if (we(o))
        for (var a = -1, l = o.length; ++a < l; ) {
          var f = o[a];
          if (gr(f))
            try {
              f.unsubscribe();
            } catch (p) {
              t = t || [], p instanceof Xe ? t = t.concat(Ln(p.errors)) : t.push(p);
            }
        }
      if (t)
        throw new Xe(t);
    }
  }, r15.prototype.add = function(t) {
    var e = t;
    if (!t)
      return r15.EMPTY;
    switch (typeof t) {
      case "function":
        e = new r15(t);
      case "object":
        if (e === this || e.closed || typeof e.unsubscribe != "function")
          return e;
        if (this.closed)
          return e.unsubscribe(), e;
        if (!(e instanceof r15)) {
          var i = e;
          e = new r15(), e._subscriptions = [i];
        }
        break;
      default:
        throw new Error("unrecognized teardown " + t + " added to Subscription.");
    }
    var n = e._parentOrParents;
    if (n === null)
      e._parentOrParents = this;
    else if (n instanceof r15) {
      if (n === this)
        return e;
      e._parentOrParents = [n, this];
    } else if (n.indexOf(this) === -1)
      n.push(this);
    else
      return e;
    var s = this._subscriptions;
    return s === null ? this._subscriptions = [e] : s.push(e), e;
  }, r15.prototype.remove = function(t) {
    var e = this._subscriptions;
    if (e) {
      var i = e.indexOf(t);
      i !== -1 && e.splice(i, 1);
    }
  }, r15.EMPTY = function(t) {
    return t.closed = true, t;
  }(new r15()), r15;
}();
function Ln(r15) {
  return r15.reduce(function(t, e) {
    return t.concat(e instanceof Xe ? e.errors : e);
  }, []);
}
var oe = function() {
  return typeof Symbol == "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
}();
var k = function(r15) {
  M(t, r15);
  function t(e, i, n) {
    var s = r15.call(this) || this;
    switch (s.syncErrorValue = null, s.syncErrorThrown = false, s.syncErrorThrowable = false, s.isStopped = false, arguments.length) {
      case 0:
        s.destination = ge;
        break;
      case 1:
        if (!e) {
          s.destination = ge;
          break;
        }
        if (typeof e == "object") {
          e instanceof t ? (s.syncErrorThrowable = e.syncErrorThrowable, s.destination = e, e.add(s)) : (s.syncErrorThrowable = true, s.destination = new Rn(s, e));
          break;
        }
      default:
        s.syncErrorThrowable = true, s.destination = new Rn(s, e, i, n);
        break;
    }
    return s;
  }
  return t.prototype[oe] = function() {
    return this;
  }, t.create = function(e, i, n) {
    var s = new t(e, i, n);
    return s.syncErrorThrowable = false, s;
  }, t.prototype.next = function(e) {
    this.isStopped || this._next(e);
  }, t.prototype.error = function(e) {
    this.isStopped || (this.isStopped = true, this._error(e));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, r15.prototype.unsubscribe.call(this));
  }, t.prototype._next = function(e) {
    this.destination.next(e);
  }, t.prototype._error = function(e) {
    this.destination.error(e), this.unsubscribe();
  }, t.prototype._complete = function() {
    this.destination.complete(), this.unsubscribe();
  }, t.prototype._unsubscribeAndRecycle = function() {
    var e = this._parentOrParents;
    return this._parentOrParents = null, this.unsubscribe(), this.closed = false, this.isStopped = false, this._parentOrParents = e, this;
  }, t;
}(B);
var Rn = function(r15) {
  M(t, r15);
  function t(e, i, n, s) {
    var o = r15.call(this) || this;
    o._parentSubscriber = e;
    var a, u = o;
    return Lt(i) ? a = i : i && (a = i.next, n = i.error, s = i.complete, i !== ge && (u = Object.create(i), Lt(u.unsubscribe) && o.add(u.unsubscribe.bind(u)), u.unsubscribe = o.unsubscribe.bind(o))), o._context = u, o._next = a, o._error = n, o._complete = s, o;
  }
  return t.prototype.next = function(e) {
    if (!this.isStopped && this._next) {
      var i = this._parentSubscriber;
      !ot.useDeprecatedSynchronousErrorHandling || !i.syncErrorThrowable ? this.__tryOrUnsub(this._next, e) : this.__tryOrSetError(i, this._next, e) && this.unsubscribe();
    }
  }, t.prototype.error = function(e) {
    if (!this.isStopped) {
      var i = this._parentSubscriber, n = ot.useDeprecatedSynchronousErrorHandling;
      if (this._error)
        !n || !i.syncErrorThrowable ? (this.__tryOrUnsub(this._error, e), this.unsubscribe()) : (this.__tryOrSetError(i, this._error, e), this.unsubscribe());
      else if (i.syncErrorThrowable)
        n ? (i.syncErrorValue = e, i.syncErrorThrown = true) : Rt(e), this.unsubscribe();
      else {
        if (this.unsubscribe(), n)
          throw e;
        Rt(e);
      }
    }
  }, t.prototype.complete = function() {
    var e = this;
    if (!this.isStopped) {
      var i = this._parentSubscriber;
      if (this._complete) {
        var n = function() {
          return e._complete.call(e._context);
        };
        !ot.useDeprecatedSynchronousErrorHandling || !i.syncErrorThrowable ? (this.__tryOrUnsub(n), this.unsubscribe()) : (this.__tryOrSetError(i, n), this.unsubscribe());
      } else
        this.unsubscribe();
    }
  }, t.prototype.__tryOrUnsub = function(e, i) {
    try {
      e.call(this._context, i);
    } catch (n) {
      if (this.unsubscribe(), ot.useDeprecatedSynchronousErrorHandling)
        throw n;
      Rt(n);
    }
  }, t.prototype.__tryOrSetError = function(e, i, n) {
    if (!ot.useDeprecatedSynchronousErrorHandling)
      throw new Error("bad call");
    try {
      i.call(this._context, n);
    } catch (s) {
      return ot.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = s, e.syncErrorThrown = true, true) : (Rt(s), true);
    }
    return false;
  }, t.prototype._unsubscribe = function() {
    var e = this._parentSubscriber;
    this._context = null, this._parentSubscriber = null, e.unsubscribe();
  }, t;
}(k);
function In(r15) {
  for (; r15; ) {
    var t = r15, e = t.closed, i = t.destination, n = t.isStopped;
    if (e || n)
      return false;
    i && i instanceof k ? r15 = i : r15 = null;
  }
  return true;
}
function Dn(r15, t, e) {
  if (r15) {
    if (r15 instanceof k)
      return r15;
    if (r15[oe])
      return r15[oe]();
  }
  return !r15 && !t && !e ? new k(ge) : new k(r15, t, e);
}
var Et = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Wt(r15) {
  return r15;
}
function Zr() {
  for (var r15 = [], t = 0; t < arguments.length; t++)
    r15[t] = arguments[t];
  return ti(r15);
}
function ti(r15) {
  return r15.length === 0 ? Wt : r15.length === 1 ? r15[0] : function(e) {
    return r15.reduce(function(i, n) {
      return n(i);
    }, e);
  };
}
var C = function() {
  function r15(t) {
    this._isScalar = false, t && (this._subscribe = t);
  }
  return r15.prototype.lift = function(t) {
    var e = new r15();
    return e.source = this, e.operator = t, e;
  }, r15.prototype.subscribe = function(t, e, i) {
    var n = this.operator, s = Dn(t, e, i);
    if (n ? s.add(n.call(s, this.source)) : s.add(this.source || ot.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), ot.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = false, s.syncErrorThrown))
      throw s.syncErrorValue;
    return s;
  }, r15.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (e) {
      ot.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = true, t.syncErrorValue = e), In(t) ? t.error(e) : console.warn(e);
    }
  }, r15.prototype.forEach = function(t, e) {
    var i = this;
    return e = Fn(e), new e(function(n, s) {
      var o;
      o = i.subscribe(function(a) {
        try {
          t(a);
        } catch (u) {
          s(u), o && o.unsubscribe();
        }
      }, s, n);
    });
  }, r15.prototype._subscribe = function(t) {
    var e = this.source;
    return e && e.subscribe(t);
  }, r15.prototype[Et] = function() {
    return this;
  }, r15.prototype.pipe = function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return t.length === 0 ? this : ti(t)(this);
  }, r15.prototype.toPromise = function(t) {
    var e = this;
    return t = Fn(t), new t(function(i, n) {
      var s;
      e.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return n(o);
      }, function() {
        return i(s);
      });
    });
  }, r15.create = function(t) {
    return new r15(t);
  }, r15;
}();
function Fn(r15) {
  if (r15 || (r15 = Promise), !r15)
    throw new Error("no Promise impl found");
  return r15;
}
var Yo = function() {
  function r15() {
    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this;
  }
  return r15.prototype = Object.create(Error.prototype), r15;
}(), Se = Yo;
var zn = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this) || this;
    return n.subject = e, n.subscriber = i, n.closed = false, n;
  }
  return t.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = true;
      var e = this.subject, i = e.observers;
      if (this.subject = null, !(!i || i.length === 0 || e.isStopped || e.closed)) {
        var n = i.indexOf(this.subscriber);
        n !== -1 && i.splice(n, 1);
      }
    }
  }, t;
}(B);
var ei = function(r15) {
  M(t, r15);
  function t(e) {
    var i = r15.call(this, e) || this;
    return i.destination = e, i;
  }
  return t;
}(k);
var ri = function(r15) {
  M(t, r15);
  function t() {
    var e = r15.call(this) || this;
    return e.observers = [], e.closed = false, e.isStopped = false, e.hasError = false, e.thrownError = null, e;
  }
  return t.prototype[oe] = function() {
    return new ei(this);
  }, t.prototype.lift = function(e) {
    var i = new Nn(this, this);
    return i.operator = e, i;
  }, t.prototype.next = function(e) {
    if (this.closed)
      throw new Se();
    if (!this.isStopped)
      for (var i = this.observers, n = i.length, s = i.slice(), o = 0; o < n; o++)
        s[o].next(e);
  }, t.prototype.error = function(e) {
    if (this.closed)
      throw new Se();
    this.hasError = true, this.thrownError = e, this.isStopped = true;
    for (var i = this.observers, n = i.length, s = i.slice(), o = 0; o < n; o++)
      s[o].error(e);
    this.observers.length = 0;
  }, t.prototype.complete = function() {
    if (this.closed)
      throw new Se();
    this.isStopped = true;
    for (var e = this.observers, i = e.length, n = e.slice(), s = 0; s < i; s++)
      n[s].complete();
    this.observers.length = 0;
  }, t.prototype.unsubscribe = function() {
    this.isStopped = true, this.closed = true, this.observers = null;
  }, t.prototype._trySubscribe = function(e) {
    if (this.closed)
      throw new Se();
    return r15.prototype._trySubscribe.call(this, e);
  }, t.prototype._subscribe = function(e) {
    if (this.closed)
      throw new Se();
    return this.hasError ? (e.error(this.thrownError), B.EMPTY) : this.isStopped ? (e.complete(), B.EMPTY) : (this.observers.push(e), new zn(this, e));
  }, t.prototype.asObservable = function() {
    var e = new C();
    return e.source = this, e;
  }, t.create = function(e, i) {
    return new Nn(e, i);
  }, t;
}(C);
var Nn = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this) || this;
    return n.destination = e, n.source = i, n;
  }
  return t.prototype.next = function(e) {
    var i = this.destination;
    i && i.next && i.next(e);
  }, t.prototype.error = function(e) {
    var i = this.destination;
    i && i.error && this.destination.error(e);
  }, t.prototype.complete = function() {
    var e = this.destination;
    e && e.complete && this.destination.complete();
  }, t.prototype._subscribe = function(e) {
    var i = this.source;
    return i ? this.source.subscribe(e) : B.EMPTY;
  }, t;
}(ri);
function wr() {
  return function(t) {
    return t.lift(new Go(t));
  };
}
var Go = function() {
  function r15(t) {
    this.connectable = t;
  }
  return r15.prototype.call = function(t, e) {
    var i = this.connectable;
    i._refCount++;
    var n = new $o(t, i), s = e.subscribe(n);
    return n.closed || (n.connection = i.connect()), s;
  }, r15;
}(), $o = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this, e) || this;
    return n.connectable = i, n;
  }
  return t.prototype._unsubscribe = function() {
    var e = this.connectable;
    if (!e) {
      this.connection = null;
      return;
    }
    this.connectable = null;
    var i = e._refCount;
    if (i <= 0) {
      this.connection = null;
      return;
    }
    if (e._refCount = i - 1, i > 1) {
      this.connection = null;
      return;
    }
    var n = this.connection, s = e._connection;
    this.connection = null, s && (!n || s === n) && s.unsubscribe();
  }, t;
}(k);
var jo = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this) || this;
    return n.source = e, n.subjectFactory = i, n._refCount = 0, n._isComplete = false, n;
  }
  return t.prototype._subscribe = function(e) {
    return this.getSubject().subscribe(e);
  }, t.prototype.getSubject = function() {
    var e = this._subject;
    return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject;
  }, t.prototype.connect = function() {
    var e = this._connection;
    return e || (this._isComplete = false, e = this._connection = new B(), e.add(this.source.subscribe(new qo(this.getSubject(), this))), e.closed && (this._connection = null, e = B.EMPTY)), e;
  }, t.prototype.refCount = function() {
    return wr()(this);
  }, t;
}(C);
var Bn = function() {
  var r15 = jo.prototype;
  return { operator: { value: null }, _refCount: { value: 0, writable: true }, _subject: { value: null, writable: true }, _connection: { value: null, writable: true }, _subscribe: { value: r15._subscribe }, _isComplete: { value: r15._isComplete, writable: true }, getSubject: { value: r15.getSubject }, connect: { value: r15.connect }, refCount: { value: r15.refCount } };
}(), qo = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this, e) || this;
    return n.connectable = i, n;
  }
  return t.prototype._error = function(e) {
    this._unsubscribe(), r15.prototype._error.call(this, e);
  }, t.prototype._complete = function() {
    this.connectable._isComplete = true, this._unsubscribe(), r15.prototype._complete.call(this);
  }, t.prototype._unsubscribe = function() {
    var e = this.connectable;
    if (e) {
      this.connectable = null;
      var i = e._connection;
      e._refCount = 0, e._subject = null, e._connection = null, i && i.unsubscribe();
    }
  }, t;
}(ei);
var Un = function(r15) {
  M(t, r15);
  function t(e, i) {
    return r15.call(this) || this;
  }
  return t.prototype.schedule = function(e, i) {
    return this;
  }, t;
}(B);
var Wn = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this, e, i) || this;
    return n.scheduler = e, n.work = i, n.pending = false, n;
  }
  return t.prototype.schedule = function(e, i) {
    if (i === void 0 && (i = 0), this.closed)
      return this;
    this.state = e;
    var n = this.id, s = this.scheduler;
    return n != null && (this.id = this.recycleAsyncId(s, n, i)), this.pending = true, this.delay = i, this.id = this.id || this.requestAsyncId(s, this.id, i), this;
  }, t.prototype.requestAsyncId = function(e, i, n) {
    return n === void 0 && (n = 0), setInterval(e.flush.bind(e, this), n);
  }, t.prototype.recycleAsyncId = function(e, i, n) {
    if (n === void 0 && (n = 0), n !== null && this.delay === n && this.pending === false)
      return i;
    clearInterval(i);
  }, t.prototype.execute = function(e, i) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = false;
    var n = this._execute(e, i);
    if (n)
      return n;
    this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(e, i) {
    var n = false, s = void 0;
    try {
      this.work(e);
    } catch (o) {
      n = true, s = !!o && o || new Error(o);
    }
    if (n)
      return this.unsubscribe(), s;
  }, t.prototype._unsubscribe = function() {
    var e = this.id, i = this.scheduler, n = i.actions, s = n.indexOf(this);
    this.work = null, this.state = null, this.pending = false, this.scheduler = null, s !== -1 && n.splice(s, 1), e != null && (this.id = this.recycleAsyncId(i, e, null)), this.delay = null;
  }, t;
}(Un);
var ii = function() {
  function r15(t, e) {
    e === void 0 && (e = r15.now), this.SchedulerAction = t, this.now = e;
  }
  return r15.prototype.schedule = function(t, e, i) {
    return e === void 0 && (e = 0), new this.SchedulerAction(this, t).schedule(i, e);
  }, r15.now = function() {
    return Date.now();
  }, r15;
}();
var Hn = function(r15) {
  M(t, r15);
  function t(e, i) {
    i === void 0 && (i = ii.now);
    var n = r15.call(this, e, function() {
      return t.delegate && t.delegate !== n ? t.delegate.now() : i();
    }) || this;
    return n.actions = [], n.active = false, n.scheduled = void 0, n;
  }
  return t.prototype.schedule = function(e, i, n) {
    return i === void 0 && (i = 0), t.delegate && t.delegate !== this ? t.delegate.schedule(e, i, n) : r15.prototype.schedule.call(this, e, i, n);
  }, t.prototype.flush = function(e) {
    var i = this.actions;
    if (this.active) {
      i.push(e);
      return;
    }
    var n;
    this.active = true;
    do
      if (n = e.execute(e.state, e.delay))
        break;
    while (e = i.shift());
    if (this.active = false, n) {
      for (; e = i.shift(); )
        e.unsubscribe();
      throw n;
    }
  }, t;
}(ii);
var Xo = new C(function(r15) {
  return r15.complete();
});
function Te(r15) {
  return r15 ? Jo(r15) : Xo;
}
function Jo(r15) {
  return new C(function(t) {
    return r15.schedule(function() {
      return t.complete();
    });
  });
}
function Sr(r15) {
  return r15 && typeof r15.schedule == "function";
}
var Tr = function(r15) {
  return function(t) {
    for (var e = 0, i = r15.length; e < i && !t.closed; e++)
      t.next(r15[e]);
    t.complete();
  };
};
function Ee(r15, t) {
  return new C(function(e) {
    var i = new B(), n = 0;
    return i.add(t.schedule(function() {
      if (n === r15.length) {
        e.complete();
        return;
      }
      e.next(r15[n++]), e.closed || i.add(this.schedule());
    })), i;
  });
}
function Me(r15, t) {
  return t ? Ee(r15, t) : new C(Tr(r15));
}
function I() {
  for (var r15 = [], t = 0; t < arguments.length; t++)
    r15[t] = arguments[t];
  var e = r15[r15.length - 1];
  return Sr(e) ? (r15.pop(), Ee(r15, e)) : Me(r15);
}
function Vn(r15, t) {
  return t ? new C(function(e) {
    return t.schedule(Qo, 0, { error: r15, subscriber: e });
  }) : new C(function(e) {
    return e.error(r15);
  });
}
function Qo(r15) {
  var t = r15.error, e = r15.subscriber;
  e.error(t);
}
var Ko = new Hn(Wn), Er = Ko;
function wt() {
}
var Zo = function() {
  function r15() {
    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this;
  }
  return r15.prototype = Object.create(Error.prototype), r15;
}(), Mr = Zo;
var ta = function() {
  function r15() {
    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this;
  }
  return r15.prototype = Object.create(Error.prototype), r15;
}(), Oe = ta;
var ea = function() {
  function r15() {
    return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this;
  }
  return r15.prototype = Object.create(Error.prototype), r15;
}(), Yn = ea;
function X(r15, t) {
  return function(i) {
    if (typeof r15 != "function")
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    return i.lift(new ra(r15, t));
  };
}
var ra = function() {
  function r15(t, e) {
    this.project = t, this.thisArg = e;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new ia(t, this.project, this.thisArg));
  }, r15;
}();
var ia = function(r15) {
  M(t, r15);
  function t(e, i, n) {
    var s = r15.call(this, e) || this;
    return s.project = i, s.count = 0, s.thisArg = n || s, s;
  }
  return t.prototype._next = function(e) {
    var i;
    try {
      i = this.project.call(this.thisArg, e, this.count++);
    } catch (n) {
      this.destination.error(n);
      return;
    }
    this.destination.next(i);
  }, t;
}(k);
var Gn = function(r15) {
  M(t, r15);
  function t() {
    return r15 !== null && r15.apply(this, arguments) || this;
  }
  return t.prototype.notifyNext = function(e, i, n, s, o) {
    this.destination.next(i);
  }, t.prototype.notifyError = function(e, i) {
    this.destination.error(e);
  }, t.prototype.notifyComplete = function(e) {
    this.destination.complete();
  }, t;
}(k);
var $n = function(r15) {
  M(t, r15);
  function t(e, i, n) {
    var s = r15.call(this) || this;
    return s.parent = e, s.outerValue = i, s.outerIndex = n, s.index = 0, s;
  }
  return t.prototype._next = function(e) {
    this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this);
  }, t.prototype._error = function(e) {
    this.parent.notifyError(e, this), this.unsubscribe();
  }, t.prototype._complete = function() {
    this.parent.notifyComplete(this), this.unsubscribe();
  }, t;
}(k);
var jn = function(r15) {
  return function(t) {
    return r15.then(function(e) {
      t.closed || (t.next(e), t.complete());
    }, function(e) {
      return t.error(e);
    }).then(null, Rt), t;
  };
};
function na() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ht = na();
var qn = function(r15) {
  return function(t) {
    var e = r15[Ht]();
    do {
      var i = void 0;
      try {
        i = e.next();
      } catch (n) {
        return t.error(n), t;
      }
      if (i.done) {
        t.complete();
        break;
      }
      if (t.next(i.value), t.closed)
        break;
    } while (true);
    return typeof e.return == "function" && t.add(function() {
      e.return && e.return();
    }), t;
  };
};
var Xn = function(r15) {
  return function(t) {
    var e = r15[Et]();
    if (typeof e.subscribe != "function")
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    return e.subscribe(t);
  };
};
var Or = function(r15) {
  return r15 && typeof r15.length == "number" && typeof r15 != "function";
};
function Pr(r15) {
  return !!r15 && typeof r15.subscribe != "function" && typeof r15.then == "function";
}
var Pe = function(r15) {
  if (!!r15 && typeof r15[Et] == "function")
    return Xn(r15);
  if (Or(r15))
    return Tr(r15);
  if (Pr(r15))
    return jn(r15);
  if (!!r15 && typeof r15[Ht] == "function")
    return qn(r15);
  var t = gr(r15) ? "an invalid object" : "'" + r15 + "'", e = "You provided " + t + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
  throw new TypeError(e);
};
function Jn(r15, t, e, i, n) {
  if (n === void 0 && (n = new $n(r15, e, i)), !n.closed)
    return t instanceof C ? t.subscribe(n) : Pe(t)(n);
}
function Qn(r15, t) {
  return new C(function(e) {
    var i = new B();
    return i.add(t.schedule(function() {
      var n = r15[Et]();
      i.add(n.subscribe({ next: function(s) {
        i.add(t.schedule(function() {
          return e.next(s);
        }));
      }, error: function(s) {
        i.add(t.schedule(function() {
          return e.error(s);
        }));
      }, complete: function() {
        i.add(t.schedule(function() {
          return e.complete();
        }));
      } }));
    })), i;
  });
}
function Kn(r15, t) {
  return new C(function(e) {
    var i = new B();
    return i.add(t.schedule(function() {
      return r15.then(function(n) {
        i.add(t.schedule(function() {
          e.next(n), i.add(t.schedule(function() {
            return e.complete();
          }));
        }));
      }, function(n) {
        i.add(t.schedule(function() {
          return e.error(n);
        }));
      });
    })), i;
  });
}
function Zn(r15, t) {
  if (!r15)
    throw new Error("Iterable cannot be null");
  return new C(function(e) {
    var i = new B(), n;
    return i.add(function() {
      n && typeof n.return == "function" && n.return();
    }), i.add(t.schedule(function() {
      n = r15[Ht](), i.add(t.schedule(function() {
        if (!e.closed) {
          var s, o;
          try {
            var a = n.next();
            s = a.value, o = a.done;
          } catch (u) {
            e.error(u);
            return;
          }
          o ? e.complete() : (e.next(s), this.schedule());
        }
      }));
    })), i;
  });
}
function ts(r15) {
  return r15 && typeof r15[Et] == "function";
}
function es(r15) {
  return r15 && typeof r15[Ht] == "function";
}
function rs(r15, t) {
  if (r15 != null) {
    if (ts(r15))
      return Qn(r15, t);
    if (Pr(r15))
      return Kn(r15, t);
    if (Or(r15))
      return Ee(r15, t);
    if (es(r15) || typeof r15 == "string")
      return Zn(r15, t);
  }
  throw new TypeError((r15 !== null && typeof r15 || r15) + " is not observable");
}
function mt(r15, t) {
  return t ? rs(r15, t) : r15 instanceof C ? r15 : new C(Pe(r15));
}
var Mt = function(r15) {
  M(t, r15);
  function t(e) {
    var i = r15.call(this) || this;
    return i.parent = e, i;
  }
  return t.prototype._next = function(e) {
    this.parent.notifyNext(e);
  }, t.prototype._error = function(e) {
    this.parent.notifyError(e), this.unsubscribe();
  }, t.prototype._complete = function() {
    this.parent.notifyComplete(), this.unsubscribe();
  }, t;
}(k);
var Ot = function(r15) {
  M(t, r15);
  function t() {
    return r15 !== null && r15.apply(this, arguments) || this;
  }
  return t.prototype.notifyNext = function(e) {
    this.destination.next(e);
  }, t.prototype.notifyError = function(e) {
    this.destination.error(e);
  }, t.prototype.notifyComplete = function() {
    this.destination.complete();
  }, t;
}(k);
function Pt(r15, t) {
  if (!t.closed) {
    if (r15 instanceof C)
      return r15.subscribe(t);
    var e;
    try {
      e = Pe(r15)(t);
    } catch (i) {
      t.error(i);
    }
    return e;
  }
}
function It(r15, t, e) {
  return e === void 0 && (e = Number.POSITIVE_INFINITY), typeof t == "function" ? function(i) {
    return i.pipe(It(function(n, s) {
      return mt(r15(n, s)).pipe(X(function(o, a) {
        return t(n, o, s, a);
      }));
    }, e));
  } : (typeof t == "number" && (e = t), function(i) {
    return i.lift(new sa(r15, e));
  });
}
var sa = function() {
  function r15(t, e) {
    e === void 0 && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new oa(t, this.project, this.concurrent));
  }, r15;
}();
var oa = function(r15) {
  M(t, r15);
  function t(e, i, n) {
    n === void 0 && (n = Number.POSITIVE_INFINITY);
    var s = r15.call(this, e) || this;
    return s.project = i, s.concurrent = n, s.hasCompleted = false, s.buffer = [], s.active = 0, s.index = 0, s;
  }
  return t.prototype._next = function(e) {
    this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
  }, t.prototype._tryNext = function(e) {
    var i, n = this.index++;
    try {
      i = this.project(e, n);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this.active++, this._innerSub(i);
  }, t.prototype._innerSub = function(e) {
    var i = new Mt(this), n = this.destination;
    n.add(i);
    var s = Pt(e, i);
    s !== i && n.add(s);
  }, t.prototype._complete = function() {
    this.hasCompleted = true, this.active === 0 && this.buffer.length === 0 && this.destination.complete(), this.unsubscribe();
  }, t.prototype.notifyNext = function(e) {
    this.destination.next(e);
  }, t.prototype.notifyComplete = function() {
    var e = this.buffer;
    this.active--, e.length > 0 ? this._next(e.shift()) : this.active === 0 && this.hasCompleted && this.destination.complete();
  }, t;
}(Ot);
function Cr(r15) {
  return r15 === void 0 && (r15 = Number.POSITIVE_INFINITY), It(Wt, r15);
}
function is() {
  return Cr(1);
}
function Je() {
  for (var r15 = [], t = 0; t < arguments.length; t++)
    r15[t] = arguments[t];
  return is()(I.apply(void 0, r15));
}
function ae(r15, t, e, i) {
  return Lt(e) && (i = e, e = void 0), i ? ae(r15, t, e).pipe(X(function(n) {
    return we(n) ? i.apply(void 0, n) : i(n);
  })) : new C(function(n) {
    function s(o) {
      arguments.length > 1 ? n.next(Array.prototype.slice.call(arguments)) : n.next(o);
    }
    ns(r15, t, s, n, e);
  });
}
function ns(r15, t, e, i, n) {
  var s;
  if (la(r15)) {
    var o = r15;
    r15.addEventListener(t, e, n), s = function() {
      return o.removeEventListener(t, e, n);
    };
  } else if (ua(r15)) {
    var a = r15;
    r15.on(t, e), s = function() {
      return a.off(t, e);
    };
  } else if (aa(r15)) {
    var u = r15;
    r15.addListener(t, e), s = function() {
      return u.removeListener(t, e);
    };
  } else if (r15 && r15.length)
    for (var l = 0, f = r15.length; l < f; l++)
      ns(r15[l], t, e, i, n);
  else
    throw new TypeError("Invalid event target");
  i.add(s);
}
function aa(r15) {
  return r15 && typeof r15.addListener == "function" && typeof r15.removeListener == "function";
}
function ua(r15) {
  return r15 && typeof r15.on == "function" && typeof r15.off == "function";
}
function la(r15) {
  return r15 && typeof r15.addEventListener == "function" && typeof r15.removeEventListener == "function";
}
function Ce() {
  for (var r15 = [], t = 0; t < arguments.length; t++)
    r15[t] = arguments[t];
  var e = Number.POSITIVE_INFINITY, i = null, n = r15[r15.length - 1];
  return Sr(n) ? (i = r15.pop(), r15.length > 1 && typeof r15[r15.length - 1] == "number" && (e = r15.pop())) : typeof n == "number" && (e = r15.pop()), i === null && r15.length === 1 && r15[0] instanceof C ? r15[0] : Cr(e)(Me(r15, i));
}
var ni = new C(wt);
function Ar(r15, t) {
  return function(i) {
    return i.lift(new fa(r15, t));
  };
}
var fa = function() {
  function r15(t, e) {
    this.predicate = t, this.thisArg = e;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new ca(t, this.predicate, this.thisArg));
  }, r15;
}(), ca = function(r15) {
  M(t, r15);
  function t(e, i, n) {
    var s = r15.call(this, e) || this;
    return s.predicate = i, s.thisArg = n, s.count = 0, s;
  }
  return t.prototype._next = function(e) {
    var i;
    try {
      i = this.predicate.call(this.thisArg, e, this.count++);
    } catch (n) {
      this.destination.error(n);
      return;
    }
    i && this.destination.next(e);
  }, t;
}(k);
function si() {
  for (var r15 = [], t = 0; t < arguments.length; t++)
    r15[t] = arguments[t];
  if (r15.length === 1)
    if (we(r15[0]))
      r15 = r15[0];
    else
      return r15[0];
  return Me(r15, void 0).lift(new ha());
}
var ha = function() {
  function r15() {
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new pa(t));
  }, r15;
}();
var pa = function(r15) {
  M(t, r15);
  function t(e) {
    var i = r15.call(this, e) || this;
    return i.hasFirst = false, i.observables = [], i.subscriptions = [], i;
  }
  return t.prototype._next = function(e) {
    this.observables.push(e);
  }, t.prototype._complete = function() {
    var e = this.observables, i = e.length;
    if (i === 0)
      this.destination.complete();
    else {
      for (var n = 0; n < i && !this.hasFirst; n++) {
        var s = e[n], o = Jn(this, s, void 0, n);
        this.subscriptions && this.subscriptions.push(o), this.add(o);
      }
      this.observables = null;
    }
  }, t.prototype.notifyNext = function(e, i, n) {
    if (!this.hasFirst) {
      this.hasFirst = true;
      for (var s = 0; s < this.subscriptions.length; s++)
        if (s !== n) {
          var o = this.subscriptions[s];
          o.unsubscribe(), this.remove(o);
        }
      this.subscriptions = null;
    }
    this.destination.next(i);
  }, t;
}(Gn);
var ma = (r15) => `
  <div id="playerui-${r15}">
    <div id="player-${r15}" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: auto;"></div>
    <div id="playerui-controls-${r15}" style="z-index: 9999;
        position: absolute;
        bottom: 0;
        width: 100%;
        background: rgba(0,0,0,0.5);
        color: white;
        height: 2em;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;">
        <button id="play-${r15}" type="button" style="margin: 0 1em;">
        </button>
        <div>
            <input id="loop-${r15}" type="checkbox" />
            <label>Loop</label>
        </div>
        <div style="flex-grow: 1; display: flex; align-items: center; margin-left: 0.5em;">
            <span id="time-${r15}"></span>
            <input
                id="seek-${r15}"
                style="width: 80%;"
                type="range"
                step="0.1"
                min="0"
            />
            <span id="duration-${r15}"></span>
        </div>
    </div>
  </div>
`;
var da = class {
  constructor(t, e) {
    __publicField(this, "time", 0);
    __publicField(this, "isPlaying", false);
    __publicField(this, "playing$", new B());
    __publicField(this, "seeking$", new B());
    __publicField(this, "loop", false);
    __publicField(this, "player");
    __publicField(this, "renderer");
    __publicField(this, "ui");
    __publicField(this, "elements");
    __publicField(this, "durationSubscription");
    var _a2;
    this.id = t;
    this.playlist = e;
    this.ui = document.createElement("div"), this.ui.innerHTML = ma(this.id), (_a2 = document.querySelector(`#${t}`)) == null ? void 0 : _a2.appendChild(this.ui);
    let i = this.renderer = new Qe(this.ui.querySelector(`#player-${t}`));
    this.player = new oi(this.playlist, i), this.mounted(), this.elements = { play: this.ui.querySelector(`#play-${t}`), time: this.ui.querySelector(`#time-${t}`), seek: this.ui.querySelector(`#seek-${t}`), duration: this.ui.querySelector(`#duration-${t}`), loop: this.ui.querySelector(`#loop-${t}`) }, this.elements.play.addEventListener("click", () => this.playStop()), this.elements.loop.addEventListener("change", () => {
      this.loop = this.elements.loop.checked;
    }), this.elements.seek.addEventListener("input", () => {
      this.position = parseFloat(this.elements.seek.value);
    }), this.durationSubscription = e.duration().subscribe((n) => {
      this.elements.time.textContent = this.timeFormat(this.time / 1e3), this.elements.seek.max = `${n}`, this.elements.duration.textContent = this.timeFormat(n / 1e3), this.elements.play.textContent = "Play", this.elements.loop.checked = this.loop;
    }), this.player.on("end", () => {
      console.log("Playlist ended");
    });
  }
  destroy() {
    this.stop(), this.ui.remove(), this.durationSubscription.unsubscribe();
  }
  mounted() {
    var _a2, _b;
    (_a2 = this.player) == null ? void 0 : _a2.on("time", (t) => {
      this.elements.time.textContent = this.timeFormat(t / 1e3), this.elements.seek.value = `${t}`;
    }), (_b = this.player) == null ? void 0 : _b.on("completed", () => {
      this.stop(), this.position = 0;
    }), this.playlist.seek(0), this.playlist.show(this.renderer).subscribe(() => {
    });
  }
  get position() {
    return this.time;
  }
  set position(t) {
    var _a2;
    let e = this.time = parseInt(`${t}`, 10);
    this.elements.time.textContent = this.timeFormat(e / 1e3), this.elements.seek.value = `${e}`;
    let i = this.isPlaying;
    i && this.stop(), (_a2 = this.seeking$) == null ? void 0 : _a2.unsubscribe(), this.playlist.seek(parseFloat(`${t}`)), this.playlist.time = t, this.seeking$ = this.playlist.show(this.renderer).subscribe(() => {
    }), i && this.play();
  }
  async playStop() {
    return this.isPlaying ? this.stop() : this.play();
  }
  play() {
    var _a2;
    this.isPlaying || (this.elements.play.textContent = "Stop", this.elements.loop.disabled = true, this.isPlaying = true, (_a2 = this.player) == null ? void 0 : _a2.play({ loop: this.loop }));
  }
  async stop() {
    var _a2;
    this.elements.play.textContent = "Play", this.elements.loop.disabled = false, this.isPlaying = false, (_a2 = this.player) == null ? void 0 : _a2.stop();
  }
  timeFormat(t) {
    let e = parseInt(`${t}`, 10);
    e = e < 0 ? 0 : e;
    let i = Math.floor(e % 60), n = Math.floor(e / 60 % 60), s = Math.floor(e / 3600);
    return s = s > 0 ? s + ":" : "", n = (s && n < 10 ? "0" + n : n) + ":", i = i < 10 ? "0" + i : i, s + n + i;
  }
};
function Dt(r15) {
  if (r15 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r15;
}
function cs(r15, t) {
  r15.prototype = Object.create(t.prototype), r15.prototype.constructor = r15, r15.__proto__ = t;
}
var lt = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, ke = { duration: 0.5, overwrite: false, delay: 0 }, xi, _t = 1e8, W = 1 / _t, pi = Math.PI * 2, _a = pi / 4, ba = 0, hs = Math.sqrt, ya = Math.cos, va = Math.sin, q = function(t) {
  return typeof t == "string";
}, J = function(t) {
  return typeof t == "function";
}, Nt = function(t) {
  return typeof t == "number";
}, Ur = function(t) {
  return typeof t > "u";
}, Bt = function(t) {
  return typeof t == "object";
}, ut = function(t) {
  return t !== false;
}, ps = function() {
  return typeof window < "u";
}, kr = function(t) {
  return J(t) || q(t);
}, ms = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, tt = Array.isArray, mi = /(?:-?\.?\d|\.)+/gi, gi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, fe = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ai = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, wi = /[+-]=-?[.\d]+/, ds = /[^,'"\[\]\s]+/gi, xa = /[\d.+\-=]+(?:e[-+]\d*)*/i, H, Ct, di, Si, ct = {}, Rr = {}, _s, bs = function(t) {
  return (Rr = Le(t, ct)) && xt;
}, Wr = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Ir = function(t, e) {
  return !e && console.warn(t);
}, ys = function(t, e) {
  return t && (ct[t] = e) && Rr && (Rr[t] = e) || ct;
}, ir = function() {
  return 0;
}, Ti = {}, Yt = [], _i = {}, vs, at = {}, ui = {}, ss = 30, Lr = [], Ei = "", Mi = function(t) {
  var e = t[0], i, n;
  if (Bt(e) || J(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (n = Lr.length; n-- && !Lr[n].targetTest(e); )
      ;
    i = Lr[n];
  }
  for (n = t.length; n--; )
    t[n] && (t[n]._gsap || (t[n]._gsap = new Ci(t[n], i))) || t.splice(n, 1);
  return t;
}, Gt = function(t) {
  return t._gsap || Mi(bt(t))[0]._gsap;
}, Oi = function(t, e, i) {
  return (i = t[e]) && J(i) ? t[e]() : Ur(i) && t.getAttribute && t.getAttribute(e) || i;
}, rt = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, Y = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, K = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, ga = function(t, e) {
  for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; )
    ;
  return n < i;
}, Dr = function() {
  var t = Yt.length, e = Yt.slice(0), i, n;
  for (_i = {}, Yt.length = 0, i = 0; i < t; i++)
    n = e[i], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], true)._lazy = 0);
}, xs = function(t, e, i, n) {
  Yt.length && Dr(), t.render(e, i, n), Yt.length && Dr();
}, gs = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(ds).length < 2 ? e : q(t) ? t.trim() : t;
}, ws = function(t) {
  return t;
}, vt = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, wa = function(t) {
  return function(e, i) {
    for (var n in i)
      n in e || n === "duration" && t || n === "ease" || (e[n] = i[n]);
  };
}, Le = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, os = function r(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = Bt(e[i]) ? r(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, Fr = function(t, e) {
  var i = {}, n;
  for (n in t)
    n in e || (i[n] = t[n]);
  return i;
}, tr = function(t) {
  var e = t.parent || H, i = t.keyframes ? wa(tt(t.keyframes)) : vt;
  if (ut(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Sa = function(t, e) {
  for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Ta = function(t, e, i, n, s) {
  i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
  var o = t[n], a;
  if (s)
    for (a = e[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e;
}, Hr = function(t, e, i, n) {
  i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
  var s = e._prev, o = e._next;
  s ? s._next = o : t[i] === e && (t[i] = o), o ? o._prev = s : t[n] === e && (t[n] = s), e._next = e._prev = e.parent = null;
}, Ft = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
}, ue = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, Ea = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ma = function r2(t) {
  return !t || t._ts && r2(t.parent);
}, as = function(t) {
  return t._repeat ? Re(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Re = function(t, e) {
  var i = Math.floor(t /= e);
  return t && i === t ? i - 1 : i;
}, zr = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Vr = function(t) {
  return t._end = K(t._start + (t._tDur / Math.abs(t._ts || t._rts || W) || 0));
}, Ss = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = K(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Vr(t), i._dirty || ue(i, t)), t;
}, Ts = function(t, e) {
  var i;
  if ((e._time || e._initted && !e._dur) && (i = zr(t.rawTime(), e), (!e._dur || sr(0, e.totalDuration(), i) - e._tTime > W) && e.render(i, true)), ue(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -W;
  }
}, At = function(t, e, i, n) {
  return e.parent && Ft(e), e._start = K((Nt(i) ? i : i || t !== H ? dt(t, i, e) : t._time) + e._delay), e._end = K(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ta(t, e, "_first", "_last", t._sort ? "_start" : 0), bi(e) || (t._recent = e), n || Ts(t, e), t;
}, Es = function(t, e) {
  return (ct.ScrollTrigger || Wr("scrollTrigger", e)) && ct.ScrollTrigger.create(e, t);
}, Ms = function(t, e, i, n) {
  if (Xa(t, e), !t._initted)
    return 1;
  if (!i && t._pt && (t._dur && t.vars.lazy !== false || !t._dur && t.vars.lazy) && vs !== ft.frame)
    return Yt.push(t), t._lazy = [e, n], 1;
}, Oa = function r3(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || r3(e));
}, bi = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Pa = function(t, e, i, n) {
  var s = t.ratio, o = e < 0 || !e && (!t._start && Oa(t) && !(!t._initted && bi(t)) || (t._ts < 0 || t._dp._ts < 0) && !bi(t)) ? 0 : 1, a = t._rDelay, u = 0, l, f, c;
  if (a && t._repeat && (u = sr(0, t._tDur, e), f = Re(u, a), t._yoyo && f & 1 && (o = 1 - o), f !== Re(t._tTime, a) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || n || t._zTime === W || !e && t._zTime) {
    if (!t._initted && Ms(t, e, n, i))
      return;
    for (c = t._zTime, t._zTime = e || (i ? W : 0), i || (i = e && !c), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = u, l = t._pt; l; )
      l.r(o, l.d), l = l._next;
    t._startAt && e < 0 && t._startAt.render(e, true, true), t._onUpdate && !i && yt(t, "onUpdate"), u && t._repeat && !i && t.parent && yt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Ft(t, 1), i || (yt(t, o ? "onComplete" : "onReverseComplete", true), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, Ca = function(t, e, i) {
  var n;
  if (i > e)
    for (n = t._first; n && n._start <= i; ) {
      if (n.data === "isPause" && n._start > e)
        return n;
      n = n._next;
    }
  else
    for (n = t._last; n && n._start >= i; ) {
      if (n.data === "isPause" && n._start < e)
        return n;
      n = n._prev;
    }
}, Ie = function(t, e, i, n) {
  var s = t._repeat, o = K(e) || 0, a = t._tTime / t._tDur;
  return a && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = s ? s < 0 ? 1e10 : K(o * (s + 1) + t._rDelay * s) : o, a > 0 && !n ? Ss(t, t._tTime = t._tDur * a) : t.parent && Vr(t), i || ue(t.parent, t), t;
}, us = function(t) {
  return t instanceof Z ? ue(t) : Ie(t, t._dur);
}, Aa = { _start: 0, endTime: ir, totalDuration: ir }, dt = function r4(t, e, i) {
  var n = t.labels, s = t._recent || Aa, o = t.duration() >= _t ? s.endTime(false) : t._dur, a, u, l;
  return q(e) && (isNaN(e) || e in n) ? (u = e.charAt(0), l = e.substr(-1) === "%", a = e.indexOf("="), u === "<" || u === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (u === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (a < 0 ? s : i).totalDuration() / 100 : 1)) : a < 0 ? (e in n || (n[e] = o), n[e]) : (u = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), l && i && (u = u / 100 * (tt(i) ? i[0] : i).totalDuration()), a > 1 ? r4(t, e.substr(0, a - 1), i) + u : o + u)) : e == null ? o : +e;
}, er = function(t, e, i) {
  var n = Nt(e[1]), s = (n ? 2 : 1) + (t < 2 ? 0 : 1), o = e[s], a, u;
  if (n && (o.duration = e[1]), o.parent = i, t) {
    for (a = o, u = i; u && !("immediateRender" in a); )
      a = u.vars.defaults || {}, u = ut(u.vars.inherit) && u.parent;
    o.immediateRender = ut(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1];
  }
  return new j(e[0], o, e[s + 1]);
}, $t = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, sr = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, it = function(t, e) {
  return !q(t) || !(e = xa.exec(t)) ? "" : t.substr(e.index + e[0].length);
}, ka = function(t, e, i) {
  return $t(i, function(n) {
    return sr(t, e, n);
  });
}, yi = [].slice, Os = function(t, e) {
  return t && Bt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Bt(t[0])) && !t.nodeType && t !== Ct;
}, La = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(n) {
    var s;
    return q(n) && !e || Os(n, 1) ? (s = i).push.apply(s, bt(n)) : i.push(n);
  }) || i;
}, bt = function(t, e, i) {
  return q(t) && !i && (di || !De()) ? yi.call((e || Si).querySelectorAll(t), 0) : tt(t) ? La(t, i) : Os(t) ? yi.call(t, 0) : t ? [t] : [];
}, Ra = function(t) {
  return t = bt(t)[0] || Ir("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return bt(e, i.querySelectorAll ? i : i === t ? Ir("Invalid scope") || Si.createElement("div") : t);
  };
}, Ps = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Cs = function(t) {
  if (J(t))
    return t;
  var e = Bt(t) ? t : { each: t }, i = le(e.ease), n = e.from || 0, s = parseFloat(e.base) || 0, o = {}, a = n > 0 && n < 1, u = isNaN(n) || a, l = e.axis, f = n, c = n;
  return q(n) ? f = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0 : !a && u && (f = n[0], c = n[1]), function(p, h, _) {
    var m = (_ || e).length, d = o[m], b, w, x, g, y, v, T, E, S;
    if (!d) {
      if (S = e.grid === "auto" ? 0 : (e.grid || [1, _t])[1], !S) {
        for (T = -_t; T < (T = _[S++].getBoundingClientRect().left) && S < m; )
          ;
        S--;
      }
      for (d = o[m] = [], b = u ? Math.min(S, m) * f - 0.5 : n % S, w = S === _t ? 0 : u ? m * c / S - 0.5 : n / S | 0, T = 0, E = _t, v = 0; v < m; v++)
        x = v % S - b, g = w - (v / S | 0), d[v] = y = l ? Math.abs(l === "y" ? g : x) : hs(x * x + g * g), y > T && (T = y), y < E && (E = y);
      n === "random" && Ps(d), d.max = T - E, d.min = E, d.v = m = (parseFloat(e.amount) || parseFloat(e.each) * (S > m ? m - 1 : l ? l === "y" ? m / S : S : Math.max(S, m / S)) || 0) * (n === "edges" ? -1 : 1), d.b = m < 0 ? s - m : s, d.u = it(e.amount || e.each) || 0, i = i && m < 0 ? Fs(i) : i;
    }
    return m = (d[p] - d.min) / d.max || 0, K(d.b + (i ? i(m) : m) * d.v) + d.u;
  };
}, vi = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var n = Math.round(parseFloat(i) / t) * t * e;
    return (n - n % 1) / e + (Nt(i) ? 0 : it(i));
  };
}, As = function(t, e) {
  var i = tt(t), n, s;
  return !i && Bt(t) && (n = i = t.radius || _t, t.values ? (t = bt(t.values), (s = !Nt(t[0])) && (n *= n)) : t = vi(t.increment)), $t(e, i ? J(t) ? function(o) {
    return s = t(o), Math.abs(s - o) <= n ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), u = parseFloat(s ? o.y : 0), l = _t, f = 0, c = t.length, p, h; c--; )
      s ? (p = t[c].x - a, h = t[c].y - u, p = p * p + h * h) : p = Math.abs(t[c] - a), p < l && (l = p, f = c);
    return f = !n || l <= n ? t[f] : o, s || f === o || Nt(o) ? f : f + it(o);
  } : vi(t));
}, ks = function(t, e, i, n) {
  return $t(tt(t) ? !e : i === true ? !!(i = 0) : !n, function() {
    return tt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * n) / n;
  });
}, Ia = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(n) {
    return e.reduce(function(s, o) {
      return o(s);
    }, n);
  };
}, Da = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || it(i));
  };
}, Fa = function(t, e, i) {
  return Rs(t, e, 0, 1, i);
}, Ls = function(t, e, i) {
  return $t(i, function(n) {
    return t[~~e(n)];
  });
}, za = function r5(t, e, i) {
  var n = e - t;
  return tt(t) ? Ls(t, r5(0, t.length), e) : $t(i, function(s) {
    return (n + (s - t) % n) % n + t;
  });
}, Na = function r6(t, e, i) {
  var n = e - t, s = n * 2;
  return tt(t) ? Ls(t, r6(0, t.length - 1), e) : $t(i, function(o) {
    return o = (s + (o - t) % s) % s || 0, t + (o > n ? s - o : o);
  });
}, Fe = function(t) {
  for (var e = 0, i = "", n, s, o, a; ~(n = t.indexOf("random(", e)); )
    o = t.indexOf(")", n), a = t.charAt(n + 7) === "[", s = t.substr(n + 7, o - n - 7).match(a ? ds : mi), i += t.substr(e, n - e) + ks(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), e = o + 1;
  return i + t.substr(e, t.length - e);
}, Rs = function(t, e, i, n, s) {
  var o = e - t, a = n - i;
  return $t(s, function(u) {
    return i + ((u - t) / o * a || 0);
  });
}, Ba = function r7(t, e, i, n) {
  var s = isNaN(t + e) ? 0 : function(h) {
    return (1 - h) * t + h * e;
  };
  if (!s) {
    var o = q(t), a = {}, u, l, f, c, p;
    if (i === true && (n = 1) && (i = null), o)
      t = { p: t }, e = { p: e };
    else if (tt(t) && !tt(e)) {
      for (f = [], c = t.length, p = c - 2, l = 1; l < c; l++)
        f.push(r7(t[l - 1], t[l]));
      c--, s = function(_) {
        _ *= c;
        var m = Math.min(p, ~~_);
        return f[m](_ - m);
      }, i = e;
    } else
      n || (t = Le(tt(t) ? [] : {}, t));
    if (!f) {
      for (u in e)
        Ai.call(a, t, u, "get", e[u]);
      s = function(_) {
        return Ii(_, a) || (o ? t.p : t);
      };
    }
  }
  return $t(i, s);
}, ls = function(t, e, i) {
  var n = t.labels, s = _t, o, a, u;
  for (o in n)
    a = n[o] - e, a < 0 == !!i && a && s > (a = Math.abs(a)) && (u = o, s = a);
  return u;
}, yt = function(t, e, i) {
  var n = t.vars, s = n[e], o, a;
  if (!!s)
    return o = n[e + "Params"], a = n.callbackScope || t, i && Yt.length && Dr(), o ? s.apply(a, o) : s.call(a);
}, Ke = function(t) {
  return Ft(t), t.scrollTrigger && t.scrollTrigger.kill(false), t.progress() < 1 && yt(t, "onInterrupt"), t;
}, Ae, Ua = function(t) {
  t = !t.name && t.default || t;
  var e = t.name, i = J(t), n = e && !i && t.init ? function() {
    this._props = [];
  } : t, s = { init: ir, render: Ii, add: Ai, kill: ru, modifier: eu, rawVars: 0 }, o = { targetTest: 0, get: 0, getSetter: Yr, aliases: {}, register: 0 };
  if (De(), t !== n) {
    if (at[e])
      return;
    vt(n, vt(Fr(t, s), o)), Le(n.prototype, Le(s, Fr(t, o))), at[n.prop = e] = n, t.targetTest && (Lr.push(n), Ti[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
  }
  ys(e, n), t.register && t.register(xt, n, nt);
}, U = 255, Ze = { aqua: [0, U, U], lime: [0, U, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, U], navy: [0, 0, 128], white: [U, U, U], olive: [128, 128, 0], yellow: [U, U, 0], orange: [U, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [U, 0, 0], pink: [U, 192, 203], cyan: [0, U, U], transparent: [U, U, U, 0] }, li = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * U + 0.5 | 0;
}, Is = function(t, e, i) {
  var n = t ? Nt(t) ? [t >> 16, t >> 8 & U, t & U] : 0 : Ze.black, s, o, a, u, l, f, c, p, h, _;
  if (!n) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ze[t])
      n = Ze[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + s + s + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return n = parseInt(t.substr(1, 6), 16), [n >> 16, n >> 8 & U, n & U, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & U, t & U];
    } else if (t.substr(0, 3) === "hsl") {
      if (n = _ = t.match(mi), !e)
        u = +n[0] % 360 / 360, l = +n[1] / 100, f = +n[2] / 100, o = f <= 0.5 ? f * (l + 1) : f + l - f * l, s = f * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = li(u + 1 / 3, s, o), n[1] = li(u, s, o), n[2] = li(u - 1 / 3, s, o);
      else if (~t.indexOf("="))
        return n = t.match(gi), i && n.length < 4 && (n[3] = 1), n;
    } else
      n = t.match(mi) || Ze.transparent;
    n = n.map(Number);
  }
  return e && !_ && (s = n[0] / U, o = n[1] / U, a = n[2] / U, c = Math.max(s, o, a), p = Math.min(s, o, a), f = (c + p) / 2, c === p ? u = l = 0 : (h = c - p, l = f > 0.5 ? h / (2 - c - p) : h / (c + p), u = c === s ? (o - a) / h + (o < a ? 6 : 0) : c === o ? (a - s) / h + 2 : (s - o) / h + 4, u *= 60), n[0] = ~~(u + 0.5), n[1] = ~~(l * 100 + 0.5), n[2] = ~~(f * 100 + 0.5)), i && n.length < 4 && (n[3] = 1), n;
}, Ds = function(t) {
  var e = [], i = [], n = -1;
  return t.split(zt).forEach(function(s) {
    var o = s.match(fe) || [];
    e.push.apply(e, o), i.push(n += o.length + 1);
  }), e.c = i, e;
}, fs = function(t, e, i) {
  var n = "", s = (t + n).match(zt), o = e ? "hsla(" : "rgba(", a = 0, u, l, f, c;
  if (!s)
    return t;
  if (s = s.map(function(p) {
    return (p = Is(p, e, 1)) && o + (e ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")";
  }), i && (f = Ds(t), u = i.c, u.join(n) !== f.c.join(n)))
    for (l = t.replace(zt, "1").split(fe), c = l.length - 1; a < c; a++)
      n += l[a] + (~u.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (f.length ? f : s.length ? s : i).shift());
  if (!l)
    for (l = t.split(zt), c = l.length - 1; a < c; a++)
      n += l[a] + s[a];
  return n + l[c];
}, zt = function() {
  var r15 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Ze)
    r15 += "|" + t + "\\b";
  return new RegExp(r15 + ")", "gi");
}(), Wa = /hsl[a]?\(/, Pi = function(t) {
  var e = t.join(" "), i;
  if (zt.lastIndex = 0, zt.test(e))
    return i = Wa.test(e), t[1] = fs(t[1], i), t[0] = fs(t[0], i, Ds(t[1])), true;
}, Nr, ft = function() {
  var r15 = Date.now, t = 500, e = 33, i = r15(), n = i, s = 1e3 / 240, o = s, a = [], u, l, f, c, p, h, _ = function m(d) {
    var b = r15() - n, w = d === true, x, g, y, v;
    if (b > t && (i += b - e), n += b, y = n - i, x = y - o, (x > 0 || w) && (v = ++c.frame, p = y - c.time * 1e3, c.time = y = y / 1e3, o += x + (x >= s ? 4 : s - x), g = 1), w || (u = l(m)), g)
      for (h = 0; h < a.length; h++)
        a[h](y, p, v, d);
  };
  return c = { time: 0, frame: 0, tick: function() {
    _(true);
  }, deltaRatio: function(d) {
    return p / (1e3 / (d || 60));
  }, wake: function() {
    _s && (!di && ps() && (Ct = di = window, Si = Ct.document || {}, ct.gsap = xt, (Ct.gsapVersions || (Ct.gsapVersions = [])).push(xt.version), bs(Rr || Ct.GreenSockGlobals || !Ct.gsap && Ct || {}), f = Ct.requestAnimationFrame), u && c.sleep(), l = f || function(d) {
      return setTimeout(d, o - c.time * 1e3 + 1 | 0);
    }, Nr = 1, _(2));
  }, sleep: function() {
    (f ? Ct.cancelAnimationFrame : clearTimeout)(u), Nr = 0, l = ir;
  }, lagSmoothing: function(d, b) {
    t = d || 1 / W, e = Math.min(b, t, 0);
  }, fps: function(d) {
    s = 1e3 / (d || 240), o = c.time * 1e3 + s;
  }, add: function(d) {
    a.indexOf(d) < 0 && a.push(d), De();
  }, remove: function(d, b) {
    ~(b = a.indexOf(d)) && a.splice(b, 1) && h >= b && h--;
  }, _listeners: a }, c;
}(), De = function() {
  return !Nr && ft.wake();
}, D = {}, Ha = /^[\d.\-M][\d.\-,\s]/, Va = /["']/g, Ya = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), n = i[0], s = 1, o = i.length, a, u, l; s < o; s++)
    u = i[s], a = s !== o - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, a), e[n] = isNaN(l) ? l.replace(Va, "").trim() : +l, n = u.substr(a + 1).trim();
  return e;
}, Ga = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), n = t.indexOf("(", e);
  return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i);
}, $a = function(t) {
  var e = (t + "").split("("), i = D[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Ya(e[1])] : Ga(t).split(",").map(gs)) : D._CE && Ha.test(t) ? D._CE("", t) : i;
}, Fs = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, zs = function r8(t, e) {
  for (var i = t._first, n; i; )
    i instanceof Z ? r8(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? r8(i.timeline, e) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = e)), i = i._next;
}, le = function(t, e) {
  return t && (J(t) ? t : D[t] || $a(t)) || e;
}, ce = function(t, e, i, n) {
  i === void 0 && (i = function(u) {
    return 1 - e(1 - u);
  }), n === void 0 && (n = function(u) {
    return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
  });
  var s = { easeIn: e, easeOut: i, easeInOut: n }, o;
  return rt(t, function(a) {
    D[a] = ct[a] = s, D[o = a.toLowerCase()] = i;
    for (var u in s)
      D[o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = D[a + "." + u] = s[u];
  }), s;
}, Ns = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, fi = function r9(t, e, i) {
  var n = e >= 1 ? e : 1, s = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = s / pi * (Math.asin(1 / n) || 0), a = function(f) {
    return f === 1 ? 1 : n * Math.pow(2, -10 * f) * va((f - o) * s) + 1;
  }, u = t === "out" ? a : t === "in" ? function(l) {
    return 1 - a(1 - l);
  } : Ns(a);
  return s = pi / s, u.config = function(l, f) {
    return r9(t, l, f);
  }, u;
}, ci = function r10(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, n = t === "out" ? i : t === "in" ? function(s) {
    return 1 - i(1 - s);
  } : Ns(i);
  return n.config = function(s) {
    return r10(t, s);
  }, n;
};
rt("Linear,Quad,Cubic,Quart,Quint,Strong", function(r15, t) {
  var e = t < 5 ? t + 1 : t;
  ce(r15 + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
D.Linear.easeNone = D.none = D.Linear.easeIn;
ce("Elastic", fi("in"), fi("out"), fi());
(function(r15, t) {
  var e = 1 / t, i = 2 * e, n = 2.5 * e, s = function(a) {
    return a < e ? r15 * a * a : a < i ? r15 * Math.pow(a - 1.5 / t, 2) + 0.75 : a < n ? r15 * (a -= 2.25 / t) * a + 0.9375 : r15 * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  ce("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
ce("Expo", function(r15) {
  return r15 ? Math.pow(2, 10 * (r15 - 1)) : 0;
});
ce("Circ", function(r15) {
  return -(hs(1 - r15 * r15) - 1);
});
ce("Sine", function(r15) {
  return r15 === 1 ? 1 : -ya(r15 * _a) + 1;
});
ce("Back", ci("in"), ci("out"), ci());
D.SteppedEase = D.steps = ct.SteppedEase = { config: function(t, e) {
  t === void 0 && (t = 1);
  var i = 1 / t, n = t + (e ? 0 : 1), s = e ? 1 : 0, o = 1 - W;
  return function(a) {
    return ((n * sr(0, o, a) | 0) + s) * i;
  };
} };
ke.ease = D["quad.out"];
rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r15) {
  return Ei += r15 + "," + r15 + "Params,";
});
var Ci = function(t, e) {
  this.id = ba++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Oi, this.set = e ? e.getSetter : Yr;
}, nr = function() {
  function r15(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ie(this, +e.duration, 1, 1), this.data = e.data, Nr || ft.wake();
  }
  var t = r15.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Ie(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, n) {
    if (De(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Ss(this, i), !s._dp || s.parent || Ts(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, true), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && At(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !n || this._initted && Math.abs(this._zTime) === W || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), xs(this, i, n)), this;
  }, t.time = function(i, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + as(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), n) : this._time;
  }, t.totalProgress = function(i, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(i, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + as(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(i, n) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * s, n) : this._repeat ? Re(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(i) {
    if (!arguments.length)
      return this._rts === -W ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? zr(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -W ? 0 : this._rts, Ea(this.totalTime(sr(-this._delay, this._tDur, n), true)), Vr(this), this;
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (De(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== W && (this._tTime -= W)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && At(n, this, i - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (ut(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var n = this.parent || this._dp;
    return n ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? zr(n.rawTime(i), this) : this._tTime : this._tTime;
  }, t.globalTime = function(i) {
    for (var n = this, s = arguments.length ? i : n.rawTime(); n; )
      s = n._start + s / (n._ts || 1), n = n._dp;
    return s;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, us(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = i, us(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, n) {
    return this.totalTime(dt(this, i), ut(n));
  }, t.restart = function(i, n) {
    return this.play().totalTime(i ? -this._delay : 0, ut(n));
  }, t.play = function(i, n) {
    return i != null && this.seek(i, n), this.reversed(false).paused(false);
  }, t.reverse = function(i, n) {
    return i != null && this.seek(i || this.totalDuration(), n), this.reversed(true).paused(false);
  }, t.pause = function(i, n) {
    return i != null && this.seek(i, n), this.paused(true);
  }, t.resume = function() {
    return this.paused(false);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -W : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -W, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, n = this._start, s;
    return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(true)) >= n && s < this.endTime(true) - W);
  }, t.eventCallback = function(i, n, s) {
    var o = this.vars;
    return arguments.length > 1 ? (n ? (o[i] = n, s && (o[i + "Params"] = s), i === "onUpdate" && (this._onUpdate = n)) : delete o[i], this) : o[i];
  }, t.then = function(i) {
    var n = this;
    return new Promise(function(s) {
      var o = J(i) ? i : ws, a = function() {
        var l = n.then;
        n.then = null, J(o) && (o = o(n)) && (o.then || o === n) && (n.then = l), s(o), n.then = l;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a;
    });
  }, t.kill = function() {
    Ke(this);
  }, r15;
}();
vt(nr.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -W, _prom: 0, _ps: false, _rts: 1 });
var Z = function(r15) {
  cs(t, r15);
  function t(i, n) {
    var s;
    return i === void 0 && (i = {}), s = r15.call(this, i) || this, s.labels = {}, s.smoothChildTiming = !!i.smoothChildTiming, s.autoRemoveChildren = !!i.autoRemoveChildren, s._sort = ut(i.sortChildren), H && At(i.parent || H, Dt(s), n), i.reversed && s.reverse(), i.paused && s.paused(true), i.scrollTrigger && Es(Dt(s), i.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(n, s, o) {
    return er(0, arguments, this), this;
  }, e.from = function(n, s, o) {
    return er(1, arguments, this), this;
  }, e.fromTo = function(n, s, o, a) {
    return er(2, arguments, this), this;
  }, e.set = function(n, s, o) {
    return s.duration = 0, s.parent = this, tr(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new j(n, s, dt(this, o), 1), this;
  }, e.call = function(n, s, o) {
    return At(this, j.delayedCall(0, n, s), o);
  }, e.staggerTo = function(n, s, o, a, u, l, f) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = l, o.onCompleteParams = f, o.parent = this, new j(n, o, dt(this, u)), this;
  }, e.staggerFrom = function(n, s, o, a, u, l, f) {
    return o.runBackwards = 1, tr(o).immediateRender = ut(o.immediateRender), this.staggerTo(n, s, o, a, u, l, f);
  }, e.staggerFromTo = function(n, s, o, a, u, l, f, c) {
    return a.startAt = o, tr(a).immediateRender = ut(a.immediateRender), this.staggerTo(n, s, a, u, l, f, c);
  }, e.render = function(n, s, o) {
    var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = n <= 0 ? 0 : K(n), c = this._zTime < 0 != n < 0 && (this._initted || !l), p, h, _, m, d, b, w, x, g, y, v, T;
    if (this !== H && f > u && n >= 0 && (f = u), f !== this._tTime || o || c) {
      if (a !== this._time && l && (f += this._time - a, n += this._time - a), p = f, g = this._start, x = this._ts, b = !x, c && (l || (a = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
        if (v = this._yoyo, d = l + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(d * 100 + n, s, o);
        if (p = K(f % d), f === u ? (m = this._repeat, p = l) : (m = ~~(f / d), m && m === f / d && (p = l, m--), p > l && (p = l)), y = Re(this._tTime, d), !a && this._tTime && y !== m && (y = m), v && m & 1 && (p = l - p, T = 1), m !== y && !this._lock) {
          var E = v && y & 1, S = E === (v && m & 1);
          if (m < y && (E = !E), a = E ? 0 : l, this._lock = 1, this.render(a || (T ? 0 : K(m * d)), s, !l)._lock = 0, this._tTime = f, !s && this.parent && yt(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), a && a !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, u = this._tDur, S && (this._lock = 2, a = E ? l : -1e-4, this.render(a, true), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
          zs(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = Ca(this, K(a), K(p)), w && (f -= p - (p = w._start))), this._tTime = f, this._time = p, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && p && !s && (yt(this, "onStart"), this._tTime !== f))
        return this;
      if (p >= a && n >= 0)
        for (h = this._first; h; ) {
          if (_ = h._next, (h._act || p >= h._start) && h._ts && w !== h) {
            if (h.parent !== this)
              return this.render(n, s, o);
            if (h.render(h._ts > 0 ? (p - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (p - h._start) * h._ts, s, o), p !== this._time || !this._ts && !b) {
              w = 0, _ && (f += this._zTime = -W);
              break;
            }
          }
          h = _;
        }
      else {
        h = this._last;
        for (var O = n < 0 ? n : p; h; ) {
          if (_ = h._prev, (h._act || O <= h._end) && h._ts && w !== h) {
            if (h.parent !== this)
              return this.render(n, s, o);
            if (h.render(h._ts > 0 ? (O - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (O - h._start) * h._ts, s, o), p !== this._time || !this._ts && !b) {
              w = 0, _ && (f += this._zTime = O ? -W : W);
              break;
            }
          }
          h = _;
        }
      }
      if (w && !s && (this.pause(), w.render(p >= a ? 0 : -W)._zTime = p >= a ? 1 : -1, this._ts))
        return this._start = g, Vr(this), this.render(n, s, o);
      this._onUpdate && !s && yt(this, "onUpdate", true), (f === u && u >= this.totalDuration() || !f && a) && (g === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((n || !l) && (f === u && this._ts > 0 || !f && this._ts < 0) && Ft(this, 1), !s && !(n < 0 && !a) && (f || a || !u) && (yt(this, f === u && n >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(f < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(n, s) {
    var o = this;
    if (Nt(s) || (s = dt(this, s, n)), !(n instanceof nr)) {
      if (tt(n))
        return n.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (q(n))
        return this.addLabel(n, s);
      if (J(n))
        n = j.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? At(this, n, s) : this;
  }, e.getChildren = function(n, s, o, a) {
    n === void 0 && (n = true), s === void 0 && (s = true), o === void 0 && (o = true), a === void 0 && (a = -_t);
    for (var u = [], l = this._first; l; )
      l._start >= a && (l instanceof j ? s && u.push(l) : (o && u.push(l), n && u.push.apply(u, l.getChildren(true, s, o)))), l = l._next;
    return u;
  }, e.getById = function(n) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === n)
        return s[o];
  }, e.remove = function(n) {
    return q(n) ? this.removeLabel(n) : J(n) ? this.killTweensOf(n) : (Hr(this, n), n === this._recent && (this._recent = this._last), ue(this));
  }, e.totalTime = function(n, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = K(ft.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), r15.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(n, s) {
    return this.labels[n] = dt(this, s), this;
  }, e.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, e.addPause = function(n, s, o) {
    var a = j.delayedCall(0, s || ir, o);
    return a.data = "isPause", this._hasPause = 1, At(this, a, dt(this, n));
  }, e.removePause = function(n) {
    var s = this._first;
    for (n = dt(this, n); s; )
      s._start === n && s.data === "isPause" && Ft(s), s = s._next;
  }, e.killTweensOf = function(n, s, o) {
    for (var a = this.getTweensOf(n, o), u = a.length; u--; )
      Vt !== a[u] && a[u].kill(n, s);
    return this;
  }, e.getTweensOf = function(n, s) {
    for (var o = [], a = bt(n), u = this._first, l = Nt(s), f; u; )
      u instanceof j ? ga(u._targets, a) && (l ? (!Vt || u._initted && u._ts) && u.globalTime(0) <= s && u.globalTime(u.totalDuration()) > s : !s || u.isActive()) && o.push(u) : (f = u.getTweensOf(a, s)).length && o.push.apply(o, f), u = u._next;
    return o;
  }, e.tweenTo = function(n, s) {
    s = s || {};
    var o = this, a = dt(o, n), u = s, l = u.startAt, f = u.onStart, c = u.onStartParams, p = u.immediateRender, h, _ = j.to(o, vt({ ease: s.ease || "none", lazy: false, immediateRender: false, time: a, overwrite: "auto", duration: s.duration || Math.abs((a - (l && "time" in l ? l.time : o._time)) / o.timeScale()) || W, onStart: function() {
      if (o.pause(), !h) {
        var d = s.duration || Math.abs((a - (l && "time" in l ? l.time : o._time)) / o.timeScale());
        _._dur !== d && Ie(_, d, 0, 1).render(_._time, true, true), h = 1;
      }
      f && f.apply(_, c || []);
    } }, s));
    return p ? _.render(0) : _;
  }, e.tweenFromTo = function(n, s, o) {
    return this.tweenTo(s, vt({ startAt: { time: dt(this, n) } }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(n) {
    return n === void 0 && (n = this._time), ls(this, dt(this, n));
  }, e.previousLabel = function(n) {
    return n === void 0 && (n = this._time), ls(this, dt(this, n), 1);
  }, e.currentLabel = function(n) {
    return arguments.length ? this.seek(n, true) : this.previousLabel(this._time + W);
  }, e.shiftChildren = function(n, s, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, u = this.labels, l; a; )
      a._start >= o && (a._start += n, a._end += n), a = a._next;
    if (s)
      for (l in u)
        u[l] >= o && (u[l] += n);
    return ue(this);
  }, e.invalidate = function() {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(), n = n._next;
    return r15.prototype.invalidate.call(this);
  }, e.clear = function(n) {
    n === void 0 && (n = true);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), ue(this);
  }, e.totalDuration = function(n) {
    var s = 0, o = this, a = o._last, u = _t, l, f, c;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
    if (o._dirty) {
      for (c = o.parent; a; )
        l = a._prev, a._dirty && a.totalDuration(), f = a._start, f > u && o._sort && a._ts && !o._lock ? (o._lock = 1, At(o, a, f - a._delay, 1)._lock = 0) : u = f, f < 0 && a._ts && (s -= f, (!c && !o._dp || c && c.smoothChildTiming) && (o._start += f / o._ts, o._time -= f, o._tTime -= f), o.shiftChildren(-f, false, -1 / 0), u = 0), a._end > s && a._ts && (s = a._end), a = l;
      Ie(o, o === H && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(n) {
    if (H._ts && (xs(H, zr(n, H)), vs = ft.frame), ft.frame >= ss) {
      ss += lt.autoSleep || 120;
      var s = H._first;
      if ((!s || !s._ts) && lt.autoSleep && ft._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || ft.sleep();
      }
    }
  }, t;
}(nr);
vt(Z.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var ja = function(t, e, i, n, s, o, a) {
  var u = new nt(this._pt, t, e, 0, 1, Ri, null, s), l = 0, f = 0, c, p, h, _, m, d, b, w;
  for (u.b = i, u.e = n, i += "", n += "", (b = ~n.indexOf("random(")) && (n = Fe(n)), o && (w = [i, n], o(w, t, e), i = w[0], n = w[1]), p = i.match(ai) || []; c = ai.exec(n); )
    _ = c[0], m = n.substring(l, c.index), h ? h = (h + 1) % 5 : m.substr(-5) === "rgba(" && (h = 1), _ !== p[f++] && (d = parseFloat(p[f - 1]) || 0, u._pt = { _next: u._pt, p: m || f === 1 ? m : ",", s: d, c: _.charAt(1) === "=" ? parseFloat(_.substr(2)) * (_.charAt(0) === "-" ? -1 : 1) : parseFloat(_) - d, m: h && h < 4 ? Math.round : 0 }, l = ai.lastIndex);
  return u.c = l < n.length ? n.substring(l, n.length) : "", u.fp = a, (wi.test(n) || b) && (u.e = 0), this._pt = u, u;
}, Ai = function(t, e, i, n, s, o, a, u, l) {
  J(n) && (n = n(s || 0, t, o));
  var f = t[e], c = i !== "get" ? i : J(f) ? l ? t[e.indexOf("set") || !J(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : f, p = J(f) ? l ? Ka : Ws : Li, h;
  if (q(n) && (~n.indexOf("random(") && (n = Fe(n)), n.charAt(1) === "=" && (h = parseFloat(c) + parseFloat(n.substr(2)) * (n.charAt(0) === "-" ? -1 : 1) + (it(c) || 0), (h || h === 0) && (n = h))), c !== n)
    return !isNaN(c * n) && n !== "" ? (h = new nt(this._pt, t, e, +c || 0, n - (c || 0), typeof f == "boolean" ? tu : Hs, 0, p), l && (h.fp = l), a && h.modifier(a, this, t), this._pt = h) : (!f && !(e in t) && Wr(e, n), ja.call(this, t, e, c, n, p, u || lt.stringFilter, l));
}, qa = function(t, e, i, n, s) {
  if (J(t) && (t = rr(t, s, e, i, n)), !Bt(t) || t.style && t.nodeType || tt(t) || ms(t))
    return q(t) ? rr(t, s, e, i, n) : t;
  var o = {}, a;
  for (a in t)
    o[a] = rr(t[a], s, e, i, n);
  return o;
}, ki = function(t, e, i, n, s, o) {
  var a, u, l, f;
  if (at[t] && (a = new at[t]()).init(s, a.rawVars ? e[t] : qa(e[t], n, s, o, i), i, n, o) !== false && (i._pt = u = new nt(i._pt, s, t, 0, 1, a.render, a, 0, a.priority), i !== Ae))
    for (l = i._ptLookup[i._targets.indexOf(s)], f = a._props.length; f--; )
      l[a._props[f]] = u;
  return a;
}, Vt, Xa = function r11(t, e) {
  var i = t.vars, n = i.ease, s = i.startAt, o = i.immediateRender, a = i.lazy, u = i.onUpdate, l = i.onUpdateParams, f = i.callbackScope, c = i.runBackwards, p = i.yoyoEase, h = i.keyframes, _ = i.autoRevert, m = t._dur, d = t._startAt, b = t._targets, w = t.parent, x = w && w.data === "nested" ? w.parent._targets : b, g = t._overwrite === "auto" && !xi, y = t.timeline, v, T, E, S, O, A, L, R, P, F, N, $, St;
  if (y && (!h || !n) && (n = "none"), t._ease = le(n, ke.ease), t._yEase = p ? Fs(le(p === true ? n : p, ke.ease)) : 0, p && t._yoyo && !t._repeat && (p = t._yEase, t._yEase = t._ease, t._ease = p), t._from = !y && !!i.runBackwards, !y || h && !i.stagger) {
    if (R = b[0] ? Gt(b[0]).harness : 0, $ = R && i[R.prop], v = Fr(i, Ti), d && Ft(d.render(-1, true)), s)
      if (Ft(t._startAt = j.set(b, vt({ data: "isStart", overwrite: false, parent: w, immediateRender: true, lazy: ut(a), startAt: null, delay: 0, onUpdate: u, onUpdateParams: l, callbackScope: f, stagger: 0 }, s))), e < 0 && !o && !_ && t._startAt.render(-1, true), o) {
        if (e > 0 && !_ && (t._startAt = 0), m && e <= 0) {
          e && (t._zTime = e);
          return;
        }
      } else
        _ === false && (t._startAt = 0);
    else if (c && m) {
      if (d)
        !_ && (t._startAt = 0);
      else if (e && (o = false), E = vt({ overwrite: false, data: "isFromStart", lazy: o && ut(a), immediateRender: o, stagger: 0, parent: w }, v), $ && (E[R.prop] = $), Ft(t._startAt = j.set(b, E)), e < 0 && t._startAt.render(-1, true), t._zTime = e, !o)
        r11(t._startAt, W);
      else if (!e)
        return;
    }
    for (t._pt = 0, a = m && ut(a) || a && !m, T = 0; T < b.length; T++) {
      if (O = b[T], L = O._gsap || Mi(b)[T]._gsap, t._ptLookup[T] = F = {}, _i[L.id] && Yt.length && Dr(), N = x === b ? T : x.indexOf(O), R && (P = new R()).init(O, $ || v, t, N, x) !== false && (t._pt = S = new nt(t._pt, O, P.name, 0, 1, P.render, P, 0, P.priority), P._props.forEach(function(Tt) {
        F[Tt] = S;
      }), P.priority && (A = 1)), !R || $)
        for (E in v)
          at[E] && (P = ki(E, v, t, N, O, x)) ? P.priority && (A = 1) : F[E] = S = Ai.call(t, O, E, "get", v[E], N, x, 0, i.stringFilter);
      t._op && t._op[T] && t.kill(O, t._op[T]), g && t._pt && (Vt = t, H.killTweensOf(O, F, t.globalTime(e)), St = !t.parent, Vt = 0), t._pt && a && (_i[L.id] = 1);
    }
    A && Di(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !St, h && e <= 0 && y.render(_t, true, true);
}, Ja = function(t, e) {
  var i = t[0] ? Gt(t[0]).harness : 0, n = i && i.aliases, s, o, a, u;
  if (!n)
    return e;
  s = Le({}, e);
  for (o in n)
    if (o in s)
      for (u = n[o].split(","), a = u.length; a--; )
        s[u[a]] = s[o];
  return s;
}, Qa = function(t, e, i, n) {
  var s = e.ease || n || "power1.inOut", o, a;
  if (tt(e))
    a = i[t] || (i[t] = []), e.forEach(function(u, l) {
      return a.push({ t: l / (e.length - 1) * 100, v: u, e: s });
    });
  else
    for (o in e)
      a = i[o] || (i[o] = []), o === "ease" || a.push({ t: parseFloat(t), v: e[o], e: s });
}, rr = function(t, e, i, n, s) {
  return J(t) ? t.call(e, i, n, s) : q(t) && ~t.indexOf("random(") ? Fe(t) : t;
}, Bs = Ei + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Us = {};
rt(Bs + ",id,stagger,delay,duration,paused,scrollTrigger", function(r15) {
  return Us[r15] = 1;
});
var j = function(r15) {
  cs(t, r15);
  function t(i, n, s, o) {
    var a;
    typeof n == "number" && (s.duration = n, n = s, s = null), a = r15.call(this, o ? n : tr(n)) || this;
    var u = a.vars, l = u.duration, f = u.delay, c = u.immediateRender, p = u.stagger, h = u.overwrite, _ = u.keyframes, m = u.defaults, d = u.scrollTrigger, b = u.yoyoEase, w = n.parent || H, x = (tt(i) || ms(i) ? Nt(i[0]) : "length" in n) ? [i] : bt(i), g, y, v, T, E, S, O, A;
    if (a._targets = x.length ? Mi(x) : Ir("GSAP target " + i + " not found. https://greensock.com", !lt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = h, _ || p || kr(l) || kr(f)) {
      if (n = a.vars, g = a.timeline = new Z({ data: "nested", defaults: m || {} }), g.kill(), g.parent = g._dp = Dt(a), g._start = 0, p || kr(l) || kr(f)) {
        if (T = x.length, O = p && Cs(p), Bt(p))
          for (E in p)
            ~Bs.indexOf(E) && (A || (A = {}), A[E] = p[E]);
        for (y = 0; y < T; y++)
          v = Fr(n, Us), v.stagger = 0, b && (v.yoyoEase = b), A && Le(v, A), S = x[y], v.duration = +rr(l, Dt(a), y, S, x), v.delay = (+rr(f, Dt(a), y, S, x) || 0) - a._delay, !p && T === 1 && v.delay && (a._delay = f = v.delay, a._start += f, v.delay = 0), g.to(S, v, O ? O(y, S, x) : 0), g._ease = D.none;
        g.duration() ? l = f = 0 : a.timeline = 0;
      } else if (_) {
        tr(vt(g.vars.defaults, { ease: "none" })), g._ease = le(_.ease || n.ease || "none");
        var L = 0, R, P, F;
        if (tt(_))
          _.forEach(function(N) {
            return g.to(x, N, ">");
          });
        else {
          v = {};
          for (E in _)
            E === "ease" || E === "easeEach" || Qa(E, _[E], v, _.easeEach);
          for (E in v)
            for (R = v[E].sort(function(N, $) {
              return N.t - $.t;
            }), L = 0, y = 0; y < R.length; y++)
              P = R[y], F = { ease: P.e, duration: (P.t - (y ? R[y - 1].t : 0)) / 100 * l }, F[E] = P.v, g.to(x, F, L), L += F.duration;
          g.duration() < l && g.to({}, { duration: l - g.duration() });
        }
      }
      l || a.duration(l = g.duration());
    } else
      a.timeline = 0;
    return h === true && !xi && (Vt = Dt(a), H.killTweensOf(x), Vt = 0), At(w, Dt(a), s), n.reversed && a.reverse(), n.paused && a.paused(true), (c || !l && !_ && a._start === K(w._time) && ut(c) && Ma(Dt(a)) && w.data !== "nested") && (a._tTime = -W, a.render(Math.max(0, -f))), d && Es(Dt(a), d), a;
  }
  var e = t.prototype;
  return e.render = function(n, s, o) {
    var a = this._time, u = this._tDur, l = this._dur, f = n > u - W && n >= 0 ? u : n < W ? 0 : n, c, p, h, _, m, d, b, w, x;
    if (!l)
      Pa(this, n, s, o);
    else if (f !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 != n < 0) {
      if (c = f, w = this.timeline, this._repeat) {
        if (_ = l + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(_ * 100 + n, s, o);
        if (c = K(f % _), f === u ? (h = this._repeat, c = l) : (h = ~~(f / _), h && h === f / _ && (c = l, h--), c > l && (c = l)), d = this._yoyo && h & 1, d && (x = this._yEase, c = l - c), m = Re(this._tTime, _), c === a && !o && this._initted)
          return this;
        h !== m && (w && this._yEase && zs(w, d), this.vars.repeatRefresh && !d && !this._lock && (this._lock = o = 1, this.render(K(_ * h), true).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Ms(this, n < 0 ? n : c, o, s))
          return this._tTime = 0, this;
        if (l !== this._dur)
          return this.render(n, s, o);
      }
      if (this._tTime = f, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = b = (x || this._ease)(c / l), this._from && (this.ratio = b = 1 - b), c && !a && !s && (yt(this, "onStart"), this._tTime !== f))
        return this;
      for (p = this._pt; p; )
        p.r(b, p.d), p = p._next;
      w && w.render(n < 0 ? n : !c && d ? -W : w._dur * w._ease(c / this._dur), s, o) || this._startAt && (this._zTime = n), this._onUpdate && !s && (n < 0 && this._startAt && this._startAt.render(n, true, o), yt(this, "onUpdate")), this._repeat && h !== m && this.vars.onRepeat && !s && this.parent && yt(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (n < 0 && this._startAt && !this._onUpdate && this._startAt.render(n, true, true), (n || !l) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Ft(this, 1), !s && !(n < 0 && !a) && (f || a) && (yt(this, f === u ? "onComplete" : "onReverseComplete", true), this._prom && !(f < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function() {
    return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), r15.prototype.invalidate.call(this);
  }, e.kill = function(n, s) {
    if (s === void 0 && (s = "all"), !n && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ke(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, s, Vt && Vt.vars.overwrite !== true)._first || Ke(this), this.parent && o !== this.timeline.totalDuration() && Ie(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, u = n ? bt(n) : a, l = this._ptLookup, f = this._pt, c, p, h, _, m, d, b;
    if ((!s || s === "all") && Sa(a, u))
      return s === "all" && (this._pt = 0), Ke(this);
    for (c = this._op = this._op || [], s !== "all" && (q(s) && (m = {}, rt(s, function(w) {
      return m[w] = 1;
    }), s = m), s = Ja(a, s)), b = a.length; b--; )
      if (~u.indexOf(a[b])) {
        p = l[b], s === "all" ? (c[b] = s, _ = p, h = {}) : (h = c[b] = c[b] || {}, _ = s);
        for (m in _)
          d = p && p[m], d && ((!("kill" in d.d) || d.d.kill(m) === true) && Hr(this, d, "_pt"), delete p[m]), h !== "all" && (h[m] = 1);
      }
    return this._initted && !this._pt && f && Ke(this), this;
  }, t.to = function(n, s) {
    return new t(n, s, arguments[2]);
  }, t.from = function(n, s) {
    return er(1, arguments);
  }, t.delayedCall = function(n, s, o, a) {
    return new t(s, 0, { immediateRender: false, lazy: false, overwrite: false, delay: n, onComplete: s, onReverseComplete: s, onCompleteParams: o, onReverseCompleteParams: o, callbackScope: a });
  }, t.fromTo = function(n, s, o) {
    return er(2, arguments);
  }, t.set = function(n, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(n, s);
  }, t.killTweensOf = function(n, s, o) {
    return H.killTweensOf(n, s, o);
  }, t;
}(nr);
vt(j.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
rt("staggerTo,staggerFrom,staggerFromTo", function(r15) {
  j[r15] = function() {
    var t = new Z(), e = yi.call(arguments, 0);
    return e.splice(r15 === "staggerFromTo" ? 5 : 4, 0, 0), t[r15].apply(t, e);
  };
});
var Li = function(t, e, i) {
  return t[e] = i;
}, Ws = function(t, e, i) {
  return t[e](i);
}, Ka = function(t, e, i, n) {
  return t[e](n.fp, i);
}, Za = function(t, e, i) {
  return t.setAttribute(e, i);
}, Yr = function(t, e) {
  return J(t[e]) ? Ws : Ur(t[e]) && t.setAttribute ? Za : Li;
}, Hs = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, tu = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Ri = function(t, e) {
  var i = e._pt, n = "";
  if (!t && e.b)
    n = e.b;
  else if (t === 1 && e.e)
    n = e.e;
  else {
    for (; i; )
      n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + n, i = i._next;
    n += e.c;
  }
  e.set(e.t, e.p, n, e);
}, Ii = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, eu = function(t, e, i, n) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === n && s.modifier(t, e, i), s = o;
}, ru = function(t) {
  for (var e = this._pt, i, n; e; )
    n = e._next, e.p === t && !e.op || e.op === t ? Hr(this, e, "_pt") : e.dep || (i = 1), e = n;
  return !i;
}, iu = function(t, e, i, n) {
  n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
}, Di = function(t) {
  for (var e = t._pt, i, n, s, o; e; ) {
    for (i = e._next, n = s; n && n.pr > e.pr; )
      n = n._next;
    (e._prev = n ? n._prev : o) ? e._prev._next = e : s = e, (e._next = n) ? n._prev = e : o = e, e = i;
  }
  t._pt = s;
}, nt = function() {
  function r15(e, i, n, s, o, a, u, l, f) {
    this.t = i, this.s = s, this.c = o, this.p = n, this.r = a || Hs, this.d = u || this, this.set = l || Li, this.pr = f || 0, this._next = e, e && (e._prev = this);
  }
  var t = r15.prototype;
  return t.modifier = function(i, n, s) {
    this.mSet = this.mSet || this.set, this.set = iu, this.m = i, this.mt = s, this.tween = n;
  }, r15;
}();
rt(Ei + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r15) {
  return Ti[r15] = 1;
});
ct.TweenMax = ct.TweenLite = j;
ct.TimelineLite = ct.TimelineMax = Z;
H = new Z({ sortChildren: false, defaults: ke, autoRemoveChildren: true, id: "root", smoothChildTiming: true });
lt.stringFilter = Pi;
var Br = { registerPlugin: function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  e.forEach(function(n) {
    return Ua(n);
  });
}, timeline: function(t) {
  return new Z(t);
}, getTweensOf: function(t, e) {
  return H.getTweensOf(t, e);
}, getProperty: function(t, e, i, n) {
  q(t) && (t = bt(t)[0]);
  var s = Gt(t || {}).get, o = i ? ws : gs;
  return i === "native" && (i = ""), t && (e ? o((at[e] && at[e].get || s)(t, e, i, n)) : function(a, u, l) {
    return o((at[a] && at[a].get || s)(t, a, u, l));
  });
}, quickSetter: function(t, e, i) {
  if (t = bt(t), t.length > 1) {
    var n = t.map(function(f) {
      return xt.quickSetter(f, e, i);
    }), s = n.length;
    return function(f) {
      for (var c = s; c--; )
        n[c](f);
    };
  }
  t = t[0] || {};
  var o = at[e], a = Gt(t), u = a.harness && (a.harness.aliases || {})[e] || e, l = o ? function(f) {
    var c = new o();
    Ae._pt = 0, c.init(t, i ? f + i : f, Ae, 0, [t]), c.render(1, c), Ae._pt && Ii(1, Ae);
  } : a.set(t, u);
  return o ? l : function(f) {
    return l(t, u, i ? f + i : f, a, 1);
  };
}, isTweening: function(t) {
  return H.getTweensOf(t, true).length > 0;
}, defaults: function(t) {
  return t && t.ease && (t.ease = le(t.ease, ke.ease)), os(ke, t || {});
}, config: function(t) {
  return os(lt, t || {});
}, registerEffect: function(t) {
  var e = t.name, i = t.effect, n = t.plugins, s = t.defaults, o = t.extendTimeline;
  (n || "").split(",").forEach(function(a) {
    return a && !at[a] && !ct[a] && Ir(e + " effect requires " + a + " plugin.");
  }), ui[e] = function(a, u, l) {
    return i(bt(a), vt(u || {}, s), l);
  }, o && (Z.prototype[e] = function(a, u, l) {
    return this.add(ui[e](a, Bt(u) ? u : (l = u) && {}, this), l);
  });
}, registerEase: function(t, e) {
  D[t] = le(e);
}, parseEase: function(t, e) {
  return arguments.length ? le(t, e) : D;
}, getById: function(t) {
  return H.getById(t);
}, exportRoot: function(t, e) {
  t === void 0 && (t = {});
  var i = new Z(t), n, s;
  for (i.smoothChildTiming = ut(t.smoothChildTiming), H.remove(i), i._dp = 0, i._time = i._tTime = H._time, n = H._first; n; )
    s = n._next, (e || !(!n._dur && n instanceof j && n.vars.onComplete === n._targets[0])) && At(i, n, n._start - n._delay), n = s;
  return At(H, i, 0), i;
}, utils: { wrap: za, wrapYoyo: Na, distribute: Cs, random: ks, snap: As, normalize: Fa, getUnit: it, clamp: ka, splitColor: Is, toArray: bt, selector: Ra, mapRange: Rs, pipe: Ia, unitize: Da, interpolate: Ba, shuffle: Ps }, install: bs, effects: ui, ticker: ft, updateRoot: Z.updateRoot, plugins: at, globalTimeline: H, core: { PropTween: nt, globals: ys, Tween: j, Timeline: Z, Animation: nr, getCache: Gt, _removeLinkedListItem: Hr, suppressOverwrites: function(t) {
  return xi = t;
} } };
rt("to,from,fromTo,delayedCall,set,killTweensOf", function(r15) {
  return Br[r15] = j[r15];
});
ft.add(Z.updateRoot);
Ae = Br.to({}, { duration: 0 });
var nu = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, su = function(t, e) {
  var i = t._targets, n, s, o;
  for (n in e)
    for (s = i.length; s--; )
      o = t._ptLookup[s][n], o && (o = o.d) && (o._pt && (o = nu(o, n)), o && o.modifier && o.modifier(e[n], t, i[s], n));
}, hi = function(t, e) {
  return { name: t, rawVars: 1, init: function(n, s, o) {
    o._onInit = function(a) {
      var u, l;
      if (q(s) && (u = {}, rt(s, function(f) {
        return u[f] = 1;
      }), s = u), e) {
        u = {};
        for (l in s)
          u[l] = e(s[l]);
        s = u;
      }
      su(a, s);
    };
  } };
}, xt = Br.registerPlugin({ name: "attr", init: function(t, e, i, n, s) {
  var o, a;
  for (o in e)
    a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], n, s, 0, 0, o), a && (a.op = o), this._props.push(o);
} }, { name: "endArray", init: function(t, e) {
  for (var i = e.length; i--; )
    this.add(t, i, t[i] || 0, e[i]);
} }, hi("roundProps", vi), hi("modifiers"), hi("snap", As)) || Br;
j.version = Z.version = xt.version = "3.9.1";
_s = 1;
ps() && De();
D.Power0;
D.Power1;
D.Power2;
D.Power3;
D.Power4;
D.Linear;
D.Quad;
D.Cubic;
D.Quart;
D.Quint;
D.Strong;
D.Elastic;
D.Back;
D.SteppedEase;
D.Bounce;
D.Sine;
D.Expo;
D.Circ;
var Vs, jt, Ne, Wi, _e, Ys, Eu = function() {
  return typeof window < "u";
}, Jt = {}, me = 180 / Math.PI, Be = Math.PI / 180, ze = Math.atan2, Gs = 1e8, Ks = /([A-Z])/g, Mu = /(?:left|right|width|margin|padding|x)/i, Ou = /[\s,\(]\S/, qt = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, Zs = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Pu = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Cu = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Au = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, to = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, eo = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, ku = function(t, e, i) {
  return t.style[e] = i;
}, Lu = function(t, e, i) {
  return t.style.setProperty(e, i);
}, Ru = function(t, e, i) {
  return t._gsap[e] = i;
}, Iu = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, Du = function(t, e, i, n, s) {
  var o = t._gsap;
  o.scaleX = o.scaleY = i, o.renderTransform(s, o);
}, Fu = function(t, e, i, n, s) {
  var o = t._gsap;
  o[e] = i, o.renderTransform(s, o);
}, Q = "transform", Qt = Q + "Origin", ro, Ni = function(t, e) {
  var i = jt.createElementNS ? jt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : jt.createElement(t);
  return i.style ? i : jt.createElement(t);
}, Ut = function r12(t, e, i) {
  var n = getComputedStyle(t);
  return n[e] || n.getPropertyValue(e.replace(Ks, "-$1").toLowerCase()) || n.getPropertyValue(e) || !i && r12(t, Ue(e) || e, 1) || "";
}, $s = "O,Moz,ms,Ms,Webkit".split(","), Ue = function(t, e, i) {
  var n = e || _e, s = n.style, o = 5;
  if (t in s && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !($s[o] + t in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? $s[o] : "") + t;
}, Bi = function() {
  Eu() && window.document && (Vs = window, jt = Vs.document, Ne = jt.documentElement, _e = Ni("div") || { style: {} }, Ni("div"), Q = Ue(Q), Qt = Q + "Origin", _e.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ro = !!Ue("perspective"), Wi = 1);
}, Fi = function r13(t) {
  var e = Ni("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, s = this.style.cssText, o;
  if (Ne.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = r13;
    } catch {
    }
  else
    this._gsapBBox && (o = this._gsapBBox());
  return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Ne.removeChild(e), this.style.cssText = s, o;
}, js = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, io = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = Fi.call(t, true);
  }
  return e && (e.width || e.height) || t.getBBox === Fi || (e = Fi.call(t, true)), e && !e.width && !e.x && !e.y ? { x: +js(t, ["x", "cx", "x1"]) || 0, y: +js(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : e;
}, no = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && io(t));
}, ar = function(t, e) {
  if (e) {
    var i = t.style;
    e in Jt && e !== Qt && (e = Q), i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(e.replace(Ks, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, Xt = function(t, e, i, n, s, o) {
  var a = new nt(t._pt, e, i, 0, 1, o ? eo : to);
  return t._pt = a, a.b = n, a.e = s, t._props.push(i), a;
}, qs = { deg: 1, rad: 1, turn: 1 }, Kt = function r14(t, e, i, n) {
  var s = parseFloat(i) || 0, o = (i + "").trim().substr((s + "").length) || "px", a = _e.style, u = Mu.test(e), l = t.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (u ? "Width" : "Height"), c = 100, p = n === "px", h = n === "%", _, m, d, b;
  return n === o || !s || qs[n] || qs[o] ? s : (o !== "px" && !p && (s = r14(t, e, i, "px")), b = t.getCTM && no(t), (h || o === "%") && (Jt[e] || ~e.indexOf("adius")) ? (_ = b ? t.getBBox()[u ? "width" : "height"] : t[f], Y(h ? s / _ * c : s / 100 * _)) : (a[u ? "width" : "height"] = c + (p ? o : n), m = ~e.indexOf("adius") || n === "em" && t.appendChild && !l ? t : t.parentNode, b && (m = (t.ownerSVGElement || {}).parentNode), (!m || m === jt || !m.appendChild) && (m = jt.body), d = m._gsap, d && h && d.width && u && d.time === ft.time ? Y(s / d.width * c) : ((h || o === "%") && (a.position = Ut(t, "position")), m === t && (a.position = "static"), m.appendChild(_e), _ = _e[f], m.removeChild(_e), a.position = "absolute", u && h && (d = Gt(m), d.time = ft.time, d.width = m[f]), Y(p ? _ * s / c : _ && s ? c / _ * s : 0))));
}, de = function(t, e, i, n) {
  var s;
  return Wi || Bi(), e in qt && e !== "transform" && (e = qt[e], ~e.indexOf(",") && (e = e.split(",")[0])), Jt[e] && e !== "transform" ? (s = lr(t, n), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : $r(Ut(t, Qt)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = Gr[e] && Gr[e](t, e, i) || Ut(t, e) || Oi(t, e) || (e === "opacity" ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? Kt(t, e, s, i) + i : s;
}, zu = function(t, e, i, n) {
  if (!i || i === "none") {
    var s = Ue(e, t, 1), o = s && Ut(t, s, 1);
    o && o !== i ? (e = s, i = o) : e === "borderColor" && (i = Ut(t, "borderTopColor"));
  }
  var a = new nt(this._pt, t.style, e, 0, 1, Ri), u = 0, l = 0, f, c, p, h, _, m, d, b, w, x, g, y, v;
  if (a.b = i, a.e = n, i += "", n += "", n === "auto" && (t.style[e] = n, n = Ut(t, e) || n, t.style[e] = i), f = [i, n], Pi(f), i = f[0], n = f[1], p = i.match(fe) || [], v = n.match(fe) || [], v.length) {
    for (; c = fe.exec(n); )
      d = c[0], w = n.substring(u, c.index), _ ? _ = (_ + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (_ = 1), d !== (m = p[l++] || "") && (h = parseFloat(m) || 0, g = m.substr((h + "").length), y = d.charAt(1) === "=" ? +(d.charAt(0) + "1") : 0, y && (d = d.substr(2)), b = parseFloat(d), x = d.substr((b + "").length), u = fe.lastIndex - x.length, x || (x = x || lt.units[e] || g, u === n.length && (n += x, a.e += x)), g !== x && (h = Kt(t, e, m, x) || 0), a._pt = { _next: a._pt, p: w || l === 1 ? w : ",", s: h, c: y ? y * b : b - h, m: _ && _ < 4 || e === "zIndex" ? Math.round : 0 });
    a.c = u < n.length ? n.substring(u, n.length) : "";
  } else
    a.r = e === "display" && n === "none" ? eo : to;
  return wi.test(n) && (a.e = 0), this._pt = a, a;
}, Xs = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, Nu = function(t) {
  var e = t.split(" "), i = e[0], n = e[1] || "50%";
  return (i === "top" || i === "bottom" || n === "left" || n === "right") && (t = i, i = n, n = t), e[0] = Xs[i] || i, e[1] = Xs[n] || n, e.join(" ");
}, Bu = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, n = i.style, s = e.u, o = i._gsap, a, u, l;
    if (s === "all" || s === true)
      n.cssText = "", u = 1;
    else
      for (s = s.split(","), l = s.length; --l > -1; )
        a = s[l], Jt[a] && (u = 1, a = a === "transformOrigin" ? Qt : Q), ar(i, a);
    u && (ar(i, Q), o && (o.svg && i.removeAttribute("transform"), lr(i, 1), o.uncache = 1));
  }
}, Gr = { clearProps: function(t, e, i, n, s) {
  if (s.data !== "isFromStart") {
    var o = t._pt = new nt(t._pt, e, i, 0, 0, Bu);
    return o.u = n, o.pr = -10, o.tween = s, t._props.push(i), 1;
  }
} }, ur = [1, 0, 0, 1, 0, 0], so = {}, oo = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Js = function(t) {
  var e = Ut(t, Q);
  return oo(e) ? ur : e.substr(7).match(gi).map(Y);
}, Hi = function(t, e) {
  var i = t._gsap || Gt(t), n = t.style, s = Js(t), o, a, u, l;
  return i.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, s = [u.a, u.b, u.c, u.d, u.e, u.f], s.join(",") === "1,0,0,1,0,0" ? ur : s) : (s === ur && !t.offsetParent && t !== Ne && !i.svg && (u = n.display, n.display = "block", o = t.parentNode, (!o || !t.offsetParent) && (l = 1, a = t.nextSibling, Ne.appendChild(t)), s = Js(t), u ? n.display = u : ar(t, "display"), l && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : Ne.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, Ui = function(t, e, i, n, s, o) {
  var a = t._gsap, u = s || Hi(t, true), l = a.xOrigin || 0, f = a.yOrigin || 0, c = a.xOffset || 0, p = a.yOffset || 0, h = u[0], _ = u[1], m = u[2], d = u[3], b = u[4], w = u[5], x = e.split(" "), g = parseFloat(x[0]) || 0, y = parseFloat(x[1]) || 0, v, T, E, S;
  i ? u !== ur && (T = h * d - _ * m) && (E = g * (d / T) + y * (-m / T) + (m * w - d * b) / T, S = g * (-_ / T) + y * (h / T) - (h * w - _ * b) / T, g = E, y = S) : (v = io(t), g = v.x + (~x[0].indexOf("%") ? g / 100 * v.width : g), y = v.y + (~(x[1] || x[0]).indexOf("%") ? y / 100 * v.height : y)), n || n !== false && a.smooth ? (b = g - l, w = y - f, a.xOffset = c + (b * h + w * m) - b, a.yOffset = p + (b * _ + w * d) - w) : a.xOffset = a.yOffset = 0, a.xOrigin = g, a.yOrigin = y, a.smooth = !!n, a.origin = e, a.originIsAbsolute = !!i, t.style[Qt] = "0px 0px", o && (Xt(o, a, "xOrigin", l, g), Xt(o, a, "yOrigin", f, y), Xt(o, a, "xOffset", c, a.xOffset), Xt(o, a, "yOffset", p, a.yOffset)), t.setAttribute("data-svg-origin", g + " " + y);
}, lr = function(t, e) {
  var i = t._gsap || new Ci(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var n = t.style, s = i.scaleX < 0, o = "px", a = "deg", u = Ut(t, Qt) || "0", l, f, c, p, h, _, m, d, b, w, x, g, y, v, T, E, S, O, A, L, R, P, F, N, $, St, Tt, je, ne, un, kt, se;
  return l = f = c = _ = m = d = b = w = x = 0, p = h = 1, i.svg = !!(t.getCTM && no(t)), v = Hi(t, i.svg), i.svg && (N = (!i.uncache || u === "0px 0px") && !e && t.getAttribute("data-svg-origin"), Ui(t, N || u, !!N || i.originIsAbsolute, i.smooth !== false, v)), g = i.xOrigin || 0, y = i.yOrigin || 0, v !== ur && (O = v[0], A = v[1], L = v[2], R = v[3], l = P = v[4], f = F = v[5], v.length === 6 ? (p = Math.sqrt(O * O + A * A), h = Math.sqrt(R * R + L * L), _ = O || A ? ze(A, O) * me : 0, b = L || R ? ze(L, R) * me + _ : 0, b && (h *= Math.abs(Math.cos(b * Be))), i.svg && (l -= g - (g * O + y * L), f -= y - (g * A + y * R))) : (se = v[6], un = v[7], Tt = v[8], je = v[9], ne = v[10], kt = v[11], l = v[12], f = v[13], c = v[14], T = ze(se, ne), m = T * me, T && (E = Math.cos(-T), S = Math.sin(-T), N = P * E + Tt * S, $ = F * E + je * S, St = se * E + ne * S, Tt = P * -S + Tt * E, je = F * -S + je * E, ne = se * -S + ne * E, kt = un * -S + kt * E, P = N, F = $, se = St), T = ze(-L, ne), d = T * me, T && (E = Math.cos(-T), S = Math.sin(-T), N = O * E - Tt * S, $ = A * E - je * S, St = L * E - ne * S, kt = R * S + kt * E, O = N, A = $, L = St), T = ze(A, O), _ = T * me, T && (E = Math.cos(T), S = Math.sin(T), N = O * E + A * S, $ = P * E + F * S, A = A * E - O * S, F = F * E - P * S, O = N, P = $), m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0, d = 180 - d), p = Y(Math.sqrt(O * O + A * A + L * L)), h = Y(Math.sqrt(F * F + se * se)), T = ze(P, F), b = Math.abs(T) > 2e-4 ? T * me : 0, x = kt ? 1 / (kt < 0 ? -kt : kt) : 0), i.svg && (N = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !oo(Ut(t, Q)), N && t.setAttribute("transform", N))), Math.abs(b) > 90 && Math.abs(b) < 270 && (s ? (p *= -1, b += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (h *= -1, b += b <= 0 ? 180 : -180)), i.x = l - ((i.xPercent = l && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + o, i.y = f - ((i.yPercent = f && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + o, i.z = c + o, i.scaleX = Y(p), i.scaleY = Y(h), i.rotation = Y(_) + a, i.rotationX = Y(m) + a, i.rotationY = Y(d) + a, i.skewX = b + a, i.skewY = w + a, i.transformPerspective = x + o, (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (n[Qt] = $r(u)), i.xOffset = i.yOffset = 0, i.force3D = lt.force3D, i.renderTransform = i.svg ? Wu : ro ? ao : Uu, i.uncache = 0, i;
}, $r = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, zi = function(t, e, i) {
  var n = it(e);
  return Y(parseFloat(e) + parseFloat(Kt(t, "x", i + "px", n))) + n;
}, Uu = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ao(t, e);
}, he = "0deg", or = "0px", pe = ") ", ao = function(t, e) {
  var i = e || this, n = i.xPercent, s = i.yPercent, o = i.x, a = i.y, u = i.z, l = i.rotation, f = i.rotationY, c = i.rotationX, p = i.skewX, h = i.skewY, _ = i.scaleX, m = i.scaleY, d = i.transformPerspective, b = i.force3D, w = i.target, x = i.zOrigin, g = "", y = b === "auto" && t && t !== 1 || b === true;
  if (x && (c !== he || f !== he)) {
    var v = parseFloat(f) * Be, T = Math.sin(v), E = Math.cos(v), S;
    v = parseFloat(c) * Be, S = Math.cos(v), o = zi(w, o, T * S * -x), a = zi(w, a, -Math.sin(v) * -x), u = zi(w, u, E * S * -x + x);
  }
  d !== or && (g += "perspective(" + d + pe), (n || s) && (g += "translate(" + n + "%, " + s + "%) "), (y || o !== or || a !== or || u !== or) && (g += u !== or || y ? "translate3d(" + o + ", " + a + ", " + u + ") " : "translate(" + o + ", " + a + pe), l !== he && (g += "rotate(" + l + pe), f !== he && (g += "rotateY(" + f + pe), c !== he && (g += "rotateX(" + c + pe), (p !== he || h !== he) && (g += "skew(" + p + ", " + h + pe), (_ !== 1 || m !== 1) && (g += "scale(" + _ + ", " + m + pe), w.style[Q] = g || "translate(0, 0)";
}, Wu = function(t, e) {
  var i = e || this, n = i.xPercent, s = i.yPercent, o = i.x, a = i.y, u = i.rotation, l = i.skewX, f = i.skewY, c = i.scaleX, p = i.scaleY, h = i.target, _ = i.xOrigin, m = i.yOrigin, d = i.xOffset, b = i.yOffset, w = i.forceCSS, x = parseFloat(o), g = parseFloat(a), y, v, T, E, S;
  u = parseFloat(u), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, u += f), u || l ? (u *= Be, l *= Be, y = Math.cos(u) * c, v = Math.sin(u) * c, T = Math.sin(u - l) * -p, E = Math.cos(u - l) * p, l && (f *= Be, S = Math.tan(l - f), S = Math.sqrt(1 + S * S), T *= S, E *= S, f && (S = Math.tan(f), S = Math.sqrt(1 + S * S), y *= S, v *= S)), y = Y(y), v = Y(v), T = Y(T), E = Y(E)) : (y = c, E = p, v = T = 0), (x && !~(o + "").indexOf("px") || g && !~(a + "").indexOf("px")) && (x = Kt(h, "x", o, "px"), g = Kt(h, "y", a, "px")), (_ || m || d || b) && (x = Y(x + _ - (_ * y + m * T) + d), g = Y(g + m - (_ * v + m * E) + b)), (n || s) && (S = h.getBBox(), x = Y(x + n / 100 * S.width), g = Y(g + s / 100 * S.height)), S = "matrix(" + y + "," + v + "," + T + "," + E + "," + x + "," + g + ")", h.setAttribute("transform", S), w && (h.style[Q] = S);
}, Hu = function(t, e, i, n, s, o) {
  var a = 360, u = q(s), l = parseFloat(s) * (u && ~s.indexOf("rad") ? me : 1), f = o ? l * o : l - n, c = n + f + "deg", p, h;
  return u && (p = s.split("_")[1], p === "short" && (f %= a, f !== f % (a / 2) && (f += f < 0 ? a : -a)), p === "cw" && f < 0 ? f = (f + a * Gs) % a - ~~(f / a) * a : p === "ccw" && f > 0 && (f = (f - a * Gs) % a - ~~(f / a) * a)), t._pt = h = new nt(t._pt, e, i, n, f, Pu), h.e = c, h.u = "deg", t._props.push(i), h;
}, Qs = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Vu = function(t, e, i) {
  var n = Qs({}, i._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, a, u, l, f, c, p, h, _;
  n.svg ? (l = i.getAttribute("transform"), i.setAttribute("transform", ""), o[Q] = e, a = lr(i, 1), ar(i, Q), i.setAttribute("transform", l)) : (l = getComputedStyle(i)[Q], o[Q] = e, a = lr(i, 1), o[Q] = l);
  for (u in Jt)
    l = n[u], f = a[u], l !== f && s.indexOf(u) < 0 && (h = it(l), _ = it(f), c = h !== _ ? Kt(i, u, l, _) : parseFloat(l), p = parseFloat(f), t._pt = new nt(t._pt, a, u, c, p - c, Zs), t._pt.u = _ || 0, t._props.push(u));
  Qs(a, n);
};
rt("padding,margin,Width,Radius", function(r15, t) {
  var e = "Top", i = "Right", n = "Bottom", s = "Left", o = (t < 3 ? [e, i, n, s] : [e + s, e + i, n + i, n + s]).map(function(a) {
    return t < 2 ? r15 + a : "border" + a + r15;
  });
  Gr[t > 1 ? "border" + r15 : r15] = function(a, u, l, f, c) {
    var p, h;
    if (arguments.length < 4)
      return p = o.map(function(_) {
        return de(a, _, l);
      }), h = p.join(" "), h.split(p[0]).length === 5 ? p[0] : h;
    p = (f + "").split(" "), h = {}, o.forEach(function(_, m) {
      return h[_] = p[m] = p[m] || p[(m - 1) / 2 | 0];
    }), a.init(u, h, c);
  };
});
var Vi = { name: "css", register: Bi, targetTest: function(t) {
  return t.style && t.nodeType;
}, init: function(t, e, i, n, s) {
  var o = this._props, a = t.style, u = i.vars.startAt, l, f, c, p, h, _, m, d, b, w, x, g, y, v, T;
  Wi || Bi();
  for (m in e)
    if (m !== "autoRound" && (f = e[m], !(at[m] && ki(m, e, i, n, t, s)))) {
      if (h = typeof f, _ = Gr[m], h === "function" && (f = f.call(i, n, t, s), h = typeof f), h === "string" && ~f.indexOf("random(") && (f = Fe(f)), _)
        _(this, t, m, f, i) && (T = 1);
      else if (m.substr(0, 2) === "--")
        l = (getComputedStyle(t).getPropertyValue(m) + "").trim(), f += "", zt.lastIndex = 0, zt.test(l) || (d = it(l), b = it(f)), b ? d !== b && (l = Kt(t, m, l, b) + b) : d && (f += d), this.add(a, "setProperty", l, f, n, s, 0, 0, m), o.push(m);
      else if (h !== "undefined") {
        if (u && m in u ? (l = typeof u[m] == "function" ? u[m].call(i, n, t, s) : u[m], q(l) && ~l.indexOf("random(") && (l = Fe(l)), it(l + "") || (l += lt.units[m] || it(de(t, m)) || ""), (l + "").charAt(1) === "=" && (l = de(t, m))) : l = de(t, m), p = parseFloat(l), w = h === "string" && f.charAt(1) === "=" ? +(f.charAt(0) + "1") : 0, w && (f = f.substr(2)), c = parseFloat(f), m in qt && (m === "autoAlpha" && (p === 1 && de(t, "visibility") === "hidden" && c && (p = 0), Xt(this, a, "visibility", p ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), m !== "scale" && m !== "transform" && (m = qt[m], ~m.indexOf(",") && (m = m.split(",")[0]))), x = m in Jt, x) {
          if (g || (y = t._gsap, y.renderTransform && !e.parseTransform || lr(t, e.parseTransform), v = e.smoothOrigin !== false && y.smooth, g = this._pt = new nt(this._pt, a, Q, 0, 1, y.renderTransform, y, 0, -1), g.dep = 1), m === "scale")
            this._pt = new nt(this._pt, y, "scaleY", y.scaleY, (w ? w * c : c - y.scaleY) || 0), o.push("scaleY", m), m += "X";
          else if (m === "transformOrigin") {
            f = Nu(f), y.svg ? Ui(t, f, 0, v, 0, this) : (b = parseFloat(f.split(" ")[2]) || 0, b !== y.zOrigin && Xt(this, y, "zOrigin", y.zOrigin, b), Xt(this, a, m, $r(l), $r(f)));
            continue;
          } else if (m === "svgOrigin") {
            Ui(t, f, 1, v, 0, this);
            continue;
          } else if (m in so) {
            Hu(this, y, m, p, f, w);
            continue;
          } else if (m === "smoothOrigin") {
            Xt(this, y, "smooth", y.smooth, f);
            continue;
          } else if (m === "force3D") {
            y[m] = f;
            continue;
          } else if (m === "transform") {
            Vu(this, f, t);
            continue;
          }
        } else
          m in a || (m = Ue(m) || m);
        if (x || (c || c === 0) && (p || p === 0) && !Ou.test(f) && m in a)
          d = (l + "").substr((p + "").length), c || (c = 0), b = it(f) || (m in lt.units ? lt.units[m] : d), d !== b && (p = Kt(t, m, l, b)), this._pt = new nt(this._pt, x ? y : a, m, p, w ? w * c : c - p, !x && (b === "px" || m === "zIndex") && e.autoRound !== false ? Au : Zs), this._pt.u = b || 0, d !== b && b !== "%" && (this._pt.b = l, this._pt.r = Cu);
        else if (m in a)
          zu.call(this, t, m, l, f);
        else if (m in t)
          this.add(t, m, l || t[m], f, n, s);
        else {
          Wr(m, f);
          continue;
        }
        o.push(m);
      }
    }
  T && Di(this);
}, get: de, aliases: qt, getSetter: function(t, e, i) {
  var n = qt[e];
  return n && n.indexOf(",") < 0 && (e = n), e in Jt && e !== Qt && (t._gsap.x || de(t, "x")) ? i && Ys === i ? e === "scale" ? Iu : Ru : (Ys = i || {}) && (e === "scale" ? Du : Fu) : t.style && !Ur(t.style[e]) ? ku : ~e.indexOf("-") ? Lu : Yr(t, e);
}, core: { _removeProperty: ar, _getMatrix: Hi } };
xt.utils.checkPrefix = Ue;
(function(r15, t, e, i) {
  var n = rt(r15 + "," + t + "," + e, function(s) {
    Jt[s] = 1;
  });
  rt(t, function(s) {
    lt.units[s] = "deg", so[s] = 1;
  }), qt[n[13]] = r15 + "," + t, rt(i, function(s) {
    var o = s.split(":");
    qt[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r15) {
  lt.units[r15] = "px";
});
xt.registerPlugin(Vi);
var G = xt.registerPlugin(Vi) || xt;
G.core.Tween;
var be = class {
  constructor(t) {
    __publicField(this, "duration", 1e3);
    var _a2;
    t && (this.duration = (_a2 = t.duration) != null ? _a2 : this.duration);
  }
};
var Yi = class extends be {
  constructor(t) {
    super(t);
  }
  run(t, e) {
    let i = this.duration / 1e3;
    return new C((n) => {
      let s = G.timeline({ paused: true });
      s.fromTo(t.el, { opacity: 1, zIndex: 0 }, { opacity: 0, duration: i }), s.fromTo(e.el, { opacity: 0, zIndex: 1 }, { opacity: 1, duration: i }, 0);
      let o = (a) => {
        n.next("transition:end"), n.complete();
      };
      return s.eventCallback("onComplete", o), s.play(), () => {
        s.eventCallback("onComplete", null), G.set(e.el, { opacity: 1, zIndex: 0 }), G.set(t.el, { opacity: 1, zIndex: 0 }), s.kill();
      };
    });
  }
};
var Gi = class extends be {
  constructor(t) {
    super(t);
    this.opts = t;
  }
  run(t, e) {
    var _a2, _b;
    let i = this.duration / 1e3;
    (_b = (_a2 = this.opts) == null ? void 0 : _a2.ease) != null ? _b : "power1.inOut";
    return new C((s) => {
      let o = G.timeline({ paused: true });
      o.fromTo(t.el, { opacity: 1, zIndex: 0 }, { opacity: 0, duration: i }), o.fromTo(e.el, { left: "100%", zIndex: 1 }, { left: 0, duration: i }, 0);
      let a = (u) => {
        s.next("transition:end"), s.complete();
      };
      return o.eventCallback("onComplete", a), o.play(), () => {
        o.eventCallback("onComplete", null), G.set(e.el, { left: 0, zIndex: 0 }), G.set(t.el, { opacity: 1, zIndex: 0 }), o.kill();
      };
    });
  }
};
var $i = class extends be {
  constructor(t) {
    super(t);
  }
  run(t, e) {
    let i = this.duration / 1e3, n = { rotationY: 0, "backface-visibility": "visible", "-webkit-backface-visibility": "visible" };
    return new C((s) => {
      let o = G.timeline(), a = { "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" };
      G.set(t.el.parentElement, { perspective: 400 }), o.set(t.el, a), o.set(e.el, a), o.fromTo(t.el, { rotationY: 0 }, { duration: i, rotationY: 180, ease: "bounce" }, 0), o.fromTo(e.el, { rotationY: 180 }, { duration: i, rotationY: 360, ease: "bounce" }, 0);
      let u = (l) => {
        s.next("transition:end"), s.complete();
      };
      return o.eventCallback("onComplete", u), () => {
        o.eventCallback("onComplete", null), G.set(t.el, n), G.set(e.el, n), o.pause(), o.kill();
      };
    });
  }
};
var uo = async (r15) => {
  if (r15.uri.startsWith("https://")) {
    let t = await import(`./${r15.uri}`);
    return new t(r15.opts);
  } else
    switch (r15.uri) {
      case "transition://crossfade":
        return new Yi(r15.opts);
      case "transition://side-scroll":
        return new Gi(r15.opts);
      case "transition://flip":
        return new $i(r15.opts);
    }
};
var Zt = { requestAnimationFrame: () => 0, cancelAnimationFrame: () => {
} };
if (window) {
  let r15 = ["ms", "moz", "webkit", "o"], t = window;
  Zt.requestAnimationFrame = r15.map((e) => t[e + "RequestAnimationFrame"]).reduce((e, i) => e || i, window.requestAnimationFrame), Zt.cancelAnimationFrame = r15.map((e) => t[e + "CancelAnimationFrame"] || t[e + "CancelRequestAnimationFrame"]).reduce((e, i) => e || i, window.cancelAnimationFrame);
}
if (!Zt.requestAnimationFrame) {
  let r15 = 0;
  Zt.requestAnimationFrame = (t) => {
    let e = new Date().getTime(), i = Math.max(0, 16 - (e - r15)), n = window.setTimeout(() => {
      t(e + i);
    }, i);
    return r15 = e + i, n;
  }, Zt.cancelAnimationFrame || (Zt.cancelAnimationFrame = (t) => {
    clearTimeout(t);
  });
}
var lo = Zt.requestAnimationFrame;
var V = 1e-6, ye = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var r15 = 0, t = arguments.length; t--; )
    r15 += arguments[t] * arguments[t];
  return Math.sqrt(r15);
});
var gt = {};
Wo(gt, { add: () => Pl, adjoint: () => Ku, clone: () => $u, copy: () => ju, create: () => Gu, determinant: () => Zu, equals: () => Ll, exactEquals: () => kl, frob: () => Ol, fromQuat: () => bl, fromQuat2: () => hl, fromRotation: () => ul, fromRotationTranslation: () => ho, fromRotationTranslationScale: () => dl, fromRotationTranslationScaleOrigin: () => _l, fromScaling: () => al, fromTranslation: () => ol, fromValues: () => qu, fromXRotation: () => ll, fromYRotation: () => fl, fromZRotation: () => cl, frustum: () => yl, getRotation: () => ml, getScaling: () => po, getTranslation: () => pl, identity: () => fo, invert: () => Qu, lookAt: () => Tl, mul: () => Rl, multiply: () => co, multiplyScalar: () => Cl, multiplyScalarAndAdd: () => Al, ortho: () => wl, orthoNO: () => _o, orthoZO: () => Sl, perspective: () => vl, perspectiveFromFieldOfView: () => gl, perspectiveNO: () => mo, perspectiveZO: () => xl, rotate: () => rl, rotateX: () => il, rotateY: () => nl, rotateZ: () => sl, scale: () => el, set: () => Xu, str: () => Ml, sub: () => Il, subtract: () => bo, targetTo: () => El, translate: () => tl, transpose: () => Ju });
function Gu() {
  var r15 = new ye(16);
  return ye != Float32Array && (r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[6] = 0, r15[7] = 0, r15[8] = 0, r15[9] = 0, r15[11] = 0, r15[12] = 0, r15[13] = 0, r15[14] = 0), r15[0] = 1, r15[5] = 1, r15[10] = 1, r15[15] = 1, r15;
}
function $u(r15) {
  var t = new ye(16);
  return t[0] = r15[0], t[1] = r15[1], t[2] = r15[2], t[3] = r15[3], t[4] = r15[4], t[5] = r15[5], t[6] = r15[6], t[7] = r15[7], t[8] = r15[8], t[9] = r15[9], t[10] = r15[10], t[11] = r15[11], t[12] = r15[12], t[13] = r15[13], t[14] = r15[14], t[15] = r15[15], t;
}
function ju(r15, t) {
  return r15[0] = t[0], r15[1] = t[1], r15[2] = t[2], r15[3] = t[3], r15[4] = t[4], r15[5] = t[5], r15[6] = t[6], r15[7] = t[7], r15[8] = t[8], r15[9] = t[9], r15[10] = t[10], r15[11] = t[11], r15[12] = t[12], r15[13] = t[13], r15[14] = t[14], r15[15] = t[15], r15;
}
function qu(r15, t, e, i, n, s, o, a, u, l, f, c, p, h, _, m) {
  var d = new ye(16);
  return d[0] = r15, d[1] = t, d[2] = e, d[3] = i, d[4] = n, d[5] = s, d[6] = o, d[7] = a, d[8] = u, d[9] = l, d[10] = f, d[11] = c, d[12] = p, d[13] = h, d[14] = _, d[15] = m, d;
}
function Xu(r15, t, e, i, n, s, o, a, u, l, f, c, p, h, _, m, d) {
  return r15[0] = t, r15[1] = e, r15[2] = i, r15[3] = n, r15[4] = s, r15[5] = o, r15[6] = a, r15[7] = u, r15[8] = l, r15[9] = f, r15[10] = c, r15[11] = p, r15[12] = h, r15[13] = _, r15[14] = m, r15[15] = d, r15;
}
function fo(r15) {
  return r15[0] = 1, r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = 1, r15[6] = 0, r15[7] = 0, r15[8] = 0, r15[9] = 0, r15[10] = 1, r15[11] = 0, r15[12] = 0, r15[13] = 0, r15[14] = 0, r15[15] = 1, r15;
}
function Ju(r15, t) {
  if (r15 === t) {
    var e = t[1], i = t[2], n = t[3], s = t[6], o = t[7], a = t[11];
    r15[1] = t[4], r15[2] = t[8], r15[3] = t[12], r15[4] = e, r15[6] = t[9], r15[7] = t[13], r15[8] = i, r15[9] = s, r15[11] = t[14], r15[12] = n, r15[13] = o, r15[14] = a;
  } else
    r15[0] = t[0], r15[1] = t[4], r15[2] = t[8], r15[3] = t[12], r15[4] = t[1], r15[5] = t[5], r15[6] = t[9], r15[7] = t[13], r15[8] = t[2], r15[9] = t[6], r15[10] = t[10], r15[11] = t[14], r15[12] = t[3], r15[13] = t[7], r15[14] = t[11], r15[15] = t[15];
  return r15;
}
function Qu(r15, t) {
  var e = t[0], i = t[1], n = t[2], s = t[3], o = t[4], a = t[5], u = t[6], l = t[7], f = t[8], c = t[9], p = t[10], h = t[11], _ = t[12], m = t[13], d = t[14], b = t[15], w = e * a - i * o, x = e * u - n * o, g = e * l - s * o, y = i * u - n * a, v = i * l - s * a, T = n * l - s * u, E = f * m - c * _, S = f * d - p * _, O = f * b - h * _, A = c * d - p * m, L = c * b - h * m, R = p * b - h * d, P = w * R - x * L + g * A + y * O - v * S + T * E;
  return P ? (P = 1 / P, r15[0] = (a * R - u * L + l * A) * P, r15[1] = (n * L - i * R - s * A) * P, r15[2] = (m * T - d * v + b * y) * P, r15[3] = (p * v - c * T - h * y) * P, r15[4] = (u * O - o * R - l * S) * P, r15[5] = (e * R - n * O + s * S) * P, r15[6] = (d * g - _ * T - b * x) * P, r15[7] = (f * T - p * g + h * x) * P, r15[8] = (o * L - a * O + l * E) * P, r15[9] = (i * O - e * L - s * E) * P, r15[10] = (_ * v - m * g + b * w) * P, r15[11] = (c * g - f * v - h * w) * P, r15[12] = (a * S - o * A - u * E) * P, r15[13] = (e * A - i * S + n * E) * P, r15[14] = (m * x - _ * y - d * w) * P, r15[15] = (f * y - c * x + p * w) * P, r15) : null;
}
function Ku(r15, t) {
  var e = t[0], i = t[1], n = t[2], s = t[3], o = t[4], a = t[5], u = t[6], l = t[7], f = t[8], c = t[9], p = t[10], h = t[11], _ = t[12], m = t[13], d = t[14], b = t[15];
  return r15[0] = a * (p * b - h * d) - c * (u * b - l * d) + m * (u * h - l * p), r15[1] = -(i * (p * b - h * d) - c * (n * b - s * d) + m * (n * h - s * p)), r15[2] = i * (u * b - l * d) - a * (n * b - s * d) + m * (n * l - s * u), r15[3] = -(i * (u * h - l * p) - a * (n * h - s * p) + c * (n * l - s * u)), r15[4] = -(o * (p * b - h * d) - f * (u * b - l * d) + _ * (u * h - l * p)), r15[5] = e * (p * b - h * d) - f * (n * b - s * d) + _ * (n * h - s * p), r15[6] = -(e * (u * b - l * d) - o * (n * b - s * d) + _ * (n * l - s * u)), r15[7] = e * (u * h - l * p) - o * (n * h - s * p) + f * (n * l - s * u), r15[8] = o * (c * b - h * m) - f * (a * b - l * m) + _ * (a * h - l * c), r15[9] = -(e * (c * b - h * m) - f * (i * b - s * m) + _ * (i * h - s * c)), r15[10] = e * (a * b - l * m) - o * (i * b - s * m) + _ * (i * l - s * a), r15[11] = -(e * (a * h - l * c) - o * (i * h - s * c) + f * (i * l - s * a)), r15[12] = -(o * (c * d - p * m) - f * (a * d - u * m) + _ * (a * p - u * c)), r15[13] = e * (c * d - p * m) - f * (i * d - n * m) + _ * (i * p - n * c), r15[14] = -(e * (a * d - u * m) - o * (i * d - n * m) + _ * (i * u - n * a)), r15[15] = e * (a * p - u * c) - o * (i * p - n * c) + f * (i * u - n * a), r15;
}
function Zu(r15) {
  var t = r15[0], e = r15[1], i = r15[2], n = r15[3], s = r15[4], o = r15[5], a = r15[6], u = r15[7], l = r15[8], f = r15[9], c = r15[10], p = r15[11], h = r15[12], _ = r15[13], m = r15[14], d = r15[15], b = t * o - e * s, w = t * a - i * s, x = t * u - n * s, g = e * a - i * o, y = e * u - n * o, v = i * u - n * a, T = l * _ - f * h, E = l * m - c * h, S = l * d - p * h, O = f * m - c * _, A = f * d - p * _, L = c * d - p * m;
  return b * L - w * A + x * O + g * S - y * E + v * T;
}
function co(r15, t, e) {
  var i = t[0], n = t[1], s = t[2], o = t[3], a = t[4], u = t[5], l = t[6], f = t[7], c = t[8], p = t[9], h = t[10], _ = t[11], m = t[12], d = t[13], b = t[14], w = t[15], x = e[0], g = e[1], y = e[2], v = e[3];
  return r15[0] = x * i + g * a + y * c + v * m, r15[1] = x * n + g * u + y * p + v * d, r15[2] = x * s + g * l + y * h + v * b, r15[3] = x * o + g * f + y * _ + v * w, x = e[4], g = e[5], y = e[6], v = e[7], r15[4] = x * i + g * a + y * c + v * m, r15[5] = x * n + g * u + y * p + v * d, r15[6] = x * s + g * l + y * h + v * b, r15[7] = x * o + g * f + y * _ + v * w, x = e[8], g = e[9], y = e[10], v = e[11], r15[8] = x * i + g * a + y * c + v * m, r15[9] = x * n + g * u + y * p + v * d, r15[10] = x * s + g * l + y * h + v * b, r15[11] = x * o + g * f + y * _ + v * w, x = e[12], g = e[13], y = e[14], v = e[15], r15[12] = x * i + g * a + y * c + v * m, r15[13] = x * n + g * u + y * p + v * d, r15[14] = x * s + g * l + y * h + v * b, r15[15] = x * o + g * f + y * _ + v * w, r15;
}
function tl(r15, t, e) {
  var i = e[0], n = e[1], s = e[2], o, a, u, l, f, c, p, h, _, m, d, b;
  return t === r15 ? (r15[12] = t[0] * i + t[4] * n + t[8] * s + t[12], r15[13] = t[1] * i + t[5] * n + t[9] * s + t[13], r15[14] = t[2] * i + t[6] * n + t[10] * s + t[14], r15[15] = t[3] * i + t[7] * n + t[11] * s + t[15]) : (o = t[0], a = t[1], u = t[2], l = t[3], f = t[4], c = t[5], p = t[6], h = t[7], _ = t[8], m = t[9], d = t[10], b = t[11], r15[0] = o, r15[1] = a, r15[2] = u, r15[3] = l, r15[4] = f, r15[5] = c, r15[6] = p, r15[7] = h, r15[8] = _, r15[9] = m, r15[10] = d, r15[11] = b, r15[12] = o * i + f * n + _ * s + t[12], r15[13] = a * i + c * n + m * s + t[13], r15[14] = u * i + p * n + d * s + t[14], r15[15] = l * i + h * n + b * s + t[15]), r15;
}
function el(r15, t, e) {
  var i = e[0], n = e[1], s = e[2];
  return r15[0] = t[0] * i, r15[1] = t[1] * i, r15[2] = t[2] * i, r15[3] = t[3] * i, r15[4] = t[4] * n, r15[5] = t[5] * n, r15[6] = t[6] * n, r15[7] = t[7] * n, r15[8] = t[8] * s, r15[9] = t[9] * s, r15[10] = t[10] * s, r15[11] = t[11] * s, r15[12] = t[12], r15[13] = t[13], r15[14] = t[14], r15[15] = t[15], r15;
}
function rl(r15, t, e, i) {
  var n = i[0], s = i[1], o = i[2], a = Math.hypot(n, s, o), u, l, f, c, p, h, _, m, d, b, w, x, g, y, v, T, E, S, O, A, L, R, P, F;
  return a < V ? null : (a = 1 / a, n *= a, s *= a, o *= a, u = Math.sin(e), l = Math.cos(e), f = 1 - l, c = t[0], p = t[1], h = t[2], _ = t[3], m = t[4], d = t[5], b = t[6], w = t[7], x = t[8], g = t[9], y = t[10], v = t[11], T = n * n * f + l, E = s * n * f + o * u, S = o * n * f - s * u, O = n * s * f - o * u, A = s * s * f + l, L = o * s * f + n * u, R = n * o * f + s * u, P = s * o * f - n * u, F = o * o * f + l, r15[0] = c * T + m * E + x * S, r15[1] = p * T + d * E + g * S, r15[2] = h * T + b * E + y * S, r15[3] = _ * T + w * E + v * S, r15[4] = c * O + m * A + x * L, r15[5] = p * O + d * A + g * L, r15[6] = h * O + b * A + y * L, r15[7] = _ * O + w * A + v * L, r15[8] = c * R + m * P + x * F, r15[9] = p * R + d * P + g * F, r15[10] = h * R + b * P + y * F, r15[11] = _ * R + w * P + v * F, t !== r15 && (r15[12] = t[12], r15[13] = t[13], r15[14] = t[14], r15[15] = t[15]), r15);
}
function il(r15, t, e) {
  var i = Math.sin(e), n = Math.cos(e), s = t[4], o = t[5], a = t[6], u = t[7], l = t[8], f = t[9], c = t[10], p = t[11];
  return t !== r15 && (r15[0] = t[0], r15[1] = t[1], r15[2] = t[2], r15[3] = t[3], r15[12] = t[12], r15[13] = t[13], r15[14] = t[14], r15[15] = t[15]), r15[4] = s * n + l * i, r15[5] = o * n + f * i, r15[6] = a * n + c * i, r15[7] = u * n + p * i, r15[8] = l * n - s * i, r15[9] = f * n - o * i, r15[10] = c * n - a * i, r15[11] = p * n - u * i, r15;
}
function nl(r15, t, e) {
  var i = Math.sin(e), n = Math.cos(e), s = t[0], o = t[1], a = t[2], u = t[3], l = t[8], f = t[9], c = t[10], p = t[11];
  return t !== r15 && (r15[4] = t[4], r15[5] = t[5], r15[6] = t[6], r15[7] = t[7], r15[12] = t[12], r15[13] = t[13], r15[14] = t[14], r15[15] = t[15]), r15[0] = s * n - l * i, r15[1] = o * n - f * i, r15[2] = a * n - c * i, r15[3] = u * n - p * i, r15[8] = s * i + l * n, r15[9] = o * i + f * n, r15[10] = a * i + c * n, r15[11] = u * i + p * n, r15;
}
function sl(r15, t, e) {
  var i = Math.sin(e), n = Math.cos(e), s = t[0], o = t[1], a = t[2], u = t[3], l = t[4], f = t[5], c = t[6], p = t[7];
  return t !== r15 && (r15[8] = t[8], r15[9] = t[9], r15[10] = t[10], r15[11] = t[11], r15[12] = t[12], r15[13] = t[13], r15[14] = t[14], r15[15] = t[15]), r15[0] = s * n + l * i, r15[1] = o * n + f * i, r15[2] = a * n + c * i, r15[3] = u * n + p * i, r15[4] = l * n - s * i, r15[5] = f * n - o * i, r15[6] = c * n - a * i, r15[7] = p * n - u * i, r15;
}
function ol(r15, t) {
  return r15[0] = 1, r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = 1, r15[6] = 0, r15[7] = 0, r15[8] = 0, r15[9] = 0, r15[10] = 1, r15[11] = 0, r15[12] = t[0], r15[13] = t[1], r15[14] = t[2], r15[15] = 1, r15;
}
function al(r15, t) {
  return r15[0] = t[0], r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = t[1], r15[6] = 0, r15[7] = 0, r15[8] = 0, r15[9] = 0, r15[10] = t[2], r15[11] = 0, r15[12] = 0, r15[13] = 0, r15[14] = 0, r15[15] = 1, r15;
}
function ul(r15, t, e) {
  var i = e[0], n = e[1], s = e[2], o = Math.hypot(i, n, s), a, u, l;
  return o < V ? null : (o = 1 / o, i *= o, n *= o, s *= o, a = Math.sin(t), u = Math.cos(t), l = 1 - u, r15[0] = i * i * l + u, r15[1] = n * i * l + s * a, r15[2] = s * i * l - n * a, r15[3] = 0, r15[4] = i * n * l - s * a, r15[5] = n * n * l + u, r15[6] = s * n * l + i * a, r15[7] = 0, r15[8] = i * s * l + n * a, r15[9] = n * s * l - i * a, r15[10] = s * s * l + u, r15[11] = 0, r15[12] = 0, r15[13] = 0, r15[14] = 0, r15[15] = 1, r15);
}
function ll(r15, t) {
  var e = Math.sin(t), i = Math.cos(t);
  return r15[0] = 1, r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = i, r15[6] = e, r15[7] = 0, r15[8] = 0, r15[9] = -e, r15[10] = i, r15[11] = 0, r15[12] = 0, r15[13] = 0, r15[14] = 0, r15[15] = 1, r15;
}
function fl(r15, t) {
  var e = Math.sin(t), i = Math.cos(t);
  return r15[0] = i, r15[1] = 0, r15[2] = -e, r15[3] = 0, r15[4] = 0, r15[5] = 1, r15[6] = 0, r15[7] = 0, r15[8] = e, r15[9] = 0, r15[10] = i, r15[11] = 0, r15[12] = 0, r15[13] = 0, r15[14] = 0, r15[15] = 1, r15;
}
function cl(r15, t) {
  var e = Math.sin(t), i = Math.cos(t);
  return r15[0] = i, r15[1] = e, r15[2] = 0, r15[3] = 0, r15[4] = -e, r15[5] = i, r15[6] = 0, r15[7] = 0, r15[8] = 0, r15[9] = 0, r15[10] = 1, r15[11] = 0, r15[12] = 0, r15[13] = 0, r15[14] = 0, r15[15] = 1, r15;
}
function ho(r15, t, e) {
  var i = t[0], n = t[1], s = t[2], o = t[3], a = i + i, u = n + n, l = s + s, f = i * a, c = i * u, p = i * l, h = n * u, _ = n * l, m = s * l, d = o * a, b = o * u, w = o * l;
  return r15[0] = 1 - (h + m), r15[1] = c + w, r15[2] = p - b, r15[3] = 0, r15[4] = c - w, r15[5] = 1 - (f + m), r15[6] = _ + d, r15[7] = 0, r15[8] = p + b, r15[9] = _ - d, r15[10] = 1 - (f + h), r15[11] = 0, r15[12] = e[0], r15[13] = e[1], r15[14] = e[2], r15[15] = 1, r15;
}
function hl(r15, t) {
  var e = new ye(3), i = -t[0], n = -t[1], s = -t[2], o = t[3], a = t[4], u = t[5], l = t[6], f = t[7], c = i * i + n * n + s * s + o * o;
  return c > 0 ? (e[0] = (a * o + f * i + u * s - l * n) * 2 / c, e[1] = (u * o + f * n + l * i - a * s) * 2 / c, e[2] = (l * o + f * s + a * n - u * i) * 2 / c) : (e[0] = (a * o + f * i + u * s - l * n) * 2, e[1] = (u * o + f * n + l * i - a * s) * 2, e[2] = (l * o + f * s + a * n - u * i) * 2), ho(r15, t, e), r15;
}
function pl(r15, t) {
  return r15[0] = t[12], r15[1] = t[13], r15[2] = t[14], r15;
}
function po(r15, t) {
  var e = t[0], i = t[1], n = t[2], s = t[4], o = t[5], a = t[6], u = t[8], l = t[9], f = t[10];
  return r15[0] = Math.hypot(e, i, n), r15[1] = Math.hypot(s, o, a), r15[2] = Math.hypot(u, l, f), r15;
}
function ml(r15, t) {
  var e = new ye(3);
  po(e, t);
  var i = 1 / e[0], n = 1 / e[1], s = 1 / e[2], o = t[0] * i, a = t[1] * n, u = t[2] * s, l = t[4] * i, f = t[5] * n, c = t[6] * s, p = t[8] * i, h = t[9] * n, _ = t[10] * s, m = o + f + _, d = 0;
  return m > 0 ? (d = Math.sqrt(m + 1) * 2, r15[3] = 0.25 * d, r15[0] = (c - h) / d, r15[1] = (p - u) / d, r15[2] = (a - l) / d) : o > f && o > _ ? (d = Math.sqrt(1 + o - f - _) * 2, r15[3] = (c - h) / d, r15[0] = 0.25 * d, r15[1] = (a + l) / d, r15[2] = (p + u) / d) : f > _ ? (d = Math.sqrt(1 + f - o - _) * 2, r15[3] = (p - u) / d, r15[0] = (a + l) / d, r15[1] = 0.25 * d, r15[2] = (c + h) / d) : (d = Math.sqrt(1 + _ - o - f) * 2, r15[3] = (a - l) / d, r15[0] = (p + u) / d, r15[1] = (c + h) / d, r15[2] = 0.25 * d), r15;
}
function dl(r15, t, e, i) {
  var n = t[0], s = t[1], o = t[2], a = t[3], u = n + n, l = s + s, f = o + o, c = n * u, p = n * l, h = n * f, _ = s * l, m = s * f, d = o * f, b = a * u, w = a * l, x = a * f, g = i[0], y = i[1], v = i[2];
  return r15[0] = (1 - (_ + d)) * g, r15[1] = (p + x) * g, r15[2] = (h - w) * g, r15[3] = 0, r15[4] = (p - x) * y, r15[5] = (1 - (c + d)) * y, r15[6] = (m + b) * y, r15[7] = 0, r15[8] = (h + w) * v, r15[9] = (m - b) * v, r15[10] = (1 - (c + _)) * v, r15[11] = 0, r15[12] = e[0], r15[13] = e[1], r15[14] = e[2], r15[15] = 1, r15;
}
function _l(r15, t, e, i, n) {
  var s = t[0], o = t[1], a = t[2], u = t[3], l = s + s, f = o + o, c = a + a, p = s * l, h = s * f, _ = s * c, m = o * f, d = o * c, b = a * c, w = u * l, x = u * f, g = u * c, y = i[0], v = i[1], T = i[2], E = n[0], S = n[1], O = n[2], A = (1 - (m + b)) * y, L = (h + g) * y, R = (_ - x) * y, P = (h - g) * v, F = (1 - (p + b)) * v, N = (d + w) * v, $ = (_ + x) * T, St = (d - w) * T, Tt = (1 - (p + m)) * T;
  return r15[0] = A, r15[1] = L, r15[2] = R, r15[3] = 0, r15[4] = P, r15[5] = F, r15[6] = N, r15[7] = 0, r15[8] = $, r15[9] = St, r15[10] = Tt, r15[11] = 0, r15[12] = e[0] + E - (A * E + P * S + $ * O), r15[13] = e[1] + S - (L * E + F * S + St * O), r15[14] = e[2] + O - (R * E + N * S + Tt * O), r15[15] = 1, r15;
}
function bl(r15, t) {
  var e = t[0], i = t[1], n = t[2], s = t[3], o = e + e, a = i + i, u = n + n, l = e * o, f = i * o, c = i * a, p = n * o, h = n * a, _ = n * u, m = s * o, d = s * a, b = s * u;
  return r15[0] = 1 - c - _, r15[1] = f + b, r15[2] = p - d, r15[3] = 0, r15[4] = f - b, r15[5] = 1 - l - _, r15[6] = h + m, r15[7] = 0, r15[8] = p + d, r15[9] = h - m, r15[10] = 1 - l - c, r15[11] = 0, r15[12] = 0, r15[13] = 0, r15[14] = 0, r15[15] = 1, r15;
}
function yl(r15, t, e, i, n, s, o) {
  var a = 1 / (e - t), u = 1 / (n - i), l = 1 / (s - o);
  return r15[0] = s * 2 * a, r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = s * 2 * u, r15[6] = 0, r15[7] = 0, r15[8] = (e + t) * a, r15[9] = (n + i) * u, r15[10] = (o + s) * l, r15[11] = -1, r15[12] = 0, r15[13] = 0, r15[14] = o * s * 2 * l, r15[15] = 0, r15;
}
function mo(r15, t, e, i, n) {
  var s = 1 / Math.tan(t / 2), o;
  return r15[0] = s / e, r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = s, r15[6] = 0, r15[7] = 0, r15[8] = 0, r15[9] = 0, r15[11] = -1, r15[12] = 0, r15[13] = 0, r15[15] = 0, n != null && n !== 1 / 0 ? (o = 1 / (i - n), r15[10] = (n + i) * o, r15[14] = 2 * n * i * o) : (r15[10] = -1, r15[14] = -2 * i), r15;
}
var vl = mo;
function xl(r15, t, e, i, n) {
  var s = 1 / Math.tan(t / 2), o;
  return r15[0] = s / e, r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = s, r15[6] = 0, r15[7] = 0, r15[8] = 0, r15[9] = 0, r15[11] = -1, r15[12] = 0, r15[13] = 0, r15[15] = 0, n != null && n !== 1 / 0 ? (o = 1 / (i - n), r15[10] = n * o, r15[14] = n * i * o) : (r15[10] = -1, r15[14] = -i), r15;
}
function gl(r15, t, e, i) {
  var n = Math.tan(t.upDegrees * Math.PI / 180), s = Math.tan(t.downDegrees * Math.PI / 180), o = Math.tan(t.leftDegrees * Math.PI / 180), a = Math.tan(t.rightDegrees * Math.PI / 180), u = 2 / (o + a), l = 2 / (n + s);
  return r15[0] = u, r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = l, r15[6] = 0, r15[7] = 0, r15[8] = -((o - a) * u * 0.5), r15[9] = (n - s) * l * 0.5, r15[10] = i / (e - i), r15[11] = -1, r15[12] = 0, r15[13] = 0, r15[14] = i * e / (e - i), r15[15] = 0, r15;
}
function _o(r15, t, e, i, n, s, o) {
  var a = 1 / (t - e), u = 1 / (i - n), l = 1 / (s - o);
  return r15[0] = -2 * a, r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = -2 * u, r15[6] = 0, r15[7] = 0, r15[8] = 0, r15[9] = 0, r15[10] = 2 * l, r15[11] = 0, r15[12] = (t + e) * a, r15[13] = (n + i) * u, r15[14] = (o + s) * l, r15[15] = 1, r15;
}
var wl = _o;
function Sl(r15, t, e, i, n, s, o) {
  var a = 1 / (t - e), u = 1 / (i - n), l = 1 / (s - o);
  return r15[0] = -2 * a, r15[1] = 0, r15[2] = 0, r15[3] = 0, r15[4] = 0, r15[5] = -2 * u, r15[6] = 0, r15[7] = 0, r15[8] = 0, r15[9] = 0, r15[10] = l, r15[11] = 0, r15[12] = (t + e) * a, r15[13] = (n + i) * u, r15[14] = s * l, r15[15] = 1, r15;
}
function Tl(r15, t, e, i) {
  var n, s, o, a, u, l, f, c, p, h, _ = t[0], m = t[1], d = t[2], b = i[0], w = i[1], x = i[2], g = e[0], y = e[1], v = e[2];
  return Math.abs(_ - g) < V && Math.abs(m - y) < V && Math.abs(d - v) < V ? fo(r15) : (f = _ - g, c = m - y, p = d - v, h = 1 / Math.hypot(f, c, p), f *= h, c *= h, p *= h, n = w * p - x * c, s = x * f - b * p, o = b * c - w * f, h = Math.hypot(n, s, o), h ? (h = 1 / h, n *= h, s *= h, o *= h) : (n = 0, s = 0, o = 0), a = c * o - p * s, u = p * n - f * o, l = f * s - c * n, h = Math.hypot(a, u, l), h ? (h = 1 / h, a *= h, u *= h, l *= h) : (a = 0, u = 0, l = 0), r15[0] = n, r15[1] = a, r15[2] = f, r15[3] = 0, r15[4] = s, r15[5] = u, r15[6] = c, r15[7] = 0, r15[8] = o, r15[9] = l, r15[10] = p, r15[11] = 0, r15[12] = -(n * _ + s * m + o * d), r15[13] = -(a * _ + u * m + l * d), r15[14] = -(f * _ + c * m + p * d), r15[15] = 1, r15);
}
function El(r15, t, e, i) {
  var n = t[0], s = t[1], o = t[2], a = i[0], u = i[1], l = i[2], f = n - e[0], c = s - e[1], p = o - e[2], h = f * f + c * c + p * p;
  h > 0 && (h = 1 / Math.sqrt(h), f *= h, c *= h, p *= h);
  var _ = u * p - l * c, m = l * f - a * p, d = a * c - u * f;
  return h = _ * _ + m * m + d * d, h > 0 && (h = 1 / Math.sqrt(h), _ *= h, m *= h, d *= h), r15[0] = _, r15[1] = m, r15[2] = d, r15[3] = 0, r15[4] = c * d - p * m, r15[5] = p * _ - f * d, r15[6] = f * m - c * _, r15[7] = 0, r15[8] = f, r15[9] = c, r15[10] = p, r15[11] = 0, r15[12] = n, r15[13] = s, r15[14] = o, r15[15] = 1, r15;
}
function Ml(r15) {
  return "mat4(" + r15[0] + ", " + r15[1] + ", " + r15[2] + ", " + r15[3] + ", " + r15[4] + ", " + r15[5] + ", " + r15[6] + ", " + r15[7] + ", " + r15[8] + ", " + r15[9] + ", " + r15[10] + ", " + r15[11] + ", " + r15[12] + ", " + r15[13] + ", " + r15[14] + ", " + r15[15] + ")";
}
function Ol(r15) {
  return Math.hypot(r15[0], r15[1], r15[2], r15[3], r15[4], r15[5], r15[6], r15[7], r15[8], r15[9], r15[10], r15[11], r15[12], r15[13], r15[14], r15[15]);
}
function Pl(r15, t, e) {
  return r15[0] = t[0] + e[0], r15[1] = t[1] + e[1], r15[2] = t[2] + e[2], r15[3] = t[3] + e[3], r15[4] = t[4] + e[4], r15[5] = t[5] + e[5], r15[6] = t[6] + e[6], r15[7] = t[7] + e[7], r15[8] = t[8] + e[8], r15[9] = t[9] + e[9], r15[10] = t[10] + e[10], r15[11] = t[11] + e[11], r15[12] = t[12] + e[12], r15[13] = t[13] + e[13], r15[14] = t[14] + e[14], r15[15] = t[15] + e[15], r15;
}
function bo(r15, t, e) {
  return r15[0] = t[0] - e[0], r15[1] = t[1] - e[1], r15[2] = t[2] - e[2], r15[3] = t[3] - e[3], r15[4] = t[4] - e[4], r15[5] = t[5] - e[5], r15[6] = t[6] - e[6], r15[7] = t[7] - e[7], r15[8] = t[8] - e[8], r15[9] = t[9] - e[9], r15[10] = t[10] - e[10], r15[11] = t[11] - e[11], r15[12] = t[12] - e[12], r15[13] = t[13] - e[13], r15[14] = t[14] - e[14], r15[15] = t[15] - e[15], r15;
}
function Cl(r15, t, e) {
  return r15[0] = t[0] * e, r15[1] = t[1] * e, r15[2] = t[2] * e, r15[3] = t[3] * e, r15[4] = t[4] * e, r15[5] = t[5] * e, r15[6] = t[6] * e, r15[7] = t[7] * e, r15[8] = t[8] * e, r15[9] = t[9] * e, r15[10] = t[10] * e, r15[11] = t[11] * e, r15[12] = t[12] * e, r15[13] = t[13] * e, r15[14] = t[14] * e, r15[15] = t[15] * e, r15;
}
function Al(r15, t, e, i) {
  return r15[0] = t[0] + e[0] * i, r15[1] = t[1] + e[1] * i, r15[2] = t[2] + e[2] * i, r15[3] = t[3] + e[3] * i, r15[4] = t[4] + e[4] * i, r15[5] = t[5] + e[5] * i, r15[6] = t[6] + e[6] * i, r15[7] = t[7] + e[7] * i, r15[8] = t[8] + e[8] * i, r15[9] = t[9] + e[9] * i, r15[10] = t[10] + e[10] * i, r15[11] = t[11] + e[11] * i, r15[12] = t[12] + e[12] * i, r15[13] = t[13] + e[13] * i, r15[14] = t[14] + e[14] * i, r15[15] = t[15] + e[15] * i, r15;
}
function kl(r15, t) {
  return r15[0] === t[0] && r15[1] === t[1] && r15[2] === t[2] && r15[3] === t[3] && r15[4] === t[4] && r15[5] === t[5] && r15[6] === t[6] && r15[7] === t[7] && r15[8] === t[8] && r15[9] === t[9] && r15[10] === t[10] && r15[11] === t[11] && r15[12] === t[12] && r15[13] === t[13] && r15[14] === t[14] && r15[15] === t[15];
}
function Ll(r15, t) {
  var e = r15[0], i = r15[1], n = r15[2], s = r15[3], o = r15[4], a = r15[5], u = r15[6], l = r15[7], f = r15[8], c = r15[9], p = r15[10], h = r15[11], _ = r15[12], m = r15[13], d = r15[14], b = r15[15], w = t[0], x = t[1], g = t[2], y = t[3], v = t[4], T = t[5], E = t[6], S = t[7], O = t[8], A = t[9], L = t[10], R = t[11], P = t[12], F = t[13], N = t[14], $ = t[15];
  return Math.abs(e - w) <= V * Math.max(1, Math.abs(e), Math.abs(w)) && Math.abs(i - x) <= V * Math.max(1, Math.abs(i), Math.abs(x)) && Math.abs(n - g) <= V * Math.max(1, Math.abs(n), Math.abs(g)) && Math.abs(s - y) <= V * Math.max(1, Math.abs(s), Math.abs(y)) && Math.abs(o - v) <= V * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(a - T) <= V * Math.max(1, Math.abs(a), Math.abs(T)) && Math.abs(u - E) <= V * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(l - S) <= V * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(f - O) <= V * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(c - A) <= V * Math.max(1, Math.abs(c), Math.abs(A)) && Math.abs(p - L) <= V * Math.max(1, Math.abs(p), Math.abs(L)) && Math.abs(h - R) <= V * Math.max(1, Math.abs(h), Math.abs(R)) && Math.abs(_ - P) <= V * Math.max(1, Math.abs(_), Math.abs(P)) && Math.abs(m - F) <= V * Math.max(1, Math.abs(m), Math.abs(F)) && Math.abs(d - N) <= V * Math.max(1, Math.abs(d), Math.abs(N)) && Math.abs(b - $) <= V * Math.max(1, Math.abs(b), Math.abs($));
}
var Rl = co, Il = bo;
var vo = `#ifdef GL_ES
precision highp float;
#endif
varying vec2 vTextureCoord;uniform sampler2D uSampler;varying float xPosition;float leftRightFade(float start,float xPos){float deltaAlpha;xPos=abs(xPos);if(xPos>start)deltaAlpha=(xPos-start)*1.0/(1.0-start);return deltaAlpha;}void main(void){gl_FragColor=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t));gl_FragColor.a-=leftRightFade(0.8,xPosition);}`;
var xo = "attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying float xPosition;void main(void){gl_Position=uPMatrix*uMVMatrix*vec4(aVertexPosition,1.0);vTextureCoord=aTextureCoord;xPosition=gl_Position.x;}";
WebGLRenderingContext.prototype.pushMatrix = function() {
  let r15 = gt.create();
  gt.copy(this.mvMatrix, r15), this.mvMatrixStack.push(r15);
};
WebGLRenderingContext.prototype.popMatrix = function() {
  if (this.mvMatrixStack.length == 0)
    throw "Invalid popMatrix!";
  this.mvMatrix = this.mvMatrixStack.pop();
};
var te = { loadShader: function(r15, t, e) {
  let i = r15.createShader(e);
  if (i && (r15.shaderSource(i, t), r15.compileShader(i), !r15.getShaderParameter(i, r15.COMPILE_STATUS)))
    throw r15.getShaderInfoLog(i);
  return i;
}, loadTexture: function(r15, t, e) {
  r15.bindTexture(r15.TEXTURE_2D, t), r15.pixelStorei(r15.UNPACK_FLIP_Y_WEBGL, true), r15.texImage2D(r15.TEXTURE_2D, 0, r15.RGBA, r15.RGBA, r15.UNSIGNED_BYTE, e), r15.texParameteri(r15.TEXTURE_2D, r15.TEXTURE_MAG_FILTER, r15.NEAREST), r15.texParameteri(r15.TEXTURE_2D, r15.TEXTURE_MIN_FILTER, r15.NEAREST), r15.bindTexture(r15.TEXTURE_2D, null);
}, init: function(r15) {
  let t = null;
  try {
    return t = r15.getContext("webgl"), t && (t.mvMatrix = gt.create(), t.pMatrix = gt.create(), t.mvMatrixStack = []), t;
  } catch {
  }
  t || alert("Your Web Browser does not have WebGL Capabilities...");
}, initShaders: function(r15) {
  let t = te.loadShader(r15, vo, r15.FRAGMENT_SHADER);
  if (!t)
    throw new Error("Erroor loading fragment shader");
  let e = te.loadShader(r15, xo, r15.VERTEX_SHADER);
  if (!e)
    throw new Error("Error loading vertex shader");
  let i = r15.createProgram();
  if (!i)
    throw new Error("Error creating shader program");
  r15.shaderProgram = i, r15.attachShader(i, t), r15.attachShader(i, e), r15.linkProgram(i), r15.getProgramParameter(i, r15.LINK_STATUS) || alert("Could not initialise shaders"), r15.getProgramParameter(r15.shaderProgram, r15.LINK_STATUS) || alert("Could not initialise shaders"), r15.useProgram(r15.shaderProgram), r15.shaderProgram.vertexPositionAttribute = r15.getAttribLocation(r15.shaderProgram, "aVertexPosition"), r15.enableVertexAttribArray(r15.shaderProgram.vertexPositionAttribute), r15.shaderProgram.textureCoordAttribute = r15.getAttribLocation(r15.shaderProgram, "aTextureCoord"), r15.enableVertexAttribArray(r15.shaderProgram.textureCoordAttribute), r15.shaderProgram.pMatrixUniform = r15.getUniformLocation(r15.shaderProgram, "uPMatrix"), r15.shaderProgram.mvMatrixUniform = r15.getUniformLocation(r15.shaderProgram, "uMVMatrix"), r15.shaderProgram.samplerUniform = r15.getUniformLocation(r15.shaderProgram, "uSampler");
}, initQuad: function(r15, t, e, i, n) {
  var s = r15.createBuffer();
  r15.bindBuffer(r15.ARRAY_BUFFER, s);
  var o = [t, e, 0, 0, e, 0, t, 0, 0, 0, 0, 0];
  if (r15.bufferData(r15.ARRAY_BUFFER, new Float32Array(o), r15.STATIC_DRAW), !s)
    throw new Error("Invalid vertex buffer");
  s.itemSize = 3, s.numItems = 4;
  var a = r15.createBuffer();
  r15.bindBuffer(r15.ARRAY_BUFFER, a);
  var u = [i, n, 0, n, i, 0, 0, 0];
  if (r15.bufferData(r15.ARRAY_BUFFER, new Float32Array(u), r15.STATIC_DRAW), !a)
    throw new Error("Invalid tex coord buffer");
  a.itemSize = 2, a.numItems = 4;
  var l = { vertexBuffer: s, textCoordsBuffer: a };
  return l;
}, drawQuad: function(r15, t, e) {
  r15.bindBuffer(r15.ARRAY_BUFFER, t.vertexBuffer), r15.vertexAttribPointer(r15.shaderProgram.vertexPositionAttribute, t.vertexBuffer.itemSize, r15.FLOAT, false, 0, 0), r15.bindBuffer(r15.ARRAY_BUFFER, t.textCoordsBuffer), r15.vertexAttribPointer(r15.shaderProgram.textureCoordAttribute, t.textCoordsBuffer.itemSize, r15.FLOAT, false, 0, 0), r15.activeTexture(r15.TEXTURE0), r15.bindTexture(r15.TEXTURE_2D, e), r15.uniform1i(r15.shaderProgram.samplerUniform, 0), zl(r15), r15.drawArrays(r15.TRIANGLE_STRIP, 0, t.vertexBuffer.numItems);
} };
function zl(r15) {
  r15.uniformMatrix4fv(r15.shaderProgram.pMatrixUniform, false, r15.pMatrix), r15.uniformMatrix4fv(r15.shaderProgram.mvMatrixUniform, false, r15.mvMatrix);
}
var Nl = function(r15) {
  let t = document.createElement("canvas");
  return t.style.width = "100%", t.style.height = "100%", t.width = r15.clientWidth, t.height = r15.clientHeight, r15.appendChild(t), t;
};
function Bl(r15, t, e) {
  let i = t, n = t.length, s = r15.measureText(t).width;
  if (s > e)
    for (var a, u = Math.floor(n / 2); u < n; )
      if (i = t.slice(0, u), s = r15.measureText(i).width, a = Math.round((n - u) / 2), s > e)
        n = u, u -= a;
      else if (s < e)
        u += a;
      else
        break;
  var l = 0;
  if (t.length != i.length) {
    var f = i.length, c = r15.measureText(t.slice(0, f + 1)).width, p = r15.measureText(t.slice(f, f + 1)).width;
    l = c - s - p, l = l > 0 ? l : 0;
  }
  return [i, s, l];
}
var wo = class {
  constructor(t, e, i, n, s) {
    __publicField(this, "textureHandle");
    __publicField(this, "pos", 0);
    __publicField(this, "quad", null);
    this.gl = t;
    this.canvas = e;
    this.ctx = i;
    this.width = n;
    this.height = s;
    this.textureHandle = t.createTexture();
  }
  setText(t, e, i, n) {
    let s, o = i.str, a = i.char;
    this.ctx.clearRect(0, 0, this.width, this.height);
    let u = 0;
    do {
      u += e;
      var l = 95 / 100 * this.gl.canvas.height;
      this.ctx.font = Math.round(l) + "px " + t[o].fontFamily, this.ctx.fillStyle = t[o].color, this.ctx.textBaseline = "bottom";
      var f = t[o].str.slice(a);
      if (s = Bl(this.ctx, f, this.width - u), e = s[2], this.ctx.fillText(s[0], u, this.height), u += s[1], f.length == s[0].length)
        a = 0, o++;
      else
        break;
    } while (o < t.length);
    this.textureHandle && te.loadTexture(this.gl, this.textureHandle, this.canvas);
    var c = this.width / this.canvas.width;
    return this.quad = te.initQuad(this.gl, this.canvas.width * c, this.canvas.height, 1 * c, 1), this.pos = n, i.str = o, i.char = a + s[0].length, e;
  }
  update(t) {
    this.pos += t;
  }
  render() {
    this.gl.pushMatrix(), gt.translate(this.gl.mvMatrix, this.gl.mvMatrix, [this.pos, 0, 0]), this.quad && this.textureHandle && te.drawQuad(this.gl, this.quad, this.textureHandle), this.gl.popMatrix();
  }
}, ji = class {
  constructor(t, e) {
    __publicField(this, "gl");
    __publicField(this, "canvas");
    __publicField(this, "numTextures");
    __publicField(this, "chunks");
    __publicField(this, "headChunk", 0);
    __publicField(this, "tailChunk", 1);
    __publicField(this, "index", { str: 0, char: 0 });
    __publicField(this, "bias");
    __publicField(this, "playing", false);
    this.el = t;
    this.text = e;
    let { gl: i, canvas: n, textureWidth: s, textureHeight: o } = this.initGL(t);
    this.canvas = n, this.gl = i;
    let a = document.createElement("canvas");
    a.width = s, a.height = o;
    let u = a.getContext("2d");
    if (!u)
      throw new Error("Cannot get 2D context");
    this.numTextures = Math.ceil(n.width / s) + 2, this.chunks = new Array();
    for (let l = 0; l < this.numTextures; l++)
      this.chunks[l] = new wo(i, a, u, s, o);
    this.text = e, this.headChunk = 0, this.tailChunk = 1, this.index = { str: 0, char: 0 }, this.bias = this.chunks[0].setText(e, 0, this.index, n.width), i.viewport(0, 0, i.drawingBufferWidth, i.drawingBufferHeight), gt.identity(i.mvMatrix);
  }
  initGL(t) {
    let e = Nl(t), i = Math.min(go(e.width), 1024), n = Math.min(go(e.height), 1024), s = te.init(e);
    if (!s)
      throw new Error("Error initializing webgl");
    return te.initShaders(s), s.clearColor(0, 0, 0, 0), s.enable(s.DEPTH_TEST), { gl: s, canvas: e, textureWidth: i, textureHeight: n };
  }
  play(t) {
    return new C((e) => {
      let i = true, n = () => {
        i && (lo(n), this.updateScroll(-t) && e.next("played"));
      };
      return n(), () => {
        i = false;
      };
    });
  }
  updateScroll(t) {
    let e = this.gl;
    e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), gt.identity(e.pMatrix), gt.ortho(e.pMatrix, 0, e.drawingBufferWidth, 0, e.drawingBufferHeight, -1, 1);
    let i = false, n = this.headChunk;
    do {
      var s = this.chunks[n];
      s.update(t), s.render();
      var o = s.width + s.pos, a = (n + 1) % this.numTextures;
      if (o < 0) {
        if (this.headChunk = (this.headChunk + 1) % this.numTextures, this.headChunk == this.tailChunk) {
          this.headChunk = 0, this.tailChunk = 1, this.index = { str: 0, char: 0 }, this.bias = this.chunks[0].setText(this.text, 0, this.index, this.canvas.width), i = true;
          break;
        }
      } else
        o <= this.canvas.width && a == this.tailChunk && this.index.str < this.text.length && (this.bias = this.chunks[this.tailChunk].setText(this.text, this.bias, this.index, this.canvas.width), this.tailChunk = (this.tailChunk + 1) % this.numTextures);
      n = a;
    } while (n != this.tailChunk);
    return i;
  }
};
function go(r15) {
  return 1 << Math.ceil(Math.log(r15) / Math.log(2));
}
var To = qe(cr(), 1);
var ht = class extends To.EventEmitter {
  constructor(t) {
    super();
    __publicField(this, "messageHandler");
    if (window.parent) {
      let e = this.messageHandler = (i) => {
        let n;
        try {
          n = JSON.parse(i.data);
        } catch {
          return;
        }
        let s;
        switch (n.method) {
          case "unload":
            this.unload();
            break;
        }
        window.parent.postMessage(JSON.stringify({ counter: n.counter, result: s }));
      };
      window.addEventListener("message", e, false);
    }
  }
  static async fromJSON(t) {
    switch (t.uri) {
      case "widget://image":
        return new Xi(t.args);
      case "widget://video":
        return new Qi(t.args);
      case "widget://text":
        return new qr(t.args);
      case "widget://text-scroll":
        return new Ji(t.args);
      case "widget://layout":
        return hr.fromLayoutJSON(t.args);
    }
  }
  unload() {
  }
  mimeType() {
  }
  play(t) {
    return ni;
  }
  stop() {
  }
  show(t, e) {
    return I("shown");
  }
  seek(t) {
    return I([t, 0]);
  }
  duration() {
    return I(0);
  }
  toggleDebug() {
  }
  volume(t) {
  }
};
var pr = class extends ht {
  constructor(t) {
    super(t);
    __publicField(this, "timeline");
    __publicField(this, "offset", 0);
    this.timeline = G.timeline({ paused: true });
  }
  play(t) {
    return this.timeline ? (this.timeline.play(this.offset / 1e3), Je(new C((e) => {
      var _a2;
      let i = (n) => {
        e.next("played"), e.complete();
      };
      return (_a2 = this.timeline) == null ? void 0 : _a2.eventCallback("onComplete", i), () => {
        var _a3, _b;
        (_a3 = this.timeline) == null ? void 0 : _a3.eventCallback("onComplete", null), (_b = this.timeline) == null ? void 0 : _b.pause();
      };
    }), super.play(t))) : super.play(t);
  }
  stop() {
    var _a2;
    (_a2 = this.timeline) == null ? void 0 : _a2.pause();
  }
  seek(t) {
    var _a2;
    return this.offset = t, (_a2 = this.timeline) == null ? void 0 : _a2.seek(t / 1e3), I([t, 0]);
  }
  duration() {
    var _a2;
    return I((((_a2 = this.timeline) == null ? void 0 : _a2.duration()) || 0) * 1e3);
  }
};
var Xi = class extends pr {
  constructor(t) {
    super(t);
    __publicField(this, "img");
    __publicField(this, "src");
    __publicField(this, "size");
    this.src = t.src, this.size = t.size;
  }
  show(t, e) {
    if (this.img)
      return I("loaded");
    let i = this.img = document.createElement("div");
    return i.style.background = "url(" + this.src + ") no-repeat center", i.style.backgroundSize = this.size ? this.size : "contain", i.style.width = "100%", i.style.height = "100%", t.appendChild(i), new C((n) => {
      let s = document.createElement("img");
      return s.src = this.src, s.onload = (o) => {
        n.next("loaded"), n.complete();
      }, () => {
        s.onload = null;
      };
    });
  }
  unload() {
    var _a2;
    this.img && (this.img.style.background = "none", (_a2 = this.img.parentElement) == null ? void 0 : _a2.removeChild(this.img), this.img = void 0);
  }
  mimeType() {
    return "image/jpeg";
  }
};
function Ki(r15) {
  return function(e) {
    var i = new Hl(r15), n = e.lift(i);
    return i.caught = n;
  };
}
var Hl = function() {
  function r15(t) {
    this.selector = t;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new Vl(t, this.selector, this.caught));
  }, r15;
}(), Vl = function(r15) {
  M(t, r15);
  function t(e, i, n) {
    var s = r15.call(this, e) || this;
    return s.selector = i, s.caught = n, s;
  }
  return t.prototype.error = function(e) {
    if (!this.isStopped) {
      var i = void 0;
      try {
        i = this.selector(e, this.caught);
      } catch (o) {
        r15.prototype.error.call(this, o);
        return;
      }
      this._unsubscribeAndRecycle();
      var n = new Mt(this);
      this.add(n);
      var s = Pt(i, n);
      s !== n && this.add(s);
    }
  }, t;
}(Ot);
function ee(r15, t) {
  return It(r15, t, 1);
}
function We(r15) {
  return r15 === void 0 && (r15 = null), function(t) {
    return t.lift(new Yl(r15));
  };
}
var Yl = function() {
  function r15(t) {
    this.defaultValue = t;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new Gl(t, this.defaultValue));
  }, r15;
}(), Gl = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this, e) || this;
    return n.defaultValue = i, n.isEmpty = true, n;
  }
  return t.prototype._next = function(e) {
    this.isEmpty = false, this.destination.next(e);
  }, t.prototype._complete = function() {
    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
  }, t;
}(k);
function Eo(r15) {
  return r15 instanceof Date && !isNaN(+r15);
}
function Xr(r15) {
  return r15 === void 0 && (r15 = ql), function(t) {
    return t.lift(new $l(r15));
  };
}
var $l = function() {
  function r15(t) {
    this.errorFactory = t;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new jl(t, this.errorFactory));
  }, r15;
}(), jl = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this, e) || this;
    return n.errorFactory = i, n.hasValue = false, n;
  }
  return t.prototype._next = function(e) {
    this.hasValue = true, this.destination.next(e);
  }, t.prototype._complete = function() {
    if (this.hasValue)
      return this.destination.complete();
    var e = void 0;
    try {
      e = this.errorFactory();
    } catch (i) {
      e = i;
    }
    this.destination.error(e);
  }, t;
}(k);
function ql() {
  return new Oe();
}
function re(r15) {
  return function(t) {
    return r15 === 0 ? Te() : t.lift(new Xl(r15));
  };
}
var Xl = function() {
  function r15(t) {
    if (this.total = t, this.total < 0)
      throw new Mr();
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new Jl(t, this.total));
  }, r15;
}(), Jl = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this, e) || this;
    return n.total = i, n.count = 0, n;
  }
  return t.prototype._next = function(e) {
    var i = this.total, n = ++this.count;
    n <= i && (this.destination.next(e), n === i && (this.destination.complete(), this.unsubscribe()));
  }, t;
}(k);
function He(r15) {
  return function(t) {
    return t.lift(new Ql(r15));
  };
}
var Ql = function() {
  function r15(t) {
    this.callback = t;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new Kl(t, this.callback));
  }, r15;
}(), Kl = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this, e) || this;
    return n.add(new B(i)), n;
  }
  return t;
}(k);
function Ve(r15, t) {
  var e = arguments.length >= 2;
  return function(i) {
    return i.pipe(r15 ? Ar(function(n, s) {
      return r15(n, s, i);
    }) : Wt, re(1), e ? We(t) : Xr(function() {
      return new Oe();
    }));
  };
}
function mr(r15) {
  return function(e) {
    return r15 === 0 ? Te() : e.lift(new Zl(r15));
  };
}
var Zl = function() {
  function r15(t) {
    if (this.total = t, this.total < 0)
      throw new Mr();
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new tf(t, this.total));
  }, r15;
}(), tf = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this, e) || this;
    return n.total = i, n.ring = new Array(), n.count = 0, n;
  }
  return t.prototype._next = function(e) {
    var i = this.ring, n = this.total, s = this.count++;
    if (i.length < n)
      i.push(e);
    else {
      var o = s % n;
      i[o] = e;
    }
  }, t.prototype._complete = function() {
    var e = this.destination, i = this.count;
    if (i > 0)
      for (var n = this.count >= this.total ? this.total : this.count, s = this.ring, o = 0; o < n; o++) {
        var a = i++ % n;
        e.next(s[a]);
      }
    e.complete();
  }, t;
}(k);
function Ye(r15, t) {
  var e = arguments.length >= 2;
  return function(i) {
    return i.pipe(r15 ? Ar(function(n, s) {
      return r15(n, s, i);
    }) : Wt, mr(1), e ? We(t) : Xr(function() {
      return new Oe();
    }));
  };
}
function Zi(r15, t) {
  var e = false;
  return arguments.length >= 2 && (e = true), function(n) {
    return n.lift(new ef(r15, t, e));
  };
}
var ef = function() {
  function r15(t, e, i) {
    i === void 0 && (i = false), this.accumulator = t, this.seed = e, this.hasSeed = i;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new rf(t, this.accumulator, this.seed, this.hasSeed));
  }, r15;
}(), rf = function(r15) {
  M(t, r15);
  function t(e, i, n, s) {
    var o = r15.call(this, e) || this;
    return o.accumulator = i, o._seed = n, o.hasSeed = s, o.index = 0, o;
  }
  return Object.defineProperty(t.prototype, "seed", { get: function() {
    return this._seed;
  }, set: function(e) {
    this.hasSeed = true, this._seed = e;
  }, enumerable: true, configurable: true }), t.prototype._next = function(e) {
    if (!this.hasSeed)
      this.seed = e, this.destination.next(e);
    else
      return this._tryNext(e);
  }, t.prototype._tryNext = function(e) {
    var i = this.index++, n;
    try {
      n = this.accumulator(this.seed, e, i);
    } catch (s) {
      this.destination.error(s);
    }
    this.seed = n, this.destination.next(n);
  }, t;
}(k);
function Ge(r15, t) {
  return arguments.length >= 2 ? function(i) {
    return Zr(Zi(r15, t), mr(1), We(t))(i);
  } : function(i) {
    return Zr(Zi(function(n, s, o) {
      return r15(n, s, o + 1);
    }), mr(1))(i);
  };
}
function tn(r15) {
  var t = typeof r15 == "function" ? function(e, i) {
    return r15(e, i) > 0 ? e : i;
  } : function(e, i) {
    return e > i ? e : i;
  };
  return Ge(t);
}
function Mo(r15, t) {
  return function(i) {
    var n;
    if (typeof r15 == "function" ? n = r15 : n = function() {
      return r15;
    }, typeof t == "function")
      return i.lift(new nf(n, t));
    var s = Object.create(i, Bn);
    return s.source = i, s.subjectFactory = n, s;
  };
}
var nf = function() {
  function r15(t, e) {
    this.subjectFactory = t, this.selector = e;
  }
  return r15.prototype.call = function(t, e) {
    var i = this.selector, n = this.subjectFactory(), s = i(n).subscribe(t);
    return s.add(e.subscribe(n)), s;
  }, r15;
}();
function en(r15) {
  return r15 === void 0 && (r15 = -1), function(t) {
    return r15 === 0 ? Te() : r15 < 0 ? t.lift(new Oo(-1, t)) : t.lift(new Oo(r15 - 1, t));
  };
}
var Oo = function() {
  function r15(t, e) {
    this.count = t, this.source = e;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new sf(t, this.count, this.source));
  }, r15;
}(), sf = function(r15) {
  M(t, r15);
  function t(e, i, n) {
    var s = r15.call(this, e) || this;
    return s.count = i, s.source = n, s;
  }
  return t.prototype.complete = function() {
    if (!this.isStopped) {
      var e = this, i = e.source, n = e.count;
      if (n === 0)
        return r15.prototype.complete.call(this);
      n > -1 && (this.count = n - 1), i.subscribe(this._unsubscribeAndRecycle());
    }
  }, t;
}(k);
function of() {
  return new ri();
}
function ie() {
  return function(r15) {
    return wr()(Mo(of)(r15));
  };
}
function pt(r15, t) {
  return typeof t == "function" ? function(e) {
    return e.pipe(pt(function(i, n) {
      return mt(r15(i, n)).pipe(X(function(s, o) {
        return t(i, s, n, o);
      }));
    }));
  } : function(e) {
    return e.lift(new af(r15));
  };
}
var af = function() {
  function r15(t) {
    this.project = t;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new uf(t, this.project));
  }, r15;
}(), uf = function(r15) {
  M(t, r15);
  function t(e, i) {
    var n = r15.call(this, e) || this;
    return n.project = i, n.index = 0, n;
  }
  return t.prototype._next = function(e) {
    var i, n = this.index++;
    try {
      i = this.project(e, n);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this._innerSub(i);
  }, t.prototype._innerSub = function(e) {
    var i = this.innerSubscription;
    i && i.unsubscribe();
    var n = new Mt(this), s = this.destination;
    s.add(n), this.innerSubscription = Pt(e, n), this.innerSubscription !== n && s.add(this.innerSubscription);
  }, t.prototype._complete = function() {
    var e = this.innerSubscription;
    (!e || e.closed) && r15.prototype._complete.call(this), this.unsubscribe();
  }, t.prototype._unsubscribe = function() {
    this.innerSubscription = void 0;
  }, t.prototype.notifyComplete = function() {
    this.innerSubscription = void 0, this.isStopped && r15.prototype._complete.call(this);
  }, t.prototype.notifyNext = function(e) {
    this.destination.next(e);
  }, t;
}(Ot);
function rn(r15) {
  return function(t) {
    return t.lift(new lf(r15));
  };
}
var lf = function() {
  function r15(t) {
    this.notifier = t;
  }
  return r15.prototype.call = function(t, e) {
    var i = new ff(t), n = Pt(this.notifier, new Mt(i));
    return n && !i.seenValue ? (i.add(n), e.subscribe(i)) : i;
  }, r15;
}(), ff = function(r15) {
  M(t, r15);
  function t(e) {
    var i = r15.call(this, e) || this;
    return i.seenValue = false, i;
  }
  return t.prototype.notifyNext = function() {
    this.seenValue = true, this.complete();
  }, t.prototype.notifyComplete = function() {
  }, t;
}(Ot);
function nn(r15, t) {
  return t === void 0 && (t = false), function(e) {
    return e.lift(new cf(r15, t));
  };
}
var cf = function() {
  function r15(t, e) {
    this.predicate = t, this.inclusive = e;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new hf(t, this.predicate, this.inclusive));
  }, r15;
}(), hf = function(r15) {
  M(t, r15);
  function t(e, i, n) {
    var s = r15.call(this, e) || this;
    return s.predicate = i, s.inclusive = n, s.index = 0, s;
  }
  return t.prototype._next = function(e) {
    var i = this.destination, n;
    try {
      n = this.predicate(e, this.index++);
    } catch (s) {
      i.error(s);
      return;
    }
    this.nextOrComplete(e, n);
  }, t.prototype.nextOrComplete = function(e, i) {
    var n = this.destination;
    Boolean(i) ? n.next(e) : (this.inclusive && n.next(e), n.complete());
  }, t;
}(k);
function ve(r15, t, e) {
  return function(n) {
    return n.lift(new pf(r15, t, e));
  };
}
var pf = function() {
  function r15(t, e, i) {
    this.nextOrObserver = t, this.error = e, this.complete = i;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new mf(t, this.nextOrObserver, this.error, this.complete));
  }, r15;
}(), mf = function(r15) {
  M(t, r15);
  function t(e, i, n, s) {
    var o = r15.call(this, e) || this;
    return o._tapNext = wt, o._tapError = wt, o._tapComplete = wt, o._tapError = n || wt, o._tapComplete = s || wt, Lt(i) ? (o._context = o, o._tapNext = i) : i && (o._context = i, o._tapNext = i.next || wt, o._tapError = i.error || wt, o._tapComplete = i.complete || wt), o;
  }
  return t.prototype._next = function(e) {
    try {
      this._tapNext.call(this._context, e);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(e);
  }, t.prototype._error = function(e) {
    try {
      this._tapError.call(this._context, e);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.error(e);
  }, t.prototype._complete = function() {
    try {
      this._tapComplete.call(this._context);
    } catch (e) {
      this.destination.error(e);
      return;
    }
    return this.destination.complete();
  }, t;
}(k);
function Po(r15, t, e) {
  return e === void 0 && (e = Er), function(i) {
    var n = Eo(r15), s = n ? +r15 - e.now() : Math.abs(r15);
    return i.lift(new df(s, n, t, e));
  };
}
var df = function() {
  function r15(t, e, i, n) {
    this.waitFor = t, this.absoluteTimeout = e, this.withObservable = i, this.scheduler = n;
  }
  return r15.prototype.call = function(t, e) {
    return e.subscribe(new _f(t, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  }, r15;
}(), _f = function(r15) {
  M(t, r15);
  function t(e, i, n, s, o) {
    var a = r15.call(this, e) || this;
    return a.absoluteTimeout = i, a.waitFor = n, a.withObservable = s, a.scheduler = o, a.scheduleTimeout(), a;
  }
  return t.dispatchTimeout = function(e) {
    var i = e.withObservable;
    e._unsubscribeAndRecycle(), e.add(Pt(i, new Mt(e)));
  }, t.prototype.scheduleTimeout = function() {
    var e = this.action;
    e ? this.action = e.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(t.dispatchTimeout, this.waitFor, this));
  }, t.prototype._next = function(e) {
    this.absoluteTimeout || this.scheduleTimeout(), r15.prototype._next.call(this, e);
  }, t.prototype._unsubscribe = function() {
    this.action = void 0, this.scheduler = null, this.withObservable = null;
  }, t;
}(Ot);
function sn(r15, t) {
  return t === void 0 && (t = Er), Po(r15, Vn(new Yn()), t);
}
var hr = class extends ht {
  constructor(t, e) {
    super(e);
    __publicField(this, "items", []);
    this.name = t;
  }
  static async fromLayoutJSON(t) {
    let e = new hr(t.name, t.args), i = t.items;
    return await Promise.all(i.map(async (n) => {
      let s = await dr.fromJSON(n.playlist);
      e.add({ css: n.css, playlist: s });
    })), e;
  }
  show(t) {
    return mt(this.items).pipe(It((e) => (t.appendChild(e.renderer.el), e.playlist.show(e.renderer))), Ye());
  }
  unload() {
    this.items.map((t) => {
      t.playlist.layers.forEach((e) => e.unload()), t.renderer.clean();
    });
  }
  toggleDebug() {
    this.items.map(({ renderer: t, playlist: e }) => {
      t.toggleDebug();
    });
  }
  add(t) {
    let e = document.createElement("div");
    e.style.position = "absolute";
    let i = t.css;
    for (let n in i) {
      let s = i[n];
      s && (e.style[n] = s);
    }
    this.items.push({ renderer: new Qe(e), playlist: t.playlist });
  }
  duration() {
    return Ce(...this.items.map((e) => e.playlist.duration())).pipe(tn());
  }
  play(t) {
    return mt(this.items).pipe(It((e) => e.playlist.play(e.renderer, t, { loop: true })));
  }
  seek(t) {
    return Ce(...this.items.map((e) => e.playlist.seek(t))).pipe(Ye());
  }
};
var on = class extends ht {
  constructor(t, e, i) {
    super();
    __publicField(this, "messageHandler");
    __publicField(this, "origin");
    __publicField(this, "resolvers", {});
    this.parent = t;
    this.iframe = e;
    let n = this.messageHandler = (s) => {
      let o;
      try {
        o = JSON.parse(s.data);
      } catch {
        return;
      }
      typeof o.counter < "u" && this.resolvers[o.counter] && (this.resolvers[o.counter](o.result), delete this.resolvers[o.counter]);
    };
    this.origin = i, this.parent.addEventListener("message", n, false);
  }
  static async fromJSON(t) {
  }
  async load() {
    return this.callMethod("prepare");
  }
  async ready() {
  }
  unload() {
    this.messageHandler && this.parent.removeEventListener("message", this.messageHandler);
  }
  mimeType() {
    return "proxy";
  }
  play(t) {
    return mt(this.callMethod("play"));
  }
  stop() {
    return this.callMethod("stop");
  }
  duration() {
    return this.callMethod("duration");
  }
  seek(t) {
    return this.callMethod("seek", [t]);
  }
  volume(t) {
    return this.callMethod("volume", [t]);
  }
  callMethod(t, e) {
    var _a2;
    let i = on.id++, n = { counter: i, method: t, args: e };
    return (_a2 = this.iframe.contentWindow) == null ? void 0 : _a2.postMessage(JSON.stringify(n), this.origin), I(this.resolvers[i]);
  }
}, Co = on;
yr(Co, "id", 0);
var Ji = class extends ht {
  constructor(t) {
    super();
    __publicField(this, "canvas", null);
    __publicField(this, "scroll", null);
    __publicField(this, "text");
    __publicField(this, "speed");
    __publicField(this, "offset", 0);
    this.text = t.text, this.speed = t.speed;
  }
  show(t, e) {
    return this.scroll || (this.scroll = new ji(t, this.text)), I("shown");
  }
  play(t) {
    return this.scroll ? this.scroll.play(this.speed) : super.play(t);
  }
  unload() {
    this.canvas && document.removeChild(this.canvas);
  }
};
var Jr = (r15, t) => {
  for (let e in t) {
    let i = t[e];
    i && (r15.style[e] = i);
  }
};
var Ao = { max: 100, min: 0 }, bf = { snake: { from: { duration: 0.5, opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back", stagger: 0.05 }, perspective: 400, chars: true }, upper: { from: { duration: 0.8, opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back", stagger: 0.01 }, perspective: 400, chars: false } }, qr = class extends pr {
  constructor(t) {
    super(t);
    __publicField(this, "div");
    __publicField(this, "text");
    __publicField(this, "css");
    __publicField(this, "font");
    __publicField(this, "fontFace");
    this.text = t.text, this.css = t.css, this.font = t.font;
    let e = this.div = this.div = document.createElement("div");
    e.textContent = this.text, Jr(e, this.css);
    let i = this.timeline = G.timeline({ paused: true });
    if (t.animation) {
      let n = yf(e, t.animation.chars);
      t.animation.perspective && G.set(e, { perspective: t.animation.perspective }), i.from(n.chars || n.words, t.animation.from);
    }
  }
  show(t, e) {
    var _a2;
    return this.offset = e, ((_a2 = this.div) == null ? void 0 : _a2.parentElement) ? I("loaded") : (t.appendChild(this.div), this.font && (this.fontFace = new FontFace(this.font.name, `url(${this.font.url})`), document.fonts.add(this.fontFace)), I("loaded"));
  }
  unload() {
    var _a2;
    this.div && ((_a2 = this.div.parentElement) == null ? void 0 : _a2.removeChild(this.div)), this.fontFace && document.fonts.delete(this.fontFace);
  }
  mimeType() {
    return "text";
  }
  autoFitText(t) {
    if (this.div && this.div.textContent) {
      let e = this.div, i = 1, n = function(_) {
        e.style.fontSize = _ + "em";
      };
      n(i);
      let s = this.div.getBoundingClientRect(), o = s.width / this.div.offsetWidth, a = s.height / this.div.offsetHeight, u = parseInt(`${G.getProperty(this.div, "padding", "px")}`) || 0, l = parseInt(`${G.getProperty(this.div, "border-width", "px")}`) || 0, f = u * 1.99 * o + l * 1.99 * o, c = u * 1.99 * a + l * 1.99 * a, p = t && t.min || Ao.min, h = t && t.max || Ao.max;
      for (; p <= h; ) {
        let _ = (p + h) / 2;
        n(_);
        let m = e.getBoundingClientRect();
        s.height - c >= m.height && s.width - f >= m.width ? (p = _ + 0.01, i = _) : h = _ - 0.01;
      }
      n(i);
    }
  }
};
yr(qr, "animationPresets", bf);
function ko(r15) {
  let t = document.createElement("div");
  return t.innerHTML = r15.trim(), Array.prototype.slice.call(t.children);
}
function yf(r15, t) {
  if (t) {
    let e = [], i = r15.innerHTML.split(" ").map((n, s, o) => vf(n, e, s === o.length - 1));
    return r15.replaceChildren(...i), { words: i, chars: e };
  } else {
    let e = r15.innerHTML.split(" ").map((n) => `<div style="display: inline-block; text-align: start; position: relative;">${n}</div>`).join('<div style="display: inline-block; text-align: start; position: relative;">&nbsp;</div>'), i = ko(e);
    return r15.replaceChildren(...i), { words: i };
  }
}
function vf(r15, t, e) {
  let i = document.createElement("div");
  i.style.display = "inline-block", i.style.textAlign = "start", i.style.position = "relative";
  let n = ko(r15.split("").map((s) => `<div style="display: inline-block; text-align: start; position: relative;">${s}</div>`).join(""));
  if (!e) {
    let s = document.createElement("div");
    s.style.display = "inline-block", s.style.textAlign = "start", s.style.position = "relative", s.innerHTML = "&nbsp;", n.push(s);
  }
  return i.replaceChildren(...n), t.push.apply(t, n), i;
}
var Qi = class extends ht {
  constructor(t) {
    super();
    __publicField(this, "video");
    __publicField(this, "src");
    __publicField(this, "_volume");
    __publicField(this, "_duration", 0);
    __publicField(this, "loading$");
    __publicField(this, "offset", 0);
    this.src = t.src, this._volume = t.volume;
  }
  show(t, e) {
    return this.load(t).pipe(ve(() => {
      this.offset = e, this.video && (this.video.currentTime = e / 1e3);
    }));
  }
  load(t) {
    if (this.loading$)
      return this.loading$;
    let e = this.video = document.createElement("video");
    return e.style.width = "100%", e.style.height = "100%", e.src = this.src, t.appendChild(e), typeof this._volume < "u" && this.volume(this._volume), e.readyState < 4 ? (e.load(), this.loading$ = ae(e, "canplaythrough").pipe(re(1), X((i) => "loaded"))) : this.loading$ = I("loaded"), this.loading$.pipe(ie());
  }
  unload() {
    var _a2;
    console.log(`Unloading video ${this.src}`), this.video && ((_a2 = this.video.parentElement) == null ? void 0 : _a2.removeChild(this.video), this.video = void 0, this.loading$ = void 0);
  }
  play(t) {
    if (!this.loading$)
      throw new Error("Cannot play video before it is loaded");
    return this.loading$.pipe(pt(() => {
      if (this.video) {
        let e = this.video, i = e.play();
        return i && i.catch((n) => {
          console.log(`Video play error: ${n}`);
        }), ae(e, "playing").pipe(re(1), pt(() => si(new C((n) => () => {
          e.pause();
        }), super.play(t))));
      }
      return super.play(t);
    }));
  }
  stop() {
    var _a2;
    (_a2 = this.video) == null ? void 0 : _a2.pause();
  }
  seek(t) {
    return this.offset = t, this.video && this.video.readyState >= 1 ? (this.video.currentTime = t / 1e3, ae(this.video, "seeked").pipe(re(1), sn(250), X((e) => [t, 0]))) : I([t, 0]);
  }
  volume(t) {
    this.video && (this._volume = this.video.volume = t);
  }
  duration() {
    if (this._duration)
      return I(this._duration);
    let t = this.video;
    return t || (t = document.createElement("video"), t.preload = "metadata", t.src = this.src), ae(t, "loadedmetadata").pipe(re(1), X((e) => {
      var _a2;
      return t && (this._duration = ((_a2 = t == null ? void 0 : t.duration) != null ? _a2 : 0) * 1e3, t.src = ""), this._duration;
    }));
  }
  mimeType() {
    return "video/mpeg4";
  }
};
var an = ((u) => (u[u.NotReady = 0] = "NotReady", u[u.Loading = 1] = "Loading", u[u.Ready = 2] = "Ready", u[u.Starting = 3] = "Starting", u[u.Playing = 4] = "Playing", u[u.Stopping = 5] = "Stopping", u[u.Stopped = 6] = "Stopped", u[u.Seeking = 7] = "Seeking", u))(an || {});
var Lo = qe(cr(), 1);
var _r = class extends Lo.EventEmitter {
  constructor(t, e) {
    super();
    __publicField(this, "id", "");
    __publicField(this, "widgetId", "");
    __publicField(this, "opacity", "1");
    __publicField(this, "rotation", 0);
    __publicField(this, "zIndex", 0);
    __publicField(this, "el");
    __publicField(this, "status", 0);
    __publicField(this, "offset", 0);
    __publicField(this, "transition");
    __publicField(this, "slack", 0);
    __publicField(this, "widget");
    __publicField(this, "config");
    __publicField(this, "proxyOffset");
    __publicField(this, "_duration", 0);
    this.name = t;
    this._duration = (e == null ? void 0 : e.duration) || 0, this.slack = (e == null ? void 0 : e.slack) || 0, this.widget = e == null ? void 0 : e.widget, this.transition = e == null ? void 0 : e.transition, this.el = document.createElement("div");
    let { style: i, dataset: n } = this.el;
    (e == null ? void 0 : e.css) && Jr(this.el, e.css), i.position = "absolute", i.width = "100%", i.height = "100%", i.display = "flex", i.justifyContent = "center", i.alignItems = "center", n.layer = this.name, this.proxyOffset = (s) => this.emit("offset", s);
  }
  static async fromJSON(t) {
    let e = await ht.fromJSON(t.widget);
    return new _r(t.name, { duration: t.duration, slack: t.slack, transition: t.transition && await uo(t.transition), css: t.css, widget: e });
  }
  toggleDebug() {
    var _a2;
    (_a2 = this.widget) == null ? void 0 : _a2.toggleDebug();
  }
  unload() {
    var _a2, _b;
    return (_a2 = this.widget) == null ? void 0 : _a2.seek(0), (_b = this.widget) == null ? void 0 : _b.unload();
  }
  toJSON() {
    return { id: this.id, widgetId: this.widgetId };
  }
  play(t) {
    if (!this.widget)
      throw new Error("Layer: missing widget");
    console.log(`Start playing layer: ${this.name}`);
    let e = t.pipe(Ye(), Ki(() => I(void 0)), X(() => "end"));
    return this.widget.play(t).pipe(rn(e));
  }
  async stop() {
    var _a2;
    return (_a2 = this.widget) == null ? void 0 : _a2.stop();
  }
  seek(t) {
    return this.offset = t, this.widget ? this.widget.seek(t) : I([t, 0]);
  }
  show(t) {
    return this.widget ? this.widget.show(this.el, t) : I("shown");
  }
  async hide() {
  }
  duration() {
    var _a2;
    let t = ((_a2 = this.transition) == null ? void 0 : _a2.duration) || 0;
    return this._duration ? I(this._duration + t) : this.widget ? this.widget.duration().pipe(X((e) => e + this.slack + t)) : I(this.slack);
  }
};
var Ro = qe(cr(), 1);
var gf = 50, oi = class extends Ro.default {
  constructor(t, e) {
    super();
    __publicField(this, "timerSubscription");
    __publicField(this, "playing");
    this.playlist = t;
    this.renderer = e;
  }
  show() {
  }
  toggleDebug() {
    this.renderer.toggleDebug(), this.playlist.toggleDebug();
  }
  play(t = { loop: false }) {
    this.stop();
    let e = this.playlist.seek(this.playlist.time || 0).pipe(Ve(), ee(([i, n]) => {
      let s = i;
      return wf(this.playlist.time || 0, gf, n).pipe(ve((o) => {
        o < s && this.emit("end"), s = o;
      }), He(() => console.log("Timer completed!")));
    }), ie());
    this.timerSubscription = e.subscribe({ next: (i) => this.emit("time", i), error: (i) => {
      console.log("Timer error", i);
    } }), this.playing = this.playlist.play(this.renderer, e, { loop: t == null ? void 0 : t.loop }).pipe(He(() => {
      var _a2;
      (_a2 = this.timerSubscription) == null ? void 0 : _a2.unsubscribe(), console.log("DONE PLAYING");
    })).subscribe({ error: (i) => {
      console.log("Playing error", i);
    }, complete: () => {
      var _a2;
      (_a2 = this.timerSubscription) == null ? void 0 : _a2.unsubscribe(), this.emit("completed");
    } });
  }
  stop() {
    var _a2, _b;
    (_a2 = this.timerSubscription) == null ? void 0 : _a2.unsubscribe(), (_b = this.playing) == null ? void 0 : _b.unsubscribe(), this.timerSubscription = void 0, this.playing = void 0;
  }
};
function wf(r15, t, e) {
  return new C((i) => {
    let n = Date.now(), s = 0, o = r15, a = () => {
      i.next(o), o = (o + t) % e, n = n + t;
      let u = n - Date.now();
      s = setTimeout(a, t + u);
    };
    return a(), () => {
      clearTimeout(s);
    };
  });
}
var Io = qe(cr(), 1);
var dr = class extends Io.EventEmitter {
  constructor(t) {
    super();
    __publicField(this, "layers", []);
    __publicField(this, "time", 0);
    __publicField(this, "status", 0);
    __publicField(this, "debugLayer");
    this.name = t;
  }
  static async fromJSON(t) {
    let e = new dr(t.name);
    for (let i = 0; i < t.layers.length; i++) {
      let n = await _r.fromJSON(t.layers[i]);
      e.add(n);
    }
    return e;
  }
  play(t, e, i) {
    return this.playLayers(t, e, i || {});
  }
  toggleDebug() {
    this.layers.map((t) => t.toggleDebug());
  }
  getLayersWithOffsets() {
    let t = Je(...this.layers.map((i) => i.duration())), e = 0;
    return t.pipe(Ge((i, n, s) => {
      let o = e;
      e += n;
      let a = { start: o, end: e, duration: n, layer: this.layers[s] };
      return i.push(a), i;
    }, []));
  }
  playLayers(t, e, { loop: i = false }) {
    let n = this.getLayersWithOffsets();
    return this.findLayer(this.time, n).pipe(Ve(), ee((o) => {
      if (o) {
        let { layer: a, offset: u, index: l, layersWithOffsets: f } = o, c = 1, p = i ? f.slice(l).concat(f.slice(0, l)) : f.slice(l), _ = f.reduce((b, w) => b + w.duration, 0), m = e.pipe(X((b) => b % _), ve((b) => {
          this.time = b;
        }), ie()), d = mt(p).pipe(ee((b) => {
          let w = c ? u : 0;
          return c = 0, this.playLayer(t, m, b.layer, w, b.start, b.end);
        }));
        return i ? d.pipe(en()) : d;
      } else
        return I("end");
    }));
  }
  playLayer(t, e, i, n, s, o) {
    return t.play(i, e.pipe(nn((u) => u >= s && u < o), X((u) => u - s), ie()), n, 100);
  }
  seek(t) {
    return this.duration().pipe(pt((e) => (t = t % (e + 1), this.time = t, this.findLayer(t, this.getLayersWithOffsets()).pipe(pt((i) => {
      let n = [t, e];
      if (i) {
        let { layer: s, offset: o = 0 } = i;
        return s.seek(o).pipe(pt(() => (n = [t, e], I(n))));
      }
      return I(n);
    })))));
  }
  show(t) {
    return this.findLayer(this.time, this.getLayersWithOffsets()).pipe(pt((e) => {
      if (e) {
        let { layer: i, offset: n = 0 } = e;
        return t.show(i, n);
      }
      return I("end");
    }));
  }
  unload() {
    this.layers.forEach((t) => t.unload());
  }
  findLayer(t, e) {
    return e.pipe(Ve(), X((i) => {
      for (let n = 0; n < i.length; n++) {
        let s = i[n];
        if (t >= s.start && t < s.end)
          return { index: n, offset: t - s.start, duration: s.duration, layer: s.layer, layersWithOffsets: i };
      }
    }));
  }
  duration() {
    return Ce(...this.layers.map((e) => e.duration())).pipe(Ge((e, i) => e + i, 0));
  }
  get position() {
    return this.time;
  }
  add(t, e) {
    return e ? this.layers.splice(e, 0, t) : this.layers.push(t), this;
  }
};
var Qe = class {
  constructor(t) {
    __publicField(this, "el");
    __publicField(this, "volume", 0);
    __publicField(this, "currentLayer");
    __publicField(this, "loadingLayer$");
    __publicField(this, "debugLayer");
    this.el = t;
  }
  toggleDebug() {
    this.debugLayer ? (this.el.removeChild(this.debugLayer), delete this.debugLayer) : (this.debugLayer = document.createElement("div"), this.debugLayer.style.position = "absolute", this.debugLayer.style.left = "0", this.debugLayer.style.top = "0", this.debugLayer.style.width = "100%", this.debugLayer.style.height = "100%", this.debugLayer.style.zIndex = "10000", this.debugLayer.style.color = "white", this.debugLayer.style.fontSize = "1.5em", this.el.appendChild(this.debugLayer));
  }
  updateDebug(t) {
    this.debugLayer && (this.debugLayer.innerHTML = `
      <div style="position: absolute; bottom: 0;background: rgba(0,0,0,0.5); text-align: center;">
        ${t}
      </div>`);
  }
  show(t, e) {
    let i = this.currentLayer;
    return t.seek(e).pipe(pt(() => {
      if (this.updateDebug(t.name), i)
        if (i !== t)
          i.el.style.zIndex = "1000";
        else
          return t.show(e);
      let n = t.el.style.display;
      return t.el.style.zIndex = "0", this.el.appendChild(t.el), this.currentLayer = t, this.loadingLayer$ = t.show(e).pipe(ee(() => this.performTransition(t, i)), He(() => {
        var _a2;
        i && (i.unload(), (_a2 = i.el.parentElement) == null ? void 0 : _a2.removeChild(i.el)), t.el.style.display = n;
      })), this.loadingLayer$;
    }));
  }
  performTransition(t, e) {
    var _a2;
    return e ? t.transition ? (_a2 = t.transition) == null ? void 0 : _a2.run(e, t) : (t.el.style.opacity = "1", I("transition:end")) : I("end");
  }
  play(t, e, i, n) {
    return this.show(t, i).pipe(pt(() => t.play(e)));
  }
  seek(t) {
    var _a2;
    return (_a2 = this.currentLayer) == null ? void 0 : _a2.seek(t);
  }
  async clean() {
    var _a2;
    (_a2 = this.el.parentElement) == null ? void 0 : _a2.removeChild(this.el);
  }
};
/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Logo = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4MDAgNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MDkuNDI5IiB4Mj0iNDA5LjQyODkiIHkxPSIyMC43MzczIiB5Mj0iOTIxLjkwNTMiPjxzdG9wIG9mZnNldD0iMCIvPjxzdG9wIG9mZnNldD0iLjUzOTQiIHN0b3AtY29sb3I9IiMxYTFhMWEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMzMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDFiZWU1Ii8+PHN0b3Agb2Zmc2V0PSIuMjg0OCIgc3RvcC1jb2xvcj0iIzA2OThkOCIvPjxzdG9wIG9mZnNldD0iLjY5NyIgc3RvcC1jb2xvcj0iIzAxNmVkMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEyM2ZiNSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQ5NC42NTg0IiB4Mj0iNDk0LjY1ODQiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MjUiIHkyPSI0MDcuMDA3MSIvPjxjbGlwUGF0aCBpZD0iZCI+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIvPjwvY2xpcFBhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMxNy4yMjkyIiB4Mj0iMzE3LjIyOTIiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MTUiIHkyPSI0MDcuMDAzOSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNTUuOTk5OCIgeDI9IjM1NS45OTk4IiB4bGluazpocmVmPSIjYiIgeTE9IjI3Mi41ODE1IiB5Mj0iNDA3LjAwODUiLz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTguMzU5OSA2MjQuMDU0NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzkzLjAxOTMiIHgyPSIzOTMuMDE5MyIgeGxpbms6aHJlZj0iI2IiIHkxPSIyNzIuNTgwNiIgeTI9IjQwNy4wMDk5Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJoIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQyMS43MzY2IiB4Mj0iNDIxLjczNjYiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MDYiIHkyPSI0MDcuMDA5Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJpIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQ2MC43NTQyIiB4Mj0iNDYwLjc1NDIiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MTUiIHkyPSI0MDcuMDA4NSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iaiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OTQuNjU4NCIgeDI9IjQ5NC42NTg0IiB4bGluazpocmVmPSIjYiIgeTE9IjI3Mi41ODE1IiB5Mj0iNDA3LjAwNyIvPjxsaW5lYXJHcmFkaWVudCBpZD0iayIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1MDkuNzM2NiIgeDI9IjUwOS43MzY2IiB4bGluazpocmVmPSIjYiIgeTE9IjI3Mi41ODE1IiB5Mj0iNDA3LjAwMzkiLz48bGluZWFyR3JhZGllbnQgaWQ9ImwiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTguMzU5OSA2MjQuMDU0NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNTI0LjcxNyIgeDI9IjUyNC43MTciIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MTUiIHkyPSI0MDcuMDAzOSIvPjxjbGlwUGF0aCBpZD0ibSI+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIvPjwvY2xpcFBhdGg+PG1hc2sgaWQ9Im4iIGhlaWdodD0iNDMuNzY4IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMjMwLjMwNiIgeD0iMjkwLjQ1MyIgeT0iMzAzLjM2NCI+PGcgY2xpcC1wYXRoPSJ1cmwoI28pIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3Ij48aW1hZ2UgaGVpZ2h0PSI1OCIgb3ZlcmZsb3c9InZpc2libGUiIHRyYW5zZm9ybT0ibWF0cml4KC44NjE1IDAgMCAuODQxMSAyODcuOTk5MyAzMDAuODcwMSkiIHdpZHRoPSIyNzMiIHhsaW5rOmhyZWY9IkJDQjExRUMuanBlZyIvPjwvZz48L21hc2s+PGNsaXBQYXRoIGlkPSJvIiBjbGlwLXBhdGg9InVybCgjbSkiPjxwYXRoIGQ9Im00OTAuNjA3IDMxMC45MzljMCAuNTM1LS40NC45NzYtLjk3OC45NzZoLTYuNjYxYy0uNTM3IDAtLjk3OS0uNDQtLjk3OS0uOTc2di01LjcyNmMwLS41MzcuNDQtLjk3OC45NzktLjk3OGg2LjY2MWMuNTM2IDAgLjk3OC40MzkuOTc4Ljk3OHoiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0icCI+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIvPjwvY2xpcFBhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQ5NC42NTg0IiB4Mj0iNDk0LjY1ODQiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MDYiIHkyPSI0MDcuMDA3OCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iciI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDFiZWU1Ii8+PHN0b3Agb2Zmc2V0PSIuMjg0OCIgc3RvcC1jb2xvcj0iIzA2OThkOCIvPjxzdG9wIG9mZnNldD0iLjY5NyIgc3RvcC1jb2xvcj0iIzAxNmVkMiIvPjxzdG9wIG9mZnNldD0iLjkyMTIiIHN0b3AtY29sb3I9IiMxMjNmYjUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MTMuODI0NSIgeDI9IjY0My41OTU2IiB4bGluazpocmVmPSIjciIgeTE9IjI2Mi4xNTYyIiB5Mj0iMzI2LjM3MTgiLz48bGluZWFyR3JhZGllbnQgaWQ9InQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTguMzU5OSA2MjQuMDU0NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDA2LjQwMjYiIHgyPSI2MzcuNzkzOSIgeGxpbms6aHJlZj0iI3IiIHkxPSIyNzkuNDQyOSIgeTI9IjM0NC4xMTEyIi8+PGxpbmVhckdyYWRpZW50IGlkPSJ1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC45NjMyIC0uMjY4OSAtLjI2ODkgLS45NjMyIDExMy40MjggNzAwLjgwMzgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIzMi4wMSIgeDI9IjIzMi4wMSIgeGxpbms6aHJlZj0iI2IiIHkxPSIzMzguMjE3OCIgeTI9IjM4Ny44NzY5Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJ2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC45NjMyIC0uMjY4OSAtLjI2ODkgLS45NjMyIDExMy40MjggNzAwLjgwMzgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIzMS44NzI4IiB4Mj0iMjMxLjg3MjgiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMzE4LjAzMjIiIHkyPSIzNjUuNjM1NSIvPjxsaW5lYXJHcmFkaWVudCBpZD0idyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguOTYzMiAtLjI2ODkgLS4yNjg5IC0uOTYzMiAxMTMuNDI4IDcwMC44MDM4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMTEuMTc5IiB4Mj0iMjExLjE3OSIgeGxpbms6aHJlZj0iI2IiIHkxPSIzMTguNjYyMSIgeTI9IjM2NC45ODQ5Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJ4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC45NjMyIC0uMjY4OSAtLjI2ODkgLS45NjMyIDExMy40MjggNzAwLjgwMzgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIxMS4wNDE3IiB4Mj0iMjExLjA0MTciIHhsaW5rOmhyZWY9IiNiIiB5MT0iMzM4LjU2NTQiIHkyPSIzODYuOTQ4NCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ieSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguOTYzMiAtLjI2ODkgLS4yNjg5IC0uOTYzMiAxMTMuNDI4IDcwMC44MDM4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMjMuNTAxNyIgeDI9IjIxNy4yOTI2IiB4bGluazpocmVmPSIjciIgeTE9IjMwMi45NTYxIiB5Mj0iNDM0Ljg5MzUiLz48bGluZWFyR3JhZGllbnQgaWQ9InoiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTguMzU5OSA2MjQuMDU0NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjgwLjU5MTYiIHgyPSIzMzUuMTY3NyIgeGxpbms6aHJlZj0iI3IiIHkxPSIzNTIuNTY4NCIgeTI9IjM1Mi41Njg0Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJBIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMyNS44MTMyIiB4Mj0iNDEzLjY3NDEiIHhsaW5rOmhyZWY9IiNyIiB5MT0iMzQyLjIyNjYiIHkyPSIzNDIuMjI2NiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iQiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MjAuMTI3MiIgeDI9IjY0OC42MjE4IiB4bGluazpocmVmPSIjciIgeTE9IjI0Ny40NTA3IiB5Mj0iMzExLjMwOTQiLz48cGF0aCBkPSJtMCAwaDgwMi4xMzh2NjAyLjAyN2gtODAyLjEzOHoiIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsPSIjZTZlNmU2Ij48cGF0aCBkPSJtMzI2LjUzMSAzNDguMzRoLTE5LjM4NWMtMS45NjQgMC0zLjkwOS0uMjctNS44MzEtLjgxNC0zLjcyMi0xLjEyNy02LjY3MS0zLjcxNy04Ljg0Ni03Ljc2OC0xLjk2Ni0zLjY3My0yLjk0OS03Ljk1MS0yLjk0OS0xMi44NDIgMC00LjcxOS44NzktOC44OTUgMi42MzUtMTIuNTI1IDEuOTIzLTQuMDExIDQuNjYyLTYuNzQ0IDguMjE5LTguMjA3IDIuNzU4LTEuMTI3IDUuNTgzLTEuNjg4IDguNDY5LTEuNjg4aDE3LjU2MnY4LjQwN2gtMTguMjUzYy0yLjk3IDAtNS4xMjMgMS42MDYtNi40NjEgNC44MjYtMS4wNDQgMi41MS0xLjU2NiA1Ljc5MS0xLjU2NiA5Ljg0OSAwIDMuNDI5LjY2OCA2LjMzNyAyLjAwNyA4LjcxOCAxLjU0NyAyLjgwNSAzLjcyMyA0LjIwNCA2LjUyMSA0LjIwNGgxNy44Nzh6Ii8+PHBhdGggZD0ibTM2My40NzkgMzQ4LjM0aC0yMy40NjFjLTIuNjMzIDAtNC44ODUtLjg4NS02Ljc0NC0yLjY1NnMtMi43OTItNC4wMTMtMi43OTItNi43MjJjMC0yLjgzNi44NDctNS4xNzkgMi41MzUtNy4wMzQgMS42OS0xLjg1MyAzLjgwNi0yLjc4NSA2LjM0OS0yLjc4NWgxNS4xNDN2LTEuNzUyYzAtLjU0NS0uMDk1LTEuMDE2LS4yODEtMS40MTQtLjE4Ni0uMzk2LS40ODktLjg2Ny0uOTA4LTEuNDA4LS41ODQtLjY3LTEuMTg2LTEuMS0xLjgxMy0xLjI5MS0uNjIzLS4xODctMS40OTgtLjI3Ni0yLjYyNy0uMjc2aC0xNi4ydi03LjE1MWgxMy45MjYgMi42OThjMy4wNTIgMCA1LjMyOS4yNjIgNi44MzYuNzgxIDEuNTA2LjUyMyAyLjgwMSAxLjMwNSAzLjg5MSAyLjM0NiAxLjM3OSAxLjM4MSAyLjI5OSAyLjg4NSAyLjc1OCA0LjUxLjQ2NCAxLjYyOC42OTIgMy43MTYuNjkyIDYuMjZ2MTguNTk0aC0uMDAyem0tOC45NzEtNi42NDl2LTYuMzM2aC0xMS4wNDFjLTEuMDQ1IDAtMS45MzYuMjk5LTIuNjY3LjktLjczLjYwMi0xLjA5NiAxLjM5Ni0xLjA5NiAyLjM5MyAwIC44NjkuMzU0IDEuNTk0IDEuMDYzIDIuMTcyLjcxMy41ODIgMS41MjguODcxIDIuNDQ4Ljg3MXoiLz48cGF0aCBkPSJtMzk5Ljk4NCAzMzguNDI2YzAgMi43NjQtLjg4NyA1LjEyNi0yLjY2NCA3LjA5Mi0xLjc4IDEuOTY3LTQuMDI1IDIuOTQ5LTYuNzQ2IDIuOTQ5aC0yMS41MTR2LTUuODk4aDE3LjY0YzEuMjQ5IDAgMi4zMDMtLjMxMiAzLjE1OS0uOTM4Ljg1NC0uNjMgMS4yNzktMS41MjkgMS4yNzktMi42OTkgMC0yLjcxOS0xLjgzNi00LjA3OC01LjUwMi00LjA3OGgtOS4wMDljLTEuOTIgMC0zLjc3My0uOTE2LTUuNTY2LTIuNzYxLTEuNzkzLTEuODM5LTIuNjk1LTMuODI1LTIuNjk1LTUuOTU2IDAtMy4wMTEuNjcyLTUuNDM4IDIuMDEzLTcuMjc1IDEuNTQ4LTIuMDkyIDMuODI0LTMuMTQxIDYuODM3LTMuMTQxaDIwLjY5N3Y2LjE0OGgtMTguNDRjLS43MDggMC0xLjMyOS4zNDYtMS44NDggMS4wMzUtLjUyNC42OTEtLjc4MiAxLjQ3My0uNzgyIDIuMzU0IDAgLjk2MS4zNDMgMS43ODYgMS4wMzIgMi40NzkuNjg4LjY4OCAxLjUxNiAxLjAzNCAyLjQ3OSAxLjAzNGg5LjcyNGMzLjA0OSAwIDUuNDY0LjkwOCA3LjI0NCAyLjcyOCAxLjc3NiAxLjgxOSAyLjY2MiA0LjEyOSAyLjY2MiA2LjkyN3oiLz48cGF0aCBkPSJtNDI0LjMyMSAzMjIuNjIxaC04LjQ2NHYxNC43NDNjMCAxLjMzOC40NTUgMi40NDYgMS4zNzcgMy4zMjMgMS4wNDUuODc3IDIuNDI0IDEuMzE2IDQuMTQxIDEuMzE2aDIuNTczdjYuMzM1aC04LjA5MWMtMi40MjkgMC00LjQ5OS0uODgxLTYuMjEzLTIuNjM1LTEuMDAzLTEuMDQ2LTEuNjUtMi4xOTMtMS45NDUtMy40NS0uMjktMS4yNTUtLjQzOC0yLjczNi0uNDM4LTQuNDUzdi0xNS4xOGgtNS41MjF2LTYuNzcyaDUuNTIxdi0xMS4zNTRoOC41OTZ2MTEuMzU0aDguNDY0eiIvPjxwYXRoIGQ9Im00NzUuNTczIDM0OC4zNGgtOC40NzJ2LTIwLjMzNmMwLS43OTEtLjA4MS0xLjQxNS0uMjUtMS44NzQtLjE2OC0uNDYtLjUwMS0uOTUtMS4wMDUtMS40NzYtLjQ5OC0uNTIxLTEuMDAyLS44OTUtMS41MDYtMS4xMjUtLjQ5OS0uMjI1LTEuMDgzLS4zNDItMS43NTQtLjM0MmgtNi4yMDl2MjUuMTUxaC04LjU5NnYtMjUuMzM4aC0xMC4wMzl2MjUuMzRoLTguODQ1di0zMi40OTJoMzQuODE3YzIuMTc0IDAgMy44ODguMTk4IDUuMTQ0LjU5OCAxLjI1NC4zOTUgMi40ODYgMS4yMzggMy42OTkgMi41MzEuOTYzIDEuMDQ1IDEuNzAxIDIuMDY2IDIuMjI5IDMuMDY3LjUyIDEuMDA0Ljc4NCAyLjA4OC43ODQgMy4yNTR2MjMuMDQyeiIvPjxwYXRoIGQ9Im00ODEuOTcgMzE1LjgwM2g4LjY1OXYzMi40OTFoLTguNjU5eiIvPjwvZz48cGF0aCBkPSJtNDkwLjYwNyAzMTAuOTM5YzAgLjUzNS0uNDQuOTc2LS45NzguOTc2aC02LjY2MWMtLjUzNyAwLS45NzktLjQ0LS45NzktLjk3NnYtNS43MjZjMC0uNTM3LjQ0LS45NzguOTc5LS45NzhoNi42NjFjLjUzNiAwIC45NzguNDM5Ljk3OC45Nzh6IiBmaWxsPSJ1cmwoI2MpIi8+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIgZmlsbD0idXJsKCNjKSIvPjxnIGNsaXAtcGF0aD0idXJsKCNkKSI+PHBhdGggZD0ibTMyNy4yODYgMzQ2LjAyOWMwIC41MzctLjQzOC45NzYtLjk3Ni45NzZoLTE3LjMzOWMtLjUzNyAwLTEuNDE1LS4wMy0xLjk1MS0uMDY5IDAgMC0yLjkxNi0uMTk5LTQuODMtLjc0Mi0zLjcwNi0xLjEyMS02LjYzOC0zLjY5OS04LjgwNS03LjcyOC0xLjk1Ny0zLjY1Ny0yLjkzMy03LjkxOS0yLjkzMy0xMi43ODIgMC00LjY5NS44NzQtOC44NTIgMi42MjEtMTIuNDcgMS45MTMtMy45ODUgNC42MzktNi43MSA4LjE3OS04LjE2NyAyLjc0Ni0xLjEyMiA1LjU1Ni0xLjY4MiA4LjQyNy0xLjY4MmgxNi41MDRjLjUzNyAwIC45NzYuNDM4Ljk3Ni45NzZ2Ni40MTZjMCAuNTM1LS40MzguOTc2LS45NzYuOTc2aC0xNi4yMTNjLS41MzYgMC0xLjM5Ni4xMzEtMS45MDcuMjkzIDAgMC00LjE2NyAxLjMwNi01LjUwMSA0LjUxNS0xLjAzOSAyLjQ5Ni0xLjU2MSA1Ljc2My0xLjU2MSA5LjgwMSAwIDMuNDE0LjY2NiA2LjMxIDEuOTk4IDguNjc3IDEuNTQgMi43OTEgMy43MDUgNC4xODIgNi40OTIgNC4xODJoMTYuODE3Yy41MzcgMCAuOTc2LjQzOS45NzYuOTc4eiIgZmlsbD0idXJsKCNlKSIvPjxwYXRoIGQ9Im0zNjQuMDYxIDM0Ni4wMjljMCAuNTM3LS40MzkuOTc2LS45NzcuOTc2aC0yMS4zOThjLS41MzcgMC0xLjQwOC0uMDc4LTEuOTM4LS4xNzMgMCAwLTMuODk5LS43MDgtNS43NS0yLjQ3MS0xLjg1Mi0xLjc2NC0yLjc3OC0zLjk5Mi0yLjc3OC02LjY4OSAwLTIuODIyLjg0MS01LjE1NiAyLjUyMS03LjAwMyAxLjY4My0xLjg0NiAzLjc4OS0yLjc2OSA2LjMxNy0yLjc2OWgxNC4wOTZjLjUzNyAwIC45NzctLjM5NC45NzctLjg3MyAwLS40OC0uMDQtMS4zMTMtLjA5My0xLjg0NiAwIDAtLjAwMS0uMDM1LS4xODctLjQzNS0uMTg3LS4zOTYtLjQ4OC0uODY1LS45MDctMS40MDUtLjU3OS0uNjY2LTEuMTgtMS4wOTEtMS44MDQtMS4yODEtLjYyMS0uMTg3LTEuNDkyLS4yNzgtMi42MTQtLjI3OGgtMTUuMTQ2Yy0uNTM3IDAtLjk3OC0uNDM4LS45NzgtLjk3NnYtNS4xNjhjMC0uNTM3LjQ0LS45NzguOTc4LS45NzhoMTEuOTA2IDEuOTUzLjczMmMuNTM1IDAgMS40MTQuMDIyIDEuOTUxLjA1IDAgMCA0LjMyOC4yMTggNS44MjYuNzI5IDEuNS41MjMgMi43ODggMS4zMDMgMy44NzIgMi4zNCAxLjM3MyAxLjM3MSAyLjI5IDIuODY5IDIuNzQ3IDQuNDkyLjQ1OSAxLjYxNy42ODggMy42OS42ODggNi4yMjZ2MTcuNTMyem0tOS45MDUtNS42NDNjLjUzNyAwIC45NzctLjQ0Ljk3Ny0uOTc4di00LjM1YzAtLjUzNy0uNDM4LS45NzctLjk3Ny0uOTc3aC05LjAzOGMtLjUzNiAwLTEuNDEuMDY0LTEuOTM5LjE0OCAwIDAtLjk2LjE0Ni0xLjY4OS43NDgtLjcyNy41OTktMS4wOSAxLjM4OS0xLjA5IDIuMzc5IDAgLjg2NS4zNTMgMS41ODggMS4wNTkgMi4xNjQuNzA5LjU3OCAxLjUyMS44NjIgMi40MzcuODYyaDEwLjI2MnYuMDA0eiIgZmlsbD0idXJsKCNmKSIvPjxwYXRoIGQ9Im00MDAuMzk1IDMzNy4xNDFjMCAyLjc0OC0uODg0IDUuMDk2LTIuNjU1IDcuMDU5LTEuNzcgMS45NTMtNC4wMDYgMi45MzMtNi43MTMgMi45MzNoLTIwLjQzNGMtLjUzOCAwLS45NzktLjQ0LS45NzktLjk3N3YtMy45MTljMC0uNTM2LjQzOS0uOTc1Ljk3OS0uOTc1aDE1LjYwMmMuNTM2IDAgMS40MTItLjA2MiAxLjk0NS0uMTM0IDAgMCAxLjMyNC0uMTggMi4xNzUtLjgwMS44NTEtLjYyNiAxLjI3Ni0xLjUyMSAxLjI3Ni0yLjY4NyAwLTIuNzA1LTEuODMtNC4wNTgtNS40NzktNC4wNThoLTcuOTljLS41MzYgMC0xLjQwMi0uMTA0LTEuOTI1LS4yMzEgMCAwLTIuODA3LS42ODgtNC41OTItMi41MTktMS43ODUtMS44MzItMi42ODEtMy44MDgtMi42ODEtNS45MzMgMC0yLjk5Ni42NjctNS40MDcgMS45OTgtNy4yMzggMS41NDItMi4wODIgMy44MDgtMy4xMjYgNi44MDctMy4xMjZoMTkuNjI0Yy41MzYgMCAuOTc3LjQ0Mi45NzcuOTc4djQuMTY4YzAgLjUzNy0uNDM5Ljk3Ni0uOTc3Ljk3NmgtMTYuNDAxYy0uNTM2IDAtMS4zOTkuMTEtMS45MjIuMjQzIDAgMC0uMzc4LjEwMS0uODkyLjc4Ny0uNTIzLjY4OC0uNzggMS40Ny0uNzggMi4zNDYgMCAuOTUzLjM0MSAxLjc3MSAxLjAyOCAyLjQ2NC42ODYuNjg3IDEuNTA2IDEuMDMgMi40NjYgMS4wM2g4LjcwMWMuNTM2IDAgMS40MDguMDcyIDEuOTM4LjE2IDAgMCA0LjQ3Ny43NDIgNi4yNDUgMi41NTEgMS43NzUgMS44MTcgMi42NTkgNC4xMTYgMi42NTkgNi45MDN6IiBmaWxsPSJ1cmwoI2cpIi8+PHBhdGggZD0ibTQyNC42MTQgMzIwLjQzMmMwIC41MzUtLjQzOC45NzctLjk3Ny45NzdoLTYuNDc2Yy0uNTM2IDAtLjk3Ni40MzktLjk3Ni45NzZ2MTIuNzI0YzAgLjUzNS4wODEgMS40MDguMTggMS45MzUgMCAwIC4yNzcgMS40NzQgMS4xOTQgMi4zNDcgMS4wMzkuODc1IDIuNDExIDEuMzEyIDQuMTIxIDEuMzEyaDEuNTgzYy41MzUgMCAuOTc2LjQ0Ljk3Ni45Nzh2NC4zNTRjMCAuNTM2LS40MzkuOTc2LS45NzYuOTc2aC02LjEwNGMtLjUzNyAwLTEuNDA2LS4wODQtMS45MzQtLjE4OCAwIDAtMy41MTctLjY4OC01LjIyMS0yLjQzOC0uOTk5LTEuMDQxLTEuNjQ2LTIuMTg1LTEuOTM4LTMuNDMzLS4yOS0xLjI0Ny0uNDM1LTIuNzI2LS40MzUtNC40MzV2LTE0LjEzMmMwLS41MzQtLjQ0LS45NzYtLjk3OS0uOTc2aC0zLjU0MmMtLjUzNyAwLS45NzUtLjQ0LS45NzUtLjk3N3YtNC43OTNjMC0uNTM1LjQzOC0uOTc3Ljk3NS0uOTc3aDMuNTQyYy41MzcgMCAuOTc5LS40MzguOTc5LS45Nzd2LTkuMzQ2YzAtLjUzOC40MzgtLjk3Ni45NzUtLjk3Nmg2LjYwMmMuNTM2IDAgLjk3Ny40MzguOTc3Ljk3NnY5LjM0NmMwIC41MzcuNDM4Ljk3Ny45NzYuOTc3aDYuNDc2Yy41MzcgMCAuOTc3LjQzOS45NzcuOTc3eiIgZmlsbD0idXJsKCNoKSIvPjxwYXRoIGQ9Im00NzUuNjIyIDM0Ni4wMjljMCAuNTM3LS40MzguOTc2LS45NzYuOTc2aC02LjQ3N2MtLjUzOCAwLS45NzctLjQzOC0uOTc3LS45NzZ2LTE4LjI4NmMwLS41MzctLjAyNy0xLjQxNS0uMDU4LTEuOTUxIDAgMC0uMDI3LS40MzctLjE5My0uODk2LS4xNjUtLjQ1Ny0uNDk3LS45NDctMS4wMDEtMS40NjUtLjQ5Ni0uNTIxLS45OTYtLjg5My0xLjUtMS4xMTktLjQ5NC0uMjI5LTEuMDc4LS4zNDQtMS43NDUtLjM0NGgtNS4yMDNjLS41MzcgMC0uOTc2LjQ0LS45NzYuOTc3djIzLjA4NGMwIC41MzctLjQzOS45NzYtLjk3OC45NzZoLTYuNjA0Yy0uNTM0IDAtLjk3NS0uNDM4LS45NzUtLjk3NnYtMjMuMjcxYzAtLjUzNy0uNDM5LS45NzctLjk3OS0uOTc3aC04LjAzNmMtLjUzNyAwLS45NzcuNDM5LS45NzcuOTc3djIzLjI3MWMwIC41MzctLjQ0Ljk3Ni0uOTc5Ljk3NmgtNi44NDljLS41MzcgMC0uOTc5LS40MzgtLjk3OS0uOTc2di0zMC4zOTFjMC0uNTM3LjQ0LS45NzguOTc5LS45NzhoMzIuNjk3Yy41MzYgMCAxLjQxNy4wMjIgMS45NS4wNSAwIDAgMi44OTYuMTUyIDQuMTQ2LjU0IDEuMjUuNDAxIDIuNDc5IDEuMjQzIDMuNjg0IDIuNTI4Ljk1NiAxLjA0MSAxLjY5MiAyLjA1OCAyLjIxNSAzLjA1NC41Mi45OTguNzgyIDIuMDc0Ljc4MiAzLjIzN3YyMS45NTloLjAwOXoiIGZpbGw9InVybCgjaSkiLz48cGF0aCBkPSJtNDkwLjYwNyAzMTAuMDY2YzAgLjUzNS0uNDQuOTc5LS45NzguOTc5aC02LjY2MWMtLjUzNyAwLS45NzktLjQ0MS0uOTc5LS45Nzl2LTUuNzI3YzAtLjUzOC40NC0uOTc2Ljk3OS0uOTc2aDYuNjYxYy41MzYgMCAuOTc4LjQzOC45NzguOTc2em0wIDM1Ljk2M2MwIC41MzctLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40MzgtLjk3OS0uOTc2di0zMC4zOTFjMC0uNTM3LjQ0LS45NzguOTc5LS45NzhoNi42NjFjLjUzNiAwIC45NzguNDQuOTc4Ljk3OHoiIGZpbGw9InVybCgjaikiLz48cGF0aCBkPSJtNTA1Ljc3NyAzNDYuMDI5YzAgLjUzNy0uNDM4Ljk3Ni0uOTc4Ljk3NmgtNi44NDljLS41MzQgMC0uOTc2LS40MzgtLjk3Ni0uOTc2di00MS42ODhjMC0uNTM4LjQzOS0uOTc2Ljk3Ni0uOTc2aDYuODQ5Yy41NCAwIC45NzguNDM4Ljk3OC45NzZ6IiBmaWxsPSJ1cmwoI2spIi8+PHBhdGggZD0ibTUyMC43NTkgMzQ2LjAyOWMwIC41MzctLjQzOS45NzYtLjk3OC45NzZoLTYuODVjLS41MzkgMC0uOTc4LS40MzgtLjk3OC0uOTc2di00MS42ODhjMC0uNTM4LjQzOC0uOTc2Ljk3OC0uOTc2aDYuODVjLjUzNyAwIC45NzguNDM4Ljk3OC45NzZ6IiBmaWxsPSJ1cmwoI2wpIi8+PC9nPjxnIGNsaXAtcGF0aD0idXJsKCNtKSIgbWFzaz0idXJsKCNuKSIgb3BhY2l0eT0iLjg4Ij48cGF0aCBkPSJtMzI3LjI4NiAzNDYuMDI5YzAgLjUzNy0uNDM4Ljk3Ni0uOTc2Ljk3NmgtMTcuMzM5Yy0uNTM3IDAtMS40MTUtLjAzLTEuOTUxLS4wNjkgMCAwLTIuOTE2LS4xOTktNC44My0uNzQyLTMuNzA2LTEuMTIxLTYuNjM4LTMuNjk5LTguODA1LTcuNzI4LTEuOTU3LTMuNjU3LTIuOTMzLTcuOTE5LTIuOTMzLTEyLjc4MiAwLTQuNjk1Ljg3NC04Ljg1MiAyLjYyMS0xMi40NyAxLjkxMy0zLjk4NSA0LjYzOS02LjcxIDguMTc5LTguMTY3IDIuNzQ2LTEuMTIyIDUuNTU2LTEuNjgyIDguNDI3LTEuNjgyaDE2LjUwNGMuNTM3IDAgLjk3Ni40MzguOTc2Ljk3NnY2LjQxNmMwIC41MzUtLjQzOC45NzYtLjk3Ni45NzZoLTE2LjIxM2MtLjUzNiAwLTEuMzk2LjEzMS0xLjkwNy4yOTMgMCAwLTQuMTY3IDEuMzA2LTUuNTAxIDQuNTE1LTEuMDM5IDIuNDk2LTEuNTYxIDUuNzYzLTEuNTYxIDkuODAxIDAgMy40MTQuNjY2IDYuMzEgMS45OTggOC42NzcgMS41NCAyLjc5MSAzLjcwNSA0LjE4MiA2LjQ5MiA0LjE4MmgxNi44MTdjLjUzNyAwIC45NzYuNDM5Ljk3Ni45Nzh6IiBmaWxsPSJ1cmwoI2UpIi8+PHBhdGggZD0ibTM2NC4wNjEgMzQ2LjAyOWMwIC41MzctLjQzOS45NzYtLjk3Ny45NzZoLTIxLjM5OGMtLjUzNyAwLTEuNDA4LS4wNzgtMS45MzgtLjE3MyAwIDAtMy44OTktLjcwOC01Ljc1LTIuNDcxLTEuODUyLTEuNzY0LTIuNzc4LTMuOTkyLTIuNzc4LTYuNjg5IDAtMi44MjIuODQxLTUuMTU2IDIuNTIxLTcuMDAzIDEuNjgzLTEuODQ2IDMuNzg5LTIuNzY5IDYuMzE3LTIuNzY5aDE0LjA5NmMuNTM3IDAgLjk3Ny0uMzk0Ljk3Ny0uODczIDAtLjQ4LS4wNC0xLjMxMy0uMDkzLTEuODQ2IDAgMC0uMDAxLS4wMzUtLjE4Ny0uNDM1LS4xODctLjM5Ni0uNDg4LS44NjUtLjkwNy0xLjQwNS0uNTc5LS42NjYtMS4xOC0xLjA5MS0xLjgwNC0xLjI4MS0uNjIxLS4xODctMS40OTItLjI3OC0yLjYxNC0uMjc4aC0xNS4xNDZjLS41MzcgMC0uOTc4LS40MzgtLjk3OC0uOTc2di01LjE2OGMwLS41MzcuNDQtLjk3OC45NzgtLjk3OGgxMS45MDYgMS45NTMuNzMyYy41MzUgMCAxLjQxNC4wMjIgMS45NTEuMDUgMCAwIDQuMzI4LjIxOCA1LjgyNi43MjkgMS41LjUyMyAyLjc4OCAxLjMwMyAzLjg3MiAyLjM0IDEuMzczIDEuMzcxIDIuMjkgMi44NjkgMi43NDcgNC40OTIuNDU5IDEuNjE3LjY4OCAzLjY5LjY4OCA2LjIyNnYxNy41MzJ6bS05LjkwNS01LjY0M2MuNTM3IDAgLjk3Ny0uNDQuOTc3LS45Nzh2LTQuMzVjMC0uNTM3LS40MzgtLjk3Ny0uOTc3LS45NzdoLTkuMDM4Yy0uNTM2IDAtMS40MS4wNjQtMS45MzkuMTQ4IDAgMC0uOTYuMTQ2LTEuNjg5Ljc0OC0uNzI3LjU5OS0xLjA5IDEuMzg5LTEuMDkgMi4zNzkgMCAuODY1LjM1MyAxLjU4OCAxLjA1OSAyLjE2NC43MDkuNTc4IDEuNTIxLjg2MiAyLjQzNy44NjJoMTAuMjYydi4wMDR6IiBmaWxsPSJ1cmwoI2YpIi8+PHBhdGggZD0ibTQwMC4zOTUgMzM3LjE0MWMwIDIuNzQ4LS44ODQgNS4wOTYtMi42NTUgNy4wNTktMS43NyAxLjk1My00LjAwNiAyLjkzMy02LjcxMyAyLjkzM2gtMjAuNDM0Yy0uNTM4IDAtLjk3OS0uNDQtLjk3OS0uOTc3di0zLjkxOWMwLS41MzYuNDM5LS45NzUuOTc5LS45NzVoMTUuNjAyYy41MzYgMCAxLjQxMi0uMDYyIDEuOTQ1LS4xMzQgMCAwIDEuMzI0LS4xOCAyLjE3NS0uODAxLjg1MS0uNjI2IDEuMjc2LTEuNTIxIDEuMjc2LTIuNjg3IDAtMi43MDUtMS44My00LjA1OC01LjQ3OS00LjA1OGgtNy45OWMtLjUzNiAwLTEuNDAyLS4xMDQtMS45MjUtLjIzMSAwIDAtMi44MDctLjY4OC00LjU5Mi0yLjUxOS0xLjc4NS0xLjgzMi0yLjY4MS0zLjgwOC0yLjY4MS01LjkzMyAwLTIuOTk2LjY2Ny01LjQwNyAxLjk5OC03LjIzOCAxLjU0Mi0yLjA4MiAzLjgwOC0zLjEyNiA2LjgwNy0zLjEyNmgxOS42MjRjLjUzNiAwIC45NzcuNDQyLjk3Ny45Nzh2NC4xNjhjMCAuNTM3LS40MzkuOTc2LS45NzcuOTc2aC0xNi40MDFjLS41MzYgMC0xLjM5OS4xMS0xLjkyMi4yNDMgMCAwLS4zNzguMTAxLS44OTIuNzg3LS41MjMuNjg4LS43OCAxLjQ3LS43OCAyLjM0NiAwIC45NTMuMzQxIDEuNzcxIDEuMDI4IDIuNDY0LjY4Ni42ODcgMS41MDYgMS4wMyAyLjQ2NiAxLjAzaDguNzAxYy41MzYgMCAxLjQwOC4wNzIgMS45MzguMTYgMCAwIDQuNDc3Ljc0MiA2LjI0NSAyLjU1MSAxLjc3NSAxLjgxNyAyLjY1OSA0LjExNiAyLjY1OSA2LjkwM3oiIGZpbGw9InVybCgjZykiLz48cGF0aCBkPSJtNDI0LjYxNCAzMjAuNDMyYzAgLjUzNS0uNDM4Ljk3Ny0uOTc3Ljk3N2gtNi40NzZjLS41MzYgMC0uOTc2LjQzOS0uOTc2Ljk3NnYxMi43MjRjMCAuNTM1LjA4MSAxLjQwOC4xOCAxLjkzNSAwIDAgLjI3NyAxLjQ3NCAxLjE5NCAyLjM0NyAxLjAzOS44NzUgMi40MTEgMS4zMTIgNC4xMjEgMS4zMTJoMS41ODNjLjUzNSAwIC45NzYuNDQuOTc2Ljk3OHY0LjM1NGMwIC41MzYtLjQzOS45NzYtLjk3Ni45NzZoLTYuMTA0Yy0uNTM3IDAtMS40MDYtLjA4NC0xLjkzNC0uMTg4IDAgMC0zLjUxNy0uNjg4LTUuMjIxLTIuNDM4LS45OTktMS4wNDEtMS42NDYtMi4xODUtMS45MzgtMy40MzMtLjI5LTEuMjQ3LS40MzUtMi43MjYtLjQzNS00LjQzNXYtMTQuMTMyYzAtLjUzNC0uNDQtLjk3Ni0uOTc5LS45NzZoLTMuNTQyYy0uNTM3IDAtLjk3NS0uNDQtLjk3NS0uOTc3di00Ljc5M2MwLS41MzUuNDM4LS45NzcuOTc1LS45NzdoMy41NDJjLjUzNyAwIC45NzktLjQzOC45NzktLjk3N3YtOS4zNDZjMC0uNTM4LjQzOC0uOTc2Ljk3NS0uOTc2aDYuNjAyYy41MzYgMCAuOTc3LjQzOC45NzcuOTc2djkuMzQ2YzAgLjUzNy40MzguOTc3Ljk3Ni45NzdoNi40NzZjLjUzNyAwIC45NzcuNDM5Ljk3Ny45Nzd6IiBmaWxsPSJ1cmwoI2gpIi8+PHBhdGggZD0ibTQ3NS42MjIgMzQ2LjAyOWMwIC41MzctLjQzOC45NzYtLjk3Ni45NzZoLTYuNDc3Yy0uNTM4IDAtLjk3Ny0uNDM4LS45NzctLjk3NnYtMTguMjg2YzAtLjUzNy0uMDI3LTEuNDE1LS4wNTgtMS45NTEgMCAwLS4wMjctLjQzNy0uMTkzLS44OTYtLjE2NS0uNDU3LS40OTctLjk0Ny0xLjAwMS0xLjQ2NS0uNDk2LS41MjEtLjk5Ni0uODkzLTEuNS0xLjExOS0uNDk0LS4yMjktMS4wNzgtLjM0NC0xLjc0NS0uMzQ0aC01LjIwM2MtLjUzNyAwLS45NzYuNDQtLjk3Ni45Nzd2MjMuMDg0YzAgLjUzNy0uNDM5Ljk3Ni0uOTc4Ljk3NmgtNi42MDRjLS41MzQgMC0uOTc1LS40MzgtLjk3NS0uOTc2di0yMy4yNzFjMC0uNTM3LS40MzktLjk3Ny0uOTc5LS45NzdoLTguMDM2Yy0uNTM3IDAtLjk3Ny40MzktLjk3Ny45Nzd2MjMuMjcxYzAgLjUzNy0uNDQuOTc2LS45NzkuOTc2aC02Ljg0OWMtLjUzNyAwLS45NzktLjQzOC0uOTc5LS45NzZ2LTMwLjM5MWMwLS41MzcuNDQtLjk3OC45NzktLjk3OGgzMi42OTdjLjUzNiAwIDEuNDE3LjAyMiAxLjk1LjA1IDAgMCAyLjg5Ni4xNTIgNC4xNDYuNTQgMS4yNS40MDEgMi40NzkgMS4yNDMgMy42ODQgMi41MjguOTU2IDEuMDQxIDEuNjkyIDIuMDU4IDIuMjE1IDMuMDU0LjUyLjk5OC43ODIgMi4wNzQuNzgyIDMuMjM3djIxLjk1OWguMDA5eiIgZmlsbD0idXJsKCNpKSIvPjxwYXRoIGQ9Im00OTAuNjA3IDMxMC4wNjZjMCAuNTM1LS40NC45NzktLjk3OC45NzloLTYuNjYxYy0uNTM3IDAtLjk3OS0uNDQxLS45NzktLjk3OXYtNS43MjdjMC0uNTM4LjQ0LS45NzYuOTc5LS45NzZoNi42NjFjLjUzNiAwIC45NzguNDM4Ljk3OC45NzZ6bTAgMzUuOTYzYzAgLjUzNy0uNDQuOTc2LS45NzguOTc2aC02LjY2MWMtLjUzNyAwLS45NzktLjQzOC0uOTc5LS45NzZ2LTMwLjM5MWMwLS41MzcuNDQtLjk3OC45NzktLjk3OGg2LjY2MWMuNTM2IDAgLjk3OC40NC45NzguOTc4eiIgZmlsbD0idXJsKCNqKSIvPjxwYXRoIGQ9Im01MDUuNzc3IDM0Ni4wMjljMCAuNTM3LS40MzguOTc2LS45NzguOTc2aC02Ljg0OWMtLjUzNCAwLS45NzYtLjQzOC0uOTc2LS45NzZ2LTQxLjY4OGMwLS41MzguNDM5LS45NzYuOTc2LS45NzZoNi44NDljLjU0IDAgLjk3OC40MzguOTc4Ljk3NnoiIGZpbGw9InVybCgjaykiLz48cGF0aCBkPSJtNTIwLjc1OSAzNDYuMDI5YzAgLjUzNy0uNDM5Ljk3Ni0uOTc4Ljk3NmgtNi44NWMtLjUzOSAwLS45NzgtLjQzOC0uOTc4LS45NzZ2LTQxLjY4OGMwLS41MzguNDM4LS45NzYuOTc4LS45NzZoNi44NWMuNTM3IDAgLjk3OC40MzguOTc4Ljk3NnoiIGZpbGw9InVybCgjbCkiLz48L2c+PGcgY2xpcC1wYXRoPSJ1cmwoI3ApIj48cGF0aCBkPSJtNDkwLjYwNyAzMTEuNDZjMCAuNTM3LS40NC45NzYtLjk3OC45NzZoLTYuNjYxYy0uNTM3IDAtLjk3OS0uNDM4LS45NzktLjk3NnYtNS43MjZjMC0uNTM1LjQ0LS45NzcuOTc5LS45NzdoNi42NjFjLjUzNiAwIC45NzguNDQuOTc4Ljk3N3ptMCAzNS45NmMwIC41MzktLjQ0Ljk3OS0uOTc4Ljk3OWgtNi42NjFjLS41MzcgMC0uOTc5LS40MzgtLjk3OS0uOTc5di0zMC4zODVjMC0uNTM3LjQ0LS45NzkuOTc5LS45NzloNi42NjFjLjUzNiAwIC45NzguNDQuOTc4Ljk3OXoiIGZpbGw9InVybCgjcSkiLz48L2c+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGQ9Im01MDUuODY3IDM0OC4zNGgtOC44NHYtNDMuODQ1aDguODR6IiBmaWxsPSIjZTZlNmU2Ii8+PHBhdGggZD0ibTU1OC42MTUgMjk1LjA1OGMtNC45MzggNi40NDgtOS4yNjEgMTMuMTE3LTkuNTA5IDEzLjUxOS0yLjU2MiA0LjIxMi01LjgzIDcuOTM4LTguNzY2IDExLjczMWwzOC41MjEgMTcuMTY4YzcuMDI4LTcuNTU4IDEzLjc4MS0xNS43MDMgMjAuMjQyLTI0LjIyNHoiIGZpbGw9InVybCgjcykiLz48cGF0aCBkPSJtNjAyLjkwMiAyNzMuOTg0YzkuNzQ2LTEyLjk4OCAxNS42MDktOC45MTIgMTkuODE3LTYuNzU5IDQuOTA2IDIuMzUzIDQuNjQ1IDIuNDMxIDUuMzY5IDIuODc3bC00LjU4NyA3LjM5M2MtNi4yNzkgMTAuMTU5LTEyLjk4NSAyMC4yMzMtMjAuMDUxIDI5LjkzbC00MC43My0xOC4zMDljMy4yNzgtMy44MTIgOS43MS0xMi44NjIgMTEuMzIyLTEyLjg2MiAwIDAgMy45OTUtNC41ODYgMTIuMTMyLTEuMTc5IDguMTM0IDMuNDAxIDE0LjEwNyAyLjM5NSAxNi43MjgtMS4wOTF6IiBmaWxsPSJ1cmwoI3QpIi8+PHBhdGggZD0ibTUyMC45MjMgMzM1Ljc5OHYtMzEuMzAzaC04Ljg0N3YzOS4xOTN6IiBmaWxsPSIjZTZlNmU2Ii8+PHBhdGggZD0ibTIzOS4wMjcgMjg5LjE4NC0yLjg4OCA4LjY2MSA0LjE2OCAyLjM0NyA1LjkxMS02Ljk1OGMtMi4wNjUtMS44NjktNC41MjItMy4yNTItNy4xOTEtNC4wNXoiIGZpbGw9InVybCgjdSkiLz48cGF0aCBkPSJtMjQwLjcxNyAzMTQuMjM4IDYuNTM1IDUuNTUzYzEuODcxLTEuOTg4IDMuMy00LjM1MiA0LjE1Ni02LjkzOGwtOC4zNDYtMi43ODV6IiBmaWxsPSJ1cmwoI3YpIi8+PHBhdGggZD0ibTIyNi42NzEgMzE0LjY0NS01LjMzNCA2LjI3N2MxLjk5NSAxLjc3MSA0LjM0NiAzLjA5OCA2Ljg5NSAzLjg4N2wyLjYwNi03LjgxNnoiIGZpbGw9InVybCgjdykiLz48cGF0aCBkPSJtMjE1Ljc4NCAzMDIuMDU3IDguMTMgMi43MTEgMi4zNDktNC4xNjYtNi42OTctNS42OTFjLTEuNzcgMi4wNjktMy4wNTEgNC41MTYtMy43ODIgNy4xNDZ6IiBmaWxsPSJ1cmwoI3gpIi8+PHBhdGggZD0ibTIyMS45MzMgMjY1Ljg5MWMtMjIuOTE0IDYuMzk2LTM2LjMwMyAzMC4xNTctMjkuOTA2IDUzLjA3IDYuMzk2IDIyLjkxNSAzMC4xNTcgMzYuMzA1IDUzLjA3MSAyOS45MDhzMzYuMzAzLTMwLjE1OCAyOS45MDYtNTMuMDcxYy02LjM5Ny0yMi45MTQtMzAuMTU3LTM2LjMwNC01My4wNzEtMjkuOTA3em0tMTguMzcxIDEyLjM2NCAyNC42OSAyMC45ODFjLjU0LjQ2Mi42OTUgMS4zMzguMzQ5IDEuOTU4bC0yLjk3MSA1LjI3MWMtLjM0OC42MTUtMS4xODUuOTM4LTEuODU1LjcxM2wtMzAuNzEyLTEwLjI0NGMxLjgyMi03LjAyMyA1LjQ0Ni0xMy40NzMgMTAuNDk5LTE4LjY3OXptMjkuNjg1IDM4Ljg3NS0xMC4yMzMgMzAuNjg4Yy03LjAxNi0xLjgzLTEzLjQ1Ny01LjQ2MS0xOC42NTQtMTAuNTE2bDIwLjk0Ny0yNC42NDhjLjQ2LS41MzggMS4zMzktLjY5NiAxLjk1Ni0uMzUxbDUuMjcxIDIuOTcyYy42MTYuMzQ3LjkzOCAxLjE4My43MTMgMS44NTV6bS40ODMtMTkuNDIzIDEwLjI2My0zMC43NzFjNy4wMjcgMS44MjggMTMuNDc5IDUuNDYzIDE4LjY4NSAxMC41MjdsLTIxLjAwNSAyNC43MTRjLS40NTguNTQxLTEuMzM5LjY5OS0xLjk1Ni4zNTNsLTUuMjc0LTIuOTY5Yy0uNjItLjM0OS0uOTQtMS4xODItLjcxMy0xLjg1NHptMjkuNjczIDM4Ljg2NS0yNC42NzctMjAuOTY5Yy0uNTQtLjQ1OS0uNjk3LTEuMzQyLS4zNDgtMS45NTdsMi45NjgtNS4yNzRjLjM0Ny0uNjIgMS4xODQtLjkzOCAxLjg1NC0uNzEybDMwLjc0MiAxMC4yNTRjLTEuODM1IDcuMDItNS40NzQgMTMuNDYxLTEwLjUzOSAxOC42NTh6IiBmaWxsPSJ1cmwoI3kpIi8+PHBhdGggZD0ibTMxMy41NzEgMjUzLjkxN3MtMTguNDcxIDQuNjA0LTQxLjMzOSAyNy42MjRjMS41MDYgMi4zMzggMi44MDEgNC44NSAzLjg1IDcuNTE2IDEyLjg0My0xMS4xNSAzNC40MzktMjYuNTU2IDUwLjcyNy0yMS4wNzEtLjAwMS0uMDAxLTYuMjM1LTkuNzY5LTEzLjIzOC0xNC4wNjl6IiBmaWxsPSJ1cmwoI3opIi8+PHBhdGggZD0ibTM1Ny4yMDEgMzExLjE3M2g3LjA2NWMtMS4wMzItMS43OTktMi4wNjItMy42MzItMy4wODUtNS41NjNsLTMuMTUtNS45NDdjLTEuOTIyLTMuNjMxLTMuNjI1LTYuNzktNS4yMDItOS42NDlsMjQuNzQxLTguNDM2YzMuMDAzIDQuMDk3IDYuMDY0IDguNiA5LjExNyAxMy4zODggMS4xMDkgMS43NDIgMi4xODkgMy40MDIgMy4yNDkgNS4wMDlsLTIzLjA4OSAxMS4xOTloMTcuMTY3bDEwLjE2My00LjkyOWMxLjE5NyAxLjczIDIuMzU2IDMuMzY1IDMuNDg2IDQuOTI5aDcuNjVjLTMuOTc3LTUuMjg2LTguNDc1LTExLjczOC0xMy41MTQtMTkuNjQ1LTI0LjQ0My0zOC4zNDYtNDEuNzU3LTM5LjA0My00MS43NTctMzkuMDQzaC02LjYwNGMxLjkyMi41MjEgMy45MzggMS4zODEgNi4yODEgMi43NTZsLTE5LjQ1IDMuNTU1Yy0uMzM5LS4zNTgtLjY3NC0uNzA5LTEuMDI4LTEuMDc4LS4xMDQtLjExLTMuMzc4LTMuMjUxLTUuNDMzLTUuMjMzaC02LjM1NmMxOS4zNTIgMTkuMTczIDE5LjY4OSAyMC45MTcgMzguMzYyIDU2LjEyNi40NjMuODY3LjkyNSAxLjcyIDEuMzg3IDIuNTYxem0tMjEuMDg1LTQ2LjA0NSAyMi4wNzUtNC4wMzdjMS4wNjQuODEzIDIuMTgyIDEuNjggMy4zNzEgMi42MTkgMy40NzcgMi43NTEgNy4zMTYgNi44MDYgMTEuMzM0IDExLjc4MmwtMjMuNzEgOC4wODNjLTQuNzczLTguMTczLTguMzYxLTEzLjA5OS0xMy4wNy0xOC40NDd6IiBmaWxsPSJ1cmwoI0EpIi8+PHBhdGggZD0ibTU2Ny4zODcgMzQ5YzIuMTA5LTEuOTcxIDQuMjAxLTQgNi4yNjctNi4wODlsLTM3LjgzNy0xNi44NjNjLTYuOTc5IDguNjUxLTE0LjUwNCAxNi4yNTctMjIuMTM2IDIyLjk1MnoiIGZpbGw9InVybCgjQikiLz48L3N2Zz4=";
function createLayerSequence(opts, ...argsList) {
  return argsList.map((args, index) => {
    return __spreadProps(__spreadValues({
      name: `${opts.name}-${index}`
    }, opts.defaultArgs), {
      widget: {
        uri: opts.widget.uri,
        args: __spreadValues(__spreadValues({}, opts.widget.defaultArgs), args)
      }
    });
  });
}
function createMosaicLayout(opts, layouts) {
  if (layouts.length !== opts.width * opts.height) {
    throw new Error("There must be as many layouts as width  * height");
  }
  return {
    name: opts.name,
    transition: opts.transition,
    widget: {
      uri: "widget://layout",
      args: {
        items: layouts.map((layout, index) => {
          const col = index % opts.width;
          const row = Math.floor(index / opts.width);
          return {
            css: {
              left: `${col * 100 / opts.width}%`,
              top: `${row * 100 / opts.height}%`,
              width: `${100 / opts.width}%`,
              height: `${100 / opts.height}%`
            },
            playlist: {
              name: `${opts.name}-${row}-${col}`,
              layers: layout.map((layer, index2) => __spreadProps(__spreadValues({
                name: `${opts.name}-${row}-${col}-${index2}`,
                duration: layer.duration
              }, opts.defaultArgs), {
                widget: {
                  uri: opts.widget.uri,
                  args: __spreadValues(__spreadValues({}, opts.widget.defaultArgs), layer.widget)
                }
              }))
            }
          };
        })
      }
    }
  };
}
const logoLayer = {
  name: "Logo",
  duration: 1e3,
  widget: {
    uri: "widget://image",
    args: {
      src: Logo,
      size: "cover"
    }
  },
  transition: {
    uri: "transition://crossfade",
    opts: {
      duration: 1e3
    }
  }
};
function getIntro(text) {
  const introTitle = {
    name: "Intro",
    slack: 1e3,
    css: {
      backgroundColor: "#000"
    },
    transition: {
      uri: "transition://crossfade",
      opts: {
        duration: 1e3
      }
    },
    widget: {
      uri: "widget://text",
      args: {
        text: "Welcome to a Castmill Demo",
        css: {
          fontSize: "3em",
          fontWeight: "bold",
          fontFamily: "Anton",
          color: "white",
          textAlign: "center",
          lineHeight: "1em"
        },
        font: {
          name: "Anton",
          url: "https://fonts.gstatic.com/s/anton/v22/1Ptgg87LROyAm3Kz-C8CSKlv.woff2"
        },
        animation: qr.animationPresets.snake
      }
    }
  };
  const disclaimer = {
    name: "Name",
    slack: 1e3,
    css: {
      backgroundColor: "#000"
    },
    duration: 4e3,
    transition: {
      uri: "transition://crossfade",
      opts: {
        duration: 1e3
      }
    },
    widget: {
      uri: "widget://text",
      args: {
        text,
        css: {
          fontSize: "1em",
          fontWeight: "bold",
          margin: "5em",
          fontFamily: "Helvetica",
          color: "white"
        }
      }
    }
  };
  return [logoLayer, disclaimer, introTitle];
}
function getOutro() {
  return [logoLayer];
}
const images$1 = {
  deniro: "https://i.pinimg.com/originals/aa/6c/e7/aa6ce7746788afb472ad3f2e1dd11eb9.jpg",
  laurie: "https://i.pinimg.com/originals/75/fe/c1/75fec1c2731e49bcb1922beaa3311f80.jpg",
  nicholsson: "https://s-media-cache-ak0.pinimg.com/originals/ef/83/60/ef83604a2bedd8043ccc2fe56fed3bc7.jpg",
  halle: "https://a.1stdibscdn.com/greg-gorman-photography-halle-berry-contemporary-celebrity-photography-portrait-for-sale/a_7663/a_69316721603285231596/Halle_Barry_LA_1996_master.jpg",
  smith: "https://i.pinimg.com/474x/71/97/55/71975514bc7567872a36ac0e06df5a9d.jpg",
  pacino: "https://hips.hearstapps.com/esq.h-cdn.co/assets/17/12/4000x3000/sd-aspect-1489983976-gettyimages-108801398.jpg",
  scarlett: "https://avatarfiles.alphacoders.com/611/61104.jpg",
  denzel: "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=640&height=800&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FLIDF2HT0MUGmDp3_2NxoPA%2Fnormalized.jpg",
  jackie: "https://i.pinimg.com/originals/66/0e/5e/660e5e74afcf54a41dd694db28309341.jpg",
  kidman: "https://i.pinimg.com/originals/ea/82/f1/ea82f123f627e57c1afc56af98b1e7ad.jpg",
  stallone: "https://i.pinimg.com/originals/79/69/1e/79691e175cf1c89985979eef88be7b59.jpg",
  streep: "http://images6.fanpop.com/image/photos/32100000/streep-meryl-streep-32148467-500-623.png",
  freeman: "data:image/jpeg;base64,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"
};
const shuffleImages = (images2) => {
  const keys = Object.keys(images2);
  const shuffled = keys.sort(() => 0.5 - Math.random());
  return shuffled.map((key) => ({
    duration: 1e3 + Math.random() * 500,
    widget: {
      src: images2[key],
      size: "cover"
    }
  }));
};
const mosaic = createMosaicLayout({
  name: "test",
  width: 3,
  height: 3,
  widget: {
    uri: "widget://image",
    defaultArgs: {
      size: "cover"
    }
  },
  defaultArgs: {
    transition: {
      uri: "transition://flip",
      opts: {
        duration: 1e3
      }
    }
  }
}, [
  shuffleImages(images$1),
  shuffleImages(images$1),
  shuffleImages(images$1),
  shuffleImages(images$1),
  shuffleImages(images$1),
  shuffleImages(images$1),
  shuffleImages(images$1),
  shuffleImages(images$1),
  shuffleImages(images$1)
]);
const infoLayers = createLayerSequence({
  name: "explain-text",
  widget: {
    uri: "widget://text",
    defaultArgs: {
      css: {
        fontSize: "1.5em",
        fontWeight: "400",
        fontFamily: "Fredoka One",
        color: "white",
        margin: "0 0.5em"
      },
      font: {
        name: "Fredoka One",
        url: "https://fonts.gstatic.com/s/fredokaone/v12/k3kUo8kEI-tA1RRcTZGmTlHGCaen8wf-.woff2"
      },
      animation: qr.animationPresets.upper
    }
  },
  defaultArgs: {
    slack: 2e3,
    css: {
      backgroundColor: "#0000"
    },
    transition: {
      uri: "transition://crossfade",
      opts: {
        duration: 1e3
      }
    }
  }
}, { text: "We can split in any layout, combining any widgets." }, { text: "All layouts are independent from each other." }, { text: "And will loop until all the content has been shown." }, { text: "" });
const singleVideoTextLayers = createLayerSequence({
  name: "explain-text",
  widget: {
    uri: "widget://text",
    defaultArgs: {
      css: {
        fontSize: "1.5em",
        fontWeight: "400",
        fontFamily: "Fredoka One",
        color: "white",
        margin: "0 0.5em",
        textAlign: "center"
      },
      font: {
        name: "Fredoka One",
        url: "https://fonts.gstatic.com/s/fredokaone/v12/k3kUo8kEI-tA1RRcTZGmTlHGCaen8wf-.woff2"
      },
      animation: qr.animationPresets.upper
    }
  },
  defaultArgs: {
    slack: 2e3,
    css: {
      backgroundColor: "#0000"
    },
    transition: {
      uri: "transition://crossfade",
      opts: {
        duration: 500
      }
    }
  }
}, { text: "We can run full screen videos and any overlay text" }, { text: "" }, { text: "The text will loop if the video  is long enough..." });
const middleText = createLayerSequence({
  name: "middle-text",
  widget: {
    uri: "widget://text",
    defaultArgs: {
      css: {
        fontSize: "1em",
        fontWeight: "400",
        fontFamily: "Bebas",
        color: "white",
        margin: "0 0.5em",
        textAlign: "center"
      },
      font: {
        name: "Bebas",
        url: "https://fonts.gstatic.com/s/bebasneue/v8/JTUSjIg69CK48gW7PXoo9WlhyyTh89Y.woff2"
      },
      animation: qr.animationPresets.upper
    }
  },
  defaultArgs: {
    slack: 2e3,
    css: {
      backgroundColor: "#0000"
    },
    transition: {
      uri: "transition://crossfade",
      opts: {
        duration: 1e3
      }
    }
  }
}, { text: "We can go crazy with layouts" }, { text: "Any combination or number of layout sections are supported" }, { text: "Just let your imagination decide what to create" }, { text: "This text will loop until all layouts have completed" });
mosaic.widget.args.items[4].playlist.layers = middleText;
async function getComplexDemo() {
  const jsonPlaylist = {
    name: "Simple Demo",
    layers: [
      ...getIntro("This demo ilustrates some simple cases such as showing images, videos, and text. \n All you see in this demo is played by the Castmill player, including this introduction."),
      {
        name: "Full screen video",
        widget: {
          uri: "widget://layout",
          args: {
            items: [
              {
                css: {
                  top: "0%",
                  right: "0%",
                  width: "100%",
                  height: "100%",
                  opacity: "1"
                },
                playlist: {
                  name: "Videos",
                  layers: [
                    {
                      name: "Sunset",
                      widget: {
                        uri: "widget://video",
                        args: {
                          src: "https://cdn.videvo.net/videvo_files/video/premium/video0003/small_watermarked/montenegro_beach_sunsetTL4k07_preview.mp4"
                        }
                      }
                    }
                  ]
                }
              },
              {
                css: {
                  bottom: "12%",
                  left: "0%",
                  width: "100%",
                  height: "20%",
                  opacity: "1"
                },
                playlist: {
                  name: "Texts",
                  layers: singleVideoTextLayers
                }
              }
            ]
          }
        }
      },
      {
        name: "Layout 16:9 1:3",
        transition: {
          uri: "transition://side-scroll",
          opts: {
            duration: 1e3
          }
        },
        widget: {
          uri: "widget://layout",
          args: {
            items: [
              {
                css: {
                  top: "0%",
                  right: "0%",
                  width: "66%",
                  height: "100%",
                  opacity: "1"
                },
                playlist: {
                  name: "Videos",
                  layers: [
                    {
                      name: "Times Square",
                      duration: 1,
                      widget: {
                        uri: "widget://video",
                        args: {
                          src: "https://media.istockphoto.com/videos/times-square-in-new-york-city-at-night-usa-video-id1290688372"
                        }
                      }
                    }
                  ]
                }
              },
              {
                css: {
                  top: "0%",
                  left: "0%",
                  width: "34%",
                  height: "100%",
                  opacity: "1"
                },
                playlist: {
                  name: "Texts",
                  layers: infoLayers
                }
              }
            ]
          }
        }
      },
      mosaic,
      ...getOutro()
    ]
  };
  return dr.fromJSON(jsonPlaylist);
}
const videos = {
  vegetables: "https://media.istockphoto.com/videos/colorful-fruits-and-vegetables-market-video-id462883998",
  food: "https://media.istockphoto.com/videos/cooked-meat-meal-with-vegetables-video-id504115680",
  car: "https://media.istockphoto.com/videos/aerial-view-electric-car-driving-on-country-road-video-id541931266",
  lemon: "https://media.istockphoto.com/videos/slice-of-lemon-and-ice-in-water-video-id1003169662"
};
const videoLayers = createLayerSequence({
  name: "videos",
  widget: {
    uri: "widget://video"
  },
  defaultArgs: {
    duration: 4e3
  }
}, { src: videos.food }, { src: videos.car }, { src: videos.lemon }, { src: videos.vegetables });
const images = {
  smoothie: "https://media.istockphoto.com/photos/healthy-appetizing-red-smoothie-dessert-in-glasses-picture-id1081369140",
  icecream: "https://media.istockphoto.com/photos/strawberry-vanilla-chocolate-ice-cream-with-waffle-cone-on-marble-picture-id1161805849",
  muffins: "https://media.istockphoto.com/photos/banana-nuts-muffins-picture-id497157747",
  pizza: "https://media.istockphoto.com/photos/pizza-with-very-much-cheese-melting-picture-id1269122740",
  coffe: "https://media.istockphoto.com/photos/cup-of-espresso-with-coffee-beans-picture-id1177900338",
  cake: "https://media.istockphoto.com/photos/stawberry-cheesecake-picture-id1146488934"
};
const imageLayers = createLayerSequence({
  name: "images",
  widget: {
    uri: "widget://image"
  },
  defaultArgs: {
    duration: 2e3,
    transition: {
      uri: "transition://side-scroll",
      opts: {
        duration: 800
      }
    }
  }
}, { src: images.pizza }, { src: images.smoothie }, { src: images.icecream }, { src: images.coffe }, { src: images.cake });
async function getSimpleDemo() {
  const jsonPlaylist = {
    name: "Simple Demo",
    layers: [
      ...getIntro("This demo ilustrates some simple cases such as showing images and videos."),
      ...imageLayers,
      ...videoLayers,
      ...getOutro()
    ]
  };
  return dr.fromJSON(jsonPlaylist);
}
var style = "";
var TvFrame = "data:image/png;base64,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";
async function startDemo(demo, playlist) {
  demo.innerHTML = `
  <div style="all: revert !important;">
    <div style="display: flex; position: relative; flex-direction: row; justify-content: center; line-height: 24px;">    
      <div style="position: relative; background-image: url(${TvFrame}); top: -0.8em; left: 0em; width: 34em; height: 19.4em; background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
      <div id="player" style="position: absolute;width: 32em;height: 18em; background-color: #000;  font-family: Avenir, Helvetica, Arial, sans-serif;"></div>
    </div>
  </div>
`;
  new da("player", playlist);
}
export { createLayerSequence, createMosaicLayout, getComplexDemo, getIntro, getOutro, getSimpleDemo, startDemo };
