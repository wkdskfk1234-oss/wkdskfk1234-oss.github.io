/* ================================================
   1. 내용 수정 영역 — 여기만 고치면 내용이 바뀝니다
   ================================================ */

// [프로젝트] ["제목", "분류", "임시 대표색", "카드 대표 이미지", ["열었을 때 이미지1", "이미지2", ...]]
//   - 이미지는 assets/projects/번호/ 폴더에 들어 있습니다. (cover.jpg = 카드 대표, 1.jpg 2.jpg 3.jpg = 열었을 때)
//     같은 이름으로 파일만 덮어쓰면 바로 바뀝니다. (png로 바꾸려면 여기 확장자도 .png로 수정)
//   - 열었을 때 이미지를 4장 이상 쓰려면 배열 끝에 "assets/projects/01/4.jpg" 처럼 추가하세요.
//   - 이미지 경로를 지우면(4·5번째 생략) 임시 SVG 이미지가 대신 보입니다.
//   - 카드는 9개(3x3)만 사용합니다. 개수를 바꾸면 그 수만큼 카드가 만들어집니다.
const projects=[
 ["에두아르 마네<br>전시회 홍보물 디자인","포스터, 리플렛","#2b2b2e",
   "assets/projects/01/cover.jpg",
   ["assets/projects/01/1.jpg","assets/projects/01/2.jpg","assets/projects/01/3.jpg"]],
 ["앙리마티스 라이프앤 조이<br>홍보물 디자인","포스터","#e07a3c",
   "assets/projects/02/cover.jpg",
   ["assets/projects/02/1.jpg","assets/projects/02/2.jpg","assets/projects/02/3.jpg"]],
 ["카페 신메뉴 홍보물 디자인","포스터","#2f4bff",
   "assets/projects/03/cover.jpg",
   ["assets/projects/03/1.jpg","assets/projects/03/2.jpg","assets/projects/03/3.jpg"]],
 ["성균관대학교 캘린더 디자인","캘린더","#1f8a70",
   "assets/projects/04/cover.jpg",
   ["assets/projects/04/1.jpg","assets/projects/04/2.jpg","assets/projects/04/3.jpg"]],
 ["완도청년 브랜드<br>명절 선물 패키지 디자인","패키지","#b23a68",
   "assets/projects/05/cover.jpg",
   ["assets/projects/05/1.jpg","assets/projects/05/2.jpg","assets/projects/05/3.jpg"]],
 ["이제주숍 캐릭터·굿즈 디자인","캐릭터·굿즈","#4a6fa5",
   "assets/projects/06/cover.jpg",
   ["assets/projects/06/1.jpg","assets/projects/06/2.jpg","assets/projects/06/3.jpg"]],
 ["두아리파 앨범 디자인","패키지","#7a4fbf",
   "assets/projects/07/cover.jpg",
   ["assets/projects/07/1.jpg","assets/projects/07/2.jpg","assets/projects/07/3.jpg"]],
 ["뭉향 브랜드 로고 디자인","로고","#c2453d",
   "assets/projects/08/cover.jpg",
   ["assets/projects/08/1.jpg","assets/projects/08/2.jpg","assets/projects/08/3.jpg"]],
 ["유블리 브랜드 로고 디자인","로고","#3b3b44",
   "assets/projects/09/cover.jpg",
   ["assets/projects/09/1.jpg","assets/projects/09/2.jpg","assets/projects/09/3.jpg"]]
];

