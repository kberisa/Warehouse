import http from "../http-common";

class AuthorizationDataService {


  async post(operator){
    const answer = await http.post('/Authorization/token',operator)
       .then(response => {
         return {ok:true, token: response.data}; 
       })
       .catch(error => {
         return {ok:false, message: 'Incorrect username and or password'}; 
       });
 
       return answer;
}

   
    
}

export default new AuthorizationDataService();