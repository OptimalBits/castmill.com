var Co = Object.defineProperty;
var xo = (i15, t, e) => t in i15 ? Co(i15, t, { enumerable: true, configurable: true, writable: true, value: e }) : i15[t] = e;
var C = (i15, t, e) => (xo(i15, typeof t != "symbol" ? t + "" : t, e), e);
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
var sr = function(i15, t) {
  return sr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }, sr(i15, t);
};
function jt(i15, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  sr(i15, t);
  function e() {
    this.constructor = i15;
  }
  i15.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
function Bo(i15, t, e, n) {
  function r(s) {
    return s instanceof e ? s : new e(function(o) {
      o(s);
    });
  }
  return new (e || (e = Promise))(function(s, o) {
    function a(l) {
      try {
        A(n.next(l));
      } catch (f) {
        o(f);
      }
    }
    function u(l) {
      try {
        A(n.throw(l));
      } catch (f) {
        o(f);
      }
    }
    function A(l) {
      l.done ? s(l.value) : r(l.value).then(a, u);
    }
    A((n = n.apply(i15, t || [])).next());
  });
}
function Oi(i15, t) {
  var e = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, r, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(A) {
    return function(l) {
      return u([A, l]);
    };
  }
  function u(A) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, r && (s = A[0] & 2 ? r.return : A[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, A[1])).done)
          return s;
        switch (r = 0, s && (A = [A[0] & 2, s.value]), A[0]) {
          case 0:
          case 1:
            s = A;
            break;
          case 4:
            return e.label++, { value: A[1], done: false };
          case 5:
            e.label++, r = A[1], A = [0];
            continue;
          case 7:
            A = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (s = e.trys, !(s = s.length > 0 && s[s.length - 1]) && (A[0] === 6 || A[0] === 2)) {
              e = 0;
              continue;
            }
            if (A[0] === 3 && (!s || A[1] > s[0] && A[1] < s[3])) {
              e.label = A[1];
              break;
            }
            if (A[0] === 6 && e.label < s[1]) {
              e.label = s[1], s = A;
              break;
            }
            if (s && e.label < s[2]) {
              e.label = s[2], e.ops.push(A);
              break;
            }
            s[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        A = t.call(i15, e);
      } catch (l) {
        A = [6, l], r = 0;
      } finally {
        n = s = 0;
      }
    if (A[0] & 5)
      throw A[1];
    return { value: A[0] ? A[1] : void 0, done: true };
  }
}
function he(i15) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && i15[t], n = 0;
  if (e)
    return e.call(i15);
  if (i15 && typeof i15.length == "number")
    return {
      next: function() {
        return i15 && n >= i15.length && (i15 = void 0), { value: i15 && i15[n++], done: !i15 };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ft(i15, t) {
  var e = typeof Symbol == "function" && i15[Symbol.iterator];
  if (!e)
    return i15;
  var n = e.call(i15), r, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = n.next()).done; )
      s.push(r.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      r && !r.done && (e = n.return) && e.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function Kt(i15, t, e) {
  if (e || arguments.length === 2)
    for (var n = 0, r = t.length, s; n < r; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return i15.concat(s || Array.prototype.slice.call(t));
}
function De(i15) {
  return this instanceof De ? (this.v = i15, this) : new De(i15);
}
function Do(i15, t, e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e.apply(i15, t || []), r, s = [];
  return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function o(c) {
    n[c] && (r[c] = function(d) {
      return new Promise(function(g, h) {
        s.push([c, d, g, h]) > 1 || a(c, d);
      });
    });
  }
  function a(c, d) {
    try {
      u(n[c](d));
    } catch (g) {
      f(s[0][3], g);
    }
  }
  function u(c) {
    c.value instanceof De ? Promise.resolve(c.value.v).then(A, l) : f(s[0][2], c);
  }
  function A(c) {
    a("next", c);
  }
  function l(c) {
    a("throw", c);
  }
  function f(c, d) {
    c(d), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function Eo(i15) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = i15[Symbol.asyncIterator], e;
  return t ? t.call(i15) : (i15 = typeof he == "function" ? he(i15) : i15[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function n(s) {
    e[s] = i15[s] && function(o) {
      return new Promise(function(a, u) {
        o = i15[s](o), r(a, u, o.done, o.value);
      });
    };
  }
  function r(s, o, a, u) {
    Promise.resolve(u).then(function(A) {
      s({ value: A, done: a });
    }, o);
  }
}
function M(i15) {
  return typeof i15 == "function";
}
function On(i15) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, e = i15(t);
  return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
}
var Rn = On(function(i15) {
  return function(e) {
    i15(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(n, r) {
      return r + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
  };
});
function mn(i15, t) {
  if (i15) {
    var e = i15.indexOf(t);
    0 <= e && i15.splice(e, 1);
  }
}
var Fe = function() {
  function i15(t) {
    this.initialTeardown = t, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return i15.prototype.unsubscribe = function() {
    var t, e, n, r, s;
    if (!this.closed) {
      this.closed = true;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var a = he(o), u = a.next(); !u.done; u = a.next()) {
              var A = u.value;
              A.remove(this);
            }
          } catch (h) {
            t = { error: h };
          } finally {
            try {
              u && !u.done && (e = a.return) && e.call(a);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          o.remove(this);
      var l = this.initialTeardown;
      if (M(l))
        try {
          l();
        } catch (h) {
          s = h instanceof Rn ? h.errors : [h];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var c = he(f), d = c.next(); !d.done; d = c.next()) {
            var g = d.value;
            try {
              Ai(g);
            } catch (h) {
              s = s != null ? s : [], h instanceof Rn ? s = Kt(Kt([], Ft(s)), Ft(h.errors)) : s.push(h);
            }
          }
        } catch (h) {
          n = { error: h };
        } finally {
          try {
            d && !d.done && (r = c.return) && r.call(c);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (s)
        throw new Rn(s);
    }
  }, i15.prototype.add = function(t) {
    var e;
    if (t && t !== this)
      if (this.closed)
        Ai(t);
      else {
        if (t instanceof i15) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
      }
  }, i15.prototype._hasParent = function(t) {
    var e = this._parentage;
    return e === t || Array.isArray(e) && e.includes(t);
  }, i15.prototype._addParent = function(t) {
    var e = this._parentage;
    this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
  }, i15.prototype._removeParent = function(t) {
    var e = this._parentage;
    e === t ? this._parentage = null : Array.isArray(e) && mn(e, t);
  }, i15.prototype.remove = function(t) {
    var e = this._finalizers;
    e && mn(e, t), t instanceof i15 && t._removeParent(this);
  }, i15.EMPTY = function() {
    var t = new i15();
    return t.closed = true, t;
  }(), i15;
}(), Li = Fe.EMPTY;
function Fi(i15) {
  return i15 instanceof Fe || i15 && "closed" in i15 && M(i15.remove) && M(i15.add) && M(i15.unsubscribe);
}
function Ai(i15) {
  M(i15) ? i15() : i15.unsubscribe();
}
var Ni = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
}, or = {
  setTimeout: function(i15, t) {
    for (var e = [], n = 2; n < arguments.length; n++)
      e[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Kt([i15, t], Ft(e)));
  },
  clearTimeout: function(i15) {
    return clearTimeout(i15);
  },
  delegate: void 0
};
function zi(i15) {
  or.setTimeout(function() {
    throw i15;
  });
}
function vn() {
}
function fn(i15) {
  i15();
}
var Pr = function(i15) {
  jt(t, i15);
  function t(e) {
    var n = i15.call(this) || this;
    return n.isStopped = false, e ? (n.destination = e, Fi(e) && e.add(n)) : n.destination = Mo, n;
  }
  return t.create = function(e, n, r) {
    return new yn(e, n, r);
  }, t.prototype.next = function(e) {
    this.isStopped || this._next(e);
  }, t.prototype.error = function(e) {
    this.isStopped || (this.isStopped = true, this._error(e));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, i15.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(e) {
    this.destination.next(e);
  }, t.prototype._error = function(e) {
    try {
      this.destination.error(e);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Fe), Po = Function.prototype.bind;
function Kn(i15, t) {
  return Po.call(i15, t);
}
var Qo = function() {
  function i15(t) {
    this.partialObserver = t;
  }
  return i15.prototype.next = function(t) {
    var e = this.partialObserver;
    if (e.next)
      try {
        e.next(t);
      } catch (n) {
        un(n);
      }
  }, i15.prototype.error = function(t) {
    var e = this.partialObserver;
    if (e.error)
      try {
        e.error(t);
      } catch (n) {
        un(n);
      }
    else
      un(t);
  }, i15.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (e) {
        un(e);
      }
  }, i15;
}(), yn = function(i15) {
  jt(t, i15);
  function t(e, n, r) {
    var s = i15.call(this) || this, o;
    if (M(e) || !e)
      o = {
        next: e != null ? e : void 0,
        error: n != null ? n : void 0,
        complete: r != null ? r : void 0
      };
    else {
      var a;
      s && Ni.useDeprecatedNextContext ? (a = Object.create(e), a.unsubscribe = function() {
        return s.unsubscribe();
      }, o = {
        next: e.next && Kn(e.next, a),
        error: e.error && Kn(e.error, a),
        complete: e.complete && Kn(e.complete, a)
      }) : o = e;
    }
    return s.destination = new Qo(o), s;
  }
  return t;
}(Pr);
function un(i15) {
  zi(i15);
}
function To(i15) {
  throw i15;
}
var Mo = {
  closed: true,
  next: vn,
  error: To,
  complete: vn
}, Qr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function pe(i15) {
  return i15;
}
function Io(i15) {
  return i15.length === 0 ? pe : i15.length === 1 ? i15[0] : function(e) {
    return i15.reduce(function(n, r) {
      return r(n);
    }, e);
  };
}
var k = function() {
  function i15(t) {
    t && (this._subscribe = t);
  }
  return i15.prototype.lift = function(t) {
    var e = new i15();
    return e.source = this, e.operator = t, e;
  }, i15.prototype.subscribe = function(t, e, n) {
    var r = this, s = ko(t) ? t : new yn(t, e, n);
    return fn(function() {
      var o = r, a = o.operator, u = o.source;
      s.add(a ? a.call(s, u) : u ? r._subscribe(s) : r._trySubscribe(s));
    }), s;
  }, i15.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (e) {
      t.error(e);
    }
  }, i15.prototype.forEach = function(t, e) {
    var n = this;
    return e = li(e), new e(function(r, s) {
      var o = new yn({
        next: function(a) {
          try {
            t(a);
          } catch (u) {
            s(u), o.unsubscribe();
          }
        },
        error: s,
        complete: r
      });
      n.subscribe(o);
    });
  }, i15.prototype._subscribe = function(t) {
    var e;
    return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t);
  }, i15.prototype[Qr] = function() {
    return this;
  }, i15.prototype.pipe = function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return Io(t)(this);
  }, i15.prototype.toPromise = function(t) {
    var e = this;
    return t = li(t), new t(function(n, r) {
      var s;
      e.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return r(o);
      }, function() {
        return n(s);
      });
    });
  }, i15.create = function(t) {
    return new i15(t);
  }, i15;
}();
function li(i15) {
  var t;
  return (t = i15 != null ? i15 : Ni.Promise) !== null && t !== void 0 ? t : Promise;
}
function So(i15) {
  return i15 && M(i15.next) && M(i15.error) && M(i15.complete);
}
function ko(i15) {
  return i15 && i15 instanceof Pr || So(i15) && Fi(i15);
}
function Oo(i15) {
  return M(i15 == null ? void 0 : i15.lift);
}
function K(i15) {
  return function(t) {
    if (Oo(t))
      return t.lift(function(e) {
        try {
          return i15(e, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function N(i15, t, e, n, r) {
  return new Lo(i15, t, e, n, r);
}
var Lo = function(i15) {
  jt(t, i15);
  function t(e, n, r, s, o, a) {
    var u = i15.call(this, e) || this;
    return u.onFinalize = o, u.shouldUnsubscribe = a, u._next = n ? function(A) {
      try {
        n(A);
      } catch (l) {
        e.error(l);
      }
    } : i15.prototype._next, u._error = s ? function(A) {
      try {
        s(A);
      } catch (l) {
        e.error(l);
      } finally {
        this.unsubscribe();
      }
    } : i15.prototype._error, u._complete = r ? function() {
      try {
        r();
      } catch (A) {
        e.error(A);
      } finally {
        this.unsubscribe();
      }
    } : i15.prototype._complete, u;
  }
  return t.prototype.unsubscribe = function() {
    var e;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      i15.prototype.unsubscribe.call(this), !n && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
    }
  }, t;
}(Pr), Fo = On(function(i15) {
  return function() {
    i15(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ui = function(i15) {
  jt(t, i15);
  function t() {
    var e = i15.call(this) || this;
    return e.closed = false, e.currentObservers = null, e.observers = [], e.isStopped = false, e.hasError = false, e.thrownError = null, e;
  }
  return t.prototype.lift = function(e) {
    var n = new fi(this, this);
    return n.operator = e, n;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Fo();
  }, t.prototype.next = function(e) {
    var n = this;
    fn(function() {
      var r, s;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var o = he(n.currentObservers), a = o.next(); !a.done; a = o.next()) {
            var u = a.value;
            u.next(e);
          }
        } catch (A) {
          r = { error: A };
        } finally {
          try {
            a && !a.done && (s = o.return) && s.call(o);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
    });
  }, t.prototype.error = function(e) {
    var n = this;
    fn(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = true, n.thrownError = e;
        for (var r = n.observers; r.length; )
          r.shift().error(e);
      }
    });
  }, t.prototype.complete = function() {
    var e = this;
    fn(function() {
      if (e._throwIfClosed(), !e.isStopped) {
        e.isStopped = true;
        for (var n = e.observers; n.length; )
          n.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var e;
      return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), t.prototype._trySubscribe = function(e) {
    return this._throwIfClosed(), i15.prototype._trySubscribe.call(this, e);
  }, t.prototype._subscribe = function(e) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e);
  }, t.prototype._innerSubscribe = function(e) {
    var n = this, r = this, s = r.hasError, o = r.isStopped, a = r.observers;
    return s || o ? Li : (this.currentObservers = null, a.push(e), new Fe(function() {
      n.currentObservers = null, mn(a, e);
    }));
  }, t.prototype._checkFinalizedStatuses = function(e) {
    var n = this, r = n.hasError, s = n.thrownError, o = n.isStopped;
    r ? e.error(s) : o && e.complete();
  }, t.prototype.asObservable = function() {
    var e = new k();
    return e.source = this, e;
  }, t.create = function(e, n) {
    return new fi(e, n);
  }, t;
}(k), fi = function(i15) {
  jt(t, i15);
  function t(e, n) {
    var r = i15.call(this) || this;
    return r.destination = e, r.source = n, r;
  }
  return t.prototype.next = function(e) {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, e);
  }, t.prototype.error = function(e) {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, e);
  }, t.prototype.complete = function() {
    var e, n;
    (n = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || n === void 0 || n.call(e);
  }, t.prototype._subscribe = function(e) {
    var n, r;
    return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e)) !== null && r !== void 0 ? r : Li;
  }, t;
}(Ui), Vi = {
  now: function() {
    return Date.now();
  },
  delegate: void 0
}, No = function(i15) {
  jt(t, i15);
  function t(e, n) {
    return i15.call(this) || this;
  }
  return t.prototype.schedule = function(e, n) {
    return this;
  }, t;
}(Fe), wn = {
  setInterval: function(i15, t) {
    for (var e = [], n = 2; n < arguments.length; n++)
      e[n - 2] = arguments[n];
    var r = wn.delegate;
    return r != null && r.setInterval ? r.setInterval.apply(r, Kt([i15, t], Ft(e))) : setInterval.apply(void 0, Kt([i15, t], Ft(e)));
  },
  clearInterval: function(i15) {
    return clearInterval(i15);
  },
  delegate: void 0
}, zo = function(i15) {
  jt(t, i15);
  function t(e, n) {
    var r = i15.call(this, e, n) || this;
    return r.scheduler = e, r.work = n, r.pending = false, r;
  }
  return t.prototype.schedule = function(e, n) {
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = e;
    var r = this.id, s = this.scheduler;
    return r != null && (this.id = this.recycleAsyncId(s, r, n)), this.pending = true, this.delay = n, this.id = this.id || this.requestAsyncId(s, this.id, n), this;
  }, t.prototype.requestAsyncId = function(e, n, r) {
    return r === void 0 && (r = 0), wn.setInterval(e.flush.bind(e, this), r);
  }, t.prototype.recycleAsyncId = function(e, n, r) {
    if (r === void 0 && (r = 0), r != null && this.delay === r && this.pending === false)
      return n;
    wn.clearInterval(n);
  }, t.prototype.execute = function(e, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = false;
    var r = this._execute(e, n);
    if (r)
      return r;
    this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(e, n) {
    var r = false, s;
    try {
      this.work(e);
    } catch (o) {
      r = true, s = o || new Error("Scheduled action threw falsy error");
    }
    if (r)
      return this.unsubscribe(), s;
  }, t.prototype.unsubscribe = function() {
    if (!this.closed) {
      var e = this, n = e.id, r = e.scheduler, s = r.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, mn(s, this), n != null && (this.id = this.recycleAsyncId(r, n, null)), this.delay = null, i15.prototype.unsubscribe.call(this);
    }
  }, t;
}(No), ci = function() {
  function i15(t, e) {
    e === void 0 && (e = i15.now), this.schedulerActionCtor = t, this.now = e;
  }
  return i15.prototype.schedule = function(t, e, n) {
    return e === void 0 && (e = 0), new this.schedulerActionCtor(this, t).schedule(n, e);
  }, i15.now = Vi.now, i15;
}(), Uo = function(i15) {
  jt(t, i15);
  function t(e, n) {
    n === void 0 && (n = ci.now);
    var r = i15.call(this, e, n) || this;
    return r.actions = [], r._active = false, r._scheduled = void 0, r;
  }
  return t.prototype.flush = function(e) {
    var n = this.actions;
    if (this._active) {
      n.push(e);
      return;
    }
    var r;
    this._active = true;
    do
      if (r = e.execute(e.state, e.delay))
        break;
    while (e = n.shift());
    if (this._active = false, r) {
      for (; e = n.shift(); )
        e.unsubscribe();
      throw r;
    }
  }, t;
}(ci), Xi = new Uo(zo), Vo = Xi, Ln = new k(function(i15) {
  return i15.complete();
});
function Yi(i15) {
  return i15 && M(i15.schedule);
}
function Tr(i15) {
  return i15[i15.length - 1];
}
function Xo(i15) {
  return M(Tr(i15)) ? i15.pop() : void 0;
}
function Fn(i15) {
  return Yi(Tr(i15)) ? i15.pop() : void 0;
}
function Yo(i15, t) {
  return typeof Tr(i15) == "number" ? i15.pop() : t;
}
var Mr = function(i15) {
  return i15 && typeof i15.length == "number" && typeof i15 != "function";
};
function Hi(i15) {
  return M(i15 == null ? void 0 : i15.then);
}
function Ri(i15) {
  return M(i15[Qr]);
}
function Ki(i15) {
  return Symbol.asyncIterator && M(i15 == null ? void 0 : i15[Symbol.asyncIterator]);
}
function Gi(i15) {
  return new TypeError("You provided " + (i15 !== null && typeof i15 == "object" ? "an invalid object" : "'" + i15 + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Ho() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var qi = Ho();
function Wi(i15) {
  return M(i15 == null ? void 0 : i15[qi]);
}
function ji(i15) {
  return Do(this, arguments, function() {
    var e, n, r, s;
    return Oi(this, function(o) {
      switch (o.label) {
        case 0:
          e = i15.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, De(e.read())];
        case 3:
          return n = o.sent(), r = n.value, s = n.done, s ? [4, De(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, De(r)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return e.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Ji(i15) {
  return M(i15 == null ? void 0 : i15.getReader);
}
function it(i15) {
  if (i15 instanceof k)
    return i15;
  if (i15 != null) {
    if (Ri(i15))
      return Ro(i15);
    if (Mr(i15))
      return Ko(i15);
    if (Hi(i15))
      return Go(i15);
    if (Ki(i15))
      return Zi(i15);
    if (Wi(i15))
      return qo(i15);
    if (Ji(i15))
      return Wo(i15);
  }
  throw Gi(i15);
}
function Ro(i15) {
  return new k(function(t) {
    var e = i15[Qr]();
    if (M(e.subscribe))
      return e.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Ko(i15) {
  return new k(function(t) {
    for (var e = 0; e < i15.length && !t.closed; e++)
      t.next(i15[e]);
    t.complete();
  });
}
function Go(i15) {
  return new k(function(t) {
    i15.then(function(e) {
      t.closed || (t.next(e), t.complete());
    }, function(e) {
      return t.error(e);
    }).then(null, zi);
  });
}
function qo(i15) {
  return new k(function(t) {
    var e, n;
    try {
      for (var r = he(i15), s = r.next(); !s.done; s = r.next()) {
        var o = s.value;
        if (t.next(o), t.closed)
          return;
      }
    } catch (a) {
      e = { error: a };
    } finally {
      try {
        s && !s.done && (n = r.return) && n.call(r);
      } finally {
        if (e)
          throw e.error;
      }
    }
    t.complete();
  });
}
function Zi(i15) {
  return new k(function(t) {
    jo(i15, t).catch(function(e) {
      return t.error(e);
    });
  });
}
function Wo(i15) {
  return Zi(ji(i15));
}
function jo(i15, t) {
  var e, n, r, s;
  return Bo(this, void 0, void 0, function() {
    var o, a;
    return Oi(this, function(u) {
      switch (u.label) {
        case 0:
          u.trys.push([0, 5, 6, 11]), e = Eo(i15), u.label = 1;
        case 1:
          return [4, e.next()];
        case 2:
          if (n = u.sent(), !!n.done)
            return [3, 4];
          if (o = n.value, t.next(o), t.closed)
            return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = u.sent(), r = { error: a }, [3, 11];
        case 6:
          return u.trys.push([6, , 9, 10]), n && !n.done && (s = e.return) ? [4, s.call(e)] : [3, 8];
        case 7:
          u.sent(), u.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (r)
            throw r.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function Pt(i15, t, e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = false);
  var s = t.schedule(function() {
    e(), r ? i15.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (i15.add(s), !r)
    return s;
}
function $i(i15, t) {
  return t === void 0 && (t = 0), K(function(e, n) {
    e.subscribe(N(n, function(r) {
      return Pt(n, i15, function() {
        return n.next(r);
      }, t);
    }, function() {
      return Pt(n, i15, function() {
        return n.complete();
      }, t);
    }, function(r) {
      return Pt(n, i15, function() {
        return n.error(r);
      }, t);
    }));
  });
}
function ts(i15, t) {
  return t === void 0 && (t = 0), K(function(e, n) {
    n.add(i15.schedule(function() {
      return e.subscribe(n);
    }, t));
  });
}
function Jo(i15, t) {
  return it(i15).pipe(ts(t), $i(t));
}
function Zo(i15, t) {
  return it(i15).pipe(ts(t), $i(t));
}
function $o(i15, t) {
  return new k(function(e) {
    var n = 0;
    return t.schedule(function() {
      n === i15.length ? e.complete() : (e.next(i15[n++]), e.closed || this.schedule());
    });
  });
}
function ta(i15, t) {
  return new k(function(e) {
    var n;
    return Pt(e, t, function() {
      n = i15[qi](), Pt(e, t, function() {
        var r, s, o;
        try {
          r = n.next(), s = r.value, o = r.done;
        } catch (a) {
          e.error(a);
          return;
        }
        o ? e.complete() : e.next(s);
      }, 0, true);
    }), function() {
      return M(n == null ? void 0 : n.return) && n.return();
    };
  });
}
function es(i15, t) {
  if (!i15)
    throw new Error("Iterable cannot be null");
  return new k(function(e) {
    Pt(e, t, function() {
      var n = i15[Symbol.asyncIterator]();
      Pt(e, t, function() {
        n.next().then(function(r) {
          r.done ? e.complete() : e.next(r.value);
        });
      }, 0, true);
    });
  });
}
function ea(i15, t) {
  return es(ji(i15), t);
}
function na(i15, t) {
  if (i15 != null) {
    if (Ri(i15))
      return Jo(i15, t);
    if (Mr(i15))
      return $o(i15, t);
    if (Hi(i15))
      return Zo(i15, t);
    if (Ki(i15))
      return es(i15, t);
    if (Wi(i15))
      return ta(i15, t);
    if (Ji(i15))
      return ea(i15, t);
  }
  throw Gi(i15);
}
function ut(i15, t) {
  return t ? na(i15, t) : it(i15);
}
function T() {
  for (var i15 = [], t = 0; t < arguments.length; t++)
    i15[t] = arguments[t];
  var e = Fn(i15);
  return ut(i15, e);
}
var Ir = On(function(i15) {
  return function() {
    i15(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function ns(i15) {
  return i15 instanceof Date && !isNaN(i15);
}
var ra = On(function(i15) {
  return function(e) {
    e === void 0 && (e = null), i15(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = e;
  };
});
function ia(i15, t) {
  var e = ns(i15) ? { first: i15 } : typeof i15 == "number" ? { each: i15 } : i15, n = e.first, r = e.each, s = e.with, o = s === void 0 ? sa : s, a = e.scheduler, u = a === void 0 ? t != null ? t : Xi : a, A = e.meta, l = A === void 0 ? null : A;
  if (n == null && r == null)
    throw new TypeError("No timeout provided.");
  return K(function(f, c) {
    var d, g, h = null, p = 0, v = function(y) {
      g = Pt(c, u, function() {
        try {
          d.unsubscribe(), it(o({
            meta: l,
            lastValue: h,
            seen: p
          })).subscribe(c);
        } catch (m) {
          c.error(m);
        }
      }, y);
    };
    d = f.subscribe(N(c, function(y) {
      g == null || g.unsubscribe(), p++, c.next(h = y), r > 0 && v(r);
    }, void 0, void 0, function() {
      g != null && g.closed || g == null || g.unsubscribe(), h = null;
    })), !p && v(n != null ? typeof n == "number" ? n : +n - u.now() : r);
  });
}
function sa(i15) {
  throw new ra(i15);
}
function J(i15, t) {
  return K(function(e, n) {
    var r = 0;
    e.subscribe(N(n, function(s) {
      n.next(i15.call(t, s, r++));
    }));
  });
}
var oa = Array.isArray;
function aa(i15, t) {
  return oa(t) ? i15.apply(void 0, Kt([], Ft(t))) : i15(t);
}
function rs(i15) {
  return J(function(t) {
    return aa(i15, t);
  });
}
var ua = Array.isArray, Aa = Object.getPrototypeOf, la = Object.prototype, fa = Object.keys;
function ca(i15) {
  if (i15.length === 1) {
    var t = i15[0];
    if (ua(t))
      return { args: t, keys: null };
    if (ha(t)) {
      var e = fa(t);
      return {
        args: e.map(function(n) {
          return t[n];
        }),
        keys: e
      };
    }
  }
  return { args: i15, keys: null };
}
function ha(i15) {
  return i15 && typeof i15 == "object" && Aa(i15) === la;
}
function da(i15, t) {
  return i15.reduce(function(e, n, r) {
    return e[n] = t[r], e;
  }, {});
}
function cn() {
  for (var i15 = [], t = 0; t < arguments.length; t++)
    i15[t] = arguments[t];
  var e = Fn(i15), n = Xo(i15), r = ca(i15), s = r.args, o = r.keys;
  if (s.length === 0)
    return ut([], e);
  var a = new k(ga(s, e, o ? function(u) {
    return da(o, u);
  } : pe));
  return n ? a.pipe(rs(n)) : a;
}
function ga(i15, t, e) {
  return e === void 0 && (e = pe), function(n) {
    hi(t, function() {
      for (var r = i15.length, s = new Array(r), o = r, a = r, u = function(l) {
        hi(t, function() {
          var f = ut(i15[l], t), c = false;
          f.subscribe(N(n, function(d) {
            s[l] = d, c || (c = true, a--), a || n.next(e(s.slice()));
          }, function() {
            --o || n.complete();
          }));
        }, n);
      }, A = 0; A < r; A++)
        u(A);
    }, n);
  };
}
function hi(i15, t, e) {
  i15 ? Pt(e, i15, t) : t();
}
function pa(i15, t, e, n, r, s, o, a) {
  var u = [], A = 0, l = 0, f = false, c = function() {
    f && !u.length && !A && t.complete();
  }, d = function(h) {
    return A < n ? g(h) : u.push(h);
  }, g = function(h) {
    s && t.next(h), A++;
    var p = false;
    it(e(h, l++)).subscribe(N(t, function(v) {
      r == null || r(v), s ? d(v) : t.next(v);
    }, function() {
      p = true;
    }, void 0, function() {
      if (p)
        try {
          A--;
          for (var v = function() {
            var y = u.shift();
            o ? Pt(t, o, function() {
              return g(y);
            }) : g(y);
          }; u.length && A < n; )
            v();
          c();
        } catch (y) {
          t.error(y);
        }
    }));
  };
  return i15.subscribe(N(t, d, function() {
    f = true, c();
  })), function() {
    a == null || a();
  };
}
function de(i15, t, e) {
  return e === void 0 && (e = 1 / 0), M(t) ? de(function(n, r) {
    return J(function(s, o) {
      return t(n, s, r, o);
    })(it(i15(n, r)));
  }, e) : (typeof t == "number" && (e = t), K(function(n, r) {
    return pa(n, r, i15, e);
  }));
}
function is(i15) {
  return i15 === void 0 && (i15 = 1 / 0), de(pe, i15);
}
function ma() {
  return is(1);
}
function ss() {
  for (var i15 = [], t = 0; t < arguments.length; t++)
    i15[t] = arguments[t];
  return ma()(ut(i15, Fn(i15)));
}
var va = ["addListener", "removeListener"], ya = ["addEventListener", "removeEventListener"], wa = ["on", "off"];
function kt(i15, t, e, n) {
  if (M(e) && (n = e, e = void 0), n)
    return kt(i15, t, e).pipe(rs(n));
  var r = Ft(Ca(i15) ? ya.map(function(a) {
    return function(u) {
      return i15[a](t, u, e);
    };
  }) : _a$2(i15) ? va.map(di(i15, t)) : ba(i15) ? wa.map(di(i15, t)) : [], 2), s = r[0], o = r[1];
  if (!s && Mr(i15))
    return de(function(a) {
      return kt(a, t, e);
    })(it(i15));
  if (!s)
    throw new TypeError("Invalid event target");
  return new k(function(a) {
    var u = function() {
      for (var A = [], l = 0; l < arguments.length; l++)
        A[l] = arguments[l];
      return a.next(1 < A.length ? A : A[0]);
    };
    return s(u), function() {
      return o(u);
    };
  });
}
function di(i15, t) {
  return function(e) {
    return function(n) {
      return i15[e](t, n);
    };
  };
}
function _a$2(i15) {
  return M(i15.addListener) && M(i15.removeListener);
}
function ba(i15) {
  return M(i15.on) && M(i15.off);
}
function Ca(i15) {
  return M(i15.addEventListener) && M(i15.removeEventListener);
}
function xa(i15, t, e) {
  i15 === void 0 && (i15 = 0), e === void 0 && (e = Vo);
  var n = -1;
  return t != null && (Yi(t) ? e = t : n = t), new k(function(r) {
    var s = ns(i15) ? +i15 - e.now() : i15;
    s < 0 && (s = 0);
    var o = 0;
    return e.schedule(function() {
      r.closed || (r.next(o++), 0 <= n ? this.schedule(void 0, n) : r.complete());
    }, s);
  });
}
function Sr() {
  for (var i15 = [], t = 0; t < arguments.length; t++)
    i15[t] = arguments[t];
  var e = Fn(i15), n = Yo(i15, 1 / 0), r = i15;
  return r.length ? r.length === 1 ? it(r[0]) : is(n)(ut(r, e)) : Ln;
}
var Ba = new k(vn), Da = Array.isArray;
function Ea(i15) {
  return i15.length === 1 && Da(i15[0]) ? i15[0] : i15;
}
function os(i15, t) {
  return K(function(e, n) {
    var r = 0;
    e.subscribe(N(n, function(s) {
      return i15.call(t, s, r++) && n.next(s);
    }));
  });
}
function Pa() {
  for (var i15 = [], t = 0; t < arguments.length; t++)
    i15[t] = arguments[t];
  return i15 = Ea(i15), i15.length === 1 ? it(i15[0]) : new k(Qa(i15));
}
function Qa(i15) {
  return function(t) {
    for (var e = [], n = function(s) {
      e.push(it(i15[s]).subscribe(N(t, function(o) {
        if (e) {
          for (var a = 0; a < e.length; a++)
            a !== s && e[a].unsubscribe();
          e = null;
        }
        t.next(o);
      })));
    }, r = 0; e && !t.closed && r < i15.length; r++)
      n(r);
  };
}
function ar(i15) {
  return K(function(t, e) {
    var n = null, r = false, s;
    n = t.subscribe(N(e, void 0, void 0, function(o) {
      s = it(i15(o, ar(i15)(t))), n ? (n.unsubscribe(), n = null, s.subscribe(e)) : r = true;
    })), r && (n.unsubscribe(), n = null, s.subscribe(e));
  });
}
function Ta(i15, t, e, n, r) {
  return function(s, o) {
    var a = e, u = t, A = 0;
    s.subscribe(N(o, function(l) {
      var f = A++;
      u = a ? i15(u, l, f) : (a = true, l), n && o.next(u);
    }, r && function() {
      a && o.next(u), o.complete();
    }));
  };
}
function ur(i15, t) {
  return K(Ta(i15, t, arguments.length >= 2, false, true));
}
function Ar(i15, t) {
  return M(t) ? de(i15, t, 1) : de(i15, 1);
}
function as(i15) {
  return K(function(t, e) {
    var n = false;
    t.subscribe(N(e, function(r) {
      n = true, e.next(r);
    }, function() {
      n || e.next(i15), e.complete();
    }));
  });
}
function Ye(i15) {
  return i15 <= 0 ? function() {
    return Ln;
  } : K(function(t, e) {
    var n = 0;
    t.subscribe(N(e, function(r) {
      ++n <= i15 && (e.next(r), i15 <= n && e.complete());
    }));
  });
}
function us(i15) {
  return i15 === void 0 && (i15 = Ma), K(function(t, e) {
    var n = false;
    t.subscribe(N(e, function(r) {
      n = true, e.next(r);
    }, function() {
      return n ? e.complete() : e.error(i15());
    }));
  });
}
function Ma() {
  return new Ir();
}
function As(i15, t) {
  return t ? function(e) {
    return e.pipe(As(function(n, r) {
      return it(i15(n, r)).pipe(J(function(s, o) {
        return t(n, s, r, o);
      }));
    }));
  } : K(function(e, n) {
    var r = 0, s = null, o = false;
    e.subscribe(N(n, function(a) {
      s || (s = N(n, void 0, function() {
        s = null, o && n.complete();
      }), it(i15(a, r++)).subscribe(s));
    }, function() {
      o = true, !s && n.complete();
    }));
  });
}
function ls(i15) {
  return K(function(t, e) {
    try {
      t.subscribe(e);
    } finally {
      e.add(i15);
    }
  });
}
function _n(i15, t) {
  var e = arguments.length >= 2;
  return function(n) {
    return n.pipe(i15 ? os(function(r, s) {
      return i15(r, s, n);
    }) : pe, Ye(1), e ? as(t) : us(function() {
      return new Ir();
    }));
  };
}
function Ia(i15) {
  return i15 <= 0 ? function() {
    return Ln;
  } : K(function(t, e) {
    var n = [];
    t.subscribe(N(e, function(r) {
      n.push(r), i15 < n.length && n.shift();
    }, function() {
      var r, s;
      try {
        for (var o = he(n), a = o.next(); !a.done; a = o.next()) {
          var u = a.value;
          e.next(u);
        }
      } catch (A) {
        r = { error: A };
      } finally {
        try {
          a && !a.done && (s = o.return) && s.call(o);
        } finally {
          if (r)
            throw r.error;
        }
      }
      e.complete();
    }, void 0, function() {
      n = null;
    }));
  });
}
function fs(i15, t) {
  var e = arguments.length >= 2;
  return function(n) {
    return n.pipe(i15 ? os(function(r, s) {
      return i15(r, s, n);
    }) : pe, Ia(1), e ? as(t) : us(function() {
      return new Ir();
    }));
  };
}
function Sa(i15) {
  return ur(M(i15) ? function(t, e) {
    return i15(t, e) > 0 ? t : e;
  } : function(t, e) {
    return t > e ? t : e;
  });
}
function ka(i15) {
  var t, e = 1 / 0, n;
  return i15 != null && (typeof i15 == "object" ? (t = i15.count, e = t === void 0 ? 1 / 0 : t, n = i15.delay) : e = i15), e <= 0 ? function() {
    return Ln;
  } : K(function(r, s) {
    var o = 0, a, u = function() {
      if (a == null || a.unsubscribe(), a = null, n != null) {
        var l = typeof n == "number" ? xa(n) : it(n(o)), f = N(s, function() {
          f.unsubscribe(), A();
        });
        l.subscribe(f);
      } else
        A();
    }, A = function() {
      var l = false;
      a = r.subscribe(N(s, void 0, function() {
        ++o < e ? a ? u() : l = true : s.complete();
      })), l && u();
    };
    A();
  });
}
function Ge(i15) {
  i15 === void 0 && (i15 = {});
  var t = i15.connector, e = t === void 0 ? function() {
    return new Ui();
  } : t, n = i15.resetOnError, r = n === void 0 ? true : n, s = i15.resetOnComplete, o = s === void 0 ? true : s, a = i15.resetOnRefCountZero, u = a === void 0 ? true : a;
  return function(A) {
    var l = null, f = null, c = null, d = 0, g = false, h = false, p = function() {
      f == null || f.unsubscribe(), f = null;
    }, v = function() {
      p(), l = c = null, g = h = false;
    }, y = function() {
      var m = l;
      v(), m == null || m.unsubscribe();
    };
    return K(function(m, _) {
      d++, !h && !g && p();
      var w = c = c != null ? c : e();
      _.add(function() {
        d--, d === 0 && !h && !g && (f = Gn(y, u));
      }), w.subscribe(_), l || (l = new yn({
        next: function(B) {
          return w.next(B);
        },
        error: function(B) {
          h = true, p(), f = Gn(v, r, B), w.error(B);
        },
        complete: function() {
          g = true, p(), f = Gn(v, o), w.complete();
        }
      }), ut(m).subscribe(l));
    })(A);
  };
}
function Gn(i15, t) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  return t === true ? (i15(), null) : t === false ? null : t.apply(void 0, Kt([], Ft(e))).pipe(Ye(1)).subscribe(function() {
    return i15();
  });
}
function ot(i15, t) {
  return K(function(e, n) {
    var r = null, s = 0, o = false, a = function() {
      return o && !r && n.complete();
    };
    e.subscribe(N(n, function(u) {
      r == null || r.unsubscribe();
      var A = 0, l = s++;
      it(i15(u, l)).subscribe(r = N(n, function(f) {
        return n.next(t ? t(u, f, l, A++) : f);
      }, function() {
        r = null, a();
      }));
    }, function() {
      o = true, a();
    }));
  });
}
function Oa(i15) {
  return K(function(t, e) {
    it(i15).subscribe(N(e, function() {
      return e.complete();
    }, vn)), !e.closed && t.subscribe(e);
  });
}
function La(i15, t) {
  return t === void 0 && (t = false), K(function(e, n) {
    var r = 0;
    e.subscribe(N(n, function(s) {
      var o = i15(s, r++);
      (o || t) && n.next(s), !o && n.complete();
    }));
  });
}
function Nn(i15, t, e) {
  var n = M(i15) || t || e ? { next: i15, error: t, complete: e } : i15;
  return n ? K(function(r, s) {
    var o;
    (o = n.subscribe) === null || o === void 0 || o.call(n);
    var a = true;
    r.subscribe(N(s, function(u) {
      var A;
      (A = n.next) === null || A === void 0 || A.call(n, u), s.next(u);
    }, function() {
      var u;
      a = false, (u = n.complete) === null || u === void 0 || u.call(n), s.complete();
    }, function(u) {
      var A;
      a = false, (A = n.error) === null || A === void 0 || A.call(n, u), s.error(u);
    }, function() {
      var u, A;
      a && ((u = n.unsubscribe) === null || u === void 0 || u.call(n)), (A = n.finalize) === null || A === void 0 || A.call(n);
    }));
  }) : pe;
}
function It(i15) {
  if (i15 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i15;
}
function cs(i15, t) {
  i15.prototype = Object.create(t.prototype), i15.prototype.constructor = i15, i15.__proto__ = t;
}
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var pt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Te = {
  duration: 0.5,
  overwrite: false,
  delay: 0
}, kr, At, R, _t = 1e8, I = 1 / _t, lr = Math.PI * 2, Fa = lr / 4, Na = 0, hs = Math.sqrt, za = Math.cos, Ua = Math.sin, Z = function(t) {
  return typeof t == "string";
}, U = function(t) {
  return typeof t == "function";
}, Nt = function(t) {
  return typeof t == "number";
}, Or = function(t) {
  return typeof t > "u";
}, Tt = function(t) {
  return typeof t == "object";
}, lt = function(t) {
  return t !== false;
}, ds = function() {
  return typeof window < "u";
}, An = function(t) {
  return U(t) || Z(t);
}, gs = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, nt = Array.isArray, fr = /(?:-?\.?\d|\.)+/gi, ps = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ce = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, qn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ms = /[+-]=-?[.\d]+/, vs = /[^,'"\[\]\s]+/gi, Va = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, L, wt, cr, Lr, mt = {}, bn = {}, ys, ws = function(t) {
  return (bn = ge(t, mt)) && vt;
}, Fr = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Cn = function(t, e) {
  return !e && console.warn(t);
}, _s = function(t, e) {
  return t && (mt[t] = e) && bn && (bn[t] = e) || mt;
}, qe = function() {
  return 0;
}, Xa = {
  suppressEvents: true,
  isStart: true,
  kill: false
}, hn = {
  suppressEvents: true,
  kill: false
}, Ya = {
  suppressEvents: true
}, Nr = {}, Ht = [], hr = {}, bs, ht = {}, Wn = {}, gi = 30, dn = [], zr = "", Ur = function(t) {
  var e = t[0], n, r;
  if (Tt(e) || U(e) || (t = [t]), !(n = (e._gsap || {}).harness)) {
    for (r = dn.length; r-- && !dn[r].targetTest(e); )
      ;
    n = dn[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new Hs(t[r], n))) || t.splice(r, 1);
  return t;
}, Ae = function(t) {
  return t._gsap || Ur(bt(t))[0]._gsap;
}, Cs = function(t, e, n) {
  return (n = t[e]) && U(n) ? t[e]() : Or(n) && t.getAttribute && t.getAttribute(e) || n;
}, ft = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, V = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, $ = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, Ee = function(t, e) {
  var n = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), n === "+" ? t + r : n === "-" ? t - r : n === "*" ? t * r : t / r;
}, Ha = function(t, e) {
  for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; )
    ;
  return r < n;
}, xn = function() {
  var t = Ht.length, e = Ht.slice(0), n, r;
  for (hr = {}, Ht.length = 0, n = 0; n < t; n++)
    r = e[n], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], true)._lazy = 0);
}, xs = function(t, e, n, r) {
  Ht.length && xn(), t.render(e, n, r || At && e < 0 && (t._initted || t._startAt)), Ht.length && xn();
}, Bs = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(vs).length < 2 ? e : Z(t) ? t.trim() : t;
}, Ds = function(t) {
  return t;
}, xt = function(t, e) {
  for (var n in e)
    n in t || (t[n] = e[n]);
  return t;
}, Ra = function(t) {
  return function(e, n) {
    for (var r in n)
      r in e || r === "duration" && t || r === "ease" || (e[r] = n[r]);
  };
}, ge = function(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}, pi = function i(t, e) {
  for (var n in e)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = Tt(e[n]) ? i(t[n] || (t[n] = {}), e[n]) : e[n]);
  return t;
}, Bn = function(t, e) {
  var n = {}, r;
  for (r in t)
    r in e || (n[r] = t[r]);
  return n;
}, He = function(t) {
  var e = t.parent || L, n = t.keyframes ? Ra(nt(t.keyframes)) : xt;
  if (lt(t.inherit))
    for (; e; )
      n(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Ka = function(t, e) {
  for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n]; )
    ;
  return n < 0;
}, Es = function(t, e, n, r, s) {
  n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
  var o = t[r], a;
  if (s)
    for (a = e[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = o, e.parent = e._dp = t, e;
}, zn = function(t, e, n, r) {
  n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
  var s = e._prev, o = e._next;
  s ? s._next = o : t[n] === e && (t[n] = o), o ? o._prev = s : t[r] === e && (t[r] = s), e._next = e._prev = e.parent = null;
}, Gt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
}, le = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var n = t; n; )
      n._dirty = 1, n = n.parent;
  return t;
}, Ga = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, dr = function(t, e, n, r) {
  return t._startAt && (At ? t._startAt.revert(hn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, true, r));
}, qa = function i2(t) {
  return !t || t._ts && i2(t.parent);
}, mi = function(t) {
  return t._repeat ? Me(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Me = function(t, e) {
  var n = Math.floor(t /= e);
  return t && n === t ? n - 1 : n;
}, Dn = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Un = function(t) {
  return t._end = $(t._start + (t._tDur / Math.abs(t._ts || t._rts || I) || 0));
}, Vn = function(t, e) {
  var n = t._dp;
  return n && n.smoothChildTiming && t._ts && (t._start = $(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Un(t), n._dirty || le(n, t)), t;
}, Ps = function(t, e) {
  var n;
  if ((e._time || e._initted && !e._dur) && (n = Dn(t.rawTime(), e), (!e._dur || en(0, e.totalDuration(), n) - e._tTime > I) && e.render(n, true)), le(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (n = t; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    t._zTime = -I;
  }
}, Et = function(t, e, n, r) {
  return e.parent && Gt(e), e._start = $((Nt(n) ? n : n || t !== L ? yt(t, n, e) : t._time) + e._delay), e._end = $(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Es(t, e, "_first", "_last", t._sort ? "_start" : 0), gr(e) || (t._recent = e), r || Ps(t, e), t._ts < 0 && Vn(t, t._tTime), t;
}, Qs = function(t, e) {
  return (mt.ScrollTrigger || Fr("scrollTrigger", e)) && mt.ScrollTrigger.create(e, t);
}, Ts = function(t, e, n, r, s) {
  if (Xr(t, e, s), !t._initted)
    return 1;
  if (!n && t._pt && !At && (t._dur && t.vars.lazy !== false || !t._dur && t.vars.lazy) && bs !== dt.frame)
    return Ht.push(t), t._lazy = [s, r], 1;
}, Wa = function i3(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || i3(e));
}, gr = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, ja = function(t, e, n, r) {
  var s = t.ratio, o = e < 0 || !e && (!t._start && Wa(t) && !(!t._initted && gr(t)) || (t._ts < 0 || t._dp._ts < 0) && !gr(t)) ? 0 : 1, a = t._rDelay, u = 0, A, l, f;
  if (a && t._repeat && (u = en(0, t._tDur, e), l = Me(u, a), t._yoyo && l & 1 && (o = 1 - o), l !== Me(t._tTime, a) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || At || r || t._zTime === I || !e && t._zTime) {
    if (!t._initted && Ts(t, e, r, n, u))
      return;
    for (f = t._zTime, t._zTime = e || (n ? I : 0), n || (n = e && !f), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = u, A = t._pt; A; )
      A.r(o, A.d), A = A._next;
    e < 0 && dr(t, e, n, true), t._onUpdate && !n && Ct(t, "onUpdate"), u && t._repeat && !n && t.parent && Ct(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Gt(t, 1), !n && !At && (Ct(t, o ? "onComplete" : "onReverseComplete", true), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, Ja = function(t, e, n) {
  var r;
  if (n > e)
    for (r = t._first; r && r._start <= n; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= n; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, Ie = function(t, e, n, r) {
  var s = t._repeat, o = $(e) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = s ? s < 0 ? 1e10 : $(o * (s + 1) + t._rDelay * s) : o, a > 0 && !r && Vn(t, t._tTime = t._tDur * a), t.parent && Un(t), n || le(t.parent, t), t;
}, vi = function(t) {
  return t instanceof at ? le(t) : Ie(t, t._dur);
}, Za = {
  _start: 0,
  endTime: qe,
  totalDuration: qe
}, yt = function i4(t, e, n) {
  var r = t.labels, s = t._recent || Za, o = t.duration() >= _t ? s.endTime(false) : t._dur, a, u, A;
  return Z(e) && (isNaN(e) || e in r) ? (u = e.charAt(0), A = e.substr(-1) === "%", a = e.indexOf("="), u === "<" || u === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (u === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (A ? (a < 0 ? s : n).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = o), r[e]) : (u = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), A && n && (u = u / 100 * (nt(n) ? n[0] : n).totalDuration()), a > 1 ? i4(t, e.substr(0, a - 1), n) + u : o + u)) : e == null ? o : +e;
}, Re = function(t, e, n) {
  var r = Nt(e[1]), s = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = e[s], a, u;
  if (r && (o.duration = e[1]), o.parent = n, t) {
    for (a = o, u = n; u && !("immediateRender" in a); )
      a = u.vars.defaults || {}, u = lt(u.vars.inherit) && u.parent;
    o.immediateRender = lt(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1];
  }
  return new j(e[0], o, e[s + 1]);
}, Jt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, en = function(t, e, n) {
  return n < t ? t : n > e ? e : n;
}, et = function(t, e) {
  return !Z(t) || !(e = Va.exec(t)) ? "" : e[1];
}, $a = function(t, e, n) {
  return Jt(n, function(r) {
    return en(t, e, r);
  });
}, pr = [].slice, Ms = function(t, e) {
  return t && Tt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Tt(t[0])) && !t.nodeType && t !== wt;
}, tu = function(t, e, n) {
  return n === void 0 && (n = []), t.forEach(function(r) {
    var s;
    return Z(r) && !e || Ms(r, 1) ? (s = n).push.apply(s, bt(r)) : n.push(r);
  }) || n;
}, bt = function(t, e, n) {
  return R && !e && R.selector ? R.selector(t) : Z(t) && !n && (cr || !Se()) ? pr.call((e || Lr).querySelectorAll(t), 0) : nt(t) ? tu(t, n) : Ms(t) ? pr.call(t, 0) : t ? [t] : [];
}, mr = function(t) {
  return t = bt(t)[0] || Cn("Invalid scope") || {}, function(e) {
    var n = t.current || t.nativeElement || t;
    return bt(e, n.querySelectorAll ? n : n === t ? Cn("Invalid scope") || Lr.createElement("div") : t);
  };
}, Is = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Ss = function(t) {
  if (U(t))
    return t;
  var e = Tt(t) ? t : {
    each: t
  }, n = fe(e.ease), r = e.from || 0, s = parseFloat(e.base) || 0, o = {}, a = r > 0 && r < 1, u = isNaN(r) || a, A = e.axis, l = r, f = r;
  return Z(r) ? l = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && u && (l = r[0], f = r[1]), function(c, d, g) {
    var h = (g || e).length, p = o[h], v, y, m, _, w, B, D, x, b;
    if (!p) {
      if (b = e.grid === "auto" ? 0 : (e.grid || [1, _t])[1], !b) {
        for (D = -_t; D < (D = g[b++].getBoundingClientRect().left) && b < h; )
          ;
        b--;
      }
      for (p = o[h] = [], v = u ? Math.min(b, h) * l - 0.5 : r % b, y = b === _t ? 0 : u ? h * f / b - 0.5 : r / b | 0, D = 0, x = _t, B = 0; B < h; B++)
        m = B % b - v, _ = y - (B / b | 0), p[B] = w = A ? Math.abs(A === "y" ? _ : m) : hs(m * m + _ * _), w > D && (D = w), w < x && (x = w);
      r === "random" && Is(p), p.max = D - x, p.min = x, p.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (b > h ? h - 1 : A ? A === "y" ? h / b : b : Math.max(b, h / b)) || 0) * (r === "edges" ? -1 : 1), p.b = h < 0 ? s - h : s, p.u = et(e.amount || e.each) || 0, n = n && h < 0 ? Vs(n) : n;
    }
    return h = (p[c] - p.min) / p.max || 0, $(p.b + (n ? n(h) : h) * p.v) + p.u;
  };
}, vr = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(n) {
    var r = $(Math.round(parseFloat(n) / t) * t * e);
    return (r - r % 1) / e + (Nt(n) ? 0 : et(n));
  };
}, ks = function(t, e) {
  var n = nt(t), r, s;
  return !n && Tt(t) && (r = n = t.radius || _t, t.values ? (t = bt(t.values), (s = !Nt(t[0])) && (r *= r)) : t = vr(t.increment)), Jt(e, n ? U(t) ? function(o) {
    return s = t(o), Math.abs(s - o) <= r ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), u = parseFloat(s ? o.y : 0), A = _t, l = 0, f = t.length, c, d; f--; )
      s ? (c = t[f].x - a, d = t[f].y - u, c = c * c + d * d) : c = Math.abs(t[f] - a), c < A && (A = c, l = f);
    return l = !r || A <= r ? t[l] : o, s || l === o || Nt(o) ? l : l + et(o);
  } : vr(t));
}, Os = function(t, e, n, r) {
  return Jt(nt(t) ? !e : n === true ? !!(n = 0) : !r, function() {
    return nt(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + n * 0.99)) / n) * n * r) / r;
  });
}, eu = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return function(r) {
    return e.reduce(function(s, o) {
      return o(s);
    }, r);
  };
}, nu = function(t, e) {
  return function(n) {
    return t(parseFloat(n)) + (e || et(n));
  };
}, ru = function(t, e, n) {
  return Fs(t, e, 0, 1, n);
}, Ls = function(t, e, n) {
  return Jt(n, function(r) {
    return t[~~e(r)];
  });
}, iu = function i5(t, e, n) {
  var r = e - t;
  return nt(t) ? Ls(t, i5(0, t.length), e) : Jt(n, function(s) {
    return (r + (s - t) % r) % r + t;
  });
}, su = function i6(t, e, n) {
  var r = e - t, s = r * 2;
  return nt(t) ? Ls(t, i6(0, t.length - 1), e) : Jt(n, function(o) {
    return o = (s + (o - t) % s) % s || 0, t + (o > r ? s - o : o);
  });
}, We = function(t) {
  for (var e = 0, n = "", r, s, o, a; ~(r = t.indexOf("random(", e)); )
    o = t.indexOf(")", r), a = t.charAt(r + 7) === "[", s = t.substr(r + 7, o - r - 7).match(a ? vs : fr), n += t.substr(e, r - e) + Os(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), e = o + 1;
  return n + t.substr(e, t.length - e);
}, Fs = function(t, e, n, r, s) {
  var o = e - t, a = r - n;
  return Jt(s, function(u) {
    return n + ((u - t) / o * a || 0);
  });
}, ou = function i7(t, e, n, r) {
  var s = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!s) {
    var o = Z(t), a = {}, u, A, l, f, c;
    if (n === true && (r = 1) && (n = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (nt(t) && !nt(e)) {
      for (l = [], f = t.length, c = f - 2, A = 1; A < f; A++)
        l.push(i7(t[A - 1], t[A]));
      f--, s = function(g) {
        g *= f;
        var h = Math.min(c, ~~g);
        return l[h](g - h);
      }, n = e;
    } else
      r || (t = ge(nt(t) ? [] : {}, t));
    if (!l) {
      for (u in e)
        Vr.call(a, t, u, "get", e[u]);
      s = function(g) {
        return Rr(g, a) || (o ? t.p : t);
      };
    }
  }
  return Jt(n, s);
}, yi = function(t, e, n) {
  var r = t.labels, s = _t, o, a, u;
  for (o in r)
    a = r[o] - e, a < 0 == !!n && a && s > (a = Math.abs(a)) && (u = o, s = a);
  return u;
}, Ct = function(t, e, n) {
  var r = t.vars, s = r[e], o = R, a = t._ctx, u, A, l;
  if (!!s)
    return u = r[e + "Params"], A = r.callbackScope || t, n && Ht.length && xn(), a && (R = a), l = u ? s.apply(A, u) : s.call(A), R = o, l;
}, Ve = function(t) {
  return Gt(t), t.scrollTrigger && t.scrollTrigger.kill(!!At), t.progress() < 1 && Ct(t, "onInterrupt"), t;
}, xe, au = function(t) {
  t = !t.name && t.default || t;
  var e = t.name, n = U(t), r = e && !n && t.init ? function() {
    this._props = [];
  } : t, s = {
    init: qe,
    render: Rr,
    add: Vr,
    kill: Cu,
    modifier: bu,
    rawVars: 0
  }, o = {
    targetTest: 0,
    get: 0,
    getSetter: Hr,
    aliases: {},
    register: 0
  };
  if (Se(), t !== r) {
    if (ht[e])
      return;
    xt(r, xt(Bn(t, s), o)), ge(r.prototype, ge(s, Bn(t, o))), ht[r.prop = e] = r, t.targetTest && (dn.push(r), Nr[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
  }
  _s(e, r), t.register && t.register(vt, r, ct);
}, S = 255, Xe = {
  aqua: [0, S, S],
  lime: [0, S, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, S],
  navy: [0, 0, 128],
  white: [S, S, S],
  olive: [128, 128, 0],
  yellow: [S, S, 0],
  orange: [S, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [S, 0, 0],
  pink: [S, 192, 203],
  cyan: [0, S, S],
  transparent: [S, S, S, 0]
}, jn = function(t, e, n) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : t * 3 < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * S + 0.5 | 0;
}, Ns = function(t, e, n) {
  var r = t ? Nt(t) ? [t >> 16, t >> 8 & S, t & S] : 0 : Xe.black, s, o, a, u, A, l, f, c, d, g;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Xe[t])
      r = Xe[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + s + s + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & S, r & S, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & S, t & S];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = g = t.match(fr), !e)
        u = +r[0] % 360 / 360, A = +r[1] / 100, l = +r[2] / 100, o = l <= 0.5 ? l * (A + 1) : l + A - l * A, s = l * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = jn(u + 1 / 3, s, o), r[1] = jn(u, s, o), r[2] = jn(u - 1 / 3, s, o);
      else if (~t.indexOf("="))
        return r = t.match(ps), n && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(fr) || Xe.transparent;
    r = r.map(Number);
  }
  return e && !g && (s = r[0] / S, o = r[1] / S, a = r[2] / S, f = Math.max(s, o, a), c = Math.min(s, o, a), l = (f + c) / 2, f === c ? u = A = 0 : (d = f - c, A = l > 0.5 ? d / (2 - f - c) : d / (f + c), u = f === s ? (o - a) / d + (o < a ? 6 : 0) : f === o ? (a - s) / d + 2 : (s - o) / d + 4, u *= 60), r[0] = ~~(u + 0.5), r[1] = ~~(A * 100 + 0.5), r[2] = ~~(l * 100 + 0.5)), n && r.length < 4 && (r[3] = 1), r;
}, zs = function(t) {
  var e = [], n = [], r = -1;
  return t.split(Rt).forEach(function(s) {
    var o = s.match(Ce) || [];
    e.push.apply(e, o), n.push(r += o.length + 1);
  }), e.c = n, e;
}, wi = function(t, e, n) {
  var r = "", s = (t + r).match(Rt), o = e ? "hsla(" : "rgba(", a = 0, u, A, l, f;
  if (!s)
    return t;
  if (s = s.map(function(c) {
    return (c = Ns(c, e, 1)) && o + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), n && (l = zs(t), u = n.c, u.join(r) !== l.c.join(r)))
    for (A = t.replace(Rt, "1").split(Ce), f = A.length - 1; a < f; a++)
      r += A[a] + (~u.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (l.length ? l : s.length ? s : n).shift());
  if (!A)
    for (A = t.split(Rt), f = A.length - 1; a < f; a++)
      r += A[a] + s[a];
  return r + A[f];
}, Rt = function() {
  var i15 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Xe)
    i15 += "|" + t + "\\b";
  return new RegExp(i15 + ")", "gi");
}(), uu = /hsl[a]?\(/, Us = function(t) {
  var e = t.join(" "), n;
  if (Rt.lastIndex = 0, Rt.test(e))
    return n = uu.test(e), t[1] = wi(t[1], n), t[0] = wi(t[0], n, zs(t[1])), true;
}, je, dt = function() {
  var i15 = Date.now, t = 500, e = 33, n = i15(), r = n, s = 1e3 / 240, o = s, a = [], u, A, l, f, c, d, g = function h(p) {
    var v = i15() - r, y = p === true, m, _, w, B;
    if (v > t && (n += v - e), r += v, w = r - n, m = w - o, (m > 0 || y) && (B = ++f.frame, c = w - f.time * 1e3, f.time = w = w / 1e3, o += m + (m >= s ? 4 : s - m), _ = 1), y || (u = A(h)), _)
      for (d = 0; d < a.length; d++)
        a[d](w, c, B, p);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      g(true);
    },
    deltaRatio: function(p) {
      return c / (1e3 / (p || 60));
    },
    wake: function() {
      ys && (!cr && ds() && (wt = cr = window, Lr = wt.document || {}, mt.gsap = vt, (wt.gsapVersions || (wt.gsapVersions = [])).push(vt.version), ws(bn || wt.GreenSockGlobals || !wt.gsap && wt || {}), l = wt.requestAnimationFrame), u && f.sleep(), A = l || function(p) {
        return setTimeout(p, o - f.time * 1e3 + 1 | 0);
      }, je = 1, g(2));
    },
    sleep: function() {
      (l ? wt.cancelAnimationFrame : clearTimeout)(u), je = 0, A = qe;
    },
    lagSmoothing: function(p, v) {
      t = p || 1 / I, e = Math.min(v, t, 0);
    },
    fps: function(p) {
      s = 1e3 / (p || 240), o = f.time * 1e3 + s;
    },
    add: function(p, v, y) {
      var m = v ? function(_, w, B, D) {
        p(_, w, B, D), f.remove(m);
      } : p;
      return f.remove(p), a[y ? "unshift" : "push"](m), Se(), m;
    },
    remove: function(p, v) {
      ~(v = a.indexOf(p)) && a.splice(v, 1) && d >= v && d--;
    },
    _listeners: a
  }, f;
}(), Se = function() {
  return !je && dt.wake();
}, E = {}, Au = /^[\d.\-M][\d.\-,\s]/, lu = /["']/g, fu = function(t) {
  for (var e = {}, n = t.substr(1, t.length - 3).split(":"), r = n[0], s = 1, o = n.length, a, u, A; s < o; s++)
    u = n[s], a = s !== o - 1 ? u.lastIndexOf(",") : u.length, A = u.substr(0, a), e[r] = isNaN(A) ? A.replace(lu, "").trim() : +A, r = u.substr(a + 1).trim();
  return e;
}, cu = function(t) {
  var e = t.indexOf("(") + 1, n = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < n ? t.indexOf(")", n + 1) : n);
}, hu = function(t) {
  var e = (t + "").split("("), n = E[e[0]];
  return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [fu(e[1])] : cu(t).split(",").map(Bs)) : E._CE && Au.test(t) ? E._CE("", t) : n;
}, Vs = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Xs = function i8(t, e) {
  for (var n = t._first, r; n; )
    n instanceof at ? i8(n, e) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== e && (n.timeline ? i8(n.timeline, e) : (r = n._ease, n._ease = n._yEase, n._yEase = r, n._yoyo = e)), n = n._next;
}, fe = function(t, e) {
  return t && (U(t) ? t : E[t] || hu(t)) || e;
}, me = function(t, e, n, r) {
  n === void 0 && (n = function(u) {
    return 1 - e(1 - u);
  }), r === void 0 && (r = function(u) {
    return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
  });
  var s = {
    easeIn: e,
    easeOut: n,
    easeInOut: r
  }, o;
  return ft(t, function(a) {
    E[a] = mt[a] = s, E[o = a.toLowerCase()] = n;
    for (var u in s)
      E[o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = E[a + "." + u] = s[u];
  }), s;
}, Ys = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Jn = function i9(t, e, n) {
  var r = e >= 1 ? e : 1, s = (n || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = s / lr * (Math.asin(1 / r) || 0), a = function(l) {
    return l === 1 ? 1 : r * Math.pow(2, -10 * l) * Ua((l - o) * s) + 1;
  }, u = t === "out" ? a : t === "in" ? function(A) {
    return 1 - a(1 - A);
  } : Ys(a);
  return s = lr / s, u.config = function(A, l) {
    return i9(t, A, l);
  }, u;
}, Zn = function i10(t, e) {
  e === void 0 && (e = 1.70158);
  var n = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, r = t === "out" ? n : t === "in" ? function(s) {
    return 1 - n(1 - s);
  } : Ys(n);
  return r.config = function(s) {
    return i10(t, s);
  }, r;
};
ft("Linear,Quad,Cubic,Quart,Quint,Strong", function(i15, t) {
  var e = t < 5 ? t + 1 : t;
  me(i15 + ",Power" + (e - 1), t ? function(n) {
    return Math.pow(n, e);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, e);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, e) / 2 : 1 - Math.pow((1 - n) * 2, e) / 2;
  });
});
E.Linear.easeNone = E.none = E.Linear.easeIn;
me("Elastic", Jn("in"), Jn("out"), Jn());
(function(i15, t) {
  var e = 1 / t, n = 2 * e, r = 2.5 * e, s = function(a) {
    return a < e ? i15 * a * a : a < n ? i15 * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? i15 * (a -= 2.25 / t) * a + 0.9375 : i15 * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  me("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
me("Expo", function(i15) {
  return i15 ? Math.pow(2, 10 * (i15 - 1)) : 0;
});
me("Circ", function(i15) {
  return -(hs(1 - i15 * i15) - 1);
});
me("Sine", function(i15) {
  return i15 === 1 ? 1 : -za(i15 * Fa) + 1;
});
me("Back", Zn("in"), Zn("out"), Zn());
E.SteppedEase = E.steps = mt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var n = 1 / t, r = t + (e ? 0 : 1), s = e ? 1 : 0, o = 1 - I;
    return function(a) {
      return ((r * en(0, o, a) | 0) + s) * n;
    };
  }
};
Te.ease = E["quad.out"];
ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i15) {
  return zr += i15 + "," + i15 + "Params,";
});
var Hs = function(t, e) {
  this.id = Na++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Cs, this.set = e ? e.getSetter : Hr;
}, ke = /* @__PURE__ */ function() {
  function i15(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ie(this, +e.duration, 1, 1), this.data = e.data, R && (this._ctx = R, R.data.push(this)), je || dt.wake();
  }
  var t = i15.prototype;
  return t.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, t.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, Ie(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(n, r) {
    if (Se(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Vn(this, n), !s._dp || s.parent || Ps(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, true), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Et(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !r || this._initted && Math.abs(this._zTime) === I || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), xs(this, n, r)), this;
  }, t.time = function(n, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + mi(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(n, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(n, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + mi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(n, r) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * s, r) : this._repeat ? Me(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(n) {
    if (!arguments.length)
      return this._rts === -I ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var r = this.parent && this._ts ? Dn(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -I ? 0 : this._rts, this.totalTime(en(-this._delay, this._tDur, r), true), Un(this), Ga(this);
  }, t.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Se(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== I && (this._tTime -= I)))), this) : this._ps;
  }, t.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && Et(r, this, n - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(n) {
    return this._start + (lt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(n) {
    var r = this.parent || this._dp;
    return r ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Dn(r.rawTime(n), this) : this._tTime : this._tTime;
  }, t.revert = function(n) {
    n === void 0 && (n = Ya);
    var r = At;
    return At = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== false && this.kill(), At = r, this;
  }, t.globalTime = function(n) {
    for (var r = this, s = arguments.length ? n : r.rawTime(); r; )
      s = r._start + s / (r._ts || 1), r = r._dp;
    return !this.parent && this.vars.immediateRender ? -1 : s;
  }, t.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, vi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(n) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = n, vi(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, t.seek = function(n, r) {
    return this.totalTime(yt(this, n), lt(r));
  }, t.restart = function(n, r) {
    return this.play().totalTime(n ? -this._delay : 0, lt(r));
  }, t.play = function(n, r) {
    return n != null && this.seek(n, r), this.reversed(false).paused(false);
  }, t.reverse = function(n, r) {
    return n != null && this.seek(n || this.totalDuration(), r), this.reversed(true).paused(false);
  }, t.pause = function(n, r) {
    return n != null && this.seek(n, r), this.paused(true);
  }, t.resume = function() {
    return this.paused(false);
  }, t.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -I : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -I, this;
  }, t.isActive = function() {
    var n = this.parent || this._dp, r = this._start, s;
    return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(true)) >= r && s < this.endTime(true) - I);
  }, t.eventCallback = function(n, r, s) {
    var o = this.vars;
    return arguments.length > 1 ? (r ? (o[n] = r, s && (o[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = r)) : delete o[n], this) : o[n];
  }, t.then = function(n) {
    var r = this;
    return new Promise(function(s) {
      var o = U(n) ? n : Ds, a = function() {
        var A = r.then;
        r.then = null, U(o) && (o = o(r)) && (o.then || o === r) && (r.then = A), s(o), r.then = A;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a;
    });
  }, t.kill = function() {
    Ve(this);
  }, i15;
}();
xt(ke.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -I,
  _prom: 0,
  _ps: false,
  _rts: 1
});
var at = /* @__PURE__ */ function(i15) {
  cs(t, i15);
  function t(n, r) {
    var s;
    return n === void 0 && (n = {}), s = i15.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = lt(n.sortChildren), L && Et(n.parent || L, It(s), r), n.reversed && s.reverse(), n.paused && s.paused(true), n.scrollTrigger && Qs(It(s), n.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(r, s, o) {
    return Re(0, arguments, this), this;
  }, e.from = function(r, s, o) {
    return Re(1, arguments, this), this;
  }, e.fromTo = function(r, s, o, a) {
    return Re(2, arguments, this), this;
  }, e.set = function(r, s, o) {
    return s.duration = 0, s.parent = this, He(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new j(r, s, yt(this, o), 1), this;
  }, e.call = function(r, s, o) {
    return Et(this, j.delayedCall(0, r, s), o);
  }, e.staggerTo = function(r, s, o, a, u, A, l) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = A, o.onCompleteParams = l, o.parent = this, new j(r, o, yt(this, u)), this;
  }, e.staggerFrom = function(r, s, o, a, u, A, l) {
    return o.runBackwards = 1, He(o).immediateRender = lt(o.immediateRender), this.staggerTo(r, s, o, a, u, A, l);
  }, e.staggerFromTo = function(r, s, o, a, u, A, l, f) {
    return a.startAt = o, He(a).immediateRender = lt(a.immediateRender), this.staggerTo(r, s, a, u, A, l, f);
  }, e.render = function(r, s, o) {
    var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, A = this._dur, l = r <= 0 ? 0 : $(r), f = this._zTime < 0 != r < 0 && (this._initted || !A), c, d, g, h, p, v, y, m, _, w, B, D;
    if (this !== L && l > u && r >= 0 && (l = u), l !== this._tTime || o || f) {
      if (a !== this._time && A && (l += this._time - a, r += this._time - a), c = l, _ = this._start, m = this._ts, v = !m, f && (A || (a = this._zTime), (r || !s) && (this._zTime = r)), this._repeat) {
        if (B = this._yoyo, p = A + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(p * 100 + r, s, o);
        if (c = $(l % p), l === u ? (h = this._repeat, c = A) : (h = ~~(l / p), h && h === l / p && (c = A, h--), c > A && (c = A)), w = Me(this._tTime, p), !a && this._tTime && w !== h && (w = h), B && h & 1 && (c = A - c, D = 1), h !== w && !this._lock) {
          var x = B && w & 1, b = x === (B && h & 1);
          if (h < w && (x = !x), a = x ? 0 : A, this._lock = 1, this.render(a || (D ? 0 : $(h * p)), s, !A)._lock = 0, this._tTime = l, !s && this.parent && Ct(this, "onRepeat"), this.vars.repeatRefresh && !D && (this.invalidate()._lock = 1), a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (A = this._dur, u = this._tDur, b && (this._lock = 2, a = x ? A : -1e-4, this.render(a, true), this.vars.repeatRefresh && !D && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          Xs(this, D);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = Ja(this, $(a), $(c)), y && (l -= c - (c = y._start))), this._tTime = l, this._time = c, this._act = !m, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && c && !s && (Ct(this, "onStart"), this._tTime !== l))
        return this;
      if (c >= a && r >= 0)
        for (d = this._first; d; ) {
          if (g = d._next, (d._act || c >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(r, s, o);
            if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, s, o), c !== this._time || !this._ts && !v) {
              y = 0, g && (l += this._zTime = -I);
              break;
            }
          }
          d = g;
        }
      else {
        d = this._last;
        for (var P = r < 0 ? r : c; d; ) {
          if (g = d._prev, (d._act || P <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(r, s, o);
            if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, s, o || At && (d._initted || d._startAt)), c !== this._time || !this._ts && !v) {
              y = 0, g && (l += this._zTime = P ? -I : I);
              break;
            }
          }
          d = g;
        }
      }
      if (y && !s && (this.pause(), y.render(c >= a ? 0 : -I)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = _, Un(this), this.render(r, s, o);
      this._onUpdate && !s && Ct(this, "onUpdate", true), (l === u && this._tTime >= this.totalDuration() || !l && a) && (_ === this._start || Math.abs(m) !== Math.abs(this._ts)) && (this._lock || ((r || !A) && (l === u && this._ts > 0 || !l && this._ts < 0) && Gt(this, 1), !s && !(r < 0 && !a) && (l || a || !u) && (Ct(this, l === u && r >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(l < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, s) {
    var o = this;
    if (Nt(s) || (s = yt(this, s, r)), !(r instanceof ke)) {
      if (nt(r))
        return r.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (Z(r))
        return this.addLabel(r, s);
      if (U(r))
        r = j.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? Et(this, r, s) : this;
  }, e.getChildren = function(r, s, o, a) {
    r === void 0 && (r = true), s === void 0 && (s = true), o === void 0 && (o = true), a === void 0 && (a = -_t);
    for (var u = [], A = this._first; A; )
      A._start >= a && (A instanceof j ? s && u.push(A) : (o && u.push(A), r && u.push.apply(u, A.getChildren(true, s, o)))), A = A._next;
    return u;
  }, e.getById = function(r) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === r)
        return s[o];
  }, e.remove = function(r) {
    return Z(r) ? this.removeLabel(r) : U(r) ? this.killTweensOf(r) : (zn(this, r), r === this._recent && (this._recent = this._last), le(this));
  }, e.totalTime = function(r, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = $(dt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), i15.prototype.totalTime.call(this, r, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, s) {
    return this.labels[r] = yt(this, s), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, s, o) {
    var a = j.delayedCall(0, s || qe, o);
    return a.data = "isPause", this._hasPause = 1, Et(this, a, yt(this, r));
  }, e.removePause = function(r) {
    var s = this._first;
    for (r = yt(this, r); s; )
      s._start === r && s.data === "isPause" && Gt(s), s = s._next;
  }, e.killTweensOf = function(r, s, o) {
    for (var a = this.getTweensOf(r, o), u = a.length; u--; )
      Vt !== a[u] && a[u].kill(r, s);
    return this;
  }, e.getTweensOf = function(r, s) {
    for (var o = [], a = bt(r), u = this._first, A = Nt(s), l; u; )
      u instanceof j ? Ha(u._targets, a) && (A ? (!Vt || u._initted && u._ts) && u.globalTime(0) <= s && u.globalTime(u.totalDuration()) > s : !s || u.isActive()) && o.push(u) : (l = u.getTweensOf(a, s)).length && o.push.apply(o, l), u = u._next;
    return o;
  }, e.tweenTo = function(r, s) {
    s = s || {};
    var o = this, a = yt(o, r), u = s, A = u.startAt, l = u.onStart, f = u.onStartParams, c = u.immediateRender, d, g = j.to(o, xt({
      ease: s.ease || "none",
      lazy: false,
      immediateRender: false,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (A && "time" in A ? A.time : o._time)) / o.timeScale()) || I,
      onStart: function() {
        if (o.pause(), !d) {
          var p = s.duration || Math.abs((a - (A && "time" in A ? A.time : o._time)) / o.timeScale());
          g._dur !== p && Ie(g, p, 0, 1).render(g._time, true, true), d = 1;
        }
        l && l.apply(g, f || []);
      }
    }, s));
    return c ? g.render(0) : g;
  }, e.tweenFromTo = function(r, s, o) {
    return this.tweenTo(s, xt({
      startAt: {
        time: yt(this, r)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), yi(this, yt(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), yi(this, yt(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, true) : this.previousLabel(this._time + I);
  }, e.shiftChildren = function(r, s, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, u = this.labels, A; a; )
      a._start >= o && (a._start += r, a._end += r), a = a._next;
    if (s)
      for (A in u)
        u[A] >= o && (u[A] += r);
    return le(this);
  }, e.invalidate = function(r) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(r), s = s._next;
    return i15.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = true);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), le(this);
  }, e.totalDuration = function(r) {
    var s = 0, o = this, a = o._last, u = _t, A, l, f;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
    if (o._dirty) {
      for (f = o.parent; a; )
        A = a._prev, a._dirty && a.totalDuration(), l = a._start, l > u && o._sort && a._ts && !o._lock ? (o._lock = 1, Et(o, a, l - a._delay, 1)._lock = 0) : u = l, l < 0 && a._ts && (s -= l, (!f && !o._dp || f && f.smoothChildTiming) && (o._start += l / o._ts, o._time -= l, o._tTime -= l), o.shiftChildren(-l, false, -1 / 0), u = 0), a._end > s && a._ts && (s = a._end), a = A;
      Ie(o, o === L && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(r) {
    if (L._ts && (xs(L, Dn(r, L)), bs = dt.frame), dt.frame >= gi) {
      gi += pt.autoSleep || 120;
      var s = L._first;
      if ((!s || !s._ts) && pt.autoSleep && dt._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || dt.sleep();
      }
    }
  }, t;
}(ke);
xt(at.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var du = function(t, e, n, r, s, o, a) {
  var u = new ct(this._pt, t, e, 0, 1, js, null, s), A = 0, l = 0, f, c, d, g, h, p, v, y;
  for (u.b = n, u.e = r, n += "", r += "", (v = ~r.indexOf("random(")) && (r = We(r)), o && (y = [n, r], o(y, t, e), n = y[0], r = y[1]), c = n.match(qn) || []; f = qn.exec(r); )
    g = f[0], h = r.substring(A, f.index), d ? d = (d + 1) % 5 : h.substr(-5) === "rgba(" && (d = 1), g !== c[l++] && (p = parseFloat(c[l - 1]) || 0, u._pt = {
      _next: u._pt,
      p: h || l === 1 ? h : ",",
      s: p,
      c: g.charAt(1) === "=" ? Ee(p, g) - p : parseFloat(g) - p,
      m: d && d < 4 ? Math.round : 0
    }, A = qn.lastIndex);
  return u.c = A < r.length ? r.substring(A, r.length) : "", u.fp = a, (ms.test(r) || v) && (u.e = 0), this._pt = u, u;
}, Vr = function(t, e, n, r, s, o, a, u, A, l) {
  U(r) && (r = r(s || 0, t, o));
  var f = t[e], c = n !== "get" ? n : U(f) ? A ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](A) : t[e]() : f, d = U(f) ? A ? yu : qs : Yr, g;
  if (Z(r) && (~r.indexOf("random(") && (r = We(r)), r.charAt(1) === "=" && (g = Ee(c, r) + (et(c) || 0), (g || g === 0) && (r = g))), !l || c !== r || yr)
    return !isNaN(c * r) && r !== "" ? (g = new ct(this._pt, t, e, +c || 0, r - (c || 0), typeof f == "boolean" ? _u : Ws, 0, d), A && (g.fp = A), a && g.modifier(a, this, t), this._pt = g) : (!f && !(e in t) && Fr(e, r), du.call(this, t, e, c, r, d, u || pt.stringFilter, A));
}, gu = function(t, e, n, r, s) {
  if (U(t) && (t = Ke(t, s, e, n, r)), !Tt(t) || t.style && t.nodeType || nt(t) || gs(t))
    return Z(t) ? Ke(t, s, e, n, r) : t;
  var o = {}, a;
  for (a in t)
    o[a] = Ke(t[a], s, e, n, r);
  return o;
}, Rs = function(t, e, n, r, s, o) {
  var a, u, A, l;
  if (ht[t] && (a = new ht[t]()).init(s, a.rawVars ? e[t] : gu(e[t], r, s, o, n), n, r, o) !== false && (n._pt = u = new ct(n._pt, s, t, 0, 1, a.render, a, 0, a.priority), n !== xe))
    for (A = n._ptLookup[n._targets.indexOf(s)], l = a._props.length; l--; )
      A[a._props[l]] = u;
  return a;
}, Vt, yr, Xr = function i11(t, e, n) {
  var r = t.vars, s = r.ease, o = r.startAt, a = r.immediateRender, u = r.lazy, A = r.onUpdate, l = r.onUpdateParams, f = r.callbackScope, c = r.runBackwards, d = r.yoyoEase, g = r.keyframes, h = r.autoRevert, p = t._dur, v = t._startAt, y = t._targets, m = t.parent, _ = m && m.data === "nested" ? m.vars.targets : y, w = t._overwrite === "auto" && !kr, B = t.timeline, D, x, b, P, Q, z, X, Y, O, G, H, st, $t;
  if (B && (!g || !s) && (s = "none"), t._ease = fe(s, Te.ease), t._yEase = d ? Vs(fe(d === true ? s : d, Te.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !B && !!r.runBackwards, !B || g && !r.stagger) {
    if (Y = y[0] ? Ae(y[0]).harness : 0, st = Y && r[Y.prop], D = Bn(r, Nr), v && (v._zTime < 0 && v.progress(1), e < 0 && c && a && !h ? v.render(-1, true) : v.revert(c && p ? hn : Xa), v._lazy = 0), o) {
      if (Gt(t._startAt = j.set(y, xt({
        data: "isStart",
        overwrite: false,
        parent: m,
        immediateRender: true,
        lazy: lt(u),
        startAt: null,
        delay: 0,
        onUpdate: A,
        onUpdateParams: l,
        callbackScope: f,
        stagger: 0
      }, o))), t._startAt._dp = 0, e < 0 && (At || !a && !h) && t._startAt.revert(hn), a && p && e <= 0 && n <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (c && p && !v) {
      if (e && (a = false), b = xt({
        overwrite: false,
        data: "isFromStart",
        lazy: a && lt(u),
        immediateRender: a,
        stagger: 0,
        parent: m
      }, D), st && (b[Y.prop] = st), Gt(t._startAt = j.set(y, b)), t._startAt._dp = 0, e < 0 && (At ? t._startAt.revert(hn) : t._startAt.render(-1, true)), t._zTime = e, !a)
        i11(t._startAt, I, I);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, u = p && lt(u) || u && !p, x = 0; x < y.length; x++) {
      if (Q = y[x], X = Q._gsap || Ur(y)[x]._gsap, t._ptLookup[x] = G = {}, hr[X.id] && Ht.length && xn(), H = _ === y ? x : _.indexOf(Q), Y && (O = new Y()).init(Q, st || D, t, H, _) !== false && (t._pt = P = new ct(t._pt, Q, O.name, 0, 1, O.render, O, 0, O.priority), O._props.forEach(function(te) {
        G[te] = P;
      }), O.priority && (z = 1)), !Y || st)
        for (b in D)
          ht[b] && (O = Rs(b, D, t, H, Q, _)) ? O.priority && (z = 1) : G[b] = P = Vr.call(t, Q, b, "get", D[b], H, _, 0, r.stringFilter);
      t._op && t._op[x] && t.kill(Q, t._op[x]), w && t._pt && (Vt = t, L.killTweensOf(Q, G, t.globalTime(e)), $t = !t.parent, Vt = 0), t._pt && u && (hr[X.id] = 1);
    }
    z && Js(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = A, t._initted = (!t._op || t._pt) && !$t, g && e <= 0 && B.render(_t, true, true);
}, pu = function(t, e, n, r, s, o, a) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], A, l, f, c;
  if (!u)
    for (u = t._ptCache[e] = [], f = t._ptLookup, c = t._targets.length; c--; ) {
      if (A = f[c][e], A && A.d && A.d._pt)
        for (A = A.d._pt; A && A.p !== e && A.fp !== e; )
          A = A._next;
      if (!A)
        return yr = 1, t.vars[e] = "+=0", Xr(t, a), yr = 0, 1;
      u.push(A);
    }
  for (c = u.length; c--; )
    l = u[c], A = l._pt || l, A.s = (r || r === 0) && !s ? r : A.s + (r || 0) + o * A.c, A.c = n - A.s, l.e && (l.e = V(n) + et(l.e)), l.b && (l.b = A.s + et(l.b));
}, mu = function(t, e) {
  var n = t[0] ? Ae(t[0]).harness : 0, r = n && n.aliases, s, o, a, u;
  if (!r)
    return e;
  s = ge({}, e);
  for (o in r)
    if (o in s)
      for (u = r[o].split(","), a = u.length; a--; )
        s[u[a]] = s[o];
  return s;
}, vu = function(t, e, n, r) {
  var s = e.ease || r || "power1.inOut", o, a;
  if (nt(e))
    a = n[t] || (n[t] = []), e.forEach(function(u, A) {
      return a.push({
        t: A / (e.length - 1) * 100,
        v: u,
        e: s
      });
    });
  else
    for (o in e)
      a = n[o] || (n[o] = []), o === "ease" || a.push({
        t: parseFloat(t),
        v: e[o],
        e: s
      });
}, Ke = function(t, e, n, r, s) {
  return U(t) ? t.call(e, n, r, s) : Z(t) && ~t.indexOf("random(") ? We(t) : t;
}, Ks = zr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Gs = {};
ft(Ks + ",id,stagger,delay,duration,paused,scrollTrigger", function(i15) {
  return Gs[i15] = 1;
});
var j = /* @__PURE__ */ function(i15) {
  cs(t, i15);
  function t(n, r, s, o) {
    var a;
    typeof r == "number" && (s.duration = r, r = s, s = null), a = i15.call(this, o ? r : He(r)) || this;
    var u = a.vars, A = u.duration, l = u.delay, f = u.immediateRender, c = u.stagger, d = u.overwrite, g = u.keyframes, h = u.defaults, p = u.scrollTrigger, v = u.yoyoEase, y = r.parent || L, m = (nt(n) || gs(n) ? Nt(n[0]) : "length" in r) ? [n] : bt(n), _, w, B, D, x, b, P, Q;
    if (a._targets = m.length ? Ur(m) : Cn("GSAP target " + n + " not found. https://greensock.com", !pt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, g || c || An(A) || An(l)) {
      if (r = a.vars, _ = a.timeline = new at({
        data: "nested",
        defaults: h || {},
        targets: y && y.data === "nested" ? y.vars.targets : m
      }), _.kill(), _.parent = _._dp = It(a), _._start = 0, c || An(A) || An(l)) {
        if (D = m.length, P = c && Ss(c), Tt(c))
          for (x in c)
            ~Ks.indexOf(x) && (Q || (Q = {}), Q[x] = c[x]);
        for (w = 0; w < D; w++)
          B = Bn(r, Gs), B.stagger = 0, v && (B.yoyoEase = v), Q && ge(B, Q), b = m[w], B.duration = +Ke(A, It(a), w, b, m), B.delay = (+Ke(l, It(a), w, b, m) || 0) - a._delay, !c && D === 1 && B.delay && (a._delay = l = B.delay, a._start += l, B.delay = 0), _.to(b, B, P ? P(w, b, m) : 0), _._ease = E.none;
        _.duration() ? A = l = 0 : a.timeline = 0;
      } else if (g) {
        He(xt(_.vars.defaults, {
          ease: "none"
        })), _._ease = fe(g.ease || r.ease || "none");
        var z = 0, X, Y, O;
        if (nt(g))
          g.forEach(function(G) {
            return _.to(m, G, ">");
          }), _.duration();
        else {
          B = {};
          for (x in g)
            x === "ease" || x === "easeEach" || vu(x, g[x], B, g.easeEach);
          for (x in B)
            for (X = B[x].sort(function(G, H) {
              return G.t - H.t;
            }), z = 0, w = 0; w < X.length; w++)
              Y = X[w], O = {
                ease: Y.e,
                duration: (Y.t - (w ? X[w - 1].t : 0)) / 100 * A
              }, O[x] = Y.v, _.to(m, O, z), z += O.duration;
          _.duration() < A && _.to({}, {
            duration: A - _.duration()
          });
        }
      }
      A || a.duration(A = _.duration());
    } else
      a.timeline = 0;
    return d === true && !kr && (Vt = It(a), L.killTweensOf(m), Vt = 0), Et(y, It(a), s), r.reversed && a.reverse(), r.paused && a.paused(true), (f || !A && !g && a._start === $(y._time) && lt(f) && qa(It(a)) && y.data !== "nested") && (a._tTime = -I, a.render(Math.max(0, -l) || 0)), p && Qs(It(a), p), a;
  }
  var e = t.prototype;
  return e.render = function(r, s, o) {
    var a = this._time, u = this._tDur, A = this._dur, l = r < 0, f = r > u - I && !l ? u : r < I ? 0 : r, c, d, g, h, p, v, y, m, _;
    if (!A)
      ja(this, r, s, o);
    else if (f !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l) {
      if (c = f, m = this.timeline, this._repeat) {
        if (h = A + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(h * 100 + r, s, o);
        if (c = $(f % h), f === u ? (g = this._repeat, c = A) : (g = ~~(f / h), g && g === f / h && (c = A, g--), c > A && (c = A)), v = this._yoyo && g & 1, v && (_ = this._yEase, c = A - c), p = Me(this._tTime, h), c === a && !o && this._initted)
          return this._tTime = f, this;
        g !== p && (m && this._yEase && Xs(m, v), this.vars.repeatRefresh && !v && !this._lock && (this._lock = o = 1, this.render($(h * g), true).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Ts(this, l ? r : c, o, s, f))
          return this._tTime = 0, this;
        if (a !== this._time)
          return this;
        if (A !== this._dur)
          return this.render(r, s, o);
      }
      if (this._tTime = f, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (_ || this._ease)(c / A), this._from && (this.ratio = y = 1 - y), c && !a && !s && (Ct(this, "onStart"), this._tTime !== f))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      m && m.render(r < 0 ? r : !c && v ? -I : m._dur * m._ease(c / this._dur), s, o) || this._startAt && (this._zTime = r), this._onUpdate && !s && (l && dr(this, r, s, o), Ct(this, "onUpdate")), this._repeat && g !== p && this.vars.onRepeat && !s && this.parent && Ct(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (l && !this._onUpdate && dr(this, r, true, true), (r || !A) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Gt(this, 1), !s && !(l && !a) && (f || a || v) && (Ct(this, f === u ? "onComplete" : "onReverseComplete", true), this._prom && !(f < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), i15.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, s, o, a) {
    je || dt.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), A;
    return this._initted || Xr(this, u), A = this._ease(u / this._dur), pu(this, r, s, o, a, A, u) ? this.resetTo(r, s, o, a) : (Vn(this, 0), this.parent || Es(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, s) {
    if (s === void 0 && (s = "all"), !r && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ve(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, s, Vt && Vt.vars.overwrite !== true)._first || Ve(this), this.parent && o !== this.timeline.totalDuration() && Ie(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, u = r ? bt(r) : a, A = this._ptLookup, l = this._pt, f, c, d, g, h, p, v;
    if ((!s || s === "all") && Ka(a, u))
      return s === "all" && (this._pt = 0), Ve(this);
    for (f = this._op = this._op || [], s !== "all" && (Z(s) && (h = {}, ft(s, function(y) {
      return h[y] = 1;
    }), s = h), s = mu(a, s)), v = a.length; v--; )
      if (~u.indexOf(a[v])) {
        c = A[v], s === "all" ? (f[v] = s, g = c, d = {}) : (d = f[v] = f[v] || {}, g = s);
        for (h in g)
          p = c && c[h], p && ((!("kill" in p.d) || p.d.kill(h) === true) && zn(this, p, "_pt"), delete c[h]), d !== "all" && (d[h] = 1);
      }
    return this._initted && !this._pt && l && Ve(this), this;
  }, t.to = function(r, s) {
    return new t(r, s, arguments[2]);
  }, t.from = function(r, s) {
    return Re(1, arguments);
  }, t.delayedCall = function(r, s, o, a) {
    return new t(s, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: r,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, t.fromTo = function(r, s, o) {
    return Re(2, arguments);
  }, t.set = function(r, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(r, s);
  }, t.killTweensOf = function(r, s, o) {
    return L.killTweensOf(r, s, o);
  }, t;
}(ke);
xt(j.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ft("staggerTo,staggerFrom,staggerFromTo", function(i15) {
  j[i15] = function() {
    var t = new at(), e = pr.call(arguments, 0);
    return e.splice(i15 === "staggerFromTo" ? 5 : 4, 0, 0), t[i15].apply(t, e);
  };
});
var Yr = function(t, e, n) {
  return t[e] = n;
}, qs = function(t, e, n) {
  return t[e](n);
}, yu = function(t, e, n, r) {
  return t[e](r.fp, n);
}, wu = function(t, e, n) {
  return t.setAttribute(e, n);
}, Hr = function(t, e) {
  return U(t[e]) ? qs : Or(t[e]) && t.setAttribute ? wu : Yr;
}, Ws = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, _u = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, js = function(t, e) {
  var n = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; n; )
      r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) + r, n = n._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, Rr = function(t, e) {
  for (var n = e._pt; n; )
    n.r(t, n.d), n = n._next;
}, bu = function(t, e, n, r) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === r && s.modifier(t, e, n), s = o;
}, Cu = function(t) {
  for (var e = this._pt, n, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? zn(this, e, "_pt") : e.dep || (n = 1), e = r;
  return !n;
}, xu = function(t, e, n, r) {
  r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
}, Js = function(t) {
  for (var e = t._pt, n, r, s, o; e; ) {
    for (n = e._next, r = s; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : o) ? e._prev._next = e : s = e, (e._next = r) ? r._prev = e : o = e, e = n;
  }
  t._pt = s;
}, ct = /* @__PURE__ */ function() {
  function i15(e, n, r, s, o, a, u, A, l) {
    this.t = n, this.s = s, this.c = o, this.p = r, this.r = a || Ws, this.d = u || this, this.set = A || Yr, this.pr = l || 0, this._next = e, e && (e._prev = this);
  }
  var t = i15.prototype;
  return t.modifier = function(n, r, s) {
    this.mSet = this.mSet || this.set, this.set = xu, this.m = n, this.mt = s, this.tween = r;
  }, i15;
}();
ft(zr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(i15) {
  return Nr[i15] = 1;
});
mt.TweenMax = mt.TweenLite = j;
mt.TimelineLite = mt.TimelineMax = at;
L = new at({
  sortChildren: false,
  defaults: Te,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
pt.stringFilter = Us;
var Oe = [], gn = {}, Bu = [], _i = 0, $n = function(t) {
  return (gn[t] || Bu).map(function(e) {
    return e();
  });
}, wr = function() {
  var t = Date.now(), e = [];
  t - _i > 2 && ($n("matchMediaInit"), Oe.forEach(function(n) {
    var r = n.queries, s = n.conditions, o, a, u, A;
    for (a in r)
      o = wt.matchMedia(r[a]).matches, o && (u = 1), o !== s[a] && (s[a] = o, A = 1);
    A && (n.revert(), u && e.push(n));
  }), $n("matchMediaRevert"), e.forEach(function(n) {
    return n.onMatch(n);
  }), _i = t, $n("matchMedia"));
}, Zs = /* @__PURE__ */ function() {
  function i15(e, n) {
    this.selector = n && mr(n), this.data = [], this._r = [], this.isReverted = false, e && this.add(e);
  }
  var t = i15.prototype;
  return t.add = function(n, r, s) {
    U(n) && (s = r, r = n, n = U);
    var o = this, a = function() {
      var A = R, l = o.selector, f;
      return A && A !== o && A.data.push(o), s && (o.selector = mr(s)), R = o, f = r.apply(o, arguments), U(f) && o._r.push(f), R = A, o.selector = l, o.isReverted = false, f;
    };
    return o.last = a, n === U ? a(o) : n ? o[n] = a : a;
  }, t.ignore = function(n) {
    var r = R;
    R = null, n(this), R = r;
  }, t.getTweens = function() {
    var n = [];
    return this.data.forEach(function(r) {
      return r instanceof i15 ? n.push.apply(n, r.getTweens()) : r instanceof j && !(r.parent && r.parent.data === "nested") && n.push(r);
    }), n;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(n, r) {
    var s = this;
    if (n) {
      var o = this.getTweens();
      this.data.forEach(function(u) {
        u.data === "isFlip" && (u.revert(), u.getChildren(true, true, false).forEach(function(A) {
          return o.splice(o.indexOf(A), 1);
        }));
      }), o.map(function(u) {
        return {
          g: u.globalTime(0),
          t: u
        };
      }).sort(function(u, A) {
        return A.g - u.g || -1;
      }).forEach(function(u) {
        return u.t.revert(n);
      }), this.data.forEach(function(u) {
        return !(u instanceof ke) && u.revert && u.revert(n);
      }), this._r.forEach(function(u) {
        return u(n, s);
      }), this.isReverted = true;
    } else
      this.data.forEach(function(u) {
        return u.kill && u.kill();
      });
    if (this.clear(), r) {
      var a = Oe.indexOf(this);
      ~a && Oe.splice(a, 1);
    }
  }, t.revert = function(n) {
    this.kill(n || {});
  }, i15;
}(), Du = /* @__PURE__ */ function() {
  function i15(e) {
    this.contexts = [], this.scope = e;
  }
  var t = i15.prototype;
  return t.add = function(n, r, s) {
    Tt(n) || (n = {
      matches: n
    });
    var o = new Zs(0, s || this.scope), a = o.conditions = {}, u, A, l;
    this.contexts.push(o), r = o.add("onMatch", r), o.queries = n;
    for (A in n)
      A === "all" ? l = 1 : (u = wt.matchMedia(n[A]), u && (Oe.indexOf(o) < 0 && Oe.push(o), (a[A] = u.matches) && (l = 1), u.addListener ? u.addListener(wr) : u.addEventListener("change", wr)));
    return l && r(o), this;
  }, t.revert = function(n) {
    this.kill(n || {});
  }, t.kill = function(n) {
    this.contexts.forEach(function(r) {
      return r.kill(n, true);
    });
  }, i15;
}(), En = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    e.forEach(function(r) {
      return au(r);
    });
  },
  timeline: function(t) {
    return new at(t);
  },
  getTweensOf: function(t, e) {
    return L.getTweensOf(t, e);
  },
  getProperty: function(t, e, n, r) {
    Z(t) && (t = bt(t)[0]);
    var s = Ae(t || {}).get, o = n ? Ds : Bs;
    return n === "native" && (n = ""), t && (e ? o((ht[e] && ht[e].get || s)(t, e, n, r)) : function(a, u, A) {
      return o((ht[a] && ht[a].get || s)(t, a, u, A));
    });
  },
  quickSetter: function(t, e, n) {
    if (t = bt(t), t.length > 1) {
      var r = t.map(function(l) {
        return vt.quickSetter(l, e, n);
      }), s = r.length;
      return function(l) {
        for (var f = s; f--; )
          r[f](l);
      };
    }
    t = t[0] || {};
    var o = ht[e], a = Ae(t), u = a.harness && (a.harness.aliases || {})[e] || e, A = o ? function(l) {
      var f = new o();
      xe._pt = 0, f.init(t, n ? l + n : l, xe, 0, [t]), f.render(1, f), xe._pt && Rr(1, xe);
    } : a.set(t, u);
    return o ? A : function(l) {
      return A(t, u, n ? l + n : l, a, 1);
    };
  },
  quickTo: function(t, e, n) {
    var r, s = vt.to(t, ge((r = {}, r[e] = "+=0.1", r.paused = true, r), n || {})), o = function(u, A, l) {
      return s.resetTo(e, u, A, l);
    };
    return o.tween = s, o;
  },
  isTweening: function(t) {
    return L.getTweensOf(t, true).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = fe(t.ease, Te.ease)), pi(Te, t || {});
  },
  config: function(t) {
    return pi(pt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, n = t.effect, r = t.plugins, s = t.defaults, o = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !ht[a] && !mt[a] && Cn(e + " effect requires " + a + " plugin.");
    }), Wn[e] = function(a, u, A) {
      return n(bt(a), xt(u || {}, s), A);
    }, o && (at.prototype[e] = function(a, u, A) {
      return this.add(Wn[e](a, Tt(u) ? u : (A = u) && {}, this), A);
    });
  },
  registerEase: function(t, e) {
    E[t] = fe(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? fe(t, e) : E;
  },
  getById: function(t) {
    return L.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var n = new at(t), r, s;
    for (n.smoothChildTiming = lt(t.smoothChildTiming), L.remove(n), n._dp = 0, n._time = n._tTime = L._time, r = L._first; r; )
      s = r._next, (e || !(!r._dur && r instanceof j && r.vars.onComplete === r._targets[0])) && Et(n, r, r._start - r._delay), r = s;
    return Et(L, n, 0), n;
  },
  context: function(t, e) {
    return t ? new Zs(t, e) : R;
  },
  matchMedia: function(t) {
    return new Du(t);
  },
  matchMediaRefresh: function() {
    return Oe.forEach(function(t) {
      var e = t.conditions, n, r;
      for (r in e)
        e[r] && (e[r] = false, n = 1);
      n && t.revert();
    }) || wr();
  },
  addEventListener: function(t, e) {
    var n = gn[t] || (gn[t] = []);
    ~n.indexOf(e) || n.push(e);
  },
  removeEventListener: function(t, e) {
    var n = gn[t], r = n && n.indexOf(e);
    r >= 0 && n.splice(r, 1);
  },
  utils: {
    wrap: iu,
    wrapYoyo: su,
    distribute: Ss,
    random: Os,
    snap: ks,
    normalize: ru,
    getUnit: et,
    clamp: $a,
    splitColor: Ns,
    toArray: bt,
    selector: mr,
    mapRange: Fs,
    pipe: eu,
    unitize: nu,
    interpolate: ou,
    shuffle: Is
  },
  install: ws,
  effects: Wn,
  ticker: dt,
  updateRoot: at.updateRoot,
  plugins: ht,
  globalTimeline: L,
  core: {
    PropTween: ct,
    globals: _s,
    Tween: j,
    Timeline: at,
    Animation: ke,
    getCache: Ae,
    _removeLinkedListItem: zn,
    reverting: function() {
      return At;
    },
    context: function(t) {
      return t && R && (R.data.push(t), t._ctx = R), R;
    },
    suppressOverwrites: function(t) {
      return kr = t;
    }
  }
};
ft("to,from,fromTo,delayedCall,set,killTweensOf", function(i15) {
  return En[i15] = j[i15];
});
dt.add(at.updateRoot);
xe = En.to({}, {
  duration: 0
});
var Eu = function(t, e) {
  for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
    n = n._next;
  return n;
}, Pu = function(t, e) {
  var n = t._targets, r, s, o;
  for (r in e)
    for (s = n.length; s--; )
      o = t._ptLookup[s][r], o && (o = o.d) && (o._pt && (o = Eu(o, r)), o && o.modifier && o.modifier(e[r], t, n[s], r));
}, tr = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    init: function(r, s, o) {
      o._onInit = function(a) {
        var u, A;
        if (Z(s) && (u = {}, ft(s, function(l) {
          return u[l] = 1;
        }), s = u), e) {
          u = {};
          for (A in s)
            u[A] = e(s[A]);
          s = u;
        }
        Pu(a, s);
      };
    }
  };
}, vt = En.registerPlugin({
  name: "attr",
  init: function(t, e, n, r, s) {
    var o, a, u;
    this.tween = n;
    for (o in e)
      u = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (u || 0) + "", e[o], r, s, 0, 0, o), a.op = o, a.b = u, this._props.push(o);
  },
  render: function(t, e) {
    for (var n = e._pt; n; )
      At ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var n = e.length; n--; )
      this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
  }
}, tr("roundProps", vr), tr("modifiers"), tr("snap", ks)) || En;
j.version = at.version = vt.version = "3.11.3";
ys = 1;
ds() && Se();
E.Power0;
E.Power1;
E.Power2;
E.Power3;
E.Power4;
E.Linear;
E.Quad;
E.Cubic;
E.Quart;
E.Quint;
E.Strong;
E.Elastic;
E.Back;
E.SteppedEase;
E.Bounce;
E.Sine;
E.Expo;
E.Circ;
/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var bi, Xt, Pe, Kr, ue, Ci, Gr, Qu = function() {
  return typeof window < "u";
}, zt = {}, se = 180 / Math.PI, Qe = Math.PI / 180, _e = Math.atan2, xi = 1e8, qr = /([A-Z])/g, Tu = /(left|right|width|margin|padding|x)/i, Mu = /[\s,\(]\S/, Ot = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, _r = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Iu = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Su = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, ku = function(t, e) {
  var n = e.s + e.c * t;
  e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
}, $s = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, to = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Ou = function(t, e, n) {
  return t.style[e] = n;
}, Lu = function(t, e, n) {
  return t.style.setProperty(e, n);
}, Fu = function(t, e, n) {
  return t._gsap[e] = n;
}, Nu = function(t, e, n) {
  return t._gsap.scaleX = t._gsap.scaleY = n;
}, zu = function(t, e, n, r, s) {
  var o = t._gsap;
  o.scaleX = o.scaleY = n, o.renderTransform(s, o);
}, Uu = function(t, e, n, r, s) {
  var o = t._gsap;
  o[e] = n, o.renderTransform(s, o);
}, F = "transform", Bt = F + "Origin", Vu = function(t, e) {
  var n = this, r = this.target, s = r.style;
  if (t in zt) {
    if (this.tfm = this.tfm || {}, t !== "transform" && (t = Ot[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
      return n.tfm[o] = St(r, o);
    }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : St(r, t)), this.props.indexOf(F) >= 0)
      return;
    r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(Bt, e, "")), t = F;
  }
  (s || e) && this.props.push(t, e, s[t]);
}, eo = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Xu = function() {
  var t = this.props, e = this.target, n = e.style, r = e._gsap, s, o;
  for (s = 0; s < t.length; s += 3)
    t[s + 1] ? e[t[s]] = t[s + 2] : t[s + 2] ? n[t[s]] = t[s + 2] : n.removeProperty(t[s].replace(qr, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      r[o] = this.tfm[o];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), s = Gr(), s && !s.isStart && !n[F] && (eo(n), r.uncache = 1);
  }
}, no = function(t, e) {
  var n = {
    target: t,
    props: [],
    revert: Xu,
    save: Vu
  };
  return e && e.split(",").forEach(function(r) {
    return n.save(r);
  }), n;
}, ro, br = function(t, e) {
  var n = Xt.createElementNS ? Xt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Xt.createElement(t);
  return n.style ? n : Xt.createElement(t);
}, Qt = function i12(t, e, n) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(qr, "-$1").toLowerCase()) || r.getPropertyValue(e) || !n && i12(t, Le(e) || e, 1) || "";
}, Bi = "O,Moz,ms,Ms,Webkit".split(","), Le = function(t, e, n) {
  var r = e || ue, s = r.style, o = 5;
  if (t in s && !n)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Bi[o] + t in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Bi[o] : "") + t;
}, Cr = function() {
  Qu() && window.document && (bi = window, Xt = bi.document, Pe = Xt.documentElement, ue = br("div") || {
    style: {}
  }, br("div"), F = Le(F), Bt = F + "Origin", ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ro = !!Le("perspective"), Gr = vt.core.reverting, Kr = 1);
}, er = function i13(t) {
  var e = br("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, r = this.nextSibling, s = this.style.cssText, o;
  if (Pe.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = i13;
    } catch {
    }
  else
    this._gsapBBox && (o = this._gsapBBox());
  return n && (r ? n.insertBefore(this, r) : n.appendChild(this)), Pe.removeChild(e), this.style.cssText = s, o;
}, Di = function(t, e) {
  for (var n = e.length; n--; )
    if (t.hasAttribute(e[n]))
      return t.getAttribute(e[n]);
}, io = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = er.call(t, true);
  }
  return e && (e.width || e.height) || t.getBBox === er || (e = er.call(t, true)), e && !e.width && !e.x && !e.y ? {
    x: +Di(t, ["x", "cx", "x1"]) || 0,
    y: +Di(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, so = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && io(t));
}, Je = function(t, e) {
  if (e) {
    var n = t.style;
    e in zt && e !== Bt && (e = F), n.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), n.removeProperty(e.replace(qr, "-$1").toLowerCase())) : n.removeAttribute(e);
  }
}, Yt = function(t, e, n, r, s, o) {
  var a = new ct(t._pt, e, n, 0, 1, o ? to : $s);
  return t._pt = a, a.b = r, a.e = s, t._props.push(n), a;
}, Ei = {
  deg: 1,
  rad: 1,
  turn: 1
}, Yu = {
  grid: 1,
  flex: 1
}, qt = function i14(t, e, n, r) {
  var s = parseFloat(n) || 0, o = (n + "").trim().substr((s + "").length) || "px", a = ue.style, u = Tu.test(e), A = t.tagName.toLowerCase() === "svg", l = (A ? "client" : "offset") + (u ? "Width" : "Height"), f = 100, c = r === "px", d = r === "%", g, h, p, v;
  return r === o || !s || Ei[r] || Ei[o] ? s : (o !== "px" && !c && (s = i14(t, e, n, "px")), v = t.getCTM && so(t), (d || o === "%") && (zt[e] || ~e.indexOf("adius")) ? (g = v ? t.getBBox()[u ? "width" : "height"] : t[l], V(d ? s / g * f : s / 100 * g)) : (a[u ? "width" : "height"] = f + (c ? o : r), h = ~e.indexOf("adius") || r === "em" && t.appendChild && !A ? t : t.parentNode, v && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === Xt || !h.appendChild) && (h = Xt.body), p = h._gsap, p && d && p.width && u && p.time === dt.time && !p.uncache ? V(s / p.width * f) : ((d || o === "%") && !Yu[Qt(h, "display")] && (a.position = Qt(t, "position")), h === t && (a.position = "static"), h.appendChild(ue), g = ue[l], h.removeChild(ue), a.position = "absolute", u && d && (p = Ae(h), p.time = dt.time, p.width = h[l]), V(c ? g * s / f : g && s ? f / g * s : 0))));
}, St = function(t, e, n, r) {
  var s;
  return Kr || Cr(), e in Ot && e !== "transform" && (e = Ot[e], ~e.indexOf(",") && (e = e.split(",")[0])), zt[e] && e !== "transform" ? (s = $e(t, r), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : Qn(Qt(t, Bt)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) && (s = Pn[e] && Pn[e](t, e, n) || Qt(t, e) || Cs(t, e) || (e === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? qt(t, e, s, n) + n : s;
}, Hu = function(t, e, n, r) {
  if (!n || n === "none") {
    var s = Le(e, t, 1), o = s && Qt(t, s, 1);
    o && o !== n ? (e = s, n = o) : e === "borderColor" && (n = Qt(t, "borderTopColor"));
  }
  var a = new ct(this._pt, t.style, e, 0, 1, js), u = 0, A = 0, l, f, c, d, g, h, p, v, y, m, _, w;
  if (a.b = n, a.e = r, n += "", r += "", r === "auto" && (t.style[e] = r, r = Qt(t, e) || r, t.style[e] = n), l = [n, r], Us(l), n = l[0], r = l[1], c = n.match(Ce) || [], w = r.match(Ce) || [], w.length) {
    for (; f = Ce.exec(r); )
      p = f[0], y = r.substring(u, f.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), p !== (h = c[A++] || "") && (d = parseFloat(h) || 0, _ = h.substr((d + "").length), p.charAt(1) === "=" && (p = Ee(d, p) + _), v = parseFloat(p), m = p.substr((v + "").length), u = Ce.lastIndex - m.length, m || (m = m || pt.units[e] || _, u === r.length && (r += m, a.e += m)), _ !== m && (d = qt(t, e, h, m) || 0), a._pt = {
        _next: a._pt,
        p: y || A === 1 ? y : ",",
        s: d,
        c: v - d,
        m: g && g < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = u < r.length ? r.substring(u, r.length) : "";
  } else
    a.r = e === "display" && r === "none" ? to : $s;
  return ms.test(r) && (a.e = 0), this._pt = a, a;
}, Pi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Ru = function(t) {
  var e = t.split(" "), n = e[0], r = e[1] || "50%";
  return (n === "top" || n === "bottom" || r === "left" || r === "right") && (t = n, n = r, r = t), e[0] = Pi[n] || n, e[1] = Pi[r] || r, e.join(" ");
}, Ku = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var n = e.t, r = n.style, s = e.u, o = n._gsap, a, u, A;
    if (s === "all" || s === true)
      r.cssText = "", u = 1;
    else
      for (s = s.split(","), A = s.length; --A > -1; )
        a = s[A], zt[a] && (u = 1, a = a === "transformOrigin" ? Bt : F), Je(n, a);
    u && (Je(n, F), o && (o.svg && n.removeAttribute("transform"), $e(n, 1), o.uncache = 1, eo(r)));
  }
}, Pn = {
  clearProps: function(t, e, n, r, s) {
    if (s.data !== "isFromStart") {
      var o = t._pt = new ct(t._pt, e, n, 0, 0, Ku);
      return o.u = r, o.pr = -10, o.tween = s, t._props.push(n), 1;
    }
  }
}, Ze = [1, 0, 0, 1, 0, 0], oo = {}, ao = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Qi = function(t) {
  var e = Qt(t, F);
  return ao(e) ? Ze : e.substr(7).match(ps).map(V);
}, Wr = function(t, e) {
  var n = t._gsap || Ae(t), r = t.style, s = Qi(t), o, a, u, A;
  return n.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, s = [u.a, u.b, u.c, u.d, u.e, u.f], s.join(",") === "1,0,0,1,0,0" ? Ze : s) : (s === Ze && !t.offsetParent && t !== Pe && !n.svg && (u = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent) && (A = 1, a = t.nextElementSibling, Pe.appendChild(t)), s = Qi(t), u ? r.display = u : Je(t, "display"), A && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : Pe.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, xr = function(t, e, n, r, s, o) {
  var a = t._gsap, u = s || Wr(t, true), A = a.xOrigin || 0, l = a.yOrigin || 0, f = a.xOffset || 0, c = a.yOffset || 0, d = u[0], g = u[1], h = u[2], p = u[3], v = u[4], y = u[5], m = e.split(" "), _ = parseFloat(m[0]) || 0, w = parseFloat(m[1]) || 0, B, D, x, b;
  n ? u !== Ze && (D = d * p - g * h) && (x = _ * (p / D) + w * (-h / D) + (h * y - p * v) / D, b = _ * (-g / D) + w * (d / D) - (d * y - g * v) / D, _ = x, w = b) : (B = io(t), _ = B.x + (~m[0].indexOf("%") ? _ / 100 * B.width : _), w = B.y + (~(m[1] || m[0]).indexOf("%") ? w / 100 * B.height : w)), r || r !== false && a.smooth ? (v = _ - A, y = w - l, a.xOffset = f + (v * d + y * h) - v, a.yOffset = c + (v * g + y * p) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = _, a.yOrigin = w, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!n, t.style[Bt] = "0px 0px", o && (Yt(o, a, "xOrigin", A, _), Yt(o, a, "yOrigin", l, w), Yt(o, a, "xOffset", f, a.xOffset), Yt(o, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", _ + " " + w);
}, $e = function(t, e) {
  var n = t._gsap || new Hs(t);
  if ("x" in n && !e && !n.uncache)
    return n;
  var r = t.style, s = n.scaleX < 0, o = "px", a = "deg", u = getComputedStyle(t), A = Qt(t, Bt) || "0", l, f, c, d, g, h, p, v, y, m, _, w, B, D, x, b, P, Q, z, X, Y, O, G, H, st, $t, te, Ne, ee, ui, Mt, ne;
  return l = f = c = h = p = v = y = m = _ = 0, d = g = 1, n.svg = !!(t.getCTM && so(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (r[F] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[F] !== "none" ? u[F] : "")), r.scale = r.rotate = r.translate = "none"), D = Wr(t, n.svg), n.svg && (n.uncache ? (st = t.getBBox(), A = n.xOrigin - st.x + "px " + (n.yOrigin - st.y) + "px", H = "") : H = !e && t.getAttribute("data-svg-origin"), xr(t, H || A, !!H || n.originIsAbsolute, n.smooth !== false, D)), w = n.xOrigin || 0, B = n.yOrigin || 0, D !== Ze && (Q = D[0], z = D[1], X = D[2], Y = D[3], l = O = D[4], f = G = D[5], D.length === 6 ? (d = Math.sqrt(Q * Q + z * z), g = Math.sqrt(Y * Y + X * X), h = Q || z ? _e(z, Q) * se : 0, y = X || Y ? _e(X, Y) * se + h : 0, y && (g *= Math.abs(Math.cos(y * Qe))), n.svg && (l -= w - (w * Q + B * X), f -= B - (w * z + B * Y))) : (ne = D[6], ui = D[7], te = D[8], Ne = D[9], ee = D[10], Mt = D[11], l = D[12], f = D[13], c = D[14], x = _e(ne, ee), p = x * se, x && (b = Math.cos(-x), P = Math.sin(-x), H = O * b + te * P, st = G * b + Ne * P, $t = ne * b + ee * P, te = O * -P + te * b, Ne = G * -P + Ne * b, ee = ne * -P + ee * b, Mt = ui * -P + Mt * b, O = H, G = st, ne = $t), x = _e(-X, ee), v = x * se, x && (b = Math.cos(-x), P = Math.sin(-x), H = Q * b - te * P, st = z * b - Ne * P, $t = X * b - ee * P, Mt = Y * P + Mt * b, Q = H, z = st, X = $t), x = _e(z, Q), h = x * se, x && (b = Math.cos(x), P = Math.sin(x), H = Q * b + z * P, st = O * b + G * P, z = z * b - Q * P, G = G * b - O * P, Q = H, O = st), p && Math.abs(p) + Math.abs(h) > 359.9 && (p = h = 0, v = 180 - v), d = V(Math.sqrt(Q * Q + z * z + X * X)), g = V(Math.sqrt(G * G + ne * ne)), x = _e(O, G), y = Math.abs(x) > 2e-4 ? x * se : 0, _ = Mt ? 1 / (Mt < 0 ? -Mt : Mt) : 0), n.svg && (H = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !ao(Qt(t, F)), H && t.setAttribute("transform", H))), Math.abs(y) > 90 && Math.abs(y) < 270 && (s ? (d *= -1, y += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (g *= -1, y += y <= 0 ? 180 : -180)), e = e || n.uncache, n.x = l - ((n.xPercent = l && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + o, n.y = f - ((n.yPercent = f && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + o, n.z = c + o, n.scaleX = V(d), n.scaleY = V(g), n.rotation = V(h) + a, n.rotationX = V(p) + a, n.rotationY = V(v) + a, n.skewX = y + a, n.skewY = m + a, n.transformPerspective = _ + o, (n.zOrigin = parseFloat(A.split(" ")[2]) || 0) && (r[Bt] = Qn(A)), n.xOffset = n.yOffset = 0, n.force3D = pt.force3D, n.renderTransform = n.svg ? qu : ro ? uo : Gu, n.uncache = 0, n;
}, Qn = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, nr = function(t, e, n) {
  var r = et(e);
  return V(parseFloat(e) + parseFloat(qt(t, "x", n + "px", r))) + r;
}, Gu = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, uo(t, e);
}, re = "0deg", ze = "0px", ie = ") ", uo = function(t, e) {
  var n = e || this, r = n.xPercent, s = n.yPercent, o = n.x, a = n.y, u = n.z, A = n.rotation, l = n.rotationY, f = n.rotationX, c = n.skewX, d = n.skewY, g = n.scaleX, h = n.scaleY, p = n.transformPerspective, v = n.force3D, y = n.target, m = n.zOrigin, _ = "", w = v === "auto" && t && t !== 1 || v === true;
  if (m && (f !== re || l !== re)) {
    var B = parseFloat(l) * Qe, D = Math.sin(B), x = Math.cos(B), b;
    B = parseFloat(f) * Qe, b = Math.cos(B), o = nr(y, o, D * b * -m), a = nr(y, a, -Math.sin(B) * -m), u = nr(y, u, x * b * -m + m);
  }
  p !== ze && (_ += "perspective(" + p + ie), (r || s) && (_ += "translate(" + r + "%, " + s + "%) "), (w || o !== ze || a !== ze || u !== ze) && (_ += u !== ze || w ? "translate3d(" + o + ", " + a + ", " + u + ") " : "translate(" + o + ", " + a + ie), A !== re && (_ += "rotate(" + A + ie), l !== re && (_ += "rotateY(" + l + ie), f !== re && (_ += "rotateX(" + f + ie), (c !== re || d !== re) && (_ += "skew(" + c + ", " + d + ie), (g !== 1 || h !== 1) && (_ += "scale(" + g + ", " + h + ie), y.style[F] = _ || "translate(0, 0)";
}, qu = function(t, e) {
  var n = e || this, r = n.xPercent, s = n.yPercent, o = n.x, a = n.y, u = n.rotation, A = n.skewX, l = n.skewY, f = n.scaleX, c = n.scaleY, d = n.target, g = n.xOrigin, h = n.yOrigin, p = n.xOffset, v = n.yOffset, y = n.forceCSS, m = parseFloat(o), _ = parseFloat(a), w, B, D, x, b;
  u = parseFloat(u), A = parseFloat(A), l = parseFloat(l), l && (l = parseFloat(l), A += l, u += l), u || A ? (u *= Qe, A *= Qe, w = Math.cos(u) * f, B = Math.sin(u) * f, D = Math.sin(u - A) * -c, x = Math.cos(u - A) * c, A && (l *= Qe, b = Math.tan(A - l), b = Math.sqrt(1 + b * b), D *= b, x *= b, l && (b = Math.tan(l), b = Math.sqrt(1 + b * b), w *= b, B *= b)), w = V(w), B = V(B), D = V(D), x = V(x)) : (w = f, x = c, B = D = 0), (m && !~(o + "").indexOf("px") || _ && !~(a + "").indexOf("px")) && (m = qt(d, "x", o, "px"), _ = qt(d, "y", a, "px")), (g || h || p || v) && (m = V(m + g - (g * w + h * D) + p), _ = V(_ + h - (g * B + h * x) + v)), (r || s) && (b = d.getBBox(), m = V(m + r / 100 * b.width), _ = V(_ + s / 100 * b.height)), b = "matrix(" + w + "," + B + "," + D + "," + x + "," + m + "," + _ + ")", d.setAttribute("transform", b), y && (d.style[F] = b);
}, Wu = function(t, e, n, r, s) {
  var o = 360, a = Z(s), u = parseFloat(s) * (a && ~s.indexOf("rad") ? se : 1), A = u - r, l = r + A + "deg", f, c;
  return a && (f = s.split("_")[1], f === "short" && (A %= o, A !== A % (o / 2) && (A += A < 0 ? o : -o)), f === "cw" && A < 0 ? A = (A + o * xi) % o - ~~(A / o) * o : f === "ccw" && A > 0 && (A = (A - o * xi) % o - ~~(A / o) * o)), t._pt = c = new ct(t._pt, e, n, r, A, Iu), c.e = l, c.u = "deg", t._props.push(n), c;
}, Ti = function(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}, ju = function(t, e, n) {
  var r = Ti({}, n._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = n.style, a, u, A, l, f, c, d, g;
  r.svg ? (A = n.getAttribute("transform"), n.setAttribute("transform", ""), o[F] = e, a = $e(n, 1), Je(n, F), n.setAttribute("transform", A)) : (A = getComputedStyle(n)[F], o[F] = e, a = $e(n, 1), o[F] = A);
  for (u in zt)
    A = r[u], l = a[u], A !== l && s.indexOf(u) < 0 && (d = et(A), g = et(l), f = d !== g ? qt(n, u, A, g) : parseFloat(A), c = parseFloat(l), t._pt = new ct(t._pt, a, u, f, c - f, _r), t._pt.u = g || 0, t._props.push(u));
  Ti(a, r);
};
ft("padding,margin,Width,Radius", function(i15, t) {
  var e = "Top", n = "Right", r = "Bottom", s = "Left", o = (t < 3 ? [e, n, r, s] : [e + s, e + n, r + n, r + s]).map(function(a) {
    return t < 2 ? i15 + a : "border" + a + i15;
  });
  Pn[t > 1 ? "border" + i15 : i15] = function(a, u, A, l, f) {
    var c, d;
    if (arguments.length < 4)
      return c = o.map(function(g) {
        return St(a, g, A);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (l + "").split(" "), d = {}, o.forEach(function(g, h) {
      return d[g] = c[h] = c[h] || c[(h - 1) / 2 | 0];
    }), a.init(u, d, f);
  };
});
var Ao = {
  name: "css",
  register: Cr,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, n, r, s) {
    var o = this._props, a = t.style, u = n.vars.startAt, A, l, f, c, d, g, h, p, v, y, m, _, w, B, D, x;
    Kr || Cr(), this.styles = this.styles || no(t), x = this.styles.props, this.tween = n;
    for (h in e)
      if (h !== "autoRound" && (l = e[h], !(ht[h] && Rs(h, e, n, r, t, s)))) {
        if (d = typeof l, g = Pn[h], d === "function" && (l = l.call(n, r, t, s), d = typeof l), d === "string" && ~l.indexOf("random(") && (l = We(l)), g)
          g(this, t, h, l, n) && (D = 1);
        else if (h.substr(0, 2) === "--")
          A = (getComputedStyle(t).getPropertyValue(h) + "").trim(), l += "", Rt.lastIndex = 0, Rt.test(A) || (p = et(A), v = et(l)), v ? p !== v && (A = qt(t, h, A, v) + v) : p && (l += p), this.add(a, "setProperty", A, l, r, s, 0, 0, h), o.push(h), x.push(h, 0, a[h]);
        else if (d !== "undefined") {
          if (u && h in u ? (A = typeof u[h] == "function" ? u[h].call(n, r, t, s) : u[h], Z(A) && ~A.indexOf("random(") && (A = We(A)), et(A + "") || (A += pt.units[h] || et(St(t, h)) || ""), (A + "").charAt(1) === "=" && (A = St(t, h))) : A = St(t, h), c = parseFloat(A), y = d === "string" && l.charAt(1) === "=" && l.substr(0, 2), y && (l = l.substr(2)), f = parseFloat(l), h in Ot && (h === "autoAlpha" && (c === 1 && St(t, "visibility") === "hidden" && f && (c = 0), x.push("visibility", 0, a.visibility), Yt(this, a, "visibility", c ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), h !== "scale" && h !== "transform" && (h = Ot[h], ~h.indexOf(",") && (h = h.split(",")[0]))), m = h in zt, m) {
            if (this.styles.save(h), _ || (w = t._gsap, w.renderTransform && !e.parseTransform || $e(t, e.parseTransform), B = e.smoothOrigin !== false && w.smooth, _ = this._pt = new ct(this._pt, a, F, 0, 1, w.renderTransform, w, 0, -1), _.dep = 1), h === "scale")
              this._pt = new ct(this._pt, w, "scaleY", c, (y ? Ee(c, y + f) : f) - c || 0, _r), this._pt.u = 0, o.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              x.push(Bt, 0, a[Bt]), l = Ru(l), w.svg ? xr(t, l, 0, B, 0, this) : (v = parseFloat(l.split(" ")[2]) || 0, v !== w.zOrigin && Yt(this, w, "zOrigin", w.zOrigin, v), Yt(this, a, h, Qn(A), Qn(l)));
              continue;
            } else if (h === "svgOrigin") {
              xr(t, l, 1, B, 0, this);
              continue;
            } else if (h in oo) {
              Wu(this, w, h, c, y ? Ee(c, y + l) : l);
              continue;
            } else if (h === "smoothOrigin") {
              Yt(this, w, "smooth", w.smooth, l);
              continue;
            } else if (h === "force3D") {
              w[h] = l;
              continue;
            } else if (h === "transform") {
              ju(this, l, t);
              continue;
            }
          } else
            h in a || (h = Le(h) || h);
          if (m || (f || f === 0) && (c || c === 0) && !Mu.test(l) && h in a)
            p = (A + "").substr((c + "").length), f || (f = 0), v = et(l) || (h in pt.units ? pt.units[h] : p), p !== v && (c = qt(t, h, A, v)), this._pt = new ct(this._pt, m ? w : a, h, c, (y ? Ee(c, y + f) : f) - c, !m && (v === "px" || h === "zIndex") && e.autoRound !== false ? ku : _r), this._pt.u = v || 0, p !== v && v !== "%" && (this._pt.b = A, this._pt.r = Su);
          else if (h in a)
            Hu.call(this, t, h, A, y ? y + l : l);
          else if (h in t)
            this.add(t, h, A || t[h], y ? y + l : l, r, s);
          else {
            Fr(h, l);
            continue;
          }
          m || (h in a ? x.push(h, 0, a[h]) : x.push(h, 1, A || t[h])), o.push(h);
        }
      }
    D && Js(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Gr())
      for (var n = e._pt; n; )
        n.r(t, n.d), n = n._next;
    else
      e.styles.revert();
  },
  get: St,
  aliases: Ot,
  getSetter: function(t, e, n) {
    var r = Ot[e];
    return r && r.indexOf(",") < 0 && (e = r), e in zt && e !== Bt && (t._gsap.x || St(t, "x")) ? n && Ci === n ? e === "scale" ? Nu : Fu : (Ci = n || {}) && (e === "scale" ? zu : Uu) : t.style && !Or(t.style[e]) ? Ou : ~e.indexOf("-") ? Lu : Hr(t, e);
  },
  core: {
    _removeProperty: Je,
    _getMatrix: Wr
  }
};
vt.utils.checkPrefix = Le;
vt.core.getStyleSaver = no;
(function(i15, t, e, n) {
  var r = ft(i15 + "," + t + "," + e, function(s) {
    zt[s] = 1;
  });
  ft(t, function(s) {
    pt.units[s] = "deg", oo[s] = 1;
  }), Ot[r[13]] = i15 + "," + t, ft(n, function(s) {
    var o = s.split(":");
    Ot[o[1]] = r[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i15) {
  pt.units[i15] = "px";
});
vt.registerPlugin(Ao);
var gt = vt.registerPlugin(Ao) || vt;
gt.core.Tween;
const Ju = "data:image/png;base64,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", Zu = (i15) => `
<div>
  <div id="playerui-controls-${i15}" style="z-index: 9999;
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
    <div style="flex-grow: 1; display: flex; align-items: center;">
      <span id="time-${i15}" style="margin:0 0.5em"></span>
      <input
          id="seek-${i15}"
          style="
            width: 80%;
            -webkit-appearance: none;
            background-color: #ad3030;
            border-radius: 8px;
            height: 5px;"
          type="range"
          value="0"
          step="0.1"
          min="0"
      />
      <span id="duration-${i15}" style="margin:0 0.5em"></span>
    </div>
    <div style="padding-right: 0.5em;">
      <input id="loop-${i15}" type="checkbox"/>
      <label>Loop</label>
    </div>
  </div>
  <div id="play-${i15}" style="
      display: flex;
      position: absolute; 
      top: 0; left: 0; right: 0; bottom: 0;
      opacity: 0.5;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      ">
      <div style="
        background: url(${Ju}) center / contain no-repeat;
        width: 50%;
        height: 50%;
        "></div>
  </div>
</div>
`, $u = (i15) => `
  <div id="playerui-${i15}">
    <div id="player-${i15}" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;"></div>
  </div>
`;
function tA(i15) {
  const t = document.createElement("template");
  return i15 = i15.trim(), t.innerHTML = i15, t.content.firstChild;
}
class rl {
  constructor(t, e = {}) {
    C(this, "controls");
    C(this, "playing", false);
    C(this, "$play");
    C(this, "$keyboard");
    C(this, "elements");
    var o;
    if (this.id = t, this.controls = tA(Zu(this.id)), (o = document.querySelector(`#${t}`)) == null || o.appendChild(this.controls), this.elements = {
      controls: this.controls.querySelector(
        `#playerui-controls-${t}`
      ),
      play: this.controls.querySelector(`#play-${t}`),
      time: this.controls.querySelector(`#time-${t}`),
      seek: this.controls.querySelector(`#seek-${t}`),
      duration: this.controls.querySelector(
        `#duration-${t}`
      ),
      loop: this.controls.querySelector(`#loop-${t}`)
    }, e != null && e.position) {
      const { bottom: a, width: u, left: A, height: l } = e.position;
      this.elements.controls.style.bottom = a != null ? a : this.elements.controls.style.bottom, this.elements.controls.style.width = u != null ? u : this.elements.controls.style.width, this.elements.controls.style.left = A != null ? A : this.elements.controls.style.left, this.elements.controls.style.height = l != null ? l : this.elements.controls.style.height;
    }
    this.setTimeDuration(0, 0, true);
    const n = gt.timeline({
      paused: true
    }).to(this.elements.play, {
      opacity: 0,
      duration: 0.5,
      scale: 1.5,
      ease: "back"
    }), r = gt.timeline({
      paused: true
    }).to(this.elements.play, {
      opacity: 0.5,
      duration: 0.3,
      scale: 1,
      ease: "back"
    }), s = (a) => (this.playing = !this.playing, new k((u) => {
      u.next({ evt: a, timestamp: Date.now() }), u.complete(), this.playing ? (n.seek(0), n.play()) : (r.seek(0), r.play());
    }));
    this.$play = kt(this.elements.play, "click").pipe(
      ot((a) => s(a)),
      Ge()
    ), this.$keyboard = kt(document, "keydown").pipe(
      ot((a) => {
        const { key: u, code: A, keyCode: l } = a;
        return u == " " || A == "Space" || l == 32 ? s(a) : T({ evt: a, timestamp: Date.now() });
      }),
      Ge()
    );
  }
  loopObservable() {
    return kt(this.elements.loop, "change");
  }
  seekObservable() {
    return kt(this.elements.seek, "input");
  }
  playObservable() {
    return this.$play;
  }
  keyboardObservable() {
    return this.$keyboard;
  }
  setTimeDuration(t, e, n) {
    this.updateTime(t), this.elements.seek.max = `${e}`, this.elements.duration.textContent = Mi(e / 1e3), this.elements.loop.checked = n;
  }
  updateTime(t) {
    this.elements.time.textContent = Mi(t / 1e3, true), this.elements.seek.value = `${t}`;
  }
  get seek() {
    return Number(this.elements.seek.value);
  }
  disableLoop({ loop: t }) {
    this.elements.loop && (this.elements.loop.disabled = t);
  }
}
class il {
  constructor(t, e, n = {}) {
    C(this, "time", 0);
    C(this, "isPlaying", false);
    C(this, "playing$", new Fe());
    C(this, "loop", true);
    C(this, "player");
    C(this, "renderer");
    C(this, "ui");
    C(this, "durationSubscription");
    C(this, "keyboardSubscription");
    C(this, "seekSubscription");
    C(this, "loopSubscription");
    C(this, "playSubscription");
    var o;
    this.id = t, this.playlist = e, this.opts = n, this.ui = document.createElement("div"), this.ui.innerHTML = $u(this.id), (o = document.querySelector(`#${t}`)) == null || o.appendChild(this.ui);
    const r = this.ui.querySelector(
      `#player-${t}`
    ), s = this.renderer = new bo(r);
    this.player = new tl(this.playlist, s, n.viewport), this.mounted(), n.controls && (this.playSubscription = n.controls.playObservable().subscribe(({ timestamp: a }) => this.playStop(a)), this.loopSubscription = n.controls.loopObservable().subscribe((a) => {
      var u;
      this.loop = (u = a.target) == null ? void 0 : u.checked;
    }), this.seekSubscription = n.controls.seekObservable().pipe(As(() => this.seek(n.controls.seek))).subscribe(), this.durationSubscription = e.duration().subscribe((a) => {
      n.controls.setTimeDuration(this.time, a, this.loop);
    }), this.keyboardSubscription = n.controls.keyboardObservable().subscribe(({ evt: a, timestamp: u }) => {
      const { key: A, code: l, keyCode: f } = a;
      (A == " " || l == "Space" || f == 32) && this.playStop(u), (A == "ArrowRight" || l == "ArrowRight" || f == 39) && this.forward(), (A == "ArrowLeft" || l == "ArrowLeft" || f == 37) && this.backward();
    }));
  }
  destroy() {
    var t, e, n, r, s;
    this.stop(), this.ui.remove(), (t = this.durationSubscription) == null || t.unsubscribe(), (e = this.keyboardSubscription) == null || e.unsubscribe(), (n = this.seekSubscription) == null || n.unsubscribe(), (r = this.loopSubscription) == null || r.unsubscribe(), (s = this.playSubscription) == null || s.unsubscribe();
  }
  mounted() {
    var t, e;
    this.opts.controlsMaster && ((t = this.player) == null || t.on("time", (n) => {
      var r;
      (r = this.opts.controls) == null || r.updateTime(n);
    })), (e = this.player) == null || e.on("completed", () => {
      this.stop(), this.seek(0);
    }), this.playlist.seek(0), this.playlist.show(this.renderer).subscribe(() => {
    });
  }
  get position() {
    return this.time;
  }
  forward() {
  }
  backward() {
  }
  seek(t) {
    var r;
    const e = this.time = t;
    (r = this.opts) != null && r.controls && this.opts.controls.updateTime(e);
    const n = this.isPlaying;
    return n && this.player.stop(), this.playlist.seek(parseFloat(`${t}`)), this.playlist.time = t, this.playlist.show(this.renderer).pipe(
      ot(() => (n && this.player.play({
        loop: this.loop,
        synced: this.opts.synced,
        baseline: Date.now()
      }), T(null)))
    );
  }
  async playStop(t) {
    this.isPlaying ? this.stop() : this.play(t);
  }
  play(t) {
    var e;
    this.isPlaying || (this.opts.controls && this.opts.controls.disableLoop({ loop: true }), this.isPlaying = true, (e = this.player) == null || e.play({
      loop: this.loop,
      synced: this.opts.synced,
      baseline: t
    }));
  }
  async stop() {
    var t;
    this.opts.controls && this.opts.controls.disableLoop({ loop: false }), this.isPlaying = false, (t = this.player) == null || t.stop();
  }
}
function Mi(i15, t = false) {
  let e = parseInt(`${i15}`, 10);
  e = e < 0 ? 0 : e;
  let n = Math.floor(e % 60), r = Math.floor(e / 60 % 60), s = Math.floor(e / 3600);
  s = s > 0 ? s + ":" : "", r = (s && r < 10 ? "0" + r : r) + ":", n = n < 10 ? "0" + n : n;
  const o = t ? `:${Math.floor(i15 * 10 % 10)}` : "";
  return s + r + n + o;
}
class eA {
  constructor(t) {
    C(this, "duration", 1e3);
    var e;
    t && (this.duration = (e = t.duration) != null ? e : this.duration);
  }
}
class jr extends eA {
  constructor(e) {
    super(e);
    C(this, "timeline", null);
    C(this, "src", null);
    C(this, "dst", null);
    C(this, "srcStyle", null);
    C(this, "dstStyle", null);
  }
  init(e, n) {
    this.src = e, this.dst = n, this.srcStyle = e.el.getAttribute("style"), this.dstStyle = n.el.getAttribute("style"), this.timeline && this.timeline.kill(), this.timeline = gt.timeline({ paused: true });
  }
  reset() {
    this.timeline && this.srcStyle && (this.src.el.setAttribute("style", this.srcStyle), this.dst.el.setAttribute("style", this.dstStyle));
  }
  run(e) {
    if (!this.timeline)
      throw new Error("Transition not initialized");
    const n = this.timeline;
    return new k((r) => {
      n.seek(e / 1e3);
      const s = (o) => {
        this.reset(), r.next("transition:end"), r.complete();
      };
      return n.eventCallback("onComplete", s), n.play(), () => {
        n.eventCallback("onComplete", null), n.kill();
      };
    });
  }
  seek(e) {
    if (!this.timeline)
      throw new Error("Transition not initialized");
    const n = e / 1e3;
    this.timeline.seek(n);
  }
}
class nA extends jr {
  constructor(t) {
    super(t);
  }
  init(t, e) {
    super.init(t, e);
    const n = this.duration / 1e3;
    this.timeline.fromTo(
      t.el,
      { opacity: 1, zIndex: 0 },
      { opacity: 0, duration: n }
    ), this.timeline.fromTo(
      e.el,
      { opacity: 0, zIndex: 1 },
      { opacity: 1, duration: n },
      0
    );
  }
}
class rA extends jr {
  constructor(t) {
    super(t), this.opts = t;
  }
  init(t, e) {
    var r;
    super.init(t, e);
    const n = this.duration / 1e3;
    ((r = this.opts) == null ? void 0 : r.ease) != null, this.timeline.fromTo(
      t.el,
      { opacity: 1, zIndex: 0 },
      { opacity: 0, duration: n }
    ), this.timeline.fromTo(
      e.el,
      { left: "100%", zIndex: 1 },
      { left: 0, duration: n },
      0
    );
  }
}
class iA extends jr {
  constructor(t) {
    super(t);
  }
  init(t, e) {
    super.init(t, e);
    const n = this.duration / 1e3, r = {
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    };
    gt.set(t.el.parentElement, { perspective: 400 });
    const s = this.timeline;
    s.set(t.el, r), s.set(e.el, r), s.fromTo(
      t.el,
      { rotationY: 0 },
      { duration: n, rotationY: 180, ease: "bounce" },
      0
    ), s.fromTo(
      e.el,
      { rotationY: 180 },
      { duration: n, rotationY: 360, ease: "bounce" },
      0
    );
  }
}
const sA = async (i15) => {
  if (!i15.uri.startsWith("https://"))
    switch (i15.uri) {
      case "transition://crossfade":
        return new nA(i15.opts);
      case "transition://side-scroll":
        return new rA(i15.opts);
      case "transition://flip":
        return new iA(i15.opts);
    }
};
var nn = { exports: {} };
(function(i15) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (e = false));
  function r(u, A, l) {
    this.fn = u, this.context = A, this.once = l || false;
  }
  function s(u, A, l, f, c) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var d = new r(l, f || u, c), g = e ? e + A : A;
    return u._events[g] ? u._events[g].fn ? u._events[g] = [u._events[g], d] : u._events[g].push(d) : (u._events[g] = d, u._eventsCount++), u;
  }
  function o(u, A) {
    --u._eventsCount === 0 ? u._events = new n() : delete u._events[A];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var A = [], l, f;
    if (this._eventsCount === 0)
      return A;
    for (f in l = this._events)
      t.call(l, f) && A.push(e ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? A.concat(Object.getOwnPropertySymbols(l)) : A;
  }, a.prototype.listeners = function(A) {
    var l = e ? e + A : A, f = this._events[l];
    if (!f)
      return [];
    if (f.fn)
      return [f.fn];
    for (var c = 0, d = f.length, g = new Array(d); c < d; c++)
      g[c] = f[c].fn;
    return g;
  }, a.prototype.listenerCount = function(A) {
    var l = e ? e + A : A, f = this._events[l];
    return f ? f.fn ? 1 : f.length : 0;
  }, a.prototype.emit = function(A, l, f, c, d, g) {
    var h = e ? e + A : A;
    if (!this._events[h])
      return false;
    var p = this._events[h], v = arguments.length, y, m;
    if (p.fn) {
      switch (p.once && this.removeListener(A, p.fn, void 0, true), v) {
        case 1:
          return p.fn.call(p.context), true;
        case 2:
          return p.fn.call(p.context, l), true;
        case 3:
          return p.fn.call(p.context, l, f), true;
        case 4:
          return p.fn.call(p.context, l, f, c), true;
        case 5:
          return p.fn.call(p.context, l, f, c, d), true;
        case 6:
          return p.fn.call(p.context, l, f, c, d, g), true;
      }
      for (m = 1, y = new Array(v - 1); m < v; m++)
        y[m - 1] = arguments[m];
      p.fn.apply(p.context, y);
    } else {
      var _ = p.length, w;
      for (m = 0; m < _; m++)
        switch (p[m].once && this.removeListener(A, p[m].fn, void 0, true), v) {
          case 1:
            p[m].fn.call(p[m].context);
            break;
          case 2:
            p[m].fn.call(p[m].context, l);
            break;
          case 3:
            p[m].fn.call(p[m].context, l, f);
            break;
          case 4:
            p[m].fn.call(p[m].context, l, f, c);
            break;
          default:
            if (!y)
              for (w = 1, y = new Array(v - 1); w < v; w++)
                y[w - 1] = arguments[w];
            p[m].fn.apply(p[m].context, y);
        }
    }
    return true;
  }, a.prototype.on = function(A, l, f) {
    return s(this, A, l, f, false);
  }, a.prototype.once = function(A, l, f) {
    return s(this, A, l, f, true);
  }, a.prototype.removeListener = function(A, l, f, c) {
    var d = e ? e + A : A;
    if (!this._events[d])
      return this;
    if (!l)
      return o(this, d), this;
    var g = this._events[d];
    if (g.fn)
      g.fn === l && (!c || g.once) && (!f || g.context === f) && o(this, d);
    else {
      for (var h = 0, p = [], v = g.length; h < v; h++)
        (g[h].fn !== l || c && !g[h].once || f && g[h].context !== f) && p.push(g[h]);
      p.length ? this._events[d] = p.length === 1 ? p[0] : p : o(this, d);
    }
    return this;
  }, a.prototype.removeAllListeners = function(A) {
    var l;
    return A ? (l = e ? e + A : A, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, i15.exports = a;
})(nn);
const oA = nn.exports;
class Xn extends nn.exports.EventEmitter {
  constructor(e, n) {
    super();
    C(this, "messageHandler");
    if (this.resourceManager = e, window.parent) {
      const r = this.messageHandler = (s) => {
        let o;
        try {
          o = JSON.parse(s.data);
        } catch {
          return;
        }
        let a;
        switch (o.method) {
          case "unload":
            this.unload();
            break;
        }
        window.parent.postMessage(
          JSON.stringify({
            counter: o.counter,
            result: a
          })
        );
      };
      window.addEventListener("message", r, false);
    }
  }
  unload() {
  }
  mimeType() {
  }
  play(e) {
    return Ba;
  }
  stop() {
  }
  show(e, n) {
    return T("shown");
  }
  seek(e) {
    return T([e, 0]);
  }
  duration() {
    return T(0);
  }
  toggleDebug() {
  }
  volume(e) {
  }
}
class Jr extends Xn {
  constructor(e, n) {
    super(e, n);
    C(this, "timeline");
    C(this, "offset", 0);
    this.timeline = gt.timeline({ paused: true, repeat: -1 });
  }
  play(e) {
    return this.timeline.play(this.offset / 1e3), this.timeline.eventCallback("onStart", () => {
    }), ss(
      new k((n) => {
        var s;
        const r = (o) => {
          n.next("played"), n.complete();
        };
        return (s = this.timeline) == null || s.eventCallback("onComplete", r), () => {
          var o, a;
          (o = this.timeline) == null || o.eventCallback("onComplete", null), (a = this.timeline) == null || a.pause();
        };
      }),
      super.play(e)
    );
  }
  stop() {
    this.timeline.pause();
  }
  seek(e) {
    return this.offset = e, this.timeline.seek(e / 1e3), T([e, 0]);
  }
  duration() {
    return T((this.timeline.duration() || 0) * 1e3);
  }
}
class aA extends Jr {
  constructor(e, n) {
    super(e, n);
    C(this, "img");
    C(this, "src");
    C(this, "size");
    this.src = n.src, this.size = n.size;
  }
  load(e) {
    return new k((n) => {
      const r = document.createElement("img");
      return r.src = e, r.onload = (s) => {
        n.next("loaded"), n.complete();
      }, r.onerror = (s) => {
        n.error("error");
      }, () => {
        r.onerror = null, r.onload = null;
      };
    });
  }
  show(e, n) {
    if (!this.img)
      this.img = document.createElement("div");
    else if (this.img.style.background)
      return T("shown");
    return ut(this.resourceManager.getMedia(this.src)).pipe(
      ot((r) => {
        const s = this.img;
        return s.style.background = `url( ${r || this.src} ) no-repeat center`, s.style.backgroundSize = this.size ? this.size : "contain", s.style.width = "100%", s.style.height = "100%", e.appendChild(s), this.load(r || this.src);
      })
    );
  }
  unload() {
    var e;
    this.img && (this.img.style.background = "none", (e = this.img.parentElement) == null || e.removeChild(this.img), this.img = void 0);
  }
  mimeType() {
    return "image/jpeg";
  }
}
class Zr extends Xn {
  constructor(e, n, r) {
    super(n, r);
    C(this, "items", []);
    C(this, "el");
    this.name = e;
  }
  static async fromLayoutJSON(e, n) {
    const r = new Zr(e.name, n, e.args), s = e.items;
    return await Promise.all(
      s.map(async (o) => {
        const a = await oi.fromJSON(
          o.playlist,
          n
        );
        r.add({
          css: o.css,
          playlist: a
        });
      })
    ), r;
  }
  unload() {
    this.items.map((e) => {
      e.playlist.layers.forEach((n) => n.unload()), e.renderer.clean();
    });
  }
  toggleDebug() {
    this.items.map(({ renderer: e, playlist: n }) => {
      e.toggleDebug();
    });
  }
  add(e) {
    const n = document.createElement("div");
    n.style.position = "absolute";
    const r = e.css;
    for (let s in r) {
      const o = r[s];
      o && (n.style[s] = o);
    }
    this.items.push({
      renderer: new bo(n),
      playlist: e.playlist
    });
  }
  duration() {
    return Sr(
      ...this.items.map((n) => n.playlist.duration())
    ).pipe(Sa());
  }
  show(e) {
    return this.el = e, this.items.forEach((n) => {
      e.appendChild(n.renderer.el);
    }), cn(
      this.clipLayouts().map((n) => n.playlist.show(n.renderer))
    ).pipe(J((n) => n[0]));
  }
  play(e) {
    return cn(
      this.clipLayouts().map(
        (n) => n.playlist.play(n.renderer, e, { loop: true })
      )
    ).pipe(J((n) => n[0]));
  }
  seek(e) {
    return cn(
      this.items.map((n) => n.playlist.seek(e))
    ).pipe(J((n) => n[0]));
  }
  findParentClip(e) {
    if (e.parentElement) {
      const n = e.parentElement;
      return n.dataset.clip ? n : this.findParentClip(n);
    } else
      return null;
  }
  clipLayouts() {
    const e = this.el;
    if (!e)
      return this.items;
    const n = this.findParentClip(e);
    if (n) {
      const r = JSON.parse(n.dataset.clip), { x: s, y: o } = n.getBoundingClientRect();
      return this.items.filter((a) => {
        const u = a.renderer.el.getBoundingClientRect();
        return this.areRectanglesIntersecting(u, r, s, o);
      });
    } else
      return this.items;
  }
  areRectanglesIntersecting(e, n, r, s) {
    let { x: o, width: a, y: u, height: A } = e;
    const { x: l, width: f, y: c, height: d } = n;
    return o -= r, u -= s, !(o >= l + f || o + a <= l || u >= c + d || u + A <= c);
  }
}
const ai = class extends Xn {
  constructor(e, n, r, s) {
    super(r);
    C(this, "messageHandler");
    C(this, "origin");
    C(this, "resolvers", {});
    this.parent = e, this.iframe = n;
    const o = this.messageHandler = (a) => {
      let u;
      try {
        u = JSON.parse(a.data);
      } catch {
        return;
      }
      typeof u.counter < "u" && this.resolvers[u.counter] && (this.resolvers[u.counter](u.result), delete this.resolvers[u.counter]);
    };
    this.origin = s, this.parent.addEventListener("message", o, false);
  }
  static async fromJSON(e) {
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
  play(e) {
    return ut(this.callMethod("play"));
  }
  stop() {
    return this.callMethod("stop");
  }
  duration() {
    return this.callMethod("duration");
  }
  seek(e) {
    return this.callMethod("seek", [e]);
  }
  volume(e) {
    return this.callMethod("volume", [e]);
  }
  callMethod(e, n) {
    var o;
    const r = ai.id++, s = {
      counter: r,
      method: e,
      args: n
    };
    return (o = this.iframe.contentWindow) == null || o.postMessage(
      JSON.stringify(s),
      this.origin
    ), T(this.resolvers[r]);
  }
};
let rr = ai;
C(rr, "id", 0);
const lo = (i15, t) => {
  for (let e in t) {
    const n = t[e];
    n && (i15.style[e] = n);
  }
}, Ii = {
  max: 100,
  min: 0
}, uA = {
  snake: {
    from: {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.05
    },
    perspective: 400,
    chars: true
  },
  upper: {
    from: {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01
    },
    perspective: 400,
    chars: false
  }
};
class fo extends Jr {
  constructor(e, n) {
    super(e, n);
    C(this, "div");
    C(this, "text");
    C(this, "css");
    C(this, "font");
    C(this, "fontFace");
    this.text = n.text, this.css = n.css, this.font = n.font;
    const r = this.div = this.div = document.createElement("div");
    r.textContent = this.text, lo(r, this.css);
    const s = this.timeline = gt.timeline({ paused: true });
    if (n.animation) {
      const o = AA(r, n.animation.chars);
      n.animation.perspective && gt.set(r, { perspective: n.animation.perspective }), s.from(o.chars || o.words, n.animation.from);
    }
  }
  show(e, n) {
    var r;
    return this.offset = n, (r = this.div) != null && r.parentElement || (e.appendChild(this.div), this.font && (this.fontFace = new FontFace(this.font.name, `url(${this.font.url})`), document.fonts.add(this.fontFace))), T("loaded");
  }
  unload() {
    var e;
    this.div && ((e = this.div.parentElement) == null || e.removeChild(this.div)), this.fontFace && document.fonts.delete(this.fontFace);
  }
  mimeType() {
    return "text";
  }
  autoFitText(e) {
    if (this.div && this.div.textContent) {
      const n = this.div;
      let r = 1;
      const s = function(h) {
        n.style.fontSize = h + "em";
      };
      s(r);
      const o = this.div.getBoundingClientRect(), a = o.width / this.div.offsetWidth, u = o.height / this.div.offsetHeight, A = parseInt(`${gt.getProperty(this.div, "padding", "px")}`) || 0, l = parseInt(`${gt.getProperty(this.div, "border-width", "px")}`) || 0, f = A * 1.99 * a + l * 1.99 * a, c = A * 1.99 * u + l * 1.99 * u;
      let d = e && e.min || Ii.min, g = e && e.max || Ii.max;
      for (; d <= g; ) {
        let h = (d + g) / 2;
        s(h);
        const p = n.getBoundingClientRect();
        o.height - c >= p.height && o.width - f >= p.width ? (d = h + 0.01, r = h) : g = h - 0.01;
      }
      s(r);
    }
  }
}
C(fo, "animationPresets", uA);
function co(i15) {
  const t = document.createElement("div");
  return t.innerHTML = i15.trim(), Array.prototype.slice.call(t.children);
}
function AA(i15, t) {
  if (t) {
    const e = [], n = i15.innerHTML.split(" ").map(
      (r, s, o) => lA(r, e, s === o.length - 1)
    );
    return i15.replaceChildren(...n), { words: n, chars: e };
  } else {
    const e = i15.innerHTML.split(" ").map(
      (r) => `<div style="display: inline-block; text-align: start; position: relative;">${r}</div>`
    ).join(
      '<div style="display: inline-block; text-align: start; position: relative;">&nbsp;</div>'
    ), n = co(e);
    return i15.replaceChildren(...n), { words: n };
  }
}
function lA(i15, t, e) {
  const n = document.createElement("div");
  n.style.display = "inline-block", n.style.textAlign = "start", n.style.position = "relative";
  const r = co(
    i15.split("").map(
      (s) => `<div style="display: inline-block; text-align: start; position: relative;">${s}</div>`
    ).join("")
  );
  if (!e) {
    const s = document.createElement("div");
    s.style.display = "inline-block", s.style.textAlign = "start", s.style.position = "relative", s.innerHTML = "&nbsp;", r.push(s);
  }
  return n.replaceChildren(...r), t.push.apply(t, r), n;
}
class fA extends Xn {
  constructor(e, n) {
    super(e);
    C(this, "video");
    C(this, "src");
    C(this, "_volume");
    C(this, "_duration", 0);
    C(this, "offset", 0);
    this.src = n.src, this._volume = n.volume;
  }
  show(e, n) {
    return this.load().pipe(
      ot(() => (e.appendChild(this.video), this.seek(n).pipe(J(() => "shown"))))
    );
  }
  load() {
    if (this.video) {
      if (this.video.src)
        return T("video:loaded");
    } else {
      const e = this.video = document.createElement(
        "video"
      );
      e.style.width = "100%", e.style.height = "100%", e.loop = true;
    }
    return typeof this._volume < "u" && this.volume(this._volume), ut(this.resourceManager.getMedia(this.src)).pipe(
      ot((e) => {
        const n = this.video;
        e = e || this.src, n.src = e;
        let r;
        return n.readyState < 4 ? (r = new k((s) => {
          const o = (u) => {
            s.next("video:loaded"), s.complete();
          }, a = (u) => {
            s.error("error");
          };
          return n.addEventListener("canplaythrough", o), n.addEventListener("error", a), () => {
            n.removeEventListener("canplaythrough", o);
          };
        }), n.load()) : r = T("vide0:loaded"), r;
      })
    );
  }
  unload() {
    var e;
    this.video && (this.video.src = "", (e = this.video.parentElement) == null || e.removeChild(this.video), this.video = void 0);
  }
  play(e) {
    return this.load().pipe(
      ot(() => {
        const n = this.video;
        if (!n)
          throw new Error("Video not loaded");
        const r = n.play();
        return e.pipe(
          _n(),
          Nn((s) => {
            s > n.currentTime * 1e3 && this.seek(s / 1e3);
          })
        ).subscribe(), r && r.catch((s) => {
          console.error(`Video play error: ${s}`);
        }), kt(n, "playing").pipe(
          Ye(1),
          ot(
            () => Pa(
              new k((s) => () => {
                n.pause();
              }),
              super.play(e)
            )
          )
        );
      })
    );
  }
  stop() {
    var e;
    (e = this.video) == null || e.pause();
  }
  seek(e) {
    if (this.offset = e, this.video && this.video.readyState >= 1) {
      this.video.currentTime = e / 1e3;
      const n = T([e, 0]);
      return kt(this.video, "seeked").pipe(
        Ye(1),
        ia({
          each: 500,
          with: () => n
        }),
        J((r) => [e, 0])
      );
    }
    return T([e, 0]);
  }
  volume(e) {
    this.video && (this._volume = this.video.volume = e);
  }
  duration() {
    if (this._duration)
      return T(this._duration);
    let e = this.video;
    return e || (e = document.createElement("video"), e.preload = "metadata", e.src = this.src), kt(e, "loadedmetadata").pipe(
      Ye(1),
      J((n) => {
        var r;
        return e && (this._duration = ((r = e == null ? void 0 : e.duration) != null ? r : 0) * 1e3, e.src = ""), this._duration;
      })
    );
  }
  mimeType() {
    return "video/mpeg4";
  }
}
const oe = {};
function cA(i15) {
  oe.context = i15;
}
const hA = (i15, t) => i15 === t, ho = Symbol("solid-proxy"), dA = Symbol("solid-track"), Tn = {
  equals: hA
};
let go = yo;
const Zt = 1, Mn = 2, po = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var tt = null;
let ce = null, W = null, rt = null, Lt = null, $r = 0;
function pn(i15, t) {
  const e = W, n = tt, r = i15.length === 0, s = r ? po : {
    owned: null,
    cleanups: null,
    context: null,
    owner: t || n
  }, o = r ? i15 : () => i15(() => ve(() => ei(s)));
  tt = s, W = null;
  try {
    return on(o, true);
  } finally {
    W = e, tt = n;
  }
}
function Br(i15, t) {
  t = t ? Object.assign({}, Tn, t) : Tn;
  const e = {
    value: i15,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, n = (r) => (typeof r == "function" && (r = r(e.value)), vo(e, r));
  return [mo.bind(e), n];
}
function Dt(i15, t, e) {
  const n = ti(i15, t, false, Zt);
  sn(n);
}
function gA(i15, t, e) {
  go = yA;
  const n = ti(i15, t, false, Zt);
  n.user = true, Lt ? Lt.push(n) : sn(n);
}
function tn(i15, t, e) {
  e = e ? Object.assign({}, Tn, e) : Tn;
  const n = ti(i15, t, true, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = e.equals || void 0, sn(n), mo.bind(n);
}
function ve(i15) {
  const t = W;
  W = null;
  try {
    return i15();
  } finally {
    W = t;
  }
}
function rn(i15) {
  gA(() => ve(i15));
}
function Yn(i15) {
  return tt === null || (tt.cleanups === null ? tt.cleanups = [i15] : tt.cleanups.push(i15)), i15;
}
function pA(i15) {
  const t = tn(i15), e = tn(() => Dr(t()));
  return e.toArray = () => {
    const n = e();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, e;
}
function mo() {
  const i15 = ce;
  if (this.sources && (this.state || i15))
    if (this.state === Zt || i15)
      sn(this);
    else {
      const t = rt;
      rt = null, on(() => Sn(this), false), rt = t;
    }
  if (W) {
    const t = this.observers ? this.observers.length : 0;
    W.sources ? (W.sources.push(this), W.sourceSlots.push(t)) : (W.sources = [this], W.sourceSlots = [t]), this.observers ? (this.observers.push(W), this.observerSlots.push(W.sources.length - 1)) : (this.observers = [W], this.observerSlots = [W.sources.length - 1]);
  }
  return this.value;
}
function vo(i15, t, e) {
  let n = i15.value;
  return (!i15.comparator || !i15.comparator(n, t)) && (i15.value = t, i15.observers && i15.observers.length && on(() => {
    for (let r = 0; r < i15.observers.length; r += 1) {
      const s = i15.observers[r], o = ce && ce.running;
      o && ce.disposed.has(s), (o && !s.tState || !o && !s.state) && (s.pure ? rt.push(s) : Lt.push(s), s.observers && wo(s)), o || (s.state = Zt);
    }
    if (rt.length > 1e6)
      throw rt = [], new Error();
  }, false)), t;
}
function sn(i15) {
  if (!i15.fn)
    return;
  ei(i15);
  const t = tt, e = W, n = $r;
  W = tt = i15, mA(i15, i15.value, n), W = e, tt = t;
}
function mA(i15, t, e) {
  let n;
  try {
    n = i15.fn(t);
  } catch (r) {
    i15.pure && (i15.state = Zt), _o(r);
  }
  (!i15.updatedAt || i15.updatedAt <= e) && (i15.updatedAt != null && "observers" in i15 ? vo(i15, n) : i15.value = n, i15.updatedAt = e);
}
function ti(i15, t, e, n = Zt, r) {
  const s = {
    fn: i15,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: tt,
    context: null,
    pure: e
  };
  return tt === null || tt !== po && (tt.owned ? tt.owned.push(s) : tt.owned = [s]), s;
}
function In(i15) {
  const t = ce;
  if (i15.state === 0 || t)
    return;
  if (i15.state === Mn || t)
    return Sn(i15);
  if (i15.suspense && ve(i15.suspense.inFallback))
    return i15.suspense.effects.push(i15);
  const e = [i15];
  for (; (i15 = i15.owner) && (!i15.updatedAt || i15.updatedAt < $r); )
    (i15.state || t) && e.push(i15);
  for (let n = e.length - 1; n >= 0; n--)
    if (i15 = e[n], i15.state === Zt || t)
      sn(i15);
    else if (i15.state === Mn || t) {
      const r = rt;
      rt = null, on(() => Sn(i15, e[0]), false), rt = r;
    }
}
function on(i15, t) {
  if (rt)
    return i15();
  let e = false;
  t || (rt = []), Lt ? e = true : Lt = [], $r++;
  try {
    const n = i15();
    return vA(e), n;
  } catch (n) {
    rt || (Lt = null), _o(n);
  }
}
function vA(i15) {
  if (rt && (yo(rt), rt = null), i15)
    return;
  const t = Lt;
  Lt = null, t.length && on(() => go(t), false);
}
function yo(i15) {
  for (let t = 0; t < i15.length; t++)
    In(i15[t]);
}
function yA(i15) {
  let t, e = 0;
  for (t = 0; t < i15.length; t++) {
    const n = i15[t];
    n.user ? i15[e++] = n : In(n);
  }
  for (oe.context && cA(), t = 0; t < e; t++)
    In(i15[t]);
}
function Sn(i15, t) {
  const e = ce;
  i15.state = 0;
  for (let n = 0; n < i15.sources.length; n += 1) {
    const r = i15.sources[n];
    r.sources && (r.state === Zt || e ? r !== t && In(r) : (r.state === Mn || e) && Sn(r, t));
  }
}
function wo(i15) {
  const t = ce;
  for (let e = 0; e < i15.observers.length; e += 1) {
    const n = i15.observers[e];
    (!n.state || t) && (n.state = Mn, n.pure ? rt.push(n) : Lt.push(n), n.observers && wo(n));
  }
}
function ei(i15) {
  let t;
  if (i15.sources)
    for (; i15.sources.length; ) {
      const e = i15.sources.pop(), n = i15.sourceSlots.pop(), r = e.observers;
      if (r && r.length) {
        const s = r.pop(), o = e.observerSlots.pop();
        n < r.length && (s.sourceSlots[o] = n, r[n] = s, e.observerSlots[n] = o);
      }
    }
  if (i15.owned) {
    for (t = 0; t < i15.owned.length; t++)
      ei(i15.owned[t]);
    i15.owned = null;
  }
  if (i15.cleanups) {
    for (t = 0; t < i15.cleanups.length; t++)
      i15.cleanups[t]();
    i15.cleanups = null;
  }
  i15.state = 0, i15.context = null;
}
function wA(i15) {
  return i15 instanceof Error || typeof i15 == "string" ? i15 : new Error("Unknown error");
}
function _o(i15) {
  throw i15 = wA(i15), i15;
}
function Dr(i15) {
  if (typeof i15 == "function" && !i15.length)
    return Dr(i15());
  if (Array.isArray(i15)) {
    const t = [];
    for (let e = 0; e < i15.length; e++) {
      const n = Dr(i15[e]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }
    return t;
  }
  return i15;
}
const _A = Symbol("fallback");
function Si(i15) {
  for (let t = 0; t < i15.length; t++)
    i15[t]();
}
function bA(i15, t, e = {}) {
  let n = [], r = [], s = [], o = 0, a = t.length > 1 ? [] : null;
  return Yn(() => Si(s)), () => {
    let u = i15() || [], A, l;
    return u[dA], ve(() => {
      let c = u.length, d, g, h, p, v, y, m, _, w;
      if (c === 0)
        o !== 0 && (Si(s), s = [], n = [], r = [], o = 0, a && (a = [])), e.fallback && (n = [_A], r[0] = pn((B) => (s[0] = B, e.fallback())), o = 1);
      else if (o === 0) {
        for (r = new Array(c), l = 0; l < c; l++)
          n[l] = u[l], r[l] = pn(f);
        o = c;
      } else {
        for (h = new Array(c), p = new Array(c), a && (v = new Array(c)), y = 0, m = Math.min(o, c); y < m && n[y] === u[y]; y++)
          ;
        for (m = o - 1, _ = c - 1; m >= y && _ >= y && n[m] === u[_]; m--, _--)
          h[_] = r[m], p[_] = s[m], a && (v[_] = a[m]);
        for (d = /* @__PURE__ */ new Map(), g = new Array(_ + 1), l = _; l >= y; l--)
          w = u[l], A = d.get(w), g[l] = A === void 0 ? -1 : A, d.set(w, l);
        for (A = y; A <= m; A++)
          w = n[A], l = d.get(w), l !== void 0 && l !== -1 ? (h[l] = r[A], p[l] = s[A], a && (v[l] = a[A]), l = g[l], d.set(w, l)) : s[A]();
        for (l = y; l < c; l++)
          l in h ? (r[l] = h[l], s[l] = p[l], a && (a[l] = v[l], a[l](l))) : r[l] = pn(f);
        r = r.slice(0, o = c), n = u.slice(0);
      }
      return r;
    });
    function f(c) {
      if (s[l] = c, a) {
        const [d, g] = Br(l);
        return a[l] = g, t(u[l], d);
      }
      return t(u[l]);
    }
  };
}
function q(i15, t) {
  return ve(() => i15(t || {}));
}
function ln() {
  return true;
}
const CA = {
  get(i15, t, e) {
    return t === ho ? e : i15.get(t);
  },
  has(i15, t) {
    return i15.has(t);
  },
  set: ln,
  deleteProperty: ln,
  getOwnPropertyDescriptor(i15, t) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return i15.get(t);
      },
      set: ln,
      deleteProperty: ln
    };
  },
  ownKeys(i15) {
    return i15.keys();
  }
};
function ir(i15) {
  return (i15 = typeof i15 == "function" ? i15() : i15) ? i15 : {};
}
function ni(...i15) {
  if (i15.some((e) => e && (ho in e || typeof e == "function")))
    return new Proxy({
      get(e) {
        for (let n = i15.length - 1; n >= 0; n--) {
          const r = ir(i15[n])[e];
          if (r !== void 0)
            return r;
        }
      },
      has(e) {
        for (let n = i15.length - 1; n >= 0; n--)
          if (e in ir(i15[n]))
            return true;
        return false;
      },
      keys() {
        const e = [];
        for (let n = 0; n < i15.length; n++)
          e.push(...Object.keys(ir(i15[n])));
        return [...new Set(e)];
      }
    }, CA);
  const t = {};
  for (let e = i15.length - 1; e >= 0; e--)
    if (i15[e]) {
      const n = Object.getOwnPropertyDescriptors(i15[e]);
      for (const r in n)
        r in t || Object.defineProperty(t, r, {
          enumerable: true,
          get() {
            for (let s = i15.length - 1; s >= 0; s--) {
              const o = (i15[s] || {})[r];
              if (o !== void 0)
                return o;
            }
          }
        });
    }
  return t;
}
function Hn(i15) {
  const t = "fallback" in i15 && {
    fallback: () => i15.fallback
  };
  return tn(bA(() => i15.each, i15.children, t || void 0));
}
function xA(i15) {
  let t = false, e = false;
  const n = pA(() => i15.children), r = tn(() => {
    let s = n();
    Array.isArray(s) || (s = [s]);
    for (let o = 0; o < s.length; o++) {
      const a = s[o].when;
      if (a)
        return e = !!s[o].keyed, [o, a, s[o]];
    }
    return [-1];
  }, void 0, {
    equals: (s, o) => s[0] === o[0] && (t ? s[1] === o[1] : !s[1] == !o[1]) && s[2] === o[2]
  });
  return tn(() => {
    const [s, o, a] = r();
    if (s < 0)
      return i15.fallback;
    const u = a.children, A = typeof u == "function" && u.length > 0;
    return t = e || A, A ? ve(() => u(o)) : u;
  });
}
function Ue(i15) {
  return i15;
}
function BA(i15, t, e) {
  let n = e.length, r = t.length, s = n, o = 0, a = 0, u = t[r - 1].nextSibling, A = null;
  for (; o < r || a < s; ) {
    if (t[o] === e[a]) {
      o++, a++;
      continue;
    }
    for (; t[r - 1] === e[s - 1]; )
      r--, s--;
    if (r === o) {
      const l = s < n ? a ? e[a - 1].nextSibling : e[s - a] : u;
      for (; a < s; )
        i15.insertBefore(e[a++], l);
    } else if (s === a)
      for (; o < r; )
        (!A || !A.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === e[s - 1] && e[a] === t[r - 1]) {
      const l = t[--r].nextSibling;
      i15.insertBefore(e[a++], t[o++].nextSibling), i15.insertBefore(e[--s], l), t[r] = e[s];
    } else {
      if (!A) {
        A = /* @__PURE__ */ new Map();
        let f = a;
        for (; f < s; )
          A.set(e[f], f++);
      }
      const l = A.get(t[o]);
      if (l != null)
        if (a < l && l < s) {
          let f = o, c = 1, d;
          for (; ++f < r && f < s && !((d = A.get(t[f])) == null || d !== l + c); )
            c++;
          if (c > l - a) {
            const g = t[o];
            for (; a < l; )
              i15.insertBefore(e[a++], g);
          } else
            i15.replaceChild(e[a++], t[o++]);
        } else
          o++;
      else
        t[o++].remove();
    }
  }
}
function DA(i15, t, e, n = {}) {
  let r;
  return pn((s) => {
    r = s, t === document ? i15() : we(t, i15(), t.firstChild ? null : void 0, e);
  }, n.owner), () => {
    r(), t.textContent = "";
  };
}
function Ut(i15, t, e) {
  const n = document.createElement("template");
  n.innerHTML = i15;
  let r = n.content.firstChild;
  return e && (r = r.firstChild), r;
}
function ye(i15, t, e) {
  e == null ? i15.removeAttribute(t) : i15.setAttribute(t, e);
}
function Wt(i15, t, e) {
  if (!t)
    return e ? ye(i15, "style") : t;
  const n = i15.style;
  if (typeof t == "string")
    return n.cssText = t;
  typeof e == "string" && (n.cssText = e = void 0), e || (e = {}), t || (t = {});
  let r, s;
  for (s in e)
    t[s] == null && n.removeProperty(s), delete e[s];
  for (s in t)
    r = t[s], r !== e[s] && (n.setProperty(s, r), e[s] = r);
  return e;
}
function an(i15, t, e) {
  return ve(() => i15(t, e));
}
function we(i15, t, e, n) {
  if (e !== void 0 && !n && (n = []), typeof t != "function")
    return kn(i15, t, n, e);
  Dt((r) => kn(i15, t(), r, e), n);
}
function kn(i15, t, e, n, r) {
  for (oe.context && !e && (e = [...i15.childNodes]); typeof e == "function"; )
    e = e();
  if (t === e)
    return e;
  const s = typeof t, o = n !== void 0;
  if (i15 = o && e[0] && e[0].parentNode || i15, s === "string" || s === "number") {
    if (oe.context)
      return e;
    if (s === "number" && (t = t.toString()), o) {
      let a = e[0];
      a && a.nodeType === 3 ? a.data = t : a = document.createTextNode(t), e = be(i15, e, n, a);
    } else
      e !== "" && typeof e == "string" ? e = i15.firstChild.data = t : e = i15.textContent = t;
  } else if (t == null || s === "boolean") {
    if (oe.context)
      return e;
    e = be(i15, e, n);
  } else {
    if (s === "function")
      return Dt(() => {
        let a = t();
        for (; typeof a == "function"; )
          a = a();
        e = kn(i15, a, e, n);
      }), () => e;
    if (Array.isArray(t)) {
      const a = [], u = e && Array.isArray(e);
      if (Er(a, t, e, r))
        return Dt(() => e = kn(i15, a, e, n, true)), () => e;
      if (oe.context) {
        if (!a.length)
          return e;
        for (let A = 0; A < a.length; A++)
          if (a[A].parentNode)
            return e = a;
      }
      if (a.length === 0) {
        if (e = be(i15, e, n), o)
          return e;
      } else
        u ? e.length === 0 ? ki(i15, a, n) : BA(i15, e, a) : (e && be(i15), ki(i15, a));
      e = a;
    } else if (t instanceof Node) {
      if (oe.context && t.parentNode)
        return e = o ? [t] : t;
      if (Array.isArray(e)) {
        if (o)
          return e = be(i15, e, n, t);
        be(i15, e, null, t);
      } else
        e == null || e === "" || !i15.firstChild ? i15.appendChild(t) : i15.replaceChild(t, i15.firstChild);
      e = t;
    }
  }
  return e;
}
function Er(i15, t, e, n) {
  let r = false;
  for (let s = 0, o = t.length; s < o; s++) {
    let a = t[s], u = e && e[s];
    if (a instanceof Node)
      i15.push(a);
    else if (!(a == null || a === true || a === false))
      if (Array.isArray(a))
        r = Er(i15, a, u) || r;
      else if (typeof a == "function")
        if (n) {
          for (; typeof a == "function"; )
            a = a();
          r = Er(i15, Array.isArray(a) ? a : [a], Array.isArray(u) ? u : [u]) || r;
        } else
          i15.push(a), r = true;
      else {
        const A = String(a);
        u && u.nodeType === 3 && u.data === A ? i15.push(u) : i15.push(document.createTextNode(A));
      }
  }
  return r;
}
function ki(i15, t, e = null) {
  for (let n = 0, r = t.length; n < r; n++)
    i15.insertBefore(t[n], e);
}
function be(i15, t, e, n) {
  if (e === void 0)
    return i15.textContent = "";
  const r = n || document.createTextNode("");
  if (t.length) {
    let s = false;
    for (let o = t.length - 1; o >= 0; o--) {
      const a = t[o];
      if (r !== a) {
        const u = a.parentNode === i15;
        !s && !o ? u ? i15.replaceChild(r, a) : i15.insertBefore(r, e) : u && a.remove();
      } else
        s = true;
    }
  } else
    i15.insertBefore(r, e);
  return [r];
}
const EA = /* @__PURE__ */ Ut('<div data-component="group"></div>');
let ae;
(function(i15) {
  i15.Text = "text", i15.Image = "image", i15.List = "list", i15.Group = "group", i15.ImageCarousel = "image-carousel", i15.ImageCarouselLayout = "image-carousel-layout";
})(ae || (ae = {}));
const PA = (i15) => (() => {
  const t = EA.cloneNode(true);
  return we(t, q(Hn, {
    get each() {
      return i15.components;
    },
    children: (e, n) => q(ri, {
      get model() {
        return i15.model;
      },
      component: e,
      get timeline() {
        return i15.timeline;
      },
      get mediasMap() {
        return i15.mediasMap;
      }
    })
  })), Dt((e) => {
    const n = i15.name, r = i15.style;
    return n !== e._v$ && ye(t, "data-name", e._v$ = n), e._v$2 = Wt(t, r, e._v$2), e;
  }, {
    _v$: void 0,
    _v$2: void 0
  }), t;
})(), QA = /* @__PURE__ */ Ut('<div data-component="image"></div>'), TA = (i15) => {
  let t;
  const e = gt.timeline({
    repeat: -1,
    yoyo: true
  });
  i15.timeline.add(e);
  const n = ni({
    width: "100%",
    height: "100%",
    "background-image": `url(${i15.mediasMap[i15.url]})`,
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "background-position": "center"
  }, i15.style);
  return Yn(() => {
    i15.timeline.remove(e), e.kill();
  }), rn(() => {
    t && e.to(t, {
      scale: 1.3,
      duration: 10,
      translateX: "1%",
      translate: "1%"
    });
  }), (() => {
    const r = QA.cloneNode(true), s = t;
    return typeof s == "function" ? an(s, r) : t = r, Dt((o) => {
      const a = i15.name, u = n;
      return a !== o._v$ && ye(r, "data-name", o._v$ = a), o._v$2 = Wt(r, u, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}, MA = /* @__PURE__ */ Ut('<div data-component="list"><div></div></div>'), IA = /* @__PURE__ */ Ut("<div></div>"), SA = (i15) => {
  const [t, e] = Br([i15.value]), [n, r] = Br("");
  let s, o = gt.timeline({
    repeat: -1
  });
  return i15.timeline.add(o), Yn(() => {
    i15.timeline.remove(o), o.kill();
  }), rn(() => {
    if (!s)
      return;
    const a = s.getBoundingClientRect();
    if (a.width === 0 || a.height === 0)
      return;
    const u = Math.min(Math.max(OA(s, i15.value.length), 1), i15.value.length);
    if (u > 0) {
      const A = [];
      for (let l = 0; l < i15.value.length; l += u) {
        const f = i15.value.slice(l, l + u);
        A.push(f);
      }
      e(A), r(`position: absolute; width: ${a.width}px;`);
    }
  }), (() => {
    const a = MA.cloneNode(true), u = a.firstChild, A = s;
    return typeof A == "function" ? an(A, u) : s = u, we(u, q(Hn, {
      get each() {
        return t();
      },
      children: (l, f) => q(kA, {
        items: l,
        get component() {
          return i15.component;
        },
        get style() {
          return n();
        },
        timeline: o,
        get offset() {
          return f() * i15.pageDuration;
        },
        get duration() {
          return i15.pageDuration;
        },
        get mediasMap() {
          return i15.mediasMap;
        },
        get skipAnimation() {
          return t().length == 1;
        }
      })
    })), Dt((l) => {
      const f = i15.name, c = i15.style;
      return f !== l._v$ && ye(a, "data-name", l._v$ = f), l._v$2 = Wt(a, c, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}, kA = (i15) => {
  let t;
  return rn(() => {
    !t || i15.skipAnimation || (i15.timeline.from(t.children, {
      opacity: 0,
      stagger: 0.1,
      duration: 1
    }, ">"), i15.timeline.to(t.children, {
      opacity: 0,
      stagger: 0.1,
      duration: 1
    }, `>+=${i15.duration}`));
  }), (() => {
    const e = IA.cloneNode(true), n = t;
    return typeof n == "function" ? an(n, e) : t = e, we(e, q(Hn, {
      get each() {
        return i15.items;
      },
      children: (r, s) => q(ri, {
        model: r,
        get component() {
          return i15.component;
        },
        get timeline() {
          return i15.timeline;
        },
        get mediasMap() {
          return i15.mediasMap;
        }
      })
    })), Dt((r) => Wt(e, i15.style, r)), e;
  })();
};
function OA(i15, t) {
  const e = i15, n = i15.parentElement.getBoundingClientRect();
  if (n.width === 0 || n.height === 0)
    return 0;
  const r = Math.ceil(n.height), {
    height: s
  } = e.getBoundingClientRect(), o = s / t;
  return Math.floor(r / o);
}
const LA = /* @__PURE__ */ Ut('<div data-component="image-carousell" style="position: absolute; width: 100%; height: 100%;"></div>'), FA = /* @__PURE__ */ Ut('<div data-component="image"></div>'), NA = (i15) => {
  let t;
  const e = gt.timeline({
    repeat: -1
  });
  i15.timeline.add(e), i15 = ni({
    startArgs: {
      duration: 1,
      x: -100,
      autoAlpha: 0,
      scale: 1.5
    },
    endArgs: {
      duration: 1,
      x: 100,
      autoAlpha: 0,
      scale: 1.5
    }
  }, i15);
  const n = Object.assign({
    width: "100%",
    height: "100%",
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "background-position": "center",
    position: "absolute"
  }, i15.style);
  return Yn(() => {
    i15.timeline.remove(e), e.kill();
  }), rn(() => {
    const r = t == null ? void 0 : t.children, s = {
      duration: 1,
      x: 0,
      y: 0,
      autoAlpha: 1,
      scale: 1
    };
    r && r.length == 1 && (e.set(r[0], {
      backgroundImage: `url(${i15.mediasMap[i15.value[0]]})`
    }, "<"), e.duration(i15.imageDuration)), r && r.length > 1 && Array.from(r || []).forEach((o, a) => {
      e.set(o, {
        backgroundImage: `url(${i15.mediasMap[i15.value[a]]})`
      }, "<"), a === 0 ? (e.set(r[r.length - 1], {
        visibility: "hidden",
        backgroundImage: "none"
      }), e.set(o, Object.assign({}, s))) : (e.from(o, Object.assign({}, i15.startArgs), "<"), e.set(r[a - 1], {
        visibility: "hidden",
        backgroundImage: "none"
      }));
      let u = `>+=${i15.imageDuration}`;
      a === r.length - 1 && (e.set(r[0], {
        backgroundImage: `url(${i15.mediasMap[i15.value[0]]})`
      }), e.from(r[0], Object.assign({}, i15.startArgs), u), u = "<"), e.to(o, Object.assign({}, i15.endArgs), u);
    });
  }), (() => {
    const r = LA.cloneNode(true), s = t;
    return typeof s == "function" ? an(s, r) : t = r, we(r, q(Hn, {
      get each() {
        return i15.value;
      },
      children: (o, a) => (() => {
        const u = FA.cloneNode(true);
        return Dt((A) => Wt(u, n, A)), u;
      })()
    })), Dt(() => ye(r, "data-name", i15.name)), r;
  })();
};
class zA {
  constructor(t) {
    this.data = t;
  }
  static get(t, e) {
    const n = e.split(".");
    let r;
    for (const s of n) {
      let { variable: o, indexes: a } = UA(s);
      if (o && a) {
        let u = t[o];
        for (let A = 0; A < a.length; A++) {
          if (!Array.isArray(u)) {
            r = new Error(`${o} as ${e} is not an array`);
            break;
          }
          a[A].includes(":") && (u = VA(u, a[A]));
        }
        t = u;
      } else {
        if (t[s] === void 0) {
          r = new Error(`Invalid key path: ${e}`);
          break;
        }
        t = t[s];
      }
    }
    return [r ? void 0 : t, r];
  }
}
function UA(i15) {
  let t;
  if (t = i15.match(/^([^[]+)\s*(\[\s*([\d\:]+)\s*\]\s*)+\s*$/)) {
    const e = t[1], n = [], r = /\[\s*([\d\:]+)\s*\]/g;
    for (; t = r.exec(i15); )
      n.push(t[1]);
    return { variable: e, indexes: n };
  } else
    return { variable: null, indexes: null };
}
function VA(i15, t) {
  const [e, n] = t.split(":");
  return i15.slice(+e, +n);
}
const XA = /* @__PURE__ */ Ut('<div data-component="text"><span></span></div>'), YA = (i15) => {
  let t;
  const e = ni({
    width: "100%",
    height: "100%",
    "line-height": "1em"
  }, i15.style), n = {
    "line-height": e["line-height"]
  };
  return rn(() => {
    var r;
    !t || GA(t, (r = i15.opts) == null ? void 0 : r.autofit);
  }), (() => {
    const r = XA.cloneNode(true), s = r.firstChild, o = t;
    return typeof o == "function" ? an(o, s) : t = s, we(s, () => i15.text), Dt((a) => {
      const u = i15.name, A = e, l = n;
      return u !== a._v$ && ye(r, "data-name", a._v$ = u), a._v$2 = Wt(r, A, a._v$2), a._v$3 = Wt(s, l, a._v$3), a;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), r;
  })();
}, HA = {
  max: 10
}, RA = 10, KA = 1e-3;
function GA(i15, t) {
  if (i15 && i15.textContent) {
    const e = i15, n = function(d) {
      e.style.fontSize = `${d}em`, e.style.overflowWrap = "normal";
    }, r = i15.parentElement;
    if (t != null && t.maxLines) {
      const d = parseInt(e.style.lineHeight) || 1;
      r.style.maxHeight = `${t.maxLines * d}em`;
    }
    const s = r.getBoundingClientRect();
    if (s.width === 0 || s.height === 0)
      return;
    let o = 0, a = t && t.maxSize || HA.max;
    const u = Math.ceil(s.height), A = Math.ceil(s.width);
    let l = 0, f = 0, c = 0;
    for (; a - o > KA && l < RA || c > u || f > A; ) {
      l++;
      const d = (o + a) / 2;
      n(d);
      const {
        height: g,
        width: h
      } = e.getBoundingClientRect();
      if (g <= 8 || h <= 8)
        break;
      c = g, f = h, g <= u && h <= A ? o = d : a = d;
    }
  }
}
const qA = /* @__PURE__ */ Ut("<p>Invalid component type...</p>"), ri = (i15) => {
  let t, e;
  const n = i15.component.binding;
  return n && i15.model && ([t, e] = zA.get(i15.model, n)), q(xA, {
    get fallback() {
      return qA.cloneNode(true);
    },
    get children() {
      return [q(Ue, {
        get when() {
          return i15.component.type == ae.Text;
        },
        get children() {
          return q(YA, {
            get name() {
              return i15.component.name;
            },
            get text() {
              return t || i15.component.text;
            },
            get opts() {
              return i15.component.opts;
            },
            get style() {
              return i15.component.style;
            }
          });
        }
      }), q(Ue, {
        get when() {
          return i15.component.type == ae.Image;
        },
        get children() {
          return q(TA, {
            get name() {
              return i15.component.name;
            },
            get url() {
              return t || i15.component.url;
            },
            get style() {
              return i15.component.style;
            },
            get timeline() {
              return i15.timeline;
            },
            get mediasMap() {
              return i15.mediasMap;
            }
          });
        }
      }), q(Ue, {
        get when() {
          return i15.component.type == ae.Group;
        },
        get children() {
          return q(PA, {
            get name() {
              return i15.component.name;
            },
            get model() {
              return t || i15.model;
            },
            get components() {
              return i15.component.components;
            },
            get style() {
              return i15.component.style;
            },
            get timeline() {
              return i15.timeline;
            },
            get mediasMap() {
              return i15.mediasMap;
            }
          });
        }
      }), q(Ue, {
        get when() {
          return i15.component.type == ae.List;
        },
        get children() {
          return q(SA, {
            get name() {
              return i15.component.name;
            },
            value: t,
            get component() {
              return i15.component.component;
            },
            get style() {
              return i15.component.style;
            },
            get pageDuration() {
              return i15.component.pageDuration || 5;
            },
            get timeline() {
              return i15.timeline;
            },
            get mediasMap() {
              return i15.mediasMap;
            }
          });
        }
      }), q(Ue, {
        get when() {
          return i15.component.type == ae.ImageCarousel;
        },
        get children() {
          return q(NA, {
            get name() {
              return i15.component.name;
            },
            get value() {
              return t || i15.component.value;
            },
            get style() {
              return i15.component.style;
            },
            get imageDuration() {
              return i15.component.imageDuration || 3;
            },
            get timeline() {
              return i15.timeline;
            },
            get mediasMap() {
              return i15.mediasMap;
            }
          });
        }
      })];
    }
  });
}, WA = /* @__PURE__ */ Ut('<div data-component="template"></div>'), jA = (i15) => (() => {
  const t = WA.cloneNode(true);
  return we(t, q(ri, {
    get model() {
      return i15.model;
    },
    get component() {
      return i15.root;
    },
    get timeline() {
      return i15.timeline;
    },
    get mediasMap() {
      return i15.mediasMap;
    }
  })), Dt((e) => {
    const n = i15.name, r = i15.style;
    return n !== e._v$ && ye(t, "data-name", e._v$ = n), e._v$2 = Wt(t, r, e._v$2), e;
  }, {
    _v$: void 0,
    _v$2: void 0
  }), t;
})();
class JA extends Jr {
  constructor(e, n) {
    super(e, n);
    C(this, "fontFaces", {});
    C(this, "medias", {});
    C(this, "loaded", false);
    this.opts = n;
  }
  load() {
    return Sr(this.loadFonts(), this.loadMedias()).pipe(fs());
  }
  loadFonts() {
    return ut(this.opts.fonts || []).pipe(
      de(
        (e) => ut(this.resourceManager.getMedia(e.url)).pipe(
          J((n) => (this.fontFaces[e.name] || (this.fontFaces[e.name] = this.loadFont(
            e.name,
            n || e.url
          )), T(this.fontFaces[e.name])))
        )
      )
    );
  }
  loadFont(e, n) {
    return new FontFace(e, `url(${n})`).load().then((s) => (document.fonts.add(s), s));
  }
  loadMedias() {
    return ut(this.opts.medias || []).pipe(
      de(
        (e) => ut(this.resourceManager.getMedia(e)).pipe(
          J((n) => (this.medias[e] = n || e, T("media:cached")))
        )
      )
    );
  }
  async unload() {
    const e = document.fonts, n = Object.keys(this.fontFaces);
    for (let r = 0; r < n.length; r++) {
      const s = n[r], o = await this.fontFaces[s];
      e.delete(o), delete this.fontFaces[s];
    }
  }
  show(e, n) {
    const r = Date.now();
    return this.load().pipe(
      J((s) => (e.children.length === 0 && DA(
        () => jA({
          name: this.opts.name,
          root: this.opts.template,
          model: this.opts.model,
          style: this.opts.style,
          timeline: this.timeline,
          mediasMap: this.medias
        }),
        e
      ), this.seek(n + (Date.now() - r)), this.loaded = true, "template-widget:shown"))
    );
  }
  mimeType() {
    return "template/widget";
  }
}
var ii = /* @__PURE__ */ ((i15) => (i15[i15.NotReady = 0] = "NotReady", i15[i15.Loading = 1] = "Loading", i15[i15.Ready = 2] = "Ready", i15[i15.Starting = 3] = "Starting", i15[i15.Playing = 4] = "Playing", i15[i15.Stopping = 5] = "Stopping", i15[i15.Stopped = 6] = "Stopped", i15[i15.Seeking = 7] = "Seeking", i15))(ii || {});
class ZA {
  static async fromJSON(t, e) {
    switch (t.uri) {
      case "widget://image":
        return new aA(
          e,
          t.args
        );
      case "widget://video":
        return new fA(
          e,
          t.args
        );
      case "widget://text":
        return new fo(
          e,
          t.args
        );
      case "widget://layout":
        return Zr.fromLayoutJSON(t.args, e);
      case "widget://template":
        return new JA(
          e,
          t.args
        );
    }
  }
}
class si extends nn.exports.EventEmitter {
  constructor(e, n) {
    super();
    C(this, "id", "");
    C(this, "widgetId", "");
    C(this, "opacity", "1");
    C(this, "rotation", 0);
    C(this, "zIndex", 0);
    C(this, "el");
    C(this, "status", ii.NotReady);
    C(this, "offset", 0);
    C(this, "transition");
    C(this, "slack", 0);
    C(this, "widget");
    C(this, "config");
    C(this, "proxyOffset");
    C(this, "_duration", 0);
    this.name = e, this._duration = (n == null ? void 0 : n.duration) || 0, this.slack = (n == null ? void 0 : n.slack) || 0, this.widget = n == null ? void 0 : n.widget, this.transition = n == null ? void 0 : n.transition, this.el = document.createElement("div");
    const { style: r, dataset: s } = this.el;
    n != null && n.css && lo(this.el, n.css), r.position = "absolute", r.width = "100%", r.height = "100%", r.display = "flex", r.justifyContent = "center", r.alignItems = "center", s.layer = this.name, this.proxyOffset = (o) => this.emit("offset", o);
  }
  static async fromJSON(e, n) {
    const r = await ZA.fromJSON(e.widget, n);
    return new si(e.name, {
      duration: e.duration,
      slack: e.slack,
      transition: e.transition && await sA(e.transition),
      css: e.css,
      widget: r
    });
  }
  toggleDebug() {
    var e;
    (e = this.widget) == null || e.toggleDebug();
  }
  unload() {
    var e, n;
    return (e = this.widget) == null || e.seek(0), (n = this.widget) == null ? void 0 : n.unload();
  }
  toJSON() {
    return {
      id: this.id,
      widgetId: this.widgetId
    };
  }
  play(e) {
    if (!this.widget)
      throw new Error("Layer: missing widget");
    const n = e.pipe(
      fs(),
      ar(() => T(void 0)),
      J(() => "end")
    );
    return this.widget.play(e).pipe(Oa(n));
  }
  async stop() {
    var e;
    return (e = this.widget) == null ? void 0 : e.stop();
  }
  seek(e) {
    return this.offset = e, this.widget ? this.widget.seek(e) : T([e, 0]);
  }
  show(e) {
    return this.widget ? this.widget.show(this.el, e).pipe(
      ar((n) => (console.error("Layer: show widget error", n), T("error")))
    ) : T("shown");
  }
  async hide() {
  }
  duration() {
    var n;
    const e = ((n = this.transition) == null ? void 0 : n.duration) || 0;
    return this._duration ? T(this._duration + e) : this.widget ? this.widget.duration().pipe(
      J((r) => r + this.slack + e)
    ) : T(this.slack);
  }
}
const $A = 50;
class tl extends oA {
  constructor(e, n, r) {
    super();
    C(this, "timerSubscription");
    C(this, "playing");
    this.playlist = e, this.renderer = n, r && n.setViewport(r);
  }
  show() {
  }
  toggleDebug() {
    this.renderer.toggleDebug(), this.playlist.toggleDebug();
  }
  play(e = {
    loop: false,
    synced: false
  }) {
    const n = e.baseline || Date.now();
    this.stop();
    const r = e.synced ? n : this.playlist.time || 0, s = this.playlist.seek(r).pipe(
      _n(),
      Ar(([o, a]) => {
        let u = o;
        return el(n, r, $A, a).pipe(
          Nn((A) => {
            A < u && this.emit("end"), u = A;
          })
        );
      }),
      Ge()
    );
    this.timerSubscription = s.subscribe({
      next: (o) => this.emit("time", o),
      error: (o) => {
        console.log("Timer error", o);
      }
    }), this.playing = this.playlist.play(this.renderer, s, {
      loop: e == null ? void 0 : e.loop
    }).pipe(
      ls(() => {
        var o;
        (o = this.timerSubscription) == null || o.unsubscribe();
      })
    ).subscribe({
      error: (o) => {
        console.log("Playing error", o);
      },
      complete: () => {
        var o;
        (o = this.timerSubscription) == null || o.unsubscribe(), this.emit("completed");
      }
    });
  }
  stop() {
    var e, n;
    (e = this.timerSubscription) == null || e.unsubscribe(), (n = this.playing) == null || n.unsubscribe(), this.timerSubscription = void 0, this.playing = void 0;
  }
}
function el(i15, t, e, n) {
  return new k((r) => {
    let s = 0, o = t;
    const a = () => {
      r.next(o), o = (o + e) % n, i15 = i15 + e;
      const u = i15 - Date.now();
      s = setTimeout(a, e + u);
    };
    return a(), () => {
      clearTimeout(s);
    };
  });
}
class oi extends nn.exports.EventEmitter {
  constructor(e, n) {
    super();
    C(this, "layers", []);
    C(this, "time", 0);
    C(this, "status", ii.NotReady);
    C(this, "debugLayer");
    this.name = e, this.resourceManager = n;
  }
  static async fromJSON(e, n) {
    const r = new oi(e.name, n);
    for (let s = 0; s < e.layers.length; s++) {
      const o = await si.fromJSON(e.layers[s], n);
      r.add(o);
    }
    return r;
  }
  play(e, n, r) {
    return this.playLayers(e, n, r || {});
  }
  toggleDebug() {
    this.layers.map((e) => e.toggleDebug());
  }
  getLayersWithOffsets() {
    const e = ss(...this.layers.map((r) => r.duration()));
    let n = 0;
    return e.pipe(
      ur((r, s, o) => {
        const a = n;
        n += s;
        const u = {
          start: a,
          end: n,
          duration: s,
          layer: this.layers[o]
        };
        return r.push(u), r;
      }, [])
    );
  }
  playLayers(e, n, { loop: r = false }) {
    return this.findLayer(this.time).pipe(
      _n(),
      Ar((o) => {
        if (o) {
          const { layer: a, offset: u, index: A, layersWithOffsets: l } = o;
          let f = 1;
          const c = r ? l.slice(A).concat(l.slice(0, A)) : l.slice(A), d = l.reduce(
            (p, v) => p + v.duration,
            0
          ), g = n.pipe(
            J((p) => p % d),
            Nn((p) => {
              this.time = p;
            }),
            Ge()
          ), h = ut(c).pipe(
            Ar((p) => {
              const v = f ? u : 0;
              return p.layer, f = 0, this.playLayer(
                e,
                g,
                p.layer,
                v,
                p.start,
                p.end
              );
            })
          );
          return r ? h.pipe(ka()) : h;
        } else
          return T("end");
      })
    );
  }
  playLayer(e, n, r, s, o, a) {
    return e.play(
      r,
      n.pipe(
        La((A) => A >= o && A < a),
        J((A) => A - o),
        Ge()
      ),
      s,
      100
    );
  }
  seek(e) {
    return this.duration().pipe(
      ot((n) => (e = e % (n + 1), this.time = e, this.findLayer(e).pipe(
        ot((r) => {
          let s = [e, n];
          if (r) {
            const { layer: o, offset: a = 0 } = r;
            return o.seek(a).pipe(
              ot(() => (s = [e, n], T(s)))
            );
          }
          return T(s);
        })
      )))
    );
  }
  show(e) {
    return this.findLayer(this.time).pipe(
      ot((n) => {
        if (n) {
          const { layer: r, offset: s = 0 } = n;
          return e.show(r, s);
        }
        return T("end");
      })
    );
  }
  unload() {
    this.layers.forEach((e) => e.unload());
  }
  findLayer(e) {
    return this.getLayersWithOffsets().pipe(
      _n(),
      J((n) => {
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          if (e >= s.start && e < s.end)
            return {
              index: r,
              offset: e - s.start,
              duration: s.duration,
              layer: s.layer,
              layersWithOffsets: n
            };
        }
      })
    );
  }
  duration() {
    return Sr(...this.layers.map((n) => n.duration())).pipe(ur((n, r) => n + r, 0));
  }
  get position() {
    return this.time;
  }
  add(e, n) {
    return n ? this.layers.splice(n, 0, e) : this.layers.push(e), this;
  }
}
class bo {
  constructor(t) {
    C(this, "el");
    C(this, "volume", 0);
    C(this, "currentLayer");
    C(this, "currentTransition");
    C(this, "debugLayer");
    this.el = t;
  }
  setViewport(t) {
    const { width: e, height: n } = this.el.getBoundingClientRect();
    {
      const r = 100 * (100 / t.width), s = 100 * (100 / t.height), o = -(t.left / 100) * r, a = -(t.top / 100) * s;
      this.el.style.width = `${r}%`, this.el.style.height = `${s}%`, this.el.style.left = `${o}%`, this.el.style.top = `${a}%`;
      const u = n * (t.top / t.height), A = e * (t.left / t.width), l = e + A, f = n + u;
      this.el.style.clip = `rect(${u}px, ${l}px, ${f}px, ${A}px)`, this.el.style.webkitMaskClip = `rect(${u}px, ${l}px, ${f}px, ${A}px)`;
      const c = n * 100 / t.height - (u + n), d = e * 100 / t.width - (A + e);
      this.el.style.clipPath = `inset(${u}px ${d}px ${c}px ${A}px)`, this.el.dataset.clip = JSON.stringify({
        x: A,
        width: e,
        y: u,
        height: n
      });
    }
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
    return t.seek(e).pipe(
      ot(() => {
        const n = this.currentLayer;
        return n && (n.el.style.zIndex = "1000", n === t) ? T("layer:show:end") : (t.el.style.zIndex = "0", t.el.style.visibility = "hidden", this.el.appendChild(t.el), t.show(e).pipe(
          ls(() => {
            var r, s, o;
            if (t.el.style.visibility = "visible", this.currentTransition != t.transition && ((r = this.currentTransition) == null || r.reset(), n && (this.currentTransition = t.transition, (s = this.currentTransition) == null || s.init(n, t))), n) {
              const a = t.transition;
              if (a) {
                if (e < a.duration) {
                  a.seek(e);
                  return;
                }
                a.seek(a.duration);
              }
              n.unload(), (o = n.el.parentElement) == null || o.removeChild(n.el);
            }
            this.currentLayer = t;
          })
        ));
      })
    );
  }
  performTransition(t, e, n) {
    var s;
    let r;
    return n && n != t && t.transition ? (this.currentTransition != t.transition && ((s = this.currentTransition) == null || s.reset(), t.transition.init(n, t), this.currentTransition = t.transition), r = t.transition.run(e)) : r = T("play:transition:end"), r.pipe(
      Nn(() => {
        var o;
        if (n && n != t) {
          n.unload();
          const a = n.el;
          (o = a.parentElement) == null || o.removeChild(a);
        }
        this.currentLayer = t;
      })
    );
  }
  play(t, e, n, r) {
    t.el.style.zIndex = "0";
    const s = this.currentLayer;
    return s && (s.el.style.zIndex = "1000"), t.seek(n).pipe(
      ot(() => (this.el.appendChild(t.el), t.show(n).pipe(
        ot(() => cn([
          t.play(e),
          this.performTransition(t, n, this.currentLayer)
        ]))
      ))),
      J(() => "play:layer:end")
    );
  }
  seek(t) {
    var e;
    return (e = this.currentLayer) == null ? void 0 : e.seek(t);
  }
  async clean() {
    var t;
    (t = this.el.parentElement) == null || t.removeChild(this.el), this.currentLayer && (this.currentLayer.unload(), delete this.currentLayer);
  }
}
const assets = {
  frozenDesert: "/images/frozen-desert.png",
  cake1: "/images/cake1.jpg",
  cake2: "/images/cake2.jpg",
  cake3: "/images/cake3.jpg",
  cake4: "/images/cake4.jpg",
  cake5: "/images/cake5.jpg",
  cake6: "/images/cake6.jpg",
  blackhole: "/images/blackhole.jpg",
  deniro: "/images/deniro.jpg",
  denzel: "/images/denzel.jpg",
  halle: "/images/halle.jpg",
  jackie: "/images/jackie.jpg",
  kidman: "/images/kidman.jpg",
  laurie: "/images/laurie.jpg",
  nicholsson: "/images/nicholsson.jpg",
  pacino: "/images/pacino.jpg",
  scarlett: "/images/scarlett.jpg",
  smith: "/images/smith.jpg",
  stallone: "/images/stallone.jpg",
  streep: "/images/streep.jpg",
  raw: "/videos/coffee-raw.mp4",
  roast: "/videos/coffee-roast.mp4",
  brew: "/videos/coffee-brew.mp4",
  drink: "/videos/coffee-drink.mp4",
  billboard: "/videos/billboard.mp4",
  sunrise: "/videos/sunrise.mp4"
};
Object.keys(assets).forEach((key) => {
  assets[key] = `${"/demos/assets"}${assets[key]}`;
});
var StoreResult = /* @__PURE__ */ ((StoreResult2) => {
  StoreResult2[StoreResult2["Success"] = 0] = "Success";
  StoreResult2[StoreResult2["Failure"] = 1] = "Failure";
  return StoreResult2;
})(StoreResult || {});
var StoreError = /* @__PURE__ */ ((StoreError2) => {
  StoreError2[StoreError2["None"] = 0] = "None";
  StoreError2[StoreError2["Unknown"] = 1] = "Unknown";
  StoreError2[StoreError2["NotFound"] = 2] = "NotFound";
  StoreError2[StoreError2["NotAllowed"] = 3] = "NotAllowed";
  StoreError2[StoreError2["NotSupported"] = 4] = "NotSupported";
  StoreError2[StoreError2["TooLarge"] = 5] = "TooLarge";
  StoreError2[StoreError2["NotEnoughSpace"] = 6] = "NotEnoughSpace";
  return StoreError2;
})(StoreError || {});
class StorageBrowser {
  constructor(name, serviceWorkerPath = "") {
    this.name = name;
    this.serviceWorkerPath = serviceWorkerPath;
    this.prefix = "castmill:storage";
    this.cacheName = `${this.prefix}:${this.name}`;
  }
  async init() {
    if (navigator.serviceWorker !== void 0) {
      this.cache = await caches.open(this.cacheName);
      const keyList = await caches.keys();
      await Promise.all(keyList.map((key) => {
        if (key.startsWith(this.prefix) && key !== this.cacheName) {
          return caches.delete(key);
        }
      }));
      try {
        const registration2 = await navigator.serviceWorker.register(`${this.serviceWorkerPath}sw.js`);
        console.log("ServiceWorker registration successful with scope: ", registration2.scope);
      } catch (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
      const registration = await navigator.serviceWorker.getRegistration("/");
      if (registration) {
        await registration.update();
      }
    }
  }
  async info() {
    return {
      used: 0,
      total: 0
    };
  }
  async listFiles() {
    return (await Promise.all((await this.cache.keys()).map((request) => this.cache.match(request.url)))).map((response) => {
      return {
        url: response.url,
        size: parseInt(response.headers.get("Content-Length") || "0")
      };
    });
  }
  async storeFile(url) {
    try {
      const request = new Request(url, { mode: "cors", method: "GET" });
      await this.cache.add(request);
      const response = await this.cache.match(url);
      if (response == null ? void 0 : response.ok) {
        return {
          item: {
            url,
            size: parseInt(response.headers.get("Content-Length") || "0")
          },
          result: {
            code: StoreResult.Success
          }
        };
      } else {
        return {
          result: {
            code: StoreResult.Failure,
            error: StoreError.Unknown,
            errMsg: response == null ? void 0 : response.statusText
          }
        };
      }
    } catch (err) {
      console.error(err);
      return {
        result: {
          code: StoreResult.Failure,
          error: StoreError.NotFound,
          errMsg: err.message
        }
      };
    }
  }
  async retrieveFile(key) {
  }
  async deleteFile(url) {
    await this.cache.delete(url);
  }
  async deleteAllFiles() {
    await caches.delete(this.cacheName);
  }
  async close() {
  }
}
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
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i15 = 1, n = arguments.length; i15 < n; i15++) {
      s = arguments[i15];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to2, from, pack) {
  if (pack || arguments.length === 2)
    for (var i15 = 0, l = from.length, ar2; i15 < l; i15++) {
      if (ar2 || !(i15 in from)) {
        if (!ar2)
          ar2 = Array.prototype.slice.call(from, 0, i15);
        ar2[i15] = from[i15];
      }
    }
  return to2.concat(ar2 || Array.prototype.slice.call(from));
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
var keys = Object.keys;
var isArray = Array.isArray;
if (typeof Promise !== "undefined" && !_global.Promise) {
  _global.Promise = Promise;
}
function extend(obj, extension) {
  if (typeof extension !== "object")
    return obj;
  keys(extension).forEach(function(key) {
    obj[key] = extension[key];
  });
  return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
  if (typeof extension === "function")
    extension = extension(getProto(proto));
  (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(function(key) {
    setProp(proto, key, extension[key]);
  });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
}
function derive(Child) {
  return {
    from: function(Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
  var pd = getOwnPropertyDescriptor(obj, prop);
  var proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
  return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}
function assert(b) {
  if (!b)
    throw new Error("Assertion Failed");
}
function asap$1(fn2) {
  if (_global.setImmediate)
    setImmediate(fn2);
  else
    setTimeout(fn2, 0);
}
function arrayToObject(array, extractor) {
  return array.reduce(function(result, item, i15) {
    var nameAndValue = extractor(item, i15);
    if (nameAndValue)
      result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}
function tryCatch(fn2, onerror, args) {
  try {
    fn2.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}
function getByKeyPath(obj, keyPath) {
  if (hasOwn(obj, keyPath))
    return obj[keyPath];
  if (!keyPath)
    return obj;
  if (typeof keyPath !== "string") {
    var rv = [];
    for (var i15 = 0, l = keyPath.length; i15 < l; ++i15) {
      var val = getByKeyPath(obj, keyPath[i15]);
      rv.push(val);
    }
    return rv;
  }
  var period = keyPath.indexOf(".");
  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj === void 0 ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }
  return void 0;
}
function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === void 0)
    return;
  if ("isFrozen" in Object && Object.isFrozen(obj))
    return;
  if (typeof keyPath !== "string" && "length" in keyPath) {
    assert(typeof value !== "string" && "length" in value);
    for (var i15 = 0, l = keyPath.length; i15 < l; ++i15) {
      setByKeyPath(obj, keyPath[i15], value[i15]);
    }
  } else {
    var period = keyPath.indexOf(".");
    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "")
        if (value === void 0) {
          if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
            obj.splice(currentKeyPath, 1);
          else
            delete obj[currentKeyPath];
        } else
          obj[currentKeyPath] = value;
      else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj || !hasOwn(obj, currentKeyPath))
          innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === void 0) {
        if (isArray(obj) && !isNaN(parseInt(keyPath)))
          obj.splice(keyPath, 1);
        else
          delete obj[keyPath];
      } else
        obj[keyPath] = value;
    }
  }
}
function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === "string")
    setByKeyPath(obj, keyPath, void 0);
  else if ("length" in keyPath)
    [].map.call(keyPath, function(kp) {
      setByKeyPath(obj, kp, void 0);
    });
}
function shallowClone(obj) {
  var rv = {};
  for (var m in obj) {
    if (hasOwn(obj, m))
      rv[m] = obj[m];
  }
  return rv;
}
var concat = [].concat;
function flatten(a) {
  return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(function(num) {
  return ["Int", "Uint", "Float"].map(function(t) {
    return t + num + "Array";
  });
}))).filter(function(t) {
  return _global[t];
});
var intrinsicTypes = intrinsicTypeNames.map(function(t) {
  return _global[t];
});
arrayToObject(intrinsicTypeNames, function(x) {
  return [x, true];
});
var circularRefs = null;
function deepClone(any) {
  circularRefs = typeof WeakMap !== "undefined" && /* @__PURE__ */ new WeakMap();
  var rv = innerDeepClone(any);
  circularRefs = null;
  return rv;
}
function innerDeepClone(any) {
  if (!any || typeof any !== "object")
    return any;
  var rv = circularRefs && circularRefs.get(any);
  if (rv)
    return rv;
  if (isArray(any)) {
    rv = [];
    circularRefs && circularRefs.set(any, rv);
    for (var i15 = 0, l = any.length; i15 < l; ++i15) {
      rv.push(innerDeepClone(any[i15]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    var proto = getProto(any);
    rv = proto === Object.prototype ? {} : Object.create(proto);
    circularRefs && circularRefs.set(any, rv);
    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = innerDeepClone(any[prop]);
      }
    }
  }
  return rv;
}
var toString = {}.toString;
function toStringTag(o) {
  return toString.call(o).slice(8, -1);
}
var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
var getIteratorOf = typeof iteratorSymbol === "symbol" ? function(x) {
  var i15;
  return x != null && (i15 = x[iteratorSymbol]) && i15.apply(x);
} : function() {
  return null;
};
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
  var i15, a, x, it2;
  if (arguments.length === 1) {
    if (isArray(arrayLike))
      return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === "string")
      return [arrayLike];
    if (it2 = getIteratorOf(arrayLike)) {
      a = [];
      while (x = it2.next(), !x.done)
        a.push(x.value);
      return a;
    }
    if (arrayLike == null)
      return [arrayLike];
    i15 = arrayLike.length;
    if (typeof i15 === "number") {
      a = new Array(i15);
      while (i15--)
        a[i15] = arrayLike[i15];
      return a;
    }
    return [arrayLike];
  }
  i15 = arguments.length;
  a = new Array(i15);
  while (i15--)
    a[i15] = arguments[i15];
  return a;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? function(fn2) {
  return fn2[Symbol.toStringTag] === "AsyncFunction";
} : function() {
  return false;
};
var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}
var libraryFilter = function() {
  return true;
};
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
  if (NEEDS_THROW_FOR_STACK)
    try {
      getErrorWithStack.arguments;
      throw new Error();
    } catch (e) {
      return e;
    }
  return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack)
    return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0)
    numIgnoredFrames += (exception.name + exception.message).split("\n").length;
  return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map(function(frame) {
    return "\n" + frame;
  }).join("");
}
var dexieErrorNames = [
  "Modify",
  "Bulk",
  "OpenFailed",
  "VersionChange",
  "Schema",
  "Upgrade",
  "InvalidTable",
  "MissingAPI",
  "NoSuchDatabase",
  "InvalidArgument",
  "SubTransaction",
  "Unsupported",
  "Internal",
  "DatabaseClosed",
  "PrematureCommit",
  "ForeignAwait"
];
var idbDomErrorNames = [
  "Unknown",
  "Constraint",
  "Data",
  "TransactionInactive",
  "ReadOnly",
  "Version",
  "NotFound",
  "InvalidState",
  "InvalidAccess",
  "Abort",
  "Timeout",
  "QuotaExceeded",
  "Syntax",
  "DataClone"
];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed",
  MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}
derive(DexieError).from(Error).extend({
  stack: {
    get: function() {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function() {
    return this.name + ": " + this.message;
  }
});
function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + Object.keys(failures).map(function(key) {
    return failures[key].toString();
  }).filter(function(v, i15, s) {
    return s.indexOf(v) === i15;
  }).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = Object.keys(failures).map(function(pos) {
    return failures[pos];
  });
  this.failuresByPos = failures;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce(function(obj, name) {
  return obj[name] = name + "Error", obj;
}, {});
var BaseException = DexieError;
var exceptions = errorList.reduce(function(obj, name) {
  var fullName = name + "Error";
  function DexieError2(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;
    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === "string") {
      this.message = "" + msgOrInner + (!inner ? "" : "\n " + inner);
      this.inner = inner || null;
    } else if (typeof msgOrInner === "object") {
      this.message = msgOrInner.name + " " + msgOrInner.message;
      this.inner = msgOrInner;
    }
  }
  derive(DexieError2).from(BaseException);
  obj[name] = DexieError2;
  return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function(obj, name) {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
    return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);
  if ("stack" in domError) {
    setProp(rv, "stack", { get: function() {
      return this.inner.stack;
    } });
  }
  return rv;
}
var fullNameExceptions = errorList.reduce(function(obj, name) {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1)
    obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;
function nop() {
}
function mirror(val) {
  return val;
}
function pureFunctionChain(f1, f2) {
  if (f1 == null || f1 === mirror)
    return f2;
  return function(val) {
    return f2(f1(val));
  };
}
function callBoth(on1, on2) {
  return function() {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}
function hookCreatingChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    var res = f1.apply(this, arguments);
    if (res !== void 0)
      arguments[0] = res;
    var onsuccess = this.onsuccess, onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess)
      this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror)
      this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== void 0 ? res2 : res;
  };
}
function hookDeletingChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess, onerror = this.onerror;
    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess)
      this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror)
      this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}
function hookUpdatingChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function(modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res);
    var onsuccess = this.onsuccess, onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess)
      this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror)
      this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
  };
}
function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    if (f2.apply(this, arguments) === false)
      return false;
    return f1.apply(this, arguments);
  };
}
function promisableChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    var res = f1.apply(this, arguments);
    if (res && typeof res.then === "function") {
      var thiz = this, i15 = arguments.length, args = new Array(i15);
      while (i15--)
        args[i15] = arguments[i15];
      return res.then(function() {
        return f2.apply(thiz, args);
      });
    }
    return f2.apply(this, arguments);
  };
}
var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100, MAX_LONG_STACKS = 20, ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === "undefined" ? [] : function() {
  var globalP = Promise.resolve();
  if (typeof crypto === "undefined" || !crypto.subtle)
    return [globalP, getProto(globalP), globalP];
  var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
  return [
    nativeP,
    getProto(nativeP),
    globalP
  ];
}(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? function() {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? function() {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(function() {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, { attributes: true });
  hiddenDiv.setAttribute("i", "1");
} : function() {
  setTimeout(physicalTick, 0);
};
var asap = function(callback, args) {
  microtickQueue.push([callback, args]);
  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};
var isOutsideMicroTick = true, needsNewPhysicalTick = true, unhandledErrors = [], rejectingErrors = [], currentFulfiller = null, rejectionMapper = mirror;
var globalPSD = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function() {
    this.unhandleds.forEach(function(uh) {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {
      }
    });
  }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn2) {
  if (typeof this !== "object")
    throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = nop;
  this._lib = false;
  var psd = this._PSD = PSD;
  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof fn2 !== "function") {
    if (fn2 !== INTERNAL)
      throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false)
      handleRejection(this, this._value);
    return;
  }
  this._state = null;
  this._value = null;
  ++psd.ref;
  executePromiseTask(this, fn2);
}
var thenProp = {
  get: function() {
    var psd = PSD, microTaskId = totalEchoes;
    function then(onFulfilled, onRejected) {
      var _this = this;
      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      var cleanup = possibleAwait && !decrementExpectedAwaits();
      var rv = new DexiePromise(function(resolve, reject) {
        propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }
    then.prototype = INTERNAL;
    return then;
  },
  set: function(value) {
    setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
      get: function() {
        return value;
      },
      set: thenProp.set
    });
  }
};
props(DexiePromise.prototype, {
  then: thenProp,
  _then: function(onFulfilled, onRejected) {
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function(onRejected) {
    if (arguments.length === 1)
      return this.then(null, onRejected);
    var type2 = arguments[0], handler = arguments[1];
    return typeof type2 === "function" ? this.then(null, function(err) {
      return err instanceof type2 ? handler(err) : PromiseReject(err);
    }) : this.then(null, function(err) {
      return err && err.name === type2 ? handler(err) : PromiseReject(err);
    });
  },
  finally: function(onFinally) {
    return this.then(function(value) {
      onFinally();
      return value;
    }, function(err) {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function() {
      if (this._stack)
        return this._stack;
      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null)
          this._stack = stack;
        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function(ms2, msg) {
    var _this = this;
    return ms2 < Infinity ? new DexiePromise(function(resolve, reject) {
      var handle = setTimeout(function() {
        return reject(new exceptions.Timeout(msg));
      }, ms2);
      _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag)
  setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
}
props(DexiePromise, {
  all: function() {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function(resolve, reject) {
      if (values.length === 0)
        resolve([]);
      var remaining = values.length;
      values.forEach(function(a, i15) {
        return DexiePromise.resolve(a).then(function(x) {
          values[i15] = x;
          if (!--remaining)
            resolve(values);
        }, reject);
      });
    });
  },
  resolve: function(value) {
    if (value instanceof DexiePromise)
      return value;
    if (value && typeof value.then === "function")
      return new DexiePromise(function(resolve, reject) {
        value.then(resolve, reject);
      });
    var rv = new DexiePromise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function() {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function(resolve, reject) {
      values.map(function(value) {
        return DexiePromise.resolve(value).then(resolve, reject);
      });
    });
  },
  PSD: {
    get: function() {
      return PSD;
    },
    set: function(value) {
      return PSD = value;
    }
  },
  totalEchoes: { get: function() {
    return totalEchoes;
  } },
  newPSD: newScope,
  usePSD,
  scheduler: {
    get: function() {
      return asap;
    },
    set: function(value) {
      asap = value;
    }
  },
  rejectionMapper: {
    get: function() {
      return rejectionMapper;
    },
    set: function(value) {
      rejectionMapper = value;
    }
  },
  follow: function(fn2, zoneProps) {
    return new DexiePromise(function(resolve, reject) {
      return newScope(function(resolve2, reject2) {
        var psd = PSD;
        psd.unhandleds = [];
        psd.onunhandled = reject2;
        psd.finalize = callBoth(function() {
          var _this = this;
          run_at_end_of_this_or_next_physical_tick(function() {
            _this.unhandleds.length === 0 ? resolve2() : reject2(_this.unhandleds[0]);
          });
        }, psd.finalize);
        fn2();
      }, zoneProps, resolve, reject);
    });
  }
});
if (NativePromise) {
  if (NativePromise.allSettled)
    setProp(DexiePromise, "allSettled", function() {
      var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise(function(resolve) {
        if (possiblePromises.length === 0)
          resolve([]);
        var remaining = possiblePromises.length;
        var results = new Array(remaining);
        possiblePromises.forEach(function(p, i15) {
          return DexiePromise.resolve(p).then(function(value) {
            return results[i15] = { status: "fulfilled", value };
          }, function(reason) {
            return results[i15] = { status: "rejected", reason };
          }).then(function() {
            return --remaining || resolve(results);
          });
        });
      });
    });
  if (NativePromise.any && typeof AggregateError !== "undefined")
    setProp(DexiePromise, "any", function() {
      var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise(function(resolve, reject) {
        if (possiblePromises.length === 0)
          reject(new AggregateError([]));
        var remaining = possiblePromises.length;
        var failures = new Array(remaining);
        possiblePromises.forEach(function(p, i15) {
          return DexiePromise.resolve(p).then(function(value) {
            return resolve(value);
          }, function(failure) {
            failures[i15] = failure;
            if (!--remaining)
              reject(new AggregateError(failures));
          });
        });
      });
    });
}
function executePromiseTask(promise, fn2) {
  try {
    fn2(function(value) {
      if (promise._state !== null)
        return;
      if (value === promise)
        throw new TypeError("A promise cannot be resolved with itself.");
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      if (value && typeof value.then === "function") {
        executePromiseTask(promise, function(resolve, reject) {
          value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }
      if (shouldExecuteTick)
        endMicroTickScope();
    }, handleRejection.bind(null, promise));
  } catch (ex) {
    handleRejection(promise, ex);
  }
}
function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null)
    return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(function() {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: function() {
        return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
      }
    });
  });
  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick)
    endMicroTickScope();
}
function propagateAllListeners(promise) {
  var listeners = promise._listeners;
  promise._listeners = [];
  for (var i15 = 0, len = listeners.length; i15 < len; ++i15) {
    propagateToListener(promise, listeners[i15]);
  }
  var psd = promise._PSD;
  --psd.ref || psd.finalize();
  if (numScheduledCalls === 0) {
    ++numScheduledCalls;
    asap(function() {
      if (--numScheduledCalls === 0)
        finalizePhysicalTick();
    }, []);
  }
}
function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);
    return;
  }
  var cb = promise._state ? listener.onFulfilled : listener.onRejected;
  if (cb === null) {
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }
  ++listener.psd.ref;
  ++numScheduledCalls;
  asap(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
  try {
    currentFulfiller = promise;
    var ret, value = promise._value;
    if (promise._state) {
      ret = cb(value);
    } else {
      if (rejectingErrors.length)
        rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1)
        markErrorAsHandled(promise);
    }
    listener.resolve(ret);
  } catch (e) {
    listener.reject(e);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0)
      finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}
function getStack(promise, stacks, limit) {
  if (stacks.length === limit)
    return stacks;
  var stack = "";
  if (promise._state === false) {
    var failure = promise._value, errorName, message;
    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure;
      message = "";
    }
    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }
  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1)
      stacks.push(stack);
    if (promise._prev)
      getStack(promise._prev, stacks, limit);
  }
  return stacks;
}
function linkToPreviousPromise(promise, prev) {
  var numPrev = prev ? prev._numPrev + 1 : 0;
  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}
function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}
function endMicroTickScope() {
  var callbacks, i15, l;
  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;
      for (i15 = 0; i15 < l; ++i15) {
        var item = callbacks[i15];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);
  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach(function(p) {
    p._PSD.onunhandled.call(null, p._value, p);
  });
  var finalizers = tickFinalizers.slice(0);
  var i15 = finalizers.length;
  while (i15)
    finalizers[--i15]();
}
function run_at_end_of_this_or_next_physical_tick(fn2) {
  function finalizer() {
    fn2();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }
  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap(function() {
    if (--numScheduledCalls === 0)
      finalizePhysicalTick();
  }, []);
}
function addPossiblyUnhandledError(promise) {
  if (!unhandledErrors.some(function(p) {
    return p._value === promise._value;
  }))
    unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
  var i15 = unhandledErrors.length;
  while (i15)
    if (unhandledErrors[--i15]._value === promise._value) {
      unhandledErrors.splice(i15, 1);
      return;
    }
}
function PromiseReject(reason) {
  return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn2, errorCatcher) {
  var psd = PSD;
  return function() {
    var wasRootExec = beginMicroTickScope(), outerScope = PSD;
    try {
      switchToZone(psd, true);
      return fn2.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec)
        endMicroTickScope();
    }
  };
}
var task = { awaits: 0, echoes: 0, id: 0 };
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn2, props2, a1, a2) {
  var parent = PSD, psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter;
  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: DexiePromise,
    PromiseProp: { value: DexiePromise, configurable: true, writable: true },
    all: DexiePromise.all,
    race: DexiePromise.race,
    allSettled: DexiePromise.allSettled,
    any: DexiePromise.any,
    resolve: DexiePromise.resolve,
    reject: DexiePromise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
  } : {};
  if (props2)
    extend(psd, props2);
  ++parent.ref;
  psd.finalize = function() {
    --this.parent.ref || this.parent.finalize();
  };
  var rv = usePSD(psd, fn2, a1, a2);
  if (psd.ref === 0)
    psd.finalize();
  return rv;
}
function incrementExpectedAwaits() {
  if (!task.id)
    task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
}
function decrementExpectedAwaits() {
  if (!task.awaits)
    return false;
  if (--task.awaits === 0)
    task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT;
  return true;
}
if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
  incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then(function(x) {
      decrementExpectedAwaits();
      return x;
    }, function(e) {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }
  return possiblePromise;
}
function zoneEnterEcho(targetZone) {
  ++totalEchoes;
  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0;
  }
  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;
  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }
  if (targetZone === PSD)
    return;
  PSD = targetZone;
  if (currentZone === globalPSD)
    globalPSD.env = snapShot();
  if (patchGlobalPromise) {
    var GlobalPromise_1 = globalPSD.env.Promise;
    var targetEnv = targetZone.env;
    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise_1.prototype.then = targetEnv.gthen;
    if (currentZone.global || targetZone.global) {
      Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
      GlobalPromise_1.all = targetEnv.all;
      GlobalPromise_1.race = targetEnv.race;
      GlobalPromise_1.resolve = targetEnv.resolve;
      GlobalPromise_1.reject = targetEnv.reject;
      if (targetEnv.allSettled)
        GlobalPromise_1.allSettled = targetEnv.allSettled;
      if (targetEnv.any)
        GlobalPromise_1.any = targetEnv.any;
    }
  }
}
function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    allSettled: GlobalPromise.allSettled,
    any: GlobalPromise.any,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}
function usePSD(psd, fn2, a1, a2, a3) {
  var outerScope = PSD;
  try {
    switchToZone(psd, true);
    return fn2(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}
function enqueueNativeMicroTask(job) {
  nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn2, zone, possibleAwait, cleanup) {
  return typeof fn2 !== "function" ? fn2 : function() {
    var outerZone = PSD;
    if (possibleAwait)
      incrementExpectedAwaits();
    switchToZone(zone, true);
    try {
      return fn2.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
      if (cleanup)
        enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}
function getPatchedPromiseThen(origThen, zone) {
  return function(onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
  };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
  var rv;
  try {
    rv = promise.onuncatched(err);
  } catch (e) {
  }
  if (rv !== false)
    try {
      var event, eventData = { promise, reason: err };
      if (_global.document && document.createEvent) {
        event = document.createEvent("Event");
        event.initEvent(UNHANDLEDREJECTION, true, true);
        extend(event, eventData);
      } else if (_global.CustomEvent) {
        event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
        extend(event, eventData);
      }
      if (event && _global.dispatchEvent) {
        dispatchEvent(event);
        if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
          try {
            _global.onunhandledrejection(event);
          } catch (_) {
          }
      }
      if (debug && event && !event.defaultPrevented) {
        console.warn("Unhandled rejection: " + (err.stack || err));
      }
    } catch (e) {
    }
}
var rejection = DexiePromise.reject;
function tempTransaction(db, mode, storeNames, fn2) {
  if (!db.idbdb || !db._state.openComplete && (!PSD.letThrough && !db._vip)) {
    if (db._state.openComplete) {
      return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
    }
    if (!db._state.isBeingOpened) {
      if (!db._options.autoOpen)
        return rejection(new exceptions.DatabaseClosed());
      db.open().catch(nop);
    }
    return db._state.dbReadyPromise.then(function() {
      return tempTransaction(db, mode, storeNames, fn2);
    });
  } else {
    var trans = db._createTransaction(mode, storeNames, db._dbSchema);
    try {
      trans.create();
      db._state.PR1398_maxLoop = 3;
    } catch (ex) {
      if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
        console.warn("Dexie: Need to reopen db");
        db._close();
        return db.open().then(function() {
          return tempTransaction(db, mode, storeNames, fn2);
        });
      }
      return rejection(ex);
    }
    return trans._promise(mode, function(resolve, reject) {
      return newScope(function() {
        PSD.trans = trans;
        return fn2(resolve, reject, trans);
      });
    }).then(function(result) {
      return trans._completion.then(function() {
        return result;
      });
    });
  }
}
var DEXIE_VERSION = "3.2.2";
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function(frame) {
  return !/(dexie\.js|dexie\.min\.js)/.test(frame);
};
var DBNAMES_DB = "__dbnames";
var READONLY = "readonly";
var READWRITE = "readwrite";
function combine(filter1, filter2) {
  return filter1 ? filter2 ? function() {
    return filter1.apply(this, arguments) && filter2.apply(this, arguments);
  } : filter1 : filter2;
}
var AnyRange = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function workaroundForUndefinedPrimKey(keyPath) {
  return typeof keyPath === "string" && !/\./.test(keyPath) ? function(obj) {
    if (obj[keyPath] === void 0 && keyPath in obj) {
      obj = deepClone(obj);
      delete obj[keyPath];
    }
    return obj;
  } : function(obj) {
    return obj;
  };
}
var Table = function() {
  function Table2() {
  }
  Table2.prototype._trans = function(mode, fn2, writeLocked) {
    var trans = this._tx || PSD.trans;
    var tableName = this.name;
    function checkTableInTransaction(resolve, reject, trans2) {
      if (!trans2.schema[tableName])
        throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      return fn2(trans2.idbtrans, trans2);
    }
    var wasRootExec = beginMicroTickScope();
    try {
      return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function() {
        return trans._promise(mode, checkTableInTransaction, writeLocked);
      }, { trans, transless: PSD.transless || PSD }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
    } finally {
      if (wasRootExec)
        endMicroTickScope();
    }
  };
  Table2.prototype.get = function(keyOrCrit, cb) {
    var _this = this;
    if (keyOrCrit && keyOrCrit.constructor === Object)
      return this.where(keyOrCrit).first(cb);
    return this._trans("readonly", function(trans) {
      return _this.core.get({ trans, key: keyOrCrit }).then(function(res) {
        return _this.hook.reading.fire(res);
      });
    }).then(cb);
  };
  Table2.prototype.where = function(indexOrCrit) {
    if (typeof indexOrCrit === "string")
      return new this.db.WhereClause(this, indexOrCrit);
    if (isArray(indexOrCrit))
      return new this.db.WhereClause(this, "[" + indexOrCrit.join("+") + "]");
    var keyPaths = keys(indexOrCrit);
    if (keyPaths.length === 1)
      return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
    var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function(ix) {
      return ix.compound && keyPaths.every(function(keyPath) {
        return ix.keyPath.indexOf(keyPath) >= 0;
      }) && ix.keyPath.every(function(keyPath) {
        return keyPaths.indexOf(keyPath) >= 0;
      });
    })[0];
    if (compoundIndex && this.db._maxKey !== maxString)
      return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(function(kp) {
        return indexOrCrit[kp];
      }));
    if (!compoundIndex && debug)
      console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " + ("compound index [" + keyPaths.join("+") + "]"));
    var idxByName = this.schema.idxByName;
    var idb = this.db._deps.indexedDB;
    function equals(a, b) {
      try {
        return idb.cmp(a, b) === 0;
      } catch (e) {
        return false;
      }
    }
    var _a2 = keyPaths.reduce(function(_a3, keyPath) {
      var prevIndex = _a3[0], prevFilterFn = _a3[1];
      var index = idxByName[keyPath];
      var value = indexOrCrit[keyPath];
      return [
        prevIndex || index,
        prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function(x) {
          var prop = getByKeyPath(x, keyPath);
          return isArray(prop) && prop.some(function(item) {
            return equals(value, item);
          });
        } : function(x) {
          return equals(value, getByKeyPath(x, keyPath));
        }) : prevFilterFn
      ];
    }, [null, null]), idx = _a2[0], filterFunction = _a2[1];
    return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
  };
  Table2.prototype.filter = function(filterFunction) {
    return this.toCollection().and(filterFunction);
  };
  Table2.prototype.count = function(thenShortcut) {
    return this.toCollection().count(thenShortcut);
  };
  Table2.prototype.offset = function(offset) {
    return this.toCollection().offset(offset);
  };
  Table2.prototype.limit = function(numRows) {
    return this.toCollection().limit(numRows);
  };
  Table2.prototype.each = function(callback) {
    return this.toCollection().each(callback);
  };
  Table2.prototype.toArray = function(thenShortcut) {
    return this.toCollection().toArray(thenShortcut);
  };
  Table2.prototype.toCollection = function() {
    return new this.db.Collection(new this.db.WhereClause(this));
  };
  Table2.prototype.orderBy = function(index) {
    return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[" + index.join("+") + "]" : index));
  };
  Table2.prototype.reverse = function() {
    return this.toCollection().reverse();
  };
  Table2.prototype.mapToClass = function(constructor) {
    this.schema.mappedClass = constructor;
    var readHook = function(obj) {
      if (!obj)
        return obj;
      var res = Object.create(constructor.prototype);
      for (var m in obj)
        if (hasOwn(obj, m))
          try {
            res[m] = obj[m];
          } catch (_) {
          }
      return res;
    };
    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }
    this.schema.readHook = readHook;
    this.hook("reading", readHook);
    return constructor;
  };
  Table2.prototype.defineClass = function() {
    function Class(content) {
      extend(this, content);
    }
    return this.mapToClass(Class);
  };
  Table2.prototype.add = function(obj, key) {
    var _this = this;
    var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
    var objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", function(trans) {
      return _this.core.mutate({ trans, type: "add", keys: key != null ? [key] : null, values: [objToAdd] });
    }).then(function(res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
    }).then(function(lastResult) {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {
        }
      }
      return lastResult;
    });
  };
  Table2.prototype.update = function(keyOrObject, modifications) {
    if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
      var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
      if (key === void 0)
        return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
      try {
        if (typeof modifications !== "function") {
          keys(modifications).forEach(function(keyPath) {
            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
          });
        } else {
          modifications(keyOrObject, { value: keyOrObject, primKey: key });
        }
      } catch (_a2) {
      }
      return this.where(":id").equals(key).modify(modifications);
    } else {
      return this.where(":id").equals(keyOrObject).modify(modifications);
    }
  };
  Table2.prototype.put = function(obj, key) {
    var _this = this;
    var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
    var objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", function(trans) {
      return _this.core.mutate({ trans, type: "put", values: [objToAdd], keys: key != null ? [key] : null });
    }).then(function(res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
    }).then(function(lastResult) {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {
        }
      }
      return lastResult;
    });
  };
  Table2.prototype.delete = function(key) {
    var _this = this;
    return this._trans("readwrite", function(trans) {
      return _this.core.mutate({ trans, type: "delete", keys: [key] });
    }).then(function(res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
    });
  };
  Table2.prototype.clear = function() {
    var _this = this;
    return this._trans("readwrite", function(trans) {
      return _this.core.mutate({ trans, type: "deleteRange", range: AnyRange });
    }).then(function(res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
    });
  };
  Table2.prototype.bulkGet = function(keys2) {
    var _this = this;
    return this._trans("readonly", function(trans) {
      return _this.core.getMany({
        keys: keys2,
        trans
      }).then(function(result) {
        return result.map(function(res) {
          return _this.hook.reading.fire(res);
        });
      });
    });
  };
  Table2.prototype.bulkAdd = function(objects, keysOrOptions, options) {
    var _this = this;
    var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    var wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", function(trans) {
      var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
      if (keyPath && keys2)
        throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length)
        throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      var numObjects = objects.length;
      var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return _this.core.mutate({ trans, type: "add", keys: keys2, values: objectsToAdd, wantResults }).then(function(_a3) {
        var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
        var result = wantResults ? results : lastResult;
        if (numFailures === 0)
          return result;
        throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", failures);
      });
    });
  };
  Table2.prototype.bulkPut = function(objects, keysOrOptions, options) {
    var _this = this;
    var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    var wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", function(trans) {
      var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
      if (keyPath && keys2)
        throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length)
        throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      var numObjects = objects.length;
      var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return _this.core.mutate({ trans, type: "put", keys: keys2, values: objectsToPut, wantResults }).then(function(_a3) {
        var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
        var result = wantResults ? results : lastResult;
        if (numFailures === 0)
          return result;
        throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", failures);
      });
    });
  };
  Table2.prototype.bulkDelete = function(keys2) {
    var _this = this;
    var numKeys = keys2.length;
    return this._trans("readwrite", function(trans) {
      return _this.core.mutate({ trans, type: "delete", keys: keys2 });
    }).then(function(_a2) {
      var numFailures = _a2.numFailures, lastResult = _a2.lastResult, failures = _a2.failures;
      if (numFailures === 0)
        return lastResult;
      throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
    });
  };
  return Table2;
}();
function Events(ctx) {
  var evs = {};
  var rv = function(eventName, subscriber) {
    if (subscriber) {
      var i22 = arguments.length, args = new Array(i22 - 1);
      while (--i22)
        args[i22 - 1] = arguments[i22];
      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === "string") {
      return evs[eventName];
    }
  };
  rv.addEventType = add;
  for (var i15 = 1, l = arguments.length; i15 < l; ++i15) {
    add(arguments[i15]);
  }
  return rv;
  function add(eventName, chainFunction, defaultFunction) {
    if (typeof eventName === "object")
      return addConfiguredEvents(eventName);
    if (!chainFunction)
      chainFunction = reverseStoppableEventChain;
    if (!defaultFunction)
      defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function(cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function(cb) {
        context.subscribers = context.subscribers.filter(function(fn2) {
          return fn2 !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }
  function addConfiguredEvents(cfg) {
    keys(cfg).forEach(function(eventName) {
      var args = cfg[eventName];
      if (isArray(args)) {
        add(eventName, cfg[eventName][0], cfg[eventName][1]);
      } else if (args === "asap") {
        var context = add(eventName, mirror, function fire() {
          var i22 = arguments.length, args2 = new Array(i22);
          while (i22--)
            args2[i22] = arguments[i22];
          context.subscribers.forEach(function(fn2) {
            asap$1(function fireEvent() {
              fn2.apply(null, args2);
            });
          });
        });
      } else
        throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}
function makeClassConstructor(prototype, constructor) {
  derive(constructor).from({ prototype });
  return constructor;
}
function createTableConstructor(db) {
  return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
    this.db = db;
    this._tx = trans;
    this.name = name;
    this.schema = tableSchema;
    this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
      "creating": [hookCreatingChain, nop],
      "reading": [pureFunctionChain, mirror],
      "updating": [hookUpdatingChain, nop],
      "deleting": [hookDeletingChain, nop]
    });
  });
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
  return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn2) {
  ctx.filter = combine(ctx.filter, fn2);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
  var curr = ctx.replayFilter;
  ctx.replayFilter = curr ? function() {
    return combine(curr(), factory());
  } : factory;
  ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn2) {
  ctx.isMatch = combine(ctx.isMatch, fn2);
}
function getIndexOrStore(ctx, coreSchema) {
  if (ctx.isPrimKey)
    return coreSchema.primaryKey;
  var index = coreSchema.getIndexByKeyPath(ctx.index);
  if (!index)
    throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
  return index;
}
function openCursor(ctx, coreTable, trans) {
  var index = getIndexOrStore(ctx, coreTable.schema);
  return coreTable.openCursor({
    trans,
    values: !ctx.keysOnly,
    reverse: ctx.dir === "prev",
    unique: !!ctx.unique,
    query: {
      index,
      range: ctx.range
    }
  });
}
function iter(ctx, fn2, coreTrans, coreTable) {
  var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
  if (!ctx.or) {
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn2, !ctx.keysOnly && ctx.valueMapper);
  } else {
    var set_1 = {};
    var union = function(item, cursor, advance) {
      if (!filter || filter(cursor, advance, function(result) {
        return cursor.stop(result);
      }, function(err) {
        return cursor.fail(err);
      })) {
        var primaryKey = cursor.primaryKey;
        var key = "" + primaryKey;
        if (key === "[object ArrayBuffer]")
          key = "" + new Uint8Array(primaryKey);
        if (!hasOwn(set_1, key)) {
          set_1[key] = true;
          fn2(item, cursor, advance);
        }
      }
    };
    return Promise.all([
      ctx.or._iterate(union, coreTrans),
      iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
    ]);
  }
}
function iterate(cursorPromise, filter, fn2, valueMapper) {
  var mappedFn = valueMapper ? function(x, c, a) {
    return fn2(valueMapper(x), c, a);
  } : fn2;
  var wrappedFn = wrap(mappedFn);
  return cursorPromise.then(function(cursor) {
    if (cursor) {
      return cursor.start(function() {
        var c = function() {
          return cursor.continue();
        };
        if (!filter || filter(cursor, function(advancer) {
          return c = advancer;
        }, function(val) {
          cursor.stop(val);
          c = nop;
        }, function(e) {
          cursor.fail(e);
          c = nop;
        }))
          wrappedFn(cursor.value, cursor, function(advancer) {
            return c = advancer;
          });
        c();
      });
    }
  });
}
function cmp(a, b) {
  try {
    var ta2 = type(a);
    var tb = type(b);
    if (ta2 !== tb) {
      if (ta2 === "Array")
        return 1;
      if (tb === "Array")
        return -1;
      if (ta2 === "binary")
        return 1;
      if (tb === "binary")
        return -1;
      if (ta2 === "string")
        return 1;
      if (tb === "string")
        return -1;
      if (ta2 === "Date")
        return 1;
      if (tb !== "Date")
        return NaN;
      return -1;
    }
    switch (ta2) {
      case "number":
      case "Date":
      case "string":
        return a > b ? 1 : a < b ? -1 : 0;
      case "binary": {
        return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
      }
      case "Array":
        return compareArrays(a, b);
    }
  } catch (_a2) {
  }
  return NaN;
}
function compareArrays(a, b) {
  var al = a.length;
  var bl = b.length;
  var l = al < bl ? al : bl;
  for (var i15 = 0; i15 < l; ++i15) {
    var res = cmp(a[i15], b[i15]);
    if (res !== 0)
      return res;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function compareUint8Arrays(a, b) {
  var al = a.length;
  var bl = b.length;
  var l = al < bl ? al : bl;
  for (var i15 = 0; i15 < l; ++i15) {
    if (a[i15] !== b[i15])
      return a[i15] < b[i15] ? -1 : 1;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function type(x) {
  var t = typeof x;
  if (t !== "object")
    return t;
  if (ArrayBuffer.isView(x))
    return "binary";
  var tsTag = toStringTag(x);
  return tsTag === "ArrayBuffer" ? "binary" : tsTag;
}
function getUint8Array(a) {
  if (a instanceof Uint8Array)
    return a;
  if (ArrayBuffer.isView(a))
    return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  return new Uint8Array(a);
}
var Collection = function() {
  function Collection2() {
  }
  Collection2.prototype._read = function(fn2, cb) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn2).then(cb);
  };
  Collection2.prototype._write = function(fn2) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn2, "locked");
  };
  Collection2.prototype._addAlgorithm = function(fn2) {
    var ctx = this._ctx;
    ctx.algorithm = combine(ctx.algorithm, fn2);
  };
  Collection2.prototype._iterate = function(fn2, coreTrans) {
    return iter(this._ctx, fn2, coreTrans, this._ctx.table.core);
  };
  Collection2.prototype.clone = function(props2) {
    var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
    if (props2)
      extend(ctx, props2);
    rv._ctx = ctx;
    return rv;
  };
  Collection2.prototype.raw = function() {
    this._ctx.valueMapper = null;
    return this;
  };
  Collection2.prototype.each = function(fn2) {
    var ctx = this._ctx;
    return this._read(function(trans) {
      return iter(ctx, fn2, trans, ctx.table.core);
    });
  };
  Collection2.prototype.count = function(cb) {
    var _this = this;
    return this._read(function(trans) {
      var ctx = _this._ctx;
      var coreTable = ctx.table.core;
      if (isPlainKeyRange(ctx, true)) {
        return coreTable.count({
          trans,
          query: {
            index: getIndexOrStore(ctx, coreTable.schema),
            range: ctx.range
          }
        }).then(function(count2) {
          return Math.min(count2, ctx.limit);
        });
      } else {
        var count = 0;
        return iter(ctx, function() {
          ++count;
          return false;
        }, trans, coreTable).then(function() {
          return count;
        });
      }
    }).then(cb);
  };
  Collection2.prototype.sortBy = function(keyPath, cb) {
    var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
    function getval(obj, i15) {
      if (i15)
        return getval(obj[parts[i15]], i15 - 1);
      return obj[lastPart];
    }
    var order = this._ctx.dir === "next" ? 1 : -1;
    function sorter(a, b) {
      var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
      return aVal < bVal ? -order : aVal > bVal ? order : 0;
    }
    return this.toArray(function(a) {
      return a.sort(sorter);
    }).then(cb);
  };
  Collection2.prototype.toArray = function(cb) {
    var _this = this;
    return this._read(function(trans) {
      var ctx = _this._ctx;
      if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        var valueMapper_1 = ctx.valueMapper;
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          limit: ctx.limit,
          values: true,
          query: {
            index,
            range: ctx.range
          }
        }).then(function(_a2) {
          var result = _a2.result;
          return valueMapper_1 ? result.map(valueMapper_1) : result;
        });
      } else {
        var a_1 = [];
        return iter(ctx, function(item) {
          return a_1.push(item);
        }, trans, ctx.table.core).then(function() {
          return a_1;
        });
      }
    }, cb);
  };
  Collection2.prototype.offset = function(offset) {
    var ctx = this._ctx;
    if (offset <= 0)
      return this;
    ctx.offset += offset;
    if (isPlainKeyRange(ctx)) {
      addReplayFilter(ctx, function() {
        var offsetLeft = offset;
        return function(cursor, advance) {
          if (offsetLeft === 0)
            return true;
          if (offsetLeft === 1) {
            --offsetLeft;
            return false;
          }
          advance(function() {
            cursor.advance(offsetLeft);
            offsetLeft = 0;
          });
          return false;
        };
      });
    } else {
      addReplayFilter(ctx, function() {
        var offsetLeft = offset;
        return function() {
          return --offsetLeft < 0;
        };
      });
    }
    return this;
  };
  Collection2.prototype.limit = function(numRows) {
    this._ctx.limit = Math.min(this._ctx.limit, numRows);
    addReplayFilter(this._ctx, function() {
      var rowsLeft = numRows;
      return function(cursor, advance, resolve) {
        if (--rowsLeft <= 0)
          advance(resolve);
        return rowsLeft >= 0;
      };
    }, true);
    return this;
  };
  Collection2.prototype.until = function(filterFunction, bIncludeStopEntry) {
    addFilter(this._ctx, function(cursor, advance, resolve) {
      if (filterFunction(cursor.value)) {
        advance(resolve);
        return bIncludeStopEntry;
      } else {
        return true;
      }
    });
    return this;
  };
  Collection2.prototype.first = function(cb) {
    return this.limit(1).toArray(function(a) {
      return a[0];
    }).then(cb);
  };
  Collection2.prototype.last = function(cb) {
    return this.reverse().first(cb);
  };
  Collection2.prototype.filter = function(filterFunction) {
    addFilter(this._ctx, function(cursor) {
      return filterFunction(cursor.value);
    });
    addMatchFilter(this._ctx, filterFunction);
    return this;
  };
  Collection2.prototype.and = function(filter) {
    return this.filter(filter);
  };
  Collection2.prototype.or = function(indexName) {
    return new this.db.WhereClause(this._ctx.table, indexName, this);
  };
  Collection2.prototype.reverse = function() {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange)
      this._ondirectionchange(this._ctx.dir);
    return this;
  };
  Collection2.prototype.desc = function() {
    return this.reverse();
  };
  Collection2.prototype.eachKey = function(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function(val, cursor) {
      cb(cursor.key, cursor);
    });
  };
  Collection2.prototype.eachUniqueKey = function(cb) {
    this._ctx.unique = "unique";
    return this.eachKey(cb);
  };
  Collection2.prototype.eachPrimaryKey = function(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function(val, cursor) {
      cb(cursor.primaryKey, cursor);
    });
  };
  Collection2.prototype.keys = function(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function(item, cursor) {
      a.push(cursor.key);
    }).then(function() {
      return a;
    }).then(cb);
  };
  Collection2.prototype.primaryKeys = function(cb) {
    var ctx = this._ctx;
    if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
      return this._read(function(trans) {
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          values: false,
          limit: ctx.limit,
          query: {
            index,
            range: ctx.range
          }
        });
      }).then(function(_a2) {
        var result = _a2.result;
        return result;
      }).then(cb);
    }
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function(item, cursor) {
      a.push(cursor.primaryKey);
    }).then(function() {
      return a;
    }).then(cb);
  };
  Collection2.prototype.uniqueKeys = function(cb) {
    this._ctx.unique = "unique";
    return this.keys(cb);
  };
  Collection2.prototype.firstKey = function(cb) {
    return this.limit(1).keys(function(a) {
      return a[0];
    }).then(cb);
  };
  Collection2.prototype.lastKey = function(cb) {
    return this.reverse().firstKey(cb);
  };
  Collection2.prototype.distinct = function() {
    var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
    if (!idx || !idx.multi)
      return this;
    var set = {};
    addFilter(this._ctx, function(cursor) {
      var strKey = cursor.primaryKey.toString();
      var found = hasOwn(set, strKey);
      set[strKey] = true;
      return !found;
    });
    return this;
  };
  Collection2.prototype.modify = function(changes) {
    var _this = this;
    var ctx = this._ctx;
    return this._write(function(trans) {
      var modifyer;
      if (typeof changes === "function") {
        modifyer = changes;
      } else {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;
        modifyer = function(item) {
          var anythingModified = false;
          for (var i15 = 0; i15 < numKeys; ++i15) {
            var keyPath = keyPaths[i15], val = changes[keyPath];
            if (getByKeyPath(item, keyPath) !== val) {
              setByKeyPath(item, keyPath, val);
              anythingModified = true;
            }
          }
          return anythingModified;
        };
      }
      var coreTable = ctx.table.core;
      var _a2 = coreTable.schema.primaryKey, outbound = _a2.outbound, extractKey = _a2.extractKey;
      var limit = _this.db._options.modifyChunkSize || 200;
      var totalFailures = [];
      var successCount = 0;
      var failedKeys = [];
      var applyMutateResult = function(expectedCount, res) {
        var failures = res.failures, numFailures = res.numFailures;
        successCount += expectedCount - numFailures;
        for (var _i2 = 0, _a3 = keys(failures); _i2 < _a3.length; _i2++) {
          var pos = _a3[_i2];
          totalFailures.push(failures[pos]);
        }
      };
      return _this.clone().primaryKeys().then(function(keys2) {
        var nextChunk = function(offset) {
          var count = Math.min(limit, keys2.length - offset);
          return coreTable.getMany({
            trans,
            keys: keys2.slice(offset, offset + count),
            cache: "immutable"
          }).then(function(values) {
            var addValues = [];
            var putValues = [];
            var putKeys = outbound ? [] : null;
            var deleteKeys = [];
            for (var i15 = 0; i15 < count; ++i15) {
              var origValue = values[i15];
              var ctx_1 = {
                value: deepClone(origValue),
                primKey: keys2[offset + i15]
              };
              if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                if (ctx_1.value == null) {
                  deleteKeys.push(keys2[offset + i15]);
                } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                  deleteKeys.push(keys2[offset + i15]);
                  addValues.push(ctx_1.value);
                } else {
                  putValues.push(ctx_1.value);
                  if (outbound)
                    putKeys.push(keys2[offset + i15]);
                }
              }
            }
            var criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
              index: ctx.index,
              range: ctx.range
            };
            return Promise.resolve(addValues.length > 0 && coreTable.mutate({ trans, type: "add", values: addValues }).then(function(res) {
              for (var pos in res.failures) {
                deleteKeys.splice(parseInt(pos), 1);
              }
              applyMutateResult(addValues.length, res);
            })).then(function() {
              return (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
                trans,
                type: "put",
                keys: putKeys,
                values: putValues,
                criteria,
                changeSpec: typeof changes !== "function" && changes
              }).then(function(res) {
                return applyMutateResult(putValues.length, res);
              });
            }).then(function() {
              return (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
                trans,
                type: "delete",
                keys: deleteKeys,
                criteria
              }).then(function(res) {
                return applyMutateResult(deleteKeys.length, res);
              });
            }).then(function() {
              return keys2.length > offset + count && nextChunk(offset + limit);
            });
          });
        };
        return nextChunk(0).then(function() {
          if (totalFailures.length > 0)
            throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
          return keys2.length;
        });
      });
    });
  };
  Collection2.prototype.delete = function() {
    var ctx = this._ctx, range = ctx.range;
    if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
      return this._write(function(trans) {
        var primaryKey = ctx.table.core.schema.primaryKey;
        var coreRange = range;
        return ctx.table.core.count({ trans, query: { index: primaryKey, range: coreRange } }).then(function(count) {
          return ctx.table.core.mutate({ trans, type: "deleteRange", range: coreRange }).then(function(_a2) {
            var failures = _a2.failures;
            _a2.lastResult;
            _a2.results;
            var numFailures = _a2.numFailures;
            if (numFailures)
              throw new ModifyError("Could not delete some values", Object.keys(failures).map(function(pos) {
                return failures[pos];
              }), count - numFailures);
            return count - numFailures;
          });
        });
      });
    }
    return this.modify(deleteCallback);
  };
  return Collection2;
}();
var deleteCallback = function(value, ctx) {
  return ctx.value = null;
};
function createCollectionConstructor(db) {
  return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
    this.db = db;
    var keyRange = AnyRange, error = null;
    if (keyRangeGenerator)
      try {
        keyRange = keyRangeGenerator();
      } catch (ex) {
        error = ex;
      }
    var whereCtx = whereClause._ctx;
    var table = whereCtx.table;
    var readingHook = table.hook.reading.fire;
    this._ctx = {
      table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error,
      or: whereCtx.or,
      valueMapper: readingHook !== mirror ? readingHook : null
    };
  });
}
function simpleCompare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
  return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T2) {
  var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
  collection._ctx.error = T2 ? new T2(err) : new TypeError(err);
  return collection;
}
function emptyCollection(whereClause) {
  return new whereClause.Collection(whereClause, function() {
    return rangeEqual("");
  }).limit(0);
}
function upperFactory(dir) {
  return dir === "next" ? function(s) {
    return s.toUpperCase();
  } : function(s) {
    return s.toLowerCase();
  };
}
function lowerFactory(dir) {
  return dir === "next" ? function(s) {
    return s.toLowerCase();
  } : function(s) {
    return s.toUpperCase();
  };
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
  var length = Math.min(key.length, lowerNeedle.length);
  var llp = -1;
  for (var i15 = 0; i15 < length; ++i15) {
    var lwrKeyChar = lowerKey[i15];
    if (lwrKeyChar !== lowerNeedle[i15]) {
      if (cmp2(key[i15], upperNeedle[i15]) < 0)
        return key.substr(0, i15) + upperNeedle[i15] + upperNeedle.substr(i15 + 1);
      if (cmp2(key[i15], lowerNeedle[i15]) < 0)
        return key.substr(0, i15) + lowerNeedle[i15] + upperNeedle.substr(i15 + 1);
      if (llp >= 0)
        return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
      return null;
    }
    if (cmp2(key[i15], lwrKeyChar) < 0)
      llp = i15;
  }
  if (length < lowerNeedle.length && dir === "next")
    return key + upperNeedle.substr(key.length);
  if (length < key.length && dir === "prev")
    return key.substr(0, upperNeedle.length);
  return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
  var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
  if (!needles.every(function(s) {
    return typeof s === "string";
  })) {
    return fail(whereClause, STRING_EXPECTED);
  }
  function initDirection(dir) {
    upper = upperFactory(dir);
    lower = lowerFactory(dir);
    compare = dir === "next" ? simpleCompare : simpleCompareReverse;
    var needleBounds = needles.map(function(needle) {
      return { lower: lower(needle), upper: upper(needle) };
    }).sort(function(a, b) {
      return compare(a.lower, b.lower);
    });
    upperNeedles = needleBounds.map(function(nb) {
      return nb.upper;
    });
    lowerNeedles = needleBounds.map(function(nb) {
      return nb.lower;
    });
    direction = dir;
    nextKeySuffix = dir === "next" ? "" : suffix;
  }
  initDirection("next");
  var c = new whereClause.Collection(whereClause, function() {
    return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
  });
  c._ondirectionchange = function(direction2) {
    initDirection(direction2);
  };
  var firstPossibleNeedle = 0;
  c._addAlgorithm(function(cursor, advance, resolve) {
    var key = cursor.key;
    if (typeof key !== "string")
      return false;
    var lowerKey = lower(key);
    if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
      return true;
    } else {
      var lowestPossibleCasing = null;
      for (var i15 = firstPossibleNeedle; i15 < needlesLen; ++i15) {
        var casing = nextCasing(key, lowerKey, upperNeedles[i15], lowerNeedles[i15], compare, direction);
        if (casing === null && lowestPossibleCasing === null)
          firstPossibleNeedle = i15 + 1;
        else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
          lowestPossibleCasing = casing;
        }
      }
      if (lowestPossibleCasing !== null) {
        advance(function() {
          cursor.continue(lowestPossibleCasing + nextKeySuffix);
        });
      } else {
        advance(resolve);
      }
      return false;
    }
  });
  return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
  return {
    type: 2,
    lower,
    upper,
    lowerOpen,
    upperOpen
  };
}
function rangeEqual(value) {
  return {
    type: 1,
    lower: value,
    upper: value
  };
}
var WhereClause = function() {
  function WhereClause2() {
  }
  Object.defineProperty(WhereClause2.prototype, "Collection", {
    get: function() {
      return this._ctx.table.db.Collection;
    },
    enumerable: false,
    configurable: true
  });
  WhereClause2.prototype.between = function(lower, upper, includeLower, includeUpper) {
    includeLower = includeLower !== false;
    includeUpper = includeUpper === true;
    try {
      if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper))
        return emptyCollection(this);
      return new this.Collection(this, function() {
        return createRange(lower, upper, !includeLower, !includeUpper);
      });
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  };
  WhereClause2.prototype.equals = function(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function() {
      return rangeEqual(value);
    });
  };
  WhereClause2.prototype.above = function(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function() {
      return createRange(value, void 0, true);
    });
  };
  WhereClause2.prototype.aboveOrEqual = function(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function() {
      return createRange(value, void 0, false);
    });
  };
  WhereClause2.prototype.below = function(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function() {
      return createRange(void 0, value, false, true);
    });
  };
  WhereClause2.prototype.belowOrEqual = function(value) {
    if (value == null)
      return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function() {
      return createRange(void 0, value);
    });
  };
  WhereClause2.prototype.startsWith = function(str) {
    if (typeof str !== "string")
      return fail(this, STRING_EXPECTED);
    return this.between(str, str + maxString, true, true);
  };
  WhereClause2.prototype.startsWithIgnoreCase = function(str) {
    if (str === "")
      return this.startsWith(str);
    return addIgnoreCaseAlgorithm(this, function(x, a) {
      return x.indexOf(a[0]) === 0;
    }, [str], maxString);
  };
  WhereClause2.prototype.equalsIgnoreCase = function(str) {
    return addIgnoreCaseAlgorithm(this, function(x, a) {
      return x === a[0];
    }, [str], "");
  };
  WhereClause2.prototype.anyOfIgnoreCase = function() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0)
      return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, function(x, a) {
      return a.indexOf(x) !== -1;
    }, set, "");
  };
  WhereClause2.prototype.startsWithAnyOfIgnoreCase = function() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0)
      return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, function(x, a) {
      return a.some(function(n) {
        return x.indexOf(n) === 0;
      });
    }, set, maxString);
  };
  WhereClause2.prototype.anyOf = function() {
    var _this = this;
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    var compare = this._cmp;
    try {
      set.sort(compare);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    if (set.length === 0)
      return emptyCollection(this);
    var c = new this.Collection(this, function() {
      return createRange(set[0], set[set.length - 1]);
    });
    c._ondirectionchange = function(direction) {
      compare = direction === "next" ? _this._ascending : _this._descending;
      set.sort(compare);
    };
    var i15 = 0;
    c._addAlgorithm(function(cursor, advance, resolve) {
      var key = cursor.key;
      while (compare(key, set[i15]) > 0) {
        ++i15;
        if (i15 === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (compare(key, set[i15]) === 0) {
        return true;
      } else {
        advance(function() {
          cursor.continue(set[i15]);
        });
        return false;
      }
    });
    return c;
  };
  WhereClause2.prototype.notEqual = function(value) {
    return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
  };
  WhereClause2.prototype.noneOf = function() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0)
      return new this.Collection(this);
    try {
      set.sort(this._ascending);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    var ranges = set.reduce(function(res, val) {
      return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
    }, null);
    ranges.push([set[set.length - 1], this.db._maxKey]);
    return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
  };
  WhereClause2.prototype.inAnyRange = function(ranges, options) {
    var _this = this;
    var cmp2 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
    if (ranges.length === 0)
      return emptyCollection(this);
    if (!ranges.every(function(range) {
      return range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0;
    })) {
      return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
    }
    var includeLowers = !options || options.includeLowers !== false;
    var includeUppers = options && options.includeUppers === true;
    function addRange2(ranges2, newRange) {
      var i15 = 0, l = ranges2.length;
      for (; i15 < l; ++i15) {
        var range = ranges2[i15];
        if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
          range[0] = min(range[0], newRange[0]);
          range[1] = max(range[1], newRange[1]);
          break;
        }
      }
      if (i15 === l)
        ranges2.push(newRange);
      return ranges2;
    }
    var sortDirection = ascending;
    function rangeSorter(a, b) {
      return sortDirection(a[0], b[0]);
    }
    var set;
    try {
      set = ranges.reduce(addRange2, []);
      set.sort(rangeSorter);
    } catch (ex) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    var rangePos = 0;
    var keyIsBeyondCurrentEntry = includeUppers ? function(key) {
      return ascending(key, set[rangePos][1]) > 0;
    } : function(key) {
      return ascending(key, set[rangePos][1]) >= 0;
    };
    var keyIsBeforeCurrentEntry = includeLowers ? function(key) {
      return descending(key, set[rangePos][0]) > 0;
    } : function(key) {
      return descending(key, set[rangePos][0]) >= 0;
    };
    function keyWithinCurrentRange(key) {
      return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
    }
    var checkKey = keyIsBeyondCurrentEntry;
    var c = new this.Collection(this, function() {
      return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
    });
    c._ondirectionchange = function(direction) {
      if (direction === "next") {
        checkKey = keyIsBeyondCurrentEntry;
        sortDirection = ascending;
      } else {
        checkKey = keyIsBeforeCurrentEntry;
        sortDirection = descending;
      }
      set.sort(rangeSorter);
    };
    c._addAlgorithm(function(cursor, advance, resolve) {
      var key = cursor.key;
      while (checkKey(key)) {
        ++rangePos;
        if (rangePos === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (keyWithinCurrentRange(key)) {
        return true;
      } else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
        return false;
      } else {
        advance(function() {
          if (sortDirection === ascending)
            cursor.continue(set[rangePos][0]);
          else
            cursor.continue(set[rangePos][1]);
        });
        return false;
      }
    });
    return c;
  };
  WhereClause2.prototype.startsWithAnyOf = function() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (!set.every(function(s) {
      return typeof s === "string";
    })) {
      return fail(this, "startsWithAnyOf() only works with strings");
    }
    if (set.length === 0)
      return emptyCollection(this);
    return this.inAnyRange(set.map(function(str) {
      return [str, str + maxString];
    }));
  };
  return WhereClause2;
}();
function createWhereClauseConstructor(db) {
  return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
    this.db = db;
    this._ctx = {
      table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
    var indexedDB2 = db._deps.indexedDB;
    if (!indexedDB2)
      throw new exceptions.MissingAPI();
    this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2);
    this._descending = function(a, b) {
      return indexedDB2.cmp(b, a);
    };
    this._max = function(a, b) {
      return indexedDB2.cmp(a, b) > 0 ? a : b;
    };
    this._min = function(a, b) {
      return indexedDB2.cmp(a, b) < 0 ? a : b;
    };
    this._IDBKeyRange = db._deps.IDBKeyRange;
  });
}
function eventRejectHandler(reject) {
  return wrap(function(event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}
function preventDefault(event) {
  if (event.stopPropagation)
    event.stopPropagation();
  if (event.preventDefault)
    event.preventDefault();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
var Transaction = function() {
  function Transaction2() {
  }
  Transaction2.prototype._lock = function() {
    assert(!PSD.global);
    ++this._reculock;
    if (this._reculock === 1 && !PSD.global)
      PSD.lockOwnerFor = this;
    return this;
  };
  Transaction2.prototype._unlock = function() {
    assert(!PSD.global);
    if (--this._reculock === 0) {
      if (!PSD.global)
        PSD.lockOwnerFor = null;
      while (this._blockedFuncs.length > 0 && !this._locked()) {
        var fnAndPSD = this._blockedFuncs.shift();
        try {
          usePSD(fnAndPSD[1], fnAndPSD[0]);
        } catch (e) {
        }
      }
    }
    return this;
  };
  Transaction2.prototype._locked = function() {
    return this._reculock && PSD.lockOwnerFor !== this;
  };
  Transaction2.prototype.create = function(idbtrans) {
    var _this = this;
    if (!this.mode)
      return this;
    var idbdb = this.db.idbdb;
    var dbOpenError = this.db._state.dbOpenError;
    assert(!this.idbtrans);
    if (!idbtrans && !idbdb) {
      switch (dbOpenError && dbOpenError.name) {
        case "DatabaseClosedError":
          throw new exceptions.DatabaseClosed(dbOpenError);
        case "MissingAPIError":
          throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
        default:
          throw new exceptions.OpenFailed(dbOpenError);
      }
    }
    if (!this.active)
      throw new exceptions.TransactionInactive();
    assert(this._completion._state === null);
    idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : idbdb.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }));
    idbtrans.onerror = wrap(function(ev) {
      preventDefault(ev);
      _this._reject(idbtrans.error);
    });
    idbtrans.onabort = wrap(function(ev) {
      preventDefault(ev);
      _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
      _this.active = false;
      _this.on("abort").fire(ev);
    });
    idbtrans.oncomplete = wrap(function() {
      _this.active = false;
      _this._resolve();
      if ("mutatedParts" in idbtrans) {
        globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
      }
    });
    return this;
  };
  Transaction2.prototype._promise = function(mode, fn2, bWriteLock) {
    var _this = this;
    if (mode === "readwrite" && this.mode !== "readwrite")
      return rejection(new exceptions.ReadOnly("Transaction is readonly"));
    if (!this.active)
      return rejection(new exceptions.TransactionInactive());
    if (this._locked()) {
      return new DexiePromise(function(resolve, reject) {
        _this._blockedFuncs.push([function() {
          _this._promise(mode, fn2, bWriteLock).then(resolve, reject);
        }, PSD]);
      });
    } else if (bWriteLock) {
      return newScope(function() {
        var p2 = new DexiePromise(function(resolve, reject) {
          _this._lock();
          var rv = fn2(resolve, reject, _this);
          if (rv && rv.then)
            rv.then(resolve, reject);
        });
        p2.finally(function() {
          return _this._unlock();
        });
        p2._lib = true;
        return p2;
      });
    } else {
      var p = new DexiePromise(function(resolve, reject) {
        var rv = fn2(resolve, reject, _this);
        if (rv && rv.then)
          rv.then(resolve, reject);
      });
      p._lib = true;
      return p;
    }
  };
  Transaction2.prototype._root = function() {
    return this.parent ? this.parent._root() : this;
  };
  Transaction2.prototype.waitFor = function(promiseLike) {
    var root = this._root();
    var promise = DexiePromise.resolve(promiseLike);
    if (root._waitingFor) {
      root._waitingFor = root._waitingFor.then(function() {
        return promise;
      });
    } else {
      root._waitingFor = promise;
      root._waitingQueue = [];
      var store = root.idbtrans.objectStore(root.storeNames[0]);
      (function spin() {
        ++root._spinCount;
        while (root._waitingQueue.length)
          root._waitingQueue.shift()();
        if (root._waitingFor)
          store.get(-Infinity).onsuccess = spin;
      })();
    }
    var currentWaitPromise = root._waitingFor;
    return new DexiePromise(function(resolve, reject) {
      promise.then(function(res) {
        return root._waitingQueue.push(wrap(resolve.bind(null, res)));
      }, function(err) {
        return root._waitingQueue.push(wrap(reject.bind(null, err)));
      }).finally(function() {
        if (root._waitingFor === currentWaitPromise) {
          root._waitingFor = null;
        }
      });
    });
  };
  Transaction2.prototype.abort = function() {
    if (this.active) {
      this.active = false;
      if (this.idbtrans)
        this.idbtrans.abort();
      this._reject(new exceptions.Abort());
    }
  };
  Transaction2.prototype.table = function(tableName) {
    var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
    if (hasOwn(memoizedTables, tableName))
      return memoizedTables[tableName];
    var tableSchema = this.schema[tableName];
    if (!tableSchema) {
      throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
    }
    var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
    transactionBoundTable.core = this.db.core.table(tableName);
    memoizedTables[tableName] = transactionBoundTable;
    return transactionBoundTable;
  };
  return Transaction2;
}();
function createTransactionConstructor(db) {
  return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
    var _this = this;
    this.db = db;
    this.mode = mode;
    this.storeNames = storeNames;
    this.schema = dbschema;
    this.chromeTransactionDurability = chromeTransactionDurability;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new DexiePromise(function(resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });
    this._completion.then(function() {
      _this.active = false;
      _this.on.complete.fire();
    }, function(e) {
      var wasActive = _this.active;
      _this.active = false;
      _this.on.error.fire(e);
      _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
      return rejection(e);
    });
  });
}
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
  return {
    name,
    keyPath,
    unique,
    multi,
    auto,
    compound,
    src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
  };
}
function nameFromKeyPath(keyPath) {
  return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
  return {
    name,
    primKey,
    indexes,
    mappedClass: null,
    idxByName: arrayToObject(indexes, function(index) {
      return [index.name, index];
    })
  };
}
function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}
var getMaxKey = function(IdbKeyRange) {
  try {
    IdbKeyRange.only([[]]);
    getMaxKey = function() {
      return [[]];
    };
    return [[]];
  } catch (e) {
    getMaxKey = function() {
      return maxString;
    };
    return maxString;
  }
};
function getKeyExtractor(keyPath) {
  if (keyPath == null) {
    return function() {
      return void 0;
    };
  } else if (typeof keyPath === "string") {
    return getSinglePathKeyExtractor(keyPath);
  } else {
    return function(obj) {
      return getByKeyPath(obj, keyPath);
    };
  }
}
function getSinglePathKeyExtractor(keyPath) {
  var split = keyPath.split(".");
  if (split.length === 1) {
    return function(obj) {
      return obj[keyPath];
    };
  } else {
    return function(obj) {
      return getByKeyPath(obj, keyPath);
    };
  }
}
function arrayify(arrayLike) {
  return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
  return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : "[" + keyPath.join("+") + "]";
}
function createDBCore(db, IdbKeyRange, tmpTrans) {
  function extractSchema(db2, trans) {
    var tables2 = arrayify(db2.objectStoreNames);
    return {
      schema: {
        name: db2.name,
        tables: tables2.map(function(table) {
          return trans.objectStore(table);
        }).map(function(store) {
          var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
          var compound = isArray(keyPath);
          var outbound = keyPath == null;
          var indexByKeyPath = {};
          var result = {
            name: store.name,
            primaryKey: {
              name: null,
              isPrimaryKey: true,
              outbound,
              compound,
              keyPath,
              autoIncrement,
              unique: true,
              extractKey: getKeyExtractor(keyPath)
            },
            indexes: arrayify(store.indexNames).map(function(indexName) {
              return store.index(indexName);
            }).map(function(index) {
              var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath2 = index.keyPath;
              var compound2 = isArray(keyPath2);
              var result2 = {
                name,
                compound: compound2,
                keyPath: keyPath2,
                unique,
                multiEntry,
                extractKey: getKeyExtractor(keyPath2)
              };
              indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
              return result2;
            }),
            getIndexByKeyPath: function(keyPath2) {
              return indexByKeyPath[getKeyPathAlias(keyPath2)];
            }
          };
          indexByKeyPath[":id"] = result.primaryKey;
          if (keyPath != null) {
            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
          }
          return result;
        })
      },
      hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
    };
  }
  function makeIDBKeyRange(range) {
    if (range.type === 3)
      return null;
    if (range.type === 4)
      throw new Error("Cannot convert never type to IDBKeyRange");
    var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
    var idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    return idbRange;
  }
  function createDbCoreTable(tableSchema) {
    var tableName = tableSchema.name;
    function mutate(_a3) {
      var trans = _a3.trans, type2 = _a3.type, keys2 = _a3.keys, values = _a3.values, range = _a3.range;
      return new Promise(function(resolve, reject) {
        resolve = wrap(resolve);
        var store = trans.objectStore(tableName);
        var outbound = store.keyPath == null;
        var isAddOrPut = type2 === "put" || type2 === "add";
        if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
          throw new Error("Invalid operation type: " + type2);
        var length = (keys2 || values || { length: 1 }).length;
        if (keys2 && values && keys2.length !== values.length) {
          throw new Error("Given keys array must have same length as given values array.");
        }
        if (length === 0)
          return resolve({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
        var req;
        var reqs = [];
        var failures = [];
        var numFailures = 0;
        var errorHandler = function(event) {
          ++numFailures;
          preventDefault(event);
        };
        if (type2 === "deleteRange") {
          if (range.type === 4)
            return resolve({ numFailures, failures, results: [], lastResult: void 0 });
          if (range.type === 3)
            reqs.push(req = store.clear());
          else
            reqs.push(req = store.delete(makeIDBKeyRange(range)));
        } else {
          var _a4 = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null], args1 = _a4[0], args2 = _a4[1];
          if (isAddOrPut) {
            for (var i15 = 0; i15 < length; ++i15) {
              reqs.push(req = args2 && args2[i15] !== void 0 ? store[type2](args1[i15], args2[i15]) : store[type2](args1[i15]));
              req.onerror = errorHandler;
            }
          } else {
            for (var i15 = 0; i15 < length; ++i15) {
              reqs.push(req = store[type2](args1[i15]));
              req.onerror = errorHandler;
            }
          }
        }
        var done = function(event) {
          var lastResult = event.target.result;
          reqs.forEach(function(req2, i22) {
            return req2.error != null && (failures[i22] = req2.error);
          });
          resolve({
            numFailures,
            failures,
            results: type2 === "delete" ? keys2 : reqs.map(function(req2) {
              return req2.result;
            }),
            lastResult
          });
        };
        req.onerror = function(event) {
          errorHandler(event);
          done(event);
        };
        req.onsuccess = done;
      });
    }
    function openCursor2(_a3) {
      var trans = _a3.trans, values = _a3.values, query2 = _a3.query, reverse = _a3.reverse, unique = _a3.unique;
      return new Promise(function(resolve, reject) {
        resolve = wrap(resolve);
        var index = query2.index, range = query2.range;
        var store = trans.objectStore(tableName);
        var source = index.isPrimaryKey ? store : store.index(index.name);
        var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
        var req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap(function(ev) {
          var cursor = req.result;
          if (!cursor) {
            resolve(null);
            return;
          }
          cursor.___id = ++_id_counter;
          cursor.done = false;
          var _cursorContinue = cursor.continue.bind(cursor);
          var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
          if (_cursorContinuePrimaryKey)
            _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
          var _cursorAdvance = cursor.advance.bind(cursor);
          var doThrowCursorIsNotStarted = function() {
            throw new Error("Cursor not started");
          };
          var doThrowCursorIsStopped = function() {
            throw new Error("Cursor not stopped");
          };
          cursor.trans = trans;
          cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
          cursor.fail = wrap(reject);
          cursor.next = function() {
            var _this = this;
            var gotOne = 1;
            return this.start(function() {
              return gotOne-- ? _this.continue() : _this.stop();
            }).then(function() {
              return _this;
            });
          };
          cursor.start = function(callback) {
            var iterationPromise = new Promise(function(resolveIteration, rejectIteration) {
              resolveIteration = wrap(resolveIteration);
              req.onerror = eventRejectHandler(rejectIteration);
              cursor.fail = rejectIteration;
              cursor.stop = function(value) {
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                resolveIteration(value);
              };
            });
            var guardedCallback = function() {
              if (req.result) {
                try {
                  callback();
                } catch (err) {
                  cursor.fail(err);
                }
              } else {
                cursor.done = true;
                cursor.start = function() {
                  throw new Error("Cursor behind last entry");
                };
                cursor.stop();
              }
            };
            req.onsuccess = wrap(function(ev2) {
              req.onsuccess = guardedCallback;
              guardedCallback();
            });
            cursor.continue = _cursorContinue;
            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
            cursor.advance = _cursorAdvance;
            guardedCallback();
            return iterationPromise;
          };
          resolve(cursor);
        }, reject);
      });
    }
    function query(hasGetAll2) {
      return function(request) {
        return new Promise(function(resolve, reject) {
          resolve = wrap(resolve);
          var trans = request.trans, values = request.values, limit = request.limit, query2 = request.query;
          var nonInfinitLimit = limit === Infinity ? void 0 : limit;
          var index = query2.index, range = query2.range;
          var store = trans.objectStore(tableName);
          var source = index.isPrimaryKey ? store : store.index(index.name);
          var idbKeyRange = makeIDBKeyRange(range);
          if (limit === 0)
            return resolve({ result: [] });
          if (hasGetAll2) {
            var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
            req.onsuccess = function(event) {
              return resolve({ result: event.target.result });
            };
            req.onerror = eventRejectHandler(reject);
          } else {
            var count_1 = 0;
            var req_1 = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
            var result_1 = [];
            req_1.onsuccess = function(event) {
              var cursor = req_1.result;
              if (!cursor)
                return resolve({ result: result_1 });
              result_1.push(values ? cursor.value : cursor.primaryKey);
              if (++count_1 === limit)
                return resolve({ result: result_1 });
              cursor.continue();
            };
            req_1.onerror = eventRejectHandler(reject);
          }
        });
      };
    }
    return {
      name: tableName,
      schema: tableSchema,
      mutate,
      getMany: function(_a3) {
        var trans = _a3.trans, keys2 = _a3.keys;
        return new Promise(function(resolve, reject) {
          resolve = wrap(resolve);
          var store = trans.objectStore(tableName);
          var length = keys2.length;
          var result = new Array(length);
          var keyCount = 0;
          var callbackCount = 0;
          var req;
          var successHandler = function(event) {
            var req2 = event.target;
            if ((result[req2._pos] = req2.result) != null)
              ;
            if (++callbackCount === keyCount)
              resolve(result);
          };
          var errorHandler = eventRejectHandler(reject);
          for (var i15 = 0; i15 < length; ++i15) {
            var key = keys2[i15];
            if (key != null) {
              req = store.get(keys2[i15]);
              req._pos = i15;
              req.onsuccess = successHandler;
              req.onerror = errorHandler;
              ++keyCount;
            }
          }
          if (keyCount === 0)
            resolve(result);
        });
      },
      get: function(_a3) {
        var trans = _a3.trans, key = _a3.key;
        return new Promise(function(resolve, reject) {
          resolve = wrap(resolve);
          var store = trans.objectStore(tableName);
          var req = store.get(key);
          req.onsuccess = function(event) {
            return resolve(event.target.result);
          };
          req.onerror = eventRejectHandler(reject);
        });
      },
      query: query(hasGetAll),
      openCursor: openCursor2,
      count: function(_a3) {
        var query2 = _a3.query, trans = _a3.trans;
        var index = query2.index, range = query2.range;
        return new Promise(function(resolve, reject) {
          var store = trans.objectStore(tableName);
          var source = index.isPrimaryKey ? store : store.index(index.name);
          var idbKeyRange = makeIDBKeyRange(range);
          var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
          req.onsuccess = wrap(function(ev) {
            return resolve(ev.target.result);
          });
          req.onerror = eventRejectHandler(reject);
        });
      }
    };
  }
  var _a2 = extractSchema(db, tmpTrans), schema = _a2.schema, hasGetAll = _a2.hasGetAll;
  var tables = schema.tables.map(function(tableSchema) {
    return createDbCoreTable(tableSchema);
  });
  var tableMap = {};
  tables.forEach(function(table) {
    return tableMap[table.name] = table;
  });
  return {
    stack: "dbcore",
    transaction: db.transaction.bind(db),
    table: function(name) {
      var result = tableMap[name];
      if (!result)
        throw new Error("Table '" + name + "' not found");
      return tableMap[name];
    },
    MIN_KEY: -Infinity,
    MAX_KEY: getMaxKey(IdbKeyRange),
    schema
  };
}
function createMiddlewareStack(stackImpl, middlewares) {
  return middlewares.reduce(function(down, _a2) {
    var create = _a2.create;
    return __assign(__assign({}, down), create(down));
  }, stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, _a2, tmpTrans) {
  var IDBKeyRange = _a2.IDBKeyRange;
  _a2.indexedDB;
  var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
  return {
    dbcore
  };
}
function generateMiddlewareStacks(_a2, tmpTrans) {
  var db = _a2._novip;
  var idbdb = tmpTrans.db;
  var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
  db.core = stacks.dbcore;
  db.tables.forEach(function(table) {
    var tableName = table.name;
    if (db.core.schema.tables.some(function(tbl) {
      return tbl.name === tableName;
    })) {
      table.core = db.core.table(tableName);
      if (db[tableName] instanceof db.Table) {
        db[tableName].core = table.core;
      }
    }
  });
}
function setApiOnPlace(_a2, objs, tableNames, dbschema) {
  var db = _a2._novip;
  tableNames.forEach(function(tableName) {
    var schema = dbschema[tableName];
    objs.forEach(function(obj) {
      var propDesc = getPropertyDescriptor(obj, tableName);
      if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
        if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
          setProp(obj, tableName, {
            get: function() {
              return this.table(tableName);
            },
            set: function(value) {
              defineProperty(this, tableName, { value, writable: true, configurable: true, enumerable: true });
            }
          });
        } else {
          obj[tableName] = new db.Table(tableName, schema);
        }
      }
    });
  });
}
function removeTablesApi(_a2, objs) {
  var db = _a2._novip;
  objs.forEach(function(obj) {
    for (var key in obj) {
      if (obj[key] instanceof db.Table)
        delete obj[key];
    }
  });
}
function lowerVersionFirst(a, b) {
  return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
  var globalSchema = db._dbSchema;
  var trans = db._createTransaction("readwrite", db._storeNames, globalSchema);
  trans.create(idbUpgradeTrans);
  trans._completion.catch(reject);
  var rejectTransaction = trans._reject.bind(trans);
  var transless = PSD.transless || PSD;
  newScope(function() {
    PSD.trans = trans;
    PSD.transless = transless;
    if (oldVersion === 0) {
      keys(globalSchema).forEach(function(tableName) {
        createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
      });
      generateMiddlewareStacks(db, idbUpgradeTrans);
      DexiePromise.follow(function() {
        return db.on.populate.fire(trans);
      }).catch(rejectTransaction);
    } else
      updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
  });
}
function updateTablesAndIndexes(_a2, oldVersion, trans, idbUpgradeTrans) {
  var db = _a2._novip;
  var queue = [];
  var versions = db._versions;
  var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
  var anyContentUpgraderHasRun = false;
  var versToRun = versions.filter(function(v) {
    return v._cfg.version >= oldVersion;
  });
  versToRun.forEach(function(version) {
    queue.push(function() {
      var oldSchema = globalSchema;
      var newSchema = version._cfg.dbschema;
      adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
      adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
      globalSchema = db._dbSchema = newSchema;
      var diff = getSchemaDiff(oldSchema, newSchema);
      diff.add.forEach(function(tuple) {
        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
      });
      diff.change.forEach(function(change) {
        if (change.recreate) {
          throw new exceptions.Upgrade("Not yet support for changing primary key");
        } else {
          var store_1 = idbUpgradeTrans.objectStore(change.name);
          change.add.forEach(function(idx) {
            return addIndex(store_1, idx);
          });
          change.change.forEach(function(idx) {
            store_1.deleteIndex(idx.name);
            addIndex(store_1, idx);
          });
          change.del.forEach(function(idxName) {
            return store_1.deleteIndex(idxName);
          });
        }
      });
      var contentUpgrade = version._cfg.contentUpgrade;
      if (contentUpgrade && version._cfg.version > oldVersion) {
        generateMiddlewareStacks(db, idbUpgradeTrans);
        trans._memoizedTables = {};
        anyContentUpgraderHasRun = true;
        var upgradeSchema_1 = shallowClone(newSchema);
        diff.del.forEach(function(table) {
          upgradeSchema_1[table] = oldSchema[table];
        });
        removeTablesApi(db, [db.Transaction.prototype]);
        setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
        trans.schema = upgradeSchema_1;
        var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
        if (contentUpgradeIsAsync_1) {
          incrementExpectedAwaits();
        }
        var returnValue_1;
        var promiseFollowed = DexiePromise.follow(function() {
          returnValue_1 = contentUpgrade(trans);
          if (returnValue_1) {
            if (contentUpgradeIsAsync_1) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue_1.then(decrementor, decrementor);
            }
          }
        });
        return returnValue_1 && typeof returnValue_1.then === "function" ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function() {
          return returnValue_1;
        });
      }
    });
    queue.push(function(idbtrans) {
      if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
        var newSchema = version._cfg.dbschema;
        deleteRemovedTables(newSchema, idbtrans);
      }
      removeTablesApi(db, [db.Transaction.prototype]);
      setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
      trans.schema = db._dbSchema;
    });
  });
  function runQueue() {
    return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
  }
  return runQueue().then(function() {
    createMissingTables(globalSchema, idbUpgradeTrans);
  });
}
function getSchemaDiff(oldSchema, newSchema) {
  var diff = {
    del: [],
    add: [],
    change: []
  };
  var table;
  for (table in oldSchema) {
    if (!newSchema[table])
      diff.del.push(table);
  }
  for (table in newSchema) {
    var oldDef = oldSchema[table], newDef = newSchema[table];
    if (!oldDef) {
      diff.add.push([table, newDef]);
    } else {
      var change = {
        name: table,
        def: newDef,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
        change.recreate = true;
        diff.change.push(change);
      } else {
        var oldIndexes = oldDef.idxByName;
        var newIndexes = newDef.idxByName;
        var idxName = void 0;
        for (idxName in oldIndexes) {
          if (!newIndexes[idxName])
            change.del.push(idxName);
        }
        for (idxName in newIndexes) {
          var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
          if (!oldIdx)
            change.add.push(newIdx);
          else if (oldIdx.src !== newIdx.src)
            change.change.push(newIdx);
        }
        if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
          diff.change.push(change);
        }
      }
    }
  }
  return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
  var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
  indexes.forEach(function(idx) {
    return addIndex(store, idx);
  });
  return store;
}
function createMissingTables(newSchema, idbtrans) {
  keys(newSchema).forEach(function(tableName) {
    if (!idbtrans.db.objectStoreNames.contains(tableName)) {
      createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    }
  });
}
function deleteRemovedTables(newSchema, idbtrans) {
  [].slice.call(idbtrans.db.objectStoreNames).forEach(function(storeName) {
    return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
  });
}
function addIndex(store, idx) {
  store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
  var globalSchema = {};
  var dbStoreNames = slice(idbdb.objectStoreNames, 0);
  dbStoreNames.forEach(function(storeName) {
    var store = tmpTrans.objectStore(storeName);
    var keyPath = store.keyPath;
    var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
    var indexes = [];
    for (var j2 = 0; j2 < store.indexNames.length; ++j2) {
      var idbindex = store.index(store.indexNames[j2]);
      keyPath = idbindex.keyPath;
      var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
      indexes.push(index);
    }
    globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
  });
  return globalSchema;
}
function readGlobalSchema(_a2, idbdb, tmpTrans) {
  var db = _a2._novip;
  db.verno = idbdb.version / 10;
  var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
  db._storeNames = slice(idbdb.objectStoreNames, 0);
  setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
  var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
  var diff = getSchemaDiff(installedSchema, db._dbSchema);
  return !(diff.add.length || diff.change.some(function(ch) {
    return ch.add.length || ch.change.length;
  }));
}
function adjustToExistingIndexNames(_a2, schema, idbtrans) {
  var db = _a2._novip;
  var storeNames = idbtrans.db.objectStoreNames;
  for (var i15 = 0; i15 < storeNames.length; ++i15) {
    var storeName = storeNames[i15];
    var store = idbtrans.objectStore(storeName);
    db._hasGetAll = "getAll" in store;
    for (var j2 = 0; j2 < store.indexNames.length; ++j2) {
      var indexName = store.indexNames[j2];
      var keyPath = store.index(indexName).keyPath;
      var dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
      if (schema[storeName]) {
        var indexSpec = schema[storeName].idxByName[dexieName];
        if (indexSpec) {
          indexSpec.name = indexName;
          delete schema[storeName].idxByName[dexieName];
          schema[storeName].idxByName[indexName] = indexSpec;
        }
      }
    }
  }
  if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    db._hasGetAll = false;
  }
}
function parseIndexSyntax(primKeyAndIndexes) {
  return primKeyAndIndexes.split(",").map(function(index, indexNum) {
    index = index.trim();
    var name = index.replace(/([&*]|\+\+)/g, "");
    var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
    return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
  });
}
var Version = function() {
  function Version2() {
  }
  Version2.prototype._parseStoresSpec = function(stores, outSchema) {
    keys(stores).forEach(function(tableName) {
      if (stores[tableName] !== null) {
        var indexes = parseIndexSyntax(stores[tableName]);
        var primKey = indexes.shift();
        if (primKey.multi)
          throw new exceptions.Schema("Primary key cannot be multi-valued");
        indexes.forEach(function(idx) {
          if (idx.auto)
            throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!idx.keyPath)
            throw new exceptions.Schema("Index must have a name and cannot be an empty string");
        });
        outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
      }
    });
  };
  Version2.prototype.stores = function(stores) {
    var db = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
    var versions = db._versions;
    var storesSpec = {};
    var dbschema = {};
    versions.forEach(function(version) {
      extend(storesSpec, version._cfg.storesSource);
      dbschema = version._cfg.dbschema = {};
      version._parseStoresSpec(storesSpec, dbschema);
    });
    db._dbSchema = dbschema;
    removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
    setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
    db._storeNames = keys(dbschema);
    return this;
  };
  Version2.prototype.upgrade = function(upgradeFunction) {
    this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
    return this;
  };
  return Version2;
}();
function createVersionConstructor(db) {
  return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
    this.db = db;
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
  });
}
function getDbNamesTable(indexedDB2, IDBKeyRange) {
  var dbNamesDB = indexedDB2["_dbNamesDB"];
  if (!dbNamesDB) {
    dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
      addons: [],
      indexedDB: indexedDB2,
      IDBKeyRange
    });
    dbNamesDB.version(1).stores({ dbnames: "name" });
  }
  return dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB2) {
  return indexedDB2 && typeof indexedDB2.databases === "function";
}
function getDatabaseNames(_a2) {
  var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
  return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(function(infos) {
    return infos.map(function(info) {
      return info.name;
    }).filter(function(name) {
      return name !== DBNAMES_DB;
    });
  }) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
}
function _onDatabaseCreated(_a2, name) {
  var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({ name }).catch(nop);
}
function _onDatabaseDeleted(_a2, name) {
  var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn2) {
  return newScope(function() {
    PSD.letThrough = true;
    return fn2();
  });
}
function idbReady() {
  var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!isSafari || !indexedDB.databases)
    return Promise.resolve();
  var intervalId;
  return new Promise(function(resolve) {
    var tryIdb = function() {
      return indexedDB.databases().finally(resolve);
    };
    intervalId = setInterval(tryIdb, 100);
    tryIdb();
  }).finally(function() {
    return clearInterval(intervalId);
  });
}
function dexieOpen(db) {
  var state = db._state;
  var indexedDB2 = db._deps.indexedDB;
  if (state.isBeingOpened || db.idbdb)
    return state.dbReadyPromise.then(function() {
      return state.dbOpenError ? rejection(state.dbOpenError) : db;
    });
  debug && (state.openCanceller._stackHolder = getErrorWithStack());
  state.isBeingOpened = true;
  state.dbOpenError = null;
  state.openComplete = false;
  var openCanceller = state.openCanceller;
  function throwIfCancelled() {
    if (state.openCanceller !== openCanceller)
      throw new exceptions.DatabaseClosed("db.open() was cancelled");
  }
  var resolveDbReady = state.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
  return DexiePromise.race([openCanceller, (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(function() {
    return new DexiePromise(function(resolve, reject) {
      throwIfCancelled();
      if (!indexedDB2)
        throw new exceptions.MissingAPI();
      var dbName = db.name;
      var req = state.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(db.verno * 10));
      if (!req)
        throw new exceptions.MissingAPI();
      req.onerror = eventRejectHandler(reject);
      req.onblocked = wrap(db._fireOnBlocked);
      req.onupgradeneeded = wrap(function(e) {
        upgradeTransaction = req.transaction;
        if (state.autoSchema && !db._options.allowEmptyDB) {
          req.onerror = preventDefault;
          upgradeTransaction.abort();
          req.result.close();
          var delreq = indexedDB2.deleteDatabase(dbName);
          delreq.onsuccess = delreq.onerror = wrap(function() {
            reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
          });
        } else {
          upgradeTransaction.onerror = eventRejectHandler(reject);
          var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
          wasCreated = oldVer < 1;
          db._novip.idbdb = req.result;
          runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
        }
      }, reject);
      req.onsuccess = wrap(function() {
        upgradeTransaction = null;
        var idbdb = db._novip.idbdb = req.result;
        var objectStoreNames = slice(idbdb.objectStoreNames);
        if (objectStoreNames.length > 0)
          try {
            var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
            if (state.autoSchema)
              readGlobalSchema(db, idbdb, tmpTrans);
            else {
              adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
              if (!verifyInstalledSchema(db, tmpTrans)) {
                console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
              }
            }
            generateMiddlewareStacks(db, tmpTrans);
          } catch (e) {
          }
        connections.push(db);
        idbdb.onversionchange = wrap(function(ev) {
          state.vcFired = true;
          db.on("versionchange").fire(ev);
        });
        idbdb.onclose = wrap(function(ev) {
          db.on("close").fire(ev);
        });
        if (wasCreated)
          _onDatabaseCreated(db._deps, dbName);
        resolve();
      }, reject);
    });
  })]).then(function() {
    throwIfCancelled();
    state.onReadyBeingFired = [];
    return DexiePromise.resolve(vip(function() {
      return db.on.ready.fire(db.vip);
    })).then(function fireRemainders() {
      if (state.onReadyBeingFired.length > 0) {
        var remainders_1 = state.onReadyBeingFired.reduce(promisableChain, nop);
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(function() {
          return remainders_1(db.vip);
        })).then(fireRemainders);
      }
    });
  }).finally(function() {
    state.onReadyBeingFired = null;
    state.isBeingOpened = false;
  }).then(function() {
    return db;
  }).catch(function(err) {
    state.dbOpenError = err;
    try {
      upgradeTransaction && upgradeTransaction.abort();
    } catch (_a2) {
    }
    if (openCanceller === state.openCanceller) {
      db._close();
    }
    return rejection(err);
  }).finally(function() {
    state.openComplete = true;
    resolveDbReady();
  });
}
function awaitIterator(iterator) {
  var callNext = function(result) {
    return iterator.next(result);
  }, doThrow = function(error) {
    return iterator.throw(error);
  }, onSuccess = step(callNext), onError = step(doThrow);
  function step(getNext) {
    return function(val) {
      var next = getNext(val), value = next.value;
      return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }
  return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
  var i15 = arguments.length;
  if (i15 < 2)
    throw new exceptions.InvalidArgument("Too few arguments");
  var args = new Array(i15 - 1);
  while (--i15)
    args[i15 - 1] = arguments[i15];
  scopeFunc = args.pop();
  var tables = flatten(args);
  return [mode, tables, scopeFunc];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
  return DexiePromise.resolve().then(function() {
    var transless = PSD.transless || PSD;
    var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
    var zoneProps = {
      trans,
      transless
    };
    if (parentTransaction) {
      trans.idbtrans = parentTransaction.idbtrans;
    } else {
      try {
        trans.create();
        db._state.PR1398_maxLoop = 3;
      } catch (ex) {
        if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
          console.warn("Dexie: Need to reopen db");
          db._close();
          return db.open().then(function() {
            return enterTransactionScope(db, mode, storeNames, null, scopeFunc);
          });
        }
        return rejection(ex);
      }
    }
    var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
    if (scopeFuncIsAsync) {
      incrementExpectedAwaits();
    }
    var returnValue;
    var promiseFollowed = DexiePromise.follow(function() {
      returnValue = scopeFunc.call(trans, trans);
      if (returnValue) {
        if (scopeFuncIsAsync) {
          var decrementor = decrementExpectedAwaits.bind(null, null);
          returnValue.then(decrementor, decrementor);
        } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
          returnValue = awaitIterator(returnValue);
        }
      }
    }, zoneProps);
    return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(function(x) {
      return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
    }) : promiseFollowed.then(function() {
      return returnValue;
    })).then(function(x) {
      if (parentTransaction)
        trans._resolve();
      return trans._completion.then(function() {
        return x;
      });
    }).catch(function(e) {
      trans._reject(e);
      return rejection(e);
    });
  });
}
function pad(a, value, count) {
  var result = isArray(a) ? a.slice() : [a];
  for (var i15 = 0; i15 < count; ++i15)
    result.push(value);
  return result;
}
function createVirtualIndexMiddleware(down) {
  return __assign(__assign({}, down), { table: function(tableName) {
    var table = down.table(tableName);
    var schema = table.schema;
    var indexLookup = {};
    var allVirtualIndexes = [];
    function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
      var keyPathAlias = getKeyPathAlias(keyPath);
      var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
      var keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
      var isVirtual = keyTail > 0;
      var virtualIndex = __assign(__assign({}, lowLevelIndex), { isVirtual, keyTail, keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
      indexList.push(virtualIndex);
      if (!virtualIndex.isPrimaryKey) {
        allVirtualIndexes.push(virtualIndex);
      }
      if (keyLength > 1) {
        var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
        addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
      }
      indexList.sort(function(a, b) {
        return a.keyTail - b.keyTail;
      });
      return virtualIndex;
    }
    var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
    indexLookup[":id"] = [primaryKey];
    for (var _i2 = 0, _a2 = schema.indexes; _i2 < _a2.length; _i2++) {
      var index = _a2[_i2];
      addVirtualIndexes(index.keyPath, 0, index);
    }
    function findBestIndex(keyPath) {
      var result2 = indexLookup[getKeyPathAlias(keyPath)];
      return result2 && result2[0];
    }
    function translateRange(range, keyTail) {
      return {
        type: range.type === 1 ? 2 : range.type,
        lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
        lowerOpen: true,
        upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
        upperOpen: true
      };
    }
    function translateRequest(req) {
      var index2 = req.query.index;
      return index2.isVirtual ? __assign(__assign({}, req), { query: {
        index: index2,
        range: translateRange(req.query.range, index2.keyTail)
      } }) : req;
    }
    var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function(req) {
      return table.count(translateRequest(req));
    }, query: function(req) {
      return table.query(translateRequest(req));
    }, openCursor: function(req) {
      var _a3 = req.query.index, keyTail = _a3.keyTail, isVirtual = _a3.isVirtual, keyLength = _a3.keyLength;
      if (!isVirtual)
        return table.openCursor(req);
      function createVirtualCursor(cursor) {
        function _continue(key) {
          key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
        }
        var virtualCursor = Object.create(cursor, {
          continue: { value: _continue },
          continuePrimaryKey: {
            value: function(key, primaryKey2) {
              cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
            }
          },
          primaryKey: {
            get: function() {
              return cursor.primaryKey;
            }
          },
          key: {
            get: function() {
              var key = cursor.key;
              return keyLength === 1 ? key[0] : key.slice(0, keyLength);
            }
          },
          value: {
            get: function() {
              return cursor.value;
            }
          }
        });
        return virtualCursor;
      }
      return table.openCursor(translateRequest(req)).then(function(cursor) {
        return cursor && createVirtualCursor(cursor);
      });
    } });
    return result;
  } });
}
var virtualIndexMiddleware = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: createVirtualIndexMiddleware
};
function getObjectDiff(a, b, rv, prfx) {
  rv = rv || {};
  prfx = prfx || "";
  keys(a).forEach(function(prop) {
    if (!hasOwn(b, prop)) {
      rv[prfx + prop] = void 0;
    } else {
      var ap = a[prop], bp = b[prop];
      if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
        var apTypeName = toStringTag(ap);
        var bpTypeName = toStringTag(bp);
        if (apTypeName !== bpTypeName) {
          rv[prfx + prop] = b[prop];
        } else if (apTypeName === "Object") {
          getObjectDiff(ap, bp, rv, prfx + prop + ".");
        } else if (ap !== bp) {
          rv[prfx + prop] = b[prop];
        }
      } else if (ap !== bp)
        rv[prfx + prop] = b[prop];
    }
  });
  keys(b).forEach(function(prop) {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop];
    }
  });
  return rv;
}
function getEffectiveKeys(primaryKey, req) {
  if (req.type === "delete")
    return req.keys;
  return req.keys || req.values.map(primaryKey.extractKey);
}
var hooksMiddleware = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: function(downCore) {
    return __assign(__assign({}, downCore), { table: function(tableName) {
      var downTable = downCore.table(tableName);
      var primaryKey = downTable.schema.primaryKey;
      var tableMiddleware = __assign(__assign({}, downTable), { mutate: function(req) {
        var dxTrans = PSD.trans;
        var _a2 = dxTrans.table(tableName).hook, deleting = _a2.deleting, creating = _a2.creating, updating = _a2.updating;
        switch (req.type) {
          case "add":
            if (creating.fire === nop)
              break;
            return dxTrans._promise("readwrite", function() {
              return addPutOrDelete(req);
            }, true);
          case "put":
            if (creating.fire === nop && updating.fire === nop)
              break;
            return dxTrans._promise("readwrite", function() {
              return addPutOrDelete(req);
            }, true);
          case "delete":
            if (deleting.fire === nop)
              break;
            return dxTrans._promise("readwrite", function() {
              return addPutOrDelete(req);
            }, true);
          case "deleteRange":
            if (deleting.fire === nop)
              break;
            return dxTrans._promise("readwrite", function() {
              return deleteRange(req);
            }, true);
        }
        return downTable.mutate(req);
        function addPutOrDelete(req2) {
          var dxTrans2 = PSD.trans;
          var keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
          if (!keys2)
            throw new Error("Keys missing");
          req2 = req2.type === "add" || req2.type === "put" ? __assign(__assign({}, req2), { keys: keys2 }) : __assign({}, req2);
          if (req2.type !== "delete")
            req2.values = __spreadArray([], req2.values, true);
          if (req2.keys)
            req2.keys = __spreadArray([], req2.keys, true);
          return getExistingValues(downTable, req2, keys2).then(function(existingValues) {
            var contexts = keys2.map(function(key, i15) {
              var existingValue = existingValues[i15];
              var ctx = { onerror: null, onsuccess: null };
              if (req2.type === "delete") {
                deleting.fire.call(ctx, key, existingValue, dxTrans2);
              } else if (req2.type === "add" || existingValue === void 0) {
                var generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i15], dxTrans2);
                if (key == null && generatedPrimaryKey != null) {
                  key = generatedPrimaryKey;
                  req2.keys[i15] = key;
                  if (!primaryKey.outbound) {
                    setByKeyPath(req2.values[i15], primaryKey.keyPath, key);
                  }
                }
              } else {
                var objectDiff = getObjectDiff(existingValue, req2.values[i15]);
                var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                if (additionalChanges_1) {
                  var requestedValue_1 = req2.values[i15];
                  Object.keys(additionalChanges_1).forEach(function(keyPath) {
                    if (hasOwn(requestedValue_1, keyPath)) {
                      requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                    } else {
                      setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                    }
                  });
                }
              }
              return ctx;
            });
            return downTable.mutate(req2).then(function(_a3) {
              var failures = _a3.failures, results = _a3.results, numFailures = _a3.numFailures, lastResult = _a3.lastResult;
              for (var i15 = 0; i15 < keys2.length; ++i15) {
                var primKey = results ? results[i15] : keys2[i15];
                var ctx = contexts[i15];
                if (primKey == null) {
                  ctx.onerror && ctx.onerror(failures[i15]);
                } else {
                  ctx.onsuccess && ctx.onsuccess(req2.type === "put" && existingValues[i15] ? req2.values[i15] : primKey);
                }
              }
              return { failures, results, numFailures, lastResult };
            }).catch(function(error) {
              contexts.forEach(function(ctx) {
                return ctx.onerror && ctx.onerror(error);
              });
              return Promise.reject(error);
            });
          });
        }
        function deleteRange(req2) {
          return deleteNextChunk(req2.trans, req2.range, 1e4);
        }
        function deleteNextChunk(trans, range, limit) {
          return downTable.query({ trans, values: false, query: { index: primaryKey, range }, limit }).then(function(_a3) {
            var result = _a3.result;
            return addPutOrDelete({ type: "delete", keys: result, trans }).then(function(res) {
              if (res.numFailures > 0)
                return Promise.reject(res.failures[0]);
              if (result.length < limit) {
                return { failures: [], numFailures: 0, lastResult: void 0 };
              } else {
                return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
              }
            });
          });
        }
      } });
      return tableMiddleware;
    } });
  }
};
function getExistingValues(table, req, effectiveKeys) {
  return req.type === "add" ? Promise.resolve([]) : table.getMany({ trans: req.trans, keys: effectiveKeys, cache: "immutable" });
}
function getFromTransactionCache(keys2, cache, clone) {
  try {
    if (!cache)
      return null;
    if (cache.keys.length < keys2.length)
      return null;
    var result = [];
    for (var i15 = 0, j2 = 0; i15 < cache.keys.length && j2 < keys2.length; ++i15) {
      if (cmp(cache.keys[i15], keys2[j2]) !== 0)
        continue;
      result.push(clone ? deepClone(cache.values[i15]) : cache.values[i15]);
      ++j2;
    }
    return result.length === keys2.length ? result : null;
  } catch (_a2) {
    return null;
  }
}
var cacheExistingValuesMiddleware = {
  stack: "dbcore",
  level: -1,
  create: function(core) {
    return {
      table: function(tableName) {
        var table = core.table(tableName);
        return __assign(__assign({}, table), { getMany: function(req) {
          if (!req.cache) {
            return table.getMany(req);
          }
          var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
          if (cachedResult) {
            return DexiePromise.resolve(cachedResult);
          }
          return table.getMany(req).then(function(res) {
            req.trans["_cache"] = {
              keys: req.keys,
              values: req.cache === "clone" ? deepClone(res) : res
            };
            return res;
          });
        }, mutate: function(req) {
          if (req.type !== "add")
            req.trans["_cache"] = null;
          return table.mutate(req);
        } });
      }
    };
  }
};
var _a;
function isEmptyRange(node) {
  return !("from" in node);
}
var RangeSet = function(fromOrTree, to2) {
  if (this) {
    extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to2 : fromOrTree } : { d: 0 });
  } else {
    var rv = new RangeSet();
    if (fromOrTree && "d" in fromOrTree) {
      extend(rv, fromOrTree);
    }
    return rv;
  }
};
props(RangeSet.prototype, (_a = {
  add: function(rangeSet) {
    mergeRanges(this, rangeSet);
    return this;
  },
  addKey: function(key) {
    addRange(this, key, key);
    return this;
  },
  addKeys: function(keys2) {
    var _this = this;
    keys2.forEach(function(key) {
      return addRange(_this, key, key);
    });
    return this;
  }
}, _a[iteratorSymbol] = function() {
  return getRangeSetIterator(this);
}, _a));
function addRange(target, from, to2) {
  var diff = cmp(from, to2);
  if (isNaN(diff))
    return;
  if (diff > 0)
    throw RangeError();
  if (isEmptyRange(target))
    return extend(target, { from, to: to2, d: 1 });
  var left = target.l;
  var right = target.r;
  if (cmp(to2, target.from) < 0) {
    left ? addRange(left, from, to2) : target.l = { from, to: to2, d: 1, l: null, r: null };
    return rebalance(target);
  }
  if (cmp(from, target.to) > 0) {
    right ? addRange(right, from, to2) : target.r = { from, to: to2, d: 1, l: null, r: null };
    return rebalance(target);
  }
  if (cmp(from, target.from) < 0) {
    target.from = from;
    target.l = null;
    target.d = right ? right.d + 1 : 1;
  }
  if (cmp(to2, target.to) > 0) {
    target.to = to2;
    target.r = null;
    target.d = target.l ? target.l.d + 1 : 1;
  }
  var rightWasCutOff = !target.r;
  if (left && !target.l) {
    mergeRanges(target, left);
  }
  if (right && rightWasCutOff) {
    mergeRanges(target, right);
  }
}
function mergeRanges(target, newSet) {
  function _addRangeSet(target2, _a2) {
    var from = _a2.from, to2 = _a2.to, l = _a2.l, r = _a2.r;
    addRange(target2, from, to2);
    if (l)
      _addRangeSet(target2, l);
    if (r)
      _addRangeSet(target2, r);
  }
  if (!isEmptyRange(newSet))
    _addRangeSet(target, newSet);
}
function rangesOverlap(rangeSet1, rangeSet2) {
  var i1 = getRangeSetIterator(rangeSet2);
  var nextResult1 = i1.next();
  if (nextResult1.done)
    return false;
  var a = nextResult1.value;
  var i22 = getRangeSetIterator(rangeSet1);
  var nextResult2 = i22.next(a.from);
  var b = nextResult2.value;
  while (!nextResult1.done && !nextResult2.done) {
    if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0)
      return true;
    cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i22.next(a.from)).value;
  }
  return false;
}
function getRangeSetIterator(node) {
  var state = isEmptyRange(node) ? null : { s: 0, n: node };
  return {
    next: function(key) {
      var keyProvided = arguments.length > 0;
      while (state) {
        switch (state.s) {
          case 0:
            state.s = 1;
            if (keyProvided) {
              while (state.n.l && cmp(key, state.n.from) < 0)
                state = { up: state, n: state.n.l, s: 1 };
            } else {
              while (state.n.l)
                state = { up: state, n: state.n.l, s: 1 };
            }
          case 1:
            state.s = 2;
            if (!keyProvided || cmp(key, state.n.to) <= 0)
              return { value: state.n, done: false };
          case 2:
            if (state.n.r) {
              state.s = 3;
              state = { up: state, n: state.n.r, s: 0 };
              continue;
            }
          case 3:
            state = state.up;
        }
      }
      return { done: true };
    }
  };
}
function rebalance(target) {
  var _a2, _b;
  var diff = (((_a2 = target.r) === null || _a2 === void 0 ? void 0 : _a2.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
  var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
  if (r) {
    var l = r === "r" ? "l" : "r";
    var rootClone = __assign({}, target);
    var oldRootRight = target[r];
    target.from = oldRootRight.from;
    target.to = oldRootRight.to;
    target[r] = oldRootRight[r];
    rootClone[r] = oldRootRight[l];
    target[l] = rootClone;
    rootClone.d = computeDepth(rootClone);
  }
  target.d = computeDepth(target);
}
function computeDepth(_a2) {
  var r = _a2.r, l = _a2.l;
  return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
var observabilityMiddleware = {
  stack: "dbcore",
  level: 0,
  create: function(core) {
    var dbName = core.schema.name;
    var FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
    return __assign(__assign({}, core), { table: function(tableName) {
      var table = core.table(tableName);
      var schema = table.schema;
      var primaryKey = schema.primaryKey;
      var extractKey = primaryKey.extractKey, outbound = primaryKey.outbound;
      var tableClone = __assign(__assign({}, table), { mutate: function(req) {
        var trans = req.trans;
        var mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
        var getRangeSet = function(indexName) {
          var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
          return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
        };
        var pkRangeSet = getRangeSet("");
        var delsRangeSet = getRangeSet(":dels");
        var type2 = req.type;
        var _a2 = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [], keys2 = _a2[0], newObjs = _a2[1];
        var oldCache = req.trans["_cache"];
        return table.mutate(req).then(function(res) {
          if (isArray(keys2)) {
            if (type2 !== "delete")
              keys2 = res.results;
            pkRangeSet.addKeys(keys2);
            var oldObjs = getFromTransactionCache(keys2, oldCache);
            if (!oldObjs && type2 !== "add") {
              delsRangeSet.addKeys(keys2);
            }
            if (oldObjs || newObjs) {
              trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
            }
          } else if (keys2) {
            var range = { from: keys2.lower, to: keys2.upper };
            delsRangeSet.add(range);
            pkRangeSet.add(range);
          } else {
            pkRangeSet.add(FULL_RANGE);
            delsRangeSet.add(FULL_RANGE);
            schema.indexes.forEach(function(idx) {
              return getRangeSet(idx.name).add(FULL_RANGE);
            });
          }
          return res;
        });
      } });
      var getRange = function(_a2) {
        var _b, _c;
        var _d = _a2.query, index = _d.index, range = _d.range;
        return [
          index,
          new RangeSet((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)
        ];
      };
      var readSubscribers = {
        get: function(req) {
          return [primaryKey, new RangeSet(req.key)];
        },
        getMany: function(req) {
          return [primaryKey, new RangeSet().addKeys(req.keys)];
        },
        count: getRange,
        query: getRange,
        openCursor: getRange
      };
      keys(readSubscribers).forEach(function(method) {
        tableClone[method] = function(req) {
          var subscr = PSD.subscr;
          if (subscr) {
            var getRangeSet = function(indexName) {
              var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
              return subscr[part] || (subscr[part] = new RangeSet());
            };
            var pkRangeSet_1 = getRangeSet("");
            var delsRangeSet_1 = getRangeSet(":dels");
            var _a2 = readSubscribers[method](req), queriedIndex = _a2[0], queriedRanges = _a2[1];
            getRangeSet(queriedIndex.name || "").add(queriedRanges);
            if (!queriedIndex.isPrimaryKey) {
              if (method === "count") {
                delsRangeSet_1.add(FULL_RANGE);
              } else {
                var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), { values: false }));
                return table[method].apply(this, arguments).then(function(res) {
                  if (method === "query") {
                    if (outbound && req.values) {
                      return keysPromise_1.then(function(_a3) {
                        var resultingKeys = _a3.result;
                        pkRangeSet_1.addKeys(resultingKeys);
                        return res;
                      });
                    }
                    var pKeys = req.values ? res.result.map(extractKey) : res.result;
                    if (req.values) {
                      pkRangeSet_1.addKeys(pKeys);
                    } else {
                      delsRangeSet_1.addKeys(pKeys);
                    }
                  } else if (method === "openCursor") {
                    var cursor_1 = res;
                    var wantValues_1 = req.values;
                    return cursor_1 && Object.create(cursor_1, {
                      key: {
                        get: function() {
                          delsRangeSet_1.addKey(cursor_1.primaryKey);
                          return cursor_1.key;
                        }
                      },
                      primaryKey: {
                        get: function() {
                          var pkey = cursor_1.primaryKey;
                          delsRangeSet_1.addKey(pkey);
                          return pkey;
                        }
                      },
                      value: {
                        get: function() {
                          wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                          return cursor_1.value;
                        }
                      }
                    });
                  }
                  return res;
                });
              }
            }
          }
          return table[method].apply(this, arguments);
        };
      });
      return tableClone;
    } });
  }
};
function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
  function addAffectedIndex(ix) {
    var rangeSet = getRangeSet(ix.name || "");
    function extractKey(obj) {
      return obj != null ? ix.extractKey(obj) : null;
    }
    var addKeyOrKeys = function(key) {
      return ix.multiEntry && isArray(key) ? key.forEach(function(key2) {
        return rangeSet.addKey(key2);
      }) : rangeSet.addKey(key);
    };
    (oldObjs || newObjs).forEach(function(_, i15) {
      var oldKey = oldObjs && extractKey(oldObjs[i15]);
      var newKey = newObjs && extractKey(newObjs[i15]);
      if (cmp(oldKey, newKey) !== 0) {
        if (oldKey != null)
          addKeyOrKeys(oldKey);
        if (newKey != null)
          addKeyOrKeys(newKey);
      }
    });
  }
  schema.indexes.forEach(addAffectedIndex);
}
var Dexie$1 = function() {
  function Dexie2(name, options) {
    var _this = this;
    this._middlewares = {};
    this.verno = 0;
    var deps = Dexie2.dependencies;
    this._options = options = __assign({
      addons: Dexie2.addons,
      autoOpen: true,
      indexedDB: deps.indexedDB,
      IDBKeyRange: deps.IDBKeyRange
    }, options);
    this._deps = {
      indexedDB: options.indexedDB,
      IDBKeyRange: options.IDBKeyRange
    };
    var addons = options.addons;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    var state = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: nop,
      dbReadyPromise: null,
      cancelOpen: nop,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    state.dbReadyPromise = new DexiePromise(function(resolve) {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise(function(_, reject) {
      state.cancelOpen = reject;
    });
    this._state = state;
    this.name = name;
    this.on = Events(this, "populate", "blocked", "versionchange", "close", { ready: [promisableChain, nop] });
    this.on.ready.subscribe = override(this.on.ready.subscribe, function(subscribe) {
      return function(subscriber, bSticky) {
        Dexie2.vip(function() {
          var state2 = _this._state;
          if (state2.openComplete) {
            if (!state2.dbOpenError)
              DexiePromise.resolve().then(subscriber);
            if (bSticky)
              subscribe(subscriber);
          } else if (state2.onReadyBeingFired) {
            state2.onReadyBeingFired.push(subscriber);
            if (bSticky)
              subscribe(subscriber);
          } else {
            subscribe(subscriber);
            var db_1 = _this;
            if (!bSticky)
              subscribe(function unsubscribe() {
                db_1.on.ready.unsubscribe(subscriber);
                db_1.on.ready.unsubscribe(unsubscribe);
              });
          }
        });
      };
    });
    this.Collection = createCollectionConstructor(this);
    this.Table = createTableConstructor(this);
    this.Transaction = createTransactionConstructor(this);
    this.Version = createVersionConstructor(this);
    this.WhereClause = createWhereClauseConstructor(this);
    this.on("versionchange", function(ev) {
      if (ev.newVersion > 0)
        console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");
      else
        console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");
      _this.close();
    });
    this.on("blocked", function(ev) {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion)
        console.warn("Dexie.delete('" + _this.name + "') was blocked");
      else
        console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
    });
    this._maxKey = getMaxKey(options.IDBKeyRange);
    this._createTransaction = function(mode, storeNames, dbschema, parentTransaction) {
      return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
    };
    this._fireOnBlocked = function(ev) {
      _this.on("blocked").fire(ev);
      connections.filter(function(c) {
        return c.name === _this.name && c !== _this && !c._state.vcFired;
      }).map(function(c) {
        return c.on("versionchange").fire(ev);
      });
    };
    this.use(virtualIndexMiddleware);
    this.use(hooksMiddleware);
    this.use(observabilityMiddleware);
    this.use(cacheExistingValuesMiddleware);
    this.vip = Object.create(this, { _vip: { value: true } });
    addons.forEach(function(addon) {
      return addon(_this);
    });
  }
  Dexie2.prototype.version = function(versionNumber) {
    if (isNaN(versionNumber) || versionNumber < 0.1)
      throw new exceptions.Type("Given version is not a positive number");
    versionNumber = Math.round(versionNumber * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened)
      throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    var versions = this._versions;
    var versionInstance = versions.filter(function(v) {
      return v._cfg.version === versionNumber;
    })[0];
    if (versionInstance)
      return versionInstance;
    versionInstance = new this.Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);
    versionInstance.stores({});
    this._state.autoSchema = false;
    return versionInstance;
  };
  Dexie2.prototype._whenReady = function(fn2) {
    var _this = this;
    return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn2() : new DexiePromise(function(resolve, reject) {
      if (_this._state.openComplete) {
        return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
      }
      if (!_this._state.isBeingOpened) {
        if (!_this._options.autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }
        _this.open().catch(nop);
      }
      _this._state.dbReadyPromise.then(resolve, reject);
    }).then(fn2);
  };
  Dexie2.prototype.use = function(_a2) {
    var stack = _a2.stack, create = _a2.create, level = _a2.level, name = _a2.name;
    if (name)
      this.unuse({ stack, name });
    var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
    middlewares.push({ stack, create, level: level == null ? 10 : level, name });
    middlewares.sort(function(a, b) {
      return a.level - b.level;
    });
    return this;
  };
  Dexie2.prototype.unuse = function(_a2) {
    var stack = _a2.stack, name = _a2.name, create = _a2.create;
    if (stack && this._middlewares[stack]) {
      this._middlewares[stack] = this._middlewares[stack].filter(function(mw) {
        return create ? mw.create !== create : name ? mw.name !== name : false;
      });
    }
    return this;
  };
  Dexie2.prototype.open = function() {
    return dexieOpen(this);
  };
  Dexie2.prototype._close = function() {
    var state = this._state;
    var idx = connections.indexOf(this);
    if (idx >= 0)
      connections.splice(idx, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (e) {
      }
      this._novip.idbdb = null;
    }
    state.dbReadyPromise = new DexiePromise(function(resolve) {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise(function(_, reject) {
      state.cancelOpen = reject;
    });
  };
  Dexie2.prototype.close = function() {
    this._close();
    var state = this._state;
    this._options.autoOpen = false;
    state.dbOpenError = new exceptions.DatabaseClosed();
    if (state.isBeingOpened)
      state.cancelOpen(state.dbOpenError);
  };
  Dexie2.prototype.delete = function() {
    var _this = this;
    var hasArguments = arguments.length > 0;
    var state = this._state;
    return new DexiePromise(function(resolve, reject) {
      var doDelete = function() {
        _this.close();
        var req = _this._deps.indexedDB.deleteDatabase(_this.name);
        req.onsuccess = wrap(function() {
          _onDatabaseDeleted(_this._deps, _this.name);
          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = _this._fireOnBlocked;
      };
      if (hasArguments)
        throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
      if (state.isBeingOpened) {
        state.dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }
    });
  };
  Dexie2.prototype.backendDB = function() {
    return this.idbdb;
  };
  Dexie2.prototype.isOpen = function() {
    return this.idbdb !== null;
  };
  Dexie2.prototype.hasBeenClosed = function() {
    var dbOpenError = this._state.dbOpenError;
    return dbOpenError && dbOpenError.name === "DatabaseClosed";
  };
  Dexie2.prototype.hasFailed = function() {
    return this._state.dbOpenError !== null;
  };
  Dexie2.prototype.dynamicallyOpened = function() {
    return this._state.autoSchema;
  };
  Object.defineProperty(Dexie2.prototype, "tables", {
    get: function() {
      var _this = this;
      return keys(this._allTables).map(function(name) {
        return _this._allTables[name];
      });
    },
    enumerable: false,
    configurable: true
  });
  Dexie2.prototype.transaction = function() {
    var args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  };
  Dexie2.prototype._transaction = function(mode, tables, scopeFunc) {
    var _this = this;
    var parentTransaction = PSD.trans;
    if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1)
      parentTransaction = null;
    var onlyIfCompatible = mode.indexOf("?") !== -1;
    mode = mode.replace("!", "").replace("?", "");
    var idbMode, storeNames;
    try {
      storeNames = tables.map(function(table) {
        var storeName = table instanceof _this.Table ? table.name : table;
        if (typeof storeName !== "string")
          throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      });
      if (mode == "r" || mode === READONLY)
        idbMode = READONLY;
      else if (mode == "rw" || mode == READWRITE)
        idbMode = READWRITE;
      else
        throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
      if (parentTransaction) {
        if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
          if (onlyIfCompatible) {
            parentTransaction = null;
          } else
            throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }
        if (parentTransaction) {
          storeNames.forEach(function(storeName) {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else
                throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }
        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, function(_, reject) {
        reject(e);
      }) : rejection(e);
    }
    var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
    return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function() {
      return _this._whenReady(enterTransaction);
    }) : this._whenReady(enterTransaction);
  };
  Dexie2.prototype.table = function(tableName) {
    if (!hasOwn(this._allTables, tableName)) {
      throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
    }
    return this._allTables[tableName];
  };
  return Dexie2;
}();
var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
var Observable = function() {
  function Observable2(subscribe) {
    this._subscribe = subscribe;
  }
  Observable2.prototype.subscribe = function(x, error, complete) {
    return this._subscribe(!x || typeof x === "function" ? { next: x, error, complete } : x);
  };
  Observable2.prototype[symbolObservable] = function() {
    return this;
  };
  return Observable2;
}();
function extendObservabilitySet(target, newSet) {
  keys(newSet).forEach(function(part) {
    var rangeSet = target[part] || (target[part] = new RangeSet());
    mergeRanges(rangeSet, newSet[part]);
  });
  return target;
}
function liveQuery(querier) {
  return new Observable(function(observer) {
    var scopeFuncIsAsync = isAsyncFunction(querier);
    function execute(subscr) {
      if (scopeFuncIsAsync) {
        incrementExpectedAwaits();
      }
      var exec = function() {
        return newScope(querier, { subscr, trans: null });
      };
      var rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
      if (scopeFuncIsAsync) {
        rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
      }
      return rv;
    }
    var closed = false;
    var accumMuts = {};
    var currentObs = {};
    var subscription = {
      get closed() {
        return closed;
      },
      unsubscribe: function() {
        closed = true;
        globalEvents.storagemutated.unsubscribe(mutationListener);
      }
    };
    observer.start && observer.start(subscription);
    var querying = false, startedListening = false;
    function shouldNotify() {
      return keys(currentObs).some(function(key) {
        return accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]);
      });
    }
    var mutationListener = function(parts) {
      extendObservabilitySet(accumMuts, parts);
      if (shouldNotify()) {
        doQuery();
      }
    };
    var doQuery = function() {
      if (querying || closed)
        return;
      accumMuts = {};
      var subscr = {};
      var ret = execute(subscr);
      if (!startedListening) {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
        startedListening = true;
      }
      querying = true;
      Promise.resolve(ret).then(function(result) {
        querying = false;
        if (closed)
          return;
        if (shouldNotify()) {
          doQuery();
        } else {
          accumMuts = {};
          currentObs = subscr;
          observer.next && observer.next(result);
        }
      }, function(err) {
        querying = false;
        observer.error && observer.error(err);
        subscription.unsubscribe();
      });
    };
    doQuery();
    return subscription;
  });
}
var domDeps;
try {
  domDeps = {
    indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
    IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
  };
} catch (e) {
  domDeps = { indexedDB: null, IDBKeyRange: null };
}
var Dexie = Dexie$1;
props(Dexie, __assign(__assign({}, fullNameExceptions), {
  delete: function(databaseName) {
    var db = new Dexie(databaseName, { addons: [] });
    return db.delete();
  },
  exists: function(name) {
    return new Dexie(name, { addons: [] }).open().then(function(db) {
      db.close();
      return true;
    }).catch("NoSuchDatabaseError", function() {
      return false;
    });
  },
  getDatabaseNames: function(cb) {
    try {
      return getDatabaseNames(Dexie.dependencies).then(cb);
    } catch (_a2) {
      return rejection(new exceptions.MissingAPI());
    }
  },
  defineClass: function() {
    function Class(content) {
      extend(this, content);
    }
    return Class;
  },
  ignoreTransaction: function(scopeFunc) {
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
  },
  vip,
  async: function(generatorFn) {
    return function() {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== "function")
          return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function(generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== "function")
        return DexiePromise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  currentTransaction: {
    get: function() {
      return PSD.trans || null;
    }
  },
  waitFor: function(promiseOrFunction, optionalTimeout) {
    var promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  Promise: DexiePromise,
  debug: {
    get: function() {
      return debug;
    },
    set: function(value) {
      setDebug(value, value === "dexie" ? function() {
        return true;
      } : dexieStackFrameFilter);
    }
  },
  derive,
  extend,
  props,
  override,
  Events,
  on: globalEvents,
  liveQuery,
  extendObservabilitySet,
  getByKeyPath,
  setByKeyPath,
  delByKeyPath,
  shallowClone,
  deepClone,
  getObjectDiff,
  cmp,
  asap: asap$1,
  minKey,
  addons: [],
  connections,
  errnames,
  dependencies: domDeps,
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split(".").map(function(n) {
    return parseInt(n);
  }).reduce(function(p, c, i15) {
    return p + c / Math.pow(10, i15 * 2);
  })
}));
Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(updatedParts) {
    if (!propagatingLocally) {
      var event_1;
      if (isIEOrEdge) {
        event_1 = document.createEvent("CustomEvent");
        event_1.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
      } else {
        event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
          detail: updatedParts
        });
      }
      propagatingLocally = true;
      dispatchEvent(event_1);
      propagatingLocally = false;
    }
  });
  addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function(_a2) {
    var detail = _a2.detail;
    if (!propagatingLocally) {
      propagateLocally(detail);
    }
  });
}
function propagateLocally(updateParts) {
  var wasMe = propagatingLocally;
  try {
    propagatingLocally = true;
    globalEvents.storagemutated.fire(updateParts);
  } finally {
    propagatingLocally = wasMe;
  }
}
var propagatingLocally = false;
if (typeof BroadcastChannel !== "undefined") {
  var bc_1 = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
    if (!propagatingLocally) {
      bc_1.postMessage(changedParts);
    }
  });
  bc_1.onmessage = function(ev) {
    if (ev.data)
      propagateLocally(ev.data);
  };
} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
    try {
      if (!propagatingLocally) {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
            trig: Math.random(),
            changedParts
          }));
        }
        if (typeof self["clients"] === "object") {
          __spreadArray([], self["clients"].matchAll({ includeUncontrolled: true }), true).forEach(function(client) {
            return client.postMessage({
              type: STORAGE_MUTATED_DOM_EVENT_NAME,
              changedParts
            });
          });
        }
      }
    } catch (_a2) {
    }
  });
  if (typeof addEventListener !== "undefined") {
    addEventListener("storage", function(ev) {
      if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
        var data = JSON.parse(ev.newValue);
        if (data)
          propagateLocally(data.changedParts);
      }
    });
  }
  var swContainer = self.document && navigator.serviceWorker;
  if (swContainer) {
    swContainer.addEventListener("message", propagateMessageLocally);
  }
}
function propagateMessageLocally(_a2) {
  var data = _a2.data;
  if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
    propagateLocally(data.changedParts);
  }
}
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);
var ItemType = /* @__PURE__ */ ((ItemType2) => {
  ItemType2["Code"] = "code";
  ItemType2["Data"] = "data";
  ItemType2["Media"] = "media";
  return ItemType2;
})(ItemType || {});
class Cache extends Dexie$1 {
  constructor(integration, name, maxItems, version = 1) {
    super(name);
    this.integration = integration;
    this.maxItems = maxItems;
    this.caching = {};
    this.totalSize = 0;
    this.version(version).stores({
      items: "url, timestamp, type"
    });
  }
  async init() {
    return this.integration.init();
  }
  async list(type2, offset = 0, limit = 10) {
    const items = await this.items.where("type").equals(type2).offset(offset).limit(limit).toArray();
    return items;
  }
  async get(url) {
    if (!this.caching[url]) {
      const item = await this.items.get({ url });
      if (item) {
        item.accessed += 1;
        await this.items.update(item.url, {
          timestamp: Date.now(),
          accessed: item.accessed
        });
      }
      return item;
    }
  }
  async set(url, type2, mimeType, { force } = { force: false }) {
    if (!!this.caching[url]) {
      return;
    }
    if (!force) {
      const item = await this.items.get({ url });
      if (item) {
        return;
      }
    }
    if (this.maxItems) {
      const count = await this.items.count();
      if (count >= this.maxItems) {
        const items = await this.items.orderBy("timestamp").limit(count - this.maxItems + 1).toArray();
        for (const item of items) {
          await this.items.delete(item.url);
        }
      }
    }
    this.caching[url] = this.storeFile(url, type2, mimeType);
  }
  async storeFile(url, type2, mimeType) {
    try {
      const { result, item } = await this.integration.storeFile(url);
      switch (result.code) {
        case StoreResult.Success:
          if (item) {
            const { url: cachedUrl, size } = item;
            if (!cachedUrl) {
              throw new Error("Cached url is null");
            }
            this.totalSize += size;
            delete this.caching[url];
            return this.items.add({
              timestamp: Date.now(),
              size,
              accessed: 0,
              type: type2,
              url,
              cachedUrl,
              mimeType
            });
          }
          throw new Error("Cache: Storage is missing item despite signaling success");
        case StoreResult.Failure:
          switch (result.error) {
            case StoreError.NotEnoughSpace:
              if (result.errMsg) {
                const requiredSpace = parseInt(result.errMsg);
                await this.freeSpace(requiredSpace);
                return this.storeFile(url, type2, mimeType);
              } else {
                throw new Error("Not enough space, and no error message");
              }
            default:
              throw new Error(`Unhandled error ${result.error} ${result.errMsg}`);
          }
        default:
          throw new Error(`Unhandled result code ${result.code}`);
      }
    } catch (err) {
      console.error("Error caching file", url, err);
      throw err;
    }
  }
  async freeSpace(size) {
    const count = await this.items.count();
    if (size <= 0) {
      return;
    }
    const totalSize = await this.getTotalSize();
    if (totalSize < size) {
      throw new Error("Not enough space to free");
    }
    const chunkSize = 10;
    let freedSpace = 0;
    const numChunks = Math.ceil(count / chunkSize);
    for (let chunk = 0; chunk < numChunks; chunk++) {
      const items = await this.items.orderBy("timestamp").offset(chunk * chunkSize).limit(chunkSize).toArray();
      for (const item of items) {
        freedSpace += item.size;
        await this.del(item.url);
        if (freedSpace >= size) {
          return;
        }
      }
    }
    throw new Error("Could not free enough space");
  }
  async getTotalSize() {
    let totalSize = 0;
    const count = await this.items.count();
    const chunkSize = 100;
    const numChunks = Math.ceil(count / chunkSize);
    for (let chunk = 0; chunk < numChunks; chunk++) {
      const items = await this.items.orderBy("timestamp").offset(chunk * chunkSize).limit(chunkSize).toArray();
      for (const item of items) {
        totalSize += item.size;
      }
    }
    return totalSize;
  }
  async del(key) {
    await this.integration.deleteFile(key);
    return this.items.delete(key);
  }
  async clean(mimeType) {
    const items = await this.items.toArray();
    for (const item of items) {
      await this.del(item.url);
    }
  }
}
let resourceManager;
class ResourceManager {
  constructor(cache, opts = {}) {
    this.cache = cache;
    this.opts = opts;
  }
  static createResourceManager(cache, opts) {
    resourceManager = resourceManager || new ResourceManager(cache, opts);
    return resourceManager;
  }
  async init() {
    const codeResources = await this.cache.list(ItemType.Code);
    let needRefresh = false;
    for (const codeResource of codeResources) {
      const newCode = await this.fetchCode(codeResource.url);
      if (newCode) {
        const oldCode = await this.fetchCode(codeResource.cachedUrl);
        if (oldCode !== newCode) {
          await this.cache.set(codeResource.url, ItemType.Code, "text/javascript");
          needRefresh = true;
        }
      }
    }
    if (needRefresh && this.opts.needsRefresh) {
      await this.opts.needsRefresh();
    }
    await this.cache.init();
  }
  async import(url) {
    let item = await this.cache.get(url);
    if (item) {
      const code = await this.fetchCode(item.cachedUrl);
      const uri = `data:text/javascript,${code};`;
      return import(
        /* @vite-ignore */
        uri
      );
    }
    return this.cache.set(url, ItemType.Code, "text/javascript");
  }
  async getData(url, freshness) {
    const item = await this.cache.get(url);
    if (item && Date.now() - item.timestamp < freshness) {
      return this.fetchJson(item.cachedUrl);
    } else {
      return this.cache.set(url, ItemType.Data, "application/json", {
        force: true
      });
    }
  }
  async getMedia(url) {
    if (url.startsWith("data:")) {
      return url;
    }
    const item = await this.cache.get(url);
    if (!item) {
      return this.cache.set(url, ItemType.Media, "media/*");
    }
    return item.cachedUrl;
  }
  close() {
    this.cache.close();
  }
  async fetchJson(url, options = {}) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  }
  async fetchCode(url, options = {}) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response.text();
      }
    } catch (err) {
      console.error(err);
    }
  }
}
var Logo = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4MDAgNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIHdpZHRoPSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MDkuNDI5IiB4Mj0iNDA5LjQyODkiIHkxPSIyMC43MzczIiB5Mj0iOTIxLjkwNTMiPjxzdG9wIG9mZnNldD0iMCIvPjxzdG9wIG9mZnNldD0iLjUzOTQiIHN0b3AtY29sb3I9IiMxYTFhMWEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMzMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDFiZWU1Ii8+PHN0b3Agb2Zmc2V0PSIuMjg0OCIgc3RvcC1jb2xvcj0iIzA2OThkOCIvPjxzdG9wIG9mZnNldD0iLjY5NyIgc3RvcC1jb2xvcj0iIzAxNmVkMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEyM2ZiNSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQ5NC42NTg0IiB4Mj0iNDk0LjY1ODQiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MjUiIHkyPSI0MDcuMDA3MSIvPjxjbGlwUGF0aCBpZD0iZCI+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIvPjwvY2xpcFBhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMxNy4yMjkyIiB4Mj0iMzE3LjIyOTIiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MTUiIHkyPSI0MDcuMDAzOSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNTUuOTk5OCIgeDI9IjM1NS45OTk4IiB4bGluazpocmVmPSIjYiIgeTE9IjI3Mi41ODE1IiB5Mj0iNDA3LjAwODUiLz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTguMzU5OSA2MjQuMDU0NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzkzLjAxOTMiIHgyPSIzOTMuMDE5MyIgeGxpbms6aHJlZj0iI2IiIHkxPSIyNzIuNTgwNiIgeTI9IjQwNy4wMDk5Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJoIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQyMS43MzY2IiB4Mj0iNDIxLjczNjYiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MDYiIHkyPSI0MDcuMDA5Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJpIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQ2MC43NTQyIiB4Mj0iNDYwLjc1NDIiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MTUiIHkyPSI0MDcuMDA4NSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iaiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OTQuNjU4NCIgeDI9IjQ5NC42NTg0IiB4bGluazpocmVmPSIjYiIgeTE9IjI3Mi41ODE1IiB5Mj0iNDA3LjAwNyIvPjxsaW5lYXJHcmFkaWVudCBpZD0iayIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1MDkuNzM2NiIgeDI9IjUwOS43MzY2IiB4bGluazpocmVmPSIjYiIgeTE9IjI3Mi41ODE1IiB5Mj0iNDA3LjAwMzkiLz48bGluZWFyR3JhZGllbnQgaWQ9ImwiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTguMzU5OSA2MjQuMDU0NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNTI0LjcxNyIgeDI9IjUyNC43MTciIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MTUiIHkyPSI0MDcuMDAzOSIvPjxjbGlwUGF0aCBpZD0ibSI+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIvPjwvY2xpcFBhdGg+PG1hc2sgaWQ9Im4iIGhlaWdodD0iNDMuNzY4IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMjMwLjMwNiIgeD0iMjkwLjQ1MyIgeT0iMzAzLjM2NCI+PGcgY2xpcC1wYXRoPSJ1cmwoI28pIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3Ij48aW1hZ2UgaGVpZ2h0PSI1OCIgb3ZlcmZsb3c9InZpc2libGUiIHRyYW5zZm9ybT0ibWF0cml4KC44NjE1IDAgMCAuODQxMSAyODcuOTk5MyAzMDAuODcwMSkiIHdpZHRoPSIyNzMiIHhsaW5rOmhyZWY9IkJDQjExRUMuanBlZyIvPjwvZz48L21hc2s+PGNsaXBQYXRoIGlkPSJvIiBjbGlwLXBhdGg9InVybCgjbSkiPjxwYXRoIGQ9Im00OTAuNjA3IDMxMC45MzljMCAuNTM1LS40NC45NzYtLjk3OC45NzZoLTYuNjYxYy0uNTM3IDAtLjk3OS0uNDQtLjk3OS0uOTc2di01LjcyNmMwLS41MzcuNDQtLjk3OC45NzktLjk3OGg2LjY2MWMuNTM2IDAgLjk3OC40MzkuOTc4Ljk3OHoiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0icCI+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIvPjwvY2xpcFBhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQ5NC42NTg0IiB4Mj0iNDk0LjY1ODQiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMjcyLjU4MDYiIHkyPSI0MDcuMDA3OCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iciI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDFiZWU1Ii8+PHN0b3Agb2Zmc2V0PSIuMjg0OCIgc3RvcC1jb2xvcj0iIzA2OThkOCIvPjxzdG9wIG9mZnNldD0iLjY5NyIgc3RvcC1jb2xvcj0iIzAxNmVkMiIvPjxzdG9wIG9mZnNldD0iLjkyMTIiIHN0b3AtY29sb3I9IiMxMjNmYjUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MTMuODI0NSIgeDI9IjY0My41OTU2IiB4bGluazpocmVmPSIjciIgeTE9IjI2Mi4xNTYyIiB5Mj0iMzI2LjM3MTgiLz48bGluZWFyR3JhZGllbnQgaWQ9InQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTguMzU5OSA2MjQuMDU0NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDA2LjQwMjYiIHgyPSI2MzcuNzkzOSIgeGxpbms6aHJlZj0iI3IiIHkxPSIyNzkuNDQyOSIgeTI9IjM0NC4xMTEyIi8+PGxpbmVhckdyYWRpZW50IGlkPSJ1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC45NjMyIC0uMjY4OSAtLjI2ODkgLS45NjMyIDExMy40MjggNzAwLjgwMzgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIzMi4wMSIgeDI9IjIzMi4wMSIgeGxpbms6aHJlZj0iI2IiIHkxPSIzMzguMjE3OCIgeTI9IjM4Ny44NzY5Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJ2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC45NjMyIC0uMjY4OSAtLjI2ODkgLS45NjMyIDExMy40MjggNzAwLjgwMzgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIzMS44NzI4IiB4Mj0iMjMxLjg3MjgiIHhsaW5rOmhyZWY9IiNiIiB5MT0iMzE4LjAzMjIiIHkyPSIzNjUuNjM1NSIvPjxsaW5lYXJHcmFkaWVudCBpZD0idyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguOTYzMiAtLjI2ODkgLS4yNjg5IC0uOTYzMiAxMTMuNDI4IDcwMC44MDM4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMTEuMTc5IiB4Mj0iMjExLjE3OSIgeGxpbms6aHJlZj0iI2IiIHkxPSIzMTguNjYyMSIgeTI9IjM2NC45ODQ5Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJ4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC45NjMyIC0uMjY4OSAtLjI2ODkgLS45NjMyIDExMy40MjggNzAwLjgwMzgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIxMS4wNDE3IiB4Mj0iMjExLjA0MTciIHhsaW5rOmhyZWY9IiNiIiB5MT0iMzM4LjU2NTQiIHkyPSIzODYuOTQ4NCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ieSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguOTYzMiAtLjI2ODkgLS4yNjg5IC0uOTYzMiAxMTMuNDI4IDcwMC44MDM4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMjMuNTAxNyIgeDI9IjIxNy4yOTI2IiB4bGluazpocmVmPSIjciIgeTE9IjMwMi45NTYxIiB5Mj0iNDM0Ljg5MzUiLz48bGluZWFyR3JhZGllbnQgaWQ9InoiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTguMzU5OSA2MjQuMDU0NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjgwLjU5MTYiIHgyPSIzMzUuMTY3NyIgeGxpbms6aHJlZj0iI3IiIHkxPSIzNTIuNTY4NCIgeTI9IjM1Mi41Njg0Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJBIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC04LjM1OTkgNjI0LjA1NDcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMyNS44MTMyIiB4Mj0iNDEzLjY3NDEiIHhsaW5rOmhyZWY9IiNyIiB5MT0iMzQyLjIyNjYiIHkyPSIzNDIuMjI2NiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iQiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtOC4zNTk5IDYyNC4wNTQ3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MjAuMTI3MiIgeDI9IjY0OC42MjE4IiB4bGluazpocmVmPSIjciIgeTE9IjI0Ny40NTA3IiB5Mj0iMzExLjMwOTQiLz48cGF0aCBkPSJtMCAwaDgwMi4xMzh2NjAyLjAyN2gtODAyLjEzOHoiIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsPSIjZTZlNmU2Ij48cGF0aCBkPSJtMzI2LjUzMSAzNDguMzRoLTE5LjM4NWMtMS45NjQgMC0zLjkwOS0uMjctNS44MzEtLjgxNC0zLjcyMi0xLjEyNy02LjY3MS0zLjcxNy04Ljg0Ni03Ljc2OC0xLjk2Ni0zLjY3My0yLjk0OS03Ljk1MS0yLjk0OS0xMi44NDIgMC00LjcxOS44NzktOC44OTUgMi42MzUtMTIuNTI1IDEuOTIzLTQuMDExIDQuNjYyLTYuNzQ0IDguMjE5LTguMjA3IDIuNzU4LTEuMTI3IDUuNTgzLTEuNjg4IDguNDY5LTEuNjg4aDE3LjU2MnY4LjQwN2gtMTguMjUzYy0yLjk3IDAtNS4xMjMgMS42MDYtNi40NjEgNC44MjYtMS4wNDQgMi41MS0xLjU2NiA1Ljc5MS0xLjU2NiA5Ljg0OSAwIDMuNDI5LjY2OCA2LjMzNyAyLjAwNyA4LjcxOCAxLjU0NyAyLjgwNSAzLjcyMyA0LjIwNCA2LjUyMSA0LjIwNGgxNy44Nzh6Ii8+PHBhdGggZD0ibTM2My40NzkgMzQ4LjM0aC0yMy40NjFjLTIuNjMzIDAtNC44ODUtLjg4NS02Ljc0NC0yLjY1NnMtMi43OTItNC4wMTMtMi43OTItNi43MjJjMC0yLjgzNi44NDctNS4xNzkgMi41MzUtNy4wMzQgMS42OS0xLjg1MyAzLjgwNi0yLjc4NSA2LjM0OS0yLjc4NWgxNS4xNDN2LTEuNzUyYzAtLjU0NS0uMDk1LTEuMDE2LS4yODEtMS40MTQtLjE4Ni0uMzk2LS40ODktLjg2Ny0uOTA4LTEuNDA4LS41ODQtLjY3LTEuMTg2LTEuMS0xLjgxMy0xLjI5MS0uNjIzLS4xODctMS40OTgtLjI3Ni0yLjYyNy0uMjc2aC0xNi4ydi03LjE1MWgxMy45MjYgMi42OThjMy4wNTIgMCA1LjMyOS4yNjIgNi44MzYuNzgxIDEuNTA2LjUyMyAyLjgwMSAxLjMwNSAzLjg5MSAyLjM0NiAxLjM3OSAxLjM4MSAyLjI5OSAyLjg4NSAyLjc1OCA0LjUxLjQ2NCAxLjYyOC42OTIgMy43MTYuNjkyIDYuMjZ2MTguNTk0aC0uMDAyem0tOC45NzEtNi42NDl2LTYuMzM2aC0xMS4wNDFjLTEuMDQ1IDAtMS45MzYuMjk5LTIuNjY3LjktLjczLjYwMi0xLjA5NiAxLjM5Ni0xLjA5NiAyLjM5MyAwIC44NjkuMzU0IDEuNTk0IDEuMDYzIDIuMTcyLjcxMy41ODIgMS41MjguODcxIDIuNDQ4Ljg3MXoiLz48cGF0aCBkPSJtMzk5Ljk4NCAzMzguNDI2YzAgMi43NjQtLjg4NyA1LjEyNi0yLjY2NCA3LjA5Mi0xLjc4IDEuOTY3LTQuMDI1IDIuOTQ5LTYuNzQ2IDIuOTQ5aC0yMS41MTR2LTUuODk4aDE3LjY0YzEuMjQ5IDAgMi4zMDMtLjMxMiAzLjE1OS0uOTM4Ljg1NC0uNjMgMS4yNzktMS41MjkgMS4yNzktMi42OTkgMC0yLjcxOS0xLjgzNi00LjA3OC01LjUwMi00LjA3OGgtOS4wMDljLTEuOTIgMC0zLjc3My0uOTE2LTUuNTY2LTIuNzYxLTEuNzkzLTEuODM5LTIuNjk1LTMuODI1LTIuNjk1LTUuOTU2IDAtMy4wMTEuNjcyLTUuNDM4IDIuMDEzLTcuMjc1IDEuNTQ4LTIuMDkyIDMuODI0LTMuMTQxIDYuODM3LTMuMTQxaDIwLjY5N3Y2LjE0OGgtMTguNDRjLS43MDggMC0xLjMyOS4zNDYtMS44NDggMS4wMzUtLjUyNC42OTEtLjc4MiAxLjQ3My0uNzgyIDIuMzU0IDAgLjk2MS4zNDMgMS43ODYgMS4wMzIgMi40NzkuNjg4LjY4OCAxLjUxNiAxLjAzNCAyLjQ3OSAxLjAzNGg5LjcyNGMzLjA0OSAwIDUuNDY0LjkwOCA3LjI0NCAyLjcyOCAxLjc3NiAxLjgxOSAyLjY2MiA0LjEyOSAyLjY2MiA2LjkyN3oiLz48cGF0aCBkPSJtNDI0LjMyMSAzMjIuNjIxaC04LjQ2NHYxNC43NDNjMCAxLjMzOC40NTUgMi40NDYgMS4zNzcgMy4zMjMgMS4wNDUuODc3IDIuNDI0IDEuMzE2IDQuMTQxIDEuMzE2aDIuNTczdjYuMzM1aC04LjA5MWMtMi40MjkgMC00LjQ5OS0uODgxLTYuMjEzLTIuNjM1LTEuMDAzLTEuMDQ2LTEuNjUtMi4xOTMtMS45NDUtMy40NS0uMjktMS4yNTUtLjQzOC0yLjczNi0uNDM4LTQuNDUzdi0xNS4xOGgtNS41MjF2LTYuNzcyaDUuNTIxdi0xMS4zNTRoOC41OTZ2MTEuMzU0aDguNDY0eiIvPjxwYXRoIGQ9Im00NzUuNTczIDM0OC4zNGgtOC40NzJ2LTIwLjMzNmMwLS43OTEtLjA4MS0xLjQxNS0uMjUtMS44NzQtLjE2OC0uNDYtLjUwMS0uOTUtMS4wMDUtMS40NzYtLjQ5OC0uNTIxLTEuMDAyLS44OTUtMS41MDYtMS4xMjUtLjQ5OS0uMjI1LTEuMDgzLS4zNDItMS43NTQtLjM0MmgtNi4yMDl2MjUuMTUxaC04LjU5NnYtMjUuMzM4aC0xMC4wMzl2MjUuMzRoLTguODQ1di0zMi40OTJoMzQuODE3YzIuMTc0IDAgMy44ODguMTk4IDUuMTQ0LjU5OCAxLjI1NC4zOTUgMi40ODYgMS4yMzggMy42OTkgMi41MzEuOTYzIDEuMDQ1IDEuNzAxIDIuMDY2IDIuMjI5IDMuMDY3LjUyIDEuMDA0Ljc4NCAyLjA4OC43ODQgMy4yNTR2MjMuMDQyeiIvPjxwYXRoIGQ9Im00ODEuOTcgMzE1LjgwM2g4LjY1OXYzMi40OTFoLTguNjU5eiIvPjwvZz48cGF0aCBkPSJtNDkwLjYwNyAzMTAuOTM5YzAgLjUzNS0uNDQuOTc2LS45NzguOTc2aC02LjY2MWMtLjUzNyAwLS45NzktLjQ0LS45NzktLjk3NnYtNS43MjZjMC0uNTM3LjQ0LS45NzguOTc5LS45NzhoNi42NjFjLjUzNiAwIC45NzguNDM5Ljk3OC45Nzh6IiBmaWxsPSJ1cmwoI2MpIi8+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIgZmlsbD0idXJsKCNjKSIvPjxnIGNsaXAtcGF0aD0idXJsKCNkKSI+PHBhdGggZD0ibTMyNy4yODYgMzQ2LjAyOWMwIC41MzctLjQzOC45NzYtLjk3Ni45NzZoLTE3LjMzOWMtLjUzNyAwLTEuNDE1LS4wMy0xLjk1MS0uMDY5IDAgMC0yLjkxNi0uMTk5LTQuODMtLjc0Mi0zLjcwNi0xLjEyMS02LjYzOC0zLjY5OS04LjgwNS03LjcyOC0xLjk1Ny0zLjY1Ny0yLjkzMy03LjkxOS0yLjkzMy0xMi43ODIgMC00LjY5NS44NzQtOC44NTIgMi42MjEtMTIuNDcgMS45MTMtMy45ODUgNC42MzktNi43MSA4LjE3OS04LjE2NyAyLjc0Ni0xLjEyMiA1LjU1Ni0xLjY4MiA4LjQyNy0xLjY4MmgxNi41MDRjLjUzNyAwIC45NzYuNDM4Ljk3Ni45NzZ2Ni40MTZjMCAuNTM1LS40MzguOTc2LS45NzYuOTc2aC0xNi4yMTNjLS41MzYgMC0xLjM5Ni4xMzEtMS45MDcuMjkzIDAgMC00LjE2NyAxLjMwNi01LjUwMSA0LjUxNS0xLjAzOSAyLjQ5Ni0xLjU2MSA1Ljc2My0xLjU2MSA5LjgwMSAwIDMuNDE0LjY2NiA2LjMxIDEuOTk4IDguNjc3IDEuNTQgMi43OTEgMy43MDUgNC4xODIgNi40OTIgNC4xODJoMTYuODE3Yy41MzcgMCAuOTc2LjQzOS45NzYuOTc4eiIgZmlsbD0idXJsKCNlKSIvPjxwYXRoIGQ9Im0zNjQuMDYxIDM0Ni4wMjljMCAuNTM3LS40MzkuOTc2LS45NzcuOTc2aC0yMS4zOThjLS41MzcgMC0xLjQwOC0uMDc4LTEuOTM4LS4xNzMgMCAwLTMuODk5LS43MDgtNS43NS0yLjQ3MS0xLjg1Mi0xLjc2NC0yLjc3OC0zLjk5Mi0yLjc3OC02LjY4OSAwLTIuODIyLjg0MS01LjE1NiAyLjUyMS03LjAwMyAxLjY4My0xLjg0NiAzLjc4OS0yLjc2OSA2LjMxNy0yLjc2OWgxNC4wOTZjLjUzNyAwIC45NzctLjM5NC45NzctLjg3MyAwLS40OC0uMDQtMS4zMTMtLjA5My0xLjg0NiAwIDAtLjAwMS0uMDM1LS4xODctLjQzNS0uMTg3LS4zOTYtLjQ4OC0uODY1LS45MDctMS40MDUtLjU3OS0uNjY2LTEuMTgtMS4wOTEtMS44MDQtMS4yODEtLjYyMS0uMTg3LTEuNDkyLS4yNzgtMi42MTQtLjI3OGgtMTUuMTQ2Yy0uNTM3IDAtLjk3OC0uNDM4LS45NzgtLjk3NnYtNS4xNjhjMC0uNTM3LjQ0LS45NzguOTc4LS45NzhoMTEuOTA2IDEuOTUzLjczMmMuNTM1IDAgMS40MTQuMDIyIDEuOTUxLjA1IDAgMCA0LjMyOC4yMTggNS44MjYuNzI5IDEuNS41MjMgMi43ODggMS4zMDMgMy44NzIgMi4zNCAxLjM3MyAxLjM3MSAyLjI5IDIuODY5IDIuNzQ3IDQuNDkyLjQ1OSAxLjYxNy42ODggMy42OS42ODggNi4yMjZ2MTcuNTMyem0tOS45MDUtNS42NDNjLjUzNyAwIC45NzctLjQ0Ljk3Ny0uOTc4di00LjM1YzAtLjUzNy0uNDM4LS45NzctLjk3Ny0uOTc3aC05LjAzOGMtLjUzNiAwLTEuNDEuMDY0LTEuOTM5LjE0OCAwIDAtLjk2LjE0Ni0xLjY4OS43NDgtLjcyNy41OTktMS4wOSAxLjM4OS0xLjA5IDIuMzc5IDAgLjg2NS4zNTMgMS41ODggMS4wNTkgMi4xNjQuNzA5LjU3OCAxLjUyMS44NjIgMi40MzcuODYyaDEwLjI2MnYuMDA0eiIgZmlsbD0idXJsKCNmKSIvPjxwYXRoIGQ9Im00MDAuMzk1IDMzNy4xNDFjMCAyLjc0OC0uODg0IDUuMDk2LTIuNjU1IDcuMDU5LTEuNzcgMS45NTMtNC4wMDYgMi45MzMtNi43MTMgMi45MzNoLTIwLjQzNGMtLjUzOCAwLS45NzktLjQ0LS45NzktLjk3N3YtMy45MTljMC0uNTM2LjQzOS0uOTc1Ljk3OS0uOTc1aDE1LjYwMmMuNTM2IDAgMS40MTItLjA2MiAxLjk0NS0uMTM0IDAgMCAxLjMyNC0uMTggMi4xNzUtLjgwMS44NTEtLjYyNiAxLjI3Ni0xLjUyMSAxLjI3Ni0yLjY4NyAwLTIuNzA1LTEuODMtNC4wNTgtNS40NzktNC4wNThoLTcuOTljLS41MzYgMC0xLjQwMi0uMTA0LTEuOTI1LS4yMzEgMCAwLTIuODA3LS42ODgtNC41OTItMi41MTktMS43ODUtMS44MzItMi42ODEtMy44MDgtMi42ODEtNS45MzMgMC0yLjk5Ni42NjctNS40MDcgMS45OTgtNy4yMzggMS41NDItMi4wODIgMy44MDgtMy4xMjYgNi44MDctMy4xMjZoMTkuNjI0Yy41MzYgMCAuOTc3LjQ0Mi45NzcuOTc4djQuMTY4YzAgLjUzNy0uNDM5Ljk3Ni0uOTc3Ljk3NmgtMTYuNDAxYy0uNTM2IDAtMS4zOTkuMTEtMS45MjIuMjQzIDAgMC0uMzc4LjEwMS0uODkyLjc4Ny0uNTIzLjY4OC0uNzggMS40Ny0uNzggMi4zNDYgMCAuOTUzLjM0MSAxLjc3MSAxLjAyOCAyLjQ2NC42ODYuNjg3IDEuNTA2IDEuMDMgMi40NjYgMS4wM2g4LjcwMWMuNTM2IDAgMS40MDguMDcyIDEuOTM4LjE2IDAgMCA0LjQ3Ny43NDIgNi4yNDUgMi41NTEgMS43NzUgMS44MTcgMi42NTkgNC4xMTYgMi42NTkgNi45MDN6IiBmaWxsPSJ1cmwoI2cpIi8+PHBhdGggZD0ibTQyNC42MTQgMzIwLjQzMmMwIC41MzUtLjQzOC45NzctLjk3Ny45NzdoLTYuNDc2Yy0uNTM2IDAtLjk3Ni40MzktLjk3Ni45NzZ2MTIuNzI0YzAgLjUzNS4wODEgMS40MDguMTggMS45MzUgMCAwIC4yNzcgMS40NzQgMS4xOTQgMi4zNDcgMS4wMzkuODc1IDIuNDExIDEuMzEyIDQuMTIxIDEuMzEyaDEuNTgzYy41MzUgMCAuOTc2LjQ0Ljk3Ni45Nzh2NC4zNTRjMCAuNTM2LS40MzkuOTc2LS45NzYuOTc2aC02LjEwNGMtLjUzNyAwLTEuNDA2LS4wODQtMS45MzQtLjE4OCAwIDAtMy41MTctLjY4OC01LjIyMS0yLjQzOC0uOTk5LTEuMDQxLTEuNjQ2LTIuMTg1LTEuOTM4LTMuNDMzLS4yOS0xLjI0Ny0uNDM1LTIuNzI2LS40MzUtNC40MzV2LTE0LjEzMmMwLS41MzQtLjQ0LS45NzYtLjk3OS0uOTc2aC0zLjU0MmMtLjUzNyAwLS45NzUtLjQ0LS45NzUtLjk3N3YtNC43OTNjMC0uNTM1LjQzOC0uOTc3Ljk3NS0uOTc3aDMuNTQyYy41MzcgMCAuOTc5LS40MzguOTc5LS45Nzd2LTkuMzQ2YzAtLjUzOC40MzgtLjk3Ni45NzUtLjk3Nmg2LjYwMmMuNTM2IDAgLjk3Ny40MzguOTc3Ljk3NnY5LjM0NmMwIC41MzcuNDM4Ljk3Ny45NzYuOTc3aDYuNDc2Yy41MzcgMCAuOTc3LjQzOS45NzcuOTc3eiIgZmlsbD0idXJsKCNoKSIvPjxwYXRoIGQ9Im00NzUuNjIyIDM0Ni4wMjljMCAuNTM3LS40MzguOTc2LS45NzYuOTc2aC02LjQ3N2MtLjUzOCAwLS45NzctLjQzOC0uOTc3LS45NzZ2LTE4LjI4NmMwLS41MzctLjAyNy0xLjQxNS0uMDU4LTEuOTUxIDAgMC0uMDI3LS40MzctLjE5My0uODk2LS4xNjUtLjQ1Ny0uNDk3LS45NDctMS4wMDEtMS40NjUtLjQ5Ni0uNTIxLS45OTYtLjg5My0xLjUtMS4xMTktLjQ5NC0uMjI5LTEuMDc4LS4zNDQtMS43NDUtLjM0NGgtNS4yMDNjLS41MzcgMC0uOTc2LjQ0LS45NzYuOTc3djIzLjA4NGMwIC41MzctLjQzOS45NzYtLjk3OC45NzZoLTYuNjA0Yy0uNTM0IDAtLjk3NS0uNDM4LS45NzUtLjk3NnYtMjMuMjcxYzAtLjUzNy0uNDM5LS45NzctLjk3OS0uOTc3aC04LjAzNmMtLjUzNyAwLS45NzcuNDM5LS45NzcuOTc3djIzLjI3MWMwIC41MzctLjQ0Ljk3Ni0uOTc5Ljk3NmgtNi44NDljLS41MzcgMC0uOTc5LS40MzgtLjk3OS0uOTc2di0zMC4zOTFjMC0uNTM3LjQ0LS45NzguOTc5LS45NzhoMzIuNjk3Yy41MzYgMCAxLjQxNy4wMjIgMS45NS4wNSAwIDAgMi44OTYuMTUyIDQuMTQ2LjU0IDEuMjUuNDAxIDIuNDc5IDEuMjQzIDMuNjg0IDIuNTI4Ljk1NiAxLjA0MSAxLjY5MiAyLjA1OCAyLjIxNSAzLjA1NC41Mi45OTguNzgyIDIuMDc0Ljc4MiAzLjIzN3YyMS45NTloLjAwOXoiIGZpbGw9InVybCgjaSkiLz48cGF0aCBkPSJtNDkwLjYwNyAzMTAuMDY2YzAgLjUzNS0uNDQuOTc5LS45NzguOTc5aC02LjY2MWMtLjUzNyAwLS45NzktLjQ0MS0uOTc5LS45Nzl2LTUuNzI3YzAtLjUzOC40NC0uOTc2Ljk3OS0uOTc2aDYuNjYxYy41MzYgMCAuOTc4LjQzOC45NzguOTc2em0wIDM1Ljk2M2MwIC41MzctLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40MzgtLjk3OS0uOTc2di0zMC4zOTFjMC0uNTM3LjQ0LS45NzguOTc5LS45NzhoNi42NjFjLjUzNiAwIC45NzguNDQuOTc4Ljk3OHoiIGZpbGw9InVybCgjaikiLz48cGF0aCBkPSJtNTA1Ljc3NyAzNDYuMDI5YzAgLjUzNy0uNDM4Ljk3Ni0uOTc4Ljk3NmgtNi44NDljLS41MzQgMC0uOTc2LS40MzgtLjk3Ni0uOTc2di00MS42ODhjMC0uNTM4LjQzOS0uOTc2Ljk3Ni0uOTc2aDYuODQ5Yy41NCAwIC45NzguNDM4Ljk3OC45NzZ6IiBmaWxsPSJ1cmwoI2spIi8+PHBhdGggZD0ibTUyMC43NTkgMzQ2LjAyOWMwIC41MzctLjQzOS45NzYtLjk3OC45NzZoLTYuODVjLS41MzkgMC0uOTc4LS40MzgtLjk3OC0uOTc2di00MS42ODhjMC0uNTM4LjQzOC0uOTc2Ljk3OC0uOTc2aDYuODVjLjUzNyAwIC45NzguNDM4Ljk3OC45NzZ6IiBmaWxsPSJ1cmwoI2wpIi8+PC9nPjxnIGNsaXAtcGF0aD0idXJsKCNtKSIgbWFzaz0idXJsKCNuKSIgb3BhY2l0eT0iLjg4Ij48cGF0aCBkPSJtMzI3LjI4NiAzNDYuMDI5YzAgLjUzNy0uNDM4Ljk3Ni0uOTc2Ljk3NmgtMTcuMzM5Yy0uNTM3IDAtMS40MTUtLjAzLTEuOTUxLS4wNjkgMCAwLTIuOTE2LS4xOTktNC44My0uNzQyLTMuNzA2LTEuMTIxLTYuNjM4LTMuNjk5LTguODA1LTcuNzI4LTEuOTU3LTMuNjU3LTIuOTMzLTcuOTE5LTIuOTMzLTEyLjc4MiAwLTQuNjk1Ljg3NC04Ljg1MiAyLjYyMS0xMi40NyAxLjkxMy0zLjk4NSA0LjYzOS02LjcxIDguMTc5LTguMTY3IDIuNzQ2LTEuMTIyIDUuNTU2LTEuNjgyIDguNDI3LTEuNjgyaDE2LjUwNGMuNTM3IDAgLjk3Ni40MzguOTc2Ljk3NnY2LjQxNmMwIC41MzUtLjQzOC45NzYtLjk3Ni45NzZoLTE2LjIxM2MtLjUzNiAwLTEuMzk2LjEzMS0xLjkwNy4yOTMgMCAwLTQuMTY3IDEuMzA2LTUuNTAxIDQuNTE1LTEuMDM5IDIuNDk2LTEuNTYxIDUuNzYzLTEuNTYxIDkuODAxIDAgMy40MTQuNjY2IDYuMzEgMS45OTggOC42NzcgMS41NCAyLjc5MSAzLjcwNSA0LjE4MiA2LjQ5MiA0LjE4MmgxNi44MTdjLjUzNyAwIC45NzYuNDM5Ljk3Ni45Nzh6IiBmaWxsPSJ1cmwoI2UpIi8+PHBhdGggZD0ibTM2NC4wNjEgMzQ2LjAyOWMwIC41MzctLjQzOS45NzYtLjk3Ny45NzZoLTIxLjM5OGMtLjUzNyAwLTEuNDA4LS4wNzgtMS45MzgtLjE3MyAwIDAtMy44OTktLjcwOC01Ljc1LTIuNDcxLTEuODUyLTEuNzY0LTIuNzc4LTMuOTkyLTIuNzc4LTYuNjg5IDAtMi44MjIuODQxLTUuMTU2IDIuNTIxLTcuMDAzIDEuNjgzLTEuODQ2IDMuNzg5LTIuNzY5IDYuMzE3LTIuNzY5aDE0LjA5NmMuNTM3IDAgLjk3Ny0uMzk0Ljk3Ny0uODczIDAtLjQ4LS4wNC0xLjMxMy0uMDkzLTEuODQ2IDAgMC0uMDAxLS4wMzUtLjE4Ny0uNDM1LS4xODctLjM5Ni0uNDg4LS44NjUtLjkwNy0xLjQwNS0uNTc5LS42NjYtMS4xOC0xLjA5MS0xLjgwNC0xLjI4MS0uNjIxLS4xODctMS40OTItLjI3OC0yLjYxNC0uMjc4aC0xNS4xNDZjLS41MzcgMC0uOTc4LS40MzgtLjk3OC0uOTc2di01LjE2OGMwLS41MzcuNDQtLjk3OC45NzgtLjk3OGgxMS45MDYgMS45NTMuNzMyYy41MzUgMCAxLjQxNC4wMjIgMS45NTEuMDUgMCAwIDQuMzI4LjIxOCA1LjgyNi43MjkgMS41LjUyMyAyLjc4OCAxLjMwMyAzLjg3MiAyLjM0IDEuMzczIDEuMzcxIDIuMjkgMi44NjkgMi43NDcgNC40OTIuNDU5IDEuNjE3LjY4OCAzLjY5LjY4OCA2LjIyNnYxNy41MzJ6bS05LjkwNS01LjY0M2MuNTM3IDAgLjk3Ny0uNDQuOTc3LS45Nzh2LTQuMzVjMC0uNTM3LS40MzgtLjk3Ny0uOTc3LS45NzdoLTkuMDM4Yy0uNTM2IDAtMS40MS4wNjQtMS45MzkuMTQ4IDAgMC0uOTYuMTQ2LTEuNjg5Ljc0OC0uNzI3LjU5OS0xLjA5IDEuMzg5LTEuMDkgMi4zNzkgMCAuODY1LjM1MyAxLjU4OCAxLjA1OSAyLjE2NC43MDkuNTc4IDEuNTIxLjg2MiAyLjQzNy44NjJoMTAuMjYydi4wMDR6IiBmaWxsPSJ1cmwoI2YpIi8+PHBhdGggZD0ibTQwMC4zOTUgMzM3LjE0MWMwIDIuNzQ4LS44ODQgNS4wOTYtMi42NTUgNy4wNTktMS43NyAxLjk1My00LjAwNiAyLjkzMy02LjcxMyAyLjkzM2gtMjAuNDM0Yy0uNTM4IDAtLjk3OS0uNDQtLjk3OS0uOTc3di0zLjkxOWMwLS41MzYuNDM5LS45NzUuOTc5LS45NzVoMTUuNjAyYy41MzYgMCAxLjQxMi0uMDYyIDEuOTQ1LS4xMzQgMCAwIDEuMzI0LS4xOCAyLjE3NS0uODAxLjg1MS0uNjI2IDEuMjc2LTEuNTIxIDEuMjc2LTIuNjg3IDAtMi43MDUtMS44My00LjA1OC01LjQ3OS00LjA1OGgtNy45OWMtLjUzNiAwLTEuNDAyLS4xMDQtMS45MjUtLjIzMSAwIDAtMi44MDctLjY4OC00LjU5Mi0yLjUxOS0xLjc4NS0xLjgzMi0yLjY4MS0zLjgwOC0yLjY4MS01LjkzMyAwLTIuOTk2LjY2Ny01LjQwNyAxLjk5OC03LjIzOCAxLjU0Mi0yLjA4MiAzLjgwOC0zLjEyNiA2LjgwNy0zLjEyNmgxOS42MjRjLjUzNiAwIC45NzcuNDQyLjk3Ny45Nzh2NC4xNjhjMCAuNTM3LS40MzkuOTc2LS45NzcuOTc2aC0xNi40MDFjLS41MzYgMC0xLjM5OS4xMS0xLjkyMi4yNDMgMCAwLS4zNzguMTAxLS44OTIuNzg3LS41MjMuNjg4LS43OCAxLjQ3LS43OCAyLjM0NiAwIC45NTMuMzQxIDEuNzcxIDEuMDI4IDIuNDY0LjY4Ni42ODcgMS41MDYgMS4wMyAyLjQ2NiAxLjAzaDguNzAxYy41MzYgMCAxLjQwOC4wNzIgMS45MzguMTYgMCAwIDQuNDc3Ljc0MiA2LjI0NSAyLjU1MSAxLjc3NSAxLjgxNyAyLjY1OSA0LjExNiAyLjY1OSA2LjkwM3oiIGZpbGw9InVybCgjZykiLz48cGF0aCBkPSJtNDI0LjYxNCAzMjAuNDMyYzAgLjUzNS0uNDM4Ljk3Ny0uOTc3Ljk3N2gtNi40NzZjLS41MzYgMC0uOTc2LjQzOS0uOTc2Ljk3NnYxMi43MjRjMCAuNTM1LjA4MSAxLjQwOC4xOCAxLjkzNSAwIDAgLjI3NyAxLjQ3NCAxLjE5NCAyLjM0NyAxLjAzOS44NzUgMi40MTEgMS4zMTIgNC4xMjEgMS4zMTJoMS41ODNjLjUzNSAwIC45NzYuNDQuOTc2Ljk3OHY0LjM1NGMwIC41MzYtLjQzOS45NzYtLjk3Ni45NzZoLTYuMTA0Yy0uNTM3IDAtMS40MDYtLjA4NC0xLjkzNC0uMTg4IDAgMC0zLjUxNy0uNjg4LTUuMjIxLTIuNDM4LS45OTktMS4wNDEtMS42NDYtMi4xODUtMS45MzgtMy40MzMtLjI5LTEuMjQ3LS40MzUtMi43MjYtLjQzNS00LjQzNXYtMTQuMTMyYzAtLjUzNC0uNDQtLjk3Ni0uOTc5LS45NzZoLTMuNTQyYy0uNTM3IDAtLjk3NS0uNDQtLjk3NS0uOTc3di00Ljc5M2MwLS41MzUuNDM4LS45NzcuOTc1LS45NzdoMy41NDJjLjUzNyAwIC45NzktLjQzOC45NzktLjk3N3YtOS4zNDZjMC0uNTM4LjQzOC0uOTc2Ljk3NS0uOTc2aDYuNjAyYy41MzYgMCAuOTc3LjQzOC45NzcuOTc2djkuMzQ2YzAgLjUzNy40MzguOTc3Ljk3Ni45NzdoNi40NzZjLjUzNyAwIC45NzcuNDM5Ljk3Ny45Nzd6IiBmaWxsPSJ1cmwoI2gpIi8+PHBhdGggZD0ibTQ3NS42MjIgMzQ2LjAyOWMwIC41MzctLjQzOC45NzYtLjk3Ni45NzZoLTYuNDc3Yy0uNTM4IDAtLjk3Ny0uNDM4LS45NzctLjk3NnYtMTguMjg2YzAtLjUzNy0uMDI3LTEuNDE1LS4wNTgtMS45NTEgMCAwLS4wMjctLjQzNy0uMTkzLS44OTYtLjE2NS0uNDU3LS40OTctLjk0Ny0xLjAwMS0xLjQ2NS0uNDk2LS41MjEtLjk5Ni0uODkzLTEuNS0xLjExOS0uNDk0LS4yMjktMS4wNzgtLjM0NC0xLjc0NS0uMzQ0aC01LjIwM2MtLjUzNyAwLS45NzYuNDQtLjk3Ni45Nzd2MjMuMDg0YzAgLjUzNy0uNDM5Ljk3Ni0uOTc4Ljk3NmgtNi42MDRjLS41MzQgMC0uOTc1LS40MzgtLjk3NS0uOTc2di0yMy4yNzFjMC0uNTM3LS40MzktLjk3Ny0uOTc5LS45NzdoLTguMDM2Yy0uNTM3IDAtLjk3Ny40MzktLjk3Ny45Nzd2MjMuMjcxYzAgLjUzNy0uNDQuOTc2LS45NzkuOTc2aC02Ljg0OWMtLjUzNyAwLS45NzktLjQzOC0uOTc5LS45NzZ2LTMwLjM5MWMwLS41MzcuNDQtLjk3OC45NzktLjk3OGgzMi42OTdjLjUzNiAwIDEuNDE3LjAyMiAxLjk1LjA1IDAgMCAyLjg5Ni4xNTIgNC4xNDYuNTQgMS4yNS40MDEgMi40NzkgMS4yNDMgMy42ODQgMi41MjguOTU2IDEuMDQxIDEuNjkyIDIuMDU4IDIuMjE1IDMuMDU0LjUyLjk5OC43ODIgMi4wNzQuNzgyIDMuMjM3djIxLjk1OWguMDA5eiIgZmlsbD0idXJsKCNpKSIvPjxwYXRoIGQ9Im00OTAuNjA3IDMxMC4wNjZjMCAuNTM1LS40NC45NzktLjk3OC45NzloLTYuNjYxYy0uNTM3IDAtLjk3OS0uNDQxLS45NzktLjk3OXYtNS43MjdjMC0uNTM4LjQ0LS45NzYuOTc5LS45NzZoNi42NjFjLjUzNiAwIC45NzguNDM4Ljk3OC45NzZ6bTAgMzUuOTYzYzAgLjUzNy0uNDQuOTc2LS45NzguOTc2aC02LjY2MWMtLjUzNyAwLS45NzktLjQzOC0uOTc5LS45NzZ2LTMwLjM5MWMwLS41MzcuNDQtLjk3OC45NzktLjk3OGg2LjY2MWMuNTM2IDAgLjk3OC40NC45NzguOTc4eiIgZmlsbD0idXJsKCNqKSIvPjxwYXRoIGQ9Im01MDUuNzc3IDM0Ni4wMjljMCAuNTM3LS40MzguOTc2LS45NzguOTc2aC02Ljg0OWMtLjUzNCAwLS45NzYtLjQzOC0uOTc2LS45NzZ2LTQxLjY4OGMwLS41MzguNDM5LS45NzYuOTc2LS45NzZoNi44NDljLjU0IDAgLjk3OC40MzguOTc4Ljk3NnoiIGZpbGw9InVybCgjaykiLz48cGF0aCBkPSJtNTIwLjc1OSAzNDYuMDI5YzAgLjUzNy0uNDM5Ljk3Ni0uOTc4Ljk3NmgtNi44NWMtLjUzOSAwLS45NzgtLjQzOC0uOTc4LS45NzZ2LTQxLjY4OGMwLS41MzguNDM4LS45NzYuOTc4LS45NzZoNi44NWMuNTM3IDAgLjk3OC40MzguOTc4Ljk3NnoiIGZpbGw9InVybCgjbCkiLz48L2c+PGcgY2xpcC1wYXRoPSJ1cmwoI3ApIj48cGF0aCBkPSJtNDkwLjYwNyAzMTEuNDZjMCAuNTM3LS40NC45NzYtLjk3OC45NzZoLTYuNjYxYy0uNTM3IDAtLjk3OS0uNDM4LS45NzktLjk3NnYtNS43MjZjMC0uNTM1LjQ0LS45NzcuOTc5LS45NzdoNi42NjFjLjUzNiAwIC45NzguNDQuOTc4Ljk3N3ptMCAzNS45NmMwIC41MzktLjQ0Ljk3OS0uOTc4Ljk3OWgtNi42NjFjLS41MzcgMC0uOTc5LS40MzgtLjk3OS0uOTc5di0zMC4zODVjMC0uNTM3LjQ0LS45NzkuOTc5LS45NzloNi42NjFjLjUzNiAwIC45NzguNDQuOTc4Ljk3OXoiIGZpbGw9InVybCgjcSkiLz48L2c+PHBhdGggZD0ibTQ5MC42MDcgMzEwLjkzOWMwIC41MzUtLjQ0Ljk3Ni0uOTc4Ljk3NmgtNi42NjFjLS41MzcgMC0uOTc5LS40NC0uOTc5LS45NzZ2LTUuNzI2YzAtLjUzNy40NC0uOTc4Ljk3OS0uOTc4aDYuNjYxYy41MzYgMCAuOTc4LjQzOS45NzguOTc4eiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGQ9Im01MDUuODY3IDM0OC4zNGgtOC44NHYtNDMuODQ1aDguODR6IiBmaWxsPSIjZTZlNmU2Ii8+PHBhdGggZD0ibTU1OC42MTUgMjk1LjA1OGMtNC45MzggNi40NDgtOS4yNjEgMTMuMTE3LTkuNTA5IDEzLjUxOS0yLjU2MiA0LjIxMi01LjgzIDcuOTM4LTguNzY2IDExLjczMWwzOC41MjEgMTcuMTY4YzcuMDI4LTcuNTU4IDEzLjc4MS0xNS43MDMgMjAuMjQyLTI0LjIyNHoiIGZpbGw9InVybCgjcykiLz48cGF0aCBkPSJtNjAyLjkwMiAyNzMuOTg0YzkuNzQ2LTEyLjk4OCAxNS42MDktOC45MTIgMTkuODE3LTYuNzU5IDQuOTA2IDIuMzUzIDQuNjQ1IDIuNDMxIDUuMzY5IDIuODc3bC00LjU4NyA3LjM5M2MtNi4yNzkgMTAuMTU5LTEyLjk4NSAyMC4yMzMtMjAuMDUxIDI5LjkzbC00MC43My0xOC4zMDljMy4yNzgtMy44MTIgOS43MS0xMi44NjIgMTEuMzIyLTEyLjg2MiAwIDAgMy45OTUtNC41ODYgMTIuMTMyLTEuMTc5IDguMTM0IDMuNDAxIDE0LjEwNyAyLjM5NSAxNi43MjgtMS4wOTF6IiBmaWxsPSJ1cmwoI3QpIi8+PHBhdGggZD0ibTUyMC45MjMgMzM1Ljc5OHYtMzEuMzAzaC04Ljg0N3YzOS4xOTN6IiBmaWxsPSIjZTZlNmU2Ii8+PHBhdGggZD0ibTIzOS4wMjcgMjg5LjE4NC0yLjg4OCA4LjY2MSA0LjE2OCAyLjM0NyA1LjkxMS02Ljk1OGMtMi4wNjUtMS44NjktNC41MjItMy4yNTItNy4xOTEtNC4wNXoiIGZpbGw9InVybCgjdSkiLz48cGF0aCBkPSJtMjQwLjcxNyAzMTQuMjM4IDYuNTM1IDUuNTUzYzEuODcxLTEuOTg4IDMuMy00LjM1MiA0LjE1Ni02LjkzOGwtOC4zNDYtMi43ODV6IiBmaWxsPSJ1cmwoI3YpIi8+PHBhdGggZD0ibTIyNi42NzEgMzE0LjY0NS01LjMzNCA2LjI3N2MxLjk5NSAxLjc3MSA0LjM0NiAzLjA5OCA2Ljg5NSAzLjg4N2wyLjYwNi03LjgxNnoiIGZpbGw9InVybCgjdykiLz48cGF0aCBkPSJtMjE1Ljc4NCAzMDIuMDU3IDguMTMgMi43MTEgMi4zNDktNC4xNjYtNi42OTctNS42OTFjLTEuNzcgMi4wNjktMy4wNTEgNC41MTYtMy43ODIgNy4xNDZ6IiBmaWxsPSJ1cmwoI3gpIi8+PHBhdGggZD0ibTIyMS45MzMgMjY1Ljg5MWMtMjIuOTE0IDYuMzk2LTM2LjMwMyAzMC4xNTctMjkuOTA2IDUzLjA3IDYuMzk2IDIyLjkxNSAzMC4xNTcgMzYuMzA1IDUzLjA3MSAyOS45MDhzMzYuMzAzLTMwLjE1OCAyOS45MDYtNTMuMDcxYy02LjM5Ny0yMi45MTQtMzAuMTU3LTM2LjMwNC01My4wNzEtMjkuOTA3em0tMTguMzcxIDEyLjM2NCAyNC42OSAyMC45ODFjLjU0LjQ2Mi42OTUgMS4zMzguMzQ5IDEuOTU4bC0yLjk3MSA1LjI3MWMtLjM0OC42MTUtMS4xODUuOTM4LTEuODU1LjcxM2wtMzAuNzEyLTEwLjI0NGMxLjgyMi03LjAyMyA1LjQ0Ni0xMy40NzMgMTAuNDk5LTE4LjY3OXptMjkuNjg1IDM4Ljg3NS0xMC4yMzMgMzAuNjg4Yy03LjAxNi0xLjgzLTEzLjQ1Ny01LjQ2MS0xOC42NTQtMTAuNTE2bDIwLjk0Ny0yNC42NDhjLjQ2LS41MzggMS4zMzktLjY5NiAxLjk1Ni0uMzUxbDUuMjcxIDIuOTcyYy42MTYuMzQ3LjkzOCAxLjE4My43MTMgMS44NTV6bS40ODMtMTkuNDIzIDEwLjI2My0zMC43NzFjNy4wMjcgMS44MjggMTMuNDc5IDUuNDYzIDE4LjY4NSAxMC41MjdsLTIxLjAwNSAyNC43MTRjLS40NTguNTQxLTEuMzM5LjY5OS0xLjk1Ni4zNTNsLTUuMjc0LTIuOTY5Yy0uNjItLjM0OS0uOTQtMS4xODItLjcxMy0xLjg1NHptMjkuNjczIDM4Ljg2NS0yNC42NzctMjAuOTY5Yy0uNTQtLjQ1OS0uNjk3LTEuMzQyLS4zNDgtMS45NTdsMi45NjgtNS4yNzRjLjM0Ny0uNjIgMS4xODQtLjkzOCAxLjg1NC0uNzEybDMwLjc0MiAxMC4yNTRjLTEuODM1IDcuMDItNS40NzQgMTMuNDYxLTEwLjUzOSAxOC42NTh6IiBmaWxsPSJ1cmwoI3kpIi8+PHBhdGggZD0ibTMxMy41NzEgMjUzLjkxN3MtMTguNDcxIDQuNjA0LTQxLjMzOSAyNy42MjRjMS41MDYgMi4zMzggMi44MDEgNC44NSAzLjg1IDcuNTE2IDEyLjg0My0xMS4xNSAzNC40MzktMjYuNTU2IDUwLjcyNy0yMS4wNzEtLjAwMS0uMDAxLTYuMjM1LTkuNzY5LTEzLjIzOC0xNC4wNjl6IiBmaWxsPSJ1cmwoI3opIi8+PHBhdGggZD0ibTM1Ny4yMDEgMzExLjE3M2g3LjA2NWMtMS4wMzItMS43OTktMi4wNjItMy42MzItMy4wODUtNS41NjNsLTMuMTUtNS45NDdjLTEuOTIyLTMuNjMxLTMuNjI1LTYuNzktNS4yMDItOS42NDlsMjQuNzQxLTguNDM2YzMuMDAzIDQuMDk3IDYuMDY0IDguNiA5LjExNyAxMy4zODggMS4xMDkgMS43NDIgMi4xODkgMy40MDIgMy4yNDkgNS4wMDlsLTIzLjA4OSAxMS4xOTloMTcuMTY3bDEwLjE2My00LjkyOWMxLjE5NyAxLjczIDIuMzU2IDMuMzY1IDMuNDg2IDQuOTI5aDcuNjVjLTMuOTc3LTUuMjg2LTguNDc1LTExLjczOC0xMy41MTQtMTkuNjQ1LTI0LjQ0My0zOC4zNDYtNDEuNzU3LTM5LjA0My00MS43NTctMzkuMDQzaC02LjYwNGMxLjkyMi41MjEgMy45MzggMS4zODEgNi4yODEgMi43NTZsLTE5LjQ1IDMuNTU1Yy0uMzM5LS4zNTgtLjY3NC0uNzA5LTEuMDI4LTEuMDc4LS4xMDQtLjExLTMuMzc4LTMuMjUxLTUuNDMzLTUuMjMzaC02LjM1NmMxOS4zNTIgMTkuMTczIDE5LjY4OSAyMC45MTcgMzguMzYyIDU2LjEyNi40NjMuODY3LjkyNSAxLjcyIDEuMzg3IDIuNTYxem0tMjEuMDg1LTQ2LjA0NSAyMi4wNzUtNC4wMzdjMS4wNjQuODEzIDIuMTgyIDEuNjggMy4zNzEgMi42MTkgMy40NzcgMi43NTEgNy4zMTYgNi44MDYgMTEuMzM0IDExLjc4MmwtMjMuNzEgOC4wODNjLTQuNzczLTguMTczLTguMzYxLTEzLjA5OS0xMy4wNy0xOC40NDd6IiBmaWxsPSJ1cmwoI0EpIi8+PHBhdGggZD0ibTU2Ny4zODcgMzQ5YzIuMTA5LTEuOTcxIDQuMjAxLTQgNi4yNjctNi4wODlsLTM3LjgzNy0xNi44NjNjLTYuOTc5IDguNjUxLTE0LjUwNCAxNi4yNTctMjIuMTM2IDIyLjk1MnoiIGZpbGw9InVybCgjQikiLz48L3N2Zz4=";
function createLayerSequence(opts, ...argsList) {
  return argsList.map((args, index) => {
    return {
      name: `${opts.name}-${index}`,
      ...opts.defaultArgs,
      widget: {
        uri: opts.widget.uri,
        args: {
          ...opts.widget.defaultArgs,
          ...args
        }
      }
    };
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
              layers: layout.map((layer, index2) => ({
                name: `${opts.name}-${row}-${col}-${index2}`,
                duration: layer.duration,
                ...opts.defaultArgs,
                widget: {
                  uri: opts.widget.uri,
                  args: {
                    ...opts.widget.defaultArgs,
                    ...layer.widget
                  }
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
        animation: fo.animationPresets.snake
      }
    }
  };
  const sequence = [logoLayer];
  if (text) {
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
    sequence.push(disclaimer);
  }
  sequence.push(introTitle);
  return sequence;
}
function getOutro() {
  return [logoLayer];
}
async function initBrowserDemoCache() {
  const cache = new Cache(
    new StorageBrowser("demos", "/assets/"),
    "demos",
    100
  );
  const resourceManager2 = new ResourceManager(cache);
  await resourceManager2.init();
  return resourceManager2;
}
const images$1 = {
  deniro: assets.deniro,
  laurie: assets.laurie,
  nicholsson: assets.nicholsson,
  halle: assets.halle,
  smith: assets.smith,
  pacino: assets.pacino,
  scarlett: assets.scarlett,
  denzel: assets.denzel,
  jackie: assets.jackie,
  kidman: assets.kidman,
  stallone: assets.stallone,
  streep: assets.streep,
  freeman: "data:image/jpeg;base64,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"
};
const shuffleImages = (images2) => {
  const keys2 = Object.keys(images2);
  const shuffled = keys2.sort(() => 0.5 - Math.random());
  return shuffled.map((key) => ({
    duration: 1e3 + Math.random() * 500,
    widget: {
      src: images2[key],
      size: "cover"
    }
  }));
};
const mosaic = createMosaicLayout(
  {
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
  },
  [
    shuffleImages(images$1),
    shuffleImages(images$1),
    shuffleImages(images$1),
    shuffleImages(images$1),
    shuffleImages(images$1),
    shuffleImages(images$1),
    shuffleImages(images$1),
    shuffleImages(images$1),
    shuffleImages(images$1)
  ]
);
const infoLayers = createLayerSequence(
  {
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
        animation: fo.animationPresets.upper
      }
    },
    defaultArgs: {
      slack: 1e3,
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
  },
  { text: "We can split the screen in any layout, combining any widgets." },
  { text: "All layouts are independent from each other." },
  { text: "And will loop until all the content has been shown." },
  { text: "" }
);
const singleVideoTextLayers = createLayerSequence(
  {
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
        animation: fo.animationPresets.upper
      }
    },
    defaultArgs: {
      slack: 1e3,
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
  },
  { text: "We can run full screen videos with an overlay text" },
  { text: "" },
  { text: "The text will loop if the video  is long enough..." }
);
const middleText = createLayerSequence(
  {
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
        animation: fo.animationPresets.upper
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
  },
  { text: "We can go crazy with layouts" },
  { text: "Any combination or number of layout sections are supported" },
  { text: "Just let your imagination decide what to create" },
  { text: "This text will loop until all layouts have completed" }
);
mosaic.widget.args.items[4].playlist.layers = middleText;
async function getComplexDemo(resourceManager2) {
  resourceManager2 = resourceManager2 || await initBrowserDemoCache();
  const jsonPlaylist = {
    name: "Complex Demo",
    layers: [
      ...getIntro(
        "This demo illustrates overlays and complex layouts. \n All you see in this demo is played by the Castmill player, including this introduction."
      ),
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
                      name: "Sunrise",
                      widget: {
                        uri: "widget://video",
                        args: {
                          src: assets.sunrise
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
                      widget: {
                        uri: "widget://video",
                        args: {
                          src: assets.billboard
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
      mosaic
    ]
  };
  return oi.fromJSON(jsonPlaylist, resourceManager2);
}
const videoLayers$1 = createLayerSequence(
  {
    name: "videos",
    widget: {
      uri: "widget://video"
    },
    defaultArgs: {
      duration: 4e3
    }
  },
  { src: assets.raw },
  { src: assets.roast },
  { src: assets.brew },
  { src: assets.drink }
);
const imageLayers = createLayerSequence(
  {
    name: "images",
    widget: {
      uri: "widget://image"
    },
    defaultArgs: {
      duration: 2e3,
      transition: {
        uri: "transition://crossfade",
        opts: {
          duration: 500
        }
      }
    }
  },
  { src: assets.cake2, size: "cover" },
  { src: assets.cake3, size: "cover" },
  { src: assets.cake4, size: "cover" },
  { src: assets.cake5, size: "cover" },
  { src: assets.cake6, size: "cover" },
  { src: assets.cake1, size: "cover" }
);
async function getSimpleDemo(resourceManager2) {
  resourceManager2 = resourceManager2 || await initBrowserDemoCache();
  const jsonPlaylist = {
    name: "Simple Demo",
    layers: [
      ...getIntro(
        "This demo illustrates some simple cases such as showing images and videos."
      ),
      ...imageLayers,
      ...videoLayers$1
    ]
  };
  return oi.fromJSON(jsonPlaylist, resourceManager2);
}
var montserratRegular = "data:font/ttf;base64,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/+sAW//zAFz/8QBg//YAsv/sAMgAXAABAA7/9gAMACb/1AAv/+wAVP/1AFsACQBeAAcAiP/OAK4ACACwACAAsQAPALL/7wDEABQAyAAiAAEAGP/2ABIAFv/lABf/7QAY/+0AHP/tACb/9AAv/+MAOP/4ADn/xwA7/+YAPP/tAD3/5AA+/9MAP//tAEv/9wBZ//cAXf/pAF//7wCI//cAEgAM/4IAFf/1ABb/4QAb//YAHP/vADT/7QA5/8YAOv/xADv/xgA8/9EAPv/CAEv/+ABZ//AAW//cAFz/5ABe/9wA5/9zAOj/cwAYABT+5wAV/+sAGf/WABv/6gAd/+0AHv/2ACb/wwAv//EANP/nADj/8ABG/9cAS//zAFP/5ABU/9IAWP/VAFr/5gBb//YAXP/1AF3/7wBf/+YAiP++AJEACACy/+gAwwARAAcADv/tABP/9QAU/+gAJv/2AEH/8wBC/+sA9P/yAAMAEv/1AHn/7wD8//YAAQAU//AACgAM/+sADv/xABb/9AAc//MAOf/sADv/8wA+//EAQf/uAEL/8QBy/+gAAQAU//IAAQAU//MADAAS/+YAE/++ABT/xAAZ/+wAJv/YADsABgA+ABAAZf/sAHn/5gCI/9QA9P/FAPz/6AAEAA7/8AAU//EAQf/2AEL/8AAHAA7/7QAT//QAFP/oACb/9gBB//QAQv/sAPT/8gAJAAz/9wA5/8kAO//kADz/6wA+/9MAWf/4AFv/9gBe//cA6P/CAAUAOf/nADv/8AA8//YAPv/mAOj/7gAbAAz/0gAP/9QAEv/0ABX/9gAW/+sAG//2ACT/6wA0/+4AOf/JADr/7wA7/9gAPP/fAD7/zQBB/8kAQv/zAEv/9wBU//UAWf/oAFr/+ABb/+MAXP/nAF7/4wBw//QAsv/3AOf/ywDo/8sA9v/RABMADv/vABT/8wAm//gAL//5ADn/7wA7//QAPP/5AD3/9gA+/+0AQf/yAEL/7ABL//gAWP/5AFn/9wBb//gAXP/5AF3/8wBe//gAX//7AAsAEv/2ADT/8QA4//sAU//7AFT/8QBY//kAWv/5ALAAFwCy//MAxAAKAMgAGQAGADT/9gBL//oAVP/2AFn/+ABa//kAsv/2ABYAE//IABT/0gAm/9UAL//vAEb/6gBL//kAU//xAFT/8QBY/+sAWf/7AFr/9ABd//cAX//wAIj/zwCh//gArgAOAK//9gCwABUAsv/sAMQACQDF//EAyAAXAA0ADv/2ACb/+QA5//gAO//4AD3/+wA+//UAQv/2AEv/9wBZ//cAW//3AFz/+ABd//oAXv/4AAsARv/6AEv/+QBN//sAUf/7AFP/+wBU//cAWP/6AFn/+ABa//sAX//7ALL/9wARABP/9wAU/+sAJv/3AC//+ABG//kAS//5AE3/+wBR//sAU//7AFT/+ABY//YAWf/5AFr/+gBd//oAX//4AIj/9wCy//UAEgAS/+UANP/hADj/9ABG//cAS//3AFP/+wBU/9cAWf/zAFr/6gBb/+YAXP/jAF7/5gBw//YArgAiALEAEwCy/98AxAAQAPL/8wAZAAz/qQAP/6gAEv+/ABb/6gAk/+gANP/sADn/uAA6/+8AO//EADz/yAA+/74AQf+8AEv/8wBU//cAWf/hAFr/+QBb/8QAXP/PAF7/xABw//YAef+2ALL/+wDn/6kA6P+pAPb/qgAZAA7/6gAT/+0AFP/kACb/7gAv/+sAOf/tADv/9AA8//kAPf/nAD7/6QA///QAQf/uAEL/5wBG//sATf/7AE7/+wBR//sAU//7AFj/+gBd//QAX//5AGL/9QCI/+0Asv/7APb/9gAPAA7/7gAT/8EAFP/QACb/2gAv/+EAPf/tAD7/+AA///kAQv/tAEb/9gBU//oAWP/6AIj/zwCy//MA8v/2AAMAQv/0AE8APQBi//sADQAv//sAOf/2ADv/9wA+//MAQf/0AEb/9gBL//sAU//7AFT/8QBZ//oAWv/3ALL/7ADy//EADgAU//UAJv/5ADv/+wA+//oAS//1AFP/+gBY//oAWf/0AFr/+gBb//YAXP/2AF3/9wBe//YAX//6ACYAC//yABL/xwAT/8YAFP/JABn/4AAf/8kAJf/lACb/yQAv//MANP/tAEb/twBL/+sATf/7AE7/+wBR//sAU//PAFT/wABY/7gAWf/2AFr/zABb/7wAXP+/AF3/vQBe/7wAX/+4AHD/9gCI/8oAof/zAK4AGACv/+wAsAAgALEACACy/9gAxAAUAMX/zwDIACIA8v/CAPP/ygASABP/8AAU/+YAJv/vAC//8gBG//YAS//6AE3/+gBO//oAUf/6AFP/+wBU//cAWP/zAFn/+QBa//cAXf/6AF//9gCI/+0Asv/zACIAC//yABL/5gAT/8YAFP/HABYABQAZ/+wAH//kACX/8AAm/9gAL//zADT/9AA4//oARv/VAEv/+gBT/+IAVP/VAFj/1ABZ//sAWv/nAF3/9wBf/+oAiP/TAKH/9ACuADMAr//yALAAGwCxABsAsv/aAMQAHwDF/+IAyAAdAPL/3QDz/+8A9gANAB0AC//2ABL/7QAT/9EAFP/QABn/8wAf/+sAJf/2ACb/3wAv//QANP/5AEb/2wBT/+cAVP/aAFj/2QBa/+sAXf/7AF//7wCI/9kAof/1AK4AKwCv//QAsAAYALEAGQCy/90AxAASAMX/5wDIABoA8v/kAPP/9QAQABL/5QA0/+cARv/5AEv/9ABT//oAVP/gAFn/8ABa/+sAW//oAFz/5QBe/+gAcP/2AK4AFACxAAgAsv/nAPL/8QAnAAv/7gAS/9MAE//CABT/xgAWAA8AGf/gABv/9gAf/9QAJf/kACb/zQAv//YANP/pADj/9wBG/88AS//1AFP/3QBU/8QAWP/MAFn/+QBa/9wAW//4AFz/8wBd/+sAXv/3AF//2ABw//EAiP/JAKH/8gCuAD0Ar//tALAAFgCxACYAsv/UAMQAJgDF/9wAyAAXAPL/ywDz/+AA9gAXAA0AEv/vADT/9ABL//cAU//5AFT/8gBZ//YAWv/1AFv/+ABc//YAXv/4ALAAEgCy//QAyAASABcAFf/rABn/5QAb/+sAHf/wAB7/9gAm//MANP/nADj/8wBG/+oAS//2AE8AWgBT/+4AVP/jAFj/6ABZ//YAWv/rAFv/8gBc//AAX//uAIj/9QCuABAAsv/sAMgAWgAPAAz/ywAW/+wAJgAHADT/9QA5/9cAOv/0ADv/2AA8/+EAPv/UAFn/9QBb/+kAXP/uAF7/6QCIABMA6P/CABcADv/wAC7/+wAv//kANP/6ADj/+wA5/8sAOv/4ADv/3QA8/+YAPf/7AD7/0QA///cAQf/eAEL/6QBL//wAWf/6AFv/+gBc//sAXv/6AGL/9QDn//AA6P/wAPb/6QARAA7/8wAS//EANP/2ADj/+gA5/7AAOv/6ADv/6gA8/+8APv/UAEH/7ABC//AARv/8AFT/9QBY//wAsv/0APL/8wD2/+8ABgAu//sAL//4ADT/+wA5//sAOv/6AD//+gAYAA7/6QAU/+8AJv/5AC7/+gAv//cAOP/5ADn/swA6//kAO//VADz/3AA9/+8APv/HAD//8gBB/98AQv/nAEv//ABZ//wAW//6AF3/9QBe//oAYv/0AOf/7gDo/+4A9v/sABgAEv/hABP/4AAU/+EAH//sACb/2AAv//oAOQATADsALgA8ACYAPQAQAD4AOQBCAA4ARv/7AFT/8wBY//wAiP/UAK4ASgCwABIAsQAxALL/4QDEAC4AyAAUAPL/5QD2ABwAAgBPABAAyAAQAAwAEv/kADT/7wA5/78AOv/7ADv/+AA+/+0ARv/3AFT/5wBY//sAsv/mAPL/7AD2//AABwAu//sAL//4ADT/+wA5//sAOv/6AD//+gB5/7cAGAAO//AAD//4AC7/+wAv//kANP/6ADj/+wA5/8sAOv/4ADv/3QA8/+YAPf/7AD7/0QA///YAQf/dAEL/6QBL//sAWf/5AFv/+gBc//oAXv/5AGL/9QDn/+8A6P/vAPb/6AAeAAz/9QAO/+UAD//1ABT/6wAk//YAJv/1AC7/9wAv//IAOP/1ADn/wAA6//cAO//VADz/2gA9/+AAPv/EAD//7ABB/9sAQv/jAEv/+ABZ//gAW//3AFz/+QBd/+0AXv/2AF//+gBi/+8AiP/2AOf/5gDo/+YA9v/oAAEATwA6ABQAC//zAA7/7gAS/+QAE//TABT/1QAf//AAJv/UAC//1gA5/7wAPf/iAD7/+QA///IAQv/tAEb/+wBU//YAYv/2AIj/0wCy/+QA8v/lAPb/+AARAA7/7AAU//YAJv/7AC7/+gA0//sAOf+5ADr/9wA7/+IAPP/nAD3/+AA+/9MAQf/mAEL/6wBb//wAXf/8AGL/9gD2/+kACQA5/8YAOv/6ADv/7gA8//QAPv/fAEH/8ABC//QAVP/8APb/7QAOAA7/8QAu//sAL//4ADT/+wA5/88AOv/7ADv/4gA8/+cAPf/5AD7/3QA///kAQf/sAEL/7gD2/+4AEgAO//MADwAJABP/3AAU/9gAH//3ACb/4wAv/+YAOf+8AD3/6AA+//gAP//6AEL/8gBG//kAVP/3AFj/+QCI/+AAsv/vAPL/7gAQAA7/8QAT/+MAFP/dACb/5wAv/+QAOf+/AD3/5gA+//MAP//4AEL/8ABG//sAVP/5AFj//ACI/+MAsv/yAPL/8gALABL/6AA0//QAOf++ADr/+gA7//gAPv/tAEb/+wBU/+wAsv/qAPL/6gD2//MAEgAO//UADwAGABP/3AAU/9sAH//3ACb/4wAv/+gAOf+8AD3/6QA+//gAP//6AEL/9QBG//kAVP/3AFj/+gCI/+AAsv/vAPL/7gAOABL/7wAu//sANP/6ADn/twA6//YAO//sADz/8AA+/9oAQf/uAEL/8ABU//kAsv/5APL/8QD2/+sACAA0//QARv/2AE8AUgBU/+8AWP/2AFr/9ACy//UAyABSAAIATwAzAMgAMwAGACb/8wAv//QAOf/0AD3/9AA+//AAiP/0AAEAGf/oAAUAFv/jABf/5wAY/+YAHP/sAFH/twAEADn/7AA7/+4APP/xAD7/7QABAGIACgARAA7/6gAT/+AAFP/iACb/7QAv/+gAOf/uADv/9AA8//oAPf/iAD7/6AA///MAQf/vAEL/5wBd//kAX//7AIj/7QD2//QAFgAO//AAFP/xACb/+QAu//gAL//5ADT/+wA4//sAOf/xADr/9gA7//AAPP/zAD3/8QA+/+4AP//5AEH/9gBC//QAS//6AFn/+QBb//kAXP/7AF3/9wBe//kABQAPABIAQQAJAEIAGwBiABAA9gAsAAMADwApACQAEQD2ACMABAAPABUAQgAQAGIABgD2ACIAHQAM//cADv/tAA//9wAU/+0AJv/2AC7/+gAv//QAOP/4ADn/2AA6//cAO//eADz/4wA9/+IAPv/ZAD//7gBB//AAQv/tAEv/+wBZ//oAW//5AFz//ABd//MAXv/6AF///ABi//YAiP/5AOf/7gDo/+4A9v/xAAYADgAPAA8AEgBBABoAQgAdAGIAEgD2ACsAAQBPABAABAAPACcAJAAPAE8AEAD2ACIACQAT/2kAJv/DAC//8gA0//UARv/rAFT/3ABY/+gAiP+/ALL/7QAPAAv/6gAT/2kAFP+sAB//tAAl/+QAJv/DAC//8gA0//UARv/rAFT/3ABY/+gAcP/0AIj/vwCy/+0A8v/wAAQAOf/KADv/7wA8//UAPv/gABAADP/yAC//8wA5/8IAO//dADz/5AA9//AAPv/LAD//9QBL//MAWP/2AFn/8wBb/+4AXP/yAF3/6wBe/+4AX//0AAQAFf/1ABYACgAZ/9YAG//0AAYAJv/lAC//7wCI/+IArgAHALAADwDIABEABAAW/+cAF//uABj/7QAc/+4AAgAaAAsAEAAAABIAFQAGABcAHwAKACUAKAATACoALAAXAC4AMQAaADQAQQAeAEYARgAsAEgASwAtAE4AUQAxAFMAVAA1AFYAYgA3AHAAcABEAHIAcgBFAHkAeQBGAIEAgQBHAJAAkABIAKAAoQBJAK8AsgBLAMQAxABPAMYAxgBQAMgAyABRAOcA6ABSAPIA9ABUAPYA9gBXAPwA/ABYAAAAAQAAAAoAHAAeAAFsYXRuAAgABAAAAAD//wAAAAAAAAAAAAEAAAAA";
var montserratBold = "data:font/ttf;base64,AAEAAAARAQAABAAQRFNJRwAAAAEAAHNwAAAACEZGVE1j7D1EAABcVAAAABxHREVGATQABgAAXHAAAAAgR1BPU8AN1e4AAFyQAAAWwEdTVUJskXSPAABzUAAAACBPUy8ypuk9KQAAAZgAAABgY21hcMfOvuoAAAYUAAADhmdhc3AAAAAQAABcTAAAAAhnbHlmYZo/lAAAC7QAAEc4aGVhZPwMDFUAAAEcAAAANmhoZWEHlwQnAAABVAAAACRobXR4WfctnAAAAfgAAAQabG9jYbHmxAAAAAmkAAACEG1heHABUAA3AAABeAAAACBuYW1lF7zNnAAAUuwAAAaZcG9zdDiLLPkAAFmIAAACw3ByZXBoBoyFAAAJnAAAAAcAAQAAAAIAQhbVDvdfDzz1AAsD6AAAAADMj2Q6AAAAAMyPZDr/kf8GBDsDtAABAAgAAgAAAAAAAAABAAADyP8FAAAEXf+R/74EOwABAAAAAAAAAAAAAAAAAAABBgABAAABBwA0AAcAAAAAAAIAAAABAAEAAABAAAAAAAAAAAMCUwK8AAUAAAKKAlgAAABLAooCWAAAAV4AMgEyAAACAAUFAAAAAgAEgAAAL0AAIEoAAAAAAAAAAHB5cnMAIAAN+wIDyP8FAAADyAD7AAAAAQAAAAACGgK7AAAAIAACAQgAAAAAAAABTQAAAAAAAAEIAAABCAAAATsARQGxAEcC6wAsAnsAJAMzAEACvAAvAQUARwFqAC0BagAZAcgANwJIADABKQA1AeoAQwEgADgCZgAbArIAOAGTAB8CXQAuAk8AJAJMACQCVAAxAnYAOAJDAC8CggA2AnUANAE2AEMBOwBAAlkAKQJLADICWQBKAgwAIwN7ADAC6f/7ArEAVgLcACwDAQBWAo4AVgJkAFYC7gAuAvoAVgFIAFYCLAAaAsYAVgI4AFYDugBWAzEAVgM6AC4CpQBWAzsALgLXAFYCfgAkAmAAHALvAEwCsP/9A/v//QK3AAoCav/1AqkALgF2AE0CPAAcAXYAKAHjABYC0ABDAX4AMgJSACoCmgBHAkYAKAKaACkCagApAZIAJAKbACoCfwBHASQAOgFX/8QCUwBHASQARwPXAEcCfwBHAokAKAKaAEcCmgApAZsARwIIABsBuAAkAoAAQQJKAAMDhgANAkkADQJOAAQCKQAqAWgAJQEUAEwBaAAxAhcAGQE+AEcCVgAuAnQAOgL5ADgC5QAiASYAUAJuADICEwBfAzgAMwFmADMCXAAwAzEAPwM4ADMBugA3AawALwJFADABtwA7AbQAMwF+ADIChwBPAsgAIgEqAD0BGQAOASoAKAGJADECXAA6A1cAJANuACQDhQAnAg4ANALp//sC6f/7Aun/+wLp//sC6f/7Aun/+wP///AC3AAsAo4AVgKOAFYCjgBWAo4AVgFI/9sBSABWAUj/1gFI//kDEAAaAzEAVgM6AC4DOgAuAzoALgM6AC4DOgAuAk0AMAM6AC4C7wBMAu8ATALvAEwC7wBMAmr/9QKtAFYChwBGAlIAKgJSACoCUgAqAlIAKgJSACoCUgAqA6gAKAJHACkCagApAmoAKQJqACkCagApAST/xQEkAEcBJP/XAST/6AJVACwCfwBHAogAKAKIACgCiAAoAogAKAKIACgCRgAwAogAKAKAAEECgABBAoAAQQKAAEECTgAEApoARwJOAAQCfwAYAUj/4gEk/9EBJABHAlcAOwIsABoBJP+RAlMARwJTAEcBjgBHAkgAHAFrACQDMQBWAn8ARwQSAC8ECwAoAtcAVgLXAFYBmwAQAtcAVgGbAAcCfgAkAggAGwKpAC4CKQAqAsMAGwHjACMCZQBkAjgAZAE3ADcBngBkANcAEgJJAGsB+gAQAugAFwIfAEoCuQBAAPAAJADwABsA8AAbAakAJAGpABsBqQAbAhoAIwIWACYBtgBQAr0AOQRdAC0BewAwAXsAOgKW//sC/gAuA94APwOEADYCYQAsAyMAHgMUAFMCxgAmAkYAMALSABgDWQBCAbQACgKgAFEChQA/Am0APgJtAEgCfABUArYAJAAkAAAAAAADAAAAAwAAABwAAQAAAAABfAADAAEAAAAcAAQBYAAAAFQAQAAFABQAAAANAH4ArAD/ASkBMQE1ATgBRAFUAVkBYQF+AZICxwLdA8AgFCAaIB4gIiAmIDAgOiBEIKwhIiEmIgIiBiIPIhIiGiIeIisiSCJgImUlyvsC//8AAAAAAA0AIAChAK4BJwExATMBNwFAAVIBVgFgAX0BkgLGAtgDwCATIBggHCAgICYgMCA5IEQgrCEiISYiAiIGIg8iESIaIh4iKyJIImAiZCXK+wH//wAD//f/5f/D/8L/m/+U/5P/kv+L/37/ff93/1z/Sf4W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AOj/fwAaABT+5QAV/+wAGf/YABv/6wAd/+4AHv/1ACb/xQAv//MANP/oADj/7wBG/9wASf/WAEv/8wBT/+cAVP/VAFb/1QBY/9cAWv/oAF3/8wBf/+gAiP/BAJAAJgCuABsAsv/rAMMAKADW/+4ABgA5/84AO//oADz/7gA+/94AXv/4AOj/9gAEADn/7AA7//EAPP/2AD7/6gAcAAz/1wAP/9gAEv/0ABb/7QAk/+0ANP/rADj/+wA5/80AOv/tADv/1QA8/9sAPv/PAEH/ygBG//sASf/zAEv/9QBU//MAVv/0AFn/5ABa//YAW//hAFz/5ABe/+EAcP/1ALL/9QDn/9EA6P/RAPb/1gAYAA7/8AAU//QAJv/4AC//9wA5/+4AO//xADz/9gA9//QAPv/sAD//+gBB//IAQv/wAEn/+wBL//YAVP/7AFj/9wBZ//UAWv/7AFv/9wBc//cAXf/xAF7/9gBf//oAsv/7ABQADwAOABL/+AAm//sANP/xAEb/+gBJ/+sAS//7AFP/+QBU/+sAVv/sAFj/9QBZ//sAWv/4ALAADQCxAAcAsv/wAMQAIQDF//kAyAAgAPYAFgAbAA7/6gAT//UAFP/mACb/7AAv/+wAOP/7ADn/7gA7//AAPP/1AD3/5gA+/+gAP//zAEH/7gBC/+sARv/5AEv/+wBN//oATv/6AFH/+gBT//oAWP/3AFn/+wBa//sAXf/xAF//+ACI/+wAsv/6AA4ANP/1AEb/+QBJ//QAS//6AFP/+wBU//QAVv/0AFj/+wBZ//gAWv/5ALAABwCy//QAxAAOAMgAGwAYABP/2AAU/9kAJv/aAC//7QA4//sARv/xAEn/9QBL//sAU//2AFT/9QBW//UAWP/vAFn/+wBa//gAXf/5AF//9ACI/9IArgAJALAAGQCxAAkAsv/yAMQAIADF//YAyAAsABAADv/1ACb/+gA5//UAO//2ADz/+gA9//oAPv/0AEv/+ABY//sAWf/3AFv/+ABc//cAXf/3AF7/9wBf//sAyAAUAA8ARv/5AEn/9gBL//gATf/7AE7/+wBR//sAU//7AFT/9gBW//YAWP/5AFn/9wBa//sAX//6ALL/9ADIAAUAFAAU/+wAJv/2AC//+ABG//cASf/3AEv/+QBN//oATv/6AFH/+gBT//sAVP/3AFb/9wBY//UAWf/5AFr/+ABd//oAX//3AIj/9QCy//QAyAAMABgAEv/lADT/3AA4/+0ARv/wAEn/0gBL//UAU//5AFT/0QBW/9QAWP/5AFn/8QBa/+gAW//mAFz/4wBe/+YAcP/2AK4AKwCwAA8AsQApALL/2ADEADMAxf/5AMgAHgDy//IAGQAM/68AD/+tABL/zwAW/+wAJP/qADT/7QA5/8IAOv/xADv/xQA8/84APv/DAEH/wABJ//kAS//xAFT/+QBW//kAWf/lAFr/+QBb/88AXP/YAF7/0AB5/8QA5/+uAOj/rgD2/7EAGgAO/+oAE//xABT/5QAm/+sAL//qADj/+gA5/+0AO//wADz/9QA9/+UAPv/nAD//8gBB/+4AQv/rAEb/+QBL//sATf/6AE7/+gBR//oAU//6AFj/+ABZ//oAXf/wAF//9wCI/+kAsv/5ABIADv/uABP/zAAU/9QAJv/XAC//4wA9/+sAPv/7AD//+ABC//QARv/3AEn/+gBU//kAVv/6AFj/+ABf//sAiP/NALL/9ADEAAwABgAU//EAQgADAE8AVACI//IA6f/9AOz//QAXAC//+AA0//kAOf/yADv/8wA8//cAPv/uAEH/8ABG//MASf/uAEv/+QBN//sATv/7AFH/+wBT//sAVP/sAFb/7gBZ//YAWv/1AFv/+gBc//oAXv/5ALL/6gDy//IAFwAU//QAJv/4ADn/+gA7//sAPf/7AD7/+wBJ//sAS//yAFP/+ABU//sAVv/7AFj/9gBZ//IAWv/5AFv/9gBc//QAXf/1AF7/9ABf//cAsAAPALL/+wDEABIAyAAeACgAC//0ABL/ywAT/8oAFP/OABn/5AAf/84AJf/qACb/zQAv//EANP/tADj/+gBG/8AASf/GAEv/+QBN//sATv/7AFH/+wBT/+sAVP/EAFb/xgBY/8AAWv/PAFv/vwBc/8MAXf/AAF7/vgBf/70AiP/JAKH/8wCuABwAr//zALAAKwCxABoAsv/YALP/2gDEADIAxf/rAMgAPwDy/8gA8//QABYAE//zABT/5wAm/+4AL//zAEb/9QBJ//YAS//5AE3/+gBO//oAUf/6AFP/+ABU//YAVv/2AFj/8gBZ//kAWv/4AF3/+QBf//UAiP/rALL/8wDEAAEAyAAPACUAC//zABL/6AAT/8kAFP/KABYACAAZ/+0AH//oACX/8QAm/9UAL//xADT/8AA4//cARv/XAEn/0gBL//gAU//kAFT/0gBW/9IAWP/QAFn/+gBa/+gAXf/4AF//6ACI/9EAof/zAK4AOQCv//UAsAAqALEAOACy/+IAwgAHAMQAQQDF/+QAyAA7APL/3gDz//EA9gAOACAAEv/uABP/1AAU/9IAGf/0AB//7gAl//YAJv/bAC//8wA0//UAOP/7AEb/3gBJ/9kAS//6AFP/6QBU/9YAVv/YAFj/1QBa/+wAXf/6AF//7ACI/9YAof/0AK4AMQCv//cAsAAkALEAMACy/+QAxAA7AMX/6QDIADcA8v/lAPYABgAWABL/5QA0/+MAOP/6AEb/9ABJ/9wAS//xAFP/+ABU/9wAVv/cAFn/7ABa/+gAW//mAFz/4wBe/+YAcP/1AK4AGgCxABgAsv/gAMQAJQDF//gAyAASAPL/7wArAAv/8QAS/9oAE//KABT/zgAWABAAGf/kAB//3gAl/+gAJv/PAC//9gA0/+cAOP/1AEIABgBG/9MASf/NAEv/8wBT/9cAVP/LAFb/zABY/9AAWf/5AFr/2ABb//oAXP/2AF3/8QBe//oAX//bAHD/9ACI/8sAof/xAK4AQACv//QAsAAnALEAPwCy/98AwgAHAMQARQDF/9cAyAA3ANb/7QDy/9IA8//nAPYAFQARABL/9AA0//IARv/6AEn/8QBL//UAU//4AFT/8QBW//IAWf/1AFr/9QBb//kAXP/3AF7/+ACwAA4Asv/zAMQAFgDIACMAFAAV//AAGf/oABv/8AAd//YANP/rADj/9gA+AAYARv/vAEn/5wBPAF4AVP/nAFb/5wBY//MAWv/wAK4AMgCwABEAsQARALL/8QDEACYAyABeAA8ADP/PABb/7QAmAA0ANP/1ADn/2gA6//QAO//ZADz/4QA+/9oAWf/1AFv/6QBc/+0AXv/pAIgAGADo/8cAFQAO//EALv/7AC//+AA0//kAOP/6ADn/zwA6//UAO//bADz/4wA9//kAPv/XAD//9QBB/98AS//8AFn/+gBb//kAXP/4AF7/+QDn//gA6P/4APb/7AAeAAz/9QAO/+YAD//1ABT/7AAm//MALv/2AC//7wA4//UAOf/GADr/9gA7/9IAPP/ZAD3/3QA+/80AP//pAEH/3ABC/+cAS//4AFj/+wBZ//cAW//1AFz/9wBd/+oAXv/1AF//+QBi//IAiP/0AOf/6wDo/+sA9v/pABIADv/yABL/9gA0//YAOP/6ADn/zAA6//gAO//lADz/6wA9//sAPv/WAEH/6gBC//YASf/4AFT/9wBW//gAsv/1APL/9gD2//QACAAu//sAL//3ADT/+gA5//sAOv/5AD//+gCuAA8AyAASABsADv/pABT/7wAm//cALv/5AC//8wA4//gAOf+7ADr/+QA7/9EAPP/aAD3/6QA+/88AP//wAEH/4ABC/+sAS//7AFn/+gBb//gAXP/7AF3/8QBe//gAX//7AGL/9gCI//kA5//2AOj/9gD2/+8AHgAOAAwADwAGABL/8gAT/+QAFP/lACb/2AAv//kAOQAdADsAPAA8ADMAPQAeAD4AQgBBAA0AQgATAEb/+gBJ//UAVP/zAFb/9ABY//oAYgAKAIj/1QCuAFQAsAA0ALEAUACy/+cAxABZAMgASADWAAoA8v/rAPYAHwACAE8ABwDIAAcACQAu//sAL//3ADT/+gA5//sAOv/6AD//+QCuABEAxAAOAMgAEQACAE8AHgDIAB4ADgAPAA0AEv/nADT/6gA4//oAOf++ADv/+wA+//UARv/yAEn/5gBU/+QAVv/lAFj/9QCy/+EA8v/sAAkALv/7AC//9wA0//oAOf/7ADr/+QA///oAef+2AK4ADwDIABIAFQAO//EALv/7AC//+AA0//kAOP/6ADn/zgA6//UAO//bADz/4wA9//kAPv/XAD//9ABB/90AS//7AFn/+ABb//cAXP/3AF7/9wDn//YA6P/2APb/6wAdAA7/5gAP//gAFP/sACb/8wAu//YAL//vADj/9AA5/8QAOv/2ADv/0gA8/9cAPf/cAD7/ywA//+kAQf/cAEL/5wBL//cAWP/7AFn/9gBb//QAXP/2AF3/6gBe//MAX//5AGL/8gCI//QA5//vAOj/7wD2/+sAHAAO/+YAFP/sACb/9AAu//cAL//wADj/9QA5/8YAOv/2ADv/0gA8/9kAPf/fAD7/zQA//+kAQf/cAEL/5wBL//gAWP/7AFn/9wBb//UAXP/3AF3/6wBe//UAX//5AGL/8QCI//UA5//xAOj/8QD2/+sAAQBPAEUAFAAL//YADv/vABP/1wAU/9kAJv/SAC7/+wAv/9wAOf/BAD3/4QA+//oAP//0AEL/8wBG//sASf/5AFT/+ABW//kAWP/8AIj/0wCy/+0A8v/sABQADv/sABT/9QAm//oALv/5AC//+wA0//kAOf/KADr/9gA7/98APP/lAD3/9AA+/9EAP//6AEH/5QBC/+8AWf/8AFv//ABd//kAXv/7APb/8QAMADT/+AA5/+kAOv/3ADv/6gA8/+4APv/eAEH/7gBJ//sAVP/6AFb/+wCy//wA9v/2AA4ADv/yAC7/+wAv//cANP/6ADj/+wA5/+sAOv/4ADv/5AA8/+kAPf/4AD7/1wA///gAQf/tAPb/+AAQAA7/9QAT/98AFP/aACb/4QAv/+sAOf+/AD3/5wA+//oARv/5AEn/9QBU//QAVv/1AFj/9wCI/90Asv/tAPL/7wARAA7/8gAT/+YAFP/eACb/5AAv/+cAOf/DAD3/5AA+//YAP//6AEb/+gBJ//cAVP/2AFb/9wBY//gAiP/gALL/7wDy//MADQAS/+oANP/vADn/wAA6//oAO//5AD7/8gBG//YASf/pAFT/5wBW/+gAWP/6ALL/5gDy/+sAEQAO//UADwAQABP/3gAU/90AJv/hAC//6QA5/74APf/nAD7/+gBG//gASf/1AFT/8wBW//QAWP/2AIj/3QCy/+0A8v/vAA8AEv/2AC7/+gA0//kAOf+6ADr/9gA7/+oAPP/uAD7/3QBB/+4ASf/5AFT/+QBW//kAsv/4APL/9QD2//gACgA0//YASf/yAE8AWQBU//IAVv/xAK4AKACwAA8AsQAHAMQAHQDIAFkAAwBPAEEArgANAMgAQQACAMQABwDIABMABAAm//UAPf/0AD7/9ACI//UAAQAZ/+sABQAW/+gAF//rABj/6gAc//EAUf+2AAQAOf/tADv/8AA8//QAPv/vABkADv/oABP/5gAU/+MAJv/oAC//5gA4//sAOf/uADv/7wA8//QAPf/dAD7/5AA///AAQf/tAEL/6QBG//kATf/6AE7/+gBR//oAU//6AFj/+QBd//QAX//4AIj/5wCy//kA9v/3ABgADv/xABT/8gAm//gALv/3AC//+AA0//oAOP/5ADn/8AA6//YAO//vADz/8QA9/+4APv/uAD//9wBB//YAS//4AFj/+wBZ//gAW//4AFz/+QBd//QAXv/3AF///ACI//oADAAOADQADwAHAEEANgBCADkATQAWAE4AFQBRABYAYQAUAGIALwDWADYA2AAMAPYAJAAFAA8AHABCABAAYgAOAMYABgD2ACsABgAOAAwADwALAEEACABCABIAYgAIAPYAHQAbAA7/7gAU/+4AJv/1AC7/+AAv//EAOP/3ADn/1AA6//YAO//jADz/5gA9/+AAPv/fAD//5ABB//IAQv/wAEv/+QBY//wAWf/5AFv/+ABc//kAXf/vAF7/9wBf//sAiP/2AOf/9QDo//UA9v/2AAYADgA0AA8ABgBBADQAQgAnAGIAHQD2ACgAAQBPABkADAAGABYADAATAA8AMAAkABYAQgAdAE0AEQBOABEATwAeAFEAEQBhAA8AYgAaAPYAPwADAA4AAwBBAAYA1gAdAA8AE/90ACb/yAAv//MANP/3AEb/8wBJ/98AVP/jAFb/5QBY/+sAiP/DAK4ADgCxAA0Asv/zAMQAFwDIABcAFAAL/+wAE/90ABT/sAAf/+kAJf/oACb/yAAv//MANP/3AEb/8wBJ/98AVP/jAFb/5QBY/+sAiP/DAK4ADgCxAA0Asv/zAMQAFwDIABcA8v/qAAMAOf/QADv/8QA+/+cADwAM/+8AL//1ADn/yAA7/94APP/lAD3/7wA+/9IAP//2AEv/9gBZ//UAW//vAFz/8wBd/+sAXv/vAF//9gAEABX/9QAWAAwAGf/YABv/9AAIACb/6AAv//IAiP/lAK4ACgCwABkAsQAJAMQAIADIAC0ABAAW/+sAF//0ABj/8wAc//UAAgAYAAsADwAAABIAFAAFAB8AHwAIACUALAAJAC4AMQARADQAQQAVAEYATAAjAE4AUQAqAFMAYgAuAGQAZAA+AHAAcAA/AHIAcgBAAHkAeQBBAIEAgQBCAKAAoQBDAK8AsgBFAMQAxABJAMYAxgBKAMgAyABLANYA1gBMAOcA6ABNAPIA9ABPAPYA9gBSAPwA/ABTAAEAAAAKABwAHgABbGF0bgAIAAQAAAAA//8AAAAAAAAAAAABAAAAAA==";
const model$2 = {
  images: [
    assets.cake1,
    assets.cake2,
    assets.cake3,
    assets.cake4,
    assets.cake5,
    assets.cake6
  ]
};
const template$2 = {
  type: "group",
  style: {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "font-family": "Sans-serif",
    "font-weight": "bold",
    "background-color": "#222",
    color: "white",
    width: "100%",
    height: "100%"
  },
  components: [
    {
      type: "image-carousel",
      name: "images",
      binding: "images[0:6]",
      style: {
        width: "100%",
        height: "100%"
      }
    }
  ]
};
const frozenDesert = assets.frozenDesert;
const model$1 = {
  ...model$2,
  menu: {
    burgers: [
      {
        name: "Cheeseburger",
        price: 99,
        description: "A classic cheeseburger"
      },
      {
        name: "Double Cheeseburger",
        price: 129,
        description: "A double cheeseburger"
      },
      {
        name: "Hawai Burger",
        price: 159,
        description: "The famous Hawaian burger"
      },
      {
        name: "Bacon Burger",
        price: 199,
        description: "A burger with bacon"
      },
      {
        name: "Chicken Royale Burger",
        description: "Tender chicken grilled to perfection",
        price: 139
      }
    ],
    drinks: [
      {
        name: "Coca cola",
        price: "50"
      },
      {
        name: "Fanta",
        price: "50"
      },
      {
        name: "Sprite",
        price: "50"
      }
    ],
    desserts: [
      {
        name: "Ice cream",
        price: "15.45 $",
        description: "Choose between Vanilla and Chocolate"
      },
      {
        name: "Carrot Cake",
        price: "5.95 $",
        description: "The popular carrot cake with topped chocoloate"
      },
      {
        name: "Apple Pie",
        price: "3.45 $",
        description: "Delicious apple cake with vanilla sauce topping"
      },
      {
        name: "Cupcake",
        price: "2.95 $",
        description: "Homemade threat baked to perfection."
      },
      {
        name: "Donut",
        price: "4.95$",
        description: "Choose between sugar glaze or chocolate."
      },
      {
        name: "Muffin",
        price: "5.95 $",
        description: "Our famouse home baked muffins."
      },
      {
        name: "Tiramisu",
        price: "10.95 $",
        description: "The Italian desire that you must try at least once in a lifetime."
      }
    ],
    salads: [
      {
        name: "Caesar salad",
        price: "50"
      },
      {
        name: "Greek salad",
        price: "50"
      },
      {
        name: "Tuna salad",
        price: "50"
      },
      {
        name: "Chicken salad",
        price: "50"
      }
    ],
    soups: [
      {
        name: "Beef soup",
        price: "69",
        description: "Delicious soup with tender beef loin"
      },
      {
        name: "Fish soup",
        price: "49",
        description: "Soup with fresh fish from the day"
      },
      {
        name: "Vegan soup",
        price: "59",
        description: "Fresh vegetables soup with coriander"
      }
    ],
    starters: []
  }
};
const menuItem = {
  type: "group",
  style: {
    width: "100%",
    height: "2em",
    "margin-bottom": "0.5em",
    display: "flex",
    "flex-direction": "row",
    "justify-content": "end",
    "align-items": "start"
  },
  components: [
    {
      type: "group",
      style: {
        width: "70%",
        height: "100%",
        "margin-right": "1em",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "start",
        "align-items": "start"
      },
      components: [
        {
          type: "text",
          binding: "name",
          style: {
            height: "60%"
          }
        },
        {
          type: "text",
          binding: "description",
          style: {
            display: "flex",
            "justify-content": "start",
            "align-items": "start",
            height: "40%",
            color: "#9d9d9d",
            "font-style": "italic"
          }
        }
      ]
    },
    {
      type: "text",
      binding: "price",
      opts: {
        autofit: {
          maxSize: 1,
          maxLines: 1
        }
      },
      style: {
        width: "30%"
      }
    }
  ]
};
const menuSection = (title, binding, width, height) => ({
  type: "group",
  name: `${title}`,
  style: {
    width: `${width}%`,
    height: `${height}%`,
    margin: "0 3.33%"
  },
  components: [
    {
      type: "text",
      text: `${title}`,
      style: {
        height: "30%",
        color: "#c76565",
        "font-family": "Montserrat-Bold"
      }
    },
    {
      type: "list",
      name: `${title}`,
      binding,
      style: {
        height: "70%"
      },
      component: menuItem,
      pageDuration: 1
    }
  ]
});
const template$1 = {
  type: "group",
  style: {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "font-family": "Montserrat-Regular",
    "background-color": "#555",
    color: "white",
    width: "100%",
    height: "100%"
  },
  components: [
    template$2,
    {
      type: "group",
      name: "main",
      style: {
        left: "2.5%",
        top: "3.5%",
        width: "94%",
        height: "90%",
        border: "0.2em solid rgb(177 177 177)",
        "border-radius": "1em",
        display: "flex",
        "flex-direction": "row",
        "justify-content": "start",
        "align-items": "center",
        position: "absolute",
        "background-color": "rgb(50 50 50 / 83%)"
      },
      components: [
        {
          type: "group",
          name: "second row",
          style: {
            width: "50%",
            height: "100%",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            "align-items": "center"
          },
          components: [
            menuSection("Desserts", "menu.desserts", 80, 90)
          ]
        }
      ]
    },
    {
      type: "image",
      name: "icon",
      url: frozenDesert,
      style: {
        position: "absolute",
        top: "30%",
        right: "5%",
        width: "50%",
        height: "50%",
        "background-size": "contain"
      }
    }
  ]
};
const MenuBoardWidget = {
  name: "MenuBoard",
  template: template$1,
  model: model$1,
  fonts: [
    {
      name: "Montserrat-Bold",
      url: montserratBold
    },
    {
      name: "Montserrat-Regular",
      url: montserratRegular
    }
  ],
  medias: [...model$2.images, frozenDesert],
  style: {
    width: "100%",
    height: "100%"
  }
};
const videos$1 = {
  raw: assets.raw,
  roast: assets.roast,
  brew: assets.brew,
  drink: assets.drink
};
createLayerSequence(
  {
    name: "videos",
    widget: {
      uri: "widget://video"
    },
    defaultArgs: {
      duration: 4e3
    }
  },
  { src: videos$1.raw },
  { src: videos$1.roast },
  { src: videos$1.brew },
  { src: videos$1.drink }
);
const images = {
  cake1: assets.cake1,
  cake2: assets.cake2,
  cake3: assets.cake3,
  cake4: assets.cake4,
  cake5: assets.cake5,
  cake6: assets.cake6
};
createLayerSequence(
  {
    name: "images",
    widget: {
      uri: "widget://image"
    },
    defaultArgs: {
      duration: 3e3,
      transition: {
        uri: "transition://flip",
        opts: {
          duration: 1e3
        }
      }
    }
  },
  { src: images.cake2, size: "cover" },
  { src: images.cake3, size: "cover" }
);
const templates$1 = createLayerSequence(
  {
    name: "templates",
    widget: {
      uri: "widget://template"
    },
    defaultArgs: {
      duration: 5e4,
      transition: {
        uri: "transition://flip",
        opts: {
          duration: 1e3
        }
      }
    }
  },
  MenuBoardWidget
);
async function getTestDemo(resourceManager2) {
  const jsonPlaylist = {
    name: "Simple Demo",
    layers: [
      ...templates$1
    ]
  };
  return oi.fromJSON(jsonPlaylist, resourceManager2);
}
async function getTestMosaicDemo(resourceManager2) {
  const jsonPlaylist = {
    name: "Simple Demo",
    layers: [
      ...getIntro(),
      createMosaicLayout(
        {
          name: "test",
          transition: {
            uri: "transition://crossfade",
            opts: {
              duration: 1e3
            }
          },
          width: 2,
          height: 2,
          widget: {
            uri: "widget://video",
            defaultArgs: {
              duration: 5e3
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
        },
        [
          [{ widget: { src: videos$1.raw }, duration: 5e3 }],
          [{ widget: { src: videos$1.roast }, duration: 5e3 }],
          [{ widget: { src: videos$1.brew }, duration: 5e3 }],
          [{ widget: { src: videos$1.drink }, duration: 5e3 }]
        ]
      )
    ]
  };
  const playlists = await Promise.all([
    oi.fromJSON(jsonPlaylist, resourceManager2),
    oi.fromJSON(jsonPlaylist, resourceManager2),
    oi.fromJSON(jsonPlaylist, resourceManager2),
    oi.fromJSON(jsonPlaylist, resourceManager2)
  ]);
  return playlists;
}
const videos = {
  raw: assets.raw,
  roast: assets.roast,
  brew: assets.brew,
  drink: assets.drink,
  billboard: assets.billboard
};
const videoLayers = createLayerSequence(
  {
    name: "videos",
    widget: {
      uri: "widget://video"
    },
    defaultArgs: {}
  },
  { src: videos.billboard }
);
async function getVideoWallDemo(resourceManager2) {
  resourceManager2 = resourceManager2 || await initBrowserDemoCache();
  const jsonPlaylist = {
    name: "VideoWall Demo",
    layers: [
      ...getIntro(),
      createMosaicLayout(
        {
          name: "test",
          transition: {
            uri: "transition://crossfade",
            opts: {
              duration: 1e3
            }
          },
          width: 2,
          height: 2,
          widget: {
            uri: "widget://video",
            defaultArgs: {
              duration: 5e3
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
        },
        [
          [{ widget: { src: videos.raw }, duration: 5e3 }],
          [{ widget: { src: videos.roast }, duration: 5e3 }],
          [{ widget: { src: videos.brew }, duration: 5e3 }],
          [{ widget: { src: videos.drink }, duration: 5e3 }]
        ]
      ),
      ...videoLayers
    ]
  };
  const playlists = await Promise.all([
    oi.fromJSON(jsonPlaylist, resourceManager2),
    oi.fromJSON(jsonPlaylist, resourceManager2),
    oi.fromJSON(jsonPlaylist, resourceManager2),
    oi.fromJSON(jsonPlaylist, resourceManager2)
  ]);
  return playlists;
}
const blackHole = assets.blackhole;
const model = {
  article: {
    title: "GLUTTONOUS BLACK HOLE OBSERVED AT RECORD DISTANCE",
    datetime: "Wednesday 30 Nov 18:30",
    text: "Astronomers have managed to capture how a black hole first consumes a star and then ejects the remnants in a jet stream. The phenomenon is the most distant of its kind that has been observed.",
    section: "WORLD",
    img: blackHole
  }
};
const barBackground = {
  "box-shadow": "0px 0px 9px rgb(135 18 28 / 30%)",
  background: "-webkit-gradient( linear, left top, left bottom, color-stop(0%, #363636), color-stop(52%, #373737), color-stop(52%, #282727), color-stop(100%, #1a1a1a) )"
};
const template = {
  type: "group",
  style: {
    "font-family": "Montserrat-Bold, Sans-serif",
    color: "white",
    width: "100%",
    height: "100%"
  },
  components: [
    {
      type: "group",
      name: "topbar",
      style: {
        width: "100%",
        height: "10%",
        display: "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "align-items": "center",
        ...barBackground
      },
      components: [
        {
          type: "text",
          text: "NEWS",
          style: {
            "margin-left": "1em",
            width: "none",
            height: "45%",
            display: "flex",
            "justify-content": "start",
            "align-items": "center"
          }
        },
        {
          type: "group",
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "end",
            "align-items": "center"
          },
          components: [
            {
              type: "image",
              url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAAH608TDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUNFNzgzREJBMUYyMTFFM0IzRDk4Q0RDOEQ4NEU5N0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUNFNzgzRENBMUYyMTFFM0IzRDk4Q0RDOEQ4NEU5N0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQ0U3ODNEOUExRjIxMUUzQjNEOThDREM4RDg0RTk3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQ0U3ODNEQUExRjIxMUUzQjNEOThDREM4RDg0RTk3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnGuuiUAAAPKSURBVHjaYmRY954BCDiBeA4QRzNBOd9BHCD+zwSVgYF3LDAZIP4IxAIAAcQINeMhEMszQZXJgwgmJH3/YZyZIH0AAQTTAzKEEYjlgPgREH8GYl6Qyg9QCRAogtK8QDwfphOkQACImYH4L1TBW4AAgkmCwFIgtgFiDahvGFhgqoBYGIj5oRJgN7AgOeYbEHNBFYP4nCAH9UEFQBKLkPz1HCSZAOXoAnEcELdA7d4KchDMPmQAdj0TVOIDFM+EugHkLQaAAEL2CszVQkD8BYiXQcWigJgHFCfINsA0voUGjgBUnBlK/8XiFJCYMBM00BiQNME05jBgAljoLwVp9AbiBWgKfgHxayA+DPXXQ6gXQGAlEPuBnMoJDXBYZLNBNeICIIO4mKBRxwgVeIukSQ4atcgBB4vZ78gpkhEaajxQf58E4htQNg9UDuYqBoAAQo8OEAgE4mogNgbis0DcCsTrkRUg2+YHdcY6aKDMgtLroOJ+MIWwZFoBxO1AHArEa5A8D3NSCBBvBOJKIO4AOY8fGpmgBH8TiFWA+A40MdYguUQLiK/C8tkTIN4N1cAAjR8tNA0gcA2ITwHxK5BN/6HORE5KN6A2owNQCvnDhCPtaUBdYIYm/hc99NBBGTS+QC4pxRbkzGga7KHZBhR6ktDQ/Q9TB0tOW5A0pAHxQST+C6QUcRiWlEAmeUCDmgEaqSCQiWa7OhBbgtQzQQtNUPDehmYbGJiGlrRuQNV9RE57oFhfDWVvAuL7QKyIlHzgqQU59NZA3R0ExNJAnA+lg6DisOTFABCg1bJXaSCIovBuEFK6TVrBPIGFYGUTSLAQQ0Sw9RHEykIIplkhkMewFWwERREEBcHSygewTSEIosS98l05TGYSBA9Mscydnft7zsS63LFIqg9QiHl4hzSHhDyFWH29LGNGy8Zqs1p1PC2YGv+us/+E/Zjzh+GPNbItJicjfx0GJcQSnFUkIrCqX5J/Q5ea/EZWykW22QwuusPrDPXLU6niXBPpzfhv6Zf1JOSOexFgnRreR6YjhVPS66XZsTQ+QxHnRDUL1vQX1VpNpDiG62q1jHJqXJTBT17cibwJFA+k50XsLMW7EvGx7L3SOD+kWIPkfFwL6pGL9ivaOOU2azSTqcenODmiS40qVpxM7bK+dGMrkYoG3l8F6XvknbHA5fYo2ech8AWttLEdeOuX0iTdoEmMxG7mKG8MSkcnJkY6Zz3k7b/nbNt1VhnkjFQcYehNcEt03gBvrA8Rig3sJpxbRlZzFfRZ3Nigs/b+wI32WhogLFP4BrBH+xn2NA49AAAAAElFTkSuQmCC",
              style: {
                width: "10%",
                height: "60%",
                "background-size": "contain"
              }
            },
            {
              type: "text",
              binding: "article.datetime",
              style: {
                "margin-right": "1em",
                width: "none",
                height: "40%",
                display: "flex",
                "flex-direction": "row",
                "justify-content": "start",
                "align-items": "center"
              }
            }
          ]
        }
      ]
    },
    {
      type: "group",
      name: "main",
      style: {
        height: "80%",
        overflow: "hidden"
      },
      components: [
        {
          type: "image",
          binding: "article.img",
          width: 100,
          height: 100,
          style: {
            "z-index": 0,
            width: "100%",
            height: "100%"
          }
        },
        {
          type: "group",
          name: "content",
          style: {
            display: "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",
            position: "absolute",
            top: "30%",
            left: "2em",
            right: "2em",
            bottom: "2em"
          },
          components: [
            {
              type: "text",
              binding: "article.title",
              style: {
                padding: "0.3em 1em",
                height: "none",
                background: "rgba(0, 174, 239, 0.7)"
              }
            },
            {
              type: "group",
              name: "content-inner",
              style: {
                background: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                "flex-direction": "column",
                "justify-content": "center",
                "align-items": "center",
                padding: "0.5em 1em 1em 1em",
                width: "100%"
              },
              components: [
                {
                  type: "text",
                  binding: "article.section",
                  style: {
                    height: "none",
                    color: "#23b1e4",
                    "font-family": "FredokaOne-Regular, Sans-serif"
                  }
                },
                {
                  type: "text",
                  binding: "article.text",
                  style: {
                    "font-family": "Montserrat-Regular",
                    "line-height": "1.2em"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "group",
      name: "footer",
      style: {
        height: "10%",
        ...barBackground
      },
      components: [
        {
          type: "text",
          value: "SVENSKA DAGBLADET",
          width: 100,
          height: 2
        }
      ]
    }
  ]
};
const SvdWidget = {
  name: "SvdNewsWidget",
  template,
  model,
  fonts: [
    {
      name: "Montserrat-Bold",
      url: montserratBold
    },
    {
      name: "Montserrat-Regular",
      url: montserratRegular
    }
  ],
  medias: [blackHole],
  style: {
    width: "100%",
    height: "100%"
  }
};
const templates = createLayerSequence(
  {
    name: "templates",
    widget: {
      uri: "widget://template"
    },
    defaultArgs: {
      duration: 8e3,
      transition: {
        uri: "transition://side-scroll",
        opts: {
          duration: 1e3
        }
      }
    }
  },
  MenuBoardWidget,
  SvdWidget
);
async function getTemplatesDemo(resourceManager2) {
  resourceManager2 = resourceManager2 || await initBrowserDemoCache();
  const jsonPlaylist = {
    name: "Templates Demo",
    layers: [...getIntro(), ...templates]
  };
  return oi.fromJSON(jsonPlaylist, resourceManager2);
}
var style = "";
var TvFrame = "data:image/png;base64,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";
async function startDemo(demo, playlist) {
  demo.innerHTML = `
  <div style="all: revert !important;">
    <div style="display: flex; flex-wrap: wrap; flex-direction: row; justify-content: center;">    
      <div style="display: flex; position: relative; flex-direction: row; justify-content: center; line-height: 24px;">
        <div style="position: relative; background-image: url(${TvFrame}); top: -0.8em; left: 0em; width: 34em; height: 19.4em; background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
        <div id="player" style="position: absolute;width: 32em;height: 18em; background-color: #000;  font-family: Avenir, Helvetica, Arial, sans-serif;"></div>
      </div>
      <div id="demo-controls" style="position: absolute; width: 33.5em; height: 18.5em; font-family: Avenir, Helvetica, Arial, sans-serif;"></div>
    </div>
  </div>
`;
  const controls = new rl("demo-controls", {
    position: {
      bottom: "-2.3em"
    }
  });
  new il("player", playlist, { controls, controlsMaster: true });
}
async function startMosaicDemo(demo, playlists) {
  demo.innerHTML = `
  <div style="all: revert !important;">
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <div style="width: 65em; display: flex; flex-wrap: wrap; flex-direction: row; justify-content: center;line-height: 24px;">    
        <div id="player1" style="position: relative; width: 32em;margin: 0.1em; height: 18em; background-color: #000;  font-family: Avenir, Helvetica, Arial, sans-serif;"></div>
        <div id="player2" style="position: relative; width: 32em;margin: 0.1em; height: 18em; background-color: #000;  font-family: Avenir, Helvetica, Arial, sans-serif;"></div>
        <div id="player3" style="position: relative; width: 32em;margin: 0.1em; height: 18em; background-color: #000;  font-family: Avenir, Helvetica, Arial, sans-serif;"></div>
        <div id="player4" style="position: relative; width: 32em;margin: 0.1em; height: 18em; background-color: #000;  font-family: Avenir, Helvetica, Arial, sans-serif;"></div>
      </div>
      <div id="mosaic-controls" style="position: absolute; width: 64.2em; height: 30em; font-family: Avenir, Helvetica, Arial, sans-serif;"></div>
    </div>
  </div>
`;
  const controls = new rl("mosaic-controls", {
    position: {
      bottom: "-5.3em",
      width: "64.2em"
    }
  });
  new il("player1", playlists[0], {
    viewport: {
      left: 0,
      top: 0,
      width: 50,
      height: 50
    },
    controls
  });
  new il("player2", playlists[1], {
    viewport: {
      left: 50,
      top: 0,
      width: 50,
      height: 50
    },
    controls
  });
  new il("player3", playlists[2], {
    viewport: {
      left: 0,
      top: 50,
      width: 50,
      height: 50
    },
    controls
  });
  new il("player4", playlists[3], {
    viewport: {
      left: 50,
      top: 50,
      width: 50,
      height: 50
    },
    controls,
    controlsMaster: true
  });
}
export { createLayerSequence, createMosaicLayout, getComplexDemo, getIntro, getOutro, getSimpleDemo, getTemplatesDemo, getTestDemo, getTestMosaicDemo, getVideoWallDemo, initBrowserDemoCache, startDemo, startMosaicDemo };
