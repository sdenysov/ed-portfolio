import { SectionHeaderConfig } from '../../models/section-header-config';

export enum SECTION {
  WORKS = 'WORKS',
  EXPERIENCE = 'EXPERIENCE',
  EXPERTISE = 'EXPERTISE',
  FOOTER = 'FOOTER',
  CONTACT = 'CONTACT',
  ABOUT = 'ABOUT',
  CORE_VALUES = 'CORE_VALUES',
  CASE_STUDIES = 'CASE_STUDIES',
  PROBLEMS = 'PROBLEMS',
  GOALS = 'GOALS',
  MY_ROLE = 'MY_ROLE',
  OUTCOMES = 'OUTCOMES',
  COLORS = 'COLORS',
  TYPOGRAPHY = 'TYPOGRAPHY',
  SPACING_SYSTEM = 'SPACING_SYSTEM',
  SHADOWS = 'SHADOWS',
  ICONS = 'ICONS',
  ALERTS = 'ALERTS',
  AVATAR = 'AVATAR',
  BUTTON = 'BUTTON',
  CONTROLS = 'CONTROLS',
  INPUT = ' INPUT',
  MODAL = ' MODAL',
  TABLE = ' TABLE',
  TOAST = ' TOAST',
  RESEARCH_DISCOVERY = 'RESEARCH_DISCOVERY',
  COMPETITOR_ANALYSIS = 'COMPETITOR_ANALYSIS',
  SURVEY = 'SURVEY',
  USER_PERSONAS = 'USER_PERSONAS',
  RESEARCH_INFORMED_DESIGN = 'RESEARCH_INFORMED_DESIGN'
}

export const SECTION_HEADER_CONFIG: Record<SECTION, SectionHeaderConfig> = {
  [SECTION.WORKS]: {
    label: '(Case studies)',
    title: 'Works',
    textButton: 'View all projects',
  },
  [SECTION.EXPERIENCE]: {
    label: '(From 2021)',
    title: 'Experience',
    textButton: 'Download resume',
  },
  [SECTION.EXPERTISE]: {
    label: '(4)',
    title: 'Expertise',
    textButton: 'See how I work',
  },
  [SECTION.FOOTER]: {
    label: '(Let’s collaborate)',
    title: 'Get in touch',
    textButton: 'Contact',
  },
  [SECTION.CONTACT]: {
    label: '(Get in touch)',
    title: 'Contact'
  },
  [SECTION.ABOUT]: {
    label: '(A bit more about me)',
    title: 'About'
  },
  [SECTION.CORE_VALUES]: {
    label: '(How I work)',
    title: 'Core values'
  },
  [SECTION.CASE_STUDIES]: {
    label: '(Portfolio)',
    title: 'Case studies'
  },
  [SECTION.PROBLEMS]: {
    title: 'Problems'
  },
  [SECTION.GOALS]: {
    title: 'Goals'
  },
  [SECTION.MY_ROLE]: {
    title: 'My role'
  },
  [SECTION.OUTCOMES]: {
    title: 'Outcomes & impact'
  },
  [SECTION.COLORS]: {
    title: '01. Colors'
  },
  [SECTION.TYPOGRAPHY]: {
    title: '03. Typography'
  },
  [SECTION.SPACING_SYSTEM]: {
    title: '04. Spacing system'
  },
  [SECTION.SHADOWS]: {
    title: '05. Shadows'
  },
  [SECTION.ICONS]: {
    title: '06. Icons'
  },
  [SECTION.ALERTS]: {
    title: '01. Alerts'
  },
  [SECTION.AVATAR]: {
    title: '02. Avatar'
  },
  [SECTION.BUTTON]: {
    title: '03. Button'
  },
  [SECTION.CONTROLS]: {
    title: '04. Controls'
  },
  [SECTION.INPUT]: {
    title: '05. Input'
  },
  [SECTION.MODAL]: {
    title: '06. Modal window'
  },
  [SECTION.TABLE]: {
    title: '07. Table'
  },
  [SECTION.TOAST]: {
    title: '08. Toast'
  },
  [SECTION.RESEARCH_DISCOVERY]: {
    title: 'Research & Discovery'
  },
  [SECTION.COMPETITOR_ANALYSIS]: {
    title: '01. Competitor analysis'
  },
  [SECTION.SURVEY]: {
    title: '02. Survey'
  },
  [SECTION.USER_PERSONAS]: {
    title: '03. User personas'
  },
  [SECTION.RESEARCH_INFORMED_DESIGN]: {
    title: '04. How research informed design'
  },
};
