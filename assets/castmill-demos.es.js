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
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function isFunction(value) {
  return typeof value === "function";
}
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
var timeoutProvider = {
  setTimeout: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearTimeout: function(handle) {
    return clearTimeout(handle);
  },
  delegate: void 0
};
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    {
      throw err;
    }
  });
}
function noop() {
}
function errorContext(cb) {
  {
    cb();
  }
}
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped)
      ;
    else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
function identity(x) {
  return x;
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init4) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init4(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);
var dateTimestampProvider = {
  now: function() {
    return Date.now();
  },
  delegate: void 0
};
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state, delay) {
    return this;
  };
  return Action2;
}(Subscription);
var intervalProvider = {
  setInterval: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearInterval: function(handle) {
    return clearInterval(handle);
  },
  delegate: void 0
};
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    intervalProvider.clearInterval(id);
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state, delay) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a = this, id = _a.id, scheduler = _a.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    _this._scheduled = void 0;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});
function isScheduler(value) {
  return value && isFunction(value.schedule);
}
function last$1(arr) {
  return arr[arr.length - 1];
}
function popScheduler(args) {
  return isScheduler(last$1(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
  return typeof last$1(args) === "number" ? args.pop() : defaultValue;
}
var isArrayLike = function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
};
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
function isInteropObservable(input) {
  return isFunction(input[observable]);
}
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done)
            return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
          _a.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
