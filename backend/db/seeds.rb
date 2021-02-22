Cuisine.destroy_all
Post.destroy_all

american = Cuisine.create({name: "American"})
indian = Cuisine.create({name: "Indian"})
japanese = Cuisine.create({name: "Japanese"})
mexican = Cuisine.create({name: "Mexican"})
italian = Cuisine.create({name: "Italian"})
dessert = Cuisine.create({name: "Dessert"})
other = Cuisine.create({name: "Other"})

Post.create([
   
    {username: "the_vegan_sailor", img_src:"https://i.ytimg.com/vi/nSdz5ln2rME/hqdefault.jpg" , caption: "Leafy greens..duh!🥗💪🏼", cuisine: other},
    {username: "kiki1022", img_src:"https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/120827419_10101000633501076_8133749097129613426_o.jpg?_nc_cat=106&ccb=3&_nc_sid=730e14&_nc_ohc=2nT8F_Zs-bcAX_TR85r&_nc_ht=scontent-ort2-1.xx&oh=b643e065815933ab876bf4a5e7bc3b5f&oe=6054A7AB", caption:"cinnaholic!!", cuisine: dessert },
    {username: "miss_minnie", img_src:"https://s-media-cache-ak0.pinimg.com/736x/60/cb/9d/60cb9dd23fc127f2c793aa543c38251b.jpg" , caption: "Ice cream for lunch today!😜🍦💕", cuisine: dessert},
    {username: "anthony_atl", img_src:"https://potatoonion.com/wp-content/uploads/sites/9/2018/11/Pani-Puri-Delight.jpg" , caption: "my favorite🤤", cuisine: indian},
    {username: "mickey_1111", img_src:"http://clipground.com/images/mickey-mouse-eating-clipart-4.gif", caption: "#throwback to when i was lockdown ready!🥪", cuisine: american},
    {username: "hunny_bear", img_src:"http://3.bp.blogspot.com/-zDak8pI7o-8/Th-gaQSxzCI/AAAAAAAAAMo/Fxvck5oX6mM/s1600/Pooh_Hunny_1_RGB.jpg", caption: "send more honey😥...📸: @tigger_no_1", cuisine: other}, 
    {username: "snoop_dog", img_src:"https://s-media-cache-ak0.pinimg.com/736x/7a/ea/c9/7aeac95d07b73a673ba733277b721dd2--woodstock-snoopy-snoopy-peanuts.jpg", caption: "lunch with my bestie🙌🥰", cuisine: american}
])



