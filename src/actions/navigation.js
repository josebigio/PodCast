import * as Types from './action-types';

export const navigateTo = (section)=>{
   return {
       type:Types.NAVIGATION_CHANGED,
       payload:section
   }
}