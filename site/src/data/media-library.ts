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
  featured?: boolean;
  days?: string[];
  destinations?: string[];
};

export type PhotoAppearance = {
  title: string;
  href: string;
};

export const mediaLibrary = mediaLibraryJson as MediaPhoto[];

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
  return mediaLibrary.filter((photo) => photo.featured);
}

export function getAllPhotos() {
  return mediaLibrary;
}

export function getPhotosForDay(day: SafariDay) {
  const destinationKeys = destinationByDaySlug[day.slug] ?? [];

  return mediaLibrary.filter((photo) => {
    const directDayMatch = photo.days?.includes(day.slug) ?? false;
    const destinationMatch = destinationKeys.some((key) => photo.destinations?.includes(key));
    return directDayMatch || destinationMatch;
  });
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
      });
    }
  }

  return appearances;
}