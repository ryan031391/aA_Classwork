require_relative 'questionsdatabase.rb'

class Users

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

end