function executeSchedule(parentSubscription, scheduler, work, delay, repeat2) {
  if (delay === void 0) {
    delay = 0;
  }
  if (repeat2 === void 0) {
    repeat2 = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat2) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat2) {
    return scheduleSubscription;
  }
}
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay);
    }));
  });
}
function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay));
  });
}
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator$1;
    executeSchedule(subscriber, scheduler, function() {
      iterator$1 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a;
        var value;
        var done;
        try {
          _a = iterator$1.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
    };
  });
}
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}
var EmptyError = createErrorClass(function(_super) {
  return function EmptyErrorImpl() {
    _super(this);
    this.name = "EmptyError";
    this.message = "no elements in sequence";
  };
});
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
var TimeoutError = createErrorClass(function(_super) {
  return function TimeoutErrorImpl(info) {
    if (info === void 0) {
      info = null;
    }
    _super(this);
    this.message = "Timeout has occurred";
    this.name = "TimeoutError";
    this.info = info;
  };
});
function timeout(config4, schedulerArg) {
  var _a = isValidDate(config4) ? { first: config4 } : typeof config4 === "number" ? { each: config4 } : config4, first2 = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
  if (first2 == null && each == null) {
    throw new TypeError("No timeout provided.");
  }
  return operate(function(source, subscriber) {
    var originalSourceSubscription;
    var timerSubscription;
    var lastValue = null;
    var seen = 0;
    var startTimer = function(delay) {
      timerSubscription = executeSchedule(subscriber, scheduler, function() {
        try {
          originalSourceSubscription.unsubscribe();
          innerFrom(_with({
            meta,
            lastValue,
            seen
          })).subscribe(subscriber);
        } catch (err) {
          subscriber.error(err);
        }
      }, delay);
    };
    originalSourceSubscription = source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, void 0, void 0, function() {
      if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      }
      lastValue = null;
    }));
    !seen && startTimer(first2 != null ? typeof first2 === "number" ? first2 : +first2 - scheduler.now() : each);
  });
}
function timeoutErrorFactory(info) {
  throw new TimeoutError(info);
}
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}
var isArray$1 = Array.isArray;
function callOrApply(fn, args) {
  return isArray$1(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return map(function(args) {
    return callOrApply(fn, args);
  });
}
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = function() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };
  var doInnerSub = function(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, void 0, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function() {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          };
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a, i) {
      return map(function(b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  });
}
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  return mergeMap(identity, concurrent);
}
function concatAll() {
  return mergeAll(1);
}
function concat() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return concatAll()(from(args, popScheduler(args)));
}
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction(options)) {
    resultSelector = options;
    options = void 0;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
  }
  var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler, options);
    };
  }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
  if (!add) {
    if (isArrayLike(target)) {
      return mergeMap(function(subTarget) {
        return fromEvent(subTarget, eventName, options);
      })(innerFrom(target));
    }
  }
  if (!add) {
    throw new TypeError("Invalid event target");
  }
  return new Observable(function(subscriber) {
    var handler = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return subscriber.next(1 < args.length ? args : args[0]);
    };
    add(handler);
    return function() {
      return remove(handler);
    };
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler);
    };
  };
}
function isNodeStyleEventEmitter(target) {
  return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
  return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
function timer$1(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
function merge() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var concurrent = popNumber(args, Infinity);
  var sources = args;
  return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
var NEVER = new Observable(noop);
var isArray = Array.isArray;
function argsOrArgArray(args) {
  return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
function filter(predicate, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}
function race() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  sources = argsOrArgArray(sources);
  return sources.length === 1 ? innerFrom(sources[0]) : new Observable(raceInit(sources));
}
function raceInit(sources) {
  return function(subscriber) {
    var subscriptions = [];
    var _loop_1 = function(i2) {
      subscriptions.push(innerFrom(sources[i2]).subscribe(createOperatorSubscriber(subscriber, function(value) {
        if (subscriptions) {
          for (var s = 0; s < subscriptions.length; s++) {
            s !== i2 && subscriptions[s].unsubscribe();
          }
          subscriptions = null;
        }
        subscriber.next(value);
      })));
    };
    for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
      _loop_1(i);
    }
  };
}
function catchError(selector3) {
  return operate(function(source, subscriber) {
    var innerSub = null;
    var syncUnsub = false;
    var handledResult;
    innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
      handledResult = innerFrom(selector3(err, catchError(selector3)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
  return function(source, subscriber) {
    var hasState = hasSeed;
    var state = seed;
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var i = index++;
      state = hasState ? accumulator(state, value, i) : (hasState = true, value);
      emitOnNext && subscriber.next(state);
    }, emitBeforeComplete && function() {
      hasState && subscriber.next(state);
      subscriber.complete();
    }));
  };
}
function reduce(accumulator, seed) {
  return operate(scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}
function concatMap(project, resultSelector) {
  return isFunction(resultSelector) ? mergeMap(project, resultSelector, 1) : mergeMap(project, 1);
}
function defaultIfEmpty(defaultValue) {
  return operate(function(source, subscriber) {
    var hasValue = false;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      hasValue = true;
      subscriber.next(value);
    }, function() {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }
      subscriber.complete();
    }));
  });
}
function take(count) {
  return count <= 0 ? function() {
    return EMPTY;
  } : operate(function(source, subscriber) {
    var seen = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}
function throwIfEmpty(errorFactory) {
  if (errorFactory === void 0) {
    errorFactory = defaultErrorFactory;
  }
  return operate(function(source, subscriber) {
    var hasValue = false;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      hasValue = true;
      subscriber.next(value);
    }, function() {
      return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
    }));
  });
}
function defaultErrorFactory() {
  return new EmptyError();
}
function finalize(callback) {
  return operate(function(source, subscriber) {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}
function first(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function(source) {
    return source.pipe(predicate ? filter(function(v, i) {
      return predicate(v, i, source);
    }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
      return new EmptyError();
    }));
  };
}
function takeLast(count) {
  return count <= 0 ? function() {
    return EMPTY;
  } : operate(function(source, subscriber) {
    var buffer = [];
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      buffer.push(value);
      count < buffer.length && buffer.shift();
    }, function() {
      var e_1, _a;
      try {
        for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
          var value = buffer_1_1.value;
          subscriber.next(value);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return))
            _a.call(buffer_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      subscriber.complete();
    }, void 0, function() {
      buffer = null;
    }));
  });
}
function last(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function(source) {
    return source.pipe(predicate ? filter(function(v, i) {
      return predicate(v, i, source);
    }) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
      return new EmptyError();
    }));
  };
}
function max(comparer) {
  return reduce(isFunction(comparer) ? function(x, y) {
    return comparer(x, y) > 0 ? x : y;
  } : function(x, y) {
    return x > y ? x : y;
  });
}
function repeat(countOrConfig) {
  var _a;
  var count = Infinity;
  var delay;
  if (countOrConfig != null) {
    if (typeof countOrConfig === "object") {
      _a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay;
    } else {
      count = countOrConfig;
    }
  }
  return count <= 0 ? function() {
    return EMPTY;
  } : operate(function(source, subscriber) {
    var soFar = 0;
    var sourceSub;
    var resubscribe = function() {
      sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
      sourceSub = null;
      if (delay != null) {
        var notifier = typeof delay === "number" ? timer$1(delay) : innerFrom(delay(soFar));
        var notifierSubscriber_1 = createOperatorSubscriber(subscriber, function() {
          notifierSubscriber_1.unsubscribe();
          subscribeToSource();
        });
        notifier.subscribe(notifierSubscriber_1);
      } else {
        subscribeToSource();
      }
    };
    var subscribeToSource = function() {
      var syncUnsub = false;
      sourceSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, function() {
        if (++soFar < count) {
          if (sourceSub) {
            resubscribe();
          } else {
            syncUnsub = true;
          }
        } else {
          subscriber.complete();
        }
      }));
      if (syncUnsub) {
        resubscribe();
      }
    };
    subscribeToSource();
  });
}
function share(options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.connector, connector = _a === void 0 ? function() {
    return new Subject();
  } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
  return function(wrapperSource) {
    var connection = null;
    var resetConnection = null;
    var subject = null;
    var refCount = 0;
    var hasCompleted = false;
    var hasErrored = false;
    var cancelReset = function() {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = null;
    };
    var reset = function() {
      cancelReset();
      connection = subject = null;
      hasCompleted = hasErrored = false;
    };
    var resetAndUnsubscribe = function() {
      var conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return operate(function(source, subscriber) {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(function() {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection) {
        connection = new SafeSubscriber({
          next: function(value) {
            return dest.next(value);
          },
          error: function(err) {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: function() {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        from(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (on === true) {
    reset();
    return null;
  }
  if (on === false) {
    return null;
  }
  return on.apply(void 0, __spreadArray([], __read(args))).pipe(take(1)).subscribe(function() {
    return reset();
  });
}
function switchMap(project, resultSelector) {
  return operate(function(source, subscriber) {
    var innerSubscriber = null;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      return isComplete && !innerSubscriber && subscriber.complete();
    };
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      var innerIndex = 0;
      var outerIndex = index++;
      innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function() {
        innerSubscriber = null;
        checkComplete();
      }));
    }, function() {
      isComplete = true;
      checkComplete();
    }));
  });
}
function takeUntil(notifier) {
  return operate(function(source, subscriber) {
    innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function() {
      return subscriber.complete();
    }, noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
function takeWhile(predicate, inclusive) {
  if (inclusive === void 0) {
    inclusive = false;
  }
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var result = predicate(value, index++);
      (result || inclusive) && subscriber.next(value);
      !result && subscriber.complete();
    }));
  });
}
function tap(observerOrNext, error, complete) {
  var tapObserver = isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
  return tapObserver ? operate(function(source, subscriber) {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    var isUnsub = true;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var _a2;
      (_a2 = tapObserver.next) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, value);
      subscriber.next(value);
    }, function() {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.complete) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
      subscriber.complete();
    }, function(err) {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.error) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, err);
      subscriber.error(err);
    }, function() {
      var _a2, _b;
      if (isUnsub) {
        (_a2 = tapObserver.unsubscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : identity;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.10.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, _defaults = {
  duration: 0.5,
  overwrite: false,
  delay: 0
}, _suppressOverwrites, _bigNum$1 = 1e8, _tinyNum = 1 / _bigNum$1, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString2(value) {
  return typeof value === "string";
}, _isFunction = function _isFunction2(value) {
  return typeof value === "function";
}, _isNumber = function _isNumber2(value) {
  return typeof value === "number";
}, _isUndefined = function _isUndefined2(value) {
  return typeof value === "undefined";
}, _isObject = function _isObject2(value) {
  return typeof value === "object";
}, _isNotFalse = function _isNotFalse2(value) {
  return value !== false;
}, _windowExists$1 = function _windowExists() {
  return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString2(value) {
  return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
}, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win$1, _coreInitted, _doc$1, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin2(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn2(message, suppress) {
  return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal2(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc2() {
  return 0;
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness2(targets) {
  var target = targets[0], harnessPlugin, i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);
  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    i = _harnessPlugins.length;
    while (i-- && !_harnessPlugins[i].targetTest(target)) {
    }
    harnessPlugin = _harnessPlugins[i];
  }
  i = targets.length;
  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }
  return targets;
}, _getCache = function _getCache2(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty2(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName2(names, func) {
  return (names = names.split(",")).forEach(func) || names;
}, _round = function _round2(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
}, _roundPrecise = function _roundPrecise2(value) {
  return Math.round(value * 1e7) / 1e7 || 0;
}, _parseRelative = function _parseRelative2(start, value) {
  var operator = value.charAt(0), end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
  var l = toFind.length, i = 0;
  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
  }
  return i < l;
}, _lazyRender = function _lazyRender2() {
  var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
  _lazyLookup = {};
  _lazyTweens.length = 0;
  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
}, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender();
}, _numericIfPossible = function _numericIfPossible2(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough2(p) {
  return p;
}, _setDefaults = function _setDefaults2(obj, defaults2) {
  for (var p in defaults2) {
    p in obj || (obj[p] = defaults2[p]);
  }
  return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
  return function(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
    }
  };
}, _merge = function _merge2(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }
  return base;
}, _mergeDeep = function _mergeDeep2(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }
  return base;
}, _copyExcluding = function _copyExcluding2(obj, excluding) {
  var copy = {}, p;
  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }
  return copy;
}, _inheritDefaults = function _inheritDefaults2(vars) {
  var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }
  return vars;
}, _arraysMatch = function _arraysMatch2(a1, a2) {
  var i = a1.length, match = i === a2.length;
  while (match && i-- && a1[i] === a2[i]) {
  }
  return i < 0;
}, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }
  if (lastProp === void 0) {
    lastProp = "_last";
  }
  var prev = parent[lastProp], t;
  if (sortBy) {
    t = child[sortBy];
    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }
  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }
  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }
  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
}, _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }
  if (lastProp === void 0) {
    lastProp = "_last";
  }
  var prev = child._prev, next = child._next;
  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }
  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }
  child._next = child._prev = child.parent = null;
}, _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
}, _uncache = function _uncache2(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    var a = animation;
    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }
  return animation;
}, _recacheAncestors = function _recacheAncestors2(animation) {
  var parent = animation.parent;
  while (parent && parent.parent) {
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }
  return animation;
}, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, _animationCycle = function _animationCycle2(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd2(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
  var parent = animation._dp;
  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
    _setEnd(animation);
    parent._dirty || _uncache(parent, animation);
  }
  return animation;
}, _postAddChecks = function _postAddChecks2(timeline2, child) {
  var t;
  if (child._time || child._initted && !child._dur) {
    t = _parentToChildTotalTime(timeline2.rawTime(), child);
    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  }
  if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
    if (timeline2._dur < timeline2.duration()) {
      t = timeline2;
      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime);
        t = t._dp;
      }
    }
    timeline2._zTime = -_tinyNum;
  }
}, _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
  _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
  _isFromOrFromStart(child) || (timeline2._recent = child);
  skipChecks || _postAddChecks(timeline2, child);
  return timeline2;
}, _scrollTrigger = function _scrollTrigger2(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween2(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);
  if (!tween._initted) {
    return 1;
  }
  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);
    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
}, _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
  if (repeatDelay && tween._repeat) {
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }
  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      return;
    }
    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
    suppressEvents || (suppressEvents = totalTime && !prevIteration);
    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);
      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
}, _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
  var child;
  if (time > prevTime) {
    child = animation._first;
    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }
      child = child._next;
    }
  } else {
    child = animation._last;
    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }
      child = child._prev;
    }
  }
}, _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
  var repeat2 = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat2 ? dur : repeat2 < 0 ? 1e10 : _roundPrecise(dur * (repeat2 + 1) + animation._rDelay * repeat2);
  totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
  var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum$1 ? recent.endTime(false) : animation._dur, i, offset, isPercent;
  if (_isString(position) && (isNaN(position) || position in labels)) {
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");
    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }
    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }
    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }
    return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }
  return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType2(type, params, timeline2) {
  var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline2;
  if (type) {
    irVars = vars;
    parent = timeline2;
    while (parent && !("immediateRender" in irVars)) {
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }
    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
  }
  return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn2(value, func) {
  return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp2(min, max2, value) {
  return value < min ? min : value > max2 ? max2 : value;
}, getUnit = function getUnit2(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
}, clamp = function clamp2(min, max2, value) {
  return _conditionalReturn(value, function(v) {
    return _clamp(min, max2, v);
  });
}, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win$1;
}, _flatten = function _flatten2(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }
  return ar.forEach(function(value) {
    var _accumulator;
    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
}, toArray = function toArray2(value, scope, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc$1).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
}, selector = function selector2(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function(v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc$1.createElement("div") : value);
  };
}, shuffle = function shuffle2(a) {
  return a.sort(function() {
    return 0.5 - Math.random();
  });
}, distribute = function distribute2(v) {
  if (_isFunction(v)) {
    return v;
  }
  var vars = _isObject(v) ? v : {
    each: v
  }, ease = _parseEase(vars.ease), from2 = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from2 > 0 && from2 < 1, ratios = isNaN(from2) || isDecimal, axis = vars.axis, ratioX = from2, ratioY = from2;
  if (_isString(from2)) {
    ratioX = ratioY = {
      center: 0.5,
      edges: 0.5,
      end: 1
    }[from2] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from2[0];
    ratioY = from2[1];
  }
  return function(i, target, a) {
    var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max2, min, wrapAt;
    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$1])[1];
      if (!wrapAt) {
        max2 = -_bigNum$1;
        while (max2 < (max2 = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
        }
        wrapAt--;
      }
      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from2 % wrapAt;
      originY = wrapAt === _bigNum$1 ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from2 / wrapAt | 0;
      max2 = 0;
      min = _bigNum$1;
      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max2 && (max2 = d);
        d < min && (min = d);
      }
      from2 === "random" && shuffle(distances);
      distances.max = max2 - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from2 === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0;
      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }
    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
  };
}, _roundModifier = function _roundModifier2(v) {
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
  return function(raw) {
    var n = Math.round(parseFloat(raw) / v) * v * p;
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
  };
}, snap = function snap2(snapTo, value) {
  var isArray2 = _isArray(snapTo), radius, is2D;
  if (!isArray2 && _isObject(snapTo)) {
    radius = isArray2 = snapTo.radius || _bigNum$1;
    if (snapTo.values) {
      snapTo = toArray(snapTo.values);
      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius;
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }
  return _conditionalReturn(value, !isArray2 ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function(raw) {
    var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum$1, closest = 0, i = snapTo.length, dx, dy;
    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }
      if (dx < min) {
        min = dx;
        closest = i;
      }
    }
    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
}, random = function random2(min, max2, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max2 : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max2 - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
}, pipe = function pipe2() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }
  return function(value) {
    return functions.reduce(function(v, f) {
      return f(v);
    }, value);
  };
}, unitize = function unitize2(func, unit) {
  return function(value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
}, normalize = function normalize2(min, max2, value) {
  return mapRange(min, max2, 0, 1, value);
}, _wrapArray = function _wrapArray2(a, wrapper, value) {
  return _conditionalReturn(value, function(index) {
    return a[~~wrapper(index)];
  });
}, wrap = function wrap2(min, max2, value) {
  var range = max2 - min;
  return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max2) : _conditionalReturn(value, function(value2) {
    return (range + (value2 - min) % range) % range + min;
  });
}, wrapYoyo = function wrapYoyo2(min, max2, value) {
  var range = max2 - min, total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max2) : _conditionalReturn(value, function(value2) {
    value2 = (total + (value2 - min) % total) % total || 0;
    return min + (value2 > range ? total - value2 : value2);
  });
}, _replaceRandom = function _replaceRandom2(value) {
  var prev = 0, s = "", i, nums, end, isArray2;
  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray2 = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray2 ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray2 ? nums : +nums[0], isArray2 ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }
  return s + value.substr(prev, value.length - prev);
}, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin, outRange = outMax - outMin;
  return _conditionalReturn(value, function(value2) {
    return outMin + ((value2 - inMin) / inRange * outRange || 0);
  });
}, interpolate = function interpolate2(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function(p2) {
    return (1 - p2) * start + p2 * end;
  };
  if (!func) {
    var isString = _isString(start), master = {}, p, i, interpolators, l, il;
    progress === true && (mutate = 1) && (progress = null);
    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;
      for (i = 1; i < l; i++) {
        interpolators.push(interpolate2(start[i - 1], start[i]));
      }
      l--;
      func = function func2(p2) {
        p2 *= l;
        var i2 = Math.min(il, ~~p2);
        return interpolators[i2](p2 - i2);
      };
      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }
    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }
      func = function func2(p2) {
        return _renderPropTweens(p2, master) || (isString ? start.p : start);
      };
    }
  }
  return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
  var labels = timeline2.labels, min = _bigNum$1, p, distance, label;
  for (p in labels) {
    distance = labels[p] - fromTime;
    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }
  return label;
}, _callback = function _callback2(animation, type, executeLazyFirst) {
  var v = animation.vars, callback = v[type], params, scope;
  if (!callback) {
    return;
  }
  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender();
  return params ? callback.apply(scope, params) : callback.call(scope);
}, _interrupt = function _interrupt2(animation) {
  _removeFromParent(animation);
  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
}, _quickTween, _createPlugin = function _createPlugin2(config4) {
  config4 = !config4.name && config4["default"] || config4;
  var name = config4.name, isFunc = _isFunction(config4), Plugin = name && !isFunc && config4.init ? function() {
    this._props = [];
  } : config4, instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  }, statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };
  _wake();
  if (config4 !== Plugin) {
    if (_plugins[name]) {
      return;
    }
    _setDefaults(Plugin, _setDefaults(_copyExcluding(config4, instanceDefaults), statics));
    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config4, statics)));
    _plugins[Plugin.prop = name] = Plugin;
    if (config4.targetTest) {
      _harnessPlugins.push(Plugin);
      _reservedProps[name] = 1;
    }
    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
  }
  _addGlobal(name, Plugin);
  config4.register && config4.register(gsap, Plugin, PropTween);
}, _255 = 255, _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
}, _hue = function _hue2(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
}, splitColor = function splitColor2(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max2, min, d, wasHSL;
  if (!a) {
    if (v.substr(-1) === ",") {
      v = v.substr(0, v.length - 1);
    }
    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }
      if (v.length === 9) {
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);
      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1);
        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }
    a = a.map(Number);
  }
  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max2 = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max2 + min) / 2;
    if (max2 === min) {
      h = s = 0;
    } else {
      d = max2 - min;
      s = l > 0.5 ? d / (2 - max2 - min) : d / (max2 + min);
      h = max2 === r ? (g - b) / d + (g < b ? 6 : 0) : max2 === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    a[0] = ~~(h + 0.5);
    a[1] = ~~(s * 100 + 0.5);
    a[2] = ~~(l * 100 + 0.5);
  }
  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
}, _colorOrderData = function _colorOrderData2(v) {
  var values = [], c = [], i = -1;
  v.split(_colorExp).forEach(function(v2) {
    var a = v2.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
}, _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
  var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
  if (!colors) {
    return s;
  }
  colors = colors.map(function(color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });
  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;
    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }
  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;
    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }
  return result + shell[l];
}, _colorExp = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }
  return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter2(a) {
  var combined = a.join(" "), toHSL;
  _colorExp.lastIndex = 0;
  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
    return true;
  }
}, _tickerActive, _ticker = function() {
  var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
    var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;
    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1e3;
      _self.time = time = time / 1e3;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }
    manual || (_id = _req(_tick2));
    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };
  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1e3 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists$1()) {
          _win$1 = _coreInitted = window;
          _doc$1 = _win$1.document || {};
          _globals.gsap = gsap;
          (_win$1.gsapVersions || (_win$1.gsapVersions = [])).push(gsap.version);
          _install(_installScope || _win$1.GreenSockGlobals || !_win$1.gsap && _win$1 || {});
          _raf = _win$1.requestAnimationFrame;
        }
        _id && _self.sleep();
        _req = _raf || function(f) {
          return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
        };
        _tickerActive = 1;
        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win$1.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum;
      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1e3 / (_fps || 240);
      _nextTime = _self.time * 1e3 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function(t, d, f, v) {
        callback(t, d, f, v);
        _self.remove(func);
      } : callback;
      _self.remove(callback);
      _listeners[prioritize ? "unshift" : "push"](func);
      _wake();
      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners
  };
  return _self;
}(), _wake = function _wake2() {
  return !_tickerActive && _ticker.wake();
}, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
  var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }
  return obj;
}, _valueInParentheses = function _valueInParentheses2(value) {
  var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString2(name) {
  var split = (name + "").split("("), ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase2(ease) {
  return function(p) {
    return 1 - ease(1 - p);
  };
}, _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
  var child = timeline2._first, ease;
  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase2(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase2(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }
    child = child._next;
  }
}, _parseEase = function _parseEase2(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut2(p) {
      return 1 - easeIn(1 - p);
    };
  }
  if (easeInOut === void 0) {
    easeInOut = function easeInOut2(p) {
      return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }
  var ease = {
    easeIn,
    easeOut,
    easeInOut
  }, lowercaseName;
  _forEachName(names, function(name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });
  return ease;
}, _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
  return function(p) {
    return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
  };
}, _configElastic = function _configElastic2(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  p2 = _2PI / p2;
  ease.config = function(amplitude2, period2) {
    return _configElastic2(type, amplitude2, period2);
  };
  return ease;
}, _configBack = function _configBack2(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }
  var easeOut = function easeOut2(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  ease.config = function(overshoot2) {
    return _configBack2(type, overshoot2);
  };
  return ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
  var power = i < 5 ? i + 1 : i;
  _insertEase(name + ",Power" + (power - 1), i ? function(p) {
    return Math.pow(p, power);
  } : function(p) {
    return p;
  }, function(p) {
    return 1 - Math.pow(1 - p, power);
  }, function(p) {
    return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
  var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
  };
  _insertEase("Bounce", function(p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function(p) {
  return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config2(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }
    var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max2 = 1 - _tinyNum;
    return function(p) {
      return ((p2 * _clamp(0, max2, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
  return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache2(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /* @__PURE__ */ function() {
  function Animation2(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;
    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }
    this._ts = 1;
    _setDuration(this, +vars.duration, 1, 1);
    this.data = vars.data;
    _tickerActive || _ticker.wake();
  }
  var _proto = Animation2.prototype;
  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }
    return this._delay;
  };
  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };
  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }
    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };
  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();
    if (!arguments.length) {
      return this._tTime;
    }
    var parent = this._dp;
    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);
      !parent._dp || parent.parent || _postAddChecks(parent, this);
      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }
        parent = parent.parent;
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }
    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      this._ts || (this._pTime = _totalTime);
      _lazySafeRender(this, _totalTime, suppressEvents);
    }
    return this;
  };
  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
  };
  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };
  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };
  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  };
  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts;
    }
    if (this._rts === value) {
      return this;
    }
    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
    this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);
    _setEnd(this);
    return _recacheAncestors(this);
  };
  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }
    if (this._ps !== value) {
      this._ps = value;
      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
        this._ts = this._act = 0;
      } else {
        _wake();
        this._ts = this._rts;
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
      }
    }
    return this;
  };
  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }
    return this._start;
  };
  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };
  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp;
    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };
  _proto.globalTime = function globalTime(rawTime) {
    var animation = this, time = arguments.length ? rawTime : animation.rawTime();
    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }
    return time;
  };
  _proto.repeat = function repeat2(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }
    return this._repeat === -2 ? Infinity : this._repeat;
  };
  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;
      _onUpdateTotalDuration(this);
      return time ? this.time(time) : this;
    }
    return this._rDelay;
  };
  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }
    return this._yoyo;
  };
  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };
  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };
  _proto.play = function play(from2, suppressEvents) {
    from2 != null && this.seek(from2, suppressEvents);
    return this.reversed(false).paused(false);
  };
  _proto.reverse = function reverse(from2, suppressEvents) {
    from2 != null && this.seek(from2 || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };
  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };
  _proto.resume = function resume() {
    return this.paused(false);
  };
  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
      return this;
    }
    return this._rts < 0;
  };
  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };
  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp, start = this._start, rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };
  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;
    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }
      return this;
    }
    return vars[type];
  };
  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function(resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
        var _then = self.then;
        self.then = null;
        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };
      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };
  _proto.kill = function kill() {
    _interrupt(this);
  };
  return Animation2;
}();
_setDefaults(Animation.prototype, {
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
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
var Timeline = /* @__PURE__ */ function(_Animation) {
  _inheritsLoose(Timeline2, _Animation);
  function Timeline2(vars, position) {
    var _this;
    if (vars === void 0) {
      vars = {};
    }
    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }
  var _proto2 = Timeline2.prototype;
  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);
    return this;
  };
  _proto2.from = function from2(targets, vars, position) {
    _createTweenType(1, arguments, this);
    return this;
  };
  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);
    return this;
  };
  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };
  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  };
  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };
  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }
      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;
      if (crossingStart) {
        dur || (prevTime = this._zTime);
        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }
      if (this._repeat) {
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime;
          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            return this;
          }
          dur = this._dur;
          tDur = this._tDur;
          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -1e-4;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }
          this._lock = 0;
          if (!this._ts && !prevPaused) {
            return this;
          }
          _propagateYoyoEase(this, isYoyo);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }
      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale;
      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0;
      }
      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      if (time >= prevTime && totalTime >= 0) {
        child = this._first;
        while (child) {
          next = child._next;
          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum);
              break;
            }
          }
          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time;
        while (child) {
          next = child._prev;
          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
              break;
            }
          }
          child = next;
        }
      }
      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
        if (this._ts) {
          this._start = prevStart;
          _setEnd(this);
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
        if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
          if (!this._lock) {
            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
              _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }
      }
    }
    return this;
  };
  _proto2.add = function add(child, position) {
    var _this2 = this;
    _isNumber(position) || (position = _parsePosition(this, position, child));
    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function(obj) {
          return _this2.add(obj, position);
        });
        return this;
      }
      if (_isString(child)) {
        return this.addLabel(child, position);
      }
      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }
    return this !== child ? _addToTimeline(this, child, position) : this;
  };
  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }
    if (tweens === void 0) {
      tweens = true;
    }
    if (timelines === void 0) {
      timelines = true;
    }
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum$1;
    }
    var a = [], child = this._first;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }
      child = child._next;
    }
    return a;
  };
  _proto2.getById = function getById2(id) {
    var animations = this.getChildren(1, 1, 1), i = animations.length;
    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };
  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }
    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }
    _removeLinkedListItem(this, child);
    if (child === this._recent) {
      this._recent = this._last;
    }
    return _uncache(this);
  };
  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }
    this._forcing = 1;
    if (!this._dp && this._ts) {
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }
    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
    this._forcing = 0;
    return this;
  };
  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };
  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };
  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };
  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);
    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }
      child = child._next;
    }
  };
  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }
    return this;
  };
  _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
    var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }
      child = child._next;
    }
    return a;
  };
  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};
    var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();
        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }
        _onStart && _onStart.apply(tween, onStartParams || []);
      }
    }, vars));
    return immediateRender ? tween.render(0) : tween;
  };
  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };
  _proto2.recent = function recent() {
    return this._recent;
  };
  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };
  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };
  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };
  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }
    var child = this._first, labels = this.labels, p;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }
      child = child._next;
    }
    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }
    return _uncache(this);
  };
  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;
    while (child) {
      child.invalidate();
      child = child._next;
    }
    return _Animation.prototype.invalidate.call(this);
  };
  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }
    var child = this._first, next;
    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }
    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };
  _proto2.totalDuration = function totalDuration(value) {
    var max2 = 0, self = this, child = self._last, prevStart = _bigNum$1, prev, start, parent;
    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }
    if (self._dirty) {
      parent = self.parent;
      while (child) {
        prev = child._prev;
        child._dirty && child.totalDuration();
        start = child._start;
        if (start > prevStart && self._sort && child._ts && !self._lock) {
          self._lock = 1;
          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }
        if (start < 0 && child._ts) {
          max2 -= start;
          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }
          self.shiftChildren(-start, false, -Infinity);
          prevStart = 0;
        }
        child._end > max2 && child._ts && (max2 = child._end);
        child = prev;
      }
      _setDuration(self, self === _globalTimeline && self._time > max2 ? self._time : max2, 1, 1);
      self._dirty = 0;
    }
    return self._tDur;
  };
  Timeline2.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
      _lastRenderedFrame = _ticker.frame;
    }
    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) {
        if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }
          child || _ticker.sleep();
        }
      }
    }
  };
  return Timeline2;
}(Animation);
_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }
  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop);
    start = a[0];
    end = a[1];
  }
  startNums = start.match(_complexStringNumExp) || [];
  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);
    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }
    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0;
      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }
  pt.c = index < end.length ? end.substring(index, end.length) : "";
  pt.fp = funcParam;
  if (_relExp.test(end) || hasRandom) {
    pt.e = 0;
  }
  this._pt = pt;
  return pt;
}, _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
      if (pt || pt === 0) {
        end = pt;
      }
    }
  }
  if (parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }
    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
}, _processVars = function _processVars2(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }
  var copy = {}, p;
  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }
  return copy;
}, _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;
  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
      i = plugin._props.length;
      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }
  return plugin;
}, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time) {
  var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
  if (yoyoEase && tween._yoyo && !tween._repeat) {
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }
  tween._from = !tl && !!vars.runBackwards;
  if (!tl || keyframes && !vars.stagger) {
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop];
    cleanVars = _copyExcluding(vars, _reservedProps);
    if (prevStartAt) {
      _removeFromParent(prevStartAt.render(-1, true));
      prevStartAt._lazy = 0;
    }
    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate,
        onUpdateParams,
        callbackScope,
        stagger: 0
      }, startAt)));
      time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true);
      if (immediateRender) {
        time > 0 && !autoRevert && (tween._startAt = 0);
        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return;
        }
      } else if (autoRevert === false) {
        tween._startAt = 0;
      }
    } else if (runBackwards && dur) {
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false);
        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender,
          stagger: 0,
          parent
        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars);
        _removeFromParent(tween._startAt = Tween.set(targets, p));
        time < 0 && tween._startAt.render(-1, true);
        tween._zTime = time;
        if (!immediateRender) {
          _initTween2(tween._startAt, _tinyNum);
        } else if (!time) {
          return;
        }
      }
    }
    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;
    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
      index = fullTargets === targets ? i : fullTargets.indexOf(target);
      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
        plugin._props.forEach(function(name) {
          ptLookup[name] = pt;
        });
        plugin.priority && (hasPriority = 1);
      }
      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }
      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;
        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
        overwritten = !tween.parent;
        _overwritingTween = 0;
      }
      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }
    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween);
  }
  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten;
  keyframes && time <= 0 && tl.render(_bigNum$1, true, true);
}, _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, lookup, i;
  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;
    while (i--) {
      pt = lookup[i][property];
      if (pt && pt.d && pt.d._pt) {
        pt = pt.d._pt;
        while (pt && pt.p !== property) {
          pt = pt._next;
        }
      }
      if (!pt) {
        _forceAllPropTweens = 1;
        tween.vars[property] = "+=0";
        _initTween(tween, time);
        _forceAllPropTweens = 0;
        return 1;
      }
      ptCache.push(pt);
    }
  }
  i = ptCache.length;
  while (i--) {
    pt = ptCache[i];
    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    pt.e && (pt.e = _round(value) + getUnit(pt.e));
    pt.b && (pt.b = pt.s + getUnit(pt.b));
  }
}, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
  if (!propertyAliases) {
    return vars;
  }
  copy = _merge({}, vars);
  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;
      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }
  return copy;
}, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut", p, a;
  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []);
    obj.forEach(function(value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
}, _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
  return _staggerPropsToSkip[name] = 1;
});
var Tween = /* @__PURE__ */ function(_Animation2) {
  _inheritsLoose(Tween2, _Animation2);
  function Tween2(targets, vars, position, skipInherit) {
    var _this3;
    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }
    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = [];
    _this3._overwrite = overwrite;
    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults2 || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;
      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);
        if (_isObject(stagger)) {
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }
        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i];
          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
          if (!stagger && l === 1 && copy.delay) {
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }
          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }
        tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));
        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0, a, kf, v;
        if (_isArray(keyframes)) {
          keyframes.forEach(function(frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          copy = {};
          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }
          for (p in copy) {
            a = copy[p].sort(function(a2, b) {
              return a2.t - b.t;
            });
            time = 0;
            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }
          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          });
        }
      }
      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0;
    }
    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);
      _globalTimeline.killTweensOf(parsedTargets);
      _overwritingTween = 0;
    }
    _addToTimeline(parent, _assertThisInitialized(_this3), position);
    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);
    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum;
      _this3.render(Math.max(0, -delay));
    }
    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }
  var _proto3 = Tween2.prototype;
  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      time = tTime;
      timeline2 = this.timeline;
      if (this._repeat) {
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        isYoyo = this._yoyo && iteration & 1;
        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        if (time === prevTime && !force && this._initted) {
          this._tTime = tTime;
          return this;
        }
        if (iteration !== prevIteration) {
          timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1;
            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }
      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0;
          return this;
        }
        if (prevTime !== this._time) {
          return this;
        }
        if (dur !== this._dur) {
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._tTime = tTime;
      this._time = time;
      if (!this._act && this._ts) {
        this._act = 1;
        this._lazy = 0;
      }
      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }
      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      pt = this._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
        _callback(this, "onUpdate");
      }
      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto3.targets = function targets() {
    return this._targets;
  };
  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };
  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur);
    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative);
    }
    _alignPlayhead(this, 0);
    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };
  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }
    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }
    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
      return this;
    }
    var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }
    overwrittenProps = this._op = this._op || [];
    if (vars !== "all") {
      if (_isString(vars)) {
        p = {};
        _forEachName(vars, function(name) {
          return p[name] = 1;
        });
        vars = p;
      }
      vars = _addAliasesToVars(parsedTargets, vars);
    }
    i = parsedTargets.length;
    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];
        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }
        for (p in props) {
          pt = curLookup && curLookup[p];
          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }
            delete curLookup[p];
          }
          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }
    this._initted && !this._pt && firstPT && _interrupt(this);
    return this;
  };
  Tween2.to = function to(targets, vars) {
    return new Tween2(targets, vars, arguments[2]);
  };
  Tween2.from = function from2(targets, vars) {
    return _createTweenType(1, arguments);
  };
  Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween2(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };
  Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };
  Tween2.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween2(targets, vars);
  };
  Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };
  return Tween2;
}(Animation);
_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
  Tween[name] = function() {
    var tl = new Timeline(), params = _slice.call(arguments, 0);
    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
var _setterPlain = function _setterPlain2(target, property, value) {
  return target[property] = value;
}, _setterFunc = function _setterFunc2(target, property, value) {
  return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
  return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute2(target, property, value) {
  return target.setAttribute(property, value);
}, _getSetter = function _getSetter2(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
}, _renderBoolean = function _renderBoolean2(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString2(ratio, data) {
  var pt = data._pt, s = "";
  if (!ratio && data.b) {
    s = data.b;
  } else if (ratio === 1 && data.e) {
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
      pt = pt._next;
    }
    s += data.c;
  }
  data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens2(ratio, data) {
  var pt = data._pt;
  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
}, _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
  var pt = this._pt, next;
  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
}, _killPropTweensOf = function _killPropTweensOf2(property) {
  var pt = this._pt, hasNonDependentRemaining, next;
  while (pt) {
    next = pt._next;
    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }
    pt = next;
  }
  return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
  var pt = parent._pt, next, pt2, first2, last2;
  while (pt) {
    next = pt._next;
    pt2 = first2;
    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }
    if (pt._prev = pt2 ? pt2._prev : last2) {
      pt._prev._next = pt;
    } else {
      first2 = pt;
    }
    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last2 = pt;
    }
    pt = next;
  }
  parent._pt = first2;
};
var PropTween = /* @__PURE__ */ function() {
  function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;
    if (next) {
      next._prev = this;
    }
  }
  var _proto4 = PropTween2.prototype;
  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set;
    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target;
    this.tween = tween;
  };
  return PropTween2;
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
  return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args.forEach(function(config4) {
      return _createPlugin(config4);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]);
    var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
    unit === "native" && (unit = "");
    return !target ? target : !property ? function(property2, unit2, uncache2) {
      return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);
    if (target.length > 1) {
      var setters = target.map(function(t) {
        return gsap.quickSetter(t, property, unit);
      }), l = setters.length;
      return function(value) {
        var i = l;
        while (i--) {
          setters[i](value);
        }
      };
    }
    target = target[0] || {};
    var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
      var p2 = new Plugin();
      _quickTween._pt = 0;
      p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p2.render(1, p2);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);
    return Plugin ? setter : function(value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge22;
    var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };
    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config3(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function(pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });
    _effects[name] = function(targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
    };
    if (extendTimeline) {
      Timeline.prototype[name] = function(targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }
    var tl = new Timeline(vars), child, next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
    _globalTimeline.remove(tl);
    tl._dp = 0;
    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;
    while (child) {
      next = child._next;
      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }
      child = next;
    }
    _addToTimeline(_globalTimeline, tl, 0);
    return tl;
  },
  utils: {
    wrap,
    wrapYoyo,
    distribute,
    random,
    snap,
    normalize,
    getUnit,
    clamp,
    splitColor,
    toArray,
    selector,
    mapRange,
    pipe,
    unitize,
    interpolate,
    shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween,
    globals: _addGlobal,
    Tween,
    Timeline,
    Animation,
    getCache: _getCache,
    _removeLinkedListItem,
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
  return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
  duration: 0
});
var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
  var pt = plugin._pt;
  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }
  return pt;
}, _addModifiers = function _addModifiers2(tween, modifiers) {
  var targets = tween._targets, p, i, pt;
  for (p in modifiers) {
    i = targets.length;
    while (i--) {
      pt = tween._ptLookup[i][p];
      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          pt = _getPluginPropTween(pt, p);
        }
        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
}, _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
  return {
    name,
    rawVars: 1,
    init: function init4(target, vars, tween) {
      tween._onInit = function(tween2) {
        var temp, p;
        if (_isString(vars)) {
          temp = {};
          _forEachName(vars, function(name2) {
            return temp[name2] = 1;
          });
          vars = temp;
        }
        if (modifier) {
          temp = {};
          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }
          vars = temp;
        }
        _addModifiers(tween2, vars);
      };
    }
  };
};
var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;
    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);
      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init2(target, value) {
    var i = value.length;
    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap.version = "3.10.2";
_coreReady = 1;
_windowExists$1() && _wake();
_easeMap.Power0;
_easeMap.Power1;
_easeMap.Power2;
_easeMap.Power3;
_easeMap.Power4;
_easeMap.Linear;
_easeMap.Quad;
_easeMap.Cubic;
_easeMap.Quart;
_easeMap.Quint;
_easeMap.Strong;
_easeMap.Elastic;
_easeMap.Back;
_easeMap.SteppedEase;
_easeMap.Bounce;
_easeMap.Sine;
_easeMap.Expo;
_easeMap.Circ;
/*!
 * CSSPlugin 3.10.2
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, _windowExists2 = function _windowExists3() {
  return typeof window !== "undefined";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
}, _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
  return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp2(target, property, value) {
  return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform2(target, property, value) {
  return target._gsap[property] = value;
}, _setterScale = function _setterScale2(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement2(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type);
  return e.style ? e : _doc.createElement(type);
}, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
  var e = element || _tempDiv, s = e.style, i = 5;
  if (property in s && !preferPrefix) {
    return property;
  }
  property = property.charAt(0).toUpperCase() + property.substr(1);
  while (i-- && !(_prefixes[i] + property in s)) {
  }
  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore2() {
  if (_windowExists2() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
}, _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
  _docElement.appendChild(svg);
  svg.appendChild(this);
  this.style.display = "block";
  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox;
      this.getBBox = _getBBoxHack2;
    } catch (e) {
    }
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }
  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }
  _docElement.removeChild(svg);
  this.style.cssText = oldCSS;
  return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
  var i = attributesArray.length;
  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
}, _getBBox = function _getBBox2(target) {
  var bounds;
  try {
    bounds = target.getBBox();
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }
  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
}, _isSVG = function _isSVG2(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, _removeProperty = function _removeProperty2(target, property) {
  if (property) {
    var style2 = target.style;
    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }
    if (style2.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        property = "-" + property;
      }
      style2.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      style2.removeAttribute(property);
    }
  }
}, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;
  plugin._props.push(property);
  return pt;
}, _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
}, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
  var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style2 = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }
  curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);
  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
  }
  style2[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }
  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }
  cache = parent._gsap;
  if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
    return _round(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style2.position = _getComputedProperty(target, "position"));
    parent === target && (style2.position = "static");
    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style2.position = "absolute";
    if (horizontal && toPercent) {
      cache = _getCache(parent);
      cache.time = _ticker.time;
      cache.width = parent[measureProperty];
    }
  }
  return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get2(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();
  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];
    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }
  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];
    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
    }
  }
  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
  if (!start || start === "none") {
    var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor");
    }
  }
  var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }
  a = [start, end];
  _colorStringFilter(a);
  start = a[0];
  end = a[1];
  startValues = start.match(_numWithUnitExp) || [];
  endValues = end.match(_numWithUnitExp) || [];
  if (endValues.length) {
    while (result = _numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }
      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _numWithUnitExp.lastIndex - endUnit.length;
        if (!endUnit) {
          endUnit = endUnit || _config.units[prop] || startUnit;
          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }
        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        }
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }
  _relExp.test(end) && (pt.e = 0);
  this._pt = pt;
  return pt;
}, _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
  var split = value.split(" "), x = split[0], y = split[1] || "50%";
  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    value = x;
    x = y;
    y = value;
  }
  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
}, _renderClearProps = function _renderClearProps2(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t, style2 = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
    if (props === "all" || props === true) {
      style2.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;
      while (--i > -1) {
        prop = props[i];
        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }
        _removeProperty(target, prop);
      }
    }
    if (clearTransforms) {
      _removeProperty(target, _transformProp);
      if (cache) {
        cache.svg && target.removeAttribute("transform");
        _parseTransform(target, 1);
        cache.uncache = 1;
      }
    }
  }
}, _specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;
      plugin._props.push(property);
      return 1;
    }
  }
}, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform2(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
  var matrixString = _getComputedProperty(target, _transformProp);
  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
}, _getMatrix = function _getMatrix2(target, force2D) {
  var cache = target._gsap || _getCache(target), style2 = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix;
    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    temp = style2.display;
    style2.display = "block";
    parent = target.parentNode;
    if (!parent || !target.offsetParent) {
      addedToDOM = 1;
      nextSibling = target.nextSibling;
      _docElement.appendChild(target);
    }
    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style2.display = temp : _removeProperty(target, "display");
    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }
  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
}, _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }
  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }
  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px";
  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }
  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform2(target, uncache) {
  var cache = target._gsap || new GSCache(target);
  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }
  var style2 = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);
  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin");
    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }
  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;
  if (matrix !== _identity2DMatrix) {
    a = matrix[0];
    b = matrix[1];
    c = matrix[2];
    d = matrix[3];
    x = a12 = matrix[4];
    y = a22 = matrix[5];
    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      }
    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      }
      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      }
      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }
      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }
      scaleX = _round(Math.sqrt(a * a + b * b + c * c));
      scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }
    if (cache.svg) {
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }
  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }
  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = _round(scaleX);
  cache.scaleY = _round(scaleY);
  cache.rotation = _round(rotation) + deg;
  cache.rotationX = _round(rotationX) + deg;
  cache.rotationY = _round(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;
  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style2[_transformOriginProp] = _firstTwoOnly(origin);
  }
  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
}, _firstTwoOnly = function _firstTwoOnly2(value) {
  return (value = value.split(" "))[0] + " " + value[1];
}, _addPxTranslate = function _addPxTranslate2(target, start, value) {
  var unit = getUnit(start);
  return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;
  _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
  var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }
  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }
  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }
  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }
  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }
  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }
  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }
  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }
  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }
  target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
  var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);
  if (skewY) {
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }
  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;
    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;
      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }
    a11 = _round(a11);
    a21 = _round(a21);
    a12 = _round(a12);
    a22 = _round(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }
  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }
  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }
  if (xPercent || yPercent) {
    temp = target.getBBox();
    tx = _round(tx + xPercent / 100 * temp.width);
    ty = _round(ty + yPercent / 100 * temp.height);
  }
  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp);
}, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
  var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
  if (isString) {
    direction = endValue.split("_")[1];
    if (direction === "short") {
      change %= cap;
      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }
    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }
  plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";
  plugin._props.push(property);
  return pt;
}, _assign = function _assign2(target, source) {
  for (var p in source) {
    target[p] = source[p];
  }
  return target;
}, _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
  var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style2 = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style2[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    _removeProperty(target, _transformProp);
    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style2[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style2[_transformProp] = startValue;
  }
  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];
    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      startUnit = getUnit(startValue);
      endUnit = getUnit(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;
      plugin._props.push(p);
    }
  }
  _assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index) {
  var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
    return index < 2 ? name + side : "border" + side + name;
  });
  _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
    var a, vars;
    if (arguments.length < 4) {
      a = props.map(function(prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }
    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function(prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});
var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init3(target, vars, tween, index, targets) {
    var props = this._props, style2 = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
    _pluginInitted || _initCore();
    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }
      endValue = vars[p];
      if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
        continue;
      }
      type = typeof endValue;
      specialProp = _specialProps[p];
      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }
      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = _replaceRandom(endValue);
      }
      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _colorExp.lastIndex = 0;
        if (!_colorExp.test(startValue)) {
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
        }
        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style2, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
          getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
        } else {
          startValue = _get(target, p);
        }
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);
        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              startNum = 0;
            }
            _addNonTweeningPT(this, style2, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }
          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }
        isTransformRelated = p in _transformProps;
        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new PropTween(this._pt, style2, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
            transformPropTween.dep = 1;
          }
          if (p === "scale") {
            this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue);
            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0;
              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
              _addNonTweeningPT(this, style2, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }
            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);
            continue;
          }
        } else if (!(p in style2)) {
          p = _checkPropPrefix(p) || p;
        }
        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style2) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0);
          endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new PropTween(this._pt, isTransformRelated ? cache : style2, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;
          if (startUnit !== endUnit && endUnit !== "%") {
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style2)) {
          if (p in target) {
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else {
            _missingPlugin(p, endValue);
            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }
        props.push(p);
      }
    }
    hasPriority && _sortPropTweensByPriority(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
  },
  core: {
    _removeProperty,
    _getMatrix
  }
};
gsap.utils.checkPrefix = _checkPropPrefix;
(function(positionAndScale, rotation, others, aliases) {
  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
    _transformProps[name] = 1;
  });
  _forEachName(rotation, function(name) {
    _config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });
  _propertyAliases[all[13]] = positionAndScale + "," + rotation;
  _forEachName(aliases, function(name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
  _config.units[name] = "px";
});
gsap.registerPlugin(CSSPlugin);
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
gsapWithCSS.core.Tween;
var playIcon = "data:image/png;base64,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";
const template = (id) => `
  <div id="playerui-${id}">
    <div id="player-${id}" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;"></div>
    <div id="play-${id}" style="
      display: flex;
      position: absolute; 
      top: 0; left: 0; right: 0; bottom: 0;
      opacity: 0.5;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      z-index: 9;
      ">
      <div style="
        background: url(${playIcon}) center / contain no-repeat;
        width: 50%;
        height: 50%;
        "></div>
    </div>
    <div id="playerui-controls-${id}" style="z-index: 10;
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
            <span id="time-${id}" style="margin:0 0.5em"></span>
            <input
                id="seek-${id}"
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
            <span id="duration-${id}" style="margin:0 0.5em"></span>
        </div>
        <div>
          <input id="loop-${id}" type="checkbox"/>
          <label>Loop</label>
        </div>
    </div>
    </div>
  </div>
`;
class PlayerUI {
  constructor(id, playlist) {
    var _a;
    this.id = id;
    this.playlist = playlist;
    this.time = 0;
    this.isPlaying = false;
    this.playing$ = new Subscription();
    this.seeking$ = new Subscription();
    this.loop = true;
    this.ui = document.createElement("div");
    this.ui.innerHTML = template(this.id);
    (_a = document.querySelector(`#${id}`)) == null ? void 0 : _a.appendChild(this.ui);
    const renderer = this.renderer = new Renderer(this.ui.querySelector(`#player-${id}`));
    this.player = new Player(this.playlist, renderer);
    this.mounted();
    this.elements = {
      play: this.ui.querySelector(`#play-${id}`),
      time: this.ui.querySelector(`#time-${id}`),
      seek: this.ui.querySelector(`#seek-${id}`),
      duration: this.ui.querySelector(`#duration-${id}`),
      loop: this.ui.querySelector(`#loop-${id}`)
    };
    this.elements.play.addEventListener("click", () => this.playStop());
    this.elements.loop.addEventListener("change", () => {
      this.loop = this.elements.loop.checked;
    });
    this.elements.seek.addEventListener("input", () => {
      this.position = parseFloat(this.elements.seek.value);
    });
    this.durationSubscription = playlist.duration().subscribe((duration) => {
      this.elements.time.textContent = this.timeFormat(this.time / 1e3);
      this.elements.seek.max = `${duration}`;
      this.elements.duration.textContent = this.timeFormat(duration / 1e3);
      this.elements.loop.checked = this.loop;
    });
    this.keyboardSubscription = fromEvent(document, "keydown").subscribe((e) => {
      if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        this.playStop();
      }
    });
  }
  destroy() {
    this.stop();
    this.ui.remove();
    this.durationSubscription.unsubscribe();
    this.keyboardSubscription.unsubscribe();
  }
  mounted() {
    var _a, _b;
    (_a = this.player) == null ? void 0 : _a.on("time", (time) => {
      this.elements.time.textContent = this.timeFormat(time / 1e3);
      this.elements.seek.value = `${time}`;
    });
    (_b = this.player) == null ? void 0 : _b.on("completed", () => {
      this.stop();
      this.position = 0;
    });
    this.playlist.seek(0);
    this.playlist.show(this.renderer).subscribe(() => void 0);
  }
  get position() {
    return this.time;
  }
  set position(value) {
    var _a;
    const time = this.time = parseInt(`${value}`, 10);
    this.elements.time.textContent = this.timeFormat(time / 1e3);
    this.elements.seek.value = `${time}`;
    const isPlaying = this.isPlaying;
    if (isPlaying) {
      this.stop();
    }
    (_a = this.seeking$) == null ? void 0 : _a.unsubscribe();
    this.playlist.seek(parseFloat(`${value}`));
    this.playlist.time = value;
    this.seeking$ = this.playlist.show(this.renderer).subscribe(() => void 0);
    if (isPlaying) {
      this.play();
    }
  }
  async playStop() {
    if (this.isPlaying) {
      this.stop();
    } else {
      const tl = gsapWithCSS.timeline({
        paused: true
      }).to(this.elements.play, {
        opacity: 0,
        duration: 0.5,
        scale: 1.5,
        ease: "back"
      });
      tl.play().eventCallback("onComplete", () => {
        this.play();
        tl.kill();
      });
    }
  }
  play() {
    var _a;
    if (!this.isPlaying) {
      this.elements.loop.disabled = true;
      this.isPlaying = true;
      (_a = this.player) == null ? void 0 : _a.play({ loop: this.loop });
    }
  }
  async stop() {
    var _a;
    this.elements.loop.disabled = false;
    this.isPlaying = false;
    (_a = this.player) == null ? void 0 : _a.stop();
    const tl = gsapWithCSS.timeline({
      paused: true
    }).to(this.elements.play, {
      opacity: 0.5,
      duration: 0.3,
      scale: 1,
      ease: "back"
    });
    tl.play();
  }
  timeFormat(value) {
    let seconds = parseInt(`${value}`, 10);
    seconds = seconds < 0 ? 0 : seconds;
    let s = Math.floor(seconds % 60);
    let m = Math.floor(seconds / 60 % 60);
    let h = Math.floor(seconds / 3600);
    h = h > 0 ? h + ":" : "";
    m = (h && m < 10 ? "0" + m : m) + ":";
    s = s < 10 ? "0" + s : s;
    return h + m + s;
  }
}
class Transition {
  constructor(opts) {
    var _a;
    this.duration = 1e3;
    if (opts) {
      this.duration = (_a = opts.duration) != null ? _a : this.duration;
    }
  }
}
class CrossFade extends Transition {
  constructor(opts) {
    super(opts);
  }
  run(src, dst) {
    const duration = this.duration / 1e3;
    return new Observable((subscriber) => {
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.fromTo(src.el, { opacity: 1, zIndex: 0 }, { opacity: 0, duration });
      tl.fromTo(dst.el, { opacity: 0, zIndex: 1 }, { opacity: 1, duration }, 0);
      const handler = (ev) => {
        subscriber.next("transition:end");
        subscriber.complete();
      };
      tl.eventCallback("onComplete", handler);
      tl.play();
      return () => {
        tl.eventCallback("onComplete", null);
        gsapWithCSS.set(dst.el, { opacity: 1, zIndex: 0 });
        gsapWithCSS.set(src.el, { opacity: 1, zIndex: 0 });
        tl.kill();
      };
    });
  }
}
class SideScroll extends Transition {
  constructor(opts) {
    super(opts);
    this.opts = opts;
  }
  run(src, dst) {
    var _a, _b;
    const duration = this.duration / 1e3;
    (_b = (_a = this.opts) == null ? void 0 : _a.ease) != null ? _b : "power1.inOut";
    return new Observable((subscriber) => {
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.fromTo(src.el, { opacity: 1, zIndex: 0 }, { opacity: 0, duration });
      tl.fromTo(dst.el, { left: "100%", zIndex: 1 }, { left: 0, duration }, 0);
      const handler = (ev) => {
        subscriber.next("transition:end");
        subscriber.complete();
      };
      tl.eventCallback("onComplete", handler);
      tl.play();
      return () => {
        tl.eventCallback("onComplete", null);
        gsapWithCSS.set(dst.el, { left: 0, zIndex: 0 });
        gsapWithCSS.set(src.el, { opacity: 1, zIndex: 0 });
        tl.kill();
      };
    });
  }
}
class Flip extends Transition {
  constructor(opts) {
    super(opts);
  }
  run(src, dst) {
    const duration = this.duration / 1e3;
    const initialVars = {
      rotationY: 0,
      "backface-visibility": "visible",
      "-webkit-backface-visibility": "visible"
    };
    return new Observable((subscriber) => {
      const tl = gsapWithCSS.timeline();
      const hiddenVisibility = {
        "backface-visibility": "hidden",
        "-webkit-backface-visibility": "hidden"
      };
      gsapWithCSS.set(src.el.parentElement, { perspective: 400 });
      tl.set(src.el, hiddenVisibility);
      tl.set(dst.el, hiddenVisibility);
      tl.fromTo(src.el, { rotationY: 0 }, { duration, rotationY: 180, ease: "bounce" }, 0);
      tl.fromTo(dst.el, { rotationY: 180 }, { duration, rotationY: 360, ease: "bounce" }, 0);
      const handler = (ev) => {
        subscriber.next("transition:end");
        subscriber.complete();
      };
      tl.eventCallback("onComplete", handler);
      return () => {
        tl.eventCallback("onComplete", null);
        gsapWithCSS.set(src.el, initialVars);
        gsapWithCSS.set(dst.el, initialVars);
        tl.pause();
        tl.kill();
      };
    });
  }
}
const fromJSON = async (json) => {
  if (json.uri.startsWith("https://"))
    ;
  else {
    switch (json.uri) {
      case "transition://crossfade":
        return new CrossFade(json.opts);
      case "transition://side-scroll":
        return new SideScroll(json.opts);
      case "transition://flip":
        return new Flip(json.opts);
    }
  }
};
var eventemitter3 = { exports: {} };
(function(module) {
  var has = Object.prototype.hasOwnProperty, prefix = "~";
  function Events() {
  }
  if (Object.create) {
    Events.prototype = /* @__PURE__ */ Object.create(null);
    if (!new Events().__proto__)
      prefix = false;
  }
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") {
      throw new TypeError("The listener must be a function");
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt])
      emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn)
      emitter._events[evt].push(listener);
    else
      emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0)
      emitter._events = new Events();
    else
      delete emitter._events[evt];
  }
  function EventEmitter2() {
    this._events = new Events();
    this._eventsCount = 0;
  }
  EventEmitter2.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0)
      return names;
    for (name in events = this._events) {
      if (has.call(events, name))
        names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };
  EventEmitter2.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers)
      return [];
    if (handlers.fn)
      return [handlers.fn];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };
  EventEmitter2.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners)
      return 0;
    if (listeners.fn)
      return 1;
    return listeners.length;
  };
  EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt])
      return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
      if (listeners.once)
        this.removeListener(event, listeners.fn, void 0, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length, j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once)
          this.removeListener(event, listeners[i].fn, void 0, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args)
              for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter2.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };
  EventEmitter2.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };
  EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt])
      return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events.push(listeners[i]);
        }
      }
      if (events.length)
        this._events[evt] = events.length === 1 ? events[0] : events;
      else
        clearEvent(this, evt);
    }
    return this;
  };
  EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt])
        clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };
  EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
  EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
  EventEmitter2.prefixed = prefix;
  EventEmitter2.EventEmitter = EventEmitter2;
  {
    module.exports = EventEmitter2;
  }
})(eventemitter3);
var EventEmitter = eventemitter3.exports;
class Widget extends eventemitter3.exports.EventEmitter {
  constructor(opts) {
    super();
    if (window.parent) {
      const messageHandler = this.messageHandler = (ev) => {
        let data;
        try {
          data = JSON.parse(ev.data);
        } catch (err) {
          return;
        }
        let result;
        switch (data.method) {
          case "unload":
            this.unload();
            break;
        }
        window.parent.postMessage(JSON.stringify({
          counter: data.counter,
          result
        }));
      };
      window.addEventListener("message", messageHandler, false);
    }
  }
  static async fromJSON(json) {
    switch (json.uri) {
      case "widget://image":
        return new Image(json.args);
      case "widget://video":
        return new Video(json.args);
      case "widget://text":
        return new TextWidget(json.args);
      case "widget://layout":
        return Layout.fromLayoutJSON(json.args);
    }
  }
  unload() {
  }
  mimeType() {
  }
  play(timer$) {
    return NEVER;
  }
  stop() {
  }
  show(el, offset) {
    return of("shown");
  }
  seek(offset) {
    return of([offset, 0]);
  }
  duration() {
    return of(0);
  }
  toggleDebug() {
  }
  volume(level) {
  }
}
class TimelineWidget extends Widget {
  constructor(opts) {
    super(opts);
    this.offset = 0;
    this.timeline = gsapWithCSS.timeline({ paused: true });
  }
  play(timer$) {
    if (this.timeline) {
      this.timeline.play(this.offset / 1e3);
      return concat(new Observable((subscriber) => {
        var _a;
        const handler = (ev) => {
          subscriber.next("played");
          subscriber.complete();
        };
        (_a = this.timeline) == null ? void 0 : _a.eventCallback("onComplete", handler);
        return () => {
          var _a2, _b;
          (_a2 = this.timeline) == null ? void 0 : _a2.eventCallback("onComplete", null);
          (_b = this.timeline) == null ? void 0 : _b.pause();
        };
      }), super.play(timer$));
    }
    return super.play(timer$);
  }
  stop() {
    var _a;
    (_a = this.timeline) == null ? void 0 : _a.pause();
  }
  seek(offset) {
    var _a;
    this.offset = offset;
    (_a = this.timeline) == null ? void 0 : _a.seek(offset / 1e3);
    return of([offset, 0]);
  }
  duration() {
    var _a;
    return of((((_a = this.timeline) == null ? void 0 : _a.duration()) || 0) * 1e3);
  }
}
class Image extends TimelineWidget {
  constructor(opts) {
    super(opts);
    this.src = opts.src;
    this.size = opts.size;
  }
  show(el, offset) {
    if (this.img) {
      return of("loaded");
    }
    const img = this.img = document.createElement("div");
    img.style.background = "url(" + this.src + ") no-repeat center";
    img.style.backgroundSize = this.size ? this.size : "contain";
    img.style.width = "100%";
    img.style.height = "100%";
    el.appendChild(img);
    return new Observable((subscriber) => {
      const dummy = document.createElement("img");
      dummy.src = this.src;
      dummy.onload = (ev) => {
        subscriber.next("loaded");
        subscriber.complete();
      };
      return () => {
        dummy.onload = null;
      };
    });
  }
  unload() {
    var _a;
    if (this.img) {
      this.img.style.background = "none";
      (_a = this.img.parentElement) == null ? void 0 : _a.removeChild(this.img);
      this.img = void 0;
    }
  }
  mimeType() {
    return "image/jpeg";
  }
}
class Layout extends Widget {
  constructor(name, opts) {
    super(opts);
    this.name = name;
    this.items = [];
  }
  static async fromLayoutJSON(json) {
    const layout = new Layout(json.name, json.args);
    const items = json.items;
    await Promise.all(items.map(async (item) => {
      const playlist = await Playlist.fromJSON(item.playlist);
      layout.add({
        css: item.css,
        playlist
      });
    }));
    return layout;
  }
  show(el) {
    return from(this.items).pipe(mergeMap((item) => {
      el.appendChild(item.renderer.el);
      return item.playlist.show(item.renderer);
    }), last());
  }
  unload() {
    this.items.map((item) => {
      item.playlist.layers.forEach((item2) => item2.unload());
      item.renderer.clean();
    });
  }
  toggleDebug() {
    this.items.map(({ renderer, playlist }) => {
      renderer.toggleDebug();
    });
  }
  add(container) {
    const containerElement = document.createElement("div");
    containerElement.style.position = "absolute";
    const css = container.css;
    for (let key in css) {
      const styleProperty = css[key];
      if (styleProperty) {
        containerElement.style[key] = styleProperty;
      }
    }
    this.items.push({
      renderer: new Renderer(containerElement),
      playlist: container.playlist
    });
  }
  duration() {
    const durations$ = merge(...this.items.map((item) => item.playlist.duration()));
    return durations$.pipe(max());
  }
  play(timer$) {
    return from(this.items).pipe(mergeMap((item) => item.playlist.play(item.renderer, timer$, { loop: true })));
  }
  seek(offset) {
    return merge(...this.items.map((item) => item.playlist.seek(offset))).pipe(last());
  }
}
const _Proxy = class extends Widget {
  constructor(parent, iframe, childSrc) {
    super();
    this.parent = parent;
    this.iframe = iframe;
    this.resolvers = {};
    const messageHandler = this.messageHandler = (event) => {
      let data;
      try {
        data = JSON.parse(event.data);
      } catch (err) {
        return;
      }
      if (typeof data.counter !== "undefined") {
        if (this.resolvers[data.counter]) {
          this.resolvers[data.counter](data.result);
          delete this.resolvers[data.counter];
        }
      }
    };
    this.origin = childSrc;
    this.parent.addEventListener("message", messageHandler, false);
  }
  static async fromJSON(json) {
    return void 0;
  }
  async load() {
    return this.callMethod("prepare");
  }
  async ready() {
  }
  unload() {
    if (this.messageHandler) {
      this.parent.removeEventListener("message", this.messageHandler);
    }
  }
  mimeType() {
    return "proxy";
  }
  play(timer$) {
    return from(this.callMethod("play"));
  }
  stop() {
    return this.callMethod("stop");
  }
  duration() {
    return this.callMethod("duration");
  }
  seek(offset) {
    return this.callMethod("seek", [offset]);
  }
  volume(level) {
    return this.callMethod("volume", [level]);
  }
  callMethod(method, args) {
    var _a;
    const counter = _Proxy.id++;
    const message = {
      counter,
      method,
      args
    };
    (_a = this.iframe.contentWindow) == null ? void 0 : _a.postMessage(JSON.stringify(message), this.origin);
    return of(this.resolvers[counter]);
  }
};
let Proxy2 = _Proxy;
Proxy2.id = 0;
const applyCss = (element, css) => {
  for (let key in css) {
    const styleProperty = css[key];
    if (styleProperty) {
      element.style[key] = styleProperty;
    }
  }
};
const limits = {
  max: 100,
  min: 0
};
const AnimationPresets = {
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
class TextWidget extends TimelineWidget {
  constructor(opts) {
    super(opts);
    this.text = opts.text;
    this.css = opts.css;
    this.font = opts.font;
    const div = this.div = this.div = document.createElement("div");
    div.textContent = this.text;
    applyCss(div, this.css);
    const tl = this.timeline = gsapWithCSS.timeline({ paused: true });
    if (opts.animation) {
      const splittedText = splitText(div, opts.animation.chars);
      if (opts.animation.perspective) {
        gsapWithCSS.set(div, { perspective: opts.animation.perspective });
      }
      tl.from(splittedText.chars || splittedText.words, opts.animation.from);
    }
  }
  show(el, offset) {
    var _a;
    this.offset = offset;
    if ((_a = this.div) == null ? void 0 : _a.parentElement) {
      return of("loaded");
    }
    el.appendChild(this.div);
    if (this.font) {
      this.fontFace = new FontFace(this.font.name, `url(${this.font.url})`);
      document.fonts["add"](this.fontFace);
    }
    return of("loaded");
  }
  unload() {
    var _a;
    if (this.div) {
      (_a = this.div.parentElement) == null ? void 0 : _a.removeChild(this.div);
    }
    if (this.fontFace) {
      document.fonts.delete(this.fontFace);
    }
  }
  mimeType() {
    return "text";
  }
  autoFitText(options) {
    if (this.div && this.div.textContent) {
      const textElement = this.div;
      let size = 1;
      const setSize = function(size2) {
        textElement["style"]["fontSize"] = size2 + "em";
      };
      setSize(size);
      const containerRect = this.div.getBoundingClientRect();
      const scaleX = containerRect.width / this.div.offsetWidth;
      const scaleY = containerRect.height / this.div.offsetHeight;
      const padding = parseInt(`${gsapWithCSS.getProperty(this.div, "padding", "px")}`) || 0;
      const borderWidth = parseInt(`${gsapWithCSS.getProperty(this.div, "border-width", "px")}`) || 0;
      const borderX = padding * 1.99 * scaleX + borderWidth * 1.99 * scaleX;
      const borderY = padding * 1.99 * scaleY + borderWidth * 1.99 * scaleY;
      let l = options && options.min || limits.min;
      let r = options && options.max || limits.max;
      while (l <= r) {
        let m = (l + r) / 2;
        setSize(m);
        const textElementRect = textElement.getBoundingClientRect();
        if (containerRect.height - borderY >= textElementRect.height && containerRect.width - borderX >= textElementRect.width) {
          l = m + 0.01;
          size = m;
        } else {
          r = m - 0.01;
        }
      }
      setSize(size);
    }
  }
}
TextWidget.animationPresets = AnimationPresets;
function createElementFromHTML(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return Array.prototype.slice.call(div.children);
}
function splitText(div, splitChars) {
  if (splitChars) {
    const chars = [];
    const words = div.innerHTML.split(" ").map((word, index, arr) => splitInChars(word, chars, index === arr.length - 1));
    div.replaceChildren(...words);
    return { words, chars };
  } else {
    const wordsHTML = div.innerHTML.split(" ").map((word) => `<div style="display: inline-block; text-align: start; position: relative;">${word}</div>`).join(`<div style="display: inline-block; text-align: start; position: relative;">&nbsp;</div>`);
    const words = createElementFromHTML(wordsHTML);
    div.replaceChildren(...words);
    return { words };
  }
}
function splitInChars(word, charArray, isLast) {
  const div = document.createElement("div");
  div.style.display = "inline-block";
  div.style.textAlign = "start";
  div.style.position = "relative";
  const charElements = createElementFromHTML(word.split("").map((char) => `<div style="display: inline-block; text-align: start; position: relative;">${char}</div>`).join(""));
  if (!isLast) {
    const space = document.createElement("div");
    space.style.display = "inline-block";
    space.style.textAlign = "start";
    space.style.position = "relative";
    space.innerHTML = "&nbsp;";
    charElements.push(space);
  }
  div.replaceChildren(...charElements);
  charArray.push.apply(charArray, charElements);
  return div;
}
class Video extends Widget {
  constructor(opts) {
    super();
    this._duration = 0;
    this.offset = 0;
    this.src = opts.src;
    this._volume = opts.volume;
  }
  show(el, offset) {
    return this.load().pipe(switchMap((video) => {
      this.offset = offset;
      video.currentTime = offset / 1e3;
      el.appendChild(video);
      return of("shown");
    }));
  }
  load() {
    const video = this.video ? this.video : this.video = document.createElement("video");
    video.style.width = "100%";
    video.style.height = "100%";
    video.src = this.src;
    if (typeof this._volume !== "undefined") {
      this.volume(this._volume);
    }
    let loading$;
    if (video.readyState < 4) {
      video.load();
      loading$ = fromEvent(video, "canplaythrough").pipe(take(1), map((evt) => video));
    } else {
      loading$ = of(video);
    }
    return loading$;
  }
  unload() {
    var _a;
    console.log(`Unloading video ${this.src}`);
    if (this.video) {
      (_a = this.video.parentElement) == null ? void 0 : _a.removeChild(this.video);
      this.video = void 0;
    }
  }
  play(timer$) {
    return this.load().pipe(switchMap(() => {
      if (this.video) {
        const video = this.video;
        const playPromise = video.play();
        if (playPromise) {
          playPromise.catch((err) => {
            console.log(`Video play error: ${err}`);
          });
        }
        return fromEvent(video, "playing").pipe(take(1), switchMap(() => race(new Observable((subscriber) => {
          return () => {
            video.pause();
          };
        }), super.play(timer$))));
      }
      return super.play(timer$);
    }));
  }
  stop() {
    var _a;
    (_a = this.video) == null ? void 0 : _a.pause();
  }
  seek(offset) {
    this.offset = offset;
    if (this.video && this.video.readyState >= 1) {
      this.video.currentTime = offset / 1e3;
      return fromEvent(this.video, "seeked").pipe(take(1), timeout(250), map((evt) => [offset, 0]));
    }
    return of([offset, 0]);
  }
  volume(volume) {
    if (this.video) {
      this._volume = this.video.volume = volume;
    }
  }
  duration() {
    if (this._duration) {
      return of(this._duration);
    }
    let video = this.video;
    if (!video) {
      video = document.createElement("video");
      video.preload = "metadata";
      video.src = this.src;
    }
    return fromEvent(video, "loadedmetadata").pipe(take(1), map((evt) => {
      var _a;
      if (video) {
        this._duration = ((_a = video == null ? void 0 : video.duration) != null ? _a : 0) * 1e3;
        video.src = "";
      }
      return this._duration;
    }));
  }
  mimeType() {
    return "video/mpeg4";
  }
}
var Status = /* @__PURE__ */ ((Status2) => {
  Status2[Status2["NotReady"] = 0] = "NotReady";
  Status2[Status2["Loading"] = 1] = "Loading";
  Status2[Status2["Ready"] = 2] = "Ready";
  Status2[Status2["Starting"] = 3] = "Starting";
  Status2[Status2["Playing"] = 4] = "Playing";
  Status2[Status2["Stopping"] = 5] = "Stopping";
  Status2[Status2["Stopped"] = 6] = "Stopped";
  Status2[Status2["Seeking"] = 7] = "Seeking";
  return Status2;
})(Status || {});
class Layer extends eventemitter3.exports.EventEmitter {
  constructor(name, opts) {
    super();
    this.name = name;
    this.id = "";
    this.widgetId = "";
    this.opacity = "1";
    this.rotation = 0;
    this.zIndex = 0;
    this.status = Status.NotReady;
    this.offset = 0;
    this.slack = 0;
    this._duration = 0;
    this._duration = (opts == null ? void 0 : opts.duration) || 0;
    this.slack = (opts == null ? void 0 : opts.slack) || 0;
    this.widget = opts == null ? void 0 : opts.widget;
    this.transition = opts == null ? void 0 : opts.transition;
    this.el = document.createElement("div");
    const { style: style2, dataset } = this.el;
    if (opts == null ? void 0 : opts.css) {
      applyCss(this.el, opts.css);
    }
    style2.position = "absolute";
    style2.width = "100%";
    style2.height = "100%";
    style2.display = "flex";
    style2.justifyContent = "center";
    style2.alignItems = "center";
    dataset["layer"] = this.name;
    this.proxyOffset = (offset) => this.emit("offset", offset);
  }
  static async fromJSON(json) {
    const widget = await Widget.fromJSON(json.widget);
    const layer = new Layer(json.name, {
      duration: json.duration,
      slack: json.slack,
      transition: json.transition && await fromJSON(json.transition),
      css: json.css,
      widget
    });
    return layer;
  }
  toggleDebug() {
    var _a;
    (_a = this.widget) == null ? void 0 : _a.toggleDebug();
  }
  unload() {
    var _a, _b;
    (_a = this.widget) == null ? void 0 : _a.seek(0);
    return (_b = this.widget) == null ? void 0 : _b.unload();
  }
  toJSON() {
    return {
      id: this.id,
      widgetId: this.widgetId
    };
  }
  play(timer$) {
    if (!this.widget) {
      throw new Error("Layer: missing widget");
    }
    console.log(`Start playing layer: ${this.name}`);
    const end$ = timer$.pipe(last(), catchError(() => of(void 0)), map(() => "end"));
    return this.widget.play(timer$).pipe(takeUntil(end$));
  }
  async stop() {
    var _a;
    return (_a = this.widget) == null ? void 0 : _a.stop();
  }
  seek(offset) {
    this.offset = offset;
    if (this.widget) {
      return this.widget.seek(offset);
    }
    return of([offset, 0]);
  }
  show(offset) {
    if (this.widget) {
      return this.widget.show(this.el, offset);
    } else {
      return of("shown");
    }
  }
  async hide() {
    return;
  }
  duration() {
    var _a;
    const transitionDuration = ((_a = this.transition) == null ? void 0 : _a.duration) || 0;
    if (this._duration) {
      return of(this._duration + transitionDuration);
    } else if (this.widget) {
      return this.widget.duration().pipe(map((duration) => {
        return duration + this.slack + transitionDuration;
      }));
    } else {
      return of(this.slack);
    }
  }
}
const TIMER_RESOLUTION = 50;
class Player extends EventEmitter {
  constructor(playlist, renderer) {
    super();
    this.playlist = playlist;
    this.renderer = renderer;
  }
  show() {
  }
  toggleDebug() {
    this.renderer.toggleDebug();
    this.playlist.toggleDebug();
  }
  play(opts = { loop: false }) {
    this.stop();
    const timer$ = this.playlist.seek(this.playlist.time || 0).pipe(first(), concatMap(([time, duration]) => {
      let currTime = time;
      return timer(this.playlist.time || 0, TIMER_RESOLUTION, duration).pipe(tap((value) => {
        if (value < currTime) {
          this.emit("end");
        }
        currTime = value;
      }), finalize(() => console.log("Timer completed!")));
    }), share());
    this.timerSubscription = timer$.subscribe({
      next: (time) => this.emit("time", time),
      error: (err) => {
        console.log("Timer error", err);
      }
    });
    this.playing = this.playlist.play(this.renderer, timer$, { loop: opts == null ? void 0 : opts.loop }).pipe(finalize(() => {
      var _a;
      (_a = this.timerSubscription) == null ? void 0 : _a.unsubscribe();
      console.log("DONE PLAYING");
    })).subscribe({
      error: (err) => {
        console.log("Playing error", err);
      },
      complete: () => {
        var _a;
        (_a = this.timerSubscription) == null ? void 0 : _a.unsubscribe();
        this.emit("completed");
      }
    });
  }
  stop() {
    var _a, _b;
    (_a = this.timerSubscription) == null ? void 0 : _a.unsubscribe();
    (_b = this.playing) == null ? void 0 : _b.unsubscribe();
    this.timerSubscription = void 0;
    this.playing = void 0;
  }
}
function timer(start, interval, period) {
  return new Observable((subscriber) => {
    let baseline = Date.now();
    let timeout2 = 0;
    let tick = start;
    const updateTick = () => {
      subscriber.next(tick);
      tick = (tick + interval) % period;
      baseline = baseline + interval;
      const drift = baseline - Date.now();
      timeout2 = setTimeout(updateTick, interval + drift);
    };
    updateTick();
    return () => {
      clearTimeout(timeout2);
    };
  });
}
class Playlist extends eventemitter3.exports.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
    this.layers = [];
    this.time = 0;
    this.status = Status.NotReady;
  }
  static async fromJSON(json) {
    const playlist = new Playlist(json["name"]);
    for (let i = 0; i < json.layers.length; i++) {
      const layer = await Layer.fromJSON(json.layers[i]);
      playlist.add(layer);
    }
    return playlist;
  }
  play(renderer, timer$, opts) {
    return this.playLayers(renderer, timer$, opts ? opts : {});
  }
  toggleDebug() {
    this.layers.map((layer) => layer.toggleDebug());
  }
  getLayersWithOffsets() {
    const durations$ = concat(...this.layers.map((layer) => layer.duration()));
    let end = 0;
    return durations$.pipe(reduce((layersWithOffsets, duration, index) => {
      const start = end;
      end += duration;
      const result = {
        start,
        end,
        duration,
        layer: this.layers[index]
      };
      layersWithOffsets.push(result);
      return layersWithOffsets;
    }, []));
  }
  playLayers(renderer, timer$, { loop = false }) {
    const layersWithOffsets$ = this.getLayersWithOffsets();
    const first$ = this.findLayer(this.time, layersWithOffsets$);
    return first$.pipe(first(), concatMap((item) => {
      if (item) {
        const { layer, offset, index, layersWithOffsets } = item;
        let first2 = 1;
        const elements = loop ? layersWithOffsets.slice(index).concat(layersWithOffsets.slice(0, index)) : layersWithOffsets.slice(index);
        const duration = layersWithOffsets.reduce((acc, item2) => acc + item2.duration, 0);
        const playlistTimer$ = timer$.pipe(map((value) => value % duration), tap((value) => {
          this.time = value;
        }), share());
        const playing$ = from(elements).pipe(concatMap((element) => {
          const layerOffset = first2 ? offset : 0;
          first2 = 0;
          return this.playLayer(renderer, playlistTimer$, element.layer, layerOffset, element.start, element.end);
        }));
        if (loop) {
          return playing$.pipe(repeat());
        } else {
          return playing$;
        }
      } else {
        return of("end");
      }
    }));
  }
  playLayer(renderer, timer$, layer, layerOffset, start, end) {
    const volume = 100;
    return renderer.play(layer, timer$.pipe(takeWhile((value) => value >= start && value < end), map((value) => value - start), share()), layerOffset, volume);
  }
  seek(offset) {
    return this.duration().pipe(switchMap((duration) => {
      offset = offset % (duration + 1);
      this.time = offset;
      return this.findLayer(offset, this.getLayersWithOffsets()).pipe(switchMap((item) => {
        let result = [offset, duration];
        if (item) {
          const { layer, offset: relativeOffset = 0 } = item;
          return layer.seek(relativeOffset).pipe(switchMap(() => {
            result = [offset, duration];
            return of(result);
          }));
        }
        return of(result);
      }));
    }));
  }
  show(renderer) {
    return this.findLayer(this.time, this.getLayersWithOffsets()).pipe(switchMap((item) => {
      if (item) {
        const { layer, offset = 0 } = item;
        return renderer.show(layer, offset);
      }
      return of("end");
    }));
  }
  unload() {
    this.layers.forEach((layer) => layer.unload());
  }
  findLayer(offset, layersWithOffsets$) {
    return layersWithOffsets$.pipe(first(), map((layersWithOffsets) => {
      for (let i = 0; i < layersWithOffsets.length; i++) {
        const item = layersWithOffsets[i];
        if (offset >= item.start && offset < item.end) {
          return {
            index: i,
            offset: offset - item.start,
            duration: item.duration,
            layer: item.layer,
            layersWithOffsets
          };
        }
      }
    }));
  }
  duration() {
    const durations$ = merge(...this.layers.map((entry) => entry.duration()));
    return durations$.pipe(reduce((acc, duration) => acc + duration, 0));
  }
  get position() {
    return this.time;
  }
  add(entry, index) {
    if (index) {
      this.layers.splice(index, 0, entry);
    } else {
      this.layers.push(entry);
    }
    return this;
  }
}
class Renderer {
  constructor(el) {
    this.volume = 0;
    this.el = el;
  }
  toggleDebug() {
    if (this.debugLayer) {
      this.el.removeChild(this.debugLayer);
      delete this.debugLayer;
    } else {
      this.debugLayer = document.createElement("div");
      this.debugLayer.style.position = "absolute";
      this.debugLayer.style.left = "0";
      this.debugLayer.style.top = "0";
      this.debugLayer.style.width = "100%";
      this.debugLayer.style.height = "100%";
      this.debugLayer.style.zIndex = "10000";
      this.debugLayer.style.color = "white";
      this.debugLayer.style.fontSize = "1.5em";
      this.el.appendChild(this.debugLayer);
    }
  }
  updateDebug(text) {
    if (this.debugLayer) {
      this.debugLayer.innerHTML = `
      <div style="position: absolute; bottom: 0;background: rgba(0,0,0,0.5); text-align: center;">
        ${text}
      </div>`;
    }
  }
  show(layer, offset) {
    const prevLayer = this.currentLayer;
    return layer.seek(offset).pipe(switchMap(() => {
      this.updateDebug(layer.name);
      if (prevLayer) {
        if (prevLayer !== layer) {
          prevLayer.el.style.zIndex = "1000";
        } else {
          return layer.show(offset);
        }
      }
      const displayCss = layer.el.style.display;
      layer.el.style.zIndex = "0";
      this.el.appendChild(layer.el);
      this.currentLayer = layer;
      this.loadingLayer$ = layer.show(offset).pipe(concatMap(() => {
        return this.performTransition(layer, prevLayer);
      }), finalize(() => {
        var _a;
        if (prevLayer) {
          prevLayer.unload();
          (_a = prevLayer.el.parentElement) == null ? void 0 : _a.removeChild(prevLayer.el);
        }
        layer.el.style.display = displayCss;
      }));
      return this.loadingLayer$;
    }));
  }
  performTransition(layer, prevLayer) {
    var _a;
    if (prevLayer) {
      if (layer.transition) {
        return (_a = layer.transition) == null ? void 0 : _a.run(prevLayer, layer);
      } else {
        layer.el.style.opacity = "1";
        return of("transition:end");
      }
    } else {
      return of("end");
    }
  }
  play(layer, timer$, offset, volume) {
    const show$ = this.show(layer, offset).pipe(switchMap(() => layer.play(timer$)));
    return show$;
  }
  seek(offset) {
    var _a;
    return (_a = this.currentLayer) == null ? void 0 : _a.seek(offset);
  }
  async clean() {
    var _a;
    (_a = this.el.parentElement) == null ? void 0 : _a.removeChild(this.el);
  }
}
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
        animation: TextWidget.animationPresets.snake
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
      animation: TextWidget.animationPresets.upper
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
      animation: TextWidget.animationPresets.upper
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
      animation: TextWidget.animationPresets.upper
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
      mosaic
    ]
  };
  return Playlist.fromJSON(jsonPlaylist);
}
const videos = {
  raw: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/videos/coffee-raw.mp4",
  roast: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/videos/coffee-roast.mp4",
  brew: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/videos/coffee-brew.mp4",
  drink: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/videos/coffee-drink.mp4"
};
const videoLayers = createLayerSequence({
  name: "videos",
  widget: {
    uri: "widget://video"
  },
  defaultArgs: {
    duration: 4e3
  }
}, { src: videos.raw }, { src: videos.roast }, { src: videos.brew }, { src: videos.drink });
const images = {
  cake1: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/images/cake1.jpg",
  cake2: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/images/cake2.jpg",
  cake3: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/images/cake3.jpg",
  cake4: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/images/cake4.jpg",
  cake5: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/images/cake5.jpg",
  cake6: "https://castmill-demos.s3.eu-central-1.amazonaws.com/assets/images/cake6.jpg"
};
const imageLayers = createLayerSequence({
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
}, { src: images.cake2, size: "cover" }, { src: images.cake3, size: "cover" }, { src: images.cake4, size: "cover" }, { src: images.cake5, size: "cover" }, { src: images.cake6, size: "cover" }, { src: images.cake1, size: "cover" });
async function getSimpleDemo() {
  const jsonPlaylist = {
    name: "Simple Demo",
    layers: [
      ...getIntro("This demo illustrates some simple cases such as showing images and videos."),
      ...imageLayers,
      ...videoLayers
    ]
  };
  return Playlist.fromJSON(jsonPlaylist);
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
  new PlayerUI("player", playlist);
}
export { createLayerSequence, createMosaicLayout, getComplexDemo, getIntro, getOutro, getSimpleDemo, startDemo };
