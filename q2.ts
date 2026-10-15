let bonus: number = 5000;
let money: number = 0;

for (let i: number = 1; i <=20; i++) {
    money = i*bonus;
    console.log("ปีที่",i + 0,":",bonus,"ยอดเงินสะสม",money);
}
console.log("ขอแสดงคาวมยีนดี คุณทำงานครบ 20 ปี คุณได้รับโบนัส",money,"บาท");