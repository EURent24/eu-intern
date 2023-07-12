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