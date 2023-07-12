!function () {
    var a = window.driftt = window.drift = window.driftt || [];
    if (!a.init) {
        if (a.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
        a.invoked = !0;
        a.methods = "identify config track reset debug show ping page hide off on".split(" ");
        a.factory = function (c) {
            return function () {
                var b = Array.prototype.slice.call(arguments);
                return b.unshift(c), a.push(b), a
            }
        };
        a.methods.forEach(function (c) {
            a[c] = a.factory(c)
        });
        a.load = function (c) {
            var b = 3E5, d = Math.ceil(new Date / b) * b;
            b =
                document.createElement("script");
            b.type = "text/javascript";
            b.async = !0;
            b.crossorigin = "anonymous";
            b.src = "https://js.driftt.com/include/" + d + "/" + c + ".js";
            c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(b, c)
        }
    }
}();
drift.SNIPPET_VERSION = "0.3.1";
var drift_id;
switch (window.location.hostname.slice(-2)) {
    case "de":
        drift_id = "cb7n2mswht9v";
        break;
    case "fr":
        drift_id = "bgffi72v7x83";
        break;
    case "jp":
        drift_id = "pa76pa83fw43";
        break;
    default:
        drift_id = "2ykw9843t99d"
}
drift.load(drift_id);

(function (a, b) {
    var d = "pdst-capture", e = "script";
    if (!b.getElementById(d)) {
        a.pdst = a.pdst || function () {
            (a.pdst.q = a.pdst.q || []).push(arguments)
        };
        var c = b.createElement(e);
        c.id = d;
        c.async = 1;
        c.src = "https://cdn.pdst.fm/ping.min.js";
        b = b.getElementsByTagName(e)[0];
        b.parentNode.insertBefore(c, b)
    }
    a.pdst("conf", {key: "0121f55f8737489cab239c484649319a"});
    a.pdst("view")
})
(window, document);

(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = ("https:" == document.location.protocol ? "https://" : "http://") + "t.sf14g.com/sf14g.js";
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(a, c)
})();
(function () {
    function a() {
        !1 === c && (c = !0, Munchkin.init("306-ZEJ-256"))
    }

    var c = !1, b = document.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "//munchkin.marketo.net/munchkin.js";
    b.onreadystatechange = function () {
        "complete" != this.readyState && "loaded" != this.readyState || a()
    };
    b.onload = a;
    document.getElementsByTagName("head")[0].appendChild(b)
})();

(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = ("https:" == document.location.protocol ? "https://" : "http://") + "t.sf14g.com/sf14g.js";
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(a, c)
})();
(function () {
    function a() {
        !1 === c && (c = !0, Munchkin.init("306-ZEJ-256"))
    }

    var c = !1, b = document.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "//munchkin.marketo.net/munchkin.js";
    b.onreadystatechange = function () {
        "complete" != this.readyState && "loaded" != this.readyState || a()
    };
    b.onload = a;
    document.getElementsByTagName("head")[0].appendChild(b)
})();

