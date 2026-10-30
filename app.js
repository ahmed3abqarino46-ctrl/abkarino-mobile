const S=window.STORE,ALL=window.PRODUCTS,P=ALL.filter(p=>p.category!="accessories");
const fmt=n=>n.toLocaleString("ar-EG")+" ج.م";
const cond=p=>p.conditionLabel||(p.condition=="new"?"جديد":"مستعمل");
const badge=p=>`<span class="badge ${p.condition}">${cond(p)}</span>`;
const wa=t=>`https://wa.me/${S.whatsapp}?text=${encodeURIComponent(t)}`;
const specLine=p=>[p.color,p.storage,p.ram,p.battery!=null?"بطارية "+p.battery+"%":null].filter(Boolean).join(" · ");
function renderHome(){const fb=document.getElementById("fb"),fc=document.getElementById("fc"),q=document.getElementById("q");
q.value=new URLSearchParams(location.search).get("q")||"";
[...new Set(P.map(p=>p.brand))].forEach(b=>fb.add(new Option(b,b)));
const draw=()=>{const t=q.value.trim().toLowerCase();document.getElementById("grid").innerHTML=P.filter(p=>(!fb.value||p.brand==fb.value)&&(!fc.value||p.condition==fc.value)&&(!t||(p.name+" "+p.brand).toLowerCase().includes(t))).map(p=>`<div class="card"><a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}" loading="lazy"></a><div class="b"><div>${badge(p)}</div><h3>${p.name}</h3><div class="muted">${specLine(p)}</div><div class="price">${fmt(p.price)}</div><a class="btn" href="product.html?id=${p.id}">عرض</a></div></div>`).join("")||"<p>مفيش أجهزة مطابقة</p>"};
fb.onchange=fc.onchange=draw;q.oninput=draw;draw();renderServices()}
function renderProduct(){const id=new URLSearchParams(location.search).get("id"),p=ALL.find(x=>x.id==id),m=document.getElementById("p");
if(!p){m.innerHTML="<p>الجهاز مش موجود. <a href='index.html'>رجوع</a></p>";return}
document.title=p.name+" | "+S.name;
const rows=[["الماركة",p.brand],["اللون",p.color],["المساحة",p.storage],["الرامات",p.ram],["البطارية",p.battery!=null?p.battery+"%":null],["الحالة",cond(p)]].filter(r=>r[1]).map(r=>`<li>${r[0]}: ${r[1]}</li>`).join("")+(p.specs||[]).map(s=>`<li>${s}</li>`).join("");
m.innerHTML=`<div class="gallery"><img id="big" src="${p.images[0]}" alt="${p.name}"><div class="thumbs">${p.images.map(i=>`<img src="${i}" alt="${p.name}" onclick="big.src='${i}'">`).join("")}</div></div>
<h1>${p.name}</h1>${badge(p)}<p class="price">${fmt(p.price)}</p><ul>${rows}</ul><p>${p.description}</p>
<a class="wa" href="${wa(`السلام عليكم، عايز أطلب ${p.name} بسعر ${p.price} جنيه من ${S.name}`)}" target="_blank">اطلب على واتساب</a>`}
function renderServices(){const el=document.getElementById("services");if(!el)return;el.innerHTML=`<h2>خدماتنا</h2><p class="slogan">أقل الأسعار وأحدث التقنيات</p><ul class="svc"><li>صيانة كل الموبايلات: أندرويد وآيفون</li><li>سوفت وير وهارد وير</li><li>تغيير شاشات: إيدج، فلات، وآيفون</li><li>تخصصنا: الشاشات، والأجهزة اللي فنيين تانيين قالوا مالهاش حل</li></ul>`}
function renderContact(){document.getElementById("wa").href=wa(`السلام عليكم، عندي استفسار من موقع ${S.name}`);
tel.href="tel:"+S.phone;tel.textContent=S.phone;addr.textContent=S.address;maps.href=S.maps;hrs.textContent=S.hours;areas.textContent=S.areas;renderServices()}
addEventListener("DOMContentLoaded",()=>{const q=document.getElementById("q");if(q&&!document.getElementById("grid"))q.onkeydown=e=>{if(e.key=="Enter")location="index.html?q="+encodeURIComponent(q.value)}});
function card(p){return `<div class="card"><a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}" loading="lazy"></a><div class="b"><h3>${p.name}</h3><div class="price">${fmt(p.price)}</div><a class="btn" href="product.html?id=${p.id}">عرض</a></div></div>`}
function renderAccessories(){[["internal","الإكسسوارات الداخلية"],["external","الإكسسوار الخارجي"]].forEach(([k,t])=>{const items=ALL.filter(p=>p.category=="accessories"&&p.subcategory==k);
document.getElementById("acc-"+k).innerHTML=items.map(card).join("")||`<div class="empty">قريبًا — هنا هتتعرض ${t}.</div>`;
document.getElementById("wa-"+k).href=wa(`السلام عليكم، عايز أستفسر عن ${t} من ${S.name}`)})}
function renderList(el,kind,label){const items=ALL.filter(p=>kind=="parts"?p.category=="parts":(p.category!="parts"&&p.category!="accessories"&&p.condition=="used"));
document.getElementById(el).innerHTML=items.map(p=>card2(p)).join("")||`<div class="empty">قريبًا — هنا هتتعرض ${label||"الأجهزة"}.</div>`;
const w=document.getElementById("wa-"+el);if(w)w.href=wa(`السلام عليكم، عايز أستفسر عن ${label} من ${S.name}`)}
function card2(p){return `<div class="card"><a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}" loading="lazy"></a><div class="b"><div>${badge(p)}</div><h3>${p.name}</h3><div class="muted">${specLine(p)}</div><div class="price">${fmt(p.price)}</div><a class="btn" href="product.html?id=${p.id}">عرض</a></div></div>`}
document.addEventListener("click",e=>{const b=e.target.closest(".burger");if(b){const o=document.body.classList.toggle("navopen");b.setAttribute("aria-expanded",o);return}
const d=e.target.closest(".ddbtn");document.querySelectorAll(".dd.open").forEach(x=>{if(!d||x!=d.parentElement){x.classList.remove("open");x.querySelector(".ddbtn").setAttribute("aria-expanded","false")}});
if(d){const o=d.parentElement.classList.toggle("open");d.setAttribute("aria-expanded",o)}});
