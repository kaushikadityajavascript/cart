import ListItem from "./ListItems/ListItem";
import { useState,useEffect } from "react";
import axios from "axios";

const Products=()=>{
  const [items,setItems]=useState([])
   {/*
    {
     id:0,
     discountedPrice:340,
     price:450,
     title:'Boat',
     thumbnail:'placeholder.png' 
    },
    {
      id:1,
      discountedPrice:400,
      price:450,
      title:'Title Of The Item2',
      thumbnail:'placeholder.png' 
     },
     {
      id:2,
      discountedPrice:400,
      price:450,
      title:'Title Of The Item3',
      thumbnail:'placeholder.png' 
     },
     {
      id:3,
      discountedPrice:400,
      price:450,
      title:'Title Of The Item4',
      thumbnail:'placeholder.png' 
     } 
    */}
  
    useEffect(()=>{
         {/* fetch(`https://react-guide-2021-5587a-default-rtdb.firebaseio.com/items.json`)
                   .then(response=>{
                     console.log(response.json())
                   }) */}
    axios.get(`https://react-guide-2021-5587a-default-rtdb.firebaseio.com/items.json`)
    .then(repsonse=>{
      const data=repsonse.data
      const transformedData=data.map((item,index)=>{
        return {
          ...item,
          id:index
        }
      })
      console.log(transformedData)
      setItems(transformedData)
    })
    .catch(error=>{
      console.log(error)
    })
    },[])
    return (
        <div className="product-list">
        <div className="product-list--wrapper">
       {/*} <ListItem data={items[0]}></ListItem>
    <ListItem data={items[1]}></ListItem>*/}
          {
            items.map(item=>{
              return(<ListItem key={item.id} data={item}/>)
            })
          }
          </div>
        </div>
    )
}
export default Products;