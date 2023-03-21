(()=>{var e={497:e=>{function t(e,t){let n=t;return e.forEach((e=>{n=n.replace(e,"")})),n}e.exports=function({length:e=20,useLetters:n=!0,useNumbers:o=!0,includeSymbols:r=[],excludeSymbols:c=[]}={}){let i="abcdefghijklmnopqrstuvwxyz",s="0123456789",a=[],l=[],d=[];return n&&(c.length&&(i=t(c,i)),l=i.split("")),o&&(c.length&&(s=t(c,s)),d=s.split("")),a=[...l,...d,...r],function(e,t){let n="";for(let r=0;r<t;r+=1)n+=e[(o=e.length,Math.floor(Math.random()*o).toString())];var o;return n}(a,e)}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";class e{constructor(e,t,n=""){this.id=e,this.title=t,this.description=n,this.items=[]}}var t=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,o=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,r=/[^-+\dA-Z]/g;var c={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},i={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).padStart(t,"0")},a=function(e){var t=e.y,n=e.m,o=e.d,r=e._,c=e.dayName,i=e.short,s=void 0!==i&&i,a=new Date,l=new Date;l.setDate(l[r+"Date"]()-1);var d=new Date;return d.setDate(d[r+"Date"]()+1),a[r+"FullYear"]()===t&&a[r+"Month"]()===n&&a[r+"Date"]()===o?s?"Tdy":"Today":l[r+"FullYear"]()===t&&l[r+"Month"]()===n&&l[r+"Date"]()===o?s?"Ysd":"Yesterday":d[r+"FullYear"]()===t&&d[r+"Month"]()===n&&d[r+"Date"]()===o?s?"Tmw":"Tomorrow":c},l=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var o=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-o);var r=(t-n)/6048e5;return 1+Math.floor(r)},d=function(e){var t=e.getDay();return 0===t&&(t=7),t},u=function(e){return(String(e).match(o)||[""]).pop().replace(r,"").replace(/GMT\+0000/g,"UTC")};function m(e){const n=function(e){const n=document.createElement("div");n.classList.add("item");const o=document.createElement("img");o.src="../assets/checkbox-blank-outline-custom.png",o.classList.add("unchecked"),function(e,t,n){e.addEventListener("mouseover",(()=>{e.classList.contains("checked")||(e.src="../assets/checkbox-intermediate-variant-custom.png")})),e.addEventListener("mouseout",(()=>{e.classList.contains("checked")||(e.src="../assets/checkbox-blank-outline-custom.png")})),e.addEventListener("click",(o=>{o.stopPropagation(),e.src="../assets/checkbox-marked-custom.png",e.classList.add("checked"),console.log(`Marking "${t.title}" as completed...`),n.remove(),p(t);let r=localStorage.getItem("completed-items");r?(r=r+=`${t.id},`,localStorage.setItem("completed-items",r)):localStorage.setItem("completed-items",`${t.id},`)}))}(o,e,n);const r=document.createElement("h3");r.textContent=e.title,r.classList.add("title"),r.style.display="block";const m=document.createElement("h4");m.textContent=e.description,m.style.fontStyle="italic",m.style.fontWeight="normal",m.classList.add("desc"),m.style.display="none";const y=document.createElement("h4");y.textContent=function(e,n,o,r){if(1!==arguments.length||"string"!=typeof e||/\d/.test(e)||(n=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var m=(n=String(c[n]||n||c.default)).slice(0,4);"UTC:"!==m&&"GMT:"!==m||(n=n.slice(4),o=!0,"GMT:"===m&&(r=!0));var p=function(){return o?"getUTC":"get"},y=function(){return e[p()+"Date"]()},g=function(){return e[p()+"Day"]()},f=function(){return e[p()+"Month"]()},h=function(){return e[p()+"FullYear"]()},S=function(){return e[p()+"Hours"]()},v=function(){return e[p()+"Minutes"]()},M=function(){return e[p()+"Seconds"]()},D=function(){return e[p()+"Milliseconds"]()},w=function(){return o?0:e.getTimezoneOffset()},C=function(){return l(e)},E={d:function(){return y()},dd:function(){return s(y())},ddd:function(){return i.dayNames[g()]},DDD:function(){return a({y:h(),m:f(),d:y(),_:p(),dayName:i.dayNames[g()],short:!0})},dddd:function(){return i.dayNames[g()+7]},DDDD:function(){return a({y:h(),m:f(),d:y(),_:p(),dayName:i.dayNames[g()+7]})},m:function(){return f()+1},mm:function(){return s(f()+1)},mmm:function(){return i.monthNames[f()]},mmmm:function(){return i.monthNames[f()+12]},yy:function(){return String(h()).slice(2)},yyyy:function(){return s(h(),4)},h:function(){return S()%12||12},hh:function(){return s(S()%12||12)},H:function(){return S()},HH:function(){return s(S())},M:function(){return v()},MM:function(){return s(v())},s:function(){return M()},ss:function(){return s(M())},l:function(){return s(D(),3)},L:function(){return s(Math.floor(D()/10))},t:function(){return S()<12?i.timeNames[0]:i.timeNames[1]},tt:function(){return S()<12?i.timeNames[2]:i.timeNames[3]},T:function(){return S()<12?i.timeNames[4]:i.timeNames[5]},TT:function(){return S()<12?i.timeNames[6]:i.timeNames[7]},Z:function(){return r?"GMT":o?"UTC":u(e)},o:function(){return(w()>0?"-":"+")+s(100*Math.floor(Math.abs(w())/60)+Math.abs(w())%60,4)},p:function(){return(w()>0?"-":"+")+s(Math.floor(Math.abs(w())/60),2)+":"+s(Math.floor(Math.abs(w())%60),2)},S:function(){return["th","st","nd","rd"][y()%10>3?0:(y()%100-y()%10!=10)*y()%10]},W:function(){return C()},WW:function(){return s(C())},N:function(){return d(e)}};return n.replace(t,(function(e){return e in E?E[e]():e.slice(1,e.length-1)}))}(new Date(e.dueDate),"mm/dd/yy, h:MM TT"),y.style.fontWeight="normal",y.classList.add("dueDate"),y.style.display="block";const g=document.createElement("h4");g.textContent=`Priority level: ${e.priority}`,g.style.fontWeight="normal",g.classList.add("priority"),g.style.display="none";const f=document.createElement("img");f.src="../assets/pencil-outline-dark.png",f.classList.add("edit"),function(e,t,n){e.addEventListener("mouseover",(t=>{t.stopPropagation(),e.src="../assets/pencil-outline-white.png"})),e.addEventListener("mouseout",(t=>{t.stopPropagation(),e.src="../assets/pencil-outline-dark.png"})),e.addEventListener("click",(e=>{e.stopPropagation(),console.log(`Editing item "${t.title}"...`)}))}(f,e);const h=document.createElement("img");return h.src="../assets/trash-can-dark.png",h.classList.add("remove"),function(e,t,n){e.addEventListener("mouseover",(t=>{t.stopPropagation(),e.src="../assets/trash-can-white.png"})),e.addEventListener("mouseout",(t=>{t.stopPropagation(),e.src="../assets/trash-can-dark.png"})),e.addEventListener("click",(e=>{e.stopPropagation(),console.log(`Removing item "${t.title}"...`),n.remove(),localStorage.removeItem(t.id),p(t)}))}(h,e,n),n.appendChild(o),n.appendChild(r),n.appendChild(m),n.appendChild(y),n.appendChild(g),n.appendChild(f),n.appendChild(h),n}(e);return n.addEventListener("click",(()=>{console.log(`Item "${e.title}" was clicked`),localStorage.setItem("current-active-item",e.id);const t=document.querySelectorAll(".item");for(const e of t)e!=n&&(e.style.color="#5e5e5e",e.children[2].style.display="none",e.children[4].style.display="none");const o=n.children[2];o.style.display="none"==o.style.display?"block":"none",o.style.color="#5e5e5e";const r=n.children[4];switch(r.style.display="none"==r.style.display?"block":"none",e.priority){case 1:case"1":r.style.color="green";break;case 2:case"2":r.style.color="yellow";break;case 3:case"3":r.style.color="red"}})),n.addEventListener("mouseover",(()=>{e.id!=localStorage.getItem("current-active-item")&&(n.style.color="white"==n.style.color?"#5e5e5e":"white")})),n.addEventListener("mouseout",(()=>{e.id!=localStorage.getItem("current-active-item")&&(n.style.color="#5e5e5e"==n.style.color?"white":"#5e5e5e")})),n}function p(e){const t=localStorage.getItem("main-project-id"),n=JSON.parse(localStorage.getItem(t));n.items.splice(n.items.indexOf(e.id),1),localStorage.setItem(t,JSON.stringify(n))}function y(e){const t=function(e){const t=document.createElement("div");t.classList.add("project");const n=document.createElement("h3");return n.textContent=e.title,n.classList.add("title"),t.appendChild(n),e.id==localStorage.getItem("main-project-id")&&(t.style.color="white"),t}(e);return t.addEventListener("click",(()=>{if(localStorage.getItem("main-project-id")==e.id)return console.log(`The same project was selected. (${e.title})`);console.log(`Project "${e.title}" was selected`),localStorage.setItem("main-project-id",e.id);const n=document.querySelectorAll(".project");for(const e of n)e!=t&&(e.style.color="#5e5e5e");t.style.color="white",document.querySelector("#main-project > h2").textContent=e.title,document.querySelector("#main-project > p").textContent=e.description;const o=document.querySelector("div#todo-items");for(;o.firstChild;)o.removeChild(o.firstChild);const r=JSON.parse(localStorage.getItem(e.id)).items;for(const e of r){if(console.log("current item: ",e),!e)continue;const t=JSON.parse(localStorage.getItem(e));console.log(t),o.appendChild(m(t))}})),t.addEventListener("mouseover",(()=>{localStorage.getItem("main-project-id")!=e.id&&(t.style.color="white"==t.style.color?"#5e5e5e":"white")})),t.addEventListener("mouseout",(()=>{localStorage.getItem("main-project-id")!=e.id&&(t.style.color="#5e5e5e"==t.style.color?"white":"#5e5e5e")})),t}const g=document.querySelector("div#projects"),f=document.querySelector("form#new-project");function h(){console.log("newProjectButton click"),f.style.display?f.removeAttribute("style"):f.style.display="flex"}var S=n(497),v=n.n(S);class M{constructor(e,t,n="",o=new Date,r=1){this.id=e,this.title=t,this.description=n,this.dueDate=o||new Date,this.priority=r||1}}const D=document.querySelector("div#default");function w(){console.log("newItemButton click");const e=document.querySelector("form#new-item");e.style.display?e.removeAttribute("style"):e.style.display="flex"}const C=n(497);!function(){const e=document.querySelector("div#header"),t=document.createElement("h1");t.textContent="Todo List",e.appendChild(t)}(),function(){const t=function(){let t=localStorage.getItem("main-project-id");if(!t){t=`project-${v()()}`,localStorage.setItem("main-project-id",t);const n=new e(t,"Default Project","This is your default project");localStorage.setItem(t,JSON.stringify(n));let o=localStorage.getItem("user-projects")||"";o+=`${t},`,localStorage.setItem("user-projects",o)}return console.log(`Main project id: ${t}`),JSON.parse(localStorage.getItem(t))}();!function(){const e=document.querySelector("form#new-item"),t=localStorage.getItem("main-project-id"),n=JSON.parse(localStorage.getItem(t)),o=document.createElement("div");o.setAttribute("id","main-project");const r=document.createElement("h2");r.textContent=n.title,o.appendChild(r);const c=document.createElement("p");c.textContent=n.description;const i=document.createElement("button");i.id="new-item",i.textContent="New",i.addEventListener("click",w),o.appendChild(c),o.appendChild(i),D.insertBefore(o,e)}(),function(e){const t=document.createElement("div");t.setAttribute("id","todo-items"),D.appendChild(t);for(const n of e.items){const e=JSON.parse(localStorage.getItem(n));t.appendChild(m(new M(e.id,e.title,e.description,e.dueDate,e.priority)))}}(t)}(),function(){!function(){const e=document.createElement("div");e.setAttribute("id","projects-header");const t=document.createElement("h2");t.textContent="My Projects",e.appendChild(t);const n=document.createElement("button");n.id="new-project",n.textContent="New",n.addEventListener("click",h),e.appendChild(n),g.insertBefore(e,f)}();const t=document.createElement("div");t.id="projects-list",g.appendChild(t);const n=localStorage.getItem("user-projects").split(",");for(const o of n){if(!o)continue;const n=JSON.parse(localStorage.getItem(o));t.appendChild(y(new e(n.id,n.title,n.description)))}}(),function(){const e=document.querySelector("div#completed"),t=document.createElement("h2");t.textContent="Completed",e.appendChild(t);let n=localStorage.getItem("completed-items");const o=document.createElement("h3");o.textContent=function(e){let t,n=0;if(e){e=e.split(",");for(const t of e)t&&(n+=1);t=`${n} items`}else t="0 items";return t}(n),o.style.paddingLeft="8px",o.addEventListener("click",(()=>{console.log("Showing completed items...",n);for(const e of n)e&&console.log(`Found a completed item: ${e}`)})),e.appendChild(o)}(),function(){const t=document.querySelector("div#projects-list"),n=document.querySelector("form#new-project");n.addEventListener("submit",(o=>{o.preventDefault();const r=[...new FormData(o.target).entries()],c=`project-${C()}`,i=new e(c,r[0][1],r[1][1]);console.log("Created a new project: ",i),localStorage.setItem(c,JSON.stringify(i));const s=localStorage.getItem("user-projects")+`${c},`;localStorage.setItem("user-projects",s);const a=y(i);t.appendChild(a),a.click(),console.log("Local storage after adding project: ",localStorage),n.reset(),n.removeAttribute("style")}))}(),function(){const e=document.querySelector("div#todo-items"),t=document.querySelector("form#new-item");t.addEventListener("submit",(n=>{n.preventDefault();const o=[...new FormData(n.target).entries()],r=`item-${C()}`,c=new M(r,o[0][1],o[1][1],o[2][1],o[3][1]);console.log("Created a new todo item: ",c);const i=localStorage.getItem("main-project-id"),s=JSON.parse(localStorage.getItem(i));s.items.push(r),localStorage.setItem(i,JSON.stringify(s)),localStorage.setItem(r,JSON.stringify(c));const a=m(c);e.appendChild(a),a.click(),console.log("Local storage after adding item: ",localStorage),t.reset(),t.removeAttribute("style")}))}()})()})();