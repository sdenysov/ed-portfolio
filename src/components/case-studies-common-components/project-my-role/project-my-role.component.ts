import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../section-header/section-header.component';
import { SECTION } from '../../section-header/section-header.config';
import { ProjectId } from '../../projects-grid/projects.config';

interface ProjectRoleItem {
  title: string;
  name: string;
  description: string;
}

interface ProjectMyRoleConfig {
  roleDescription: string;
  roles: ProjectRoleItem[];
}

@Component({
  selector: 'app-project-my-role',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './project-my-role.component.html',
  styleUrl: './project-my-role.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectMyRoleComponent {
  @Input({ required: true }) projectId!: ProjectId;

  readonly SECTION = SECTION;

  private readonly configs: Record<ProjectId, ProjectMyRoleConfig> = {
    [ProjectId.PROJECT_MANAGEMENT]: {
      roleDescription: 'I was responsible for leading the design side of the system initiative:',
      roles: [
        {
          title: '01',
          name: 'Audit & research',
          description: '– conducted a UI inventory and identified inconsistencies and accessibility issues.'
        },
        {
          title: '02',
          name: 'Token architecture',
          description: '– defined and implemented color, typography, and spacing tokens in Figma.'
        },
        {
          title: '03',
          name: 'Component standardization',
          description: '– rebuilt core components (buttons, inputs, forms) with flexible variants and accessibility baked in.'
        },
        {
          title: '04',
          name: 'Cross-functional collaboration',
          description: '– partnered with developers to align Figma libraries with coded components and establish a governance model for contributions.'
        }
      ]
    },
    [ProjectId.ROUTIQ]: {
      roleDescription:
        'I was responsible for the end-to-end design process — from early discovery and research to defining the brand identity, building a cross-platform design system, creating user flows and high-fidelity interfaces, and validating the experience through usability testing.',
      roles: [
        {
          title: '01',
          name: 'Product research',
          description:
            '– conducted competitive analysis and user flow exploration to understand user pain points and needs. Used what I learned to define the main problem and spot opportunities to improve the experience.'
        },
        {
          title: '02',
          name: 'Brand identity & design system',
          description:
            '– developed a cohesive visual identity for Routiq, including typography, color palette, and iconography direction. Created cross-platform design tokens and built a scalable design system using native components.'
        },
        {
          title: '03',
          name: 'UX design',
          description:
            '– designed core task flows and mapped the algorithm logic that powers the “next best action” recommendations. Created low-fidelity wireframes to explore layout options and validate information hierarchy and functional requirements.'
        },
        {
          title: '04',
          name: 'UI design & usability testing',
          description:
            '– developed high-fidelity interfaces for iOS, ensuring visual consistency and strong platform alignment. Conducted usability testings to ensure the design met user expectations.'
        }
      ]
    },
    [ProjectId.ESPORT_TRACKER]: {
      roleDescription: '',
      roles: []
    }
  };

  get config(): ProjectMyRoleConfig {
    return this.configs[this.projectId];
  }
}

// Made with Bob
