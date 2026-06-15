const ROOMS = {
  living:[
    {name:"Living Area",code:"B-19",floor:"Basement",count:1},
    {name:"Separate Villa – Sitting Area",code:"B-39",floor:"Basement",count:1},
    {name:"Separate Villa – Family Living",code:"GF-31",floor:"Ground Floor",count:1},
    {name:"TV Sitting Area",code:"F.F-08",floor:"First Floor",count:1},
    {name:"Separate Villa – Living",code:"F.F-50",floor:"First Floor",count:1},
    {name:"Hall Way – Hidden Closet",code:"F1-01",floor:"First Floor",count:2},
    {name:"Separate Villa – Hall Way – Hidden Closet",code:"F1-37",floor:"First Floor",count:1},
  ],
  bathrooms:[
    {name:"Swimming Pool Area Bathroom Vanity",code:"B-05",floor:"Basement",count:2},
    {name:"Swimming Pool Area Shelf",code:"B-07",floor:"Basement",count:1},
    {name:"Swimming Pool Shelf",code:"B-08",floor:"Basement",count:1},
    {name:"Separate Villa – Bathroom Vanity",code:"B-35/36",floor:"Basement",count:2},
    {name:"Men Majles Bathroom Vanity",code:"GF-10",floor:"Ground Floor",count:1},
    {name:"Women Majles Bathroom Vanity",code:"GF-18",floor:"Ground Floor",count:1},
    {name:"Kitchen Area Bathroom Vanity",code:"GF",floor:"Ground Floor",count:1},
    {name:"Stair Area Bathroom Vanity",code:"GF-Stair",floor:"Ground Floor",count:1},
    {name:"Separate Villa – Bathroom Vanity",code:"GF-37",floor:"Ground Floor",count:1},
    {name:"Boys Bathroom Vanity",code:"F1-04/10/13/42",floor:"First Floor",count:4},
    {name:"Girls Bathroom Vanity",code:"F1-23/26/29/40",floor:"First Floor",count:4},
    {name:"Separate Villa – Master Bathroom Vanity",code:"F1-36",floor:"First Floor",count:1},
    {name:"Owner Stairs Bathroom Vanity",code:"F1-Stair",floor:"First Floor",count:2},
    {name:"Separate Villa – Bathroom Vanity",code:"F1-48",floor:"First Floor",count:1},
    {name:"Master Bathroom Vanity",code:"RF-14",floor:"Roof",count:1},
    {name:"Master Bathroom Vanity",code:"RF-22",floor:"Roof",count:1},
    {name:"Shelf for Area",code:"RF-23S",floor:"Roof",count:1},
    {name:"Vanity",code:"RF-23V",floor:"Roof",count:1},
    {name:"TENT Bathroom Vanity",code:"TENT",floor:"External",count:1},
    {name:"مغسلة العينة",code:"SAMPLE",floor:"—",count:1,notes:"تم التصنيع — خطأ في القياس — يجري التعديل",initStatus:"error",initPct:40},
  ],
  bedrooms:[
    {name:"Master Room (Cladding + TV Unit + Desk)",code:"F1-33",floor:"First Floor",count:1},
    {name:"Master Room (Cladding فقط)",code:"MR-CLAD",floor:"—",count:2,contents:"كلادينج فقط"},
    {name:"Boys Rooms (Cladding + TV Unit + Desk)",code:"F1-05/11/14/41",floor:"First Floor",count:4},
    {name:"Girls Rooms (Cladding + TV Unit + Desk)",code:"F1-22/25/30/38",floor:"First Floor",count:4},
    {name:"Maid Rooms (Bed + Bedside + Closet)",code:"Maid",floor:"—",count:6},
    {name:"Gym / جيم",code:"GYM-01",floor:"—",count:1,contents:""},
  ],
  majles:[
    {name:"Guest Majles",code:"GF-14",floor:"Ground Floor",count:3,
     size:"800w × 300d × 2800h mm",
     specs:"Internal: HPL 18mm Marine Ply + ABS. External: Wood veneer 25mm MR MDF semi-gloss PU + PYO, mesh glass panel, indirect LED."},
    {name:"Guest Dining",code:"GF-09",floor:"Ground Floor",count:3,
     size:"800w × 300d × 3350h mm",
     specs:"Internal: HPL 18mm Marine Ply + ABS. External: Wood veneer 25mm MR MDF semi-gloss PU + PYO, mesh glass panel, indirect LED."},
    {name:"Separate Villa – Abaya Room",code:"GF-36",floor:"Ground Floor",count:1},
  ],
  abaya:[
    {name:"Abaya Cabinet – GF-08 ABAYA & GF-13 SAS",code:"GF-08/13",floor:"Ground Floor",count:3,
     size:"3300w × 600d × 7600h mm",
     specs:"Internal: HPL 18mm Marine Ply + ABS. External: Wood veneer 25mm MR MDF semi-gloss PU + PYO + SS inserts, indirect LED with sensor."},
  ]
};

