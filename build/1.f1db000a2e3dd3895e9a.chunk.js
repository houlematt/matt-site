webpackJsonp([1],{"./app/components/H2/index.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),a=o(["\n  font-size: 1.5em;\n"],["\n  font-size: 1.5em;\n"]),s=r.a.h2(a);n.a=s},"./app/containers/App/actions.js":function(e,n,t){"use strict";function o(e,n){return{type:a.c,repos:e,username:n}}function r(e){return{type:a.d,error:e}}var a=t("./app/containers/App/constants.js");n.a=o,n.b=r},"./app/containers/HomePage/AtPrefix.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),a=o(["\n  color: black;\n  margin-left: 0.4em;\n"],["\n  color: black;\n  margin-left: 0.4em;\n"]);r.a.span(a)},"./app/containers/HomePage/CenteredSection.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),a=t("./app/containers/HomePage/Section.js"),s=o(["\n  text-align: center;\n"],["\n  text-align: center;\n"]),i=t.i(r.a)(a.a)(s);n.a=i},"./app/containers/HomePage/Form.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),a=o(["\n  margin-bottom: 1em;\n"],["\n  margin-bottom: 1em;\n"]);r.a.form(a)},"./app/containers/HomePage/Input.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),a=o(["\n  outline: none;\n  border-bottom: 1px dotted #999;\n"],["\n  outline: none;\n  border-bottom: 1px dotted #999;\n"]);r.a.input(a)},"./app/containers/HomePage/Section.js":function(e,n,t){"use strict";function o(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t("./node_modules/styled-components/dist/styled-components.es.js"),a=o(["\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"],["\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"]),s=r.a.section(a);n.a=s},"./app/containers/HomePage/actions.js":function(e,n,t){"use strict";t("./app/containers/HomePage/constants.js")},"./app/containers/HomePage/constants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o="boilerplate/Home/CHANGE_USERNAME"},"./app/containers/HomePage/index.js":function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function s(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),c=t.n(i),p=t("./node_modules/react-helmet/lib/Helmet.js"),l=t.n(p),u=t("./node_modules/react-intl/lib/index.es.js"),f=t("./node_modules/react-redux/lib/index.js"),m=(t.n(f),t("./node_modules/reselect/es/index.js"),t("./app/containers/App/selectors.js"),t("./app/components/H2/index.js")),d=t("./app/components/A/index.js"),g=(t("./app/containers/HomePage/AtPrefix.js"),t("./app/containers/HomePage/CenteredSection.js")),b=(t("./app/containers/HomePage/Form.js"),t("./app/containers/HomePage/Input.js"),t("./app/containers/HomePage/Section.js")),j=t("./app/containers/HomePage/messages.js");t("./app/containers/App/actions.js"),t("./app/containers/HomePage/actions.js"),t("./app/containers/HomePage/selectors.js");t.d(n,"HomePage",function(){return w});var v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var a=n&&n.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+3];t.children=c}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),P=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),h=y(d.a,o({target:"_blank",href:"https://www.amazon.jobs/principles"},"target","new"),void 0,"Leadership"),w=function(e){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return s(n,e),P(n,[{key:"render",value:function(){var e=this.props;e.loading,e.error,e.repos;return y("article",{},void 0,y(l.a,{title:"Home",meta:[{name:"description",content:"Personal Site of Matt Houle"}]}),y("div",{},void 0,y(g.a,{},void 0,y(m.a,{},void 0,c.a.createElement(u.c,j.a.homePageHeader))),y(b.a,{},void 0,y("p",{},void 0,c.a.createElement(u.c,j.a.introMessage)),y("p",{},void 0,c.a.createElement(u.c,j.a.startProjectMessage)),y("p",{},void 0,c.a.createElement(u.c,v({},j.a.manifestoMessage,{values:{principles:h}}))))))}}]),n}(c.a.PureComponent);n.default=w},"./app/containers/HomePage/messages.js":function(e,n,t){"use strict";var o=t("./node_modules/react-intl/lib/index.es.js");n.a=t.i(o.d)({homePageHeader:{id:"boilerplate.containers.HomePage.greeting.header",defaultMessage:"Welcome to the personal website of Matt Houle"},introMessage:{id:"boilerplate.containers.HomePage.intro.message",defaultMessage:"I'm a software engineer with a passion for seeing people use what I build. I currently work at Meltwater. I plan to share some of the things I work on here. Feel free to look around and send me a message."},startProjectMessage:{id:"boilerplate.containers.HomePage.intro.message",defaultMessage:"I started this web site as a way to experiment with some tech that I haven't been able to use in my 9-5 job, namely React and Heroku. Apologies if things seem unpolished, they wont be like that for very long."},manifestoMessage:{id:"boilerplate.containers.HomePage.intro.manifesto",defaultMessage:"I'm a big fan of Amazon's {principles} principles, especially their \"Bias For Action\". Putting working software in front of actual users is what I love most about what I do."}})},"./app/containers/HomePage/selectors.js":function(e,n,t){"use strict";var o=t("./node_modules/reselect/es/index.js");t.d(n,"a",function(){return a});var r=function(e){return e.get("home")},a=function(){return t.i(o.a)(r,function(e){return e.get("username")})}}});