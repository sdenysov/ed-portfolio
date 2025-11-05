import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

@Component({
  selector: 'app-components-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent {
  SECTION = SECTION;
  sectionImgSrc = 'images/project-management-design-system/components-section/components-section.png';

  configAlerts = {
    subtitle: 'Alerts are used to communicate important information that requires the user’s attention. They help users understand the status of an action, a potential issue, or a system update.',
    description: "Our system includes four types of alerts — negative, warning, positive, and neutral — each designed for a specific context.",
    contentImgSrc: 'images/project-management-design-system/components-section/alerts-image.png'
  };

  configAvatar = {
    subtitle: "We use avatars to visually represent a user, team, or organization within the product interface. They help users quickly identify people or groups through images, icons, or initials when a photo is not available. Avatars are typically displayed in lists, profile headers, comments, or activity feeds.",
    contentImgSrc: 'images/project-management-design-system/components-section/avatar-image.png'
  };

  configButton = {
    headerImgSrc: 'images/project-management-design-system/components-section/button/button-header-image.png',
    subtitle: "Buttons are interactive elements used to trigger actions or navigate users through the product. They are one of the most frequently used components in the interface and should clearly communicate their purpose through concise labels. Button styles reflect the hierarchy and importance of actions within a page or flow.",
    buttonItems: [
      {
        name: 'Primary button',
        itemTitle: 'Used for the main action on a page or within a form.',
        images: [ 'images/project-management-design-system/components-section/button/primary-button.png',]
      },
      {
        name: 'Secondary button',
        itemTitle: 'Used for supporting actions that are not the main focus.',
        images: [ 'images/project-management-design-system/components-section/button/secondary-button.png',]
      },
      {
        name: 'Link button',
        itemTitle: 'Used for navigation or low-emphasis actions that take the user to another page or section.',
        images: [ 'images/project-management-design-system/components-section/button/link-button.png',]
      },
      {
        name: 'Destructive button',
        itemTitle: 'Used for actions that remove data or cannot be undone. Highlighted in red to draw attention and prompt confirmation.',
        images: [ 'images/project-management-design-system/components-section/button/destructive-button.png',]
      },
    ]
  };

  configControls = {
    subtitle: "Controls let users select zero, one, or multiple items from a list. Previously, the system lacked consistency in spacing, states, and alignment across these components, leading to usability and accessibility issues.",
    controlsItems: [
      {
        name: 'Checkbox',
        itemTitle: 'Used for selecting one or multiple options from a list. Includes an optional description to provide additional context.',
        images: [ 'images/project-management-design-system/components-section/controls/checkbox.png',]
      },
      {
        name: 'Radio button',
        itemTitle: 'Used for selecting a single option from a set of choices. Includes clear labels and descriptions to ensure clarity.',
        images: [ 'images/project-management-design-system/components-section/controls/radio-button.png',]
      },
      {
        name: 'Toggle',
        itemTitle: 'Used to switch settings or features on and off. Provides immediate visual feedback of the current state.',
        images: [ 'images/project-management-design-system/components-section/controls/toggle.png',]
      },
    ]
  };

  configInput = {
    subtitle: 'Inputs are used to enter and edit information such as text, numbers, or passwords. They are essential for data collection and form interactions across the product. Consistent padding, label alignment, and helper text maintain visual harmony and usability across all forms.',
    description: "Our system includes four types of alerts — default, hover, focus, error and disabled — each designed for a specific context.",
    contentImgSrc: 'images/project-management-design-system/components-section/input-image.png'
  };

  configModal = {
    subtitle: 'Modals are used for tasks that need explicit acknowledgment — such as confirmations, warnings, or forms — without navigating away from the current context.',
    contentImgSrc: 'images/project-management-design-system/components-section/modal-image.png'
  };

  configTable = {
    subtitle: "Table are used to organize and display structured information in rows and columns, making it easy to compare, scan, and analyze data. They are best suited for presenting datasets such as list of users.",
    description: 'The improved table design enhances readability and enables faster decision-making through optimized hierarchy, spacing, and alignment.',
    tableItems: [
      {
        name: 'Table head',
        images: [ 'images/project-management-design-system/components-section/table/table-head.png',]
      },
      {
        name: 'Table cell',
        images: [ 'images/project-management-design-system/components-section/table/table-cell.png',]
      },
      {
        name: 'Table',
        images: [ 'images/project-management-design-system/components-section/table/table.png',]
      }
    ]
  };

  configToast = {
    subtitle: 'Toasts are used for tasks that need explicit acknowledgment — such as confirmations, warnings, or forms — without navigating away from the current context.',
    contentImgSrc: 'images/project-management-design-system/components-section/toasts-image.png'
  };
}
