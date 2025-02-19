//MADE BY Novak203
//Febuary 19th of 2025
    
let LeftSide_Number = "0";
let Operator = null;
let RightSide_Number = null;
let Equals_Number = null;
const Display = document.getElementById("CUSTOM_INPUT_BOX");




function ApplyNumber(input)
{
    Display.focus();
    if (Operator == null)
    {
        if (input == "." && LeftSide_Number.includes("."))
        {
            return;
        }
        if ((LeftSide_Number == "0") && (input != "."))
        {
            LeftSide_Number = input;
            Display.value = input;
        }
        else
        {
            LeftSide_Number += input;
            Display.value += input;
        }
       
    } else
    {
        if (input == ".")
        {
            if (RightSide_Number != null && RightSide_Number.includes("."))
            {
                return;
            }
            if (RightSide_Number == null)
            {
                return;
            }
              
        }
        if (((RightSide_Number == "0") || (RightSide_Number == null)) && (input != "."))
        {
            RightSide_Number = input;
            Display.value = LeftSide_Number + Operator + input;
        }
        else
        {
            RightSide_Number += input;
            Display.value += input;
        }

       
    }
}

function ApplyOperator(input)
{
    Display.focus();
    if((input != Operator) && (RightSide_Number == null))
    {
        Operator = input;
    }
    if (RightSide_Number != null)
    {
        Calculate();
        Operator = input;
    }
    Display.value = LeftSide_Number + Operator;
}

function ClearEverything()
{
    LeftSide_Number = "0";
    Operator = null;
    RightSide_Number = null;
    Equals_Number = null;
     Display.value = 0;
}

function Clear()
{
    if (RightSide_Number == null)
    {
            LeftSide_Number = "0";
            Display.value = "0";
    }
    else
    {
            RightSide_Number = "0";
            Display.value = LeftSide_Number + Operator + "0";
    }

    

}

function Calculate()
{
    if (RightSide_Number != null)
    {
        switch (Operator)
        {
            case '*':
                Equals_Number = +LeftSide_Number * +RightSide_Number;
            break;
            case '/':
                if (RightSide_Number != 0)
                {
                    Equals_Number = +LeftSide_Number / +RightSide_Number;
                }
               
            break;
            case '+':
                Equals_Number = +LeftSide_Number + +RightSide_Number;
            break;
            case '-':
                Equals_Number = +LeftSide_Number - +RightSide_Number;
            break;
        }
    
        if ((RightSide_Number == 0) && (Operator == "/"))
        {
            Display.value = "ERROR";
            LeftSide_Number = "0";
        }
        else
        {
            Display.focus();
            Display.value = Equals_Number;
            LeftSide_Number = Equals_Number;
        }
    
        RightSide_Number = null;
    }
}
