export default class Test {
  constructor() {
    console.log("---TEST----- You succeeded to bundle js!");
    $(".test").on("click",function(){
      $(this).animate({"margin-top":"1000px"},1000);
    });
  }
}
