let GRADE = 49;
// grade E (less 40)
if(GRADE>0 && GRADE<40){
    console.log("E");
}
// grade  D- (40 to 49)
 else if(GRADE>= 40 && GRADE<49){
    console.log("D-");
 }
 // grade  C- (49 to 59)
  else if(GRADE>= 49 && GRADE<59){
     console.log("C-");
  }
  // grade C- (59 to 79)
   else if(GRADE>= 59 && GRADE<79){
     console.log("B-");
   }
   // if grade is over 79
   else{
     console.log("A");
    }
