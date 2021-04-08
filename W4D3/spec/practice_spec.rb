require 'practice'
require 'rspec'

describe '#remove_dups'
    it 'method should remove duplicate from the array.' do 
        expect ([1, 2, 1, 3, 3].uniq).to eq([1, 2, 3])
    end
end