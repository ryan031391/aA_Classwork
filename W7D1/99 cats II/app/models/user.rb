class User < ApplicationRecord
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    before_validation :ensure_session_token

    has_many :requests,
        foreign_key: :requester_id,
        class_name: :CatRentalRequest

    def password
        @password
    end

    def password=(password)
        self.password_digest= BCrypt::Password.create(password)
        @password = password
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64

        self.save!

        self.session_token
    end

    def is_password?(password)
        password_obj = BCrypt::Password.new(self.password_digest)

        password_obj.is_password?(password)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        if user && user.is_password?(password)
            return user
        else
            return allow_nil
        end
    end

    def owns_cat?(cat)
        cat.user_id == self.id
    end
    
    has_many :cats,
        foreign_key: :user_id,
        class_name: :Cat

end
