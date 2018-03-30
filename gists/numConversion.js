var binaryOctal = {'000':'0', '001':'1', '010':'2', '011':'3', '100':'4', '101':'5', '110':'6', '111':'7'};

var octalBinary = {'0':'000', '1':'001', '2':'010', '3':'011', '4':'100', '5':'101', '6':'110', '7':'111'};

var hexadecimalBinary = {'0':'0000', '1':'0001', '2':'0010', '3':'0011', '4':'0100', '5':'0101', '6':'0110', '7':'0111',
  '8':'1000', '9':'1001', 'A':'1010', 'B':'1011', 'C':'1100', 'D':'1101', 'E':'1110', 'F':'1111'};

var binaryHexadecimal = {'0000':'0', '0001':'1', '0010':'2', '0011':'3', '0100':'4', '0101':'5', '0110':'6', '0111':'7',
  '1000':'8', '1001':'9', '1010':'A', '1011':'B', '1100':'C', '1101':'D', '1110':'E', '1111':'F' };

var decimalHexadecimal = {10:'A', 11:'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F', 16: 'G' };

var hexadecimalDecimal = {'A':10, 'B':11, 'C':12, 'D':13, 'E':14, 'F':15,};

//textfields should be string

//Conversion array location matches input field array location displaying output
var test = [
  {
    0: function decimalTest(decimal){
          let decimalRegEx = /[A-Za-z\W]/g;
          if(decimalRegEx.test(decimal)){
            return true;
          }
          else{
            return false;
          }
        }
  },
  {
    1:  function octalTest(octal){
          let octalRegEx = /[8-9A-Za-z\W]/g;
          if(octalRegEx.test(octal)){
            return true;
          }
          else{
            return false;
          }
        }
  },
  {
    2:  function hexadecimalTest(hexa){
          let hexaRegEx = /[G-Zg-z\W]/g;
          if(hexaRegEx.test(hexa)){
            return true;
          }
          else{
            return false;
          }
        }
  },
  {
    3:  function binaryTest(binary){
          let binaryRegEx = /[2-9A-Za-z\W]/g;
          if(binaryRegEx.test(binary)){
            return true;
          }
          else{
            return false;
          }
        }
  }
];

var conversion = [
  { //ToDecimal
    name: "To Decimal",
    1:  function octalToDecimal(octal){
          let octalArray = octal.split(''), decimal = 0;
          for(let i = 0, j = octalArray.length - 1; i < octalArray.length; i++, j--){
            decimal += (parseInt(octalArray[i]) * Math.pow(8,j));
          }
          return decimal;
        },

    2:  function hexadecimalToDecimal(hexadecimal){
          let hexaArray = hexadecimal.split(''), decimal = 0;
          for(let i = 0, j = hexaArray.length -1; i < hexaArray.length; i++, j--){
            if(hexadecimalDecimal.hasOwnProperty(hexaArray[i])){
              hexaArray[i] = hexadecimalDecimal[hexaArray[i]];
            }
            decimal += ((parseInt(hexaArray[i])) * Math.pow(16,j));
          }
          return decimal;
        },

    3:  function binaryToDecimal(binary){
          let binaryArray = binary.split(''), decimal = 0;
          for(let i = binaryArray.length -1, j = 0; i >= 0; i--, j++){
            if(binaryArray[i] == '1'){
              decimal += Math.pow(2,j);
            }
          }
          return decimal;
        }
  },
  { //ToOctal
    name: "To Octal",
    0:  function decimaltoOctal(decimal){
          let decimalArray = [], num = parseInt(decimal), remainder;
          while(num >= 1){
            remainder = num % 8;
            num = Math.floor(num / 8);
            decimalArray.unshift(remainder);
          }
          return decimalArray.join("");
        },

    2:  function hexadecimalToOctal(hexadecimal){ //tested
          return conversion[1][3](conversion[3][2](hexadecimal));
          },

    3:  function binaryToOctal(binary){
          let binaryArray = binary, octalNum = '';
          while(binaryArray.length % 3 !==0){
            binaryArray = '0' + binaryArray;
          }
          binaryArray = (binaryArray.match(/.{1,3}/g));
          for(let i = 0; i < binaryArray.length; i++){
            octalNum = octalNum + binaryOctal[binaryArray[i]].toString();
          }
          return octalNum;
        }
  },
  { //ToHexadecimal
    name: "To Hexadecimal",
    0:  function decimalToHexadecimal(decimal){
          let hexArray = [], num = parseInt(decimal), remainder;
          while(num >= 1){
            remainder = num % 16;
            num = Math.floor(num / 16);
            if(remainder > 9) {
              remainder = decimalHexadecimal[remainder];
            }
            hexArray.unshift(remainder);
          }
          return hexArray.join("");
        },

    1:  function octalToHexadecimal(octal){
          return conversion[2][3](conversion[3][1](octal));
        },

    3:  function binaryToHexadecimal(binary){
          let binaryArray = binary, hexadecimalNum = '';
          while(binaryArray.length % 4 !==0){
            binaryArray = '0' + binaryArray;
          }
          binaryArray = (binaryArray.match(/.{1,4}/g));
          for(let i = 0; i < binaryArray.length; i++){
            hexadecimalNum = hexadecimalNum + binaryHexadecimal[binaryArray[i]].toString();
          }
          return hexadecimalNum;
        }
  },
  { //ToBinary
    name: "To Binary",
    0:  function decimalToBinary(decimal){
          let decimalArray = [], num = parseInt(decimal), remainder;
          while(num >= 1){
            remainder = num % 2;
            num = Math.floor(num / 2);
            decimalArray.unshift(remainder);
          }
          return decimalArray.join("");
        },

    1:  function octalToBinary(octal){
          let octalString = octal; binary = '';
          for(let i = 0; i < octalString.length; i++){
            binary = binary + octalBinary[octalString[i]];
          }
          return binary;
        },

    2:  function hexadecimalToBinary(hexa){
          let hexaString = hexa; binary = '';
          for(let i = 0; i < hexaString.length; i++){
            binary = binary + hexadecimalBinary[hexaString[i]];
          }
          return binary;
        }
  }
];

//DOM manipulation

var inputFields = document.querySelectorAll(".inputFields");
var inputNum;

for(let i = 0; i < inputFields.length; i++){
  inputFields[i].index = i;
  inputFields[i].addEventListener("keyup", function(){
      if(test[this.index][this.index](this.value)){
        for(let j = 0; j < conversion.length; j++){
            if(this.index != j){
               inputFields[j].value = 0;
            }
        }
      }
      else{
        for(let j = 0; j < conversion.length; j++){
            if(this.index != j){
               inputFields[j].value = conversion[j][this.index](this.value);
            }
        }
      }
  })
}
