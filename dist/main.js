(()=>{var e={497:e=>{function t(e,t){let n=t;return e.forEach((e=>{n=n.replace(e,"")})),n}e.exports=function({length:e=20,useLetters:n=!0,useNumbers:o=!0,includeSymbols:r=[],excludeSymbols:i=[]}={}){let a="abcdefghijklmnopqrstuvwxyz",c="0123456789",s=[],l=[],d=[];return n&&(i.length&&(a=t(i,a)),l=a.split("")),o&&(i.length&&(c=t(i,c)),d=c.split("")),s=[...l,...d,...r],function(e,t){let n="";for(let r=0;r<t;r+=1)n+=e[(o=e.length,Math.floor(Math.random()*o).toString())];var o;return n}(s,e)}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";class e{constructor(e,t,n=""){this.id=e,this.title=t,this.description=n,this.items=[]}}var t=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,o=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,r=/[^-+\dA-Z]/g;var i={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},a={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).padStart(t,"0")},s=function(e){var t=e.y,n=e.m,o=e.d,r=e._,i=e.dayName,a=e.short,c=void 0!==a&&a,s=new Date,l=new Date;l.setDate(l[r+"Date"]()-1);var d=new Date;return d.setDate(d[r+"Date"]()+1),s[r+"FullYear"]()===t&&s[r+"Month"]()===n&&s[r+"Date"]()===o?c?"Tdy":"Today":l[r+"FullYear"]()===t&&l[r+"Month"]()===n&&l[r+"Date"]()===o?c?"Ysd":"Yesterday":d[r+"FullYear"]()===t&&d[r+"Month"]()===n&&d[r+"Date"]()===o?c?"Tmw":"Tomorrow":i},l=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var o=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-o);var r=(t-n)/6048e5;return 1+Math.floor(r)},d=function(e){var t=e.getDay();return 0===t&&(t=7),t},u=function(e){return(String(e).match(o)||[""]).pop().replace(r,"").replace(/GMT\+0000/g,"UTC")};function m(e){const n=function(e){const n=document.createElement("div");n.classList.add("item");const o=document.createElement("h3");o.textContent=e.title,o.classList.add("title"),o.style.display="block";const r=document.createElement("h4");r.textContent=e.description,r.style.fontStyle="italic",r.style.fontWeight="normal",r.classList.add("desc"),r.style.display="none";const m=document.createElement("h4");m.textContent=function(e,n,o,r){if(1!==arguments.length||"string"!=typeof e||/\d/.test(e)||(n=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var m=(n=String(i[n]||n||i.default)).slice(0,4);"UTC:"!==m&&"GMT:"!==m||(n=n.slice(4),o=!0,"GMT:"===m&&(r=!0));var y=function(){return o?"getUTC":"get"},p=function(){return e[y()+"Date"]()},f=function(){return e[y()+"Day"]()},h=function(){return e[y()+"Month"]()},g=function(){return e[y()+"FullYear"]()},S=function(){return e[y()+"Hours"]()},v=function(){return e[y()+"Minutes"]()},D=function(){return e[y()+"Seconds"]()},M=function(){return e[y()+"Milliseconds"]()},T=function(){return o?0:e.getTimezoneOffset()},w=function(){return l(e)},C={d:function(){return p()},dd:function(){return c(p())},ddd:function(){return a.dayNames[f()]},DDD:function(){return s({y:g(),m:h(),d:p(),_:y(),dayName:a.dayNames[f()],short:!0})},dddd:function(){return a.dayNames[f()+7]},DDDD:function(){return s({y:g(),m:h(),d:p(),_:y(),dayName:a.dayNames[f()+7]})},m:function(){return h()+1},mm:function(){return c(h()+1)},mmm:function(){return a.monthNames[h()]},mmmm:function(){return a.monthNames[h()+12]},yy:function(){return String(g()).slice(2)},yyyy:function(){return c(g(),4)},h:function(){return S()%12||12},hh:function(){return c(S()%12||12)},H:function(){return S()},HH:function(){return c(S())},M:function(){return v()},MM:function(){return c(v())},s:function(){return D()},ss:function(){return c(D())},l:function(){return c(M(),3)},L:function(){return c(Math.floor(M()/10))},t:function(){return S()<12?a.timeNames[0]:a.timeNames[1]},tt:function(){return S()<12?a.timeNames[2]:a.timeNames[3]},T:function(){return S()<12?a.timeNames[4]:a.timeNames[5]},TT:function(){return S()<12?a.timeNames[6]:a.timeNames[7]},Z:function(){return r?"GMT":o?"UTC":u(e)},o:function(){return(T()>0?"-":"+")+c(100*Math.floor(Math.abs(T())/60)+Math.abs(T())%60,4)},p:function(){return(T()>0?"-":"+")+c(Math.floor(Math.abs(T())/60),2)+":"+c(Math.floor(Math.abs(T())%60),2)},S:function(){return["th","st","nd","rd"][p()%10>3?0:(p()%100-p()%10!=10)*p()%10]},W:function(){return w()},WW:function(){return c(w())},N:function(){return d(e)}};return n.replace(t,(function(e){return e in C?C[e]():e.slice(1,e.length-1)}))}(new Date(e.dueDate),"mm/dd/yy, h:MM TT"),m.style.fontWeight="normal",m.classList.add("dueDate"),m.style.display="block";const y=document.createElement("h4");return y.textContent=`Priority level: ${e.priority}`,y.style.fontWeight="normal",y.classList.add("priority"),y.style.display="none",n.appendChild(o),n.appendChild(r),n.appendChild(m),n.appendChild(y),n}(e);return n.addEventListener("click",(()=>{console.log(`Item "${e.title}" was clicked`);const t=document.querySelectorAll(".item");for(const e of t)e!=n&&(e.style.color="#5e5e5e",e.children[1].style.display="none",e.children[3].style.display="none");n.style.color="white"==n.style.color?"#5e5e5e":"white";const o=n.children[1];o.style.display="none"==o.style.display?"block":"none";const r=n.children[3];r.style.display="none"==r.style.display?"block":"none"})),n}function y(e){const t=function(e){const t=document.createElement("div");t.classList.add("project");const n=document.createElement("h3");return n.textContent=e.title,n.classList.add("title"),t.appendChild(n),e.id==localStorage.getItem("main-project-id")&&(t.style.color="white"),t}(e);return t.addEventListener("click",(()=>{if(localStorage.getItem("main-project-id")==e.id)return console.log(`The same project was selected. (${e.title})`);console.log(`Project "${e.title}" was selected`),localStorage.setItem("main-project-id",e.id);const n=document.querySelectorAll(".project");for(const e of n)e!=t&&(e.style.color="#5e5e5e");t.style.color="white",document.querySelector("#main-project > h2").textContent=e.title,document.querySelector("#main-project > p").textContent=e.description;const o=document.querySelector("div#todo-items");for(;o.firstChild;)o.removeChild(o.firstChild);const r=JSON.parse(localStorage.getItem(e.id)).items;console.log(r);for(let e of r)e&&(e=JSON.parse(e),o.appendChild(m(e)))})),t.addEventListener("mouseover",(()=>{localStorage.getItem("main-project-id")!=e.id&&(t.style.color="white"==t.style.color?"#5e5e5e":"white")})),t.addEventListener("mouseout",(()=>{localStorage.getItem("main-project-id")!=e.id&&(t.style.color="#5e5e5e"==t.style.color?"white":"#5e5e5e")})),t}const p=document.querySelector("div#projects"),f=document.querySelector("form#new-project");function h(){console.log("newProjectButton click"),f.style.display?f.removeAttribute("style"):f.style.display="flex"}var g=n(497),S=n.n(g);class v{constructor(e,t,n="",o=new Date,r=1){this.id=e,this.title=t,this.description=n,this.dueDate=o||new Date,this.priority=r||1}}const D=document.querySelector("div#default");function M(){console.log("newItemButton click");const e=document.querySelector("form#new-item");e.style.display?e.removeAttribute("style"):e.style.display="flex"}const T=n(497);!function(){const e=document.querySelector("div#header"),t=document.createElement("h1");t.textContent="Todo List",e.appendChild(t)}(),function(){const t=function(){let t=localStorage.getItem("main-project-id");if(!t){t=`project-${S()()}`,localStorage.setItem("main-project-id",t);const n=new e(t,"Default Project","This is your default project");localStorage.setItem(t,JSON.stringify(n));let o=localStorage.getItem("user-projects")||"";o+=`${t},`,localStorage.setItem("user-projects",o)}return console.log(`Main project id: ${t}`),JSON.parse(localStorage.getItem(t))}();!function(){const e=document.querySelector("form#new-item"),t=localStorage.getItem("main-project-id"),n=JSON.parse(localStorage.getItem(t)),o=document.createElement("div");o.setAttribute("id","main-project");const r=document.createElement("h2");r.textContent=n.title,o.appendChild(r);const i=document.createElement("p");i.textContent=n.description;const a=document.createElement("button");a.id="new-item",a.textContent="New",a.addEventListener("click",M),o.appendChild(i),o.appendChild(a),D.insertBefore(o,e)}(),function(e){const t=document.createElement("div");t.setAttribute("id","todo-items"),D.appendChild(t);for(let n of e.items)n=JSON.parse(n),t.appendChild(m(new v(n.id,n.title,n.description,n.dueDate,n.priority)))}(t)}(),function(){!function(){const e=document.createElement("div");e.setAttribute("id","projects-header");const t=document.createElement("h2");t.textContent="My Projects",e.appendChild(t);const n=document.createElement("button");n.id="new-project",n.textContent="New",n.addEventListener("click",h),e.appendChild(n),p.insertBefore(e,f)}();const t=document.createElement("div");t.id="projects-list",p.appendChild(t);const n=localStorage.getItem("user-projects").split(",");for(const o of n){if(!o)continue;const n=JSON.parse(localStorage.getItem(o));t.appendChild(y(new e(n.id,n.title,n.description)))}}(),function(){const t=document.querySelector("div#projects-list"),n=document.querySelector("form#new-project");n.addEventListener("submit",(o=>{o.preventDefault();const r=[...new FormData(o.target).entries()],i=`project-${T()}`,a=new e(i,r[0][1],r[1][1]);console.log("Created a new project: ",a),localStorage.setItem(i,JSON.stringify(a));const c=localStorage.getItem("user-projects")+`${i},`;localStorage.setItem("user-projects",c),t.appendChild(y(a)),console.log("Local storage after adding project: ",localStorage),n.reset(),n.removeAttribute("style")}))}(),function(){const e=document.querySelector("div#todo-items"),t=document.querySelector("form#new-item");t.addEventListener("submit",(n=>{n.preventDefault();const o=[...new FormData(n.target).entries()],r=`item-${T()}`,i=new v(r,o[0][1],o[1][1],o[2][1],o[3][1]);console.log("Created a new todo item: ",i);const a=localStorage.getItem("main-project-id"),c=JSON.parse(localStorage.getItem(a));c.items.push(JSON.stringify(i)),localStorage.setItem(a,JSON.stringify(c)),e.appendChild(m(i)),console.log("Local storage after adding item: ",localStorage),t.reset(),t.removeAttribute("style")}))}()})()})();