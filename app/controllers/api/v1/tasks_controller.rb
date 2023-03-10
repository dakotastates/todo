class Api::V1::TasksController < ApplicationController
    def index 
        @tasks = Task.all
        render json: @tasks, status: 200
    end
end
