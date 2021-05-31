import { MDCRipple } from '@material/ripple/component';
import { MDCTextField } from '@material/textfield/component';

const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
    return new MDCRipple(el);
});

const textField = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    return new MDCTextField(el);
});