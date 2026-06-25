PROGRAMS['12week'] = {
  id: '12week',
  name: '12-Week Periodization',
  description: 'Accumulation → Intensification → Peak Strength',
  weeks: 12,
  days: 4,
  useTM: false, // uses % of 1RM directly
  warmupRows: 2, // number of warmup rows (60%/80% of working load)
  feedbackType: 'rpe',
  rpeAdjustment: {
    lowThreshold: 5,
    highThreshold: 9,
    consecutiveSessions: 2,
    adjustmentPct: 2.5
  },
  dayLifts: ['Back Squat','Bench Press','Deadlift','Shoulder Press'],
  weeklyScheme: [
    {phase:'Accumulation',    sets:5, reps:5, pct:0.750, deload:false},
    {phase:'Accumulation',    sets:5, reps:5, pct:0.775, deload:false},
    {phase:'Accumulation',    sets:5, reps:5, pct:0.800, deload:false},
    {phase:'Deload',          sets:3, reps:5, pct:0.600, deload:true},
    {phase:'Intensification', sets:5, reps:4, pct:0.825, deload:false},
    {phase:'Intensification', sets:5, reps:4, pct:0.850, deload:false},
    {phase:'Intensification', sets:5, reps:3, pct:0.875, deload:false},
    {phase:'Deload',          sets:3, reps:4, pct:0.650, deload:true},
    {phase:'Peak Strength',   sets:5, reps:3, pct:0.900, deload:false},
    {phase:'Peak Strength',   sets:4, reps:2, pct:0.925, deload:false},
    {phase:'Peak Strength',   sets:3, reps:2, pct:0.950, deload:false},
    {phase:'Deload / Test',   sets:3, reps:3, pct:0.600, deload:true},
  ],
  accessories: {
    1: [], 2: [], 3: [], 4: []
  }
};
