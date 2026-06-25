PROGRAMS['531'] = {
  id: '531',
  name: '5/3/1 Wendler',
  description: 'Proven long-term strength program by Jim Wendler',
  weeks: 12,
  days: 4,
  useTM: true, // uses Training Max = 90% of 1RM
  tmPct: 0.90,
  warmupRows: 0, // no separate warmup rows
  feedbackType: 'rpe',
  rpeAdjustment: {
    lowThreshold: 5,
    highThreshold: 9,
    consecutiveSessions: 2,
    adjustmentPct: 2.5
  },
  lowerLifts: ['Back Squat','Deadlift'], // get +10lbs bump, upper gets +5lbs
  dayLifts: ['Back Squat','Bench Press','Deadlift','Shoulder Press'],
  // 4-week cycle repeating x3: 5s week, 3s week, 5/3/1 week, deload
  weeklyScheme: [
    // Cycle 1
    {phase:'5s Week',   sets:[{s:1,r:5,pct:0.65},{s:1,r:5,pct:0.75},{s:1,r:5,pct:0.85,amrap:true}], cycle:1},
    {phase:'3s Week',   sets:[{s:1,r:3,pct:0.70},{s:1,r:3,pct:0.80},{s:1,r:3,pct:0.90,amrap:true}], cycle:1},
    {phase:'5/3/1 Week',sets:[{s:1,r:5,pct:0.75},{s:1,r:3,pct:0.85},{s:1,r:1,pct:0.95,amrap:true}], cycle:1},
    {phase:'Deload',    sets:[{s:1,r:5,pct:0.40},{s:1,r:5,pct:0.50},{s:1,r:5,pct:0.60}], deload:true, cycle:1},
    // Cycle 2 (TM bumped in getTM)
    {phase:'5s Week',   sets:[{s:1,r:5,pct:0.65},{s:1,r:5,pct:0.75},{s:1,r:5,pct:0.85,amrap:true}], cycle:2},
    {phase:'3s Week',   sets:[{s:1,r:3,pct:0.70},{s:1,r:3,pct:0.80},{s:1,r:3,pct:0.90,amrap:true}], cycle:2},
    {phase:'5/3/1 Week',sets:[{s:1,r:5,pct:0.75},{s:1,r:3,pct:0.85},{s:1,r:1,pct:0.95,amrap:true}], cycle:2},
    {phase:'Deload',    sets:[{s:1,r:5,pct:0.40},{s:1,r:5,pct:0.50},{s:1,r:5,pct:0.60}], deload:true, cycle:2},
    // Cycle 3
    {phase:'5s Week',   sets:[{s:1,r:5,pct:0.65},{s:1,r:5,pct:0.75},{s:1,r:5,pct:0.85,amrap:true}], cycle:3},
    {phase:'3s Week',   sets:[{s:1,r:3,pct:0.70},{s:1,r:3,pct:0.80},{s:1,r:3,pct:0.90,amrap:true}], cycle:3},
    {phase:'5/3/1 Week',sets:[{s:1,r:5,pct:0.75},{s:1,r:3,pct:0.85},{s:1,r:1,pct:0.95,amrap:true}], cycle:3},
    {phase:'Deload',    sets:[{s:1,r:5,pct:0.40},{s:1,r:5,pct:0.50},{s:1,r:5,pct:0.60}], deload:true, cycle:3},
  ],
  accessories: {
    1: [{ex:'Romanian Deadlift',s:'3',r:'10'},{ex:'Leg Press',s:'3',r:'10'},{ex:'Calf Raises',s:'3',r:'15'}],
    2: [{ex:'Barbell Row',s:'3',r:'10'},{ex:'Face Pulls',s:'3',r:'15'},{ex:'Tricep Pushdown',s:'3',r:'12'}],
    3: [{ex:'Hip Thrust',s:'3',r:'10'},{ex:'Leg Curl',s:'3',r:'10'},{ex:'Back Extension',s:'3',r:'12'}],
    4: [{ex:'DB Row',s:'3',r:'10'},{ex:'Rear Delt Fly',s:'3',r:'15'},{ex:'Bicep Curl',s:'3',r:'12'}]
  }
};
