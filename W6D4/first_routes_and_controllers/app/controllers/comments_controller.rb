class CommentsController < ApplicationController

    def create
        comment = Comment.new(comment_param)
        if comment.save
            render json: comment
        else
            render json: comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def index
        comments = Comment.all
        user = User.find_by(id: params[:user_id])
        artwork = Artwork.find_by(id: params[:artwork_id])
        if user
            render json: user.comments
        elsif artwork
            render json: artwork.comments
        elsif !params[:user_id] && !params[:artwork_id]
            render json: comments
        else
            render json: ["No such user or artwork"], status: :unprocessable_entity
        end
    end

    def destroy
        begin
            comment = Comment.destroy(params[:id]) #find_by => nil, find => relation 
            render json: comment
        rescue
            render json: ["Comment not found."], status: :unprocessable_entity
        end
    end

    private

    def comment_param
        params.require(:comment).permit(:user_id, :artwork_id, :body)
    end

end
