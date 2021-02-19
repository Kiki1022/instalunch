class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
 

  # GET /posts
  def index
    @posts = Post.all.order_by_created_at
    # options = {
    #   include: [:user]
    # }
    #render json: @posts
    render json: PostSerializer.new(@posts)
  end

  #GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
  
    @post = Post.new(post_params)
    if @post.save
      render json: @post, status: :created, location: @post
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
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.

    def post_params
      params.require(:post).permit(:username, :img_src, :caption, :created_at, :cuisine_id, :cuisine_name)
    end

   
end