// [영상] YouTube 영상 ID (주소의 v= 뒤 글자). ""로 두면 빈 칸이 표시됩니다.
// wide = 16:9 영상(1페이지에 1개), shorts = 숏츠(한 페이지에 최대 3개씩, 현재 2개)
const wide=["JQ5vLc924KE","5O-BT1sBlqE"];
const shorts=["jdaJJmAku_U","lfjADgKuv5U"];
// [영상 제목/설명] 위 영상 순서와 같은 순서로 ["제목","설명"]을 적으세요. (마우스를 올렸을 때 표시, 설명 줄바꿈은 \n)
//   제목과 설명을 둘 다 비워두면("") 오버레이가 나타나지 않습니다.
const wideInfo=[["비이츠 흑임자가루","저가 원료와 불편한 포장에 대한 소비자들의 숨은 불안감을 솔직하게 짚어내고,\n이를 혁신적으로 해결하는 '비이츠 흑임자 가루' 만의 정성과 가치를 전달하는 감성 광고입니다.\n시작의 차가운 무채색 톤에 출발하여, 국내 생산 시설의 신뢰감과 친정 어머니의 사랑을 담은\n따뜻한 온기로 전환되는 구조를 통해 브랜드에 대한 깊은 공감과 감동을 유도합니다."],["유튜버 쀼렘띠 영상 인트로","갓생을 꿈꾸지만 아무거나 다 하는 사람의 솔직하고 유쾌한 매력을 담은 인트로입니다.\n채널아트와 통일된 컬러·그래픽으로 쀼렘띠다운 즐거움을 첫 장면부터 전달하고,\n힙합을 좋아하는 자유로운 개성을 모션으로 보여줍니다."]];
const shortsInfo=[["삼성 버즈 홍보 광고","반복되는 일상 속 출근길에서 갤럭시 버즈를 착용하는 순간,\n평범한 도시 공간이 화려한 라이브 공연장으로 변화하는 판타지적 연출을 담아\n음악을 통해 현실과 환상의 경계가 허물어지는 모습을\n감각적인 영상미와 다채로운 장면 전환으로 표현하고,\n생성형 AI를 활용해 몰입감 있는 음악적 경험과 갤럭시 버즈의\n매력을 전달하고자 하였습니다."],["스위스 혼밥 맛집여행","스위스는 풍경으로 유명하지만,\n 혼자 여행할 때 '어디서 무엇을 먹어야 하는지'는 정보를 찾기 어렵습니다.\n이 영상을 통해 대표 도시 6곳의 대표 음식을\n생성형 AI를 활용해 혼자서도 부담 없이 즐기는 관점으로 소개했습니다."]];

/* ================================================
   2. ABOUT — 화면에 들어오면 모션이 한 번 재생됩니다.
      (새로고침, 또는 로고를 눌러 맨 위로 돌아갔다가 다시 내려오면 처음처럼 다시 재생)
   ================================================ */
const about=document.getElementById("skills");
let aboutIO;
const watchAbout=()=>{
 if(!("IntersectionObserver" in window)){about.classList.add("play");return}
 aboutIO=aboutIO||new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){about.classList.add("play");aboutIO.disconnect()}},{threshold:.15,rootMargin:"0px 0px -8% 0px"});
 aboutIO.observe(about);
};
watchAbout();

/* ================================================
   3. PROJECT — 카드 9개(3x3)
   ================================================ */
// 임시 이미지(SVG). 실제 이미지는 위 projects 배열에 경로를 적으면 대체됩니다.
const ph=(bg,i)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${bg}'/><stop offset='1' stop-color='#000' stop-opacity='.55'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><circle cx='${200+i*160}' cy='${180+i*60}' r='${90+i*30}' fill='#fff' fill-opacity='.14'/><rect x='${420-i*90}' y='330' width='260' height='170' rx='14' fill='#fff' fill-opacity='.18'/><text x='40' y='560' font-family='sans-serif' font-size='28' font-weight='700' fill='#fff' fill-opacity='.85'>IMAGE ${i+1} - 임시 이미지</text></svg>`);
const list=document.getElementById("projectTrack"),dlg=document.getElementById("dlg");

// (1) 카드 만들기
list.innerHTML=`<div class="grid">`+projects.map(([t,c,bg,cover],i)=>`<div class="cell"><button class="card rise" data-n="${i}"><div class="thumb"><img src="${cover||ph(bg,0)}" alt="${t} 대표 이미지" draggable="false"></div><div class="ov"><h3>${t}</h3><small>${c}</small></div></button></div>`).join("")+`</div>`;

// (2) 카드 구역에 도착하면 카드가 랜덤한 순서로 하나씩 은은하게 나타납니다. — 한 번 나타나면 스크롤을 오가도 다시 재생되지 않습니다.
const cells=[...list.querySelectorAll(".cell")];
let queueEnd=0;                                         // 다음 카드가 나타날 시각 (앞 카드와 겹치지 않게 순번 대기)
const reveal=batch=>{
 for(let i=batch.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[batch[i],batch[j]]=[batch[j],batch[i]]}   // 순서 섞기
 const now=performance.now();
 if(queueEnd<now)queueEnd=now;
 batch.forEach(c=>{
  c.style.setProperty("--d",((queueEnd-now)/1000).toFixed(2)+"s");
  c.classList.add("in","pop");
  queueEnd+=170+Math.random()*190;                     // 카드 사이 간격 0.17~0.36초 (숫자를 키우면 더 천천히)
 });
};
let cardIO=null;
const watchCards=()=>{
 if(!("IntersectionObserver" in window)){cells.forEach(w=>w.classList.add("in"));return}
 cardIO=cardIO||new IntersectionObserver(es=>{
  const batch=es.filter(e=>e.isIntersecting).map(e=>e.target);
  batch.forEach(t=>cardIO.unobserve(t));               // 한 번 나타난 카드는 더 이상 관찰하지 않음 = 모션 1회
  if(batch.length)reveal(batch);
 },{threshold:.15,rootMargin:"0px 0px -8% 0px"});
 cells.forEach(c=>cardIO.observe(c));
};
watchCards();
// 로고로 맨 위에 돌아왔을 때: 카드를 처음 상태로 되돌려, 다시 내려오면 처음처럼 등장
const resetCards=()=>{cells.forEach(w=>{w.classList.remove("in","pop");w.style.removeProperty("--d")});queueEnd=0;watchCards()};
const resetAbout=()=>{about.classList.remove("play");watchAbout()};

