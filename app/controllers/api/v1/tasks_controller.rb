class Api::V1::TasksController < ApplicationController
    before_action :find_task, only: [:update, :destroy]
    def index 
        @tasks = @current_user.tasks.all
        render json: @tasks, status: 200
    end  

    def create 
        @task = @current_user.tasks.new(task_params)
        
        if @task.save 
            render json:{task: @task}, status: 201
        else 
            render json: { error: @task.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update

        # unless @task.update(task_params)
            
        #     render json:{errors: @task.errors.full_messages}
        # end

        if @task.update(task_params)
            render json: @task
        else
            render json:{errors: @task.errors.full_messages}
        end
    end

    def destroy
        
        @task.destroy
        render json: {task: @task, result: :ok }
    end

    private 

    def task_params 
        params.require(:task).permit(:id, :title, :details, :completed, :priority, :category, :alert_datetime, :repeat, :user_id)
    end 

    def find_task
        @task = @current_user.tasks.find(params[:id])
    end
end
