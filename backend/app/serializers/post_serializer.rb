class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :img_src, :caption, :created_at, :cuisine_id, :cuisine
  belongs_to :cuisine
   #before_action :strftime
        
  # def strftime
  #   self.created_at.strftime("%B %e, %Y at %l:%M %p")
  # end
      
  
end
