import { Directive, ElementRef} from '@angular/core';
declare var MediaElementPlayer: any;

@Directive({
    selector: '.sh-mediaelementplayer'
})

export class MediaElementPlayerDirective {
    public element: ElementRef;

    constructor(el: ElementRef) {
        this.element = el;
    }

    ngAfterContentChecked() {
        new MediaElementPlayer('#' + this.element.nativeElement.id, {
            pauseOtherPlayers: true,
            hideVideoControlsOnLoad: true
        });
    }
}