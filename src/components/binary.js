import React from "react"
import myArray from "../store"

const BinaryTree= ()=>{

    let num=12;

    return(
        <>
        <h2>MLM Binary Structure Tree </h2>
        <div className="cart-body">   
          
    {        
        myArray.map((item, index)=>{
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