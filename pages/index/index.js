const app = getApp()

Page({
  data: {
    url: "https://mingtongct.com/",
    part: -1
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
    this.partTiming()
  },
  partTiming(){
    const that = this;
    setInterval(function(){
      let num = 0;
      if(that.data.part < 4){
        num = that.data.part + 1
      }
      that.setData({
        part: -1
      })
      setTimeout(() => {
        that.setData({
          part: num
        })
      }, 500);
      
      console.log(that.data.part)
    }, 1500);
    
  }
})
