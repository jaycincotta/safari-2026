import mediaLibraryJson from './media-library.json';
import { itinerary, type SafariDay } from './itinerary';

export type MediaPhoto = {
  slug: string;
  source: string;
  alt: string;
  caption: string;
  location: string;
  artist: string;
  licenseLabel: string;
  licenseUrl: string;
  sourcePage: string;
  widths: number[];
  defaultWidth: number;
  creditType?: 'third-party' | 'personal';
  crop?: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  featured?: boolean;
  days?: string[];
  destinations?: string[];
};

export type PhotoAppearance = {
  title: string;
  href: string;
  slug?: string;
  day?: number;
};

export const mediaLibrary = mediaLibraryJson as MediaPhoto[];

function dedupePhotosBySource(photos: MediaPhoto[]) {
  const seenSources = new Set<string>();

  return photos.filter((photo) => {
    if (seenSources.has(photo.source)) {
      return false;
    }

    seenSources.add(photo.source);
    return true;
  });
}

const favoritePhotoSlugsByDaySlug: Partial<Record<SafariDay['slug'], string[]>> = {
  'day-1': ['nairobi-giraffe-centre'],
  'day-2': ['nairobi-giraffe-centre-portrait', 'nairobi-giraffe-centre-karen'],
  'day-3': ['masai-mara-lion-portrait', 'masai-mara-giraffes-horizon'],
  'day-4': ['masai-mara-giraffes', 'masai-mara-lion'],
  'day-5': ['masai-mara-lion', 'masai-mara-giraffes-horizon'],
  'day-6': ['nairobi-giraffe-centre'],
  'day-7': ['nairobi-elephant-orphanage-close', 'nairobi-giraffe-centre-karen'],
  'day-8': ['amboseli-kilimanjaro', 'amboseli-kilimanjaro-close'],
  'day-9': ['amboseli-elephants-kilimanjaro-legacy', 'amboseli-kilimanjaro-close'],
  'day-10': ['amboseli-kilimanjaro-close', 'amboseli-elephants-kilimanjaro-legacy'],
  'day-11': ['ngorongoro-zebra-close', 'ngorongoro-grants-zebra'],
  'day-12': ['serengeti-giraffe-portrait', 'serengeti-giraffe'],
  'day-13': ['serengeti-giraffe', 'serengeti-giraffe-portrait'],
  'day-14': ['serengeti-giraffe-portrait', 'serengeti-giraffe'],
  'day-15': ['lake-eyasi-lovebirds-close', 'lake-eyasi-lovebirds'],
  'day-16': ['lake-eyasi-lovebirds', 'lake-eyasi-lovebirds-close'],
  'day-17': ['tarangire-elephants-close', 'tarangire-elephants'],
  'day-18': ['tarangire-elephants', 'tarangire-elephants-close'],
  'day-19': ['tarangire-elephants-close', 'tarangire-elephants'],
};

const destinationByDaySlug: Record<string, string[]> = {
  'day-3': ['masai-mara'],
  'day-4': ['masai-mara'],
  'day-5': ['masai-mara'],
  'day-8': ['amboseli'],
  'day-9': ['amboseli'],
  'day-10': ['amboseli'],
  'day-11': ['ngorongoro'],
  'day-12': ['serengeti'],
  'day-13': ['serengeti'],
  'day-14': ['serengeti'],
  'day-17': ['tarangire'],
  'day-18': ['tarangire'],
  'day-19': ['tarangire'],
};

export function getFeaturedPhotos() {
  return dedupePhotosBySource(mediaLibrary.filter((photo) => photo.featured));
}

export function getAllPhotos() {
  return dedupePhotosBySource(mediaLibrary);
}

export function getPhotosForDay(day: SafariDay) {
  const destinationKeys = destinationByDaySlug[day.slug] ?? [];
  const favoriteSlugs = favoritePhotoSlugsByDaySlug[day.slug] ?? [];
  const favoriteRank = new Map(favoriteSlugs.map((slug, index) => [slug, index]));

  return dedupePhotosBySource(
    [...mediaLibrary]
      .filter((photo) => {
        const directDayMatch = photo.days?.includes(day.slug) ?? false;
        const destinationMatch = destinationKeys.some((key) => photo.destinations?.includes(key));
        return directDayMatch || destinationMatch;
      })
      .sort((left, right) => {
        const leftRank = favoriteRank.get(left.slug);
        const rightRank = favoriteRank.get(right.slug);

        if (leftRank !== undefined && rightRank !== undefined) {
          return leftRank - rightRank;
        }

        if (leftRank !== undefined) {
          return -1;
        }

        if (rightRank !== undefined) {
          return 1;
        }

        return left.caption.localeCompare(right.caption);
      }),
  );
}

export function getFavoritePhotosForDay(day: SafariDay, limit = 2) {
  return getPhotosForDay(day).slice(0, limit);
}

export function getPhotoCountByDay() {
  return Object.fromEntries(itinerary.map((day) => [day.slug, getPhotosForDay(day).length]));
}

export function getPhotoAppearances(photo: MediaPhoto): PhotoAppearance[] {
  const appearances: PhotoAppearance[] = [];

  if (photo.featured) {
    appearances.push({ title: 'Home', href: '/' });
  }

  for (const day of itinerary) {
    const appearsOnDay = getPhotosForDay(day).some((candidate) => candidate.slug === photo.slug);
    if (appearsOnDay) {
      appearances.push({
        title: `Day ${day.day} · ${day.title}`,
        href: `/itinerary/${day.slug}/`,
        slug: day.slug,
        day: day.day,
      });
    }
  }

  return appearances;
}

export function getPhotoDaySlugs(photo: MediaPhoto) {
  return getPhotoAppearances(photo)
    .filter((appearance) => appearance.slug)
    .map((appearance) => appearance.slug as string);
}