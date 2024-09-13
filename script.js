// we wil use 0 for S.I and C.I for 1
const interestType = {
    si: 0,
    ci: 1
}

// default wil be S.I
let selectedInterest = interestType.si;

const SIButton = document.getElementsByClassName("si")[0];
const CIButton = document.getElementsByClassName("ci")[0];
const CIFrequency = document.getElementsByClassName("ci-freq")[0];
const resultWrapper = document.getElementsByClassName("result")[0];
const calculate = document.getElementsByClassName("btn")[0];



//initially hidden
CIFrequency.style.display = 'none';
resultWrapper.style.display = 'none';




// set interest type
const selectedInteresttype = (type) =>{
    // reset when menu change
     reset();
    selectedInterest= type;  
    updateInterestFeature();
}

//reset inputs and result

const reset = () =>{

    const PA = document.getElementById("pa").value = '';
    const IR = document.getElementById("ir").value = '';
    const DY = document.getElementById("dy").value = '';
    
    if(selectedInterest === interestType.ci){
        const FY = document.getElementById("fy").value = '';

    }

    resultWrapper.style.display = 'none';

}

// update ui 
const updateInterestFeature = ()=>{
    if (selectedInterest === interestType.si){
        CIButton.classList.remove('active');
        SIButton.classList.add('active');
        CIFrequency.style.display = 'none';   
    } else{
        SIButton.classList.remove('active');
        CIButton.classList.add('active');
        CIFrequency.style.display = 'block';
    }
}

// calculate  fimal amout 
const calculateAmount = () =>{
    const PA = document.getElementById("pa").value;
    const IR = document.getElementById("ir").value;
    const DY = document.getElementById("dy").value;
    const FY = document.getElementById("fy").value;

// validation

if(!PA || !IR || !DY  || (window.getComputedStyle(CIFrequency).display !== "none" && !FY)) {
    alert("all field is requered");
    reset();
    return;
}

if(isNaN(PA) || isNaN(IR) || isNaN(DY)|| (window.getComputedStyle(CIFrequency).display !== "none" && isNaN(FY))) {
    alert("all values must be numeric only");
    reset();
    return;
}

    const finalAmount = document.getElementsByClassName("total-amount")[0];
   
    let result = 0;

    if(selectedInterest === interestType.si){
        result = PA* (1 + (IR * DY));
    }
    if(selectedInterest === interestType.ci){
        // const FY = document.getElementById("fy").value;
        result = PA * Math.pow((1 +  (DY / FY)),FY*DY);
    }

    // show result
    resultWrapper.style.display = 'block';
    finalAmount.innerHTML = result;

}


//set events
SIButton.addEventListener('click', ()=>{
    selectedInteresttype(interestType.si);
  
})

CIButton.addEventListener('click', ()=>{
    selectedInteresttype(interestType.ci);
    
})

calculate.addEventListener('click', calculateAmount);



