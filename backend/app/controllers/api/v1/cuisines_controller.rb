class Api::V1::CuisinesController < ApplicationController
    
    def index
        cuisines = Cuisine.all
        render json: CuisineSerializer.new(cuisines)
    end
end
