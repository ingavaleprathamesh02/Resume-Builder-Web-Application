function addWE_Field(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("WE");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb)
}
function addI_Field(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("i-Field");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let internOb = document.getElementById("intern");
    let internAddButtonOb = document.getElementById("iAddButton");

    internOb.insertBefore(newNode, internAddButtonOb)
}
function addS_Field(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("s-Field");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("sAddButton");

    skOb.insertBefore(newNode, skAddButtonOb)
}
function addAQ_Field(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","eg.Graduation,HSC,SSC");

    let AQOb = document.getElementById("AQ");
    let AQAddButtonOb = document.getElementById("aqAddButton");

    AQOb.insertBefore(newNode, AQAddButtonOb)
}
//generating resume with dynamic data
function generate(){
    
    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;   //Contact
    document.getElementById("addT").innerHTML = document.getElementById("addressField").value;       //Address
    document.getElementById("mailT").innerHTML = document.getElementById("mailField").value;         //Mail
    document.getElementById("githubT").innerHTML = document.getElementById("gitField").value;        //Github
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;     //LinkedIn
    document.getElementById("objT").innerHTML = document.getElementById("C_obj").value;              //Objective

    //Work Experience
    let WEX = document.getElementsByClassName("weField");
    let str = "";
    for (let e of WEX){
        str +=`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //Academic qualification
    let AQ = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let e of AQ){
        str1 += `<li> ${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    //Interships
    let ITR = document.getElementsByClassName("i-Field");
    let str2 = "";
    for (let e of ITR){
        str2 += `<li> ${e.value}</li>`;
    }
    document.getElementById("InternT").innerHTML = str2;

    //Skills
    let skl = document.getElementsByClassName("s-Field");
    let str3 = "";
    for (let e of skl){
        str3 += `<li> ${e.value}</li>`;
    }
    document.getElementById("ST").innerHTML = str3;

    //Upload Image
    let file = document.getElementById('imgField').files[0];
    console.log(file);
    let reader = new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result)
    reader.onloadend = function() {
        document.getElementById('imgT').src=reader.result;
    }

}
// Download code
function download(){
    var element = document.getElementById('re-template');
    html2pdf().set({filename:'resume'+'.pdf'}).from(element).save();
    //custom settings
    var opt =
    {   
        margin:         1,
        image:          {type: 'jpeg',quality: 0.98},
        html2canvas:    {scale: 2},
        jsPDF:          {unit: 'in', format: 'letter', orientation: 'portrait'}
    };
}