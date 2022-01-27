import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'uppercasePipeCreatedByMe'
})
export class MayusculasPipe implements PipeTransform {

    transform( value: string, applyUppercase?: boolean ): string {
        if (applyUppercase) 
            return value.toUpperCase()
        else
            return value
    }

}