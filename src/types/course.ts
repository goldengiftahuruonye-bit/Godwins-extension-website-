export enum ProgramCategory {
  ALL = 'All Programs',
  ARCHITECTURE = 'Architecture & Houses',
  WEBINARS = 'Webinars & Masterclasses',
  MENTORSHIP = 'Mentorship',
  MINI_COURSES = 'Interior Mini-Courses',
}

export enum CurrencyCode {
  USD = 'USD',
  EUR = 'EUR',
  RUB = 'RUB',
  NGN = 'NGN',
}

export interface SyllabusModule {
  week: string;
  title: string;
  summary: string;
  deliverable: string;
  durationMinutes: number;
}

export interface VideoChapter {
  timestamp: string;
  title: string;
  keyTakeaway: string;
}

export interface CourseProgram {
  id: string;
  code: string;
  groupKey: 'featured-architecture' | 'webinars-masterclasses' | 'mentorship' | 'interior-mini-courses';
  title: string;
  subtitle: string;
  category: ProgramCategory;
  categoryBadge: string;
  formatBadge: string;
  isHit?: boolean;
  pricePrefix?: string;
  customPriceLabel?: string;
  ctaLabel: string;
  tags: string[];
  description: string;
  imageUrl: string;
  imageAlt: string;
  architecturalTopic: string;
  priceUSD: number;
  originalPriceUSD?: number;
  durationWeeks: number;
  lessonsCount: number;
  studioHours: number;
  softwareStack: string[];
  leadArchitect: {
    name: string;
    role: string;
    studio: string;
  };
  syllabus: SyllabusModule[];
  previewVideo: {
    duration: string;
    lectureTitle: string;
    lightingSetup: string;
    renderEngine: string;
    chapters: VideoChapter[];
  };
  includedAssets: string[];
}

export interface ValueProposition {
  id: string;
  iconName: 'methodology' | 'practice' | 'verified';
  title: string;
  description: string;
}
