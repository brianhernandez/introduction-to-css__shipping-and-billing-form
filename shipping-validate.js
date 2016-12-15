window.onload = function () {
  // Obtain the submit button, the shipping & billing form and the
  // 'Same As Billing' checkbox and save to variables for later use
  var submitButton = document.querySelector("button[type=submit]");
  var shippingFormElement = document.getElementById("shipform");
  var sameAsCheckBox = document.querySelector("[type=checkbox]");
  // Get all the billing input elements and save to variables
  var billFirstName = document.getElementById("b_fname");
  var billLastName = document.getElementById("b_lname");
  var billAddress1 = document.getElementById("b_address1");
  var billAddress2 = document.getElementById("b_address2");
  var billCity = document.getElementById("b_city");
  var billCountry = document.getElementById("b_country");
  // Get all the shipping input elements and save to variables
  var shipFirstName = document.getElementById("s_fname");
  var shipLastName = document.getElementById("s_lname");
  var shipAddress1 = document.getElementById("s_address1");
  var shipAddress2 = document.getElementById("s_address2");
  var shipCity = document.getElementById("s_city");
  var shipCountry = document.getElementById("s_country");
  // Add an event listener for a change on the 'Same As Billing' checkbox
  sameAsCheckBox.addEventListener("change", function(event) {
    // If the current 'checked' property of the checkbox is true...
    if (sameAsCheckBox.checked) {
      // Then change all the shipping input values to be the same as the
      // the billing input values
      shipFirstName.value = billFirstName.value;
      shipLastName.value = billLastName.value;
      shipAddress1.value = billAddress1.value;
      shipAddress2.value = billAddress2.value;
      shipCity.value = billCity.value;
      shipCountry.value = billCountry.value;
      // ...else, return the shipping input values to empty
    } else {
      shipFirstName.value = "";
      shipLastName.value = "";
      shipAddress1.value = "";
      shipAddress2.value = "";
      shipCity.value =
      shipCountry.value = "";
    }
  });
  // Apply a click event listener to the submit button
  submitButton.addEventListener('click', function(event) {
    // ...call the validateFields function when the
    // submit button is clicked
    validateFields();
  });
  // When the submit event is detected on the Shipping and Billing form...
  shippingFormElement.addEventListener('submit', function(event) {
    // ...prevent the default operation of sending the form
    // since this is not required for the project
    event.preventDefault();
    // Alert that the form is validated since the submit event successfully
    // completed.
    alert("This form validates!");
  });
  // The validateFields functions checks the inputs on all of the form fields
  // (except for address 2 fields) and applies a custom validity message if
  // they are found to be invalid
  function validateFields() {
    // Create an array to stroe the different form field elements
    var inputsArray = [];
    // Add each element to the array
    inputsArray.push(billFirstName);
    inputsArray.push(billLastName);
    inputsArray.push(billAddress1);
    inputsArray.push(billAddress2); // index 3
    inputsArray.push(billCity);
    inputsArray.push(billCountry);
    inputsArray.push(shipFirstName);
    inputsArray.push(shipLastName);
    inputsArray.push(shipAddress1);
    inputsArray.push(shipAddress2); // index 9
    inputsArray.push(shipCity);
    inputsArray.push(shipCountry);
    // Create a for loop to go through each element in the array
    for (var i = 0; i < inputsArray.length; i++) {
      // If the current iterator value is NOT 3 or 9 AND the field is empty...
      if ( !(i === 3 || i === 9) && validator.isEmpty(inputsArray[i].value)) {
        // ...display a custom message that the field is empty and needs
        // something
        inputsArray[i].setCustomValidity("Sorry, you cannot leave this field " +
          "empty.");
        // ...else if the current iterator value is NOT 3 or 9 AND the field has
        // a length of lese than two characters...
      } else if ( !(i === 3 || i === 9) && inputsArray[i].value.length < 2 ) {
        // ...display a custom message that the form input needs to be longer
        inputsArray[i].setCustomValidity("This field has to be longer than " +
          "one character.");
        // ...else if the current iterator value is NOT 3 or 9 AND the input
        // is not free of trailing, leading or extra spaces...
      } else if ( !(i === 3 || i === 9) && !validator.isTrimmed(inputsArray[i].value)) {
        // ...display a custom message for the user to remove the extra spaces
        inputsArray[i].setCustomValidity("Please remoe any leading, trailing " +
          "or extra spaces from your input, thank you.");
        // ...else if the current iterator value is NOT 3 or 9 AND...
      } else if ( !(i === 3 || i === 9) ) {
        // ...reset the validity state of the current element to true.
        inputsArray[i].setCustomValidity("");
      }
    }
  }
};
