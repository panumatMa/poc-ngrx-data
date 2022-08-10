import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { appEntityMetadata } from './app-entity-metadata';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EntityHttpResourceUrls } from '@ngrx/data/src/dataservices/http-url-generator';

const entityHttpResourceUrls: EntityHttpResourceUrls = {
  ['Role']: {
    entityResourceUrl: 'https://62f1c37bb1098f150804e663.mockapi.io/roles/',
    collectionResourceUrl: 'https://62f1c37bb1098f150804e663.mockapi.io/roles'
  }
};

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  entityHttpResourceUrls
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({
      entityMetadata: appEntityMetadata,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
