export class DayListItem {

  itembody: String;
  id: number;

  constructor(itembody: String, idnumber: number) {
      this.itembody = itembody;
      this.id = idnumber;
   }

   setCompleted() {
      this.itembody = this.itembody + ' (Completed)';
   }

   getID() {
     return this.id;
   }
}
