/* ================================================
   1. 내용 수정 영역 — 여기만 고치면 내용이 바뀝니다
   ================================================ */

// [프로젝트] ["제목", "분류", "임시 대표색", "카드 대표 이미지", ["열었을 때 이미지1", "이미지2", ...]]
//   - 이미지는 assets/projects/번호/ 폴더에 들어 있습니다. (cover.jpg = 카드 대표, 1.jpg 2.jpg 3.jpg = 열었을 때)
//     같은 이름으로 파일만 덮어쓰면 바로 바뀝니다. (png로 바꾸려면 여기 확장자도 .png로 수정)
//   - 열었을 때 이미지를 4장 이상 쓰려면 배열 끝에 "assets/projects/01/4.jpg" 처럼 추가하세요.
//   - 이미지 경로를 지우면(4·5번째 생략) 임시 SVG 이미지가 대신 보입니다.
//   - 27개 = 9개씩 3페이지 (개수를 바꾸면 페이지 수도 자동 변경)
const projects=[
 ["비이츠 흑임자 광고 영상","영상 · 스토리보드","#2b2b2e",
   "assets/projects/01/cover.jpg",
   ["assets/projects/01/1.jpg","assets/projects/01/2.jpg","assets/projects/01/3.jpg"]],
 ["햄토피아 광고 영상","영상 · 광고","#e07a3c",
   "assets/projects/02/cover.jpg",
   ["assets/projects/02/1.jpg","assets/projects/02/2.jpg","assets/projects/02/3.jpg"]],
 ["탬버린즈 모바일 웹앱","UI/UX · Mobile Web","#2f4bff",
   "assets/projects/03/cover.jpg",
   ["assets/projects/03/1.jpg","assets/projects/03/2.jpg","assets/projects/03/3.jpg"]],
 ["포트폴리오 표지 디자인","그래픽 · 편집","#1f8a70",
   "assets/projects/04/cover.jpg",
   ["assets/projects/04/1.jpg","assets/projects/04/2.jpg","assets/projects/04/3.jpg"]],
 ["쀼렘띠 채널 리디자인","브랜딩 · 기획서","#b23a68",
   "assets/projects/05/cover.jpg",
   ["assets/projects/05/1.jpg","assets/projects/05/2.jpg","assets/projects/05/3.jpg"]],
 ["스위스 맛집 숏츠","숏폼 · 콘텐츠","#4a6fa5",
   "assets/projects/06/cover.jpg",
   ["assets/projects/06/1.jpg","assets/projects/06/2.jpg","assets/projects/06/3.jpg"]],
 ["누나IT 소개 웹사이트","웹 · PC/Mobile","#7a4fbf",
   "assets/projects/07/cover.jpg",
   ["assets/projects/07/1.jpg","assets/projects/07/2.jpg","assets/projects/07/3.jpg"]],
 ["뽀렘띠 모션 인트로 영상","모션 · 영상","#c2453d",
   "assets/projects/08/cover.jpg",
   ["assets/projects/08/1.jpg","assets/projects/08/2.jpg","assets/projects/08/3.jpg"]],
 ["신규 프로젝트 (임시)","임시 · 분류","#3b3b44",
   "assets/projects/09/cover.jpg",
   ["assets/projects/09/1.jpg","assets/projects/09/2.jpg","assets/projects/09/3.jpg"]],
 ["임시 프로젝트 10","임시 · 분류","#2b2b2e",
   "assets/projects/10/cover.jpg",
   ["assets/projects/10/1.jpg","assets/projects/10/2.jpg","assets/projects/10/3.jpg"]],
 ["임시 프로젝트 11","임시 · 분류","#e07a3c",
   "assets/projects/11/cover.jpg",
   ["assets/projects/11/1.jpg","assets/projects/11/2.jpg","assets/projects/11/3.jpg"]],
 ["임시 프로젝트 12","임시 · 분류","#2f4bff",
   "assets/projects/12/cover.jpg",
   ["assets/projects/12/1.jpg","assets/projects/12/2.jpg","assets/projects/12/3.jpg"]],
 ["임시 프로젝트 13","임시 · 분류","#1f8a70",
   "assets/projects/13/cover.jpg",
   ["assets/projects/13/1.jpg","assets/projects/13/2.jpg","assets/projects/13/3.jpg"]],
 ["임시 프로젝트 14","임시 · 분류","#b23a68",
   "assets/projects/14/cover.jpg",
   ["assets/projects/14/1.jpg","assets/projects/14/2.jpg","assets/projects/14/3.jpg"]],
 ["임시 프로젝트 15","임시 · 분류","#4a6fa5",
   "assets/projects/15/cover.jpg",
   ["assets/projects/15/1.jpg","assets/projects/15/2.jpg","assets/projects/15/3.jpg"]],
 ["임시 프로젝트 16","임시 · 분류","#7a4fbf",
   "assets/projects/16/cover.jpg",
   ["assets/projects/16/1.jpg","assets/projects/16/2.jpg","assets/projects/16/3.jpg"]],
 ["임시 프로젝트 17","임시 · 분류","#c2453d",
   "assets/projects/17/cover.jpg",
   ["assets/projects/17/1.jpg","assets/projects/17/2.jpg","assets/projects/17/3.jpg"]],
 ["임시 프로젝트 18","임시 · 분류","#3b3b44",
   "assets/projects/18/cover.jpg",
   ["assets/projects/18/1.jpg","assets/projects/18/2.jpg","assets/projects/18/3.jpg"]],
 ["임시 프로젝트 19","임시 · 분류","#2b2b2e",
   "assets/projects/19/cover.jpg",
   ["assets/projects/19/1.jpg","assets/projects/19/2.jpg","assets/projects/19/3.jpg"]],
 ["임시 프로젝트 20","임시 · 분류","#e07a3c",
   "assets/projects/20/cover.jpg",
   ["assets/projects/20/1.jpg","assets/projects/20/2.jpg","assets/projects/20/3.jpg"]],
 ["임시 프로젝트 21","임시 · 분류","#2f4bff",
   "assets/projects/21/cover.jpg",
   ["assets/projects/21/1.jpg","assets/projects/21/2.jpg","assets/projects/21/3.jpg"]],
 ["임시 프로젝트 22","임시 · 분류","#1f8a70",
   "assets/projects/22/cover.jpg",
   ["assets/projects/22/1.jpg","assets/projects/22/2.jpg","assets/projects/22/3.jpg"]],
 ["임시 프로젝트 23","임시 · 분류","#b23a68",
   "assets/projects/23/cover.jpg",
   ["assets/projects/23/1.jpg","assets/projects/23/2.jpg","assets/projects/23/3.jpg"]],
 ["임시 프로젝트 24","임시 · 분류","#4a6fa5",
   "assets/projects/24/cover.jpg",
   ["assets/projects/24/1.jpg","assets/projects/24/2.jpg","assets/projects/24/3.jpg"]],
 ["임시 프로젝트 25","임시 · 분류","#7a4fbf",
   "assets/projects/25/cover.jpg",
   ["assets/projects/25/1.jpg","assets/projects/25/2.jpg","assets/projects/25/3.jpg"]],
 ["임시 프로젝트 26","임시 · 분류","#c2453d",
   "assets/projects/26/cover.jpg",
   ["assets/projects/26/1.jpg","assets/projects/26/2.jpg","assets/projects/26/3.jpg"]],
 ["임시 프로젝트 27","임시 · 분류","#3b3b44",
   "assets/projects/27/cover.jpg",
   ["assets/projects/27/1.jpg","assets/projects/27/2.jpg","assets/projects/27/3.jpg"]]
];

