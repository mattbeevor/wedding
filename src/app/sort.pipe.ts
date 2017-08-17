import { Pipe, PipeTransform } from '@angular/core';
import {Namelist} from "./namelist"

import {Response} from "./response"
import {Sortby} from "./sortby"



@Pipe({
  name: 'sort', pure: false
})



export class SortPipe implements PipeTransform {



  transform(array: Array<Response>, args: Sortby): Array<Response> {
    console.log(array)
    console.log(args)




    function comparelastname(a,b) {
      if (a.lastname.a < b.lastname.a)
        return -1;
      if (a.lastname.a > b.lastname.a)
        return 1;
      return 0;
    }

    function comparedate(a,b) {
      if (a.sortdate > b.sortdate)
        return -1;
      if (a.sortdate < b.sortdate)
        return 1;
      return 0;
    }

    function comparediet(a) {
      if (a.diet!=="")
        return a
    }

    function comparemusic(a) {
      if (a.music!=="")
        return a
    }

    function comparecoming(a) {
      if (a.answer)
        return a
    }

    function comparenotcoming(a) {
      if (!a.answer)
        return a
    }



    if(array!==null){

    if(args.date==true){
      array.sort(comparedate);
    }

    if(args.lastname==true){
      array.sort(comparelastname);
    }


    if(args.diet==true){
      array=array.map(comparediet);
    }

    if(args.coming==true){
      array=array.map(comparecoming);
    }
    
    if(args.notcoming==true){
      array=array.map(comparenotcoming);
    }

    if(args.music==true){
      array=array.map(comparemusic);
    }

    }

    return array;
  }
}
