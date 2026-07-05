export type SafariDay = {
  day: number;
  slug: string;
  date: string;
  title: string;
  route: string;
  overnight: string;
  meals: string[];
  summary: string;
  highlights: string[];
};

export type DayCompanionContent = {
  synopsis: string;
  pace: string;
  mood: string;
  richerSummary: string;
  featuredMoments: string[];
  deeperDive: { title: string; body: string }[];
  practicalNotes: string[];
};

export const itinerary: SafariDay[] = [
  {
    day: 1,
    slug: 'day-1',
    date: '2026-07-19',
    title: 'Overnight Flight',
    route: 'Home to East Africa',
    overnight: 'In transit',
    meals: [],
    summary:
      'Departure day. The trip begins with an overnight international flight as the safari shifts from planning to motion.',
    highlights: [
      'Final checks for passports, visas, and travel documents',
      'Begin the Kenya and Tanzania journey',
    ],
  },
  {
    day: 2,
    slug: 'day-2',
    date: '2026-07-20',
    title: 'Arrival in Nairobi',
    route: 'Nairobi, Kenya',
    overnight: 'Ole Sereni Hotel, Nairobi',
    meals: ['Dinner'],
    summary:
      'Arrive in Kenya, transfer to the hotel, and ease into the pace of the trip with a relaxed first afternoon and group dinner.',
    highlights: [
      'First look at Nairobi',
      'Recovery time after the long-haul flight',
      'Welcome dinner with the travel group',
    ],
  },
  {
    day: 3,
    slug: 'day-3',
    date: '2026-07-21',
    title: 'Into the Masai Mara',
    route: 'Nairobi to Masai Mara National Reserve',
    overnight: 'Mara Fig Tree Camp',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Travel across the Rift Valley toward the Masai Mara, settle into camp, and head out for the first evening game drive.',
    highlights: [
      'Scenic transfer through Kenya’s highlands',
      'Arrival in the Masai Mara',
      'First safari drive at sunset',
    ],
  },
  {
    day: 4,
    slug: 'day-4',
    date: '2026-07-22',
    title: 'Masai Mara Game Drives',
    route: 'Masai Mara National Reserve',
    overnight: 'Mara Fig Tree Camp',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'An early drive and a second outing later in the day create a full rhythm of wildlife viewing, rest, and camp time by the river.',
    highlights: [
      'Morning wildlife drive',
      'Afternoon safari in the Mara',
      'Camp setting along the Talek River',
    ],
  },
  {
    day: 5,
    slug: 'day-5',
    date: '2026-07-23',
    title: 'Another Day in the Mara',
    route: 'Masai Mara National Reserve',
    overnight: 'Mara Fig Tree Camp',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'A second full safari day in the Mara offers more chances to spot big game, birdlife, and the wider reserve at different hours.',
    highlights: [
      'Another early game drive',
      'Treehouse and camp downtime',
      'Late-day animal viewing',
    ],
  },
  {
    day: 6,
    slug: 'day-6',
    date: '2026-07-24',
    title: 'Return to Nairobi',
    route: 'Masai Mara to Nairobi',
    overnight: 'Ole Sereni Hotel, Nairobi',
    meals: ['Breakfast'],
    summary:
      'Drive back to Nairobi by midday and transition from the Mara extension into the main body of the safari.',
    highlights: [
      'Long overland return to the capital',
      'Flexible afternoon in Nairobi',
    ],
  },
  {
    day: 7,
    slug: 'day-7',
    date: '2026-07-25',
    title: 'Conservation and Nairobi Icons',
    route: 'Nairobi',
    overnight: 'Ole Sereni Hotel, Nairobi',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Spend the day with some of Nairobi’s signature experiences, from elephant conservation to giraffes, local crafts, and a welcome dinner.',
    highlights: [
      'David Sheldrick Wildlife Trust',
      'Karen Blixen farmhouse lunch',
      'Rothschild giraffe sanctuary visit',
      'Kazuri Beads Factory',
    ],
  },
  {
    day: 8,
    slug: 'day-8',
    date: '2026-07-26',
    title: 'Amboseli and Maasai Culture',
    route: 'Nairobi to Amboseli National Park',
    overnight: 'Kilima Safari Camp',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Head south toward Amboseli, framed by Mount Kilimanjaro, and pair the landscape with a cultural visit in a Maasai community.',
    highlights: [
      'Drive to Amboseli National Park',
      'Mount Kilimanjaro backdrop',
      'Visit to a Maasai village',
    ],
  },
  {
    day: 9,
    slug: 'day-9',
    date: '2026-07-27',
    title: 'Full-Day Safari in Amboseli',
    route: 'Amboseli National Park',
    overnight: 'Kilima Safari Camp',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'A full-day game drive across Amboseli’s open plains focuses on elephants, big-game sightings, and sweeping views beneath Kilimanjaro.',
    highlights: [
      'Full-day game drive',
      'Picnic lunch in the park',
      'Big Five search begins in earnest',
    ],
  },
  {
    day: 10,
    slug: 'day-10',
    date: '2026-07-28',
    title: 'Cross into Tanzania',
    route: 'Amboseli to Arusha to Karatu',
    overnight: 'Country Lodge, Karatu',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Cross the border into Tanzania, stop at the Shanga social enterprise in Arusha, and continue to Karatu for the next safari stage.',
    highlights: [
      'Kenya to Tanzania transition day',
      'Shanga workshop visit',
      'Garden lodge stay in Karatu',
    ],
  },
  {
    day: 11,
    slug: 'day-11',
    date: '2026-07-29',
    title: 'Ngorongoro Crater',
    route: 'Karatu to Ngorongoro Crater to Karatu',
    overnight: 'Country Lodge, Karatu',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Descend into Ngorongoro Crater for a full day of wildlife viewing in one of East Africa’s most concentrated safari landscapes.',
    highlights: [
      'UNESCO-listed Ngorongoro Conservation Area',
      'Picnic lunch in the highlands',
      'Dense wildlife concentrations in the crater',
    ],
  },
  {
    day: 12,
    slug: 'day-12',
    date: '2026-07-30',
    title: 'First Serengeti Drive',
    route: 'Karatu to Serengeti',
    overnight: 'ThornTree Camp, Serengeti',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Travel into the Serengeti, settle into camp, and start the stay with an afternoon drive across the famed endless plains.',
    highlights: [
      'Arrival in the Serengeti ecosystem',
      'First afternoon safari in the park',
      'Three-night camp stay in the bush',
    ],
  },
  {
    day: 13,
    slug: 'day-13',
    date: '2026-07-31',
    title: 'Serengeti Full Day',
    route: 'Serengeti',
    overnight: 'ThornTree Camp, Serengeti',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Spend a full day exploring the Serengeti with extended game viewing and a picnic lunch out on safari.',
    highlights: [
      'Full-day wildlife drive',
      'Picnic lunch in the reserve',
      'Long-form time in one of Africa’s classic safari landscapes',
    ],
  },
  {
    day: 14,
    slug: 'day-14',
    date: '2026-08-01',
    title: 'More Serengeti Wildlife',
    route: 'Serengeti',
    overnight: 'ThornTree Camp, Serengeti',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'A second full Serengeti day gives more room for animal sightings, photography, and the shifting rhythm of the savanna.',
    highlights: [
      'Another full-day drive',
      'Predators, plains game, and river habitats',
      'Sunset return to camp',
    ],
  },
  {
    day: 15,
    slug: 'day-15',
    date: '2026-08-02',
    title: 'Toward Lake Eyasi',
    route: 'Serengeti to Lake Eyasi',
    overnight: 'Lake Eyasi Safari Lodge',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Leave the Serengeti for the quieter landscapes around Lake Eyasi, with wildlife stops en route and a guided walk near the salt lake.',
    highlights: [
      'Transfer through changing landscapes',
      'Safari walk near Lake Eyasi',
      'Chance to see flamingoes and hippos',
    ],
  },
  {
    day: 16,
    slug: 'day-16',
    date: '2026-08-03',
    title: 'Lake Eyasi Communities',
    route: 'Lake Eyasi',
    overnight: 'Lake Eyasi Safari Lodge',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Focus on cultural encounters around Lake Eyasi with visits to the Hadzabe and Datoga communities.',
    highlights: [
      'Morning with the Hadzabe community',
      'Afternoon visit with the Datoga',
      'A deeper look at local lifeways beyond game drives',
    ],
  },
  {
    day: 17,
    slug: 'day-17',
    date: '2026-08-04',
    title: 'Choice Experience and Tarangire',
    route: 'Lake Eyasi to Mto Wa Mbu to Tarangire National Park',
    overnight: 'Sangaiwe Tented Lodge',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'Choose between a fruit-vendor or craftsman encounter, then continue to Tarangire for another afternoon game drive.',
    highlights: [
      'Choice stop in Mto Wa Mbu',
      'Tarangire’s baobabs and elephant country',
      'Afternoon safari drive',
    ],
  },
  {
    day: 18,
    slug: 'day-18',
    date: '2026-08-05',
    title: 'Tarangire Finale',
    route: 'Tarangire National Park',
    overnight: 'Sangaiwe Tented Lodge',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    summary:
      'A final full safari day in Tarangire combines animal viewing, birdlife, and a farewell dinner with the group.',
    highlights: [
      'Full-day Tarangire game drive',
      'Birdwatching in a park known for avian diversity',
      'Farewell dinner',
    ],
  },
  {
    day: 19,
    slug: 'day-19',
    date: '2026-08-06',
    title: 'Arusha and Departure',
    route: 'Tarangire National Park to Arusha',
    overnight: 'Departure day',
    meals: ['Breakfast', 'Lunch'],
    summary:
      'Return to Arusha, use the dayroom to refresh, and begin the journey home with the safari route complete.',
    highlights: [
      'Final transfer to Arusha',
      'Dayroom before departure',
      'End of the 19-day itinerary',
    ],
  },
];

