class UsersController < ApplicationController
    before_action :require_logout, only: [:new, :create]
    # before_action :require_login, only: [:destroy]

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(users_params)

        if @user.save!
            login(@user)
            redirect_to user_url(@user)
        else
            render :new
        end
    end


    private
    def users_params
        params.require(:users).permit(:usernmae, :password)
    end
end
