require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  describe 'presence' do
    # it "should validate presence of username" do
    #   user = User.new(password: "123456")
    #   expect(user.valid?).to be false
    # end
    it { should validate_presence_of(:username) }
  end
  describe 'uniqueness' do
    subject(:Kevin) {
      User.create(username: "Kevin", password: "123456")
    }
    it { should validate_uniqueness_of(:username)}
  end

  describe 'session_token' do
    # FactoryBot.create(:user)
    # it { should validate_presence_of(:session_token)}
    it 'assigns a session token if none given' do
      expect(FactoryBot.create(:user).session_token).not_to be_nil
    end
  end
  describe 'password_encryption' do
    it "does not save passwords to the database" do 
      User.create(username: "Harry Potter", password: "password")
      user = User.find_by(username: "Harry Potter")
      expect(user.password).not_to eq("password")
    end


    it "uses the BCrypt to create password_digest" do
      expect(BCrypt::Password).to receive(:create).with("password")
      user1 = User.new(username: "Harry Potter", password: "password")
    end
  end


end
