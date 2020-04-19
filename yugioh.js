<script>
function Divisor(x){
  var y = 10;
  let i = 1;
  var output = [];
  for(i = 1; i <= y; i++){
    if(i % 2 == 0){
      console.log("yu")
    }else {
      console.log(i)
    }
    if(i % 3 == 0){
      console.log("gi")
    }else {
      console.log(i)
    }
    if(i % 5 == 0){
      console.log("oh")
    } else {
      console.log(i)
    }
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0 ){
      console.log("yu-gi-oh")
    }else {
      console.log(i)
    }
    if (i % 2 == 0 && i % 3 == 0){
      console.log("yu-gi")
    }else {
      console.log(i)
    }
    if (i % 2 == 0 && i % 5 == 0){
      console.log("yu-oh")
    }else {
      console.log(i)
    }
    if (i % 3 == 0 && i % 5 == 0){
      console.log("gi-oh")
    }else {
      console.log(i)
    }
  }
  return (output.push(i));
}
</script>