(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2m5_t",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1Lexl"}},22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__bav-k"}},23:function(e,t,a){e.exports={Button:"Button_Button__AMJrb"}},26:function(e,t,a){e.exports={Notice:"Notice_Notice__3A74j"}},27:function(e,t,a){e.exports={ErrorNotice:"ErrorNotice_ErrorNotice__oDyyC"}},33:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1TXUo",SearchForm:"Searchbar_SearchForm__3aG9-",SearchForm__button:"Searchbar_SearchForm__button__Xt5FP",SearchForm__button__label:"Searchbar_SearchForm__button__label__2LBQU",SearchForm__input:"Searchbar_SearchForm__input__wcUUC"}},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a.n(n),o=a(6),l=a.n(o),u=(a(32),a(33),a(13)),s=a(2),i=a(4),b=a.n(i),m=a(1),j=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(m.jsx)("header",{className:b.a.Searchbar,children:Object(m.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(m.jsx)("button",{type:"submit",className:b.a.SearchForm__button,children:Object(m.jsx)("span",{className:b.a.SearchForm__button__label,children:"Search"})}),Object(m.jsx)("input",{className:b.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){var t=e.currentTarget.value;o(t)}})]})})},_=a(11),g=a.n(_),d=function(e){var t=e.url,a=e.tags,r=e.largeImageURL;return Object(m.jsx)("li",{className:g.a.ImageGalleryItem,children:Object(m.jsx)("img",{src:t,alt:a,className:g.a.ImageGalleryItem__image,"data-large-image":r})})},O=a(22),h=a.n(O),f=function(e){var t=e.images,a=e.onClick;return Object(m.jsx)("ul",{className:h.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,n=e.largeImageURL;return Object(m.jsx)(d,{url:a,tags:r,largeImageURL:n},t)}))})},p=a(23),S=a.n(p),x=function(e){var t=e.shouldRenderBtn,a=e.onButtonClick;return t&&Object(m.jsx)("button",{className:S.a.Button,type:"button",onClick:a,children:"Load more"})},v=a(24),I=a(25),y=a.n(I),N=a(10),k=Object(N.css)(r||(r=Object(v.a)(["\n  display: block;\n  margin: 0 auto;\n"]))),F=function(){return"#"+(Math.random().toString(16)+"000000").substring(2,8)},G=function(e){var t=e.loading,a=Object(n.useState)(F()),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){return o(F())}),[t]),t&&Object(m.jsx)(y.a,{color:c,css:k})},w=a(26),C=a.n(w),M=function(e){var t=e.notice;return t&&Object(m.jsx)("p",{className:C.a.Notice,children:t})},E=a(27),L=a.n(E),U=function(e){var t=e.error;return t&&Object(m.jsx)("p",{className:L.a.ErrorNotice,children:t.message})},B=a(8),R=a.n(B),A=document.querySelector("#modal-root"),T=function(e){var t=e.largeImageUrl,a=e.largeImageAlt,r=e.onClose;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&r()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[r]);return Object(o.createPortal)(Object(m.jsx)("div",{className:R.a.Overlay,onClick:function(e){e.currentTarget===e.target&&r()},children:Object(m.jsx)("div",{className:R.a.Modal,children:Object(m.jsx)("img",{className:R.a.ModalImg,src:t,alt:a})})}),A)},P=a(12),q=a.n(P);q.a.defaults.baseURL="https://pixabay.com/api";var z=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r,c=e.pageSize,o=void 0===c?12:c;return q.a.get("/?q=".concat(a,"&page=").concat(n,"&key=").concat("19750317-f167cae8029dbba7a5b9e2fed","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data}))},J=(a(59),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),o=Object(s.a)(c,2),l=o[0],i=o[1],b=Object(n.useState)(""),_=Object(s.a)(b,2),g=_[0],d=_[1],O=Object(n.useState)(!1),h=Object(s.a)(O,2),p=h[0],S=h[1],v=Object(n.useState)(""),I=Object(s.a)(v,2),y=I[0],N=I[1],k=Object(n.useState)(!0),F=Object(s.a)(k,2),w=F[0],C=F[1],E=Object(n.useState)(null),L=Object(s.a)(E,2),B=L[0],R=L[1],A=Object(n.useState)(!1),P=Object(s.a)(A,2),q=P[0],J=P[1],Q=Object(n.useState)(""),D=Object(s.a)(Q,2),H=D[0],X=D[1],V=Object(n.useState)(""),K=Object(s.a)(V,2),W=K[0],Y=K[1];Object(n.useEffect)((function(){g?function(){var e={searchQuery:g,currentPage:l,pageSize:12};S(!0),z(e).then((function(e){var t=e.hits,a=e.totalHits;0!==a?((a<=12||t.length<12)&&C(!1),r((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):N("Images with '".concat(g,"' not found!"))})).catch((function(e){return R(e)})).finally((function(){return S(!1)}))}():r([])}),[l,g]);var Z=a.length>0&&w&&!p;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{onSubmit:function(e){g!==e&&(N(""),C(!0),R(null),d(e),i(1),r([]))}}),Object(m.jsx)(U,{error:B}),Object(m.jsx)(M,{notice:y}),Object(m.jsx)(f,{images:a,onClick:function(e){"IMG"===e.target.nodeName&&(X(e.target.dataset.largeImage),Y(e.target.alt),J(!0))}}),q&&Object(m.jsx)(T,{largeImageUrl:H,largeImageAlt:W,onClose:function(){J(!1)}}),Object(m.jsx)(G,{loading:p}),Object(m.jsx)(x,{onButtonClick:function(){i((function(e){return e+1}))},shouldRenderBtn:Z})]})});l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__149oL",Modal:"Modal_Modal__1IdTq",ModalImg:"Modal_ModalImg__3V03n"}}},[[60,1,2]]]);
//# sourceMappingURL=main.b4246f7f.chunk.js.map