import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    {
      title: 'Contador',
      route: '/signals/counter'
    },
    {
      title: 'Usuario',
      route: '/signals/user-info'
    },
    {
      title: 'Mutaciones',
      route: '/signals/properties'
    },
  ]);

  /* Forma tradicional de declarar un menu de items
    public menuItems: MenuItem[] = [
      {
        title: 'Contador',
        route: '/signals/counter'
      },
      {
        title: 'Usuario',
        route: '/signals/user-info'
      },
      {
        title: 'Mutaciones',
        route: '/signals/properties'
      },
    ]
    */
}
