import axios from 'axios'
async function GetRandomUsers() {
  try {
    const data = await axios.get("/api/users/random_user");
    return data;
  }
  catch (err) {
    console.log("error: ", err)
  }
}
export default GetRandomUsers;