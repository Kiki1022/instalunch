class Post < ApplicationRecord
    #validates :username, :img_src, :caption, presence: true
    belongs_to :cuisine
    scope :order_by_created_at, ->{order("created_at DESC")}
   
          
    def created_at
        attributes['created_at'].strftime("%B %e, %Y at %l:%M %p")
      end

end