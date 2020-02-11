import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { PlayerComponent } from './components/player/player.component';
import { TranscriptComponent } from './components/transcript/transcript.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PlayerComponent,
    TranscriptComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