const MASHRABIAT = [
  {t:"مشربية",s:"1900×3610mm",c:3},{t:"مشربية",s:"1860×3610mm",c:2},{t:"مشربية",s:"1900×3580mm",c:1},
  {t:"مشربية",s:"1900×3600mm",c:3},{t:"مشربية",s:"800×3880mm",c:3},{t:"مشربية",s:"400×3740mm",c:2},
  {t:"مشربية",s:"400×3690mm",c:2},{t:"مشربية",s:"170×2100mm",c:8},{t:"مشربية",s:"170×2140mm",c:2},
  {t:"مشربية",s:"170×1400mm",c:2},{t:"مشربية",s:"170×800mm",c:3},{t:"مشربية",s:"700×4800mm",c:1},
  {t:"مشربية",s:"3300×7600mm",c:3},
  {t:"إطار Frame",s:"2100×7111mm",c:2},{t:"إطار Frame",s:"3700×2100mm",c:2},{t:"إطار Frame",s:"3700×300mm",c:8},
  {t:"إطار Frame",s:"3700×300mm",c:2},{t:"إطار Frame",s:"7230×2100mm",c:2},{t:"إطار Frame",s:"7220×2400mm",c:8},
  {t:"إطار Frame",s:"7220×2140mm",c:2},{t:"إطار Frame",s:"7400×300mm",c:3},{t:"إطار Frame",s:"7200×2100mm",c:6},
  {t:"إطار Frame",s:"7200×1000mm",c:8},{t:"إطار Frame",s:"3700×1000mm",c:4},{t:"إطار Frame",s:"7400×4000mm",c:1},
  {t:"إطار Frame",s:"7000×5000mm",c:2},{t:"إطار Frame",s:"2200×1600mm",c:1},{t:"إطار Frame",s:"3390×860mm",c:1},
  {t:"إطار Frame",s:"3390×1260mm",c:2},{t:"إطار Frame",s:"3300×3150mm",c:11},
];

const TEAM=[
  {name:"ياسر",role:"مسؤول القياسات",icon:"📐"},
  {name:"مهندس علي",role:"مسؤول التصاميم",icon:"✏️"},
  {name:"محمود",role:"جدولة التصنيع والتركيب",icon:"📅"},
  {name:"مشاعل",role:"المكتب الفني — تدقيق الطلبات",icon:"✅"},
  {name:"دروقا",role:"مسؤول التصنيع",icon:"🏭"},
  {name:"زكي",role:"التركيب ونسبة الإنجاز",icon:"🔧"},
  {name:"أحمد فكري",role:"مهندس المشروع",icon:"👷"},
  {name:"ماجد",role:"مسؤول المشتريات",icon:"🛒"},
  {name:"وليد (مالية)",role:"المسؤول المالي",icon:"💰"},
  {name:"شركة اللامع",role:"الدهان / التقطيع / الستيل",icon:"🔩"},
  {name:"وليد (اللامع)",role:"منسق شركة اللامع",icon:"🤝"},
];

const STAGES=[
  {id:"schedule",label:"جدولة (محمود)",who:"محمود"},
  {id:"install_pct",label:"تركيب — زكي",who:"زكي"},
  {id:"installed",label:"تم التركيب",who:"زكي"},
  {id:"internal_check",label:"فحص داخلي (مدير المشروع)",who:"أحمد فكري"},
  {id:"consultant_check",label:"تم التشيك الاستشاري",who:"استشاري"},
  {id:"handover",label:"تم التسليم",who:""},
];

const APPROVAL_QS=[
  "هل المخطط التنفيذي تم اعتماده؟",
  "هل تم اعتماد القياسات؟",
  "هل تمت الموافقة على العمل في الفراغ؟",
];

const STATUS_LABELS={pending:"في الانتظار",progress:"قيد التنفيذ",done:"منجز",error:"يحتاج تعديل"};
const STATUS_CLASS={pending:"b-wait",progress:"b-prog",done:"b-done",error:"b-err"};

// ===================== STATE =====================
let state={
  rooms:{},        // keyed by uid
  mashrabiat:{},   // index → {status,notes}
  alerts:[
    {id:1,type:"err",icon:"🚨",title:"مغسلة العينة — خطأ في القياس",text:"تم التصنيع ولكن يوجد خطأ في القياس، يجري التعديل. المسؤول: دروقا / مهندس علي",dismissed:false},
    {id:2,type:"warn",icon:"⏰",title:"تذكير — الأسبوع القادم",text:"يجب البدء بالعمل على الغرفة رقم 8. تأكد من القياسات والتصاميم والجدولة.",dismissed:false},
    {id:3,type:"info",icon:"📋",title:"مراجعة طلبات (Check Orders)",text:"مشاعل: تدقيق الطلبات والتأكد من مطابقة المواصفات قبل إحالتها للتصنيع.",dismissed:false},
  ],
  supply:[],       // supply orders
  vendors:[
    {id:"v1",name:"شركة اللامع",work:"الدهان، التقطيع، الستيل، المشربيات، الإطارات",status:"agreed"},
  ],
  extraRooms:{living:[],bathrooms:[],bedrooms:[],majles:[],abaya:[]},
};
let alertIdSeq=100, supplyIdSeq=1, vendorIdSeq=10;

// Build initial room states
function allRoomList(){
  const list=[];
  for(const cat of Object.keys(ROOMS)){
    ROOMS[cat].forEach(r=>list.push({...r,cat}));
  }
  // extra rooms
  for(const cat of Object.keys(state.extraRooms)){
    state.extraRooms[cat].forEach(r=>list.push({...r,cat}));
  }
  return list;
}

