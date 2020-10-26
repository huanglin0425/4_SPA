var details={
  //接住地址栏中的lid变量的值（比如设置props为true才能这样用）
  props:["lid"],
  template:`<main style="height:800px"> 
   
    <h1 style="color:orange; marginTop:40px" >详情页{{lid}}</h1>
    <h2 v-for="(t,i) of table " :key="i" >{{t}}</h2>
  </main>`,
  data(){
    return{
      table:["吃饭","睡觉","打豆豆" ]
    }

  }
}