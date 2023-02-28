import {
  Component,
  ComponentFactoryResolver,
  Inject,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_COMPONENTS_PROVIDER } from '../tokens';
import { Observable } from 'rxjs';
import { ComponentLoaderDirective } from '../directives/component-loader.directive';

@Component({
  selector: 'ecommerce-b2b-and-b2c-auth',
  standalone: true,
  imports: [CommonModule, ComponentLoaderDirective],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  /* @ViewChild(ComponentLoaderDirective, {static: true}) private dynamicHost!: ComponentLoaderDirective;  

  container!: ViewContainerRef;

  components = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(AUTH_COMPONENTS_PROVIDER) componentProvider: Observable<any>
  ) {}

  public ngOnInit(): void {
    this.componentProvider.subscribe
  }

  public openB2B(): void {
    const component = '@ecommerce-b2b-and-b2c/auth-b2b/features';
  }

  public openB2C(): void {}

  addComponent(componentClass: Type<any>) {
    const viewContainerRef = this.dynamicHost.viewContainerRef;  
    viewContainerRef.clear();  
  
    const componentRef = viewContainerRef.createComponent<any>(message.type); 
  }

  removeComponent(componentClass: Type<any>) {
    const component = this.components.find(
      (component) => component.instance instanceof componentClass
    );
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      this.container.remove(this.container.indexOf(component));
      this.components.splice(componentIndex, 1);
    }
  } */
}
