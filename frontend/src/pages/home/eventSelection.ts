import type { EventItem } from '@/services/eventsApi';

const relevantTerms=[
  // PCP core
  'project controls','project control','project management','pmo','planning',
  'scheduling','chpp','cpcm','masterclass','earned value','risk management',
  'portfolio','benefits management','programme','program management',
  'stage gates','cost management','schedule baseline','variance analysis',
  'dictum','event','improvement','profession','eligible','funding','employer',
  'work-based','apprenticeship','lod','end point assessment','epa',
  // PCP-adjacent (if connected to project controls)
  'risk register','issue register','change control','escalation','governance',
  'assurance','reporting','forecast','performance','baseline','contracts',
  'necc','quantity survey','cost plan','value engineering','schedule float'
];
const unrelatedTerms=[
  'marketing','chartered institute of marketing','cim','digital marketing',
  'marketing executive','marketing manager','social media','advertising',
  'brand','campaign','sales','business development','commercial',
  'commercial awareness','client liaison','account management',
  'product','service','general','public','general public','competition',
  'competition law','training','course','conference','seminar','webinar'
];

/** Prefer upcoming sessions, then fill the homepage with distinct recent real events. */
export function selectHomepageEvents(events:readonly EventItem[],now=Date.now(),limit=3):EventItem[] {
 const candidates=events.filter(event=>{
  if(event.state==='cancelled')return false;
  const text=[event.title,event.display_summary,event.category,...event.classifications.map(c=>c.name)].join(' ').toLowerCase();
  return !unrelatedTerms.some(term=>text.includes(term))&&!/\b(demo|sample|placeholder|test)\b/.test(text)&&relevantTerms.some(term=>text.includes(term));
 });
 const upcoming=(event:EventItem)=>event.state==='upcoming'&&(!event.starts_at||Date.parse(event.starts_at)>=now);
 const timestamp=(event:EventItem)=>Date.parse(event.starts_at??'')||0;
 candidates.sort((a,b)=>{
  const first=upcoming(a),second=upcoming(b);
  if(first!==second)return first?-1:1;
  return first?(timestamp(a)||Infinity)-(timestamp(b)||Infinity):timestamp(b)-timestamp(a);
 });
 const seen=new Set<string>();
 return candidates.filter(event=>{
  const key=event.title.replace(/^fully funded\s*[:—–-]?\s*/i,'').replace(/\s+/g,' ').trim().toLowerCase();
  if(seen.has(key))return false;
  seen.add(key);return true;
 }).slice(0,Math.max(0,limit));
}
