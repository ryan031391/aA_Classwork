class ArtworksharesController < ApplicationController
    def index
        render json: ArtWorkShare.all
    end

    def create
        render json: params
    end

    def show
        begin
            artwork = ArtWorkShare.find(params[:id])
            render json: artwork
        rescue
            render json: ["Artwork does not exist"], status: :unprocessable_entity
        end
    end

    def create
        artwork = ArtWorkShare.new(artwork_params)
        if artwork.save
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        begin
            artwork = ArtWorkShare.find(params[:id])
            artwork.update(artwork_params)
            redirect_to action: "show"
        rescue
            render json: ["Artwork does not exist"], status: :unprocessable_entity
        end
    end

    def destroy
        begin
            artwork = ArtWorkShare.destroy(params[:id])
            render json: artwork
        rescue
            render json: ["Artwork does not exist"], status: :unprocessable_entity
        end
    end

    private

    def artwork_params
        params.require(:artworkshare).permit(:artwork_id, :viewer_id)
    end
end