function roomUID(r){ return r.code+'_'+r.cat; }

function ensureRoomState(r){
  const uid=roomUID(r);
  if(!state.rooms[uid]){
    state.rooms[uid]={
      status:r.initStatus||'pending',
      pct:r.initPct||0,
      installPct:0,
      stagesDone:{},
      approvals:{0:'',1:'',2:''},
      checklist:[false,false,false,false,false,false],
      notes:r.notes||'',
      contents:r.contents||'',
      media:[],
      sizes:'',
      supplyReq:'',
      supplyStatus:'',
      supplyTracking:'',
      workers:[],
    };
  }
  return state.rooms[uid];
}

function initAllStates(){
  allRoomList().forEach(r=>ensureRoomState(r));
}

// ===================== RENDER HELPERS =====================
function badge(s){ return `<span class="badge ${STATUS_CLASS[s]||'b-wait'}">${STATUS_LABELS[s]||s}</span>`; }

function progBar(pct,id=''){
  return `<div class="prog-bg"><div class="prog-fill" ${id?`id="${id}"`:''} style="width:${pct}%"></div></div>
          <div class="prog-row"><span></span><span>${pct}%</span></div>`;
}

function alertTypeClass(t){ return {err:'a-err',warn:'a-warn',info:'a-info',ok:'a-ok',purple:'a-purple'}[t]||'a-info'; }

// ===================== NAVIGATION =====================
function showPage(id, el){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  if(el) el.classList.add('active');
  refreshPage(id);
}

function refreshPage(id){
  if(id==='dashboard') buildDashboard();
  else if(id==='alerts') buildAlerts();
  else if(id==='living') buildGrid('living');
  else if(id==='bathrooms') buildGrid('bathrooms');
  else if(id==='bedrooms') buildGrid('bedrooms');
  else if(id==='majles') buildGrid('majles');
  else if(id==='mashrabiat') buildMash();
  else if(id==='abaya') buildGrid('abaya');
  else if(id==='supply') buildSupply();
  else if(id==='vendors') buildVendors();
  else if(id==='team') buildTeam();
}

function refreshAll(){
  const active=document.querySelector('.page.active');
  if(active) refreshPage(active.id.replace('page-',''));
  updateSidebarBadge();
}

function updateSidebarBadge(){
  const count=state.alerts.filter(a=>!a.dismissed).length;
  document.getElementById('sb-alert-count').textContent=count;
  document.getElementById('sb-alert-count').style.display=count?'':'none';
}

// ===================== DASHBOARD =====================
function buildDashboard(){
  const all=allRoomList();
  const total=all.length;
  const done=all.filter(r=>(state.rooms[roomUID(r)]||{}).status==='done').length;
  const inprog=all.filter(r=>(state.rooms[roomUID(r)]||{}).status==='progress').length;
  const avgPct=total?Math.round(all.reduce((s,r)=>s+((state.rooms[roomUID(r)]||{}).pct||0),0)/total):0;

  document.getElementById('dash-cards').innerHTML=`
    <div class="stat-card"><div class="stat-label">الإنجاز الكلي</div><div class="stat-value">${avgPct}%</div>
      ${progBar(avgPct)}</div>
    <div class="stat-card"><div class="stat-label">إجمالي الفراغات</div><div class="stat-value">${total}</div><div class="stat-sub">غرفة / فراغ</div></div>
    <div class="stat-card"><div class="stat-label">منجزة</div><div class="stat-value" style="color:var(--green)">${done}</div><div class="stat-sub">مكتمل</div></div>
    <div class="stat-card"><div class="stat-label">قيد التنفيذ</div><div class="stat-value" style="color:var(--orange)">${inprog}</div><div class="stat-sub">يجري العمل</div></div>
    <div class="stat-card"><div class="stat-label">تنبيهات نشطة</div><div class="stat-value" style="color:var(--red)">${state.alerts.filter(a=>!a.dismissed).length}</div><div class="stat-sub">إشعار</div></div>
  `;

  const rows=all.slice(0,20).map(r=>{
    const st=state.rooms[roomUID(r)]||{};
    const pct=st.pct||0;
    const curStage=STAGES.filter(s=>st.stagesDone&&st.stagesDone[s.id]).pop();
    return `<tr onclick="openRoomModal('${roomUID(r)}')" style="cursor:pointer">
      <td>${r.name}</td><td><span style="font-size:10px;color:var(--gold)">${r.code}</span></td>
      <td style="color:var(--mid)">${r.count}</td>
      <td>${badge(st.status||'pending')}</td>
      <td><div style="display:flex;align-items:center;gap:7px;min-width:90px">
        <div class="prog-bg" style="flex:1"><div class="prog-fill" style="width:${pct}%"></div></div>
        <span style="font-size:10px;color:var(--mid);min-width:26px">${pct}%</span></div></td>
      <td style="font-size:11px;color:var(--mid)">${curStage?curStage.label:'—'}</td>
    </tr>`;
  }).join('');
  document.getElementById('dash-table').innerHTML=rows||'<tr><td colspan="6" style="text-align:center;color:var(--mid);padding:20px">لا توجد بيانات</td></tr>';
}

