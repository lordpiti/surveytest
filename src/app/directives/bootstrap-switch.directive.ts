import { Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';
declare var MediaElementPlayer: any;

@Directive({
    selector: '.sh-bootstrap-switch'
})

export class BootstrapSwitchDirective {
    public element: ElementRef;

    @Input() ngModel;
  	@Output() ngModelChange = new EventEmitter();

    constructor(el: ElementRef) {
        this.element = el;
        var _this = this;

        $(el.nativeElement).bootstrapSwitch({
            onColor: "success",
            onText: "Yes",
            offColor: "danger",
            offText: "No",
            onSwitchChange: function (event, state) {
                var $element = $(event.currentTarget);
                var isChecked = $element.is(':checked')
                _this.ngModel = isChecked;
				_this.ngModelChange.emit(_this.ngModel);
            }
        });
    }
}