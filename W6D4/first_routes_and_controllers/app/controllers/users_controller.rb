class UsersController < ApplicationController
    def index
        
        if params[:name]
            user = User.find_by(username: params[:name])
            render json: user
        else
            render json: User.all
        end
    end

    def create
        render json: params
    end

    def show
        begin
            user = User.find(params[:id])
            render json: user
        rescue
            render json: ["User does not exist"], status: :unprocessable_entity
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        begin
            user = User.find(params[:id])
            user.update(user_params)
            redirect_to action: "show"
        rescue
            render json: ["User does not exist"], status: :unprocessable_entity
        end
    end

    def destroy
        begin
            user = User.destroy(params[:id])
            render json: user
        rescue
            render json: ["User does not exist"], status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end