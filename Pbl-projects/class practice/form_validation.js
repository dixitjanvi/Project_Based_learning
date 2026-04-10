let vform = () => {
    

    let validataNumber = () => {
        let Num = document.getElementById("Num").value;
        let NumInput= document.getElementById("Num");

        if(Num.length === 10){
            NumInput.classList.add("valid");
            NumInput.classList.remove("invalid");
        }else{
            NumInput.classList.add("invalid");
            NumInput.classList.remove("valid");
        }

        

    }
    let Num = document.getElementById ["Num"].value;
    let Email = document.getElementById ["Email"].value;
    let Password = document.getElementById ["Password"].value;
    let CPassword = document.getElementById ["CPassword"].value;


    if(Num === "" || Email === "" || Password === "" || CPassword === ""){
        alert("All fields are required");
        return false;
    }

    if(Num.length != 10){
        alert("Mobile no.should we 10 digits")
        return false;
    }

    if(Email.endswith(".com") === false){
        alert("False input a valid email only")
        return false;
    }

    if(Password !== CPassword){
        alert("Password and Confirm Password should we same")
        return false;
    }

    if(Password.length < 6 && Password.include("@" === false)){
        alert("Follow instructions for the pass")
        return false;
    }
    

}