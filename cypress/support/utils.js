 class Utils {

    randomNo ()  {
        var no = Math.random(1040, 2000)
        return no   
  }
  randomPass(){
    return Math.random().toString(36).slice(-8)+Math.random();

  }
  randomUserName(){
        let randomString = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomString += characters.charAt(randomIndex);
        }
      
        return randomString;
      }
      
       generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10); // Generate a random string
        const domain = 'gmail.com'; // Replace with your desired domain name
        const email = `${randomString}@${domain}`; // Concatenate the random string with the domain
      
        return email;
      }
       generateRandomPhoneNumber() {
        const countryCode = '+91'; // Replace with the desired country code
        const areaCode = Math.floor(Math.random() * 900) + 100; // Generate a random 3-digit area code
        const number = Math.floor(Math.random() * 9000000) + 1000000; // Generate a random 7-digit phone number
      
        return `${countryCode}${areaCode}${number}`;
      }

   generateTodayDate() {
     const today = new Date();
     const year = today.getFullYear();
     const month = String(today.getMonth() + 1).padStart(2, '0');
     const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;

   }
}
  
export default Utils
  