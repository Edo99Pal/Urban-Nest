import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccomodationService {
  rooms = [
    {
      type: "Dormitory Room",
      description: "Shared room with multiple bunk beds. Ideal for solo travelers or groups on a budget. Shared bathroom facilities.",
      beds: "Multiple bunk beds",
      availability: 15
    },
    {
      type: "Private Room (Single)",
      description: "A private room with a single bed. Suitable for solo travelers seeking privacy. Shared or private bathroom options available.",
      beds: "Single bed",
      availability: 10
    },
    {
      type: "Private Room (Double)",
      description: "A private room with a double bed. Perfect for couples or travelers desiring more space and privacy. Ensuite facilities included.",
      beds: "Double bed",
      availability: 8
    },
    {
      type: "Family Room",
      description: "A larger room suitable for families or small groups. Contains multiple beds and may include private bathroom facilities.",
      beds: "Multiple beds",
      availability: 8
    }
  ];

  constructor() { }

  get getRooms() {
    return this.rooms;
  }

}
