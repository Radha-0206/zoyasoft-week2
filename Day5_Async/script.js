// 1. Function that returns a Promise to simulate a delayed server request
const fetchUserData = (shouldSucceed = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ id: 101, name: "Radhika", role: "Frontend Intern" });
      } else {
        reject(new Error("Failed to fetch user data from server."));
      }
    }, 2000); // 2-second delay
  });
};

// 2. Consume the Promise using async/await with try/catch error handling
async function getUserInfo() {
  console.log("Requesting user data... Please wait 2 seconds.");

  try {
    // await pauses execution until the Promise resolves
    const user = await fetchUserData(true); // Set to 'false' to test the catch block!
    console.log("Data received successfully:", user);
  } catch (error) {
    console.error("Error encountered:", error.message);
  }
}

// 3. Execute the async function
getUserInfo();