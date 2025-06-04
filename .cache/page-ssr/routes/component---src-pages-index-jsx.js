"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 1092:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/f22f68b152b8959bda8df4eb7ac07ad1/998cd/project2.svg","srcSet":"/static/f22f68b152b8959bda8df4eb7ac07ad1/85771/project2.svg 75w,\\n/static/f22f68b152b8959bda8df4eb7ac07ad1/71beb/project2.svg 150w,\\n/static/f22f68b152b8959bda8df4eb7ac07ad1/998cd/project2.svg 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/f22f68b152b8959bda8df4eb7ac07ad1/0987d/project2.webp 75w,\\n/static/f22f68b152b8959bda8df4eb7ac07ad1/70dfd/project2.webp 150w,\\n/static/f22f68b152b8959bda8df4eb7ac07ad1/9b21f/project2.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":200}');

/***/ }),

/***/ 1247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
const ContactForm=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{name:"contact",method:"POST","data-netlify":"true",className:"space-y-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"name",className:"block text-sm font-semibold"},"Name"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{id:"name",name:"name",className:"w-full border p-2"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"email",className:"block text-sm font-semibold"},"Email"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"email",id:"email",name:"email",className:"w-full border p-2"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"message",className:"block text-sm font-semibold"},"Message"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea",{id:"message",name:"message",rows:4,className:"w-full border p-2"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"submit",className:"rounded bg-bauhausBlue px-4 py-2 font-semibold text-white"},"Send"));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ 2729:
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 4063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// ./src/components/Header.jsx
const Header=()=>/*#__PURE__*/react.createElement("header",{className:"bg-bauhausRed text-white"},/*#__PURE__*/react.createElement("div",{className:"container mx-auto flex flex-wrap items-center justify-between px-4 py-4"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/",className:"font-bold hover:underline"},"Zoe Rackley"),/*#__PURE__*/react.createElement("nav",{className:"flex flex-wrap space-x-4"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/",className:"hover:underline"},"Home"),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/contact",className:"hover:underline"},"Contact"),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/resume",className:"hover:underline"},"Resume"))));/* harmony default export */ const components_Header = (Header);
;// ./src/components/Footer.jsx
const Footer=()=>/*#__PURE__*/react.createElement("footer",{className:"bg-bauhausBlack py-4 text-center text-white"},"\xA9 ",new Date().getFullYear()," Zoe Rackley");/* harmony default export */ const components_Footer = (Footer);
;// ./src/components/Layout.tsx
const Layout=({children,showFooter=true})=>{return/*#__PURE__*/react.createElement("div",{className:"flex min-h-screen flex-col font-sans"},/*#__PURE__*/react.createElement(components_Header,null),/*#__PURE__*/react.createElement("main",{className:"flex-grow"},children),showFooter&&/*#__PURE__*/react.createElement(components_Footer,null));};/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 4213:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/static/601161df4915b750161e207c459d0072/b4c06/profile.svg","srcSet":"/static/601161df4915b750161e207c459d0072/27e2e/profile.svg 32w,\\n/static/601161df4915b750161e207c459d0072/cd728/profile.svg 64w,\\n/static/601161df4915b750161e207c459d0072/b4c06/profile.svg 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/static/601161df4915b750161e207c459d0072/ef6ff/profile.webp 32w,\\n/static/601161df4915b750161e207c459d0072/8257c/profile.webp 64w,\\n/static/601161df4915b750161e207c459d0072/6766a/profile.webp 128w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":128}');

/***/ }),

/***/ 7528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */function Seo({description,title,children}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,defaultTitle?`${title} | ${defaultTitle}`:title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),children);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 7672:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/1c0b060e03c9c10531455cfc54711758/998cd/project1.svg","srcSet":"/static/1c0b060e03c9c10531455cfc54711758/85771/project1.svg 75w,\\n/static/1c0b060e03c9c10531455cfc54711758/71beb/project1.svg 150w,\\n/static/1c0b060e03c9c10531455cfc54711758/998cd/project1.svg 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/1c0b060e03c9c10531455cfc54711758/0987d/project1.webp 75w,\\n/static/1c0b060e03c9c10531455cfc54711758/70dfd/project1.webp 150w,\\n/static/1c0b060e03c9c10531455cfc54711758/9b21f/project1.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":200}');

/***/ }),