// [영상] YouTube 영상 ID (주소의 v= 뒤 글자). ""로 두면 빈 칸이 표시됩니다.
// wide = 16:9 영상(1페이지에 1개), shorts = 숏츠(3개씩 한 페이지)
const wide=["JQ5vLc924KE","jNQXAC9IMQw","9bZkp7q19f0"];
const shorts=["","","","","",""];

/* ================================================
   2. SKILLS — 위 skills 배열로 자동 생성
   ================================================ */

/* ================================================
   3. PROJECT — 카드 9개씩 페이지로 나누고, 좌우 드래그로 넘김
   ================================================ */
// 임시 이미지(SVG). 실제 이미지는 위 projects 배열에 경로를 적으면 대체됩니다.
const ph=(bg,i)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${bg}'/><stop offset='1' stop-color='#000' stop-opacity='.55'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><circle cx='${200+i*160}' cy='${180+i*60}' r='${90+i*30}' fill='#fff' fill-opacity='.14'/><rect x='${420-i*90}' y='330' width='260' height='170' rx='14' fill='#fff' fill-opacity='.18'/><text x='40' y='560' font-family='sans-serif' font-size='28' font-weight='700' fill='#fff' fill-opacity='.85'>IMAGE ${i+1} - 임시 이미지</text></svg>`);
const PER_PAGE=9;                                   // 한 페이지에 보여줄 카드 수
const view=document.getElementById("projectView"),list=document.getElementById("projectTrack"),dlg=document.getElementById("dlg");
const pageCount=Math.ceil(projects.length/PER_PAGE);
let pi=0;                                           // 현재 페이지 번호 (0부터)

