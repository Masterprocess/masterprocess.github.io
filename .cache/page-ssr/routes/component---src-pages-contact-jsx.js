"use strict";
exports.id = 755;
exports.ids = [755];
exports.modules = {

/***/ 301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4063);
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7528);
const ContactPage=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"container mx-auto px-4 py-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"mb-4 text-2xl font-bold"},"Contact Me"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ContactForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null)));const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{title:"Contact"});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

/***/ }),

/***/ 1247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
const ContactForm=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{name:"contact",method:"POST","data-netlify":"true",className:"space-y-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"name",className:"block text-sm font-semibold"},"Name"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{id:"name",name:"name",className:"w-full border p-2"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"email",className:"block text-sm font-semibold"},"Email"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"email",id:"email",name:"email",className:"w-full border p-2"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:"message",className:"block text-sm font-semibold"},"Message"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea",{id:"message",name:"message",rows:4,className:"w-full border p-2"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"submit",className:"rounded bg-bauhausBlue px-4 py-2 font-semibold text-white"},"Send"));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-jsx.js.map