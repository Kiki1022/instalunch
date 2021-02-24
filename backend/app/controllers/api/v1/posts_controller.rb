class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]



  def index
   # binding.pry
    @posts = Post.all.order_by_created_at
    # options = {
    #   include: [:cuisine]
    # }
    #render json: @posts
    render json: PostSerializer.new(@posts)
  end

  def show
    render json: @post
  end

  def create
    #binding.pry
    @post = Post.new(post_params)
    if @post.save
      #binding.pry
      render json: @post
      #binding.pry
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  # def update
  #   if @post.update(post_params)
  #     render json: @post
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  def destroy
    @post.destroy
    render json: @post
  end

  private
   
    def set_post
      @post = Post.find(params[:id])
    end


    def post_params
     #binding.pry
      params.require(:post).permit( :username, :img_src, :caption, :created_at, :cuisine_id)
    end

   
end