// (1) 카드 만들기: 페이지 > 3칸 grid > 카드
list.innerHTML=Array.from({length:pageCount},(_,p)=>`<div class="ppage"><div class="grid">`+
 projects.slice(p*PER_PAGE,(p+1)*PER_PAGE).map(([t,c,bg,cover],i)=>`<div class="cell" data-p="${p}"><button class="card rise" data-n="${p*PER_PAGE+i}"><div class="thumb"><img src="${cover||ph(bg,0)}" alt="${t} 대표 이미지" draggable="false"></div><div class="ov"><h3>${t}</h3><small>${c}</small></div></button></div>`).join("")+`</div></div>`).join("");

// (2) 카드 구역으로 스크롤해 들어오면 카드가 랜덤한 순서로 하나씩 은은하게 나타납니다.
//     구역을 완전히 벗어났다가 다시 돌아오면 또 반복됩니다. (현재 페이지 카드만 적용)
const cells=[...list.querySelectorAll(".cell")];
const mine=w=>+w.dataset.p===pi;                      // 현재 페이지 카드인지
const show=w=>w.classList.add("in");                   // 다른 페이지 카드는 애니메이션 없이 바로 표시(드래그할 때 미리 보이도록)
cells.forEach(w=>{if(!mine(w))show(w)});
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
if("IntersectionObserver" in window){
 const io=new IntersectionObserver(es=>{
  const batch=es.filter(e=>e.isIntersecting&&mine(e.target)&&!e.target.classList.contains("in")).map(e=>e.target);
  if(batch.length)reveal(batch);
 },{threshold:.15,rootMargin:"0px 0px -8% 0px"});
 const out=new IntersectionObserver(es=>es.forEach(e=>{
  const r=e.boundingClientRect;                        // 화면 위/아래로 완전히 벗어나면 초기화 (좌우 드래그 중에는 유지)
  if(!e.isIntersecting&&mine(e.target)&&(r.bottom<=0||r.top>=innerHeight))e.target.classList.remove("in","pop");
 }));
 cells.forEach(c=>{io.observe(c);out.observe(c)});
}else cells.forEach(w=>w.classList.add("in"));

// (3) 페이지 이동 + 아래 점 표시
const dotsEl=document.getElementById("pDots");
const drawDots=()=>{dotsEl.innerHTML=Array.from({length:pageCount},(_,k)=>`<button data-k="${k}" aria-label="프로젝트 ${k+1}페이지"${k===pi?' class="on"':''}></button>`).join("")};
function goPage(n){
 const prev=pi;
 pi=Math.max(0,Math.min(pageCount-1,n));
 list.style.transform=`translateX(${-pi*100}%)`;
 cells.forEach(w=>{if(!mine(w))show(w)});
 if(pi!==prev){                                          // 페이지가 바뀌면 새 페이지 카드도 같은 모션으로 다시 등장
  const mineCells=cells.filter(mine);
  mineCells.forEach(w=>w.classList.remove("in","pop"));
  void list.offsetWidth;                                 // 애니메이션 재시작용
  const seen=mineCells.filter(w=>{const r=w.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight*.92});
  if(seen.length)reveal(seen);                           // 화면에 보이는 카드는 바로, 아래쪽 카드는 스크롤해서 들어올 때 등장
 }
 drawDots();
}
dotsEl.onclick=e=>{const b=e.target.closest("button");if(b)goPage(+b.dataset.k)};
view.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")goPage(pi-1);if(e.key==="ArrowRight")goPage(pi+1)});
view.addEventListener("focusin",e=>{const c=e.target.closest(".cell");if(c)goPage(+c.dataset.p)});   // Tab으로 이동해도 해당 페이지로

