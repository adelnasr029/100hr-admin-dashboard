const Order = require('../models/Order')
module.exports = {
  getOrder: async (req, res) => {
    try{
      const orderedItem = await Order.find({completed: false})
      // console.log(orderedItem)
      // const items = orderedItem.map(el => el.items)
        res.render('order', {orderedItem})
    } catch(err){
        console.log(err)
    }
},
markComplete: async (req, res)=>{
  try{
      await Order.findOneAndUpdate({_id:req.params.id},{
          completed: true
      })
      console.log('Marked Complete')
      res.redirect('/order')
    }catch(err){
      console.log(err)
  }
}
}