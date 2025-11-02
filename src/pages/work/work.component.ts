import { Component, ChangeDetectionStrategy } from '@angular/core';
import {CaseStudiesComponent} from "../../components";

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ CaseStudiesComponent ]
})
export class WorkComponent {}
