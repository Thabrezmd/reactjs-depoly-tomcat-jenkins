import axios from "axios";
import React, { useEffect, useState } from "react"
import myArray from "../store"

const BinaryTree= ()=>{
    let num=12;
    const [findRest, setFindRest]= useState(null)

    const getAllRest = async () => {
        console.log("dddd")
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("response", response.data)


        // binary search logic
        const Arr3=[];
        for (var i=0; i<response.data.length; i++){

            let arr2=[];
            let po=Math.pow(2,i)
            for (var j=0; j<po; j++){
                if(response.data[j]!=undefined){
                    if((response.data.length)>=po){
                        arr2.push(response.data[j])
                    }
                }
            }
            if(arr2.length>0){
                Arr3.push(arr2)
            }
        }
        console.log("Arr3", Arr3)
        setFindRest(Arr3)
    }

    useEffect(()=>{
        getAllRest()
    }, [])

    return(
        <>
        <h2>MLM Binary Structure Tree </h2>
        <div className="cart-body">   
          
    {        
        myArray?.map((item, index)=>{     //findRest
            let divide= Math.pow(2, index )

            return (
                <>
                <div className="row p-2">
                    {console.log("khus", item)}

                    {item.map((newItem, inx)=> {
                        
                        return (
                            <>
                            {/* <div class="card" style="width: 18rem;"></div> */}
                                
                            <div className={`col-${num/divide} p-2`} > 
                                <div className="card-body">
                                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJojmgN3Kp5hJzjFARWAuiecsmHNzefg4rQ&usqp=CAU" style ={{width: "100px"}} alt="Card image cap" width="40px" height="50px"/>
                                    <p>{newItem.name}</p>                              
                                    <p>{newItem.id}</p>          
                                    <p>{newItem.email}</p>                                    
                                </div>
                            </div>
                            </>
                        ) 
                    })}
                </div>
                </>)
            })     
        }
        </div>
    </>
    )
}

export default BinaryTree;