import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { KeyComponent } from 'src/app/components/key/key.component';
import { KEYBOARD_ROWS } from 'src/app/constants/keys';
import { KNOW_NOTHING } from '../../constants/sentences';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, KeyComponent],
})
export class KeyboardComponent {
  public readonly KEYBOARD_ROWS = KEYBOARD_ROWS;
  public readonly TARGET_TEXT = KNOW_NOTHING;

  constructor() {}
}
