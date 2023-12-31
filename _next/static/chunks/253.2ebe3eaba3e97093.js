(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[253], {
    6253: function (e, r, t) {
        "use strict";
        let n;
        t.r(r), t.d(r, {
            default: function () {
                return w
            }
        });
        var i = t(85893), a = t(94184), s = t.n(a), o = t(67294), l = t(11163), c = t(81536);
        let u = new Map, d = new WeakMap, m = 0;
        var f = t(39579), p = t(15287), x = t.n(p);
        let v = e => {
            let r = {};
            r = {
                src: "",
                utm_source: "",
                utm_medium: "",
                utm_term: "",
                utm_content: "",
                utm_campaign: "",
                utm_ID: "",
                ls: "",
                ls_detail: "",
                ls_type: "",
                gclid: "", ...r
            };
            let t = ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_ID", "utm_campaign", "gclid"],
                n = new URL(window.location.toString()).searchParams;
            return null == t || t.forEach(e => {
                n.get(e) && (r[e] = n.get(e))
            }), n.get("utm_ID") ? r.utm_campaign = n.get("utm_ID") : n.get("utm_campaign") && (r.utm_campaign = n.get("utm_campaign")), /\bemail\b/i.test(r.utm_source) || /\bemail\b/i.test(r.utm_medium) ? (r.ls = "Marketing Campaign", r.ls_type = r.utm_medium) : /\bcpm\b/i.test(r.utm_source) || /\bcpm\b/i.test(r.utm_medium) ? (r.ls = "Publisher", r.ls_type = "Publisher") : ["linkedin", "facebook", "twitter"].includes(r.utm_source.toLowerCase()) ? /\bcpc\b/i.test(r.utm_medium) ? (r.ls = "Paid Social", r.ls_type = r.utm_source) : /\bsocial\b/i.test(r.utm_medium) && (r.ls = "Organic Social", r.ls_type = r.utm_source) : /\bcpc\b/i.test(r.utm_source) || /\bcpc\b/i.test(r.utm_medium) ? r.ls = "Paid Search" : r.ls = "Website Direct", r.ls_type || (r.ls_type = (null == e ? void 0 : e.Lead_Source_Type__c) || ("Website Direct" === r.ls ? "Website" : "")), r
        }, g = e => {
            if (e.utm_source.indexOf("partner") > -1) {
                let r = e.utm_source.split("-", 2);
                e.ls = "Partners", e.ls_type = void 0 !== r[1] ? r[1] : "", e.pcheck = "true", e.utm_source = e.ls, e.utm_medium = e.ls_type
            } else e.pcheck = "false";
            return e
        }, h = e => ({
            LeadSource: null == e ? void 0 : e.ls,
            Lead_Source_Type__c: null == e ? void 0 : e.ls_type,
            Lead_Source_Detail__c: null == e ? void 0 : e.ls_detail,
            Lead_Source_Recent__c: null == e ? void 0 : e.ls_detail,
            Campaign_Content__c: null == e ? void 0 : e.utm_content,
            Campaign_ID__c: null == e ? void 0 : e.utm_campaign,
            Campaign_Medium__c: null == e ? void 0 : e.utm_medium,
            Campaign_Term__c: e.utm_term,
            Campaign_Source__c: null == e ? void 0 : e.utm_source,
            Google_Click_Id__c: null == e ? void 0 : e.gclid
        });
        var b = JSON.parse('{"First Name":{"de":"Vorname","es":"Nombre","fr":"Pr\xe9nom","it":"Nome","ja":"名","ko":"","es-mx":"Nombre","pt-br":"","en":"First Name"},"Last Name":{"de":"Nachname","es":"Apellido","es-mx":"Apellido","fr":"Nom","it":"Cognome","ja":"姓","en":"Last Name"},"Company Name":{"de":"Firma","es":"Nombre de la empresa","fr":"Nom de l\'entreprise","it":"Nome Azienda","ja":"会社名","ko":"","es-mx":"Nombre de la empresa","pt-br":"","en":"Company Name"},"Email":{"de":"E-Mail","es":"Correo electr\xf3nico","fr":"Email","it":"Email","ja":"Eメール","ko":"","es-mx":"","pt-br":"","en":"Email"},"Phone":{"de":"Telefon","es":"Tel\xe9fono","fr":"T\xe9l\xe9phone","it":"Telefono","ja":"電話番号","ko":"","es-mx":"Tel\xe9fono","pt-br":"","en":"Phone"},"safeharbor":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"safeharbor"},"Sales rep / Customer success manager name":{"de":"Name des Vertriebsmitarbeiters / Customer-Success-Manager","es":"Nombre del representante de Ventas / del Customer Success Manager ","es-mx":"Representante de Ventas / Nombre del Customer success manager ","fr":"Nom du repr\xe9sentant commercial ou du Customer Success Manager","it":"Nome del rappresentante di vendita / Customer Success Manager ","ja":"セールス担当者 / カスタマーサクセスマネージャーの名前","en":"Sales rep / Customer success manager name"},"Job Level":{"de":"Verantwortungsbereich","es":"Nivel laboral","fr":"Niveau de fonction","it":"Livello professionale","ja":"役職","ko":"","es-mx":"Nivel de puesto","pt-br":"","en":"Job Level"},"Job Function":{"de":"Aufgabenbereich","es":"Funci\xf3n laboral","fr":"Fonction","it":"Funzione lavorativa","ja":"職務","ko":"","es-mx":"Funci\xf3n de puesto","pt-br":"","en":"Job Function"},"Event Location":{"de":"Veranstaltungsort","es":"Ubicaci\xf3n del evento","fr":"Lieu de l\'\xe9v\xe8nement","it":"Luogo evento","ja":"イベント会場","ko":"","es-mx":"Lugar del evento","pt-br":"","en":"Event Location"},"Company Size":{"de":"Gr\xf6\xdfe des Unternehmens","es":"Tama\xf1o de la empresa","fr":"Taille de l\'entreprise","it":"Dimensione Azienda","ja":"会社の規模","ko":"","es-mx":"Tama\xf1o de la empresa","pt-br":"","en":"Company Size"},"Area of interest":{"de":"Interessensbereich","es":"\xc1rea de inter\xe9s","es-mx":"\xc1rea de inter\xe9s","fr":"Domaine d\'int\xe9r\xeat","it":"Area di interesse","ja":"興味のある分野","en":"Area of interest"},"Country":{"de":"Land","es":"Pa\xeds","fr":"Pays","it":"Paese","ja":"国","ko":"","es-mx":"","pt-br":"","en":"Country"},"State":{"de":"Status","fr":"État","ja":"状態","ko":"","es-mx":"","pt-br":"","en":"State"},"Request Type":{"de":"Art der Anfrage","es":"Solicite tipo","fr":"Type de requ\xeate","it":"Tipo di Richiesta","ja":"リクエストの種類","ko":"","es-mx":"","pt-br":"","en":"Request Type"},"Region":{"de":"Region","es":"Regi\xf3n","es-mx":"","fr":"R\xe9gion","it":"Regione","ja":"地域","ko":"","pt-br":"","en":"Region"},"Meeting Type":{"de":"","es":"","ja":"","it":"","fr":"","ko":"","es-mx":"","pt-br":"","en":"Meeting Type"},"Please enter a value":{"de":"Angabe erforderlich","es":"Introduzca un valor","fr":"Veuillez saisir une valeur","it":"Inserisci un valore","ja":"入力してください","ko":"","es-mx":"","pt-br":"","en":"Please enter a value"},"Email address is mandatory":{"de":"E-Mail-Adresse ist erforderlich","es":"La direcci\xf3n de correo electr\xf3nico es obligatoria","fr":"L\'adresse e-mail est obligatoire","it":"L\'indirizzo email \xe8 obbligatorio","ja":"メールアドレスは必須です","ko":"","es-mx":"","pt-br":"","en":"Email address is mandatory"},"Please enter a valid email address":{"de":"Bitte geben Sie eine g\xfcltige E-mail Adresse ein","es":"Introduzca una direcci\xf3n de correo electr\xf3nico v\xe1lida","fr":"Veuillez entrer une adresse \xe9lectronique valide","it":"Per favore inserire un indirizzo email valido","ja":"正しいメールアドレスを入力して下さい","ko":"","es-mx":"","pt-br":"","en":"Please enter a valid email address"},"Please enter your corporate email address":{"de":"Bitte geben Sie Ihre gesch\xe4ftliche E-Mail-Adresse ein","es":"Introduzca su direcci\xf3n de correo electr\xf3nico corporativa","fr":"Veuillez saisir votre adresse e-mail professionnelle","it":"Inserisci il tuo indirizzo email aziendale","ja":"法人のメールアドレスを入力してください。","ko":"","es-mx":"","pt-br":"","en":"Please enter your corporate email address"},"Please enter your email to subscribe":{"de":"Please enter your email to subscribe","es":"Please enter your email to subscribe","fr":"Please enter your email to subscribe","it":"Please enter your email to subscribe","ja":"Please enter your email to subscribe","ko":"Please enter your email to subscribe","es-mx":"Please enter your email to subscribe","pt-br":"Please enter your email to subscribe","en":"Please enter your email to subscribe"},"Phone number is mandatory":{"de":"Rufnummer ist verpflichtend","es":"El n\xfamero de tel\xe9fono es obligatorio","fr":"Le num\xe9ro de t\xe9l\xe9phone est obligatoire","it":"Il numero di cellulare e\' obbligatorio","ja":"電話番号は必須です","ko":"","es-mx":"","pt-br":"","en":"Phone number is mandatory"},"Please enter a valid phone number":{"de":"Bitte geben Sie eine g\xfcltige Telefonnummer ein","es":"Introduzca un n\xfamero de tel\xe9fono v\xe1lido","fr":"Veuillez saisir un num\xe9ro de t\xe9l\xe9phone valide","it":"Inserisci un numero di telefono valido","ja":"電話番号を入力してください","ko":"","es-mx":"","pt-br":"","en":"Please enter a valid phone number"},"Please mark the option checked":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Please mark the option checked"},"Quantity can not be zero":{"de":"","es":"","ja":"","it":"","fr":"","ko":"","es-mx":"","pt-br":"","en":"Quantity can not be zero"},"Quantity can not be negative":{"de":"","es":"","ja":"","it":"","fr":"","ko":"","es-mx":"","pt-br":"","en":"Quantity can not be negative"},"Please select your role":{"de":"Bitte w\xe4hlen Sie Ihre Rolle aus","es":"Seleccione su cargo","fr":"Veuillez s\xe9lectionner votre r\xf4le","it":"Seleziona il tuo ruolo","ja":"担当を選択してください","ko":"","es-mx":"","pt-br":"","en":"Please select your role"},"Please select your job level":{"de":"Bitte w\xe4hlen Sie Ihre Verantwortungsbereich aus","es":"Seleccione su nivel laboral","fr":"Veuillez s\xe9lectionner votre niveau de fonction","it":"Seleziona il tuo livello","ja":"役職を選択してください","ko":"","es-mx":"","pt-br":"","en":"Please select your job level"},"Please select your job function":{"de":"Bitte w\xe4hlen Sie Ihren Aufgabenbereich aus","es":"Seleccione su funci\xf3n laboral","fr":"Veuillez s\xe9lectionner votre fonction","it":"Seleziona la tua funzione lavorativa","ja":"職務を選択してください","ko":"","es-mx":"","pt-br":"","en":"Please select your job function"},"Please select your company size":{"de":"Bitte w\xe4hlen Sie die Gr\xf6\xdfe Ihres Unternehmens aus","es":"Seleccione el tama\xf1o de su empresa","fr":"Veuillez s\xe9lectionner la taille de votre entreprise","it":"Seleziona la dimensione della tua azienda","ja":"会社の規模を選択してください","ko":"","es-mx":"","pt-br":"","en":"Please select your company size"},"Please select your area of interest":{"de":"Bitte w\xe4hlen Sie aus, an welchen Themen Sie interessiert sind","es":"Seleccione su \xe1rea de inter\xe9s","fr":"Veuillez s\xe9lectionner votre centre d\'int\xe9r\xeat","it":"Seleziona la tua area di interesse","ja":"お探しの地域を選択してください","ko":"","es-mx":"","pt-br":"","en":"Please select your area of interest"},"Please select your country":{"de":"Bitte w\xe4hlen Sie Ihr Land aus","es":"Seleccione su pa\xeds","fr":"Veuillez s\xe9lectionner votre pays","it":"Seleziona il tuo Paese","ja":"国を選択してください","ko":"","es-mx":"","pt-br":"","en":"Please select your country"},"Please select your state":{"de":"Bitte w\xe4hlen Sie Ihr Land aus","es":"Por favor seleccione su pais","fr":"Veuillez s\xe9lectionner votre pays","it":"Per favore seleziona il tuo Stato","ja":"州を選択してください","ko":"","es-mx":"","pt-br":"","en":"Please select your state"},"Please select your reason for contacting":{"de":"Bitte w\xe4hlen Sie den Grund f\xfcr die Kontaktaufnahme aus","es":"Seleccione el motivo por el que ha contactado","fr":"Veuillez s\xe9lectionner la raison pour laquelle vous nous contactez","it":"Seleziona il motivo per cui ci contatti","ja":"お問い合わせの理由を選択してください","ko":"","es-mx":"","pt-br":"","en":"Please select your reason for contacting"},"Please select a region":{"de":"Bitte w\xe4hlen Sie eine Region aus","es":"Por favor, seleccione una regi\xf3n","fr":"Merci de s\xe9lectionner une r\xe9gion","it":"Seleziona una regione","ja":"地域を選択してください","ko":"","es-mx":"","pt-br":"","en":"Please select a region"},"Please choose, how do you prefer to meet":{"de":"Bitte w\xe4hlen Sie, wie Sie sich treffen m\xf6chten","es":"Indique su preferencia","es-mx":"","fr":"Veuillez indiquer votre pr\xe9f\xe9rence","it":"Indicare la propria preferenza","ja":"ご希望の参加方法を選択してください","ko":"","pt-br":"","en":"Please choose, how do you prefer to meet"},"C-Level":{"de":"C-Level","es":"C-Level","es-mx":"C-Level","fr":"C-Level","it":"C-Level","ja":"C-Level","en":"C-Level"},"VP":{"de":"VP","es":"VP","es-mx":"VP","fr":"VP","it":"VP","ja":"VP","en":"VP"},"DevOps":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"DevOps"},"NetOps":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"NetOps"},"Email Address":{"de":"E-mail Adresse","es":"Correo electr\xf3nico","es-mx":"Correo elect\xf3nico corporativo","fr":"Adresse e-mail","it":"Indirizzo e-mail","ja":"メールアドレス","en":"Email Address"},"Director":{"de":"Director","es":"Director","es-mx":"Director","fr":"Directeur","it":"Direttore","ja":"部長","en":"Director"},"Manager":{"de":"Leiter","es":"Manager","es-mx":"Manager","fr":"Manager","it":"Gerente","ja":"課長","en":"Manager"},"TI":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"TI"},"Business":{"de":"Gesch\xe4ft","es":"Business","es-mx":"Business","fr":"Business","it":"Empresa","ja":"ビジネス","en":"Business"},"Pricing Info":{"de":"Preisinformation","es":"Informaci\xf3n de precios","es-mx":"Informaci\xf3n de precios","fr":"Infos tarifaires","it":"Info Prezzi","ja":"価格情報","en":"Pricing Info"},"Product Info":{"de":"Produktangaben","es":"Informaci\xf3n de producto","es-mx":"Informaci\xf3n de producto","fr":"Infos sur les produits","it":"Info Prodotti","ja":"製品情報","en":"Product Info"},"Press inquiry":{"de":"Presseanfrage","es":"Consulta de prensa","es-mx":"Consulta de prensa","fr":"Demande Presse","it":"Ufficio Stampa","ja":"報道機関からのお問い合わせ","en":"Press Inquiry"},"Current Customer":{"de":"Bestandskunde","es":"Cliente actual","es-mx":"Cliente actual","fr":"Client actuel","it":"Cliente Attuale","ja":"既存のお客様からのお問い合わせ","en":"Current Customer"},"Other":{"de":"Andere","es":"Otro","es-mx":"Otro","fr":"Autre","it":"Altro","ja":"その他","en":"Other"},"Select Country":{"de":"Land ausw\xe4hlen","es":"Seleccionar un pais","es-mx":"Seleccionar pa\xeds","fr":"S\xe9lectionner un pays","it":"Scegli il tuo Paese","ja":"国を選択する","en":"Select Country"},"Architect":{"de":"Architekt","es":"Arquitecto","es-mx":"Arquitecto","fr":"Architecte","it":"Architetto","ja":"アーキテクト","en":"Architect"},"Engineer":{"de":"Ingenieur","es":"Ingeniero","es-mx":"Ingeniero","fr":"Ing\xe9nieur","it":"Ingegnere","ja":"エンジニア","en":"Engineer"},"Admin/Analyst":{"de":"Verwalter/Analyst","es":"Administrador/Analista","es-mx":"Administrador/Analista","fr":"Administrateur/Analyste","it":"Analista/Amministratore","ja":"アドミニストレーター / アナリスト","en":"Admin/Analyst"},"Network":{"de":"Netzwerk","es":"Red","es-mx":"Red","fr":"R\xe9seau","it":"Rete","ja":"ネットワーク","en":"Network"},"Information Security":{"de":"Informationssicherheit","es":"Seguridad de la Informaci\xf3n","es-mx":"Seguridad de la informaci\xf3n","fr":"S\xe9curit\xe9 de l\'information","it":"Information Security","ja":"情報セキュリティ","en":"Information Security"},"IT":{"de":"IT","es":"TI","es-mx":"TI","fr":"IT","it":"IT","ja":"IT","en":"IT"},"Risk & Compliance":{"de":"Risiko- und Compliance","es":"Riesgo y Cumplimiento","es-mx":"Riesgo y Cumplimiento","fr":"Risque et Conformit\xe9","it":"Rischio e Conformit\xe0","ja":"リスクとコンプライアンス","en":"Risk & Compliance"},"Sales/Marketing":{"de":"Vertrieb/Marketing","es":"Ventas/Marketing","es-mx":"Ventas/Marketing","fr":"Ventes/Marketing","it":"Vandite/Marketing","ja":"セールス / マーケティング","en":"Sales/Marketing"},"Help Desk/Service Desk":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"ヘルプデスク/サービスデスク","en":"Help Desk/Service Desk"},"Network Ops":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Network Ops"},"Select Job Level":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Select Job Level"},"Select Job Function":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Select Job Function"},"Yes, please keep me updated on Zscaler news, events, webcast and special offers":{"de":"Ja, ich m\xf6chte Informationen zu aktuellen Nachrichten, Events, Webcasts und Angeboten von Zscaler erhalten.","es":"S\xed, mant\xe9nganme informado sobre noticias, eventos, webcasts y ofertas especiales de Zscaler.","es-mx":"S\xed, mant\xe9nganme informado sobre noticias, eventos, webcasts y ofertas especiales de Zscaler.","fr":"Oui, veuillez me tenir au courant des actualit\xe9s, des \xe9v\xe9nements, des webinaires et des offres sp\xe9ciales de Zscaler.","it":"S\xec, tienimi aggiornato su notizie, eventi, webcast e offerte speciali di Zscaler.","ja":"Zscalerのニュース、イベント、Webキャスト、特典などの最新情報を受け取る。","en":"Yes, please keep me updated on Zscaler news, events, webcast and special offers."},"Work Email":{"de":"E-Mail (gesch\xe4ftl.)","es":"Correo electr\xf3nico laboral","es-mx":"Correo electr\xf3nico corporativo","fr":"E-mail professionnel","it":"Email professionale","ja":"業務用メールアドレス","en":"Work Email"},"Job Applicant Deletion Requests":{"de":"Anfrage auf L\xf6schung von Daten im Zusammenhang mit einer Stellenbewerbung","es":"Solicitudes de eliminaci\xf3n de solicitante de trabajo","es-mx":"Solicitudes para eliminar puestos de trabajo","fr":"Demandes de suppression de demandeurs d\'emploi","it":"Richieste di cancellazione del candidato","ja":"求人応募情報削除依頼","en":"Job Applicant Deletion Requests"},"Marketing Deletion Requests":{"de":"Anfrage auf L\xf6schung von Daten im Zusammenhang mit Marketing-Aktivit\xe4ten","es":"Solicitudes de eliminaci\xf3n de marketing","es-mx":"Solicitudes para eliminar marketing","fr":"Demande de suppression marketing","it":"Richiesta di cancellazione marketing","ja":"マーケティング情報削除依頼","en":"Marketing Deletion Requests"},"Other Privacy Requests":{"de":"Sonstige Anfragen in Bezug auf Datenschutz","es":"Otras solicitudes de privacidad","es-mx":"Otras solicitudes de privacidad","fr":"Autres demandes li\xe9es \xe0 la protection de la vie priv\xe9e","it":"Altre richieste di privacy","ja":"その他の個人情報に関する依頼","en":"Other Privacy Requests"},"Industry reports":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Industry reports"},"Datasheets":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Datasheets"},"Solution briefs":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Solution briefs"},"Brochures and ebooks":{"de":"Brosch\xfcren und eBooks","es":"Folletos y libros electr\xf3nicos","es-mx":"Folletos e eBooks","fr":"Brochures et livres \xe9lectroniques","it":"Brochure e eBook","ja":"パンフレットとeBook","en":"Brochures and ebooks"},"Case studies":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Case studies"},"White papers":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"White papers"},"Infographics":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Infographics"},"Reference architectures":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Reference architectures"},"Videos":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Videos"},"Advanced Threat Prevention":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Advanced Threat Prevention"},"Branch Transformation":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Branch Transformation"},"Data Protection":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Data Protection"},"Zscaler Cloud Platform":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zscaler Cloud Platform"},"Office 365":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Office 365"},"Threat Prevention":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Threat Prevention"},"Access Control":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Access Control"},"Secure Network Transformation":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Secure Network Transformation"},"Secure Application Transformation":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Secure Application Transformation"},"SD-WAN Security":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"SD-WAN Security"},"Zero Trust":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zero Trust"},"Digital Experience Monitoring":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Digital Experience Monitoring"},"English":{"de":"Englisch","es":"Ingl\xe9s","es-mx":"Ingl\xe9s","fr":"Anglais","it":"Inglese","ja":"英語","en":"English"},"French":{"de":"Franz\xf6sisch","es":"Franc\xe9s","es-mx":"Franc\xe9s","fr":"Fran\xe7ais","it":"Francese","ja":"フランス語","en":"French"},"German":{"de":"Deutsch","es":"Alem\xe1n","es-mx":"Alem\xe1n","fr":"Allemand","it":"Tedesco","ja":"ドイツ語","en":"German"},"Italian":{"de":"Italienisch","es":"Italiano","es-mx":"Italiano","fr":"Italien","it":"Italiano","ja":"イタリア語","en":"Italian"},"Japanese":{"de":"Japanisch","es":"Japon\xe9s","es-mx":"Japon\xe9s","fr":"Japonais","it":"Giapponese","ja":"日本語","en":"Japanese"},"Mexican Spanish":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Mexican Spanish"},"Spain Spanish":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Spain Spanish"},"Postal Code":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Postal Code"},"Zscaler Internet Access":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zscaler Internet Access"},"Zscaler Private Access":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zscaler Private Access"},"Zscaler Digital Experience":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zscaler Digital Experience"},"Workload Communication":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Workload Communication"},"Posture Control":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Posture Control"},"Isolation":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Isolation"},"Optimize Digital Experiences":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Optimize Digital Experiences"},"Stop Cyberattacks":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Stop Cyberattacks"},"Protect Data":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Protect Data"},"Zero Trust App Access":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zero Trust App Access"},"Zero Trust SD-WAN":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zero Trust SD-WAN"},"Zero Trust for IoT/OT":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zero Trust for IoT/OT"},"Accelerate M&A Integration":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Accelerate M&A Integration"},"Build and Run Secure Cloud Apps":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Build and Run Secure Cloud Apps"},"Zero Trust Cloud Connectivity":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zero Trust Cloud Connectivity"},"Privileged Remote Access for OT":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Privileged Remote Access for OT"},"Manufacturing":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Manufacturing"},"Financial Services & Insurance":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Financial Services & Insurance"},"Healthcare & Pharmaceutical":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Healthcare & Pharmaceutical"},"Services":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Services"},"Retail & Wholesale":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Retail & Wholesale"},"High Tech":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"High Tech"},"Food, Beverage & Tobacco":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Food, Beverage & Tobacco"},"Federal & Government":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Federal & Government"},"Transportation Services":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Transportation Services"},"Agriculture & Forestry":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Agriculture & Forestry"},"Construction":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Construction"},"Energy, Oil, Gas & Mining":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Energy, Oil, Gas & Mining"},"Nonprofit Institutions":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Nonprofit Institutions"},"Real Estate":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Real Estate"},"Telecommunications":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Telecommunications"},"Entertainment & Hospitality":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Entertainment & Hospitality"},"Americas":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Americas"},"EMEA":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"EMEA"},"Asia Pacific":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Asia Pacific"},"Blog":{"de":"Blog","es":"Blog","es-mx":"Blog","fr":"Blog","it":"Blog","ja":"ブログ","en":"Blog"},"Case Study":{"de":"Case Study","es":"Caso pr\xe1ctico","es-mx":"Caso pr\xe1ctico","fr":"\xc9tude de cas","it":"Case Study","ja":"ケーススタディ","en":"Case Study"},"Media Article":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Media Article"},"Press Release":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Press Release"},"Webinar":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Webinar"},"Video":{"de":"Video","es":"Video","es-mx":"Video","fr":"Vid\xe9o","it":"Video","ja":"ビデオ","en":"Video"},"Newest to Oldest":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Newest to Oldest"},"Oldest to Newest":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Oldest to Newest"},"A → Z":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"A → Z"},"Z → A":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Z → A"},"Fabrication":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Fabrication"},"Services financiers":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Services financiers"},"Health Care":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Health Care"},"High-Tech":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"High-Tech"},"Check Point":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Check Point"},"Cisco AnyConnect":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Cisco AnyConnect"},"Citrix Netscaler":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Citrix Netscaler"},"F5 APM":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"F5 APM"},"Palo Alto Networks Global Protect":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Palo Alto Networks Global Protect"},"Pulse Secure Connect":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Pulse Secure Connect"},"Web":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Web"},"Behavioral Analysis":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Behavioral Analysis"},"SHIFT":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"SHIFT"},"Firewall":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Firewall"},"DLP":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"DLP"},"ZPA":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"ZPA"},"Bandwidth Control":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Bandwidth Control"},"NSS":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"NSS"},"Business Address":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Business Address"},"Select your country":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Select your country"},"Select your state":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Select your state"},"Current VPN Solution":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Current VPN Solution"},"Select":{"de":"Ausw\xe4hlen","es":"Seleccione","es-mx":"Seleccionar","fr":"S\xe9lectionner","it":"Seleziona","ja":"選択","en":"Select"},"JAPAN Nov 22":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"JAPAN Nov 22"},"Select Region":{"de":"Region ausw\xe4hlen","es":"Seleccionar una region","es-mx":"Seleccionar regi\xf3n","fr":"S\xe9lectionner une r\xe9gion","it":"Selezionare una regione","ja":"地域を選択してください","en":"Select Region"},"Select Company Size":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Select Company Size"},"Zero Trust Architecture (Zero Trust Exchange)":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zero Trust Architecture (Zero Trust Exchange)"},"ZIA (Zscaler Internet Access)":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"ZIA (Zscaler Internet Access)"},"ZPA (Zscaler Private Access) - secure access to applications in Azure , AWS or Google":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"ZPA (Zscaler Private Access) - secure access to applications in Azure , AWS or Google"},"Data Protection (CASB and DLP)":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Data Protection (CASB and DLP)"},"Advanced Threat Protection (Sandbox, Firewall, etc.)":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Advanced Threat Protection (Sandbox, Firewall, etc.)"},"Honeypot - Deception Technology":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Honeypot - Deception Technology"},"Workload Posture - CSPM/CIEM/IaC Code Scanning":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Workload Posture - CSPM/CIEM/IaC Code Scanning"},"Source string (Built-in English)Zero Trust Branch Connectivity / SD-WAN / Microsoft 365":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Source string (Built-in English)Zero Trust Branch Connectivity / SD-WAN / Microsoft 365"},"Secure Work from Anywhere":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Secure Work from Anywhere"},"Mergers and Divestitures / M&A IT Integration":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Mergers and Divestitures / M&A IT Integration"},"Microsegmentation":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Microsegmentation"},"Select Topic":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Select Topic"},"Company":{"de":"Unternehmen","es":"Empresa","es-mx":"Empresa","fr":"Entreprise","it":"Azienda","ja":"会社名","en":"Company"},"Virtual":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Virtual"},"OnSite":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"OnSite"},"Advanced Risk and Threat correlation":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Advanced Risk and Threat correlation"},"Cloud-native application protection platform (CNAPP)":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Cloud-native application protection platform (CNAPP)"},"Continuous Compliance Management":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Continuous Compliance Management"},"Cyberthreat protection for cloud workloads and applications":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Cyberthreat protection for cloud workloads and applications"},"Data loss protection for cloud workloads and applications":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Data loss protection for cloud workloads and applications"},"Firewall, VPN replacement":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Firewall, VPN replacement"},"Vulnerability Management":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Vulnerability Management"},"Zero Trust for cloud workloads and applications":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Zero Trust for cloud workloads and applications"},"Inperson":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Inperson"},"Select Meeting Type":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Select Meeting Type"},"Select Company size":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Select Company size"},"Select State":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Select State"},"Areas of Interest":{"de":"","es":"","es-mx":"","fr":"","it":"","ja":"","en":"Areas of Interest"},"By submitting the form, you are agreeing to our privacy policy.":{"de":"Durch Absenden des Formulars stimmen Sie unseren <a href=\'/privacy-compliance/privacy-policy\'>Datenschutzbestimmungen </a>zu","es":" Al enviar el formulario, usted acepta nuestra <a href=\'/privacy-compliance/privacy-policy\'>pol\xedtica de privacidad</a>","es-mx":"Al enviar el formulario, declara estar de acuerdo con nuestra <a href=\'/privacy-compliance/privacy-policy\'>pol\xedtica de privacidad","fr":"En soumettant le formulaire, vous acceptez notre <a href=\'/privacy-compliance/privacy-policy\'>politique de confidentialit\xe9","it":"Inviando il modulo, l\'utente accetta la nostra <a href=\'/privacy-compliance/privacy-policy\'>politica sulla privacy.</a>","ja":"このフォームを送信することで、Zscalerの<a href=\'/privacy-compliance/privacy-policy\'>プライバシー ポリシー</a>に同意したものとみなされます。","en":"By submitting the form, you are agreeing to our  <a href=\'/privacy-compliance/privacy-policy\'>privacy policy.</a>"},"privacy policy":{"de":"","es":"pol\xedtica de privacidad","es-mx":"pol\xedtica de privacidad","fr":"politique de confidentialit\xe9","it":"nostra politica di privacy","ja":"","en":"privacy policy"},"SUBMIT":{"de":"Abschicken","es":"Enviar","es-mx":"Enviar","fr":"Envoyer","it":"Invia","ja":"送信","en":"SUBMIT"},"Submit":{"de":"Abschicken","es":"Enviar","es-mx":"Enviar","fr":"Envoyer","it":"Invia","ja":"送信","en":"Submit"},"Get started":{"de":"LOSLEGEN","es":"PRIMEROS PASOS","es-mx":"EMPEZAR","fr":"D\xc9MARRER","it":"INIZIA","ja":"開始する","en":"Get started"},"GET STARTED":{"de":"LOSLEGEN","es":"PRIMEROS PASOS","es-mx":"EMPEZAR","fr":"D\xc9MARRER","it":"INIZIA","ja":"開始する","en":"GET STARTED"},"Subscribe":{"de":"Abonnieren","es":"Suscr\xedbase","es-mx":"Suscribirse","fr":"S\'abonner","it":"Iscriviti","ja":"登録する","en":"Subscribe"},"Enter your questions or comments here":{"de":"Geben Sie hier Ihre Fragen oder Anmerkungen ein","es":"Introduzca sus preguntas o comentarios aqu\xed","es-mx":"Escriba sus preguntas o comentarios aqu\xed","fr":"Saisissez vos questions ou commentaires ici","it":"Inserisci qui le tue domande o commenti","ja":"質問・コメントをご入力ください","en":"Enter your questions or comments here"},"What would you like us to show you?":{"de":"An welchen Anwendungsbereichen sind Sie interessiert?","es":"\xbfQu\xe9 quieres que te ense\xf1emos?","es-mx":"\xbfQu\xe9 quieres que te mostremos?","fr":"Que souhaitez-vous que l\'on vous montre ?","it":"Cosa vuoi che ti mostriamo?","ja":"詳細を希望する項目をすべて選択してください","en":"What would you like us to show you?"},"Delivering zero trust for users and applications":{"de":"Bereitstellung von Zero Trust f\xfcr User und Anwendungen","es":"Zero Trust para usuarios y aplicaciones","es-mx":"Zero Trust para usuarios y aplicaciones","fr":"Mettre en place le Zero Trust pour utilisateurs et applications","it":"Mettere in pratica lo zero trust per user e applicativi","ja":"ユーザーとアプリケーションへのゼロトラストの提供","en":"Delivering zero trust for users and applications"},"Protecting against cyberattacks":{"de":"Schutz vor Cyberangriffen","es":"Protecci\xf3n contra ciberataques","es-mx":"Protecci\xf3n contra ciberataques","fr":"Protection contre les cyberattaques","it":"Protezione contro i cyberattacchi","ja":"サイバー攻撃からの保護","en":"Protecting against cyberattacks"},"Securing users from anywhere, without a VPN":{"de":"Standortunabh\xe4ngige Sicherheit f\xfcr User ohne VPN","es":"Protecci\xf3n de los usuarios desde cualquier lugar, sin VPN","es-mx":"Protecci\xf3n de los usuarios desde cualquier lugar, sin VPNs","fr":"S\xe9curiser les utilisateurs en tout lieu, sans VPN","it":"Mettere in sicurezza gli user da ovunque, senza una VPN","ja":"あらゆる場所のユーザーをVPNなしで保護","en":"Securing users from anywhere, without a VPN"},"Protecting data anywhere":{"de":"Standortunabh\xe4ngiger Datenschutz","es":"Protecci\xf3n de datos en cualquier lugar","es-mx":"Protecci\xf3n de datos en cualquier lugar","fr":"Prot\xe9ger les donn\xe9es en tout lieu","it":"Proteggere i dati ovunque ","ja":"あらゆる場所のデータの保護","en":"Protecting data anywhere"},"Ensuring a seamless user experience on any device":{"de":"Gew\xe4hrleistung einer nahtlosen User Experience auf jedem Ger\xe4t","es":"Garantizar una experiencia de usuario fluida en cualquier dispositivo","es-mx":"Garantizar una experiencia de usuario adecuada en cualquier dispositivo","fr":"Assurer une exp\xe9rience utilisateur optimale, peu importe l\'appareil","it":"Garantire una user experience ottimale da qualunque device","ja":"あらゆるデバイスでのシームレスなユーザー エクスペリエンス","en":"Ensuring a seamless user experience on any device"},"Protecting cloud and on-premises workloads":{"de":"Schutz von Cloud- und On-Premise-Workloads","es":"Protecci\xf3n de workloads on-premises y en la nube","es-mx":"Protecci\xf3n de workloads on-prem y en la nube","fr":"Protection des workloads cloud et on-premises","it":"Proteggere il cloud ed i workload on-premises","ja":"クラウドとオンプレミスのワークロードの保護","en":"Protecting cloud and on-premises workloads"},"Setting traps for bad actors with deception technology":{"de":"Deception-Technologie zum Schutz vor Cyberkriminellen","es":"Poner trampas a los malos actores con tecnolog\xeda de Deception","es-mx":"Poner trampas a los malos actores con tecnolog\xeda de Deception","fr":"Mettre en place des pi\xe8ges avec la technology de deception","it":"Tendere trappole agli attaccanti con la deception technology ","ja":"悪意のあるアクターに罠を仕掛けるデセプション技術","en":"Setting traps for bad actors with deception technology"},"Other (please specify below)":{"de":"Sonstiges (bitte unten angeben)","es":"Otros (especifique a continuaci\xf3n)","es-mx":"Otros (favor de especificar)","fr":"Autres (merci de pr\xe9ciser ci-dessous)","it":"Altro (specifica sotto)","ja":"その他(具体的にご記入ください)","en":"Other (please specify below)"},"Anything else you\'d like to learn about?":{"de":"Gibt es noch andere Themen, \xfcber die Sie gerne mehr erfahren w\xfcrden?","es":"\xbfTe gustar\xedas aprender algo m\xe1s?","es-mx":"\xbfTe gustar\xedas aprender algo m\xe1s?","fr":"Autres sujets qui vous int\xe9ressent ?","it":"Ci sono altri temi che vorresti approfondire?","ja":"その他に知りたい情報がある場合はご記入ください","en":"Anything else you\'d like to learn about?"},"What are you interested in? (Please select all that apply.)":{"de":"Womit k\xf6nnen wir Ihnen weiterhelfen? (Bitte alle zutreffenden Antworten ausw\xe4hlen.)","es":"\xbfEn qu\xe9 est\xe1s interesado? (Selecciona todo lo que corresponda)","es-mx":"\xbfEn qu\xe9 est\xe1s interesado? (Favor de seleccionar todos los que apliquen)","fr":"Quels sont vos int\xe9r\xeats? (S\xe9l\xe9ctionner vos choix)","it":"Qual \xe8 il tuo interesse? (Selezionare una o pi\xf9 opzioni)","ja":"興味のある項目をすべて選択してください","en":"What are you interested in? (Please select all that apply.)"},"General inquiry":{"de":"Allgemeine Anfrage","es":"Informaci\xf3n general","es-mx":"Informaci\xf3n general","fr":"Demande de Renseignements","it":"Informazioni generali","ja":"一般的なお問い合わせ","en":"General inquiry"},"Press Inquiry":{"de":"Presseanfrage","es":"Consulta de prensa","es-mx":"Consulta de prensa","fr":"Renseignements Presse","it":"Informazioni stampa","ja":"プレスに関するお問い合わせ","en":"Press Inquiry"},"By clicking the “Submit” button below, you agree to our privacy policy":{"de":"","es":"Al hacer clic en el bot\xf3n ”Enviar”, aceptas nuestra pol\xedtica de privacidad.","es-mx":"Al hacer clic en el bot\xf3n ”Enviar”, aceptas nuestra pol\xedtica de privacidad.","fr":"En cliquant sur le boutton ”Continuer”, vous acceptez notre politique de confidentialit\xe9","it":"Selezionando il pulsante ”Invio” acconsenti alla nostra politica di privacy","ja":"[送信]をクリックすることで、Zscalerのプライバシー ポリシーに同意したものとみなされます","en":"By clicking the “Submit” button below, you agree to our privacy policy"},"Questions about Financial Information":{"de":"Fragen zu Finanzinformationen","es":"Preguntas sobre informaci\xf3n financiera","es-mx":"Preguntas sobre Informaci\xf3n Financiera","fr":"Questions \xe0 propos d\'information financi\xe8re","it":"Domande riguardanti informazioni finanziarie","ja":"経済情報に関する質問","en":"Questions about Financial Information"},"Questions about Corporate Governance":{"de":"Fragen zu Corporate Governance","es":"Preguntas sobre gobierno corporativo","es-mx":"Preguntas sobre Gobierno Corporativo","fr":"Questions sur la gouvernance d\'entreprise","it":"Domande riguardanti la governance dell\'azienda","ja":"コーポレート ガバナンスに関する質問","en":"Questions about Corporate Governance"},"Yes, please keep me updated on Zscaler news, events, webcast and special offers.":{"de":"Ja, ich m\xf6chte Informationen zu aktuellen Nachrichten, Events, Webcasts und Angeboten von Zscaler erhalten.","es":"S\xed, mant\xe9nganme informado sobre noticias, eventos, webcasts y ofertas especiales de Zscaler.","es-mx":"S\xed, mant\xe9nganme informado sobre noticias, eventos, webcasts y ofertas especiales de Zscaler.","fr":"Oui, veuillez me tenir au courant des actualit\xe9s, des \xe9v\xe9nements, des webinaires et des offres sp\xe9ciales de Zscaler.","it":"S\xec, tienimi aggiornato su notizie, eventi, webcast e offerte speciali di Zscaler.","ja":"Zscalerのニュース、イベント、Webキャスト、特典などの最新情報を受け取る。","en":"Yes, please keep me updated on Zscaler news, events, webcast and special offers."},"Must be valid email.":{"de":"Muss eine g\xfcltige E-Mail sein.","es":"Debe ser un correo electr\xf3nico v\xe1lido.","es-mx":"Debe ser un correo electr\xf3nico v\xe1lido.","fr":"Doit \xeatre un courriel valide.","it":"Deve essere un indirizzo e-mail valido.","ja":"有効なメール アドレスである必要があります。","en":"Must be valid email."},"Please enter valid email.":{"de":"Muss eine g\xfcltige E-Mail sein.","es":"Debe ser un correo electr\xf3nico v\xe1lido.","es-mx":"Debe ser un correo electr\xf3nico v\xe1lido.","fr":"Doit \xeatre un courriel valide.","it":"Deve essere un indirizzo e-mail valido.","ja":"有効なメール アドレスである必要があります。","en":"Must be valid email."},"Must be a phone number.":{"de":"Muss eine Telefonnummer sein","es":"Debe ser un n\xfamero de tel\xe9fono","fr":"Doit \xeatre un num\xe9ro de t\xe9l\xe9phone","it":"Deve essere un numero di telefono.","ja":"電話番号である必要があります。","ko":"","es-mx":"Debe ser un n\xfamero de tel\xe9fono","pt-br":"","en":"Must be a phone number."},"This field is required.":{"de":"Dieser Abschnitt ist erforderlich.","es":"Esta secci\xf3n es obligatoria.","fr":"Cette section est obligatoire.","it":"Questa sezione \xe8 obbligatoria.","ja":"このフィールドは必須です。","ko":"","es-mx":"Esta secci\xf3n es obligatoria.","pt-br":"","en":"This field is required."}}');
        let y = (e, r) => {
            var t;
            return (null == b ? void 0 : b.hasOwnProperty(e)) ? (null === (t = b[e]) || void 0 === t ? void 0 : t.hasOwnProperty(r)) && b[e][r] || b[e].en : e
        };
        var S = function (e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (!e) return;
                let a = Array.from(e.querySelectorAll("input, textarea"));
                a.forEach(e => {
                    var i;
                    let a = null == t ? void 0 : t.find(r => r.id === e.id && "placeholder" === r.attribute),
                        s = (null == a ? void 0 : a.value) || (null === (i = e.placeholder) || void 0 === i ? void 0 : i.trim());
                    e.placeholder = n ? n(s, "zs_forms") : y(s, r)
                });
                let s = Array.from(e.querySelectorAll("select option"));
                s.forEach(e => {
                    var t;
                    let i = null === (t = e.innerText) || void 0 === t ? void 0 : t.trim();
                    e.innerText = n ? n(i, "zs_forms") : y(i, r)
                });
                let o = Array.from(e.querySelectorAll("label"));
                o.forEach(e => {
                    var t, i;
                    null === (t = null === (i = Array.from(e.childNodes)) || void 0 === i ? void 0 : i.filter(e => "#text" === e.nodeName)) || void 0 === t || t.forEach(e => {
                        var t;
                        let i = null == e ? void 0 : null === (t = e.textContent) || void 0 === t ? void 0 : t.trim();
                        e.textContent = n ? n(i, "zs_forms") : y(i, r)
                    })
                });
                let l = e.querySelector(".mktoHtmlText");
                l && (l.innerHTML = n ? n("By submitting the form, you are agreeing to our privacy policy.", "zs_forms") : y("By submitting the form, you are agreeing to our privacy policy.", r));
                let c = Array.from(e.querySelectorAll("button"));
                c.forEach(e => {
                    var t, i;
                    null === (t = null === (i = Array.from(e.childNodes)) || void 0 === i ? void 0 : i.filter(e => "#text" === e.nodeName)) || void 0 === t || t.forEach(e => {
                        var t;
                        let i = null == e ? void 0 : null === (t = e.textContent) || void 0 === t ? void 0 : t.trim();
                        e.textContent = n ? n(i, "zs_forms") : y(i, r)
                    })
                }), i && setTimeout(() => {
                    let t = Array.from(e.querySelectorAll(".mktoErrorMsg"));
                    t.length && t.forEach(e => {
                        var t, i;
                        null === (t = null === (i = Array.from(e.childNodes)) || void 0 === i ? void 0 : i.filter(e => "#text" === e.nodeName)) || void 0 === t || t.forEach(e => {
                            var t;
                            let i = null == e ? void 0 : null === (t = e.textContent) || void 0 === t ? void 0 : t.trim();
                            e.textContent = n ? n(i, "zs_forms") : y(i, r)
                        })
                    })
                }, 50)
            },
            j = JSON.parse('["akamai","alertlogic","allot","aol","armor","barracudanetworks","bitglass","bluecoat","broadcom","catonetworks","centrify","checkpoint","ciphercloud","cisco","clearswift","comcast","coresecurity","cryptzone","cymphonix","cynphonix","cyxtera","domain","duo","email","fireeye","forcepoint","forescout","fortinet","gamail","gamil","gemalto","gemil","gimail","gimal","gmail","gmal","gmali","gnail","googlemail","hitmail","hmail","hotmail","iboss","icloud","illumio","imperva","live","mail","mail.ru","mcafee","me","menlosecurity","msn","netskope","opendns","onmicrosoft","outlook","paloaltonetworks","perimeter81","proofpoint","protonmail","pulsesecure.net","qq","qualys","rediffmail","rocketmail","sbcglobal.net","scansafe","sonicwall","sophos","sourcefire","spamina","symantec","tanium","threatstack","trendmicro","trustwave","versa-networks","vidder","watchguard","webroot","websense","yahho","yahoo","yahoomail","yhaoo","yhoo","ymail","your","yourdomain","yourmail","zdnetmail"]');
        let A = (e, r) => {
            if (void 0 === r) return;
            let t = {
                event: "formsubmission",
                enhanced_conversion_data: {email: "", first_name: "", last_name: "", phone_number: "", country: ""}
            };
            Object.keys(e).forEach(r => {
                switch (r) {
                    case"Email":
                        t.enhanced_conversion_data.email = e[r];
                        break;
                    case"FirstName":
                        t.enhanced_conversion_data.first_name = e[r];
                        break;
                    case"LastName":
                        t.enhanced_conversion_data.last_name = e[r];
                        break;
                    case"Phone":
                        t.enhanced_conversion_data.phone_number = e[r];
                        break;
                    case"Country":
                        t.enhanced_conversion_data.country = e[r]
                }
            }), r.push(t)
        };
        var P = t(83454);
        let k = e => {
            let {
                    formID: r,
                    onRender: t,
                    onValidate: a,
                    onSuccess: p,
                    overrides: b,
                    variant: k = "default",
                    subvariant: w = "default",
                    rerender: _ = !1,
                    className: C = ""
                } = e,
                I = (0, o.useRef)(null), [E, z] = (0, o.useState)(!1), [T, M] = (0, o.useState)(!1), [D, N] = (0, o.useState)(null), {locale: R} = (0, l.useRouter)(),
                q = (0, c.$G)(), [Z, F] = function ({
                                                        threshold: e,
                                                        delay: r,
                                                        trackVisibility: t,
                                                        rootMargin: i,
                                                        root: a,
                                                        triggerOnce: s,
                                                        skip: l,
                                                        initialInView: c,
                                                        fallbackInView: f,
                                                        onChange: p
                                                    } = {}) {
                    var x;
                    let [v, g] = o.useState(null), h = o.useRef(), [b, y] = o.useState({inView: !!c, entry: void 0});
                    h.current = p, o.useEffect(() => {
                        let o;
                        if (!l && v) return o = function (e, r, t = {}, i = n) {
                            if (void 0 === window.IntersectionObserver && void 0 !== i) {
                                let a = e.getBoundingClientRect();
                                return r(i, {
                                    isIntersecting: i,
                                    target: e,
                                    intersectionRatio: "number" == typeof t.threshold ? t.threshold : 0,
                                    time: 0,
                                    boundingClientRect: a,
                                    intersectionRect: a,
                                    rootBounds: a
                                }), () => {
                                }
                            }
                            let {id: s, observer: o, elements: l} = function (e) {
                                let r = Object.keys(e).sort().filter(r => void 0 !== e[r]).map(r => {
                                    var t;
                                    return `${r}_${"root" === r ? (t = e.root) ? (d.has(t) || (m += 1, d.set(t, m.toString())), d.get(t)) : "0" : e[r]}`
                                }).toString(), t = u.get(r);
                                if (!t) {
                                    let n;
                                    let i = new Map, a = new IntersectionObserver(r => {
                                        r.forEach(r => {
                                            var t;
                                            let a = r.isIntersecting && n.some(e => r.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === r.isVisible && (r.isVisible = a), null == (t = i.get(r.target)) || t.forEach(e => {
                                                e(a, r)
                                            })
                                        })
                                    }, e);
                                    n = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), t = {
                                        id: r,
                                        observer: a,
                                        elements: i
                                    }, u.set(r, t)
                                }
                                return t
                            }(t), c = l.get(e) || [];
                            return l.has(e) || l.set(e, c), c.push(r), o.observe(e), function () {
                                c.splice(c.indexOf(r), 1), 0 === c.length && (l.delete(e), o.unobserve(e)), 0 === l.size && (o.disconnect(), u.delete(s))
                            }
                        }(v, (e, r) => {
                            y({
                                inView: e,
                                entry: r
                            }), h.current && h.current(e, r), r.isIntersecting && s && o && (o(), o = void 0)
                        }, {root: a, rootMargin: i, threshold: e, trackVisibility: t, delay: r}, f), () => {
                            o && o()
                        }
                    }, [Array.isArray(e) ? e.toString() : e, v, a, i, s, l, t, f, r]);
                    let S = null == (x = b.entry) ? void 0 : x.target, j = o.useRef();
                    v || !S || s || l || j.current === S || (j.current = S, y({inView: !!c, entry: void 0}));
                    let A = [g, b.inView, b.entry];
                    return A.ref = A[0], A.inView = A[1], A.entry = A[2], A
                }(), B = function (e, r, t) {
                    var n = this, i = (0, o.useRef)(null), a = (0, o.useRef)(0), s = (0, o.useRef)(null),
                        l = (0, o.useRef)([]), c = (0, o.useRef)(), u = (0, o.useRef)(), d = (0, o.useRef)(e),
                        m = (0, o.useRef)(!0);
                    (0, o.useEffect)(function () {
                        d.current = e
                    }, [e]);
                    var f = !r && 0 !== r && "undefined" != typeof window;
                    if ("function" != typeof e) throw TypeError("Expected a function");
                    r = +r || 0;
                    var p = !!(t = t || {}).leading, x = !("trailing" in t) || !!t.trailing, v = "maxWait" in t,
                        g = v ? Math.max(+t.maxWait || 0, r) : null;
                    return (0, o.useEffect)(function () {
                        return m.current = !0, function () {
                            m.current = !1
                        }
                    }, []), (0, o.useMemo)(function () {
                        var e = function (e) {
                            var r = l.current, t = c.current;
                            return l.current = c.current = null, a.current = e, u.current = d.current.apply(t, r)
                        }, t = function (e, r) {
                            f && cancelAnimationFrame(s.current), s.current = f ? requestAnimationFrame(e) : setTimeout(e, r)
                        }, o = function (e) {
                            if (!m.current) return !1;
                            var t = e - i.current;
                            return !i.current || t >= r || t < 0 || v && e - a.current >= g
                        }, h = function (r) {
                            return s.current = null, x && l.current ? e(r) : (l.current = c.current = null, u.current)
                        }, b = function e() {
                            var n = Date.now();
                            if (o(n)) return h(n);
                            if (m.current) {
                                var s = r - (n - i.current);
                                t(e, v ? Math.min(s, g - (n - a.current)) : s)
                            }
                        }, y = function () {
                            var d = Date.now(), f = o(d);
                            if (l.current = [].slice.call(arguments), c.current = n, i.current = d, f) {
                                if (!s.current && m.current) return a.current = i.current, t(b, r), p ? e(i.current) : u.current;
                                if (v) return t(b, r), e(i.current)
                            }
                            return s.current || t(b, r), u.current
                        };
                        return y.cancel = function () {
                            s.current && (f ? cancelAnimationFrame(s.current) : clearTimeout(s.current)), a.current = 0, l.current = i.current = c.current = s.current = null
                        }, y.isPending = function () {
                            return !!s.current
                        }, y.flush = function () {
                            return s.current ? h(Date.now()) : u.current
                        }, y
                    }, [p, v, r, g, x, f])
                }(function (e) {
                    var r, n;
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (!(null == P ? void 0 : null === (r = P.env) || void 0 === r ? void 0 : "//info.zscaler.com") || !(null == P ? void 0 : null === (n = P.env) || void 0 === n ? void 0 : "306-ZEJ-256")) {
                        console.log("marketo env vars missing"), M(!1);
                        return
                    }
                    if (D === e) {
                        z(!0), "function" == typeof t && t(), M(!1);
                        return
                    }
                    if (!document.body.classList.contains("marketo-forms-ready")) {
                        setTimeout(() => {
                            B(e, i + 1)
                        }, 500 * i), M(!1);
                        return
                    }
                    N(e), (null == I ? void 0 : I.current) && (I.current.innerHTML = "");
                    let {MktoForms2: s, dataLayer: o} = window;
                    s.loadForm("//info.zscaler.com", "306-ZEJ-256", e, e => {
                        var r;
                        if (setTimeout(() => {
                            z(!0)
                        }, 200), !e) return;
                        let n = Array.from(null == I ? void 0 : null === (r = I.current) || void 0 === r ? void 0 : r.querySelectorAll("input, textarea, select"));
                        n.forEach(e => {
                            e.addEventListener("focus", () => {
                                S(null == I ? void 0 : I.current, R, b, void 0, !0)
                            })
                        });
                        let i = e.getValues(), s = v(i);
                        s = h(s = g(s)), e.addHiddenFields(s), "function" == typeof t && t(e), e.onSuccess(r => "function" == typeof p && (A(e, o), p(r))), e.onValidate(() => {
                            var r;
                            "function" == typeof a && a(e), S(null == I ? void 0 : I.current, R, b, void 0, !0);
                            let t = Array.from((null == I ? void 0 : null === (r = I.current) || void 0 === r ? void 0 : r.querySelectorAll('input[type="email"]')) || !1);
                            if (!(null == t ? void 0 : t.length)) return;
                            let n = t.some(e => {
                                let {value: r} = e;
                                if (!r.includes("@")) return !0;
                                let t = r.split("@")[1];
                                return !!j.some(e => t.includes(e))
                            });
                            if (n) {
                                let i = e.getFormElem().find('input[type="email"]');
                                e.showErrorMessage(q("Please enter your corporate email address", R) || y("Please enter your corporate email address", R), i)
                            }
                            e.submittable(!n)
                        }), setTimeout(() => {
                            S(null == I ? void 0 : I.current, R, b, void 0);
                            let e = document.querySelectorAll(".mktoFieldWrap");
                            e.forEach(e => {
                                let r = e.querySelector("#LblSingle_OptIn__c");
                                r && e.classList.add("hasSingleOptIn")
                            })
                        }, 50), M(!1)
                    }), s.whenReady(e => {
                        let r = e.getId(), t = document.getElementById("mktoForm_".concat(r)),
                            n = null == t ? void 0 : t.querySelectorAll("label");
                        null == n || n.forEach(e => {
                            e.childNodes.length || e.removeAttribute("id")
                        });
                        let i = document.querySelectorAll("#mktoStyleLoaded");
                        i.forEach((e, r) => {
                            r > 0 && e.remove()
                        });
                        let a = null == t ? void 0 : t.querySelectorAll("select");
                        if ((null == a ? void 0 : a.length) > 0 && a.forEach(e => {
                            let r = e.querySelector("option").text;
                            e.setAttribute("aria-label", r)
                        }), null == t ? void 0 : t.querySelector("#LblEmail")) {
                            let s = null == t ? void 0 : t.querySelector("#Email"), o = s.id,
                                l = "".concat(o, "_").concat(r), c = s.getAttribute("aria-labelledby").split(" ");
                            c.forEach((e, n) => {
                                let i = null == t ? void 0 : t.querySelector("#".concat(e));
                                i.setAttribute("id", "".concat(e, "_").concat(r)), null !== i.getAttribute("for") && i.setAttribute("for", l), c[n] = "".concat(e, "_").concat(r)
                            }), s.setAttribute("id", l), s.setAttribute("aria-labelledby", c.join(" ")), s.setAttribute("aria-label", "Enter email")
                        }
                    })
                }, 300), V = () => {
                    var e;
                    let r = document.getElementById("marketo-form-script");
                    if (r) return;
                    let t = document.createElement("script");
                    t.src = "".concat(null == P ? void 0 : null === (e = P.env) || void 0 === e ? void 0 : "//info.zscaler.com", "/js/forms2/js/forms2.min.js"), t.id = "marketo-form-script", t.defer = !0, t.onload = () => document.body.classList.add("marketo-forms-ready"), document.body.appendChild(t)
                };
            return (0, o.useEffect)(() => {
                var e;
                let t = Number(r.replace("mktoForm_", ""));
                if (!(!_ && (T || (null == window ? void 0 : null === (e = window.renderedForms) || void 0 === e ? void 0 : e.includes(t))))) {
                    if (D === t) return;
                    M(!0), z(!1), (null == window ? void 0 : window.renderedForms) ? window.renderedForms.push(t) : window.renderedForms = [t], setTimeout(() => {
                        B(t)
                    }, 10)
                }
            }, [r, t]), (0, o.useEffect)(() => {
                F && V()
            }, [F]), (0, i.jsxs)("div", {
                ref: Z,
                className: "flex justify-center items-center min-h-full flex-wrap",
                children: [!E && (0, i.jsx)(f.Z, {
                    className: "form-loader",
                    image: {url: "/assets/images/loading.webp", alt: "", width: 90, height: 25, title: ""}
                }), (0, i.jsx)("form", {
                    className: s()(x().root, x()["variant_".concat(k)], x()["subvariant_".concat(w)], C),
                    id: "mktoForm_".concat(r.replace("mktoForm_", "")),
                    ref: I,
                    style: {opacity: E ? 100 : 0}
                })]
            })
        };
        var w = k
    }, 15287: function (e) {
        e.exports = {
            root: "marketoForm_root__OkMwH",
            variant_footer: "marketoForm_variant_footer__vL4cA",
            variant_default: "marketoForm_variant_default__ls3wx",
            variant_cta_module: "marketoForm_variant_cta_module__RcBac",
            subvariant_centered: "marketoForm_subvariant_centered__6dqM4"
        }
    }
}]);
//# sourceMappingURL=253.2ebe3eaba3e97093.js.map
