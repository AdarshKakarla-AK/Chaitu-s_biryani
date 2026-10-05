/* Chaitu's Biryani — menu data = restaurant-provided source of truth.
   Prices with null = "price to be confirmed". Never render a guessed price. */
const MENU = [
 // Non-Veg Starters
 {cat:"Non-Veg Starters",name:"Chicken Drumstick Masala",price:240,diet:"nonveg",tags:["chicken","spicy"],desc:"Masala-tossed drumsticks."},
 {cat:"Non-Veg Starters",name:"Chicken Lollipop Masala",price:240,diet:"nonveg",tags:["chicken"],desc:"Crowd favourite format, masala style."},
 {cat:"Non-Veg Starters",name:"Chicken Kheema Balls",price:280,diet:"nonveg",tags:["chicken","family"],desc:"Minced-chicken balls, crisp outside."},
 {cat:"Non-Veg Starters",name:"Chicken Kabab — Boneless",price:280,diet:"nonveg",tags:["chicken"],desc:"Boneless kabab cubes."},
 {cat:"Non-Veg Starters",name:"Chicken Kabab — Bone",price:220,diet:"nonveg",tags:["chicken","quick"],desc:"Classic bone-in kabab."},
 {cat:"Non-Veg Starters",name:"Chicken Lollipop Fry",price:220,diet:"nonveg",tags:["chicken","quick","family"],desc:"Crisp fried lollipops — shareable."},
 {cat:"Non-Veg Starters",name:"Chicken Pepper Dry",price:220,diet:"nonveg",tags:["chicken","spicy"],desc:"Pepper-forward dry toss."},
 {cat:"Non-Veg Starters",name:"Lemon Chicken",price:220,diet:"nonveg",tags:["chicken"],desc:"Tangy lemon finish."},
 {cat:"Non-Veg Starters",name:"Chicken Wings — Nati Style",price:220,diet:"nonveg",tags:["chicken","nati","spicy"],desc:"Nati-style preparation."},
 {cat:"Non-Veg Starters",name:"Mutton Kheema Balls",price:360,diet:"nonveg",tags:["mutton"],desc:"Minced-mutton balls."},
 {cat:"Non-Veg Starters",name:"Galouti Kabab — Mutton",price:360,diet:"nonveg",tags:["mutton"],desc:"Soft galouti-style kabab."},
 {cat:"Non-Veg Starters",name:"Mutton Nalli Masala — 2 pc (Fri–Sun)",price:360,diet:"nonveg",tags:["mutton","weekend"],desc:"Weekend-only. Confirm availability."},
 {cat:"Non-Veg Starters",name:"Mutton Pepper Dry",price:300,diet:"nonveg",tags:["mutton","spicy"],desc:"Pepper dry, mutton."},
 {cat:"Non-Veg Starters",name:"Mutton Chops Nati Style (Fri–Sun)",price:300,diet:"nonveg",tags:["mutton","nati","weekend"],desc:"Weekend-only Nati-style chops."},
 {cat:"Non-Veg Starters",name:"Mutton Liver Fry",price:240,diet:"nonveg",tags:["mutton"],desc:"Liver fry preparation."},
 {cat:"Non-Veg Starters",name:"Egg 65",price:180,diet:"nonveg",tags:["egg","quick","spicy"],desc:"Classic 65 masala, egg."},
 {cat:"Non-Veg Starters",name:"Egg Pepper Dry",price:180,diet:"nonveg",tags:["egg","spicy","quick"],desc:"Pepper dry, egg."},
 // Non-Veg Biryani
 {cat:"Non-Veg Biryani",name:"Chicken Dum Biryani",price:280,diet:"nonveg",tags:["biryani","chicken"],desc:"Slow-steamed dum biryani.",feat:1,img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=700&auto=format&fit=crop"},
 {cat:"Non-Veg Biryani",name:"Donne Chicken Biryani",price:280,diet:"nonveg",tags:["biryani","chicken","donne"],desc:"Karnataka donne-style serving.",feat:1,img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=700&auto=format&fit=crop"},
 {cat:"Non-Veg Biryani",name:"Mutton Dum Biryani",price:400,diet:"nonveg",tags:["biryani","mutton"],desc:"Dum-steamed mutton biryani.",feat:1,img:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=700&auto=format&fit=crop"},
 {cat:"Non-Veg Biryani",name:"Donne Mutton Biryani",price:400,diet:"nonveg",tags:["biryani","mutton","donne"],desc:"Donne-style mutton biryani.",feat:1},
 {cat:"Non-Veg Biryani",name:"Egg Dum Biryani",price:200,diet:"nonveg",tags:["biryani","egg","quick"],desc:"Value biryani pick.",feat:1},
 {cat:"Non-Veg Biryani",name:"CB Special Fried Chicken Biryani",price:400,diet:"nonveg",tags:["biryani","chicken","special"],desc:"House special with fried chicken.",feat:1,img:"https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=700&auto=format&fit=crop"},
 {cat:"Non-Veg Biryani",name:"Fish Biryani — Tunna / Basa",price:400,diet:"nonveg",tags:["biryani","seafood"],desc:"Fish varies — Tunna / Basa as available."},
 {cat:"Non-Veg Biryani",name:"Prawns Biryani",price:400,diet:"nonveg",tags:["biryani","seafood"],desc:"Prawns biryani."},
 {cat:"Non-Veg Biryani",name:"Nalli Gosht Mutton Biryani",price:400,diet:"nonveg",tags:["biryani","mutton"],desc:"Nalli gosht-style mutton biryani.",feat:1},
 // Non-Veg Curries
 {cat:"Non-Veg Curries",name:"Chicken Curry",price:240,diet:"nonveg",tags:["chicken","curry","family"],desc:"Everyday chicken curry."},
 {cat:"Non-Veg Curries",name:"Andhra Chilli Chicken",price:240,diet:"nonveg",tags:["chicken","spicy","curry"],desc:"Andhra heat."},
 {cat:"Non-Veg Curries",name:"Methi Chicken — Fenugreek",price:240,diet:"nonveg",tags:["chicken","curry"],desc:"Fenugreek-led curry."},
 {cat:"Non-Veg Curries",name:"Gongura Chicken — Roselle",price:240,diet:"nonveg",tags:["chicken","curry"],desc:"Roselle (gongura) tang."},
 {cat:"Non-Veg Curries",name:"Mutton Curry",price:280,diet:"nonveg",tags:["mutton","curry","family"],desc:"Everyday mutton curry."},
 {cat:"Non-Veg Curries",name:"Methi Mutton",price:280,diet:"nonveg",tags:["mutton","curry"],desc:"Fenugreek + mutton."},
 {cat:"Non-Veg Curries",name:"Gongura Mutton — Roselle",price:280,diet:"nonveg",tags:["mutton","curry"],desc:"Roselle + mutton."},
 {cat:"Non-Veg Curries",name:"Mutton Liver Curry",price:240,diet:"nonveg",tags:["mutton","curry"],desc:"Liver curry."},
 {cat:"Non-Veg Curries",name:"Mutton Leg (Paya) Soup",price:220,diet:"nonveg",tags:["mutton","soup"],desc:"Warming paya soup."},
 {cat:"Non-Veg Curries",name:"Mutton Kheema Pav — with 2 buns",price:280,diet:"nonveg",tags:["mutton","quick"],desc:"Served with 2 buns."},
 {cat:"Non-Veg Curries",name:"Egg Bhurji Pav — with 2 buns",price:160,diet:"nonveg",tags:["egg","quick"],desc:"Served with 2 buns."},
 {cat:"Non-Veg Curries",name:"Egg Masala Roasted",price:160,diet:"nonveg",tags:["egg","quick"],desc:"Roasted egg masala."},
 // Seafood
 {cat:"Seafood",name:"Fish Kabab Boneless",price:null,diet:"nonveg",tags:["seafood"],desc:"Price to be confirmed."},
 {cat:"Seafood",name:"Tawa Fish Fry",price:null,diet:"nonveg",tags:["seafood"],desc:"Price to be confirmed."},
 {cat:"Seafood",name:"Regular Fish Curries",price:null,diet:"nonveg",tags:["seafood","curry"],desc:"Price to be confirmed."},
 {cat:"Seafood",name:"Mango Fish Curries",price:null,diet:"nonveg",tags:["seafood","curry"],desc:"Seasonal-style. Price to confirm."},
 // Shawarma
 {cat:"Chicken Shawarma",name:"Shawarma Roll",price:120,diet:"nonveg",tags:["shawarma","arabian","quick","chicken"],desc:"Classic roll."},
 {cat:"Chicken Shawarma",name:"Shawarma Special Roll",price:180,diet:"nonveg",tags:["shawarma","arabian","chicken"],desc:"Loaded special build."},
 {cat:"Chicken Shawarma",name:"Shawarma Jumbo Roll",price:240,diet:"nonveg",tags:["shawarma","arabian","chicken","family"],desc:"Jumbo size."},
 {cat:"Chicken Shawarma",name:"Peri-Veri Shawarma Roll",price:240,diet:"nonveg",tags:["shawarma","arabian","spicy"],desc:"Peri-veri spice (as listed)."},
 {cat:"Chicken Shawarma",name:"Lebanese Shawarma Roll",price:240,diet:"nonveg",tags:["shawarma","arabian"],desc:"Lebanese-style build."},
 {cat:"Chicken Shawarma",name:"Samoli Shawarma Roll",price:240,diet:"nonveg",tags:["shawarma","arabian"],desc:"Samoli bread build."},
 {cat:"Chicken Shawarma",name:"Shawarma Plate",price:240,diet:"nonveg",tags:["shawarma","arabian"],desc:"Open plate format."},
 {cat:"Chicken Shawarma",name:"Shawarma Special Plate",price:300,diet:"nonveg",tags:["shawarma","arabian"],desc:"Bigger plate."},
 {cat:"Chicken Shawarma",name:"Shawarma Combo (Shawarma + 1 pc Grill Chicken)",price:360,diet:"nonveg",tags:["shawarma","arabian","grill"],desc:"Roll + 1 pc grill chicken."},
 {cat:"Chicken Shawarma",name:"Shawarma with Biryani Rice",price:300,diet:"nonveg",tags:["shawarma","biryani","arabian"],desc:"Crossover plate."},
 // Arabian Grill
 {cat:"Arabian Grill",name:"Chicken Half Bird",price:300,diet:"nonveg",tags:["grill","arabian","chicken","family"],desc:"Half-bird charcoal grill."},
 {cat:"Arabian Grill",name:"Chicken Full Bird",price:540,diet:"nonveg",tags:["grill","arabian","chicken","family"],desc:"Full-bird grill — made to share."},
 // Falafel / Veg
 {cat:"Falafel / Veg",name:"Shawarma Roll (Veg)",price:120,diet:"veg",tags:["shawarma","arabian","veg","quick"],desc:"Veg shawarma roll."},
 {cat:"Falafel / Veg",name:"Shawarma Plate (Veg)",price:180,diet:"veg",tags:["shawarma","arabian","veg"],desc:"Veg plate."},
 {cat:"Falafel / Veg",name:"Hummus Shawarma Roll",price:240,diet:"veg",tags:["shawarma","arabian","veg"],desc:"With hummus."},
 {cat:"Falafel / Veg",name:"Hummus Shawarma Plate",price:240,diet:"veg",tags:["shawarma","arabian","veg"],desc:"With hummus."},
 {cat:"Falafel / Veg",name:"Peri-Peri Hummus Shawarma Roll",price:null,diet:"veg",tags:["shawarma","arabian","veg","spicy"],desc:"Price to be confirmed."},
 {cat:"Falafel / Veg",name:"Shawarma with Biryani Rice (Veg)",price:300,diet:"veg",tags:["shawarma","biryani","veg"],desc:"Veg crossover plate."},
 // Veg Starters
 {cat:"Veg Starters",name:"Hara-Bhara Kebab",price:220,diet:"veg",tags:["veg","starter"],desc:"Green veg kebab."},
 {cat:"Veg Starters",name:"Paneer Chilli",price:240,diet:"veg",tags:["veg","paneer","spicy"],desc:"Indo-Chinese style."},
 {cat:"Veg Starters",name:"Paneer Pepper Dry",price:240,diet:"veg",tags:["veg","paneer","spicy"],desc:"Pepper dry."},
 {cat:"Veg Starters",name:"Paneer Gadbad",price:240,diet:"veg",tags:["veg","paneer"],desc:"As listed — ask counter for style."},
 {cat:"Veg Starters",name:"Brinjal Fry — Andhra Vankaya Fry",price:220,diet:"veg",tags:["veg"],desc:"Andhra-style brinjal fry."},
 {cat:"Veg Starters",name:"Mushroom Pepper Dry",price:180,diet:"veg",tags:["veg","spicy","quick"],desc:"Pepper dry mushrooms."},
 {cat:"Veg Starters",name:"Mushroom Chilli",price:180,diet:"veg",tags:["veg","spicy"],desc:"Chilli-style mushrooms."},
 {cat:"Veg Starters",name:"Gobi Pepper Dry",price:180,diet:"veg",tags:["veg","spicy"],desc:"Pepper dry gobi."},
 {cat:"Veg Starters",name:"Aloo 65",price:160,diet:"veg",tags:["veg","quick","spicy"],desc:"65 masala, potato."},
 {cat:"Veg Starters",name:"Corn Cutlet",price:220,diet:"veg",tags:["veg"],desc:"Corn cutlet."},
 {cat:"Veg Starters",name:"Babycorn Golden Fry",price:180,diet:"veg",tags:["veg","quick"],desc:"Golden-fried babycorn."},
 {cat:"Veg Starters",name:"Drumstick Fry — Moringa",price:null,diet:"veg",tags:["veg"],desc:"Price to be confirmed."},
 // Veg Rice
 {cat:"Veg Rice",name:"Jeera Rice",price:120,diet:"veg",tags:["veg","rice","quick"],desc:"Cumin-tempered rice."},
 {cat:"Veg Rice",name:"Saffron Rice",price:120,diet:"veg",tags:["veg","rice"],desc:"Saffron-tinted rice."},
 {cat:"Veg Rice",name:"White Plain Rice",price:80,diet:"veg",tags:["veg","rice","quick"],desc:"Steamed rice."},
 {cat:"Veg Rice",name:"Curd Rice",price:120,diet:"veg",tags:["veg","rice"],desc:"Comfort curd rice."},
 {cat:"Veg Rice",name:"Veg Rice",price:180,diet:"veg",tags:["veg","rice"],desc:"Mixed veg rice."},
 // Roti / Breads
 {cat:"Roti / Breads",name:"Wheat Chapati — 3 pcs",price:100,diet:"veg",tags:["veg","bread","quick"],desc:"3 pieces."},
 {cat:"Roti / Breads",name:"Malabar Paratha — 3 pcs",price:100,diet:"veg",tags:["veg","bread"],desc:"3 pieces, flaky."},
 // Veg Biryani
 {cat:"Veg Biryani",name:"Paneer Biryani",price:280,diet:"veg",tags:["biryani","veg","paneer"],desc:"Paneer biryani."},
 {cat:"Veg Biryani",name:"Mushroom Biryani",price:240,diet:"veg",tags:["biryani","veg"],desc:"Mushroom biryani."},
 {cat:"Veg Biryani",name:"Dum Aloo Biryani",price:180,diet:"veg",tags:["biryani","veg","quick"],desc:"Dum-style potato biryani."},
 {cat:"Veg Biryani",name:"Mixed Veg Biryani",price:180,diet:"veg",tags:["biryani","veg","family"],desc:"Mixed vegetables."},
 // Veg Curries
 {cat:"Veg Curries",name:"Paneer Tikka Masala",price:240,diet:"veg",tags:["veg","paneer","curry"],desc:"Tikka masala gravy."},
 {cat:"Veg Curries",name:"Paneer Butter Masala",price:240,diet:"veg",tags:["veg","paneer","curry","family"],desc:"Mild, family-friendly."},
 {cat:"Veg Curries",name:"Veg Kofta",price:220,diet:"veg",tags:["veg","curry"],desc:"Kofta curry."},
 {cat:"Veg Curries",name:"Mushroom Aloo Mutter",price:220,diet:"veg",tags:["veg","curry"],desc:"Mushroom-potato-peas."},
 {cat:"Veg Curries",name:"Aloo Methi",price:220,diet:"veg",tags:["veg","curry"],desc:"Potato + fenugreek."},
 {cat:"Veg Curries",name:"Drumstick Tomato",price:180,diet:"veg",tags:["veg","curry"],desc:"Drumstick-tomato curry."},
 {cat:"Veg Curries",name:"Gutti Vankaya — Stuffed Brinjal Curry",price:200,diet:"veg",tags:["veg","curry"],desc:"Stuffed brinjal, Andhra style."},
 {cat:"Veg Curries",name:"Dal",price:120,diet:"veg",tags:["veg","curry","quick"],desc:"Everyday dal."},
 {cat:"Veg Curries",name:"Rasam",price:80,diet:"veg",tags:["veg","quick"],desc:"Peppery rasam."},
 {cat:"Veg Curries",name:"Vegetable Curry — Daily Change",price:180,diet:"veg",tags:["veg","curry"],desc:"Ask counter what's today."},
 {cat:"Veg Curries",name:"Paneer Bhurji Pav",price:240,diet:"veg",tags:["veg","paneer","quick"],desc:"Bhurji with pav."},
 {cat:"Veg Curries",name:"Mango Dal — Seasonal",price:220,diet:"veg",tags:["veg","curry"],desc:"Seasonal availability."},
 // Extras
 {cat:"Extras / Add-ons",name:"Salad",price:null,diet:"veg",tags:["extra"],desc:"Price to be confirmed."},
 {cat:"Extras / Add-ons",name:"Raita",price:null,diet:"veg",tags:["extra"],desc:"Price to be confirmed."},
 {cat:"Extras / Add-ons",name:"Gravy",price:null,diet:"veg",tags:["extra"],desc:"Price to be confirmed."},
 {cat:"Extras / Add-ons",name:"Sauce",price:null,diet:"veg",tags:["extra"],desc:"Price to be confirmed."},
 {cat:"Extras / Add-ons",name:"Onion (extra)",price:null,diet:"veg",tags:["extra"],desc:"Price to be confirmed."},
];

const CATS = ["Non-Veg Starters","Non-Veg Biryani","Non-Veg Curries","Seafood","Chicken Shawarma","Arabian Grill","Falafel / Veg","Veg Starters","Veg Rice","Roti / Breads","Veg Biryani","Veg Curries","Extras / Add-ons"];

const CRAVINGS = {
  biryani: i => i.tags.includes("biryani"),
  chicken: i => i.tags.includes("chicken"),
  mutton: i => i.tags.includes("mutton"),
  spicy: i => i.tags.includes("spicy"),
  quick: i => i.price !== null && i.price < 250,
  arabian: i => i.tags.includes("arabian") || i.tags.includes("grill") || i.tags.includes("shawarma"),
  veg: i => i.diet === "veg",
  family: i => i.tags.includes("family") || i.tags.includes("grill") || i.tags.includes("biryani"),
};

const FALLBACK_IMG = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=700&auto=format&fit=crop";
let activeCat = "Non-Veg Biryani", activeDiet = "all", query = "", activeCrav = null;

const $ = s => document.querySelector(s);
const grid = $("#menuGrid"), tabs = $("#catTabs"), count = $("#menuCount");

function priceHTML(p){ return p === null ? '<span class="tbc">Price to confirm</span>' : `<span class="price">₹${p}</span>`; }

function renderBiryani(){
  const picks = MENU.filter(m => m.feat);
  $("#biryaniGrid").innerHTML = picks.map(m => `
    <article class="b-card">
      <img src="${m.img || FALLBACK_IMG}" alt="${m.name}" loading="lazy" width="700" height="450">
      <div class="b-body">
        <span class="tag">${m.tags.includes("donne") ? "Donne style" : m.tags.includes("special") ? "House special" : "Dum style"}</span>
        <h3>${m.name}</h3><p>${m.desc}</p>
        <div class="b-meta">${priceHTML(m.price)}<a class="btn btn-ghost btn-sm" href="#order">Order</a></div>
      </div>
    </article>`).join("");
}

function renderTabs(){
  tabs.innerHTML = CATS.map(c => {
    const n = MENU.filter(m => m.cat === c).length;
    return `<button role="tab" aria-selected="${c===activeCat}" class="${c===activeCat?"on":""}" data-cat="${c}">${c} <span class="n">${n}</span></button>`;
  }).join("");
}

function filtered(){
  let list = MENU.filter(m => m.cat === activeCat);
  if (activeDiet === "veg" || activeDiet === "nonveg") list = MENU.filter(m => m.diet === activeDiet && (query || activeCrav ? true : m.cat === activeCat));
  if (activeDiet === "tbc") list = MENU.filter(m => m.price === null && (activeCrav || query ? true : m.cat === activeCat));
  if (activeCrav) list = list.filter(CRAVINGS[activeCrav]);
  if (query){ const q = query.toLowerCase(); list = list.filter(m => (m.name+" "+m.desc+" "+m.cat).toLowerCase().includes(q)); }
  // when searching/filtering across cats, ignore activeCat
  if (query || activeCrav || activeDiet === "veg" || activeDiet === "nonveg" || activeDiet === "tbc"){
    let base = [...MENU];
    if (activeDiet === "veg" || activeDiet === "nonveg") base = base.filter(m => m.diet === activeDiet);
    if (activeDiet === "tbc") base = base.filter(m => m.price === null);
    if (activeCrav) base = base.filter(CRAVINGS[activeCrav]);
    if (query){ const q = query.toLowerCase(); base = base.filter(m => (m.name+" "+m.desc+" "+m.cat).toLowerCase().includes(q)); }
    // if user also has a cat selected and no search, keep cat scope; else global
    list = (query || activeCrav || activeDiet !== "all") ? base : list;
    if (!query && !activeCrav && activeDiet === "all") list = MENU.filter(m => m.cat === activeCat);
    else if (!query && !activeCrav) list = base.filter(m => m.cat === activeCat);
  }
  return list;
}

function renderMenu(){
  const list = filtered();
  count.textContent = `${list.length} item${list.length!==1?"s":""}${activeCrav ? " · craving filter on — tap again to clear" : ""}`;
  grid.innerHTML = list.length ? list.map(m => `
    <article class="m-card">
      <span class="cat"><span class="vegdot ${m.diet==="veg"?"v":"n"}" aria-hidden="true"></span>${m.cat}</span>
      <h3>${m.name}</h3><p>${m.desc}</p>
      <div class="m-foot">${priceHTML(m.price)}<a class="mini-link" href="#order">Order →</a></div>
    </article>`).join("")
    : `<p>No dishes match. Try clearing search or filters.</p>`;
}

tabs.addEventListener("click", e => {
  const b = e.target.closest("[data-cat]"); if(!b) return;
  activeCat = b.dataset.cat; renderTabs(); renderMenu();
});
document.querySelectorAll("[data-diet]").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll("[data-diet]").forEach(x => x.classList.remove("on"));
  b.classList.add("on"); activeDiet = b.dataset.diet; renderMenu();
}));
$("#menuSearch").addEventListener("input", e => { query = e.target.value.trim(); renderMenu(); });
$("#cravRow").addEventListener("click", e => {
  const b = e.target.closest("[data-crav]"); if(!b) return;
  const k = b.dataset.crav;
  activeCrav = (activeCrav === k) ? null : k;
  document.querySelectorAll("#cravRow button").forEach(x => x.classList.toggle("on", x.dataset.crav === activeCrav));
  renderMenu();
  if (activeCrav) $("#menu").scrollIntoView({behavior:"smooth",block:"start"});
});
// cross-links: data-goto-cat buttons
document.addEventListener("click", e => {
  const g = e.target.closest("[data-goto-cat]"); if(!g) return;
  e.preventDefault();
  activeCat = g.dataset.gotoCat; activeCrav = null; query = ""; $("#menuSearch").value = "";
  document.querySelectorAll("#cravRow button").forEach(x => x.classList.remove("on"));
  renderTabs(); renderMenu();
  document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
});
// placeholder actions: phone / swiggy / zomato not yet verified
const toast = $("#toast"); let toastT;
function showToast(msg){
  toast.textContent = msg; toast.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => toast.hidden = true, 3200);
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-needs]"); if(!b) return;
  e.preventDefault();
  const k = b.dataset.needs;
  showToast("Ordering link coming soon — the owner needs to share the verified " + (k === "zomato" ? "Zomato" : "Swiggy") + " URL.");
});
// mobile nav
const toggle = $("#navToggle"), mnav = $("#mobileNav");
toggle.addEventListener("click", () => {
  const open = mnav.hidden;
  mnav.hidden = !open; toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "✕" : "☰";
});
mnav.addEventListener("click", e => { if(e.target.tagName === "A"){ mnav.hidden = true; toggle.textContent = "☰"; } });
// reveal on scroll (subtle, respects reduced motion)
if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window){
  const io = new IntersectionObserver(es => es.forEach(en => {
    if(en.isIntersecting){ en.target.style.opacity = 1; en.target.style.transform = "none"; io.unobserve(en.target); }
  }), {threshold:.08});
  document.querySelectorAll(".b-card,.why-card,.fav-card,.m-card,.veg-card,.rate-card").forEach(el => {
    el.style.opacity = 0; el.style.transform = "translateY(14px)";
    el.style.transition = "opacity .5s ease, transform .5s ease"; io.observe(el);
  });
  // re-observe dynamically rendered cards once
  setTimeout(() => document.querySelectorAll(".m-card,.b-card").forEach(el => {
    el.style.opacity = 1; el.style.transform = "none";
  }), 1200);
}

renderBiryani(); renderTabs(); renderMenu();
