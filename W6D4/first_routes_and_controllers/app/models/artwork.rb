class Artwork < ApplicationRecord
    validates :title, :image_url, :artist_id, presence: true
    validates :title, uniqueness: { scope: :artist_id}

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    has_many :artwork_shares,
        foreign_key: :artwork_id,
        class_name: :ArtWorkShare,
        dependent: :destroy

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer

    has_many :comments,
        foreign_key: :artwork_id,
        class_name: :Comment,
        dependent: :destroy
        
end
