export class DayListItem {

  itembody: String;

  constructor(itembody: String) {
      this.itembody = itembody;
   }

   setCompleted() {
      this.itembody = this.itembody + ' (Completed)';
   }
}
