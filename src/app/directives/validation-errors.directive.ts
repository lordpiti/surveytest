import { Directive, ElementRef, Renderer, Input, EventEmitter, SimpleChange } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var toastr: any;

@Directive({
    selector: '[displayErrors]',
    inputs: ['form: error-form', 'displayErrors'], // this is the same like doing @Input('error-form') form
    outputs: ['errorValueChanged'] // this is the same like doing @Output('errorValueChanged')
})
export class DisplayValidationErrors {
    public element: ElementRef;
    public renderer: Renderer;
    public errorValueChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    public form: NgForm;
    public displayErrors: boolean;

    constructor(el: ElementRef, renderer: Renderer) {
        this.element = el;
        this.renderer = renderer;
    }

    animateShockIfInvalid = function (elem: any) {
        var elemName = elem.id;
        var parentElem = elem.parentElement;

        if (this.form && !this.form.controls[elemName].valid) {
            parentElem.classList.add("validation-shock");
            this.renderer.listen(parentElem, 'transitionend', (event: any) => {
                parentElem.classList.remove("validation-shock");
            });
        }
    };

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        var errors = changes['displayErrors'];
        if (errors && !errors.isFirstChange() && this.element.nativeElement && errors.currentValue === true) {
            var inputSelector = 'input[type="text"], input.validateHidden, ckeditor, input[type="password"], input[type="date"], input[type="time"], input[type="number"], input[type="email"], input[type="radio"], input[type="checkbox"], input[type="tel"], select, textarea, .selectize-control';
            var inputElements = $(this.element.nativeElement).find(inputSelector);
            for (var i = 0; i < inputElements.length; i++) {
                var el = inputElements[i];
                var id = el.getAttribute('id');
                var control = this.form.controls[id];
                if (control) {
                    control.markAsTouched();
                    el.classList.toggle('has-error')
                    if (!control.valid) {
                        this.animateShockIfInvalid(el);
                    }
                }
            }
            var $firstErrorElement = inputElements.filter('.ng-invalid').first();
            var _this = this;

            if ($firstErrorElement && $firstErrorElement.length) {
                setTimeout(function () {
                    var offsetAdjust = 58; // not sure why: jquery reports 58 pixels to few in this case

                    console.log($firstErrorElement.closest('div.form-group'));
                    $('body').animate({
                        scrollTop: $firstErrorElement.closest('div.form-group').offset().top - offsetAdjust
                    }, {
                            duration: 300,
                            complete: function () {
                                toastr.options = { "timeOut": "3000" };
                                toastr['error']('You have errors in your form');
                            }
                        });

                    $firstErrorElement.focus();
                    _this.errorValueChanged.emit(false);

                }, 100);
            }
        }
    }
}