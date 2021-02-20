class Post < ApplicationRecord
    belongs_to :cuisine
    scope :order_by_created_at, ->{order("created_at DESC")}
    before_save :strftime
          
  def strftime
    self.created_at = self.created_at.strftime("%B %e, %Y at %l:%M %p")
  end

end