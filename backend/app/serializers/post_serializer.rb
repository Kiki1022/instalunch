class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :img_src, :caption, :created_at, :user_id, :user
  belongs_to :user
end
