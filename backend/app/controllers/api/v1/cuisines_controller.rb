class CuisinesController < ApplicationController::API
    
    
    
    def index
        cuisines = Cuisine.all
        render json: cuisines
    end
end
