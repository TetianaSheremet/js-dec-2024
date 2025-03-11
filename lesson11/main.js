fetch('https://dummyjson.com/carts?limit=50')
    .then(res => res.json())
    .then(({carts})=> {
        for(let cart of carts ){
          let div=  document.createElement('div')

            div.classList.add('mainDiv')
            div.innerText = `Cart Id:${cart.id} `
          for(let product of cart.products){
              let innerDiv= document.createElement('div')
              innerDiv.classList.add('innerDiv')
              let h3=document.createElement('h3')
              h3.innerText=`Product Id: ${product.id}`
              let p= document.createElement('p')
              p.innerText= `title: ${product.title},
                  price:${product.price},
                  quantity: ${product.quantity},
                  total:${product.total},
                  discountPercentage: ${product.discountPercentage},
                  discountedTotal: ${product.discountedTotal}`
              let img=document.createElement('img')
              img.src=product.thumbnail
              innerDiv.appendChild(h3)
              innerDiv.appendChild(p)
              innerDiv.appendChild(img)
              div.appendChild(innerDiv)
          }


         let footerDiv= document.createElement('div')
            footerDiv.classList.add('footerDiv')

            footerDiv.innerText=`Total:${cart.total}
             Discounted Total:${cart.discountedTotal}
             User id:${cart.userId}
             Total products:${cart.totalProducts}
             Total Quantity:${cart.totalQuantity}`



            div.appendChild(footerDiv)
            document.body.appendChild(div)


        }}


    );


//
// fetch('https://dummyjson.com/recipes?limit=50')
//     .then(res => res.json())
//     .then(({recipes})=>{
//       let main=  document.getElementById('main')
//       for(let recipe of recipes){
//           let wrapper=  document.createElement('div');
//           wrapper.classList.add('wrapper');
//
//           for(let key in recipe){
//
//               if(Array.isArray(recipe[key])){
//
//                   let array = recipe[key]
//                   let arrayDiv=document.createElement('div')
//                   arrayDiv.innerText=key
//                   let ul= document.createElement('ul')
//                   for(let property of array ){
//                       let li= document.createElement('li')
//                       li.innerText=property
//
//                       ul.appendChild(li)
//                   }
//                   arrayDiv.appendChild(ul)
//                   wrapper.appendChild(arrayDiv)
//               }
//               else if(key==='name' || key==='id'){
//                   let h2= document.createElement('h2')
//                   h2.innerText= `${key}: ${recipe[key]}`
//                   wrapper.appendChild(h2)
//               }
//
//               else if (key !=='image'){
//                  let p = document.createElement('p')
//                   p.innerText = `${key}: ${recipe[key]}`
//                   wrapper.appendChild(p)
//               }
//           }
//           let image= document.createElement('img');
//           image.src=recipe.image
//
//           wrapper.appendChild(image)
//           main.appendChild(wrapper)
//
//       }
//
//
//
//
//     });
//
//
//
