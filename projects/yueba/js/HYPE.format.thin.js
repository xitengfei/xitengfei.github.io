(function() {
    var aa = void 0,
    g = !0,
    j = null,
    k = !1,
    fa = encodeURIComponent,
    n = window,
    q = document,
    z = Math,
    ga = navigator,
    ha = parseInt,
    ja = parseFloat;
    function ka(T, y) {
        return T.width = y
    }
    function la(T, y) {
        return T.innerHTML = y
    }
    function ma(T, y) {
        return T.loop = y
    }
    function na(T, y) {
        return T.zIndex = y
    }
    function pa(T, y) {
        return T.length = y
    }
    function qa(T, y) {
        return T.className = y
    }
    function ra(T, y) {
        return T.MozPerspective = y
    }
    function ta(T, y) {
        return T.display = y
    }
    function ua(T, y) {
        return T.height = y
    }
    var A = "appendChild",
    E = "push",
    va = "direction",
    Aa = "lastPosition",
    Ba = "clearTimeout",
    Ca = "width",
    Da = "round",
    Ea = "slice",
    Fa = "replace",
    Ga = "ceil",
    Ha = "getElementById",
    Ja = "offsetWidth",
    Ka = "charAt",
    La = "preventDefault",
    Pa = "button",
    Qa = "indexOf",
    Ua = "opera",
    Va = "createElement",
    Wa = "addEventListener",
    K = "setAttribute",
    Xa = "play",
    Ya = "type",
    cb = "attachEvent",
    db = "source",
    eb = "changedTouches",
    fb = "zIndex",
    gb = "getElementsByTagName",
    hb = "clientX",
    lb = "clientY",
    M = "length",
    mb = "className",
    nb = "setTimeout",
    ob = "removeEventListener",
    pb = "ctrlKey",
    qb = "duration",
    rb = "userAgent",
    sb = "location",
    O = "hasOwnProperty",
    tb = "touches",
    Z = "style",
    Cb = "pause",
    Db = "body",
    Eb = "removeChild",
    Fb = "search",
    Gb = "options",
    Hb = "start",
    Ib = "getAttribute",
    Jb = "detachEvent",
    Kb = "element",
    Lb = "startTime",
    Mb = "removeAttribute",
    Sb = "parentNode",
    Tb = "display",
    Ub = "height",
    Vb = "splice",
    Wb = "event",
    $ = "",
    Xb = "\n",
    Yb = " ",
    Zb = " -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(",
    $b = " : ",
    ac = " rotate(",
    bc = " rotateX(",
    cc = " rotateY(",
    dc = " scaleX(",
    ec = " scaleY(",
    fc = " translateX(",
    gc = " translateY(",
    hc = " translateZ(",
    ic = "#",
    jc = "%",
    kc = "%27",
    Bc = "&",
    Cc = "&nbsp;",
    Dc = "')",
    Ec = "(",
    Fc = ")",
    Gc = ") ",
    Hc = ",",
    Ic = ",transparent),to(rgba(255,255,255,.5)))",
    Jc = "-bottom",
    Kc = "-moz-",
    Lc = "-moz-perspective",
    fd = "-ms-transform",
    gd = "-ms-transform-origin",
    hd = "-o-",
    id = "-webkit-",
    jd = "-webkit-perspective",
    kd = "-webkit-tap-highlight-color",
    ld = "-webkit-transform",
    md = ".HYPE_element{-webkit-transform:rotateY(0);}video.HYPE_element{-webkit-transform:none;}^{color:#000;`size:16px;`weight:normal;`family:Helvetica,Arial,Sans-Serif;`weight:normal;`style:normal;`variant:normal;text-decoration:none;text-align:left;text-transform:none;text-indent:0;text-shadow:none;line-height:normal;letter-spacing:normal;white-space:normal;word-spacing:normal;@:baseline;border:none;background-color:transparent;background-image:none;-webkit-`smoothing:antialiased;-moz-backface-visibility:hidden;}",
    nd = ".HYPE_scene ",
    od = "/",
    pd = "0",
    qd = "0.0",
    rd = "0123456789ABCDEF",
    sd = "1",
    td = "1.0",
    ud = "100%",
    vd = "600px",
    wd = ": ",
    xd = "</div>",
    yd = "</style>",
    zd = "<div style='overflow:auto;-webkit-overflow-scrolling:touch;width:100%;height:100%;'>",
    Ad = "<iframe frameBorder='0'style='width:100%;height:100%;border:none'></iframe>",
    Bd = '<style id="" type="text/css">',
    de = "=",
    ee = "?",
    fe = "@1x",
    ge = "@2x",
    he = "APPLY ERR ",
    ie = "Action",
    je = "Android",
    ke = "BD",
    le = "BODY",
    me = "BackCompat",
    ne = "Error in ",
    oe = "GET",
    pe = "GHIJKLMNOPQRSTUVWXYZ",
    qe = "HYPE_element",
    re = "HYPE_element ",
    se = "HYPE_element HYPE_scene",
    te = "HYPE_element HYPE_scene ",
    af = "HYPE_element Hype_scene ",
    bf = "HYPE_element_container",
    cf = "HYPE_persistent_symbols",
    df = "HYPE_scene",
    ef = "HYPE_scene_index",
    ff = "HYP_a",
    gf = "HYP_b",
    hf = "HYP_j",
    jf = "HYP_k",
    kf = "HYP_l",
    lf = "HYP_m",
    mf = "HYP_q",
    nf = "HYP_t",
    of = "HYP_u",
    pf = "HYP_w",
    qf = "HypeDocumentLoad",
    rf = "HypeLayoutRequest",
    sf = "HypeSceneLoad",
    tf = "HypeSceneUnload",
    uf = "HypeSwipe",
    vf = "HypeSymbolLoad",
    wf = "HypeSymbolUnload",
    xf = "HypeTimelineAction",
    yf = "HypeTimelineComplete",
    zf = "HypeTriggerCustomBehavior",
    Af = "M",
    Bf = "MSPointerUp",
    Cf = "MouseEvents",
    Df = "MozBoxShadow",
    Ef = "N",
    Ff = "O",
    Gf = "P",
    Hf = "Q",
    If = "R",
    Jf = "S",
    Kf = "T",
    Lf = "U",
    Mf = "V",
    Nf = "W",
    Of = "YES",
    Pf = "^div,^span,^applet,^object,^iframe,^h1,^h2,^h3,^h4,^h5,^h6,^p,^blockquote,^pre,^a,^abbr,^acronym,^address,^big,^cite,^code,^del,^dfn,^em,^img,^ins,^kbd,^q,^s,^samp,^small,^strike,^strong,^sub,^sup,^tt,^var,^b,^u,^i,^center,^dl,^dt,^dd,^ol,^ul,^li,^fieldset,^form,^label,^legend,^table,^caption,^tbody,^tfoot,^thead,^tr,^th,^td,^article,^aside,^canvas,^details,^embed,^figure,^figcaption,^footer,^header,^hgroup,^menu,^nav,^output,^ruby,^section,^summary,^time,^mark,^audio,^video{color:?;`size:?;`weight:?;`family:?;`weight:?;`style:?;`variant:?;text-decoration:?;text-align:?;text-transform:?;text-indent:?;text-shadow:?;line-height:?;letter-spacing:?;white-space:?;word-spacing:?;@:?;border:none;background-color:transparent;background-image:none;padding:0;box-sizing:content-box;}^p{display:block;$:1em 0;}^div,^layer{display:block;}^article,^aside,^footer,^header,^hgroup,^nav,^section{display:block;}^blockquote{display:block;$:1em 40px;}^figcaption{display:block;}^figure{display:block;$:1em 40px;}^q{display:inline;}^q:before{content:open-quote;}^q:after{content:close-quote;}^center{display:block;text-align:center;}^hr{display:block;$:.5em auto;border-style:inset;border-width:1px;}^h1,^h2,^h3,^h4,^h5,^h6{display:block;$-left:0;$-right:0;`weight:bold;}^h1{`size:2em;$-top:.67em;$|:.67em;}^h2{`size:1.5em;$-top:.83em;$|:.83em;}^h3{`size:1.17em;$-top:1em;$|:1em;}^h4{$-top:1.33em;$|:1.33em;}^h5{`size:.83em;$-top:1.67em;$|:1.67em;}^h6{`size:.67em;$-top:2.33em;$|:2.33em;}^table{display:table;border-collapse:separate;border-spacing:2px;border-color:gray;}^thead{display:table-header-group;@:middle;border-color:?;}^tbody{display:table-row-group;@:middle;border-color:?;}^tfoot{display:table-footer-group;@:middle;border-color:?;}^col{display:table-column;}^colgroup{display:table-column-group;}^tr{display:table-row;@:?;border-color:?;}^td,^th{display:table-cell;@:?;}^th{`weight:bold;}^caption{display:table-caption;text-align:center;}^ul,^menu,^dir{display:block;list-style-type:disc;$:1em 0;padding-left:40px;}^ol{display:block;list-style-type:decimal;$:1em 0;padding-left:40px;}^li{display:list-item;$:0;}^ul ul,^ol ul{list-style-type:circle;}^ol ol ul,^ol ul ul,^ul ol ul,^ul ul ul{list-style-type:square;}^dd{display:block;$-left:40px;}^dl{display:block;$:1em 0;}^dt{display:block;}^ol ul,^ul ol,^ul ul,^ol ol{$-top:0;$|:0;}^u,^ins{text-decoration:underline;}^strong,^b{`weight:bolder;}^i,^cite,^em,^var,^address{`style:italic;}^tt,^code,^kbd,^samp{`family:monospace;}^pre,^xmp,^plaintext,^listing{display:block;`family:monospace;white-space:pre;$:1em 0;}^mark{background-color:yellow;color:black;}^big{`size:larger;}^small{`size:smaller;}^s,^strike,^del{text-decoration:line-through;}^sub{@:sub;`size:smaller;}^sup{@:super;`size:smaller;}^nobr{white-space:nowrap;}^a{color:blue;text-decoration:underline;cursor:pointer;}^a:active{color:red;}^noframes{display:none;}^frameset,^frame{display:block;}^frameset{border-color:?;}^iframe{border:0;}^details{display:block;}^summary{display:block;}",
    Qf = "_blank",
    Rf = "a",
    Sf = "aA",
    Tf = "aB",
    Uf = "aC",
    Vf = "aD",
    Wf = "aE",
    Xf = "aM",
    Yf = "aN",
    Zf = "aS",
    $f = "aT",
    ag = "aU",
    bg = "aV",
    ch = "aW",
    dh = "aX",
    eh = "aY",
    fh = "aZ",
    gh = "abort",
    hh = "absolute",
    ih = "alt",
    jh = "aria-busy",
    kh = "aria-hidden",
    lh = "arraybuffer",
    mh = "audio",
    nh = "audio/ogg",
    oh = "auto",
    ph = "b",
    qh = "bA",
    rh = "bB",
    sh = "bC",
    th = "bF",
    uh = "bG",
    vh = "bH",
    wh = "bI",
    xh = "bJ",
    yh = "bK",
    zh = "bL",
    Ah = "bN",
    Bh = "bO",
    Ch = "bP",
    Dh = "bQ",
    Eh = "bR",
    Fh = "bS",
    Gh = "bT",
    Hh = "backdrop-filter",
    Ih = "background-origin",
    Jh = "background-size",
    Kh = "below ",
    Lh = "block",
    Mh = "blur(",
    Nh = "body=",
    Oh = "box-reflect",
    Ph = "box-shadow",
    Qh = "boxShadow",
    Rh = "brightness(",
    Sh = "c",
    Th = "cF",
    Uh = "cG",
    Vh = "cH",
    Wh = "cI",
    Xh = "cJ",
    Yh = "cK",
    Zh = "cL",
    $h = "cQ",
    ai = "cR",
    bi = "cV",
    ci = "cW",
    di = "cX",
    ei = "cY",
    fi = "cZ",
    gi = "cancel",
    hi = "canplaythrough",
    ii = "click",
    ji = "contrast(",
    ki = "controls",
    li = "d",
    mi = "deg",
    ni = "div",
    oi = "down",
    pi = "drag",
    qi = "e",
    ri = "element",
    si = "end",
    ti = "enter",
    ui = "error",
    vi = "exit",
    wi = "f",
    xi = "file://",
    yi = "filter",
    zi = "flat",
    Ai = "font-",
    Bi = "head",
    Ci = "hidden",
    Di = "href",
    Ei = "http://",
    Fi = "hue-rotate(",
    Gi = "hype-obj-",
    Hi = "hype-scene-",
    Ii = "iPad",
    Ji = "iPhone",
    Ki = "iPod",
    Li = "ibooksimg://",
    Mi = "iframe",
    Ni = "inherit",
    Oi = "j",
    Pi = "kTimelineDefaultIdentifier",
    Qi = "keydown",
    Ri = "keypress",
    Si = "keyup",
    Ti = "l",
    Ui = "left",
    Vi = "linear-gradient(",
    Wi = "loop",
    Xi = "m",
    Yi = "mailto:",
    Zi = "margin",
    $i = "mouseclick",
    aj = "mousedown",
    bj = "mousemove",
    cj = "mouseout",
    dj = "mouseover",
    ej = "mouseup",
    fj = "move",
    gj = "n",
    hj = "no",
    ij = "none",
    jj = "number",
    kj = "on",
    lj = "onresize",
    mj = "pageshow",
    nj = "playsinline",
    oj = "pointer-events",
    pj = "pointerup",
    qj = "preserve-3d",
    rj = "px",
    sj = "px) ",
    tj = "r",
    uj = "resize",
    vj = "rgb",
    wj = "rgba(",
    xj = "rgba(0,0,0,0)",
    yj = "right",
    zj = "role",
    Aj = "saturate(",
    Bj = "script",
    Cj = "sepia(",
    Dj = "source",
    Ej = "src",
    Fj = "start",
    Gj = "string",
    Hj = "subject=",
    Ij = "swipe",
    Jj = "tX",
    Kj = "tY",
    Lj = "tabindex",
    Mj = "tap",
    Nj = "target",
    Oj = "ti",
    Pj = "title",
    Qj = "touchcancel",
    Rj = "touchend",
    Sj = "touchmove",
    Tj = "touchstart",
    Uj = "transform-origin",
    Vj = "transform-style",
    Wj = "type",
    Xj = "up",
    Yj = "url('",
    Zj = "user-select",
    $j = "vertical-align",
    ak = "video",
    bk = "video/quicktime",
    ck = "www.",
    dk = "x-ibooks-th://",
    ek = "z"; (function() {
        n.HYPE_576 = function(T, ba, y, Mc, cg, dg, Ia, t, ub, fk, Cd, Dd, mk, eg, ue, Ed, gk, hk, Nc) {
            function fg(a, b, c) {
                Oc != j && (a = {
                    element: a,
                    triggerOnce: k,
                    elementOffset: 0
                },
                a[c] = function() {
                    b()
                },
                c = new Oc.hypeS(a), Fd[E](c))
            }
            function ca(a, b) {
                return function(c) {
                    for (var d = 0; d < b[M]; d++) {
                        var e = b[d],
                        f = e.p;
                        if (1 == f) Pc(ik(e.e, e.f), e.g, e.d);
                        else if (3 == f) e.b != j && (f = e.z != aa ? e.z: k, vb(e.b, a != j ? a.id: j, f));
                        else if (7 == f) e.b != j && wb(e.b, e.r);
                        else if (8 == f) e.b != j && (f = e.z != aa ? e.z: k, Qc(e.b, f, g, e.J != aa ? e.J: k));
                        else if (9 == f) e.b != j && e.i != j && ib(e.i, e.b, k, g);
                        else if (4 == f) {
                            var h;
                            e.h != j ? h = dg[fk[e.h]] : e.hc != j && (h = e.hc);
                            try {
                                h(ea.API, a, c)
                            } catch(l) {
                                ve(ne + v + wd + l)
                            }
                        } else if (5 == f) f = gg(e.j),
                        f != j && ((e = (e = e.k == g) || 1 == c[Pa] || c.metaKey == g) ? 9 > w.ia || w.Db || w.Ya != j ? n.open(f, Qf) : (9 == w.ia || 15 > w[Ua]) && !(c instanceof MouseEvent) ? n.open(f, Qf) : (e = q[Va](Rf), e[K](Di, f), e[K](Nj, Qf), q[Db][A](e), f = q.createEvent(Cf), f.initMouseEvent(ii, c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c[hb], c[lb], c[pb], c.altKey, c.shiftKey, c.metaKey, c[Pa], q[Db][Sb]), e.dispatchEvent(f), q[Db][Eb](e)) : n.top.location = f);
                        else if (6 == f) {
                            var m = e.l,
                            p = e.m,
                            e = e.n,
                            f = Yi;
                            m != j && (f += escape(m));
                            if (p != j || e != j) f += ee,
                            m = [],
                            p != j && m[E](Hj + fa(p)),
                            e != j && m[E](Nh + fa(e)),
                            f += m.join(Bc);
                            f != Yi && (n.top.location = f)
                        } else if (12 == f) f = e.o,
                        e = e.q,
                        e != g && (e = k),
                        f != j && jk(f, e);
                        else if (13 == f) f = e.o,
                        f != j && we(f)[Cb]();
                        else if (14 == f) f = e.B,
                        f != j && hg(f);
                        else if (15 == f) {
                            var v = e.s;
                            arguments = e.t;
                            f = $ + v + Ec + arguments.join(Hc) + Fc;
                            try {
                                eval(f)
                            } catch(u) {
                                ve(ne + v + wd + u)
                            }
                        }
                    }
                }
            }
            function ik(a, b) {
                var c = -1;
                if (b == j || 0 == b) a: {
                    for (c = 0; c < Ia[M]; c++) if (Ia[c].o == a) break a;
                    c = -1
                } else 1 == b && Ma + 1 < Ia[M] ? c = Ma + 1 : 2 == b ? c = Ma - 1 : 3 == b ? c = 0 : 4 == b && (c = Ia[M] - 1);
                return c
            }
            function Gd(a, b) {
                return function(c) {
                    xe(c, b, L[a.id])
                }
            }
            function ye(a, b) {
                return function(c) {
                    ig(c, b, L[a.id])
                }
            }
            function Rc() {}
            function jg(a) {
                var b = s(a, dh, 8),
                c = s(a, ch, 0);
                w.jb == j && (1 == 1 - c && a[Z].removeProperty != j ? a[Z].removeProperty(ea.na + Oh) : a[Z][ea.na + Oh] = Kh + x(b) + Zb + (1 - c) + Ic)
            }
            function ze(a) {
                var b = s(a, Mf);
                if (b != j) {
                    var c = $;
                    b == sd ? c = gg(s(a, Nf)) : b == pd && (c = $ + Mc + od + s(a, Lf));
                    b = Ad;
                    w.xa != j && (b = zd + b + xd);
                    la(a, b);
                    a[gb](Mi)[0].src = c
                }
            }
            function kg(a, b) {
                if (! (12 > w.ia)) {
                    var c = b == g ? ke: $,
                    d = s(a, c + zh, 0),
                    e = s(a, c + uh, 0),
                    f = s(a, c + vh, 0),
                    h = s(a, c + wh, 1),
                    l = s(a, c + xh, 1),
                    c = s(a, c + yh, 1),
                    m = $;
                    0 != d && (m += Mh + d + sj);
                    0 != e && (m += Cj + e + Gc);
                    0 != f && (m += Fi + ($ + f + mi) + Gc);
                    1 != h && (m += Aj + h + Gc);
                    if (1 != l) {
                        if (6 == w.Eb || w.xa != j && 536.26 >= w.ta) l -= 1,
                        1 < l && (l = 1);
                        m += Rh + l + Gc
                    }
                    1 != c && (m += ji + c + Gc);
                    m == $ && (m = ij);
                    b == g ? (a[Z][ea.na + Hh] = m, a[Z][Hh] = m, d = a[Z][Tb], ta(a[Z], ij), ta(a[Z], a[Z][Tb] + ($ + a[Ja]).substring(0, 0)), ta(a[Z], d)) : (a[Z][ea.na + yi] = m, a[Z].filter = m)
                }
            }
            function lc(a) {
                kg(a, k)
            }
            function mc(a) {
                kg(a, g)
            }
            function Hd(a) {
                var b = s(a, rh),
                c = s(a, sh),
                d = s(a, qh),
                e = s(a, fh);
                b == j || (c == j || d == j || e == j) || (a[Z].textShadow = (0 == b && 0 == c && 0 == e) == g ? ij: $ + x(b) + Yb + x(c) + Yb + x(e) + Yb + d)
            }
            function Id(a) {
                var b = s(a, Jf),
                c = s(a, Kf),
                d = s(a, If),
                e = s(a, Hf);
                if (! (b == j || c == j || d == j || e == j)) for (var f = [ea.na + Ph, Df, Qh, Ph], h = 0 == b && 0 == c && 0 == e, b = x(b) + Yb + x(c) + Yb + x(e) + Yb + d, c = 0; c < f[M]; c++) h == g ? a[Z].removeProperty(f[c]) : a[Z][f[c]] = b
            }
            function Sc(a) {
                var b = Ae(a),
                c = b == k ? j: s(a, gf),
                d = b == k ? j: s(a, ff),
                e = s(a, Dh, 0),
                f = s(a, Eh, 0),
                h = s(a, eh, 0),
                l = s(a, wi, 0),
                m = s(a, Bh, 0),
                p = s(a, $h, 1) * s(a, nf, 1),
                v = s(a, ai, 1) * s(a, of, 1),
                u = s(a, mf),
                Jd = 0 != s(a, zh, 0),
                r = s(a, Jj, 0.5),
                D = s(a, Kj, 0.5),
                b = $;
                if (u == j) {
                    for (var u = k,
                    B = jb(a), B = t[B].v, G = L[a.id]; G != j && B[G] != j;) if (G = B[G].bF, G != j && B[G] != j && (B[G].cQ != j || B[G].cR != j || nc == g && 0 != (B[G].bS & 256))) {
                        u = g;
                        break
                    }
                    Ra(a, mf, u)
                }
                u = Ed == g && -1 == a[mb][Qa](df) && 1 == p && (1 == v && u == k) && !(Jd == g && 50 <= w.Xa);
                if (10 <= w.ia && 0 == l && (1 != p || 1 != v) && 0 == s(a, Ef, 0) && 0 == s(a, Ff, 0) && 0 == s(a, Gf, 0) && 0 == s(a, Af, 0)) l = 1E-5;
                c != j && (b += fc + x(c, 2) + Gc);
                d != j && (b += gc + x(d, 2) + Gc);
                0 != e && (b += hc + x(e) + Gc);
                0 != m && s(a, Ch) == Of && (b += ac + ($ + m + mi) + Gc);
                0 != l && (b += ac + ($ + l + mi) + Gc);
                if (w.Na == g) {
                    if (0 != h || u == g) b += cc + ($ + h + mi) + Gc;
                    0 != f && (b += bc + ($ + f + mi) + Gc)
                }
                1 != p && (b += dc + p + Gc);
                1 != v && (b += ec + v + Gc);
                c = $ + ($ + 100 * r + jc) + Yb + ($ + 100 * D + jc);
                a[Z][ea.na + Uj] = c;
                a[Z].MozTransformOrigin = c;
                a[Z].OTransformOrigin = c;
                a[Z][gd] = c;
                a[Z][Uj] = c;
                a[Z][ld] = b;
                a[Z].MozTransform = b;
                a[Z].OTransform = b;
                a[Z][fd] = b;
                a[Z].transform = b
            }
            function oc(a) {
                Sc(a)
            }
            function Be(a) {
                function b(a, b) {
                    return $ + a + Vi + ($ + (b == g ? (z.abs(e) + 180) % 360 : (360 - z.abs(e) + 270) % 360) + mi) + Hc + c + Hc + d + Fc
                }
                var c = s(a, gj);
                if (! (c == j || c == $)) {
                    var d = s(a, Xi);
                    if (! (d == j || d == $)) {
                        var e = s(a, Ti);
                        e != j && (a[Z].backgroundImage = w.ta != j ? b(ea.na, k) : w.yb != j ? b(Kc, k) : 15 > w[Ua] ? b(hd, k) : b($, g))
                    }
                }
            }
            function lg(a) {
                var b = 0 == s(a, qi, 1) && s(a, Sf) == j && s(a, Wf) == j && s(a, Tf) == j && s(a, Ah) == j;
                if (s(a, pf, k) != b) {
                    var c = s(a, Oj);
                    b == g ? (a[K](kh, g), Tc.ti(a, j)) : (a[Mb](kh), Tc.ti(a, c));
                    Ra(a, pf, b)
                }
            }
            function mg(a) {
                var b = a[Z][Tb];
                ta(a[Z], s(a, ei, k) == g ? ij: s(a, tj, $));
                b == ij && Ce(L[a.id])
            }
            function Za(a) {
                Nb[a.id] = j;
                pc(a)
            }
            function pc(a) {
                try {
                    if (Kd == g) Uc[a.id] = a;
                    else {
                        var b = s(a, Fh, 36),
                        c = Ae(a),
                        d = L[a.id],
                        e = De(d),
                        f = ng(e),
                        h = og(e),
                        l = ng(d),
                        m = s(a, Rf, 0),
                        p = s(a, ph, 0),
                        v = s(a, Sh, j),
                        u = s(a, li, j),
                        Jd = e = g;
                        v == j && (e = k, v = l[Ca]);
                        u == j && (Jd = k, u = l[Ub]);
                        var r = Vc(d),
                        D = Wc(d),
                        d = D - u,
                        l = m,
                        B = p,
                        G = r,
                        H = D,
                        U = k;
                        if (nc == g && 36 != b) {
                            var J = 0 != (b & 1),
                            t = 0 != (b & 4),
                            w = 0 != (b & 2),
                            F = 0 != (b & 8),
                            y = 0 != (b & 32),
                            $a = 0 != (b & 16),
                            C = 0 != (b & 64) && w == g && $a == g,
                            P = 0 != (b & 128) && w == g && $a == g,
                            U = 0 != (b & 256) && (w == g || $a == g),
                            Q = h[Ca] / f[Ca],
                            I = h[Ub] / f[Ub];
                            w == g && (G = J == g && t == g ? r + (h[Ca] - f[Ca]) : z[Ga](r * Q));
                            J == g && t == g && w == k ? (b = m + r / 2, l = z[Ga](b * Q - r / 2)) : J == g && t == k && w == g ? l = h[Ca] - f[Ca] + m - (G - r) : J == g && t == k ? l = h[Ca] - f[Ca] + m: J == k && t == k && (l = z[Ga](m * Q));
                            $a == g && (H = F == g && y == g ? D + (h[Ub] - f[Ub]) : z[Ga](D * I));
                            F == g && y == g && $a == k ? B = z[Ga]((p + D / 2) * I - D / 2) : F == g && y == k && $a == g ? B = h[Ub] - f[Ub] + p - (H - D) : F == g && y == k ? B = h[Ub] - f[Ub] + p: F == k && y == k && (B = z[Ga](p * I));
                            if ((C == g || P == g) == g) h = G,
                            f = H,
                            p = G / r,
                            Q = H / D,
                            I = p,
                            C == g ? I = p <= Q ? p: Q: P == g && (I = p >= Q ? p: Q),
                            G = z[Ga](r * I),
                            H = z[Ga](D * I),
                            C = h - G,
                            P = f - H,
                            J == g && t == k ? l += C: J == g && t == g && (l += z[Ga](C / 2)),
                            F == g && y == k ? B += P: F == g && y == g && (B += z[Ga](P / 2))
                        }
                        var W = z.max(0, G - (r - v)),
                        N = z.max(0, H - d);
                        e == g ? (U == g && (l += s(a, Jj, 0.5) * (G - r), Ra(a, nf, z.max(0, G / r)), W = v), ka(a[Z], x(W, 2))) : ka(a[Z], $);
                        Jd == g ? (U == g && (B += s(a, Kj, 0.5) * (H - D), Ra(a, of, z.max(0, H / D)), N = u), ua(a[Z], x(N, 2))) : ua(a[Z], $);
                        Ra(a, ff, B);
                        Ra(a, gf, l);
                        c == k && (a[Z].top = x(B), a[Z].left = x(l)); (c == g || U == g) && Sc(a);
                        Ee == k && pg()
                    }
                } catch(X) {}
            }
            function gg(a) {
                a != j && 0 === a[Qa](ck) && (a = Ei + a);
                return a
            }
            function qg(a) {
                return typeof a == Gj && (7 == a[M] && a[Ka](0) == ic || 0 == a[Qa](vj) && a[Qa](Fc) == a[M] - 1)
            }
            function rg(a, b, c) {
                var d = c.$,
                e = ab(a, c),
                f = a.d,
                h = a.i,
                l = a.o,
                m = d == k ? a.b: j,
                p = m == j ? c.$ ? a.e: a.s: m,
                m = d == g ? a.b: j,
                v = m == j ? c.$ ? a.s: a.e: m,
                u = a.f,
                m = sa(l),
                e = z.min(1, (b - e) / f);
                d == g && (e = 1 - e);
                b = 1;
                if (u == Rf) b = 1 == e ? 1 : 0;
                else if (u == ph) b = e;
                else a: {
                    b = sg[u];
                    for (var t = f = j,
                    u = 0; u < b[M]; u++) {
                        for (var r = b[u], D = 0; D < r.ba[M]; D++) {
                            t = r.ba[D];
                            if (t[sb].x >= e) {
                                b = f != j ? f[sb].y + (t[sb].y - f[sb].y) * (e - f[sb].x) / (t[sb].x - f[sb].x) : t[sb].y;
                                break a
                            }
                            f = t
                        }
                        f = j
                    }
                    b = t[sb].y
                }
                e = d == k ? p: v;
                f = a.a;
                if (f != aa) {
                    d = Fe[f];
                    if (a.b != j) {
                        if (c.Ua[f] == j && (d = a.o, p = a.a, p != aa)) {
                            v = Fe[p];
                            a = {};
                            for (var u = [], B = t = 0, r = 0; r < v.ma[M]; r++) {
                                D = v.ma[r];
                                if (0 == r) var t = Vc(d),
                                B = Wc(d),
                                G = P[d].b,
                                t = P[d].a + t / 2 - D.sa.x,
                                B = G + B / 2 - D.sa.y;
                                u[E]({
                                    sa: {
                                        x: D.sa.x + t,
                                        y: D.sa.y + B
                                    },
                                    Ga: {
                                        x: D.Ga.x + t,
                                        y: D.Ga.y + B
                                    },
                                    Ba: {
                                        x: D.Ba.x,
                                        y: D.Ba.y
                                    },
                                    Ja: {
                                        x: D.Ja.x,
                                        y: D.Ja.y
                                    },
                                    length: 0,
                                    ba: []
                                });
                                B = t = 0
                            }
                            a.ma = u;
                            pa(a, Ge(a.ma, g));
                            c.Ua[p] = a;
                            p = sa(d);
                            if (s(p, Ch) == Of) {
                                for (var H, p = 0; p < c.ga[M]; p++) if (v = c.ga[p], v.i == Bh) {
                                    H = v;
                                    break
                                }
                                H != j && (a = tg(a, 0, d), H.b = a.za)
                            }
                        }
                        d = c.Ua[f]
                    }
                    c = tg(d, b, l);
                    h == Rf ? (e = c.x, s(m, Ch) == Of && W(m, Bh, c.za)) : h == ph && (e = c.y)
                } else if (d == g && (b = 1 - b), typeof p == jj || typeof v == jj) l = ug(p),
                H = ug(v),
                e = l + (H - l) * b;
                else if (qg(p) == g && qg(v) == g) {
                    l = vg(p);
                    H = vg(v);
                    c = [];
                    for (a = 0; 4 > a; a++) c[a] = l[a] + (H[a] - l[a]) * b;
                    if (1 == c[3]) {
                        l = ea.$a;
                        H = ic;
                        for (b = 0; 3 > b; b++) H += l[Ka](c[b] / 16) + l[Ka](c[b] % 16);
                        e = H
                    } else e = wj + ha(c[0]) + Hc + ha(c[1]) + Hc + ha(c[2]) + Hc + ja(c[3]) + Fc
                } else 1 == b && (e = v);
                W(m, h, e)
            }
            function tg(a, b, c) {
                var d;
                d = a[M];
                var e = 0,
                f, h = 0,
                h = {};
                if (0 > b || 1 < b) {
                    var l = e = f = j,
                    m = 1,
                    p = b;
                    if (0 > b) {
                        var v = a.ma[0];
                        2 <= v.ba[M] && (f = v.ba[0], e = v.ba[1], l = f)
                    } else m = -1,
                    p = 1 - b,
                    v = a.ma[a.ma[M] - 1],
                    2 <= v.ba[M] && (f = v.ba[v.ba[M] - 2], l = e = v.ba[v.ba[M] - 1]);
                    if (f != j && e != j) {
                        a = m * (e[sb].x - f[sb].x);
                        b = m * (e[sb].y - f[sb].y);
                        d *= p;
                        0 == b ? (h.y = 0, h.x = d) : (h.y = z.sqrt(z.pow(d, 2) / (z.pow(a, 2) / z.pow(b, 2) + 1)), h.x = h.y * a / b);
                        if (0 < a && 0 < h.x || 0 > a && 0 > h.x) h.x *= -1;
                        if (0 < b && 0 < h.y || 0 > b && 0 > h.y) h.y *= -1;
                        h.x += l[sb].x;
                        h.y += l[sb].y;
                        h.za = wg(f[sb], e[sb])
                    }
                } else if (0 == d) h = {
                    x: a.ma[0].sa.x,
                    y: a.ma[0].sa.y,
                    za: 0
                };
                else {
                    if (1 == b) d = a.ma,
                    f = d[d[M] - 1],
                    h = 1;
                    else {
                        for (h = 0; h < a.ma[M]; h++) {
                            v = a.ma[h];
                            if ((v[M] + e) / d > b) {
                                f = v;
                                break
                            }
                            e += v[M]
                        }
                        h = (b - e / d) / (f[M] / d);
                        d = f[M] * h;
                        for (b = a = h = 0; b < f.ba[M]; b++) if (e = f.ba[b], a + e[M] <= d) a += e[M],
                        h = b;
                        else break;
                        h = (h + (d - a) / (h + 1 < f.ba[M] ? f.ba[h + 1] : f.ba[f.ba[M] - 1])[M]) / (f.ba[M] - 1)
                    }
                    h = xg(f, h)
                }
                d = h;
                d.x -= Vc(c) / 2;
                d.y -= Wc(c) / 2;
                return d
            }
            function Wc(a) {
                a = sa(a);
                var b = s(a, li, 0),
                c = 0;
                0 == b ? b = a.clientHeight: c = s(a, bg, 0) + s(a, Zf, 0);
                return b + c + (s(a, Gf, 0) + s(a, Af, 0))
            }
            function Vc(a) {
                a = sa(a);
                var b = s(a, Sh, 0),
                c = 0;
                0 == b ? b = a.clientWidth: c = s(a, $f, 0) + s(a, ag, 0);
                return b + c + (s(a, Ff, 0) + s(a, Ef, 0))
            }
            function He(a, b, c) {
                for (var d = b.ra; d < c[M]; d++) {
                    var e = c[d],
                    f = ab(e, b),
                    h = e.o,
                    l = e.i;
                    if (a >= f) b.ra = d + 1,
                    Na[h][l] == b.aa && (1 == e.p && b.ea == g ? (e = t[I].v[h].aH, f = sa(h), e == g && f[Xa] && (f.autoplay = g, f[Xa]())) : 0 == e.p && b.ka[E](e));
                    else break
                }
                c = [];
                for (d = 0; d < b.ka[M]; d++) h = b.ka[d],
                f = ab(h, b),
                f = R(f + h.d, b),
                a < f ? h.i == Rf || h.i == ph ? c[E](h) : rg(h, a, b) : (f = sa(h.o), e = b.$ == g ? h.b: j, W(f, h.i, e == j ? b.$ ? h.s: h.e: e), b.ka[Vb](d, 1), d--);
                for (d = 0; d < c[M]; d++) rg(c[d], a, b);
                c = S(b);
                h = b.$ == k ? b.Oa: b.Va;
                if (h != j && 0 != h[M]) {
                    for (d = 0; d < b.pa[M]; d++) {
                        var m = b.pa[d],
                        e = m.b,
                        l = da(e),
                        f = b.$ == k ? R(m[Lb] + m[qb], b) : R(c - m[Lb], b);
                        a >= f && (qc[e] == b.aa && (f = m.G, b.$ == k && (f = m.z ? f - m[qb] : f + m[qb]), f = R(z.max(0, f), l), rc(l, k), f = Ob(f, l, g, g, k), f == k && wb(e, j)), b.pa[Vb](d, 1), d--)
                    }
                    for (d = b.ya; d < h[M]; d++) if (m = h[d], e = m.b, l = da(e), l != j && (f = b.$ == k ? m[Lb] : R(c - m[Lb] - m[qb], b), a >= f)) {
                        b.ya = d + 1;
                        var p = m.z,
                        v = m.E,
                        u = m.G;
                        b.$ == g && (u = p ? u - m[qb] : u + m[qb], u = R(u, l), p = !p);
                        var s = u,
                        r = k;
                        v && (f = a - f, f > m[qb] ? (v = k, f = m[qb]) : (b.pa[E](m), r = g), s = p ? s - f: s + f, s = R(z.max(0, s), l));
                        if (v) {
                            if (f = ib(u, e, g, g)) continue;
                            p && rc(l, p);
                            if (u != s && (f = ib(s, e, g, g))) continue;
                            b.ea ? (Xc(l, b.ca), Qc(e, p, k, k)) : wb(e, j)
                        } else wb(e, j),
                        ib(s, e, k, g);
                        r && (qc[e] = b.aa)
                    }
                }
            }
            function Ob(a, b, c, d, e) {
                Kd = g;
                var f = b.fa,
                h = b.$ ? b.Ma: b.ga,
                l = [];
                a = z.min(a * b.ca, S(b));
                for (var m = b.ra; m < h[M]; m++) {
                    var p = h[m],
                    v = ab(p, b);
                    2 == p.p && ((b.ea == g || e == g) && a >= v) && l[E](p)
                }
                e = k;
                if (0 == l[M] || d == k) He(a, b, h);
                else {
                    for (var p = d = 0,
                    s = b.ea,
                    t = b.$,
                    m = 0; m < l[M]; m++) {
                        var r = l[m],
                        v = ab(r, b);
                        if (e == g && d < v) break;
                        if (! (c == k && v != a)) {
                            if (0 == p || p != v) He(v, b, h),
                            p = v;
                            for (var r = r.s.a,
                            D = [], B = k, G = 0; G < r[M]; G++) {
                                var H = r[G];
                                7 == H.p && H.b == b.aa && (H.r = v, B = g);
                                0 == v && 3 == H.p && H.b == b.aa || D[E](H)
                            }
                            if (0 != D[M]) {
                                var U;
                                b.Ha[O](Sh) && (U = b.Ha.c);
                                var J;
                                U ? xb[O](U) ? J = xb[U][Kb]() : X[O](U) && (J = X[U][Kb]) : J = wa();
                                ca(J, D)({
                                    type: xf,
                                    timelineName: b.Ha.n
                                })
                            }
                            if (f != b.fa || b.fa == j || s != b.ea || B || t != b.$) e = g,
                            d = v
                        }
                    }
                    e == k && He(a, b, h)
                }
                yg();
                return e
            }
            function ab(a, b) {
                return b.$ ? R(S(b) - a.d - a.t, b) : a.t
            }
            function zg() {
                for (var a, b = Sa() / 1E3, c = 0; c < bb[M]; c++) {
                    var d = bb[c];
                    if (! (d.fa == j || d.ea == k || d.Ta == g)) {
                        var e = b - d.fa,
                        f = d.$ ? d.Ma: d.ga;
                        Ob(e, d, g, g) && (e = b - d.fa);
                        if (d.ea != k) {
                            var h = S(d);
                            if (e * d.ca <= h) {
                                if (0 < d.ka[M]) a = 0;
                                else if (d.ra < f[M] && (f = R((ab(f[d.ra], d) - e * d.ca) / d.ca, d), a == j || f < a)) a = f;
                                f = d.$ == k ? d.Oa: d.Va;
                                if (0 < d.pa[M]) a = 0;
                                else if (d.ya < f[M] && (f = f[d.ya], f = R(((d.$ == k ? f[Lb] : R(h - f[Lb] - f[qb], d)) - e * d.ca) / d.ca, d), f < a || a == j)) a = f
                            }
                        }
                    }
                }
                0 === a ? Ld() : a != j && n[nb](function() {
                    Md = k;
                    zg()
                },
                1E3 * a)
            }
            function Ag(a, b) {
                var c = a.Oa,
                d = [];
                if (c != j) for (var e = 0; e < c[M]; e++) {
                    var f = c[e].b,
                    h = da(f);
                    h == j || -1 != d[Qa](f) || (sc(h), b == g && Ie(h, g), ib(0, f, k, g), d[E](f))
                }
            }
            function ib(a, b, c, d) {
                qc[b] = j;
                var e = da(b);
                if (e != j) return Xc(e, 1),
                -1 == bb[Qa](e) && (wb(b), bb[E](e)),
                b = S(e),
                a > b && (a = b),
                e.$ == g && (a = b - a),
                d == g && (a = R(a, e)),
                e.ra = 0,
                e.ya = 0,
                e.ka = [],
                e.pa = [],
                d = Sa() / 1E3,
                e.fa = d - a,
                e.ja = d - e.fa,
                e.ea == g && (n[Ba](e.ua), e.ua = n[nb](function() {
                    Yc(e)
                },
                1E3 * ((b - a) / e.ca))),
                Ie(e, k),
                Ag(e, k),
                Je(e, 0),
                Bg(e, a),
                a = Ob(a, e, k, g, c),
                Ld(),
                a
            }
            function tc(a, b) {
                var c = da(a);
                if (c == j) return 0;
                var d = 0;
                c.ea == g ? (d = Sa() / 1E3 - c.fa, d *= c.ca) : d = c.ja;
                var e = S(c);
                b == g && c.$ == g && (d = e - d);
                d = z.max(0, d);
                return d = z.min(e, d)
            }
            function Bg(a, b) {
                for (var c = {},
                d = a.$ ? a.Ma: a.ga, e = 0; e < d[M]; e++) {
                    var f = d[e];
                    if (0 == f.p) {
                        var h = f.o,
                        l = f.i;
                        if (Na[h][l] == a.aa) {
                            var m = a.$ ? f.e: f.s,
                            p = a.$ ? k: f.r;
                            ab(f, a) >= b && (c[h] == j && (c[h] = {}), p != g && c[h][l] == j && (p = sa(h), m == aa && (a.$ == g && 0 == f.d) && (m = f.s), W(p, l, m)), c[h][l] = g)
                        }
                    }
                }
            }
            function Qc(a, b, c, d) {
                qc[a] = j;
                var e = da(a);
                e != j && (c && Xc(e, 1), rc(e, b), e.ea == k && (e.fa != j ? e.ja == S(e) ? d && vb(a, j, b) : (e.ea = g, e.fa = Sa() / 1E3 - e.ja / e.ca, n[Ba](e.ua), e.ua = n[nb](function() {
                    Yc(e)
                },
                1E3 * ((S(e) - e.ja) / e.ca)), e.Ta != g && (Je(e, e.ja), e.ra = 0, e.ya = 0, e.ka = [], e.pa = []), Ob(e.ja / e.ca, e, k, k)) : (d == g || 0 == e.ja) && vb(a, j, b)), Ld())
            }
            function wb(a, b) {
                qc[a] = j;
                var c = da(a);
                c != j && c.ea == g && (Xc(c, 1), c.ja = b != j ? b: Sa() / 1E3 - c.fa, c.ea = k, n[Ba](c.ua))
            }
            function Yc(a) {
                a.ca = 1;
                if (!Ob(S(a), a, g, g)) if (sc(a), Zc != j && Nd == a.aa) a = Zc,
                Nd = Zc = j,
                a();
                else if (a = {
                    type: yf,
                    timelineName: a.Ha.n
                },
                yb(a, j) !== k) {
                    var b = wa();
                    if (b != j) {
                        var c = t[Od(uc(I))].F;
                        c != j && ca(b, c.a)(a)
                    }
                }
            }
            function R(a, b) {
                return Ke(a, b.Ha.f)
            }
            function Ke(a, b) {
                var c = z.floor(a);
                return c + z[Da]((a - c) * b) / b
            }
            function S(a) {
                return R(a.Ha.d, a)
            }
            function Ld() {
                if (Md !== g) {
                    Md = g;
                    var a = function(a) {
                        n[nb](a, 1E3 / 60)
                    }; (n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || a)(function() {
                        Md = k;
                        zg()
                    })
                }
            }
            function sc(a) {
                n[Ba](a.ua);
                a.ra = 0;
                a.ya = 0;
                a.ka = [];
                a.pa = [];
                a.Fb = j;
                a.fa = j;
                a.ea = k;
                a.ca = 1;
                a.ja = S(a);
                a = bb[Qa](a); - 1 != a && bb[Vb](a, 1)
            }
            function Cg(a) {
                for (var b = 0; b < bb[M]; b++) {
                    var c = bb[b];
                    if (! (a != j && c.aa == a.aa)) for (var d = 0; d < c.ka[M]; d++) Na[c.ka[d].o][c.ka[d].i] != c.aa && (c.ka[Vb](d, 1), d--)
                }
            }
            function Je(a, b) {
                for (var c = a.ga,
                d = 0; d < c[M]; d++) {
                    var e = c[d],
                    f = e.o,
                    h = e.i,
                    e = R(ab(e, a) + e.d, a);
                    Na[f] === aa && (Na[f] = {});
                    if (e >= b && (Oa[f] === aa || Oa[f][h] === aa || Oa[f][h] == a.aa)) Na[f][h] = a.aa
                }
                Cg(a)
            }
            function vb(a, b, c) {
                qc[a] = j;
                for (var d = 0; d < Ta[M]; d++) {
                    var e = Ta[d];
                    e.aa == a && sc(e)
                }
                var f = da(a);
                if (f != j) if (f.Fb = b, bb[E](f), t[I].T[f.aa] == j && f.ob == aa && f.Ta != g) Yc(f);
                else if (a = c == k, f.Ta != g && (Ie(f, a), rc(f, c), Je(f, 0), Bg(f, 0)), f.ea = g, f.ra = 0, f.ya = 0, f.ka = [], f.pa = [], f.Ua = {},
                f.fa = Sa() / 1E3, n[Ba](f.ua), f.ua = n[nb](function() {
                    Yc(f)
                },
                1E3 * (S(f) / f.ca)), Ag(f, a), f.Ta == g || 0 < f.ga[M] || 0 < f.Oa[M]) Ob(0, f, g, g, k),
                Ld()
            }
            function Ie(a, b) {
                for (var c = 0; c < a.ga[M]; c++) {
                    var d = a.ga[c].o,
                    e = a.ga[c].i,
                    f = a.ga[c].r;
                    try {
                        if (f == g && P[d][e] != j && (b || a.ga[c].b == j)) a.ga[c].b = P[d][e]
                    } catch(h) {}
                }
            }
            function da(a) {
                for (var b = 0; b < Ta[M]; b++) {
                    var c = Ta[b];
                    if (c.aa == a) return c
                }
                for (var d in X) if (X[O](d) != k) for (var e = X[d].sb, b = 0; b < e[M]; b++) if (c = e[b], c.aa == a) return c;
                return j
            }
            function zb(a) {
                var b = t[I].T,
                c;
                for (c in b) if (b[O](c) != k && b[c].n == a) {
                    var d = k,
                    e = t[I].U,
                    f;
                    for (f in e) if (e[O](f) != k) {
                        var h = e[f].V;
                        for (a in h) if (h[O](a) != k && h[a] == c) {
                            d = g;
                            break
                        }
                        if (d == g) break
                    }
                    if (d == k) return c
                }
                return Pi
            }
            function Pd(a, b, c, d) {
                b = {
                    ra: 0,
                    ka: [],
                    ga: b,
                    aa: a,
                    Oa: c.b,
                    ea: k,
                    ja: 0,
                    ca: 1,
                    $: k,
                    pa: [],
                    ob: d,
                    Ha: c,
                    Ua: {}
                };
                for (c = 0; c < Ta[M]; c++) Ta[c].aa == a && (sc(Ta[c]), Ta[Vb](c, 1), c -= 1);
                Ta[E](b);
                return b
            }
            function rc(a, b) {
                var c = tc(a.aa, k);
                if (b != a.$) {
                    a.$ = b;
                    b == g && a.Ma == j && (a.Ma = a.ga[Ea](0), a.Ma.sort(function(b, c) {
                        var d = ab(b, a),
                        l = ab(c, a);
                        return d == l ? c.k - b.k: d - l
                    }));
                    b == g && a.Va == j && (a.Va = a.Oa[Ea](0), a.Va.sort(function(b, c) {
                        var d = R(b[Lb] + b[qb], a),
                        l = R(c[Lb] + c[qb], a);
                        return d == l ? (d = b[Lb], l = c[Lb], d == l ? c.F - b.F: l - d) : l - d
                    }));
                    var d = S(a);
                    a.ka = [];
                    a.ra = 0;
                    a.ya = 0;
                    a.pa = [];
                    a.ja = R(d - a.ja, a);
                    Dg(a, d - c);
                    a.fa != j && Ob(R(Sa() / 1E3 - a.fa, a), a, k, k)
                }
            }
            function Xc(a, b) {
                if (a.ca != b) {
                    var c = tc(a.aa, k);
                    a.ca = b;
                    Dg(a, c)
                }
            }
            function Dg(a, b) {
                a.fa != j && (a.fa = Sa() / 1E3 - b / a.ca, a.ea == g && (n[Ba](a.ua), a.ua = n[nb](function() {
                    Yc(a)
                },
                1E3 * ((S(a) - b) / a.ca))))
            }
            function Eg(a, b) {
                var c = zb(a);
                b == aa && (b = 0);
                vb(c, j, 1 == b ? g: k)
            }
            function xe(a, b, c) {
                b = t[I].T[b];
                if (b != j) {
                    b = b.a;
                    for (var d = sa(c), e = 0; e < b[M]; e++) {
                        var f = b[e];
                        if (f.o == c) {
                            var f = f.i,
                            h = Le[c];
                            h != j && h[f] != j && (W(d, f, h[f]), h[f] = j)
                        }
                    }
                    a = a ? a: n[Wb];
                    if (a[Ya] == ej || a[Ya] == pj || a[Ya] == Bf) b = t[I].v[c].aM,
                    b != j && ig(a, b, c)
                }
            }
            function ig(a, b, c) {
                var d = t[I].T[b];
                if (d != j) {
                    var d = d.a,
                    e = sa(c),
                    f = t[I].v[c].aM;
                    f != j && f != b && xe(a, f, c);
                    var h = t[I].v[c].aN;
                    a = a ? a: n[Wb];
                    a[Ya] != ej && (a[Ya] != pj && a[Ya] != Bf && h != j && h != b && f != b) && xe(a, h, c);
                    for (a = 0; a < d[M]; a++) f = d[a],
                    f.o == c && (b = f.i, f = f.e, f != j && (h = Le[c], h == j && (h = {},
                    Le[c] = h), h[b] == j && (h[b] = P[c][b]), W(e, b, f)))
                }
            }
            function W(a) {
                for (var b = arguments,
                c = 1; c < b[M]; c += 2) {
                    var d = b[c],
                    e = b[c + 1];
                    if ("undefined" != typeof e) try {
                        var f = Tc[d];
                        f != j && (P[L[a.id]][d] = e, f(a, e))
                    } catch(h) {
                        ve(he + d + de + e + $b + h)
                    }
                }
            }
            function x(a, b) {
                var c = z.pow(10, b == j ? 0 : b);
                return $ + z[Da](a * c) / c + rj
            }
            function vg(a) {
                var b = [0, 0, 0, 1];
                if (0 == a[Qa](vj)) {
                    var c = a[Qa](Ec),
                    d = a[Qa](Fc);
                    if (3 < d - c) {
                        a = a.substring(c + 1, d).split(Hc);
                        for (c = 0; c < a[M]; c++) b[c] = ja(a[c])
                    }
                } else {
                    a[Ka](0) == ic && (a = a[Ea](1));
                    a = a.toUpperCase();
                    d = ea.$a;
                    for (c = 0; 3 > c; c++) b[c] = 16 * d[Qa](a[Ka](2 * c)) + d[Qa](a[Ka](2 * c + 1))
                }
                return b
            }
            function ug(a) {
                typeof a != jj && (a = ja(a));
                return isNaN(a) ? 0 : a
            }
            function Fg(a, b, c) {
                Qd = k;
                c != j && delete t[I].T[c];
                ta(b[Z], Lh);
                W(b, Dh, 0, eh, 0);
                Ra(b, lf, pd);
                W(b, ph, 0, Rf, 0, ek, 1, qi, 1);
                c = t[I].a;
                c != j ? (ka(b[Z], ud), ka(F[Z], c + jc)) : (ka(b[Z], x(t[I].Y)), ka(F[Z], b[Z][Ca]));
                c = t[I].b;
                c != j ? (ua(b[Z], ud), ua(F[Z], c + jc)) : (ua(b[Z], x(t[I].Z)), ua(F[Z], b[Z][Ub]));
                Nb[F.id] = j;
                Nb[b.id] = j;
                P[L[a.id]] && (a != j && a != b) && (ta(a[Z], ij), a[K](kh, g), W(a, Dh, 0, eh, 0, ph, 0, Rf, 0, ek, 0, qi, 1), Ra(a, lf, pd));
                F[Z][jd] = j;
                F[Z][ea.na + Vj] = zi;
                F[Z][Lc] = j;
                F[Z].perspective = j;
                c = [];
                a = t[I].v;
                for (var d in a) if (a[O](d) != k) {
                    var e = a[d],
                    f = e.cL;
                    if (f) {
                        c[E](f);
                        var h = X[f][Kb];
                        P[L[h.id]] = j;
                        var l = q[Va](e.k);
                        qa(l, e.cP ? te + e.cP: se);
                        l.id = h.id;
                        l[Z].pointerEvents = oh;
                        for (l[Z][oj] = oh; 0 < h.childNodes[M];) l[A](h.childNodes[0]);
                        h[Sb][A](l);
                        h[Sb][Eb](h);
                        h = l;
                        l = X[f].element = h;
                        if (l[Sb][mb] == bf) {
                            var l = l[Sb],
                            m = l[Z];
                            if (e.bR != j || e.aY != j) {
                                var p = t[I].p;
                                m[jd] = p;
                                ra(m, p);
                                m.perspective = p
                            } else m[jd] = $,
                            ra(m, $),
                            m.perspective = $
                        }
                        b[A](l);
                        Me(e, h, h.id, k);
                        e = Rd(h);
                        for (h = 0; h < e[M]; h++) {
                            m = e[h];
                            l = a[L[m.id]];
                            for (p = 0; 2 > p; p++) for (var v = 0; v < $c[M]; v++) {
                                var u = $c[v];
                                if (l[O](u) != k) {
                                    var w = 0 == p ? k: g;
                                    if (u == Xf || u == Yf) w = 0 == p ? g: k;
                                    w != k && W(m, u, l[u])
                                }
                            }
                        }
                        f = X[f].sb;
                        for (h = 0; h < f[M]; h++) Ta[E](f[h])
                    }
                }
                f = q[Ha](cf);
                for (d in X) if (X[O](d) != k) {
                    e = k;
                    for (h = 0; h < c[M]; h++) if (c[h] === d) {
                        e = g;
                        break
                    }
                    e == k && (h = X[d][Kb], h[Sb][mb] == bf && (h = h[Sb]), f[A](h))
                }
                F[Mb](kh);
                F[Mb](jh);
                b[Mb](kh);
                vb(Pi, j, k);
                d = Rd(wa());
                for (h = 0; h < d[M]; h++) if (e = d[h], Gg(e) != k) {
                    if (f = a[L[e.id]].cL) {
                        c = X[f];
                        if (c.zb) continue;
                        c.zb = g
                    }
                    c = {
                        type: vf
                    };
                    yb(c, e); (f = s(e, Yh)) && ca(e, f.a)(c)
                }
                a = {
                    type: sf
                };
                yb(a, j) !== k && (d = t[Od(L[b.id])].A, d != j && (d = d.a, ca(wa(), d)(a)));
                a = jb(b);
                b = Hg(b);
                for (d = 0; d < b[M]; d++) if (c = b[d], h = q[Ha](c), c = t[a].v[L[c]], c != j) for (f = 0; f < Sd[M]; f++) e = Sd[f],
                c[O](e) != k && W(h, e, c[e])
            }
            function Ig(a, b) {
                var c = jb(a),
                d = Hg(a);
                Kd = g;
                for (var e = 0; e < d[M]; e++) {
                    var f = d[e],
                    h = q[Ha](f),
                    l = t[c].v[L[f]];
                    l != j && Me(l, h, f, b)
                }
                yg()
            }
            function Hg(a) {
                a = Rd(a);
                for (var b = [], c = 0; c < a[M]; c++) b[E](a[c].id);
                return b
            }
            function Me(a, b, c, d) {
                var e = [th, Fh, Jj, Kj, ph, Rf, Sh, li, Oi],
                f = L[c];
                P[f] == j && (P[f] = {});
                var f = jb(b),
                h = t[f].U[L[c]];
                if (h) {
                    var l = function(a) {
                        return h.V[a] || h.W
                    };
                    xb[L[c]] = {
                        symbolName: function() {
                            return h.n
                        },
                        element: function() {
                            return b
                        },
                        getSymbolInstancesByName: function(a) {
                            a = Jg(a);
                            for (var c = [], d = 0; d < a[M]; d++) for (var e = a[d], f = e[Kb]().parentElement; f != j;) {
                                if (f == b) {
                                    c[E](e);
                                    break
                                }
                                f = f.parentElement
                            }
                            return c
                        },
                        startTimelineNamed: function(a, b) {
                            vb(l(a), j, 1 == b ? g: k)
                        },
                        pauseTimelineNamed: function(a) {
                            wb(l(a), j)
                        },
                        continueTimelineNamed: function(a, b, c) {
                            Qc(l(a), 1 == b ? g: k, g, c)
                        },
                        goToTimeInTimelineNamed: function(a, b) {
                            ib(a, l(b), k, k)
                        },
                        currentTimeInTimelineNamed: function(a) {
                            return tc(l(a), g)
                        },
                        durationForTimelineNamed: function(a) {
                            return S(da(l(a)))
                        },
                        currentDirectionForTimelineNamed: function(a) {
                            return da(l(a)).$ ? 1 : 0
                        },
                        isPlayingTimelineNamed: function(a) {
                            return da(l(a)).ea
                        }
                    }
                }
                hk == k && a.bE == j && Ra(b, lf, sd);
                for (c = 0; c < e[M]; c++) f = e[c],
                W(b, f, a[f]);
                $c[E](Uh, Vh, Wh, Xh, Yh, Th);
                for (var m in a) if (a[O](m) != k) {
                    e = g;
                    for (c = 0; c < Sd[M]; c++) if (Sd[c] == m) {
                        e = k;
                        break
                    }
                    if (e != k) {
                        if (d == g) for (c = 0; c < $c[M]; c++) if ($c[c] == m) {
                            e = k;
                            break
                        }
                        e != k && W(b, m, a[m])
                    }
                }
            }
            function kk() {
                ad[Vb](0, 1)
            }
            function Td(a) {
                ad[E](Ud(a));
                n[nb](kk, 2500)
            }
            window.Vd = function(a) {
                for (var b = 0; b < ad[M]; b++) {
                    var c = Ud(a);
                    25 > z.abs(c.x - ad[b].x) && 25 > z.abs(c.y - ad[b].y) && (a.stopPropagation(), a[La]())
                }
            }
            function Jg(a) {
                var b = [],
                c = t[I].U,
                d;
                for (d in c) c[O](d) != k && c[d].n == a && b[E](xb[d]);
                return b
            }
            function hg(a) {
                var b = {
                    type: zf,
                    customBehaviorName: a
                },
                c = Wd[a];
                if (c != j) for (var d = 0; d < c[M]; d++) c[d](b);
                for (var e in X) X[O](e) != k && (c = X[e].kb[a], c != j && c(b));
                yb(b, j)
            }
            function Kg(a, b, c) {
                c ? X[c].kb[a] = b: (c = Wd[a], c == j && (c = [], Wd[a] = c), c[E](b))
            }
            function Ne(a, b, c, d) {
                function e(a) {
                    a = a ? a: n[Wb]; (32 == a.keyCode || 13 == a.keyCode) && f(a)
                }
                function f(a) {
                    a = a ? a: n[Wb];
                    if (a[Ya] == dj) {
                        for (var e = k,
                        f = 0; f < bd[M]; f++) if (bd[f] == c) {
                            e = g;
                            break
                        }
                        if (e == g) return;
                        bd[E](c)
                    } else if (a[Ya] == cj) {
                        e = jb(b);
                        if (t[e].v[L[b.id]] == j) return;
                        a || (a = n[Wb]);
                        for (e = q.elementFromPoint(a[hb], a[lb]); e != j && e != this && e.nodeName != le;) e = e[Sb];
                        if (e == this) return;
                        bd = []
                    } else if (a[Ya] == aj) {
                        if (a[pb] == g || 0 != a[Pa]) return
                    } else a[Ya] == Tj ? 0 < a[tb][M] && Td(a[tb][0]) : a[Ya] == Rj && 0 < a[eb][M] && Td(a[eb][0]);
                    if (d == g && (a[Ya] == $i || a[Ya] == ej || a[Ya] == Rj)) {
                        if (0 < Xd) return;
                        Yd = g
                    }
                    c(a)
                }
                if (a == ii || a == ej) a = n.navigator.Ib ? pj: n.navigator.msPointerEnabled ? Bf: ej;
                xa(a, f, b, g);
                a == ii ? xa(Ri, e, b, g) : a == aj ? xa(Qi, e, b, g) : a == ej && xa(Si, e, b, g)
            }
            function ya(a, b, c, d) {
                Ne(a, b, c, d);
                a == dj ? Ne(cj, b,
                function() {},
                d) : a == cj && Ne(dj, b,
                function() {},
                d)
            }
            function Pb(a, b, c) {
                c = {
                    Ea: j,
                    wa: si,
                    Ka: 0,
                    Ca: j,
                    Ra: 0,
                    tb: 0,
                    ab: 0,
                    pb: 0,
                    lb: 0,
                    mb: 0,
                    fb: j,
                    eb: j,
                    la: j,
                    ha: k,
                    Za: k,
                    options: b,
                    gb: c,
                    Qa: a
                };
                xa(Tj, Lg(c), a, g);
                if (b.da == pi || b.da == Ij) {
                    var d = a == q ? F: a;
                    d[Z].msTouchAction = ij;
                    d[Z].Kb = ij
                }
                b.da != Mj && xa(aj, Lg(c), a, g)
            }
            function Mg(a, b) {
                for (var c = {
                    Da: 1,
                    wb: g,
                    da: pi
                },
                d = b.a, e = g, f = 0; f < d[M]; f++) {
                    var h = d[f],
                    l = h.p;
                    0 != l && (e = k);
                    10 == l && h.b != j ? (c.oa == j && (c.oa = []), c.oa[E]({
                        b: h.b,
                        c: h.c,
                        A: h.A,
                        y: h.y,
                        K: 100 / h.K
                    })) : 11 == l && (c.Ia = a)
                }
                e == k && Pb(a, c, ca(a, d))
            }
            function Lg(a) {
                return function(b) {
                    a.ha = b[Ya] == Tj;
                    if (a.ha) 0 < b[tb][M] && a[Gb].da == Mj && Td(b[tb][0]),
                    a.Ka = b[tb][M];
                    else {
                        if (b[pb] == g || 0 != b[Pa]) return;
                        b[La] && b[La]()
                    }
                    if (a.ha == k || 1 === a.Ka) {
                        a.wa = Fj;
                        a.Ea = j;
                        for (var c = [], d = 0; 5 >= d; d++) c[E]({
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            },
                            lastPosition: {
                                x: 0,
                                y: 0
                            }
                        });
                        a.Ca = c;
                        a.Fa = aa;
                        a.Za = k;
                        var c = a.ha ? b[tb][0] : b,
                        e;
                        e = function(b) {
                            Oe(a);
                            a.wa = gi;
                            Zd(b, a)
                        };
                        a.la = e;
                        b = a.ha ? a.Qa: q;
                        a.ha ? xa(Qj, a.la, b, k) : n.self != n.top && (d = function(a) { (a.relatedTarget === q.documentElement || a.toElement === j) && e(a)
                        },
                        a.la = d, xa(cj, d, b, k));
                        c = Ud(c);
                        d = a.Ca[0];
                        d[Hb].x = c.x;
                        d.end.x = c.x;
                        d[Aa].x = c.x;
                        d[Hb].y = c.y;
                        d.end.y = c.y;
                        d[Aa].y = c.y;
                        Ng(a, c);
                        a.fb = function(b) {
                            if (! (a.wa === si || a.wa === gi)) if (Yd == g) a.la(b);
                            else {
                                var c = a[Gb];
                                if (a.Sa == k && (Xd++, a.Sa = g, c.da == pi)) {
                                    $d = g;
                                    if (c.oa != j) for (var d = 0; d < c.oa[M]; d++) {
                                        var e = c.oa[d].b,
                                        p = da(e);
                                        wb(e, j);
                                        rc(p, k);
                                        a.tb = tc(p.aa, k);
                                        for (var t = p.ga,
                                        u = 0; u < t[M]; u++) {
                                            var w = t[u].o,
                                            r = t[u].i;
                                            Oa[w] === aa && (Oa[w] = {});
                                            Oa[w][r] = p.aa
                                        }
                                    }
                                    c.Ia != j && (d = L[c.Ia.id], a.lb = P[d].a, a.mb = P[d].b, Na[d] != aa && (Na[d].a = j, Na[d].b = j, Cg(j)), Oa[d] === aa && (Oa[d] = {}), Oa[d].a = ri, Oa[d].b = ri);
                                    Zd(b, a)
                                }
                                t = Ud(a.ha ? b[tb][0] : b);
                                r = a.Ca[0];
                                r[Aa].x = r.end.x;
                                r[Aa].y = r.end.y;
                                a.ab = a.pb;
                                r.end.x = a.ha ? b[tb][0].pageX: t.x;
                                r.end.y = a.ha ? b[tb][0].pageY: t.y;
                                u = Sa();
                                a.pb = u;
                                u -= a.Ra;
                                a.Ea = Og(r[Hb], r.end, u);
                                a.ha && (a.Ka = b[tb][M]);
                                a.wa = fj;
                                if (c.da == pi) {
                                    b[La] && b[La]();
                                    var u = w = 0,
                                    D = 1,
                                    B = 1;
                                    if (a.Qa != j) for (var G = De(L[a.Qa.id]); G != j && G != ba;) d = sa(G),
                                    w += s(d, Rf, 0),
                                    u += s(d, ph, 0),
                                    D *= s(d, $h, 1),
                                    D *= s(d, nf, 1),
                                    B *= s(d, ai, 1),
                                    B *= s(d, of, 1),
                                    G = De(G);
                                    if (c.oa != j) for (d = 0; d < c.oa[M]; d++) {
                                        var H = c.oa[d],
                                        e = H.b;
                                        if (p = da(e)) {
                                            var p = S(p),
                                            U = Pg(H),
                                            J;
                                            U == yj ? J = (r.end.x - r[Hb].x) / D: U == Ui ? J = (r[Hb].x - r.end.x) / D: U == Xj ? J = (r[Hb].y - r.end.y) / B: U == oi && (J = (r.end.y - r[Hb].y) / B);
                                            H = J / H.K;
                                            H += a.tb;
                                            H = z.min(p, H);
                                            H = z.max(0, H);
                                            ib(H, e, k, g)
                                        } else a.la(b)
                                    }
                                    c.Ia != j && (d = L[c.Ia.id], J = a.lb + (r.end.x - r[Hb].x) / D, r = a.mb + (r.end.y - r[Hb].y) / B, nc == k && (G = og(G), B = Vc(d), J = z.max(J, -B / 2 - w), J = z.min(J, G[Ca] - B / 2 - w), w = Wc(d), r = z.max(r, -w / 2 - u), r = z.min(r, G[Ub] - w / 2 - u)), W(c.Ia, Rf, J, ph, r));
                                    Zd(b, a)
                                } else c.da == Ij ? 1 < a.Ka ? a.la(b) : (b[La] && a.Ea == c[va] && b[La](), J = c[va] == yj || c[va] == Ui ? r.end.x: r.end.y, G = k, G = c[va] == yj || c[va] == oi ? 20 < a.Fa - J: 20 < J - a.Fa, c = a.Ea === c[va] || 100 > u, (G || c == k || $d == g) && a.la(b)) : c.da == Mj && 5 < Pe(r[Hb], r.end) && a.la(b);
                                Ng(a, t)
                            }
                        };
                        xa(a.ha ? Sj: bj, a.fb, b, k);
                        a.eb = function(b) {
                            if (! (a.wa === si || a.wa === gi) && !(b[tb] && 0 < b[tb][M])) if (Yd == g && 0 < Xd) a.la(b);
                            else {
                                var c = a[Gb];
                                b[Ya] == Rj && 0 < b[eb][M] && c[Ya] == Mj && Td(b[eb][0]);
                                var d = Sa(),
                                e = d - a.Ra,
                                p = a.Ca[0];
                                a.Ea = Og(p[Hb], p.end, e);
                                a.wa = si;
                                var t = 1 === a.Ka || !a.ha,
                                s = 0 !== p.end.x;
                                if (c.da == pi) {
                                    if (a.Sa == k) {
                                        Oe(a);
                                        return
                                    }
                                    Oa = {};
                                    if (c.oa != j) {
                                        t = (d - a.ab) / 1E3;
                                        for (s = 0; s < c.oa[M]; s++) {
                                            var w = c.oa[s],
                                            d = w.b,
                                            e = da(d),
                                            r = w.y;
                                            if (e) {
                                                var D = S(e),
                                                B = Pg(w),
                                                G = w.K,
                                                H = k,
                                                U = k,
                                                J = 1;
                                                if (r == g) if (r = 0, r = 0 == w.c ? z.abs(p[Aa].x - p.end.x) / t: z.abs(p[Aa].y - p.end.y) / t, r *= 2, 20 < r) H = g,
                                                U = p[Aa],
                                                J = p.end,
                                                U = z[Da](180 * z.atan2(J.y - U.y, J.x - U.x) / z.PI),
                                                U = (0 == w.c ? 90 <= U || -90 >= U ? Ui: yj: 0 >= U && -180 <= U ? Xj: oi) != B,
                                                J = r / G;
                                                else {
                                                    B = w = tc(e.aa, k);
                                                    for (r = G = 0; r < e.ga[M]; r++) {
                                                        var F = e.ga[r];
                                                        if (2 == F.p) {
                                                            for (var y = F.s.a,
                                                            L = k,
                                                            x = 0; x < y[M]; x++) {
                                                                var $a = y[x];
                                                                if (7 == $a.p && $a.b != j && $a.b == d) {
                                                                    L = g;
                                                                    break
                                                                }
                                                            }
                                                            L == g && (F = F.t, y = z.abs(F - w), y < B && (B = y, G = F))
                                                        }
                                                    }
                                                    D - w < B && (G = D, B = D - w);
                                                    0 != B && (H = g, U = G < w, J = z.abs(G - w) / 0.2)
                                                }
                                                rc(e, U);
                                                Xc(e, J);
                                                H == g && e.ja != D ? Qc(d, U, k, k) : ib(U ? D - e.ja: e.ja, d, g, g)
                                            }
                                        }
                                    }
                                    Zd(b, a)
                                } else c.da == Ij ? (d = a.Ea === c[va], p = Pe(p[Hb], p.end), t && (s && d) && p > c.Pa ? (b = {
                                    type: uf + c[va][Ka](0).toUpperCase() + c[va][Ea](1) + ie
                                },
                                a.gb(b)) : a.la(b)) : c.da == Mj ? 1500 > e && a.gb(b) : a.la(b);
                                Oe(a)
                            }
                        };
                        xa(a.ha ? Rj: ej, a.eb, b, k);
                        b.setCapture && b.setCapture();
                        a.Ra = Sa();
                        a.ab = a.Ra;
                        $d = Yd = a.Sa = k
                    }
                }
            }
            function Oe(a) {
                if (a.Za != g) {
                    a.Za = g;
                    Oa = {};
                    var b = a.ha ? a.Qa: q;
                    b.releaseCapture && b.releaseCapture();
                    cd(a.ha ? Sj: bj, a.fb, b);
                    cd(a.ha ? Rj: ej, a.eb, b);
                    a.ha ? cd(Qj, a.la, b) : cd(cj, a.la, b);
                    a[Gb].da == pi && ($d = k);
                    a.Sa == g && Xd--
                }
            }
            function Zd(a, b) {
                b[Gb].wb == g && (a.hypeGesturePhase = b.wa, a.hypeGestureXPosition = b.Ca[0].end.x, a.hypeGestureYPosition = b.Ca[0].end.y, b.gb(a))
            }
            function cd(a, b, c) {
                c[ob] ? c[ob](a, b, k) : c[Jb] && c[Jb](kj + a, b)
            }
            function xa(a, b, c, d) {
                var e = {
                    eventType: a,
                    handler: b,
                    element: c
                };
                d && ae[E](e);
                c[Wa] ? c[Wa](a, b, k) : c[cb] && c[cb](kj + a, b);
                lg(c)
            }
            function Ud(a) {
                var b = {};
                if (a.pageX || a.pageY) b.x = a.pageX,
                b.y = a.pageY;
                else if (a[hb] || a[lb]) b.x = a[hb] + q[Db].scrollLeft + q.documentElement.scrollLeft,
                b.y = a[lb] + q[Db].scrollTop + q.documentElement.scrollTop;
                return b
            }
            function Pg(a) {
                var b;
                0 == a.c ? 0 == a.A ? b = yj: 1 == a.A && (b = Ui) : 1 == a.c && (0 == a.A ? b = Xj: 1 == a.A && (b = oi));
                return b
            }
            function Ng(a, b) {
                var c = a[Gb],
                d = c[va] == yj || c[va] == Ui ? b.x: b.y;
                a.Fa = a.Fa == aa ? d: c[va] == yj || c[va] == oi ? z.max(a.Fa, d) : z.min(a.Fa, d)
            }
            function Og(a, b, c) {
                a = z[Da](180 * z.atan2(b.y - a.y, b.x - a.x) / z.PI);
                c = z.min(45, 45 * c / 2E3);
                if (a >= 135 + c || a <= -135 - c) return Ui;
                if (a <= 45 - c && a >= -45 + c) return yj;
                if (a < -45 - c && a > -135 + c) return Xj;
                if (a > 45 + c && a < 135 - c) return oi
            }
            function we(a) {
                for (var b = vc[a], c = {},
                d = 0; d < b[M]; d++) {
                    var e = y[b[d]].t;
                    w.jb != j && e == nh || (c[e] = be(b[d]))
                }
                b = -1 != Mc[Qa](dk) && w.xa != j && 537 <= w.ta;
                b = ("undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext) && -1 == n[sb].href[Qa](xi) && -1 == Mc[Qa](Li) && b == k && ga.onLine != k && w[Ua] == j ? Qg: Rg;
                d = {};
                d.cb = w.xa != j;
                var f = Qe[a];
                if (f == j) {
                    try {
                        f = new b(a, c)
                    } catch(h) {
                        b == Qg && (f = new Rg(a))
                    }
                    f.Hb = a;
                    f.Wa = c;
                    f.options = d;
                    f.rb = function() {
                        var a = [],
                        b;
                        for (b in f.Wa) f.Wa[O](b) != k && a[E](b);
                        return a.sort()
                    }
                }
                return f
            }
            function jk(a, b) {
                var c = we(a);
                ma(c, b);
                c[Xa]()
            }
            function Sg(a) {
                a = vc[a];
                if (a != j) {
                    for (var b = 1 < n.devicePixelRatio,
                    c = k,
                    d = j,
                    e = 0; e < a[M]; e++) {
                        var f = a[e],
                        h = y[f].t;
                        if (h == fe) d = f,
                        c = g;
                        else if (h == ge) {
                            if (c == k || b == g) d = f;
                            if (b == g) break
                        } else c == k && (d = f)
                    }
                    return d
                }
            }
            function Re(a) {
                a = Qb[Qa](a); - 1 != a && Qb[Vb](a, 1);
                0 >= Qb[M] && Tg()
            }
            function lk(a) {
                var b = y[a].p;
                if (1 == b) if (b = y[a].g, b != j && Sg(b) != a) Re(a);
                else {
                    var b = new Image,
                    c = function() {
                        Re(a)
                    },
                    d = be(a);
                    b.onload = c;
                    b.onerror = c;
                    b.onabort = c;
                    b.src = d;
                    b.Jb = a
                } else 2 == b && (b = function() {
                    for (var b = vc[y[a].g], c = 0; c < b[M]; c++) {
                        var d = b[c];
                        y[d].p != j && Re(d)
                    }
                },
                c = we(y[a].g), w.xa != j && 536.26 > w.ta || 9 > w.ia ? n[nb](b, 1) : c.load(b, b))
            }
            function Tg() {
                Dd != j && Dd(k, F);
                if (yb({
                    type: qf
                },
                F) !== k) if ( - 1 == ue) Pc(Ma);
                else {
                    wc = g;
                    for (var a = -1,
                    b = 0; b < Ia[M]; b++) {
                        for (var c = Ia[b].X, d = 0; d < c[M]; d++) if (c[d] == ue) {
                            a = b;
                            break
                        }
                        if ( - 1 != a) break
                    } - 1 == a && (a = 0);
                    Ma = a;
                    ce(ue)
                }
            }
            function be(a) {
                a = y[a];
                var b = a.n;
                return b == j ? j: a.r == g ? $ + b: $ + Mc + od + b
            }
            function Od(a) {
                for (var b = 0; b < t[M]; b++) if (t[b].o == a) return b;
                return - 1
            }
            function uc(a) {
                a = t[a];
                return a == j ? j: a.o
            }
            function wa() {
                return sa(uc(I))
            }
            function Rd(a) {
                return a.getElementsByClassName(qe)
            }
            function kb(a, b, c, d, e, f, h, l, m) {
                a[E]({
                    i: b,
                    t: c,
                    d: d,
                    f: e,
                    o: f,
                    s: h,
                    e: l,
                    r: m,
                    p: 0
                })
            }
            function Se(a, b, c, d, e) {
                b = {
                    i: a,
                    n: a,
                    f: 30,
                    d: b,
                    a: c,
                    b: []
                };
                F[K](jh, g);
                F[K](kh, g);
                t[I].T[a] = b;
                Pd(a, c, b);
                Nd = a;
                Zc = function() {
                    Fg(d, e, a)
                };
                vb(a, j, k)
            }
            function dd(a, b, c, d) {
                var e = F[Sb][Ja],
                f = a[Ib](ef),
                h = b[Ib](ef);
                if (P[L[a.id]]) {
                    var l = xc(f),
                    m = yc(f);
                    W(a, Sh, l, li, m)
                }
                a = xc(h);
                h = yc(h);
                W(b, Sh, a, li, h);
                c && (c = l, a > c && (c = a), ka(F[Z], x(c)), Nb[F.id] = j, F[Z].margin == oh && W(b, Rf, z.max(0, (l < a ? e < c ? e - l: c - l: e < c ? e - a: c - a) / 2)));
                d && (b = m, h > b && (b = h), ua(F[Z], x(b)))
            }
            function yc(a) {
                var b = F[Sb].offsetHeight,
                c = t[a].b;
                return c != j ? c / 100 * b: t[a].Z
            }
            function xc(a) {
                var b = F[Sb][Ja],
                c = t[a].a;
                return c != j ? c / 100 * b: t[a].Y
            }
            function ce(a, b, c, d) {
                if (! (uc(a) == j || Qd == g)) {
                    c == j && (c = 1.1);
                    c = Ke(c, 60);
                    Qd = g;
                    var e = function() {
                        d != j && d();
                        Ta = [];
                        Wd = {};
                        var e = wa();
                        nc = t[a].a != j || t[a].b != j ? g: k;
                        var f = uc(a),
                        h = I,
                        l = wa();
                        if (l != j) for (var l = l[gb](ak), m = 0; m < l[M]; m++) l[m][Cb] && l[m][Cb]();
                        l = bb[Ea](0);
                        for (m = 0; m < l[M]; m++) l[m].ob == aa && sc(l[m]);
                        var m = [],
                        p;
                        for (p in xb) if (xb[O](p) != k) {
                            var l = k,
                            r;
                            for (r in ub) if (ub[O](r) != k) {
                                for (var u = 0; u < ub[r][M]; u++) if (p == ub[r][u]) {
                                    l = g;
                                    break
                                }
                                if (l == g) break
                            }
                            l == k && m[E](p)
                        }
                        for (l = 0; l < m[M]; l++) delete xb[m[l]];
                        bd = [];
                        I = Od(f);
                        p = sa(f);
                        r = p[Ib](ef);
                        if (w.xa != j && (l = wa(), l != j)) {
                            l = l[gb](ak);
                            for (m = 0; m < l[M]; m++) {
                                u = l[m];
                                la(u, $);
                                var v = u.outerHTML,
                                y = u[Sb];
                                y[Eb](u);
                                la(y, y.innerHTML + v)
                            }
                        }
                        if (Oc != j) {
                            for (l = 0; l < Fd[M]; l++) Fd[l].destroy();
                            Fd = []
                        }
                        l = sa(f);
                        P[f] = {};
                        var f = [],
                        m = t[h].v,
                        x;
                        for (x in m) if (m[O](x) != k) {
                            var C = m[x]; (h = C.cL) && f[E](h)
                        }
                        h = l[Ib](ef);
                        m = t[h].v;
                        u = [];
                        v = [];
                        y = 0;
                        for (x in m) if (m[O](x) != k && (C = m[x], h = C.cL)) {
                            for (var T = k,
                            Q = 0; Q < f[M]; Q++) if (f[Q] === x) {
                                T = g;
                                break
                            }
                            var R = X[h][Kb],
                            Q = R;
                            Q[Sb][mb] == bf && (Q = R[Sb]);
                            if (T) {
                                if (P[L[R.id]]) {
                                    for (var C = R,
                                    da = T = 0; C && C.id != ba;) T += s(C, Rf, 0),
                                    da += s(C, ph, 0),
                                    C = C[Sb];
                                    W(R, Rf, T, ph, da)
                                }
                                F[A](Q);
                                X[h].xb ? na(Q[Z], Q[Z][fb] + 100) : (v[E](Q), Q[Z][fb] > y && (y = Q[Z][fb]))
                            } else u[E]([Q, R, C]);
                            X[h].nb == k && (Ig(Q, g), X[h].nb = g)
                        }
                        for (Q = 0; Q < v[M]; Q++) R = v[Q],
                        na(R[Z], R[Z][fb] - y - 1);
                        Ig(l, k);
                        for (Q = 0; Q < u[M]; Q++) l[A](u[Q][0]),
                        R = u[Q][1],
                        C = u[Q][2],
                        Me(C, R, R.id, g);
                        x = t[r].T;
                        for (var N in x) x[O](N) != k && (h = t[I].T[N], h.s == aa && Pd(N, h.a, h));
                        N = {
                            C: Qi,
                            D: Si,
                            E: Ri
                        };
                        for (var Y in N) N[O](Y) == k || t[r][Y] == j || (x = ca(wa(), t[r][Y].a), h = N[Y], zc[h] = x, q[Wa] ? q[Wa](h, x, k) : q[cb] && q[cb](kj + h, x));
                        Y = t[r].L;
                        for (l = 0; l < Y[M]; l++) N = Y[l].B,
                        x = ca(wa(), Y[l].a),
                        Kg(N, x, j);
                        Y = {
                            G: Ui,
                            H: yj,
                            I: Xj,
                            J: oi
                        };
                        for (var V in Y) if (Y[O](V) != k && (N = t[r][V])) {
                            N = N.a;
                            x = g;
                            for (l = 0; l < N[M]; l++) if (0 != N[l].p) {
                                x = k;
                                break
                            }
                            x == k && (N = ca(wa(), N), Pb(p, {
                                Da: 1,
                                direction: Y[V],
                                Pa: 30,
                                da: Ij
                            },
                            N))
                        } (V = t[r].K) && Mg(q, V);
                        V = wa();
                        if (2 == b) {
                            dd(e, V, g, g);
                            var ia = c,
                            S = [];
                            na(V[Z], 1);
                            kb(S, qi, 0, ia, ph, L[V.id], 0, 1);
                            if (e != j) if (na(e[Z], 0), eg == k) {
                                var oa = L[e.id];
                                kb(S, qi, 0, ia, ph, oa, 1, 0)
                            } else if (e[Z][Ca] != V[Z][Ca] || e[Z][Ub] != V[Z][Ub]) oa = L[e.id],
                            kb(S, qi, ia / 2, ia / 2, ph, oa, 1, 0);
                            W(V, qi, 0);
                            Se(hf, ia, S, e, V);
                            ta(V[Z], Lh)
                        } else 3 == b && w.Na == g ? (dd(e, V, g, g), Y = c, p = kb, r = W, N = F[Z], N[jd] = vd, ra(N, vd), N.perspective = vd, N[ea.na + Vj] = qj, N.MozTransformStyle = qj, N[Vj] = qj, x = F[Ja], N = x / 4, x /= 2, h = -1 * N, f = -1 * x, l = Y / 2, u = V[Ib](ef), m = xc(u), u = yc(u), v = [], e != j && (ia = L[e.id], Ra(e, lf, sd), oa = e[Ib](ef), S = xc(oa), oa = yc(oa), r(e, ek, 1, Dh, 0, Sh, S, li, oa), p(v, Rf, 0, l, li, ia, 0, x), p(v, Dh, 0, l, li, ia, 0, -300), p(v, eh, 0, l, li, ia, 0, -20), p(v, ek, 0, l, Rf, ia, 1, 0)), y = L[V.id], Ra(V, lf, sd), p(v, Rf, 0, l, li, y, h, f), p(v, Dh, 0, l, li, y, -600, -300), p(v, eh, 0, l, li, y, 50, 40), p(v, ek, 0, l, Rf, y, 0, 1), e != j && (p(v, Rf, l, l, qi, ia, x, N), p(v, Dh, l, l, qi, ia, -300, -600), p(v, eh, l, l, qi, ia, -20, -50), (S != m || oa != u) && p(v, qi, l, l, li, ia, 1, 0)), p(v, Rf, l, l, qi, y, f, 0), p(v, Dh, l, l, qi, y, -300, 0), p(v, eh, l, l, qi, y, 40, 0), r(V, Rf, N, Dh, -600, eh, 50, ek, 0, Sh, m, li, u), Se(kf, Y, v, e, V), ta(V[Z], Lh)) : 4 == b || 5 == b || 6 == b || 7 == b ? (ia = c, S = [], p = e[Ib](ef), r = V[Ib](ef), oa = xc(p), Y = xc(r), p = yc(p), r = yc(r), 5 == b || 4 == b ? (dd(e, V, k, g), oa != Y && (kb(S, Sh, 0, ia, Sh, ba, oa, Y), P[ba] = {},
                        P[ba].c = oa, P[ba].d = p > r ? p: r, P[ba].a = 0, P[ba].b = 0)) : (dd(e, V, g, k), p != r && (kb(S, li, 0, ia, Sh, ba, p, r), P[ba] = {},
                        P[ba].c = oa > Y ? oa: Y, P[ba].d = p, P[ba].a = 0, P[ba].b = 0)), N = Rf, x = Y, h = -1 * Y, 5 == b ? (x = -1 * oa, h = oa) : 6 == b ? (N = ph, x = -1 * p, h = p) : 7 == b && (N = ph, x = r, h = -1 * r), e != j && (f = L[e.id], W(e, Sh, oa, li, p), kb(S, N, 0, ia, Sh, f, 0, x)), kb(S, N, 0, ia, Sh, L[V.id], h, 0), W(V, Sh, Y, li, r, N, h), Se(jf, ia, S, e, V), ta(V[Z], Lh)) : (dd(e, V, k, k), Fg(e, V, j));
                        Rb()
                    },
                    f = k,
                    h = wa();
                    h[Mb](kh);
                    if (Ug == g && h != j) {
                        var h = Od(uc(I)),
                        l = {
                            type: tf
                        };
                        if (yb(l, j) !== k) {
                            var m = t[h].B;
                            if (m != j) {
                                for (var p = m.a,
                                v = ca(wa(), p), m = 0; m < p[M]; m++) {
                                    var u = p[m],
                                    y = u.b;
                                    3 == u.p && (y != j && t[h].T[y] != j) && (f = g, Nd = y, Zc = e)
                                }
                                v(l)
                            }
                        }
                        l = Rd(wa());
                        for (m = 0; m < l[M]; m++) p = l[m],
                        Gg(p) != k && !t[h].v[L[p.id]].cL && (v = {
                            type: wf
                        },
                        yb(v, p), (u = s(p, Th)) && ca(p, u.a)(v));
                        for (var r in zc) zc[O](r) != k && (q[ob] ? q[ob](r, zc[r], k) : q[Jb] && q[Jb](kj + r, zc[r]));
                        zc = {};
                        for (m = 0; m < ae[M]; m++) r = ae[m],
                        cd(r.eventType, r.handler, r[Kb]);
                        ae = []
                    }
                    Ug = g;
                    f == k && e()
                }
            }
            function Pc(a, b, c) {
                wc = k;
                var d = Ia[a];
                d == j || Qd == g || (d = Vg(d), ce(d, b, c,
                function() {
                    Ma = a
                }))
            }
            function Te(a) {
                for (var b = [], c = 0; c < a.X[M]; c++) {
                    var d = a.X[c],
                    e = t[d];
                    b[E]({
                        _: d,
                        name: e.n,
                        breakpoint: e.d,
                        width: e.Y,
                        height: e.Z
                    })
                }
                return b
            }
            function Wg(a, b) {
                for (var c = Te(b), d = 0; d < c[M]; d++) if (c[d].name == a) return c[d]._;
                return - 1
            }
            function Ue() {
                for (var a = [], b = 0; b < Ia[M]; b++) a[E](Ia[b].n);
                return a
            }
            function Ra(a, b, c) {
                a = a.id;
                a = L[a] || a;
                var d = P[a];
                d == j && (d = {},
                P[a] = d);
                d[b] = c
            }
            function s(a, b, c) {
                c = "undefined" != typeof c ? c: j;
                a = a.id;
                a = P[L[a] || a];
                if (a == j) return c;
                b = a[b];
                return b == j ? c: b
            }
            function yb(a, b) {
                var c = n.HYPE_eventListeners;
                if (c != j) {
                    for (var d, e = 0; e < c[M]; e++) if (c[e][Ya] == a[Ya] && c[e].callback != j && (d = c[e].callback(ea.API, b, a), d === k)) return k;
                    return d
                }
            }
            function Xg(a) {
                var b = q[gb](Bi)[0];
                b || (b = q[Va](ni), q[Db][A](b));
                b[A](a)
            }
            function Yg(a) {
                a = a[Fa](/\|/g, Jc)[Fa](/\`/g, Ai)[Fa](/\@/g, $j)[Fa](/\?/g, Ni)[Fa](/\$/g, Zi)[Fa](/\^/g, nd);
                Ed == k && (a = a[Fa](/rotateY\(0\)/g, ij));
                var b = q[Va](ni),
                c = q.xmlEncoding == j ? Cc: $;
                la(b, c + Bd + a + yd + c);
                Xg(b)
            }
            function ed(a, b) {
                var c = b.f,
                d = z.floor(a);
                return Ke(d + 100 * (a - d) / c, c)
            }
            function Ge(a, b) {
                for (var c = 0,
                d = 0; d < a[M]; d++) {
                    for (var e = a[d], f = 0, h = e.sa, l = 0; 100 > l; l++) {
                        var m = xg(e, l / 99),
                        p = {};
                        p.location = m;
                        b && (h = Pe(m, h), f += h, pa(p, h));
                        e.ba[E](p);
                        h = m
                    }
                    c += f;
                    pa(e, f)
                }
                return c
            }
            function xg(a, b) {
                var c = Ac(a.sa, a.Ga, b),
                d = Ac(a.Ga, a.Ba, b),
                e = Ac(a.Ba, a.Ja, b),
                f = Ac(c, d, b),
                d = Ac(d, e, b),
                f = Ac(f, d, b),
                h = k,
                l = d;
                d.x == f.x && d.y == f.y && (c.x == f.x && c.y == f.y ? l = e: (l = c, h = g));
                f.za = wg(f, l);
                h == g && (f.za += 180);
                return f
            }
            function wg(a, b) {
                var c = 0,
                c = b.x == a.x ? b.y >= a.y ? 90 : -90 : 180 * z.atan((b.y - a.y) / (b.x - a.x)) / z.PI;
                b.x < a.x && (c += 180);
                return c
            }
            function Ac(a, b, c) {
                return {
                    x: a.x + (b.x - a.x) * c,
                    y: a.y + (b.y - a.y) * c,
                    za: 0
                }
            }
            function Pe(a, b) {
                return z.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y))
            }
            function Zg(a, b, c) {
                var d = q[Va](ni),
                e = d[Z];
                qa(d, bf);
                e.position = hh;
                e.top = pd;
                e.left = pd;
                ka(e, ud);
                ua(e, ud);
                if (b.bR != j || b.aY != j) e[jd] = c,
                ra(e, c),
                e.perspective = c;
                e.pointerEvents = ij;
                e[oj] = ij;
                d[A](a);
                return d
            }
            function jb(a) {
                var b = I;
                a != j && (a = a[Ib](ef), a != j && (b = ha(a)));
                return b
            }
            function De(a) {
                var b = jb(q[Ha](Ab[a]));
                a = t[b].v[a];
                return a == j ? j: a.bF
            }
            function Ce(a) {
                if (nc != k) {
                    Nb = {};
                    var b = [],
                    c = jb(q[Ha](Ab[a])),
                    c = t[c].v,
                    d;
                    for (d in c) c[O](d) != k && c[d].bF == a && b[E](d);
                    for (a = 0; a < b[M]; a++) d = b[a],
                    c = sa(d),
                    pc(c),
                    Ce(d)
                }
            }
            function Rb() {
                if (! (0 < Qb[M])) {
                    if (wc == k && Ve == k) {
                        Ve = g;
                        var a = Vg(Ia[Ma]);
                        I != a && ce(a, 1, 0);
                        Ve = k
                    }
                    nc == g && Ce(j)
                }
            }
            function Vg(a) {
                var b = Te(a),
                c = b[0]._;
                if (1 != b[M]) {
                    var d = F.parentElement[Ja];
                    if (0 != d) for (var e = 0; e < b[M] && !(b[e].breakpoint > d); e++) c = b[e]._
                }
                b = t[c].n;
                d = yb({
                    type: rf,
                    layoutName: b,
                    sceneName: a.n
                },
                F);
                typeof d === Gj && d != b && (a = Wg(d, a), -1 != a && (c = a));
                return c
            }
            function og(a) {
                var b = Ab[uc(I)];
                a != j && (b = Ab[a]);
                a = Nb[b];
                a == j && (a = q[Ha](b), a = {
                    width: a[Ja],
                    height: a.offsetHeight
                },
                Nb[b] = a);
                return a
            }
            function ng(a) {
                var b = 0,
                c = 0;
                a == j ? (b = q[Ha](Ab[a]), a = jb(b), b = t[a].Y, c = t[a].Z) : (b = Vc(a), c = Wc(a));
                return {
                    width: b,
                    height: c
                }
            }
            function Ae(a) {
                return (w.ta != j || 3.5 <= w.Ya || 10 <= w.ia) && s(a, lf) == sd
            }
            function yg() {
                Kd = k;
                Ee = g;
                for (var a in Uc) Uc[O](a) && pc(Uc[a]);
                Ee = k;
                pg();
                Uc = {}
            }
            function pg() {
                Oc == j || We == g || (We = g, n[nb](function() {
                    We = k;
                    Oc.refreshAll()
                },
                0))
            }
            function Gg(a) {
                var b = jb(a);
                return t[b].U[L[a.id]] != j || s(a, Zh) != j ? g: k
            }
            function Xe(a, b, c) {
                var d = b;
                if (d == j || q[Ha](d) != j) {
                    do d = c + $g();
                    while (q[Ha](d) != j)
                }
                Ab[a] = d;
                L[d] = a;
                return Ye[b != j ? b: d] = d
            }
            function sa(a) {
                return q[Ha](Ab[a])
            }
            function Sa() {
                return Date.now()
            }
            function $g() {
                for (var a = $,
                b = ea.$a + pe,
                c = 0; 20 > c; c++) var d = z.floor(z.random() * b[M]),
                a = a + b.substring(d, d + 1);
                return a
            }
            function ve(a) {
                n.console && n.console.log(a)
            }
            function Rg(a) {
                var b = this;
                Qe[a] = b;
                b.qb = function() {
                    var a = q[Va](mh);
                    b.Aa = a;
                    for (var d = b.rb(), e = 0; e < d[M]; e++) {
                        var f = d[e],
                        h = q[Va](Dj);
                        h[K](Ej, b.Wa[f]);
                        h[K](Wj, f);
                        a[A](h)
                    }
                    q[Db][A](a);
                    return a
                };
                b.load = function(a, d) {
                    if (! (b.qa == g || b.va == g)) {
                        var e = b.qb(),
                        f = function() {
                            n[Ba](b.ub);
                            b.qa != g && (b.va = k, b.qa = g, a != j && a(b), b.La == g && b[Xa]())
                        },
                        h = function() {
                            n[Ba](b.ub);
                            b.qa != g && (b.va = k, d != j && d(b))
                        };
                        e[Wa](hi, f, g);
                        e[Wa](gh, h, g);
                        e[Wa](ui, h, g);
                        b.ub = n[nb](h, 15E3);
                        b.va = g;
                        ga.onLine == j || ga.onLine == g ? e.load() : f()
                    }
                };
                b.play = function() {
                    if (b.qa != g) {
                        if (b.va == g) {
                            b.La = g;
                            return
                        }
                        b.qa = g
                    }
                    b.Aa == j && b.qb();
                    try {
                        ma(b.Aa, b.loop),
                        b.Aa.currentTime = 0
                    } catch(a) {}
                    b.Aa[Xa]()
                };
                b.pause = function() {
                    b.qa != g ? b.La = k: b.Aa != j && b.Aa[Cb]()
                }
            }
            function Qg(a) {
                var b = this;
                Qe[a] = b;
                Bb = n.HYPE_gac_576;
                Bb == j && ("undefined" !== typeof AudioContext ? Bb = new AudioContext: "undefined" !== typeof webkitAudioContext && (Bb = new webkitAudioContext), n.HYPE_gac_576 = Bb);
                b.load = function(a, d) {
                    if (! (b.qa == g || b.va == g)) {
                        b.va = g;
                        var e = b.Gb(); - 1 == e[Qa](ee) && (e = $ + e + ee);
                        var f = new XMLHttpRequest;
                        f.open(oe, e, g);
                        f.responseType = lh;
                        f.onload = function() {
                            Bb.decodeAudioData(f.response,
                            function(d) {
                                b.vb = d;
                                b.va = k;
                                b.qa = g;
                                a != j && a(b);
                                b.La == g && (b[db] != j && b[Gb].cb == g ? b[db].buffer = d: b[Xa]())
                            },
                            function() {
                                b.va = k;
                                d != j && d(b)
                            })
                        };
                        f.onerror = function() {
                            b.va = k;
                            d != j && d(b)
                        };
                        try {
                            f.send()
                        } catch(h) {}
                    }
                };
                b.play = function() {
                    b.ib();
                    b.source = Bb.createBufferSource();
                    b[db].connect(Bb.destination);
                    ma(b[db], b.loop);
                    b[Gb].cb == g && b.hb();
                    b.qa != g ? (b.La = g, b.load()) : (b[db].buffer = b.vb, b[Gb].cb != g && b.hb())
                };
                b.pause = function() {
                    b.qa != g ? b.La = k: b.ib()
                };
                b.hb = function() {
                    try {
                        if (b[db] != j) if (b[db].noteOn != j) b[db].noteOn(0);
                        else b[db][Hb](0)
                    } catch(a) {}
                };
                b.ib = function() {
                    try {
                        b[db] != j && (b[db].noteOff != j ? b[db].noteOff(0) : b[db].stop(0))
                    } catch(a) {}
                };
                b.Gb = function() {
                    if (b.bb != j) return b.bb;
                    for (var a = q[Va](mh), d = b.rb(), e = 0; e < d[M]; e++) {
                        var f = d[e];
                        b.bb = b.Wa[f];
                        if (a.canPlayType(f) != hj && a.canPlayType(f) != $) break
                    }
                    return b.bb
                }
            }
            var ea = this,
            F = q[Ha](ba),
            Sd = [ci, di],
            $c = [Sf, Vf, Uf, Wf, Tf, Ah, Xf, Yf, Gh, bi],
            ah = {
                top: {
                    HYP_r: ph
                },
                left: {
                    HYP_r: Rf
                },
                width: {
                    HYP_r: Sh
                },
                height: {
                    HYP_r: li
                },
                "background-image": {
                    HYP_r: fi
                },
                rotateZ: {
                    HYP_r: wi,
                    HYP_s: 0
                },
                scaleX: {
                    HYP_r: $h,
                    HYP_s: 1
                },
                scaleY: {
                    HYP_r: ai,
                    HYP_s: 1
                },
                "z-index": {
                    HYP_r: ek
                },
                opacity: {
                    HYP_r: qi,
                    HYP_s: 1
                }
            },
            Ma = 0,
            I = 0,
            Ta = [],
            bb = [],
            Na = {},
            Oa = {},
            qc = {},
            xb = {},
            X = {},
            Md = k,
            vc = {},
            Qb = [],
            P = {},
            Le = {},
            bd = [],
            zc = {},
            Zc = j,
            Nd = j,
            Ab = {},
            L = {},
            Ye = {},
            bh = 0,
            Qd = k,
            ae = [],
            Fe = {},
            sg = {},
            Ug = k,
            nc = k,
            Kd = k,
            Ee = k,
            Uc = {},
            Nb = {},
            Wd = {},
            Ze = {
                d: [[0, 0, 0.42, 0, 1, 1, 1, 1]],
                e: [[0, 0, 0, 0, 0.58, 1, 1, 1]],
                c: [[0, 0, 0.42, 0, 0.58, 1, 1, 1]]
            },
            wc = k,
            Ve = k,
            Oc = n.HYPE_w_576,
            Fd = [],
            We = k;
            ea.$a = rd;
            ea.na = id;
            var $d = k,
            Xd = 0,
            Yd = k,
            ad = [];
            ea.z_o = function() {
                0 == bh && (bh = $g());
                Dd != j && Dd(g, F);
                Ed = Ed && w.ta != j;
                w.xa != j && q[Db][Wa](Sj,
                function() {});
                Ab[ba] = ba;
                L[ba] = ba;
                Ye[ba] = ba;
                ka(F[Z], x(t[0].Y));
                ua(F[Z], x(t[0].Z));
                for (var a = 0; a < t[M]; a++) {
                    var b = t[a].T,
                    c;
                    for (c in b) if (b[O](c) != k) {
                        var d = b[c];
                        d.d = ed(d.z, d);
                        for (var e = 0; e < d.a[M]; e++) {
                            var f = d.a[e];
                            f.t = ed(f.y, d);
                            f.d = ed(f.z, d);
                            f.p == j ? f.p = 0 : 2 == f.p && (f.d = 0);
                            f.r == j && (f.r = k);
                            f.k = e
                        }
                        e = d.b;
                        for (f = 0; f < e[M]; f++) {
                            var h = e[f];
                            h.startTime = ed(h.C, d);
                            h.duration = ed(h.D, d)
                        }
                    }
                }
                Yg(md);
                gk == g && Yg(Pf);
                for (a = 0; a < cg[M]; a++) b = cg[a],
                c = q[Va](ni),
                la(c, b),
                Xg(c);
                n[nb](Rb, 120);
                n[nb](Rb, 1200);
                a = q[Va](ni);
                a.id = cf;
                ta(a[Z], ij);
                a[K](kh, g);
                F[A](a);
                for (b = 0; b < t[M]; b++) {
                    c = t[b];
                    d = q[Va](ni);
                    e = d[Z];
                    qa(d, df);
                    d.id = Xe(c.o, j, Hi);
                    d[K](ef, c._);
                    eg != k && (e.backgroundColor = c.c);
                    ta(e, ij);
                    d[K](kh, g);
                    e.overflow = Ci;
                    e.position = hh;
                    ka(e, x(c.Y));
                    ua(e, x(c.Z));
                    w.Na == g && 11 > w.ia && (e.perspective = c.p);
                    F[A](d);
                    var e = c.v,
                    l;
                    for (l in e) if (e[O](l) != k && (f = e[l], (h = f.cL) && X[h] == j)) {
                        var m = c.T,
                        p = [],
                        s;
                        for (s in m) if (m[O](s) != k) {
                            var u = c.T[s],
                            C = u.a;
                            u.s == h && (u = Pd(s, C, u, h), p[E](u))
                        }
                        m = q[Va](f.k);
                        qa(m, f.cP ? af + f.cP: se);
                        m.id = Xe(l, f.i, Gi);
                        m[K](ef, c._);
                        m[Z].pointerEvents = oh;
                        m[Z][oj] = oh;
                        f.w != j && la(m, f.w);
                        if (w.Na == g && (w.ia == j || 11 <= w.ia)) u = Zg(m, f, c.p),
                        u[K](ef, c._),
                        a[A](u);
                        else a[A](m);
                        X[h] = {
                            element: m,
                            sb: p,
                            xb: f.cS,
                            nb: k,
                            kb: []
                        }
                    }
                    p = c.O;
                    for (C = 0; C < p[M]; C++) if (l = p[C], e[O](l) != k && (f = e[l], h = f.cL, !(f.cM == g || h))) {
                        m = q[Va](f.k);
                        qa(m, f.cP ? re + f.cP: qe);
                        m.id = Xe(l, f.i, Gi);
                        m[K](ef, c._);
                        m[Z].pointerEvents = oh;
                        m[Z][oj] = oh;
                        f.w != j && la(m, f.w);
                        var h = j,
                        r;
                        for (r in ub) if (ub[O](r) != k) {
                            for (u = 0; u < ub[r][M]; u++) if (l == ub[r][u]) {
                                h = r;
                                break
                            }
                            if (h != j) break
                        }
                        w.Na == g && (w.ia == j || 11 <= w.ia) ? (u = Zg(m, f, c.p), h ? X[h][Kb][A](u) : d[A](u)) : h ? X[h][Kb][A](m) : d[A](m)
                    }
                }
                for (l = 0; l < t[M]; l++) {
                    s = t[l].T;
                    for (var D in s) if (s[O](D) != k) {
                        r = s[D].j;
                        for (var B in r) if (r[O](B) != k) {
                            a = r[B];
                            b = {};
                            c = [];
                            for (d = 0; d < a[M]; d++) e = a[d],
                            c[E]({
                                sa: {
                                    x: e[0],
                                    y: e[1]
                                },
                                Ga: {
                                    x: e[2],
                                    y: e[3]
                                },
                                Ba: {
                                    x: e[4],
                                    y: e[5]
                                },
                                Ja: {
                                    x: e[6],
                                    y: e[7]
                                },
                                length: 0,
                                ba: []
                            });
                            b.ma = c;
                            pa(b, Ge(c, g));
                            Fe[B] = b
                        }
                    }
                }
                for (var G in Ze) Ze[O](G) != k && (Cd[G] = Ze[G]);
                for (var H in Cd) if (Cd[O](H) != k) {
                    D = Cd[H];
                    B = [];
                    for (G = 0; G < D[M]; G++) l = D[G],
                    B[E]({
                        sa: {
                            x: l[0],
                            y: l[1]
                        },
                        Ga: {
                            x: l[2],
                            y: l[3]
                        },
                        Ba: {
                            x: l[4],
                            y: l[5]
                        },
                        Ja: {
                            x: l[6],
                            y: l[7]
                        },
                        length: 0,
                        ba: []
                    });
                    Ge(B, k);
                    sg[H] = B
                }
                for (var I in y) y[O](I) != k && (H = y[I].g, H != j && (D = vc[H], D == j && (D = [], vc[H] = D), D[E](I)));
                for (var J in y) y[O](J) != k && y[J].p != j && -1 == Qb[Qa](J) && Qb[E](J);
                I = Qb[Ea](0);
                if (0 == I[M]) Tg();
                else for (J = 0; J < I[M]; J++) lk(I[J]);
                n[Wa] ? (n[Wa](uj,
                function() {
                    wc = k;
                    Rb()
                }), n[Wa](mj,
                function() {
                    n[nb](Rb, 1)
                })) : n[cb] && n[cb](lj,
                function() {
                    wc = k;
                    Rb()
                });
                Nc && (F[Z][kd] = xj, F[Wa] && (F[Wa](ii, Vd, g), F[Wa](ej, Vd, g), F[Wa](aj, Vd, g), F[Wa](dj, Vd, g)))
            };
            var w;
            var za = function(a) {
                return (a = ga && ga[rb] && ga[rb].match(a)) && a[1]
            },
            C = {};
            if (ga) {
                C.ia = ja(za(/MSIE (\d+\.\d+)/)) || ja(za(/(Trident)/) && za(/rv:(\d+\.\d+)/)) || ja(za(/Edge\/(\d+\.\d+)/)) || j;
                C.yb = ja(za(/Gecko\/(\d+)/)) || j;
                C.Ya = ja(za(/Firefox\/(\d+\.\d+)/)) || j;
                C.ta = ja(!C.ia && za(/AppleWebKit\/(\d+\.\d+)/)) || j;
                C.Xa = ja(C.ta && za(/Chrome\/(\d+\.\d+)/)) || j;
                C.Eb = ja(C.ta && za(/Safari\/(\d+\.\d+)/) && za(/Version\/(\d+\.\d+)/)) || j;
                C.opera = ja(za(/Opera\/(\d+\.\d+)/) && za(/Version\/(\d+\.\d+)/)) || za(/Opera\/(\d+\.\d+)/) || ja(C.ta && za(/OPR\/(\d+\.\d+)/)) || j;
                C.jb = -1 < ga[rb][Fb](je) || j;
                C.Ab = -1 < ga[rb][Fb](Ii) || j;
                C.Bb = -1 < ga[rb][Fb](Ji) || j;
                C.Cb = -1 < ga[rb][Fb](Ki) || j;
                C.xa = C.Ab || C.Bb || C.Cb || j;
                C.Db = q.compatMode == me || j;
                C.Na = C.ta != j || 10 <= C.Ya || 10 <= C.ia;
                for (var $e in C)(C[$e] === j || isNaN(C[$e])) && delete C[$e];
                C[Ua] && C.ia && delete C.ia
            }
            w = C;
            var Tc = {
                i: Rc,
                cP: Rc,
                b: pc,
                a: pc,
                c: Za,
                d: Za,
                bQ: function(a) {
                    Ae(a) == g && Sc(a)
                },
                bS: pc,
                t: function(a, b) {
                    a[Z].fontSize = x(b)
                },
                s: function(a, b) {
                    a[Z].fontFamily = b
                },
                v: function(a, b) {
                    a[Z].fontWeight = b
                },
                u: function(a, b) {
                    a[Z].fontStyle = b
                },
                H: function(a, b) {
                    a[Z].textDecoration = b
                },
                F: function(a, b) {
                    a[Z].textAlign = b
                },
                G: function(a, b) {
                    a[Z].color = b
                },
                X: function(a, b) {
                    a[Z].letterSpacing = x(b)
                },
                E: function(a, b) {
                    a[Z].wordSpacing = x(b)
                },
                Y: function(a, b) {
                    a[Z].lineHeight = x(b)
                },
                aX: jg,
                aW: jg,
                f: oc,
                bR: Sc,
                aY: Sc,
                cQ: oc,
                cR: oc,
                tX: oc,
                tY: oc,
                bO: oc,
                bP: Rc,
                e: function(a, b) {
                    a[Z].opacity = b;
                    a[Z].MozOpacity = b;
                    lg(a)
                },
                aP: function(a, b) {
                    a[Z].cursor = b
                },
                bD: function(a, b) {
                    a[Z][ea.na + Zj] = b;
                    a[Z].MozUserSelect = b;
                    a.onselectstart = function() {
                        return k
                    }
                },
                N: function(a, b) {
                    a[Z].borderLeftWidth = x(b);
                    Za(a)
                },
                O: function(a, b) {
                    a[Z].borderRightWidth = x(b);
                    Za(a)
                },
                P: function(a, b) {
                    a[Z].borderTopWidth = x(b);
                    Za(a)
                },
                M: function(a, b) {
                    a[Z].borderBottomWidth = x(b);
                    Za(a)
                },
                B: function(a, b) {
                    a[Z].borderLeftColor = b
                },
                C: function(a, b) {
                    a[Z].borderRightColor = b
                },
                D: function(a, b) {
                    a[Z].borderTopColor = b
                },
                A: function(a, b) {
                    a[Z].borderBottomColor = b
                },
                J: function(a, b) {
                    a[Z].borderLeftStyle = b
                },
                K: function(a, b) {
                    a[Z].borderRightStyle = b
                },
                L: function(a, b) {
                    a[Z].borderTopStyle = b
                },
                I: function(a, b) {
                    a[Z].borderBottomStyle = b
                },
                aK: function(a, b) {
                    b = typeof b != jj ? b: x(b);
                    a[Z].borderTopLeftRadius = b;
                    a[Z].MozBorderRadiusTopleft = b
                },
                aL: function(a, b) {
                    b = typeof b != jj ? b: x(b);
                    a[Z].borderTopRightRadius = b;
                    a[Z].MozBorderRadiusTopright = b
                },
                aI: function(a, b) {
                    b = typeof b != jj ? b: x(b);
                    a[Z].borderBottomLeftRadius = b;
                    a[Z].MozBorderRadiusBottomleft = b
                },
                aJ: function(a, b) {
                    b = typeof b != jj ? b: x(b);
                    a[Z].borderBottomRightRadius = b;
                    a[Z].MozBorderRadiusBottomright = b
                },
                bE: function(a, b) {
                    la(a, $);
                    var c = vc[b];
                    if (c != j) for (var d = 0; d < c[M]; d++) {
                        var e = c[d],
                        f = y[e].t,
                        e = be(e),
                        h = a.ownerDocument[Va](Dj);
                        h.src = e;
                        f != j && (w.Xa == j || f != bk) && h[K](Wj, f);
                        a[A](h)
                    }
                },
                Play: function(a, b) {
                    try {
                        a == g ? b.Play() : b.Stop()
                    } catch(c) {
                        n[nb](function() {
                            Tc.Play(b, a)
                        },
                        100)
                    }
                },
                aH: function(a) {
                    a.autoplay = k
                },
                aO: function(a, b) {
                    a[K](ki, b);
                    a.controls = 0 != b
                },
                dA: function(a, b) {
                    a[K](nj, b)
                },
                aR: function(a, b) {
                    a.muted = 0 != b;
                    a.volume = 0 != b ? qd: td
                },
                aQ: function(a, b) {
                    a[K](Wi, b);
                    ma(a, 0 != b)
                },
                j: function(a, b) {
                    a[Z].position = b
                },
                r: mg,
                cY: mg,
                aG: function(a, b) {
                    a[K](Pj, b);
                    a[K](ih, b)
                },
                dB: function(a, b) {
                    a[K](zj, b)
                },
                g: function(a, b) {
                    a[Z].backgroundColor = b
                },
                n: Be,
                m: Be,
                l: Be,
                h: function(a, b) {
                    var c = Sg(b);
                    c != j && W(a, fi, be(c))
                },
                cZ: function(a, b) {
                    a[Z].backgroundImage = Yj + b[Fa](/'/g, kc) + Dc
                },
                q: function(a, b) {
                    a[Z].backgroundSize = b;
                    a[Z][ea.na + Jh] = b;
                    a[Z].MozBackgroundSize = b
                },
                o: function(a, b) {
                    a[Z].backgroundOrigin = b;
                    a[Z][ea.na + Ih] = b;
                    a[Z].MozBackgroundOrigin = b
                },
                p: function(a, b) {
                    a[Z].backgroundRepeat = b
                },
                x: function(a, b) {
                    a[Z].overflow = b
                },
                aT: function(a, b) {
                    a[Z].paddingLeft = x(b);
                    Za(a)
                },
                aU: function(a, b) {
                    a[Z].paddingRight = x(b);
                    Za(a)
                },
                aV: function(a, b) {
                    a[Z].paddingTop = x(b);
                    Za(a)
                },
                aS: function(a, b) {
                    a[Z].paddingBottom = x(b);
                    Za(a)
                },
                S: Id,
                T: Id,
                R: Id,
                Q: Id,
                bB: Hd,
                bC: Hd,
                bA: Hd,
                aZ: Hd,
                bL: function(a) {
                    lc(a);
                    w.Xa != j && a[Z][ld] == $ && (a[Z][ld] = ij)
                },
                bG: lc,
                bH: lc,
                bI: lc,
                bJ: lc,
                bK: lc,
                BDbL: mc,
                BDbG: mc,
                BDbH: mc,
                BDbI: mc,
                BDbJ: mc,
                BDbK: mc,
                Z: function(a, b) {
                    a[Z].wordWrap = b
                },
                yy: function(a, b) {
                    a[Z].whiteSpace = b
                },
                y: function(a, b) {
                    a[Z].whiteSpaceCollapsing = b
                },
                z: function(a, b) {
                    na(a[Z], b);
                    a[Sb][mb] == bf && na(a[Sb][Z], b)
                },
                aA: function(a, b) {
                    var c = ca(a, b.a);
                    Nc && (Pb(a, {
                        Da: 1,
                        da: Mj
                    },
                    c), a[Z][kd] = xj);
                    ya(ii, a, c, g)
                },
                aD: function(a, b) {
                    ya(dj, a, ca(a, b.a), k)
                },
                aC: function(a, b) {
                    ya(cj, a, ca(a, b.a), k)
                },
                aE: function(a, b) {
                    var c = ca(a, b.a);
                    Nc && (ya(Rj, a, c, g), a[Z][kd] = xj);
                    ya(ej, a, c, g)
                },
                aB: function(a, b) {
                    var c = ca(a, b.a);
                    if (Nc) {
                        var d = k;
                        if (w.xa != j) for (var e = b.a,
                        f = 0; f < e[M]; f++) if (5 == e[f].p && e[f].k == g) {
                            d = g;
                            break
                        }
                        d != g && ya(Tj, a, c, g);
                        a[Z][kd] = xj
                    }
                    ya(aj, a, c, g)
                },
                bN: function(a, b) {
                    Mg(a, b)
                },
                cW: function(a, b) {
                    fg(a, ca(a, b.a), ti)
                },
                cX: function(a, b) {
                    fg(a, ca(a, b.a), vi)
                },
                cG: function(a, b) {
                    Pb(a, {
                        Da: 1,
                        direction: yj,
                        Pa: 30,
                        da: Ij
                    },
                    ca(a, b.a))
                },
                cH: function(a, b) {
                    Pb(a, {
                        Da: 1,
                        direction: Ui,
                        Pa: 30,
                        da: Ij
                    },
                    ca(a, b.a))
                },
                cI: function(a, b) {
                    Pb(a, {
                        Da: 1,
                        direction: Xj,
                        Pa: 30,
                        da: Ij
                    },
                    ca(a, b.a))
                },
                cJ: function(a, b) {
                    Pb(a, {
                        Da: 1,
                        direction: oi,
                        Pa: 30,
                        da: Ij
                    },
                    ca(a, b.a))
                },
                cK: Rc,
                cF: Rc,
                aM: function(a, b) {
                    ya(dj, a, ye(a, b), k);
                    ya(cj, a, Gd(a, b), k)
                },
                aN: function(a, b) {
                    Nc && (ya(Tj, a, ye(a, b), k), ya(Sj, a, Gd(a, b), k), ya(Rj, a, Gd(a, b), k), a[Z][kd] = xj);
                    ya(aj, a, ye(a, b), k);
                    ya(ej, a, Gd(a, b), k)
                },
                V: ze,
                U: ze,
                W: ze,
                w: function(a, b) {
                    la(a, b);
                    for (var c = a[gb](Bj), d = 0; d < c[M]; d++) c[d].src == $ && (n.execScript ||
                    function(a) {
                        n.eval.call(n, a)
                    })(c[d].text)
                },
                bT: function(a, b) {
                    for (var c = 0; c < b[M]; c++) Kg(b[c].B, ca(a, b[c].a), b[c].cL)
                },
                cV: function(a, b) {
                    Tc.bT(a, b)
                },
                aF: function(a, b) {
                    a[Z].cssText += Xb + b
                },
                k: function() {},
                bF: function(a, b) {
                    var c = a,
                    d = a[Sb];
                    d != j && d[mb] == bf && (c = d);
                    var d = sa(b),
                    e = c[Sb];
                    d == j || (d == c || d == a || d == e) || (e[Eb](c), d[A](c))
                },
                ti: function(a, b) {
                    b == j ? a[Mb](Lj) : a[K](Lj, b)
                },
                cN: function(a, b) {
                    a[Z].pointerEvents = b;
                    a[Z][oj] = b;
                    if (11 > w.ia) {
                        var c = function(b) {
                            b = b ? b: n[Wb];
                            if (a[Z][oj] == ij) {
                                var c = a[Z][Tb];
                                ta(a[Z], ij);
                                var f = q.elementFromPoint(b[hb], b[lb]);
                                ta(a[Z], c ? c: $);
                                q.createEvent && (b[La](), c = q.createEvent(Cf), c.initMouseEvent(b[Ya], b.bubbles, b.cancelable, b.view, b.detail, b.screenX, b.screenY, b[hb], b[lb], b[pb], b.altKey, b.shiftKey, b.metaKey, b[Pa], j), f.dispatchEvent(c))
                            }
                        };
                        xa(Bf, c, a, g);
                        xa(ej, c, a, g);
                        xa(aj, c, a, g);
                        xa(ii, c, a, g)
                    }
                }
            },
            Qe = {},
            Bb = j;
            ea.API = {
                kSceneTransitionInstant: 1,
                kSceneTransitionCrossfade: 2,
                kSceneTransitionSwap: 3,
                kSceneTransitionPushLeftToRight: 4,
                kSceneTransitionPushRightToLeft: 5,
                kSceneTransitionPushBottomToTop: 6,
                kSceneTransitionPushTopToBottom: 7,
                kHypeGesturePhaseStart: Fj,
                kHypeGesturePhaseMove: fj,
                kHypeGesturePhaseEnd: si,
                kHypeGesturePhaseCancel: gi,
                documentName: function() {
                    return T
                },
                documentId: function() {
                    return ba
                },
                sceneNames: Ue,
                currentSceneName: function() {
                    return Ia[Ma].n
                },
                layoutsForSceneNamed: function(a) {
                    a = a != j ? Ue()[Qa](a) : Ma;
                    return Te(Ia[a])
                },
                currentLayoutName: function() {
                    return t[I].n
                },
                showLayoutNamed: function(a) {
                    a = Wg(a, Ia[Ma]); - 1 != a && (wc = g, ce(a, 1, 0))
                },
                showSceneNamed: function(a, b, c) {
                    var d = Ue();
                    Pc(d[Qa](a), b, c)
                },
                showNextScene: function(a, b) {
                    Pc(Ma + 1, a, b)
                },
                showPreviousScene: function(a, b) {
                    Pc(Ma - 1, a, b)
                },
                playTimelineNamed: Eg,
                startTimelineNamed: Eg,
                goToTimeInTimelineNamed: function(a, b) {
                    ib(a, zb(b), k, k)
                },
                pauseTimelineNamed: function(a) {
                    wb(zb(a), j)
                },
                continueTimelineNamed: function(a, b, c) {
                    a = zb(a);
                    b == aa && (b = 0);
                    Qc(a, 1 == b ? g: k, g, c)
                },
                getElementById: function(a) {
                    var b = Ye[a];
                    b == j && (b = a);
                    return q[Ha](b)
                },
                setElementProperty: function(a, b, c, d, e) {
                    var f = {
                        easein: li,
                        easeout: qi,
                        easeinout: Sh,
                        linear: ph
                    };
                    b = ah[b];
                    if (b != j) {
                        b = b.HYP_r;
                        var h = L[a.id],
                        l = $ + h + b;
                        0 < d && b != ek && b != fi ? (a = j, e != j && (a = f[e]), a == j && (a = Sh), e = [], kb(e, b, 0, d, a, h, 1, c, g), c = {
                            i: l,
                            n: l,
                            f: 30,
                            d: d,
                            a: e,
                            b: []
                        },
                        t[I].T[l] = c, Pd(l, e, c), vb(l, j, k)) : (Na[h] != aa && (Na[h][b] = l, b == fi && (Na[h].h = l)), d = da(l), d != j && sc(d), W(a, b, c))
                    }
                },
                getElementProperty: function(a, b) {
                    var c = ah[b];
                    if (c == j) return j;
                    var d = P[L[a.id]][c.HYP_r];
                    return d != j ? d: c.HYP_s
                },
                functions: function() {
                    return dg
                },
                resourcesFolderURL: function() {
                    return Mc
                },
                relayoutIfNecessary: Rb,
                kDirectionForward: 0,
                kDirectionReverse: 1,
                currentTimeInTimelineNamed: function(a) {
                    return tc(zb(a), g)
                },
                durationForTimelineNamed: function(a) {
                    var b = 0;
                    a = da(zb(a));
                    a != j && (b = S(a));
                    return b
                },
                currentDirectionForTimelineNamed: function(a) {
                    a = da(zb(a));
                    var b = 0;
                    a != j && (b = a.$ ? 1 : 0);
                    return b
                },
                isPlayingTimelineNamed: function(a) {
                    var b = k;
                    a = da(zb(a));
                    a != j && (b = a.ea);
                    return b
                },
                triggerCustomBehaviorNamed: hg,
                getSymbolInstanceById: function(a) {
                    if (a != j) return xb[L[a]]
                },
                getSymbolInstancesByName: Jg
            }
        };
        n.HYPE == j && (n.HYPE = n.HYPE_576, n.HYPE.documents = {});
        var T = [];
        n.HYPE_dtl_576 != j && (T = n.HYPE_dtl_576[Ea](0));
        n.HYPE_dtl_576 = [];
        for (var y = 0; y < T[M]; y++) T[y]()
    })();
})();