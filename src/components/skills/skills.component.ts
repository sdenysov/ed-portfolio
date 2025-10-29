import { Component, ChangeDetectionStrategy } from '@angular/core';

enum SkillType {
  Tools = 'Tools',
  Skills = 'Skills',
  Methods = 'Methods'
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skillsSectionTitle = 'Skills'
  skillsTypes = [
    { title: '(Tools)', type: SkillType.Tools },
    { title: '(Skills)', type: SkillType.Skills },
    { title: '(Methods)', type: SkillType.Methods }
  ];
  skillsData = {
    [SkillType.Tools]: [
      'Figma',
      'FigJam',
      'Jira',
      'Confluence',
      'AI tools'
    ],
    [SkillType.Skills]: [
      'Wireframing',
      'Prototyping',
      'UX Research',
      'Design systems',
      'Accessibility standards'
    ],
    [SkillType.Methods]: [
      'Agile',
      'Design Thinking',
      'User-centered Design',
      'Cross-team collaboration',
      'Design critique'
    ]
  };
}

