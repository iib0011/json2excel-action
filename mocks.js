 export const zap= {
	"@version": "2.11.1",
	"@generated": "Mon, 21 Feb 2022 16:16:55",
	"site":[ 
		{
			"@name": "https://www.zaproxy.org",
			"@host": "www.zaproxy.org",
			"@port": "443",
			"@ssl": "true",
			"alerts": [ 
				{
					"pluginid": "10062",
					"alertRef": "10062",
					"alert": "PII Disclosure",
					"name": "PII Disclosure",
					"riskcode": "3",
					"confidence": "3",
					"riskdesc": "High (High)",
					"desc": "<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "5264810966944441"
						}
					],
					"count": "1",
					"solution": "",
					"otherinfo": "<p>Credit Card Type detected: Mastercard</p><p>Bank Identification Number: 526481</p><p>Brand: MASTERCARD</p><p>Category: STANDARD</p><p>Issuer: ROMANIAN COMMERCIAL BANK, S.A. - BANCA COMERCIALA ROMANA, S.A.</p>",
					"reference": "",
					"cweid": "359",
					"wascid": "13",
					"sourceid": "2290"
				},
				{
					"pluginid": "90022",
					"alertRef": "90022",
					"alert": "Application Error Disclosure",
					"name": "Application Error Disclosure",
					"riskcode": "2",
					"confidence": "2",
					"riskdesc": "Medium (Medium)",
					"desc": "<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/graphql-support/options/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "invalid query"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Internal Server Error"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Error Occurred While Processing Request"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/start/features/custompages/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Internal Server Error"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/ui/dialogs/session/contexts/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Internal Server Error"
						},
						{
							"uri": "https://www.zaproxy.org/index.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "invalid query"
						}
					],
					"count": "6",
					"solution": "<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>",
					"otherinfo": "",
					"reference": "",
					"cweid": "200",
					"wascid": "13",
					"sourceid": "2177"
				},
				{
					"pluginid": "10038",
					"alertRef": "10038",
					"alert": "Content Security Policy (CSP) Header Not Set",
					"name": "Content Security Policy (CSP) Header Not Set",
					"riskcode": "2",
					"confidence": "3",
					"riskdesc": "Medium (High)",
					"desc": "<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page \u2014 covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/community/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/docs/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/docs/automate/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/download/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/getting-started/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/zap-in-ten/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						}
					],
					"count": "11",
					"solution": "<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: \"Content-Security-Policy\" for Chrome 25+, Firefox 23+ and Safari 7+, \"X-Content-Security-Policy\" for Firefox 4.0+ and Internet Explorer 10+, and \"X-WebKit-CSP\" for Chrome 14+ and Safari 6+.</p>",
					"otherinfo": "",
					"reference": "<p>https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy</p><p>https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html</p><p>http://www.w3.org/TR/CSP/</p><p>http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html</p><p>http://www.html5rocks.com/en/tutorials/security/content-security-policy/</p><p>http://caniuse.com/#feat=contentsecuritypolicy</p><p>http://content-security-policy.com/</p>",
					"cweid": "693",
					"wascid": "15",
					"sourceid": "1"
				},
				{
					"pluginid": "10098",
					"alertRef": "10098",
					"alert": "Cross-Domain Misconfiguration",
					"name": "Cross-Domain Misconfiguration",
					"riskcode": "2",
					"confidence": "2",
					"riskdesc": "Medium (Medium)",
					"desc": "<p>Web browser data loading may be possible, due to a Cross Origin Resource Sharing (CORS) misconfiguration on the web server</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/blog/2022-02-16-zapcon-2022-schedule-is-now-live/images/ZAPCon-isNowLive_hu267e76fb4b026e02d83bd0f8bac2f972_187279_300x300_fill_box_smart1_3.png",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/blog/index.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/img/favicon.ico",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/img/search.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/08%20March%202022.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/button.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/sir-zapalot.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/ZAPCon-logo.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/index.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/main.08cf90.js",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/main.d52679.css",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						},
						{
							"uri": "https://www.zaproxy.org/sitemap.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Access-Control-Allow-Origin: *"
						}
					],
					"count": "12",
					"solution": "<p>Ensure that sensitive data is not available in an unauthenticated manner (using IP address white-listing, for instance).</p><p>Configure the \"Access-Control-Allow-Origin\" HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.</p>",
					"otherinfo": "<p>The CORS misconfiguration on the web server permits cross-domain read requests from arbitrary third party domains, using unauthenticated APIs on this domain. Web browser implementations do not permit arbitrary third parties to read the response from authenticated APIs, however. This reduces the risk somewhat. This misconfiguration could be used by an attacker to access data that is available in an unauthenticated manner, but which uses some other form of security, such as IP address white-listing.</p>",
					"reference": "<p>https://vulncat.fortify.com/en/detail?id=desc.config.dotnet.html5_overly_permissive_cors_policy</p>",
					"cweid": "264",
					"wascid": "14",
					"sourceid": "812"
				},
				{
					"pluginid": "10099",
					"alertRef": "10099",
					"alert": "Source Code Disclosure - SQL",
					"name": "Source Code Disclosure - SQL",
					"riskcode": "2",
					"confidence": "2",
					"riskdesc": "Medium (Medium)",
					"desc": "<p>Application Source Code was disclosed by the web server - SQL</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/docs/api/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Select a language for code samples from the tabs above or the mobile navigation menu."
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/ajax-spider/scandialog/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "select one of the users available from the selected context, to perform the spider scan as a user "
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/quick-start/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Select the browser you want from the pull"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/report-generation/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Select one or more to only include alerts and other information from those contexts in the report. You can use the shift or control keys to select and unselect more than one context."
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/retest/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "select one or more alerts from the Alert tab, right click on them and choose "
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/start/features/authentication/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "select the authentication method required from the drop"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/ui/dialogs/options/language/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "select the newly imported language from the language selection drop down menu on the top of the screen."
						},
						{
							"uri": "https://www.zaproxy.org/index.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "select https site from Active scan window if theres an http equivalent Issue 127"
						}
					],
					"count": "8",
					"solution": "<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>",
					"otherinfo": "<p>Select a language for code samples from the tabs above or the mobile navigation menu.</p>",
					"reference": "<p>http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/</p>",
					"cweid": "540",
					"wascid": "13",
					"sourceid": "1384"
				},
				{
					"pluginid": "90003",
					"alertRef": "90003",
					"alert": "Sub Resource Integrity Attribute Missing",
					"name": "Sub Resource Integrity Attribute Missing",
					"riskcode": "2",
					"confidence": "3",
					"riskdesc": "Medium (High)",
					"desc": "<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<link href=\"https://fonts.googleapis.com/css?family=Istok+Web|Open+Sans:400,700|Rubik&display=swap\" rel=\"stylesheet\">"
						},
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<link href=\"https://fonts.googleapis.com/css?family=Quicksand:500,700\" rel=\"stylesheet\">"
						},
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-71455536-1\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<link href=\"https://fonts.googleapis.com/css?family=Istok+Web|Open+Sans:400,700|Rubik&display=swap\" rel=\"stylesheet\">"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<link href=\"https://fonts.googleapis.com/css?family=Quicksand:500,700\" rel=\"stylesheet\">"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-71455536-1\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js\"></script>"
						}
					],
					"count": "8",
					"solution": "<p>Provide a valid integrity attribute to the tag.</p>",
					"otherinfo": "",
					"reference": "<p>https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity</p>",
					"cweid": "345",
					"wascid": "15",
					"sourceid": "1"
				},
				{
					"pluginid": "10202",
					"alertRef": "10202",
					"alert": "Absence of Anti-CSRF Tokens",
					"name": "Absence of Anti-CSRF Tokens",
					"riskcode": "1",
					"confidence": "2",
					"riskdesc": "Low (Medium)",
					"desc": "<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/community/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/docs/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/docs/automate/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/download/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/getting-started/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						},
						{
							"uri": "https://www.zaproxy.org/zap-in-ten/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<form data-no-csrf action=\"/search\">"
						}
					],
					"count": "11",
					"solution": "<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>",
					"otherinfo": "<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] was found in the following HTML form: [Form 1: \"q\" ].</p>",
					"reference": "<p>http://projects.webappsec.org/Cross-Site-Request-Forgery</p><p>http://cwe.mitre.org/data/definitions/352.html</p>",
					"cweid": "352",
					"wascid": "9",
					"sourceid": "1"
				},
				{
					"pluginid": "10017",
					"alertRef": "10017",
					"alert": "Cross-Domain JavaScript Source File Inclusion",
					"name": "Cross-Domain JavaScript Source File Inclusion",
					"riskcode": "1",
					"confidence": "2",
					"riskdesc": "Low (Medium)",
					"desc": "<p>The page includes one or more script files from a third-party domain.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js",
							"attack": "",
							"evidence": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "https://www.googletagmanager.com/gtag/js?id=UA-71455536-1",
							"attack": "",
							"evidence": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-71455536-1\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js",
							"attack": "",
							"evidence": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "https://www.googletagmanager.com/gtag/js?id=UA-71455536-1",
							"attack": "",
							"evidence": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-71455536-1\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js",
							"attack": "",
							"evidence": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "https://www.googletagmanager.com/gtag/js?id=UA-71455536-1",
							"attack": "",
							"evidence": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-71455536-1\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js",
							"attack": "",
							"evidence": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "https://www.googletagmanager.com/gtag/js?id=UA-71455536-1",
							"attack": "",
							"evidence": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-71455536-1\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js",
							"attack": "",
							"evidence": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js\"></script>"
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "https://www.googletagmanager.com/gtag/js?id=UA-71455536-1",
							"attack": "",
							"evidence": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-71455536-1\"></script>"
						}
					],
					"count": "10",
					"solution": "<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>",
					"otherinfo": "",
					"reference": "",
					"cweid": "829",
					"wascid": "15",
					"sourceid": "1"
				},
				{
					"pluginid": "10110",
					"alertRef": "10110",
					"alert": "Dangerous JS Functions",
					"name": "Dangerous JS Functions",
					"riskcode": "1",
					"confidence": "1",
					"riskdesc": "Low (Low)",
					"desc": "<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/main.08cf90.js",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "eval"
						}
					],
					"count": "1",
					"solution": "<p>See the references for security advice on the use of these functions.</p>",
					"otherinfo": "",
					"reference": "<p>https://angular.io/guide/security</p>",
					"cweid": "749",
					"wascid": "-1",
					"sourceid": "325"
				},
				{
					"pluginid": "10015",
					"alertRef": "10015",
					"alert": "Incomplete or No Cache-control Header Set",
					"name": "Incomplete or No Cache-control Header Set",
					"riskcode": "1",
					"confidence": "2",
					"riskdesc": "Low (Medium)",
					"desc": "<p>The cache-control header has not been set properly or is missing, allowing the browser and proxies to cache content.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/community/",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/docs/",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/docs/automate/",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/download/",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/getting-started/",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/sitemap.xml",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/zap-in-ten/",
							"method": "GET",
							"param": "Cache-Control",
							"attack": "",
							"evidence": "max-age=600"
						}
					],
					"count": "11",
					"solution": "<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate.</p>",
					"otherinfo": "",
					"reference": "<p>https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching</p><p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control</p>",
					"cweid": "525",
					"wascid": "13",
					"sourceid": "1"
				},
				{
					"pluginid": "10023",
					"alertRef": "10023",
					"alert": "Information Disclosure - Debug Error Messages",
					"name": "Information Disclosure - Debug Error Messages",
					"riskcode": "1",
					"confidence": "2",
					"riskdesc": "Low (Medium)",
					"desc": "<p>The response appeared to contain common error messages returned by platforms such as ASP.NET, and Web-servers such as IIS and Apache. You can configure the list of common debug messages.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/docs/alerts/40008/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "internal server error"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Internal Server Error"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Error Occurred While Processing Request"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/start/features/custompages/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Internal Server Error"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/ui/dialogs/session/contexts/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Internal Server Error"
						}
					],
					"count": "5",
					"solution": "<p>Disable debugging messages before pushing to production.</p>",
					"otherinfo": "",
					"reference": "",
					"cweid": "200",
					"wascid": "13",
					"sourceid": "2889"
				},
				{
					"pluginid": "10063",
					"alertRef": "10063",
					"alert": "Permissions Policy Header Not Set",
					"name": "Permissions Policy Header Not Set",
					"riskcode": "1",
					"confidence": "2",
					"riskdesc": "Low (Medium)",
					"desc": "<p>Permissions Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Permissions Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/community/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/docs/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/docs/automate/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/download/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/getting-started/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/zap-in-ten/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						}
					],
					"count": "11",
					"solution": "<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Permissions-Policy header.</p>",
					"otherinfo": "",
					"reference": "<p>https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy</p><p>https://developers.google.com/web/updates/2018/06/feature-policy</p><p>https://scotthelme.co.uk/a-new-security-header-feature-policy/</p><p>https://w3c.github.io/webappsec-feature-policy/</p><p>https://www.smashingmagazine.com/2018/12/feature-policy/</p>",
					"cweid": "693",
					"wascid": "15",
					"sourceid": "1"
				},
				{
					"pluginid": "2",
					"alertRef": "2",
					"alert": "Private IP Disclosure",
					"name": "Private IP Disclosure",
					"riskcode": "1",
					"confidence": "2",
					"riskdesc": "Low (Medium)",
					"desc": "<p>A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/docs/alerts/2/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "ip-10-0-56-78"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "ip-10-0-56-78"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "ip-10-0-56-78"
						},
						{
							"uri": "https://www.zaproxy.org/docs/desktop/ui/dialogs/options/localproxy/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "192.168.0.14:8080"
						},
						{
							"uri": "https://www.zaproxy.org/docs/docker/about/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "172.17.0.8:8090"
						},
						{
							"uri": "https://www.zaproxy.org/index.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "ip-10-0-56-78"
						}
					],
					"count": "6",
					"solution": "<p>Remove the private IP address from the HTTP response body.  For comments, use JSP/ASP/PHP comment instead of HTML/JavaScript comment which can be seen by client browsers.</p>",
					"otherinfo": "<p>ip-10-0-56-78</p><p></p>",
					"reference": "<p>https://tools.ietf.org/html/rfc1918</p>",
					"cweid": "200",
					"wascid": "13",
					"sourceid": "2662"
				},
				{
					"pluginid": "10035",
					"alertRef": "10035",
					"alert": "Strict-Transport-Security Header Not Set",
					"name": "Strict-Transport-Security Header Not Set",
					"riskcode": "1",
					"confidence": "3",
					"riskdesc": "Low (High)",
					"desc": "<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/blog/2022-02-16-zapcon-2022-schedule-is-now-live/images/ZAPCon-isNowLive_hu267e76fb4b026e02d83bd0f8bac2f972_187279_300x300_fill_box_smart1_3.png",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/blog/index.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/favicon.ico",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/search.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/08%20March%202022.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/button.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/sir-zapalot.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/ZAPCon-logo.svg",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/index.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/main.08cf90.js",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/main.d52679.css",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/sitemap.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": ""
						}
					],
					"count": "12",
					"solution": "<p>Ensure that your web server, application server, load balancer, etc. is configured to enforce Strict-Transport-Security.</p>",
					"otherinfo": "",
					"reference": "<p>https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html</p><p>https://owasp.org/www-community/Security_Headers</p><p>http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security</p><p>http://caniuse.com/stricttransportsecurity</p><p>http://tools.ietf.org/html/rfc6797</p>",
					"cweid": "319",
					"wascid": "15",
					"sourceid": "812"
				},
				{
					"pluginid": "10096",
					"alertRef": "10096",
					"alert": "Timestamp Disclosure - Unix",
					"name": "Timestamp Disclosure - Unix",
					"riskcode": "1",
					"confidence": "1",
					"riskdesc": "Low (Low)",
					"desc": "<p>A timestamp was disclosed by the application/web server - Unix</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "71455536"
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "71455536"
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "71455536"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "71455536"
						},
						{
							"uri": "https://www.zaproxy.org/sitemap.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "62139928"
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "71455536"
						}
					],
					"count": "6",
					"solution": "<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>",
					"otherinfo": "<p>71455536, which evaluates to: 1972-04-07 00:45:36</p>",
					"reference": "<p>http://projects.webappsec.org/w/page/13246936/Information%20Leakage</p>",
					"cweid": "200",
					"wascid": "13",
					"sourceid": "1"
				},
				{
					"pluginid": "10021",
					"alertRef": "10021",
					"alert": "X-Content-Type-Options Header Missing",
					"name": "X-Content-Type-Options Header Missing",
					"riskcode": "1",
					"confidence": "2",
					"riskdesc": "Low (Medium)",
					"desc": "<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/blog/2022-02-16-zapcon-2022-schedule-is-now-live/images/ZAPCon-isNowLive_hu267e76fb4b026e02d83bd0f8bac2f972_187279_300x300_fill_box_smart1_3.png",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/blog/index.xml",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/favicon.ico",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/search.svg",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/08%20March%202022.svg",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/button.svg",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/sir-zapalot.svg",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/img/zapcon/ZAPCon-logo.svg",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/index.xml",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/main.08cf90.js",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/main.d52679.css",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/sitemap.xml",
							"method": "GET",
							"param": "X-Content-Type-Options",
							"attack": "",
							"evidence": ""
						}
					],
					"count": "12",
					"solution": "<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>",
					"otherinfo": "<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At \"High\" threshold this scan rule will not alert on client or server error responses.</p>",
					"reference": "<p>http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx</p><p>https://owasp.org/www-community/Security_Headers</p>",
					"cweid": "693",
					"wascid": "15",
					"sourceid": "812"
				},
				{
					"pluginid": "10094",
					"alertRef": "10094",
					"alert": "Base64 Disclosure",
					"name": "Base64 Disclosure",
					"riskcode": "0",
					"confidence": "2",
					"riskdesc": "Informational (Medium)",
					"desc": "<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "2BmOQxhj1yovlQTEBCoUTi2caCoJTTMMjqlJJgLTTR74q5jgblwZOfx77ZrGyrqMPTQ5f51A5QcG"
						},
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "2F8WzOP8aOi0J4EqJzedMFZIywEEF8pMfLUcMi5WpY7ijO3aNg"
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "2BeQ8F0lS19wG2RRAGD0s0qe203ocg8vrscarR8gqPfkgEfdacBkfEh2qSwxIuKaLQpQqPJw"
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "2Bb8BGlBubeW1agSvWdnOcx2GUQ3llzox7pU1A2T5jdRtoRzHZXAteHn"
						},
						{
							"uri": "https://www.zaproxy.org/community/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "2BFYXlGrCZdvuA3fzgCpHWQ2iuZVyf6pUaMsvcKddPXM53AI"
						},
						{
							"uri": "https://www.zaproxy.org/docs/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "2B4YmkQNtw6FgIRzzmXs93zJEOYA5TZqHYKiRP3FTUSxSg0"
						},
						{
							"uri": "https://www.zaproxy.org/download/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "2FuoMBp5aswG56mg5Vk0rJaMFI9ks25cjXna4msXkUIf5fHI55OzHy"
						},
						{
							"uri": "https://www.zaproxy.org/getting-started/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "2FcvDY8erjuVdNpW1qlPAatNg28YaLv"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
						},
						{
							"uri": "https://www.zaproxy.org/sitemap.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "CdP3lgnpwe6zKlfngAC2pXpv3AOs9mXdQQRFbRg3"
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "aCgRbLIf4U3EaDowwXxHVH72D5VKLYC6ZqTFIfpRIPvUsvudAIWQi0sqRYqDCdy9harC3I2g"
						},
						{
							"uri": "https://www.zaproxy.org/zap-in-ten/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "2BjufEHzhDKDm1W0cwPxrrhlGxWpo256t45W34H3Himk60b"
						}
					],
					"count": "12",
					"solution": "<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>",
					"otherinfo": "<p>\uFFFD\\x0019\uFFFDC\\x0018c\uFFFD*/\uFFFD\\x0004\uFFFD\\x0004*\\x0014N-\uFFFDh*\tM3\\x000c\uFFFD\uFFFDI&\\x0002\uFFFDM\\x001e\uFFFD\uFFFD\uFFFD\uFFFDn\\\\x00199\uFFFD{\uFFFD\uFFFD\u02BA\uFFFD=49\uFFFD@\uFFFD\\x0007\\x0006</p>",
					"reference": "<p>http://projects.webappsec.org/w/page/13246936/Information%20Leakage</p>",
					"cweid": "200",
					"wascid": "13",
					"sourceid": "7"
				},
				{
					"pluginid": "10019",
					"alertRef": "10019",
					"alert": "Content-Type Header Missing",
					"name": "Content-Type Header Missing",
					"riskcode": "0",
					"confidence": "2",
					"riskdesc": "Informational (Medium)",
					"desc": "<p>The Content-Type header was either missing or empty.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/blog/2020-08-28-introducing-the-graphql-add-on-for-zap/",
							"method": "POST",
							"param": "",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/tags/graphql/index.xml",
							"method": "POST",
							"param": "",
							"attack": "",
							"evidence": ""
						}
					],
					"count": "2",
					"solution": "<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>",
					"otherinfo": "",
					"reference": "<p>http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx</p>",
					"cweid": "345",
					"wascid": "12",
					"sourceid": "476"
				},
				{
					"pluginid": "10027",
					"alertRef": "10027",
					"alert": "Information Disclosure - Suspicious Comments",
					"name": "Information Disclosure - Suspicious Comments",
					"riskcode": "0",
					"confidence": "1",
					"riskdesc": "Informational (Low)",
					"desc": "<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/faq/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "where"
						},
						{
							"uri": "https://www.zaproxy.org/main.08cf90.js",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "from"
						},
						{
							"uri": "https://www.zaproxy.org/search/?q=ZAP",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "query"
						}
					],
					"count": "3",
					"solution": "<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>",
					"otherinfo": "<p>The following pattern was used: \\bWHERE\\b and was detected in the element starting with: \"<script type=\"application/json\">{</p><p>                \"url\": \"\\/faq\\/somethings-not-working-what-should-i-do\\/\",</p><p>                \"ti\", see evidence field for the suspicious comment/snippet.</p>",
					"reference": "",
					"cweid": "200",
					"wascid": "13",
					"sourceid": "1098"
				},
				{
					"pluginid": "10109",
					"alertRef": "10109",
					"alert": "Modern Web Application",
					"name": "Modern Web Application",
					"riskcode": "0",
					"confidence": "2",
					"riskdesc": "Informational (Medium)",
					"desc": "<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/community/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/docs/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/docs/automate/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/download/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/getting-started/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						},
						{
							"uri": "https://www.zaproxy.org/zap-in-ten/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "<a class=\"toggler\">\n              <img height=\"20\" width=\"20\" src=\"/img/search.svg\" />\n            </a>"
						}
					],
					"count": "11",
					"solution": "<p>This is an informational alert and so no changes are required.</p>",
					"otherinfo": "<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>",
					"reference": "",
					"cweid": "-1",
					"wascid": "-1",
					"sourceid": "1"
				},
				{
					"pluginid": "10050",
					"alertRef": "10050",
					"alert": "Retrieved from Cache",
					"name": "Retrieved from Cache",
					"riskcode": "0",
					"confidence": "2",
					"riskdesc": "Informational (Medium)",
					"desc": "<p>The content was retrieved from a shared cache. If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where caching servers such as \"proxy\" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance. </p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "HIT"
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "HIT"
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Age: 0"
						},
						{
							"uri": "https://www.zaproxy.org/community/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Age: 0"
						},
						{
							"uri": "https://www.zaproxy.org/docs/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Age: 0"
						},
						{
							"uri": "https://www.zaproxy.org/docs/automate/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Age: 0"
						},
						{
							"uri": "https://www.zaproxy.org/download/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "HIT"
						},
						{
							"uri": "https://www.zaproxy.org/getting-started/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Age: 0"
						},
						{
							"uri": "https://www.zaproxy.org/sitemap.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Age: 0"
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "HIT"
						},
						{
							"uri": "https://www.zaproxy.org/zap-in-ten/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "Age: 0"
						}
					],
					"count": "11",
					"solution": "<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.</p>",
					"otherinfo": "",
					"reference": "<p>https://tools.ietf.org/html/rfc7234</p><p>https://tools.ietf.org/html/rfc7231</p><p>http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)</p>",
					"cweid": "-1",
					"wascid": "-1",
					"sourceid": "1"
				},
				{
					"pluginid": "10049",
					"alertRef": "10049",
					"alert": "Storable and Cacheable Content",
					"name": "Storable and Cacheable Content",
					"riskcode": "0",
					"confidence": "2",
					"riskdesc": "Informational (Medium)",
					"desc": "<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where \"shared\" caching servers such as \"proxy\" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/blog/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/community/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/docs/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/download/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/getting-started/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/robots.txt",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=14400"
						},
						{
							"uri": "https://www.zaproxy.org/sitemap.xml",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/videos/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						},
						{
							"uri": "https://www.zaproxy.org/zap-in-ten/",
							"method": "GET",
							"param": "",
							"attack": "",
							"evidence": "max-age=600"
						}
					],
					"count": "11",
					"solution": "<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>",
					"otherinfo": "",
					"reference": "<p>https://tools.ietf.org/html/rfc7234</p><p>https://tools.ietf.org/html/rfc7231</p><p>http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)</p>",
					"cweid": "524",
					"wascid": "13",
					"sourceid": "1"
				},
				{
					"pluginid": "10031",
					"alertRef": "10031",
					"alert": "User Controllable HTML Element Attribute (Potential XSS)",
					"name": "User Controllable HTML Element Attribute (Potential XSS)",
					"riskcode": "0",
					"confidence": "1",
					"riskdesc": "Informational (Low)",
					"desc": "<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>",
					"instances":[ 
						{
							"uri": "https://www.zaproxy.org/search/?q=ZAP",
							"method": "GET",
							"param": "q",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/search/?q=ZAP",
							"method": "GET",
							"param": "q",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/search/?q=ZAP",
							"method": "GET",
							"param": "q",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/search/?q=ZAP",
							"method": "GET",
							"param": "q",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/search/?q=ZAP",
							"method": "GET",
							"param": "q",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/search/?q=ZAP",
							"method": "GET",
							"param": "q",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/search/?q=ZAP",
							"method": "GET",
							"param": "q",
							"attack": "",
							"evidence": ""
						},
						{
							"uri": "https://www.zaproxy.org/search/?q=ZAP",
							"method": "GET",
							"param": "q",
							"attack": "",
							"evidence": ""
						}
					],
					"count": "8",
					"solution": "<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>",
					"otherinfo": "<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://www.zaproxy.org/search/?q=ZAP</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [div] tag [class] attribute </p><p></p><p>The user input found was:</p><p>q=ZAP</p><p></p><p>The user-controlled value was:</p><p>zapcon-2022-logo</p>",
					"reference": "<p>http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute</p>",
					"cweid": "20",
					"wascid": "20",
					"sourceid": "1674"
				}
			]
		}
	]
 }
