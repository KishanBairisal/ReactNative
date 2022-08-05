import axios from 'axios'
async function GetRandomUsers() {
  try {
    const data = await axios.get("https://api.randomuser.me/");
    return data;
  }
  catch (err) {
    console.log("error: ", err)
  }
}
export default GetRandomUsers;