import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MaskService } from 'src/app/core/services/dashboard/mask.service';

@Directive({
  selector: '[appValueMask]',
})
export class ValueMaskDirective implements OnInit, OnDestroy {
  private originalText: string = '';
  private subscription!: Subscription;

  constructor(private el: ElementRef, private maskService: MaskService) {}

  ngOnInit(): void {
    this.waitForText().then(() => {
      this.subscription = this.maskService.maskState$.subscribe((isMasked) => {
        this.el.nativeElement.textContent = isMasked
          ? '•••••••'
          : this.originalText;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private waitForText(interval = 100): Promise<void> {
    return new Promise((resolve) => {
      const check = () => {
        const text = this.el.nativeElement.textContent.trim();
        if (text) {
          this.originalText = text;
          resolve();
        } else {
          setTimeout(check, interval);
        }
      };
      check();
    });
  }
}
