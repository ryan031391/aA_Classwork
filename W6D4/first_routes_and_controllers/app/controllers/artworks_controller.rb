class ArtworksController < ApplicationController
    def index
        # debugger
        # artwork = Artwork.find_by(params[:user_id])
        user = User.find_by(id: params[:user_id])
        artwork = user.artworks
        shared_artworks = user.shared_artworks
        render json: {"artwork"=>artwork, "shared_artworks"=>shared_artworks}
    end

    def create
        render json: params
    end

    def show
        begin
            artwork = Artwork.find(params[:id])
            render json: artwork
        rescue
            render json: ["Artwork does not exist"], status: :unprocessable_entity
        end
    end

    def create
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        begin
            artwork = Artwork.find(params[:id])
            artwork.update(artwork_params)
            redirect_to action: "show"
        rescue
            render json: ["Artwork does not exist"], status: :unprocessable_entity
        end
    end

    def destroy
        begin
            artwork = Artwork.destroy(params[:id])
            render json: artwork
        rescue
            render json: ["Artwork does not exist"], status: :unprocessable_entity
        end
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end


end
