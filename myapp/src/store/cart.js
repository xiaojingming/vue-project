import  axios from 'axios';
export default{
    state:{
        collectionList:[],
        deleteList:[],
        datalist:[],
        numObj:{},
    },
    actions:{
        async created(context){
        let {
            data: { data }
          } = await axios.get(`http://114.215.146.121:1911/cart`);
          let datalist=[];
           
               let len = data.length;
               for(var i=0;i<len;i++){
                   let obj = {};
                   let inhas = true;
                   obj.shopname = data[i].shopname;
                   for(var k=0;k<datalist.length;k++){
                       if(obj.shopname == datalist[k].shopname)
                       {
                           inhas = false;
                       }
                   }
                   if(inhas){
                       obj.shopSelected = true;
                       obj.msglist = [];
                       for(var j=i;j<len;j++){
                           if(obj.shopname == data[j].shopname){
                               
                               obj.msglist .push(data[j]);
                           }
                       }
                       datalist.push(obj);
                   }
                  
               }
               window.console.log(datalist);
            //    return datalist;
          context.commit('changeData', datalist)
          window.console.log(data)
        },
        async del(context){
            // window.console.log('fdsfsdsdgfdsg')
            window.console.log('dd',context.state.numObj)
            let obj=context.state.numObj
            let res=await axios.delete('http://114.215.146.121:1911/cart',{data:obj})
            window.console.log(res);
        }
    },
    
    getters:{
        totalPrice(state){
                let sum =0;
                state.datalist.forEach(item=> {
                  item.msglist.forEach(ele=>{
                      if(ele.selected){
                          sum += ele.price*ele.num;
                      }
                  })
                });
                return sum;
              },
        cartLength(state){
        let len =0;
        state.datalist.forEach(item=> {
            len += item.msglist.length;
        });
        return len;
        },
        colLength(state){

             return state.collectionList.length;
          
            },
        payLength(state){
            let payLen =0;
            state.datalist.forEach(item=> {
                item.msglist.forEach(ele=>{
                    if(ele.selected){
                        payLen += 1;
                    }
                })
            });
            return payLen;
        }
    },
    mutations:{
        removeFromCart(state){

            state.datalist.forEach((item) => {
                let dellist = item.msglist.filter(ele=>ele.selected == true);
                item.msglist = item.msglist.filter(ele=>ele.selected == false);
                if(dellist.length !=0){
                    for(var i=0;i<dellist.length;i++){

                        state.deleteList.push(dellist[i]);
                    }
                    
                }
               
            });
            state.datalist = state.datalist.filter(el =>el.msglist.length != 0);
            let numArr = [];
            (state.deleteList).forEach((el)=>{    
                numArr.push(el.id);
            })
            state.numObj={num:numArr};
        },
        changeData (state, obj) {  // store中的数据只能通过commit mutation来改变
            state.datalist = obj
        },
        async addToCellection(state){
            state.datalist.forEach((item) => {
                let collist = item.msglist.filter(ele=>ele.selected == true);
                item.msglist = item.msglist.filter(ele=>ele.selected == false);
                if(collist.length !=0){
                    for(var i=0;i<collist.length;i++){
                        collist[i].shopname = item.shopname;
                        state.collectionList.push(collist[i]);
                    }
                    
                }
 
            });
            state.datalist = state.datalist.filter(el =>el.msglist.length != 0);
            window.console.log(state.collectionList);
            let numArr = [];
            (state.collectionList).forEach((el)=>{    
                numArr.push(el.id);
            })
            state.numObj={num:numArr};
            // let numObj = {num:numArr};
            // let res=await axios.delete('http://localhost:1911/cart',numObj)
            // window.console.log(res);

        },
       
    },
    
}