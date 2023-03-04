
// targeting all the elements
const amount = document.querySelector('.amount');
// console.log(amount);
const interest = document.querySelector('.interest');
// console.log(interest)
const month = document.querySelector('.month');
// console.log(month)
const calculate = document.querySelector(".calculate");
// console.log(calculate);
const emi = document.querySelector("#emi");



// const ttl = document.querySelector("#ttlamt")
const totalemi = document.querySelector("#ttlemiamt")

const finalinterest = document.querySelector("#interest")



const yr = document.querySelector(".yr");
// console.log(year);
const mth = document.querySelector(".mth")
// adding event listener for yr 
yr.addEventListener("click", () => {
    mth.style.backgroundColor = "#0084ff"

    yr.classList.add("show")
    mth.classList.remove("show")


})

mth.addEventListener("click", () => {
    mth.style.backgroundColor = "#0c3fc1"
    mth.classList.add("show")
    yr.classList.remove("show")

})



const button = document.querySelectorAll("button")

//looping button for yr and month
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
        if (e.target.matches("#month")) {
            let k = month.value * 12;
            month.value = k
        }
        else if (e.target.matches("#year")) {
            let k = month.value
            if (k > 1) {
                let d = month.value / 12
                month.value = d

            }
        }
    })
}





// adding event listener for calculate button
calculate.addEventListener("click", () => {

    if (amount.value != "" && interest.value != "" && month.value != "") {
        if (interest.value == 0 && month.value == 0) {
            alert("Please enter the values greater than 0")
        }
        else if (yr.classList.contains("show")) {
            // using the emi formula emi=p*r*(1+r)^n/((1+r)^n)-1
            // p = total amount 
            // r = interest in percentage
            // n = number of months
            let p = amount.value;
            let r = interest.value / 1200
            let n = month.value * 12
            let firstvalue = p * r;

            let secondvalue = Math.pow((1 + r), n);

            let thirdvalue = secondvalue - 1;

            let e1 = firstvalue * secondvalue;

            // emi per month 
            let e = e1 / thirdvalue;

            //emi total amount by calculating the months
            let finalamount1 = e * n
            let finalamount = Math.round(finalamount1)


            let interestpermonth = finalamount - p;

            // storing the emi per month to show on ui
            emi.innerText = "₹" + Math.round(e).toLocaleString();
            // storing the total emi amount to show on ui
            totalemi.innerText = "₹" + finalamount.toLocaleString();
            // storing the initial value to show on ui
            // ttl.innerText = p;
            //storing interest per month
            finalinterest.innerText = "₹" + interestpermonth.toLocaleString();


        }
        else {
            // using the emi formula emi=p*r*(1+r)^n/((1+r)^n)-1
            // p = total amount 
            // r = interest in percentage
            // n = number of months
            let p = amount.value;
            let r = interest.value / 1200
            let n = month.value
            let firstvalue = p * r;

            let secondvalue = Math.pow((1 + r), n);

            let thirdvalue = secondvalue - 1;

            let e1 = firstvalue * secondvalue;

            // emi per month 
            let e = e1 / thirdvalue;

            //emi total amount by calculating the months
            let finalamount1 = e * n
            let finalamount = Math.round(finalamount1)

            let interestpermonth = finalamount - p;

            // storing the emi per month to show on ui
            emi.innerText = "₹" + Math.round(e).toLocaleString();
            // storing the total emi amount to show on ui
            totalemi.innerText = "₹" + finalamount.toLocaleString();
            // storing the initial value to show on ui
            // ttl.innerText = p;
            //storing interest per month
            finalinterest.innerText = "₹" + interestpermonth.toLocaleString();


        }
    }

    else {
        alert("Please enter all the values")

    }
})

