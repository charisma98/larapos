var popoverTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')),popoverList=popoverTriggerList.map(function(e){return new bootstrap.Popover(e)}),tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map(function(e){return new bootstrap.Tooltip(e)});function setAttributes(t,o){Object.keys(o).forEach(function(e){t.setAttribute(e,o[e])})}var popoverList=(popoverTriggerList=[].slice.call(document.querySelectorAll('[data-toggle="popover"]'))).map(function(e){return new bootstrap.Popover(e)}),tooltipList=(tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))).map(function(e){return new bootstrap.Tooltip(e)}),total=document.querySelectorAll(".nav-pills");function getEventTarget(e){return(e=e||window.event).target||e.srcElement}function copyCode(e){const t=window.getSelection(),o=document.createRange();var l=e.nextElementSibling;o.selectNodeContents(l),t.removeAllRanges(),t.addRange(o);var n;document.execCommand("copy");window.getSelection().removeAllRanges(),e.parentElement.querySelector(".alert")||((n=document.createElement("div")).classList.add("alert","alert-success","position-absolute","top-0","border-0","text-white","w-25","end-0","start-0","mt-2","mx-auto","py-2"),n.style.transform="translate3d(0px, 0px, 0px)",n.style.opacity="0",n.style.transition=".35s ease",setTimeout(function(){n.style.transform="translate3d(0px, 20px, 0px)",n.style.setProperty("opacity","1","important")},100),n.innerHTML="Code successfully copied!",e.parentElement.appendChild(n),setTimeout(function(){n.style.transform="translate3d(0px, 0px, 0px)",n.style.setProperty("opacity","0","important")},2e3),setTimeout(function(){e.parentElement.querySelector(".alert").remove()},2500))}function debounce(o,l,n){var i;return function(){var e=this,t=arguments;clearTimeout(i),i=setTimeout(function(){i=null,n||o.apply(e,t)},l),n&&!i&&o.apply(e,t)}}total.forEach(function(i,e){var r=document.createElement("div"),t=i.querySelector("li:first-child .nav-link").cloneNode();t.innerHTML="-",r.classList.add("moving-tab","position-absolute","nav-link"),r.appendChild(t),i.appendChild(r);i.getElementsByTagName("li").length;r.style.padding="0px",r.style.width=i.querySelector("li:nth-child(1)").offsetWidth+"px",r.style.transform="translate3d(0px, 0px, 0px)",r.style.transition=".5s ease",i.onmouseover=function(e){let t=getEventTarget(e),l=t.closest("li");if(l){let o=Array.from(l.closest("ul").children);var n=o.indexOf(l)+1;i.querySelector("li:nth-child("+n+") .nav-link").onclick=function(){r=i.querySelector(".moving-tab");let e=0;if(i.classList.contains("flex-column")){for(var t=1;t<=o.indexOf(l);t++)e+=i.querySelector("li:nth-child("+t+")").offsetHeight;r.style.transform="translate3d(0px,"+e+"px, 0px)",r.style.height=i.querySelector("li:nth-child("+t+")").offsetHeight}else{for(t=1;t<=o.indexOf(l);t++)e+=i.querySelector("li:nth-child("+t+")").offsetWidth;r.style.transform="translate3d("+e+"px, 0px, 0px)",r.style.width=i.querySelector("li:nth-child("+n+")").offsetWidth+"px"}}}}}),window.addEventListener("resize",function(e){total.forEach(function(o,e){o.querySelector(".moving-tab").remove();var l=document.createElement("div"),n=o.querySelector(".nav-link.active").cloneNode();n.innerHTML="-",l.classList.add("moving-tab","position-absolute","nav-link"),l.appendChild(n),o.appendChild(l),l.style.padding="0px",l.style.transition=".5s ease";let i=o.querySelector(".nav-link.active").parentElement;if(i){let e=Array.from(i.closest("ul").children);n=e.indexOf(i)+1;let t=0;if(o.classList.contains("flex-column")){for(var r=1;r<=e.indexOf(i);r++)t+=o.querySelector("li:nth-child("+r+")").offsetHeight;l.style.transform="translate3d(0px,"+t+"px, 0px)",l.style.width=o.querySelector("li:nth-child("+n+")").offsetWidth+"px",l.style.height=o.querySelector("li:nth-child("+r+")").offsetHeight}else{for(r=1;r<=e.indexOf(i);r++)t+=o.querySelector("li:nth-child("+r+")").offsetWidth;l.style.transform="translate3d("+t+"px, 0px, 0px)",l.style.width=o.querySelector("li:nth-child("+n+")").offsetWidth+"px"}}}),window.innerWidth<991?total.forEach(function(e,t){e.classList.contains("flex-column")||e.classList.add("flex-column","on-resize")}):total.forEach(function(e,t){e.classList.contains("on-resize")&&e.classList.remove("flex-column","on-resize")})});
//# sourceMappingURL=_site_kit_free/assets/js/kit-free.js.map