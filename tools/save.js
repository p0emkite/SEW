// IndexedDB persistence. Each write resolves only after transaction commit.
const SEW_SAVE=(()=>{
 const open=()=>new Promise((ok,no)=>{let r=indexedDB.open('SEW-campaign',1);r.onupgradeneeded=()=>r.result.createObjectStore('slots',{keyPath:'slot'});r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error);r.onblocked=()=>no(Error('저장소가 다른 탭에서 사용 중입니다.'));});
 async function transact(mode,fn){const d=await open();try{return await new Promise((ok,no)=>{let t=d.transaction('slots',mode),r=fn(t.objectStore('slots'));t.oncomplete=()=>ok(r.result);t.onabort=t.onerror=()=>no(t.error??r.error??Error('저장소 오류'));});}finally{d.close();}}
 const slotCheck=s=>{if(s!=='auto'&&(!Number.isInteger(s)||s<1||s>10))throw Error('잘못된 슬롯')};
 return {async save(slot,state){slotCheck(slot);return transact('readwrite',s=>s.put({slot,savedAt:new Date().toISOString(),state:JSON.parse(JSON.stringify(state))}));},async load(slot){slotCheck(slot);return transact('readonly',s=>s.get(slot));},async list(){return transact('readonly',s=>s.getAll());}};
})();
