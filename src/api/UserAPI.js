import {BASE_URL} from "../config";
import axios from "axios";

export default function UserAPI(){
     async function getUsers(){
         const response = await axios.get(BASE_URL + '/users');
         try{
             return response.data;
         }catch(error){
             console.log("Error in Getting user details: " + error);
         }
    }

    return{
         getUsers
    }
}