class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  def index

    @posts = Post.all.order_by_created_at
   
    render json: PostSerializer.new(@posts)
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    end
  end

  def destroy
    @post.destroy
    render json: @post
  end

  private
   
    def set_post
      @post = Post.find(params[:id])
    end


    def post_params
      params.require(:post).permit( :username, :img_src, :caption, :created_at, :cuisine_id)
    end

   
end
