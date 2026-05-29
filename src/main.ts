import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, PreloadAllModules, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersTree } from '@angular/core';
import { IonicModule } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersTree(IonicModule),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient()
}).catch(err => console.error(err));