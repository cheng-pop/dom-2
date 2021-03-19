// const api = jQuery('.text')
// api.addClass('red').addClass('blue')

// const x1 = jQuery('.text').find('.child')
// console.log(x1)

$('.text').find('.child').addClass('red').addClass('blue').end().addClass('yellow')


 const x1 = jQuery('.text').find('.child')
 x1.each((div)=>console.log(div))
// console.log(x1)
jQuery('.text').parent().print()
jQuery('.text').children().print()