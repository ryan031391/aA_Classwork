require_relative 'questionsdatabase.rb'

class Replies
    attr_accessor :id, :question_id, :user_id, :body, :parent_id

    def initialize(option)
        @id = option['id']
        @question_id = option['question_id']
        @user_id = option['user_id']
        @body = option['body']
        @parent_id = option['parent_id']
    end

    def self.all
        data = QuestionsDatabase.instance.execute(<<-SQL)
        SELECT * FROM replies
        SQL
        data.map {|ele| Replies.new(ele)}
    end

    def self.find_by_id(id)
        self.all.select {|ele| ele.id == id }
    end

    def self.find_by_user_id(id)
        self.all.select {|ele| ele.user_id == id }
    end

    def self.find_by_question_id(id)
        self.all.select {|ele| ele.question_id == id }
    end

end