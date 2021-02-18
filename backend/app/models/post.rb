class Post < ApplicationRecord
    #belongs_to :user
    belongs_to :cuisine

    scope :order_by_created_at, ->{order("created_at DESC")}
   
    
    def strftime
        self.created_at.strftime("%B %e, %Y at %l:%M %p")
    end
    
  

end