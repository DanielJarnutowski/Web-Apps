class Website < ApplicationRecord
  belongs_to :Dan
    validates :url, length: { maximum: 140 }
end
