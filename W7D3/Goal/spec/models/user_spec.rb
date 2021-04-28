require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  describe 'validations' do
    # it "should validate presence of username" do
    #   user = User.new(password: "123456")
    #   expect(user.valid?).to be false
    # end
    it { should validate_presence_of(:username) }
  end



end
