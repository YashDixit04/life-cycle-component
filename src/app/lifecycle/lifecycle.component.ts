import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() text?: string;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  // ngOnChanges - Executes whenever the input value changes. An you can yse that hook to. for example: update some component internal state, So some other property that you might need to manage which might need to change as inout values change.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // ngDoCheck - is related to Angular's change detection mechanism. ngDoCheck is invoked by Angular whenever Angular thinks that a UI update might be needed.  
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // ngAfterContentInit -So the "Content" is some other(partial) view data structure projected into this components view. for example: <ng-content/>
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // ngAfterContentChecked - whenever the content has been checked by Angular's Change detection mechanism.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // ngAfterViewInit - Technically, the "View" is an internally managed data structure that holds reference to the DOM elements rendered by a component. 
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  
// ngAfterViewChecked - whenever Angular performed change detection for this component's view, so when its checked whether some UI updates are needed bcz of some possible data changes.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // ngOnDestroy - this invoked when the component is about to be thrown away. ( kill the component)
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