// ===================== ALERTS =====================
function buildAlerts(){
  const el=document.getElementById('alerts-container');
  const active=state.alerts.filter(a=>!a.dismissed);
  if(!active.length){el.innerHTML='<div style="text-align:center;color:var(--mid);padding:40px">لا توجد تنبيهات نشطة</div>';return;}
  el.innerHTML=active.map(a=>`
    <div class="notif-item ${alertTypeClass(a.type)}">
      <div style="font-size:16px">${a.icon}</div>
      <div style="flex:1"><div class="alert-title">${a.title}</div><div class="alert-text">${a.text}</div></div>
      <button class="notif-close" onclick="dismissAlert(${a.id})">إغلاق</button>
    </div>`).join('');
  updateSidebarBadge();
}

function dismissAlert(id){
  const a=state.alerts.find(x=>x.id===id);
  if(a) a.dismissed=true;
  buildAlerts(); updateSidebarBadge();
}

function addManualAlert(){
  const types=['err','warn','info','ok','purple'];
  const icons={err:'🚨',warn:'⚠️',info:'📋',ok:'✅',purple:'🔔'};
  const typeLabels={err:'تأخير عاجل',warn:'تحذير',info:'معلومات',ok:'موافقة',purple:'تذكير'};
  const catOptions=Object.entries(typeLabels).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
  openGenericModal('إضافة تنبيه يدوي',`
    <div class="field-wrap"><div class="field-label">نوع التنبيه</div>
      <select id="na-type">${catOptions}</select></div>
    <div class="field-wrap"><div class="field-label">العنوان</div><input type="text" id="na-title" placeholder="عنوان التنبيه"></div>
    <div class="field-wrap"><div class="field-label">التفاصيل</div><textarea id="na-text" placeholder="تفاصيل التنبيه..."></textarea></div>
    <div style="display:flex;gap:8px;margin-top:10px">
      <button class="btn btn-gold" onclick="saveManualAlert()">حفظ التنبيه</button>
      <button class="btn btn-outline" onclick="document.getElementById('modal-overlay').classList.remove('open')">إلغاء</button>
    </div>`);
}

function saveManualAlert(){
  const t=document.getElementById('na-type').value;
  const title=document.getElementById('na-title').value.trim();
  const text=document.getElementById('na-text').value.trim();
  const icons={err:'🚨',warn:'⚠️',info:'📋',ok:'✅',purple:'🔔'};
  if(!title) return;
  state.alerts.push({id:++alertIdSeq,type:t,icon:icons[t],title,text,dismissed:false});
  document.getElementById('modal-overlay').classList.remove('open');
  buildAlerts(); updateSidebarBadge();
}

// ===================== ROOM GRID =====================
function buildGrid(cat){
  const list=[...(ROOMS[cat]||[]),...(state.extraRooms[cat]||[])];
  const el=document.getElementById('grid-'+cat);
  if(!el) return;
  el.innerHTML=list.map(r=>{
    const uid=roomUID(r); const st=ensureRoomState(r);
    const pct=st.pct||0;
    const approvedCount=Object.values(st.approvals).filter(v=>v==='approved'||v==='ready').length;
    return `<div class="room-card" onclick="openRoomModal('${uid}')">
      <div class="room-card-head"><span class="room-code">${r.code}</span>${badge(st.status||'pending')}</div>
      <div class="room-name">${r.name}</div>
      <div class="room-count">العدد: ${r.count} | ${r.floor||''}</div>
      ${r.contents!==undefined?`<div style="font-size:11px;color:var(--gold-light);margin-top:3px">📝 ${r.contents||'المحتويات: غير محددة بعد'}</div>`:''}
      <div style="margin-top:10px">${progBar(pct)}</div>
      ${approvedCount>0?`<div style="margin-top:6px;font-size:10px;color:#74B9FF">✓ ${approvedCount}/3 اعتمادات</div>`:''}
    </div>`;
  }).join('');
}

// ===================== ROOM MODAL =====================
function findRoomByUID(uid){
  for(const cat of Object.keys(ROOMS)){
    const r=ROOMS[cat].find(r=>roomUID({...r,cat})===uid);
    if(r) return {...r,cat};
  }
  for(const cat of Object.keys(state.extraRooms)){
    const r=(state.extraRooms[cat]||[]).find(r=>roomUID({...r,cat})===uid);
    if(r) return {...r,cat};
  }
  return null;
}

