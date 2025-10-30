//console.log("A")
//console.log("B")
//console.log("C")


//basic async operation








//multiple async operations

//function setTimeouts() {
//    setTimeout(() => {
   //     console.log("3 seconds delay")
    //}, 3000);

    //setTimeout(() => {
      //  console.log("1 second delay")
    //}, 1000);

    //setTimeout(() => {
   //     console.log("2 seconds delay")
    //}, 2000);

//setTimeouts();
//setTimeots();

//async await syntax
//function delay(ms: number) {
  //  return new Promise<void>((resolve) =>setTimeout(resolve, ms));
    
//}
//async function demo() {
    
    //await delay(2000)
  //  console.log("2 seconds delay")

  //  await delay(3000)
  //  console.log("3 seconds delay")
//}
///demo();











//description: string;
//category:string;
//image:string;
//rating:Rating;
//}

//async function getData(): Promise<void> {
//const response = await fetch("https://fakestoreapi.com/products/1");
 //   const data = await response.json();
 //   return data;
   // console.log("Title", ${data.title});
   // console.log("Price", ${data.price});
  //  console.log("Category", ${data.category});
//}

//}
//getData();

//try catch finally
//try {
   // const jsonData=JSON.parse('{valid : true}');
  //  console.log(jsonData);
//} catch (err) {
  //  console.error(err);
//}



//try/catch/finally exercise
function divideNumbers(numOne: number, numTwo: number) {
    try {
        if (numTwo === 0) throw new Error("Cannot divide by zero");
        else {
            const result: number = numOne / numTwo;
            console.log("Result:", result);
        }
    } catch (err: unknown) {
        console.error(`Error: ${err}`);
    }
    finally {
        console.log("Operation finished.");
    }
}

divideNumbers(20, 2);

export {};