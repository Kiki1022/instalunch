Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      resources :posts, only: [:create, :show, :index, :destroy]
      resources :cuisines, only: [:index]
    end
  end
end
