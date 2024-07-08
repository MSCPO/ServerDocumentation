import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  inject,
  isRef,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  popScopeId,
  pushScopeId,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowRef,
  toDisplayString,
  toRef,
  unref,
  vModelRadio,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives
} from "./chunk-U223JWR7.js";
import "./chunk-CSAU5B4Q.js";

// node_modules/.store/@nolebase+vitepress-plugin-enhanced-readabilities@1.28.0/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/index.js
import { useData as De, withBase as Et, useRoute as Xe } from "vitepress";
var ee = Symbol("vitepress-nolebase-enhanced-readabilities");
var Oe = "vitepress-nolebase-enhanced-readabilities-layout-switch-mode";
var $t = "vitepress-nolebase-enhanced-readabilities-content-layout-max-width";
var kt = "vitepress-nolebase-enhanced-readabilities-page-layout-max-width";
var Ye = "vitepress-nolebase-enhanced-readabilities-spotlight-mode";
var Ke = "vitepress-nolebase-enhanced-readabilities-spotlight-styles";
var R = ((e) => (e[e.FullWidth = 1] = "FullWidth", e[e.Original = 3] = "Original", e[e.SidebarWidthAdjustableOnly = 4] = "SidebarWidthAdjustableOnly", e[e.BothWidthAdjustable = 5] = "BothWidthAdjustable", e))(R || {});
var Te = [
  1,
  3,
  4,
  5
  /* BothWidthAdjustable */
];
var ie = ((e) => (e[e.Under = 1] = "Under", e[e.Aside = 2] = "Aside", e))(ie || {});
function Z(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function F(e) {
  return typeof e == "function" ? e() : unref(e);
}
var me = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var qe = (e) => e != null;
var Ot = Object.prototype.toString;
var Vt = (e) => Ot.call(e) === "[object Object]";
var se = () => {
};
function Je(e, t) {
  function i(...o) {
    return new Promise((a, l) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(a).catch(l);
    });
  }
  return i;
}
var Ge = (e) => e();
function Rt(e, t = {}) {
  let i, o, a = se;
  const l = (u) => {
    clearTimeout(u), a(), a = se;
  };
  return (u) => {
    const n = F(e), s = F(t.maxWait);
    return i && l(i), n <= 0 || s !== void 0 && s <= 0 ? (o && (l(o), o = null), Promise.resolve(u())) : new Promise((d, h) => {
      a = t.rejectOnCancel ? h : d, s && !o && (o = setTimeout(() => {
        i && l(i), o = null, d(u());
      }, s)), i = setTimeout(() => {
        o && l(o), o = null, d(u());
      }, n);
    });
  };
}
function Pt(e = Ge) {
  const t = ref(true);
  function i() {
    t.value = false;
  }
  function o() {
    t.value = true;
  }
  const a = (...l) => {
    t.value && e(...l);
  };
  return { isActive: readonly(t), pause: i, resume: o, eventFilter: a };
}
function Nt(e) {
  return e || getCurrentInstance();
}
function Ve(e, t = 200, i = {}) {
  return Je(
    Rt(t, i),
    e
  );
}
function Tt(e, t, i = {}) {
  const {
    eventFilter: o = Ge,
    ...a
  } = i;
  return watch(
    e,
    Je(
      o,
      t
    ),
    a
  );
}
function Ht(e, t, i = {}) {
  const {
    eventFilter: o,
    ...a
  } = i, { eventFilter: l, pause: r, resume: u, isActive: n } = Pt(o);
  return { stop: Tt(
    e,
    t,
    {
      ...a,
      eventFilter: l
    }
  ), pause: r, resume: u, isActive: n };
}
function Qe(e, t = true, i) {
  Nt() ? onMounted(e, i) : t ? e() : nextTick(e);
}
function jt(e, t = 1e3, i = {}) {
  const {
    immediate: o = true,
    immediateCallback: a = false
  } = i;
  let l = null;
  const r = ref(false);
  function u() {
    l && (clearInterval(l), l = null);
  }
  function n() {
    r.value = false, u();
  }
  function s() {
    const d = F(t);
    d <= 0 || (r.value = true, a && e(), u(), l = setInterval(e, d));
  }
  if (o && me && s(), isRef(t) || typeof t == "function") {
    const d = watch(t, () => {
      r.value && me && s();
    });
    Z(d);
  }
  return Z(n), {
    isActive: r,
    pause: n,
    resume: s
  };
}
function Y(e) {
  var t;
  const i = F(e);
  return (t = i == null ? void 0 : i.$el) != null ? t : i;
}
var z = me ? window : void 0;
var Bt = me ? window.document : void 0;
function D(...e) {
  let t, i, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([i, o, a] = e, t = z) : [t, i, o, a] = e, !t)
    return se;
  Array.isArray(i) || (i = [i]), Array.isArray(o) || (o = [o]);
  const l = [], r = () => {
    l.forEach((d) => d()), l.length = 0;
  }, u = (d, h, p, g) => (d.addEventListener(h, p, g), () => d.removeEventListener(h, p, g)), n = watch(
    () => [Y(t), F(a)],
    ([d, h]) => {
      if (r(), !d)
        return;
      const p = Vt(h) ? { ...h } : h;
      l.push(
        ...i.flatMap((g) => o.map((y) => u(d, g, y, p)))
      );
    },
    { immediate: true, flush: "post" }
  ), s = () => {
    n(), r();
  };
  return Z(s), s;
}
function J() {
  const e = ref(false), t = getCurrentInstance();
  return t && onMounted(() => {
    e.value = true;
  }, t), e;
}
function de(e) {
  const t = J();
  return computed(() => (t.value, !!e()));
}
function Ft(e, t = {}) {
  const {
    immediate: i = true,
    fpsLimit: o = void 0,
    window: a = z
  } = t, l = ref(false), r = o ? 1e3 / o : null;
  let u = 0, n = null;
  function s(p) {
    if (!l.value || !a)
      return;
    u || (u = p);
    const g = p - u;
    if (r && g < r) {
      n = a.requestAnimationFrame(s);
      return;
    }
    u = p, e({ delta: g, timestamp: p }), n = a.requestAnimationFrame(s);
  }
  function d() {
    !l.value && a && (l.value = true, u = 0, n = a.requestAnimationFrame(s));
  }
  function h() {
    l.value = false, n != null && a && (a.cancelAnimationFrame(n), n = null);
  }
  return i && d(), Z(h), {
    isActive: readonly(l),
    pause: h,
    resume: d
  };
}
function ne(e, t = {}) {
  const { window: i = z } = t, o = de(() => i && "matchMedia" in i && typeof i.matchMedia == "function");
  let a;
  const l = ref(false), r = (s) => {
    l.value = s.matches;
  }, u = () => {
    a && ("removeEventListener" in a ? a.removeEventListener("change", r) : a.removeListener(r));
  }, n = watchEffect(() => {
    o.value && (u(), a = i.matchMedia(F(e)), "addEventListener" in a ? a.addEventListener("change", r) : a.addListener(r), l.value = a.matches);
  });
  return Z(() => {
    n(), u(), a = void 0;
  }), l;
}
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var fe = "__vueuse_ssr_handlers__";
var Ct = Ut();
function Ut() {
  return fe in he || (he[fe] = he[fe] || {}), he[fe];
}
function It(e, t) {
  return Ct[e] || t;
}
function zt(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Dt = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
};
var He = "vueuse-storage";
function oe(e, t, i, o = {}) {
  var a;
  const {
    flush: l = "pre",
    deep: r = true,
    listenToStorageChanges: u = true,
    writeDefaults: n = true,
    mergeDefaults: s = false,
    shallow: d,
    window: h = z,
    eventFilter: p,
    onError: g = (A) => {
      console.error(A);
    },
    initOnMounted: y
  } = o, m = (d ? shallowRef : ref)(typeof t == "function" ? t() : t);
  if (!i)
    try {
      i = It("getDefaultStorage", () => {
        var A;
        return (A = z) == null ? void 0 : A.localStorage;
      })();
    } catch (A) {
      g(A);
    }
  if (!i)
    return m;
  const x = F(t), M = zt(x), V = (a = o.serializer) != null ? a : Dt[M], { pause: w, resume: E } = Ht(
    m,
    () => k(m.value),
    { flush: l, deep: r, eventFilter: p }
  );
  h && u && Qe(() => {
    D(h, "storage", U), D(h, He, B), y && U();
  }), y || U();
  function b(A, T) {
    h && h.dispatchEvent(new CustomEvent(He, {
      detail: {
        key: e,
        oldValue: A,
        newValue: T,
        storageArea: i
      }
    }));
  }
  function k(A) {
    try {
      const T = i.getItem(e);
      if (A == null)
        b(T, null), i.removeItem(e);
      else {
        const X = V.write(A);
        T !== X && (i.setItem(e, X), b(T, X));
      }
    } catch (T) {
      g(T);
    }
  }
  function I(A) {
    const T = A ? A.newValue : i.getItem(e);
    if (T == null)
      return n && x != null && i.setItem(e, V.write(x)), x;
    if (!A && s) {
      const X = V.read(T);
      return typeof s == "function" ? s(X, x) : M === "object" && !Array.isArray(X) ? { ...x, ...X } : X;
    } else
      return typeof T != "string" ? T : V.read(T);
  }
  function U(A) {
    if (!(A && A.storageArea !== i)) {
      if (A && A.key == null) {
        m.value = x;
        return;
      }
      if (!(A && A.key !== e)) {
        w();
        try {
          (A == null ? void 0 : A.newValue) !== V.write(m.value) && (m.value = I(A));
        } catch (T) {
          g(T);
        } finally {
          A ? nextTick(E) : E();
        }
      }
    }
  }
  function B(A) {
    U(A.detail);
  }
  return m;
}
function Xt(e, t, i = {}) {
  const { window: o = z, ...a } = i;
  let l;
  const r = de(() => o && "MutationObserver" in o), u = () => {
    l && (l.disconnect(), l = void 0);
  }, n = computed(() => {
    const p = F(e), g = (Array.isArray(p) ? p : [p]).map(Y).filter(qe);
    return new Set(g);
  }), s = watch(
    () => n.value,
    (p) => {
      u(), r.value && o && p.size && (l = new MutationObserver(t), p.forEach((g) => l.observe(g, a)));
    },
    { immediate: true, flush: "post" }
  ), d = () => l == null ? void 0 : l.takeRecords(), h = () => {
    u(), s();
  };
  return Z(h), {
    isSupported: r,
    stop: h,
    takeRecords: d
  };
}
function Yt(e, t, i = {}) {
  const { window: o = z, ...a } = i;
  let l;
  const r = de(() => o && "ResizeObserver" in o), u = () => {
    l && (l.disconnect(), l = void 0);
  }, n = computed(() => Array.isArray(e) ? e.map((h) => Y(h)) : [Y(e)]), s = watch(
    n,
    (h) => {
      if (u(), r.value && o) {
        l = new ResizeObserver(t);
        for (const p of h)
          p && l.observe(p, a);
      }
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), s();
  };
  return Z(d), {
    isSupported: r,
    stop: d
  };
}
function We(e, t = {}) {
  const {
    reset: i = true,
    windowResize: o = true,
    windowScroll: a = true,
    immediate: l = true
  } = t, r = ref(0), u = ref(0), n = ref(0), s = ref(0), d = ref(0), h = ref(0), p = ref(0), g = ref(0);
  function y() {
    const m = Y(e);
    if (!m) {
      i && (r.value = 0, u.value = 0, n.value = 0, s.value = 0, d.value = 0, h.value = 0, p.value = 0, g.value = 0);
      return;
    }
    const x = m.getBoundingClientRect();
    r.value = x.height, u.value = x.bottom, n.value = x.left, s.value = x.right, d.value = x.top, h.value = x.width, p.value = x.x, g.value = x.y;
  }
  return Yt(e, y), watch(() => Y(e), (m) => !m && y()), Xt(e, y, {
    attributeFilter: ["style", "class"]
  }), a && D("scroll", y, { capture: true, passive: true }), o && D("resize", y, { passive: true }), Qe(() => {
    l && y();
  }), {
    height: r,
    bottom: u,
    left: n,
    right: s,
    top: d,
    width: h,
    x: p,
    y: g,
    update: y
  };
}
function Kt(e) {
  const {
    x: t,
    y: i,
    document: o = Bt,
    multiple: a,
    interval: l = "requestAnimationFrame",
    immediate: r = true
  } = e, u = de(() => F(a) ? o && "elementsFromPoint" in o : o && "elementFromPoint" in o), n = ref(null), s = () => {
    var h, p;
    n.value = F(a) ? (h = o == null ? void 0 : o.elementsFromPoint(F(t), F(i))) != null ? h : [] : (p = o == null ? void 0 : o.elementFromPoint(F(t), F(i))) != null ? p : null;
  }, d = l === "requestAnimationFrame" ? Ft(s, { immediate: r }) : jt(s, l, { immediate: r });
  return {
    isSupported: u,
    element: n,
    ...d
  };
}
function Ze(e, t = {}) {
  const {
    delayEnter: i = 0,
    delayLeave: o = 0,
    window: a = z
  } = t, l = ref(false);
  let r;
  const u = (n) => {
    const s = n ? i : o;
    r && (clearTimeout(r), r = void 0), s ? r = setTimeout(() => l.value = n, s) : l.value = n;
  };
  return a && (D(e, "mouseenter", () => u(true), { passive: true }), D(e, "mouseleave", () => u(false), { passive: true })), l;
}
function qt(e, t, i = {}) {
  const {
    root: o,
    rootMargin: a = "0px",
    threshold: l = 0.1,
    window: r = z,
    immediate: u = true
  } = i, n = de(() => r && "IntersectionObserver" in r), s = computed(() => {
    const y = F(e);
    return (Array.isArray(y) ? y : [y]).map(Y).filter(qe);
  });
  let d = se;
  const h = ref(u), p = n.value ? watch(
    () => [s.value, Y(o), h.value],
    ([y, m]) => {
      if (d(), !h.value || !y.length)
        return;
      const x = new IntersectionObserver(
        t,
        {
          root: Y(m),
          rootMargin: a,
          threshold: l
        }
      );
      y.forEach((M) => M && x.observe(M)), d = () => {
        x.disconnect(), d = se;
      };
    },
    { immediate: u, flush: "post" }
  ) : se, g = () => {
    d(), p(), h.value = false;
  };
  return Z(g), {
    isSupported: n,
    isActive: h,
    pause() {
      d(), h.value = false;
    },
    resume() {
      h.value = true;
    },
    stop: g
  };
}
function Jt(e, t = {}) {
  const { window: i = z, scrollTarget: o, threshold: a = 0 } = t, l = ref(false);
  return qt(
    e,
    (r) => {
      let u = l.value, n = 0;
      for (const s of r)
        s.time >= n && (n = s.time, u = s.isIntersecting);
      l.value = u;
    },
    {
      root: o,
      window: i,
      threshold: a
    }
  ), l;
}
function Re(e, t, i = {}) {
  const { window: o = z } = i;
  return oe(e, t, o == null ? void 0 : o.localStorage, i);
}
var Gt = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function et(e = {}) {
  const {
    type: t = "page",
    touch: i = true,
    resetOnTouchEnds: o = false,
    initialValue: a = { x: 0, y: 0 },
    window: l = z,
    target: r = l,
    scroll: u = true,
    eventFilter: n
  } = e;
  let s = null;
  const d = ref(a.x), h = ref(a.y), p = ref(null), g = typeof t == "function" ? t : Gt[t], y = (b) => {
    const k = g(b);
    s = b, k && ([d.value, h.value] = k, p.value = "mouse");
  }, m = (b) => {
    if (b.touches.length > 0) {
      const k = g(b.touches[0]);
      k && ([d.value, h.value] = k, p.value = "touch");
    }
  }, x = () => {
    if (!s || !l)
      return;
    const b = g(s);
    s instanceof MouseEvent && b && (d.value = b[0] + l.scrollX, h.value = b[1] + l.scrollY);
  }, M = () => {
    d.value = a.x, h.value = a.y;
  }, V = n ? (b) => n(() => y(b), {}) : (b) => y(b), w = n ? (b) => n(() => m(b), {}) : (b) => m(b), E = n ? () => n(() => x(), {}) : () => x();
  if (r) {
    const b = { passive: true };
    D(r, ["mousemove", "dragover"], V, b), i && t !== "movement" && (D(r, ["touchstart", "touchmove"], w, b), o && D(r, "touchend", M, b)), u && t === "page" && D(l, "scroll", E, { passive: true });
  }
  return {
    x: d,
    y: h,
    sourceType: p
  };
}
function Qt(e, t = {}) {
  const {
    handleOutside: i = true,
    window: o = z
  } = t, a = t.type || "page", { x: l, y: r, sourceType: u } = et(t), n = ref(e ?? (o == null ? void 0 : o.document.body)), s = ref(0), d = ref(0), h = ref(0), p = ref(0), g = ref(0), y = ref(0), m = ref(true);
  let x = () => {
  };
  return o && (x = watch(
    [n, l, r],
    () => {
      const M = Y(n);
      if (!M)
        return;
      const {
        left: V,
        top: w,
        width: E,
        height: b
      } = M.getBoundingClientRect();
      h.value = V + (a === "page" ? o.pageXOffset : 0), p.value = w + (a === "page" ? o.pageYOffset : 0), g.value = b, y.value = E;
      const k = l.value - h.value, I = r.value - p.value;
      m.value = E === 0 || b === 0 || k < 0 || I < 0 || k > E || I > b, (i || !m.value) && (s.value = k, d.value = I);
    },
    { immediate: true }
  ), D(document, "mouseleave", () => {
    m.value = true;
  })), {
    x: l,
    y: r,
    sourceType: u,
    elementX: s,
    elementY: d,
    elementPositionX: h,
    elementPositionY: p,
    elementHeight: g,
    elementWidth: y,
    isOutside: m,
    stop: x
  };
}
var we = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
var tt = /^(?:[a-z]+:|\/\/)/i;
var Zt = /#.*$/;
var ei = /[?#].*$/;
var ti = /(?:(^|\/)index)?\.(?:md|html)$/;
var it = typeof document < "u";
function ii(e, t, i = false) {
  if (t === void 0)
    return false;
  if (e = je(`/${e}`), i)
    return new RegExp(t).test(e);
  if (je(t) !== e)
    return false;
  const o = t.match(Zt);
  return o ? (it ? location.hash : "") === o[0] : true;
}
function je(e) {
  return decodeURI(e).replace(ei, "").replace(ti, "$1");
}
function ai(e) {
  return tt.test(e);
}
var Se = /* @__PURE__ */ new Set();
function ni(e) {
  var i;
  if (Se.size === 0) {
    const o = typeof process == "object" && ((i = process.env) == null ? void 0 : i.VITE_EXTRA_EXTENSIONS) || (we == null ? void 0 : we.VITE_EXTRA_EXTENSIONS) || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (o && typeof o == "string" ? "," + o : "")).split(",").forEach((a) => Se.add(a));
  }
  const t = e.split(".").pop();
  return t == null || !Se.has(t.toLowerCase());
}
var Pe = ref();
var at = false;
var Le = 0;
function oi(e) {
  const t = ref(false);
  if (it) {
    !at && li(), Le++;
    const i = watch(Pe, (o) => {
      var a, l, r;
      o === e.el.value || (a = e.el.value) != null && a.contains(o) ? (t.value = true, (l = e.onFocus) == null || l.call(e)) : (t.value = false, (r = e.onBlur) == null || r.call(e));
    });
    onUnmounted(() => {
      i(), Le--, Le || si();
    });
  }
  return readonly(t);
}
function li() {
  document.addEventListener("focusin", nt), at = true, Pe.value = document.activeElement;
}
function si() {
  document.removeEventListener("focusin", nt);
}
function nt() {
  Pe.value = document.activeElement;
}
var ot = De;
function ri(e) {
  const { pathname: t, search: i, hash: o, protocol: a } = new URL(e, "http://a.com");
  if (ai(e) || e.startsWith("#") || !a.startsWith("http") || !ni(t))
    return e;
  const { site: l } = ot(), r = t.endsWith("/") || t.endsWith(".html") ? e : e.replace(/(?:(^\.+)\/)?.*$/, `$1${t.replace(/(\.md)?$/, l.value.cleanUrls ? "" : ".html")}${i}${o}`);
  return Et(r);
}
var ui = defineComponent({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(e) {
    const t = e, i = computed(() => t.tag ?? (t.href ? "a" : "span")), o = computed(() => t.href && tt.test(t.href));
    return (a, l) => (openBlock(), createBlock(resolveDynamicComponent(i.value), {
      class: normalizeClass(["VPLink", {
        link: a.href,
        "vp-external-link-icon": o.value,
        "no-icon": a.noIcon
      }]),
      href: a.href ? unref(ri)(a.href) : void 0,
      target: a.target ?? (o.value ? "_blank" : void 0),
      rel: a.rel ?? (o.value ? "noreferrer" : void 0)
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "href", "target", "rel"]));
  }
});
var di = { class: "VPMenuLink" };
var ci = defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(e) {
    const { page: t } = ot();
    return (i, o) => (openBlock(), createElementBlock("div", di, [
      createVNode(ui, {
        class: normalizeClass({ active: unref(ii)(unref(t).relativePath, i.item.activeMatch || i.item.link, !!i.item.activeMatch) }),
        href: i.item.link,
        target: i.item.target,
        rel: i.item.rel
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(i.item.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel"])
    ]));
  }
});
var G = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [o, a] of t)
    i[o] = a;
  return i;
};
var lt = G(ci, [["__scopeId", "data-v-935e971c"]]);
var pi = { class: "VPMenuGroup" };
var hi = {
  key: 0,
  class: "title"
};
var fi = defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(e) {
    return (t, i) => (openBlock(), createElementBlock("div", pi, [
      t.text ? (openBlock(), createElementBlock("p", hi, toDisplayString(t.text), 1)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(t.items, (o) => (openBlock(), createElementBlock(Fragment, null, [
        "link" in o ? (openBlock(), createBlock(lt, {
          key: 0,
          item: o
        }, null, 8, ["item"])) : createCommentVNode("", true)
      ], 64))), 256))
    ]));
  }
});
var mi = G(fi, [["__scopeId", "data-v-1f93674a"]]);
var bi = { class: "VPMenu" };
var vi = {
  key: 0,
  class: "items"
};
var gi = defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(e) {
    return (t, i) => (openBlock(), createElementBlock("div", bi, [
      t.items ? (openBlock(), createElementBlock("div", vi, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.items, (o) => (openBlock(), createElementBlock(Fragment, {
          key: o.text
        }, [
          "link" in o ? (openBlock(), createBlock(lt, {
            key: 0,
            item: o
          }, null, 8, ["item"])) : (openBlock(), createBlock(mi, {
            key: 1,
            text: o.text,
            items: o.items
          }, null, 8, ["text", "items"]))
        ], 64))), 128))
      ])) : createCommentVNode("", true),
      renderSlot(t.$slots, "default", {}, void 0, true)
    ]));
  }
});
var yi = G(gi, [["__scopeId", "data-v-b9f48d30"]]);
var _i = (e) => (pushScopeId("data-v-202de4de"), e = e(), popScopeId(), e);
var xi = ["aria-expanded", "aria-label"];
var wi = {
  key: 0,
  class: "text"
};
var Si = ["innerHTML"];
var Li = _i(() => createBaseVNode("span", { class: "vpi-chevron-down text-icon" }, null, -1));
var Mi = {
  key: 1,
  class: "vpi-more-horizontal icon"
};
var Ai = { class: "menu" };
var Wi = defineComponent({
  __name: "VPFlyout",
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(e) {
    const t = ref(false), i = ref();
    oi({ el: i, onBlur: o });
    function o() {
      t.value = false;
    }
    return (a, l) => (openBlock(), createElementBlock("div", {
      class: "VPFlyout",
      ref_key: "el",
      ref: i,
      onMouseenter: l[1] || (l[1] = (r) => t.value = true),
      onMouseleave: l[2] || (l[2] = (r) => t.value = false)
    }, [
      createBaseVNode("button", {
        type: "button",
        class: "button",
        "aria-haspopup": "true",
        "aria-expanded": t.value,
        "aria-label": a.label,
        onClick: l[0] || (l[0] = (r) => t.value = !t.value)
      }, [
        a.button || a.icon ? (openBlock(), createElementBlock("span", wi, [
          a.icon ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([a.icon, "option-icon"])
          }, null, 2)) : createCommentVNode("", true),
          a.button ? (openBlock(), createElementBlock("span", {
            key: 1,
            innerHTML: a.button
          }, null, 8, Si)) : createCommentVNode("", true),
          Li
        ])) : (openBlock(), createElementBlock("span", Mi))
      ], 8, xi),
      createBaseVNode("div", Ai, [
        createVNode(yi, { items: a.items }, {
          default: withCtx(() => [
            renderSlot(a.$slots, "default", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["items"])
      ])
    ], 544));
  }
});
var Ei = G(Wi, [["__scopeId", "data-v-202de4de"]]);
var $i = {
  flex: "~ row",
  bg: "zinc-200/50 dark:zinc-800/50",
  "w-full": "",
  "appearance-none": "",
  "rounded-lg": "",
  "border-none": "",
  "p-1": "",
  "space-x-2": "",
  text: "sm zinc-300",
  outline: "transparent 2px offset-4px dashed",
  transition: "outline duration-200 ease"
};
var ki = {
  class: "nolebase-ui-slider nolebase-ui-slider",
  relative: "",
  "w-full": "",
  "select-none": ""
};
var Oi = ["name", "min", "max", "disabled", "step"];
var Vi = defineComponent({
  __name: "NuInputSlider",
  props: {
    name: { default: "Slider" },
    disabled: { type: Boolean },
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    formatter: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = e, o = t, a = ref(null), l = ref(null), r = ref(i.modelValue), u = ref(i.min), n = ref(i.max), s = Ze(a), d = ref(false);
    onMounted(() => {
      a.value && (a.value.style.setProperty("--nolebase-ui-slider-value", r.value.toString()), a.value.style.setProperty("--nolebase-ui-slider-min", i.min ? i.min.toString() : "0"), a.value.style.setProperty("--nolebase-ui-slider-max", i.max ? i.max.toString() : "100"), a.value.addEventListener("input", () => {
        a.value && a.value.style.setProperty("--nolebase-ui-slider-value", a.value.value.toString());
      }));
    });
    function h(p, g) {
      if (!p || !g)
        return;
      const y = i.max ? i.max : 100, m = i.min ? i.min : 0, x = (r.value - m) / (y - m), M = p.getBoundingClientRect(), w = (g.getBoundingClientRect().width - 32) / 2;
      g.style.setProperty("left", `${x * (M.width - 32) - w}px`);
    }
    return watch(r, (p) => {
      p < u.value && (p = u.value), p > n.value && (p = n.value), o("update:modelValue", p);
    }), watch(u, (p) => {
      r.value >= p || (r.value = p);
    }), watch(n, (p) => {
      r.value <= p || (r.value = p);
    }), watch(s, () => {
      d.value = true, setTimeout(() => {
        if (!s.value) {
          d.value = false;
          return;
        }
        if (!a.value) {
          d.value = false;
          return;
        }
        if (!l.value) {
          d.value = false;
          return;
        }
        h(a.value, l.value), d.value = false;
      }, 50);
    }), watch(r, () => {
      a.value && l.value && h(a.value, l.value);
    }), (p, g) => (openBlock(), createElementBlock("div", $i, [
      createBaseVNode("label", ki, [
        withDirectives(createBaseVNode("input", {
          ref_key: "inputSliderRef",
          ref: a,
          "onUpdate:modelValue": g[0] || (g[0] = (y) => r.value = y),
          type: "range",
          name: i.name,
          min: i.min,
          max: i.max,
          disabled: i.disabled,
          class: normalizeClass([{ disabled: i.disabled }, "nolebase-ui-slider-input nolebase-ui-slider-input-progress-indicator"]),
          step: i.step,
          "w-full": ""
        }, null, 10, Oi), [
          [vModelText, r.value]
        ]),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("span", {
              ref_key: "inputSliderTooltipRef",
              ref: l,
              class: normalizeClass(["nolebase-ui-slider-tooltip", { "opacity-0": unref(s) && d.value }]),
              absolute: "",
              "min-w-12": "",
              "rounded-lg": "",
              "bg-black": "",
              "p-2": "",
              "text-center": "",
              "text-white": ""
            }, toDisplayString(i.formatter ? i.formatter(r.value) : r.value), 3), [
              [vShow, unref(s)]
            ])
          ]),
          _: 1
        })
      ])
    ]));
  }
});
var st = G(Vi, [["__scopeId", "data-v-185ea346"]]);
var Ri = ["title", "disabled"];
var Pi = ["value", "name", "checked", "aria-checked", "disabled"];
var Ni = {
  "inline-flex": "~",
  "items-center": "",
  "align-middle": ""
};
var Ti = defineComponent({
  __name: "Option",
  props: {
    name: {},
    value: {},
    icon: {},
    text: {},
    title: {},
    disabled: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = e, o = t, a = computed({
      get: () => i.modelValue,
      set: (l) => o("update:modelValue", l)
    });
    return (l, r) => (openBlock(), createElementBlock("label", {
      title: i.title,
      class: normalizeClass(["nolebase-ui-input-horizontal-option", { active: a.value === i.value && !i.disabled, disabled: i.disabled }]),
      disabled: i.disabled,
      text: "[14px]",
      "w-full": "",
      "inline-flex": "",
      "cursor-pointer": "",
      "select-none": "",
      "items-center": "",
      "justify-center": "",
      "rounded-md": "",
      "px-3": "",
      "py-2": "",
      "font-medium": ""
    }, [
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": r[0] || (r[0] = (u) => a.value = u),
        type: "radio",
        value: i.value,
        name: i.name,
        checked: a.value === i.value,
        "aria-checked": a.value === i.value,
        disabled: i.disabled,
        role: "radio",
        hidden: ""
      }, null, 8, Pi), [
        [vModelRadio, a.value]
      ]),
      createBaseVNode("span", Ni, [
        i.icon ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(i.icon),
          "aria-hidden": "true"
        }, null, 2)) : createCommentVNode("", true),
        i.text ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass([i.icon ? "ml-1" : ""])
        }, toDisplayString(i.text), 3)) : createCommentVNode("", true)
      ])
    ], 10, Ri));
  }
});
var Hi = {
  flex: "~ row",
  bg: "zinc-100 dark:zinc-900",
  text: "sm zinc-400 dark:zinc-500",
  "w-full": "",
  "appearance-none": "",
  "rounded-lg": "",
  "rounded-md": "",
  "border-none": "",
  "p-1": "",
  "space-x-2": ""
};
var ce = defineComponent({
  __name: "index",
  props: {
    disabled: { type: Boolean },
    modelValue: {},
    options: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = e, o = t, a = computed({
      get: () => i.modelValue,
      set: (l) => o("update:modelValue", l)
    });
    return (l, r) => (openBlock(), createElementBlock("fieldset", Hi, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(i.options, (u) => (openBlock(), createBlock(Ti, {
        key: u.name,
        modelValue: a.value,
        "onUpdate:modelValue": r[0] || (r[0] = (n) => a.value = n),
        name: u.name,
        icon: u.icon,
        title: u.title,
        text: u.text,
        "aria-label": u.ariaLabel,
        disabled: i.disabled,
        value: u.value
      }, null, 8, ["modelValue", "name", "icon", "title", "text", "aria-label", "disabled", "value"]))), 128))
    ]));
  }
});
var K = "0px";
var rt = defineComponent({
  __name: "NuVerticalTransition",
  props: {
    duration: { default: 250 },
    easingEnter: { default: "ease-in-out" },
    easingLeave: { default: "ease-in-out" },
    opacityClosed: { default: 0 },
    opacityOpened: { default: 1 }
  },
  setup(e) {
    const t = e;
    function i(n) {
      return {
        height: n.style.height,
        width: n.style.width,
        position: n.style.position,
        visibility: n.style.visibility,
        overflow: n.style.overflow,
        paddingTop: n.style.paddingTop,
        paddingBottom: n.style.paddingBottom,
        borderTopWidth: n.style.borderTopWidth,
        borderBottomWidth: n.style.borderBottomWidth,
        marginTop: n.style.marginTop,
        marginBottom: n.style.marginBottom
      };
    }
    function o(n, s) {
      const { width: d } = getComputedStyle(n);
      n.style.width = d, n.style.position = "absolute", n.style.visibility = "hidden", n.style.height = "";
      const { height: h } = getComputedStyle(n);
      return n.style.width = s.width, n.style.position = s.position, n.style.visibility = s.visibility, n.style.height = K, n.style.overflow = "hidden", s.height && s.height !== K ? s.height : h;
    }
    function a(n, s, d, h, p) {
      const g = n.animate(h, p);
      n.style.height = s.height, g.onfinish = () => {
        n.style.overflow = s.overflow, d();
      };
    }
    function l(n, s) {
      return [
        {
          height: K,
          opacity: t.opacityClosed,
          paddingTop: K,
          paddingBottom: K,
          borderTopWidth: K,
          borderBottomWidth: K,
          marginTop: K,
          marginBottom: K
        },
        {
          height: n,
          opacity: t.opacityOpened,
          paddingTop: s.paddingTop,
          paddingBottom: s.paddingBottom,
          borderTopWidth: s.borderTopWidth,
          borderBottomWidth: s.borderBottomWidth,
          marginTop: s.marginTop,
          marginBottom: s.marginBottom
        }
      ];
    }
    function r(n, s) {
      const d = n, h = i(d), p = o(d, h), g = l(p, h), y = { duration: t.duration, easing: t.easingEnter };
      a(d, h, s, g, y);
    }
    function u(n, s) {
      const d = n, h = i(d), { height: p } = getComputedStyle(d);
      d.style.height = p, d.style.overflow = "hidden";
      const g = l(p, h).reverse(), y = { duration: t.duration, easing: t.easingLeave };
      a(d, h, s, g, y);
    }
    return (n, s) => (openBlock(), createBlock(Transition, {
      css: false,
      onEnter: r,
      onLeave: u
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }));
  }
});
function Me(e, t) {
  if (!t)
    return;
  const i = e.split(".");
  let o = t;
  for (const a of i)
    if (o = o == null ? void 0 : o[a], !o)
      return;
  return typeof o == "string" ? o : String(o);
}
function ji(e, t, i) {
  const { locales: o, defaultLocales: a } = i;
  if (!o && !a || !e)
    return t;
  let l = o[e];
  l || (l = a[e], l || (l = i.defaultEnLocale));
  const r = Me(t, l);
  if (r)
    return r;
  const u = a[e];
  if (u) {
    const s = Me(t, u);
    if (s)
      return s;
  }
  const n = Me(t, i.defaultEnLocale);
  return n || t;
}
function Bi(e, t, i) {
  return () => {
    const o = inject(e, { locales: {} }), { lang: a } = De(), l = computed(() => a.value || "en");
    return {
      t(r, u) {
        const n = computed(() => ji(l.value, r, {
          locales: o.locales || {},
          defaultLocales: t,
          defaultEnLocale: i
        }));
        return n.value ? !u || !u.props ? n.value : computed(() => {
          let s = n.value;
          return Object.entries(u.props).forEach(([d, h]) => {
            s = s.replace(new RegExp(`{{${d}}}`, "g"), String(h));
          }), s;
        }).value : r;
      }
    };
  };
}
var _e = {
  title: {
    title: "Enhanced Readability",
    titleAriaLabel: "Enhanced Readability"
  },
  layoutSwitch: {
    title: "Layout Switch",
    titleHelpMessage: "Adjust the layout style of VitePress to adapt to different reading needs and screens.",
    titleAriaLabel: "Layout Switch",
    titleScreenNavWarningMessage: "No available layout can be switched in mobile screen.",
    optionFullWidth: "Expand all",
    optionFullWidthAriaLabel: "Expand all",
    optionFullWidthHelpMessage: "The sidebar and content area occupy the entire width of the screen.",
    optionSidebarWidthAdjustableOnly: "Expand sidebar with adjustable values",
    optionSidebarWidthAdjustableOnlyAriaLabel: "Expand sidebar with adjustable values",
    optionSidebarWidthAdjustableOnlyHelpMessage: "Expand sidebar width and add a new slider for user to choose and customize their desired width of the maximum width of sidebar can go, but the content area width will remain the same.",
    optionBothWidthAdjustable: "Expand all with adjustable values",
    optionBothWidthAdjustableAriaLabel: "Expand all with adjustable values",
    optionBothWidthAdjustableHelpMessage: "Expand both sidebar and document content and add two new slider for user to choose and customize their desired width of the maximum width of either sidebar or document content can go.",
    optionOriginalWidth: "Original width",
    optionOriginalWidthAriaLabel: "Original width",
    optionOriginalWidthHelpMessage: "The original layout width of VitePress",
    contentLayoutMaxWidth: {
      title: "Content Layout Max Width",
      titleAriaLabel: "Content Layout Max Width",
      titleHelpMessage: "Adjust the exact value of the document content width of VitePress layout to adapt to different reading needs and screens.",
      titleScreenNavWarningMessage: "Content Layout Max Width is not available in mobile screen temporarily.",
      slider: "Adjust the maximum width of the content layout",
      sliderAriaLabel: "Adjust the maximum width of the content layout",
      sliderHelpMessage: "A ranged slider for user to choose and customize their desired width of the maximum width of the content layout can go."
    },
    pageLayoutMaxWidth: {
      title: "Page Layout Max Width",
      titleAriaLabel: "Page Layout Max Width",
      titleHelpMessage: "Adjust the exact value of the page width of VitePress layout to adapt to different reading needs and screens.",
      titleScreenNavWarningMessage: "Page Layout Max Width is not available in mobile screen temporarily.",
      slider: "Adjust the maximum width of the page layout",
      sliderAriaLabel: "Adjust the maximum width of the page layout",
      sliderHelpMessage: "A ranged slider for user to choose and customize their desired width of the maximum width of the page layout can go."
    }
  },
  spotlight: {
    title: "Spotlight",
    titleAriaLabel: "Spotlight",
    titleHelpMessage: "Highlight the line where the mouse is currently hovering in the content to optimize for users who may have reading and focusing difficulties.",
    titleScreenNavWarningMessage: "Spotlight is not available in mobile screen temporarily.",
    optionOn: "On",
    optionOnAriaLabel: "On",
    optionOnHelpMessage: "Turn on Spotlight.",
    optionOff: "Off",
    optionOffAriaLabel: "Off",
    optionOffHelpMessage: "Turn off Spotlight.",
    styles: {
      title: "Spotlight Styles",
      titleAriaLabel: "Spotlight Styles",
      titleHelpMessage: "Adjust the styles of Spotlight.",
      titleScreenNavWarningMessage: "Spotlight Styles is not available in mobile screen temporarily.",
      optionUnder: "Under",
      optionUnderAriaLabel: "Under",
      optionUnderHelpMessage: "Add a solid background color underneath the hovering element to highlight where the cursor is currently hovering.",
      optionAside: "Aside",
      optionAsideAriaLabel: "Aside",
      optionAsideHelpMessage: "Add a fixed line with solid color aside the hovering element to highlight where the cursor is currently hovering."
    }
  }
};
var Fi = _e;
_e.title;
_e.layoutSwitch;
_e.spotlight;
var xe = {
  title: {
    title: "阅读增强",
    titleAriaLabel: "阅读增强"
  },
  layoutSwitch: {
    title: "布局切换",
    titleAriaLabel: "布局切换",
    titleHelpMessage: "调整 VitePress 的布局样式，以适配不同的阅读习惯和屏幕环境。",
    titleScreenNavWarningMessage: "移动端无可切换布局。",
    optionFullWidth: "全部展开",
    optionFullWidthAriaLabel: "全部展开",
    optionFullWidthHelpMessage: "使侧边栏和内容区域占据整个屏幕的全部宽度。",
    optionSidebarWidthAdjustableOnly: "全部展开，但侧边栏宽度可调",
    optionSidebarWidthAdjustableOnlyAriaLabel: "全部展开，但侧边栏宽度可调",
    optionSidebarWidthAdjustableOnlyHelpMessage: "侧边栏宽度可调，但内容区域宽度不变，调整后的侧边栏将可以占据整个屏幕的最大宽度。",
    optionBothWidthAdjustable: "全部展开，且侧边栏和内容区域宽度均可调",
    optionBothWidthAdjustableAriaLabel: "全部展开，且侧边栏和内容区域宽度均可调",
    optionBothWidthAdjustableHelpMessage: "侧边栏和内容区域宽度均可调，调整后的侧边栏和内容区域将可以占据整个屏幕的最大宽度。",
    optionOriginalWidth: "原始宽度",
    optionOriginalWidthAriaLabel: "原始宽度",
    optionOriginalWidthHelpMessage: "原始的 VitePress 默认布局宽度",
    contentLayoutMaxWidth: {
      title: "内容最大宽度",
      titleAriaLabel: "内容最大宽度",
      titleHelpMessage: "调整 VitePress 布局中内容区域的宽度，以适配不同的阅读习惯和屏幕环境。",
      titleScreenNavWarningMessage: "移动端暂不支持调整内容最大宽度。",
      slider: "调整内容最大宽度",
      sliderAriaLabel: "调整内容最大宽度",
      sliderHelpMessage: "一个可调整的滑块，用于选择和自定义内容最大宽度。"
    },
    pageLayoutMaxWidth: {
      title: "页面最大宽度",
      titleAriaLabel: "页面最大宽度",
      titleHelpMessage: "调整 VitePress 布局中页面的宽度，以适配不同的阅读习惯和屏幕环境。",
      titleScreenNavWarningMessage: "移动端暂不支持调整页面最大宽度。",
      slider: "调整页面最大宽度",
      sliderAriaLabel: "调整页面最大宽度",
      sliderHelpMessage: "一个可调整的滑块，用于选择和自定义页面最大宽度。"
    }
  },
  spotlight: {
    title: "聚光灯",
    titleAriaLabel: "聚光灯",
    titleHelpMessage: "支持在正文中高亮当前鼠标悬停的行和元素，以优化阅读和专注困难的用户的阅读体验。",
    titleScreenNavWarningMessage: "移动端暂不支持聚光灯。",
    optionOn: "开启",
    optionOnAriaLabel: "开启",
    optionOnHelpMessage: "开启聚光灯。",
    optionOff: "关闭",
    optionOffAriaLabel: "关闭",
    optionOffHelpMessage: "关闭聚光灯。",
    styles: {
      title: "聚光灯样式",
      titleAriaLabel: "聚光灯样式",
      titleHelpMessage: "调整聚光灯的样式。",
      titleScreenNavWarningMessage: "移动端暂不支持调整聚光灯样式。",
      optionUnder: "置于底部",
      optionUnderAriaLabel: "置于底部",
      optionUnderHelpMessage: "在当前鼠标悬停的元素下方添加一个纯色背景以突出显示当前鼠标悬停的位置。",
      optionAside: "置于侧边",
      optionAsideAriaLabel: "置于侧边",
      optionAsideHelpMessage: "在当前鼠标悬停的元素旁边添加一条固定的纯色线以突出显示当前鼠标悬停的位置。"
    }
  }
};
var Ci = xe;
xe.title;
xe.layoutSwitch;
xe.spotlight;
var Ee = Fi;
var Ae = Ci;
var Ui = {
  "zh-CN": Ae,
  "zh-Hans": Ae,
  zh: Ae,
  "en-US": Ee,
  en: Ee
};
var Q = Bi(ee, Ui, Ee);
function Ne() {
  const e = J();
  return {
    trigger: (t) => {
      t.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchAnimated"), Ve(() => {
        e.value && t && t.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchAnimated");
      }, 5e3)();
    }
  };
}
var Ii = { key: 1 };
var zi = defineComponent({
  __name: "MenuTitle",
  props: {
    title: {},
    icon: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (i, o) => (openBlock(), createElementBlock("h3", {
      class: normalizeClass(["VPNolebaseEnhancedReadabilitiesMenuTitle", { disabled: !!t.disabled }]),
      text: "[14px] $vp-nolebase-enhanced-readabilities-menu-text-color",
      "inline-flex": "",
      "select-none": "",
      "items-center": "",
      "align-middle": "",
      "font-medium": ""
    }, [
      t.icon ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(t.icon),
        "mr-1": "",
        "aria-hidden": "true"
      }, null, 2)) : createCommentVNode("", true),
      t.title ? (openBlock(), createElementBlock("span", Ii, toDisplayString(t.title), 1)) : createCommentVNode("", true),
      renderSlot(i.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var te = G(zi, [["__scopeId", "data-v-e60d9e67"]]);
var Di = defineComponent({
  __name: "MenuHelp",
  props: {
    menuTitleElementRef: {},
    isPoppedUp: { type: Boolean }
  },
  emits: ["update:isPoppedUp"],
  setup(e, { emit: t }) {
    const i = e, o = t, a = toRef(i, "menuTitleElementRef"), l = ref(), r = ref(), u = J(), n = Ze(l), s = We(a), d = We(r), h = computed(() => ({
      top: `${s.top.value}px`,
      left: `${s.left.value - d.width.value - 16}px`
    }));
    return watch(n, (p) => {
      o("update:isPoppedUp", p);
    }), watch(n, () => {
      s.update(), d.update();
    }, {
      flush: "pre"
    }), (p, g) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("span", {
        ref_key: "helpElementRef",
        ref: l,
        text: "$vp-nolebase-enhanced-readabilities-menu-text-color",
        class: "i-carbon:help-filled opacity-50 hover:opacity-100",
        transition: "all duration-200 ease",
        "cursor-help": ""
      }, null, 512),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            unref(u) ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "popupElementRef",
              ref: r,
              style: normalizeStyle(h.value),
              bg: "$vp-c-bg-elv",
              text: "$vp-nolebase-enhanced-readabilities-menu-text-color",
              border: "1 solid $vp-c-divider",
              "pointer-events-none": "",
              fixed: "",
              "z-100": "",
              "rounded-xl": "",
              "p-4": "",
              "shadow-xl": ""
            }, [
              renderSlot(p.$slots, "default", {}, void 0, true)
            ], 4)), [
              [vShow, unref(n)]
            ]) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
});
var pe = G(Di, [["__scopeId", "data-v-7bf7b770"]]);
var Xi = {
  "space-y-2": "",
  role: "radiogroup"
};
var Yi = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var Ki = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var qi = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var Ji = {
  text: "sm",
  "mb-2": "",
  flex: "~",
  "items-center": "",
  "align-middle": ""
};
var Gi = { "font-semibold": "" };
var ut = defineComponent({
  __name: "LayoutSwitch",
  setup(e) {
    var g;
    const t = inject(ee, {}), i = ref(), o = ref(false), a = ref(false), l = Xe(), r = J(), u = ne("(min-width: 768px)"), n = Re(Oe, ((g = t.layoutSwitch) == null ? void 0 : g.defaultMode) || R.Original), { t: s } = Q(), { trigger: d } = Ne(), h = computed(() => [
      {
        value: R.FullWidth,
        title: s("layoutSwitch.optionFullWidth"),
        helpMessage: s("layoutSwitch.optionFullWidthHelpMessage"),
        ariaLabel: s("layoutSwitch.optionFullWidthAriaLabel"),
        icon: "i-icon-park-outline:full-screen-one",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.SidebarWidthAdjustableOnly,
        title: s("layoutSwitch.optionSidebarWidthAdjustableOnly"),
        helpMessage: s("layoutSwitch.optionSidebarWidthAdjustableOnlyHelpMessage"),
        ariaLabel: s("layoutSwitch.optionSidebarWidthAdjustableOnlyAriaLabel"),
        icon: "i-icon-park-outline:full-screen-two",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.BothWidthAdjustable,
        title: s("layoutSwitch.optionBothWidthAdjustable"),
        helpMessage: s("layoutSwitch.optionSidebarWidthAdjustableOnlyHelpMessage"),
        ariaLabel: s("layoutSwitch.optionBothWidthAdjustableAriaLabel"),
        icon: "i-icon-park-outline:full-screen",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.Original,
        title: s("layoutSwitch.optionOriginalWidth"),
        helpMessage: s("layoutSwitch.optionOriginalWidthHelpMessage"),
        ariaLabel: s("layoutSwitch.optionOriginalWidthAriaLabel"),
        icon: "i-icon-park-outline:overall-reduction",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      }
    ]);
    function p(y, m) {
      switch (y) {
        case R.FullWidth:
          m && d(document.body), document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
        case R.SidebarWidthAdjustableOnly:
          m && d(document.body), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"), document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
        case R.BothWidthAdjustable:
          m && d(document.body), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"), document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
        case R.Original:
          m && d(document.body), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"), document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");
          break;
      }
    }
    return watch(r, (y) => {
      var m;
      y && (p(n.value, false), Te.includes(n.value) || (n.value = ((m = t.layoutSwitch) == null ? void 0 : m.defaultMode) || R.BothWidthAdjustable));
    }), watch(n, (y) => {
      var m;
      r.value && (p(y, true), Te.includes(y) || (n.value = ((m = t.layoutSwitch) == null ? void 0 : m.defaultMode) || R.BothWidthAdjustable));
    }), watch(l, () => {
      p(n.value, true);
    }), watch(u, () => {
      u.value || (a.value = true);
    }), onMounted(() => {
      u.value || (a.value = true);
    }), (y, m) => {
      var x;
      return openBlock(), createElementBlock("div", Xi, [
        createBaseVNode("div", {
          ref_key: "menuTitleElementRef",
          ref: i,
          flex: "",
          "items-center": ""
        }, [
          createVNode(te, {
            icon: "i-icon-park-outline:layout-one",
            title: unref(s)("layoutSwitch.title"),
            "aria-label": unref(s)("layoutSwitch.titleAriaLabel") || unref(s)("layoutSwitch.title"),
            flex: "1",
            disabled: a.value,
            "pr-4": ""
          }, null, 8, ["title", "aria-label", "disabled"]),
          (x = unref(t).layoutSwitch) != null && x.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(pe, {
            key: 0,
            "is-popped-up": o.value,
            "onUpdate:isPoppedUp": m[0] || (m[0] = (M) => o.value = M),
            "menu-title-element-ref": i.value
          }, {
            default: withCtx(() => [
              createBaseVNode("h4", Yi, toDisplayString(unref(s)("layoutSwitch.title")), 1),
              createBaseVNode("p", Ki, [
                createBaseVNode("span", null, toDisplayString(unref(s)("layoutSwitch.titleHelpMessage")), 1)
              ]),
              createBaseVNode("div", qi, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(h.value, (M, V) => (openBlock(), createElementBlock("div", {
                  key: V,
                  text: "sm",
                  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
                  "max-w-100": "",
                  "rounded-xl": "",
                  "p-3": ""
                }, [
                  createBaseVNode("h5", Ji, [
                    createBaseVNode("span", {
                      "mr-1": "",
                      class: normalizeClass([M.icon])
                    }, null, 2),
                    createBaseVNode("span", Gi, toDisplayString(M.title), 1)
                  ]),
                  createBaseVNode("span", null, toDisplayString(M.helpMessage), 1)
                ]))), 128))
              ])
            ]),
            _: 1
          }, 8, ["is-popped-up", "menu-title-element-ref"]))
        ], 512),
        createVNode(unref(ce), {
          modelValue: unref(n),
          "onUpdate:modelValue": m[1] || (m[1] = (M) => isRef(n) ? n.value = M : null),
          bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
          text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
          outline: "transparent 2px offset-4px dashed",
          transition: "outline duration-200 ease",
          class: normalizeClass({
            "outline-$vp-c-brand-1!": o.value
          }),
          options: h.value,
          disabled: a.value
        }, null, 8, ["modelValue", "class", "options", "disabled"])
      ]);
    };
  }
});
var Qi = {
  "space-y-2": "",
  role: "range"
};
var Zi = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var ea = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var ta = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var ia = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var aa = {
  text: "sm",
  "mb-2": "",
  flex: "~",
  "items-center": "",
  "align-middle": ""
};
var na = createBaseVNode("span", {
  "i-icon-park-outline:scale": "",
  "mr-1": ""
}, null, -1);
var oa = { "font-semibold": "" };
var la = defineComponent({
  __name: "LayoutSwitchPageLayoutMaxWidthSlider",
  setup(e) {
    var V, w, E;
    const t = ref(60), i = computed(() => t.value * 100), o = ref(100), a = computed(() => o.value * 100), l = inject(ee, {}), r = ref(), u = ref(false), n = ref(false), s = J(), d = ne("(min-width: 768px)"), h = ne("(min-width: 1440px)"), p = oe(kt, (((w = (V = l.layoutSwitch) == null ? void 0 : V.pageLayoutMaxWidth) == null ? void 0 : w.defaultMaxWidth) || 100) * 100), g = Re(Oe, ((E = l.layoutSwitch) == null ? void 0 : E.defaultMode) || R.BothWidthAdjustable), y = computed({
      get: () => {
        const b = Number.parseInt(String(p.value));
        return Number.isNaN(b) ? a.value : b < i.value ? i.value : b > a.value ? a.value : b;
      },
      set: (b) => {
        b < i.value && (b = i.value), b > a.value && (b = a.value), p.value = b;
      }
    }), { t: m } = Q(), { trigger: x } = Ne(), M = Ve((b) => {
      h.value ? (x(document.body), document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-page-max-width", `${Math.ceil(b / 100)}%`)) : document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-page-max-width", "100%");
    }, 1e3);
    return watch(s, (b) => {
      b && M(y.value);
    }), watch(d, () => {
      d.value || (n.value = true);
    }), watch(h, () => {
      M(y.value);
    }), onMounted(() => {
      d.value || (n.value = true);
    }), watch(y, (b) => {
      s.value && M(b);
    }), (b, k) => (openBlock(), createBlock(unref(rt), { duration: 200 }, {
      default: withCtx(() => {
        var I, U;
        return [
          withDirectives(createBaseVNode("div", Qi, [
            createBaseVNode("div", {
              ref_key: "menuTitleElementRef",
              ref: r,
              flex: "",
              "items-center": ""
            }, [
              createVNode(te, {
                icon: "i-icon-park-outline:auto-width-one",
                title: unref(m)("layoutSwitch.pageLayoutMaxWidth.title"),
                "aria-label": unref(m)("layoutSwitch.pageLayoutMaxWidth.titleAriaLabel") || unref(m)("layoutSwitch.pageLayoutMaxWidth.title"),
                disabled: n.value,
                flex: "1",
                "pr-2": ""
              }, null, 8, ["title", "aria-label", "disabled"]),
              (U = (I = unref(l).layoutSwitch) == null ? void 0 : I.pageLayoutMaxWidth) != null && U.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(pe, {
                key: 0,
                "is-popped-up": u.value,
                "onUpdate:isPoppedUp": k[0] || (k[0] = (B) => u.value = B),
                "menu-title-element-ref": r.value
              }, {
                default: withCtx(() => [
                  createBaseVNode("h4", Zi, toDisplayString(unref(m)("layoutSwitch.pageLayoutMaxWidth.title")), 1),
                  createBaseVNode("p", ea, [
                    createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.pageLayoutMaxWidth.titleHelpMessage")), 1)
                  ]),
                  createBaseVNode("div", ta, [
                    createBaseVNode("div", ia, [
                      createBaseVNode("h5", aa, [
                        na,
                        createBaseVNode("span", oa, toDisplayString(unref(m)("layoutSwitch.pageLayoutMaxWidth.slider")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.pageLayoutMaxWidth.sliderHelpMessage")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["is-popped-up", "menu-title-element-ref"]))
            ], 512),
            createVNode(unref(st), {
              modelValue: y.value,
              "onUpdate:modelValue": k[1] || (k[1] = (B) => y.value = B),
              bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
              text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
              name: "VitePress Nolebase Enhanced Readabilities page layout max width range slider",
              class: normalizeClass({
                "outline-$vp-c-brand-1!": u.value,
                "rounded-md": u.value
              }),
              "aria-label": unref(m)("layoutSwitch.pageLayoutMaxWidth.sliderAriaLabel"),
              disabled: n.value,
              min: i.value,
              max: a.value,
              formatter: (B) => `${Math.ceil(B / 100)}%`
            }, null, 8, ["modelValue", "class", "aria-label", "disabled", "min", "max", "formatter"])
          ], 512), [
            [vShow, unref(g) === unref(R).SidebarWidthAdjustableOnly || unref(g) === unref(R).BothWidthAdjustable]
          ])
        ];
      }),
      _: 1
    }));
  }
});
var sa = {
  "space-y-2": "",
  role: "range"
};
var ra = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var ua = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var da = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var ca = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var pa = {
  text: "sm",
  "mb-2": "",
  flex: "~",
  "items-center": "",
  "align-middle": ""
};
var ha = createBaseVNode("span", {
  "i-icon-park-outline:scale": "",
  "mr-1": ""
}, null, -1);
var fa = { "font-semibold": "" };
var ma = defineComponent({
  __name: "LayoutSwitchContentLayoutMaxWidthSlider",
  setup(e) {
    var V, w, E;
    const t = ref(60), i = computed(() => t.value * 100), o = ref(100), a = computed(() => o.value * 100), l = inject(ee, {}), r = ref(), u = ref(false), n = ref(false), s = J(), d = ne("(min-width: 768px)"), h = ne("(min-width: 1440px)"), p = oe($t, (((w = (V = l.layoutSwitch) == null ? void 0 : V.contentLayoutMaxWidth) == null ? void 0 : w.defaultMaxWidth) || 80) * 100), g = Re(Oe, ((E = l.layoutSwitch) == null ? void 0 : E.defaultMode) || R.BothWidthAdjustable), y = computed({
      get: () => {
        const b = Number.parseInt(String(p.value));
        return Number.isNaN(b) ? a.value : b < i.value ? i.value : b > a.value ? a.value : b;
      },
      set: (b) => {
        b < i.value && (b = i.value), b > a.value && (b = a.value), p.value = b;
      }
    }), { t: m } = Q(), { trigger: x } = Ne(), M = Ve((b) => {
      h.value ? (x(document.body), document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-content-max-width", `${Math.ceil(b / 100)}%`)) : (x(document.body), document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-content-max-width", "100%"));
    }, 1e3);
    return watch(s, (b) => {
      b && M(y.value);
    }), watch(d, () => {
      d.value || (n.value = true);
    }), watch(h, () => {
      M(y.value);
    }), onMounted(() => {
      d.value || (n.value = true);
    }), watch(y, (b) => {
      s.value && M(b);
    }), (b, k) => (openBlock(), createBlock(unref(rt), { duration: 200 }, {
      default: withCtx(() => {
        var I, U;
        return [
          withDirectives(createBaseVNode("div", sa, [
            createBaseVNode("div", {
              ref_key: "menuTitleElementRef",
              ref: r,
              flex: "",
              "items-center": ""
            }, [
              createVNode(te, {
                icon: "i-icon-park-outline:auto-line-width",
                title: unref(m)("layoutSwitch.contentLayoutMaxWidth.title"),
                "aria-label": unref(m)("layoutSwitch.contentLayoutMaxWidth.titleAriaLabel") || unref(m)("layoutSwitch.contentLayoutMaxWidth.title"),
                disabled: n.value,
                flex: "1",
                "pr-4": ""
              }, null, 8, ["title", "aria-label", "disabled"]),
              (U = (I = unref(l).layoutSwitch) == null ? void 0 : I.contentLayoutMaxWidth) != null && U.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(pe, {
                key: 0,
                "is-popped-up": u.value,
                "onUpdate:isPoppedUp": k[0] || (k[0] = (B) => u.value = B),
                "menu-title-element-ref": r.value
              }, {
                default: withCtx(() => [
                  createBaseVNode("h4", ra, toDisplayString(unref(m)("layoutSwitch.contentLayoutMaxWidth.title")), 1),
                  createBaseVNode("p", ua, [
                    createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.contentLayoutMaxWidth.titleHelpMessage")), 1)
                  ]),
                  createBaseVNode("div", da, [
                    createBaseVNode("div", ca, [
                      createBaseVNode("h5", pa, [
                        ha,
                        createBaseVNode("span", fa, toDisplayString(unref(m)("layoutSwitch.contentLayoutMaxWidth.slider")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(unref(m)("layoutSwitch.contentLayoutMaxWidth.sliderHelpMessage")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["is-popped-up", "menu-title-element-ref"]))
            ], 512),
            createVNode(unref(st), {
              modelValue: y.value,
              "onUpdate:modelValue": k[1] || (k[1] = (B) => y.value = B),
              bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
              text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
              name: "VitePress Nolebase Enhanced Readabilities content layout max width range slider",
              class: normalizeClass({
                "outline-$vp-c-brand-1!": u.value,
                "rounded-md": u.value
              }),
              "aria-label": unref(m)("layoutSwitch.contentLayoutMaxWidth.optionFullWidthAriaLabel"),
              disabled: n.value,
              min: i.value,
              max: a.value,
              formatter: (B) => `${Math.ceil(B / 100)}%`
            }, null, 8, ["modelValue", "class", "aria-label", "disabled", "min", "max", "formatter"])
          ], 512), [
            [vShow, unref(g) === unref(R).BothWidthAdjustable]
          ])
        ];
      }),
      _: 1
    }));
  }
});
var ba = defineComponent({
  __name: "SpotlightHoverBlock",
  props: {
    enabled: { type: Boolean }
  },
  setup(e) {
    var V;
    const t = e, i = inject(ee, {}), o = ref(false), a = ref({ display: "none" }), l = ref(), r = ref(), u = Xe(), n = oe(Ke, ((V = i.spotlight) == null ? void 0 : V.defaultStyle) || ie.Aside), { x: s, y: d } = et({ type: "client" }), { isOutside: h } = Qt(l), { element: p } = Kt({ x: s, y: d }), g = reactive(We(p)), y = Jt(r);
    D("scroll", g.update, true);
    function m(w) {
      return {
        display: "block",
        width: `${w.width + 8}px`,
        height: `${w.height + 8}px`,
        left: `${w.left - 4}px`,
        top: `${w.top - 4}px`,
        transition: "all 0.2s ease",
        borderRadius: "8px"
      };
    }
    function x(w) {
      return w === null ? null : w.parentElement === document.querySelector(".VPDoc main .vp-doc > div") ? w : x(w.parentElement);
    }
    function M() {
      if (!(p.value && !h.value))
        return;
      const w = x(p.value);
      if (r.value = w || void 0, r.value && r.value.tagName === "P") {
        const E = r.value, b = window.getComputedStyle(E), k = Number.parseFloat(b.lineHeight), I = Math.floor(E.offsetHeight / k), U = E.getBoundingClientRect(), B = d.value - U.top;
        for (let A = 0; A < I; A++) {
          const T = A * k, X = k, mt = E.offsetLeft, bt = E.offsetWidth;
          if (B >= T && B < T + X) {
            a.value = m({
              top: T + U.top,
              left: mt + U.left,
              width: bt,
              height: X
            });
            break;
          }
        }
      } else if (r.value) {
        const E = r.value.getBoundingClientRect();
        a.value = m({
          top: E.top,
          left: E.left,
          width: E.width,
          height: E.height
        });
      }
    }
    return onMounted(() => {
      var w;
      document && document.body && (document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-spotlight-under-bg-color", ((w = i == null ? void 0 : i.spotlight) == null ? void 0 : w.hoverBlockColor) || "rgb(240 197 52 / 10%)"), l.value = document.querySelector(".VPDoc main .vp-doc"));
    }), watch(u, async () => {
      await nextTick(), l.value = document.querySelector(".VPDoc main .vp-doc"), o.value = true, a.value = { display: "none" }, g.update(), M(), o.value = false;
    }), watch([s, d], () => {
      t.enabled && M();
    }), watch(g, (w) => {
      t.enabled && (w.width === 0 && w.height === 0 ? a.value = { display: "none" } : M());
    }), watch(y, (w) => {
      t.enabled && !w && (a.value = { display: "none" });
    }), watch(() => t.enabled, (w) => {
      w || (a.value = { display: "none" });
    }), (w, E) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      t.enabled && !o.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle(a.value),
        "aria-hidden": "true",
        focusable: "false",
        "pointer-events-none": "",
        fixed: "",
        border: "1 $vp-c-brand",
        class: normalizeClass(["VPNolebaseEnhancedReadabilitiesSpotlightHoverBlock", [
          unref(n) === unref(ie).Under ? "VPNolebaseEnhancedReadabilitiesSpotlightHoverBlockUnder" : "",
          unref(n) === unref(ie).Aside ? "VPNolebaseEnhancedReadabilitiesSpotlightHoverBlockAside" : ""
        ]])
      }, null, 6)) : createCommentVNode("", true)
    ]));
  }
});
var va = G(ba, [["__scopeId", "data-v-5cc9a3f8"]]);
var ga = {
  "space-y-2": "",
  role: "radiogroup"
};
var ya = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var _a = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var xa = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var wa = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var Sa = {
  text: "sm",
  "mb-2": ""
};
var La = createBaseVNode("span", {
  "mr-1": "",
  "font-bold": ""
}, "ON", -1);
var Ma = { "font-semibold": "" };
var Aa = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var Wa = {
  text: "sm",
  "mb-2": ""
};
var Ea = createBaseVNode("span", {
  "mr-1": "",
  "font-bold": ""
}, "OFF", -1);
var $a = { "font-semibold": "" };
var dt = defineComponent({
  __name: "Spotlight",
  setup(e) {
    var d;
    const t = inject(ee, {}), i = ref(), o = ref(false), a = ref(false), l = J(), r = ne("(pointer: coarse)"), u = oe(Ye, ((d = t.spotlight) == null ? void 0 : d.defaultToggle) || false), { t: n } = Q(), s = computed(() => [
      {
        value: true,
        title: n("spotlight.optionOn"),
        ariaLabel: n("spotlight.optionOnAriaLabel"),
        text: "ON",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      },
      {
        value: false,
        title: n("spotlight.optionOff"),
        ariaLabel: n("spotlight.optionOffAriaLabel"),
        text: "OFF",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      }
    ]);
    return onMounted(() => {
      a.value = r.value;
    }), watch(r, () => {
      a.value = r.value;
    }), (h, p) => {
      var g;
      return openBlock(), createElementBlock("div", ga, [
        unref(l) && unref(u) && !a.value ? (openBlock(), createBlock(va, {
          key: 0,
          enabled: unref(u) && !a.value
        }, null, 8, ["enabled"])) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "menuTitleElementRef",
          ref: i,
          relative: "",
          flex: "",
          "items-center": ""
        }, [
          createVNode(te, {
            icon: "i-icon-park-outline:click",
            title: unref(n)("spotlight.title"),
            "aria-label": unref(n)("spotlight.titleArialLabel") || unref(n)("spotlight.title"),
            disabled: a.value,
            flex: "1",
            "pr-4": ""
          }, null, 8, ["title", "aria-label", "disabled"]),
          (g = unref(t).spotlight) != null && g.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(pe, {
            key: 0,
            "is-popped-up": o.value,
            "onUpdate:isPoppedUp": p[0] || (p[0] = (y) => o.value = y),
            "menu-title-element-ref": i.value
          }, {
            default: withCtx(() => [
              createBaseVNode("h4", ya, toDisplayString(unref(n)("spotlight.title")), 1),
              createBaseVNode("p", _a, [
                createBaseVNode("span", null, toDisplayString(unref(n)("spotlight.titleHelpMessage")), 1)
              ]),
              createBaseVNode("div", xa, [
                createBaseVNode("div", wa, [
                  createBaseVNode("h5", Sa, [
                    La,
                    createBaseVNode("span", Ma, toDisplayString(unref(n)("spotlight.optionOn")), 1)
                  ]),
                  createBaseVNode("span", null, toDisplayString(unref(n)("spotlight.optionOnHelpMessage")), 1)
                ]),
                createBaseVNode("div", Aa, [
                  createBaseVNode("h5", Wa, [
                    Ea,
                    createBaseVNode("span", $a, toDisplayString(unref(n)("spotlight.optionOff")), 1)
                  ]),
                  createBaseVNode("span", null, toDisplayString(unref(n)("spotlight.optionOffHelpMessage")), 1)
                ])
              ])
            ]),
            _: 1
          }, 8, ["is-popped-up", "menu-title-element-ref"]))
        ], 512),
        createVNode(unref(ce), {
          modelValue: unref(u),
          "onUpdate:modelValue": p[1] || (p[1] = (y) => isRef(u) ? u.value = y : null),
          bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
          text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
          outline: "transparent 2px offset-4px dashed",
          transition: "outline duration-200 ease",
          class: normalizeClass({
            "outline-$vp-c-brand-1!": o.value
          }),
          options: s.value,
          disabled: a.value
        }, null, 8, ["modelValue", "class", "options", "disabled"])
      ]);
    };
  }
});
var ct = (e) => (pushScopeId("data-v-fcc98e6d"), e = e(), popScopeId(), e);
var ka = {
  key: 0,
  "space-y-2": "",
  role: "radiogroup",
  class: "VPNolebaseEnhancedReadabilitiesSpotlightStyles"
};
var Oa = {
  "text-md": "",
  "mb-1": "",
  "font-semibold": ""
};
var Va = {
  text: "sm",
  "mb-2": "",
  "max-w-100": ""
};
var Ra = {
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var Pa = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var Na = {
  text: "sm",
  "mb-2": ""
};
var Ta = ct(() => createBaseVNode("span", {
  "i-icon-park-outline:align-text-left-one": "",
  "mr-1": ""
}, null, -1));
var Ha = { "font-semibold": "" };
var ja = {
  text: "sm",
  bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
  "max-w-100": "",
  "rounded-xl": "",
  "p-3": ""
};
var Ba = {
  text: "sm",
  "mb-2": ""
};
var Fa = ct(() => createBaseVNode("span", {
  "i-icon-park-outline:align-left-one": "",
  "mr-1": ""
}, null, -1));
var Ca = { "font-semibold": "" };
var Ua = defineComponent({
  __name: "SpotlightStyles",
  setup(e) {
    var d, h;
    const t = inject(ee, {}), i = ref(), o = ref(false), a = ref(false), l = ne("(pointer: coarse)"), r = oe(Ye, ((d = t.spotlight) == null ? void 0 : d.defaultToggle) || false), u = oe(Ke, ((h = t.spotlight) == null ? void 0 : h.defaultStyle) || ie.Aside), { t: n } = Q(), s = computed(() => [
      {
        value: ie.Under,
        title: n("spotlight.styles.optionUnder"),
        ariaLabel: n("spotlight.styles.optionUnderAriaLabel"),
        icon: "i-icon-park-outline:align-text-left-one",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Style Checkbox"
      },
      {
        value: ie.Aside,
        title: n("spotlight.styles.optionAside"),
        ariaLabel: n("spotlight.styles.optionAsideAriaLabel"),
        icon: "i-icon-park-outline:align-left-one",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Style Checkbox"
      }
    ]);
    return onMounted(() => {
      a.value = l.value;
    }), watch(l, () => {
      a.value = l.value;
    }), (p, g) => (openBlock(), createBlock(Transition, { name: "fade-shift" }, {
      default: withCtx(() => {
        var y;
        return [
          unref(r) ? (openBlock(), createElementBlock("div", ka, [
            createBaseVNode("div", {
              ref_key: "menuTitleElementRef",
              ref: i,
              relative: "",
              flex: "",
              "items-center": ""
            }, [
              createVNode(te, {
                icon: "i-icon-park-outline:click",
                title: unref(n)("spotlight.styles.title"),
                "aria-label": unref(n)("spotlight.styles.titleArialLabel") || unref(n)("spotlight.styles.title"),
                disabled: a.value,
                flex: "1",
                "pr-4": ""
              }, null, 8, ["title", "aria-label", "disabled"]),
              (y = unref(t).spotlight) != null && y.disableHelp ? createCommentVNode("", true) : (openBlock(), createBlock(pe, {
                key: 0,
                "is-popped-up": o.value,
                "onUpdate:isPoppedUp": g[0] || (g[0] = (m) => o.value = m),
                "menu-title-element-ref": i.value
              }, {
                default: withCtx(() => [
                  createBaseVNode("h4", Oa, toDisplayString(unref(n)("spotlight.styles.title")), 1),
                  createBaseVNode("p", Va, [
                    createBaseVNode("span", null, toDisplayString(unref(n)("spotlight.styles.titleHelpMessage")), 1)
                  ]),
                  createBaseVNode("div", Ra, [
                    createBaseVNode("div", Pa, [
                      createBaseVNode("h5", Na, [
                        Ta,
                        createBaseVNode("span", Ha, toDisplayString(unref(n)("spotlight.styles.optionUnder")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(unref(n)("spotlight.styles.optionUnderHelpMessage")), 1)
                    ]),
                    createBaseVNode("div", ja, [
                      createBaseVNode("h5", Ba, [
                        Fa,
                        createBaseVNode("span", Ca, toDisplayString(unref(n)("spotlight.styles.optionAside")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(unref(n)("spotlight.styles.optionAsideHelpMessage")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["is-popped-up", "menu-title-element-ref"]))
            ], 512),
            createVNode(unref(ce), {
              modelValue: unref(u),
              "onUpdate:modelValue": g[1] || (g[1] = (m) => isRef(u) ? u.value = m : null),
              bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
              text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
              outline: "transparent 2px offset-4px dashed",
              transition: "outline duration-200 ease",
              class: normalizeClass({
                "outline-$vp-c-brand-1!": o.value
              }),
              options: s.value,
              disabled: a.value
            }, null, 8, ["modelValue", "class", "options", "disabled"])
          ])) : createCommentVNode("", true)
        ];
      }),
      _: 1
    }));
  }
});
var pt = G(Ua, [["__scopeId", "data-v-fcc98e6d"]]);
var Ia = ["aria-label"];
var za = defineComponent({
  __name: "Menu",
  setup(e) {
    const t = J(), { t: i } = Q();
    return (o, a) => (openBlock(), createBlock(Ei, {
      icon: "i-icon-park-outline:book-open",
      class: "VPNolebaseEnhancedReadabilitiesMenu VPNolebaseEnhancedReadabilitiesMenuFlyout",
      "aria-label": unref(i)("title.title"),
      role: "menuitem"
    }, {
      default: withCtx(() => [
        unref(t) ? (openBlock(), createElementBlock("div", {
          key: 0,
          "aria-label": unref(i)("title.title"),
          "min-w-64": "",
          "p-2": "",
          "space-y-2": ""
        }, [
          createVNode(ut),
          createVNode(la),
          createVNode(ma),
          createVNode(dt),
          createVNode(pt)
        ], 8, Ia)) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["aria-label"]));
  }
});
var Da = { "space-y-2": "" };
var Xa = {
  border: "1 red/50 solid",
  bg: "red/30",
  flex: "",
  "items-center": "",
  "rounded-lg": "",
  "p-2": "",
  "opacity-50": ""
};
var Ya = { "text-xs": "" };
var ht = defineComponent({
  __name: "ScreenLayoutSwitch",
  setup(e) {
    const { t } = Q(), i = computed(() => [
      {
        value: R.FullWidth,
        title: t("layoutSwitch.optionFullWidth"),
        ariaLabel: t("layoutSwitch.optionFullWidthAriaLabel"),
        icon: "i-icon-park-outline:full-screen-one",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.SidebarWidthAdjustableOnly,
        title: t("layoutSwitch.optionSidebarWidthAdjustableOnly"),
        ariaLabel: t("layoutSwitch.optionSidebarWidthAdjustableOnlyAriaLabel"),
        icon: "i-icon-park-outline:full-screen-two",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.BothWidthAdjustable,
        title: t("layoutSwitch.optionBothWidthAdjustable"),
        ariaLabel: t("layoutSwitch.optionBothWidthAdjustableAriaLabel"),
        icon: "i-icon-park-outline:full-screen",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      },
      {
        value: R.Original,
        title: t("layoutSwitch.optionOriginalWidth"),
        ariaLabel: t("layoutSwitch.optionOriginalWidthAriaLabel"),
        icon: "i-icon-park-outline:overall-reduction",
        name: "VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"
      }
    ]);
    return (o, a) => (openBlock(), createElementBlock("div", Da, [
      createVNode(te, {
        icon: "i-icon-park-outline:layout-one",
        title: unref(t)("layoutSwitch.title"),
        "aria-label": unref(t)("layoutSwitch.titleAriaLabel") || unref(t)("layoutSwitch.title"),
        disabled: ""
      }, null, 8, ["title", "aria-label"]),
      createBaseVNode("div", Xa, [
        createBaseVNode("span", Ya, toDisplayString(unref(t)("layoutSwitch.titleScreenNavWarningMessage")), 1)
      ]),
      createVNode(unref(ce), {
        bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
        text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
        options: i.value,
        disabled: ""
      }, null, 8, ["options"])
    ]));
  }
});
var Ka = { "space-y-2": "" };
var qa = {
  border: "1 red/50 solid",
  bg: "red/30",
  flex: "",
  "items-center": "",
  "rounded-lg": "",
  "p-2": "",
  "opacity-50": ""
};
var Ja = { "text-xs": "" };
var ft = defineComponent({
  __name: "ScreenSpotlight",
  setup(e) {
    const { t } = Q(), i = computed(() => [
      {
        title: t("spotlight.optionOn"),
        ariaLabel: t("spotlight.optionOnAriaLabel"),
        value: true,
        text: "ON",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      },
      {
        title: t("spotlight.optionOff"),
        ariaLabel: t("spotlight.optionOffAriaLabel"),
        value: false,
        text: "OFF",
        name: "VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"
      }
    ]);
    return (o, a) => (openBlock(), createElementBlock("div", Ka, [
      createVNode(te, {
        icon: "i-icon-park-outline:click",
        title: unref(t)("spotlight.title"),
        "aria-label": unref(t)("spotlight.titleArialLabel") || unref(t)("spotlight.title"),
        disabled: ""
      }, null, 8, ["title", "aria-label"]),
      createBaseVNode("div", qa, [
        createBaseVNode("span", Ja, toDisplayString(unref(t)("spotlight.titleScreenNavWarningMessage")), 1)
      ]),
      createVNode(unref(ce), {
        bg: "$vp-nolebase-enhanced-readabilities-menu-background-color",
        text: "sm $vp-nolebase-enhanced-readabilities-menu-text-color",
        options: i.value,
        disabled: ""
      }, null, 8, ["options"])
    ]));
  }
});
var Ga = {
  key: 0,
  "space-y-2": "",
  class: "VPNolebaseEnhancedReadabilitiesMenu"
};
var Qa = {
  flex: "~ col",
  "pl-4": "",
  "space-y-2": ""
};
var Za = defineComponent({
  __name: "ScreenMenu",
  setup(e) {
    const t = J(), { t: i } = Q();
    return (o, a) => unref(t) ? (openBlock(), createElementBlock("div", Ga, [
      createVNode(te, {
        icon: "i-icon-park-outline:book-open",
        title: unref(i)("title.title"),
        "aria-label": unref(i)("title.titleArialLabel") || unref(i)("title.title")
      }, null, 8, ["title", "aria-label"]),
      createBaseVNode("div", Qa, [
        createVNode(ht),
        createVNode(ft)
      ])
    ])) : createCommentVNode("", true);
  }
});
var Be = {
  NolebaseEnhancedReadabilitiesMenu: za,
  NolebaseEnhancedReadabilitiesScreenMenu: Za,
  NolebaseEnhancedReadabilitiesLayoutSwitch: ut,
  NolebaseEnhancedReadabilitiesScreenLayoutSwitch: ht,
  NolebaseEnhancedReadabilitiesSpotlight: dt,
  NolebaseEnhancedReadabilitiesSpotlightStyles: pt,
  NolebaseEnhancedReadabilitiesScreenSpotlight: ft
};
var an = {
  install(e, t) {
    typeof t < "u" && typeof t == "object" && e.provide(ee, t);
    for (const i of Object.keys(Be))
      e.component(i, Be[i]);
  }
};
export {
  ee as InjectionKey,
  R as LayoutMode,
  ut as LayoutSwitch,
  ma as LayoutSwitchContentLayoutMaxWidthSlider,
  Oe as LayoutSwitchModeStorageKey,
  la as LayoutSwitchPageLayoutMaxWidthSlider,
  za as NolebaseEnhancedReadabilitiesMenu,
  an as NolebaseEnhancedReadabilitiesPlugin,
  Za as NolebaseEnhancedReadabilitiesScreenMenu,
  ht as ScreenLayoutSwitch,
  ft as ScreenSpotlight,
  dt as Spotlight,
  pt as SpotlightStyles,
  Ye as SpotlightToggledStorageKey
};
//# sourceMappingURL=@nolebase_vitepress-plugin-enhanced-readabilities.js.map
