class Api::V1::ListtasksController < ApplicationController
    # before_action :find_listtask, only: [:update, :destroy] 
    before_action :find_list, only: [:create, :destroy] 

    def create 
        @listtask = Listtask.new(list_params)
        
        if @listtask.save 
            render json:{listtask: @listtask}, status: 201
        else 
            render json: { error: @listtask.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update 
        
        # @list =  List.find(listtask_params[:list_id])
        # @listtask = list.listTasks.create(listtask_params)

        # debugger
        
        # if @listTask.save 
        #     render json:{list: @list}, status: 201
        # else 
        #     render json: { error: @listtask.errors.full_messages }, status: :not_acceptable
        # end
    end 


    private 

    def listtask_params 
        params.require(:listtask).permit(:id, :task_id, :list_id)
    end 

    # def find_listtask
    #     @listtask = ListTask.find(params[:id])
    # end

    def find_list 
        @list = List.find(params[:list_id])
    end

end
