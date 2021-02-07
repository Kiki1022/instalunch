
#http://a.abcnews.com/images/Lifestyle/ht_popeye_foodie_cheesestake_em_160714_4x3_992.jpg
#https://www.pgatour.com/tournament-sites/pga-tour/r060/plan-your-visit/2019/08/19-TC-Foodie-1400x600.jpg
#http://static.oprah.com/images/o2/201102-omag-recipe-salad-949x534.jpg
#https://tse2.mm.bing.net/th?id=OIP.60WsuSlbjOfVm_XBTT-x_QHaFj&pid=Api&P=0&w=223&h=168
#http://thegirlonbloor.com/wp-content/uploads/2015/03/BBQ-Chipotle-Chicken-Burrito-Bowls-7.jpg
#poo#http://3.bp.blogspot.com/-zDak8pI7o-8/Th-gaQSxzCI/AAAAAAAAAMo/Fxvck5oX6mM/s1600/Pooh_Hunny_1_RGB.jpg
#poo2#http://www.everything-mousey-pins.com/assets/images/winnie-pooh-propin-3836353r3rfe5e64yh3.JPG
#minnie#https://s-media-cache-ak0.pinimg.com/736x/60/cb/9d/60cb9dd23fc127f2c793aa543c38251b.jpg
#popeye#https://i.ytimg.com/vi/nSdz5ln2rME/hqdefault.jpg
#mickey#http://clipground.com/images/mickey-mouse-eating-clipart-4.gif

User.destroy_all
Post.destroy_all


pooh = User.create({name: "Pooh Bear"})
popeye = User.create({name: "Popeye"})
minnie = User.create({name:"Minnie"})
mickey = User.create({name:"Mickey"})

Post.create([
    {img_src:"http://www.everything-mousey-pins.com/assets/images/winnie-pooh-propin-3836353r3rfe5e64yh3.JPG" , caption: "honey pot🍯🤗", user: pooh},
    {img_src:"https://i.ytimg.com/vi/nSdz5ln2rME/hqdefault.jpg" , caption: "Leafy greens🥗💪🏼", user: popeye},
    {img_src:"https://i.ytimg.com/vi/nSdz5ln2rME/hqdefault.jpg" , caption: "Icecream🍦💕", user: minnie},
    {img_src:"http://clipground.com/images/mickey-mouse-eating-clipart-4.gif", caption: "Sandwich🥪", user: mickey}
])



