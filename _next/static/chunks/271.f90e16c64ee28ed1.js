(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[271], {
    30271: function (e, a, n) {
        "use strict";
        n.r(a), n.d(a, {
            default: function () {
                return B
            }, typename: function () {
                return w
            }
        });
        var o, c, d = n(85893), i = n(67294), l = n(88451);

        function t() {
            return (t = Object.assign ? Object.assign.bind() : function (e) {
                for (var a = 1; a < arguments.length; a++) {
                    var n = arguments[a];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        var r = function (e) {
            return i.createElement("svg", t({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512"
            }, e), o || (o = i.createElement("path", {d: "M3.9 54.9C10.5 40.9 24.5 32 40 32h432c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"})))
        }, s = n(53731), m = n(11163);

        function u() {
            return (u = Object.assign ? Object.assign.bind() : function (e) {
                for (var a = 1; a < arguments.length; a++) {
                    var n = arguments[a];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        var p = function (e) {
            return i.createElement("svg", u({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 496 512"
            }, e), c || (c = i.createElement("path", {d: "M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 01-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 01-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 00-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 00-15.55-3.1l-31.17 10.39a11.95 11.95 0 00-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 018.93 21.57 46.536 46.536 0 01-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 010-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"})))
        }, h = n(68320), b = n.n(h), _ = n(25823), g = n(45596), v = n.n(g);
        let j = e => {
            let {children: a, className: n} = e, [o, c] = (0, i.useState)(-1), l = (0, i.useRef)();
            (0, _.Z)(l, () => {
                o > -1 && c(-1)
            });
            let t = e => {
                o === e ? c(-1) : c(e)
            };
            return (0, d.jsx)("div", {
                ref: l,
                className: "".concat(v().dropdown, " ").concat(n || ""),
                children: i.Children.map(a, (e, a) => i.isValidElement(e) ? i.cloneElement(e, {
                    ...e.props,
                    onClickDropdownLink: () => t(a),
                    isOpen: o === a
                }) : e)
            })
        };
        var S = n(61937), I = n(40817), x = n.n(I);
        let C = e => {
            let {children: a, onClickDropdownLink: n, isOpen: o, label: c} = e;
            return (0, d.jsxs)("div", {
                className: x().dropdownItemWrapper,
                children: [(0, d.jsxs)("button", {
                    type: "button",
                    className: x().link,
                    onClick: () => null == n ? void 0 : n(),
                    id: "dropdown-item-button-".concat(c),
                    "aria-controls": "dropdown-item-panel-".concat(c),
                    "aria-expanded": o ? "true" : "false",
                    children: [(0, d.jsx)("span", {
                        className: "sr-only",
                        children: o ? "Hide" : "Show"
                    }), c, (0, d.jsx)("span", {
                        className: "sr-only",
                        children: "Options"
                    }), (0, d.jsx)(S.Z, {
                        "aria-hidden": !0,
                        className: "".concat(x().chevronDown, " ").concat(o ? x().isOpened : "")
                    })]
                }), (0, d.jsx)("div", {
                    className: "".concat(x().dropdownItem, " ").concat(o ? x().isDropdownOpen : "invisible"),
                    id: "dropdown-item-panel-".concat(c),
                    "aria-labelledby": "dropdown-item-button-".concat(c),
                    children: a
                })]
            })
        };
        var M = n(23636), f = [{code: "AD", name: "Andorra"}, {code: "AE", name: "United Arab Emirates"}, {
            code: "AF",
            name: "Afghanistan"
        }, {code: "AG", name: "Antigua and Barbuda"}, {code: "AI", name: "Anguilla"}, {
            code: "AL",
            name: "Albania"
        }, {code: "AM", name: "Armenia"}, {code: "AO", name: "Angola"}, {code: "AQ", name: "Antarctica"}, {
            code: "AR",
            name: "Argentina"
        }, {code: "AS", name: "American Samoa"}, {code: "AT", name: "Austria"}, {
            code: "AU",
            name: "Australia"
        }, {code: "AW", name: "Aruba"}, {code: "AX", name: "\xc5land Islands"}, {
            code: "AZ",
            name: "Azerbaijan"
        }, {code: "BA", name: "Bosnia and Herzegovina"}, {code: "BB", name: "Barbados"}, {
            code: "BD",
            name: "Bangladesh"
        }, {code: "BE", name: "Belgium"}, {code: "BF", name: "Burkina Faso"}, {
            code: "BG",
            name: "Bulgaria"
        }, {code: "BH", name: "Bahrain"}, {code: "BI", name: "Burundi"}, {code: "BJ", name: "Benin"}, {
            code: "BL",
            name: "Saint Barth\xe9lemy"
        }, {code: "BM", name: "Bermuda"}, {code: "BN", name: "Brunei Darussalam"}, {
            code: "BO",
            name: "Bolivia, Plurinational State of"
        }, {code: "BQ", name: "Bonaire, Sint Eustatius and Saba"}, {code: "BR", name: "Brazil"}, {
            code: "BS",
            name: "Bahamas"
        }, {code: "BT", name: "Bhutan"}, {code: "BV", name: "Bouvet Island"}, {
            code: "BW",
            name: "Botswana"
        }, {code: "BY", name: "Belarus"}, {code: "BZ", name: "Belize"}, {code: "CA", name: "Canada"}, {
            code: "CC",
            name: "Cocos (Keeling) Islands"
        }, {code: "CD", name: "Congo, Democratic Republic of the"}, {
            code: "CF",
            name: "Central African Republic"
        }, {code: "CG", name: "Congo"}, {code: "CH", name: "Switzerland"}, {
            code: "CI",
            name: "C\xf4te d'Ivoire"
        }, {code: "CK", name: "Cook Islands"}, {code: "CL", name: "Chile"}, {code: "CM", name: "Cameroon"}, {
            code: "CN",
            name: "China"
        }, {code: "CO", name: "Colombia"}, {code: "CR", name: "Costa Rica"}, {code: "CU", name: "Cuba"}, {
            code: "CV",
            name: "Cabo Verde"
        }, {code: "CW", name: "Cura\xe7ao"}, {code: "CX", name: "Christmas Island"}, {
            code: "CY",
            name: "Cyprus"
        }, {code: "CZ", name: "Czechia"}, {code: "DE", name: "Germany"}, {code: "DJ", name: "Djibouti"}, {
            code: "DK",
            name: "Denmark"
        }, {code: "DM", name: "Dominica"}, {code: "DO", name: "Dominican Republic"}, {
            code: "DZ",
            name: "Algeria"
        }, {code: "EC", name: "Ecuador"}, {code: "EE", name: "Estonia"}, {code: "EG", name: "Egypt"}, {
            code: "EH",
            name: "Western Sahara"
        }, {code: "ER", name: "Eritrea"}, {code: "ES", name: "Spain"}, {code: "ET", name: "Ethiopia"}, {
            code: "FI",
            name: "Finland"
        }, {code: "FJ", name: "Fiji"}, {code: "FK", name: "Falkland Islands (Malvinas)"}, {
            code: "FM",
            name: "Micronesia, Federated States of"
        }, {code: "FO", name: "Faroe Islands"}, {code: "FR", name: "France"}, {code: "GA", name: "Gabon"}, {
            code: "GB",
            name: "United Kingdom"
        }, {code: "GD", name: "Grenada"}, {code: "GE", name: "Georgia"}, {
            code: "GF",
            name: "French Guiana"
        }, {code: "GG", name: "Guernsey"}, {code: "GH", name: "Ghana"}, {code: "GI", name: "Gibraltar"}, {
            code: "GL",
            name: "Greenland"
        }, {code: "GM", name: "Gambia"}, {code: "GN", name: "Guinea"}, {code: "GP", name: "Guadeloupe"}, {
            code: "GQ",
            name: "Equatorial Guinea"
        }, {code: "GR", name: "Greece"}, {
            code: "GS",
            name: "South Georgia and the South Sandwich Islands"
        }, {code: "GT", name: "Guatemala"}, {code: "GU", name: "Guam"}, {
            code: "GW",
            name: "Guinea-Bissau"
        }, {code: "GY", name: "Guyana"}, {code: "HK", name: "Hong Kong"}, {
            code: "HM",
            name: "Heard Island and McDonald Islands"
        }, {code: "HN", name: "Honduras"}, {code: "HR", name: "Croatia"}, {code: "HT", name: "Haiti"}, {
            code: "HU",
            name: "Hungary"
        }, {code: "ID", name: "Indonesia"}, {code: "IE", name: "Ireland"}, {code: "IL", name: "Israel"}, {
            code: "IM",
            name: "Isle of Man"
        }, {code: "IN", name: "India"}, {code: "IO", name: "British Indian Ocean Territory"}, {
            code: "IQ",
            name: "Iraq"
        }, {code: "IR", name: "Iran"}, {code: "IS", name: "Iceland"}, {code: "IT", name: "Italy"}, {
            code: "JE",
            name: "Jersey"
        }, {code: "JM", name: "Jamaica"}, {code: "JO", name: "Jordan"}, {code: "JP", name: "Japan"}, {
            code: "KE",
            name: "Kenya"
        }, {code: "KG", name: "Kyrgyzstan"}, {code: "KH", name: "Cambodia"}, {
            code: "KI",
            name: "Kiribati"
        }, {code: "KM", name: "Comoros"}, {code: "KN", name: "Saint Kitts and Nevis"}, {
            code: "KP",
            name: "Korea, Democratic People's Republic of"
        }, {code: "KR", name: "Korea, Republic of"}, {code: "KW", name: "Kuwait"}, {
            code: "KY",
            name: "Cayman Islands"
        }, {code: "KZ", name: "Kazakhstan"}, {code: "LA", name: "Lao People's Democratic Republic"}, {
            code: "LB",
            name: "Lebanon"
        }, {code: "LC", name: "Saint Lucia"}, {code: "LI", name: "Liechtenstein"}, {
            code: "LK",
            name: "Sri Lanka"
        }, {code: "LR", name: "Liberia"}, {code: "LS", name: "Lesotho"}, {code: "LT", name: "Lithuania"}, {
            code: "LU",
            name: "Luxembourg"
        }, {code: "LV", name: "Latvia"}, {code: "LY", name: "Libya"}, {code: "MA", name: "Morocco"}, {
            code: "MC",
            name: "Monaco"
        }, {code: "MD", name: "Moldova, Republic of"}, {code: "ME", name: "Montenegro"}, {
            code: "MF",
            name: "Saint Martin, (French part)"
        }, {code: "MG", name: "Madagascar"}, {code: "MH", name: "Marshall Islands"}, {
            code: "MK",
            name: "North Macedonia"
        }, {code: "ML", name: "Mali"}, {code: "MM", name: "Myanmar"}, {code: "MN", name: "Mongolia"}, {
            code: "MO",
            name: "Macao"
        }, {code: "MP", name: "Northern Mariana Islands"}, {code: "MQ", name: "Martinique"}, {
            code: "MR",
            name: "Mauritania"
        }, {code: "MS", name: "Montserrat"}, {code: "MT", name: "Malta"}, {code: "MU", name: "Mauritius"}, {
            code: "MV",
            name: "Maldives"
        }, {code: "MW", name: "Malawi"}, {code: "MX", name: "Mexico"}, {code: "MY", name: "Malaysia"}, {
            code: "MZ",
            name: "Mozambique"
        }, {code: "NA", name: "Namibia"}, {code: "NC", name: "New Caledonia"}, {code: "NE", name: "Niger"}, {
            code: "NF",
            name: "Norfolk Island"
        }, {code: "NG", name: "Nigeria"}, {code: "NI", name: "Nicaragua"}, {
            code: "NL",
            name: "Netherlands"
        }, {code: "NO", name: "Norway"}, {code: "NP", name: "Nepal"}, {code: "NR", name: "Nauru"}, {
            code: "NU",
            name: "Niue"
        }, {code: "NZ", name: "New Zealand"}, {code: "OM", name: "Oman"}, {code: "PA", name: "Panama"}, {
            code: "PE",
            name: "Peru"
        }, {code: "PF", name: "French Polynesia"}, {code: "PG", name: "Papua New Guinea"}, {
            code: "PH",
            name: "Philippines"
        }, {code: "PK", name: "Pakistan"}, {code: "PL", name: "Poland"}, {
            code: "PM",
            name: "Saint Pierre and Miquelon"
        }, {code: "PN", name: "Pitcairn"}, {code: "PR", name: "Puerto Rico"}, {
            code: "PS",
            name: "Palestine, State of"
        }, {code: "PT", name: "Portugal"}, {code: "PW", name: "Palau"}, {code: "PY", name: "Paraguay"}, {
            code: "QA",
            name: "Qatar"
        }, {code: "RE", name: "R\xe9union"}, {code: "RO", name: "Romania"}, {code: "RS", name: "Serbia"}, {
            code: "RU",
            name: "Russian Federation"
        }, {code: "RW", name: "Rwanda"}, {code: "SA", name: "Saudi Arabia"}, {
            code: "SB",
            name: "Solomon Islands"
        }, {code: "SC", name: "Seychelles"}, {code: "SD", name: "Sudan"}, {code: "SE", name: "Sweden"}, {
            code: "SG",
            name: "Singapore"
        }, {code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha"}, {
            code: "SI",
            name: "Slovenia"
        }, {code: "SJ", name: "Svalbard and Jan Mayen"}, {code: "SK", name: "Slovakia"}, {
            code: "SL",
            name: "Sierra Leone"
        }, {code: "SM", name: "San Marino"}, {code: "SN", name: "Senegal"}, {code: "SO", name: "Somalia"}, {
            code: "SR",
            name: "Suriname"
        }, {code: "SS", name: "South Sudan"}, {code: "ST", name: "Sao Tome and Principe"}, {
            code: "SV",
            name: "El Salvador"
        }, {code: "SX", name: "Sint Maarten, (Dutch part)"}, {code: "SY", name: "Syrian Arab Republic"}, {
            code: "SZ",
            name: "Eswatini"
        }, {code: "TC", name: "Turks and Caicos Islands"}, {code: "TD", name: "Chad"}, {
            code: "TF",
            name: "French Southern Territories"
        }, {code: "TG", name: "Togo"}, {code: "TH", name: "Thailand"}, {code: "TJ", name: "Tajikistan"}, {
            code: "TK",
            name: "Tokelau"
        }, {code: "TL", name: "Timor-Leste"}, {code: "TM", name: "Turkmenistan"}, {
            code: "TN",
            name: "Tunisia"
        }, {code: "TO", name: "Tonga"}, {code: "TR", name: "T\xfcrkiye"}, {
            code: "TT",
            name: "Trinidad and Tobago"
        }, {code: "TV", name: "Tuvalu"}, {code: "TW", name: "Taiwan, Province of China"}, {
            code: "TZ",
            name: "Tanzania, United Republic of"
        }, {code: "UA", name: "Ukraine"}, {code: "UG", name: "Uganda"}, {
            code: "UM",
            name: "United States Minor Outlying Islands"
        }, {code: "US", name: "United States"}, {code: "UY", name: "Uruguay"}, {
            code: "UZ",
            name: "Uzbekistan"
        }, {code: "VA", name: "Holy See"}, {code: "VC", name: "Saint Vincent and the Grenadines"}, {
            code: "VE",
            name: "Venezuela, Bolivarian Republic of"
        }, {code: "VG", name: "Virgin Islands, British"}, {code: "VI", name: "Virgin Islands, U.S."}, {
            code: "VN",
            name: "Viet Nam"
        }, {code: "VU", name: "Vanuatu"}, {code: "WF", name: "Wallis and Futuna"}, {
            code: "WS",
            name: "Samoa"
        }, {code: "YE", name: "Yemen"}, {code: "YT", name: "Mayotte"}, {code: "ZA", name: "South Africa"}, {
            code: "ZM",
            name: "Zambia"
        }, {code: "ZW", name: "Zimbabwe"}], N = n(32e3);
        let w = "ParagraphJobListing", y = e => {
            let {paragraph: a} = e,
                n = (0, m.useRouter)(), [o, c] = (0, i.useState)(!1), [t, u] = (0, i.useState)(null), [h, _] = (0, i.useState)(!0);
            (0, i.useEffect)(() => {
                if (!(null == t ? void 0 : t.jobs) && o) {
                    var e;
                    fetch("/api/get-smartrecruiters?department=".concat(null == a ? void 0 : null === (e = a.fieldJobDepartments) || void 0 === e ? void 0 : e.join(","), "&listInternships=").concat(null == a ? void 0 : a.listInternships)).then(e => {
                        e.json().then(e => {
                            u(e)
                        })
                    })
                }
            }, [t, o, a]), (0, i.useEffect)(() => {
                t ? _(!1) : _(!0)
            }, [t]);
            let g = e => {
                e.newURL.includes("#positions") && c(!0)
            };
            (0, i.useEffect)(() => (window.addEventListener("hashchange", g), () => {
                window.removeEventListener("hashchange", g)
            }), []), (0, i.useEffect)(() => {
                n.asPath.includes("#positions") && !o && c(!0)
            }, [n, o]);
            let [v, S] = (0, i.useState)([]), [I, x] = (0, i.useState)([]), [w, y] = (0, i.useState)(!1), [B, G] = (0, i.useState)(1), [L, A] = (0, i.useState)(""), [T, E] = (0, i.useState)(""), [k, P] = (0, i.useState)(!1),
                R = () => {
                    A(T), G(1)
                }, O = (0, i.useMemo)(() => {
                    var e;
                    return (null == t ? void 0 : null === (e = t.departments) || void 0 === e ? void 0 : e.map(e => ({
                        label: e.label,
                        value: e.id
                    })).sort((e, a) => e.label.localeCompare(a.label))) || []
                }, [null == t ? void 0 : t.departments]), D = (0, i.useMemo)(() => {
                    var e;
                    return (null == t ? void 0 : null === (e = t.locations) || void 0 === e ? void 0 : e.map(e => ({
                        label: f.find(a => a.code === e.toUpperCase()).name,
                        value: e
                    })).sort((e, a) => e.label.localeCompare(a.label))) || []
                }, [null == t ? void 0 : t.locations]), F = (0, i.useMemo)(() => {
                    let e = w ? null == t ? void 0 : t.remoteJobs : null == t ? void 0 : t.jobs;
                    return (null == I ? void 0 : I.length) && (e = e.filter(e => I.includes(+e.department.id))), (null == v ? void 0 : v.length) && (e = e.filter(e => {
                        var a;
                        return v.includes(null === (a = e.location) || void 0 === a ? void 0 : a.country)
                    })), L && (e = e.filter(e => [e.department.label, e.name, e.function].some(e => e.toString().toLowerCase().includes(L.toLowerCase())))), e || []
                }, [I, v, w, null == t ? void 0 : t.jobs, null == t ? void 0 : t.remoteJobs, L]),
                K = (0, i.useMemo)(() => Array.from({length: Math.ceil((null == F ? void 0 : F.length) / 15)}, (e, a) => a + 1), [F]),
                W = ((e, a, n) => {
                    let o = (a - 1) * n;
                    return e.slice(o, o + n)
                })(F, B, 15),
                U = (0, i.useMemo)(() => (null == v ? void 0 : v.length) ? (null == v ? void 0 : v.length) > 1 ? "".concat(v.length, " Locations") : D.find(e => e.value === v[0]).label : "Locations", [v, D]),
                H = (0, i.useMemo)(() => (null == I ? void 0 : I.length) ? (null == I ? void 0 : I.length) > 1 ? "".concat(I.length, " Departments") : O.find(e => e.value === I[0]).label : "Departments", [I, O]);
            return (0, d.jsx)("section", {
                id: "positions",
                "aria-labelledby": "smart-recruiters-widget",
                className: "".concat(b().smartRecruiters, " ").concat(o ? "" : b().initialHidden),
                children: (0, d.jsxs)("div", {
                    className: "container ".concat(b().background), children: [(0, d.jsx)("div", {
                        className: b().root,
                        children: h ? (0, d.jsxs)("div", {
                            className: b().loading,
                            children: [(0, d.jsx)("div", {}), (0, d.jsx)("div", {})]
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)("h2", {children: "Find the role that's right for you"}), (0, d.jsxs)("div", {
                                className: b().container,
                                children: [(0, d.jsxs)("form", {
                                    className: b().searchInputWrapper,
                                    onSubmit: e => {
                                        e.preventDefault(), R()
                                    },
                                    children: [(0, d.jsx)("input", {
                                        type: "text",
                                        className: b().searchInput,
                                        placeholder: "Filter by role, title, expertise",
                                        "aria-label": "Filter by role, title, expertise",
                                        "aria-hidden": o ? "false" : "true",
                                        tabIndex: o ? 0 : -1,
                                        name: "job-name",
                                        onChange: e => E(e.target.value),
                                        value: T
                                    }), (0, d.jsx)("div", {
                                        className: b().clearIconWrapper,
                                        children: T ? (0, d.jsxs)("button", {
                                            type: "button",
                                            className: b().searchClearIcon,
                                            onClick: () => {
                                                E("")
                                            },
                                            children: [(0, d.jsx)("div", {
                                                className: "sr-only",
                                                children: "Clear Search"
                                            }), (0, d.jsx)(l.Z, {"aria-hidden": "true"})]
                                        }) : null
                                    }), (0, d.jsxs)("div", {
                                        className: b().buttonWrapper,
                                        children: [(0, d.jsx)("button", {
                                            className: b().searchButton,
                                            type: "submit",
                                            children: "Search"
                                        }), (0, d.jsxs)("button", {
                                            className: b().filterButton,
                                            type: "button",
                                            onClick: () => P(e => !e),
                                            children: [k ? "Hide" : "Filters", (0, d.jsx)(r, {className: b().filterIcon})]
                                        })]
                                    })]
                                }), (0, d.jsxs)(j, {
                                    className: "".concat(b().menuContainer, " ").concat(k ? b().showMobile : b().hideMobile),
                                    children: [(0, d.jsx)(C, {
                                        label: H,
                                        children: O.map(e => (0, d.jsx)(M.Z, {
                                            label: e.label,
                                            checked: I.includes(e.value),
                                            onClick: a => {
                                                a.stopPropagation(), I.includes(e.value) ? x(I.filter(a => a !== e.value)) : x([...I, e.value]), G(1)
                                            }
                                        }, e.value))
                                    }), (0, d.jsx)(C, {
                                        label: U,
                                        children: D.map(e => (0, d.jsx)(M.Z, {
                                            label: e.label,
                                            checked: v.includes(e.value),
                                            onClick: a => {
                                                a.stopPropagation(), v.includes(e.value) ? S(v.filter(a => a !== e.value)) : S([...v, e.value]), G(1)
                                            }
                                        }, e.value))
                                    }), (0, d.jsxs)("button", {
                                        type: "button",
                                        className: b().checbox,
                                        onClick: () => {
                                            y(e => !e), G(1)
                                        },
                                        children: [(0, d.jsx)("input", {
                                            type: "checkbox", checked: w, onChange: () => {
                                            }
                                        }), (0, d.jsxs)("div", {
                                            className: b().label,
                                            children: ["Can work remotely ", (0, d.jsx)(p, {className: b().globeIcon})]
                                        })]
                                    }), (null == I ? void 0 : I.length) || (null == v ? void 0 : v.length) || w || (null == L ? void 0 : L.length) ? (0, d.jsx)("button", {
                                        type: "button",
                                        className: "".concat(b().searchLinkWrapper),
                                        onClick: () => {
                                            x([]), S([]), y(!1), A(""), G(1), E("")
                                        },
                                        id: "reset-smart-recruiters-filter",
                                        "aria-controls": "metanav-search-panel",
                                        children: "Reset filters"
                                    }) : (0, d.jsx)("div", {className: "w-55 h-18"})]
                                }), (0, d.jsx)("div", {
                                    className: b().jobListContainer,
                                    children: (null == W ? void 0 : W.length) ? (0, d.jsxs)(d.Fragment, {
                                        children: [(0, d.jsxs)("div", {
                                            className: "hidden md:grid grid-cols-4 text-2xl font-bold my-32 mx-26 gap-30",
                                            children: [(0, d.jsx)("div", {
                                                className: "col-span-2",
                                                children: "Job title"
                                            }), (0, d.jsx)("div", {
                                                className: "col-span-1",
                                                children: "Location"
                                            }), (0, d.jsx)("div", {className: "col-span-1", children: "Department"})]
                                        }), W.map(e => (0, d.jsx)("a", {
                                            href: "https://www.smartrecruiters.com/".concat(e.company.identifier, "/").concat(e.id),
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, d.jsxs)("div", {
                                                className: b().jobItem,
                                                children: [(0, d.jsx)("div", {
                                                    className: " md:col-span-2 col-span-full md:text-15 md:text-2xl text-3xl font-bold md:font-normal md:mb-0 mb-20",
                                                    children: e.name
                                                }), (0, d.jsxs)("div", {
                                                    className: "gap-8 md:col-span-1 col-span-full md:text-2xl",
                                                    children: [e.location.city, ",", " ", "us" === e.location.country ? e.location.region : f.find(a => a.code === e.location.country.toUpperCase()).name, " ", e.location.remote ? (0, d.jsx)(p, {className: "".concat(b().globeIcon, " mb-3 ml-3")}) : null]
                                                }), (0, d.jsxs)("div", {
                                                    className: "md:col-span-1 col-span-full flex justify-between md:text-2xl",
                                                    children: [e.department.label, (0, d.jsx)(s.Z, {className: "rotate-180 inline hover:[&_*]:fill-white"})]
                                                })]
                                            }, e.id)
                                        }, e.id))]
                                    }) : (0, d.jsx)(d.Fragment, {})
                                })]
                            })]
                        })
                    }), h ? null : (0, d.jsx)("div", {
                        className: "job-listing-pagination",
                        children: (0, d.jsx)(N.Z, {pageChange: G, children: K})
                    })]
                })
            })
        };
        var B = y
    }, 45596: function (e) {
        e.exports = {dropdown: "dropdown_dropdown__4npMx"}
    }, 40817: function (e) {
        e.exports = {
            dropdownItemWrapper: "dropdownItem_dropdownItemWrapper__RvfQi",
            link: "dropdownItem_link__JAPSv",
            supportIcon: "dropdownItem_supportIcon__y3sQ4",
            chevronDown: "dropdownItem_chevronDown__YOwUv",
            isOpened: "dropdownItem_isOpened__QYXTM",
            dropdownItem: "dropdownItem_dropdownItem__UYcIB",
            isDropdownOpen: "dropdownItem_isDropdownOpen__8cyfW",
            sublink: "dropdownItem_sublink__h_RPe",
            blue: "dropdownItem_blue__H8Brh"
        }
    }, 68320: function (e) {
        e.exports = {
            smartRecruiters: "job_listing_module_smartRecruiters__me1Cp",
            background: "job_listing_module_background__FgKds",
            root: "job_listing_module_root__UErux",
            searchInputWrapper: "job_listing_module_searchInputWrapper__q0Dpj",
            searchClearIcon: "job_listing_module_searchClearIcon__pmSXI",
            buttonWrapper: "job_listing_module_buttonWrapper__OoIIk",
            filterButton: "job_listing_module_filterButton__0nsVv",
            filterIcon: "job_listing_module_filterIcon__lOPug",
            clearIconWrapper: "job_listing_module_clearIconWrapper__pWD1e",
            searchInput: "job_listing_module_searchInput__hKirW",
            searchButton: "job_listing_module_searchButton__EpsvR",
            checbox: "job_listing_module_checbox__kZFo6",
            label: "job_listing_module_label__q2AVI",
            globeIcon: "job_listing_module_globeIcon__PUr0G",
            langmenu: "job_listing_module_langmenu__T6GVZ",
            langmenuitem: "job_listing_module_langmenuitem__aZ2Oz",
            searchLinkWrapper: "job_listing_module_searchLinkWrapper__MxVIT",
            jobListContainer: "job_listing_module_jobListContainer__x5EXY",
            jobItem: "job_listing_module_jobItem__nZfOr",
            menuContainer: "job_listing_module_menuContainer__me5Xi",
            hideMobile: "job_listing_module_hideMobile__x84WC",
            showMobile: "job_listing_module_showMobile__0xgrr",
            initialHidden: "job_listing_module_initialHidden__bwxAO",
            visible: "job_listing_module_visible__8ftIY",
            loading: "job_listing_module_loading__CXO1Z"
        }
    }
}]);
//# sourceMappingURL=271.f90e16c64ee28ed1.js.map
