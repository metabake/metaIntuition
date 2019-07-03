
// try to make each file require depps it needs

declare var _start:any
declare var depp:any
declare var $:any
declare var disE1:any
declare var httpRPC:any

depp.require(['jquery'], spin)
var spinDiv = `
   <div class="centerSpin" id='spin'>
      <div class="spinner-border"></div>
   </div>`
function spin() {
   $('body').append( spinDiv )
}
function spinStop() {
   $('#spin').remove()
}
setTimeout(function() {
   spinStop()
}, 2000)


var tableData = [
   {id:1, name:'Mary May', age:'1', col:'blue' },
   {id:2, name:'Christine Lobowski', age:'42', col:'green'},
   {id:3, name:'Brendon Philips', age:'125', col:'orange' },
   {id:4, name:'Margret Marmajuke', age:'16', col:'yellow' },
]

disE1('gotData', tableData)

var rpc
depp.require(['RPC','jquery', 'DOM', 'Uri'], setup)
function setup() {

   var pro = window.location.protocol
   pro  = pro.replace(':','')
   var host = window.location.hostname
   var port = window.location.port
   rpc = new httpRPC(pro, host, 8888)
   
   var prom = rpc.invoke('api', 'CRUDPg', 'selectAll', {a:5, b:2})
   prom.then(function(resp) {
      console.log(resp)
   }).catch(function (err) {
      console.log('err', err)
    })

   $('#but1').click(function(evt){
      console.log('but1')
      $('#but1').blur()
   })

}//()

console.log('data in flight', Date.now() - _start)

//button to validate 