// (4) 좌우 드래그 (마우스·터치 모두). 세로 스크롤은 그대로 동작
let sx=0,sy=0,st=0,dx=0,down=false,lock=false,moved=false;
view.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"&&e.button!==0)return;down=true;lock=false;sx=e.clientX;sy=e.clientY;st=e.timeStamp;dx=0});
view.addEventListener("pointermove",e=>{
 if(!down)return;
 const mx=e.clientX-sx,my=e.clientY-sy;
 if(!lock){if(Math.abs(mx)<8||Math.abs(mx)<Math.abs(my))return;lock=true;view.classList.add("drag");view.setPointerCapture(e.pointerId)}
 const w=view.clientWidth;
 dx=Math.max(-w*.95,Math.min(w*.95,mx));
 const edge=(pi===0&&dx>0)||(pi===pageCount-1&&dx<0);       // 처음/끝 페이지에서는 살짝만 따라옴
 list.style.transform=`translateX(${-pi*w+dx*(edge?.3:1)}px)`;
});
const endDrag=e=>{
 if(!down)return;down=false;
 if(!lock)return;lock=false;moved=true;view.classList.remove("drag");
 const w=view.clientWidth,v=dx/((e.timeStamp-st)||1);        // 이동 거리 · 속도
 // 화면의 20% 이상 끌거나 빠르게 휙 넘기면 다음/이전 페이지로 (기준은 0.2, 0.5에서 조절)
 goPage(dx<-w*.2||v<-.5?pi+1:dx>w*.2||v>.5?pi-1:pi);
 setTimeout(()=>moved=false,50);
};
view.addEventListener("pointerup",endDrag);view.addEventListener("pointercancel",endDrag);
view.addEventListener("click",e=>{if(moved){e.stopPropagation();e.preventDefault()}},true);   // 드래그 직후에는 팝업이 열리지 않게
drawDots();

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
 goPage(Math.floor(cur/PER_PAGE));   // 닫았을 때 해당 프로젝트 페이지로 슬라이더 이동
 dlg.scrollTop=0;
 if(!dlg.open)dlg.showModal();
}
list.addEventListener("click",e=>{const b=e.target.closest(".card");if(b)openProject(+b.dataset.n)});
document.getElementById("dClose").onclick=()=>dlg.close();
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
const poster=(id,t,src)=>`<button class="vposter" data-id="${id}" data-t="${t}" aria-label="${t}${id?" 재생":""}"><img src="${posters[id]||src}" alt="" loading="lazy"></button>`;
const ifr=(id,t)=>`<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1" title="${t}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
let wn=0,sn=0;                                      // 영상/숏츠 번호 (이미지 파일 이름에 사용)
const item=(id,t,src)=>`<div class="vitem" data-id="${id}" data-t="${t}" data-src="${src}">${poster(id,t,src)}</div>`;
vt.innerHTML=pages.map(p=>`<div class="vpage${p.k==="short"?" short":""}">${p.ids.map(id=>{if(p.k==="short"){sn++;return item(id,"숏츠 영상 "+sn,"assets/videos/short-"+sn+".jpg")}wn++;return item(id,"영상 "+wn,"assets/videos/video-"+wn+".jpg")}).join("")}</div>`).join("");
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
const resetPlayers=()=>{[...vt.children].forEach((pg,k)=>{if(k!==vi)pg.querySelectorAll(".vitem[data-id]").forEach(it=>{if(it.querySelector("iframe"))it.innerHTML=poster(it.dataset.id,it.dataset.t,it.dataset.src)})})};
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
