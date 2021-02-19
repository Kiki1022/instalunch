class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :img_src, :caption, :created_at, :cuisine_id, :cuisine
  belongs_to :cuisine
 
end
