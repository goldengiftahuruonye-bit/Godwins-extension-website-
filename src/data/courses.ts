import {
  CourseProgram,
  CurrencyCode,
  ProgramCategory,
  ValueProposition,
} from '../types/course';

import imgGodwinPortrait from '../assets/images/architect_godwin_richard_portrait_1791363700126.jpg';
import imgModernExterior from '../assets/images/arch_modern_residential_exterior_1791359722972.jpg';
import imgStudioTeam from '../assets/images/arch_studio_team_blueprints_1791362543443.jpg';
import imgMinimalistInterior from '../assets/images/arch_minimalist_interior_render_1791359735320.jpg';
import imgDraftingBlueprints from '../assets/images/arch_drafting_blueprints_1791359754998.jpg';
import imgDaylightStudio from '../assets/images/arch_daylight_studio_lighting_1791359764000.jpg';
import imgParametricVilla from '../assets/images/arch_parametric_facade_villa_1791359773786.jpg';
import imgBedroomSuite from '../assets/images/arch_minimalist_bedroom_suite_1791362554412.jpg';
import imgScandinavianKitchen from '../assets/images/arch_scandinavian_kitchen_1791359744889.jpg';
import imgVisualizerWorkstation from '../assets/images/arch_visualizer_workstation_1791362564002.jpg';

export const INSTRUCTOR_PROFILE = {
  eyebrow: 'ARCHITECT, DESIGNER',
  name: 'Godwin Richard',
  badgeText: 'Practicing Architect',
  portraitUrl: imgGodwinPortrait,
  bio: 'Founder of the Godwin Richard architectural bureau and educational platform. For over 15 years I have been designing private residential houses and functional interiors—translating complex construction regulations, ergonomics, and engineering nodes into clear, systematic author programs for architects, interior designers, and homeowners.',
  credentials: [
    { label: '15+ Years in Architecture', highlighted: false },
    { label: '100+ Built Houses & Interiors', highlighted: true },
    { label: 'Author Methodology', highlighted: false },
  ],
};

export const WHATSAPP_CONTACT_URL =
  'https://wa.me/442079460192?text=Hello%20Godwin%20Richard%20Studio%2C%20I%20have%20a%20question%20before%20purchasing%20a%20program.';
export const TELEGRAM_CONTACT_URL = 'https://t.me/godwin_richard_arch';

export function formatCoursePrice(priceUSD: number, currency: CurrencyCode = CurrencyCode.USD): string {
  switch (currency) {
    case CurrencyCode.USD:
      return `$${priceUSD.toLocaleString('en-US')}`;
    case CurrencyCode.EUR:
      return `€${Math.round(priceUSD * 0.92).toLocaleString('en-US')}`;
    case CurrencyCode.RUB:
      return `${(priceUSD * 100).toLocaleString('en-US')} ₽`;
    case CurrencyCode.NGN:
      return `₦${(priceUSD * 1500).toLocaleString('en-US')}`;
    default:
      return `$${priceUSD}`;
  }
}

