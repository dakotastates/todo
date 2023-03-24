class Api::V1::ListsController < ApplicationController
    before_action :find_list, only: [:update, :destroy]
    def index 
        @lists = @current_user.lists.all
        render json: @lists, status: 200
    end  

    def create 
        @list = @current_user.lists.new(list_params)
        
        if @list.save 
            render json:{list: @list}, status: 201
        else 
            render json: { error: @list.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update

        if @list.update(list_params)
            render json: @list
        else
            render json:{errors: @list.errors.full_messages}
        end
    end 

    def destroy
        @list.destroy
        render json: {list: @list, result: :ok }
    end

    private 

    def list_params 
        params.require(:list).permit(:id, :name, :user_id)
    end 

    def find_list
        @list = @current_user.lists.find(params[:id])
    end
end
