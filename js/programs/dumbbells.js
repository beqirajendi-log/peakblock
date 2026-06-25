PROGRAMS['dumbbells'] = {
  id: 'dumbbells',
  name: 'Dumbbells Only',
  weeks: 8,
  days: 3,
  totalWeeks: 8,
  daysPerWeek: 3,
  difficulty: 'beginner',
  progressionType: 'fixed',
  feedbackType: 'none',
  focusTags: ['hypertrophy', 'home', 'dumbbell'],
  description: 'A dumbbell-only Push/Pull/Legs hypertrophy routine. Uses double progression — work up to 12 reps on all 3 sets, then increase the weight. Runs as a 3-day cycle across 8 repeatable weeks.',
  whoIsItFor: 'Beginners and early intermediates who only have access to dumbbells, a bench, and a pull-up bar. If you have barbell access, consider a barbell program instead.',
  equipment: ['Adjustable dumbbells', 'Bench', 'Pull-up bar'],
  weeks_data: {}
};

(function() {
  const s3 = (reps, effort) => {
    const set = effort ? { reps, effort } : { reps };
    return [{ ...set }, { ...set }, { ...set }];
  };

  const pushDay = {
    label: 'Push',
    exercises: [
      { name: 'Dumbbell Chest Press',     tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Incline Dumbbell Fly',      tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Arnold Press',              tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Overhead Tricep Extension', tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Abs Crunches',              tier: 'main', sets: s3('12+') }
    ]
  };

  const pullDay = {
    label: 'Pull',
    exercises: [
      { name: 'Pull-ups / Lat Pulldown',  tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Bent-over Dumbbell Row',   tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Reverse Fly',              tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Dumbbell Bicep Curl',      tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Dumbbell Shrug',           tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Plank',                    tier: 'main', timeBase: true, sets: [{ reps: '1 min' }, { reps: '1 min' }, { reps: '1 min' }] }
    ]
  };

  const legsDay = {
    label: 'Legs',
    exercises: [
      { name: 'Goblet Squat',                 tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Dumbbell Lunge',               tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Single Leg Romanian Deadlift', tier: 'main', sets: s3('12+', 'medium') },
      { name: 'Bicycle Crunches',             tier: 'main', sets: s3('12+') }
    ]
  };

  for (let w = 1; w <= 8; w++) {
    PROGRAMS['dumbbells'].weeks_data['week' + w] = {
      label: 'Week ' + w,
      deload: false,
      days: {
        day1: { ...pushDay },
        day2: { ...pullDay },
        day3: { ...legsDay }
      }
    };
  }
})();