function openRoomModal(uid){
  const r=findRoomByUID(uid);
  if(!r) return;
  const st=ensureRoomState(r);

  document.getElementById('modal-title').textContent=r.name+' — '+r.code+(r.count>1?' (العدد: '+r.count+')':'');

  // Tabs
  const tabs=['تفاصيل','الاعتمادات','مراحل الإنجاز','التوريد والعمالة','وسائط وملاحظات'];
  const tabsHTML=tabs.map((t,i)=>`<button class="tab-btn ${i===0?'active':''}" onclick="switchTab(${i},this)">${t}</button>`).join('');

  // TAB 0 — DETAILS
  const statusBtns=Object.keys(STATUS_LABELS).map(s=>`<button class="btn btn-sm ${st.status===s?'btn-gold':'btn-outline'}" onclick="setStatus('${uid}','${s}')">${STATUS_LABELS[s]}</button>`).join(' ');
  let specsHTML='';
  if(r.size) specsHTML+=`<div style="margin-bottom:7px"><span class="field-label">القياس</span><br><span class="size-tag">${r.size}</span></div>`;
  if(r.specs) specsHTML+=`<div class="spec-box">${r.specs}</div>`;

  const tab0=`
    ${specsHTML?`<div class="msec"><div class="msec-title">المواصفات</div>${specsHTML}</div>`:''}
    <div class="msec">
      <div class="msec-title">محتويات الفراغ</div>
      <div class="field-wrap"><textarea id="rm-contents" placeholder="مثال: كلادينج + وحدة تلفزيون + مكتب..." onchange="saveField('${uid}','contents',this.value)">${st.contents||''}</textarea></div>
    </div>
    <div class="msec">
      <div class="msec-title">الحالة</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${statusBtns}</div>
    </div>
    <div class="msec">
      <div class="msec-title">نسبة الإنجاز الكلية</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
        <input type="range" min="0" max="100" step="5" value="${st.pct}" style="flex:1" oninput="setPct('${uid}',this.value,this)">
        <span id="pct-val" style="font-size:16px;font-weight:700;color:var(--gold);min-width:34px">${st.pct}%</span>
      </div>
      <div class="prog-bg"><div class="prog-fill" id="pct-bar" style="width:${st.pct}%"></div></div>
    </div>`;

  // TAB 1 — APPROVALS
  const apprOpts=val=>`
    <option value="" ${val===''?'selected':''}>— غير محدد —</option>
    <option value="approved" ${val==='approved'?'selected':''}>تم الاعتماد والموافقة</option>
    <option value="ready" ${val==='ready'?'selected':''}>جاهز للعمل</option>`;
  const tab1=`
    <div style="font-size:12px;color:var(--mid);margin-bottom:12px">الاعتمادات تؤخذ من: <strong style="color:var(--gold)">أحمد فكري</strong></div>
    ${APPROVAL_QS.map((q,i)=>`
      <div class="appr-row">
        <div class="appr-q">${q}</div>
        <select class="appr-sel" onchange="setApproval('${uid}',${i},this.value)">${apprOpts(st.approvals[i]||'')}</select>
      </div>`).join('')}`;

  // TAB 2 — STAGES
  const tab2=`
    <div style="margin-bottom:12px">
      <div class="msec-title">المراحل</div>
      <div class="stage-row">
        ${STAGES.map(s=>{
          const isDone=st.stagesDone[s.id];
          const isInstall=s.id==='install_pct';
          return `<div class="stage-pill ${isDone?'done-stage':''}" onclick="toggleStage('${uid}','${s.id}',this)">
            ${isDone?'✓ ':''}${s.label}${s.who?`<span style="font-size:9px;display:block;opacity:.7">${s.who}</span>`:''}
          </div>`;
        }).join('')}
      </div>
    </div>
    <div class="msec">
      <div class="msec-title">نسبة إنجاز التركيب (زكي)</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
        <input type="range" min="0" max="100" step="5" value="${st.installPct||0}" style="flex:1" oninput="setInstallPct('${uid}',this.value,this)">
        <span id="ipct-val" style="font-size:15px;font-weight:700;color:var(--orange);min-width:34px">${st.installPct||0}%</span>
      </div>
      <div class="prog-bg"><div class="prog-fill" id="ipct-bar" style="width:${st.installPct||0}%;background:var(--orange)"></div></div>
    </div>`;

  // TAB 3 — SUPPLY / WORKERS
  const workersHTML=(st.workers||[]).map((w,i)=>`
    <span class="worker-tag">${w.count}× ${w.role}<span class="worker-tag-del" onclick="removeWorker('${uid}',${i})">✕</span></span>`).join('');
  const tab3=`
    <div class="msec">
      <div class="msec-title">طلب المشتريات</div>
      <div class="field-wrap"><textarea id="rm-supply" placeholder="اكتب تفاصيل طلب المشتريات..." onchange="saveField('${uid}','supplyReq',this.value)">${st.supplyReq||''}</textarea></div>
      <div class="two-col">
        <div class="field-wrap"><div class="field-label">حالة الموافقة</div>
          <select onchange="saveField('${uid}','supplyStatus',this.value)">
            <option value="" ${!st.supplyStatus?'selected':''}>— غير محدد —</option>
            <option value="pending" ${st.supplyStatus==='pending'?'selected':''}>في الانتظار</option>
            <option value="approved" ${st.supplyStatus==='approved'?'selected':''}>تمت الموافقة</option>
            <option value="rejected" ${st.supplyStatus==='rejected'?'selected':''}>مرفوض</option>
          </select></div>
        <div class="field-wrap"><div class="field-label">تتبع الطلب / موقع الشحنة</div>
          <input type="text" placeholder="وصل للمصنع / في الطريق..." value="${st.supplyTracking||''}" onchange="saveField('${uid}','supplyTracking',this.value)"></div>
      </div>
    </div>
    <div class="msec">
      <div class="msec-title">طلب العمالة</div>
      <div style="margin-bottom:8px">${workersHTML||'<span style="font-size:11px;color:var(--mid)">لا يوجد عمال مضافون بعد</span>'}</div>
      <div style="display:flex;gap:6px;align-items:flex-end">
        <div style="flex:0 0 70px"><div class="field-label">العدد</div><input type="number" id="w-count" min="1" max="20" value="1" style="width:70px"></div>
        <div style="flex:1"><div class="field-label">الوظيفة</div><input type="text" id="w-role" placeholder="مثال: نجار، عامل تركيب..."></div>
        <button class="btn btn-gold btn-sm" onclick="addWorker('${uid}')">إضافة</button>
      </div>
    </div>`;

  // TAB 4 — MEDIA / NOTES
  const tab4=`
    <div class="msec">
      <div class="msec-title">القياسات</div>
      <div class="field-wrap"><textarea id="rm-sizes" placeholder="سجّل القياسات هنا..." onchange="saveField('${uid}','sizes',this.value)">${st.sizes||''}</textarea></div>
    </div>
    <div class="msec">
      <div class="msec-title">ملاحظات</div>
      <div class="field-wrap"><textarea id="rm-notes" placeholder="ملاحظات عامة..." onchange="saveField('${uid}','notes',this.value)">${st.notes||''}</textarea></div>
    </div>
    <div class="msec">
      <div class="msec-title">رفع صور / وسائط</div>
      <div style="background:var(--dark3);border:1px dashed var(--border);border-radius:6px;padding:20px;text-align:center;color:var(--mid);font-size:12px">
        📎 اسحب الصور هنا أو <label style="color:var(--gold);cursor:pointer">اختر ملفات<input type="file" accept="image/*" multiple style="display:none" onchange="handleMedia('${uid}',this)"></label>
      </div>
      <div id="media-preview-${uid.replace(/[^a-zA-Z0-9]/g,'_')}" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px">${(st.media||[]).map(m=>`<img src="${m}" style="width:70px;height:70px;object-fit:cover;border-radius:5px;border:1px solid var(--border)">`).join('')}</div>
    </div>`;

  document.getElementById('modal-body').innerHTML=`
    <div class="tab-row">${tabsHTML}</div>
    <div class="tab-content active" id="tab-0">${tab0}</div>
    <div class="tab-content" id="tab-1">${tab1}</div>
    <div class="tab-content" id="tab-2">${tab2}</div>
    <div class="tab-content" id="tab-3">${tab3}</div>
    <div class="tab-content" id="tab-4">${tab4}</div>`;

  document.getElementById('modal-overlay').classList.add('open');
}

