!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["slim-select"]=e():t["slim-select"]=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=7)}([function(t,e,i){"use strict";function n(t,e){function i(t,e){return e&&t&&t.classList&&t.classList.contains(e)?t:null}function n(t,e){return t&&t!==document?i(t,e)?t:n(t.parentNode,e):null}return i(t,e)||n(t,e)}function s(t,e){var i=t.scrollTop+t.offsetTop,n=i+t.clientHeight,s=e.offsetTop,a=s+e.clientHeight;s<i?t.scrollTop-=i-s:a>n&&(t.scrollTop+=a-n)}function a(t,e,i){if(!Array.isArray(t))return t[e]===i;for(var n=0;n<t.length;n++)if(t[n]&&t[n][e]&&t[n][e]===i)return!0;return!1}e.a=n,e.b=s,e.c=a},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),s=i(0),a=i(6),o=i(5),r=i(4),l=function(){function t(t){var e=this;this.onChange=null,this.validate(t);var l=document.querySelector(t.select);t.onChange&&(this.onChange=t.onChange),this.config=new n.a({select:l}),this.select=new a.a({select:l,main:this}),this.data=new o.a({main:this}),this.slim=new r.a({main:this}),this.select.element.parentNode.insertBefore(this.slim.container,this.select.element.nextSibling),this.render(),document.addEventListener("click",function(t){i.i(s.a)(t.target,e.config.id)||e.close()})}return t.prototype.validate=function(t){var e=document.querySelector(t.select);if(!e)throw new Error("Could not find select element");if("SELECT"!==e.tagName)throw new Error("Element isnt of type select")},t.prototype.set=function(t,e,i){void 0===e&&(e="value"),void 0===i&&(i=!0),this.config.isMultiple&&!Array.isArray(t)?this.data.addToSelected(t,e):this.data.setSelected(t,e),this.render(),this.select.setValue(),i&&this.close()},t.prototype.setData=function(t){i.i(o.b)(t);var e=JSON.parse(JSON.stringify(t));this.select.create(e),this.render(),this.select.setValue()},t.prototype.open=function(){this.slim.search.input.focus(),this.data.contentOpen||(this.data.contentOpen=!0,this.config.isMultiple?this.slim.multiSelected.container.classList.add(this.config.open):(this.slim.singleSelected.container.classList.add(this.config.open),this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up"),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down")),this.slim.content.classList.add(this.config.open))},t.prototype.close=function(){this.data.contentOpen&&(this.data.contentOpen=!1,this.slim.search.input.blur(),this.config.isMultiple?this.slim.multiSelected.container.classList.remove(this.config.open):(this.slim.singleSelected.container.classList.remove(this.config.open),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up"),this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down")),this.slim.content.classList.remove(this.config.open),this.search(""))},t.prototype.search=function(t){this.data.searchValue!==t&&(this.slim.search.input.value=t,this.data.search(t),this.render())},t.prototype.render=function(){this.config.isMultiple?this.slim.values():this.slim.placeholder(),this.slim.options()},t.prototype.destroy=function(){this.select.element.removeAttribute("style"),this.slim.container.parentElement.removeChild(this.slim.container)},t}();e.default=l},function(t,e,i){"use strict";var n=function(){function t(t){this.id="",this.placeholder="",this.isMultiple=!1,this.main="ss-main",this.singleSelected="ss-single-selected",this.arrow="ss-arrow",this.multiSelected="ss-multi-selected",this.add="ss-add",this.plus="ss-plus",this.values="ss-values",this.value="ss-value",this.valueText="ss-value-text",this.valueDelete="ss-value-delete",this.content="ss-content",this.open="ss-open",this.search="ss-search",this.list="ss-list",this.optgroup="ss-optgroup",this.optgroupLabel="ss-optgroup-label",this.option="ss-option",this.highlighted="ss-highlighted",this.disabled="ss-disabled",this.id="ss-"+Math.floor(1e5*Math.random()),this.isMultiple=t.select.multiple}return t}();e.a=n},function(t,e,i){"use strict";var n=i(0),s=function(){function t(t){this.main=t.main,this.container=this.containerDiv(),this.content=this.contentDiv(),this.search=this.searchDiv(),this.list=this.listDiv(),this.options(),this.main.config.isMultiple?(this.multiSelected=this.multiSelectedDiv(),this.container.appendChild(this.multiSelected.container),this.container.appendChild(this.content),this.content.appendChild(this.search.container),this.content.appendChild(this.list)):(this.singleSelected=this.singleSelectedDiv(),this.container.appendChild(this.singleSelected.container),this.container.appendChild(this.content),this.content.appendChild(this.search.container),this.content.appendChild(this.list))}return t.prototype.containerDiv=function(){var t=document.createElement("div");return t.classList.add(this.main.config.id),t.classList.add(this.main.config.main),t},t.prototype.singleSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.singleSelected);var i=document.createElement("span");i.classList.add("placeholder");this.main.data.selected;e.appendChild(i);var n=document.createElement("span");n.classList.add(this.main.config.arrow);var s=document.createElement("span");return s.classList.add("arrow-up"),n.appendChild(s),e.appendChild(n),e.onclick=function(){t.main.data.contentOpen?t.main.close():t.main.open()},{container:e,placeholder:i,arrowIcon:{container:n,arrow:s}}},t.prototype.placeholder=function(){var t=this.main.data.selected;this.singleSelected.placeholder.innerHTML=t?t.innerHTML||t.text:""},t.prototype.multiSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.multiSelected);var i=document.createElement("div");i.classList.add(this.main.config.values),e.appendChild(i);var n=document.createElement("div");n.classList.add(this.main.config.add);var s=document.createElement("span");return s.classList.add(this.main.config.plus),s.innerHTML="+",n.appendChild(s),e.appendChild(n),e.onclick=function(e){e.target.classList.contains(t.main.config.valueDelete)||t.main.open()},{container:e,values:i,add:n}},t.prototype.values=function(){var t=this;if(this.main.config.isMultiple){for(var e=this.multiSelected.values.childNodes,i=this.main.data.selected,n=void 0,s=0;s<i.length;s++){n=!1;for(var a=0;a<e.length;a++){var o=e[a];i[s].id===o.dataset.id&&(n=!0)}n||this.multiSelected.values.appendChild(this.valueDiv(i[s]))}for(var a=0;a<e.length;a++)!function(){n=!0;for(var s=e[a],o=0;o<i.length;o++)String(i[o].id)===String(s.dataset.id)&&(n=!1);if(n){var r=e[a];r.classList.add("ss-out"),setTimeout(function(){t.multiSelected.values.removeChild(r)},200)}}()}},t.prototype.valueDiv=function(t){var e=this,i=document.createElement("div");i.classList.add(this.main.config.value),i.dataset.id=t.id;var n=document.createElement("span");n.classList.add(this.main.config.valueText),n.innerHTML=t.text,i.appendChild(n);var s=document.createElement("span");return s.classList.add(this.main.config.valueDelete),s.innerHTML="x",s.onclick=function(i){e.main.data.removeFromSelected(t.id,"id"),e.main.render(),e.main.select.setValue(),i.preventDefault()},i.appendChild(s),i},t.prototype.contentDiv=function(){var t=document.createElement("div");return t.classList.add(this.main.config.content),t},t.prototype.searchDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.search);var i=document.createElement("input");return i.type="search",i.placeholder="Search",i.tabIndex=0,i.onclick=function(e){setTimeout(function(){""===e.target.value&&t.main.search("")},10)},i.onkeydown=function(e){"ArrowUp"===e.key?(t.highlightUp(),e.preventDefault()):"ArrowDown"===e.key&&(t.highlightDown(),e.preventDefault())},i.onkeyup=function(e){var i=e.target;if("Enter"===e.key){var n=t.list.querySelector("."+t.main.config.highlighted);n&&n.click()}else"ArrowUp"===e.key||"ArrowDown"===e.key||("Escape"===e.key?t.main.close():t.main.search(i.value));e.preventDefault()},i.onfocus=function(){t.main.open()},e.appendChild(i),{container:e,input:i}},t.prototype.highlightUp=function(){var t=this.list.querySelector("."+this.main.config.highlighted),e=null;if(t)e=t.previousSibling;else{var s=this.list.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");e=s[s.length-1]}if(e&&e.classList.contains(this.main.config.optgroupLabel)&&(e=null),null===e){var a=t.parentNode;a.classList.contains(this.main.config.optgroup)&&a.previousSibling&&(e=a.previousSibling.childNodes[a.previousSibling.childNodes.length-1])}e&&(t&&t.classList.remove(this.main.config.highlighted),e.classList.add(this.main.config.highlighted),i.i(n.b)(this.list,e))},t.prototype.highlightDown=function(){var t=this.list.querySelector("."+this.main.config.highlighted),e=t?t.nextSibling:this.list.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")");if(null===e){var s=t.parentNode;if(s.classList.contains(this.main.config.optgroup)&&s.nextSibling){e=s.nextSibling.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")")}}e&&(t&&t.classList.remove(this.main.config.highlighted),e.classList.add(this.main.config.highlighted),i.i(n.b)(this.list,e))},t.prototype.listDiv=function(){var t=document.createElement("div");return t.classList.add(this.main.config.list),t},t.prototype.options=function(){var t=this.main.data.filtered||this.main.data.data;this.list.innerHTML="";for(var e=0;e<t.length;e++)if(t[e].hasOwnProperty("label")){var i=t[e],n=document.createElement("div");n.classList.add(this.main.config.optgroup);var s=document.createElement("div");s.classList.add(this.main.config.optgroupLabel),s.innerHTML=i.label,n.appendChild(s);for(var a=i.options,o=0;o<a.length;o++)n.appendChild(this.option(a[o]));this.list.appendChild(n)}else this.list.appendChild(this.option(t[e]))},t.prototype.option=function(t){var e=this,s=document.createElement("div");return s.classList.add(this.main.config.option),this.main.data.selected.id===t.id&&s.classList.add(this.main.config.highlighted),s.dataset.id=t.id,s.innerHTML=t.innerHTML,s.onclick=function(t){var i=t.target;e.main.set(i.dataset.id,"id")},(t.disabled||i.i(n.c)(this.main.data.selected,"id",t.id))&&(s.onclick=null,s.classList.add(this.main.config.disabled)),s},t}();e.a=s},function(t,e,i){"use strict";function n(t){if(!t)throw new Error("Data must be an array of objects");for(var e=0;e<t.length;e++)if(t[e].hasOwnProperty("label")){if(t[e].hasOwnProperty("options"))for(var i=t[e],n=i.options,e=0;e<n.length;e++)s(n[e])}else{var a=t[e];s(a)}}function s(t){if(!t.text)throw new Error("Data object option must have at least a text")}e.b=n;var a=function(){function t(t){this.contentOpen=!1,this.main=t.main,this.searchValue="",this.data=[],this.filtered=null,this.selected=this.main.config.isMultiple?[]:null,this.parseSelectData(),this.setSelectedFromSelect()}return t.prototype.parseSelectData=function(){this.data=[];for(var t=this.main.select.element,e=t.childNodes,i=0;i<e.length;i++)if("OPTGROUP"===e[i].nodeName){for(var n=e[i],s={label:n.label,options:[]},a=e[i].childNodes,o=0;o<a.length;o++)s.options.push(this.pullOptionData(a[o]));this.data.push(s)}else"OPTION"===e[i].nodeName&&this.data.push(this.pullOptionData(e[i]))},t.prototype.pullOptionData=function(t){return{id:t.dataset.id||String(Math.floor(1e8*Math.random())),value:t.value,text:t.text,innerHTML:t.innerHTML,disabled:t.disabled,data:t.dataset}},t.prototype.setSelectedFromSelect=function(){var t=this.main.select.element.options;if(this.main.config.isMultiple){for(var e=[],i=0;i<t.length;i++){var n=t[i];n.selected&&e.push(this.getObjectFromData(n.value,"value").id)}this.setSelected(e,"id")}else if(-1!==t.selectedIndex){var n=t[t.selectedIndex],s=n.value;this.setSelected(s,"value")}},t.prototype.setSelected=function(t,e){if(void 0===e&&(e="id"),Array.isArray(t)){this.selected=[];for(var i=0;i<t.length;i++)this.selected.push(this.getObjectFromData(t[i],e))}else this.selected=this.getObjectFromData(t,e);this.onDataChange()},t.prototype.addToSelected=function(t,e){if(void 0===e&&(e="id"),this.main.config.isMultiple){this.selected.push(this.getObjectFromData(t,e)),this.onDataChange()}},t.prototype.removeFromSelected=function(t,e){if(void 0===e&&(e="id"),this.main.config.isMultiple){for(var i=this.selected,n=0;n<i.length;n++)String(i[n][e])===String(t)&&i.splice(n,1);this.onDataChange()}},t.prototype.onDataChange=function(){if(this.main.onChange){var t=void 0;if(this.main.config.isMultiple){t=[];for(var e=0;e<this.selected.length;e++)t.push(this.selected[e].value)}else t=this.selected.value;this.main.onChange(t)}},t.prototype.getObjectFromData=function(t,e){void 0===e&&(e="id");for(var i=0;i<this.data.length;i++){if(e in this.data[i]&&String(this.data[i][e])===String(t))return this.data[i];if(this.data[i].hasOwnProperty("options"))for(var n=this.data[i],s=0;s<n.options.length;s++)if(String(n.options[s][e])===String(t))return n.options[s]}return null},t.prototype.search=function(t){if(this.searchValue=t,""===t.trim())return void(this.filtered=null);var e=this.data.slice(0);t=t.trim().toLowerCase();var i=e.map(function(e){if(e.hasOwnProperty("options")){var i=e,n=i.options.filter(function(e){return-1!==e.text.toLowerCase().indexOf(t)});if(0!==n.length){var s=Object.assign({},i);return s.options=n,s}}if(e.hasOwnProperty("text")){if(-1!==e.text.toLowerCase().indexOf(t))return e}return null});this.filtered=i.filter(function(t){return t})},t}();e.a=a},function(t,e,i){"use strict";var n=function(){function t(t){this.element=t.select,this.main=t.main,this.addAttributes(),this.addEventListeners(),this.mutationObserver=this.addMutationObserver()}return t.prototype.setValue=function(){if(this.main.data.selected)if(this.main.config.isMultiple)for(var t=this.main.data.selected,e=this.element.options,i=0;i<e.length;i++){var n=e[i];n.selected=!1;for(var s=0;s<t.length;s++)t[s].value===n.value&&(n.selected=!0)}else{var t=this.main.data.selected;this.element.value=t.value}},t.prototype.addAttributes=function(){this.element.tabIndex=-1,this.element.style.display="none"},t.prototype.addEventListeners=function(){var t=this;this.element.addEventListener("change",function(e){t.main.data.setSelectedFromSelect(),t.main.render()})},t.prototype.addMutationObserver=function(){var t=this,e=new MutationObserver(function(e){t.main.data.parseSelectData(),t.main.data.setSelectedFromSelect(),t.main.render()});return e.observe(this.element,{attributes:!0,childList:!0,characterData:!0}),e},t.prototype.create=function(t){this.element.innerHTML="";for(var e=0;e<t.length;e++)if(t[e].hasOwnProperty("options")){var i=t[e],n=document.createElement("optgroup");n.label=i.label;for(var s=0;s<i.options.length;s++)n.appendChild(this.createOption(i.options[s]));this.element.appendChild(n)}else this.element.appendChild(this.createOption(t[e]))},t.prototype.createOption=function(t){var e=document.createElement("option");return e.value=t.value||t.text,e.innerHTML=t.innerHTML||t.text,t.disabled&&(e.disabled=!0),t.data&&"object"==typeof t.data&&Object.keys(t.data).forEach(function(i){e.setAttribute("data-"+i,t.data[i])}),e},t}();e.a=n},function(t,e,i){i(2),t.exports=i(1)}])});