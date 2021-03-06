import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { CalendarModule} from 'primeng/primeng';
import { Ng2PaginationModule} from 'ng2-pagination';
import { ModalModule} from 'ng2-modal';

import { bookingappComponent } from './bookingapp.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, Ng2PaginationModule , CalendarModule, ModalModule],
  declarations: [bookingappComponent],
  bootstrap: [bookingappComponent]

})
export class BookingAppModule { }