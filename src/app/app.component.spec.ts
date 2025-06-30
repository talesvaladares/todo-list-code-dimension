import { TestBed } from "@angular/core/testing";
import { AppComponent } from './app.component';
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from "./shared/components/header/header.component";
import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  template: ''
})
class FakeHeaderComponent {};

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    TestBed.overrideComponent(AppComponent, {
      remove: {
        imports: [HeaderComponent]
      },
      add: {
        imports: [FakeHeaderComponent]
      }
    })
  });

  it('deve renderizar o componente header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const headerDebufEl = fixture.debugElement.query(By.css('app-header'));
    expect(headerDebufEl).toBeTruthy();
  });

  it('deve renderizar o componente router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const routerOutletDebufEl = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutletDebufEl).toBeTruthy();
  });
})