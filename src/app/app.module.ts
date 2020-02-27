import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppInitService } from "./app-init.service";
import { AppInit2Service } from "./app-init2.service";

export function initializeApp(
  appInitService: AppInitService,
  appInit2Service: AppInit2Service
) {
  let x = 0;
  let interval = setInterval(() => {
    if (x === 10) {
      clearInterval(interval);
    } else {
      console.log(x++);
    }
  }, 1000);
  return (): Promise<any> => {
    return appInitService.Init(appInit2Service);
  };
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  providers: [
    AppInitService,
    AppInit2Service,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService, AppInit2Service],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
