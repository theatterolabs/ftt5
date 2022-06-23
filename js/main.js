var pole0;
var pole2; 
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function d(a, b) {
        var d = -1,
            e = a ? a.length : 0;
        if ("number" == typeof e && -1 < e && e <= p)
            for (; ++d < e;) b(a[d], d, a);
        else c(a, b)
    }

    function b(b) {
        b = String(b).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }

    function c(a, b) {
        for (var c in a) l.call(a, c) && b(a[c], c, a)
    }

    function e(b) {
        return null == b ? a(b) : w.call(b).slice(8, -1)
    }

    function f(a, b) {
        var c = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(c) &&
            ("object" == c ? !!a[b] : !0)
    }

    function h(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function m(a, b) {
        var c = null;
        d(a, function(d, e) {
            c = b(c, d, e, a)
        });
        return c
    }

    function n(a) {
        function d(c) {
            return m(c, function(c, d) {
                var e = d.pattern || h(d);
                !c && (c = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((c = String(d.label && !RegExp(e, "i").test(d.label) ? d.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
                    " " + c[1]), d = d.label || d, c = b(c[0].replace(RegExp(e, "i"), d).replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ").replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }

        function p(b) {
            return m(b, function(b, c) {
                return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var k = q,
            l = a && "object" == typeof a && "String" != e(a);
        l && (k = a, a = null);
        var y = k.navigator || {},
            r = y.userAgent || "";
        a || (a = r);
        var x = l ? !!y.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(w.toString()),
            E = l ? "Object" : "ScriptBridgingProxyObject",
            z = l ? "Object" : "Environment",
            K = l && k.java ? "JavaPackage" : e(k.java),
            L = l ? "Object" : "RuntimeObject";
        z = (K = /\bJava/.test(K) && k.java) && e(k.environment) == z;
        var t = K ? "a" : "\u03b1",
            S = K ? "b" : "\u03b2",
            I = k.document || {},
            Q = k.operamini || k.opera,
            T = B.test(T = l && Q ? Q["[[Class]]"] : e(Q)) ? T : Q = null,
            g, U = a;
        l = [];
        var V = null,
            R = a == r;
        r = R && Q && "function" == typeof Q.version && Q.version();
        var C = function(b) {
                return m(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(a) && (c.label ||
                        c)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            u = function(b) {
                return m(b, function(b, c) {
                    return b || RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(a) && (c.label || c)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                },
                {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"
            ]),
            D = d([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"
            ]),
            N = function(b) {
                return m(b, function(b, c, d) {
                    return b || (c[D] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(D)] || RegExp("\\b" + h(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) && d
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            v = function(c) {
                return m(c, function(c, d) {
                    var e = d.pattern || h(d);
                    if (!c && (c = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var f = c,
                            g = d.label || d,
                            k = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        e && g && /^Win/i.test(f) && !/^Windows Phone /i.test(f) && (k = k[/[\d.]+$/.exec(f)]) && (f = "Windows " + k);
                        f = String(f);
                        e && g && (f = f.replace(RegExp(e, "i"), g));
                        c = f = b(f.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return c
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        C && (C = [C]);
        N && !D && (D = d([N]));
        if (g = /\bGoogle TV\b/.exec(D)) D = g[0];
        /\bSimulator\b/i.test(a) && (D = (D ? D + " " : "") + "Simulator");
        "Opera Mini" == u && /\bOPiOS\b/.test(a) && l.push("running in Turbo/Uncompressed mode");
        "IE" == u && /\blike iPhone OS\b/.test(a) ? (g = n(a.replace(/like iPhone OS/, "")), N = g.manufacturer, D = g.product) : /^iP/.test(D) ? (u || (u = "Safari"), v = "iOS" + ((g = / OS ([\d_]+)/i.exec(a)) ? " " + g[1].replace(/_/g, ".") : "")) : "Konqueror" != u || /buntu/i.test(v) ? N && "Google" != N && (/Chrome/.test(u) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(D)) || /\bAndroid\b/.test(v) && /^Chrome/.test(u) && /\bVersion\//i.test(a) ? (u = "Android Browser", v = /\bAndroid\b/.test(v) ? v : "Android") : "Silk" == u ? (/\bMobi/i.test(a) || (v = "Android", l.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && l.unshift("accelerated")) : "PaleMoon" == u && (g = /\bFirefox\/([\d.]+)\b/.exec(a)) ? l.push("identifying as Firefox " + g[1]) : "Firefox" == u && (g = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (v || (v = "Firefox OS"), D || (D = g[1])) : !u || (g = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(u)) ? (u && !D && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(g + "/") + 8)) && (u = null), (g = D || N || v) && (D || N || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(v)) && (u = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(v) ? v : g) + " Browser")) : "Electron" == u && (g = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && l.push("Chromium " + g) : v = "Kubuntu";
        r || (r = p(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", h(u), "(?:Firefox|Minefield|NetFront)"]));
        if (g = "iCab" == C && 3 < parseFloat(r) && "WebKit" || /\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(C) && "WebKit" || !C && /\bMSIE\b/i.test(a) && ("Mac OS" == v ? "Tasman" : "Trident") || "WebKit" == C && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront") C = [g];
        "IE" == u && (g = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (u += " Mobile", v = "Windows Phone " + (/\+$/.test(g) ? g : g + ".x"), l.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (u = "IE Mobile", v = "Windows Phone 8.x",
            l.unshift("desktop mode"), r || (r = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != u && "Trident" == C && (g = /\brv:([\d.]+)/.exec(a)) && (u && l.push("identifying as " + u + (r ? " " + r : "")), u = "IE", r = g[1]);
        if (R) {
            if (f(k, "global"))
                if (K && (g = K.lang.System, U = g.getProperty("os.arch"), v = v || g.getProperty("os.name") + " " + g.getProperty("os.version")), z) {
                    try {
                        r = k.require("ringo/engine").version.join("."), u = "RingoJS"
                    } catch (X) {
                        (g = k.system) && g.global.system == k.system && (u = "Narwhal", v || (v = g[0].os || null))
                    }
                    u || (u = "Rhino")
                } else "object" == typeof k.process &&
                    !k.process.browser && (g = k.process) && ("object" == typeof g.versions && ("string" == typeof g.versions.electron ? (l.push("Node " + g.versions.node), u = "Electron", r = g.versions.electron) : "string" == typeof g.versions.nw && (l.push("Chromium " + r, "Node " + g.versions.node), u = "NW.js", r = g.versions.nw)), u || (u = "Node.js", U = g.arch, v = g.platform, r = (r = /[\d.]+/.exec(g.version)) ? r[0] : null));
            else e(g = k.runtime) == E ? (u = "Adobe AIR", v = g.flash.system.Capabilities.os) : e(g = k.phantom) == L ? (u = "PhantomJS", r = (g = g.version || null) && g.major + "." + g.minor +
                "." + g.patch) : "number" == typeof I.documentMode && (g = /\bTrident\/(\d+)/i.exec(a)) ? (r = [r, I.documentMode], (g = +g[1] + 4) != r[1] && (l.push("IE " + r[1] + " mode"), C && (C[1] = ""), r[1] = g), r = "IE" == u ? String(r[1].toFixed(1)) : r[0]) : "number" == typeof I.documentMode && /^(?:Chrome|Firefox)\b/.test(u) && (l.push("masking as " + u + " " + r), u = "IE", r = "11.0", C = ["Trident"], v = "Windows");
            v = v && b(v)
        }
        r && (g = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(r) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (R && y.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (V = /b/i.test(g) ? "beta" : "alpha", r = r.replace(RegExp(g + "\\+?$"), "") + ("beta" == V ? S : t) + (/\d+\+?/.exec(g) || ""));
        if ("Fennec" == u || "Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(v)) u = "Firefox Mobile";
        else if ("Maxthon" == u && r) r = r.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(D)) "Xbox 360" == D && (v = null), "Xbox 360" == D && /\bIEMobile\b/.test(a) && l.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(u) && (!u || D || /Browser|Mobi/.test(u)) || "Windows CE" != v && !/Mobi/i.test(a))
            if ("IE" == u && R) try {
                null === k.external &&
                    l.unshift("platform preview")
            } catch (X) {
                l.unshift("embedded")
            } else(/\bBlackBerry\b/.test(D) || /\bBB10\b/.test(a)) && (g = (RegExp(D.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || r) ? (g = [g, /BB10/.test(a)], v = (g[1] ? (D = null, N = "BlackBerry") : "Device Software") + " " + g[0], r = null) : this != c && "Wii" != D && (R && Q || /Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(v) || "IE" == u && (v && !/^Win/.test(v) && 5.5 < r || /\bWindows XP\b/.test(v) && 8 < r || 8 == r && !/\bTrident\b/.test(a))) && !B.test(g =
                n.call(c, a.replace(B, "") + ";")) && g.name && (g = "ing as " + g.name + ((g = g.version) ? " " + g : ""), B.test(u) ? (/\bIE\b/.test(g) && "Mac OS" == v && (v = null), g = "identify" + g) : (g = "mask" + g, u = T ? b(T.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(g) && (v = null), R || (r = null)), C = ["Presto"], l.push(g));
            else u += " Mobile";
        if (g = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            g = [parseFloat(g.replace(/\.(\d)$/, ".0$1")), g];
            if ("Safari" == u && "+" == g[1].slice(-1)) u = "WebKit Nightly", V = "alpha", r = g[1].slice(0, -1);
            else if (r == g[1] || r == (g[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) r = null;
            g[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == g[0] && 537.36 == g[2] && 28 <= parseFloat(g[1]) && "WebKit" == C && (C = ["Blink"]);
            R && (x || g[1]) ? (C && (C[1] = "like Chrome"), g = g[1] || (g = g[0], 530 > g ? 1 : 532 > g ? 2 : 532.05 > g ? 3 : 533 > g ? 4 : 534.03 > g ? 5 : 534.07 > g ? 6 : 534.1 > g ? 7 : 534.13 > g ? 8 : 534.16 > g ? 9 : 534.24 > g ? 10 : 534.3 > g ? 11 : 535.01 > g ? 12 : 535.02 > g ? "13+" : 535.07 > g ? 15 : 535.11 > g ? 16 : 535.19 > g ? 17 : 536.05 > g ? 18 : 536.1 > g ? 19 : 537.01 > g ? 20 : 537.11 > g ? "21+" : 537.13 > g ? 23 : 537.18 > g ? 24 : 537.24 > g ? 25 : 537.36 > g ? 26 : "Blink" !=
                C ? "27" : "28")) : (C && (C[1] = "like Safari"), g = (g = g[0], 400 > g ? 1 : 500 > g ? 2 : 526 > g ? 3 : 533 > g ? 4 : 534 > g ? "4+" : 535 > g ? 5 : 537 > g ? 6 : 538 > g ? 7 : 601 > g ? 8 : "8"));
            C && (C[1] += " " + (g += "number" == typeof g ? ".x" : /[.+]/.test(g) ? "" : "+"));
            "Safari" == u && (!r || 45 < parseInt(r)) && (r = g)
        }
        "Opera" == u && (g = /\bzbov|zvav$/.exec(v)) ? (u += " ", l.unshift("desktop mode"), "zvav" == g ? (u += "Mini", r = null) : u += "Mobile", v = v.replace(RegExp(" *" + g + "$"), "")) : "Safari" == u && /\bChrome\b/.exec(C && C[1]) && (l.unshift("desktop mode"), u = "Chrome Mobile", r = null, /\bOS X\b/.test(v) ? (N =
            "Apple", v = "iOS 4.3+") : v = null);
        r && 0 == r.indexOf(g = /[\d.]+$/.exec(v)) && -1 < a.indexOf("/" + g + "-") && (v = String(v.replace(g, "")).replace(/^ +| +$/g, ""));
        C && !/\b(?:Avant|Nook)\b/.test(u) && (/Browser|Lunascape|Maxthon/.test(u) || "Safari" != u && /^iOS/.test(v) && /\bSafari\b/.test(C[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(u) && C[1]) && (g = C[C.length - 1]) && l.push(g);
        l.length && (l = ["(" + l.join("; ") + ")"]);
        N && D && 0 > D.indexOf(N) && l.push("on " + N);
        D && l.push((/^on /.test(l[l.length -
            1]) ? "" : "on ") + D);
        if (v) {
            var W = (g = / ([\d.+]+)$/.exec(v)) && "/" == v.charAt(v.length - g[0].length - 1);
            v = {
                architecture: 32,
                family: g && !W ? v.replace(g[0], "") : v,
                version: g ? g[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !W ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(g = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U)) && !/\bi686\b/i.test(U) ? (v && (v.architecture = 64, v.family = v.family.replace(RegExp(" *" + g), "")), u && (/\bWOW64\b/i.test(a) || R && /\w(?:86|32)$/.test(y.cpuClass || y.platform) && !/\bWin64; x64\b/i.test(a)) &&
            l.unshift("32-bit")) : v && /^OS X/.test(v.family) && "Chrome" == u && 39 <= parseFloat(r) && (v.architecture = 64);
        a || (a = null);
        k = {};
        k.description = a;
        k.layout = C && C[0];
        k.manufacturer = N;
        k.name = u;
        k.prerelease = V;
        k.product = D;
        k.ua = a;
        k.version = u && r;
        k.os = v || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        k.parse = n;
        k.toString = function() {
            return this.description || ""
        };
        k.version && l.unshift(r);
        k.name && l.unshift(u);
        v && u && (v != String(v).split(" ")[0] || v != u.split(" ")[0] && !D) && l.push(D ? "(" + v + ")" : "on " +
            v);
        l.length && (k.description = l.join(" "));
        return k
    }
    var k = {
            "function": !0,
            object: !0
        },
        q = k[typeof window] && window || this,
        y = k[typeof exports] && exports;
    k = k[typeof module] && module && !module.nodeType && module;
    var x = y && k && "object" == typeof global && global;
    !x || x.global !== x && x.window !== x && x.self !== x || (q = x);
    var p = Math.pow(2, 53) - 1,
        B = /\bOpera/;
    x = Object.prototype;
    var l = x.hasOwnProperty,
        w = x.toString,
        z = n();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (q.platform = z, define(function() {
            return z
        })) : y &&
        k ? c(z, function(a, b) {
            y[b] = a
        }) : q.platform = z
}).call(this);

function buildIOSMeta() {
    for (var a = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], d = 0; d < a.length; d++) {
        var b = document.createElement("meta");
        b.name = a[d].name;
        b.content = a[d].content;
        var c = window.document.head.querySelector('meta[name="' + b.name + '"]');
        c && c.parentNode.removeChild(c);
        window.document.head.appendChild(b)
    }
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    window.scrollTo(0, 0);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}

function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && iosResize()
});
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        d = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        c = function() {
            for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], d = 0, e = c.length, f = {}; d < e; d++)
                if ((b = c[d]) && b[1] in a) {
                    for (d = 0; d < b.length; d++) f[c[0][d]] = b[d];
                    return f
                } return !1
        }(),
        e = {
            change: c.fullscreenchange,
            error: c.fullscreenerror
        },
        f = {
            request: function(d) {
                var e = c.requestFullscreen;
                d = d || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) d[e]();
                else d[e](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[c.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(b, c) {
                var d = e[b];
                d && a.addEventListener(d, c, !1)
            },
            off: function(b, c) {
                var d = e[b];
                d && a.removeEventListener(d, c, !1)
            },
            raw: c
        };
    c ? (Object.defineProperties(f, {
        isFullscreen: {
            get: function() {
                return !!a[c.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[c.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[c.fullscreenEnabled]
            }
        }
    }), d ? module.exports = f : window.screenfull = f) : d ? module.exports = !1 : window.screenfull = !1
})();
var s_fInverseScaling = 0,
    s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);

function trace(a) {
    console.log(a)
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}
$(window).resize(function() {
    sizeHandler()
});

function getSize(a) {
    var d = a.toLowerCase(),
        b = window.document,
        c = b.documentElement;
    if (void 0 === window["inner" + a]) a = c["client" + a];
    else if (window["inner" + a] != c["client" + a]) {
        var e = b.createElement("body");
        e.id = "vpw-test-b";
        e.style.cssText = "overflow:scroll";
        var f = b.createElement("div");
        f.id = "vpw-test-d";
        f.style.cssText = "position:absolute;top:-1000px";
        f.innerHTML = "<style>@media(" + d + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
        e.appendChild(f);
        c.insertBefore(e, b.head);
        a = 7 == f["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(e)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var d = getSize("Width");
        _checkOrientation(d, a);
        var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
            c = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var e = a - b;
            b += e;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * e
        } else c < d && (e = d - c, c += e, b += CANVAS_HEIGHT / CANVAS_WIDTH * e);
        e = a / 2 - b / 2;
        var f = d / 2 - c / 2,
            h = CANVAS_WIDTH / c;
        if (f * h < -EDGEBOARD_X || e * h < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, e = (a - b) / 2, f = (d - c) / 2, h = CANVAS_WIDTH / c;
        s_fInverseScaling = h;
        s_iOffsetX = -1 * f * h;
        s_iOffsetY = -1 * e * h;
        0 <= e && (s_iOffsetY = 0);
        0 <= f && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oTeamChoose && s_oTeamChoose.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width =
            2 * c, s_oStage.canvas.height = 2 * b, canvas.style.width = c + "px", canvas.style.height = b + "px", s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > e ? ($("#canvas").css("top", e + "px"), s_iCanvasOffsetHeight = e) : ($("#canvas").css("top", "0px"), s_iCanvasOffsetHeight =
            0);
        $("#canvas").css("left", f + "px");
        resizeCanvas3D();
        s_iCanvasResizeWidth = c;
        s_iCanvasResizeHeight = b;
        s_iCanvasOffsetWidth = f;
        fullscreenHandler()
    }
}

function _checkOrientation(a, d) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, d, b) {
    var c = new createjs.Bitmap(a),
        e = new createjs.Shape;
    d && b ? e.graphics.beginFill("#fff").drawRect(0, 0, d, b) : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = e;
    return c
}

function createSprite(a, d, b, c, e, f) {
    a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
    d = new createjs.Shape;
    d.graphics.beginFill("#000000").drawRect(-b, -c, e, f);
    a.hitArea = d;
    return a
}

function randomFloatBetween(a, d, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
}

function rotateVector2D(a, d) {
    var b = d.getX() * Math.cos(a) + d.getY() * Math.sin(a),
        c = d.getX() * -Math.sin(a) + d.getY() * Math.cos(a);
    d.set(b, c)
}

function tweenVectorsOnX(a, d, b) {
    return a + b * (d - a)
}

function shuffle(a) {
    for (var d = a.length, b, c; 0 !== d;) c = Math.floor(Math.random() * d), --d, b = a[d], a[d] = a[c], a[c] = b;
    return a
}

function bubbleSort(a) {
    do {
        var d = !1;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (d = a[b], a[b] = a[b + 1], a[b + 1] = d, d = !0)
    } while (d)
}

function compare(a, d) {
    return a.index > d.index ? -1 : a.index < d.index ? 1 : 0
}

function easeLinear(a, d, b, c) {
    return b * a / c + d
}

function easeInQuad(a, d, b, c) {
    return b * (a /= c) * a + d
}

function easeInSine(a, d, b, c) {
    return -b * Math.cos(a / c * (Math.PI / 2)) + b + d
}

function easeInCubic(a, d, b, c) {
    return b * (a /= c) * a * a + d
}

function easeOutCubic(a, d, b, c) {
    return b * ((a = a / c - 1) * a * a + 1) + d
}

function getTrajectoryPoint(a, d) {
    var b = new createjs.Point,
        c = (1 - a) * (1 - a),
        e = a * a;
    b.x = c * d.start.x + 2 * (1 - a) * a * d.traj.x + e * d.end.x;
    b.y = c * d.start.y + 2 * (1 - a) * a * d.traj.y + e * d.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = Math.floor(a - 60 * d);
    var b = "";
    b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, d) {
    var b = getBounds(a, .9);
    var c = getBounds(d, .98);
    return calculateIntersection(b, c)
}

function calculateIntersection(a, d) {
    var b, c, e, f;
    var h = a.x + (b = a.width / 2);
    var m = a.y + (c = a.height / 2);
    var n = d.x + (e = d.width / 2);
    var k = d.y + (f = d.height / 2);
    h = Math.abs(h - n) - (b + e);
    m = Math.abs(m - k) - (c + f);
    return 0 > h && 0 > m ? (h = Math.min(Math.min(a.width, d.width), -h), m = Math.min(Math.min(a.height, d.height), -m), {
        x: Math.max(a.x, d.x),
        y: Math.max(a.y, d.y),
        width: h,
        height: m,
        rect1: a,
        rect2: d
    }) : null
}

function getBounds(a, d) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var c = a.children,
            e = c.length,
            f;
        for (f = 0; f < e; f++) {
            var h = getBounds(c[f], 1);
            h.x < b.x && (b.x = h.x);
            h.y < b.y && (b.y = h.y);
            h.x + h.width > b.x2 && (b.x2 = h.x + h.width);
            h.y + h.height > b.y2 && (b.y2 = h.y + h.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            e =
                a.sourceRect || a.image;
            f = e.width * d;
            var m = e.height * d
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                e = a.spriteSheet.getFrame(a.currentFrame);
                f = e.rect.width;
                m = e.rect.height;
                c = e.regX;
                var n = e.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        c = c || 0;
        f = f || 0;
        n = n || 0;
        m = m || 0;
        b.regX = c;
        b.regY = n;
        e = a.localToGlobal(0 - c, 0 - n);
        h = a.localToGlobal(f - c, m - n);
        f = a.localToGlobal(f - c, 0 - n);
        c = a.localToGlobal(0 - c, m - n);
        b.x =
            Math.min(Math.min(Math.min(e.x, h.x), f.x), c.x);
        b.y = Math.min(Math.min(Math.min(e.y, h.y), f.y), c.y);
        b.width = Math.max(Math.max(Math.max(e.x, h.x), f.x), c.x) - b.x;
        b.height = Math.max(Math.max(Math.max(e.y, h.y), f.y), c.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var d = a.length, b, c; 0 < d;) c = Math.floor(Math.random() * d), d--, b = a[d], a[d] = a[c], a[c] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", !0, !0);
            a.dispatchEvent(d)
        }
    }
};
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[d] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var d = "hidden";
    d in document ? document.addEventListener("visibilitychange", a) : (d = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (d = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (d = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var d = window.location.search.substring(1).split("&"), b = 0; b < d.length; b++) {
        var c = d[b].split("=");
        if (c[0] == a) return c[1]
    }
}

function playSound(a, d, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(d), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(d)
}

function setMute(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(d)
}

function destroySound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.destroy()
}

function resizeCanvas3D() {
    $("canvas").each(function() {
        "#canvas" != $(this).attr("id") && ($(this).css("width", $("#canvas").css("width")), $(this).css("height", $("#canvas").css("height")), $(this).css("position", $("#canvas").css("position")), $(this).css("left", $("#canvas").css("left")), $(this).css("top", $("#canvas").css("top")))
    })
}

function createOrthoGraphicCamera() {
    var a = new THREE.PerspectiveCamera(FOV, CANVAS_WIDTH / CANVAS_HEIGHT, NEAR, FAR);
    a.rotation.x = Math.PI / 180 * 90;
    a.position.set(0, 0, 0);
    a.updateProjectionMatrix();
    a.updateMatrixWorld();
    return a
}
Math.radians = function(a) {
    return a * Math.PI / 180
};
Math.degrees = function(a) {
    return 180 * a / Math.PI
};

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oTeamChoose && s_oTeamChoose.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oTeamChoose && s_oTeamChoose.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a, d, b, c, e, f;
    this.init = function(h, m, n) {
        b = d = 0;
        c = h;
        e = m;
        f = n;
        a = {}
    };
    this.addSprite = function(b, c) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: c,
            oSprite: new Image
        }, d++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        e.call(f)
    };
    this._onSpriteLoaded = function() {
        c.call(f);
        ++b == d && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return d
    }
}
var CANVAS_WIDTH = 790,
    CANVAS_HEIGHT = 960,
    CANVAS_WIDTH_HALF = .5 * CANVAS_WIDTH,
    CANVAS_HEIGHT_HALF = .5 * CANVAS_HEIGHT,
    FONT = "arialbold",
    EDGEBOARD_X = 150,
    EDGEBOARD_Y = 0,
    FPS = 30,
    FPS_TIME = 1 / FPS,
    ROLL_BALL_RATE = 60 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    BATTER_MODE = 0,
    BOWLER_MODE = 1,
    TOT_TEAMS = 6,
    POINT_TEXT_EXCELLENT, POINT_TEXT_GREAT = 85,
    TEXT_EXCELLENT_COLOR = ["#fff", "#5d96fe"],
    PLAYER_SELECTION_FLAG_START_POS = {
        x: CANVAS_WIDTH_HALF - 180,
        y: CANVAS_HEIGHT_HALF -
            85
    },
    OPPONENT_SELECTION_FLAG_START_POS = {
        x: CANVAS_WIDTH_HALF + 72,
        y: CANVAS_HEIGHT_HALF - 85
    },
    MAX_COL_FLAG = 2,
    FLAG_OFFSET = {
        x: 110,
        y: 75
    },
    TRAJECTORY_Y_BALL_CAUGHT = -250,
    BATTER_X = CANVAS_WIDTH / 2 - 140,
    BATTER_Y = CANVAS_HEIGHT - 620,
    BOWLER_X = CANVAS_WIDTH / 2 - 50,
    BOWLER_Y = CANVAS_HEIGHT / 2 - 475,
    BALL_X = BOWLER_X + 86,
    BALL_Y = BOWLER_Y + 50,
    BALL_TO_THROW, STEP_SPEED_BALL, BEAT_FORCE = .5,
    STEP_SPEED_STADIUM, TARGET_PREV_LUM_OFFSET = {
        min: -12,
        max: -5
    },
    LAUNCH_DIR_OFFSET_RANGE = [{
        min: -90,
        max: -50
    }, {
        min: -5,
        max: 5
    }, {
        min: 50,
        max: 90
    }],
    POLE_POSITION = {
        x: CANVAS_WIDTH_HALF,
        y: CANVAS_HEIGHT - 200
    },
    OFFSET_FOR_HIT, OFFSET_FOR_PERFECT_HIT, PERFECT_HIT_X = BALL_X - 36,
    PERFECT_HIT_Y = CANVAS_HEIGHT - 410,
    ALMOST_MINUS, ALMOST_PLUS, END_POINT_X_THROWN = PERFECT_HIT_X,
    END_POINT_Y_THROWN = PERFECT_HIT_Y,
    END_POINT_X_MISSED_BALL = POLE_POSITION.x,
    END_POINT_Y_MISSED_BALL = POLE_POSITION.y,
    END_POINT_X_ALMOST_MINUS_LEFT = CANVAS_WIDTH / 2 - 200,
    END_POINT_X_ALMOST_MINUS_RIGHT = CANVAS_WIDTH / 2 + 200,
    END_POINT_Y_ALMOST_MINUS = 50,
    END_POINT_X_ALMOST_PLUS_LEFT = CANVAS_WIDTH / 2 - 300,
    END_POINT_X_ALMOST_PLUS_RIGHT = CANVAS_WIDTH /
    2 + 300,
    END_POINT_Y_ALMOST_PLUS = 50,
    END_POINT_X_PERFECT_LEFT = CANVAS_WIDTH / 2 - 100,
    END_POINT_X_PERFECT_RIGHT = CANVAS_WIDTH / 2 + 100,
    END_POINT_Y_PERFECT = 0,
    MAX_FRAMES_THROWN = 40,
    START_POINT_STADIUM_X = CANVAS_WIDTH / 2,
    START_POINT_STADIUM_Y = CANVAS_HEIGHT / 2 + 250,
    NUM_SPRITE_PLAYERS = 40,
    NUM_SPRITE_BATTING = 36,
    NUM_SPRITE_BOWLER = 56,
    NUM_SPRITE_BATTER_BOWLER_MODE = 81,
    STEP_RATE = 1.5,
    PHYSICS_ACCURACY = 3,
    MOBILE_OFFSET_GLOVES_X = -45,
    MOBILE_OFFSET_GLOVES_Y = -38,
    BALL_VELOCITY_MULTIPLIER = 1,
    PHYSICS_STEP = 1 / FPS,
    BALL_MASS = .16,
    BALL_RADIUS =
    .6,
    BALL_LINEAR_DAMPING = .2,
    OFFSET_BALL_POS_X = 10,
    OBJECT, TEXT_SIZE = [50, 65, 80],
    TIME_TRY_TO_SHOT_BALL_OPPONENT = .7,
    MIN_BALL_VEL_ROTATION = .1,
    TIME_RESET_AFTER_GOAL = 1,
    TIME_RESET_AFTER_KEEPER_SAVED = 2,
    TIME_RESET_AFTER_PERFECT_KEEPER_SAVED = 3,
    TIME_BALL_IN_HAND = 1E3,
    FOV = 35,
    INTERVAL_SHOOT = 1,
    HAND_KEEPER_ANGLE_RATE = .15,
    LIMIT_HAND_RANGE_POS = {
        x: 8.8,
        zMax: 5.1,
        zMin: -8.5
    },
    POSITION_BALL = {
        x: 60,
        y: 220,
        z: 0
    },
    LINE_GOAL_SIZE = {
        width: 17.5,
        depth: 1,
        height: 15.5
    },
    GOAL_LINE_POS = {
        x: 0,
        y: 10,
        z: -2.7
    },
    GLOVE_SIZE = {
        width: 1.4,
        depth: 1,
        height: 1.7
    },
    LEFT_GLOVE_POSITION = {
        x: -1.5,
        y: 40,
        z: 0
    },
    RIGHT_GLOVE_POSITION = {
        x: 1.5,
        y: 40,
        z: 0
    },
    LAUNCH_BALL_IMPULSE = {
        x: -4.47,
        y: 0,
        z: 1
    },
    LEFT_GLOVE = 0,
    RIGHT_GLOVE = 1,
    GLOVE_REG = [{
        x: 3,
        y: -5
    }, {
        x: -3,
        y: -5
    }],
    SHOW_3D_RENDER = !1,
    CAMERA_TEST = !1,
    MOUSE_SENSIBILTY = .03,
    OFFSET_MOUSE_X = -75,
    SCORE_ERROR_MULTIPLIER = 20,
    INTENSITY_DISPLAY_SHOCK = [{
        x: 30,
        y: 20,
        time: 75
    }, {
        x: 50,
        y: 25,
        time: 75
    }, {
        x: 70,
        y: 30,
        time: 75
    }, {
        x: 90,
        y: 40,
        time: 75
    }],
    CAMERA_POSITION = {
        x: 0,
        y: 0,
        z: 100
    },
    NEAR = 10,
    FAR = 2E3,
    STATE_INIT = 0,
    STATE_PLAY = 1,
    STATE_FINISH = 2,
    STATE_PAUSE = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP =
    1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    HIT_LEFT = 0,
    HIT_CENTER = 1,
    HIT_RIGHT = 2,
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;
TEXT_TEAM = "India;England;Australia;Bangladesh;South Africa;Sri Lanka".split(";");
TEXT_GAMEOVER = "GAME OVER";
TEXT_SCORE = "FINAL SCORE\n";
TEXT_PAUSE = "PAUSE";
TEXT_PANEL = "CONGRATULATIONS! YOU GOT";
TEXT_PANEL_POINT = " POINTS";
TEXT_BOWLED = "BOWLED!";
SCORE_TEXT = "PTS: ";
TEXT_START = "START";
TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
TEXT_SELECT_YOUR_TEAM = "SELECT YOUR TEAM";
TEXT_SELECT_OPPONENT_TEAM = "SELECT OPPONENT TEAM";
TEXT_LINK = "";
TEXT_HIT = "HIT";
TEXT_ARE_SURE = "ARE YOU SURE?";
TEXT_CONGRATULATION = ["GOOD!", "GREAT!", "EXCELLENT!!!"];
TEXT_LOADING = "LOADING";
TEXT_SELECT_MODE = "SELECT MODE";
TEXT_BATTER = "BATTER";
TEXT_BOWLER = "BOWLER";
TEXT_HOW_TO_PLAY = "HOW TO PLAY";
TEXT_HELP1_PC_BATTER = "PRESS THE KEY WHEN THE BALL TARGET BECOMES BLUE";
TEXT_HELP1_MOBILE_BATTER = "TOUCH THE ARROW WHEN THE BALL TARGET BECOMES BLUE";
var TEXT_PRELOADER_CONTINUE = "AGREE & ENTER";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better?";


    
    function CPreloader() {
    var a, d, b, c, e, f, h, m, n, k;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        k = new createjs.Container;
        s_oStage.addChild(k)
    };
    this.unload = function() {
        k.removeAllChildren();
        n.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(q);
        q = s_oSpriteLibrary.getSprite("200x200");
        h = createBitmap(q);
        h.regX = .5 * q.width;
        h.regY = .5 * q.height;
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT / 2 - 180;
        k.addChild(h);
        m = new createjs.Shape;
        m.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(h.x - 200, h.y - 200, 400, 400, 10);
        k.addChild(m);
        h.mask = m;
        q = s_oSpriteLibrary.getSprite("progress_bar");
        c = createBitmap(q);
        c.x = CANVAS_WIDTH / 2 - q.width / 2;
        c.y = CANVAS_HEIGHT / 2 + 50;
        k.addChild(c);
        a = q.width;
        d = q.height;
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, d);
        k.addChild(e);
        c.mask = e;
        b = new createjs.Text("", "30px " + FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 200;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        k.addChild(b);
        q = s_oSpriteLibrary.getSprite("but_start");
        n = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 200, q, TEXT_PRELOADER_CONTINUE,
            "Arial", "#000", "bold 20", k);
        n.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        n.setVisible(!1);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(f);
            k.removeChild(f)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(f) {
        b.text = f + "%";
        100 === f && (n.setVisible(!0), b.visible = !1, c.visible = !1);
        e.graphics.clear();
        f = Math.floor(f * a / 100);
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, f, d)
    };
    this._init()
}

function CMain(a) {
    var d, b = 0,
        c = 0,
        e = STATE_LOADING,
        f, h, m;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage);
        s_oStage.preventSelection = !1;
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = 30;
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        this.setLoadedArray();
        seekAndDestroy() ? f = new CPreloader : window.location.href = "http://theatterolabs.github.io/ftt4"
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        d = !0
    };
    this.soundLoaded = function(a) {
        b++;
        f.refreshLoader(Math.floor(b / c * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "buzzer",
            loop: !1,
            volume: 1,
            ingamename: "buzzer"
        });
        a.push({
            path: "./sounds/",
            filename: "countdown1",
            loop: !1,
            volume: 1,
            ingamename: "countdown1"
        });
        a.push({
            path: "./sounds/",
            filename: "countdown2",
            loop: !1,
            volume: 1,
            ingamename: "countdown2"
        });
        a.push({
            path: "./sounds/",
            filename: "drop_bounce_grass",
            loop: !1,
            volume: 1,
            ingamename: "drop_bounce_grass"
        });
        a.push({
            path: "./sounds/",
            filename: "hit_ball",
            loop: !1,
            volume: 1,
            ingamename: "hit_ball"
        });
        a.push({
            path: "./sounds/",
            filename: "crowd_cheering",
            loop: !0,
            volume: 1,
            ingamename: "crowd_cheering"
        });
        a.push({
            path: "./sounds/",
            filename: "applauses",
            loop: !1,
            volume: 1,
            ingamename: "applauses"
        });
        a.push({
            path: "./sounds/",
            filename: "crowd_ohhh",
            loop: !1,
            volume: 1,
            ingamename: "crowd_ohhh"
        });
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        c += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("preloader_anim", "./sprites/preloader_anim.png");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("score_panel", "./sprites/score_panel.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
        s_oSpriteLibrary.addSprite("1", "./sprites/1.png");
        s_oSpriteLibrary.addSprite("2", "./sprites/2.png");
        s_oSpriteLibrary.addSprite("3", "./sprites/3.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("logo_credits",
            "./sprites/logo_credits.png");
        s_oSpriteLibrary.addSprite("ball_target", "./sprites/ball_target.png");
        s_oSpriteLibrary.addSprite("bg_select_team", "./sprites/bg_select_team.jpg");
        s_oSpriteLibrary.addSprite("bg_select_mode", "./sprites/bg_select_mode.jpg");
        s_oSpriteLibrary.addSprite("flag_selection", "./sprites/flag_selection.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("pole_0", "./sprites/pole_0.png");
        s_oSpriteLibrary.addSprite("pole_1", "./sprites/pole_1.png");
        s_oSpriteLibrary.addSprite("pole_2", "./sprites/pole_2.png");
        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("bg_text", "./sprites/bg_text.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("key_up", "./sprites/key_up.png");
        s_oSpriteLibrary.addSprite("key_left", "./sprites/key_left.png");
        s_oSpriteLibrary.addSprite("key_right", "./sprites/key_right.png");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        for (var a = 0; a < TOT_TEAMS; a++) s_oSpriteLibrary.addSprite("flag_" + a, "./sprites/flag_" + a + ".png");
        for (var b = 0; b < TOT_TEAMS; b++) {
            for (a = 0; 2 > a; a++) s_oSpriteLibrary.addSprite("batter_hit_" + b + "-" + a, "./sprites/batter_hit/batter_hit_" + b + "-" + a + ".png");
            for (a = 0; 2 > a; a++) s_oSpriteLibrary.addSprite("batter_idle_" + b + "-" + a, "./sprites/batter_idle/batter_idle_" + b + "-" + a + ".png");
            s_oSpriteLibrary.addSprite("bowler_" + b, "./sprites/bowler/bowler_" + b + ".png")
        }
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / c * 100))
    };
    this._onTeamsLoaded = function() {
        b++;
        b === c && this.gotoGame(s_iPlayerTeam, s_iOpponentTeam)
    };
    this._onAllImagesLoaded = function() {};
    this.setLoadedArray = function() {
        for (var a =
                0; a < TOT_TEAMS; a++);
    };
    this._onRemovePreloader = function() {
        f.unload();
        playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        e = STATE_MENU
    };
    this.gotoGame = function(a, b) {
        m.unload();
        h = new CGame(n, a, b);
        e = STATE_GAME
    };
    this.gotoTeamChoose = function() {
        m = new CTeamChoose;
        e = STATE_MENU
    };
    this.stopUpdate = function() {
        d = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        d = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== d) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            e === STATE_GAME && h.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var n = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_iPlayerTeam, s_iOpponentTeam, s_iMode, s_iAdsLevel = 1,
    s_bBounce = !0,
    s_oDrawLayer, s_oStage, s_oMain, s_oStadium, s_oBall, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oBgSound, s_oCanvas, s_iCanvasResizeHeight, s_iCanvasResizeWidth, s_iCanvasOffsetHeight, s_iCanvasOffsetWidth, s_aSounds;

function CTextButton(a, d, b, c, e, f, h, m) {
    var n, k, q, y, x, p, B, l, w, z, E, A;
    this._init = function(a, b, c, d, e, f, m, h) {
        n = !1;
        y = [];
        x = [];
        A = createBitmap(c);
        k = c.width;
        q = c.height;
        var l = Math.ceil(m / 20);
        z = new createjs.Text(d, m + "px " + e, "#000000");
        var p = z.getBounds();
        z.textAlign = "center";
        z.lineWidth = .9 * k;
        z.textBaseline = "alphabetic";
        z.x = c.width / 2 + l;
        z.y = Math.floor(c.height / 2) + p.height / 3 + l;
        E = new createjs.Text(d, m + "px " + e, f);
        E.textAlign = "center";
        E.textBaseline = "alphabetic";
        E.lineWidth = .9 * k;
        E.x = c.width / 2;
        E.y = Math.floor(c.height /
            2) + p.height / 3;
        w = new createjs.Container;
        w.x = a;
        w.y = b;
        w.regX = c.width / 2;
        w.regY = c.height / 2;
        s_bMobile || (w.cursor = "pointer");
        w.addChild(A, z, E);
        !1 !== h && s_oStage.addChild(w);
        this._initListener()
    };
    this.unload = function() {
        w.off("mousedown", p);
        w.off("pressup", B);
        s_oStage.removeChild(w)
    };
    this.setVisible = function(a) {
        w.visible = a
    };
    this.setAlign = function(a) {
        E.textAlign = a;
        z.textAlign = a
    };
    this.enable = function() {
        n = !1;
        A.filters = [];
        A.cache(0, 0, k, q)
    };
    this.disable = function() {
        n = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        A.filters = [new createjs.ColorMatrixFilter(a)];
        A.cache(0, 0, k, q)
    };
    this._initListener = function() {
        p = w.on("mousedown", this.buttonDown);
        B = w.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        y[a] = b;
        x[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        y[a] = b;
        x[a] = c;
        l = d
    };
    this.buttonRelease = function() {
        n || (playSound("click", 1, !1), w.scaleX = 1, w.scaleY = 1, y[ON_MOUSE_UP] && y[ON_MOUSE_UP].call(x[ON_MOUSE_UP], l))
    };
    this.buttonDown = function() {
        n || (w.scaleX = .9, w.scaleY = .9, y[ON_MOUSE_DOWN] && y[ON_MOUSE_DOWN].call(x[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        w.x = a;
        w.y = b
    };
    this.changeText = function(a) {
        E.text = a;
        z.text = a
    };
    this.setX = function(a) {
        w.x = a
    };
    this.setY = function(a) {
        w.y = a
    };
    this.getButtonImage = function() {
        return w
    };
    this.getX = function() {
        return w.x
    };
    this.getY = function() {
        return w.y
    };
    this.getSprite = function() {
        return w
    };
    this._init(a, d, b, c, e, f, h, m);
    return this
}

function CToggle(a, d, b, c) {
    var e, f, h, m = [],
        n, k, q;
    this._init = function(a, b, c, d) {
        f = [];
        h = [];
        var m = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        e = d;
        q = createSprite(m, "state_" + e, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        q.x = a;
        q.y = b;
        q.cursor = "pointer";
        q.stop();
        s_oStage.addChild(q);
        this._initListener()
    };
    this.unload = function() {
        q.off("mousedown", n);
        q.off("pressup", k);
        s_oStage.removeChild(q)
    };
    this._initListener =
        function() {
            n = q.on("mousedown", this.buttonDown);
            k = q.on("pressup", this.buttonRelease)
        };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        h[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        f[a] = b;
        h[a] = c;
        m = d
    };
    this.setActive = function(a) {
        e = a;
        q.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function() {
        q.scaleX = 1;
        q.scaleY = 1;
        playSound("click", 1, !1);
        e = !e;
        q.gotoAndStop("state_" + e);
        playSound("click", 1, !1);
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(h[ON_MOUSE_UP], m)
    };
    this.buttonDown = function() {
        q.scaleX = .9;
        q.scaleY = .9;
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], m)
    };
    this.setPosition = function(a, b) {
        q.x = a;
        q.y = b
    };
    this.setVisible = function(a) {
        q.visible = a
    };
    this._init(a, d, b, c)
}

function CGfxButton(a, d, b, c) {
    var e, f, h, m, n, k, q, y, x = !1;
    this._init = function(a, b, c) {
        e = [];
        f = [];
        n = createBitmap(c);
        n.x = a;
        n.y = b;
        y = q = 1;
        n.regX = c.width / 2;
        n.regY = c.height / 2;
        s_bMobile || (n.cursor = "pointer");
        p.addChild(n);
        this._initListener()
    };
    this.unload = function() {
        n.off("mousedown", h);
        n.off("pressup", m);
        p.removeChild(n)
    };
    this.setVisible = function(a) {
        n.visible = a
    };
    this.setCursorType = function(a) {
        n.cursor = a
    };
    this._initListener = function() {
        h = n.on("mousedown", this.buttonDown);
        m = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener =
        function(a, b, c) {
            e[a] = b;
            f[a] = c
        };
    this.addEventListenerWithParams = function(a, b, c, d) {
        e[a] = b;
        f[a] = c;
        k = d
    };
    this.buttonRelease = function() {
        x || (n.scaleX = 0 < q ? 1 : -1, n.scaleY = 1, playSound("click", 1, !1), e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(f[ON_MOUSE_UP], k))
    };
    this.buttonDown = function() {
        x || (n.scaleX = 0 < q ? .9 : -.9, n.scaleY = .9, e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN], k))
    };
    this.rotation = function(a) {
        n.rotation = a
    };
    this.getButton = function() {
        return n
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    this.setX = function(a) {
        n.x =
            a
    };
    this.setY = function(a) {
        n.y = a
    };
    this.getButtonImage = function() {
        return n
    };
    this.block = function(a) {
        x = a;
        n.scaleX = q;
        n.scaleY = y
    };
    this.setScaleX = function(a) {
        q = n.scaleX = a
    };
    this.getX = function() {
        return n.x
    };
    this.getY = function() {
        return n.y
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(n).to({
            scaleX: .9 * q,
            scaleY: .9 * y
        }, 850, createjs.Ease.quadOut).to({
            scaleX: q,
            scaleY: y
        }, 650, createjs.Ease.quadIn).call(function() {
            B.pulseAnimation()
        })
    };
    this.trebleAnimation = function() {
        createjs.Tween.get(n).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
                rotation: -5
            },
            140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            B.trebleAnimation()
        })
    };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(n)
    };
    var p = void 0 === c ? s_oStage : c;
    this._init(a, d, b);
    var B = this;
    return this
}

function CMenu() {
    var a, d, b, c, e, f, h, m, n, k, q, y, x, p = null,
        B = null;
    this._init = function() {
        h = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(h);
        m = createBitmap(s_oSpriteLibrary.getSprite("logo_menu"));
        m.x = 200;
        m.y = 90;
        s_oStage.addChild(m);
        var l = s_oSpriteLibrary.getSprite("but_play");
        n = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 225, l);
        n.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l = s_oSpriteLibrary.getSprite("audio_icon"), e = CANVAS_WIDTH -
            l.height / 2 - 10, f = l.height / 2 + 10, q = new CToggle(e, f, l, s_bAudioActive), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        l = s_oSpriteLibrary.getSprite("but_credits");
        b = l.height / 2 + 10;
        c = l.height / 2 + 10;
        y = new CGfxButton(b, c, l, s_oStage);
        y.addEventListener(ON_MOUSE_UP, this._onCredits, this);
        l = window.document;
        var w = l.documentElement;
        p = w.requestFullscreen || w.mozRequestFullScreen || w.webkitRequestFullScreen || w.msRequestFullscreen;
        B = l.exitFullscreen || l.mozCancelFullScreen || l.webkitExitFullscreen || l.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (p = !1);
        p && screenfull.enabled && (l = s_oSpriteLibrary.getSprite("but_fullscreen"), a = b + l.width / 2 + 10, d = c, x = new CToggle(a, d, l, s_bFullscreen, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(k);
        createjs.Tween.get(k).to({
            alpha: 0
        }, 1E3).call(function() {
            k.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        n.unload();
        n = null;
        k.visible = !1;
        y.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q.unload(), q = null;
        p && screenfull.enabled && x.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this.refreshButtonPos = function(m, h) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(e - m, h + f);
        p && screenfull.enabled && x.setPosition(a + m, d + h);
        y.setPosition(b + m, h + c)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCredits = function() {
        new CCreditsPanel
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoTeamChoose()
    };
    this.resetFullscreenBut = function() {
        p && screenfull.enabled && x.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? B.call(window.document) : p.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;
   

function CGame(a, d, b) {
    function c(a) {
        !0 === w && (z || (37 === a.keyCode ? s_oGame.hitLeft() : 38 === a.keyCode ? s_oGame.hitCenter() : 39 === a.keyCode && s_oGame.hitRight()));
        a.preventDefault();
        return !1
    }
    var e = 0,
        f = 0,
        h = 0,
        m = 0,
        n = 0,
        k = 0,
        q = -1,
        y, x, p = !1,
        B = !1,
        l = !1,
        w = !0,
        z = !1,
        E, A, M = null,
        F, G, H, r;
    this._init = function(a, b) {
        $(s_oMain).trigger("start_session");
        setVolume("soundtrack", .35);
        playSound("crowd_cheering", 1, !0);
        var d = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(d);
        F = new createjs.Container;
        s_oStage.addChild(F);
        A = new CInterface;
        H = new CBowler(F, b);
        d = s_oSpriteLibrary.getSprite("pole_1");
        new CPole(CANVAS_WIDTH_HALF - 8, CANVAS_HEIGHT - 812, d, F);
        d = s_oSpriteLibrary.getSprite("ball_target");
        r = new CBallTarget(-100, -100, d, F);
        r.setVisible(!1);
        s_oBall = new CBall(F);
        this.ballResetPos();
        y = LIVES;
        G = new CBatter(F, a);
        d = s_oSpriteLibrary.getSprite("pole_0");
        pole0 = game.make.sprite(CANVAS_WIDTH_HALF, CANVAS_HEIGHT - 193, d, F);
        
        d = s_oSpriteLibrary.getSprite("pole_2");
        
       pole2 = game.make.sprite(CANVAS_WIDTH_HALF, CANVAS_HEIGHT - 193, d, F);
        
        pole2.visible = false;
        pole2.alpha = 0;
        

       
        !1 === s_bMobile ? document.onkeydown = c : (A.createController(), A.refreshButtonPos(s_iOffsetX, s_iOffsetY), A.createHitArea());
        E = !0;
        A.createHelpPanel()
    };
    this.launchCountdown = function() {
        
        var a = createBitmap(s_oSpriteLibrary.getSprite("3"));
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        a.regX = 40;
        a.regY = 84;
        F.addChild(a);
        playSound("countdown1", 1, !1);
        createjs.Tween.get(a).to({
            scaleX: 1.3,
            scaleY: 1.3
        }, 500, createjs.Ease.cubicOut).wait(500).call(function() {
            this.visible = !1;
            var a = createBitmap(s_oSpriteLibrary.getSprite("2"));
            a.x = CANVAS_WIDTH / 2;
            a.y = CANVAS_HEIGHT / 2;
            a.regX = 40;
            a.regY = 84;
            a.scaleX = .7;
            a.scaleY = .7;
            F.addChild(a);
            playSound("countdown1",
                1, !1);
            createjs.Tween.get(a).to({
                scaleX: 1.3,
                scaleY: 1.3
            }, 500, createjs.Ease.cubicOut).wait(500).call(function() {
                F.removeChild(this);
                var a = createBitmap(s_oSpriteLibrary.getSprite("1"));
                a.x = CANVAS_WIDTH / 2;
                a.y = CANVAS_HEIGHT / 2;
                a.regX = 40;
                a.regY = 84;
                a.scaleX = .7;
                a.scaleY = .7;
                F.addChild(a);
                playSound("countdown1", 1, 0);
                createjs.Tween.get(a).to({
                    scaleX: 1.3,
                    scaleY: 1.3
                }, 500, createjs.Ease.cubicOut).wait(500).call(function() {
                    F.removeChild(this);
                    A.createAnimText(TEXT_START, 48, !1, null, 300, function() {
                        F.removeChild(this);
                        x = !0;
                        A.setHitAreaVisible(!1)
                    });
                    playSound("countdown2", 1, !1)
                })
            })
        })
    };
    this._onExitHelpPanel = function() {
        A.onExitFromHelp();
        this.launchCountdown();
        $(s_oMain).trigger("start_level", 1)
    };
    this.hitLeft = function() {
        q = HIT_LEFT;
        s_oGame._strike();
        s_oGame.beatDirection()
    };
    this.hitCenter = function() {
        q = HIT_CENTER;
        s_oGame._strike();
        s_oGame.beatDirection()
    };
    this.hitRight = function() {
        q = HIT_RIGHT;
        s_oGame._strike();
        s_oGame.beatDirection()
    };
    this._strike = function() {
        p ? f = 0 : e = 0;
        p = !p;
        z = !0;
        A.setHitAreaVisible(!0)
    };
    this._ballMissed =
        function() {
            x = !1;
            l = !0;
            playSound("crowd_ohhh", 1, !1);
            A.createAnimText(TEXT_BOWLED, 48, !1, null, 300, this.afterBallMissed);
        pole0.visible = false;
        pole0.alpha = 0;
        pole2.visible = true;
        pole2.alpha = 1;
            r.setVisible(!1);
            y--;
            A.refreshLivesText(y)
        };
    this.afterBallMissed = function() {
        e = 0;
        p && s_oGame._strike();
        s_oGame.changeStateTarget(!1);
        x = !0;
        z = !1;
        A.setHitAreaVisible(!1)
    };
    this.getMissed = function() {
        return l
    };
    this.setScore = function(a) {
        m += Math.floor(a);
        A.viewScore(m)
    };
    this.unload = function() {
        !1 === s_bMobile && (document.onkeydown = null);
        A.unload();
        null !== M && M.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        setVolume("soundtrack", 1);
        stopSound("crowd_cheering");
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session")
    };
    this.gameOver = function() {
        w = x = !1;
        M = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        M.show(m)
    };
    this._ballHitted = function(a) {
        x = !1;
        s_oBall.hideBall();
        var b = !1;
        playSound("applauses", 1, !1);
        a = SCORE_HIT - a;
        var c = TEXT_CONGRATULATION[0];
        a >= POINT_TEXT_EXCELLENT ?
            (c = TEXT_CONGRATULATION[2], b = !0) : a > POINT_TEXT_GREAT && (c = TEXT_CONGRATULATION[1]);
        A.createAnimText(c, 48, b, TEXT_EXCELLENT_COLOR, 300, this.afterBallHit)
    };
    this.afterBallHit = function() {
        s_oGame._restart();
        s_oBall.addVelocity();
        x = !0
    };
    this.changeStateTarget = function(a) {
        r.changeState(a)
    };
    this.randomDir = function() {
        k = Math.floor(Math.random() * LAUNCH_DIR_OFFSET_RANGE.length)
    };
    this.ballResetPos = function() {
        this.randomDir();
        var a = {
            x: END_POINT_X_THROWN + (Math.random() * (LAUNCH_DIR_OFFSET_RANGE[k].max - LAUNCH_DIR_OFFSET_RANGE[k].min) +
                LAUNCH_DIR_OFFSET_RANGE[k].min),
            y: END_POINT_Y_THROWN
        };
        PERFECT_HIT_X = a.x;
        r.setPosition(a.x, a.y);
        s_oBall.reset(a)
    };
    this.pause = function(a) {
        E = !a;
        createjs.Ticker.paused = a
    };
    this._restart = function() {
        0 >= y ? this.gameOver() : (this.ballResetPos(), r.setVisible(!1), s_oGame.changeStateTarget(!1), s_bBounce = !0, l = B = !1, this._strike(), z = !1, A.setHitAreaVisible(!1))
    };
    this.resetGame = function() {
        y = LIVES;
        A.refreshLivesText(y);
        m = 0;
        A.viewScore(m);
        w = p = x = !0;
        z = !1;
        this._restart();
        $(s_oMain).trigger("restart_level", 1)
    };
    this.ballMissedRestart =
        function() {
            0 >= y ? this.gameOver() : (this.ballResetPos(), B = !1, 0 < f && this._strike(), z = l = !1, A.setHitAreaVisible(!1))
        };
    this.beatDirection = function() {
        q === k && s_oBall.hitControl()
    };
    this.update = function() {
        if (x && E) {
            p ? (f + 1 < NUM_SPRITE_BATTING ? (G.viewBatter(f + 1, p), f++) : G.viewBatter(f, p), 8 === f && s_oBall.hitBall()) : e + 1 < NUM_SPRITE_BATTING ? (G.viewBatter(e + 1, p), e++) : (e = 0, G.viewBatter(e, p));
            !0 === l && this.ballMissedRestart();
            if (!B || h + 1 < NUM_SPRITE_BOWLER) H.hideBowler(h), h + 1 < NUM_SPRITE_BOWLER ? (H.viewBowler(h + 1), h++) : h = 0, 28 ===
                h && (n++, s_oBall.viewBall(), r.setVisible(!0), B = !0);
            B && s_oBall.update()
        }
    };
    s_oGame = this;
    LIVES = a.lives;
    OFFSET_FOR_HIT = a.offset_hit;
    OFFSET_FOR_PERFECT_HIT = a.offset_perfect_hit;
    STEP_SPEED_BALL = a.start_speed_ball;
    BALL_VELOCITY_ADDED = a.ball_velocity_added;
    MAX_BALL_VELOCITY = a.max_ball_velocity;
    SCORE_HIT = a.score_ball_hit;
    NUM_LEVEL_FOR_ADS = a.num_levels_for_ads;
    ALMOST_MINUS = PERFECT_HIT_Y - OFFSET_FOR_HIT;
    ALMOST_PLUS = PERFECT_HIT_Y + OFFSET_FOR_HIT;
    POINT_TEXT_EXCELLENT = SCORE_HIT - OFFSET_FOR_PERFECT_HIT;
    this._init(d,
        b)
}
var s_oGame;

function CInterface() {
    var a, d, b, c, e, f, h, m, n, k, q, y, x, p, B, l, w, z, E, A = null,
        M = null,
        F, G, H, r, P, J = null,
        O, K = null,
        L = null,
        t;
    this._init = function() {
        var t = s_oSpriteLibrary.getSprite("but_exit");
        h = CANVAS_WIDTH - t.height / 2 - 10;
        m = t.height / 2 + 10;
        w = new CGfxButton(h, m, t);
        w.addEventListener(ON_MOUSE_UP, this._onExit, this);
        t = s_oSpriteLibrary.getSprite("but_pause");
        a = h - t.height - 10;
        d = m;
        z = new CGfxButton(a, d, t);
        z.addEventListener(ON_MOUSE_UP, this.onButPauseRelease, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (t = s_oSpriteLibrary.getSprite("audio_icon"),
            e = a - t.height - 10, f = m, l = new CToggle(e, f, t, s_bAudioActive), l.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), b = e - t.width / 2 - 10, c = f) : (b = a - t.height - 10, c = m);
        t = window.document;
        var I = t.documentElement;
        A = I.requestFullscreen || I.mozRequestFullScreen || I.webkitRequestFullScreen || I.msRequestFullscreen;
        M = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (A = !1);
        A && screenfull.enabled && (t = s_oSpriteLibrary.getSprite("but_fullscreen"), E = new CToggle(b, c,
            t, s_bFullscreen, s_oStage), E.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        t = s_oSpriteLibrary.getSprite("score_panel");
        p = CANVAS_WIDTH / 2 - 260;
        B = 35;
        P = createBitmap(t);
        P.x = p;
        P.y = B;
        P.regX = .5 * t.width;
        P.regY = .5 * t.height;
        s_oStage.addChild(P);
        q = CANVAS_WIDTH / 2 - 315;
        G = new createjs.Text(SCORE_TEXT, "30px " + FONT, "#ffffff");
        G.x = q;
        G.y = 47;
        G.textAlign = "center";
        G.textBaseline = "alphabetic";
        s_oStage.addChild(G);
        k = CANVAS_WIDTH / 2 - 150;
        H = new createjs.Text("0", "30px " + FONT, "#ffffff");
        H.x = k;
        H.y = 47;
        H.textAlign =
            "right";
        H.textBaseline = "alphabetic";
        s_oStage.addChild(H);
        F = new CBall(s_oStage);
        y = CANVAS_WIDTH / 2 - 370;
        x = 80;
        F.setPosition(y, x);
        F.changeState(15);
        n = CANVAS_WIDTH / 2 - 350;
        r = new createjs.Text("x " + LIVES, "30px " + FONT, "#fff");
        r.x = n;
        r.y = 88;
        r.textAlign = "left";
        r.textBaseline = "alphabetic";
        s_oStage.addChild(r);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l.unload(), l = null;
        A && screenfull.enabled && E.unload();
        w.unload();
        s_bMobile && (L.removeAllEventListeners(),
            J.unload());
        s_oInterface = null
    };
    this.refreshButtonPos = function(t, I) {
        w.setPosition(h - t, I + m);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || l.setPosition(e - t, I + f);
        A && screenfull.enabled && E.setPosition(b - t, c + I);
        P.x = p + t;
        P.y = B + I;
        F.setPosition(y + t, I + x);
        z.setPosition(a - t, I + d);
        G.x = q + t;
        H.x = k + t;
        r.x = n + t;
        if (null !== J) {
            var S = J.getStartPositionControlLeft();
            J.setPositionControlLeft(S.x + t, S.y - I);
            S = J.getStartPositionControlRight();
            J.setPositionControlRight(S.x - t, S.y - I)
        }
    };
    this.createController = function() {
        J = new CController
    };
    this.createHitArea = function() {
        L = new createjs.Shape;
        L.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        L.alpha = .01;
        L.on("click", function() {});
        s_oStage.addChild(L)
    };
    this.setHitAreaVisible = function(a) {
        null !== L && (L.visible = a)
    };
    this.createAnimText = function(a, b, c, d, e, f) {
        var g = new createjs.Container;
        g.scaleX = 0;
        g.scaleY = 0;
        var m = new createjs.Text(a, b + "px " + FONT, "#000");
        m.x = 0;
        m.y = 0;
        m.textAlign = "center";
        m.textBaseline = "middle";
        m.outline = 4;
        g.addChild(m);
        var h = new createjs.Text(a, b + "px " +
            FONT, "#ffffff");
        h.x = 0;
        h.y = 0;
        h.textAlign = "center";
        h.textBaseline = "middle";
        g.addChild(h);
        g.x = CANVAS_WIDTH_HALF;
        g.y = CANVAS_HEIGHT_HALF;
        c && (t = 0, s_oInterface.strobeText(h, d));
        s_oStage.addChild(g);
        createjs.Tween.get(g).to({
            scaleX: 1,
            scaleY: 1
        }, e, createjs.Ease.cubicOut).call(function() {
            createjs.Tween.get(g).wait(300).to({
                scaleX: 0,
                scaleY: 0
            }, e, createjs.Ease.cubicOut).call(function() {
                c && createjs.Tween.removeTweens(h);
                f();
                s_oStage.removeChild(g)
            })
        })
    };
    this.strobeText = function(a, b) {
        createjs.Tween.get(a).wait(30).call(function() {
            t <
                b.length - 1 ? t++ : t = 0;
            a.color = b[t];
            s_oInterface.strobeText(a, b)
        })
    };
    this.animBallHit = function() {
        var a = s_oSpriteLibrary.getSprite("hit_msg"),
            b = createBitmap(a);
        b.x = CANVAS_WIDTH_HALF;
        b.y = CANVAS_HEIGHT_HALF;
        b.regX = .5 * a.width;
        b.regY = .5 * a.height;
        b.scaleX = 0;
        b.scaleY = 0;
        s_oStage.addChild(b);
        createjs.Tween.get(b).to({
            scaleX: 1,
            scaleY: 1
        }, 500, createjs.Ease.cubicOut).wait(800).call(function() {
            s_oGame.afterBallHit();
            s_oStage.removeChild(b)
        })
    };
    this.viewScore = function(a) {
        H.text = a
    };
    this.refreshLivesText = function(a) {
        r.text =
            "x " + a
    };
    this.createHelpPanel = function() {
        K = new CHelpPanel(0, 0, s_oSpriteLibrary.getSprite("bg_help"))
    };
    this._onButRestartRelease = function() {
        s_oGame.restartGame()
    };
    this.onExitFromHelp = function() {
        null !== K && K.unload()
    };
    this.unloadPause = function() {
        O.unload();
        O = null
    };
    this.onButPauseRelease = function() {
        O = new CPause
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        (new CAreYouSurePanel(s_oStage)).show()
    };
    this.resetFullscreenBut = function() {
        A &&
            screenfull.enabled && E.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? M.call(window.document) : A.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CEndPanel(a) {
    var d, b, c, e, f, h;
    this._init = function(a) {
        d = createBitmap(a);
        d.on("click", function() {});
        c = new createjs.Text("", " 44px " + FONT, "#fff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 - 150;
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.lineHeight = 60;
        c.lineWidth = 450;
        e = new createjs.Text("", " 40px " + FONT, "#fff");
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.lineHeight = 60;
        e.lineWidth = 470;
        b = new createjs.Container;
        b.alpha = 0;
        b.visible = !1;
        b.addChild(d,
            e, c);
        a = s_oSpriteLibrary.getSprite("but_restart");
        f = new CGfxButton(CANVAS_WIDTH / 2 + 170, CANVAS_HEIGHT_HALF + 160, a, b);
        a = s_oSpriteLibrary.getSprite("but_home");
        h = new CGfxButton(CANVAS_WIDTH / 2 - 170, CANVAS_HEIGHT_HALF + 160, a, b);
        s_oStage.addChild(b)
    };
    this.unload = function() {
        d.off("click", function() {});
        createjs.Tween.get(b).to({
            alpha: 0
        }, 500).call(function() {
            h.unload();
            f.unload();
            s_oStage.removeChild(b)
        })
    };
    this._initListener = function() {
        h.addEventListener(ON_MOUSE_UP, this._onExit, this);
        f.addEventListener(ON_MOUSE_UP,
            this._onRestart, this)
    };
    this.show = function(a) {
        playSound("buzzer", 1, !1);
        c.text = TEXT_GAMEOVER;
        e.text = TEXT_SCORE + a;
        b.visible = !0;
        var d = this;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500).call(function() {
            d._initListener();
            //s_iAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_iAdsLevel = 1) : s_iAdsLevel++
        });
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("share_event", a);
        $(s_oMain).trigger("save_score", a)
    };
    this._onRestart = function() {
        this.unload();
        s_oGame.resetGame()
    };
    this._onExit = function() {
        this.unload();
        s_oGame.onExit()
    };
    this._init(a);
    return this
}

function CBatter(a, d) {
    var b, c;
    this._init = function(a, d) {
        var e = [],
            f = [];
        switch (d) {
            case 2:
                e = [
                    [1, 1, 307, 381, 0, -66, -123],
                    [310, 1, 308, 381, 0, -66, -123],
                    [620, 1, 308, 382, 0, -66, -122],
                    [930, 1, 307, 382, 0, -66, -122],
                    [1239, 1, 306, 382, 0, -67, -122],
                    [1547, 1, 307, 382, 0, -66, -122],
                    [1, 385, 308, 382, 0, -66, -122],
                    [311, 385, 307, 382, 0, -67, -122],
                    [620, 385, 307, 383, 0, -66, -121],
                    [929, 385, 307, 383, 0, -67, -121],
                    [1238, 385, 306, 383, 0, -67, -121],
                    [1546, 385, 306, 383, 0, -67, -121],
                    [1, 770, 306, 383, 0, -67, -121],
                    [309, 770, 306, 384, 0, -67, -120],
                    [617, 770, 307, 384, 0, -67,
                        -120
                    ],
                    [926, 770, 307, 384, 0, -67, -120],
                    [1235, 770, 305, 384, 0, -68, -120],
                    [1542, 770, 307, 384, 0, -67, -120],
                    [1, 1156, 305, 385, 0, -68, -119],
                    [308, 1156, 307, 385, 0, -67, -119],
                    [617, 1156, 307, 385, 0, -67, -119],
                    [926, 1156, 305, 385, 0, -68, -119],
                    [1233, 1156, 305, 385, 0, -68, -119],
                    [1540, 1156, 307, 384, 0, -67, -120],
                    [1, 1543, 305, 384, 0, -68, -120],
                    [308, 1543, 306, 384, 0, -67, -120],
                    [616, 1543, 306, 384, 0, -67, -120],
                    [924, 1543, 307, 384, 0, -67, -120],
                    [1233, 1543, 307, 384, 0, -67, -120],
                    [1542, 1543, 307, 384, 0, -67, -120],
                    [1, 1, 307, 383, 1, -67, -121],
                    [310, 1, 307, 383, 1, -67,
                        -121
                    ],
                    [619, 1, 307, 383, 1, -67, -121],
                    [928, 1, 306, 383, 1, -67, -121],
                    [1236, 1, 306, 382, 1, -67, -122],
                    [1, 386, 306, 382, 1, -67, -122],
                    [309, 386, 307, 382, 1, -67, -122],
                    [618, 386, 306, 382, 1, -67, -122],
                    [926, 386, 306, 382, 1, -67, -122],
                    [1234, 386, 307, 381, 1, -66, -123]
                ];
                f = [
                    [1, 1, 234, 422, 0, -119, -80],
                    [237, 1, 357, 382, 0, 0, -121],
                    [596, 1, 279, 413, 0, -72, -89],
                    [877, 1, 220, 442, 0, -127, -60],
                    [1099, 1, 226, 420, 0, -122, -82],
                    [1327, 1, 243, 429, 0, -115, -73],
                    [1572, 1, 251, 408, 0, -113, -95],
                    [1, 445, 256, 380, 0, -114, -125],
                    [259, 445, 246, 372, 0, -129, -131],
                    [507, 445, 321, 368, 0, -57,
                        -130
                    ],
                    [830, 445, 263, 370, 0, -122, -125],
                    [1095, 445, 228, 490, 0, -172, -5],
                    [1325, 445, 252, 381, 0, -179, -113],
                    [1579, 445, 265, 382, 0, -124, -112],
                    [1, 937, 372, 383, 0, -19, -111],
                    [375, 937, 391, 384, 0, 0, -110],
                    [768, 937, 387, 383, 0, -10, -110],
                    [1157, 937, 365, 383, 0, -58, -110],
                    [1524, 937, 307, 384, 0, -128, -109],
                    [1, 1323, 250, 384, 0, -185, -109],
                    [253, 1323, 235, 385, 0, -188, -108],
                    [490, 1323, 289, 385, 0, -190, -108],
                    [781, 1323, 367, 386, 0, -192, -107],
                    [1150, 1323, 404, 388, 0, -181, -105],
                    [1556, 1323, 413, 389, 0, -172, -104],
                    [1, 1, 399, 389, 1, -149, -103],
                    [402, 1, 361, 405, 1, -129,
                        -87
                    ],
                    [1, 408, 306, 416, 1, -121, -74],
                    [309, 408, 283, 410, 1, -124, -78],
                    [594, 408, 270, 390, 1, -135, -94],
                    [1, 826, 262, 389, 1, -143, -94],
                    [265, 826, 261, 387, 1, -147, -93],
                    [528, 826, 264, 385, 1, -148, -92],
                    [1, 1217, 267, 384, 1, -149, -91],
                    [270, 1217, 263, 384, 1, -156, -90],
                    [535, 1217, 256, 384, 1, -165, -90]
                ];
                break;
            case 1:
                e = [
                    [1, 1, 307, 381, 0, -66, -123],
                    [310, 1, 306, 381, 0, -67, -123],
                    [618, 1, 306, 382, 0, -67, -122],
                    [926, 1, 307, 382, 0, -66, -122],
                    [1235, 1, 307, 382, 0, -66, -122],
                    [1544, 1, 307, 382, 0, -66, -122],
                    [1, 385, 308, 382, 0, -66, -122],
                    [311, 385, 308, 382, 0, -66, -122],
                    [621,
                        385, 306, 383, 0, -67, -121
                    ],
                    [929, 385, 307, 383, 0, -67, -121],
                    [1238, 385, 306, 383, 0, -67, -121],
                    [1546, 385, 306, 383, 0, -67, -121],
                    [1, 770, 307, 383, 0, -67, -121],
                    [310, 770, 306, 384, 0, -67, -120],
                    [618, 770, 306, 384, 0, -67, -120],
                    [926, 770, 307, 384, 0, -67, -120],
                    [1235, 770, 307, 384, 0, -67, -120],
                    [1544, 770, 307, 384, 0, -67, -120],
                    [1, 1156, 305, 385, 0, -68, -119],
                    [308, 1156, 306, 385, 0, -68, -119],
                    [616, 1156, 305, 385, 0, -68, -119],
                    [923, 1156, 305, 385, 0, -68, -119],
                    [1230, 1156, 307, 385, 0, -67, -119],
                    [1539, 1156, 305, 384, 0, -68, -120],
                    [1, 1543, 307, 384, 0, -67, -120],
                    [310, 1543,
                        305, 384, 0, -68, -120
                    ],
                    [617, 1543, 306, 384, 0, -67, -120],
                    [925, 1543, 307, 384, 0, -67, -120],
                    [1234, 1543, 307, 384, 0, -67, -120],
                    [1543, 1543, 305, 384, 0, -68, -120],
                    [1, 1, 307, 383, 1, -67, -121],
                    [310, 1, 306, 383, 1, -67, -121],
                    [618, 1, 307, 383, 1, -67, -121],
                    [927, 1, 306, 383, 1, -67, -121],
                    [1235, 1, 306, 382, 1, -67, -122],
                    [1, 386, 306, 382, 1, -67, -122],
                    [309, 386, 307, 382, 1, -67, -122],
                    [618, 386, 308, 382, 1, -66, -122],
                    [928, 386, 308, 382, 1, -66, -122],
                    [1238, 386, 307, 381, 1, -66, -123]
                ];
                f = [
                    [1, 1, 357, 382, 0, 0, -121],
                    [360, 1, 279, 413, 0, -72, -89],
                    [641, 1, 220, 442, 0, -127, -60],
                    [863,
                        1, 226, 420, 0, -122, -82
                    ],
                    [1091, 1, 235, 422, 0, -118, -80],
                    [1328, 1, 243, 429, 0, -115, -73],
                    [1573, 1, 251, 408, 0, -113, -95],
                    [1, 445, 256, 380, 0, -114, -125],
                    [259, 445, 246, 372, 0, -129, -131],
                    [507, 445, 321, 368, 0, -57, -130],
                    [830, 445, 263, 370, 0, -122, -125],
                    [1095, 445, 228, 490, 0, -172, -5],
                    [1325, 445, 252, 381, 0, -179, -113],
                    [1579, 445, 265, 382, 0, -124, -112],
                    [1, 937, 372, 383, 0, -19, -111],
                    [375, 937, 391, 384, 0, 0, -110],
                    [768, 937, 387, 383, 0, -10, -110],
                    [1157, 937, 365, 383, 0, -58, -110],
                    [1524, 937, 306, 384, 0, -129, -109],
                    [1, 1323, 250, 384, 0, -185, -109],
                    [253, 1323, 236,
                        385, 0, -187, -108
                    ],
                    [491, 1323, 289, 385, 0, -190, -108],
                    [782, 1323, 367, 386, 0, -192, -107],
                    [1151, 1323, 404, 388, 0, -181, -105],
                    [1557, 1323, 413, 389, 0, -172, -104],
                    [1, 1, 399, 389, 1, -149, -103],
                    [402, 1, 361, 404, 1, -129, -87],
                    [1, 407, 306, 416, 1, -121, -74],
                    [309, 407, 283, 410, 1, -124, -78],
                    [594, 407, 271, 391, 1, -134, -94],
                    [1, 825, 262, 389, 1, -143, -94],
                    [265, 825, 260, 387, 1, -148, -93],
                    [527, 825, 264, 385, 1, -148, -92],
                    [1, 1216, 267, 384, 1, -149, -91],
                    [270, 1216, 263, 384, 1, -156, -90],
                    [535, 1216, 256, 384, 1, -165, -90]
                ];
                break;
            case 0:
                e = [
                    [1, 1, 306, 381, 0, -67, -123],
                    [309,
                        1, 306, 381, 0, -67, -123
                    ],
                    [617, 1, 306, 382, 0, -67, -122],
                    [925, 1, 306, 381, 0, -67, -122],
                    [1233, 1, 306, 382, 0, -67, -122],
                    [1541, 1, 307, 382, 0, -66, -122],
                    [1, 385, 306, 382, 0, -67, -122],
                    [309, 385, 306, 382, 0, -67, -122],
                    [617, 385, 306, 383, 0, -67, -121],
                    [925, 385, 306, 383, 0, -67, -121],
                    [1233, 385, 306, 383, 0, -67, -121],
                    [1541, 385, 306, 383, 0, -67, -121],
                    [1, 770, 307, 383, 0, -67, -121],
                    [310, 770, 305, 384, 0, -68, -120],
                    [617, 770, 305, 384, 0, -68, -120],
                    [924, 770, 305, 384, 0, -68, -120],
                    [1231, 770, 305, 384, 0, -68, -120],
                    [1538, 770, 305, 384, 0, -68, -120],
                    [1, 1156, 305, 385, 0, -68,
                        -119
                    ],
                    [308, 1156, 307, 385, 0, -67, -119],
                    [617, 1156, 305, 385, 0, -68, -119],
                    [924, 1156, 305, 385, 0, -68, -119],
                    [1231, 1156, 305, 384, 0, -68, -119],
                    [1538, 1156, 305, 384, 0, -68, -120],
                    [1, 1543, 305, 383, 0, -68, -120],
                    [308, 1543, 305, 383, 0, -68, -120],
                    [615, 1543, 305, 384, 0, -68, -120],
                    [922, 1543, 305, 383, 0, -68, -120],
                    [1229, 1543, 307, 384, 0, -67, -120],
                    [1538, 1543, 305, 384, 0, -68, -120],
                    [1, 1, 307, 383, 1, -67, -121],
                    [310, 1, 306, 383, 1, -67, -121],
                    [618, 1, 306, 383, 1, -67, -121],
                    [1, 386, 306, 383, 1, -67, -121],
                    [309, 386, 306, 382, 1, -67, -122],
                    [617, 386, 306, 382, 1, -67, -122],
                    [1, 771, 306, 382, 1, -67, -122],
                    [309, 771, 307, 382, 1, -67, -122],
                    [618, 771, 306, 382, 1, -67, -122],
                    [1, 1155, 306, 381, 1, -67, -123]
                ];
                f = [
                    [1, 1, 357, 382, 0, 0, -121],
                    [360, 1, 279, 413, 0, -72, -89],
                    [641, 1, 220, 442, 0, -127, -60],
                    [863, 1, 226, 420, 0, -122, -82],
                    [1091, 1, 234, 422, 0, -119, -80],
                    [1327, 1, 243, 429, 0, -115, -73],
                    [1572, 1, 250, 408, 0, -114, -95],
                    [1, 445, 256, 380, 0, -114, -125],
                    [259, 445, 246, 372, 0, -129, -131],
                    [507, 445, 321, 368, 0, -57, -130],
                    [830, 445, 263, 370, 0, -122, -125],
                    [1095, 445, 228, 490, 0, -172, -5],
                    [1325, 445, 252, 381, 0, -179, -113],
                    [1579, 445, 265, 382, 0,
                        -124, -112
                    ],
                    [1, 937, 372, 383, 0, -19, -111],
                    [375, 937, 391, 384, 0, 0, -110],
                    [768, 937, 387, 383, 0, -10, -110],
                    [1157, 937, 365, 383, 0, -58, -110],
                    [1524, 937, 307, 384, 0, -128, -109],
                    [1, 1323, 250, 384, 0, -185, -109],
                    [253, 1323, 234, 385, 0, -188, -108],
                    [489, 1323, 289, 385, 0, -190, -108],
                    [780, 1323, 367, 386, 0, -192, -107],
                    [1149, 1323, 403, 388, 0, -182, -105],
                    [1554, 1323, 413, 388, 0, -172, -104],
                    [1, 1, 398, 389, 1, -150, -103],
                    [401, 1, 361, 404, 1, -129, -87],
                    [1, 407, 305, 416, 1, -122, -74],
                    [308, 407, 282, 409, 1, -125, -78],
                    [592, 407, 270, 390, 1, -135, -94],
                    [1, 825, 261, 388, 1, -144,
                        -94
                    ],
                    [264, 825, 261, 387, 1, -147, -93],
                    [527, 825, 264, 385, 1, -148, -92],
                    [1, 1215, 266, 383, 1, -150, -91],
                    [269, 1215, 263, 385, 1, -156, -90],
                    [534, 1215, 256, 384, 1, -165, -90]
                ];
                break;
            case 3:
                e = [
                    [1, 1, 306, 381, 0, -67, -123],
                    [309, 1, 306, 381, 0, -67, -123],
                    [617, 1, 306, 382, 0, -67, -122],
                    [925, 1, 306, 381, 0, -67, -122],
                    [1233, 1, 307, 382, 0, -66, -122],
                    [1542, 1, 306, 382, 0, -67, -122],
                    [1, 385, 306, 382, 0, -67, -122],
                    [309, 385, 306, 382, 0, -67, -122],
                    [617, 385, 306, 383, 0, -67, -121],
                    [925, 385, 307, 383, 0, -67, -121],
                    [1234, 385, 306, 383, 0, -67, -121],
                    [1542, 385, 306, 383, 0, -67, -121],
                    [1, 770, 306, 383, 0, -67, -121],
                    [309, 770, 306, 384, 0, -67, -120],
                    [617, 770, 305, 384, 0, -68, -120],
                    [924, 770, 307, 384, 0, -67, -120],
                    [1233, 770, 305, 383, 0, -68, -120],
                    [1540, 770, 307, 384, 0, -67, -120],
                    [1, 1156, 306, 385, 0, -68, -119],
                    [309, 1156, 305, 384, 0, -68, -119],
                    [616, 1156, 305, 385, 0, -68, -119],
                    [923, 1156, 305, 385, 0, -68, -119],
                    [1230, 1156, 305, 385, 0, -68, -119],
                    [1537, 1156, 306, 384, 0, -68, -120],
                    [1, 1543, 305, 384, 0, -68, -120],
                    [308, 1543, 305, 384, 0, -68, -120],
                    [615, 1543, 305, 384, 0, -68, -120],
                    [922, 1543, 305, 384, 0, -68, -120],
                    [1229, 1543, 305, 384, 0, -68, -120],
                    [1536, 1543, 305, 384, 0, -68, -120],
                    [1, 1, 306, 383, 1, -67, -121],
                    [309, 1, 306, 383, 1, -67, -121],
                    [617, 1, 306, 383, 1, -67, -121],
                    [1, 386, 306, 383, 1, -67, -121],
                    [309, 386, 306, 382, 1, -67, -122],
                    [617, 386, 306, 382, 1, -67, -122],
                    [1, 771, 306, 381, 1, -67, -122],
                    [309, 771, 306, 382, 1, -67, -122],
                    [617, 771, 306, 382, 1, -67, -122],
                    [1, 1155, 306, 381, 1, -67, -123]
                ];
                f = [
                    [1, 1, 357, 382, 0, 0, -121],
                    [360, 1, 279, 413, 0, -72, -89],
                    [641, 1, 220, 442, 0, -127, -60],
                    [863, 1, 226, 420, 0, -122, -82],
                    [1091, 1, 235, 422, 0, -118, -80],
                    [1328, 1, 243, 429, 0, -115, -73],
                    [1573, 1, 250, 408, 0, -114, -95],
                    [1,
                        445, 256, 380, 0, -114, -125
                    ],
                    [259, 445, 246, 372, 0, -129, -131],
                    [507, 445, 321, 368, 0, -57, -130],
                    [830, 445, 263, 370, 0, -122, -125],
                    [1095, 445, 228, 490, 0, -172, -5],
                    [1325, 445, 252, 381, 0, -179, -113],
                    [1579, 445, 265, 382, 0, -124, -112],
                    [1, 937, 372, 383, 0, -19, -111],
                    [375, 937, 391, 384, 0, 0, -110],
                    [768, 937, 387, 383, 0, -10, -110],
                    [1157, 937, 366, 383, 0, -57, -110],
                    [1525, 937, 307, 384, 0, -128, -109],
                    [1, 1323, 250, 384, 0, -185, -109],
                    [253, 1323, 236, 385, 0, -187, -108],
                    [491, 1323, 289, 385, 0, -190, -108],
                    [782, 1323, 367, 386, 0, -192, -107],
                    [1151, 1323, 403, 388, 0, -182, -105],
                    [1556, 1323, 413, 388, 0, -172, -104],
                    [1, 1, 399, 389, 1, -149, -103],
                    [402, 1, 361, 405, 1, -129, -87],
                    [1, 408, 306, 416, 1, -121, -74],
                    [309, 408, 282, 409, 1, -125, -78],
                    [593, 408, 271, 390, 1, -134, -94],
                    [1, 826, 262, 389, 1, -143, -94],
                    [265, 826, 260, 387, 1, -148, -93],
                    [527, 826, 264, 385, 1, -148, -92],
                    [1, 1217, 266, 383, 1, -150, -91],
                    [269, 1217, 263, 385, 1, -156, -90],
                    [534, 1217, 256, 384, 1, -165, -90]
                ];
                break;
            case 4:
                e = [
                    [1, 1, 306, 380, 0, -67, -123],
                    [309, 1, 306, 381, 0, -67, -123],
                    [617, 1, 306, 382, 0, -67, -122],
                    [925, 1, 306, 382, 0, -67, -122],
                    [1233, 1, 306, 382, 0, -67, -122],
                    [1541, 1,
                        306, 382, 0, -67, -122
                    ],
                    [1, 385, 307, 382, 0, -67, -122],
                    [310, 385, 306, 382, 0, -67, -122],
                    [618, 385, 306, 383, 0, -67, -121],
                    [926, 385, 306, 383, 0, -67, -121],
                    [1234, 385, 306, 383, 0, -67, -121],
                    [1542, 385, 306, 383, 0, -67, -121],
                    [1, 770, 306, 383, 0, -67, -121],
                    [309, 770, 306, 384, 0, -67, -120],
                    [617, 770, 305, 384, 0, -68, -120],
                    [924, 770, 305, 384, 0, -68, -120],
                    [1231, 770, 307, 384, 0, -67, -120],
                    [1540, 770, 307, 384, 0, -67, -120],
                    [1, 1156, 306, 385, 0, -68, -119],
                    [309, 1156, 307, 385, 0, -67, -119],
                    [618, 1156, 305, 385, 0, -68, -119],
                    [925, 1156, 305, 385, 0, -68, -119],
                    [1232, 1156, 305,
                        385, 0, -68, -119
                    ],
                    [1539, 1156, 305, 384, 0, -68, -120],
                    [1, 1543, 307, 384, 0, -67, -120],
                    [310, 1543, 305, 384, 0, -68, -120],
                    [617, 1543, 305, 384, 0, -68, -120],
                    [924, 1543, 305, 383, 0, -68, -120],
                    [1231, 1543, 307, 384, 0, -67, -120],
                    [1540, 1543, 305, 384, 0, -68, -120],
                    [1, 1, 306, 383, 1, -67, -121],
                    [309, 1, 306, 383, 1, -67, -121],
                    [617, 1, 307, 383, 1, -67, -121],
                    [1, 386, 306, 383, 1, -67, -121],
                    [309, 386, 306, 382, 1, -67, -122],
                    [617, 386, 306, 382, 1, -67, -122],
                    [1, 771, 306, 382, 1, -67, -122],
                    [309, 771, 306, 382, 1, -67, -122],
                    [617, 771, 306, 382, 1, -67, -122],
                    [1, 1155, 307, 381, 1, -66, -123]
                ];
                f = [
                    [1, 1, 357, 382, 0, 0, -121],
                    [360, 1, 279, 413, 0, -72, -89],
                    [641, 1, 220, 442, 0, -127, -60],
                    [863, 1, 226, 420, 0, -122, -82],
                    [1091, 1, 235, 422, 0, -118, -80],
                    [1328, 1, 243, 429, 0, -115, -73],
                    [1573, 1, 251, 408, 0, -113, -95],
                    [1, 445, 256, 380, 0, -114, -125],
                    [259, 445, 246, 372, 0, -129, -131],
                    [507, 445, 321, 368, 0, -57, -130],
                    [830, 445, 263, 370, 0, -122, -125],
                    [1095, 445, 227, 489, 0, -173, -5],
                    [1324, 445, 252, 381, 0, -179, -113],
                    [1578, 445, 265, 382, 0, -124, -112],
                    [1, 936, 372, 383, 0, -19, -111],
                    [375, 936, 390, 383, 0, -1, -110],
                    [767, 936, 387, 383, 0, -10, -110],
                    [1156, 936, 365, 383, 0,
                        -58, -110
                    ],
                    [1523, 936, 306, 384, 0, -129, -109],
                    [1, 1322, 250, 384, 0, -185, -109],
                    [253, 1322, 235, 385, 0, -188, -108],
                    [490, 1322, 289, 385, 0, -190, -108],
                    [781, 1322, 367, 386, 0, -192, -107],
                    [1150, 1322, 403, 388, 0, -182, -105],
                    [1555, 1322, 413, 389, 0, -172, -104],
                    [1, 1, 398, 389, 1, -150, -103],
                    [401, 1, 361, 405, 1, -129, -87],
                    [1, 408, 306, 416, 1, -121, -74],
                    [309, 408, 282, 409, 1, -125, -78],
                    [593, 408, 271, 390, 1, -134, -94],
                    [1, 826, 261, 388, 1, -144, -94],
                    [264, 826, 261, 387, 1, -147, -93],
                    [527, 826, 264, 385, 1, -148, -92],
                    [1, 1216, 266, 383, 1, -150, -91],
                    [269, 1216, 263, 385, 1, -156,
                        -90
                    ],
                    [534, 1216, 256, 384, 1, -165, -90]
                ];
                break;
            case 5:
                e = [
                    [1, 1, 306, 380, 0, -67, -123],
                    [309, 1, 306, 381, 0, -67, -123],
                    [617, 1, 306, 382, 0, -67, -122],
                    [925, 1, 306, 381, 0, -67, -122],
                    [1233, 1, 307, 382, 0, -66, -122],
                    [1542, 1, 306, 382, 0, -67, -122],
                    [1, 385, 306, 382, 0, -67, -122],
                    [309, 385, 306, 382, 0, -67, -122],
                    [617, 385, 306, 383, 0, -67, -121],
                    [925, 385, 306, 383, 0, -67, -121],
                    [1233, 385, 306, 383, 0, -67, -121],
                    [1541, 385, 306, 382, 0, -67, -121],
                    [1, 770, 306, 383, 0, -67, -121],
                    [309, 770, 306, 384, 0, -67, -120],
                    [617, 770, 305, 384, 0, -68, -120],
                    [924, 770, 305, 384, 0, -68, -120],
                    [1231, 770, 305, 384, 0, -68, -120],
                    [1538, 770, 305, 384, 0, -68, -120],
                    [1, 1156, 305, 385, 0, -68, -119],
                    [308, 1156, 306, 385, 0, -68, -119],
                    [616, 1156, 305, 385, 0, -68, -119],
                    [923, 1156, 305, 385, 0, -68, -119],
                    [1230, 1156, 305, 385, 0, -68, -119],
                    [1537, 1156, 305, 384, 0, -68, -120],
                    [1, 1543, 307, 384, 0, -67, -120],
                    [310, 1543, 305, 383, 0, -68, -120],
                    [617, 1543, 305, 384, 0, -68, -120],
                    [924, 1543, 305, 384, 0, -68, -120],
                    [1231, 1543, 305, 384, 0, -68, -120],
                    [1538, 1543, 305, 384, 0, -68, -120],
                    [1, 1, 306, 383, 1, -67, -121],
                    [309, 1, 306, 383, 1, -67, -121],
                    [617, 1, 306, 383, 1, -67, -121],
                    [1,
                        386, 306, 383, 1, -67, -121
                    ],
                    [309, 386, 306, 382, 1, -67, -122],
                    [617, 386, 306, 382, 1, -67, -122],
                    [1, 771, 306, 382, 1, -67, -122],
                    [309, 771, 306, 382, 1, -67, -122],
                    [617, 771, 306, 382, 1, -67, -122],
                    [1, 1155, 306, 381, 1, -67, -123]
                ], f = [
                    [1, 1, 357, 382, 0, 0, -121],
                    [360, 1, 279, 413, 0, -72, -89],
                    [641, 1, 220, 442, 0, -127, -60],
                    [863, 1, 226, 420, 0, -122, -82],
                    [1091, 1, 234, 422, 0, -119, -80],
                    [1327, 1, 243, 429, 0, -115, -73],
                    [1572, 1, 250, 408, 0, -114, -95],
                    [1, 445, 256, 380, 0, -114, -125],
                    [259, 445, 246, 372, 0, -129, -131],
                    [507, 445, 321, 368, 0, -57, -130],
                    [830, 445, 262, 370, 0, -123, -125],
                    [1094, 445, 227, 489, 0, -173, -5],
                    [1323, 445, 252, 381, 0, -179, -113],
                    [1577, 445, 265, 382, 0, -124, -112],
                    [1, 936, 371, 382, 0, -20, -111],
                    [374, 936, 390, 383, 0, -1, -110],
                    [766, 936, 387, 383, 0, -10, -110],
                    [1155, 936, 365, 383, 0, -58, -110],
                    [1522, 936, 306, 384, 0, -129, -109],
                    [1, 1322, 250, 384, 0, -185, -109],
                    [253, 1322, 235, 385, 0, -188, -108],
                    [490, 1322, 289, 385, 0, -190, -108],
                    [781, 1322, 367, 386, 0, -192, -107],
                    [1150, 1322, 403, 388, 0, -182, -105],
                    [1555, 1322, 413, 388, 0, -172, -104],
                    [1, 1, 399, 389, 1, -149, -103],
                    [402, 1, 361, 404, 1, -129, -87],
                    [1, 407, 306, 416, 1, -121, -74],
                    [309, 407, 282, 409, 1, -125, -78],
                    [593, 407, 271, 390, 1, -134, -94],
                    [1, 825, 261, 388, 1, -144, -94],
                    [264, 825, 260, 387, 1, -148, -93],
                    [526, 825, 264, 385, 1, -148, -92],
                    [1, 1215, 266, 383, 1, -150, -91],
                    [269, 1215, 263, 384, 1, -156, -90],
                    [534, 1215, 256, 384, 1, -165, -90]
                ]
        }
        f = {
            images: [s_oSpriteLibrary.getSprite("batter_hit_" + d + "-0"), s_oSpriteLibrary.getSprite("batter_hit_" + d + "-1")],
            frames: f,
            animations: {
                start: 0,
                anim: [0, 35, "hide"],
                hide: 36
            }
        };
        f = new createjs.SpriteSheet(f);
        b = new createjs.Sprite(f, "hide");
        b.x = BATTER_X;
        b.y = BATTER_Y;
        a.addChild(b);
        f = {
            images: [s_oSpriteLibrary.getSprite("batter_idle_" + d + "-0"), s_oSpriteLibrary.getSprite("batter_idle_" + d + "-1")],
            frames: e,
            animations: {
                start: 0,
                anim: [0, 39],
                hide: 40
            }
        };
        e = new createjs.SpriteSheet(f);
        c = new createjs.Sprite(e, "anim");
        c.x = BATTER_X;
        c.y = BATTER_Y;
        a.addChild(c)
    };
    this.viewBatter = function(a, d) {
        d ? (b.gotoAndStop(a), c.gotoAndStop("hide")) : (c.gotoAndStop(a), b.gotoAndStop("hide"))
    };
    s_oBatter = this;
    this._init(a, d)
}
s_oBatter = null;

function CBowler(a, d) {
    var b;
    this._init = function(a, d) {
        var c = {
            images: [s_oSpriteLibrary.getSprite("bowler_" + d)],
            frames: [
                [1, 1, 97, 130, 0, -38, -20],
                [100, 1, 102, 132, 0, -35, -20],
                [204, 1, 109, 134, 0, -33, -19],
                [315, 1, 114, 137, 0, -31, -18],
                [431, 1, 117, 143, 0, -29, -13],
                [550, 1, 119, 146, 0, -27, -11],
                [671, 1, 120, 151, 0, -26, -7],
                [793, 1, 119, 154, 0, -25, -5],
                [1, 157, 115, 154, 0, -26, -5],
                [118, 157, 117, 153, 0, -26, -7],
                [237, 157, 116, 149, 0, -28, -14],
                [355, 157, 113, 147, 0, -29, -18],
                [470, 157, 107, 150, 0, -30, -17],
                [579, 157, 116, 148, 0, -21, -20],
                [697, 157, 142, 136,
                    0, 0, -32
                ],
                [1, 313, 144, 130, 0, 0, -38],
                [147, 313, 129, 128, 0, -16, -40],
                [278, 313, 123, 128, 0, -22, -40],
                [403, 313, 120, 130, 0, -26, -41],
                [525, 313, 117, 132, 0, -30, -40],
                [644, 313, 117, 134, 0, -29, -40],
                [763, 313, 112, 136, 0, -27, -38],
                [1, 451, 114, 137, 0, -23, -37],
                [117, 451, 94, 136, 0, -35, -38],
                [213, 451, 81, 144, 0, -48, -30],
                [296, 451, 143, 160, 0, -15, -14],
                [441, 451, 165, 160, 0, -5, -14],
                [608, 451, 148, 141, 0, -13, -33],
                [758, 451, 111, 123, 0, -35, -51],
                [871, 451, 84, 131, 0, -50, -46],
                [1, 613, 85, 136, 0, -50, -44],
                [88, 613, 99, 136, 0, -48, -46],
                [189, 613, 104, 136, 0, -48, -48],
                [295,
                    613, 107, 135, 0, -46, -49
                ],
                [404, 613, 108, 133, 0, -45, -51],
                [514, 613, 113, 126, 0, -38, -58],
                [629, 613, 114, 123, 0, -35, -60],
                [745, 613, 114, 124, 0, -34, -60],
                [1, 751, 117, 128, 0, -33, -59],
                [120, 751, 120, 131, 0, -33, -60],
                [242, 751, 117, 132, 0, -37, -62],
                [361, 751, 115, 129, 0, -38, -68],
                [478, 751, 104, 125, 0, -46, -73],
                [584, 751, 97, 128, 0, -51, -71],
                [683, 751, 92, 133, 0, -52, -66],
                [777, 751, 84, 142, 0, -53, -59],
                [863, 751, 89, 144, 0, -53, -58],
                [1, 897, 100, 145, 0, -50, -57],
                [103, 897, 104, 148, 0, -47, -55],
                [209, 897, 108, 154, 0, -41, -50],
                [319, 897, 112, 157, 0, -35, -48],
                [433, 897, 112,
                    159, 0, -32, -46
                ],
                [547, 897, 111, 163, 0, -29, -43],
                [660, 897, 108, 163, 0, -30, -43],
                [770, 897, 99, 164, 0, -34, -42],
                [871, 897, 95, 164, 0, -35, -42]
            ],
            animations: {
                start: 0,
                anim: [0, 56, "hide"],
                hide: 56
            }
        };
        c = new createjs.SpriteSheet(c);
        b = new createjs.Sprite(c, "start");
        b.x = BOWLER_X;
        b.y = BOWLER_Y;
        a.addChild(b)
    };
    this.viewBowler = function(a) {
        b.gotoAndStop(a)
    };
    this.hideBowler = function(a) {};
    this._init(a, d)
}

function CBall(a) {
    var d = 0,
        b = MAX_FRAMES_THROWN,
        c = 0,
        e = 0,
        f, h, m, n, k = !1,
        q, y, x, p, B, l = {
            x: 0,
            y: 0
        },
        w = {
            x: 0,
            y: 0
        },
        z;
    this._init = function(a) {
        var b = s_oSpriteLibrary.getSprite("ball"),
            c = new createjs.SpriteSheet({
                images: [b],
                frames: {
                    width: b.width / 7,
                    height: b.height / 3,
                    regX: b.width / 2 / 7,
                    regY: b.height / 2 / 3
                },
                animations: {
                    rotate: [0, 20]
                }
            });
        p = createSprite(c, "normal", b.width / 2 / 7, b.height / 2 / 3, b.width / 7, b.height / 3);
        p.stop();
        h = f = STEP_SPEED_BALL;
        a.addChild(p)
    };
    this.reset = function(a) {
        p.x = BALL_X;
        p.y = BALL_Y;
        p.regX = NaN;
        p.regY = NaN;
        p.scaleX =
            .4;
        p.scaleY = .4;
        p.rotation = 0;
        x = y = q = k = n = p.visible = !1;
        b = MAX_FRAMES_THROWN;
        this.changeTrajectory(a)
    };
    this.changeTrajectory = function(a) {
        l.x = p.x;
        l.y = p.y;
        w.x = a.x;
        w.y = a.y;
        f = h;
        this._calculateMid(l, w)
    };
    this.addVelocity = function() {
        f < MAX_BALL_VELOCITY ? h = f += BALL_VELOCITY_ADDED : f = MAX_BALL_VELOCITY
    };
    this.viewBall = function() {
        p.visible = !0;
        this._calculateMid(l, w);
        m = !0
    };
    this.hideBall = function() {
        p.visible = !1
    };
    this._calculateMid = function(a, b) {
        var c = Math.floor(50 * Math.random()) + 1;
        c = !0 === n ? q ? new createjs.Point(Math.floor(100 *
            Math.random()) + CANVAS_WIDTH / 2 - 100, TRAJECTORY_Y_BALL_CAUGHT - c) : b.x < CANVAS_WIDTH / 2 ? b.y > CANVAS_HEIGHT / 2 ? new createjs.Point(Math.floor(CANVAS_WIDTH / 2 * Math.random()) - 100, TRAJECTORY_Y_BALL_CAUGHT - c) : new createjs.Point(Math.floor(CANVAS_WIDTH / 2 * Math.random()) - 100, TRAJECTORY_Y_BALL_CAUGHT + c) : b.x > CANVAS_WIDTH / 2 ? b.y > CANVAS_HEIGHT / 2 ? new createjs.Point(Math.floor(CANVAS_WIDTH / 2 * Math.random() + 125) + 250, TRAJECTORY_Y_BALL_CAUGHT - c) : new createjs.Point(Math.floor(Math.random() * (w.x - l.x) + CANVAS_WIDTH / 2 + c), TRAJECTORY_Y_BALL_CAUGHT +
            c) : b.x > CANVAS_WIDTH / 2 ? new createjs.Point(CANVAS_WIDTH / 2 - 50, Math.floor(200 * Math.random()) + 100) : new createjs.Point(CANVAS_WIDTH / 2 + 50, Math.floor(200 * Math.random()) + 100) : k ? new createjs.Point(CANVAS_WIDTH_HALF + (END_POINT_X_MISSED_BALL - p.x), CANVAS_HEIGHT_HALF + (END_POINT_Y_MISSED_BALL - p.y)) : .5 > Math.random() ? new createjs.Point(CANVAS_WIDTH / 2 - 50, Math.floor(CANVAS_HEIGHT / 2 * Math.random() - 100) + 100) : new createjs.Point(CANVAS_WIDTH / 2 + 50, Math.floor(CANVAS_HEIGHT / 2 * Math.random() - 100) + 100);
        z = {
            start: a,
            end: b,
            traj: c
        }
    };
    this._updateBall = function() {
        d += f;
        d > b && (!k || n ? !0 === n ? s_oGame._ballHitted(B) : (k = !0, this.changeTrajectory({
            x: END_POINT_X_MISSED_BALL,
            y: END_POINT_Y_MISSED_BALL
        })) : (s_oGame._ballMissed(), m = p.visible = !1), s_oGame.changeStateTarget(!0), playSound("drop_bounce_grass", 1, !1), d = 0);
        var a = easeLinear(d, 0, 1, b);
        this.rolls();
        a = getTrajectoryPoint(a, z);
        p.x = a.x;
        p.y = a.y;
        !0 === n ? (0 <= p.scaleX && (p.scaleX -= .03, p.scaleY -= .03), f -= .035) : 1 > p.scaleX ? (p.scaleX += .03, p.scaleY += .03) : f += .2
    };
    this.getValue = function() {
        return p
    };
    this.hitControl =
        function() {
            var a = !1;
            p.y >= PERFECT_HIT_Y - OFFSET_FOR_PERFECT_HIT && p.y <= PERFECT_HIT_Y + OFFSET_FOR_PERFECT_HIT ? a = q = !0 : p.y >= ALMOST_MINUS && p.y <= PERFECT_HIT_Y ? a = x = !0 : p.y <= ALMOST_PLUS && p.y >= PERFECT_HIT_Y && (a = y = !0);
            a && (B = p.y - PERFECT_HIT_Y, 0 > B && (B *= -1));
            m = !0
        };
    this.hitBall = function() {
        q ? this.perfectHit() : x ? this.miniusHit() : y && this.plusHit();
        if (q || x || y) n = !0, l.x = p.x, l.y = p.y, f = STEP_SPEED_BALL + BEAT_FORCE, playSound("hit_ball", 1, !1), this._calculateMid(l, w), s_oGame.setScore(SCORE_HIT - B)
    };
    this.perfectHit = function() {
        z.traj.x <
            CANVAS_WIDTH / 2 ? (d = 0, w.x = END_POINT_X_PERFECT_LEFT) : (d = 0, w.x = END_POINT_X_PERFECT_RIGHT);
        w.y = END_POINT_Y_PERFECT
    };
    this.miniusHit = function() {
        z.traj.x < CANVAS_WIDTH / 2 ? (d = 0, w.x = END_POINT_X_ALMOST_MINUS_RIGHT) : (d = 0, w.x = END_POINT_X_ALMOST_MINUS_LEFT);
        w.y = END_POINT_Y_ALMOST_MINUS
    };
    this.plusHit = function() {
        z.traj.x < CANVAS_WIDTH / 2 ? (d = 0, w.x = END_POINT_X_ALMOST_PLUS_RIGHT) : (d = 0, w.x = END_POINT_X_ALMOST_PLUS_LEFT);
        w.y = END_POINT_Y_ALMOST_PLUS
    };
    this.rolls = function() {
        2 < f ? p.rotation += 10 : 1 < f ? (c++, 2 === c && (p.rotation += 8, c =
            0)) : .5 < f && (c++, 3 === c && (p.rotation += 4, c = 0));
        var a = this._goToPrevFrame;
        l.y > w.y && (a = this._goToNextFrame);
        1.5 < f ? a() : 1 < f ? (c++, 1 < c && (a(), c = 0)) : .5 < f && (c++, 2 < c && (a(), c = 0))
    };
    this._goToPrevFrame = function() {
        0 === e ? e = 20 : e--;
        p.gotoAndStop(e)
    };
    this._goToNextFrame = function() {
        21 === e ? e = 1 : e++;
        p.gotoAndStop(e)
    };
    this.setPosition = function(a, b) {
        p.x = a;
        p.y = b
    };
    this.changeState = function(a) {
        p.gotoAndStop(a)
    };
    this.update = function() {
        m && this._updateBall()
    };
    this._init(a);
    return this
}

function CCreditsPanel() {
    var a, d, b, c, e, f, h, m;
    this._init = function() {
        m = new createjs.Container;
        s_oStage.addChild(m);
        var n = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        m.addChild(n);
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.addChild(e);
        n = s_oSpriteLibrary.getSprite("msg_box");
        d = createBitmap(n);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2;
        d.regX = n.width / 2;
        d.regY = n.height / 2;
        m.addChild(d);
        f = new createjs.Shape;
        f.graphics.beginFill("#0f0f0f").drawRect(0,
            0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .01;
        f.cursor = "pointer";
        f.on("click", this._onLogoButRelease);
        m.addChild(f);
        n = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH / 2 + 204;
        b = new CGfxButton(a, 264, n, m);
        b.addEventListener(ON_MOUSE_UP, this.unload, this);
        c = new createjs.Text(TEXT_CREDITS_DEVELOPED, "48px " + FONT, "#ffffff");
        c.x = CANVAS_WIDTH / 2;
        c.y = 350;
        c.textAlign = "center";
        m.addChild(c);
        n = s_oSpriteLibrary.getSprite("logo_credits");
        var k = createBitmap(n);
        k.regX = n.width / 2;
        k.regY = n.height / 2;
        k.x = CANVAS_WIDTH / 2;
        k.y = 470;
        m.addChild(k);
        h = new createjs.Text(TEXT_LINK, "42px " + FONT, "#ffffff");
        h.x = CANVAS_WIDTH / 2;
        h.y = 530;
        h.textAlign = "center";
        m.addChild(h)
    };
    this.unload = function() {
        f.off("click", this._onLogoButRelease);
        b.unload();
        b = null;
        s_oStage.removeChild(m)
    };
    this._onLogoButRelease = function() {
        window.open("https://www.abdindia.com/spirits/whiskies/officer-s-choice-whisky/")
    };
    this._init()
}

function CBallTarget(a, d, b, c) {
    var e;
    this._init = function(a, b, d) {
        var f = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                state_true: [1],
                state_false: [0]
            }
        });
        e = createSprite(f, "state_false", d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        e.x = a;
        e.y = b;
        e.stop();
        c.addChild(e)
    };
    this.unload = function() {
        c.removeChild(e)
    };
    this.changeState = function(a) {
        e.gotoAndStop("state_" + a)
    };
    this.setPosition = function(a, b) {
        e.x = a;
        e.y = b
    };
    this.setVisible = function(a) {
        e.visible =
            a
    };
    this._init(a, d, b);
    return this
}

function CTeamChoose() {
    var a, d, b, c, e, f, h, m, n, k, q, y, x, p, B, l = null,
        w, z, E = null,
        A = null,
        M, F, G, H, r, P, J, O, K, L;
    this._init = function() {
        n = createBitmap(s_oSpriteLibrary.getSprite("bg_select_team"));
        s_oStage.addChild(n);
        H = new createjs.Container;
        K = 0;
        L = TEXT_TEAM.length - 1;
        J = this.createFlagSelection(PLAYER_SELECTION_FLAG_START_POS.x, PLAYER_SELECTION_FLAG_START_POS.y, 1500, this._onButPlayerTeamChoose);
        O = this.createFlagSelection(OPPONENT_SELECTION_FLAG_START_POS.x, OPPONENT_SELECTION_FLAG_START_POS.y, 1500, this._onButOppTeamChoose);
        var t = s_oSpriteLibrary.getSprite("flag_selection");
        F = createBitmap(t);
        F.x = J[0].getX();
        F.y = J[0].getY();
        F.regX = .5 * t.width;
        F.regY = .5 * t.height;
        G = createBitmap(t);
        G.x = O[TEXT_TEAM.length - 1].getX();
        G.y = O[TEXT_TEAM.length - 1].getY();
        G.regX = .5 * t.width;
        G.regY = .5 * t.height;
        s_oStage.addChild(H);
        H.y = 12;
        y = this.createText(TEXT_SELECT_OPPONENT_TEAM, 22, 200).container;
        y.x = CANVAS_WIDTH_HALF + 130;
        y.y = 304;
        s_oStage.addChild(y);
        q = this.createText(TEXT_SELECT_YOUR_TEAM, 22, 200).container;
        q.x = CANVAS_WIDTH_HALF - 120;
        q.y = 304;
        s_oStage.addChild(q);
        t = this.createText(TEXT_TEAM[0], 30, 500);
        x = t.container;
        x.x = CANVAS_WIDTH_HALF - 120;
        x.y = CANVAS_HEIGHT_HALF + 132;
        r = t.text;
        s_oStage.addChild(x);
        t = this.createText(TEXT_TEAM[TEXT_TEAM.length - 1], 30, 500);
        p = t.container;
        p.x = CANVAS_WIDTH_HALF + 120;
        p.y = CANVAS_HEIGHT_HALF + 132;
        P = t.text;
        s_oStage.addChild(p);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t = s_oSpriteLibrary.getSprite("audio_icon"), h = CANVAS_WIDTH - t.width / 2 - 60, m = t.height / 2 + 20, w = new CToggle(h, m, t, s_bAudioActive, s_oStage), w.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
            this);
        b = .5 * CANVAS_WIDTH + 300;
        c = .5 * CANVAS_HEIGHT + 400;
        t = s_oSpriteLibrary.getSprite("but_continue");
        k = new CGfxButton(b, c, t, s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onButContinueRelease, this);
        k.pulseAnimation();
        t = s_oSpriteLibrary.getSprite("but_exit");
        e = CANVAS_WIDTH - t.width / 2 - 15;
        f = t.height / 2 + 20;
        M = new CGfxButton(e, f, t, s_oStage);
        M.addEventListener(ON_MOUSE_UP, this._onExit, this);
        t = window.document;
        var l = t.documentElement;
        E = l.requestFullscreen || l.mozRequestFullScreen || l.webkitRequestFullScreen || l.msRequestFullscreen;
        A = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (E = !1);
        E && screenfull.enabled && (t = s_oSpriteLibrary.getSprite("but_fullscreen"), a = t.width / 4 + 10, d = f, z = new CToggle(a, d, t, s_bFullscreen, s_oStage), z.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        B = new createjs.Shape;
        B.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(B);
        createjs.Tween.get(B).to({
            alpha: 0
        }, 1E3).call(function() {
            B.visible = !1;
            H.addChild(F,
                G)
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this._createFlag = function(a, b, c, d, e, f, h) {
        var g = s_oSpriteLibrary.getSprite("flag_" + a);
        b = new CGfxButton(b, c, g, h);
        b.addEventListenerWithParams(ON_MOUSE_UP, f, this, a);
        a = b.getButton();
        a.scaleX = 0;
        a.scaleY = 0;
        createjs.Tween.get(a).wait(d).to({
            scaleY: 1,
            scaleX: 1
        }, e, createjs.Ease.elasticOut);
        return b
    };
    this.createFlagSelection = function(a, b, c, d) {
        for (var e = [], f = a, h = 0; h < TOT_TEAMS; h++) e[h] = this._createFlag(h, f, b, Math.floor(500 * Math.random()), c, d, H), 0 === h % MAX_COL_FLAG -
            1 ? (f = a, b += FLAG_OFFSET.y) : f += FLAG_OFFSET.x;
        return e
    };
    this.createText = function(a, b, c) {
        var d = new createjs.Container;
        a = new createjs.Text(a, b + "px " + FONT, "#ffffff");
        a.textAlign = "center";
        a.lineWidth = c;
        a.x = 0;
        a.y = 0;
        d.addChild(a);
        return {
            container: d,
            text: a
        }
    };
    this.refreshButtonPos = function(p, l) {
        M.setPosition(e - p, l + f);
        k.setPosition(b - p, c - l);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || w.setPosition(h - p, l + m);
        E && screenfull.enabled && z.setPosition(a + p, d + l)
    };
    this._onButPlayerTeamChoose = function(a) {
        K !== a && L !== a && (F.x =
            J[a].getX(), F.y = J[a].getY(), r.text = TEXT_TEAM[a], K = a)
    };
    this._onButOppTeamChoose = function(a) {
        L !== a && K !== a && (G.x = O[a].getX(), G.y = O[a].getY(), P.text = TEXT_TEAM[a], L = a)
    };
    this.unload = function() {
        for (var a = 0; a < J.length; a++) J[a].unload(), J[a] = null;
        for (a = 0; a < O.length; a++) O[a].unload(), O[a] = null;
        M.unload();
        M = null;
        k.unload();
        k = null;
        null !== l && (l.unload(), l = null);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) w.unload(), w = null;
        E && screenfull.enabled && z.unload();
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oTeamChoose = null
    };
    this.loadingScreen = function() {
        var a = new createjs.Container;
        a.alpha = 0;
        l = new CLoadingScreen(a, this);
        createjs.Tween.get(a).to({
            alpha: 1
        }, 250, createjs.Ease.cubicOut)
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButContinueRelease = function() {
        k.block(!0);
        s_iPlayerTeam = K;
        s_iOpponentTeam = L;
        s_oMain.gotoGame(s_iPlayerTeam, s_iOpponentTeam)
    };
    this.resetFullscreenBut = function() {
        E &&
            screenfull.enabled && z.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? A.call(window.document) : E.call(window.document.documentElement);
        sizeHandler()
    };
    s_oTeamChoose = this;
    this._init()
}
var s_oTeamChoose = null;

function CPole(a, d, b, c) {
    var e;
    this._init = function(a, b, d) {
        e = createBitmap(d);
        e.x = a;
        e.y = b;
        e.regX = .5 * d.width;
        e.regY = .5 * d.height;
        c.addChild(e)
    };
    this.getValue = function() {
        return e
    };
    this.unload = function() {
        c.removeChild(e)
    };
    this._init(a, d, b);
    return this
}

function CPause() {
    var a, d;
    this._init = function() {
        var b = new createjs.Container;
        b.alpha = 1;
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .5;
        var c = new createjs.Shape;
        c.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.hitArea = c;
        a.on("click", function() {});
        b.addChild(a);
        c = s_oSpriteLibrary.getSprite("msg_box");
        var e = createBitmap(c);
        e.x = CANVAS_WIDTH_HALF;
        e.y = CANVAS_HEIGHT_HALF;
        e.regX = .5 * c.width;
        e.regY = .5 * c.height;
        b.addChild(e);
        c =
            new createjs.Text(TEXT_PAUSE, "80px " + FONT, "#ffffff");
        c.x = .5 * CANVAS_WIDTH;
        c.y = .5 * CANVAS_HEIGHT - 200;
        c.textAlign = "center";
        c.lineWidth = 600;
        b.addChild(c);
        c = s_oSpriteLibrary.getSprite("but_continue");
        d = new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 70, c, b);
        d.addEventListenerWithParams(ON_MOUSE_UP, this._onLeavePause, this, b);
        d.pulseAnimation();
        s_oStage.addChild(b);
        s_oGame.pause(!0)
    };
    this.unload = function() {
        a.removeAllEventListeners();
        d.unload();
        d = null;
        s_oStage.removeChild(void 0)
    };
    this._onLeavePause = function(a) {
        s_oGame.pause(!1);
        createjs.Tween.get(a).to({
            alpha: 0
        }, 100, createjs.quartIn).call(function() {
            s_oInterface.unloadPause()
        })
    };
    this._init();
    return this
}

function CAreYouSurePanel(a) {
    var d, b, c, e, f, h;
    this._init = function() {
        f = new createjs.Container;
        f.alpha = 0;
        m.addChild(f);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .5;
        h.on("click", function() {});
        f.addChild(h);
        var a = s_oSpriteLibrary.getSprite("msg_box");
        d = createBitmap(a);
        d.x = CANVAS_WIDTH_HALF;
        d.y = CANVAS_HEIGHT_HALF;
        d.regX = .5 * a.width;
        d.regY = .5 * a.height;
        f.addChild(d);
        b = new createjs.Text(TEXT_ARE_SURE, "70px " + FONT, "#ffffff");
        b.x = CANVAS_WIDTH / 2 + 10;
        b.y =
            CANVAS_HEIGHT_HALF - 120;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.lineWidth = 450;
        f.addChild(b);
        c = new CGfxButton(CANVAS_WIDTH / 2 + 160, .5 * CANVAS_HEIGHT + 150, s_oSpriteLibrary.getSprite("but_yes"), f);
        c.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        e = new CGfxButton(CANVAS_WIDTH / 2 - 160, .5 * CANVAS_HEIGHT + 150, s_oSpriteLibrary.getSprite("but_no"), f);
        e.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    };
    this.show = function() {
        createjs.Tween.get(f).to({
            alpha: 1
        }, 150, createjs.quartOut).call(function() {
            s_oGame.pause(!0)
        })
    };
    this.unload = function() {
        createjs.Tween.get(f).to({
            alpha: 0
        }, 150, createjs.quartOut).call(function() {
            m.removeChild(f, h)
        })
    };
    this._onButYes = function() {
        createjs.Ticker.paused = !1;
        this.unload();
        s_oGame.onExit();
        h.removeAllEventListeners()
    };
    this._onButNo = function() {
        s_oGame.pause(!1);
        this.unload();
        h.removeAllEventListeners()
    };
    var m = a;
    this._init()
}

function CController() {
    var a, d, b, c, e, f;
    this._init = function() {
        a = {
            x: .5 * CANVAS_WIDTH + 320,
            y: CANVAS_HEIGHT - 120
        };
        d = {
            x: .5 * CANVAS_WIDTH - 320,
            y: CANVAS_HEIGHT - 120
        };
        b = {
            x: .5 * CANVAS_WIDTH,
            y: CANVAS_HEIGHT - 120
        };
        var h = s_oSpriteLibrary.getSprite("arrow");
        c = new CGfxButton(d.x, d.y, h, s_oStage);
        c.addEventListener(ON_MOUSE_DOWN, s_oGame.hitLeft, this);
        c.setScaleX(-1);
        e = new CGfxButton(a.x, a.y, h, s_oStage);
        e.addEventListener(ON_MOUSE_DOWN, s_oGame.hitRight, this);
        f = new CGfxButton(b.x, b.y, h, s_oStage);
        f.addEventListener(ON_MOUSE_DOWN,
            s_oGame.hitCenter, this);
        f.rotation(-90)
    };
    this.getStartPositionControlRight = function() {
        return a
    };
    this.getStartPositionControlLeft = function() {
        return d
    };
    this.getStartPositionControlUp = function() {
        return b
    };
    this.setPositionControlRight = function(a, b) {
        e.setPosition(a, b)
    };
    this.setPositionControlLeft = function(a, b) {
        c.setPosition(a, b)
    };
    this.setPositionControlUp = function(a, b) {
        f.setPosition(a, b)
    };
    this.unload = function() {
        c.unload();
        c = null;
        e.unload();
        e = null;
        f.unload();
        f = null
    };
    this._init();
    return this
}

function CHelpPanel(a, d, b) {
    var c, e, f, h, m, n, k, q = !1;
    this._init = function(a, b, d) {
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        s_oStage.addChild(m);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .5;
        m.addChild(h);
        f = createBitmap(d);
        f.x = CANVAS_WIDTH_HALF;
        f.y = CANVAS_HEIGHT_HALF;
        f.regX = .5 * d.width;
        f.regY = .5 * d.height;
        m.addChild(f);
        c = new createjs.Text(TEXT_HOW_TO_PLAY, "50px " + FONT, "#ffffff");
        c.textAlign = "center";
        c.lineWidth = 500;
        c.x = .5 * CANVAS_WIDTH;
        c.y = .5 * CANVAS_HEIGHT -
            240;
        m.addChild(c);
        e = new createjs.Text(s_bMobile ? TEXT_HELP1_MOBILE_BATTER : TEXT_HELP1_PC_BATTER, "28px " + FONT, "#ffffff");
        e.textAlign = "center";
        e.lineWidth = 450;
        e.x = .5 * CANVAS_WIDTH;
        e.y = .5 * CANVAS_HEIGHT - 170;
        m.addChild(e);
        k = new createjs.Container;
        d = s_oSpriteLibrary.getSprite("ball_target");
        a = new CBallTarget(CANVAS_WIDTH_HALF - 150, CANVAS_HEIGHT_HALF - 30, d, k);
        b = new CBallTarget(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF - 30, d, k);
        d = new CBallTarget(CANVAS_WIDTH_HALF + 150, CANVAS_HEIGHT_HALF - 30, d, k);
        if (s_bMobile) {
            var p =
                s_oSpriteLibrary.getSprite("arrow");
            var l = s_oSpriteLibrary.getSprite("arrow");
            var q = s_oSpriteLibrary.getSprite("arrow")
        } else p = s_oSpriteLibrary.getSprite("key_left"), l = s_oSpriteLibrary.getSprite("key_up"), q = s_oSpriteLibrary.getSprite("key_right");
        p = this.createKey(CANVAS_WIDTH_HALF - 150, CANVAS_HEIGHT_HALF + 60, p);
        l = this.createKey(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 60, l);
        q = this.createKey(CANVAS_WIDTH_HALF + 150, CANVAS_HEIGHT_HALF + 60, q);
        var y = .8;
        s_bMobile && (p.scaleX = -1, y = -.8, l.rotation = 270);
        k.addChild(p,
            l, q);
        m.addChild(k);
        var x = this;
        this.animKeyTarget(p, a, l, b, q, d, 250, 250, p.scaleX, y);
        a = s_oSpriteLibrary.getSprite("but_continue");
        n = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT_HALF + 180, a, m);
        n.addEventListener(ON_MOUSE_UP, this._onExitHelp, this);
        n.pulseAnimation();
        m.on("pressup", function() {
            x._onExitHelp()
        })
    };
    this.animKeyTarget = function(a, b, c, d, e, f, h, k, m, n) {
        var l = this;
        createjs.Tween.get(a).wait(h).call(function() {
            l.changeAnimArrayTarget(a, b, n, .8, !0);
            createjs.Tween.get(a).wait(k).call(function() {
                l.changeAnimArrayTarget(a,
                    b, m, 1, !1);
                createjs.Tween.get(c).wait(h).call(function() {
                    l.changeAnimArrayTarget(c, d, .8, .8, !0);
                    createjs.Tween.get(c).wait(k).call(function() {
                        l.changeAnimArrayTarget(c, d, 1, 1, !1);
                        createjs.Tween.get(e).wait(h).call(function() {
                            l.changeAnimArrayTarget(e, f, .8, .8, !0);
                            createjs.Tween.get(e).wait(k).call(function() {
                                l.changeAnimArrayTarget(e, f, 1, 1, !1);
                                l.animKeyTarget(a, b, c, d, e, f, h, k, m, n)
                            })
                        })
                    })
                })
            })
        })
    };
    this.changeAnimArrayTarget = function(a, b, c, d, e) {
        a.scaleX = c;
        a.scaleY = d;
        b.changeState(e)
    };
    this.createKey = function(a,
        b, c) {
        var d = createBitmap(c);
        d.x = a;
        d.y = b;
        d.regX = .5 * c.width;
        d.regY = .5 * c.height;
        return d
    };
    this.unload = function() {
        createjs.Tween.removeAllTweens();
        createjs.Tween.get(m).to({
            alpha: 0
        }, 500, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(m)
        });
        var a = this;
        m.off("pressup", function() {
            a._onExitHelp()
        })
    };
    this._onExitHelp = function() {
        q || (q = !0, this.unload(), s_oGame._onExitHelpPanel())
    };
    this._init(a, d, b);
    return this
}

function CLoadingScreen(a, d) {
    var b = null,
        c;
    this._init = function() {
        b = new createjs.Shape;
        b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.on("click", function() {});
        a.addChild(b);
        var e = d.createText(TEXT_LOADING, 36).container;
        e.x = CANVAS_WIDTH_HALF;
        e.y = CANVAS_HEIGHT_HALF - 30;
        a.addChild(e);
        e = s_oSpriteLibrary.getSprite("preloader_anim");
        c = createBitmap(e);
        c.x = CANVAS_WIDTH_HALF;
        c.y = CANVAS_HEIGHT_HALF + 30;
        c.regX = .5 * e.width;
        c.regY = .5 * e.height;
        a.addChild(c);
        s_oStage.addChild(a);
        this.animLoad()
    };
    this.animLoad = function() {
        var a = this;
        createjs.Tween.get(c).to({
            rotation: c.rotation + 360
        }, 1E3).call(function() {
            a.animLoad()
        })
    };
    this.unload = function() {
        b.removeAllEventListeners();
        s_oStage.removeChild(a)
    };
    this._init();
    return this
}

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var d = a.split("."),
        b = d.length;
    2 < b && (a = d[b - 2] + "." + d[b - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            d = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    d = !0;
                    break
                }
        } catch (b) {
            d = !0
        }
        return {
            topFrame: a,
            err: d
        }
    },
    getBestPageUrl = function(a) {
        var d = a.topFrame,
            b = "";
        if (a.err) try {
            try {
                b = window.top.location.href
            } catch (e) {
                var c = window.location.ancestorOrigins;
                b = c[c.length - 1]
            }
        } catch (e) {
            b = d.document.referrer
        } else b = d.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), d = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], b = 0; b < d.length; b++)
        if (d[b] === a) return !0;
    return !0
};
