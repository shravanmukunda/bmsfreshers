export interface EventDetails {
  name: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  expectedCrowd: string;
}

export interface Highlight {
  title: string;
  desc: string;
  icon: string;
  color: string;
  border: string;
  textColor: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TicketPhase {
  name: string;
  status: string;
  price: string;
  color: string;
  glowColor: string;
  available: boolean;
  features: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface GalleryItem {
  id: number;
  title: string;
}
