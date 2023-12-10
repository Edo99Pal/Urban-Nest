import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faq = [
    {
      question: "What amenities are included with my stay at your hostels?",
      answer: "Our hostels offer various amenities including free Wi-Fi, communal kitchen facilities, common areas, and often include linens and towels. Specific amenities may vary by location."
    },
    {
      question: "Do you offer free Wi-Fi for guests?",
      answer: "Yes, we provide complimentary Wi-Fi access for all our guests throughout our hostels."
    },
    {
      question: "Are linens and towels provided, or should I bring my own?",
      answer: "We generally provide linens and towels for guests. Please check the specific hostel's details or contact us for confirmation."
    },
    {
      question: "What is your check-in and check-out policy?",
      answer: "Our standard check-in time is after 3:00 PM, and check-out is before 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability."
    },
    {
      question: "Do you have a kitchen for guests to use?",
      answer: "Yes, we have communal kitchens equipped with cooking facilities available for guests' use."
    },
    {
      question: "Are lockers available for securing belongings?",
      answer: "Most of our hostels offer lockers or secure storage spaces. Sizes and availability may vary, so please inquire at the specific location."
    },
    {
      question: "What are the available room types? (Dormitories, private rooms, etc.)",
      answer: "We offer various room types including dormitories with bunk beds, private rooms, and sometimes shared rooms. The availability of room types varies by location."
    },
    {
      question: "Is there a curfew or restricted access to the hostel?",
      answer: "We do not impose curfews, but some hostels might have restricted access during late hours for security reasons. Please check with the specific hostel for their policies."
    },
    {
      question: "Do you provide laundry facilities or services?",
      answer: "Yes, many of our hostels have laundry facilities available for guest use, either self-service or with laundry service options."
    },
    {
      question: "Are your hostels pet-friendly?",
      answer: "Unfortunately, in most cases, we do not allow pets. However, please contact us for any specific considerations or exceptions."
    },
    {
      question: "Is there parking available for guests?",
      answer: "Some of our hostels offer parking facilities, but this varies by location. Contact the specific hostel for information about parking availability."
    },
    {
      question: "Are there age restrictions for staying in the hostel?",
      answer: "Guests under 18 years old must be accompanied by an adult. Some locations might have specific age restrictions, please inquire when booking."
    },
    {
      question: "Do you offer discounts for extended stays or group bookings?",
      answer: "Yes, we often have special rates for extended stays and group bookings. Contact us directly or check our website for more information."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy varies by booking type and location. Please refer to your booking confirmation or contact our customer service for details."
    },
    {
      question: "Do you provide city maps or offer tours and local recommendations?",
      answer: "Yes, we usually offer city maps and provide recommendations for local tours, attractions, and places to visit during your stay."
    }
  ];
  constructor() { }
  
  get getFaq() {
    return this.faq;
  }
}
