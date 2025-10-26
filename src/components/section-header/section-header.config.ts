import { SectionHeaderConfig } from '../../models/section-header-config';

export enum SECTION {
  WORKS = 'WORKS',
  EXPERIENCE = 'EXPERIENCE',
  EXPERTISE = 'EXPERTISE',
  FOOTER = 'FOOTER',
  CONTACT = 'CONTACT',
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
};
