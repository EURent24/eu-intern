(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[365], {
    35652: function (e, l, a) {
        "use strict";
        var t, o = a(67294);

        function n() {
            return (n = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        l.Z = function (e) {
            return o.createElement("svg", n({
                width: 42,
                height: 47,
                viewBox: "0 0 42 47",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = o.createElement("path", {
                d: "M39.047 19.581L6.968.626C4.326-.923.407.626.407 4.363v37.91c0 3.463 3.645 5.559 6.562 3.827l32.078-18.955c2.825-1.731 2.825-5.832 0-7.564z",
                fill: "#fff"
            })))
        }
    }, 79042: function (e, l, a) {
        "use strict";
        var t = a(85893);
        a(67294);
        var o = a(46182), n = a(94184), i = a.n(n), r = a(39579), d = a(65019), s = a.n(d);
        let c = e => {
            let {desktopImage: l, tabletImage: a, mobileImage: n, className: d = ""} = e, c = (0, o.Z)(),
                u = (0, o.Z)("lg", !1);
            return (0, t.jsxs)("div", {
                className: i()(s().root, d),
                children: [!u && (0, t.jsx)(r.Z, {image: l}), u && !c && (0, t.jsx)(r.Z, {image: a || l}), c && (0, t.jsx)(r.Z, {image: n || a || l})]
            })
        };
        l.Z = c
    }, 23636: function (e, l, a) {
        "use strict";
        var t = a(85893);
        a(67294);
        var o = a(26210), n = a.n(o);
        let i = e => {
            let {label: l, checked: a, onClick: o} = e;
            return (0, t.jsx)("div", {
                className: n().root,
                children: (0, t.jsxs)("button", {
                    type: "button",
                    onClick: o,
                    children: [(0, t.jsx)("input", {
                        type: "checkbox", checked: a, onChange: () => {
                        }
                    }), (0, t.jsx)("div", {className: n().label, children: l})]
                })
            })
        };
        l.Z = i
    }, 96323: function (e, l) {
        "use strict";
        let a = (e, l, a) => {
            let {fcdsc: t} = a, o = null == e ? void 0 : e.Email;
            void 0 !== t ? t.trackFormFill(o).then(() => {
                a.location = l
            }, e => {
                console.log("Full Circle tracking failure: ".concat(e)), a.location = l
            }) : "" !== l && (a.location = l)
        };
        l.Z = a
    }, 29751: function (e, l, a) {
        "use strict";
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(41287), d = a(53453), s = a(17385), c = a.n(s);
        let u = e => {
            var l, a, n, s, u;
            let {className: m = ""} = e, _ = (0, o.useContext)(d.GlobalContext),
                p = (null === (l = _.noSearchResults) || void 0 === l ? void 0 : l.title) || "",
                h = (null === (a = _.noSearchResults) || void 0 === a ? void 0 : null === (n = a.fieldBody) || void 0 === n ? void 0 : n.value) ? (0, r.Qc)(null === (s = _.noSearchResults) || void 0 === s ? void 0 : null === (u = s.fieldBody) || void 0 === u ? void 0 : u.value) : "";
            return (0, t.jsxs)("div", {
                className: i()(c().root, m, "no-search-results"),
                children: [(0, t.jsx)("h3", {
                    className: c().title,
                    children: p
                }), h && (0, t.jsx)("div", {className: c().bodyContent, children: h})]
            })
        };
        l.Z = u
    }, 32e3: function (e, l, a) {
        "use strict";
        a.d(l, {
            Z: function () {
                return C
            }
        });
        var t, o, n, i = a(85893), r = a(67294), d = a(94184), s = a.n(d);

        function c() {
            return (c = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var u = function (e) {
            return r.createElement("svg", c({
                width: 8,
                height: 12,
                viewBox: "0 0 8 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = r.createElement("path", {
                d: "M6.558 1.338l-4.745 4.75 4.736 4.74",
                stroke: "#989898",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })))
        };

        function m() {
            return (m = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var _ = function (e) {
            return r.createElement("svg", m({
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), o || (o = r.createElement("path", {
                d: "M6.558 1.338l-4.745 4.75 4.736 4.74",
                stroke: "#989898",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })), n || (n = r.createElement("path", {
                d: "M10.558 1.338l-4.745 4.75 4.736 4.74",
                stroke: "#989898",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })))
        }, p = a(29751), h = a(81536), g = a(83291), f = a.n(g);
        let v = e => {
            let {
                children: l,
                pageChange: a,
                firstLabel: t,
                lastLabel: o,
                noSearchResultsClass: n = ""
            } = e, [d, c] = (0, r.useState)(1), m = r.Children.toArray(l), g = (0, h.$G)();
            (0, r.useEffect)(() => {
                c(1)
            }, [l]);
            let v = () => m.length;
            return m.length ? (0, i.jsxs)("div", {
                className: "".concat(f().root, " pagination-root"),
                children: [(0, i.jsx)("div", {className: "page-container", children: m[d - 1]}), (0, i.jsxs)("div", {
                    className: "".concat(1 === m.length && f().hide, " ").concat(f().paginationContainer, " pagination-container"),
                    children: [(0, i.jsx)("button", {
                        type: "button",
                        className: t ? f().pageNumber : "hidden",
                        onClick: e => {
                            e.stopPropagation(), e.preventDefault(), c(1), a && a(1)
                        },
                        children: (0, i.jsx)("span", {className: t && d > 1 ? "" : "opacity-0", children: t})
                    }), (0, i.jsxs)("button", {
                        type: "button",
                        className: s()(f().svg, 1 === d && "opacity-0 pointer-events-none", f().pageNumber),
                        onClick: e => {
                            e.stopPropagation(), e.preventDefault(), c(d - 1), a && a(d - 1)
                        },
                        children: [(0, i.jsx)("span", {
                            className: "sr-only",
                            children: g("Go to previous page")
                        }), (0, i.jsx)(u, {"aria-hidden": !0})]
                    }), (() => {
                        let e = Array.from({length: v()}, (e, l) => l + 1);
                        if (d > 4) {
                            let l = d - 3, a = d + 2;
                            d > e.length - 2 && (l = e.length - 5, a = e.length), e = [1, "...", ...e.slice(l + 1, a)]
                        } else d > 3 ? e.splice(6, e.length) : e.splice(5, e.length);
                        return e
                    })().map((e, l) => (0, i.jsx)("button", {
                        type: "button",
                        onClick: l => {
                            l.stopPropagation(), l.preventDefault(), "number" == typeof e && (c(e), a && a(e))
                        },
                        className: s()(e === d && f().selected, e === d && "pointer-events-none", f().pageNumber, !Number.isInteger(e) && "opacity-50 w-full text-center md:w-auto"),
                        children: (0, i.jsx)("span", {children: e})
                    }, "".concat(e, "-").concat(l))), (0, i.jsxs)("button", {
                        type: "button",
                        className: s()(f().pageNumber, f().svg, f().right, d >= v() && "opacity-0 pointer-events-none"),
                        onClick: e => {
                            e.stopPropagation(), e.preventDefault(), c(d + 1), a && a(d + 1)
                        },
                        children: [(0, i.jsx)("span", {
                            className: "sr-only",
                            children: g("Go to next page")
                        }), (0, i.jsx)(u, {"aria-hidden": !0})]
                    }), (0, i.jsx)("button", {
                        type: "button",
                        className: s()(f().pageNumber, f().svg, f().right),
                        onClick: e => {
                            e.stopPropagation(), e.preventDefault(), c(v()), a && a(v())
                        },
                        children: (0, i.jsx)("span", {
                            className: d < v() ? "" : "opacity-0 pointer-events-none",
                            children: o || (0, i.jsx)(_, {})
                        })
                    })]
                })]
            }) : (0, i.jsx)(p.Z, {className: n})
        };
        var C = v
    }, 39498: function (e, l, a) {
        "use strict";
        var t = a(85893);
        a(67294);
        var o = a(33359), n = a(94184), i = a.n(n), r = a(12245), d = a.n(r);
        let s = e => {
            let {className: l = "", ...a} = e;
            return (0, t.jsx)(o.Z, {className: i()(d().root, l), ...a})
        };
        l.Z = s
    }, 22359: function (e, l, a) {
        "use strict";
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(20346), r = a(41287), d = a(30206), s = a.n(d);
        let c = e => {
            var l;
            let {
                cta: a,
                type: o = "link",
                btnColor: d = "dark",
                size: c = "default",
                className: u = "",
                ariaLabel: m = "",
                children: _,
                download: p = !1
            } = e;
            if (!a) return null;
            let {entity: {fieldCtaCompLink: h, fieldCtaCompOpenInNewTab: g, fieldFieldCtaCompAnchorId: f}} = a;
            if (!(null == h ? void 0 : h.title)) return null;
            let v = f ? "#".concat((0, r.iP)(f)) : null == h ? void 0 : null === (l = h.url) || void 0 === l ? void 0 : l.path;
            return (0, t.jsx)(i.Z, {
                className: n()(s().root, u, "link" === o && s().link, "btn-primary" === o && s().btnPrimary, "dark" === d && s().btnDark, "light" === d && s().btnLight, "light-outline" === d && s().btnLightOutline, "small" === c && s().small, "large" === c && s().sizeLarge, "largeInMobile" === c && s().largeInMobile),
                href: v,
                rel: "noreferrer",
                download: p,
                openInNewTab: g,
                "aria-label": m || (null == h ? void 0 : h.title),
                target: g ? "_blank" : "_self",
                children: _ || (null == h ? void 0 : h.title)
            })
        };
        l.Z = c
    }, 99589: function (e, l, a) {
        "use strict";
        a.d(l, {
            Z: function () {
                return C
            }
        });
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(69447), d = a(30172), s = a(86584),
            c = a(52997), u = a(10787), m = a(40024), _ = a(46182);
        let p = e => (0, t.jsxs)("svg", {
            width: "23",
            height: "13",
            viewBox: "0 0 23 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg", ...e,
            children: [(0, t.jsx)("rect", {
                x: "15.9827",
                y: "1.25",
                width: "1.43812",
                height: "8.46621",
                rx: "0.719058",
                transform: "rotate(-45 15.9827 1.25)",
                fill: "#323232"
            }), (0, t.jsx)("rect", {
                x: "17.0022",
                y: "12.418",
                width: "1.43812",
                height: "8.46621",
                rx: "0.719058",
                transform: "rotate(-135 17.0022 12.418)",
                fill: "#323232"
            }), (0, t.jsx)("rect", {
                x: "22.6038",
                y: "5.6543",
                width: "1.43812",
                height: "22.0511",
                rx: "0.719058",
                transform: "rotate(90 22.6038 5.6543)",
                fill: "#323232"
            })]
        });
        var h = a(81536), g = a(85945), f = a.n(g);
        d.Z.use([s.Z, c.Z, u.Z, m.Z]);
        let v = e => {
            let {
                    className: l,
                    spaceBetween: a = 32,
                    slidesPerView: n = 1,
                    centeredSlides: d = !1,
                    children: s,
                    fadeEffect: c = !1,
                    blueProgressBar: g = !0,
                    greenBorder: v = !1,
                    highlightAllVisible: C = !0,
                    onChange: x,
                    ...b
                } = e, [y, A] = (0, o.useState)(), [j, N] = (0, o.useState)(!0), [w, I] = (0, o.useState)(0),
                M = (0, h.$G)(), k = o.Children.count(s), B = k - (Math.floor(n) - 1),
                T = {spaceBetween: a, centeredSlides: d};
            c && (T.effect = "fade", T.fadeEffect = {crossFade: !0});
            let S = l => {
                let {realIndex: a} = l, {loop: t} = e;
                return (x && x(l), I(a), t || a + 1 !== B) ? (N(!0), !0) : (N(!1), !1)
            }, P = (0, _.Z)(), L = e => e.toString().padStart(2, "0");
            return (0, t.jsxs)("div", {
                className: i()(l, "relative group", f().root, f().hasPagination, C && f()["highlightNext".concat(Math.floor(n))]),
                children: [(0, t.jsx)(r.t, {
                    a11y: u.Z,
                    keyboard: m.Z,
                    onInit: e => {
                        window.test = e, A(e)
                    },
                    className: "w-full h-full",
                    onSlideChange: S,
                    allowTouchMove: B > 1 && P,
                    allowSlideNext: j, ...T, ...b,
                    style: {width: "".concat(100 / n, "%")},
                    children: s
                }), k > 1 && k > n && (0, t.jsx)("div", {
                    className: "".concat(f().controlsBarContainer), children: (0, t.jsxs)("div", {
                        className: i()(f().controlsBar, "swiper-pagination-bar", g && f().blueProgressBar, {[f().controlsBarGreenBorder]: v}),
                        children: [g && (0, t.jsx)("div", {
                            className: f().blueProgressBar,
                            style: {
                                width: "".concat(100 / B, "%"),
                                left: "".concat(100 * (null == y ? void 0 : y.activeIndex) / B, "%")
                            }
                        }), (0, t.jsx)("div", {
                            className: f().paginationNumbers,
                            children: "".concat(L(((null == y ? void 0 : y.activeIndex) || 0) + 1), "\n                /\n                ").concat(L(B))
                        }), (0, t.jsx)("div", {
                            className: f().controlArrows,
                            children: (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsxs)("button", {
                                    onClick: () => y.slidePrev(),
                                    type: "button",
                                    className: i()(f().scrollArrow, f().leftArrow, "scroll-arrow scroll-arrow-left", 0 === w && f().disabled),
                                    children: [(0, t.jsx)(p, {"aria-hidden": !0}), (0, t.jsx)("span", {
                                        className: "sr-only",
                                        children: M("Go to next slide")
                                    })]
                                }), (0, t.jsxs)("button", {
                                    onClick: () => y.slideNext(),
                                    type: "button",
                                    className: i()(f().scrollArrow, f().rightArrow, "scroll-arrow scroll-arrow-right", (w === B - 1 || (null == y ? void 0 : y.isEnd)) && f().disabled),
                                    children: [(0, t.jsx)(p, {"aria-hidden": !0}), (0, t.jsx)("span", {
                                        className: "sr-only",
                                        children: M("Go to previous slide")
                                    })]
                                })]
                            })
                        })]
                    })
                })]
            }, P ? "mobile-swiper" : "desktop-swiper")
        };
        var C = v
    }, 88735: function (e, l, a) {
        "use strict";
        a.d(l, {
            Z: function () {
                return C
            }
        });
        var t, o = a(85893), n = a(67294), i = a(94184), r = a.n(i), d = a(46182), s = a(23636);

        function c() {
            return (c = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var u = function (e) {
            return n.createElement("svg", c({
                width: 19,
                height: 10,
                viewBox: "0 0 19 10",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = n.createElement("path", {
                d: "M1.992 1.016L9.98 9l8.012-8",
                stroke: "#ADADAD",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }, m = a(25823), _ = a(81536), p = a(41287), h = a(76824), g = a.n(h);
        let f = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                l = arguments.length > 1 ? arguments[1] : void 0;
            return l && "unchanged" !== l ? "uppercase" === l ? e.replace(/_/g, " ").toUpperCase() : (0, p.LF)(e.replace(/_/g, " ")) : e
        }, v = e => {
            var l, a;
            let t;
            let i = (0, n.useRef)(null), c = (0, d.Z)(), {
                    buttonLabel: p,
                    isOpen: h,
                    showFilter: v = !1,
                    variant: C = "none",
                    alignSelect: x = "left",
                    onChange: b,
                    onClick: y,
                    onClickOutside: A,
                    singleChoice: j = !1,
                    className: N = "",
                    smallFont: w = !1,
                    reset: I = !1,
                    sortLabels: M = !0,
                    disableSort: k = !1
                } = e, B = (null === (l = e.options) || void 0 === l ? void 0 : l.length) && !("options" in e.options[0]),
                T = (0, n.useMemo)(() => {
                    var l, a;
                    return (null === (l = e.options) || void 0 === l ? void 0 : l.length) ? B ? e.options.filter(e => e.defaultSelected) : null === (a = e.options) || void 0 === a ? void 0 : a.flatMap(e => {
                        var l;
                        return null === (l = e.options) || void 0 === l ? void 0 : l.map(l => ({
                            ...l,
                            group: e.groupName
                        }))
                    }).filter(e => null == e ? void 0 : e.defaultSelected) : []
                }, [e.options, B]), [S, P] = (0, n.useState)(T), L = (0, _.$G)();
            I && S.length > 0 && P([]), (0, m.Z)(i, () => {
                "function" == typeof A && h && A(p)
            });
            let E = () => {
                "function" == typeof y && y(p)
            }, H = (e, l) => {
                if (e.stopPropagation(), j) {
                    let a = S.find(e => e.value === l.value) ? S.filter(e => e.value !== l.value) : [l];
                    P(a), "function" == typeof b && b(a);
                    return
                }
                let t = S.find(e => e.value === l.value) ? S.filter(e => e.value !== l.value) : [...S, l];
                P(t), "function" == typeof b && b(t)
            };
            if (!v) return null;
            t = B ? [{options: e.options}] : e.options;
            let W = (e, l) => {
                let a = L(e.label).toLowerCase(), t = L(l.label).toLowerCase();
                return a > t ? 1 : a < t ? -1 : 0
            };
            return (M && t && t.forEach(e => {
                e.options && !k && e.options.sort(W)
            }), "big" === C) ? (0, o.jsxs)("div", {
                className: r()(N),
                children: [p && (0, o.jsx)("p", {
                    className: g().filterHeadline,
                    children: L(f(p))
                }), (0, o.jsx)("div", {
                    className: r()(g().filterSectionBig),
                    children: (0, o.jsx)("div", {
                        className: r()(g().searchCategoriesContainer, h && g().open),
                        children: !!(null == t ? void 0 : t.length) && t.map(e => {
                            let {groupName: l, options: a} = e;
                            return (0, o.jsxs)("div", {
                                className: g().checkboxWrapper,
                                children: [l && !!(null == a ? void 0 : a.length) && (0, o.jsx)("p", {
                                    className: r()(g().searchTopLabel, "filter-search-top-label"),
                                    children: L(l)
                                }), (0, o.jsx)("div", {
                                    className: g().sectionWrapper,
                                    children: !!(null == a ? void 0 : a.length) && a.map(e => {
                                        var a;
                                        return (0, o.jsx)("div", {
                                            className: g().sectionContainer,
                                            children: (0, o.jsx)(s.Z, {
                                                label: L(f(null == e ? void 0 : e.label, null == e ? void 0 : e.format)),
                                                checked: !!(null === (a = S.filter(l => {
                                                    let {value: a} = l;
                                                    return a === (null == e ? void 0 : e.value)
                                                })) || void 0 === a ? void 0 : a.length),
                                                onClick: a => H(a, l ? {...e, group: l} : e)
                                            })
                                        }, null == e ? void 0 : e.value)
                                    })
                                })]
                            }, l || JSON.stringify(a))
                        })
                    })
                })]
            }) : (0, o.jsx)("div", {
                ref: i,
                className: r()(g().root, N, c && g().isMobile, "select" === C && g().select, "select" === C && g()["align-select-".concat(x)]),
                children: (0, o.jsxs)("div", {
                    className: r()(g().filtersSection, g().topStickyBar),
                    children: [(0, o.jsx)("div", {
                        className: r()(g().button, w ? g().smallFont : ""),
                        children: (0, o.jsxs)("button", {
                            className: "overflow-x-hidden",
                            disabled: !(null === (a = e.options) || void 0 === a ? void 0 : a.length),
                            type: "button",
                            onClick: E,
                            children: [(0, o.jsx)("span", {
                                className: h && "text-coreBlue-100 duration-100 transition-colors",
                                children: j && (null == S ? void 0 : S.length) ? L(S[0].label) : L(f(p))
                            }), (0, o.jsx)("span", {className: r()("w-8 h-8 rounded-full bg-coreBlue-50 border-darkBlue-100 border ml-auto", (j || !(null == S ? void 0 : S.length)) && "opacity-0")}), (0, o.jsx)(u, {className: "w-10 h-10"})]
                        })
                    }), (0, o.jsx)("div", {
                        className: r()(g().searchCategoriesContainer, "filter-search-categories-container", h && g().open),
                        children: (0, o.jsx)("div", {
                            className: g().openWrapper,
                            children: !!(null == t ? void 0 : t.length) && t.map(e => {
                                let {groupName: l, options: a} = e;
                                return (0, o.jsxs)("div", {
                                    className: g().sectionWrapper,
                                    children: [l && (0, o.jsx)("p", {
                                        className: g().sectionLabel,
                                        children: L(l)
                                    }), (0, o.jsx)("div", {
                                        className: g().checkboxWrapper,
                                        children: !!(null == a ? void 0 : a.length) && a.map(e => {
                                            var a;
                                            return (0, o.jsx)("div", {
                                                className: g().sectionContainer,
                                                children: (0, o.jsx)(s.Z, {
                                                    label: L(f(null == e ? void 0 : e.label, null == e ? void 0 : e.format)),
                                                    checked: !!(null === (a = S.filter(l => {
                                                        let {value: a} = l;
                                                        return a === (null == e ? void 0 : e.value)
                                                    })) || void 0 === a ? void 0 : a.length),
                                                    onClick: a => H(a, l ? {...e, group: l} : e)
                                                })
                                            }, null == e ? void 0 : e.value)
                                        })
                                    })]
                                }, l || JSON.stringify(a))
                            })
                        })
                    })]
                })
            })
        };
        var C = v
    }, 42893: function (e, l, a) {
        "use strict";
        a.d(l, {
            Z: function () {
                return j
            }
        });
        var t, o, n, i, r, d, s = a(85893), c = a(67294), u = a(30653), m = a(94184), _ = a.n(m), p = a(39579);

        function h() {
            return (h = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var g = function (e) {
            return c.createElement("svg", h({
                width: 25,
                height: 26,
                viewBox: "0 0 25 26",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = c.createElement("ellipse", {
                cx: 12.389,
                cy: 13.322,
                rx: 11.984,
                ry: 11.446,
                transform: "rotate(-90 12.39 13.322)",
                stroke: "#2368F5"
            })), o || (o = c.createElement("path", {
                d: "M8.035 14.35a.643.643 0 010-1.286v1.286zm9.26-1.098a.643.643 0 010 .91l-4.093 4.092a.643.643 0 01-.91-.91l3.638-3.637-3.638-3.638a.643.643 0 01.91-.909l4.092 4.092zm-9.26-.188h8.805v1.286H8.035v-1.286z",
                fill: "#2368F5"
            })))
        };

        function f() {
            return (f = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        function v() {
            return (v = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var C = a(14621), x = a(55583), b = a.n(x);
        let y = {
            link: (0, s.jsx)(g, {"aria-hidden": "true", focusable: "false"}), video: (0, s.jsx)(function (e) {
                return c.createElement("svg", f({
                    width: 26,
                    height: 26,
                    viewBox: "0 0 26 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), n || (n = c.createElement("circle", {
                    cx: 13.068,
                    cy: 13.428,
                    r: 12,
                    stroke: "#2368F5"
                })), i || (i = c.createElement("path", {
                    d: "M17.918 12.56L10.59 8.23c-.604-.354-1.5 0-1.5.854v8.66c0 .792.834 1.27 1.5.875l7.328-4.33a1.013 1.013 0 000-1.728z",
                    fill: "#2368F5"
                })))
            }, {"aria-hidden": "true", focusable: "false"}), pdf: (0, s.jsx)(function (e) {
                return c.createElement("svg", v({
                    width: 26,
                    height: 26,
                    viewBox: "0 0 26 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = c.createElement("circle", {
                    cx: 13,
                    cy: 12.56,
                    r: 12,
                    stroke: "#2368F5"
                })), d || (d = c.createElement("path", {
                    d: "M11.972 7.995a.643.643 0 111.286 0h-1.286zm1.098 9.685a.643.643 0 01-.91 0l-4.092-4.092a.643.643 0 01.91-.91l3.637 3.638 3.638-3.637a.643.643 0 01.91.91L13.07 17.68zm.188-9.685v9.23h-1.286v-9.23h1.286z",
                    fill: "#2368F5"
                })))
            }, {"aria-hidden": "true", focusable: "false"})
        }, A = e => {
            var l, a, t;
            let {resource: o, background: n = "grey", imageAspect: i = "portrait", showCopy: r = !1} = e,
                d = (0, c.useRef)(null);
            if (!(null == o ? void 0 : o.entity)) return null;
            let {
                    entity: {
                        ctaText: m,
                        fieldResourceReference: {
                            entity: {
                                fieldResourcePageThumbTitle: h,
                                fieldResourcePageThumbnail: f,
                                fieldResourcePageCtaLabel: {entity: {fieldText: v} = {}} = {},
                                fieldResourcePageExtLink: x,
                                fieldResourcePdf: A,
                                fieldResourcePageWistiaId: j,
                                fieldResourcePageIconType: N,
                                fieldResourcePageThumbCopy: w,
                                path: I
                            }
                        }
                    }
                } = o,
                M = ("pdf" === N ? null == A ? void 0 : null === (l = A.entity) || void 0 === l ? void 0 : null === (a = l.uri) || void 0 === a ? void 0 : a.url : null == x ? void 0 : null === (t = x.url) || void 0 === t ? void 0 : t.path) || I.alias,
                k = null != m ? m : v;
            return (0, s.jsxs)("div", {
                className: _()(b().root, b()[n], b()[i], r && b().showCopy),
                children: [(0, s.jsx)("div", {
                    className: b().thumbnailContainer,
                    children: f && (0, s.jsx)(p.Z, {image: f, fill: !0, sizes: "400px"})
                }), (null == j ? void 0 : j.length) > 0 && (0, s.jsx)("div", {
                    className: "h-0 overflow-hidden",
                    children: (0, s.jsx)(C.Z, {openModal: d, videoId: j, objectfit: "cover", openInModal: !0})
                }), (0, s.jsxs)("div", {
                    className: b().bottomContainer,
                    children: [h && (0, s.jsx)("div", {
                        className: b().resourceTitle,
                        children: h
                    }), r && (null == w ? void 0 : w.value) && (0, s.jsx)("div", {
                        className: _()(b().resourceCopy, "zscaler-wysiwyg"),
                        children: (0, u.ZP)(null == w ? void 0 : w.value)
                    }), !(null == j ? void 0 : j.length) && k && (0, s.jsxs)("a", {
                        className: b().resourceCTA,
                        href: M,
                        target: !M.startsWith("/") || M.endsWith(".pdf") ? "_blank" : "",
                        rel: M.startsWith("/") ? "" : "noreferrer",
                        "aria-label": k,
                        children: [k, y[N] || (0, s.jsx)(g, {"aria-hidden": !0})]
                    }), k && (null == j ? void 0 : j.length) > 0 && (0, s.jsxs)("button", {
                        className: b().resourceCTA,
                        onClick: () => {
                            "function" == typeof (null == d ? void 0 : d.current) && (null == d || d.current())
                        },
                        type: "button",
                        children: [k, y[N] || (0, s.jsx)(g, {"aria-hidden": !0})]
                    })]
                })]
            })
        };
        var j = A
    }, 85187: function (e, l, a) {
        "use strict";
        var t = a(85893), o = a(67294), n = a(68474), i = a(94184), r = a.n(i), d = a(81536), s = a(23229), c = a.n(s);
        let u = e => {
            let {
                onSubmit: l,
                onChange: a,
                className: i = "",
                placeholder: s = "",
                value: u
            } = e, [m, _] = (0, o.useState)(""), p = (0, d.$G)(), h = e => {
                _(e.currentTarget.value), "function" == typeof a && a(e)
            }, g = e => {
                e.preventDefault(), "function" == typeof l && l(m)
            };
            return (0, o.useEffect)(() => {
                void 0 !== u && m !== u && _(u)
            }, [u]), (0, t.jsx)("form", {
                className: r()(c().root, i),
                onSubmit: e => g(e),
                children: (0, t.jsxs)("div", {
                    className: c().inputWrapper,
                    children: [(0, t.jsx)(n.Z, {className: c().searchIcon}), (0, t.jsx)("input", {
                        placeholder: p(s),
                        value: m,
                        onChange: h
                    })]
                })
            })
        };
        l.Z = u
    }, 32552: function (e, l, a) {
        "use strict";
        var t = a(85893), o = a(67294), n = a(20346), i = a(94184), r = a.n(i), d = a(41287), s = a(11163),
            c = a(46182), u = a(39579), m = a(81536), _ = a(3004), p = a.n(_), h = a(14621);
        let g = e => {
            var l, a, i, _, g, f, v;
            let {className: C, post: x, variant: b = "default"} = e, y = (0, m.$G)(), A = (0, c.Z)(),
                j = (0, c.Z)("lg", !1), N = (0, o.useRef)(null), w = (0, s.useRouter)(), [I, M] = (0, o.useState)("");
            if (!x) return null;
            let k = "blog" === ((0, d.rz)(x, "content_type") || (0, d.rz)(x, "type_boost")),
                B = "event" === ((0, d.rz)(x, "content_type") || (0, d.rz)(x, "type_boost")),
                T = "news" === ((0, d.rz)(x, "content_type") || (0, d.rz)(x, "type_boost")),
                S = "press" === ((0, d.rz)(x, "content_type") || (0, d.rz)(x, "type_boost")),
                P = "resource" === ((0, d.rz)(x, "content_type") || (0, d.rz)(x, "type_boost")),
                L = "customer" === ((0, d.rz)(x, "content_type") || (0, d.rz)(x, "type_boost")),
                E = (0, d.rz)(x, "link") || (0, d.rz)(x, "url"),
                H = (0, d.rz)(x, "cover_image") || (0, d.rz)(x, "background_image"),
                W = (0, d.rz)(x, "additional_content");
            return E ? (0, t.jsxs)("div", {
                className: r()(p().root, j && p().isTablet, A && p().isMobile, C, {
                    [p().typeBlog]: k,
                    [p().typeEvent]: B,
                    [p().typePress]: S,
                    [p().typeNews]: T,
                    [p().typeResource]: P,
                    [p().typeCustomerCaseStudy]: L,
                    [p().typeFeaturedEvent]: "featured-event" === b
                }), children: [(k || B || T || L || P) && (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                        className: p().card,
                        children: [!!(H || (0, d.rz)(x, "logo_image")) && !P && (0, t.jsxs)("div", {
                            className: p().thumbnailContainer,
                            children: [H && (0, t.jsx)(u.Z, {
                                image: {
                                    alt: "",
                                    url: "https://".concat("cms.zscaler.com", "/").concat(H),
                                    width: 100,
                                    height: 100,
                                    title: ""
                                }, className: p().image, fill: !0
                            }), !!(0, d.rz)(x, "logo_image") && (0, t.jsx)(u.Z, {
                                image: {
                                    alt: "Logo ".concat(x.title),
                                    url: "https://".concat("cms.zscaler.com", "/").concat((0, d.rz)(x, "logo_image")),
                                    width: 227,
                                    height: 150,
                                    title: ""
                                },
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-10 max-h-[80%] max-w-[66%]"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: p().cardContent,
                            children: [T && (0, t.jsxs)("div", {
                                className: p().pressHeader,
                                children: [!!(0, d.rz)(x, "news_source_term_logo") && (0, t.jsx)(u.Z, {
                                    image: {
                                        alt: "Logo ".concat(x.title),
                                        url: "https://".concat("cms.zscaler.com", "/").concat((0, d.rz)(x, "news_source_term_logo")),
                                        width: 227,
                                        height: 150,
                                        title: ""
                                    }, className: "object-contain object-left h-26 max-w-[40%] shrink-1 mr-16"
                                }), (0, t.jsx)("span", {
                                    className: "shrink-1",
                                    children: (0, d.YR)((0, d.rz)(x, "date"), "MMMM DD, YYYY", w.locale)
                                })]
                            }), k && (0, t.jsxs)(t.Fragment, {
                                children: [(0, d.rz)(x, "blog_category") && (0, t.jsx)("div", {
                                    className: "flex",
                                    children: (0, t.jsx)("p", {
                                        className: p().eyebrow,
                                        style: {color: (0, d.rz)(x, "blog_color")},
                                        children: y((0, d.rz)(x, "blog_category"))
                                    })
                                }), (0, d.rz)(x, "blog_sub_category") && (0, t.jsx)("p", {
                                    className: p().copy,
                                    children: y((0, d.rz)(x, "blog_sub_category"))
                                })]
                            }), P && (0, t.jsxs)(t.Fragment, {
                                children: [(0, d.rz)(x, "topic") && (0, t.jsx)("div", {
                                    className: "flex",
                                    children: (0, t.jsx)("p", {
                                        className: p().eyebrow,
                                        children: y((0, d.rz)(x, "topic"))
                                    })
                                }), (0, d.rz)(x, "resource_type") && (0, t.jsx)("p", {
                                    style: {color: (0, d.rz)(x, "resource_type_color")},
                                    className: p().copy,
                                    children: y((0, d.rz)(x, "resource_type"))
                                })]
                            }), B && (0, t.jsxs)("div", {
                                className: p().eventHeader,
                                children: [(0, t.jsxs)("span", {
                                    className: p().eventHeaderTitle,
                                    children: [y("Date"), ": "]
                                }), (0, d.YR)((0, d.rz)(x, "event_startdate"), "dddd, MMMM DD, YYYY", w.locale), (0, t.jsx)("br", {}), "event_location" in x && (null == x ? void 0 : null === (l = x.event_location) || void 0 === l ? void 0 : l.raw[0]) && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsxs)("span", {
                                        className: p().eventHeaderTitle,
                                        children: [y("Location"), ":"]
                                    }), " ", "event_location" in x && (null == x ? void 0 : null === (a = x.event_location) || void 0 === a ? void 0 : a.raw[0])]
                                })]
                            }), "title" in x && (0, t.jsx)("h3", {
                                className: p().headline,
                                children: null == x ? void 0 : null === (i = x.title) || void 0 === i ? void 0 : i.raw[0]
                            }), L && (0, d.rz)(x, "customer_highlights") && (0, t.jsx)("div", {
                                className: p().description,
                                children: (0, d.rz)(x, "customer_highlights")
                            }), k && (0, t.jsxs)("div", {
                                className: "flex items-center mt-auto",
                                children: [(0, t.jsx)("div", {
                                    className: "rounded-full overflow-hidden mr-15 shrink-0 w-[4.5rem] h-[4.5rem] bg-coreBlue-50",
                                    children: (0, t.jsx)(u.Z, {
                                        image: {
                                            alt: "Photo ".concat(null === (_ = (0, d.rz)(x, "author")) || void 0 === _ ? void 0 : _.name),
                                            url: (null === (g = (0, d.rz)(x, "author")) || void 0 === g ? void 0 : g.image) ? "https://".concat("cms.zscaler.com", "/").concat(null === (f = (0, d.rz)(x, "author")) || void 0 === f ? void 0 : f.image) : "/assets/images/default-avatar.png",
                                            width: 45,
                                            height: 45,
                                            title: ""
                                        }
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "shrink-1 uppercase tracking-[0.1em]",
                                    children: [(0, t.jsx)("div", {
                                        className: "font-bold",
                                        children: null === (v = (0, d.rz)(x, "author")) || void 0 === v ? void 0 : v.name
                                    }), (0, t.jsxs)("div", {
                                        className: "",
                                        children: [!!(0, d.rz)(x, "published_at") && "".concat((0, d.YR)((0, d.rz)(x, "published_at"), "MMMM DD, YYYY", w.locale), " | "), !!(0, d.rz)(x, "body_content") && (0, t.jsxs)("span", {
                                            className: "whitespace-nowrap",
                                            children: [(0, d.f6)((0, d.rz)(x, "body_content")), " ", y("min read")]
                                        })]
                                    })]
                                })]
                            }), (0, t.jsx)("span", {className: p().line}), !1, E && !L && (0, t.jsxs)(n.Z, {
                                className: p().link,
                                href: E, ...(0, d.xf)(E) ? {rel: "nofollow", target: "_blank"} : {},
                                children: [B && y("Register now"), T && "".concat(y("Read now"), " ↗"), P && (0, d.rz)(x, "video_id") && y("Watch now"), (P || k) && !(0, d.rz)(x, "video_id") && y("Read now")]
                            }), (0, t.jsx)(h.Z, {
                                className: "absolute left-[-800vw] h-0",
                                openModal: N,
                                videoId: I,
                                openInModal: !0
                            }), (0, t.jsx)("div", {
                                className: "flex gap-20",
                                children: L && W && Object.keys(W).slice(0, 2).map((e, l) => {
                                    let a = e;
                                    return "customer_video" === e ? a = y("Watch Video") : "customer_resource_pdf" === e ? a = y("Read Case Study") : "customer_press_release" === e ? a = y("Read Press Release") : "customer_case_study_entity" === e && (a = y("View Success Story")), (0, t.jsxs)("div", {
                                        children: ["customer_video" !== e && (0, t.jsx)(n.Z, {
                                            className: "".concat(p().link, " ").concat(L ? p().customerCaseStudy : ""),
                                            href: W[e], ...(0, d.xf)(W[e]) ? {rel: "nofollow", target: "_blank"} : {},
                                            children: a
                                        }), "customer_video" === e && (0, t.jsx)("button", {
                                            className: "".concat(p().link, " ").concat(L ? p().customerCaseStudy : ""),
                                            type: "button",
                                            onClick: () => {
                                                M(W[e]), "function" == typeof (null == N ? void 0 : N.current) && (null == N || N.current())
                                            },
                                            children: y("Watch Video")
                                        })]
                                    }, W[e])
                                })
                            })]
                        })]
                    })
                }), S && (j ? (0, t.jsxs)(n.Z, {
                    className: "".concat(p().newsCard, " ").concat(p()["color-blue"]),
                    style: {backgroundColor: "".concat((0, d.rz)(x, "background_color"), "32")},
                    href: E, ...(0, d.xf)(E) ? {rel: "nofollow", target: "_blank"} : {},
                    children: [(0, t.jsx)("div", {
                        className: "flex",
                        style: {visibility: (0, d.rz)(x, "topic") ? "visible" : "hidden"},
                        children: (0, t.jsx)("div", {
                            className: p().newsTag,
                            style: {color: (0, d.rz)(x, "topic_color")},
                            children: (0, t.jsx)("span", {children: y((0, d.rz)(x, "topic"))})
                        })
                    }), !!(0, d.rz)(x, "title") && (0, t.jsx)("h3", {
                        className: p().newsHeadline,
                        children: (0, d.rz)(x, "title")
                    }), !!(0, d.rz)(x, "date") && (0, t.jsx)("p", {
                        className: p().newsDate,
                        children: (0, d.YR)((0, d.rz)(x, "date"), "MMMM DD, YYYY", w.locale)
                    })]
                }) : (0, t.jsxs)("div", {
                    className: "".concat(p().newsCard, " ").concat(p()["color-blue"]),
                    style: {backgroundColor: "".concat((0, d.rz)(x, "background_color"), "32")},
                    children: [(0, t.jsx)("div", {
                        className: "flex",
                        style: {visibility: (0, d.rz)(x, "topic") ? "visible" : "hidden"},
                        children: (0, t.jsx)("div", {
                            className: p().newsTag,
                            style: {color: (0, d.rz)(x, "topic_color")},
                            children: (0, t.jsx)("span", {children: (0, d.rz)(x, "topic")})
                        })
                    }), !!(0, d.rz)(x, "title") && (0, t.jsx)("h3", {
                        className: p().newsHeadline,
                        children: (0, d.rz)(x, "title")
                    }), !!(0, d.rz)(x, "date") && (0, t.jsx)("p", {
                        className: p().newsDate,
                        children: (0, d.YR)((0, d.rz)(x, "date"), "MMMM DD, YYYY", w.locale)
                    }), (0, t.jsx)("hr", {className: p().newsDivider}), (0, t.jsx)(n.Z, {
                        className: p().newsLink,
                        href: E, ...(0, d.xf)(E) ? {rel: "nofollow", target: "_blank"} : {},
                        children: y("Read now")
                    })]
                }))]
            }) : null
        };
        l.Z = g
    }, 93417: function (e, l, a) {
        "use strict";
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(46182), d = a(39579), s = a(35652),
            c = a(81536), u = a(95807), m = a.n(u), _ = a(14621);
        let p = e => {
            let {videoTitle: l, videoId: a, backgroundImage: n, playButtonText: u, variant: p = "default"} = e,
                h = (0, o.useRef)(null), g = (0, c.$G)(), f = () => {
                    h.current && h.current()
                }, v = (0, r.Z)();
            return (0, t.jsxs)("div", {
                className: i()(m().root, "h-full w-full", u && m().withPlayButtonText, "video-card-module" === p && m().videoCardModuleVariant, v && m().mobile),
                children: [(0, t.jsx)("div", {className: m().bgGradient}), "video-card-module" === p && v && (0, t.jsx)("div", {className: m().bgShadowGradient}), (0, t.jsx)(d.Z, {
                    className: i()(m().bgCloud),
                    image: {
                        url: "/assets/images/clouds/resourcesWithHighlightVideoCloud.png",
                        alt: "",
                        width: 100,
                        height: 100,
                        title: ""
                    },
                    fill: !0,
                    draggable: !1
                }), n && (0, t.jsx)(d.Z, {
                    className: m().backgroundImage,
                    image: n,
                    draggable: !1,
                    sizes: "100vw"
                }), l && (0, t.jsx)("div", {
                    className: m().videoTitleContainer,
                    children: (0, t.jsx)("div", {className: m().videoTitle, children: l})
                }), (0, t.jsx)("button", {
                    type: "button",
                    className: m().playBtn,
                    onClick: f,
                    children: (0, t.jsxs)("div", {
                        className: m().playBtnContentContainer,
                        children: [(0, t.jsx)("div", {
                            className: m().playBtnIcon,
                            children: (0, t.jsx)(s.Z, {"aria-hidden": !0})
                        }), u ? (0, t.jsx)("p", {
                            className: m().playButtonText,
                            children: u
                        }) : (0, t.jsx)("span", {className: "sr-only", children: g("Play")})]
                    })
                }), a && (0, t.jsx)("div", {
                    className: "h-0 overflow-hidden",
                    children: (0, t.jsx)(_.Z, {openModal: h, videoId: a, objectfit: "cover", openInModal: !0})
                })]
            })
        };
        l.Z = p
    }, 14621: function (e, l, a) {
        "use strict";
        a(67294);
        var t = a(5152), o = a.n(t);
        let n = o()(() => a.e(531).then(a.bind(a, 88531)), {loadableGenerated: {webpack: () => [88531]}});
        l.Z = n
    }, 43824: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return x
            }
        });
        var t = a(85893), o = a(67294), n = a(88735), i = a(53453), r = a(41287), d = a(46182), s = a(94184),
            c = a.n(s), u = a(85187), m = a(32552), _ = a(10124), p = a(39498), h = a(81536), g = a(11163),
            f = a(26943), v = a.n(f), C = a(32250);
        let x = "ParagraphBlogPostFilterModule", b = "blog_category.keyword", y = "blog_sub_category.keyword",
            A = e => {
                var l, a, s, f, x;
                let {
                        paragraph: A,
                        searchProps: j
                    } = e, {fieldBlogPostFilterHeadline: N} = A, [w, I] = (0, o.useState)(""), M = (0, g.useRouter)(),
                    k = (0, o.useRef)(null), B = (0, h.$G)(), T = (0, o.useContext)(i.GlobalContext),
                    S = (0, d.Z)("lg"), [P, L] = (0, o.useState)([]), [E, H] = (0, o.useState)([]),
                    W = (0, o.useCallback)(e => {
                        var l, a, t, o;
                        let n = {};
                        return null == j || null === (l = j.facets) || void 0 === l || null === (a = l[e]) || void 0 === a || null === (t = a[0]) || void 0 === t || null === (o = t.data) || void 0 === o || o.forEach(e => {
                            let {value: l} = e, [a, t] = l.split("___");
                            n[a] = t
                        }), n
                    }, [null == j ? void 0 : j.facets]), Q = (0, o.useMemo)(() => {
                        if (!M.query.type) return null;
                        let e = W("blog_category_alias");
                        return e["/blogs/".concat(String(M.query.type).toLowerCase())]
                    }, [M.query, W]), R = (0, o.useMemo)(() => {
                        if (!M.query.topic) return null;
                        let e = W("blog_sub_category_alias");
                        return e["/blogs/".concat(String(M.query.topic).toLowerCase())]
                    }, [M.query, W]);
                (0, o.useEffect)(() => {
                    var e, l, a, t, o, n;
                    if ((null === (e = null == j ? void 0 : j.facets[b]) || void 0 === e ? void 0 : e.length) && !P.length) {
                        let i = null === (a = null == j ? void 0 : j.facets[b][0]) || void 0 === a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.map(e => {
                            let {value: l} = e;
                            return {label: l, value: l, defaultSelected: Q === l}
                        });
                        L(i)
                    }
                    if ((null === (l = null == j ? void 0 : j.facets[y]) || void 0 === l ? void 0 : l.length) && !E.length) {
                        let r = null === (o = null == j ? void 0 : j.facets[y][0]) || void 0 === o ? void 0 : null === (n = o.data) || void 0 === n ? void 0 : n.map(e => {
                            let {value: l} = e;
                            return {label: l, value: l, defaultSelected: R === l}
                        });
                        H(r)
                    }
                }, [j]);
                let F = e => {
                        e === w ? I("") : I(e)
                    }, Z = e => {
                        e === w && I("")
                    }, G = {Categories: b, "Sub categories": y},
                    O = [{label: B("Latest"), value: "latest", defaultSelected: !0}, {
                        label: B("Oldest"),
                        value: "oldest"
                    }, {label: B("A-Z"), value: "a-z", format: "uppercase"}, {
                        label: B("Z-A"),
                        value: "z-a",
                        format: "uppercase"
                    }], D = {
                        latest: {field: "created", direction: "desc"},
                        oldest: {field: "created", direction: "asc"},
                        "a-z": {field: "title.keyword", direction: "asc"},
                        "z-a": {field: "title.keyword", direction: "desc"}
                    }, z = () => {
                        k.current && k.current.scrollIntoView({behavior: "smooth"})
                    }, U = () => {
                        let e = document.getElementById("categoryFilter");
                        if (e) {
                            let l = e.getBoundingClientRect().top + window.pageYOffset + -30;
                            window.scrollTo({top: l, behavior: "smooth"})
                        }
                    },
                    q = j.searchTerm && "_score" === j.sortList[0].field, [V, Y] = (0, o.useState)(!1), [J, K] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    var e;
                    V || !Q || (null === (e = j.filters) || void 0 === e ? void 0 : e.length) || ((0, _.WB)([{
                        label: Q,
                        value: Q
                    }], b, j), U(), Y(!0))
                }, [Q, j, V]), (0, o.useEffect)(() => {
                    var e;
                    J || !R || (null === (e = j.filters) || void 0 === e ? void 0 : e.length) || ((0, _.WB)([{
                        label: R,
                        value: R
                    }], y, j), U(), K(!0))
                }, [R, J, j]), (0, t.jsxs)("div", {
                    id: "categoryFilter",
                    ref: k,
                    className: c()(v().root, "" !== w && v().openFilter),
                    children: [(0, t.jsx)("div", {
                        className: "container default-grid",
                        children: N && (0, t.jsx)("h2", {className: v().headline, children: N.value})
                    }), S && (0, t.jsx)("div", {
                        className: c()("container", v().filterWrapperContainer), children: (0, t.jsxs)("div", {
                            className: c()(" relative", v().filterWrapper),
                            children: [(0, t.jsx)("div", {
                                className: "md:hidden block",
                                children: (0, t.jsx)(u.Z, {
                                    className: v().searchBar,
                                    placeholder: "Search",
                                    onChange: e => {
                                        var l;
                                        return (0, _.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, j)
                                    },
                                    onSubmit: e => (0, _.H_)(e, j)
                                })
                            }), (0, t.jsxs)("div", {
                                className: "flex gap-10 justify-center md:justify-start pl-20 md:pl-0 md:col-span-6",
                                children: [(null == P ? void 0 : P.length) > 0 || (null == E ? void 0 : E.length) > 0 ? (0, t.jsx)(n.Z, {
                                    options: [{
                                        groupName: "Categories",
                                        options: P
                                    }, {groupName: "Sub categories", options: E}],
                                    buttonLabel: "Filter By",
                                    onClick: F,
                                    isOpen: "Filter By" === w,
                                    onChange: e => (0, _.WB)(e, G, j),
                                    showFilter: !0,
                                    className: v().filterButton,
                                    onClickOutside: Z
                                }) : null, (0, t.jsx)(n.Z, {
                                    options: O,
                                    buttonLabel: "Sort",
                                    onClick: F,
                                    isOpen: "Sort" === w,
                                    reset: q,
                                    onChange: e => (0, _.cB)(e, D, j),
                                    showFilter: !0,
                                    className: v().filterButton,
                                    onClickOutside: Z,
                                    singleChoice: !0
                                })]
                            }), (0, t.jsx)("div", {
                                className: "md:block hidden md:col-span-6",
                                children: (0, t.jsx)(u.Z, {
                                    className: v().searchBar,
                                    placeholder: "Search",
                                    onChange: e => {
                                        var l;
                                        return (0, _.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, j)
                                    },
                                    onSubmit: e => (0, _.H_)(e, j)
                                })
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "default-grid container relative", children: [!S && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsxs)("div", {
                                className: "col-span-full flex justify-center mb-40 text-[1.4rem] text-darkGrey-60",
                                children: [(0, t.jsx)("button", {
                                    type: "button",
                                    className: c()("mx-20 hover:text-coreBlue-100", !(null === (l = null == j ? void 0 : null === (a = j.filters) || void 0 === a ? void 0 : a.find(e => e.field === b)) || void 0 === l ? void 0 : null === (s = l.values) || void 0 === s ? void 0 : s.length) && "text-coreBlue-100 font-medium"),
                                    onClick: () => {
                                        (0, _.WB)([], b, j)
                                    },
                                    children: B("All")
                                }, "All"), null == P ? void 0 : P.map(e => {
                                    var l, a, o;
                                    return (null == e ? void 0 : e.label) ? (0, t.jsx)("button", {
                                        className: c()("mx-20 hover:text-coreBlue-100", (null === (l = null == j ? void 0 : null === (a = j.filters) || void 0 === a ? void 0 : a.find(e => e.field === b)) || void 0 === l ? void 0 : null === (o = l.values) || void 0 === o ? void 0 : o.includes(e.label)) && "text-coreBlue-100"),
                                        type: "button",
                                        onClick: () => {
                                            (0, _.WB)([e], b, j)
                                        },
                                        children: B(e.label)
                                    }, e.label) : null
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "col-span-full relative mb-30 flex gap-20 justify-between items-center",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex gap-20 items-center",
                                    children: [(null == E ? void 0 : E.length) && (0, t.jsx)(n.Z, {
                                        options: E,
                                        buttonLabel: "All topics",
                                        onClick: F,
                                        isOpen: "All topics" === w,
                                        onChange: e => {
                                            (0, _.WB)(e, y, j)
                                        },
                                        showFilter: !0,
                                        className: v().filterButton,
                                        onClickOutside: Z
                                    }), (0, t.jsx)(n.Z, {
                                        options: O,
                                        reset: q,
                                        buttonLabel: "Sort",
                                        onClick: F,
                                        isOpen: "Sort" === w,
                                        onChange: e => {
                                            (0, _.cB)(e, D, j), I("")
                                        },
                                        showFilter: !0,
                                        className: v().filterButton,
                                        onClickOutside: Z,
                                        singleChoice: !0,
                                        variant: "select",
                                        sortLabels: !1
                                    })]
                                }), (0, t.jsx)(u.Z, {
                                    className: v().searchBar, placeholder: "Search", onChange: e => {
                                        var l;
                                        return (0, _.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, j)
                                    }, onSubmit: e => (0, _.H_)(e, j)
                                })]
                            })]
                        }), (null == j ? void 0 : j.error) && (0, t.jsxs)("div", {
                            className: "container my-20 font-medium text-darkRed-100",
                            children: [B("Error"), ": ", null == j ? void 0 : j.error]
                        }), !(null == j ? void 0 : null === (f = j.results) || void 0 === f ? void 0 : f.length) && (0, t.jsx)("div", {
                            className: "mb-20 col-span-full",
                            children: (0, t.jsx)(C.default, {noPadding: !0, paragraph: (0, r.jV)(T)})
                        }), !!(null == j ? void 0 : null === (x = j.results) || void 0 === x ? void 0 : x.length) && j.results.map((e, l) => (0, t.jsx)(m.Z, {
                            className: "col-span-full md:col-span-6 lg:col-span-3 mb-20 lg:mb-40 ".concat(v().teaserCard),
                            post: e
                        }, JSON.stringify(e))), (0, t.jsx)("div", {
                            className: "col-span-full", onClick: e => {
                                let l = e.target, a = l.tagName.toLowerCase();
                                ["li", "a"].includes(a) && z()
                            }, children: (0, t.jsx)(p.Z, {className: "mb-20 -ml-12 md:mb-44 md:mt-24 lg:mb-88 lg:mt-6"})
                        })]
                    })]
                })
            };
        l.default = (0, _.ZP)(A, {
            alwaysSearchOnInitialLoad: !0,
            searchQuery: {
                result_fields: {
                    content_type: {raw: {}},
                    title: {raw: {}},
                    published_at: {raw: {}},
                    created: {raw: {}},
                    background_color: {raw: {}},
                    topic: {raw: {}},
                    topic_color: {raw: {}},
                    blog_category: {raw: {}},
                    blog_category_alias: {raw: {}},
                    blog_sub_category_alias: {raw: {}},
                    blog_color: {raw: {}},
                    blog_sub_category: {raw: {}},
                    cover_image: {raw: {}},
                    author: {raw: {}},
                    body_content: {raw: {}},
                    url: {raw: {}}
                },
                search_fields: {title: {weight: 13}},
                filters: [{field: "content_type", values: ["blog"], type: "all"}],
                facets: {
                    [b]: {type: "value", size: 40},
                    blog_category_alias: {type: "value", size: 40},
                    [y]: {type: "value", size: 40},
                    blog_sub_category_alias: {type: "value", size: 40},
                    "author.email.raw": {type: "value", sort: "value", size: 40}
                },
                resultsPerPage: 8,
                sortDirection: "desc",
                sortField: "created",
                sortList: [{field: "created", direction: "desc"}]
            },
            initialState: {resultsPerPage: 8, sortList: [{field: "created", direction: "desc"}]}
        })
    }, 63087: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return p
            }
        });
        var t = a(85893), o = a(67294), n = a(39579), i = a(81536), r = a(41287), d = a(27484), s = a.n(d), c = a(5152),
            u = a.n(c), m = a(12796), _ = a.n(m);
        let p = "ParagraphBlogPostHeaderModule",
            h = u()(() => a.e(440).then(a.bind(a, 96440)), {loadableGenerated: {webpack: () => [96440]}, ssr: !1}),
            g = e => {
                var l;
                let {paragraph: a} = e, {post: d} = a, c = (0, i.$G)(), [u, m] = (0, o.useState)("");
                (0, o.useEffect)(() => {
                    let e = document.querySelectorAll("[class*='wysiwyg_module']"), l = "";
                    e.forEach(e => {
                        let a = e.innerHTML;
                        l += a
                    }, []), m(l)
                });
                let {title: p, publishedAt: g, author: f, mainCategory: v, coverImage: C} = d.entity,
                    x = "".concat((0, r.f6)(u), " ").concat(c("min read")),
                    b = s().unix(null == g ? void 0 : g.value).format("MMMM DD, YYYY"), y = "ACCESSCONTROL";
                return (0, t.jsx)("div", {
                    className: _().root, children: (0, t.jsx)("div", {
                        className: "tile-container", children: (0, t.jsxs)("div", {
                            className: "default-grid relative",
                            children: [C && (0, t.jsxs)("div", {
                                className: _().bg,
                                children: [(0, t.jsx)(n.Z, {
                                    image: C,
                                    fill: !0
                                }), (0, t.jsx)("div", {className: _().gradient})]
                            }), !C && (0, t.jsx)("div", {
                                className: "".concat(_().bg, " ").concat(_().bgWNoImage, " ").concat(_()[y]),
                                children: (0, t.jsx)(h, {"aria-hidden": !0})
                            }), (0, t.jsxs)("div", {
                                className: "".concat(_().content, " ").concat(C ? _().hasImage : _().noImage, " ").concat(_()[y], " col-span-full"),
                                children: [(0, t.jsx)("div", {
                                    className: _().pageInfo,
                                    children: (0, t.jsx)("div", {
                                        className: "flex",
                                        children: v && (null == v ? void 0 : null === (l = v.entity) || void 0 === l ? void 0 : l.name) && (0, t.jsx)("span", {
                                            className: "".concat(_().topic, " ").concat(_()[y]),
                                            children: v.entity.name
                                        })
                                    })
                                }), p && (0, t.jsx)("h2", {
                                    className: _().title,
                                    children: p
                                }), (0, t.jsxs)("div", {
                                    className: _().authorBlock,
                                    children: [(null == f ? void 0 : f.image) && (0, t.jsx)("div", {
                                        className: _().authorAvatar,
                                        children: (0, t.jsx)(n.Z, {image: null == f ? void 0 : f.image})
                                    }), (0, t.jsxs)("div", {
                                        className: _().authorInfo,
                                        children: [(null == f ? void 0 : f.name) && (0, t.jsxs)("div", {
                                            className: _().authorName,
                                            children: [(0, t.jsx)("strong", {children: null == f ? void 0 : f.name.toUpperCase()}), f.title && (0, t.jsxs)("span", {children: ["\xa0|\xa0", f.title]})]
                                        }), b && (0, t.jsxs)("div", {
                                            className: _().readDate,
                                            children: [b, " ", b && "|", " ", x]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            };
        l.default = g
    }, 51037: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return g
            }
        });
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(41287), d = a(46182), s = a(28719),
            c = a(20346), u = a(14621), m = a(39579), _ = a(63288), p = a.n(_), h = a(22359);
        let g = "ParagraphCaseStudyModule", f = e => {
            let {paragraph: l} = e, {
                    fieldCaseStudyMEyebrow: a,
                    fieldCaseStudyMFullWidth: n,
                    fieldCaseStudyMCaseStudy: _,
                    fieldCaseStudyMCaseStudy1: g,
                    fieldCaseStudyMCaseStudy2: f,
                    fieldCaseStudyMFooterCta: v
                } = l, C = (0, o.useRef)(null),
                x = (0, d.Z)("lg", !1), [b, y] = (0, o.useState)(0), [A, j] = (0, o.useState)(""), N = [g];
            f && N.push(f), _ && (N = [...N, ..._]);
            let w = e => {
                    y(e)
                }, I = 742 * Math.PI, M = I * (Math.acos(-.5489897632246206) / (2 * Math.PI)), k = M / N.length,
                B = -(((I / 2 - M) / 2 + I / 4) * 1), T = x ? B - M + (b + 1) * k : B, S = k * (b + 1),
                P = N[b], {entity: {fieldCaseStudyTeaserImage: L}} = P, E = e => {
                    j(e), "function" == typeof (null == C ? void 0 : C.current) && (null == C || C.current())
                };
            return (0, t.jsx)("div", {
                className: "max-w-full lg:overflow-hidden", children: (0, t.jsx)("div", {
                    className: "tile-container mt-[9.77rem] md:mt-[13.77rem] lg:mt-0 lg:px-20",
                    children: (0, t.jsxs)("div", {
                        className: i()(p().root, "default-grid", n && p().isFullWidth),
                        children: [(0, t.jsx)("div", {
                            className: p().bgpattern,
                            children: (0, t.jsx)(m.Z, {
                                image: {
                                    url: "/assets/images/clouds/purpleCardPattern.png",
                                    alt: "dots pattern",
                                    width: 1499,
                                    height: 342,
                                    title: ""
                                }
                            })
                        }), (0, t.jsx)("div", {
                            className: "".concat(p().fieldCaseStudyTeaserImageSection, " block lg:hidden col-span-4 md:col-span-12 lg:col-span-4"),
                            children: (0, t.jsxs)("div", {
                                className: p().fieldCaseStudyTeaserImageSectionContent,
                                children: [(0, t.jsx)("div", {
                                    className: p().fieldCaseStudySelectDisplay,
                                    children: (0, t.jsxs)("svg", {
                                        viewBox: "0 0 202 653",
                                        children: [(0, t.jsx)("title", {}), (0, t.jsx)("circle", {
                                            cx: "373",
                                            cy: "326",
                                            r: "371",
                                            fill: "transparent",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeDasharray: "".concat(M, " ").concat(I),
                                            strokeDashoffset: B,
                                            className: p().circle
                                        }), (0, t.jsx)("circle", {
                                            cx: "373",
                                            cy: "326",
                                            r: "371",
                                            fill: "transparent",
                                            stroke: "url(#paint0_linear_649_3466)",
                                            strokeWidth: "4",
                                            strokeLinecap: "round",
                                            strokeDasharray: "".concat(S, " ").concat(I),
                                            strokeDashoffset: T,
                                            className: p().selectedHighlight
                                        }), (0, t.jsx)("defs", {
                                            children: (0, t.jsxs)("linearGradient", {
                                                id: "paint0_linear_649_3466",
                                                x1: "0%",
                                                y1: "0%",
                                                x2: "100%",
                                                y2: "0%",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [(0, t.jsx)("stop", {stopColor: "#236BF5"}), (0, t.jsx)("stop", {
                                                    offset: "100%",
                                                    stopColor: "#012673"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: p().fieldCaseStudyTeaserImageWrapper,
                                    children: (0, t.jsx)("div", {
                                        className: i()(p().fieldCaseStudyTeaserImageContent, p().selected),
                                        children: L && (0, t.jsx)(m.Z, {
                                            image: {...L, width: 672, height: 672},
                                            sizes: "(max-width: 767px) 344px, 672px"
                                        })
                                    })
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "h-0 overflow-hidden",
                            children: (0, t.jsx)(u.Z, {openModal: C, videoId: A, objectfit: "cover", openInModal: !0})
                        }), (0, t.jsx)("div", {
                            className: p().content, children: N && N.map((e, l) => {
                                var o;
                                let {
                                    entity: {
                                        fieldCaseStudyTBody: n,
                                        fieldCaseStudyTHeadnote: d,
                                        fieldCaseStudyTHeroLogo: u,
                                        fieldCaseStudyTeaserHeadline: _,
                                        fieldCaseStudyTeaserCtaLink: g,
                                        fieldCaseStudyTeaserNewTab: f,
                                        fieldCaseStudyTWistiaId: C
                                    }
                                } = e;
                                return (0, t.jsxs)("div", {
                                    className: i()(p().caseStudyContent, b === l && p().selected),
                                    children: [a && (0, t.jsx)("div", {
                                        className: p().eyebrow,
                                        children: a
                                    }), u && (0, t.jsx)("div", {
                                        className: p().heroLogoContainer,
                                        children: (0, t.jsx)(m.Z, {className: p().fieldCaseStudyTHeroLogo, image: u})
                                    }), d && (0, t.jsx)("div", {
                                        className: p().headnote,
                                        children: (0, r.Qc)(d)
                                    }), _ && (0, t.jsx)("h2", {
                                        className: p().headline,
                                        children: (0, r.Qc)(_)
                                    }), (null == n ? void 0 : n.value) && (0, t.jsx)("div", {
                                        className: p().bodyContent,
                                        children: (0, r.Qc)(n.value)
                                    }), (null == g ? void 0 : g.title) && (0, t.jsx)("div", {
                                        className: p().ctaWrapper,
                                        children: C ? (0, t.jsxs)("button", {
                                            onClick: () => E(C),
                                            className: "".concat(p().cta_link),
                                            type: "button",
                                            children: [g.title, (0, t.jsx)(s.Z, {"aria-hidden": !0})]
                                        }) : (0, t.jsxs)(c.Z, {
                                            href: null === (o = g.url) || void 0 === o ? void 0 : o.path,
                                            target: f ? "_blank" : "",
                                            className: p().cta_link,
                                            rel: "noreferrer",
                                            children: [g.title, (0, t.jsx)(s.Z, {"aria-hidden": !0})]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "".concat(p().casestudy_btn_wrapper, " grid-cols-4"),
                                        children: N.length > 1 && N.map((e, l) => {
                                            let {entity: {fieldCaseStudyTButtonLogo: a}} = e;
                                            return (0, t.jsx)("button", {
                                                type: "button",
                                                className: "".concat(p().casestudy_btn, " ").concat(b === l ? p().selected : ""),
                                                onClick: e => {
                                                    w(l), e.currentTarget.focus()
                                                },
                                                children: a && (0, t.jsx)("div", {
                                                    className: p().logoContainer,
                                                    children: (0, t.jsx)(m.Z, {image: a, className: "h-full w-full"})
                                                })
                                            }, JSON.stringify(a))
                                        })
                                    }), v && (0, t.jsx)("div", {
                                        className: p().footerCTA,
                                        children: (0, t.jsx)(h.Z, {
                                            cta: v,
                                            type: "link",
                                            btnColor: "light",
                                            size: "large"
                                        })
                                    })]
                                }, "logo-".concat(l))
                            })
                        }), (0, t.jsxs)("div", {
                            className: i()(p().fieldCaseStudyTeaserImageSection, p().desktopTeaserImageSection),
                            children: [(0, t.jsx)("div", {
                                className: p().fieldCaseStudySelectDisplay,
                                children: (0, t.jsxs)("svg", {
                                    viewBox: "0 0 202 653",
                                    children: [(0, t.jsx)("title", {}), (0, t.jsx)("circle", {
                                        cx: "374",
                                        cy: "326",
                                        r: "371",
                                        fill: "transparent",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeDasharray: "".concat(M, " ").concat(I),
                                        strokeDashoffset: B,
                                        className: p().circle
                                    }), (0, t.jsx)("circle", {
                                        cx: "374",
                                        cy: "326",
                                        r: "371",
                                        fill: "transparent",
                                        stroke: "url(#paint0_linear_649_3467)",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeDasharray: "".concat(S, " ").concat(I),
                                        strokeDashoffset: T,
                                        className: p().selectedHighlight
                                    }), (0, t.jsx)("defs", {
                                        children: (0, t.jsxs)("linearGradient", {
                                            id: "paint0_linear_649_3467",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "0%",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0, t.jsx)("stop", {stopColor: "#236BF5"}), (0, t.jsx)("stop", {
                                                offset: "100%",
                                                stopColor: "#012673"
                                            })]
                                        })
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: p().fieldCaseStudyTeaserImageWrapper,
                                children: N.map((e, l) => {
                                    let {entity: {fieldCaseStudyTeaserImage: a}} = e;
                                    return (0, t.jsx)("div", {
                                        className: i()(p().fieldCaseStudyTeaserImageContent, l === b && p().selected),
                                        children: a && (0, t.jsx)(m.Z, {image: a})
                                    }, "image-".concat(l))
                                })
                            })]
                        })]
                    })
                })
            })
        };
        l.default = f
    }, 21501: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return s
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(79042), n = a(41287), i = a(81536), r = a(70368), d = a.n(r);
        let s = "ParagraphCodeModule", c = e => {
            let {paragraph: l} = e, {
                fieldCodeModCodeSnippet: a,
                fieldCodeModDesktopImage: r,
                fieldCodeModTabletImage: s,
                fieldCodeModMobileImage: c
            } = l, u = (0, i.$G)(), m = () => {
                (0, n.TE)(a)
            };
            return (0, t.jsx)("div", {
                className: "".concat(d().root, " container"),
                children: (0, t.jsx)("div", {
                    className: "default-grid",
                    children: (0, t.jsx)("div", {
                        className: "col-span-full lg:col-span-9 lg:col-start-4",
                        children: (0, t.jsxs)("button", {
                            type: "button",
                            onClick: () => m(),
                            children: [(0, t.jsx)(o.Z, {
                                className: d().codeImage,
                                desktopImage: r,
                                tabletImage: s,
                                mobileImage: c
                            }), (0, t.jsx)("p", {className: d().copyText, children: u("Copy Code")})]
                        })
                    })
                })
            })
        };
        l.default = c
    }, 71835: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return p
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(94184), i = a.n(n), r = a(22359), d = a(46182), s = a(99589), c = a(24002),
            u = a(39579), m = a(37508), _ = a.n(m);
        let p = "ParagraphColumnTextModule", h = e => {
            let {paragraph: l} = e, {
                    fieldColumnTextMEyebrow: a,
                    fieldColumnTextBBackground: n,
                    fieldColumnTextMSections: m
                } = l, p = (0, d.Z)(), h = (0, d.Z)("lg", !1), g = (null == m ? void 0 : m.length) > 1,
                f = (e, l, a, n) => {
                    var d, s;
                    return (0, t.jsxs)("div", {
                        className: i()(_().card, n && _().inSlide),
                        children: [e && (0, t.jsx)("div", {
                            className: _().cardSubHeadline,
                            children: (0, o.Qc)(e)
                        }), (null == l ? void 0 : l.value) && (0, t.jsx)("div", {
                            className: i()(_().cardCopy, "zscaler-wysiwyg"),
                            children: (0, o.Qc)(l.value)
                        }), (0, t.jsx)("div", {
                            className: _().cardCTAContainer,
                            children: (null == a ? void 0 : null === (d = a.entity) || void 0 === d ? void 0 : null === (s = d.fieldCtaCompLink) || void 0 === s ? void 0 : s.title) && (0, t.jsx)("div", {
                                className: _().cardCTA,
                                children: (0, t.jsx)(r.Z, {cta: a})
                            })
                        })]
                    }, e)
                };
            return (0, t.jsx)("div", {
                className: i()(_().root, n && _().blueBackground), children: (0, t.jsxs)("div", {
                    className: i()(_().mainCard, n && "is-tile"),
                    children: [!h && n && (0, t.jsx)(u.Z, {
                        className: i()(_().bgCloud, "zscaler-cloud"),
                        image: {
                            alt: "",
                            url: "/assets/images/clouds/blueTilePattern.png",
                            width: 261,
                            height: 1229,
                            title: ""
                        }
                    }), (0, t.jsx)("div", {
                        className: "default-grid", children: (0, t.jsxs)("div", {
                            className: i()(_().contentContainer, (null == m ? void 0 : m.length) === 2 && _().twoSections, (null == m ? void 0 : m.length) === 3 && _().threeSections),
                            children: [a && (0, t.jsx)("div", {className: _().eyebrow, children: a}), m && m.map(e => {
                                let {
                                    entity: {
                                        fieldColumnTextSHeadline: l,
                                        fieldColumnTextSSubHeadline: a,
                                        fieldColumnTextSShowLine: n,
                                        fieldColumnTextSCards: r
                                    }
                                } = e;
                                return (0, t.jsxs)("div", {
                                    className: _().section,
                                    children: [l && (0, t.jsx)("h2", {
                                        className: i()(_().sectionHeadline, n && _().showLine),
                                        children: (0, o.Qc)(l)
                                    }), a && (0, t.jsx)("div", {
                                        className: i()(_().sectionSubHeadline),
                                        children: (0, o.Qc)(a, !0)
                                    }), (0, t.jsx)("div", {
                                        className: i()(_().cardsContainer, 4 === r.length && _().fourCards, !l && _().cardContainerPadding, !g && 4 !== r.length && _().noSwipers),
                                        children: h && (g || 4 === r.length) ? (0, t.jsx)(s.Z, {
                                            slidesPerView: p ? 1.19 : 2,
                                            spaceBetween: 30,
                                            children: r.map(e => {
                                                let {
                                                    entity: {
                                                        fieldColumnTextCCopy: l,
                                                        fieldColumnTextCSubHeadline: a,
                                                        fieldColumntTextCCta: o
                                                    }
                                                } = e;
                                                return (0, t.jsx)(c.o, {children: f(a, l, o, !0)}, l + a)
                                            })
                                        }) : (0, t.jsx)(t.Fragment, {
                                            children: r.map(e => {
                                                let {
                                                    entity: {
                                                        fieldColumnTextCCopy: l,
                                                        fieldColumnTextCSubHeadline: a,
                                                        fieldColumntTextCCta: t
                                                    }
                                                } = e;
                                                return f(a, l, t, !1)
                                            })
                                        })
                                    })]
                                }, l)
                            })]
                        })
                    })]
                })
            })
        };
        l.default = h
    }, 94564: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return m
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(94184), i = a.n(n), r = a(22359), d = a(39579), s = a(46182), c = a(23973), u = a.n(c);
        let m = "ParagraphColumnsIconsModule", _ = e => {
            var l, a, n, c, m;
            let {paragraph: _} = e, {
                fieldColumnsIModEyebrow: p,
                fieldColumnsIModHeadline: h,
                fieldColumnsIModSubHeadline: g,
                fieldColumnsIModTopCta: f,
                fieldColumnIModColumnCount: v,
                fieldColumnsIModCards: C,
                fieldColumnsIModBottomCta: x,
                fieldColumnsIModCentered: b,
                fieldGenericBlueBackground: y
            } = _, A = (0, s.Z)();
            return (0, t.jsx)("div", {
                className: i()(u().root, "2" === v && u().twoColumns, "3" === v && u().threeColumns, "4" === v && u().fourColumns, "container"),
                children: (0, t.jsx)("div", {
                    className: i()(y && "is-tile is-blue-tile", "default-grid"), children: (0, t.jsxs)("div", {
                        className: "".concat(u().contentContainer, " ").concat(b && u().contentContainerCentered),
                        children: [p && (0, t.jsx)("div", {
                            className: u().eyebrow,
                            children: p
                        }), h && (0, t.jsx)("h2", {
                            className: u().headline,
                            children: (0, o.Qc)(h)
                        }), g && (0, t.jsx)("h3", {
                            className: u().subHeadline,
                            children: (0, o.Qc)(g)
                        }), (null == f ? void 0 : null === (l = f.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : null === (n = a.url) || void 0 === n ? void 0 : n.path) && (0, t.jsx)("div", {
                            className: u().topCTAContainer,
                            children: (0, t.jsx)(r.Z, {cta: f})
                        }), (null == C ? void 0 : C.length) > 0 && (0, t.jsx)("div", {
                            className: i()(u().cardsContainer),
                            children: C.map(e => {
                                var l, a, o;
                                let {
                                    entity: {
                                        fieldColumnsICardHeadline: n,
                                        fieldColumnsICardIcon: i,
                                        fieldColumnsICardSubheadline: s,
                                        fieldColumnsICardCta: c
                                    }
                                } = e;
                                return (0, t.jsxs)("div", {
                                    className: u().card,
                                    children: [(0, t.jsx)("div", {
                                        className: u().iconContainer,
                                        children: (null == i ? void 0 : i.url) && (0, t.jsx)(d.Z, {
                                            draggable: !1,
                                            image: i
                                        })
                                    }), n && (0, t.jsx)("div", {
                                        className: u().cardHeadline,
                                        children: n
                                    }), s && (0, t.jsx)("div", {
                                        className: u().cardSubHeadline,
                                        children: s
                                    }), (null == c ? void 0 : null === (l = c.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : null === (o = a.url) || void 0 === o ? void 0 : o.path) && (0, t.jsx)("div", {
                                        className: u().cardCTA,
                                        children: (0, t.jsx)(r.Z, {type: "link", cta: c})
                                    })]
                                }, n)
                            })
                        }), (null == x ? void 0 : null === (c = x.entity) || void 0 === c ? void 0 : null === (m = c.fieldCtaCompLink) || void 0 === m ? void 0 : m.title) && (0, t.jsx)("div", {
                            className: i()(u().bottomCTAContainer, A && u().large),
                            children: (0, t.jsx)(r.Z, {cta: x, type: "btn-primary"})
                        })]
                    })
                })
            })
        };
        l.default = _
    }, 95289: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            default: function () {
                return j
            }, typename: function () {
                return y
            }
        });
        var t, o, n, i = a(85893), r = a(67294), d = a(94184), s = a.n(d), c = a(30653), u = a(46182), m = a(22359);

        function _() {
            return (_ = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var p = function (e) {
            return r.createElement("svg", _({
                width: 14,
                height: 14,
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = r.createElement("path", {
                d: "M12.897 13.092L1.469 1.664M1.469 13.092L12.897 1.664",
                stroke: "#CD4035",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })))
        };

        function h() {
            return (h = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var g = function (e) {
            return r.createElement("svg", h({
                width: 17,
                height: 14,
                viewBox: "0 0 17 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), o || (o = r.createElement("path", {
                d: "M.996 9.565l3.317 3.317a.27.27 0 00.382 0L15.932 1.645",
                stroke: "#3DA592",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })))
        };

        function f() {
            return (f = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var v = function (e) {
            return r.createElement("svg", f({
                width: 17,
                height: 16,
                viewBox: "0 0 17 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), n || (n = r.createElement("path", {
                d: "M14.441 1.65l-1.3-1.08-11.24 13.92 1.3 1.08 11.24-13.92zm-9.68 7.82v-8.4h-1.6l-3.1 3.02 1.34 1.4 1.44-1.38v5.36h1.92zm11.54 5.6v-1.94h-2.6l1.52-1.4c.6-.58 1.08-1.32 1.08-2.36 0-1.62-1.14-2.7-2.9-2.7-1.8 0-2.68 1.12-3.06 1.78l1.42 1.16c.28-.44.8-1 1.58-1 .6 0 1 .34 1 .88 0 .46-.3.8-.68 1.14l-3.1 2.92v1.52h5.74z",
                fill: "#FFC328"
            })))
        }, C = a(39579), x = a(41603), b = a.n(x);
        let y = "ParagraphComparisonModule", A = e => {
            let {paragraph: l} = e, {
                fieldCompModHeadline: a,
                fieldCompModTitle1: t,
                fieldCompModCol2TitleGreen: o,
                fieldCompModTitle2: n,
                fieldCompModCol3TitleGreen: d,
                fieldCompModRows: _,
                fieldCompModCta: h,
                fieldCompModHasAccordion: f,
                fieldCompModTableTitle: x
            } = l, [y, A] = (0, r.useState)(!1), j = e => (0, i.jsxs)("div", {
                className: b().iconContainer,
                children: ["x" === e && (0, i.jsx)(p, {}), "half" === e && (0, i.jsx)(v, {}), "checkmark" === e && (0, i.jsx)(g, {})]
            }), N = (0, u.Z)(), w = (0, u.Z)("lg", !1), I = !f;
            return (0, i.jsx)("div", {
                className: s()(b().root, f && b().hasAccordion, N && b().isMobile, w && b().isTablet),
                children: (0, i.jsxs)("div", {
                    className: s()(b().card, "is-tile"),
                    children: [!w && (0, i.jsx)(C.Z, {
                        className: s()(b().cloud, "zscaler-cloud"),
                        image: {
                            url: "/assets/images/clouds/greenTilePattern.png",
                            alt: "",
                            width: 302,
                            height: 1120,
                            title: ""
                        }
                    }), (0, i.jsxs)("div", {
                        className: b().contentContainer,
                        children: [a && (0, i.jsx)("h2", {
                            className: b().headline,
                            children: a
                        }), N && !f ? (0, i.jsxs)("div", {
                            className: b().mobileComparisonContainer,
                            children: [(0, i.jsxs)("div", {
                                className: b().mobileTable,
                                children: [(0, i.jsxs)("div", {
                                    className: b().mobileComparisonHeader,
                                    children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {
                                        className: s()(b().rowTitle, o && b().green),
                                        children: t
                                    })]
                                }), null == _ ? void 0 : _.map(e => {
                                    let {
                                        entity: {
                                            fieldCompModRowCol1Copy: l,
                                            fieldCompModRowCol2Copy: a,
                                            fieldCompModRowCol2Icon: t
                                        }
                                    } = e;
                                    return (0, i.jsxs)("div", {
                                        className: b().mobileRow,
                                        children: [(0, i.jsx)("div", {
                                            className: b().col1,
                                            children: l
                                        }), (0, i.jsxs)("div", {className: b().col2, children: [j(t), a]})]
                                    }, l)
                                })]
                            }), (0, i.jsxs)("div", {
                                className: b().mobileTable,
                                children: [(0, i.jsxs)("div", {
                                    className: b().mobileComparisonHeader,
                                    children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {
                                        className: s()(b().rowTitle, d && b().green),
                                        children: n
                                    })]
                                }), null == _ ? void 0 : _.map(e => {
                                    let {
                                        entity: {
                                            fieldCompModRowCol1Copy: l,
                                            fieldCompModRowCol3Copy: a,
                                            fieldCompModRowCol3Icon: t
                                        }
                                    } = e;
                                    return (0, i.jsxs)("div", {
                                        className: b().mobileRow,
                                        children: [(0, i.jsx)("div", {
                                            className: b().col1,
                                            children: l
                                        }), (0, i.jsxs)("div", {className: b().col2, children: [j(t), a]})]
                                    }, l)
                                })]
                            })]
                        }) : (0, i.jsxs)("div", {
                            className: "".concat(b().desktopComparisonContainer, " ").concat(f && b().desktopComparisonContainerAccordion, " ").concat(y && b().visible),
                            children: [x && f && (0, i.jsxs)("button", {
                                type: "button",
                                className: "".concat(b().desktopComparisonTitle, " ").concat(y && b().desktopComparisonTitleOpen),
                                onClick: () => A(!y),
                                children: [(0, i.jsx)("span", {children: (0, c.ZP)(x)}), (0, i.jsx)(C.Z, {
                                    image: {
                                        url: "/assets/images/chevron_down_black.svg",
                                        alt: "chevron",
                                        width: 9,
                                        height: 5,
                                        title: ""
                                    }
                                })]
                            }), (0, i.jsxs)("div", {
                                className: b().desktopComparisonHeader,
                                children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {
                                    className: s()(b().rowTitle, o && b().green),
                                    children: t
                                }), (0, i.jsx)("div", {className: s()(b().rowTitle, d && b().green), children: n})]
                            }), null == _ ? void 0 : _.map(e => {
                                let {
                                    entity: {
                                        fieldCompModRowCol1Copy: l,
                                        fieldCompModRowCol2Copy: a,
                                        fieldCompModRowCol2Icon: t,
                                        fieldCompModRowCol3Copy: o,
                                        fieldCompModRowCol3Icon: n
                                    }
                                } = e;
                                return (0, i.jsxs)("div", {
                                    className: b().desktopRow,
                                    children: [(0, i.jsx)("div", {
                                        className: b().col1,
                                        children: l
                                    }), (0, i.jsxs)("div", {
                                        className: b().col2,
                                        children: [j(t), I && a]
                                    }), (0, i.jsxs)("div", {className: b().col3, children: [j(n), I && o]})]
                                }, l)
                            })]
                        }), h && (0, i.jsx)("div", {
                            className: b().ctaContainer,
                            children: (0, i.jsx)(m.Z, {cta: h, type: "btn-primary"})
                        })]
                    })]
                })
            })
        };
        var j = A
    }, 73206: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            default: function () {
                return A
            }, typename: function () {
                return b
            }
        });
        var t, o, n = a(85893), i = a(67294), r = a(30653), d = a(94184), s = a.n(d), c = a(39579), u = a(46182),
            m = a(1636), _ = a(44908), p = a.n(_), h = a(22359), g = a(88451);

        function f() {
            return (f = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var v = function (e) {
            return i.createElement("svg", f({
                width: 34,
                height: 34,
                viewBox: "0 0 34 34",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = i.createElement("circle", {
                cx: 13.41,
                cy: 13.885,
                r: 8.236,
                transform: "rotate(45 13.41 13.885)",
                stroke: "#ADADAD",
                strokeWidth: 1.921
            })), o || (o = i.createElement("path", {
                stroke: "#ADADAD",
                strokeWidth: 2.881,
                d: "M19.144 19.485l7.575 7.576"
            })))
        }, C = a(30587), x = a.n(C);
        let b = "ParagraphComplianceAchievementModule", y = e => {
            let {paragraph: l} = e, {
                fieldComplianceModEyebrow: a,
                fieldComplianceModSections: t,
                fieldComplianceModHasSearch: o,
                fieldComplianceModSearchText: d
            } = l, [_, f] = (0, i.useState)([]), {
                complianceAchievementSearchKeyword: C,
                setComplianceAchievementSearchKeyword: b
            } = (0, i.useContext)(m.s), y = e => {
                b(e.target.value)
            }, A = (0, u.Z)(), j = (e, l) => {
                let a = 1e5 * e + l, t = [..._];
                f(t = t.filter(e => e !== a))
            }, N = (e, l) => {
                let a = 1e5 * e + l;
                if (_.indexOf(a) > -1) j(e, l); else {
                    let t = [..._, a];
                    f(t = p()(t))
                }
            }, w = (0, u.Z)("lg", !1);
            return (0, n.jsx)("div", {
                className: "".concat(x().root), children: (0, n.jsxs)("div", {
                    className: "container",
                    children: [a && (0, n.jsx)("div", {
                        className: "default-grid",
                        children: (0, n.jsx)("div", {className: x().eyebrowContainer, children: a})
                    }), t.map((e, l) => {
                        let {
                            entity: {
                                fieldComplianceSecHeadline: a,
                                fieldComplianceSecCopy: t,
                                fieldComplianceSecSubheadline: i,
                                fieldComplianceSecSubcopy: u,
                                fieldComplianceSecLinkCta: m,
                                fieldComplianceSecIsBlue: p,
                                fieldComplianceSecCards: f
                            }
                        } = e, b = f;
                        return p || (b = f.filter(e => e.entity.fieldComplianceCardTitle.toLowerCase().indexOf(C.toLowerCase()) > -1)), (0, n.jsx)("div", {
                            children: (0, n.jsxs)("div", {
                                className: s()(x().contentGridWrapper, p && x().isBlue, "relative", p && "is-tile is-blue-tile"),
                                children: [p && !w && (0, n.jsx)("div", {
                                    className: x().bluePattern,
                                    children: (0, n.jsx)(c.Z, {
                                        image: {
                                            alt: "",
                                            url: "/assets/images/clouds/complianceAchievementCloud.png",
                                            width: 308,
                                            height: 839,
                                            title: ""
                                        }
                                    })
                                }), (0, n.jsx)("div", {
                                    className: s()(x().contentWrapper, "default-grid relative"),
                                    children: (0, n.jsxs)("div", {
                                        className: x().contentContainer,
                                        children: [a && (0, n.jsx)("h2", {
                                            className: x().headline,
                                            children: (0, r.ZP)(a)
                                        }), (null == t ? void 0 : t.value) && (0, n.jsx)("div", {
                                            className: x().copy,
                                            children: (0, r.ZP)(t.value)
                                        }), o && 0 === l && (0, n.jsxs)("div", {
                                            className: x().searchInputWrapper,
                                            children: [(0, n.jsx)(v, {}), (0, n.jsx)("input", {
                                                type: "text",
                                                placeholder: d,
                                                value: C,
                                                onChange: e => y(e)
                                            })]
                                        }), i && (0, n.jsx)("div", {
                                            className: x().subheadline,
                                            children: (0, r.ZP)(i)
                                        }), (null == u ? void 0 : u.value) && (0, n.jsx)("div", {
                                            className: x().subcopy,
                                            children: (0, r.ZP)(u.value)
                                        }), m && (0, n.jsx)("div", {
                                            className: x().linkCta,
                                            children: (0, n.jsx)(h.Z, {cta: m})
                                        }), (0, n.jsx)("div", {
                                            className: x().cardList, children: b.map((e, t) => {
                                                let {
                                                    entity: {
                                                        fieldComplianceCardTitle: o,
                                                        fieldComplianceCardCopy: {value: i},
                                                        fieldComplianceCardImage: d,
                                                        fieldComplianceCardColumn: u,
                                                        fieldComplianceCardLinks: m
                                                    }
                                                } = e;
                                                return (0, n.jsx)("div", {
                                                    className: s()(x().cardWrapper, _.indexOf((l + 1) * 1e5 + t) > -1 && x().isOpened, !A && x().isOpened),
                                                    children: (0, n.jsxs)("button", {
                                                        type: "button",
                                                        className: x().card,
                                                        onClick: e => {
                                                            !A || e.target && e.target instanceof HTMLAnchorElement || (e.preventDefault(), N(l + 1, t))
                                                        },
                                                        children: [(0, n.jsx)("div", {
                                                            className: x().cardImage,
                                                            children: d && (0, n.jsx)("div", {
                                                                className: "relative h-full w-full",
                                                                children: (0, n.jsx)(c.Z, {
                                                                    image: d,
                                                                    className: "w-full h-full object-contain"
                                                                })
                                                            })
                                                        }), (0, n.jsxs)("div", {
                                                            className: x().cardHeaderTitle,
                                                            children: [(0, n.jsx)("p", {
                                                                className: x().cardTitle,
                                                                children: o
                                                            }), (0, n.jsx)("div", {
                                                                className: x().cardDesktopLinks,
                                                                children: !A && m && m.filter(e => {
                                                                    var l, a, t;
                                                                    return null == e ? void 0 : null === (l = e.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : null === (t = a.url) || void 0 === t ? void 0 : t.path
                                                                }).length > 0 && (0, n.jsx)("div", {
                                                                    className: x().cardLinksWrapper,
                                                                    children: m.map((e, a) => (0, n.jsx)(h.Z, {
                                                                        className: x().cardDesktopLinksCTA,
                                                                        cta: e
                                                                    }, "".concat(l, "-card-").concat(t, "-link-").concat(a)))
                                                                })
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: s()(x().cardCopy, "zscaler-wysiwyg"),
                                                            children: [(0, r.ZP)(i || ""), !A && u && u.length > 0 && (0, n.jsx)("div", {
                                                                className: "".concat(x().cardColumnsWrapper, " grid grid-cols-").concat(u.length),
                                                                children: u.map((e, a) => (0, n.jsx)("div", {
                                                                    className: x().cardColumn,
                                                                    children: (0, r.ZP)(null == e ? void 0 : e.value)
                                                                }, "".concat(l, "-card-").concat(t, "-column-").concat(a)))
                                                            })]
                                                        }), (0, n.jsxs)("div", {
                                                            className: x().cardContent,
                                                            children: [A && m && m.filter(e => {
                                                                var l, a, t;
                                                                return null == e ? void 0 : null === (l = e.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : null === (t = a.url) || void 0 === t ? void 0 : t.path
                                                            }).length > 0 && (0, n.jsx)("div", {
                                                                className: x().cardLinksWrapper,
                                                                children: m.map((e, a) => (0, n.jsx)(h.Z, {cta: e}, "".concat(l, "-card-").concat(t, "-link-").concat(a)))
                                                            }), A && u && u.length > 0 && (0, n.jsx)("div", {
                                                                className: "".concat(x().cardColumnsWrapper, " grid grid-cols-").concat(u.length),
                                                                children: u.map((e, a) => (0, n.jsx)("div", {
                                                                    className: x().cardColumn,
                                                                    children: (0, r.ZP)(null == e ? void 0 : e.value)
                                                                }, "".concat(l, "-card-").concat(t, "-column-").concat(a)))
                                                            })]
                                                        }), A && (0, n.jsx)(g.Z, {
                                                            className: x().closeIcon,
                                                            onClick: e => {
                                                                e.preventDefault(), e.stopPropagation(), j(l + 1, t)
                                                            }
                                                        })]
                                                    })
                                                }, "".concat(a, "-card-").concat(i))
                                            })
                                        })]
                                    })
                                })]
                            })
                        }, a)
                    })]
                })
            })
        };
        var A = y
    }, 26784: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return h
            }
        });
        var t = a(85893), o = a(67294), n = a(46182), i = a(41287), r = a(39579), d = a(30653), s = a(94184),
            c = a.n(s), u = a(57915), m = a(96323), _ = a(95985), p = a.n(_);
        let h = "ParagraphContactFormModule", g = e => {
            var l, a, s, _;
            let {paragraph: h} = e, {
                    fieldContactFMCardHeadline: g,
                    fieldContactFMCardCopy: f,
                    fieldContactFMForms: v,
                    fieldContactFMHelpHeadline: C,
                    fieldContactFMCopy: x,
                    fieldContactFMImageHeadline: b,
                    fieldContactFMImage: y,
                    fieldContactFMImageTablet: A,
                    fieldContactFMImageMobile: j
                } = h, N = (0, o.useRef)(null),
                w = (0, o.useRef)(null), [I, M] = (0, o.useState)(0), [k, B] = (0, o.useState)(0), [T, S] = (0, o.useState)(0), [P, L] = (0, o.useState)(!0),
                E = v ? v.filter(e => e.entity.fieldContactFFormLink || e.entity.fieldContactFFormId) : [], H = () => {
                    N.current && w.current && (B(N.current.getBoundingClientRect().height), S(w.current.getBoundingClientRect().height))
                }, W = () => {
                    L(!1), setTimeout(() => {
                        H()
                    }, 200)
                }, Q = e => {
                    var l, a, t, o;
                    let n = null === (l = E[I]) || void 0 === l ? void 0 : null === (a = l.entity) || void 0 === a ? void 0 : null === (t = a.fieldContactFSuccessLink) || void 0 === t ? void 0 : null === (o = t.url) || void 0 === o ? void 0 : o.path;
                    return !n || (setTimeout(() => {
                        (0, m.Z)(e, n, window)
                    }, 40), !1)
                }, R = e => {
                    var l, a, t, o;
                    return !!(null === (l = E[e]) || void 0 === l ? void 0 : null === (a = l.entity) || void 0 === a ? void 0 : null === (t = a.fieldContactFFormLink) || void 0 === t ? void 0 : null === (o = t.url) || void 0 === o ? void 0 : o.path)
                }, F = e => {
                    R(e) || L(!0), M(e)
                };
            (0, o.useEffect)(() => (H(), window.addEventListener("resize", H), () => window.removeEventListener("resize", H)), []);
            let Z = (0, n.Z)(), G = (0, n.Z)("lg", !1), O = (0, i.Bb)(y, A, j, G, Z), D = E[I], z = (e, l) => {
                var a, o, n, i, r;
                return (null === (a = e.entity) || void 0 === a ? void 0 : null === (o = a.fieldContactFFormLink) || void 0 === o ? void 0 : null === (n = o.url) || void 0 === n ? void 0 : n.path) ? (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("a", {
                        className: c()(p().Button, I === l && p().active, p().isLink),
                        href: null === (i = null === (r = e.entity) || void 0 === r ? void 0 : r.fieldContactFFormLink.url) || void 0 === i ? void 0 : i.path,
                        target: "_blank",
                        rel: "noreferrer",
                        style: {zIndex: l + 1},
                        children: (0, t.jsx)("button", {
                            type: "button",
                            onClick: () => F(l),
                            style: {zIndex: l + 1},
                            children: (0, t.jsx)("span", {children: e.entity.fieldContactFFormName})
                        }, e.entity.fieldContactFFormName)
                    }, e.entity.fieldContactFFormName)
                }) : (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("button", {
                        className: "".concat(p().Button, " ").concat(I === l && p().active),
                        type: "button",
                        onClick: () => F(l),
                        style: {zIndex: l + 1},
                        children: (0, t.jsx)("span", {children: e.entity.fieldContactFFormName})
                    }, e.entity.fieldContactFFormName)
                })
            }, U = (0, t.jsx)(t.Fragment, {
                children: D && (0, t.jsxs)(t.Fragment, {
                    children: [!P && (0, t.jsxs)("div", {
                        className: p().formTopSection,
                        children: [D.entity.fieldContactFFormHeadline && (0, t.jsx)("div", {
                            className: p().formHeadline,
                            children: D.entity.fieldContactFFormHeadline
                        }), (null === (l = D.entity.fieldContactFFormCopy) || void 0 === l ? void 0 : l.value) && (0, t.jsx)("div", {
                            className: c()(p().formCopy, "zscaler-wysiwyg"),
                            children: (0, d.ZP)(null === (a = D.entity.fieldContactFFormCopy) || void 0 === a ? void 0 : a.value)
                        })]
                    }), !R(I) && (0, t.jsx)(u.Z, {
                        formID: null === (s = D.entity) || void 0 === s ? void 0 : s.fieldContactFFormId,
                        rerender: !0,
                        onRender: W,
                        onSuccess: Q
                    }, null === (_ = D.entity) || void 0 === _ ? void 0 : _.fieldContactFFormId)]
                })
            });
            return t.Fragment, P && (p().loaderAnimationContainer, r.Z), (0, t.jsxs)("div", {
                className: "".concat(p().root, " relative"),
                children: [(0, t.jsx)("div", {
                    className: "md:container",
                    children: (0, t.jsxs)("div", {
                        className: p().UpperCard,
                        ref: w,
                        children: [(0, t.jsxs)("div", {
                            className: "relative z-10 container md:max-w-full md:p-0 md:col-span-5 xl:col-span-6 xl:col-start-2",
                            children: [(0, t.jsx)("h1", {
                                className: p().CardHeadline,
                                children: g
                            }), (0, t.jsx)("p", {className: p().CardCopy, children: f})]
                        }), (0, t.jsx)(r.Z, {
                            image: {
                                url: "/assets/images/clouds/hero_core_blue.png",
                                alt: "dots pattern",
                                width: 1400,
                                height: 1e3,
                                title: ""
                            }, className: p().backgroundPattern
                        })]
                    })
                }), Z ? (0, t.jsx)("div", {
                    className: "container relative z-10",
                    children: (0, t.jsxs)("div", {
                        className: p().FormCard,
                        children: [(0, t.jsx)("div", {
                            className: p().ButtonWrapper,
                            children: !!(null == E ? void 0 : E.length) && E.map((e, l) => z(e, l))
                        }), x && (0, t.jsx)("p", {
                            className: p().Copy,
                            children: (0, d.ZP)(x.replace(/\n/g, "<br>"))
                        }), U]
                    })
                }) : (0, t.jsxs)("div", {
                    className: "container default-grid transition-all ease-out duration-300",
                    style: {minHeight: k - T},
                    children: [(0, t.jsxs)("div", {
                        className: p().LeftCol,
                        children: [(0, t.jsx)("h6", {
                            className: p().Headline,
                            children: C
                        }), (0, t.jsx)("div", {
                            className: p().ButtonWrapper,
                            children: !!(null == E ? void 0 : E.length) && E.map((e, l) => z(e, l))
                        }), x && (0, t.jsx)("p", {className: p().Copy, children: (0, d.ZP)(x.replace(/\n/g, "<br>"))})]
                    }), (0, t.jsx)("div", {className: p().RightCol, ref: N, children: U})]
                }), (0, t.jsx)("div", {
                    className: "container default-grid",
                    children: (0, t.jsxs)("div", {
                        className: p().bottomImageContainer,
                        children: [b && (0, t.jsx)("div", {
                            className: p().imageHeadline,
                            children: b
                        }), O && (0, t.jsx)("div", {
                            className: p().imageContainer,
                            children: (0, t.jsx)(r.Z, {image: O})
                        })]
                    })
                })]
            })
        };
        l.default = g
    }, 33065: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return g
            }
        });
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(46182), d = a(22359), s = a(39579),
            c = a(41287), u = a(81536), m = a(57915), _ = a(96323), p = a(50460), h = a.n(p);
        let g = "ParagraphCtaModule", f = e => {
            let {paragraph: l} = e, {
                fieldCtaModLogos: a,
                fieldCtaModEyebrowTag: n,
                fieldCtaModHeadline: p,
                fieldCtaModSubHeadline: g,
                fieldCtaModCopy: f,
                fieldCtaModCtaLink: v,
                fieldCtaModOpenNewTab: C,
                fieldFieldCtaModPrimaryCta: x,
                fieldCtaModSecondaryCta: b,
                fieldCtaModCentered: y,
                fieldCtaModFormId: A,
                fieldCtaModFormSuccess: j
            } = l, N = v || (0, c.yr)(x), w = N || b, [I, M] = (0, o.useState)("initial"), k = e => {
                var l;
                let a = null == j ? void 0 : null === (l = j.url) || void 0 === l ? void 0 : l.path;
                return a ? setTimeout(() => {
                    (0, _.Z)(e, a, window)
                }, 40) : M("success"), !1
            }, B = (0, r.Z)(), T = (0, u.$G)();
            return (0, t.jsx)("div", {
                className: "tile-container", children: (0, t.jsxs)("div", {
                    className: i()(h().root, "default-grid", !w && h().noCTA),
                    children: [(0, t.jsx)("div", {
                        className: h().bgpattern,
                        children: B ? (0, t.jsx)(s.Z, {
                            image: {
                                url: "/assets/images/cta_bgpattern_mobile.png",
                                alt: "dots pattern",
                                width: 728,
                                height: 330,
                                title: ""
                            }
                        }) : (0, t.jsx)(s.Z, {
                            image: {
                                url: "/assets/images/cta_bgpattern.png",
                                alt: "dots pattern",
                                width: 1182,
                                height: 288,
                                title: ""
                            }
                        })
                    }), (0, t.jsxs)("div", {
                        className: i()(h().content, y && h().centered),
                        children: [n && (0, t.jsx)("p", {
                            className: h().eyebrow,
                            children: n
                        }), a && (0, t.jsx)("div", {
                            className: h().logoWrapper,
                            children: a.map(e => (0, t.jsx)("div", {
                                className: h().logo,
                                children: (0, t.jsx)(s.Z, {image: e})
                            }, e.url))
                        }), p && (0, t.jsx)("h2", {
                            className: h().headline,
                            children: p
                        }), g && (0, t.jsx)("h3", {
                            className: h().subheadline,
                            children: g
                        }), A && (0, t.jsx)("div", {
                            className: h().form,
                            children: "success" === I ? (0, t.jsx)("p", {
                                className: "py-8 text-white font-bold typo-small-paragraph",
                                children: T("Thanks for subscribing")
                            }) : (0, t.jsx)(m.Z, {
                                formID: A,
                                onSuccess: k,
                                variant: "cta_module",
                                subvariant: y ? "centered" : "default"
                            })
                        }), (null == f ? void 0 : f.value) && (0, t.jsx)("div", {
                            className: h().copy,
                            children: (0, c.Qc)(f.value)
                        }), w && (0, t.jsxs)("div", {
                            className: h().ctaWrapper,
                            children: [N && (0, t.jsx)(d.Z, {
                                cta: (0, c.yr)(x) ? x : {
                                    entity: {
                                        fieldCtaCompLink: v,
                                        fieldCtaCompOpenInNewTab: C
                                    }
                                }, type: "btn-primary", btnColor: "light", className: "btn-cta-section"
                            }), b && (0, t.jsx)(d.Z, {cta: b, type: "link", btnColor: "light"})]
                        })]
                    })]
                })
            })
        };
        l.default = f
    }, 98657: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return C
            }
        });
        var t = a(85893), o = a(67294), n = a(88735), i = a(46182), r = a(94184), d = a.n(r), s = a(32552),
            c = a(85187), u = a(53453), m = a(41287), _ = a(10124), p = a(39498), h = a(81536), g = a(2617), f = a.n(g),
            v = a(32250);
        let C = "ParagraphCustomerStoriesFilterModule", x = e => {
            var l, a;
            let {paragraph: r, searchProps: g} = e, {fieldCustStorModHeadline: C} = r,
                x = (0, o.useContext)(u.GlobalContext),
                b = (0, h.$G)(), [y, A] = (0, o.useState)([]), [j, N] = (0, o.useState)([]), [w, I] = (0, o.useState)([]), [M, k] = (0, o.useState)([]), [B, T] = (0, o.useState)([]);
            (0, o.useEffect)(() => {
                var e, l, a, t, o, n, i, r, d, s, c, u, m, _, p;
                if ((null === (e = null == g ? void 0 : g.facets["customer_products.keyword"]) || void 0 === e ? void 0 : e.length) && !y.length) {
                    let h = null === (n = null == g ? void 0 : g.facets["customer_products.keyword"][0]) || void 0 === n ? void 0 : null === (i = n.data) || void 0 === i ? void 0 : i.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l}
                    });
                    A(h)
                }
                if ((null === (l = null == g ? void 0 : g.facets["customer_solutions.keyword"]) || void 0 === l ? void 0 : l.length) && !j.length) {
                    let f = null === (r = null == g ? void 0 : g.facets["customer_solutions.keyword"][0]) || void 0 === r ? void 0 : null === (d = r.data) || void 0 === d ? void 0 : d.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l}
                    });
                    N(f)
                }
                if ((null === (a = null == g ? void 0 : g.facets["industry_vertical.keyword"]) || void 0 === a ? void 0 : a.length) && !w.length) {
                    let v = null === (s = null == g ? void 0 : g.facets["industry_vertical.keyword"][0]) || void 0 === s ? void 0 : null === (c = s.data) || void 0 === c ? void 0 : c.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l}
                    });
                    I(v)
                }
                if ((null === (t = null == g ? void 0 : g.facets["region.keyword"]) || void 0 === t ? void 0 : t.length) && !M.length) {
                    let C = null === (u = null == g ? void 0 : g.facets["region.keyword"][0]) || void 0 === u ? void 0 : null === (m = u.data) || void 0 === m ? void 0 : m.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l}
                    });
                    k(C)
                }
                if ((null === (o = null == g ? void 0 : g.facets["customer_type.keyword"]) || void 0 === o ? void 0 : o.length) && !B.length) {
                    let x = null === (_ = null == g ? void 0 : g.facets["customer_type.keyword"][0]) || void 0 === _ ? void 0 : null === (p = _.data) || void 0 === p ? void 0 : p.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l}
                    });
                    T(x)
                }
            }, [g]);
            let S = [{label: b("Latest"), value: "latest"}, {label: b("Oldest"), value: "oldest"}, {
                    label: b("A-Z"),
                    value: "a-z",
                    format: "uppercase"
                }, {label: b("Z-A"), value: "z-a", format: "uppercase"}], [P, L] = (0, o.useState)(""),
                E = (0, o.useRef)(null), H = (0, i.Z)(), W = (0, i.Z)("lg"), Q = e => {
                    e === P ? L("") : L(e)
                }, R = e => {
                    e === P && L("")
                }, F = {
                    latest: {field: "created", direction: "desc"},
                    oldest: {field: "created", direction: "asc"},
                    "a-z": {field: "title.keyword", direction: "asc"},
                    "z-a": {field: "title.keyword", direction: "desc"}
                }, Z = () => {
                    E.current && E.current.scrollIntoView({behavior: "smooth"})
                }, G = g.searchTerm && "_score" === g.sortList[0].field;
            return (0, t.jsx)("div", {
                ref: E,
                className: d()(f().root, "" !== P && f().openFilter, H && f().isMobile),
                children: (0, t.jsx)("div", {
                    className: "container default-grid", children: (0, t.jsxs)("div", {
                        className: f().mainContainer,
                        children: [(0, t.jsxs)("div", {
                            className: "default-grid",
                            children: [C && (0, t.jsx)("h2", {
                                className: f().headline,
                                children: C
                            }), (0, t.jsx)(c.Z, {
                                value: null == g ? void 0 : g.searchTerm,
                                className: f().searchBar,
                                placeholder: b("Search Customer Stories"),
                                onChange: e => {
                                    var l;
                                    return (0, _.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, g)
                                },
                                onSubmit: e => (0, _.H_)(e, g)
                            })]
                        }), (0, t.jsx)("div", {
                            children: (0, t.jsxs)("div", {
                                className: f().filtersContainer,
                                children: [(0, t.jsx)(n.Z, {
                                    options: y,
                                    buttonLabel: "Products",
                                    onClick: Q,
                                    isOpen: "Products" === P,
                                    onChange: e => (0, _.WB)(e, "customer_products.keyword", g),
                                    className: "col-span-1 lg:col-span-2",
                                    onClickOutside: R,
                                    showFilter: !0
                                }), (0, t.jsx)(n.Z, {
                                    options: j,
                                    buttonLabel: "Solutions",
                                    onClick: Q,
                                    isOpen: "Solutions" === P,
                                    onChange: e => (0, _.WB)(e, "customer_solutions.keyword", g),
                                    className: "col-span-1 lg:col-span-2",
                                    onClickOutside: R,
                                    showFilter: !0
                                }), (0, t.jsx)(n.Z, {
                                    options: w,
                                    buttonLabel: "Industry",
                                    onClick: Q,
                                    isOpen: "Industry" === P,
                                    onChange: e => (0, _.WB)(e, "industry_vertical.keyword", g),
                                    className: "col-span-1 lg:col-span-2",
                                    onClickOutside: R,
                                    showFilter: !0
                                }), (0, t.jsx)(n.Z, {
                                    options: M,
                                    buttonLabel: "Region",
                                    onClick: Q,
                                    isOpen: "Region" === P,
                                    onChange: e => (0, _.WB)(e, "region.keyword", g),
                                    className: "col-span-1 lg:col-span-2",
                                    onClickOutside: R,
                                    variant: W ? "none" : "select",
                                    showFilter: !0
                                }), (0, t.jsx)(n.Z, {
                                    options: B,
                                    buttonLabel: "Type",
                                    onClick: Q,
                                    isOpen: "Type" === P,
                                    onChange: e => (0, _.WB)(e, "customer_type.keyword", g),
                                    className: "col-span-1 lg:col-span-2",
                                    onClickOutside: R,
                                    variant: W ? "none" : "select",
                                    showFilter: !0
                                }), (0, t.jsx)(n.Z, {
                                    options: S,
                                    reset: G,
                                    buttonLabel: "Sort",
                                    onClick: Q,
                                    isOpen: "Sort" === P,
                                    onChange: e => (0, _.cB)(e, F, g),
                                    className: "col-span-1 lg:col-span-2 lg:col-start-11",
                                    onClickOutside: R,
                                    variant: W ? "none" : "select",
                                    showFilter: !0,
                                    singleChoice: !0,
                                    sortLabels: !1
                                })]
                            })
                        }), H && (0, t.jsx)("hr", {className: "text-lightGrey-20 -mx-20"}), (null == g ? void 0 : g.error) && (0, t.jsxs)("div", {
                            className: "my-20 font-medium text-darkRed-100",
                            children: ["Error: ", null == g ? void 0 : g.error]
                        }), !(null == g ? void 0 : null === (l = g.results) || void 0 === l ? void 0 : l.length) && (0, t.jsx)("div", {
                            className: "mt-20 md:mt-0 mb-20 col-span-full",
                            children: (0, t.jsx)(v.default, {paragraph: (0, m.jV)(x)})
                        }), (0, t.jsx)("div", {
                            className: f().cardsContainer,
                            children: !!(null == g ? void 0 : null === (a = g.results) || void 0 === a ? void 0 : a.length) && g.results.map(e => {
                                var l;
                                return (0, t.jsx)(s.Z, {
                                    className: "col-span-full md:col-span-4 lg:col-span-4 mb-20",
                                    post: e
                                }, (null == e ? void 0 : null === (l = e._meta) || void 0 === l ? void 0 : l.id) || JSON.stringify(e))
                            })
                        }), (0, t.jsx)("div", {
                            onClick: e => {
                                let l = e.target, a = l.tagName.toLowerCase();
                                ["li", "a"].includes(a) && Z()
                            },
                            children: (0, t.jsx)(p.Z, {className: "mb-20 -ml-12 md:ml-0 md:mb-44 md:mt-24 lg:mb-88 lg:mt-68"})
                        })]
                    })
                })
            })
        };
        l.default = (0, _.ZP)(x, {
            alwaysSearchOnInitialLoad: !0,
            searchQuery: {
                result_fields: {
                    content_type: {raw: {}},
                    title: {raw: {}},
                    created: {raw: {}},
                    products: {raw: {}},
                    zc_code_has_translation: {raw: {}},
                    url: {raw: {}},
                    additional_content: {raw: {}},
                    customer_highlights: {raw: {}},
                    background_image: {raw: {}},
                    logo_image: {raw: {}},
                    has_details: {raw: {}}
                },
                search_fields: {title: {weight: 13}},
                filters: [{field: "content_type", values: ["customer"], type: "all"}, {
                    field: "has_details",
                    values: ["true"],
                    type: "all"
                }],
                facets: {
                    "customer_products.keyword": {type: "value", sort: "count", size: 60},
                    "customer_solutions.keyword": {type: "value", sort: "count", size: 60},
                    "industry_vertical.keyword": {type: "value", sort: "count", size: 60},
                    "region.keyword": {type: "value", sort: "count", size: 60},
                    "customer_type.keyword": {type: "value", sort: "count", size: 60}
                },
                resultsPerPage: 6,
                sortDirection: "desc",
                sortField: "created",
                sortList: [{field: "created", direction: "desc"}]
            },
            initialState: {resultsPerPage: 6, sortList: [{field: "created", direction: "desc"}]}
        })
    }, 13177: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return d
            }
        });
        var t = a(85893), o = a(67294), n = a(39579), i = a(83543), r = a.n(i);
        let d = "ParagraphCustomersCarouselModule", s = e => {
            var l, a;
            let {paragraph: i} = e,
                d = null === (l = i.extraData[0]) || void 0 === l ? void 0 : null === (a = l.data) || void 0 === a ? void 0 : a.nodeQuery.entities.filter(e => !e.fieldHasDetails), [s, c] = (0, o.useState)(8),
                u = 5 * d.length, m = {"--total-length": "".concat(190 * d.length, "px")};
            return (0, o.useEffect)(() => {
                setTimeout(() => {
                    c(s + 1)
                }, 5)
            }, [s]), (0, t.jsx)("div", {
                className: "".concat(r().root, " container"),
                style: m,
                children: (0, t.jsx)("div", {
                    className: r().tile,
                    children: d.map((e, l) => (0, t.jsx)("div", {
                        className: r().logo,
                        style: {
                            animationDuration: "".concat(u, "s"),
                            animationDelay: "-".concat(l * u / d.length, "s")
                        },
                        children: (0, t.jsx)("div", {
                            className: r().imageContainer,
                            children: (0, t.jsx)(n.Z, {image: e.fieldLogo, loading: l < s ? "eager" : "lazy"})
                        })
                    }, JSON.stringify(e)))
                })
            })
        };
        l.default = s
    }, 60674: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return m
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(57915), r = a(30653), d = a(39579), s = a(96323), c = a(87161), u = a.n(c);
        let m = "ParagraphDemoFormModule", _ = e => {
            let {paragraph: l} = e, {
                fieldDemoFormHeadline: a,
                fieldDemoFormSubHeadline: o,
                fieldDemoFormMarketoFormId: c,
                fieldDemoFormSuccessLink: m,
                fieldDemoFormFullWidth: _
            } = l, p = e => {
                var l;
                let a = null == m ? void 0 : null === (l = m.url) || void 0 === l ? void 0 : l.path;
                return !a || (setTimeout(() => {
                    (0, s.Z)(e, a, window)
                }, 40), !1)
            };
            return (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)("div", {
                    className: n()(u().root, "md:container", !_ && u().variantLeftAligned),
                    children: (0, t.jsxs)("div", {
                        className: u().Wrapper,
                        children: [(0, t.jsx)(d.Z, {
                            className: u().backgroundPattern,
                            image: {
                                url: "/assets/images/clouds/demoFormModule.png",
                                alt: "dots pattern",
                                width: 1401,
                                height: 292,
                                title: ""
                            }
                        }), (0, t.jsxs)("div", {
                            className: u().LeftWrapper,
                            children: [(0, t.jsx)("h2", {
                                className: u().Headline,
                                children: a
                            }), o && (0, t.jsx)("p", {className: u().Copy, children: (0, r.ZP)(o)})]
                        }), (0, t.jsx)("div", {
                            className: "".concat(u().RightWrapper, " ").concat(u().Card),
                            children: (0, t.jsx)(i.Z, {formID: c, onSuccess: p})
                        })]
                    })
                })
            })
        };
        l.default = _
    }, 38135: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return y
            }
        });
        var t = a(85893), o = a(67294), n = a(9008), i = a.n(n), r = a(94184), d = a.n(r), s = a(88735), c = a(32552),
            u = a(46182), m = a(81536), _ = a(85187), p = a(10124), h = a(53453), g = a(41287), f = a(39498),
            v = a(66517), C = a(83175), x = a.n(C), b = a(32250);
        let y = "ParagraphEventsFilter", A = e => {
            var l, a, n;
            let {paragraph: r, searchProps: C} = e, {fieldEventsFilterHeadline: y} = r,
                A = (0, o.useContext)(h.GlobalContext);
            (0, m.$G)();
            let [j, N] = (0, o.useState)([]), [w, I] = (0, o.useState)([]), M = (0, o.useRef)(null), k = {
                typeLabel: "Type",
                locationLabel: "Location",
                segmentLabel: "Segment",
                solutionsLabel: "Solution",
                jobRoleLabel: "Job Role",
                showFilters: !0
            };
            (0, o.useEffect)(() => {
                var e, l, a, t, o, n;
                if ((null === (e = null == C ? void 0 : C.facets["event_location.keyword"]) || void 0 === e ? void 0 : e.length) && !j.length) {
                    let i = null === (a = null == C ? void 0 : C.facets["event_location.keyword"][0]) || void 0 === a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l}
                    });
                    N(i)
                }
                if ((null === (l = null == C ? void 0 : C.facets["segments.keyword"]) || void 0 === l ? void 0 : l.length) && !w.length) {
                    let r = null === (o = null == C ? void 0 : C.facets["segments.keyword"][0]) || void 0 === o ? void 0 : null === (n = o.data) || void 0 === n ? void 0 : n.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l}
                    });
                    I(r)
                }
            }, [C]);
            let [B, T] = (0, o.useState)(""), S = e => {
                e === B ? T("") : T(e)
            }, P = e => {
                e === B && T("")
            }, L = () => {
                M.current && M.current.scrollIntoView({behavior: "smooth"})
            }, E = (0, u.Z)();
            return (0, t.jsxs)("div", {
                ref: M,
                className: d()(x().root, E && x().isMobile, "" !== B && x().openFilter),
                children: [(0, t.jsx)(i(), {
                    children: !!(null == C ? void 0 : null === (l = C.results) || void 0 === l ? void 0 : l.length) && (0, t.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {__html: JSON.stringify((0, v.Be)(C.results))}
                    })
                }), (0, t.jsxs)("div", {
                    className: "container default-grid",
                    children: [y && (0, t.jsx)("h2", {
                        className: x().headline,
                        children: y.value
                    }), (0, t.jsx)(_.Z, {
                        className: "col-span-full md:col-span-6 md:col-start-4 mb-24 md:mb-36 lg:px-60 h-32 md:h-28 lg:h-40",
                        placeholder: "Search Events",
                        onChange: e => {
                            var l;
                            return (0, p.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, C)
                        },
                        onSubmit: e => (0, p.H_)(e, C)
                    })]
                }), (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: x().filtersContainer,
                        children: [(0, t.jsx)(s.Z, {
                            options: j,
                            buttonLabel: "Location",
                            onClick: S,
                            isOpen: B === k.locationLabel,
                            onChange: e => (0, p.WB)(e, "event_location.keyword", C),
                            showFilter: k.showFilters,
                            className: x().filter,
                            onClickOutside: P,
                            variant: "select"
                        }), (0, t.jsx)(s.Z, {
                            options: w,
                            buttonLabel: "Segment",
                            onClick: S,
                            isOpen: B === k.segmentLabel,
                            onChange: e => (0, p.WB)(e, "segments.keyword", C),
                            showFilter: k.showFilters,
                            className: x().filter,
                            onClickOutside: P,
                            variant: "select"
                        })]
                    })
                }), (null == C ? void 0 : C.error) && (0, t.jsxs)("div", {
                    className: "container my-20 font-medium text-darkRed-100",
                    children: ["Error: ", null == C ? void 0 : C.error]
                }), !(null == C ? void 0 : null === (a = C.results) || void 0 === a ? void 0 : a.length) && (0, t.jsx)("div", {
                    className: "mb-20 container",
                    children: (0, t.jsx)(b.default, {paragraph: (0, g.jV)(A)})
                }), (0, t.jsx)("div", {
                    className: d()(x().cardsContainer, "container default-grid pt-20 md:pt-0"),
                    children: !!(null == C ? void 0 : null === (n = C.results) || void 0 === n ? void 0 : n.length) && C.results.map(e => {
                        var l;
                        return (0, t.jsx)(c.Z, {
                            className: "col-span-full md:col-span-6 lg:col-span-3 mb-20",
                            post: e
                        }, (null == e ? void 0 : null === (l = e._meta) || void 0 === l ? void 0 : l.id) || JSON.stringify(e))
                    })
                }), (0, t.jsx)("div", {
                    className: "container", onClick: e => {
                        let l = e.target, a = l.tagName.toLowerCase();
                        ["li", "a"].includes(a) && L()
                    }, children: (0, t.jsx)(f.Z, {className: "mb-20 md:mb-44 md:mt-24 lg:mb-88 lg:mt-68"})
                })]
            })
        };
        l.default = (0, p.ZP)(A, {
            alwaysSearchOnInitialLoad: !0,
            searchQuery: {
                result_fields: {
                    content_type: {raw: {}},
                    cover_image: {raw: {}},
                    title: {raw: {}},
                    event_startdate: {raw: {}},
                    event_location: {raw: {}},
                    segments: {raw: {}},
                    region: {raw: {}},
                    url: {raw: {}}
                },
                search_fields: {title: {weight: 13}},
                filters: [{field: "content_type", values: ["event"], type: "all"}, {
                    field: "event_startdate",
                    values: [{from: new Date().getTime(), name: "event_startdate", to: Number.MAX_SAFE_INTEGER}],
                    type: "all"
                }, {field: "featured", values: ["true"], type: "none"}],
                facets: {
                    "event_location.keyword": {type: "value", sort: "count", size: 60},
                    "event_type.keyword": {type: "value", sort: "count", size: 60},
                    "segments.keyword": {type: "value", sort: "count", size: 60}
                },
                resultsPerPage: 8,
                sortDirection: "desc",
                sortField: "created",
                sortList: [{field: "created", direction: "desc"}]
            },
            initialState: {resultsPerPage: 8, sortList: [{field: "event_startdate", direction: "asc"}]}
        })
    }, 10520: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(9008), n = a.n(o), i = a(32552), r = a(10124), d = a(66517), s = a(39498), c = a(70478), u = a.n(c),
            m = a(32250);
        let _ = "ParagraphFeaturedEventsModule", p = e => {
            var l, a, o;
            let {paragraph: r, searchProps: c} = e, {fieldFeaturedEventsHeadline: _, fieldFeaturedEventsEmpty: p} = r;
            return (0, t.jsxs)("div", {
                className: "".concat(u().root),
                children: [(0, t.jsx)(n(), {
                    children: !!(null == c ? void 0 : null === (l = c.results) || void 0 === l ? void 0 : l.length) && (0, t.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {__html: JSON.stringify((0, d.Be)(c.results))}
                    })
                }), (0, t.jsxs)("div", {
                    className: "container",
                    children: [_ && (0, t.jsx)("h2", {
                        className: u().headline,
                        children: _.value
                    }), (null == c ? void 0 : c.error) && (0, t.jsxs)("div", {
                        className: "container my-20 font-medium text-darkRed-100",
                        children: ["Error: ", null == c ? void 0 : c.error]
                    }), !(null == c ? void 0 : null === (a = c.results) || void 0 === a ? void 0 : a.length) && (null == p ? void 0 : p.entity) && (0, t.jsx)(m.default, {paragraph: p.entity}), (0, t.jsx)("div", {
                        className: "lg:default-grid",
                        children: (0, t.jsx)("div", {
                            className: "default-grid lg:gap-x-28 lg:col-span-10 lg:col-start-2",
                            children: !!(null == c ? void 0 : null === (o = c.results) || void 0 === o ? void 0 : o.length) && c.results.map(e => {
                                var l;
                                return (0, t.jsx)(i.Z, {
                                    className: u().featuredEventCard,
                                    post: e,
                                    variant: "featured-event"
                                }, (null == e ? void 0 : null === (l = e._meta) || void 0 === l ? void 0 : l.id) || JSON.stringify(e))
                            })
                        })
                    })]
                }), (null == c ? void 0 : c.totalPages) > 1 && (0, t.jsx)(s.Z, {className: "mb-20 md:mb-44 md:mt-24 lg:mb-88 lg:mt-68"})]
            })
        };
        l.default = (0, r.ZP)(p, {
            alwaysSearchOnInitialLoad: !0,
            searchQuery: {
                result_fields: {
                    content_type: {raw: {}},
                    cover_image: {raw: {}},
                    title: {raw: {}},
                    event_startdate: {raw: {}},
                    event_location: {raw: {}},
                    region: {raw: {}},
                    url: {raw: {}}
                },
                search_fields: {title: {weight: 13}},
                filters: [{field: "content_type", values: ["event"], type: "all"}, {
                    field: "featured",
                    values: ["true"],
                    type: "all"
                }],
                resultsPerPage: 3,
                sortDirection: "desc",
                sortField: "event_startdate",
                sortList: [{field: "event_startdate", direction: "desc"}]
            },
            initialState: {resultsPerPage: 3, sortList: [{field: "event_startdate", direction: "asc"}]}
        })
    }, 33774: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(22359), n = a(39579), i = a(20346), r = a(99386), d = a(41287), s = a(94184), c = a.n(s),
            u = a(50963), m = a.n(u);
        let _ = "ParagraphGenericCardModule", p = e => {
            let {paragraph: l} = e, {
                fieldGenericCardHeadline: a,
                fieldGenericCParagraphWidth: s,
                fieldGenericCFullCardLinks: u,
                fieldGenericCardCards: _
            } = l, p = s ? s.replace(" ", "_") : "Narrow", h = (0, t.jsx)("div", {
                className: "".concat(m().root, " container"), children: (0, t.jsxs)("div", {
                    className: "default-grid",
                    children: [a && (0, t.jsx)("p", {
                        className: m()["eyebrow__".concat(p)],
                        children: a.value
                    }), _ && _.map((e, l) => {
                        var a, s, _, h, g, f, v, C, x;
                        let b = e.entity;
                        return (0, t.jsxs)("div", {
                            className: c()(u && m().fullCardLinks, m().card, m()["card__".concat(p)], l % 3 == 0 && "Narrow" === p ? "lg:!col-start-4" : ""),
                            children: [(0, t.jsx)("div", {
                                className: "".concat(m()["card__".concat(p, "-image")]),
                                children: b.fieldGenericCardsCImage && (0, t.jsx)(n.Z, {
                                    image: b.fieldGenericCardsCImage,
                                    fill: !0,
                                    className: "object-cover"
                                })
                            }), (0, t.jsxs)("div", {
                                className: m()["card__".concat(p, "-wrapper")],
                                children: [(null == b ? void 0 : null === (a = b.fieldGenericCardCHeadline) || void 0 === a ? void 0 : a.value) && (0, t.jsx)("h3", {
                                    className: m()["card__".concat(p, "-name")],
                                    children: b.fieldGenericCardCHeadline.value
                                }), (null == b ? void 0 : null === (s = b.fieldGenericCardCCopy) || void 0 === s ? void 0 : s.value) && (0, t.jsx)("div", {
                                    className: m()["card__".concat(p, "-title")],
                                    children: (0, d.Qc)(b.fieldGenericCardCCopy.value)
                                }), (0, t.jsxs)("div", {
                                    className: "flex",
                                    children: [(null == b ? void 0 : null === (_ = b.fieldGenericCardCLinkedin) || void 0 === _ ? void 0 : null === (h = _.url) || void 0 === h ? void 0 : h.path) && (0, t.jsx)(i.Z, {
                                        href: null == b ? void 0 : null === (g = b.fieldGenericCardCLinkedin) || void 0 === g ? void 0 : null === (f = g.url) || void 0 === f ? void 0 : f.path,
                                        target: "_blank",
                                        className: m().linkedinIcon,
                                        children: (0, t.jsx)(r.Z, {className: m()["card__".concat(p, "-svg")]})
                                    }, null == b ? void 0 : null === (v = b.fieldGenericCardCLinkedin) || void 0 === v ? void 0 : null === (C = v.url) || void 0 === C ? void 0 : C.path), !!(null == b ? void 0 : null === (x = b.fieldGenericCardCLinkCta) || void 0 === x ? void 0 : x.length) && (null == b ? void 0 : b.fieldGenericCardCLinkCta.map(e => {
                                        var l, a, n, i, r, d;
                                        return (0, t.jsx)(o.Z, {
                                            className: c()(m()["card__".concat(p, "-link")]),
                                            cta: e,
                                            children: (null == e ? void 0 : null === (l = e.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : a.title) && !u && (0, t.jsx)("span", {children: null == e ? void 0 : null === (n = e.entity) || void 0 === n ? void 0 : null === (i = n.fieldCtaCompLink) || void 0 === i ? void 0 : i.title})
                                        }, null == e ? void 0 : null === (r = e.entity) || void 0 === r ? void 0 : null === (d = r.fieldCtaCompLink) || void 0 === d ? void 0 : d.title)
                                    }))]
                                })]
                            })]
                        }, e.targedId)
                    })]
                })
            });
            return h
        };
        l.default = p
    }, 54031: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            default: function () {
                return M
            }, typename: function () {
                return w
            }
        });
        var t, o, n, i, r, d, s = a(85893), c = a(67294), u = a(22359), m = a(39579), _ = a(69447), p = a(24002),
            h = a(41287), g = a(94184), f = a.n(g);

        function v() {
            return (v = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var C = function (e) {
            return c.createElement("svg", v({
                width: 48,
                height: 26,
                viewBox: "0 0 48 26",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = c.createElement("rect", {
                x: 32.754,
                y: 2.51,
                width: 2.963,
                height: 17.441,
                rx: 1.481,
                transform: "rotate(-45 32.754 2.51)",
                fill: "#fff"
            })), o || (o = c.createElement("rect", {
                x: 34.853,
                y: 25.519,
                width: 2.963,
                height: 17.441,
                rx: 1.481,
                transform: "rotate(-135 34.853 25.519)",
                fill: "#fff"
            })), n || (n = c.createElement("rect", {
                x: 46.393,
                y: 11.584,
                width: 2.963,
                height: 45.427,
                rx: 1.481,
                transform: "rotate(90 46.393 11.584)",
                fill: "#fff"
            })))
        };

        function x() {
            return (x = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var b = function (e) {
            return c.createElement("svg", x({
                width: 47,
                height: 26,
                viewBox: "0 0 47 26",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i || (i = c.createElement("rect", {
                width: 2.963,
                height: 17.441,
                rx: 1.481,
                transform: "scale(-1 1) rotate(-45 -4.303 18.958)",
                fill: "#fff"
            })), r || (r = c.createElement("rect", {
                width: 2.963,
                height: 17.441,
                rx: 1.481,
                transform: "scale(1 -1) rotate(45 37.092 2.419)",
                fill: "#fff"
            })), d || (d = c.createElement("rect", {
                width: 2.963,
                height: 45.427,
                rx: 1.481,
                transform: "matrix(0 1 1 0 1.025 11.584)",
                fill: "#fff"
            })))
        }, y = a(81536), A = a(46182), j = a(75964), N = a.n(j);
        let w = "ParagraphHeroCarousel", I = e => {
            let {paragraph: l} = e, {
                    fieldCarouselItem1: a,
                    fieldCarouselItem2: t,
                    fieldCarouselItem3: o,
                    fieldCarouselItem4: n
                } = l, i = [a, t, o, n], [r, d] = (0, c.useState)(), [g, v] = (0, c.useState)(0), x = (0, y.$G)(),
                j = e => {
                    r && r.slideToLoop(e)
                }, w = e => e.toString().padStart(2, "0"), I = (0, A.Z)();
            return (0, s.jsx)("div", {
                className: "".concat(N().root, " overflow-hidden"), children: (0, s.jsx)("div", {
                    className: "container px-0 md:px-20", children: (0, s.jsxs)("div", {
                        className: "default-grid", children: [(0, s.jsxs)("div", {
                            className: "".concat(N().swiperWrapper, " col-span-full md:col-span-9 md:col-start-4 relative"),
                            children: [(0, s.jsxs)(_.t, {
                                onInit: e => {
                                    d(e)
                                },
                                onSlideChange: e => v(e.realIndex),
                                allowTouchMove: !0,
                                slidesPerView: 1,
                                speed: 1200,
                                style: {overflow: "visible"},
                                initialSlide: 0,
                                loop: !0,
                                loopedSlides: i.length,
                                breakpoints: {768: {spaceBetween: 20}},
                                children: [i.map((e, l) => {
                                    var a, t, o;
                                    let {
                                        entity: {
                                            fieldCarouselItemImage: n,
                                            fieldCarouselItemHeadline: i,
                                            fieldCarouselItemCopy: r,
                                            fieldCarouselItemCtaRef: d,
                                            fieldCarouselItemMicroCopy: c,
                                            fieldCarouselItemMCopyLink: _,
                                            fieldCarouselItemMCopyNTab: g,
                                            fieldCarouselItemMobImage: f
                                        }
                                    } = e;
                                    return (0, s.jsx)(p.o, {
                                        className: 0 === l ? N().initialSlide : "", children: (0, s.jsxs)("div", {
                                            className: N().slide,
                                            children: [(0, s.jsxs)("div", {
                                                className: N().slideImage,
                                                children: [!I && "boolean" == typeof I && (0, s.jsx)(m.Z, {
                                                    fetchpriority: 0 === l ? "high" : "low",
                                                    image: n,
                                                    className: "hidden md:block",
                                                    loading: 0 === l ? "eager" : "lazy"
                                                }), I && (0, s.jsx)(m.Z, {
                                                    image: f,
                                                    className: "md:hidden",
                                                    loading: 0 === l ? "eager" : "lazy"
                                                }), (0, s.jsx)("div", {className: N().slideImageBg})]
                                            }), (0, s.jsxs)("div", {
                                                className: "".concat(N().slideContent, " flex md:hidden"),
                                                children: [(0, s.jsx)("div", {
                                                    className: N().slideContentItemWrapper,
                                                    children: (0, s.jsx)("div", {
                                                        className: "".concat(N().slideHeadline, " ").concat(N().slideContentItem, " ").concat(N().current),
                                                        children: (0, s.jsx)("h2", {children: i})
                                                    })
                                                }), (0, s.jsx)("div", {
                                                    className: N().slideContentItemWrapper,
                                                    children: (0, s.jsx)("p", {
                                                        className: "".concat(N().slideCopy, " ").concat(N().slideContentItem, " ").concat(N().current),
                                                        children: r
                                                    })
                                                }), (0, s.jsx)("div", {
                                                    className: "".concat(N().slideContentItemWrapper, " mt-auto"),
                                                    children: (0, s.jsxs)("div", {
                                                        className: "".concat(N().slideBottom, " ").concat(N().slideContentItem, " ").concat(N().current),
                                                        children: [(null == d ? void 0 : null === (a = d.entity) || void 0 === a ? void 0 : null === (t = a.fieldCtaCompLink) || void 0 === t ? void 0 : t.uri) && (0, s.jsx)(u.Z, {
                                                            className: N().link,
                                                            type: "btn-primary",
                                                            btnColor: "dark",
                                                            cta: d,
                                                            ariaLabel: "hero-card-cta-".concat(l)
                                                        }), c && (0, s.jsx)(s.Fragment, {
                                                            children: (null == _ ? void 0 : null === (o = _.url) || void 0 === o ? void 0 : o.path) ? (0, s.jsx)("a", {
                                                                className: N().microCopy,
                                                                href: _.url.path,
                                                                target: (0, h.xf)(_.url.path) && g ? "_blank" : "_self",
                                                                rel: "noreferrer",
                                                                "aria-label": c,
                                                                children: c
                                                            }) : (0, s.jsx)("span", {
                                                                className: N().microCopy,
                                                                children: c
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    }, JSON.stringify(n))
                                }), ","]
                            }), (0, s.jsxs)("div", {
                                className: "".concat(N().slideContent, " hidden md:flex"),
                                children: [(0, s.jsx)("div", {
                                    className: N().slideContentItemWrapper,
                                    children: i.map((e, l) => {
                                        let {entity: {fieldCarouselItemHeadline: a}} = e;
                                        return (0, s.jsx)("div", {
                                            className: "".concat(N().slideHeadline, " ").concat(N().slideContentItem, " \n                      ").concat(l === g ? N().current : ""),
                                            children: (0, s.jsx)("h2", {children: a})
                                        }, a)
                                    })
                                }), (0, s.jsx)("div", {
                                    className: N().slideContentItemWrapper,
                                    children: i.map((e, l) => {
                                        let {entity: {fieldCarouselItemCopy: a}} = e;
                                        return (0, s.jsx)("p", {
                                            className: "".concat(N().slideCopy, " ").concat(N().slideContentItem, " \n                    ").concat(l === g ? N().current : N().notCurrentSlide),
                                            children: a
                                        }, a)
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "".concat(N().slideContentItemWrapper, " mt-auto"),
                                    children: i.map((e, l) => {
                                        var a, t, o;
                                        let {
                                            entity: {
                                                fieldCarouselItemCtaRef: n,
                                                fieldCarouselItemMicroCopy: i,
                                                fieldCarouselItemMCopyLink: r,
                                                fieldCarouselItemMCopyNTab: d
                                            }
                                        } = e;
                                        return (0, s.jsxs)("div", {
                                            className: "".concat(N().slideBottom, " ").concat(N().slideContentItem, "\n                        ").concat(l === g ? N().current : ""),
                                            children: [(null == n ? void 0 : null === (a = n.entity) || void 0 === a ? void 0 : null === (t = a.fieldCtaCompLink) || void 0 === t ? void 0 : t.uri) && (0, s.jsx)(u.Z, {
                                                className: N().link,
                                                type: "btn-primary",
                                                btnColor: "dark",
                                                cta: n
                                            }), i && (0, s.jsx)(s.Fragment, {
                                                children: (null == r ? void 0 : null === (o = r.url) || void 0 === o ? void 0 : o.path) ? (0, s.jsx)("a", {
                                                    className: N().microCopy,
                                                    href: r.url.path,
                                                    target: (0, h.xf)(r.url.path) && d ? "_blank" : "_self",
                                                    rel: "noreferrer",
                                                    children: i
                                                }) : (0, s.jsx)("span", {className: N().microCopy, children: i})
                                            })]
                                        }, "slidebottom-".concat(l))
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: N().arrowWrapper,
                                children: [(0, s.jsxs)("button", {
                                    type: "button",
                                    onClick: () => null == r ? void 0 : r.slidePrev(),
                                    children: [(0, s.jsx)("span", {
                                        className: "sr-only",
                                        children: x("Go to next slide")
                                    }), (0, s.jsx)(b, {"aria-hidden": !0})]
                                }), (0, s.jsxs)("button", {
                                    type: "button",
                                    onClick: () => null == r ? void 0 : r.slideNext(),
                                    children: [(0, s.jsx)("span", {
                                        className: "sr-only",
                                        children: x("Go to previous slide")
                                    }), (0, s.jsx)(C, {"aria-hidden": !0})]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: N().mobileSliderControl,
                                children: [(0, s.jsx)("div", {
                                    className: N().paginationNumbers,
                                    children: "".concat(w((null == r ? void 0 : r.realIndex) + 1), "\n                        /\n                        ").concat(w(i.length))
                                }), i.length > 1 && (0, s.jsx)("div", {
                                    className: f()(N().controlsBar, "swiper-pagination-bar"),
                                    children: (0, s.jsx)("div", {
                                        className: N().blueProgressBar,
                                        style: {
                                            width: "".concat(100 / i.length, "%"),
                                            left: "".concat(100 * (null == r ? void 0 : r.realIndex) / i.length, "%")
                                        }
                                    })
                                })]
                            })]
                        }), !!(null == i ? void 0 : i.length) && i.map((e, l) => {
                            let {entity: {fieldCarouselItemHeadline: a, fieldCarouselItemThumbnail: t}} = e;
                            return (0, s.jsx)("div", {
                                className: "col-span-full md:col-span-3 hidden md:block",
                                children: (0, s.jsxs)("button", {
                                    type: "button",
                                    onClick: () => j(l),
                                    className: "".concat(N().paginationContent, "  ").concat(g === l ? N().selected : ""),
                                    children: [(0, s.jsx)("div", {
                                        className: N().paginationImage,
                                        children: (0, s.jsx)(m.Z, {image: t})
                                    }), (0, s.jsx)("div", {
                                        className: N().paginationText,
                                        children: 0 === l ? (0, s.jsx)("h1", {children: a}) : (0, s.jsx)("h2", {children: a})
                                    })]
                                })
                            }, a)
                        })]
                    })
                })
            })
        };
        var M = I
    }, 29057: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            default: function () {
                return k
            }, typename: function () {
                return j
            }
        });
        var t, o, n, i = a(85893), r = a(67294), d = a(94184), s = a.n(d), c = a(20346), u = a(50361), m = a.n(u),
            _ = a(41287), p = a(46182), h = a(22359), g = a(39579);

        function f() {
            return (f = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        function v() {
            return (v = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        function C() {
            return (C = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var x = a(14621), b = a(22602), y = a.n(b), A = a(83454);
        let j = "ParagraphHeroModule", N = {
                link: (0, i.jsx)(function (e) {
                    return r.createElement("svg", f({
                        width: 16,
                        height: 16,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), t || (t = r.createElement("path", {
                        d: "M3 8.693a.643.643 0 110-1.286v1.286zm9.685-1.098a.643.643 0 010 .91l-4.092 4.092a.643.643 0 11-.91-.91l3.638-3.637-3.638-3.638a.643.643 0 11.91-.91l4.092 4.093zM3 7.407h9.23v1.286H3V7.407z",
                        fill: "#fff"
                    })))
                }, {"aria-hidden": "true", focusable: "false"}), video: (0, i.jsx)(function (e) {
                    return r.createElement("svg", v({
                        width: 17,
                        height: 16,
                        viewBox: "0 0 17 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), o || (o = r.createElement("path", {
                        d: "M13.448 7.133l-7.329-4.33c-.604-.354-1.499 0-1.499.853v8.661c0 .791.833 1.27 1.5.875l7.328-4.33a1.013 1.013 0 000-1.729z",
                        fill: "#2368F5"
                    })))
                }, {"aria-hidden": "true", focusable: "false"}), download: (0, i.jsx)(function (e) {
                    return r.createElement("svg", C({
                        width: 17,
                        height: 16,
                        viewBox: "0 0 17 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), n || (n = r.createElement("path", {
                        d: "M7.807 3a.643.643 0 011.286 0H7.807zm1.098 9.685a.643.643 0 01-.91 0L3.903 8.593a.643.643 0 01.91-.91l3.637 3.638 3.638-3.638a.643.643 0 11.909.91l-4.092 4.092zM9.093 3v9.23H7.807V3h1.286z",
                        fill: "#2368F5"
                    })))
                }, {"aria-hidden": "true", focusable: "false"})
            }, w = e => e ? {url: {path: "#".concat((0, _.iP)(e))}, uri: "#".concat((0, _.iP)(e)), title: ""} : null,
            I = e => {
                let l = "", a = "";
                switch (e) {
                    case"green":
                        l = "/assets/images/hero/green.png", a = "/assets/images/hero/green-mobile.png";
                        break;
                    case"red":
                        l = "/assets/images/hero/red.png", a = "/assets/images/hero/red-mobile.png";
                        break;
                    case"purple":
                        l = "/assets/images/hero/purple.png", a = "/assets/images/hero/purple-mobile.png";
                        break;
                    case"blue":
                    default:
                        l = "/assets/images/hero/blue.png", a = "/assets/images/hero/blue-mobile.png";
                        break;
                    case"bluetogreen":
                        l = "/assets/images/hero/bluetogreen.png", a = "/assets/images/hero/bluetogreen-mobile.png";
                        break;
                    case"purpletoblue":
                        l = "/assets/images/hero/purpletoblue.png", a = "/assets/images/hero/purpletoblue-mobile.png";
                        break;
                    case"redtopurple":
                        l = "/assets/images/hero/redtopurple.png", a = "/assets/images/hero/redtopurple-mobile.png"
                }
                return {
                    desktopImage: {url: l, width: 780, height: 960, alt: "desktop hero", title: ""},
                    mobileImage: {url: a, width: 1400, height: 1e3, alt: "mobile hero", title: ""}
                }
            }, M = e => {
                let {paragraph: l} = e, {
                    fieldHeroMEyebrowTag: a,
                    fieldHeroMTagColor: t = "darkBlue",
                    fieldHeroMHeadline: o,
                    fieldHeroMSubHeadline: n,
                    fieldHeroMImageUpload: d,
                    fieldHeroMMobImageUpload: u,
                    fieldHeroMCenterText: f,
                    fieldHeroMCtaLinks: v,
                    fieldHeroMGradient: C,
                    fieldHeroMButtonCtaVariant: b = !1
                } = l, j = (0, r.useRef)(null), M = (0, p.Z)("lg", !1), k = (0, p.Z)(), B = null;
                d || (B = I(C));
                let T = () => d ? f ? y().ImageCenterText : y().ImageTag : y().NoImage;
                return (0, i.jsx)("div", {
                    className: "tile-container", children: (0, i.jsxs)("div", {
                        className: s()(y().root, (f || !d) && y().centerText, T(), "relative px-20 default-grid", b && y().buttonCTAVariant),
                        children: [(0, i.jsx)("div", {
                            className: s()(y().bg, d ? f ? y().ImageCenterText : y().ImageTag : y().NoImage, y()[C]),
                            children: (d || B) && (0, i.jsxs)("div", {
                                className: s()(y().mainImageContainer, !d && y().patternImage),
                                children: [d && (0, i.jsxs)(i.Fragment, {
                                    children: [!k && "boolean" == typeof k && (0, i.jsx)(g.Z, {
                                        image: d,
                                        className: "hidden md:block",
                                        fill: !0,
                                        loading: "eager"
                                    }), k && (0, i.jsx)(g.Z, {
                                        image: u,
                                        className: "md:hidden",
                                        fill: !0,
                                        loading: "eager"
                                    })]
                                }), !d && (0, i.jsxs)(i.Fragment, {
                                    children: [!k && (0, i.jsx)(g.Z, {
                                        image: B.desktopImage,
                                        fill: !0,
                                        loading: "eager",
                                        className: "hidden md:block"
                                    }), k && (0, i.jsx)(g.Z, {
                                        image: B.mobileImage,
                                        fill: !0,
                                        loading: "eager",
                                        className: "md:hidden"
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: s()(y().content, T(), "col-span-4 lg:col-start-2 lg:col-span-6", d && !f ? "md:col-span-9" : "md:col-span-12"),
                            children: (0, i.jsxs)("div", {
                                className: s()(y().innerContent, d && !f && y().hasImage),
                                children: [a && (0, i.jsx)("p", {
                                    className: s()(y().fieldHeroMEyebrowTag, y()["tag-".concat(t)]),
                                    children: a
                                }), o && (0, i.jsx)(i.Fragment, {
                                    children: b ? (0, i.jsx)("h2", {
                                        className: y().fieldHeroMHeadline,
                                        children: (0, _.Qc)(o)
                                    }) : (0, i.jsx)("h1", {
                                        className: "".concat(y().fieldHeroMHeadline, " ").concat("true" !== A.env.NEXT_PUBLIC_DISABLE_GLOBAL_ANIMATION ? "fade-delay" : ""),
                                        children: (0, _.Qc)(o)
                                    })
                                }), (d || M) && (0, i.jsx)("div", {
                                    className: s()(y().fieldHeroMSubHeadline, "true" !== A.env.NEXT_PUBLIC_DISABLE_GLOBAL_ANIMATION ? "fade-delay" : "", d && "lg:w-[83%]"),
                                    children: n && (0, _.Qc)(n)
                                }), b && (0, i.jsx)("div", {
                                    className: y().buttonCTAContainer, children: v.map(e => {
                                        var l;
                                        let {
                                            entity: {
                                                fieldCtaWIconCtaLink: a,
                                                fieldCtaWIconIcon: t,
                                                fieldCtaWIconOpenInNewTab: o,
                                                fieldCtaWIconAnchorId: n
                                            }
                                        } = e;
                                        return (0, i.jsx)(h.Z, {
                                            cta: {
                                                entity: {
                                                    fieldCtaCompLink: w(n) || a,
                                                    fieldCtaCompOpenInNewTab: o
                                                }
                                            }, type: "btn-primary", btnColor: "light", className: "btn-hero-".concat(t)
                                        }, null == a ? void 0 : null === (l = a.url) || void 0 === l ? void 0 : l.path)
                                    })
                                })]
                            })
                        }), !d && !M && (0, i.jsx)("div", {
                            className: "".concat(y().content, " ").concat(y().sidecontent, " col-span-4 md:col-span-12 lg:col-span-3 lg:col-start-9"),
                            children: (0, i.jsx)("h2", {className: y().fieldHeroMSubHeadline, children: n && (0, _.Qc)(n)})
                        }), (0, i.jsx)("div", {
                            className: "col-span-4 md:col-span-12 lg:col-span-7 lg:col-start-2 relative",
                            children: (0, i.jsx)("div", {
                                className: y().bottomLinks,
                                children: !!(null == v ? void 0 : v.length) && !b && v.map(e => {
                                    var l, a, t;
                                    let {
                                        entity: {
                                            fieldCtaWIconCtaLink: o,
                                            fieldCtaWIconIcon: n,
                                            fieldCtaWIconOpenInNewTab: d,
                                            fieldCtaWIconWistiaVideoId: s,
                                            fieldCtaWIconAnchorId: u
                                        }
                                    } = e, p = o;
                                    return u && (null == p ? void 0 : null === (l = p.url) || void 0 === l ? void 0 : l.path) && ((p = m()(o)).url.path = "#".concat((0, _.iP)(u))), (0, i.jsxs)(r.Fragment, {
                                        children: [s ? (0, i.jsxs)("button", {
                                            onClick: () => {
                                                "function" == typeof (null == j ? void 0 : j.current) && (null == j || j.current())
                                            },
                                            className: "".concat(y().fieldHeroMCtaLink, " btn-hero-video"),
                                            type: "button",
                                            children: [p.title, (0, i.jsx)("div", {
                                                className: y().fieldCtaWIconCtaLinkIcon,
                                                children: N[n]
                                            })]
                                        }, p.url.path + p.title) : (0, i.jsxs)(c.Z, {
                                            href: (null === (a = w(u)) || void 0 === a ? void 0 : a.url.path) || p.url.path,
                                            className: "".concat(y().fieldHeroMCtaLink, " btn-hero-").concat(n),
                                            target: d && (0, _.xf)(p.url.path) ? "_blank" : "_self",
                                            children: [p.title, (0, i.jsx)("div", {
                                                className: y().fieldCtaWIconCtaLinkIcon,
                                                children: N[n]
                                            })]
                                        }, p.url.path + p.title), s && (0, i.jsx)("div", {
                                            className: "h-0 overflow-hidden",
                                            children: (0, i.jsx)(x.Z, {
                                                openModal: j,
                                                videoId: s,
                                                objectfit: "cover",
                                                openInModal: !0
                                            })
                                        })]
                                    }, (null === (t = p.url) || void 0 === t ? void 0 : t.path) + p.title)
                                })
                            })
                        })]
                    })
                })
            };
        var k = M
    }, 20140: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return m
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(22359), r = a(20346), d = a(39579), s = a(41287), c = a(64144), u = a.n(c);
        let m = "ParagraphIconTextModule", _ = e => {
            let {paragraph: l} = e, {
                fieldItEyebrow: a,
                fieldItHeadline: o,
                fieldItItem: c,
                fieldItBottomButtonCta: m,
                fieldGenericBlueBackground: _
            } = l, p = 3 === c.length, h = c.length % 6 == 0;
            return (0, t.jsx)("div", {
                className: n()(u().root, "container", p && u().threeColumns, h && u().sixColumns),
                children: (0, t.jsxs)("div", {
                    className: n()(_ && "is-tile is-blue-tile", _ && u().blueBackground),
                    children: [_ && (0, t.jsx)(d.Z, {
                        image: {
                            url: "/assets/images/clouds/iconTextModuleCloud.png",
                            alt: "",
                            width: 308,
                            height: 839,
                            title: ""
                        }, className: u().cloudBg
                    }), (0, t.jsxs)("div", {
                        className: "default-grid relative",
                        children: [(0, t.jsxs)("div", {
                            className: "col-span-full text-center",
                            children: [a && (0, t.jsx)("div", {
                                className: u().eyebrow,
                                children: a
                            }), o && (0, t.jsx)("h2", {className: u().headline, children: (0, s.Qc)(o)})]
                        }), (null == c ? void 0 : c.length) > 0 && (0, t.jsxs)("div", {
                            className: u().contentContainer,
                            children: [(0, t.jsx)("div", {
                                className: u().itemsContainer,
                                children: !!(null == c ? void 0 : c.length) && c.map(e => {
                                    var l, a, o;
                                    let {
                                        entity: {
                                            fieldItModItemIconImage: n,
                                            fieldItText: i,
                                            fieldItItemLink: c,
                                            fieldItOpenNewTab: m
                                        }
                                    } = e, _ = (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)("div", {
                                            className: u().itemImage,
                                            children: (null == n ? void 0 : n.url) && (0, t.jsx)(d.Z, {
                                                draggable: !1,
                                                image: {...n, width: 100, height: 100}
                                            })
                                        }), (0, t.jsx)("p", {className: u().itemText, children: i})]
                                    });
                                    return (null == c ? void 0 : null === (l = c.url) || void 0 === l ? void 0 : l.path) ? (0, t.jsx)(r.Z, {
                                        href: null === (a = c.url) || void 0 === a ? void 0 : a.path,
                                        target: m && (0, s.xf)(null === (o = c.url) || void 0 === o ? void 0 : o.path) ? "_blank" : "_self",
                                        className: u().item,
                                        children: _
                                    }, JSON.stringify(n)) : (0, t.jsx)("div", {
                                        className: u().item,
                                        children: _
                                    }, JSON.stringify(n))
                                })
                            }), (0, s.yr)(m) && (0, t.jsx)("div", {
                                className: u().CTAContainer,
                                children: (0, t.jsx)("div", {
                                    className: u().cta,
                                    children: (0, t.jsx)(i.Z, {
                                        cta: m,
                                        type: "btn-primary",
                                        btnColor: "dark",
                                        size: "largeInMobile"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            })
        };
        l.default = _
    }, 74980: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return r
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(79042), n = a(12740), i = a.n(n);
        let r = "ParagraphImageModule", d = e => {
            let {paragraph: l} = e, {desktopImage: a, tabletImage: n, mobileImage: r, roundCorners: d} = l;
            return (0, t.jsx)("div", {
                className: "".concat(i().root, " container"),
                children: (0, t.jsx)("div", {
                    className: "default-grid",
                    children: (0, t.jsx)("div", {
                        className: "col-span-full lg:col-span-9 lg:col-start-4",
                        children: (0, t.jsx)(o.Z, {
                            className: "".concat(i().image, " ").concat(d && i().roundCorners),
                            desktopImage: a,
                            tabletImage: n,
                            mobileImage: r
                        })
                    })
                })
            })
        };
        l.default = d
    }, 39271: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return h
            }
        });
        var t = a(85893), o = a(67294), n = a(46182), i = a(41287), r = a(22359), d = a(94184), s = a.n(d),
            c = a(99589), u = a(39579), m = a(24002), _ = a(55361), p = a.n(_);
        let h = "ParagraphIntroCardHeroModule", g = e => {
            let {paragraph: l} = e, {fieldIntrocardModCards: a} = l;

            function d(e, l) {
                let a = new Date(e), t = a.getDate(), o = a.getMonth() + 1, n = a.getFullYear();
                return (l = l.replace("MM", o.toString().padStart(2, "0"))).indexOf("yyyy") > -1 ? l = l.replace("yyyy", n.toString()) : l.indexOf("yy") > -1 && (l = l.replace("yy", n.toString().substring(2, 2))), l = l.replace("dd", t.toString().padStart(2, "0"))
            }

            let [_, h] = (0, o.useState)(0), g = e => {
                h(e.activeIndex)
            }, f = (0, n.Z)();
            return (0, t.jsx)("div", {
                className: s()(p().root, "mb-20", a.length > 1 && p().hasSwiper, f && p().isMobile),
                children: (0, t.jsx)("div", {
                    className: "md:container overflow-hidden relative grid pb-240 md:pb-0",
                    children: (0, t.jsxs)("div", {
                        className: s()(p().mainContainer, "relative w-full h-full default-grid"),
                        children: [(0, t.jsx)("div", {
                            className: "absolute top-0 w-full md:h-full", children: (0, t.jsx)("div", {
                                className: "relative md:h-full w-full ", children: (0, t.jsx)(c.Z, {
                                    className: "w-full md:h-full",
                                    onChange: g,
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                    children: a.length > 0 && a.map((e, l) => {
                                        var a, o, n, c, _, h;
                                        let {
                                            entity: {
                                                fieldIntrocardCHeadline: g,
                                                fieldIntrocardCImage: v,
                                                fieldIntrocardCTag: C,
                                                fieldIntrocardCMobileImage: x,
                                                fieldIntrocardCCopy: b,
                                                fieldIntrocardCLinkCta: y,
                                                fieldIntrocardCButtonCta: A,
                                                fieldIntrocardCTagColor: j,
                                                fieldIntrocardCAuthorImage: N,
                                                fieldIntrocardCAuthorName: w,
                                                fieldIntrocardCDate: I,
                                                fieldIntrocardCEyebrow: M,
                                                fieldIntrocardCHeadlineSize: k,
                                                fieldIntrocardCReadTime: B
                                            }
                                        } = e, T = null == I ? void 0 : I.value;
                                        return (0, t.jsx)(m.o, {
                                            className: "w-full md:h-full", children: (0, t.jsxs)("div", {
                                                className: s()(p().card, "pt-240 md:pt-10", !C && "lg:pt-200", "w-full md:h-full"),
                                                children: [v.url && (0, t.jsx)("div", {
                                                    className: "".concat(p().backgroundImage, " md:block hidden w-full h-full"),
                                                    children: (0, t.jsx)(u.Z, {image: v, fill: !0})
                                                }), x && x.url && (0, t.jsx)("div", {
                                                    className: "".concat(p().backgroundImage, " ").concat(p().mobileImage, " block md:hidden w-full h-full"),
                                                    children: (0, t.jsxs)("div", {
                                                        className: p().mobileImageWrapper,
                                                        children: [(0, t.jsx)("div", {className: p().mobileImageOverlay}), (0, t.jsx)(u.Z, {
                                                            image: x,
                                                            fill: !0
                                                        })]
                                                    })
                                                }), !x && v && (0, t.jsx)("div", {
                                                    className: "".concat(p().backgroundImage, " block md:hidden w-full h-full"),
                                                    children: (0, t.jsxs)("div", {
                                                        className: p().mobileImageWrapper,
                                                        children: [(0, t.jsx)("div", {className: p().mobileImageOverlay}), (0, t.jsx)(u.Z, {
                                                            image: v,
                                                            fill: !0
                                                        })]
                                                    })
                                                }), f && (0, t.jsxs)("div", {
                                                    className: s()(p().cardContentWrapper, p().additionalPadding, "relative md:col-span-6 col-span-full col-start-1 row-start-1", "md:inset-y-10 "),
                                                    children: [(0, t.jsx)("div", {className: s()(p().overlay)}), (0, t.jsxs)("div", {
                                                        className: "".concat(p().cardContent),
                                                        children: [C && (0, t.jsxs)("div", {
                                                            className: "".concat(p().cardTopRow),
                                                            children: [C && (0, t.jsx)("div", {
                                                                className: "".concat(p().tag, " ").concat(p()["tag--".concat(j)]),
                                                                children: C
                                                            }), ((null == I ? void 0 : I.value) || B) && (0, t.jsxs)("div", {
                                                                className: p().dateAndReadTime,
                                                                children: [(null == I ? void 0 : I.value) && (0, t.jsx)("div", {
                                                                    className: "".concat(p().date),
                                                                    children: d(T, "dd.MM.yyyy")
                                                                }), B && (0, t.jsx)("div", {
                                                                    className: "".concat(p().readTime),
                                                                    children: B
                                                                })]
                                                            }), M && (0, t.jsx)("div", {
                                                                className: "".concat(p().eyebrow),
                                                                children: M
                                                            })]
                                                        }), g && (0, t.jsx)("h2", {
                                                            className: s()(p().headline, p()["headline--".concat(k)], p().fadeIn),
                                                            children: (0, i.Qc)(g)
                                                        }), b && (0, t.jsx)("div", {
                                                            className: s()(p().copy, p().fadeIn),
                                                            children: (0, i.Qc)(null == b ? void 0 : b.value)
                                                        }), (0, t.jsxs)("div", {
                                                            className: "".concat(p().cardBottomRow, " mt-auto"),
                                                            children: [(null == N ? void 0 : N.url) && (0, t.jsxs)("div", {
                                                                className: "".concat(p().author),
                                                                children: [(0, t.jsx)("div", {
                                                                    className: "".concat(p().authorImage),
                                                                    children: (0, t.jsx)(u.Z, {
                                                                        image: {
                                                                            ...N,
                                                                            width: 55,
                                                                            height: 55
                                                                        }
                                                                    })
                                                                }), w && (0, t.jsx)("div", {
                                                                    className: "".concat(p().authorName),
                                                                    children: w
                                                                })]
                                                            }), (0, t.jsxs)("div", {
                                                                className: s()(p().linkRow, !N && f && "w-full"),
                                                                children: [A && (0, t.jsx)(r.Z, {
                                                                    className: p().btnCTA,
                                                                    cta: A,
                                                                    ariaLabel: (0, i.xf)(null == A ? void 0 : null === (a = A.entity) || void 0 === a ? void 0 : null === (o = a.fieldCtaCompLink) || void 0 === o ? void 0 : null === (n = o.url) || void 0 === n ? void 0 : n.path) ? "intro-card-hero-card-button-cta-".concat(l) : "",
                                                                    type: "btn-primary"
                                                                }), y && (0, t.jsx)(r.Z, {
                                                                    cta: y,
                                                                    ariaLabel: (0, i.xf)(null == y ? void 0 : null === (c = y.entity) || void 0 === c ? void 0 : null === (_ = c.fieldCtaCompLink) || void 0 === _ ? void 0 : null === (h = _.url) || void 0 === h ? void 0 : h.path) ? "intro-card-hero-card-link-cta-".concat(l) : "",
                                                                    type: "link"
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }, "swiper-".concat(g))
                                    })
                                })
                            })
                        }), a.length > 0 && a.map((e, l) => {
                            let {
                                entity: {
                                    fieldIntrocardCHeadline: a,
                                    fieldIntrocardCCopy: o,
                                    fieldIntrocardCLinkCta: n,
                                    fieldIntrocardCButtonCta: c,
                                    fieldIntrocardCTag: m,
                                    fieldIntrocardCTagColor: h,
                                    fieldIntrocardCAuthorImage: g,
                                    fieldIntrocardCAuthorName: v,
                                    fieldIntrocardCDate: C,
                                    fieldIntrocardCEyebrow: x,
                                    fieldIntrocardCHeadlineSize: b,
                                    fieldIntrocardCReadTime: y
                                }
                            } = e, A = null == C ? void 0 : C.value;
                            return (0, t.jsxs)("div", {
                                className: s()(p().cardContentWrapper, p().additionalPadding, "md:col-span-6 col-span-full relative col-start-1 row-start-1", "top-240 md:inset-y-10 lg:inset-y-20", !m && "lg:!mt-200", l !== _ || f ? "opacity-0 pointer-events-none" : "opacity-100"),
                                children: [(0, t.jsx)("div", {className: s()(p().overlay)}), (0, t.jsxs)("div", {
                                    className: "".concat(p().cardContent),
                                    children: [m && (0, t.jsxs)("div", {
                                        className: "".concat(p().cardTopRow),
                                        children: [m && (0, t.jsx)("div", {
                                            className: "".concat(p().tag, " ").concat(p()["tag--".concat(h)]),
                                            children: m
                                        }), ((null == C ? void 0 : C.value) || y) && (0, t.jsxs)("div", {
                                            className: p().dateAndReadTime,
                                            children: [(null == C ? void 0 : C.value) && (0, t.jsx)("div", {
                                                className: "".concat(p().date),
                                                children: d(A, "dd.MM.yyyy")
                                            }), y && (0, t.jsx)("div", {
                                                className: "".concat(p().readTime),
                                                children: y
                                            })]
                                        }), x && (0, t.jsx)("div", {className: "".concat(p().eyebrow), children: x})]
                                    }), a && (0, t.jsx)("h2", {
                                        className: s()(p().headline, p()["headline--".concat(b)], p().fadeIn, l !== _ ? "opacity-0" : "opacity-100"),
                                        children: (0, i.Qc)(a)
                                    }), o && (0, t.jsx)("div", {
                                        className: s()(p().copy, p().fadeIn, l !== _ ? "opacity-0" : "opacity-100"),
                                        children: (0, i.Qc)(null == o ? void 0 : o.value)
                                    }), (0, t.jsxs)("div", {
                                        className: "".concat(p().cardBottomRow, " mt-auto"),
                                        children: [(null == g ? void 0 : g.url) && (0, t.jsxs)("div", {
                                            className: "".concat(p().author),
                                            children: [(0, t.jsx)("div", {
                                                className: "".concat(p().authorImage),
                                                children: (0, t.jsx)(u.Z, {image: {...g, width: 55, height: 55}})
                                            }), v && (0, t.jsx)("div", {
                                                className: "".concat(p().authorName),
                                                children: v
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: s()(p().linkRow, !g && f && "w-full"),
                                            children: [c && l === _ && (0, t.jsx)(r.Z, {
                                                className: p().btnCTA,
                                                cta: c,
                                                type: "btn-primary"
                                            }), n && l === _ && (0, t.jsx)(r.Z, {cta: n, type: "link"})]
                                        })]
                                    })]
                                })]
                            }, a)
                        })]
                    })
                })
            })
        };
        l.default = g
    }, 91461: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return r
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(80269), i = a.n(n);
        let r = "ParagraphIntroModule", d = e => {
            let {paragraph: l} = e, {fieldFieldIntroModuleCopy: a} = l;
            return (0, t.jsx)("div", {
                className: "".concat(i().root, " container"),
                children: (0, t.jsx)("div", {
                    className: "default-grid",
                    children: (null == a ? void 0 : a.value) && (0, t.jsx)("div", {
                        className: "".concat(i().content, " col-span-4 md:col-span-12 lg:col-span-9 lg:col-start-4 zscaler-wysiwyg"),
                        children: (0, o.Qc)(a.value)
                    })
                })
            })
        };
        l.default = d
    }, 44290: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(94184), i = a.n(n), r = a(20346), d = a(79042), s = a(29273), c = a.n(s), u = a(46182),
            m = a(22359);
        let _ = "ParagraphIntroWithGraphicLinksModule", p = e => {
            let {paragraph: l} = e, {
                fieldIntroWGLinksHeadline: a,
                fieldIntroWGLinksCopy: n,
                fieldIntroWGLinksLinks: s,
                fieldIntroWGLinksButtonCta: _,
                fieldIntroWGLinksDeskImage: p,
                fieldIntroWGLinksTabImage: h,
                fieldIntroWGLinksMobImage: g,
                fieldIntroWGLinksCentered: f
            } = l, v = (0, u.Z)();
            return (0, t.jsx)("div", {
                className: "".concat(c().root, " container default-grid"),
                children: (0, t.jsxs)("div", {
                    className: i()(c().contentWrapper, f && c().centered),
                    children: [a && (0, t.jsx)("h2", {
                        className: "".concat(c().headline),
                        children: (0, o.Qc)(a)
                    }), n && (0, t.jsx)("div", {
                        className: "".concat(c().copy, " typo-paragraph"),
                        children: (0, o.Qc)(n)
                    }), (null == s ? void 0 : s.length) > 0 && (0, t.jsx)("div", {
                        className: "".concat(c().linksWrapper),
                        children: s.map(e => {
                            var l;
                            let {entity: a} = e, {fieldCtaCompLink: o, fieldCtaCompOpenInNewTab: n} = a;
                            return (0, t.jsx)(r.Z, {
                                className: i()(c().link, f && c().centered),
                                href: null === (l = o.url) || void 0 === l ? void 0 : l.path,
                                target: n ? "_blank" : "_self",
                                ariaLabel: o.title,
                                children: o.title
                            }, o.title)
                        })
                    }), _ && (0, t.jsx)("div", {
                        className: "".concat(c().ctaWrapper),
                        children: (0, t.jsx)(m.Z, {cta: _, type: "btn-primary", size: v ? "large" : "default"})
                    }), (g || h || p) && (0, t.jsx)("div", {
                        className: "".concat(c().imageWrapper),
                        children: (0, t.jsx)(d.Z, {desktopImage: p, tabletImage: h, mobileImage: g})
                    })]
                })
            })
        };
        l.default = p
    }, 86567: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return g
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(94184), i = a.n(n), r = a(46182), d = a(99589), s = a(39579), c = a(24002), u = a(5152),
            m = a.n(u), _ = a(28581), p = a.n(_);
        let h = m()(() => Promise.all([a.e(386), a.e(905)]).then(a.bind(a, 9905)), {
            loadableGenerated: {webpack: () => [9905]},
            ssr: !1
        }), g = "ParagraphIntroWithGraphicModule", f = e => {
            let {card: l, showNumbers: a, number: n} = e, {entity: {fieldIntroWGraphicCardCopy: r}} = l;
            return (0, t.jsxs)("div", {
                className: p().textCard,
                children: [a && (0, t.jsx)("div", {
                    className: p().cardNumber,
                    children: n.toString().padStart(2, "0")
                }), (0, t.jsx)("div", {
                    className: i()(p().cardCopy, "zscaler-wysiwyg"),
                    children: (0, o.Qc)((null == r ? void 0 : r.value) || "")
                })]
            })
        }, v = e => {
            var l, a;
            let {paragraph: o} = e, {
                fieldIntroWGModBackground: n,
                fieldIntroWGModCaption: u,
                fieldIntroWGModCards: m,
                fieldIntroWGModEyebrow: _,
                fieldIntroWGModHeadline: g,
                fieldIntroWGModImage: v,
                fieldIntroWGModTabletImage: C,
                fieldIntroWGModMobileImage: x,
                fieldIntroWGModShowNumbers: b,
                fieldIntroWGModLottie: y
            } = o, A = (0, r.Z)("lg", !1), j = (0, r.Z)(), N = m.filter(e => {
                var l, a;
                return null == e ? void 0 : null === (l = e.entity) || void 0 === l ? void 0 : null === (a = l.fieldIntroWGraphicCardCopy) || void 0 === a ? void 0 : a.value
            });
            return (0, t.jsx)("div", {
                className: i()(p().root, n && p().blueBackground, "container"), children: (0, t.jsxs)("div", {
                    className: i()(p().backgroundContainer, n && "is-tile"),
                    children: [n && !A && (0, t.jsx)(s.Z, {
                        image: {
                            url: "/assets/images/clouds/blueTilePattern.png",
                            alt: "",
                            width: 261,
                            height: 1229,
                            title: ""
                        }, className: i()(p().cloud, "zscaler-cloud")
                    }), (0, t.jsx)("div", {
                        className: "default-grid", children: (0, t.jsxs)("div", {
                            className: p().contentContainer,
                            children: [_ && (0, t.jsx)("p", {
                                className: p().eyebrow,
                                children: _
                            }), g && (0, t.jsx)("h2", {
                                className: p().headline,
                                children: g
                            }), v && (0, t.jsxs)("div", {
                                className: i()(p().imageContainer, !_ && !g && p().noEyebrowNoHeadline),
                                children: [(0, t.jsx)("div", {
                                    children: (null == y ? void 0 : null === (l = y.entity) || void 0 === l ? void 0 : l.url) ? (0, t.jsx)(t.Fragment, {
                                        children: (0, t.jsx)(h, {
                                            src: null == y ? void 0 : null === (a = y.entity) || void 0 === a ? void 0 : a.url,
                                            autoplay: !0,
                                            loop: !0,
                                            style: {height: "100%", width: "100%"}
                                        })
                                    }) : (0, t.jsxs)(t.Fragment, {children: [j && x && (0, t.jsx)(s.Z, {image: x}), A && !j && C && (0, t.jsx)(s.Z, {image: C}), !(A && !j && C || j && x) && (0, t.jsx)(s.Z, {image: v})]})
                                }), u && (0, t.jsx)("div", {className: p().caption, children: u})]
                            }), (null == N ? void 0 : N.length) > 0 && (0, t.jsx)("div", {
                                className: p().cardsContainer,
                                children: A || N.length > 4 ? (0, t.jsx)(d.Z, {
                                    slidesPerView: j ? 1.2 : 2.9,
                                    blueProgressBar: !1,
                                    greenBorder: !0,
                                    children: N.map((e, l) => (0, t.jsx)(c.o, {
                                        children: (0, t.jsx)(f, {
                                            card: e,
                                            showNumbers: b,
                                            number: l + 1
                                        })
                                    }, JSON.stringify(e)))
                                }) : (0, t.jsx)("div", {
                                    style: {gridTemplateColumns: "repeat(".concat(N.length, ", 1fr)")},
                                    className: i()(p().cardGrid, 4 === N.length && p().fourCards),
                                    children: N.map((e, l) => (0, t.jsx)(f, {
                                        card: e,
                                        showNumbers: b,
                                        number: l + 1
                                    }, JSON.stringify(e)))
                                })
                            })]
                        })
                    })]
                })
            })
        };
        l.default = v
    }, 4176: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return m
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(39579), i = a(79042), r = a(94184), d = a.n(r), s = a(72111), c = a.n(s), u = a(46182);
        let m = "ParagraphIntroWithResponsiveGraphicMo", _ = e => {
            let {paragraph: l} = e, {
                fieldIntroWRGModEyebrow: a,
                fieldIntroWRGModHeadline: r,
                fieldIntroWRGModSubhead: s,
                fieldIntroWRGModDeskImage: m,
                fieldIntroWRGModTabImage: _,
                fieldIntroWRGModMobImage: p,
                fieldIntroWRGModTextCols: h
            } = l, g = (0, u.Z)(), f = (0, u.Z)("lg"), v = (null == h ? void 0 : h.length) > 0;
            return (0, t.jsx)("div", {
                className: "".concat(c().root), children: (0, t.jsxs)("div", {
                    className: "".concat(c().mainCard),
                    children: [!g && !f && (0, t.jsx)(n.Z, {
                        image: {
                            url: "/assets/images/clouds/blueTilePattern.png",
                            alt: "",
                            width: 261,
                            height: 1229,
                            title: ""
                        }, className: c().cloud
                    }), (0, t.jsxs)("div", {
                        className: "".concat(c().contentWrapper),
                        children: [a && (0, t.jsx)("div", {
                            className: d()(c().eyebrow, "typo-eyebrow", {[c().eyebrowTextColumnsVariant]: v}),
                            children: (0, o.Qc)(a)
                        }), r && (0, t.jsx)("h2", {
                            className: "".concat(c().headline, " typo-heading-4"),
                            children: (0, o.Qc)(r)
                        }), s && (0, t.jsx)("div", {
                            className: "".concat(c().paragraph, " typo-paragraph"),
                            children: (0, o.Qc)(s)
                        }), (p || _ || m) && (0, t.jsx)("div", {
                            className: "".concat(c().imageWrapper),
                            children: (0, t.jsx)(i.Z, {desktopImage: m, tabletImage: _, mobileImage: p})
                        }), v && (0, t.jsx)("div", {
                            className: "".concat(c().textColumnsWrapper),
                            children: h.map((e, l) => {
                                let {entity: a} = e, {
                                    fieldIntroWRGTcColor: n,
                                    fieldIntroWRGTcCopy: i,
                                    fieldIntroWRGTcHeadline: r
                                } = a, s = l + 1;
                                return (0, t.jsxs)("div", {
                                    className: c().column,
                                    children: [(0, t.jsx)("div", {
                                        className: d()(c().columnNumber, {
                                            [c().columnNumberBlue]: "blue" === n,
                                            [c().columnNumberPurple]: "purple" === n,
                                            [c().columnNumberGreen]: "green" === n
                                        }), children: s < 10 ? "0".concat(s) : s
                                    }), r && (0, t.jsx)("div", {
                                        className: "".concat(c().columnHeadline, " typo-heading-6"),
                                        children: (0, o.Qc)(r)
                                    }), i && (0, t.jsx)("div", {
                                        className: "".concat(c().columnCopy, " typo-small-paragraph"),
                                        children: (0, o.Qc)(i)
                                    })]
                                }, r)
                            })
                        })]
                    })]
                })
            })
        };
        l.default = _
    }, 26704: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(30653), r = a(46182), d = a(41287), s = a(39579), c = a(18364), u = a.n(c),
            m = a(22359);
        let _ = "ParagraphLeaderWithGraphicModule", p = e => {
            let {paragraph: l} = e, {
                fieldLeaderWGrEyebrow: a,
                fieldLeaderWGrHeadline: o,
                fieldLeaderWGrCopy: c,
                fieldLeaderWGrIsBlueBack: _,
                fieldLeaderWGrImage: p,
                fieldLeaderWGrImageTablet: h,
                fieldLeaderWGrImageMobile: g,
                fieldLeaderWGrCta: f,
                fieldLeaderWGrBottomColumns: v,
                fieldLeaderWGrCentered: C
            } = l, x = (0, r.Z)(), b = (0, r.Z)("lg", !1), y = (0, d.Bb)(p, h, g, b, x);
            return (0, t.jsx)("div", {
                className: "container", children: (0, t.jsxs)("div", {
                    className: n()("default-grid relative", u().root, _ && u().blueBackground, _ && "is-tile", C && u().centered, v && u().hasBottomColumns),
                    children: [_ && (0, t.jsx)("div", {
                        className: u().bg,
                        children: (0, t.jsx)(s.Z, {
                            image: {
                                url: "/assets/images/leaderBg.png",
                                alt: "",
                                title: "",
                                width: 307,
                                height: 827
                            }
                        })
                    }), (0, t.jsx)("div", {
                        className: u().eyebrowContainer,
                        children: a && (0, t.jsx)("div", {className: u().eyebrow, children: a})
                    }), (0, t.jsxs)("div", {
                        className: "".concat(u().content),
                        children: [o && (0, t.jsx)("h2", {
                            className: u().headline,
                            children: (0, d.Qc)(o)
                        }), c && (0, t.jsx)("div", {
                            className: u().copy,
                            children: (0, d.Qc)(c, !0)
                        }), f && (0, t.jsx)("div", {
                            className: u().cta,
                            children: (0, t.jsx)(m.Z, {cta: f, type: "btn-primary"})
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "col-span-4 md:col-span-12 lg:col-span-5 lg:col-start-8",
                        children: [(null == y ? void 0 : y.url) && (0, t.jsx)("div", {
                            className: "relative ".concat(u().imageWrapper, " ").concat(f ? u().hasCta : ""),
                            children: (0, t.jsx)(s.Z, {image: y, className: u().image})
                        }), f && (0, t.jsx)("div", {
                            className: u().ctaWrapper,
                            children: (0, t.jsx)("div", {
                                className: u().cta,
                                children: (0, t.jsx)(m.Z, {cta: f, type: "btn-primary"})
                            })
                        })]
                    }), (null == v ? void 0 : v.length) > 0 && (0, t.jsx)("div", {
                        className: u().bottomColumnsContainer,
                        children: v.map(e => (0, t.jsx)("div", {
                            className: u().bulletColumnContainer,
                            children: (0, i.ZP)(e.value)
                        }, e.value))
                    })]
                })
            })
        };
        l.default = p
    }, 89742: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return s
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(30653), n = a(94184), i = a.n(n), r = a(81119), d = a.n(r);
        let s = "ParagraphLeaderWithoutGraphicModule", c = e => {
            let {paragraph: l} = e, {
                fieldLeaderFormattedCopy: a,
                fieldLeaderEyebrow: n,
                fieldLeaderHeadline: r,
                fieldLeaderIsFullWidth: s,
                fieldLeaderTextWBDot: c
            } = l, u = c.length > 0 ? d().circles : s ? d().fullColumn : d().halfColumn;
            return (0, t.jsxs)("div", {
                className: "".concat(d().root, " ").concat(u, " container"),
                children: [(0, t.jsxs)("div", {
                    className: "default-grid",
                    children: [(0, t.jsx)("div", {
                        className: "col-span-4 md:col-span-12 lg:col-span-9 lg:col-start-4",
                        children: n && (0, t.jsx)("div", {className: d().eyebrow, children: n})
                    }), (0, t.jsx)("div", {
                        className: "col-span-4 md:col-span-12 lg:col-span-".concat(s ? 8 : 4, " lg:col-start-4"),
                        children: r && (0, t.jsx)("h2", {
                            className: i()(d().headline, s && d().headlineFullWidth),
                            children: (0, o.ZP)(r)
                        })
                    }), (0, t.jsx)("div", {
                        className: "col-span-4 md:col-span-12 lg:col-span-".concat(s ? 9 : 4, " lg:col-start-4"),
                        children: (null == a ? void 0 : a.value) && (0, t.jsx)("div", {
                            className: i()(d().copy, "zscaler-wysiwyg"),
                            children: (0, o.ZP)(a.value)
                        })
                    })]
                }), (null == c ? void 0 : c.length) > 0 && (0, t.jsx)("div", {
                    className: i()(d().dotItemsContainer, "default-grid"),
                    children: c.map((e, l) => {
                        var a, o, n, i;
                        return (0, t.jsxs)("div", {
                            className: "".concat(d().dotItem, " col-span-4 lg:col-span-3 lg:col-start-").concat(3 * l + 4),
                            children: [(0, t.jsx)("div", {className: "".concat(d().dotBg, " ").concat(d()[e.entity.fieldTextWBDotDotSize], " ").concat(d()[e.entity.fieldTextWBDotDotColour])}), (null == e ? void 0 : null === (a = e.entity) || void 0 === a ? void 0 : a.fieldTextWBDotEyebrow) && (0, t.jsx)("p", {
                                className: d().dotEyebrow,
                                children: e.entity.fieldTextWBDotEyebrow
                            }), (null == e ? void 0 : null === (o = e.entity) || void 0 === o ? void 0 : o.fieldTextWBDotHeadline) && (0, t.jsx)("h3", {
                                className: d().dotHeadline,
                                children: e.entity.fieldTextWBDotHeadline
                            }), (null == e ? void 0 : null === (n = e.entity) || void 0 === n ? void 0 : n.fieldTextWBDotCopy) && (0, t.jsx)("p", {
                                className: d().dotCopy,
                                children: e.entity.fieldTextWBDotCopy
                            })]
                        }, null == e ? void 0 : null === (i = e.entity) || void 0 === i ? void 0 : i.fieldTextWBDotHeadline)
                    })
                })]
            })
        };
        l.default = c
    }, 60474: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            default: function () {
                return C
            }, typename: function () {
                return f
            }
        });
        var t, o, n = a(85893), i = a(67294), r = a(46182), d = a(20346), s = a(30653), c = a(41287);

        function u() {
            return (u = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var m = function (e) {
            return i.createElement("svg", u({
                width: 28,
                height: 28,
                viewBox: "0 0 28 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, e), t || (t = i.createElement("path", {
                fill: "url(#linkedinlogofillblue_svg__pattern0)",
                d: "M.929.963H27.04v26.111H.929z"
            })), o || (o = i.createElement("defs", null, i.createElement("pattern", {
                id: "linkedinlogofillblue_svg__pattern0",
                patternContentUnits: "objectBoundingBox",
                width: 1,
                height: 1
            }, i.createElement("use", {
                xlinkHref: "#linkedinlogofillblue_svg__image0_7662_100865",
                transform: "scale(.00195)"
            })), i.createElement("image", {
                id: "linkedinlogofillblue_svg__image0_7662_100865",
                width: 512,
                height: 512,
                xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACAKADAAQAAAABAAACAAAAAAAL+LWFAAA9dElEQVR4Ae3dDZwdVX3w8f+Z3Wx2EwJEVN7El/oCWkWxiCLwQDCw2Q0QwErlQSki8Dz2Ux+1JtkNUHutwmYTUPtgbYviC63UB1p5zW4WAikViCj1U9S2xHeqBhAiSBI2L3vnPP/ZTcIuu7M7996ZOzPn/O7ns9l7Z86cc/7fc7Pnf2fmzhgp2qNSCWTXsYdKOHKI2OAQCeVgCYw+D/XH6HPR3/ojcoD+mKJ1n/4ggAACCHglYDXazTobbdL5apMY+5iYQJ/bTTpf6fNQf7duklkbfi2VSlgkmWJMoJX17bJt50KFWqJ4p+u8fmCRkOgLAggggAACjQnYJ/RD7O36wfZWmdu2TioLtjdWX+Nb55cArFh3gIQ7F+tkf6aGcar+zG08HGpAAAEEEECg8ALbtId3ithbJGhbI30LN+fR4+YmAEuH5koQflB3i5ytu/GP14Bb8giaNhFAAAEEECiIQFUPH9ynhw++KWFwnVzVGSUHTXk0JwGorG+V7TsuEmv/QqM6qCmR0QgCCCCAAALlEnhcjPmktM/+kh4iGMm669knAL2DZ+mn/T4N5PCsg6F+BBBAAAEEHBDYqHsFVsjKrpuzjCW7BGDFwHFSNas1iGOzDIC6EUAAAQQQcFLAygZpscukr/v+LOJLPwFYMXSEhOFK7eySLDpMnQgggAACCHgmcKsEQa/0dT6SZtzpJgA9g+/Vzn1ZfzrS7CR1IYAAAggg4LnAsMZ/ofR3fSMthyCdiqyR3rWf1rr+UX+Y/NNBpRYEEEAAAQT2CERz6z+OzbU656bwaLySyvp9ZHjH3+v3GaPv8/NAAAEEEEAAgUwFzC3SMfv9+k2BrY0001gC8PE1r5BZwW16lv+RjXSCbRFAAAEEEECgBgEj35dd4Rly9eJHa9hqQtH6E4CewehCPt/Un5dMqJEXCCCAAAIIINAMgSe1kbP1vID76mmsvnMAegfP1cbu1h8m/3rU2QYBBBBAAIHGBaI5+G4Zm5Nrrq32PQBjn/yjyb+t5tbYAAEEEEAAAQTSFtipFb6r1j0BtSUA0TH/1uC72hCf/NMePupDAAEEEECgfoEnZSR8Wy3nBCQ/BBCd7R+d8MfkX//wsCUCCCCAAALZCLxkdI6O5uqEj4QJgH7nMPqqH2f7J2SlGAIIIIAAAk0WiObosa/lJ9q7n+x2vL3H6kV+7CVNDoXmEEAAAQQQQKA2gSPkhJ+2yn3/cM9Mm82cJYxd3je6wh8PBBBAAAEEECiHwLkzXTZ4+gRg7MY+39NYubxvOQacXiKAAAIIIBAJDOsNhN463Q2Epj8HYOyufkz+vJkQQAABBBAol0DH7jvzxvY6fg/AioHjJDR1XV0otjVWIIAAAggggEDzBAJ7vPR13z9Vg/F7AKpm9VQbsAwBBBBAAAEESiIwzVw+dQLQO3iWGDm2JOHRTQQQQAABBBCYSiCay6M5fYrH5EMAlfWtMrz9h1r28CnKswgBBBBAAAEEyiWwUTra36i3Dx4Z3+3JewC277hICzD5j1fiOQIIIIAAAuUVOFzG5vYJEUzcA7B0aK60hD/REgdNKMULBBBAAAEEECizwONSDV4jV3Vu2xPExD0AQfhBXcHkv0eH3wgggAACCLghcJCMzfF7o3lBAiBn713DEwQQQAABBBBwRyCYOMc/fwhgxboDJNz1hEaa7P4A7pAQCQIIIIAAAj4IVCWYdaD0LdwcBfv8HoBw52J9zeTvw1uAGBFAAAEEfBRokbG5fjT25xMAMWf6qEHMCCCAAAII+CPw/Fw/dgigsr5dv/v/lALM9QeBSBFAAAEEEPBOYJteE+DFek2A7WN7ALbtXKgETP7evQ8IGAEEEEDAM4G5Mjbn7z4HwIRLPAMgXAQQQAABBPwU2D3nG6lUAhk+ZpOIOdBPCaJGAAEEEEDAJwH7hHR855BAdh17KJO/TwNPrAgggAACfgvoB36d+wMJRw7xG4LoEUAAAQQQ8ExA5/5AbEAC4Nm4Ey4CCCCAgOcCOvfrHgA52HMGwkcAAQQQQMAvAZ37AwkMewD8GnaiRQABBBDwXUDnfj0EEJIA+P5GIH4EEEAAAb8EdO7XBMBwCMCvYSdaBBBAAAHfBXTu10MAwh4A398IxI8AAggg4JeAzv26B4AEwK9RJ1oEEEAAAe8FdO6P7gVwgPcQACCAAAIIIOCXwAFRAjB2R0C/AidaBBBAAAEEfBYwY3cD9JmA2BFAAAEEEPBQgATAw0EnZAQQQAABBEgAeA8ggAACCCDgoQAJgIeDTsgIIIAAAgiQAPAeQAABBBBAwEMBEgAPB52QEUAAAQQQIAHgPYAAAggggICHAiQAHg46ISOAAAIIINAKQSkFNunlm36sl3HerL+3iFj9MVv0xk5b9fUOCe0+umyeLtMfmSfB6POXa/nX6uuOUkZMpxFAAAEEUhUgAUiVM/XKhrXG+3VSv19/b5Sq2ShzZ/9IKgu21teSNdKz7jAx1ddpMnC4WHukGLtAE4UoMeCBAAIIIOCRgE4Ig9ajeIsealU7uEEn5HskDO+RuVs3SOWcnZl3evnAyzTJOFmMOVkTg4Xa3qGZt0kDCCCAAAK5CpAA5Mq/u3Ej39dJ/3qpVr8uqxc/nm+XdC9B79oTde/A+dqnP9S+RIcReCCAAAIIOCZAApDbgJpn9Dj9V/ST/vU66f97bt2YruGP3dghbfuepf38gBaL9gzwQAABBBBwRIAEoOkDaZ8QCT4jdsffyKolevJeSR69Q38gNrxUe6sJgR4w4IEAAgggUGoBEoBmDZ+RR/Us/dXSMfs6PYlve7OaTb2dFQNvkNCs0HrP1Z+W1OunQgQQQACBpgiQAGTPrGfym09Lx7NXNeWEvuzjGWvh0qE36uGLL+hJgyc0q0naQQABBBBIT4AEID3LyTUZe4dO/h+WlV2/mLzShSV6wuDytefrAYHVGs1LXIiIGBBAAAFfBLgSYDYj/Sud+M+Uld2nuzv5R3DGyqqur+l1BfSaAnJtNpTUigACCCCQhQB7ANJWjT71m7YLpG/h5rSrLnx9PWuXjH6zQWR+4ftKBxFAAAHPBdgDkN4bYJdeSGepfuI/w8vJP3LsX3SrjIRH6Z6BB9NjpSYEEEAAgSwESABSUbX/rRfO+R+yctHVo7vFU6mzpJVcvfhRefrFJ6iHWvBAAAEEECiqAAlA4yPzsN585+2yqvvbjVflSA3XHr1LPZbqeQEXaUTR5Y15IIAAAggUTIAEoJEBMXKvSOuJ+V++t5EgMtx2Vdd1ukfk3dpCea97kCEPVSOAAAJ5CpAA1K9/s7S3L5L+U35XfxUebBmdFyBhp0aKkwfDTYgIIFAeARKAesbKyN/Lz7a8p9RX9Ksn7nq36V/8r7on4ETd/Ol6q2A7BBBAAIF0BUgAavdco5/8L5SbzuHYdi12/YselkAW6ybP1bIZZRFAAAEEshEgAajN9QHpGDlHP/mP1LYZpUcF+ro26Fclo3MCdiGCAAIIIJCvAAlAcv//0CvenSaV0/kEm9xscsmVi9bq4YALdIWdvJIlCCCAAALNEiABSCb9lLQGXbLyNI5hJ/OavlT/ohs0Cbh8+kKsRQABBBDIUoAEYGZd/aRqz5crOn85c1FKJBbo7+zTsncmLk9BBBBAAIFUBUgAZuS0q6W/e3DGYhSoUUBvJFQN3q8bPVbjhhRHAAEEEEhBgARgekQ96a/jsumLsLZugas6f6M3FHyfbh/WXQcbIoAAAgjUJUACEM/2rB73fy9n/McDpbJmZfc9YqQ/lbqoBAEEEEAgsQAJQCyV+QTH/WNx0l2xY8untMKfp1sptSGAAAIITCdAAjC1zsPys2c/P/UqlqYu8NlzhvVbAR9OvV4qRAABBBCIFSABmExj9Yp1H+JKf5NhMl3Sv2iNJgG3ZNoGlSOAAAII7BUgAdhLsffJlyW6Yh2PHARaPqKNcqGlHORpEgEE/BMgAZg45jvEtnxi4iJeNU2g/5T/1usD/nXT2qMhBBBAwGMBEoDxg2/la7Lq1E3jF/G8yQKts67WFvWcAB4IIIAAAlkKkAA8r1uVoMrX0Z73yOfZlQuf0Ia/lE/jtIoAAgj4I0ACsGesjXxDr/X/sz0v+Z2jQGuwWlvfmWMPaBoBBBBwXoAEYM8QB8HKPU/5nbPA2H0X/j7nXtA8Aggg4LQACUA0vFY2yJWdP3R6pMsWXBB+sWxdpr8IIIBAmQRIAKLRMnryH49iCfQtflAzsx8Xq1P0BgEEEHBHgARAZIfs2P7/3BlShyKxAYcBHBpOQkEAgWIJkACI3C6fO+uZYg0LvRkVCEa+jgQCCCCAQDYCJABir8+GllobFhj7VsYDDddDBQgggAACkwR8TwB2Skf17kkqLCiSwGCROkNfEEAAAVcE/E4AjDwoldO59nyh383BPYXuHp1DAAEESirgdwIgwuRS9DduR9t3tItbi95N+ocAAgiUTcDvBMCGJABFf8dWFozo9zS/VfRu0j8EEECgbAI+JwDD0rHt22UbMD/7S6Lm57gTNQIIZCngcwLwA6mcw/Xms3x3pVW3Df4traqoBwEEEEBgTMDjBMA8wpugJAKtwliVZKjoJgIIlEfA4wRANpZnmDzv6ZWLHlOBZz1XIHwEEEAgVQF/EwBr+VSZ6lsp88pI2DInpgEEEPBJwN8EoIUEoFRvdMNhgFKNF51FAIHCC/ibAMzu+FnhR4cOjhdgvMZr8BwBBBBoUMDXBGCnVBZsb9COzZsr8LvmNkdrCCCAgNsCviYAW9weVhejM4yZi8NKTAggkJsACUBu9DRcm0BIAlAbGKURQACBaQVIAKblYWVhBAx7AAozFnQEAQScECABcGIYPQhihATAg1EmRAQQaKKArwmAr3E38a2VdlMhY5Y2KfUhgIDXAr7+UZ3n9aiXMvgWxqyU40anEUCgqAKeJgCWyaSo78i4frWEjFmcDcsRQACBOgQ8TQAMk0kdb5acN2HMch4AmkcAAbcEPE0AZB+3htGHaEjafBhlYkQAgeYJ+JoAzJKlQ3Obx0xLDQtYu3/DdVABAggggMBeAV8TAJEW+5q9CjwpgwDjVYZRoo8IIFAaAX8TABMeUZpRoqMqYBgv3gcIIIBAigL+JgAhE0qK76OMq7JGxB6ecSNUjwACCHgl4G8CYIRPlGV5q3984OXa1Y6ydJd+IoAAAmUQ8DcBYJdyGd6fY31sDUjWyjNa9BQBBEoi4HECYH9fKuv5OmAZ3qhW3lGGbtJHBBBAoEwCHicAMkuGh08o02B521djTvY2dgJHAAEEMhLwOQHQ88rMgoxcqTYtgY/dqMf+LXsA0vKkHgQQQGC3gN8JgBE+WRb9v8LsfY/TLrYVvZv0DwEEECibgN8JgMhR0nvH/LINml/9tSRpfg040SKAQJMEfE8AAgmD7iZZ00w9AlZOq2cztkEAAQQQmF7A9wRALzBn3j89EWtzE1g6eKS2/abc2qdhBBBAwGEBEgCRhXLp2oMdHuPyhtYiJGflHT16jgACBRcgAdDbAkk1PK/g4+Rf9yqV6L15rn+BEzECCCDQHAESgFFnc35zuGklscBzb4++onlo4vIURAABBBCoSYAEYIzrTdIz9M6a5CicrYCR/51tA9SOAAII+C1AArBn/G142Z6n/M5ZYPkdr9cenJ1zL2geAQQQcFqABGDP8BrplmVr3rLnJb9zFAhaomSM92aOQ0DTCCDgvgB/ZMePcRCwF2C8Rx7Pe9e+Rqy8N4+maRMBBBDwSYAEYOJony0rhrj17EST5r6yskIbbGluo7SGAAII+CdAAjBxzAOx1dUTF/GqaQI9a9+sN/7546a1R0MIIICAxwIkAC8cfGtOk+WDZ7xwMa+zFrBGJ/8vaCt8+s+amvoRQAABFSABmOptYOSvZPQ2tFOtZFkmAsuHLtB6+SpmJrhUigACCEwWIAGYbBIteaW0zbt06lUsTV0guiOjsf2p10uFCCCAAAKxAiQAsTSyTC4demP8atakJmBbovMuXpJafVSEAAIIIDCjAAlAPNFsvUfATbJ0aG58EdY0LNA7GF3v/4MN10MFCCCAAAI1CZAATM91hLSEfzt9EdbWLbDsztfqd/7/ru7t2RABBBBAoG4BEoCZ6d4nvWsvmrkYJWoS+PDAbAnCG3WbeTVtR2EEEEAAgVQESACSMFp7jfQOHJWkKGUSCnSY/6tf++PSywm5KIYAAgikLUACkEy0XawZ0PMBXpWsOKWmFVg+cJkYuWTaMqxEAAEEEMhUgAQgOe9B0lIdkhUDnK2e3GxyyZ6Bi8WYT09ewRIEEEAAgWYKkADUpG1eK6HuCais36emzSg8JtA7eJaI+Rs4EEAAAQTyFyABqH0Mjpbh7TdL5fY5tW/q8Ra9A6fqGf83qACX+vX4bUDoCCBQHAESgPrGYqEMt94tH1v7ovo292yr3oE/0nMobteo2z2LnHARQACBwgqQANQ/NO+QNvstWT7wsvqr8GDL5Wv/VCf/6JN/mwfREiICCCBQGgESgMaG6g16TPsBWX7H6xurxtGtewY/pdf4v0aj433m6BATFgIIlFeAP8yNjp2Rw8S0bNCLBb270aqc2b7nrv2kZ+CfNJ7LnYmJQBBAAAHHBEgA0hnQ/cTaf9KLBV0j0RXufH4sX3O0yMj3dM8ICZHP7wNiRwCBwguQAKQ5RNb8qczRQwLLBl6dZrWlqatn7UfEBPdrf3+vNH2mowgggICnAkZ6Bq2nsWcZ9hbdI/AJmdPxeaksGMmyoULUHd3UJ6h+XvtyaiH6QycQQAABBGYUIAGYkaihAj/Qrf9E+rvua6iWom78sRs7ZPa+l2mys1S76Pehj6KOEf1CAAEEYgRIAGJgUlxs9br310swq0euXPhEivXmW1XP2iV6M5/PaSdemW9HaB0BBBBAoB4BEoB61OrbZlgTgS9Ky8gqueL0X9dXRQG26hk4XU/w+3PtydsK0Bu6gAACCCBQpwAJQJ1wDWy2Uy+J+1UJg5VyVefPG6iniZtaI8sH36038Ym+1vfmJjZMUwgggAACGQmQAGQEm6Da6OTA2/X4+fXyzEvXyLVH70qwTXOL9Nz1cpHq+3RX/x9rw69rbuO0hgACCCCQpQAJQJa6yeverFfM+0fdtX69rOz6bvLNMii5/NZ5ErS9W/dSnK+1n6Q/JoNWqBIBBBBAIGcBEoCcB2CK5n+lc+49umfgHpkV3CNXdP5yijLpLbrkoVky/8m366f8k3UX/8k68b9DK+eM/vSEqQkBBBAopAAJQCGHZUKnfqKfwe+XUDbq0o3SGvxI2tp+otcX2D6hVJIXl647UKo7DtdLF79OE4zDdZMj9ec4/ZmbZHPKIIAAAgi4I0ACUM6xDDUp+KV+WtdDB7JFP71vkdBs0U/wW8WEO/Tue/vosnm6J2GeltHf+tyYwzTU/coZLr1GAAEEEEhboDXtCqmvKQKBTuyv0JZeob/1oYfpR4/U6ws9YX/ssfv36K89y3av4hcCCCCAgPcC3AvA+7cAAAgggAACPgqQAPg46sSMAAIIIOC9AAmA928BABBAAAEEfBQgAfBx1IkZAQQQQMB7ARIA798CACCAAAII+ChAAuDjqBMzAggggID3AiQA3r8FAEAAAQQQ8FGABMDHUSdmBBBAAAHvBUgAvH8LAIAAAggg4KMACYCPo07MCCCAAALeC5AAeP8WAAABBBBAwEcBEgAfR52YEUAAAQS8FyAB8P4tAAACCCCAgI8CJAA+jjoxI4AAAgh4L0AC4P1bAAAEEEAAAR8FSAB8HHViRgABBBDwXoAEwPu3AAAIIIAAAj4KtPoYNDEjgAACTRDYKWJ+KmKf1ra26O+tYsxWsbJ19LWNXgf6E24Rq78DfR2GUZktUm3dKrP0+bDskFlBuwQ727Vsu4xEz40+r+qP/q5Ku9Y1T7c9SOvQH3ugGDlI29UfXSYyX394IDClAAnAlCwsRAABBBIL/FZLPqKT7iNi7CM6CT8iYesj8otnfiY3nVNNXEsWBSs3tsmWuQdLS+vrtG9v0L69QROEN2hT0c+LsmiSOssjYKRn0Janu/QUAQQQyEUg+jv5c/30rpN8NNlHk3zwiLSGj0hf95O59KjRRpcOvVT7HyUFb9Lk5Z1a3Qn6c2ij1bJ9eQRIAMozVvQUAQSaK/A7be4usWZAbHVQVi9+vLnN59Ba7+ArNck5Xlve8xPtKTA59IQmmyBAApAu8r/pJ4PbRIKH9Q/Gr/X/zeOaXY+k20QBa2uVffX44yESmsP0T8VCNThNe+nq7sXNGuMdGuvd+ofyFzo5/ErMyHABRyWbLgVtbRKMHDo21uEJanCGvs9fnk1jOdRq7Q91fAck1J+5HfdLZYH7/3+nY16x7gCpjnSrydn6/7pTi3ZMV5x15RIgAWh8vEL9j/E1PSHnL2Vl1y8ar86BGt5zY4u8ap+z1OQKjeZ1DkQUhfCcTnYr5Odb/jr347pFA+1Zu0T/D/ytdis66axsj206uUXJ3IC0BgNyRecvyxZA0/q7dGiuBNUuTfjOVrPF2u6+TWubhjIRIAFojPUHIuF50r9Yf/OYJFBZ3yrbt39Y/7iu0nVlPuH0AQlbLpDVp/54UowsGBOIPimGuz6vL95bAhJN2uUWPSnu72Sb3CvXdO8oQZ+L1cXo5MLhfXSPgLlYO9atPy3F6iC9SSJAApBEaaoyRm6T9vbzdBdh9JUeHtMJ9A6epEnAP2mRA6YrVsB10d6dHun4zmekUokmDR4zCSwf+EPd83OdFivip8Po/+pX9Ct0n5OVp/1splBYn1DgsqHDZCS8REtfpD9l3AuUMFD3ipEA1DOmo5P/g2cxKdSA17P2zTqZPqBbzKlhq7yLflb6u/4s706Urv2egfP1k+HXCtTvX2l/rpEdw9fK5856pkD9cqsrlzw0S/b/zRJNAD+kgZ3sVnBuRkMCUPu4/kA62t/JJ//a4aR38D26J+DGOrbMY5ONsnPLUfLZc/w5wS9N5d7BW3Ws9QTBXB96Uq75jDz94pvk2qN35doT3xpfvvYYPcTyKQ37VN9CL1O8JAC1jZbuBg7fwjH/2tAmlO4dvF4nhvdPWFa8F1X99sbxsqr728XrWkl6tGzNQRIEP9TeNv+wT7SHrmo/I6u77y2Jlrvd7Bk8Xk8Y/LT+nz/R3SDLGxn3Aqhp7PRsf074q0lsUmHberku2z5peZEWWPs5Jv8GB2TsO/MfbbCWWjf/kU42C/TbOEuY/Guly6h8f9d9Oh7ROUD69WAhoc6Iud5qSQBqkYu+6sejMYH+U/5bP11/tbFKst7afDHrFryov2NLdLjn2SbEGl1z/y/lOXukTjb/0oT2aKJWgVVdd+v5NMfqeUB/rJuW88qJtcZcgvIkAMkH6d/4nn9yrGlLBsE/T7s+35WPyKqujfl2wZHWK+foxKzfr8/0Yf5VDzW8WfoX/QVf58sUOp3K+7uvl53mCN0j8CWtkMvQp6Nady0kAInpoiv88UhF4Lcvjo7NRpdZLeDDfKeAnSpvl4x5KKPOP61nm18s/Z0nSV/nIxm1QbVZCHx20W81yb5Y72CoV5LUKy/yyE2ABCAxvV7el0c6AmNnZP9XOpWlXIsRrgSXKqndlGp1o5XZG6QaHCErF+mnSMOnyPSBm1NjX/f9MqfjqN3fFuA6G81Rn9BKma/ONiGQzF+MXts/81Y8asBG90ooXrxWHitep0rco1B+k94wm2f0U+N5eve9jA8rlNi7bF0fu9fCJ2T54L2aCHxd/yYcWLYQytxf9gAkHj29sQ+PFAUK6mkk3/u3pyhciKqC1Dx/oruL3yF9XUz+hRjYlDsRnSQY2rdorfekXDPVTSNAAjANzoRVPtzVb0LAWb/w4C6JWRN6U390ot+sd3BypuMDHn11tOPBU3SP0Sc1Ug4JNGG4SQCagEwTCCBQt8BXpePZU6Rv4ea6a2DD8ghE99xY2VXRQwF6+2HhKpwZjxwJQMbAVI8AAnUJRCf3rdDvjn9Axr5OWFclbFRSgf5Feilpe7L2/qmSRlCKbpMAlGKY6CQCXgk8p1/xe49O/iu9ippgJwpEl+IOW96pC386cQWv0hIgAUhLknoQQCAFAfuE2PBE/YpfkS8WlUKcVJFIYPWpP9ZvfugVBIXrcyQCq60QCUBtXpRGAIHsBJ7VM8EXyarFWV08KLueU3N2An3dT0qHPUUb4FosKSuTAKQMSnUIIFCXwA49+1tv4rP43+vamo3cFqh0PystpkvfI4+6HWhzoyMBaK43rSGAwGSBqv5hP5cb+UyGYck4gSsXPSYmWKRLfjtuKU8bECABaACPTRFAIA0B+yGd/G9OoybqcFwguu9DYM/QKIt9S/GSDAMJQEkGim4i4KSAtZdLfze3X3ZycDMKKrqHgLXnau1cLKhBYhKABgHZHAEE6ha4RlZ1X1H31mzor8Cq7lv0ZsIf9hcgnchJANJxpBYEEKhN4BvSv+gjtW1CaQTGCazq+oKIvXLcEp7WKEACUCMYxRFAoGGB/5CdWy7kVr4NO1JBf/dlegLp14CoT4AEoD43tkIAgfoEhqUleK989hyu816fH1u9UKC9/SJddOcLF/N6ZgESgJmNKIEAAmkJGPmoXNn5w7Sqox4EpLJgREZGzlOJJ9GoTYAEoDYvSiOAQP0CN+nX/a6tf3O2RCBG4OrTo5sG/Z+YtSyOESABiIFhMQIIpCrwc5HWi1OtkcoQGC/Q3/UNPR/gtvGLeD69AAnA9D6sRQCBxgV2SRCeK/2n/K7xqqgBgWkEwpYP6cmlz0xTglXjBEgAxmHwFAEEshAwl0vf4gezqJk6EZggsOrUTWLCj09YxotYARKAWBpWIIBAwwJm1g+kv3N1w/VQAQJJBVZ2f1mvD3BX0uI+lyMB8Hn0iR2BrAX6Fm7m+/5ZI1P/JAFjLtFl2yYtZ8EEARKACRy8QAABBBAovcDKrl/oXoAVpY8j4wBIADIGpnoEEEAAgRwE+rs+r/cLuD+HlkvTJAlAaYaKjiKAAAIIJBcwVst+UH92JN/Gr5IkAH6NN9EigAAC/gis6tqo56DoSYE8phIgAZhKhWUIIIAAAm4IjFT7NZARN4JJNwoSgHQ9qQ0BBBBAoEgCVy9+VLvzD0XqUlH6QgJQlJGgHwgggAAC2QgEYZ9WHGZTeXlrJQEo79jRcwQQQACBJAJ9i3+kxW5MUtSnMiQAPo02sSKAAAK+CrQEV2jo0TcDeOwWIAHgrYAAAggg4L7AlZ0/1G8E3Op+oMkjJAFIbkVJBBBAAIEyC9hqtBeAx24BEgDeCggggAACfgisWvyQBjrkR7AzR0kCMLMRJRBAAAEE3BH4tDuhNBYJCUBjfmyNAAIIIFAmgf6u+7S7D5Spy1n1lQQgK1nqRQABBBAopoCRrxWzY83tFQlAc71pDQEEEEAgd4HqTdqFnbl3I+cOkADkPAA0jwACCCDQZIGVpz2tXwkcaHKrhWuOBKBwQ0KHEEAAAQQyF7Dh1zNvo+ANkAAUfIDoHgIIIIBABgJzOu7QWn+XQc2lqZIEoDRDRUcRQAABBFITqCzYrocB/jm1+kpYEQlACQeNLiOAAAIIpCBg/b5NMAlACu8hqkAAAQQQKKHAnG/fq73+dQl7nkqXSQBSYaQSBBBAAIHSCVQqod4f8IbS9TulDpMApARJNQgggAACJRQwxttvA5AAlPD9SpcRQAABBFIS6F/0sNb0nynVVqpqSABKNVx0FgEEEEAgdQFrB1OvswQVkgCUYJDoIgIIIIBAhgIt5p4May9s1SQAhR0aOoYAAggg0BSB6s5vaTsjTWmrQI2QABRoMOgKAggggEAOAquWbNFvA3w3h5ZzbZIEIFd+GkcAAQQQKIRA4N9hABKAQrzz6AQCCCCAQK4CoV2fa/s5NE4CkAM6TSKAAAIIFExgTvv92qMdBetVpt0hAciUl8oRQAABBEohMHpzINlQir6m1MnWlOqhGgQQQKC8ApUb22TrfvtLEM6XlnB/sS3zxVr9bfXM8GCzmOpTYmdtljnPPCWVc3aWN1B6Pq2A1fMAjD1p2jIOrSQBcGgwCQUBBGYQqFQC2XHMEWLNMaM/Yo/RLV4vwzJHJ/6xjcNox6gde27M7ue6zFRFhueJ9Axu0YWb9ecp/XlMi24QE9wrTx/wXbn26F26jEdZBVrCeyQ0f1nW7tfabxKAWsUojwAC5RJYOvRSCar/U4w5XSf6o7Xz+44FsHuSrz0azQIk+nnl6KZGThfR5GH+k89pcrBBE4t7NVm4V54zD8o13V4dUx71KPM/m1/6HR3HbRrC3DKHkbTvJABJpSiHAALlEaisb5ftw0v009z5YsJT9eN7M/7WzVGgd+ku5HfpYQPRfQrbpWftDWJHrpJVp/1XefA87mm0BydK4kQW+qDQjP8UPjgSIwIIFEHg0nUHSrjzchnefr5O+vtKtAc/v0e7Hkq4UEzLB6R38HaxQb/0dz6QX3doOZGAtQ/r3iISgERYFEIAAQTyFqis30eGdyyT6q6P68RftN23Rs8TOEMPE5whywfv1z0Emgh03aH9rPsYRN7cTrdv5PtOxzcuOPYAjMPgKQIIlEzgkodmyfynLtFP/J/Qnr+08L03cpxO/LfpoYH1YgfOl1Xdvyp8n33rYGi/L0G+u46aRR6d7soDAQQQKJ/A0qFX6Qlbukvdfl47X/zJf6LwAt3N/LDuETh74mJe5S6w3UTna3hxYyASgNzfbXQAAQRqFugdPEta7Pd0u+is/rI+XqTnKPyzJgFflMrt0QmEPIogMPbNjR8VoStZ94EEIGth6kcAgfQEogv29Ax8To+pf1M/+e+fXsU51mTkIhlu/Z4eFnhzjr2g6YkCXpwHQAIwcdB5hQACRRVYfus82T5vnR5D/0hRu9hAvw7Xbf9FegeOaqAONk1LwPpxIiAJQFpvGOpBAIHsBCoDevGetiH95H9Cdo3kXXN06WFzp6wYeEPePfG+fWPYA+D9mwAABBDIX+CjN+8vw+YuPV5+bP6dybwHL9aLF62T3rWvybwlGogXaCUBiMdhDQIIINAMgd475svsdt3tL9E1+315HCw2vFs+vuYVvgRcuDiv6PylHmp6pnD9SrlDHAJIGZTqEEAgJYH33Niid+W7SWv7g5RqLFE15uXSqns9ogsc8chHwNgf5NNw81olAWieNS0hgEAtAq/ap1+L63X1fX2Y18pz26/2Nfrc47byn7n3IeMOkABkDEz1CCBQh0DP2ujufXpZX88fRi7R8wEWea6QT/hWHs2n4ea1SgLQPGtaQgCBJALL1rxFv+P/pSRFvShj1SI6F4JHcwWMIQForjitIYCA1wLRhX6ClhvUoMNrh4nBHyrScs3ERbzKXCAISQAyR6YBBBBAYI/A9n0u10//r9/zkt+7Baycp1dAPB2PJgpUOQTQRG2aQgABrwWWDh6pF8Lp9dpg2uDNpzQ58uM2ddM6NGnlnO9s0pZ2Nam1XJrhHIBc2GkUAQQmCERf+WuR63TZrAnLeTFe4M3SM3TG+AU8z1CgUgm1dqdv10wCkOH7h6oRQCChwKv3vVhLlvnOfgkDbbSY/USjNbB9TQJOnwdAAlDTe4HCCCCQusDoBX/s8tTrdbPCt+pdAxe7GVoBozJunwdAAlDA9xxdQsArgd/b94803ld5FXNDwbIXoCG+Wja2bn8VkASgljcDZRFAIAMBy4l/takeIz2Dx9e2CaXrEjBufxWQBKCudwUbIYBAKgJju7PflEpdflXyPr/CzSnakD0AOcnTLAIIuC/Ap/86x/gciS6axCNbgRb7WLYN5Fs7ewDy9ad1BPwVWDFwnAbPruz63gHz5bl9uuvblK0SC1Tl2cRlS1iQBKCEg0aXEXBCwArH/hsZSCMcBmjEL8m2c0gAkjBRBgEEEEgu0LPmTXpRO77OllxsipLmNPnozftPsYJFaQlUurZoVTat6opWD3sAijYi9AcBLwSCP9MwuaxtY2M9W9pmk0Q1ZjjD1iaa/KMkwMkHCYCTw0pQCBRY4JKH9HK/5swC97BEXTMnlaizZe2qs+cBkACU9S1JvxEoq8CLnjpR96qy6zqN8TNWLXlkLEACkDEw1SOAgC8C1vLpP7WxNq+V5Xceklp1VDRZwMrvJi90Ywl7ANwYR6JAoEwCS8rU2cL3NaiyFyDLQTLufhOABCDLNw51I4DARIHeoT/QBS+buJBXDQlYIQFoCHDGjTkEMCMRBRBAAIGZBGzI7v+ZjGpfz8WUajerZQsSgFq0KIsAAgjECLD7PwamgcWHc1ngBvRm3pRzAGY2ogQCCCAwjUDvHb+na7nxzzREda5qleF9X1/ntmw2k4DlHICZiFiPAAIIzCDQwqf/GYTqX21JrOrHm37LgARgeiDWIoAAAjMJcLLaTEL1r7fmjfVvzJbTCoQkANP6sBIBBBBIIHB0gjIUqUuAPQB1sSXayHIOQCInCiGAAAJTCSxbc5AuPnSqVSxLQSCQ30+hFqqYSoBDAFOpsAwBBBBIKtDKp/+kVPWUs8LVAOtxS7INhwCSKFEGAQQQiBEI7Nti1rA4HYFZ3Bo4HcjJtYQcApiMwhIEEEAgoYC17AFISFV3sY62l9a9LRvGC8yyXAgoXoc1CCCAwAwCRkgAZiBqeHUYkAA0jDhFBbtCEoApWFiEAAIIzCxw2dBhWojJaWapxkpYjBsDjNl61RlbdU0Ys7bUi7kZUKmHj84jUAKBXdXoBkA8shYw8pKsm/CzfmM17i0uxk4C4OKoEhMCRRIIglcXqTvO9sUa9rJkN7jD2VWdX80kAPnZ0zICfghY+wo/As05yiAkAchuCKrZVZ1fzSQA+dnTMgJ+CBghAWjGSLMHIDtlyzkA2eFSMwIIuCtgSQCaNLjsAcgKOiAByIqWehFAwG2BV7odXmGi4yTArIbCCocAsrKlXgQQcFSg5679NLLoh0f2AiQA2RnzNcDsbKkZAQScFKiOcPy/aQNr2prWlH8NkQD4N+ZEjAACDQkYO7+h7dkYgUIIGA4BFGIc6AQCCJRHoMWY8nS27D210QVreGQiYNkDkIkrlSKAAAIIIFBsARKAYo8PvUMAAQS8FmAPQGbDzyGAzGipGAEEEEAAgeIKcAiguGNDzxBAAAEEEMhOgEMA2dlSMwIIIIBAgwIcAmgQMH5zDgHE27AGAQQQQAABVwUshwBcHVriQgABBFwQYA9AdqPIIYDsbKkZAQQQQACBggoYDgEUdGToFgIIIICACrAHILO3AYcAMqOlYgQQQAABBAoswCGAAg8OXUMAAQQQQCAjAcu9ADKSpVoEEEAAgcYFOATQuGFMDYY9ADEyLEYAAQQQQACBkgkEJesv3UUAAQQQmFKAuwFOycLCWAESgFgaViCAAAIIIOCuAAmAu2NLZAgggAACCMQKkADE0rACAQQQQAABdwVIANwdWyJDAAEEEEAgVoAEIJaGFQgggAACCLgrQALg7tgSGQIIIIAAArECJACxNKxAAAEEEEDAXQESAHfHlsgQQAABBBCIFSABiKVhBQIIIIAAAu4KkAC4O7ZEhgACCCCAQKwACUAsDSsQQAABBBBwV4AEwN2xJTIEEEAAAQRiBUgAYmlYgQACCCCAgLsCJADuji2RIYAAAgggECtAAhBLwwoEEEAAAQTcFSABcHdsiQwBBBBAAIFYARKAWBpWIIAAAggg4K4ACYC7Y0tkCCCAAAIIxAqQAMTSsAIBBBBAAAF3BUgA3B1bIkMAAQQQQCBWgAQgloYVCCCAAAIIuCtAAuDu2BIZAggggAACsQIkALE0rEAAAQQQQMBdARIAd8eWyBBAAAEEEIgVIAGIpWEFAggggAAC7gqQALg7tkSGAAIIIIBArAAJQCwNKxBAAAEEEHBXgATA3bElMgQQQAABBGIFSABiaViBAAIIIICAuwIkAO6OLZEhgAACCCAQK0ACEEvDCgQQQAABBNwVIAFwd2yJDAEEEEAAgVgBEoBYGlYggAACCCDgrgAJgLtjS2QIIIAAAgjECpAAxNKwAgEEEEAAAXcFSADcHVsiQwABBBBAIFaABCCWhhUIIIAAAgi4K0AC4O7YEhkCCCCAAAKxAiQAsTSsQAABBBBAwF0BEgB3x5bIEEAAAQQQiBUgAYilYQUCCCCAAALuCpAAuDu2RIYAAggggECsAAlALA0rEEAAAQQQcFeABMDdsSUyBBBAAAEEYgVIAGJpWIEAAggggIC7AiQA7o4tkSGAAAIIIBArQAIQS8MKBBBAAAEE3BUgAXB3bIkMAQQQQACBWAESgFgaViCAAAIIIOCuAAmAu2NLZAgggAACCMQKkADE0rACAQQQQAABdwVIANwdWyJDAAEEEEAgVoAEIJaGFQgggAACCLgrQALg7tgSGQIIIIAAArECJACxNKxAAAEEEEDAXQESAHfHlsgQQAABBBCIFSABiKVhBQIIIIAAAu4KkAC4O7ZEhgACCCCAQKwACUAsDSsQQAABBBBwV4AEwN2xJTIEEEAAAQRiBUgAYmlYgQACCCCAgLsCJADuji2RIYAAAgggECtAAhBLwwoEEEAAAQTcFSABcHdsiQwBBBBAAIFYARKAWBpWIIAAAggg4K4ACYC7Y0tkCCCAAAIIxAqQAMTSsAIBBBBAAAF3BUgA3B1bIkMAAQQQQCBWgAQgloYVCCCAAAIIuCtAAuDu2BIZAggggAACsQIkALE0rEAAAQQQQMBdARIAd8eWyBBAAAEEEIgVIAGIpWEFAggggAAC7gqQALg7tkSGAAIIIIBArAAJQCwNKxBAAAEEEHBXgATA3bElMgQQQAABBGIFSABiaViBAAIIIICAuwIkAO6OLZEhgAACCCAQK0ACEEvDCgQQQAABBNwVIAFwd2yJDAEEEEAAgVgBEoBYGlYggAACCCDgrgAJgLtjS2QIIIAAAgjECpAAxNKwAgEEEEAAAXcFSADcHVsiQwABBBBAIFaABCCWhhUIIIAAAgi4K0AC4O7YEhkCCCCAAAKxAiQAsTSsQAABBBBAwF0BEgB3x5bIEEAAAQQQiBUgAYilYQUCCCCAAALuCpAAuDu2RIYAAggggECsAAlALA0rEEAAAQQQcFeABMDdsSUyBBBAAAEEYgVIAGJpWIEAAggggIC7AiQA7o4tkSGAAAIIIBArQAIQS8MKBBBAAAEE3BUgAXB3bIkMAQQQQACBWAESgFgaViCAAAIIIOCuAAmAu2NLZAgggAACCMQKkADE0rACAQQQQAABdwVIANwdWyJDAAEEEEAgVoAEIJaGFQgggAACCLgrQALg7tgSGQIIIIAAArECJACxNKxAAAEEEEDAXQESAHfHlsgQQAABBBCIFSABiKVhBQIIIIAAAu4KkAC4O7ZEhgACCCCAQKwACUAsDSsQQAABBBBwV4AEwN2xJTIEEEAAAQRiBUgAYmlYgQACCCCAgLsCJADuji2RIYAAAgggECtAAhBLwwoEEEAAAQTcFSABcHdsiQwBBBBAAIFYARKAWBpWIIAAAggg4K4ACUDSsW2xc5IWpVwSgQDPJEyUQQABBDISIAFIClttPTRpUcolELC2oJ62I0HvKZJYwLQnLkrBBgWwbhBwms2Nk38XSACmGfIJq4KiTlgTelmeF0aKmQBYeVl5EEvQ01AOLkEvXenifvKxG52cqPIfIOvk3wUSgMTvLPM/Ehel4PQCH1v7Ii3w+9MXym3tK3Nr2c2GnfzDWdihat0f77QH5z03tmiVTrqSACR+s9gzRKxJXJyC8QKzZLGubI0vkOuaE2XsP3yunXCm8cC+y5lYyhBIS4h32uP06nknaJVtaVdbhPpIAJKPwqGyfOik5MUpGStg7Pti1+W/4gAZ+w+ff0/K3oMV6w4QK8eXPYxS9d/aM0vV3zJ01mFTEoBa3oDGrqylOGWnEOgdOFmXnjrFmuIssvLn7O1JYTjCXZdpLdHuUx7NEzhFVgwe27zmHG/psqHDRMwFrkZJAlDbyB4jywfOq20TSu8VuOShWXoU5aq9r4v75GTpGfqT4navBD1btjbabfqREvTUtS4GEspXORkwpWEdqV6nNe2XUm2Fq4YEoNYhMeZvpWfNm2rdjPIqMP+pv9J/jyqHhe2XZQOvLkdfC9bLpUNzJbBf0V7x9yWfoXmdtO17ZT5NO9Rqz+D/0k//pzgU0aRQ+A86iWTGBfvo37XbdE+Ak2eFzhh9vQV6Bj6su9U/VO/mOWw3V1rMV6RS4f9IrfgtYb9uQvJUq1uq5e1H9IMK31yq13Tp0Kt00zLsraw3wtHtjPQM2oZq8HfjxyUIz5S+xQ/6S5Ag8mgCHX57NCEsTVC6eEWMfEuq9gOyuvunxetcwXrUe8d8PeR/jZ74x2GyYgzNVh2LHlm16G/0kyx/55OOSc/A6ep1rRY/KOkmZS1HAtDYyG3Xza+QavBZuapzW2NVObj1srVv1V3BURa9oOTR6diaHunv/AJ/SGNGsmetfrXTRn80D4kpweL8BO4RIx+UlV2/yK8LJWj5ozfvL7M79DClPb8EvU2liyQAqTDaJ/SwwGekam7SRODnqVRZ1kqiE/1e9JsFerLfxRrCu/XHpWsnRH9IPyU/3fItuemcalmHKNV+jyV5enhHLki1XipLW2CrGFPRszJukCsXPZZ25aWur+eu/cRWz9CdJH0ax6GljqXGzpMA1Ag2c3Hz71rm+yLh4/r7Sd0FNzLzNiUvYYyeFzG6uyz69HeS/uiuYKcfmzW6ezUZ+JWO72NibbQnyI9HYPSbHLvH2spxanCYH4E7E2V0KOC7+in3P8QEm/T3Zgmtf4cHArO/flviYH3/vkY9TtCfWc6McA2BkADUgEVRBBBAAAEEXBHgDGdXRpI4EEAAAQQQqEGABKAGLIoigAACCCDgigAJgCsjSRwIIIAAAgjUIEACUAMWRRFAAAEEEHBFgATAlZEkDgQQQAABBGoQIAGoAYuiCCCAAAIIuCJAAuDKSBIHAggggAACNQiQANSARVEEEEAAAQRcEYgSAP+uAuXK6BEHAggggAAC9QnYKAGILmvKAwEEEEAAAQT8Edgc6LWQ9XrQPBBAAAEEEEDAGwGd+wO9IQIJgDcjTqAIIIAAAgiogM79ugfAcmtI3g0IIIAAAgj4JKBzvyYA0S0heSCAAAIIIICANwI69+shAEsC4M2IEygCCCCAAAIqoHN/IIFwCIB3AwIIIIAAAj4J6NyvhwBC9gD4NOjEigACCCCAgM79ugeglQSAtwICCCCAAAI+CejcH8isDb/WiwE+4VPcxIoAAggggIC/Ajrn69wfSKUSijW3+wtB5AgggAACCHgkEM35OveP3QzIBrd6FDqhIoAAAggg4K/A7jl/LAGY27ZOJbb5q0HkCCCAAAIIeCGwTcbmfP0SYPSoLNiu/945+px/EEAAAQQQQMBVgTt3z/m7E4DRMO0trkZLXAgggAACCCAQCTw/14/tAYiWBW1r9N9q9JQHAggggAACCDgnUN09148G9nwC0Ldws94a+D7nwiUgBBBAAAEEEJDROT6a63c/nk8AogWhfHPPCn4jgAACCCCAgEMCL5jjX5AABNdpqI87FC6hIIAAAggggEA0t4ejc/xei4kJwFWd28SYT+5dyxMEEEAAAQQQKL9ANLdHc/y4x8QEIFrRPvtL+u/GcWV4igACCCCAAALlFdi4e26fEMHkBKCyYERPFFgxoRQvEEAAAQQQQKCcAtGcHs3tL3iYF7x+/uXywQc0ETj2+QU8QwABBBBAAIFSCVjZIKu63jlVnyfvAdhTqsUu2/OU3wgggAACCCBQQoFp5vL4BKCv+34NlZsElXC86TICCCCAAAIqcKuMzeVTYsQnAFHxIOjVf4en3JKFCCCAAAIIIFBUgeHdc3hs/6ZPAPo6H9EtL4zdmhUIIIAAAgggUESBC2VsDo/t2/QJQLRZf9c39NoAV8TWwAoEEEAAAQQQKI5ANGdHc/cMj/hvAUzY0BrpGdLLBNszJyzmBQIIIIAAAggUSMDcIv2dZ+uF/+1MnZp5D8BoDVpRx+z369cCvz9ThaxHAAEEEEAAgRwEojk6mqsTTP5R7xLuAdgdyMfXvEJag+/qq5fsXsIvBBBAAAEEEMhf4EkZCd8mVy9+NGlXEu4B2F3dWMW6a0F2Jm2AcggggAACCCCQqUA0J59dy+Qf9aa2BCDaor/rPt1vcIE+IwmIPHgggAACCCCQn8DO0Tk5mptrfNR2CGB85T2Dx+tLPTGQwwHjWXiOAAIIIIBAkwSe1HbOHv1gXkeD9ScAUWPROQGzgtvEypF1tM0mCCCAAAIIIFCPQHTC367wjFp3+49vqvZDAOO3js4JaG8/Ts8lvGX8Yp4jgAACCCCAQFYCOudGc28NJ/xN1ZPG9gDsrVGvE9A79Cmx9rK9i3iCAAIIIIAAAukKRBf5Wdn550m/6jdd4yklALub6Bl8rz77sv50TNco6xBAAAEEEECgJoHovjwXJrnCX9JaGzsE8MJWoksPBsFbdTF3EXyhDa8RQAABBBCoT+DW0bk1weV9a6k+3T0A41teMXCcVM1q/XrCseMX8xwBBBBAAAEEEghY2SAtdtl0t/RNUEtskewSgD1N9g6epd8S6NOXh+9ZxG8EEEAAAQQQiBXYqB+eV8jKrptjS6SwIvsEIOpkZX2rbN9xkZ4k+Bf66qAU+k0VCCCAAAIIuCbwuN5995PSPvtLUlkwknVwzUkA9kSxdGiuBOEH9fqDZ+tegehCQi17VvEbAQQQQAABDwWq+mn/Pgn1wnphcJ1c1bmtWQbNTQDGR7Vi3QES7lysX2WIbjF8qv7MHb+a5wgggAACCDgqEE3yd4rYWyRoWyN9CzfnEWd+CcD4aCvr22XbzoViwiV6F8PTNSk4cPxqniOAAAIIIFBuAfuEWHO72OBWmdu2Tnfxb887nmIkAOMVKpVAdh17qIQjhyjUIbpb5GAJjD4P9cfoc9Hf+iNygP4Ur//jY+E5AggggIDrAlYD3Kyz0Sadrzbph9jHxAT63G7S+Uqfh/q7dZPM2vBrqVTCImH8f0r1WbDomFI5AAAAAElFTkSuQmCC"
            }))))
        }, _ = a(39579), p = a(22359), h = a(41659), g = a.n(h);
        let f = "ParagraphLeadershipProfileModule", v = e => {
            var l, a;
            let {paragraph: t} = e, {
                fieldLProfileModButtonCta: o,
                fieldLProfileModImage: i,
                fieldLProfileModLink: u,
                fieldLProfileModTitle: h,
                fieldLProfileModPosition: f,
                fieldLProfileModLogoLink: v,
                fieldLProfileModLogoNewTab: C,
                fieldLProfileModContent: x
            } = t, b = (0, r.Z)();
            return (0, n.jsx)("div", {
                className: "".concat(g().root, " container"), children: (0, n.jsxs)("div", {
                    className: "default-grid",
                    children: [(0, n.jsxs)("div", {
                        className: "".concat(g().image, " lg:col-span-4 lg:col-start-2 md:col-span-5 col-span-full"),
                        children: [i && (0, n.jsx)(_.Z, {
                            className: g().imageContent,
                            image: i
                        }), u && (0, n.jsx)("div", {
                            className: g().imageDownloadLink,
                            children: (0, n.jsx)(p.Z, {
                                type: "link",
                                cta: {
                                    entity: {
                                        fieldCtaCompLink: {
                                            uri: i.url,
                                            title: null == u ? void 0 : null === (l = u.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : a.title,
                                            url: {path: i.url}
                                        }, fieldCtaCompOpenInNewTab: !0
                                    }
                                },
                                download: !0,
                                ariaLabel: "leadership-portfolio-image-link",
                                size: b ? "large" : "default"
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "".concat(g().contentBlock, " lg:col-span-6 md:col-span-7 col-span-full"),
                        children: [h && (0, n.jsx)("h1", {
                            className: g().title,
                            children: h
                        }), f && (0, n.jsx)("div", {
                            className: g().position,
                            children: f
                        }), v && (0, n.jsxs)(d.Z, {
                            href: v.url.path,
                            ariaLabel: (0, c.xf)(v.url.path) ? "leadership-profile-logo-link" : "",
                            rel: "noreferrer",
                            target: C ? "_blank" : "",
                            className: g().linkedinIcon,
                            children: [(0, n.jsx)(m, {}), C && (0, n.jsx)("span", {
                                className: "sr-only",
                                children: "(opens in a new tab)"
                            })]
                        }), (null == x ? void 0 : x.value) && (0, n.jsx)("div", {
                            className: g().content,
                            children: (0, s.ZP)(null == x ? void 0 : x.value)
                        }), o && (0, n.jsx)("div", {
                            className: g().cta,
                            children: (0, n.jsx)(p.Z, {
                                cta: o,
                                type: "btn-primary",
                                ariaLabel: (0, c.xf)(o.entity.fieldCtaCompLink.url.path) ? "leadership-profile-button-cta" : ""
                            })
                        })]
                    })]
                })
            })
        };
        var C = v
    }, 93430: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            default: function () {
                return g
            }, typename: function () {
                return p
            }
        });
        var t, o = a(85893), n = a(67294), i = a(57915), r = a(20346), d = a(81536);

        function s() {
            return (s = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var c = function (e) {
            return n.createElement("svg", s({
                width: 15,
                height: 15,
                viewBox: "0 0 15 15",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = n.createElement("path", {
                d: "M.408 4.7h2.945v9.462H.408V4.7zM1.875 0a1.7 1.7 0 011.707 1.705 1.707 1.707 0 01-3.413 0C.169.77.929 0 1.875 0zM8.015 4.7v1.29h.042c.395-.75 1.353-1.53 2.789-1.53 2.976 0 3.527 1.956 3.527 4.503v5.189h-2.945V9.556c0-1.102-.02-2.506-1.53-2.506-1.508 0-1.768 1.196-1.768 2.433v4.68H5.185V4.7h2.83z",
                fill: "#2368F5"
            })))
        }, u = a(46399), m = a(43043), _ = a.n(m);
        let p = "ParagraphLightHero", h = e => {
            let {paragraph: l} = e, {
                fieldLightHeroHeadline: a,
                fieldLightHeroCtaText: t,
                fieldLightHeroLinkCta: s,
                fieldLightHeroMarketoFormId: m
            } = l, [p, h] = (0, n.useState)("initial"), g = (0, d.$G)();
            return (0, o.jsx)("div", {
                className: "".concat(_().root, " container"), children: (0, o.jsxs)("div", {
                    className: "flex justify-between flex-col lg:flex-row lg:items-center",
                    children: [(null == a ? void 0 : a.value) && (0, o.jsx)("h1", {
                        className: _().headline,
                        children: a.value
                    }), s && (0, o.jsx)("div", {
                        className: _().linkbox, children: s.map(e => {
                            var l, a, t;
                            if (!(null == e ? void 0 : null === (l = e.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : null === (t = a.url) || void 0 === t ? void 0 : t.path)) return null;
                            let {fieldCtaCompLink: {url: n, title: i}, fieldCtaCompOpenInNewTab: d} = e.entity;
                            return (0, o.jsx)(r.Z, {
                                target: d ? "_blank" : "_self",
                                rel: "noopener",
                                href: null == n ? void 0 : n.path,
                                className: _().link,
                                children: (0, o.jsxs)("div", {
                                    className: _().icon,
                                    children: [i, (null == n ? void 0 : n.path.includes("twitter.com")) && (0, o.jsx)(u.Z, {"aria-hidden": "true"}) || (null == n ? void 0 : n.path.includes("linkedin.com")) && (0, o.jsx)(c, {"aria-hidden": "true"})]
                                })
                            }, (null == n ? void 0 : n.path) + i)
                        })
                    }), (0, o.jsxs)("div", {
                        className: "flex justify-between flex-col md:flex-row md:items-center",
                        children: ["success" !== p && (null == t ? void 0 : t.value) && (0, o.jsx)("p", {
                            className: _().copy,
                            children: null == t ? void 0 : t.value
                        }), m && (0, o.jsx)("div", {
                            className: _().form,
                            children: "success" === p ? (0, o.jsx)("p", {
                                className: "py-8 text-darkGrey-100 font-bold typo-small-paragraph",
                                children: g("Thanks for subscribing")
                            }) : (0, o.jsx)(i.Z, {formID: m, onSuccess: () => (h("success"), !1), variant: "footer"})
                        })]
                    })]
                })
            })
        };
        var g = h
    }, 84220: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(46182), i = a(20346), r = a(22359), d = a(94184), s = a.n(d), c = a(39579),
            u = a(29351), m = a.n(u);
        let _ = "ParagraphLogoListsModule", p = e => {
            let {paragraph: l} = e, {
                fieldLogoListsModEyebrow: a,
                fieldLogoListsModHeadline: d,
                fieldLogoListsModCopy: u,
                fieldLogoListsModLists: _,
                fieldLogoListsModCta: p,
                fieldLogoListsModHasCards: h
            } = l, g = (0, n.Z)();
            return (0, t.jsx)("div", {
                className: s()(m().root, h && m().withCards, "container default-grid"), children: (0, t.jsxs)("div", {
                    className: "".concat(m().contentWrapper),
                    children: [a && (0, t.jsx)("div", {
                        className: "".concat(m().eyebrow, " typo-eyebrow"),
                        children: (0, o.Qc)(a)
                    }), d && (0, t.jsx)("h2", {
                        className: "".concat(m().headline, " typo-heading-4"),
                        children: (0, o.Qc)(d)
                    }), (null == u ? void 0 : u.value) && (0, t.jsx)("div", {
                        className: m().copy,
                        children: (0, o.Qc)(u.value)
                    }), (null == _ ? void 0 : _.length) > 0 && (0, t.jsx)("div", {
                        className: "".concat(m().lists), children: _.map(e => {
                            let {entity: l} = e, {fieldLogoListsListHeadline: a, fieldLogoListsListLogos: n} = l;
                            return n.length > 0 && (0, t.jsxs)("div", {
                                className: "".concat(m().listWrapper),
                                children: [a && (0, t.jsx)("h5", {
                                    className: "".concat(m().listHeadline, " typo-heading-5"),
                                    children: (0, o.Qc)(a)
                                }), (0, t.jsx)("div", {
                                    className: s()(m().logos, n.length % 8 == 0 && m().logosQuattro, 5 === n.length && m().fiveLogos),
                                    children: (null == n ? void 0 : n.length) > 0 && n.map(e => {
                                        var l, a;
                                        let {entity: n} = e, {
                                            fieldLogoListsLogoImage: r,
                                            fieldLogoListsLogoName: d,
                                            fieldLogoListsLogoLink: s,
                                            fieldLogoListsLogoNewTab: u
                                        } = n, _ = r && (0, t.jsx)("div", {
                                            className: m().logoImageWrapper,
                                            children: (0, t.jsx)(c.Z, {image: r})
                                        });
                                        return (0, t.jsxs)("div", {
                                            className: m().logoWrapper,
                                            children: [s ? (0, t.jsx)(i.Z, {
                                                href: null == s ? void 0 : null === (l = s.url) || void 0 === l ? void 0 : l.path,
                                                target: (0, o.xf)(null == s ? void 0 : null === (a = s.url) || void 0 === a ? void 0 : a.path) && u ? "_blank" : "_self",
                                                children: _
                                            }) : (0, t.jsx)(t.Fragment, {children: _}), d && (0, t.jsx)("div", {
                                                className: "".concat(m().logoName),
                                                children: (0, o.Qc)(d)
                                            })]
                                        }, d)
                                    })
                                })]
                            }, a)
                        })
                    }), p && (0, t.jsx)("div", {
                        className: m().ctaContainer,
                        children: (0, t.jsx)(r.Z, {
                            cta: p,
                            type: "btn-primary",
                            btnColor: "dark",
                            size: g ? "large" : "default"
                        })
                    })]
                })
            })
        };
        l.default = p
    }, 57353: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return c
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(39579), r = a(46182), d = a(31962), s = a.n(d);
        let c = "ParagraphLogosModule", u = e => {
            let {logos: l} = e;
            return (0, t.jsx)("div", {
                className: s().logoListContainer, children: l.map(e => {
                    var l;
                    let {entity: {fieldLogosModLogoImage: a, fieldLogosModLogoLink: o, fieldLogosModLogoNewTab: r}} = e,
                        d = (0, t.jsx)("div", {
                            className: "relative w-full h-full",
                            children: a && (0, t.jsx)(i.Z, {
                                className: "w-full h-full object-contain",
                                image: a,
                                fill: !0
                            })
                        });
                    return (0, t.jsx)("div", {
                        className: n()(s().logo, o && s().hasLink),
                        children: o ? (0, t.jsx)("a", {
                            className: "w-full h-full",
                            href: null === (l = o.url) || void 0 === l ? void 0 : l.path,
                            target: r ? "_blank" : "_self",
                            rel: "noreferrer",
                            children: d
                        }) : d
                    }, null == a ? void 0 : a.url)
                })
            })
        }, m = e => {
            let {paragraph: l} = e, {
                fieldLogosModEyebrow: a,
                fieldLogosModHeadline: o,
                fieldLogosModLogosGroups: i
            } = l, d = (0, r.Z)("lg", !1), c = (0, r.Z)();
            return (0, t.jsx)("div", {
                className: "".concat(s().root, " container default-grid"),
                children: (0, t.jsxs)("div", {
                    className: s().contentContainer,
                    children: [a && (0, t.jsx)("p", {
                        className: s().eyebrow,
                        children: a
                    }), o && (0, t.jsx)("h2", {
                        className: s().headline,
                        children: o
                    }), (null == i ? void 0 : i.length) > 0 && (0, t.jsx)("div", {
                        className: s().groupsContainer,
                        children: i.map(e => {
                            let {
                                entity: {
                                    fieldLogoGroupHeadline: l,
                                    fieldLogoGroupLogos: a,
                                    fieldLogoGroupSubgroups: o
                                }
                            } = e;
                            return (0, t.jsxs)("div", {
                                className: s().logoGroup,
                                children: [l && (0, t.jsx)("div", {
                                    className: s().groupHeadline,
                                    children: l
                                }), (null == a ? void 0 : a.length) > 0 && (0, t.jsx)(u, {logos: a}), (null == o ? void 0 : o.length) > 0 && (0, t.jsx)("div", {
                                    className: s().subgroupsContainer,
                                    children: o.map(e => {
                                        let {entity: {fieldLogoSubgroupLogos: l, fieldLogoSubgroupSubHeadline: a}} = e;
                                        return (0, t.jsxs)("div", {
                                            className: n()(s().subgroup, (c || d && (null == l ? void 0 : l.length) >= 4) && "col-span-2"),
                                            children: [a && (0, t.jsx)("div", {
                                                className: s().subgroupSubheadline,
                                                children: a
                                            }), (null == l ? void 0 : l.length) > 0 && (0, t.jsx)(u, {logos: l})]
                                        }, JSON.stringify(l))
                                    })
                                })]
                            }, JSON.stringify(a))
                        })
                    })]
                })
            })
        };
        l.default = m
    }, 6202: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893), o = a(67294), n = a(10124), i = a(32552), r = a(39498), d = a(53453), s = a(41287),
            c = a(70482), u = a.n(c), m = a(32250);
        let _ = "ParagraphMediaCoverageModule", p = e => {
            var l, a;
            let {paragraph: n, searchProps: c} = e, {fieldMediaCoverageHeadline: _} = n,
                p = (0, o.useContext)(d.GlobalContext), h = (0, o.useRef)(null);
            return (0, t.jsxs)("div", {
                ref: h,
                className: "".concat(u().root, " "),
                children: [(0, t.jsx)("div", {
                    className: "container default-grid",
                    children: _ && (0, t.jsx)("h2", {className: u().headline, children: _})
                }), (null == c ? void 0 : c.error) && (0, t.jsxs)("div", {
                    className: "container my-20 font-medium text-darkRed-100",
                    children: ["Error: ", null == c ? void 0 : c.error]
                }), !(null == c ? void 0 : null === (l = c.results) || void 0 === l ? void 0 : l.length) && (0, t.jsx)("div", {
                    className: "mb-20",
                    children: (0, t.jsx)(m.default, {paragraph: (0, s.jV)(p)})
                }), (0, t.jsx)("div", {
                    className: "container default-grid pt-20 md:pt-0",
                    children: !!(null == c ? void 0 : null === (a = c.results) || void 0 === a ? void 0 : a.length) && c.results.map(e => {
                        var l;
                        return (0, t.jsx)(i.Z, {
                            className: "col-span-full md:col-span-4 lg:col-span-4 mb-20",
                            post: e
                        }, (null == e ? void 0 : null === (l = e._meta) || void 0 === l ? void 0 : l.id) || JSON.stringify(e))
                    })
                }), (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsx)(r.Z, {className: "mb-20 -ml-12 md:ml-0 md:mb-44 md:mt-24 lg:mb-88 lg:mt-68"})
                })]
            })
        };
        l.default = (0, n.ZP)(p, {
            alwaysSearchOnInitialLoad: !0,
            searchQuery: {
                result_fields: {
                    content_type: {raw: {}},
                    title: {raw: {}},
                    url: {raw: {}},
                    date: {raw: {}},
                    background_color: {raw: {}},
                    news_source_term_name: {raw: {}},
                    news_source_term_logo: {raw: {}}
                },
                search_fields: {title: {weight: 13}},
                filters: [{field: "content_type", values: ["news"], type: "all"}],
                resultsPerPage: 6,
                sortDirection: "asc",
                sortField: "date",
                sortList: [{field: "date", direction: "asc"}]
            },
            initialState: {resultsPerPage: 6, sortList: [{field: "date", direction: "desc"}]}
        })
    }, 4128: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893), o = a(67294), n = a(41287), i = a(22359), r = a(39579), d = a(46182), s = a(50361),
            c = a.n(s), u = a(36088), m = a.n(u);
        let _ = "ParagraphMulticolumnTableModule", p = e => {
            var l;
            let {row: a, groupName: i, rowIndex: d, currentColumnIndex: s = 0} = e, c = (0, o.useRef)(), u = e => {
                let {fieldMulticolCellHelperText: l, fieldMulticolCellText: a} = e;
                return (0, t.jsxs)(t.Fragment, {
                    children: [i && 0 === d && (0, t.jsx)("div", {
                        className: m().groupNameCompact,
                        children: i
                    }), (null == a ? void 0 : a.value) && (0, n.Qc)(null == a ? void 0 : a.value), l && (0, t.jsx)("div", {
                        className: m().helpText,
                        children: (0, n.Qc)(l)
                    })]
                })
            }, _ = e => {
                let {fieldMulticolCellHelperText: l, fieldMulticolCellIcon: a, fieldMulticolCellText: o} = e;
                return (0, t.jsxs)("span", {
                    className: m().cellContent,
                    children: ["checkmark" === a && (0, t.jsx)(r.Z, {
                        image: {
                            alt: "checkmark",
                            width: 15,
                            height: 12,
                            url: "/assets/images/checkmark.svg",
                            title: ""
                        }
                    }), "cross" === a && (0, t.jsx)(r.Z, {
                        image: {
                            alt: "x",
                            width: 12,
                            height: 12,
                            url: "/assets/images/x_thick.svg",
                            title: ""
                        }
                    }), (null == o ? void 0 : o.value) && !a && (0, n.Qc)(null == o ? void 0 : o.value), l && (0, t.jsx)("div", {
                        className: m().helpText,
                        children: (0, n.Qc)(l)
                    })]
                })
            };
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: m().row,
                    style: {gridTemplateColumns: "repeat(".concat(a.length + 1, ", 1fr)")},
                    children: a.map((e, l) => (0, t.jsx)("div", {
                        className: "".concat(m().cell, " ").concat(e.highlighted && m().cellHighlighted),
                        children: 0 === l ? u(e) : _(e)
                    }, l))
                }), (0, t.jsxs)("span", {
                    className: m().rowSticky,
                    children: [(0, t.jsx)("div", {
                        className: "".concat(m().label, " ").concat(m().cell),
                        children: u(a[0])
                    }), (0, t.jsx)("div", {
                        ref: c,
                        className: m().cells,
                        style: {marginLeft: -(s * (null === (l = c.current) || void 0 === l ? void 0 : l.offsetWidth))},
                        children: a.slice(1, a.length).map((e, l) => (0, t.jsxs)("div", {
                            className: m().cell,
                            children: [e.highlighted && (0, t.jsx)("div", {className: m().cellHighlight}), _(e)]
                        }, l))
                    })]
                })]
            })
        }, h = e => {
            let {groups: l, rows: a, currentMobileColumn: o} = e;
            return (0, t.jsx)(t.Fragment, {
                children: l ? l.map(e => (0, t.jsxs)("div", {
                    className: m().groupRow,
                    children: [(0, t.jsx)("div", {
                        className: m().groupName,
                        children: e.groupName
                    }), (0, t.jsx)("div", {
                        className: m().rows,
                        children: e.rows.map((l, a) => (0, t.jsx)(p, {
                            currentColumnIndex: o,
                            groupName: e.groupName,
                            row: l,
                            rowIndex: a
                        }, a))
                    })]
                }, e.groupName)) : (0, t.jsx)("div", {
                    className: m().groupRow,
                    children: (0, t.jsx)("div", {
                        className: m().rows,
                        children: a.map((e, l) => (0, t.jsx)(p, {row: e, currentColumnIndex: o}, l))
                    })
                })
            })
        }, g = e => {
            var l, a;
            let {columns: n, groups: i, rows: s} = e, c = (0, d.Z)(), [u, _] = (0, o.useState)(0), p = (0, o.useRef)(),
                g = (0, o.useRef)();
            return !c || u >= n.length - 1 ? null : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("div", {
                    className: m().headingMobile,
                    children: [(0, t.jsx)("div", {
                        className: m().mainHeading,
                        children: n[0].entity.fieldMulticolColTitle
                    }), (0, t.jsx)("div", {
                        className: "".concat(m().columnHeading, " ").concat(n[u + 1].entity.fieldMulticolColHighlighted && m().columnHeadingHighlighted),
                        children: n[u + 1].entity.fieldMulticolColTitle
                    })]
                }), i ? (0, t.jsx)(h, {groups: i, currentMobileColumn: u}) : (0, t.jsx)(h, {
                    rows: s,
                    currentMobileColumn: u
                }), (0, t.jsxs)("nav", {
                    className: m().mobileControls,
                    children: [(0, t.jsx)("div", {
                        className: m().progress,
                        ref: p,
                        children: (0, t.jsx)("div", {
                            className: m().bar,
                            ref: g,
                            style: {left: ((null === (l = p.current) || void 0 === l ? void 0 : l.offsetWidth) - (null === (a = g.current) || void 0 === a ? void 0 : a.offsetWidth)) * (u / (n.length - 2))}
                        })
                    }), (0, t.jsxs)("div", {
                        className: m().lowerRow,
                        children: [(0, t.jsxs)("div", {
                            className: m().numColumn,
                            children: [u + 1, " / ", n.length - 1]
                        }), (0, t.jsxs)("div", {
                            className: m().arrows,
                            children: [(0, t.jsx)(r.Z, {
                                className: "".concat(m().leftArrow, " ").concat(u <= 0 && m().disabled),
                                onClick: () => _(u - 1),
                                image: {
                                    url: "/assets/images/progress_arrow.svg",
                                    width: 23,
                                    height: 12,
                                    alt: "left arrow",
                                    title: ""
                                }
                            }), (0, t.jsx)(r.Z, {
                                className: "".concat(m().rightArrow, " ").concat(u >= n.length - 2 && m().disabled),
                                onClick: () => _(u + 1),
                                image: {
                                    url: "/assets/images/progress_arrow.svg",
                                    width: 23,
                                    height: 12,
                                    alt: "right arrow",
                                    title: ""
                                }
                            })]
                        })]
                    })]
                })]
            })
        }, f = e => {
            let {rows: l, columns: a} = e;
            return (0, t.jsxs)("div", {
                className: m().variantOne,
                children: [(0, t.jsx)("div", {
                    className: "".concat(m().row, " ").concat(m().hideMobile, " ").concat(m().columnTitles),
                    style: {gridTemplateColumns: "repeat(".concat(a.length + 1, ", 1fr)")},
                    children: a.map((e, l) => (0, t.jsx)("div", {
                        className: "".concat(m().heading, " ").concat(e.entity.fieldMulticolColHighlighted && m().headingHighlighted),
                        children: (0, n.Qc)(e.entity.fieldMulticolColTitle)
                    }, l))
                }), (0, t.jsx)("div", {
                    className: m().hideMobile,
                    children: (0, t.jsx)(h, {rows: l})
                }), (0, t.jsx)("div", {className: m().showMobile, children: (0, t.jsx)(g, {columns: a, rows: l})})]
            })
        }, v = e => {
            let {columns: l, groups: a} = e;
            return (0, t.jsxs)("div", {
                className: m().variantTwo,
                children: [(0, t.jsxs)("div", {
                    className: "".concat(m().groupRow, " ").concat(m().hideMobile),
                    children: [(0, t.jsx)("div", {className: m().groupName}), (0, t.jsx)("div", {
                        className: m().rows,
                        children: (0, t.jsx)("div", {
                            className: "".concat(m().row, " ").concat(m().columnTitles),
                            style: {gridTemplateColumns: "repeat(".concat(l.length + 1, ", 1fr)")},
                            children: l.map(e => (0, t.jsx)("div", {
                                className: "".concat(m().heading, " ").concat(e.entity.fieldMulticolColHighlighted && m().headingHighlighted),
                                children: (0, n.Qc)(e.entity.fieldMulticolColTitle)
                            }, e.entity.fieldMulticolColTitle))
                        })
                    })]
                }), (0, t.jsx)("div", {
                    className: m().hideMobile,
                    children: (0, t.jsx)(h, {groups: a})
                }), (0, t.jsx)("div", {className: m().showMobile, children: (0, t.jsx)(g, {columns: l, groups: a})})]
            })
        }, C = e => {
            let {paragraph: l} = e, {
                    fieldMulticolModHeadline: a,
                    fieldMulticolModRowGroups: s,
                    fieldMulticolModColumns: u,
                    fieldMulticolModButtonCta: _
                } = l, [p, h] = (0, o.useState)(), [g, C] = (0, o.useState)(), [x, b] = (0, o.useState)(!1), y = (0, d.Z)(),
                A = s.filter(e => e.entity.fieldMulticolGroupRowSpan);
            return (0, o.useEffect)(() => {
                let e = u.reduce((e, l) => (l.entity.fieldMulticolColRows.forEach((a, t) => {
                    e[t] || (e[t] = []);
                    let o = {...a.entity, highlighted: l.entity.fieldMulticolColHighlighted};
                    e[t].push(o)
                }), e), []);
                if (h(c()(e)), null == A ? void 0 : A.length) {
                    let l = [];
                    A.reduce((a, t) => (l.push({
                        groupName: t.entity.fieldMulticolGroupTitle,
                        rows: e.slice(a, a + t.entity.fieldMulticolGroupRowSpan)
                    }), a + t.entity.fieldMulticolGroupRowSpan), 0), C(c()(l))
                }
            }, []), (0, t.jsxs)("div", {
                className: "".concat(m().root, " container"),
                children: [a && (0, t.jsxs)("div", {
                    className: "".concat(m().container, " ").concat(x && m().containerOpen),
                    children: [(0, t.jsxs)("button", {
                        type: "button",
                        className: "".concat(m().header, " ").concat(x && m().headerOpen),
                        onClick: () => b(!x),
                        children: [a, (0, t.jsx)(r.Z, {
                            image: {
                                alt: "chevron",
                                width: 10,
                                height: 5,
                                url: "/assets/images/chevron_down_black.svg",
                                title: ""
                            }
                        })]
                    }), (null == p ? void 0 : p.length) && (0, t.jsx)("div", {
                        className: m().table,
                        children: (null == g ? void 0 : g.length) ? (0, t.jsx)(v, {
                            groups: g,
                            columns: u
                        }) : (0, t.jsx)(f, {rows: p, columns: u})
                    })]
                }), (0, n.yr)(_) && (0, t.jsx)("div", {
                    className: m().contactUsButton,
                    children: (0, t.jsx)(i.Z, {type: "btn-primary", cta: _, size: y ? "large" : "default"})
                })]
            })
        };
        l.default = C
    }, 22044: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return C
            }
        });
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(88735), d = a(46182), s = a(32552),
            c = a(85187), u = a(53453), m = a(81536), _ = a(41287), p = a(10124), h = a(39498), g = a(15836),
            f = a.n(g), v = a(32250);
        let C = "ParagraphNewsFilter", x = e => {
            var l, a;
            let {paragraph: n, searchProps: g} = e, {fieldNewsFilterHeadline: C} = n,
                x = (0, o.useContext)(u.GlobalContext), b = (0, m.$G)(), [y, A] = (0, o.useState)([]);
            (0, o.useEffect)(() => {
                var e, l, a;
                if ((null === (e = null == g ? void 0 : g.facets["topic.keyword"]) || void 0 === e ? void 0 : e.length) && !y.length) {
                    let t = null === (l = null == g ? void 0 : g.facets["topic.keyword"][0]) || void 0 === l ? void 0 : null === (a = l.data) || void 0 === a ? void 0 : a.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l}
                    });
                    A(t)
                }
            }, [g]);
            let j = {showFilters: !0}, N = [{label: b("Latest"), value: "latest", defaultSelected: !0}, {
                label: b("Oldest"),
                value: "oldest"
            }, {label: b("A-Z"), value: "a-z", format: "uppercase"}, {
                label: b("Z-A"),
                value: "z-a",
                format: "uppercase"
            }], [w, I] = (0, o.useState)(""), M = (0, o.useRef)(null), k = (0, d.Z)(), B = (0, d.Z)("lg"), T = e => {
                e === w ? I("") : I(e)
            }, S = e => {
                e === w && I("")
            }, P = {
                latest: {field: "date", direction: "desc"},
                oldest: {field: "date", direction: "asc"},
                "a-z": {field: "title.keyword", direction: "asc"},
                "z-a": {field: "title.keyword", direction: "desc"}
            }, L = g.searchTerm && "_score" === g.sortList[0].field;
            return (0, t.jsxs)("div", {
                ref: M,
                className: i()(f().root, "" !== w && f().openFilter),
                children: [(0, t.jsxs)("div", {
                    className: "container default-grid",
                    children: [C && (0, t.jsx)("h2", {
                        className: f().headline,
                        children: C.value
                    }), (k || !B) && (0, t.jsx)(c.Z, {
                        value: null == g ? void 0 : g.searchTerm,
                        className: "col-span-full md:col-span-6 md:col-start-4 mb-24 md:mb-36 lg:px-68 h-32 md:h-28 lg:h-34 ",
                        placeholder: "Search Press Releases",
                        onChange: e => {
                            var l;
                            return (0, p.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, g)
                        },
                        onSubmit: e => (0, p.H_)(e, g)
                    })]
                }), (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: f().filtersContainer,
                        children: [(0, t.jsx)(r.Z, {
                            options: y,
                            buttonLabel: "All topics",
                            onClick: T,
                            isOpen: "All topics" === w,
                            onChange: e => (0, p.WB)(e, "topic.keyword", g),
                            showFilter: j.showFilters,
                            className: "md:col-span-3 lg:col-span-2",
                            onClickOutside: S,
                            variant: B ? "none" : "select",
                            singleChoice: !0
                        }), (0, t.jsx)(r.Z, {
                            options: N,
                            buttonLabel: "Sort",
                            onClick: T,
                            isOpen: "Sort" === w,
                            onChange: e => (0, p.cB)(e, P, g),
                            reset: L,
                            showFilter: j.showFilters,
                            className: "md:col-span-3 lg:col-span-2",
                            onClickOutside: S,
                            variant: B ? "none" : "select",
                            singleChoice: !0,
                            sortLabels: !1
                        }), !k && B && (0, t.jsx)(c.Z, {
                            className: "md:col-span-6 h-32 md:h-28",
                            placeholder: "Search Press Releases",
                            onChange: e => {
                                var l;
                                return (0, p.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, g)
                            },
                            onSubmit: e => (0, p.H_)(e, g)
                        })]
                    })
                }), k && (0, t.jsx)("hr", {className: "text-lightGrey-10"}), (null == g ? void 0 : g.error) && (0, t.jsxs)("div", {
                    className: "container my-20 font-medium text-darkRed-100",
                    children: ["Error: ", null == g ? void 0 : g.error]
                }), !(null == g ? void 0 : null === (l = g.results) || void 0 === l ? void 0 : l.length) && (0, t.jsx)("div", {
                    className: "mb-20",
                    children: (0, t.jsx)(v.default, {paragraph: (0, _.jV)(x)})
                }), (0, t.jsx)("div", {
                    className: f().cardsContainer,
                    children: !!(null == g ? void 0 : null === (a = g.results) || void 0 === a ? void 0 : a.length) && g.results.map(e => {
                        var l;
                        return (0, t.jsx)(s.Z, {
                            className: "col-span-full md:col-span-4 lg:col-span-4 mb-20",
                            post: e
                        }, (null == e ? void 0 : null === (l = e._meta) || void 0 === l ? void 0 : l.id) || JSON.stringify(e))
                    })
                }), (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsx)(h.Z, {className: "mb-20 -ml-12 md:ml-0 md:mb-44 md:mt-24 lg:mb-88 lg:mt-68"})
                })]
            })
        };
        l.default = (0, p.ZP)(x, {
            alwaysSearchOnInitialLoad: !0,
            searchQuery: {
                result_fields: {
                    content_type: {raw: {}},
                    eyebrow: {raw: {}},
                    background_color: {raw: {}},
                    topic_color: {raw: {}},
                    resources: {raw: {}},
                    title: {raw: {}},
                    date: {raw: {}},
                    url: {raw: {}},
                    topic: {raw: {}}
                },
                search_fields: {title: {weight: 13}},
                filters: [{field: "content_type", values: ["press"], type: "all"}],
                facets: {"topic.keyword": {type: "value", sort: "value", size: 40}},
                resultsPerPage: 6,
                sortDirection: "desc",
                sortField: "date",
                sortList: [{field: "date", direction: "desc"}, {
                    field: "title.keyword",
                    direction: "desc"
                }, {field: "title.keyword", direction: "asc"}]
            },
            initialState: {resultsPerPage: 6, sortList: [{field: "date", direction: "desc"}]}
        })
    }, 69345: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return p
            }
        });
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(41287), d = a(39579), s = a(22359),
            c = a(46182), u = a(20346), m = a(73887), _ = a.n(m);
        let p = "ParagraphNumbersModule", h = e => {
            let {paragraph: l} = e, {
                    fieldNumbersModuleVariant: a,
                    fieldNumbersModuleEyebrow: n,
                    fieldNumbersModuleHeadline: m,
                    fieldNumbersModuleSubheadline: p,
                    fieldNumbersModuleLongCopy: h,
                    fieldNumbersModuleNumbers: g,
                    fieldNumbersModuleCopy: f,
                    fieldNumbersModuleCta: v
                } = l, C = (0, c.Z)("lg", !1), x = (0, c.Z)(), b = "blue" === a, y = "center" === a, A = "right4col" === a,
                j = "blueWithText" === a;
            return (0, t.jsx)("div", {
                className: i()(_().root, b && _().blueBackground, ("right" === a || A) && _().whiteRightAligned, A && _().fourColumns, y && _().whiteCentered, b && !C && "container", j && _().blueWithText),
                children: (0, t.jsxs)("div", {
                    className: i()(_().card, b && _().blueCard),
                    children: [!C && b && (0, t.jsx)(d.Z, {
                        className: _().cloud,
                        image: {
                            url: "/assets/images/clouds/blueTilePattern.png",
                            alt: "",
                            title: "",
                            width: 261,
                            height: 1229
                        }
                    }), (0, t.jsxs)("div", {
                        className: _().contentContainer,
                        children: [!C && j && (0, t.jsx)(d.Z, {
                            className: _().cloud,
                            image: {
                                url: "/assets/images/clouds/blueTilePattern.png",
                                alt: "",
                                title: "",
                                width: 261,
                                height: 1229
                            }
                        }), n && (0, t.jsx)("p", {
                            className: _().eyebrow,
                            children: n
                        }), m && (0, t.jsx)("h2", {
                            className: _().headline,
                            children: m
                        }), (h || p) && (0, t.jsx)("h2", {
                            className: _().subHeadline,
                            children: h || p
                        }), (null == g ? void 0 : g.length) > 0 && (0, t.jsx)("div", {
                            className: _().numbersContainer,
                            children: g.map((e, l) => {
                                var a;
                                let {
                                    entity: {
                                        fieldNumberNNumber: n,
                                        fieldNumberNNumberSize: r,
                                        fieldNumberNDescription: d,
                                        fieldNumbersNSource: s,
                                        fieldNumberNColor: c,
                                        fieldLink: m
                                    }
                                } = e;
                                return (0, t.jsxs)(o.Fragment, {
                                    children: [(0, t.jsxs)("div", {
                                        className: _().number,
                                        children: [(0, t.jsxs)("div", {
                                            className: _().numberTopContainer,
                                            children: [(0, t.jsx)("div", {
                                                className: i()(_().title, _()[c], "large" === r && _().large, "medium" === r && _().medium),
                                                children: n
                                            }), (d || !j) && (0, t.jsx)("div", {
                                                className: _().description,
                                                children: d
                                            })]
                                        }), !(null == m ? void 0 : m.title) && (s ? (0, t.jsx)("div", {
                                            className: _().source,
                                            children: s
                                        }) : null), (null == m ? void 0 : m.title) && (0, t.jsx)("div", {
                                            className: _().source,
                                            children: (0, t.jsx)(u.Z, {
                                                href: null == m ? void 0 : null === (a = m.url) || void 0 === a ? void 0 : a.path,
                                                className: _().source,
                                                children: null == m ? void 0 : m.title
                                            })
                                        })]
                                    }), y && l % 3 != 2 && l < g.length - 1 && !x && (0, t.jsx)("div", {className: i()(_().numberSep, g.length > 3 && _().notVisible)})]
                                }, n + d)
                            })
                        }), (null == f ? void 0 : f.value) && (0, t.jsx)("div", {
                            className: _().copy,
                            children: (0, r.Qc)(f.value)
                        }), v && (0, t.jsx)("div", {
                            className: _().ctaContainer,
                            children: (0, t.jsx)(s.Z, {cta: v, type: "btn-primary"})
                        })]
                    })]
                })
            })
        };
        l.default = h
    }, 53496: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(30653), n = a(11163), i = a(9008), r = a.n(i), d = a(66517), s = a(81536), c = a(39579), u = a(25573),
            m = a.n(u);
        let _ = "ParagraphOfficesModule", p = e => {
            let {paragraph: l} = e, {fieldOfficesModRegions: a} = l, i = (0, n.useRouter)(),
                u = (0, s.pk)(i.defaultLocale);
            return (0, t.jsxs)("div", {
                className: m().root,
                children: [(0, t.jsx)(r(), {
                    children: a && (0, t.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {__html: JSON.stringify((0, d.df)(a, u))}
                    })
                }), (0, t.jsxs)("div", {
                    className: m().tile,
                    children: [(0, t.jsxs)("div", {
                        className: m().cloud,
                        children: [(0, t.jsx)(c.Z, {
                            image: {
                                alt: "",
                                url: "/assets/images/clouds/blueTilePattern.png",
                                width: 261,
                                height: 1229,
                                title: ""
                            }
                        }), (0, t.jsx)(c.Z, {
                            image: {
                                alt: "",
                                url: "/assets/images/clouds/blueTilePattern.png",
                                width: 261,
                                height: 1229,
                                title: ""
                            }
                        })]
                    }), (0, t.jsx)("div", {
                        className: "w-full z-10 text-darkGrey default-grid", children: a && a.map(e => {
                            var l;
                            return (0, t.jsxs)("div", {
                                className: m().regionContainer,
                                children: [(0, t.jsx)("div", {
                                    className: m().regionNameColumn,
                                    children: e.entity.fieldOfficesRegName && (0, t.jsx)("h2", {
                                        className: "typo-heading-4",
                                        children: e.entity.fieldOfficesRegName
                                    })
                                }), (0, t.jsx)("div", {
                                    className: m().regionOfficesContainer,
                                    children: (0, t.jsx)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-40 gap-x-20",
                                        children: e && (null === (l = e.entity.fieldOfficesRegOffices) || void 0 === l ? void 0 : l.map(e => {
                                            let {
                                                entity: {
                                                    fieldOfficesOffAddress: l,
                                                    fieldOfficesOffLocation: a,
                                                    fieldOfficesOffPhoneNumber: n
                                                }
                                            } = e;
                                            return (0, t.jsxs)("div", {
                                                children: [a && (0, t.jsx)("h3", {
                                                    className: "typo-heading-6 text-[1.6rem] md:text-[1.6rem] mb-20",
                                                    children: a
                                                }), (null == l ? void 0 : l.value) && (0, t.jsx)("div", {
                                                    className: "typo-paragraph text-[1.6rem] md:text-[1.6rem]",
                                                    children: (0, o.ZP)(null == l ? void 0 : l.value)
                                                }), n && (0, t.jsx)("a", {
                                                    href: "tel:".concat(n),
                                                    className: "typo-paragraph duration-300 hover:text-sky underline text-[1.6rem] md:text-[1.6rem]",
                                                    children: n
                                                })]
                                            }, a)
                                        }))
                                    })
                                })]
                            }, e.entity.fieldOfficesRegName)
                        })
                    })]
                })]
            })
        };
        l.default = p
    }, 91481: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return c
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(20346), n = a(22359), i = a(39579), r = a(41287), d = a(63907), s = a.n(d);
        let c = "ParagraphPartnersModule", u = e => {
            let {paragraph: l} = e, {
                fieldPartnersModEyebrow: a,
                fieldPartnersModHeadline: d,
                fieldPartnersModSubHeadline: c,
                fieldPartnersModLogos: u,
                fieldPartnersModPrimaryCta: m,
                fieldPartnersModSecondaryCta: _
            } = l;
            return (0, t.jsx)("div", {
                className: "".concat(s().root), children: (0, t.jsx)("div", {
                    className: "container", children: (0, t.jsxs)("div", {
                        className: "default-grid",
                        children: [(0, t.jsxs)("div", {
                            className: "col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3",
                            children: [a && (0, t.jsx)("p", {
                                role: "heading",
                                "aria-level": 2,
                                className: s().eyebrow,
                                children: a
                            }), d && (0, t.jsx)("h2", {
                                className: s().headline,
                                children: (0, r.Qc)(d)
                            }), c && (0, t.jsx)("p", {
                                className: s().subHeadline,
                                role: "heading",
                                "aria-level": 2,
                                children: (0, r.Qc)(c)
                            })]
                        }), (0, t.jsx)("div", {
                            className: "col-span-full lg:col-span-10 lg:col-start-2 ".concat(s().linkWrapper),
                            children: u.map((e, l) => {
                                var a;
                                let {
                                        entity: {
                                            fieldPartnersModLogoImage: n,
                                            fieldPartnersModLogoLink: r,
                                            fieldPartnersModLogoNewTab: d
                                        }
                                    } = e,
                                    c = (0, t.jsxs)(t.Fragment, {children: [n && (0, t.jsx)(i.Z, {image: n}), !n && r.title]});
                                return (0, t.jsxs)("div", {
                                    className: s().link,
                                    style: {maxHeight: Math.min(n.height, 75)},
                                    children: [r && (0, t.jsx)(o.Z, {
                                        href: null === (a = r.url) || void 0 === a ? void 0 : a.path,
                                        target: d ? "_blank" : "_self",
                                        children: c
                                    }), !r && (0, t.jsx)(t.Fragment, {children: c})]
                                }, "logo-".concat(l))
                            })
                        }), (m || _) && (0, t.jsxs)("div", {
                            className: "col-span-full ".concat(s().ctaWrapper),
                            children: [m && (0, t.jsx)(n.Z, {
                                cta: m,
                                type: "btn-primary"
                            }), _ && (0, t.jsx)(n.Z, {cta: _})]
                        })]
                    })
                })
            })
        };
        l.default = u
    }, 71152: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            default: function () {
                return x
            }, typename: function () {
                return v
            }
        });
        var t, o, n = a(85893), i = a(67294), r = a(94184), d = a.n(r), s = a(20346), c = a(28719);

        function u() {
            return (u = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var m = function (e) {
            return i.createElement("svg", u({
                width: 29,
                height: 29,
                viewBox: "0 0 29 29",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = i.createElement("circle", {
                cx: 14.151,
                cy: 14.616,
                r: 13.553,
                stroke: "#2368F5"
            })), o || (o = i.createElement("path", {
                d: "M9.536 12.163l4.328 4.324 4.32-4.316",
                stroke: "#2368F5",
                strokeWidth: 1.081,
                strokeLinecap: "round"
            })))
        }, _ = a(41287), p = a(22359), h = a(39579), g = a(29050), f = a.n(g);
        let v = "ParagraphPlatformModule", C = e => {
            let {paragraph: l} = e, {
                fieldPlatformMBlueBackground: a,
                fieldPlatformMEyebrowTag: t,
                fieldPlatformMHeadline: o,
                fieldPlatformMSubHeadline: r,
                fieldPlatformMImage: u,
                fieldPlatformMImageCaption: g,
                fieldPlatformMHasAccordions: v,
                fieldPlatformMCta: C,
                fieldPlatformMLinks: x
            } = l, [b, y] = (0, i.useState)([]), A = e => {
                b.includes(e) ? y(b.filter(l => l !== e)) : y(b.concat([e]))
            };
            return (0, n.jsx)("div", {
                className: d()(f().root, a && f().blueBackground, v && f().hasAccordions), children: (0, n.jsx)("div", {
                    className: "container", children: (0, n.jsxs)("div", {
                        className: f().mainContainer,
                        children: [a && (0, n.jsx)("div", {
                            className: f().bg,
                            children: (0, n.jsx)(h.Z, {
                                image: {
                                    url: "/assets/images/platformbg.png",
                                    alt: "",
                                    width: 309,
                                    height: 711,
                                    title: ""
                                }
                            })
                        }), (0, n.jsxs)("div", {
                            className: "default-grid",
                            children: [(0, n.jsxs)("div", {
                                className: f().content,
                                children: [t && (0, n.jsx)("div", {
                                    className: f().eyebrow,
                                    children: t
                                }), o && (0, n.jsx)("h2", {
                                    className: f().headline,
                                    children: (0, _.Qc)(o)
                                }), r && (0, n.jsx)("div", {className: f().subHeadline, children: (0, _.Qc)(r)})]
                            }), (0, n.jsx)("div", {
                                className: f().platformLinks, children: x.map((e, l) => {
                                    var a, t, o, r;
                                    let {
                                            entity: {
                                                fieldPlatformMLinkHeadline: u,
                                                fieldPlatformMLinkSubhead: h,
                                                fieldPlatformMLinkCtaLink: g,
                                                fieldPlatformMLinkNewTab: C,
                                                fieldPlatformMLinkContent: x
                                            }
                                        } = e,
                                        y = (null == g ? void 0 : null === (a = g.url) || void 0 === a ? void 0 : a.path) || "",
                                        j = 0 === y.indexOf("https://") || 0 === y.indexOf("http://"),
                                        N = (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsxs)("div", {
                                                className: f().linkContent,
                                                children: [u && (0, n.jsx)("h3", {
                                                    className: f().linkHeadline,
                                                    children: u
                                                }), h && (0, n.jsx)("p", {
                                                    className: f().linkSubhead,
                                                    children: h
                                                }), v && (null == x ? void 0 : x.value) && (0, n.jsx)("div", {
                                                    className: d()(f().accordionContent, b.includes(l) && f().open),
                                                    children: (0, n.jsxs)("div", {
                                                        children: [(0, _.Qc)(x.value), v && (null == g ? void 0 : g.title) && (null == g ? void 0 : null === (t = g.url) || void 0 === t ? void 0 : t.path) && (0, n.jsx)("div", {
                                                            className: f().accordionCTA,
                                                            children: (0, n.jsx)(p.Z, {
                                                                cta: {
                                                                    entity: {
                                                                        fieldCtaCompLink: g,
                                                                        fieldCtaCompOpenInNewTab: C
                                                                    }
                                                                }
                                                            })
                                                        })]
                                                    })
                                                })]
                                            }), (0, n.jsx)("div", {
                                                className: d()(f().linkIcon, v && f().chevron, !v && f().arrow, b.includes(l) && f().open),
                                                children: v ? (0, n.jsx)(m, {
                                                    "aria-hidden": "true",
                                                    focusable: "false",
                                                    alt: "chevron icon"
                                                }) : (0, n.jsx)(c.Z, {
                                                    "aria-hidden": "true",
                                                    focusable: "false",
                                                    alt: "arrow right icon"
                                                })
                                            })]
                                        });
                                    return (0, n.jsx)(i.Fragment, {
                                        children: v ? (0, n.jsx)("button", {
                                            type: "button",
                                            className: d()(f().link, b.includes(l) && f().open),
                                            onClick: () => A(l),
                                            children: N
                                        }) : (0, n.jsxs)(s.Z, {
                                            href: (null == g ? void 0 : null === (o = g.url) || void 0 === o ? void 0 : o.path) || "#",
                                            className: f().link,
                                            target: j ? "_blank" : "_self",
                                            "aria-label": u,
                                            children: [N, j && (0, n.jsx)("span", {
                                                className: "sr-only",
                                                children: "(opens in a new tab)"
                                            })]
                                        })
                                    }, (null == g ? void 0 : null === (r = g.url) || void 0 === r ? void 0 : r.path) + u)
                                })
                            }), (0, n.jsxs)("div", {
                                className: "".concat(f().platformImageWrapper, " col-span-4 md:col-span-12 lg:col-span-4 lg:col-start-9"),
                                children: [u && (0, n.jsx)(h.Z, {image: u}), g && (0, n.jsx)("p", {
                                    className: f().imageCaption,
                                    children: g
                                })]
                            }), (0, _.yr)(C) && (0, n.jsx)("div", {
                                className: f().ctaContainer,
                                children: (0, n.jsx)(p.Z, {cta: C, type: "btn-primary", size: "largeInMobile"})
                            })]
                        })]
                    })
                })
            })
        };
        var x = C
    }, 49945: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return g
            }
        });
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(41287), d = a(20346), s = a(22359), c = a(32e3),
            u = a(39579), m = a(46182), _ = a(88735), p = a(66258), h = a.n(p);
        let g = "ParagraphPortfolioCardsModule", f = e => {
            var l;
            let {paragraph: a} = e, {
                    fieldPortfolioCModToplabel: n,
                    fieldPortfolioCModViewall: p,
                    fieldPortfolioCModCta: g,
                    fieldPortfolioCModCategories: f,
                    fieldPortfolioCModCards: v = [],
                    fieldPortfolioCModShowFil: C,
                    fieldPortfolioCModFilLabel: x,
                    fieldPortfolioCModSearch: b
                } = a, [y, A] = (0, o.useState)([]), [j, N] = (0, o.useState)(""), [w, I] = (0, o.useState)(""),
                M = (0, m.Z)(), k = (0, m.Z)("lg"), B = (e, l) => {
                    let a = e.entity.fieldPortfolioCardTypes;
                    for (let t = 0; t < a.length; t++) {
                        let o = a[t].entity.tid;
                        if (l.includes(o)) return !0
                    }
                    return !1
                }, T = (e, l) => e.entity.fieldPortfolioCardTitle.toLowerCase().includes(l.toLowerCase()),
                S = (0, o.useRef)(), P = (0, o.useRef)(), L = () => {
                    setTimeout(() => {
                        (null == S ? void 0 : S.current) && S.current.scrollIntoView(!0)
                    }, 100)
                }, E = e => {
                    A(e)
                }, H = 0 === y.length ? v : v.filter(e => B(e, y.map(e => e.value)));
            H = 0 === j.length ? H : H.filter(e => T(e, j));
            let W = (l = H.length, C ? k ? 8 : 9 : l), Q = [], R = -1;
            for (let F = 0; F < H.length; F++) F % W == 0 && (Q.push([]), R++), Q[R].push(H[F]);
            let Z = (0, t.jsx)("div", {
                className: i()(h().searchBottomCTAContainer),
                children: (0, t.jsx)(s.Z, {cta: g, type: "link"})
            }), G = b && b.entity.fieldPortfolioSHeadline, O = b && b.entity.fieldPortfolioSEyebrow, D = e => {
                e === w ? I("") : I(e)
            }, z = () => {
                var e;
                N(null == P ? void 0 : null === (e = P.current) || void 0 === e ? void 0 : e.value)
            };
            return (0, t.jsxs)("div", {
                className: h().root,
                ref: S,
                children: [b && (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: "".concat(h().searchInputBlock, " is-tile relative"),
                        children: [(0, t.jsx)("div", {
                            className: h().searchInputBg,
                            children: (0, t.jsx)(u.Z, {
                                image: {
                                    url: "/assets/images/clouds/hero_light_green.png",
                                    alt: "dots pattern",
                                    width: 1400,
                                    height: 1e3,
                                    title: ""
                                }
                            })
                        }), (0, t.jsx)("div", {
                            className: "".concat(h().searchInputContent, " default-grid"),
                            children: (0, t.jsxs)("div", {
                                className: "col-span-full lg:col-start-4",
                                children: [G && (0, t.jsx)("h1", {
                                    className: h().searchHeadline,
                                    children: G
                                }), O && (0, t.jsx)("p", {
                                    className: h().searchEyebrow,
                                    children: O
                                }), (0, t.jsx)("div", {
                                    className: h().searchInputForm,
                                    children: (0, t.jsx)("input", {
                                        ref: P,
                                        type: "search",
                                        "aria-label": "Search",
                                        className: h().searchInput,
                                        onChange: () => z(),
                                        onKeyUp: () => z()
                                    })
                                })]
                            })
                        })]
                    })
                }), M && (0, t.jsxs)("div", {
                    className: i()("container flex justify-between items-center relative", h().filterWrapper),
                    children: [g && Z, (0, t.jsx)("div", {
                        className: "flex gap-10",
                        children: (0, t.jsx)(_.Z, {
                            options: [{
                                groupName: n, options: f.map(e => {
                                    let {entity: l} = e;
                                    return {value: l.tid, label: l.name, format: "unchanged"}
                                })
                            }],
                            buttonLabel: x,
                            onClick: D,
                            isOpen: w === x,
                            onChange: E,
                            onClickOutside: () => I(""),
                            showFilter: C,
                            viewAllLabel: p,
                            className: h().mobileFilters
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: i()(!M && "container default-grid"),
                    children: [!M && C && (0, t.jsxs)("div", {
                        className: i()(k ? "col-span-3" : "col-span-2", "pb-30"),
                        children: [(0, t.jsx)(_.Z, {
                            options: [{
                                groupName: n, options: f.map(e => {
                                    let {entity: l} = e;
                                    return {value: l.tid, label: l.name, format: "unchanged"}
                                })
                            }],
                            onClick: D,
                            onChange: E,
                            showFilter: C,
                            variant: "big",
                            viewAllLabel: p,
                            className: h().desktopFilters
                        }), g && Z]
                    }), (0, t.jsx)("div", {
                        className: i()(h().cardsSection, M && "container", w && h().mobileFiltersOpen),
                        children: (0, t.jsx)(c.Z, {
                            pageChange: () => L(),
                            noSearchResultsClass: h().noResults,
                            children: Q.map(e => (0, t.jsx)("div", {
                                className: h().portfolioCardsPageContainer,
                                children: e.map(e => {
                                    var l, a, o, n;
                                    let {
                                        entity: {
                                            fieldPortfolioCardCopy: i,
                                            fieldPortfolioCardLink: s,
                                            fieldPortfolioCardTitle: c,
                                            fieldPortfolioCardNewTab: u
                                        }
                                    } = e, m = (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)("div", {
                                            className: h().cardTitle,
                                            children: c
                                        }), !M && (0, t.jsx)("div", {
                                            className: h().cardCopy,
                                            children: i && (0, r.Qc)(i)
                                        })]
                                    });
                                    return (0, t.jsxs)(t.Fragment, {
                                        children: [(null == s ? void 0 : null === (l = s.url) || void 0 === l ? void 0 : l.path) && (0, t.jsx)(d.Z, {
                                            href: null === (a = s.url) || void 0 === a ? void 0 : a.path,
                                            className: h().portfolioCard,
                                            target: u && (0, r.xf)(null === (o = s.url) || void 0 === o ? void 0 : o.path) ? "_blank" : "_self",
                                            children: m
                                        }, i), !(null == s ? void 0 : null === (n = s.url) || void 0 === n ? void 0 : n.path) && (0, t.jsxs)("div", {
                                            className: h().portfolioCard,
                                            children: [" ", m, " "]
                                        })]
                                    })
                                })
                            }, JSON.stringify(e)))
                        })
                    })]
                })]
            })
        };
        l.default = f
    }, 20878: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return p
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(22359), n = a(41287), i = a(46182), r = a(99589), d = a(24002), s = a(5152), c = a.n(s), u = a(89065),
            m = a.n(u);
        let _ = c()(() => a.e(727).then(a.bind(a, 1727)), {loadableGenerated: {webpack: () => [1727]}, ssr: !1}),
            p = "ParagraphPricingModule", h = e => {
                let {paragraph: l} = e, {
                    fieldPricingModHeadline: a,
                    fieldPricingModCopy: s,
                    fieldPricingModCloudColor: c,
                    fieldPricingModPlanColumns: u,
                    fieldPricingModUseH1Tag: p,
                    fieldPricingModCta: h
                } = l, g = (0, i.Z)("lg", !1), f = (0, i.Z)("sm", !1);
                return (0, t.jsx)("div", {
                    className: "".concat(m().root), children: (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsx)("div", {
                            className: "".concat(m().cloud, " ").concat(m()[c.toUpperCase()]),
                            children: (0, t.jsx)(_, {"aria-hidden": !0})
                        }), (0, t.jsx)("div", {className: "".concat(m().bg, " ").concat(m()[c.toUpperCase()])}), (0, t.jsxs)("div", {
                            className: "default-grid",
                            children: [a && (0, t.jsx)("div", {
                                className: "col-span-full",
                                children: p ? (0, t.jsx)("h1", {
                                    className: m().headline,
                                    children: (0, n.Qc)(a)
                                }) : (0, t.jsx)("h2", {className: m().headline, children: (0, n.Qc)(a)})
                            }), (0, t.jsx)("div", {
                                className: "col-span-full ".concat(u.length > 3 ? "lg:col-span-6 lg:col-start-4 md:col-span-10 md:col-start-2" : "lg:col-span-8 lg:col-start-3 md:px-20"),
                                children: (null == s ? void 0 : s.value) && (0, t.jsx)("div", {
                                    className: "".concat(m().copy),
                                    children: (0, n.Qc)(s.value)
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "default-grid pb-50", children: [!g && u && u.map(e => {
                                let {
                                    entity: {
                                        fieldPricingPlanTitle: l,
                                        fieldPricingPlanSubtitle: a,
                                        fieldPricingPlanColor: o,
                                        fieldPricingPlanContent: i,
                                        fieldPricingPlanAddContent: r,
                                        fieldPricingPlanHighlighted: d
                                    }
                                } = e;
                                return (0, t.jsxs)("div", {
                                    className: "md:col-span-".concat(12 / u.length, " ").concat(m().planCard, " ").concat(m()[o.toUpperCase()], " ").concat(d && m().highlighted),
                                    children: [(0, t.jsxs)("div", {
                                        className: m().titleBlock,
                                        children: [l && (0, t.jsx)("h3", {
                                            className: m().plantitle,
                                            children: l
                                        }), a && (0, t.jsx)("div", {className: m().plansubtitle, children: a})]
                                    }), (0, t.jsxs)("div", {
                                        className: m().planContentBlock,
                                        children: [(null == i ? void 0 : i.value) && (0, t.jsx)("div", {
                                            className: "".concat(m().planContent),
                                            children: (0, n.Qc)(i.value)
                                        }), (null == r ? void 0 : r.value) && (0, t.jsx)("div", {
                                            className: "".concat(m().planAddContent),
                                            children: (0, n.Qc)(r.value)
                                        })]
                                    })]
                                }, "desktop-column-".concat(l))
                            }), g && (0, t.jsx)("div", {
                                className: "col-span-full sm:px-20",
                                children: (0, t.jsx)(r.Z, {
                                    slidesPerView: f ? 1.03 : 2.06,
                                    spaceBetween: 20,
                                    highlightAllVisible: !0,
                                    children: u && u.map(e => {
                                        let {
                                            entity: {
                                                fieldPricingPlanTitle: l,
                                                fieldPricingPlanSubtitle: a,
                                                fieldPricingPlanColor: o,
                                                fieldPricingPlanContent: i,
                                                fieldPricingPlanAddContent: r,
                                                fieldPricingPlanHighlighted: s
                                            }
                                        } = e;
                                        return (0, t.jsx)(d.o, {
                                            children: (0, t.jsxs)("div", {
                                                className: "".concat(m().planCard, " ").concat(m()[o.toUpperCase()], " ").concat(s ? m().highlighted : ""),
                                                children: [(0, t.jsxs)("div", {
                                                    className: m().titleBlock,
                                                    children: [l && (0, t.jsx)("h3", {
                                                        className: m().plantitle,
                                                        children: l
                                                    }), a && (0, t.jsx)("div", {className: m().plansubtitle, children: a})]
                                                }), (0, t.jsxs)("div", {
                                                    className: m().planContentBlock,
                                                    children: [(null == i ? void 0 : i.value) && (0, t.jsx)("div", {
                                                        className: "".concat(m().planContent),
                                                        children: (0, n.Qc)(i.value)
                                                    }), (null == r ? void 0 : r.value) && (0, t.jsx)("div", {
                                                        className: "".concat(m().planAddContent),
                                                        children: (0, n.Qc)(r.value)
                                                    })]
                                                })]
                                            })
                                        }, JSON.stringify(i))
                                    })
                                })
                            })]
                        }), (0, n.yr)(h) && (0, t.jsx)("div", {
                            className: m().ctaContainer,
                            children: (0, t.jsx)(o.Z, {type: "btn-primary", cta: h, size: f ? "large" : "default"})
                        })]
                    })
                })
            };
        l.default = h
    }, 61725: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(46182), i = a(22359), r = a(39579), d = a(94184), s = a.n(d), c = a(14621),
            u = a(65564), m = a.n(u);
        let _ = "ParagraphPromotionalModule", p = e => {
            let {paragraph: l} = e, {
                fieldPromoModHeadline: a,
                fieldPromoModCopy: d,
                fieldPromoModButtonCta: u,
                fieldPromoModLinkCta: _,
                fieldPromoModBackgroundImage: p,
                fieldPromoModTabletImage: h,
                fieldPromoModMobileImage: g,
                fieldPromoModVideoId: f,
                fieldPromoModCentered: v
            } = l, C = (0, n.Z)(), x = (0, n.Z)("lg", !1), b = (0, o.Bb)(p, h, null, x, !1);
            return (0, t.jsx)("div", {
                className: s()(m().root, v && m().centered, f && m().hasVideo), children: (0, t.jsx)("div", {
                    className: "container", children: (0, t.jsx)("div", {
                        className: m().tile, children: (0, t.jsxs)("div", {
                            className: "".concat(m().wrapper),
                            children: [b && (0, t.jsx)("div", {
                                className: "".concat(m().desktopImage),
                                children: (0, t.jsx)(r.Z, {image: b})
                            }), f && (0, t.jsx)("div", {
                                className: m().desktopVideoWrapper,
                                children: (0, t.jsx)(c.Z, {
                                    showOverlay: !0,
                                    videoId: f,
                                    objectfit: "cover",
                                    openInModal: !0
                                })
                            }), a && (0, t.jsxs)("div", {
                                className: "".concat(m().card),
                                children: [(g || b) && (0, t.jsxs)("div", {
                                    className: "".concat(m().mobileImage, " ").concat(g ? m().hasMobileImage : ""),
                                    children: [g && (0, t.jsx)(r.Z, {image: g}), !g && (0, t.jsx)(r.Z, {image: b})]
                                }), f && (0, t.jsx)("div", {
                                    className: m().mobileVideoWrapper,
                                    children: (0, t.jsx)(c.Z, {
                                        showOverlay: !0,
                                        videoId: f,
                                        objectfit: "cover",
                                        openInModal: !0
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "".concat(m().cardContent),
                                    children: [a && (0, t.jsx)("h2", {
                                        className: "".concat(m().headline),
                                        children: a
                                    }), d && (0, t.jsx)("div", {
                                        className: s()(m().copy, u ? "mb-40 lg:mb-30" : "mb-0"),
                                        children: (0, o.Qc)(d, !0)
                                    }), (0, t.jsxs)("div", {
                                        className: s()(m().CTAContainer),
                                        children: [u && (0, t.jsx)(i.Z, {
                                            cta: u,
                                            type: "btn-primary",
                                            size: C ? "large" : "default"
                                        }), _ && (0, t.jsx)(i.Z, {cta: _, type: "link"})]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            })
        };
        l.default = p
    }, 83084: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return c
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(79042), i = a(10166), r = a.n(i), d = a(46182), s = a(22359);
        let c = "ParagraphPyramidDiagramModule", u = e => {
            let {paragraph: l} = e, {
                fieldPyramidModEyebrow: a,
                fieldPyramidModHeadline: i,
                fieldPyramidModDesktopImage: c,
                fieldPyramidModTabletImage: u,
                fieldPyramidModMobileImage: m,
                fieldPyramidModCta: _
            } = l, p = (0, d.Z)();
            return (0, t.jsx)("div", {
                className: "".concat(r().root, " container default-grid"),
                children: (0, t.jsxs)("div", {
                    className: "".concat(r().contentWrapper),
                    children: [a && (0, t.jsx)("div", {
                        className: "".concat(r().eyebrow, " typo-eyebrow"),
                        children: (0, o.Qc)(a)
                    }), i && (0, t.jsx)("h2", {
                        className: "".concat(r().headline, " typo-heading-4"),
                        children: (0, o.Qc)(i)
                    }), (m || u || c) && (0, t.jsx)("div", {
                        className: "".concat(r().imageWrapper),
                        children: (0, t.jsx)(n.Z, {desktopImage: c, tabletImage: u, mobileImage: m})
                    }), _ && (0, t.jsx)("div", {
                        className: "".concat(r().ctaWrapper),
                        children: (0, t.jsx)(s.Z, {cta: _, type: "btn-primary", size: p ? "large" : "default"})
                    })]
                })
            })
        };
        l.default = u
    }, 31816: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return p
            }
        });
        var t = a(85893), o = a(67294), n = a(30653), i = a(94184), r = a.n(i), d = a(57915), s = a(39579),
            c = a(46182), u = a(96323), m = a(20284), _ = a.n(m);
        let p = "ParagraphRequestADemoModule", h = e => {
            let {paragraph: l} = e, {
                    fieldReqDemoModTag: a,
                    fieldReqDemoModHeadline: i,
                    fieldReqDemoModSubheadline: m,
                    fieldReqDemoModColor: p,
                    fieldReqDemoModFormId: h,
                    fieldReqDemoModImage: g,
                    fieldReqDemoModCopy: f,
                    fieldReqDemoModFormHeadline: v,
                    fieldReqDemoModFormCopy: C,
                    fieldReqDemoModSuccessLink: x
                } = l, b = (0, o.useRef)(null),
                y = (0, o.useRef)(null), [A, j] = (0, o.useState)(0), [N, w] = (0, o.useState)(0), I = e => {
                    var l;
                    let a = null == x ? void 0 : null === (l = x.url) || void 0 === l ? void 0 : l.path;
                    return !a || (setTimeout(() => {
                        (0, u.Z)(e, a, window)
                    }, 40), !1)
                }, M = () => {
                    b.current && y.current && (j(b.current.getBoundingClientRect().height), w(y.current.getBoundingClientRect().height))
                }, k = () => {
                    setTimeout(() => {
                        M()
                    }, 200)
                };
            (0, o.useEffect)(() => (M(), window.addEventListener("resize", M), () => window.removeEventListener("resize", M)), []);
            let B = (0, c.Z)();
            return (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)("div", {
                    className: "".concat(_().root, " ").concat(_()[p]), children: [(0, t.jsx)("div", {
                        style: {minHeight: B ? A + N + 40 : 0}, children: (0, t.jsx)("div", {
                            className: "container", children: (0, t.jsxs)("div", {
                                className: "".concat(_().Wrapper, " ").concat(_()[p], " is-tile"),
                                ref: y,
                                children: [(0, t.jsx)("div", {
                                    className: _().bgContainer,
                                    children: (0, t.jsx)(s.Z, {
                                        className: _().bgDotsImage,
                                        image: {
                                            url: {
                                                green: "/assets/images/clouds/hero_dark_green.png",
                                                purpleToRed: "/assets/images/clouds/hero_light_purple.png",
                                                blueToPurple: "/assets/images/clouds/hero_core_blue.png"
                                            }[p], alt: "dots pattern", width: 1400, height: 1e3, title: ""
                                        }
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: _().LeftWrapper,
                                    children: [a && (0, t.jsx)("div", {
                                        className: _().tagWrapper,
                                        children: (0, t.jsx)("span", {children: a})
                                    }), (0, t.jsx)("h1", {
                                        className: _().Headline,
                                        children: i
                                    }), (null == m ? void 0 : m.value) && (0, t.jsx)("div", {
                                        className: _().Copy,
                                        children: (0, n.ZP)(m.value)
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: _().RightWrapper,
                                    children: (0, t.jsxs)("div", {
                                        className: "".concat(_().formWrapper, " ").concat(_().Card),
                                        ref: b,
                                        children: [(0, t.jsx)("h2", {
                                            className: _().formHeadline,
                                            children: v
                                        }), (null == C ? void 0 : C.value) && (0, t.jsx)("div", {
                                            className: _().formCopy,
                                            children: (0, n.ZP)(C.value)
                                        }), (0, t.jsx)(d.Z, {formID: h, onRender: k, onSuccess: I})]
                                    })
                                })]
                            })
                        })
                    }), (0, t.jsx)("div", {
                        className: "container",
                        style: {minHeight: B ? 0 : A - N + 60},
                        children: (0, t.jsx)("div", {
                            className: "default-grid",
                            children: (0, t.jsxs)("div", {
                                className: "col-span-full md:col-span-6 md:col-start-1 lg:col-start-2 lg:col-span-5 block\n              ".concat(_().descriptionBlock),
                                children: [(0, t.jsx)(s.Z, {
                                    image: g,
                                    className: _().descriptionImage
                                }), (null == f ? void 0 : f.value) && (0, t.jsx)("div", {
                                    className: r()(_().descriptionCopy, "zscaler-wysiwyg"),
                                    children: (0, n.ZP)(f.value)
                                })]
                            })
                        })
                    })]
                })
            })
        };
        l.default = h
    }, 3305: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return x
            }
        });
        var t = a(85893), o = a(67294), n = a(88735), i = a(46182), r = a(81536), d = a(94184), s = a.n(d),
            c = a(53453), u = a(85187), m = a(41287), _ = a(11163), p = a(32552), h = a(10124), g = a(39498),
            f = a(60914), v = a.n(f), C = a(32250);
        let x = "ParagraphResourceFilterModule", b = e => {
            var l, a;
            let {paragraph: d, searchProps: f} = e, {fieldResourceFilterHeadline: x} = d,
                b = (0, o.useContext)(c.GlobalContext), y = (0, r.$G)(),
                A = (0, _.useRouter)(), [j, N] = (0, o.useState)(""), [w, I] = (0, o.useState)([]), [M, k] = (0, o.useState)([]),
                B = (0, o.useRef)(null);
            (0, o.useEffect)(() => {
                var e, l, a, t, o, n;
                if ((null === (e = null == f ? void 0 : f.facets["topic.keyword"]) || void 0 === e ? void 0 : e.length) && !w.length) {
                    let i = null === (a = null == f ? void 0 : f.facets["topic.keyword"][0]) || void 0 === a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l, defaultSelected: H === l}
                    });
                    I(i)
                }
                if ((null === (l = null == f ? void 0 : f.facets["resource_type.keyword"]) || void 0 === l ? void 0 : l.length) && !M.length) {
                    let r = null === (o = null == f ? void 0 : f.facets["resource_type.keyword"][0]) || void 0 === o ? void 0 : null === (n = o.data) || void 0 === n ? void 0 : n.map(e => {
                        let {value: l} = e;
                        return {label: l, value: l, defaultSelected: E === l}
                    });
                    k(r)
                }
            }, [f]);
            let T = (0, i.Z)("lg"), S = e => {
                    e === j ? N("") : N(e)
                }, P = e => {
                    e === j && N("")
                }, L = (0, o.useCallback)(e => {
                    var l, a, t, o;
                    let n = {};
                    return null == f || null === (l = f.facets) || void 0 === l || null === (a = l[e]) || void 0 === a || null === (t = a[0]) || void 0 === t || null === (o = t.data) || void 0 === o || o.forEach(e => {
                        let {value: l} = e, [a, t] = l.split("___");
                        n[a] = t
                    }), n
                }, [null == f ? void 0 : f.facets]), E = (0, o.useMemo)(() => {
                    if (!A.query.type) return null;
                    let e = L("resource_type_alias");
                    return e["/resources/".concat(String(A.query.type).toLowerCase())]
                }, [A.query, L]), H = (0, o.useMemo)(() => {
                    if (!A.query.topic) return null;
                    let e = L("topic_alias");
                    return e["/topic/".concat(String(A.query.topic).toLowerCase())]
                }, [A.query, L]), W = [{groupName: "Topic", options: w}, {groupName: "Type", options: M}],
                Q = {Topic: "topic.keyword", Type: "resource_type.keyword"},
                R = [{label: y("Latest"), value: "latest"}, {label: y("Oldest"), value: "oldest"}, {
                    label: y("A-Z"),
                    value: "a-z",
                    format: "uppercase",
                    defaultSelected: !0
                }, {label: y("Z-A"), value: "z-a", format: "uppercase"}], F = {
                    latest: {field: "created", direction: "desc"},
                    oldest: {field: "created", direction: "asc"},
                    "a-z": {field: "title.keyword", direction: "asc"},
                    "z-a": {field: "title.keyword", direction: "desc"}
                }, Z = () => {
                    B.current && B.current.scrollIntoView({behavior: "smooth"})
                }, G = () => {
                    let e = document.getElementById("categoryFilter");
                    if (e) {
                        let l = e.getBoundingClientRect().top + window.pageYOffset + -30;
                        window.scrollTo({top: l, behavior: "smooth"})
                    }
                },
                O = f.searchTerm && "_score" === f.sortList[0].field, [D, z] = (0, o.useState)(!1), [U, q] = (0, o.useState)(!1);
            return (0, o.useEffect)(() => {
                var e;
                D || !H || (null === (e = f.filters) || void 0 === e ? void 0 : e.length) || ((0, h.WB)([{
                    label: H,
                    value: H,
                    gourp: "Topic"
                }], "topic.keyword", f), G(), z(!0))
            }, [H, f, D]), (0, o.useEffect)(() => {
                var e;
                U || !E || (null === (e = f.filters) || void 0 === e ? void 0 : e.length) || ((0, h.WB)([{
                    label: E,
                    value: E,
                    group: "Type"
                }], "resource_type.keyword", f), G(), q(!0))
            }, [E, U, f]), (0, t.jsxs)("div", {
                id: "categoryFilter",
                ref: B,
                className: s()(v().root, "" !== j && v().openFilter),
                children: [(0, t.jsx)("div", {
                    className: "container default-grid",
                    children: x && (0, t.jsx)("h2", {className: v().headline, children: x})
                }), T && (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: s()(" relative", v().filterWrapper),
                        children: [(0, t.jsx)(u.Z, {
                            className: v().searchBar, placeholder: "Search", onChange: e => {
                                var l;
                                return (0, h.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, f)
                            }, onSubmit: e => (0, h.H_)(e, f)
                        }), (0, t.jsxs)("div", {
                            className: "flex gap-10 justify-center md:justify-start md:col-span-full",
                            children: [(null == w ? void 0 : w.length) || (null == M ? void 0 : M.length) ? (0, t.jsx)(n.Z, {
                                options: W,
                                buttonLabel: "Filter By",
                                onClick: S,
                                isOpen: "Filter By" === j,
                                onChange: e => (0, h.WB)(e, Q, f),
                                showFilter: !0,
                                className: v().filterButton,
                                onClickOutside: P
                            }) : null, (0, t.jsx)(n.Z, {
                                options: R,
                                reset: O,
                                buttonLabel: "Sort",
                                onClick: S,
                                isOpen: "Sort" === j,
                                onChange: e => (0, h.cB)(e, F, f),
                                showFilter: !0,
                                className: v().filterButton,
                                onClickOutside: P,
                                singleChoice: !0,
                                variant: "select",
                                sortLabels: !1
                            })]
                        })]
                    })
                }), (0, t.jsxs)("div", {
                    className: "default-grid container relative",
                    children: [!T && (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)("div", {
                            className: "col-span-9 col-start-4 relative mb-30 flex gap-20 justify-between items-center pl-15",
                            children: [(0, t.jsx)(n.Z, {
                                options: R,
                                buttonLabel: "Sort",
                                onClick: S,
                                reset: O,
                                isOpen: "Sort" === j,
                                onChange: e => {
                                    (0, h.cB)(e, F, f), N("")
                                },
                                showFilter: !0,
                                className: v().filterButton,
                                onClickOutside: P,
                                singleChoice: !0,
                                sortLabels: !1
                            }), (0, t.jsx)(u.Z, {
                                className: v().searchBar, placeholder: "Search", onChange: e => {
                                    var l;
                                    return (0, h.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, f)
                                }, onSubmit: e => (0, h.H_)(e, f)
                            })]
                        }), ((null == w ? void 0 : w.length) || (null == M ? void 0 : M.length)) && (0, t.jsx)(n.Z, {
                            options: W,
                            buttonLabel: "Filter by",
                            onClick: S,
                            isOpen: "Label" === j,
                            onChange: e => (0, h.WB)(e, Q, f),
                            showFilter: !0,
                            variant: "big",
                            className: "col-span-3 row-span-4 lg:-mt-25"
                        })]
                    }), (null == f ? void 0 : f.error) && (0, t.jsxs)("div", {
                        className: "container my-20 font-medium text-darkRed-100",
                        children: ["Error: ", null == f ? void 0 : f.error]
                    }), !(null == f ? void 0 : null === (l = f.results) || void 0 === l ? void 0 : l.length) && (0, t.jsx)("div", {
                        className: "mb-20 col-span-full lg:col-span-9",
                        children: (0, t.jsx)(C.default, {noPadding: !0, paragraph: (0, m.jV)(b)})
                    }), !!(null == f ? void 0 : null === (a = f.results) || void 0 === a ? void 0 : a.length) && f.results.map((e, l) => (0, t.jsx)(p.Z, {
                        className: "col-span-full md:col-span-6 lg:col-span-3 mb-20 lg:mb-40 ".concat(l % 3 == 0 ? "lg:col-start-4" : "", " ").concat(v().teaserCard),
                        post: e
                    }, JSON.stringify(e))), (0, t.jsx)("div", {
                        className: "col-span-full lg:col-start-4",
                        onClick: e => {
                            let l = e.target, a = l.tagName.toLowerCase();
                            ["li", "a"].includes(a) && Z()
                        },
                        children: (0, t.jsx)(g.Z, {className: "mb-20 -ml-12 md:mb-44 md:mt-24 lg:mb-88 lg:mt-68"})
                    })]
                })]
            })
        };
        l.default = (0, h.ZP)(b, {
            alwaysSearchOnInitialLoad: !0,
            searchQuery: {
                result_fields: {
                    content_type: {raw: {}},
                    title: {raw: {}},
                    date: {raw: {}},
                    background_color: {raw: {}},
                    topic: {raw: {}},
                    resource_type: {raw: {}},
                    resource_type_color: {raw: {}},
                    cover_image: {raw: {}},
                    video_id: {raw: {}},
                    url: {raw: {}}
                },
                search_fields: {title: {weight: 13}},
                filters: [{field: "content_type", values: ["resource"], type: "all"}],
                facets: {
                    "topic.keyword": {type: "value", sort: "value", size: 40},
                    topic_alias: {type: "value", sort: "value", size: 40},
                    "resource_type.keyword": {type: "value", sort: "value", size: 40},
                    resource_type_alias: {type: "value", sort: "value", size: 40}
                },
                resultsPerPage: 6,
                sortDirection: "asc",
                sortField: "title.keyword",
                sortList: [{field: "title.keyword", direction: "asc"}]
            },
            initialState: {resultsPerPage: 6, sortList: [{field: "title.keyword", direction: "asc"}]}
        })
    }, 56089: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(99589), r = a(24002), d = a(42893), s = a(22359), c = a(46182),
            u = a(17117), m = a.n(u);
        let _ = "ParagraphResources", p = e => {
            let {paragraph: l} = e, {
                fieldResourcesMHeadline: a,
                fieldResourcesMResources: o,
                fieldResourcesMCta: u,
                fieldResourcesMFullWidth: _
            } = l, p = (0, c.Z)("lg", !1), h = (0, c.Z)(), g = 3.3;
            return h ? g = 1.08 : p && (g = 2.125), (0, t.jsx)("div", {
                className: m().root,
                children: (0, t.jsx)("div", {
                    className: "container default-grid",
                    children: (0, t.jsxs)("div", {
                        className: n()(m().contentContainer, _ && m().cardContainerFullWidth),
                        children: [a && (0, t.jsx)("h2", {
                            className: m().headline,
                            children: a
                        }), (null == o ? void 0 : o.length) > 0 && (0, t.jsx)("div", {
                            className: m().resourcesContainer,
                            children: _ && !p ? (0, t.jsx)("div", {
                                className: m().resourceCardGridContainer,
                                children: o.map((e, l) => (0, t.jsx)("div", {
                                    className: m().resourceCard,
                                    children: (0, t.jsx)(d.Z, {showCopy: !0, resource: e})
                                }, "mobile-".concat(l, "-").concat(JSON.stringify(e))))
                            }) : (0, t.jsx)(i.Z, {
                                slidesPerView: g,
                                spaceBetween: p ? 8 : 20,
                                highlightAllVisible: !0,
                                children: o.map((e, l) => (0, t.jsx)(r.o, {
                                    children: (0, t.jsx)(d.Z, {
                                        showCopy: _,
                                        resource: e
                                    })
                                }, "".concat(l, "-").concat(JSON.stringify(e))))
                            })
                        }), u && (0, t.jsx)("div", {
                            className: m().ctaContainer,
                            children: (0, t.jsx)(s.Z, {cta: u, type: "btn-primary", size: h ? "large" : "default"})
                        })]
                    })
                })
            })
        };
        l.default = p
    }, 92218: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(42893), r = a(22359), d = a(99589), s = a(93417), c = a(24002),
            u = a(52552), m = a.n(u);
        let _ = "ParagraphResourcesWithHighlightVideo", p = e => {
            let {paragraph: l} = e, {
                fieldResHVModHeadline: a,
                fieldResHVModVideoId: o,
                fieldResHVModVideoTitle: u,
                fieldResHVModResources: _,
                fieldResHVModCta: p,
                fieldResHVModImage: h
            } = l;
            return (0, t.jsx)("div", {
                className: m().root, children: (0, t.jsx)("div", {
                    className: "tile-container", children: (0, t.jsxs)("div", {
                        className: m().tile,
                        children: [a && (0, t.jsx)("h2", {
                            className: m().headlineContainer,
                            children: a
                        }), o && (0, t.jsx)("div", {
                            className: m().videoCardContainer,
                            children: (0, t.jsx)(s.Z, {videoId: o, videoTitle: u, backgroundImage: h})
                        }), (null == _ ? void 0 : _.length) > 0 && (0, t.jsxs)("div", {
                            className: n()(m().resourcesContainer, 1 === _.length && m().oneResource, 2 === _.length && m().twoResources),
                            children: [(0, t.jsx)(d.Z, {
                                className: "block md:hidden",
                                slidesPerView: 1.03,
                                spaceBetween: 8,
                                children: _.map((e, l) => (0, t.jsx)(c.o, {
                                    children: (0, t.jsx)("div", {
                                        className: m().resourceCardWrapper,
                                        children: (0, t.jsx)(i.Z, {resource: e, imageAspect: "landscape"})
                                    })
                                }, "mobile-".concat(l, "-").concat(JSON.stringify(e))))
                            }), _.map((e, l) => (0, t.jsx)("div", {
                                className: n()(m().resourceCardWrapper, "hidden md:block"),
                                children: (0, t.jsx)(i.Z, {resource: e, imageAspect: "landscape"})
                            }, "".concat(l, "-").concat(JSON.stringify(e))))]
                        }), p && (0, t.jsx)("div", {
                            className: m().ctaContainer,
                            children: (0, t.jsx)(r.Z, {
                                cta: p,
                                type: "btn-primary",
                                ariaLabel: "resources-with-highlight-video-cta"
                            })
                        })]
                    })
                })
            })
        };
        l.default = p
    }, 62059: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            default: function () {
                return I
            }, typename: function () {
                return N
            }
        });
        var t = a(85893), o = a(67294), n = a(11163), i = a(81536), r = a(10124), d = a(39498), s = a(53453),
            c = a(41287), u = a(88735), m = a(46182), _ = a(99299), p = a(27484), h = a.n(p), g = a(94184), f = a.n(g),
            v = a(20346), C = a(57337), x = a.n(C);
        let b = e => {
            var l, a;
            let {className: o, result: n} = e,
                i = null == n ? void 0 : null === (l = n.url) || void 0 === l ? void 0 : l.raw[0],
                r = null == n ? void 0 : null === (a = n.title) || void 0 === a ? void 0 : a.raw[0],
                d = (0, c.rz)(n, "event_startdate") || (0, c.rz)(n, "date") || (0, c.rz)(n, "created"),
                s = (0, c.rz)(n, "blog_category") || (0, c.rz)(n, "eyebrow"), u = (0, c.rz)(n, "blog_sub_category"),
                m = (0, c.rz)(n, "meta_description");
            return (0, t.jsxs)(v.Z, {
                href: i,
                className: "".concat(x().root, " ").concat(o, " group global-search-item"),
                children: [(s || u) && (0, t.jsxs)("div", {
                    className: x().topSection,
                    children: [s && (0, t.jsx)("span", {
                        className: x().tag,
                        children: s
                    }), u && (0, t.jsx)("span", {className: x().eyebrow, children: u})]
                }), (0, t.jsxs)("div", {
                    className: x().searchResultItemContent,
                    children: [(0, t.jsx)("h2", {
                        className: f()(x().headline, "group-hover:text-darkBlue-100"),
                        children: r
                    }), d && (0, t.jsx)("span", {
                        className: "".concat(x().date, " lg:flex hidden shrink-0 ml-16 pt-8"),
                        children: h()(1e3 * parseInt(d, 10)).format("MMMM DD, YYYY")
                    })]
                }), m && (0, t.jsx)("p", {
                    className: x().copy,
                    children: m
                }), d && (0, t.jsx)("span", {
                    className: "".concat(x().date, " flex mt-40 lg:hidden"),
                    children: h()(d).format("MMM DD, YYYY")
                })]
            })
        };
        var y = a(32250), A = a(62120), j = a.n(A);
        let N = "ParagraphSearchResultsFilterModule", w = e => {
            var l, a, p, h, g, f, v, C, x, A;
            let {paragraph: N, searchProps: w} = e, I = (0, o.useRef)(null), M = (0, m.Z)("lg"), k = (0, n.useRouter)(),
                B = (0, o.useContext)(s.GlobalContext), T = (0, i.$G)(), [S, P] = (0, o.useState)("");
            (0, o.useEffect)(() => {
                (0, r.H_)("", w)
            }, []);
            let L = e => {
                    e === S ? P("") : P(e)
                }, E = e => {
                    e === S && P("")
                },
                H = (null === (l = null == w ? void 0 : w.facets.content_type) || void 0 === l ? void 0 : l.length) && (null === (a = null == w ? void 0 : w.facets.content_type[0]) || void 0 === a ? void 0 : null === (p = a.data) || void 0 === p ? void 0 : p.map(e => {
                    let {value: l} = e;
                    return {label: l, value: l}
                })),
                W = (null === (h = null == w ? void 0 : w.facets["region.keyword"]) || void 0 === h ? void 0 : h.length) && (null === (g = null == w ? void 0 : w.facets["region.keyword"][0]) || void 0 === g ? void 0 : null === (f = g.data) || void 0 === f ? void 0 : f.map(e => {
                    let {value: l} = e;
                    return {label: l, value: l}
                })), Q = [{groupName: "Resources", options: H}, {groupName: "Region", options: W}],
                R = {Resources: "content_type", Region: "region.keyword"},
                F = [{label: T("Latest"), value: "latest"}, {label: T("Oldest"), value: "oldest"}, {
                    label: T("A-Z"),
                    value: "a-z",
                    format: "uppercase"
                }, {label: T("Z-A"), value: "z-a", format: "uppercase"}], Z = {
                    latest: {field: "date", direction: "desc"},
                    oldest: {field: "date", direction: "asc"},
                    "a-z": {field: "title.keyword", direction: "asc"},
                    "z-a": {field: "title.keyword", direction: "desc"}
                }, G = () => {
                    I.current && I.current.scrollIntoView({behavior: "smooth"})
                };
            return (0, o.useEffect)(() => {
                var e;
                let l = null == k ? void 0 : null === (e = k.query) || void 0 === e ? void 0 : e.query;
                (l || (null == w ? void 0 : w.searchTerm)) && l !== (null == w ? void 0 : w.searchTerm) && (0, r.H_)(String(l), w)
            }, [null == k ? void 0 : null === (v = k.query) || void 0 === v ? void 0 : v.query]), (0, t.jsxs)("div", {
                className: j().root, ref: I, children: [(0, t.jsx)(_.Z, {
                    isOpen: !0, redirect: !1, onChange: e => {
                        var l;
                        return (0, r.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, w)
                    }, onSubmit: e => (0, r.H_)(e, w)
                }), (0, t.jsxs)("div", {
                    className: "container default-grid",
                    children: [(0, t.jsxs)("div", {
                        className: "col-span-full relative flex gap-20 mb-10 md:mb-10 md:-mt-16 lg:mb-40 lg:mt-0 lg:col-span-8 lg:col-start-3",
                        children: [M && (0, t.jsx)(u.Z, {
                            options: Q,
                            buttonLabel: "Filter By",
                            onClick: L,
                            isOpen: "Filter By" === S,
                            onChange: e => (0, r.WB)(e, R, w),
                            showFilter: !0,
                            className: j().filterButton,
                            onClickOutside: E,
                            variant: "none"
                        }), (0, t.jsx)(u.Z, {
                            options: F,
                            buttonLabel: "Sort by",
                            onClick: L,
                            isOpen: "Sort by" === S,
                            onChange: e => {
                                (0, r.cB)(e, Z, w), P("")
                            },
                            showFilter: !0,
                            className: "".concat(j().filterButton, " lg:ml-auto"),
                            onClickOutside: E,
                            singleChoice: !0,
                            variant: "select"
                        })]
                    }), !M && !!(null == w ? void 0 : null === (C = w.results) || void 0 === C ? void 0 : C.length) && (0, t.jsx)("div", {
                        className: "col-span-2 lg:col-start-1 lg:row-span-12",
                        children: (0, t.jsx)(u.Z, {
                            options: Q,
                            buttonLabel: "Filter By",
                            onClick: L,
                            isOpen: "Filter By" === S,
                            onChange: e => (0, r.WB)(e, R, w),
                            showFilter: !0,
                            className: j().filterButton,
                            onClickOutside: E,
                            variant: M ? "select" : "big"
                        })
                    }), (0, t.jsxs)("div", {
                        className: "col-span-full lg:col-span-8 lg:col-start-3",
                        children: [(null == w ? void 0 : w.error) && (0, t.jsxs)("div", {
                            className: "container my-20 font-medium text-darkRed-100",
                            children: ["Error: ", null == w ? void 0 : w.error]
                        }), !(null == w ? void 0 : null === (x = w.results) || void 0 === x ? void 0 : x.length) && (0, t.jsx)("div", {
                            className: "mb-20 col-span-full",
                            children: (0, t.jsx)(y.default, {noPadding: !0, paragraph: (0, c.jV)(B)})
                        }), !!(null == w ? void 0 : null === (A = w.results) || void 0 === A ? void 0 : A.length) && w.results.map(e => (0, t.jsx)(b, {result: e}, JSON.stringify(e))), (0, t.jsx)("div", {
                            onClick: e => {
                                let l = e.target, a = l.tagName.toLowerCase();
                                ["li", "a"].includes(a) && G()
                            }, children: (0, t.jsx)(d.Z, {className: " mb-20 md:mb-44 md:mt-24 lg:mb-88 lg:mt-68"})
                        })]
                    })]
                })]
            })
        };
        var I = (0, r.ZP)(w, {
            searchQuery: {
                result_fields: {
                    eyebrow: {raw: {}},
                    type: {raw: {}},
                    content_type: {raw: {}},
                    title: {raw: {}},
                    event_startdate: {raw: {}},
                    date: {raw: {}},
                    created: {raw: {}},
                    blog_category: {raw: {}},
                    blog_sub_category: {raw: {}},
                    meta_description: {raw: {}},
                    region: {raw: {}},
                    resource_type: {raw: {}},
                    customer_solutions: {raw: {}},
                    url: {raw: {}}
                },
                search_fields: {
                    address: {weight: 1},
                    aggregated_topics: {weight: 5},
                    benefits: {weight: 3},
                    body_content: {weight: 3},
                    customer_products: {weight: 5},
                    customer_solutions: {weight: 5},
                    customer_subtitle: {weight: 13},
                    customer_title: {weight: 13},
                    customer_type: {weight: 5},
                    industry_vertical: {weight: 5},
                    job_roles: {weight: 5},
                    job_title: {weight: 13},
                    meta_description: {weight: 8},
                    meta_title: {weight: 13},
                    news_source_term_name: {weight: 3},
                    page_type: {weight: 5},
                    products: {weight: 5},
                    region: {weight: 3},
                    resource_type: {weight: 5},
                    resources: {weight: 21},
                    segments: {weight: 3},
                    short_description: {weight: 3},
                    solutions: {weight: 5},
                    subtitle: {weight: 8},
                    title: {weight: 13},
                    topic: {weight: 5},
                    zpedia_category: {weight: 5}
                },
                filters: [{field: "exclude_from_search", values: [!1], type: "all"}],
                facets: {
                    content_type: {type: "value", sort: "value", size: 20},
                    "region.keyword": {type: "value", sort: "value", size: 20}
                },
                resultsPerPage: 8
            }, initialState: {resultsPerPage: 8, sortList: [{field: "_score", direction: "desc"}]}
        }, {useExtendedIndices: !0})
    }, 56769: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return C
            }
        });
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(10124), d = a(46182), s = a(11163),
            c = a(20346), u = a(29751), m = a(27484), _ = a.n(m), p = a(39498), h = a(88735), g = a(81536),
            f = a(87455), v = a.n(f);
        a(112), a(30016);
        let C = "ParagraphSecurityAdvisoriesModule", x = e => {
            var l, a, n, m, f, C, x, b, y, A, j, N, w, I, M, k, B;
            let {paragraph: T, searchProps: S} = e,
                P = (0, d.Z)("md"), [L, E] = (0, o.useState)(null), [H, W] = (0, o.useState)(""),
                Q = (0, o.useRef)(null), R = (0, g.$G)(), F = (0, s.useRouter)(),
                Z = null === (l = null == T ? void 0 : T.fieldSecAdFilter[0]) || void 0 === l ? void 0 : null === (a = l.entity) || void 0 === a ? void 0 : a.fieldSecAdFilterHeadline,
                G = null === (n = null == T ? void 0 : T.fieldSecAdFilter[0]) || void 0 === n ? void 0 : null === (m = n.entity) || void 0 === m ? void 0 : m.fieldSecAdFilterFilterText,
                O = null === (f = null == T ? void 0 : T.fieldSecAdFilter[1]) || void 0 === f ? void 0 : null === (C = f.entity) || void 0 === C ? void 0 : C.fieldSecAdFilterHeadline,
                D = null === (x = null == T ? void 0 : T.fieldSecAdFilter[1]) || void 0 === x ? void 0 : null === (b = x.entity) || void 0 === b ? void 0 : b.fieldSecAdFilterFilterText,
                z = e => {
                    e === H ? W("") : W(e)
                }, U = e => {
                    e === H && W("")
                }, q = [];
            return (null == S ? void 0 : null === (y = S.facets) || void 0 === y ? void 0 : null === (A = y.date) || void 0 === A ? void 0 : A.length) && (null === (j = null == S ? void 0 : null === (N = S.facets) || void 0 === N ? void 0 : N.date[0]) || void 0 === j || null === (w = j.data) || void 0 === w || w.map(e => {
                e.count && q.push({label: _()(new Date(e.value)).locale(F.locale).format("YYYY"), value: e.value})
            })), (0, t.jsx)("div", {
                ref: Q, className: i()(v().root, "container default-grid mt-48"), children: (0, t.jsx)("div", {
                    className: v().mainContainer, children: (0, t.jsxs)("div", {
                        className: "flex flex-col justify-center mb-40 w-full relative h-full",
                        children: [P ? (0, t.jsxs)("div", {
                            className: "space-y-30 flex-grow",
                            children: [(0, t.jsxs)("div", {
                                className: "space-y-10 typo-paragraph font-bold",
                                children: [(0, t.jsxs)("div", {
                                    className: "space-y-2 mb-20",
                                    children: [(0, t.jsx)("p", {
                                        className: i()("mb-12", v().filterTitle),
                                        children: Z
                                    }), (0, t.jsx)("input", {
                                        "aria-label": G,
                                        placeholder: G,
                                        type: "search",
                                        onChange: e => {
                                            var l;
                                            return (0, r.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, S)
                                        },
                                        value: null == S ? void 0 : S.searchTerm,
                                        className: i()("block w-full border-b border-lightGrey-30 font-normal text-[1.6rem] pb-2 outline-none", v().searchInput, v().searchText)
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "space-y-2",
                                    children: [(0, t.jsx)("p", {
                                        className: v().filterTitle,
                                        children: R("Updated", "default")
                                    }), (0, t.jsx)(h.Z, {
                                        options: q,
                                        buttonLabel: D,
                                        onClick: z,
                                        isOpen: "Most recent" === H,
                                        onChange: e => (0, r.WB)(e, "date", S),
                                        showFilter: !0,
                                        className: v().filterButton,
                                        onClickOutside: U,
                                        variant: "select",
                                        singleChoice: !0,
                                        smallFont: !0,
                                        disableSort: !0
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "divide-y space-y-20 divide-darkGrey-20",
                                children: [null == S ? void 0 : null === (I = S.results) || void 0 === I ? void 0 : I.map((e, l) => {
                                    var a, o, n, r, d, s;
                                    let u = (null == e ? void 0 : null === (a = e.date) || void 0 === a ? void 0 : a.raw) && 1e3 * parseInt(null == e ? void 0 : null === (o = e.date) || void 0 === o ? void 0 : o.raw[0], 10);
                                    return (0, t.jsx)("div", {
                                        className: "pt-16 ".concat(l === (null == S ? void 0 : S.results.length) - 1 && v().borderBottom),
                                        children: (0, t.jsxs)(c.Z, {
                                            href: (null == e ? void 0 : null === (n = e.url) || void 0 === n ? void 0 : n.raw[0]) || "",
                                            className: v().link,
                                            children: [(0, t.jsx)("p", {
                                                className: "typo-small-paragraph mt-16",
                                                children: null == e ? void 0 : null === (r = e.title) || void 0 === r ? void 0 : r.raw
                                            }), u && (0, t.jsx)("p", {
                                                className: i()(v().mobileDateColumn, "typo-footnote mt-10"),
                                                children: _()(u).locale(F.locale).format("MMMM DD, YYYY")
                                            })]
                                        }, "m-".concat(null == e ? void 0 : null === (d = e.nid) || void 0 === d ? void 0 : d.raw))
                                    }, "m-".concat(null == e ? void 0 : null === (s = e.nid) || void 0 === s ? void 0 : s.raw))
                                }), (null == S ? void 0 : null === (M = S.results) || void 0 === M ? void 0 : M.length) === 0 && (0, t.jsx)(u.Z, {className: v().noSearchResults})]
                            })]
                        }) : (0, t.jsxs)("table", {
                            className: "table-auto w-full bg-white border-collapse flex-grow",
                            children: [(0, t.jsxs)("tr", {
                                className: i()(v().tableRow, "typo-small-paragraph"),
                                children: [(0, t.jsx)("th", {
                                    className: i()(v().firstColumn, "bg-blue-100 text-left py-4"),
                                    children: (0, t.jsxs)("div", {
                                        className: "space-y-8 h-full flex flex-col",
                                        children: [(0, t.jsx)("p", {
                                            className: i()("mb-12", v().filterTitle),
                                            children: Z
                                        }), (0, t.jsx)("input", {
                                            "aria-label": G,
                                            placeholder: G,
                                            type: "search",
                                            onChange: e => {
                                                var l;
                                                return (0, r.H_)(null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value, S)
                                            },
                                            value: null == S ? void 0 : S.searchTerm,
                                            className: i()("block w-full border-b border-lightGrey-30 outline-none", v().searchInput, v().searchText)
                                        })]
                                    })
                                }), (0, t.jsx)("th", {
                                    className: i()(v().secondColumn, "bg-blue-100 text-left py-4"),
                                    children: (0, t.jsxs)("div", {
                                        className: "space-y-8",
                                        children: [(0, t.jsx)("p", {
                                            className: v().filterTitle,
                                            children: O
                                        }), (0, t.jsx)(h.Z, {
                                            options: q,
                                            buttonLabel: D,
                                            onClick: z,
                                            isOpen: H === D,
                                            onChange: e => (0, r.WB)(e, "date", S),
                                            showFilter: !0,
                                            className: v().filterButton,
                                            onClickOutside: U,
                                            variant: "select",
                                            singleChoice: !0,
                                            smallFont: !0,
                                            disableSort: !0
                                        })]
                                    })
                                })]
                            }), null == S ? void 0 : null === (k = S.results) || void 0 === k ? void 0 : k.map(e => {
                                var l, a, o, n, r;
                                let d = (null == e ? void 0 : null === (l = e.date) || void 0 === l ? void 0 : l.raw) && 1e3 * parseInt(null == e ? void 0 : null === (a = e.date) || void 0 === a ? void 0 : a.raw[0], 10);
                                return (0, t.jsx)(c.Z, {
                                    className: v().link,
                                    href: (null == e ? void 0 : null === (o = e.url) || void 0 === o ? void 0 : o.raw[0]) || "",
                                    children: (0, t.jsxs)("tr", {
                                        className: i()(v().tableRow, v().resultRow, "border-b border-lightGrey-20"),
                                        children: [(0, t.jsx)("td", {
                                            className: i()(v().firstColumn),
                                            children: null == e ? void 0 : null === (n = e.title) || void 0 === n ? void 0 : n.raw
                                        }), d && (0, t.jsx)("td", {
                                            className: v().secondColumn,
                                            children: _()(d).locale(F.locale).format("MMMM DD, YYYY")
                                        })]
                                    })
                                }, "d-".concat(null == e ? void 0 : null === (r = e.nid) || void 0 === r ? void 0 : r.raw))
                            }), (null == S ? void 0 : null === (B = S.results) || void 0 === B ? void 0 : B.length) === 0 && (0, t.jsx)(u.Z, {className: v().noSearchResults})]
                        }), (0, t.jsx)(p.Z, {className: "col-span-full -ml-12 my-40 md:mx-0 lg:my-82"})]
                    })
                })
            })
        };
        l.default = (0, r.ZP)(x, {
            alwaysSearchOnInitialLoad: !0,
            searchQuery: {
                result_fields: {
                    nid: {raw: {}},
                    type: {raw: {}},
                    type_boost: {raw: {}},
                    title: {raw: {}},
                    date: {raw: {}},
                    url: {raw: {}}
                },
                search_fields: {title: {weight: 13}},
                filters: [{field: "content_type", values: ["security_advisory"], type: "all"}],
                facets: {
                    date: {
                        type: "range", ranges: [...Array(30)].map((e, l) => {
                            let a = _()().subtract(l, "year");
                            return {from: +a.startOf("year"), to: +a.endOf("year"), name: a.format("YYYY")}
                        })
                    }
                },
                resultsPerPage: 7,
                sortDirection: "desc",
                sortField: "date",
                sortList: [{field: "date", direction: "desc"}]
            },
            initialState: {resultsPerPage: 7, sortList: [{field: "date", direction: "desc"}]}
        })
    }, 83634: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return u
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(41287), r = a(39579), d = a(22359), s = a(77689), c = a.n(s);
        let u = "ParagraphSolutionsImageTextModule", m = e => {
            let {paragraph: l} = e, {
                fieldSolImtextModEyebrow: a,
                fieldSolImtextModHeadline: o,
                fieldSolImtextModCopy: s,
                fieldSolImtextModRows: u
            } = l;
            return (0, t.jsxs)("div", {
                className: "".concat(c().root, " relative"),
                children: [(0, t.jsx)("div", {
                    className: c().topPattern,
                    children: (0, t.jsx)(r.Z, {
                        image: {
                            url: "/assets/images/clouds/topPattern.png",
                            alt: "",
                            title: "",
                            width: 2501,
                            height: 449
                        }, sizes: "100vw"
                    })
                }), (0, t.jsx)("div", {className: c().bg}), (0, t.jsxs)("div", {
                    className: c().leftPattern,
                    children: [(0, t.jsx)(r.Z, {
                        image: {
                            url: "/assets/images/clouds/solutionsImageTextLeft.png",
                            alt: "",
                            title: "",
                            width: 308,
                            height: 1196
                        }, className: "md:hidden lg:block"
                    }), (0, t.jsx)(r.Z, {
                        image: {
                            url: "/assets/images/clouds/solutionsImageTextLeft.png",
                            alt: "",
                            title: "",
                            width: 164,
                            height: 638
                        }, className: "md:block lg:hidden"
                    })]
                }), (0, t.jsxs)("div", {
                    className: c().rightPattern,
                    children: [(0, t.jsx)(r.Z, {
                        image: {
                            url: "/assets/images/clouds/solutionsImageTextRight.png",
                            alt: "",
                            title: "",
                            width: 308,
                            height: 1196
                        }, className: "md:hidden lg:block"
                    }), (0, t.jsx)(r.Z, {
                        image: {
                            url: "/assets/images/clouds/solutionsImageTextRight.png",
                            alt: "",
                            title: "",
                            width: 164,
                            height: 638
                        }, className: "md:block lg:hidden"
                    })]
                }), (0, t.jsxs)("div", {
                    className: n()(c().mainContainer, "container"),
                    children: [(0, t.jsxs)("div", {
                        className: "default-grid",
                        children: [(0, t.jsxs)("div", {
                            className: "col-span-full lg:col-span-8 lg:col-start-3",
                            children: [a && (0, t.jsx)("div", {
                                className: c().eyebrow,
                                children: a
                            }), o && (0, t.jsx)("h2", {className: c().headline, children: (0, i.Qc)(o)})]
                        }), (0, t.jsx)("div", {
                            className: "col-span-full md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4",
                            children: s && (0, t.jsx)("p", {
                                role: "heading",
                                "aria-level": 3,
                                className: c().copy,
                                children: (0, i.Qc)(s)
                            })
                        })]
                    }), !!(null == u ? void 0 : u.length) && u.map((e, l) => {
                        let {
                            entity: {
                                fieldSolImtextRowHeadline: a,
                                fieldSolImtextRowCopy: o,
                                fieldSolImtextRowImage: n,
                                fieldSolImtextRowCta: s
                            }
                        } = e;
                        return (0, t.jsxs)("div", {
                            className: "default-grid ".concat(c().row, " ").concat(l > 0 ? c().hasMargin : "", " ").concat(l % 2 == 1 ? "grid-flow-dense" : ""),
                            children: [(0, t.jsxs)("div", {
                                className: "".concat(c().rowContent, " col-span-full md:col-span-6 lg:col-span-3 ").concat(l % 2 == 0 ? "lg:col-start-2" : "lg:col-start-9"),
                                children: [a && (0, t.jsx)("h3", {
                                    className: c().rowHeadline,
                                    children: (0, i.Qc)(a)
                                }), o && (0, t.jsx)("p", {
                                    className: c().rowCopy,
                                    children: (0, i.Qc)(o)
                                }), s && (0, t.jsx)("div", {
                                    className: c().rowCta,
                                    children: (0, t.jsx)(d.Z, {cta: s, type: "btn-primary"})
                                })]
                            }), n && (0, t.jsx)("div", {
                                className: "".concat(c().rowImageWrapper, " col-span-full md:col-span-6 lg:col-span-6 ").concat(l % 2 == 0 ? "lg:col-start-6 order-first md:order-none" : "lg:col-start-2 order-first"),
                                children: (0, t.jsx)(r.Z, {
                                    image: n,
                                    className: c().rowImage,
                                    sizes: "(max-width: 400px) 360px, (max-width: 767px) 100vw, (max-width: 1023px) 446px, 672px"
                                })
                            })]
                        }, "content-".concat(a))
                    })]
                })]
            })
        };
        l.default = m
    }, 75272: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return p
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(41287), r = a(22359), d = a(39579), s = a(46182), c = a(99589),
            u = a(24002), m = a(55331), _ = a.n(m);
        let p = "ParagraphSolutionsModule", h = e => {
            let {card: l, cardNumber: a} = e, {
                entity: {
                    fieldSolCardHeadline: o,
                    fieldSolCardSubHeadline: n,
                    fieldSolCardImageUpload: i,
                    fieldSolCardCta: s
                }
            } = l;
            return (0, t.jsxs)("div", {
                className: _().card,
                children: [(null == i ? void 0 : i.url) && (0, t.jsx)("div", {
                    className: _().cardImageContainer,
                    children: (0, t.jsx)(d.Z, {image: i, fill: !0})
                }), (0, t.jsxs)("div", {
                    className: _().cardInfoContainer,
                    children: [(0, t.jsx)("div", {
                        className: _().cardNumber,
                        children: a.toString().padStart(2, "0")
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col",
                        children: [o && (0, t.jsx)("h3", {
                            className: _().cardHeadline,
                            children: o
                        }), (0, t.jsx)("p", {
                            role: "heading",
                            "aria-level": 4,
                            className: _().cardSubHeadline,
                            children: n
                        }), s && (0, t.jsx)("div", {
                            className: _().cardCtaContainer,
                            children: (0, t.jsx)(r.Z, {type: "link", cta: s})
                        })]
                    })]
                })]
            })
        }, g = e => {
            let {paragraph: l} = e, {
                fieldSolutionsMEyebrow: a,
                fieldSolutionsMHeadline: o,
                fieldSolutionsMSubHeadline: r,
                fieldSolutionsMCards: m,
                fieldSolutionsMBackground: p
            } = l, g = (0, s.Z)("lg", !1), f = (0, s.Z)();
            return (0, t.jsx)("div", {
                className: n()(_().root, p && _().blueBackground),
                children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: n()(_().tile, "default-grid"),
                        children: [p && !g && (0, t.jsx)(d.Z, {
                            image: {
                                url: "/assets/images/clouds/solutionsModuleCloud.png",
                                width: 308,
                                height: 839,
                                alt: "",
                                title: ""
                            }, className: _().cloudBg
                        }), (0, t.jsxs)("div", {
                            className: _().contentContainer,
                            children: [a && (0, t.jsx)("div", {
                                className: _().eyebrow,
                                children: a
                            }), o && (0, t.jsx)("h2", {
                                className: _().headline,
                                children: (0, i.Qc)(o)
                            }), r && (0, t.jsx)("div", {
                                className: _().subHeadline,
                                children: r && (0, i.Qc)(r)
                            }), (null == m ? void 0 : m.length) > 0 && (0, t.jsx)("div", {
                                className: _().cardsContainer,
                                children: g ? (0, t.jsx)(c.Z, {
                                    highlightAllVisible: !0,
                                    slidesPerView: f ? 1.035 : 2.1,
                                    spaceBetween: 20,
                                    children: m.map((e, l) => (0, t.jsx)(u.o, {
                                        children: (0, t.jsx)(h, {
                                            card: e,
                                            cardNumber: l + 1
                                        })
                                    }, JSON.stringify(e)))
                                }) : (0, t.jsx)(t.Fragment, {
                                    children: m.map((e, l) => (0, t.jsx)(h, {
                                        card: e,
                                        cardNumber: l + 1
                                    }, JSON.stringify(e)))
                                })
                            })]
                        })]
                    })
                })
            })
        };
        l.default = g
    }, 54319: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return o
            }
        });
        var t = a(85893);
        a(67294);
        let o = "ParagraphSpacerModule", n = e => {
            let {paragraph: l} = e, {
                fieldSpacerModuleSpace: a,
                fieldSpacerModuleTabletSpace: o,
                fieldSpacerModuleMobileSpace: n
            } = l;
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "container md:hidden",
                    style: {marginTop: n}
                }), (0, t.jsx)("div", {
                    className: "container hidden md:block lg:hidden",
                    style: {marginTop: o}
                }), (0, t.jsx)("div", {className: "container hidden lg:block", style: {marginTop: a}})]
            })
        };
        l.default = n
    }, 55846: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return c
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(20346), i = a(39579), r = a(22359), d = a(22718), s = a.n(d);
        let c = "ParagraphStatsCardsModule", u = e => {
            let {paragraph: l} = e, {
                fieldStatscardsModHeadline: a,
                fieldStatscardsNumNumbers: d,
                fieldStatscardsModLogos: c,
                fieldStatscardsModCta: u
            } = l;
            return (0, t.jsx)("div", {
                className: "".concat(s().root), children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsxs)("div", {
                        className: "default-grid",
                        children: [a && (0, t.jsx)("div", {
                            className: "col-span-full lg:col-span-6 lg:col-start-4",
                            children: (0, t.jsx)("h2", {
                                className: s().headline,
                                "aria-level": 2,
                                children: (0, o.Qc)(a)
                            })
                        }), d.map(e => {
                            let {
                                entity: {
                                    fieldStatscardsNumNumber: l,
                                    fieldStatscardsNumColor: a,
                                    fieldStatscardsNumDescription: n,
                                    fieldStatscardsNumCta: i
                                }
                            } = e;
                            return (0, t.jsx)("div", {
                                className: "col-span-full md:col-span-4 ".concat(s().numberContentWrapper),
                                children: (0, t.jsxs)("div", {
                                    className: s().numberContent,
                                    children: [(0, t.jsx)("p", {
                                        className: "".concat(s().number, " ").concat(s()[a]),
                                        role: "heading",
                                        "aria-level": 3,
                                        children: l
                                    }), n && (0, t.jsx)("p", {
                                        className: s().description,
                                        children: (0, o.Qc)(n)
                                    }), (0, o.yr)(i) && (0, t.jsx)(r.Z, {cta: i})]
                                })
                            }, l + a + n)
                        })]
                    }), (0, t.jsx)("div", {
                        className: "default-grid mt-40 md:mt-0",
                        children: (0, t.jsx)("div", {
                            className: "col-span-full lg:col-span-10 lg:col-start-2",
                            children: (0, t.jsx)("div", {
                                className: "default-grid lg:grid-cols-4 lg:gap-x-40 gap-y-20",
                                children: c.map(e => {
                                    var l, a;
                                    let {
                                        entity: {
                                            fieldStatscardsLogoDesc: o,
                                            fieldStatscardsLogoLink: r,
                                            fieldStatscardsLogoImage: d,
                                            fieldStatscardsLogoNewTab: c
                                        }
                                    } = e, u = (0, t.jsxs)("div", {
                                        className: s().logoContent,
                                        children: [(0, t.jsx)("div", {
                                            className: s().logoContainer,
                                            children: d && (0, t.jsx)(i.Z, {image: d})
                                        }), (0, t.jsx)("p", {className: s().logoDescription, children: o})]
                                    });
                                    return (0, t.jsxs)("div", {
                                        className: "col-span-2 md:col-span-3 lg:col-span-1",
                                        children: [(null == r ? void 0 : null === (l = r.url) || void 0 === l ? void 0 : l.path) && (0, t.jsx)(n.Z, {
                                            href: null === (a = r.url) || void 0 === a ? void 0 : a.path,
                                            role: "button",
                                            tabIndex: 0,
                                            target: c ? "_blank" : "_self",
                                            children: u
                                        }), !r && (0, t.jsxs)(t.Fragment, {children: [" ", u, " "]})]
                                    }, o)
                                })
                            })
                        })
                    }), (0, t.jsx)("div", {
                        className: "default-grid",
                        children: (0, t.jsx)("div", {
                            className: "col-span-full ".concat(s().bottomCTA),
                            children: (0, t.jsx)(r.Z, {cta: u, type: "btn-primary"})
                        })
                    })]
                })
            })
        };
        l.default = u
    }, 31233: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return r
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(76649), n = a(49011), i = a.n(n);
        let r = "ParagraphSubmissionFormModule", d = e => {
            let {paragraph: l} = e, {fieldSubmissionFormIframeUrl: a, fieldSidebarNavigationTitle: n} = l;
            return (0, t.jsx)("div", {
                className: "".concat(i().root),
                children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsx)("div", {
                        className: "".concat(i().Wrapper, " is-tile default-grid"),
                        children: (0, t.jsx)("div", {
                            className: "".concat(i().innerWrapper, " col-span-full lg:col-span-9 lg:col-start-4"),
                            children: a.url.path && (0, t.jsx)("div", {
                                className: i().iframeWrapper,
                                children: (0, t.jsx)(o.Z, {
                                    className: i().iframe,
                                    src: a.url.path,
                                    title: n,
                                    id: "bugcrowd-external-submission-form",
                                    referrerPolicy: "origin"
                                })
                            })
                        })
                    })
                })
            })
        };
        l.default = d
    }, 40819: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return c
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(41287), r = a(46182), d = a(21384), s = a.n(d);
        let c = "ParagraphTable", u = e => {
            var l, a, o;
            let {paragraph: d} = e, {fieldEyebrow: c, fieldTitle: u, firstRowIsHeading: m, fieldTableRows: _} = d,
                p = (0, r.Z)(), h = null == _ ? void 0 : null === (l = _[0]) || void 0 === l ? void 0 : l.entity,
                g = (null == h ? void 0 : null === (a = h.columns) || void 0 === a ? void 0 : a.length) > 2,
                f = m ? null == h ? void 0 : h.columns[0].value : "",
                v = m ? null == h ? void 0 : h.columns[1].value : "",
                C = m && g ? null === (o = null == h ? void 0 : h.columns[2]) || void 0 === o ? void 0 : o.value : "";
            return (0, t.jsx)("div", {
                className: "".concat(s().root, " container default-grid"), children: (0, t.jsxs)("div", {
                    className: s().contentContainer,
                    children: [c && (0, t.jsx)("p", {
                        className: s().eyebrow,
                        children: c
                    }), u && (0, t.jsx)("h2", {
                        className: s().headline,
                        children: u
                    }), (null == _ ? void 0 : _.length) > 0 && (0, t.jsxs)("div", {
                        className: n()(s().tableContainer, g && s().threeCols, !g && p && s().directionColumn),
                        children: [(0, t.jsx)("div", {
                            className: n()(s().col1, s().title),
                            children: (0, i.Qc)(f)
                        }), (0, t.jsx)("div", {
                            className: n()(s().col2, s().title),
                            children: (0, i.Qc)(v)
                        }), g && (0, t.jsx)("div", {
                            className: n()(s().col3, s().title),
                            children: (0, i.Qc)(C)
                        }), m ? (0, t.jsx)("div", {className: n()(s().sep, s().title)}) : null, _.map((e, l) => {
                            var a;
                            let {entity: {columns: o}} = e, r = o[0].value, d = o[1].value,
                                c = null === (a = o[2]) || void 0 === a ? void 0 : a.value;
                            return !m || m && 0 !== l ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    className: n()(s().col1, g ? s().copy : s().copyTwoCol, !g && p && s().bold),
                                    children: (0, i.Qc)(r)
                                }), (0, t.jsx)("div", {
                                    className: n()(s().col2, g ? s().copy : s().copyTwoCol),
                                    children: (0, i.Qc)(d)
                                }), g && (0, t.jsx)("div", {
                                    className: n()(s().col3, s().copy),
                                    children: (0, i.Qc)(c)
                                }), (0, t.jsx)("div", {className: !g && p ? s().twoColSep : s().sep})]
                            }) : null
                        })]
                    })]
                })
            })
        };
        l.default = u
    }, 10484: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893), o = a(67294), n = a(41287), i = a(94184), r = a.n(i), d = a(46182), s = a(22359),
            c = a(39579), u = a(35107), m = a.n(u);
        let _ = "ParagraphTabsModule", p = e => {
            let {paragraph: l} = e, {
                fieldTabsModuleEyebrow: a,
                fieldTabsModuleTopics: i,
                fieldTabsModuleHeadline: u,
                fieldTabsModuleCopy: _,
                fieldTabsModuleFullWidth: p
            } = l, [h, g] = (0, o.useState)(0), f = (0, d.Z)("lg", !1), v = (0, d.Z)();
            return (0, t.jsx)("div", {
                className: r()(m().root, "container default-grid", p && m().fullWidthImage, f && m().isTablet, v && m().isMobile),
                children: (0, t.jsxs)("div", {
                    className: m().contentContainer,
                    children: [a && (0, t.jsx)("p", {
                        className: m().eyebrow,
                        children: a
                    }), u && (0, t.jsx)("h2", {
                        className: m().moduleHeadline,
                        children: u
                    }), (null == _ ? void 0 : _.value) && (0, t.jsx)("div", {
                        className: m().moduleCopy,
                        children: (0, n.Qc)(_.value)
                    }), (null == i ? void 0 : i.length) > 0 && (0, t.jsx)("div", {
                        className: m().tabsHeader,
                        children: i.map((e, l) => {
                            let {entity: {fieldTabsModuleTopicTitle: a}} = e;
                            return (0, t.jsx)("div", {
                                className: r()(m().tabTitle, h === l && m().selected),
                                children: (0, t.jsx)("button", {
                                    type: "button",
                                    onMouseEnter: () => g(l),
                                    onClick: () => g(l),
                                    children: a
                                })
                            }, a)
                        })
                    }), (0, t.jsx)("div", {
                        className: m().tabsContainer, children: null == i ? void 0 : i.map((e, l) => {
                            let {
                                entity: {
                                    fieldTabsModuleTopicHeadline: a,
                                    fieldTabsModuleTopicCopy: o,
                                    fieldTabsModuleTopicImage: i,
                                    fieldTabsModuleTopicImageT: d,
                                    fieldTabsModuleTopicImageM: u,
                                    fieldTabsModuleTopicCards: _
                                }
                            } = e, g = (0, n.Bb)(i, d, u, f, v);
                            return (0, t.jsxs)("div", {
                                className: r()(m().tab, h === l && m().selected),
                                children: [(0, t.jsxs)("div", {
                                    className: "".concat(m().firstRow, " ").concat(p && m().fullWidthImage),
                                    children: [p && (0, t.jsx)("div", {
                                        className: m().fullWidthImageContainer,
                                        children: (0, t.jsx)(c.Z, {image: g})
                                    }), (0, t.jsxs)("div", {
                                        className: m().tabTextContainer,
                                        children: [a && (0, t.jsx)("h2", {
                                            className: m().headline,
                                            children: (0, n.Qc)(a)
                                        }), (null == o ? void 0 : o.value) && (0, t.jsx)("div", {
                                            className: r()(m().copy, "zscaler-wysiwyg"),
                                            children: (0, n.Qc)(o.value)
                                        })]
                                    }), !p && (0, t.jsx)("div", {
                                        className: m().imageContainer,
                                        children: (0, t.jsx)(c.Z, {image: g, fill: !0})
                                    })]
                                }), (null == _ ? void 0 : _.length) > 0 && (0, t.jsx)("div", {
                                    className: m().tabCardsContainer,
                                    children: _.map(e => {
                                        let {
                                            entity: {
                                                fieldTabsModCardHeadline: l,
                                                fieldTabsModCardIcon: a,
                                                fieldTabsModCardSubheadForm: o,
                                                fieldTabsModCardCta: i
                                            }
                                        } = e;
                                        return (0, t.jsxs)("div", {
                                            className: m().tabCard,
                                            children: [(0, t.jsx)("div", {
                                                className: m().cardIconContainer,
                                                children: a && (0, t.jsx)(c.Z, {image: a})
                                            }), (0, t.jsx)("h2", {
                                                className: m().cardHeadline,
                                                children: l
                                            }), (0, t.jsx)("div", {
                                                className: r()(m().cardSubHeadline, "zscaler-wysiwyg"),
                                                children: (null == o ? void 0 : o.value) && (0, n.Qc)(o.value)
                                            }), (0, n.yr)(i) && (0, t.jsx)("div", {
                                                className: m().cardCtaContainer,
                                                children: (0, t.jsx)(s.Z, {cta: i, type: "link"})
                                            })]
                                        }, null == o ? void 0 : o.value)
                                    })
                                })]
                            }, a + o)
                        })
                    })]
                })
            })
        };
        l.default = p
    }, 61027: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(94184), n = a.n(o), i = a(24002), r = a(20346), d = a(22359), s = a(39579), c = a(99589), u = a(2160),
            m = a.n(u);
        let _ = "ParagraphTestimonialsModule", p = e => {
            var l, a;
            let {entity: o, centered: i} = e, {
                    fieldTestimTMainImage: c,
                    fieldTestimTName: u,
                    fieldTestimTPosition: _,
                    fieldTestimTLogo: p,
                    fieldTestimTQuote: h,
                    fieldTestimTLogoLink: g,
                    fieldTestimTBottomLink: f,
                    fieldTestimTLogoNewTab: v
                } = o,
                C = null == g ? void 0 : null === (l = g.url) || void 0 === l ? void 0 : null === (a = l.path) || void 0 === a ? void 0 : a.includes("linkedin.com");
            return (0, t.jsxs)("div", {
                className: n()(m().card),
                children: [(0, t.jsx)("div", {
                    className: n()(m().cardImageContainer, i && m().cardImageCentered),
                    children: (0, t.jsx)("div", {
                        className: m().imageContainer,
                        children: (0, t.jsx)("div", {
                            className: "relative w-full h-full flex justify-center items-center",
                            children: c && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(s.Z, {
                                    className: m().cloud,
                                    image: {
                                        url: "/assets/images/clouds/testimonialModuleExpCloud.png",
                                        alt: "",
                                        title: "",
                                        width: c.width,
                                        height: c.height
                                    },
                                    objectFit: "cover"
                                }), (0, t.jsx)(s.Z, {image: c, className: m().image, objectFit: "cover"})]
                            })
                        })
                    })
                }), (0, t.jsxs)("div", {
                    className: n()(m().cardContentContainer, i && m().cardContentContainerCentered),
                    children: [u && (0, t.jsx)("h2", {
                        className: m().name,
                        children: u
                    }), _ && (0, t.jsx)("div", {
                        className: m().position,
                        children: _
                    }), p && (0, t.jsx)("div", {
                        className: n()(m().logoContainer, C && m().isLinkedin),
                        style: {height: Math.min(p.height, 30)},
                        children: (null == g ? void 0 : g.url.path) ? (0, t.jsx)(r.Z, {
                            href: g.url.path,
                            target: v ? "_blank" : "_self",
                            children: (0, t.jsx)(s.Z, {image: p})
                        }) : (0, t.jsx)(s.Z, {image: p})
                    }), h && (0, t.jsx)("div", {
                        className: m().quote,
                        children: h
                    }), f && (0, t.jsx)("div", {
                        className: m().bottomLinkContainer,
                        children: (0, t.jsx)(d.Z, {cta: f, type: "link"})
                    })]
                })]
            })
        }, h = e => {
            let {paragraph: l} = e, {
                fieldTestimModTestimonials: a,
                fieldTestimModBBackground: o,
                fieldTestimModCentered: r
            } = l;
            return (0, t.jsx)("div", {
                className: n()(m().root, r && m().centered, o && m().blueBackground),
                children: (0, t.jsx)("div", {
                    className: o ? "tile-container" : "container",
                    children: (0, t.jsx)("div", {
                        className: n()(m().tile, "default-grid"),
                        children: (0, t.jsx)("div", {
                            className: m().testimonialsContainer,
                            children: (0, t.jsx)(c.Z, {
                                slidesPerView: 1,
                                spaceBetween: 30,
                                className: m().customSwiper,
                                children: a.map(e => {
                                    let {entity: l} = e;
                                    return (0, t.jsx)(i.o, {
                                        style: {width: "100%"},
                                        children: (0, t.jsx)(p, {entity: l, centered: r})
                                    }, l.fieldTestimTMainImage.url + l.fieldTestimTName)
                                })
                            })
                        })
                    })
                })
            })
        };
        l.default = h
    }, 32250: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return _
            }
        });
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(30653), d = a(14621), s = a(39579),
            c = a(22359), u = a(45927), m = a.n(u);
        let _ = "ParagraphTextCardModule", p = e => {
            let {paragraph: l, noPadding: a = !1} = e, {
                fieldTextCardMHeadline: n,
                fieldTextCardMCopy: u,
                fieldTextCardMCta: _,
                fieldTextCardMCardColor: p,
                fieldTextCardMWistiaId: h
            } = l, g = (0, o.useRef)(null);
            return (0, t.jsx)("div", {
                className: i()(m().root, !n && !_ && m().onlyCopyVariant, a && m().noPadding),
                children: (0, t.jsxs)("div", {
                    className: i()(m().cardContainer, {blue: "bg-coreBlue-10", grey: "bg-lightGrey-10"}[p]),
                    children: [(0, t.jsx)(s.Z, {
                        className: i()(m().cloud, "blue" !== p && m().cloudHidden),
                        image: {
                            alt: "",
                            title: "",
                            url: "/assets/images/clouds/blueTilePattern.png",
                            width: 261,
                            height: 1229
                        }
                    }), n ? (0, t.jsx)("h2", {
                        className: m().headline,
                        children: (0, r.ZP)(n)
                    }) : null, (null == u ? void 0 : u.value) ? (0, t.jsx)("div", {
                        className: i()(m().copy, "zscaler-wysiwyg", n ? "mt-[1.4rem] lg:mt-[4.97rem]" : "mt-0"),
                        children: (0, r.ZP)(u.value)
                    }) : null, _ && (0, t.jsx)(t.Fragment, {
                        children: h ? (0, t.jsx)("button", {
                            onClick: e => {
                                "function" == typeof (null == g ? void 0 : g.current) && (null == g || g.current(), e.stopPropagation(), e.preventDefault())
                            },
                            className: "".concat(m().fieldHeroMCtaLink),
                            type: "button",
                            children: (0, t.jsx)(c.Z, {
                                cta: _,
                                btnColor: "dark",
                                type: "btn-primary",
                                className: m().ctaLink
                            })
                        }) : (0, t.jsx)(c.Z, {cta: _, btnColor: "dark", type: "btn-primary", className: m().ctaLink})
                    }), h && (0, t.jsx)("div", {
                        className: "h-0 overflow-hidden",
                        children: (0, t.jsx)(d.Z, {openModal: g, videoId: h, objectfit: "cover", openInModal: !0})
                    })]
                })
            })
        };
        l.default = p
    }, 39224: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return h
            }
        });
        var t = a(85893), o = a(67294), n = a(41287), i = a(94184), r = a.n(i), d = a(22359), s = a(39579),
            c = a(46182), u = a(99589), m = a(24002), _ = a(57223), p = a.n(_);
        let h = "ParagraphUseCasesWithNavModule", g = e => {
            var l, a;
            let {
                card: o,
                selected: i = !1,
                includeTitle: c = !1,
                cardNumber: u = "",
                variant: m = "default"
            } = e, {
                entity: {
                    fieldUseCaseCardTitle: _,
                    fieldUseCaseCardImage: h,
                    fieldUseCaseCardCopy: g,
                    fieldUseCaseCardCta: f
                }
            } = o;
            return (0, t.jsxs)("div", {
                className: r()(p().card, i && p().selected, "padding" === m && p().withPadding),
                children: [c && (0, t.jsxs)("div", {
                    className: p().cardTitle,
                    children: [u && (0, t.jsx)("span", {
                        className: p().cardNumber,
                        children: u
                    }), (0, t.jsx)("span", {children: _})]
                }), (null == h ? void 0 : h.url) && (0, t.jsx)("div", {
                    className: p().cardImage,
                    children: (0, t.jsx)(s.Z, {image: h, fill: !0, sizes: "400px"})
                }), (0, t.jsxs)("div", {
                    className: p().cardContent,
                    children: [(null == g ? void 0 : g.value) && (0, t.jsx)("div", {
                        className: r()(p().cardCopy, "zscaler-wysiwyg"),
                        children: (0, n.Qc)(g.value)
                    }), (null == f ? void 0 : null === (l = f.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : a.title) && (0, t.jsx)("div", {
                        className: p().cardCTA,
                        children: (0, t.jsx)(d.Z, {cta: f})
                    })]
                })]
            })
        }, f = e => {
            let {row: l, className: a} = e, {
                    entity: {
                        fieldUseCasesRowCards: n,
                        fieldUseCasesRowHeadline: i
                    }
                } = l, [d, _] = (0, o.useState)(0), h = (0, c.Z)("lg", !1), f = (0, c.Z)(),
                v = e => e.toString().padStart(2, "0");
            return (0, t.jsxs)("div", {
                className: r()(p().row, a),
                children: [i && (0, t.jsx)("h2", {
                    className: p().headline,
                    children: i
                }), (null == n ? void 0 : n.length) > 0 && (0, t.jsx)("div", {
                    className: p().navAndCardsContainer,
                    children: h ? (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(u.Z, {
                            highlightAllVisible: !0,
                            slidesPerView: f ? 1 : 2.25,
                            spaceBetween: 22,
                            children: n.map((e, l) => (0, t.jsx)(m.o, {
                                children: (0, t.jsx)(g, {
                                    card: e,
                                    includeTitle: !0,
                                    variant: "padding",
                                    cardNumber: v(l + 1)
                                })
                            }, JSON.stringify(e)))
                        })
                    }) : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("ol", {
                            className: p().navigationContainer,
                            children: n.map((e, l) => {
                                let {entity: {fieldUseCaseCardTitle: a}} = e;
                                return (0, t.jsx)("li", {
                                    children: (0, t.jsxs)("button", {
                                        type: "button",
                                        onClick: () => _(l),
                                        onMouseEnter: () => _(l),
                                        className: r()(p().navElement, l === d && p().selected),
                                        children: [(0, t.jsx)("span", {
                                            className: p().navNumber,
                                            children: v(l + 1)
                                        }), a && (0, t.jsx)("span", {className: p().navTitle, children: a})]
                                    })
                                }, a)
                            })
                        }), (0, t.jsx)("div", {
                            className: p().cardsContainer,
                            children: (0, t.jsx)("div", {
                                children: (0, t.jsx)("div", {
                                    className: "relative",
                                    children: n.map((e, l) => (0, t.jsxs)("div", {
                                        className: r()(p().cardContainer, "relative", l === d && p().selected),
                                        children: [(0, t.jsx)(g, {
                                            card: e,
                                            selected: l === d
                                        }), (0, t.jsx)(s.Z, {
                                            image: {
                                                width: 276,
                                                height: 276,
                                                url: "/assets/images/clouds/useCasesWithNavCloud.png",
                                                alt: "",
                                                title: ""
                                            }, className: p().cloud
                                        })]
                                    }, e.entity.fieldUseCaseCardTitle))
                                })
                            })
                        })]
                    })
                })]
            })
        }, v = e => {
            let {paragraph: l} = e, {
                fieldUseCasesWNavEyebrow: a,
                fieldUseCasesWNavRows: o,
                fieldUseCasesWNavHeadline: i,
                fieldUseCasesWNavCopy: r,
                fieldUseCasesWNavCenter: d
            } = l;
            return (0, t.jsx)("div", {
                className: "".concat(p().root, " container default-grid"),
                children: (0, t.jsxs)("div", {
                    className: "".concat(p().contentContainer, " ").concat(d && p().centerContent),
                    children: [a && (0, t.jsx)("div", {
                        className: p().eyebrow,
                        children: a
                    }), i && (0, t.jsx)("h2", {
                        className: p().moduleHeadline,
                        children: i
                    }), (null == r ? void 0 : r.value) && (0, t.jsx)("div", {
                        className: p().moduleCopy,
                        children: (0, n.Qc)(r.value)
                    }), (null == o ? void 0 : o.length) > 0 && o.map((e, l) => (0, t.jsx)(f, {
                        className: l > 0 && p().notFirst,
                        row: e
                    }, JSON.stringify(e)))]
                })
            })
        };
        l.default = v
    }, 9599: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            default: function () {
                return C
            }, typename: function () {
                return f
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(41287), n = a(94184), i = a.n(n), r = a(39579), d = a(64690), s = a.n(d), c = a(22359);
        let u = e => {
            let {
                title: l = "",
                headline: a,
                copy: n,
                cta: d,
                image: u,
                selected: m = !1,
                cardNumber: _ = "",
                variant: p = "default",
                withoutNav: h = !1,
                className: g = ""
            } = e;
            return (0, t.jsxs)("div", {
                className: i()(s().root, g),
                children: [(0, t.jsxs)("div", {
                    className: i()(s().card, m && s().selected, "padding" === p && s().withPadding, h && s().withoutNav),
                    children: ["padding" === p && (0, t.jsxs)("div", {
                        className: s().cardTitle,
                        children: [_ && (0, t.jsx)("span", {
                            className: s().cardNumber,
                            children: _
                        }), (0, t.jsx)("span", {children: l})]
                    }), (0, t.jsx)("div", {
                        className: s().cardImage,
                        children: u && (0, t.jsx)(r.Z, {image: u, fill: !0, sizes: "400px"})
                    }), (0, t.jsxs)("div", {
                        className: s().cardContent,
                        children: [a && (0, t.jsx)("div", {
                            className: s().cardHeadline,
                            children: a
                        }), n && (0, t.jsx)("div", {
                            className: i()(s().cardCopy, "zscaler-wysiwyg"),
                            children: (0, o.Qc)(n)
                        }), d && (0, t.jsx)("div", {className: s().cardCTA, children: (0, t.jsx)(c.Z, {cta: d})})]
                    })]
                }), (0, t.jsx)(r.Z, {
                    className: s().cloud,
                    image: {
                        url: "/assets/images/clouds/useCasesWithNavCloud.png",
                        alt: "dots pattern",
                        width: 276,
                        height: 276,
                        title: ""
                    }
                })]
            })
        };
        var m = a(46182), _ = a(99589), p = a(24002), h = a(74724), g = a.n(h);
        let f = "ParagraphUseCasesWithoutNavModule", v = e => {
            let {paragraph: l} = e, {
                fieldUseCasesNoNavEyebrow: a,
                fieldUseCasesNoNavHeadline: o,
                fieldUseCasesNoNavCards: n
            } = l, i = (0, m.Z)();
            return (0, t.jsx)("div", {
                className: "".concat(g().root, " container default-grid"),
                children: (0, t.jsxs)("div", {
                    className: g().contentContainer,
                    children: [a && (0, t.jsx)("p", {
                        className: g().eyebrow,
                        children: a
                    }), o && (0, t.jsx)("h2", {
                        className: g().headline,
                        children: o
                    }), (null == n ? void 0 : n.length) > 0 && (0, t.jsx)("div", {
                        className: g().cardsContainer,
                        children: i && n.length > 1 ? (0, t.jsx)(_.Z, {
                            slidesPerView: 1.2,
                            spaceBetween: 20,
                            children: n.map(e => {
                                let {
                                    entity: {
                                        fieldUseCasesNoNavCopy: l,
                                        fieldUseCasesNoNavCta: a,
                                        fieldUseCasesNoNavImage: o,
                                        fieldUseCasesNoNavHline: n
                                    }
                                } = e;
                                return (0, t.jsx)(p.o, {
                                    children: (0, t.jsx)(u, {
                                        image: o,
                                        copy: null == l ? void 0 : l.value,
                                        headline: n,
                                        cta: a,
                                        variant: "default",
                                        withoutNav: !0,
                                        className: g().mobileCard
                                    }, null == l ? void 0 : l.value)
                                }, null == l ? void 0 : l.value)
                            })
                        }) : (0, t.jsx)(t.Fragment, {
                            children: n.map(e => {
                                let {
                                    entity: {
                                        fieldUseCasesNoNavCopy: l,
                                        fieldUseCasesNoNavCta: a,
                                        fieldUseCasesNoNavImage: o,
                                        fieldUseCasesNoNavHline: n
                                    }
                                } = e;
                                return (0, t.jsx)(u, {
                                    image: o,
                                    copy: null == l ? void 0 : l.value,
                                    headline: n,
                                    cta: a,
                                    variant: "default",
                                    withoutNav: !0
                                }, null == l ? void 0 : l.value)
                            })
                        })
                    })]
                })
            })
        };
        var C = v
    }, 41211: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return u
            }
        });
        var t = a(85893), o = a(67294), n = a(94184), i = a.n(n), r = a(30653), d = a(39579), s = a(36964), c = a.n(s);
        let u = "ParagraphValidationModule", m = e => {
            let {paragraph: l} = e, {
                fieldValidationModHeadline: a,
                fieldValidationModOkLabel: n,
                fieldValidationModNoLabel: s,
                fieldValidationModSuccessM: u
            } = l, [m, _] = (0, o.useState)(!1);
            return (0, t.jsx)("div", {
                className: "".concat(c().root, " container"), children: (0, t.jsxs)("div", {
                    className: c().container,
                    children: [(0, t.jsx)("div", {
                        className: i()(c().content, c().success, m && c().visible),
                        children: (0, t.jsxs)("div", {
                            className: c().successContainer,
                            children: [(0, t.jsx)("div", {
                                className: "".concat(c().buttonBox, " ").concat(c().buttonBoxYes),
                                children: (0, t.jsx)(d.Z, {
                                    image: {
                                        url: "/assets/images/validation_success.svg",
                                        width: 63,
                                        height: 64,
                                        alt: "form submtited",
                                        title: ""
                                    }
                                })
                            }), (0, t.jsx)("div", {className: c().successStateMessage, children: u})]
                        })
                    }), (0, t.jsxs)("div", {
                        className: i()(c().content, c().default, !m && c().visible),
                        children: [a && (0, t.jsx)("h2", {
                            className: i()(c().label, c().headline),
                            children: (0, r.ZP)(a)
                        }), (0, t.jsxs)("div", {
                            className: c().buttons,
                            children: [(0, t.jsxs)("button", {
                                type: "button",
                                tabIndex: 0,
                                onClick: function () {
                                    _(!0)
                                },
                                className: "".concat(c().button, " btn-blog-feedback-yes"),
                                children: [(0, t.jsx)("div", {
                                    className: "".concat(c().buttonBox, " ").concat(c().buttonBoxYes),
                                    children: (0, t.jsx)(d.Z, {
                                        image: {
                                            url: "/assets/images/validation_yes.svg",
                                            width: 50,
                                            height: 46,
                                            alt: "vote yes",
                                            title: ""
                                        }
                                    })
                                }), (0, t.jsx)("div", {className: c().label, children: n})]
                            }), (0, t.jsxs)("button", {
                                type: "button",
                                tabIndex: 0,
                                onClick: function () {
                                    _(!0)
                                },
                                className: "".concat(c().button, " btn-blog-feedback-no"),
                                children: [(0, t.jsx)("div", {
                                    className: "".concat(c().buttonBox, " ").concat(c().buttonBoxNo),
                                    children: (0, t.jsx)(d.Z, {
                                        image: {
                                            url: "/assets/images/validation_no.svg",
                                            width: 50,
                                            height: 46,
                                            alt: "vote no",
                                            title: ""
                                        }
                                    })
                                }), (0, t.jsx)("div", {className: c().label, children: s})]
                            })]
                        })]
                    })]
                })
            })
        };
        l.default = m
    }, 80640: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return s
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(93417), n = a(46182), i = a(41287), r = a(91772), d = a.n(r);
        let s = "ParagraphVideoCardModule", c = e => {
            let {paragraph: l} = e, {
                fieldVideoCardModWistiaId: a,
                fieldVideoCardModVideoTitle: r,
                fieldVideoCardModBtnText: s,
                fieldVideoCardModImage: c,
                fieldVideoCardModImageM: u
            } = l, m = (0, n.Z)(), _ = (0, i.Bb)(c, c, u, !1, m);
            return (0, t.jsx)("div", {
                className: "".concat(d().root, " md:container"),
                children: (0, t.jsx)("div", {
                    className: "default-grid ",
                    children: (0, t.jsx)("div", {
                        className: d().video,
                        children: a && _ && (0, t.jsx)("div", {
                            className: d().videoCardContainer,
                            children: (0, t.jsx)(o.Z, {
                                videoId: a,
                                videoTitle: r,
                                backgroundImage: _,
                                playButtonText: s,
                                variant: "video-card-module"
                            })
                        })
                    })
                })
            })
        };
        l.default = c
    }, 33440: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return s
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(46182), n = a(41287), i = a(39579), r = a(62645), d = a.n(r);
        let s = "ParagraphWorkloadsModule", c = e => {
            let {paragraph: l} = e, {
                fieldWorkloadsModEyebrow: a,
                fieldWorkloadsModHeadline: r,
                fieldWorkloadsModImage: s,
                fieldWorkloadsModImageTablet: c,
                fieldWorkloadsModImageMobile: u,
                fieldWorkloadsModSteps: m,
                fieldWorkloadsModCaptionHead: _,
                fieldWorkloadsModCaptionCopy: p,
                fieldWorkloadsModSections: h
            } = l, g = (0, o.Z)(), f = (0, o.Z)("lg", !1), v = (0, n.Bb)(s, c, u, f, g);
            return (0, t.jsx)("div", {
                className: "tile-container", children: (0, t.jsxs)("div", {
                    className: d().root,
                    children: [(0, t.jsxs)("div", {
                        className: "default-grid px-20",
                        children: [(0, t.jsxs)("div", {
                            className: d().contentContainer,
                            children: [a && (0, t.jsx)("div", {
                                className: d().eyebrow,
                                children: a
                            }), r && (0, t.jsx)("h2", {className: d().headline, children: (0, n.Qc)(r)})]
                        }), (0, t.jsx)("div", {
                            className: "lg:col-span-5 lg:col-start-4 md:col-span-7 col-span-full ".concat(d().image),
                            children: v && (0, t.jsx)(i.Z, {image: v})
                        }), (0, t.jsxs)("div", {
                            className: "lg:col-span-3 lg:col-start-9 md:col-span-5 col-span-full ".concat(d().stepWrapper),
                            children: [m.map((e, l) => (0, t.jsxs)("div", {
                                className: d().step,
                                children: [(0, t.jsx)("div", {
                                    className: d().stepIndex,
                                    children: (0, t.jsx)("span", {children: l + 1})
                                }), (0, t.jsx)("div", {
                                    className: d().stepCopy,
                                    children: (0, t.jsx)("p", {children: e})
                                })]
                            }, JSON.stringify(e))), (0, t.jsx)("p", {
                                className: d().captionHeadline,
                                children: _
                            }), p && (0, t.jsx)("p", {className: d().captionCopy, children: (0, n.Qc)(p)})]
                        })]
                    }), (0, t.jsx)("div", {
                        className: "default-grid px-20 ".concat(d().bottom), children: h.map(e => {
                            let {
                                entity: {
                                    fieldWorkloadsSectionTitle: l,
                                    fieldWorkloadsSectionCopy: a,
                                    fieldWorkloadsSectionLists: o
                                }
                            } = e;
                            return (0, t.jsx)("div", {
                                className: "lg:col-span-12 md:col-span-6 col-span-full lg:mt-40 md:mt-0 mt-30",
                                children: (0, t.jsxs)("div", {
                                    className: "default-grid",
                                    children: [(0, t.jsxs)("div", {
                                        className: "lg:col-span-2 lg:col-start-4 md:col-span-10 md:col-start-3 col-span-full",
                                        children: [(0, t.jsx)("span", {
                                            className: d().sectionTitle,
                                            children: l
                                        }), a && (0, t.jsx)("p", {className: d().sectionCopy, children: (0, n.Qc)(a)})]
                                    }), o.map(e => {
                                        let {entity: {fieldWorkloadsListTitle: l, fieldWorkloadsListItems: a}} = e;
                                        return (0, t.jsxs)("div", {
                                            className: "lg:col-span-2 md:col-span-10 md:col-start-3 col-span-full lg:mt-0 mt-20",
                                            children: [(0, t.jsx)("p", {
                                                className: d().listTitle,
                                                children: l
                                            }), (0, t.jsx)("ul", {
                                                className: d().list,
                                                children: a.map(e => (0, t.jsx)("li", {children: e}, e))
                                            })]
                                        }, l)
                                    })]
                                })
                            }, "".concat(l).concat(a))
                        })
                    })]
                })
            })
        };
        l.default = c
    }, 50950: function (e, l, a) {
        "use strict";
        a.r(l), a.d(l, {
            typename: function () {
                return r
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(30653), n = a(90797), i = a.n(n);
        let r = "ParagraphWysiwygModule", d = e => {
            let {paragraph: l} = e, {fieldWysiwygModContent: a} = l;
            return (0, t.jsx)("div", {
                className: "".concat(i().root, " container"),
                children: (0, t.jsx)("div", {
                    className: "default-grid",
                    children: (0, t.jsx)("div", {
                        className: "col-span-full lg:col-span-8 lg:col-start-4",
                        children: (null == a ? void 0 : a.value) && (0, t.jsx)("div", {
                            className: i().content,
                            children: (0, o.ZP)(a.value, {
                                transform: e => {
                                    "h1" === e.name && (e.name = "h2", e.attribs.class = i().h1)
                                }
                            })
                        })
                    })
                })
            })
        };
        l.default = d
    }, 98442: function (e, l, a) {
        "use strict";
        a.d(l, {
            Z: function () {
                return lP
            }
        });
        var t, o, n, i, r, d = a(85893), s = a(67294), c = a(9008), u = a.n(c), m = a(81536), _ = a(66517),
            p = a(41287), h = a(11163);
        let g = (e, l) => {
                let a = e.replace("".concat("cms.zscaler.com"), (0, m.pk)(l)).replace("/node/".concat("62376"), "");
                if ("en" === l) return a;
                let t = a.replace("https://", "").replace("http://").split("/");
                return t.length < 2 ? a : (t.splice(1, 1), "https://".concat(t.join("/")))
            }, f = (e, l) => l && l.length ? l.filter(e => !["en", "pt-br", "ko"].includes(e)).map(l => {
                let a = e.replace("https://", "").replace("www.zscaler.com", ""),
                    t = "https://".concat((0, m.pk)(l)).concat(a);
                return (0, d.jsx)("link", {href: t, rel: "alternate", hrefLang: l}, l)
            }) : null, v = function (e, l) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if (!e) return "";
                let t = e.replace("cms.zscaler.com", "www.zscaler.com");
                return "en" === l || a ? t : t = (t = t.replace("".concat("www.zscaler.com", "/").concat(l, "/"), "".concat("www.zscaler.com", "/").concat(l))).replace("".concat("www.zscaler.com", "/").concat(l), "".concat("www.zscaler.com", "/"))
            },
            C = (e, l) => e.replace("".concat("www.zscaler.com", "/").concat(null == l ? void 0 : l.locale), "www.zscaler.com"),
            x = e => {
                var l, a, t, o;
                let {seo: n} = e, i = (0, h.useRouter)(), r = null == n ? void 0 : n.metaTags,
                    s = g((0, p.Xm)("canonical", r), i.locale);
                s === "https://".concat((0, m.pk)(null == i ? void 0 : i.locale), "/home") && (s = s.replace("/home", "/")), s = C(s, i);
                let c = (0, p.Xm)("title", r), x = (0, p.Xm)("description", r), b = (0, p.Xm)("keywords", r),
                    y = (0, p.Xm)("robots", r), A = s.replace((0, m.pk)(i.locale), "www.zscaler.com");
                return (0, d.jsxs)(u(), {
                    children: [(0, d.jsx)("title", {children: c}), (0, d.jsx)("meta", {
                        name: "description",
                        content: x
                    }), b && (0, d.jsx)("meta", {name: "keywords", content: b}), (0, d.jsx)("link", {
                        rel: "canonical",
                        href: s
                    }), (0, d.jsx)("link", {
                        href: A,
                        rel: "alternate",
                        hrefLang: "x-default"
                    }), (0, d.jsx)("link", {
                        href: A,
                        rel: "alternate",
                        hrefLang: "en"
                    }), f(A, null == n ? void 0 : n.languageIds), (0, d.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/favicons/apple-touch-icon.png"
                    }), (0, d.jsx)("link", {
                        rel: "mask-icon",
                        href: "/favicons/safari-pinned-tab.svg",
                        color: "#2368F5"
                    }), (0, d.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicons/favicon-32x32.ico"
                    }), (0, d.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicons/favicon-16x16.ico"
                    }), (0, d.jsx)("meta", {
                        name: "og:type",
                        content: "website"
                    }), (0, d.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#2368F5"
                    }), (0, d.jsx)("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    }), (null == n ? void 0 : null === (l = n.overrideOgImage) || void 0 === l ? void 0 : l.url) && (0, d.jsx)("meta", {
                        property: "og:image",
                        content: v(null === (a = n.overrideOgImage) || void 0 === a ? void 0 : a.url, null == i ? void 0 : i.locale, "override")
                    }), !(null == n ? void 0 : null === (t = n.overrideOgImage) || void 0 === t ? void 0 : t.url) && (0, p.Xm)("og:image", r) && (0, d.jsx)("meta", {
                        property: "og:image",
                        content: v((0, p.Xm)("og:image", r), null == i ? void 0 : i.locale)
                    }), (0, d.jsx)("meta", {property: "og:url", content: s}), (0, d.jsx)("meta", {
                        property: "og:title",
                        content: (0, p.Xm)("og:title", r) || c
                    }), (0, d.jsx)("meta", {
                        property: "og:description",
                        content: (0, p.Xm)("og:description", r) || x
                    }), (0, d.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }), (0, d.jsx)("meta", {
                        name: "twitter:url",
                        content: s
                    }), (0, d.jsx)("meta", {
                        name: "twitter:title",
                        content: (0, p.Xm)("twitter:title", r) || c
                    }), (0, d.jsx)("meta", {
                        name: "twitter:description",
                        content: (0, p.Xm)("twitter:description", r) || x
                    }), (0, d.jsx)("meta", {
                        name: "twitter:image",
                        content: v((0, p.Xm)("twitter:image", r), null == i ? void 0 : i.locale)
                    }), !!y && (0, d.jsx)("meta", {
                        name: "robots",
                        content: y
                    }), (null == n ? void 0 : n.faqSchema) && (null == n ? void 0 : null === (o = n.faqSchema) || void 0 === o ? void 0 : o.length) > 0 && (0, d.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {__html: JSON.stringify((0, _.yi)(n.faqSchema))}
                    }), (null == n ? void 0 : n.blogSchema) && (0, d.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {__html: JSON.stringify((0, _.j3)(n.blogSchema, (0, m.pk)(i.defaultLocale)))}
                    })]
                })
            };
        var b = a(20346), y = a(88451), A = a(97646), j = a.n(A);
        let N = e => {
            var l;
            let {entity: a} = e, {
                fieldAlertTitle: t,
                fieldTitleLink: o,
                fieldAlertBarColor: n,
                fieldShowAlertBar: i
            } = a, [r, c] = (0, s.useState)(!1), u = (0, m.$G)(), _ = () => {
                let e = localStorage.getItem("hide_alert"), l = {};
                e && (l = JSON.parse(e)), l[t] = "yes", localStorage.setItem("hide_alert", JSON.stringify(l)), c(!1)
            };
            return ((0, s.useEffect)(() => {
                let e = localStorage.getItem("hide_alert"), l = {};
                e && (l = JSON.parse(e)), "yes" !== l[t] && i ? c(!0) : c(!1)
            }, []), r) ? (0, d.jsx)("div", {
                className: "".concat(j().root, " ").concat(j()[n]),
                children: (0, d.jsx)("div", {
                    className: "container",
                    children: (0, d.jsx)("div", {
                        className: "default-grid",
                        children: (0, d.jsx)("div", {
                            className: "col-span-12",
                            children: (0, d.jsxs)("div", {
                                className: j().contentWrapper,
                                children: [(0, d.jsx)("div", {
                                    className: "".concat(j().copy),
                                    children: t
                                }), !!(null == o ? void 0 : o.title) && (0, d.jsx)("div", {
                                    className: "".concat(j().linkWrapper),
                                    children: (0, d.jsx)(b.Z, {
                                        href: (null == o ? void 0 : null === (l = o.url) || void 0 === l ? void 0 : l.path) || "",
                                        className: j().link,
                                        children: (0, d.jsx)("span", {children: o.title})
                                    })
                                }), (0, d.jsxs)("button", {
                                    type: "button",
                                    className: j().closeicon,
                                    onClick: () => _(),
                                    children: [(0, d.jsx)("span", {
                                        className: "sr-only",
                                        children: u("Close")
                                    }), (0, d.jsx)(y.Z, {"aria-hidden": "true"})]
                                })]
                            })
                        })
                    })
                })
            }) : null
        };
        var w = a(83809), I = a(94842), M = a(82142), k = a(53453), B = a(1636), T = a(94184), S = a.n(T), P = a(46182);

        function L() {
            return (L = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var E = function (e) {
            return s.createElement("svg", L({
                width: 15,
                height: 11,
                viewBox: "0 0 15 11",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), t || (t = s.createElement("path", {
                d: "M8.06 5.647L14.163.595a1.393 1.393 0 00-.876-.302H2.29c-.335 0-.66.117-.916.332l6.151 5.032a.445.445 0 00.535-.01z",
                fill: "#848484"
            })), o || (o = s.createElement("path", {
                d: "M2.29 10.197h10.994a1.436 1.436 0 001.436-1.436V1.73c0-.097-.01-.193-.03-.288L8.679 6.42a1.454 1.454 0 01-1.768.015L.873 1.49a1.25 1.25 0 00-.02.238V8.76a1.437 1.437 0 001.437 1.436z",
                fill: "#848484"
            })))
        };

        function H() {
            return (H = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var W = function (e) {
            return s.createElement("svg", H({
                width: 14,
                height: 12,
                viewBox: "0 0 14 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), n || (n = s.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.416 11.693c5.233 0 8.094-4.335 8.094-8.093 0-.123-.002-.246-.008-.368a5.789 5.789 0 001.42-1.472 5.68 5.68 0 01-1.634.447 2.853 2.853 0 001.25-1.573 5.701 5.701 0 01-1.806.69 2.845 2.845 0 00-4.848 2.594A8.078 8.078 0 011.02.947a2.842 2.842 0 00.88 3.797 2.825 2.825 0 01-1.288-.356v.036c0 1.378.98 2.528 2.282 2.789a2.854 2.854 0 01-1.285.048 2.848 2.848 0 002.658 1.976 5.71 5.71 0 01-4.212 1.178 8.057 8.057 0 004.36 1.278z",
                fill: "#848484"
            })))
        };

        function Q() {
            return (Q = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var R = function (e) {
            return s.createElement("svg", Q({
                width: 8,
                height: 15,
                viewBox: "0 0 8 15",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i || (i = s.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.042 8.002l.384-2.505H5.022V3.87c0-.686.336-1.354 1.413-1.354h1.093V.384s-.992-.17-1.94-.17c-1.98 0-3.274 1.2-3.274 3.373v1.91h-2.2v2.505h2.2v6.057a8.736 8.736 0 002.708 0V8.002h2.02z",
                fill: "#848484"
            })))
        };

        function F() {
            return (F = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = arguments[l];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        var Z = function (e) {
            return s.createElement("svg", F({
                width: 15,
                height: 15,
                viewBox: "0 0 15 15",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = s.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M.74 14.24h2.964V4.695H.74v9.543zM3.797 2.041c0 .82-.604 1.483-1.599 1.483-.936 0-1.54-.664-1.54-1.483 0-.84.623-1.483 1.579-1.483s1.54.644 1.56 1.483zM5.474 7.74c0-1.19-.039-2.186-.078-3.045h2.575l.137 1.327h.058c.39-.624 1.346-1.542 2.945-1.542 1.95 0 3.413 1.308 3.413 4.118v5.64H11.56V8.95c0-1.23-.43-2.069-1.502-2.069-.82 0-1.307.566-1.521 1.112-.078.195-.098.469-.098.742v5.503H5.474V7.74z",
                fill: "#848484"
            })))
        }, G = a(22359), O = a(66317), D = a.n(O);
        let z = e => {
            var l, a, t, o, n, i;
            let {isBlog: r, top: c, titles: u, sidebar: _ = {}} = e,
                g = (0, P.Z)("lg", !1), [f, v] = (0, s.useState)((null == u ? void 0 : u.length) ? (0, p.iP)(u[0]) : ""),
                C = (0, h.useRouter)(), x = (0, s.useContext)(k.GlobalContext), b = (0, m.$G)(),
                y = (0, s.useRef)(null),
                A = (0, s.useRef)(null), [j, N] = (0, s.useState)(0), [w, I] = (0, s.useState)(0), M = () => {
                    "undefined" != typeof document && I(document.body.clientWidth), (null == A ? void 0 : A.current) && N(A.current.getBoundingClientRect().height)
                };
            if ((0, s.useEffect)(() => (M(), window.addEventListener("resize", M), (null == y ? void 0 : y.current) || (y.current = new IntersectionObserver(e => {
                e.forEach((l, a) => {
                    var t;
                    if (l.isIntersecting && (null == l ? void 0 : null === (t = l.target) || void 0 === t ? void 0 : t.id)) {
                        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && a < e.length - 1) {
                            v(e[e.length - 1].target.id);
                            return
                        }
                        v(l.target.id)
                    }
                })
            }, {rootMargin: "-40px 0px -80% 0px", threshold: 0})), setTimeout(() => {
                (null == u ? void 0 : u.length) && u.forEach(e => {
                    var l;
                    let a = document.querySelector("#".concat((0, p.iP)(e)));
                    a && (null == y || null === (l = y.current) || void 0 === l || l.observe(a))
                })
            }, 50), () => {
                var e;
                null == y || null === (e = y.current) || void 0 === e || e.disconnect(), window.removeEventListener("resize", M)
            }), [u]), !(null == u ? void 0 : u.length) && !_.fieldSidebarModBlogVariant) return null;
            let {
                    fieldSidebarModLinks: B,
                    fieldSidebarModNavLabel: T,
                    fieldSidebarNavTags: L,
                    fieldSidebarNavCopyUrlLabel: H,
                    fieldSidebarNavButtonCta: Q,
                    fieldSidebarModBlogVariant: F
                } = _, O = () => {
                    (0, p.TE)(document.location.href)
                },
                z = null === (l = C.domainLocales.find(e => e.defaultLocale === C.defaultLocale)) || void 0 === l ? void 0 : l.domain;
            z || (z = null === (i = C.domainLocales.find(e => "en" === e.defaultLocale)) || void 0 === i ? void 0 : i.domain);
            let U = "".concat(z).concat(C.asPath), {pageTitle: q} = x, V = encodeURIComponent("https://".concat(U)),
                Y = "mailto:?subject=".concat(q, "&body=").concat(V),
                J = "https://twitter.com/intent/tweet?text=".concat(V, " — ").concat(q, '"');
            return (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)("div", {
                    className: S()(D().root, F ? "block lg:sticky h-auto" : "hidden lg:block sticky", F && D().blogVariant, c ? "top-30" : "top-0"),
                    style: {height: "".concat(F && g ? "auto" : "".concat(j, "px"))},
                    children: (0, d.jsx)("div", {
                        className: "w-screen",
                        style: {maxWidth: w ? "".concat(w, "px") : "100vw"},
                        children: (0, d.jsx)("div", {
                            className: "container", children: (0, d.jsx)("div", {
                                className: "default-grid", children: (0, d.jsx)("div", {
                                    className: "".concat(F ? "col-span-full lg:col-span-3" : "col-span-2 col-start-2", " relative"),
                                    children: (0, d.jsx)("div", {
                                        className: "".concat(F ? "lg:absolute" : "absolute", " ").concat(c ? D().pinWrapperTop : D().pinWrapper, " ").concat(r && D().isBlog),
                                        ref: A,
                                        children: (0, d.jsxs)("div", {
                                            className: S()(D().pin, F && "default-grid lg:block"),
                                            children: [L && L.length > 0 && (0, d.jsx)("div", {
                                                className: D().tagGroup,
                                                children: L.map(e => (0, d.jsx)("div", {
                                                    className: D().tag,
                                                    children: (0, d.jsx)("span", {children: e})
                                                }, e))
                                            }), r && (0, d.jsxs)("div", {
                                                className: D().socialgroup,
                                                children: [(0, d.jsx)("a", {
                                                    href: Y,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: (0, d.jsx)(E, {})
                                                }), (0, d.jsx)("a", {
                                                    href: "https://www.facebook.com/sharer/sharer.php?u=".concat(V),
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: (0, d.jsx)(R, {})
                                                }), (0, d.jsx)("a", {
                                                    href: J,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: (0, d.jsx)(W, {})
                                                }), (0, d.jsx)("a", {
                                                    href: "https://www.linkedin.com/sharing/share-offsite/?url=".concat(V),
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: (0, d.jsx)(Z, {})
                                                })]
                                            }), (0, d.jsxs)("div", {
                                                className: D().titlesWrapper,
                                                children: [T && (0, d.jsx)("p", {
                                                    className: D().navTopLabel,
                                                    children: T
                                                }), (0, d.jsx)("ol", {
                                                    children: u.map(e => {
                                                        let l = (0, p.iP)(e);
                                                        return (0, d.jsx)("li", {
                                                            children: (0, d.jsx)("a", {
                                                                className: S()(D().link, f === l && D().linkActive),
                                                                href: "#".concat(l),
                                                                children: e
                                                            })
                                                        }, e)
                                                    })
                                                })]
                                            }), H && (0, d.jsx)("div", {
                                                className: "".concat(D().copyUrlWrapper, " hidden lg:flex"),
                                                children: (0, d.jsx)("button", {
                                                    type: "button",
                                                    className: D().copyUrl,
                                                    onClick: O,
                                                    children: b("Copy URL")
                                                })
                                            }), Q && (null == Q ? void 0 : null === (a = Q.entity) || void 0 === a ? void 0 : null === (t = a.fieldCtaCompLink) || void 0 === t ? void 0 : t.title) && (0, d.jsx)("div", {
                                                className: D().buttonCTAWrapper,
                                                children: (0, d.jsx)(G.Z, {
                                                    className: D().cta,
                                                    cta: Q,
                                                    type: "btn-primary",
                                                    btnColor: "light-outline"
                                                }, null == Q ? void 0 : null === (o = Q.entity) || void 0 === o ? void 0 : null === (n = o.fieldCtaCompLink) || void 0 === n ? void 0 : n.title)
                                            }), H && (0, d.jsx)("div", {
                                                className: "".concat(D().copyUrlWrapper, " flex lg:hidden"),
                                                children: (0, d.jsx)("button", {
                                                    type: "button",
                                                    className: D().copyUrl,
                                                    onClick: O,
                                                    children: b("Copy URL")
                                                })
                                            }), B && B.filter(e => {
                                                var l, a, t;
                                                return null == e ? void 0 : null === (l = e.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : null === (t = a.url) || void 0 === t ? void 0 : t.path
                                            }).length > 0 && (0, d.jsx)("div", {
                                                className: D().additionalLinks,
                                                children: B.map(e => {
                                                    var l, a;
                                                    return (0, d.jsx)(G.Z, {
                                                        className: D().cta,
                                                        cta: e
                                                    }, null == e ? void 0 : null === (l = e.entity) || void 0 === l ? void 0 : null === (a = l.fieldCtaCompLink) || void 0 === a ? void 0 : a.title)
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), (0, d.jsx)("div", {
                    className: F ? "hidden lg:block" : "",
                    style: {marginBottom: "-".concat(j, "px")}
                })]
            })
        };
        var U = a(86567), q = a(71835), V = a(95289);
        let Y = e => {
            switch (null == e ? void 0 : e.__typename) {
                case U.typename:
                    return e.fieldIntroWGModBackground;
                case q.typename:
                    return e.fieldColumnTextBBackground;
                case V.typename:
                    return !0;
                default:
                    return !1
            }
        };
        var J = a(5152), K = a.n(J), X = a(3305), $ = a(43824), ee = a(63087),
            el = "\n  {\n    alt\n    url\n    width\n    height\n    title\n  }\n",
            ea = "\nfragment BlogPostHeaderModule on ParagraphBlogPostHeaderModule {\n    post: fieldBlogpostHModBlogPost {\n      entity {\n        entityBundle\n        ... on NodeBlog {\n          title\n          publishedAt: publishedAt { value }\n          author: entityOwner {\n            name: fieldName\n            title: fieldTitle\n            image: userPicture ".concat(el, "\n          }\n\n          mainCategory: fieldBlogMainCategory {\n            entity {\n              ... on TaxonomyTermBlogMainCategory {\n                name\n              }\n            }\n          }\n          coverImage: fieldCoverImage ").concat(el, "\n        }\n      }\n    }\n}\n"),
            et = a(51037), eo = "\n  {\n    uri\n    title\n    url { path }\n  }\n",
            en = "\nfragment CaseStudyModule on ParagraphCaseStudyModule {\n  fieldCaseStudyMEyebrow\n  fieldCaseStudyMFullWidth\n  fieldCaseStudyMCaseStudy1 {\n    entity { ...CaseStudyTeaser }\n  }\n  fieldCaseStudyMCaseStudy2 {\n    entity { ...CaseStudyTeaser }\n  }\n  fieldCaseStudyMCaseStudy {\n    entity { ...CaseStudyTeaser }\n  }\n  fieldCaseStudyMFooterCta {\n    entity { ...CTA }\n  }\n  fieldSidebarNavigationTitle\n}\n\nfragment CaseStudyTeaser on ParagraphCaseStudyTeaser {\n  fieldCaseStudyTHeroLogo ".concat(el, "\n  fieldCaseStudyTHeadnote\n  fieldCaseStudyTeaserHeadline\n  fieldCaseStudyTBody { value }\n  fieldCaseStudyTeaserImage ").concat(el, "\n  fieldCaseStudyTeaserCtaLink ").concat(eo, "\n  fieldCaseStudyTeaserNewTab\n  fieldCaseStudyTButtonLogo ").concat(el, "\n  fieldCaseStudyTWistiaId\n}\n"),
            ei = a(21501),
            er = "\nfragment CodeModule on ParagraphCodeModule {\n	fieldCodeModDesktopImage ".concat(el, "\n    fieldCodeModTabletImage ").concat(el, "\n    fieldCodeModMobileImage ").concat(el, "\n    fieldCodeModCodeSnippet\n}\n"),
            ed = a(94564), es = a(73206), ec = a(26784),
            eu = "\nfragment ContactFormModule on ParagraphContactFormModule {\n    fieldContactFMCardHeadline\n    fieldContactFMCardCopy\n    fieldContactFMForms {\n        entity { ...ContactFormModuleFormType }\n    }\n    fieldContactFMHelpHeadline\n    fieldContactFMCopy\n    fieldContactFMImageHeadline\n    fieldContactFMImage ".concat(el, "\n    fieldContactFMImageTablet ").concat(el, "\n    fieldContactFMImageMobile ").concat(el, "\n}\n\nfragment ContactFormModuleFormType on ParagraphContactFormModuleFormType {\n    fieldContactFFormName\n    fieldContactFFormId\n    fieldContactFFormLink ").concat(eo, "\n    fieldContactFSuccessLink ").concat(eo, "\n    fieldContactFFormHeadline\n    fieldContactFFormCopy {\n        value\n    }  \n}\n"),
            em = a(33065),
            e_ = "\n  fragment CtaModule on ParagraphCtaModule {\n    fieldCtaModLogos ".concat(el, "\n    fieldCtaModCtaLink ").concat(eo, "\n    fieldCtaModEyebrowTag\n    fieldCtaModOpenNewTab\n    fieldCtaModHeadline\n    fieldCtaModSubHeadline\n    fieldCtaModCopy { value }\n    fieldFieldCtaModPrimaryCta { entity { ...CTA }}\n    fieldCtaModSecondaryCta { entity { ...CTA } }\n    fieldCtaModCentered\n    fieldSidebarNavigationTitle\n    fieldCtaModFormId    \n    fieldCtaModFormSuccess ").concat(eo, "\n}\n"),
            ep = a(98657), eh = a(60674), eg = a(38135), ef = a(10520), ev = a(33774),
            eC = "\n  fragment GenericCardModule on ParagraphGenericCardModule {\n    id\n    fieldGenericCardHeadline {\n      value\n    }\n    fieldGenericCardImageWidth\n    fieldGenericCFullCardLinks\n    fieldGenericCParagraphWidth\n    fieldSidebarNavigationTitle\n    fieldGenericCardCards {\n      targetId\n      entity {\n        ... on ParagraphGenericCardModuleCard {\n          fieldGenericCardsCImage ".concat(el, "\n          fieldGenericCardCCopy {\n            value\n          }\n          fieldGenericCardCHeadline  {\n            value\n          }\n          fieldGenericCardCLinkCta {\n            entity {\n              ...CTA\n            }\n          }\n          fieldGenericCardCLinkedin ").concat(eo, "       \n        }\n      }\n    }\n  }\n"),
            ex = a(54031);
        let eb = "entity {\n  ... on ParagraphHeroCarouselItem {\n    fieldCarouselItemHeadline\n    fieldCarouselItemCopy\n    fieldCarouselItemImage ".concat(el, "\n    fieldCarouselItemThumbnail ").concat(el, "\n    fieldCarouselItemCtaRef {\n      entity{\n        ...CTA\n      }\n    }\n    fieldCarouselItemMicroCopy\n    fieldCarouselItemMCopyLink ").concat(eo, "\n    fieldCarouselItemMCopyNTab  \n    fieldCarouselItemMobImage ").concat(el, "\n  }\n}");
        var ey = "\nfragment HeroCarousel on ParagraphHeroCarousel {\n  fieldCarouselItem1 { ".concat(eb, " }\n  fieldCarouselItem2 { ").concat(eb, " }\n  fieldCarouselItem3 { ").concat(eb, " }\n  fieldCarouselItem4 { ").concat(eb, " }\n}\n"),
            eA = a(29057),
            ej = "\nfragment HeroModule on ParagraphHeroModule {\n  fieldHeroMEyebrowTag\n  fieldHeroMTagColor\n  fieldHeroMHeadline\n  fieldHeroMSubHeadline\n  fieldHeroMImageUpload ".concat(el, "\n  fieldHeroMMobImageUpload ").concat(el, "\n  fieldHeroMCenterText\n  fieldHeroMCtaLinks {\n    entity {\n      ... on ParagraphCtaWithIcon {\n        fieldCtaWIconIcon\n        fieldCtaWIconCtaLink ").concat(eo, "\n        fieldCtaWIconOpenInNewTab    \n        fieldCtaWIconWistiaVideoId\n        fieldCtaWIconAnchorId\n      }\n    }\n  }\n  fieldHeroMGradient\n  fieldHeroMButtonCtaVariant\n}\n"),
            eN = a(20140),
            ew = "\nfragment IconTextModule on ParagraphIconTextModule {\n  fieldItEyebrow\n  fieldItHeadline\n  fieldItBottomButtonCta { entity { ...CTA }}\n  fieldGenericBlueBackground\n  fieldItItem {\n    entity {\n      ...on ParagraphIconTextItem {\n        fieldItText\n        fieldItItemLink ".concat(eo, "      \n        fieldItOpenNewTab\n        fieldItModItemIconImage ").concat(el, "\n      }\n    }\n  }\n}\n"),
            eI = a(39271),
            eM = "\n  fragment IntroCardHeroModule on ParagraphIntroCardHeroModule {\n    fieldIntrocardModCards {\n      entity {\n        ...IntroCardHeroModuleCard\n      }\n    }\n  }\n\n  fragment IntroCardHeroModuleCard on ParagraphIntroCardHeroModuleCard {\n    fieldIntrocardCHeadline\n    fieldIntrocardCCopy { value }\n    fieldIntrocardCImage ".concat(el, "\n    fieldIntrocardCLinkCta { entity { ...CTA } }\n    fieldIntrocardCButtonCta { entity { ...CTA } }\n    fieldIntrocardCAuthorImage ").concat(el, "\n    fieldIntrocardCAuthorName\n    fieldIntrocardCDate { value }\n    fieldIntrocardCEyebrow\n    fieldIntrocardCHeadlineSize\n    fieldIntrocardCReadTime\n    fieldIntrocardCTag\n    fieldIntrocardCTagColor\n    fieldIntrocardCMobileImage ").concat(el, "\n  }\n"),
            ek = a(91461), eB = a(44290),
            eT = "\nfragment IntroWithGraphicLinksModule on ParagraphIntroWithGraphicLinksModule {\n    fieldIntroWGLinksHeadline\n    fieldIntroWGLinksCopy\n    fieldIntroWGLinksLinks {\n        entity { ...CTA }\n    }\n    fieldIntroWGLinksButtonCta {\n        entity { ...CTA }\n    }\n    fieldIntroWGLinksDeskImage ".concat(el, "\n    fieldIntroWGLinksTabImage ").concat(el, "\n    fieldIntroWGLinksMobImage ").concat(el, "\n    fieldIntroWGLinksCentered\n    fieldSidebarNavigationTitle\n}\n"),
            eS = "\nfragment IntroWithGraphicModule on ParagraphIntroWithGraphicModule {\n    fieldIntroWGModImage ".concat(el, "\n    fieldIntroWGModTabletImage ").concat(el, "\n    fieldIntroWGModMobileImage ").concat(el, "\n    fieldIntroWGModCaption\n    fieldIntroWGModEyebrow\n    fieldIntroWGModHeadline\n    fieldIntroWGModBackground\n    fieldIntroWGModShowNumbers\n    fieldIntroWGModCards {\n        entity { ...IntroWithGraphicModuleCard }\n    }\n    fieldSidebarNavigationTitle\n    fieldIntroWGModLottie {\n      entity {\n        url\n      }\n    }\n  }\n\n  fragment IntroWithGraphicModuleCard on ParagraphIntroWithGraphicModuleCard {\n    fieldIntroWGraphicCardCopy{\n      value\n    }\n  }\n"),
            eP = a(4176),
            eL = "\nfragment IntroWithResponsiveGraphicMo on ParagraphIntroWithResponsiveGraphicMo {\n    fieldIntroWRGModEyebrow\n    fieldIntroWRGModHeadline\n    fieldIntroWRGModSubhead\n    fieldIntroWRGModDeskImage ".concat(el, "\n    fieldIntroWRGModTabImage ").concat(el, "\n    fieldIntroWRGModMobImage ").concat(el, "\n    fieldIntroWRGModTextCols {\n        entity { ...IntroWithResponsiveGraphicTc }\n    }\n    fieldSidebarNavigationTitle\n}\n\nfragment IntroWithResponsiveGraphicTc on ParagraphIntroWithResponsiveGraphicTc {\n    fieldIntroWRGTcHeadline\n    fieldIntroWRGTcCopy\n    fieldIntroWRGTcColor\n}\n"),
            eE = a(26704),
            eH = "\nfragment LeaderWithGraphicModule on ParagraphLeaderWithGraphicModule {\n    fieldLeaderWGrIsBlueBack\n    fieldLeaderWGrEyebrow\n    fieldLeaderWGrHeadline\n    fieldLeaderWGrCopy\n    fieldLeaderWGrCta {\n        entity { ...CTA }\n    }\n    fieldLeaderWGrImage ".concat(el, "\n    fieldLeaderWGrImageTablet ").concat(el, "\n    fieldLeaderWGrImageMobile ").concat(el, "\n    fieldLeaderWGrBottomColumns {\n        value\n    }\n    fieldLeaderWGrCentered\n    fieldSidebarNavigationTitle  \n}\n"),
            eW = a(89742), eQ = a(60474),
            eR = "\nfragment LeadershipProfileModule on ParagraphLeadershipProfileModule {\n	fieldLProfileModImage ".concat(el, "\n    fieldLProfileModLink {\n        entity { ...CTA }\n    }\n    fieldLProfileModTitle\n    fieldLProfileModPosition\n    fieldLProfileModLogoLink ").concat(eo, "\n    fieldLProfileModLogoNewTab \n    fieldLProfileModContent {\n        value\n    }\n	fieldLProfileModButtonCta {\n        entity { ...CTA }\n    }\n}\n\n"),
            eF = a(93430), eZ = a(84220),
            eG = "\nfragment LogoListsModule on ParagraphLogoListsModule {\n    fieldLogoListsModEyebrow\n    fieldLogoListsModHeadline\n    fieldLogoListsModCopy{\n        value\n    }\n    fieldLogoListsModLists {\n        entity { ...LogoListsModuleList }\n    }\n    fieldLogoListsModHasCards\n    fieldSidebarNavigationTitle\n    fieldLogoListsModCta {\n        entity { ...CTA }\n    }\n}\n\nfragment LogoListsModuleList on ParagraphLogoListsModuleList {\n    fieldLogoListsListHeadline\n    fieldLogoListsListLogos {\n        entity { ...LogoListsModuleLogo }\n    }\n}\n\nfragment LogoListsModuleLogo on ParagraphLogoListsModuleLogo {\n    fieldLogoListsLogoName\n    fieldLogoListsLogoImage ".concat(el, "\n    fieldLogoListsLogoLink ").concat(eo, "\n    fieldLogoListsLogoNewTab \n}\n"),
            eO = a(57353),
            eD = "\nfragment LogosModule on ParagraphLogosModule {\n    fieldLogosModEyebrow\n    fieldLogosModHeadline\n    fieldLogosModLogosGroups{\n        entity { ...LogosModuleLogoGroup }\n    }\n    fieldSidebarNavigationTitle\n}\n\nfragment LogosModuleLogoGroup on ParagraphLogosModuleLogoGroup {\n    fieldLogoGroupHeadline\n    fieldLogoGroupLogos {\n        entity { ...LogosModuleLogo }\n    }\n    fieldLogoGroupSubgroups {\n        entity { ...LogosModuleLogoSubgroup }\n    }\n}\n\nfragment LogosModuleLogoSubgroup on ParagraphLogosModuleLogoSubgroup {\n    fieldLogoSubgroupSubHeadline\n    fieldLogoSubgroupLogos {\n        entity { ...LogosModuleLogo }\n    }\n}\n\nfragment LogosModuleLogo on ParagraphLogosModuleLogo {\n    fieldLogosModLogoImage ".concat(el, "\n    fieldLogosModLogoLink ").concat(eo, "\n    fieldLogosModLogoNewTab\n}\n\n"),
            ez = a(6202), eU = a(4128), eq = a(22044), eV = a(69345), eY = a(53496), eJ = a(91481),
            eK = "\nfragment PartnersModule on ParagraphPartnersModule {\n    fieldPartnersModEyebrow\n    fieldPartnersModHeadline\n    fieldPartnersModSubHeadline\n    fieldPartnersModLogos {\n        entity { ...PartnersModuleLogo }\n    }\n    fieldPartnersModPrimaryCta {\n        entity { ...CTA }\n    }\n    fieldPartnersModSecondaryCta {\n        entity { ...CTA }\n    }\n}\n\nfragment PartnersModuleLogo on ParagraphPartnersModuleLogo {\n    fieldPartnersModLogoImage ".concat(el, "\n    fieldPartnersModLogoLink ").concat(eo, "\n    fieldPartnersModLogoNewTab\n}\n"),
            eX = a(71152),
            e$ = "\nfragment PlatformModule on ParagraphPlatformModule {\n  fieldPlatformMBlueBackground\n  fieldPlatformMEyebrowTag\n  fieldPlatformMHeadline\n  fieldPlatformMSubHeadline\n  fieldPlatformMImage ".concat(el, "\n  fieldPlatformMImageCaption\n  fieldPlatformMHasAccordions\n  fieldPlatformMCta {\n    entity { ...CTA }\n  }\n  fieldPlatformMLinks {\n    entity {\n      ... on ParagraphPlatformModuleLink {\n        fieldPlatformMLinkHeadline\n        fieldPlatformMLinkSubhead\n        fieldPlatformMLinkCtaLink ").concat(eo, "\n        fieldPlatformMLinkNewTab\n        fieldPlatformMLinkContent { value }\n      }\n    }\n  }\n  fieldSidebarNavigationTitle\n}\n"),
            e0 = a(49945), e1 = a(20878), e2 = a(61725),
            e4 = "\nfragment PromotionalModule on ParagraphPromotionalModule {\n    fieldPromoModHeadline\n    fieldPromoModCopy\n    fieldPromoModButtonCta { entity { ...CTA } }\n    fieldPromoModLinkCta { entity { ...CTA } }\n    fieldPromoModVideoId\n    fieldPromoModCentered\n    fieldPromoModBackgroundImage ".concat(el, "\n    fieldPromoModTabletImage ").concat(el, "\n    fieldPromoModMobileImage ").concat(el, "\n    fieldSidebarNavigationTitle\n}\n"),
            e3 = a(83084),
            e8 = "\nfragment PyramidDiagramModule on ParagraphPyramidDiagramModule {\n    fieldPyramidModEyebrow\n    fieldPyramidModHeadline\n    fieldPyramidModDesktopImage ".concat(el, "\n    fieldPyramidModTabletImage ").concat(el, "\n    fieldPyramidModMobileImage ").concat(el, "\n    fieldPyramidModCta {\n        entity { ...CTA }\n    }\n    fieldSidebarNavigationTitle\n}\n"),
            e9 = a(56089), e6 = a(92218), e5 = a(62059), e7 = a(56769), le = a(83634), ll = a(75272), la = a(54319),
            lt = a(55846),
            lo = "\nfragment StatsCardsModule on ParagraphStatsCardsModule {\n    fieldStatscardsModHeadline\n    fieldStatscardsNumNumbers {\n        entity { ...StatsCardsModuleNumber }\n    }\n    fieldStatscardsModLogos {\n        entity { ...StatsCardsModuleLogo }\n    }\n    fieldStatscardsModCta {\n        entity { ...CTA }\n    }\n}\n\nfragment StatsCardsModuleNumber on ParagraphStatsCardsModuleNumber{\n    fieldStatscardsNumNumber\n    fieldStatscardsNumColor\n    fieldStatscardsNumDescription\n    fieldStatscardsNumCta {\n        entity { ...CTA }\n    }\n}\n\nfragment StatsCardsModuleLogo on ParagraphStatsCardsModuleLogo{\n    fieldStatscardsLogoDesc\n    fieldStatscardsLogoLink ".concat(eo, "\n    fieldStatscardsLogoImage ").concat(el, "\n    fieldStatscardsLogoNewTab\n}\n"),
            ln = a(31233), li = a(40819), lr = a(10484),
            ld = "\nfragment TabsModule on ParagraphTabsModule {\n    fieldTabsModuleEyebrow\n    fieldTabsModuleTopics {\n        entity { ...TabsModuleTopic }\n    }\n    fieldTabsModuleHeadline\n    fieldTabsModuleCopy {\n        value\n    }\n    fieldTabsModuleFullWidth\n    fieldSidebarNavigationTitle  \n}\n\nfragment TabsModuleTopic on ParagraphTabsModuleTopic{\n    fieldTabsModuleTopicTitle\n    fieldTabsModuleTopicImageM ".concat(el, "\n    fieldTabsModuleTopicImageT ").concat(el, "\n    fieldTabsModuleTopicImage ").concat(el, "\n    fieldTabsModuleTopicHeadline\n    fieldTabsModuleTopicCopy {\n        value\n    }\n    fieldTabsModuleTopicCards {\n        entity { ...TabsModuleCard }\n    }\n}\n\nfragment TabsModuleCard on ParagraphTabsModuleCard{\n    fieldTabsModCardIcon ").concat(el, "\n    fieldTabsModCardHeadline\n    fieldTabsModCardSubheadForm {\n        value\n    }\n    fieldTabsModCardCta {\n        entity { ...CTA }\n    }\n}\n\n"),
            ls = a(61027),
            lc = "\nfragment TestimonialsModule on ParagraphTestimonialsModule {\n    fieldTestimModTestimonials {\n        entity { ...TestimonialsModuleTestimonial }\n    }\n    fieldTestimModBBackground\n    fieldTestimModCentered \n    fieldSidebarNavigationTitle\n}\n\nfragment TestimonialsModuleTestimonial on ParagraphTestimonialsModuleTestimonial {\n	fieldTestimTMainImage ".concat(el, "\n    fieldTestimTName\n    fieldTestimTPosition\n    fieldTestimTLogo ").concat(el, "\n    fieldTestimTLogoLink ").concat(eo, "\n    fieldTestimTLogoNewTab\n    fieldTestimTQuote\n    fieldTestimTBottomLink { \n        entity { ...CTA }\n    }\n}\n\n"),
            lu = a(32250), lm = a(39224), l_ = a(9599), lp = a(41211), lh = a(80640),
            lg = "\nfragment VideoCardModule on ParagraphVideoCardModule {\n    fieldVideoCardModWistiaId\n    fieldVideoCardModVideoTitle\n    fieldVideoCardModBtnText\n    fieldVideoCardModImageM ".concat(el, "\n    fieldVideoCardModImage ").concat(el, "\n}\n"),
            lf = a(33440),
            lv = "\nfragment WorkloadsModule on ParagraphWorkloadsModule {\n    fieldWorkloadsModEyebrow\n    fieldWorkloadsModHeadline\n    fieldWorkloadsModImage ".concat(el, "\n    fieldWorkloadsModImageTablet ").concat(el, "\n    fieldWorkloadsModImageMobile ").concat(el, "\n    fieldWorkloadsModSteps\n    fieldWorkloadsModCaptionHead\n    fieldWorkloadsModCaptionCopy\n    fieldWorkloadsModSections {\n        entity { ...WorklodsModuleListsSection }\n    }\n    fieldSidebarNavigationTitle\n}\n\nfragment WorklodsModuleListsSection on ParagraphWorklodsModuleListsSection {\n    fieldWorkloadsSectionTitle\n    fieldWorkloadsSectionCopy\n    fieldWorkloadsSectionLists {\n        entity { ...WorkloadsModuleList }\n    }\n}\n\nfragment WorkloadsModuleList on ParagraphWorkloadsModuleList {\n    fieldWorkloadsListTitle\n    fieldWorkloadsListItems\n}\n"),
            lC = a(50950), lx = a(31816),
            lb = "\nfragment RequestADemoModule on ParagraphRequestADemoModule {\n	fieldReqDemoModTag\n    fieldReqDemoModHeadline\n    fieldReqDemoModSubheadline {\n        value\n    }\n	fieldReqDemoModColor\n    fieldReqDemoModFormId\n    fieldReqDemoModImage ".concat(el, "\n	fieldReqDemoModCopy {\n    value\n  }\n  fieldReqDemoModFormHeadline\n  fieldReqDemoModFormCopy {\n      value\n  }\n  fieldReqDemoModSuccessLink ").concat(eo, "\n  fieldSidebarNavigationTitle\n}\n"),
            ly = a(74980),
            lA = "\nfragment ImageModule on ParagraphImageModule {\n  desktopImage: fieldImImage ".concat(el, "\n  tabletImage: fieldImImageTablet ").concat(el, "\n  mobileImage: fieldImImageMobile ").concat(el, "\n  roundCorners: fieldImRoundCorners\n}\n"),
            lj = a(13177), lN = a(7297);

        function lw() {
            let e = (0, lN.Z)(['\n  query nodeQuery ($language: LanguageId = EN) {\n    nodeQuery (\n      limit: 3000,\n      offset: 0,\n      filter: {\n        conditions: [\n          {\n            operator: EQUAL,\n            field: "type",\n            value: ["customer"]\n          },\n        ]\n      }) {\n      count\n      entities (language: $language) {\n        ... on NodeCustomer {\n          entityId\n          fieldHasDetails\n          title\n          fieldLogo {\n            width\n            height\n            url\n            alt\n            title\n          }\n        }\n      }\n    }\n  }\n']);
            return lw = function () {
                return e
            }, e
        }

        var lI = (0, a(17822).Ps)(lw());
        let lM = [{
            component: K()(() => Promise.resolve().then(a.bind(a, 3305)), {loadableGenerated: {webpack: () => [3305]}}),
            query: "\n  fragment ResourceFilterModule on ParagraphResourceFilterModule {\n    __typename\n    fieldResourceFilterHeadline\n  }\n",
            typename: X.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 43824)), {loadableGenerated: {webpack: () => [43824]}}),
            query: "\nfragment BlogPostFilterModule on ParagraphBlogPostFilterModule {\n    fieldBlogPostFilterHeadline {value}\n    author: fieldBlogPostFilterAuthor {\n      entity {\n        name\n      }\n    }\n}\n",
            typename: $.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 63087)), {loadableGenerated: {webpack: () => [63087]}}),
            query: ea,
            typename: ee.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 51037)), {loadableGenerated: {webpack: () => [51037]}}),
            query: en,
            typename: et.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 21501)), {loadableGenerated: {webpack: () => [21501]}}),
            query: er,
            typename: ei.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 71835)), {loadableGenerated: {webpack: () => [71835]}}),
            query: "\nfragment ColumnTextModule on ParagraphColumnTextModule {\n    fieldColumnTextMEyebrow\n    fieldColumnTextBBackground\n    fieldColumnTextMSections{\n        entity { ...ColumnTextModuleSection }\n    }\n    fieldSidebarNavigationTitle\n}\n\nfragment ColumnTextModuleSection on ParagraphColumnTextModuleSection {\n    fieldColumnTextSHeadline\n    fieldColumnTextSSubHeadline\n    fieldColumnTextSShowLine\n    fieldColumnTextSCards {\n        entity { ...ColumnTextModuleCard }\n    }\n}\n\nfragment ColumnTextModuleCard on ParagraphColumnTextModuleCard {\n    fieldColumnTextCSubHeadline\n    fieldColumnTextCCopy {\n        value\n    }\n    fieldColumntTextCCta {\n        entity { ...CTA }\n    }\n}\n",
            typename: q.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 94564)), {loadableGenerated: {webpack: () => [94564]}}),
            query: "\nfragment ColumnsIconsModule on ParagraphColumnsIconsModule {\n    fieldColumnIModColumnCount\n    fieldColumnsIModTopCta {\n        entity { ...CTA }\n    }\n    fieldColumnsIModEyebrow\n    fieldColumnsIModHeadline\n    fieldColumnsIModBottomCta {\n        entity { ...CTA }\n    }\n    fieldColumnsIModSubHeadline\n    fieldColumnsIModCards {\n        entity { ...ColumnsIconsModuleCard }\n    }\n    fieldColumnsIModCentered\n    fieldSidebarNavigationTitle\n    fieldGenericBlueBackground\n}\n\nfragment ColumnsIconsModuleCard on ParagraphColumnsIconsModuleCard {\n    fieldColumnsICardIcon ".concat(el, "\n    fieldColumnsICardHeadline\n    fieldColumnsICardSubheadline\n    fieldColumnsICardCta { entity { ...CTA } }\n}\n"),
            typename: ed.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 95289)), {loadableGenerated: {webpack: () => [95289]}}),
            query: "\nfragment ComparisonModule on ParagraphComparisonModule{\n    fieldCompModHeadline\n    fieldCompModTitle1\n    fieldCompModTitle2\n    fieldCompModCol2TitleGreen\n    fieldCompModCol3TitleGreen\n    fieldCompModRows {\n        entity { ...ComparisonModuleRow }\n    }\n    fieldCompModCta {\n        entity { ...CTA }\n    }\n    fieldSidebarNavigationTitle\n    fieldCompModHasAccordion\n    fieldCompModTableTitle  \n}\n\nfragment ComparisonModuleRow on ParagraphComparisonModuleRow{\n    fieldCompModRowCol1Copy\n    fieldCompModRowCol2Copy\n    fieldCompModRowCol2Icon\n    fieldCompModRowCol3Copy\n    fieldCompModRowCol3Icon\n}\n",
            typename: V.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 73206)), {loadableGenerated: {webpack: () => [73206]}}),
            query: "\nfragment ComplianceAchievementModule on ParagraphComplianceAchievementModule {\n    fieldComplianceModEyebrow\n    fieldSidebarNavigationTitle\n    fieldComplianceModHasSearch\n    fieldComplianceModSearchText\n    fieldComplianceModSections {\n        entity {\n            ...ComplianceAchievementModuleSe\n        }\n    }\n}\n\nfragment ComplianceAchievementModuleSe on ParagraphComplianceAchievementModuleSe {\n	fieldComplianceSecHeadline\n    fieldComplianceSecCopy {\n        value\n    }\n    fieldComplianceSecSubheadline\n    fieldComplianceSecSubcopy {\n        value\n    }\n    fieldComplianceSecLinkCta {\n        entity {\n            ...CTA\n        }\n    }\n    fieldComplianceSecIsBlue\n    fieldComplianceSecCards {\n        entity {\n            ...ComplianceAchievementModuleCard\n        }\n    }\n}\n\nfragment ComplianceAchievementModuleCard on ParagraphComplianceAchieveModuleCard {\n    fieldComplianceCardTitle\n    fieldComplianceCardCopy {\n        value\n    }\n    fieldComplianceCardImage ".concat(el, "\n    fieldComplianceCardLinks {\n        entity {\n            ...CTA\n        }\n    }\n    fieldComplianceCardColumn {\n        value\n    }\n}\n\n"),
            typename: es.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 26784)), {loadableGenerated: {webpack: () => [26784]}}),
            query: eu,
            typename: ec.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 33065)), {loadableGenerated: {webpack: () => [33065]}}),
            query: e_,
            typename: em.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 98657)), {loadableGenerated: {webpack: () => [98657]}}),
            query: "\nfragment CustomerStoriesFilterModule on ParagraphCustomerStoriesFilterModule {\n    fieldCustStorModHeadline\n    fieldSidebarNavigationTitle\n}\n",
            typename: ep.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 60674)), {loadableGenerated: {webpack: () => [60674]}}),
            query: "\nfragment DemoFormModule on ParagraphDemoFormModule {\n    fieldDemoFormHeadline\n    fieldDemoFormSubHeadline\n    fieldDemoFormMarketoFormId\n    fieldDemoFormSuccessLink ".concat(eo, "\n    fieldSidebarNavigationTitle\n    fieldDemoFormFullWidth  \n}\n"),
            typename: eh.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 38135)), {loadableGenerated: {webpack: () => [38135]}}),
            query: "\n  fragment EventsFilter on ParagraphEventsFilter {\n    fieldEventsFilterHeadline {\n      value\n    }\n  }\n",
            typename: eg.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 10520)), {loadableGenerated: {webpack: () => [10520]}}),
            query: "\n  fragment FeaturedEventsModule on ParagraphFeaturedEventsModule {\n    fieldFeaturedEventsHeadline {\n      value\n    }\n    fieldFeaturedEventsEmpty {\n      entity {\n        ... on ParagraphTextCardModule {\n          fieldTextCardMHeadline\n          fieldTextCardMCopy {\n            value\n          }\n          fieldTextCardMCta {\n            entity {\n              ...CTA\n            }\n          }\n          fieldTextCardMCardColor\n        }\n      }\n    }\n  }\n",
            typename: ef.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 33774)), {loadableGenerated: {webpack: () => [33774]}}),
            query: eC,
            typename: ev.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 54031)), {loadableGenerated: {webpack: () => [54031]}}),
            query: ey,
            typename: ex.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 29057)), {loadableGenerated: {webpack: () => [29057]}}),
            query: ej,
            typename: eA.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 20140)), {loadableGenerated: {webpack: () => [20140]}}),
            query: ew,
            typename: eN.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 39271)), {loadableGenerated: {webpack: () => [39271]}}),
            query: eM,
            typename: eI.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 91461)), {loadableGenerated: {webpack: () => [91461]}}),
            query: "\nfragment IntroModule on ParagraphIntroModule {\n    fieldFieldIntroModuleCopy{\n        value\n    }\n    fieldSidebarNavigationTitle\n}\n",
            typename: ek.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 44290)), {loadableGenerated: {webpack: () => [44290]}}),
            query: eT,
            typename: eB.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 86567)), {loadableGenerated: {webpack: () => [86567]}}),
            query: eS,
            typename: U.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 4176)), {loadableGenerated: {webpack: () => [4176]}}),
            query: eL,
            typename: eP.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 26704)), {loadableGenerated: {webpack: () => [26704]}}),
            query: eH,
            typename: eE.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 89742)), {loadableGenerated: {webpack: () => [89742]}}),
            query: "\nfragment LeaderWithoutGraphicModule on ParagraphLeaderWithoutGraphicModule {\n    fieldLeaderFormattedCopy{\n        value\n    }\n    fieldLeaderEyebrow\n    fieldLeaderHeadline\n    fieldLeaderIsFullWidth\n    fieldLeaderTextWBDot { \n        entity { ...TextWithBackgroundDot } \n    }\n    fieldSidebarNavigationTitle\n}\n\nfragment TextWithBackgroundDot on ParagraphTextWithBackgroundDot {\n    fieldTextWBDotCopy\n    fieldTextWBDotDotSize\n    fieldTextWBDotHeadline\n    fieldTextWBDotDotColour\n    fieldTextWBDotEyebrow\n}\n",
            typename: eW.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 60474)), {loadableGenerated: {webpack: () => [60474]}}),
            query: eR,
            typename: eQ.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 93430)), {loadableGenerated: {webpack: () => [93430]}}),
            query: "\n  fragment LightHero on ParagraphLightHero {\n    id\n    fieldLightHeroHeadline {\n      value\n    }\n    fieldLightHeroCtaText {\n      value\n    }\n    fieldLightHeroLinkCta {\n      entity {\n        ...CTA\n      }\n    }\n    fieldLightHeroMarketoFormId\n    fieldLightHeroSuccessLink ".concat(eo, "\n  }\n"),
            typename: eF.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 84220)), {loadableGenerated: {webpack: () => [84220]}}),
            query: eG,
            typename: eZ.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 57353)), {loadableGenerated: {webpack: () => [57353]}}),
            query: eD,
            typename: eO.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 6202)), {loadableGenerated: {webpack: () => [6202]}}),
            query: "\n  fragment MediaCoverageModule on ParagraphMediaCoverageModule {\n    fieldMediaCoverageHeadline\n    # fieldMediaCoverageEmpty {\n    #   entity {\n    #     ... on ParagraphTextCardModule {\n    #       fieldTextCardMHeadline\n    #       fieldTextCardMCopy {\n    #         value\n    #       }\n    #       fieldTextCardMCta {\n    #         entity {\n    #           ...CTA\n    #         }\n    #       }\n    #       fieldTextCardMCardColor\n    #     }\n    #   }\n    # }\n  }\n",
            typename: ez.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 4128)), {loadableGenerated: {webpack: () => [4128]}}),
            query: "\nfragment MulticolumnTableModule on ParagraphMulticolumnTableModule {\n	fieldMulticolModHeadline\n    fieldMulticolModColumns {\n        entity {\n            ...MulticolumnTableModuleColumn\n        }\n    }\n    fieldMulticolModRowGroups {\n        entity {\n            ...MulticolumnTableModuleGroup\n        }\n    }\n    fieldMulticolModButtonCta {\n        entity {\n            ...CTA\n        }\n    }\n}\n\nfragment MulticolumnTableModuleColumn on ParagraphMulticolumnTableModuleColumn {\n	fieldMulticolColTitle\n    fieldMulticolColHighlighted\n    fieldMulticolColRows {\n        entity {\n            ...MulticolumnTableModuleCell\n        }\n    }\n}\n\nfragment MulticolumnTableModuleCell on ParagraphMulticolumnTableModuleCell {\n	fieldMulticolCellIcon\n    fieldMulticolCellText { value }\n    fieldMulticolCellHelperText\n}\n\nfragment MulticolumnTableModuleGroup on ParagraphMulticolumnTableModuleGroup {\n	fieldMulticolGroupTitle\n    fieldMulticolGroupRowSpan\n}\n\n",
            typename: eU.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 22044)), {loadableGenerated: {webpack: () => [22044]}}),
            query: "\n  fragment NewsFilter on ParagraphNewsFilter {\n    fieldNewsFilterHeadline {\n      value\n    }\n  }\n",
            typename: eq.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 69345)), {loadableGenerated: {webpack: () => [69345]}}),
            query: "\n  fragment NumbersModule on ParagraphNumbersModule {\n    fieldNumbersModuleCopy {\n      value\n    }\n    fieldNumbersModuleCta {\n      entity {\n        ...CTA\n      }\n    }\n    fieldNumbersModuleEyebrow\n    fieldNumbersModuleHeadline\n    fieldNumbersModuleVariant\n    fieldNumbersModuleSubheadline\n    fieldNumbersModuleLongCopy\n    fieldNumbersModuleNumbers {\n      entity {\n        ...NumbersModuleNumber\n      }\n    }\n    fieldSidebarNavigationTitle\n  }\n\n  fragment NumbersModuleNumber on ParagraphNumbersModuleNumber {\n    fieldNumberNNumber\n    fieldNumberNColor\n    fieldNumbersNSource\n    fieldNumberNNumberSize\n    fieldNumberNDescription\n    fieldLink {\n      title\n      url {\n        path\n      }\n    }\n  }\n",
            typename: eV.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 53496)), {loadableGenerated: {webpack: () => [53496]}}),
            query: "\nfragment OfficesModule on ParagraphOfficesModule {\n	fieldOfficesModRegions {\n        entity { ...OfficesModuleRegion }\n    }\n}\n\nfragment OfficesModuleRegion on ParagraphOfficesModuleRegion {\n    fieldOfficesRegName\n	fieldOfficesRegOffices {\n        entity { ...OfficesModuleOffice }\n    }\n}\n\nfragment OfficesModuleOffice on ParagraphOfficesModuleOffice {\n	fieldOfficesOffLocation\n    fieldOfficesOffAddress {\n        value\n    }\n    fieldOfficesOffPhoneNumber\n}\n",
            typename: eY.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 91481)), {loadableGenerated: {webpack: () => [91481]}}),
            query: eK,
            typename: eJ.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 71152)), {loadableGenerated: {webpack: () => [71152]}}),
            query: e$,
            typename: eX.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 49945)), {loadableGenerated: {webpack: () => [49945]}}),
            query: "\nfragment PortfolioCardsModule on ParagraphPortfolioCardsModule {\n    fieldPortfolioCModToplabel\n    fieldPortfolioCModViewall\n    fieldPortfolioCModCategories {\n        entity { ...TaxonomyPortfolioTopic }\n    }\n    fieldPortfolioCModCta {\n        entity { ...CTA }\n    }\n    fieldPortfolioCModCards {\n        entity { ...PortfolioCardsModuleCard }\n    }\n    fieldPortfolioCModShowFil\n    fieldPortfolioCModFilLabel  \n    fieldPortfolioCModSearch {\n        entity {\n          ...PortfolioCardsModuleSearch\n        }\n    }\n    fieldPortfolioCModHeadline\n    fieldSidebarNavigationTitle\n}\n\nfragment PortfolioCardsModuleSearch on ParagraphPortfolioCardsModuleSearch {\n	fieldPortfolioSEyebrow\n    fieldPortfolioSHeadline\n}\n\nfragment PortfolioCardsModuleCard on ParagraphPortfolioCardsModuleCard {\n    fieldPortfolioCardTitle\n    fieldPortfolioCardCopy\n    fieldPortfolioCardLink ".concat(eo, "\n    fieldPortfolioCardTypes {\n        entity { ...TaxonomyPortfolioTopic }\n    }\n    fieldPortfolioCardNewTab\n}\n\nfragment TaxonomyPortfolioTopic on TaxonomyTermTopic {\n    name\n    tid\n}\n\n"),
            typename: e0.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 20878)), {loadableGenerated: {webpack: () => [20878]}}),
            query: "\nfragment PricingModule on ParagraphPrincingModule {\n	fieldPricingModHeadline\n    fieldPricingModCopy {\n        value\n    }\n    fieldPricingModCloudColor\n    fieldPricingModPlanColumns {\n        entity { ...PricingModulePlan }\n    }\n    fieldPricingModUseH1Tag\n    fieldPricingModCta {\n        entity { ...CTA }\n    }\n    fieldSidebarNavigationTitle\n}\n\nfragment PricingModulePlan on ParagraphPrincingModulePlan {\n	fieldPricingPlanTitle\n    fieldPricingPlanSubtitle\n    fieldPricingPlanColor\n    fieldPricingPlanContent {\n        value\n    }\n    fieldPricingPlanAddContent{\n        value\n    }\n    fieldPricingPlanHighlighted\n}\n\n\n",
            typename: e1.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 61725)), {loadableGenerated: {webpack: () => [61725]}}),
            query: e4,
            typename: e2.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 83084)), {loadableGenerated: {webpack: () => [83084]}}),
            query: e8,
            typename: e3.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 56089)), {loadableGenerated: {webpack: () => [56089]}}),
            query: "\nfragment Resources on ParagraphResources {\n    fieldResourcesMHeadline: fieldTitle\n    fieldSidebarNavigationTitle\n    fieldResourcesMFullWidth: fieldFullWidth\n    fieldResourcesMResources: fieldResources {\n      entity {\n        ... on ParagraphResourceReference {\n          ctaText: fieldText\n          fieldResourceReference {\n            entity {\n              ...ResourceContentTeaser\n            }\n          }\n        }\n      }\n    }\n    fieldResourcesMCta: fieldCta {\n      entity {\n        ... CTA\n      }\n    }\n  }\n",
            typename: e9.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 92218)), {loadableGenerated: {webpack: () => [92218]}}),
            query: "\nfragment ResourcesWithHighlightVideo on ParagraphResourcesWithHighlightVideo {\n    fieldResHVModHeadline: fieldTitle\n    fieldResHVModImage: fieldImage ".concat(el, "\n    fieldResHVModVideoTitle: fieldText\n    fieldResHVModVideoId: fieldVideoId\n    fieldResHVModResources: fieldResources {\n      entity {\n        ... on ParagraphResourceReference {\n          ctaText: fieldText\n          fieldResourceReference {\n            entity {\n              ...ResourceContentTeaser\n            }\n          }\n        }\n      }\n    }\n    fieldResHVModCta: fieldCta {\n      entity { ... CTA }\n    }\n  }\n"),
            typename: e6.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 62059)), {loadableGenerated: {webpack: () => [62059]}}),
            query: "\nfragment SearchResultsFilterModule on ParagraphSearchResultsFilterModule {\n    id\n}\n",
            typename: e5.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 56769)), {loadableGenerated: {webpack: () => [56769]}}),
            query: "\n  fragment SecurityAdvisoriesModule on ParagraphSecurityAdvisoriesModule {\n    fieldSecAdFilter {\n      entity {\n        ... on ParagraphSecurityAdvisoriesModFilter {\n          id\n          fieldSecAdFilterHeadline\n          fieldSecAdFilterFilterText\n        }\n      }\n    }\n    fieldSecAdItems {\n      entity {\n        ... on ParagraphSecurityAdvisoriesModuleItem {\n          fieldSecAdItemHeadline {\n            value\n          }\n          fieldSecAdPriority\n          fieldSecAdItemCopy {\n            value\n          }\n          fieldSecAdItemDate {\n            value\n          }\n        }\n      }\n    }\n  }\n",
            typename: e7.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 83634)), {loadableGenerated: {webpack: () => [83634]}}),
            query: "\nfragment SolutionsImageTextModule on ParagraphSolutionsImageTextModule {\n    fieldSolImtextModEyebrow\n    fieldSolImtextModHeadline\n    fieldSolImtextModCopy\n    fieldSolImtextModRows {\n        entity { ...SolutionsImageTextModuleRow }\n    }\n}\n\nfragment SolutionsImageTextModuleRow on ParagraphSolutionsImageTextModuleRow {\n    fieldSolImtextRowHeadline\n    fieldSolImtextRowCopy\n    fieldSolImtextRowImage ".concat(el, "\n    fieldSolImtextRowCta {\n        entity { ...CTA }\n    }\n}\n"),
            typename: le.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 75272)), {loadableGenerated: {webpack: () => [75272]}}),
            query: "\nfragment SolutionsModule on ParagraphSolutionsModule {\n    fieldSolutionsMEyebrow\n    fieldSolutionsMHeadline\n    fieldSolutionsMSubHeadline\n    fieldSolutionsMCards {\n        entity { ...SolutionCard }\n    }\n    fieldSolutionsMBackground\n    fieldSidebarNavigationTitle  \n}\n\nfragment SolutionCard on ParagraphSolutionCard{\n    fieldSolCardHeadline\n    fieldSolCardImageUpload ".concat(el, "\n    fieldSolCardSubHeadline\n    fieldSolCardCta {\n        entity { ...CTA }\n    }\n}\n"),
            typename: ll.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 54319)), {loadableGenerated: {webpack: () => [54319]}}),
            query: "\nfragment SpacerModule on ParagraphSpacerModule {\n    fieldSpacerModuleSpace\n    fieldSpacerModuleTabletSpace\n    fieldSpacerModuleMobileSpace\n}\n",
            typename: la.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 55846)), {loadableGenerated: {webpack: () => [55846]}}),
            query: lo,
            typename: lt.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 31233)), {loadableGenerated: {webpack: () => [31233]}}),
            query: "\nfragment SubmissionFormModule on ParagraphSubmissionFormModule {\n    fieldSubmissionFormIframeUrl ".concat(eo, "\n    fieldSidebarNavigationTitle\n}\n"),
            typename: ln.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 40819)), {loadableGenerated: {webpack: () => [40819]}}),
            query: "\n    fragment Table on ParagraphTable {\n        fieldEyebrow\n        firstRowIsHeading: fieldBoolean\n        fieldTitle\n        fieldBody {\n            value\n        }\n        fieldTableRows {\n            entity {\n                ...TableRow\n            }\n        }\n        fieldSidebarNavigationTitle\n  }\n  \n    fragment TableRow on ParagraphTableRow {\n            columns: fieldMultivalueContent {\n                value\n            }\n    }\n",
            typename: li.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 10484)), {loadableGenerated: {webpack: () => [10484]}}),
            query: ld,
            typename: lr.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 61027)), {loadableGenerated: {webpack: () => [61027]}}),
            query: lc,
            typename: ls.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 32250)), {loadableGenerated: {webpack: () => [32250]}}),
            query: "\nfragment TextCardModule on ParagraphTextCardModule {\n    fieldTextCardMHeadline\n    fieldTextCardMCopy {\n        value\n    }\n    fieldTextCardMCta { entity { ...CTA } }\n    fieldTextCardMCardColor\n    fieldTextCardMWistiaId\n}\n",
            typename: lu.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 39224)), {loadableGenerated: {webpack: () => [39224]}}),
            query: "\nfragment UseCasesWithNavModule on ParagraphUseCasesWithNavModule {\n    fieldUseCasesWNavEyebrow\n    fieldUseCasesWNavRows {\n        entity { ...UseCasesRow }\n    }\n    fieldUseCasesWNavHeadline\n    fieldUseCasesWNavCopy {\n        value\n    }\n    fieldUseCasesWNavCenter\n    fieldSidebarNavigationTitle  \n}\n\nfragment UseCasesRow on ParagraphUseCasesRow {\n    fieldUseCasesRowHeadline\n    fieldUseCasesRowCards {\n        entity { ...UseCaseCard }\n    }\n}\n\nfragment UseCaseCard on ParagraphUseCaseCard {\n    fieldUseCaseCardTitle\n    fieldUseCaseCardImage ".concat(el, "\n    fieldUseCaseCardCopy {\n        value\n    }\n    fieldUseCaseCardCta {\n        entity { ...CTA }\n    }\n}\n"),
            typename: lm.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 9599)), {loadableGenerated: {webpack: () => [9599]}}),
            query: "\nfragment UseCasesWithoutNavModule on ParagraphUseCasesWithoutNavModule {\n    fieldUseCasesNoNavEyebrow\n    fieldUseCasesNoNavHeadline\n    fieldUseCasesNoNavCards {\n        entity { ...UseCasesWithoutNavModuleCar }\n    }\n    fieldSidebarNavigationTitle\n}\n\nfragment UseCasesWithoutNavModuleCar on ParagraphUseCasesWithoutNavModuleCar {\n    fieldUseCasesNoNavCopy {\n        value\n    }\n    fieldUseCasesNoNavImage ".concat(el, "\n    fieldUseCasesNoNavCta {\n        entity { ...CTA }\n    }\n    fieldUseCasesNoNavHline\n}\n\n"),
            typename: l_.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 41211)), {loadableGenerated: {webpack: () => [41211]}}),
            query: "\nfragment ValidationModule on ParagraphValidationModule {\n    fieldValidationModHeadline  \n    fieldValidationModOkLabel\n    fieldValidationModNoLabel\n    fieldValidationModSuccessM\n}\n",
            typename: lp.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 80640)), {loadableGenerated: {webpack: () => [80640]}}),
            query: lg,
            typename: lh.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 33440)), {loadableGenerated: {webpack: () => [33440]}}),
            query: lv,
            typename: lf.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 50950)), {loadableGenerated: {webpack: () => [50950]}}),
            query: "\nfragment WysiwygModule on ParagraphWysiwygModule {\n    fieldWysiwygModContent{ \n        value\n    }\n    fieldSidebarNavigationTitle\n}\n",
            typename: lC.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 31816)), {loadableGenerated: {webpack: () => [31816]}}),
            query: lb,
            typename: lx.typename,
            extraQueries: void 0
        }, {
            component: K()(() => a.e(271).then(a.bind(a, 30271)), {loadableGenerated: {webpack: () => [30271]}}),
            query: "\n  fragment JobListing on ParagraphJobListing {\n    id\n    fieldJobDepartments\n    listInternships: fieldBoolean\n  }\n",
            typename: "ParagraphJobListing",
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 74980)), {loadableGenerated: {webpack: () => [74980]}}),
            query: lA,
            typename: ly.typename,
            extraQueries: void 0
        }, {
            component: K()(() => Promise.resolve().then(a.bind(a, 13177)), {loadableGenerated: {webpack: () => [13177]}}),
            query: "\nfragment CustomersCarouselModule on ParagraphCustomersCarouselModule {\n  entityId\n}\n",
            typename: lj.typename,
            extraQueries: [lI]
        }];
        var lk = a(83454);
        let lB = lk.env.NEXT_PUBLIC_HIDE_REPEATER, lT = e => {
            var l, a, t, o, n, i, r;
            let {paragraphs: c, hasSidebar: u = !1, sidebar: m} = e, _ = (0, h.useRouter)(),
                g = _.asPath.match(/p\d-demo-page/) || _.asPath.match(/p\d-variants-demo-page/), f = e => {
                    let l = e.substring(9);
                    return (l = (l = l.charAt(0).toLowerCase() + l.slice(1)).replace(/[A-Z]/g, e => "-".concat(e.toLowerCase()))).endsWith("mo") ? l = l.concat("dule") : l.endsWith("m") && (l = l.concat("odule")), "/".concat(l)
                }, v = (c || []).filter(e => e.entity),
                C = (null === (l = v[0]) || void 0 === l ? void 0 : null === (a = l.entity) || void 0 === a ? void 0 : a.__typename) === "ParagraphLightHero",
                x = (null === (t = v[0]) || void 0 === t ? void 0 : null === (o = t.entity) || void 0 === o ? void 0 : o.__typename) === "ParagraphSpacerModule",
                b = (null === (n = v[1]) || void 0 === n ? void 0 : null === (i = n.entity) || void 0 === i ? void 0 : i.__typename) === "ParagraphBlogPostHeaderModule",
                y = b || x ? 1 : 0, A = (null === (r = null == v ? void 0 : v.map(e => {
                    var l;
                    return null == e ? void 0 : null === (l = e.entity) || void 0 === l ? void 0 : l.fieldSidebarNavigationTitle
                })) || void 0 === r ? void 0 : r.filter(e => !!e)) || [];
            return (0, d.jsx)(s.Fragment, {
                children: v.map((e, l) => {
                    let {entity: a} = e, t = l > 0 && Y(v[l - 1].entity), o = Y(a),
                        n = l + 1 < v.length && Y(v[l + 1].entity),
                        i = Object.values(lM).find(e => e.typename === (null == a ? void 0 : a.__typename));
                    if ((null == a ? void 0 : a.__typename) === "ParagraphPrincingModule" && (i = Object.values(lM).find(e => "ParagraphPricingModule" === e.typename)), !lB && i) {
                        var r;
                        let c = (0, d.jsx)(d.Fragment, {children: s.createElement(i.component, {paragraph: e.entity}, null)}),
                            _ = "ParagraphSpacerModule" === e.entity.__typename,
                            h = ["ParagraphResourceFilterModule", "ParagraphEventsFilter", "ParagraphNewsFilter", "ParagraphSecurityAdvisoriesModule", "ParagraphCustomerStoriesFilterModule", "ParagraphBlogPostFilterModule"].includes(e.entity.__typename);
                        return (0, d.jsxs)(s.Fragment, {
                            children: [g && (0, d.jsx)("div", {
                                className: "container overflow-hidden",
                                children: (0, d.jsxs)("div", {
                                    style: {padding: "4rem 0"},
                                    children: [(0, d.jsx)("span", {
                                        style: {
                                            margin: "0 2rem 0 0",
                                            fontWeight: "bold",
                                            fontSize: "3.4rem"
                                        }, children: e.entity.__typename
                                    }), (0, d.jsx)("a", {
                                        style: {fontWeight: "bold", color: "blue", fontSize: "2rem"},
                                        href: f(e.entity.__typename),
                                        children: "Go to variations"
                                    })]
                                })
                            }), _ ? (0, d.jsxs)(d.Fragment, {children: [c, " "]}) : (0, d.jsx)("div", {
                                className: S()("true" !== lk.env.NEXT_PUBLIC_DISABLE_GLOBAL_ANIMATION ? "fade" : "", o && n && "tile-top", o && t && "tile-bottom"),
                                style: h ? {position: "relative", zIndex: 1} : {},
                                id: (0, p.iP)(null == e ? void 0 : null === (r = e.entity) || void 0 === r ? void 0 : r.fieldSidebarNavigationTitle),
                                children: c
                            }), u && l === y && (0, d.jsx)(z, {top: C || b, sidebar: m, titles: A, isBlog: b})]
                        }, "paragraph.".concat(a.__typename, "__").concat(l))
                    }
                })
            }, "paragraphs")
        }, lS = e => {
            var l;
            let {
                paragraph: a,
                hasSidebar: t,
                sidebar: o,
                metaNavLinks: n,
                mainNav: i,
                footer: r,
                globalsGeneral: s,
                seo: c
            } = e;
            return (0, d.jsx)(k.GlobalContextProvider, {
                value: {...s},
                children: (0, d.jsxs)("div", {
                    className: "min-h-screen flex flex-col",
                    children: [(0, d.jsx)(x, {seo: c}), (0, d.jsxs)("main", {
                        children: [!1, s && s.fieldAlertBar && (0, d.jsx)(N, {entity: null == s ? void 0 : null === (l = s.fieldAlertBar) || void 0 === l ? void 0 : l.entity}), n && (0, d.jsx)(w.Z, {links: n}), i && i.links && (0, d.jsx)(I.Z, {
                            links: i.links,
                            metaLinks: {links: n}
                        }), (0, d.jsx)(B.g, {children: (0, d.jsx)(lT, {paragraphs: a, hasSidebar: t, sidebar: o})})]
                    }), r && (0, d.jsx)(M.Z, {...r})]
                })
            })
        };
        var lP = lS
    }, 1636: function (e, l, a) {
        "use strict";
        a.d(l, {
            g: function () {
                return i
            }, s: function () {
                return n
            }
        });
        var t = a(85893), o = a(67294);
        let n = o.createContext({}), i = e => {
            let {children: l} = e, [a, i] = (0, o.useState)(""), r = e => {
                i(e)
            };
            return (0, t.jsx)(n.Provider, {
                value: {
                    complianceAchievementSearchKeyword: a,
                    setComplianceAchievementSearchKeyword: r
                }, children: l
            })
        }
    }, 10124: function (e, l, a) {
        "use strict";
        a.d(l, {
            ZP: function () {
                return v
            }, WB: function () {
                return f
            }, H_: function () {
                return h
            }, cB: function () {
                return g
            }
        });
        var t = a(85893);
        a(67294);
        var o = a(1072), n = a(21788), i = a(68650);
        let r = e => ({
            bool: {
                should: [{term: {langcode: e}}, {term: {langcode: "und"}}, {
                    bool: {
                        must: [{term: {langcode: "en"}}, {term: {translate: !0}}],
                        must_not: [{term: {node_translations: e}}]
                    }
                }]
            }
        }), d = e => ({bool: {must: [{term: {langcode: e}}]}}), s = e => {
            let l = null, a = e.filter(e => {
                if (e.bool && e.bool.should) {
                    let a = e.bool.should,
                        t = a.some(e => !!e.term && !!e.term.currentLanguage && (l = e.term.currentLanguage, !0));
                    return !t
                }
                return !0
            });
            return {lang: l, updatedFilter: a}
        }, c = e => {
            for (let l of e) if (l.bool && l.bool.filter) {
                for (let a of l.bool.filter) if (a.term && a.term.content_type) return a.term.content_type
            }
            return null
        }, u = e => ({
            nested: {
                path: "es_attachment",
                query: {bool: {must: [{query_string: {query: e, fields: ["es_attachment.attachment.content^8"]}}]}}
            }
        }), m = (e, l) => {
            let a = {...e};
            return a.query.bool.should = a.query.bool.should.filter(e => !l.includes(e.multi_match.type)), a.query.bool.should.forEach(e => {
                e.multi_match && delete e.multi_match.operator
            }), a
        };
        var _ = a(11163), p = a(83454);
        let h = (e, l) => {
            let {setSearchTerm: a, setSort: t} = l;
            a(e, {shouldClearFilters: !0, debounce: 400}), e && t([{field: "_score", direction: "desc"}], "desc")
        }, g = (e, l, a) => {
            var t, o, n;
            let i = null == e ? void 0 : e.map(e => "object" == typeof e && "value" in e ? String(e.value) : String(e)),
                r = l[String(i[0])] || {field: "created", direction: "desc"};
            null != a && null !== (t = a.sortList) && void 0 !== t && t.length && r.field === (null === (o = a.sortList[0]) || void 0 === o ? void 0 : o.field) && r.direction === (null === (n = a.sortList[0]) || void 0 === n ? void 0 : n.direction) || a.sortField === r.field && a.sortDirection === r.direction || a.setSort([r], r.direction)
        }, f = (e, l, a) => {
            var t, o;
            let n = null == e ? void 0 : e.map(e => String(e.value)),
                i = (null === (t = null == a ? void 0 : null === (o = a.filters) || void 0 === o ? void 0 : o.filter(e => {
                    let a = "object" == typeof l && "object" == typeof l ? Object.values(l) : [l];
                    return a.includes(e.field)
                })) || void 0 === t ? void 0 : t.map(e => e.values)) || [], r = i.flat();
            ((null == n ? void 0 : n.length) || (null == r ? void 0 : r.length)) && ((null == n ? void 0 : n.length) === (null == r ? void 0 : r.length) && (null == n ? void 0 : n.every(e => !!(null == r ? void 0 : r.length) && r.includes(e))) || (console.log("FILTER KEY", l), "string" == typeof l ? a.removeFilter(l) : Object.values(l).forEach(e => a.removeFilter(e)), e.forEach(e => {
                let t = "object" == typeof l && "object" == typeof e ? l[e.group] : l,
                    o = "object" == typeof e && "value" in e ? e.value : e;
                a.addFilter(String(t), String(o), "any")
            })))
        };
        var v = function (e, l) {
            var a, h, g, f;
            let v = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, C = new i.Z({
                host: null == p ? void 0 : null === (a = p.env) || void 0 === a ? void 0 : "https://ba5832d1af5a45e6ad89599ab3f2054d.us-central1.gcp.cloud.es.io",
                index: (null == v ? void 0 : v.useExtendedIndices) ? null == p ? void 0 : null === (h = p.env) || void 0 === h ? void 0 : "elasticsearch_index_marketing7_marketing7_index,search-live-revolutionaries-portal,search-live-help-portal,search-live-community-portal" : null == p ? void 0 : null === (g = p.env) || void 0 === g ? void 0 : "elasticsearch_index_marketing7_marketing7_index",
                apiKey: null == p ? void 0 : null === (f = p.env) || void 0 === f ? void 0 : "OUVLb25ZWUJOX0lxUGIwRVBDbzE6RGR0cmd6WVZRZFc5QUR2cmtRdDdmQQ=="
            }, (e, l) => {
                var a, t;
                let o = {...e}, n = e.query.bool.filter || [], {lang: i, updatedFilter: _} = s(n), p = c(_), h = r(i);
                if ("press" === p && (h = d(i)), _.push(h), o.query.bool.filter = _, (null == o ? void 0 : null === (a = o.aggs) || void 0 === a ? void 0 : null === (t = a.facet_bucket_all) || void 0 === t ? void 0 : t.filter) && (o.aggs.facet_bucket_all.filter = {bool: {must: []}}), !l.searchTerm) return o;
                o = m(o, ["phrase", "cross_fields", "phrase_prefix"]);
                let g = "resource" === p && l.searchTerm;
                if (g) {
                    let f = u((e => {
                        let l = ["+", "-", "=", "&&", "||", ">", "<", "!", "(", ")", "{", "}", "[", "]", "^", '"', "~", "*", "?", ":", "\\", "/"];
                        return e.split("").map(e => l.includes(e) ? "\\".concat(e) : e).join("")
                    })(l.searchTerm)), v = [...o.query.bool.should, f];
                    o.query.bool.must = [], o.query.bool.must.push({bool: {should: v}})
                } else o.query.bool.must = o.query.bool.should;
                return o.query.bool.should = void 0, o
            }), x = {apiConnector: C, trackUrlState: !1}, b = a => {
                var i, r;
                let d = (0, _.useRouter)(), s = {
                    searchQuery: {
                        ...l.searchQuery,
                        filters: [...(null == l ? void 0 : null === (i = l.searchQuery) || void 0 === i ? void 0 : i.filters) || [], {
                            field: "currentLanguage",
                            values: [null == d ? void 0 : d.locale],
                            type: "any"
                        }, {field: "hide", values: [!0], type: "none"}, {
                            field: "resource_type_hide",
                            values: [!0],
                            type: "none"
                        }],
                        search_fields: {...(null == l ? void 0 : null === (r = l.searchQuery) || void 0 === r ? void 0 : r.search_fields) || {}}
                    }
                }, c = {...x, ...l, ...s}, {...u} = a;
                return (0, t.jsx)(o.Z, {
                    config: c,
                    children: (0, t.jsx)(n.Z, {
                        mapContextToProps: e => e,
                        children: l => (0, t.jsx)(e, {...u, searchProps: l})
                    })
                })
            };
            return b.displayName = "WithElasticSearch(".concat(e.displayName || e.name || "Component", ")"), b
        }
    }, 97646: function (e) {
        e.exports = {
            root: "alert_root__K8Tnr",
            PURPLE: "alert_PURPLE__eDLhV",
            GREEN: "alert_GREEN__HIroz",
            RED: "alert_RED__xyBc_",
            contentWrapper: "alert_contentWrapper__Usa35",
            copy: "alert_copy__mGhnl",
            linkWrapper: "alert_linkWrapper__nsPVM",
            link: "alert_link__13g3P",
            closeicon: "alert_closeicon__PNi5u"
        }
    }, 65019: function () {
    }, 26210: function (e) {
        e.exports = {root: "checkbox_root__LK_JD", label: "checkbox_label__lBC4R"}
    }, 17385: function (e) {
        e.exports = {
            root: "noSearchResults_root__4lGtY",
            title: "noSearchResults_title__uZGrb",
            bodyContent: "noSearchResults_bodyContent__jbUDX"
        }
    }, 83291: function (e) {
        e.exports = {
            root: "paginateChildren_root__nAd8L",
            paginationContainer: "paginateChildren_paginationContainer__GyN87",
            hide: "paginateChildren_hide__EcoHy",
            pageNumber: "paginateChildren_pageNumber__XZBBb",
            selected: "paginateChildren_selected__GAS5n",
            svg: "paginateChildren_svg__Eia8k",
            right: "paginateChildren_right___EkSr"
        }
    }, 57337: function (e) {
        e.exports = {
            root: "searchResult_root__PnjCv",
            topSection: "searchResult_topSection__xE5Qx",
            tag: "searchResult_tag__UZYQ4",
            eyebrow: "searchResult_eyebrow__2M7VN",
            searchResultItemContent: "searchResult_searchResultItemContent__p3iYo",
            filterList: "searchResult_filterList__CD4Gf",
            filterHeadline: "searchResult_filterHeadline__VCuOW",
            filterListItems: "searchResult_filterListItems__kl903",
            headline: "searchResult_headline__0iIfu",
            copy: "searchResult_copy__UaWwZ",
            date: "searchResult_date__Z9Q3u"
        }
    }, 66317: function (e) {
        e.exports = {
            root: "sidebar_root__K7Vp9",
            pinWrapper: "sidebar_pinWrapper__RL2mr",
            pinWrapperTop: "sidebar_pinWrapperTop__I0SmI",
            isBlog: "sidebar_isBlog__U_5j5",
            pin: "sidebar_pin__wBxC3",
            titlesWrapper: "sidebar_titlesWrapper__dhWw4",
            link: "sidebar_link__0pCon",
            linkActive: "sidebar_linkActive__2U6b2",
            additionalLinks: "sidebar_additionalLinks__hFnnY",
            cta: "sidebar_cta__zOt_K",
            navTopLabel: "sidebar_navTopLabel__V1ThF",
            copyUrlWrapper: "sidebar_copyUrlWrapper__76Adn",
            copyUrl: "sidebar_copyUrl__bYKoC",
            tagGroup: "sidebar_tagGroup__UUlbU",
            tag: "sidebar_tag__beJbp",
            socialgroup: "sidebar_socialgroup__KSekk",
            buttonCTAWrapper: "sidebar_buttonCTAWrapper__0YVl8",
            blogVariant: "sidebar_blogVariant__Cm73W"
        }
    }, 12245: function (e) {
        e.exports = {root: "styledElasticSearchPagination_root__XHMcZ"}
    }, 30206: function (e) {
        e.exports = {
            root: "cta_root__s_Xgf",
            link: "cta_link__rxJSl",
            btnLight: "cta_btnLight__ZM4L3",
            small: "cta_small__j5X__",
            btnPrimary: "cta_btnPrimary__AteO9",
            btnDark: "cta_btnDark__x7j34",
            btnLightOutline: "cta_btnLightOutline__JNJBd",
            sizeLarge: "cta_sizeLarge__CJ1EZ",
            largeInMobile: "cta_largeInMobile__mZ2qm"
        }
    }, 85945: function (e) {
        e.exports = {
            root: "customSwiper_root__RyVzI",
            scrollArrow: "customSwiper_scrollArrow__xgysI",
            "visibility-visible": "customSwiper_visibility-visible__INO76",
            disabled: "customSwiper_disabled__h7O7O",
            leftArrow: "customSwiper_leftArrow___kFXq",
            controlArrows: "customSwiper_controlArrows__HKkB7",
            controlsBar: "customSwiper_controlsBar__8vczW",
            blueProgressBar: "customSwiper_blueProgressBar__nOpI5",
            controlsBarGreenBorder: "customSwiper_controlsBarGreenBorder__Fi_2j",
            paginationNumbers: "customSwiper_paginationNumbers___kkD7",
            highlightNext2: "customSwiper_highlightNext2__vr30Q",
            highlightNext3: "customSwiper_highlightNext3__ZSXcN",
            highlightNext4: "customSwiper_highlightNext4__gQKLU",
            controlsBarContainer: "customSwiper_controlsBarContainer__lyAt2"
        }
    }, 76824: function (e) {
        e.exports = {
            root: "filter_root__WAPLQ",
            filtersSection: "filter_filtersSection__HniZz",
            topStickyBar: "filter_topStickyBar__MPSY8",
            button: "filter_button__P0EpG",
            smallFont: "filter_smallFont__zk_L7",
            searchCategoriesContainer: "filter_searchCategoriesContainer__UxzRI",
            open: "filter_open__Qe8GY",
            openWrapper: "filter_openWrapper__PAYYK",
            sectionWrapper: "filter_sectionWrapper__FGQBb",
            checkboxWrapper: "filter_checkboxWrapper__bFtU5",
            sectionContainer: "filter_sectionContainer__lJGOn",
            sectionLabel: "filter_sectionLabel__VGy__",
            isMobile: "filter_isMobile__QPMke",
            select: "filter_select__W_WVJ",
            "align-select-right": "filter_align-select-right__5fwKw",
            filterHeadline: "filter_filterHeadline__X_rJi",
            filterSectionBig: "filter_filterSectionBig__5oTLQ",
            searchTopLabel: "filter_searchTopLabel__B_zyd"
        }
    }, 55583: function (e) {
        e.exports = {
            root: "resourceCard_root__YxTI8",
            showCopy: "resourceCard_showCopy__JrYEf",
            resourceTitle: "resourceCard_resourceTitle__YmNhB",
            grey: "resourceCard_grey__rncPr",
            bottomContainer: "resourceCard_bottomContainer__p4lls",
            white: "resourceCard_white__wY3EZ",
            thumbnailContainer: "resourceCard_thumbnailContainer__men0k",
            landscape: "resourceCard_landscape__i_Yud",
            resourceCopy: "resourceCard_resourceCopy__1D7_J",
            resourceCTA: "resourceCard_resourceCTA__R5__N"
        }
    }, 23229: function (e) {
        e.exports = {
            root: "searchbar_root__5i8qi",
            inputWrapper: "searchbar_inputWrapper__KzAQR",
            searchIcon: "searchbar_searchIcon__f7JtE"
        }
    }, 3004: function (e) {
        e.exports = {
            root: "teaserCard_root___pnuh",
            card: "teaserCard_card__SlrDg",
            typeNews: "teaserCard_typeNews___pxad",
            thumbnailContainer: "teaserCard_thumbnailContainer__SM5Ep",
            headline: "teaserCard_headline___NDl_",
            link: "teaserCard_link__8PZzF",
            typeBlog: "teaserCard_typeBlog__neJ60",
            line: "teaserCard_line__QjFKX",
            typeResource: "teaserCard_typeResource__NsXP7",
            typeCustomerCaseStudy: "teaserCard_typeCustomerCaseStudy__iPMhJ",
            typeEvent: "teaserCard_typeEvent__eLZKN",
            typeFeaturedEvent: "teaserCard_typeFeaturedEvent__3sHwg",
            isTablet: "teaserCard_isTablet__oq9pJ",
            isMobile: "teaserCard_isMobile__tXiI5",
            eventHeader: "teaserCard_eventHeader__RbefI",
            image: "teaserCard_image__YRWzL",
            cardContent: "teaserCard_cardContent__QpZKe",
            eyebrow: "teaserCard_eyebrow__fItox",
            copy: "teaserCard_copy__NdO3k",
            description: "teaserCard_description__h7oiX",
            pressHeader: "teaserCard_pressHeader__XT_3P",
            pressTabletDate: "teaserCard_pressTabletDate__tZR6U",
            eventHeaderTitle: "teaserCard_eventHeaderTitle__J70ni",
            customerCaseStudy: "teaserCard_customerCaseStudy__qSAti",
            newsCard: "teaserCard_newsCard__JmUkp",
            newsTag: "teaserCard_newsTag__8ZYTl",
            newsHeadline: "teaserCard_newsHeadline__p5TfL",
            newsDate: "teaserCard_newsDate__MVa5t",
            newsLink: "teaserCard_newsLink__rP2Kt",
            newsDivider: "teaserCard_newsDivider__A0UST",
            "color-blue": "teaserCard_color-blue__eaknH",
            "color-red": "teaserCard_color-red__Fm9P8",
            "color-green": "teaserCard_color-green__Pdn6d",
            "color-purple": "teaserCard_color-purple__fLcVc"
        }
    }, 64690: function (e) {
        e.exports = {
            root: "useCasesCard_root__dse26",
            card: "useCasesCard_card__gUovu",
            cardHeadline: "useCasesCard_cardHeadline__oyDK1",
            withPadding: "useCasesCard_withPadding__wJn26",
            cardImage: "useCasesCard_cardImage__DpIGa",
            cardContent: "useCasesCard_cardContent__2qx5e",
            cardCopy: "useCasesCard_cardCopy__kQRtD",
            cardCloud: "useCasesCard_cardCloud__pbNP9",
            cardTitle: "useCasesCard_cardTitle__zkK63",
            withoutNav: "useCasesCard_withoutNav__NTEVZ",
            cardNumber: "useCasesCard_cardNumber__HADfj",
            cardCTA: "useCasesCard_cardCTA__weJco",
            cloud: "useCasesCard_cloud__P3p02"
        }
    }, 95807: function (e) {
        e.exports = {
            root: "videoCard_root__tye6D",
            backgroundImage: "videoCard_backgroundImage__5RPOc",
            bgCloud: "videoCard_bgCloud__XxYHO",
            headlineContainer: "videoCard_headlineContainer__ndEPt",
            bgGradient: "videoCard_bgGradient__yWXpi",
            videoTitleContainer: "videoCard_videoTitleContainer__RXncA",
            videoTitle: "videoCard_videoTitle__nMGet",
            playBtn: "videoCard_playBtn__gEusM",
            belowTitle: "videoCard_belowTitle__7m5bc",
            playBtnIcon: "videoCard_playBtnIcon__H8bBL",
            videoPlayer: "videoCard_videoPlayer__amyeF",
            videoContainer: "videoCard_videoContainer__QW9iC",
            videoComponent: "videoCard_videoComponent__VR6tb",
            withPlayButtonText: "videoCard_withPlayButtonText__jkhxy",
            playBtnContentContainer: "videoCard_playBtnContentContainer__sW5Fz",
            playButtonText: "videoCard_playButtonText__EYTVs",
            videoCardModuleVariant: "videoCard_videoCardModuleVariant__3_WbO",
            bgShadowGradient: "videoCard_bgShadowGradient__kalTO",
            mobile: "videoCard_mobile__F_TYL"
        }
    }, 26943: function (e) {
        e.exports = {
            root: "blog_post_filter_module_root__OA42F",
            headline: "blog_post_filter_module_headline__ytKel",
            filterWrapperContainer: "blog_post_filter_module_filterWrapperContainer__qhEua",
            filterWrapper: "blog_post_filter_module_filterWrapper__Lzhfb",
            searchBar: "blog_post_filter_module_searchBar__AkkW2",
            filterButton: "blog_post_filter_module_filterButton__RLh_q",
            openFilter: "blog_post_filter_module_openFilter__70ycy",
            teaserCard: "blog_post_filter_module_teaserCard__9f82s"
        }
    }, 12796: function (e) {
        e.exports = {
            root: "blog_post_header_module_root__DOeJD",
            bg: "blog_post_header_module_bg__wnMMH",
            bgWNoImage: "blog_post_header_module_bgWNoImage__YO2iW",
            ACCESSCONTROL: "blog_post_header_module_ACCESSCONTROL__bG7pX",
            SECURITYRESEARCH: "blog_post_header_module_SECURITYRESEARCH__VKFxJ",
            ZSCALERLIFE: "blog_post_header_module_ZSCALERLIFE__8E_tf",
            PRODUCTSANDSOLUTIONS: "blog_post_header_module_PRODUCTSANDSOLUTIONS__f85Q4",
            CUSTOMERSTORIES: "blog_post_header_module_CUSTOMERSTORIES__dygWT",
            COMPANYNEWS: "blog_post_header_module_COMPANYNEWS__ig_4o",
            gradient: "blog_post_header_module_gradient__UhaA_",
            content: "blog_post_header_module_content__9SFKK",
            noImage: "blog_post_header_module_noImage__8u9b0",
            tag: "blog_post_header_module_tag__elDmB",
            title: "blog_post_header_module_title__rR6MG",
            authorName: "blog_post_header_module_authorName__wye7o",
            readDate: "blog_post_header_module_readDate__pydyA",
            pageInfo: "blog_post_header_module_pageInfo__IJeu8",
            topic: "blog_post_header_module_topic__NBapE",
            authorBlock: "blog_post_header_module_authorBlock__eWSqW",
            authorAvatar: "blog_post_header_module_authorAvatar__j3eRf"
        }
    }, 63288: function (e) {
        e.exports = {
            root: "case_study_module_root__kaVBU",
            isFullWidth: "case_study_module_isFullWidth__Dj22S",
            content: "case_study_module_content__FIU9a",
            fieldCaseStudyTeaserImageSection: "case_study_module_fieldCaseStudyTeaserImageSection__8ORCI",
            desktopTeaserImageSection: "case_study_module_desktopTeaserImageSection__P1Fxu",
            bgpattern: "case_study_module_bgpattern__Pnt4f",
            caseStudyContent: "case_study_module_caseStudyContent__UxuTg",
            selected: "case_study_module_selected__A8TpT",
            eyebrow: "case_study_module_eyebrow__qqOiv",
            heroLogoContainer: "case_study_module_heroLogoContainer__qYdVs",
            fieldCaseStudyTHeroLogo: "case_study_module_fieldCaseStudyTHeroLogo__2L76u",
            headnote: "case_study_module_headnote__TKsV_",
            headline: "case_study_module_headline__UFIaI",
            bodyContent: "case_study_module_bodyContent__yblwR",
            ctaWrapper: "case_study_module_ctaWrapper__Hwe_F",
            cta_link: "case_study_module_cta_link__Kc532",
            casestudy_btn_wrapper: "case_study_module_casestudy_btn_wrapper__Yjl4h",
            casestudy_btn: "case_study_module_casestudy_btn__02nbr",
            logoContainer: "case_study_module_logoContainer__cdaQM",
            fieldCaseStudyTeaserImageSectionContent: "case_study_module_fieldCaseStudyTeaserImageSectionContent__0LiXz",
            fieldCaseStudySelectDisplay: "case_study_module_fieldCaseStudySelectDisplay__6oltC",
            circle: "case_study_module_circle__Da_n7",
            selectedHighlight: "case_study_module_selectedHighlight__W0TGr",
            fieldCaseStudyTeaserImageWrapper: "case_study_module_fieldCaseStudyTeaserImageWrapper__MCpeP",
            fieldCaseStudyTeaserImageContent: "case_study_module_fieldCaseStudyTeaserImageContent__mmUWF",
            footerCTA: "case_study_module_footerCTA__YRKSv"
        }
    }, 70368: function (e) {
        e.exports = {
            root: "code_module_root__PlaBM",
            codeImage: "code_module_codeImage__58jG2",
            copyText: "code_module_copyText__OOv7t"
        }
    }, 37508: function (e) {
        e.exports = {
            root: "column_text_module_root__fRvj7",
            blueBackground: "column_text_module_blueBackground__osZlB",
            mainCard: "column_text_module_mainCard__g_zFG",
            sectionHeadline: "column_text_module_sectionHeadline__fIgJ4",
            showLine: "column_text_module_showLine__xepfQ",
            contentContainer: "column_text_module_contentContainer__peeUo",
            twoSections: "column_text_module_twoSections___pHFX",
            threeSections: "column_text_module_threeSections__7Tp1Q",
            bgCloud: "column_text_module_bgCloud__TmNdw",
            eyebrow: "column_text_module_eyebrow__5QFqL",
            section: "column_text_module_section__3O3bB",
            sectionSubHeadline: "column_text_module_sectionSubHeadline__AlsIP",
            cardsContainer: "column_text_module_cardsContainer__5f7KQ",
            noSwipers: "column_text_module_noSwipers__94mHs",
            cardContainerPadding: "column_text_module_cardContainerPadding__sZcjy",
            fourCards: "column_text_module_fourCards__B3WTl",
            cardSubHeadline: "column_text_module_cardSubHeadline__w0nPy",
            card: "column_text_module_card__aPUXB",
            inSlide: "column_text_module_inSlide__KnSfc",
            cardCopy: "column_text_module_cardCopy__hAcCw",
            cardCTA: "column_text_module_cardCTA__ox5vO"
        }
    }, 23973: function (e) {
        e.exports = {
            root: "columns_icons_module_root__RGRPN",
            contentContainer: "columns_icons_module_contentContainer__pkWuH",
            contentContainerCentered: "columns_icons_module_contentContainerCentered__ahvkj",
            headline: "columns_icons_module_headline__hHrLv",
            subHeadline: "columns_icons_module_subHeadline__jtPQN",
            eyebrow: "columns_icons_module_eyebrow__cr4ad",
            topCTAContainer: "columns_icons_module_topCTAContainer__ROXUp",
            cardsContainer: "columns_icons_module_cardsContainer__fuGyL",
            threeColumns: "columns_icons_module_threeColumns__BhkI5",
            fourColumns: "columns_icons_module_fourColumns__tq_Zy",
            cardHeadline: "columns_icons_module_cardHeadline__ZlZCw",
            cardSubHeadline: "columns_icons_module_cardSubHeadline__K0I_8",
            card: "columns_icons_module_card__XbaxS",
            cardCTA: "columns_icons_module_cardCTA__7zJky",
            iconContainer: "columns_icons_module_iconContainer__P1KXk",
            bottomCTAContainer: "columns_icons_module_bottomCTAContainer__rzqO8",
            large: "columns_icons_module_large__OZalE"
        }
    }, 41603: function (e) {
        e.exports = {
            root: "comparison_module_root__t3Y_8",
            card: "comparison_module_card__1_tih",
            cloud: "comparison_module_cloud__jHF_W",
            contentContainer: "comparison_module_contentContainer__8S7PM",
            headline: "comparison_module_headline__o6ghH",
            ctaContainer: "comparison_module_ctaContainer__7I_8m",
            desktopComparisonContainer: "comparison_module_desktopComparisonContainer__jBnZ_",
            desktopComparisonContainerAccordion: "comparison_module_desktopComparisonContainerAccordion__X8FtU",
            visible: "comparison_module_visible__e03R2",
            desktopComparisonHeader: "comparison_module_desktopComparisonHeader__bE47a",
            desktopRow: "comparison_module_desktopRow__0j5mU",
            desktopComparisonTitle: "comparison_module_desktopComparisonTitle__r5aEn",
            desktopComparisonTitleOpen: "comparison_module_desktopComparisonTitleOpen__qKlK6",
            rowTitle: "comparison_module_rowTitle__hjIA9",
            green: "comparison_module_green__gG0Gt",
            col1: "comparison_module_col1__xchqc",
            col2: "comparison_module_col2__udRVT",
            col3: "comparison_module_col3__1pn6K",
            iconContainer: "comparison_module_iconContainer__aewvG",
            mobileTable: "comparison_module_mobileTable__RJEcD",
            mobileComparisonHeader: "comparison_module_mobileComparisonHeader__Uvjx7",
            mobileRow: "comparison_module_mobileRow__EoSPE",
            hasAccordion: "comparison_module_hasAccordion__TZUGF",
            isTablet: "comparison_module_isTablet__88uGZ",
            isMobile: "comparison_module_isMobile__vjP4w"
        }
    }, 30587: function (e) {
        e.exports = {
            root: "compliance_achievement_module_root__Tw9jT",
            eyebrowContainer: "compliance_achievement_module_eyebrowContainer__MYPkz",
            contentGridWrapper: "compliance_achievement_module_contentGridWrapper__MIf7h",
            bluePattern: "compliance_achievement_module_bluePattern__lQj9r",
            isBlue: "compliance_achievement_module_isBlue__UNq2z",
            cardList: "compliance_achievement_module_cardList__wuaUe",
            cardWrapper: "compliance_achievement_module_cardWrapper__7E62k",
            isOpened: "compliance_achievement_module_isOpened__uvHL9",
            card: "compliance_achievement_module_card__VAWMA",
            contentWrapper: "compliance_achievement_module_contentWrapper__kzGg1",
            contentContainer: "compliance_achievement_module_contentContainer__eh3wb",
            searchInputWrapper: "compliance_achievement_module_searchInputWrapper__Blz9F",
            eyebrow: "compliance_achievement_module_eyebrow__N_oKu",
            headline: "compliance_achievement_module_headline___gUWO",
            copy: "compliance_achievement_module_copy__V3cY3",
            subheadline: "compliance_achievement_module_subheadline__TSvtn",
            subcopy: "compliance_achievement_module_subcopy__Q7whI",
            linkCta: "compliance_achievement_module_linkCta__sQ15M",
            cardCopy: "compliance_achievement_module_cardCopy__KkAGR",
            cardContent: "compliance_achievement_module_cardContent__hFLcS",
            closeIcon: "compliance_achievement_module_closeIcon__g7mSr",
            cardImage: "compliance_achievement_module_cardImage__oF3WW",
            icon: "compliance_achievement_module_icon__kwlSv",
            cardImageContainer: "compliance_achievement_module_cardImageContainer__UUpb2",
            cardHeaderTitle: "compliance_achievement_module_cardHeaderTitle__SEW2i",
            cardColumnsWrapper: "compliance_achievement_module_cardColumnsWrapper___74Uv",
            cardLinksWrapper: "compliance_achievement_module_cardLinksWrapper__glmaW",
            ctaWrapper: "compliance_achievement_module_ctaWrapper__mUlwe",
            cardTitle: "compliance_achievement_module_cardTitle__3yV3_",
            cardDesktopLinks: "compliance_achievement_module_cardDesktopLinks__dGrwn",
            cardDesktopLinksCTA: "compliance_achievement_module_cardDesktopLinksCTA__H179H",
            cardDes: "compliance_achievement_module_cardDes__CGynz"
        }
    }, 95985: function (e) {
        e.exports = {
            root: "contact_form_module_root__nODqq",
            backgroundPattern: "contact_form_module_backgroundPattern__Gwhbk",
            CardHeadline: "contact_form_module_CardHeadline__U48WN",
            CardCopy: "contact_form_module_CardCopy__QH3f8",
            Copy: "contact_form_module_Copy__ip99b",
            Headline: "contact_form_module_Headline__0_LDg",
            UpperCard: "contact_form_module_UpperCard__kypEz",
            FormCard: "contact_form_module_FormCard__Kh_S6",
            Button: "contact_form_module_Button__hCoUd",
            active: "contact_form_module_active__7hvN_",
            isLink: "contact_form_module_isLink__ARqCi",
            ButtonWrapper: "contact_form_module_ButtonWrapper__65lGA",
            LeftCol: "contact_form_module_LeftCol__ctITL",
            RightCol: "contact_form_module_RightCol__vdwzL",
            loaderAnimationContainer: "contact_form_module_loaderAnimationContainer__j4Nte",
            bottomImageContainer: "contact_form_module_bottomImageContainer__pXUwb",
            imageHeadline: "contact_form_module_imageHeadline__XLhd7",
            imageContainer: "contact_form_module_imageContainer__XcVt4",
            formHeadline: "contact_form_module_formHeadline__PrZPl",
            formCopy: "contact_form_module_formCopy__zwwX_"
        }
    }, 50460: function (e) {
        e.exports = {
            root: "cta_module_root__mn4Xi",
            noCTA: "cta_module_noCTA___x7kA",
            bgpattern: "cta_module_bgpattern__UjZGf",
            content: "cta_module_content__hWUkf",
            centered: "cta_module_centered__TTAzE",
            headline: "cta_module_headline__zFPTJ",
            eyebrow: "cta_module_eyebrow__YulyI",
            subheadline: "cta_module_subheadline__YH_9f",
            ctaWrapper: "cta_module_ctaWrapper__95x1d",
            copy: "cta_module_copy__inPld",
            logoWrapper: "cta_module_logoWrapper__RyXX1",
            logo: "cta_module_logo__Cj_Nw",
            cta_link: "cta_module_cta_link__iGCKf",
            form: "cta_module_form__STRqC"
        }
    }, 2617: function (e) {
        e.exports = {
            root: "customer_stories_filter_module_root__wxbKn",
            mainContainer: "customer_stories_filter_module_mainContainer__BTria",
            searchBar: "customer_stories_filter_module_searchBar__z3keG",
            headline: "customer_stories_filter_module_headline__7ftei",
            filtersContainer: "customer_stories_filter_module_filtersContainer__fFE0j",
            cardsContainer: "customer_stories_filter_module_cardsContainer__R4QoV",
            openFilter: "customer_stories_filter_module_openFilter__MSl_B"
        }
    }, 83543: function (e) {
        e.exports = {
            root: "customers_carousel_module_root__5iGk7",
            tile: "customers_carousel_module_tile__oCBdK",
            logo: "customers_carousel_module_logo__PspxG",
            "customers-carousel-scroll-mobile": "customers_carousel_module_customers-carousel-scroll-mobile__tF4E1",
            "customers-carousel-scroll-desktop": "customers_carousel_module_customers-carousel-scroll-desktop__xtC4a",
            imageContainer: "customers_carousel_module_imageContainer__9r_Yj"
        }
    }, 87161: function (e) {
        e.exports = {
            root: "demo_form_module_root__T6EhY",
            backgroundPattern: "demo_form_module_backgroundPattern__hSok3",
            Wrapper: "demo_form_module_Wrapper__gCOOZ",
            LeftWrapper: "demo_form_module_LeftWrapper__cBz41",
            RightWrapper: "demo_form_module_RightWrapper__UN0IE",
            Card: "demo_form_module_Card__bxj9y",
            Headline: "demo_form_module_Headline__M85OG",
            Copy: "demo_form_module_Copy__PgfZ_",
            variantLeftAligned: "demo_form_module_variantLeftAligned__0Jx6n"
        }
    }, 83175: function (e) {
        e.exports = {
            root: "events_filter_module_root__Nykob",
            filter: "events_filter_module_filter__1QcbS",
            filtersContainer: "events_filter_module_filtersContainer__THFZn",
            headline: "events_filter_module_headline___QwEs",
            openFilter: "events_filter_module_openFilter__p8k8f",
            cardsContainer: "events_filter_module_cardsContainer__LQ9_T"
        }
    }, 70478: function (e) {
        e.exports = {
            root: "featured_events_module_root__hZixf",
            headline: "featured_events_module_headline__FNKUV",
            featuredEventCard: "featured_events_module_featuredEventCard__1jKFb"
        }
    }, 50963: function (e) {
        e.exports = {
            root: "generic_card_module_root__Ak8Th",
            eyebrow__Narrow: "generic_card_module_eyebrow__Narrow__bOXSJ",
            eyebrow__Full_Width: "generic_card_module_eyebrow__Full_Width__kgYFt",
            card: "generic_card_module_card__wuKia",
            card__Narrow: "generic_card_module_card__Narrow__oHG15",
            "card__Narrow-image": "generic_card_module_card__Narrow-image__ZmPv_",
            "card__Narrow-name": "generic_card_module_card__Narrow-name__9_s84",
            "card__Narrow-title": "generic_card_module_card__Narrow-title__6tnho",
            "card__Narrow-link": "generic_card_module_card__Narrow-link__jUGWx",
            "card__Narrow-svg": "generic_card_module_card__Narrow-svg__LzRBy",
            "card__Narrow-wrapper": "generic_card_module_card__Narrow-wrapper__EE7Ud",
            card__Full_Width: "generic_card_module_card__Full_Width__rIt3R",
            "card__Full_Width-image": "generic_card_module_card__Full_Width-image__iQde2",
            "card__Full_Width-name": "generic_card_module_card__Full_Width-name__r2Zzl",
            "card__Full_Width-title": "generic_card_module_card__Full_Width-title__1tbdD",
            "card__Full_Width-link": "generic_card_module_card__Full_Width-link__dKASO",
            "card__Full_Width-wrapper": "generic_card_module_card__Full_Width-wrapper__0J8of",
            "card__Full_Width-svg": "generic_card_module_card__Full_Width-svg__SH7TN",
            fullCardLinks: "generic_card_module_fullCardLinks__ndWin",
            linkedinIcon: "generic_card_module_linkedinIcon__HVVuG"
        }
    }, 75964: function (e) {
        e.exports = {
            root: "hero_carousel_root__rmfAW",
            slide: "hero_carousel_slide__B9jRA",
            swiperWrapper: "hero_carousel_swiperWrapper__ICmyT",
            initialSlide: "hero_carousel_initialSlide__p9AIB",
            slideContent: "hero_carousel_slideContent__yPbVq",
            slideContentItemWrapper: "hero_carousel_slideContentItemWrapper__qwVKb",
            slideContentItem: "hero_carousel_slideContentItem__dGEdx",
            current: "hero_carousel_current__lTBXJ",
            slideHeadline: "hero_carousel_slideHeadline__4OVj5",
            slideCopy: "hero_carousel_slideCopy__GB1PG",
            notCurrentSlide: "hero_carousel_notCurrentSlide__1OBwi",
            slideImage: "hero_carousel_slideImage__U6qKv",
            slideImageBg: "hero_carousel_slideImageBg__gy1EZ",
            slideBottom: "hero_carousel_slideBottom__twWvk",
            link: "hero_carousel_link__pwvsN",
            microCopy: "hero_carousel_microCopy__SR0jg",
            arrowWrapper: "hero_carousel_arrowWrapper__Esf8U",
            disabled: "hero_carousel_disabled__TpU9A",
            paginationContent: "hero_carousel_paginationContent__7Npze",
            selected: "hero_carousel_selected__n0gon",
            paginationImage: "hero_carousel_paginationImage__Yep78",
            paginationText: "hero_carousel_paginationText__dc3ah",
            mobileSliderControl: "hero_carousel_mobileSliderControl__I5faZ",
            controlsBar: "hero_carousel_controlsBar__gFHXj",
            blueProgressBar: "hero_carousel_blueProgressBar__6nBPP",
            paginationNumbers: "hero_carousel_paginationNumbers__TGZpG"
        }
    }, 22602: function (e) {
        e.exports = {
            root: "hero_module_root__0eGEz",
            buttonCTAVariant: "hero_module_buttonCTAVariant__p07ws",
            content: "hero_module_content__e2q9w",
            centerText: "hero_module_centerText__M1rH8",
            fieldHeroMEyebrowTag: "hero_module_fieldHeroMEyebrowTag__byWdo",
            NoImage: "hero_module_NoImage__QCB6H",
            sidecontent: "hero_module_sidecontent__370So",
            fieldHeroMHeadline: "hero_module_fieldHeroMHeadline__aYSlZ",
            fieldHeroMSubHeadline: "hero_module_fieldHeroMSubHeadline__0Fqso",
            bottomLinks: "hero_module_bottomLinks__QuxdU",
            bg: "hero_module_bg__apkwP",
            bgPattern: "hero_module_bgPattern__1_zqC",
            bgPatternMobile: "hero_module_bgPatternMobile___u0lJ",
            ImageCenterText: "hero_module_ImageCenterText__XlfoO",
            green: "hero_module_green__Ab934",
            bgPatternBg: "hero_module_bgPatternBg__Nucz4",
            red: "hero_module_red__Rs_2L",
            purple: "hero_module_purple___Ra9_",
            blue: "hero_module_blue__EWIbP",
            default: "hero_module_default__L9Jys",
            bluetogreen: "hero_module_bluetogreen__h4A6M",
            purpletoblue: "hero_module_purpletoblue__xURfc",
            redtopurple: "hero_module_redtopurple__DLyBh",
            ImageTag: "hero_module_ImageTag__XVdPv",
            bgContent: "hero_module_bgContent__Ql7fI",
            mainImageContainer: "hero_module_mainImageContainer__CWD_Z",
            patternImage: "hero_module_patternImage__GqsxO",
            "tag-darkBlue": "hero_module_tag-darkBlue__2Rm0k",
            "tag-lightBlue": "hero_module_tag-lightBlue__RX4wi",
            "tag-darkRed": "hero_module_tag-darkRed__TZO_y",
            "tag-lightRed": "hero_module_tag-lightRed__gHdgo",
            "tag-darkPurple": "hero_module_tag-darkPurple__VUKkG",
            "tag-lightPurple": "hero_module_tag-lightPurple___sNNB",
            "tag-darkGreen": "hero_module_tag-darkGreen__xCPlz",
            "tag-lightGreen": "hero_module_tag-lightGreen__qaazF",
            innerContent: "hero_module_innerContent__bCH7l",
            hasImage: "hero_module_hasImage__0JVtA",
            fieldHeroMCtaLink: "hero_module_fieldHeroMCtaLink__3hWF_",
            fieldCtaWIconCtaLinkIcon: "hero_module_fieldCtaWIconCtaLinkIcon__ij0dL",
            buttonCTAContainer: "hero_module_buttonCTAContainer__2hiCB"
        }
    }, 64144: function (e) {
        e.exports = {
            root: "icon_text_module_root__FBscg",
            contentContainer: "icon_text_module_contentContainer__WGjZj",
            eyebrow: "icon_text_module_eyebrow__nN_kw",
            headline: "icon_text_module_headline__8KkLm",
            itemsContainer: "icon_text_module_itemsContainer__haypN",
            item: "icon_text_module_item__AG39X",
            itemText: "icon_text_module_itemText__DSfm3",
            itemImage: "icon_text_module_itemImage__4R26Z",
            CTAContainer: "icon_text_module_CTAContainer__HfFQ9",
            link: "icon_text_module_link__A7nhT",
            cloudBg: "icon_text_module_cloudBg__tfDPF",
            threeColumns: "icon_text_module_threeColumns__ptIdr",
            sixColumns: "icon_text_module_sixColumns__Gwq4J",
            blueBackground: "icon_text_module_blueBackground__1y_Wg"
        }
    }, 12740: function (e) {
        e.exports = {
            root: "image_module_root__Q10OQ",
            image: "image_module_image__GpkeA",
            roundCorners: "image_module_roundCorners__ZZ1QZ"
        }
    }, 55361: function (e) {
        e.exports = {
            root: "intro_card_hero_module_root___rsif",
            card: "intro_card_hero_module_card__VfdRm",
            mainContainer: "intro_card_hero_module_mainContainer__JSv4q",
            fadeIn: "intro_card_hero_module_fadeIn___iUta",
            cardContent: "intro_card_hero_module_cardContent__lPPWk",
            hasSwiper: "intro_card_hero_module_hasSwiper__JJbRt",
            isMobile: "intro_card_hero_module_isMobile__Wi7ZO",
            backgroundImage: "intro_card_hero_module_backgroundImage__CHqjU",
            mobileImage: "intro_card_hero_module_mobileImage__Dq9UK",
            mobileImageWrapper: "intro_card_hero_module_mobileImageWrapper__UiYNl",
            mobileImageOverlay: "intro_card_hero_module_mobileImageOverlay__mE1Az",
            cardContentWrapper: "intro_card_hero_module_cardContentWrapper__w_A7p",
            additionalPadding: "intro_card_hero_module_additionalPadding__ovPnJ",
            overlay: "intro_card_hero_module_overlay__jL_sG",
            cardTopRow: "intro_card_hero_module_cardTopRow__AQVaZ",
            tag: "intro_card_hero_module_tag__qiBE_",
            dateAndReadTime: "intro_card_hero_module_dateAndReadTime__oySTL",
            "tag--red": "intro_card_hero_module_tag--red__8fs5b",
            "tag--lavender": "intro_card_hero_module_tag--lavender__ipCO_",
            date: "intro_card_hero_module_date__NsVbD",
            readTime: "intro_card_hero_module_readTime__iiT8_",
            headline: "intro_card_hero_module_headline__tSk4m",
            "headline--Small": "intro_card_hero_module_headline--Small__0X1c5",
            copy: "intro_card_hero_module_copy__5TpoK",
            author: "intro_card_hero_module_author__73sYA",
            authorImage: "intro_card_hero_module_authorImage__I6dEI",
            authorName: "intro_card_hero_module_authorName__eV24s",
            cardBottomRow: "intro_card_hero_module_cardBottomRow__hQFnR",
            linkRow: "intro_card_hero_module_linkRow__0Kv1v",
            btnCTA: "intro_card_hero_module_btnCTA__tOB68",
            eyebrow: "intro_card_hero_module_eyebrow__KsJEJ"
        }
    }, 80269: function (e) {
        e.exports = {root: "intro_module_root__zJNnB", content: "intro_module_content__MMBvC"}
    }, 29273: function (e) {
        e.exports = {
            root: "intro_with_graphic_links_module_root__KL0lY",
            contentWrapper: "intro_with_graphic_links_module_contentWrapper__m_63l",
            centered: "intro_with_graphic_links_module_centered__Lt_1a",
            headline: "intro_with_graphic_links_module_headline__qTnm4",
            ctaWrapper: "intro_with_graphic_links_module_ctaWrapper__1t5f9",
            linksWrapper: "intro_with_graphic_links_module_linksWrapper__HjzA7",
            copy: "intro_with_graphic_links_module_copy__upDLP",
            link: "intro_with_graphic_links_module_link__reRKY",
            imageWrapper: "intro_with_graphic_links_module_imageWrapper__1Eryg"
        }
    }, 28581: function (e) {
        e.exports = {
            root: "intro_with_graphic_module_root__Ox_l1",
            backgroundContainer: "intro_with_graphic_module_backgroundContainer__akCNW",
            blueBackground: "intro_with_graphic_module_blueBackground__tm6DC",
            cloud: "intro_with_graphic_module_cloud__VPOk4",
            contentContainer: "intro_with_graphic_module_contentContainer__1rGIa",
            eyebrow: "intro_with_graphic_module_eyebrow__DkGpv",
            headline: "intro_with_graphic_module_headline__dyK8W",
            imageContainer: "intro_with_graphic_module_imageContainer__mJxSW",
            noEyebrowNoHeadline: "intro_with_graphic_module_noEyebrowNoHeadline__DX4_L",
            caption: "intro_with_graphic_module_caption__ChZ7E",
            cardsContainer: "intro_with_graphic_module_cardsContainer__mWynj",
            cardGrid: "intro_with_graphic_module_cardGrid__jUIVL",
            fourCards: "intro_with_graphic_module_fourCards__lDCa8",
            textCard: "intro_with_graphic_module_textCard__YC35x",
            cardNumber: "intro_with_graphic_module_cardNumber__JZfh_",
            cardCopy: "intro_with_graphic_module_cardCopy__jkyeY"
        }
    }, 72111: function (e) {
        e.exports = {
            root: "intro_with_responsive_graphic_module_root__hg95I",
            mainCard: "intro_with_responsive_graphic_module_mainCard__ha8qZ",
            cloud: "intro_with_responsive_graphic_module_cloud__ySKoY",
            contentWrapper: "intro_with_responsive_graphic_module_contentWrapper__RJ0QF",
            eyebrow: "intro_with_responsive_graphic_module_eyebrow__4ghLu",
            eyebrowTextColumnsVariant: "intro_with_responsive_graphic_module_eyebrowTextColumnsVariant__sTg5C",
            headline: "intro_with_responsive_graphic_module_headline__gFxvz",
            paragraph: "intro_with_responsive_graphic_module_paragraph__9jUNe",
            imageWrapper: "intro_with_responsive_graphic_module_imageWrapper__8wUyj",
            textColumnsWrapper: "intro_with_responsive_graphic_module_textColumnsWrapper__2Rk4P",
            column: "intro_with_responsive_graphic_module_column__3qUZK",
            columnNumber: "intro_with_responsive_graphic_module_columnNumber__6IdWM",
            columnNumberBlue: "intro_with_responsive_graphic_module_columnNumberBlue__9FHR_",
            columnNumberPurple: "intro_with_responsive_graphic_module_columnNumberPurple__aQZCA",
            columnNumberGreen: "intro_with_responsive_graphic_module_columnNumberGreen__DresN",
            columnHeadline: "intro_with_responsive_graphic_module_columnHeadline__EOylv",
            columnCopy: "intro_with_responsive_graphic_module_columnCopy__RwQ71"
        }
    }, 18364: function (e) {
        e.exports = {
            root: "leader_with_graphic_module_root__1b4UO",
            blueBackground: "leader_with_graphic_module_blueBackground__PhXit",
            centered: "leader_with_graphic_module_centered__M_r5R",
            imageWrapper: "leader_with_graphic_module_imageWrapper__Hul_z",
            content: "leader_with_graphic_module_content__BAQdi",
            eyebrowContainer: "leader_with_graphic_module_eyebrowContainer__caeob",
            eyebrow: "leader_with_graphic_module_eyebrow__L0LOw",
            bottomColumnsContainer: "leader_with_graphic_module_bottomColumnsContainer__duNcT",
            hasBottomColumns: "leader_with_graphic_module_hasBottomColumns__Y9b7K",
            bg: "leader_with_graphic_module_bg__JfqhM",
            headline: "leader_with_graphic_module_headline__WHTBo",
            copy: "leader_with_graphic_module_copy__wT6HY",
            ctaWrapper: "leader_with_graphic_module_ctaWrapper__JeFm_",
            cta: "leader_with_graphic_module_cta__k5rZZ",
            hasCta: "leader_with_graphic_module_hasCta__0d4c3",
            bulletColumnContainer: "leader_with_graphic_module_bulletColumnContainer__UySGX"
        }
    }, 81119: function (e) {
        e.exports = {
            root: "leader_without_graphic_module_root__S4BB7",
            circles: "leader_without_graphic_module_circles__mqgN7",
            copy: "leader_without_graphic_module_copy__0LcrW",
            fullColumn: "leader_without_graphic_module_fullColumn__797RV",
            halfColumn: "leader_without_graphic_module_halfColumn__YHwSh",
            eyebrow: "leader_without_graphic_module_eyebrow__v9IMy",
            headline: "leader_without_graphic_module_headline__J3AHk",
            headlineFullWidth: "leader_without_graphic_module_headlineFullWidth__gT5mn",
            dotItemsContainer: "leader_without_graphic_module_dotItemsContainer__UoO7I",
            dotEyebrow: "leader_without_graphic_module_dotEyebrow__HNc6h",
            dotHeadline: "leader_without_graphic_module_dotHeadline__rzST_",
            dotCopy: "leader_without_graphic_module_dotCopy__fMKGo",
            dotItem: "leader_without_graphic_module_dotItem__mIBMc",
            dotBg: "leader_without_graphic_module_dotBg__Q87q9",
            small: "leader_without_graphic_module_small__71oWZ",
            medium: "leader_without_graphic_module_medium__atoJK",
            large: "leader_without_graphic_module_large__5jrC_",
            green: "leader_without_graphic_module_green__9xrbt",
            red: "leader_without_graphic_module_red__Yn8js",
            blue: "leader_without_graphic_module_blue__sMy79"
        }
    }, 41659: function (e) {
        e.exports = {
            root: "leadership_profile_module_root__SqRH6",
            linkedinIcon: "leadership_profile_module_linkedinIcon__RLRbE",
            image: "leadership_profile_module_image__3rLMH",
            imageContent: "leadership_profile_module_imageContent__03jP0",
            imageDownloadLink: "leadership_profile_module_imageDownloadLink__bSVWw",
            contentBlock: "leadership_profile_module_contentBlock__LYo4y",
            title: "leadership_profile_module_title__8OUyq",
            position: "leadership_profile_module_position__36Hxl",
            content: "leadership_profile_module_content__vCvYA",
            cta: "leadership_profile_module_cta__Chp_X"
        }
    }, 43043: function (e) {
        e.exports = {
            root: "light_hero_module_root__iB7sD",
            linkbox: "light_hero_module_linkbox__Yx6ri",
            headline: "light_hero_module_headline__EhMgX",
            icon: "light_hero_module_icon__SXbrt",
            link: "light_hero_module_link__eRgz_",
            copy: "light_hero_module_copy__WZ20E",
            form: "light_hero_module_form__kedSR"
        }
    }, 29351: function (e) {
        e.exports = {
            root: "logo_lists_module_root__NEVSh",
            withCards: "logo_lists_module_withCards__uidb_",
            listWrapper: "logo_lists_module_listWrapper__hnWT_",
            logoName: "logo_lists_module_logoName__6IIdk",
            logos: "logo_lists_module_logos__LL1_7",
            fiveLogos: "logo_lists_module_fiveLogos__Tkvh_",
            logoImageWrapper: "logo_lists_module_logoImageWrapper__u7qY6",
            lists: "logo_lists_module_lists__mcNcj",
            headline: "logo_lists_module_headline__7j5gT",
            contentWrapper: "logo_lists_module_contentWrapper__B_Fgn",
            eyebrow: "logo_lists_module_eyebrow__zoy1n",
            copy: "logo_lists_module_copy__RH4qv",
            listHeadline: "logo_lists_module_listHeadline__oRmBf",
            logosQuattro: "logo_lists_module_logosQuattro__3qrs8",
            logoWrapper: "logo_lists_module_logoWrapper__83Q5w",
            ctaContainer: "logo_lists_module_ctaContainer__faTnr"
        }
    }, 31962: function (e) {
        e.exports = {
            root: "logos_module_root__VvqT_",
            contentContainer: "logos_module_contentContainer__PDu3z",
            eyebrow: "logos_module_eyebrow__tnUZe",
            headline: "logos_module_headline__WnoEh",
            groupHeadline: "logos_module_groupHeadline__fJBT_",
            logoGroup: "logos_module_logoGroup__5e1qK",
            logoListContainer: "logos_module_logoListContainer__czoee",
            logo: "logos_module_logo__JoBG0",
            hasLink: "logos_module_hasLink__rdQjD",
            subgroupSubheadline: "logos_module_subgroupSubheadline__rR511",
            subgroupsContainer: "logos_module_subgroupsContainer__XCLuw"
        }
    }, 70482: function (e) {
        e.exports = {root: "media_coverage_module_root__ACnSC", headline: "media_coverage_module_headline__blBOt"}
    }, 36088: function (e) {
        e.exports = {
            root: "multicolumn_table_module_root__FrAEG",
            container: "multicolumn_table_module_container___7dHG",
            header: "multicolumn_table_module_header__QKuUG",
            headerOpen: "multicolumn_table_module_headerOpen__GtgzD",
            table: "multicolumn_table_module_table__aEebK",
            columnTitles: "multicolumn_table_module_columnTitles__nNCXN",
            headingMobile: "multicolumn_table_module_headingMobile__WpTa9",
            mainHeading: "multicolumn_table_module_mainHeading__2JhoS",
            columnHeading: "multicolumn_table_module_columnHeading__OJz0N",
            columnHeadingHighlighted: "multicolumn_table_module_columnHeadingHighlighted__elcYR",
            groupRow: "multicolumn_table_module_groupRow__V1Y2C",
            groupName: "multicolumn_table_module_groupName__t0PgA",
            rows: "multicolumn_table_module_rows__xJwzp",
            row: "multicolumn_table_module_row__KO_cW",
            cellHighlighted: "multicolumn_table_module_cellHighlighted__F8P8v",
            rowSticky: "multicolumn_table_module_rowSticky__wHm1_",
            heading: "multicolumn_table_module_heading__MqMpx",
            headingHighlighted: "multicolumn_table_module_headingHighlighted__YpA68",
            cell: "multicolumn_table_module_cell__hEtF2",
            groupNameCompact: "multicolumn_table_module_groupNameCompact__LEnlP",
            label: "multicolumn_table_module_label__Gmjfn",
            cells: "multicolumn_table_module_cells__Hsxoc",
            cellHighlight: "multicolumn_table_module_cellHighlight__YXKFf",
            cellContent: "multicolumn_table_module_cellContent__TUxSu",
            mobileControls: "multicolumn_table_module_mobileControls__AFJ6k",
            progress: "multicolumn_table_module_progress__Y8Q86",
            bar: "multicolumn_table_module_bar__8bvDf",
            lowerRow: "multicolumn_table_module_lowerRow__uq80a",
            numColumn: "multicolumn_table_module_numColumn__OHIgQ",
            arrows: "multicolumn_table_module_arrows__nwxN8",
            leftArrow: "multicolumn_table_module_leftArrow__IuJhU",
            rightArrow: "multicolumn_table_module_rightArrow__nMeEQ",
            disabled: "multicolumn_table_module_disabled__v9xOK",
            variantOne: "multicolumn_table_module_variantOne___NG_H",
            variantTwo: "multicolumn_table_module_variantTwo__rPiDi",
            hideMobile: "multicolumn_table_module_hideMobile__zbuKd",
            showMobile: "multicolumn_table_module_showMobile__nwXH5",
            containerOpen: "multicolumn_table_module_containerOpen__QvaCb",
            contactUsButton: "multicolumn_table_module_contactUsButton__GPHO8",
            helpText: "multicolumn_table_module_helpText__puDUi"
        }
    }, 15836: function (e) {
        e.exports = {
            root: "news_filter_module_root__D84uq",
            filtersContainer: "news_filter_module_filtersContainer__xcx0X",
            headline: "news_filter_module_headline__4Gtrw",
            cardsContainer: "news_filter_module_cardsContainer__PpEEH",
            openFilter: "news_filter_module_openFilter__M1uqI"
        }
    }, 73887: function (e) {
        e.exports = {
            root: "numbers_module_root__Z_zBw",
            card: "numbers_module_card__zjLPB",
            blueCard: "numbers_module_blueCard__9kfNP",
            numbersContainer: "numbers_module_numbersContainer__dzsza",
            description: "numbers_module_description__pSUhV",
            numberTopContainer: "numbers_module_numberTopContainer__YXJ4S",
            title: "numbers_module_title__Vlqkw",
            cloud: "numbers_module_cloud__SsTbT",
            contentContainer: "numbers_module_contentContainer__kSBg9",
            eyebrow: "numbers_module_eyebrow__psYxj",
            headline: "numbers_module_headline__RxGrx",
            subHeadline: "numbers_module_subHeadline__BIOiz",
            large: "numbers_module_large__wtO7b",
            medium: "numbers_module_medium__K9ccR",
            blue: "numbers_module_blue__ifcAK",
            green: "numbers_module_green__TT0jp",
            purple: "numbers_module_purple__UT7_j",
            black: "numbers_module_black__SIJAK",
            source: "numbers_module_source__4wXbI",
            copy: "numbers_module_copy__VUQqH",
            ctaContainer: "numbers_module_ctaContainer__WphSI",
            number: "numbers_module_number__iKRT4",
            whiteCentered: "numbers_module_whiteCentered__rHg8b",
            numberSep: "numbers_module_numberSep__cCuaW",
            notVisible: "numbers_module_notVisible__CZzoz",
            whiteRightAligned: "numbers_module_whiteRightAligned__cpkG7",
            fourColumns: "numbers_module_fourColumns__rnBXZ",
            blueWithText: "numbers_module_blueWithText__o781J"
        }
    }, 25573: function (e) {
        e.exports = {
            root: "offices_module_root__VQOhc",
            tile: "offices_module_tile__Pelxj",
            headline: "offices_module_headline__c_r_2",
            copy: "offices_module_copy__ToKaZ",
            cloud: "offices_module_cloud__NQg0s",
            regionNameColumn: "offices_module_regionNameColumn__itUbp",
            regionOfficesContainer: "offices_module_regionOfficesContainer__x7Sgb",
            regionContainer: "offices_module_regionContainer__8s0Xk"
        }
    }, 63907: function (e) {
        e.exports = {
            root: "partners_module_root__je9Ui",
            eyebrow: "partners_module_eyebrow__T3leP",
            headline: "partners_module_headline__k2cpy",
            subHeadline: "partners_module_subHeadline___bf0r",
            linkWrapper: "partners_module_linkWrapper__4nWWd",
            link: "partners_module_link__8pZhb",
            ctaWrapper: "partners_module_ctaWrapper__uZpE5"
        }
    }, 29050: function (e) {
        e.exports = {
            root: "platform_module_root__DVgbx",
            blueBackground: "platform_module_blueBackground__dCsX2",
            content: "platform_module_content__vRQJ2",
            eyebrow: "platform_module_eyebrow__rMPzs",
            headline: "platform_module_headline__AHmET",
            subHeadline: "platform_module_subHeadline__sUr5a",
            platformLinks: "platform_module_platformLinks__MO9a9",
            platformImageWrapper: "platform_module_platformImageWrapper__1XaqX",
            ctaContainer: "platform_module_ctaContainer__YzpA7",
            mainContainer: "platform_module_mainContainer__0u6V7",
            hasAccordions: "platform_module_hasAccordions__bHL90",
            link: "platform_module_link__cQOiD",
            linkIcon: "platform_module_linkIcon__DR218",
            open: "platform_module_open__miXh1",
            accordionContent: "platform_module_accordionContent__m2249",
            accordionCTA: "platform_module_accordionCTA__k5RID",
            bg: "platform_module_bg__euPLl",
            linkContent: "platform_module_linkContent__dvKpc",
            linkHeadline: "platform_module_linkHeadline__D4qG7",
            chevron: "platform_module_chevron__WBl0S",
            arrow: "platform_module_arrow__z8i_J",
            linkSubhead: "platform_module_linkSubhead__j3tSM",
            imageCaption: "platform_module_imageCaption__hx_h4"
        }
    }, 66258: function (e) {
        e.exports = {
            root: "portfolio_cards_module_root__Sr8nm",
            desktopFilters: "portfolio_cards_module_desktopFilters__cEowC",
            mobileFilters: "portfolio_cards_module_mobileFilters__2_cja",
            searchInputBlock: "portfolio_cards_module_searchInputBlock__XYJhw",
            searchHeadline: "portfolio_cards_module_searchHeadline__6rRhk",
            searchEyebrow: "portfolio_cards_module_searchEyebrow__EW51Y",
            searchInputBg: "portfolio_cards_module_searchInputBg__lAEAS",
            searchInputContent: "portfolio_cards_module_searchInputContent__w9jNO",
            searchInputForm: "portfolio_cards_module_searchInputForm__9xjq2",
            searchInput: "portfolio_cards_module_searchInput__ybosQ",
            searchBtn: "portfolio_cards_module_searchBtn__hF39Z",
            filterWrapper: "portfolio_cards_module_filterWrapper__slTIr",
            cardsSection: "portfolio_cards_module_cardsSection__YIaps",
            mobileFiltersOpen: "portfolio_cards_module_mobileFiltersOpen__649nh",
            portfolioCardsPageContainer: "portfolio_cards_module_portfolioCardsPageContainer__9CL4w",
            portfolioCard: "portfolio_cards_module_portfolioCard__PTlVi",
            cardTitle: "portfolio_cards_module_cardTitle__Yw7h_",
            cardCopy: "portfolio_cards_module_cardCopy__V_ZjX",
            searchCategoriesContainer: "portfolio_cards_module_searchCategoriesContainer__CQr3a",
            searchBottomCTAContainer: "portfolio_cards_module_searchBottomCTAContainer__oGKOZ",
            noResults: "portfolio_cards_module_noResults__HVgZx"
        }
    }, 89065: function (e) {
        e.exports = {
            root: "pricing_module_root__SYAMu",
            cloud: "pricing_module_cloud__eQX1x",
            BLUE: "pricing_module_BLUE__ksZ_f",
            GREY: "pricing_module_GREY__ZdDXM",
            bg: "pricing_module_bg__yc35H",
            headline: "pricing_module_headline__0tazd",
            copy: "pricing_module_copy__rzqIU",
            planCard: "pricing_module_planCard__vNCWx",
            titleBlock: "pricing_module_titleBlock__gvgbr",
            plantitle: "pricing_module_plantitle__LVnKQ",
            plansubtitle: "pricing_module_plansubtitle__IQTjL",
            planContentBlock: "pricing_module_planContentBlock__ptxtq",
            planContent: "pricing_module_planContent__BQKNK",
            planAddContent: "pricing_module_planAddContent__HV_2N",
            highlighted: "pricing_module_highlighted__SAHD2",
            PURPLE: "pricing_module_PURPLE__1muMi",
            RED: "pricing_module_RED__znAE6",
            GREEN: "pricing_module_GREEN__8kuZI",
            ctaContainer: "pricing_module_ctaContainer__gQzjK"
        }
    }, 65564: function (e) {
        e.exports = {
            root: "promotional_module_root__Mf4wu",
            tile: "promotional_module_tile__iTWMp",
            wrapper: "promotional_module_wrapper__NE3LQ",
            mobileImage: "promotional_module_mobileImage__A_ILE",
            hasMobileImage: "promotional_module_hasMobileImage__kBudD",
            desktopImage: "promotional_module_desktopImage__eKQLY",
            desktopVideoWrapper: "promotional_module_desktopVideoWrapper__DQ2_q",
            mobileVideoWrapper: "promotional_module_mobileVideoWrapper__X7MtT",
            headline: "promotional_module_headline__z79S9",
            copy: "promotional_module_copy__x7tMs",
            card: "promotional_module_card__9Jsx0",
            cardContent: "promotional_module_cardContent__3RQzI",
            CTAContainer: "promotional_module_CTAContainer__4RJpR",
            centered: "promotional_module_centered__8Vc9i"
        }
    }, 10166: function (e) {
        e.exports = {
            root: "pyramid_diagram_module_root__6GER_",
            contentWrapper: "pyramid_diagram_module_contentWrapper__S4Er4",
            eyebrow: "pyramid_diagram_module_eyebrow__x1rei",
            headline: "pyramid_diagram_module_headline__TdGaT",
            imageWrapper: "pyramid_diagram_module_imageWrapper__U_9CT",
            ctaWrapper: "pyramid_diagram_module_ctaWrapper__8wzsT"
        }
    }, 20284: function (e) {
        e.exports = {
            root: "request_a_demo_module_root__nvwVB",
            blueToPurple: "request_a_demo_module_blueToPurple__x8mM7",
            tagWrapper: "request_a_demo_module_tagWrapper__Z8HDS",
            purpleToRed: "request_a_demo_module_purpleToRed__rp5Di",
            green: "request_a_demo_module_green___TrVy",
            Wrapper: "request_a_demo_module_Wrapper__CBU5b",
            LeftWrapper: "request_a_demo_module_LeftWrapper__ezjkS",
            RightWrapper: "request_a_demo_module_RightWrapper__Vf7Dj",
            formWrapper: "request_a_demo_module_formWrapper__VP9oV",
            bgContainer: "request_a_demo_module_bgContainer__Q6cpe",
            Card: "request_a_demo_module_Card__v20c7",
            Headline: "request_a_demo_module_Headline__D9ge_",
            Copy: "request_a_demo_module_Copy__3EW9P",
            formHeadline: "request_a_demo_module_formHeadline__1qJzs",
            formCopy: "request_a_demo_module_formCopy__Z74Y8",
            descriptionBlock: "request_a_demo_module_descriptionBlock__MJXPh",
            descriptionCopy: "request_a_demo_module_descriptionCopy__1emoq",
            descriptionImage: "request_a_demo_module_descriptionImage__YlmzI"
        }
    }, 60914: function (e) {
        e.exports = {
            root: "resource_filter_module_root__7r7E_",
            headline: "resource_filter_module_headline__6cTQ0",
            filterWrapper: "resource_filter_module_filterWrapper__YKX9q",
            searchBar: "resource_filter_module_searchBar__cvGUM",
            filterButton: "resource_filter_module_filterButton__ofeGp",
            openFilter: "resource_filter_module_openFilter__7d3OR",
            teaserCard: "resource_filter_module_teaserCard__r2rtc"
        }
    }, 17117: function (e) {
        e.exports = {
            root: "resources_root__A_A1e",
            contentContainer: "resources_contentContainer__Pri8n",
            cardContainerFullWidth: "resources_cardContainerFullWidth__jiZMF",
            headline: "resources_headline__8P8Lc",
            ctaContainer: "resources_ctaContainer__MhTTm",
            resourcesContainer: "resources_resourcesContainer__lLOGG",
            resourceCardGridContainer: "resources_resourceCardGridContainer__pm248",
            resourceCard: "resources_resourceCard__X2v0i"
        }
    }, 52552: function (e) {
        e.exports = {
            root: "resources_with_highlight_video_module_root__afvrT",
            tile: "resources_with_highlight_video_module_tile__OisAT",
            headlineContainer: "resources_with_highlight_video_module_headlineContainer__NWlpE",
            videoCardContainer: "resources_with_highlight_video_module_videoCardContainer__cfM8J",
            resourceCardWrapper: "resources_with_highlight_video_module_resourceCardWrapper__1prgl",
            resourcesContainer: "resources_with_highlight_video_module_resourcesContainer__THEux",
            twoResources: "resources_with_highlight_video_module_twoResources__6k2aq",
            oneResource: "resources_with_highlight_video_module_oneResource__LG5lj",
            ctaContainer: "resources_with_highlight_video_module_ctaContainer__Kz49M"
        }
    }, 62120: function (e) {
        e.exports = {
            root: "search_results_filter_module_root__JoFW_",
            filterButton: "search_results_filter_module_filterButton__lByMU"
        }
    }, 87455: function (e) {
        e.exports = {
            root: "security_advisories_module_root__pGwJB",
            filterTitle: "security_advisories_module_filterTitle__Li8Cc",
            searchText: "security_advisories_module_searchText__poE6E",
            filterButton: "security_advisories_module_filterButton__iUjH0",
            tableRow: "security_advisories_module_tableRow__cV2V_",
            resultRow: "security_advisories_module_resultRow__Zlwv0",
            firstColumn: "security_advisories_module_firstColumn__NSVr7",
            secondColumn: "security_advisories_module_secondColumn__jev0o",
            mobileDateColumn: "security_advisories_module_mobileDateColumn__fE64L",
            mainContainer: "security_advisories_module_mainContainer__aqLR9",
            menuHeader: "security_advisories_module_menuHeader__l_s6f",
            menuButton: "security_advisories_module_menuButton__jZ2nT",
            menuItem: "security_advisories_module_menuItem__40ct4",
            chevronDown: "security_advisories_module_chevronDown__5zg1R",
            isOpened: "security_advisories_module_isOpened__rZajz",
            greyed: "security_advisories_module_greyed__NUCXw",
            badge: "security_advisories_module_badge__Jdvld",
            filterInput: "security_advisories_module_filterInput__C9Ykb",
            noSearchResults: "security_advisories_module_noSearchResults___LR8o",
            searchInput: "security_advisories_module_searchInput__JwqBK",
            borderBottom: "security_advisories_module_borderBottom__KqrME",
            link: "security_advisories_module_link__j5iqI"
        }
    }, 77689: function (e) {
        e.exports = {
            root: "solutions_image_text_module_root__sQoKA",
            topPattern: "solutions_image_text_module_topPattern__Pn37S",
            bg: "solutions_image_text_module_bg__ggISJ",
            leftPattern: "solutions_image_text_module_leftPattern__yCp79",
            rightPattern: "solutions_image_text_module_rightPattern__IfgaG",
            mainContainer: "solutions_image_text_module_mainContainer__GxQ9i",
            eyebrow: "solutions_image_text_module_eyebrow__q2Q9s",
            headline: "solutions_image_text_module_headline__ku832",
            copy: "solutions_image_text_module_copy__2p1cd",
            row: "solutions_image_text_module_row__6oJLH",
            hasMargin: "solutions_image_text_module_hasMargin__5l_ua",
            rowImageWrapper: "solutions_image_text_module_rowImageWrapper__8ENTV",
            rowContent: "solutions_image_text_module_rowContent__rshl_",
            rowHeadline: "solutions_image_text_module_rowHeadline__w_lwl",
            rowCopy: "solutions_image_text_module_rowCopy__i8zwu",
            rowCta: "solutions_image_text_module_rowCta__MmyPU",
            rowImage: "solutions_image_text_module_rowImage__bHnrO"
        }
    }, 55331: function (e) {
        e.exports = {
            root: "solutions_module_root__1KoE_",
            blueBackground: "solutions_module_blueBackground__mgHad",
            tile: "solutions_module_tile__wQfM_",
            cloudBg: "solutions_module_cloudBg__8GKN0",
            contentContainer: "solutions_module_contentContainer__mln1b",
            eyebrow: "solutions_module_eyebrow__9cnxV",
            headline: "solutions_module_headline__s2d_Z",
            subHeadline: "solutions_module_subHeadline__cqWAK",
            cardsContainer: "solutions_module_cardsContainer__XDKrP",
            card: "solutions_module_card__BeG8a",
            cardImageContainer: "solutions_module_cardImageContainer__cyeII",
            cardInfoContainer: "solutions_module_cardInfoContainer__dmwwM",
            cardNumber: "solutions_module_cardNumber__5_NA4",
            cardHeadline: "solutions_module_cardHeadline___DaSC",
            cardSubHeadline: "solutions_module_cardSubHeadline__1_Ig7",
            cardCtaContainer: "solutions_module_cardCtaContainer__wzBLT"
        }
    }, 22718: function (e) {
        e.exports = {
            root: "stats_cards_module_root__4vqSk",
            headline: "stats_cards_module_headline__MTFmv",
            numberContentWrapper: "stats_cards_module_numberContentWrapper__vd8QL",
            numberContent: "stats_cards_module_numberContent__uhTEK",
            number: "stats_cards_module_number__BnMdo",
            green: "stats_cards_module_green__u83PP",
            blue: "stats_cards_module_blue__b2lK3",
            purple: "stats_cards_module_purple__Wf7jf",
            description: "stats_cards_module_description__9bshJ",
            logoContent: "stats_cards_module_logoContent__aZNbm",
            logoDescription: "stats_cards_module_logoDescription__9OEZF",
            logoContainer: "stats_cards_module_logoContainer__yFf7R",
            bottomCTA: "stats_cards_module_bottomCTA__puHo2"
        }
    }, 49011: function (e) {
        e.exports = {
            root: "submission_form_module_root__ykiU6",
            Wrapper: "submission_form_module_Wrapper__prpyg",
            innerWrapper: "submission_form_module_innerWrapper__ssga1",
            iframeWrapper: "submission_form_module_iframeWrapper__soLIP",
            iframe: "submission_form_module_iframe__gpk2G"
        }
    }, 21384: function (e) {
        e.exports = {
            root: "table_root__0Exal",
            contentContainer: "table_contentContainer__A6JaZ",
            eyebrow: "table_eyebrow__DloPa",
            headline: "table_headline__3cdyE",
            tableContainer: "table_tableContainer__qTpw8",
            directionColumn: "table_directionColumn__p7Wg0",
            bold: "table_bold__1eIoD",
            threeCols: "table_threeCols__Q2D8Q",
            col1: "table_col1__ZiVX6",
            col2: "table_col2__obIQe",
            col3: "table_col3__4T81H",
            title: "table_title__ufIij",
            copyTwoCol: "table_copyTwoCol__uoHmC",
            copy: "table_copy__5HPZv",
            sep: "table_sep__9M03x",
            twoColSep: "table_twoColSep__5thUR"
        }
    }, 35107: function (e) {
        e.exports = {
            root: "tabs_module_root__Al1TO",
            contentContainer: "tabs_module_contentContainer__xT4l1",
            moduleHeadline: "tabs_module_moduleHeadline__g84TS",
            moduleCopy: "tabs_module_moduleCopy__FTkgm",
            eyebrow: "tabs_module_eyebrow__RttzS",
            tabsHeader: "tabs_module_tabsHeader__D_uUl",
            tabTitle: "tabs_module_tabTitle__cKM7T",
            selected: "tabs_module_selected__kjdhu",
            tabsContainer: "tabs_module_tabsContainer__r9poJ",
            tab: "tabs_module_tab__9YZvw",
            isTablet: "tabs_module_isTablet__FMCvE",
            tabTextContainer: "tabs_module_tabTextContainer__wu5gz",
            headline: "tabs_module_headline__7XDfk",
            copy: "tabs_module_copy__Yx_zi",
            firstRow: "tabs_module_firstRow__R4Re1",
            fullWidthImage: "tabs_module_fullWidthImage__xFsjV",
            fullWidthImageContainer: "tabs_module_fullWidthImageContainer__IkDNR",
            imageContainer: "tabs_module_imageContainer__IlMfK",
            tabCardsContainer: "tabs_module_tabCardsContainer__BkCCX",
            tabCard: "tabs_module_tabCard__v530L",
            card: "tabs_module_card__IVJ7H",
            cardIconContainer: "tabs_module_cardIconContainer__N_nSH",
            cardHeadline: "tabs_module_cardHeadline__v_ZFw",
            cardSubHeadline: "tabs_module_cardSubHeadline__eqVG0",
            cardCtaContainer: "tabs_module_cardCtaContainer__YU7H3"
        }
    }, 2160: function (e) {
        e.exports = {
            root: "testimonials_module_root__QTF6E",
            testimonialsContainer: "testimonials_module_testimonialsContainer__VTWK2",
            customSwiper: "testimonials_module_customSwiper__z00CJ",
            tile: "testimonials_module_tile__lpIeq",
            card: "testimonials_module_card__j4z_p",
            cardImageContainer: "testimonials_module_cardImageContainer__lM8mB",
            cardImageCentered: "testimonials_module_cardImageCentered__NbFMt",
            imageContainer: "testimonials_module_imageContainer__UjCya",
            image: "testimonials_module_image__ybDM_",
            cloud: "testimonials_module_cloud__ETEb9",
            cardContentContainer: "testimonials_module_cardContentContainer__BW93q",
            name: "testimonials_module_name__3Yd_n",
            position: "testimonials_module_position__Y_JWb",
            logoContainer: "testimonials_module_logoContainer__j4G8E",
            isLinkedin: "testimonials_module_isLinkedin__PG68E",
            quote: "testimonials_module_quote__Y_XqG",
            bottomLinkContainer: "testimonials_module_bottomLinkContainer__QEpbx",
            centered: "testimonials_module_centered__6Elde",
            blueBackground: "testimonials_module_blueBackground__nco9A"
        }
    }, 45927: function (e) {
        e.exports = {
            root: "text_card_module_root__PpgdV",
            noPadding: "text_card_module_noPadding__TWNzV",
            cardContainer: "text_card_module_cardContainer__UdVIr",
            headline: "text_card_module_headline__wraWO",
            copy: "text_card_module_copy__dMSVt",
            ctaLink: "text_card_module_ctaLink__W3AKq",
            cloud: "text_card_module_cloud__YObQy",
            cloudHidden: "text_card_module_cloudHidden__3hd2u",
            fieldHeroMCtaLink: "text_card_module_fieldHeroMCtaLink__HBNmY",
            onlyCopyVariant: "text_card_module_onlyCopyVariant__lfIC_"
        }
    }, 57223: function (e) {
        e.exports = {
            root: "use_cases_with_nav_module_root__W0BPE",
            contentContainer: "use_cases_with_nav_module_contentContainer__j69bn",
            centerContent: "use_cases_with_nav_module_centerContent__2Z4Wy",
            navAndCardsContainer: "use_cases_with_nav_module_navAndCardsContainer__MuFTL",
            moduleHeadline: "use_cases_with_nav_module_moduleHeadline__qOAA1",
            headline: "use_cases_with_nav_module_headline__ORzDi",
            moduleCopy: "use_cases_with_nav_module_moduleCopy__ThwCl",
            eyebrow: "use_cases_with_nav_module_eyebrow__c3Mun",
            row: "use_cases_with_nav_module_row__xnsUU",
            notFirst: "use_cases_with_nav_module_notFirst__QzK3x",
            navigationContainer: "use_cases_with_nav_module_navigationContainer__e_Ib0",
            navElement: "use_cases_with_nav_module_navElement__ZwzZ9",
            selected: "use_cases_with_nav_module_selected__NmVqE",
            navTitle: "use_cases_with_nav_module_navTitle__og85H",
            navNumber: "use_cases_with_nav_module_navNumber__WPdWr",
            cardsContainer: "use_cases_with_nav_module_cardsContainer__Lv6j6",
            cloud: "use_cases_with_nav_module_cloud__uilpj",
            cardContainer: "use_cases_with_nav_module_cardContainer__1rOCa",
            card: "use_cases_with_nav_module_card__YxEF_",
            withPadding: "use_cases_with_nav_module_withPadding__dVstU",
            cardImage: "use_cases_with_nav_module_cardImage__YnnEh",
            cardContent: "use_cases_with_nav_module_cardContent__B16c9",
            cardCopy: "use_cases_with_nav_module_cardCopy__3UsYX",
            cardCTA: "use_cases_with_nav_module_cardCTA__2AALn",
            cardCloud: "use_cases_with_nav_module_cardCloud__x5nmq",
            cardTitle: "use_cases_with_nav_module_cardTitle__Rrh7M",
            cardNumber: "use_cases_with_nav_module_cardNumber__k_hO7"
        }
    }, 74724: function (e) {
        e.exports = {
            root: "use_cases_without_nav_module_root__VOnk3",
            contentContainer: "use_cases_without_nav_module_contentContainer__ez1b7",
            eyebrow: "use_cases_without_nav_module_eyebrow__78Dwu",
            headline: "use_cases_without_nav_module_headline__eqOzB",
            cardsContainer: "use_cases_without_nav_module_cardsContainer__7Qaa2",
            cloud: "use_cases_without_nav_module_cloud__qZ07g",
            topcloud: "use_cases_without_nav_module_topcloud__UPq9f",
            mobileCard: "use_cases_without_nav_module_mobileCard__gSGgC"
        }
    }, 36964: function (e) {
        e.exports = {
            root: "validation_module_root__K5Gvn",
            container: "validation_module_container__VgZd1",
            content: "validation_module_content__ysX2Q",
            label: "validation_module_label__Fk6dW",
            buttons: "validation_module_buttons__93zrq",
            button: "validation_module_button__eYuc_",
            buttonBox: "validation_module_buttonBox__XA7ey",
            buttonBoxYes: "validation_module_buttonBoxYes__SueeG",
            buttonBoxNo: "validation_module_buttonBoxNo__S_FX3",
            visible: "validation_module_visible__eQiyY",
            success: "validation_module_success__7DEzs",
            successContainer: "validation_module_successContainer__2sSxS",
            headline: "validation_module_headline__jHX9H",
            successStateMessage: "validation_module_successStateMessage__y8wit"
        }
    }, 91772: function (e) {
        e.exports = {root: "video_card_module_root__AVO2Y", video: "video_card_module_video__f9XNM"}
    }, 62645: function (e) {
        e.exports = {
            root: "workloads_module_root__1fwmP",
            contentContainer: "workloads_module_contentContainer__MuQh_",
            eyebrow: "workloads_module_eyebrow__Rmqdg",
            headline: "workloads_module_headline__ka6zI",
            image: "workloads_module_image__1vREC",
            stepWrapper: "workloads_module_stepWrapper__kAoiX",
            step: "workloads_module_step__ca91J",
            stepIndex: "workloads_module_stepIndex__GJGsF",
            stepCopy: "workloads_module_stepCopy__c3sbX",
            captionHeadline: "workloads_module_captionHeadline__D5Cex",
            captionCopy: "workloads_module_captionCopy__Bg5qF",
            sectionTitle: "workloads_module_sectionTitle__FBxlE",
            sectionCopy: "workloads_module_sectionCopy__rCSWH",
            listTitle: "workloads_module_listTitle__OceEB",
            list: "workloads_module_list__F4SSk",
            bottom: "workloads_module_bottom__4WPej"
        }
    }, 90797: function (e) {
        e.exports = {
            root: "wysiwyg_module_root__NJ_3W",
            content: "wysiwyg_module_content__He4Gq",
            h1: "wysiwyg_module_h1__bNkyh"
        }
    }, 24654: function () {
    }
}]);
//# sourceMappingURL=365-73952264b4fb1f01.js.map
