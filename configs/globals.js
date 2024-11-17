require("dotenv").config();
// Global configurations object contains Application Level variables such as:
// client secrets, passwords, connection strings, and misc flags
const configurations = {
  ConnectionStrings: {
    MongoDB: "mongodb+srv://ashish:WonderData2024@cluster0.aay1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  },
  Authentication: {
    Google: {
      ClientId: "116100071943-n707ugr0fbfsi8m86uo6bf0gm7gspjbr.apps.googleusercontent.com",
      ClientSecret: "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",
      CallbackUrl: "http://localhost:3000/auth/google/callback"
    },
  }  
};
module.exports = configurations;