export const AUTHOR_PROGRAMS: CourseProgram[] = [
  // GROUP 1: FEATURED ARCHITECTURE (2-Card Asymmetrical/Featured Row)
  {
    id: 'webinar-100-private-house',
    code: 'GR-101',
    groupKey: 'featured-architecture',
    title: 'Webinar "100% Private House"',
    subtitle: 'Site masterplanning, structural grids, and error-free residential layout design.',
    category: ProgramCategory.ARCHITECTURE,
    categoryBadge: 'ARCHITECTURE',
    formatBadge: 'WEBINAR',
    isHit: true,
    ctaLabel: 'Details',
    tags: ['Site Planning', 'House Ergonomics', 'Structural Grids'],
    description:
      'A step-by-step architectural breakdown of how to place a house on a plot, orient windows by solar path, organize entry/technical zones, and avoid fatal structural mistakes.',
    imageUrl: imgModernExterior,
    imageAlt: 'Modern residential house exterior with timber and concrete volumes at golden hour',
    architecturalTopic: 'Modern Residential Exteriors',
    priceUSD: 49,
    originalPriceUSD: 79,
    durationWeeks: 1,
    lessonsCount: 6,
    studioHours: 8,
    softwareStack: ['Archicad', 'AutoCAD', 'PDF Blueprints'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Module 01',
        title: 'Solar Orientation, Wind Rose & Plot Zoning',
        summary: 'Connecting garage, entrance group, terrace, and utility blocks to site topography.',
        deliverable: 'Verified Site Masterplan Checklist',
        durationMinutes: 95,
      },
      {
        week: 'Module 02',
        title: 'Floorplan Ergonomics & Structural Span Discipline',
        summary: 'Optimal hallway widths, staircase geometry, ceiling heights, and wet-zone stacking.',
        deliverable: 'Annotated 2-Story House Floorplan Set',
        durationMinutes: 140,
      },
    ],
    previewVideo: {
      duration: '16:20',
      lectureTitle: '5 Critical Mistakes in Private House Floorplans',
      lightingSetup: 'Natural Daylight Solar Study',
      renderEngine: 'BIM + Corona Architectural Presentation',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Why Apartment Habits Ruin Country House Layouts',
          keyTakeaway: 'Separating dirty entry mudrooms, boiler rooms, and guest circulation.',
        },
        {
          timestamp: '07:45',
          title: 'Staircase Proportions & Double-Height Living Glazing',
          keyTakeaway: 'Calculating riser/tread ratios (150x300mm) before fixing structural slabs.',
        },
      ],
    },
    includedAssets: [
      'Complete Private House Zoning Checklist (PDF)',
      '3 Reference Floorplan Templates with Ergonomic Dimensions',
      '90-Day Unlimited Access to Lecture Recording',
    ],
  },
  {
    id: 'mini-course-house-design-a-to-z',
    code: 'GR-102',
    groupKey: 'featured-architecture',
    title: 'Mini-Course "100% House Design from A to Z"',
    subtitle: 'Full methodology for designing modern private residences from client brief to working drawings.',
    category: ProgramCategory.ARCHITECTURE,
    categoryBadge: 'ARCHITECTURE',
    formatBadge: 'MINI-COURSE',
    pricePrefix: 'from',
    ctaLabel: 'Buy Now',
    tags: ['Full House Cycle', 'Foundations & Roofs', 'BIM Working Drawings'],
    description:
      'Complete practical training on residential architecture: from client brief, structural foundations, and roof assemblies to facade proportions and contractor-ready blueprints.',
    imageUrl: imgStudioTeam,
    imageAlt: 'Architects reviewing residential floorplan blueprints and 3D models on laptops',
    architecturalTopic: 'Residential Architecture & BIM',
    priceUSD: 149,
    originalPriceUSD: 210,
    durationWeeks: 6,
    lessonsCount: 24,
    studioHours: 36,
    softwareStack: ['Archicad / Revit', 'AutoCAD', 'SketchUp'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Weeks 01–02',
        title: 'Client Brief, Geodesy & Structural Grid Setup',
        summary: 'Reading geological surveys, selecting foundation types, and setting load-bearing axes.',
        deliverable: 'Structural Grid & Foundation Plan',
        durationMinutes: 210,
      },
      {
        week: 'Weeks 03–04',
        title: 'Thermal Envelope, Facade Tectonics & Roof Nodes',
        summary: 'Flat vs. pitched roofs, parapet waterproofing, panoramic glazing thermal breaks.',
        deliverable: '1:20 Wall Section & Roof Node Album',
        durationMinutes: 260,
      },
      {
        week: 'Weeks 05–06',
        title: 'MEP Engineering Coordination & Final Blueprint Package',
        summary: 'Integrating heating manifolds, ventilation ducts, and electrical layouts without clashes.',
        deliverable: 'Full 45-Sheet Architectural House Album',
        durationMinutes: 240,
      },
    ],
    previewVideo: {
      duration: '21:10',
      lectureTitle: 'How to Coordinate Structural Grids and Facade Glazing',
      lightingSetup: 'Studio Technical Walkthrough',
      renderEngine: 'Archicad 27 BIM Documentation',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Structuring the Architectural Album for Zero On-Site Questions',
          keyTakeaway: 'Sequence of sheets from general data to 1:10 structural nodes.',
        },
        {
          timestamp: '10:15',
          title: 'Flat Roof Parapet & Concealed Drainage Detailing',
          keyTakeaway: 'Preventing thermal bridges with continuous extruded polystyrene wrapping.',
        },
      ],
    },
    includedAssets: [
      'Complete 45-Sheet Built House Sample Blueprint Album (.PDF & .DWG)',
      'Client Technical Brief Questionnaire (120+ Questions)',
      'Personal Homework Review & Certificate of Completion',
    ],
  },

  // GROUP 2: WEBINARS & MASTERCLASSES (6 Cards in 3-Column Grid)
  {
    id: 'webinar-build-house-without-mistakes',
    code: 'GR-201',
    groupKey: 'webinars-masterclasses',
    title: 'Webinar "How to Build a Dream House Without Mistakes"',
    subtitle: 'Budgeting, contractor selection, construction stages, and technical supervision.',
    category: ProgramCategory.WEBINARS,
    categoryBadge: 'CONSTRUCTION',
    formatBadge: 'WEBINAR',
    ctaLabel: 'Details',
    tags: ['Construction Stages', 'Cost Control', 'Site Supervision'],
    description:
      'Essential road map before pouring concrete: how to evaluate land plots, verify contractor estimates, sequence engineering works, and save up to 25% of your construction budget.',
    imageUrl: imgStudioTeam,
    imageAlt: 'Architects planning residential construction stages at studio desk',
    architecturalTopic: 'Construction & Site Supervision',
    priceUSD: 49,
    originalPriceUSD: 69,
    durationWeeks: 1,
    lessonsCount: 5,
    studioHours: 6,
    softwareStack: ['Construction Estimate Templates', 'PDF Checklists'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Part 01',
        title: 'Pre-Construction Audit & Estimate Verification',
        summary: 'Identifying hidden contractor markups and missing engineering line items.',
        deliverable: 'Verified Construction Budget Spreadsheet',
        durationMinutes: 110,
      },
    ],
    previewVideo: {
      duration: '14:05',
      lectureTitle: 'Chronology of Private House Construction & Hidden Costs',
      lightingSetup: 'Studio Presentation',
      renderEngine: 'Live Architectural Case Study',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Why 80% of Builds Exceed Their Initial Estimate',
          keyTakeaway: 'Locking MEP engineering projects before starting interior partitions.',
        },
      ],
    },
    includedAssets: [
      'Stage-by-Stage Construction Acceptance Checklist',
      'Contractor Estimate Audit Table (.XLSX)',
    ],
  },
  {
    id: 'webinar-100-comfortable-interior',
    code: 'GR-202',
    groupKey: 'webinars-masterclasses',
    title: 'Webinar "100% Comfortable Interior"',
    subtitle: 'Storage systems, circulation paths, and timeless spatial ergonomics.',
    category: ProgramCategory.WEBINARS,
    categoryBadge: 'INTERIOR',
    formatBadge: 'WEBINAR',
    ctaLabel: 'Buy Now',
    tags: ['Ergonomics', 'Storage Systems', 'Space Planning'],
    description:
      'How to design an interior that remains convenient 10 years later: concealed laundry blocks, wardrobe depths, acoustic zoning, and visual calm.',
    imageUrl: imgMinimalistInterior,
    imageAlt: 'Minimalist sunlit interior living room with bespoke cabinetry and natural materials',
    architecturalTopic: 'Minimalist 3D Interior Renders',
    priceUSD: 39,
    originalPriceUSD: 59,
    durationWeeks: 1,
    lessonsCount: 4,
    studioHours: 5,
    softwareStack: ['Archicad', 'AutoCAD', 'Ergonomic Standards'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Part 01',
        title: 'Functional Zoning & Hidden Utility Rooms',
        summary: 'Integrating walk-in wardrobes, housekeeping closets, and seamless millwork.',
        deliverable: 'Interior Ergonomics Reference Guide',
        durationMinutes: 125,
      },
    ],
    previewVideo: {
      duration: '12:40',
      lectureTitle: 'Designing Visual Silence Through Built-In Storage',
      lightingSetup: 'Natural Window Daylight',
      renderEngine: 'Corona Interior Study',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Eliminating Visual Noise in Entryways & Living Zones',
          keyTakeaway: 'Allocating 15–18% of total floor area to dedicated storage volumes.',
        },
      ],
    },
    includedAssets: [
      'Complete Illustrated Ergonomics Handbook (PDF)',
      '20 Real Apartment & House Re-Planning Before/After Cases',
    ],
  },
  {
    id: 'webinar-ergonomics-and-blueprints',
    code: 'GR-203',
    groupKey: 'webinars-masterclasses',
    title: 'Webinar "Principles of Planning & Blueprints"',
    subtitle: 'From raw floorplan walls to millimeter-accurate furniture and dimensioning.',
    category: ProgramCategory.WEBINARS,
    categoryBadge: 'BLUEPRINTS',
    formatBadge: 'WEBINAR',
    ctaLabel: 'Details',
    tags: ['CAD Standards', 'Furniture Clearances', 'Working Drawings'],
    description:
      'Detailed analysis of architectural planning mechanics: door swing logic, plumbing collector distances, partition thicknesses, and clean blueprint graphic standards.',
    imageUrl: imgDraftingBlueprints,
    imageAlt: 'Architectural drafting blueprints and floorplan elevations with scale ruler',
    architecturalTopic: 'Architectural Drafting Blueprints',
    priceUSD: 59,
    originalPriceUSD: 85,
    durationWeeks: 2,
    lessonsCount: 7,
    studioHours: 10,
    softwareStack: ['Archicad', 'AutoCAD', 'Revit'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Part 01',
        title: 'Graphic Hierarchy & Dimensioning Logic on Plans',
        summary: 'Plaster thickness allowances, door opening tolerances, and sanitary clearances.',
        deliverable: 'Studio Graphic Blueprint Standard (.PDF)',
        durationMinutes: 150,
      },
    ],
    previewVideo: {
      duration: '18:15',
      lectureTitle: 'Reading & Auditing Floorplans Like a Senior Architect',
      lightingSetup: 'CAD Viewport Walkthrough',
      renderEngine: 'Vector Blueprint Engine',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Why 2cm of Plaster Breaks Tile Layouts & Built-In Cabinets',
          keyTakeaway: 'Accounting for rough vs. finished wall dimensions in early zoning.',
        },
      ],
    },
    includedAssets: [
      'Studio Dimensioning & Annotation Checklist',
      'CAD Furniture Block Library with Exact Clearance Zones',
    ],
  },
  {
    id: 'webinar-100-kids-room',
    code: 'GR-204',
    groupKey: 'webinars-masterclasses',
    title: 'Webinar "100% Kids Room & Study Space"',
    subtitle: 'Adaptable layouts that grow with the child from age 3 to 16 without remodeling.',
    category: ProgramCategory.WEBINARS,
    categoryBadge: 'INTERIOR',
    formatBadge: 'WEBINAR',
    ctaLabel: 'Details',
    tags: ['Adaptive Zoning', 'Study Lighting', 'Safe Materials'],
    description:
      'Learn how to plan electrical outlets, study desks, sleep zones, and wardrobe modules so a nursery transforms effortlessly into a teenager room without breaking walls.',
    imageUrl: imgBedroomSuite,
    imageAlt: 'Sunlit minimalist bedroom and study space with natural oak joinery',
    architecturalTopic: 'Adaptable Bedroom Architecture',
    priceUSD: 49,
    originalPriceUSD: 69,
    durationWeeks: 1,
    lessonsCount: 5,
    studioHours: 6,
    softwareStack: ['Interior Zoning', 'Lighting Ergonomics'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Part 01',
        title: '3 Age Stages in a Single Electrical & Partition Layout',
        summary: 'Pre-wiring outlets and sconces for future bed and desk reconfigurations.',
        deliverable: '3-Stage Adaptive Room Layout Pack',
        durationMinutes: 115,
      },
    ],
    previewVideo: {
      duration: '13:50',
      lectureTitle: 'Designing a Room That Grows Across 3 Age Milestones',
      lightingSetup: 'Daylight Desk Orientation Study',
      renderEngine: 'Architectural Plan & 3D Review',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Desk Placement Relative to Natural Window Daylight',
          keyTakeaway: 'Avoiding monitor glare and shadow casting for right- and left-handed students.',
        },
      ],
    },
    includedAssets: [
      'Age-by-Age Desk & Shelving Height Chart',
      '10 Verified Kids Room Layout Schemes (12m² to 24m²)',
    ],
  },
  {
    id: 'masterclass-showers-and-partitions',
    code: 'GR-205',
    groupKey: 'webinars-masterclasses',
    title: 'Masterclass "Walk-In Showers & Glass Partitions"',
    subtitle: 'Flush floor drains, waterproofing nodes, embedded profiles, and tempered glass tolerances.',
    category: ProgramCategory.WEBINARS,
    categoryBadge: 'TECHNICAL NODES',
    formatBadge: 'MASTERCLASS',
    customPriceLabel: 'On Request',
    ctaLabel: 'Sign Up',
    tags: ['Wet Zones', '1:5 Nodes', 'Glass Profiles'],
    description:
      'Deep technical dive into level-threshold shower trays, concealed ceiling tracks, linear drain slopes, and mitered porcelain stoneware corners.',
    imageUrl: imgDaylightStudio,
    imageAlt: 'Minimalist architectural interior with bespoke glass and stone detailing',
    architecturalTopic: 'Architectural Daylight Studio Lighting',
    priceUSD: 65,
    durationWeeks: 1,
    lessonsCount: 4,
    studioHours: 6,
    softwareStack: ['AutoCAD', 'Archicad', '1:5 Construction Nodes'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Part 01',
        title: '1:5 Nodes for Flush Shower Trays & Embedded Glass Channels',
        summary: 'Calculating screed thickness, waterproofing collars, and 1.5% drainage slopes.',
        deliverable: '8 DWG Wet-Zone Construction Nodes',
        durationMinutes: 130,
      },
    ],
    previewVideo: {
      duration: '15:30',
      lectureTitle: 'How to Build a Curbless Shower Without Silicone Strips',
      lightingSetup: 'Technical Section Breakdown',
      renderEngine: 'CAD 1:5 Node Inspection',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Recessing Stainless U-Profiles into Floor Tile Adhesive',
          keyTakeaway: 'Coordinating glass order dimensions after tile installation.',
        },
      ],
    },
    includedAssets: [
      'Editable .DWG & .PDF Pack of 8 Shower & Partition Nodes',
      'Hardware & Profile Specification List',
    ],
  },
  {
    id: 'webinar-lighting-scenarios',
    code: 'GR-206',
    groupKey: 'webinars-masterclasses',
    title: 'Webinar "Architectural Lighting Scenarios"',
    subtitle: 'Color temperature, CRI, recessed magnetic tracks, evening scenes, and master switches.',
    category: ProgramCategory.WEBINARS,
    categoryBadge: 'LIGHTING',
    formatBadge: 'WEBINAR',
    ctaLabel: 'Details',
    tags: ['2700K–3000K', 'Magnetic Tracks', 'Lighting Scenes'],
    description:
      'Stop placing grids of ceiling spotlights. Learn how to sculpt architectural volume with grazing wall washers, hidden curtain-pocket LEDs, and glare-free dark-light optics.',
    imageUrl: imgParametricVilla,
    imageAlt: 'Contemporary luxury residence glowing with warm architectural lighting at twilight',
    architecturalTopic: 'Architectural Lighting Design',
    priceUSD: 45,
    originalPriceUSD: 65,
    durationWeeks: 1,
    lessonsCount: 6,
    studioHours: 7,
    softwareStack: ['DIALux', 'Lighting Electrical Plans'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Part 01',
        title: '3-Layer Illumination: Functional, Accent & Night Navigation',
        summary: 'Beam angles (15°–36°), deep-recessed anti-glare trims, and dimming protocols.',
        deliverable: 'Complete Lighting & Switching Plan Template',
        durationMinutes: 135,
      },
    ],
    previewVideo: {
      duration: '17:05',
      lectureTitle: 'Why Grids of Downlights Ruin Expensive Interiors',
      lightingSetup: '2700K Warm Architectural Evening Scene',
      renderEngine: 'Photometric Lighting Demonstration',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Replacing Central Chandeliers with Perimeter Grazing Light',
          keyTakeaway: 'Positioning spots 450mm from wall surfaces to avoid scallop harshness.',
        },
      ],
    },
    includedAssets: [
      'Tested Luminaire Specification Guide (CRI 95+ Fixtures)',
      'Sample Electrical Switching & DALI Grouping Blueprints',
    ],
  },

  // GROUP 3: INDIVIDUAL MENTORSHIP (1 Card in 3-Column Grid)
  {
    id: 'individual-architectural-mentorship',
    code: 'GR-301',
    groupKey: 'mentorship',
    title: 'Individual Training on Architectural Design',
    subtitle: 'Personal 1-on-1 studio mentorship with Godwin Richard tailored to your live client projects.',
    category: ProgramCategory.MENTORSHIP,
    categoryBadge: 'MENTORSHIP',
    formatBadge: 'VIP TRACK',
    ctaLabel: 'Details',
    tags: ['1-on-1 Supervision', 'Live Client Projects', 'Studio Operations'],
    description:
      'Bespoke 8-week mentorship for practicing architects and studio founders. We audit your working drawings, refine your floorplan methodology, structure high-ticket contracts, and supervise your active projects together.',
    imageUrl: imgStudioTeam,
    imageAlt: 'Personal architectural mentorship session reviewing drawings and models',
    architecturalTopic: 'Executive Architectural Mentorship',
    priceUSD: 990,
    originalPriceUSD: 1250,
    durationWeeks: 8,
    lessonsCount: 16,
    studioHours: 48,
    softwareStack: ['Full Bureau Standards', 'Contracts & Pricing', 'Live Project Audit'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Weeks 01–04',
        title: 'Deep Audit of Your Current Drawings, Contracts & Workflow',
        summary: 'Transferring our studio BIM templates, legal agreements, and stage checklists.',
        deliverable: 'Customized Studio Operations & Drawing Package',
        durationMinutes: 360,
      },
      {
        week: 'Weeks 05–08',
        title: 'Joint Supervision of Your Active Client Commissions',
        summary: 'Weekly private Zoom sessions reviewing your client floorplans, nodes, and site issues.',
        deliverable: '2 Fully Completed High-Ticket Client Projects',
        durationMinutes: 360,
      },
    ],
    previewVideo: {
      duration: '19:45',
      lectureTitle: 'How Individual Mentorship Scales Your Architectural Practice',
      lightingSetup: 'Private Studio Walkthrough',
      renderEngine: 'Bureau Workflow System',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Transitioning from Solo Designer to Structured Bureau',
          keyTakeaway: 'Delegating drafting while retaining 100% authorial quality control.',
        },
      ],
    },
    includedAssets: [
      '8 Private 1-on-1 Zoom Sessions Directly with Godwin Richard',
      'Full Commercial License to Bureau BIM Templates & Contracts',
      'Direct Private Telegram Channel for Daily Project Questions',
    ],
  },

  // GROUP 4: INTERIOR DESIGN MINI-COURSES (3 Cards in 3-Column Grid)
  {
    id: 'mini-course-100-master-bedroom',
    code: 'GR-401',
    groupKey: 'interior-mini-courses',
    title: 'Mini-Course "100% Master Bedroom"',
    subtitle: 'Designing autonomous master blocks with walk-in wardrobes and en-suite bathrooms.',
    category: ProgramCategory.MINI_COURSES,
    categoryBadge: 'MINI-COURSE',
    formatBadge: 'MINI-COURSE',
    ctaLabel: 'Buy Now',
    tags: ['Master Block', 'Walk-In Wardrobe', 'Acoustic Insulation'],
    description:
      'Complete guide to hotel-grade master suites: acoustic separation from living zones, walk-in closet ventilation, bedside switching ergonomics, and textile layering.',
    imageUrl: imgBedroomSuite,
    imageAlt: 'Photorealistic minimalist master bedroom suite with warm oak and linen textures',
    architecturalTopic: 'Master Suite Architecture',
    priceUSD: 59,
    originalPriceUSD: 89,
    durationWeeks: 2,
    lessonsCount: 10,
    studioHours: 14,
    softwareStack: ['Archicad', 'AutoCAD', 'Millwork Nodes'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Module 01',
        title: 'Master Block Circulation: Bedroom + Wardrobe + En-Suite',
        summary: 'Preventing morning noise disturbances by routing en-suite access through the dressing room.',
        deliverable: '12 Master Suite Zoning Schemes',
        durationMinutes: 165,
      },
    ],
    previewVideo: {
      duration: '14:20',
      lectureTitle: 'Ergonomics of the Ideal Master Bedroom & Dressing Room',
      lightingSetup: 'Soft Morning Bedroom Daylight',
      renderEngine: 'Corona Interior Visualization',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Why the En-Suite Door Should Never Face the Bed Headboard',
          keyTakeaway: 'Creating an acoustic buffer zone via a walk-through wardrobe.',
        },
      ],
    },
    includedAssets: [
      '12 Master Block Planning Templates with Exact Dimensions',
      'Wardrobe Millwork Section Drawings (Hangers, Drawers, Shoe Racks)',
    ],
  },
  {
    id: 'mini-course-100-kitchen-and-living',
    code: 'GR-402',
    groupKey: 'interior-mini-courses',
    title: 'Mini-Course "100% Kitchen & Living Room"',
    subtitle: 'Open-plan kitchen-living rooms, monolithic islands, concealed pantries, and ventilation.',
    category: ProgramCategory.MINI_COURSES,
    categoryBadge: 'MINI-COURSE',
    formatBadge: 'MINI-COURSE',
    ctaLabel: 'Buy Now',
    tags: ['Kitchen Island', 'Millwork Details', 'Living Ergonomics'],
    description:
      'How to unite kitchen, dining, and living zones into a cohesive architectural space: island clearances, built-in appliance columns, exhaust ducting, and sofa proportions.',
    imageUrl: imgScandinavianKitchen,
    imageAlt: 'Bespoke Scandinavian kitchen and living room with oak cabinetry and stone island',
    architecturalTopic: 'Scandinavian Kitchen Design',
    priceUSD: 59,
    originalPriceUSD: 89,
    durationWeeks: 2,
    lessonsCount: 12,
    studioHours: 16,
    softwareStack: ['Archicad', 'AutoCAD', 'Kitchen Millwork'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Module 01',
        title: 'Kitchen Triangle, Island Proportions & Concealed Pantries',
        summary: 'Detailing 1100mm aisle clearances, integrated fridge ventilation, and stone overhangs.',
        deliverable: 'Complete Kitchen Millwork & Electrical Package',
        durationMinutes: 190,
      },
    ],
    previewVideo: {
      duration: '16:10',
      lectureTitle: 'Designing a Monolithic Kitchen Island That Anchors the Living Room',
      lightingSetup: 'Diffused Nordic Daylight',
      renderEngine: 'BIM + Corona Millwork Study',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Hiding Small Appliances in Pocket-Door Breakfast Stations',
          keyTakeaway: 'Keeping open-plan kitchen countertops clutter-free when hosting.',
        },
      ],
    },
    includedAssets: [
      'Kitchen Electrical & Plumbing Outlet Height Standards',
      '15 Open-Plan Kitchen-Living Room Layout Blueprints',
    ],
  },
  {
    id: 'mini-course-100-3d-visualization',
    code: 'GR-403',
    groupKey: 'interior-mini-courses',
    title: 'Mini-Course "100% 3D Visualization"',
    subtitle: 'Photorealistic interior rendering, natural daylight setup, and tactile PBR materials.',
    category: ProgramCategory.MINI_COURSES,
    categoryBadge: '3D VISUALIZATION',
    formatBadge: 'MINI-COURSE',
    ctaLabel: 'Details',
    tags: ['3ds Max + Corona', 'Natural Daylight', 'Shader Library'],
    description:
      'Create magazine-grade architectural renders in 3ds Max and Chaos Corona. Covers physical camera composition, realistic plaster/stone shaders, and fast render optimization.',
    imageUrl: imgVisualizerWorkstation,
    imageAlt: 'Architectural visualizer working on photorealistic 3D interior render on dual monitors',
    architecturalTopic: 'Photorealistic 3D Visualization',
    priceUSD: 149,
    originalPriceUSD: 199,
    durationWeeks: 4,
    lessonsCount: 18,
    studioHours: 28,
    softwareStack: ['Autodesk 3ds Max', 'Chaos Corona 11', 'Camera Raw'],
    leadArchitect: {
      name: 'Godwin Richard',
      role: 'Principal Architect',
      studio: 'Godwin Richard Architecture & Design',
    },
    syllabus: [
      {
        week: 'Weeks 01–02',
        title: 'Camera Framing & Natural Daylight Balance',
        summary: 'Setting up physical cameras, HDRI skies, and portal planes without overexposure.',
        deliverable: '4 Clay & Daylight Interior Passes',
        durationMinutes: 220,
      },
      {
        week: 'Weeks 03–04',
        title: 'PBR Shaders, LightMix & Final Post-Production',
        summary: 'Authoring oak, travertine, linen, and brushed brass materials for instant client approval.',
        deliverable: '6 Final High-Resolution Portfolio Renders',
        durationMinutes: 250,
      },
    ],
    previewVideo: {
      duration: '20:05',
      lectureTitle: 'Setting Up Realistic Natural Daylight in 15 Minutes',
      lightingSetup: 'Corona Sky + Directional Sun Portal',
      renderEngine: '3ds Max + Chaos Corona 11',
      chapters: [
        {
          timestamp: '00:00',
          title: 'Why Albedo & Highlight Compression Matter More Than Post-Processing',
          keyTakeaway: 'Achieving 95% of the final look directly inside the Corona VFB.',
        },
      ],
    },
    includedAssets: [
      'Complete Ready-to-Render 3ds Max + Corona Interior Scene',
      '40 Calibrated 8K Architectural Shaders (Wood, Stone, Plaster, Textiles)',
    ],
  },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: 'vp-methodology',
    iconName: 'methodology',
    title: 'Clear Methodology',
    description:
      'Every program is structured step-by-step without filler: from initial site and ergonomic measurements to final contractor-ready blueprints.',
  },
  {
    id: 'vp-practice',
    iconName: 'practice',
    title: '100% Real Practice',
    description:
      'All lectures are based on 100+ built private houses and residential interiors—analyzing real construction nodes, budgets, and on-site solutions.',
  },
  {
    id: 'vp-verified',
    iconName: 'verified',
    title: 'Verified Solutions',
    description:
      'You receive ready-to-use checklists, ergonomic dimension tables, and CAD/BIM drawing standards that you can apply immediately to your projects.',
  },
];
