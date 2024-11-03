// // Select form elements by their IDs
// const form = document.querySelector('form');
// const namee = document.querySelector('#namee');
// const email = document.querySelector('#email');
// const number = document.querySelector('#number');
// const subject = document.querySelector('#subject');
// const message = document.querySelector('#message');

// function sendEmail() {
//     // Construct the body message using the .value property
//     const bodyMessage = `Name: ${namee.value} <br> Email: ${email.value} <br> 
//     Phone: ${number.value} <br> Message: ${message.value}`;

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "hariharan956696@gmail.com",
//         Password: "654C69FDF4BF2D991FCFC4876BBF29FF2C42",
//         To: "hariharan956696@gmail.com",
//         From: "hariharan956696@gmail.com",
//         Subject: subject.value,
//         Body: bodyMessage
//     }).then(
//         response => alert("Email sent successfully!"),
//         error => alert("Failed to send email.")
//     );
// }

// // Prevent default form submission and call sendEmail function
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     sendEmail();
// });
