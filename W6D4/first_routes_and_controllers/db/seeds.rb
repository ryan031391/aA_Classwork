# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ApplicationRecord.transaction do 

    User.destroy_all
    Artwork.destroy_all
    ArtWorkShare.destroy_all

    user1 = User.create!(username: 'ryan')
    user2 = User.create!(username: 'linda')
    user3 = User.create!(username: 'william')

    artwork1 = Artwork.create!(title: 'Starry Night', image_url: "night.com", artist_id: "#{user1.id}")
    artwork2 = Artwork.create!(title: 'The Blue House', image_url: "house.com", artist_id: "#{user2.id}")
    artwork3 = Artwork.create!(title: 'Mona Lisa', image_url: "mona.com", artist_id: "#{user3.id}")

    shares1 = ArtWorkShare.create!(artwork_id: "#{artwork1.id}", viewer_id:"#{user1.id}")
    shares2 = ArtWorkShare.create!(artwork_id: "#{artwork2.id}", viewer_id:"#{user2.id}")
    shares3 = ArtWorkShare.create!(artwork_id: "#{artwork3.id}", viewer_id:"#{user2.id}")

    comment1 = Comment.create!(user_id: "#{user1.id}", artwork_id: "#{artwork2.id}", body: "Awesome!")
    comment2 = Comment.create!(user_id: "#{user3.id}", artwork_id: "#{artwork2.id}", body: "Terrible!")

end