import { Component } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form1';
  regform(item:any)
  {
    return "hii";
  }
//02
LoginForm=new FormGroup({
Name:new FormControl("",[Validators.required]),
Fname:new FormControl("",[Validators.required]),
mobile:new FormControl("",[Validators.required]),
Dob:new FormControl("",[Validators.required]),
Password:new FormControl("",[Validators.required]),

});

loginUser()
{
  console.warn(this.LoginForm.value)
}
  
get namevalidator()
{
  return this.LoginForm.get('Name');
}
get fnamevalidator()
{
  return this.LoginForm.get('Fname');
}
get mobileValidator()
{
  return this.LoginForm.get('mobile');
}
get Dobvalidator()
{
  return this.LoginForm.get('Dob')
}
get passvalidator()
{
  return this.LoginForm.get('Password')
}

}
