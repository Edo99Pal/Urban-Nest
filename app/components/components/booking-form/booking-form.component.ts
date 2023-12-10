import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PageChangerService } from 'src/app/services/page-changer.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  private deleteSubscription: Subscription;
  @Input() deleted: Observable<boolean>;
  @Output() submit = new EventEmitter<number>();
  bookingPage = false;
  guests: number[] = [];
  questions: any[] = [];
  roomTypes: string[] = [];
  currentQuestionIndex: number = 0;
  today: Date = new Date();
  submitRes: boolean = false;
  locations: any[] = [];
  innerWidth: number = 0;

  bookingForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    location: new FormControl('', [Validators.required]),
    roomType: new FormControl('', [Validators.required]),
    nOfGuests: new FormControl(0, [Validators.required]),
    startDate: new FormControl(new Date(), [Validators.required]),
    endDate: new FormControl(new Date(), [Validators.required]),
    breakfast: new FormControl(false, [Validators.required]),
  });

  constructor(private service: BookingService, public pageService: PageChangerService) {
    this.service.booking.subscribe(value => {
      if(value == null || !value) {
        this.currentQuestionIndex = 0;
      }
      else this.currentQuestionIndex = 8;
    });
    this.pageService.page.subscribe(value => {
      if(this.pageService.page.value == 2) this.bookingPage = true;
      else this.bookingPage = false;
    });
    this.pageService.innerWidth.subscribe(value => {
      this.innerWidth = value;
    })
  }

  ngOnInit(): void {
    this.guests = this.service.getGuests;
    this.questions = this.service.getFormQuestions;
    this.questions.push({ title: 'Thank you!'});
    this.roomTypes = this.service.getRoomTypes;
    this.locations = this.service.locations;
    this.bookingForm.get('endDate')?.value?.setDate(this.bookingForm.get('startDate')!.value!.getDate() + 1);
    this.deleteSubscription = this.deleted.subscribe(() => {
      this.bookingForm.reset();
      this.bookingForm.controls['startDate'].setValue(new Date());
      this.bookingForm.controls['endDate'].setValue(new Date());
      this.bookingForm.get('endDate')?.value?.setDate(this.bookingForm.get('startDate')!.value!.getDate() + 1);
    });
  }

  ngOnDestroy() {
    this.deleteSubscription.unsubscribe();
  }

  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }

  onChangeStartDate(): void {
    this.bookingForm.get('endDate')?.value?.setDate(this.bookingForm.get('startDate')!.value!.getDate() + 1);
  }
  onChangeQuestion(direction: string) {
    if(direction == 'back') this.currentQuestionIndex--;
    else this.currentQuestionIndex++;
  }
  getQuestion() {
    return this.currentQuestionIndex != 3 ? this.questions[this.currentQuestionIndex].title : this.bookingForm.value.roomType == 'Dormitory Room' ? this.questions[this.currentQuestionIndex][0].title : this.questions[this.currentQuestionIndex][1].title;
  }
  getRoom() {
    return this.bookingForm.get('roomType')!.value == 'Dormitory Room' ? 'Guests' : 'Rooms';
  }
  calculatePrice() {
    return this.service.calculatePrice(this.bookingForm!.value!.startDate || new Date(), this.bookingForm!.value!.endDate || new Date(), this.bookingForm!.value!.nOfGuests || 1, this.bookingForm!.value!.breakfast || false);
  }
  fullNameValidator(): any {
    let fullName = this.bookingForm.get('fullName') ? this.bookingForm.get('fullName')?.value?.toString() : '';
    return typeof(fullName) != 'undefined' ? fullName.split(' ')[1].length > 0   : false;
  }
  checkValid(index: number) {
    if(index == 0) return this.bookingForm.controls['fullName'].valid && this.fullNameValidator();
    if(index == 1) return this.bookingForm.controls['location'].valid;
    if(index == 2) return this.bookingForm.controls['roomType'].valid && this.bookingForm.get('roomType')?.value != '';
    if(index == 3) return this.bookingForm.controls['nOfGuests'].valid && this.bookingForm.get('nOfGuests')?.value != 0;
    if(index == 4) return this.bookingForm.controls['startDate'].valid;
    if(index == 5) return this.bookingForm.controls['endDate'].valid;
    if(index == 6) return this.bookingForm.controls['breakfast'].valid;
    else return false;
  }
  public onSubmitRes() {
    this.submitRes = true;
    this.currentQuestionIndex = 8;
    this.service.booking.next(this.bookingForm.value);
    this.service.setPrice = this.calculatePrice();
    if(this.pageService.page.value != 2) this.service.showed = false;
    else this.service.showed = true;
  }
}
