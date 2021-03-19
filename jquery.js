
window.jQuery = function(selectorOrArrayOrTemplate){
    let elements
    if(typeof selectorOrArrayOrTemplate === 'string'){
        elements =document.querySelectorAll(selectorOrArrayOrTemplate)
    }else if(selectorOrArrayOrTemplate instanceof Array){
        elements = selectorOrArrayOrTemplate
    }
    
    return {
        oldApi:selectorOrArrayOrTemplate.oldApi,
        addClass(className){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this
        },
        find(selector){
            let array =[]
            for(let i=0;i<elements.length;i++){
               const elements2 = Array.from(elements[i].querySelectorAll(selector))
               array=array.concat(elements2) 
            }
            array.oldApi = this
            return jQuery(array)
            
        },
        end(){
            return this.oldApi
        },
        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(null,elements[i],i)
             }
             return this
        },
        parent(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1){
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children(){
            const array = []
            this.each((node)=>{
                array.push(...node.children)
            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        }



    }
}
window.$ = window.jQuery