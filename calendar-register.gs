function myFunction() {
  //カレンダー取得
  var calendar = CalendarApp.getDefaultCalendar();
  //開始時間用
  var schedule = new Date();
  schedule.setMonth(schedule.getMonth()+2);
  schedule.setHours(09);
  schedule.setMinutes(30);
  schedule.setSeconds(00);
  //終了時間用
  var schedule_end = new Date();
  schedule_end.setMonth(schedule_end.getMonth()+2);
  schedule_end.setHours(12);
  schedule_end.setMinutes(00);
  schedule_end.setSeconds(00);
  //再来月
  var month = schedule.getMonth();
  //再来月を1日ずつ処理
  do{
    //金曜日の場合にカレンダー登録
    if(schedule.getDay() === 5){
      calendar.createEvent("【会議名】", 
                           schedule, 
                           schedule_end, 
                           {guests:
                            "会議室ID" + "," +
                            "参加者①メールアドレス" + "," +
                            "参加者②メールアドレス" + "," +
                            "参加者③メールアドレス"
                           });
    }
    //1日足す
    schedule.setDate(schedule.getDate()+1);
    schedule_end.setDate(schedule_end.getDate()+1);
  //3ヶ月後になったら処理を抜ける
  }while(schedule.getMonth() === month);
  
}