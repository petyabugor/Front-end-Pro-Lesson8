let json1 = '{"name": "Alex", "age": "30", "cart":  [{"name":"product1", "price":""},{"name":"product2", "price":"70"}] }'
let json2 = '{"name": "Jhon", "age": "30", "cart":  [{"name":"product1", "price":"100"},{"name":"product2", "price":"70"}] }'
let json3 = '{"name": "Jhon", "age": "30", "cart":  {"name":"product1", "price":"200"} }'


//1)
function parse(object){
  try{
  let user =JSON.parse(object)
  if(!user.cart[0].price)
    throw new SyntaxError("Данные неполны")
    console.log(user.cart[0].price)
  } catch(error) {
    console.log(error.message)
  }
}
parse(json1)

//2)
function parse2(object){
  let user =JSON.parse(object)
  if(user?.cart[0]?.price){
  console.log(user?.cart[0]?.price)
} else{
  console.log('Произошла ошибка')}
}
parse2(json2)


//3)
function parse3(object){
  let user = JSON.parse(object)
  if(user && user.cart[0] && user.cart[0].price){
  console.log(user.cart[0].price)
  } else{
    console.log('Произошла ошибка')
  }
}
parse3(json3)


