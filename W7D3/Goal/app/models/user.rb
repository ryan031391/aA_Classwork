class User < ApplicationRecord
    validates :username, presence: true
    attr_accessor :password

end
