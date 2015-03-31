import config from '../config';

export default {
  getRootUrl: getRootUrl,
  getTestData: getTestData,
  getApiKey: getApiKey
};

function getRootUrl() {
  return config.applicationUrl;
}

function getTestData(opts) {

  var isInvalid = opts && opts.invalidFormat !== undefined ? true : false;

  var data = {
    "page":[
       {
          "modules":[
             {
                "id": isInvalid ? '6856' : 6856,
                "title":"Edle Taschenuhren",
                "text":"",
                "resources":{
                   "videos":[
                   ],
                   "images":[
                      {
                         "id":656,
                         "type":"image",
                         "filename":isInvalid ? '' : "http://media.auctionata.coremedia.com/image/6858/47x20/940/400/90f4fd6a16625d6ad833218fc6ee8e20/rv/header-teaser-image.jpg",
                         "title":"",
                         "text":""
                      }
                   ]
                },
                "items":[

                ],
                "layout":isInvalid ? "" : "Banner",
                "type":"CMTeaser"
             }
          ],
          "placement":"header"
       },
       {
          "modules":[
             {
                "id":18,
                "title":"Taschenuhren – Ein Relikt aus vergangenen Zeiten",
                "text":"<h3>Zeitmesser mit ein bisschen Extravaganz</h3><p>Taschenuhren sind heute leider weitgehend durch Armbanduhren ersetzt und gelten eher als ein Relikt vergangener Tage. Beim Großvater baumelte die Goldkette einst über der Westentasche und wohlhabende Damen wie die Infantin Maria Teresa trugen sie einst elegant an der Taille. </p><p>Die Verbreitung der Taschenuhr erfolgte im 16. Jahrhundert und hing mit der Erfindung des Federwerks zusammen. Die erste Darstellung in der bildenden Kunst, bei der eine Uhr an der Kleidung befestigt war, findet sich bei Hans Holbein dem Jüngeren (1497-1543) auf dem Porträt des Kaufmanns Georg Giesze, das um 1530 entstanden ist.</p><p>Über die Jahrhunderte wurden verschiedene Gehäuse-Bauformen entwickelt, wie die Savonnette, die Halbsavonnette oder die Lépine. Natürlich war auch der dekorativen Gestaltung des Gehäuse keine Grenzen gesetzt. Ob Monogramme, farbige Emailleeinlagen oder elde Ziselierarbeiten, Taschenuhren können individuell gestaltet werden und zeugen zugleich von höchster Uhrmacherkunst.</p><p><br/></p>",
                "resources":{
                   "videos":[

                   ],
                   "images":[
                      {
                         "id":24,
                         "type":"image",
                         "filename":"http://tzp-latitude-e6320:40081/blueprint/servlet/image/24/large4x3/460/345/ee9f1835c61d0caa333cad20b167f4ff/MT/taschenuhren---ein-relikt-aus-vergangenen-zeiten--image.jpg",
                         "title":"Elegante Goldtaschenuhr, wohl J. Baptiste Baillon, 18. JH",
                         "text":"<p>Elegante Goldtaschenuhr, wohl J. Baptiste Baillon, 18. JH</p>"
                      }
                   ]
                },
                "items":[

                ],
                "layout":"ContentBoxBigWideLeft",
                "type":"CMArticle"
             },
             {
                "id":16,
                "title":"Unser Armband- & Taschenuhren Department",
                "text":"<h3>Dr. Oliver Hoffman – Head of Department<br/></h3><p>Als renommierter Experte und Kurator für Armband- und Taschenuhren besitzt unser Departmentleiter Dr. Oliver Hoffmann ein umfangreiches Fachwissen auf diesem Gebiet. Er ist selbst passionierter Uhrensammler und verfügt über eine große eigene Sammlung mit der Spezialisierung auf Patek Philippe und Breguet. Bereits in der Kindheit entdeckte er seine Begeisterung für die Geschichte und Technik der Uhrmacherkunst. Zahlreiche wissenschaftliche Veröffentlichungen sprechen für seine hohe Expertise auf diesem Feld. Seit 2009 leitet er zudem den Fachkreis Armbanduhr der Deutschen Gesellschaft für Chronometrie (DGC).</p><p>Das Expertenteam aus unserem Armband- &amp; Taschenuhren Department verfügt über ein umfangreiches Fachwissen und einen untrügerischen Erfahrungsschatz. Dieses kümmert sich bei Auctionata um alle Themen rund um die Uhr. Jede Uhr, die Sie bei Auctionata schätzen lassen, ersteigern oder in unserem Shop erwerben können, wurde zuvor von unseren Experten sorgfältig geprüft und geschätzt. Nur so können wir Ihnen die Qualität aller verkauften Uhren garantieren. Sehen Sie sich das Video zu unserem Armband- &amp; Taschenuhren Department an und erleben Sie die Experten im Einsatz.</p>",
                "resources":{
                   "videos":[
                      {
                         "id":16,
                         "type":"video",
                         "filename":"https://auctionata.de/assets/videos/Watches_Dept_short_540p_logo_de.webm",
                         "title":"Unser Armband- & Taschenuhren Department",
                         "text":"<h3>Dr. Oliver Hoffman – Head of Department<br/></h3><p>Als renommierter Experte und Kurator für Armband- und Taschenuhren besitzt unser Departmentleiter Dr. Oliver Hoffmann ein umfangreiches Fachwissen auf diesem Gebiet. Er ist selbst passionierter Uhrensammler und verfügt über eine große eigene Sammlung mit der Spezialisierung auf Patek Philippe und Breguet. Bereits in der Kindheit entdeckte er seine Begeisterung für die Geschichte und Technik der Uhrmacherkunst. Zahlreiche wissenschaftliche Veröffentlichungen sprechen für seine hohe Expertise auf diesem Feld. Seit 2009 leitet er zudem den Fachkreis Armbanduhr der Deutschen Gesellschaft für Chronometrie (DGC).</p><p>Das Expertenteam aus unserem Armband- &amp; Taschenuhren Department verfügt über ein umfangreiches Fachwissen und einen untrügerischen Erfahrungsschatz. Dieses kümmert sich bei Auctionata um alle Themen rund um die Uhr. Jede Uhr, die Sie bei Auctionata schätzen lassen, ersteigern oder in unserem Shop erwerben können, wurde zuvor von unseren Experten sorgfältig geprüft und geschätzt. Nur so können wir Ihnen die Qualität aller verkauften Uhren garantieren. Sehen Sie sich das Video zu unserem Armband- &amp; Taschenuhren Department an und erleben Sie die Experten im Einsatz.</p>"
                      }
                   ],
                   "images":[
                      {
                         "id":654,
                         "type":"image",
                         "filename":"http://tzp-latitude-e6320:40081/blueprint/servlet/image/654/large4x3/460/345/38935a1f6df61c5c6569e67ad3444a25/ox/unser-armband----taschenuhren-department-image.jpg",
                         "title":"Video zum Armband- & Taschenuhren Department von Auctionata",
                         "text":"<p>Video zum Armband- &amp; Taschenuhren Department von Auctionata</p>"
                      }
                   ]
                },
                "items":[

                ],
                "layout":"ContentBoxBigLeft",
                "type":"CMVideo"
             },
             {
                "id":14,
                "title":"Highlights in unserem Shop",
                "text":"",
                "resources":{
                   "videos":[

                   ],
                   "images":[

                   ]
                },
                "items":[
                   {
                      "id":36,
                      "title":"Damentaschenuhr mit Emaille-Dekor, 18 K Gold, Schweiz, um 1900",
                      "text":"",
                      "resources":{
                         "videos":[

                         ],
                         "images":[
                            {
                               "id":34,
                               "type":"image",
                               "filename":"http://tzp-latitude-e6320:40081/blueprint/servlet/image/34/large4x3/460/345/bfc3a97cb8cfa4b20e3e679ddc1afd2e/eH/damentaschenuhr-mit-emaille-dekor--18-k-gold--schweiz--um-1900-image.jpg",
                               "title":"Damentaschenuhr mit Emaille-Dekor, 18 K Gold, Schweiz, um 1900",
                               "text":"<p>Damentaschenuhr mit Emaille-Dekor, 18 K Gold, Schweiz, um 1900</p>"
                            }
                         ]
                      },
                      "items":[

                      ],
                      "layout":"ContentBoxBigRight",
                      "type":"CMTeaser"
                   },
                   {
                      "id":638,
                      "title":"Damentaschenuhr mit Emaille-Dekor, 18 K Gold, Schweiz, um 1900",
                      "text":"",
                      "resources":{
                         "videos":[

                         ],
                         "images":[
                            {
                               "id":634,
                               "type":"image",
                               "filename":"http://tzp-latitude-e6320:40081/blueprint/servlet/image/634/large4x3/460/345/c2928ea0101a5cc11363791a049179a2/yz/goldene-chronograph-taschenuhr-mit-repetition--schweiz--um-1900-image.jpg",
                               "title":"Goldene Chronograph Taschenuhr mit Repetition, Schweiz, um 1900",
                               "text":"<p>Goldene Chronograph Taschenuhr mit Repetition, Schweiz, um 1900</p>"
                            }
                         ]
                      },
                      "items":[

                      ],
                      "type":"CMTeaser"
                   },
                   {
                      "id":632,
                      "title":"Gold Savonette mit Repetition, wohl Schweiz, um 1900",
                      "text":"",
                      "resources":{
                         "videos":[

                         ],
                         "images":[
                            {
                               "id":628,
                               "type":"image",
                               "filename":"http://tzp-latitude-e6320:40081/blueprint/servlet/image/628/large4x3/460/345/fcaf7aa0e6c35fbcacff5adc32aea64f/an/gold-savonette-mit-repetition--wohl-schweiz--um-1900-image.jpg",
                               "title":"Gold Savonette mit Repetition, wohl Schweiz, um 1900",
                               "text":"<p>Gold Savonette mit Repetition, wohl Schweiz, um 1900</p>"
                            }
                         ]
                      },
                      "items":[

                      ],
                      "type":"CMTeaser"
                   }
                ],
                "layout":"slideshow",
                "type":"CMCollection"
             },
             {
                "id":616,
                "title":"Taschenuhren von Patek Phillipe",
                "text":"<h3>Eleganz der Superlative</h3><p>Uhren von Patek Philippe zählen zu den teuersten der Welt. Die Manufaktur wurde bereits im Jahr 1839 gegründet und der Erfolg des Genfer Unternehmens ist seitdem ungebrochen. Anlässlich des 150-jährigen Jubiläums stellte Patek Philippe die komplizierteste Taschenuhr der Welt vor, die aus knapp 1800 Einzelteilen hergestellt wurde.</p><p>Bis in die Gegenwart hinein produziert Patek Philippe jährlich komplizierte und einfache Taschenuhren, die die enormen handwerklichen Fähigkeiten der Uhrmacher unter Beweis stellten.</p><p>Natürlich sind Taschenuhren mittlerweile von Armbanduhren abgelöst worden, umso mehr erfreuen sich wertvolle und komplizierte Taschenuhren bei Sammlern höchster Beliebtheit.</p>",
                "resources":{
                   "videos":[

                   ],
                   "images":[
                      {
                         "id":648,
                         "type":"image",
                         "filename":"http://tzp-latitude-e6320:40081/blueprint/servlet/image/648/large4x3/460/345/620c224310472a25af03098095380ffa/gl/taschenuhren-von-patek-phillipe-image.jpg",
                         "title":"Komplizierte Patek Philippe Taschenuhr, Schweiz, um 1910-15",
                         "text":"<p>Komplizierte Patek Philippe Taschenuhr, Schweiz, um 1910-15</p>"
                      }
                   ]
                },
                "items":[

                ],
                "layout":"ContentBoxBigRight",
                "type":"CMArticle"
             },
             {
                "id":618,
                "title":"Komplizierte Taschenuhren für den Gentleman",
                "text":"<h3>Ewiger Kalender, Mondphase und Co.</h3><p>Taschenuhren können natürlich genauso kompliziert gestaltet werden wie Armbanduhren. So wie dieses äußerst aufwendige Modell des englischen Unternehmens Hunt &amp; Roskell, das 1843 gegründet worden war und für seine hochwertigen Taschenuhren bekannt ist.</p><p>Die Taschenuhr verfügt über ein sehr elegantes Zifferblatt aus weißem Emaile mit den Komplikationsebenen Stunde, Minute und Sekunde. Daneben ist die Uhr mit einem ewigen Kalender mit Mondphase, Minutenrepitition und Chronograph versehen.</p><p>Regelmäßig bieten wir Ihnen in unseren Uhrenauktionen feine Armband- und Taschenuhren, die über besondere Komplikationen verfügen. Bedeutende Marken wie Patek Philippe, A. Lange und Söhne und Audemars Piguet dürften jeden Uhresammler erfreuen.</p>",
                "resources":{
                   "videos":[

                   ],
                   "images":[
                      {
                         "id":642,
                         "type":"image",
                         "filename":"http://tzp-latitude-e6320:40081/blueprint/servlet/image/642/large4x3/460/345/a77b5919759e0fffb2b7adb457c1dcf2/cv/komplizierte-taschenuhren-fuer-den-gentleman-image.jpg",
                         "title":"Hunt & Roskell Grande Complication, England, um 1878",
                         "text":"<p>Hunt &amp; Roskell Grande Complication, England, um 1878</p>"
                      }
                   ]
                },
                "items":[

                ],
                "layout":"ContentBoxBigLeft",
                "type":"CMArticle"
             },
             {
                "id":620,
                "title":" Jetzt kostenlose Schätzung anfragen",
                "text":"<p>Sie können ein Objekt oder einen vollständigen Nachlass von unseren Experten schätzen lassen.</p>",
                "resources":{
                   "videos":[

                   ],
                   "images":[

                   ]
                },
                "items":[

                ],
                "layout":"Valuation",
                "type":"CMAction"
             }
          ],
          "placement":"main"
       }
    ],
    "metadata":{
       "externalId":1234,
       "language":"en",
       "navigationPath":"/auctionata"
    }
  };

  return data;
}

function getApiKey() {
  return config.apiKey;
}