function switchTab(i,el){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-'+i).classList.add('active');
}

function saveField(uid,field,val){ ensureRoomState(findRoomByUID(uid)||{code:uid.split('_')[0],cat:uid.split('_')[1]})[field]=val; }

function setStatus(uid,s){
  const st=state.rooms[uid];
  if(!st) return;
  st.status=s;
  if(s==='done') st.pct=100;
  openRoomModal(uid); refreshAll();
}

function setPct(uid,val,el){
  const st=state.rooms[uid]; if(!st) return;
  st.pct=parseInt(val);
  document.getElementById('pct-val').textContent=val+'%';
  document.getElementById('pct-bar').style.width=val+'%';
  refreshAll();
}

function setInstallPct(uid,val,el){
  const st=state.rooms[uid]; if(!st) return;
  st.installPct=parseInt(val);
  document.getElementById('ipct-val').textContent=val+'%';
  document.getElementById('ipct-bar').style.width=val+'%';
}

function toggleStage(uid,stageId,el){
  const st=state.rooms[uid]; if(!st) return;
  st.stagesDone[stageId]=!st.stagesDone[stageId];
  el.classList.toggle('done-stage');
  el.textContent=(st.stagesDone[stageId]?'✓ ':'')+STAGES.find(s=>s.id===stageId).label;
}

function setApproval(uid,idx,val){
  const st=state.rooms[uid]; if(!st) return;
  st.approvals[idx]=val;
}

function addWorker(uid){
  const count=parseInt(document.getElementById('w-count').value)||1;
  const role=document.getElementById('w-role').value.trim();
  if(!role) return;
  const st=state.rooms[uid]; if(!st) return;
  st.workers.push({count,role});
  openRoomModal(uid);
}

function removeWorker(uid,idx){
  const st=state.rooms[uid]; if(!st) return;
  st.workers.splice(idx,1);
  openRoomModal(uid);
}

function handleMedia(uid,input){
  const st=state.rooms[uid]; if(!st) return;
  const files=Array.from(input.files);
  files.forEach(f=>{
    const r=new FileReader();
    r.onload=e=>{
      st.media.push(e.target.result);
      const safeUID=uid.replace(/[^a-zA-Z0-9]/g,'_');
      const prev=document.getElementById('media-preview-'+safeUID);
      if(prev){ const img=document.createElement('img'); img.src=e.target.result; img.style.cssText='width:70px;height:70px;object-fit:cover;border-radius:5px;border:1px solid var(--border)'; prev.appendChild(img); }
    };
    r.readAsDataURL(f);
  });
}

function closeModal(e){ if(e.target===document.getElementById('modal-overlay')){ document.getElementById('modal-overlay').classList.remove('open'); refreshAll(); } }

