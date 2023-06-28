class Api::V1::ContactsController < ApplicationController
    before_action :find_contact, only: [:update, :show, :destroy]
    def index 
        @contacts = @current_user.contacts.all
        render json: @contacts, status: 200
    end  

    def show 
        if @contact 
            render json: @contact
        else
            render json:{errors: @contact.errors.full_messages}
        end
    end

    def create 
        @contact = @current_user.contacts.new(contact_params)

        if @contact.save 
            render json:{contact: ContactSerializer.new(@contact)}, status: 201
        else 
            render json: { error: @contact.errors.full_messages }, status: :not_acceptable
        end
    end 

    def update

        if @contact.update(contact_params)
            render json: @contact
        else
            render json:{errors: @contact.errors.full_messages}
        end
    end

    def destroy
        
        @contact.destroy
        render json: {contact: @contact, result: :ok }
    end

    private 

    def contact_params 
        params.require(:contact).permit(:id, :first_name, :last_name, :middle_name, :email, :company, :job_title, :birthday, :user_id)
    end 

    def find_contact
        @contact = @current_user.contacts.find(params[:id])
    end
end