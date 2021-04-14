require_relative 'questionsdatabase.rb'

class Users
    attr_accessor :id, :fname, :lname

    def initialize(option)
        @id = option['id']
        @fname = option['fname']
        @lname = option['lname']
    end

    def self.all
        data = QuestionsDatabase.instance.execute(<<-SQL)
        SELECT * FROM users
        SQL
        data.map {|ele| Users.new(ele)}
    end

    def self.find_by_id(id)
        self.all.select {|ele| ele.id == id }
    end

end