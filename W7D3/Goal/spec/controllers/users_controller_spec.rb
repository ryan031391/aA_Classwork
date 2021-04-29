require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    
    describe "GET #new" do
        it "renders the new user template" do
            get :new 
            expect(response).to render_template(:new)
        end
    end

    describe "POST #create" do
        let(:user_params) do
            {user: {username: "Kevin2", password: "123456"}}
        end
        
        let(:invalid_user_params) do
            {user: {useranme: "banana", password: "123"}}
        end

        context "with valid params" do
            it "redirect to the user show page" do
                post :create, params: user_params
                user = User.find_by(username: "Kevin2")
                expect(response).to redirect_to(user_url(user))
            end
        end

        context "with invalid params" do
            it "render new template with error" do
                post :create, params: invalid_user_params
                expect(response).to render_template(:new)
                expect(flash[:errors]).to be_present
            end
        end
    end

end
