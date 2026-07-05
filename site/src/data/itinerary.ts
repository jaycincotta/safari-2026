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
    source: 'Kenya Wildlife Service',
  },
  {
    name: 'Ngorongoro Conservation Area',
    summary:
      'Ngorongoro combines a dramatic crater landscape with dense wildlife populations and long human-history significance within the wider Serengeti ecosystem.',
    source: 'UNESCO World Heritage Centre',
  },
  {
    name: 'Serengeti',
    summary:
      'The Serengeti portion of the trip is built around extended time on the plains, maximizing sunrise, midday, and sunset wildlife patterns over three nights in camp.',
    source: 'Trip itinerary synthesis',
  },
  {
    name: 'Tarangire National Park',
    summary:
      'Tarangire closes the route with baobab-dotted landscapes, strong elephant sightings, and one of the trip’s best birdwatching windows.',
    source: 'Trip itinerary synthesis',
  },
];

export const planningNotes = [
  'Kenya requires an eTA before arrival, and Tanzania visa requirements should be confirmed before travel.',
  'A yellow fever certificate is required when entering Tanzania from Kenya on this route.',
  'Soft duffel luggage is recommended for the safari vehicles and lodge transfers.',
  'Several transfer days are long and dusty, so the early site should treat logistics as part of the story, not as fine print.',
];
