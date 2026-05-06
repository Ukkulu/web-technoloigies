function beforeSubmit(){
    let inputDate= document.querySelector(".inputDate");
    let outputDate= document.querySelector(".outputDate");
    console.log('inputDate.value'+inputDate.value); //date in string while checking on console using typeof operator but converting to Date and also make sure it eill be in locale like user timezone
//SELECT Id,LanguageLocaleKey FROM User where Username = 'epic.5881de796fd8@orgfarm.salesforce.com' beacuse user logged in with different user so run this query but correct user logged in as  web to lead defaulter then open execute anonymous window execute this "System.debug(UserInfo.getLocale());"

    let formattedDate= new Date(inputDate.value).toLocaleDateString("en-US");
    console.log(formattedDate);
    outputDate.value=formattedDate;
    console.log(outputDate.value);
}