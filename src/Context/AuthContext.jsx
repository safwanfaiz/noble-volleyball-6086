import { useState } from "react";



const AuthContext=()=>{

    const regData=[];
    const [auth,setAuth]=useState('');
    const [authSts,setAuthSts]=useState(false);
    const loginData=[];

    const handleAuth=(mob)=>{
        let regFlag=false;
       for(let i=0;i<regData.length;i++){
        if(regData[i]==mob){
            regFlag=true;
            break;
        }
       }

       if(regFlag==false){
          regData.push(mob)
          setAuth(1)
          break;
        }else{
            let lFlag=false;
            for(let i=0;i<loginData;i++){
                if(loginData[i]==mob){
                    lFlag=true;
                    break;
                }
            }
            if(lFlag==false){
                loginData.push(mob);
                setAuth(2);
                break;
            }else{
                 setAuth(3)
                 break;
            }
    }
    

    return (
        <div>
      <AuthContext.Provider value={{regData,loginData,auth,authSts,setAuth,setAuthSts,handleAuth}} >
          {children}
      </AuthContext.Provider>
        </div>
      )
      
    }
    
    