/***/ 9026:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/2ab3d5a1b6e255ca3abf30e97c5b27b0/998cd/project3.svg","srcSet":"/static/2ab3d5a1b6e255ca3abf30e97c5b27b0/85771/project3.svg 75w,\\n/static/2ab3d5a1b6e255ca3abf30e97c5b27b0/71beb/project3.svg 150w,\\n/static/2ab3d5a1b6e255ca3abf30e97c5b27b0/998cd/project3.svg 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/2ab3d5a1b6e255ca3abf30e97c5b27b0/0987d/project3.webp 75w,\\n/static/2ab3d5a1b6e255ca3abf30e97c5b27b0/70dfd/project3.webp 150w,\\n/static/2ab3d5a1b6e255ca3abf30e97c5b27b0/9b21f/project3.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":200}');

/***/ }),

/***/ 9532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/components/Layout.tsx + 2 modules
var Layout = __webpack_require__(4063);
;// ./src/components/HeroBauhaus.jsx
const HeroBauhaus=({intro,ctaText,ctaLink})=>{return/*#__PURE__*/react.createElement("section",{id:"welcome",className:"relative flex h-[32rem] flex-col items-center justify-center bg-bauhausYellow overflow-hidden text-center space-y-4"},/*#__PURE__*/react.createElement("div",{className:"absolute inset-0"},/*#__PURE__*/react.createElement("div",{className:"absolute top-0 left-0 h-48 w-48 bg-bauhausBlue"}),/*#__PURE__*/react.createElement("div",{className:"absolute bottom-0 right-0 h-32 w-32 bg-bauhausRed"}),/*#__PURE__*/react.createElement("div",{className:"absolute top-10 right-10 h-24 w-24 rounded-full border-4 border-bauhausBlack"}),/*#__PURE__*/react.createElement("div",{className:"absolute bottom-10 left-1/2 h-16 w-16 -translate-x-1/2 bg-bauhausBlack"})),/*#__PURE__*/react.createElement("h1",{className:"relative text-5xl font-bold text-bauhausBlack"},"Welcome to my portfolio"),intro&&/*#__PURE__*/react.createElement("p",{className:"relative max-w-lg text-lg text-bauhausBlack"},intro),ctaText&&ctaLink&&/*#__PURE__*/react.createElement("a",{href:ctaLink,className:"relative inline-block rounded bg-bauhausRed px-4 py-2 font-semibold text-white hover:bg-bauhausBlack"},ctaText));};/* harmony default export */ const components_HeroBauhaus = (HeroBauhaus);
// EXTERNAL MODULE: ./node_modules/camelcase/index.js
var camelcase = __webpack_require__(2729);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=800,c=800,h=(/* unused pure expression or super */ null && (4/3)),g=function(e){return console.warn(e);},p=function(e,t){return e-t;},m=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}},f=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function v(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function w(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,d=e.formats,g=void 0===d?["auto","webp"]:d;return g=g.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:g,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||h))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/h):c),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:g}));}function y(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=w(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function b(e){var t,a=(e=w(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,d=e.options,h=e.width,p=e.height,y=e.filename,b=e.reporter,S=void 0===b?{warn:g}:b,N=e.backgroundColor,x=e.placeholderURL;if(a||S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=v(y)):i={width:h,height:p,format:(null==(t=i)?void 0:t.format)||v(y)||"auto"};var I=new Set(e.formats);(0===I.size||I.has("auto")||I.has(""))&&(I.delete("auto"),I.delete(""),I.add(i.format)),I.has("jpg")&&I.has("png")&&(S.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),I.delete("jpg"===i.format?"png":"jpg"));var W=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:g}:o,d=e.breakpoints,h=void 0===d?l:d,p=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(p.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+p.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,d=void 0===u?{warn:g}:u,h=a.width/a.height,p=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):c;var f=i;if(a.width<i||a.height<r){var v=a.width<i?"width":"height";d.warn("\nThe requested "+v+' "'+("width"===v?i:r)+'px" for the image '+t+" was larger than the actual image "+v+" of "+a[v]+"px. If possible, replace the current image with a larger one."),"width"===v?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:p.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}(e):"constrained"===i?E(e):"fullWidth"===i?E(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),j={sources:[]},R=e.sizes;R||(R=m(W.presentationWidth,o)),I.forEach(function(e){var t=W.sizes.map(function(t){var i=r(y,t,Math.round(t/W.aspectRatio),e,u,d);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;S.warn("["+a+"] The resolver for image "+y+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===W.unscaledWidth;})||t[0];i&&(j.fallback={src:i.src,srcSet:f(t),sizes:R});}else{var n;null==(n=j.sources)||n.push({srcSet:f(t),sizes:R,type:"image/"+e});}});var _={images:j,layout:o,backgroundColor:N};switch(x&&(_.placeholder={fallback:x}),o){case"fixed":_.width=W.presentationWidth,_.height=W.presentationHeight;break;case"fullWidth":_.width=1,_.height=1/W.aspectRatio;break;case"constrained":_.width=e.width||W.presentationWidth||1,_.height=(_.width||1)/W.aspectRatio;}return _;}var k=function(e){return Array.from(new Set([1].concat(e))).sort(p);};function E(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,c=e.layout,h=a.width/a.height,g=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(d,a.width))/h),i||(i=r*h);var f=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==c||t.includes(i)||t.push(i),{sizes:t=t.sort(p),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}function M(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var S=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),N=(/* unused pure expression or super */ null && (["images","placeholder"]));function x(){return true&&true;}var I=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},W=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},j=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function R(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,S);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),b(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function _(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,N),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var A,O=["src","srcSet","loading","alt","shouldLoad"],T=["fallback","sources","shouldLoad"],z=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,O);return/*#__PURE__*/react.createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},L=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,T),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/react.createElement(z,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/react.createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/react.createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};z.propTypes={src:prop_types.string.isRequired,alt:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string,shouldLoad:prop_types.bool},L.displayName="Picture",L.propTypes={alt:prop_types.string.isRequired,shouldLoad:prop_types.bool,fallback:prop_types.exact({src:prop_types.string.isRequired,srcSet:prop_types.string,sizes:prop_types.string}),sources:prop_types.arrayOf(prop_types.oneOfType([prop_types.exact({media:prop_types.string.isRequired,type:prop_types.string,sizes:prop_types.string,srcSet:prop_types.string.isRequired}),prop_types.exact({media:prop_types.string,type:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string.isRequired})]))};var q=["fallback"],C=function(t){var a=t.fallback,i=o(t,q);return a?/*#__PURE__*/react.createElement(L,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react.createElement("div",n({},i));};C.displayName="Placeholder",C.propTypes={fallback:prop_types.string,sources:null==(A=L.propTypes)?void 0:A.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var D=function(t){return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(L,n({},t)),/*#__PURE__*/react.createElement("noscript",null,/*#__PURE__*/react.createElement(L,n({},t,{shouldLoad:!0}))));};D.displayName="MainImage",D.propTypes=L.propTypes;var P=["children"],H=function(){return/*#__PURE__*/react.createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},F=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/react.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/react.createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/react.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+i+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},B=function(a){var i=a.children,r=o(a,P);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(F,n({},r)),i,/*#__PURE__*/react.createElement(H,null));},G=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],V=["style","className"],U=function(e){return e.replace(/\n/g,"");},X=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,G);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,E=u.placeholder,M=u.backgroundColor,S=function(e,t,a){var i={},r="gatsby-image-wrapper";return x()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(x()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),N=S.style,I=S.className,W=o(S,V),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?U(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:U(e.srcSet)});})),/*#__PURE__*/react.createElement(i,n({},W,{style:n({},N,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/react.createElement(B,{layout:b,width:w,height:y},/*#__PURE__*/react.createElement(C,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return x()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(E,0,b,w,y,M,m,f))),/*#__PURE__*/react.createElement(D,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),x()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},Y=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],Z=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,Y);return s&&console.warn(s),r?/*#__PURE__*/react.createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(X),J=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types_default().number.apply((prop_types_default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},K=new Set(["fixed","fullWidth","constrained"]),Q={src:(prop_types_default()).string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types_default().string.apply((prop_types_default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:J,height:J,sizes:(prop_types_default()).string,layout:function(e){if(void 0!==e.layout&&!K.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};Z.displayName="StaticImage",Z.propTypes=Q;
;// ./src/components/AboutMe.jsx
const AboutMe=()=>/*#__PURE__*/react.createElement("section",{id:"about",className:"container mx-auto px-4 py-8 bg-gray-100"},/*#__PURE__*/react.createElement("h2",{className:"mb-4 text-2xl font-bold"},"About"),/*#__PURE__*/react.createElement("div",{className:"flex flex-col items-center gap-4 md:flex-row"},/*#__PURE__*/react.createElement(Z,{src:"../images/profile.svg",alt:"Profile photo",className:"h-32 w-32 rounded-full",__imageData:__webpack_require__(4213)}),/*#__PURE__*/react.createElement("p",{className:"text-gray-700"},"Hello! I'm Zoe Rackley, a UX designer fascinated by the principles of Bauhaus design. I enjoy blending geometry, color, and usability to craft engaging digital experiences.")));/* harmony default export */ const components_AboutMe = (AboutMe);
;// ./src/data/projects.js
const projects=[{title:"Project One",description:"A Bauhaus-themed dashboard interface.",image:"../images/projects/project1.svg",demo:"https://example.com/project-one",source:"https://github.com/masterprocess/project-one"},{title:"Project Two",description:"Mobile app prototype exploring color and form.",image:"../images/projects/project2.svg",demo:"https://example.com/project-two",source:"https://github.com/masterprocess/project-two"},{title:"Project Three",description:"Experiment with geometric typography.",image:"../images/projects/project3.svg",demo:"https://example.com/project-three",source:"https://github.com/masterprocess/project-three"}];/* harmony default export */ const data_projects = (projects);
;// ./src/components/ProjectCard.jsx
const ProjectCard=({project})=>{const renderImage=()=>{switch(project.image){case"../images/projects/project1.svg":return/*#__PURE__*/react.createElement(Z,{src:"../images/projects/project1.svg",alt:project.title,className:"w-full",__imageData:__webpack_require__(7672)});case"../images/projects/project2.svg":return/*#__PURE__*/react.createElement(Z,{src:"../images/projects/project2.svg",alt:project.title,className:"w-full",__imageData:__webpack_require__(1092)});case"../images/projects/project3.svg":return/*#__PURE__*/react.createElement(Z,{src:"../images/projects/project3.svg",alt:project.title,className:"w-full",__imageData:__webpack_require__(9026)});default:return null;}};return/*#__PURE__*/react.createElement("div",{className:"space-y-2 rounded border p-4 shadow bg-white"},renderImage(),/*#__PURE__*/react.createElement("h3",{className:"text-xl font-semibold"},project.title),/*#__PURE__*/react.createElement("p",{className:"text-gray-700"},project.description),/*#__PURE__*/react.createElement("div",{className:"space-x-4"},/*#__PURE__*/react.createElement("a",{href:project.demo,className:"text-bauhausBlue underline"},"Demo"),/*#__PURE__*/react.createElement("a",{href:project.source,className:"text-bauhausRed underline"},"Code")));};/* harmony default export */ const components_ProjectCard = (ProjectCard);
;// ./src/components/FeaturedWork.jsx
const FeaturedWork=()=>/*#__PURE__*/react.createElement("section",{id:"work",className:"container mx-auto px-4 py-8"},/*#__PURE__*/react.createElement("h2",{className:"mb-4 text-2xl font-bold"},"Featured Work"),/*#__PURE__*/react.createElement("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3"},data_projects.map(project=>/*#__PURE__*/react.createElement(components_ProjectCard,{key:project.title,project:project}))));/* harmony default export */ const components_FeaturedWork = (FeaturedWork);
// EXTERNAL MODULE: ./src/components/ContactForm.tsx
var ContactForm = __webpack_require__(1247);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__(7528);
;// ./src/pages/index.jsx
const IndexPage=()=>/*#__PURE__*/react.createElement(Layout/* default */.A,null,/*#__PURE__*/react.createElement(components_HeroBauhaus,{intro:"Bauhaus-inspired interfaces and user experiences.",ctaText:"Contact Me",ctaLink:"#contact"}),/*#__PURE__*/react.createElement(components_AboutMe,null),/*#__PURE__*/react.createElement(components_FeaturedWork,null),/*#__PURE__*/react.createElement("section",{id:"contact",className:"container mx-auto px-4 py-8 bg-gray-100"},/*#__PURE__*/react.createElement("h2",{className:"mb-4 text-2xl font-bold"},"Get in Touch"),/*#__PURE__*/react.createElement("p",{className:"mb-4 text-gray-700"},"Reach out to discuss potential collaborations or just say hello!"),/*#__PURE__*/react.createElement(ContactForm/* default */.A,null)));const Head=()=>/*#__PURE__*/react.createElement(seo/* default */.A,{title:"Home"});/* harmony default export */ const pages = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jsx.js.map