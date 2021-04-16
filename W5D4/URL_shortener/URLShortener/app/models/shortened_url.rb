class ShortenedUrl < ApplicationRecord
    validates :long_url, :short_url,  presence: true, uniqueness: true 


    def self.random_code 
        long_url.map {|url| SecureRandom.urlsafe_base64(url)}
        
    end

end

class SecureRandom
    
   def self.urlsafe_base64(str)
        
   end

end
