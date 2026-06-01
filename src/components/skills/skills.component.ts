import { Component, ChangeDetectionStrategy } from '@angular/core';

enum SkillCategory {
  WhatIDo = 'WhatIDo',
  HowIThink = 'HowIThink'
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skillsSectionTitle = 'Skills';
  skillsDescription = 'I work across the full design process — from research and wireframes through to polished UI and developer handoff — using methods grounded in user-centered design and accessibility.';
  
  skillsCategories = [
    { title: '(What I do)', type: SkillCategory.WhatIDo },
    { title: '(How I think)', type: SkillCategory.HowIThink }
  ];
  
  skillsData = {
    [SkillCategory.WhatIDo]: [
      'Wireframing',
      'Prototyping',
      'UX Research',
      'Design systems',
      'Accessibility standards'
    ],
    [SkillCategory.HowIThink]: [
      'Agile',
      'Design thinking',
      'User-centered design',
      'Cross-team collaboration',
      'Design critique'
    ]
  };
}

