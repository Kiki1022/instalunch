Cuisine.destroy_all
Post.destroy_all

american = Cuisine.create({name: "American"})
indian = Cuisine.create({name: "Indian"})
japanese = Cuisine.create({name: "Japanese"})
mexican = Cuisine.create({name: "Mexican"})
italian = Cuisine.create({name: "Italian"})
dessert = Cuisine.create({name: "Dessert"})
other = Cuisine.create({name: "Other"})

# pooh = User.create({name: "hunny_bear"})
# popeye = User.create({name: "the_vegan_sailor"})
# minnie = User.create({name:"miss_minnie"})
# mickey = User.create({name:"mickey_1111"})
# snoopy = User.create({name:"snoop_dog"})

Post.create([
    {username: "hunny_bear", img_src:"http://images.says.com/uploads/story_source/source_image/570717/06e6.jpg" , caption: "🍯🤗yummy in my tummy! 📸: @tigger_no_1", cuisine: other},
    {username: "the_vegan_sailor", img_src:"https://i.ytimg.com/vi/nSdz5ln2rME/hqdefault.jpg" , caption: "Leafy greens..duh!🥗💪🏼", cuisine: other},
    {username: "miss_minnie", img_src:"https://s-media-cache-ak0.pinimg.com/736x/60/cb/9d/60cb9dd23fc127f2c793aa543c38251b.jpg" , caption: "Ice cream for lunch today!😜🍦💕", cuisine: dessert},
    {username: "mickey_1111", img_src:"http://clipground.com/images/mickey-mouse-eating-clipart-4.gif", caption: "#throwback to when i was lockdown ready!🥪", cuisine: american}, 
    {username: "hunny_bear", img_src:"http://3.bp.blogspot.com/-zDak8pI7o-8/Th-gaQSxzCI/AAAAAAAAAMo/Fxvck5oX6mM/s1600/Pooh_Hunny_1_RGB.jpg", caption: "send more honey 😥", cuisine: other}, 
    {username: "snoop_dog", img_src:"https://s-media-cache-ak0.pinimg.com/736x/7a/ea/c9/7aeac95d07b73a673ba733277b721dd2--woodstock-snoopy-snoopy-peanuts.jpg", caption: "lunch with my bestie🙌🥰", cuisine: american}
])



