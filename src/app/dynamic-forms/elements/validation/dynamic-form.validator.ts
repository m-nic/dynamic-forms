import { FormGroup } from '@angular/forms';


export class ValidationService {

    static getValidatorErrorMessage(
        validatorName: string,
        validatorValue?: any
    ) {
        let config = (key: string, value: any) => {
            if (value.customMessage) {
                return value.customMessage;
            }
        };

        return config(validatorName, validatorValue);
    }


    static regexValidator(regex: RegExp, message: string = '') {
        return (input: FormGroup) => {
            if (!input.value || regex.test(input.value)) {
                return null;
            }
            return {
                'invalidRegex': {
                    customMessage: message
                }
            }
        }
    }


}