// ===================== ADD ROOM =====================
function showAddRoom(cat){
  const divId='addroom-'+cat;
  const div=document.getElementById(divId);
  if(!div) return;
  div.style.display='block';
  div.innerHTML=`
    <div class="add-room-form" style="margin-top:16px">
      <div style="font-size:13px;font-weight:600;color:var(--gold);margin-bottom:12px">إضافة فراغ جديد</div>
      <div class="two-col">
        <div class="field-wrap"><div class="field-label">اسم الفراغ</div><input type="text" id="nr-name" placeholder="اسم الفراغ"></div>
        <div class="field-wrap"><div class="field-label">الرمز (Code)</div><input type="text" id="nr-code" placeholder="مثال: F1-99"></div>
      </div>
      <div class="two-col">
        <div class="field-wrap"><div class="field-label">الدور</div><input type="text" id="nr-floor" placeholder="Ground Floor, First Floor..."></div>
        <div class="field-wrap"><div class="field-label">العدد</div><input type="number" id="nr-count" value="1" min="1"></div>
      </div>
      <div class="field-wrap"><div class="field-label">المحتويات (اختياري)</div><input type="text" id="nr-contents" placeholder="مثال: كلادينج + وحدة تلفزيون..."></div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-gold" onclick="saveNewRoom('${cat}')">حفظ الفراغ</button>
        <button class="btn btn-outline" onclick="document.getElementById('${divId}').style.display='none'">إلغاء</button>
      </div>
    </div>`;
}

function saveNewRoom(cat){
  const name=document.getElementById('nr-name').value.trim();
  const code=document.getElementById('nr-code').value.trim();
  const floor=document.getElementById('nr-floor').value.trim();
  const count=parseInt(document.getElementById('nr-count').value)||1;
  const contents=document.getElementById('nr-contents').value.trim();
  if(!name||!code) return alert('الاسم والرمز مطلوبان');
  state.extraRooms[cat].push({name,code,floor,count,contents,cat});
  document.getElementById('addroom-'+cat).style.display='none';
  initAllStates();
  buildGrid(cat);
}

// ===================== MASHRABIAT =====================
function buildMash(){
  if(!state.mashrabiat) state.mashrabiat={};
  document.getElementById('mash-table').innerHTML=MASHRABIAT.map((m,i)=>{
    const s=state.mashrabiat[i]||{status:'pending',notes:''};
    return `<tr>
      <td><span class="badge ${m.t.includes('إطار')?'b-approved':'b-wait'}">${m.t}</span></td>
      <td><span class="size-tag">${m.s}</span></td>
      <td style="color:var(--gold);font-weight:600">${m.c}</td>
      <td><select style="font-size:11px;background:var(--dark3);border:1px solid var(--border);border-radius:4px;color:var(--light);padding:3px 6px" onchange="setMashStatus(${i},this.value)">
        <option value="pending" ${s.status==='pending'?'selected':''}>في الانتظار</option>
        <option value="progress" ${s.status==='progress'?'selected':''}>قيد التنفيذ</option>
        <option value="done" ${s.status==='done'?'selected':''}>منجز</option>
      </select></td>
      <td><input type="text" value="${s.notes||''}" placeholder="ملاحظة..." style="font-size:11px;padding:4px 7px" onchange="setMashNotes(${i},this.value)"></td>
    </tr>`;
  }).join('');
}

function setMashStatus(i,v){ if(!state.mashrabiat) state.mashrabiat={}; if(!state.mashrabiat[i]) state.mashrabiat[i]={}; state.mashrabiat[i].status=v; }
function setMashNotes(i,v){ if(!state.mashrabiat) state.mashrabiat={}; if(!state.mashrabiat[i]) state.mashrabiat[i]={}; state.mashrabiat[i].notes=v; }

