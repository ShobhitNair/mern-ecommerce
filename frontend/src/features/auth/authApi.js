export const createUser = async (userData) => {
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  // have to hide password while working at backend
  return { data };
};

export const checkUser = async (loginInfo) => {
  const email = loginInfo.email
  const password = loginInfo.password  
  const response = await fetch("http://localhost:8080/users?email="+email);
  const data = await response.json();
  console.log(data);
  // we do not check the data in frontend have to do this in backend later 
  if (data.length) {
    if(password === data[0].password){
        return ({ data: data[0] });
    }else{
        return ({message: 'wrong credentials'})
    }
  } else {
    return ({ message: "wrong credentials" });
  }
};
