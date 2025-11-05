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
  TOAST = ' TOAST'
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
    textButton: 'Learn more',
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
    label: '(Why choose me)',
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
    title: 'Goals:'
  },
  [SECTION.MY_ROLE]: {
    title: 'My role:'
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
};
