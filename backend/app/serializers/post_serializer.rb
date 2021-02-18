class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :img_src, :caption, :created_at, :cuisine_id
  

    def strftime
        self.created_at.strftime("%B %e, %Y at %l:%M %p")
    end
    
end
