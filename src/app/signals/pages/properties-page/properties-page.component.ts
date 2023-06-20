import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);

  public counter = signal(10);

  public userChangedEffect = effect(() => { //Acción que se dispara cada que se modifique un signal interno a este
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  public user = signal<User>({
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  });

  onFieldUpdated(field: keyof User, value: string) {

    /* this.user.set({
       ...this.user(),
       [field]: value
     }) */

    /*  this.user.update(current => {  --------Se emplea para modificar todo el objeto en su totalidad, posee un return y no están minucioso con el tipado de datos
        return {
          ...current,
          [field]: value
        }
      });*/

    this.user.mutate(current => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }
    });
  }

  increaseBy(value: number) {
    this.counter.update(current => current + value);
  }
}
