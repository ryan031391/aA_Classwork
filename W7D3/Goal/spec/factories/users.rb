FactoryBot.define do
  factory :user do
    username { Faker::Name.name}
    password { Faker::Internet.password(min_length: 6)}
    
  end
end
