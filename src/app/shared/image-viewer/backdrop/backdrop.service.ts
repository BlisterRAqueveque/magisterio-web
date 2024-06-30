import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  inject
} from '@angular/core';

@Injectable()
export class DomService {
  private componentFactoryResolver = inject(ComponentFactoryResolver);
  private appRef = inject(ApplicationRef);
  private injector = inject(Injector);

  $component!: any;
  componentRef!: ComponentRef<unknown>;

  appendComponentToBody(component: any, src: string) {
    // 1. Create a component reference from the component
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    (this.componentRef.instance as any).src = src;

    // const componentRef = this.viewContainerRef.createComponent(component);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);
  }

  detachComponentFromBody() {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}