export const tripFacts = {
  title: 'Great Migration Safari 2026',
  dateRange: 'July 19 to August 6, 2026',
  days: itinerary.length,
  meals: '49 meals',
  gameDrives: '7 featured game drives',
  countries: 'Kenya and Tanzania',
};

export const destinationSpotlights = [
  {
    name: 'Amboseli National Park',
    summary:
      'Amboseli is known for large elephant herds, wide-open plains, and one of East Africa’s most recognizable views of Mount Kilimanjaro.',
    source: 'Elephants and open views',
  },
  {
    name: 'Ngorongoro Conservation Area',
    summary:
      'Ngorongoro combines a dramatic crater landscape with dense wildlife populations and long human-history significance within the wider Serengeti ecosystem.',
    source: 'Crater landscape',
  },
  {
    name: 'Serengeti',
    summary:
      'The Serengeti portion of the trip is built around extended time on the plains, maximizing sunrise, midday, and sunset wildlife patterns over three nights in camp.',
    source: 'Longest safari stretch',
  },
  {
    name: 'Tarangire National Park',
    summary:
      'Tarangire closes the route with baobab-dotted landscapes, strong elephant sightings, and one of the trip’s best birdwatching windows.',
    source: 'Final wildlife chapter',
  },
];

export const planningNotes = [
  'Kenya requires an eTA before arrival, and Tanzania visa requirements should be confirmed before travel.',
  'A yellow fever certificate is required when entering Tanzania from Kenya on this route.',
  'Soft duffel luggage is recommended for the safari vehicles and lodge transfers.',
  'Several transfer days are long and dusty, so it helps to treat the logistics as part of the trip instead of background detail.',
];