/* ================================================
   4. 프로젝트 상세 팝업 (카드 클릭 → 큰 이미지 3장, ←/→ 로 다른 프로젝트)
   ================================================ */
let cur=0;
function openProject(n){
 cur=(n+projects.length)%projects.length;
 const [t,c,bg,,imgs]=projects[cur];
 document.getElementById("dTitle").textContent=t;
 document.getElementById("dCat").textContent=c;
 document.getElementById("dImgs").innerHTML=((imgs&&imgs.length)?imgs:[ph(bg,0),ph(bg,1),ph(bg,2)]).map((src,i)=>`<img src="${src}" alt="${t} 이미지 ${i+1}">`).join("");
 if(!dlg.open)dlg.showModal();
 dlg.scrollTop=0;requestAnimationFrame(()=>{dlg.scrollTop=0});   // 열린 뒤에 맨 위로 (닫힌 상태에서는 위치가 초기화되지 않음)
}
list.addEventListener("click",e=>{const b=e.target.closest(".card");if(b)openProject(+b.dataset.n)});
document.getElementById("dClose").onclick=()=>dlg.close();
document.getElementById("dFloat").onclick=()=>dlg.close();
dlg.addEventListener("close",()=>{dlg.scrollTop=0});   // 닫을 때도 위치 초기화
document.getElementById("dPrev").onclick=()=>openProject(cur-1);
document.getElementById("dNext").onclick=()=>openProject(cur+1);
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});

/* ================================================
   5. VIDEO — 위 wide / shorts 배열로 자동 생성
   ================================================ */
const vt=document.getElementById("vTrack"),vp=document.getElementById("vPrev"),vn=document.getElementById("vNext"),dW=document.getElementById("vDotsW"),dS=document.getElementById("vDotsS");
const pages=wide.map(id=>({k:"wide",ids:[id]}));
for(let i=0;i<shorts.length;i+=3)pages.push({k:"short",ids:shorts.slice(i,i+3)});
// 영상 첫 화면 이미지: assets/videos/ 폴더의 파일을 사용합니다. (16:9 영상 = video-1.jpg ~, 숏츠 = short-1.jpg ~)
//   같은 이름으로 덮어쓰면 바로 교체됩니다. 영상 ID가 비어 있어도 이미지는 보이고, ID를 넣으면 클릭해서 재생됩니다.
const posters={};   // (선택) 특정 영상ID에 다른 이미지를 쓰고 싶을 때: "영상ID":"이미지주소"
const esc=x=>String(x==null?"":x).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const poster=(id,t,src,ti,de)=>`<button class="vposter" data-id="${id}" data-t="${t}" aria-label="${t}${id?" 재생":""}"><img src="${posters[id]||src}" alt="" loading="lazy">${ti||de?`<span class="vov"><b>${esc(ti)}</b><small>${esc(de)}</small></span>`:""}</button>`;
const ifr=(id,t)=>`<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1" title="${t}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
let wn=0,sn=0;                                      // 영상/숏츠 번호 (이미지 파일 이름에 사용)
const item=(id,t,src,info)=>{const [ti,de]=info||[];return `<div class="vitem" data-id="${id}" data-t="${t}" data-src="${src}" data-ti="${esc(ti)}" data-de="${esc(de)}">${poster(id,t,src,ti,de)}</div>`};
vt.innerHTML=pages.map(p=>`<div class="vpage${p.k==="short"?" short":""}">${p.ids.map(id=>{if(p.k==="short"){sn++;return item(id,"숏츠 영상 "+sn,"assets/videos/short-"+sn+".jpg",shortsInfo[sn-1])}wn++;return item(id,"영상 "+wn,"assets/videos/video-"+wn+".jpg",wideInfo[wn-1])}).join("")}</div>`).join("");
// 이미지 파일이 없으면: 영상 ID가 있을 때만 유튜브 썸네일로 대체
vt.addEventListener("error",e=>{const im=e.target;if(im.tagName!=="IMG"||im.dataset.fb)return;im.dataset.fb=1;const id=im.closest(".vposter").dataset.id;if(id)im.src=`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;else im.style.visibility="hidden"},true);
// 표지 위에서는 마우스 커서가 동그란 재생 버튼으로 바뀜 (마우스 환경에서만)
const vc=document.createElement("div");vc.id="vCursor";vc.innerHTML="<i></i>";document.body.appendChild(vc);
if(matchMedia("(hover:hover)").matches){
 const move=e=>{vc.style.transform=`translate(${e.clientX}px,${e.clientY}px)`};
 vt.addEventListener("mousemove",move);
 vt.addEventListener("mouseover",e=>{if(e.target.closest(".vposter")){move(e);vc.classList.add("on")}});
 vt.addEventListener("mouseout",e=>{if(e.target.closest(".vposter")&&!(e.relatedTarget&&e.relatedTarget.closest&&e.relatedTarget.closest(".vposter")))vc.classList.remove("on")});
}
// 표지를 누르면 그 자리에서 재생
vt.addEventListener("click",e=>{
 const b=e.target.closest(".vposter");if(!b||!b.dataset.id)return;   // ID가 비어 있으면 재생 안 함
 vc.classList.remove("on");const box=b.parentElement;box.innerHTML=ifr(b.dataset.id,b.dataset.t);
 const f=box.querySelector("iframe");if(f)f.focus();
});
let vi=0;
const dots=(el,kind,label)=>{el.innerHTML=pages.map((p,k)=>p.k===kind?`<button data-k="${k}" aria-label="${label} ${k+1}"${k===vi?' class="on"':''}></button>`:"").join("")};
// 다른 영상으로 넘기면 재생 중이던 영상은 멈추고 표지 이미지로 되돌립니다
const resetPlayers=()=>{[...vt.children].forEach((pg,k)=>{if(k!==vi)pg.querySelectorAll(".vitem[data-id]").forEach(it=>{if(it.querySelector("iframe"))it.innerHTML=poster(it.dataset.id,it.dataset.t,it.dataset.src,it.dataset.ti,it.dataset.de)})})};
const showV=()=>{resetPlayers();vc.classList.remove("on");vt.style.transform=`translateX(${-vi*100}%)`;vp.disabled=vi===0;vn.disabled=vi===pages.length-1;dots(dW,"wide","16:9 영상 페이지");dots(dS,"short","숏츠 영상 페이지")};
vp.onclick=()=>{vi=Math.max(0,vi-1);showV()};
vn.onclick=()=>{vi=Math.min(pages.length-1,vi+1);showV()};
document.querySelector("#video .vbar").onclick=e=>{const b=e.target.closest("button");if(b){vi=+b.dataset.k;showV()}};
showV();

