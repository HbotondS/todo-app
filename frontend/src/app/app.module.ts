import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './state/todo/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo/todo.effects';
import { AppState } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    ApolloModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({ todoState: TodoReducer }),
    EffectsModule.forRoot([ TodoEffects ]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: environment.apiUrl
          })
        };
      },
      deps: [ HttpLink ]
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
