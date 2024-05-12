import { create } from "apisauce";


// define the api
const api = create({
    baseURL: 'https://newsapi.org/v2',
   
  })

  const apiKey='?country=us&apiKey=e3ab5f5bd4e747c8a1beb75fabe8e34d'
  const getTopHeadline=api.get('/top-headlines'+apiKey)
  const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=e3ab5f5bd4e747c8a1beb75fabe8e34d")

  export default{
    getByCategory
  }