/* ================================================
   6. HERO 인트로 — 처음엔 메뉴 없이 배너만 보이고, 모션이 끝나면 메뉴가 나타남
      로고를 눌러 맨 위로 돌아왔을 때만 모션이 다시 처음부터 실행됩니다.
   ================================================ */
const nav=document.querySelector("nav"),heroA=document.querySelector(".hero-a"),heroB=document.querySelector(".hero-b");
const reduceMotion=matchMedia("(prefers-reduced-motion:reduce)").matches;
let introTimer;
const root=document.documentElement;
const showNav=()=>{clearTimeout(introTimer);nav.classList.add("show");root.classList.add("intro-done")};
const INTRO_MS=4200;                                   // 모션 총 길이(약 3.8초)보다 살짝 길게 잡은 안전장치
function playIntro(){
 nav.classList.remove("show");root.classList.remove("intro-done");clearTimeout(introTimer);
 resetCards();resetAbout();   // 맨 위로 돌아오면 About·프로젝트 카드 모션도 처음 상태로
 if(reduceMotion){showNav();return}
 [heroA,heroB].forEach(el=>el.style.animation="none");void heroA.offsetWidth;[heroA,heroB].forEach(el=>el.style.animation="");   // 애니메이션 처음부터 다시
 introTimer=setTimeout(showNav,INTRO_MS);
}
heroB.addEventListener("animationend",showNav);        // 마지막 모션(페이드)이 끝나면 메뉴 등장
if(reduceMotion)showNav();else introTimer=setTimeout(showNav,INTRO_MS);
addEventListener("scroll",()=>{if(!nav.classList.contains("show")&&scrollY>innerHeight*.6)showNav()},{passive:true});   // 모션 중 스크롤을 내리면 바로 메뉴 표시

document.querySelector(".nav-brand").addEventListener("click",e=>{   // 로고 클릭 시에만 실행
 e.preventDefault();
 if(scrollY<=1){playIntro();return}
 scrollTo({top:0,behavior:reduceMotion?"auto":"smooth"});
 const t0=performance.now();
 const wait=()=>{if(scrollY<=1)playIntro();else if(performance.now()-t0<4000)requestAnimationFrame(wait)};   // 맨 위에 도착하면 모션 재생
 requestAnimationFrame(wait);
});
