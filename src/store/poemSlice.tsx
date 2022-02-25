import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface poem {
    title:string
    author:string
    lines:Array<string>
    linecount: number,
    like?:boolean
}
export interface favorit {
    poemList:poem[]
    favoritList:poem[],
    callApi:boolean,
    sortType:string|null
}

const initialState: favorit = {
    poemList:[],
    favoritList:[],
    callApi:false,
    sortType:null
}

export const favoritSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    triggerFavoritList: (state,action: PayloadAction<poem>) => {
        var poemList:poem[]=[...state.poemList]
        const indexPoem = poemList.findIndex(element => {
            if (element.title === action.payload.title) {
              return true;
            }
            return false
        }); 
        var favoriteList:poem[]=[...state.favoritList]
        const index = favoriteList.findIndex(element => {
            if (element.title === action.payload.title) {
              return true;
            }
            return false
        });          
        if (index > -1) {
            poemList[indexPoem].like=false
            

            state.poemList =[...poemList]
            
            state.favoritList.splice(index,1)
        }                         
        else{
            poemList[indexPoem].like=true
            

            state.poemList =[...poemList]   
            
            state.favoritList = [...state.favoritList,action.payload]
        }
    },
    triggerCallApi: (state) => {
        state.callApi = !state.callApi
    },
    setPoemList: (state,action: PayloadAction<poem[]>) => {
        
        state.poemList=action.payload

        
    },
    sortByTitle: (state) => {
        if(state.poemList){
            var sortList=[...state.poemList]
            sortList.sort((a, b) => a.title.localeCompare(b.title))
            state.poemList=sortList
            state.sortType="title"
        }
    },
    sortByAuthor: (state) => {
        if(state.poemList){
            var sortList=[...state.poemList]
            sortList.sort((a, b) => a.author.localeCompare(b.author))
            state.poemList=sortList
            state.sortType="author"
        }
    },
  },
})

export const { triggerFavoritList,triggerCallApi,setPoemList,sortByTitle ,sortByAuthor} = favoritSlice.actions

export default favoritSlice.reducer
