import {FormControl, FormGroup} from '@angular/forms'

export class PWChangeValidators {
  static oldPw = 'i dont know';
   static OldPasswordMustBeCorrect(control: FormControl) {
     // var invalid = false;
     // if (control.value != PWChangeValidators.oldPW)
     //   return { oldPasswordMustBeCorrect: true }
     // return null;
   }

   static newIsNotOld(group: FormGroup){
     var newPW = group.controls['newPW'];
     if(group.controls['current'].value == newPW.value)
     newPW.setErrors({ newIsNotOld: true });
     return null;
   }
   static newMatchesConfirm(group: FormGroup){
     var confirm = group.controls['confirm'];
     if(group.controls['newPW'].value !== confirm.value)
     confirm.setErrors({ newMatchesConfirm: true });
     return null;
   }
}
