(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function a(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function h(l2, u2, i2) {
    var t2, o3, r2, f2 = {};
    for (r2 in u2)
      "key" == r2 ? t2 = u2[r2] : "ref" == r2 ? o3 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
      for (r2 in l2.defaultProps)
        void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
    return v(l2, f2, t2, o3, null);
  }
  function v(n2, i2, t2, o3, r2) {
    var f2 = { type: n2, props: i2, key: t2, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u : r2 };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function _(n2, l2) {
    if (null == l2)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l2, u2, i2, t2, o3, r2;
        n3.__d && (o3 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = s({}, t2)).__v = t2.__v + 1, j(r2, t2, i2, l2.__n, void 0 !== r2.ownerSVGElement, null != t2.__h ? [o3] : null, u2, null == o3 ? _(t2) : o3, t2.__h), z(u2, t2), t2.__e != o3 && k(t2)));
      });
  }
  function w(n2, l2, u2, i2, t2, o3, r2, c2, s2, a2) {
    var h2, y, d2, k2, b2, g2, w2, x = i2 && i2.__k || e, C2 = x.length;
    for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
      if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(p, { children: k2 }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
          x[h2] = void 0;
        else
          for (y = 0; y < C2; y++) {
            if ((d2 = x[y]) && k2.key == d2.key && k2.type === d2.type) {
              x[y] = void 0;
              break;
            }
            d2 = null;
          }
        j(n2, k2, d2 = d2 || f, t2, o3, r2, c2, s2, a2), b2 = k2.__e, (y = k2.ref) && d2.ref != y && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m(k2, s2, n2) : s2 = A(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _(d2));
      }
    for (u2.__e = g2, h2 = C2; h2--; )
      null != x[h2] && ("function" == typeof u2.type && null != x[h2].__e && x[h2].__e == u2.__d && (u2.__d = _(i2, h2 + 1)), N(x[h2], x[h2]));
    if (w2)
      for (h2 = 0; h2 < w2.length; h2++)
        M(w2[h2], w2[++h2], w2[++h2]);
  }
  function m(n2, l2, u2) {
    for (var i2, t2 = n2.__k, o3 = 0; t2 && o3 < t2.length; o3++)
      (i2 = t2[o3]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m(i2, l2, u2) : A(u2, i2, i2, t2, i2.__e, l2));
    return l2;
  }
  function A(n2, l2, u2, i2, t2, o3) {
    var r2, f2, e2;
    if (void 0 !== l2.__d)
      r2 = l2.__d, l2.__d = void 0;
    else if (null == u2 || t2 != o3 || null == t2.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t2), r2 = null;
        else {
          for (f2 = o3, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, o3), r2 = o3;
        }
    return void 0 !== r2 ? r2 : t2.nextSibling;
  }
  function C(n2, l2, u2, i2, t2) {
    var o3;
    for (o3 in u2)
      "children" === o3 || "key" === o3 || o3 in l2 || H(n2, o3, null, u2[o3], i2);
    for (o3 in l2)
      t2 && "function" != typeof l2[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u2[o3] === l2[o3] || H(n2, o3, l2[o3], u2[o3], i2);
  }
  function $(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c.test(l2) ? u2 : u2 + "px";
  }
  function H(n2, l2, u2, i2, t2) {
    var o3;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || $(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        o3 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o3] = u2, u2 ? i2 || n2.addEventListener(l2, o3 ? T : I, o3) : n2.removeEventListener(l2, o3 ? T : I, o3);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (t2)
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null != u2 && (false !== u2 || "a" === l2[0] && "r" === l2[1]) ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u2, i2, t2, o3, r2, f2, e2, c2) {
    var a2, h2, v2, y, _3, k2, b2, g2, m2, x, A2, C2, $2, H2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = l.__b) && a2(u2);
    try {
      n:
        if ("function" == typeof H2) {
          if (g2 = u2.props, m2 = (a2 = H2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = h2 = new H2(g2, x) : (u2.__c = h2 = new d(g2, x), h2.constructor = H2, h2.render = O), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, H2.getDerivedStateFromProps(g2, h2.__s))), y = h2.props, _3 = h2.state, v2)
            null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (null == H2.getDerivedStateFromProps && g2 !== y && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
              h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), h2.__h.length && f2.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(y, _3, k2);
            });
          }
          if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
            h2.state = h2.__s, h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context);
          else
            do {
              h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            } while (h2.__d && ++C2 < 25);
          h2.state = h2.__s, null != h2.getChildContext && (t2 = s(s({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y, _3)), $2 = null != a2 && a2.type === p && null == a2.key ? a2.props.children : a2, w(n2, Array.isArray($2) ? $2 : [$2], u2, i2, t2, o3, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          null == r2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o3, r2, f2, c2);
      (a2 = l.diffed) && a2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, i2);
    }
  }
  function z(n2, u2) {
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function L(l2, u2, i2, t2, o3, r2, e2, c2) {
    var s2, h2, v2, y = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
    if ("svg" === d2 && (o3 = true), null != r2) {
      for (; k2 < r2.length; k2++)
        if ((s2 = r2[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
          l2 = s2, r2[k2] = null;
          break;
        }
    }
    if (null == l2) {
      if (null === d2)
        return document.createTextNode(p2);
      l2 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
    }
    if (null === d2)
      y === p2 || c2 && l2.data === p2 || (l2.data = p2);
    else {
      if (r2 = r2 && n.call(l2.childNodes), h2 = (y = i2.props || f).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
        if (null != r2)
          for (y = {}, k2 = 0; k2 < l2.attributes.length; k2++)
            y[l2.attributes[k2].name] = l2.attributes[k2].value;
        (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
      }
      if (C(l2, p2, y, o3, c2), v2)
        u2.__k = [];
      else if (k2 = u2.props.children, w(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o3 && "foreignObject" !== d2, r2, e2, r2 ? r2[0] : i2.__k && _(i2, 0), c2), null != r2)
        for (k2 = r2.length; k2--; )
          null != r2[k2] && a(r2[k2]);
      c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y.value) && H(l2, "value", k2, y.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H(l2, "checked", k2, y.checked, false));
    }
    return l2;
  }
  function M(n2, u2, i2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l.__e(n3, i2);
    }
  }
  function N(n2, u2, i2) {
    var t2, o3;
    if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), null != (t2 = n2.__c)) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u2);
        }
      t2.base = t2.__P = null, n2.__c = void 0;
    }
    if (t2 = n2.__k)
      for (o3 = 0; o3 < t2.length; o3++)
        t2[o3] && N(t2[o3], u2, "function" != typeof n2.type);
    i2 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function O(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function P(u2, i2, t2) {
    var o3, r2, e2;
    l.__ && l.__(u2, i2), r2 = (o3 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, e2 = [], j(i2, u2 = (!o3 && t2 || i2).__k = h(p, null, [u2]), r2 || f, f, void 0 !== i2.ownerSVGElement, !o3 && t2 ? [t2] : r2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, e2, !o3 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o3), z(e2, u2);
  }
  n = e.slice, l = { __e: function(n2, l2, u2, i2) {
    for (var t2, o3, r2; l2 = l2.__; )
      if ((t2 = l2.__c) && !t2.__)
        try {
          if ((o3 = t2.constructor) && null != o3.getDerivedStateFromError && (t2.setState(o3.getDerivedStateFromError(n2)), r2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
            return t2.__E = t2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, d.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u2), this.props)), n2 && s(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), b(this));
  }, d.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
  }, d.prototype.render = p, t = [], g.__r = 0, r = 0;

  // src/lib/preact-listbox-keyboard-navigation/ListboxKeyNav.jsx
  function ListboxKeyNav({ tag, keyEvents = {}, children, className, otherProps }) {
    const onKeyDown = (e2) => {
      switch (e2.keyCode) {
        case 35:
          if (keyEvents.end)
            keyEvents.end(e2);
          break;
        case 36:
          if (keyEvents.home)
            keyEvents.home(e2);
          break;
        case 38:
          if (keyEvents.up)
            keyEvents.up(e2);
          break;
        case 40:
          if (keyEvents.down)
            keyEvents.down(e2);
          break;
        default:
          return;
      }
    };
    return h(
      tag,
      {
        className,
        onKeyDown,
        ...otherProps
      },
      children
    );
  }
  var ListboxKeyNav_default = ListboxKeyNav;

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var _2 = 0;
  function o2(o3, e2, n2, t2, f2) {
    var l2, s2, u2 = {};
    for (s2 in e2)
      "ref" == s2 ? l2 = e2[s2] : u2[s2] = e2[s2];
    var a2 = { type: o3, props: u2, key: n2, ref: l2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_2, __source: f2, __self: t2 };
    if ("function" == typeof o3 && (l2 = o3.defaultProps))
      for (s2 in l2)
        void 0 === u2[s2] && (u2[s2] = l2[s2]);
    return l.vnode && l.vnode(a2), a2;
  }

  // src/lib/MultiSelect/MultiSelectBadge.jsx
  var MultiSelectBadge = ({ text, quantity }) => /* @__PURE__ */ o2(p, {
    children: [
      text,
      " ",
      /* @__PURE__ */ o2("span", {
        className: "PreactMultiSelect-badge",
        children: quantity
      })
    ]
  });
  var MultiSelectBadge_default = MultiSelectBadge;

  // src/lib/MultiSelect/MultiSelectDropdown.jsx
  var MultiSelectDropdown = ({ text, toggleDropdown, quantity, isOpened }) => /* @__PURE__ */ o2("button", {
    className: `PreactMultiSelect-dropdownButton${isOpened ? " PreactMultiSelect-dropdownButton--opened" : ""}`,
    onClick: toggleDropdown,
    "aria-haspopup": "true",
    children: /* @__PURE__ */ o2(MultiSelectBadge_default, {
      className: "PreactMultiSelect-badge",
      text,
      quantity
    })
  });
  var MultiSelectDropdown_default = MultiSelectDropdown;

  // src/lib/MultiSelect/MultiSelectListButtons.jsx
  var MultiSelectListButtons = ({ selectAll, selectAllButtonText, resetSelections, resetButtonText }) => /* @__PURE__ */ o2("div", {
    className: "PreactMultiSelect-listButtonsWrapper",
    children: [
      /* @__PURE__ */ o2("button", {
        className: "PreactMultiSelect-listButtonsSelectAll",
        onClick: selectAll,
        children: selectAllButtonText
      }),
      /* @__PURE__ */ o2("button", {
        className: "PreactMultiSelect-listButtonsReset",
        onClick: resetSelections,
        children: resetButtonText
      })
    ]
  });
  MultiSelectListButtons.defaultProps = {
    selectAllButtonText: "Select All",
    resetButtonText: "Reset"
  };
  var MultiSelectListButtons_default = MultiSelectListButtons;

  // src/lib/MultiSelect/MultiSelectListItem.jsx
  var MultiSelectListItem = (props) => {
    const { label, name, id, handleInputChange, checked, forwardRef } = props;
    return /* @__PURE__ */ o2("li", {
      className: "PreactMultiSelect-listItem",
      role: "option",
      children: /* @__PURE__ */ o2("label", {
        role: "checkbox",
        "aria-checked": checked,
        tabIndex: "0",
        htmlFor: id,
        onKeyPress: handleInputChange,
        ref: forwardRef,
        className: `PreactMultiSelect-listItemLabel${checked ? " PreactMultiSelect-listItemLabel--checked" : ""}`,
        children: [
          label,
          /* @__PURE__ */ o2("input", {
            className: "PreactMultiSelect-listItemCheckbox",
            type: "checkbox",
            name,
            id,
            onChange: handleInputChange,
            checked
          })
        ]
      })
    });
  };
  var MultiSelectListItem_default = MultiSelectListItem;

  // src/lib/MultiSelect/MultiSelectFooter.jsx
  var MultiSelectFooter = ({ applyButtonText = "Apply", handleApplyClick }) => /* @__PURE__ */ o2("div", {
    className: "PreactMultiSelect-footer",
    children: /* @__PURE__ */ o2("button", {
      className: "PreactMultiSelect-footerApplyButton",
      onClick: handleApplyClick,
      children: applyButtonText
    })
  });
  var MultiSelectFooter_default = MultiSelectFooter;

  // src/lib/MultiSelect/multiSelectHandler.js
  var getInitialCheckedItems = (list) => list.reduce((acc, listItem) => {
    acc[listItem.id] = listItem.checked;
    return acc;
  }, {});
  var getMultiSelectHandlers = ({ isDropdownOpened, setIsDropdownOpened, checkedItems, setCheckedItems }) => {
    const toggleDropdown = () => {
      setIsDropdownOpened(!isDropdownOpened);
    };
    const selectAll = () => {
      setCheckedItems(
        Object.keys(checkedItems).reduce((acc, listItemId) => {
          acc[listItemId] = true;
          return acc;
        }, {})
      );
    };
    const resetSelections = () => {
      setCheckedItems(
        Object.keys(checkedItems).reduce((acc, listItemName) => {
          acc[listItemName] = false;
          return acc;
        }, {})
      );
    };
    const handleInputChange = (event) => {
      const tag = event.target.tagName;
      const target = tag === "LABEL" ? event.target.children[0] : event.target;
      if (tag === "LABEL") {
        target.checked = !target.checked;
        event.preventDefault();
      }
      const { id, checked } = target;
      setCheckedItems({ ...checkedItems, [id]: checked });
    };
    return {
      toggleDropdown,
      selectAll,
      resetSelections,
      handleInputChange
    };
  };
  var multiSelectHandler_default = getMultiSelectHandlers;

  // src/lib/MultiSelect/MultiSelect.jsx
  var MultiSelect = class extends d {
    constructor(props) {
      super(props);
      this.setIsDropdownOpened = this.setIsDropdownOpened.bind(this);
      this.setCheckedItems = this.setCheckedItems.bind(this);
      this.listItems = [];
      this.state = {
        isDropdownOpened: false,
        checkedItems: getInitialCheckedItems(this.props.list || [])
      };
    }
    setIsDropdownOpened(value) {
      this.setState({ isDropdownOpened: value });
    }
    setCheckedItems(value) {
      this.setState({ checkedItems: value });
    }
    onUpdate(prevProps, prevState) {
      const { onOptionChanged } = this.props;
      const { isDropdownOpened, checkedItems } = this.state;
      if (isDropdownOpened && this.listItems[0] && (!prevState || isDropdownOpened !== prevState.isDropdownOpened)) {
        this.listItems[0].focus();
      }
      if (onOptionChanged && (!prevState || checkedItems !== prevState.checkedItems)) {
        onOptionChanged(checkedItems);
      }
    }
    componentDidMount() {
      this.onUpdate();
    }
    componentDidUpdate(prevProps, prevState) {
      this.onUpdate(prevProps, prevState);
    }
    render() {
      const {
        list,
        dropdownButtonText,
        isRightAligned,
        selectAllButtonText,
        onSelectionApplied,
        resetButtonText,
        applyButtonText
      } = this.props;
      const { isDropdownOpened, checkedItems } = this.state;
      const { toggleDropdown, selectAll, resetSelections, handleInputChange } = multiSelectHandler_default({
        isDropdownOpened,
        setIsDropdownOpened: this.setIsDropdownOpened,
        checkedItems,
        setCheckedItems: this.setCheckedItems
      });
      this.listItems = [];
      const keyEvents = {
        up: () => {
          const activeElementIndex = this.listItems.findIndex((item) => item === document.activeElement);
          this.listItems[activeElementIndex - 1] && this.listItems[activeElementIndex - 1].focus();
        },
        down: () => {
          const activeElementIndex = this.listItems.findIndex((item) => item === document.activeElement);
          this.listItems[activeElementIndex + 1] && this.listItems[activeElementIndex + 1].focus();
        },
        home: () => {
          this.listItems[0] && this.listItems[0].focus();
        },
        end: () => {
          this.listItems[this.listItems.length - 1] && this.listItems[this.listItems.length - 1].focus();
        }
      };
      const checkedItemsQuantity = Object.keys(checkedItems).filter((itemName) => checkedItems[itemName]).length;
      const handleApplyClick = () => {
        onSelectionApplied(checkedItems);
      };
      return /* @__PURE__ */ o2("div", {
        className: "PreactMultiSelect-wrapper",
        children: [
          /* @__PURE__ */ o2(MultiSelectDropdown_default, {
            text: dropdownButtonText,
            quantity: checkedItemsQuantity,
            toggleDropdown,
            isOpened: isDropdownOpened
          }),
          isDropdownOpened && /* @__PURE__ */ o2("div", {
            className: `PreactMultiSelect-sectionWrapper${isRightAligned ? " PreactMultiSelect-sectionWrapper--rightAligned" : ""}`,
            children: [
              /* @__PURE__ */ o2(MultiSelectListButtons_default, {
                selectAll,
                selectAllButtonText,
                resetSelections,
                resetButtonText
              }),
              /* @__PURE__ */ o2(ListboxKeyNav_default, {
                role: "listbox",
                tag: "ul",
                className: `PreactMultiSelect-list${onSelectionApplied ? " PreactMultiSelect-list--hasFooter" : ""}`,
                keyEvents: { ...keyEvents },
                children: list.map((listItem, index) => {
                  const { label, id, name } = listItem;
                  const checked = checkedItems[id];
                  const key = `${id}-${index}`;
                  return /* @__PURE__ */ o2(MultiSelectListItem_default, {
                    className: "multiselect-list-item",
                    label,
                    id,
                    name,
                    handleInputChange,
                    checked,
                    forwardRef: (el) => {
                      this.listItems[index] = el;
                      return el;
                    }
                  }, key);
                })
              }),
              onSelectionApplied && /* @__PURE__ */ o2(MultiSelectFooter_default, {
                applyButtonText,
                handleApplyClick
              })
            ]
          })
        ]
      });
    }
  };
  var MultiSelect_default = MultiSelect;

  // example/main.jsx
  var App = class extends d {
    render() {
      const multiSelectProps = {
        list: [
          {
            label: "First option",
            name: "first-option",
            id: "first-option-1",
            checked: true
          },
          {
            label: "Second option",
            name: "second-option",
            id: "second-option-2",
            checked: false
          },
          {
            label: "Third option",
            name: "third-option",
            id: "third-option-3",
            checked: false
          }
        ],
        onSelectionApplied: (selection) => {
          console.log("Selected : ", selection);
        },
        dropdownButtonText: "Selected",
        resetButtonText: "Reset",
        applyButtonText: "Apply"
      };
      const props2 = {
        ...multiSelectProps,
        list: [
          {
            label: "First option",
            id: "first-option-10",
            checked: true
          },
          {
            label: "Second option",
            id: "second-option-12",
            checked: false
          },
          {
            label: "Third option",
            id: "third-option-13",
            checked: false
          },
          {
            label: "Forth option",
            id: "forth-option-14",
            checked: true
          },
          {
            label: "Fifth option",
            id: "fifth-option-15",
            checked: false
          },
          {
            label: "Sixth option",
            id: "sixth-option-16",
            checked: false
          },
          {
            label: "Seventh option",
            id: "seventh-option-17",
            checked: true
          },
          {
            label: "Eighth option",
            id: "Eighth-option-18",
            checked: false
          },
          {
            label: "Nineth option",
            id: "nineth-option-19",
            checked: false
          }
        ]
      };
      return /* @__PURE__ */ o2("div", {
        style: { display: "flex", justifyContent: "space-around", textAlign: "center" },
        children: [
          /* @__PURE__ */ o2(MultiSelect_default, {
            ...multiSelectProps
          }),
          /* @__PURE__ */ o2(MultiSelect_default, {
            list: [
              {
                label: "First option",
                id: "first-option",
                checked: true
              },
              {
                label: "Second option",
                id: "second-option",
                checked: false
              },
              {
                label: "Third option",
                id: "third-option",
                checked: false
              }
            ],
            isRightAligned: true,
            dropdownButtonText: "Options selected",
            onOptionChanged: (optionState) => console.log("optionState : ", optionState)
          }),
          /* @__PURE__ */ o2(MultiSelect_default, {
            ...props2
          })
        ]
      });
    }
  };
  P(/* @__PURE__ */ o2(App, {}), document.getElementById("container"));
})();
