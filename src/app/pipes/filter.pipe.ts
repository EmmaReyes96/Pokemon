import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any, text: any): any {
    const resultPost = [];
    for(const post of array){
      if(post.name){
        if(post.name.indexOf(text.toLowerCase()) > -1){
          resultPost.push(post);
        };
      }else if(post.pokemon){
        if(post.pokemon.name.indexOf(text.toLowerCase()) > -1){
          resultPost.push(post);
        };
      }
    };
    return resultPost;
  }
}