(function (l, f, n) {
    function q() {
        var a = r(v("iframe"), w);
        a.length && x(function () {
            m(a, y)
        })
    }

    function w(a) {
        return -1 < a.src.indexOf("player.vimeo.com/video/")
    }

    function x(a) {
        p(f.Vimeo) ? z("https://player.vimeo.com/api/player.js", a) : a()
    }

    function y(a) {
        if (!a.__vimeoTracked) {
            a.__vimeoTracked = !0;
            var d = new Vimeo.Player(a), b = n._track.percentages,
                c = {Play: "play", Pause: "pause", "Watch to End": "ended"}, e = {};
            d.getVideoTitle().then(function (k) {
                m(["Play", "Pause", "Watch to End"], function (g) {
                    if (n.events[g]) d.on(c[g], function () {
                        t(g,
                            k)
                    })
                });
                if (b) d.on("timeupdate", function (g) {
                    g = g.percent;
                    for (var h in b) g >= b[h] && !e[h] && (e[h] = !0, t(h, k))
                })
            })
        }
    }

    function A(a) {
        a = B({}, {events: {Play: !0, Pause: !0, "Watch to End": !0}, percentages: {each: [], every: []}}, a);
        m(["each", "every"], function (c) {
            var e = a.percentages[c];
            u(e) || (e = [e]);
            e && (a.percentages[c] = C(e, Number))
        });
        var d = [].concat(a.percentages.each);
        a.percentages.every && m(a.percentages.every, function (c) {
            var e = 100 / c, k = [], g;
            for (g = 1; g < e; g++) k.push(c * g);
            d = d.concat(r(k, function (h) {
                return 0 < h && 100 > h
            }))
        });
        var b =
            D(d, function (c, e) {
                c[e + "%"] = e / 100;
                return c
            }, {});
        a._track = {percentages: b};
        return a
    }

    function E(a) {
        a = a || {};
        var d = a.name || "dataLayer", b = a.name || f.GoogleAnalyticsObject || "ga", c = "_gaq", e = {
            gtm: function (g, h) {
                k.push({event: "vimeoTrack", attributes: {videoAction: g, videoName: h}})
            }, cl: function (g, h) {
                f[c].push(["_trackEvent", "Videos", g, h])
            }, ua: function (g, h) {
                f[b]("send", "event", "Videos", g, h)
            }
        };
        switch (a.type) {
            case "gtm":
                var k = f[d] = f[d] || [];
                break;
            case "ua":
                f[b] = f[b] || function () {
                    (f[b].q = f[b].q || []).push(arguments)
                };
                f[b].l =
                    +new Date;
                break;
            case "cl":
                f[c] = f[c] || [];
                break;
            default:
                p(f[d]) ? b && !p(f[b]) ? a.type = "ua" : p(f[c]) || p(f[c].push) || (a.type = "cl") : (a.type = "gtm", k = f[d] = f[d] || [])
        }
        return e[a.type]
    }

    function B() {
        var a = [].slice.call(arguments), d = a.shift(), b, c;
        for (c = 0; c < a.length; c++) {
            var e = a[c];
            for (b in e) d[b] = e[b]
        }
        return d
    }

    function u(a) {
        return Array.isArray_ ? Array.isArray_(a) : "[object Array]" === Object.prototype.toString.call(a)
    }

    function m(a, d) {
        if (Array.prototype.forEach_) return a.forEach.call(a, d);
        var b;
        for (b = 0; b < a.length; b++) d.call(f,
            a[b], b, a)
    }

    function C(a, d) {
        if (Array.prototype.map_) return a.map.call(a, d);
        var b = [];
        m(a, function (c, e, k) {
            b.push(d.call(f, c, e, k))
        });
        return b
    }

    function r(a, d) {
        if (Array.prototype.filter) return a.filter.call(a, d);
        var b = [];
        m(a, function (c, e, k) {
            d.call(f, c, e, k) && b.push(c)
        });
        return b
    }

    function D(a, d, b) {
        if (Array.prototype.reduce) return a.reduce.call(a, d, b);
        var c;
        for (c = 0; c < a.length; c++) {
            var e = a[c];
            b = d.call(f, b, e, a, c)
        }
        return b
    }

    function p(a) {
        return "undefined" === typeof a
    }

    function v(a) {
        u(a) || (a = [a]);
        return [].slice.call(l.querySelectorAll(a.join()))
    }

    function z(a, d) {
        function b() {
            d && (d(), e.onload = null)
        }

        var c = l.getElementsByTagName("script")[0];
        var e = l.createElement("script");
        e.onload = b;
        e.src = a;
        e.async = !0;
        c.parentNode.insertBefore(e, c)
    }

    if (!navigator.userAgent.match(/MSIE [678]\./gi)) {
        n = A(n);
        var t = E(n.syntax);
        "loading" !== l.readyState ? q() : l.addEventListener("DOMContentLoaded", q);
        l.addEventListener("load", q, !0)
    }
})(document, window, {
    events: {Play: !0, Pause: !0, "Watch to End": !0},
    percentages: {every: 25, each: [10, 90]}
});
