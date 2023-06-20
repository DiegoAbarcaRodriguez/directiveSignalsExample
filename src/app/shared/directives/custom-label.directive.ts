import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({ selector: '[customLabel]' })
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null | undefined;

  @Input()
  set color(color: string) {//Es necesario especificar los parámetros de la directiva como  @Input y con set
    this._color = color;
    this.setStyle();
  }

  @Input()
  set errors(value: ValidationErrors | undefined | null) {
    this._errors = value;
    this.setMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) { //Permite aludir la etiqueta HTML host de la directiva
    this.htmlElement = el;

    this.setStyle();

  }


  setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = '';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'Este Campo es Requerido';
      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors['minlength']['requiredLength'];
      const current = this._errors['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerHTML = `Mínimo ${current}/${min} caracteres`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = 'Formato de email no válido';
      return;
    }




  }
}
