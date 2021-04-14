require_relative 'questionsdatabase.rb'

class Questions
    attr_accessor :id, :title, :body, :user_id

    def initialize(option)
        @id = option['id']
        @title = option['title']
        @body = option['body']
        @user_id = option['user_id']
    end

    def self.all
        data = QuestionsDatabase.instance.execute(<<-SQL)
        SELECT * FROM questions
        SQL
        data.map {|ele| Questions.new(ele)}
    end

    def self.find_by_id(id)
        self.all.select {|ele| ele.id == id }
    end

end