const ToFahrenheit = document.getElementById("ToFahrenheit");
const ToCelsius = document.getElementById("ToCelsius");
const result = document.getElementById("result");
const InputNumber = document.getElementById("InputNumber");
let temp;
function converte()
{
    if (ToFahrenheit.checked)
        {
            temp= Number(InputNumber.value);
            temp = temp * 9 /5 +32; //Fahren Furmela
            result.textContent=InputNumber.value +"°C is "+ temp.toFixed(1) +"°F";
            //toFixed() to show the float number
        }
    else if (ToCelsius.checked)
    {
      temp = Number(InputNumber.value)
      temp = (temp -32) * (5/9);
      result.textContent= InputNumber.value +"°F is "+ temp.toFixed(1) + "°C";

    }
    else
        {
             result.textContent = "plaese select a unit";
        }
 }