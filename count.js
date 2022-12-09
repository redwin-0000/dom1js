function counter(){
    let count = 20;
    // count += 3;
    let second = Math.floor((count % (1000*60))/1000);
    console.log(second);
}
counter();