export const companionContentBySlug: Record<string, DayCompanionContent> = {
  'day-1': {
    synopsis: 'A long-haul launch day focused on departure, transit, and shifting mentally into safari mode.',
    pace: 'Travel day',
    mood: 'Anticipation',
    richerSummary:
      'The first day is mostly about getting airborne with documents, medications, and duffel strategy already sorted, so the trip can start cleanly rather than frantically.',
    featuredMoments: [
      'Confirm passports, visas, and yellow-fever documents are easy to reach',
      'Keep a first-night kit handy for the arrival hotel',
      'Use the flight time to review the route from Nairobi to Tarangire',
    ],
    deeperDive: [
      {
        title: 'What matters most today',
        body:
          'A calm departure improves every later transfer day. This is the best time to make sure cameras, chargers, binoculars, and essential meds are in your carry-on rather than buried in the duffel.',
      },
      {
        title: 'Set the tone for the trip',
        body:
          'Because the itinerary mixes wildlife intensity with long drives, it helps to treat the opening flight as part of the experience instead of lost time: rest, hydrate, and scan the sequence of parks and lodges once before arrival.',
      },
    ],
    practicalNotes: [
      'Keep pen, passport, and arrival paperwork together.',
      'Dress for layered temperatures between airports, plane cabins, and arrival.',
    ],
  },
  'day-2': {
    synopsis: 'Arrival in Nairobi with a soft landing: transfer, recovery, and the first shared dinner.',
    pace: 'Light',
    mood: 'Settling in',
    richerSummary:
      'This day should feel deliberately unhurried. Nairobi is the threshold between planning and the live trip, so the emphasis is on rest, orientation, and quietly adjusting to local rhythm.',
    featuredMoments: [
      'First impressions of Nairobi on the airport transfer',
      'Time to reset after the overnight flight',
      'Meet the group over dinner instead of on the road',
    ],
    deeperDive: [
      {
        title: 'Why the leisure matters',
        body:
          'The itinerary becomes more active quickly, so the unstructured afternoon is useful for hydration, unpacking the duffel system, and getting your camera ready before the wildlife-heavy days begin.',
      },
      {
        title: 'Nairobi as the gateway city',
        body:
          'Nairobi is more than a staging point. It frames the trip through conservation, urban energy, and the mix of international travel with East African daily life that comes into focus over the next week.',
      },
    ],
    practicalNotes: [
      'Use the evening to separate safari-day gear from hotel-only items.',
      'Charge every battery before the overland extension begins.',
    ],
  },
  'day-3': {
    synopsis: 'A scenic Rift Valley transfer into the Masai Mara with the first real game drive at dusk.',
    pace: 'Long transfer + first safari',
    mood: 'Lift-off',
    richerSummary:
      'The day is about moving from city context into safari country. By evening, anticipation gives way to active wildlife watching as the reserve finally becomes real around us.',
    featuredMoments: [
      'Cross the Rift Valley toward Narok',
      'Arrive in camp and immediately feel the landscape change',
      'First evening drive when light and animal movement are both strong',
    ],
    deeperDive: [
      {
        title: 'The transfer is part of the story',
        body:
          'This is one of the classic orientation days on the trip. The road south helps show how geography changes from the highlands to the savanna and makes the reserve arrival feel earned rather than instantaneous.',
      },
      {
        title: 'Why dusk matters in the Mara',
        body:
          'A first evening drive is less about covering ground than tuning your eye. You start recognizing silhouette, behavior, and distance in a landscape where the next two days reward patience more than speed.',
      },
    ],
    practicalNotes: [
      'Keep binoculars and a layer handy for the afternoon drive.',
      'Expect dust and road time before camp comfort kicks in.',
    ],
  },
  'day-4': {
    synopsis: 'Morning and afternoon drives in the Mara with a mid-day reset back at camp.',
    pace: 'Safari rhythm',
    mood: 'Immersed',
    richerSummary:
      'This is the first full day where the safari routine becomes intuitive: early start, slow scanning, lunch, rest, and another outing timed for changing light and animal behavior.',
    featuredMoments: [
      'Morning game drive before the heat builds',
      'Riverfront downtime back at camp',
      'Second drive timed for evening activity',
    ],
    deeperDive: [
      {
        title: 'Reading the reserve differently',
        body:
          'By now, the Mara begins to reveal patterns rather than isolated sightings. Water, shade, and open grassland start to tell you where to look before the guide even points.',
      },
      {
        title: 'Camp as part of the experience',
        body:
          'Returning mid-day is not dead time. The Talek River setting, birdlife, and the slower pace around camp make the wildlife experience feel layered instead of nonstop.',
      },
    ],
    practicalNotes: [
      'Use the break between drives to back up photos and recharge gear.',
      'A light scarf or buff helps on dusty drives.',
    ],
  },
  'day-5': {
    synopsis: 'Another full Mara day with sharper eyes, better timing, and more confidence in the landscape.',
    pace: 'Safari rhythm',
    mood: 'Locked in',
    richerSummary:
      'The second full day often feels richer than the first because you are no longer learning the reserve from scratch. The landscape reads faster, and the small moments around camp begin to matter more.',
    featuredMoments: [
      'Refined spotting after two prior drives',
      'Birdlife and distant giraffes from camp vantage points',
      'A late-day return to favorite habitats',
    ],
    deeperDive: [
      {
        title: 'Why repeat drives matter',
        body:
          'Seeing the same ecosystem over multiple sessions is what changes a checklist safari into a more atmospheric one. You start to remember terrain, recognize species more quickly, and appreciate the spaces between sightings.',
      },
      {
        title: 'The value of unhurried watching',
        body:
          'This is a good day to resist the urge to rank every sighting. Let the reserve feel broad and slow, and the trip starts to become more memorable than a simple animal tally.',
      },
    ],
    practicalNotes: [
      'Keep sunscreen and lip balm easy to reach in the vehicle.',
      'If your camera has burst mode or longer glass, this is a good day to use it deliberately.',
    ],
  },
  'day-6': {
    synopsis: 'A long road day back to Nairobi that bridges the pre-tour extension and the main itinerary.',
    pace: 'Transfer day',
    mood: 'Reset',
    richerSummary:
      'This return day is less dramatic visually, but it is structurally important: it closes the Mara extension and resets the trip for the conservation and cross-border stages to come.',
    featuredMoments: [
      'Leave camp after breakfast',
      'Drive back through the highlands',
      'A quieter Nairobi afternoon before the main tour continues',
    ],
    deeperDive: [
      {
        title: 'Why this day matters',
        body:
          'The trip naturally falls into chapters. Returning to Nairobi after the Mara gives us a clean break before the conservation visits and the cross-border run into Tanzania.',
      },
      {
        title: 'Good use of the city pause',
        body:
          'This is the moment to reorganize bags, review photos, and get ready for the conservation visits and onward movement toward Amboseli rather than treating the city merely as transit.',
      },
    ],
    practicalNotes: [
      'Expect road fatigue and protect the evening as recovery time.',
      'Use hotel Wi-Fi, charging, and repacking time well.',
    ],
  },
  'day-7': {
    synopsis: 'A Nairobi day centered on conservation, giraffes, local craft, and the formal welcome into the safari proper.',
    pace: 'Full but urban',
    mood: 'Connection',
    richerSummary:
      'This day broadens the trip beyond game drives by tying wildlife, conservation, colonial-era memory, and local craft work together in a single city-based sequence.',
    featuredMoments: [
      'David Sheldrick elephant rehabilitation visit',
      'Lunch linked to the Out of Africa setting',
      'Giraffe encounter and Kazuri craft stop',
    ],
    deeperDive: [
      {
        title: 'Why Nairobi is essential, not optional',
        body:
          'The city gives context to everything that follows. Conservation in East Africa is not abstract, and seeing rehabilitation and local enterprise up front changes how the wildlife days land later.',
      },
      {
        title: 'A different kind of safari day',
        body:
          'This is one of the itinerary’s most balanced days because it swaps pure wildlife immersion for conservation, culture, and social context without losing momentum.',
      },
    ],
    practicalNotes: [
      'Carry a little extra battery for city-day photos and video.',
      'This is one of the easier days for gifts or lightweight souvenirs.',
    ],
  },
  'day-8': {
    synopsis: 'Travel south to Amboseli, then trade city context for Kilimanjaro views and Maasai cultural perspective.',
    pace: 'Transfer + cultural stop',
    mood: 'Expansive',
    richerSummary:
      'Amboseli opens a new visual register for the trip: broader skies, elephant country, and the symbolic draw of Kilimanjaro anchoring the horizon across the border.',
    featuredMoments: [
      'Drive into Amboseli’s ecosystem',
      'Maasai village visit',
      'First sight lines toward Kilimanjaro',
    ],
    deeperDive: [
      {
        title: 'Why Amboseli feels different',
        body:
          'Compared with the Mara, Amboseli often feels more open and elemental. The scenery is part of the experience as much as the animals, especially when the mountain reveals itself clearly.',
      },
      {
        title: 'Culture beside wildlife',
        body:
          'The Maasai visit matters because it keeps the trip from flattening people and place into background. Human presence, pastoral life, and conservation sit close together here.',
      },
    ],
    practicalNotes: [
      'Mountain views are weather-dependent, so savor them when they appear.',
      'This is a good day for wide-angle phone photos as much as telephoto wildlife shots.',
    ],
  },
  'day-9': {
    synopsis: 'A full Amboseli safari day centered on elephant herds, open plains, and long mountain-facing horizons.',
    pace: 'Full safari',
    mood: 'Cinematic',
    richerSummary:
      'This is one of the itinerary’s visually iconic days. Amboseli combines major wildlife viewing with one of East Africa’s most recognisable landscape backdrops, making it memorable even between sightings.',
    featuredMoments: [
      'Extended game drive across the park',
      'Picnic lunch in the field',
      'Strong elephant and plains-animal viewing potential',
    ],
    deeperDive: [
      {
        title: 'What makes Amboseli special',
        body:
          'Amboseli is especially known for close encounters with large elephant herds and for the visual drama of wildlife moving beneath Kilimanjaro’s silhouette.',
      },
      {
        title: 'A day for patience and scale',
        body:
          'Because the plains are broad, this is a strong day to let the landscape work on you. The power comes from the combination of open space, shifting weather, and animal movement rather than one single stop.',
      },
    ],
    practicalNotes: [
      'Bring sun protection and water since you will be out for long stretches.',
      'Dust and distance can make lens wipes unexpectedly useful.',
    ],
  },
  'day-10': {
    synopsis: 'A border-crossing day into Tanzania with a social-impact stop in Arusha before settling in Karatu.',
    pace: 'Long transition',
    mood: 'Threshold',
    richerSummary:
      'This day shifts both country and tone. The journey stops being Kenya-only, and the Shanga visit adds a people-centered note before the crater and Serengeti chapters begin.',
    featuredMoments: [
      'Cross from Kenya into Tanzania',
      'Visit Shanga in Arusha',
      'Arrive in Karatu for the highland chapter',
    ],
    deeperDive: [
      {
        title: 'Why transition days need texture',
        body:
          'A border day can easily feel purely logistical. Shanga gives it emotional and social weight by connecting travel to skilled work, dignity, and local enterprise.',
      },
      {
        title: 'Karatu as the pivot point',
        body:
          'Karatu is one of the itinerary’s most practical bases, but it also marks the start of the UNESCO-rich Tanzania section where geology, wildlife, and human history come closer together.',
      },
    ],
    practicalNotes: [
      'Keep border paperwork and yellow-fever proof accessible all day.',
      'Expect the day to feel longer than the mileage alone suggests.',
    ],
  },
  'day-11': {
    synopsis: 'Descend into Ngorongoro Crater for one of the trip’s densest and most dramatic wildlife-viewing days.',
    pace: 'Full safari',
    mood: 'Awe',
    richerSummary:
      'Ngorongoro combines concentration and scale: the crater’s enclosed geography can make the wildlife feel near and abundant while the wider conservation area carries deep ecological and human-history significance.',
    featuredMoments: [
      'Drive into the crater environment',
      'Picnic in a UNESCO-listed landscape',
      'Prime conditions for dense wildlife viewing',
    ],
    deeperDive: [
      {
        title: 'Why Ngorongoro stands apart',
        body:
          'The conservation area includes the spectacular crater itself and is globally significant not just for wildlife but also for geology and long archaeological evidence connected to human evolution.',
      },
      {
        title: 'A different feeling from the plains',
        body:
          'After the openness of Amboseli, Ngorongoro can feel more concentrated and enclosed. That change in shape and density is part of what makes the day memorable even for well-traveled safari visitors.',
      },
    ],
    practicalNotes: [
      'Bring a layer for the highland start even if the crater floor warms later.',
      'This is a good day to keep binoculars in hand almost continuously.',
    ],
  },
  'day-12': {
    synopsis: 'Move into the Serengeti and begin the park stay with a first afternoon drive across the plains.',
    pace: 'Transfer + safari',
    mood: 'Arrival',
    richerSummary:
      'This is the point where the safari earns its most iconic geography. The Serengeti is not a single scene but a vast system, and the first afternoon begins the slow process of reading its scale.',
    featuredMoments: [
      'Overland move into the Serengeti ecosystem',
      'Camp arrival in the bush',
      'First game drive on the endless plains',
    ],
    deeperDive: [
      {
        title: 'Why three nights matter',
        body:
          'The Serengeti section is stronger because it is not a one-night stop. The first afternoon is only the opening chapter for a landscape that gets richer with repeated time in it.',
      },
      {
        title: 'Camp as immersion',
        body:
          'Sleeping in camp rather than outside the ecosystem changes the psychological pace of the trip. The park stops being a day excursion and becomes the environment around you.',
      },
    ],
    practicalNotes: [
      'This is another good day to reset batteries and memory cards before back-to-back safari sessions.',
      'Expect the evening light to be especially photogenic.',
    ],
  },
  'day-13': {
    synopsis: 'A full Serengeti day devoted to long-range game viewing and the pleasure of staying out in the landscape.',
    pace: 'Full safari',
    mood: 'Immersion',
    richerSummary:
      'The reward of a full Serengeti day is time. Instead of crossing the park quickly, you can let sightings accumulate through mood, light, and habitat changes.',
    featuredMoments: [
      'Full-day safari with picnic lunch',
      'Time to follow animal movement over a longer arc',
      'More relaxed observation than a transfer-day drive allows',
    ],
    deeperDive: [
      {
        title: 'The Serengeti at full scale',
        body:
          'A single afternoon can only introduce the Serengeti. A full day makes the plains feel geographic rather than symbolic, and that difference is central to why this section anchors the whole trip.',
      },
      {
        title: 'What to pay attention to',
        body:
          'Beyond headline wildlife, watch how guides read terrain, track signs, and use distance. The expertise behind the sightings becomes more visible the longer you are out.',
      },
    ],
    practicalNotes: [
      'Keep a hat, sunscreen, and backup battery ready from the start.',
      'Field lunch days benefit from a light snack tucked in your bag too.',
    ],
  },
  'day-14': {
    synopsis: 'Another deep Serengeti day, now with the confidence to enjoy both drama and stillness.',
    pace: 'Full safari',
    mood: 'Unhurried wonder',
    richerSummary:
      'The second full Serengeti day is often when travelers stop chasing proof and start enjoying atmosphere. The park becomes less about what might appear next and more about living inside the rhythm of the plains.',
    featuredMoments: [
      'Return to the savanna under guide-led pacing',
      'Predator and plains-game watchfulness',
      'A final night anchored inside the Serengeti stay',
    ],
    deeperDive: [
      {
        title: 'Why repetition becomes richness',
        body:
          'Two full days in the same great landscape can sound similar on paper, but they create better memory because you stop treating every sighting as isolated and begin to perceive continuity across the ecosystem.',
      },
      {
        title: 'A good day for selective photography',
        body:
          'Once the novelty settles, this becomes a strong day to slow down and shoot with more intention instead of trying to capture everything indiscriminately.',
      },
    ],
    practicalNotes: [
      'Rotate between camera and binoculars deliberately so you still absorb the place with your eyes.',
      'If conditions are dusty, protect gear before returning to camp.',
    ],
  },
  'day-15': {
    synopsis: 'Leave the Serengeti for Lake Eyasi, with a wildlife-rich transfer and a guided walk near the salt lake.',
    pace: 'Transition with activity',
    mood: 'Changing tone',
    richerSummary:
      'This day matters because it changes the trip’s texture. After the scale of the Serengeti, Lake Eyasi introduces a quieter, more locally focused landscape with room for walking and cultural depth.',
    featuredMoments: [
      'Drive from plains into a different Tanzania landscape',
      'Picnic lunch en route',
      'Guided walk around the salt lake zone',
    ],
    deeperDive: [
      {
        title: 'Why Lake Eyasi feels different',
        body:
          'The value here is contrast. The itinerary steps away from the marquee parks just enough to make the cultural and environmental variety of northern Tanzania more visible.',
      },
      {
        title: 'A quieter reward after the Serengeti',
        body:
          'This section can feel more reflective. A guided walk and smaller-scale setting make details, conversation, and landscape texture more prominent than the previous big-park days.',
      },
    ],
    practicalNotes: [
      'Walking shoes matter more here than on pure vehicle days.',
      'Even when wildlife is quieter, keep binoculars ready around the lake margin.',
    ],
  },
  'day-16': {
    synopsis: 'A cultural immersion day around Lake Eyasi centered on Hadzabe and Datoga community visits.',
    pace: 'Full cultural day',
    mood: 'Curious and grounded',
    richerSummary:
      'This day broadens the trip beyond wildlife watching by focusing on local communities, subsistence practices, and daily routines shaped by place rather than by safari infrastructure.',
    featuredMoments: [
      'Morning with the Hadzabe community',
      'Return to lodge for lunch and reset',
      'Afternoon visit with the Datoga community',
    ],
    deeperDive: [
      {
        title: 'Why this day belongs in the itinerary',
        body:
          'Without Lake Eyasi, the trip could lean too heavily toward reserve-based safari. This day widens the cultural lens and keeps the route from becoming ecologically rich but socially thin.',
      },
      {
        title: 'How to approach it well',
        body:
          'The best version of this day is attentive rather than extractive. Listen more than you summarize, and treat the visits as encounters with living communities rather than thematic stops.',
      },
    ],
    practicalNotes: [
      'A lighter kit can help on a conversation-forward day.',
      'Ask before photographing people or specific activities.',
    ],
  },
  'day-17': {
    synopsis: 'Choose a village experience in the morning, then head into Tarangire for a fresh late-afternoon safari.',
    pace: 'Choice stop + transfer + safari',
    mood: 'Varied',
    richerSummary:
      'The day mixes local encounter and classic park scenery. By afternoon, Tarangire brings back wide wildlife scale in a landscape defined by baobabs and elephant corridors.',
    featuredMoments: [
      'Choice between fruit-vendor or craftsman visit',
      'Drive into Tarangire National Park',
      'Afternoon game drive among baobabs and elephants',
    ],
    deeperDive: [
      {
        title: 'Why Tarangire lands well here',
        body:
          'After the Lake Eyasi section, Tarangire restores safari momentum without simply repeating the Serengeti. The park feels more wooded, more textured, and often especially strong for elephants.',
      },
      {
        title: 'A good day for range',
        body:
          'This is one of the itinerary’s most varied days because it moves from people and craft to wildlife and landscape in a single arc, which keeps the back end of the trip fresh.',
      },
    ],
    practicalNotes: [
      'The morning choice experience is a good moment for lighter, conversational photography.',
      'Have a layer ready for the late-day drive after time on the road.',
    ],
  },
  'day-18': {
    synopsis: 'A farewell full-day safari in Tarangire with strong birding and one last shared dinner in Africa.',
    pace: 'Full safari',
    mood: 'Bittersweet',
    richerSummary:
      'This closing wildlife day works because Tarangire is different enough from earlier parks to remain rewarding while still delivering the emotional sense of a last big field day.',
    featuredMoments: [
      'Full-day Tarangire game drive',
      'Birdlife and river-edge viewing opportunities',
      'Farewell dinner with the group',
    ],
    deeperDive: [
      {
        title: 'How to use the last full safari day',
        body:
          'This is a strong day to balance photography with presence. By the end of the trip, the emotional memory often comes from atmosphere, vehicle conversations, and repetition of beloved shapes as much as from new sightings.',
      },
      {
        title: 'What makes Tarangire memorable',
        body:
          'Tarangire is often prized for elephant movement, baobab silhouettes, and diverse birdlife, which gives the finale its own identity rather than making it feel like an afterthought.',
      },
    ],
    practicalNotes: [
      'If you keep a travel journal, this is a strong night to capture the trip before departure-day logistics take over.',
      'Use the farewell dinner as a memory checkpoint, not only a closing meal.',
    ],
  },
  'day-19': {
    synopsis: 'Return to Arusha, refresh in the dayroom, and close the route with one last transition homeward.',
    pace: 'Departure day',
    mood: 'Reflective',
    richerSummary:
      'The final day is mostly logistical, but it also creates the pause needed to let the trip settle. A little room in Arusha helps the safari end more gracefully than a rush straight to the airport would.',
    featuredMoments: [
      'Morning return from Tarangire',
      'Dayroom pause before onward travel',
      'Last look back on the route across Kenya and Tanzania',
    ],
    deeperDive: [
      {
        title: 'Why the dayroom matters',
        body:
          'A proper departure buffer changes the emotional shape of the last day. You can repack, sort photos, and come down from the field pace before long-haul travel begins again.',
      },
      {
        title: 'What the route leaves behind',
        body:
          'By this point the trip has moved through city conservation, open plains, crater ecology, cultural visits, and final park days. The value of the itinerary is in that layering, not just in its headline stops.',
      },
    ],
    practicalNotes: [
      'Pack the flight kit before leaving Tarangire rather than in a hurry later.',
      'Leave extra space for receipts, keepsakes, and any last-minute airport reorganizing.',
    ],
  },
};