// ===================== SUPPLY CHAIN =====================
function buildSupply(){
  const el=document.getElementById('supply-list');
  if(!state.supply.length){ el.innerHTML='<div style="text-align:center;color:var(--mid);padding:40px">لا توجد طلبات مشتريات. اضغط "+ طلب جديد" لإضافة طلب.</div>'; return; }
  el.innerHTML=state.supply.map((o,i)=>`
    <div class="tbl-wrap" style="padding:16px;margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;margin-bottom:12px">
        <div style="font-size:14px;font-weight:600;color:var(--gold)">طلب #${o.id}</div>
        <button class="btn btn-red btn-sm" onclick="deleteSupply(${i})">حذف</button>
      </div>
      <div class="sc-grid">
        <div class="sc-card"><div class="sc-card-title">تفاصيل الطلب</div>
          <textarea placeholder="تفاصيل الطلب..." onchange="updateSupply(${i},'req',this.value)" style="min-height:50px">${o.req||''}</textarea></div>
        <div class="sc-card"><div class="sc-card-title">حالة الموافقة</div>
          <select onchange="updateSupply(${i},'status',this.value)">
            <option value="" ${!o.status?'selected':''}>— غير محدد —</option>
            <option value="pending" ${o.status==='pending'?'selected':''}>في الانتظار</option>
            <option value="approved" ${o.status==='approved'?'selected':''}>تمت الموافقة</option>
            <option value="rejected" ${o.status==='rejected'?'selected':''}>مرفوض</option>
          </select></div>
        <div class="sc-card"><div class="sc-card-title">تتبع الطلب / موقع الشحنة</div>
          <input type="text" placeholder="وصل للمصنع / في الطريق / تم التسليم..." value="${o.tracking||''}" onchange="updateSupply(${i},'tracking',this.value)"></div>
        <div class="sc-card"><div class="sc-card-title">طلب العمالة</div>
          ${(o.workers||[]).map((w,wi)=>`<span class="worker-tag">${w.count}× ${w.role}<span class="worker-tag-del" onclick="removeSupplyWorker(${i},${wi})">✕</span></span>`).join('')}
          <div style="display:flex;gap:5px;margin-top:7px">
            <input type="number" id="sw-count-${i}" min="1" value="1" style="width:55px;font-size:11px">
            <input type="text" id="sw-role-${i}" placeholder="وظيفة..." style="font-size:11px">
            <button class="btn btn-gold btn-sm" onclick="addSupplyWorker(${i})">+</button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function addSupplyOrder(){ state.supply.push({id:++supplyIdSeq,req:'',status:'',tracking:'',workers:[]}); buildSupply(); }
function deleteSupply(i){ state.supply.splice(i,1); buildSupply(); }
function updateSupply(i,f,v){ if(state.supply[i]) state.supply[i][f]=v; }
function addSupplyWorker(i){ const c=parseInt(document.getElementById('sw-count-'+i).value)||1; const r=document.getElementById('sw-role-'+i).value.trim(); if(!r) return; state.supply[i].workers.push({count:c,role:r}); buildSupply(); }
function removeSupplyWorker(i,wi){ state.supply[i].workers.splice(wi,1); buildSupply(); }

// ===================== VENDORS =====================
function buildVendors(){
  const el=document.getElementById('vendors-list');
  el.innerHTML=state.vendors.map((v,i)=>`
    <div class="tbl-wrap" style="padding:16px;margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="font-size:14px;font-weight:600;color:var(--gold)">🏢 ${v.name}</div>
        ${v.id!=='v1'?`<button class="btn btn-red btn-sm" onclick="deleteVendor(${i})">حذف</button>`:''}
      </div>
      <div class="two-col">
        <div class="field-wrap"><div class="field-label">نوع العمل المطلوب</div>
          <textarea placeholder="اكتب المهام المطلوبة..." onchange="updateVendor(${i},'work',this.value)" style="min-height:60px">${v.work||''}</textarea></div>
        <div class="field-wrap"><div class="field-label">حالة الاتفاق والعمل</div>
          <div style="display:flex;flex-direction:column;gap:6px;margin-top:4px">
            <div class="vs-pill ${v.status==='agreed'?'vs-agreed':''}" onclick="setVendorStatus(${i},'agreed')">تم الاتفاق</div>
            <div class="vs-pill ${v.status==='done'?'vs-done':''}" onclick="setVendorStatus(${i},'done')">تم التنفيذ</div>
            <div class="vs-pill ${v.status==='ready'?'vs-ready':''}" onclick="setVendorStatus(${i},'ready')">جاهز للاستلام في الموقع</div>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function addVendor(){
  openGenericModal('إضافة شركة خارجية',`
    <div class="field-wrap"><div class="field-label">اسم الشركة</div><input type="text" id="nv-name" placeholder="اسم الشركة أو المورد"></div>
    <div class="field-wrap"><div class="field-label">نوع العمل</div><textarea id="nv-work" placeholder="وصف العمل المطلوب..."></textarea></div>
    <div style="display:flex;gap:8px;margin-top:10px">
      <button class="btn btn-gold" onclick="saveVendor()">إضافة</button>
      <button class="btn btn-outline" onclick="document.getElementById('modal-overlay').classList.remove('open')">إلغاء</button>
    </div>`);
}

function saveVendor(){
  const name=document.getElementById('nv-name').value.trim();
  const work=document.getElementById('nv-work').value.trim();
  if(!name) return;
  state.vendors.push({id:'v'+(++vendorIdSeq),name,work,status:'agreed'});
  document.getElementById('modal-overlay').classList.remove('open');
  buildVendors();
}

function deleteVendor(i){ state.vendors.splice(i,1); buildVendors(); }
function updateVendor(i,f,v){ if(state.vendors[i]) state.vendors[i][f]=v; }
function setVendorStatus(i,s){ if(state.vendors[i]){ state.vendors[i].status=s; buildVendors(); } }

// ===================== TEAM =====================
function buildTeam(){
  document.getElementById('team-grid').innerHTML=TEAM.map(t=>`
    <div style="background:var(--dark2);border:1px solid var(--border);border-radius:var(--radius);padding:14px;display:flex;align-items:center;gap:10px">
      <div style="width:36px;height:36px;border-radius:50%;background:var(--dark3);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0">${t.icon}</div>
      <div><div style="font-size:13px;font-weight:600;color:var(--light)">${t.name}</div><div style="font-size:11px;color:var(--mid);margin-top:1px">${t.role}</div></div>
    </div>`).join('');
}

// ===================== GENERIC MODAL =====================
function openGenericModal(title,bodyHTML){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-body').innerHTML=bodyHTML;
  document.getElementById('modal-overlay').classList.add('open');
}

// ===================== INIT =====================
document.getElementById('today-date').textContent=new Date().toLocaleDateString('ar-SA',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
initAllStates();
buildDashboard();
buildAlerts();
updateSidebarBadge();
