require 'action_view'

class Cat < ApplicationRecord
    COLORS = ["red", "blue", "yellow", "grey", "white"]
    validates :birth_date, :color, :name, :sex, :description, presence: true
    validates :color, inclusion: {in: COLORS}
    validates :sex, inclusion: {in: %w(M F)}

    include ActionView::Helpers::DateHelper

    def age

        time_ago_in_words(birth_date)

    end
end
# kitty = Cat.new(birth_date: '2015/01/20',color: 'blue', name: 'kitty', sex: 'F',description: 'hi')