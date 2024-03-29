import { configureStore } from '@reduxjs/toolkit'
import { accountsSlice } from './accounts/accountSlice'
import { authSlice } from './auth/authSlice'
import { casesSlice } from './cases/casesSlice'
import { categorySlice } from './category/categorySlice'
import { categoryCasesSlice } from './CategoryCases/categoryCasesSlice'
import { directorySlice } from './directory/directorySlice'
import { subCategorySlice } from './subcategory/subCategorySlice'



export const store = configureStore({
  reducer: {
   
  account:accountsSlice.reducer,
  auth:authSlice.reducer,
  category:categorySlice.reducer,
  subCategory:subCategorySlice.reducer,
  categoryCases:categoryCasesSlice.reducer,
  cases:casesSlice.reducer,
  directory:directorySlice.reducer,
   

  },
})