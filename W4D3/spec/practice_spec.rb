require 'practice'
require 'rspec'

describe '#remove_dups' do
    it 'method should remove duplicate from the array.' do 
        expect([1, 2, 1, 3, 3].remove_dups ).to eq([1, 2, 3])
    end
end

describe '#two_sum' do 
    it 'finds all pairs of positions where the elements at those positions sum to zero' do
        expect([-1, 0, 2, -2, 1].two_sum).to eq([[0,4], [2, 3]])
    end
end