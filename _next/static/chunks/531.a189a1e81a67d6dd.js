(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[531], {
    88531: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, {
            default: function () {
                return M
            }
        });
        var o = n(85893), i = n(67294), l = n(94184), a = n.n(l), r = n(4298), s = n.n(r), d = n(35652), c = n(73935),
            u = n(45697), p = n.n(u),
            f = !!("undefined" != typeof window && window.document && window.document.createElement), h = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(), m = function (e) {
                function t() {
                    return !function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, t), function (e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ("object" == typeof t || "function" == typeof t) ? t : e
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }

                return !function (e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), h(t, [{
                    key: "componentWillUnmount", value: function () {
                        this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null
                    }
                }, {
                    key: "render", value: function () {
                        return f ? (this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode)), c.createPortal(this.props.children, this.props.node || this.defaultNode)) : null
                    }
                }]), t
            }(i.Component);
        m.propTypes = {children: p().node.isRequired, node: p().any};
        var v = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            return function (t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(), L = function (e) {
            function t() {
                return !function (e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, t), function (e, t) {
                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return !function (e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), v(t, [{
                key: "componentDidMount", value: function () {
                    this.renderPortal()
                }
            }, {
                key: "componentDidUpdate", value: function (e) {
                    this.renderPortal()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    c.unmountComponentAtNode(this.defaultNode || this.props.node), this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null, this.portal = null
                }
            }, {
                key: "renderPortal", value: function (e) {
                    this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode));
                    var t = this.props.children;
                    "function" == typeof this.props.children.type && (t = i.cloneElement(this.props.children)), this.portal = c.unstable_renderSubtreeIntoContainer(this, t, this.props.node || this.defaultNode)
                }
            }, {
                key: "render", value: function () {
                    return null
                }
            }]), t
        }(i.Component);
        L.propTypes = {children: p().node.isRequired, node: p().any};
        var y = c.createPortal ? m : L;
        let C = e => (0, o.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, o.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.6765 12.1268C11.916 12.3663 12.2552 12.4154 12.4341 12.2366C12.613 12.0577 12.5638 11.7185 12.3243 11.479L8.51981 7.67451L12.5809 3.61343C12.8204 3.37392 12.8695 3.03475 12.6907 2.85587C12.5118 2.67699 12.1726 2.72613 11.9331 2.96563L7.87201 7.02671L3.77389 2.92859C3.53438 2.68908 3.19521 2.63994 3.01633 2.81882C2.83745 2.9977 2.88659 3.33687 3.1261 3.57638L7.22422 7.67451L3.38267 11.5161C3.14317 11.7556 3.09403 12.0947 3.27291 12.2736C3.45179 12.4525 3.79096 12.4034 4.03047 12.1638L7.87201 8.3223L11.6765 12.1268Z",
                fill: "#2368F5"
            }), (0, o.jsx)("path", {
                d: "M11.6765 12.1268L11.4997 12.3036L11.6765 12.1268ZM8.51981 7.67451L8.34303 7.49773L8.16625 7.67451L8.34303 7.85128L8.51981 7.67451ZM12.5809 3.61343L12.4041 3.43665V3.43665L12.5809 3.61343ZM12.6907 2.85587L12.8674 2.67909V2.67909L12.6907 2.85587ZM11.9331 2.96563L11.7563 2.78886V2.78886L11.9331 2.96563ZM7.87201 7.02671L7.69524 7.20349L7.87201 7.38027L8.04879 7.20349L7.87201 7.02671ZM3.77389 2.92859L3.95066 2.75181V2.75181L3.77389 2.92859ZM3.01633 2.81882L2.83955 2.64204L3.01633 2.81882ZM3.1261 3.57638L2.94932 3.75315L3.1261 3.57638ZM7.22422 7.67451L7.401 7.85128L7.57778 7.67451L7.401 7.49773L7.22422 7.67451ZM3.38267 11.5161L3.55945 11.6928H3.55945L3.38267 11.5161ZM3.27291 12.2736L3.09613 12.4504H3.09613L3.27291 12.2736ZM4.03047 12.1638L3.85369 11.9871L3.85369 11.9871L4.03047 12.1638ZM7.87201 8.3223L8.04879 8.14552L7.87201 7.96874L7.69524 8.14552L7.87201 8.3223ZM12.2573 12.0598C12.2363 12.0808 12.1925 12.1026 12.1139 12.0912C12.0352 12.0798 11.9387 12.0354 11.8533 11.95L11.4997 12.3036C11.6539 12.4577 11.8467 12.5577 12.0422 12.586C12.2377 12.6143 12.453 12.5712 12.6109 12.4133L12.2573 12.0598ZM12.1475 11.6558C12.2329 11.7412 12.2773 11.8377 12.2887 11.9164C12.3001 11.995 12.2783 12.0388 12.2573 12.0598L12.6109 12.4133C12.7687 12.2555 12.8118 12.0402 12.7835 11.8447C12.7552 11.6492 12.6552 11.4564 12.5011 11.3022L12.1475 11.6558ZM8.34303 7.85128L12.1475 11.6558L12.5011 11.3022L8.69658 7.49773L8.34303 7.85128ZM12.4041 3.43665L8.34303 7.49773L8.69658 7.85128L12.7577 3.7902L12.4041 3.43665ZM12.5139 3.03265C12.5349 3.05365 12.5566 3.09741 12.5452 3.17606C12.5338 3.25477 12.4895 3.35128 12.4041 3.43665L12.7577 3.7902C12.9118 3.63607 13.0118 3.44324 13.0401 3.24776C13.0684 3.05224 13.0253 2.83697 12.8674 2.67909L12.5139 3.03265ZM12.1099 3.14241C12.1952 3.05704 12.2917 3.01268 12.3705 3.00127C12.4491 2.98988 12.4929 3.01164 12.5139 3.03265L12.8674 2.67909C12.7096 2.52122 12.4943 2.47811 12.2988 2.50644C12.1033 2.53476 11.9104 2.63473 11.7563 2.78886L12.1099 3.14241ZM8.04879 7.20349L12.1099 3.14241L11.7563 2.78886L7.69524 6.84994L8.04879 7.20349ZM3.59711 3.10536L7.69524 7.20349L8.04879 6.84994L3.95066 2.75181L3.59711 3.10536ZM3.19311 2.9956C3.21411 2.97459 3.25787 2.95283 3.33653 2.96422C3.41523 2.97563 3.51174 3.01999 3.59711 3.10536L3.95066 2.75181C3.79653 2.59768 3.6037 2.49771 3.40823 2.46939C3.2127 2.44106 2.99743 2.48417 2.83955 2.64204L3.19311 2.9956ZM3.30287 3.3996C3.2175 3.31423 3.17314 3.21772 3.16173 3.13902C3.15034 3.06036 3.1721 3.0166 3.19311 2.9956L2.83955 2.64204C2.68168 2.79992 2.63857 3.01519 2.6669 3.21072C2.69522 3.40619 2.79519 3.59902 2.94932 3.75315L3.30287 3.3996ZM7.401 7.49773L3.30287 3.3996L2.94932 3.75315L7.04745 7.85128L7.401 7.49773ZM3.55945 11.6928L7.401 7.85128L7.04745 7.49773L3.2059 11.3393L3.55945 11.6928ZM3.44968 12.0968C3.42868 12.0758 3.40691 12.0321 3.41831 11.9534C3.42972 11.8747 3.47408 11.7782 3.55945 11.6928L3.2059 11.3393C3.05176 11.4934 2.9518 11.6862 2.92348 11.8817C2.89515 12.0772 2.93826 12.2925 3.09613 12.4504L3.44968 12.0968ZM3.85369 11.9871C3.76832 12.0724 3.67181 12.1168 3.59311 12.1282C3.51445 12.1396 3.47069 12.1178 3.44968 12.0968L3.09613 12.4504C3.25401 12.6083 3.46928 12.6514 3.6648 12.623C3.86028 12.5947 4.05311 12.4948 4.20724 12.3406L3.85369 11.9871ZM7.69524 8.14552L3.85369 11.9871L4.20724 12.3406L8.04879 8.49907L7.69524 8.14552ZM11.8533 11.95L8.04879 8.14552L7.69524 8.49907L11.4997 12.3036L11.8533 11.95Z",
                fill: "#2368F5"
            })]
        });
        var _ = n(39579), b = n(25823), w = n(46182), x = n(81536), j = n(76091), N = n.n(j);
        let Z = e => {
            let {
                    showOverlay: t = !1,
                    videoTitle: n,
                    videoId: l,
                    openModal: r,
                    openInModal: c,
                    autoPlay: u = !1,
                    ...p
                } = e, {className: f, ...h} = e, m = (0, i.useRef)(null), v = (0, i.useRef)(null), L = (0, w.Z)(),
                j = (0, x.$G)(), [M, g] = (0, i.useState)(!1), [O, E] = (0, i.useState)(!1), [k, P] = (0, i.useState)(!1), [T, B] = (0, i.useState)({maxHeight: "668px"}),
                R = () => {
                    let e = document.querySelector(".video_portal .wistia_embed");
                    if (e) {
                        window.test = e;
                        let t = "".concat(e.getBoundingClientRect().height, "px");
                        B({maxHeight: t})
                    }
                };
            (0, i.useEffect)(() => {
                let e;
                let t = () => {
                    R();
                    let t = document.querySelector(".video_portal .wistia_embed");
                    t && setTimeout(() => {
                        e && e.disconnect()
                    }, 1e3)
                };
                return t(), (e = new MutationObserver(t)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }), () => e.disconnect()
            }, []), (0, i.useEffect)(() => (window.addEventListener("resize", R), () => window.removeEventListener("resize", R)), []);
            let S = () => {
                if (m) {
                    let e = m.current.querySelector(".w-big-play-button");
                    e && (e.click(), g(!0))
                }
            }, I = () => {
                if (!k && l) {
                    let e = document.createElement("script");
                    e.src = "https://fast.wistia.com/embed/medias/".concat(l, ".jsonp"), e.async = !0, document.body.appendChild(e);
                    let t = document.createElement("script");
                    t.src = "https://fast.wistia.com/assets/external/E-v1.js", t.async = !0, document.body.appendChild(t), P(!0)
                }
                E(!0)
            }, F = () => {
                E(!1)
            };
            return (0, b.Z)(v, () => {
                F()
            }), (0, i.useEffect)(() => {
                r && (r.current = I)
            }), (0, o.jsxs)("div", {
                className: "".concat(N().root, " h-full w-full"), ...p,
                children: [t && (0, o.jsx)("div", {
                    className: "h-full w-full absolute",
                    children: !M && !u && (0, o.jsxs)("div", {
                        className: N().videoOverlay,
                        children: [n && (0, o.jsx)("div", {
                            className: N().videoTitleContainer,
                            children: (0, o.jsx)("div", {className: N().videoTitle, children: n})
                        }), (0, o.jsxs)("button", {
                            type: "button",
                            className: a()(N().playBtn, "glb-video-btn btn-video-play"),
                            onClick: c ? () => I() : () => S(),
                            children: [(0, o.jsx)("span", {
                                className: "sr-only",
                                children: j("Play")
                            }), (0, o.jsx)("div", {
                                className: N().playBtnIcon,
                                children: (0, o.jsx)(d.Z, {"aria-hidden": !0})
                            })]
                        })]
                    })
                }), (0, o.jsxs)("div", {
                    className: a()(N().videoContainer, "h-full w-full"),
                    style: T,
                    children: [!c && (0, o.jsxs)(o.Fragment, {
                        children: [l ? (0, o.jsx)(s(), {
                            src: "https://fast.wistia.com/embed/medias/".concat(l, ".jsonp"),
                            async: !0
                        }, "wistia-video-".concat(l)) : null, (0, o.jsx)(s(), {
                            src: "https://fast.wistia.com/assets/external/E-v1.js",
                            async: !0
                        }, "wistia-external-js")]
                    }), (0, o.jsx)("div", {
                        className: "wrapper h-full w-full",
                        children: (0, o.jsx)("section", {
                            className: a()(N().videoComponent, "relative h-full w-full"),
                            children: (0, o.jsx)("div", {
                                className: N().videoPlayer,
                                ref: m,
                                children: (0, o.jsx)("div", {
                                    id: l,
                                    className: "wistia_responsive_padding md:h-full w-full",
                                    children: (0, o.jsx)("div", {
                                        className: "h-full w-full relative wistia_responsive_wrapper",
                                        children: (0, o.jsx)("div", {
                                            className: a()("relative h-full w-full wistia_embed controlsVisibleOnLoad=false videoFoam=true", "wistia_async_".concat(l), c ? "preload=none autoPlay=false" : "preload=metadata autoPlay=true", L ? "videoFoam=true" : "videoFoam=false"),
                                            children: (0, o.jsx)("div", {
                                                className: "wistia_swatch h-full w-full opacity-0 overflow-hidden transition-opacity-200 absolute inset-0",
                                                children: l ? (0, o.jsx)(_.Z, {
                                                    image: {
                                                        url: "https://fast.wistia.com/embed/medias/".concat(l, "/swatch"),
                                                        alt: "",
                                                        width: 199,
                                                        height: 100,
                                                        title: ""
                                                    }, fill: !0, className: "blur-[5px] h-full w-full object-contain"
                                                }) : null
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }), O && (0, o.jsx)(y, {
                        children: (0, o.jsx)("div", {
                            className: "".concat(N().portal, " video_portal fixed inset-0 z-20 bg-black bg-opacity-50"),
                            children: (0, o.jsx)("div", {
                                className: "px-40 py-24 h-full w-full relative flex items-center",
                                children: (0, o.jsxs)("div", {
                                    className: "relative w-full z-30 p-10 bg-white rounded-20 max-w-[1200px] mx-auto",
                                    ref: v,
                                    children: [(0, o.jsx)(Z, {
                                        ...h,
                                        openInModal: !1,
                                        objectfit: "cover",
                                        autoPlay: !0
                                    }), (0, o.jsx)("button", {
                                        type: "button",
                                        className: a()(N().closeBtn),
                                        onClick: () => {
                                            F()
                                        },
                                        children: (0, o.jsx)(C, {className: ""})
                                    })]
                                })
                            })
                        })
                    })]
                })]
            }, l)
        };
        var M = Z
    }, 76091: function (e) {
        e.exports = {
            root: "videoComponent_root__NavwZ",
            headlineContainer: "videoComponent_headlineContainer__cusaF",
            videoOverlay: "videoComponent_videoOverlay__IyRKT",
            bgCloud: "videoComponent_bgCloud__en_bH",
            bgGradient: "videoComponent_bgGradient__THY79",
            videoTitleContainer: "videoComponent_videoTitleContainer___xN53",
            videoTitle: "videoComponent_videoTitle__vqYue",
            playBtn: "videoComponent_playBtn__78Jzy",
            playBtnIcon: "videoComponent_playBtnIcon__8preG",
            videoPlayer: "videoComponent_videoPlayer__bByN0",
            videoContainer: "videoComponent_videoContainer__xBk3d",
            videoComponent: "videoComponent_videoComponent__x0YOb",
            closeBtn: "videoComponent_closeBtn__oywkY",
            portal: "videoComponent_portal__yzkyt",
            fadeIn: "videoComponent_fadeIn__3tIQe"
        }
    }
}]);
//# sourceMappingURL=531.a189a1e81a67d6dd.js.map
