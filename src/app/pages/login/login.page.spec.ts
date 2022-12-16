import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //PRUEBAS UNITARIAS

  //se le asigna solamente un email por lo cual debe validar que el formulario no es correcto
  it('debe retornar el formulario invalido', async () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const email = app.credentials.controls['email']
    email.setValue('seba@gmail.com')

    expect(app.credentials.invalid).toBeTrue();
  });


  //se le asigna email y se le asigna contraseña debe invalidar que el formulario es falso por lo cual es valido
  it('debe retornar el formulario valido', async () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let email = app.credentials.controls['email']
    let password = app.credentials.controls['password']
    email.setValue('seba@gmail.com')
    password.setValue('123456')

    expect(app.credentials.invalid).toBeFalse();
  });

  it('debe actualizar datos de usuario', async () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let email = app.credentials.controls['email']
    let password = app.credentials.controls['password']
    email.setValue('seba@gmail.com')
    password.setValue('123456')

    const btnElement = fixture.debugElement.query(By.css('ion-button'))
    btnElement.nativeElement.click()

    expect(app.credentials.invalid).toBeTrue();
  });

});
